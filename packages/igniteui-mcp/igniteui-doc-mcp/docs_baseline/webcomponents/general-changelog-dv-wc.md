---
title: Web Components What's New | Ignite UI for Web Components | Infragistics
_description: Learn about new features in the Ignite UI for Web Components.
_keywords: Changelog, What's New,  Ignite UI for Web Components, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode", "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls
_tocName: Changelog
---

# Ignite UI for Web Components Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of Ignite UI for Web Components are documented on this page.

## **7.0.1 (March 2026)**

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
| 3055 | IgcDataPieChart | DataPieChart - missing styling properties for the Others Slice |
| 38668 | IgcDataTooltipLayer | TitleTextColor is overridden when chart's TitleTextColor is used |
| 40238 | Excel | fixed Excel Formula parser - Workbook.Load() throwing an Excel.FormulaParseException |
| 41167 | Excel | Object's Formulas are not round-tripped - Added Excel support for round tripping the camera tool |
| 41419 | Excel | Saving a VBA Signed Excel file does not keep a signature/certificate. |

## **7.0.0 (February 2026)**

### igniteui-webcomponents-charts

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|2327|IgcToolbar|SubPanel sample not working in WebComponents|
|2638|IgcDataChart|Improve mouse hot detection for rotated labels|
|2959|IgcLinearGauge|Gauges should not call View functions|
|2326|IgcDataChart|Add property to set others color|
|41594|IgcDataChart|AssigningCategoryStyle args.GetItems is null or not working to update items in the fragment series|

### igniteui-webcomponents

#### New Features

- #### AI-Assisted Development - Copilot Skills
  - Four end-user skills are now shipped with the `igniteui-webcomponents` package under the `skills/` directory providing step-by-step guidance to GitHub Copilot and other LLM agents for common tasks:
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

### igniteui-webcomponents-grids (Grids)

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html), [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html)
  - Improved performance by dynamically adjusting the scroll throttle based on the data displayed in grid.

**Breaking Changes**

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html), [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html)
  - Original `data` array mutations (like adding/removing/moving records in the original array) are no longer detected automatically. Components need an array reference change for the change to be detected.

**Localization(i18n)**

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html), [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html), [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html), [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html), [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html), [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html), [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html), [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html), [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html), [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html)
  - New `Intl` implementation for the grid components that format and render data like dates and numbers. Updated `Intl` implementation for [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html), [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html), and [`IgcDateRangePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdaterangepickercomponent.html) that previously used it in `igniteui-webcomponents`.
  - New localization implementation for the currently supported languages for all components that have resource strings in the currently supported languages.
  - New public localization API and package named `igniteui-i18n-resources` containing the new resources that are used in conjunction.
        **PDF export**
- Added PDF export functionality allowing users to export grid data to PDF format.

**Popover API**
Dropdown menus and dialogs are now using HTML Popover API to provide better positioning and accessibility.

## **6.3.1 (December 2025)**

### Enhancements

### igniteui-webcomponents-charts

Added OthersCategoryBrush and OthersCategoryOutline to DataPieChart and ProportionalCategoryAngleAxis

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|33808|IgcDataChart|The scale set for IntervalType Ticks in TimeAxisInterval is not displayed|
|34255|IgcDataChart|0.00001 scale tick marks are displayed overlapping each other|
|38510|IgcDataChart|AssigningCategoryStyle event support for Stacked Series|

### Enhancements

#### Charts

- Added LabelFormatOverride event to TimeXAxisLabelFormat so you can now override the formatting with an event at all time-formatting levels on the TimeXAxis.

- Adjusted the schema generation to account for more items to make it more likely to find valid values for properties.

## **6.3.0 (November 2025)**

### igniteui-webcomponents-charts (Charts)

#### <label class="badge badge--preview">PREVIEW</label> User Annotations

In Ignite UI for Web Components, you can now annotate the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) with slice, strip, and point annotations at runtime using the new user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`toolbar`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#toolbar).

<img class="responsive-img" src="../images/charts/data-chart-user-annotation-create.gif"
alt="Web Components user-annotation-create"/>

#### <label class="badge badge--preview">PREVIEW</label> Collision Detection for Axis Annotations

Ability for axis annotations to automatically detect collisions and truncate to fit better. To enable this feature you must set the following properties:

- `ShouldAvoidAnnotationCollisions`
- `ShouldAutoTruncateAnnotations`

### igniteui-webcomponents-maps (Geographic Map)

- Azure Map Imagery is now RTM.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook
|40262|IgcSpreadsheet|#Circularity! is displayed when there are warnings. Request to match Excel - display a value eg. 0 instead
|40458|IgcSpreadsheet|When using Arial font, the igx-spreadsheet cuts off text in the cells
|40490|IgcDatePicker|Inputs by Autofill won't give any effects for a date picker

## **6.3.6 (November 2025)**

### New Components

- Added [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) component

### igniteui-webcomponents-grids (Grids)

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html), [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)
  - Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell.

            It can be enabled on the individual columns:

            ```html
            <igc-column field="field" merge="true"></igc-column>
            ```
            The merging can be configured on the grid level to apply either:

    - `onSort` - only when the column is sorted.
    - `always` - always, regardless of data operations.

            ```html
            <igc-grid cellMergeMode="always">
            </igc-grid>
            ```

            The default `cellMergeMode` is `onSort`.

            The functionality can be modified by setting a custom `mergeStrategy` on the grid, in case some other merge conditions or logic is needed for a custom scenario.

            It's possible also to set a `mergeComparer` on the individual columns, in case some custom handling is needed for a particular data field.

  - Added ability to pin individual columns to a specific side (start or end of the grid), so that you can now have pinning from both sides. This can be done either declaratively by setting the `pinningPosition` property on the column:

            ```html
            <igc-column field="Col1" pinned="true" pinningPosition="pinningPosition">
            </igc-column>
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
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook|
|40262|IgcSpreadsheet|#Circularity! is displayed when there are warnings. Request to match Excel - display a value eg. 0 instead|
|40458|IgcSpreadsheet|When using Arial font, the igx-spreadsheet cuts off text in the cells|
|40490|IgcDatePicker|Inputs by Autofill won't give any effects for a date picker|

## **6.2.1 (September 2025)**

### igniteui-webcomponents-maps

#### <label class="badge badge--preview">PREVIEW</label> Azure Map Imagery Support

The `GeographicMap` now supports Azure-based map imagery, allowing developers to display detailed, dynamic maps across multiple application types. You can combine multiple map layers, visualize geographic data, and create interactive mapping experiences with ease.

Note: Support for Bing Maps imagery is being phased out. Existing enterprise keys can still be used to access Bing Maps, ensuring your current applications continue to function while you transition to Azure maps.

Explore some of the publicly available [Azure maps here](https://azure.microsoft.com/en-us/products/azure-maps).

### igniteui-webcomponents-charts

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

There is a new property called `UseInsetOutlines` to control how outlines on the [`IgcRadialPieSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcradialpieseriescomponent.html) are rendered. Setting this value to **true** will inset the outlines within the slice shape, whereas a **false** (default) value will place the outlines half-in half-out along the edge of the slice shape.

**Breaking Changes**

- A fix was made due to an issue where the `PlotAreaPosition` and `ChartPosition` properties on [`IgcChartMouseEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcchartmouseeventargs.html) class were reversed. This will change the values that [`plotAreaPosition`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcchartmouseeventargs.html#plotAreaPosition) and [`chartPosition`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcchartmouseeventargs.html#chartPosition) return.

### igniteui-webcomponents-grids

#### <label class="badge badge--preview">PREVIEW</label> Cell Suffix Content

Added support for suffix content within the cells that allows you to add additional text or icons to the end of the cell value and style it. The full list of added properties for the cell suffix content is listed below and is available on the [`IgcDataGridColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html) and `CellInfo` class:

- [`suffixText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixText)
- [`suffixTextColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixTextColor)
- `SuffixTextFont`
- [`suffixIconName`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconName)
- [`suffixIconCollectionName`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconCollectionName)
- [`suffixIconStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconStroke)
- [`suffixIconFill`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconFill)
- [`suffixIconViewBoxLeft`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconViewBoxLeft)
- [`suffixIconViewBoxTop`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconViewBoxTop)
- [`suffixIconViewBoxWidth`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconViewBoxWidth)
- [`suffixIconViewBoxHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#suffixIconViewBoxHeight)
- [`textDecoration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#textDecoration)

Please note that the maximum size available for the icons is 24x24. You can provide an icon that is larger or smaller than this, but you will need to configure the viewbox settings in order to properly scale it to fit in the 24x24 space so it is fully visible.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|27304| `DataChart` | Zoom rectangle is not positioned the same as the background rectangle|
|37930| `DataChart` | Data Annotation Overlay Text Color not working|
|30600| `DoughnutChart` | No textStyle property for either the chart or series (pie chart has this)|
|31624| [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) | Resizing the containing window of the Category Chart causes the chart to fail to render the series|
|38231| [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) | Unpinned column does not return to the original position if hidden columns exist|
|33861| Excel Library | Adding line chart corrupts excel File for German culture|

### Enhancements

#### IgrBulletGraph

- <label class="badge badge--preview">PREVIEW</label> Added new `LabelsVisible` property

#### Charts

- New properties added to the DataToolTipLayer, ItemToolTipLayer, and CategoryToolTipLayer to aid in styling: `ToolTipBackground`, `ToolTipBorderBrush`, and `ToolTipBorderThickness`

- New properties added to the DataLegend to aid in styling: `ContentBackground`, `ContentBorderBrush`, and `ContentBorderThickness`. The `ContentBorderBrush` and `ContentBorderThickness` default to transparent and 0 respectively, so in order to see these borders, you will need to set these properties.

- Added a new property to [`IgcChartMouseEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcchartmouseeventargs.html) called [`worldPosition`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcchartmouseeventargs.html#worldPosition) that provides the world relative position of the mouse. This position will be a value between 0 and 1 for both the X and Y axis within the axis space.

- Added [`highlightingFadeOpacity`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#highlightingFadeOpacity) to [`IgcSeriesViewerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html) and [`IgcDomainChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html). This allows you to configure the opacity applied to highlighted series.

- Expose `CalloutLabelUpdating` event for domain charts.

#### IgcDataGrid

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

#### IgcLinearGauge

- <label class="badge badge--preview">PREVIEW</label> Added new `LabelsVisible` property

## **6.2.0 (August 2025)**

### Enhancements

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
|[1772](https://github.com/IgniteUI/igniteui-webcomponents/issues/1772)|Carousel|Ensure `igcSlideChanged` event is emitted when a slide is changed|
|[1765](https://github.com/IgniteUI/igniteui-webcomponents/pull/1765)|Date picker|Styling issues|
|[1764](https://github.com/IgniteUI/igniteui-webcomponents/pull/1764)|Date range picker|CSS borders and elevation|
|[1747](https://github.com/IgniteUI/igniteui-webcomponents/pull/1747)|File input|Bootstrap invalid box-shadow styles|
|[1672](https://github.com/IgniteUI/igniteui-webcomponents/pull/1672)|Stepper|Error when setting linear property in deferred rendering scenarios|
|[1768](https://github.com/IgniteUI/igniteui-webcomponents/pull/1768)|Textarea|Readonly state styles|
|[1755](https://github.com/IgniteUI/igniteui-webcomponents/pull/1755)|Dropdown|Icon size in Bootstrap theme|
|[1739](https://github.com/IgniteUI/igniteui-webcomponents/pull/1739)|Inputs|Label positioning and transition logic in Material theme|

## **6.1.0 (July 2025)**

- <label class="badge badge--new">NEW</label> Component - Date Range Picker

### Breaking Changes

#### File Input

- `igcChange` & `igcCancel` events detail now returns the underlying component `files` property.

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
|[1710](https://github.com/IgniteUI/igniteui-webcomponents/issues/1710)|Calendar and Date Picker|Incorrect date rollover for in certain scenarios
|[1728](https://github.com/IgniteUI/igniteui-webcomponents/pull/1728)|Combo|Case insensitive icon styles in themes
|[1726](https://github.com/IgniteUI/igniteui-webcomponents/pull/1726)|Input|Replace border in fluent theme with a box-shadow
|[1732](https://github.com/IgniteUI/igniteui-webcomponents/pull/1732)|Input|Focused state background color in Indigo theme
|[1715](https://github.com/IgniteUI/igniteui-webcomponents/pull/1715)|Text Area|Label height and component height override

## **6.0.1 (July 2025)**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36448 | `RadialGauge` | Radial label format properties do not work. (eg. Title, SubTitles)|

### igniteui-webcomponents-charts

- Add <label class="badge badge--new">NEW</label> `MaximumExtent` and `MaximumExtentPercentage` properties for use with axis labels.

## **6.0.0 (June 2025)**

### igniteui-webcomponents-maps

> \[!Note]
> As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.
> For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

### igniteui-webcomponents-charts

- Added <label class="badge badge--preview">PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) layers:
  - Data Annotation Band Layer
  - Data Annotation Line Layer
  - Data Annotation Rect Layer
  - Data Annotation Slice Layer
  - Data Annotation Strip Layer

- The [Data Tooltip](charts/features/chart-data-tooltip.md) and [Data Legend](charts/features/chart-data-legend.md) expose <label class="badge badge--preview">PREVIEW</label> `LayoutMode` property that you can use to layout the contents of the tooltip or legend in a table or vertical layout structure.

- <label class="badge badge--preview">PREVIEW</label> The [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#defaultInteraction) property of the charts has been updated to include a new enumeration - `DragSelect` in which the dragged preview Rect will select the points contained within.

- <label class="badge badge--preview">PREVIEW</label> The [ValueOverlay and ValueLayer](charts/features/chart-overlays.md), in addition to the <label class="badge badge--preview">PREVIEW</label> [Chart Data Annotations](charts/features/chart-data-annotations.md) listed above now expose an `OverlayText` property that can be used to overlay additional annotation text in the plot area. These appearance of these annotations can be configured by using the many OverlayText-prefixed properties. For example, the `OverlayTextBrush` property will configure the color of the overlay text.

- <label class="badge badge--new">NEW</label> [Trendline Layer](charts/features/chart-trendlines.md) series type that allows you to apply a single trend line per trend line layer to a particular series. This allows the usage of multiple trend lines on a single series since you can have multiple [TrendlineLayer](charts/features/chart-overlays.md) series types in the chart.

### igniteui-webcomponents-dashboards

- The [`IgcDashboardTileComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_dashboards.igcdashboardtilecomponent.html) now supports propagating the aggregations from its DataGrid view to the chart visualization such as sorting, grouping, filtering and selection. This is currently supported by binding the `DataSource` of the [`IgcDashboardTileComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_dashboards.igcdashboardtilecomponent.html) to an instance of `LocalDataSource`.

### igniteui-webcomponents-grids

**Breaking Changes**

- The `DataGrid` & [`IgcMultiColumnComboBoxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcmulticolumncomboboxcomponent.html) are now part of the igniteui-webcomponents-data-grids package.

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
|37685 | [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) | Poor rendering of numbers formatted with Arial font.|
|37244 | Excel Library | Custom Data Validation is not working.|

## **5.4.0 (April 2025)**

### igniteui-webcomponents-grids

- **All Grids**
  - Allow applying initial filtering through [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#filteringExpressionsTree) property

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
| 28480 | [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) | Undefined reference error is thrown when a datasource is replaced|
| 25602 | `DataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
| 30319 | `DataGrid` | Records are sorted despite no value changed|
| 32598 | `DataGrid` | Multi-selection is not working correctly
| 36374 | [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) | A previous value was bound when a form was submitted on any touch device|

## **5.3.0 (February 2025)**

### Enhancements

#### Toolbar

- Added new `GroupHeaderTextStyle` property to [`toolbar`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#toolbar) and [`IgcToolPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolpanelcomponent.html). If set, it will apply to all [`IgcToolActionGroupHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactiongroupheadercomponent.html) actions.
- Added new property on [`IgcToolActionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html) called [`titleHorizontalAlignment`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#titleHorizontalAlignment) which controls the horizontal alignment of the title text.
- Added new property on [`IgcToolActionSubPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionsubpanelcomponent.html) called [`itemSpacing`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionsubpanelcomponent.html#itemSpacing) which controls the spacing between items inside the panel.

### Bug Fixes

The following table lists the bug fixes made for the Ignite UI for Web Components toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
| 30286 | `DataChart` | Bubble Series tooltip content is switched to that of nearby bubble data in clicking a bubble|
| 32906 | `DataChart` | `DataChart` is showing two xAxis on the top|
| 33605 | `DataChart` | ScatterLineSeries is not showing the color of the line correctly in the legend|
| 34776 | `DataChart` | Repeatedly showing and hiding the `DataChart` causes memory leakage in JS Heap|
| 35498 | `DataChart` | Tooltips for the series specified in IncludedSeries are not displayed|
| 34053 | `RadialGauge` | The position of the scale label is shifted|
| 35496 | [`IgcSpreadsheetComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_spreadsheet.igcspreadsheetcomponent.html) | Error when setting styles in Excel with images|
| 26218 | Excel Library | Chart's plot area right margin becomes narrower and fill pattern and fill foreground are gone just by loading an Excel file|
| 34083 | Excel Library | TextOperatorConditionalFormat's is not loaded/saved properly if the text contains = in a template Excel file|
| 35495 | Excel Library | Pictures in cells are lost when a template file is loaded|
| 36176 | Excel Library | Exception occurs when loading an Excel workbook that has a LET function|
| 36379 | Excel Library |Colors with any alpha channel in an excel workbook fail to load|

## **5.2.0 (January 2025)**

- Bug Fixes

### igniteui-webcomponents-grids

- **All Grids**
  - Fixed a critical memory leak when components are opened in several duplicate browser tabs.

## **5.1.1 (December 2024)**

### igniteui-webcomponents-charts

- <label class="badge badge--preview">PREVIEW</label> [Dashboard Tile](dashboard-tile.md) component is a container control that analyzes and visualizes a bound ItemsSource collection or single point and returns an appropriate data visualization based on the schema and count of the data. This control utilizes a built-in [Toolbar](menus/toolbar.md) component to allow you to make changes to the visualization at runtime, allowing you to see many different visualizations of your data with minimal code.

### igniteui-webcomponents-charts

- <label class="badge badge--preview">PREVIEW</label> [Color Editor](inputs/color-editor.md) can be used as a standalone color picker and is now integrated into <label class="badge badge--preview">PREVIEW</label> ToolAction of [Toolbar](menus/toolbar.md) component to update visualizations at runtime.

## **5.0.0 (September 2024)**

### igniteui-webcomponents-charts

- New [Data Pie Chart](charts/types/data-pie-chart.md) - The [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) is a new component that renders a pie chart. This component works similarly to the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html), in that it will automatically detect the properties on your underlying data model while allowing selection, highlighting, animation and legend support via the ItemLegend component.

- New [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html), to plot slices similar to a pie chart, a type of data visualization where data points are represented as segments within a circular graph.

- [`toolbar`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#toolbar)

  - New ToolActionCheckboxList
        A new CheckboxList ToolAction that displays a collection of items with checkboxes for selecting. A grid inside ToolAction CheckboxList grows in height up to 5 items, then a scrollbar is displayed.
        Requires IgcCheckboxListModule to be registered.

  - New Filtering Support

  - Axis Field Changes
        New default IconMenu in Toolbar when targeting CategoryChart.
        Label fields are mapped to the X-axis and Value fields are mapped to the Y-axis.
        Target chart reacts in realtime to changes made. IconMenu is hidden when chart has no ItemsSource set.

### igniteui-webcomponents-grids

- **All Grids**
  - Added new `RowClick` event.
- [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html)
  - Added `sortable` property for a [`IgcPivotDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdimension.html).
  - Added horizontal layout. Can be enabled inside the new `pivotUI` property as `rowLayout` `horizontal`.
  - Added row dimension summaries for horizontal layout only. Can be enabled for each [`IgcPivotDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdimension.html) by setting `horizontalSummary` to **true**.
  - Added `horizontalSummariesPosition` property to the `pivotUI`, configuring horizontal summaries position.
  - Added row headers for the row dimensions. Can be enabled inside the new `pivotUI` property as `showHeaders` **true**.
  - Keyboard navigation now can move in to row headers back and forth from any row dimension headers or column headers.
  - Added keyboard interactions for row dimension collapse using <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> arrows and row headers sorting using <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> arrows.

**Breaking Changes**

- **All Grids**
  - [`IgcRowIslandComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowislandcomponent.html)
  - Removed `displayDensity` deprecated property.
  - Renamed `actualColumns`, `contentColumns` properties to `actualColumnList` and `contentColumnList`. Use `column` or `columnList` property to get all columns now.
  - Renamed `rowDelete` and `rowAdd` event argument type to [`IgcRowDataCancelableEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowdatacancelableeventargs.html).
  - Renamed `contextMenu` event argument type to [`IgcGridContextMenuEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcontextmenueventargs.html).
  - Removed [`IgcGridEditEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridediteventargs.html),  [`IgcGridEditDoneEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgrideditdoneeventargs.html), [`IgcPinRowEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpinroweventargs.html) events `rowID` and `primaryKey` properties. Use `rowKey` instead.
- [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html)
  - removed `showPivotConfigurationUI` property. Use `pivotUI` and set inside it the new `showConfiguration` option.
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
  - Removed `movable` property. Use Grid's `moving` property now.
  - Removed `columnChildren` property. Use `childColumns` instead.
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup)
  - Removed `children` property. Use `childColumns` instead.
- [`IgcPaginatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginatorcomponent.html)
  - Removed `isFirstPageDisabled` and `isLastPageDisabled` properties. Use `isFirstPage` and `isLastPage` instead.

## **4.8.1 (June 2024)**

### igniteui-webcomponents

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html), [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) - exposed [`validateOnly`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html#validateOnly) to enable validation rules being enforced without restricting user input.
- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - [`IgcPositionStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpositionstrategy.html) property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html) - [`IgcSplitPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html) [`isMaximized`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#isMaximized) is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the [`isMaximized`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#isMaximized) property of [`IgcTabGroupPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html) and/or [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html) instead.

### igniteui-webcomponents-grids

- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](grids/grid/size.md) topic for more regarding the Grid.

### igniteui-webcomponents-charts

- [Data Legend Grouping](charts/features/chart-data-legend.md#web-components-data-legend-grouping) & [Data Tooltip Grouping](charts/features/chart-data-tooltip.md#web-components-data-tooltip-grouping-for-data-chart) - New grouping feature added. The property `GroupRowVisible` toggles grouping with each series opting in can assign group text via the [`dataLegendGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriescomponent.html#dataLegendGroup) property. If the same value is applied to more than one series then they will appear grouped. Useful for large datasets that need to be categorized and organized for all users.

- [Chart Selection](charts/features/chart-data-selection.md) - New series selection styling. This is adopted broadly across all category, financial and radial series for [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) and [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html). Series can be clicked and shown a different color, brightened or faded, and focus outlines. Manage which items are effected through individual series or entire data item. Multiple series and markers are supported. Useful for illustrating various differences or similarities between values of a particular data item. Also  `SelectedSeriesItemsChanged` event and [`selectedSeriesItems`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#selectedSeriesItems) are available for additional help to build out robust business requirements surrounding other actions that can take place within an application such as a popup or other screen with data analysis based on the selection.

- [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html), to enable creating pie charts in the allowing robust visualizations using all the added power of the data chart.

- [Treemap Highlighting](charts/types/treemap-chart.md#web-components-treemap-highlighting) - Now exposes a [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#highlightingMode) property that allows you to configure the mouse-over highlighting of the items in the tree map. This property takes two options: `Brighten` where the highlight will apply to the item that you hover the mouse over only, and `FadeOthers` where the highlight of the hovered item will remain the same, but everything else will fade out. This highlight is animated, and can be controlled using the [`highlightingTransitionDuration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#highlightingTransitionDuration) property.

- [Treemap Percent-based Highlighting](charts/types/treemap-chart.md#web-components-treemap-percent-based-highlighting) - New percent-based highlighting, allowing nodes to represent progress or subset of a collection. The appearance is shown as a fill-in of its backcolor up to a specific value either by a member on your data item or by supplying a new [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#highlightedDataSource). Can be toggled via [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#highlightedValuesDisplayMode) and styled via `FillBrushes`.

- [`toolbar`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#toolbar) - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

### igniteui-webcomponents-gauges

- [`IgcRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html)
  - New label for the highlight needle. [`highlightLabelText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#highlightLabelText) and [`highlightLabelSnapsToNeedlePivot`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#highlightLabelSnapsToNeedlePivot) and many other styling related properties for the HighlightLabel were added.

## **4.8.0 (March 2024)**

### igniteui-webcomponents-grids

- New [[`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)](grids/hierarchical-grid/overview.md) component.

### igniteui-webcomponents-charts

- New Data Filtering via the [`initialFilter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#initialFilter) property. Apply filter expressions to filter the chart data to a subset of records. Can be used for drill down large data.

- `XamRadialChart`
  - New Label Mode
        The [`IgcCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryangleaxiscomponent.html) for the now exposes a [`labelMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryangleaxiscomponent.html#labelMode) property that allows you to further configure the location of the labels. This allows you to toggle between the default mode by selecting the `Center` enum, or use the new mode, `ClosestPoint`, which will bring the labels closer to the circular plot area.

### igniteui-webcomponents-gauges

- [`IgcRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html)
  - New title/subtitle properties. [`titleText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#titleText), [`subtitleText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#subtitleText) will appear near the bottom the gauge. In addition, the various title/subtitle font properties were added such as `TitleFontSize`, `TitleFontFamily`, `TitleFontStyle`, `TitleFontWeight` and [`titleExtent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#titleExtent). Finally, the new [`titleDisplaysValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#titleDisplaysValue) will allow the value to correspond with the needle's position.
  - New [`opticalScalingEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#opticalScalingEnabled) and [`opticalScalingSize`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#opticalScalingSize) properties for the [`IgcRadialGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html). This new feature will manage the size at which labels, titles, and subtitles of the gauge have 100% optical scaling. You can read more about this new feature in this [topic](radial-gauge.md#optical-scaling)
  - New highlight needle was added. [`highlightValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#highlightValue) and [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcradialgaugecomponent.html#highlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- [`IgcLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html)
  - New highlight needle was added. [`highlightValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html#highlightValue) and [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html#highlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- [`IgcBulletGraphComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html)
  - The Performance bar will now reflect a difference between the value and new [`highlightValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#highlightValue) when the [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#highlightValueDisplayMode) is applied to the 'Overlay' setting. The highlight value will show a filtered/subset completed measured percentage as a filled in color while the remaining bar's appearance will appear faded to the assigned value, illustrating the performance in real-time.

## **4.7.0 (January 2024)**

### igniteui-webcomponents-charts

- [Chart Highlight Filter](charts/features/chart-highlight-filter.md) - The [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) and [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) now expose a way to highlight and animate in and out of a subset of data. The display of this highlight depends on the series type. For column and area series, the subset will be shown on top of the total set of data where the subset will be colored by the actual brush of the series, and the total set will have a reduced opacity. For line series, the subset will be shown as a dotted line.

## **4.6.0 (December 2023)**

### igniteui-webcomponents-grids

- Added New Features (Grid) - [State Persistence](grids/grid/state-persistence.md).

## **4.3.2 (October 2023)**

### igniteui-webcomponents-layouts

- <label class="badge badge--preview">PREVIEW</label> [Toolbar](menus/toolbar.md)
  - Save tool action has been added to save the chart to an image via the clipboard.
  - Vertical orientation has been added via the toolbar's [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html#orientation) property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
  - Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

## **4.3.0 (June 2023)**

### igniteui-webcomponents-layouts

- <label class="badge badge--preview">PREVIEW</label> [Toolbar](menus/toolbar.md) - This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) or [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

### igniteui-webcomponents-charts

- [ValueLayer](charts/features/chart-overlays.md#web-components-value-layer) - A new series type named the [`IgcValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcvaluelayercomponent.html) is now exposed which can allow you to render an overlay for different focal points of the plotted data such as Maximum, Minimum, and Average. This is applied to the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) and [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) by adding to the new [`valueLines`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#valueLines) collection.

- It is now possible to apply a **dash array** to the different parts of the series of the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html). You can apply this to the [series](charts/types/line-chart.md#web-components-styling-line-chart) plotted in the chart, the [gridlines](charts/features/chart-axis-gridlines.md#web-components-axis-gridlines-properties) of the chart, and the [trendlines](charts/features/chart-trendlines.md#web-components-chart-trendlines-dash-array-example) of the series plotted in the chart.

## **4.2.5 (April 2023)**

### igniteui-webcomponents-grids

- A new argument [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) has been introduced to [`IgcRowDataEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowdataeventargs.html), and part of the event arguments that are emitted by the `RowAdded` and `RowDeleted` events. When the grid has a primary key attribute added, then the emitted primaryKey event argument represents the row ID, otherwise it defaults to undefined.

- `RowSelectionChanging` event arguments are changed. Now, the `OldSelection`, `NewSelection`, `Added` and `Removed` collections no longer consist of the row keys of the selected elements when the grid has set a primaryKey, but now in any case the row data is emitted.

- When the grid is working with remote data and a primary key has been set, the selected rows that are not currently part of the grid view will be emitted for a partial row data object.

- When selected row is deleted from the grid component `RowSelectionChanging` event will no longer be emitted.

- The `OnGroupingDone` event has been renamed to `GroupingDone` to not violate the no on-prefixed outputs convention.

- The `OnDensityChanged` event has been renamed to `DensityChanged` to not violate the no on-prefixed outputs convention. All components exposing this event are affected.

- [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html): The [`IgcPivotDateDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdatedimension.html) properties `InBaseDimension` and `InOption` have been deprecated and renamed to [`baseDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdatedimension.html#baseDimension) and [`options`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdatedimension.html#options) respectively.

### igniteui-webcomponents-inputs

- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html), the StepDownAsync(DateTimeInputDatePart.Date, SpinDelta.Date) is now trimmed down to DatePart instead of DateTimeInputDatePart
- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html) and [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html), added component validation along with styles for invalid state
- `Mask`, added the capability to escape mask pattern literals.
- [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html) added a [`shape`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html#shape) property that controls the shape of the badge and can be either `Square` or `Rounded`. The default shape of the badge is rounded.
- [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html), the `RoundShape` property has been deprecated and will be removed in a future version. Users can control the shape of the avatar by the newly added [`shape`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html#shape) attribute that can be `Square`, `Rounded` or `Circle`. The default shape of the avatar is `Square`.

## **4.0.4 (December 2022)**

### igniteui-webcomponents-grids

- New [Pivot Grid](grids/pivot-grid/overview.md) component.

## **4.0.0 (November 2022)**

### igniteui-webcomponents-grids

- New [Grid](grids/data-grid.md) component.
- New [Tree Grid](grids/tree-grid/overview.md) component.
- `DataGrid`:
  - Changed **IgcColumn** to [`IgcDataGridColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html)
  - Changed **GridCellEventArgs** to [`IgcDataGridCellEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcelleventargs.html)
  - Changed **GridSelectionMode** to [`DataGridSelectionMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.datagridselectionmode.html)
  - Changed **SummaryOperand** to [`DataSourceSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_core.datasourcesummaryoperand.html)

### igniteui-webcomponents-charts

- Added significant improvements to default behaviors, and refined the Category Chart API to make it easier to use. These new chart improvements include:

- Responsive layouts for horizontal label rotation based on browser / screen size.

- Enhanced rendering for rounded labels on all platforms.

- Added marker properties to StackedFragmentSeries.

- Added [`shouldPanOnMaximumZoom`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#shouldPanOnMaximumZoom) property.

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
> [Chart Aggregation](charts/features/chart-data-aggregations.md) will not work when using [`includedProperties`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#includedProperties) | [`excludedProperties`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#excludedProperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render. The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.

## **3.2.1 (June 2022)**

### igniteui-webcomponents-grids

- `DataGrid`:
  - Added New Feature - [Row Paging](grids/data-grid/row-paging.md) which is used to split a large set of data into a sequence of pages that have similar content. With pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows/buttons that let users flip through the pages of data.

### igniteui-webcomponents-charts

- Added the highly-configurable [DataLegend](charts/features/chart-data-legend.md) component, which works much like the `Legend`, but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values.
- Added the highly-configurable [DataToolTip](charts/features/chart-data-tooltip.md) which displays values and titles of series as well as legend badges of series in a tooltip. This is now the default tooltip for all chart types.
- Added animation and transition-in support for Stacked Series. Animations can be enabled by setting the [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#isTransitionInEnabled) property to true. From there, you can set the [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#transitionInDuration) property to determine how long your animation should take to complete and the [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#transitionInMode) to determine the type of animation that takes place.
- Added `AssigningCategoryStyle` event, is now available to all series in [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html). This event is handled when you want to conditionally configure aspects of the series items such as `Fill` background-color and highlighting.
- New [`allowedPositions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#allowedPositions) enumeration for CalloutLayer. Used to limit where the callouts are to be placed within the chart. By default, the callouts are intelligently placed in the best place but this used to force for example `TopLeft`, `TopRight`, `BottomLeft` or `BottomRight`.
- New corner radius properties added for Annotation Layers; used to round-out the corners of each of the callouts. Note, a corner radius has now been added by default.
  - [`calloutCornerRadius`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#calloutCornerRadius) for CalloutLayer
  - [`axisAnnotationBackgroundCornerRadius`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinalvaluelayercomponent.html#axisAnnotationBackgroundCornerRadius) for FinalValueLayer
  - [`xAxisAnnotationBackgroundCornerRadius`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccrosshairlayercomponent.html#xAxisAnnotationBackgroundCornerRadius) and [`yAxisAnnotationBackgroundCornerRadius`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccrosshairlayercomponent.html#yAxisAnnotationBackgroundCornerRadius) for CrosshairLayer
- New [`horizontalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#horizontalViewScrollbarMode) and [`verticalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#verticalViewScrollbarMode) enumeration to enable scrollbars in various ways. When paired with [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#isVerticalZoomEnabled) or [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#isHorizontalZoomEnabled), you'll be able to persist or fade-in and out the scrollbars along the axes to navigate the chart.
- New `FavorLabellingScaleEnd`, determines whether the axis should favor emitting a label at the end of the scale. Only compatible with numeric axes (e.g. [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html), [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html), `PercentChangeAxis`).
- New [`isSplineShapePartOfRange`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#isSplineShapePartOfRange) determines whether to include the spline shape in the axis range requested of the axis.
- New [`xAxisMaximumGap`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisMaximumGap), determines the maximum allowed value for the plotted series when using [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisGap). The gap determines the amount of space between columns or bars of plotted series.
- New [`xAxisMinimumGapSize`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisMinimumGapSize), determines the minimum allowed pixel-based value for the plotted series when using [`xAxisGap`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisGap) to ensure there is always some spacing between each category.

## **1.4.2 (December 2021)**

### igniteui-webcomponents-grids

- `DataGrid`:
  - Added `ValueMultiField`, of type string\[], in the [`IgcComboBoxColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igccomboboxcolumncomponent.html) to be used when your items in the drop down contain a key that consists of multiple fields.

> \[!Note]
> The following breaking changes were introduced: Changed [`valueField`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igccomboboxcolumncomponent.html#valueField) property from type string\[] to string.

### igniteui-webcomponents-inputs

- Date Picker:
  - Changed ValueChanged event to `SelectedValueChanged`.
- Multi-Column ComboBox:
  - Changed `TextChanged` event to `TextValueChanged`.
  - Changed `ValueChanged` event to `SelectedValueChanged`.

## **1.4.1 (November 2021)**

### igniteui-webcomponents-grids

- `DataGrid`:
  - New Features Added:
    - [Filter Row](grids/data-grid/column-filtering.md)
    - [Load/Save Layout Customizations](grids/data-grid/load-save-layout.md)
    - [GroupBy Area for column grouping](grids/data-grid/row-grouping.md)
    - [Cell Merging](grids/data-grid/cell-merging.md)
  - New API:
    - Added `SelectionChanged` event. Used to detect changes on selection interactions, e.g. Multiple row selection.
  - Breaking Changes:
    - Changed grid's SummaryScope property's type to SummaryScope from [`DataSourceSummaryScope`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_core.datasourcesummaryscope.html)
    - Changed GroupHeaderDisplayMode property's type to GroupHeaderDisplayMode from [`DataSourceSectionHeaderDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_core.datasourcesectionheaderdisplaymode.html)

> \[!Note]
> Please ensure package "lit-html": "^2.0.0" or newer is added to your project for optimal compatibility.

### igniteui-webcomponents-charts

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

- Changed [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisLabelLocation) property's type to **YAxisLabelLocation** from **AxisLabelLocation** in [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) and [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
- Changed [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisLabelLocation) property's type to **XAxisLabelLocation** from **AxisLabelLocation** in [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html)
- Added [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisLabelLocation) property to [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
- Added support for representing geographic series of [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html) in a legend
- Added crosshair lines by default in [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) and [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
- Added crosshair annotations by default in [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) and [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
- Added final value annotation by default in [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html)
- Added new properties in Category Chart and Financial Chart:
  - [`crosshairsLineThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#crosshairsLineThickness) and other properties for customizing crosshairs lines
  - [`crosshairsAnnotationXAxisBackground`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#crosshairsAnnotationXAxisBackground) and other properties for customizing crosshairs annotations
  - [`finalValueAnnotationsBackground`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#finalValueAnnotationsBackground) and other properties for customizing final value annotations
  - [`areaFillOpacity`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#areaFillOpacity) that allow changing opacity of series fill (e.g. Area chart)
  - [`markerThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#markerThickness) that allows changing thickness of markers
- Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
  - [`markerAutomaticBehavior`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#markerAutomaticBehavior) that allows which marker type is assigned to multiple series in the same chart
  - [`legendItemBadgeShape`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#legendItemBadgeShape) for setting badge shape of all series represented in a legend
  - [`legendItemBadgeMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#legendItemBadgeMode) for setting badge complexity on all series in a legend
- Added new properties in Series in Data Chart and Geographic Map:
  - [`legendItemBadgeShape`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#legendItemBadgeShape) for setting badge shape on specific series represented in a legend
  - [`legendItemBadgeMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#legendItemBadgeMode) for setting badge complexity on specific series in a legend
- Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
- Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's [`markerAutomaticBehavior`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#markerAutomaticBehavior) property to `SmartIndexed` enum value
- Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's [`legendItemBadgeMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#legendItemBadgeMode) property to `MatchSeries` enum value
- Changed color palette of series and markers displayed in all charts to improve accessibility

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

## **1.3.0 (April 2021)**

### igniteui-webcomponents-grids

- `DataGrid`:
  - Added `EditOnKeyPress` aka Excel-style Editing, instantly begin editing when typing.
  - Added [`EditModeClickAction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodeclickaction.html) property - By default double-clicking is required to enter edit mode. This can be set to [`SingleClick`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.editmodeclickaction.html#SingleClick) to allow for edit mode to occur when selecting a new cell.
  - Added [`EnterKeyBehaviors`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.enterkeybehaviors.html) property - aka Excel-style Navigation (Enter Behavior) – controls the behavior of the enter key, e.g. Options are (none, edit, move up, down, left, right)
  - Added [`EnterKeyBehaviorAfterEdit`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.enterkeybehaviorafteredit.html) property - While in edit-mode, this property controls when enter is pressed, e.g. Options are (moves to the cell below, above, right, left)
  - Added [`selectAllRows`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#selectAllRows) - method.
  - Added Row Range Selection - With `GridSelectionMode` property set to MultipleRow the following new functionality is now included:
  - Click and drag to select rows
  - <kbd>SHIFT</kbd> and click to select multiple rows.
  - <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.
  - Pressing space bar toggles selection of active row via `GridSelectionMode` property set to MultipleRow or SingleRow
  - Added Column Summaries to Column Options Dialog.

### igniteui-webcomponents-charts

- Date Picker:
  - `ShowTodayButton` - Toggles Today button visibility
  - [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#label) - Adds a label above the date value
  - [`placeholder`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#placeholder) property - adds custom text when no value is selected
  - `FormatString` - Customize input date string e.g. (`yyyy-MM-dd`)
  - `DateFormat` - Specifies whether to display selected dates as LongDate or ShortDate
  - `FirstDayOfWeek` - Specifies first day of week
  - `FirstWeekOfYear` - Specifies when to display first week of the year, e.g. (First Full Week, First Four day Week)
  - [`showWeekNumbers`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#showWeekNumbers) - Toggles Week number visibility
  - `MinDate` & `MaxDate` - Date limits, specifying a range of available selectable dates.
  - Added Accessibility

### igniteui-webcomponents-maps

> \[!Note]
> These features are CTP

- Added support for wrap around display of the map (scroll infinitely horizontally)
- Added support for shifting display of some map series while wrapping around the coordinate origin
- Added support for highlighting of the shape series
- Added support for some annotation layers for the shape series

### igniteui-webcomponents-charts

This release introduces several new and improved visual design and configuration options for all of the chart components, e.g. [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html), [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html), and [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html).

- Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
- Changed Scatter High Density series’ colors for heat min property from <span style="color:#8a5bb1">#8a5bb1</span> to <span style="color:#000000">#000000</span>
- Changed Scatter High Density series’ colors for heat max property from <span style="color:#ee5879">#ee5879</span> to <span style="color:#ee5879">#ee5879</span>
- Changed Financial/Waterfall series’ `NegativeBrush` and `NegativeOutline` properties from <span style="color:#C62828">#C62828</span> to <span style="color:#ee5879">#ee5879</span>
- Changed marker's thickness to 2px from 1px
- Changed marker's fill to match the marker's outline for [`IgcPointSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcpointseriescomponent.html), [`IgcBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbubbleseriescomponent.html), [`IgcScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterseriescomponent.html), [`IgcPolarScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcpolarscatterseriescomponent.html). You can use set [`markerFillMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#markerFillMode) property to Normal to undo this change
- Compressed labelling for the [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) and [`IgcOrdinalTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcordinaltimexaxiscomponent.html)
- New Marker Properties:
  - series.[`markerFillMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#markerFillMode) - Can be set to `MatchMarkerOutline` so the marker depends on the outline
  - series.[`markerFillOpacity`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#markerFillOpacity) - Can be set to a value 0 to 1
  - series.[`markerOutlineMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#markerOutlineMode) - Can be set to `MatchMarkerBrush` so the marker's outline depends on the fill brush color
- New Series Property:
  - series.[`outlineMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#outlineMode) - Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
- New chart properties that define bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the [`computedPlotAreaMarginMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#computedPlotAreaMarginMode), listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart:
  - chart.[`plotAreaMarginLeft`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#plotAreaMarginLeft)
  - chart.[`plotAreaMarginTop`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#plotAreaMarginTop)
  - chart.[`plotAreaMarginRight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#plotAreaMarginRight)
  - chart.[`plotAreaMarginBottom`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#plotAreaMarginBottom)
  - chart.[`computedPlotAreaMarginMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#computedPlotAreaMarginMode)
- New Highlighting Properties
  - chart.[`highlightingMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#highlightingMode) - Sets whether hovered or non-hovered series to fade, brighten
  - chart.[`highlightingBehavior`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#highlightingBehavior) - Sets whether the series highlights depending on mouse position e.g. directly over or nearest item
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

- Added horizontal [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html#orientation) property to ItemLegend that can be used with Bubble, Donut, and Pie Chart
- Added [`legendHighlightingMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#legendHighlightingMode) property - Enables series highlighting when hovering over legend items

## **1.1.3 (November 2020)**

### igniteui-webcomponents-grids

- `DataGrid`:

> \[!Note]
> These breaking changes were introduce in the grid package.

- Changed name of PropertyPath

The data grid component property `propertyPath` has been renamed to `field`. This applies to all Column types, GroupDescription, SortDescription & SummaryDescription.

```html
<igc-text-column field="Name"></igc-text-column>
```

```ts
import { IgcColumnSummaryDescription, IgcColumnSortDescription, IgcColumnGroupDescription} from 'igniteui-webcomponents-data-grids'
const productCount = new IgcColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgcColumnGroupDescription();
income.field = "Income";
```

## **1.1.2 (April 2020)**

### igniteui-webcomponents-grids

- `DataGrid`:

- Changed Name of Live Grid - the data grid component and it's corresponding module's names have changed from "LiveGrid" to "DataGrid".

> \[!Note]
> These breaking changes were introduce in these packages and components only:

The new code for importing the grid and it's corresponding module is:

```ts
import { IgcDataGrid } from "igniteui-webcomponents-data-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-data-grids';
```

- Required Peer Dependency for `DataGrid`

The data grid component requires the "inputs" package.

```ts
**npm install --save igniteui-webcomponents-inputs**
```

## **1.0.6**

### All Packages

- Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> \[!Note]
> These breaking changes were introduce in these packages and components only:

| Affected Packages | Affected Components |
| ------------------|---------------------|
| <a href="https://www.npmjs.com/package/igniteui-webcomponents-excel/v/1.0.6" target="_blank">igniteui-webcomponents-excel</a> | [Excel Library](excel-library.md)  |
| <a href="https://www.npmjs.com/package/igniteui-webcomponents-spreadsheet/v/1.0.6" target="_blank">igniteui-webcomponents-spreadsheet</a> | [Spreadsheet](spreadsheet-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-webcomponents-maps/v/1.0.6" target="_blank">igniteui-webcomponents-maps</a> | [Geo Map](geo-map.md), [Treemap](charts/types/treemap-chart.md)  |
| <a href="https://www.npmjs.com/package/igniteui-webcomponents-gauges/v/1.0.6" target="_blank">igniteui-webcomponents-gauges</a> |  [Bullet Graph](bullet-graph.md), [Linear Gauge](linear-gauge.md), [Radial Gauge](radial-gauge.md)   |
| <a href="https://www.npmjs.com/package/igniteui-webcomponents-charts/v/1.0.6" target="_blank">igniteui-webcomponents-charts</a>| Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](zoomslider-overview.md)  |
| <a href="https://www.npmjs.com/package/igniteui-webcomponents-core/v/1.0.6" target="_blank">igniteui-webcomponents-core</a> | all classes and enums  |
| <a href="https://www.npmjs.com/package/igniteui-webcomponents-grids/v/1.0.6" target="_blank">igniteui-webcomponents-grids</a> | [Data Grid](grids/data-grid/overview.md) |

- Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// gauges:
import { IgcLinearGaugeComponent } from "igniteui-webcomponents-gauges";
import { IgcLinearGaugeModule } from "igniteui-webcomponents-gauges";
import { IgcLinearGraphRange } from "igniteui-webcomponents-gauges";
import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeRange } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';
// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts";
// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps";
// grids:
import { IgcDataGridComponent } from "igniteui-webcomponents-data-grids";
import { IgcDataGridModule } from "igniteui-webcomponents-data-grids";
```

- Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgcLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-component';
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igc-linear-gauge-module';
import { IgcLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igc-linear-graph-range';

import { IgcRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-component";
import { IgcRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-module";
import { IgcRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igc-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgcFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-component";
import { IgcFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igc-financial-chart-module";
import { IgcDataChartComponent } from "igniteui-webcomponents-charts/ES5/igc-data-chart-component";
import { IgcDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igc-data-chart-core-module";

// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-component";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-module";

// grids:
import { IgcLiveGridModule } from 'igniteui-webcomponents-data-grids/ES5/igc-live-grid-module';
import { IgcLiveGridComponent } from 'igniteui-webcomponents-data-grids/ES5/igc-live-grid-component';
```

## igniteui-webcomponents

### **5.1.0 (October 2024)**

#### Added

- New [Carousel](layouts/carousel.md) component.

### **5.0.0 (August 2024)**

- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
  - Added `setIconRef` method. This allows to register and replace icons by SVG files.
  - All components now use icons by reference internally so that it's easy to replace them without explicitly providing custom templates.
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)
  - Added `name` and `value` properties.

**Breaking Changes**

- Removed `Form` component. Use native form instead.
- Removed `size` property in favor of the `--ig-size` CSS custom property for the following components:
  - [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html), [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html),[`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html), [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html), [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html), [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html), [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html), [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html), [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html), [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html), [`IgcSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsnackbarcomponent.html), [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html), [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html)
- Removed custom `igcFocus` and `igcBlur` events. Use the native `focus` and `blur` events instead for the following components:
  - [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html), [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html), [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html), [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html), [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html), [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html), [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html), [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html), [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html), **IgcSelectComponent**, [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html)
- [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html), [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) ,[`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
  - Changed `igcChange` event arguments from `CustomEvent<boolean>` to `CustomEvent<{ checked: boolean; value: string | undefined }>`
- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html), **IgcSelectComponent**
  - Removed `positionStrategy`, `flip`, `sameWidth` properties.
- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html)
  - Renamed The `closeOnEscape` property to `keepOpenOnEscape`.
- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html)
  - Removed `positionStrategy` property.
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
  - Removed `maxlength` and `minlength` properties. Use the native `maxLength` and `minLength` properties or `max` and `min` instead.
  - Renamed `readonly` and `inputmode` properties to `readOnly` and `inputMode`.
- [`IgcRangeSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcrangeslidercomponent.html)
  - Renamed `ariaThumbLower`/`ariaThumbUpper` properties to `thumbLabelLower`/`thumbLabelUpper`.
- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html)
  - Renamed `readonly` property to `readOnly`.

### **4.11.1 (July 2024)**

#### Changed

- [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) - Design changes in vertical mode.

### **4.11.0 (July 2024)**

#### Changed

- [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html), [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html), [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) - Styling changes in Indigo Theme.

### **4.10.0 (July 2024)**

#### Added

- New [Banner](notifications/banner.md) component
- New [Divider](layouts/divider.md) component
- New [DatePicker](scheduling/date-picker.md) component
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html) - Bind underlying radio components name and checked state through the radio group.

#### Deprecated

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) `Inputmode` property. Aligned with the native `inputMode` DOM property instead.

#### Fixed

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html), [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) - passing `undefined` to value sets the underlying input value to undefined.
- [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html) - after a form `reset` call correctly update underlying input value and placeholder state.
- [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) - setting `--ig-size` on the item `indicator` CSS Part will now change the size of the icon.
- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) - double emit of `igcChange` in certain scenarios.
- [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) - mini variant is not initially rendered when not in an open state.
- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html):
  - Selecting an entry using the <kbd>ENTER</kbd> key now correctly works in single selection mode.
  - Turning on the [`disableFiltering`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#disableFiltering) option now clears any previously entered search term.
  - Entering a search term in single selection mode that already matches the selected item now works correctly.

### **4.9.0 (April 2024)**

#### Added

- [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) - now allows resetting the selection state via the [`selectedItems`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html#selectedItems) property.
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html), [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) - exposed [`validateOnly`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html#validateOnly) to enable validation rules being enforced without restricting user input.

#### Changed

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html), [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#select) and [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - now use the native `Popover` API.

#### Deprecated

- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - [`IgcPositionStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpositionstrategy.html) property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.

#### Fixed

- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) - Label in Material theme is broken when component is in read-only mode.

### **4.8.2 (April 2024)**

#### Fixed

- [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) - resize handle position for non-suffixed textarea.
- [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html) - error when dynamically creating and adding a tab group and tabs in a single call stack.
- [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html)/[`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) - participate in form submission when initially checked.
- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html) - `igcClosed` fired before the component was actually closed/hidden.

### **4.8.1 (April 2024)**

#### Fixed

- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) - [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#inputFormat) is not applied to an already set value.
- [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html), [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html), [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) - apply form validation synchronously.
- [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#select), [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - Unable to select item when clicking on a wrapping element inside the dropdown/select item slot.
- [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) - active state is correctly applied to the correct tree node on click.

### **4.8.0 (March 2024)**

#### Added

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) can now set [`groupSorting`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#groupSorting) to none which shows the groups in the order of the provided data.
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)/[`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html) - updated visual looks across themes, new states.
- `NavBar` - added border in Bootstrap theme.

#### Changed

- Grouping in [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) no longer sorts the data. [`groupSorting`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#groupSorting) property now affects the sorting direction only of the groups. **Behavioral change**: In previous release the sorting directions of the groups sorted the items as well. If you want to achieve this behavior you can pass already sorted data to the [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html).

#### Deprecated

- [`IgcSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcslidercomponent.html) - `aria-label-upper` and `aria-label-lower` are deprecated and will be removed in the next major release. Use `thumb-label-upper` and `thumb-label-lower` instead.

#### Fixed

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) - Slotted icon size.
- [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html)
  - Updated Fluent theme look.
  - Disabled state in Safari.
- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html)/[`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#select) - Style issues.
- [`IgcSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcslidercomponent.html)
  - Clicks on the slider track now use the track element width as a basis for the calculation.
  - Input events are no longer emitted while continuously dragging the slider thumb and exceeding upper/lower bounds.
  - When setting `upper-bound`/`lower-bound` before `min`/`max`, the slider will no longer overwrite the bound properties with the previous values of `min`/`max`.
  - The `aria-label` bound to the slider thumb is no longer reset on consequent renders.
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
  - Default validators are run synchronously.
  - Style issues.
- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) - `setRangeText()` updates underlying value.

### **4.7.0 (January 2024)**

#### Added

- [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) - Added [`toggleNodeOnClick`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html#toggleNodeOnClick) property that determines whether clicking over a node will change its expanded state or not. Defaults to `false`.

- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) - [`allowReset`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#allowReset) added. When enabled selecting the same value will reset the component. **Behavioral change**: In previous releases this was the default behavior of the rating component. Make sure to set `allowReset` if you need to keep this behavior in your application.

#### Changed

- Improved WAI-ARIA compliance for [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html), [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html) and [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html).

#### Fixed

- Active item visual styles for [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html), [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html#select) and [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html).
- [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) - mini variant broken visual style.

### **4.6.0 (December 2023)**

#### Added

- `action` slot added to [`IgcSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsnackbarcomponent.html).
- `indicator-expanded` slot added to [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html).
- `toggle-icon-expanded` slot added to [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#select).
- [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#select), [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - exposed `selectedItem`, `items` and `groups` getters.

#### Changed

- Updated the package to Lit v3.
- Components dark variants are now bound to their shadow root.
- Components implement default sizes based on current theme.
- [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) - changed events to non-cancellable.
- Optimized components CSS and reduced bundle size.
- WAI-ARIA improvements for [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html), [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#select), [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) and [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html).

#### Fixed

- [`IgcTextareaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctextareacomponent.html) missing styling parts.
- [`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html) disabled styles.
- [`IgcSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsnackbarcomponent.html) removed unnecessary styles.
- [`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html) hover state visual design.
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) not keeping focus state when switching views.

### **4.5.0 (October 2023)**

#### Added

- New [Text Area](inputs/text-area.md) component.
- New [Button Group](inputs/button-group.md) component.
- New [`IgcToggleButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html).
- [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) now supports CSS transitions.
- Position attribute for [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html) and [`IgcSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsnackbarcomponent.html).

#### Deprecated

The `size` property and attribute have been deprecated for all components. Use the `--ig-size` CSS custom property instead. The following example sets the size of the [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) component to small:

```css
igc-avatar {
  --ig-size: var(--ig-size-small);
}
```

#### Fixed

- Combo items position in Safari.
- Calendar navigation buttons in RTL context.
- Export [`IgcComboChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombochangeeventargs.html) type.
- Combo value and selection states with lazy data binding.
- Various style and theming fixes and adjustments.

### **4.4.0 (August 2023)**

#### Added

- The following components are now Form Associated Custom Elements. They are automatically associated with a parent `<form>`
    and behave like a browser-provided control:
  - [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) & [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html)
  - [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html)
  - [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html)
  - [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html)
  - [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
  - [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html)
  - [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
  - [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html)
  - Single [`IgcSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcslidercomponent.html)
  - [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#select)
  - [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html)
- [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) now supports animations.

#### Changed

- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) fluent theme colors.
- [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) indicator styles and color schemas.

#### Deprecated

- `Form` component is deprecated.
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html):
  - `minlength` property is deprecated and will be removed in the next major version. Use `minLength` instead.
  - `maxlength` property is deprecated and will be removed in the next major version. Use `maxLength` instead.
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.
- [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html):
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.
- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html):
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.
  - `minValue` property is deprecated and will be removed in the next major version. Use `min` instead.
  - `maxValue` property is deprecated and will be removed in the next major version. Use `max` instead.
- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html):
  - `readonly` property is deprecated and will be removed in the next major version. Use `readOnly` instead.

#### Removed

- Removed our own `dir` attribute which shadowed the default one. This is a **non-breaking change**.
- [`IgcSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcslidercomponent.html) - `ariaLabel` shadowed property. This is a **non-breaking change**.
- [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) - `ariaLabelledBy` shadowed attribute. This is a **non-breaking change**.
- [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) - `ariaLabelledBy` shadowed attribute. This is a **non-breaking change**.
- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html) - `ariaLabelledBy` shadowed attribute. This is a **non-breaking change**.

#### Fixed

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) - outlined variant styling issues and indigo theme issues.
- [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html#select) - outlined variant styling issues
- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) - `spinUp/spinDown` calls moving the caret when the input is focused.

### **4.3.1 (August 2023)**

#### Added

- [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) - component animations.
- Components border radius is consumed from their schemas.

#### Changed

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html), [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html), [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html#select) - schema colors.
- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - schema colors.
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html) - updated theming styles and size.

#### Fixed

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) - single selection not working in certain scenarios.
- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - various styling fixes.
- [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html) - border radius with ripple.
- [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html) - fixed wrong color in Fluent theme.
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) - various styling fixes.
- [`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html) - assign closest **igc-tree-item** ancestor as a parent.
- [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html) - internal **hidden** styles and custom display property.

### **4.3.0 (June 2023)**

#### Added

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html):
  - `matchDiacritics` to the filtering options property. Defaults to **false**. If set to **true** the filter distinguishes between accented letters and their base letters. Otherwise strings are normalized and then matched.
  - `selection` property which returns the current selection as an array of data objects.
- [`IgcCardComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcomponent.html): Support explicit height
- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html): Added animations
- [`IgcSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsnackbarcomponent.html): Added animations
- [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html): Added animations

#### Changed

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html):
  - `value` is no longer readonly and can be explicitly set. The value attribute also supports declarative binding,
        accepting a valid JSON stringified array.
  - `value` type changed from `string[]` to `ComboValue<T>[]` where
    ```ts
    ComboValue<T> = T | T[keyof T]
    ```
  - `igcChange` event object properties are also changed to reflect the new `value` type:
    ```typescript
    interface IgcComboChangeEventArgs<T> {
      newValue: ComboValue<T>[];
      items: T[];
      type: ComboChangeType;
    }
    ```

#### Deprecated

- [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#select): Deprecated `sameWidth`, `positionStrategy` and `flip`. They will be removed in the next major release.

#### Fixed

- [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#select): `prefix`/`suffix`/`helper-text` slots not being rendered.
- [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html): Nested tabs selection.
- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html): Backdrop doesn't overlay elements.
- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html): Listbox position on initial open state.
- [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html): Stretch vertically in parent container.
- [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html): Wrong colors in fluent theme.
- Animation player throws errors when height is unspecified.
- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html): Intl.DateTimeFormat issues in Chromium based browsers.

### **4.2.3 (April 2023)**

#### Deprecated

- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html) - Property `closeOnEscape` is deprecated in favor of new property `keepOpenOnEscape`.

#### Fixed

- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)- colors in selected focus state.
- [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html) - set icon size to match other design system products.
- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html) - removed outline styles for Fluent and Material themes.
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) - navigation to date on set value.
- [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html) - not taking the full height of their parents.

### **4.2.2 (March 2023)**

#### Deprecated

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) - The `prefix`/`suffix` slots are no longer needed and will be removed in the next major release.

#### Fixed

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) - UI inconsistencies.
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) - Fluent theme inconsistencies.
- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) - Selection via API doesn't work on a searched list.
- [`IgcDialogComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdialogcomponent.html) - Fluent theme inconsistency.
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) - UI inconsistencies.
- [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html) - Fluent theme inconsistency.
- Components missing in defineAllComponents.
- Wrong host sizes for [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html), [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html), [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) and [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html).

### **4.2.1 (February 2023)**

#### Fixed

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) - Matching item not activated on filtering in single selection mode.

### **4.2.0 (January 2023)**

#### Added

- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) - Single Selection mode via the `single-select` attribute.

#### Fixed

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) - UI inconsistencies.
- [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html) - Doesn't correctly render `igc-icon` and font icons.
- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html) - UI inconsistencies.
- [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) - Can't override item margin.

### **4.1.1 (January 2023)**

#### Fixed

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
  - position label based on component size.
  - material themes don't match design.
  - do not cache the underlying input.
- Card - color discrepancy between WC and Angular.
- Theme - update stale `--igc-*` variables to `--ig-*`.
- Removed dangling references after element disconnect.

### **4.1.0 (December 2022)**

#### Added

- New [Stepper](layouts/stepper.md) component.
- New [Combo](inputs/combo/overview.md) component.
- [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html) - Skip literal positions when deleting symbols in the component

#### Fixed

- [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html) - Validation state on user input.

### **4.0.0 (November 2022)**

#### Changed

- Themes
  - Build - Utilize [Ignite UI Theming](https://github.com/IgniteUI/igniteui-theming) package when building themes.
  - Sizing - Introduced CSS variables that allow runtime CSS configuration of the size for all or individual components.
  - Spacing - Introduced CSS variables that allow runtime CSS configuration of the internal spacing (padding/margin) of components.
  - Scrollbars - Added the ability to style application-level scrollbars by setting the `ig-scrollbar` CSS class on any element.

### **3.4.2 (November 2022)**

#### Fixed

- Resolved importing error for `DateRangeType`.

### **3.4.1 (September 2022)**

#### Changed

- [`IgcSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcslidercomponent.html) - updated theme with the latest fluent spec.
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) - updated weekend days color.

#### Fixed

- [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html) `selected` attribute breaks content visibility on init.

### **3.4.0 (September 2022)**

#### Added

- New [Dialog](notifications/dialog.md) component.
- New [Select](inputs/select.md) component.

#### Fixed

- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html) - range selection a11y improvements.
- [`IgcRangeSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcrangeslidercomponent.html) - a11y improvements for choosing range values.
- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) - improved a11y with assistive software now reading the total number of items.
- [`IgcToastComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctoastcomponent.html) - added `role="alert"` to the message container for assistive software to read it without the need of focusing.
- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html) - made remove button accessible with the keyboard.
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) `prefix`/`suffix` does not align icons to the button text.

### **3.3.1 (August 2022)**

#### Changed

- [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) - Removed theme-specified height.

#### Fixed

- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - Dispose of top-level event listeners.
- [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html) - Indeterminate animation in Safari.
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html) - Child radio components auto-registration.

### **3.3.0 (July 2022)**

#### Added

- New [DateTimeInput](inputs/date-time-input.md) component.
- New [Tabs](layouts/tabs.md) component.
- New [Accordion](layouts/accordion.md) component.
- Typography styles in themes.

#### Changed

- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) - Added support for single selection and empty symbols.
- [`IgcSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcslidercomponent.html) - Improved slider steps rendering.
- Components will now auto register their dependencies when they are registered in `defineComponents`

```typescript
import { IgcDropdownComponent, defineComponents } from 'igniteui-webcomponents';
// will automatically register the dropdown item & group elements
// as well as their dependencies if any
defineComponents(IgcDropdownComponent);
```

Check the official [documentation](https://www.infragistics.com/products/ignite-ui-web-components/web-components/componentsgeneral-getting-started) for more information.

#### Fixed

- Remove input helper text container when it is empty.
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html) not showing in Safari.
- [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) not showing in Safari.
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) stretches correctly in flex containers.
- Various theming issues.
- [`IgcDropdownComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdropdowncomponent.html) - bug fixes and improvements.

### **3.2.0 (May 2022)**

#### Added

- New [MaskInput](inputs/mask-input.md) component.
- New [ExpansionPanel](layouts/expansion-panel.md) component.
- New [Tree](grids/tree.md) component.
- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) - Added `selected` CSS part and exposed CSS variable to control symbol sizes.
- [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html) - Allow slotted content.

#### Fixed

- [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) - Various styles fixes.
- Buttons - Vertical align and focus management.
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) - Overflow for `suffix`/`prefix`.
- [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) - Collapse with small sizes.
- [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html) - Overflow behavior.

### **3.1.0 (April 2022)**

#### Added

- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html): Added `prefix` and `suffix` slots.
- [`IgcSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsnackbarcomponent.html): Added `toggle` method.

#### Deprecated

- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html): Previously exposed `start` and `end` slots are replaced by `prefix` and `suffix`. They remain active, but are now deprecated and will be removed in a future version.

#### Fixed

- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html):
  - Auto load internal icons.
  - Selected chip is misaligned.
- Package: ESM internal import paths.

### **3.0.0 (April 2022)**

#### Changed

- **Breaking Change**: All dropdown related classes renamed from `DropDown*` to `Dropdown*`

### **2.2.0 (April 2022)**

#### Added

- New [DropDown](inputs/dropdown.md) component.
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html): Active date can be set via an attribute.

### **2.1.1 (March 2022)**

#### Added

- Control border radius and elevation from `--igc-radius-factor` and `--igc-elevation-factor`:

Example:

```css
/* Make all components square and remove all shadows */
:root {
  --igc-radius-factor: 0;
  --igc-elevation-factor: 0;
}
```

### **2.1.0 (March 2022)**

#### Added

- New [LinearProgress](inputs/linear-progress.md) component.
- New [CircularProgress](inputs/circular-progress.md) component.
- New [Chip](inputs/chip.md) component.
- New [Snackbar](notifications/snackbar.md) component.
- New [Toast](notifications/toast.md) component.
- New [Rating](inputs/rating.md) component.
- Component themes can be changed at runtime by calling the `configureTheme(theme: Theme)` function

### **2.0.0 (February 2022)**

#### Added

- Dark Themes
- New [Slider](inputs/slider.md) component.
- New [RangeSlider](inputs/slider.md) component.
- Support `required` property in [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html) component.

#### Changed

- Fix checkbox/switch validity status
- Split [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)'s `value: Date | Date[]` property into two properties - `value: Date` and `values: Date[]`
- Replaced [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)'s `hasHeader` property & `has-header` attribute with `hideHeader` & `hide-header` respectively.
- Replaced [`IgcCardComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcomponent.html)'s `outlined` property with `elevated`.

#### Removed

- Removed `igcOpening`, `igcOpened`, `igcClosing` and `igcClosed` events from [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) component.

### **1.0.0 (November 2021)**

Initial release of Ignite UI Web Components

#### Added

- [Avatar](layouts/avatar.md) component
- [Badge](inputs/badge.md) component
- [Button](inputs/button.md) component
- [Calendar](scheduling/calendar.md) component
- [Card](layouts/card.md) component
- [Checkbox](inputs/checkbox.md) component
- Form component
- [Icon](layouts/icon.md) component
- [IconButton](inputs/icon-button.md) component
- [Input](inputs/input.md) component
- [List](grids/list.md) component
- [Navigation bar](menus/navbar.md) component
- [Navigation drawer](menus/navigation-drawer.md) component
- [Radio group](inputs/radio.md) component
- [Radio](inputs/radio.md) component
- [Ripple](inputs/ripple.md) component
- [Switch](inputs/switch.md) component

## igniteui-dockmanager

### **1.14.4**

#### Deprecated

- [`IgcSplitPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html) [`isMaximized`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#isMaximized) is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the [`isMaximized`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#isMaximized) property of [`IgcTabGroupPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html) and/or [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html) instead.

### **1.14.3**

#### Fixed

- Dock manager throws errors with Vite-based builds.
- Docking to edge in an empty root split pane throws errors.

### **1.14.2**

#### Fixed

- Constraining panels inside the dock manager boundaries with quick drags.

### **1.14.1**

#### Fixed

- Proximity dock rtl check

### **1.14.0**

#### New features

- Add `showPaneHeaders` property.
- Add `proximityDock` property.
- Add `containedInBoundaries` property.

#### Enhancements

- Add `contentId` of elements as CSS parts.

#### Fixed

- Maximizing and unpinning panes leads to unclickable panes.
- Center dock is possible in a pane that has [`acceptsInnerDock`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#acceptsInnerDock) set to **true** if the `AllowInnerDock` of [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html) is set to **false**.

### **1.13.0**

#### New features

- Add [`focusPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#focusPane) method.
- Add [`allowInnerDock`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#allowInnerDock) and `AcceptsInnerDock` properties.

#### Enhancements

- Save pane maximized state in layout.

#### Fixed

- Tab selection order is not preserved.

#### **1.12.5**

#### New features

- Add `paneScroll` event.

#### Fixed

- ТabGroupPane: Pinning one of several unpinned panes results in all the panes getting pinned.
- Context menu not positioning correctly in RTL mode.
- Active pane is not retained when docking with keyboard.

### **1.12.4**

#### Fixed

- Active pane incorrectly set when more than one Tab Group Pane is within a Floating Pane.

### **1.12.3**

#### Fixed

- Error is thrown when dropping pane in a separate window.

### **1.12.2**

#### Enhancements

- Add `tabs-more-menu-content` and `tabs-more-menu-item` CSS parts.

#### Fixed

- Docking indicator left/right arrows positions are reversed in RTL mode.
- Context menu not positioning correctly.
- Missing overloads for `addEventListener` and `removeEventListener`.

### **1.12.1**

#### Enhancements

- Include pane information in `splitterResizeStart` and `splitterResizeEnd` events.
- [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html) is now exported as class.

#### Fixed

- Contents in slots with `unpinnedHeaderId` are not updated correctly.

### **1.12.0**

#### Fixed

- Docking not working with `allowFloating: false`.
- Flyout pane closing while active.
- Focusable elements does not receive focus.
- Navigating with pane navigator does not bring selected floating window on top.
- Event `splitterResizeStart` can't be cancelled.
- Tabs context menu not positioning correctly.

### **1.11.3**

#### New features

- Add `contextMenuPosition` property
- Add `selected` option for `tab-header-close-button` CSS part

### **1.11.2**

#### New features

- Add `hovered` option for `tab-header-close-button` CSS part

### **1.11.1**

#### Fixed

- CSS part fixes for `tab-header`

### **1.11.0**

#### New features

- Add options for [`showHeaderIconOnHover`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#showHeaderIconOnHover) property for different buttons
- Add `horizontal` and `vertical` options for `splitter-handle` CSS part
- Add `header-title` CSS part
- Add `hover` option for `tab-header-close-button` CSS part in active/inactive states
- Add `paneHeaderCloseButton` and `tabHeaderCloseButton` slots

### **1.10.0**

#### New features

- Add [`showHeaderIconOnHover`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#showHeaderIconOnHover) property.

#### Fixed

- Active pane is not retained on float/dock.
- Splitter styles are not applied.
- `click` event on customized header buttons is not working.
- Removed erroneous dock indicators while dragging over splitter.

### **1.9.0**

#### Fixed

- Styles not applied.
- Resize in RTL mode.

### **1.8.0**

#### New features

- Customize dock manager buttons.
- `LayoutChange` event which fires when the layout updates.

### **1.7.0**

#### New features

- Customizable floating pane header.
- [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html#disabled) property per pane.
- `DocumentOnly` property which allows content pane to be docked only inside a document host.
- `AllowEmpty` property for split and tab group panes which allows displaying empty areas.
- [`disableKeyboardNavigation`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#disableKeyboardNavigation) property on the dock manager.

#### Fixed

- Docking indicators appear over the currently dragged floating pane.

### **1.6.0**

#### New features

- Customize dock manager panes and tabs.

#### Fixed

- A floating pane is draggable outside of the page.

### **1.5.0**

#### New features

- [`allowMaximize`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#allowMaximize) property per pane.

#### Fixed

- Unpinned pane is closing automatically upon clicking on its content.
- Panes selected from the overflow menu are not activated if there is an unpinned pane from the same tab group.

### **1.4.1**

#### Fixed

- Pane with `allowPinning: false` placed inside tab group can be unpinned.
- Normalize a maximized pane when navigating away from it via the keyboard.

### **1.4.0**

#### New features

- Reorder tabs without creating floating pane.
- Keyboard navigation.
- Pane navigator.
- Enable/disable floating pane resizing.
- Events for floating pane resizing.

#### Fixed

- Select pane when activated.
- Flyout unpinned pane when activated.
- Error thrown when hosting external popup inside pane.
- Tab selection is lost with nested Dock Manager components.
- Floating pane containing panes with disabled floating and docking cannot be moved.
- Exception thrown when docking floating pane inside empty dock manager.

### **1.3.0**

#### New features

- More tabs menu appears when there is not enough space to display all tab headers.
- Hide pane without removing it from the layout using its `hidden` property.
- Header slot properties for tab and unpinned pane - `tabHeaderId` and `unpinnedHeaderId`.

### **1.2.0**

#### New features

- Active pane.
- Localization support.

#### Fixed

- Errors thrown when dragging the last document host tab and there is unpinned pane.
- Tabs content disappears after docking a pane with `allowFloating: false`.
- Exception thrown when quickly switching between docking indicators.

### **1.1.0**

#### New features

- Maximizing panes.
- Docking preview shadow.
- ARIA support.
- API for external drag/drop support.
- Properties and events for user interactions such as closing, pinning, dragging.
- Support for **ng update** for Angular projects.

### **1.0.3**

#### Enhancements

- Resize splitter using the keyboard.

### **1.0.2**

#### Fixed

- Pane goes out of view when resized to its minimum size.

### **1.0.1**

#### Enhancements

- Add active color css variable.
- Add keyboard support for context menu.

#### Fixed

- Selection is not working on first click when context menu is opened.
- Single tab is not rendered correctly after pinning/unpinning its sibling.

### **1.0.0**

Initial release of Ignite UI Dock Manager.
