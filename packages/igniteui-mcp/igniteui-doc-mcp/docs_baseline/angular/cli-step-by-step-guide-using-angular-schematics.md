---
title: Step-by-Step Guide Using Ignite UI for Angular Schematics | Ignite UI for Angular | Infragistics
_description: Step-by-step guide to creating and scaffolding Angular projects using the Ignite UI for Angular Schematics collection. Covers project type selection, template choice, theming, and adding component views.
_keywords: ignite ui for angular, angular schematics, step-by-step, scaffolding, infragistics
last_updated: "2025-04-06"
_tocName: Step by Step guide using Ignite UI for Angular Schematics
---

<!-- schema: Article, HowTo -->

# Step-by-Step Guide Using Ignite UI for Angular Schematics

The Ignite UI for Angular Schematics step-by-step mode is an interactive wizard built into the `@igniteui/angular-schematics` collection. It guides you through project bootstrapping, template selection, and theming, then lets you add component views before finishing. The wizard can be activated for both new project creation and for adding views to an existing project previously created with the [Ignite UI Angular Schematics](getting-started-with-angular-schematics.md).

The step-by-step mode does not support non-interactive or scripted use - for that, use the direct `ng new` and `ng g` commands with explicit arguments. The wizard relies on `Inquirer.js`; see [supported terminals](https://github.com/SBoudrias/Inquirer.js#support-os-terminals) for compatibility.

To activate the guided wizard, run:

```cmd
ng new --collection="@igniteui/angular-schematics"
```

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" alt="Play video: Building Your First Ignite UI CLI App" style="vertical-align: middle;" />
    </a>
</div>

## Create a New Project

The wizard guides you through four configuration steps before scaffolding the project.

### Step 1: Choose a bootstrapping type

The first prompt asks whether to bootstrap the application using standalone components or NgModules.

<img class="responsive-img" src="../../../images/general/ig-step-by-step-project-type.png" alt="Step by step prompt: standalone components or NgModules" />

Standalone components are the Angular 17+ default and are recommended for new projects. Choose NgModules only if you are integrating with an existing NgModule-based codebase.

### Step 2: Enter a project name

Enter a name for the new application. The project is created in a directory with the same name.

<img class="responsive-img" src="../../../images/general/ig-step-by-step-new-project-name.png" alt="Step by step prompt: enter project name" />

### Step 3: Choose a project template

Navigate the available project templates using the arrow keys and press ENTER to confirm. Three templates are available:

- **empty** - a project structure with routing and a home page, no pre-built navigation
- **side-nav** - a project structure with a pre-built side navigation drawer
- **auth** - a side navigation project extended with a basic authentication module (see [Authentication Project Template](auth-template.md) for details)

<img class="responsive-img" src="../../../images/general/ig-step-by-step-new-project-template.png" alt="Step by step prompt: choose project template" />

### Step 4: Choose a theme

Two theme options are available:

- **default** - includes a pre-compiled CSS file (`igniteui-angular.css`) with the default Ignite UI for Angular Material-based theme in `angular.json`
- **custom** - generates a color palette and theme configuration using the [Theming API](../../themes.md) in `app/styles.scss`, ready for customization

<img class="responsive-img" src="../../../images/general/ig-step-by-step-new-project-theme.png" alt="Step by step prompt: choose default or custom theme" />

After completing these four steps, the wizard generates the project structure, then prompts you to [configure AI coding assistants](#ai-assistant-integration). Once AI configuration is complete, a Git repository is initialized and the initial state is committed. The wizard then asks whether to finish or continue by adding a component view.

<img class="responsive-img" src="../../../images/general/ig-step-by-step-new-project-action.png" alt="Step by step prompt: finish or add a view" />

## Add Component Views

The Ignite UI for Angular Schematics collection provides individual component templates and more elaborate scenario templates. This mode is available both as a continuation of project creation and as a standalone operation in an existing project.

To activate the component wizard in an existing project, run the `component` schematic (alias: `c`):

```bash
ng g @igniteui/angular-schematics:component
```

The wizard displays the available [component templates](component-templates.md#component-templates), grouped by category. Navigate with the arrow keys and press ENTER to select.

<img class="responsive-img" src="../../../images/general/ig-step-by-step-template-group.png" alt="Step by step prompt: template category selection" />

Some templates - such as the Custom Grid - expose a list of optional features. Use the SPACE key to toggle individual options before confirming with ENTER.

<img class="responsive-img" src="../../../images/general/ig-step-by-step-component-features.png" alt="Step by step prompt: optional component feature toggles" />

Scenario templates are also available and provide more complete application views that combine multiple components. Select "Scenarios" in the category list to browse them.

<img class="responsive-img" src="../../../images/general/ig-step-by-step-scenario-templates.png" alt="Step by step prompt: scenario template selection" />

After adding a template, the wizard asks whether to add more views or complete the process. On completion, any remaining package dependencies are installed and the application is served and opened in your default browser.

To add more Ignite UI for Angular views to a project later without the wizard, use the direct schematic command:

```cmd
ng g @igniteui/angular-schematics:c [template] [name]
```

## AI Assistant Integration

After choosing your bootstrapping type, project name, template, and theme, the wizard prompts you to configure AI coding assistant integration. This step runs the same logic as `ng generate @igniteui/angular-schematics:ai-config` but is embedded in the project creation flow.

### Choose coding assistants

You will be prompted to select which coding assistants to configure MCP servers for. Use the SPACE key to toggle selections and ENTER to confirm:



- **Generic** (Claude Code, VS Code, and others) - writes `.mcp.json`
- **VS Code** (GitHub Copilot) - writes `.vscode/mcp.json`
- **Cursor** - writes `.cursor/mcp.json`
- **Gemini** - writes `.gemini/settings.json`
- **JetBrains Junie** - writes `.junie/mcp/mcp.json`
- **None** - skips MCP configuration

The default selection is **Generic**. Selecting **None** skips MCP server configuration entirely.

### Choose AI agents

Next, you will be prompted to select which AI agents to configure skill files and instructions for:



- **Generic** - `.agents/skills/` and `AGENTS.md`
- **Claude** - `.claude/skills/` and `.claude/CLAUDE.md`
- **Copilot** - `.github/skills/` and `.github/copilot-instructions.md`
- **Cursor** - `.cursor/skills/` and `.cursor/rules/cursor.mdc`
- **Codex** - `.codex/skills/` and `.codex/instructions.md`
- **Windsurf** - `.windsurf/skills/` and `.windsurf/rules/guidelines.md`
- **Gemini** - `.gemini/skills/` and `.gemini/GEMINI.md`
- **Junie** - `.junie/skills/` and `.junie/guidelines.md`
- **None** - skips skill files and instructions

The default selections are **Generic** and **Claude**. Selecting **None** skips agent configuration entirely.

When run via the Angular schematic, an additional `angular-cli` MCP server entry is included automatically alongside the Ignite UI servers.

> [!NOTE]
> To skip AI configuration prompts entirely during non-interactive project creation, pass `--assistants none --agents none` to `ng new`. To re-run AI configuration later, use `ng generate @igniteui/angular-schematics:ai-config` from the project root.

For MCP client configuration and a full description of available tools, see [Ignite UI CLI MCP](../../ai/cli-mcp.md).
