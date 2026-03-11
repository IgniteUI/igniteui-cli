---
title: React Grid Group By | Group by multiple fields | Infragistics
_description: Configure group by that allows visualizing of data records in React Material table, visualize the grouped data in separate and convenient column group.
_keywords: React, Grid, Ignite UI for React, group by, Infragistics
_license: commercial
mentionedTypes: ["Grid", "RowDirective", "GroupByRowSelectorTemplateDetails"]
namespace: Infragistics.Controls
_tocName: Group By
_premium: true
---

# React Grid Group By

The Ignite UI for React Group By behavior in React IgrGrid creates grouped data rows based on the column values. The Group By in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) allows for visualizing the groups in a hierarchical structure. The grouped data rows can be expanded or collapsed and the order of grouping may be changed through the UI or API. When Row Selection is enabled, a Group By row selector is rendered in the left-most area of the group row. In case the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property is set to single, checkboxes are disabled and only serve as an indication for the group where selection is placed. If the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property is set to multiple, clicking over the Group By row selector selects all records belonging to this group.

## React Grid Group By Example

This example presents the grouping capabilities of a large amount of data. Dragging the column headers to the top (grouping area) allows users to see the data for the selected column in a hierarchical structure. They can do group by in multiple fields by dragging more column headers to the top. These grouping options come in handy when you have tables with numerous rows and columns where users want to present the data in a much faster and visually acceptable way.

```typescript
export class InvoicesWorldDataItem {
    public constructor(init: Partial<InvoicesWorldDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipRegion: string;
    public ShipPostalCode: string;
    public ShipCountry: string;
    public CustomerID: string;
    public CustomerName: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ShipperName: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public Discontinued: boolean;
    public ExtendedPrice: number;
    public Freight: number;

}
export class InvoicesWorldData extends Array<InvoicesWorldDataItem> {
    public constructor(items: Array<InvoicesWorldDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10692, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `United Package`, ProductID: 63, ProductName: `Vegie-spread`, UnitPrice: 43.9, Quantity: 20, Discontinued: false, ExtendedPrice: 878, Freight: 61.02 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 3, ProductName: `Aniseed Syrup`, UnitPrice: 10, Quantity: 6, Discontinued: false, ExtendedPrice: 60, Freight: 23.94 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 76, ProductName: `Lakkalikööri`, UnitPrice: 18, Quantity: 15, Discontinued: false, ExtendedPrice: 270, Freight: 23.94 }),
                // ... 319 more items
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
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrColumn } from 'igniteui-react-grids';
import { InvoicesWorldDataItem, InvoicesWorldData } from './InvoicesWorldData';
import { IgrGroupByRowTemplateContext, IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';

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
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;
            groupingExpression2.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression2)
            var groupingExpression3: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression3.fieldName = "ShipCity";
            groupingExpression3.ignoreCase = false;
            groupingExpression3.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression3)
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
                    autoGenerate={false}
                    data={this.invoicesWorldData}
                    ref={this.gridRef}
                    id="grid"
                    groupingExpressions={this.groupingExpression1}
                    groupRowTemplate={this.webGridGroupByRowTemplate}>
                    <IgrColumn
                        field="OrderID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        width="200px"
                        dataType="boolean"
                        groupable={true}
                        bodyTemplate={this.webGridBooleanCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipName"
                        header="Ship Name"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipperName"
                        header="Shipper Name"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Salesperson"
                        header="Sales Person"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesWorldData: InvoicesWorldData = null;
    public get invoicesWorldData(): InvoicesWorldData {
        if (this._invoicesWorldData == null)
        {
            this._invoicesWorldData = new InvoicesWorldData();
        }
        return this._invoicesWorldData;
    }


    public webGridGroupByRowTemplate = (e: {dataContext: IgrGroupByRowTemplateContext}) => {

        const groupRow: any = e.dataContext.implicit;
        const values = groupRow.records;

        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        const calc2017 = values.filter((x: any) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;
        const spanStyle = {
            color: '#09f'
          };
        return (
            <>
                <div>
                    <span style={spanStyle}>{groupRow.expression.fieldName}: </span>
                    <span>{groupRow.value instanceof Date ? groupRow.value.toLocaleDateString() : groupRow.value} </span>
                    <IgrBadge><span key="content">{groupRow.records.length}</span></IgrBadge>
                    <span style={spanStyle}> Ordered in 2017: </span><span>{calc2017}</span>
                </div>
            </>
        );
    };

    public webGridBooleanCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Initial Grouping State

It is possible to define initial grouping of the grid by assigning an array of expressions to the [`groupingExpressions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupingExpressions) property of the grid.

<!-- React -->

```typescript
const expressions = [
    { fieldName: 'ProductName', dir: SortingDirection.Desc },
    { fieldName: 'Released', dir: SortingDirection.Desc }
];
const grid1Ref = useRef<IgrGrid>(null);

<IgrGrid
    autoGenerate={true}
    groupingExpressions={expressions}
    ref={grid1Ref}>
</IgrGrid>

```

<!-- end: React -->

Grouping expressions implement the `ISortingExpression` interface.

## Group By API

### Grouping API

Grouping is available through the UI and through a robust API exposed by the grid component. Developers can allow end-users to group the grid data by certain columns, by setting each column's `Groupable` property to `true`.

```tsx
<IgrGrid
    autoGenerate={false}
    ref={gridRef}>
    <IgrColumn field="OrderID" hidden={true}></IgrColumn>
    <IgrColumn field="ShipCountry" header="Ship Country" width="200px" groupable={true}></IgrColumn>
    <IgrColumn field="OrderDate" header="Order Date" dataType="date" width="200px" groupable={true}></IgrColumn>
    <IgrColumn field="PostalCode" header="Postal Code" width="200px" groupable={true}></IgrColumn>
    <IgrColumn field="Discontinued" width="200px" dataType="boolean" groupable={true}></IgrColumn>
</IgrGrid>
```

During runtime the expressions are gettable and settable from the `groupingExpressions` property. If you need to add or change an existing expression you may also use the [`groupBy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupBy) method with either a single or an array of expressions.

<!-- React -->

```typescript
gridRef.current.groupBy([{ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true }]);
```

<!-- end: React -->

### Expand/Collapse API

In addition to grouping expressions you can also control the expansion states for group rows. They are stored in a separate property of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component [`groupingExpansionState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupingExpansionState) which is a collection of [`IgrGroupByExpandState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyexpandstate.html). Each expansion state is uniquely defined by the field name it is created for and the value it represents for each level of grouping, i.e. the identifier is a hierarchy array of [`IgrGroupByKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbykey.html).

As with [`groupingExpressions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupingExpressions), setting a list of [`IgrGroupByExpandState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyexpandstate.html) directly to the [`groupingExpansionState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupingExpansionState) will change the expansion accordingly. Additionally [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) exposes a method [`toggleGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#toggleGroup) that toggles a group by the group record instance or via the [`expanded`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowdirective.html#expanded) property of the row.

<!-- React -->

```typescript
const groupRow = gridRef.current.getRowByIndex(0).groupRow;
gridRef.current.toggleGroup(groupRow);
```

```typescript
const groupRow = gridRef.current.getRowByIndex(0);
groupRow.expanded = false;
```

Groups can be created expanded (**default**) or collapsed and the expansion states would generally only contain the state opposite to the default behavior. You can control whether groups should be created expanded or not through the [`groupsExpanded`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupsExpanded) property.

### Select/Deselect All Rows in a Group API

Selecting/Deselecting all rows in a group is available through the [`selectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#selectRowsInGroup) and [`deselectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#deselectRowsInGroup) API methods.

The code snippet below can be used to select all rows within a group using the group record instance [`selectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#selectRowsInGroup) method. Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

<!-- React -->

```typescript
const groupRow = gridRef.current.getRowByIndex(0).groupRow;
gridRef.current.selectRowsInGroup(groupRow);
```

If you need to deselect all rows within a group programmatically, you can use the [`deselectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#deselectRowsInGroup) method.

<!-- React -->

```typescript
const groupRow = gridRef.current.getRowByIndex(0).groupRow;
gridRef.current.deselectRowsInGroup(groupRow);
```

## Templating

### Group Row Templates

The group row except for the expand/collapse UI is fully templatable. By default it renders a grouping icon and displays the field name and value it represents. The context to render the template against is of type [`IgrGroupByRecord`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrecord.html).

As an example, the following template would make the group rows summary more verbose:

```tsx
const template = (ctx: IgrGroupByRowTemplateContext) => {
    const groupRow = ctx.implicit;
    return (<>
       <span>Total items with value: { groupRow.value } are { groupRow.records.length }</span>
    </>)
}
```

### Group Row Selector Templates

As mentioned above the group row except for the expand/collapse UI is fully templatable. To create a custom Group By row selector template use [`groupByRowSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupByRowSelectorTemplate). From the template, you can access the implicitly provided context variable, with properties that give you information about the Group By row's state.

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrowselectortemplatedetails.html#selectedCount) property shows how many of the group records are currently selected while [`totalCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrowselectortemplatedetails.html#totalCount) shows how many records belong to the group.

```tsx
const template = (ctx: IgrGroupByRowSelectorTemplateContext) => {
    return (<>
        { ctx.implicit.selectedCount } / { ctx.implicit.totalCount }
    </>)
}
```

The [`groupRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrowselectortemplatedetails.html#groupRow) property returns a reference to the group row.

```tsx
const template = (ctx: IgrGroupByRowSelectorTemplateContext) => {
    const groupRow = ctx.implicit.groupRow;
    return (<>
        <div onClick={(e: any) => handleGroupByRowSelectorClick(e, groupRow)}>Handle groupRow</div> `;
    </>)
}
```

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrowselectortemplatedetails.html#selectedCount) and [`totalCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrowselectortemplatedetails.html#totalCount) properties can be used to determine if the Group By row selector should be checked or indeterminate (partially selected).

## React Grid Group By With Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

### React Group By With Paging Example

```typescript
export class InvoicesWorldDataItem {
    public constructor(init: Partial<InvoicesWorldDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipRegion: string;
    public ShipPostalCode: string;
    public ShipCountry: string;
    public CustomerID: string;
    public CustomerName: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ShipperName: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public Discontinued: boolean;
    public ExtendedPrice: number;
    public Freight: number;

}
export class InvoicesWorldData extends Array<InvoicesWorldDataItem> {
    public constructor(items: Array<InvoicesWorldDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10692, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `United Package`, ProductID: 63, ProductName: `Vegie-spread`, UnitPrice: 43.9, Quantity: 20, Discontinued: false, ExtendedPrice: 878, Freight: 61.02 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 3, ProductName: `Aniseed Syrup`, UnitPrice: 10, Quantity: 6, Discontinued: false, ExtendedPrice: 60, Freight: 23.94 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 76, ProductName: `Lakkalikööri`, UnitPrice: 18, Quantity: 15, Discontinued: false, ExtendedPrice: 270, Freight: 23.94 }),
                // ... 319 more items
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
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { InvoicesWorldDataItem, InvoicesWorldData } from './InvoicesWorldData';
import { IgrGroupByRowTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';

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
            groupingExpression2.dir = SortingDirection.Asc;
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;

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
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.invoicesWorldData}
                    rowSelection="multiple"
                    groupingExpressions={this.groupingExpression1}
                    groupRowTemplate={this.webGridGroupByRowTemplate}>
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="250px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="150px"
                        dataType="number"
                        groupable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesWorldData: InvoicesWorldData = null;
    public get invoicesWorldData(): InvoicesWorldData {
        if (this._invoicesWorldData == null)
        {
            this._invoicesWorldData = new InvoicesWorldData();
        }
        return this._invoicesWorldData;
    }


    public webGridGroupByRowTemplate = (e: {dataContext: IgrGroupByRowTemplateContext}) => {

        const groupRow: any = e.dataContext.implicit;
        const values = groupRow.records;

        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        const calc2017 = values.filter((x: any) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;
        const spanStyle = {
            color: '#09f'
          };
        return (
            <>
                <div>
                    <span style={spanStyle}>{groupRow.expression.fieldName}: </span>
                    <span>{groupRow.value instanceof Date ? groupRow.value.toLocaleDateString() : groupRow.value} </span>
                    <IgrBadge><span key="content">{groupRow.records.length}</span></IgrBadge>
                    <span style={spanStyle}> Ordered in 2017: </span><span>{calc2017}</span>
                </div>
            </>
        );
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Group By With Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.md#summaries-with-group-by) topic.

## Keyboard Navigation

The grouping UI supports the following keyboard interactions:

- For group rows (focus should be on the row or the expand/collapse cell)
  - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - Expands the group
  - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - Collapses the group
  - <kbd>SPACE</kbd> - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple

- For group [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html) components in the group by area (focus should be on the chip)
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - moves the focused chip left, changing the grouping order, if possible
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - moves the focused chip right, changing the grouping order, if possible
  - <kbd>SPACE</kbd> - changes the sorting direction
  - <kbd>DELETE</kbd> - ungroups the field
  - The separate elements of the chip are also focusable and can be interacted with using the <kbd>ENTER</kbd> key.

<!-- WebComponents, Angular, React -->

## React Grid Custom Group By

Grid allows defining custom grouping per column or per grouping expression, which provides grouping based on a custom condition. This is useful when you need to group by complex objects or for other application specific scenarios.

The sample below demonstrates custom grouping by `Date`, where the date values are sorted and grouped by Day, Week, Month or Year based on user-selected grouping mode.

### React Custom Group By Example

```typescript
export class InvoicesWorldDataItem {
    public constructor(init: Partial<InvoicesWorldDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipRegion: string;
    public ShipPostalCode: string;
    public ShipCountry: string;
    public CustomerID: string;
    public CustomerName: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: string;
    public Country: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ShipperName: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public Discontinued: boolean;
    public ExtendedPrice: number;
    public Freight: number;

}
export class InvoicesWorldData extends Array<InvoicesWorldDataItem> {
    public constructor() {
        super();
        this.push(new InvoicesWorldDataItem(
        {
            ShipName: `Alfred's Futterkiste`,
            ShipAddress: `Obere Str. 57`,
            ShipCity: `Berlin`,
            ShipRegion: null,
            ShipPostalCode: `12209`,
            ShipCountry: `Germany`,
            CustomerID: `ALFKI`,
            CustomerName: `Alfreds Futterkiste`,
            Address: `Obere Str. 57`,
            City: `Berlin`,
            Region: null,
            PostalCode: `12209`,
            Country: `Germany`,
            Salesperson: `Margaret Peacock`,
            OrderID: 10692,
            OrderDate: `2016-11-22T22:00:00.000Z`,
            ShipperName: `United Package`,
            ProductID: 63,
            ProductName: `Vegie-spread`,
            UnitPrice: 43.9,
            Quantity: 20,
            Discontinued: false,
            ExtendedPrice: 878,
            Freight: 61.02
        }));
        this.push(new InvoicesWorldDataItem(
        {
            ShipName: `Alfred's Futterkiste`,
            ShipAddress: `Obere Str. 57`,
            ShipCity: `Berlin`,
            ShipRegion: null,
            ShipPostalCode: `12209`,
            ShipCountry: `Germany`,
            CustomerID: `ALFKI`,
            CustomerName: `Alfreds Futterkiste`,
            Address: `Obere Str. 57`,
            City: `Berlin`,
            Region: null,
            PostalCode: `12209`,
            Country: `Germany`,
            Salesperson: `Margaret Peacock`,
            OrderID: 10702,
            OrderDate: `2016-11-22T22:00:00.000Z`,
            ShipperName: `Speedy Express`,
            ProductID: 3,
            ProductName: `Aniseed Syrup`,
            UnitPrice: 10,
            Quantity: 6,
            Discontinued: false,
            ExtendedPrice: 60,
            Freight: 23.94
        }));
        this.push(new InvoicesWorldDataItem(
        {
            ShipName: `Alfred's Futterkiste`,
            ShipAddress: `Obere Str. 57`,
            ShipCity: `Berlin`,
            ShipRegion: null,
            ShipPostalCode: `12209`,
            ShipCountry: `Germany`,
            CustomerID: `ALFKI`,
            CustomerName: `Alfreds Futterkiste`,
            Address: `Obere Str. 57`,
            City: `Berlin`,
            Region: null,
            PostalCode: `12209`,
            Country: `Germany`,
            Salesperson: `Margaret Peacock`,
            OrderID: 10702,
            OrderDate: `2016-11-22T22:00:00.000Z`,
            ShipperName: `Speedy Express`,
            ProductID: 76,
            ProductName: `Lakkalikööri`,
            UnitPrice: 18,
            Quantity: 15,
            Discontinued: false,
            ExtendedPrice: 270,
            Freight: 23.94
        }));
        // ... 319 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGridModule, IgrGroupByRowTemplateContext, SortingDirection } from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { InvoicesWorldData } from "./InvoicesWorldData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrBadge,
  IgrButton,
  IgrDropdown,
  IgrDropdownItem,
  IgrDropdownModule
} from "igniteui-react";

const mods: any[] = [IgrGridModule, IgrDropdownModule];
mods.forEach((m) => m.register());

const data = new InvoicesWorldData();

export default function Sample() {
  const gridRef = useRef<IgrGrid>(null);
  const dropDownRef = useRef<IgrDropdown>(null);

  function getParsedDate(date: any) {
    return {
      day: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
  }
  function getWeekOfDate(date: any) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const week = Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
    return week;
  }

  function setMode(e: any) {
    setGroupByMode(e.target.textContent);
  }



  const [groupByMode, setGroupByMode] = useState("Month");
  const groupExpression = [
    {
      fieldName: 'OrderDate', dir: SortingDirection.Desc,
      groupingComparer: (a: any, b: any) => {
        const dateA = getParsedDate(a);
        const dateB = getParsedDate(b);
        if (groupByMode === 'Month') {
          return dateA.month === dateB.month ? 0 : -1;
        } else if (groupByMode === "Year") {
          return dateA.year === dateB.year ? 0 : -1;
        } else if (groupByMode === 'Week') {
          return getWeekOfDate(a) === getWeekOfDate(b) ? 0 : -1;
        }
        return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
      }
    }
  ] as any;

  function getMonthName(date: Date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
  }

  function groupByRowTemplate(ctx: { dataContext: IgrGroupByRowTemplateContext }) {
    const groupRow: any = ctx.dataContext.implicit;

    const dateTypes = {
      "Day": groupRow.value.toLocaleDateString(),
      "Month": getMonthName(groupRow.value),
      "Year": groupRow.value.getFullYear(),
      "Week": getWeekOfDate(groupRow.value)
    };

    const value = (dateTypes as any)[groupByMode];
    return <><div>
      <span style={{ color: "#09f" }}>OrderDate:</span>
      <span>{value}</span>
      <IgrBadge><span key="badge">{groupRow.records.length}</span></IgrBadge>
    </div></>;
  }

  return (
    <div className="container sample ig-typography">
      <div style={{ alignSelf: "flex-end" }} className="fill">
          <IgrDropdown ref={dropDownRef}>
            <div slot="target">
              <IgrButton key="btn"><span key="content">Group By Options</span></IgrButton>
            </div>
            <span onClick={e => setMode(e)}>
              <IgrDropdownItem key="day"><span key="contentDay">Day</span></IgrDropdownItem>
              <IgrDropdownItem key="week"><span key="contentWeek">Week</span></IgrDropdownItem>
              <IgrDropdownItem key="month" selected={true}><span key="contentMonth">Month</span></IgrDropdownItem>
              <IgrDropdownItem key="year"><span key="contentYear">Year</span></IgrDropdownItem>
            </span>
          </IgrDropdown>
      </div>
      <div className="container fill">
        <IgrGrid
          data={data}
          ref={gridRef}
          groupRowTemplate={groupByRowTemplate}
          groupingExpressions={groupExpression}
          autoGenerate={false}>
          <IgrColumn
            id="OrderID"
            field="OrderID"
            header="Order ID">
          </IgrColumn>
          <IgrColumn
            id="ShipCountry"
            field="ShipCountry"
            header="Ship Country">
          </IgrColumn>
          <IgrColumn
            id="OrderDate"
            dataType="date"
            field="OrderDate"
            header="Order Date">
          </IgrColumn>
          <IgrColumn
            id="PostalCode"
            field="PostalCode"
            header="Postal Code">
          </IgrColumn>
          <IgrColumn
            id="Discontinued"
            field="Discontinued"
            header="Discontinued">
          </IgrColumn>
          <IgrColumn
            id="ShipName"
            field="ShipName"
            header="Ship Name">
          </IgrColumn>
          <IgrColumn
            id="ShipperName"
            field="ShipperName"
            header="Shipper Name">
          </IgrColumn>
          <IgrColumn
            id="SalesPerson"
            field="SalesPerson"
            header="Sales Person">
          </IgrColumn>
          <IgrColumn
            id="UnitPrice"
            field="UnitPrice"
            header="Unit Price">
          </IgrColumn>
          <IgrColumn
            id="Quantity"
            field="Quantity"
            header="Quantity">
          </IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
```


The sample defines custom sorting for the different date conditions.
Each custom strategy defines the `GroupingComparer` method, which is the custom compare function used when sorting the values. Additionally it extracts the values from the date needed for the comparison.

<!-- React -->

```typescript
const groupByMode = "Month";
function getParsedDate(date: any) {
    return {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
}
```

<!-- end: React -->

A `GroupingComparer` function is defined for the grouping expressions, which determines the items belonging to the same group based on the selected grouping mode. Values in the sorted data for which this function returns 0 are marked as part of the same group.

```typescript
grid.groupingExpressions = [
    { fieldName: 'OrderDate', dir: SortingDirection.Desc,
    groupingComparer: (a, b) => {
            const dateA = this.getParsedDate(a);
            const dateB = this.getParsedDate(b);
            if (this.groupByMode === 'Month') {
                return dateA.month === dateB.month ? 0 : -1;
            } else if (this.groupByMode === "Year") {
                return dateA.year === dateB.year ? 0 : -1;
            } else if (this.groupByMode === 'Week') {
                return this.getWeekOfDate(a) === this.getWeekOfDate(b) ? 0 : -1;
            }
            return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
        }
    }
];
```

<!-- end:WebComponents, Angular, React -->

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- React -->

```tsx
<IgrGrid className="grid">
</IgrGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-group-row-background: #969799;
    --ig-grid-group-row-selected-background: #969799;
    --ig-grid-group-label-column-name-text: #f8f8f8;
    --ig-grid-group-label-text: #f8f8f8;
    --ig-grid-group-count-text-color: #222;
    --ig-grid-expand-icon-color: #f8f8f8;
    --ig-grid-expand-icon-hover-color: #f8f8f8;
}
```

### Demo

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

#grid {
    --ig-chip-text-color: rgb(248, 248, 248);
    --ig-chip-hover-text-color: rgb(225, 225, 225);
    --ig-chip-background: rgb(73, 73, 73);
    --ig-chip-hover-background: rgb(56, 56, 56);
    --ig-chip-focus-background: rgb(223, 181, 13);
    --ig-chip-selected-background: rgb(223, 181, 13);
    --ig-chip-focus-selected-background: rgb(223, 181, 13);
    --ig-grid-group-row-background: rgb(73, 73, 73);
    --ig-grid-group-row-selected-background: rgb(56, 56, 56);
    --ig-grid-group-label-column-name-text: rgb(248, 248, 248);
    --ig-grid-group-label-text: rgb(248, 248, 248);
    --ig-grid-group-count-background: rgb(255, 205, 15);
    --ig-grid-group-count-text-color: rgb(34, 34, 34);
    --ig-grid-expand-icon-color: rgb(255, 205, 15);
    --ig-grid-expand-icon-hover-color: rgb(223, 181, 13);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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
            groupingExpression2.dir = SortingDirection.Asc;
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;

            groupingExpression1.push(groupingExpression2)
            var groupingExpression3: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression3.dir = SortingDirection.Asc;
            groupingExpression3.fieldName = "ShipCity";
            groupingExpression3.ignoreCase = false;

            groupingExpression1.push(groupingExpression3)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
    }
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
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
                    ref={this.gridRef}
                    id="grid"
                    data={this.invoicesData}
                    groupingExpressions={this.groupingExpression1}>
                    <IgrColumn
                        field="OrderID"
                        header="Order ID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        width="200px"
                        groupable={true}
                        bodyTemplate={this.webGridBooleanCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipName"
                        header="Ship Name"
                        width="250px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="250px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipperName"
                        header="Shipper Name"
                        width="250px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Salesperson"
                        header="Sales Person"
                        width="250px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="150px"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs1}
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        header="Quantity"
                        width="150px"
                        dataType="number"
                        groupable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
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

    public webGridBooleanCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: WebComponents, Blazor, React -->

## Known Limitations

|Limitation|Description|
|--- |--- |
|Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown.

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrGroupByRecord`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrecord.html)
- `ISortingExpression`
- [`column`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgroupbyrecord.html#column)
- `IGroupByExpandState`
- [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html)

## Additional Resources

- [Grid overview](../data-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Column Moving](column-moving.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
