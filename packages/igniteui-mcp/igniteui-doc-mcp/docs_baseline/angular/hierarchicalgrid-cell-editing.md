---
title: Cell Editing in Angular HierarchicalGrid - Ignite UI for Angular
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/cell-editing
_tocName: Cell Editing
_premium: true
---
# Angular Hierarchical Grid Cell Editing
Ignite UI for Angular Hierarchical Grid component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the Hierarchical Grid is using **in cell** editing and different editors will be shown based on the column data type, thanks to the **default cell editing template**. In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.
## Angular Hierarchical Grid cell editing and edit templates Example
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

class MySummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
            {
                key: 'min',
                label: 'Min',
                summaryResult: IgxNumberSummaryOperand.min(data)
            },
            {
                key: 'max',
                label: 'Max',
                summaryResult: IgxNumberSummaryOperand.max(data)
            },
            {
                key: 'avg',
                label: 'Avg',
                summaryResult: IgxNumberSummaryOperand.average(data)
            });
        return result;
    }
}
@Component({
    selector: 'app-hierarchical-grid-editing',
    styleUrls: ['./hierarchical-grid-editing.component.scss'],
    templateUrl: 'hierarchical-grid-editing.component.html',
    imports: [IgxButtonDirective, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, IgxRowIslandComponent, IgxDialogComponent, IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxCheckboxComponent]
})

export class HGridEditingSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild('dialogAdd', { read: IgxDialogComponent, static: true })
    private dialog: IgxDialogComponent;

    public localdata;
    public singer: Singer;
    public mySummary = MySummary;
    private id = 14;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.singer = {
            ID: this.id,
            Artist: 'Mock Jagger',
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }

    public formatter = (a) => a;

    public addRow() {
        this.hierarchicalGrid.addRow(this.singer);
        ++this.id;
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.singer = {
            ID: this.id,
            Artist: 'Mock Jagger',
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
    }

}
```
```html
<div class="grid__wrapper">
<button igxButton="contained" (click)="dialogAdd.open()" class="addSingerBtn">Add New Singer</button>
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
    [height]="'580px'" [width]="'100%'">
    <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" [editable]="true" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [editable]="true" dataType="number"
        [hasSummary]="true" [summaries]="mySummary"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [editable]="true" dataType="number"
        [hasSummary]="true" [summaries]="mySummary"></igx-column>
    <igx-column [width]="'100px'">
        <ng-template igxCell let-cell="cell">
            <button igxIconButton="flat" (click)="removeRow(cell.id.rowIndex)">
                <igx-icon>delete</igx-icon>
            </button>
        </ng-template>
    </igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
        <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" [editable]="true" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" [editable]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-column field="Number" header="No." [editable]="true" dataType="number"></igx-column>
                <igx-column field="Title" [editable]="true" [dataType]="'string'"></igx-column>
                <igx-column field="Released" [editable]="true" [dataType]="'date'"></igx-column>
                <igx-column field="Genre" [editable]="true" [dataType]="'string'"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
<igx-dialog #dialogAdd title="New Singer" [rightButtonLabel]="'Add'" [leftButtonLabel]="'Cancel'"
(leftButtonSelect)="cancel()" (rightButtonSelect)="addRow()">
<div class="dialogNewRecord">
    <igx-input-group>
        <label igxLabel for="artist">Artist</label>
        <input igxInput id="artist" type="text" [(ngModel)]="singer.Artist" />
    </igx-input-group>
    <igx-checkbox id="hasGrammyAward" [(ngModel)]="singer.HasGrammyAward">Has Grammy Award</igx-checkbox>
    <igx-input-group>
        <label igxLabel for="debut">Debut</label>
        <input igxInput id="debut" type="number" [(ngModel)]="singer.Debut" />
    </igx-input-group>
    <igx-input-group>
        <label igxLabel for="grammyNominations">Grammy Nominations</label>
        <input igxInput id="grammyNominations" type="number" [(ngModel)]="singer.GrammyNominations" />
    </igx-input-group>
    <igx-input-group>
        <label igxLabel for="grammyAwards">Grammy Awards</label>
        <input igxInput id="grammyAwards" type="number" [(ngModel)]="singer.GrammyAwards" />
    </igx-input-group>
</div>
</igx-dialog>
</div>
```
```scss
.addSingerBtn.igx-button--contained{
    margin-bottom: 10px;
    background-color: lightgrey;
    color: black;
    &:hover {
        background-color:  rgba(0, 0, 0, 0.26)
    }
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.dialogNewRecord {
    > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.igx-input-group {
    margin-bottom: 10px;
    padding: 5px;
}
.igx-checkbox {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 8px;
    padding-bottom: 5px;
}

.reorderLevelInput {
    color: black;
    width: 100%;
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
- on single click to another cell - when you click on another cell in the Hierarchical Grid, your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.
> [!NOTE]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the Hierarchical Grid. This is valid for both cell editing and row editing.
### Editing through API
You can also modify the cell value through the IgxHierarchicalGrid API but only if primary key is defined:
```typescript
public updateCell() {
    this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
}
```
Another way to update cell is directly through [`update`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html#update) method of [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html):
```typescript
public updateCell() {
    const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
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
The [`IgxHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) provides a straightforward API for basic CRUD operations.
### Adding a new record
The Hierarchical Grid component exposes the [`addRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#addRow) method which will add the provided data to the data source itself.
```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record, 1);
}
```
### Updating data in the Hierarchical Grid
Updating data in the Hierarchical Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#updateCell) methods but **only if primary key for the grid is defined**. You can also directly update a cell and/or a row value through their respective `update` methods.
```typescript
// Updating the whole row
this.hierarchicalGrid.updateRow(newData, this.selectedCell.cellID.rowID);
// Just a particular cell through the Grid API
this.hierarchicalGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);
// Directly using the cell `update` method
this.selectedCell.update(newData);
// Directly using the row `update` method
const row = this.hierarchicalGrid.getRowByKey(rowID);
row.update(newData);
```
### Deleting data from the Hierarchical Grid
Please keep in mind that [`deleteRow()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#deleteRow) method will remove the specified row only if primary key is defined.
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```
These can be wired to user interactions, not necessarily related to the **igx-hierarchical-grid**; for example, a button click:
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```
<div class="divider--half"></div>
### Cell validation on edit event
Using the grid's editing events we can alter how the user interacts with the grid.
In this example, we'll validate a cell based on the data entered in it by binding to the [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#cellEdit) event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event (`event.cancel = true`). We'll also display a custom error message using [`IgxToast`](../toast.md).
The first thing we need to is bind to the grid's event:
```html
<igx-hierarchical-grid (cellEdit)="handleCellEdit($event)"
...>
...
</igx-hierarchical-grid>
```
The `cellEdit` emits whenever **any** cell's value is about to be committed. In our `handleCellEdit` definition, we need to make sure that we check for our specific column before taking any action:
```typescript
export class MyHGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = event.column;
        if (column.field === 'Debut') {
            if (event.newValue > today.getFullYear()) {
                this.toast.message = 'The debut date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.newValue > new Date()) {
                this.toast.message = 'The launch date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        }
    }
}
```
Here, we are validating two columns. If the user tries to change an artist's **Debut** year or an album's **Launch Date**, the grid will not allow any dates that are greater than today.
The result of the above validation being applied to our `igx-hierarchical-grid` can be seen in the below demo:
```typescript
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IGridEditEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-editing-events',
    styleUrls: ['./hierarchical-grid-editing-events.component.scss'],
    templateUrl: 'hierarchical-grid-editing-events.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent, IgxToastComponent]
})

export class HGridEditingEventsComponent implements OnInit, OnDestroy {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public grid: IgxHierarchicalGridComponent;

    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public localData: Singer[];

    private destroy$ = new Subject<void>();

    constructor() { }

    public ngOnInit(): void {
        this.localData = SINGERS;
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public formatter = (a) => a;

    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = event.column;
        if (column.field === 'Debut') {
            if (event.newValue > today.getFullYear()) {
                this.toast.open('The debut date must be in the past!');
                event.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.newValue > new Date()) {
                this.toast.open('The launch date must be in the past!');
                event.cancel = true;
            }
        }
    }

    public handleCreate(event: IGridCreatedEventArgs) {
        event.grid.cellEdit.pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleCellEdit(e));
    }
}
```
```html
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  [data]="localData" [autoGenerate]="false"
    height="600px" width="100%" primaryKey="Artist" (cellEdit)="handleCellEdit($event)">
    <igx-column field="Artist" dataType="string"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" dataType="boolean">
    </igx-column>
    <igx-column field="Debut" [editable]="true" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [editable]="true" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [editable]="true" dataType="number"></igx-column>

    <igx-row-island [height]="null" key="Albums" primaryKey="Album" [autoGenerate]="false" (gridCreated)="handleCreate($event)">
        <igx-column field="Album" [editable]="true" dataType="string"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [editable]="true" dataType="date"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" [editable]="true" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" [editable]="true" dataType="number"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
<igx-toast></igx-toast>
```
```scss
:host {
    display: block;
    padding: 16px;
}
```
## Styling
The IgxHierarchicalGrid allows for its cells to be styled through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The grid's [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.
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
We can now define the theme using our palette. The cells are styled by the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme), so we can use that to generate a theme for our IgxHierarchicalGrid:
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
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-editing-style',
    styleUrls: ['./hierarchical-grid-editing-style.component.scss'],
    templateUrl: 'hierarchical-grid-editing-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridEditingStyleComponent implements OnInit {
    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata: Singer[];
    public singer: Singer;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false" [height]="'600px'"
    [width]="'100%'">
    <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" [editable]="true" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [editable]="true" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [editable]="true" dataType="number"></igx-column>
    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
        <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" [editable]="true" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" [editable]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
            <igx-column field="Number" header="No." [editable]="true" dataType="number"></igx-column>
            <igx-column field="Title" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="Released" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="Genre" [editable]="true" [dataType]="'string'"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
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
  $cell-edited-value-color: $white,
  $cell-active-border-color: $white,
  $edit-mode-color: color($color-palette, "secondary", 200)
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

$checkbox-theme: checkbox-theme(
  $empty-color: color($color-palette, "secondary", 200),
  $fill-color: $white,
  $tick-color: $blue
);

$datepicker-theme: calendar-theme(
  $date-selected-foreground: $white,
  $date-selected-background: $blue
);

:host {
    @include tokens($grid-theme);
    @include tokens($checkbox-theme);
    @include tokens($input-theme);
    @include tokens($datepicker-theme);
}

igx-hierarchical-grid {
  @include palette($color-palette);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>
## API References
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
_[IgxGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)
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
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

