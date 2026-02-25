# igniteui/igx-templates

Angular component definitions for the templates used by [IgniteUI CLI](../cli) and [igniteui/angular-schematics](../ng-schematics).

All template definitions can be found in the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli/component-templates).

## Overview

This package provides two categories of templates:

- **Project templates** – scaffold a complete Angular application (found under `igx-ts/projects/`).
- **Component templates** – add a single view with one or more Ignite UI for Angular components to an existing project (found under `igx-ts/<component>/` and `igx-ts/custom-templates/`).

The `igx-ts-legacy` folder mirrors the same structure but targets older Angular / ngModule-based projects.

---

## Directory structure

```
igx-templates/
├── IgniteUIForAngularTemplate.ts   # Base class for all component templates
├── igx-ts/
│   ├── projects/                   # Project templates
│   │   ├── _base/                  # Shared base project files (inherited by other projects)
│   │   ├── base/                   # "Base Project" – routing, no home page
│   │   ├── empty/                  # "Empty Project" – routing + home page
│   │   ├── side-nav/               # Side-navigation layout
│   │   └── side-nav-auth/          # Side-navigation layout with authentication
│   ├── <component>/                # One folder per Ignite UI component group
│   │   ├── index.ts                # Component descriptor (name, group, description)
│   │   └── <variant>/              # One folder per template variant
│   │       ├── index.ts            # Template descriptor
│   │       └── files/              # Template source files (with placeholder tokens)
│   ├── custom-templates/           # Multi-component scenario templates
│   │   └── <template>/
│   │       ├── index.ts
│   │       └── files/
│   └── groups.json                 # Display names / descriptions for component groups
└── igx-ts-legacy/                  # Same structure, targets older ngModule projects
```

---

## Template types

### Project templates

Each project template lives in `igx-ts/projects/<id>/` and exports a class that extends `BaseIgxProject` and implements `ProjectTemplate`.

| Property | Purpose |
|---|---|
| `id` | Unique identifier used with `ig new --template=<id>` |
| `name` | Human-readable name shown in the step-by-step guide |
| `description` | Short description shown during project selection |
| `templatePaths` | Array of folders whose contents are copied into the new project |
| `generateConfig()` | Returns the variable map used to replace placeholders in template files |

### Component templates

Each component template lives under `igx-ts/<component>/<variant>/` and exports a class that extends `IgniteUIForAngularTemplate`.

| Property | Purpose |
|---|---|
| `id` | Unique identifier used with `ig add <id> <name>` |
| `name` | Human-readable name shown during component selection |
| `description` | Short description |
| `components` | Names of the Ignite UI component(s) this template demonstrates |
| `controlGroup` | Group heading under which the template is listed (matches a key in `groups.json`) |
| `listInComponentTemplates` | `true` → appears in the standard component list |
| `listInCustomTemplates` | `true` → appears in the custom/scenario template list |
| `packages` | Additional npm packages installed alongside the template |
| `dependencies` | Angular module / standalone imports to inject into the project |

### Custom (scenario) templates

Custom templates work exactly like component templates but are placed in `igx-ts/custom-templates/` and typically set `listInCustomTemplates = true` and `listInComponentTemplates = false`. They often combine several components or represent a complete use-case view (e.g. a CRM grid, a login page).

---

## Template file placeholders

Files inside a `files/` folder can contain two kinds of tokens that are replaced at generation time.

### Content tokens – `<%= %>` … `%>`

Used inside file content to inject generated values:

| Token | Value |
|---|---|
| `<%=name%>` | Component name as entered by the user |
| `<%=ClassName%>` | PascalCase class name |
| `<%=filePrefix%>` | kebab-case file prefix |
| `<%=path%>` | Folder path inside `src/app/` |
| `<%=igxPackage%>` | Resolved Ignite UI for Angular package name |
| `<%=cliVersion%>` | Current CLI version |

Example usage in a component file:
```typescript
export class <%=ClassName%>Component { title = '<%=name%>'; }
```

### Path tokens – `__` … `__`

Used in **file and folder names** to make them dynamic:

| Token | Replaced with |
|---|---|
| `__path__` | Folder path derived from the component name |
| `__filePrefix__` | kebab-case file name |

Example: `src/app/__path__/__filePrefix__.component.ts` becomes `src/app/my-grid/my-grid.component.ts`.

---

## Adding a new component template

1. Create a folder: `igx-ts/<component>/<variant>/`
2. Add an `index.ts` that extends `IgniteUIForAngularTemplate`:

```typescript
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class MyNewTemplate extends IgniteUIForAngularTemplate {
    constructor() {
        super(__dirname);
        this.id = "my-template";
        this.projectType = "igx-ts";
        this.components = ["Grid"];
        this.controlGroup = "Grids & Lists";
        this.listInComponentTemplates = true;
        this.name = "My Template";
        this.description = "A short description";
        this.packages = ["igniteui-angular"];
    }
}
module.exports = new MyNewTemplate();
```

3. Create a `files/` subfolder with the Angular component files, using `<%= %>` tokens for dynamic content and `__path__` / `__filePrefix__` tokens in file names.
4. The template is automatically discovered at runtime – no registration step is required.