# igniteui-doc-mcp

MCP server that serves pre-compressed Ignite UI component documentation via full-text search. Supports two modes: **remote** (proxies to a backend API) and **local** (bundled SQLite database via sql.js). Includes multi-step pipelines for processing raw documentation into optimized, LLM-friendly markdown for Angular, React, WebComponents, and Blazor.

## Setup

```bash
cd igniteui-doc-mcp
npm install
```

Create a `.env` file with your OpenAI API key (required for compress and validate steps):

```
OPENAI_API_KEY=sk-...
```

### Running the MCP Server

```bash
# Remote mode (default) — proxies to DOCS_BACKEND_URL
node dist/index.js

# Local mode — uses bundled SQLite database
node dist/index.js --local

# Local mode via env var
DOCS_MODE=local node dist/index.js

# Custom DB path for local mode
DB_PATH=/path/to/igniteui-docs.db node dist/index.js --local
```

Local mode requires `dist/igniteui-docs.db`. Run the pipeline and `npm run build:db` to generate it.

### Configuring MCP Clients for Local Mode

To use the server in local mode with an MCP client (VS Code, Claude Desktop, Cursor, etc.), add it to your MCP configuration file with the `--local` flag.

**VS Code** (`.vscode/mcp.json`):
```json
{
  "servers": {
    "igniteui": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/igniteui-doc-mcp/dist/index.js", "--local"]
    }
  }
}
```

**Claude Desktop** (`claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "igniteui": {
      "command": "node",
      "args": ["/absolute/path/to/igniteui-doc-mcp/dist/index.js", "--local"]
    }
  }
}
```

**With custom DB path** (any client — add `env` block):
```json
{
  "command": "node",
  "args": ["/absolute/path/to/igniteui-doc-mcp/dist/index.js", "--local"],
  "env": {
    "DB_PATH": "/absolute/path/to/igniteui-docs.db"
  }
}
```

> **Note:** The `--local` flag makes the server fully self-contained — no backend API or network access needed. The SQLite database (`db/igniteui-docs.db`) is checked into git, so after `npm run build` it is copied to `dist/` and ready to use.

## Pipeline Overview

Each platform (Angular, React, WebComponents, Blazor) has an **incremental pipeline** that only recompresses docs that actually changed, saving LLM API costs and time:

```
export → inject → diff → compress (changed only) → update baseline → build:db
```

| Step | Input | Output | Requires API |
|------|-------|--------|:---:|
| Export | Source docs (docfx/xplat) | `dist/docs_processing/<platform>/` | No |
| Inject | `dist/docs_processing/<platform>/` | `dist/docs_prepeared/<platform>/` | No |
| Diff | `dist/docs_prepeared/<platform>/` vs `docs_baseline/<platform>/` | `dist/diff-manifest.json` | No |
| Compress | `dist/docs_prepeared/<platform>/` (changed only) | `dist/docs_final/<platform>/` | Yes |
| Update Baseline | `dist/docs_prepeared/<platform>/` | `docs_baseline/<platform>/` | No |
| Validate | `dist/docs_prepeared/` + `dist/docs_final/` | `dist/validation_report_<platform>.json` | Yes |
| Build DB | `dist/docs_final/` + `dist/docs_prepeared/` | `dist/igniteui-docs.db` | No |

The **diff** step compares the fresh inject output against a tracked baseline (`docs_baseline/`) using SHA-256 content hashes (with line-ending normalization for cross-platform consistency). Only files classified as `changed` or `added` are sent to the compress step. Deleted files are removed from the output directory. Unchanged files are skipped entirely.

**Export** — Parses the table of contents (Angular: `toc.yml`, others: `toc.json`) to get the definitive list of published docs. For React, WebComponents, and Blazor it first runs the xplat gulp build which handles variable replacement, platform filtering, and API link resolution. Flattens hierarchical directory output into single-level filenames (e.g. `grids/grid/editing.md` → `grid-editing.md`) and injects toc metadata (`_tocName`, `_premium`) into each file's frontmatter.

**Inject** — Replaces `<code-view>` HTML tags with actual component source code from the platform's examples repository. Resolves samples via the `github-src` attribute. Includes a post-inject data trimming step that keeps only 3 representative items from large data arrays and replaces the rest with `// ... N more items`, preventing individual files from exceeding 300KB.

**Compress** — Sends each doc through an LLM with a platform-specific system prompt to reduce size by ~50% while preserving structure, code examples, and API references. Each platform's prompt specifies the correct component prefix (`Igx`/`Igr`/`Igc`/`Igb`), naming conventions, code block languages, and comment syntax. Counts tokens per file via `js-tiktoken` and writes `_compression_log.csv` and `_compression_stats.json` alongside output. When run with `--manifest`, only processes files listed as changed or added.

**Update Baseline** — Copies successfully compressed prepared docs to `docs_baseline/<platform>/` and removes deleted files. This tracked baseline enables the diff step on subsequent runs. On the first run (or with `--full`), all prepared files are copied.

**Validate** — LLM-as-Judge evaluation that samples compressed docs and scores them against the originals on 4 dimensions: completeness, accuracy, hallucination, and structure. Uses OpenAI structured output for guaranteed valid JSON responses.

### Run Full Pipeline

The default pipeline is **incremental** — it only compresses docs that changed since the last run:

```bash
npm run pipeline:angular
npm run pipeline:react
npm run pipeline:webcomponents
npm run pipeline:blazor
```

To force a **full rebuild** (e.g. after prompt changes or model upgrades), use the `:full` variant which skips the diff step and reprocesses everything:

```bash
npm run pipeline:angular:full
npm run pipeline:react:full
npm run pipeline:webcomponents:full
npm run pipeline:blazor:full
```

### Run Individual Steps

```bash
# Angular
npm run export:angular           # parse toc.yml, expand grid templates, inject metadata
npm run inject:angular           # replace <code-view> tags with TS/HTML/SCSS source code
npm run diff:angular             # compare against baseline, output diff-manifest.json
npm run compress:angular         # LLM-compress docs (~50% reduction, Igx prefix)
npm run update-baseline:angular  # sync baseline with freshly processed docs
npm run validate:angular         # LLM-as-Judge quality scoring

# Blazor
npm run build:xplat-blazor       # run xplat gulp build for Blazor
npm run export:blazor            # flatten built docs, filter by toc.json, inject metadata
npm run inject:blazor            # replace <code-view> tags with Razor/C#/CSS source code
npm run diff:blazor              # compare against baseline, output diff-manifest.json
npm run compress:blazor          # LLM-compress docs (~50% reduction, Igb prefix)
npm run update-baseline:blazor   # sync baseline with freshly processed docs
npm run validate:blazor          # LLM-as-Judge quality scoring

# React
npm run build:xplat-react        # run xplat gulp build for React
npm run export:react             # flatten built docs, filter by toc.json, inject metadata
npm run inject:react             # replace <code-view> tags with TSX/CSS source code
npm run diff:react               # compare against baseline, output diff-manifest.json
npm run compress:react           # LLM-compress docs (~50% reduction, Igr prefix)
npm run update-baseline:react    # sync baseline with freshly processed docs
npm run validate:react           # LLM-as-Judge quality scoring

# WebComponents
npm run build:xplat-wc           # run xplat gulp build for WebComponents
npm run export:webcomponents     # flatten built docs, filter by toc.json, inject metadata
npm run inject:webcomponents     # replace <code-view> tags with HTML/TS/CSS source code
npm run diff:webcomponents       # compare against baseline, output diff-manifest.json
npm run compress:webcomponents   # LLM-compress docs (~50% reduction, Igc prefix)
npm run update-baseline:webcomponents  # sync baseline with freshly processed docs
npm run validate:webcomponents   # LLM-as-Judge quality scoring
```

## Scripts Reference

### export-angular-docs.ts

Reads `toc.yml` to determine which files to process, expands grid templates, and copies docs with metadata to the processing directory.

```bash
npm run export:angular
# or directly:
npx tsx scripts/export-angular-docs.ts [lang]
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `[lang]` | Language code (positional, first arg) | `en` |

### inject-angular-docs.ts

Replaces `<code-view>` tags in exported docs with actual Angular component source code (TypeScript, HTML, SCSS).

```bash
npm run inject:angular
# or directly:
npx tsx scripts/inject-angular-docs.ts
```

No CLI parameters.

### compress-angular-docs.ts / compress-react-docs.ts / compress-wc-docs.ts / compress-blazor-docs.ts

Uses an LLM to compress prepared docs into concise, structured markdown. Each script has a platform-specific system prompt (Angular uses `Igx` prefix, React uses `Igr`, WebComponents uses `Igc` + `Component` suffix, Blazor uses `Igb`). All compress scripts count tokens per file using `js-tiktoken` (o200k_base encoding). Requires `OPENAI_API_KEY` in `.env`.

```bash
npm run compress:angular
npm run compress:react
npm run compress:webcomponents
npm run compress:blazor
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--model <name>` | OpenAI model to use | `gpt-5-mini` |
| `--api-base <url>` | Custom OpenAI API base URL | OpenAI default |
| `--min-size <kb>` | Skip files smaller than this (KB) | `0` |
| `--delay <seconds>` | Delay between API calls | `0.5` |
| `--dry-run` | Show what would be processed without calling the API | off |
| `--resume-from <file>` | Continue processing from a specific file (e.g. `grid.md`) | none |
| `--only <file>` | Process a single file only (e.g. `button.md`) | none |
| `--batch submit\|poll\|retry` | Use OpenAI Batch API (50% cheaper, async) | off (sequential) |
| `--manifest <path>` | Diff manifest JSON — only compress changed/added files | none (process all) |

**Output files** (written to `dist/docs_final/<platform>/`):
- Compressed `.md` files
- `_compression_stats.json` — aggregate stats including `total_tokens`
- `_compression_log.csv` — per-file log with columns: `file,original_kb,compressed_kb,reduction_pct,tokens`
- `_batch_state.json` — batch mode state (batch ID, status, failed/invalid files)
- `_batch_input.jsonl` — batch mode JSONL input file

**Examples:**

```bash
# Process only button.md
npm run compress:angular -- --only button.md

# Resume from grid.md after a failure
npm run compress:angular -- --resume-from grid.md

# Dry run with a different model
npm run compress:angular -- --model gpt-5.1 --dry-run

# Skip small files
npm run compress:angular -- --min-size 2

# Batch mode (50% cost reduction via OpenAI Batch API)
npm run compress:react -- --batch submit           # Step 1: upload & create batch
npm run compress:react -- --batch poll             # Step 2: poll, download & validate results
npm run compress:react -- --batch retry            # Step 3: retry failed/invalid files (optional)

# Batch with filters
npm run compress:react -- --batch submit --only grid.md --model gpt-5-mini

# Incremental mode (only compress changed files from diff manifest)
npm run compress:angular -- --manifest dist/diff-manifest.json
```

### diff-docs.ts

Compares freshly prepared docs (`dist/docs_prepeared/<platform>/`) against the tracked baseline (`docs_baseline/<platform>/`) using SHA-256 content hashes. Normalizes line endings to `\n` before hashing for cross-platform consistency (Windows CRLF vs Linux LF). Outputs a JSON manifest classifying each file as changed, added, deleted, or unchanged.

```bash
npm run diff:angular
# or directly:
npx tsx scripts/diff-docs.ts --framework angular
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--framework <name>` | **(Required)** Platform to diff (`angular`, `react`, `blazor`, `webcomponents`) | none |

**Output:** `dist/diff-manifest.json`

```json
{
  "framework": "angular",
  "changed": ["grid.md", "button.md"],
  "added": ["new-component.md"],
  "deleted": ["deprecated-component.md"],
  "unchanged": ["accordion.md", "action-strip.md", "..."]
}
```

When `docs_baseline/<platform>/` doesn't exist (first run), all files are classified as `added`.

### update-baseline.ts

After successful compression, updates the tracked baseline by copying changed/added files from `dist/docs_prepeared/<platform>/` to `docs_baseline/<platform>/` and removing deleted files.

```bash
npm run update-baseline:angular
# or directly:
npx tsx scripts/update-baseline.ts --framework angular --manifest dist/diff-manifest.json
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--framework <name>` | **(Required)** Platform to update | none |
| `--manifest <path>` | Path to diff manifest JSON | none |
| `--full` | Copy ALL prepared files (ignores manifest, for bootstrap/force rebuild) | off |

Either `--manifest` or `--full` is required.

### validate-docs.ts

LLM-as-Judge validation that scores compressed docs against their originals on completeness, accuracy, hallucination, and structure quality. Platform-independent — pass the input directory as a parameter. Requires `OPENAI_API_KEY` in `.env`.

```bash
npm run validate:angular
# or directly:
npx tsx --env-file=.env scripts/validate-docs.ts --input ./dist/docs_final/angular [options]
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--input <dir>` | **(Required)** Path to compressed docs directory | none |
| `--original <dir>` | Path to original (pre-compress) docs directory | Inferred by replacing `docs_final` with `docs_prepeared` in `--input` |
| `--output <path>` | Path for the JSON report file | `dist/validation_report_<platform>.json` |
| `--model <name>` | OpenAI model for judging | `gpt-5.1` |
| `--api-base <url>` | Custom OpenAI API base URL | OpenAI default |
| `--sample <count>` | Number of files to validate (stratified by size) | `10` |
| `--delay <seconds>` | Delay between API calls | `1` |
| `--only <file>` | Validate a single file only (e.g. `button.md`) | none |

**Examples:**

```bash
# Validate 20 random files
npm run validate:angular -- --sample 20

# Validate a specific file
npm run validate:angular -- --only button.md

# Validate all files
npm run validate:angular -- --sample 9999
```

Output is saved to `dist/validation_report_angular.json` (platform derived from `--input` path).

### build-db.ts

Builds a SQLite database with FTS4 full-text search from compressed docs. Reads `dist/docs_final/<framework>/` for doc content and `dist/docs_prepeared/<framework>/` for `_tocName` metadata. Produces `dist/igniteui-docs.db` (~20MB for ~1,200 docs).

```bash
npm run build:db
# or directly:
npx tsx scripts/build-db.ts [options]
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--framework <name>` | Rebuild only one framework (`angular`, `react`, `blazor`, `webcomponents`) | all frameworks |

Full rebuild drops and recreates all tables. Per-framework rebuild deletes only that framework's rows and reinserts them.

**Examples:**

```bash
# Full rebuild for all frameworks
npm run build:db

# Rebuild only react rows (preserves other frameworks)
npm run build:db -- --framework react
```

## Cleanup Scripts

```bash
npm run clear                # Delete entire dist/ directory
npm run clear:build          # Delete only working dirs (docs_processing/ + docs_prepeared/), preserves docs_final/ and DB
npm run clear:angular        # Delete all Angular build artifacts (docs_processing, docs_prepeared, docs_final)
npm run clear:react          # Delete only React build artifacts
npm run clear:blazor         # Delete only Blazor build artifacts
npm run clear:webcomponents  # Delete only WebComponents build artifacts
```

`clear:build` is used by the incremental pipeline — it clears the working directories while preserving `dist/docs_final/` (needed for unchanged files) and `dist/igniteui-docs.db`.

Per-platform clear removes the platform subdirectory from `docs_processing/`, `docs_prepeared/`, and `docs_final/`. Use these for a full rebuild of a single platform.

## MCP Server

Build the database, compile TypeScript, and start:

```bash
npm run build:db   # build SQLite database from compressed docs
npm run build      # compile TypeScript
npm run start      # start MCP server
```

### MCP Client Configuration

```json
{
  "mcpServers": {
    "igniteui-docs": {
      "command": "node",
      "args": ["path/to/igniteui-doc-mcp/dist/index.js"]
    }
  }
}
```

The server loads `dist/igniteui-docs.db` (SQLite with FTS4) into memory via `sql.js` and serves ~1,200 docs across all 4 frameworks.

### Tools

| Tool | Parameters | Description |
|------|-----------|-------------|
| `list_components` | `framework` (required), `filter?` | List docs for a framework, optionally filtered by keyword (LIKE match against filename, component, toc_name, keywords, summary) |
| `get_doc` | `framework` (required), `name` (required) | Return full markdown content of a specific doc. `name` is without `.md` extension |
| `search_docs` | `query` (required), `framework` (required) | FTS4 full-text search with Porter stemming. Returns top 20 results with snippet excerpts |
| `generate_ignite_app` | `name` (required), `framework` (required), `type?`, `template?`, `outputPath?` | Scaffold a new Ignite UI project using the Ignite UI CLI |

#### generate_ignite_app

Creates a new Ignite UI project with complete structure, dependencies, and configuration files using the Ignite UI CLI.

**Supported frameworks:** `angular`, `react`, `webcomponents`

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `name` | Yes | Project folder name (alphanumeric, `-`, `_`) |
| `framework` | Yes | `angular`, `react`, or `webcomponents` |
| `type` | No | CLI template type. Defaults: `igx-ts` (Angular), `igr-ts` (React), `igc-ts` (WebComponents) |
| `template` | No | UI layout template: `base` (default), `side-nav`, or `empty` |
| `outputPath` | No | Absolute or relative path where the project should be created. Defaults to current working directory |

**Before using:** Run `list_components` to discover components that match your requirements (e.g. search for `"card"`, `"chart"`, `"grid"`).

**Next steps after generation:** `cd <name>` → `npm install` → `npm start`

**Example:**
```json
{
  "name": "my-dashboard",
  "framework": "angular",
  "template": "side-nav",
  "outputPath": "C:/projects"
}
```

> **Prerequisites:** Ensure the following global packages are installed before using this tool:
> ```bash
> npm i -g --ignore-scripts @angular/cli@latest
> npm i -g --ignore-scripts igniteui-cli@latest
> npm i -g --ignore-scripts @igniteui/cli-core@latest
> npm i -g --ignore-scripts @igniteui/angular-schematics@latest
> ```

## Directory Structure

```
igniteui-doc-mcp/
  angular/                          # Angular git submodules
    igniteui-docfx/                 # Documentation source (markdown + toc.yml)
    igniteui-angular-samples/       # Angular sample apps (component source code)
    igniteui-angular-examples/      # Additional examples (charts, maps, etc.)
  react/                            # React git submodules
    igniteui-react-examples/        # React example projects
  webcomponents/                    # WebComponents git submodules
    igniteui-wc-examples/           # WebComponents example projects
  blazor/                           # Blazor git submodules
    igniteui-blazor-examples/       # Blazor example projects
  common/                           # Cross-platform git submodules
    igniteui-xplat-docs/            # Shared docs for React, Blazor, WebComponents
  docs_baseline/                    # Tracked in git: post-inject snapshots for incremental diff
    angular/                        # Last-processed prepared docs (per platform)
    react/
    blazor/
    webcomponents/
  scripts/                          # Pipeline scripts
    build-db.ts                     # Build SQLite DB from compressed docs
    diff-docs.ts                    # Compare prepared docs against baseline (SHA-256)
    update-baseline.ts              # Sync baseline after successful compression
  src/                              # MCP server source
    index.ts                        # MCP server (sql.js + FTS4 queries)
    sql.js.d.ts                     # Type declarations for sql.js
  dist/                             # Build artifacts (gitignored)
    docs_processing/<platform>/     # Export output
    docs_prepeared/<platform>/      # Inject output (code samples embedded)
    docs_final/<platform>/          # Compress output (LLM-compressed)
      _compression_stats.json       # Aggregate compression stats (includes total_tokens)
      _compression_log.csv          # Per-file log (file, sizes, tokens)
    diff-manifest.json              # Diff output (changed/added/deleted/unchanged lists)
    igniteui-docs.db                # SQLite DB with FTS4 (built by build-db.ts)
    validation_report_<platform>.json  # Validation results (per platform)
  docs/                             # Plans and documentation
  .gitattributes                    # Enforces LF line endings for docs_baseline/
```

## Docs

| File | Description |
|------|-------------|
| `docs/progress.md` | Implementation progress tracker |
| `docs/knowledgebase.md` | Cross-platform lessons learned (32 entries) |
| `docs/xplat-docs-architecture.md` | Cross-platform docs architecture (variable replacement, toc.json, apiMap) |
| `docs/react-pipeline.md` | React pipeline implementation plan |
| `docs/wc-pipeline-plan.md` | WebComponents pipeline implementation plan |
| `docs/blazor-pipeline-plan.md` | Blazor pipeline implementation plan |
| `docs/db.md` | SQLite + FTS4 database integration (implemented) |
| `docs/batch-compression.md` | OpenAI Batch API for compression — 50% cost reduction (implemented) |
| `docs/incremental-processing.md` | Incremental processing design — diff-based compression to skip unchanged docs (implemented) |
| `docs/impl_plan.md` | Code-view injection plan |
| `docs/toc_based_processing.md` | TOC-based file selection plan |
| `docs/prefix_fix.md` | Angular prefix fix plan |
