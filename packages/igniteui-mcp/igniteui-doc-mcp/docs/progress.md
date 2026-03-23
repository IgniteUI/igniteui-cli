# Implementation Progress

Tracks which plans/features have been implemented and which are pending.

## Implemented

### Prefix Fix (`prefix_fix.md`)
- **Status**: ✅ Done
- **What**: Fixed LLM compress prompt using React `Igr` prefix instead of Angular `Igx`
- **Files changed**: `scripts/compress-angular-docs.ts` (3 lines in system prompt)

### Code-View Injection (`impl_plan.md`)
- **Status**: ✅ Done
- **What**: Script that replaces `<code-view>` tags with actual Angular component source code (TS/HTML/SCSS)
- **Files changed**: `scripts/inject-angular-docs.ts`

### TOC-Based Processing (`toc_based_processing.md`)
- **Status**: ✅ Done
- **What**: Export step reads `toc.yml` to determine which files to process, injects `_tocName` and `_premium` metadata into frontmatter
- **Files changed**: `scripts/export-angular-docs.ts`, `scripts/compress-angular-docs.ts`

### Compress Prompt Improvements
- **Status**: ✅ Done
- **What**: Anti-hallucination rule, no-merge rule for separate code blocks, `_premium`/`_tocName` carry-through
- **Files changed**: `scripts/compress-angular-docs.ts` (system prompt)

### Single File / Resume Processing
- **Status**: ✅ Done
- **What**: Added `--only` flag to process a single file and `--resume-from` to continue from a specific file
- **Files changed**: `scripts/compress-angular-docs.ts`

### Validation Script (`validate-docs.ts`)
- **Status**: ✅ Done
- **What**: Platform-independent LLM-as-Judge script using GPT-5.1 to score compressed docs on completeness, accuracy, hallucination, structure. Uses OpenAI structured output (`zodTextFormat` + `client.responses.parse()`) for guaranteed valid JSON.
- **Files changed**: `scripts/validate-docs.ts`, `package.json` (npm scripts for `validate:angular`, `validate:react`, `validate:webcomponents`, `validate:blazor`)

### React Documentation Pipeline
- **Status**: ✅ Done
- **What**: Full export → inject → compress pipeline for React docs using xplat gulp build + toc.json filtering
- **Files created**: `scripts/export-react-docs.ts`, `scripts/inject-react-docs.ts`, `scripts/compress-react-docs.ts`
- **Files changed**: `package.json` (npm scripts), `.gitmodules` (react examples submodule), `CLAUDE.md`
- **Key differences from Angular**: Uses toc.json with `exclude` arrays instead of toc.yml, flattens hierarchical build output to flat filenames, uses `github-src` attribute directly for sample resolution (no route parsing), reads TSX files instead of TS/HTML/SCSS, React-specific compress prompt with `Igr` prefix

### WebComponents Documentation Pipeline
- **Status**: ✅ Done
- **What**: Full export → inject → compress pipeline for WebComponents docs using xplat gulp build + toc.json filtering
- **Files created**: `scripts/export-wc-docs.ts`, `scripts/inject-wc-docs.ts`, `scripts/compress-wc-docs.ts`
- **Files changed**: `package.json` (npm scripts), `.gitmodules` (wc examples submodule), `CLAUDE.md`
- **Key differences from React**: Uses `Igc` prefix with `Component` suffix (e.g. `IgcGridComponent`), reads `.html`/`.ts`/`.css` files (not `.tsx`), toc.json exclude filter checks `"WebComponents"`, built output from `dist/WebComponents/`, HTML+TypeScript as separate blocks in compress prompt

### Token Counting in Compression Scripts
- **Status**: ✅ Done
- **What**: Added `js-tiktoken` (o200k_base encoding via `gpt-4o` model) to all four compress scripts to count tokens per compressed file
- **Files changed**: `scripts/compress-angular-docs.ts`, `scripts/compress-react-docs.ts`, `scripts/compress-wc-docs.ts`, `scripts/compress-blazor-docs.ts`, `package.json`
- **Output**: Per-file token count in console (`[7234 tokens]`), total tokens in summary, `_compression_log.csv` with per-file stats, `total_tokens` field in `_compression_stats.json`

### Blazor Documentation Pipeline
- **Status**: ✅ Done
- **What**: Full export → inject → compress pipeline for Blazor docs using xplat gulp build + toc.json filtering
- **Files created**: `scripts/export-blazor-docs.ts`, `scripts/inject-blazor-docs.ts`, `scripts/compress-blazor-docs.ts`
- **Files changed**: `package.json` (npm scripts), `.gitmodules` (blazor examples submodule), `CLAUDE.md`
- **Key differences from React/WC**: Uses `Igb` prefix with no suffix (e.g. `IgbGrid`), reads `.razor`/`.razor.cs`/`.cs`/`.razor.css`/`.css` files, toc.json exclude filter checks `"Blazor"`, built output from `dist/Blazor/`, Razor+C# as separate blocks in compress prompt, `@* comment *@` syntax in Razor blocks

### Knowledgebase Cross-Platform Entries
- **Status**: ✅ Done
- **What**: Added entries 27-31 to `docs/knowledgebase.md` covering Blazor file types, cross-platform architecture (Option A: gulp build first), Blazor naming inconsistency, toc.json vs toc.yml, backtick sample syntax. Added Related Documentation table referencing all docs.
- **Files changed**: `docs/knowledgebase.md`

### Compress Prompt: Anti-Merge and Header Preservation
- **Status**: ✅ Done
- **What**: Fixed LLM merging separate variant sections (e.g. Stacked Area + Stacked Spline Area → combined section with dropped examples). Added three reinforcing rules to all four compress scripts: (1) sections covering different component types are NOT redundant, (2) heading levels must be preserved exactly, (3) separate sections must not be merged into combined sections.
- **Files changed**: `scripts/compress-angular-docs.ts`, `scripts/compress-react-docs.ts`, `scripts/compress-wc-docs.ts`, `scripts/compress-blazor-docs.ts` (system prompts), `docs/knowledgebase.md` (entry #32)

### SQLite + FTS4 Database (`db.md`)
- **Status**: ✅ Done
- **What**: Replaced file-based MCP server with SQLite FTS4 full-text search database indexing all 4 frameworks (~1,208 docs)
- **Files created**: `scripts/build-db.ts`, `src/sql.js.d.ts`
- **Files changed**: `src/index.ts` (full rewrite), `package.json` (renamed to `igniteui-docs-mcp`, added `build:db` script, added `sql.js` + `better-sqlite3` deps)
- **Key changes**:
  - `build-db.ts` uses `better-sqlite3` to read `docs_final/` + `docs_prepeared/` and produce `dist/igniteui-docs.db`
  - `src/index.ts` uses `sql.js` (WASM SQLite) to load the DB and serve queries
  - All 3 MCP tools gain a `framework` parameter (optional for `igniteui_list_components`/`igniteui_search_docs`, required for `igniteui_get_doc`)
  - `igniteui_search_docs` uses FTS4 MATCH with Porter stemming and `snippet()` excerpts (top 20 results)
  - `igniteui_list_components` uses SQL LIKE for filtering across filename, toc_name, component, keywords, summary
  - `toc_name` looked up from prepared docs (`_tocName` frontmatter field) at build time
  - Server renamed from `igniteui-react-docs` to `igniteui-docs`
  - DB size: ~20MB for 1,208 docs

### Batch Compression (`batch-compression.md`)
- **Status**: ✅ Done
- **What**: OpenAI Batch API integration for all 4 compress scripts. Submits all ~300 docs per framework as a single async batch instead of sequential API calls. 50% cost reduction, completion in minutes to ~1 hour.
- **Files changed**: `scripts/compress-angular-docs.ts`, `scripts/compress-react-docs.ts`, `scripts/compress-wc-docs.ts`, `scripts/compress-blazor-docs.ts`, `package.json`
- **Key features**:
  - `--batch submit` — builds JSONL, uploads to OpenAI, creates batch, saves `_batch_state.json`
  - `--batch poll` — polls batch status every 30s, downloads results, applies `stripResponseWrapper()` + `validateStructure()`, writes output files + stats/log
  - `--batch retry` — re-submits failed/invalid files as a new batch
  - Uses relative paths as `custom_id` to handle Angular's nested subdirectories (grid/, hierarchical-grid/, tree-grid/ share filenames)
  - Displays batch-level errors from `batch.errors.data` on failure
  - 8 convenience npm scripts: `compress:batch:{angular,react,blazor,wc}:{submit,poll}`
  - Existing `--only`, `--resume-from`, `--min-size`, `--model` flags work with `--batch submit`
  - Sequential mode unchanged — omitting `--batch` runs the original one-by-one flow

## Not Implemented

### Incremental Processing (`incremental-processing.md`)
- **Status**: ⬜ Planned
- **What**: Avoid reprocessing unchanged documents by tracking prepared docs in repo and diffing
- **Key tasks**:
  - [ ] Create `docs_baseline/` tracked directory
  - [ ] Create `scripts/diff-docs.ts` (content hash comparison)
  - [ ] Add `--manifest` flag to compress script
  - [ ] Create `scripts/update-baseline.ts`
  - [ ] Add `clear:build` script (partial clear, preserves `docs_final/`)
  - [ ] Update pipeline npm scripts
