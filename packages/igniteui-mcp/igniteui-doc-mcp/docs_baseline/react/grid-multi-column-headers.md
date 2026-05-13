---
title: React Grid Multi-Column Headers - Ignite UI for React
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for React grid and combine them into multi headers.
_keywords: Multi-Column Headers, React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# React Grid Multi-Column Headers Overview

The Ignite UI for React Multi-Column Headers feature in React Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## React Grid Multi-Column Headers Example

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

import { IgrGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebColumnGroupDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
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
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webGridPinFirstGroupToggle = this.webGridPinFirstGroupToggle.bind(this);
        this.webGridHideFirstGroupToggle = this.webGridHideFirstGroupToggle.bind(this);
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
                        valueType="Button"
                        primitiveValue="Toggle First Group Pinned"
                        buttonClicked={this.webGridPinFirstGroupToggle}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Toggle First Group Hidden"
                        buttonClicked={this.webGridHideFirstGroupToggle}
                        name="propertyEditorPropertyDescription2">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.customersData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="ID"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
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
                                field="Country"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Region"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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
            WebColumnGroupDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridPinFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgrGrid = this.grid;
        const firstColumnGroup = grid.getColumnByName("Company").parent;
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        grid.markForCheck();
    }

    public webGridHideFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgrGrid = this.grid;
        const firstColumnGroup = grid.getColumnByName("Company").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        grid.markForCheck();
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

The declaration of multi-column headers is achieved by wrapping a set of columns into an [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) component with [`header`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#header) title information passed.

```tsx
<IgrGrid allowFiltering={true}>
    <IgrColumnGroup header="Contact Information">
        <IgrColumn sortable={true} resizable={true} field="Phone"></IgrColumn>
        <IgrColumn sortable={true} resizable={true} field="Fax"></IgrColumn>
        <IgrColumn sortable={true} resizable={true} field="PostalCode"></IgrColumn>
    </IgrColumnGroup>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) leads to the desired result.

```tsx
<IgrGrid height="600px" allowFiltering={true}>
    <IgrColumnGroup header="General Information">
        <IgrColumn movable={true} sortable={true} resizable={true} field="CompanyName"></IgrColumn>
        <IgrColumnGroup movable={true} header="Person Details">
            <IgrColumn movable={true} pinned={false} sortable={true} resizable={true} field="ContactName"></IgrColumn>
            <IgrColumn movable={true} sortable={true} resizable={true} field="ContactTitle"></IgrColumn>
        </IgrColumnGroup>
    </IgrColumnGroup>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

Every [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> [!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

```tsx
<IgrGrid height="600px" allowFiltering={true}>
    <IgrColumnGroup movable={true} pinned={true} header="General Information">
        <IgrColumn movable={true} sortable={true} resizable={true} field="CompanyName"></IgrColumn>
    </IgrColumnGroup>
    <IgrColumn sortable={true} resizable={true} field="Phone"></IgrColumn>
    <IgrColumn sortable={true} resizable={true} field="Fax"></IgrColumn>
    <IgrColumn sortable={true} resizable={true} field="PostalCode"></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

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

> [!Note]
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

import { IgrGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebColumnGroupDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnGroupModule
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
                    data={this.customersData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="ID"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information"
                        headerTemplate={this.webGridColumnGroupHeaderTemplate}>
                        <IgrColumn
                            field="Company"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information"
                        headerTemplate={this.webGridColumnGroupHeaderTemplate}>
                        <IgrColumn
                            header="Location"
                            field="Address"
                            hidden={true}
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Phone"
                            hidden={true}
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Country"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Region"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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
            WebColumnGroupDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridColumnGroupHeaderTemplate = (e: { dataContext: IgrColumnTemplateContext }) => {
        const column = e.dataContext.column;
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span draggable="false" style={{ cursor: 'pointer' }} onClick={(e: any) => this.toggleColumnGroup(column)}>
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
            const col = columns[1] as IgrColumn;
            col.hidden = !col.hidden;
        } else if (columnGroup.header === 'Address Information') {
            for (const col of columns) {
                const c = col as IgrColumn;
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

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
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

import { IgrGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebColumnGroupDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnGroupModule
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
                    data={this.customersData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="ID"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
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
                                field="Country"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Region"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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
            WebColumnGroupDescriptionModule.register(context);
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
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Grid Overview](../data-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Group by](groupby.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
