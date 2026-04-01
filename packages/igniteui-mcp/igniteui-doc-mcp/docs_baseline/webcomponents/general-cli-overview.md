---
title: Web Components CLI | Data Visualization Tools and Tables | Infragistics
_description: The Ignite UI for Web Components toolset has a Web Components CLI to help you boost productivity and get your project started quickly. Create a Ignite UI for Web Components application now!
_keywords: Web Components cli, command line interface, Ignite UI for Web Components, Infragistics
mentionedTypes: []
_tocName: Ignite UI CLI
---

# Ignite UI CLI for Web Components

Our CLI tools provide project templates pre-configured for the Ignite UI for Web Components toolset that help you get your next application off the ground in record time. The <!-- WebComponents --><a href="https://github.com/IgniteUI/igniteui-cli/blob/master/README.md#generate-ignite-ui-for-web-components-project" target="_blank"><!-- end: WebComponents -->Ignite UI CLI</a> is a stand-alone command-line tool for creating and scaffolding your applications for a variety of different frameworks and provides a substantial productivity boost for developers.

## Getting Started

To get started, install the CLI:

```cmd
npm install -g igniteui-cli
```

The above install command will make the Ignite UI CLI available for creation, scaffolding, and running of your Ignite UI for Web Components application.

## Create a New Project

To create an application that is configured to use the Ignite UI for Web Components controls using the Ignite UI CLI, you can use the following template in your command line:

<!-- WebComponents -->

```cmd
ig new "[name_of_project]" --framework=[target_framework]
```

Using the above template, if you wanted to create a **Web Components** application named "My Project" you could write the following command:

```cmd
ig new "My Project" --framework=webcomponents
```

<!-- end: WebComponents -->

## Adding Components

Once you have created a project, you can then add additional component templates using **ig add** at any point. Running this command without any parameters will guide you through the available templates by using a keyboard navigation CLI to add the control of your choosing.

```cmd
ig add
```

Alternatively, you can simply run the **ig list** command to get a full list of supported templates in the current project you have created.

```cmd
ig list
```

After running **ig list** and you find the component template you would like to add, you can do so quickly by following this template in your command line:

```cmd
ig add [component_template] [component_name]
```

The "component_template" above will generally match an Ignite UI for Web Components component ("grid", "category-chart", "linear-gauge", etc.).

For example, if you wanted to add a data grid templated component named "MyGridComponent" to your application, you could run the following:

```cmd
ig add grid MyGridComponent
```

> NOTE: Your routing file will be updated with the path to the page with the new component - in that case `/my-grid-component`. You can use it to manually navigate to the newly generated page.

<!-- WebComponents -->

Currently the CLI can be used with the following Web Components:

| Name | Component Template |
| ------------------|---------------------|
| Avatar | avatar  |
| Card | card |
| Badge | badge |
| Button | button |
| Checkbox | checkbox |
| Form | form |
| Icon | icon |
| Icon Button | icon-button |
| Input | input |
| Radio Group | radio-group |
| Switch | switch |
| Calendar | calendar |
| List | list |
| Navbar | navbar |
| Ripple | ripple |
| Pie Chart | pie-chart |
| Dock Manager | dock-manager |

<!-- end: WebComponents -->

## Build and Run the Application

In order to build and run the Ignite UI for Web Components application, you can call the **ig build** and **ig run** commands:

```cmd
ig build
ig run
```

## Ignite UI CLI Commands

A full list of the available Ignite UI CLI commands and their usage (like passing flags, etc.), can be found at the [Ignite UI CLI wiki pages](https://github.com/IgniteUI/igniteui-cli/wiki):

| Command | Alias | Description |
| --- | --- | --- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)  | | Builds the application, starts a web server and opens the application in the default browser.
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | Builds the application into an output directory
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | Generates a new custom template for supported frameworks and project types
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | Lists the available commands and provides a brief description of what they do.
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Performs read and write operation on the Ignite UI CLI configuration settings.
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | Searches the Infragistics knowledge base for information about a given search term
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  Lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones.
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | Executes the tests for the current project.
| [ig version](https://github.com/IgniteUI/igniteui-cli/wiki) | -v | Shows Ignite UI CLI version installed locally, or globally if local is missing |
