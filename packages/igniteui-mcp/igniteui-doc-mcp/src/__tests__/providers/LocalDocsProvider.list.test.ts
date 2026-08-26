import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { createRequire } from "module";
import { tmpdir } from "os";
import { join } from "path";
import initSqlJs from "sql.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { LocalDocsProvider } from "../../providers/LocalDocsProvider.js";

const require = createRequire(import.meta.url);

interface Doc {
  framework: string;
  filename: string;
  component: string;
  toc_name: string;
  premium?: number;
  keywords?: string;
  summary?: string;
}

interface Membership {
  framework: string;
  filename: string;
  group_key: string;
  section: string;
  group_label: string;
  path: string;
  ord: number;
}

const DOCS: Doc[] = [
  { framework: "angular", filename: "grid-grid.md", component: "IgxGridComponent", toc_name: "Data Grid", summary: "The grid." },
  { framework: "angular", filename: "grid-sorting.md", component: "IgxGridComponent", toc_name: "Sorting", summary: "Sort rows.", premium: 1 },
  { framework: "angular", filename: "accordion.md", component: "IgxAccordionComponent", toc_name: "Accordion", summary: "Panels." },
  { framework: "angular", filename: "excel-utility.md", component: "IgxExcelUtility", toc_name: "Excel Utility", summary: "Excel helpers." },
  { framework: "react", filename: "grid-editing.md", component: "IgrGrid", toc_name: "Editing", summary: "Edit cells." },
];

const MEMBERSHIPS: Membership[] = [
  { framework: "angular", filename: "grid-grid.md", group_key: "Grids & Lists > Data Grid", section: "Grids & Lists", group_label: "Data Grid", path: "Grids & Lists > Data Grid", ord: 0 },
  { framework: "angular", filename: "grid-sorting.md", group_key: "Grids & Lists > Data Grid", section: "Grids & Lists", group_label: "Data Grid", path: "Grids & Lists > Data Grid > Sorting", ord: 1 },
  { framework: "angular", filename: "excel-utility.md", group_key: "Grids & Lists > Data Grid", section: "Grids & Lists", group_label: "Data Grid", path: "Grids & Lists > Data Grid > Excel", ord: 2 },
  { framework: "angular", filename: "accordion.md", group_key: "Layouts", section: "Layouts", group_label: "", path: "Layouts > Accordion", ord: 3 },
  { framework: "angular", filename: "excel-utility.md", group_key: "Frameworks > Excel Library", section: "Frameworks", group_label: "Excel Library", path: "Frameworks > Excel Library > Excel Utility", ord: 4 },
];

let SQL: Awaited<ReturnType<typeof initSqlJs>>;
let dir: string;

/** Build a fixture DB on disk; `frameworksWithToc` selects which get grouping rows. */
function makeDb(name: string, opts: { toc: boolean; frameworksWithToc?: string[] }): string {
  const db = new SQL.Database();
  db.run(`CREATE TABLE docs (
    id INTEGER PRIMARY KEY AUTOINCREMENT, framework TEXT NOT NULL, filename TEXT NOT NULL,
    component TEXT NOT NULL, toc_name TEXT, premium INTEGER DEFAULT 0, keywords TEXT,
    summary TEXT, content TEXT NOT NULL, UNIQUE(framework, filename))`);
  for (const d of DOCS) {
    db.run(
      `INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [d.framework, d.filename, d.component, d.toc_name, d.premium ?? 0, d.keywords ?? "", d.summary ?? "", "body"]
    );
  }

  if (opts.toc) {
    const keep = opts.frameworksWithToc ?? ["angular", "react"];
    db.run(`CREATE TABLE doc_toc (framework TEXT NOT NULL, filename TEXT NOT NULL,
      group_key TEXT NOT NULL, section TEXT NOT NULL, group_label TEXT NOT NULL DEFAULT '',
      path TEXT NOT NULL, ord INTEGER NOT NULL, landing INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (framework, filename, path))`);
    db.run(`CREATE TABLE doc_groups (framework TEXT NOT NULL, group_key TEXT NOT NULL,
      section TEXT NOT NULL, group_label TEXT NOT NULL DEFAULT '', summary TEXT,
      doc_count INTEGER NOT NULL, ord INTEGER NOT NULL, PRIMARY KEY (framework, group_key))`);

    for (const m of MEMBERSHIPS.filter((m) => keep.includes(m.framework))) {
      db.run(
        `INSERT INTO doc_toc (framework, filename, group_key, section, group_label, path, ord, landing)
         VALUES (?, ?, ?, ?, ?, ?, ?, 0)`,
        [m.framework, m.filename, m.group_key, m.section, m.group_label, m.path, m.ord]
      );
    }
    db.run(`INSERT INTO doc_groups (framework, group_key, section, group_label, summary, doc_count, ord)
            SELECT framework, group_key, MIN(section), MIN(group_label), NULL,
                   COUNT(DISTINCT filename), MIN(ord)
            FROM doc_toc GROUP BY framework, group_key`);
    db.run(`UPDATE doc_groups SET summary = 'Sorting, filtering, editing.'
            WHERE group_key = 'Grids & Lists > Data Grid'`);
  }

  const file = join(dir, name);
  writeFileSync(file, Buffer.from(db.export()));
  db.close();
  return file;
}

async function provider(path: string): Promise<LocalDocsProvider> {
  const p = new LocalDocsProvider(path);
  await p.init();
  return p;
}

/** The renderer as it stood before grouping, used to prove flat mode is untouched. */
function legacyFlat(framework: string, filter?: string): string {
  const like = filter?.toLowerCase();
  const rows = DOCS.filter(
    (d) =>
      d.framework === framework &&
      (!like ||
        [d.filename, d.component, d.toc_name, d.keywords ?? "", d.summary ?? ""].some((v) =>
          v.toLowerCase().includes(like)
        ))
  ).sort((a, b) => (a.toc_name < b.toc_name ? -1 : a.toc_name > b.toc_name ? 1 : 0));

  if (rows.length === 0) {
    return `No components found for framework "${framework}"${filter ? ` matching "${filter}"` : ""}.`;
  }
  const lines = rows.map((r) => {
    const name = r.filename.replace(/\.md$/, "");
    const parts = [`- **${r.toc_name || name}** (\`${name}\`)`];
    if (r.summary) parts.push(`  ${r.summary}`);
    if (r.premium) parts.push(`  ⭐ Premium`);
    return parts.join("\n");
  });
  return `Found ${rows.length} components for **${framework}**${filter ? ` matching "${filter}"` : ""}:\n\n${lines.join("\n")}`;
}

beforeAll(async () => {
  const wasm = readFileSync(require.resolve("sql.js/dist/sql-wasm.wasm"));
  SQL = await initSqlJs({
    wasmBinary: wasm.buffer.slice(wasm.byteOffset, wasm.byteOffset + wasm.byteLength),
  });
  dir = mkdtempSync(join(tmpdir(), "local-docs-"));
});

afterAll(() => rmSync(dir, { recursive: true, force: true }));

describe("LocalDocsProvider.listComponents — back-compat guard", () => {
  it("renders flat against a legacy-schema DB", async () => {
    const p = await provider(makeDb("legacy.db", { toc: false }));
    expect(await p.listComponents("angular")).toBe(legacyFlat("angular"));
  });

  it("renders flat for a framework that has no doc_toc rows yet", async () => {
    const p = await provider(makeDb("mixed.db", { toc: true, frameworksWithToc: ["angular"] }));
    expect(await p.listComponents("react")).toBe(legacyFlat("react"));
    expect(await p.listComponents("angular")).toContain("## Grids & Lists > Data Grid");
  });
});

describe("LocalDocsProvider.listComponents — grouped modes", () => {
  let p: LocalDocsProvider;
  beforeAll(async () => {
    p = await provider(makeDb("migrated.db", { toc: true }));
  });

  it("groups by default and counts a cross-listed doc once overall", async () => {
    const out = await p.listComponents("angular");
    expect(out).toContain("Found 4 component doc(s) for **angular** in 3 group(s)");
    expect(out).toContain("## Grids & Lists > Data Grid (3)");
    expect(out).toContain("## Frameworks > Excel Library (1)");
    expect(out).toContain("Sorting, filtering, editing.");
  });

  it("drills into one group in TOC order", async () => {
    const out = await p.listComponents("angular", { group: "Grids & Lists > Data Grid" });
    expect(out).toContain("Found 3 component doc(s) in **angular** > Grids & Lists > Data Grid");
    expect(out.indexOf("grid-grid")).toBeLessThan(out.indexOf("grid-sorting"));
  });

  it("answers an unknown group with the valid keys", async () => {
    const out = await p.listComponents("angular", { group: "Nope" });
    expect(out).toContain('No group "Nope"');
    expect(out).toContain("- Layouts");
  });

  it("lets a filter match a group name", async () => {
    const out = await p.listComponents("angular", { filter: "Excel Library" });
    expect(out).toContain("## Frameworks > Excel Library (1)");
    expect(out).not.toContain("## Layouts");
  });

  it("narrows within a group when filter and group are combined", async () => {
    const out = await p.listComponents("angular", {
      group: "Grids & Lists > Data Grid",
      filter: "sort",
    });
    expect(out).toContain("Found 1 component doc(s)");
    expect(out).toContain("grid-sorting");
  });
});

describe("LocalDocsProvider.listComponents — flat mode fidelity", () => {
  it("is byte-identical to the pre-grouping output on a migrated DB", async () => {
    const p = await provider(makeDb("migrated2.db", { toc: true }));
    expect(await p.listComponents("angular", { detail: "docs" })).toBe(legacyFlat("angular"));
    expect(await p.listComponents("angular", { detail: "docs", filter: "grid" })).toBe(
      legacyFlat("angular", "grid")
    );
  });

  it("emits a cross-listed doc once, and never matches a group name", async () => {
    const p = await provider(makeDb("migrated3.db", { toc: true }));
    const out = await p.listComponents("angular", { detail: "docs" });
    expect(out.match(/\(`excel-utility`\)/g)).toHaveLength(1);
    expect(await p.listComponents("angular", { detail: "docs", filter: "Excel Library" })).toBe(
      legacyFlat("angular", "Excel Library")
    );
  });

  it("restricts a flat listing to a group's members without joining", async () => {
    const p = await provider(makeDb("migrated4.db", { toc: true }));
    const out = await p.listComponents("angular", {
      detail: "docs",
      group: "Grids & Lists > Data Grid",
    });
    expect(out).toContain("Found 3 components for **angular**");
    expect(out).not.toContain("accordion");
    // Flat order stays ORDER BY toc_name — Data Grid, Excel Utility, Sorting.
    expect(out.indexOf("(`grid-grid`)")).toBeLessThan(out.indexOf("(`excel-utility`)"));
    expect(out.indexOf("(`excel-utility`)")).toBeLessThan(out.indexOf("(`grid-sorting`)"));
  });
});
