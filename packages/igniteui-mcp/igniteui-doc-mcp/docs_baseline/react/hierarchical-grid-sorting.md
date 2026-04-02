---
title: React Hierarchical Grid Sorting - Ignite UI for React
_description: Get started with the React sorting feature of Ignite UI for React Hierarchical Grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: React sort, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/sorting
_tocName: Sorting
_premium: true
---

# React Hierarchical Grid Sorting

The Ignite UI for React Data Sorting feature in React Hierarchical Grid is enabled on a per-column level, meaning that the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) can have a mix of sortable and non-sortable columns. Performing React sort actions enables you to change the display order of the records based on specified criteria.

## React Hierarchical Grid Sorting Overview Example

<!-- ComponentStart: HierarchicalGrid -->

Additionally there is a custom contextmenu added for sorting using [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s `ContextMenu` Output.

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrSortingExpression, SortingDirection, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private _sortingExpression1: IgrSortingExpression[] | null = null;
    public get sortingExpression1(): IgrSortingExpression[] {
        if (this._sortingExpression1 == null)
        {
            let sortingExpression1: IgrSortingExpression[] = [];
            var sortingExpression2: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression2.fieldName = "Artist";
            sortingExpression2.dir = SortingDirection.Asc;
            sortingExpression2.ignoreCase = true;

            sortingExpression1.push(sortingExpression2)
            this._sortingExpression1 = sortingExpression1;
        }
        return this._sortingExpression1;
    }
    private column: IgrColumn
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID"
                    sortingExpressions={this.sortingExpression1}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


This is done via the [`sortable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#sortable) input. With the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) sorting, you can also set the [`sortingIgnoreCase`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#sortingIgnoreCase) property to perform case sensitive sorting:

```tsx
<IgrColumn field="ProductName" header="Product Name" dataType="string" sortable={true}></IgrColumn>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) provides a solution for this problem by indicating the index of each sorted column.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrSortingExpression, SortingDirection, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private _sortingExpression1: IgrSortingExpression[] | null = null;
    public get sortingExpression1(): IgrSortingExpression[] {
        if (this._sortingExpression1 == null)
        {
            let sortingExpression1: IgrSortingExpression[] = [];
            var sortingExpression2: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression2.dir = SortingDirection.Asc;
            sortingExpression2.fieldName = "Artist";
            sortingExpression2.ignoreCase = true;

            sortingExpression1.push(sortingExpression2)
            var sortingExpression3: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression3.dir = SortingDirection.Desc;
            sortingExpression3.fieldName = "Debut";
            sortingExpression3.ignoreCase = true;

            sortingExpression1.push(sortingExpression3)
            var sortingExpression4: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression4.dir = SortingDirection.Asc;
            sortingExpression4.fieldName = "GrammyNominations";
            sortingExpression4.ignoreCase = true;

            sortingExpression1.push(sortingExpression4)
            var sortingExpression5: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression5.dir = SortingDirection.Asc;
            sortingExpression5.fieldName = "GrammyAwards";
            sortingExpression5.ignoreCase = true;

            sortingExpression1.push(sortingExpression5)
            this._sortingExpression1 = sortingExpression1;
        }
        return this._sortingExpression1;
    }
    private column: IgrColumn
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID"
                    sortingExpressions={this.sortingExpression1}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Sorting through the API

You can sort any column or a combination of columns through the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) API using the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) [`sort`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sort) method:

```tsx
import { SortingDirection } from "igniteui-react-grids";
```

```tsx
// Perform a case insensitive ascending sort on the ProductName column.
hierarchicalGridRef.current.sort([{ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true }]);

// Perform sorting on both the ProductName and Price columns.
hierarchicalGridRef.current.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`clearSort`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clearSort) method:

<!-- ComponentStart: HierarchicalGrid -->

```tsx
// Removes the sorting state from the ProductName column
hierarchicalGridRef.current.clearSort('ProductName');

// Removes the sorting state from every column in the Hierarchical Grid
hierarchicalGridRef.current.clearSort();
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> The [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#sortStrategy) of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) is of different type compared to the [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sortStrategy) of the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html), since they work in different scopes and expose different parameters.

> [!Note]
> The sorting operation **DOES NOT** change the underlying data source of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) by passing an array of sorting expressions to the [`sortingExpressions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#sortingExpressions) property of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

```tsx
const sortingExpressions: IgrSortingExpression[] = [
    { fieldName: 'UnitsInStock', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'ProductName', dir: SortingDirection.Desc }
];

<IgrHierarchicalGrid
    data={productSales}
    sortingExpressions={sortingExpressions}>
</IgrHierarchicalGrid>

```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> If values of type `string` are used by a column of [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) `Date`, the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) won't parse them to `Date` objects and using [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

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

<IgrHierarchicalGrid sortHeaderIconTemplate={sortHeaderIconTemplate}></IgrHierarchicalGrid>
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

<IgrHierarchicalGrid sortAscendingHeaderIconTemplate={sortAscendingHeaderIconTemplate}></IgrHierarchicalGrid>
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

<IgrHierarchicalGrid sortDescendingHeaderIconTemplate={sortDescendingHeaderIconTemplate}></IgrHierarchicalGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrHierarchicalGrid className="grid">
</IgrHierarchicalGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrSortingExpression, SortingDirection, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private _sortingExpression1: IgrSortingExpression[] | null = null;
    public get sortingExpression1(): IgrSortingExpression[] {
        if (this._sortingExpression1 == null)
        {
            let sortingExpression1: IgrSortingExpression[] = [];
            var sortingExpression2: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression2.fieldName = "Artist";
            sortingExpression2.dir = SortingDirection.Asc;
            sortingExpression2.ignoreCase = true;

            sortingExpression1.push(sortingExpression2)
            this._sortingExpression1 = sortingExpression1;
        }
        return this._sortingExpression1;
    }

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    sortingExpressions={this.sortingExpression1}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

- [`IgrSortingExpression`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrsortingexpression.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
