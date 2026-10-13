# AGENTS.md

Guidance for AI coding agents working in this repository.

## Build, Test, Lint

```bash
yarn install                    # REQUIRED — must use yarn (not npm) for workspace resolution
npm run build                   # tsc + config schema generation + MCP server build
npm run test                    # lint + build + tests with coverage (via pretest hook)
npm run jasmine                 # tests only — no lint/build/coverage
npm run lint                    # ESLint (flat config in eslint.config.mjs)
scripts/smoke-test.sh           # scaffold + add every template + install + build
```

Tests are Jasmine specs under `spec/` (unit + acceptance) and within individual packages.

`scripts/smoke-test.sh` is the only check that a generated project actually installs and builds — the Jasmine specs stub `PackageManager.installPackages`. Run it after touching anything under `packages/cli/templates/` or `packages/igx-templates/`. Running one spec file, the specs that guard templates, running the smoke test, reading its results and editing the script: `igniteui-cli-smoke-test` skill.

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

Adding or changing an MCP tool (schema, handler, description, tests, every doc that lists the tool): `igniteui-cli-mcp-tool` skill.

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

- Placeholders are substituted by the CLI, not a template engine: `<%=ClassName%>` style in Angular templates, `$(ClassName)` style in React and Web Components templates
- Templates in `packages/cli/templates/**/files/` and `packages/igx-templates/`
- Component/template IDs (e.g., "grid", "combo") used by `ig add` command
- Default framework is **jQuery** when not specified

### MCP Server

- `McpServer` from `@modelcontextprotocol/sdk` with stdio transport
- Two modes: **Local** (default, uses sql.js WASM with FTS4 over the bundled database) and **Remote** (`--remote <url>`, proxies to the .NET docs backend; `IGNITEUI_MCP_DOCS_BACKEND_URL` supplies the URL but does not enable remote mode on its own)
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

## Maintenance Workflows

Template maintenance procedures are skills in `.agents/skills/`. Before adding or changing a workflow, read the guide in `.agents/README.md`.

These rules bind every run of a workflow skill, whether from the main session or a subagent. No tool enforces them.

- **Never commit.** Leave changes in the working tree and report them with `git status --short` and `git diff --stat`; a human reviews and commits. Git stays read-only (`status`, `diff`, `log`, `show`): do not run `git add`, `git commit`, `git push`, `git stash`, `git checkout -b`, `git branch`, or any other git command that writes, and do not open pull requests.
- Temporary files (e.g. `npm pack` output for checking a package's type declarations) go in a temporary directory **outside the repository**. The one exception is `output/` (gitignored), which belongs to `scripts/smoke-test.sh`: smoke runs and commands inside a kept smoke project write there; files under `output/` change only through those runs.
- Edit the `.ts` source and rebuild; compiled output (`*.js`, `*.js.map` next to a `.ts`) is never edited by hand.
- Leave the repository's own manifests and lockfiles untouched: root `package.json`, `packages/*/package.json`, `packages/igniteui-mcp/igniteui-doc-mcp/package.json` and `server.json`, `yarn.lock`, any `package-lock.json`. Project-template manifests under `**/files/package.json` are template content and may be edited when the task calls for it.
- Leave the CLI's own version alone: do not run `lerna`, and do not edit `lerna.json` or `scripts/versionScript.ts`. Leave anything under `.git/`, `coverage/` or any `node_modules/` untouched.
- Leave secrets unread, at any depth: `.env`, `.env.*`, `.npmrc`, `secrets/`, `*.pem`, `*.key`, `*.pfx`. When a task seems to need one, stop and ask.
- When something is ambiguous or out of scope, stop and report instead of guessing.
