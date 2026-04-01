---
title: React What's New | Ignite UI for React | Infragistics
_description: Learn about new features in the Ignite UI for React.
_keywords: Changelog, What's New,  Ignite UI for React, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
_tocName: Changelog
---

# Ignite UI for React Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of Ignite UI for React are documented on this page.

## **19.6.0 (March 2026)**

### igniteui-react

#### Changed

- [`IgrDockManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html): Updated to use the latest `igniteui-dockmanager@2.1.0` with new `minResizeWidth` and `minResizeHeight` properties, `paneFlyoutToggle` event; additional `layoutChange` event detail and fixes. See the [full changelog](https://github.com/IgniteUI/igniteui-dockmanager/blob/master/CHANGELOG.md#210).
- Updated to use the latest `igniteui-webcomponents@7.1.0` including new `Splitter` and `Highlight` container components and fixes. See the [full changelog](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#710---2026-03-19).

#### New Features

- #### AI-Assisted Development - Agent Skills
  - Structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, JetBrains AI, etc.) how to work with Ignite UI for React.
  - The skill files are included in the `igniteui-react` package and also live in the [skills/](https://github.com/IgniteUI/igniteui-react/tree/master/skills) directory:
    - **components** - Identify the right React components (`*`) for a UI pattern, then install, import, and use them — JSX patterns, events, refs, forms, etc.
    - **customize-theme** - Customize styling using CSS custom properties, Sass, and the theming system in React, including using Ignite UI Theming MCP server.
    - **optimize-bundle-size** - Reduce bundle size with granular imports, tree-shaking, and lazy loading.
  - These skills are automatically discovered when placed in the agent's skills path (e.g. `.agents/skills` or `.claude/skills`).

## **19.5.2 (March 2026)**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
| 3055 | IgrDataPieChart | missing styling properties for the Others Slice |
| 38668 | IgrDataTooltipLayer | TitleTextColor is overriden when chart's TitleTextColor is used |
| 41167 | Excel | Object's Formulas are not round-tripped - Added Excel support for round tripping the camera tool |
| 41419 | Excel | Saving a VBA Signed Excel file does not keep a signature/certificate. |
| 41594 | IgrDataChart | AssigningCategoryStyle args.GetItems is null or not working to update items in the fragment series. |

## **19.5.1 (February 2026)**

### igniteui-react

#### New Features

- #### AI-Assisted Development - Copilot Skills
  - Four end-user skills are now shipped with the `igniteui-react` package under the `skills/` directory providing step-by-step guidance to GitHub Copilot and other LLM agents for common tasks:
    - **igniteui-wc-choose-components** - Identify the right component for a given UI pattern.
    - **igniteui-wc-integrate-with-framework** - Set up and use components in React, Angular, Vue, or vanilla JS.
    - **igniteui-wc-customize-component-theme** - Apply custom styles via CSS custom properties, parts, and the theming system.
    - **igniteui-wc-optimize-bundle-size** - Reduce production bundle size through selective imports and lazy loading.
- #### Chat
  - `adoptRootStyles` can now be toggled on/off at runtime.

#### Breaking Changes

- #### Themes
  - Changed global prefixes for CSS custom properties for component themes to align with other Ignite UI component libraries.

- #### Chat
  - Removed the `typingIndicator` template renderer. Use the `typing-indicator` slot instead.

- #### Tooltip
  - Removed the `disableArrow` deprecated property.

- #### Library

  - Minimum Node version required is now >= 22.

    #### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[2033](https://github.com/IgniteUI/igniteui-webcomponents/pull/2033)|Carousel|Context instantiation in Blazor|
|[2085](https://github.com/IgniteUI/igniteui-webcomponents/pull/2085)|Combo|Correct cursor style over non input parts|
|[2085](https://github.com/IgniteUI/igniteui-webcomponents/pull/2085)|Textarea|Correct cursor style over non input parts|

### igniteui-react-grids (Grids)

- [`grid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#grid), [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html), [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html)
  - Improved performance by dynamically adjusting the scroll throttle based on the data displayed in grid.

**Breaking Changes**

- [`grid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#grid), [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html), [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html)
  - Original `data` array mutations (like adding/removing/moving records in the original array) are no longer detected automatically. Components need an array reference change for the change to be detected.

**Localization(i18n)**

- [`grid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#grid), [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html), [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html), [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html), `DatePicker`, [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html), [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html), [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html), [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html), [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html), [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html)
  - New `Intl` implementation for the grid components that format and render data like dates and numbers. Updated `Intl` implementation for [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html), `DatePicker`, and [`IgrDateRangePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdaterangepicker.html).
  - New localization implementation for the currently supported languages for all components that have resource strings in the currently supported languages.
  - New public localization API and package named `igniteui-i18n-resources` containing the new resources that are used in conjunction.

**PDF export**

- Added PDF export functionality allowing users to export grid data to PDF format.

**Popover API**

- Dropdown menus and dialogs are now using HTML Popover API to provide better positioning and accessibility.

## **19.3.2 (February 2026)**

### Enhancements

### igniteui-react-charts

Added OthersCategoryBrush and OthersCategoryOutline to DataPieChart and ProportionalCategoryAngleAxis

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|2270|IgrDataChart|Added OthersCategoryBrush and OthersCategoryOutline to DataPieChart and ProportionalCategoryAngleAxis |
|2251|igniteui-react-layouts|Skip resolving property editor props containing @constantValues |
|2353|IgrDataChart|syntax error while building infragistics.dvcommonwidget.js |
|2354|IgrDataChart|infragistics.dvcommonwidget.js has "unser" typo instead of "unset" in case names |
|2338|IgrDataPieChart|SeriesPointerMove event doesn't fire correctly when StartAngle is set |
|2235|Excel|Workbook.Load() throwing a Excel.FormulaParseException. |
|2234|IgrRadialChart|Added a check for bucket size equals to 0 |
|2234|IgrDataChart|fix GetCategoryIndexAxis() for annotation layers |

## **19.3.1 (December 2025)**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|33808|IgrDataChart|The scale set for IntervalType Ticks in TimeAxisInterval is not displayed|
|34255|IgrDataChart|0.00001 scale tick marks are displayed overlapping each other|
|38510|IgrDataChart|AssigningCategoryStyle event support for Stacked Series|

### Enhancements

#### Charts

- Added LabelFormatOverride event to TimeXAxisLabelFormat so you can now override the formatting with an event at all time-formatting levels on the TimeXAxis.

- Adjusted the schema generation to account for more items to make it more likely to find valid values for properties.

## **19.3.0 (November 2025)**

### igniteui-react-charts (Charts)

#### <label class="badge badge--preview">PREVIEW</label> User Annotations

In Ignite UI for React, you can now annotate the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) with slice, strip, and point annotations at runtime using the new user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html).

<img class="responsive-img" src="../images/charts/data-chart-user-annotation-create.gif"
alt="React user-annotation-create"/>

#### <label class="badge badge--preview">PREVIEW</label> Collision Detection for Axis Annotations

Ability for axis annotations to automatically detect collisions and truncate to fit better. To enable this feature you must set the following properties:

- `ShouldAvoidAnnotationCollisions`
- `ShouldAutoTruncateAnnotations`

### igniteui-react-maps (Geographic Map)

- Azure Map Imagery is now RTM.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook|
|40262|IgrSpreadsheet|#Circularity! is displayed when there are warnings. Request to match Excel - display a value eg. 0 instead|
|40458|IgrSpreadsheet|When using Arial font, the igx-spreadsheet cuts off text in the cells|
|40490|IgrDatePicker|Inputs by Autofill won't give any effects for a date picker|

## **19.3.0 (October 2025)**

### New Components

- Added [`IgrChatComponent`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchatcomponent.html) component

### igniteui-react-grids (Grids)

- [`grid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#grid), [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html), [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
  - Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell.

            It can be enabled on the individual columns:

            ```tsx
            <IgrColumn field="field" merge={true}></IgrColumn>
            ```
            The merging can be configured on the grid level to apply either:

    - `onSort` - only when the column is sorted.
    - `always` - always, regardless of data operations.

            ```tsx
            <IgrGrid cellMergeMode="always">
            </IgrGrid>
            ```

            The default `cellMergeMode` is `onSort`.

            The functionality can be modified by setting a custom `mergeStrategy` on the grid, in case some other merge conditions or logic is needed for a custom scenario.

            It's possible also to set a `mergeComparer` on the individual columns, in case some custom handling is needed for a particular data field.

  - Added ability to pin individual columns to a specific side (start or end of the grid), so that you can now have pinning from both sides. This can be done either declaratively by setting the `pinningPosition` property on the column:

            ```tsx
            <IgrColumn field="Col1" pinned={true} pinningPosition="pinningPosition">
            </IgrColumn>
            ```

            ```ts
            pinningPosition = ColumnPinningPosition.End;
            ```

            Or with the API, via optional parameter:

            ```ts
            grid.pinColumn('Col1', 0, ColumnPinningPosition.End);
            grid.pinColumn('Col2', 0, ColumnPinningPosition.Start);
            ```

            If property `pinningPosition` is not set on a column, the column will default to the position specified on the grid's `pinning` options for `columns`.

  - **Sorting improvements**
    - Improved sorting algorithm efficiency using Schwartzian transformation. This is a technique, also known as decorate-sort-undecorate, which avoids recomputing the sort keys by temporarily associating them with the original data records.
    - Refactored sorting algorithms from recursive to iterative.

  - **Groupby improvements**
    - Refactored grouping algorithm from recursive to iterative.
    - Optimized grouping operations.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1853](https://github.com/IgniteUI/igniteui-webcomponents/pull/1853)| List |removed duplicated CSS variables across list components and themes|
|[1871](https://github.com/IgniteUI/igniteui-webcomponents/pull/1871)| Card |Consume colors from themes|
|[1873](https://github.com/IgniteUI/igniteui-webcomponents/pull/1873)| Card |Avatar size in card header|
|[1882](https://github.com/IgniteUI/igniteui-webcomponents/pull/1882)| Chat |Message actions not rendered after last message|
|[1885](https://github.com/IgniteUI/igniteui-webcomponents/pull/1885)| Date Picker |Change event not emitted for non-editable input configuration|
|[1894](https://github.com/IgniteUI/igniteui-webcomponents/pull/1894)| Date Picker | Issues when clearing the value and notch border in Material theme|

## **19.2.2 (October 2025)**

### igniteui-react-maps (Geographic Map)

#### <label class="badge badge--preview">PREVIEW</label> Azure Map Imagery Support

The `GeographicMap` now supports Azure-based map imagery, allowing developers to display detailed, dynamic maps across multiple application types. You can combine multiple map layers, visualize geographic data, and create interactive mapping experiences with ease.

Note: Support for Bing Maps imagery is being phased out. Existing enterprise keys can still be used to access Bing Maps, ensuring your current applications continue to function while you transition to Azure maps.

Explore some of the publicly available [Azure maps here](https://azure.microsoft.com/en-us/products/azure-maps).

### igniteui-react-charts (Charts)

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

There is a new property called `UseInsetOutlines` to control how outlines on the [`IgrRadialPieSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradialpieseries.html) are rendered. Setting this value to **true** will inset the outlines within the slice shape, whereas a **false** (default) value will place the outlines half-in half-out along the edge of the slice shape.

**Breaking Changes**

- A fix was made due to an issue where the `PlotAreaPosition` and `ChartPosition` properties on [`IgrChartMouseEventArgs`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrchartmouseeventargs.html) class were reversed. This will change the values that [`plotAreaPosition`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrchartmouseeventargs.html#plotAreaPosition) and [`chartPosition`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrchartmouseeventargs.html#chartPosition) return.

### igniteui-react-grids (Grids)

#### <label class="badge badge--preview">PREVIEW</label> Cell Suffix Content

Added support for suffix content within the cells that allows you to add additional text or icons to the end of the cell value and style it. The full list of added properties for the cell suffix content is listed below and is available on the [`IgrDataGridColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html) and `CellInfo` class:

- [`suffixText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixText)
- [`suffixTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixTextColor)
- `SuffixTextFont`
- [`suffixIconName`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconName)
- [`suffixIconCollectionName`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconCollectionName)
- [`suffixIconStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconStroke)
- [`suffixIconFill`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconFill)
- [`suffixIconViewBoxLeft`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconViewBoxLeft)
- [`suffixIconViewBoxTop`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconViewBoxTop)
- [`suffixIconViewBoxWidth`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconViewBoxWidth)
- [`suffixIconViewBoxHeight`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#suffixIconViewBoxHeight)
- [`textDecoration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html#textDecoration)

Please note that the maximum size available for the icons is 24x24. You can provide an icon that is larger or smaller than this, but you will need to configure the viewbox settings in order to properly scale it to fit in the 24x24 space so it is fully visible.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|31624 | [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) | Resizing the containing window of the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) causes the chart to fail to render the series|
|27304 | `DataChart` | Zoom rectangle is not positioned the same as the background rectangle|
|37930 | `DataChart` | Data Annotation Overlay Text Color not working|
|30600 | `DoughnutChart` | No textStyle property for either the chart or series (pie chart has this)|
|38231 | [`grid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#grid) | Unpinned column does not return to the original position if hidden columns exist|
|33861 | Excel Library | Adding line chart corrupts excel File for German culture|

### Enhancements

#### IgrBulletGraph

- <label class="badge badge--preview">PREVIEW</label> Added new `LabelsVisible` property

#### Charts

- New properties added to the DataToolTipLayer, ItemToolTipLayer, and CategoryToolTipLayer to aid in styling: `ToolTipBackground`, `ToolTipBorderBrush`, and `ToolTipBorderThickness`

- New properties added to the DataLegend to aid in styling: `ContentBackground`, `ContentBorderBrush`, and `ContentBorderThickness`. The `ContentBorderBrush` and `ContentBorderThickness` default to transparent and 0 respectively, so in order to see these borders, you will need to set these properties.

- Added a new property to [`IgrChartMouseEventArgs`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrchartmouseeventargs.html) called [`worldPosition`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrchartmouseeventargs.html#worldPosition) that provides the world relative position of the mouse. This position will be a value between 0 and 1 for both the X and Y axis within the axis space.

- Added [`highlightingFadeOpacity`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#highlightingFadeOpacity) to [`IgrSeriesViewer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html) and [`IgrDomainChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html). This allows you to configure the opacity applied to highlighted series.

- Expose `CalloutLabelUpdating` event for domain charts.

#### IgrDataGrid

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

#### IgrLinearGauge

- <label class="badge badge--preview">PREVIEW</label> Added new `LabelsVisible` property

## **19.2.1 (September 2025)**

### Enhancements

- Added enhancement DatePicker should update calendar view on typing, as Date Range Picker [1818](https://github.com/IgniteUI/igniteui-webcomponents/issues/1818)

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1831](https://github.com/IgniteUI/igniteui-webcomponents/pull/1831)| Calendar |Navigation styling|
|[1833](https://github.com/IgniteUI/igniteui-webcomponents/pull/1833)|Card| Slotted igc-avatar size styles in supported themes|
|[1826](https://github.com/IgniteUI/igniteui-webcomponents/pull/1826)|Combo|Dropdown initial height|
|[1827](https://github.com/IgniteUI/igniteui-webcomponents/pull/1827)|Combo|Icon sizes styles for Indigo theme|
|[1834](https://github.com/IgniteUI/igniteui-webcomponents/pull/1834)|DatePicker, DateRangePicker|Disabled styles|
|[1820](https://github.com/IgniteUI/igniteui-webcomponents/pull/1820)|Input|Prefix and suffix slot styles for Bootstrap theme|
|[1824](https://github.com/IgniteUI/igniteui-webcomponents/pull/1824)|Input|Label and border styles for Material theme|
|[1836](https://github.com/IgniteUI/igniteui-webcomponents/pull/1836)|Input|Removed overridden tabindex property|
|[1827](https://github.com/IgniteUI/igniteui-webcomponents/pull/1827)|Select|Icon sizes styles for Indigo theme|
|[1809](https://github.com/IgniteUI/igniteui-webcomponents/pull/1809)|Switch|Use the new thumb hover property|
|[1837](https://github.com/IgniteUI/igniteui-webcomponents/pull/1837)|TileManager|Incorrect escape of internal regex|

## **19.2.0 (August 2025)**

- Form associated custom elements now expose the **ig-invalid** custom state for styling with the `:state()` CSS selector.
    [See here for additional information](https://developer.mozilla.org/en-US/docs/Web/CSS/:state)
- Form associated custom elements validity behavior. Now elements will try to mimic `:user-invalid`, and won't apply invalid
    styles unless interacted through the UI or through a form `requestSubmit()/reset()` invocation.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|Invalid state in **readonly** mode|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|Cannot style **helper-text**|
|[1795](https://github.com/IgniteUI/igniteui-webcomponents/pull/1795)|Card|Slotted igc-avatar in Indigo theme|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Combo|Border overlaps label text in invalid state|
|[1799](https://github.com/IgniteUI/igniteui-webcomponents/pull/1799)|Date Picker|Indigo elevation styles|
|[1783](https://github.com/IgniteUI/igniteui-webcomponents/pull/1783)|Date range picker|Return focus to main input on keyboard interactions|
|[1792](https://github.com/IgniteUI/igniteui-webcomponents/pull/1792)|Input|Placeholder and label alignment in Material theme|
|[1806](https://github.com/IgniteUI/igniteui-webcomponents/pull/1806)|Navigation drawer|Update **relative** positions styles and animation|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Select|Invalid state theming issues|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|Material theme interaction issues|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|Resizing behavior with suffix part|
|[1775](https://github.com/IgniteUI/igniteui-webcomponents/pull/1775)|Calendar|Vertical mode container paddings|
|[1731](https://github.com/IgniteUI/igniteui-webcomponents/issues/1731)|Carousel|Pause automatic rotation on pointer-initiated focus|
|[1772](https://github.com/IgniteUI/igniteui-webcomponents/issues/1772)|Carousel|Ensure `onSlideChanged` event is emitted when a slide is changed|
|[1765](https://github.com/IgniteUI/igniteui-webcomponents/pull/1765)|Date picker|Styling issues|
|[1764](https://github.com/IgniteUI/igniteui-webcomponents/pull/1764)|Date range picker|CSS borders and elevation|
|[1747](https://github.com/IgniteUI/igniteui-webcomponents/pull/1747)|File input|Bootstrap invalid box-shadow styles|
|[1672](https://github.com/IgniteUI/igniteui-webcomponents/pull/1672)|Stepper|Error when setting linear property in deferred rendering scenarios|
|[1768](https://github.com/IgniteUI/igniteui-webcomponents/pull/1768)|Textarea|Readonly state styles|
|[1755](https://github.com/IgniteUI/igniteui-webcomponents/pull/1755)|Dropdown|Icon size in Bootstrap theme|
|[1739](https://github.com/IgniteUI/igniteui-webcomponents/pull/1739)|Inputs|Label positioning and transition logic in Material theme|

## **19.1.0 (July 2025)**

- <label class="badge badge--new">NEW</label> Component - Date Range Picker

### Breaking Changes

#### File Input

- `onChange` & `onCancel` events detail now returns the underlying component `files` property.

#### Tooltip

- Tooltip events will no longer return its `anchor` target in its `detail` property

### Behavioral Changes

#### Tooltip

- **Behavioral change**: Tooltip default `placement` is 'bottom' now.
- **Behavioral change**: Tooltip will not render an arrow indicator by default unless `with-arrow` is set.

### Enhancements

- Updated the readonly styles of most form associated components across all themes to better signify when a component is in a readonly state.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1710](https://github.com/IgniteUI/igniteui-webcomponents/issues/1710)|Calendar and Date Picker|Incorrect date rollover for in certain scenarios|
|[1728](https://github.com/IgniteUI/igniteui-webcomponents/pull/1728)|Combo|Case insensitive icon styles in themes|
|[1726](https://github.com/IgniteUI/igniteui-webcomponents/pull/1726)|Input|Replace border in fluent theme with a box-shadow|
|[1732](https://github.com/IgniteUI/igniteui-webcomponents/pull/1732)|Input|Focused state background color in Indigo theme|
|[1715](https://github.com/IgniteUI/igniteui-webcomponents/pull/1715)|Text Area|Label height and component height override|

## **19.0.1 (July 2025)**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36448 | `RadialGauge` | Radial label format properties do not work. (eg. Title, SubTitles)|

### igniteui-react-charts (Charts)

- Add <label class="badge badge--new">NEW</label> `MaximumExtent` and `MaximumExtentPercentage` properties for use with axis labels.

## **19.0.0 (April 2025)**

### igniteui-react-maps (Geographic Map)

> \[!Note]
> As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.
> For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

### igniteui-react-charts (Charts)

- Added <label class="badge badge--preview">PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) layers:
  - Data Annotation Band Layer
  - Data Annotation Line Layer
  - Data Annotation Rect Layer
  - Data Annotation Slice Layer
  - Data Annotation Strip Layer

- The [Data Tooltip](charts/features/chart-data-tooltip.md) and [Data Legend](charts/features/chart-data-legend.md) expose <label class="badge badge--preview">PREVIEW</label> `LayoutMode` property that you can use to layout the contents of the tooltip or legend in a table or vertical layout structure.

- <label class="badge badge--preview">PREVIEW</label> The [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#defaultInteraction) property of the charts has been updated to include a new enumeration - `DragSelect` in which the dragged preview Rect will select the points contained within.

- <label class="badge badge--preview">PREVIEW</label> The [ValueOverlay and ValueLayer](charts/features/chart-overlays.md), in addition to the <label class="badge badge--preview">PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) listed above now expose an `OverlayText` property that can be used to overlay additional annotation text in the plot area. These appearance of these annotations can be configured by using the many OverlayText-prefixed properties. For example, the `OverlayTextBrush` property will configure the color of the overlay text.

- <label class="badge badge--new">NEW</label> [Trendline Layer](charts/features/chart-trendlines.md) series type that allows you to apply a single trend line per trend line layer to a particular series. This allows the usage of multiple trend lines on a single series since you can have multiple [TrendlineLayer](charts/features/chart-overlays.md) series types in the chart.

### igniteui-react-dashboards (Dashboards)

- The [`IgrDashboardTile`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_dashboards.igrdashboardtile.html) now supports propagating the aggregations from its DataGrid view to the chart visualization such as sorting, grouping, filtering and selection. This is currently supported by binding the `DataSource` of the [`IgrDashboardTile`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_dashboards.igrdashboardtile.html) to an instance of `LocalDataSource`.

### igniteui-react-grids

**Breaking Changes**

- The `DataGrid` & [`IgrMultiColumnComboBox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html) are now part of the igniteui-react-data-grids package.

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
|37685 | [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) | Poor rendering of numbers formatted with Arial font.|
|37244 | Excel Library | Custom Data Validation is not working.|

## **19.0.0 (April 2025)**

> \[!Note]With 19.0.0 the React product introduces many breaking changes done to improve and streamline the API. Please refer to the full Update Guide.

[Update Guide](update-guide.md)

### Removed

- [`IgrCheckboxChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxchangeeventargs.html) removed, use [`IgrCheckboxChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxchangeeventargs.html) instead.
- [`IgrRadioChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiochangeeventargs.html) removed, use [`IgrRadioChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiochangeeventargs.html) instead.
- [`IgrRangeSliderValue`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslidervalue.html) removed, use [`IgrRangeSliderValueEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslidervalueeventargs.html) instead.
- `ActiveStepChangingArgs` removed, use [`IgrActiveStepChangingEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igractivestepchangingeventargs.html) instead.
- `ActiveStepChangedArgs` removed, use [`IgrActiveStepChangedEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igractivestepchangedeventargs.html) instead.

### Enhancements

#### Stepper

Stepper Step's `titlePosition` now defaults to `auto`, instead of being undefined, which has the same behavior.

#### Tabs

igr-tab `panel` property is removed.

igr-tab-panel component is removed. The igr-tab now encompasses both the tab header and the tab content in a single component.

## **18.9.0 (April 2025)**

### New Components

- TileManager

### Enhancements

#### List

- Added new property on [`IgrListItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlistitem.html) called [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlistitem.html#selected)

#### Accordion

- Added new events `Open` and `Close`

### igniteui-react-grids

- **All Grids**
  - Allow applying initial filtering through [`IgrFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrfilteringexpressionstree.html) property

### Deprecations

- The `clicked` event of the [`button`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#button) is deprecated. Use the native `onClick` handler.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25602 | `DataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
|28480 | [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) | Undefined reference error is thrown when a datasource is replaced|
|30319 | `DataGrid` | Records are sorted despite no value changed|
|32598 | `DataGrid` | Multi-selection is not working correctly
|36374 | [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) | A previous value was bound when a form was submitted on any touch device|

## **18.8.1 (March 2025)**

### igniteui-react-grids

The following table lists the bug fixes made for the Ignite UI for React toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36864|Grids|There is wrong import path "grids/combined" for the react licensed package|

## **18.8.0 (February 2025)**

### igniteui-react-grids

- **All Grids**
  - Added new `disabledSummaries` for the columns of the grid, allowing the developers to skip some of the summaries
  - Encapsulate internal grid action button

### igniteui-react

- Added new `allowSplitterDock` property for `Dockmanager` that allows docking directly in a split.
- Added new `useFixedSize` property for the [`IgrSplitPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html) of `Dockmanager` that allows new resize behavior.

### Enhancements

#### Toolbar

- Added new `groupHeaderTextStyle` property to [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) and [`IgrToolPanel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolpanel.html). If set, it will apply to all [`IgrToolActionGroupHeader`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactiongroupheader.html) actions.
- Added new property on [`IgrToolAction`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html) called [`titleHorizontalAlignment`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolaction.html#titleHorizontalAlignment) which controls the horizontal alignment of the title text.
- Added new property on [`IgrToolActionSubPanel`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolactionsubpanel.html) called `itemSpacing` which controls the spacing between items inside the panel.

### Bug Fixes

The following table lists the bug fixes made for the Ignite UI for React toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|30286 | `DataChart` | Bubble Series tooltip content is switched to that of nearby bubble data in clicking a bubble|
|32906 | `DataChart` | `DataChart` is showing two xAxis on the top|
|33605 | `DataChart` | ScatterLineSeries is not showing the color of the line correctly in the legend|
|34776 | `DataChart` | Repeatedly showing and hiding the `DataChart` causes memory leakage in JS Heap|
|35498 | `DataChart` | Tooltips for the series specified in IncludedSeries are not displayed|
|34324 | [`grid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#grid) | Column hiding through condition in the grid template is not working|
|34678 | [`grid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html#grid) | Enum values coerced to strings, breaking expected numeric behavior in some grid properties|
|32093 | [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) | PivotDateDimensionOptions are not applied to the PivotDateDimension|
|34053 | `RadialGauge` | The position of the scale label is shifted|
|35496 | [`IgrSpreadsheet`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_spreadsheet.igrspreadsheet.html) | Error when setting styles in Excel with images|
|36176 | Excel Library | Exception occurs when loading an Excel workbook that has a LET function|
|36379 | Excel Library | Colors with any alpha channel in an excel workbook fail to load|
|26218 | Excel Library | Chart's plot area right margin becomes narrower and fill pattern and fill foreground are gone just by loading an Excel file|
|34083 | Excel Library | TextOperatorConditionalFormat's is not loaded/saved properly if the text contains = in a template Excel file|
|35495 | Excel Library | Pictures in cells are lost when a template file is loaded|

## **18.7.7 (January 2025)**

- Bug Fixes

### igniteui-react-grids

- **All Grids**
  - Fixed a critical memory leak when components are opened in several duplicate browser tabs.

## **18.7.6 (December 2024)**

### igniteui-react-charts (Charts)

DashboardTile <label class="badge badge--preview">PREVIEW</label>

- New [Dashboard Tile](dashboard-tile.md) component is a container control that analyzes and visualizes a bound ItemsSource collection or single point and returns an appropriate data visualization based on the schema and count of the data. This control utilizes a built-in [Toolbar](menus/toolbar.md) component to allow you to make changes to the visualization at runtime, allowing you to see many different visualizations of your data with minimal code.

### igniteui-react-charts (Inputs)

- <label class="badge badge--preview">PREVIEW</label> [Color Editor](inputs/color-editor.md) can be used as a standalone color picker and is now integrated into <label class="badge badge--preview">PREVIEW</label> ToolAction of [Toolbar](menus/toolbar.md) component to update visualizations at runtime.

## **18.7.4 (November 2024)**

### General

- New [Carousel](layouts/carousel.md) component.
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
  - Changed `change` event argument type from [`IgrComponentDataValueChangedEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcomponentdatavaluechangedeventargs.html) to [`IgrComponentValueChangedEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcomponentvaluechangedeventargs.html)

## **18.7.0 (September 2024)**

### igniteui-react-charts (Charts)

- New [Data Pie Chart](charts/types/data-pie-chart.md) - The [`IgrDataPieChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatapiechart.html) is a new component that renders a pie chart. This component works similarly to the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), in that it will automatically detect the properties on your underlying data model while allowing selection, highlighting, animation and legend support via the ItemLegend component.

- New [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html), to plot slices similar to a pie chart, a type of data visualization where data points are represented as segments within a circular graph.

- [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html)

  - New ToolActionCheckboxList
        A new CheckboxList ToolAction that displays a collection of items with checkboxes for selecting. A grid inside ToolAction CheckboxList grows in height up to 5 items, then a scrollbar is displayed.
        Requires IgrCheckboxListModule to be registered.

  - New Filtering Support

  - Axis Field Changes
        New default IconMenu in Toolbar when targeting CategoryChart.
        Label fields are mapped to the X-axis and Value fields are mapped to the Y-axis.
        Target chart reacts in realtime to changes made. IconMenu is hidden when chart has no ItemsSource set.

### igniteui-react

- New [Banner](notifications/banner.md) component.
- New [DatePicker](scheduling/date-picker.md) component.
- New [`IgrDivider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html) component.
- Added support for native events to all components.
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
  - Added `setIconRef` method. This allows to register and replace icons by SVG files.
  - All components now use icons by reference internally so that it's easy to replace them without explicitly providing custom templates.
- [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html), `DatePicker`, [`IgrDialog`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html), [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html),  `ExpansionPanel`, [`IgrNavDrawer`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawer.html), [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html), [`IgrSnackbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html), **IgrSelectComponent**
  - Toggle methods `show`, `hide`, `toggle` methods return **true** now on success, otherwise **false**.
- **IgrButtonComponent**, [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html), [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html), [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html), [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html), [`IgrDateTimeInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html), [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html), [`IgrMaskInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html), [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html), **IgrSelectComponent**, [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html)
  - Deprecated custom `focus` and `blur` events. Use the native `onFocus` and `onBlur` events instead
- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
  - Added [`name`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html#name) and [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html#value) properties.

**Breaking Changes**

- Renamed old **IgrDatePicker** to **IgrXDatePicker**.
- Removed `Form` component. Use native form instead.
- Removed `size` property in favor of the `--ig-size` CSS custom property for the following components:
  - [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html),  **IgrButtonComponent**, [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html), [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html), [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html), [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html), [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html), [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html), [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html), [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html), [`IgrSnackbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html), [`IgrTabs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html), [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html)
- [`IgrBadge`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbadge.html), [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html), [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html), [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html)
  - Renamed `Variant` property type to `StyleVariant`.
- [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html)
  - Renamed `WeekStart` property type to `WeekDays`.
- [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html), [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html)
  - Changed `change` event argument type from [`IgrComponentBoolValueChangedEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcomponentboolvaluechangedeventargs.html) to [`IgrCheckboxChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxchangeeventargs.html).
- [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html), **IgrSelectComponent**
  - Removed `positionStrategy`, `flip`, `sameWidth` properties.
- [`IgrDateTimeInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html)
  - Removed `maxValue` and `minValue` properties. Use `max` and `min` instead.
- [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html)
  - Removed `positionStrategy` property.
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
  - Removed old named `maxlength` and `minlength` properties. Use `maxLength` and `minLength`.
  - Removed old named `readonly` and `inputmode` properties. Use `readOnly` and `inputMode`.
  - Changed `inputMode` type also to `string`.
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
  - Changed `change` event argument type from [`IgrComponentBoolValueChangedEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcomponentboolvaluechangedeventargs.html) to [`IgrRadioChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiochangeeventargs.html).
- [`IgrRangeSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html)
  - Removed `ariaThumbLower` and `ariaThumbUpper` properties. Use `thumbLabelLower` and `thumbLabelUpper` instead.
- [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html)
  - Renamed `readonly` property to `readOnly`.

### igniteui-react-grids

- **All Grids**
  - Added new `RowClick` event.
- [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html)
  - Added `sortable` property for a [`IgrPivotDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdimension.html).
  - Added horizontal layout. Can be enabled inside the new `pivotUI` property as `rowLayout` `horizontal`.
  - Added row dimension summaries for horizontal layout only. Can be enabled for each [`IgrPivotDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdimension.html) by setting `horizontalSummary` to **true**.
  - Added `horizontalSummariesPosition` property to the `pivotUI`, configuring horizontal summaries position.
  - Added row headers for the row dimensions. Can be enabled inside the new `pivotUI` property as `showHeaders` **true**.
  - Keyboard navigation now can move in to row headers back and forth from any row dimension headers or column headers.
  - Added keyboard interactions for row dimension collapse using <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> arrows and row headers sorting using <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> arrows.

**Breaking Changes**

- **All Grids**
  - [`IgrRowIsland`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowisland.html)
  - Removed `displayDensity` deprecated property.
  - Renamed `actualColumns`, `contentColumns` properties to `actualColumnList` and `contentColumnList`. Use `columns` or `columnList` property to get all columns now.
  - Renamed `rowDelete` and `rowAdd` event argument type to [`IgrRowDataCancelableEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowdatacancelableeventargs.html).
  - Renamed `contextMenu` event argument type to [`IgrGridContextMenuEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridcontextmenueventargs.html).
  - Removed [`IgrGridEditEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridediteventargs.html),  [`IgrGridEditDoneEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditdoneeventargs.html), [`IgrPinRowEventArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpinroweventargs.html) events `rowID` and `primaryKey` properties. Use `rowKey` instead.
- [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html)
  - removed `showPivotConfigurationUI` property. Use `pivotUI` and set inside it the new `showConfiguration` option.
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
  - Removed `movable` property. Use Grid's `moving` property now.
  - Removed `columnChildren` property. Use `childColumns` instead.
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup)
  - Removed `children` property. Use `childColumns` instead.
- [`IgrPaginator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpaginator.html)
  - Removed `isFirstPageDisabled` and `isLastPageDisabled` properties. Use `isFirstPage` and `isLastPage` instead.

## **18.6.1 (June 2024)**

### igniteui-react

- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html), [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html) - exposed [`validateOnly`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html#validateOnly) to enable validation rules being enforced without restricting user input.
- [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html) - [`IgrPositionStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpositionstrategy.html) property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- [`IgrDockManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html) - [`IgrSplitPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html) [`isMaximized`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#isMaximized) is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the [`isMaximized`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#isMaximized) property of [`IgrTabGroupPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrtabgrouppane.html) and/or [`IgrContentPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html) instead.

### igniteui-react-grids

- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](grids/grid/size.md) topic for more.

- [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) - Configuration of the component can now be applied correctly.

### igniteui-react-charts (Charts)

- [Data Legend Grouping](charts/features/chart-data-legend.md#react-data-legend-grouping) & [Data Tooltip Grouping](charts/features/chart-data-tooltip.md#react-data-tooltip-grouping-for-data-chart) - New grouping feature added. The property `GroupRowVisible` toggles grouping with each series opting in can assign group text via the [`dataLegendGroup`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#dataLegendGroup) property. If the same value is applied to more than one series then they will appear grouped. Useful for large datasets that need to be categorized and organized for all users.

- [Chart Selection](charts/features/chart-data-selection.md) - New series selection styling. This is adopted broadly across all category, financial and radial series for [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html). Series can be clicked and shown a different color, brightened or faded, and focus outlines. Manage which items are effected through individual series or entire data item. Multiple series and markers are supported. Useful for illustrating various differences or similarities between values of a particular data item. Also  `SelectedSeriesItemsChanged` event and [`selectedSeriesItems`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#selectedSeriesItems) are available for additional help to build out robust business requirements surrounding other actions that can take place within an application such as a popup or other screen with data analysis based on the selection.

- [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html), to enable creating pie charts in the allowing robust visualizations using all the added power of the data chart.

- [Treemap Highlighting](charts/types/treemap-chart.md#react-treemap-highlighting) - Now exposes a [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#highlightingMode) property that allows you to configure the mouse-over highlighting of the items in the tree map. This property takes two options: `Brighten` where the highlight will apply to the item that you hover the mouse over only, and `FadeOthers` where the highlight of the hovered item will remain the same, but everything else will fade out. This highlight is animated, and can be controlled using the [`highlightingTransitionDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#highlightingTransitionDuration) property.

- [Treemap Percent-based Highlighting](charts/types/treemap-chart.md#react-treemap-percent-based-highlighting) - New percent-based highlighting, allowing nodes to represent progress or subset of a collection. The appearance is shown as a fill-in of its backcolor up to a specific value either by a member on your data item or by supplying a new [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource). Can be toggled via [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#highlightedValuesDisplayMode) and styled via `FillBrushes`.

- [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

### igniteui-react-gauges (Gauges)

- [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html)
  - New label for the highlight needle. [`highlightLabelText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightLabelText) and [`highlightLabelSnapsToNeedlePivot`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightLabelSnapsToNeedlePivot) and many other styling related properties for the HighlightLabel were added.

## **18.6.0 (March 2024)**

### igniteui-react-charts

- New Data Filtering via the [`initialFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialFilter) property. Apply filter expressions to filter the chart data to a subset of records. Can be used for drill down large data.

- `XamRadialChart`
  - New Label Mode
        The [`IgrCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryangleaxis.html) for the now exposes a [`labelMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryangleaxis.html#labelMode) property that allows you to further configure the location of the labels. This allows you to toggle between the default mode by selecting the `Center` enum, or use the new mode, `ClosestPoint`, which will bring the labels closer to the circular plot area.

### igniteui-react-grids

- New [[`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)](grids/hierarchical-grid/overview.md) component

### igniteui-react-gauges

- [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html)
  - New title/subtitle properties. [`titleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleText), [`subtitleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#subtitleText) will appear near the bottom the gauge. In addition, the various title/subtitle font properties were added such as `TitleFontSize`, `TitleFontFamily`, `TitleFontStyle`, `TitleFontWeight` and [`titleExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleExtent). Finally, the new [`titleDisplaysValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#titleDisplaysValue) will allow the value to correspond with the needle's position.
  - New [`opticalScalingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#opticalScalingEnabled) and [`opticalScalingSize`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#opticalScalingSize) properties for the [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html). This new feature will manage the size at which labels, titles, and subtitles of the gauge have 100% optical scaling. You can read more about this new feature in this [topic](radial-gauge.md#optical-scaling)
  - New highlight needle was added. [`highlightValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightValue) and [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html#highlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- [`IgrLinearGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html)
  - New highlight needle was added. [`highlightValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html#highlightValue) and [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html#highlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- [`IgrBulletGraph`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html)
  - The Performance bar will now reflect a difference between the value and new [`highlightValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#highlightValue) when the [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrbulletgraph.html#highlightValueDisplayMode) is applied to the 'Overlay' setting. The highlight value will show a filtered/subset completed measured percentage as a filled in color while the remaining bar's appearance will appear faded to the assigned value, illustrating the performance in real-time.

### igniteui-react

- New [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html) component
- New [`IgrButtonGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttongroup.html) component
- [`IgrDockManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html)
  - New [`proximityDock`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#proximityDock) property. If enabled, docking indicators are not visible and the end user can dock the dragged pane by dragging it close to the target pane edges.
  - New [`containedInBoundaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#containedInBoundaries) property. Determines whether the floating panes are kept inside the Dock Manager boundaries. Defaults to `false`.
  - New [`showPaneHeaders`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#showPaneHeaders) property. Determines whether pane headers are only shown on hover or always visible. Defaults to `always`.
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html), [`IgrMaskInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html), [`IgrDateTimeInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html), [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html)
  - `Readonly` has been renamed to [`readOnly`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#readOnly)
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
  - `Maxlength` has been renamed to [`maxLength`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#maxLength)
  - `Minlength` has been renamed to [`minLength`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#minLength)
- [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html)
  - Added `toggleNodeOnClick` property that determines whether clicking over a node will change its expanded state or not. Defaults to `false`.
- [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html)
  - `allowReset` added. When enabled selecting the same value will reset the component. **Behavioral change** - In previous releases this was the default behavior of the rating component. Make sure to set `allowReset` if you need to keep this behavior in your application.
- [`select`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#select), [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html)
  - exposed `selectedItem`, `items` and `groups` getters

#### Deprecations

- The `Form` component has been deprecated. Please, use the native form element instead.
- The `size` property and attribute have been deprecated for all components. Use the `--ig-size` CSS custom property instead. The following example sets the size of the avatar component to small:
    ```css
    .avatar {
        --ig-size: var(--ig-size-small);
    }
    ```
- [`IgrDateTimeInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html)
  - `MinValue` and `MaxValue` properties have been deprecated. Please, use [`min`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html#min) and [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatetimeinput.html#max) instead.
- [`IgrRangeSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html)
  - `AriaLabelLower` and `AriaLabelUpper` properties have been deprecated. Please, use [`thumbLabelLower`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html#thumbLabelLower) and [`thumbLabelUpper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html#thumbLabelUpper) instead.

#### Removed

- Removed our own `dir` attribute which shadowed the default one. This is a non-breaking change.
- [`IgrSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrslider.html) - `ariaLabel` shadowed property. This is a non-breaking change.
- [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.

## **18.5.0 (January 2024)**

### igniteui-react-charts (Charts)

- [Chart Highlight Filter](charts/features/chart-highlight-filter.md) - The [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) now expose a way to highlight and animate in and out of a subset of data. The display of this highlight depends on the series type. For column and area series, the subset will be shown on top of the total set of data where the subset will be colored by the actual brush of the series, and the total set will have a reduced opacity. For line series, the subset will be shown as a dotted line.

## **18.4.0 (December 2023)**

### igniteui-react-grids (Grid)

- Added New Features - [State Persistence](grids/grid/state-persistence.md)

## **18.3.0 (October 2023)**

### igniteui-react-grids - Toolbar - <label class="badge badge--preview">PREVIEW</label>

- Save tool action has been added to save the chart to an image via the clipboard.

- Vertical orientation has been added via the toolbar's [`orientation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html#orientation) property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.

- Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

- [Grid](grids/data-grid.md) - This is a new fully functional cross-platform grid and includes features like filtering, sorting, templates, row selection, row grouping, row pinning and movable columns.

### Deprecated Components

> [DataGrid](grids/data-grid/overview.md) - The DataGrid is deprecated, please use [Grid](grids/data-grid.md)

## **18.2.0 (June 2023)**

### New Components

- <label class="badge badge--preview">PREVIEW</label> [Toolbar](menus/toolbar.md) - This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) or [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

### igniteui-react-charts (Charts)

- [ValueLayer](charts/features/chart-overlays.md#react-value-layer) - A new series type named the [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html) is now exposed which can allow you to render an overlay for different focal points of the plotted data such as Maximum, Minimum, and Average. This is applied to the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) by adding to the new [`valueLines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#valueLines) collection.

- It is now possible to apply a **dash array** to the different parts of the series of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html). You can apply this to the [series](charts/types/line-chart.md#react-styling-line-chart) plotted in the chart, the [gridlines](charts/features/chart-axis-gridlines.md#react-axis-gridlines-properties) of the chart, and the [trendlines](charts/features/chart-trendlines.md#react-chart-trendlines-dash-array-example) of the series plotted in the chart.

## **18.1.0 (November 2022)**

Added significant improvements to default behaviors, and refined the Category Chart API to make it easier to use. These new chart improvements include:

- Responsive layouts for horizontal label rotation based on browser / screen size.
- Enhanced rendering for rounded labels on all platforms.
- Added marker properties to StackedFragmentSeries.
- Added [`shouldPanOnMaximumZoom`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#shouldPanOnMaximumZoom) property.
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

> \[!Note]
> [Chart Aggregation](charts/features/chart-data-aggregations.md) will not work when using [`includedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#includedProperties) | [`excludedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#excludedProperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render. The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.

### igniteui-react-grids (Data Grid)

- Changed **IgrColumn** to [`IgrDataGridColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcolumn.html)
- Changed **GridCellEventArgs** to [`IgrDataGridCellEventArgs`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagridcelleventargs.html)
- Changed **GridSelectionMode** to [`DataGridSelectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.datagridselectionmode.html)
- Changed **SummaryOperand** to [`DataSourceSummaryOperand`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_core.datasourcesummaryoperand.html)

## **16.16.0 (June 2022)**

### igniteui-react-charts (Charts)

- Added the highly-configurable [DataLegend](charts/features/chart-data-legend.md) component, which works much like the [`IgrLegend`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlegend.html), but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values.
- Added the highly-configurable [DataToolTip](charts/features/chart-data-tooltip.md) which displays values and titles of series as well as legend badges of series in a tooltip. This is now the default tooltip for all chart types.
- Added animation and transition-in support for Stacked Series. Animations can be enabled by setting the [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isTransitionInEnabled) property to true. From there, you can set the [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInDuration) property to determine how long your animation should take to complete and the [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInMode) to determine the type of animation that takes place.
- Added `AssigningCategoryStyle` event, is now available to all series in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html). This event is handled when you want to conditionally configure aspects of the series items such as `Fill` background-color and highlighting.
- New [`allowedPositions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#allowedPositions) enumeration for CalloutLayer. Used to limit where the callouts are to be placed within the chart. By default, the callouts are intelligently placed in the best place but this used to force for example `TopLeft`, `TopRight`, `BottomLeft` or `BottomRight`.
- New corner radius properties added for Annotation Layers; used to round-out the corners of each of the callouts. Note, a corner radius has now been added by default.
  - [`calloutCornerRadius`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#calloutCornerRadius) for CalloutLayer
  - [`axisAnnotationBackgroundCornerRadius`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinalvaluelayer.html#axisAnnotationBackgroundCornerRadius) for FinalValueLayer
  - [`xAxisAnnotationBackgroundCornerRadius`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcrosshairlayer.html#xAxisAnnotationBackgroundCornerRadius) and [`yAxisAnnotationBackgroundCornerRadius`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcrosshairlayer.html#yAxisAnnotationBackgroundCornerRadius) for CrosshairLayer
- New [`horizontalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#horizontalViewScrollbarMode) and [`verticalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#verticalViewScrollbarMode) enumeration to enable scrollbars in various ways. When paired with [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html#isVerticalZoomEnabled) or [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html#isHorizontalZoomEnabled), you'll be able to persist or fade-in and out the scrollbars along the axes to navigate the chart.
- New `FavorLabellingScaleEnd`, determines whether the axis should favor emitting a label at the end of the scale. Only compatible with numeric axes (e.g. [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html), [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html), `PercentChangeAxis`).
- New [`isSplineShapePartOfRange`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isSplineShapePartOfRange) determines whether to include the spline shape in the axis range requested of the axis.
- New [`xAxisMaximumGap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisMaximumGap), determines the maximum allowed value for the plotted series when using [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisGap). The gap determines the amount of space between columns or bars of plotted series.
- New [`xAxisMinimumGapSize`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisMinimumGapSize), determines the minimum allowed pixel-based value for the plotted series when using [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisGap) to ensure there is always some spacing between each category.

### igniteui-react-grids (Data Grid)

Added New Feature - [Row Paging](grids/data-grid/row-paging.md) which is used to split a large set of data into a sequence of pages that have similar content. With pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows/buttons that let users flip through the pages of data.

## **16.15.1 (December 2021)**

### igniteui-react-grids (Data Grid)

#### Data Grid

- Added `ValueMultiField`, of type string\[], in the [`IgrComboBoxColumn`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrcomboboxcolumn.html) to be used when your items in the drop down contain a key that consists of multiple fields.

> \[!Note]
> The following breaking changes were introduced

- Changed [`valueField`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrcomboboxcolumn.html#valueField) property from type string\[] to string.

### igniteui-react-inputs (Inputs)

#### Date Picker

- Changed ValueChanged event to `SelectedValueChanged`.

#### Multi-Column ComboBox

- Changed `TextChanged` event to `TextValueChanged`.
- Changed `ValueChanged` event to `SelectedValueChanged`.

<div class="divider--half"></div>

## **16.15.0 (November 2021)**

> \[!Note]
> Please ensure package "lit-html": "^2.0.0" or newer is added to your project for optimal compatibility.

### igniteui-react-charts (Charts)

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

- Changed [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisLabelLocation) property's type to **YAxisLabelLocation** from **AxisLabelLocation** in [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) and [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- Changed [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisLabelLocation) property's type to **XAxisLabelLocation** from **AxisLabelLocation** in [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html)
- Added [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisLabelLocation) property to [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- Added support for representing geographic series of [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) in a legend
- Added crosshair lines by default in [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) and [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- Added crosshair annotations by default in [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) and [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- Added final value annotation by default in [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html)
- Added new properties in Category Chart and Financial Chart:
  - [`crosshairsLineThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#crosshairsLineThickness) and other properties for customizing crosshairs lines
  - [`crosshairsAnnotationXAxisBackground`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#crosshairsAnnotationXAxisBackground) and other properties for customizing crosshairs annotations
  - [`finalValueAnnotationsBackground`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#finalValueAnnotationsBackground) and other properties for customizing final value annotations
  - [`areaFillOpacity`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#areaFillOpacity) that allow changing opacity of series fill (e.g. Area chart)
  - [`markerThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerThickness) that allows changing thickness of markers
- Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
  - [`markerAutomaticBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#markerAutomaticBehavior) that allows which marker type is assigned to multiple series in the same chart
  - [`legendItemBadgeShape`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#legendItemBadgeShape) for setting badge shape of all series represented in a legend
  - [`legendItemBadgeMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#legendItemBadgeMode) for setting badge complexity on all series in a legend
- Added new properties in Series in Data Chart and Geographic Map:
  - [`legendItemBadgeShape`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#legendItemBadgeShape) for setting badge shape on specific series represented in a legend
  - [`legendItemBadgeMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#legendItemBadgeMode) for setting badge complexity on specific series in a legend
- Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
- Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's [`markerAutomaticBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#markerAutomaticBehavior) property to `SmartIndexed` enum value
- Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's [`legendItemBadgeMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#legendItemBadgeMode) property to `MatchSeries` enum value
- Changed color palette of series and markers displayed in all charts to improve accessibility

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

<div class="divider--half"></div>

### igniteui-react-grids (Data Grid)

- New Features Added:
  - [Filter Row](grids/data-grid/column-filtering.md)
  - [Load/Save Layout Customizations](grids/data-grid/load-save-layout.md)
  - [GroupBy Area for column grouping](grids/data-grid/row-grouping.md)
  - [Cell Merging](grids/data-grid/cell-merging.md)
- New API:
  - Added `SelectionChanged` event. Used to detect changes on selection interactions
        e.g. Multiple row selection.
- Breaking Changes:
  - Changed grid's SummaryScope property's type to SummaryScope from [`DataSourceSummaryScope`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_core.datasourcesummaryscope.html)
  - Changed GroupHeaderDisplayMode property's type to GroupHeaderDisplayMode from [`DataSourceSectionHeaderDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_core.datasourcesectionheaderdisplaymode.html)

<div class="divider--half"></div>

## **16.14.0 (April 2021)**

### igniteui-react-charts (Charts)

This release introduces several new and improved visual design and configuration options for all of the chart components, e.g. [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html), [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), and [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html).

- Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
- Changed Scatter High Density series’ colors for heat min property from <span style="color:#8a5bb1">#8a5bb1</span> to <span style="color:#000000">#000000</span>
- Changed Scatter High Density series’ colors for heat max property from <span style="color:#ee5879">#ee5879</span> to <span style="color:#ee5879">#ee5879</span>
- Changed Financial/Waterfall series’ `NegativeBrush` and `NegativeOutline` properties from <span style="color:#C62828">#C62828</span> to <span style="color:#ee5879">#ee5879</span>
- Changed marker's thickness to 2px from 1px
- Changed marker's fill to match the marker's outline for [`IgrPointSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpointseries.html), [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html), [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html), [`IgrPolarScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarscatterseries.html). You can use set [`markerFillMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerFillMode) property to Normal to undo this change
- Compressed labelling for the [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) and [`IgrOrdinalTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrordinaltimexaxis.html)
- New Marker Properties:
  - series.[`markerFillMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerFillMode) - Can be set to `MatchMarkerOutline` so the marker depends on the outline
  - series.[`markerFillOpacity`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerFillOpacity) - Can be set to a value 0 to 1
  - series.[`markerOutlineMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerOutlineMode) - Can be set to `MatchMarkerBrush` so the marker's outline depends on the fill brush color
- New Series Property:
  - series.[`outlineMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#outlineMode) - Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
- New chart properties that define bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the [`computedPlotAreaMarginMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#computedPlotAreaMarginMode), listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart:
  - chart.[`plotAreaMarginLeft`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#plotAreaMarginLeft)
  - chart.[`plotAreaMarginTop`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#plotAreaMarginTop)
  - chart.[`plotAreaMarginRight`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#plotAreaMarginRight)
  - chart.[`plotAreaMarginBottom`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#plotAreaMarginBottom)
  - chart.[`computedPlotAreaMarginMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#computedPlotAreaMarginMode)
- New Highlighting Properties
  - chart.[`highlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#highlightingMode) - Sets whether hovered or non-hovered series to fade, brighten
  - chart.[`highlightingBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#highlightingBehavior) - Sets whether the series highlights depending on mouse position e.g. directly over or nearest item
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

- Added horizontal [`orientation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html#orientation) property to ItemLegend that can be used with Bubble, Donut, and Pie Chart
- Added [`legendHighlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#legendHighlightingMode) property - Enables series highlighting when hovering over legend items

### igniteui-react-maps (GeoMap)

> \[!Note]
> These features are CTP

- Added support for wrap around display of the map (scroll infinitely horizontally)
- Added support for shifting display of some map series while wrapping around the coordinate origin
- Added support for highlighting of the shape series
- Added support for some annotation layers for the shape series

<div class="divider--half"></div>

### igniteui-react-grids (Data Grid)

- Added `EditOnKeyPress` aka Excel-style Editing, instantly begin editing when typing.
- Added [`EditModeClickAction`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.editmodeclickaction.html) property - By default double-clicking is required to enter edit mode. This can be set to [`SingleClick`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.editmodeclickaction.html#SingleClick) to allow for edit mode to occur when selecting a new cell.
- Added [`EnterKeyBehaviors`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.enterkeybehaviors.html) property - aka Excel-style Navigation (Enter Behavior) – controls the behavior of the enter key, e.g. Options are (none, edit, move up, down, left, right)
- Added [`EnterKeyBehaviorAfterEdit`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_grids.enterkeybehaviorafteredit.html) property - While in edit-mode, this property controls when enter is pressed, e.g. Options are (moves to the cell below, above, right, left)
- Added `SelectAllRows` - method.
- Added Row Range Selection - With `GridSelectionMode` property set to MultipleRow the following new functionality is now included:
  - Click and drag to select rows
  - <kbd>SHIFT</kbd> and click to select multiple rows.
  - <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.
- Pressing space bar toggles selection of active row via `GridSelectionMode` property set to MultipleRow or SingleRow
- Added Column Summaries to Column Options Dialog.

### igniteui-react-inputs (Inputs)

#### Date Picker

- `ShowTodayButton` - Toggles Today button visibility
- [`label`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#label) - Adds a label above the date value
- [`placeholder`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#placeholder) property - adds custom text when no value is selected
- `FormatString` - Customize input date string e.g. (`yyyy-MM-dd`)
- `DateFormat` - Specifies whether to display selected dates as LongDate or ShortDate
- `FirstDayOfWeek` - Specifies first day of week
- `FirstWeekOfYear` - Specifies when to display first week of the year, e.g. (First Full Week, First Four day Week)
- `ShowWeekNumbers` - Toggles Week number visibility
- `MinDate` & `MaxDate` - Date limits, specifying a range of available selectable dates.
- Added Accessibility

<div class="divider--half"></div>

## **16.12.3 (November 2020)**

### igniteui-react-grids (Data Grid)

> \[!Note]
> These breaking changes were introduce in the grid package.

- Changed name of PropertyPath

The data grid component property `propertyPath` has been renamed to `field`. This applies to all Column types, GroupDescription, SortDescription & SummaryDescription.

```tsx
 <IgrTextColumn field="Name"/>
```

```ts
import { IgrColumnSummaryDescription, IgrColumnSortDescription, IgrColumnGroupDescription } from 'igniteui-react-data-grids'
const productCount = new IgrColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgrColumnGroupDescription();
income.field = "Income";
```

## **16.12.2 (April 2020)**

### igniteui-react-grids (Data Grid)

- Changed Name of Live Grid

The data grid component and it's corresponding module's names have changed from "LiveGrid" to "DataGrid".

> \[!Note]
> These breaking changes were introduce in these packages and components only:

The new code for importing the grid and it's corresponding module is:

```ts
import { IgrDataGrid } from "igniteui-react-data-grids";
import { IgrDataGridModule } from 'igniteui-react-data-grids';
```

- Required Peer Dependency for Data Grid

The data grid component requires the "inputs" package.

```ts
**npm install --save igniteui-react-inputs**
```

<div class="divider--half"></div>

## **16.11.7**

- Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> \[!Note]
> These breaking changes were introduce in these packages and components only:

| Affected Packages | Affected Components |
| ------------------|---------------------|
| <a href="https://www.npmjs.com/package/igniteui-react-excel/v/16.11.7" target="_blank">igniteui-react-excel</a> | [Excel Library](excel-library.md)  |
| <a href="https://www.npmjs.com/package/igniteui-react-spreadsheet/v/16.11.7" target="_blank">igniteui-react-spreadsheet</a> | [Spreadsheet](spreadsheet-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-react-maps/v/16.11.7" target="_blank">igniteui-react-maps</a> | [Geo Map](geo-map.md), [Treemap](charts/types/treemap-chart.md)  |
| <a href="https://www.npmjs.com/package/igniteui-react-gauges/v/16.11.7" target="_blank">igniteui-react-gauges</a> |  [Bullet Graph](bullet-graph.md), [Linear Gauge](linear-gauge.md), [Radial Gauge](radial-gauge.md)   |
| <a href="https://www.npmjs.com/package/igniteui-react-charts/v/16.11.7" target="_blank">igniteui-react-charts</a>| Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](zoomslider-overview.md)  |
| <a href="https://www.npmjs.com/package/igniteui-react-core/v/16.11.7" target="_blank">igniteui-react-core</a> | all classes and enums  |
| <a href="https://www.npmjs.com/package/igniteui-react-grids/v/16.11.7" target="_blank">igniteui-react-grids</a> | [Data Grid](grids/data-grid/overview.md) |

- Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import { IgrLinearGraphRange } from "igniteui-react-gauges";
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { SweepDirection } from 'igniteui-react-core';
// charts:
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
// maps:
import { IgrGeographicMap } from "igniteui-react-maps";
import { IgrGeographicMapModule } from "igniteui-react-maps";
// grids:
import { IgrLiveGrid } from "igniteui-react-data-grids";
import { IgrLiveGridModule } from 'igniteui-react-data-grids';
```

- Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges/ES5/igr-linear-gauge";
import { IgrLinearGaugeModule } from "igniteui-react-gauges/ES5/igr-linear-gauge-module";
import { IgrLinearGraphRange } from "igniteui-react-gauges/ES5/igr-linear-graph-range";

import { IgrRadialGauge } from "igniteui-react-gauges/ES5/igr-radial-gauge";
import { IgrRadialGaugeModule } from "igniteui-react-gauges/ES5/igr-radial-gauge-module";
import { IgrRadialGaugeRange } from "igniteui-react-gauges/ES5/igr-radial-gauge-range";
import { SweepDirection } from "igniteui-react-core/ES5/SweepDirection";

// charts:
import { IgrFinancialChart } from "igniteui-react-charts/ES5/igr-financial-chart";
import { IgrFinancialChartModule } from "igniteui-react-charts/ES5/igr-financial-chart-module";
import { IgrDataChart } from "igniteui-react-charts/ES5/igr-data-chart";
import { IgrDataChartCoreModule } from "igniteui-react-charts/ES5/igr-data-chart-core-module";

// maps:
import { IgrGeographicMap } from "igniteui-react-maps/ES5/igr-geographic-map";
import { IgrGeographicMapModule } from "igniteui-react-maps/ES5/igr-geographic-map-module";

// grids:
import { IgrLiveGrid } from "igniteui-react-data-grids/ES5/igr-live-grid";
import { IgrLiveGridModule } from 'igniteui-react-data-grids/ES5/igr-live-grid-module';
```
