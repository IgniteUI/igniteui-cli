---
title: React Grid Column Reordering & Moving - Ignite UI for React
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the React Column Moving API. Try Ignite UI for React!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-moving
_tocName: Column Moving
_premium: true
---

# Grid Column Reordering & Moving

The React Grid Column Moving feature in Ignite UI for React allows quick and easy column reordering. This can be done through the Column Moving API or by dragging and dropping the headers to another position via mouse or touch gestures. In the React Grid, you can enable Column Moving for pinned and unpinned columns and for [Multi-Column Headers](multi-column-headers.md) as well.

> \[!Note]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> \[!Note]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**!

> \[!Note]
> If the pinned area exceeds its maximum allowed width (80% of the total [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```tsx
const headerTemplate = (ctx: IgrCellTemplateContext) => {
    return (
    <>
       <IgrIcon draggable={false} onClick={onClick}></IgrIcon>
    </>
    );
}
```

## React Grid Column Moving Overview Example

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

import { IgrBadgeModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrColumnTemplateContext, IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrBadgeModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "USD";
            columnPipeArgs1.digitsInfo = "1.2-2";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private  _columnPipeArgs2: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs2(): IgrColumnPipeArgs {
        if (this._columnPipeArgs2 == null)
        {
            var columnPipeArgs2: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs2.currencyCode = "USD";
            columnPipeArgs2.digitsInfo = "1.2-2";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }
    private  _columnPipeArgs3: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs3(): IgrColumnPipeArgs {
        if (this._columnPipeArgs3 == null)
        {
            var columnPipeArgs3: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs3.currencyCode = "USD";
            columnPipeArgs3.digitsInfo = "1.2-2";

            this._columnPipeArgs3 = columnPipeArgs3;
        }
        return this._columnPipeArgs3;
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
                    primaryKey="ProductID"
                    moving={true}
                    ref={this.gridRef}>
                    <IgrColumn
                        header="Category"
                        field="Category"
                        pinned={true}
                        width="200px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        header="Type"
                        field="Type"
                        pinned={true}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        header="Price"
                        field="Price"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs1}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        header="Buy"
                        field="Buy"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs2}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        header="Sell"
                        field="Sell"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs3}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        header="Spread"
                        field="Spread"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        header="Change"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change Percent"
                        dataType="number"
                        width="150px"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Yearly Change"
                        dataType="number"
                        width="150px"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}>
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


    public webGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto', cursor: 'pointer'}} onPointerDown={(e: any) => this.toggleColumnPin(column.field)}>📌</span>
            </div>
        );
    }

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


## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) could have either movable or immovable columns. This is done via the [`moving`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#moving) input of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

<!-- React -->

```tsx
<IgrGrid moving={true}></IgrGrid>
```

<!-- end: React -->

<!-- ComponentEnd: Grid -->

## API

In addition to the drag and drop functionality, the Column Moving feature also provides API methods to allow moving a column/reordering columns programmatically:

[`moveColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#moveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `Position` (representing a `DropPosition` value), which determines whether to place the column before or after the target column.

```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

[`move`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

Note that when using the column moving feature, the `ColumnMovingEnd` event will be emitted if the operation was successful. Also note that in comparison to the drag and drop functionality, using the column moving feature does not require setting the [`moving`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#moving) property to true.

## Events

There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are `ColumnMovingStart`, `ColumnMoving` and `ColumnMovingEnd`.

You can subscribe to the `ColumnMovingEnd` event of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the **Category** column after the **Change On Year(%)** column in the following code snippet.

<!-- ComponentStart: Grid, HierarchicalGrid -->

```tsx
const onColumnMovingEnd = (event: IgrColumnMovingEndEventArgs) => {
   if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}

<IgrGrid autoGenerate={false} moving={true} data={data} onColumnMovingEnd={onColumnMovingEnd}>
    <IgrColumn field="Category"></IgrColumn>
    <IgrColumn field="Change On Year(%)" dataType="number"></IgrColumn>
</IgrGrid>
```

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).

In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
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

#grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrBadgeModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrColumnTemplateContext, IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrBadgeModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "USD";
            columnPipeArgs1.digitsInfo = "1.2-2";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private  _columnPipeArgs2: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs2(): IgrColumnPipeArgs {
        if (this._columnPipeArgs2 == null)
        {
            var columnPipeArgs2: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs2.currencyCode = "USD";
            columnPipeArgs2.digitsInfo = "1.2-2";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }
    private  _columnPipeArgs3: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs3(): IgrColumnPipeArgs {
        if (this._columnPipeArgs3 == null)
        {
            var columnPipeArgs3: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs3.currencyCode = "USD";
            columnPipeArgs3.digitsInfo = "1.2-2";

            this._columnPipeArgs3 = columnPipeArgs3;
        }
        return this._columnPipeArgs3;
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
                    primaryKey="ProductID"
                    moving={true}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="Category"
                        pinned={true}
                        width="200px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        pinned={true}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs1}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs2}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs3}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Spread"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change Percent"
                        dataType="number"
                        minWidth="150px"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Yearly Change"
                        dataType="number"
                        minWidth="150px"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}>
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


    public webGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto', cursor: 'pointer'}} onPointerDown={(e: any) => this.toggleColumnPin(column.field)}>📌</span>
            </div>
        );
    }

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


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
