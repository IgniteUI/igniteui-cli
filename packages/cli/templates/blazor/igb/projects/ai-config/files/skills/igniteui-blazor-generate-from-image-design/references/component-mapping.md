# Ignite UI Blazor Component Mapping Reference

## Table of Contents
- [Dashboard & Layout Components](#dashboard--layout-components)
- [Chart Components](#chart-components)
- [Data Display Components](#data-display-components)
- [Form & Input Components](#form--input-components)
- [Calendar & Scheduling Components](#calendar--scheduling-components)
- [Feedback & Overlay Components](#feedback--overlay-components)
- [Map Components](#map-components)
- [Gauge Components](#gauge-components)
- [Package Requirements](#package-requirements)
- [Import & Registration Patterns](#import--registration-patterns)

---

## Dashboard & Layout Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| Top navigation bar | `IgbNavbar` | `slot="start"` for leading actions, default content for title/brand text, `slot="end"` for trailing actions |
| Side navigation | `IgbNavDrawer` | `Open`, `Position`, `IgbNavDrawerItem`, `IgbNavDrawerHeaderItem`, `mini` slot for icon-only collapsed content |
| Content cards/panels | `IgbCard` | `IgbCardHeader`, `IgbCardContent`, `IgbCardMedia`, `IgbCardActions` |
| Tabbed content | `IgbTabs` | `IgbTab`, `IgbTabPanel`, `Panel` on tab matching panel `Id`; use `Change`/`Select` for controlled selection |
| Accordion sections | `IgbAccordion` | `IgbExpansionPanel` children |
| Tile dashboard | `IgbTileManager` | `ColumnCount`, `Gap`, `MinColumnWidth`, `MinRowHeight`, `DragMode`, `ResizeMode` |
| IDE-like dockable pane layout | `IgbDockManager` | `IgbDockManagerLayout`, pane types: `IgbSplitPane`, `IgbTabGroupPane`, `IgbContentPane`; supports floating, pinning, serialization |
| Repeated rows with icon/text/action | `IgbList` + `IgbListItem` | `slot="start"`, `slot="title"`, `slot="subtitle"`, `slot="end"` |
| Spreadsheet-like editable or sortable table | `IgbGrid` | Full-featured data grid |
| Hierarchical or tree-structured table | `IgbTreeGrid` | `PrimaryKey`, `ForeignKey`, `ChildDataKey` |
| Content blocks / summary cards | `IgbCard` | Use `IgbCardHeader`, `IgbCardContent`, `IgbCardActions` slots with custom projected content. Use plain `<div>` containers for flat or highly custom tiles |
| Any text input field | `IgbInput` | Use when the input anatomy matches the screenshot, including search fields and inline editors |
| Dropdown or select | `IgbSelect` | Use when the screenshot clearly shows select/dropdown behavior |
| Form fields with labels and inputs | `IgbInput`, `IgbSelect`, `IgbCombo` | Text, select, combo, and date inputs |
| Multi-step form / wizard | `IgbStepper` | Use when a sequence of steps is visually present |
| Filter chips / tag inputs | `IgbChip` | Use when chip anatomy matches status badges, filter tags, or removable labels |
| Calendar or date picker as a primary view element | `IgbCalendar`, `IgbDatePicker` | Use when scheduling or date selection is the core UI |
| Top icon/action bar | `IgbNavbar` with projected icon buttons | Use when a navbar structure matches the screenshot; use plain icon buttons or custom containers when that is a closer fit |

Decision rules:

- Use `IgbNavbar` for a top horizontal bar when its slot structure and behavior match the screenshot. Use custom projected content and CSS flex overrides to achieve multi-zone layouts inside it. Use a plain `<header>` element when that is a closer structural fit.
- Use `IgbNavDrawer` for a sidebar or side-navigation panel when drawer structure and behavior match the screenshot. Configure `Open`, `Position`, and the `mini` slot according to whether the design shows expanded, temporary, or icon-only navigation. Use a plain `<aside>` when a static custom sidebar matches the screenshot better.
- Use `IgbTabs` for a horizontal tab strip when the screenshot clearly shows tabbed state switching.

Component decision matrix (by visual pattern, domain-neutral):

| Visual Pattern | Recommended Component | Notes |
|---|---|---|
| Sidebar with icon rows | `IgbNavDrawer` | `IgbNavDrawerItem` children; use `mini` slot for collapsed icon-only rows |
| Top bar with brand/search/actions | `IgbNavbar` | Project icon buttons into action slots |
| Card grid / tile layout | `IgbTileManager` or `IgbCard` in CSS Grid | `IgbTileManager` for drag/resize; plain CSS Grid + `IgbCard` for static layouts |
| KPI summary row | Plain HTML in CSS Grid | Bind Ignite UI primitives (icons, badges, progress) inside semantic containers |
| Collapsible section | `IgbExpansionPanel` or `IgbAccordion` | `IgbAccordion` when design shows only-one-open behavior |
| Tab strip | `IgbTabs` | Use `IgbTab` + `IgbTabPanel` pairs |
| Step-by-step wizard | `IgbStepper` | Horizontal or vertical orientation based on layout |
| Data table | `IgbGrid` / `IgbTreeGrid` | Use only when content is truly tabular |
| IDE pane layout | `IgbDockManager` | Use when the design shows multi-pane, draggable/floating dock areas |

---

## Chart Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| Area chart | `IgbCategoryChart` | `ChartType="CategoryChartType.Area"`, `MarkerTypes`, `DataSource` |
| Line chart | `IgbCategoryChart` | `ChartType="CategoryChartType.Line"`, `MarkerTypes`, `DataSource` |
| Column chart | `IgbCategoryChart` | `ChartType="CategoryChartType.Column"`, `DataSource` |
| Sparkline (mini chart) | `IgbSparkline` | `DisplayType`, `ValueMemberPath`, `DataSource` |
| Pie chart | `IgbPieChart` | `ValueMemberPath`, `LabelMemberPath`, `DataSource` |
| Donut chart | `IgbDoughnutChart` + `IgbRingSeries` | `ValueMemberPath`, `LabelMemberPath`, `DataSource` |
| Financial chart | `IgbFinancialChart` | `ChartType`, OHLC member paths, `DataSource` |
| Complex multi-series | `IgbDataChart` | Multiple `IgbSeries` + `IgbAxis` children |
| Hierarchical part-to-whole (weighted tree) | `IgbTreemap` | `DataSource`, `LabelMemberPath`, `ValueMemberPath` |
| Auto-generated dashboard widget from data | `IgbDashboardTile` | Verify supported chart modes and binding shape with `get_doc` before use |

Decision rules:

- Financial or OHLC screenshot: prefer `IgbFinancialChart`
- Simple or moderate trend panel: prefer `IgbCategoryChart`; move to `IgbDataChart` when you need lower-level per-series control
- Highly custom sparkline or microchart: use `IgbSparkline` or a custom fallback if the built-in anatomy is not a close visual match
- Part-to-whole: prefer `IgbPieChart` for a solid pie chart or `IgbDoughnutChart` with `IgbRingSeries` for a donut chart

---

## Data Display Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| Item list | `IgbList` + `IgbListItem` | `slot="start"` (avatar/icon), `slot="title"`, `slot="subtitle"`, `slot="end"` |
| User avatar | `IgbAvatar` | `Shape` (`AvatarShape.Circle`, `AvatarShape.Rounded`, `AvatarShape.Square`), `Initials`, `Src`, `Alt` |
| Status badge | `IgbBadge` | Content for visible text/count, `Variant`, `Shape`, `Dot`, `Outlined` |
| Icons | `IgbIcon` | `Collection`, `IconName`; register custom icons before use |
| Progress bar | `IgbLinearProgress` | `Value`, `Max` |
| Circular progress | `IgbCircularProgress` | `Value`, `Max` |
| Flat data grid | `IgbGrid` | Full-featured data grid with sorting, filtering, editing |
| Hierarchical/tree data grid | `IgbTreeGrid` | `PrimaryKey`, `ForeignKey`, `ChildDataKey` |
| Filter/tag chips | `IgbChip` | `Removable`, `Selectable` |
| Tree view | `IgbTree` + `IgbTreeItem` | `Label`, `Expanded`, `Selection` mode |
| Content card | `IgbCard` | `IgbCardHeader`, `IgbCardMedia`, `IgbCardContent`, `IgbCardActions` |
| Carousel | `IgbCarousel` | Slide-based navigation |
| Action button | `IgbButton` | `Variant` (`ButtonVariant.Contained` / `Outlined` / `Flat` / `Fab`), `Disabled`, `DisplayType`, `Href` |
| Toggle button group | `IgbButtonGroup` + `IgbToggleButton` | `Selection` (`ButtonGroupSelection.Single` / `Multiple`), `Alignment` |
| Icon-only button | `IgbIconButton` | `IconName`, `Collection`, `Variant` (`IconButtonVariant.Flat` / `Outlined` / `Contained`) |
| Contextual dropdown / action menu | `IgbDropdown` | `IgbDropdownItem`, `IgbDropdownHeader`, `Placement`, `Change` event; trigger via `slot="target"` or `@ref` |
| Informational tooltip on hover | `IgbTooltip` | `Anchor` (target element ID), `Placement`, `ShowDelay`, `HideDelay` |
| Click / touch ripple effect | `IgbRipple` | Nested inside any container; customize color via `--color` CSS property |
| Master-detail grid with nested child grids | `IgbHierarchicalGrid` | `IgbRowIsland` children; each row can expand to a full child grid |
| Read-only simple list grid | `IgbGridLite` | OSS (`IgniteUI.Blazor.GridLite` package); no editing, no complex features |

Decision rules:

- Use `IgbList` for repeated-row content lists when its row structure and interaction model match the screenshot. The component adds accessible keyboard navigation, item structure, and theming when those benefits fit the design. Use native `<ul>/<li>` or custom containers when they are a closer visual fit.
- Choose `IgbGrid` only when the image is truly tabular (flat rows and columns, spreadsheet-style).
- Choose `IgbTreeGrid` when rows have parent-child or hierarchical structure within a single grid surface.
- Choose `IgbHierarchicalGrid` when rows expand to reveal a complete nested child grid (master-detail).
- Choose `IgbGridLite` for read-only display-only grids where editing and advanced features are not needed.
- Use `IgbChip` when chip anatomy matches the screenshot's status badges, tags, or label pills. Use custom badge or pill markup when a simpler or more exact visual match is needed.
- Use `IgbButton` / `IgbButtonGroup` for primary call-to-action areas. Use `IgbIconButton` when only an icon is shown with no text label.
- Use `IgbDropdown` for contextual action menus that open on a trigger. Prefer `IgbSelect` when the dropdown is a form field for selecting a value.
- Use `IgbTooltip` for brief informational text that appears on hover. Use `IgbSnackbar` or `IgbBanner` (see Feedback section) for persistent or actionable notifications.

---

## Form & Input Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| Text input / search field | `IgbInput` | `Type`, `Label`, `Placeholder`, `@bind-Value` |
| Select / dropdown | `IgbSelect` | `IgbSelectItem` children, `@bind-Value` |
| Multi-select combo | `IgbCombo` | `Data`, `DisplayKey`, `ValueKey`, `T`, `@bind-Value` |
| Date picker | `IgbDatePicker` | `@bind-Value`, `DisplayFormat` |
| Calendar | `IgbCalendar` | `Selection`, `@bind-Value` |
| Checkbox | `IgbCheckbox` | `@bind-Checked` |
| Radio button | `IgbRadio` / `IgbRadioGroup` | `@bind-Value` on group |
| Switch / toggle | `IgbSwitch` | `@bind-Checked` |
| Slider | `IgbSlider` / `IgbRangeSlider` | `@bind-Value`, `Min`, `Max`, `Step` |
| Rating | `IgbRating` | `@bind-Value`, `Max` |
| Stepper / wizard | `IgbStepper` | `IgbStep` children, `Orientation` |
| Date / time inline input | `IgbDateTimeInput` | `@bind-Value`, `InputFormat`, `DisplayFormat`, `SpinLoop`, `Min`, `Max` |
| Masked text input (phone, postal, etc.) | `IgbMaskInput` | `Mask` pattern (`0`=digit, `L`=letter, `A`=alphanumeric), `Prompt`, `ValueMode` |

---

## Calendar & Scheduling Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| Calendar view | `IgbCalendar` | `Selection`, `@bind-Value` |
| Date picker in form | `IgbDatePicker` | `@bind-Value`, `DisplayFormat` |
| Date range selection | `IgbDateRangePicker` | `@bind-Value` |

---

## Feedback & Overlay Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| Modal confirmation / form dialog | `IgbDialog` | `Title`, `Open`, `KeepOpenOnEscape`, `CloseOnOutsideClick`, `slot="footer"` for action buttons; `ShowAsync()`, `HideAsync()` |
| Brief notification with optional action | `IgbSnackbar` | `DisplayTime` (ms; 0 = keep open), `KeepOpen`, `ActionText`, `ShowAsync()`, `HideAsync()` |
| Auto-dismissing status notification | `IgbToast` | `DisplayTime` (ms), `KeepOpen`, `ShowAsync()`, `HideAsync()` |
| Persistent inline alert / status message | `IgbBanner` | `slot="illustration"` (icon/image), `slot="actions"` (buttons); inline, non-modal; `ShowAsync()`, `HideAsync()`, `ToggleAsync()` |

Decision rules:

- Use `IgbDialog` for blocking, confirmable actions (e.g., delete confirmation, form in overlay). It is a modal overlay that pauses interaction with the rest of the page.
- Use `IgbSnackbar` when a brief message with an optional action button is needed (e.g., "Undo"). It auto-dismisses after `DisplayTime`.
- Use `IgbToast` for simple auto-dismissing status messages with no action button. Prefer `IgbSnackbar` when an action is required.
- Use `IgbBanner` for persistent, low-urgency messages that push page content down (e.g., offline indicator, cookie consent). Unlike `IgbDialog`, it is inline and non-modal.

---

## Map Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| World / region map | `IgbGeographicMap` | `Zoomable`, `BackgroundContent` |
| Map markers (points) | `IgbGeographicSymbolSeries` | `LatitudeMemberPath`, `LongitudeMemberPath`, `MarkerType`, `MarkerBrush` |
| Bubble overlay | `IgbGeographicProportionalSymbolSeries` | Sized markers based on data value |
| Shape regions (polygons) | `IgbGeographicShapeSeries` | Polygon rendering |
| Polyline paths | `IgbGeographicPolylineSeries` | Route/path rendering |

---

## Gauge Components

| UI Pattern | Ignite UI Blazor Component | Key Properties |
|---|---|---|
| Linear gauge | `IgbLinearGauge` | `Value`, `MinimumValue`, `MaximumValue`, `NeedleBrush` |
| Radial gauge | `IgbRadialGauge` | `Value`, `MinimumValue`, `MaximumValue` |
| Bullet graph | `IgbBulletGraph` | `Value`, `TargetValue`, `MinimumValue`, `MaximumValue` |

---

## Package Requirements

Ignite UI Blazor package selection depends on the component family. Use `IgniteUI.Blazor.Lite` for general purpose components and `IgniteUI.Blazor.GridLite` the light-weight grid, and `IgniteUI.Blazor` (trial version available publicly as `IgniteUI.Blazor.Trial`) for specialized feature-rich grids and charts.

| NuGet Package | Description |
|---|---|
| `IgniteUI.Blazor.Lite` | Open-source / MIT core UI components such as layout, navigation, forms, lists, cards, feedback, and common inputs |
| `IgniteUI.Blazor.GridLite` | Open-source / MIT `IgbGridLite` package for lightweight data grid scenarios |
| `IgniteUI.Blazor.Trial` | Full component suite with trial watermark - same capabilities as `IgniteUI.Blazor`, publicly available on NuGet.org for evaluation |
| `IgniteUI.Blazor` | Licensed full component suite including premium grids, charts, maps, gauges, Dock Manager, and core UI components |

| Capability | Package Required |
|---|---|
| Core UI components (list, avatar, navbar, drawer, card, badge, progress, icon, etc.) | `IgniteUI.Blazor.Lite` or `IgniteUI.Blazor` / `IgniteUI.Blazor.Trial` |
| Charts / sparklines | `IgniteUI.Blazor` or `IgniteUI.Blazor.Trial` only |
| Maps | `IgniteUI.Blazor` or `IgniteUI.Blazor.Trial` only |
| Gauges / bullet graphs | `IgniteUI.Blazor` or `IgniteUI.Blazor.Trial` only |
| Full data grids (`IgbGrid`, `IgbTreeGrid`, `IgbHierarchicalGrid`, `IgbPivotGrid`) | `IgniteUI.Blazor` or `IgniteUI.Blazor.Trial` only |
| Grid Lite (`IgbGridLite`) | `IgniteUI.Blazor.GridLite` or `IgniteUI.Blazor` / `IgniteUI.Blazor.Trial` |
| Tile Manager | `IgniteUI.Blazor.Lite` or `IgniteUI.Blazor` / `IgniteUI.Blazor.Trial` |
| Dock Manager | `IgniteUI.Blazor` or `IgniteUI.Blazor.Trial` only |

---

## Import & Registration Patterns

### 1. NuGet package reference (`.csproj`)

```xml
<!-- Licensed full suite -->
<PackageReference Include="IgniteUI.Blazor" Version="<resolved-version>" />

<!-- Trial full suite (watermarked, public NuGet.org) -->
<PackageReference Include="IgniteUI.Blazor.Trial" Version="<resolved-version>" />

<!-- OSS core UI components -->
<PackageReference Include="IgniteUI.Blazor.Lite" Version="<resolved-version>" />

<!-- OSS Grid Lite -->
<PackageReference Include="IgniteUI.Blazor.GridLite" Version="<resolved-version>" />
```

Choose the package that matches the component requirements above. Do not add all three by default.

### 2. Service registration (`Program.cs`)

Every `Igb*` component requires its corresponding `IgbXxxModule` to be registered:

```csharp
using IgniteUI.Blazor.Controls;

builder.Services.AddIgniteUIBlazor(
    typeof(IgbNavbarModule),
    typeof(IgbNavDrawerModule),
    typeof(IgbListModule),
    typeof(IgbCardModule),
    typeof(IgbAvatarModule),
    typeof(IgbBadgeModule),
    typeof(IgbCategoryChartModule),
    typeof(IgbGridModule)
    // ... add every IgbXxxModule your page uses
);
```

> **If you forget to register a module, the component will silently fail to render.** Always double-check that every `Igb*` component used in Razor has its module registered in `Program.cs`.

### 3. Using directive (`_Imports.razor`)

```razor
@using IgniteUI.Blazor.Controls
```

### 4. CSS theme (`wwwroot/index.html` or `App.razor`)

```html
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

### 5. JS interop script (`wwwroot/index.html` or `App.razor`)

```html
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
```

---

Treat this file as a component selection reference, not as authoritative API guidance for a specific version. Confirm exact parameters and behavior from `get_doc` results and the current workspace's reference files (`igniteui-blazor-components` skill).
