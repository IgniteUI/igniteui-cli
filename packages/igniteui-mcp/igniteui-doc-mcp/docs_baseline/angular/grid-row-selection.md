---
_tocName: Row selection
_premium: true
---
---title: Angular Grid Select Row - Ignite UI for Angular_description: Enable row selection to improve UX and let users manage single or multiple rows. See how easy it is to configure Row data select with Ignite UI._keywords: data select, igniteui for angular, infragistics_license: commercial---# Angular Grid Row SelectionWith row selection in Ignite UI for Angular, there is row selector column that precedes all other columns within the row. When a user clicks on the row selector, the row will either become selected or deselected, enabling the user to select multiple rows of data.## Angular Row Selection ExampleThe sample below demonstrates the three types of Grid's **row selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box. Use the switch button to _hide_ or _show_ the row selector checkbox.To get newly selected elements you can use **event.newSelection**:```tspublic handleRowSelection(event: IRowSelectionEventArgs) {
    this.selectedRowsCount = event.newSelection.length;
    this.selectedRowIndex = event.newSelection[0];
    this.snackbarRowCount.open();
    this.snackbar.close();
    this.logAnEvent(`=> 'rowSelectionChanging' with value: ` + JSON.stringify(event.newSelection));}``````typescript
import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';

import { GridSelectionMode, IRowSelectionEventArgs, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';


@Component({
    providers: [FinancialDataService],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-sample',
    styleUrls: ['./grid-selection.component.scss'],
    templateUrl: 'grid-selection.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxButtonGroupComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent, AsyncPipe]
})

export class GridSelectionSampleComponent implements OnInit {
    private localService = inject(FinancialDataService);
    private renderer = inject(Renderer2);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild('snackbarRowCount', { static: true }) public snackbarRowCount: IgxSnackbarComponent;
    @ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
    @ViewChild('logger') public logger: ElementRef;
    public data: Observable<any[]>;
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;
    public selectedRows = [1, 2, 3];
    public selectedRowsCount;
    public selectedRowIndex;

    constructor() {
        this.localService.getData(500);
        this.data = this.localService.records;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];

    }
    public ngOnInit(): void {
        this.snackbar.autoHide = false;
        this.snackbar.open();
        this.snackbarRowCount.autoHide = true;
        this.snackbarRowCount.close();
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public handleRowSelection(event: IRowSelectionEventArgs) {
        this.selectedRowsCount = event.newSelection.length;
        this.selectedRowIndex = event.newSelection[0];
        this.snackbarRowCount.open();
        this.snackbar.close();
        this.logAnEvent(`=> 'rowSelectionChanging' with value: ` + JSON.stringify(event.newSelection));
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
        this.snackbarRowCount.close();
        this.selectedRowsCount = undefined;
        this.selectedRowIndex = undefined;
    }

    public clearLog() {
        const elements = this.logger.nativeElement.querySelectorAll('p');
        for (let index = 0; index < elements.length; index++) {
            this.renderer.removeChild(this.logger.nativeElement, elements[index]);
        }
    }

    private logAnEvent(msg: string, canceled?: boolean) {
        const createElem = this.renderer.createElement('p');

        if (canceled) {
            msg = msg.concat(': has been canceled ');
        }

        const text = this.renderer.createText(msg);
        this.renderer.appendChild(createElem, text);
        const container = this.logger.nativeElement;
        this.renderer.insertBefore(container, createElem, container.children[0]);
    }
}
```
```html
<div class="sample-container">
  <div class="grid-controls">
    <igx-switch [(ngModel)]="hideRowSelectors">Hide Row Selectors</igx-switch>
    <igx-buttongroup [values]="selectionModes" (selected)="selectCellSelectionMode($event)"></igx-buttongroup>
  </div>
  <div class="sample-wrapper">
    <div class="grid-wrapper">
      <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data | async" [height]="'550px'" [primaryKey]="'ID'" width="100%" [cellSelection]="'none'"
        [rowSelection]="selectionMode" [selectedRows]="selectedRows" [hideRowSelectors]="hideRowSelectors" [allowFiltering]="true"
        (rowSelectionChanging)="handleRowSelection($event)">
        <igx-column [field]="'Category'"></igx-column>
        <igx-column [field]="'Type'" [filterable]="false"></igx-column>
        <igx-column [field]="'Price'" dataType="number" [formatter]="formatCurrency"></igx-column>
        <igx-column [field]="'Buy'" dataType="number" [formatter]="formatCurrency"></igx-column>
        <igx-column [field]="'Sell'" dataType="number" [formatter]="formatCurrency"></igx-column>
        <igx-column [field]="'Change'" dataType="number" [headerClasses]="'headerAlignSyle'">
          <ng-template igxHeader>
            <span>Change</span>
          </ng-template>
          <ng-template igxCell let-val>
            <div class="currency-badge-container">
              @if (val>0) {
                <igx-badge type="success" position="bottom-right" icon="arrow_upward"
                class="badge-left"></igx-badge>
              }
              @if (val<0) {
                <igx-badge type="error" position="bottom-right" icon="arrow_downward"
                class="error badge-left"></igx-badge>
              }
              <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}</span>
            </div>
          </ng-template>
        </igx-column>
        <igx-column [field]="'Change(%)'" dataType="number" [formatter]="formatNumber">
          <ng-template igxHeader>
            <span>Change(%)</span>
          </ng-template>

          <ng-template igxCell let-val>
            <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
          </ng-template>
        </igx-column>
        <igx-column [field]="'Change On Year(%)'" dataType="number" [formatter]="formatNumber">
          <ng-template igxCell let-val>
            <div class="currency-badge-container">
              @if (val>0) {
                <igx-badge type="success" position="bottom-right" icon="arrow_upward"
                class="badge-left"></igx-badge>
              }
              @if (val<0) {
                <igx-badge type="error" position="bottom-right" icon="arrow_downward"
                class="error badge-left"></igx-badge>
              }
              <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
            </div>
          </ng-template>
        </igx-column>
      </igx-grid>
    </div>
    <div class="log-wrapper">
      <div class="selected-data-area">
        <div class="logContainer">
          <div class="highlight">
            <span>Events execution sequence</span>
            <button class="clearBtn" igxButton="flat" (click)="clearLog()">
              <igx-icon>clear</igx-icon>
              <span>Clear log</span>
            </button>
          </div>
          <hr />
          <div #logger class="logger"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<igx-snackbar #snackbarRowCount actionText="Got it. Thanks!" (clicked)="snackbarRowCount.close()">
  <div class="container">
    <igx-icon>notification_important</igx-icon>
    @if (selectionMode === 'multiple') {
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
:host {
    width: 100%;
}

.cellAlignSyle {
    text-align: right;
    float: right;
}

.cellAlignSyle > span {
    float: right;
}

.up {
    color: green;
}

.down {
    color: red;
}

.headerAlignSyle {
    text-align: right !important;
}

.sample-container {
    margin: 16px;
}

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

.currency-badge-container {
    width: 80px;
    float: right;
}

.badge-left {
    float: left;
}

ul {
    padding: 0;
    list-style-type: none;
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

.switches {
    margin-top: 12px;
    margin-bottom: 8px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.sample-wrapper {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}

.grid-wrapper {
    width: 60%;
    margin: 8px;
}
.log-wrapper {
    width: 35%;
}

.clearBtn {
    top: 3px;
    margin-left: 20px;
}

.selected-data-area{
    overflow-y: auto;
    max-height: 550px;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-top: 8px;
}

.logContainer {
    padding: 0.2rem 0.4rem;
}

.highlight {
    text-align: center;
    margin-bottom: 0.4rem;
}
```<div class="divider--half"></div>## SetupIn order to setup row selection in the [`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html), you just need to set the **rowSelection** property. This property accepts **GridSelectionMode** enumeration. **GridSelectionMode** exposes the following three modes: **none**, **single** and **multiple**. Below we will take a look at each of them in more detail.### None SelectionIn the [`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) by default row selection is disabled, otherwise _([rowSelection]="'none'")_. So you can **not** select or deselect a row through interaction with the Grid UI, the only way to complete these actions is to use the provided API methods.### Single SelectionSingle row selection can now be easily set up, the only thing you need to do, is to set `[rowSelection] = '"single"'` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the _space_ key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected **rowSelectionChanging** event is emitted.```html<!-- selectionExample.component.html --><igx-grid [data]="remote | async" [rowSelection]="'single'" [autoGenerate]="true"
          (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true"></igx-grid>``````typescript/* selectionExample.component.ts */public handleRowSelection(args) {
    if (args.added.length && args.added[0] === 3) {
        args.cancel = true;
    }}```### Multiple SelectionTo enable multiple row selection in the [`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) just set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) property to `multiple`. This will enable a row selector field on each row and in the Grid header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the _space_ key when a cell is focused. If you have selected one row and click on another while holding the _shift_ key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you _click_ while holding the _ctrl_ key, the row will be toggled and the previous selection will be preserved.```html<!-- selectionExample.component.html --><igx-grid [data]="remote | async" [primaryKey]="'ProductID'" [rowSelection]="'multiple'"
        (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true" [autoGenerate]="true"></igx-grid>``````ts<!-- selectionExample.component.ts -->

 public handleRowSelection(event: IRowSelectionEventArgs) {
    // use event.newSelection to retrieve primary key/row data of latest selected row
    this.selectedRowsCount = event.newSelection.length;
    this.selectedRowIndex = event.newSelection[0];
 }```**Notes**- In order to have proper row selection and cell selection, while Grid has remote virtualization, a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#primarykey) should be provided.- When the Grid has remote virtualization, then clicking the header checkbox will select/deselect all records that are currently in the grid. When new data is loaded in the Grid on demand, newly added rows will not be selected and it is a limitation, so you should handle that behavior by yourself and you can select these rows by using the provided API methods.- Row selection will trigger [`rowSelectionChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelectionChanging) event. This event gives you information about the _new selection_, _old selection_, the rows that have been _added_ and _removed_ from the old selection. Also the event is _cancellable_, so this allows you to prevent selection.- When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set `[hideRowSelectors] = true`.- When you switch between row selection modes at runtime, this will clear the previous row selection state.## API usage### Select rows programmaticallyThe code snippet below can be used to select one or multiple rows simultaneously (via [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#primaryKey)); Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {```html<!-- selectionExample.component.html --><igx-grid ... [primaryKey]="'ID'">...</igx-grid>...<button (click)="this.grid.selectRows([1,2,5], true)">Select 1,2 and 5</button> // select rows and clear previous selection state```}This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the Grid selection.### Deselect rowsIf you need to deselect rows programmatically, you can use the `deselectRows(rowIds: [])` method.```html<!-- selectionExample.component.html --><igx-grid ... [primaryKey]="'ID'">...</igx-grid>...<button (click)="this.grid.deselectRows([1,2,5])">Deselect 1,2 and 5</button>```### Row selection eventWhen there is some change in the row selection **[`rowSelectionChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelectionChanging)** event is emitted. **`rowSelectionChanging`** exposes the following arguments:- `oldSelection`  - array of row's data that contains the previous state of the row selection.- `newSelection` - array of row's data that match the new state of the row selection.- `added` - array of row's data that are currently added to the selection.- `removed` - array of row's data that are currently removed according old selection state.- `event` - the original event that triggered row selection change.- `cancel` -  allows you the prevent the row selection change.#### Row selection event in remote data scenariosIn remote data scenarios, when the grid has a `primaryKey` set, [`rowSelectionChanging.oldSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IRowSelectionEventArgs.html#oldSelection) event argument will not contain the full row data object for the rows that are currently out of the data view. In this case, `rowSelectionChanging.oldSelection` object will contain only one property, which is the `primaryKey` field. For the rest of the rows, currently in the data view, `rowSelectionChanging.oldSelection` will contain the whole row data.```html<!-- selectionExample.component.html --><igx-grid (rowSelectionChanging)="handleRowSelectionChange($event)">...</igx-grid>``````typescript/* selectionExample.component.ts */public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection}```### Select all rowsAnother useful API method that [`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) provides is `selectAll(onlyFilteredData)`. By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. But if you call the method with _false_ parameter, `selectAll(false)` will always select all data in the grid, even if filtering is applied.>[!NOTE]> Keep in mind that `selectAll()` will not select the rows that are deleted.### Deselect all rows[`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) provides `deselectAll(onlyFilteredData)` method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. But if you call the method with _false_ parameter, `deselectAll(false)` will always clear all row selection state even if filtering is applied.### How to get selected rowsIf you need to see which rows are currently selected, you can get their row IDs with the `selectedRows` getter.```typescriptpublic getSelectedRows() {
    const currentSelection = this.grid.selectedRows; // return array of row IDs}```Additionally, assigning row IDs to `selectedRows` will allow you to change the grid's selection state.```typescriptpublic mySelectedRows = [1, 2, 3]; // an array of row IDs``````html<igx-grid primaryKey="ProductID" rowSelection="multiple" [autoGenerate]="false" [mySelectedRows]="selectedRows" [data]="data">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitsInStock'"></igx-column></igx-grid>```### Row selector templatesYou can template header and row selectors in the Grid and also access their contexts which provide useful functionality for different scenarios.By default, the Grid **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [`rowSelectionChanging` event](#row-selection-event). In case you implement a custom template with a `click` handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.#### Row templateTo create a custom row selector template,  within the `igx-grid`, declare an `<ng-template>` with `igxRowSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.The `selected` property shows whether the current row is selected or not while the `index` property can be used to access the row index.```html<ng-template igxRowSelector let-rowContext>
    {{ rowContext.index }}
    <igx-checkbox
        [checked]="rowContext.selected"
        [readonly]="true"
    ></igx-checkbox></ng-template>```The `rowID` property can be used to get a reference of an `igx-grid` row. This is useful when you implement a `click` handler on the row selector element.```html<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.key)"></igx-checkbox></ng-template>```In the above example we are using an `igx-checkbox` and we bind `rowContext.selected` to its `checked` property. See this in action in our [`Row Numbering Demo`](#row-numbering-demo).### Header templateTo create a custom header selector template, within the Grid, declare an `<ng-template>` with `igxHeadSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.The `selectedCount` property shows you how many rows are currently selected while `totalCount` shows you how many rows there are in the Grid in total.```html<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}</ng-template>```The `selectedCount` and `totalCount` properties can be used to determine if the head selector should be checked or indeterminate (partially selected).```html<igx-grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]=" headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template></igx-grid>```### Row Numbering DemoThis demo shows the usage of custom header and row selectors. The latter uses `rowContext.index` to display row numbers and an `igx-checkbox` bound to `rowContext.selected`.```typescript
import { Component } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-selection-template-numbers',
    styleUrls: ['./grid-sample-selection-template-numbers.component.scss'],
    templateUrl: 'grid-sample-selection-template-numbers.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class GridSelectionTemplateNumbersComponent {
    public data: any[];

    constructor() {
        this.data = [...DATA];
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #myGrid [data]="data" primaryKey="ID" rowSelection="multiple" cellSelection="none" [height]="'510px'" width="100%">
        <igx-paginator></igx-paginator>
        <igx-column field="ContactName" width="20%"></igx-column>
        <igx-column field="Country" width="20%"></igx-column>
        <igx-column field="City" width="20%"></igx-column>
        <igx-column field="PostalCode" width="20%"></igx-column>
        <igx-column field="CompanyName" width="20%"></igx-column>

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
                    [disableRipple]="true" [disableTransitions]="myGrid.disableTransitions">
                </igx-checkbox>
            </div>
        </ng-template>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.header-selector {
    width: 70px;
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
    width: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
}

.row-selector-index {
    width: 35px;
    text-align: center;
}
```<div class="divider--half"></div>### Excel Style Row Selectors DemoThis demo uses custom templates to resemble Excel-like header and row selectors.```typescript
import { Component } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-grid-selection-template-excel',
    styleUrls: ['./grid-sample-selection-template-excel.component.scss'],
    templateUrl: 'grid-sample-selection-template-excel.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, NgClass, IgxRowSelectorDirective]
})

export class GridSelectionTemplateExcelComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #myGrid [data]="data" primaryKey="ID" rowSelection="multiple" cellSelection="none" [height]="'510px'" width="100%">
        <igx-paginator></igx-paginator>
        <igx-column field="ContactName" width="20%"></igx-column>
        <igx-column field="Country" width="20%"></igx-column>
        <igx-column field="City" width="20%"></igx-column>
        <igx-column field="PostalCode" width="20%"></igx-column>
        <igx-column field="CompanyName" width="20%"></igx-column>

        <ng-template igxHeadSelector let-headContext>
            <div class="header-selector" [ngClass]="{
                'excel-style-arrow-all': headContext.selectedCount === headContext.totalCount && headContext.totalCount !== 0,
                'excel-style-arrow': headContext.selectedCount !== headContext.totalCount
            }">
                <i class="material-icons">signal_cellular_4_bar</i>
            </div>
        </ng-template>

        <ng-template igxRowSelector let-rowContext>
            <div class="row-selector">
                <span>{{ rowContext.index + 1 }}</span>
            </div>
        </ng-template>
    </igx-grid>
</div>
```
```scss
@use '../../../variables' as *;

$default-arrow-color: color($color: 'gray', $variant: 400);
$default-arrow-hover-color: color($color: 'gray', $variant: 800);
$default-arrow-all-color: color($color: 'secondary', $variant: 100);

@mixin selector($justify, $align) {
    display: flex;
    justify-content: $justify;
    align-items: $align;
    min-width: 50px;
    cursor: pointer;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.header-selector {
    @include selector(flex-end, flex-end);
    height: 100%;
    padding: 8px;
}

.row-selector {
    @include selector(center, center);
}

::ng-deep {
    .igx-grid__cbx-selection {
        padding: 0;
    }
}

.excel-style-arrow {
    color: $default-arrow-color;
    &:hover {
        color: $default-arrow-hover-color;
    }
}

.excel-style-arrow-all {
    color: $default-arrow-all-color;
}
```<div class="divider--half"></div>### Conditional Selection DemoThis demo prevents some rows from being selected using the `rowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.```typescript
import { Component } from '@angular/core';
import { IRowSelectionEventArgs, IgxColumnComponent, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-conditional-row-selectors',
    styleUrls: ['./grid-conditional-row-selectors-sample.component.scss'],
    templateUrl: 'grid-conditional-row-selectors-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class GridConditionalRowSelectorsComponent {
    public data: any[];
    public disabledCollection: string[] = [];

    constructor() {
        this.data = DATA;
        this.data.filter(dataItem => dataItem.ID.indexOf('A') === -1).map((item) => {
            this.disabledCollection.push(item.ID);
        });
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
    <igx-grid [igxPreventDocumentScroll]="true" [data]="data" height="510px" width="100%" cellSelection="none" primaryKey="ID" rowSelection="multiple" (rowSelectionChanging)="onRowSelect($event)">
        <igx-paginator></igx-paginator>
        <igx-column field="ContactName" width="20%"></igx-column>
        <igx-column field="Country" width="20%"></igx-column>
        <igx-column field="City" width="20%"></igx-column>
        <igx-column field="PostalCode" width="20%"></igx-column>
        <igx-column field="CompanyName" width="20%"></igx-column>

        <ng-template igxRowSelector let-rowContext>
            <div class="row-selector">
                <igx-checkbox [readonly]="true" [checked]="rowContext.selected"
                    [disabled]="!isSelectionAllowed(rowContext.key)"
                    [aria-label]="rowContext.selected ? 'Deselect row' : 'Select row'">
                </igx-checkbox>
            </div>
        </ng-template>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
  margin: 0 auto;
  padding: 16px;
}

.row-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: calc(1.25rem + (1.5rem * 2));
}
```<div class="divider--half"></div>## API References- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)_[IgxGridRow API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Grid overview](grid.md)- [Selection](selection.md)- [Cell selection](cell-selection.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Virtualization and Performance](virtualization.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
