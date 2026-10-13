---
title: "Web Components Hierarchical Grid Column Resizing - Ignite UI for Web Components"
description: Start using Web Components Hierarchical Grid Column Resizing in order to change the grid column width in an instant. Web Components drag resizing has never been so easy. Try for free!
keywords: "Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/column-resizing"
llms:
  description: "The Ignite UI for Web Components Column Resizing feature in Web Components Hierarchical Grid allows users to easily adjust the width of the columns of the IgcHierarchicalGrid."
_componentKey: HierarchicalGrid
_tocName: Column Resizing
_premium: true
---
# Web Components  Hierarchical Grid Column Resizing Overview

The Ignite UI for Web Components Column Resizing feature in Web Components Hierarchical Grid allows users to easily adjust the width of the columns of the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent). By default, they will see a temporary resize indicator while the drag resizing operation is in effect. There are several resizing options available - Resizing Columns in Pixels/Percentages, Restrict Column Resizing, Auto-Size Columns on Double Click, and Auto-Size Columns on Initialization.

## Web Components  Hierarchical Grid Column Resizing Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

**Column resizing** is also enabled per-column level, meaning that the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) can have a mix of resizable and non-resizable columns. This is done via the [`IgcColumn.resizable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=resizable) input of the [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent).

```html
<igc-column field="Artist" resizable="true"></igc-column>
```

You can subscribe to the [`IgcGridComponentEventMap.columnResized`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponentEventMap&member=columnResized) event of the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent) object, are exposed through the event arguments.

```html
<igc-hierarchical-grid id="hierarchicalGrid" auto-generate="false" primary-key="ID" foreign-key="ParentID"
    height="600px" width="100%">
    <igc-column field="Artist" resizable="true"></igc-column>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    hierarchicalGrid.data = this.data;
    hierarchicalGrid.columnResized = this.onResize;
}

public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

## Resizing Columns in Pixels/Percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the **Column Resizing** feature. By default if a column does not have width set, it fits the available space with width set in pixels.

This means that the following configuration is possible:

```html
<igc-hierarchical-grid id="hierarchicalGrid" class="hgrid" auto-generate="false"
        height="600px" width="100%">
        <igc-column field="Artist" resizable="true" width="10%"></igc-column>
        <igc-column field="GrammyNominations" resizable="true" width="100px"></igc-column>
        <igc-column field="GrammyAwards" resizable="true"></igc-column>
</igc-hierarchical-grid>
```

**Note:** 
There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict Column Resizing

You can also configure the minimum and maximum allowable column widths. This is done via the [`IgcColumn.minWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=minWidth) and [`IgcColumnState.maxWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=maxWidth) inputs of the [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`IgcColumn.minWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=minWidth) and [`IgcColumnState.maxWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=maxWidth).

```html
<igc-column field="Artist" width="100px" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.

This means the following configurations are possible:

```html
<igc-column field="Artist" width="100px" resizable="true"
            min-width="60px" max-width="230px"></igc-column>
```

or

```html
<igc-column field="Artist" width="100px" resizable="true"
            min-width="60px" max-width="15%"></igc-column>
```

## Auto-Size Columns on Double Click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`IgcColumnState.maxWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=maxWidth) is set on that column and the new width exceeds that [`IgcColumnState.maxWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=maxWidth) value. In this case the column will be sized according to preset [`IgcColumnState.maxWidth`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=maxWidth) value.

You can also auto-size a column dynamically using the exposed [`IgcColumn.autosize`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=autosize) method on [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent).

```typescript
constructor() {
    var column = this.column = document.getElementById('Artist') as IgcColumnComponent;
    column.autosize();
}
```

## Auto-Size Columns on Initialization

Each column can be set to auto-size on initialization by setting [`IgcHierarchicalGrid.width`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=width) to 'auto':

```html
<igc-column width='auto'></igc-column>
```

When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.

This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grid/theming-grid.md).
In case you would like to change the color of the resize handle, you need to set a class for the grid first:

```html
<igc-hierarchical-grid class="grid"></igc-hierarchical-grid>
```

Then set the related CSS property for that class:

```css
.grid {
    --ig-grid-resize-line-color: #f35b04;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-resize-line-color: #f35b04;
}
```

## API References
[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
[`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent)
## Additional Resources

- [Virtualization and Performance](virtualization.md)

- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
