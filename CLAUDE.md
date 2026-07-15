# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build, Test, Lint

```bash
yarn install                    # REQUIRED — must use yarn (not npm) for workspace resolution
npm run build                   # TypeScript compilation (tsc) + config schema generation
npm run test                    # lint + build + tests with coverage (via pretest hook)
npm run jasmine                 # tests only — no lint/build/coverage
npm run lint                    # ESLint (flat config in eslint.config.mjs)
```

To run a single test: edit `spec/jasmine-runner.ts` to filter `spec_files`, then `npm run jasmine`. Tests are Jasmine specs under `spec/` (unit + acceptance) and within individual packages.

### MCP Server (`packages/igniteui-mcp/igniteui-doc-mcp`)

Workspace package — part of yarn workspaces and lerna. Built automatically by `npm run build` via the `build:mcp` script. Has its own `tsconfig.json` (ES2022/ESM, separate from root CJS config).

```bash
npm run build:mcp               # build MCP server (also runs as part of npm run build)
cd packages/igniteui-mcp/igniteui-doc-mcp
npm run build:db                # build SQLite DB from compressed docs (manual step)
npm run pipeline:angular        # incremental doc pipeline (also: react, blazor, webcomponents)
npm run pipeline:angular:full   # full rebuild pipeline
npm run inspector               # test with MCP Inspector
```

## Architecture

**Monorepo** managed with lerna + yarn workspaces. Five packages:

| Package | npm | Path |
|---------|-----|------|
| CLI (entry point) | `igniteui-cli` | `packages/cli` |
| Core (shared logic) | `@igniteui/cli-core` | `packages/core` |
| Angular Templates | `@igniteui/angular-templates` | `packages/igx-templates` |
| Angular Schematics | `@igniteui/angular-schematics` | `packages/ng-schematics` |
| MCP Server | `@igniteui/mcp-server` | `packages/igniteui-mcp/igniteui-doc-mcp` |

**Core is the dependency root** — changes to `packages/core` affect all other packages. Always rebuild the full monorepo after core changes.

### Build System

- TypeScript compiled with `tsc` directly (no bundler). Two configs: `tsconfig.json` (dev) and `tsconfig-pack.json` (production).
- `packages/core/types/Config.ts` is source of truth for config schema. Modifying it requires `npm run config-schema` (included in `npm run build`).
- Monorepo targets ES6/CommonJS. MCP server targets ES2022 with Node16 module resolution (`"type": "module"`).
- Path aliases in tsconfig: `@igniteui/cli-core` → `packages/core`, `@igniteui/angular-templates` → `packages/igx-templates`, etc.

### Template System

- Handlebars for template processing
- Templates in `packages/cli/templates/**/files/` and `packages/igx-templates/`
- Component/template IDs (e.g., "grid", "combo") used by `ig add` command
- Default framework is **jQuery** when not specified

### MCP Server

- `McpServer` from `@modelcontextprotocol/sdk` with stdio transport
- Two modes: **Remote** (default, proxies to `DOCS_BACKEND_URL`) and **Local** (`--local` flag, uses sql.js WASM with FTS4)
- Framework detection via component prefix: `Igx` → Angular, `Igr` → React, `Igc` → Web Components, `Igb` → Blazor
- DB build uses `better-sqlite3` (native, dev only); runtime uses `sql.js` (WASM)
- Doc compression uses OpenAI API (`OPENAI_API_KEY` in `.env`)
- Git submodules under `packages/igniteui-mcp/igniteui-doc-mcp/` provide documentation source repos
- Consult `packages/igniteui-mcp/igniteui-doc-mcp/docs/knowledgebase.md` before debugging pipeline problems

## Key Conventions

- **yarn for install, npm for scripts**
- CI runs on Node 20 with `yarn --frozen-lockfile`
- ESLint: `no-var`, `no-eval`, `prefer-const`, `no-console` (off in test files), `no-duplicate-imports`
- Test files match pattern `*[sS]pec.ts` — found in `spec/`, `packages/cli/migrations/`, `packages/igx-templates/`, `packages/ng-schematics/`
