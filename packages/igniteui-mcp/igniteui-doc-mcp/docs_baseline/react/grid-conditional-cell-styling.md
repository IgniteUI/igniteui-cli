---
title: React Grid Conditional Cell Styling - Ignite UI for React
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in React Grid to make cells stand out.
_keywords: conditional styling, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/conditional-cell-styling
_tocName: Conditional Styling
_premium: true
---

# React Grid Conditional Styling

The Ignite UI for React Conditional Styling feature in React Grid allows custom styling on a row or cell level. The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) Conditional Styling functionality is used to visually emphasize or highlight data that meets certain criteria, making it easier for users to identify important information or trends within the grid.

## Grid Conditional Row Styling

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component in Ignite UI for React provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) input on the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component;
- By setting [`rowStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowStyles) input on the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) rows by setting the [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) input and define custom rules.

```tsx
<IgrGrid id="grid" height="600px" width="100%" rowClasses={rowClasses}>
</IgrGrid>
```

The [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```tsx
const rowClasses = {
    activeRow: (row: IgrRowType) => row.index % 2 === 0
}
```

```css
.activeRow {
    border-top: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    .activeRow {
        border-top: 2px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import NwindData from './NwindData.json';
import { IgrRowType } from 'igniteui-react-grids';

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
    private column: IgrColumn

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
                    data={this.nwindData}
                    rowClasses={this.webGridRowClassesHandler}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }


    public webGridRowClassesHandler = {
      activeRow: (row: IgrRowType) => row.index % 2 === 0
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Using Row Styles

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) control exposes the [`rowStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowStyles) property which allows conditional styling of the data rows. Similar to [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both [`rowStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowStyles) and [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) is:

```tsx
(row: IgrRowType) => boolean
```

Let's define our styles:

```tsx
const rowStyles = {
    'background': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
    'border': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
};
```

```tsx
<IgrGrid id="grid" height="600px" width="100%" rowStyles={rowStyles}>
<IgrGrid>
```

<!-- ComponentEnd: Grid -->

### Demo

```typescript
export class FinancialDataAllItem {
    public constructor(init: Partial<FinancialDataAllItem>) {
        Object.assign(this, init);
    }

    public Category: string;
    public Type: string;
    public Spread: number;
    public Open: number;
    public Price: number;
    public Buy: number;
    public Sell: number;
    public Change: number;
    public ChangePercent: number;
    public Volume: number;
    public High: number;
    public Low: number;
    public YearlyHigh: number;
    public YearlyLow: number;
    public YearlyStart: number;
    public YearlyChange: number;
    public Settlement: string;
    public Contract: string;
    public Region: string;
    public Country: string;
    public Risk: string;
    public Sector: string;
    public Currency: string;
    public Security: string;
    public Issuer: string;
    public Maturity: string;
    public IndGroup: string;
    public IndSector: string;
    public IndCategory: string;
    public CUSIP: string;
    public Cpn: string;
    public KRD_3YR: number;
    public ZV_SPREAD: number;
    public KRD_5YR: number;
    public KRD_1YR: number;
    public ID: number;

}
export class FinancialDataAll extends Array<FinancialDataAllItem> {
    public constructor(items: Array<FinancialDataAllItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FinancialDataAllItem({ Category: `Fuel`, Type: `Ethanol`, Spread: 0.01, Open: 1.512, Price: 2.76, Buy: 2.75, Sell: 2.76, Change: 0.01, ChangePercent: 0.2, Volume: 14, High: 2.75, Low: 1.12, YearlyHigh: 2.75, YearlyLow: 1.12, YearlyStart: 1.48, YearlyChange: 86.7, Settlement: `Cash`, Contract: `CFD`, Region: `Middle East`, Country: `Saudi Arabia`, Risk: `Low`, Sector: `Government`, Currency: `EUR`, Security: `Good`, Issuer: `American Airlines`, Maturity: `2022-02-11`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 0 }),
                new FinancialDataAllItem({ Category: `Fuel`, Type: `Natural Gas`, Spread: 0.02, Open: 2.094, Price: 2.07, Buy: 2.09, Sell: 2.09, Change: -0.03, ChangePercent: -1.8, Volume: 2783, High: 2.11, Low: 2.09, YearlyHigh: 3.2, YearlyLow: 1.84, YearlyStart: 2.52, YearlyChange: -16.51, Settlement: `Credit`, Contract: `Options`, Region: `Middle East`, Country: `Saudi Arabia`, Risk: `High`, Sector: `Public`, Currency: `PLN`, Security: `High`, Issuer: `Delta Airlines`, Maturity: `2022-02-22`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 1 }),
                new FinancialDataAllItem({ Category: `Agriculture`, Type: `Cotton`, Spread: 0.01, Open: 61.77, Price: 62.9, Buy: 61.77, Sell: 61.77, Change: 1.14, ChangePercent: 1.84, Volume: 3612, High: 62.06, Low: 61.32, YearlyHigh: 67.59, YearlyLow: 54.33, YearlyStart: 60.96, YearlyChange: 1.31, Settlement: `Cash`, Contract: `Options`, Region: `North America`, Country: `United States`, Risk: `Low`, Sector: `Private`, Currency: `EUR`, Security: `Good`, Issuer: `Southwest`, Maturity: `2022-05-23`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 2 }),
                // ... 997 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.cellAlignStyle {
    text-align: right;
    float:right;
}
.cellAlignStyle > span {
    float:right;
}
.up {
    color: green;
}
.down {
    color: red;
}
.grid__wrapper {
  padding: 16px;
}
.currency-badge-container {
    width: 80px;
    float: right;
}
.badge-left {
    float: left;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrBadgeModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrRowType } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrBadgeModule
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
                    data={this.financialDataAll}
                    ref={this.gridRef}
                    id="grid"
                    allowFiltering={true}
                    rowStyles={this.webGridRowStylesHandler}>
                    <IgrColumn
                        field="Category"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        filterable={false}
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Open"
                        header="Open Price"
                        width="120px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        width="120px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        width="120px"
                        dataType="number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change(%)"
                        width="120px"
                        dataType="percent"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Change On Year(%)"
                        width="150px"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Spread"
                        width="130px"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Volume"
                        width="130px"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="High"
                        header="High(D)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Low"
                        header="Low(D)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyHigh"
                        header="High(Y)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyLow"
                        header="Low(Y)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyStart"
                        header="Start(Y)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _financialDataAll: FinancialDataAll = null;
    public get financialDataAll(): FinancialDataAll {
        if (this._financialDataAll == null)
        {
            this._financialDataAll = new FinancialDataAll();
        }
        return this._financialDataAll;
    }


    public webGridRowStylesHandler = {
        'background': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '#FF000088' : '#00000000',
        'border': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '#FF000099' : '#E9E9E9'
    };

    public webGridCurrencyCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        const isCellCurrencyUp = typeof cell.value === 'number' && cell.value > 0;
        const isCellCurrencyDown = typeof cell.value === 'number' && cell.value <= 0;

        return (

            <div style={{width: '80px', float: 'right'}}>
                {
                    isCellCurrencyUp || isCellCurrencyDown ?
                    <span>
                        <IgrBadge variant={isCellCurrencyUp ? "success" : "danger"} style={{float: 'left'}}><span>{isCellCurrencyUp ? '▲' : '▼'}</span></IgrBadge>
                        <span style={{color: isCellCurrencyUp ? 'green' : 'red', float: 'right'}}>${cell.value.toFixed(2)}</span>
                    </span>
                    : <span>${cell.value}</span>
                }
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Grid Conditional Cell Styling

## Overview

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component in Ignite UI for React provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) input [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes

You can conditionally style the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) cells by setting the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) input and define custom rules.

```tsx
<IgrColumn field="BeatsPerMinute" dataType="number" cellClasses={beatsPerMinuteClasses}></IgrColumn>
```

<!-- ComponentEnd: Grid -->

The [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

<!-- ComponentStart: Grid -->

```tsx
const upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

const downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

const beatsPerMinuteClasses = {
    downFont: downFontCondition,
    upFont: upFontCondition
};
```

```css
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
```

<!-- ComponentEnd: Grid -->

### Demo

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
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

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
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

.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}

.topSpeed {
    color: royalblue !important;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { AthletesDataItem, AthletesData } from './AthletesData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
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
                    ref={this.gridRef}
                    data={this.athletesData}>
                    <IgrColumn
                        field="Id"
                        header="Rank"
                        sortable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Athlete"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats per Minute"
                        dataType="number"
                        editable={true}
                        sortable={true}
                        cellClasses={this.webGridBeatsPerMinuteCellClassesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed"
                        dataType="number"
                        editable={true}
                        sortable={true}
                        cellClasses={this.webGridTopSpeedCellClassesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Track Progress"
                        editable={true}
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="CountryFlag"
                        header="Country"
                        bodyTemplate={this.webGridImageCellTemplate}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }


    public webGridBeatsPerMinuteCellClassesHandler = {
        upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] > 95,
        downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 95
    }

    public webGridTopSpeedCellClassesHandler = {
        topSpeed: (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

- By using the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) input [`cellStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

### Using Cell Styles

Columns expose the [`cellStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellStyles) property which allows conditional styling of the column cells. Similar to [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

Let's define our styles:

```tsx
const webGridCellStyles = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "Position") {
            switch (cellValue) {
                case "up": return "#28a745";
                case "down": return "#dc3545";
                case "current": return "#17a2b8"
            }
        }
    }
}
```

```tsx
<IgrColumn cellStyles={webGridCellStyles}></IgrColumn>
```

<!-- ComponentEnd: Grid -->

### Demo

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
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

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
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

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { AthletesDataItem, AthletesData } from './AthletesData';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrRowType } from 'igniteui-react-grids';

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
    private column: IgrColumn

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
                    data={this.athletesData}
                    primaryKey="Id">
                    <IgrColumn
                        field="Id"
                        cellStyles={this.webGridCellStylesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="Position"
                        cellStyles={this.webGridCellStylesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        cellStyles={this.webGridCellStylesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        cellStyles={this.webGridCellStylesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="CountryName"
                        cellStyles={this.webGridCellStylesHandler}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridCellStylesHandler = {
        background: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => {
            if (columnKey === "Position") {
                switch (cellValue) {
                    case "up": return "#28a745";
                    case "down": return "#dc3545";
                    case "current": return "#17a2b8"
                }
            }
            return undefined;
        }
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

<!--ComponentStart: Grid, HierarchicalGrid, TreeGrid-->

```tsx
const backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};

const editDone = (event: IgrGridEditEventArgs) => {
    backgroundClasses = {...backgroundClasses};
}

<IgrGrid id="grid1" height="500px" width="100%" onCellEdit={editDone}>
  <IgrColumn id="Col1" field="Col1" dataType="number" cellClasses={backgroundClasses}></IgrColumn>
  <IgrColumn id="Col2" field="Col2" dataType="number" editable={true} cellClasses={backgroundClasses}></IgrColumn>
  <IgrColumn id="Col3" field="Col3" header="Col3" dataType="string" cellClasses={backgroundClasses}></IgrColumn>
</IgrGrid>
```

<!--ComponentEnd: Grid, HierarchicalGrid, TreeGrid-->

## API References

- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Column Hiding](column-hiding.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- * [Toolbar](toolbar.md) -->

- [Multi-column Headers](multi-column-headers.md)
- [Size](size.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
