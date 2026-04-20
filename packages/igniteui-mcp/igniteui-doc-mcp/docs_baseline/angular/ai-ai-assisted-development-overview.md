---
title: AI-Assisted Development with Ignite UI - Ignite UI for Angular
_description: Ignite UI provides Agent Skills, the Ignite UI CLI MCP server, and the Theming MCP server to ground AI coding assistants in correct component APIs, import paths, and design tokens across Angular, React, and Web Components.
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, Agent Skills, AI, agent, Copilot, Cursor
_language: en
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
namespace: Infragistics.Controls
mentionedTypes: []
_tocName: Agent Workflow
---

# AI-Assisted Development with Ignite UI

Ignite UI for Angular, React, and Web Components provides a three-part AI toolchain - Agent Skills, the Ignite UI CLI MCP server, and the Ignite UI Theming MCP server - that grounds AI coding assistants in correct component APIs, import paths, and design tokens. Agent Skills are developer-owned instruction packages that define how AI agents use Ignite UI in a specific project. The CLI MCP server exposes Ignite UI CLI scaffolding, component management, and documentation tools to the active AI agent session via the Model Context Protocol. The Theming MCP server exposes the Ignite UI Theming Engine as queryable agent context. All three components work with GitHub Copilot, Cursor, Claude Desktop, Claude Code, and JetBrains AI Assistant.

The AI toolchain does not currently support Blazor in the CLI MCP and Agent Skills layers - Blazor coverage is provided by the Theming MCP only. The CLI MCP server requires STDIO transport; HTTP-based MCP clients are not supported. Agent Skills and the CLI MCP server do not modify project files autonomously - they expose tools and instructions to the active AI agent, which acts on developer prompts.

## The AI Toolchain at a Glance

Ignite UI's AI toolchain consists of three independently usable layers. Each layer can be enabled on its own; they are designed to work together.

| Layer                                   | What it provides                                                                                            | Owner        | Frameworks                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| Agent Skills                            | Developer-owned instruction packages: import paths, component patterns, decision flows, project conventions | Developer    | Angular, React, Web Components, Blazor |
| CLI MCP server (`igniteui-cli`)         | Project scaffolding, component management, documentation and API queries via MCP                            | Infragistics | Angular, React, Web Components         |
| Theming MCP server (`igniteui-theming`) | Design tokens, palette definitions, CSS variable generation, theming queries via MCP                        | Infragistics | Angular, React, Web Components, Blazor |

The CLI MCP server and Theming MCP server are both started through `npx` and connect to any MCP-compatible client through STDIO transport. Agent Skills are local files placed in your project that the AI client reads from disk.

## Agent Skills

Agent Skills are structured, developer-owned packages that tell AI coding assistants exactly how to use Ignite UI for a specific framework. A Skill package can contain a `SKILL.md` instruction file with component patterns, import paths, and decision flows; references to authoritative Ignite UI documentation; and assets such as schema files or diagrams. When a Skill is active in the AI client, the agent follows the Skill instead of relying on general training data - which may reference outdated API signatures or import paths.

Ignite UI ships dedicated Skill packages for Angular, React, Web Components, and Blazor. The Skill package is developer-owned: edit the `SKILL.md` to match your team's conventions, add project-specific patterns, reference your internal design system, and version the package alongside your codebase.

For full setup instructions and IDE wiring, see [Agent Skills](skills.md).

## CLI MCP Server

The Ignite UI CLI MCP server (`igniteui-cli`) is an MCP server maintained by Infragistics that exposes Ignite UI CLI scaffolding and documentation tools to the active AI agent session. Once connected, the AI assistant can create Angular, React, or Web Components projects, add and modify Ignite UI components, and answer documentation and API questions - all through natural-language prompts in the chat session.

The CLI MCP server starts via `npx` without a global install:

```bash
npx -y igniteui-cli mcp
```

The server connects to VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains AI Assistant, and any other MCP-compatible client that supports STDIO transport. The exact configuration format differs by client - see the CLI MCP setup guides below.

The CLI MCP server does not support Blazor. It does not generate code autonomously - it exposes tools to the AI agent, which invokes them in response to developer prompts.

## Theming MCP Server

The Ignite UI Theming MCP server (`igniteui-theming`) is a separate MCP server that exposes the Ignite UI Theming Engine as queryable agent context. It covers design token access, palette definitions, CSS custom property generation, and WCAG AA contrast validation. It is architecturally separate from the CLI MCP server - it can be connected independently to give the AI agent access to theming tools without exposing project scaffolding tools.

The Theming MCP server starts via `npx`:

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

The Theming MCP server supports Angular, React, Web Components, and Blazor. It updates with every Ignite UI release so agents always work against the current token surface.

For configuration details, see [Theming MCP](theming-mcp.md).

## Supported AI Clients

The CLI MCP server and Theming MCP server work with any editor or AI client that supports MCP with STDIO transport.

| Client                      | Configuration method                                              |
| --------------------------- | ----------------------------------------------------------------- |
| VS Code with GitHub Copilot | `.vscode/mcp.json`                                                |
| Cursor                      | `.cursor/mcp.json`                                                |
| Claude Desktop (macOS)      | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows)    | `%APPDATA%\Claude\claude_desktop_config.json`                     |
| Claude Code                 | `.mcp.json` or the Claude Code MCP CLI command                    |
| JetBrains AI Assistant      | **Tools → AI Assistant → Model Context Protocol (MCP)**           |

Agent Skills are compatible with GitHub Copilot via `.github/copilot-instructions.md`, Cursor via `.cursorrules` or `.cursor/rules/`, Windsurf via `.windsurfrules`, and JetBrains AI Assistant via project-level prompt settings.

## Set Up the AI Toolchain

Setting up the Ignite UI AI toolchain takes three steps: load Agent Skills for your framework, connect the CLI MCP server, and optionally connect the Theming MCP server. All three steps are independent and can be done in any order.

### Step 1 - Load Agent Skills

Copy the Ignite UI Skill package for your framework into your project's agent discovery path. The Skill package ships with the library in `node_modules/igniteui-{framework}/skills/`. Wire it to your IDE using the persistent setup for your client.

See [Agent Skills](skills.md) for the complete setup.

### Step 2 - Connect the CLI MCP Server

Add the `igniteui-cli` MCP server entry to the configuration file for your AI client. Use the JSON structure that matches your client:

**VS Code (`.vscode/mcp.json`):**

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

**Cursor, Claude Desktop, Claude Code, JetBrains, and other MCP clients:**

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

For the full setup guide, including VS Code, GitHub, Cursor, Claude Desktop, Claude Code, JetBrains, and other MCP-compatible clients, see [CLI MCP](cli-mcp.md).

### Step 3 - Connect the Theming MCP Server (optional)

Add the `igniteui-theming` entry to the same MCP configuration file, alongside `igniteui-cli`:

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

For configuration details and theming workflows, see [Theming MCP](theming-mcp.md).

## Additional Resources

- [Agent Skills](./skills.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
