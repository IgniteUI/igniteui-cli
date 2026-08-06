import * as fs from "fs";
import * as path from "path";
import initSqlJs from "sql.js";

const DB_PATH = process.env.DOCS_DB_PATH ||
	path.join(__dirname, "..", "..", "packages", "igniteui-mcp", "igniteui-doc-mcp", "db", "igniteui-docs.db");

const FRAMEWORKS = ["angular", "react", "blazor", "webcomponents"];

// Floors sit ~20% below the counts at the time of writing (angular 376, react 287,
// blazor 270, webcomponents 299). They tolerate ordinary doc churn but fail on a
// partial build — the failure mode that shipped a 112-doc and later an angular-only DB.
const MIN_DOCS: { [fw: string]: number } = {
	angular: 300,
	react: 230,
	blazor: 215,
	webcomponents: 240
};
const MIN_TOTAL = 1000;

describe("Unit - documentation database", () => {
	let db: any;
	const counts: { [fw: string]: number } = {};
	let total = 0;

	function rows(sql: string): any[] {
		const res = db.exec(sql);
		if (!res.length) {
			return [];
		}
		return res[0].values.map((v: any[]) =>
			res[0].columns.reduce((acc: any, col: string, i: number) => {
				acc[col] = v[i];
				return acc;
			}, {}));
	}

	beforeAll(async () => {
		expect(fs.existsSync(DB_PATH)).toBe(true, `Database not found at ${DB_PATH}. Run 'npm run build:db'.`);

		const wasm = fs.readFileSync(require.resolve("sql.js/dist/sql-wasm.wasm"));
		const SQL = await initSqlJs({
			wasmBinary: wasm.buffer.slice(wasm.byteOffset, wasm.byteOffset + wasm.byteLength)
		});
		db = new SQL.Database(fs.readFileSync(DB_PATH));

		for (const r of rows("select framework, count(*) c from docs group by framework")) {
			counts[r.framework] = r.c;
		}
		total = rows("select count(*) c from docs")[0].c;
	});

	afterAll(() => {
		if (db) {
			db.close();
		}
	});

	it("should contain every framework", () => {
		expect(Object.keys(counts).sort()).toEqual(FRAMEWORKS.slice().sort());
	});

	it("should meet the minimum document count per framework", () => {
		for (const fw of FRAMEWORKS) {
			expect(counts[fw] || 0)
				.toBeGreaterThanOrEqual(MIN_DOCS[fw], `${fw} has ${counts[fw] || 0} docs, expected >= ${MIN_DOCS[fw]}`);
		}
	});

	it("should have a total matching the sum of all frameworks", () => {
		expect(total).toBeGreaterThanOrEqual(MIN_TOTAL);
		expect(total).toEqual(FRAMEWORKS.reduce((sum, fw) => sum + (counts[fw] || 0), 0));
	});

	it("should not have any framework starved relative to the others", () => {
		// A partial build leaves one framework whole and the rest tiny.
		const values = FRAMEWORKS.map(fw => counts[fw] || 0);
		expect(Math.min(...values) / Math.max(...values)).toBeGreaterThan(0.4);
	});

	it("should not contain empty or truncated documents", () => {
		const bad = rows("select framework, filename from docs where content is null or length(trim(content)) < 200");
		expect(bad.map(r => `${r.framework}/${r.filename}`)).toEqual([]);
	});

	it("should have required frontmatter on every document", () => {
		const bad = rows(`
			select framework, filename from docs
			where component is null or trim(component) = ''
				or summary is null or trim(summary) = ''
				or keywords is null or trim(keywords) = ''
		`);
		expect(bad.map(r => `${r.framework}/${r.filename}`)).toEqual([]);
	});

	it("should have a toc name on every document", () => {
		// build-db reads _tocName from docs_prepeared; if that directory is missing it
		// silently writes NULL for every row instead of failing.
		const bad = rows("select framework, filename from docs where toc_name is null or trim(toc_name) = ''");
		expect(bad.map(r => `${r.framework}/${r.filename}`)).toEqual([]);
	});

	it("should not contain duplicate documents", () => {
		const dupes = rows("select framework, filename from docs group by framework, filename having count(*) > 1");
		expect(dupes.map(r => `${r.framework}/${r.filename}`)).toEqual([]);
	});

	it("should keep the FTS index in sync with the docs table", () => {
		expect(rows("select count(*) c from docs_fts")[0].c).toEqual(total);
	});

	it("should return results from a full-text search", () => {
		expect(rows("select rowid from docs_fts where docs_fts match 'grid' limit 5").length).toBeGreaterThan(0);
	});
});
