---
title: Cell Editing in Angular Data Grid - Ignite UI for Angular
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, ignite ui for angular, infragistics, excel editing
_license: commercial
_tocName: Cell Editing
_premium: true
---
# Angular Grid Cell Editing
Ignite UI for Angular Grid component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the Grid is using **in cell** editing and different editors will be shown based on the column data type, thanks to the **default cell editing template**. In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.
## Angular Grid cell editing and edit templates Example
```typescript
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSummaryResult, VerticalAlignment } from 'igniteui-angular/core';
import { IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxButtonDirective, IgxFocusDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { DATA, LOCATIONS } from './data';
import { Product } from './product';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

class NumberSummary {
    public operate(data: any[]): IgxSummaryResult[] {
      const result = [];
      result.push({
          key: 'max',
          label: 'Max',
          summaryResult:  IgxNumberSummaryOperand.max(data)
        });
      result.push({
          key: 'sum',
          label: 'Sum',
          summaryResult: IgxNumberSummaryOperand.sum(data)
        });
      result.push({
          key: 'avg',
          label: 'Avg',
          summaryResult: IgxNumberSummaryOperand.average(data)
          });
      return result;
    }
  }
@Component({
    selector: 'app-grid-editing-sample',
    styleUrls: ['./grid-editing-sample.component.scss'],
    templateUrl: './grid-editing-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxGridToolbarComponent, IgxButtonDirective, IgxIconComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxCellEditorTemplateDirective, FormsModule, IgxComboComponent, IgxFocusDirective, IgxIconButtonDirective, IgxToastComponent, IgxDialogComponent, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDatePickerComponent, IgxCheckboxComponent, DatePipe]
})
export class GridEditingSampleComponent implements OnInit, AfterViewInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    @ViewChild('dialogAdd', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;
    @ViewChild('toast', { read: IgxToastComponent, static: false })
    public toast: IgxToastComponent;
    public data;
    public locations;
    public product;
    public customOverlaySettings;
    public id;
    public numSummary = NumberSummary;

    public ngOnInit() {
        this.data = DATA.map((e) => {
            const index = Math.floor(Math.random() * LOCATIONS.length);
            const count = Math.floor(Math.random() * 3) + 1;
            e.Locations = [...LOCATIONS].splice(index, count);
            return e;
        });
        this.id = this.data.length;
        this.product = new Product(this.id);
        this.locations = LOCATIONS;
    }

    public ngAfterViewInit() {
        this.customOverlaySettings = {
            outlet: this.grid1.outlet
        };
    }

    public removeRow(rowIndex) {
       const row = this.grid1.getRowByIndex(rowIndex);
       row.delete();
    }

    public addRow() {
        const id = this.product.ProductID;
        this.grid1.addRow(this.product);
        this.grid1.cdr.detectChanges();
        this.cancel();
        this.grid1.paginator.page = this.grid1.paginator.totalPages - 1;
        this.grid1.cdr.detectChanges();
        let row;
        requestAnimationFrame(() => {
            const index = this.grid1.filteredSortedData ? this.grid1.filteredSortedData.map(rec => rec['ProductID']).indexOf(id) :
                (row = this.grid1.getRowByKey(id) ? row.index : undefined);
            this.grid1.navigateTo(index, -1);
        });
    }

    public cancel() {
        this.dialog.close();
        this.id++;
        this.product = new Product(this.id);
    }

    // eslint-disable-next-line @typescript-eslint/member-delimiter-style
    public parseArray(arr: { shop: string, lastInventory: string}[]): string {
        return  (arr || []).map((e) => e.shop).join(', ');
    }

    public show(args) {
        const message = `The product: {name: ${args.data.ProductName}, ID ${args.data.ProductID} } has been removed!`;
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.toast.open(message);
    }
}
```
```html
<div class="grid__wrapper">
    <div class="sample__header">
        <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" width="100%" height="600px" [primaryKey]="'ProductID'" [allowFiltering]="true" (rowDeleted)="show($event)">
            <igx-paginator [perPage]="10"></igx-paginator>
            <igx-grid-toolbar>

                <button igxButton="flat" (click)="dialogAdd.open()" class="addProdBtn"><igx-icon>add</igx-icon> Add Product</button>

            </igx-grid-toolbar>

            <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [editable]="true" [resizable]="true">
            </igx-column>
            <igx-column field="UnitsInStock" header="Units In Stock" dataType="number" [sortable]="true" [hasSummary]="true" [summaries]="numSummary" [editable]="true" [resizable]="true">
            </igx-column>
            <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [sortable]="true" [hasSummary]="true" [editable]="true" [resizable]="true">
                <ng-template igxCell let-cell="cell" let-val>
                    {{val | date:'dd/MM/yyyy'}}
                </ng-template>
            </igx-column>
            <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true" [editable]="true">
            </igx-column>
            <igx-column field="ReorderLevel" header="Reorder Level" dataType="number"  [summaries]="numSummary" [sortable]="true" [hasSummary]="true" [editable]="true" [filterable]="false">
                <ng-template igxCellEditor let-cell="cell">
                    <input type="number" [(ngModel)]="cell.editValue" class="reorderLevelInput" />
                </ng-template>
            </igx-column>
            <igx-column field="Locations" header="Available At" [editable]="true" [filterable]="false" width="220px">
                <ng-template igxCell let-cell="cell">
                    {{ parseArray(cell.value) }}
                </ng-template>
                <ng-template igxCellEditor let-cell="cell" let-value>
                    <igx-combo type="line" [(ngModel)]="cell.editValue" [displayKey]="'shop'" [data]="locations" width="220px" [igxFocus]="true" [overlaySettings]="customOverlaySettings"></igx-combo>
                </ng-template>
            </igx-column>
            <igx-column width="100px" [filterable]="false">
                <ng-template igxCell let-cell="cell">
                    <button igxIconButton="flat" (click)="removeRow(cell.id.rowIndex)">
                        <igx-icon>delete</igx-icon>
                    </button>
                </ng-template>
            </igx-column>

        </igx-grid>
        <igx-toast #toast [autoHide]="true"></igx-toast>
        <igx-dialog #dialogAdd title="New Product" [rightButtonLabel]="'Add'" [leftButtonLabel]="'Cancel'" (leftButtonSelect)="cancel()" (rightButtonSelect)="addRow()">
            <div class="dialogNewRecord">
                <igx-input-group>
                    <label igxLabel for="productName">Product Name</label>
                    <input igxInput id="productName" type="text" [(ngModel)]="product.ProductName" />
                </igx-input-group>
                <igx-input-group>
                    <label igxLabel for="unitsInStock">Units In Stock</label>
                    <input igxInput id="unitsInStock" type="number" [(ngModel)]="product.UnitsInStock" />
                </igx-input-group>
                <igx-combo id="availableAt" [displayKey]="'shop'" [placeholder]="'Available @'" [data]="locations" [(ngModel)]="product.Locations" [itemsMaxHeight]="200"></igx-combo>
                <igx-date-picker id="orderDate" [(ngModel)]="product.OrderDate" mode="dialog">
                    <label igxLabel>Order Date</label>
                </igx-date-picker>
                <igx-checkbox id="discontinued" [(ngModel)]="product.Discontinued">Discontinued</igx-checkbox>
                <igx-input-group>
                    <label igxLabel for="reorderLevel">Reorder Level</label>
                    <input igxInput id="reorderLevel" [(ngModel)]="product.ReorderLevel" />
                </igx-input-group>
            </div>
        </igx-dialog>
    </div>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-medium);
    padding: 16px;
}

.dialogNewRecord {
    > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    #discontinued {
        margin-top: 15px;
    }
}

:host{
    ::ng-deep{
        .igx-grid {
            margin-top: 10px;
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
        @media screen and (max-width: 934px) {
            .igx-grid {
                overflow-x: none;
            }
        }
    }
}

.default-theme {
    .addProdBtn.igx-button--contained {
        background-color: lightgrey;
        color: black;
        &:hover {
            background-color: rgba(0, 0, 0, 0.26)
        }
    }
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
- on single click to another cell - when you click on another cell in the Grid, your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.
> [!NOTE]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the Grid. This is valid for both cell editing and row editing.
### Editing through API
You can also modify the cell value through the IgxGrid API but only if primary key is defined:
```typescript
public updateCell() {
    this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
}
```
Another way to update cell is directly through [`update`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html#update) method of [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html):
```typescript
public updateCell() {
    const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
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
### Grid Excel Style Editing
Using Excel Style Editing allows the user to navigate trough the cells just as he would using the Excel, and ever so quickly edit them.
Implementing this custom functionality can be done by utilizing the events of the grid. First we hook up to the grid's keydown events, and from there we can implement two functionalities:
- Constant edit mode
```typescript
public keydownHandler(event) {
  const key = event.keyCode;
  const grid = this.grid;
  const activeElem = grid.navigation.activeNode;

  if(
    (key >= 48 && key <= 57) ||
    (key >= 65 && key <= 90) ||
    (key >= 97 && key <= 122)){
        // Number or Alphabet upper case or Alphabet lower case
        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !cell.editMode) {
            cell.editMode = true;
            cell.editValue = event.key;
            this.shouldAppendValue = true;
        } else if (cell && cell.editMode && this.shouldAppendValue) {
            event.preventDefault();
            cell.editValue = cell.editValue + event.key;
            this.shouldAppendValue = false;
        }
    }
}
```
- `Enter`/ `Shift+Enter` navigation
```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eiligible cell, we will use a custom method that will check the next suitable index
    let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    this.grid.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        this.grid.clearCellSelection();
        this.cdr.detectChanges();
    });
}
```
Key parts of finding the next eligible index would be:
```typescript
//first we check if the currently selected cell is the first or the last
if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
return currentRowIndex;
}
// in case using shift + enter combination, we look for the first suitable cell going up the field
if(previous){
return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
}
// or for the next one down the field
return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
```
Please check the full sample for further reference:
### Angular Grid Excel Style Editing Sample
```typescript
import { ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { Transaction } from 'igniteui-angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from './../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-excel-style-editing-sample',
    styleUrls: [`grid-editing-excel-style.component.scss`],
    templateUrl: 'grid-editing-excel-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridExcelStyleEditingComponent implements OnInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    public data: any[];
    public shouldAppendValue = false;

    public ngOnInit(): void {
      this.data = DATA;
    }

    public keydownHandler(event) {
      const key = event.keyCode;
      const grid = this.grid;
      const activeElem = grid.navigation.activeNode;

      if (
        (key >= 48 && key <= 57) ||
        (key >= 65 && key <= 90) ||
        (key >= 97 && key <= 122)
      ) {
        // Number or Alphabet upper case or Alphabet lower case

        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !cell.editMode) {
          cell.editMode = true;
          cell.editValue = event.key;
          this.shouldAppendValue = true;
        } else if (cell && cell.editMode && this.shouldAppendValue) {
            event.preventDefault();
            cell.editValue = cell.editValue + event.key;
            this.shouldAppendValue = false;
          }
      }

      if (key == 13) {
        let thisRow = activeElem.row;
        const column = activeElem.column;
        const rowInfo = grid.dataView;

        let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

        this.grid.navigateTo(nextRow, column, (obj) => {
          obj.target.activate();
          this.grid.clearCellSelection();
          this.cdr.detectChanges();
          });
      }
      }

    public activeNodeChange() {
      this.grid.clearCellSelection();
      this.grid.endEdit();
    }

    public getNextEditableRowIndex(currentRowIndex, dataView, previous){
      if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
          return currentRowIndex;
      }
      if(previous){
        return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
      }
      return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
    }

    private isEditableDataRecordAtIndex(dataViewIndex, dataView) {
      const rec = dataView[dataViewIndex];
      return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid
      [igxPreventDocumentScroll]="true"
      #grid
      [data]="data"
      [primaryKey]="'ProductID'"
      width="100%"
      height="500px"
      (keydown)="keydownHandler($event)"
      (activeNodeChange)="activeNodeChange()"
    >
      <igx-column
        field="ProductID"
        header="Product ID"
        [editable]="true"
        [groupable]="true"
        [hidden]="true"
      ></igx-column>
      <igx-column
        field="ProductName"
        header="Product Name"
        [groupable]="true"
        [dataType]="'string'"
        [editable]="true"
      ></igx-column>
      <igx-column
        field="UnitPrice"
        header="Unit Price"
        [groupable]="true"
        [dataType]="'string'"
        [editable]="true"
      ></igx-column>
      <igx-column
        field="QuantityPerUnit"
        header="Quantity Per Unit"
        [groupable]="true"
        [dataType]="'string'"
        [editable]="true"
      ></igx-column>
      <igx-column
        field="ReorderLevel"
        header="Reorder Level"
        dataType="number"
        [groupable]="true"
        [editable]="true"
      ></igx-column>
    </igx-grid>
  </div>
```
```scss
.grid__wrapper {
    padding: 16px;
}

h4 {
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
}
.buttons-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
}
.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0;
}

.transaction--update, .transaction--delete, .transaction--add {
    font-weight: 600;
}
.transaction--add {
    color: #6b3;
}
.transaction--update {
    color: #4a71b9;
}
.transaction--delete {
    color: #ee4920;
}
.transaction-log {
    word-wrap: none;
}
```
Main benefits of the above approach include:
- Constant edit mode: typing while a cell is selected will immediately enter edit mode with the value typed, replacing the existing one
- Any non-data rows are skipped when navigating with `Enter`/`Shift+Enter`. This allows users to quickly cycle through their values.
## CRUD operations
> [!NOTE]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.
The [`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) provides a straightforward API for basic CRUD operations.
### Adding a new record
The Grid component exposes the [`addRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#addRow) method which will add the provided data to the data source itself.
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```
### Updating data in the Grid
Updating data in the Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#updateCell) methods but **only if primary key for the grid is defined**. You can also directly update a cell and/or a row value through their respective `update` methods.
```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);
// Just a particular cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);
// Directly using the cell `update` method
this.selectedCell.update(newData);
// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```
### Deleting data from the Grid
Please keep in mind that [`deleteRow()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#deleteRow) method will remove the specified row only if primary key is defined.
```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
These can be wired to user interactions, not necessarily related to the **igx-grid**; for example, a button click:
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```
<div class="divider--half"></div>
### Cell validation on edit event
Using the grid's editing events we can alter how the user interacts with the grid.
In this example, we'll validate a cell based on the data entered in it by binding to the [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellEdit) event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event (`event.cancel = true`). We'll also display a custom error message using [`IgxToast`](../toast.md).
The first thing we need to is bind to the grid's event:
```html
<igx-grid (cellEdit)="handleCellEdit($event)"
...>
...
</igx-grid>
```
The `cellEdit` emits whenever **any** cell's value is about to be committed. In our `handleCellEdit` definition, we need to make sure that we check for our specific column before taking any action:
```typescript
export class MyGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'Ordered') {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.open();
            }
        }
    }
}
```
If the value entered in a cell under the **Ordered** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and a toast with an error message will be displayed.
The result of the above validation being applied to our `igx-grid` can be seen in the below demo:
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IGridEditEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-editing-event',
    templateUrl: 'grid-editing-events.component.html',
    styleUrls: ['grid-editing-events.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxToastComponent]
})
export class GridEditingEventsComponent implements OnInit {
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    @ViewChild('myTemplate', { read: NgModel })
    public myTemplate: NgModel;

    public products: any[];
    public balance = 7800;
    public orderBalance: number;


    public ngOnInit() {
        this.products = DATA.map(e => {
            if (!e.UnitPrice) {
                e.UnitPrice = 1;
            }
            e.Ordered = Math.floor(Math.random() * e.UnitsInStock);
            return e;
        });
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
    }

    public handleCellEdit(event: IGridEditEventArgs) {
        const column = event.column;
        if (column.field === 'Ordered') {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.open();
            }
        }
    }
}
```
```html
<h4>Shipping Orders</h4>
<igx-grid [igxPreventDocumentScroll]="true" [data]="products" height="500px" primaryKey="ProductID" (cellEdit)="handleCellEdit($event)">
    <igx-column field="ProductName" header="Product Name" dataType="string"></igx-column>
    <igx-column field="UnitPrice" header="Price" dataType="number" [editable]="true"></igx-column>
    <igx-column field="UnitsInStock" header="Units In Stock" dataType="number" [editable]="true"></igx-column>
    <igx-column field="Ordered" header="Ordered" dataType="number" [editable]="true"></igx-column>
</igx-grid>
<igx-toast>You cannot order more than the units in stock!</igx-toast>
```
```scss
:host {
    display: block;
    padding: 16px;
}

h4 {
    margin-bottom: 20px;
}
```
## Styling
The IgxGrid allows for its cells to be styled through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The grid's [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.
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
We can now define the theme using our palette. The cells are styled by the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme), so we can use that to generate a theme for our IgxGrid:
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
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-grid-editing-style-sample',
    styleUrls: ['./grid-editing-style-sample.component.scss'],
    templateUrl: './grid-editing-style-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxCellEditorTemplateDirective, FormsModule, DatePipe]
})
export class GridEditingStyleSampleComponent implements OnInit {

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" [autoGenerate]="false" width="100%" height="600px" [allowFiltering]="true">
        <igx-paginator [perPage]="10"></igx-paginator>
        <igx-column field="ProductName" header="Product Name" width="15%" [dataType]="'string'" [sortable]="true"
            [hasSummary]="true" [editable]="true" [resizable]="true">
        </igx-column>
        <igx-column field="UnitsInStock" header="Units In Stock" width="13%" dataType="number" [sortable]="true"
            [hasSummary]="true" [editable]="true" [resizable]="true">
        </igx-column>
        <igx-column field="OrderDate" header="Order Date" width="15%" [dataType]="'date'" [sortable]="true"
            [hasSummary]="true" [editable]="true" [resizable]="true">
            <ng-template igxCell let-cell="cell" let-val>
                {{val | date:'dd/MM/yyyy'}}
            </ng-template>
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" width="13%" [dataType]="'boolean'" [sortable]="true"
            [hasSummary]="true" [editable]="true">
        </igx-column>
        <igx-column field="ReorderLevel" header="Reorder Level" dataType="number" width="13%" [sortable]="true"
            [hasSummary]="true" [editable]="true" [filterable]="false">
            <ng-template igxCellEditor let-cell="cell">
                <input type="number" [(ngModel)]="cell.editValue" class="reorderLevelInput" />
            </ng-template>
        </igx-column>
    </igx-grid>
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
    @include tokens($input-theme);
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
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
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
- [Grid overview](grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Searching](search.md)
