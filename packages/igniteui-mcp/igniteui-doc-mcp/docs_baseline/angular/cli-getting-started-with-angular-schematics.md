---
title: Getting Started with Ignite UI for Angular Schematics | Ignite UI for Angular | Infragistics
_description: The Step-by-Step mode contains guided experience through the Ignite UI CLI options.
_keywords: angular cli, ignite ui for angular, infragistics
_tocName: Getting Started with Ignite UI for Angular Schematics
---

## Getting Started with Ignite UI for Angular Schematics

To get started install [Ignite UI for Angular Schematics](https://github.com/IgniteUI/igniteui-cli/tree/master/packages/ng-schematics) globally:

```cmd
npm i -g @igniteui/angular-schematics
```

The above install will make the schematics available to use a collection parameter for the `ng  new` command.

If you are using `yarn` package manager:

```cmd
yarn global add @igniteui/angular-schematics
```

### Using guided experience

The shortest and easiest way to bootstrap an application is to use the [step by step guide using Ignite UI for Angular Schematics](step-by-step-guide-using-angular-schematics.md).

To activate the guide using the Ignite UI for Angular Schematics run:

```cmd
ng new --collection="@igniteui/angular-schematics"
```

## Create a new project

To create an application that is configured to use the Ignite UI for Angular controls, run the `ng new` command providing `@igniteui/angular-schematics` to the collection option.

```cmd
ng new newAngularProject --collection="@igniteui/angular-schematics" --template=side-nav
```

Additionally, by setting the `type` of the project, like so `--type=igx-ts-legacy`, you can specify that you prefer your project to be generated using module based bootstrapping. Not specifying it will default to a project that uses standalone components.

If you already have an Angular project, created without providing the `@igniteui/angular-schematics` collection as described above, you can add the Ignite UI for Angular product, using the following command:

```cmd
ng add igniteui-angular
```

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

To add one of the [available Ignite UI Angular templates](component-templates.md) you need to provide template ID and a name for the new component or use the [Step-by-Step Guide](step-by-step-guide-using-cli.md#add-view). Their usage is supported only inside existing projects created with the Angular Schematics, Ignite UI CLI or where Ignite UI for Angular has been [installed using `ng add`](../getting-started.md#installing-ignite-ui-for-angular).

With Schematics, use `ng generate` with the Ignite UI for Angular collection and `component [template] [name]`:

```cmd
ng g @igniteui/angular-schematics:component grid newGrid
```

List of all the [available templates](component-templates.md).

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
  <code>ng g @igniteui/angular-schematics:component combo newCombo --module=myModule/myModule.module.ts</code>
  <br>
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

The `start` schematic will build the application, start a web server and open it in your default browser.

```cmd
ng g @igniteui/angular-schematics:start
```
