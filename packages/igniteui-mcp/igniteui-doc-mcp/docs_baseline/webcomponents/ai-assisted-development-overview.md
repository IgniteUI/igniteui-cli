---
title: AI-Assisted Development with Ignite UI - Ignite UI for Web Components
_description: Configure Agent Skills, the Ignite UI MCP server, and the Theming MCP server in your Angular or React project with a single command — npx igniteui-cli ai-config. Grounds GitHub Copilot, Cursor, Claude Desktop, Claude Code, and JetBrains AI Assistant in correct Ignite UI APIs.
_keywords: Web Components, Ignite UI for Web Components, Infragistics, MCP, Model Context Protocol, Ignite UI MCP server, Ignite UI Theming MCP, Agent Skills, AI, agent, Copilot, Cursor, Claude Code, ai-config
_language: en
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
last_updated: "2026-05-03"
namespace: Infragistics.Controls
mentionedTypes: []
_tocName: Agent Workflow
---

<!-- schema: Article, HowTo -->

# AI-Assisted Development with Ignite UI

Ignite UI for Angular, React, and Web Components provides a complete AI toolchain - Agent Skills, the Ignite UI CLI MCP server, the Ignite UI Theming MCP server and the MAKER MCP server - that grounds AI coding assistants in correct component APIs, import paths, and design tokens. Agent Skills are developer-owned instruction packages that define how AI agents use Ignite UI in a specific project. The CLI MCP server (`@igniteui/mcp-server`) exposes Ignite UI CLI scaffolding, component management, and documentation tools to the active AI agent session via the Model Context Protocol. The Theming MCP server (`igniteui-theming`) exposes the Ignite UI Theming Engine as queryable agent context. The MAKER MCP (`@igniteui/maker-mcp`) is a multi-agent AI orchestration MCP server from Infragistics that decomposes complex tasks into validated, executable step plans using a consensus-based voting algorithm across multiple AI agents. Skills, CLI MCP and Theming MCP - all three are configured by a single command: `npx igniteui-cli ai-config`

The MCP servers and Agent Skills serve different purposes and have different prerequisites:

| Component            | What it provides                                               | Requires Ignite UI installed? |
| -------------------- | -------------------------------------------------------------- | ----------------------------- |
| Ignite UI MCP server | Documentation queries, API reference, scaffolding tools        | No                            |
| Theming MCP server   | Design tokens, palette tools, WCAG contrast validation         | No                            |
| Agent Skills         | Project-level instruction packages for correct component usage | Yes                           |

You can start evaluating Ignite UI AI assistance with the MCP servers alone - Ignite UI does not need to be installed in your project. Agent Skills become available once you install Ignite UI packages.

The AI toolchain does not currently support Blazor in the CLI MCP and Agent Skills layers - Blazor coverage is provided by the Theming MCP only. The CLI MCP server requires STDIO transport; HTTP-based MCP clients are not supported. Agent Skills and the CLI MCP server do not modify project files autonomously - they expose tools and instructions to the active AI agent, which acts on developer prompts.

## Configure the AI Toolchain

Run this command from the root of your existing Angular ,React or WebComponents project. It copies Agent Skills into the agent discovery path and writes the Ignite UI MCP server and Theming MCP server entries to `.vscode/mcp.json`. If the files already exist and are up-to-date, the command is a no-op.

```bash
npx igniteui-cli ai-config
```

> [!IMPORTANT]
> Without a version pin, `npx` may pull an older CLI version that does not recognize the `ai-config` subcommand and will instead launch an interactive project-creation prompt, scaffolding a new project inside your existing one. Make sure that you have installed CLI version 16.x.

After the command finishes, start the MCP servers in your AI client. The servers are configured but not yet running - the client needs to launch each server before its tools are available to the agent.

### What to Expect

If Ignite UI is **not** installed in the project:

```
Ignite UI MCP servers configured in .vscode/mcp.json
No AI skill files found. Make sure packages are installed (npm install) and your Ignite UI packages are up-to-date.
```

The MCP servers are ready to use. Skills will be added automatically the next time you run `ai-config` after installing Ignite UI.

If Ignite UI **is** installed in the project:

```
Ignite UI MCP servers configured in .vscode/mcp.json
Agent Skills copied to .claude/skills/
```

Both the MCP servers and Skills are configured.

### Start the Servers

**VS Code with GitHub Copilot:**

Open `.vscode/mcp.json`. VS Code displays an inline **Start** button above each server entry. Click **Start** for both `igniteui` and `igniteui-theming`. Once started, VS Code shows the available tool count next to each server (for example, _"13 tools | 1 prompt"_). Alternatively, run **MCP: List Servers** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`), select each server, and choose **Start**.

**Cursor:**

Open **Settings → MCP**, locate the `igniteui` and `igniteui-theming` entries, and toggle each one on. Cursor starts each server immediately and displays its tool count.

**Claude Code:**

Run `claude mcp list` to confirm both servers are registered. Claude Code starts MCP servers automatically when their tools are first invoked - no manual start step is required.

**JetBrains AI Assistant:**

Open **Settings → Tools → AI Assistant → Model Context Protocol (MCP)**. Click the play icon next to each server entry to start it.

**Claude Desktop:**

Quit and relaunch Claude Desktop. The servers start automatically on launch.

### Install Ignite UI and Add Skills Later

If you ran `ai-config` without Ignite UI installed and want to add Skills, install the Ignite UI package for your framework and re-run the command:

```bash
# Angular
npm install igniteui-angular
npx igniteui-cli@latest ai-config
 
# React
npm install @infragistics/igniteui-react
npx igniteui-cli@latest ai-config
```

The command detects that Skills are now available and copies them. The MCP server entries in `.vscode/mcp.json` are left unchanged (already up-to-date)

## The AI Toolchain at a Glance

Ignite UI's AI toolchain consists of three independently usable layers. Each layer can be enabled on its own; they are designed to work together.

| Layer                                   | What it provides                                                                                            | Owner        | Frameworks                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| Agent Skills                            | Developer-owned instruction packages: import paths, component patterns, decision flows, project conventions | Developer    | Angular, React, Web Components, Blazor |
| CLI MCP server (`@igniteui-cli`)         | Project scaffolding, component management, documentation and API queries via MCP                            | Infragistics | Angular, React, Web Components         |
| Theming MCP server (`igniteui-theming`) | Design tokens, palette definitions, CSS custom property generation, WCAG AA contrast validation             | Infragistics | Angular, React, Web Components, Blazor |

The CLI MCP server and Theming MCP server are both started through `npx` and connect to any MCP-compatible client through STDIO transport. Agent Skills are local files placed in your project that the AI client reads from disk.

## Agent Skills

Agent Skills are structured, developer-owned packages that tell AI coding assistants exactly how to use Ignite UI for a specific framework. A Skill package can contain a `SKILL.md` instruction file with component patterns, import paths, and decision flows; references to authoritative Ignite UI documentation; and assets such as schema files or diagrams. When a Skill is active in the AI client, the agent follows the Skill instead of relying on general training data - which may reference outdated API signatures or import paths.

Ignite UI ships dedicated Skill packages for Angular, React, Web Components, and Blazor. The Skill package is developer-owned: edit the `SKILL.md` to match your team's conventions, add project-specific patterns, reference your internal design system, and version the package alongside your codebase.

For full setup instructions and IDE wiring, see [Agent Skills](skills.md).

## CLI MCP Server

The Ignite UI CLI MCP server (`igniteui-cli`) is an MCP server maintained by Infragistics that exposes Ignite UI CLI scaffolding and documentation tools to the active AI agent session. Once connected, the AI assistant can create Angular, React, or Web Components projects, add and modify Ignite UI components, and answer documentation and API questions - all through natural-language prompts in the chat session.

The CLI MCP server is configured via `npx` without a global install:

```bash
npx igniteui-cli ai-config
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
| JetBrains AI Assistant      | **Tools → AI Assistant → Model Context Protocol (MCP)*-         |

Agent Skills are compatible with GitHub Copilot via `.github/copilot-instructions.md`, Cursor via `.cursorrules` or `.cursor/rules/`, Windsurf via `.windsurfrules`, and JetBrains AI Assistant via project-level prompt settings.

### Quick Setup

The `ai-config` command copies the Ignite UI Agent Skills into `.claude/skills/` and writes the Ignite UI MCP server configuration to `.vscode/mcp.json`. If the files already exist and are up-to-date, the command is a no-op.

**Using Angular Schematics:**

```bash
ng generate @igniteui/angular-schematics:ai-config
```

This also registers the `@angular/cli` MCP server in `.vscode/mcp.json` alongside the Ignite UI servers.

**Using the Ignite UI CLI:**

```bash
npx igniteui-cli ai-config
```

If you have the Ignite UI CLI installed globally, use the shorter form:

```bash
ig ai-config
```

> [!NOTE]
> The `npx igniteui-cli` and `ig` forms do not register the `@angular/cli` MCP server. Use the Angular Schematics command above if you want all three servers configured in a single step.

> [!NOTE]
> The command requires Ignite UI packages to be installed in your project (`npm install`). If no skill files are found, make sure your packages are up-to-date.

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

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
