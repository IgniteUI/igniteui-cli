---
title: Getting Started with Ignite UI CLI | Ignite UI for Angular | Infragistics
_description: The Step-by-Step mode contains guided experience through the Ignite UI CLI options.
_keywords: angular cli, ignite ui for angular, infragistics
_tocName: Getting Started with Ignite UI CLI
---

## Getting Started with Ignite UI CLI

If you are creating a new Angular application from scratch, we recommend using the approach described bellow as it will provide you with an user-friendly guided experience. The guide will lead you through all the setup options and your project will be scaffolded in a blink of an eye.

To get started install [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) globally:

```cmd
npm install -g igniteui-cli 
```

If you are using `yarn` package manager:

```cmd
yarn global add igniteui-cli
```

### Using guided experience

The shortest and easiest way to bootstrap an application is to use the [step by step guide using Ignite UI CLI](step-by-step-guide-using-cli.md).

To activate the guide using the Ignite UI CLI run:

```cmd
ig
```

or

```cmd
ig new
```

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" alt="Play video" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

## Create a new project

When using [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) you need to provide `angular` as framework and `igx-ts` as your project type argument to the `new` command:

```cmd
ig new newAngularProject --framework=angular --type=igx-ts --template=side-nav
```

>[!NOTE]
> As of `v13.1.0`, the `igx-ts` project type will generate a project that uses standalone components by default. If you prefer to use the module-based bootstrapping instead you can set the `type` to be `igx-ts-legacy`.

The new application is created in a directory with the same name (`newAngularProject`). There are several project templates from which you can choose when creating an Ignite UI for Angular application:

| template id   | template description |
| ---           | ---                  |
| empty         | Project structure with routing and a home page |
| side-nav      | Project structure with side navigation drawer |
| side-nav-auth | Side navigation project extended with user authentication module. <br> [Angular Authentication Project Template](auth-template.md) topic covers the project template in detail. |

Additionally, you can specify **arguments** to control the theme or skip packages install:

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
    Framework to setup project for. The supported frameworks are jQuery, Angular and React.
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
    When this option is used, the automatic repository initialization with Git will be skipped. If the option is omitted, then the global skip-git configuration property is used.
  </p>
</details>

<details>
  <summary><u>skip-install</u></summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    The <code>new</code> command will install package dependencies on project creation. Passing this flag will skip the initial installation.
  </p>
</details>

<details>
  <summary markdown='span'><u>template</u></summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    Use this option if there are different project templates for a specific framework type.
    Currently this option is available only for Ignite UI for Angular igx-ts project types.</p>
</details>

## Add template

To add one of the [available Ignite UI Angular templates](component-templates.md) you need to provide template ID and a name for the new component or use the [Step-by-Step Guide](step-by-step-guide-using-cli.md#add-view). Their usage is supported only inside existing projects created with the Ignite UI CLI, Angular Schematics or where Ignite UI for Angular has been [installed using `ng add`](../getting-started.md#installing-ignite-ui-for-angular).

We use the `ig add [template] [name]` command:

```cmd
ig add grid newGrid
```

To get a list of all the [available templates](component-templates.md) you can also execute the [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) command in your project directory.

Additionally, you can specify the module in which the component will be registered or skip the auto-generation of app navigation route:

<details>
  <summary><u>module</u></summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    <i>note: module argument is applicable only in Angular projects.</i>
  </p>
  <p>
    Path to the module.ts file, relative to the /src/app/ folder, for the module where the new component should be registered:
  </p>
  <code>ig add combo newCombo --module=myModule/myModule.module.ts</code>
</details>

<details>
  <summary><u>skip-route</u></summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    Don't auto-generate an app navigation route for the new component
  </p>
</details>

## Run the application

The `start` command will build the application, start a web server and open it in your default browser:

```cmd
ig start
```

## Ignite UI CLI Commands

A full list of the available Ignite UI CLI commands and their usage (like passing flags, etc.), can be found at the [Ignite UI CLI wiki pages](https://github.com/IgniteUI/igniteui-cli/wiki):

| Command | Alias | Description |
| --- | --- | --- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)  | | Builds the application, starts a web server and opens the application in the default browser. |
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | Builds the application into an output directory |
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | Generates a new custom template for supported frameworks and project types |
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | Lists the available commands and provides a brief description of what they do. |
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Performs read and write operation on the Ignite UI CLI configuration settings. |
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | Searches the Infragistics knowledge base for information about a given search term |
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  Lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones. |
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | Executes the tests for the current project. |
| ig version | -v | Shows Ignite UI CLI version installed locally, or globally if local is missing |
