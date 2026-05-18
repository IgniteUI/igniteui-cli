---
title: Build an App End-to-End with Ignite UI CLI MCP and Ignite UI Theming MCP - Ignite UI for Web Components
_description: Follow an end-to-end Ignite UI for Web Components workflow with Ignite UI CLI MCP and Ignite UI Theming MCP start CLI-first, connect both MCP servers, create or extend the app through chat, ask documentation questions, and apply a custom theme.
_keywords: Web Components, Ignite UI for Web Components, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, workflow, theming, prompt
_language: en
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/general-how-to-mcp-e2e"
namespace: Infragistics.Controls
mentionedTypes: []
_tocName: Build App with CLI MCP and Theming MCP
---

# Build an App End-to-End with Ignite UI CLI MCP and Ignite UI Theming MCP

<p class="highlight">Ignite UI CLI MCP and Ignite UI Theming MCP work together to let an AI assistant scaffold, extend, and theme an Ignite UI for Web Components application through chat prompts. CLI MCP handles project creation, component work, and documentation questions. Theming MCP handles palettes, themes, tokens, and styling workflows. This topic shows the full process in one clear flow.</p>

<div class="divider"></div>

## How CLI MCP and Theming MCP Divide Responsibilities

CLI MCP and Theming MCP are two separate STDIO-transport MCP servers with distinct, non-overlapping responsibilities in an Ignite UI for Angular development workflow.

| Concern                                          | Server      |
| ------------------------------------------------ | ----------- |
| Create and scaffold project structure            | CLI MCP     |
| Add or update {}components   | CLI MCP     |
| Query component APIs and documentation           | CLI MCP     |
| Generate color palettes and shade variations     | Theming MCP |
| Create and apply global theme configurations     | Theming MCP |
| Generate component-level design tokens           | Theming MCP |
| Adjust spacing, sizing, and border-radius        | Theming MCP |

Neither server executes steps autonomously - the AI assistant invokes MCP tools only in response to your prompts. CLI MCP does not generate or modify theme or Sass files. Theming MCP does not scaffold components, modify application logic, or answer documentation questions. Both servers require an MCP client that supports STDIO transport; they cannot be used from a browser-only chat interface.

## What You Need

Before you start, make sure you have:

- **Node.js** installed so `npx` is available
- a supported AI client with MCP support
- internet access for `npx` package resolution on first use
- a folder for the project

This walkthrough works best with a **CLI-first** setup because Ignite UI CLI scaffolds the project and prepares the first MCP configuration for VS Code automatically.

If you still need the detailed setup reference for each client, see [Ignite UI CLI MCP](ai/cli-mcp.md) and [Ignite UI Theming MCP](ai/theming-mcp.md).

## Step 1: Start with Ignite UI CLI

The recommended starting point is to create the project with Ignite UI CLI first.

You can run Ignite UI CLI in either of these ways:

### Global install

```bash
npm install -g igniteui-cli
```

This gives you the `ig` command in any terminal session.

### Without a global install

```bash
npx ig new
```

This runs the CLI through `npx` instead of a global `ig` command.

You can use **guided mode** if you want the CLI to walk you through the options:

```bash
ig new
```

Matching `npx` form:

```bash
npx ig new
```

You can also use a direct command when you already know the project settings.

For Web Components:

```bash
ig new my-app --framework=webcomponents
```

Matching `npx` form:

```bash
npx ig new my-app --framework=webcomponents
```

What happens next:

- Ignite UI CLI creates the project structure
- the required project packages are installed
- for the CLI-first path, VS Code also gets an initial `.vscode/mcp.json`

## Step 2: Connect CLI MCP and Theming MCP

After the project is created, make sure both MCP servers are available in your AI client.

### VS Code

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

### Cursor, Claude Desktop, Claude Code, JetBrains, and Other MCP Clients

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

After saving the configuration, reopen or restart the AI client and confirm that both `igniteui-cli` and `igniteui-theming` are available.

## Step 3: Let the Assistant Review the Project

Once both MCP servers are running, open a new chat and start by giving the assistant project-level context.

Useful prompts:

> _"Review this project and explain the current structure before we start adding features."_

> _"Tell me what was created, what the main entry points are, and where new pages should be added."_

What happens next:

- CLI MCP inspects the generated or existing project
- the assistant summarizes the structure
- you now have a shared starting point for the next steps

## Step 4: Add a Real Feature Through Chat

After the project structure is clear, ask for a concrete feature.

Example prompt:

> _"Add an Orders page with an Ignite UI for Web Components grid. Include columns for Order ID, Customer Name, Order Date, and Total Amount, and bind the grid to sample data."_

Follow-up prompt:

> _"Enable filtering, sorting, and paging on the Orders grid, and keep the page layout consistent with the rest of the app."_

What happens next:

- CLI MCP adds or updates the right page
- the assistant creates or updates the component code
- the feature is integrated into the existing app structure

You can continue with smaller refinements:

> _"Add a simple toolbar above the grid and keep the layout compact."_

## Step 5: Ask Documentation Questions in the Same Session

You do not need to leave the conversation to look up component APIs.

Example prompts:

> _"What filtering options does the Web Components grid support, and which ones are the best fit for a simple orders table?"_

> _"What events does the combo component expose, and which one should I use for selection changes?"_

> _"Which Ignite UI for Web Components component is the best fit for a side navigation layout, and why?"_

What happens next:

- CLI MCP answers the question using documentation-aware tools
- you can immediately follow with an implementation request

For example:

> _"Apply the recommended filtering approach to the current Orders grid."_

## Step 6: Apply a Custom Theme

Once the app structure and main feature are in place, switch to Theming MCP in the same chat.

Example prompt:

> _"Apply a professional theme to the app. Use a deep blue primary color, a warm amber secondary color, and keep the spacing compact."_

What happens next:

- Theming MCP generates the palette and theme configuration
- the assistant updates the right theme or styles files
- the app styling stays aligned with the current structure

You can refine the theme further with more targeted prompts:

> _"Make the grid header use the primary color, increase the row height slightly, and keep the rest of the page visually clean."_

> _"Show me the generated primary and secondary palette shades before you refine the grid styling."_

## Step 7: Continue Iterating

The strongest part of this workflow is that you can keep moving between project work, documentation questions, and theming in one conversation.

Example prompts:

> _"Keep the current Orders page structure, but simplify the layout and make the filter area more compact."_

> _"Use the current theme, but make the dashboard cards and grid spacing more consistent with the rest of the app."_

> _"Review the generated files and explain the main project, component, and theme changes you made."_

What happens next:

- CLI MCP handles project and component refinements
- Theming MCP handles theme and token refinements
- the assistant keeps the whole workflow connected end to end

## Topic Takeaways

This workflow works well when you want to keep project setup, component work, documentation lookups, and theming in one chat session.

Use it when:

- you want to start from a real project scaffold instead of isolated code snippets
- you expect to alternate between implementation and documentation questions
- you want project structure and visual styling to evolve together

In practice, the most effective pattern is to use CLI MCP for project and component changes, pause for documentation questions when needed, and then use Theming MCP to refine the result without leaving the same conversation.

## Related Topics

- [AI-Assisted Development with Ignite UI](ai/ai-assisted-development-overview.md)
- [Ignite UI for Web Components Skills](ai/skills.md)
- [Ignite UI CLI MCP](ai/cli-mcp.md)
- [Ignite UI Theming MCP](ai/theming-mcp.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
