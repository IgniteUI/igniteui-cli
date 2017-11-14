## Ignite UI CLI
### Creating projects for variety of frameworks and generating/adding components to these projects. 
<!-- Badges section here. -->
[![Build Status](https://img.shields.io/travis/IgniteUI/ignite-ui-cli/master.svg?label=travis)](travis-badge-url)
[![npm](https://img.shields.io/npm/v/xxx/npm.svg)](npm-badge-url)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/ignite-ui-cli/badge.svg)](https://coveralls.io/github/IgniteUI/ignite-ui-cli)

## Supported frameworks
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

Clone or download the repository.

```bash
npm install -g ignite-ui-cli
```

## Usage
### Run locally
There is a predefined launch.config file for VS Code in the root folder, so you can use VS Code View/Debug window and choose one of the predefined actions. 

These include:
* Launch the wizard which opens a console and guides you to choose from the predefined options in Ignite UI CLI.
* Launch new quickstart project, which basically creates and serves a project containing Ignite UI components, so you can get a quick preview.
* Create a new "empty" project for a particular framework.
* Add components to the current project.

###List the available commands.

```bash
ignite-ui help
```

### Generating and serving quickstart projects
For a jump start and a sample overview of the Ignite UI controls, you can choose a "quickstart" to generate a project with predefined IgniteUI controls for each of the supported frameworks.

You can either use the Ignite UI CLI interface where you will be prompted to choose your project OR add new quickstart project via the command line. 

```bash
ignite-ui quickstart --framework=<framework>
```

* Ignite UI CLI uses lite-server to serve quickstart projects. 
* Upton creation, projects will be automatically served on port 3000 and can be accessed via http://localhost:3000/.

### Generating projects and adding components
Either use the Ignite UI CLI interface to choose from the available projects, components, styles, etc. OR add a new project and/or add new components via the command line.  

Add new project passing name, framework and style theme.
```bash
ignite-ui new <project name> --framework=<framework> --theme=<theme>
```

Add new component to the project passing component type and name.

```bash
ignite-ui add <component> <component_name>
```

Add new template. The template matches either a component ("grid", "combo", "text-editor", etc) or a predefined template. Predefined templates are framework/project specific and can provide predefined views with either multiple components or fulfilling a specific use case like "form-validation", "master-detail" and so on.

```bash
ignite-ui add <template> <template_name>
```

* Ignite UI CLI uses webpack for serving Angular and React projects.
* Upton creation, projects will be automatically served on port 3000 and can be accessed via http://localhost:3000/.

## Note
If you wish to collaborate, check out Ignite UI CLI [issue list](https://github.com/IgniteUI/ignite-ui-cli/issues).