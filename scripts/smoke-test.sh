#!/usr/bin/env bash
#
# End-to-end smoke test: scaffold a project with the locally built CLI, add every
# component template into it, install, and build.
#
#   scripts/smoke-test.sh --help
#
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLI_ENTRY="$ROOT/packages/cli/bin/execute.js"

FRAMEWORKS="angular,react,webcomponents"
PROJECT=""
TEMPLATES=""
ALL_PROJECTS=0
ISOLATE=0
SKIP_BUILD=0
KEEP=0
JOBS=1
OUT="$ROOT/output/smoke"

usage() {
	cat <<'EOF'
Usage: scripts/smoke-test.sh [options]

  -f, --frameworks LIST   comma separated (default: angular,react,webcomponents)
                          jquery and blazor are opt-in, see NOTES
  -p, --project ID        project template to scaffold (default: the framework's own default)
      --all-projects      scaffold+build every project template, skip component adds
      --templates LIST    only these component template ids (fast path)
      --isolate           one project per component template (slow, for bisecting)
      --skip-build        scaffold and add only, no install/build
      --keep              keep the output directory even when everything passes
  -o, --out DIR           work directory (default: output/smoke)
  -j, --jobs N            frameworks to run in parallel (default: 1)
  -h, --help              this text

NOTES
  jquery  13 of its templates pull ignite-ui-full from the Infragistics ProGet feed and
          need credentials; it also has no build script, so only scaffold+add+install run.
  blazor  needs the .NET SDK and has no component templates; only scaffold+dotnet build.

EXAMPLES
  scripts/smoke-test.sh -f angular --templates grid,combo,dock-manager
  scripts/smoke-test.sh
  scripts/smoke-test.sh -f angular --isolate
EOF
}

while [ $# -gt 0 ]; do
	case "$1" in
		-f|--frameworks) FRAMEWORKS="$2"; shift 2;;
		-p|--project) PROJECT="$2"; shift 2;;
		--all-projects) ALL_PROJECTS=1; shift;;
		--templates) TEMPLATES="$2"; shift 2;;
		--isolate) ISOLATE=1; shift;;
		--skip-build) SKIP_BUILD=1; shift;;
		--keep) KEEP=1; shift;;
		-o|--out) OUT="$2"; shift 2;;
		-j|--jobs) JOBS="$2"; shift 2;;
		-h|--help) usage; exit 0;;
		*) echo "Unknown option: $1" >&2; usage >&2; exit 2;;
	esac
done

LOGS="$OUT/logs"
RESULTS="$OUT/results.tsv"
SENTINEL_NAME=".smoke-test-workdir"

die() { echo "$*" >&2; exit 2; }

strip_ansi() { sed $'s/\033\\[[0-9;]*[a-zA-Z]//g'; }

fw_type() {
	case "$1" in
		angular) echo "igx-ts";; react) echo "igr-ts";; webcomponents) echo "igc-ts";;
		jquery) echo "js";; blazor) echo "igb";;
		*) return 1;;
	esac
}

fw_short() {
	case "$1" in
		angular) echo "ng";; react) echo "rc";; webcomponents) echo "wc";;
		jquery) echo "jq";; blazor) echo "bz";;
		*) echo "$1";;
	esac
}

record() { printf '%s\t%s\t%s\t%s\t%s\n' "$1" "$2" "$3" "$4" "$5" >>"$RESULTS"; }

# The CLI logs errors through Util.error and returns without setting an exit code,
# so a clean exit is not proof of success.
log_has_error() {
	grep -Eqi "doesn't exist|is not valid|not supported|not found|^Error: |Error installing|npm error" "$1"
}

count_src_files() {
	[ -d "$1/src" ] && find "$1/src" -type f | wc -l | tr -d ' ' || echo 0
}

# run_cli <cwd> <logfile> <args...>
run_cli() {
	local cwd="$1" log="$2"; shift 2
	(cd "$cwd" && node "$CLI_ENTRY" "$@") >"$log" 2>&1
}

list_component_ids() {
	local dir="$1"
	# a row is one tab then the id; wrapped description lines are indented deeper
	(cd "$dir" && node "$CLI_ENTRY" list 2>/dev/null) | strip_ansi | awk '/^\t[^\t]/ {print $1}'
}

list_project_ids() {
	local fw="$1"
	(cd "$OUT" && node "$CLI_ENTRY" list 2>/dev/null) | strip_ansi | awk -v fw="($fw)" '
		$0 ~ /^[A-Za-z]/ && index($0, fw) { grab = 1; next }
		/^[A-Za-z]/ { grab = 0 }
		grab && /^\t\t/ { sub(/\.\.+.*$/, "", $1); print $1 }
	'
}

# scaffold <framework> <projectTemplate|""> <dirName> -> 0 ok
scaffold() {
	local fw="$1" proj="$2" dir="$3"
	local type log start rc
	type="$(fw_type "$fw")"
	log="$LOGS/$dir-new.log"
	rm -rf "$OUT/$dir"
	start=$SECONDS

	local args=(new "$dir" -f "$fw" -t "$type" --skip-install --skip-git --agents none --assistants none)
	[ -n "$proj" ] && args+=(--template "$proj")

	run_cli "$OUT" "$log" "${args[@]}"
	rc=$?

	if [ $rc -ne 0 ] || log_has_error "$log" || [ ! -f "$OUT/$dir/ignite-ui-cli.json" ]; then
		record "$fw" "new" "${proj:-default}" "FAIL" "$((SECONDS - start))"
		echo "  ✗ new $dir  (see $log)"
		return 1
	fi
	record "$fw" "new" "${proj:-default}" "PASS" "$((SECONDS - start))"
	echo "  ✓ new $dir"

	# project scoped, so the user's global config is left alone
	run_cli "$OUT/$dir" "$LOGS/$dir-config.log" config set disableAnalytics true
	return 0
}

# add_template <framework> <dirName> <templateId> -> 0 ok
add_template() {
	local fw="$1" dir="$2" id="$3"
	local log start before after rc
	log="$LOGS/$dir-add-$id.log"
	before="$(count_src_files "$OUT/$dir")"
	start=$SECONDS

	run_cli "$OUT/$dir" "$log" add "$id" "$id"
	rc=$?
	after="$(count_src_files "$OUT/$dir")"

	if [ $rc -ne 0 ] || log_has_error "$log" || [ "$after" -le "$before" ]; then
		record "$fw" "add" "$id" "FAIL" "$((SECONDS - start))"
		echo "  ✗ add $id  (see $log)"
		return 1
	fi
	record "$fw" "add" "$id" "PASS" "$((SECONDS - start))"
	echo "  ✓ add $id"
	return 0
}

# install_and_build <framework> <dirName> -> 0 ok
install_and_build() {
	local fw="$1" dir="$2"
	local start rc

	if [ "$SKIP_BUILD" -eq 1 ]; then
		record "$fw" "build" "$dir" "SKIP" "0"
		return 0
	fi

	if [ "$fw" = "blazor" ]; then
		start=$SECONDS
		(cd "$OUT/$dir" && dotnet build) >"$LOGS/$dir-build.log" 2>&1
		rc=$?
		[ $rc -eq 0 ] && record "$fw" "build" "$dir" "PASS" "$((SECONDS - start))" \
			|| record "$fw" "build" "$dir" "FAIL" "$((SECONDS - start))"
		return $rc
	fi

	start=$SECONDS
	(cd "$OUT/$dir" && npm install --no-audit --no-fund) >"$LOGS/$dir-install.log" 2>&1
	rc=$?
	if [ $rc -ne 0 ]; then
		record "$fw" "install" "$dir" "FAIL" "$((SECONDS - start))"
		echo "  ✗ npm install  (see $LOGS/$dir-install.log)"
		return 1
	fi
	record "$fw" "install" "$dir" "PASS" "$((SECONDS - start))"
	echo "  ✓ npm install"

	if ! (cd "$OUT/$dir" && node -e "process.exit(require('./package.json').scripts.build ? 0 : 1)") 2>/dev/null; then
		record "$fw" "build" "$dir" "SKIP" "0"
		echo "  - build (no build script)"
		return 0
	fi

	start=$SECONDS
	(cd "$OUT/$dir" && npm run build) >"$LOGS/$dir-build.log" 2>&1
	rc=$?
	if [ $rc -ne 0 ]; then
		record "$fw" "build" "$dir" "FAIL" "$((SECONDS - start))"
		echo "  ✗ npm run build  (see $LOGS/$dir-build.log)"
		return 1
	fi
	record "$fw" "build" "$dir" "PASS" "$((SECONDS - start))"
	echo "  ✓ npm run build"
	return 0
}

run_framework() {
	local fw="$1"
	local short type failed=0 dir ids id proj
	type="$(fw_type "$fw")" || { echo "Unknown framework: $fw" >&2; return 1; }
	short="$(fw_short "$fw")"

	echo ""
	echo "=== $fw ($type) ==="

	if [ "$ALL_PROJECTS" -eq 1 ]; then
		for proj in $(list_project_ids "$fw"); do
			dir="$short-$proj"
			scaffold "$fw" "$proj" "$dir" || { failed=1; continue; }
			install_and_build "$fw" "$dir" || failed=1
		done
		return $failed
	fi

	if [ "$fw" = "blazor" ]; then
		dir="$short-${PROJECT:-default}"
		scaffold "$fw" "$PROJECT" "$dir" || return 1
		install_and_build "$fw" "$dir" || return 1
		return 0
	fi

	if [ "$ISOLATE" -eq 1 ]; then
		dir="$short-probe"
		scaffold "$fw" "$PROJECT" "$dir" || return 1
		if [ -n "$TEMPLATES" ]; then ids="${TEMPLATES//,/ }"; else ids="$(list_component_ids "$OUT/$dir")"; fi
		rm -rf "$OUT/$dir"
		for id in $ids; do
			dir="$short-$id"
			scaffold "$fw" "$PROJECT" "$dir" || { failed=1; continue; }
			add_template "$fw" "$dir" "$id" || { failed=1; continue; }
			install_and_build "$fw" "$dir" || failed=1
		done
		return $failed
	fi

	dir="$short-${PROJECT:-default}"
	scaffold "$fw" "$PROJECT" "$dir" || return 1

	if [ -n "$TEMPLATES" ]; then ids="${TEMPLATES//,/ }"; else ids="$(list_component_ids "$OUT/$dir")"; fi
	if [ -z "$ids" ]; then
		echo "  ! no component templates found for $fw"
	fi
	for id in $ids; do
		add_template "$fw" "$dir" "$id" || failed=1
	done

	install_and_build "$fw" "$dir" || failed=1
	return $failed
}

# --- preflight ---------------------------------------------------------------

if [ ! -f "$ROOT/packages/cli/lib/cli.js" ]; then
	echo "CLI is not built. Run 'npm run build' in $ROOT first." >&2
	exit 1
fi
for bin in node npm; do
	command -v "$bin" >/dev/null || { echo "$bin not found on PATH" >&2; exit 1; }
done
if [[ ",$FRAMEWORKS," == *",blazor,"* ]] && ! command -v dotnet >/dev/null; then
	echo "blazor requested but the .NET SDK is not on PATH" >&2
	exit 1
fi

# The work directory gets wiped below, so refuse anything that is not plainly ours.
[ -n "$OUT" ] || die "--out must not be empty"
mkdir -p "$(dirname "$OUT")" 2>/dev/null || true
[ -d "$(dirname "$OUT")" ] || die "parent of --out does not exist: $(dirname "$OUT")"
OUT="$(cd "$(dirname "$OUT")" && pwd)/$(basename "$OUT")"
OUT="$(printf '%s' "$OUT" | sed 's://*:/:g; s:\(.\)/$:\1:')"
LOGS="$OUT/logs"
RESULTS="$OUT/results.tsv"
SENTINEL="$OUT/$SENTINEL_NAME"

[ "$OUT" = "/" ] && die "--out must not be the filesystem root"
[ "$OUT" = "${HOME:-}" ] && die "--out must not be your home directory"
case "$ROOT/" in
	"$OUT"/*) die "--out must not be the repository or a directory containing it: $OUT";;
esac

if [ -e "$OUT" ]; then
	[ -d "$OUT" ] || die "--out exists and is not a directory: $OUT"
	# ours if sentinelled, or if it still carries the layout of an earlier run
	if [ ! -f "$SENTINEL" ] && [ ! -f "$OUT/results.tsv" ] && [ -n "$(ls -A "$OUT" 2>/dev/null)" ]; then
		die "$OUT is not empty and was not created by this script. Refusing to delete it.
Pass --out to point somewhere else, or remove that directory yourself."
	fi
	rm -rf "$OUT"
fi

mkdir -p "$LOGS"
: >"$SENTINEL"
printf 'framework\tstep\ttemplate\tstatus\tseconds\n' >"$RESULTS"

echo "CLI:  $CLI_ENTRY"
echo "Out:  $OUT"

# --- run ---------------------------------------------------------------------

FW_LIST="${FRAMEWORKS//,/ }"
EXIT=0

if [ "$JOBS" -gt 1 ]; then
	pids=()
	running=0
	for fw in $FW_LIST; do
		run_framework "$fw" & pids+=($!)
		running=$((running + 1))
		if [ "$running" -ge "$JOBS" ]; then wait -n 2>/dev/null || true; running=$((running - 1)); fi
	done
	for pid in "${pids[@]}"; do wait "$pid" || EXIT=1; done
else
	for fw in $FW_LIST; do
		run_framework "$fw" || EXIT=1
	done
fi

# --- report ------------------------------------------------------------------

echo ""
echo "=== summary ==="
awk -F'\t' 'NR > 1 { total[$4]++ } END { for (s in total) printf "%-6s %d\n", s, total[s] }' "$RESULTS"
echo ""
awk -F'\t' 'NR > 1 && $4 == "FAIL" { printf "FAIL  %-14s %-8s %s\n", $1, $2, $3 }' "$RESULTS"
echo ""
echo "Results: $RESULTS"
echo "Logs:    $LOGS"

if [ "$EXIT" -eq 0 ] && [ "$KEEP" -eq 0 ]; then
	echo "Cleaning generated projects (pass --keep to retain them)"
	[ -f "$SENTINEL" ] || die "sentinel missing, refusing to clean $OUT"
	find "$OUT" -mindepth 1 -maxdepth 1 -type d ! -name logs -exec rm -rf {} +
fi

exit "$EXIT"
