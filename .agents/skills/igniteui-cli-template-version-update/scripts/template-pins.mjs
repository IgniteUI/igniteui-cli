#!/usr/bin/env node
// Inventory, classify and (with --apply) update the package pins in igniteui-cli templates.
// Usage: node template-pins.mjs [--framework angular,react,webcomponents,jquery|all] [--package a,b]
//          [--target pkg@version]... [--all-deps] [--json] [--apply]
import { execSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, relative, sep } from "node:path";

const root = execSync("git rev-parse --show-toplevel", { encoding: "utf8" }).trim();
let semver;
try {
	semver = createRequire(join(root, "package.json"))("semver");
} catch {
	console.error("semver not found in the repository's node_modules; run `yarn install` first.");
	process.exit(1);
}

const args = process.argv.slice(2);
const values = (name) => args.flatMap((a, i) => (a === name && args[i + 1] ? args[i + 1].split(",") : []));
const flag = (name) => args.includes(name);

const ROOTS = {
	angular: "packages/igx-templates",
	react: "packages/cli/templates/react",
	webcomponents: "packages/cli/templates/webcomponents",
	jquery: "packages/cli/templates/jquery"
};
const PRIMARY = ["angular", "react", "webcomponents"];
const fwArg = values("--framework");
// "all" means the primary frameworks; jQuery is included only when named.
const frameworks = !fwArg.length ? PRIMARY : [...new Set(fwArg.flatMap((f) => (f === "all" ? PRIMARY : [f])))];
const unknownFw = frameworks.filter((f) => !ROOTS[f]);
if (unknownFw.length) {
	console.error(`Unknown framework: ${unknownFw.join(", ")}. Use ${Object.keys(ROOTS).join(", ")} or all (= ${PRIMARY.join(", ")}; Blazor has no npm pins).`);
	process.exit(1);
}
const onlyPackages = values("--package");
const targets = Object.fromEntries(values("--target").map((t) => {
	const at = t.lastIndexOf("@");
	return [t.slice(0, at), t.slice(at + 1)];
}));
const allDeps = flag("--all-deps");
const asJson = flag("--json");
const apply = flag("--apply");

const isIgnite = (name) => /^(ignite-ui$|igniteui-|@infragistics\/|@igniteui\/)/.test(name) && name !== "igniteui-cli";
const EXCLUDED = /(^|\/)(node_modules|docs_baseline)\/|\/ai-config\/files\/skills\//;
const SPEC = /([_-]spec|Spec)\.ts$/;

const resolveConsts = Object.fromEntries(
	[...readFileSync(join(root, "packages/core/update/package-resolve.ts"), "utf8").matchAll(/export const (\w+) = "([^"]+)"/g)]
		.map((m) => [m[1], m[2]])
);

function walk(dir, out = []) {
	for (const name of readdirSync(dir)) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) {
			if (name !== "node_modules") walk(p, out);
		} else out.push(p);
	}
	return out;
}

const LITERAL = /(["'`])((?:@[a-z0-9][\w.-]*\/)?[a-z0-9][\w.-]*)@([~^]?\d[\w.+-]*)\1/g;
const COMPUTED = /`\$\{(?:resolvePackage\()?(\w+)\)?\}@([~^]?\d[\w.+-]*)`/g;
const pins = [];

// The primary roots are always scanned so packages shared by all of them are known, even when not selected.
for (const fw of new Set([...frameworks, ...PRIMARY])) {
	for (const file of walk(join(root, ROOTS[fw]))) {
		const rel = relative(root, file).split(sep).join("/");
		if (EXCLUDED.test(rel)) continue;
		const inFiles = rel.includes("/files/");
		const lines = readFileSync(file, "utf8").split(/\r?\n/);
		const add = (i, name, range, kind, token) => pins.push({ fw, file: rel, line: i + 1, name, range, kind, token });
		if (inFiles && rel.endsWith("/package.json")) {
			let section = null;
			lines.forEach((line, i) => {
				const sec = line.match(/^\s*"(dependencies|devDependencies|peerDependencies)"\s*:/);
				if (sec) return void (section = sec[1]);
				if (/^\s*}/.test(line)) return void (section = null);
				const m = section && line.match(/"([^"]+)"\s*:\s*"([~^]?\d[^"]*)"/);
				if (m) add(i, m[1], m[2], "manifest", m[0]);
			});
		} else if (!inFiles && rel.endsWith(".ts") && !SPEC.test(rel)) {
			lines.forEach((line, i) => {
				for (const m of line.matchAll(LITERAL)) add(i, m[2], m[3], "code", m[0]);
				for (const m of line.matchAll(COMPUTED)) add(i, resolveConsts[m[1]] ?? `\${${m[1]}}`, m[2], "computed", m[0]);
			});
		}
	}
}

const inScope = pins.filter((p) => frameworks.includes(p.fw) && (allDeps || isIgnite(p.name)) &&
	(!onlyPackages.length || onlyPackages.includes(p.name)));

let registry = "https://registry.npmjs.org/";
try {
	registry = execSync("npm config get registry", { encoding: "utf8" }).trim().replace(/\/?$/, "/");
} catch { /* default registry */ }

const cache = new Map();
function fetchJson(path, abbreviated) {
	if (!cache.has(path)) {
		cache.set(path, fetch(registry + path, {
			headers: abbreviated ? { accept: "application/vnd.npm.install-v1+json" } : {}
		}).then((r) => (r.ok ? r.json() : { error: `HTTP ${r.status}` })).catch((e) => ({ error: e.message })));
	}
	return cache.get(path);
}
const encode = (name) => name.replace("/", "%2F");
async function packument(name) {
	const body = await fetchJson(encode(name), true);
	if (body.error) return body;
	return { latest: body["dist-tags"]?.latest, versions: Object.keys(body.versions || {}) };
}
async function peersOf(name, version) {
	const body = await fetchJson(`${encode(name)}/${version}`, false);
	return body.error ? body : { peers: body.peerDependencies || {} };
}

const names = [...new Set(inScope.map((p) => p.name))].sort();
const meta = Object.fromEntries(await Promise.all(names.map(async (n) => [n, await packument(n)])));

const prefixOf = (range) => range.match(/^[~^]/)?.[0] ?? "";
function classify(range, target, versions) {
	const resolved = semver.maxSatisfying(versions, range);
	if (!resolved) return { status: "no-match", resolved };
	if (semver.satisfies(target, range)) return { status: "current", resolved };
	const min = semver.minVersion(range);
	if (semver.lt(target, min)) return { status: "downgrade", resolved };
	const breaking = semver.major(target) !== min.major || (min.major === 0 && semver.minor(target) !== min.minor);
	return { status: breaking ? "major" : semver.diff(min, target) === "patch" ? "patch" : "minor", resolved };
}

for (const p of inScope) {
	const m = meta[p.name];
	if (m.error || !m.latest) {
		Object.assign(p, { status: "error", error: m.error ?? "no latest tag" });
		continue;
	}
	p.target = targets[p.name] ?? m.latest;
	if (!m.versions.includes(p.target)) {
		Object.assign(p, { status: "missing-target" });
		continue;
	}
	Object.assign(p, classify(p.range, p.target, m.versions));
	if (isIgnite(p.name) && (p.status === "patch" || p.status === "minor")) p.newRange = prefixOf(p.range) + p.target;
	if (p.status === "current" && prefixOf(p.range) === "^" && semver.gt(p.target, semver.minVersion(p.range))) p.raisable = true;
}

const proceeds = (p) => p.status === "patch" || p.status === "minor";
const updating = (p) => isIgnite(p.name) && proceeds(p);
const rangeAfter = (p) => (updating(p) ? p.newRange : p.range);
function stop(p, status, stopReason) {
	Object.assign(p, { status, stopReason });
	delete p.newRange;
}

// A package pinned in every primary framework is updated only when all of them are selected or it is named,
// so a single-framework run does not make the frameworks diverge.
const allPrimary = PRIMARY.every((fw) => frameworks.includes(fw));
const named = (name) => onlyPackages.includes(name) || name in targets;
for (const p of inScope.filter(updating)) {
	if (allPrimary || named(p.name) || !PRIMARY.every((fw) => pins.some((x) => x.fw === fw && x.name === p.name))) continue;
	stop(p, "shared-skip", `pinned in ${PRIMARY.join(", ")}: select all three or name it`);
}

async function findPeerConflicts() {
	const found = [];
	const checks = new Map();
	// The "after" state covers every Ignite UI pin in a framework with an update, selected by --package or not,
	// so an updated peer is checked against the dependents it leaves unchanged. "changed" marks a dependent that moves.
	const fwUpdating = new Set(inScope.filter(updating).map((p) => p.fw));
	for (const d of pins.filter((x) => frameworks.includes(x.fw) && isIgnite(x.name))) {
		const pm = await packument(d.name);
		const resolved = pm.error ? undefined : semver.maxSatisfying(pm.versions, d.range);
		if (resolved && inScope.includes(d)) {
			checks.set(`${d.fw}|${d.name}|${resolved}|current`, { fw: d.fw, name: d.name, version: resolved, when: "current" });
		}
		if (!fwUpdating.has(d.fw)) continue;
		if (pm.error) {
			found.push({ fw: d.fw, name: d.name, version: d.range, when: "after", changed: false, error: `${d.name} lookup failed: ${pm.error}` });
			continue;
		}
		const version = updating(d) ? d.target : resolved;
		if (!version) continue;
		const key = `${d.fw}|${d.name}|${version}|after`;
		const changed = updating(d) || !!checks.get(key)?.changed;
		checks.set(key, { fw: d.fw, name: d.name, version, when: "after", changed });
	}
	// A failed lookup leaves the peers unchecked; it is reported as a conflict with an error so an update fails closed.
	for (const c of checks.values()) {
		const { peers, error } = await peersOf(c.name, c.version);
		if (error) {
			found.push({ ...c, error: `${c.name}@${c.version} lookup failed: ${error}` });
			continue;
		}
		for (const [peer, peerRange] of Object.entries(peers)) {
			for (const pin of pins.filter((x) => x.fw === c.fw && x.name === peer)) {
				const pm = await packument(peer);
				const range = c.when === "after" ? rangeAfter(pin) : pin.range;
				// Neither side moves: the state is the current one, reported by the "current" check if in scope.
				if (c.when === "after" && !c.changed && range === pin.range) continue;
				const at ={ peer, peerRange, pin: `${pin.file}:${pin.line}`, pinRange: range, ignitePeer: isIgnite(peer) };
				if (pm.error) {
					found.push({ ...c, ...at, error: `${peer} lookup failed: ${pm.error}` });
					continue;
				}
				const resolved = semver.maxSatisfying(pm.versions, range);
				if (resolved && semver.satisfies(resolved, peerRange, { includePrerelease: true })) continue;
				found.push({ ...c, ...at, resolved });
			}
		}
	}
	return found;
}

// Stops apply to the whole package: one stopped occurrence holds every other occurrence of that package.
// Holding a pin changes the ranges other packages' peers are checked against, so repeat until nothing changes.
// An "after" conflict holds the side that moves: the dependent when it is updated, otherwise the peer whose pin
// changes. An unchanged dependent with unchecked peers holds every update in its framework.
let peerConflicts;
const stopCauses = new Map();
for (let changed = true; changed;) {
	changed = false;
	peerConflicts = await findPeerConflicts();
	for (const c of peerConflicts.filter((x) => x.when === "after")) {
		stopCauses.set(JSON.stringify(c), c);
		const held = c.changed ? (x) => x.name === c.name : c.error && !c.peer ? () => true : (x) => x.name === c.peer;
		for (const p of inScope.filter((x) => x.fw === c.fw && updating(x) && held(x))) {
			if (c.error) stop(p, "error", `peers unchecked: ${c.error}`);
			else stop(p, "peer-stop", `${c.name}@${c.version} needs ${c.peer} ${c.peerRange}, not met by ${c.pin} (${c.pinRange})`);
			changed = true;
		}
	}
	const blockers = {};
	for (const p of inScope) if (!proceeds(p) && p.status !== "current") blockers[p.name] ??= p;
	for (const p of inScope.filter((x) => updating(x) && blockers[x.name])) {
		const b = blockers[p.name];
		stop(p, "package-stop", `${b.status} at ${b.file}:${b.line}`);
		changed = true;
	}
}
// The last pass has no "after" conflicts left; keep the ones that caused a stop.
peerConflicts = [...peerConflicts, ...stopCauses.values()];

const byName = {};
for (const p of inScope) (byName[p.name] ??= []).push(p);
const inconsistencies = Object.entries(byName).flatMap(([name, list]) => {
	const out = [];
	const ranges = [...new Set(list.map((p) => p.range))];
	const prefixes = [...new Set(list.map((p) => prefixOf(p.range) || "exact"))];
	const fws = [...new Set(list.map((p) => p.fw))];
	if (ranges.length > 1) out.push({ name, issue: "different ranges", detail: ranges.join(", ") });
	if (prefixes.length > 1) out.push({ name, issue: "mixed prefixes", detail: prefixes.join(", ") });
	if (fws.length > 1) out.push({ name, issue: "shared across frameworks", detail: fws.join(", ") });
	return out;
});

const applied = [];
if (apply) {
	const byFile = {};
	for (const p of inScope.filter(updating)) (byFile[p.file] ??= []).push(p);
	for (const [file, list] of Object.entries(byFile)) {
		const abs = join(root, file);
		const text = readFileSync(abs, "utf8");
		const eol = text.includes("\r\n") ? "\r\n" : "\n";
		const lines = text.split(/\r?\n/);
		for (const p of list) {
			const at = p.token.lastIndexOf(p.range);
			const next = p.token.slice(0, at) + p.newRange + p.token.slice(at + p.range.length);
			const before = lines[p.line - 1];
			lines[p.line - 1] = before.replace(p.token, next);
			applied.push({ file, line: p.line, name: p.name, from: p.range, to: p.newRange, ok: before !== lines[p.line - 1] });
		}
		writeFileSync(abs, lines.join(eol));
	}
}

const strip = ({ token, ...rest }) => rest;
if (asJson) {
	console.log(JSON.stringify({ registry, frameworks, pins: inScope.map(strip), peerConflicts, inconsistencies, applied }, null, 2));
	process.exit(0);
}

function table(head, rows) {
	const w = head.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i] ?? "").length)));
	const fmt = (r) => r.map((c, i) => String(c ?? "").padEnd(w[i])).join("  ").trimEnd();
	console.log([fmt(head), w.map((n) => "-".repeat(n)).join("  "), ...rows.map(fmt)].join("\n"));
}

console.log(`Frameworks: ${frameworks.join(", ")}${allDeps ? " (all dependencies; non-Ignite UI rows are report-only)" : ""}\n`);
console.log("Peer conflicts");
if (peerConflicts.length) {
	table(["fw", "package@version", "when", "peer", "peer range", "pin range", "resolves to", "pin location"],
		peerConflicts.map((c) => [c.fw, `${c.name}@${c.version}`, c.when, c.peer, c.peerRange, c.pinRange, c.error ?? c.resolved ?? "nothing", c.pin]));
} else console.log("  none");

console.log("\nPins");
table(["status", "package", "range", "target", "new range", "kind", "location"],
	inScope.map((p) => [p.status + (p.raisable ? "*" : ""), p.name, p.range, p.target ?? p.error, p.newRange ?? p.stopReason ?? "", p.kind, `${p.file}:${p.line}`]));
if (inScope.some((p) => p.raisable)) console.log("* current, but the ^ minimum could be raised to the target");

if (inconsistencies.length) {
	console.log("\nInconsistencies");
	table(["package", "issue", "detail"], inconsistencies.map((i) => [i.name, i.issue, i.detail]));
}

if (apply) {
	console.log("\nApplied");
	applied.forEach((a) => console.log(`  ${a.ok ? "updated" : "FAILED "} ${a.file}:${a.line}  ${a.name} ${a.from} -> ${a.to}`));
	if (!applied.length) console.log("  nothing to apply");
}

const counts = inScope.reduce((acc, p) => ((acc[p.status] = (acc[p.status] || 0) + 1), acc), {});
console.log(`\n${inScope.length} pins, ${names.length} packages: ${Object.entries(counts).map(([k, v]) => `${k}=${v}`).join(" ")}`);
