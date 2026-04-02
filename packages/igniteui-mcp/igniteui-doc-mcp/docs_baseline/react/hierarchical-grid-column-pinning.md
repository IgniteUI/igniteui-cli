---
title: React Hierarchical Grid Column Pinning - Ignite UI for React
_description: Want to use the Pinning feature of the Ignite UI for React when you develop your next app? Easily lock column or change column order with rich API.
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# React Hierarchical Grid Column Pinning

The Ignite UI for React Column Pinning feature in React Hierarchical Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html). There’s an integrated UI for Column Pinning, accessible via the React Hierarchical Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## React Hierarchical Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.hierarchicalCustomersData}
                    columnSelection="single"
                    primaryKey="CustomerID">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CustomerID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="string"
                            resizable={true}
                            pinned={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomersData: any[] = HierarchicalCustomersData;
    public get hierarchicalCustomersData(): any[] {
        return this._hierarchicalCustomersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Column Pinning API

Column pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pinned) property of the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html). Pinned columns are rendered on the left side of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) body.

```tsx
<IgrHierarchicalGrid data={nwindData} autoGenerate={false}>
    <IgrColumn field="CompanyName" pinned={true}></IgrColumn>
    <IgrColumn field="ContactName"></IgrColumn>
    <IgrColumn field="ContactTitle"></IgrColumn>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

You may also use the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s [`pinColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#unpinColumn) methods of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) to pin or unpin columns by their field name:

<!-- ComponentStart: HierarchicalGrid -->

```tsx
gridRef.current.pinColumn('Artist');
gridRef.current.unpinColumn('Debut');
```

<!-- ComponentEnd: HierarchicalGrid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents, React -->

```typescript
const columnPinning = (event: IgrPinColumnCancellableEventArgs) = {
    if (event.detail.column.field === 'Name') {
        event.detail.insertAtIndex = 0;
    }
}
```

## Pinning Position

You can change the column pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.

```typescript
const pinningConfig: IgrPinningConfig = { columns: ColumnPinningPosition.End };
```

```tsx
<IgrHierarchicalGrid data={nwindData} autoGenerate={true} pinning={pinningConfig}></IgrHierarchicalGrid>
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPinningConfig, ColumnPinningPosition, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.hierarchicalCustomersData}
                    columnSelection="single"
                    primaryKey="CustomerID"
                    pinning={this.pinningConfig1}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CustomerID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="string"
                            resizable={true}
                            pinned={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomersData: any[] = HierarchicalCustomersData;
    public get hierarchicalCustomersData(): any[] {
        return this._hierarchicalCustomersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  ColumnPinningPosition,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarTitle,
  IgrHierarchicalGrid,
  IgrPinningConfig,
  IgrRowIsland,
  IgrColumn,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";

import HierarchicalCustomersData from "./HierarchicalCustomersData.json";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const gridRef = useRef<IgrHierarchicalGrid>(null);
  const [data, setData] = useState<any[]>([]);
  const [pinningConfig] = useState<IgrPinningConfig>({
    columns: ColumnPinningPosition.End,
  });

  useEffect(() => {
    setData(HierarchicalCustomersData);
  }, []);

  const pinLeft = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      if (col.pinned) {
          col.unpin();
      }
      col.pin(undefined, ColumnPinningPosition.Start);
    });
  };

  const pinRight = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      if (col.pinned) {
          col.unpin();
      }
      col.pin(undefined, ColumnPinningPosition.End);
    });
  };

  const unpinColumn = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      col.unpin();
    });
  };

  return (
    <div className="container sample">
      <div className="container horizontal wrapper">
        <IgrHierarchicalGrid
          ref={gridRef}
          data={data}
          width="100%"
          height="480px"
          pinning={pinningConfig}
          autoGenerate={false}
          columnSelection="multiple"
          moving={true}
        >
          <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrButton variant="contained" onClick={unpinColumn}>
                Unpin Selected Columns
              </IgrButton>
              <IgrButton variant="contained" onClick={pinLeft}>
                Pin Selected Left
              </IgrButton>
              <IgrButton variant="contained" onClick={pinRight}>
                Pin Selected Right
              </IgrButton>
            </IgrGridToolbarActions>
          </IgrGridToolbar>

          <IgrColumn field="CustomerID" hidden={true}></IgrColumn>
          <IgrColumn
            field="Company"
            header="Company Name"
            pinned={true}
            pinningPosition={ColumnPinningPosition.Start}
          ></IgrColumn>
          <IgrColumn
            field="ContactName"
            header="Contact Name"
            pinned={true}
          ></IgrColumn>
          <IgrColumn field="ContactTitle" header="Contact Title"></IgrColumn>
          <IgrColumn field="Address" header="Address"></IgrColumn>
          <IgrColumn field="City" header="City"></IgrColumn>
          <IgrColumn field="PostalCode" header="Postal Code"></IgrColumn>
          <IgrColumn field="Country" header="Country"></IgrColumn>
          <IgrColumn field="Phone"></IgrColumn>
          <IgrColumn field="Fax"></IgrColumn>
          <IgrRowIsland
            childDataKey="Orders"
            autoGenerate={false}
            pinning={pinningConfig}
          >
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="date"
              resizable={true}
              pinned={true}
              pinningPosition={ColumnPinningPosition.Start}
            ></IgrColumn>
            <IgrColumn
              field="RequiredDate"
              header="Required Date"
              dataType="date"
              resizable={true}
            ></IgrColumn>
            <IgrColumn
              field="ShippedDate"
              header="Shipped Date"
              dataType="date"
              resizable={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipName"
              header="Ship Name"
              dataType="string"
              resizable={true}
              pinned={true}
            ></IgrColumn>
            <IgrColumn
              field="ShippedVia"
              header="Shipped Via"
              dataType="string"
              resizable={true}
              pinned={true}
            ></IgrColumn>
            <IgrColumn
              field="Freight"
              header="Freight"
              dataType="string"
              resizable={true}
            ></IgrColumn>
            <IgrRowIsland childDataKey="OrderDetails" autoGenerate={false}>
              <IgrColumn
                field="UnitPrice"
                header="Unit Price"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Quantity"
                header="Quantity"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Discount"
                header="Discount"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Weight"
                header="Weight"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Length"
                header="Length"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="TotalPrice"
                header="Total Price"
                dataType="string"
                resizable={true}
              ></IgrColumn>
            </IgrRowIsland>
          </IgrRowIsland>
        </IgrHierarchicalGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```


## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={HierarchicalCustomersData} ref={grid}>
    <IgrColumn field="CustomerID" hidden={true}></IgrColumn>

    <IgrColumn field="Company" header="Company Name" width="300px"
    headerTemplate={toggleColumnPin} pinned={true}></IgrColumn>

    <IgrColumn field="ContactName" header="Contact Name" width="200px"
    headerTemplate={toggleColumnPin}> </IgrColumn>

    <IgrColumn field="ContactTitle" header="Contact Title" width="200px"
    headerTemplate={toggleColumnPin}></IgrColumn>
</IgrHierarchicalGrid>
```

```tsx
const toggleColumnPin = (ctx: IgrColumnTemplateContext) => {
  const togglePin = () => {
    const col = ctx.column;
    col.pinned = !col.pinned;
  }

  const col = ctx.column;

  return(
    <div>
      <span style={{ float: 'left' }}>{col.header}</span>
      <span style={{ float: 'right' }} onClick={() => togglePin()}>📌</span>
    </div>
  );
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.hierarchicalCustomersData}
                    columnSelection="single"
                    primaryKey="CustomerID">
                    <IgrColumn
                        field="CustomerID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        pinned={true}
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="date"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="date"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="date"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="string"
                            resizable={true}
                            pinned={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="string"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="string"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomersData: any[] = HierarchicalCustomersData;
    public get hierarchicalCustomersData(): any[] {
        return this._hierarchicalCustomersData;
    }


    public hierarchicalGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto', cursor: 'pointer'}} onClick={(e: any) => this.toggleColumnPin(column)}>📌</span>
            </div>
        );
    }

        public toggleColumnPin(field: IgrColumn) {
            if(field) {
                field.pinned = !field.pinned;
            }
        }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```tsx
<IgrHierarchicalGrid id="grid"></IgrHierarchicalGrid>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.hierarchicalCustomersData}
                    columnSelection="single"
                    primaryKey="CustomerID">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CustomerID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="string"
                            resizable={true}
                            pinned={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomersData: any[] = HierarchicalCustomersData;
    public get hierarchicalCustomersData(): any[] {
        return this._hierarchicalCustomersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: WebComponents, Blazor -->

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

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

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
