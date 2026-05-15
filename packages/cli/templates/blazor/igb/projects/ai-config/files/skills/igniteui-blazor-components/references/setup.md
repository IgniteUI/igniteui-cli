# Application Setup & Registration

> **Part of the [`igniteui-blazor-components`](../SKILL.md) skill hub.**

## Contents

- [NuGet Installation](#nuget-installation)
- [Program.cs Registration](#programcs-registration)
- [\_Imports.razor](#_importsrazor)
- [CSS Theme Link](#css-theme-link)
- [Script Reference](#script-reference)
- [Project Type Differences](#project-type-differences)
- [Selective Module Registration](#selective-module-registration)
- [Key Rules](#key-rules)

---

## NuGet Installation

```bash
# OSS component package from NuGet.org
dotnet add package IgniteUI.Blazor.Lite

# OSS Grid Lite package from NuGet.org
dotnet add package IgniteUI.Blazor.GridLite

# Trial (full suite with watermark) from NuGet.org
dotnet add package IgniteUI.Blazor.Trial

# Or via Package Manager Console
Install-Package IgniteUI.Blazor.Lite
Install-Package IgniteUI.Blazor.GridLite
Install-Package IgniteUI.Blazor.Trial
```

Licensed users install the full `IgniteUI.Blazor` package from the Infragistics private feed:

```bash
# Add the Infragistics feed first (one-time)
nuget sources add -name "Infragistics" \
  -source "https://packages.infragistics.com/nuget/licensed/v3/index.json" \
  -username "your@email.com" \
  -password "your-password"

dotnet add package IgniteUI.Blazor
```

Package selection:

| Package | Use when |
|---|---|
| `IgniteUI.Blazor.Lite` | Open-source MIT core UI components: buttons, inputs, lists, cards, navigation, layout, and feedback components |
| `IgniteUI.Blazor.GridLite` | Open-source MIT `IgbGridLite` for lightweight read-only or essential data grid scenarios |
| `IgniteUI.Blazor.Trial` | Evaluation of the full suite (same as `IgniteUI.Blazor` but with a trial watermark; available publicly on NuGet.org) |
| `IgniteUI.Blazor` | Licensed full suite: premium grids, charts, maps, gauges, Dock Manager, and all core UI components |

Do **not** mix `IgniteUI.Blazor` and `IgniteUI.Blazor.Lite` in the same project. They use the same namespaces and duplicate some components; pick the licensed full package path or the OSS Lite package path.

---

## Program.cs Registration

### Blazor Server (.NET 6+)

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddIgniteUIBlazor();   // registers ALL modules

var app = builder.Build();
```

### Blazor WebAssembly (.NET 6+)

```csharp
var builder = WebAssemblyHostBuilder.CreateDefault(args);
// ...
builder.Services.AddIgniteUIBlazor();

await builder.Build().RunAsync();
```

### Blazor Web App (.NET 8+ - both server and client Program.cs)

```csharp
// Server Project - Program.cs
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents()
    .AddInteractiveWebAssemblyComponents();
builder.Services.AddIgniteUIBlazor();

// Client Project - Program.cs
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.Services.AddIgniteUIBlazor();
await builder.Build().RunAsync();
```

> **AGENT INSTRUCTION - Blazor Web App render modes**
>
> Ignite UI components require an interactive render mode. For per-page or per-component interactivity, add the render mode directive to pages that use Ignite UI components:
>
> ```razor
> @rendermode InteractiveServer
> @* or: @rendermode InteractiveWebAssembly *@
> @* or: @rendermode InteractiveAuto *@
> ```
>
> For global interactivity, configure it in `App.razor`: `<Routes @rendermode="InteractiveAuto"/>`.

---

## \_Imports.razor

Add the namespace to `_Imports.razor` so Razor pages can use Ignite UI component tags without fully qualifying them:

```razor
@using IgniteUI.Blazor.Controls
```

For Blazor Web App solutions with separate server and client projects, add the same line to both `_Imports.razor` files when components are used in both projects. Page-level `@using IgniteUI.Blazor.Controls` is acceptable for isolated samples, but `_Imports.razor` is the preferred application setup.

---

## CSS Theme Link

Add in the `<head>` of:
- **Blazor Server / Web App**: `Pages/_Host.cshtml` or `Components/App.razor`
- **Blazor WASM**: `wwwroot/index.html`

```html
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

Available theme files (under `_content/IgniteUI.Blazor/themes/`):

| Path | Theme |
|---|---|
| `light/bootstrap.css` | Bootstrap Light |
| `dark/bootstrap.css` | Bootstrap Dark |
| `light/material.css` | Material Light |
| `dark/material.css` | Material Dark |
| `light/fluent.css` | Fluent Light |
| `dark/fluent.css` | Fluent Dark |
| `light/indigo.css` | Indigo Light |
| `dark/indigo.css` | Indigo Dark |

For .NET 9+ Web App projects, use the `Assets` property:

```razor
<link rel="stylesheet" href="@Assets["_content/IgniteUI.Blazor/themes/light/bootstrap.css"]" />
```

For `IgniteUI.Blazor.GridLite`, use the Grid Lite package theme path shown in the current Grid Lite docs:

```html
<link href="_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css" rel="stylesheet" />
```

---

## Script Reference

Add alongside the Blazor framework script in the host page:

```html
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
<!-- Blazor Server -->
<script src="_framework/blazor.server.js"></script>
<!-- Blazor WASM -->
<script src="_framework/blazor.webassembly.js"></script>
<!-- Blazor Web App -->
<script src="_framework/blazor.web.js"></script>
```

---

## Project Type Differences

| Project type | `Program.cs` host | Host page for CSS/script | Script tag |
|---|---|---|---|
| **Blazor Server** | `WebApplication.CreateBuilder` | `Pages/_Host.cshtml` | `blazor.server.js` |
| **Blazor WASM** | `WebAssemblyHostBuilder` | `wwwroot/index.html` | `blazor.webassembly.js` |
| **Blazor Web App** | Both server + client `Program.cs` | `Components/App.razor` | `blazor.web.js` |
| **MAUI Blazor Hybrid** | `MauiApp.CreateBuilder` (in `MauiProgram.cs`) | `wwwroot/index.html` | `blazor.webview.js` |

---

## Selective Module Registration

Register only the modules you use to keep bundle size small:

```csharp
builder.Services.AddIgniteUIBlazor(
    typeof(IgbInputModule),
    typeof(IgbComboModule),
    typeof(IgbDatePickerModule),
    typeof(IgbDialogModule),
    typeof(IgbButtonModule)
);
```

Module names follow the pattern `Igb{ComponentName}Module`. If unsure of the module name, call `get_doc` for that component - every doc shows the exact `typeof(...)` registration call. Use `search_api` and `get_api_reference` for component API details.

---

## Key Rules

1. **Both server and client `Program.cs` must register the service** in Blazor Web App projects.
2. **The CSS theme link and the script tag are both required.** Missing either causes components to render unstyled or non-functional.
3. **Add `@using IgniteUI.Blazor.Controls` to `_Imports.razor`**, and in both server/client `_Imports.razor` files for split Blazor Web App projects.
4. **`AddIgniteUIBlazor()` with no arguments registers all modules.** Use explicit `typeof(...)` registrations in production for smaller bundles.
5. **Blazor Web App components need an interactive render mode.** Static SSR pages will not render Ignite UI components correctly.
