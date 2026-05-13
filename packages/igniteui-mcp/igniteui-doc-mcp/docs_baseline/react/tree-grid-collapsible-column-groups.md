---
title: React Tree Grid Collapsible Column Groups - Ignite UI for React
_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our React Tree Grid. Try it now!
_keywords: React, Tree Grid, IgrTreeGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["ColumnGroup"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/collapsible-column-groups
_tocName: Collapsible Column Groups
_premium: true
---

# React Tree Grid Collapsible Column Groups Overview

The Ignite UI for React Collapsible Column Groups feature in React Tree Grid allows you to organize and manage multiple levels of nested columns and column groups in the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) by grouping them together and providing the option to collapse or expand these groups for improved data visualization and navigation.

## React Tree Grid Collapsible Column Groups Example

```typescript
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #treeGrid {
        --ig-size: var(--ig-size-small);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumnGroup, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    moving={true}
                    rowSelection="none">
                    <IgrColumnGroup
                        header="General Information"
                        collapsible={true}
                        expanded={false}
                        pinned={false}>
                        <IgrColumn
                            field="Name"
                            header="Full Name"
                            dataType="string"
                            sortable={true}
                            resizable={true}
                            width="200"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="LastName"
                            header="Last Name"
                            dataType="string"
                            sortable={true}
                            resizable={true}
                            width="200"
                            visibleWhenCollapsed={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Title"
                            width="250"
                            dataType="string"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ID"
                            dataType="number"
                            resizable={true}
                            filterable={false}
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="HireDate"
                            dataType="date"
                            sortable={true}
                            resizable={true}
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Age"
                            dataType="number"
                            sortable={true}
                            resizable={true}
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location"
                            collapsible={true}>
                            <IgrColumn
                                field="FullAddress"
                                width="300"
                                dataType="string"
                                sortable={true}
                                resizable={true}
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                dataType="string"
                                sortable={true}
                                resizable={true}
                                visibleWhenCollapsed={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                dataType="string"
                                sortable={true}
                                resizable={true}
                                visibleWhenCollapsed={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                dataType="string"
                                sortable={true}
                                resizable={true}
                                visibleWhenCollapsed={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Setup

To get started with the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) and the **Collapsible multi-column headers** feature, first you need to install Ignite UI for React by typing the following command:

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

Default expand indicator for the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) is the following:

<img class="responsive-img" src="../../../images/general/expand_indicator.png" alt="expand_indicator" style="width: 450px; height: 130px"/>

Default collapse indicator for the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) is the following:

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

- [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
