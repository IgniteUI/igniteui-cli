---
title: Blazor What's New | Ignite UI for Blazor | Infragistics
_description: Learn about new features in the Ignite UI for Blazor.
_keywords: Changelog, What's New,  Ignite UI for Blazor, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode", "Infragistics.Controls.DataGridCellEventArgs", "Infragistics.Controls.GridBaseDirective", "MaskInput", "Shape", "RoundShape", "XamRadialGauge, XamLinearGauge, XamBulletGraph, XamTreemap", "XamRadialChart", "Toolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls.Charts
_tocName: Changelog
---

# Ignite UI for Blazor Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of Ignite UI for Blazor are documented on this page.

- As of version 2025.2, the Ignite UI for Blazor toolset supports .NET 10. For more information on .NET 10 please refer to [this article on Microsoft's site](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-10/overview).

- As of version 2024.2, the Ignite UI for Blazor toolset supports .NET 9. For more information on .NET 9 please refer to [this article on Microsoft's site](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9/overview).

## **25.2.83 (March 2026)**

### Enhancements

#### IgniteUI.Blazor

- Added `Checkmark` option to the `MarkerType` enum. Use `MarkerType.Checkmark` on a series to display a V-shaped checkmark icon inside a circle. The new `MarkerAutomaticBehavior.Checkmark` enum value allows applying the checkmark shape to all series in the chart, and the `SeriesViewer.CheckmarkMarkerTemplate` property can be used to customize its template.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
| 3229  | Grids | Latest version of Blazor Grids shows Trial watermark for Licensed version |
| 2754  | IgbTabs | Changing the check state for IgbSwitch inside the tab causes the tab content to disappear |

### Enhancements

### IgniteUI.Blazor

- Added `RangeBarSeries` support for horizontal range rendering in `DataChart`.

## **25.2.77 (March 2026)**

### IgniteUI.Blazor (Grids)

#### IgbQueryBuilder

- Added new component - IgbQueryBuilder - a UI component that allows users to build complex filtering conditions through an intuitive visual interface.

#### IgbGrid, IgbTreeGrid, IgbHierarchicalGrid, IgbPivotGrid

- Improved performance by dynamically adjusting the scroll throttle based on the data displayed in grid.

#### IgbGrid, IgbTreeGrid, IgbHierarchicalGrid

- Added PDF export functionality to grid components. Grids can now be exported to PDF format alongside the existing Excel and CSV export options.

#### Breaking Changes

- IgbGrid, IgbTreeGrid, IgbHierarchicalGrid, IgbPivotGrid
  - Original data array mutations (like adding/removing/moving records in the original array) are no longer detected automatically. Components need an array ref change for the change to be detected.

### General

#### IgbThemeProvider

- Added new component - IgbThemeProvider - allows scoping themes to specific page sections using Lit's context API, enabling multiple themes on a single page. Works in both Shadow and Light DOM.

#### Badge

- New dot type, improved outline implementation following WCAG AA accessibility standards and theme based sizing. [#1889](https://github.com/IgniteUI/igniteui-webcomponents/pull/1889)

#### Checkbox

- New --tick-width CSS property. [#1897](https://github.com/IgniteUI/igniteui-webcomponents/pull/1897)

#### Combo

- New disableClear property which disables the clear button of the combo component. [#1896](https://github.com/IgniteUI/igniteui-webcomponents/pull/1896)

#### Mask input

- Transform unicode digit code points to ASCII numbers for numeric patterns. [#1907](https://github.com/IgniteUI/igniteui-webcomponents/pull/1907)

#### Enhancements

- Accessibility color adjustments for Button, Button group, Calendar, Checkbox, Date picker, date range picker, Nav drawer, Radio group, Stepper. [#1959](https://github.com/IgniteUI/igniteui-webcomponents/pull/1959)
- Updated and aligned styles with the design kit for Button, Calendar, Carousel, Combo, Date picker, Date range picker, input, Select, Textarea.
- Improved keyboard navigation experience and grouping(now using native Math.groupBy) for Combo.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
| 2189  | IgbDataChart | DataChart skips rendering axis when there are no labels |
| 2317  | IgbGrid | Improve IgbGrid BodyTemplate Performance (C#/.NET templating) |
| 2326  | IgbDataPieChart | Added OthersCategory styling properties to DataPieChart |
| 2907  | IgbDateTimeInput  | IgbDateTimeInput Prompt parameter is not propagated to the underlying Web Component prompt property |
| 2908  | IgbMaskInput | IgbMaskInput Prompt parameter is not propagated to the underlying Web Component prompt property |
| 2909  | IgbPivotGrid  | IgbPivotGrid exposes SnackbarDisplayTime, but the property is not applicable and causes false test failures |
| 38668 | IgbDataTooltipLayer | TitleTextColor is overridden when chart's TitleTextColor is used |
| 40238 | Excel | fixed Excel Formula parser - Workbook.Load() throwing a Excel.FormulaParseException|
| 41167 | Excel | Object's Formulas are not round-tripped - Added Excel support for round tripping the camera tool |
| 41419 | Excel | Saving a VBA Signed Excel file does not keep a signature/certificate. |
| 41594 | IgbDataChart | AssigningCategoryStyle args.GetItems is null or not working to update items in the fragment series |
| 41598 | IgbDataChart | Exception editing a doughnut chart – DivideByZeroException  |
| [#2079](https://github.com/IgniteUI/igniteui-webcomponents/pull/2079) | Calendar | `aria-hidden` state for weeks outside of the current month |
| [#2078](https://github.com/IgniteUI/igniteui-webcomponents/pull/2078) | Date Picker | CSS border for slotted actions in dialog mode |
| [#2068](https://github.com/IgniteUI/igniteui-webcomponents/pull/2068) | Input | Placeholder color on focus |
| [#2073](https://github.com/IgniteUI/igniteui-webcomponents/pull/2073) | Input | CSS border when suffix slot content is present |
| [#2069](https://github.com/IgniteUI/igniteui-webcomponents/pull/2069) | Textarea | Align bottom padding to the design system |
| [#2063](https://github.com/IgniteUI/igniteui-webcomponents/pull/2063) | Validation | Slotted validation text follows the current theme |
| [#2059](https://github.com/IgniteUI/igniteui-webcomponents/pull/2059) | Tile Manager | Header is hidden only when there is no content and maximize/fullscreen are disabled |
| [#2061](https://github.com/IgniteUI/igniteui-webcomponents/pull/2061) | Theming | Resolve initial theme based on document computed styles rather than stylesheets |
| [#1909](https://github.com/IgniteUI/igniteui-webcomponents/pull/1909) | Sass Theme Support | Checkbox — styled using Sass tools from the theming package |
| [#1926](https://github.com/IgniteUI/igniteui-webcomponents/pull/1926) | Sass Theme Support | Chip — styled using Sass tools from the theming package |
| [#1920](https://github.com/IgniteUI/igniteui-webcomponents/pull/1920) | Sass Theme Support | Combo — styled using Sass tools from the theming package |
| [#1933](https://github.com/IgniteUI/igniteui-webcomponents/pull/1933) | Sass Theme Support | Select — styled using Sass tools from the theming package |
| [#1966](https://github.com/IgniteUI/igniteui-webcomponents/pull/1966) | Sass Theme Support | Snackbar — styled using Sass tools from the theming package |
| [#1972](https://github.com/IgniteUI/igniteui-webcomponents/pull/1972) | Sass Theme Support | Added missing shadows to components |
| [#1929](https://github.com/IgniteUI/igniteui-webcomponents/pull/1929) | Sass Theme Support | Tabs — fixed non-working Sass theme parameters |
| [#1935](https://github.com/IgniteUI/igniteui-webcomponents/pull/1935) | Sass Theme Support | Textarea — updated Sass themes |
| [#1980](https://github.com/IgniteUI/igniteui-webcomponents/pull/1980) | Sass Theme Support | Radio — styled using Sass tools from the theming package |
| [#1991](https://github.com/IgniteUI/igniteui-webcomponents/pull/1991) | Sass Theme Support | Switch — styled using Sass tools from the theming package |
| [#2015](https://github.com/IgniteUI/igniteui-webcomponents/pull/2015) | Sass Theme Support | List — styled using Sass tools from the theming package |
| [#2030](https://github.com/IgniteUI/igniteui-webcomponents/pull/2030) | Calendar | Focus styles for month/year views |
| [#1965](https://github.com/IgniteUI/igniteui-webcomponents/pull/1965) | Combo | Notch border styles |
| [#1964](https://github.com/IgniteUI/igniteui-webcomponents/pull/1964) | Checkbox & Switch | Internal ripple opacity when hovering over slotted content in the `helper-text` slot |
| [#1947](https://github.com/IgniteUI/igniteui-webcomponents/pull/1947) | Dialog | Underlying dialog element now has `display: contents` and won't participate in DOM layout |
| [#1986](https://github.com/IgniteUI/igniteui-webcomponents/pull/1986) | Dialog | `keepOpenOnEscape` not preventing the dialog from closing when Escape is pressed |
| [#1997](https://github.com/IgniteUI/igniteui-webcomponents/pull/1997) | Dialog | Base styles and theming |
| [#1985](https://github.com/IgniteUI/igniteui-webcomponents/pull/1985) | List & List Item | Added missing styles for slotted `igc-icon` in the list item |
| [#2010](https://github.com/IgniteUI/igniteui-webcomponents/pull/2010) | List & List Item | Icon and icon button sizes for the Indigo theme |
| [#2006](https://github.com/IgniteUI/igniteui-webcomponents/pull/2006) | Mask Input | Auto-fill behavior for mask patterns with literals |
| [#1956](https://github.com/IgniteUI/igniteui-webcomponents/pull/1956) | Navbar | Icon and icon button sizes |
| [#1957](https://github.com/IgniteUI/igniteui-webcomponents/pull/1957) | Select | Color for outlined type |
| [#1998](https://github.com/IgniteUI/igniteui-webcomponents/pull/1998) | Tabs | Add active pseudo-elements backgrounds for the active tab in Material theme |
| [#2008](https://github.com/IgniteUI/igniteui-webcomponents/pull/2008) | Tabs | Take scale factor when positioning the active tab indicator |
| [#2028](https://github.com/IgniteUI/igniteui-webcomponents/pull/2028) | Tabs | Selected indicator alignment |
| [#1828](https://github.com/IgniteUI/igniteui-webcomponents/issues/1828) | Tooltip | Do not show the tooltip when the tooltip target is clicked |
| [#1936](https://github.com/IgniteUI/igniteui-webcomponents/pull/1936) | Tooltip | Removed the max-width constraint for slotted content |

## **25.2.38 (December 2025)**

### Enhancements

### IgniteUI.Blazor

Added OthersCategoryBrush and OthersCategoryOutline to DataPieChart and ProportionalCategoryAngleAxis

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|33808|IgbDataChart|The scale set for IntervalType Ticks in TimeAxisInterval is not displayed|
|34255|IgbDataChart|0.00001 scale tick marks are displayed overlapping each other|
|38510|IgbDataChart|AssigningCategoryStyle event support for Stacked Series|
|41050|IgbDataChart|Axis is not being populated in IgbAxisMouseEventArgs|

### Enhancements

#### Charts

- Added LabelFormatOverride event to TimeXAxisLabelFormat so you can now override the formatting with an event at all time-formatting levels on the TimeXAxis.

- Adjusted the schema generation to account for more items to make it more likely to find valid values for properties.

## **25.2.32 (November 2025)**

**Breaking Changes**

As of the 2025.2 release, we no longer support .NET 6. This corresponds with the [Microsoft .NET Lifecycle, here](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9/overview).

### IgniteUI.Blazor (Charts)

#### <label class="badge badge--preview">PREVIEW</label> User Annotations

In Ignite UI for Blazor, you can now annotate the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) with slice, strip, and point annotations at runtime using the new user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`Toolbar`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=Toolbar).

<img class="responsive-img" src="../images/charts/data-chart-user-annotation-create.gif"
alt="Blazor user-annotation-create"/>

#### <label class="badge badge--preview">PREVIEW</label> Collision Detection for Axis Annotations

Ability for axis annotations to automatically detect collisions and truncate to fit better. To enable this feature you must set the following properties:

- `ShouldAvoidAnnotationCollisions`
- `ShouldAutoTruncateAnnotations`

### IgniteUI.Blazor (Geographic Map)

- Azure Map Imagery is now RTM.

### IgniteUI.Blazor (Grids)

#### **All Grids**

- **Cell Merging**
  - Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell. It can be enabled on the individual columns:

```razor
<IgbColumn Field="field" Merge="true"></IgbColumn>
```

- The merging can be configured on the grid level to apply either:
  - `OnSort` - only when the column is sorted.
  - `Always` - always, regardless of data operations.
        The default [`CellMergeMode`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=CellMergeMode) is `OnSort`.

```razor
<IgbGrid CellMergeMode="GridCellMergeMode.Always">
</IgbGrid>
```

- **Column Pinning**
  - Added ability to pin individual columns to a specific side (start or end of the grid), so that you can now have pinning from both sides. This can be done either declaratively by setting the `PinningPosition` property on the column:

```razor
<IgbColumn Field="Col1" Pinned="true" PinningPosition="ColumnPinningPosition.End">
</IgbColumn>
```

- Or:

```razor
col.PinningPosition = ColumnPinningPosition.End;
col.Pinned = true;

col.PinningPosition = ColumnPinningPosition.Start;
col.Pinned = true;
```

- If property `PinningPosition` is not set on a column, the column will default to the position specified on the grid's pinning options for columns.

- **Sorting and Grouping Improvements**
  - Improved sorting algorithm efficiency using Schwartzian transformation. This is a technique, also known as decorate-sort-undecorate, which avoids recomputing the sort keys by temporarily associating them with the original data records.
  - Refactored sorting algorithms from recursive to iterative.
  - Refactored grouping algorithm from recursive to iterative.
  - Optimized grouping operations.

- **Other Improvements**
  - A column's `MinWidth` and `MaxWidth` constrain the user-specified width so that it cannot go outside their bounds.
  - The [`PagingMode`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=PagingMode) property can now be set as simple strings "local" and "remote" and does not require importing the `GridPagingMode` enum.

### General

#### Added

- [`IgbDateRangePicker`](mcp:get_api_reference?platform=blazor&component=IgbDateRangePicker)

#### Changed

- Updated the readonly styles of most form associated components across all themes to better signify when a component is in a readonly state.
- [`IgbTooltip`](mcp:get_api_reference?platform=blazor&component=IgbTooltip)
  - Behavioral change: [`IgbTooltip`](mcp:get_api_reference?platform=blazor&component=IgbTooltip) default placement is "bottom" now.
  - Behavioral change: [`IgbTooltip`](mcp:get_api_reference?platform=blazor&component=IgbTooltip) will not render an arrow indicator by default unless with-arrow is set.
  - Breaking change: [`IgbTooltip`](mcp:get_api_reference?platform=blazor&component=IgbTooltip) events will no longer return its anchor target in its detail property. You can still access it at event.target.anchor.

#### Deprecated

- [`IgbTooltip`](mcp:get_api_reference?platform=blazor&component=IgbTooltip) - [`DisableArrow`](mcp:get_api_reference?platform=blazor&component=IgbTooltip&member=DisableArrow) is deprecated. Use [`WithArrow`](mcp:get_api_reference?platform=blazor&component=IgbTooltip&member=WithArrow) to render an arrow indicator.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|34960|IgbGrid|Maximum call stack size exceeded error in Blazor Web Application if grid is in a modal dialog|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook|
|40490|IgbDatePicker|Inputs by Autofill won't give any effects for a date picker|

## **25.1.82 (September 2025)**

### IgniteUI.Blazor (Geographic Map)

**Breaking Changes**

- `AzureMapsMapImagery` was renamed to [`IgbAzureMapsImagery`](mcp:get_api_reference?platform=blazor&component=IgbAzureMapsImagery)
- `AzureMapsImageryStyle.Imagery` was renamed to `AzureMapsImageryStyle.Satellite`
- The following `AzureMapsImageryStyle` enum values were renamed to include the Overlay suffix:
  - `TerraOverlay`,
  - `LabelsRoadOverlay`
  - `LabelsDarkGreyOverlay`
  - `HybridRoadOverlay`
  - `HybridDarkGreyOverlay`
  - `WeatherRadarOverlay`
  - `WeatherInfraredOverlay`
  - `TrafficAbsoluteOverlay`
  - `TrafficRelativeOverlay`
  - `TrafficRelativeDarkOverlay`
  - `TrafficDelayOverlay`
  - `TrafficReducedOverlay`

### IgniteUI.Blazor (Charts)

#### <label class="badge badge--preview">PREVIEW</label> New Axis Label Events

The following events have been added to the `DataChart` to allow you to detect different operations on the axis labels:

- `LabelMouseDown`
- `LabelMouseUp`
- `LabelMouseEnter`
- `LabelMouseLeave`
- `LabelMouseMove`
- `LabelMouseClick`

#### <label class="badge badge--preview">PREVIEW</label> Companion Axis

Added `CompanionAxis` properties to the X and Y axis that allow you to quickly create a clone of an existing axis. When enabled using the `CompanionAxisEnabled` property, this will default the cloned axis to the opposite position of the chart and you can then configure that axes' properties.

#### <label class="badge badge--preview">PREVIEW</label> RadialPieSeries Inset Outlines

There is a new property called `UseInsetOutlines` to control how outlines on the [`IgbRadialPieSeries`](mcp:get_api_reference?platform=blazor&component=IgbRadialPieSeries) are rendered. Setting this value to **true** will inset the outlines within the slice shape, whereas a **false** (default) value will place the outlines half-in half-out along the edge of the slice shape.

**Breaking Changes**

- A fix was made due to an issue where the `PlotAreaPosition` and `ChartPosition` properties on [`IgbChartMouseEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbChartMouseEventArgs) class were reversed. This will change the values that [`PlotAreaPosition`](mcp:get_api_reference?platform=blazor&component=IgbChartMouseEventArgs&member=PlotAreaPosition) and [`ChartPosition`](mcp:get_api_reference?platform=blazor&component=IgbChartMouseEventArgs&member=ChartPosition) return.

### IgniteUI.Blazor (Grids)

#### <label class="badge badge--preview">PREVIEW</label> Cell Suffix Content

Added support for suffix content within the cells that allows you to add additional text or icons to the end of the cell value and style it. The full list of added properties for the cell suffix content is listed below and is available on the [`IgbDataGridColumn`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn) and `CellInfo` class:

- [`SuffixText`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixText)
- [`SuffixTextColor`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixTextColor)
- `SuffixTextFont`
- [`SuffixIconName`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconName)
- [`SuffixIconCollectionName`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconCollectionName)
- [`SuffixIconStroke`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconStroke)
- [`SuffixIconFill`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconFill)
- [`SuffixIconViewBoxLeft`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconViewBoxLeft)
- [`SuffixIconViewBoxTop`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconViewBoxTop)
- [`SuffixIconViewBoxWidth`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconViewBoxWidth)
- [`SuffixIconViewBoxHeight`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=SuffixIconViewBoxHeight)
- [`TextDecoration`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn&member=TextDecoration)

Please note that the maximum size available for the icons is 24x24. You can provide an icon that is larger or smaller than this, but you will need to configure the viewbox settings in order to properly scale it to fit in the 24x24 space so it is fully visible.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|31624 | [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) | Resizing the containing window of the [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) causes the chart to fail to render the series|
|37307 | `CheckBox` | JS Heap, Nodes, and Listeners leakage on IgbCheckBox|
|37930 | `DataChart` | Data Annotation Overlay Text Color not working|
|27304 | `DataChart` | Zoom rectangle is not positioned the same as the background rectangle|
|30600 | `DoughnutChart` | No textStyle property for either the chart or series (pie chart has this)|
|38231 | `Grid` | Unpinned column does not return to the original position if hidden columns exist|
|33861 | Excel Library | Adding line chart corrupts excel File for German culture|

### Enhancements

#### IgbBulletGraph

- <label class="badge badge--preview">PREVIEW</label> Added new `LabelsVisible` property

#### Charts

- New properties added to the DataToolTipLayer, ItemToolTipLayer, and CategoryToolTipLayer to aid in styling: `ToolTipBackground`, `ToolTipBorderBrush`, and `ToolTipBorderThickness`

- New properties added to the DataLegend to aid in styling: `ContentBackground`, `ContentBorderBrush`, and `ContentBorderThickness`. The `ContentBorderBrush` and `ContentBorderThickness` default to transparent and 0 respectively, so in order to see these borders, you will need to set these properties.

- Added a new property to [`IgbChartMouseEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbChartMouseEventArgs) called [`WorldPosition`](mcp:get_api_reference?platform=blazor&component=IgbChartMouseEventArgs&member=WorldPosition) that provides the world relative position of the mouse. This position will be a value between 0 and 1 for both the X and Y axis within the axis space.

- Added [`HighlightingFadeOpacity`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=HighlightingFadeOpacity) to [`IgbSeriesViewer`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer) and [`IgbDomainChart`](mcp:get_api_reference?platform=blazor&component=IgbDomainChart). This allows you to configure the opacity applied to highlighted series.

#### IgbDataGrid

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

#### IgbLinearGauge

- <label class="badge badge--preview">PREVIEW</label> Added new `LabelsVisible` property

## **25.1.63 (August 2025)**

### IgniteUI.Blazor (Geographic Map)

#### <label class="badge badge--preview">PREVIEW</label> Azure Map Imagery Support

The `GeographicMap` now supports Azure-based map imagery, allowing developers to display detailed, dynamic maps across multiple application types. You can combine multiple map layers, visualize geographic data, and create interactive mapping experiences with ease.

Note: Support for Bing Maps imagery is being phased out. Existing enterprise keys can still be used to access Bing Maps, ensuring your current applications continue to function while you transition to Azure maps.

Explore some of the publicly available [Azure maps here](https://azure.microsoft.com/en-us/products/azure-maps).

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|26952 | [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs) | e.Detail is null in Change event in Razor/JS|
|26953 | [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs) | Marking a tab selected won't apply on subsequent attempts|
|31910 | `XDatePicker` | An error will happen when I bind a value using the "@bind-Value" syntax and click the clear button|
|31323 | `DataChart`, `Grid`, [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbCombo) | A NullReferenceException happens when the data type has a collection-type property, and the 1st element of that collection is null|
|38903 | [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs) | Dropdown list is not displaying in the correct location for components inside the tab|
|[139](https://github.com/IgniteUI/igniteui-blazor/issues/139) | `DatePicker`, [`IgbDateTimeInput`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput) | Date picker and data time input do not support nullable values|

### General

The following properties of these components are now nullable:

- [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton): `Form`
- [`IgbCalendar`](mcp:get_api_reference?platform=blazor&component=IgbCalendar): `SpecialDates`, `DisabledDates`
- [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbCombo): [`ValueKey`](mcp:get_api_reference?platform=blazor&component=IgbCombo&member=ValueKey), [`DisplayKey`](mcp:get_api_reference?platform=blazor&component=IgbCombo&member=DisplayKey), [`GroupKey`](mcp:get_api_reference?platform=blazor&component=IgbCombo&member=GroupKey)
- `DatePicker`: [`Value`](mcp:get_api_reference?platform=blazor&component=IgbCombo&member=Value), `Min`, `Max`
- `DateTimePicker`: [`Value`](mcp:get_api_reference?platform=blazor&component=IgbCombo&member=Value), `Min`, `Max`
- [`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown): [`SelectedItem`](mcp:get_api_reference?platform=blazor&component=IgbDropdown&member=SelectedItem)
- [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput): [`Pattern`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Pattern), [`MinLength`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=MinLength), [`MaxLength`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=MaxLength), [`Min`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Min), [`Max`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Max), [`Step`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Step)
- [`Select`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Select): [`Value`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Value), `SelectedItem`
- [`IgbTile`](mcp:get_api_reference?platform=blazor&component=IgbTile): [`ColStart`](mcp:get_api_reference?platform=blazor&component=IgbTile&member=ColStart), [`RowStart`](mcp:get_api_reference?platform=blazor&component=IgbTile&member=RowStart)
- [`IgbTileManager`](mcp:get_api_reference?platform=blazor&component=IgbTileManager): [`MinColumnWidth`](mcp:get_api_reference?platform=blazor&component=IgbTileManager&member=MinColumnWidth), [`MinRowHeight`](mcp:get_api_reference?platform=blazor&component=IgbTileManager&member=MinRowHeight), [`Gap`](mcp:get_api_reference?platform=blazor&component=IgbTileManager&member=Gap)

## **25.1.46 (July 2025)**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36448 | `RadialGauge` | Radial label format properties do not work. (eg. Title, SubTitles)|
|37718 | [`IgbTab`](mcp:get_api_reference?platform=blazor&component=IgbTab) | Unexpected scrolling occurred when a new row was added to a grid that is in a tab panel|
|37855 | `Grid` | Crypto.randomUID not found error is thrown if a grid contains HeaderTemplate and the page is accessed using unsecured(http) protocol|

### IgniteUI.Blazor (Charts)

- Added <label class="badge badge--new">NEW</label> `MaximumExtent` and `MaximumExtentPercentage` properties for use with axis labels.

## **25.1.19 (June 2025)**

### IgniteUI.Blazor (Geographic Map)

> [!Note]
> As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.
> For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

### IgniteUI.Blazor (Charts)

- Added <label class="badge badge--preview">PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) layers:
  - Data Annotation Band Layer
  - Data Annotation Line Layer
  - Data Annotation Rect Layer
  - Data Annotation Slice Layer
  - Data Annotation Strip Layer

- The [Data Tooltip](charts/features/chart-data-tooltip.md) and [Data Legend](charts/features/chart-data-legend.md) expose <label class="badge badge--preview">PREVIEW</label> `LayoutMode` property that you can use to layout the contents of the tooltip or legend in a table or vertical layout structure.

- <label class="badge badge--preview">PREVIEW</label> The [`DefaultInteraction`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=DefaultInteraction) property of the charts has been updated to include a new enumeration - `DragSelect` in which the dragged preview Rect will select the points contained within.

- <label class="badge badge--preview">PREVIEW</label> The [ValueOverlay and ValueLayer](charts/features/chart-overlays.md), in addition to the <label class="badge badge--preview">PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) listed above now expose an `OverlayText` property that can be used to overlay additional annotation text in the plot area. These appearance of these annotations can be configured by using the many OverlayText-prefixed properties. For example, the `OverlayTextBrush` property will configure the color of the overlay text.

- <label class="badge badge--new">NEW</label> [Trendline Layer](charts/features/chart-trendlines.md) series type that allows you to apply a single trend line per trend line layer to a particular series. This allows the usage of multiple trend lines on a single series since you can have multiple [TrendlineLayer](charts/features/chart-overlays.md) series types in the chart.

### General

- <label class="badge badge--new">NEW</label> [`IgbTooltip`](mcp:get_api_reference?platform=blazor&component=IgbTooltip) component provides a way to display a tooltip for a specific element. To use, set content as desired and link via the [`Anchor`](mcp:get_api_reference?platform=blazor&component=IgbTooltip&member=Anchor) property to the target element's id:
    ```razor
    <IgbButton id="target-button">Hover me</IgbButton>
    <IgbTooltip Anchor="target-button">
        You've hovered the button! 🎉
    </IgbTooltip>
    ```
    The tooltip can be further customized with `Show/HideDelay`, [`Placement`](mcp:get_api_reference?platform=blazor&component=IgbTooltip&member=Placement) around the target and customizable `Show/HideTriggers` events.

### Changes

- A number of enumerations have been renamed and/or merged with others. Renames (with affected components):
  - `BaseAlertLikePosition` ([`IgbSnackbar`](mcp:get_api_reference?platform=blazor&component=IgbSnackbar) and [`IgbToast`](mcp:get_api_reference?platform=blazor&component=IgbToast)) has been renamed to `AbsolutePosition`
  - `ButtonGroupAlignment` ([`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup)), `CalendarOrientation` ([`IgbCalendar`](mcp:get_api_reference?platform=blazor&component=IgbCalendar)), `CardActionsOrientation` ([`IgbCardActions`](mcp:get_api_reference?platform=blazor&component=IgbCardActions)), `DatePickerOrientation` (`DatePicker`), `RadioGroupAlignment` ([`IgbRadioGroup`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup)) have been merged and renamed to `ContentOrientation`
  - `CalendarBaseSelection` ([`IgbCalendar`](mcp:get_api_reference?platform=blazor&component=IgbCalendar)) has been renamed to `CalendarSelection`
  - `CarouselAnimationType` ([`IgbCarousel`](mcp:get_api_reference?platform=blazor&component=IgbCarousel)) and `StepperHorizontalAnimation` ([`IgbStepper`](mcp:get_api_reference?platform=blazor&component=IgbStepper)) have been merged and renamed to `HorizontalTransitionAnimation`
  - `CheckboxBaseLabelPosition` ([`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox) and [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch)) and `RadioLabelPosition` ([`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio)) have been merged and renamed to `ToggleLabelPosition`
  - `DatePickerMode` (`DatePicker`) has been renamed to `PickerMode`
  - `DatePickerHeaderOrientation` (`DatePicker`) has been renamed to/merged with `CalendarHeaderOrientation`
  - `DropdownPlacement` ([`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown) and [`Select`](mcp:get_api_reference?platform=blazor&component=IgbDropdown&member=Select)) has been renamed to `PopoverPlacement`
  - `DropdownScrollStrategy` ([`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown)) and `SelectScrollStrategy` ([`Select`](mcp:get_api_reference?platform=blazor&component=IgbDropdown&member=Select)) have been merged and renamed to `PopoverScrollStrategy`
  - `SliderBaseTickOrientation` ([`IgbSlider`](mcp:get_api_reference?platform=blazor&component=IgbSlider) and [`IgbRangeSlider`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider)) has been renamed to `SliderTickOrientation`
  - `TickLabelRotation` ([`IgbSlider`](mcp:get_api_reference?platform=blazor&component=IgbSlider) and [`IgbRangeSlider`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider)) has been renamed to `SliderTickLabelRotation`
- [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs)

    Simplified configuration by removing the need to define separate panel and linking the panel and tab header. The `Panel` property and the `TabPanel` itself have been removed. Content can be now assigned directly to the [`IgbTab`](mcp:get_api_reference?platform=blazor&component=IgbTab) and header text can be set conveniently via the new [`Label`](mcp:get_api_reference?platform=blazor&component=IgbTab&member=Label) property or by projecting an element to `slot="label"` for more involved customization.
    Before:

    ```razor
    <IgbTabs Alignment=@TabAlignment>
        <IgbTab Panel="basics">Basics</IgbTab>
        <IgbTab Panel="details">Details</IgbTab>
        <IgbTab Panel="favorite">
            <IgbIcon IconName="favorite" Collection="material"/>
        </IgbTab>
        <IgbTab Panel="disabled" Disabled=true>Disabled</IgbTab>
        <IgbTabPanel id="basics">Basics tab content</IgbTabPanel>
        <IgbTabPanel id="details">Details tab content</IgbTabPanel>
        <IgbTabPanel id="favorite">Favorite tab content</IgbTabPanel>
        <IgbTabPanel id="disabled">Disabled tab content will not be displayed</IgbTabPanel>
    </IgbTabs>
    ```

    After:

    ```razor
    <IgbTabs Alignment=@TabAlignment>
        <IgbTab Label="Basics">
            Basics tab content
        </IgbTab>
        <IgbTab Label="Details">
            Details tab content
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="label" IconName="favorite" Collection="material"/>
            Favorite tab content
        </IgbTab>
        <IgbTab Disabled="true" Label="Disabled">
            Disabled tab content will not be displayed
        </IgbTab>
    </IgbTabs>
    ```
- [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput)
  - [`Min`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Min) & [`Max`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=Max) are now `double` instead of `string`
- [`IgbStepper`](mcp:get_api_reference?platform=blazor&component=IgbStepper)
  - `ActiveStepChangingArgsEventArgs` has been renamed to [`IgbActiveStepChangingEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbActiveStepChangingEventArgs)
  - `ActiveStepChangedArgsEventArgs` has been renamed to [`IgbActiveStepChangedEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbActiveStepChangedEventArgs)
  - `StepperTitlePosition` now defaults to `Auto` to correctly reflect the default behavior
- [`IgbTree`](mcp:get_api_reference?platform=blazor&component=IgbTree)
  - `TreeSelectionChangeEventArgs` has been renamed to [`IgbTreeSelectionEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbTreeSelectionEventArgs)
- [`IgbTextarea`](mcp:get_api_reference?platform=blazor&component=IgbTextarea)
  - [`Autocapitalize`](mcp:get_api_reference?platform=blazor&component=IgbTextarea&member=Autocapitalize) & [`InputMode`](mcp:get_api_reference?platform=blazor&component=IgbTextarea&member=InputMode) are now `string` properties instead of explicit enums

### IgniteUI.Blazor (Grids)

- [`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)
  - Added events: `HiddenChange`, `ExpandedChange`, `WidthChange`, `PinnedChange`
- `Grid`
  - Added events: `GroupingExpressionsChange`, `GroupingExpansionStateChange`
- [`IgbRowIsland`](mcp:get_api_reference?platform=blazor&component=IgbRowIsland)
  - Added new parameter `ParentRowData` in [`IgbGridCreatedEventArgsDetail`](mcp:get_api_reference?platform=blazor&component=IgbGridCreatedEventArgsDetail) args for `GridCreated` event
- [`Grid`](mcp:get_api_reference?platform=blazor&component=IgbGridCreatedEventArgsDetail&member=Grid), [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid), [`IgbTreeGrid`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid)
  - Added property - `ExpansionStates` - represents a list of key-value pairs \[row ID, expansion state].
  - Added event: `ExpansionStatesChange`
  - Type of `Rendered` event is changed from `VoidHandler` to `ComponentBoolValueChangedEventHandler`
  - Type of DataChanging event is changed from `ForOfDataChangingEventHandler` to `ForOfDataChangeEventHandler`
  - Type of DataChanged event is changed from `VoidHandler` to `ForOfDataChangeEventHandler`
- [`IgbPivotDataSelector`](mcp:get_api_reference?platform=blazor&component=IgbPivotDataSelector)
  - Added events: `ColumnsExpandedChange`, `RowsExpandedChange`, `FiltersExpandedChange`, `ValuesExpandedChange`

### IgniteUI.Blazor (Dashboards)

- The [`IgbDashboardTile`](mcp:get_api_reference?platform=blazor&component=IgbDashboardTile) now supports propagating the aggregations from its DataGrid view to the chart visualization such as sorting, grouping, filtering and selection. This is currently supported by binding the `DataSource` of the [`IgbDashboardTile`](mcp:get_api_reference?platform=blazor&component=IgbDashboardTile) to an instance of [`IgbLocalDataSource`](mcp:get_api_reference?platform=blazor&component=IgbLocalDataSource).

### Enhancements

#### Toolbar

- Value layers added from the toolbar now appear on the legend.
- The zoom reset tool has been moved to the zoom drop-down.

#### Data Pie Chart

- The chart now exposes a `GetOthersContext()` method. This will return the contents of the "others" slice.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25997 | `DataGrid` | Summaries are only showing for first grouped child row|
|37023 | `DataChart` | Tooltips are cut-off/offscreen if overflow hidden is set.|
|37244 | Excel Library | Custom Data Validation is not working|

## **24.2.122 (May 2025)**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|37271 | [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) | ParentRowData included to IGridCreatedEventArgs|
|37681 | `DataChart` | Category Chart - values labels are should appear above columns when there is adequate space|
|37244 | Excel Library | Custom Data Validation is not working|

## **24.2.111 (April 2025)**

### New Components

- IgbTileManager

### Enhancements

#### List

- Added new property on [`IgbListItem`](mcp:get_api_reference?platform=blazor&component=IgbListItem) called [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbListItem&member=Selected)

#### Accordion

- Added new events `Open` and `Close`

### IgniteUI.Blazor

- **All Grids**
  - Allow applying initial filtering through [`FilteringExpressionsTree`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=FilteringExpressionsTree) property

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25602 | `DataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
|28480 | [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbCombo) | Undefined reference error is thrown when a datasource is replaced|
|32598 | `DataGrid` | Multi-selection is not working correctly
|36374 | [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput) | A previous value was bound when a form was submitted on any touch device|
|37214|General|Intermittent error in Blazor's WebCallback.Register()

## **24.2.92 (March 2025)**

### IgniteUI.Blazor

- **All Grids**
  - Added new `DisabledSummaries` for the columns of the grid, allowing the developers to skip some of the summaries
  - Encapsulate internal grid action button

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|35497 | [`IgbDialog`](mcp:get_api_reference?platform=blazor&component=IgbDialog) | When ShowAsync and HideAsync Are Called, the Subsequent Code Is Not Executed|

## **24.2.85 (February 2025)**

### Enhancements

#### Toolbar

- Added new `GroupHeaderTextStyle` property to [`Toolbar`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=Toolbar) and [`IgbToolPanel`](mcp:get_api_reference?platform=blazor&component=IgbToolPanel). If set, it will apply to all [`IgbToolActionGroupHeader`](mcp:get_api_reference?platform=blazor&component=IgbToolActionGroupHeader) actions.
- Added new property on [`IgbToolAction`](mcp:get_api_reference?platform=blazor&component=IgbToolAction) called [`TitleHorizontalAlignment`](mcp:get_api_reference?platform=blazor&component=IgbToolAction&member=TitleHorizontalAlignment) which controls the horizontal alignment of the title text.
- Added new property on [`IgbToolActionSubPanel`](mcp:get_api_reference?platform=blazor&component=IgbToolActionSubPanel) called [`ItemSpacing`](mcp:get_api_reference?platform=blazor&component=IgbToolActionSubPanel&member=ItemSpacing) which controls the spacing between items inside the panel.

### Bug Fixes

The following table lists the bug fixes made for the Ignite UI for Blazor toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|29998 | [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbCombo) | The Change event callback was fired multiple times in .NET 8|
|30286 | `DataChart` | Bubble Series tooltip content is switched to that of nearby bubble data in clicking a bubble|
|34776 | `DataChart` | Repeatedly showing and hiding the IgbDataChart causes memory leakage in JS Heap|
|32906 | `DataChart` | IgbDataChart is showing two xAxis on the top|
|33605 | `DataChart` | ScatterLineSeries is not showing the color of the line correctly in the legend|
|35498 | `DataChart` | Tooltips for the series specified in IncludedSeries are not displayed|
|31344 | `Grid` | Two way binding for the SelectedRows doesn't work|
|34149 | `Grid` | Repeatedly showing and hiding the IgbGrid causes memory leakage in JS Heap|
|34224 | `Grid` | 'There are multiple .NET runtimes present' error is thrown when the app changes from Server mode to WebAssembly mode if 'InteractiveAuto' is used for the render mode|
|34654 | `Grid` | NullReferenceException is thrown if a data contains an empty list|
|35439 | `Grid` | CPU usage and Memory consumption are abnormally high when the app is opened in multiple tabs|
|36024 | `Grid` | The JS heap size never reduced when moving back and forth between two pages with IgbGrid component|
|34053 | `RadialGauge` | The position of the scale label is shifted|
|36176 | Excel Library | Exception occurs when loading an Excel workbook that has a LET function|
|36379 | Excel Library | Colors with any alpha channel in an excel workbook fail to load|
|26218 | Excel Library | Chart's plot area right margin becomes narrower and fill pattern and fill foreground are gone just by loading an Excel file|
|34083 | Excel Library | TextOperatorConditionalFormat's is not loaded/saved properly if the text contains = in a template Excel file|
|35495 | Excel Library | Pictures in cells are lost when a template file is loaded|

## **24.2.71 (January 2025)**

- Bug Fixes

### IgniteUI.Blazor

- **All Grids**
  - Fixed a critical memory leak when components are opened in several duplicate browser tabs.

## **24.2.52 (December 2024)**

### IgniteUI.Blazor (Charts)

- <label class="badge badge--preview">PREVIEW</label> [Dashboard Tile](dashboard-tile.md) component is a container control that analyzes and visualizes a bound ItemsSource collection or single point and returns an appropriate data visualization based on the schema and count of the data. This control utilizes a built-in [Toolbar](menus/toolbar.md) component to allow you to make changes to the visualization at runtime, allowing you to see many different visualizations of your data with minimal code.

### IgniteUI.Blazor (Inputs)

- <label class="badge badge--preview">PREVIEW</label> [Color Editor](inputs/color-editor.md) can be used as a standalone color picker and is now integrated into <label class="badge badge--preview">PREVIEW</label> ToolAction of [Toolbar](menus/toolbar.md) component to update visualizations at runtime.

**Breaking Changes**

- With the release of version 2024.2 and per the [Microsoft .NET lifecycle](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core), we no longer support .NET 3.1, .NET 5, or .NET 7.

## **24.2.19 (November 2024)**

### General

- New [Carousel](layouts/carousel.md) component.
- [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput)
  - Changed `change` event argument type from [`IgbComponentDataValueChangedEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbComponentDataValueChangedEventArgs) to [`IgbComponentValueChangedEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbComponentValueChangedEventArgs)

## **24.1.46 (September 2024)**

### IgniteUI.Blazor (Charts)

- New [Data Pie Chart](charts/types/data-pie-chart.md) - The [`IgbDataPieChart`](mcp:get_api_reference?platform=blazor&component=IgbDataPieChart) is a new component that renders a pie chart. This component works similarly to the [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart), in that it will automatically detect the properties on your underlying data model while allowing selection, highlighting, animation and legend support via the ItemLegend component.

- New [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart), to plot slices similar to a pie chart, a type of data visualization where data points are represented as segments within a circular graph.

- [`Toolbar`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=Toolbar)

  - New ToolActionCheckboxList
        A new CheckboxList ToolAction that displays a collection of items with checkboxes for selecting. A grid inside ToolAction CheckboxList grows in height up to 5 items, then a scrollbar is displayed.
        Requires IgbCheckboxListModule to be registered.

  - New Filtering Support

  - Axis Field Changes
        New default IconMenu in Toolbar when targeting CategoryChart.
        Label fields are mapped to the X-axis and Value fields are mapped to the Y-axis.
        Target chart reacts in realtime to changes made. IconMenu is hidden when chart has no ItemsSource set.

### General

- New [Banner](notifications/banner.md) component.
- New [DatePicker](scheduling/date-picker.md) component.
- New [`IgbDivider`](mcp:get_api_reference?platform=blazor&component=IgbDivider) component.
- [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon)
  - Added [`SetIconRef`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=SetIconRef) method. This allows to register and replace icons by SVG files.
  - All components now use icons by reference internally so that it's easy to replace them without explicitly providing custom templates.
- [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbCombo), `DatePicker`, [`IgbDialog`](mcp:get_api_reference?platform=blazor&component=IgbDialog), [`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown),  [`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel), [`IgbNavDrawer`](mcp:get_api_reference?platform=blazor&component=IgbNavDrawer), [`IgbToast`](mcp:get_api_reference?platform=blazor&component=IgbToast), [`IgbSnackbar`](mcp:get_api_reference?platform=blazor&component=IgbSnackbar), **IgbSelectComponent**
  - Toggle methods `Show`, `Hide`, `Toggle` methods return **true** now on success. Otherwise **false**.
- [`IgbRadioGroup`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup)
  - Added `Name` and [`Value`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup&member=Value) properties. [`Value`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup&member=Value) also supports two-way binding.

**Breaking Changes**

- Renamed old **IgbDatePicker** to **IgbXDatePicker**.
- Removed `Form` component. Use native form instead.
- Removed `size` property in favor of the `--ig-size` CSS custom property for the following components:
  - [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar), [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton),[`IgbIconButton`](mcp:get_api_reference?platform=blazor&component=IgbIconButton), [`IgbCalendar`](mcp:get_api_reference?platform=blazor&component=IgbCalendar), [`IgbChip`](mcp:get_api_reference?platform=blazor&component=IgbChip), [`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown), [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon), [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput), [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList), [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating), [`IgbSnackbar`](mcp:get_api_reference?platform=blazor&component=IgbSnackbar), [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs), [`IgbTree`](mcp:get_api_reference?platform=blazor&component=IgbTree)
- [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge), [`IgbChip`](mcp:get_api_reference?platform=blazor&component=IgbChip), [`IgbLinearProgress`](mcp:get_api_reference?platform=blazor&component=IgbLinearProgress), [`IgbCircularProgress`](mcp:get_api_reference?platform=blazor&component=IgbCircularProgress)
  - Renamed `Variant` property type to `StyleVariant`.
- [`IgbCalendar`](mcp:get_api_reference?platform=blazor&component=IgbCalendar)
  - Renamed `WeekStart` property type to `WeekDays`.
- [`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox), [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch)
  - Changed `Change` event argument type from [`IgbComponentBoolValueChangedEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbComponentBoolValueChangedEventArgs) to [`IgbCheckboxChangeEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbCheckboxChangeEventArgs).
- [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbCombo)
  - The [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbCombo) is now of generic type and the [`Value`](mcp:get_api_reference?platform=blazor&component=IgbCombo&member=Value) type is now of type `T[]`. This means that either you need to specify `T` or it will be inferred by the assigned [`Value`](mcp:get_api_reference?platform=blazor&component=IgbCombo&member=Value) type.
  - Removed [`IgbPositionStrategy`](mcp:get_api_reference?platform=blazor&component=IgbPositionStrategy), `Flip`, `SameWidth` properties.
- **IgbSelectComponent**
  - Removed [`IgbPositionStrategy`](mcp:get_api_reference?platform=blazor&component=IgbPositionStrategy), `Flip`, `SameWidth` properties.
- [`IgbDateTimeInput`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput)
  - Removed `MaxValue` and `MinValue` properties. Use [`Max`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput&member=Max) and [`Min`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput&member=Min) instead.
- [`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown)
  - Removed [`IgbPositionStrategy`](mcp:get_api_reference?platform=blazor&component=IgbPositionStrategy) property.
- [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput)
  - Removed old named `Maxlength` and `Minlength` properties. Use [`MaxLength`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=MaxLength) and [`MinLength`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=MinLength).
  - Removed old named `Readonly` and `Inputmode` properties. Use [`ReadOnly`](mcp:get_api_reference?platform=blazor&component=IgbMaskInput&member=ReadOnly) and [`InputMode`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=InputMode).
  - Changed [`InputMode`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=InputMode) type also to `string`.
- [`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio)
  - Changed `Change` event argument type from [`IgbComponentBoolValueChangedEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbComponentBoolValueChangedEventArgs) to [`IgbRadioChangeEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbRadioChangeEventArgs).
- [`IgbRangeSlider`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider)
  - Removed `AriaThumbLower` and `AriaThumbUpper` properties. Use [`ThumbLabelLower`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider&member=ThumbLabelLower) and [`ThumbLabelUpper`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider&member=ThumbLabelUpper) instead.
- [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating)
  - Renamed `Readonly` property to [`ReadOnly`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=ReadOnly).

### IgniteUI.Blazor

- **All Grids**
  - Added `GetColumns` / `GetColumnsAsync` methods, which return the grid columns collection.
  - Added new `RowClick` event.
- [`IgbPivotGrid`](mcp:get_api_reference?platform=blazor&component=IgbPivotGrid)
  - Added `Sortable` property for a [`IgbPivotDimension`](mcp:get_api_reference?platform=blazor&component=IgbPivotDimension).
  - Added horizontal layout. Can be enabled inside the new `PivotUI` property as `RowLayout` `Horizontal`.
  - Added row dimension summaries for horizontal layout only. Can be enabled for each [`IgbPivotDimension`](mcp:get_api_reference?platform=blazor&component=IgbPivotDimension) by setting [`HorizontalSummary`](mcp:get_api_reference?platform=blazor&component=IgbPivotDimension&member=HorizontalSummary) to **true**.
  - Added `HorizontalSummariesPosition` property to the `PivotUI`, configuring horizontal summaries position.
  - Added row headers for the row dimensions. Can be enabled inside the new `PivotUI` property as `ShowHeaders` **true**.
  - Keyboard navigation now can move in to row headers back and forth from any row dimension headers or column headers.
  - Added keyboard interactions for row dimension collapse using <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> arrows and row headers sorting using <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> arrows.

**Breaking Changes**

- **All Grids**
  - [`IgbRowIsland`](mcp:get_api_reference?platform=blazor&component=IgbRowIsland)
  - Removed `DisplayDensity` deprecated property.
  - Renamed [`Columns`](mcp:get_api_reference?platform=blazor&component=IgbRowIsland&member=Columns), `ActualColumns`, `ContentColumns` properties to [`ColumnList`](mcp:get_api_reference?platform=blazor&component=IgbRowIsland&member=ColumnList), [`ActualColumnList`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=ActualColumnList) and `ContentColumnList`. Recommended to use the new `GetColumns` method instead.
  - Renamed `RowDelete` and `RowAdd` event argument type to [`IgbRowDataCancelableEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbRowDataCancelableEventArgs).
  - Renamed `ContextMenu` event argument type to [`IgbGridContextMenuEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridContextMenuEventArgs).
  - Removed [`IgbGridEditEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditEventArgs),  [`IgbGridEditDoneEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditDoneEventArgs), [`IgbPinRowEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbPinRowEventArgs) events `RowID` and [`PrimaryKey`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=PrimaryKey) properties. Use `RowKey` instead.
- [`IgbPivotGrid`](mcp:get_api_reference?platform=blazor&component=IgbPivotGrid)
  - removed `ShowPivotConfigurationUI` property. Use [`PivotUI`](mcp:get_api_reference?platform=blazor&component=IgbPivotGrid&member=PivotUI) and set inside it the new `ShowConfiguration` option.
- [`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)
  - Removed `Movable` property. Use Grid's [`Moving`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=Moving) property now.
  - Removed `ColumnChildren` property. Use [`ChildColumns`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=ChildColumns) instead.
- [`IgbColumnGroup`](mcp:get_api_reference?platform=blazor&component=IgbColumnGroup)
  - Removed [`Children`](mcp:get_api_reference?platform=blazor&component=IgbColumnGroup&member=Children) property. Use `ChildColumns` instead.
- [`IgbPaginator`](mcp:get_api_reference?platform=blazor&component=IgbPaginator)
  - Removed `IsFirstPageDisabled` and `IsLastPageDisabled` properties. Use [`IsFirstPage`](mcp:get_api_reference?platform=blazor&component=IgbPaginator&member=IsFirstPage) and [`IsLastPage`](mcp:get_api_reference?platform=blazor&component=IgbPaginator&member=IsLastPage) instead.

## **23.2.257 (June 2024)**

### General

- [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput), [`IgbTextarea`](mcp:get_api_reference?platform=blazor&component=IgbTextarea) - exposed [`ValidateOnly`](mcp:get_api_reference?platform=blazor&component=IgbTextarea&member=ValidateOnly) to enable validation rules being enforced without restricting user input.
- [`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown) - [`IgbPositionStrategy`](mcp:get_api_reference?platform=blazor&component=IgbPositionStrategy) property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- [`IgbDockManager`](mcp:get_api_reference?platform=blazor&component=IgbDockManager) - [`IgbSplitPane`](mcp:get_api_reference?platform=blazor&component=IgbSplitPane) [`IsMaximized`](mcp:get_api_reference?platform=blazor&component=IgbSplitPane&member=IsMaximized) is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the [`IsMaximized`](mcp:get_api_reference?platform=blazor&component=IgbSplitPane&member=IsMaximized) property of [`IgbTabGroupPane`](mcp:get_api_reference?platform=blazor&component=IgbTabGroupPane) and/or [`IgbContentPane`](mcp:get_api_reference?platform=blazor&component=IgbContentPane) instead.

### IgniteUI.Blazor

- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](grids/grid/size.md) topic for more.
- [`IgbPivotGrid`](mcp:get_api_reference?platform=blazor&component=IgbPivotGrid) - The type of Columns, Rows, Filters from [`PivotConfiguration`](mcp:get_api_reference?platform=blazor&component=IgbPivotGrid&member=PivotConfiguration) option is now array of IgbPivotDimension - `PivotDimension[]`, it was `PivotDimensionCollection` previously.

The type of Values from [`PivotConfiguration`](mcp:get_api_reference?platform=blazor&component=IgbPivotGrid&member=PivotConfiguration) option is now array of IgbPivotValue - `PivotValue[]`, it was `PivotValueCollection` previously.

### IgniteUI.Blazor (Charts)

- [Data Legend Grouping](charts/features/chart-data-legend.md#blazor-data-legend-grouping) & [Data Tooltip Grouping](charts/features/chart-data-tooltip.md#blazor-data-tooltip-grouping-for-data-chart) - New grouping feature added. The property `GroupRowVisible` toggles grouping with each series opting in can assign group text via the [`DataLegendGroup`](mcp:get_api_reference?platform=blazor&component=IgbCrosshairLayer&member=DataLegendGroup) property. If the same value is applied to more than one series then they will appear grouped. Useful for large datasets that need to be categorized and organized for all users.

- [Chart Selection](charts/features/chart-data-selection.md) - New series selection styling. This is adopted broadly across all category, financial and radial series for [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) and [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart). Series can be clicked and shown a different color, brightened or faded, and focus outlines. Manage which items are effected through individual series or entire data item. Multiple series and markers are supported. Useful for illustrating various differences or similarities between values of a particular data item. Also  `SelectedSeriesItemsChanged` event and [`SelectedSeriesItems`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=SelectedSeriesItems) are available for additional help to build out robust business requirements surrounding other actions that can take place within an application such as a popup or other screen with data analysis based on the selection.

- [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart), to enable creating pie charts in the allowing robust visualizations using all the added power of the data chart.

- [Treemap Highlighting](charts/types/treemap-chart.md#blazor-treemap-highlighting) - Now exposes a [`HighlightingMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=HighlightingMode) property that allows you to configure the mouse-over highlighting of the items in the tree map. This property takes two options: `Brighten` where the highlight will apply to the item that you hover the mouse over only, and `FadeOthers` where the highlight of the hovered item will remain the same, but everything else will fade out. This highlight is animated, and can be controlled using the [`HighlightingTransitionDuration`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=HighlightingTransitionDuration) property.

- [Treemap Percent-based Highlighting](charts/types/treemap-chart.md#blazor-treemap-percent-based-highlighting) - New percent-based highlighting, allowing nodes to represent progress or subset of a collection. The appearance is shown as a fill-in of its backcolor up to a specific value either by a member on your data item or by supplying a new [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=HighlightedDataSource). Can be toggled via [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=HighlightedValuesDisplayMode) and styled via `FillBrushes`.

- [`Toolbar`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=Toolbar) - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

### IgniteUI.Blazor (Gauges)

- [`IgbRadialGauge`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge)
  - New label for the highlight needle. [`HighlightLabelText`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=HighlightLabelText) and [`HighlightLabelSnapsToNeedlePivot`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=HighlightLabelSnapsToNeedlePivot) and many other styling related properties for the HighlightLabel were added.

## **23.2.204 (March 2024)**

### IgniteUI.Blazor (Charts)

Data Filtering via the [`InitialFilter`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=InitialFilter) property. Apply filter expressions to filter the chart data to a subset of records. Can be used for drill down large data.

- [`IgbBulletGraph`](mcp:get_api_reference?platform=blazor&component=IgbBulletGraph)
  - The Performance bar will now reflect a difference between the value and new [`HighlightValue`](mcp:get_api_reference?platform=blazor&component=IgbBulletGraph&member=HighlightValue) when the [`HighlightValueDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbBulletGraph&member=HighlightValueDisplayMode) is applied to the 'Overlay' setting. The highlight value will show a filtered/subset measured percentage as a filled in color while the remaining bar's appearance will appear faded to the assigned value, illustrating the performance in real-time.
- [`IgbLinearGauge`](mcp:get_api_reference?platform=blazor&component=IgbLinearGauge)
  - New highlight needle was added. [`HighlightValue`](mcp:get_api_reference?platform=blazor&component=IgbLinearGauge&member=HighlightValue) and [`HighlightValueDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbLinearGauge&member=HighlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- [`IgbRadialGauge`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge)
  - New highlight needle was added. [`HighlightValue`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=HighlightValue) and [`HighlightValueDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=HighlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.

## **23.2.191 (April 2024)**

- Bug Fixes

## **23.2.189 (March 2024)**

### New Components

- [Hierarchical Grid](grids/hierarchical-grid/overview.md) component
- [Text Area](inputs/text-area.md) component
- [Button Group](inputs/button-group.md) component

### New Features

- [`IgbDockManager`](mcp:get_api_reference?platform=blazor&component=IgbDockManager)
  - New [`ProximityDock`](mcp:get_api_reference?platform=blazor&component=IgbDockManager&member=ProximityDock) property. If enabled, docking indicators are not visible and the end user can dock the dragged pane by dragging it close to the target pane edges.
  - New [`ContainedInBoundaries`](mcp:get_api_reference?platform=blazor&component=IgbDockManager&member=ContainedInBoundaries) property. Determines whether the floating panes are kept inside the Dock Manager boundaries. Defaults to `false`.
  - New [`ShowPaneHeaders`](mcp:get_api_reference?platform=blazor&component=IgbDockManager&member=ShowPaneHeaders) property. Determines whether pane headers are only shown on hover or always visible. Defaults to `always`.
- [`IgbTree`](mcp:get_api_reference?platform=blazor&component=IgbTree)
  - Added `toggleNodeOnClick` property that determines whether clicking over a node will change its expanded state or not. Defaults to `false`.
- [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating)
  - `allowReset` added. When enabled selecting the same value will reset the component. **Behavioral change** - In previous releases this was the default behavior of the rating component. Make sure to set `allowReset` if you need to keep this behavior in your application.
- [`Select`](mcp:get_api_reference?platform=blazor&component=IgbMultiColumnComboBox&member=Select), [`IgbDropdown`](mcp:get_api_reference?platform=blazor&component=IgbDropdown)
  - exposed `selectedItem`, `items` and `groups` getters
- [`IgbRadialGauge`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge)
  - New title/subtitle properties. [`TitleText`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=TitleText), [`SubtitleText`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=SubtitleText) will appear near the bottom the gauge. In addition, the various title/subtitle font properties were added such as `TitleFontSize`, `TitleFontFamily`, `TitleFontStyle`, `TitleFontWeight` and [`TitleExtent`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=TitleExtent). Finally, the new [`TitleDisplaysValue`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=TitleDisplaysValue) will allow the value to correspond with the needle's position.
  - New [`OpticalScalingEnabled`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=OpticalScalingEnabled) and [`OpticalScalingSize`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=OpticalScalingSize) properties for the [`IgbRadialGauge`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge). This new feature will manage the size at which labels, titles, and subtitles of the gauge have 100% optical scaling. You can read more about this new feature in this [topic](radial-gauge.md#optical-scaling)
  - New highlight needle was added. [`HighlightValue`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=HighlightValue) and [`HighlightValueDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbRadialGauge&member=HighlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- `XamRadialChart`
  - New Label Mode
        The [`IgbCategoryAngleAxis`](mcp:get_api_reference?platform=blazor&component=IgbCategoryAngleAxis) for the now exposes a [`LabelMode`](mcp:get_api_reference?platform=blazor&component=IgbCategoryAngleAxis&member=LabelMode) property that allows you to further configure the location of the labels. This allows you to toggle between the default mode by selecting the `Center` enum, or use the new mode, `ClosestPoint`, which will bring the labels closer to the circular plot area.

### General

- [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput), [`IgbMaskInput`](mcp:get_api_reference?platform=blazor&component=IgbMaskInput), [`IgbDateTimeInput`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput), [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating)
  - `Readonly` has been renamed to [`ReadOnly`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=ReadOnly)
- [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput)
  - `Maxlength` has been renamed to [`MaxLength`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=MaxLength)
  - `Minlength` has been renamed to [`MinLength`](mcp:get_api_reference?platform=blazor&component=IgbInput&member=MinLength)

### Deprecations

- The `size` property and attribute have been deprecated for all components. Use the `--ig-size` CSS custom property instead. The following example sets the size of the avatar component to small:
    ```css
    .avatar {
        --ig-size: var(--ig-size-small);
    }
    ```
- [`IgbDateTimeInput`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput)
  - `MinValue` and `MaxValue` properties have been deprecated. Please, use [`Min`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput&member=Min) and [`Max`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput&member=Max) instead.
- [`IgbRangeSlider`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider)
  - `AriaLabelLower` and `AriaLabelUpper` properties have been deprecated. Please, use [`ThumbLabelLower`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider&member=ThumbLabelLower) and [`ThumbLabelUpper`](mcp:get_api_reference?platform=blazor&component=IgbRangeSlider&member=ThumbLabelUpper) instead.

### Removed

- Removed our own `dir` attribute which shadowed the default one. This is a non-breaking change.
- [`IgbSlider`](mcp:get_api_reference?platform=blazor&component=IgbSlider) - `ariaLabel` shadowed property. This is a non-breaking change.
- [`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- [`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.

## **23.2.110 (January 2024)**

### .NET 8.0 support

- 2023.2 release now support .NET 8. For more information on .NET 8 please refer to [this article on Microsoft's site](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8) .

### IgniteUI.Blazor (Charts)

- [Chart Highlight Filter](charts/features/chart-highlight-filter.md) - The [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) and [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) now expose a way to highlight and animate in and out of a subset of data. The display of this highlight depends on the series type. For column and area series, the subset will be shown on top of the total set of data where the subset will be colored by the actual brush of the series, and the total set will have a reduced opacity. For line series, the subset will be shown as a dotted line.

## **23.2.97 (December 2023)**

### IgniteUI.Blazor - Toolbar - <label class="badge badge--preview">PREVIEW</label>

- Save tool action has been added to save the chart to an image via the clipboard.
- Vertical orientation has been added via the toolbar's [`Orientation`](mcp:get_api_reference?platform=blazor&component=IgbToolbar&member=Orientation) property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
- Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

### IgniteUI.Blazor (Grid)

- Added New Features - [State Persistence](grids/grid/state-persistence.md)

## **23.1.37 (June 2023)**

### New Components

- <label class="badge badge--preview">PREVIEW</label> [Toolbar](menus/toolbar.md) - component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tools when linked to our [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) or [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) components, but it also gives you the ability to create custom tools for your project.

### IgniteUI.Blazor (Charts)

- [ValueLayer](charts/features/chart-overlays.md#blazor-value-layer) - A new series type named the [`IgbValueLayer`](mcp:get_api_reference?platform=blazor&component=IgbValueLayer) is now exposed which can allow you to render an overlay for different focal points of the plotted data such as Maximum, Minimum, and Average. This is applied to the [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) and [`IgbFinancialChart`](mcp:get_api_reference?platform=blazor&component=IgbFinancialChart) by adding to the new [`ValueLines`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=ValueLines) collection.

- It is now possible to apply a **dash array** to the different parts of the series of the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart). You can apply this to the [series](charts/types/line-chart.md#blazor-styling-line-chart) plotted in the chart, the [gridlines](charts/features/chart-axis-gridlines.md#blazor-axis-gridlines-properties) of the chart, and the [trendlines](charts/features/chart-trendlines.md#blazor-chart-trendlines-dash-array-example) of the series plotted in the chart.

## **22.2.65 (April 2023)**

### New Components

- [Stepper](layouts/stepper.md)

### New Components

- [Dialog](notifications/dialog.md)
- [Select](inputs/select.md)

### IgniteUI.Blazor (Data Grid)

- A new argument [`PrimaryKey`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=PrimaryKey) has been introduced to [`IgbRowDataEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbRowDataEventArgs) from [`Detail`](mcp:get_api_reference?platform=blazor&component=IgbRowDataEventArgs&member=Detail), and part of the event arguments that are emitted by the `RowAdded` and `RowDeleted` events. When the grid has a primary key attribute added, then the emitted primaryKey event argument represents the row ID, otherwise it defaults to null.
- `RowSelectionChanging` event arguments are changed. Now, the `OldSelection`, `NewSelection`, `Added` and `Removed` collections no longer consist of the row keys of the selected elements when the grid has set a primaryKey, but now in any case the row data is emitted.
- When the grid is working with remote data and a primary key has been set, the selected rows that are not currently part of the grid view will be emitted for a partial row data object.
- When selected row is deleted from the grid component `RowSelectionChanging` event will no longer be emitted.
- The `OnGroupingDone` event has been renamed to `GroupingDone` to not violate the no on-prefixed outputs convention.
- The `OnDensityChanged` event has been renamed to `DensityChanged` to not violate the no on-prefixed outputs convention. All components exposing this event are affected.

### IgniteUI.Blazor (Pivot Grid)

- The [`IgbPivotDateDimension`](mcp:get_api_reference?platform=blazor&component=IgbPivotDateDimension) properties `InBaseDimension` and `InOption` have been deprecated and renamed to [`BaseDimension`](mcp:get_api_reference?platform=blazor&component=IgbPivotDateDimension&member=BaseDimension) and [`Options`](mcp:get_api_reference?platform=blazor&component=IgbPivotDateDimension&member=Options) respectively.

### IgniteUI.Blazor (Inputs)

- [`IgbDateTimeInput`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput), the StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) is now trimmed down to DatePart instead of DateTimeInputDatePart
- [`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio) and [`IgbRadioGroup`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup), added component validation along with styles for invalid state
- [`Mask`](mcp:get_api_reference?platform=blazor&component=IgbMaskInput&member=Mask), added the capability to escape mask pattern literals.
- [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge) added a [`Shape`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=Shape) property that controls the shape of the badge and can be either `Square` or `Rounded`. The default shape of the badge is rounded.
- [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar), the `RoundShape` property has been deprecated and will be removed in a future version. Users can control the shape of the avatar by the newly added [`Shape`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=Shape) attribute that can be `Square`, `Rounded` or `Circle`. The default shape of the avatar is `Square`.

### IgniteUI.Blazor (DockManager)

- [Dock Manager's](layouts/dock-manager.md) Panes collection now has a protected setter; requires you to call Add rather than set panes in a nested structure when creating them.

## **22.2.50 (December 2022)**

### New Components

- [Combo](inputs/combo/overview.md)
- [Pivot Grid](grids/pivot-grid/overview.md)
- .NET 7.0

## **22.1.76 (November 2022)**

### New Components

- [Grid](grids/data-grid.md)
- [TreeGrid](grids/tree-grid/overview.md)

### IgniteUI.Blazor (Charts)

Added significant improvements to default behaviors, and refined the Category Chart API to make it easier to use. These new chart improvements include:

- Responsive layouts for horizontal label rotation based on browser / screen size.
- Enhanced rendering for rounded labels on all platforms.
- Added marker properties to StackedFragmentSeries.
- Added [`ShouldPanOnMaximumZoom`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=ShouldPanOnMaximumZoom) property.
- New Category Axis Properties:
  - ZoomMaximumCategoryRange
  - ZoomMaximumItemSpan
  - ZoomToCategoryRange
  - ZoomToItemSpan
- New [Chart Aggregation](charts/features/chart-data-aggregations.md) API for Grouping, Sorting and Summarizing Category string and numeric values, eliminating the need to pre-aggregate or calculate chart data:
  - InitialSortDescriptions
  - InitialSorts
  - SortDescriptions
  - InitialGroups
  - InitialGroupDescriptions
  - GroupDescriptions
  - InitialSummaries
  - InitialSummaryDescriptions
  - SummaryDescriptions
  - InitialGroupSortDescriptions
  - GroupSorts
  - GroupSortDescriptions

> [!Note]
> [Chart Aggregation](charts/features/chart-data-aggregations.md) will not work when using [`IncludedProperties`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=IncludedProperties) | [`ExcludedProperties`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=ExcludedProperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render. The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.

### IgniteUI.Blazor (Data Grid)

- Changed **IgbColumn** to [`IgbDataGridColumn`](mcp:get_api_reference?platform=blazor&component=IgbDataGridColumn)
- Changed **GridCellEventArgs** to [`IgbDataGridCellEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbDataGridCellEventArgs)
- Changed **GridSelectionMode** to `DataGridSelectionMode`
- Changed **SummaryOperand** to `DataSourceSummaryOperand`

## **22.1.41 (June 2022)**

### IgniteUI.Blazor (Charts)

- Added the highly-configurable [DataLegend](charts/features/chart-data-legend.md) component, which works much like the [`Legend`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=Legend), but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values.
- Added the highly-configurable [DataToolTip](charts/features/chart-data-tooltip.md) which displays values and titles of series as well as legend badges of series in a tooltip. This is now the default tooltip for all chart types.
- Added animation and transition-in support for Stacked Series. Animations can be enabled by setting the [`IsTransitionInEnabled`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=IsTransitionInEnabled) property to true. From there, you can set the [`TransitionInDuration`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=TransitionInDuration) property to determine how long your animation should take to complete and the [`TransitionInMode`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=TransitionInMode) to determine the type of animation that takes place.
- Added `AssigningCategoryStyle` event, is now available to all series in [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart). This event is handled when you want to conditionally configure aspects of the series items such as `Fill` background-color and highlighting.
- New [`AllowedPositions`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer&member=AllowedPositions) enumeration for CalloutLayer. Used to limit where the callouts are to be placed within the chart. By default, the callouts are intelligently placed in the best place but this used to force for example `TopLeft`, `TopRight`, `BottomLeft` or `BottomRight`.
- New corner radius properties added for Annotation Layers; used to round-out the corners of each of the callouts. Note, a corner radius has now been added by default.
  - [`CalloutCornerRadius`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer&member=CalloutCornerRadius) for CalloutLayer
  - [`AxisAnnotationBackgroundCornerRadius`](mcp:get_api_reference?platform=blazor&component=IgbFinalValueLayer&member=AxisAnnotationBackgroundCornerRadius) for FinalValueLayer
  - [`XAxisAnnotationBackgroundCornerRadius`](mcp:get_api_reference?platform=blazor&component=IgbCrosshairLayer&member=XAxisAnnotationBackgroundCornerRadius) and [`YAxisAnnotationBackgroundCornerRadius`](mcp:get_api_reference?platform=blazor&component=IgbCrosshairLayer&member=YAxisAnnotationBackgroundCornerRadius) for CrosshairLayer
- New [`HorizontalViewScrollbarMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=HorizontalViewScrollbarMode) and [`VerticalViewScrollbarMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=VerticalViewScrollbarMode) enumeration to enable scrollbars in various ways. When paired with [`IsVerticalZoomEnabled`](mcp:get_api_reference?platform=blazor&component=IgbDataChart&member=IsVerticalZoomEnabled) or [`IsHorizontalZoomEnabled`](mcp:get_api_reference?platform=blazor&component=IgbDataChart&member=IsHorizontalZoomEnabled), you'll be able to persist or fade-in and out the scrollbars along the axes to navigate the chart.
- New `FavorLabellingScaleEnd`, determines whether the axis should favor emitting a label at the end of the scale. Only compatible with numeric axes (e.g. [`IgbNumericXAxis`](mcp:get_api_reference?platform=blazor&component=IgbNumericXAxis), [`IgbNumericYAxis`](mcp:get_api_reference?platform=blazor&component=IgbNumericYAxis), `PercentChangeAxis`).
- New [`IsSplineShapePartOfRange`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=IsSplineShapePartOfRange) determines whether to include the spline shape in the axis range requested of the axis.
- New [`XAxisMaximumGap`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=XAxisMaximumGap), determines the maximum allowed value for the plotted series when using [`XAxisGap`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=XAxisGap). The gap determines the amount of space between columns or bars of plotted series.
- New [`XAxisMinimumGapSize`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=XAxisMinimumGapSize), determines the minimum allowed pixel-based value for the plotted series when using [`XAxisGap`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=XAxisGap) to ensure there is always some spacing between each category.

### IgniteUI.Blazor (Data Grid)

Added New Feature - `Row Paging` which is used to split a large set of data into a sequence of pages that have similar content. With pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows/buttons that let users flip through the pages of data.

### IgniteUI.Blazor (Dock Manager)

- The Blazor Dock Manager is now in <label class="badge badge--preview">PREVIEW</label> state, that provides a way to manage a complex layout using different type of panes with various sizes, positions, and behaviors, and that can be docked to various locations within an app. The [Dock Manager](layouts/dock-manager.md) allows your end-users to customize it further by pinning, resizing, moving, floating, and hiding panes.

### New Components

- [Chip](inputs/chip.md)
- [Circular Progress](inputs/circular-progress.md)
- [Linear Progress](inputs/linear-progress.md)
- [Drop Down](inputs/dropdown.md)
- [Slider & Range Slider](inputs/slider.md)
- [Snackbar](notifications/snackbar.md)
- [Toast](notifications/toast.md)

## **21.2.52 (December 2021)**

> [!Note]
> The following breaking changes were introduced

### IgniteUI.Blazor (Data Grid)

- Changed [`ValueField`](mcp:get_api_reference?platform=blazor&component=IgbMultiColumnComboBox&member=ValueField) property from type string\[] to string.

### IgniteUI.Blazor (Inputs)

- A new `ValueChanged` event supports 2-way binding and should only be handled if you have not bound the [`Value`](mcp:get_api_reference?platform=blazor&component=IgbMultiColumnComboBox&member=Value) property. In order to read the Value field from the control without data binding the `ValueChanged` event should be handled, otherwise if your data is not bound you should use GetCurrentValueAsync to read the controls Value.

#### Date Picker

- Changed `ValueChanged` event to `SelectedValueChanged`.

#### Multi-Column ComboBox

- Changed `TextChanged` event to `TextValueChanged`.
- Changed `ValueChanged` event to `SelectedValueChanged`.

## **21.2.22 (November 2021)**

> [!Note]
> The **Igb** prefix is now required for the Ignite UI for Blazor components and nested elements within each component. This API change was necessary to avoid ambiguity between Infragistics controls and 3rd party controls.
>
> For example, `<CategoryChart/>` instead of `<CategoryChart/>`

### New Components

- [Avatar](layouts/avatar.md)
- [Badge](inputs/badge.md)
- [Button & Icon Button](inputs/button.md)
- [Card](layouts/card.md)
- [Checkbox](inputs/checkbox.md)
- Form
- [Icon](layouts/icon.md)
- [List](grids/list.md)
- [Navigation Bar](menus/navbar.md)
- [Navigation Drawer](menus/navigation-drawer.md)
- [Radio & Radio Group](inputs/radio.md)
- [Ripple](inputs/ripple.md)
- [Switch](inputs/switch.md)

### Chart and Map Improvements

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

- Changed [`YAxisLabelLocation`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=YAxisLabelLocation) property's type to **YAxisLabelLocation** from **AxisLabelLocation** in [`IgbFinancialChart`](mcp:get_api_reference?platform=blazor&component=IgbFinancialChart) and [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart)
- Changed [`XAxisLabelLocation`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=XAxisLabelLocation) property's type to **XAxisLabelLocation** from **AxisLabelLocation** in [`IgbFinancialChart`](mcp:get_api_reference?platform=blazor&component=IgbFinancialChart)
- Added [`XAxisLabelLocation`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=XAxisLabelLocation) property to [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart)
- Added support for representing geographic series of [`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap) in a legend
- Added crosshair lines by default in [`IgbFinancialChart`](mcp:get_api_reference?platform=blazor&component=IgbFinancialChart) and [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart)
- Added crosshair annotations by default in [`IgbFinancialChart`](mcp:get_api_reference?platform=blazor&component=IgbFinancialChart) and [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart)
- Added final value annotation by default in [`IgbFinancialChart`](mcp:get_api_reference?platform=blazor&component=IgbFinancialChart)
- Added new properties in Category Chart and Financial Chart:
  - [`CrosshairsLineThickness`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=CrosshairsLineThickness) and other properties for customizing crosshairs lines
  - [`CrosshairsAnnotationXAxisBackground`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=CrosshairsAnnotationXAxisBackground) and other properties for customizing crosshairs annotations
  - [`FinalValueAnnotationsBackground`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=FinalValueAnnotationsBackground) and other properties for customizing final value annotations
  - [`AreaFillOpacity`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=AreaFillOpacity) that allow changing opacity of series fill (e.g. Area chart)
  - [`MarkerThickness`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=MarkerThickness) that allows changing thickness of markers
- Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
  - [`MarkerAutomaticBehavior`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=MarkerAutomaticBehavior) that allows which marker type is assigned to multiple series in the same chart
  - [`LegendItemBadgeShape`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=LegendItemBadgeShape) for setting badge shape of all series represented in a legend
  - [`LegendItemBadgeMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=LegendItemBadgeMode) for setting badge complexity on all series in a legend
- Added new properties in Series in Data Chart and Geographic Map:
  - [`LegendItemBadgeShape`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=LegendItemBadgeShape) for setting badge shape on specific series represented in a legend
  - [`LegendItemBadgeMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=LegendItemBadgeMode) for setting badge complexity on specific series in a legend
- Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
- Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's [`MarkerAutomaticBehavior`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=MarkerAutomaticBehavior) property to `SmartIndexed` enum value
- Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's [`LegendItemBadgeMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=LegendItemBadgeMode) property to `MatchSeries` enum value
- Changed color palette of series and markers displayed in all charts to improve accessibility

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

### IgniteUI.Blazor (Data Grid)

- New Features Added:
  - `Filter Row`
  - `Load/Save Layout Customizations`
  - `GroupBy Area for column grouping`
  - `Cell Merging`
- New API:
  - Added `SelectionChanged` event. Used to detect changes on selection interactions
        e.g. Multiple row selection.
- Breaking Changes:
  - Changed grid's SummaryScope property's type to SummaryScope from `DataSourceSummaryScope`
  - Changed GroupHeaderDisplayMode property's type to GroupHeaderDisplayMode from `DataSourceSectionHeaderDisplayMode`

## **21.1.52 (April 2021)**

### New Visual Designs

#### Charts & Maps

This release introduces several new and improved visual design and configuration options for all of the chart components, e.g. [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart), [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart), and [`IgbFinancialChart`](mcp:get_api_reference?platform=blazor&component=IgbFinancialChart).

- Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
- Changed Scatter High Density series’ colors for heat min property from <span style="color:#8a5bb1">#8a5bb1</span> to <span style="color:#000000">#000000</span>
- Changed Scatter High Density series’ colors for heat max property from <span style="color:#ee5879">#ee5879</span> to <span style="color:#ee5879">#ee5879</span>
- Changed Financial/Waterfall series’ `NegativeBrush` and `NegativeOutline` properties from <span style="color:#C62828">#C62828</span> to <span style="color:#ee5879">#ee5879</span>
- Changed marker's thickness to 2px from 1px
- Changed marker's fill to match the marker's outline for [`IgbPointSeries`](mcp:get_api_reference?platform=blazor&component=IgbPointSeries), [`IgbBubbleSeries`](mcp:get_api_reference?platform=blazor&component=IgbBubbleSeries), [`IgbScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbScatterSeries), [`IgbPolarScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbPolarScatterSeries). You can use set [`MarkerFillMode`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=MarkerFillMode) property to Normal to undo this change
- Compressed labelling for the [`IgbTimeXAxis`](mcp:get_api_reference?platform=blazor&component=IgbTimeXAxis) and [`IgbOrdinalTimeXAxis`](mcp:get_api_reference?platform=blazor&component=IgbOrdinalTimeXAxis)
- New Marker Properties:
  - series.[`MarkerFillMode`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=MarkerFillMode) - Can be set to `MatchMarkerOutline` so the marker depends on the outline
  - series.[`MarkerFillOpacity`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=MarkerFillOpacity) - Can be set to a value 0 to 1
  - series.[`MarkerOutlineMode`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=MarkerOutlineMode) - Can be set to `MatchMarkerBrush` so the marker's outline depends on the fill brush color
- New Series Property:
  - series.[`OutlineMode`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=OutlineMode) - Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
- New chart properties that define bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the [`ComputedPlotAreaMarginMode`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=ComputedPlotAreaMarginMode), listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart:
  - chart.[`PlotAreaMarginLeft`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=PlotAreaMarginLeft)
  - chart.[`PlotAreaMarginTop`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=PlotAreaMarginTop)
  - chart.[`PlotAreaMarginRight`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=PlotAreaMarginRight)
  - chart.[`PlotAreaMarginBottom`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=PlotAreaMarginBottom)
  - chart.[`ComputedPlotAreaMarginMode`](mcp:get_api_reference?platform=blazor&component=IgbXYChart&member=ComputedPlotAreaMarginMode)
- New Highlighting Properties
  - chart.[`HighlightingMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=HighlightingMode) - Sets whether hovered or non-hovered series to fade, brighten
  - chart.[`HighlightingBehavior`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=HighlightingBehavior) - Sets whether the series highlights depending on mouse position e.g. directly over or nearest item
  - Note, in previous releases the highlighting was limited to fade on hover.
- Added Highlighting Stacked, Scatter, Polar, Radial, and Shape series:
- Added Annotation layers to Stacked, Scatter, Polar, Radial, and Shape series:
- Added support for overriding the data source of individual stack fragments within a stacked series
- Added custom style events to Stacked, Scatter, Range, Polar, Radial, and Shape series
- Added support to automatically sync the vertical zoom to the series content
- Added support to automatically expanding the horizontal margins of the chart based on the initial labels displayed
- Redesigned color palette of series and markers:

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#7446B9">#7446B9</span> <br><span style="color:#9FB328">#9FB328</span> <br><span style="color:#F96232">#F96232</span> <br><span style="color:#2E9CA6">#2E9CA6</span> <br><span style="color:#DC3F76">#DC3F76</span> <br><span style="color:#FF9800">#FF9800</span> <br><span style="color:#3F51B5">#3F51B5</span> <br><span style="color:#439C47">#439C47</span> <br><span style="color:#795548">#795548</span> <br><span style="color:#9A9A9A">#9A9A9A</span> | <span style="color:#8bdc5c">#8bdc5c</span> <br><span style="color:#8b5bb1">#8b5bb1</span> <br><span style="color:#6db1ff">#6db1ff</span> <br><span style="color:#f8a15f">#f8a15f</span> <br><span style="color:#ee5879">#ee5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#f7d262">#f7d262</span> <br><span style="color:#8ce7d9">#8ce7d9</span> <br><span style="color:#e051a9">#e051a9</span> <br><span style="color:#a8a8b7">#a8a8b7</span> <br> |

for example:

|   |   |
|---|---|
| <img class="responsive-img" src="../images/chartDefaults1.png" alt="chartDefaults1" /> | <img class="responsive-img" src="../images/chartDefaults2.png" alt="chartDefaults2" /> |
| <img class="responsive-img" src="../images/chartDefaults3.png" alt="chartDefaults3" /> | <img class="responsive-img" src="../images/chartDefaults4.png" alt="chartDefaults4" /> |

#### Chart Legend

- Added horizontal [`Orientation`](mcp:get_api_reference?platform=blazor&component=IgbToolbar&member=Orientation) property to ItemLegend that can be used with Bubble, Donut, and Pie Chart
- Added [`LegendHighlightingMode`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=LegendHighlightingMode) property - Enables series highlighting when hovering over legend items

#### Geographic Map

> [!Note]
> These features are CTP

- Added support for wrap around display of the map (scroll infinitely horizontally)
- Added support for shifting display of some map series while wrapping around the coordinate origin
- Added support for highlighting of the shape series
- Added support for some annotation layers for the shape series

### IgniteUI.Blazor (Data Grid)

- Added `EditOnKeyPress` aka Excel-style Editing, instantly begin editing when typing.
- Added `EditModeClickAction` property - By default double-clicking is required to enter edit mode. This can be set to `SingleClick` to allow for edit mode to occur when selecting a new cell.
- Added `EnterKeyBehaviors` property - aka Excel-style Navigation (Enter Behavior) – controls the behavior of the enter key, e.g. Options are (none, edit, move up, down, left, right)
- Added `EnterKeyBehaviorAfterEdit` property - While in edit-mode, this property controls when enter is pressed, e.g. Options are (moves to the cell below, above, right, left)
- Added [`SelectAllRows`](mcp:get_api_reference?platform=blazor&component=IgbGrid&member=SelectAllRows) - method.
- Added Row Range Selection - With `GridSelectionMode` property set to MultipleRow the following new functionality is now included:
  - Click and drag to select rows
  - <kbd>SHIFT</kbd> and click to select multiple rows.
  - <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.
- Pressing space bar toggles selection of active row via `GridSelectionMode` property set to MultipleRow or SingleRow
- Added Column Summaries to Column Options Dialog.

### IgniteUI.Blazor (Inputs)

#### Date Picker

- `ShowTodayButton` - Toggles Today button visibility
- [`Label`](mcp:get_api_reference?platform=blazor&component=IgbMultiColumnComboBox&member=Label) - Adds a label above the date value
- [`Placeholder`](mcp:get_api_reference?platform=blazor&component=IgbMultiColumnComboBox&member=Placeholder) property - adds custom text when no value is selected
- `FormatString` - Customize input date string e.g. (`yyyy-MM-dd`)
- `DateFormat` - Specifies whether to display selected dates as LongDate or ShortDate
- `FirstDayOfWeek` - Specifies first day of week
- `FirstWeekOfYear` - Specifies when to display first week of the year, e.g. (First Full Week, First Four day Week)
- `ShowWeekNumbers` - Toggles Week number visibility
- `MinDate` & `MaxDate` - Date limits, specifying a range of available selectable dates.
- Added Accessibility
