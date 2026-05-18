# Setting Up the Theming MCP Server

> **Part of the [`igniteui-blazor-theming`](../SKILL.md) skill hub.**

## Contents

- [VS Code](#vs-code)
- [Cursor](#cursor)
- [Claude Desktop](#claude-desktop)
- [WebStorm / JetBrains IDEs](#webstorm--jetbrains-ides)
- [Verifying the Setup](#verifying-the-setup)

The Ignite UI Theming MCP server enables AI assistants to generate Blazor-ready CSS custom properties, palettes, component themes, and global layout tokens. It must be configured in your editor before the theming tools become available.

## VS Code

Create or edit `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

This works whether `igniteui-theming` is installed locally in `node_modules` or needs to be pulled from the npm registry; `npx -y` handles both cases.

## Cursor

Create or edit `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
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
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

## WebStorm / JetBrains IDEs

1. Go to **Settings -> Tools -> AI Assistant -> MCP Servers**
2. Click **+ Add MCP Server**
3. Set Command to `npx` and Arguments to `igniteui-theming igniteui-theming-mcp`
4. Click OK and restart the AI Assistant

## Verifying the Setup

After configuring the MCP server, ask your AI assistant:

> "Read the Ignite UI theming resource for the Blazor platform"

If the MCP server is running, the assistant can call
`read_resource` and return the Blazor theming
guidance. For Blazor-specific theming, pass
`platform: "blazor"` to theming tools that accept a platform parameter.
