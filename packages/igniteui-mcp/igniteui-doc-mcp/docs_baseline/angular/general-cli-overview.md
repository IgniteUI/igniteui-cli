---
title: Angular Schematics & Ignite UI CLI | Ignite UI for Angular | Infragistics
_description: The Ignite UI CLI and Ignite UI for Angular Schematics collection scaffold Angular projects and component views pre-configured for Ignite UI for Angular. Includes MCP server for AI assistant integration.
_keywords: ignite ui for angular, angular schematics, ignite ui cli, scaffolding, infragistics
last_updated: "2025-04-06"
_tocName: Angular Schematics & Ignite UI CLI
---

<!-- schema: Article -->

# Angular Schematics & Ignite UI CLI

The Ignite UI CLI and the Ignite UI for Angular Schematics collection are two complementary scaffolding tools for generating Angular projects and component views pre-configured for Ignite UI for Angular. Both provide a guided step-by-step wizard and non-interactive command modes. Both produce the same project output - they differ only in how they integrate with your workflow.

The Ignite UI CLI does not manage Blazor or Web Components projects through this Angular toolchain. For the Angular-only Schematics workflow without a separate global tool, use `@igniteui/angular-schematics` directly with the Angular CLI. Neither tool is required to use Ignite UI for Angular - the library can be installed and configured manually as described in the [Getting Started guide](getting-started.md).

## Ignite UI CLI

[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) is a standalone global command-line tool for creating and scaffolding applications across Angular, React, and jQuery. Install it with `npm install -g igniteui-cli` and invoke it with the `ig` command.

The CLI provides a guided wizard (`ig` or `ig new`) and non-interactive project creation (`ig new <name> --framework=angular --type=igx-ts`), component scaffolding (`ig add`), a development server (`ig start`), and a built-in MCP server for AI assistant integration (`ig mcp`).

For setup instructions and all available commands, see [Getting Started with Ignite UI CLI](./cli/getting-started-with-cli.md).

## Ignite UI for Angular Schematics

[Ignite UI for Angular Schematics](https://github.com/IgniteUI/igniteui-cli/tree/master/packages/ng-schematics) are a schematic collection that integrates into the Angular CLI. The collection is added to your project automatically when you run `ng add igniteui-angular`. Invoke it with `ng new --collection="@igniteui/angular-schematics"` for project creation and `ng g @igniteui/angular-schematics:component` for component scaffolding.

The Schematics collection provides the same core project templates and component views as the CLI, within the native Angular CLI workflow. It does not include the MCP server - for AI assistant integration, use the Ignite UI CLI alongside your Angular CLI project.

For setup instructions see [Getting Started with Ignite UI for Angular Schematics](./cli/getting-started-with-angular-schematics.md).

## Step-by-Step Guides

Both tools support a guided interactive mode and a direct command mode:

- [Step-by-Step Guide Using Ignite UI CLI](./cli/step-by-step-guide-using-cli.md)
- [Step-by-Step Guide Using Ignite UI for Angular Schematics](./cli/step-by-step-guide-using-angular-schematics.md)

## AI Assistant Integration (MCP)

The Ignite UI CLI includes a built-in MCP (Model Context Protocol) server that connects AI coding assistants - GitHub Copilot, Claude, Cursor, and others - to live Ignite UI component documentation and API references. Once configured, your AI assistant can look up component APIs, retrieve setup guides, and generate accurate Ignite UI for Angular code without leaving your editor.

Start the MCP server with:

```cmd
ig mcp
```

For client configuration (VS Code, Claude Desktop, Cursor) and a description of available tools, see [Ignite UI CLI MCP](../ai/cli-mcp.md).
