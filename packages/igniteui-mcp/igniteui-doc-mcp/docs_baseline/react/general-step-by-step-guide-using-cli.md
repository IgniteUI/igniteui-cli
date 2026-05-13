---
title: Step-by-Step Guide Using Ignite UI CLI | Ignite UI for React | Infragistics
_description: Walk through the Ignite UI CLI interactive wizard to create a new React project, choose a template and theme, and add Ignite UI for React component views.
_keywords: React cli, ignite ui cli, Ignite UI for React, scaffolding, step-by-step, Infragistics
mentionedTypes: []
last_updated: "2025-04-08"
_tocName: Step-by-Step Guide Using Ignite UI CLI
---

<!-- schema: Article, HowTo -->

# Step-by-Step Guide Using Ignite UI CLI

The Ignite UI CLI step-by-step mode is an interactive wizard that guides you through project creation, template selection, theming, and component view addition for Ignite UI for React projects. It covers the same operations as the non-interactive `ig new` and `ig add` commands but prompts you at each step rather than requiring all arguments upfront.

The step-by-step mode does not support scripted or non-interactive use - for that, use the `ig new` and `ig add` commands with explicit arguments. The wizard relies on `Inquirer.js`; see [supported terminals](https://github.com/SBoudrias/Inquirer.js#support-os-terminals) for compatibility. For the full CLI reference, see [Ignite UI CLI Overview](general-cli-overview.md).

To activate the wizard, run:

```cmd
ig
```

or:

```cmd
ig new
```

## Create a New Project

The wizard walks through project naming, framework and type selection, template choice, and theming in sequence. Each step displays its options as an interactive list - navigate with the arrow keys and confirm with ENTER.

### Enter a project name

First, you will be prompted to enter a name for your application. The project is created inside a directory with the same name.

### Select a framework

Navigate through the options using the arrow keys and press ENTER to confirm:

Select **React** to scaffold a project pre-configured for Ignite UI for React.

### Select a project type

Select **Ignite UI for React TS** as the project type.

### Select a project template

Choose one of the available project templates. Navigate through the options using the arrow keys and press ENTER to confirm:

| Template         | Description                                         |
| :--------------- | :-------------------------------------------------- |
| Empty            | Minimal project structure with no predefined views  |
| Base             | Project structure with a home page                  |
| Top Navigation   | Project structure with a top navigation bar         |

### Select a theme

Choose a theme for your application:

- The **default** option includes a pre-compiled CSS file with the default Ignite UI for React theme.
- The **custom** option generates a Sass-based color palette and theme configuration using the [Theming API](./themes/overview.md).

### Complete or continue

After completing the above steps, the project structure is generated, a Git repository is initialized, and the project is committed. You will then be asked whether to complete the process or add a new view to your application.

## Add View

The Ignite UI CLI supports multiple component templates that can be added to an existing project. This mode is available either as a continuation of project creation or inside an existing project using:

```cmd
ig add
```

You will be provided with a list of available component templates, grouped by category. Use the arrow keys to navigate through the groups and ENTER to select. For some templates, such as `Custom Grid`, you will be provided with a list of optional features that can be toggled on or off with the SPACE key before confirming your selection.

After selecting a group, choose a specific template from the list and enter a name for the new component. If you choose to add a scenario template, you will also be presented with a list of available scenario templates.

After adding a template, you will be asked whether to add more views or complete the process. On completion, any remaining package dependencies are installed and the application is built and opened in your default browser.

To add more views to a project later without the wizard, use the direct `add` command:

```cmd
ig add [template] [name]
```

For example:

```cmd
ig add grid MyGrid
```

> [!NOTE]
> Your routing file will be updated with the path to the newly generated page. For example, a component named `MyGrid` will be navigable at `/my-grid`.

## Run the Application

Once your project is complete, run it at any time with:

```cmd
ig start
```

This builds the project, starts a local web server, and opens the application in your default browser.
