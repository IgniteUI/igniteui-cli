# Plan: MCP Server → REST Backend Migration

## Overview

Two changes:
1. **MCP server (`src/index.ts`)**: Replace in-memory SQLite with HTTP calls to the `docs-backend` REST API
2. **Build pipeline (`scripts/build-db.ts`, `package.json`)**: Output the DB to `docs-backend/docs-backend/` after build

---

## 1. Modify `src/index.ts` — Use REST backend

### Remove
- `sql.js` import and `initSqlJs` setup
- `DB_PATH` constant
- `db` variable and `query()` helper function
- The `readFileSync(DB_PATH)` / `new SQL.Database(dbBuffer)` initialization in `main()`

### Add
- `BACKEND_URL` constant — read from env var `DOCS_BACKEND_URL`, default `http://localhost:5277`
- A small `fetchText(url)` helper that calls `fetch()` and returns the response text (or throws on non-2xx)

### Rewrite tool handlers

Each tool handler becomes a single `fetch()` call to the corresponding REST endpoint. The backend already returns text in the exact same format, so the tool just passes the response through.

**`igniteui_list_components`**:
```ts
const url = new URL("/api/docs", BACKEND_URL);
url.searchParams.set("framework", framework);
if (filter) url.searchParams.set("filter", filter);
const text = await fetchText(url);
```

**`igniteui_get_doc`**:
```ts
const url = new URL(`/api/docs/${framework}/${name}`, BACKEND_URL);
const resp = await fetch(url);
if (resp.status === 404) { /* return isError response */ }
const text = await resp.text();
```

**`igniteui_search_docs`**:
```ts
const url = new URL("/api/docs/search", BACKEND_URL);
url.searchParams.set("framework", framework);
url.searchParams.set("query", queryText);
const text = await fetchText(url);
```

### Remove dependencies
- Remove `sql.js` from `dependencies` in `package.json`
- Remove `src/sql.js.d.ts` type declarations (if it exists)
- The `main()` function simplifies to just creating the transport and connecting

---

## 2. Modify build pipeline — DB output to backend project

### `scripts/build-db.ts`
- After building the DB at `dist/igniteui-docs.db`, copy it to `../docs-backend/docs-backend/igniteui-docs.db`
- Use `fs.copyFileSync()` with a log message
- Keep the `dist/` copy so existing workflows aren't broken

### `package.json`
- No script changes needed — the copy happens inside `build-db.ts` itself

---

## Files to modify

| File | Change |
|------|--------|
| `igniteui-doc-mcp/src/index.ts` | Replace SQLite queries with `fetch()` to REST endpoints |
| `igniteui-doc-mcp/package.json` | Remove `sql.js` dependency |
| `igniteui-doc-mcp/scripts/build-db.ts` | Add `copyFileSync` to `../docs-backend/docs-backend/` after DB build |
| `igniteui-doc-mcp/src/sql.js.d.ts` | Delete (if it exists) — no longer needed |

## No changes needed
- `docs-backend/` — already done, endpoints match the MCP output format exactly
- `tsconfig.json` — no changes
- Tool descriptions, prompts, FRAMEWORK_ENUM — unchanged

## Verification
1. Start backend: `cd docs-backend/docs-backend && dotnet run`
2. Start MCP: `cd igniteui-doc-mcp && npm start`
3. Verify tools return same results as before
4. Run `npm run build:db` and verify DB appears in both `dist/` and `../docs-backend/docs-backend/`
