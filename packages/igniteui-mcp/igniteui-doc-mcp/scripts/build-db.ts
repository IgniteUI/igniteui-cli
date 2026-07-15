import Database from "better-sqlite3";
import * as fs from "fs";
import * as path from "path";

const DIST_DIR = path.resolve("dist");
const DOCS_FINAL_DIR = path.join(DIST_DIR, "docs_final");
const DOCS_PREPARED_DIR = path.join(DIST_DIR, "docs_prepeared");
const DB_PATH = path.join(DIST_DIR, "igniteui-docs.db");
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

function parseFrontmatter(raw: string): {
  component: string;
  keywords: string;
  summary: string;
  premium: boolean;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { component: "", keywords: "", summary: "", premium: false, content: raw };

  const block = match[1];
  let component = "";
  let keywords = "";
  let summary = "";
  let premium = false;

  for (const line of block.split("\n")) {
    const m1 = line.match(/^component:\s*(.+)/);
    if (m1) component = m1[1].trim();
    const m2 = line.match(/^keywords:\s*(.+)/);
    if (m2) keywords = m2[1].trim();
    const m3 = line.match(/^summary:\s*(.+)/);
    if (m3) summary = m3[1].trim();
    const m4 = line.match(/^premium:\s*(.+)/);
    if (m4) premium = m4[1].trim() === "true";
  }

  const content = raw.slice(match[0].length).replace(/^\r?\n/, "");
  return { component, keywords, summary, premium, content };
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
    const base = path.basename(fullPath);
    index.set(base, fullPath);
  }
  return index;
}

function main() {
  const args = process.argv.slice(2);
  const fwIdx = args.indexOf("--framework");
  const targetFramework = fwIdx !== -1 ? args[fwIdx + 1] : null;

  if (targetFramework && !FRAMEWORKS.includes(targetFramework)) {
    console.error(`Unknown framework: ${targetFramework}. Valid: ${FRAMEWORKS.join(", ")}`);
    process.exit(1);
  }

  if (!fs.existsSync(DOCS_FINAL_DIR)) {
    console.error(`dist/docs_final/ not found. Run the pipeline first.`);
    process.exit(1);
  }

  const frameworksToProcess = targetFramework ? [targetFramework] : FRAMEWORKS;
  const existingFrameworks = frameworksToProcess.filter((fw) => {
    const dir = path.join(DOCS_FINAL_DIR, fw);
    if (!fs.existsSync(dir)) return false;
    const mdFiles = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
    return mdFiles.length > 0;
  });

  if (existingFrameworks.length === 0) {
    console.error(`No .md files found in any framework directory under dist/docs_final/`);
    process.exit(1);
  }

  const isFullRebuild = !targetFramework;
  let db: Database.Database;

  if (isFullRebuild || !fs.existsSync(DB_PATH)) {
    db = new Database(DB_PATH);
    db.exec("DROP TABLE IF EXISTS docs_fts");
    db.exec("DROP TABLE IF EXISTS docs");
    db.exec(CREATE_DOCS);
    db.exec(CREATE_FTS);
  } else {
    db = new Database(DB_PATH);
    db.exec(`DELETE FROM docs WHERE framework = '${targetFramework}'`);
  }

  const insert = db.prepare(`
    INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const stats: Record<string, number> = {};

  for (const fw of existingFrameworks) {
    const finalDir = path.join(DOCS_FINAL_DIR, fw);
    const preparedDir = path.join(DOCS_PREPARED_DIR, fw);
    const preparedIndex = buildPreparedIndex(preparedDir);

    const mdFiles = fs
      .readdirSync(finalDir)
      .filter((f) => f.endsWith(".md") && !f.startsWith("_"));

    const insertMany = db.transaction((files: string[]) => {
      for (const file of files) {
        const raw = fs.readFileSync(path.join(finalDir, file), "utf-8");
        const { component, keywords, summary, premium, content } = parseFrontmatter(raw);

        let tocName: string | null = null;
        const preparedPath = preparedIndex.get(file);
        if (preparedPath) {
          tocName = extractTocName(preparedPath);
        } else {
          console.warn(`  [warn] No prepared doc for ${fw}/${file} — toc_name will be null`);
        }

        insert.run(fw, file, component, tocName, premium ? 1 : 0, keywords, summary, content);
      }
    });

    insertMany(mdFiles);
    stats[fw] = mdFiles.length;
    console.log(`  ${fw}: ${mdFiles.length} docs inserted`);
  }

  db.exec("INSERT INTO docs_fts(docs_fts) VALUES('rebuild')");
  db.pragma("optimize");

  const totalRows = (db.prepare("SELECT COUNT(*) AS cnt FROM docs").get() as any).cnt;
  db.close();

  console.log(`\nDatabase built: ${DB_PATH}`);
  console.log(`Total docs: ${totalRows}`);
  for (const [fw, count] of Object.entries(stats)) {
    console.log(`  ${fw}: ${count}`);
  }

  const sizeKB = (fs.statSync(DB_PATH).size / 1024).toFixed(1);
  console.log(`DB size: ${sizeKB} KB`);

  // Copy to db/ directory (tracked in git)
  const gitDbPath = path.resolve("db/igniteui-docs.db");
  fs.mkdirSync(path.dirname(gitDbPath), { recursive: true });
  fs.copyFileSync(DB_PATH, gitDbPath);
  console.log(`Copied DB to ${gitDbPath}`);

  const backendDbPath = path.resolve("../docs-backend/docs-backend/igniteui-docs.db");
  const backendDir = path.dirname(backendDbPath);
  if (fs.existsSync(backendDir)) {
    fs.copyFileSync(DB_PATH, backendDbPath);
    console.log(`Copied DB to ${backendDbPath}`);
  } else {
    console.warn(`Backend dir not found (${backendDir}), skipping copy.`);
  }
}

main();
