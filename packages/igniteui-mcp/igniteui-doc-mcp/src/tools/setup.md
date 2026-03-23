# IgniteUI — App Generation Instructions

Before you start: Call `igniteui_list_components` or `igniteui_search_api` to identify which Ignite UI components you want to use.

---

## Prerequisites

- Node.js (LTS), npm, Git installed
- Install the CLI once globally:

```bash
npm install -g igniteui-cli
```

---

## Template Selection Rule

> **Start with `base` unless routing between multiple views is required.**  
> A single-view implementation does not need a side-nav shell. Only use `side-nav` when navigating between multiple distinct views is genuinely required.

| Scenario | Template |
|---|---|
| Single view / one component | `base` |
| Multiple routed views | `side-nav` |
| Multiple views + login/auth | `side-nav-auth` *(Angular only)* |

---

## Angular

**Option A — Ignite UI CLI:**

```bash
ig new <ProjectName> --framework=angular --type=igx-ts --template=<template_id>
cd <ProjectName>
ig start
```

**Option B — Angular Schematics** (if the user already has an Angular CLI project or prefers `ng`-native tooling):

```bash
ng new --collection="@igniteui/angular-schematics"
```

Or to add Ignite UI to an existing Angular project:

```bash
ng add igniteui-angular
```

**Examples:**
```bash
# Single view
ig new MyApp --framework=angular --type=igx-ts --template=base

# Multi-view with navigation
ig new MyApp --framework=angular --type=igx-ts --template=side-nav
```

---

## React

```bash
ig new "<ProjectName>" --framework=react --type=igr-ts --template=base
cd <ProjectName>
ig start
```

**Example:**
```bash
ig new "My React App" --framework=react --type=igr-ts --template=base
```

> Requires Ignite UI CLI v13+. Verify with `ig version` before scaffolding.  
> Generated projects use **Vite** as the build tool.

---

## Web Components

```bash
ig new "<ProjectName>" --framework=webcomponents --type=igc-ts --template=base
cd <ProjectName>
ig start
```

**Example:**
```bash
ig new "My WC App" --framework=webcomponents --type=igc-ts --template=base
```

---

## Framework → Flag Mapping

| Framework | `--framework` | `--type` |
|---|---|---|
| Angular | `angular` | `igx-ts` |
| React | `react` | `igr-ts` |
| Web Components | `webcomponents` |`igc-ts`|

---

## Useful Flags

| Flag | Description |
|---|---|
| `--skip-git` | Skip git repository initialization |
| `--skip-install` | Skip npm package installation (useful in CI) |

*For theming use igniteui-theming MCP*

---

## What's Next

Once the project is running:
1. Call `igniteui_list_components` or `igniteui_search_docs` to find the component you want to add.
2. Call `igniteui_get_doc` with the component name to get full usage instructions.
3. Call `igniteui_get_api_reference` or `igniteui_search_api` to look up properties, methods, and events.
4. Apply theming via the **igniteui-theming MCP** before or after adding components.

---
