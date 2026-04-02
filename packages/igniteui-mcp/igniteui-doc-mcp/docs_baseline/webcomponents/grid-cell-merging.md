---
title: Web Components Grid Cell Merging - Ignite UI for Web Components
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Web Components for Web Components Grid. Check out examples and demos!
_keywords: cell merging, Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_tocName: Cell Merging
_premium: true
---

# Web Components Grid Cell Merging

The Ignite UI for Web Components Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.

## Web Components Grid Cell Merging Example

<!-- ComponentStart: Grid -->

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipName: `Jefferson Home`, ShipAddress: `124 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 60098, ShipCountry: `USA`, ShipRegion: `South East`, ShipperName: `Federal Shipping`, CustomerID: 1000, CustomerName: `Martin Jefferson`, CustomerFirstName: `Martin`, CustomerLastName: `Jefferson`, CustomerAddress: `124 Wall Street, Miami, USA, 60098`, Salesperson: `Nancy Jefferson`, OrderID: 1931, OrderDate: `3/14/2022`, ProductID: 189, ProductName: `IPad`, UnitPrice: 16150.61, Quantity: 3, ExtendedPrice: 48451.83, Freight: 980.61, Discontinued: false, Region: `South East`, Address: `124 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 60098 }),
                new InvoicesDataItem({ ShipName: `Black Home`, ShipAddress: `162 Main Street`, ShipCity: `Miami`, ShipPostalCode: 80193, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1001, CustomerName: `Anna Black`, CustomerFirstName: `Anna`, CustomerLastName: `Black`, CustomerAddress: `162 Main Street, Miami, USA, 80193`, Salesperson: `Anna Smith`, OrderID: 1163, OrderDate: `5/22/2022`, ProductID: 138, ProductName: `Mac Book Pro`, UnitPrice: 18520.59, Quantity: 4, ExtendedPrice: 74082.36, Freight: 850.59, Discontinued: false, Region: `West`, Address: `162 Main Street`, City: `Miami`, Country: `USA`, PostalCode: 80193 }),
                new InvoicesDataItem({ ShipName: `Watson Townhouse`, ShipAddress: `164 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 50111, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1002, CustomerName: `Max Watson`, CustomerFirstName: `Max`, CustomerLastName: `Watson`, CustomerAddress: `164 Wall Street, Miami, USA, 50111`, Salesperson: `Martin Watson`, OrderID: 1230, OrderDate: `2/9/2022`, ProductID: 118, ProductName: `Mac Book Air`, UnitPrice: 25310.39, Quantity: 3, ExtendedPrice: 75931.17, Freight: 210.39, Discontinued: false, Region: `West`, Address: `164 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 50111 }),
                // ... 496 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- ComponentEnd: Grid -->

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:

- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:

- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```html
<igc-grid cell-merge-mode="always">
    ...
</igc-grid>
```

### Column Merge Toggle

At the column level, merging can be enabled or disabled with the `merge` property.

```html
<igc-column field="OrderID" merge="true"></igc-column>
<igc-column field="ShipperName" merge="false"></igc-column>
```

In the above example:

- The **OrderID** column will merge adjacent duplicate values.
- The **ShipperName** column will render normally without merging.

### Combined Example

```html
<igc-grid cell-merge-mode="onSort" auto-generate="false">
    <igc-column field="OrderID" header="Order ID" merge="true"></igc-column>
    <igc-column field="ShipperName" header="Shipper Name" merge="false"></igc-column>
    <igc-column field="Salesperson" header="Salesperson"></igc-column>
</igc-grid>
```

Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

## Custom Merge Conditions

In addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the `mergeStrategy` property. This strategy controls both how cells are compared and how merged ranges are calculated.

### Merge Strategy Class

A custom merge strategy must implement the [`IgcGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridmergestrategy.html) class:

```ts
export declare class IgcGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;
}
```

- `merge` - defines how merged cells are produced.
- `comparer` - defines the condition to decide if two adjacent records should be merged.

<!-- ComponentStart: Grid, HierarchicalGrid -->

### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in [`IgcDefaultMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdefaultmergestrategy.html) and override the relevant methods.

```ts
export class MyCustomStrategy extends IgcDefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

### Applying a Custom Strategy

Once defined, assign the strategy to the grid through the `mergeStrategy` property:

```ts
constructor() {
    const grid = (this.grid = document.getElementById('grid') as IgcGridComponent);

    grid.data = this.data;
    grid.mergeStrategy = new MyCustomStrategy() as IgcGridMergeStrategy;
    grid.cellMergeMode = 'always';
}
```

### Demo

<!-- ComponentStart: Grid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- ComponentEnd: Grid -->

## Feature Integration

Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:

<!-- ComponentStart: Grid -->

- **Expand/Collapse**: if a feature (such as master-detail, grouping, etc.) generates a non-data row, then the cell merging is interrupted and the group will be split.

<!-- ComponentEnd: Grid -->

- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

> [!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

<!-- ComponentStart: Grid -->

## Limitations

|Known Limitations| Description|
| --- | --- |
| Cell merging is not supported in combination with Multi-row Layout. | Both span complex layouts that don't make sense when combined. A warning will be thrown if such invalid configuration is detected. |

<!-- ComponentEnd: Grid -->

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

## Additional Resources

- [Filtering](filtering.md)
- [Excel Style Filtering](excel-style-filtering.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
