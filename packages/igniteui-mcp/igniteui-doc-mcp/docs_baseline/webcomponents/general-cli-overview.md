---
title: Web Components CLI - Ignite UI for Web Components
_description: The Ignite UI for Web Components CLI scaffolds Web Components projects, adds pre-configured component views, and connects AI coding assistants via a built-in MCP server.
_keywords: Web Components cli, command line interface, Ignite UI for Web Components, Infragistics,
mentionedTypes: []
_license: MIT
last_updated: "2026-04-21"
_tocName: Ignite UI CLI
---

## Install the Ignite UI CLI

Install the Ignite UI CLI globally using npm:

```cmd
npm install -g igniteui-cli
```

Or, using yarn:

```cmd
yarn global add igniteui-cli
```

Verify the installation:

```cmd
ig version
```

## Create a New Project

The Ignite UI CLI provides two modes for project creation: a guided interactive wizard and a direct command with arguments.

### Use the guided wizard

The guided wizard is the recommended starting point for new projects. It prompts you to choose a framework, project type, template, and theme, then scaffolds and commits the project automatically.

To activate the wizard, run:

```cmd
ig
```

or:

```cmd
ig new
```

For a step-by-step walkthrough of the wizard options, see [Step-by-Step Guide Using Ignite UI CLI](general-step-by-step-guide-using-cli.md).

### Create a project directly

To create a Web Components project non-interactively, provide `webcomponents` as the framework and `igc-ts` as the project type:

```cmd
ig new <project-name> --framework=webcomponents --type=igc-ts --template=side-nav
```

The following project templates are available for Web Components:

| Template ID | Description                                        |
| :---------- | :------------------------------------------------- |
| empty       | Minimal project structure with no predefined views |
| base        | Project structure with a home page                 |
| side-nav    | Project structure with a side navigation drawer    |

The following arguments are available when creating a project:

| Argument         | Alias  | Description                                                                                                           |
| :--------------- | :----- | :-------------------------------------------------------------------------------------------------------------------- |
| `name`           | `-n`   | The name of the application. The application is created inside a directory with the same name.                       |
| `--framework`    | `-f`   | The framework for the generated project. Default: `jquery`. Supported: `jquery`, `angular`, `react`, `webcomponents`. |
| `--type`         | `-t`   | The project type for the selected framework. Use `igr-ts` for React or `igc-ts` for Web Components.                  |
| `--template`     |        | The project template to use. See the template tables above for available options per framework.                      |
| `--skip-git`     | `--sg` | Skips automatic Git repository initialization. Uses the global `skip-git` config value if omitted.                   |
| `--skip-install` | `--si` | Skips npm package installation on project creation.                                                                  |

## Add a Component Template

Once you have created a project, you can add additional component views at any point. Running `ig add` without arguments launches an interactive template browser:

```cmd
ig add
```

To add a specific component template directly, provide the template ID and a name for the new component:

```cmd
ig add [component-template] [component-name]
```

For example, to add a data grid component named `MyGrid`:

```cmd
ig add grid MyGrid
```

To list all available templates in the current project:

```cmd
ig list
```

For a guided walkthrough of the component addition wizard, see [Step-by-Step Guide Using Ignite UI CLI](general-step-by-step-guide-using-cli.md#add-view).

> [!NOTE]
> Your routing file will be updated with the path to the newly generated page. For example, a component named `MyGrid` will be navigable at `/my-grid`.

The following component templates are available for Web Components:

| Name              | Component Template |
| :---------------- | :----------------- |
| Accordion         | accordion          |
| Avatar            | avatar             |
| Badge             | badge              |
| Banner            | banner             |
| Button            | button             |
| Button Group      | button-group       |
| Calendar          | calendar           |
| Card              | card               |
| Checkbox          | checkbox           |
| Chip              | chip               |
| Circular Progress | circular-progress  |
| Date Picker       | date-picker        |
| Date Time Input   | date-time-input    |
| Divider           | divider            |
| Dock Manager      | dock-manager       |
| Dropdown          | dropdown           |
| Expansion Panel   | expansion-panel    |
| Financial Chart   | financial-chart    |
| Form              | form               |
| Grid              | grid               |
| Icon              | icon               |
| Icon Button       | icon-button        |
| Input             | input              |
| Linear Gauge      | linear-gauge       |
| Linear Progress   | linear-progress    |
| List              | list               |
| Navbar            | navbar             |
| Pie Chart         | pie-chart          |
| Radial Gauge      | radial-gauge       |
| Radio Group       | radio-group        |
| Rating            | rating             |
| Ripple            | ripple             |
| Slider            | slider             |
| Switch            | switch             |
| Tabs              | tabs               |
| Text Area         | text-area          |
| Tree              | tree               |

## Run the Application

The `start` command builds the application, starts a local web server, and opens it in your default browser:

```cmd
ig start
```

## AI Assistant Integration (MCP)

The Ignite UI CLI includes a built-in **MCP (Model Context Protocol) server** that connects AI coding assistants - GitHub Copilot, Claude, Cursor, and others - directly to Ignite UI for Web Components component documentation and API references. Once configured, your AI assistant can scaffold projects, add and modify components, search docs, look up API details, and generate accurate Ignite UI for Web Components code without leaving your editor.

The CLI MCP server starts via `npx` without requiring a global install:

```bash
npx -y igniteui-cli mcp
```

Or, if you have Ignite UI CLI installed globally:

```bash
ig mcp
```

### Quick Setup with `ig ai-config`

To configure Ignite UI for Web Components Agent Skills and both MCP servers in a single step, run the following from your project root after installing Ignite UI for Web Components packages:

```cmd
npx igniteui-cli ai-config
```

If you have the CLI installed globally:

```cmd
ig ai-config
```

This copies Ignite UI for Web Components Agent Skills into `.claude/skills/` and writes the full Ignite UI MCP server configuration, including the CLI and Theming servers, to `.vscode/mcp.json`. If the files already exist and are up-to-date, the command is a no-op. For AI clients other than VS Code, use the manual configuration below.

For full setup instructions across all AI clients and Agent Skills wiring, see [Agent Skills](./ai/skills.md) and [Ignite UI CLI MCP](./ai/cli-mcp.md).

Configure your AI client to use the CLI MCP server manually. Most teams connect both the CLI MCP and the Theming MCP together - CLI MCP handles project and component workflows while Theming MCP handles palettes, themes, and design tokens.

**VS Code** - create or edit `.vscode/mcp.json` in your project root:

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

**Cursor, Claude Desktop, Claude Code, JetBrains, and other MCP clients:**

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

For per-client setup guides (VS Code, GitHub, Cursor, Claude Desktop, Claude Code, JetBrains) and a full description of available tools, see [Ignite UI CLI MCP](./ai/cli-mcp.md). For an end-to-end walkthrough using both MCP servers, see [Build an App End-to-End with CLI MCP and Theming MCP](./general-how-to-mcp-e2e.md).

## Ignite UI CLI Commands

A full list of available Ignite UI CLI commands is maintained on the [Ignite UI CLI wiki](https://github.com/IgniteUI/igniteui-cli/wiki):

| Command                                                               | Alias | Description                                                                                                                                                               |
| :-------------------------------------------------------------------- | :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)       |       | Builds the application, starts a web server, and opens it in the default browser.                                                                                        |
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build)       |       | Builds the application into an output directory.                                                                                                                         |
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g     | Generates a new custom template for supported frameworks and project types.                                                                                              |
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help)         | -h    | Lists available commands with brief descriptions.                                                                                                                        |
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config)     |       | Reads and writes Ignite UI CLI configuration settings.                                                                                                                   |
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc)           |       | Searches the Infragistics knowledge base for a given term.                                                                                                               |
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list)         | l     | Lists available templates for the project's framework and type. When run inside a project folder, uses the project's framework and type regardless of provided arguments. |
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test)         |       | Executes the tests for the current project.                                                                                                                              |
| ig upgrade-packages                                                   |       | Upgrades Ignite UI packages in the project from Trial to Licensed.                                                                                                       |
| ig mcp                                                                |       | Starts the built-in MCP server for connecting AI coding assistants to Ignite UI for Web Components component documentation.                                                             |
| ig ai-config                                                          |       | Copies Ignite UI for Web Components Agent Skills into `.claude/skills/` and writes Ignite UI MCP server configuration to `.vscode/mcp.json`. Run once per project.                      |
| ig version                                                            | -v    | Shows the Ignite UI CLI version installed locally, or globally if no local installation is found.                                                                        |
