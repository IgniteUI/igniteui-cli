---
title: Angular Tree Grid Cell Selection - Ignite UI for Angular
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Grid supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/cell-selection
_tocName: Cell selection
_premium: true
---
# Angular Cell Selection
The selection feature enables rich data select capabilities in the Material UI based Tree Grid. Variety of events and single select actions are available thanks to the powerful API and easy to use methods. The Tree Grid now supports three modes for cell selection, and you can easily switch between them by changing [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) property. You can disable cell selection, you can _select only one cell within the grid_ or to _select multiple cells in the grid_, which is provided as default option.
But let's dive deeper in each of these options.
## Angular Cell Selection Example
The sample below demonstrates the three types of Tree Grid's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.
<div class="divider--half"></div>
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-cell-selection',
    styleUrls: ['./tree-grid-cellSelection.component.scss'],
    templateUrl: 'tree-grid-cellSelection.component.html',
    imports: [IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxSnackbarComponent, IgxIconComponent]
})
export class TreeGridCellSelectionComponent implements OnInit {

    @ViewChild('treegrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;

    public data: any[];
    public selection = true;
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
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
}
```
```html
<div class="grid__wrapper">
  <span class="button-group-wrapper">
    <igx-buttongroup [values]="selectionModes" (selected)="selectCellSelectionMode($event)"></igx-buttongroup>
  </span>
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" [height]="'530px'" [width]="'100%'" primaryKey="ID" foreignKey="ParentID"
    [cellSelection]="selectionMode">
    <igx-column [field]="'ID'"></igx-column>
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Age'" [dataType]="'number'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
    <igx-column [field]="'HireDate'" [dataType]="'boolean'">
    </igx-column>
    <igx-column [field]="'OnPTO'" [dataType]="'date'"></igx-column>
  </igx-tree-grid>
</div>

<igx-snackbar #snackbar actionText="Got it. Thanks!" (clicked)="snackbar.close()">
  <div class="container">
    <igx-icon>notification_important</igx-icon>
    @if (selectionMode === 'multiple') {
      <ul>
        <li><b>This is the default selection behavior.</b></li>
        <li>Click on a cell and while pressing the mouse key perform drag action.
        </li>
        <li>Select a cell and press Shift + Arrow down key, this will start range selection as well.
        </li>
      </ul>
    }
    @if (selectionMode === 'single') {
      <ul>
        <li><b>Now you can select only one cell within the grid.</b></li>
        <li>On single cell click the previous selection state will be cleared.</li>
        <li>The mouse drag will not work and instead of selecting a cell, this will make default text
        selection.</li>
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
.grid__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 16px 24px;
    flex-flow: column;
    align-items: flex-start;
    padding-top: 16px;
    position: relative;
}

.button-group-wrapper {
    margin-bottom: 16px;
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
```
<div class="divider--half"></div>
## Selection types
### Tree Grid Multiple-cell Selection
How to select cells:
- By `Mouse drag` - Rectangular data selection of cells would be performed.
- By `Ctrl key` press + `Mouse drag` - Multiple range selections would be performed. Any other existing cell selection will be persisted.
- Instant multi-cell selection by using Shift key. Select single cell and select another single cell by holding the Shift key. Cell range between the two cells will be selected. Keep in mind that if another second cell is selected while holding `Shift key` the cell selection range will be updated based on the first selected cell position (starting point).
- Keyboard multi-cell selection by using the `Arrow keys` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.
- Keyboard multi-cell selection by using the `Ctrl + Arrow keys` and `Ctrl + Home/End` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.
- Clicking with the `Left Mouse key` while holding `Ctrl key` will add single cell ranges into the selected cells collection.
- Continuous multiple cell selection is available, by clicking with the mouse and dragging.
#### Demo
```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { VerticalAlignment } from 'igniteui-angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-tree-grid-multi-cell-selection-sample',
    styleUrls: ['./tree-grid-multi-cell-selection.component.scss'],
    templateUrl: './tree-grid-multi-cell-selection.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxGridComponent, IgxToastComponent]
})
export class TreeGridMultiCellSelectionComponent {
    public sourceData = ORDERS_DATA;
    public targetData = [];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public transferData(source: IgxTreeGridComponent, target: IgxGridComponent,
                        notification: IgxToastComponent) {
        target.autoGenerate = true;
        target.clearCellSelection();
        this.targetData = source.getSelectedData();
        notification.positionSettings.verticalDirection = VerticalAlignment.Middle;
        notification.displayTime = 1000;
        notification.open(`Transfered ${this.targetData.length} rows`);
    }

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }

    public transferExpressions(source: IgxTreeGridComponent, target: IgxGridComponent) {
        target.sortingExpressions = source.sortingExpressions;
    }
}
```
```html
<div class="wrapper centered">
    <h5>Perform range selection on the Tree Grid to transfer data to the Grid</h5>
</div>
<div class="wrapper">
    <div class="left">
        <igx-tree-grid [igxPreventDocumentScroll]="true"  #source width="100%" (rangeSelected)="transferData(source, target, notification)" (columnInit)="initColumn($event)"
            (sortingDone)="transferExpressions(source, target)"
            [data]="sourceData" height="600px"
            [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID">
            <igx-column field="ID" header="Order ID">
            </igx-column>
            <igx-column field="Name" header="Order Product">
            </igx-column>
            <igx-column field="Units" header="Units" [dataType]="'number'">
            </igx-column>
            <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
            </igx-column>
            <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
            </igx-column>
            <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
            </igx-column>
        </igx-tree-grid>
    </div>
    <div class="right">
        <igx-grid [igxPreventDocumentScroll]="true" #target width="100%" [data]="targetData" height="600px" [autoGenerate]="true"
            (columnInit)="initColumn($event)">
        </igx-grid>
    </div>
</div>
<igx-toast #notification></igx-toast>
```
```scss
.wrapper {
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
}

.centered {
    text-align: center;
}

.left {
    width: 50%;
}

.right {
    width: 50%;
    padding-left: 10px;
}
```
<div class="divider--half"></div>
### Tree Grid Single Selection
When you set the `[cellSelection]="'single'"`, this allows you to have only one selected cell in the grid at a time. Also the mode `mouse drag` will not work and instead of selecting a cell, this will make default text selection.
>[!NOTE]
> When single cell is selected [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selected) event is emitted, no matter if the `selection mode` is `single` or `multiple`. In multi-cell selection mode when you select a range of cells [`rangeSelected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rangeSelected) event is emitted.
### Tree Grid None selection
If you want to disable cell selection you can just set `[cellSelection]="'none'"` property. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the `activation style` is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.
## Keyboard navigation interactions
### While Shift key is pressed
- <kbd>Shift</kbd> + <kbd>Arrow Up</kbd> to add above cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Down</kbd> to add below cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Left</kbd> to add left cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Right</kbd> to add right cell to the current selection.
### While Ctrl + Shift keys are pressed
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Up</kbd> to select all cells above the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Down</kbd> to select all cells below the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Left</kbd> to select all cells till the start of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Right</kbd> to select all cells till the end of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> to select all cells from the focused cell till the first-most cell in the grid
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> to select all cells from the focused cell till the last-most cell in the grid
> [!NOTE]
> Continuous scroll is possible only within Grid's body.
## Api usage
Below are the methods that you can use in order to select ranges, clear selection or get selected cells data.
### Select range
@@if (igxName === 'IgxGrid') {
[`selectRange(range)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selectRange) - Select a range of cells with the API. `rowStart` and `rowEnd` should use row indexes and `columnStart` and `columnEnd` could use column index or column data field value.
}
@@if (igxName === 'IgxTreeGrid') {
[`selectRange(range)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#selectRange) - Select a range of cells with the API. `rowStart` and `rowEnd` should use row indexes and `columnStart` and `columnEnd` could use column index or column data field value.
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`selectRange(range)`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#selectRange) - Select a range of cells with the API. `rowStart` and `rowEnd` should use row indexes and `columnStart` and `columnEnd` could use column index or column data field value.
}
```typescript
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid1.selectRange(range);
...
const range = { rowStart: 0, rowEnd: 2, columnStart: 'Name', columnEnd: 'ParentID' };
this.grid1.selectRange(range);
```
> [!NOTE]
> Select range is additive operation. It will not clear your previous selection.
### Clear cell selection
@@if (igxName === 'IgxGrid') {
[`clearCellSelection()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#clearCellSelection) will clear the current cell selection.
}
@@if (igxName === 'IgxTreeGrid') {
[`clearCellSelection()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#clearCellSelection) will clear the current cell selection.
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`clearCellSelection()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#clearCellSelection) will clear the current cell selection.
}
### Get selected data
@@if (igxName === 'IgxGrid') {
[`getSelectedData()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:
}
@@if (igxName === 'IgxTreeGrid') {
[`getSelectedData()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`getSelectedData()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:
}
1. If three different single cells are selected:

    ```
    expectedData = [
        { CompanyName: 'Infragistics' },
        { Name: 'Michael Langdon' },
        { ParentID: 147 }
    ];
    ```
2. If three cells from one column are selected:

    ```
    expectedData = [
        { Address: 'Obere Str. 57'},
        { Address: 'Avda. de la Constitución 2222'},
        { Address: 'Mataderos 2312'}
    ];
    ```
3. If three cells are selected with mouse drag from one row and three columns:

    ```
    expectedData = [
        { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
    ];
    ```
4. If three cells are selected with mouse drag from two rows and three columns:

    ```
    expectedData = [
        { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
        { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
    ];
    ```
5. If two different ranges are selected:

    ```
    expectedData = [
        { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
        { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
        { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
        { Address: 'Fauntleroy Circus', City: 'London'}
    ];
    ```
6. If two overlapping ranges are selected, the format would be:

    ```
    expectedData = [
        { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
        { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
        { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
        { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
    ];
    ```
@@if (igxName === 'IgxGrid') {
> [!NOTE]
> [`selectedCells()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selectedCells) will return cells from all visible rows (rows in the grid's view port) and from all columns, including columns that are out of view. [`getSelectedData()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#getSelectedData) will also return the selected cell data.
> [`getSelectedRanges(): GridSelectionRange[]`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#getSelectedRanges) will return the current selected ranges in the grid from both keyboard and pointer interactions. The type is GridSelectionRange[].
}
@@if (igxName === 'IgxTreeGrid') {
> [!NOTE]
> [`selectedCells()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#selectedCells) will return cells from all visible rows (rows in the grid's view port) and from all columns, including columns that are out of view. [`getSelectedData()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#getSelectedData) will also return the selected cell data.
> [`getSelectedRanges(): GridSelectionRange[]`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#getSelectedRanges) will return the current selected ranges in the grid from both keyboard and pointer interactions. The type is GridSelectionRange[].
}
@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> [`selectedCells()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#selectedCells) will return cells from all visible rows (rows in the grid's view port) and from all columns, including columns that are out of view. [`getSelectedData()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#getSelectedData) will also return the selected cell data.
> [`getSelectedRanges(): GridSelectionRange[]`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#getSelectedRanges) will return the current selected ranges in the grid from both keyboard and pointer interactions. The type is GridSelectionRange[].
}
## Features integration
The multi-cell selection is index based (DOM elements selection).
- `Sorting` - When sorting is performed selection will not be cleared. It will leave currently selected cells the same while sorting ascending or descending.
- `Paging` - On paging selected cells will be cleared. Selection wont be persisted across pages.
- `Filtering` - When filtering is performed selection will not be cleared. If filtering is cleared it will return - the initially selected cells.
- `Resizing` - On column resizing selected cells will not be cleared.
- `Hiding` - It will not clear the selected cells. If column is hidden, the cells from the next visible column will be selected.
- `Pinning` - Selected cell will not be cleared. Same as hiding
- `Group by` - On column grouping selected cells will not be cleared.
## Styling
The theme engine exposes properties that allow us to style the **range of selected cells**.
### Import theme
To get started with styling the selection, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
### Define colors
Once done, we can make use of the [`contrast-color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-contrast-color) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. With them, we define the colors we would like to use for our selection range:
```scss
$text-color: contrast-color($color: 'primary', $variant: 900);
$background-color: color($color: "primary", $variant: 900);
$border-yellow: #f2c43c;
```
>[!NOTE]
>If we don't want to use the `contrast-color` and `color` functions, we can always hardcode the color values.
### Create custom theme
Next we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) passing our `text-color`, `background-color` and `border-yellow` variables as `$cell-selected-text-color`, `$cell-selected-background` and `$cell-active-border-color`, respectively:
```scss
$custom-grid-theme: grid-theme(
  $cell-selected-text-color: $text-color,
  $cell-active-border-color: $border-yellow,
  $cell-selected-background: $background-color
);
```
### Apply theme
Afterwards, all we need to do is include the mixin in our component's style (could also be in the app styles), so that our igx-tree-grid uses the newly created theme instead of the default one:
```scss
:host {
  @include tokens($custom-grid-theme);
}
```
With the custom theme applied, the selected grid cells are highlighted with our selected colors:
### Demo
```typescript
import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-cell-selection-style-sample',
    styleUrls: ['./tree-grid-multi-cell-selection-style.component.scss'],
    templateUrl: './tree-grid-multi-cell-selection-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridMultiCellSelectionStyleComponent {
    public sourceData = ORDERS_DATA;

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }
}
```
```html
<div class="wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #source width="100%" [data]="sourceData" height="600px" [autoGenerate]="false" primaryKey="ID"
        foreignKey="ParentID">
        <igx-column field="ID" header="Order ID">
        </igx-column>
        <igx-column field="Name" header="Order Product">
        </igx-column>
        <igx-column field="Units" header="Units" [dataType]="'number'">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
        </igx-column>
        <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
        </igx-column>
        <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$text-color: contrast-color($color: 'primary', $variant: 900);
$background-color: color($color: "primary", $variant: 900);
$border-yellow: #f2c43c;

$custom-grid-theme: grid-theme(
  $cell-selected-text-color: $text-color,
  $cell-active-border-color: $border-yellow,
  $cell-selected-background: $background-color,
);

:host {
  @include tokens($custom-grid-theme);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## API References
- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
_ [IgxTreeGridRow API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Selection](selection.md)
- [Row selection](row-selection.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
