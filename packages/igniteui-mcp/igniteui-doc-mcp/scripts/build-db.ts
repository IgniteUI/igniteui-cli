import Database from "better-sqlite3";
import * as fs from "fs";
import * as path from "path";
import { parseFrontmatter } from "./lib/frontmatter.js";
import type { TocSidecarRecord } from "./lib/toc-sidecar.js";

const DIST_DIR = path.resolve("dist");
const DOCS_FINAL_DIR = path.join(DIST_DIR, "docs_final");
const DOCS_PREPARED_DIR = path.join(DIST_DIR, "docs_prepeared");
const TOC_INDEX_DIR = path.join(DIST_DIR, "toc-index");
const GROUP_SUMMARIES_DIR = path.resolve("data", "group-summaries");
const DB_PATH = path.join(DIST_DIR, "igniteui-docs.db");
const GIT_DB_PATH = path.resolve("db", "igniteui-docs.db");
const BACKEND_DB_PATH = path.resolve("..", "docs-backend", "docs-backend", "igniteui-docs.db");
const FRAMEWORKS = ["angular", "react", "blazor", "webcomponents"];

const CREATE_DOCS = `
CREATE TABLE docs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  framework TEXT NOT NULL,
  filename TEXT NOT NULL,
  component TEXT NOT NULL,
  toc_name TEXT,
  premium INTEGER DEFAULT 0,
  keywords TEXT,
  summary TEXT,
  content TEXT NOT NULL,
  UNIQUE(framework, filename)
)`;

const CREATE_FTS = `
CREATE VIRTUAL TABLE docs_fts USING fts4(
  component, toc_name, keywords, summary, content,
  content='docs', tokenize=porter, prefix="2,3"
)`;

// group_key is NOT NULL and is the join key to doc_groups: SQLite allows several
// NULLs in a rowid table's PRIMARY KEY, so a nullable grouping column would both
// admit duplicate rows and drop every section-level group from the join.
// `path` is section-qualified so one file cross-listed in two sections cannot
// collide on the primary key.
const CREATE_DOC_TOC = `
CREATE TABLE IF NOT EXISTS doc_toc (
  framework   TEXT NOT NULL,
  filename    TEXT NOT NULL,
  group_key   TEXT NOT NULL,
  section     TEXT NOT NULL,
  group_label TEXT NOT NULL DEFAULT '',
  path        TEXT NOT NULL,
  ord         INTEGER NOT NULL,
  landing     INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (framework, filename, path)
)`;

const CREATE_DOC_TOC_INDEX =
  `CREATE INDEX IF NOT EXISTS idx_doc_toc_group ON doc_toc(framework, group_key, ord)`;

const CREATE_DOC_GROUPS = `
CREATE TABLE IF NOT EXISTS doc_groups (
  framework   TEXT NOT NULL,
  group_key   TEXT NOT NULL,
  section     TEXT NOT NULL,
  group_label TEXT NOT NULL DEFAULT '',
  summary     TEXT,
  doc_count   INTEGER NOT NULL,
  ord         INTEGER NOT NULL,
  PRIMARY KEY (framework, group_key)
)`;

interface GroupSummaryEntry {
  groupKey: string;
  summary: string;
}

function extractTocName(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const m = match[1].match(/^_tocName:\s*(.+)/m);
  return m ? m[1].trim() : null;
}

function collectMdFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMdFiles(full));
    } else if (entry.name.endsWith(".md") && !entry.name.startsWith("_")) {
      results.push(full);
    }
  }
  return results;
}

function buildPreparedIndex(preparedDir: string): Map<string, string> {
  const index = new Map<string, string>();
  for (const fullPath of collectMdFiles(preparedDir)) {
    index.set(path.basename(fullPath), fullPath);
  }
  return index;
}

function sidecarPath(framework: string): string {
  return path.join(TOC_INDEX_DIR, `${framework}.json`);
}

/**
 * Abort before touching anything if an input is missing.
 *
 * Deriving the framework set from whatever happens to be on disk turns a missing
 * framework into a silent omission: a full rebuild drops and recreates the
 * tables, so the previously good rows for that framework are simply gone.
 */
function preflight(frameworks: string[]): void {
  const problems: string[] = [];

  for (const fw of frameworks) {
    if (collectMdFiles(path.join(DOCS_FINAL_DIR, fw)).length === 0) {
      problems.push(`dist/docs_final/${fw}/ is missing or has no .md files`);
    }
    if (collectMdFiles(path.join(DOCS_PREPARED_DIR, fw)).length === 0) {
      problems.push(`dist/docs_prepeared/${fw}/ is missing or has no .md files (toc_name comes from here)`);
    }
    if (!fs.existsSync(sidecarPath(fw))) {
      problems.push(`dist/toc-index/${fw}.json is missing (run export:${fw})`);
    }
  }

  if (problems.length > 0) {
    console.error(`Preflight failed — refusing to build:`);
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }
}

function loadSidecar(framework: string): TocSidecarRecord[] {
  const raw = fs.readFileSync(sidecarPath(framework), "utf-8");
  const records = JSON.parse(raw) as TocSidecarRecord[];
  if (!Array.isArray(records)) {
    throw new Error(`Malformed TOC sidecar for ${framework}: expected an array`);
  }
  return records;
}

function loadGroupSummaries(framework: string): GroupSummaryEntry[] {
  const file = path.join(GROUP_SUMMARIES_DIR, `${framework}.json`);
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf-8")) as GroupSummaryEntry[];
}

function ingestFramework(db: Database.Database, framework: string): void {
  const finalDir = path.join(DOCS_FINAL_DIR, framework);
  const preparedIndex = buildPreparedIndex(path.join(DOCS_PREPARED_DIR, framework));

  const insertDoc = db.prepare(`
    INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const mdFiles = fs
    .readdirSync(finalDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  for (const file of mdFiles) {
    const raw = fs.readFileSync(path.join(finalDir, file), "utf-8");
    const { component, keywords, summary, premium, content } = parseFrontmatter(raw);

    const preparedPath = preparedIndex.get(file);
    const tocName = preparedPath ? extractTocName(preparedPath) : null;
    if (!preparedPath) {
      console.warn(`  [warn] No prepared doc for ${framework}/${file} — toc_name will be null`);
    }

    insertDoc.run(framework, file, component, tocName, premium ? 1 : 0, keywords, summary, content);
  }
  console.log(`  ${framework}: ${mdFiles.length} docs inserted`);

  // A record whose file never made it into `docs` is a warning, not a failure —
  // the reverse (a doc with no group) is what the coverage gate rejects.
  const known = new Set(mdFiles);
  const insertToc = db.prepare(`
    INSERT OR IGNORE INTO doc_toc (framework, filename, group_key, section, group_label, path, ord, landing)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let inserted = 0;
  let ignored = 0;
  let orphaned = 0;
  for (const rec of loadSidecar(framework)) {
    if (!known.has(rec.file)) {
      orphaned++;
      continue;
    }
    const info = insertToc.run(
      framework,
      rec.file,
      rec.groupKey,
      rec.section,
      rec.groupLabel ?? "",
      rec.path,
      rec.ord,
      rec.landing ? 1 : 0
    );
    if (info.changes === 0) ignored++;
    else inserted++;
  }
  console.log(
    `  ${framework}: ${inserted} TOC membership(s) inserted` +
    (ignored ? `, ${ignored} duplicate(s) ignored` : "") +
    (orphaned ? `, ${orphaned} record(s) with no matching doc` : "")
  );
  if (orphaned > 0) {
    console.warn(`  [warn] ${framework}: ${orphaned} TOC record(s) reference a doc that is not in docs_final`);
  }

  // The group set is defined by the TOC, never by the summary cache: loading
  // groups from the cache would make a new or renamed group vanish along with
  // all of its docs instead of appearing with a NULL summary.
  db.prepare(`
    INSERT INTO doc_groups (framework, group_key, section, group_label, summary, doc_count, ord)
    SELECT framework, group_key, MIN(section), MIN(group_label), NULL,
           COUNT(DISTINCT filename), MIN(ord)
    FROM doc_toc WHERE framework = ? GROUP BY framework, group_key
  `).run(framework);

  const groupCount = (
    db.prepare(`SELECT COUNT(*) AS cnt FROM doc_groups WHERE framework = ?`).get(framework) as any
  ).cnt;

  const updateSummary = db.prepare(
    `UPDATE doc_groups SET summary = ? WHERE framework = ? AND group_key = ?`
  );
  let applied = 0;
  const stale: string[] = [];
  for (const entry of loadGroupSummaries(framework)) {
    if (!entry.summary) continue;
    const info = updateSummary.run(entry.summary, framework, entry.groupKey);
    if (info.changes === 0) stale.push(entry.groupKey);
    else applied++;
  }
  console.log(`  ${framework}: ${groupCount} group(s), ${applied} summary/summaries applied`);
  for (const key of stale) {
    console.warn(`  [warn] ${framework}: cached summary for unknown group "${key}" — stale cache`);
  }
}

/**
 * @param frameworks frameworks this invocation processed; always checked.
 * @param release additionally apply the whole-DB gates. They are opt-in because
 *   they cannot pass mid-migration, and because a NULL group summary is a valid
 *   development state but never a shippable one.
 */
function validate(db: Database.Database, frameworks: string[], release: boolean): void {
  const failures: string[] = [];
  const placeholders = frameworks.map(() => "?").join(", ");

  const uncovered = db.prepare(`
    SELECT d.framework, d.filename FROM docs d
    WHERE d.framework IN (${placeholders})
      AND NOT EXISTS (
        SELECT 1 FROM doc_toc t WHERE t.framework = d.framework AND t.filename = d.filename
      )
    LIMIT 20
  `).all(...frameworks) as { framework: string; filename: string }[];
  if (uncovered.length > 0) {
    failures.push(
      `${uncovered.length}+ doc(s) have no TOC group, e.g. ` +
      uncovered.slice(0, 5).map((r) => `${r.framework}/${r.filename}`).join(", ")
    );
  }

  const nullToc = db.prepare(`
    SELECT framework, COUNT(*) AS cnt FROM docs
    WHERE framework IN (${placeholders}) AND toc_name IS NULL
    GROUP BY framework
  `).all(...frameworks) as { framework: string; cnt: number }[];
  if (nullToc.length > 0) {
    failures.push(
      `NULL toc_name rows: ` + nullToc.map((r) => `${r.framework}=${r.cnt}`).join(", ")
    );
  }

  if (release) {
    const missingFw = FRAMEWORKS.filter((fw) => {
      const row = db.prepare(`SELECT COUNT(*) AS cnt FROM doc_toc WHERE framework = ?`).get(fw) as any;
      return row.cnt === 0;
    });
    if (missingFw.length > 0) {
      failures.push(`framework(s) with no doc_toc rows: ${missingFw.join(", ")}`);
    }

    const uncoveredAll = (
      db.prepare(`
        SELECT COUNT(*) AS cnt FROM docs d
        WHERE NOT EXISTS (
          SELECT 1 FROM doc_toc t WHERE t.framework = d.framework AND t.filename = d.filename
        )
      `).get() as any
    ).cnt;
    if (uncoveredAll > 0) failures.push(`${uncoveredAll} doc(s) across the DB have no TOC group`);

    const nullTocAll = (
      db.prepare(`SELECT COUNT(*) AS cnt FROM docs WHERE toc_name IS NULL`).get() as any
    ).cnt;
    if (nullTocAll > 0) failures.push(`${nullTocAll} doc(s) across the DB have a NULL toc_name`);

    const nullSummaries = db.prepare(`
      SELECT framework, group_key FROM doc_groups WHERE summary IS NULL OR summary = '' LIMIT 20
    `).all() as { framework: string; group_key: string }[];
    if (nullSummaries.length > 0) {
      failures.push(
        `${nullSummaries.length}+ group(s) have no summary — run build:group-summaries: ` +
        nullSummaries.slice(0, 5).map((r) => `${r.framework}/${r.group_key}`).join(", ")
      );
    }
  }

  if (failures.length > 0) {
    throw new Error(
      `Validation failed:\n` + failures.map((f) => `  - ${f}`).join("\n")
    );
  }
}

function removeDbFiles(file: string): void {
  for (const suffix of ["", "-wal", "-shm"]) {
    fs.rmSync(`${file}${suffix}`, { force: true });
  }
}

function main() {
  const args = process.argv.slice(2);
  const fwIdx = args.indexOf("--framework");
  const targetFramework = fwIdx !== -1 ? args[fwIdx + 1] : null;
  const release = args.includes("--release");

  if (targetFramework && !FRAMEWORKS.includes(targetFramework)) {
    console.error(`Unknown framework: ${targetFramework}. Valid: ${FRAMEWORKS.join(", ")}`);
    process.exit(1);
  }

  const isFullRebuild = !targetFramework;
  const frameworksToProcess = targetFramework ? [targetFramework] : FRAMEWORKS;
  preflight(frameworksToProcess);

  // Build into a temp file so a failure anywhere leaves every published artifact
  // untouched. `db/igniteui-docs.db` is authoritative — `scripts/build.ts` copies
  // it into `dist/` on every build — so an incremental run seeds from there, not
  // from the derived `dist/` copy.
  const tmpPath = `${DB_PATH}.tmp`;
  const stagedPaths: { staged: string; final: string }[] = [];
  removeDbFiles(tmpPath);
  fs.mkdirSync(DIST_DIR, { recursive: true });

  const seeded = !isFullRebuild && fs.existsSync(GIT_DB_PATH);
  if (seeded) {
    fs.copyFileSync(GIT_DB_PATH, tmpPath);
  } else if (!isFullRebuild) {
    console.warn(`${GIT_DB_PATH} not found — building ${targetFramework} into a fresh database.`);
  }

  const cleanup = () => {
    removeDbFiles(tmpPath);
    for (const { staged } of stagedPaths) removeDbFiles(staged);
  };

  let totalRows = 0;
  const db = new Database(tmpPath);
  try {
    // No -wal/-shm siblings to clean up before the renames.
    db.pragma("journal_mode = DELETE");

    // One transaction spans the schema changes, the deletes, the inserts, the
    // FTS rebuild and the gates, so a gate failure cannot leave a half-updated
    // database behind. SQLite DDL is transactional, so this rolls back cleanly.
    db.transaction(() => {
      if (seeded) {
        db.exec(CREATE_DOC_TOC);
        db.exec(CREATE_DOC_TOC_INDEX);
        db.exec(CREATE_DOC_GROUPS);
        const del = (table: string) =>
          db.prepare(`DELETE FROM ${table} WHERE framework = ?`).run(targetFramework!);
        del("docs");
        del("doc_toc");
        del("doc_groups");
      } else {
        db.exec("DROP TABLE IF EXISTS docs_fts");
        db.exec("DROP TABLE IF EXISTS docs");
        db.exec("DROP TABLE IF EXISTS doc_groups");
        db.exec("DROP TABLE IF EXISTS doc_toc");
        db.exec(CREATE_DOCS);
        db.exec(CREATE_FTS);
        db.exec(CREATE_DOC_TOC);
        db.exec(CREATE_DOC_TOC_INDEX);
        db.exec(CREATE_DOC_GROUPS);
      }

      for (const fw of frameworksToProcess) {
        ingestFramework(db, fw);
      }

      db.exec("INSERT INTO docs_fts(docs_fts) VALUES('rebuild')");
      validate(db, frameworksToProcess, release);
    })();

    // VACUUM cannot run inside a transaction. A file this run created has no
    // free pages, so only vacuum one inherited from the seed.
    if (seeded) db.exec("VACUUM");
    db.pragma("optimize");

    totalRows = (db.prepare("SELECT COUNT(*) AS cnt FROM docs").get() as any).cnt;
  } catch (err) {
    db.close();
    cleanup();
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  } finally {
    // better-sqlite3 keeps the file open, and Windows refuses to rename or copy
    // over an open SQLite file.
    try {
      db.close();
    } catch {
      /* already closed on the error path */
    }
  }

  try {
    // `dist/igniteui-docs.db.tmp` is already the stage for the dist/ copy, so
    // only the other two destinations need one. Renames are per-file atomic;
    // copies are not, so every copy happens before any rename.
    stagedPaths.push({ staged: tmpPath, final: DB_PATH });

    if (fs.existsSync(path.dirname(BACKEND_DB_PATH))) {
      const backendTmp = `${BACKEND_DB_PATH}.tmp`;
      fs.copyFileSync(tmpPath, backendTmp);
      stagedPaths.push({ staged: backendTmp, final: BACKEND_DB_PATH });
    } else {
      console.warn(`Backend dir not found (${path.dirname(BACKEND_DB_PATH)}), skipping copy.`);
    }

    fs.mkdirSync(path.dirname(GIT_DB_PATH), { recursive: true });
    const gitTmp = `${GIT_DB_PATH}.tmp`;
    fs.copyFileSync(tmpPath, gitTmp);
    stagedPaths.push({ staged: gitTmp, final: GIT_DB_PATH });

    // Validate what is about to be published, on a connection of its own, and
    // close it before any rename for the same reason the writer is closed.
    const check = new Database(tmpPath, { readonly: true });
    try {
      validate(check, frameworksToProcess, release);
    } finally {
      check.close();
    }

    // db/ is the commit point and goes last: any failure before it leaves the
    // authoritative database and its committed copy byte-for-byte intact.
    for (const { staged, final } of stagedPaths) {
      if (staged !== final) fs.renameSync(staged, final);
    }
  } catch (err) {
    cleanup();
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }

  console.log(`\nDatabase built: ${DB_PATH}`);
  console.log(`Total docs: ${totalRows}`);
  console.log(`DB size: ${(fs.statSync(DB_PATH).size / 1024).toFixed(1)} KB`);
  for (const { final } of stagedPaths) {
    if (final !== DB_PATH) console.log(`Published to ${final}`);
  }
  if (release) console.log(`Release gates passed.`);
}

main();
