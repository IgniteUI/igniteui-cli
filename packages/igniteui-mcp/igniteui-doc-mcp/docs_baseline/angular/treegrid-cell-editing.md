---
title: Cell Editing in Angular TreeGrid - Ignite UI for Angular
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/cell-editing
_tocName: Cell Editing
_premium: true
---
# Angular Tree Grid Cell Editing
Ignite UI for Angular Tree Grid component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the Tree Grid is using **in cell** editing and different editors will be shown based on the column data type, thanks to the **default cell editing template**. In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.
## Angular Tree Grid cell editing and edit templates Example
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { Employee } from './employee';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        result.push({
            key: 'Min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-tree-grid-editing-sample',
    styleUrls: ['./tree-grid-editing-sample.component.scss'],
    templateUrl: './tree-grid-editing-sample.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxDialogComponent, IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxDatePickerComponent, IgxCheckboxComponent]
})
export class TreeGridEditingSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild('dialogAdd', { read: IgxDialogComponent, static: true }) public dialog: IgxDialogComponent;
    public data: any[];
    public numberSummaries = CustomNumberSummary;
    public employee: Employee;
    private nextRow: number;

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.employee = new Employee();
        this.nextRow = this.data.length + 1;
    }

    public openDialog(parentID) {
        this.employee.ParentID = parentID;
        this.dialog.open();
    }

    public addRow() {
        this.employee.ID = this.nextRow++;

        if (this.employee.ParentID === -1) {
            this.treeGrid.addRow(this.employee);
        } else {
            this.treeGrid.addRow(this.employee, this.employee.ParentID);
        }
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.employee = new Employee();
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }
}
```
```html
<div class="grid__wrapper">
    <button igxButton="outlined" class="addRootBtn" (click)="openDialog(-1)">
        <igx-icon>person_add</igx-icon>
        <span>Add Root Employee</span>
    </button>
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false"
        width="100%" height="800px" [allowFiltering]="true">
        <igx-paginator [perPage]="10"></igx-paginator>
        <igx-column [field]="'Name'" dataType="string" [editable]="true" [hasSummary]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [editable]="true" [hasSummary]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [editable]="true" [hasSummary]="true" [summaries]="numberSummaries"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" [editable]="true" [hasSummary]="true"></igx-column>
        <igx-column [field]="'OnPTO'" dataType="boolean" [editable]="true" [hasSummary]="true" width="130px">
            <ng-template igxCell let-cell="cell" let-val>
                <igx-icon [style.color]="cell.row.data.OnPTO? 'red': 'green'">account_circle</igx-icon>
            </ng-template>
        </igx-column>
        <igx-column [filterable]="false" width="130px">
            <ng-template igxCell let-cell="cell">
                <div class="buttonsArea">
                    <button igxIconButton="flat" (click)="openDialog(cell.row.key)" class="emplBtn">
                        <igx-icon>person_add</igx-icon>
                    </button>
                    <button igxIconButton="flat" (click)="deleteRow(cell.row.key)" class="emplBtn">
                        <igx-icon>delete</igx-icon>
                    </button>
                </div>
            </ng-template>
        </igx-column>
    </igx-tree-grid>
    <igx-dialog #dialogAdd title="New Employee" [rightButtonLabel]="'Add'" [leftButtonLabel]="'Cancel'"
        (leftButtonSelect)="cancel()" (rightButtonSelect)="addRow()">
        <div class="dialogNewRecord">
            <igx-input-group>
                <label igxLabel for="employeeName">Employee Name</label>
                <input igxInput id="employeeName" type="text" [(ngModel)]="employee.Name" />
            </igx-input-group>
            <igx-input-group>
                <label igxLabel for="employeeTitle">Title</label>
                <input igxInput id="employeeTitle" type="text" [(ngModel)]="employee.Title" />
            </igx-input-group>
            <igx-input-group>
                <label igxLabel for="employeeAge">Age</label>
                <input igxInput id="employeeAge" type="number" [(ngModel)]="employee.Age" />
            </igx-input-group>
            <igx-date-picker class="datePicker" id="employeeHireDate"  [(ngModel)]="employee.HireDate" mode="dialog">
                <label igxLabel>Hire Date</label></igx-date-picker>
            <igx-checkbox id="onPTO" [(ngModel)]="employee.OnPTO">On PTO</igx-checkbox>
        </div>
    </igx-dialog>
</div>
```
```scss
.grid__wrapper {
    margin: 20px;
}

.addRootBtn {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: black;    
    &:hover {        
        background-color:  rgba(0, 0, 0, 0.1)
    }
    igx-icon {
        margin-right: 5px;
    }
}

.buttonsArea {
    margin: auto;
}

.emplBtn {
    margin-right: 5px;
}

.igx-input-group {
    margin-bottom: 10px;
    padding: 5px;
}
.igx-checkbox {
    margin-bottom: 10px;
    padding: 5px;
}

.datePicker {
    padding: 5px;
    margin-bottom: 10px;
}
```
<div class="divider--half"></div>
> [!NOTE]
>By using `igxCellEditor` with any type of editor component, the keyboard navigation flow will be disrupted. The same applies to direct editing of the custom cell that enters edit mode. This is because the `focus` will remain on the `cell element`, not on the editor component that we've added - [`igxSelect`](../select.md), [`igxCombo`](../combo.md), etc. This is why we should take leverage of the `igxFocus` directive, which will move the focus directly in the in-cell component and will preserve `a fluent editing flow` of the cell/row.
## Cell Editing
### Editing through UI
You can enter edit mode for specific cell, when an editable cell is focused in one of the following ways:
- on double click;
- on single click - Single click will enter edit mode only if the previously selected cell was in edit mode and currently selected cell is editable. If the previously selected cell was not in edit mode, single click will select the cell without entering edit mode;
- on key press `Enter`;
- on key press `F2`;
You can exit edit mode **without committing** the changes in one of the following ways:
- on key press `Escape`;
- when you perform _sorting_, _filtering_, _searching_ and _hiding_ operations;
You can exit edit mode and **commit** the changes in one of the following ways:
- on key press `Enter`;
- on key press `F2`;
- on key press `Tab`;
- on single click to another cell - when you click on another cell in the Tree Grid, your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.
> [!NOTE]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the Tree Grid. This is valid for both cell editing and row editing.
### Editing through API
You can also modify the cell value through the IgxTreeGrid API but only if primary key is defined:
```typescript
public updateCell() {
    this.treeGrid.updateCell(newValue, rowID, 'Age');
}
```
Another way to update cell is directly through [`update`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html#update) method of [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html):
```typescript
public updateCell() {
    const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
    // You can also get cell by rowID if primary key is defined
    // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
    cell.update(9999);
}
```
### Cell Editing Templates
You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).
If you want to provide a custom template which will be applied when a cell is in edit mode, you can make use of the [`igxCellEditor` directive](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcelltemplatedirective.html). To do this, you need to pass an `ng-template` marked with the `igxCellEditor` directive and properly bind your custom control to the [`cell.editValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html#editValue):
```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```
This code is used in the sample below which implements an [`IgxSelectComponent`](../select.md) in the cells of the `Race`, `Class` and `Alignment` columns.
```typescript
import { Character } from './characters';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellEditorTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxFocusDirective } from 'igniteui-angular/directives';
import { DATA, ALIGNMENTS, RACES, CLASSES } from './data';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-grid-select-sample',
    styleUrls: ['./grid-select-sample.component.scss'],
    templateUrl: './grid-select-sample.component.html',
    imports: [IgxGridComponent, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxSelectComponent, FormsModule, IgxFocusDirective, IgxSelectItemComponent]
})
export class GridSelectComponent implements OnInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public alignments;
    public races;
    public classes;
    public character;

    public generateRandomData(data) {
        return data.map((e) => {
            const indexAlignments = Math.floor(Math.random() * ALIGNMENTS.length);
            e.alignment = ALIGNMENTS[indexAlignments];
            const indexRaces = Math.floor(Math.random() * RACES.length);
            e.race = RACES[indexRaces];
            const indexClasses = Math.floor(Math.random() * CLASSES.length);
            e.class = CLASSES[indexClasses];
            return e;
        });
    }

    public ngOnInit() {
        this.data = this.generateRandomData(DATA);
        this.character = new Character();
        this.alignments = ALIGNMENTS;
        this.races = RACES;
        this.classes = CLASSES;
    }
}
```
```html
<igx-grid #grid1 [data]="data" [primaryKey]="'name'" height="600px">
  <igx-column field="name" header="Character name" [editable]="true">
  </igx-column>
  <igx-column field="race" header="Race" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
      <igx-select [(ngModel)]="cell.editValue" [igxFocus]="true">
        @for (race of races; track race) {
          <igx-select-item [value]="race">
            {{ race }}
          </igx-select-item>
        }
      </igx-select>
    </ng-template>
  </igx-column>
  <igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
      <igx-select [(ngModel)]="cell.editValue" [igxFocus]="true">
        @for (class of classes; track class) {
          <igx-select-item [value]="class">
            {{ class }}
          </igx-select-item>
        }
      </igx-select>
    </ng-template>
  </igx-column>
  <igx-column field="age" header="Age" [dataType]="'number'" [editable]="true" width="10%">
  </igx-column>
  <igx-column field="alignment" header="Alignment" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
      <igx-select [(ngModel)]="cell.editValue" [igxFocus]="true">
        @for (alignment of alignments; track alignment) {
          <igx-select-item [value]="alignment">
            {{ alignment }}
          </igx-select-item>
        }
      </igx-select>
    </ng-template>
  </igx-column>
</igx-grid>
```
```scss
:host {
    display: block;
    padding: 16px;
}
```
<div class="divider--half"></div>
> [!NOTE]
> Any changes made to the cell's [`editValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html#editValue) in edit mode, will trigger the appropriate [editing event](editing.md#event-arguments-and-sequence) on exit and apply to the [transaction state](batch-editing.md) (if transactions are enabled).
> [!NOTE]
> The cell template [`igxCell`](../grid/grid.md#cell-template) controls how a column's cells are shown when outside of edit mode.
> The cell editing template directive `igxCellEditor`, handles how a column's cells in edit mode are displayed and controls the edited cell's edit value.
> [!NOTE]
>By using `igxCellEditor` with any type of editor component, the keyboard navigation flow will be disrupted. The same applies to direct editing of the custom cell that enters edit mode. This is because the `focus` will remain on the `cell element`, not on the editor component that we've added - [`igxSelect`](../select.md), [`igxCombo`](../combo.md), etc. This is why we should take leverage of the `igxFocus` directive, which will move the focus directly in the in-cell component and will preserve `a fluent editing flow` of the cell/row.
For more information on how to configure columns and their templates, you can see the documentation for [Grid Columns configuration](../grid/grid.md#angular-grid-column-configuration).
## CRUD operations
> [!NOTE]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.
The [`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) provides a straightforward API for basic CRUD operations.
### Adding a new record
The Tree Grid component exposes the [`addRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#addRow) method which will add the provided data to the data source itself.
```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
}
```
### Updating data in the Tree Grid
Updating data in the Tree Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#updateCell) methods but **only if primary key for the grid is defined**. You can also directly update a cell and/or a row value through their respective `update` methods.
```typescript
// Updating the whole row
this.treeGrid.updateRow(newData, this.selectedCell.cellID.rowID);
// Just a particular cell through the Tree Grid API
this.treeGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);
// Directly using the cell `update` method
this.selectedCell.update(newData);
// Directly using the row `update` method
const row = this.treeGrid.getRowByKey(rowID);
row.update(newData);
```
### Deleting data from the Tree Grid
Please keep in mind that [`deleteRow()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#deleteRow) method will remove the specified row only if primary key is defined.
```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```
These can be wired to user interactions, not necessarily related to the **igx-tree-grid**; for example, a button click:
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```
<div class="divider--half"></div>
### Cell validation on edit event
Using the grid's editing events we can alter how the user interacts with the grid.
In this example, we'll validate a cell based on the data entered in it by binding to the [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#cellEdit) event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event (`event.cancel = true`). We'll also display a custom error message using [`IgxToast`](../toast.md).
The first thing we need to is bind to the grid's event:
```html
<igx-tree-grid (cellEdit)="handleCellEdit($event)"
...>
...
</igx-tree-grid>
```
The `cellEdit` emits whenever **any** cell's value is about to be committed. In our `handleCellEdit` definition, we need to make sure that we check for our specific column before taking any action:
```typescript
export class MyTreeGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'Age') {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.message = 'Employees must be at least 18 years old!';
                this.toast.open();
            }
        } else if (column.field === 'HireDate') {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.message = 'The employee hire date must be in the past!';
                this.toast.open();
            }
        }
    }
}
```
Here, we are validating two columns. If the user tries to set an invalid value for an employee's **Age** (below 18) or their **Hire Date** (a future date), the editing will be cancelled (the value will not be submitted) and a toast with an error message will be displayed.
The result of the above validation being applied to our `igx-tree-grid` can be seen in the below demo:
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridEditEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-editing-events',
    templateUrl: 'tree-grid-editing-events.component.html',
    styleUrls: ['tree-grid-editing-events.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxToastComponent]
})
export class TreeGridEditingEventsComponent implements OnInit {
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public data: IEmployee[] = [];
    public ngOnInit() {
        this.data = generateEmployeeFlatData();
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
    }

    public handleEdit(event: IGridEditEventArgs) {
        const column = event.column;
        if (column.field === 'Age') {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.open('Employees must be at least 18 years old!');
            }
        } else if (column.field === 'HireDate') {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.open('The employee hire date must be in the past!');
            }
        }
    }
}
```
```html
<h4>Current Employees</h4>
<igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%"
    height="500px" (cellEdit)="handleEdit($event)">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="Title" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number" [editable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [editable]="true"></igx-column>
</igx-tree-grid>
<igx-toast></igx-toast>
```
```scss
:host {
    display: block;
    padding: 16px;

    h4 {
        margin: 8px;
    }
}
```
## Styling
The IgxTreeGrid allows for its cells to be styled through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The grid's [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.
In the below steps, we are going to go over how you can style the grid's cell in edit mode and how you can scope those styles.
In order to use the [`Ignite UI Theming Library`](../themes/sass/component-themes.md), we must first import the theme `index` file in our global styles:
### Importing style library
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Now we can make use of all of the functions exposed by the Ignite UI for Angular theme engine.
### Defining a palette
After we've properly imported the index file, we create a custom palette that we can use. Let's define three colors that we like and use them to build a palette with [`palette`](../themes/palettes.md):
```scss
$white: #fff;
$blue: #4567bb;
$gray: #efefef;
$color-palette: palette(
  $primary: $white, 
  $secondary: $blue, 
  $surface: $gray
);
```
### Defining themes
We can now define the theme using our palette. The cells are styled by the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme), so we can use that to generate a theme for our IgxTreeGrid:
```scss
$custom-grid-theme: grid-theme(
  $cell-editing-background: $blue,
  $cell-edited-value-color: $white,
  $cell-active-border-color: $white,
  $edit-mode-color: color($color-palette, "secondary", 200)
);
```
### Applying the theme
The easiest way to apply our theme is with a `sass` `@include` statement in the global styles file:
```scss
@include grid($custom-grid-theme);
```
### Demo
In addition to the steps above, we can also style the controls that are used for the cells' editing templates: [`input-group`](../input-group.md#styling), [`datepicker`](../date-picker.md#styling) & [`checkbox`](../checkbox.md#styling)
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-editing-sample',
    styleUrls: ['./tree-grid-editing-sample.component.scss'],
    templateUrl: './tree-grid-editing-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent]
})
export class TreeGridEditingStyleComponent implements OnInit {
    @ViewChild(IgxTreeGridComponent, { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false"
        width="100%" height="800px" [allowFiltering]="true">
        <igx-paginator [perPage]="10"></igx-paginator>
        <igx-column [field]="'Name'" dataType="string" [editable]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [editable]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [editable]="true"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" [editable]="true"></igx-column>
        <igx-column [field]="'OnPTO'" dataType="boolean" [editable]="true" width="130px">
            <ng-template igxCell let-cell="cell" let-val>
                <igx-icon [style.color]="cell.row.data.OnPTO? 'red': 'green'">account_circle</igx-icon>
            </ng-template>
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$white: #fff;
$blue: #4567bb;
$gray: #efefef;

$color-palette: palette(
  $primary: $white,
  $secondary: $blue,
  $surface: $gray
);

$grid-theme: grid-theme(
  $cell-editing-background: $blue,
  $cell-active-border-color: $blue,
  $cell-edited-value-color: $white,
  $edit-mode-color: color($color-palette, "secondary", 200)
);

$checkbox-theme: checkbox-theme(
  $empty-color: color($color-palette, "secondary", 200),
  $fill-color: $white,
  $tick-color: $blue
);

$datepicker-theme: calendar-theme(
  $date-selected-foreground: $white,
  $date-selected-background: $blue
);

$input-theme: input-group-theme(
  $filled-text-color: $white,
  $focused-text-color: $white,
  $idle-text-color: $white,
  $idle-bottom-line-color: $white,
  $focused-bottom-line-color: $white,
  $hover-bottom-line-color: $white,
  $box-background: $blue
);


:host {
  @include tokens($grid-theme);
  @include tokens($checkbox-theme);
  @include tokens($datepicker-theme);

  ::ng-deep {
    .igx-grid__tbody {
      @include tokens($input-theme);
    }
  }
}

.igx-grid {
  @include palette($color-palette);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>
## API References
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
_ [IgxTreeGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxInputDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputdirective.html)
- [IgxDatePickerComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html)
- [IgxDatePickerComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-date-picker-theme)
- [IgxCheckboxComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html)
- [IgxCheckboxComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-checkbox-theme)
- [IgxOverlay](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
## Additional Resources
<div class="divider--half"></div>
- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Searching](search.md)
