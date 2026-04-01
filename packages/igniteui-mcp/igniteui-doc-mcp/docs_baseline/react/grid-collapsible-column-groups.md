---
title: React Grid Collapsible Column Groups - Ignite UI for React
_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our React Grid. Try it now!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["ColumnGroup"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/collapsible-column-groups
_tocName: Collapsible Column Groups
_premium: true
---

# React Grid Collapsible Column Groups Overview

The Ignite UI for React Collapsible Column Groups feature in React Grid allows you to organize and manage multiple levels of nested columns and column groups in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) by grouping them together and providing the option to collapse or expand these groups for improved data visualization and navigation.

## React Grid Collapsible Column Groups Example

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
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumnGroup, IgrColumn } from 'igniteui-react-grids';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

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
                    data={this.invoicesData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumnGroup
                        header="Customer Information"
                        collapsible={true}>
                        <IgrColumn
                            field="CustomerName"
                            header="Customer Name"
                            visibleWhenCollapsed={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerID"
                            header="Customer ID"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerFirstName"
                            header="First Name"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerLastName"
                            header="Last Name"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Customer Address"
                            expanded={false}
                            collapsible={true}>
                            <IgrColumn
                                field="CustomerAddress"
                                header="Full Address"
                                width="250px"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                visibleWhenCollapsed={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                visibleWhenCollapsed={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                visibleWhenCollapsed={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                header="Postal Code"
                                visibleWhenCollapsed={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumn
                        field="ShipperName"
                        header="Shipper Name">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="Product Details"
                        collapsible={true}
                        expanded={false}>
                        <IgrColumn
                            field="ProductName"
                            header="Name">
                        </IgrColumn>
                        <IgrColumn
                            field="UnitPrice"
                            header="Unit Price">
                        </IgrColumn>
                        <IgrColumn
                            field="ProductID"
                            header="ID"
                            visibleWhenCollapsed={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Quantity"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Discontinued"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                    </IgrColumnGroup>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Setup

To get started with the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) and the **Collapsible multi-column headers** feature, first you need to install Ignite UI for React by typing the following command:

<!-- React -->

```cmd
npm install igniteui-react-grids
```

<!-- end: React -->

For a complete introduction to the Ignite UI for React, read the [getting started](../../general-getting-started.md) topic.

Also, we strongly suggest that you take a brief look at [multi-column headers](multi-column-headers.md) topic, to see more detailed information on how to setup the column groups in your grid.

## Usage

**Collapsible Column Groups** is a part of the multi-column headers feature which provides a way to collapse/expand a column group to a smaller set of data. When a column group is collapsed, a subset of the columns will be shown to the end-user and the other child columns of the group will hide. Each collapsed/expanded column can be bound to the grid data source, or it may be unbound, thus calculated.

In order to define a column group as collapsible, you need to set the [`collapsible`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumngroup.html#collapsible) property on the [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) to **true**.

You need to define the property [`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#visibleWhenCollapsed) to at least two child columns. At least one column must be visible when the group is collapsed ([`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#visibleWhenCollapsed) set to **true**) and at least one column must be hidden when the group is expanded ([`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#visibleWhenCollapsed) set to `false`), otherwise the **collapsible functionality will be disabled**. If [`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#visibleWhenCollapsed) is not specified for some of the child columns, then this column will be always visible regardless of whether the parent state is expanded or collapsed.

Let's see the markup below:

```tsx
<IgrColumnGroup collapsible={true} header="Customer Information">
    <IgrColumn field="CustomerName" header="Customer Name" visibleWhenCollapsed={true}>
    </IgrColumn>
    <IgrColumn field="CustomerID" header="Customer ID" visibleWhenCollapsed={false}>
    </IgrColumn>
    <IgrColumn field="CustomerFirstName" header="First Name" visibleWhenCollapsed={false}>
    </IgrColumn>
    <IgrColumn field="CustomerLastName" header="Last Name" visibleWhenCollapsed={false}>
    </IgrColumn>
    <IgrColumnGroup header="Customer Address">
        <IgrColumn field="CustomerAddress"  header="Full Address" width="250px" visibleWhenCollapsed={true}>
        </IgrColumn>
        <IgrColumn field="Address" visibleWhenCollapsed={false}>
        </IgrColumn>
        <IgrColumn  field="City" visibleWhenCollapsed={false}>
        </IgrColumn>
        <IgrColumn field="Country" visibleWhenCollapsed={false}>
        </IgrColumn>
        <IgrColumn field="PostalCode" header="Postal Code" visibleWhenCollapsed={false}>
        </IgrColumn>
    </IgrColumnGroup>
</IgrColumnGroup>
```

To summarize, every child column has three states:

- Can be always visible, no matter the expanded state of its parent.
- Can be visible, when its parent is collapsed.
- Can be hidden, when its parent is collapsed.

The initial state of the column group which is specified as collapsible is [`expanded`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumngroup.html#expanded) set to **true**, but you can easily change this behavior by setting it to **false**.

<!-- Angular, WebComponents, React -->

## Expand/Collapse Indicator Template

Default expand indicator for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is the following:

<img class="responsive-img" src="../../../images/general/expand_indicator.png" alt="expand_indicator" style="width: 450px; height: 130px"/>

Default collapse indicator for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is the following:

<img class="responsive-img" src="../../../images/general/collapsed_indicator.png" alt="collapsed_indicator" style="width: 400px; height: 130px"/>

Also, if you need to change the default expand/collapse indicator, we provide templating options in order to achieve this.

```tsx
<IgrColumnGroup id="info" header="Customer Information" collapsible={true} collapsibleIndicatorTemplate={collapsibleIndicatorTemplate}>
    <IgrColumn field="CustomerName" header="Fullname" dataType="string" visibleWhenCollapsed={true}></IgrColumn>
    <IgrColumn field="CustomerID" header="Customer ID" dataType="string" visibleWhenCollapsed={false}></IgrColumn>
    <IgrColumnGroup id="address" header="Customer Address" collapsible={true}>
        <IgrColumn field="Country" header="Country" dataType="string" sortable={true} visibleWhenCollapsed={true}></IgrColumn>
        <IgrColumn field="City" header="City" dataType="string" sortable={true} visibleWhenCollapsed={false}></IgrColumn>
    </IgrColumnGroup>
</IgrColumnGroup>

const collapsibleIndicatorTemplate = (ctx: IgrColumnTemplateContext) => {
    return (
    <div>
        <IgrIcon iconName={ctx.column.expanded ? 'remove' : 'add'}></IgrIcon>
    </div>)
}
```

<!-- end: Angular, WebComponents, React -->

> **Note**
> Please keep in mind that initially collapse group option takes precedence over column hidden - If you declared your column to be hidden using the property
> hidden and you have a group defined where the same column should be shown, the column will be shown.

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
