---
title: Angular Ignite UI CLI MCP | Infragistics
_description: Connect Ignite UI CLI MCP to your AI client to scaffold projects, modify existing apps, create and update components, and ask documentation questions for Ignite UI for Angular. Learn the setup options for VS Code, GitHub, Cursor, Claude Desktop, Claude Code, JetBrains, and other MCP clients.
_keywords: Angular, Ignite UI for Angular, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, agent, GitHub Copilot, Cursor, Claude, JetBrains
_language: en
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai/cli-mcp"
namespace: Infragistics.Controls
mentionedTypes: []
_tocName: CLI MCP
---

# Ignite UI CLI MCP

<p class="highlight">The Ignite UI CLI MCP is a <a href="https://modelcontextprotocol.io/" target="_blank">Model Context Protocol</a> (MCP) server that enables AI assistants to scaffold projects, modify existing apps, create and update components, and answer documentation questions for Ignite UI for Angular applications. Connect the Ignite UI CLI MCP to your editor, GitHub repository, or desktop AI client and describe what you want - the assistant uses the CLI tools for you.</p>

<div class="divider"></div>

## Overview

Ignite UI CLI MCP gives AI assistants direct access to Ignite UI CLI project scaffolding, component generation, project modification, and documentation-aware workflows through chat or agent mode. The server works alongside Ignite UI Theming MCP - CLI MCP handles project and component workflows while Theming MCP handles palettes, themes, tokens, and styling. Most teams connect both servers in the same AI client session.

The Ignite UI CLI MCP works alongside the Ignite UI Theming MCP. In practice, the CLI MCP handles project and component workflows, while the Theming MCP handles palettes, themes, tokens, and styling workflows. Most teams will want both servers connected.

The recommended setup path is to start with Ignite UI CLI first. That path creates the project, installs the required packages, and writes the initial MCP configuration for VS Code. You can also start from an empty folder and let the assistant create the project through MCP, or connect MCP to a project that already exists.

**Example prompts to try once connected:**

> _"Create a new Ignite UI for Angular project in this folder, use the recommended defaults, and add a starter dashboard page with sample data."_

> _"Add a new grid page to this project, wire it to sample data, and keep the current navigation structure."_

> _"What properties and events does the combo component expose, and which ones are most useful for a searchable dropdown?"_

> _"Update the existing project to add a side navigation layout and preserve the current pages and routes."_

## Prerequisites

Before configuring the MCP server, make sure you have:

- **Node.js** (v18 or later) installed - this provides the `npx` command used to launch the server.
- An **AI client with MCP support** - for example, VS Code with GitHub Copilot, GitHub Copilot cloud agent, Cursor, Claude Desktop, Claude Code, or a JetBrains IDE with the AI Assistant plugin.
- Internet access for `npx` package resolution the first time the server starts.
- One of the following starting points:
  - an empty folder for a new project
  - a project you created with Ignite UI CLI
  - an existing Ignite UI for Angular project you want to continue working on

If you want theming tools in the same client session and `igniteui-theming` is not already available in your project, run:

```bash
npm install igniteui-theming
```

## Configure Ignite UI CLI MCP for Your AI Client

The MCP server is launched through `npx`. No separate installation is required beyond Node.js and access to the `igniteui-cli` package.

The canonical launch command is:

```bash
npx -y igniteui-cli mcp
```

> [!NOTE]
> The `-y` flag tells `npx` to auto-confirm the package download prompt so the server can start without manual intervention.

### Choose a setup path

You can start with Ignite UI CLI MCP in three ways:

> **Recommended - CLI first**
> Create the project with Ignite UI CLI first by using `ig new` or the matching `npx --package igniteui-cli igniteui new` command. This is the easiest setup because Ignite UI CLI scaffolds the project, installs the required packages, and writes `.vscode/mcp.json` for VS Code automatically. After that, you only need to review the generated MCP configuration and open the project in your AI client.

> **Empty folder**
> Start with a completely empty folder, add the MCP configuration manually, and then ask the assistant to create the project through chat. This path is useful when you want MCP to drive the project creation flow from the beginning instead of running the CLI yourself first.

> **Existing project**
> Add MCP configuration to a project you already have and continue working in the current codebase. This path is useful when the project already exists and you want the assistant to help with project changes, component work, and documentation questions without regenerating anything.

All three paths use the same MCP servers. The difference is only how the project is prepared before you start prompting:

- in the **CLI-first** path, Ignite UI CLI creates the project and prepares the first MCP configuration for you
- in the **empty-folder** path, you create the MCP configuration first and let the assistant create the project after that
- in the **existing-project** path, you attach MCP to the current codebase and continue from what is already there

In all cases, once the MCP servers are connected and visible in your AI client, the assistant can keep working in the same session.

If you are creating a project with Ignite UI CLI first, you can run the CLI in either of these ways:

- **Global install**

  ```bash
  npm install -g igniteui-cli
  ```

  This gives you the `ig` command in any terminal session and is the clearest option if you plan to create and scaffold projects regularly.

- **Without a global install**

  ```bash
  npx --package igniteui-cli igniteui new
  ```

  This runs the CLI through `npx` instead of a global `ig` command.

For the **CLI-first** path, you can create the project in guided mode or with a direct command.

Use guided mode when you want the CLI to walk you through the available options:

```bash
ig new
```

Matching `npx` form:

```bash
npx --package igniteui-cli igniteui new
```

Use a direct command when you already know the project settings:

```bash
ig new my-app --framework=angular --type=igx-ts --template=empty
```

Matching `npx` form:

```bash
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
```

In guided mode, Ignite UI CLI prompts for the project name, framework, template, theme, and whether to add a component or complete the setup. In direct mode, you provide the framework and any supported options in the command itself.

For more details about project templates, CLI command options, and component scaffolding commands such as `ig add`, see the Ignite UI CLI documentation for Angular.

### VS Code

GitHub Copilot in VS Code supports MCP servers through a workspace-level configuration file. Create or edit `.vscode/mcp.json` in your project root:

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

If you created the project with Ignite UI CLI first, review the generated `.vscode/mcp.json` and confirm that both entries are present.

Once saved, open the GitHub Copilot chat panel, switch to **Agent** mode, and the Ignite UI CLI MCP tools will be available.

> [!NOTE]
> MCP support in VS Code requires GitHub Copilot and VS Code 1.99 or later.

### Cursor

Cursor supports project-scoped MCP configuration. Create or edit `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

The servers will be picked up automatically when you open a new Cursor chat session.

> [!NOTE]
> You can also configure MCP servers globally via **Settings → MCP** in Cursor.

### Claude Desktop

Add the servers to your Claude Desktop configuration file:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

Restart Claude Desktop after saving. You will see an MCP server indicator (slider icon) in the chat input area, confirming that MCP tools are active.

### Claude Code

Claude Code supports MCP servers through its CLI and a project-scoped `.mcp.json` file. To share the configuration with your team, create or edit `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

Alternatively, you can add the servers via the command line for your local environment only:

```bash
claude mcp add igniteui-cli -- npx -y igniteui-cli mcp
claude mcp add igniteui-theming -- npx -y igniteui-theming igniteui-theming-mcp
```

Use the `/mcp` command inside Claude Code to verify the servers are connected.

### JetBrains IDEs

JetBrains AI Assistant supports MCP servers through the IDE settings:

1. Open **Settings** (or **Preferences** on macOS).

2. Navigate to **Tools → AI Assistant → Model Context Protocol (MCP)**.

3. Click **+ Add** and choose **As JSON** or use the form fields.

4. Enter the following configuration:

   ```json
   {
     "mcpServers": {
       "igniteui-cli": {
         "command": "npx",
         "args": ["-y", "igniteui-cli", "mcp"]
       },
       "igniteui-theming": {
         "command": "npx",
         "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
       }
     }
   }
   ```

5. Click **OK** and restart the AI Assistant.

> [!NOTE]
> MCP support requires the AI Assistant plugin to be installed and enabled in your JetBrains IDE.

### Other MCP Clients

For any other MCP-compatible client, use the STDIO transport with these launch commands:

```bash
npx -y igniteui-cli mcp
npx -y igniteui-theming igniteui-theming-mcp
```

### GitHub

GitHub Copilot cloud agent supports repository-level MCP configuration. In your repository:

1. Open the main repository page.
2. Click **Settings**.
3. In the sidebar, go to **Copilot** then **Cloud agent**.
4. Paste your JSON in the **MCP configuration** section.
5. Click **Save**.

Use a repository configuration like this:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"],
      "tools": ["*"]
    },
    "igniteui-theming": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"],
      "tools": ["*"]
    }
  }
}
```

This setup is useful when you want the GitHub cloud agent to use the same CLI MCP and Theming MCP tools directly from the repository context.

## Available Tools

The MCP server exposes a set of tools that the AI uses automatically based on your prompts. You never call these tools directly. Describe what you want in chat, and the assistant picks the right one. This table is here so you know what's available before you start.

To get the live list with current parameters, ask:

> _"What tools does the Ignite UI CLI MCP provide?"_

Here is a brief overview of each tool:

| Tool                      | Description                                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list_components`         | Lists available Ignite UI component docs for a framework. Accepts an optional keyword filter (case-insensitive substring match against name, keywords, and summary). |
| `get_doc`                 | Gets the full markdown content of a specific component doc by kebab-case name (e.g., `grid-editing`, `combo-overview`). Includes code samples, tables, and links.    |
| `search_docs`             | Full-text search across Ignite UI docs for a framework. Returns up to 20 ranked results with excerpts.                                                               |
| `get_project_setup_guide` | Returns the project setup guide for creating a new project in a specific framework, including CLI steps and install instructions.                                    |
| `search_api`              | Searches API entries by keyword or component name across Angular, React, and Web Components.                                                                         |
| `get_api_reference`       | Returns the full API reference for a specific component or class, including properties, methods, and events. Supports Angular, React, and Web Components.            |

At a high level, the CLI MCP tools help with:

- creating new projects
- working in existing projects
- adding and modifying components
- updating project structure and configuration
- answering documentation and API questions

> [!NOTE]
> Framework detection uses component prefixes: `for Angular`, `for React`, `for Web Components`, `for Blazor`. The assistant picks up the right framework automatically from your open files or prompt context.

The theming server adds styling, theme, palette, and token workflows to the same client session.

## Common Workflows

The following setup scenarios show when to use each starting point.

### CLI-first setup

Create the project with Ignite UI CLI first when you want the fastest guided setup and want `.vscode/mcp.json` generated for you automatically.

Example scenarios:

- _"I want to create a new project with Ignite UI CLI first, open the generated project in VS Code, and continue from there with MCP."_
- _"I already know I want a React project, so I want to create it with the CLI and then use MCP to add pages and components."_

### Empty folder setup

Start from an empty folder when you want the assistant to create the project from chat after you add the MCP configuration yourself.

Example scenarios:

- _"I have a completely empty folder and I want the assistant to create the whole project from chat after MCP is connected."_
- _"I do not want to run Ignite UI CLI manually first. I want MCP to drive the first project creation step."_

### Existing project setup

Connect MCP to an existing project when you want to keep the current codebase and use the assistant for project changes, component work, and documentation questions.

Example scenarios:

- _"I already have a project and only want to add MCP so the assistant can help me update pages and components."_
- _"The project exists already, and I mainly want to ask documentation and API questions while working in the current codebase."_

## Troubleshooting

**`npx` is not recognized**

Node.js is not installed or is not available in the current terminal environment. Install Node.js from [nodejs.org](https://nodejs.org) and verify with `node --version`.

**`ig` is not recognized**

If you want to use the global `ig` command, install Ignite UI CLI first with `npm install -g igniteui-cli`. If you do not want a global install, use the `npx --package igniteui-cli igniteui ...` form instead.

**The MCP tools do not appear after saving the configuration**

Reload the workspace, reopen the editor, or restart the AI client. Some clients require a full restart to detect new MCP configuration files.

**One server fails to start**

Verify that the configuration content matches the examples exactly, including key names and argument order.

**The project was created, but the MCP configuration is only available for VS Code**

Ignite UI CLI writes `.vscode/mcp.json` for the CLI-first path. If you are using Cursor, Claude Desktop, Claude Code, JetBrains, GitHub, or another MCP client, copy the same server entries into that client's configuration format and location.

**The assistant is working in the wrong folder or cannot find the project files**

Make sure the AI client is pointed at the project root. If you are using an editor-based client, open the project root folder. If you are using a desktop or chat-first client, make the correct project folder available as the session context.

**The empty-folder setup does not behave as expected**

Check that the folder is actually empty before starting. If the folder already contains project files, use the existing-project path instead of treating it as a new empty workspace.

**The GitHub MCP configuration is rejected**

Validate that the JSON uses the `mcpServers` structure and that each local server entry includes `type`, `command`, and `args`. If you include the `tools` field, use valid tool names or `["*"]`.

## Additional Resources

- [AI-Assisted Development with Ignite UI](./ai-assisted-development-overview.md)
- [Ignite UI for Angular Skills](./skills.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
