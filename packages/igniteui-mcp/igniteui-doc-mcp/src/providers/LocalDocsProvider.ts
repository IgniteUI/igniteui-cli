import initSqlJs, { type Database } from "sql.js";
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import type { DocsProvider } from "./DocsProvider.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class LocalDocsProvider implements DocsProvider {
  private db: Database | null = null;
  private dbPath: string;

  constructor(dbPath?: string) {
    this.dbPath = dbPath || process.env.DB_PATH || join(__dirname, "..", "igniteui-docs.db");
  }

  async init(): Promise<void> {
    if (!existsSync(this.dbPath)) {
      throw new Error(
        `Database not found at ${this.dbPath}. Run the pipeline and build:db first, or set DB_PATH env var.`
      );
    }

    const require = createRequire(import.meta.url);
    const wasmBuffer = readFileSync(require.resolve("sql.js/dist/sql-wasm.wasm"));
    const wasmBinary = wasmBuffer.buffer.slice(wasmBuffer.byteOffset, wasmBuffer.byteOffset + wasmBuffer.byteLength);

    const SQL = await initSqlJs({ wasmBinary });
    const fileBuffer = readFileSync(this.dbPath);
    this.db = new SQL.Database(fileBuffer);
  }

  private ensureDb(): Database {
    if (!this.db) throw new Error("LocalDocsProvider not initialized. Call init() first.");
    return this.db;
  }

  async listComponents(framework: string, filter?: string): Promise<string> {
    const db = this.ensureDb();

    let sql: string;
    let params: Record<string, string>;

    if (filter) {
      const like = `%${filter}%`;
      sql = `SELECT filename, component, toc_name, premium, keywords, summary
             FROM docs
             WHERE framework = $framework
               AND (filename LIKE $like OR component LIKE $like OR toc_name LIKE $like
                    OR keywords LIKE $like OR summary LIKE $like)
             ORDER BY toc_name`;
      params = { $framework: framework, $like: like };
    } else {
      sql = `SELECT filename, component, toc_name, premium, keywords, summary
             FROM docs
             WHERE framework = $framework
             ORDER BY toc_name`;
      params = { $framework: framework };
    }

    const stmt = db.prepare(sql);
    stmt.bind(params);

    const rows: Record<string, unknown>[] = [];
    while (stmt.step()) {
      rows.push(stmt.getAsObject());
    }
    stmt.free();

    if (rows.length === 0) {
      return `No components found for framework "${framework}"${filter ? ` matching "${filter}"` : ""}.`;
    }

    const lines = rows.map((r) => {
      const name = (r.filename as string).replace(/\.md$/, "");
      const parts = [`- **${r.toc_name || name}** (\`${name}\`)`];
      if (r.summary) parts.push(`  ${r.summary}`);
      if (r.premium) parts.push(`  ⭐ Premium`);
      return parts.join("\n");
    });

    return `Found ${rows.length} components for **${framework}**${filter ? ` matching "${filter}"` : ""}:\n\n${lines.join("\n")}`;
  }

  async getDoc(framework: string, name: string): Promise<{ text: string; found: boolean }> {
    const db = this.ensureDb();
    const filename = name.endsWith(".md") ? name : `${name}.md`;

    const stmt = db.prepare(
      `SELECT content, component, toc_name, premium, keywords, summary
       FROM docs
       WHERE framework = $framework AND filename = $filename`
    );
    stmt.bind({ $framework: framework, $filename: filename });

    if (!stmt.step()) {
      stmt.free();
      return {
        text: `Doc "${name}" not found for framework "${framework}". Use list_components to see available docs.`,
        found: false,
      };
    }

    const row = stmt.getAsObject();
    stmt.free();

    // Reconstruct frontmatter + content
    const frontmatter = [
      "---",
      `component: ${row.component}`,
      ...(row.toc_name ? [`toc_name: ${row.toc_name}`] : []),
      ...(row.keywords ? [`keywords: ${row.keywords}`] : []),
      ...(row.summary ? [`summary: ${row.summary}`] : []),
      ...(row.premium ? ["premium: true"] : []),
      "---",
    ].join("\n");

    return { text: `${frontmatter}\n${row.content}`, found: true };
  }

  async searchDocs(framework: string, query: string): Promise<string> {
    const db = this.ensureDb();

    const stmt = db.prepare(
      `SELECT d.filename, d.toc_name, d.component, d.keywords, d.summary,
              snippet(docs_fts, '>>>', '<<<', '...', -1, 32) AS excerpt
       FROM docs_fts
       JOIN docs d ON d.rowid = docs_fts.rowid
       WHERE docs_fts MATCH $query
         AND d.framework = $framework
       LIMIT 200`
    );
    stmt.bind({ $query: query, $framework: framework });

    const rawRows: Record<string, unknown>[] = [];
    while (stmt.step()) {
      rawRows.push(stmt.getAsObject());
    }
    stmt.free();

    if (rawRows.length === 0) {
      return `No results found for "${query}" in ${framework} docs.`;
    }

    // Field-weighted re-ranking: FTS4 BM25 treats all columns equally and ranks
    // by raw term frequency across the corpus. This causes dedicated feature docs
    // to rank below generic docs that mention the same terms in passing.
    // We fix this by computing a field-boost score: a query term match in the
    // doc title (toc_name) is worth far more than a match buried in body text.
    // This generalizes to any query — no per-feature heuristics needed.
    const terms = query
      .replace(/[*"]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length > 2)
      .map((t) => t.toLowerCase());

    const scored = rawRows.map((r) => {
      const toc  = ((r.toc_name  as string) || '').toLowerCase();
      const fn   = ((r.filename  as string) || '').toLowerCase();
      const kw   = ((r.keywords  as string) || '').toLowerCase();
      const sm   = ((r.summary   as string) || '').toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (toc.includes(t)) score += 10; // title match — strongest signal
        if (fn.includes(t))  score += 4;  // filename contains the concept
        if (kw.includes(t))  score += 5;  // curated keyword metadata
        if (sm.includes(t))  score += 3;  // summary mentions the concept
        // content matches are already captured by FTS; no extra boost needed
      }
      return { row: r, score };
    });

    const top20 = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((x) => x.row);

    const lines = top20.map((r) => {
      const name = (r.filename as string).replace(/\.md$/, "");
      return [
        `- **${r.toc_name || name}** (\`${name}\`)`,
        r.summary ? `  ${r.summary}` : "",
        r.excerpt ? `  > ${r.excerpt}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    });

    return `Found ${top20.length} results for "${query}" in **${framework}**:\n\n${lines.join("\n")}`;
  }
}
