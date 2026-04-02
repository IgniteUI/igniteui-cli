---
title: Web Components Tree Grid Component - Ignite UI for Web Components by Infragistics
_description: The Ignite UI for Web Components Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: Web Components tree grid, igniteui for Web Components, infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "TreeGrid", "Column"]
namespace: Infragistics.Controls
_tocName: Tree Grid
---

# Web Components Tree Grid Overview and Configuration

The Web Components Tree Grid is a UI component that combines the functionality of a data grid (table) with a tree view, allowing hierarchical data to be easily displayed in a tabular format. Unlike a regular grid, a tree grid enables rows to expand and collapse, revealing child rows nested under parent rows, making it useful for representing structured data such as file explorers, organizational charts, project tasks, or product categories.

Ignite UI for Web Components Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. Displaying of tabular data has never been easier and beautiful thanks to the Material Table-based UI Tree Grid.

## Web Components Tree Grid Example

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


## Getting Started with Ignite UI for Web Components Tree Grid

### Dependencies

Getting started with our Web Components Grid library and the Web Components Tree Grid in particular is the first step to building powerful, data-rich applications that display hierarchical information in a clear and interactive way. The Web Components Tree Grid allows you to present parent-child data structures in a familiar tabular format, complete with features like row expansion, sorting, filtering, editing, and virtualization for high performance with large datasets.

To get started with the Web Components tree grid, first you need to install the `igniteui-webcomponents-grids` package.

```cmd
npm install --save igniteui-webcomponents-grids
```

You also need to include the following import to use the tree grid:

```typescript
import 'igniteui-webcomponents-grids/grids/combined';
```

The corresponding styles should also be referenced. You can choose light or dark option for one of the [themes](../../themes/overview.md) and based on your project configuration to import it:

```typescript
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
```

Or to link it:

```typescript
<link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css'>
```

For more details on how to customize the appearance of the tree grid, you may have a look at the [styling](overview.md#web-components-tree-grid-styling-configuration) section.

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

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`expansionDepth`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#expansionDepth) property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

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

Now let's start by importing our [`data`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#data) collection and binding it to our tree grid.

```html
<igc-tree-grid auto-generate="false" id="treeGrid" name="treeGrid">
    <igc-column field="name" header="Name" data-type="string"></igc-column>
    <igc-column field="hireDate" header="Hire Date" data-type="date"></igc-column>
    <igc-column field="age" header="Age" data-type="number"></igc-column>
</igc-tree-grid>
```

```ts
    constructor() {
        var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
        treeGrid.childDataKey = "Employees";
        treeGrid.data = this.employeesNestedData;
    }
```

In order for the tree grid to build the hierarchy, we will have to set its [`childDataKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#childDataKey) property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we can disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

We can now enable the row selection and paging features of the tree grid by using the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) and add the [`IgcPaginatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginatorcomponent.html) element.
We can also enable the summaries, the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<igc-tree-grid auto-generate="false" id="treeGrid" child-data-key="Employees" row-selection="multiple" allow-filtering="true" moving="true">
    <igc-column field="name" header="Name" data-type="string" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-column field="hireDate" header="Hire Date" data-type="date" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-column field="age" header="Age" data-type="number" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-paginator></igc-paginator>
</igc-tree-grid>
```

Finally, we can enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the [`IgcGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html), [`IgcGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarhidingcomponent.html), [`IgcGridToolbarPinningComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarpinningcomponent.html) and [`IgcGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexportercomponent.html) respectively.

```html
<igc-tree-grid auto-generate="false" id="treeGrid" name="treeGrid" child-data-key="Employees" row-selection="multiple" allow-filtering="true" moving="true">
    <igc-column field="name" header="Name" data-type="string" sortable="true" resizable="true" has-summary="true" editable="true"></igc-column>
    <igc-column field="hireDate" header="Hire Date" data-type="date" sortable="true" resizable="true" editable="true"></igc-column>
    <igc-column field="age" header="Age" data-type="number" sortable="true" resizable="true" editable="true"></igc-column>
    <igc-paginator></igc-paginator>
    <igc-grid-toolbar>
        <igc-grid-toolbar-title> Employees </igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding> </igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning> </igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter export-csv="true" export-excel="true"> </igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```

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

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique as it will be our [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey). The ParentID contains the ID of the parent node and could be set as a [`foreignKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#foreignKey). If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

The parent-child relation is configured using the tree grid's [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) and [`foreignKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#foreignKey) properties.

Here is the template of the component which demonstrates how to configure the tree grid to display the data defined in the above flat collection:

```html
 <igc-tree-grid auto-generate="false" name="treeGrid" id="treeGrid" primary-key="ID" foreign-key="ParentID" allow-filtering="true" moving="true" row-selection="multiple">
    <igc-column field="Name" data-type="string"></igc-column>
    <igc-column field="JobTitle" header="Job Title"></igc-column>
    <igc-column field="Age" data-type="number"></igc-column>
</igc-tree-grid>
```

In addition we will enable the row selection feature of the tree grid by using the rowSelection property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
 <igc-tree-grid auto-generate="false" name="treeGrid" id="treeGrid" primary-key="ID" foreign-key="ParentID" allow-filtering="true" moving="true" row-selection="multiple">
    <igc-column field="Name" data-type="string" sortable="true" editable="true" resizable="true"> </igc-column>
    <igc-column field="JobTitle" header="Job Title" data-type="string" sortable="true" editable="true" resizable="true"> </igc-column>
    <igc-column field="Age" data-type="number" sortable="true" editable="true" resizable="true"> </igc-column>
</igc-tree-grid>
```

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


## Persistence and Integration

The indentation of the tree grid cell persists across other tree grid features like filtering, sorting and paging.

- When `Sorting` is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a [`visibleIndex`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#visibleIndex) of 0) is always the tree column.
- The column that ends up with a [`visibleIndex`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#visibleIndex) of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

## Web Components Tree Grid Styling Configuration

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```ts
<igc-tree-grid class="tree-grid">
```

Then set the related CSS properties for that class:

```css
.tree-grid {
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #FFF;
    --ig-grid-expand-icon-color: #FFCD0F;
    --ig-grid-expand-icon-hover-color: #E0B710;
    --ig-grid-row-hover-background: #F8E495;
}
```

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

#treeGrid {
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #FFF;
    --ig-grid-expand-icon-color: #FFCD0F;
    --ig-grid-expand-icon-hover-color: #E0B710;
    --ig-grid-row-hover-background: #F8E495;
}
```


## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- [`IgcGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html)
- [`IgcTreeGridRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridrecord.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
