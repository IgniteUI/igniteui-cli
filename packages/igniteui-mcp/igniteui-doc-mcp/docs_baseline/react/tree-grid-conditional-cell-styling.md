---
title: React Tree Grid Conditional Cell Styling - Ignite UI for React
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in React Tree Grid to make cells stand out.
_keywords: conditional styling, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/conditional-cell-styling
_tocName: Conditional Styling
_premium: true
---

# React Tree Grid Conditional Styling

The Ignite UI for React Conditional Styling feature in React Tree Grid allows custom styling on a row or cell level. The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) Conditional Styling functionality is used to visually emphasize or highlight data that meets certain criteria, making it easier for users to identify important information or trends within the grid.

## Tree Grid Conditional Row Styling

The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) component in Ignite UI for React provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) input on the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) component;
- By setting [`rowStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowStyles) input on the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) rows by setting the [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) input and define custom rules.

```tsx
<IgrTreeGrid id="grid" height="600px" width="100%" rowClasses={rowClasses}>
</IgrTreeGrid>
```

The [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```tsx
const rowClasses = {
    activeRow: (row: IgrRowType) => row.index % 2 === 0
}
```

```css
.activeRow {
    border-top: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
}
```

### Demo

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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

    .activeRow {
        border-top: 2px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatDataItem, EmployeesFlatData } from './EmployeesFlatData';
import { IgrRowType } from 'igniteui-react-grids';

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
    private column: IgrColumn

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
                    data={this.employeesFlatData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    moving={true}
                    rowEditable={true}
                    rowClasses={this.webGridRowClassesHandler}>
                    <IgrColumn
                        field="Name"
                        header="Full Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Title"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatData: EmployeesFlatData = null;
    public get employeesFlatData(): EmployeesFlatData {
        if (this._employeesFlatData == null)
        {
            this._employeesFlatData = new EmployeesFlatData();
        }
        return this._employeesFlatData;
    }


    public webGridRowClassesHandler = {
      activeRow: (row: IgrRowType) => row.index % 2 === 0
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Using Row Styles

The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) control exposes the [`rowStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowStyles) property which allows conditional styling of the data rows. Similar to [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both [`rowStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowStyles) and [`rowClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowClasses) is:

```tsx
(row: IgrRowType) => boolean
```

Let's define our styles:

```tsx
const rowStyles = {
    'background': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#6c757d' :
        row.data['Title'].includes('President') ?'#adb5bd' :
        row.data['Title'].includes('Director') ? '#ced4da' :
        row.data['Title'].includes('Manager') ? '#dee2e6' :
        row.data['Title'].includes('Lead') ? '#e9ecef' :
        row.data['Title'].includes('Senior') ? '#f8f9fa' : null,
    'border-left': (row: IgrRowType) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ? '2px solid' : null,
    'border-color': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#495057' : null,
    'color': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#fff' : null
};
```

```tsx
<IgrTreeGrid autoGenerate={true} primaryKey="ID" foreignKey="ParentID" data={data} rowStyles={rowStyles}>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

### Demo

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
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrRowType } from 'igniteui-react-grids';

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
                    rowStyles={this.webTreeGridRowStylesHandler}>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        resizable={false}
                        filterable={false}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        resizable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date"
                        resizable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
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

    public webTreeGridRowStylesHandler = {
        'background': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#6c757d' : row.data['Title'].includes('President') ? '#adb5bd' :
            row.data['Title'].includes('Director') ? '#ced4da' : row.data['Title'].includes('Manager') ? '#dee2e6' :
            row.data['Title'].includes('Lead') ? '#e9ecef' : row.data['Title'].includes('Senior') ? '#f8f9fa' : null,
        'border-left': (row: IgrRowType) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ? '2px solid' : null,
        'border-color': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#495057' : null,
        'color': (row: IgrRowType) => row.data['Title'] === 'CEO' ? '#fff' : null
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Tree Grid Conditional Cell Styling

## Overview

The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) component in Ignite UI for React provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) input [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes

You can conditionally style the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) cells by setting the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) input and define custom rules.

```tsx
<IgrColumn field="UnitPrice" header="Unit Price" dataType="currency" cellClasses={unitPriceCellClasses}>
</IgrColumn>
```

<!-- ComponentEnd: TreeGrid -->

The [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```tsx
const upPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 5;
}

const downPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 5;
}

const unitPriceCellClasses = {
    downPrice: downPriceCondition,
    upPrice: upPriceCondition
};
```

```css
.upPrice {
    color: red !important;
}

.downPrice {
    color: green !important;
}
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.allergensFont {
    color: royalblue !important;
}

.upPrice {
    color: red !important;
}

.downPrice {
    color: green !important;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';

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
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.ordersTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        dataType="string"
                        cellClasses={this.webTreeGridAllergensCellClassesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="currency"
                        cellClasses={this.webTreeGridUnitPriceCellClassesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date">
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        dataType="boolean">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }


    public allergenItems = ['Frozen Shrimps', 'Wild Salmon Fillets', 'Fresh Cheese', 'Skimmed Milk 1L', 'Butter'];

    public webTreeGridAllergensCellClassesHandler = {
        allergensFont: (rowData: any, columnKey: any): boolean => this.allergenItems.indexOf(rowData[columnKey]) >= 0,
    }

    public webTreeGridUnitPriceCellClassesHandler = {
        downPrice: (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 5,
        upPrice: (rowData: any, columnKey: any): boolean => rowData[columnKey] > 5,
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

- By using the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) input [`cellStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

### Using Cell Styles

Columns expose the [`cellStyles`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellStyles) property which allows conditional styling of the column cells. Similar to [`cellClasses`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#cellClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

Let's define our styles:

```tsx
const webTreeGridCellStyles = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "UnitPrice") {
            if (cellValue > 10) return "#dc3545";
            if (cellValue < 5) return "#28a745";
            if (cellValue >= 5 && cellValue <= 10) return "#17a2b8";
        }
    }
}
```

```tsx
<IgrColumn cellStyles={webTreeGridCellStyles}></IgrColumn>
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';

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
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.ordersTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        dataType="string"
                        cellStyles={this.webTreeGridCellStylesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        dataType="string"
                        cellStyles={this.webTreeGridCellStylesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="currency"
                        cellStyles={this.webTreeGridCellStylesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        cellStyles={this.webTreeGridCellStylesHandler}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }


    public webTreeGridCellStylesHandler = {
        background: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => {
            if (columnKey === "UnitPrice") {
                if (cellValue > 10) return "#dc3545";
                if (cellValue < 5) return "#28a745";
                if (cellValue >= 5 && cellValue <= 10) return "#17a2b8";
            }
            return undefined;
        }
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

<!--ComponentStart: Grid, HierarchicalGrid, TreeGrid-->

```tsx
const backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};

const editDone = (event: IgrGridEditEventArgs) => {
    backgroundClasses = {...backgroundClasses};
}

<IgrTreeGrid id="grid1" height="500px" width="100%" onCellEdit={editDone}>
  <IgrColumn id="Col1" field="Col1" dataType="number" cellClasses={backgroundClasses}></IgrColumn>
  <IgrColumn id="Col2" field="Col2" dataType="number" editable={true} cellClasses={backgroundClasses}></IgrColumn>
  <IgrColumn id="Col3" field="Col3" header="Col3" dataType="string" cellClasses={backgroundClasses}></IgrColumn>
</IgrTreeGrid>
```

<!--ComponentEnd: Grid, HierarchicalGrid, TreeGrid-->

## API References

- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
