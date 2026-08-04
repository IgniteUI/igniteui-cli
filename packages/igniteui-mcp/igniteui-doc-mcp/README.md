# Ignite UI MCP Server

MCP server for [Ignite UI](https://www.infragistics.com/products/ignite-ui) — gives AI assistants and coding agents accurate component documentation, API reference, and project setup guidance for **Angular**, **React**, **Blazor**, and **Web Components**.

Ships fully self-contained: a bundled SQLite database of pre-compressed, LLM-optimized component docs plus pre-built API reference data for all four frameworks. No API keys, no network access, and no additional setup required.

- **Registry name:** `io.github.IgniteUI/mcp-server`
- **npm package:** [`@igniteui/mcp-server`](https://www.npmjs.com/package/@igniteui/mcp-server)
- **Transport:** stdio
- **Requirements:** Node.js 20 or newer

## Why use it

Ignite UI ships four separate component libraries with distinct component names, prop names, event shapes, and binding syntax (`IgxGrid` / `IgrGrid` / `IgbGrid` / `IgcGridComponent`). Assistants working from general training data routinely mix them, producing code that looks right and fails at runtime. This server keeps every lookup scoped to one framework and returns the real, current documentation and API surface for it.

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
| `list_components` | `framework` (required), `filter` | List available Ignite UI component docs. `filter` is a case-insensitive substring match against filename, component name, keywords, and summary. Returns the full catalog when omitted — no pagination. |
| `get_doc` | `framework` (required), `name` (required) | Return the full markdown content of one component doc by name, kebab-case without `.md` (e.g. `grid-editing`, `accordion`). Bare grid feature names resolve automatically (`sorting` → `grid-sorting`), and common aliases are handled (`virtual-scroll` → `grid-virtualization`). |
| `search_docs` | `framework` (required), `query` (required) | Full-text search across the docs for one framework. Returns up to 20 title- and keyword-weighted results with highlighted excerpts. Multi-word queries are implicit AND; trailing `*` does prefix matching (`grid*`); hyphenated terms match as phrases. |
| `search_api` | `query` (required), `platform` | Discover API entries by keyword, feature name, or partial component name. Returns up to 10 ranked results with framework tag, API type, and excerpt. Omit `platform` to search all four frameworks at once. |
| `get_api_reference` | `platform` (required), `component` (required), `section`, `member` | Return the full API reference for an exact component or class name (case-insensitive). Narrow the response with `section` (`properties`, `methods`, `events`, `all` — default `all`) or `member` to fetch a single property/method/event. `member` takes precedence over `section`. |
| `get_project_setup_guide` | `framework` (optional) | Setup guidance for a new Ignite UI project. Angular, React, and Web Components return Ignite UI CLI scaffolding steps; Blazor returns `dotnet new` + NuGet instructions. Read-only — creates no files and runs no commands. |

All tools are read-only and do not reach outside the server in the default local mode.

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

API reference tools always read the bundled local data in both modes.

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

The bundled database and the pre-built API reference data are committed to the repository, so a source checkout needs no submodules or API keys to run the server:

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

## Links

- [Ignite UI](https://www.infragistics.com/products/ignite-ui)
- [Source repository](https://github.com/IgniteUI/igniteui-cli)
- [Issue tracker](https://github.com/IgniteUI/igniteui-cli/issues)

## License

MIT © [Infragistics](https://www.infragistics.com/)
