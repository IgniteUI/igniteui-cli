---
title: Web Components Hierarchical Grid Column Reordering & Moving - Ignite UI for Web Components
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the Web Components Column Moving API. Try Ignite UI for Web Components!
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-moving
_tocName: Column Moving
_premium: true
---

# Hierarchical Grid Column Reordering & Moving

The Web Components Hierarchical Grid Column Moving feature in Ignite UI for Web Components allows quick and easy column reordering. This can be done through the Column Moving API or by dragging and dropping the headers to another position via mouse or touch gestures. In the Web Components Hierarchical Grid, you can enable Column Moving for pinned and unpinned columns and for [Multi-Column Headers](multi-column-headers.md) as well.

> [!Note]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> [!Note]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**!

> [!Note]
> If the pinned area exceeds its maximum allowed width (80% of the total [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```ts
public headerTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <igc-icon draggable="false" @click="${() => this.onClick()}"></igc-icon>
    `;
}
```

## Web Components Hierarchical Grid Column Moving Overview Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) could have either movable or immovable columns. This is done via the [`moving`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#moving) input of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html).

```html
<igc-hierarchical-grid moving="true">
    ...
    <igc-row-island moving="true"></igc-row-island>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

## API

In addition to the drag and drop functionality, the Column Moving feature also provides API methods to allow moving a column/reordering columns programmatically:

[`moveColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#moveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `Position` (representing a `DropPosition` value), which determines whether to place the column before or after the target column.

```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

[`move`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

Note that when using the column moving feature, the `ColumnMovingEnd` event will be emitted if the operation was successful. Also note that in comparison to the drag and drop functionality, using the column moving feature does not require setting the [`moving`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#moving) property to true.

## Events

There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are `ColumnMovingStart`, `ColumnMoving` and `ColumnMovingEnd`.

You can subscribe to the `ColumnMovingEnd` event of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the **Category** column after the **Change On Year(%)** column in the following code snippet.

```html
<igc-hierarchical-grid id="dataGrid" auto-generate="false" moving="true">
    <igc-column field="Category"></igc-column>
    <igc-column field="Change On Year(%)" data-type="Number" ></igc-column>
</igc-hierarchical-grid>
```

```typescript
constructor() {
    var dataGrid = this.dataGrid = document.getElementById('dataGrid') as IgcHierarchicalGridComponent;
    dataGrid.data = this.data;
    dataGrid.addEventListener("columnMovingEnd", this.onColumnMovingEnd);
}
```

```typescript
public onColumnMovingEnd(event) {
    if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).

In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-hierarchical-grid class="grid"></igc-hierarchical-grid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
}
```


## API References

- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
