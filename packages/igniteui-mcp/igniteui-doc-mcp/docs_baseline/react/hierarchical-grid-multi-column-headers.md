---
title: React Hierarchical Grid Multi-Column Headers - Ignite UI for React
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for React grid and combine them into multi headers.
_keywords: Multi-Column Headers, React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# React Hierarchical Grid Multi-Column Headers Overview

The Ignite UI for React Multi-Column Headers feature in React Hierarchical Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## React Hierarchical Grid Multi-Column Headers Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrColumn, IgrColumnGroup, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebColumnGroupDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrColumnGroupModule,
    IgrPropertyEditorPanelModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private propertyEditorPropertyDescription1: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription2: IgrPropertyEditorPropertyDescription
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webHierarchicalGridPinFirstGroupToggle = this.webHierarchicalGridPinFirstGroupToggle.bind(this);
        this.webHierarchicalGridHideFirstGroupToggle = this.webHierarchicalGridHideFirstGroupToggle.bind(this);
        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.hierarchicalGrid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Pin First Group"
                        buttonClicked={this.webHierarchicalGridPinFirstGroupToggle}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Hide First Group"
                        buttonClicked={this.webHierarchicalGridHideFirstGroupToggle}
                        name="propertyEditorPropertyDescription2">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="CustomerID"
                    moving={true}
                    allowFiltering={true}>
                    <IgrColumn
                        field="CustomerID"
                        dataType="string"
                        sortable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            dataType="string"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
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
                            <IgrColumn
                                field="Country"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
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
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumnGroup
                            header="Order Information">
                            <IgrColumnGroup
                                header="Order Details">
                                <IgrColumn
                                    field="OrderID"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="EmployeeID"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="OrderDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="RequiredDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="General Shipping Information">
                                <IgrColumn
                                    field="ShipDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipVia"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Freight"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipName"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Shipping Locations">
                                <IgrColumn
                                    field="ShipAddress"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCity"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipPostalCode"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCountry"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="ProductID"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebColumnGroupDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridPinFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const hgrid: IgrHierarchicalGrid = this.hierarchicalGrid;
        const firstColumnGroup = hgrid.getColumnByName("Company").parent;
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        hgrid.markForCheck();
    }

    public webHierarchicalGridHideFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const hgrid: IgrHierarchicalGrid = this.hierarchicalGrid;
        const firstColumnGroup = hgrid.getColumnByName("Company").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        hgrid.markForCheck();
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


The declaration of multi-column headers is achieved by wrapping a set of columns into an [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) component with [`header`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#header) title information passed.

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={hierarchicalCustomers} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving={true} allowFiltering={true}>
    <IgrColumn sortable={true} resizable={true} field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumnGroup header="Address Information">
        <IgrColumnGroup header="Location">
            <IgrColumn sortable={true} resizable={true} field="Address" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="City" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="PostalCode" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="Country" dataType="string"></IgrColumn>
        </IgrColumnGroup>
        <IgrColumnGroup header="Contact Information">
            <IgrColumn sortable={true} resizable={true} field="Phone" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="Fax" dataType="string"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) leads to the desired result.

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={hierarchicalCustomers} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving={true} allowFiltering={true}>
    <IgrColumn sortable={true} resizable={true} field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumnGroup header="General Information">
        <IgrColumn sortable={true} resizable={true} field="CompanyName" dataType="string"></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn sortable={true} resizable={true} field="ContactName" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="ContactTitle" dataType="string"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

Every [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> \[!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={hierarchicalCustomers} ref={hierarchicalGridRef} id="hierarchicalGrid" primaryKey="ID" moving={true} allowFiltering={true}>
    <IgrColumn sortable={true} resizable={true} movable={true} pinned={true} field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumnGroup movable={true} pinned={true} header="General Information">
        <IgrColumn sortable={true} resizable={true} field="CompanyName" dataType="string"></IgrColumn>
        <IgrColumnGroup header="Person Details">
            <IgrColumn sortable={true} resizable={true} field="ContactName" dataType="string"></IgrColumn>
            <IgrColumn sortable={true} resizable={true} field="ContactTitle" dataType="string"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

## Multi-Column Header Template

```tsx
<IgrColumnGroup header="Contact Information" headerTemplate={groupHeaderTemplate}></IgrColumnGroup>
```

```tsx
const groupHeaderTemplate = (e: IgrColumnTemplateContext) => {
  const column = e.column as IgrColumnGroup;
  return (
    <div>
      <span style={{ float: "left" }}>{column.header.toUpperCase()}</span>
    </div>
  );
}
```

> \[!Note]
> If a header is re-templated and the corresponding column group is movable, you have to set the **draggable** attribute to **false** on the templated elements, so that you can handle any of the events that are applied!

```tsx
const columnHeaderTemplate = (e: IgrColumnTemplateContext ) => {
  const column = e.column as IgrColumnGroup;
  return (
    <span onClick={onClick}>
      <IgrIcon data-draggable="false"></IgrIcon>
    </span>
  );
}
```

The following sample demonstrates how to implement collapsible column groups using header templates.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrColumnGroup, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebColumnGroupDescriptionModule } from 'igniteui-react-core';
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrColumnGroupModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
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
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="CustomerID"
                    moving={true}
                    allowFiltering={true}>
                    <IgrColumn
                        field="CustomerID"
                        dataType="string"
                        sortable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information"
                        headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}>
                        <IgrColumn
                            field="Company"
                            dataType="string"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information"
                        headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}>
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
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
                            <IgrColumn
                                field="Country"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
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
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumnGroup
                            header="Order Information">
                            <IgrColumnGroup
                                header="Order Details"
                                headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}>
                                <IgrColumn
                                    field="OrderID"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="EmployeeID"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="OrderDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="RequiredDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="General Shipping Information"
                                headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}>
                                <IgrColumn
                                    field="ShipDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipVia"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Freight"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipName"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Shipping Locations"
                                headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}>
                                <IgrColumn
                                    field="ShipAddress"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCity"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipPostalCode"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCountry"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="ProductID"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebColumnGroupDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridColumnGroupHeaderTemplate = (e: { dataContext: IgrColumnTemplateContext }) => {
        const column = e.dataContext.column;
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span draggable="false"  onClick={(e: any) => this.toggleColumnGroup(column)}>
                    {this.columnGroupStates.get(column) ? "🔽" : "🔼"}
                </span>
                <span>{column.header}</span>
            </div>
        );
    };

    public columnGroupStates = new Map<IgrColumn, boolean>();
    public toggleColumnGroup(columnGroup: IgrColumn) {
        const columns = columnGroup.childColumns;
        if (columnGroup.header === 'General Information') {
            const column = columns[1] as IgrColumn;
            column.hidden = !column.hidden;
        } else if (columnGroup.header === 'Address Information') {
            for (const column of columns) {
                const col = column as IgrColumn;
                if (col.header === "Location"){
                    for (const cl of col.childColumns) {
                        const c = cl as IgrColumn;
                        if (c.field !== "Address"){
                            c.hidden = !c.hidden;
                        }
                    }
                }
                else if (col.header === "Contact Information"){
                    const c = col.childColumns[1] as IgrColumn;
                    c.hidden = !c.hidden;
                }
            }
        } else {
            for (let i = 1; i < columns.length; i++) {
                const c = columns[i] as IgrColumn;
                c.hidden = !c.hidden;
            }
        }
        this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrHierarchicalGrid className="grid"></IgrHierarchicalGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrColumnGroup, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebColumnGroupDescriptionModule } from 'igniteui-react-core';
import HierarchicalCustomers from './HierarchicalCustomers.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrColumnGroupModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
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
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="CustomerID"
                    moving={true}
                    allowFiltering={true}>
                    <IgrColumn
                        field="CustomerID"
                        dataType="string"
                        sortable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            dataType="string"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
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
                            <IgrColumn
                                field="Country"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
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
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumnGroup
                            header="Order Information">
                            <IgrColumnGroup
                                header="Order Details">
                                <IgrColumn
                                    field="OrderID"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="EmployeeID"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="OrderDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="RequiredDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="General Shipping Information">
                                <IgrColumn
                                    field="ShipDate"
                                    dataType="date"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipVia"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Freight"
                                    dataType="number"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipName"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Shipping Locations">
                                <IgrColumn
                                    field="ShipAddress"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCity"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipPostalCode"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCountry"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="ProductID"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="number"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebColumnGroupDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
