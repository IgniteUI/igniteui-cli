---
title: Getting Started with Ignite UI for Angular Schematics | Ignite UI for Angular | Infragistics
_description: Install the Ignite UI for Angular Schematics collection and use it to scaffold Angular projects, add component views, and run a development server within the native Angular CLI workflow.
_keywords: ignite ui for angular, angular schematics, angular cli, scaffolding, getting started, infragistics
last_updated: "2026-04-21"
_license: MIT
_tocName: Getting Started with Ignite UI for Angular Schematics
---

<!-- schema: Article, HowTo -->

# Getting Started with Ignite UI for Angular Schematics

The Ignite UI for Angular Schematics collection is a set of Angular CLI schematics for scaffolding Angular projects and component views pre-configured for Ignite UI for Angular. It integrates into the native Angular CLI workflow - use it with `ng new` for project creation and `ng g` for component scaffolding, without installing a separate global tool. The collection is distributed as the `@igniteui/angular-schematics` package and is added automatically when you run `ng add igniteui-angular` on an existing Angular project.

The Schematics collection does not run an MCP server - the MCP server process is provided by the Ignite UI CLI and starts via `npx -y igniteui-cli mcp`, where `-y` avoids the interactive `npx` confirmation prompt. The `ai-config` schematic configures the MCP client connection and copies Agent Skills without requiring a separate CLI install. The collection is specific to Angular; React, Web Components, and Blazor equivalents are covered in their respective framework documentation. Neither tool is required to use Ignite UI for Angular - the library can be installed and configured manually as described in the [Getting Started guide](../getting-started.md).

## Install the Schematics Collection

Install `@igniteui/angular-schematics` globally using npm:

```cmd
npm i -g @igniteui/angular-schematics
```

Or, using yarn:

```cmd
yarn global add @igniteui/angular-schematics
```

After a global install, the collection is available as the `--collection` argument to `ng new`. If you already have an Angular project and want to add Ignite UI for Angular without scaffolding a new one, use:

```cmd
ng add igniteui-angular
```

This installs the `igniteui-angular` package, registers the `@igniteui/angular-schematics` collection, and configures dependencies, styles, and theme imports automatically.

## Create a New Project

The Schematics collection provides two modes for project creation: a guided interactive wizard and a direct `ng new` command with explicit arguments.

### Use the guided wizard

The guided wizard is the recommended starting point for new projects. Activate it with:

```cmd
ng new --collection="@igniteui/angular-schematics"
```

For a step-by-step walkthrough of the wizard options, see [Step-by-Step Guide Using Ignite UI for Angular Schematics](step-by-step-guide-using-angular-schematics.md).

### Create a project directly

To create an Angular project non-interactively, provide the collection and template arguments to `ng new`:

```cmd
ng new newAngularProject --collection="@igniteui/angular-schematics" --template=side-nav
```

By default, the project uses standalone components. To use NgModule-based bootstrapping instead, add `--type=igx-ts-legacy`:

```cmd
ng new newAngularProject --collection="@igniteui/angular-schematics" --type=igx-ts-legacy
```

The project is created in a directory named after the project. The following project templates are available:

| Template ID   | Description                                                                                                                                       |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| empty         | Project structure with routing and a home page                                                                                                    |
| side-nav      | Project structure with a side navigation drawer                                                                                                   |
| side-nav-auth | Side navigation project extended with a user authentication module. See [Angular Authentication Project Template](auth-template.md) for details.  |

The following arguments are available when creating a project:

<details>
  <summary><u>name</u></summary>
  <p>
    <code>name</code> (alias: <code>-n</code>)
  </p>
  <p>
    The name of the application. The application is created inside a directory with the same name.
  </p>
</details>

<details>
  <summary><u>type</u></summary>
  <p>
    <code>--type</code> (alias: <code>-t</code>)
  </p>
  <p>
    The project bootstrapping type. Use <code>igx-ts-legacy</code> for NgModule-based bootstrapping. Omit to default to standalone components.
  </p>
</details>

<details>
  <summary><u>theme</u></summary>
  <p>
    <code>--theme</code> (alias: <code>-th</code>)
  </p>
  <p>
    Project theme (depends on project type).
  </p>
</details>

<details>
  <summary><u>skip-git</u></summary>
  <p>
    <code>--skip-git</code> (alias: <code>--sg</code>)
  </p>
  <p>
    Skips automatic Git repository initialization. If omitted, the global <code>skip-git</code> configuration property is used.
  </p>
</details>

<details>
  <summary><u>skip-install</u></summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    Skips the initial npm package installation on project creation.
  </p>
</details>

<details>
  <summary markdown='span'><u>template</u></summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    Specifies the project template. Currently available for Ignite UI for Angular <code>igx-ts</code> project types.
  </p>
</details>

## Add a Component Template

To add an [available Ignite UI for Angular template](component-templates.md) to an existing project, use `ng generate` with the Ignite UI for Angular collection and the `component` schematic, providing the template ID and a name for the new component:

```cmd
ng g @igniteui/angular-schematics:component grid newGrid
```

Template addition is supported in projects created with the Angular Schematics, Ignite UI CLI, or any Angular CLI project where Ignite UI for Angular was added with `ng add`. For the guided component wizard, see [Step-by-Step Guide Using Ignite UI for Angular Schematics](step-by-step-guide-using-angular-schematics.md#add-component-views).

The following arguments are available when adding a template:

<details>
  <summary><u>module</u></summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    <i>Applicable only in Angular projects.</i>
  </p>
  <p>
    Path to the <code>module.ts</code> file, relative to <code>/src/app/</code>, where the new component should be registered:
  </p>
  <code>ng g @igniteui/angular-schematics:component combo newCombo --module=myModule/myModule.module.ts</code>
</details>

<details>
  <summary><u>skip-route</u></summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    Skips auto-generation of an app navigation route for the new component.
  </p>
</details>

## Run the Application

The `start` schematic builds the application, starts a local web server, and opens it in your default browser:

```cmd
ng g @igniteui/angular-schematics:start
```

## AI Assistant Integration

The Ignite UI for Angular Schematics collection includes an `ai-config` schematic that sets up AI coding assistant integration for your project. In a single command, it:

- **Configures MCP servers** - writes the MCP config file for your chosen coding assistant with the Ignite UI and Angular CLI MCP server entries
- **Copies skill files** - adds Angular-specific skill guides into your agent directories
- **Sets up instruction files** - populates each agent's instruction file with project-specific guidance

Run it from your project root after installing Ignite UI for Angular packages:

```cmd
ng generate @igniteui/angular-schematics:ai-config
```

### Flags Reference

| Flag | Values | Default |
|------|--------|---------|
| `--assistants` | `generic`, `vscode`, `cursor`, `gemini`, `junie`, `none` | Prompted interactively; `generic` in non-interactive mode |
| `--agents` | `generic`, `claude`, `copilot`, `cursor`, `codex`, `windsurf`, `gemini`, `junie`, `none` | Prompted interactively; `generic` + `claude` in non-interactive mode |

### Supported Coding Assistants

| Coding Assistant | Choice value | Config Path | Root Key |
|-----------------|--------------|-------------|----------|
| Generic (Claude Code, VS Code, and others) | `generic` | `.mcp.json` | `mcpServers` |
| VS Code (GitHub Copilot) | `vscode` | `.vscode/mcp.json` | `servers` |
| Cursor | `cursor` | `.cursor/mcp.json` | `mcpServers` |
| Gemini | `gemini` | `.gemini/settings.json` | `mcpServers` |
| JetBrains Junie | `junie` | `.junie/mcp/mcp.json` | `mcpServers` |

### Supported AI Agents

| Agent | Skills Directory | Instruction File |
|-------|------------------|------------------|
| Generic | `.agents/skills` | `AGENTS.md` |
| Claude | `.claude/skills` | `.claude/CLAUDE.md` |
| Copilot | `.github/skills` | `.github/copilot-instructions.md` |
| Cursor | `.cursor/skills` | `.cursor/rules/cursor.mdc` |
| Codex | `.codex/skills` | `.codex/instructions.md` |
| Windsurf | `.windsurf/skills` | `.windsurf/rules/guidelines.md` |
| Gemini | `.gemini/skills` | `.gemini/GEMINI.md` |
| Junie | `.junie/skills` | `.junie/guidelines.md` |

### Usage Examples

Interactive - prompts for coding assistants, then agents:

```bash
ng generate @igniteui/angular-schematics:ai-config
```

Non-interactive - specify both assistants and agents:

```bash
ng generate @igniteui/angular-schematics:ai-config --assistants cursor --agents claude copilot
```

Skip MCP configuration only:

```bash
ng generate @igniteui/angular-schematics:ai-config --assistants none --agents claude generic
```

Skip skill files and instructions only (MCP servers are still configured):

```bash
ng generate @igniteui/angular-schematics:ai-config --assistants vscode --agents none
```

The schematic also runs automatically as part of `ng add igniteui-angular` with defaults: agents `["claude", "generic"]`, assistants `["generic"]`.

### MCP Server Configuration

The schematic writes (or merges into) the config file for your chosen coding assistant. Existing third-party MCP server entries are always preserved - the command merges, never overwrites. When run via the Angular schematic, an additional `angular-cli` MCP server entry is included automatically alongside the Ignite UI servers.

**Generic, Cursor, Gemini, and Junie** (`.mcp.json` and equivalents, root key `mcpServers`):

```json
{
  "mcpServers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    },
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

**VS Code / GitHub Copilot** (`.vscode/mcp.json`, root key `servers`):

```json
{
  "servers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    },
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

### Skill Files

Skill files are Angular-specific guides copied into each agent's skills directory. They are sourced from your installed Ignite UI package and kept in sync each time you run the schematic - existing files are only updated if their content has changed.

> [!NOTE]
> If you run `ai-config` before installing packages (e.g. with `--skip-install`), the schematic falls back to built-in templates. Re-run the command after installing to pick up the skill files from your installed version.

### Using the Ignite UI CLI Instead

If you have the Ignite UI CLI installed globally, the equivalent command is:

```cmd
ig ai-config
```

> [!NOTE]
> The `ig ai-config` command configures only the two Ignite UI entries, `igniteui-cli` and `igniteui-theming`, and does not register `angular-cli`. Use `ng generate @igniteui/angular-schematics:ai-config` to get all three servers configured in a single step.

For full setup instructions across all AI clients and Agent Skills wiring, see [Ignite UI CLI MCP](../../ai/cli-mcp.md).