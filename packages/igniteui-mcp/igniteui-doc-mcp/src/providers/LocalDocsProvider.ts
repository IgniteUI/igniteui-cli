import initSqlJs, { type Database } from "sql.js";
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import type { DocsProvider, ListComponentsOptions } from "./DocsProvider.js";
import {
  renderFlat,
  renderGroup,
  renderGroupedIndex,
  renderUnknownGroup,
  type DocRow,
  type GroupRow,
  type GroupedDocRow,
} from "../tools/render-components.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class LocalDocsProvider implements DocsProvider {
  private db: Database | null = null;
  private dbPath: string;
  private tocTablesPresent: boolean | null = null;
  private groupedFrameworks = new Map<string, boolean>();

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

  private query(sql: string, params: Record<string, unknown> = {}): Record<string, unknown>[] {
    const stmt = this.ensureDb().prepare(sql);
    stmt.bind(params as never);
    const rows: Record<string, unknown>[] = [];
    while (stmt.step()) {
      rows.push(stmt.getAsObject());
    }
    stmt.free();
    return rows;
  }

  /**
   * The package ships a prebuilt DB and `db/igniteui-docs.db` is committed, so a
   * client can update the server without rebuilding the database. A DB with no
   * `doc_toc`, or one where this framework has not been migrated yet, renders
   * exactly as it does today.
   */
  private hasGroups(framework: string): boolean {
    if (this.tocTablesPresent === null) {
      this.tocTablesPresent =
        this.query(
          `SELECT name FROM sqlite_master
           WHERE type = 'table' AND name IN ('doc_toc', 'doc_groups')`
        ).length === 2;
    }
    if (!this.tocTablesPresent) return false;

    const cached = this.groupedFrameworks.get(framework);
    if (cached !== undefined) return cached;

    const row = this.query(`SELECT COUNT(*) AS cnt FROM doc_toc WHERE framework = $framework`, {
      $framework: framework,
    })[0];
    const present = Number(row?.cnt ?? 0) > 0;
    this.groupedFrameworks.set(framework, present);
    return present;
  }

  async listComponents(framework: string, opts: ListComponentsOptions = {}): Promise<string> {
    const { filter, detail, group } = opts;

    if (detail === "docs" || !this.hasGroups(framework)) {
      return this.listFlat(framework, filter, group);
    }

    const groups = this.query(
      `SELECT group_key, section, group_label, summary, doc_count, ord
       FROM doc_groups WHERE framework = $framework ORDER BY ord`,
      { $framework: framework }
    ) as unknown as GroupRow[];

    if (group !== undefined) {
      const match = groups.find((g) => g.group_key === group);
      if (!match) return renderUnknownGroup(framework, group, groups);
      return renderGroup(framework, match, this.groupedRows(framework, filter, group), filter);
    }

    return renderGroupedIndex(framework, groups, this.groupedRows(framework, filter), filter);
  }

  /**
   * Grouped mode also matches `doc_toc.group_key`, so a filter can select whole
   * sections. Flat mode deliberately does not — see `listFlat`.
   */
  private groupedRows(framework: string, filter?: string, group?: string): GroupedDocRow[] {
    const conditions = [`t.framework = $framework`];
    const params: Record<string, unknown> = { $framework: framework };

    if (group !== undefined) {
      conditions.push(`t.group_key = $group`);
      params.$group = group;
    }
    if (filter) {
      conditions.push(
        `(d.filename LIKE $like OR d.component LIKE $like OR d.toc_name LIKE $like
          OR d.keywords LIKE $like OR d.summary LIKE $like OR t.group_key LIKE $like)`
      );
      params.$like = `%${filter}%`;
    }

    return this.query(
      `SELECT d.filename, d.toc_name, d.premium, d.summary, t.group_key, t.ord
       FROM doc_toc t
       JOIN docs d ON d.framework = t.framework AND d.filename = t.filename
       WHERE ${conditions.join(" AND ")}
       ORDER BY t.ord`,
      params
    ) as unknown as GroupedDocRow[];
  }

  /**
   * Flat mode never reads through `doc_toc`: the join multiplies cross-listed
   * docs and reorders by TOC position. Where `group` narrows a flat listing,
   * membership is resolved separately and applied to the unchanged query.
   */
  private listFlat(framework: string, filter?: string, group?: string): string {
    let rows: Record<string, unknown>[];

    if (filter) {
      rows = this.query(
        `SELECT filename, component, toc_name, premium, keywords, summary
         FROM docs
         WHERE framework = $framework
           AND (filename LIKE $like OR component LIKE $like OR toc_name LIKE $like
                OR keywords LIKE $like OR summary LIKE $like)
         ORDER BY toc_name`,
        { $framework: framework, $like: `%${filter}%` }
      );
    } else {
      rows = this.query(
        `SELECT filename, component, toc_name, premium, keywords, summary
         FROM docs
         WHERE framework = $framework
         ORDER BY toc_name`,
        { $framework: framework }
      );
    }

    if (group !== undefined && this.hasGroups(framework)) {
      const members = new Set(
        this.query(
          `SELECT DISTINCT filename FROM doc_toc
           WHERE framework = $framework AND group_key = $group`,
          { $framework: framework, $group: group }
        ).map((r) => r.filename as string)
      );
      rows = rows.filter((r) => members.has(r.filename as string));
    }

    return renderFlat(framework, rows as unknown as DocRow[], filter);
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

    const displayQuery = query.replace(/["*]/g, '').replace(/\s+/g, ' ').trim();

    if (rawRows.length === 0) {
      return `No results found for "${displayQuery}" in ${framework} docs.`;
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

    const scored = rawRows.map((r, idx) => {
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
      return { row: r, score, idx };
    });

    const top20 = scored
      .sort((a, b) => (b.score - a.score) || (a.idx - b.idx))
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

    return `Found ${top20.length} results for "${displayQuery}" in **${framework}**:\n\n${lines.join("\n")}`;
  }
}
