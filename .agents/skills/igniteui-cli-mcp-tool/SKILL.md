---
name: igniteui-cli-mcp-tool
description: "Add a tool to the Ignite UI MCP server (@igniteui/mcp-server) or change an existing one: input schema, handler, response text, description, tests and every doc that lists the tool. WHEN TO USE: adding, changing, renaming or removing an MCP tool or its parameters. WHEN NOT TO USE: the docs pipeline, database build or API-docs generation (the package's DEVELOPMENT.md)."
license: MIT
---

# MCP Tool

Adds or changes a **tool** of the Ignite UI MCP server: `packages/igniteui-mcp/igniteui-doc-mcp`, published as `@igniteui/mcp-server` and started by `ig mcp`. Paths below are relative to that folder unless they start with `packages/`, `spec/` or `.agents/`.

---

## Input

- **Change**: a new tool, or the existing tool and what changes (a parameter, behavior, response text, description).
- For a new tool, also: the question it answers and the data behind it.

If the change, or for a new tool its question and data, is missing, stop and ask.

---

## Limits

- Your changes are in `src/`, `spec/unit/mcp-runtime-spec.ts`, the docs in Step 6 and, for a doc tool, `../docs-backend/` and `../shared-fixtures/`. A new non-TypeScript asset under `src/tools/` (like `setup_*.md`) also needs its line in `scripts/build.ts`, the only thing that copies it into `dist/`; `constants.ts` reads those files at import, so a missing copy crashes the server at startup.
- Tool and parameter names are a public contract. Tool names are written into the AI skills `ig ai-config` copies from the upstream library repos (`scripts/update-skills.ts`), and `get_api_reference` with its `platform` / `component` / `member` parameters is baked into the docs database as `mcp:get_api_reference?…` links. For a rename or removal, stop and report every reference you find (`git grep -n <name>` from the repository root).
- The tool reads only data the package already ships: the `files` list in `package.json` is off limits. When the tool needs a new data file, stop and report.
- A new `DocsProvider` method needs a new endpoint in the .NET backend. Confirm that scope with the user before starting.
- `docs/*-api/` is tracked build output. When API tools load 0 entries, stop and ask before running `npm run build:docs:*`.
- `CHANGELOG.md` is written at release time: propose a line in your report.

---

## Tool Anatomy

| Part | Where |
|---|---|
| Registration | `src/index.ts`: `registerApiTools` (backed by `ApiDocLoader`) or `registerDocTools` (backed by `DocsProvider`) |
| Input schema | `src/tools/schemas.ts`: an exported `z.object` and its `z.infer` type |
| Handler | `src/tools/handlers.ts`: `create<Name>Handler(deps)` returning `(params) => Promise<CallToolResult>` |
| Description | `TOOL_DESCRIPTIONS.<tool_name>` in `src/tools/constants.ts` |
| Usage guide | `USAGE_GUIDE` in `src/tools/constants.ts`, served as the `igniteui-usage-guide` prompt |
| Server instructions | `instructions` in `src/index.ts`: rules that span tools only (framework detection, library boundary, `resolve_import` before imports) |
| Deprecated components | `src/config/deprecations.ts` |

The doc tools (`list_components`, `get_doc`, `search_docs`, `get_project_setup_guide`) are registered inline in `src/index.ts` with helpers in `src/tools/doc-tools.ts`; change them in place. A new tool takes the schemas + handlers shape. `resolve_import` is the model: `git show --stat d765e6dbb` lists every file its addition touched. Its `package.json` script and new `data/` files are the parts this workflow leaves to a human (see "Limits").

A new tool's name is snake_case, verb first, in its family's vocabulary: `get_doc`, `search_docs`, `get_api_reference`, `search_api`, `resolve_import`.

### Inputs

- The framework parameter is `framework` on doc tools and `platform` on API tools; a new tool uses its family's name. Values come from `PLATFORMS` in `src/config/platforms.ts`.
- Every string parameter you add gets `.trim()`, `.min(1, '<message>')`, `.max(<CONSTANT>, '<message>')` and a `.describe()` with two or three concrete examples. The calling agent reads `.describe()` to fill the field and the validation message when it gets it wrong. Existing parameters keep their current validation unless the change is about them.
- Agents send near-miss input: an array serialized as a JSON string, `Component#member`, a pasted import statement, `"*"` meaning "everything". When the intent is recoverable, repair it, in a `z.preprocess` (see `extractSymbolNames`) or a hardening block at the top of the handler whose comment names the observed input, and test each shape.

### Responses

- Return `{ content: [{ type: "text", text }] }` with markdown text.
- Something requested does not exist: `isError: true`, and the text names the input and the tool to call next (`… not found in Angular. Use search_api to find available components.`). A search with no hits is an answer: plain text, no `isError`.
- Keep responses small. Offer narrowing parameters (`section`, `member`, `group`) and say in the description which one is cheapest.
- A tool whose input or output can name a component goes through deprecations. Answer a request for a deprecated component with `findDeprecation` + `formatDeprecationNotice`; append notices with `withDeprecationNotices(platform, text, scanned)`. `scanned` is the text whose mention of a deprecated component should trigger a notice: the caller's input by default. Whether to scan the output too is a per-tool choice (`get_doc` and `search_docs` do, `search_api` does not, because its excerpts mention deprecated types incidentally); the comment at each existing call site states the reason. Choose for your tool and leave that comment.
- A read-only tool registers `annotations: { readOnlyHint: true, openWorldHint: false }`.

### Descriptions

A `TOOL_DESCRIPTIONS` entry is how a calling agent picks the tool. Match the existing entries, one paragraph each:

1. What it returns, in one sentence.
2. When to use it, and which sibling tool to use instead for the neighbouring cases.
3. What the response contains and how to narrow it.
4. Input limits and when it returns `isError`.

### Doc Tools: Two Implementations

`list_components`, `get_doc` and `search_docs` answer through `DocsProvider`: `LocalDocsProvider` (sql.js over the bundled database) or `RemoteDocsProvider` (HTTP to the .NET backend, `../docs-backend/docs-backend/Controllers/DocsController.cs`). `list_components` text is rendered by `src/tools/render-components.ts` and by its C# port `../docs-backend/docs-backend/ComponentRenderer.cs`, and `../shared-fixtures/list-components/*/expected.txt` pins both byte for byte. A change to what these tools return is made in both languages.

---

## Steps

### 1. Read the Neighbours

Read the closest existing tool end to end: registration, schema, handler, description, tests. Find every tool whose description or `USAGE_GUIDE` entry routes to or away from this one; these change with it in Step 4.

### 2. Schema and Handler

Write the schema and handler to "Inputs" and "Responses". For a new tool, export both from `schemas.ts` / `handlers.ts` and register it in the matching `register*Tools` function with its `TOOL_DESCRIPTIONS` entry.

For a doc tool whose output changes, mirror the change in the C# backend, then regenerate the fixtures and review the diff of every `expected.txt`:

```bash
UPDATE_LIST_FIXTURES=1 npx vitest run src/__tests__/shared
```

### 3. Tests

Vitest specs under `src/__tests__/`, with the loader or resolver faked by `vi.fn()` (`makeLoader` in `tools/handlers.test.ts`):

- `tools/schemas.test.ts`: valid input, each rejection (empty, too long, unknown enum value), each repaired near-miss shape.
- `tools/handlers.test.ts`: success, not found (`isError` and the next-tool hint), empty result, deprecated component where it applies.
- An inline doc tool is tested through the registered handler with `McpServer` mocked, as in `index.get-doc.test.ts`.
- `spec/unit/mcp-runtime-spec.ts` (root Jasmine) imports the built `dist/`: update it when the behavior or an export it asserts changes.

Done when every branch of the handler that returns differently has a test.

### 4. Description, Usage Guide, Instructions

Write or update the `TOOL_DESCRIPTIONS` entry (see "Descriptions"). Update the sibling descriptions and `USAGE_GUIDE` sections found in Step 1 so they route to the tool. Touch the server `instructions` only for a rule that spans tools.

### 5. Validate

PR CI (`nodejs.yml`) runs only root lint, root build and root Jasmine. The vitest suite and `dotnet test` run nowhere else, so this step is their only gate.

From `packages/igniteui-mcp/igniteui-doc-mcp`:

```bash
npm test           # vitest
```

From the repository root:

```bash
npm run lint
npm run build                                # includes the MCP server: tsc, then copies the database and setup_*.md into dist/
npx jasmine spec/unit/mcp-runtime-spec.js    # under a second; fails when run from another folder
```

For a doc tool: `dotnet test` in `../docs-backend/tests-docs-backend`. When `dotnet` is unavailable, the C# change is unverified: report it as such.

Then call the tool on the built server the way a client does, from the repository root:

```bash
node .agents/skills/igniteui-cli-mcp-tool/scripts/call-tool.mjs --list
node .agents/skills/igniteui-cli-mcp-tool/scripts/call-tool.mjs <tool> '<json arguments>'
```

The script starts the server in local mode, so a doc tool answers through `LocalDocsProvider` only; the remote path is verified by the shared fixtures and `dotnet test`. It prints the response text as the client receives it, after an `[isError]` line when set, and exits 1 on `isError`. Call a success case, a not-found case, an input the schema rejects and each repaired near-miss shape. Read each response as the calling agent would: a not-found response names the tool to call next, and a schema rejection names the parameter and what it needs (the SDK prefixes it with `Input validation error`; your `.min` / `.max` message is the rest).

### 6. Documentation

Add or update the tool in every listing:

- `README.md`: Tools table
- `DEVELOPMENT.md`: Tools table, plus the tool's own section if it has one
- `CLAUDE.md`: registered tools list under Architecture, and its count
- `../Specification.md`: Tool Summary and Tool Definitions. Its `Version` / `Date` header stays as it is; mention in the report that it may need a bump.
- root `README.md`: MCP Server tools table

These listings already disagree with each other. Change your tool's entry only, and list any other drift you notice in the report.

Done when each of the five files has an entry for the tool that states its current parameters and behavior.

### 7. Follow-up Corrections

When the user rewords a description or response text, change the text and the tests that assert it, then rerun Step 5 for that tool. When doc-tool output changes again, regenerate the fixtures and update the C# port again.

---

## Final Report

- What the tool does now, with the `call-tool.mjs` output of one success and one failure.
- `git status --short` and `git diff --stat`.
- A proposed changelog line in the package's style: `* **feat(mcp):** <user-visible effect>.`
- `dotnet test` result, or "C# change unverified" with the reason (doc tools only).
- Doc drift noticed in Step 6, and whether `Specification.md` may need a version bump.

## Final Self-Validation

- [ ] Git was used only as the `AGENTS.md` git rules allow for this session.
- [ ] `package.json` and `server.json` are unchanged.
- [ ] Package `npm run build` and `npm test` pass; root `npm run lint`, `npm run build` and the MCP runtime spec pass.
- [ ] `call-tool.mjs --list` shows the tool with the intended input schema.
- [ ] Every not-found response from the handler names the tool to call next.
- [ ] Every listing in Step 6 states the tool's current parameters and behavior.
- [ ] For a doc tool: the C# backend and `shared-fixtures` match the TypeScript output, and `dotnet test` passed or the report says the C# change is unverified.
