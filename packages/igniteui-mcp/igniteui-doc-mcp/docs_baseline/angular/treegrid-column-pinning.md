---
title: Angular Tree Grid Column Pinning - Ignite UI for Angular
_description: Want to use the Pinning feature of the Ignite UI for Angular when you develop your next app? Easily lock column or change column order with rich API.
_keywords: lock column, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-pinning
_tocName: Column Pinning
_premium: true
---
# Angular Tree Grid Column Pinning
A column or multiple columns can be pinned to the left or right side of the Angular UI Grid. **Column Pinning** in Ignite UI for Angular allows the end users to lock column in a particular column order, this will allow them to see it while horizontally scrolling the Tree Grid. The Material UI Grid has a built-in column pinning UI, which can be used through the Tree Grid's toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning API.
## Angular Tree Grid Column Pinning  Example
```typescript
import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['tree-grid-toolbar-pinning.component.scss'],
    templateUrl: 'tree-grid-toolbar-pinning.component.html',
    imports: [NgClass, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})

export class TreeGridPinningToolbarSampleComponent implements OnInit {
    private activatedRoute = inject(ActivatedRoute);

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];
    public useDarkTheme: boolean = false;

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.useDarkTheme = params.dark === 'true';
        });
    }
}
```
```html
<div [ngClass]="{'grid__wrapper': true, 'dark-theme': useDarkTheme }">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="600px"
        width="100%">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column [field]="'Name'" dataType="string" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" width="300px" [pinned]='true'></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" width="100px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
:host ::ng-deep .title {
    width: 100%;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```
## Column Pinning API
Column pinning is controlled through the `pinned` input of the [`igx-column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html). Pinned columns are rendered on the left side of the Tree Grid by default and stay fixed through horizontal scrolling of the unpinned columns in the Tree Grid body.
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```
You may also use the Tree Grid's [`pinColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#unpinColumn) methods of the [`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) to pin or unpin columns by their field name:
```typescript
this.treeGrid.pinColumn('Title');
this.treeGrid.unpinColumn('Name');
```
Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.
A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the [`columnPin`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#columnPin) event and changing the [`insertAtIndex`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipincolumneventargs.html#insertAtIndex) property of the event arguments to the desired position index.
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (columnPin)="columnPinning($event)"></igx-tree-grid>
```
```typescript
public columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }
}
```
## Pinning Position
You can change the column pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.
```html
<igx-tree-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-tree-grid>
```
```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```
### Demo
```typescript
import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IPinningConfig, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-tree-grid-sample',
    styleUrls: ['tree-grid-right-pinning.component.scss'],
    templateUrl: 'tree-grid-right-pinning.component.html',
    imports: [IgxTreeGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})

export class TreeGridRightPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid1: IgxTreeGridComponent;
    @ViewChild('pinTemplate', { read: TemplateRef, static: true })
    public pinTemplate: TemplateRef<any>;

    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    private _columnsPinned = true;

    public ngOnInit(): void {
        this.data = generateEmployeeDetailedFlatData();
    }

    public toggleColumnPinning(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid #grid1 [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" [width]="'100%'"
        [height]="'480px'" [pinning]="pinningConfig" [autoGenerate]="false">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column [field]="'Name'" dataType="string" width="250px" [disablePinning]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" width="250px" [pinned]="true"></igx-column>
        <igx-column [field]="'ID'" dataType="number" width="100px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date"width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" width="200px" [disablePinning]="true"></igx-column>
        <igx-column [field]="'City'" dataType="string" width="200px" ></igx-column>
        <igx-column [field]="'Country'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

img.country-flag {
    width: 35px;
    height: 20px;
}
```
### Column Pinning on Both Sides
Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.
```typescript
import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IPinningConfig, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-tree-grid-sample',
    styleUrls: ['tree-grid-both-sides-pinning.component.scss'],
    templateUrl: 'tree-grid-both-sides-pinning.component.html',
    imports: [
        IgxTreeGridComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarActionsComponent,
        IgxColumnComponent,
        IgxButtonDirective
    ]
})
export class TreeGridBothSidesPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid1: IgxTreeGridComponent;
    @ViewChild('pinTemplate', { read: TemplateRef, static: true })
    public pinTemplate: TemplateRef<any>;

    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    public start = ColumnPinningPosition.Start;
    public end = ColumnPinningPosition.End;


    public ngOnInit(): void {
        this.data = generateEmployeeDetailedFlatData();
    }

    public pinLeft() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            if (col.pinned) {
                col.unpin();
            }
            col.pin(undefined, ColumnPinningPosition.Start);
        });
    }

    public pinRight() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            if (col.pinned) {
                col.unpin();
            }
            col.pin(undefined, ColumnPinningPosition.End);
        });
    }

    public unpinColumn() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.unpin();
        });
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid
    #grid1
    [data]="data"
    primaryKey="ID"
    foreignKey="ParentID"
    [autoGenerate]="false"
    [width]="'100%'"
    [height]="'480px'"
    columnSelection="multiple"
    [pinning]="pinningConfig"
    [moving]="true"
  >
    <igx-grid-toolbar>
      <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <button igxButton="contained" (click)="unpinColumn()"> Unpin Selected Columns </button>
                <button igxButton="contained" (click)="pinLeft()"> Pin Selected Left </button>
                <button igxButton="contained" (click)="pinRight()"> Pin Selected Right </button>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </igx-grid-toolbar>

    <igx-column [field]="'Name'" dataType="string" width="250px" [pinned]="true" [pinningPosition]="start"></igx-column>
    <igx-column [field]="'Title'" dataType="string" width="250px" [pinned]="true" [pinningPosition]="end"></igx-column>
    <igx-column [field]="'ID'" dataType="number" width="100px"></igx-column>
    <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" width="200px"></igx-column>
    <igx-column [field]="'Age'" dataType="number" width="200px"></igx-column>
    <igx-column [field]="'Address'" dataType="string" width="200px" [disablePinning]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" width="200px"></igx-column>
    <igx-column [field]="'Country'" dataType="string" width="200px"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" width="200px"></igx-column>
    <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" width="200px"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" width="200px"></igx-column>
  </igx-tree-grid>
</div>
```
```scss
.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

img.country-flag {
    width: 35px;
    height: 20px;
}
```
## Custom Column Pinning UI
You can define your custom UI and change the pin state of the columns via the related API.
Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.
This can be done by creating a header template for the column with a custom icon.
```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="620px"
        width="100%">
        <igx-column [field]="'Name'" dataType="string" [headerTemplate]="pinTemplate" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [headerTemplate]="pinTemplate" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```
On click of the custom icon the pin state of the related column can be changed using the column's API methods.
```typescript
public toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();
}
```
### Demo
```typescript
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { ColumnType } from 'igniteui-angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellHeaderTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { icons } from "../../services/svgIcons";
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

const FILTERING_ICONS_FONT_SET = "filtering-icons";
@Component({
    selector: 'app-tree-grid-column-pinning-sample',
    styleUrls: ['./tree-grid-column-pinning-sample.component.scss'],
    templateUrl: './tree-grid-column-pinning-sample.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnPinningSampleComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);
    private iconService = inject(IgxIconService);

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === "pin" || icon.name === "unpin");
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public toggleColumn(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
        this.cdr.detectChanges();
    }
}
```
```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span class="header-text">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned"
            family="filtering-icons" name="{{column.pinned ? 'unpin' : 'pin'}}" (click)="toggleColumn(column)">
        </igx-icon>
    </div>
</ng-template>
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="600px"
        width="100%">
        <igx-column [field]="'Name'" dataType="string" [headerTemplate]="pinTemplate" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [headerTemplate]="pinTemplate" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.pin-icon {
    margin-left: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.pinned {
    color: #444;

    &:hover {
        color: #999;
    }
}

.unpinned {
    color: #999;

    &:hover {
        color: #444;
    }
}
```
## Pinning Limitations
- Setting column widths in percentage (%) explicitly makes the Tree Grid body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the Tree Grid.
<div class="divider--half"></div>
## API References
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
