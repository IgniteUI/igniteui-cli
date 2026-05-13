---
title: React Hierarchical Grid Collapsible Column Groups - Ignite UI for React
_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our React Hierarchical Grid. Try it now!
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["ColumnGroup"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/collapsible-column-groups
_tocName: Collapsible Column Groups
_premium: true
---

# React Hierarchical Grid Collapsible Column Groups Overview

The Ignite UI for React Collapsible Column Groups feature in React Hierarchical Grid allows you to organize and manage multiple levels of nested columns and column groups in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) by grouping them together and providing the option to collapse or expand these groups for improved data visualization and navigation.

## React Hierarchical Grid Collapsible Column Groups Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumnGroup, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
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
                    autoGenerate={false}
                    data={this.hierarchicalCustomersData}
                    ref={this.gridRef}
                    id="grid"
                    primaryKey="CustomerID">
                    <IgrColumnGroup
                        header="General Information"
                        collapsible={true}>
                        <IgrColumn
                            field="ContactName"
                            header="Contact Name"
                            visibleWhenCollapsed={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ContactTitle"
                            header="Contact Title"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerID"
                            header="Customer ID"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Company"
                            header="Company Name"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Address Information"
                            collapsible={true}>
                            <IgrColumnGroup
                                header="Location"
                                width="250px"
                                visibleWhenCollapsed={true}>
                                <IgrColumn
                                    field="Country"
                                    header="Country"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="City"
                                    header="City"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Address"
                                    header="Address"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="PostalCode"
                                    header="Postal Code"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumnGroup
                            header="Order Details"
                            collapsible={true}>
                            <IgrColumn
                                field="OrderID"
                                header="Order ID"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="EmployeeID"
                                header="Employee ID"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="OrderDate"
                                header="Order Date"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="RequiredDate"
                                header="Required Date"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="General Shipping Information"
                            collapsible={true}>
                            <IgrColumn
                                field="ShippedDate"
                                header="Shipped Date"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipVia"
                                header="Ship Via"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Freight"
                                header="Freight"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipName"
                                header="Ship Name"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Shipping Location"
                            collapsible={true}>
                            <IgrColumn
                                field="ShipAddress"
                                header="Ship Address"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipCity"
                                header="Ship City"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipPostalCode"
                                header="Ship Postal Code"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipCountry"
                                header="Ship Country"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="ProductID"
                                header="Product ID"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
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

## Setup

To get started with the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) and the **Collapsible multi-column headers** feature, first you need to install Ignite UI for React by typing the following command:

```cmd
npm install igniteui-react-grids
```

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

## Expand/Collapse Indicator Template

Default expand indicator for the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) is the following:

<img class="responsive-img" src="../../../images/general/expand_indicator.png" alt="expand_indicator" style="width: 450px; height: 130px"/>

Default collapse indicator for the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) is the following:

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

> **Note**
> Please keep in mind that initially collapse group option takes precedence over column hidden - If you declared your column to be hidden using the property
> hidden and you have a group defined where the same column should be shown, the column will be shown.

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
