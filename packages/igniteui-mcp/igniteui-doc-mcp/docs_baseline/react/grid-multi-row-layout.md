---
title: React Grid Multi Row Layout - Ignite UI for React
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for React Data Grid. Check out examples and demos!
_keywords: Multi-Row Layout, React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_tocName: Multi-Row Layout
_premium: true
---

# React Grid Multi-row Layout

The Multi-row Layout in the Ignite UI for React extends the rendering capabilities of the React Grid. The feature allows splitting a single data record into multiple visible rows.

## React Multi-row Layout Example

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
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrGridToolbarHiding, IgrColumnLayout, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
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
    private _groupingExpression1: IgrGroupingExpression[] | null = null;
    public get groupingExpression1(): IgrGroupingExpression[] {
        if (this._groupingExpression1 == null)
        {
            let groupingExpression1: IgrGroupingExpression[] = [];
            var groupingExpression2: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression2.fieldName = "Country";
            groupingExpression2.ignoreCase = false;
            groupingExpression2.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression2)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
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
                    data={this.customersData}
                    rowEditable={true}
                    allowFiltering={true}
                    filterMode="excelStyleFilter"
                    primaryKey="Company"
                    groupingExpressions={this.groupingExpression1}>
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
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumnLayout
                        header="ID">
                        <IgrColumn
                            field="ID"
                            rowStart={1}
                            colStart={1}
                            rowEnd={3}
                            filterable={false}
                            width="150px">
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        pinned={true}
                        header="Contact Details">
                        <IgrColumn
                            field="Company"
                            header="Company"
                            rowStart={1}
                            colStart={1}
                            colEnd={3}
                            sortable={true}
                            width="350px">
                        </IgrColumn>
                        <IgrColumn
                            field="ContactName"
                            header="Name"
                            rowStart={2}
                            colStart={1}
                            colEnd={2}
                            groupable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ContactTitle"
                            header="Title"
                            rowStart={2}
                            colStart={2}
                            colEnd={3}
                            groupable={true}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        pinned={false}
                        header="Address Details">
                        <IgrColumn
                            field="Country"
                            rowStart={1}
                            colStart={1}
                            colEnd={3}
                            groupable={true}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Region"
                            rowStart={1}
                            colStart={3}
                            colEnd={5}
                            groupable={true}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="PostalCode"
                            rowStart={1}
                            colStart={5}
                            colEnd={7}
                            groupable={true}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="City"
                            rowStart={2}
                            colStart={1}
                            colEnd={4}
                            groupable={true}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Address"
                            rowStart={2}
                            colStart={4}
                            colEnd={7}
                            filterable={false}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        header="Phone Details">
                        <IgrColumn
                            field="Phone"
                            rowStart={1}
                            colStart={1}
                            colEnd={2}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Fax"
                            rowStart={2}
                            colStart={1}
                            colEnd={2}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                    </IgrColumnLayout>
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


The declaration of Multi-row Layout is achieved through [`columnLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnLayout) component. Each [`columnLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnLayout) component should be considered as a block, containing one or multiple [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) components. Some of the grid features work on block level (those are listed in the "Feature Integration" section below). For example the virtualization will use the block to determine the virtual chunks, so for better performance split the columns into more [`columnLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnLayout) blocks if the layout allows it. There should be no columns outside of those blocks and no usage of [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) when configuring a multi-row layout. Multi-row Layout is implemented on top of the [grid layout](https://www.w3.org/TR/css-grid-1/) specification and should conform to its requirements.

The [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) component exposes four [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) properties to determine the location and span of each cell:

- [`colStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#colStart) - column index from which the field is starting. This property is **mandatory**.
- [`rowStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#rowStart) - row index from which the field is starting. This property is **mandatory**.
- [`colEnd`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#colEnd) - column index where the current field should end. The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field. This property is **optional**. If not set defaults to **colStart + 1**.
- [`rowEnd`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#rowEnd) - row index where the current field should end. The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field. This property is **optional**. If not set defaults to **rowStart + 1**.

```tsx
<IgrColumnLayout>
    <IgrColumn rowStart={1} colStart={1} rowEnd={3} field="ID"></IgrColumn>
</IgrColumnLayout>
<IgrColumnLayout>
    <IgrColumn rowStart={1} colStart={1} colEnd={3} field="CompanyName"></IgrColumn>
    <IgrColumn rowStart={2} colStart={1} colEnd={2} field="ContactName"></IgrColumn>
    <IgrColumn rowStart={2} colStart={2} colEnd={3} field="ContactTitle"></IgrColumn>
</IgrColumnLayout>
<IgrColumnLayout>
    <IgrColumn rowStart={1} colStart={1} colEnd={3} field="Country"></IgrColumn>
    <IgrColumn rowStart={1} colStart={3} colEnd={5} field="Region"></IgrColumn>
    <IgrColumn rowStart={1} colStart={5} colEnd={7} field="PostalCode"></IgrColumn>
    <IgrColumn rowStart={2} colStart={1} colEnd={4} field="City"></IgrColumn>
    <IgrColumn rowStart={2} colStart={4} colEnd={7} field="Address"></IgrColumn>
</IgrColumnLayout>
<IgrColumnLayout>
    <IgrColumn rowStart={1} colStart={1} field="Phone"></IgrColumn>
    <IgrColumn rowStart={2} colStart={1} field="Fax"></IgrColumn>
</IgrColumnLayout>
```

The result of the above configuration can be seen on the screenshot below:

<img src="../../../images/multi-row-layout-1.png" alt="multi-row-layout" style="width: 100%"/>

> [!Note]
> [`rowStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#rowStart) and [`colStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#colStart) properties must be set for each [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) into a [`columnLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnLayout). The [`columnLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnLayout) component is not verifying if the layout is correct and not throwing errors or warnings about that. The developers must make sure that the declaration of their layout is correct and complete, otherwise they may end up in broken layout with misalignments, overlaps and browser inconsistencies.

## Feature Integration

Due to the completely different rendering approach of Multi-row Layout, some of the column features will work only on [`columnLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnLayout) component. Such features are Column Pinning and Column Hiding. Otherwise - Sorting and Grouping will work in the same way - on the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) component.

- Filtering - only Excel Style Filtering is supported. Setting `FilterMode` explicitly to `FilterMode.quickFilter` has no effect.
- Paging - works on records, not visual rows.
- Group By - `HideGroupedColumns` option has no effect in Multi-row Layout. The grouped columns are always visible.

The following features are currently **not** supported:

- Column Moving
- Multi-column Headers
- Export to Excel
- Summaries

## Keyboard Navigation

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) with Multi-Row Layouts provides build-in keyboard navigation.

### Horizontal Navigation

- <kbd>←</kbd> or <kbd>→</kbd> - move to the adjacent cell on the left/right within the current row unaffected by the column layouts that are defined. If the current cell spans on more than one row, <kbd>←</kbd> and <kbd>→</kbd> should navigate to the first cell on the left and right with the same `rowStart`, unless you have navigated to some other adjacent cell before. The navigation stores the starting navigation cell and navigates to the cells with the same `rowStart` if possible.
- <kbd>CTRL</kbd> + <kbd>←</kbd> (<kbd>HOME</kbd>) or <kbd>CTRL</kbd> + <kbd>→</kbd> (<kbd>END</kbd>) - navigate to the start or end of the row and select the cell with accordance to the starting navigation cell.

### Vertical Navigation

- <kbd>↑</kbd> or <kbd>↓</kbd> - move to the cell above/below in relation to a starting position and is unaffected by the rows. If the current cell spans on more than one column the next active cell will be selected with accordance to the starting navigation cell.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> or <kbd>CTRL</kbd> + <kbd>Down</kbd> - Navigate and apply focus on the same column on the first or on the last row.
- <kbd>CTRL</kbd> + <kbd>HOME</kbd> or <kbd>CTRL</kbd> + <kbd>END</kbd> - Navigate to the first row and focus first cell or navigate to the last row and focus the last cell.

> [!Note]
> Navigation through cells which span on multiple rows or columns is done with accordance to the starting navigation cell and will allow returning to the starting cell using the key for the opposite direction. The same approach is used when navigating through group rows.

> [!Note]
> Selection and multi cell selection are working on layout, meaning that when a cell is active, its layout will be selected. Also all features of multiple selection like drag selection are applicable and will work per layout not per cell.

### Custom Keyboard Navigation

The grid allows customizing the default navigation behavior when a certain key is pressed. Actions like **going to the next cell** or **cell below** could be handled easily with the powerful keyboard navigation API:

- `GridKeydown` is exposed. The event will emit `IGridKeydownEventArgs`. This event is available only through the keyboard key combinations mentioned above, for all other key actions you can use `KeyDown` event.
- `NavigateTo` - this method allows you to navigate to a position based on provided `RowIndex` and `VisibleColumnIndex`

The demo below adds additional navigation down/up via the <kbd>ENTER</kbd> and <kbd>SHIFT</kbd> + <kbd>ENTER</kbd> keys, similar to the behavior observed in Excel.

### Demo

```typescript
export class CompanyDataItem {
    public constructor(init: Partial<CompanyDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public Address: string;
    public City: string;
    public Country: string;
    public LifetimeSales: number;
    public QuarterlySales: number;
    public YearlySales: number;
    public MarketPotential: number;
    public AssetsCash: number;
    public AccountsReceivable: number;
    public AssetsBooks: number;

}
export class CompanyData extends Array<CompanyDataItem> {
    public constructor(items: Array<CompanyDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CompanyDataItem({ ID: `abc1000`, Company: `Sportan`, Address: `Rapelye Street`, City: `Oceola`, Country: `VU`, LifetimeSales: 40882580.18, QuarterlySales: 430845.78, YearlySales: 1197420.17, MarketPotential: 4210805124.61, AssetsCash: 264714.71, AccountsReceivable: 63084.44, AssetsBooks: 7534.74 }),
                new CompanyDataItem({ ID: `abc1001`, Company: `Bugsall`, Address: `Hoyt Street`, City: `Rosine`, Country: `FM`, LifetimeSales: 29231147.89, QuarterlySales: 227299.97, YearlySales: 1486467.06, MarketPotential: 2505447478.96, AssetsCash: 370690.39, AccountsReceivable: 69242.24, AssetsBooks: 12507.92 }),
                new CompanyDataItem({ ID: `abc1002`, Company: `Hydrocom`, Address: `Sunnyside Court`, City: `Cornfields`, Country: `KE`, LifetimeSales: 35628528.18, QuarterlySales: 226007.91, YearlySales: 1092555.78, MarketPotential: 4930069033.99, AssetsCash: 403038.64, AccountsReceivable: 56183.05, AssetsBooks: 8113.52 }),
                // ... 26 more items
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
        --ig-size: var(--ig-size-medium);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrColumnLayoutModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumnLayout, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebColumnLayoutDescriptionModule } from 'igniteui-react-core';
import { CompanyDataItem, CompanyData } from './CompanyData';
import { IgrGridKeydownEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnLayoutModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private companyInfo: IgrColumnLayout
    private sales: IgrColumnLayout
    private marketPotentialInfo: IgrColumnLayout
    private assets: IgrColumnLayout

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridMRLCustomNavigationEvent = this.webGridMRLCustomNavigationEvent.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.companyData}
                    onGridKeydown={this.webGridMRLCustomNavigationEvent}>
                    <IgrColumnLayout
                        header="Company">
                        <IgrColumn
                            field="Company"
                            header="Company"
                            rowStart={1}
                            colStart={1}
                            colEnd={3}>
                        </IgrColumn>
                        <IgrColumn
                            field="Country"
                            header="Country"
                            rowStart={2}
                            colStart={1}>
                        </IgrColumn>
                        <IgrColumn
                            field="City"
                            header="City"
                            rowStart={2}
                            colStart={2}>
                        </IgrColumn>
                        <IgrColumn
                            field="Address"
                            header="Address"
                            rowStart={3}
                            colStart={1}
                            colEnd={3}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        header="Sales">
                        <IgrColumn
                            field="LifetimeSales"
                            header="Lifetime Sales"
                            rowStart={1}
                            rowEnd={3}
                            colStart={1}
                            colEnd={3}>
                        </IgrColumn>
                        <IgrColumn
                            field="QuarterlySales"
                            header="Quarterly"
                            rowStart={3}
                            colStart={1}>
                        </IgrColumn>
                        <IgrColumn
                            field="YearlySales"
                            header="Yearly"
                            rowStart={3}
                            colStart={2}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        header="Market Potential">
                        <IgrColumn
                            field="MarketPotential"
                            header="Market Potential"
                            rowStart={1}
                            rowEnd={4}
                            colStart={1}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        header="Assets">
                        <IgrColumn
                            field="AssetsCash"
                            header="Assets Cash"
                            rowStart={1}
                            colStart={1}>
                        </IgrColumn>
                        <IgrColumn
                            field="AccountsReceivable"
                            header="Accounts Receivable"
                            rowStart={1}
                            colStart={2}
                            colEnd={4}>
                        </IgrColumn>
                        <IgrColumn
                            field="AssetsBooks"
                            header="Assets Books"
                            rowStart={2}
                            rowEnd={4}
                            colStart={1}
                            colEnd={4}>
                        </IgrColumn>
                    </IgrColumnLayout>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _companyData: CompanyData = null;
    public get companyData(): CompanyData {
        if (this._companyData == null)
        {
            this._companyData = new CompanyData();
        }
        return this._companyData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebColumnLayoutDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridMRLCustomNavigationEvent(args: IgrGridKeydownEventArgs): void {
        const target = args.detail.target;
        const grid: IgrGrid = this.grid;
        if ((args.detail.event as any).key.toLowerCase() === 'enter') {
           args.detail.event.preventDefault();
           args.detail.cancel = true;
           const rowIndex = target.row.index === undefined ? target.index : target.row.index;
           (grid as any).navigateTo((args.detail.event as any).shiftKey ? rowIndex - 1 : rowIndex + 1, target.column.visibleIndex,
                (obj: any) => {
                   obj.target.activate();
               });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-cell-active-border-color: #ffcd0f;
    --ig-grid-cell-selected-background: #6f6f6f;
    --ig-grid-row-hover-background: #fde069;
    --ig-grid-row-selected-background: #8d8d8d;
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #fff;
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
    --ig-grid-cell-active-border-color: #ffcd0f;
    --ig-grid-cell-selected-background: #6f6f6f;
    --ig-grid-row-hover-background: #fde069;
    --ig-grid-row-selected-background: #8d8d8d;
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #fff;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumnLayout, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
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
                    primaryKey="Company">
                    <IgrColumnLayout
                        hidden={true}
                        header="ID">
                        <IgrColumn
                            field="ID"
                            rowStart={1}
                            colStart={1}
                            rowEnd={3}
                            filterable={false}
                            width="150px">
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        pinned={true}
                        header="Contact Details">
                        <IgrColumn
                            field="Company"
                            header="Company"
                            rowStart={1}
                            colStart={1}
                            colEnd={3}
                            sortable={true}
                            width="350px">
                        </IgrColumn>
                        <IgrColumn
                            field="ContactName"
                            header="Name"
                            rowStart={2}
                            colStart={1}
                            colEnd={2}>
                        </IgrColumn>
                        <IgrColumn
                            field="ContactTitle"
                            header="Title"
                            rowStart={2}
                            colStart={2}
                            colEnd={3}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        pinned={false}
                        header="Address Details">
                        <IgrColumn
                            field="Country"
                            rowStart={1}
                            colStart={1}
                            colEnd={3}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Region"
                            rowStart={1}
                            colStart={3}
                            colEnd={5}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="PostalCode"
                            rowStart={1}
                            colStart={5}
                            colEnd={7}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="City"
                            rowStart={2}
                            colStart={1}
                            colEnd={4}
                            filterable={false}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Address"
                            rowStart={2}
                            colStart={4}
                            colEnd={7}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        header="Phone Details">
                        <IgrColumn
                            field="Phone"
                            rowStart={1}
                            colStart={1}
                            colEnd={2}
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Fax"
                            rowStart={2}
                            colStart={1}
                            colEnd={2}
                            width="220px">
                        </IgrColumn>
                    </IgrColumnLayout>
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`columnLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnLayout)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
