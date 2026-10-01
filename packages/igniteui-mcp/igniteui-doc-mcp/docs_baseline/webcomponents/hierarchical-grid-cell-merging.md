---
title: "Web Components Hierarchical Grid Cell Merging - Ignite UI for Web Components"
description: Merge adjacent cells with equal values in the Ignite UI for Web Components Hierarchical Grid using the Cell Merging feature. Learn configuration, merging modes, and see live examples!
keywords: cell merging, Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
license: commercial
_canonicalLink: ""
llms:
  description: "The Ignite UI for Web Components Hierarchical Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell."
_componentKey: HierarchicalGrid
_tocName: Cell Merging
_premium: true
---
# Web Components Hierarchical Grid Cell Merging

The Ignite UI for Web Components Hierarchical Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.

## Web Components Hierarchical Grid Cell Merging Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:
- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a [`IgcHierarchicalGrid.cellMergeMode`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=cellMergeMode) property that accepts values from the [`IgcGridCellMergeMode`](mcp:get_api_reference?platform=webcomponents&component=GridCellMergeMode) enum:
- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```html
<igc-hierarchical-grid cell-merge-mode="always">
    ...
</igc-hierarchical-grid>
```

### Column Merge Toggle
At the column level, merging can be enabled or disabled with the [`merge`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnGroupComponent&member=merge) property.

```html
<igc-column field="OrderID" merge="true"></igc-column>
<igc-column field="ShipperName" merge="false"></igc-column>
```

In the above example:
- The **OrderID** column will merge adjacent duplicate values.
- The **ShipperName** column will render normally without merging.

### Combined Example

```html
<igc-hierarchical-grid cell-merge-mode="onSort" auto-generate="false">
    <igc-column field="OrderID" header="Order ID" merge="true"></igc-column>
    <igc-column field="ShipperName" header="Shipper Name" merge="false"></igc-column>
    <igc-column field="Salesperson" header="Salesperson"></igc-column>
</igc-hierarchical-grid>
```

Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

## Custom Merge Conditions
In addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the [`IgcHierarchicalGrid.mergeStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=mergeStrategy) property. This strategy controls both how cells are compared and how merged ranges are calculated.

### Merge Strategy Class
A custom merge strategy must implement the [`IgcGridMergeStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcGridMergeStrategy) class:

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

### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in [`IgcDefaultMergeStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcDefaultMergeStrategy) and override the relevant methods.

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

### Applying a Custom Strategy
Once defined, assign the strategy to the grid through the [`IgcHierarchicalGrid.mergeStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=mergeStrategy) property:

```ts
constructor() {
    const grid = (this.grid = document.getElementById('grid') as IgcGridComponent);

    grid.data = this.data;
    grid.mergeStrategy = new MyCustomStrategy() as IgcGridMergeStrategy;
    grid.cellMergeMode = 'always';
}

```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Feature Integration
Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:

- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

**Note:** 
If a merged cell is clicked, the closest cell from the merge sequence will become active.

## API References
[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
[`CellMergeMode`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=cellMergeMode)
[`IgcGridCellMergeMode`](mcp:get_api_reference?platform=webcomponents&component=GridCellMergeMode)
[`IgcGridMergeStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcGridMergeStrategy)
[`IgcDefaultMergeStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcDefaultMergeStrategy)
## Additional Resources

- [Filtering](filtering.md)
- [Excel Style Filtering](excel-style-filtering.md)
- [Virtualization and Performance](virtualization.md)

- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
