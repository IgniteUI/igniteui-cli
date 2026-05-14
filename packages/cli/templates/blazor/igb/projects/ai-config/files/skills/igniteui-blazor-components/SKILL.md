---
name: igniteui-blazor-components
description: "Covers non-grid Ignite UI for Blazor UI components: application setup, form controls (inputs, combos, selects, date/time pickers, calendar, checkbox, radio, switch, slider, rating), layout containers (tabs, stepper, accordion, expansion panel, navigation drawer, navbar, tree), data-display components (list, card, carousel, avatar, badge, chip, icon, progress indicators, dropdown, tooltip), feedback overlays (dialog, snackbar, toast, banner), layout managers (Dock Manager, Tile Manager); and visualizations (Category Chart, Data Chart, Financial/Stock Chart, Pie/Donut Chart, Sparkline, Treemap, Geographic Map, Gauges, Dashboard Tile) requiring IgniteUI.Blazor or IgniteUI.Blazor.Trial. Use when users ask about any Ignite UI Blazor component that is NOT a data grid. Do NOT use for data grids, tables, or tabular data - use igniteui-blazor-grids instead. Do NOT use for theming or styling - use igniteui-blazor-theming instead."
user-invocable: true
---

# Ignite UI for Blazor - UI Components

## Prerequisites

- .NET 8+ Blazor project (Server, WebAssembly, Web App, or MAUI Blazor Hybrid)
- The correct NuGet package installed: `IgniteUI.Blazor.Lite` (NuGet.org, MIT) for general purpose UI components; `IgniteUI.Blazor.GridLite` (NuGet.org, MIT) for the lightweight grid; `IgniteUI.Blazor` (Infragistics private feed, licensed) for the full suite including charts, maps, gauges, and enterprise grids; or `IgniteUI.Blazor.Trial` (NuGet.org) for evaluation of the full suite
- `builder.Services.AddIgniteUIBlazor(...)` called in `Program.cs`
- `@using IgniteUI.Blazor.Controls` added to `_Imports.razor`
- A theme CSS file linked in the host page (see [`references/setup.md`](./references/setup.md))
- The **Ignite UI CLI MCP server** (`igniteui-cli`) is available as a tool provider

> **AGENT INSTRUCTION - MCP Server Setup (REQUIRED)**
>
> Before using any Ignite UI CLI MCP tools, you MUST verify the MCP server is available
> by calling `list_components(framework: "blazor")`. If the tool is not available or the call fails,
> you MUST automatically configure it by following the setup process steps described below.
>
> After writing the file, inform the user that the MCP server has been
> configured and they may need to reload the editor for the tools to activate.
> Start the MCP server and wait for that MCP server to start before continuing the component-related work.
> Do NOT skip this step or ask the user to do it manually.

## Setting Up the Ignite UI CLI MCP Server

> **Full setup instructions for VS Code, Cursor, Claude Desktop, and JetBrains IDEs are in [`references/mcp-setup.md`](./references/mcp-setup.md).** Read that file for editor-specific configuration steps and verification.

## MANDATORY AGENT PROTOCOL - YOU MUST FOLLOW THIS BEFORE PRODUCING ANY OUTPUT

**This file is a routing hub only. It contains no component examples and no component API details.**

> **DO NOT write any component names, property names, event names, module registration calls, or Razor attributes from memory.**
> Component APIs change between versions. Anything generated without reading the reference files and Blazor MCP docs will be incorrect.

You are **required** to complete ALL of the following steps before producing any component-related code or answer:

**STEP 1 - Identify every component or feature involved.**
Map the user's request to one or more rows in the Task → Reference File table below. A single request often spans multiple categories (e.g., a form inside a Dialog requires reading both `form-controls.md` AND `feedback.md`).

**STEP 2 - Read every identified reference file in full (PARALLEL).**
Call `read_file` (or equivalent) on **all** reference files identified in Step 1 **in a single parallel batch**. Reference files map components to their MCP doc slugs and explain which MCP calls to make.

**STEP 3 - Extract doc slugs, then call `get_doc` and API tools for each component involved.**
Use the Ignite UI MCP `get_doc` tool with `framework: "blazor"` and the exact doc slug listed in the reference files you just read. It returns the actual registration pattern, Razor markup, examples, and CSS parts. Do NOT skip this step.

If a reference file does not list a slug for the requested component, call `search_docs(framework: "blazor", query: "<component or feature>")` to find the correct doc. If no Blazor doc exists, say that the component or feature is not covered instead of guessing.

Use `search_api` and `get_api_reference` for Blazor component API details when property names, methods, events, or signatures are needed.

**STEP 4 - Only then produce output.**
Base your code and explanation exclusively on what you read. If the reference files or MCP docs do not cover something, say so explicitly rather than guessing.

### Task → Reference File

| Task | Reference file to read |
|---|---|
| NuGet install, `Program.cs` registration, `_Imports.razor`, CSS/script references, project types (Server, WASM, Web App, MAUI) | [`references/setup.md`](./references/setup.md) |
| Input, Combo Box, Select, Date Picker, Date Range Picker, Calendar, Date Time Input, Mask Input, Checkbox, Radio / Radio Group, Switch, Slider / Range Slider, Rating, form/value binding | [`references/form-controls.md`](./references/form-controls.md) |
| Tabs, Stepper, Accordion, Expansion Panel, Navigation Drawer, Navbar, Tree | [`references/layout.md`](./references/layout.md) |
| List, Card, Carousel, Avatar, Badge, Chip, Icon, Icon Button, Button, Button Group, Circular Progress, Linear Progress, Dropdown, Tooltip, Ripple | [`references/data-display.md`](./references/data-display.md) |
| Dialog, Snackbar, Toast, Banner | [`references/feedback.md`](./references/feedback.md) |
| Dock Manager (panes, tabs, floating, serialization), Tile Manager | [`references/layout-manager.md`](./references/layout-manager.md) |
| Category Chart, Data Chart, Financial / Stock Chart, Pie Chart, Donut Chart, Sparkline, Treemap, Geographic Map, Gauges, Dashboard Tile, visualization features (animations, tooltips, markers, highlighting, zooming, legends, maps, ranges) | [`references/charts.md`](./references/charts.md) |

> **When in doubt, read more rather than fewer reference files.** The cost of an unnecessary file read is negligible; the cost of hallucinated API usage is a broken application.

## Package Variants

| Package | Source | Who uses it |
|---|---|---|
| `IgniteUI.Blazor.Lite` | NuGet.org | Open-source / MIT users needing core UI components (forms, layout, navigation, data display, feedback) |
| `IgniteUI.Blazor.GridLite` | NuGet.org | Open-source / MIT users needing the lightweight `IgbGridLite` data grid |
| `IgniteUI.Blazor` | Infragistics private NuGet feed (`https://packages.infragistics.com/nuget/licensed/`) | Licensed / enterprise users that need the full component suite (grids, charts, maps, gauges, Dock Manager) |
| `IgniteUI.Blazor.Trial` | NuGet.org | Evaluation users — same full suite as `IgniteUI.Blazor` but with a trial watermark |

`IgniteUI.Blazor.Lite` contains the open-source UI component set, while `IgniteUI.Blazor.GridLite` contains the free `IgbGridLite` data grid package. Both use the `IgniteUI.Blazor.Controls` namespace. Do **not** mix the licensed `IgniteUI.Blazor` package with `IgniteUI.Blazor.Lite` in the same project; they use the same namespaces and duplicate some components.

## Key Blazor-Specific Notes

> **AGENT INSTRUCTION - Module Registration**
>
> Every Ignite UI for Blazor component **and its sub-components** has a corresponding module. Register **all** modules for every component used on the page in `Program.cs`:
>
> ```csharp
> builder.Services.AddIgniteUIBlazor(typeof(IgbComboModule), typeof(IgbDatePickerModule));
> ```
>
> Calling `builder.Services.AddIgniteUIBlazor()` with no arguments registers ALL modules (useful for prototypes but increases bundle size). Prefer explicit module registration in production.

> **AGENT INSTRUCTION - `@ref` and `EnsureReady`**
>
> When accessing a component from C# code (e.g., to call `ShowAsync()` on a dialog), use `@ref`:
>
> ```razor
> <IgbDialog @ref="DialogRef" />
>
> @code {
>     public IgbDialog DialogRef { get; set; }
> }
> ```
>
> Some components (e.g., `IgbIcon`) require `await component.EnsureReady()` before calling async registration methods in `OnAfterRenderAsync(bool firstRender)`.

> **AGENT INSTRUCTION - Forms**
>
> Several Ignite UI Blazor components such as `IgbCombo` and `IgbRadio` do **not** work with the standard HTML `<form>` element. Do not assume a universal form pattern. Check the component's MCP doc first, bind component values explicitly (`@bind-Value`, `@bind-Checked`, or documented change events), and only use form integration patterns shown by the current docs.

---

## Related Skills

- [`igniteui-blazor-grids`](../igniteui-blazor-grids/SKILL.md) - Data Grids (Grid, Tree Grid, Hierarchical Grid, Pivot Grid, Grid Lite)
- [`igniteui-blazor-theming`](../igniteui-blazor-theming/SKILL.md) - Theming & Styling
