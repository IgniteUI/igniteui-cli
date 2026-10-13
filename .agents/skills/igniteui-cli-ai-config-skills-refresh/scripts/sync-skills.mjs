#!/usr/bin/env node
// Mirror skills/ from the Ignite UI framework repos into the ai-config project templates via the GitHub API (gh CLI).
// Read-only unless --apply. Never runs git.
// Usage: node sync-skills.mjs [--framework angular,react,webcomponents,blazor] [--ref <branch|tag|sha>] [--apply] [--json]
import { execFile, execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join, posix, relative, sep } from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const root = execSync("git rev-parse --show-toplevel", { encoding: "utf8" }).trim();

const SOURCES = {
	angular: { repo: "IgniteUI/igniteui-angular", dest: "packages/igx-templates/igx-ts/projects/ai-config/files/skills" },
	react: { repo: "IgniteUI/igniteui-react", dest: "packages/cli/templates/react/igr-ts/projects/ai-config/files/skills" },
	webcomponents: { repo: "IgniteUI/igniteui-webcomponents", dest: "packages/cli/templates/webcomponents/igc-ts/projects/ai-config/files/skills" },
	blazor: { repo: "IgniteUI/igniteui-blazor", dest: "packages/cli/templates/blazor/igb/projects/ai-config/files/skills" }
};

const args = process.argv.slice(2);
const value = (name, def) => {
	const i = args.indexOf(name);
	return i > -1 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : def;
};
const frameworks = value("--framework", Object.keys(SOURCES).join(",")).split(",");
const ref = value("--ref", "master");
const apply = args.includes("--apply");
const asJson = args.includes("--json");

const unknown = frameworks.filter((f) => !SOURCES[f]);
if (unknown.length) {
	console.error(`Unknown framework: ${unknown.join(", ")}. Use ${Object.keys(SOURCES).join(", ")}.`);
	process.exit(1);
}
if (!/^[\w.\-/]+$/.test(ref) || ref.startsWith("-")) {
	console.error(`Invalid ref '${ref}'.`);
	process.exit(1);
}

async function gh(path) {
	const { stdout } = await run("gh", ["api", path], { maxBuffer: 256 * 1024 * 1024 });
	return JSON.parse(stdout);
}

const blobSha = (buf) => createHash("sha1").update(`blob ${buf.length}\0`).update(buf).digest("hex");
function sameAsRemote(buf, sha) {
	if (blobSha(buf) === sha) return true;
	const lf = Buffer.from(buf.toString("binary").replace(/\r\n/g, "\n"), "binary");
	return lf.length !== buf.length && blobSha(lf) === sha;
}

function walk(dir, base = dir, out = []) {
	if (!existsSync(dir)) return out;
	for (const name of readdirSync(dir)) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) walk(p, base, out);
		else out.push(relative(base, p).split(sep).join("/"));
	}
	return out;
}

function pruneEmptyDirs(dir, keep) {
	for (const name of readdirSync(dir)) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) pruneEmptyDirs(p, false);
	}
	if (!keep && !readdirSync(dir).length) rmdirSync(dir);
}

async function pool(items, size, fn) {
	const queue = [...items];
	await Promise.all(Array.from({ length: size }, async () => {
		while (queue.length) await fn(queue.shift());
	}));
}

function validate(files) {
	const issues = [];
	const paths = new Set(Object.keys(files));
	for (const [path, buf] of Object.entries(files)) {
		if (!path.endsWith(".md")) continue;
		const text = buf.toString("utf8");
		if (posix.basename(path) === "SKILL.md") {
			const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
			const folder = posix.basename(posix.dirname(path));
			const name = fm?.[1].match(/^name:\s*["']?([^"'\r\n]+?)["']?\s*$/m)?.[1];
			if (!fm) issues.push({ path, issue: "SKILL.md has no frontmatter" });
			else {
				if (!name) issues.push({ path, issue: "frontmatter has no name" });
				else if (name !== folder) issues.push({ path, issue: `name '${name}' does not match folder '${folder}'` });
				if (!/^description:/m.test(fm[1])) issues.push({ path, issue: "frontmatter has no description" });
			}
		}
		const body = text.replace(/```[\s\S]*?```/g, "");
		for (const m of body.matchAll(/\]\(([^)\s#]+)(?:#[^)]*)?\)/g)) {
			const target = m[1];
			if (/^[a-z]+:/i.test(target) || target.startsWith("/")) continue;
			const resolved = posix.normalize(posix.join(posix.dirname(path), decodeURIComponent(target))).replace(/\/$/, "");
			if (resolved.startsWith("..")) issues.push({ path, issue: `link leaves the skills folder: ${target}` });
			else if (!paths.has(resolved) && ![...paths].some((p) => p.startsWith(resolved + "/"))) {
				issues.push({ path, issue: `broken link: ${target}` });
			}
		}
	}
	return issues;
}

const results = [];
for (const fw of frameworks) {
	const { repo, dest } = SOURCES[fw];
	const destAbs = join(root, dest);
	const result = { framework: fw, repo, ref, dest, added: [], modified: [], deleted: [], unchanged: 0, issues: [] };
	results.push(result);
	try {
		result.commit = (await gh(`repos/${repo}/commits/${encodeURIComponent(ref)}`)).sha;
		const tree = await gh(`repos/${repo}/git/trees/${result.commit}?recursive=1`);
		if (tree.truncated) throw new Error("tree listing truncated by GitHub");
		const remote = Object.fromEntries(tree.tree
			.filter((e) => e.type === "blob" && e.path.startsWith("skills/"))
			.map((e) => [e.path.slice("skills/".length), e.sha]));
		if (!Object.keys(remote).length) throw new Error(`no skills/ folder at ${ref}`);

		const local = new Set(walk(destAbs));
		const files = {};
		const fetchList = [];
		for (const [path, sha] of Object.entries(remote)) {
			const abs = join(destAbs, path);
			if (local.has(path)) {
				const buf = readFileSync(abs);
				if (sameAsRemote(buf, sha)) {
					result.unchanged++;
					files[path] = buf;
					continue;
				}
				result.modified.push(path);
			} else result.added.push(path);
			fetchList.push([path, sha]);
		}
		result.deleted = [...local].filter((p) => !(p in remote)).sort();
		await pool(fetchList, 6, async ([path, sha]) => {
			const blob = await gh(`repos/${repo}/git/blobs/${sha}`);
			files[path] = Buffer.from(blob.content, blob.encoding === "base64" ? "base64" : "utf8");
		});
		result.added.sort();
		result.modified.sort();
		result.issues = validate(files);

		if (apply) {
			for (const path of [...result.added, ...result.modified]) {
				const abs = join(destAbs, path);
				mkdirSync(dirname(abs), { recursive: true });
				writeFileSync(abs, files[path]);
			}
			for (const path of result.deleted) unlinkSync(join(destAbs, path));
			if (existsSync(destAbs)) pruneEmptyDirs(destAbs, true);
			result.applied = true;
		}
	} catch (e) {
		result.error = (e.stderr || e.message || String(e)).toString().trim();
	}
}

if (asJson) {
	console.log(JSON.stringify(results, null, 2));
} else {
	for (const r of results) {
		console.log(`\n== ${r.framework}: ${r.repo}@${r.ref}${r.commit ? ` (${r.commit.slice(0, 9)})` : ""} -> ${r.dest}`);
		if (r.error) {
			console.log(`  ERROR: ${r.error}`);
			continue;
		}
		const list = (label, items) => items.forEach((p) => console.log(`  ${label} ${p}`));
		list("+", r.added);
		list("~", r.modified);
		list("-", r.deleted);
		console.log(`  added=${r.added.length} modified=${r.modified.length} deleted=${r.deleted.length} unchanged=${r.unchanged}${r.applied ? "  (applied)" : ""}`);
		r.issues.forEach((i) => console.log(`  ! ${i.path}: ${i.issue}`));
	}
	if (!apply && results.some((r) => r.added.length + r.modified.length + r.deleted.length)) {
		console.log("\nDry run: no files written. Rerun with --apply to mirror these changes.");
	}
}
process.exitCode = results.some((r) => r.error) ? 1 : 0;
