---
_tocName: Row selection
_premium: true
---
---title: Angular Grid Select Row - Ignite UI for Angular_description: Enable row selection to improve UX and let users manage single or multiple rows. See how easy it is to configure Row data select with Ignite UI._keywords: data select, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/row-selection---# Angular Tree Grid Row SelectionWith row selection in Ignite UI for Angular, there is row selector column that precedes all other columns within the row. When a user clicks on the row selector, the row will either become selected or deselected, enabling the user to select multiple rows of data.## Angular Row Selection ExampleThe sample below demonstrates the four types of Tree Grid's **row selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box. Use the switch button to _hide_ or _show_ the row selector checkbox.```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IRowSelectionEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-selection-sample',
    styleUrls: ['./tree-grid-selection-sample.component.scss'],
    templateUrl: './tree-grid-selection-sample.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxSnackbarComponent, IgxIconComponent]
})
export class TreeGridSelectionSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild('snackbarRowCount', { static: true }) public snackbarRowCount: IgxSnackbarComponent;
    @ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
    public data: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;
    public selectedRows = [1, 2, 3];
    public selectedRowsCount;
    public selectedRowIndex;

    constructor() {
        this.data = generateEmployeeFlatData();

        this.selectionModes = [
            { label: 'none', selectMode: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selectMode: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selectMode: 'multiple', selected: this.selectionMode === 'multiple', togglable: true },
            { label: 'cascade', selectMode: 'multipleCascade', selected: this.selectionMode === 'multipleCascade', togglable: true }
        ];
    }

    public ngOnInit(): void {
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public handleRowSelection(event: IRowSelectionEventArgs) {
        this.selectedRowsCount = event.newSelection.length;
        this.selectedRowIndex = event.newSelection[0];
        this.snackbarRowCount.open();
        this.snackbar.close();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].selectMode;
        this.snackbarRowCount.close();
        this.snackbar.open();
        this.selectedRowsCount = undefined;
        this.selectedRowIndex = undefined;
    }
}
```
```html
<div class="sample-container">
  <div class="grid-controls">
    <igx-switch [(ngModel)]="hideRowSelectors">Hide Row Selectors</igx-switch>
    <igx-buttongroup [values]="selectionModes" (selected)="selectCellSelectionMode($event)"></igx-buttongroup>
  </div>
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" [selectedRows]="selectedRows" primaryKey="ID" foreignKey="ParentID" [height]="'550px'" width="100%" [cellSelection]="'none'" [rowSelection]="selectionMode" [hideRowSelectors]="hideRowSelectors"
    [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true" width="15%"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true" width="15%"></igx-column>
    <igx-column [field]="'OnPTO'" dataType="boolean" [sortable]="true" width="15%"></igx-column>
  </igx-tree-grid>
</div>

<igx-snackbar #snackbarRowCount actionText="Got it. Thanks!" (clicked)="snackbarRowCount.close()">
  <div class="container">
    <igx-icon>notification_important</igx-icon>
    @if (selectionMode === 'multiple' || selectionMode === 'multipleCascade') {
      <p>Number of selected rows: {{selectedRowsCount}}</p>
    }
    @if (selectionMode === 'single' && this.selectedRowIndex !== undefined) {
      <p>Currently selected row index: {{selectedRowIndex}}</p>
    }
    @if (selectionMode === 'single' && this.selectedRowIndex === undefined) {
      <p>There is no currently selected row.</p>
    }
  </div>
</igx-snackbar>

<igx-snackbar #snackbar actionText="Got it. Thanks!" (clicked)="snackbar.close()">
  <div class="container">
    <igx-icon>notification_important</igx-icon>
    @if (selectionMode === 'multipleCascade') {
      <ul>
        <li><b>Now you can select multiple rows within a grid and their children.</b></li>
        <li>Click on row selector field or press SPACE key when some cell is active to toggle row
          selection.
        </li>
        <li>On cell click the row get selected and previous selection state is cleared.</li>
        <li>On cell click holding ctrl key, the row get selected and previous selection state is
          preserved.
        </li>
        <li>Shift + click select a range of rows.</li>
      </ul>
    }
    @if (selectionMode === 'multiple') {
      <ul>
        <li><b>Now you can select multiple rows within a grid.</b></li>
        <li>Click on row selector field or press SPACE key when some cell is active to toggle row
          selection.
        </li>
        <li>On cell click the row get selected and previous selection state is cleared.</li>
        <li>On cell click holding ctrl key, the row get selected and previous selection state is
          preserved.
        </li>
        <li>Shift + click select a range of rows.</li>
      </ul>
    }
    @if (selectionMode === 'single') {
      <ul>
        <li><b>Now you can select only one row within a grid.</b></li>
        <li>Click on row selector field or press SPACE key when some cell is active to toggle row
          selection.
        </li>
        <li>On cell click the row get selected and previous selection state is cleared.</li>
      </ul>
    }
    @if (selectionMode === 'none') {
      <ul>
        <li><b>Now you are unable to select a row while interacting with grid UI.</b></li>
        <li>If you need to select a row use grid API methods.</li>
      </ul>
    }
  </div>
</igx-snackbar>
```
```scss
.grid-controls {
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    align-items: flex-start;
    position: relative;
    > * {
        margin-bottom: 16px;
    }
}

.sample-container {
    margin: 16px;
}

igx-buttongroup {
    width: 500px;
}

.igx-snackbar {
    background: rgba(0, 0, 0, 0.7);
}

.container {
    display: flex;
    igx-icon {
        margin: 20px;
    }
}

.container p {
    margin-top: 20px;
}
```<div class="divider--half"></div>## SetupIn order to setup row selection in the [`igx-tree-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html), you just need to set the **rowSelection** property. This property accepts **GridSelectionMode** enumeration. **GridSelectionMode** exposes the following four modes: **none**, **single**, **multiple** and **multipleCascade**. Below we will take a look at each of them in more detail.### None SelectionIn the [`igx-tree-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) by default row selection is disabled, otherwise _([rowSelection]="'none'")_. So you can **not** select or deselect a row through interaction with the Tree Grid UI, the only way to complete these actions is to use the provided API methods.### Single SelectionSingle row selection can now be easily set up, the only thing you need to do, is to set `[rowSelection] = '"single"'` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the _space_ key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected **rowSelectionChanging** event is emitted.```html<!-- selectionExample.component.html --><igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true"
            [rowSelection]="'single'" [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)"></igx-tree-grid>``````typescript/* selectionExample.component.ts */public handleRowSelection(event) {
    if (args.added.length && args.added[0] === 3) {
        args.cancel = true;
    }}```### Multiple SelectionTo enable multiple row selection in the [`igx-tree-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) just set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowSelection) property to `multiple`. This will enable a row selector field on each row and in the Tree Grid header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the _space_ key when a cell is focused. If you have selected one row and click on another while holding the _shift_ key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you _click_ while holding the _ctrl_ key, the row will be toggled and the previous selection will be preserved.```html<!-- selectionExample.component.html --><igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [rowSelection]="'multiple'"
        [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)" ></igx-tree-grid>```### Cascade SelectionTo enable cascade row selection in the [`igx-tree-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) just set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowSelection) property to `multipleCascade`. This will enable a row selector field on each row and in the Tree Grid header. The row selector allows users to select multiple rows which would select all children in the tree below. The selection persists through scrolling, paging, and data operations, such as sorting and filtering. The row can also be selected by clicking on a cell or by pressing the _space_ key when a cell is focused. If you have selected one row and _click_ on another while holding the _shift_ key, the selection of a parent record will select all of its children even if they are not in the selected range. In this selection mode, when you _click_ on a single row, the previously selected rows will be deselected. If you _click_ while holding the _ctrl_ key, the row and its children will be toggled and the previous selection will be preserved.```html<!-- selectionExample.component.html --><igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true"
        [rowSelection]="'multipleCascade'" [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)"></igx-tree-grid>```In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.```ts<!-- selectionExample.component.ts -->

 public handleRowSelection(event: IRowSelectionEventArgs) {
    // use event.newSelection to retrieve primary key/row data of latest selected row
    this.selectedRowsCount = event.newSelection.length;
    this.selectedRowIndex = event.newSelection[0];
 }```**Notes**- Row selection will trigger [`rowSelectionChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowSelectionChanging) event. This event gives you information about the _new selection_, _old selection_, the rows that have been _added_ and _removed_ from the old selection. Also the event is _cancellable_, so this allows you to prevent selection.- When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set `[hideRowSelectors] = true`.- When you switch between row selection modes at runtime, this will clear the previous row selection state.## API usage### Select rows programmaticallyThe code snippet below can be used to select one or multiple rows simultaneously (via [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#primaryKey)); Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {```html<!-- selectionExample.component.html --><igx-tree-grid ... [primaryKey]="'ID'">...</igx-tree-grid>...<button (click)="this.treeGrid.selectRows([1,2,5], true)">Select 1,2 and 5</button> // select rows and clear previous selection state```}This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the Tree Grid selection.### Deselect rowsIf you need to deselect rows programmatically, you can use the `deselectRows(rowIds: [])` method.```html<!-- selectionExample.component.html --><igx-tree-grid ... [primaryKey]="'ID'">...</igx-tree-grid>...<button (click)="this.treeGrid.deselectRows([1,2,5])">Deselect 1,2 and 5</button>```### Row selection eventWhen there is some change in the row selection **[`rowSelectionChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelectionChanging)** event is emitted. **`rowSelectionChanging`** exposes the following arguments:- `oldSelection`  - array of row's data that contains the previous state of the row selection.- `newSelection` - array of row's data that match the new state of the row selection.- `added` - array of row's data that are currently added to the selection.- `removed` - array of row's data that are currently removed according old selection state.- `event` - the original event that triggered row selection change.- `cancel` -  allows you the prevent the row selection change.#### Row selection event in remote data scenariosIn remote data scenarios, when the grid has a `primaryKey` set, [`rowSelectionChanging.oldSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IRowSelectionEventArgs.html#oldSelection) event argument will not contain the full row data object for the rows that are currently out of the data view. In this case, `rowSelectionChanging.oldSelection` object will contain only one property, which is the `primaryKey` field. For the rest of the rows, currently in the data view, `rowSelectionChanging.oldSelection` will contain the whole row data.```html<!-- selectionExample.component.html --><igx-tree-grid (rowSelectionChanging)="handleRowSelectionChange($event)">...</igx-tree-grid>``````typescript/* selectionExample.component.ts */public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection}```### Select all rowsAnother useful API method that [`igx-tree-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) provides is `selectAll(onlyFilteredData)`. By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. But if you call the method with _false_ parameter, `selectAll(false)` will always select all data in the grid, even if filtering is applied.>[!NOTE]> Keep in mind that `selectAll()` will not select the rows that are deleted.### Deselect all rows[`igx-tree-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) provides `deselectAll(onlyFilteredData)` method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. But if you call the method with _false_ parameter, `deselectAll(false)` will always clear all row selection state even if filtering is applied.### How to get selected rowsIf you need to see which rows are currently selected, you can get their row IDs with the `selectedRows` getter.```typescriptpublic getSelectedRows() {
    const currentSelection = this.treeGrid.selectedRows; // return array of row IDs}```Additionally, assigning row IDs to `selectedRows` will allow you to change the grid's selection state.```typescriptpublic mySelectedRows = ['Johnathan Winchester', 'Ana Sanders']; // an array of row IDs``````html<igx-tree-grid primaryKey="ID" rowSelection="multiple" [autoGenerate]="false" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column></igx-tree-grid>```### Row selector templatesYou can template header and row selectors in the Tree Grid and also access their contexts which provide useful functionality for different scenarios.By default, the Tree Grid **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [`rowSelectionChanging` event](#row-selection-event). In case you implement a custom template with a `click` handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.#### Row templateTo create a custom row selector template,  within the `igx-tree-grid`, declare an `<ng-template>` with `igxRowSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.The `selected` property shows whether the current row is selected or not while the `index` property can be used to access the row index.```html<ng-template igxRowSelector let-rowContext>
    {{ rowContext.index }}
    <igx-checkbox
        [checked]="rowContext.selected"
        [readonly]="true"
    ></igx-checkbox></ng-template>```The `rowID` property can be used to get a reference of an `igx-tree-grid` row. This is useful when you implement a `click` handler on the row selector element.```html<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.key)"></igx-checkbox></ng-template>```In the above example we are using an `igx-checkbox` and we bind `rowContext.selected` to its `checked` property. See this in action in our [`Row Numbering Demo`](#row-numbering-demo).### Header templateTo create a custom header selector template, within the Tree Grid, declare an `<ng-template>` with `igxHeadSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.The `selectedCount` property shows you how many rows are currently selected while `totalCount` shows you how many rows there are in the Tree Grid in total.```html<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}</ng-template>```The `selectedCount` and `totalCount` properties can be used to determine if the head selector should be checked or indeterminate (partially selected).```html<igx-tree-grid [data]="tGridData" primaryKey="ProductID" childDataKey="Products">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]="headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template></igx-tree-grid>```### Row Numbering DemoThis demo shows the usage of custom header and row selectors. The latter uses `rowContext.index` to display row numbers and an `igx-checkbox` bound to `rowContext.selected`.```typescript
import { Component, OnInit } from '@angular/core';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-selection-template-numbers',
    styleUrls: ['./tree-grid-selection-template-numbers.component.scss'],
    templateUrl: './tree-grid-selection-template-numbers.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent]
})
export class TreeGridSelectionTemplateNumbersSampleComponent implements OnInit {
    public data: any[];

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" rowSelection="multiple" cellSelection="none" primaryKey="ID"
        foreignKey="ParentID" height="530px" width="100%" [autoGenerate]="false">
        <igx-paginator></igx-paginator>
        <igx-column field="Name"></igx-column>
        <igx-column field="Title"></igx-column>
        <igx-column field="HireDate"></igx-column>
        <igx-column field="Age" width="15%"></igx-column>
        <igx-column field="OnPTO" width="15%"></igx-column>

        <ng-template igxHeadSelector>
            <div class="header-selector">
                <img src="assets/images/card/avatars/igLogo.png" class="header-image">
            </div>
        </ng-template>

        <ng-template igxRowSelector let-rowContext>
            <div class="row-selector">
                <span class="row-selector-index">{{ rowContext.index + 1 }}</span>
                <igx-checkbox class="row-selector-checkbox"
                    [checked]="rowContext.selected"
                    [readonly]="true"
                    [disableRipple]="true" [disableTransitions]="treeGrid.disableTransitions">
                </igx-checkbox>
            </div>
        </ng-template>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 16px;
    padding-top: 10px;
}

.header-selector {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-image {
    width: 40px;
    height: 40px;
}

.row-selector {
    width: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
}

.row-selector-index {
    width: 25px;
    text-align: center;
}
```<div class="divider--half"></div>### Conditional Selection DemoThis demo prevents some rows from being selected using the `rowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.```typescript
import { Component, OnInit } from '@angular/core';
import { IRowSelectionEventArgs, IgxColumnComponent, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-conditional-row-selectors',
    styleUrls: ['./tree-grid-conditional-row-selectors.component.scss'],
    templateUrl: 'tree-grid-conditional-row-selectors.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class TreeGridConditionalRowSelectorsSampleComponent implements OnInit {
    public employees: any[];
    public disabledCollection: string[] = [];

    public ngOnInit(): void {
        this.employees = generateEmployeeFlatData();
        this.disabledCollection = this.employees.filter(empl => empl.OnPTO === true).map(empl => empl.ID);
    }

    public isSelectionAllowed(newRowID: string) {
        return this.disabledCollection.indexOf(newRowID) === -1;
    }

    public onRowSelect(event: IRowSelectionEventArgs) {
        if (!event.added.length && event.removed.length) {
            // ignore deselect
            return;
        }
        const originalAddedLength = event.added.length;

        // update selection to contain only allowed rows
        event.newSelection = event.newSelection.filter(x => this.isSelectionAllowed(x.ID));

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.newSelection.length
            && !event.newSelection.filter(x => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, deselect instead
                event.newSelection = [];
        }
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  [data]="employees" rowSelection="multiple" cellSelection="none" primaryKey="ID" foreignKey="ParentID"
        height="530px" width="100%" [autoGenerate]="false" (rowSelectionChanging)="onRowSelect($event)">
        <igx-paginator></igx-paginator>
        <igx-column field="Name"></igx-column>
        <igx-column field="Title"></igx-column>
        <igx-column field="HireDate"></igx-column>
        <igx-column field="Age" width="15%"></igx-column>
        <igx-column field="OnPTO" width="15%"></igx-column>

        <ng-template igxRowSelector let-rowContext>
            <div class="row-selector">
                <igx-checkbox [readonly]="true" [checked]="rowContext.selected"
                    [disabled]="!isSelectionAllowed(rowContext.key)"
                    [aria-label]="rowContext.selected ? 'Deselect row' : 'Select row'">
                </igx-checkbox>
            </div>
        </ng-template>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
  margin: 0 16px;
  padding-top: 10px;
}

.row-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: calc(1.25rem + (1.5rem * 2));
}
```<div class="divider--half"></div>## API References- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)_ [IgxTreeGridRow API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Tree Grid overview](tree-grid.md)- [Selection](selection.md)- [Cell selection](cell-selection.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Virtualization and Performance](virtualization.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
