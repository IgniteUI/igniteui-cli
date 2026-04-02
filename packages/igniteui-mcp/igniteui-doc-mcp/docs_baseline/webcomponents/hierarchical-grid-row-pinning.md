---
title: Web Components Hierarchical Grid Row Pinning in - Ignite UI for Web Components
_description: Use the Web Components Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-pinning
_tocName: Row Pinning
_premium: true
---

# Web Components Hierarchical Grid Row Pinning

The Ignite UI for Web Components Row Pinning feature in Web Components Hierarchical Grid allows you to  pin one or multiple rows to the top or bottom of grid. Row Pinning allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) vertically. The Web Components Hierarchical Grid has a built-in row pinning UI, which is enabled by initializing an [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) component in the context of Hierarchical Grid. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

## Web Components Hierarchical Grid Row Pinning Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Row Pinning UI

The built-in row pinning UI is enabled by adding an [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) component with the [`IgcGridPinningActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridpinningactions.html) component. The action strip is automatically shown when hovering a row and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```html
<igc-hierarchical-grid auto-generate="false">
    <igc-column field="Name" header="Full Name"></igc-column>
    <igc-action-strip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## Row Pinning API

Row pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pinned) input of the `Row`. Pinned rows are rendered at the top of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) by default and stay fixed through vertical scrolling of the unpinned rows in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) body.

```typescript
this.grid.getRowByIndex(0).pinned = true;
```

You may also use the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)'s [`pinRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html#pinRow) or [`unpinRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html#unpinRow) methods of the to pin or unpin records by their ID:

```typescript
this.grid.pinRow('ALFKI');
this.grid.unpinRow('ALFKI');
```

Note that the row ID is the primary key value, defined by the [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.

A row is pinned below the last pinned row. Changing the order of the pinned rows can be done by subscribing to the `RowPinning` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

```html
<igc-hierarchical-grid id="grid" auto-generate="true">
</igc-hierarchical-grid>
```

```typescript
constructor() {
    var grid1 = document.getElementById('grid1') as IgcHierarchicalGridComponent;
    grid1.data = this.data;
    grid1.addEventListener("rowPinning", this.rowPinning);
}

public rowPinning(event) {
    event.detail.insertAtIndex = 0;
}
```

## Pinning Position

You can change the row pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#pinning) configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.

```html
<igc-hierarchical-grid id="dataGrid" auto-generate="true"></igc-hierarchical-grid>
```

```typescript
var grid = document.getElementById('dataGrid') as IgcHierarchicalGridComponent;
grid.pinning = { rows: RowPinningPosition.Bottom };
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Custom Row Pinning UI

You can define your custom UI and change the pin state of the rows via the related API.

### Via extra column with icon

Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.

```typescript
constructor() {
    var grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    var column = document.getElementById('column1') as IgcColumnComponent;

    grid.data = this.data;
    column.bodyTemplate = this.pinCellTemplate;
}

public pinCellTemplate = (ctx: IgcCellTemplateContext) => {
   const row = ctx.cell.row;
    return html`<span @pointerdown=${(e: any) => this.togglePinning(row)}>📌</span>`;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

On click of the custom icon the pin state of the related row can be changed using the row's API methods.

```typescript
public togglePinning(row: IgcRowType) {
    row.pinned = !row.pinned;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

#### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Row Pinning Limitations

- Only records that exist in the data source can be pinned.
- The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied.
- The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
- As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vice versa). Additionally, range selection (e.g. using <kbd>SHIFT</kbd> + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-hierarchical-grid class="grid"></igc-hierarchical-grid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-style: double;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-grid-pinned-border-width: 5px;
        --ig-grid-pinned-border-style: double;
        --ig-grid-pinned-border-color: #FFCD0F;
        --ig-grid-cell-active-border-color: #FFCD0F;
    }
```


## API References

- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)
- `HierarchicalGridRow`
- [`IgcRowType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
