# SQLite + FTS4 Database Integration

**Status: IMPLEMENTED**

## Overview

The MCP server uses a SQLite database with FTS4 full-text search to index all 4 frameworks (~1,200 docs). A build step (`build-db`) runs after `compress` to load all compressed docs into `dist/igniteui-docs.db`. The MCP server queries this database using `sql.js` (pure WASM SQLite).

### Files

| File | Role |
|------|------|
| `scripts/build-db.ts` | Reads `docs_final/` + `docs_prepeared/`, writes `.db` |
| `src/index.ts` | MCP server — loads `.db` via `sql.js`, exposes 3 tools |
| `src/sql.js.d.ts` | TypeScript type declarations for `sql.js` |

### Dependencies

- **`sql.js`** (runtime) — Pure WASM SQLite used by the MCP server. Cross-platform, no native addons.
- **`better-sqlite3`** (dev) — Native SQLite used by `build-db.ts` for fast bulk inserts.

**Why FTS4, not FTS5**: `sql.js` WASM build includes FTS3/FTS4 but not FTS5. FTS4 provides all needed features (external content, porter tokenizer, prefix indexes, `snippet()`). The only missing FTS5 feature is `bm25()` ranking, unnecessary for ~1,200 docs.

## Architecture

```
Pipeline:  export → inject → compress → build-db
                                           ↓
                                   dist/igniteui-docs.db
                                           ↓
                              MCP Server (src/index.ts)
```

## Database Schema

```sql
-- Main table storing all component documentation
CREATE TABLE docs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  framework TEXT NOT NULL,          -- 'angular', 'react', 'blazor', 'webcomponents'
  filename TEXT NOT NULL,           -- flat basename: 'button.md', 'chart-animations.md'
  component TEXT NOT NULL,          -- 'IgxGridComponent, IgxColumnComponent'
  toc_name TEXT,                    -- 'Grid' (display name from toc.yml)
  premium INTEGER DEFAULT 0,       -- 1 if premium component
  keywords TEXT,                    -- 'grid, sorting, filtering, paging'
  summary TEXT,                     -- one-line description
  content TEXT NOT NULL,            -- full compressed markdown (without frontmatter)
  UNIQUE(framework, filename)
);

-- FTS4 virtual table for full-text search (external content, no duplication)
CREATE VIRTUAL TABLE docs_fts USING fts4(
  component,
  toc_name,
  keywords,
  summary,
  content,
  content='docs',                  -- external content: references docs table by rowid
  tokenize=porter,                 -- stemming: "filtering" matches "filter", "filtered"
  prefix="2,3"                     -- prefix indexes for autocomplete
);
```

### Why This Schema

- **FTS4** (not FTS5): `sql.js` WASM build includes FTS3/FTS4 but not FTS5. FTS4 provides all needed features. The only missing FTS5 feature is built-in `bm25()` ranking, which is unnecessary for ~1,200 docs.
- **External content** (`content='docs'`): FTS index references the `docs` table by rowid — no data duplication. Full markdown stored once in `docs.content`.
- **Porter stemmer**: "filtering" matches "filter", "filtered", "filters" — critical for technical docs.
- **Prefix indexes** (`prefix="2,3"`): Speeds up prefix queries like `grid*` for autocomplete-style searches.
- **`framework` column**: Enables cross-platform queries or framework-specific filtering.
- **`premium` column**: Allows filtering premium content if needed by MCP clients.
- **`UNIQUE(framework, filename)`**: Prevents duplicate entries on rebuild.
- **`filename` is always a flat basename**: All four platforms produce flat `docs_final/<framework>/` directories. The Angular compress script flattens its nested `docs_prepeared/` input (e.g., `charts/features/chart-animations.md` → `chart-animations.md`) by extracting the basename. React, WebComponents, and Blazor are already flat at all pipeline stages. There are no filename collisions within a single framework's `docs_final/` output.

### Actual Size (measured)

- Angular: 281, React: 308, Blazor: 295, WC: 324 = **1,208 docs** total
- DB file: **~20MB** (text + FTS index)

## Usage

```bash
npm run build:db                          # full rebuild for all frameworks
npm run build:db -- --framework react     # rebuild only react rows
```

The `build:db` step runs after `compress` and before `npm run build` (TypeScript compilation). It is separate from the `pipeline:*` scripts.

## build-db.ts Details

1. Reads `.md` files from `dist/docs_final/<framework>/` (skips `_` prefixed files)
2. Parses frontmatter: `component`, `keywords`, `summary`, `premium`
3. Looks up `_tocName` from `dist/docs_prepeared/<framework>/` (basename→path index for nested Angular dirs)
4. Strips frontmatter, stores body in `content` column
5. Full rebuild: DROP + CREATE tables. Per-framework (`--framework`): DELETE rows + reinsert
6. Rebuilds FTS index + `PRAGMA optimize`

**`toc_name` lookup**: Compressed docs don't contain `toc_name`. The build script extracts `_tocName` from the corresponding prepared doc. For Angular (nested `docs_prepeared/`), it builds a basename→path index. Falls back to `null` with a warning if no prepared file exists.

**Known issue — Angular basename collisions**: Angular's `docs_prepeared/` has filename collisions across subdirectories (e.g., `grid/editing.md` vs `treegrid/editing.md`). The compress script extracts basenames, so last-write wins. This pre-existing bug needs a fix in `compress-angular-docs.ts` to prefix parent directories.

## MCP Server (src/index.ts)

Uses `sql.js` (WASM SQLite) to load `dist/igniteui-docs.db` into memory at startup. All queries use a `prepare()`/`step()`/`getAsObject()` pattern.

### Tools

| Tool | Parameters | Description |
|------|-----------|-------------|
| `igniteui_list_components` | `framework` (required), `filter?` | SQL LIKE against filename, toc_name, component, keywords, summary |
| `igniteui_get_doc` | `framework` (required), `name` (required) | Returns full markdown. Appends `.md` internally |
| `igniteui_search_docs` | `framework` (required), `query` (required) | FTS4 MATCH with `snippet()`, top 20 results |

All tools require `framework` (`angular`, `react`, `blazor`, `webcomponents`).

## Query Examples

```sql
-- List all Angular grid-related components
SELECT toc_name, component, summary FROM docs
WHERE framework = 'angular' AND (keywords LIKE '%grid%' OR toc_name LIKE '%Grid%');

-- Full-text search (FTS4)
SELECT d.toc_name, d.component, snippet(docs_fts, '>>>', '<<<', '...', -1, 32)
FROM docs_fts
JOIN docs d ON d.rowid = docs_fts.rowid
WHERE docs_fts MATCH 'grid filtering column'
AND d.framework = 'angular'
LIMIT 10;

-- Prefix search (autocomplete)
SELECT d.toc_name, d.framework FROM docs_fts
JOIN docs d ON d.rowid = docs_fts.rowid
WHERE docs_fts MATCH 'com*'
LIMIT 10;

-- Cross-platform: find equivalent components
SELECT framework, toc_name, component, summary FROM docs
WHERE toc_name = 'Grid';

-- Non-premium components only
SELECT toc_name, summary FROM docs
WHERE framework = 'angular' AND premium = 0
ORDER BY toc_name;
```

## FTS4 Sync Strategy

Since `docs_fts` is an external content FTS4 table, it must be kept in sync with the `docs` table. For our use case this is simple — the database is **rebuilt from scratch** on each `build-db` run (not incrementally updated). The rebuild flow:

1. `DROP TABLE IF EXISTS docs_fts`
2. `DROP TABLE IF EXISTS docs`
3. Create both tables
4. Insert all docs
5. `INSERT INTO docs_fts(docs_fts) VALUES('rebuild')` — populates FTS index from `docs` table

No triggers needed since the MCP server opens the DB as **read-only**.

## Considerations

- **Cross-platform portability**: The MCP server uses `sql.js` (pure WASM SQLite) — no native addons, no C++ compiler, works identically on Windows, macOS, and Linux. A package built on one OS runs on any other. `better-sqlite3` (native addon) is a dev dependency only, used by `build-db.ts` at build time on the developer's machine.
- **DB location**: `dist/igniteui-docs.db` — inside `dist/` so it's cleaned by `npm run clear` and rebuilt as part of the pipeline. Per-platform `clear:<platform>` scripts do NOT delete the `.db` file (they only clear that platform's subdirectories).
- **Concurrent access**: Not an issue — MCP server opens read-only, build script is the only writer and runs before the server starts.
- **`.gitignore`**: The `.db` file should be in `.gitignore` (it's a build artifact in `dist/`).
- **Angular flatten fix required**: The current `compress-angular-docs.ts` has a basename collision bug (47+ files silently overwritten). This must be fixed before `build-db` can index Angular docs correctly. See Step 2 for details.
- **`docs_prepeared/` dependency**: The `build-db` step requires `docs_prepeared/<framework>/` to exist for `toc_name` lookup. If the prepared docs were cleaned before `build-db` runs, `toc_name` will be `null` for affected files. The `pipeline:*` scripts clear and re-create `docs_processing/`, `docs_prepeared/`, and `docs_final/` under the platform subdir at the start. Since `build-db` runs separately (after the pipeline completes), `docs_prepeared/` will exist as long as the user hasn't manually run `clear:<platform>` between the pipeline and `build:db`.
- **No side effects**: The `build-db` script only reads from `dist/docs_final/` and `dist/docs_prepeared/`, and writes to `dist/igniteui-docs.db`. It does not run any clean/clear operations, does not modify pipeline artifacts, and does not trigger other scripts.
