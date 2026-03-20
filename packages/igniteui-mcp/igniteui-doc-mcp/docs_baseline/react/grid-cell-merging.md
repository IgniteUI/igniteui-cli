---
title: React Grid Cell Merging - Ignite UI for React
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for React for React Grid. Check out examples and demos!
_keywords: cell merging, React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_tocName: Cell Merging
_premium: true
---

# React Grid Cell Merging

<!-- WebComponents, React -->

The Ignite UI for React Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.

<!-- end: WebComponents, React -->

## React Grid Cell Merging Example

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

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrSelect, IgrSelectItem } from "igniteui-react";
import {
  GridSelectionMode,
  GridCellMergeMode,
  IgrGridToolbar,
  IgrCellTemplateContext,
} from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { InvoicesData } from "./InvoicesData";

export default function App() {
  const data = new InvoicesData();
  const gridRef = useRef<IgrGrid>(null);
  const selectionMode: GridSelectionMode = "single";
  const [cellMergeMode, setCellMergeMode] =
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

  const formatCurrency = (val: number) => {
    return "$" + val.toFixed(2);
  };

  const webGridDiscontinuedCellTemplate = (ctx: IgrCellTemplateContext) => {
    if (ctx.cell.value) {
      return (
        <img
          src="https://dl.infragistics.com/x/img/grid/active.png"
          title="Continued"
          alt="Continued"
        />
      );
    } else {
      return (
        <img
          src="https://dl.infragistics.com/x/img/grid/expired.png"
          title="Discontinued"
          alt="Discontinued"
        />
      );
    }
  };

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrGrid
            autoGenerate={false}
            data={data}
            ref={gridRef}
            rowSelection={selectionMode}
            cellMergeMode={cellMergeMode}
            width="100%"
            height="570px"
          >
            <IgrGridToolbar>
              <IgrSelect
                value={cellMergeMode}
                onChange={(e: any) =>
                  setCellMergeMode(e.detail.value as GridCellMergeMode)
                }
              >
                <label>Select Merge Type</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem key={type.value} value={type.value}>
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>
            </IgrGridToolbar>

            <IgrColumn
              field="OrderID"
              header="Order ID"
              hidden={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipperName"
              header="Shipper Name"
              merge={true}
              sortable={true}
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="Salesperson"
              header="Salesperson"
              merge={true}
              sortable={true}
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="Discontinued"
              header="Discontinued"
              merge={true}
              sortable={true}
              bodyTemplate={webGridDiscontinuedCellTemplate}
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="UnitPrice"
              header="Unit Price"
              formatter={formatCurrency}
              dataType="number"
              width="150px"
            ></IgrColumn>
            <IgrColumn
              field="Quantity"
              header="Quantity"
              dataType="number"
              width="150px"
            ></IgrColumn>
            <IgrColumn
              field="ShipCountry"
              header="Ship Country"
              merge={true}
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="ShipCity"
              header="Ship City"
              merge={true}
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="ShipName"
              header="Ship Name"
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="PostalCode"
              header="Postal Code"
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="date"
              width="200px"
            ></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
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

```tsx
<IgrGrid data={data} cellMergeMode={cellMergeMode} >
    ...
</IgrGrid>
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
<IgrGrid data={data} cellMergeMode={cellMergeMode} autoGenerate={false}>
    <IgrColumn field="OrderID" header="Order ID" merge={true}></IgrColumn>
    <IgrColumn field="ShipperName" header="Shipper Name" merge={true}></IgrColumn>
    <IgrColumn field="Salesperson" header="Salesperson"></IgrColumn>
</IgrGrid>
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

<!-- React -->

```ts
export declare class IgrGridMergeStrategy {
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
<IgrGrid data={data} mergeStrategy={customStrategy}>
  <IgrColumn field="ActionID" merge={true}></IgrColumn>
  <IgrColumn field="ProjectName" merge={true}></IgrColumn>
</IgrGrid>
```

```ts
const customStrategy = new MyCustomStrategy() as IgrGridMergeStrategy;
```

<!-- end: React -->

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

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrDefaultMergeStrategy,
  IgrGridBaseDirective,
  IgrGridMergeStrategy,
} from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const cellMergeMode = "always";

  const data = [
    {
      ActionID: "1",
      ProjectName: "IOT Switch Project",
      ActionName: "Data Import",
      Type: "Request",
      Priority: "Low",
      Status: "New",
      Created: new Date("2017-03-25"),
      LastEdit: new Date("2017-05-08"),
    },
    {
      ActionID: "2",
      ProjectName: "IOT Switch Project",
      ActionName: "Reports",
      Type: "Request",
      Priority: "Low",
      Status: "New",
      Created: new Date("2017-03-14"),
      LastEdit: new Date("2017-03-15"),
    },
    {
      ActionID: "4",
      ProjectName: "IOT Switch Project",
      ActionName: "Multiple Settings",
      Type: "Request",
      Priority: "Low",
      Status: "Rejected",
      Created: new Date("2017-04-05"),
      LastEdit: new Date("2017-04-30"),
    },
    {
      ActionID: "3",
      ProjectName: "IOT Switch Project",
      ActionName: "Data Archiving",
      Type: "Request",
      Priority: "Medium",
      Status: "New",
      Created: new Date("2017-08-21"),
      LastEdit: new Date("2017-09-08"),
    },
    {
      ActionID: "5",
      ProjectName: "IOT Switch Project",
      ActionName: "Main Menu: Return Button",
      Type: "Bug",
      Priority: "Medium",
      Status: "Fixed",
      Created: new Date("2017-06-17"),
      LastEdit: new Date("2017-07-03"),
    },
    {
      ActionID: "6",
      ProjectName: "IOT Switch Project",
      ActionName: "Auto Turn Off",
      Type: "Bug",
      Priority: "Medium",
      Status: "New",
      Created: new Date("2017-04-12"),
      LastEdit: new Date("2017-05-27"),
    },
    {
      ActionID: "7",
      ProjectName: "VR Device",
      ActionName: "Higher DRI",
      Type: "Request",
      Priority: "Medium",
      Status: "New",
      Created: new Date("2016-08-11"),
      LastEdit: new Date("2016-08-11"),
    },
    {
      ActionID: "8",
      ProjectName: "VR Device",
      ActionName: "Accessible Power Button",
      Type: "Request",
      Priority: "Medium",
      Status: "New",
      Created: new Date("2016-07-13"),
      LastEdit: new Date("2016-07-14"),
    },
    {
      ActionID: "9",
      ProjectName: "VR Device",
      ActionName: "Additional options",
      Type: "Request",
      Priority: "High",
      Status: "Rejected",
      Created: new Date("2016-09-02"),
      LastEdit: new Date("2016-09-08"),
    },
    {
      ActionID: "10",
      ProjectName: "VR Device",
      ActionName: "Data Log",
      Type: "Request",
      Priority: "High",
      Status: "New",
      Created: new Date("2017-03-25"),
      LastEdit: new Date("2017-05-08"),
    },
    {
      ActionID: "12",
      ProjectName: "VR Device",
      ActionName: "Motion Blur",
      Type: "Bug",
      Priority: "High",
      Status: "New",
      Created: new Date("2017-03-25"),
      LastEdit: new Date("2017-05-08"),
    },
    {
      ActionID: "11",
      ProjectName: "VR Device",
      ActionName: "Left Sensors Delay",
      Type: "Bug",
      Priority: "High",
      Status: "Fixed",
      Created: new Date("2017-03-25"),
      LastEdit: new Date("2017-05-08"),
    },
  ];

  const perProjectMergeStrategy =
    new PerProjectMergeStrategy() as IgrGridMergeStrategy;

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrGrid
            autoGenerate={false}
            data={data}
            cellMergeMode={cellMergeMode}
            mergeStrategy={perProjectMergeStrategy}
            width="100%"
            height="570px"
          >
            <IgrColumn
              field="ActionID"
              header="Action ID"
              hidden={true}
            ></IgrColumn>
            <IgrColumn
              field="ProjectName"
              header="Project Name"
              merge={true}
            ></IgrColumn>
            <IgrColumn field="Type" header="Type" merge={true}></IgrColumn>
            <IgrColumn
              field="Priority"
              header="Priority"
              merge={true}
            ></IgrColumn>
            <IgrColumn field="Status" header="Status" merge={true}></IgrColumn>
            <IgrColumn field="ActionName" header="Action"></IgrColumn>
            <IgrColumn
              field="Created"
              header="Created"
              dataType="date"
            ></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export class PerProjectMergeStrategy extends IgrDefaultMergeStrategy {
  public comparer(prevRecord: any, record: any, field: string): boolean {
    const a = prevRecord[field];
    const b = record[field];
    const projA = prevRecord["ProjectName"];
    const projB = record["ProjectName"];
    return a === b && projA === projB;
  }
}
```


<!-- ComponentEnd: Grid -->

<!-- end: WebComponents, React -->

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

> \[!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

<!-- ComponentStart: Grid -->

## Limitations

|Known Limitations| Description|
| --- | --- |
| Cell merging is not supported in combination with Multi-row Layout. | Both span complex layouts that don't make sense when combined. A warning will be thrown if such invalid configuration is detected. |

<!-- ComponentEnd: Grid -->

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

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
