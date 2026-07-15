---
title: Web Components Hierarchical Grid Column Selection - Ignite UI for Web Components
_description: Learn how to configure column selection with Ignite UI for Web Components Hierarchical Grid. This makes grid interactions much easier and faster than ever.
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics, column selection
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-selection
_tocName: Column Selection
_premium: true
---

# Web Components Hierarchical Grid Column Selection Overview

The Web Components Hierarchical Grid Column Selection feature in Ignite UI for Web Components offers a simplified and Excel-like way to select and highlight an entire column with a single click. It can be enabled through the [`columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=columnSelection) input. Thanks to the rich API, the feature allows for easy manipulation of the selection state, data extraction from the selected fractions, data analysis operations, and visualizations.

## Web Components Hierarchical Grid Column Selection Example

The sample below demonstrates the three types of [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)'s **column selection** behavior. Use the column selection dropdown below to enable each of the available selection modes.

<!-- ComponentStart: HierarchicalGrid -->

\*_Photo_ and _Debut_ are with disabled column selection.

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Basic Usage

The column selection feature can be enabled through the [`columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=columnSelection) input, which takes `GridSelectionMode` values.

## Interactions

The default selection mode is `None`. If set to `Single` or `Multiple`, all of the presented columns will be [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!Note]
> The [Multi Column Headers](multi-column-headers.md) feature does not reflect on the [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selectable) input. The `ColumnGroupComponent` is [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected) if all of its [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selectable) descendants are [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected).

<!-- ComponentStart: HierarchicalGrid -->

\*Under _Location_ Column Group only column _City_ is selectable.

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Keyboard Combinations

> [!Note]
> The keyboard combinations are available only when the grid [`columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=columnSelection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:

- Multi-column selection - holding <kbd>CTRL</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API Manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected) by setting the corresponding **setter**.

> [!Note]
> The above statement also applies to the `ColumnGroupComponent`, except that when the [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [API References](#api-references) section.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
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

The column selection UI has a few more APIs to explore, which are listed below.

- [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
- [`IgcColumnComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent)
- [`columnGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=columnGroup)

[`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) properties:

- [`columnSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=columnSelection)
- [`selectedColumns`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selectedColumns)
- [`selectColumns`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selectColumns)
- [`deselectColumns`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=deselectColumns)
- [`selectAllColumns`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=selectAllColumns)
- [`deselectAllColumns`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=deselectAllColumns)

[`IgcColumnComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent) properties:

- [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selectable)
- [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected)

[`columnGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=columnGroup) properties:

- [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selectable)
- [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=selected)

[`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) events:

- `OnColumnsSelectionChange`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
