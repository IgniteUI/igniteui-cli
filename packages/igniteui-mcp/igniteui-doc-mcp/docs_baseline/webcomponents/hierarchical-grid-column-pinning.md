---
title: Web Components Hierarchical Grid Column Pinning - Ignite UI for Web Components
_description: Want to use the Pinning feature of the Ignite UI for Web Components when you develop your next app? Easily lock column or change column order with rich API.
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# Web Components Hierarchical Grid Column Pinning

The Ignite UI for Web Components Column Pinning feature in Web Components Hierarchical Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html). There’s an integrated UI for Column Pinning, accessible via the Web Components Hierarchical Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## Web Components Hierarchical Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Column Pinning API

Column pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pinned) property of the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html). Pinned columns are rendered on the left side of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) body.

```html
<igc-hierarchical-grid id="hierarchicalGrid" class="hgrid" auto-generate="false"
        height="600px" width="800px" >
    <igc-column field="Artist" width="200px" pinned="true"></igc-column>
    <igc-column field="Debut" width="200px"></igc-column>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

You may also use the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)'s [`pinColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#unpinColumn) methods of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) to pin or unpin columns by their field name:

<!-- ComponentStart: HierarchicalGrid -->

<!-- Angular, WebComponents -->

```typescript
this.hierarchicalGrid.pinColumn('Artist');
this.hierarchicalGrid.unpinColumn('Debut');
```

<!-- ComponentEnd: HierarchicalGrid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents, React -->

<!-- WebComponents -->

```html
<igc-hierarchical-grid id="dataGrid" auto-generate="true"></igc-hierarchical-grid>
```

```typescript
constructor() {
    var dataGrid = document.getElementById('dataGrid') as IgcHierarchicalGridComponent;
    dataGrid.data = this.data;
    dataGrid.addEventListener("columnPin", this.columnPinning);
}
```

```typescript
public columnPinning(event) {
    if (event.detail.column.field === 'Name') {
        event.detail.insertAtIndex = 0;
    }
}
```

## Pinning Position

You can change the column pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.

<!-- WebComponents -->

```html
<igc-hierarchical-grid id="dataGrid" auto-generate="true"></igc-hierarchical-grid>
```

```typescript
var grid = document.getElementById('dataGrid') as IgcHierarchicalGridComponent;
grid.pinning = { columns: ColumnPinningPosition.End };
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- React, WebComponents, Blazor -->

### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- end: React, WebComponents, Blazor -->

## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

```html
<igc-hierarchical-grid id="hGrid" class="hierarchicalGrid" auto-generate="false"
    height="500px" width="100%">
    <igc-column id="CompanyName" field="CompanyName" header="Company Name" width="200px" pinned="true"></igx-column>
    <igc-column id="ContactName" field="ContactName" header="Contact Name" width="150px"></igx-column>
    <igc-column id="ContactTitle" field="ContactTitle" header="Contact Title" width="200px"></igx-column>
    <igc-row-island key="Orders" auto-generate="false">
        <igc-column id="OrderDate" field="OrderDate" header="Order Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="RequiredDate" field="RequiredDate" header="Required Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="ShippedDate" field="ShippedDate" header="Shipped Date" data-type="Date" width="150px"></igx-column>
        <igc-column id="ShipVia" field="ShipVia" header="Ship Via" width="150px"></igx-column>
        <igc-row-island key="OrderDetails" auto-generate="false">
            <igc-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
            <igc-column field="Quantity" width="150px"></igx-column>
            <igc-column field="Discount" width="150px"></igx-column>
        </igc-row-island>
    </igc-row-island>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var hGrid = this.hGrid = document.getElementById('hGrid') as IgcHierarchicalGridComponent;
    var CompanyName = this.CompanyName = document.getElementById('CompanyName') as IgcColumnComponent;
    var ContactName = this.ContactName = document.getElementById('ContactName') as IgcColumnComponent;
    var ContactTitle = this.ContactTitle = document.getElementById('ContactTitle') as IgcColumnComponent;

    var OrderDate = this.OrderDate = document.getElementById('OrderDate') as IgcColumnComponent;
    var RequiredDate = this.RequiredDate = document.getElementById('RequiredDate') as IgcColumnComponent;
    var ShippedDate = this.ShippedDate = document.getElementById('ShippedDate') as IgcColumnComponent;
    var ShipVia = this.ShipVia = document.getElementById('ShipVia') as IgcColumnComponent;

    hGrid.data = this.data;
    CompanyName.headerTemplate = this.pinHeaderTemplate;
    ContactName.headerTemplate = this.pinHeaderTemplate;
    ContactTitle.headerTemplate = this.pinHeaderTemplate;
    OrderDate.headerTemplate = this.pinHeaderTemplate;
    RequiredDate.headerTemplate = this.pinHeaderTemplate;
    ShippedDate.headerTemplate = this.pinHeaderTemplate;
    ShipVia.headerTemplate = this.pinHeaderTemplate;
}

public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" @click="${() => toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>
    `;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: IgcColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```html
<igc-hierarchical-grid id="grid"></igc-hierarchical-grid>
```

Then set the related CSS properties to this class:

```css
#grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-pinned-border-style: double;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-pinned-border-style: double;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
```


<!-- end: WebComponents, Blazor -->

## API References

- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

## Additional Resources

<!-- ComponentStart: Grid, HierarchicalGrid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid, HierarchicalGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
