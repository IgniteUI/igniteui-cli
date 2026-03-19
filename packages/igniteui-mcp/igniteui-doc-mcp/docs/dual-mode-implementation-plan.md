# Plan: Dual-Mode MCP Server (Option B — Provider Abstraction)

## Problem

The MCP server currently works only in remote mode (proxying to `DOCS_BACKEND_URL`). It needs a second mode that queries a local SQLite database (`dist/igniteui-docs.db`) directly via `sql.js`. The architecture in `docs/db.md` was designed but never implemented in `src/index.ts`.

## Approach

Introduce a `DocsProvider` interface and two implementations. The server picks the provider at startup based on a `--local` CLI flag (or fallback to env var `DOCS_MODE=local`). Tool registration stays in `index.ts` but delegates all data access to the chosen provider.

## File Plan

```
src/
├── index.ts                    # MODIFY — extract fetch logic, wire up provider
├── providers/
│   ├── DocsProvider.ts         # NEW — interface definition + result types
│   ├── RemoteDocsProvider.ts   # NEW — current fetch-based logic (extracted from index.ts)
│   └── LocalDocsProvider.ts    # NEW — sql.js WASM-based SQLite queries
├── tools/
│   └── description.ts          # no changes
```

## Interface Design

```ts
// providers/DocsProvider.ts
interface DocsProvider {
  listComponents(framework: string, filter?: string): Promise<string>;
  getDoc(framework: string, name: string): Promise<{ text: string; found: boolean }>;
  searchDocs(framework: string, query: string): Promise<string>;
}
```

All three methods return serialized text (matching the current tool output format) so the tool handlers in `index.ts` stay simple — they just call the provider and wrap the result.

## Todos

1. **define-provider-interface** — Create `src/providers/DocsProvider.ts` with the interface and shared types.

2. **extract-remote-provider** — Move current fetch logic from `index.ts` into `src/providers/RemoteDocsProvider.ts`. No behavior change.

3. **implement-local-provider** — Create `src/providers/LocalDocsProvider.ts`:
   - Add `sql.js` as a runtime dependency
   - Load `igniteui-docs.db` into memory at init (path resolved relative to `__dirname` or via env var `DB_PATH`)
   - Implement `listComponents` — SQL LIKE query against filename, toc_name, component, keywords, summary
   - Implement `getDoc` — SELECT by framework + filename (append `.md`)
   - Implement `searchDocs` — FTS4 MATCH with `snippet()`, top 20 results
   - Use query patterns from `docs/db.md`

4. **wire-up-index** — Modify `index.ts`:
   - Parse `--local` from `process.argv` (or check `DOCS_MODE` env var)
   - Instantiate the appropriate provider
   - Refactor the 3 doc tool handlers to call `provider.listComponents()` / `provider.getDoc()` / `provider.searchDocs()`
   - Keep `generate_ignite_app` and the prompt unchanged (they don't use docs)

5. **add-sql-js-dependency** — `npm install sql.js` and verify it bundles the WASM file correctly.

6. **update-docs** — Update CLAUDE.md and README.md to document the `--local` flag and dual-mode behavior.

## Mode Detection Logic

```
1. If `--local` flag is present → local mode
2. Else if `DOCS_MODE=local` env var → local mode  
3. Else → remote mode (current default, backward-compatible)
```

## DB Path Resolution (local mode)

1. `DB_PATH` env var if set
2. Otherwise `path.join(__dirname, 'igniteui-docs.db')` — since `__dirname` in compiled output IS `dist/`, the `.db` file is a sibling of the compiled JS.

## Notes

- `sql.js` requires its WASM binary. The default `initSqlJs()` call fetches it from CDN or uses a local path. For Node.js, the npm package bundles it at `node_modules/sql.js/dist/sql-wasm.wasm` — pass `locateFile` to point there.
- The `listComponents` output format should match the remote backend response so MCP clients see identical results regardless of mode.
- No changes to `build-db.ts`, pipeline scripts, or `tsconfig.json`.
- The `.db` file (~20MB) is a build artifact — not committed to git. Users must run the pipeline or `build:db` before using local mode.
