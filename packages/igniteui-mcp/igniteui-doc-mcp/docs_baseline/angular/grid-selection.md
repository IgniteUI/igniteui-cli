---
title: Angular Grid Selection - Ignite UI for Angular
_description: See how easy it is to select data in Ignite UI for Angular grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: data select, igniteui for angular, infragistics
_license: commercial
_tocName: Selection
---
# Angular Grid Selection
With Ignite UI for Angular Grid you can easily select data by using variety of events, rich API or with simple mouse interactions like single select.
## Angular Grid Selection Example
The sample below demonstrates the three types of Grid's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.
<div class="divider--half"></div>
```typescript
import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-cell-selection',
    styleUrls: ['./grid-cellSelection.component.scss'],
    templateUrl: 'grid-cellSelection.component.html',
    imports: [IgxButtonGroupComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent]
})
export class GridCellSelectionComponent implements OnInit {
    private renderer = inject(Renderer2);

    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    @ViewChild('logger') public logger: ElementRef;
    public data: any[];
    public selection = true;
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];

    public ngOnInit(): void {
        this.data = DATA;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }

    public onRangeSelected() {
        const selectedData = JSON.stringify(this.grid.getSelectedData());
        this.logAnEvent(`=> 'rangeSelected' with value: ` + selectedData);
    }

    public onCellSelected(event) {
        this.logAnEvent(`=> 'selected' with value: ` + event.cell.value);
    }

    public clearLog() {
        const  elements = this.logger.nativeElement.querySelectorAll('p');
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
<span class="button-group-wrapper">
  <igx-buttongroup [values]="selectionModes" (selected)="selectCellSelectionMode($event)"></igx-buttongroup>
</span>
<div class="sample-wrapper">
  <div class="grid-wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" [height]="'550px'" [cellSelection]="selectionMode"
      (rangeSelected)="onRangeSelected()"
      (selected)="onCellSelected($event)"
      >
      <igx-column [field]="'ProductID'"></igx-column>
      <igx-column [field]="'ProductName'"></igx-column>
      <igx-column [field]="'UnitsInStock'" [dataType]="'number'"></igx-column>
      <igx-column [field]="'UnitPrice'" [dataType]="'number'"></igx-column>
      <igx-column [field]="'Discontinued'" [dataType]="'boolean'">
      </igx-column>
      <igx-column [field]="'OrderDate'" [dataType]="'date'"></igx-column>
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

<igx-snackbar #snackbar actionText="Got it. Thanks!" (clicked)="snackbar.close()">
  <div class="container">
    <igx-icon>notification_important</igx-icon>
    @if (selectionMode === 'multiple') {
      <ul>
        <li><b>This is the default selection behavior.</b></li>
        <li>Click on a cell and while pressing the mouse key perform drag action.
        </li>
        <li>Select a cell and press Shift + Arrow down key, this will start range selection as well.</li>
      </ul>
    }
    @if (selectionMode === 'single') {
      <ul>
        <li><b>Now you can select only one cell within the grid.</b></li>
        <li>On single cell click the previous selection state will be cleared.</li>
        <li>The mouse drag will not work and instead of selecting a cell, this will make default text selection.</li>
      </ul>
    }
    @if (selectionMode === 'none') {
      <ul>
        <li><b>Now you are unable to select a cell while interacting with grid UI.</b></li>
        <li>If you need to select a cell, you can use the grid API methods.</li>
      </ul>
    }
  </div>
</igx-snackbar>
```
```scss
:host {
    width: 100%;
}

.grid__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 16px;
    flex-flow: column;
    align-items: flex-start;
    position: relative;
}

.button-group-wrapper {
    display: flex;
    margin: 10px;
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
```
<div class="divider--half"></div>
## Angular Grid Selection Options
IgniteUI for Angular Grid component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the Grid. In order to change/enable selection mode you can use [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection), [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) or [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) properties.
### Angular Row Selection
Property [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) enables you to specify the following options:
- none - Row selection would be disabled for the Grid
- single - Selection of only one row within the Grid would be available
- multiple - Multi-row selection would be available by using the `Row selectors`, with a key combination like <kbd>ctrl</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused 
> Go to [Row selection topic](row-selection.md) for more information.
### Angular Cell Selection
Property [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) enables you to specify the following options:
- none - Cell selection would be disabled for the Grid
- single - Selection of only one cell within the Grid would be available.
- multiple - Currently, this is the default state of the selection in the Grid. Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.
> Go to [Cell selection topic](cell-selection.md) for more information.
### Angular Column Selection
The [`selectable` property](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) enables you to specify the following options for each **column**:
- false - the corresponding column selection will be disabled for the Grid
- true - the corresponding column selection will be enabled for the Grid
- This lead to the following three variations:
- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>ctrl</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>shift</kbd> + <kbd>mouse click</kbd> selects everything in between.
> Go to [Column selection topic](column-selection.md) for more information.
## Grid Context Menu
Using the [`contextMenu`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#contextMenu) event you can add a custom context menu to facilitate your work with **IgxGrid**. With a **right click** on the grid's body, the event emits the cell on which it is triggered. The **context menu** will operate with the emitted cell.
If there is a **multi-cell selection**, we will put logic, which will check whether the selected cell is in the area of the multi-cell selection. If it is, we will also emit the values of the selected cells.
Basically the main function will look like this:
```typescript
public rightClick(eventArgs: any) {
     // Prevent the default behavior of the right click
    eventArgs.event.preventDefault();
    this.multiCellArgs = {};
    // If we have multi-cell selection, check if selected cell is within the ranges
    if (this.multiCellSelection) {
        const node = eventArgs.cell.selectionNode;
        const isCellWithinRange = this.grid1.getSelectedRanges().some(range => {
            if (node.column >= range.columnStart &&
                node.column <= range.columnEnd &&
                node.row >= range.rowStart &&
                node.row <= range.rowEnd) {
                return true;
            }
            return false;
        })
        // If the cell is within a multi-cell selection range, bind all the selected cells data
        if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
        }
    }
    // Set the position of the context menu
    this.contextmenuX = eventArgs.event.clientX;
    this.contextmenuY = eventArgs.event.clientY;
    this.clickedCell = eventArgs.cell;
    // Enable the context menu
    this.contextmenu = true;
}
```
The context menu will have the following functions:
- Copy the selected cell's _value_
- Copy the selected cell's _dataRow_
- If the selected cell is within a **multi-cell selection range**, copy all the _selected data_
```typescript
//contextmenu.component.ts
public copySelectedCellData(event) {
    const selectedData = { [this.cell.column.field]: this.cell.value };
    this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
    this.onCellValueCopy.emit({ data: selectedData });
}
public copyRowData(event) {
    const selectedData = this.cell.row.data ;
    this.copyData(JSON.stringify(this.cell.row.data));
    this.onCellValueCopy.emit({ data: selectedData });
}
public copySelectedCells(event) {
    const selectedData = this.selectedCells.data;
    this.copyData(JSON.stringify(selectedData));
    this.onCellValueCopy.emit({ data: selectedData });
}
```
The IgxGrid will fetch the copied data and will paste it in a container element.
The template we are going to use to combine the grid with the context menu:
```html
<div class="wrapper">
    <div class="grid__wrapper" (window:click)="disableContextMenu()">
        <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
            (contextMenu)="rightClick($event)" (rangeSelected)="getCells($event)"
            (selected)="cellSelection($event)">
        <!-- Columns area -->
        </igx-grid>
        <div *ngIf="contextmenu==true">
            <contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell" [selectedCells]="multiCellArgs" (onCellValueCopy)="copy($event)">
            </contextmenu>
        </div>
    </div>
    <div class="selected-data-area">
        <div>
           <pre>{{copiedData}}</pre>
        </div>
    </div>
</div>
```

 Select multiple cells and press the `right mouse` button. The context menu will appear and after selecting `Copy cells data` the selected data will appear in the right empty box.
 The result is:
```typescript
import { Component, OnInit, ViewChild} from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

import { ContextmenuComponent } from './contextmenu/contextmenu.component';

@Component({
    selector: 'app-grid-contextmenu-sample',
    styleUrls: ['./grid-contextmenu-sample.component.scss'],
    templateUrl: './grid-contextmenu-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, ContextmenuComponent]
})

export class GridContextmenuSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data: any[];

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public copiedData;
    public multiCellSelection: { data: any[]} = { data: []};
    public multiCellArgs;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
        this.grid1.sortingExpressions = [
            {
                dir: SortingDirection.Asc, fieldName: 'ProductName',
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public rightClick(eventArgs: any) {
        eventArgs.event.preventDefault();
        this.multiCellArgs = {};
        if (this.multiCellSelection) {
            const node = eventArgs.cell.selectionNode;
            const isCellWithinRange = this.grid1.getSelectedRanges().some((range) => {
                if (node.column >= range.columnStart &&
                    node.column <= range.columnEnd &&
                    node.row >= range.rowStart &&
                    node.row <= range.rowEnd) {
                    return true;
                }
                return false;
            });
            if (isCellWithinRange) {
                this.multiCellArgs = { data: this.multiCellSelection.data };
            }
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;
    }

    public disableContextMenu() {
        if (this.contextmenu) {
            this.multiCellSelection = undefined;
            this.multiCellArgs = undefined;
            this.contextmenu = false;
        }
    }

    public getCells(event) {
        this.multiCellSelection = {
            data: this.grid1.getSelectedData()
        };
    }

    public copy(event) {
        this.copiedData = JSON.stringify(event.data, null, 2);
        if (this.multiCellSelection) {
            this.multiCellSelection = undefined;
            this.multiCellArgs = undefined;
            this.grid1.clearCellSelection();
        }
    }

    public cellSelection(event) {
        this.contextmenu = false;
    }
}
```
```html
<div class="wrapper">
  <div class="grid__wrapper" (window:click)="disableContextMenu()">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
      (contextMenu)="rightClick($event)" (rangeSelected)="getCells($event)"
      (selected)="cellSelection($event)">
      <igx-column field="ProductID" header="Product ID" [headerClasses]="'prodId'">
      </igx-column>
      <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [sortable]="true">
      </igx-column>
      <igx-column field="UnitsInStock" header="UnitsInStock" dataType="number" [sortable]="true">
        <ng-template igxCell let-cell="cell" let-val let-row>
          ${{val}}
        </ng-template>
      </igx-column>
      <igx-column field="OrderDate" [dataType]="'date'" [formatter]="formatDate" [sortable]="true">
      </igx-column>
      <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'">
      </igx-column>
    </igx-grid>
    @if (contextmenu) {
      <div>
        <app-contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell" [selectedCells]="multiCellArgs" (cellValueCopy)="copy($event)">
        </app-contextmenu>
      </div>
    }
  </div>
  <div class="selected-data-area">
    <div>
      <pre>{{copiedData}}</pre>
    </div>
  </div>
</div>
```
```scss
.grid__wrapper{
    width: 50%;
}
.selected-data-area{
    overflow-y: auto;
    max-height: 500px;
    width: 50%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-left: 10px;
}

.wrapper{
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
}
```
<div class="divider--half"></div>
## Known Issues and Limitations
- Using the Grid with Selection enabled on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application. IE11 is no longer supported as of version 13.0.0.

    ```typescript
    import 'core-js/es7/array';
    ```
- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning
## API References
- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
_[IgxGridRow API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)
- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Grid overview](grid.md)
- [Row Selection](row-selection.md)
- [Cell Selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Virtualization and Performance](virtualization.md)
* [Selection-based Aggregates](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/grid/selection-based-aggregates.html)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
