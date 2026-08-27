import { readFileSync } from "fs";
import { createRequire } from "module";
import initSqlJs from "sql.js";
import type { ListFixture } from "../../../scripts/lib/list-fixtures.js";
import { LocalDocsProvider } from "../../providers/LocalDocsProvider.js";

const require = createRequire(import.meta.url);

/** Load a fixture's rows into an in-memory DB and render it through the provider. */
export async function renderFixture(fixture: ListFixture, dbFile: string): Promise<string> {
  const wasm = readFileSync(require.resolve("sql.js/dist/sql-wasm.wasm"));
  const SQL = await initSqlJs({
    wasmBinary: wasm.buffer.slice(wasm.byteOffset, wasm.byteOffset + wasm.byteLength),
  });

  const db = new SQL.Database();
  db.run(`CREATE TABLE docs (
    id INTEGER PRIMARY KEY AUTOINCREMENT, framework TEXT NOT NULL, filename TEXT NOT NULL,
    component TEXT NOT NULL, toc_name TEXT, premium INTEGER DEFAULT 0, keywords TEXT,
    summary TEXT, content TEXT NOT NULL, UNIQUE(framework, filename))`);
  db.run(`CREATE TABLE doc_toc (framework TEXT NOT NULL, filename TEXT NOT NULL,
    group_key TEXT NOT NULL, section TEXT NOT NULL, group_label TEXT NOT NULL DEFAULT '',
    path TEXT NOT NULL, ord INTEGER NOT NULL, landing INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (framework, filename, path))`);
  db.run(`CREATE TABLE doc_groups (framework TEXT NOT NULL, group_key TEXT NOT NULL,
    section TEXT NOT NULL, group_label TEXT NOT NULL DEFAULT '', summary TEXT,
    doc_count INTEGER NOT NULL, ord INTEGER NOT NULL, PRIMARY KEY (framework, group_key))`);

  for (const d of fixture.docs) {
    db.run(
      `INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'body')`,
      [d.framework, d.filename, d.component, d.toc_name, d.premium ?? 0, d.keywords ?? "", d.summary ?? ""]
    );
  }
  for (const t of fixture.docToc) {
    db.run(
      `INSERT INTO doc_toc (framework, filename, group_key, section, group_label, path, ord, landing)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [t.framework, t.filename, t.group_key, t.section, t.group_label, t.path, t.ord, t.landing ?? 0]
    );
  }
  for (const g of fixture.docGroups) {
    db.run(
      `INSERT INTO doc_groups (framework, group_key, section, group_label, summary, doc_count, ord)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [g.framework, g.group_key, g.section, g.group_label, g.summary, g.doc_count, g.ord]
    );
  }

  const { writeFileSync } = await import("fs");
  writeFileSync(dbFile, Buffer.from(db.export()));
  db.close();

  const provider = new LocalDocsProvider(dbFile);
  await provider.init();
  return provider.listComponents(fixture.framework, {
    filter: fixture.filter,
    detail: fixture.detail,
    group: fixture.group,
  });
}
