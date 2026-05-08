# Ignite UI Theming MCP Server

The Ignite UI Theming MCP server enables AI assistants to generate production-ready theming code. It must be configured in your editor before the theming tools become available.

> **AGENT INSTRUCTION — MCP Server Setup (REQUIRED)**
>
> Before using any theming tools, you MUST verify the MCP server is available
> by calling `detect_platform`. If the tool is not available or the call fails,
> configure it by following the setup steps below.

## VS Code Setup

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

## Cursor Setup

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

## Claude Desktop Setup

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

## WebStorm / JetBrains IDEs Setup

1. Go to **Settings → Tools → AI Assistant → MCP Servers**
2. Click **+ Add MCP Server**
3. Set Command to `npx` and Arguments to `igniteui-theming igniteui-theming-mcp`
4. Click OK and restart the AI Assistant

## MCP Server Workflow

1. **Detect platform**: Call `detect_platform` — it will detect `webcomponents` from `package.json`
2. **Generate a theme**: Call `create_theme` with your desired colors and design system
3. **Customize components**: Call `get_component_design_tokens` first, then `create_component_theme` with palette token values
4. **Get color references**: Call `get_color` to get the correct CSS custom property for any palette shade
5. **Adjust layout**: Call `set_size`, `set_spacing`, or `set_roundness`

## File Safety Rule

> **IMPORTANT — File Safety Rule**: When generating theme code, **never overwrite existing style files directly**. Always propose changes as an update and let the user review before writing to disk.
