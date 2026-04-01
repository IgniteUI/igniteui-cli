---
title: React Hierarchical Grid Cell Merging - Ignite UI for React
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for React for React Hierarchical Grid. Check out examples and demos!
_keywords: cell merging, React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_tocName: Cell Merging
_premium: true
---

# React Hierarchical Grid Cell Merging

<!-- WebComponents, React -->

The Ignite UI for React Hierarchical Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.

<!-- end: WebComponents, React -->

## React Hierarchical Grid Cell Merging Example

<!-- ComponentStart: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrSelect, IgrSelectItem } from "igniteui-react";
import {
  GridCellMergeMode,
  IgrGridToolbar,
  IgrHierarchicalGrid,
  IgrRowIsland,
  SortingDirection,
  IgrSortingExpression,
  IgrColumn,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import MultiColumnsExportData from "./MultiColumnsExportData.json";

export default function App() {
  const localData = MultiColumnsExportData;
  const [cellMergeMode, setCellMergeMode] =
    useState<GridCellMergeMode>("always");
  const [cellMergeModeRowIsland, setCellMergeModeRowIsland] =
    useState<GridCellMergeMode>("always");
  const mergeTypes: { name: string; value: GridCellMergeMode }[] = [
    {
      name: "Merge always",
      value: "always",
    },
    {
      name: "Merge on sort",
      value: "onSort",
    },
  ];
  const sortExpr: IgrSortingExpression[] = [
    {
      fieldName: "ContactTitle",
      dir: SortingDirection.Asc,
    },
  ];

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrHierarchicalGrid
            primaryKey="ID"
            autoGenerate={false}
            data={localData}
            moving={true}
            sortingExpressions={sortExpr}
            cellMergeMode={cellMergeMode}
            allowFiltering={true}
            width="100%"
            height="450px"
          >
            <IgrGridToolbar>
              <IgrSelect
                value={cellMergeMode}
                onChange={(e: any) =>
                  setCellMergeMode(e.detail.value as GridCellMergeMode)
                }
              >
                <label>Select Merge Type Root</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem key={type.value} value={type.value}>
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>

              <IgrSelect
                value={cellMergeModeRowIsland}
                onChange={(e: any) =>
                  setCellMergeModeRowIsland(e.detail.value as GridCellMergeMode)
                }
              >
                <label>Select Merge Type Child</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem
                    key={type.value}
                    value={type.value}
                    selected={type.value === cellMergeModeRowIsland}
                  >
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>
            </IgrGridToolbar>

            <IgrColumn field="CompanyName" sortable={true} resizable={true} />
            <IgrColumn field="ContactName" sortable={true} resizable={true} />
            <IgrColumn
              field="ContactTitle"
              sortable={true}
              resizable={true}
              merge={true}
            />
            <IgrColumn field="Address" sortable={true} resizable={true} />
            <IgrColumn
              field="City"
              sortable={true}
              resizable={true}
              merge={true}
            />
            <IgrColumn field="PostalCode" sortable={true} resizable={true} />
            <IgrColumn
              field="Country"
              sortable={true}
              resizable={true}
              merge={true}
            />
            <IgrColumn field="Phone" sortable={true} resizable={true} />
            <IgrColumn field="Fax" sortable={true} resizable={true} />

            <IgrRowIsland
              childDataKey="ChildCompanies"
              height="100%"
              moving={true}
              autoGenerate={false}
              sortingExpressions={sortExpr}
              cellMergeMode={cellMergeModeRowIsland}
            >
              <IgrColumn field="CompanyName" sortable={true} resizable={true} />
              <IgrColumn field="ContactName" sortable={true} resizable={true} />
              <IgrColumn
                field="ContactTitle"
                sortable={true}
                resizable={true}
                merge={true}
              />
              <IgrColumn field="Address" sortable={true} resizable={true} />
              <IgrColumn
                field="City"
                sortable={true}
                resizable={true}
                merge={true}
              />
              <IgrColumn field="PostalCode" sortable={true} resizable={true} />
              <IgrColumn
                field="Country"
                sortable={true}
                resizable={true}
                merge={true}
              />
              <IgrColumn field="Phone" sortable={true} resizable={true} />
              <IgrColumn field="Fax" sortable={true} resizable={true} />
            </IgrRowIsland>
          </IgrHierarchicalGrid>
        </div>
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```


<!-- ComponentEnd: HierarchicalGrid -->

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:

- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:

- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```tsx
<IgrHierarchicalGrid data={data} cellMergeMode={cellMergeMode} >
    ...
</IgrHierarchicalGrid>
```

```tsx
const cellMergeMode: GridCellMergeMode = 'always';
```

### Column Merge Toggle

At the column level, merging can be enabled or disabled with the `merge` property.

```tsx
<IgrColumn field="OrderID" merge={true}></IgrColumn>
<IgrColumn field="ShipperName" merge={false}></IgrColumn>
```

In the above example:

- The **OrderID** column will merge adjacent duplicate values.
- The **ShipperName** column will render normally without merging.

### Combined Example

```tsx
<IgrHierarchicalGrid data={data} cellMergeMode={cellMergeMode} autoGenerate={false}>
    <IgrColumn field="OrderID" header="Order ID" merge={true}></IgrColumn>
    <IgrColumn field="ShipperName" header="Shipper Name" merge={true}></IgrColumn>
    <IgrColumn field="Salesperson" header="Salesperson"></IgrColumn>
</IgrHierarchicalGrid>
```

```tsx
const cellMergeMode: GridCellMergeMode = 'onSort';
```

Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

<!-- WebComponents, React -->

## Custom Merge Conditions

In addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the `mergeStrategy` property. This strategy controls both how cells are compared and how merged ranges are calculated.

### Merge Strategy Class

A custom merge strategy must implement the [`IgrGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridmergestrategy.html) class:

<!-- end: React -->

- `merge` - defines how merged cells are produced.
- `comparer` - defines the condition to decide if two adjacent records should be merged.

<!-- ComponentStart: Grid, HierarchicalGrid -->

### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in [`IgrDefaultMergeStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrdefaultmergestrategy.html) and override the relevant methods.

<!-- React -->

```ts
export class MyCustomStrategy extends IgrDefaultMergeStrategy {
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

<!-- end: React -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

### Applying a Custom Strategy

Once defined, assign the strategy to the grid through the `mergeStrategy` property:

<!-- React -->

```tsx
<IgrHierarchicalGrid data={data} mergeStrategy={customStrategy}>
  <IgrColumn field="ActionID" merge={true}></IgrColumn>
  <IgrColumn field="ProjectName" merge={true}></IgrColumn>
</IgrHierarchicalGrid>
```

<!-- end: React -->

<!-- ComponentStart: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  GridCellMergeMode,
  IgrHierarchicalGrid,
  IgrRowIsland,
  SortingDirection,
  IgrSortingExpression,
  IgrColumn,
  IgrDefaultMergeStrategy,
  IgrGridMergeStrategy,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import MultiColumnsExportData from "./MultiColumnsExportData.json";

export default function App() {
  const [cellMergeMode] = useState<GridCellMergeMode>("always");
  const sortExpr: IgrSortingExpression[] = [
    {
      fieldName: "ContactTitle",
      dir: SortingDirection.Asc,
    },
  ];

  const perCountryMergeStrategy =
    new PerCountryMergeStrategy() as IgrGridMergeStrategy;

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrHierarchicalGrid
            primaryKey="ID"
            data={MultiColumnsExportData}
            sortingExpressions={sortExpr}
            moving={true}
            cellMergeMode={cellMergeMode}
            mergeStrategy={perCountryMergeStrategy}
            height="400px"
            width="100%"
            allowFiltering={true}
          >
            <IgrColumn
              field="CompanyName"
              sortable={true}
              resizable={true}
              editable={true}
            />
            <IgrColumn
              field="ContactName"
              sortable={true}
              resizable={true}
              editable={true}
            />
            <IgrColumn
              field="ContactTitle"
              sortable={true}
              resizable={true}
              merge={true}
              editable={true}
            />
            <IgrColumn
              field="Address"
              sortable={true}
              resizable={true}
              editable={true}
            />
            <IgrColumn
              field="City"
              sortable={true}
              resizable={true}
              merge={true}
              editable={true}
            />
            <IgrColumn field="PostalCode" sortable={true} resizable={true} />
            <IgrColumn
              field="Country"
              sortable={true}
              resizable={true}
              merge={true}
              editable={true}
            />
            <IgrColumn field="Phone" sortable={true} resizable={true} />
            <IgrColumn field="Fax" sortable={true} resizable={true} />

            <IgrRowIsland
              childDataKey="ChildCompanies"
              moving={true}
              autoGenerate={false}
              sortingExpressions={sortExpr}
              cellMergeMode={cellMergeMode}
              mergeStrategy={perCountryMergeStrategy}
              height={null}
            >
              <IgrColumn
                field="CompanyName"
                sortable={true}
                resizable={true}
                editable={true}
              />
              <IgrColumn
                field="ContactName"
                sortable={true}
                resizable={true}
                editable={true}
              />
              <IgrColumn
                field="ContactTitle"
                sortable={true}
                resizable={true}
                merge={true}
                editable={true}
              />
              <IgrColumn field="Address" sortable={true} resizable={true} />
              <IgrColumn
                field="City"
                sortable={true}
                resizable={true}
                merge={true}
                editable={true}
              />
              <IgrColumn field="PostalCode" sortable={true} resizable={true} />
              <IgrColumn
                field="Country"
                sortable={true}
                resizable={true}
                merge={true}
              />
              <IgrColumn field="Phone" sortable={true} resizable={true} />
              <IgrColumn field="Fax" sortable={true} resizable={true} />
            </IgrRowIsland>
          </IgrHierarchicalGrid>
        </div>
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

class PerCountryMergeStrategy extends IgrDefaultMergeStrategy {
  // Custom comparer logic: merge only within same country
  public comparer(prevRecord: any, record: any, field: string): boolean {
    const a = prevRecord[field];
    const b = record[field];
    const countryA = prevRecord["Country"];
    const countryB = record["Country"];
    return a === b && countryA === countryB;
  }
}
```


<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: WebComponents, React -->

## Feature Integration

Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:

- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

> \[!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)

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

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
