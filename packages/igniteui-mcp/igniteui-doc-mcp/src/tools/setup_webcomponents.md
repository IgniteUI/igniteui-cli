# IgniteUI for Web Components — App Generation Instructions

Before you start: Call `list_components` or `igniteui_search_api` to identify which Ignite UI components you want to use.

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

---

## Create a New Project

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