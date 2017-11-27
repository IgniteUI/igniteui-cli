## Ignite UI CLI

<!-- Badges section here. -->
[![npm](https://img.shields.io/npm/v/ignite-ui-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/ignite-ui-cli)
[![Build Status](https://travis-ci.org/IgniteUI/ignite-ui-cli.svg?branch=master)](https://travis-ci.org/IgniteUI/ignite-ui-cli)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/ignite-ui-cli/badge.svg)](https://coveralls.io/github/IgniteUI/ignite-ui-cli)



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
* [Generating and serving quickstart projects](#generating-and-serving-quickstart-projects)
* [Generating Projects and adding components](#generating-projects-and-adding-components)
* [Note](#note)

## Installation

Install the npm package as a global module:

```bash
npm install -g ignite-ui-cli
```

## Usage
## Step by step
To get a guided experience through the available options, simply run:

```bash
ignite-ui
```

Upon creation, projects will be automatically served on port 3000 and can be accessed via http://localhost:3000/.

### List the available commands.

```bash
ignite-ui help
```
### Generate and serve quickstart projects
For a jump start and a sample overview of the Ignite UI controls, you can choose a "quickstart" to generate a project with predefined IgniteUI controls for each of the supported frameworks.

```bash
ignite-ui quickstart --framework=<framework>
```
### Generating projects and adding components

Create a new project passing name, framework and style theme.
```bash
ignite-ui new <project name> --framework=<framework> --theme=<theme>
```

Add a new component or template to the project passing component ID and choosing a name.

```bash
ignite-ui add <component/template> <component_name>
```

The ID matches either a component ("grid", "combo", "text-editor", etc) or a predefined template. Predefined templates are framework/project specific and can provide predefined views with either multiple components or fulfilling a specific use case like "form-validation", "master-detail" and so on.

### Build and run
```bash
ignite-ui build
ignite-ui start
```
## Contribution

### Run locally
1. Clone the repository
2. Install dependencies with `npm install`
3. Open in Visual Studio Code
    
    There is a predefined launch.config file for VS Code in the root folder, so you can use VS Code View/Debug window and choose one of the predefined actions. These include launching the step by step guide, quickstart project, create new project for a particular framework or add components.

4. Hit Start Debugging/F5


