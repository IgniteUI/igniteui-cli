---
title: React Grid Column Pinning - Ignite UI for React
_description: Want to use the Pinning feature of the Ignite UI for React when you develop your next app? Easily lock column or change column order with rich API.
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# React Grid Column Pinning

The Ignite UI for React Column Pinning feature in React Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). There’s an integrated UI for Column Pinning, accessible via the React Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## React Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import CustomersDataLocal from './CustomersDataLocal.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
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
                <IgrGrid
                    autoGenerate={false}
                    data={this.customersDataLocal}
                    ref={this.gridRef}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        width="300px">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name"
                        width="200px"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title"
                        width="200px"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        width="300px">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="150px">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        width="150px">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax"
                        width="150px">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersDataLocal: any[] = CustomersDataLocal;
    public get customersDataLocal(): any[] {
        return this._customersDataLocal;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Column Pinning API

Column pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pinned) property of the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html). Pinned columns are rendered on the left side of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) body.

<!-- React -->

```tsx
<IgrGrid data={nwindData} autoGenerate={false}>
    <IgrColumn field="Name" pinned={true}></IgrColumn>
    <IgrColumn field="AthleteNumber"></IgrColumn>
    <IgrColumn field="TrackProgress"></IgrColumn>
</IgrGrid>
```

<!-- end: React -->

<!-- ComponentEnd: Grid -->

You may also use the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s [`pinColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#unpinColumn) methods of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) to pin or unpin columns by their field name:

<!-- ComponentStart: Grid -->

<!-- React -->

```typescript
gridRef.current.pinColumn('AthleteNumber');
gridRef.current.unpinColumn('Name');
```

<!-- ComponentEnd: Grid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents, React -->

<!-- React -->

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

<!-- React -->

```typescript
const pinningConfig: IgrPinningConfig = { columns: ColumnPinningPosition.End };
```

```tsx
<IgrGrid data={nwindData} autoGenerate={true} pinning={pinningConfig}></IgrGrid>
```

### Demo

```typescript
export class AthletesDataExtendedItem {
    public constructor(init: Partial<AthletesDataExtendedItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;
    public FirstPlaces: number;
    public SecondPlaces: number;
    public ThirdPlaces: number;
    public RegistrationDate: string;
    public Birthday: string;
    public Sponsor: string;
    public Agent: string;
    public AgentContact: string;
    public AgentPhone: string;

}
export class AthletesDataExtended extends Array<AthletesDataExtendedItem> {
    public constructor(items: Array<AthletesDataExtendedItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataExtendedItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 4, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana`, FirstPlaces: 2, SecondPlaces: 3, ThirdPlaces: 0, RegistrationDate: `2017-08-07T07:35:06.000Z`, Birthday: `1979-03-09T22:00:00.000Z`, Sponsor: `Buzzdog`, Agent: `Yoshiko Trinke`, AgentContact: `ytrinke1x@symantec.com`, AgentPhone: `+1-615-409-3097` }),
                new AthletesDataExtendedItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/11.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 4, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway`, FirstPlaces: 1, SecondPlaces: 0, ThirdPlaces: 3, RegistrationDate: `2017-03-22T06:55:46.000Z`, Birthday: `1982-04-29T21:00:00.000Z`, Sponsor: `Realcube`, Agent: `Celestina Noweak`, AgentContact: `cnoweak3q@nhs.uk`, AgentPhone: `+1-971-806-8372` }),
                new AthletesDataExtendedItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 2, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan`, FirstPlaces: 1, SecondPlaces: 3, ThirdPlaces: 4, RegistrationDate: `2017-06-29T01:58:27.000Z`, Birthday: `1992-05-15T21:00:00.000Z`, Sponsor: `Twinte`, Agent: `Karol Emett`, AgentContact: `kemetth@ocn.ne.jp`, AgentPhone: `+1-215-959-2505` }),
                // ... 182 more items
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrAvatarModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, ColumnPinningPosition, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import { AthletesDataExtendedItem, AthletesDataExtended } from './AthletesDataExtended';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrAvatar } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrAvatarModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
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
                <IgrGrid
                    autoGenerate={false}
                    data={this.athletesDataExtended}
                    ref={this.gridRef}
                    id="grid"
                    pinning={this.pinningConfig1}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CountryFlag"
                        header="Team"
                        bodyTemplate={this.webGridImageCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Avatar"
                        bodyTemplate={this.webGridAvatarCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        header="Athlete Number"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed">
                    </IgrColumn>
                    <IgrColumn
                        field="RegistrationDate"
                        header="Registration Date"
                        dataType="date">
                    </IgrColumn>
                    <IgrColumn
                        field="Birthday"
                        dataType="date">
                    </IgrColumn>
                    <IgrColumn
                        field="Sponsor">
                    </IgrColumn>
                    <IgrColumn
                        field="Agent">
                    </IgrColumn>
                    <IgrColumn
                        field="AgentContact"
                        header="Agent Contact">
                    </IgrColumn>
                    <IgrColumn
                        field="AgentPhone"
                        header="Agent Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="FirstPlaces"
                        header="Gold"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="SecondPlaces"
                        header="Silver"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ThirdPlaces"
                        header="Bronze"
                        pinned={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesDataExtended: AthletesDataExtended = null;
    public get athletesDataExtended(): AthletesDataExtended {
        if (this._athletesDataExtended == null)
        {
            this._athletesDataExtended = new AthletesDataExtended();
        }
        return this._athletesDataExtended;
    }


    public webGridImageCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div>
                <img src={props.dataContext.cell.value}
                 style={{
                     border: '1px solid black',
                     objectFit: 'fill',
                     height: '2rem',
                     width: '3rem'
                 }} />
            </div>
        );
    }

    public webGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div>
                <IgrAvatar shape='circle' src={props.dataContext.cell.value}>
                </IgrAvatar>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- React, WebComponents, Blazor -->

### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }
    
    public ID: string;
    public CompanyName: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: string;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor() {
        super();
        this.push(new CustomersDataItem(
        {
            ID: `ALFKI`,
            CompanyName: `Alfreds Futterkiste`,
            ContactName: `Maria Anders`,
            ContactTitle: `Sales Representative`,
            Address: `Obere Str. 57`,
            City: `Berlin`,
            Region: `East`,
            PostalCode: `12209`,
            Country: `Germany`,
            Phone: `030-0074321`,
            Fax: `030-0076545`
        }));
        this.push(new CustomersDataItem(
        {
            ID: `ANATR`,
            CompanyName: `Ana Trujillo Emparedados y helados`,
            ContactName: `Ana Trujillo`,
            ContactTitle: `Owner`,
            Address: `Avda. de la Constitución 2222`,
            City: `México D.F.`,
            Region: `South`,
            PostalCode: `05021`,
            Country: `Mexico`,
            Phone: `(5) 555-4729`,
            Fax: `(5) 555-3745`
        }));
        this.push(new CustomersDataItem(
        {
            ID: `ANTON`,
            CompanyName: `Antonio Moreno Taquería`,
            ContactName: `Antonio Moreno`,
            ContactTitle: `Owner`,
            Address: `Mataderos 2312`,
            City: `México D.F.`,
            Region: `South`,
            PostalCode: `05023`,
            Country: `Mexico`,
            Phone: `(5) 555-3932`,
            Fax: `(5) 555-3745`
        }));
        // ... 24 more items
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
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  ColumnPinningPosition,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrPinningConfig,
  IgrGrid,
  IgrColumn,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";
import { CustomersData } from "./CustomersData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const gridRef = useRef<IgrGrid>(null);
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);

  const pinningConfig: IgrPinningConfig = {
    columns: ColumnPinningPosition.End,
  };

  useEffect(() => {
    const customers = new CustomersData();

    setData(customers);
    setColumns([
      { field: "CompanyName", header: "Company Name", width: 300 },
      {
        field: "ContactName",
        header: "Contact Name",
        width: 200,
        pinned: true,
        pinningPosition: ColumnPinningPosition.Start,
      },
      {
        field: "ContactTitle",
        header: "Contact Title",
        width: 200,
        pinned: true,
        pinningPosition: ColumnPinningPosition.End,
      },
      { field: "Address", header: "Address", width: 300 },
      { field: "City", header: "City", width: 120 },
      { field: "Region", header: "Region", width: 120 },
      { field: "PostalCode", header: "Postal Code", width: 150 },
      { field: "Phone", header: "Phone", width: 150 },
      { field: "Fax", header: "Fax", width: 150 },
    ]);
  }, []);

  const pinLeft = () => {
    gridRef.current?.selectedColumns().forEach((col: IgrColumn) => {
      if (col.pinned) {
              col.unpin();
      }
      col.pin(undefined, ColumnPinningPosition.Start);
    });
  };
  const pinRight = () => {
    gridRef.current?.selectedColumns().forEach((col: IgrColumn) => {
      if (col.pinned) {
          col.unpin();
      }
      col.pin(undefined, ColumnPinningPosition.End);
    });
  };
  const unpinColumn = () => {
    gridRef.current?.selectedColumns().forEach((col: IgrColumn) => {
      col.unpin();
    });
  };

  return (
    <div className="container sample">
      <div className="container horizontal wrapper">
        <IgrGrid
          ref={gridRef}
          data={data}
          width="100%"
          height="480px"
          columnSelection="multiple"
          pinning={pinningConfig}
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

          {columns.map((c) => (
            <IgrColumn
              key={c.field}
              field={c.field}
              header={c.header}
              width={c.width}
              pinned={c.pinned}
              hidden={c.hidden}
              pinningPosition={c?.pinningPosition}
            />
          ))}
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```


<!-- end: React, WebComponents, Blazor -->

## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

<!-- React -->

```tsx
<IgrGrid autoGenerate={false} data={CustomersData} ref={grid}>
    <IgrColumn field="ID" hidden={true}></IgrColumn>

    <IgrColumn field="CompanyName" header="Company" width="300px"
    headerTemplate={toggleColumnPin}></IgrColumn>

    <IgrColumn field="ContactName" header="Name" width="200px" pinned={true}
    headerTemplate={toggleColumnPin}> </IgrColumn>

    <IgrColumn field="ContactTitle" header="Title" width="200px" pinned={true}
    headerTemplate={toggleColumnPin}></IgrColumn>
</IgrGrid>
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

<!-- end: React -->

### Demo

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                // ... 24 more items
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
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
                <IgrGrid
                    autoGenerate={false}
                    data={this.customersData}
                    ref={this.gridRef}>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        width="300px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        width="200px"
                        pinned={true}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        width="200px"
                        pinned={true}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        width="300px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="120px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        width="120px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }


    public webGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto', cursor: 'pointer'}} onPointerDown={(e: any) => this.toggleColumnPin(column.field)}>📌</span>
            </div>
        );
    }

    public toggleColumnPin(field: string) {
        var grid = this.grid;
        var col = grid.getColumnByName(field);
        col.pinned = !col.pinned;
        grid.markForCheck();
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```tsx
<IgrGrid id="grid"></IgrGrid>
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

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                // ... 24 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
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

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
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
                <IgrGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnSelection="single">
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
                        field="ID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
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
                        field="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City">
                    </IgrColumn>
                    <IgrColumn
                        field="Region">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: WebComponents, Blazor -->

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
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
