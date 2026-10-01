---
title: "Web Components Hierarchical Grid Column Selection - Ignite UI for Web Components"
description: Learn how to configure column selection with Ignite UI for Web Components Hierarchical Grid. This makes grid interactions much easier and faster than ever.
keywords: "Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics, column selection"
license: commercial
_canonicalLink: "grids/grid/column-selection"
llms:
  description: "The Web Components Hierarchical Grid Column Selection feature in Ignite UI for Web Components offers a simplified and Excel-like way to select and highlight an entire column with a single click."
_componentKey: HierarchicalGrid
_tocName: Column Selection
_premium: true
---
# Web Components Hierarchical Grid Column Selection Overview

The Web Components Hierarchical Grid Column Selection feature in Ignite UI for Web Components offers a simplified and Excel-like way to select and highlight an entire column with a single click. It can be enabled through the [`IgcHierarchicalGrid.columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=columnSelection) input. Thanks to the rich API, the feature allows for easy manipulation of the selection state, data extraction from the selected fractions, data analysis operations, and visualizations.

## Web Components Hierarchical Grid Column Selection Example

The sample below demonstrates the three types of `IgcHierarchicalGrid`'s **column selection** behavior. Use the column selection dropdown below to enable each of the available selection modes.

*_Photo_ and _Debut_ are with disabled column selection.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Basic Usage

The column selection feature can be enabled through the [`IgcHierarchicalGrid.columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=columnSelection) input, which takes [`IgcGridSelectionMode`](mcp:get_api_reference?platform=webcomponents&component=GridSelectionMode) values.

## Interactions

The default selection mode is `None`. If set to `Single` or `Multiple`, all of the presented columns will be [`IgcColumn.selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`IgcColumn.selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

**Note:** 
The [Multi Column Headers](multi-column-headers.md) feature does not reflect on the [`IgcHierarchicalGrid.selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selectable) input. The [`IgcColumnGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnGroupComponent) is [`IgcHierarchicalGrid.selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`IgcHierarchicalGrid.selected`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selected) if all of its [`IgcHierarchicalGrid.selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selectable) descendants are [`IgcHierarchicalGrid.selected`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selected).

*Under _Location_ Column Group only column _City_ is selectable.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Keyboard Combinations

**Note:** 
The keyboard combinations are available only when the grid [`IgcHierarchicalGrid.columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=columnSelection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:
- Multi-column selection - holding <kbd>CTRL</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API Manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`IgcColumn.selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected) by setting the corresponding **setter**.

**Note:** 
The above statement also applies to the [`IgcColumnGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnGroupComponent), except that when the [`IgcHierarchicalGrid.selected`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [API References](#api-references) section.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grid/theming-grid.md).
In case you would like to change some of the colors, you need to set a `class` for the grid first:

```html
<igc-hierarchical-grid class="grid"></igc-hierarchical-grid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
```

## API References
[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
[`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
