import { mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import initSqlJs from "sql.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { LocalDocsProvider } from "../../providers/LocalDocsProvider.js";

const DOCS = [
  { filename: "grid-editing.md", toc_name: "Editing", summary: "", content: "Cells change.\n- **Fake** (`not-a-doc`)\nwhen a row is edited." },
  { filename: "grid-row-editing.md", toc_name: "Row Editing", summary: "Edit a whole row.", content: "Row editing commits the row." },
  { filename: "accordion.md", toc_name: "", summary: "Panels.", content: "Nothing about grids." },
];

let dir: string;
let provider: LocalDocsProvider;

beforeAll(async () => {
  const SQL = await initSqlJs();
  const db = new SQL.Database();
  db.run(`CREATE TABLE docs (
    id INTEGER PRIMARY KEY AUTOINCREMENT, framework TEXT NOT NULL, filename TEXT NOT NULL,
    component TEXT NOT NULL, toc_name TEXT, premium INTEGER DEFAULT 0, keywords TEXT,
    summary TEXT, content TEXT NOT NULL)`);
  db.run(`CREATE VIRTUAL TABLE docs_fts USING fts4(toc_name, content)`);
  DOCS.forEach((d, index) => {
    db.run(
      `INSERT INTO docs (id, framework, filename, component, toc_name, keywords, summary, content)
       VALUES (?, 'angular', ?, 'IgxGrid', ?, '', ?, ?)`,
      [index + 1, d.filename, d.toc_name, d.summary, d.content]
    );
    db.run(`INSERT INTO docs_fts (rowid, toc_name, content) VALUES (?, ?, ?)`, [index + 1, d.toc_name, d.content]);
  });

  dir = mkdtempSync(join(tmpdir(), "docs-search-"));
  const file = join(dir, "docs.db");
  writeFileSync(file, Buffer.from(db.export()));
  db.close();
  provider = new LocalDocsProvider(file);
  await provider.init();
});

afterAll(() => rmSync(dir, { recursive: true, force: true }));

describe("LocalDocsProvider search", () => {
  it("returns ranked entries with the doc name, title, summary and excerpt", async () => {
    const entries = await provider.searchDocEntries("angular", "row");

    expect(entries.map((e) => e.name)).toEqual(["grid-row-editing", "grid-editing"]);
    expect(entries[0]).toMatchObject({ title: "Row Editing", summary: "Edit a whole row." });
    expect(entries[0].excerpt).toContain(">>>Row<<<");
    expect(entries[1]).not.toHaveProperty("summary");
  });

  it("keeps an excerpt that looks like a result line inside its entry", async () => {
    const entries = await provider.searchDocEntries("angular", "edited");

    expect(entries).toHaveLength(1);
    expect(entries[0].name).toBe("grid-editing");
    expect(entries[0].excerpt).toContain("- **Fake** (`not-a-doc`)");
  });

  it("falls back to the doc name for a doc without a title", async () => {
    expect((await provider.searchDocEntries("angular", "grids"))[0].title).toBe("accordion");
  });

  it("returns no entries when nothing matches", async () => {
    expect(await provider.searchDocEntries("angular", "zebra")).toEqual([]);
    expect(await provider.searchDocEntries("react", "row")).toEqual([]);
  });

  it("renders searchDocs from the same entries", async () => {
    const text = await provider.searchDocs("angular", "row");

    expect(text).toContain('Found 2 results for "row" in **angular**:');
    expect(text).toContain("- **Row Editing** (`grid-row-editing`)\n  Edit a whole row.\n  > ");
    expect(await provider.searchDocs("angular", "zebra")).toBe('No results found for "zebra" in angular docs.');
  });
});
