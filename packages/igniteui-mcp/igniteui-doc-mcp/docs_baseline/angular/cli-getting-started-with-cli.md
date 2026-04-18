---
title: Getting Started with Ignite UI CLI | Ignite UI for Angular | Infragistics
_description: Install the Ignite UI CLI globally and use it to scaffold Angular projects, add component views, run a development server, and connect an MCP server to your AI coding assistant.
_keywords: ignite ui cli, ignite ui for angular, angular scaffolding, getting started, infragistics
last_updated: "2025-04-06"
_tocName: Getting Started with Ignite UI CLI
---

<!-- schema: Article, HowTo -->

# Getting Started with Ignite UI CLI

The Ignite UI CLI is a standalone global command-line tool for scaffolding Angular, React, and jQuery projects pre-configured for Ignite UI components. It provides a guided step-by-step wizard for first-time setup, non-interactive `new` and `add` commands for scripted workflows, a development server, and a built-in MCP server for connecting AI coding assistants to live Ignite UI documentation.

The CLI does not replace the Angular CLI - it works alongside it. Projects created with the Ignite UI CLI are standard Angular workspaces and are fully compatible with `ng` commands after scaffolding.

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

The guided wizard is the recommended starting point for new projects. It prompts you to choose a project type, name, template, and theme, then scaffolds and commits the project automatically.

To activate the wizard:

```cmd
ig
```

or:

```cmd
ig new
```

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" alt="Play video: Building Your First Ignite UI CLI App" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

For a step-by-step walkthrough of the wizard options, see [Step-by-Step Guide Using Ignite UI CLI](step-by-step-guide-using-cli.md).

### Create a project directly

To create an Angular project non-interactively, provide `angular` as the framework and `igx-ts` as the project type:

```cmd
ig new <project-name> --framework=angular --type=igx-ts --template=side-nav
```

> [!NOTE]
> As of Ignite UI CLI v13.1.0, the `igx-ts` project type generates a project with standalone components by default. To use NgModule-based bootstrapping instead, set `--type=igx-ts-legacy`.

The new application is created in a directory named after the project. The following project templates are available for Angular:

| Template ID   | Description                                                                                                                                      |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| empty         | Project structure with routing and a home page                                                                                                   |
| side-nav      | Project structure with a side navigation drawer                                                                                                  |
| side-nav-auth | Side navigation project extended with a user authentication module. See [Angular Authentication Project Template](auth-template.md) for details. |

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
  <summary><u>framework</u><span align="right"><strong> (Ignite UI CLI only)</strong></span></summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p>
    Framework to set up the project for. Supported values are: jquery, angular, react.
  </p>
</details>

<details>
  <summary><u>type</u><span align="right"><strong> (Ignite UI CLI only)</strong></span></summary>
  <p>
    <code>--type</code> (alias: <code>-t</code>)
  </p>
  <p>
    The available project types depend on the selected framework.
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
    Specifies the project template when multiple templates exist for a framework type. Currently available for Ignite UI for Angular <code>igx-ts</code> project types.
  </p>
</details>

## Add a Component Template

To add an [available Ignite UI for Angular template](component-templates.md) to an existing project, provide the template ID and a name for the new component:

```cmd
ig add grid newGrid
```

To list all available templates in your project directory:

```cmd
ig list
```

Template addition is supported in projects created with the Ignite UI CLI, Angular Schematics, or any Angular CLI project where Ignite UI for Angular was added with `ng add`. For the guided component wizard, see [Step-by-Step Guide Using Ignite UI CLI](step-by-step-guide-using-cli.md#add-view).

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
  <code>ig add combo newCombo --module=myModule/myModule.module.ts</code>
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

The `start` command builds the application, starts a local web server, and opens it in your default browser:

```cmd
ig start
```

## AI Assistant Integration (MCP)

The Ignite UI CLI includes a built-in MCP (Model Context Protocol) server that connects AI coding assistants - GitHub Copilot, Claude, Cursor - to live Ignite UI component documentation and API references. Once configured, your AI assistant can query component APIs, retrieve setup guides, and generate accurate Ignite UI for Angular code without switching context.

Start the MCP server:

```cmd
ig mcp
```

For client configuration (VS Code, Claude Desktop, Cursor) and a full description of available tools, see [Ignite UI CLI MCP](../../ai/cli-mcp.md).

## Ignite UI CLI Commands

A complete list of available Ignite UI CLI commands is maintained on the [Ignite UI CLI wiki](https://github.com/IgniteUI/igniteui-cli/wiki):

| Command                                                               | Alias | Description                                                                                                                                                                                          |
| :-------------------------------------------------------------------- | :---- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)       |       | Builds the application, starts a web server, and opens it in the default browser.                                                                                                                    |
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build)       |       | Builds the application into an output directory.                                                                                                                                                     |
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g     | Generates a new custom template for supported frameworks and project types.                                                                                                                          |
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help)         | -h    | Lists available commands with brief descriptions.                                                                                                                                                    |
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config)     |       | Reads and writes Ignite UI CLI configuration settings.                                                                                                                                               |
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc)           |       | Searches the Infragistics knowledge base for a given term.                                                                                                                                           |
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list)         | l     | Lists all templates for the specified framework and type. When run inside a project folder, lists templates for the project's framework and type even if different values are provided as arguments. |
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test)         |       | Executes the tests for the current project.                                                                                                                                                          |
| ig version                                                            | -v    | Shows the Ignite UI CLI version installed locally, or globally if no local installation is found.                                                                                                    |
| ig mcp                                                                |       | Starts the Ignite UI MCP server, providing component documentation search and API reference tools to connected AI assistants. See [Ignite UI CLI MCP](../../ai/cli-mcp.md).                          |
