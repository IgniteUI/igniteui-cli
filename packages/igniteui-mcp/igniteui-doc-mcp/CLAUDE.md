# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Ignite UI Documentation MCP Server** — a Model Context Protocol server that provides AI assistants with tools to search and retrieve Ignite UI component documentation. The server loads compressed markdown docs at startup and exposes them via MCP tools such as `list_components`, `get_doc`, and `search_docs`. It includes documentation processing pipelines for Angular, React, WebComponents, and Blazor.

## Project Structure

```
├── src/index.ts                        # MCP server entry point — dual-mode (remote or local SQLite)
├── src/providers/
│   ├── DocsProvider.ts                 # DocsProvider interface (listComponents, getDoc, searchDocs)
│   ├── RemoteDocsProvider.ts           # Remote mode — proxies to URL given via --remote
│   └── LocalDocsProvider.ts            # Local mode — sql.js WASM SQLite with FTS4
├── scripts/
│   ├── build-db.ts                    # Build SQLite DB from compressed docs (better-sqlite3)
│   ├── export-angular-docs.ts          # Export Angular docs from docfx (toc-driven, template expansion, include resolution, API URL resolution)
│   ├── inject-angular-docs.ts          # Inject sample code into docs (replaces <code-view> with component source)
│   ├── compress-angular-docs.ts        # LLM-based compression of docs (~50% size reduction, supports --batch mode)
│   ├── export-react-docs.ts            # Export React docs from xplat gulp build (toc.json-driven, flatten hierarchy)
│   ├── inject-react-docs.ts            # Inject React sample code (github-src based resolution, TSX files)
│   ├── compress-react-docs.ts          # LLM-based compression with React-specific prompt (Igr prefix, supports --batch mode)
│   ├── export-wc-docs.ts              # Export WebComponents docs from xplat gulp build (toc.json-driven, flatten hierarchy)
│   ├── inject-wc-docs.ts              # Inject WC sample code (github-src based, HTML/TS/CSS files)
│   ├── compress-wc-docs.ts            # LLM-based compression with WC-specific prompt (Igc prefix + Component suffix, supports --batch mode)
│   ├── export-blazor-docs.ts          # Export Blazor docs from xplat gulp build (toc.json-driven, flatten hierarchy)
│   ├── inject-blazor-docs.ts          # Inject Blazor sample code (github-src based, .razor/.razor.cs/.css files)
│   ├── compress-blazor-docs.ts        # LLM-based compression with Blazor-specific prompt (Igb prefix, no suffix, supports --batch mode)
│   ├── validate-docs.ts               # LLM-as-Judge validation of compressed docs (platform-independent)
│   ├── export-angular-api.ts          # Build Angular API docs from blazor/api-docs submodule → docs/angular-api/
│   ├── export-react-api.ts            # Build React API docs from blazor/api-docs submodule → docs/react-api/
│   ├── export-wc-api.ts               # Build Web Components API docs from blazor/api-docs submodule → docs/webcomponents-api/
│   └── export-blazor-api.ts           # Build Blazor API docs from blazor/api-docs submodule → docs/blazor-api/
├── docs/
│   ├── knowledgebase.md                # Lessons learned and issues for cross-platform reference (32 entries)
│   ├── db.md                           # SQLite + FTS4 database integration (IMPLEMENTED)
│   ├── batch-compression.md            # OpenAI Batch API for compression (IMPLEMENTED)
│   ├── incremental-processing.md       # Plan: Incremental processing with diff-based pipeline (NOT YET IMPLEMENTED)
│   ├── progress.md                     # Implementation progress tracker
│   ├── impl_plan.md                    # Original implementation plan for code-view replacement
│   ├── prefix_fix.md                   # Plan for fixing component prefix issue
│   ├── toc_based_processing.md         # Plan for toc.yml-driven file selection
│   ├── xplat-docs-architecture.md      # Cross-platform docs architecture analysis (variable replacement, toc.json, apiMap)
│   ├── react-pipeline.md              # React pipeline implementation plan
│   ├── wc-pipeline-plan.md            # WebComponents pipeline implementation plan
│   └── blazor-pipeline-plan.md        # Blazor pipeline implementation plan
├── angular-api/                        # Angular API docs (llms-full.txt files, built by build:docs:angular-api)
├── react-api/                          # React API docs (llms-full.txt files, built by build:docs:react-api)
├── webcomponents-api/                  # Web Components API docs (llms-full.txt files, built by build:docs:wc-api)
├── blazor-api/                         # Blazor API docs (llms-full.txt files, built by build:docs:blazor-api)
├── angular/                            # Git submodules
│   ├── igniteui-docfx/                 # DocFX-based Angular documentation (en/jp/kr)
│   │   └── en/components/toc.yml       # Table of contents — source of truth for which files to process
│   ├── igniteui-angular-samples/       # Angular sample apps for Ignite UI components
│   └── igniteui-angular-examples/      # Angular example projects
├── react/
│   └── igniteui-react-examples/        # React example projects (git submodule)
├── webcomponents/
│   └── igniteui-wc-examples/           # WebComponents example projects (git submodule)
├── blazor/
│   └── igniteui-blazor-examples/       # Blazor example projects (git submodule)
├── common/
│   └── igniteui-xplat-docs/            # Cross-platform docs source (React, Blazor, WC)
│       └── docfx/en/components/toc.json # Cross-platform toc with exclude arrays
├── dist/
│   ├── docs_processing/angular/        # Intermediate output from export:angular
│   ├── docs_prepeared/angular/         # Output from inject:angular (docs with inline sample code)
│   ├── docs_final/angular/             # Final output from compress:angular (LLM-compressed docs)
│   └── validation_report_angular.json  # Output from validate:angular
│   └── igniteui-docs.db                # SQLite DB with FTS4 (built by build-db.ts)
└── dist/                               # TypeScript compilation output (tsc) + pipeline data
```

## Build & Run

```bash
npm install        # install dependencies
npm run build:db   # build SQLite database from compressed docs → dist/igniteui-docs.db
npm run build      # compile TypeScript (tsc) → outputs to ./dist/
npm start          # run MCP server in local mode (default, uses bundled SQLite DB)
```

### API Docs Generation

The `blazor/api-docs` submodule provides the Astro build pipeline used by all four platforms. Run these scripts once (or when upstream API data changes) to populate the `docs/*-api/` directories:

```bash
npm run build:docs:angular-api     # Angular: Astro build → docs/angular-api/
npm run build:docs:wc-api          # Web Components: Astro build → docs/webcomponents-api/
npm run build:docs:react-api       # React: Astro build → docs/react-api/
npm run build:docs:blazor-api      # Blazor: docfx + Astro build → docs/blazor-api/
npm run build:docs:all             # Build all four platforms
```

### Server Modes

| Mode | Activation | Data Source |
|------|-----------|-------------|
| **Local** (default) | No flags needed | Bundled `dist/igniteui-docs.db` via sql.js |
| **Remote** | `--remote <url>` flag | Proxies to the given backend URL |

```bash
# Local mode (default)
node dist/index.js

# Remote mode via CLI flag
node dist/index.js --remote https://your-backend-url.com

# Remote mode via env var (still needs --remote flag without URL)
IGNITEUI_MCP_DOCS_BACKEND_URL=https://your-backend-url.com node dist/index.js --remote

# Custom DB path
DB_PATH=/path/to/igniteui-docs.db node dist/index.js

# Enable debug logging
node dist/index.js --debug
```

Local mode requires `dist/igniteui-docs.db` to exist. Run the pipeline and `npm run build:db` first.

### Database Build

```bash
npm run build:db                          # full rebuild for all frameworks
npm run build:db -- --framework react     # rebuild only react rows
```

The `build:db` step reads `dist/docs_final/<framework>/` and `dist/docs_prepeared/<framework>/`, and produces `dist/igniteui-docs.db`. It must run after compression and before starting the MCP server.

## Angular Documentation Pipeline

```bash
npm run export:angular    # export docs from docfx submodule → dist/docs_processing/angular/
npm run inject:angular    # inject sample code into exported docs → dist/docs_prepeared/angular/
npm run compress:angular  # LLM-compress docs → dist/docs_final/angular/
npm run validate:angular  # LLM-as-Judge quality check → dist/validation_report_angular.json
npm run pipeline:angular  # run all steps: clear → export → inject → compress
npm run clear             # remove the entire dist/ directory
npm run clear:angular     # remove only Angular output dirs (docs_processing, docs_prepeared, docs_final)
npm run clear:react       # remove only React output dirs
npm run clear:blazor      # remove only Blazor output dirs
npm run clear:webcomponents # remove only WebComponents output dirs
```

**`export:angular`** (`scripts/export-angular-docs.ts`): Parses `toc.yml` to get the definitive list of published documentation files (only files referenced in toc are processed). Expands grid templates (grid, treeGrid, hierarchicalGrid, pivotGrid) by resolving `@@include()` directives and `@@if` conditionals. Injects toc metadata (`_tocName`, `_premium`) into each file's frontmatter. Replaces API documentation URL placeholders (`{environment:angularApiUrl}`, `{environment:sassApiUrl}`, `{environment:dvApiBaseUrl}`) with production URLs loaded from `environment.json`. Does NOT replace demo base URLs — those are handled by the inject step. Writes processed files to `dist/docs_processing/angular/`. Accepts an optional language argument (defaults to `en`).

**`inject:angular`** (`scripts/inject-angular-docs.ts`): Processes the exported docs, replacing `<code-view>` elements with actual Angular component source code. Uses two resolution strategies:
- **Route-based** (`demosBaseUrl`, `lobDemosBaseUrl`, `crmDemoBaseUrl`): Parses `app.routes.ts` from `igniteui-angular-samples` to map `iframe-src` paths to component files (`.ts`, `.html`, `.scss`/`.css`)
- **File-based** (`dvDemosBaseUrl`): Uses the `github-src` attribute to locate samples directly under `igniteui-angular-examples/samples/{github-src}/src/`, inlining `app.module.ts`, `app.component.ts`, `.html`, and `.scss`

**`compress:angular`** (`scripts/compress-angular-docs.ts`): Sends each doc through an LLM to reduce size ~50% while preserving structure, code examples, and API references. Uses the OpenAI SDK (reads `OPENAI_API_KEY` from `.env`). The system prompt is Angular-specific (uses `Igx` prefix). CLI args: `--model`, `--api-base`, `--min-size`, `--dry-run`, `--delay`, `--resume-from`, `--only`, `--batch submit|poll|retry`. Validates output has frontmatter (component, keywords, summary, premium) and markdown headers, retrying once on failure. Writes `_compression_stats.json` alongside output. Batch mode uses OpenAI's Batch API for 50% cost reduction — submits all files as a single JSONL batch, polls for completion, and downloads results.

Key compression prompt rules (shared across all platforms):
- Uses platform-specific prefix (`Igx` for Angular, `Igr` for React, `Igc` for WC, `Igb` for Blazor)
- Preserves `_premium` metadata from input as `premium: true` in output
- Does NOT merge separate code blocks (TS, HTML, SCSS) into inline templates
- Does NOT hallucinate content for stub/TODO-only documents
- Does NOT merge separate sections covering different component types/sub-types (e.g. Stacked Area Chart vs Stacked Spline Area Chart each keep their own section and code example)
- Preserves heading levels exactly (## stays ##, ### stays ###) — no demoting, promoting, or combining headers
- Data-heavy files: keep only 1-2 representative items to show the data shape
- Shows progress percentage and token count in console output: `[42%] grid.md (55.3KB)... -> 28.1KB (49% reduction) [7234 tokens]`
- Uses `js-tiktoken` (o200k_base encoding) to count tokens per compressed file
- Writes `_compression_log.csv` (file, original_kb, compressed_kb, reduction_pct, tokens) alongside output
- Writes `total_tokens` to `_compression_stats.json`

**`validate:angular`** (`scripts/validate-docs.ts`): Platform-independent LLM-as-Judge validation (also used by `validate:react`). Samples compressed docs and scores them against originals on 4 dimensions (completeness, accuracy, hallucination, structure) using GPT-5.4. Uses OpenAI structured output (`zodTextFormat` + `client.responses.parse()`) for guaranteed valid JSON — no manual parsing. CLI args: `--input` (required, compressed docs dir), `--original` (auto-inferred from input path), `--output` (default: `dist/validation_report_<platform>.json`), `--model`, `--sample`, `--delay`, `--only`. Reports are named per-platform (e.g. `validation_report_angular.json`).

## React Documentation Pipeline

```bash
npm run build:xplat-react   # run xplat gulp build for React → common/igniteui-xplat-docs/dist/React/
npm run export:react         # flatten & enrich built docs → dist/docs_processing/react/
npm run inject:react         # inject React sample code → dist/docs_prepeared/react/
npm run compress:react       # LLM-compress docs → dist/docs_final/react/
npm run validate:react       # LLM-as-Judge quality check
npm run pipeline:react       # run all steps: clear → build → export → inject → compress
```

**`export:react`** (`scripts/export-react-docs.ts`): Runs the xplat gulp build (`buildReact`) which handles variable replacement, platform filtering, code fence filtering, and API link resolution. Then parses `toc.json` (filtering entries where `"React"` is NOT in the `exclude` array), flattens hierarchical build output to single-level filenames (e.g., `grids/grid/editing.md` → `grid-editing.md`), and injects toc metadata (`_tocName`, `_premium`). Use `--skip-build` to skip the gulp build step if already built.

**`inject:react`** (`scripts/inject-react-docs.ts`): Replaces `<code-view>` tags with actual React sample code from `react/igniteui-react-examples/samples/{github-src}/src/`. Reads `.tsx`, `.ts`, `.css`, `.scss` files from sample directories. Uses a single resolution strategy based on the `github-src` attribute (simpler than Angular's route-based + file-based dual strategy). Includes a post-inject size report flagging files >300KB.

**`compress:react`** (`scripts/compress-react-docs.ts`): Same architecture as Angular compression but with a React-specific system prompt: uses `Igr` prefix (e.g., IgrGrid, IgrButton), no Component/Directive suffixes, TSX code language references. Includes token counting via `js-tiktoken`. All CLI flags identical to Angular: `--model`, `--api-base`, `--min-size`, `--dry-run`, `--delay`, `--resume-from`, `--only`, `--batch submit|poll|retry`.

## WebComponents Documentation Pipeline

```bash
npm run build:xplat-wc          # run xplat gulp build for WebComponents → common/igniteui-xplat-docs/dist/WebComponents/
npm run export:webcomponents     # flatten & enrich built docs → dist/docs_processing/webcomponents/
npm run inject:webcomponents     # inject WC sample code → dist/docs_prepeared/webcomponents/
npm run compress:webcomponents   # LLM-compress docs → dist/docs_final/webcomponents/
npm run validate:webcomponents   # LLM-as-Judge quality check
npm run pipeline:webcomponents   # run all steps: clear → build → export → inject → compress
```

**`export:webcomponents`** (`scripts/export-wc-docs.ts`): Identical architecture to `export:react` — runs the xplat gulp build (`buildWC`), parses `toc.json` (filtering entries where `"WebComponents"` is NOT in the `exclude` array), flattens hierarchical build output, and injects toc metadata. Use `--skip-build` to skip the gulp build step if already built.

**`inject:webcomponents`** (`scripts/inject-wc-docs.ts`): Replaces `<code-view>` tags with actual WebComponents sample code from `webcomponents/igniteui-wc-examples/samples/{github-src}/src/`. Reads `.html`, `.ts`, `.css` files from sample directories (not `.tsx` like React). Uses the same `github-src` attribute resolution strategy as React.

**`compress:webcomponents`** (`scripts/compress-wc-docs.ts`): Same architecture as React/Angular compression but with a WC-specific system prompt: uses `Igc` prefix with `Component` suffix (e.g., IgcGridComponent, IgcButtonComponent), HTML + TypeScript as separate code blocks, `<!-- -->` comments in HTML and `//` comments in TypeScript. Includes token counting via `js-tiktoken`. All CLI flags identical: `--model`, `--api-base`, `--min-size`, `--dry-run`, `--delay`, `--resume-from`, `--only`, `--batch submit|poll|retry`.

## Blazor Documentation Pipeline

```bash
npm run build:xplat-blazor       # run xplat gulp build for Blazor → common/igniteui-xplat-docs/dist/Blazor/
npm run export:blazor             # flatten & enrich built docs → dist/docs_processing/blazor/
npm run inject:blazor             # inject Blazor sample code → dist/docs_prepeared/blazor/
npm run compress:blazor           # LLM-compress docs → dist/docs_final/blazor/
npm run validate:blazor           # LLM-as-Judge quality check
npm run pipeline:blazor           # run all steps: clear → build → export → inject → compress
```

**`export:blazor`** (`scripts/export-blazor-docs.ts`): Identical architecture to `export:react` — runs the xplat gulp build (`buildBlazor`), parses `toc.json` (filtering entries where `"Blazor"` is NOT in the `exclude` array), flattens hierarchical build output, and injects toc metadata. Use `--skip-build` to skip the gulp build step if already built.

**`inject:blazor`** (`scripts/inject-blazor-docs.ts`): Replaces `<code-view>` tags with actual Blazor sample code from `blazor/igniteui-blazor-examples/samples/{github-src}/src/`. Reads `.razor`, `.razor.cs`, `.cs`, `.razor.css`, `.css` files from sample directories. Skips `_Imports.razor`, `.csproj`, `Program.cs`, and `wwwroot/` contents. Uses the same `github-src` attribute resolution strategy as React/WC.

**`compress:blazor`** (`scripts/compress-blazor-docs.ts`): Same architecture as React/Angular/WC compression but with a Blazor-specific system prompt: uses `Igb` prefix with no suffix (e.g., IgbGrid, IgbButton, IgbDatePicker), Razor markup + C# as separate code blocks, `@* comment *@` in Razor blocks and `//` in C# blocks. Includes token counting via `js-tiktoken`. All CLI flags identical: `--model`, `--api-base`, `--min-size`, `--dry-run`, `--delay`, `--resume-from`, `--only`, `--batch submit|poll|retry`.

## Architecture

**MCP Server** (`src/index.ts`): Unified server using `@modelcontextprotocol/sdk` with stdio transport.
- **Dual-mode documentation**: Uses a `DocsProvider` interface (`src/providers/DocsProvider.ts`) with two implementations:
  - `LocalDocsProvider` — loads `dist/igniteui-docs.db` into memory via `sql.js` WASM SQLite, queries with FTS4 (default)
  - `RemoteDocsProvider` — proxies to URL provided via `--remote <url>` flag
  - Mode selected at startup: local by default, `--remote <url>` for remote. `--debug` enables request logging.
- GitHub API tools use `octokit` (requires `GITHUB_TOKEN` env var)
- CLI scaffolding tools use `igniteui-cli` via `npx`
- Six registered tools:
  - `list_components` — list/filter docs by `framework` (required) and optional `filter` keyword
  - `get_doc` — retrieve full markdown content by `framework` (required) + `name` (required, without `.md`)
  - `search_docs` — full-text search by `framework` (required) + `query` (required), top 20 results with snippets
  - `search_api` — discover API entries by keyword or partial component name
  - `get_api_reference` — retrieve full API details for an exact component or class name
  - `get_project_setup_guide` — return setup guides for creating a new Ignite UI project (CLI docs for Angular/React/WC, dotnet + NuGet guides for Blazor)

**Build DB** (`scripts/build-db.ts`): Reads compressed docs from `dist/docs_final/<framework>/`, looks up `_tocName` from `dist/docs_prepeared/<framework>/`, and produces `dist/igniteui-docs.db` using `better-sqlite3`. Supports full rebuild or per-framework rebuild via `--framework` flag. DB schema: `docs` table + `docs_fts` FTS4 virtual table with external content, porter tokenizer, and prefix indexes.

## Key Dependencies

- `@modelcontextprotocol/sdk` — MCP protocol implementation
- `octokit` — GitHub API client used by legacy integration work in this repo
- `dotenv` — env file loading (GITHUB_TOKEN, IGNITEUI_MCP_DOCS_BACKEND_URL)
- `sql.js` — Pure WASM SQLite for the MCP server (loads .db into memory, cross-platform)
- `better-sqlite3` — Native SQLite for build-db.ts (dev dependency, fast bulk inserts)
- `openai` — OpenAI API client (used by compress scripts)
- `js-tiktoken` — Token counting for compressed docs (o200k_base encoding)
- `js-yaml` — YAML parsing for toc.yml processing
- `zod` — input schema validation for tool parameters
- `tsx` — dev dependency for running TypeScript scripts directly
- TypeScript targeting ES2022 with Node16 module resolution

## Important References

- `docs/knowledgebase.md` — Lessons learned and issues encountered across all platform pipelines (32 entries: Angular 1-16, React 17-21, WebComponents 22-26, Blazor/cross-platform 27-32).
- `docs/progress.md` — Implementation progress tracker. Shows which features are done and which are planned.
- `docs/xplat-docs-architecture.md` — Architecture analysis of the shared xplat build system (variable replacement, platform filtering, toc.json, apiMap).
- `docs/react-pipeline.md` — React pipeline implementation plan.
- `docs/wc-pipeline-plan.md` — WebComponents pipeline implementation plan.
- `docs/blazor-pipeline-plan.md` — Blazor pipeline implementation plan.
- `docs/db.md` — SQLite + FTS4 database integration (implemented). Covers schema, `build-db.ts` script, and MCP server architecture.
- `docs/batch-compression.md` — OpenAI Batch API integration (implemented). Adds `--batch submit|poll|retry` to all 4 compress scripts for 50% cost reduction and faster processing.
- `docs/incremental-processing.md` — Plan for incremental processing (not yet implemented). Covers `docs_baseline/`, `diff-docs.ts`, and `--manifest` flag.
- `angular/igniteui-docfx/en/components/toc.yml` — Source of truth for which Angular docs to process. Contains `name`, `premium`, `new`, `updated` metadata per entry.
- `common/igniteui-xplat-docs/docfx/en/components/toc.json` — Source of truth for React, WebComponents, and Blazor docs. Uses `exclude` arrays for platform filtering.
- `angular/igniteui-docfx/en/environment.json` — Production URLs for API documentation links. The `.production` section provides values for `angularApiUrl`, `sassApiUrl`, `dvApiBaseUrl`.

## Submodule Documentation Build (igniteui-docfx)

```bash
cd angular/igniteui-docfx
npm install                        # also runs dotnet tool restore
npm start -- --lang en             # dev server with live reload
npm run build -- --lang en         # static build
npm run spellcheck                 # cspell
npm run lint:md                    # markdownlint
```
