---
title: Step-by-Step Guide Using Ignite UI CLI | Ignite UI for Angular | Infragistics
_description: Walk through the Ignite UI CLI interactive wizard to create a new Angular project, choose a template and theme, and add Ignite UI for Angular component views.
_keywords: ignite ui cli, ignite ui for angular, angular scaffolding, step-by-step, infragistics
last_updated: "2025-04-08"
_tocName: Step by Step guide using Ignite UI CLI
---

<!-- schema: Article, HowTo -->

# Step-by-Step Guide Using Ignite UI CLI

The Ignite UI CLI step-by-step mode is an interactive wizard that guides you through project creation, template selection, theming, and component view addition for [Ignite UI CLI](getting-started-with-cli.md)-based Angular projects. It covers the same operations as the non-interactive `ig new` and `ig add` commands but prompts you at each step rather than requiring all arguments upfront.

The step-by-step mode does not support scripted or non-interactive use - for that, use the direct `ig new` and `ig add` commands with explicit arguments. The wizard relies on `Inquirer.js`; see [supported terminals](https://github.com/SBoudrias/Inquirer.js#support-os-terminals) for compatibility.

To activate the wizard, run:

```bash
ig
```

or:

```bash
ig new
```

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" alt="Play video: Building Your First Ignite UI CLI App" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

## Create new project

First you will be prompted to enter a name for your application:



After selecting `Angular` as a framework, you will be prompted to choose the type of the project to be generated:

<img class="responsive-img" src="../../../images/general/ig-step-by-step-project-type-cli.png" alt="Step by step project type selection" />

Then you will be guided to choose one of the available project templates. You can create an empty project, a project with side navigation, or an [authentication project](auth-template.md) with a basic authentication module. Navigate through the available options using the arrow keys and press ENTER to confirm the selection:



The next step is to choose a theme for your application. Selecting the default option includes a pre-compiled CSS file (`igniteui-angular.css`) with the default Ignite UI for Angular theme in your project's `angular.json`. The custom option generates a color palette and theme configuration using the [Theming API](../../themes.md) in `app/styles.scss`.



After completing the above steps, the application structure is generated, a Git repository is initialized, and the project is committed. You will then be asked whether to complete the process or add a new view to your application:



## Add view

The Ignite UI CLI supports multiple component templates and scenario templates that can be added to a project. This mode can be activated either as a continuation of project creation or inside an existing project using the command below.

```bash
ig add
```

You will be provided with a [list of the available templates](component-templates.md#component-templates), grouped by category.



Use the arrow keys to navigate through the options and ENTER to select. For some templates, such as `Custom Grid`, you will be provided with a list of optional features that can be toggled with the SPACE key:



If you choose to add a scenario to your application, you will also get a list of the available [scenario templates](component-templates.md#scenario-templates):

<img class="responsive-img" src="../../../images/general/ig-step-by-step-scenario-templates.png" alt="Step by step scenario template selection" />

After adding a template, you will be asked whether to add more views or complete the process. On completion, any remaining package dependencies are installed and the application is served and opened in your default browser.

To add more Ignite UI for Angular views to a project later without the wizard, use the direct `add` command:

```bash
ig add [template] [name]
```
