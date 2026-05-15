# Ignite UI React Component Mapping Reference

## Table of Contents
- [Dashboard & Layout Components](#dashboard--layout-components)
- [Chart Components](#chart-components)
- [Data Display Components](#data-display-components)
- [Form & Input Components](#form--input-components)
- [Calendar & Scheduling Components](#calendar--scheduling-components)
- [Map Components](#map-components)
- [Gauge Components](#gauge-components)
- [Package Requirements](#package-requirements)
- [Import Patterns](#import-patterns)

## Dashboard & Layout Components

| UI Pattern | Ignite UI Component | Key Properties |
|---|---|---|
| Top navigation bar | `IgrNavbar` | children plus named action/content slots |
| Side navigation | `IgrNavDrawer` | `open`, drawer items, `icon` and `content` slots |
| Content cards/panels | `IgrCard` | `IgrCardHeader`, `IgrCardContent`, `IgrCardActions` |
| Tabbed content | `IgrTabs` + `IgrTab` | `label`, `slot="label"` |
| Accordion sections | `IgrAccordion` | `IgrExpansionPanel` children |
| Split layouts | `IgrSplitter` | resizable panes when splitter chrome is visible |
| Tile dashboard | `IgrTileManager` | drag/resize tiles |

Decision rule:

- Use `IgrNavbar` for a top horizontal bar when its slot structure and behavior match the screenshot. Use custom children and CSS flex overrides to achieve multi-zone layouts inside it. Use a plain `<header>` when that is a closer structural fit.
- Use `IgrNavDrawer` for a sidebar or side-navigation panel when drawer structure and behavior match the screenshot. Configure open and mini behavior according to whether the design shows fixed, collapsible, or icon-only navigation. Use a plain `<aside>` when a static custom sidebar matches the screenshot better.
- Use `IgrTabs` for a horizontal tab strip when the screenshot clearly shows tabbed state switching. Use label-only tabs for routed navigation and inline tab content for local view switching.

Component decision matrix (by visual pattern, domain-neutral):

| Visual Pattern | Recommended Component | Notes |
|---|---|---|
| Repeated rows with icon/text/action | `IgrList` | Use when the row anatomy and interaction model match. Compose the row content with React children and the documented slots. Use native `<ul>/<li>` or custom containers when that is a closer visual fit |
| Spreadsheet-like editable or sortable table | `IgrGridLite` or `IgrGrid` | Use only when content is truly tabular. Prefer `IgrGridLite` for lightweight MIT cases and `IgrGrid` when advanced grid features are required |
| Hierarchical or tree-structured table | `IgrTreeGrid` or `IgrTree` | Use `IgrTreeGrid` for hierarchical tables and `IgrTree` for tree-style navigation or nested lists |
| Content blocks / summary cards | `IgrCard` | Use when card chrome helps match the panel shape and structure. Use `IgrCardHeader`, `IgrCardContent`, and `IgrCardActions`, or plain `<div>` containers for flat or highly custom tiles |
| Any text input field | `IgrInput` | Use when the input anatomy matches the screenshot, including search fields and inline editors. Apply CSS to match the screenshot's border/radius style |
| Dropdown or select | `IgrSelect` | Use when the screenshot clearly shows select/dropdown behavior |
| Form fields with labels and inputs | `IgrInput`, `IgrSelect`, `IgrCombo`, `IgrDatepicker`, `IgrDateTimeInput` | Cover text, select, combo, and date/time inputs |
| Multi-step form / wizard | `IgrStepper` | Use when a sequence of steps is visually present |
| Filter chips / tag inputs | `IgrChip` | Use when chip anatomy matches status badges, filter tags, or removable labels in the screenshot |
| Calendar or date picker as a primary view element | `IgrCalendar`, `IgrDatepicker`, `IgrDateRangePicker` | Use when scheduling or date selection is the core UI |
| Top icon/action bar | `IgrNavbar` with `IgrButton` / `IgrIconButton` | Use when a navbar structure matches the screenshot; use plain icon buttons or custom containers when that is a closer fit |

## Chart Components

| UI Pattern | Ignite UI Component | Key Properties |
|---|---|---|
| Area chart | `IgrCategoryChart` | `chartType`, `markerTypes`, `areaFillOpacity` |
| Line chart | `IgrCategoryChart` | `chartType`, `markerTypes` |
| Column/bar chart | `IgrCategoryChart` | `chartType`, `markerTypes`, `includedProperties` |
| Sparkline (mini chart) | `IgrSparkline` or `IgrDataChart` | `displayType`, `valueMemberPath`, sized container |
| Pie/donut chart | `IgrPieChart` | `valueMemberPath`, `labelMemberPath` |
| Financial chart | `IgrFinancialChart` | OHLC/candlestick data |
| Complex multi-series | `IgrDataChart` | multiple series + axes plus module registration |

Decision rule:

- Financial or OHLC screenshot: prefer `IgrFinancialChart`
- Simple or moderate trend panel: prefer `IgrCategoryChart`; move to `IgrDataChart` when you need lower-level per-series control
- Highly custom sparkline or microchart: use the sparkline component from `igniteui-react-charts` or a custom fallback if the built-in anatomy is not a close visual match

## Data Display Components

| UI Pattern | Ignite UI Component | Key Properties |
|---|---|---|
| Item list | `IgrList` | slot-based row content, selection, and dense list styling |
| User avatar | `IgrAvatar` | `initials`, `shape`, `size` |
| Status badge | `IgrBadge` | value/children plus token-based styling |
| Icons | `IgrIcon` | icon name, collection, styling |
| Progress bar | `IgrLinearProgress` | `value`, `max` |
| Circular progress | `IgrCircularProgress` | `value`, `max` |
| Flat data grid | `IgrGridLite` or `IgrGrid` | choose by feature level and package availability |
| Hierarchical/tree data grid | `IgrTreeGrid` | parent-child data |
| Filter/tag chips | `IgrChip` | selected state, removable UI, token-based styling |

Decision rule:

- Use `IgrList` for repeated-row content lists when its row structure and interaction model match the screenshot. The component adds accessible keyboard navigation, item structure, and theming when those benefits fit the design. Use native `<ul>/<li>` or custom containers when they are a closer visual fit.
- Choose `IgrGridLite` or `IgrGrid` only when the image is truly tabular (flat rows and columns, spreadsheet-style).
- Choose `IgrTreeGrid` when rows have parent-child or hierarchical structure.
- Use `IgrChip` when chip anatomy matches the screenshot's status badges, tags, or label pills. Use custom badge or pill markup when a simpler or more exact visual match is needed.

## Form & Input Components

| UI Pattern | Ignite UI Component | Key Properties |
|---|---|---|
| Text input | `IgrInput` | `label`, `placeholder`, `type` |
| Dropdown select | `IgrSelect` | option children, label, value |
| Searchable multi-select | `IgrCombo` | `data`, `displayKey`, `valueKey` |
| Date picker | `IgrDatepicker` | value and label props |
| Date/time input | `IgrDateTimeInput` | value, format options |
| Toggle switch | `IgrSwitch` | checked state, change events |
| Checkbox | `IgrCheckbox` | checked state, `indeterminate` |
| Radio button group | `IgrRadioGroup` + `IgrRadio` | `name`, selected value |
| Slider | `IgrSlider` | `min`, `max`, `value` |
| Multi-step wizard | `IgrStepper` | orientation, step composition |
| Chip filter bar | `IgrChip` collection in a flex wrapper | compose removable/filter chips manually |

## Calendar & Scheduling Components

| UI Pattern | Ignite UI Component | Key Properties |
|---|---|---|
| Calendar view | `IgrCalendar` | selection mode, `value`, change events |
| Date range picker | `IgrDateRangePicker` | range value, change events |
| Month/year picker | `IgrCalendar` | month/year view settings per docs |

## Map Components

| UI Pattern | Ignite UI Component | Key Properties |
|---|---|---|
| World map | `IgrGeographicMap` | `zoomable`, `backgroundContent` |
| Map markers | `IgrGeographicSymbolSeries` | `latitudeMemberPath`, `longitudeMemberPath`, `markerType`, `markerBrush` |
| Bubble overlay | `IgrGeographicProportionalSymbolSeries` | sized markers |
| Shape regions | `IgrGeographicShapeSeries` | polygon rendering |

## Gauge Components

| UI Pattern | Ignite UI Component | Key Properties |
|---|---|---|
| Linear gauge | `IgrLinearGauge` | `value`, `minimumValue`, `maximumValue`, `needleBrush` |
| Radial gauge | `IgrRadialGauge` | `value`, `minimumValue`, `maximumValue` |
| Bullet graph | `IgrBulletGraph` | performance vs target |

## Package Requirements

The main `igniteui-react` package contains core UI components (list, avatar, navbar, nav drawer, card, badge, progress, icon, etc.).

Additional component families may require **additional packages** beyond the main React package:

| Capability | Additional packages |
|---|---|
| Grid Lite | `igniteui-react` and `igniteui-grid-lite` |
| Advanced grids | `igniteui-react-grids` or `@infragistics/igniteui-react-grids` |
| Charts / sparklines | `igniteui-react-charts` or `@infragistics/igniteui-react-charts` |
| Maps | `igniteui-react-maps` or `@infragistics/igniteui-react-maps` |
| Gauges / bullet graphs | `igniteui-react-gauges` or `@infragistics/igniteui-react-gauges` |

Install only the packages required by the components you actually selected. Resolve the exact package version against the installed Ignite UI major and the actual published package versions before installing. Charts, maps, and gauges also require module registration in React files.

## Import Patterns

Treat this file as a component selection reference, not as authoritative import guidance for a specific repo. Confirm exact imports from the current workspace, the existing React skills, and `get_doc` results. For styling selectors, target the rendered `igc-*` tag names instead of the React `Igr*` component names.
