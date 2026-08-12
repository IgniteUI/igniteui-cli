/**
 * Restores dist/docs_final/<framework>/*.md from the committed SQLite DB.
 *
 * Incremental compression only writes changed and added docs into docs_final — it
 * assumes the unchanged ones are already there from an earlier run. dist/ is
 * gitignored, so a fresh checkout (CI) has nothing. Without this step an incremental
 * run would leave docs_final holding only the handful of changed files, and build-db
 * would produce a near-empty database.
 *
 * The DB is committed and always matches what was last published, so it is the
 * natural source. The frontmatter written here round-trips exactly through
 * build-db.ts's parseFrontmatter().
 *
 * Usage:
 *   npx tsx scripts/restore-docs-final.ts                      # all frameworks
 *   npx tsx scripts/restore-docs-final.ts --framework angular  # one framework
 *   npx tsx scripts/restore-docs-final.ts --db path/to.db      # non-default source
 */
import Database from "better-sqlite3";
import * as fs from "fs";
import * as path from "path";

const FRAMEWORKS = ["angular", "react", "blazor", "webcomponents"];
const DOCS_FINAL_DIR = path.resolve("dist", "docs_final");
const DOCS_PREPARED_DIR = path.resolve("dist", "docs_prepeared");
const DEFAULT_DB = path.resolve("db", "igniteui-docs.db");

interface DocRow {
	filename: string;
	component: string;
	premium: number;
	keywords: string;
	summary: string;
	content: string;
	toc_name: string | null;
}

function buildDoc(row: DocRow): string {
	const lines = ["---", `component: ${row.component}`];
	if (row.keywords) {
		lines.push(`keywords: ${row.keywords}`);
	}
	if (row.summary) {
		lines.push(`summary: ${row.summary}`);
	}
	if (row.premium) {
		lines.push("premium: true");
	}
	lines.push("---");
	// parseFrontmatter() strips exactly one newline after the closing ---, and the
	// stored content keeps its own leading newline, so a single \n round-trips.
	return `${lines.join("\n")}\n${row.content}`;
}

function main(): void {
	const args = process.argv.slice(2);

	const fwIdx = args.indexOf("--framework");
	const targetFramework = fwIdx !== -1 ? args[fwIdx + 1] : null;
	if (targetFramework && !FRAMEWORKS.includes(targetFramework)) {
		console.error(`Unknown framework: ${targetFramework}. Valid: ${FRAMEWORKS.join(", ")}`);
		process.exit(1);
	}

	// build-db reads _tocName out of docs_prepeared. When that directory is unavailable
	// (the assemble job only has compressed docs), stubs carrying just _tocName keep
	// toc_name populated instead of silently writing NULL for every row.
	const tocStubs = args.includes("--toc-stubs");

	const dbIdx = args.indexOf("--db");
	const dbPath = dbIdx !== -1 ? path.resolve(args[dbIdx + 1]) : DEFAULT_DB;
	if (!fs.existsSync(dbPath)) {
		console.error(`Database not found: ${dbPath}`);
		process.exit(1);
	}

	const db = new Database(dbPath, { readonly: true });
	const select = db.prepare(
		"SELECT filename, component, premium, keywords, summary, content, toc_name FROM docs WHERE framework = ?"
	);

	let grandTotal = 0;
	for (const fw of targetFramework ? [targetFramework] : FRAMEWORKS) {
		const rows = select.all(fw) as DocRow[];
		if (rows.length === 0) {
			console.warn(`  [warn] ${fw}: no rows in ${path.basename(dbPath)} — nothing restored`);
			continue;
		}

		const outDir = path.join(DOCS_FINAL_DIR, fw);
		fs.mkdirSync(outDir, { recursive: true });

		const stubDir = path.join(DOCS_PREPARED_DIR, fw);
		if (tocStubs) {
			fs.mkdirSync(stubDir, { recursive: true });
		}

		for (const row of rows) {
			fs.writeFileSync(path.join(outDir, row.filename), buildDoc(row), "utf-8");
			if (tocStubs && row.toc_name) {
				fs.writeFileSync(path.join(stubDir, row.filename), `---\n_tocName: ${row.toc_name}\n---\n`, "utf-8");
			}
		}

		grandTotal += rows.length;
		console.log(`  ${fw}: ${rows.length} docs restored to dist/docs_final/${fw}/${tocStubs ? " (+ toc stubs)" : ""}`);
	}

	db.close();
	console.log(`\nRestored ${grandTotal} documents from ${dbPath}`);
}

main();
