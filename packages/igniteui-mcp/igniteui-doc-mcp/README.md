# Ignite UI MCP Server

MCP server for [Ignite UI](https://www.infragistics.com/products/ignite-ui) — gives AI assistants and coding agents accurate component documentation, API reference, exact import paths, and project setup guidance for **Angular**, **React**, **Blazor**, and **Web Components**.

Ships fully self-contained: a bundled SQLite database of pre-compressed, LLM-optimized component docs, pre-built API reference data for all four frameworks, and symbol-to-module import maps. No API keys, no network access, and no additional setup required.

- **Registry name:** `io.github.IgniteUI/mcp-server`
- **GitHub MCP Registry:** [github.com/mcp/IgniteUI/mcp-server](https://github.com/mcp/IgniteUI/mcp-server) — the gallery behind VS Code and Visual Studio
- **Official MCP Registry:** [`io.github.IgniteUI/mcp-server`](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.IgniteUI/mcp-server)
- **npm package:** [`@igniteui/mcp-server`](https://www.npmjs.com/package/@igniteui/mcp-server)
- **Transport:** stdio
- **Requirements:** Node.js 20 or newer

## Why use it

Ignite UI ships four separate component libraries with distinct component names, prop names, event shapes, and binding syntax (`IgxGrid` / `IgrGrid` / `IgbGrid` / `IgcGridComponent`). Assistants working from general training data routinely mix them, producing code that looks right and fails at runtime. Import paths are another common failure: Ignite UI for Angular is split into secondary entry points (`igniteui-angular/grids/grid`, `igniteui-angular/directives`, ...), and React and Web Components symbols are spread over several packages, so guessed imports produce "has no exported member" or "cannot find module" errors. This server keeps every lookup scoped to one framework and returns the real, current documentation, API surface, and import paths for it.

## Install from the MCP Gallery

The server is published to the [official MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.IgniteUI/mcp-server) and listed in the [GitHub MCP Registry](https://github.com/mcp/IgniteUI/mcp-server), so you can find and install it from inside your IDE with no manual configuration.

### VS Code

1. Open the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for `@mcp Ignite UI`.
3. Select **Ignite UI MCP Server** and click **Install**. To share the setup with your team, right-click it and choose **Install in Workspace** instead — this writes the entry to `.vscode/mcp.json`.

Listing: [github.com/mcp/IgniteUI/mcp-server](https://github.com/mcp/IgniteUI/mcp-server). See [Add and manage MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

### Visual Studio

Requires Visual Studio 2026, or Visual Studio 2022 version 17.14 or later.

1. From the menu, select **Extensions** > **MCP Registries...** to open the **MCP Server Manager**.
2. Find **Ignite UI MCP Server** and click **Install**.
3. In the GitHub Copilot Chat window, switch to **Agent** mode and enable the Ignite UI tools in the tool picker.

See [Use MCP servers in Visual Studio](https://learn.microsoft.com/visualstudio/ide/mcp-servers).

> For theming and styling, also install the companion [Ignite UI Theming MCP Server](https://github.com/mcp/IgniteUI/igniteui-theming) the same way.

## Quick Start

Run directly with `npx` — no install needed:

```bash
npx -y @igniteui/mcp-server
```

Or install globally:

```bash
npm install -g @igniteui/mcp-server
igniteui-mcp
```

## MCP Client Configuration

### Claude Code

```bash
claude mcp add igniteui -- npx -y @igniteui/mcp-server
```

### VS Code

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "igniteui": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@igniteui/mcp-server"]
    }
  }
}
```

### Visual Studio

Add to `.mcp.json` in your solution directory (or `%USERPROFILE%\.mcp.json` for all solutions):

```json
{
  "servers": {
    "igniteui": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@igniteui/mcp-server"]
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "igniteui": {
      "command": "npx",
      "args": ["-y", "@igniteui/mcp-server"]
    }
  }
}
```

### Cursor

Add to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "igniteui": {
      "command": "npx",
      "args": ["-y", "@igniteui/mcp-server"]
    }
  }
}
```

### Via the Ignite UI CLI

If you already use [`igniteui-cli`](https://www.npmjs.com/package/igniteui-cli), it bundles this server and can launch it for you — substitute this command in any of the configurations above:

```json
{
  "command": "npx",
  "args": ["-y", "igniteui-cli", "mcp"]
}
```

## Available Tools

Every tool is scoped to a single framework — `angular`, `react`, `blazor`, or `webcomponents`. Documentation tools take a `framework` parameter; API reference tools take a `platform` parameter.

| Tool | Parameters | Description |
|------|-----------|-------------|
| `list_components` | `framework` (required), `filter`, `group`, `detail` | Browse the component doc index, grouped by the published documentation table of contents. By default returns a compact index — one heading per group with a short summary and its doc names. `group` (a heading exactly as printed, e.g. `Grids & Lists > Data Grid`) returns that group's docs with summaries; in grouped mode, `filter` is a case-insensitive substring match against filename, component name, keywords, summary, and group name; `detail: "docs"` returns the flat per-doc list with every summary (much larger), where `filter` does not match group names. No pagination. |
| `get_doc` | `framework` (required), `name` (required) | Return the full markdown content of one component doc by name, kebab-case without `.md` (e.g. `grid-editing`, `accordion`). Bare grid feature names resolve automatically (`sorting` → `grid-sorting`), and common aliases are handled (`virtual-scroll` → `grid-virtualization`). |
| `search_docs` | `framework` (required), `query` (required) | Full-text search across the docs for one framework. Returns up to 20 title- and keyword-weighted results with highlighted excerpts. Multi-word queries are implicit AND; trailing `*` does prefix matching (`grid*`); hyphenated terms match as phrases. |
| `search_api` | `query` (required), `platform` | Discover API entries by keyword, feature name, or partial component name. Returns up to 10 ranked results with framework tag, API type, and excerpt. Omit `platform` to search all four frameworks at once. |
| `get_api_reference` | `platform` (required), `component` (required), `section`, `member` | Return the full API reference for an exact component or class name (case-insensitive). Narrow the response with `section` (`properties`, `methods`, `events`, `all` — default `all`) or `member` to fetch a single property/method/event. `member` takes precedence over `section`. |
| `resolve_import` | `symbols` (required), `platform` | Return ready-to-paste import statements for up to 50 symbols per call, grouped by module — e.g. `IgxGridComponent` → `'igniteui-angular/grids/grid'`, `IgxColumnComponent` → `'igniteui-angular/grids/core'`, `IgcGridComponent` → `'igniteui-webcomponents-grids/grids'`. For Blazor, returns the NuGet package, the `@using` namespace and the module registration. The platform is inferred per symbol from the `Igx`/`Igr`/`Igc`/`Igb` prefix; pass `platform` for unprefixed names (e.g. `GridSelectionMode`). Unknown names get "Did you mean" suggestions (`IgxGrid` → `IgxGridComponent`). |
| `get_project_setup_guide` | `framework` (optional) | Setup guidance for a new Ignite UI project. Angular, React, and Web Components return Ignite UI CLI scaffolding steps; Blazor returns `dotnet new` + NuGet instructions. Read-only — creates no files and runs no commands. |

All tools are read-only and do not reach outside the server in the default local mode.

### Resolving imports

Agents should call `resolve_import` before writing or fixing import statements, passing every symbol a file needs in one call:

```json
{ "symbols": ["IgxGridComponent", "IgxColumnComponent", "IgxButtonDirective"] }
```

returns, per platform:

```ts
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
```

plus notes such as keeping the `@infragistics/` scope when the project uses the licensed packages, or, for Blazor, the `.Trial` NuGet package naming and the `AddIgniteUIBlazor(typeof(IgbGridModule))` registration line.

`symbols` is forgiving about input shape: `type` prefixes, `X as Y` aliases, generic arguments, a JSON array serialized as a string, and whole pasted import statements are all reduced to bare symbol names.

## Available Prompts

| Prompt | Description |
|--------|-------------|
| `igniteui-usage-guide` | Instructions for using the Ignite UI tools — framework detection, documentation lookup, API reference, and project setup. |

## Framework Detection

The server detects the target framework from component prefixes in your code:

| Framework | Value | Prefix | Example | Package |
|-----------|-------|--------|---------|---------|
| Angular | `angular` | `Igx` | `IgxGrid`, `IgxCombo` | `igniteui-angular` |
| React | `react` | `Igr` | `IgrGrid`, `IgrCombo` | `igniteui-react` |
| Blazor | `blazor` | `Igb` | `IgbGrid`, `IgbCombo` | `IgniteUI.Blazor` |
| Web Components | `webcomponents` | `Igc` + `Component` suffix | `IgcGridComponent` | `igniteui-webcomponents` |

File extensions also help: `.razor` → Blazor, `.tsx` → React, `.ts` + `.html` → Angular or Web Components.

## Modes

### Local (default)

Fully self-contained — no network access or credentials required. Serves the bundled SQLite database with FTS4 full-text search via [sql.js](https://github.com/sql-js/sql.js/) (WebAssembly), and the API reference data shipped alongside it.

### Remote

Proxies documentation requests to a backend API. Requires the `--remote` flag with a URL:

```bash
igniteui-mcp --remote https://your-backend-url.com
```

The URL may also come from an environment variable, but the flag is still required to activate remote mode:

```bash
IGNITEUI_MCP_DOCS_BACKEND_URL=https://your-backend-url.com igniteui-mcp --remote
```

API reference tools (`search_api`, `get_api_reference`) and `resolve_import` always read the bundled local data in both modes.

## CLI Options

```bash
# Local mode (default) — bundled SQLite database
igniteui-mcp

# Remote mode — proxy documentation requests to a backend
igniteui-mcp --remote https://your-backend-url.com

# Debug logging — appends tool inputs, output previews, and timings to mcp-server.log
# next to the installed dist/index.js
igniteui-mcp --debug
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DB_PATH` | Override the path to the SQLite database file. Defaults to the bundled `dist/igniteui-docs.db`. |
| `IGNITEUI_MCP_DOCS_BACKEND_URL` | Backend URL used with `--remote` when no URL argument is given. Does not enable remote mode on its own. |

## Building From Source

The bundled database, the pre-built API reference data, and the import maps are committed to the repository, so a source checkout needs no submodules or API keys to run the server:

```bash
git clone https://github.com/IgniteUI/igniteui-cli.git
cd igniteui-cli/packages/igniteui-mcp/igniteui-doc-mcp
npm install
npm run build     # tsc + copy db/igniteui-docs.db and setup guides into dist/
npm start         # local mode
```

Test with the MCP Inspector:

```bash
npm run inspector
```

Regenerating the documentation database or the API reference data is a maintainer task requiring git submodules and an `OPENAI_API_KEY`. See the pipeline scripts in `package.json` (`build:docs:*`, `pipeline:*`, `build:db`) and `docs/knowledgebase.md` for details.

The `resolve_import` maps in `data/import-map/` are regenerated with `npm run build:import-map`. Angular entry points come from the typings of the published `igniteui-angular` package (`latest` by default, override with `-- --angular <version>`) and are verified by type-checking every mapped import; React and Web Components mappings come from imports observed in the examples submodules. Blazor needs no map — it is resolved from the API reference data.

## Links

- [Ignite UI](https://www.infragistics.com/products/ignite-ui)
- [GitHub MCP Registry listing](https://github.com/mcp/IgniteUI/mcp-server)
- [npm package](https://www.npmjs.com/package/@igniteui/mcp-server)
- [Source repository](https://github.com/IgniteUI/igniteui-cli)
- [Issue tracker](https://github.com/IgniteUI/igniteui-cli/issues)

## License

MIT © [Infragistics](https://www.infragistics.com/)
