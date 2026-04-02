---
title: React Grid Sorting - Ignite UI for React
_description: Get started with the React sorting feature of Ignite UI for React Grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: React sort, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/sorting
_tocName: Sorting
_premium: true
---

# React Grid Sorting

The Ignite UI for React Data Sorting feature in React Grid is enabled on a per-column level, meaning that the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) can have a mix of sortable and non-sortable columns. Performing React sort actions enables you to change the display order of the records based on specified criteria.

## React Grid Sorting Overview Example

```typescript
export class ProductSalesItem {
    public constructor(init: Partial<ProductSalesItem>) {
        Object.assign(this, init);
    }

    public OrderID: number;
    public SaleAmount: number;
    public Category: string;
    public Company: string;
    public ShipCountry: string;
    public ShippedDate: string;

}
export class ProductSales extends Array<ProductSalesItem> {
    public constructor(items: Array<ProductSalesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ProductSalesItem({ OrderID: 10524, SaleAmount: 3192.65, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `France`, ShippedDate: `1997-05-07T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10672, SaleAmount: 3815.25, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `Germany`, ShippedDate: `1997-09-26T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10801, SaleAmount: 3026.85, Category: `Beverages`, Company: `Bólido Comidas preparadas`, ShipCountry: `Brazil`, ShippedDate: `1997-12-31T00:00:00Z` }),
                // ... 63 more items
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrSortingExpression, SortingDirection, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { ProductSalesItem, ProductSales } from './ProductSales';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private sortingOptionsEditor: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription1: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription2: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private _sortingExpression1: IgrSortingExpression[] | null = null;
    public get sortingExpression1(): IgrSortingExpression[] {
        if (this._sortingExpression1 == null)
        {
            let sortingExpression1: IgrSortingExpression[] = [];
            var sortingExpression2: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression2.fieldName = "Category";
            sortingExpression2.dir = SortingDirection.Asc;
            sortingExpression2.ignoreCase = true;

            sortingExpression1.push(sortingExpression2)
            this._sortingExpression1 = sortingExpression1;
        }
        return this._sortingExpression1;
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

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webGridClearSort = this.webGridClearSort.bind(this);
        this.webGridClearGrouping = this.webGridClearGrouping.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SortingOptions.Mode"
                        name="SortingOptionsEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Clear Sorting"
                        buttonClicked={this.webGridClearSort}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Clear Grouped Columns"
                        buttonClicked={this.webGridClearGrouping}
                        name="propertyEditorPropertyDescription2">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.productSales}
                    ref={this.gridRef}
                    sortingExpressions={this.sortingExpression1}>
                    <IgrColumn
                        field="OrderID"
                        header="Order ID"
                        groupable={true}
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        header="Category Name"
                        dataType="string"
                        groupable={true}
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        dataType="string"
                        groupable={true}
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        dataType="string"
                        groupable={true}
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="SaleAmount"
                        header="Sale Amount"
                        dataType="currency"
                        groupable={true}
                        sortable={true}
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShippedDate"
                        header="Shipped Date"
                        dataType="date"
                        sortable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _productSales: ProductSales = null;
    public get productSales(): ProductSales {
        if (this._productSales == null)
        {
            this._productSales = new ProductSales();
        }
        return this._productSales;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridClearSort(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var grid = this.grid;
        grid.clearSort("");
    }

    public webGridClearGrouping(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var grid = this.grid;
        grid.clearGrouping("");
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


This is done via the [`sortable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#sortable) input. With the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) sorting, you can also set the [`sortingIgnoreCase`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#sortingIgnoreCase) property to perform case sensitive sorting:

```tsx
<IgrColumn field="ProductName" header="Product Name" dataType="string" sortable={true}></IgrColumn>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides a solution for this problem by indicating the index of each sorted column.

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
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrSortingExpression, SortingDirection, IgrColumn } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';

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
    private _sortingExpression1: IgrSortingExpression[] | null = null;
    public get sortingExpression1(): IgrSortingExpression[] {
        if (this._sortingExpression1 == null)
        {
            let sortingExpression1: IgrSortingExpression[] = [];
            var sortingExpression2: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression2.dir = SortingDirection.Asc;
            sortingExpression2.fieldName = "Settlement";
            sortingExpression2.ignoreCase = true;

            sortingExpression1.push(sortingExpression2)
            var sortingExpression3: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression3.dir = SortingDirection.Desc;
            sortingExpression3.fieldName = "Type";
            sortingExpression3.ignoreCase = true;

            sortingExpression1.push(sortingExpression3)
            var sortingExpression4: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression4.dir = SortingDirection.Asc;
            sortingExpression4.fieldName = "Region";
            sortingExpression4.ignoreCase = true;

            sortingExpression1.push(sortingExpression4)
            var sortingExpression5: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression5.dir = SortingDirection.Asc;
            sortingExpression5.fieldName = "Country";
            sortingExpression5.ignoreCase = true;

            sortingExpression1.push(sortingExpression5)
            var sortingExpression6: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression6.dir = SortingDirection.Asc;
            sortingExpression6.fieldName = "Price";
            sortingExpression6.ignoreCase = true;

            sortingExpression1.push(sortingExpression6)
            var sortingExpression7: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression7.dir = SortingDirection.Asc;
            sortingExpression7.fieldName = "Buy";
            sortingExpression7.ignoreCase = true;

            sortingExpression1.push(sortingExpression7)
            this._sortingExpression1 = sortingExpression1;
        }
        return this._sortingExpression1;
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
                    sortingExpressions={this.sortingExpression1}
                    id="grid">
                    <IgrColumn
                        field="Settlement"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="currency"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        dataType="currency"
                        sortable={true}>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Sorting through the API

You can sort any column or a combination of columns through the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) API using the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`sort`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sort) method:

```tsx
import { SortingDirection } from "igniteui-react-grids";
```

```tsx
// Perform a case insensitive ascending sort on the ProductName column.
gridRef.current.sort([{ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true }]);

// Perform sorting on both the ProductName and Price columns.
gridRef.current.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

<!-- ComponentEnd: Grid -->

> [!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`clearSort`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clearSort) method:

<!-- ComponentStart: Grid -->

```tsx
// Removes the sorting state from the ProductName column
gridRef.current.clearSort('ProductName');

// Removes the sorting state from every column in the Grid
gridRef.current.clearSort();
```

<!-- ComponentEnd: Grid -->

> [!Note]
> The [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#sortStrategy) of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is of different type compared to the [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sortStrategy) of the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html), since they work in different scopes and expose different parameters.

> [!Note]
> The sorting operation **DOES NOT** change the underlying data source of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) by passing an array of sorting expressions to the [`sortingExpressions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sortingExpressions) property of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

```tsx
const sortingExpressions: IgrSortingExpression[] = [
    { fieldName: 'UnitsInStock', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'ProductName', dir: SortingDirection.Desc }
];

<IgrGrid
    data={productSales}
    sortingExpressions={sortingExpressions}>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> If values of type `string` are used by a column of [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) `Date`, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) won't parse them to `Date` objects and using [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- [`sortHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sortHeaderIconTemplate) – re-templates the sorting icon when no sorting is applied.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const sortHeaderIconTemplate = (ctx: IgrGridHeaderTemplateContext) => {
    return (
        <>
            <IgrIcon name='unfold_more'></IgrIcon>
        </>
    );
}

<IgrGrid sortHeaderIconTemplate={sortHeaderIconTemplate}></IgrGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

- [`sortAscendingHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sortAscendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in ascending order.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const sortAscendingHeaderIconTemplate = (ctx: IgrGridHeaderTemplateContext) => {
    return (
        <>
            <IgrIcon name='expand_less'></IgrIcon>
        </>
    );
}

<IgrGrid sortAscendingHeaderIconTemplate={sortAscendingHeaderIconTemplate}></IgrGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

- [`sortDescendingHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sortDescendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in descending order.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const sortDescendingHeaderIconTemplate = (ctx: IgrGridHeaderTemplateContext) => {
    return (
        <>
            <IgrIcon name='expand_more'></IgrIcon>
        </>
    );
}

<IgrGrid sortDescendingHeaderIconTemplate={sortDescendingHeaderIconTemplate}></IgrGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid">
</IgrGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```

### Demo

```typescript
export class ProductSalesItem {
    public constructor(init: Partial<ProductSalesItem>) {
        Object.assign(this, init);
    }

    public OrderID: number;
    public SaleAmount: number;
    public Category: string;
    public Company: string;
    public ShipCountry: string;
    public ShippedDate: string;

}
export class ProductSales extends Array<ProductSalesItem> {
    public constructor(items: Array<ProductSalesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ProductSalesItem({ OrderID: 10524, SaleAmount: 3192.65, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `France`, ShippedDate: `1997-05-07T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10672, SaleAmount: 3815.25, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `Germany`, ShippedDate: `1997-09-26T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10801, SaleAmount: 3026.85, Category: `Beverages`, Company: `Bólido Comidas preparadas`, ShipCountry: `Brazil`, ShippedDate: `1997-12-31T00:00:00Z` }),
                // ... 63 more items
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
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrSortingExpression, SortingDirection, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { ProductSalesItem, ProductSales } from './ProductSales';

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
    private _sortingExpression1: IgrSortingExpression[] | null = null;
    public get sortingExpression1(): IgrSortingExpression[] {
        if (this._sortingExpression1 == null)
        {
            let sortingExpression1: IgrSortingExpression[] = [];
            var sortingExpression2: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression2.fieldName = "Category";
            sortingExpression2.dir = SortingDirection.Asc;
            sortingExpression2.ignoreCase = true;

            sortingExpression1.push(sortingExpression2)
            this._sortingExpression1 = sortingExpression1;
        }
        return this._sortingExpression1;
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
                    data={this.productSales}
                    ref={this.gridRef}
                    id="grid"
                    sortingExpressions={this.sortingExpression1}>
                    <IgrColumn
                        field="OrderID"
                        header="Order ID"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        header="Category Name"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="SaleAmount"
                        header="Sale Amount"
                        dataType="currency"
                        sortable={true}
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShippedDate"
                        header="Shipped Date"
                        dataType="date"
                        sortable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _productSales: ProductSales = null;
    public get productSales(): ProductSales {
        if (this._productSales == null)
        {
            this._productSales = new ProductSales();
        }
        return this._productSales;
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

- [`IgrSortingExpression`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrsortingexpression.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
