---
title: Getting Started with Ignite UI for Angular Schematics | Ignite UI for Angular | Infragistics
_description: Install the Ignite UI for Angular Schematics collection and use it to scaffold Angular projects, add component views, and run a development server within the native Angular CLI workflow.
_keywords: ignite ui for angular, angular schematics, angular cli, scaffolding, getting started, infragistics
last_updated: "2025-04-08"
_tocName: Getting Started with Ignite UI for Angular Schematics
---

<!-- schema: Article, HowTo -->

# Getting Started with Ignite UI for Angular Schematics

The Ignite UI for Angular Schematics collection is a set of Angular CLI schematics for scaffolding Angular projects and component views pre-configured for Ignite UI for Angular. It integrates into the native Angular CLI workflow - use it with `ng new` for project creation and `ng g` for component scaffolding, without installing a separate global tool. The collection is distributed as the `@igniteui/angular-schematics` package and is added automatically when you run `ng add igniteui-angular` on an existing Angular project.

The Schematics collection does not include an MCP server for AI assistant integration - for that, install the [Ignite UI CLI](getting-started-with-cli.md) alongside your Angular CLI project. The collection is specific to Angular; React, Web Components, and Blazor equivalents are covered in their respective framework documentation. Neither tool is required to use Ignite UI for Angular - the library can be installed and configured manually as described in the [Getting Started guide](../getting-started.md).

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
