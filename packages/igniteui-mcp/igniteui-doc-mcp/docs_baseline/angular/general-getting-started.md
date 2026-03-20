---
title: Getting Started | Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular is a complete set of native Angular UI components, which allow you to build fast, feature-rich and Material designed applications!
_keywords: ignite ui for angular, getting started, angular components
_tocName: Getting started
---

# Getting started with Ignite UI for Angular

[`Ignite UI for Angular`](https://github.com/IgniteUI/igniteui-angular) is a complete set of Material-based UI Widgets, Components & Figma UI kits and supporting directives for Angular by Infragistics. It enables developers to build modern high-performance HTML5 & JavaScript apps for desktop browsers, mobile experiences and progressive web apps (PWA’s) targeting Google's Angular framework.

Ignite UI for Angular is offered under a dual-license model, which allows for both commercial and permissive open-source use, depending on the components, modules, directives, and services being used. For more details, refer to the [Ignite UI Licensing](./ignite-ui-licensing.md) and [Open Source vs Premium](./open-source-vs-premium.md) topics.

## Prerequisites

1. Install NodeJS.
2. Install Visual Studio Code.

<div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/nodejs.svg" alt="NodeJS"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/vs-code.svg" alt="Visual Studio Code"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>
<div class="divider--half"></div>

## Installing Ignite UI for Angular

Ignite UI for Angular can be installed either with the Angular CLI or with the Ignite UI CLI.

### Quick Start with the Angular CLI

The Angular CLI provides support for external libraries to your project through the `ng add` command, which installs a library's `npm` packages to your workspace and configures the project in the current working directory to use that library.

To create an Angular application with the Angular CLI, open your preferred terminal and type in the following command:

```cmd
ng new <project name> --style=scss
```

You can specify the file extension or preprocessor to use for your application's style files with the `--style` option. We recommend using SCSS since our components' styles are based on the [Ignite UI for Angular theming library](../themes.md). Later on, when you install the Ignite UI for Angular package, your application will be configured to use the default styling theme which can be then easily customized either for all or for specific component instances.

Thereafter you can install the Ignite UI for Angular package, along with all of its dependencies, font imports and styles references to your project, by running the following command:

```cmd
ng add igniteui-angular
```

>[!NOTE]
> You don't need to install the `igniteui-theming` package explicitly, it comes with Ignite UI for Angular.

>[!NOTE]
> Keep in mind that with the command above you will install the Trial version of any Ignite UI for Angular component under commercial license (such as `igxGrid`).

#### Additional packages

In addition, you may want to include a number of Ignite UI components to your project, such as:

- Grid Lite - Open-Source

The [Grid Lite component](../grid-lite/overview.md) is designed to provide a minimal set of features under MIT license that should serve a wide range of projects that need essential data-display functionality with minimal overhead, and the performance users expect. It is designed for developers who need fast, lightweight data presentation without the complexity of an enterprise grid. Its API resembles that of the commercial `IgxGrid` ensuring a simple and straightforward upgrade path.

```cmd
ng add igniteui-grid-lite
```

- Dock Manager - Premium

The Ignite UI Dock Manager component provides means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving and hiding panes.

```cmd
ng add igniteui-dockmanager
```

<!-- TODO: Add specific grid-lite -> igx-grid upgrade info here once available -->

### Upgrading from Trial to Licensed

If you want to start using the **Licensed Ignite UI for Angular package** it is strongly recommended to follow the [Upgrading packages guide with Schematics and Ignite UI CLI](ignite-ui-licensing.md#upgrading-packages-using-our-angular-schematics-or-ignite-ui-cli).

Following is a quick overview of the steps that you need to perform in order to start using the **Licensed version of Ignite UI for Angular**. Depending on your project setup, either run the following schematic in your project:

```bash
ng g @igniteui/angular-schematics:upgrade-packages
```

or if using `igniteui-cli`:

```bash
ig upgrade-packages
```

The schematic will take care of switching the package dependencies of the project and update source references.
[You'll be asked to login to our npm registry if not already setup](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide).

#### Login to our npm registry with a new setup

The approach described above covers only the scenarios where Ignite UI for Angular Trial package is already installed. If you are performing a new setup of a project or just starting with using Ignite UI for Angular, follow the guidance below.

It's very important to [perform a correct setup of the private npm feed environment](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide), by:

- Ensuring a valid setup of the private registry.
- Log in to our private feed using npm by specifying a non-trial user account and password.

Details on the entire process [could be found here](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide).

### Quick Start with Angular Schematics & Ignite UI CLI

To create an application from scratch and configure it to use the Ignite UI for Angular components you can use either the Ignite UI for Angular Schematics or the Ignite UI CLI. The first step is to install the respective package globally as follows:

```cmd
npm i -g @igniteui/angular-schematics
```

or:

```cmd
npm install -g igniteui-cli
```

Our [guided experience using the Ignite UI CLI](cli/step-by-step-guide-using-cli.md) or [Ignite UI for Angular Schematics](cli/step-by-step-guide-using-angular-schematics.md) is the easiest way to bootstrap a configured application.

To activate the guide using the Ignite UI for Angular Schematics run:

```cmd
ng new --collection="@igniteui/angular-schematics"
```

or run the following command in case you are using the CLI tool:

```cmd
ig
```

>[!NOTE]
> At some point during the steps execution [you'll be asked to login to our npm registry if not already setup](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide). This is part of the Trial to License account setup and is applicable if you plan to use any of the components under [commercial license](./open-source-vs-premium.md#comparison-table-for-all-components).

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" alt="Play Video" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

Learn more about our [Angular Schematics & Ignite UI CLI](cli-overview.md).

## Using Ignite UI for Angular

We are now ready to start using Ignite UI for Angular components!

### Add components automatically

#### Import modules and use components

Now we can add new components to our application using either the `component` schematic or the `add` command:

```cmd
ng g @igniteui/angular-schematics:component
```

```cmd
ig add
```

> [!NOTE]
> Please note that the [`ig add`](https://github.com/IgniteUI/igniteui-cli/wiki/add) command can be used if the application was created by using the Ignite UI CLI or
> if it was created by using the Angular CLI with Ignite UI for Angular added to it by using the **ng add igniteui-angular** command.

After going through the options of the menu and choosing which component we want to add to our application, we will notice that we have a brand new component in our project, which we can use anywhere on our page!

#### Run application

Now let’s run our application to see our awesome page!

```cmd
npm start
```

### Add components manually

As of Angular 19, standalone components are the default way to build Angular apps, removing the need for `NgModules` and simplifying the process of adding components significantly. So let's use this to add an [**igxGrid**](../grid/grid.md) component to our app.

Before we start though, please note that some components have animations that require a provider as part of the `bootstrapApplication` call.

```typescript
// main.ts

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

```typescript
// app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

const providers: Provider = [
  importProvidersFrom(BrowserModule),
  provideAnimations()
];

export const appConfig: ApplicationConfig = { providers };
```

#### Use components

We are now ready to use the igxGrid in our markup! Let's go ahead and define it in our **app.component.html** file:

```html
<!-- app.component.html -->

<div style="text-align:center; margin-bottom: 20px;">
  <h1>
    Welcome to {{title}}!
  </h1>
</div>

<div style="text-align: center;">
  <igx-grid [data]="localData" width="600px" height="400px" style="margin: auto" [allowFiltering]="true">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
  </igx-grid>
</div>
```

We will also define the data of the grid and the title of our application that are referenced from the **app.component.ts**. As we are using standalone components we simply have to add the `IgxGridComponent` class to our app's imports, alongside any other components used in the template. In our example, as we are defining columns, we also have to add the `IgxColumnComponent` to the import array.

```typescript
// app.component.ts

import { Component } from '@angular/core';
import { IgxGridComponent, IgxColumnComponent } from 'igniteui-angular/grids/grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [IgxGridComponent, IgxColumnComponent]
})
export class AppComponent {
  localData = [
    { Name:'John', Age: 29 },
    { Name:'Alice', Age: 27 },
    { Name:'Jessica', Age: 31 },
  ];

  title = 'My Ignite UI project';
}
```
<!-- TODO: Add this with the introduction of the upgrade process
### Upgrading from Grid Lite to Commercial Grid

`Grid Lite` is a great way to start with a free, open-source grid. However, as your application grows, you might need advanced features like Excel Export, Advanced Filtering, Master-Detail or the various grid flavors like `Tree Grid` or `Pivot Grid`. This means upgrading to commercial Ignite UI for Angular Grid component. We made this process simple and straightforward:

- add steps

Since the API is compatible, your grid configuration in the template usually doesn't need any changes!-->

#### Run application

Finally, we can run our new application by using one of the following commands:

- If the application was created by using the Ignite UI CLI:

```cmd
ig start
```

- If the application was created by using the Angular CLI:

```cmd
ng serve
```

The final result should look something like this:


<img class="responsive-img" src="../../images/general/igniteui-project.png" alt="Ignite UI Project" />


## API References

In this article we learned how to create our own Ignite UI for Angular application from scratch by taking advantage of the fully-automated process of Ignite UI for Angular projects creation in the Ignite UI CLI. We also learned how to add Ignite UI for Angular to an existing application by using the Angular CLI. We designed our own page by including the [`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) to it, which itself offers some awesome features, which you can take a look at by referring to the navigation menu.

- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)

## AI-Assisted Development

Ignite UI for Angular ships with **Agent Skills** — structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, JetBrains AI, etc.) how to work with the library. Skills cover components, data grids, grid data operations, and theming.

Learn more in the [Ignite UI for Angular Skills](../ai/skills.md) topic.

## Additional Resources

<div class="divider--half"></div>

- [Ignite UI for Angular Skills](../ai/skills.md)
- [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli)
- [Ignite UI CLI Commands](https://github.com/IgniteUI/igniteui-cli/wiki#available-commands)
- [Grid overview](../grid/grid.md)
- [Grid Lite overview](../grid-lite/overview.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
