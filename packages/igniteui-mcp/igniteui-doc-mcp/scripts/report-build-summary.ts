/**
 * Prints a Markdown summary of one framework's documentation build.
 *
 * The workflow appends the output to $GITHUB_STEP_SUMMARY. It reports what changed
 * upstream, how much was actually compressed and at what cost — the numbers you need
 * to judge a run without opening the logs.
 *
 * Usage: npx tsx scripts/report-build-summary.ts --framework react --mode incremental
 */
import * as fs from "fs";
import * as path from "path";

function arg(name: string): string {
	const i = process.argv.indexOf(`--${name}`);
	return i !== -1 ? process.argv[i + 1] : "";
}

function readJson(file: string): any | null {
	try {
		return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf-8")) : null;
	} catch {
		return null;
	}
}

const n = (v: number): string => v.toLocaleString("en-US");
const kb = (v: number): string => (v >= 1024 ? `${(v / 1024).toFixed(1)} MB` : `${v.toFixed(0)} KB`);

const framework = arg("framework");
const mode = arg("mode") || "unknown";
const finalDir = path.resolve("dist", "docs_final", framework);

const rows: [string, string][] = [];

const docCount = fs.existsSync(finalDir)
	? fs.readdirSync(finalDir).filter(f => f.endsWith(".md") && !f.startsWith("_")).length
	: 0;
rows.push(["Documents in framework", n(docCount)]);
rows.push(["Mode", `\`${mode}\``]);

const manifest = readJson(path.resolve("dist", "diff-manifest.json"));
const manifestApplies = manifest && manifest.framework === framework;
const changed = manifestApplies ? (manifest.changed ?? []).length : 0;
const added = manifestApplies ? (manifest.added ?? []).length : 0;
const deleted = manifestApplies ? (manifest.deleted ?? []).length : 0;
const unchanged = manifestApplies ? (manifest.unchanged ?? []).length : 0;

if (manifestApplies) {
	rows.push([
		"Changed upstream",
		changed + added + deleted === 0
			? `none — all ${n(unchanged)} documents unchanged`
			: `${n(changed)} changed, ${n(added)} added, ${n(deleted)} deleted (${n(unchanged)} unchanged)`
	]);
}

const stats = readJson(path.join(finalDir, "_compression_stats.json"));
const batch = readJson(path.join(finalDir, "_batch_state.json"));

if (!stats) {
	rows.push(["Compression", manifestApplies && changed + added === 0
		? "**skipped** — nothing to recompress"
		: "**did not run**"]);
} else {
	const errors = Array.isArray(stats.errors) ? stats.errors.length : Number(stats.errors ?? 0);
	rows.push(["Documents compressed", `${n(stats.files_processed ?? 0)} of ${n(docCount)}`]);
	if (stats.files_skipped) {
		rows.push(["Skipped", n(stats.files_skipped)]);
	}
	rows.push(["Model", `\`${stats.model ?? "unknown"}\``]);
	if (stats.original_size_kb && stats.compressed_size_kb) {
		rows.push([
			"Size of compressed set",
			`${kb(stats.original_size_kb)} → ${kb(stats.compressed_size_kb)} (${(stats.compression_ratio ?? 0).toFixed(1)}% smaller)`
		]);
	}
	rows.push([
		"Generated output",
		`${n(stats.total_tokens ?? 0)} tokens — size of the produced documents, not API usage`
	]);
	if (errors > 0) {
		rows.push(["Errors", `**${n(errors)}**`]);
	}
}

if (batch) {
	const failed = Number(batch.failed ?? 0) + Number(batch.invalid ?? 0);
	rows.push([
		"Batch",
		`\`${batch.batch_id}\` — ${batch.status}, ${n(Number(batch.succeeded ?? 0))} succeeded` +
			(failed > 0 ? `, **${n(failed)} failed/invalid**` : "")
	]);
}

const out: string[] = [];
out.push(`### ${framework}`);
out.push("");
out.push("| | |");
out.push("|---|---|");
for (const [label, value] of rows) {
	out.push(`| ${label} | ${value} |`);
}
out.push("");

console.log(out.join("\n"));
