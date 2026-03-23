# @igniteui/mcp-server

MCP server for [Ignite UI](https://www.infragistics.com/products/ignite-ui) — provides AI assistants with component documentation search and retrieval for **Angular**, **React**, **Blazor**, and **Web Components**.

Ships with a bundled SQLite database containing pre-compressed, LLM-optimized documentation for all Ignite UI components.

## Installation

```bash
npm install -g @igniteui/mcp-server
```

Or use directly with `npx`:

```bash
npx @igniteui/mcp-server
```

## MCP Client Configuration

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

Add to Cursor MCP settings:

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

## Available Tools

All tools require a `framework` parameter: `angular`, `react`, `blazor`, or `webcomponents`.

| Tool | Description |
|------|-------------|
| `list_components` | List available Ignite UI component docs. Filter by framework and optional keyword match against filename, component name, keywords, or summary. |
| `get_doc` | Return the full markdown content of a specific component doc by name (e.g., `grid-editing`, `accordion`). |
| `search_docs` | Full-text search across Ignite UI docs for a specific framework. Returns top 20 results with excerpt snippets. Supports prefix matching (e.g., `grid*`). |
| `get_project_setup_guide` | Returns setup guides for creating a new Ignite UI project. For Angular/React/Web Components: CLI scaffolding instructions. For Blazor: `dotnet new` + NuGet setup guide. |

## Available Prompts

| Prompt | Description |
|--------|-------------|
| `igniteui-usage-guide` | Instructions for using Ignite UI tools — framework detection, documentation lookup, and project setup. |

## Framework Detection

The server detects the Ignite UI framework from component prefixes in your code:

| Framework | Prefix | Example | Package |
|-----------|--------|---------|---------|
| Angular | `Igx` | `IgxGrid`, `IgxCombo` | `igniteui-angular` |
| React | `Igr` | `IgrGrid`, `IgrCombo` | `igniteui-react` |
| Blazor | `Igb` | `IgbGrid`, `IgbCombo` | `IgniteUI.Blazor` |
| Web Components | `Igc` + `Component` | `IgcGridComponent` | `igniteui-webcomponents` |

File extensions also help: `.razor` → Blazor, `.tsx` → React, `.ts` + `.html` → Angular or Web Components.

## CLI Options

```bash
# Local mode (default) — uses bundled SQLite database
igniteui-mcp

# Remote mode — proxies to a backend API
igniteui-mcp --remote https://your-backend-url.com

# Enable debug logging
igniteui-mcp --debug
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DB_PATH` | Custom path to the SQLite database file |
| `IGNITEUI_MCP_DOCS_BACKEND_URL` | Backend URL (used with `--remote` flag when no URL argument is provided) |

## Modes

### Local (default)

Fully self-contained — no network access required. Uses a bundled SQLite database with FTS4 full-text search powered by [sql.js](https://github.com/sql-js/sql.js/) (WebAssembly).

### Remote

Proxies documentation requests to a backend API. Requires the `--remote` flag with a URL argument:

```bash
igniteui-mcp --remote https://your-backend-url.com
```

Or provide the URL via environment variable:

```bash
IGNITEUI_MCP_DOCS_BACKEND_URL=https://your-backend-url.com igniteui-mcp --remote
```

## License

MIT © [Infragistics](https://www.infragistics.com/)
