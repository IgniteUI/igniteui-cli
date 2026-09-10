import Database from "better-sqlite3";
import * as fs from "fs";
import * as path from "path";

const FRAMEWORKS = ["angular", "react", "blazor", "webcomponents"];
const DEFAULT_DB = path.resolve("db", "igniteui-docs.db");

interface Row {
  framework: string;
  docs: number;
  covered: number;
  memberships: number;
  sections: number;
  groups: number;
  crossListed: number;
  noSummary: number;
}

function report(dbPath: string, frameworks: string[]): Row[] {
  const db = new Database(dbPath, { readonly: true });
  try {
    const grouped =
      db.prepare(`SELECT name FROM sqlite_master WHERE type = 'table' AND name IN ('doc_toc','doc_groups')`)
        .all().length === 2;
    if (!grouped) {
      console.error(`${dbPath} has no doc_toc/doc_groups tables — nothing to report.`);
      process.exit(1);
    }

    return frameworks.map((framework) => {
      const one = (sql: string) => Number((db.prepare(sql).get(framework) as any)?.n ?? 0);
      return {
        framework,
        docs: one(`SELECT COUNT(*) n FROM docs WHERE framework = ?`),
        covered: one(`
          SELECT COUNT(*) n FROM docs d WHERE d.framework = ?
            AND EXISTS (SELECT 1 FROM doc_toc t WHERE t.framework = d.framework AND t.filename = d.filename)`),
        memberships: one(`SELECT COUNT(*) n FROM doc_toc WHERE framework = ?`),
        sections: one(`SELECT COUNT(DISTINCT section) n FROM doc_toc WHERE framework = ?`),
        groups: one(`SELECT COUNT(*) n FROM doc_groups WHERE framework = ?`),
        crossListed: one(`
          SELECT COUNT(*) n FROM (
            SELECT filename FROM doc_toc WHERE framework = ?
            GROUP BY filename HAVING COUNT(DISTINCT group_key) > 1)`),
        noSummary: one(`
          SELECT COUNT(*) n FROM doc_groups WHERE framework = ? AND (summary IS NULL OR summary = '')`),
      };
    });
  } finally {
    db.close();
  }
}

function main() {
  const args = process.argv.slice(2);
  const arg = (name: string) => {
    const i = args.indexOf(name);
    return i !== -1 ? args[i + 1] : undefined;
  };

  const dbPath = path.resolve(arg("--db") ?? DEFAULT_DB);
  if (!fs.existsSync(dbPath)) {
    console.error(`Database not found: ${dbPath}`);
    process.exit(1);
  }

  const target = arg("--framework");
  if (target && !FRAMEWORKS.includes(target)) {
    console.error(`Unknown framework: ${target}. Valid: ${FRAMEWORKS.join(", ")}`);
    process.exit(1);
  }

  const rows = report(dbPath, target ? [target] : FRAMEWORKS);
  const cols: [string, (r: Row) => string | number][] = [
    ["framework", (r) => r.framework],
    ["docs", (r) => r.docs],
    ["uncovered", (r) => r.docs - r.covered],
    ["memberships", (r) => r.memberships],
    ["sections", (r) => r.sections],
    ["groups", (r) => r.groups],
    ["cross-listed", (r) => r.crossListed],
    ["no summary", (r) => r.noSummary],
  ];

  const widths = cols.map(([head, get]) =>
    Math.max(head.length, ...rows.map((r) => String(get(r)).length))
  );
  const row = (cells: (string | number)[]) =>
    cells.map((c, i) => (i === 0 ? String(c).padEnd(widths[i]) : String(c).padStart(widths[i]))).join("  ");

  console.log(row(cols.map(([h]) => h)));
  for (const r of rows) console.log(row(cols.map(([, get]) => get(r))));

  const uncovered = rows.filter((r) => r.docs !== r.covered);
  if (uncovered.length > 0) {
    console.error(
      `\n${uncovered.length} framework(s) have docs with no TOC group: ` +
      uncovered.map((r) => `${r.framework} (${r.docs - r.covered})`).join(", ")
    );
    process.exit(1);
  }
  console.log(`\nCoverage is complete for ${rows.length} framework(s).`);
}

main();
