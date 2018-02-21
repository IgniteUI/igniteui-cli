
## Ignite UI CLI

<!-- Badges section here. -->
[![Build Status](https://travis-ci.org/IgniteUI/igniteui-cli.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-cli)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/igniteui-cli/badge.svg)](https://coveralls.io/github/IgniteUI/igniteui-cli)
[![npm version](https://badge.fury.io/js/igniteui-cli.svg)](https://badge.fury.io/js/igniteui-cli)


Quickly create projects including [Ignite UI](https://www.igniteui.com) controls for a variety of frameworks.

## Overview
### Features:
- Create project structure
- Add views with Ignite UI components (e.g. Combo, Grid or Chart)
- Add scenario based templates with multiple components (e.g. a dashboard)
- Build and install npm packages
- Select a theme, support for custom themes coming soon
- Step by step guide

### Supported frameworks
 * jQuery
 * Angular
 * React

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Step by step](#step-by-step)
  * [Generating Projects and adding components](#generating-projects-and-adding-components)
* [Contribution](#contribution)

## Installation

Install the npm package as a global module:

```bash
npm install -g igniteui-cli
```

## Usage
The main entry point is `igniteui` and is also aliased as `ig`. Both can be used interchangeably to call available commands.

### Step by step
To get a guided experience through the available options, simply run:

```bash
ig
```

Upon creation, projects will be automatically served on port 4200 for Angular project and can be accessed via http://localhost:4200/. **NOTE**: Port may vary for different project types. `ig start` will indicate what port to open the application under in the console.

### List the available commands.

```bash
ig help
```
### Generate and serve quickstart projects
For a jump start and a sample overview of the Ignite UI controls, you can choose a "quickstart" to generate a project with predefined Ignite UI controls for each of the supported frameworks.

```bash
ig quickstart --framework=<framework>
```
### Generating projects and adding components

Create a new project passing name, framework and style theme.
```bash
ig new <project name> --framework=<framework> --type=<proj-type> --theme=<theme>
```
Parameters besides name are optional. Framework default to "jquery", project type defaults to the first available in the framework and theme to the first available for the project.

Add a new component or template to the project passing component ID and choosing a name.

```bash
ig add <component/template> <component_name>
```

The ID matches either a component ("grid", "combo", "text-editor", etc) or a predefined template. Predefined templates are framework/project specific and can provide predefined views with either multiple components or fulfilling a specific use case like "form-validation", "master-detail" and so on.

### Build and run
```bash
ig build
ig start
```
## Contribution

### Run locally
1. Clone the repository
2. Install dependencies with `npm install`
3. Open in Visual Studio Code
    
    There is a predefined launch.config file for VS Code in the root folder, so you can use VS Code View/Debug window and choose one of the predefined actions. These include launching the step by step guide, quickstart project, create new project for a particular framework or add components.

4. Hit Start Debugging/F5


