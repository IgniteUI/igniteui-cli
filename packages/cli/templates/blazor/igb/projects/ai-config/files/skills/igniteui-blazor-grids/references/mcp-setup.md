# Setting Up the Ignite UI CLI MCP Server

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**

## Contents

- [VS Code](#vs-code)
- [Cursor](#cursor)
- [Claude Desktop](#claude-desktop)
- [WebStorm / JetBrains IDEs](#webstorm--jetbrains-ides)
- [Verifying the Setup](#verifying-the-setup)

The Ignite UI CLI MCP server enables AI assistants to discover Ignite UI grid documentation, validate Blazor doc slugs, and avoid borrowing Angular, React, or Web Components APIs. It must be configured in your editor before these tools become available.

## VS Code

Create or edit `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

This works whether `igniteui-cli` is installed locally in `node_modules` or needs to be pulled from the npm registry; `npx -y` handles both cases.

## Cursor

Create or edit `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

## Claude Desktop

Edit the Claude Desktop config file:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

## WebStorm / JetBrains IDEs

1. Go to **Settings -> Tools -> AI Assistant -> MCP Servers**
2. Click **+ Add MCP Server**
3. Set Command to `npx` and Arguments to `igniteui-cli mcp`
4. Click OK and restart the AI Assistant

## Verifying the Setup

After configuring the MCP server, ask your AI assistant:

> "List all available Ignite UI for Blazor grid docs"

If the MCP server is running, `list_components(framework: "blazor", filter: "grid")` or `search_docs(framework: "blazor", query: "grid")` will return available Blazor grid documentation entries.
