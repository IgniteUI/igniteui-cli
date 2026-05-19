---
title: React Tree Grid Component - Ignite UI for React by Infragistics
_description: The Ignite UI for React Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: React tree grid, igniteui for React, infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "TreeGrid", "Column"]
namespace: Infragistics.Controls
_tocName: Tree Grid
---

# React Tree Grid Overview and Configuration

The React Tree Grid is a UI component that combines the functionality of a data grid (table) with a tree view, allowing hierarchical data to be easily displayed in a tabular format. Unlike a regular grid, a tree grid enables rows to expand and collapse, revealing child rows nested under parent rows, making it useful for representing structured data such as file explorers, organizational charts, project tasks, or product categories.

Ignite UI for React Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. Displaying of tabular data has never been easier and beautiful thanks to the Material Table-based UI Tree Grid.

## React Tree Grid Example

In this example, you can see how users can manipulate hierarchical or flat data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel and csv.

### Example

```typescript
export class EmployeesNestedDataItem {
    public constructor(init: Partial<EmployeesNestedDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public Name: string;
    public Title: string;
    public Employees: EmployeesNestedDataItem_EmployeesItem[];

}
export class EmployeesNestedDataItem_EmployeesItem {
    public constructor(init: Partial<EmployeesNestedDataItem_EmployeesItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Title: string;

}
export class EmployeesNestedData extends Array<EmployeesNestedDataItem> {
    public constructor(items: Array<EmployeesNestedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedDataItem({ ID: 1, Age: 55, Salary: 80000, Productivity: 90, City: `Berlin`, Country: `Germany`, Phone: `609-202-505`, HireDate: `2008-03-20`, Name: `John Winchester`, Title: `Development Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 43, Salary: 70000, Productivity: 80, City: `Hamburg`, Country: `Germany`, Phone: `609-444-555`, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 60000, Productivity: 80, City: `Munich`, Country: `Germany`, Phone: `609-333-444`, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, Title: `Senior Software Developer` }),
                // ... 20 more items
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
import { IgrTreeGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrPaginator, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebTreeGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedDataItem, EmployeesNestedDataItem_EmployeesItem, EmployeesNestedData } from './EmployeesNestedData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreeGridModule,
    IgrPaginatorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }
    private employees: IgrGridToolbarTitle

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
                    data={this.employeesNestedData}
                    childDataKey="Employees"
                    rowSelection="multiple"
                    moving={true}
                    allowFiltering={true}
                    filterMode="excelStyleFilter">
                    <IgrPaginator
                    >
                    </IgrPaginator>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarExporter
                                exportCSV={true}
                                exportExcel={true}>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        header="Name"
                        dataType="string"
                        sortable={true}
                        editable={true}
                        resizable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        dataType="number"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedData: EmployeesNestedData = null;
    public get employeesNestedData(): EmployeesNestedData {
        if (this._employeesNestedData == null)
        {
            this._employeesNestedData = new EmployeesNestedData();
        }
        return this._employeesNestedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebTreeGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Getting Started with Ignite UI for React Tree Grid

### Dependencies

Getting started with our React Grid library and the React Tree Grid in particular is the first step to building powerful, data-rich applications that display hierarchical information in a clear and interactive way. The React Tree Grid allows you to present parent-child data structures in a familiar tabular format, complete with features like row expansion, sorting, filtering, editing, and virtualization for high performance with large datasets.

To get started with the React tree grid, first you need to install the `igniteui-react` and `igniteui-react-grids` packages.

```cmd
npm install --save igniteui-react
npm install --save igniteui-react-grids
```

## Usage

The tree grid shares a lot of features with the grid, but it also adds the ability to display its data hierarchically.
In order to achieve this, the tree grid provides us with a couple of ways to define the relations among our data objects - by using a [child collection](overview.md#child-collection) for every data object or by using [primary and foreign keys](overview.md#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- `GridCell` - Ordinary cell that contains a value.
- `TreeGridCell` - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the `level` property of its inner `treeRow`.

> [!Note]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`expansionDepth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#expansionDepth) property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection

When we are using the child collection option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in the  tree grid will have a direct reference to any of its children. In this case the data property of our tree grid that contains the original data source will be a hierarchically defined collection.

For this sample, let's use the following collection structure:

```typescript
const EMPLOYEE_DATA = [
    {
        Name: "Johnathan Winchester",
        ID: 1,
        HireDate: new Date(2008, 3, 20),
        Age: 55,
        Employees: [
            {
                Name: "Michael Burke",
                ID: 3,
                HireDate: new Date(2011, 6, 3),
                Age: 43,
                Employees: []
            },
            {
                Name: "Thomas Anderson"
                ID: 2,
                HireDate: new Date(2009, 6, 19),
                Age: 29,
                Employees: []
            },
            // ...
        ]
    },
    // ...
]
```

Now let's start by importing our [`data`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#data) collection and binding it to our tree grid.

In order for the tree grid to build the hierarchy, we will have to set its [`childDataKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#childDataKey) property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we can disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

We can now enable the row selection and paging features of the tree grid by using the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) and add the [`IgrPaginator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpaginator.html) element.
We can also enable the summaries, the filtering, sorting, editing, moving and resizing features for each of our columns.

Finally, we can enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the [`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html), [`IgrGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarhiding.html), [`IgrGridToolbarPinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarpinning.html) and [`IgrGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarexporter.html) respectively.

You can see the result of the code from above at the beginning of this article in the [Tree Grid Example](./overview.md#example) section.

### Primary and Foreign keys

When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the `data` property of our tree grid that contains the original data source will be a flat collection.

```typescript
const data = [
    { ID: 1, ParentID: -1, Name: "Casey Houston", JobTitle: "Vice President", Age: 32 },
    { ID: 2, ParentID: 1, Name: "Gilberto Todd", JobTitle: "Director", Age: 41 },
    { ID: 3, ParentID: 2, Name: "Tanya Bennett", JobTitle: "Director", Age: 29 },
    { ID: 4, ParentID: 2, Name: "Jack Simon", JobTitle: "Software Developer", Age: 33 },
    { ID: 5, ParentID: 8, Name: "Celia Martinez", JobTitle: "Senior Software Developer", Age: 44 },
    { ID: 6, ParentID: -1, Name: "Erma Walsh", JobTitle: "CEO", Age: 52 },
    { ID: 7, ParentID: 2, Name: "Debra Morton", JobTitle: "Associate Software Developer", Age: 35 },
    { ID: 8, ParentID: 10, Name: "Erika Wells", JobTitle: "Software Development Team Lead", Age: 50 },
    { ID: 9, ParentID: 8, Name: "Leslie Hansen", JobTitle: "Associate Software Developer", Age: 28 },
    { ID: 10, ParentID: -1, Name: "Eduardo Ramirez", JobTitle: "Development Manager", Age: 53 }
];
```

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique as it will be our [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey). The ParentID contains the ID of the parent node and could be set as a [`foreignKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#foreignKey). If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

The parent-child relation is configured using the tree grid's [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) and [`foreignKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#foreignKey) properties.

Here is the template of the component which demonstrates how to configure the tree grid to display the data defined in the above flat collection:

In addition we will enable the row selection feature of the tree grid by using the rowSelection property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

And here is the final result:

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
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatDataItem, EmployeesFlatData } from './EmployeesFlatData';

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
                    data={this.employeesFlatData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    allowFiltering={true}
                    moving={true}
                    rowSelection="multiple">
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Job Title"
                        dataType="string"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        sortable={true}
                        editable={true}
                        resizable={true}>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Persistence and Integration

The indentation of the tree grid cell persists across other tree grid features like filtering, sorting and paging.

- When `Sorting` is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a [`visibleIndex`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#visibleIndex) of 0) is always the tree column.
- The column that ends up with a [`visibleIndex`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#visibleIndex) of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

## API References

- [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html)
- [`IgrTreeGridRecord`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegridrecord.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
