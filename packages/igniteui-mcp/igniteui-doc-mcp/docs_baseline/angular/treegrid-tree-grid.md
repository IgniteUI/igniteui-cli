---
title: Angular Tree Grid | Fastest Angular Tree Table | Infragistics
_description: The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: angular tree grid, angular tree table, angular tree grid component, angular tree table component, angular ui components, igniteui for angular, infragistics
_license: commercial
_tocName: Tree Grid
---

# Angular Tree Grid Component Overview

The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat self-referencing data. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, grouping, templating, column moving, column pinning, export to Excel, CSV and PDF, and more.

## Angular Tree Grid Example

In this example, you can see how users can display hierarchical data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel, csv and pdf, and cell templating that uses our [Sparkline](../charts/types/sparkline-chart.md) component. In addition, you can see an example of custom pagination with [Angular Pagination](paging.md).

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

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tree Grid

To get started with the Ignite UI for Angular Tree Grid component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](../general/getting-started.md) topic.

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

>[!NOTE]
>**This component can utilize the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) **optionally**. It can be imported in the root module of the application in order for touch interactions to work as expected.**.

The [`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) shares a lot of features with the [`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html), but it also adds the ability to display its data hierarchically.
In order to achieve this, the [`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) provides us with a couple of ways to define the relations among our data objects - by using a [child collection](#child-collection) for every data object or by using [primary and foreign keys](#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html) - Ordinary cell that contains a value.
- [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html) - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the [`level`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/itreegridrecord.html#level) property of its inner [`treeRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html#treeRow).

> [!NOTE]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`expansionDepth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#expansionDepth) property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection

When we are using the **child collection** option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in our tree grid will have a direct reference to any of its children. In this case the [`data`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#data) property of our tree grid that contains the original data source will be a hierarchically defined collection.

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

Now let's start by importing our data collection and binding it to the [`data`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#data) input of our tree grid.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData">
</igx-tree-grid>
```

In order for the IgxTreeGridComponent to build the hierarchy, we will have to set its [`childDataKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#childdatakey) property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
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

We will now enable the row selection and paging features of the tree grid by using the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) and the [`paging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#paging) properties.
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

Finally, we will enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the [`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html), [`IgxGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html), [`IgxGridToolbarPinningComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarpinningcomponent.html) and [`IgxGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarexportercomponent.html) respectively.

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

When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the [`data`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#data) property of our tree grid that contains the original data source will be a flat collection.

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

The parent-child relation is configured using the tree grid's [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#primaryKey) and [`foreignKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#foreignKey) properties.

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

In addition we will enable the row selection feature of the tree grid by using the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

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

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

<div class="divider--half"></div>

## Performance (Experimental)

The `igxTreeGrid`'s design allows it to take advantage of the Event Coalescing feature that has Angular introduced. This feature allows for improved performance with roughly around **`20%`** in terms of interactions and responsiveness. This feature can be enabled on application level by simply setting the `ngZoneEventCoalescing` and `ngZoneRunCoalescing` properties to `true` in the `bootstrapModule` method:

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> This is still in experimental feature for the `igxTreeGrid`. This means that there might be some unexpected behaviors in the Tree Grid. In case of encountering any such behavior, please contact us on our [Github](https://github.com/IgniteUI/igniteui-angular/discussions) page.
>[!NOTE]
> Enabling it can affects other parts of an Angular application that the `igxTreeGrid` is not related to.

## Known Limitations

| Limitation            | Description                                                                                                                           |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Templating Tree Cells | When templating a tree cell, content that spans outside the boundaries of the cell will not be shown unless positioned in an overlay. |
| Group By              | Group By feature is not supported, because it is inherent to the tree grid.                                                           |

> [!NOTE]
> The tree grid has a depth limit of 25 levels. Supporting more levels requires adding custom CSS classes in the application. You may see an example of such CSS class below:

```scss
.igx-grid__tree-cell--padding-level-26 {
    padding-left: 39rem;
}
```

> [!NOTE]
> `igxTreeGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxTreeGrid`. For more details see [igxForOf Known Issues](../for-of.md#known-limitations) section.

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxTreeGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxBaseTransactionService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html)

## Theming Dependencies

- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxInputGroup Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme)
- [IgxChip Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme)
- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)
- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)
- [IgxCalendar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-calendar-theme)
- [IgxSnackBar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-snackbar-theme)
- [IgxBadge Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-badge-theme)


## Additional Resources

<div class="divider--half"></div>

- [Grid Sizing](sizing.md)
- [Data Grid](../grid/grid.md)
- [Row Editing](row-editing.md)
- [Ignite UI for Angular Skills](../ai/skills.md) — Agent Skills for grids, data operations, and theming

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
