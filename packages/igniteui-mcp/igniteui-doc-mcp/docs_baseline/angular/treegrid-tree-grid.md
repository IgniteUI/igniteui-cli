---
title: Angular Tree Grid | Fastest Angular Tree Table | Infragistics
description: The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
keywords: angular tree grid, angular tree table, angular tree grid component, angular tree table component, angular ui components, igniteui for angular, infragistics
license: commercial
llms:
  description: "The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat self-referencing data."
_tocName: Tree Grid
_premium: true
---
# Angular Tree Grid Component Overview

The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat self-referencing data. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, grouping, templating, column moving, column pinning, export to Excel, CSV and PDF, and more.

## Angular Tree Grid Example

In this example, you can see how users can display hierarchical data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel, csv and pdf, and cell templating that uses our [Sparkline](/charts/types/sparkline-chart) component. In addition, you can see an example of custom pagination with [Angular Pagination](/treegrid/paging).

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { GridSelectionMode, IgxCSVTextDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxExcelTextDirective, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent, IColumnExportingEventArgs, IgxCsvExporterService, IgxExcelExporterService } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { EMPLOYEE_DATA } from './data';
import { IgxPreventDocumentScrollDirective } from '../../../../../../src/app/directives/prevent-scroll.directive';
import { IgxSparklineCoreModule } from 'igniteui-angular-charts';

@Component({
    selector: 'app-tree-grid-childdatakey-sample',
    styleUrls: ['./tree-grid-childdatakey-sample.component.scss'],
    templateUrl: './tree-grid-childdatakey-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxCSVTextDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSparklineCoreModule]
})
export class TreeGridChilddatakeySampleComponent implements OnInit {
    private excelExporter = inject(IgxExcelExporterService);
    private csvExporter = inject(IgxCsvExporterService);

    public localData: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() {
        const skipColumnExport = (eventArgs: IColumnExportingEventArgs) => {
            eventArgs.cancel = eventArgs.header === 'Performance';
        };

        this.excelExporter.columnExporting.subscribe(skipColumnExport);
        this.csvExporter.columnExporting.subscribe(skipColumnExport);
    }

    public ngOnInit() {
        const employees = EMPLOYEE_DATA;
        for (const employee of employees) {
            this.getPerformance(employee);
        }
        this.localData = employees;
    }

    public getPerformance(employee: any): any {
        employee['Performance'] = this.getPerformanceData(12);
        const hasEmployees = employee.Employees === undefined;
        if (hasEmployees) {
            return employee;
        } else {
            for (const employer of employee.Employees) {
                this.getPerformance(employer);
            }
        }
    }

    public getPerformanceData(weeks?: number): any[] {
        if (weeks === undefined) {
            weeks = 20;
        }
        const performance: any[] = [];
        for (let w = 0; w < weeks; w++) {
            const value = this.getRandomNumber(0, 100);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            performance.push({Points: value, Week: w});
        }
        return performance;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="localData" childDataKey="Employees" width="100%" height="800px"
                   [autoGenerate]="false" [rowSelection]="selectionMode" [moving]="true" [allowFiltering]="true">
        <igx-paginator></igx-paginator>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter>
                    <span excelText>Export to Excel</span>
                    <span csvText>Export to CSV</span>
                </igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true"  [resizable]="true" [hasSummary]="true"></igx-column>
        <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true"  [resizable]="true"></igx-column>
        <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true"  [resizable]="true"></igx-column>
        <igx-column field="Performance" header="Performance" [width]="'260px'" [filterable]="false" >
            <ng-template igxCell let-val>
                <igx-sparkline height="40px" width="250px"
                    [dataSource]="val"
                    valueMemberPath="Points"
                    displayType="Line"
                    lineThickness="2"
                    brush="rgb(21, 190, 6)">
                </igx-sparkline>
            </ng-template>
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}
```

## Getting Started with Ignite UI for Angular Tree Grid

To get started with the Ignite UI for Angular Tree Grid component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](/general/getting-started) topic.

The next step is to import the `IgxTreeGridModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular/grids/tree-grid';
// import { IgxTreeGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTreeGridComponent` as a standalone dependency, or use the [`IGX_TREE_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/grids/tree-grid/src/tree-grid.module.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_TREE_GRID_DIRECTIVES } from 'igniteui-angular/grids/tree-grid';
// import { IGX_TREE_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-tree-grid [data]="data"></igx-tree-grid>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TREE_GRID_DIRECTIVES]
    /* or imports: [IgxTreeGridComponent] */
})
export class HomeComponent {
    public data: Employee [];
}
```

Now that you have the Ignite UI for Angular Tree Grid module or directives imported, you can start using the `igx-tree-grid` component.

## Using the Angular Tree Grid

The [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) shares a lot of features with the [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent), but it also adds the ability to display its data hierarchically.
In order to achieve this, the [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) provides us with a couple of ways to define the relations among our data objects - by using a [child collection](#child-collection) for every data object or by using [primary and foreign keys](#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- [`IgxGridCell`](mcp:get_api_reference?platform=angular&component=IgxGridCell) - Ordinary cell that contains a value.
- [`IgxGridCell`](mcp:get_api_reference?platform=angular&component=IgxGridCell) - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the [`IgxITreeGridRecord.level`](mcp:get_api_reference?platform=angular&component=ITreeGridRecord&member=level) property of its inner [`IgxTreeGridRow.treeRow`](mcp:get_api_reference?platform=angular&component=IgxTreeGridRow&member=treeRow).

**Note:** 
Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`IgxTreeGrid.expansionDepth`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=expansionDepth) property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection

When we are using the **child collection** option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in our tree grid will have a direct reference to any of its children. In this case the [`IgxTreeGrid.data`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=data) property of our tree grid that contains the original data source will be a hierarchically defined collection.

For this sample, let's use the following collection structure:

```typescript
// Sample Employee Data

export const EMPLOYEE_DATA = [
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
            ...
        ]
    },
    ...
]
```

Now let's start by importing our data collection and binding it to the [`IgxTreeGrid.data`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=data) input of our tree grid.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData">
</igx-tree-grid>
```

In order for the IgxTreeGridComponent to build the hierarchy, we will have to set its [`IgxTreeGrid.childdatakey`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=childdatakey) property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we will disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="HireDate" dataType="date"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

We will now enable the row selection and paging features of the tree grid by using the [`IgxGrid.rowSelection`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=rowSelection) and the [`IgxTreeGrid.paging`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=paging) properties.
We will also enable the summaries feature on the first column and the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"
                [hasSummary]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-paginator>
    </igx-paginator>
</igx-tree-grid>
```

Finally, we will enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the [`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent), [`IgxGridToolbarHiding`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent), [`IgxGridToolbarPinning`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarPinningComponent) and [`IgxGridToolbarExporter`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarExporterComponent) respectively.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-paginator [perPage]="6">
    </igx-paginator>
</igx-tree-grid>
```

You can see the result of the code from above at the beginning of this article in the [Angular Tree Grid Example](#angular-tree-grid-example) section.

### Primary and Foreign keys

When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the [`IgxTreeGrid.data`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=data) property of our tree grid that contains the original data source will be a flat collection.

The following is an example of a component which contains a flat collection defined with primary and foreign keys relation:

```typescript
// treeGridSample.component.ts

@Component({...})
export class MyComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        // Primary and Foreign keys sample data
        this.data = [
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
    }
}
```

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique. The ParentID contains the ID of the parent node. If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

The parent-child relation is configured using the tree grid's [`IgxTreeGrid.primaryKey`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=primaryKey) and [`IgxTreeGrid.foreignKey`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=foreignKey) properties.

Here is the template of the component which demonstrates how to configure the tree grid to display the data defined in the above flat collection:

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="JobTitle" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

In addition we will enable the row selection feature of the tree grid by using the [`IgxGrid.rowSelection`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=rowSelection) property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

And here is the final result:

```typescript
import { Component, OnInit } from '@angular/core';
import { GridSelectionMode, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { Data } from './data';
import { IgxPreventDocumentScrollDirective } from '../../../../../../src/app/directives/prevent-scroll.directive';
import { IgxSparklineCoreModule } from 'igniteui-angular-charts';

@Component({
    selector: 'app-tree-grid-primaryforeignkey-sample',
    styleUrls: ['./tree-grid-primaryforeignkey-sample.component.scss'],
    templateUrl: './tree-grid-primaryforeignkey-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSparklineCoreModule]
})
export class TreeGridPrimaryforeignkeySampleComponent implements OnInit {
    public data: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() { }

    public ngOnInit() {
        const employees = Data.employeePrimaryForeignKeyTreeData();
        for (const employee of employees) {
            this.getPerformance(employee);
        }
        this.data = employees;
    }

    public getPerformance(employee: any): any {
        employee['Performance'] = this.getPerformanceData(12);
        const hasEmployees = employee.Employees === undefined;
        if (hasEmployees) {
            return employee;
        } else {
            for (const employer of employee.Employees) {
                this.getPerformance(employer);
            }
        }
    }

    public getPerformanceData(weeks?: number): any[] {
        if (weeks === undefined) {
            weeks = 20;
        }
        const performance: any[] = [];
        for (let w = 0; w < weeks; w++) {
            const value = this.getRandomNumber(0, 100);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            performance.push({Points: value, Week: w});
        }
        return performance;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="data" [allowFiltering]="true" [moving]="true"
        primaryKey="ID" foreignKey="ParentID" width="100%" height="400px"
        [rowSelection]="selectionMode">
        <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true" ></igx-column>
        <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [resizable]="true" ></igx-column>
        <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true" ></igx-column>
        <igx-column field="Performance" header="Performance" [width]="'260px'" [filterable]="false" >
            <ng-template igxCell let-val>
                <igx-sparkline height="40px" width="250px"
                    [dataSource]="val"
                    valueMemberPath="Points"
                    displayType="Line"
                    lineThickness="2"
                    brush="rgb(21, 190, 6)" >
                </igx-sparkline>
            </ng-template>
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}
```

## Persistence and Integration

The indentation of the **tree cells** persists across other tree grid features like filtering, sorting and paging.

- When **sorting** is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a [`IgxColumn.visibleIndex`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=visibleIndex) of 0) is always the tree column.
- The column that ends up with a [`IgxColumn.visibleIndex`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=visibleIndex) of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

## Angular Tree Grid Sizing

See the [Grid Sizing](/treegrid/sizing) topic.

## Styling

The Tree Grid allows styling through the [`Ignite UI for Angular Theme Library`](/themes/sass/component-themes). The tree grid's `grid-theme` exposes a wide variety of properties, which allows the customization of all the tree grid's features.

To get started with styling the Tree Grid, we need to import the `index` file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Next we need to create a custom theme, the easiest and recommended way to style the `igx-tree-grid` is to use the `grid-theme` and provide just the three main colors: `background`, `foreground`, and `accent-color`.

**Note:** 
There is no specific `sass` tree grid function.

These are the core theme properties. When you set them, all grid parts and internal components derive their colors from those values, resulting in a consistent appearance throughout the entire grid. Nested components such as buttons, icons, inputs, dropdowns, checkboxes, scrollbars, chips, and other helper components also derive their styling tokens from the main `grid-theme` for a unified look.

```scss
$background: #292826;
$foreground: #eeece1;
$accent: #ffcd0f;

$custom-grid: grid-theme(
  $background: $background,
  $foreground: $foreground,
  $accent-color: $accent,
);
```

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes) topic for detailed guidance on how to use them.

The last step is to **include** the component theme in our application.

```scss
:host {
  @include tokens($custom-grid);
}
```

### Angular Tree Grid Styling Demo

```typescript
import { Component, OnInit, signal } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-style',
    styleUrls: ['./tree-grid-style.component.scss'],
    templateUrl: './tree-grid-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxButtonGroupComponent, IgxButtonDirective]
})
export class TreeGridStyleComponent implements OnInit {

    public data: any[];
    public themes = [
        { label: 'Studio', class: 'theme-studio', swatch: 'theme-swatch--studio' },
        { label: 'Ledger', class: 'theme-ledger', swatch: 'theme-swatch--ledger' },
        { label: 'Editorial', class: 'theme-editorial', swatch: 'theme-swatch--editorial' },
        { label: 'Midnight', class: 'theme-midnight', swatch: 'theme-swatch--midnight' }
    ];

    public activeTheme = signal(this.themes[0].class);

    public ngOnInit() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }

    public selectTheme(args: { index: number }) {
        this.activeTheme.set(this.themes[args.index].class);
    }
}
```
```html
<div class="grid__wrapper">
    <div class="theme-picker">
        <span class="theme-picker__label">Pick a theme</span>

        <igx-buttongroup
            class="theme-switcher"
            selectionMode="singleRequired"
            (selected)="selectTheme($event)">
            @for (theme of themes; track theme.class) {
                <button igxButton [selected]="activeTheme() === theme.class">
                    <span class="theme-swatch" [class]="theme.swatch"></span>
                    {{ theme.label }}
                </button>
            }
        </igx-buttongroup>

        <p class="theme-picker__hint">
            Custom themes, not built-in: each is a <code>grid-theme()</code> with its
            own background and accent.
        </p>
    </div>

    <igx-tree-grid
        [igxPreventDocumentScroll]="true"
        #treeGrid
        [class]="activeTheme()"
        [data]="data"
        primaryKey="ID"
        foreignKey="ParentID"
        [autoGenerate]="false"
        [allowFiltering]="true"
        [filterMode]="'excelStyleFilter'"
        [rowSelection]="'multiple'"
        height="560px">
        <igx-column field="Name" width="300px" [sortable]="true" [filterable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true" [filterable]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [sortable]="true" [filterable]="true"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" [sortable]="true" [filterable]="true"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$studio-bg: #faf4ed;
$studio-accent: #907aa9;
$ledger-bg: #eceff4;
$ledger-accent: #5e81ac;
$editorial-bg: #333c43;
$editorial-accent: #a7c080;
$midnight-bg: #282a36;
$midnight-accent: #bd93f9;

.theme-studio {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0.6;

    @include tokens(grid-theme(
        $background: $studio-bg,
        $foreground: #575279,
        $accent-color: $studio-accent,
        $header-background: #fffaf3,
        $header-border-color: #dfdad9,
        $row-border-color: #f2e9e1,
        $grid-border-color: #dfdad9,
        $grid-shadow: (0 1px 3px rgba(87, 82, 121, 0.10), 0 1px 2px rgba(87, 82, 121, 0.06))
    ));
}

.theme-ledger {
    --ig-size: var(--ig-size-small);
    --ig-radius-factor: 0;

    @include tokens(grid-theme(
        $background: $ledger-bg,
        $foreground: #2e3440,
        $accent-color: $ledger-accent,
        $header-background: #d8dee9,
        $row-odd-background: #eceff4,
        $row-even-background: #e5e9f0,
        $body-column-border-color-odd: #d8dee9,
        $body-column-border-color-even: #d8dee9,
        $row-border-color: #d8dee9,
        $grid-border-color: #c8d0dc
    ));
}

.theme-editorial {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0;

    @include tokens(grid-theme(
        $schema: $dark-material-schema,
        $background: $editorial-bg,
        $foreground: #d3c6aa,
        $accent-color: $editorial-accent,
        $header-background: #3a464c,
        $row-border-color: #333c43,
        $grid-border-color: #333c43
    ));
}

.theme-midnight {
    --ig-size: var(--ig-size-medium);
    --ig-radius-factor: 0.25;

    @include tokens(grid-theme(
        $schema: $dark-material-schema,
        $background: $midnight-bg,
        $foreground: #f8f8f2,
        $accent-color: $midnight-accent,
        $header-background: #21222c,
        $body-column-border-color-odd: #44475a,
        $body-column-border-color-even: #44475a,
        $row-border-color: #44475a,
        $grid-border-color: #44475a
    ));
}

.grid__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.theme-picker {
    --ig-button-group-elevation: 0;

    display: flex;
    flex-direction: column;
    gap: 6px;
    align-self: flex-start;
}

.theme-picker__label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--ig-gray-700);
}

.theme-picker__hint {
    margin: 0;
    font-size: 12px;
    line-height: 1.45;
    color: var(--ig-gray-600);

    code {
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 11px;
    }
}

.theme-swatch {
    display: inline-block;
    min-width: 14px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid var(--ig-gray-300);
    vertical-align: -2px;
    background: linear-gradient(135deg, var(--swatch-bg) 0 50%, var(--swatch-accent) 50% 100%);
}

.theme-swatch--studio {
    --swatch-bg: #{$studio-bg};
    --swatch-accent: #{$studio-accent};
}

.theme-swatch--ledger {
    --swatch-bg: #{$ledger-bg};
    --swatch-accent: #{$ledger-accent};
}

.theme-swatch--editorial {
    --swatch-bg: #{$editorial-bg};
    --swatch-accent: #{$editorial-accent};
}

.theme-swatch--midnight {
    --swatch-bg: #{$midnight-bg};
    --swatch-accent: #{$midnight-accent};
}
```

There are also additional parameters in the `grid-theme` that you can use if you want more specific customizations.

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## Performance (Experimental)

The `igxTreeGrid`'s design allows it to take advantage of the Event Coalescing feature that has Angular introduced. This feature allows for improved performance with roughly around **`20%`** in terms of interactions and responsiveness. This feature can be enabled on application level by simply setting the `ngZoneEventCoalescing` and `ngZoneRunCoalescing` properties to `true` in the `bootstrapModule` method:

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

**Note:** 
This is still in experimental feature for the `igxTreeGrid`. This means that there might be some unexpected behaviors in the Tree Grid. In case of encountering any such behavior, please contact us on our [Github](https://github.com/IgniteUI/igniteui-angular/discussions) page.

**Note:** 
Enabling it can affects other parts of an Angular application that the `igxTreeGrid` is not related to.

## Known Limitations

| Limitation            | Description                                                                                                                           |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Templating Tree Cells | When templating a tree cell, content that spans outside the boundaries of the cell will not be shown unless positioned in an overlay. |
| Group By              | Group By feature is not supported, because it is inherent to the tree grid.                                                           |

**Note:** 
The tree grid has a depth limit of 25 levels. Supporting more levels requires adding custom CSS classes in the application. You may see an example of such CSS class below:


```scss
.igx-grid__tree-cell--padding-level-26 {
    padding-left: 39rem;
}
```

**Note:** 
`igxTreeGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxTreeGrid`. For more details see [igxForOf Known Issues](/for-of#known-limitations) section.

## API References
- [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent)
- [`IgxGridCell`](mcp:get_api_reference?platform=angular&component=IgxGridCell)
- [`IgxTreeGridRow`](mcp:get_api_reference?platform=angular&component=IgxTreeGridRow)
- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- `IgxGridComponent Styles`
- [`IgxBaseTransactionService`](mcp:get_api_reference?platform=angular&component=IgxBaseTransactionService)
## Theming Dependencies

- `IgxIcon Theme`
- `IgxInputGroup Theme`
- `IgxChip Theme`
- `IgxRipple Theme`
- `IgxButton Theme`
- `IgxOverlay Theme`
- `IgxDropDown Theme`
- `IgxCalendar Theme`
- `IgxSnackBar Theme`
- `IgxBadge Theme`

## Additional Resources

- [Grid Sizing](/treegrid/sizing)
- [Data Grid](/grid/grid)
- [Row Editing](/treegrid/row-editing)
- [Ignite UI for Angular Skills](/ai/skills) — Agent Skills for grids, data operations, and theming

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
