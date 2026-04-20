---
title: Angular Hierarchical Grid Selection - Ignite UI for Angular
_description: See how easy it is to select data in Ignite UI for Angular grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: data select, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/selection
_tocName: Selection
---
# Angular Hierarchical Grid Selection
With Ignite UI for Angular Hierarchical Grid you can easily select data by using variety of events, rich API or with simple mouse interactions like single select.
## Angular Grid Selection Example
The sample below demonstrates the three types of Hierarchical Grid's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.
<div class="divider--half"></div>
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { GridSelectionMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-hierarchical-grid-cell-selection',
    styleUrls: ['./hierarchical-grid-cellSelection.component.scss'],
    templateUrl: 'hierarchical-grid-cellSelection.component.html',
    imports: [IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent, IgxSnackbarComponent, IgxIconComponent]
})
export class HierarchicalGridCellSelectionComponent implements OnInit {
    @ViewChild('hgrid', { static: true }) public hGrid: IgxHierarchicalGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    public data: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModeChild: GridSelectionMode = 'single';
    public selectionModes = [];
    public selectionModesChildren = [];

    constructor() { }

    public ngOnInit(): void {
        this.data = SINGERS;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
        this.selectionModesChildren = [
            { label: 'none', selected: this.selectionModeChild === 'none', togglable: true },
            { label: 'single', selected: this.selectionModeChild === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionModeChild === 'multiple', togglable: true }
        ];
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }

    public selectCellSelectionModeChildGrid(args) {
        this.selectionModeChild = this.selectionModes[args.index].label;
        this.snackbar.open();
    }
}
```
```html
<div class="grid__wrapper">
  <div class="button-group-wrapper">
    <h6>Parent Grid cell selection mode: </h6>
    <igx-buttongroup [values]="selectionModes" (selected)="selectCellSelectionMode($event)"></igx-buttongroup>
  </div>
  <div class="button-group-wrapper">
    <h6>Child Grid cell selection mode: </h6>
    <igx-buttongroup [values]="selectionModesChildren" (selected)="selectCellSelectionModeChildGrid($event)"></igx-buttongroup>
  </div>
  <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hierarchicalGrid [data]="data" [height]="'560px'" [width]="'100%'" [cellSelection]="selectionMode" #hgrid>
    <igx-column field="Artist" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [hasSummary]="true"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [hasSummary]="true"></igx-column>
    <igx-row-island [height]="null" [key]="'Albums'" [cellSelection]="selectionModeChild">
      <igx-column field="Album" [dataType]="'string'"></igx-column>
      <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
      <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
      <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>
</div>

<igx-snackbar #snackbar actionText="Got it. Thanks!" (clicked)="snackbar.close()">
  <div class="container">
    <igx-icon>notification_important</igx-icon>
    <div class="message-container">
      <span>Parent grid:</span>
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
    <div class="message-container">
      <span>Child grid:</span>
      @if (selectionModeChild === 'multiple') {
        <ul>
          <li><b>This is the default selection behavior.</b></li>
          <li>Click on a cell and while pressing the mouse key perform drag action.
          </li>
          <li>Select a cell and press Shift + Arrow down key, this will start range selection as well.
          </li>
        </ul>
      }
      @if (selectionModeChild === 'single') {
        <ul>
          <li><b>Now you can select only one cell within the grid.</b></li>
          <li>On single cell click the previous selection state will be cleared.</li>
          <li>The mouse drag will not work and instead of selecting a cell, this will make default text
          selection.</li>
        </ul>
      }
      @if (selectionModeChild === 'none') {
        <ul>
          <li><b>Now you are unable to select a cell while interacting with grid UI.</b></li>
          <li>If you need to select a cell, you can use the grid API methods.</li>
        </ul>
      }
    </div>
  </div>
</igx-snackbar>
```
```scss
.grid__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 16px;
    flex-flow: column;
    align-items: flex-start;
    position: relative;
}

.button-group-wrapper {
    margin-bottom: 16px;
    > h6 {
        margin-bottom: 4px;
    }
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

.message-container {
    display: flex;
    flex-flow: column;
    > span {
        margin-top: 8px;
        padding-left: 20px;
    }
}
```
<div class="divider--half"></div>
## Angular Grid Selection Options
IgniteUI for Angular Hierarchical Grid component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the Hierarchical Grid. In order to change/enable selection mode you can use [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection), [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) or [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) properties.
### Angular Row Selection
Property [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) enables you to specify the following options:
- none - Row selection would be disabled for the Hierarchical Grid
- single - Selection of only one row within the Hierarchical Grid would be available
- multiple - Multi-row selection would be available by using the `Row selectors`, with a key combination like <kbd>ctrl</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused 
> Go to [Row selection topic](row-selection.md) for more information.
### Angular Cell Selection
Property [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) enables you to specify the following options:
- none - Cell selection would be disabled for the Hierarchical Grid
- single - Selection of only one cell within the Hierarchical Grid would be available.
- multiple - Currently, this is the default state of the selection in the Hierarchical Grid. Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.
> Go to [Cell selection topic](cell-selection.md) for more information.
### Angular Column Selection
The [`selectable` property](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) enables you to specify the following options for each **column**:
- false - the corresponding column selection will be disabled for the Hierarchical Grid
- true - the corresponding column selection will be enabled for the Hierarchical Grid
- This lead to the following three variations:
- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>ctrl</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>shift</kbd> + <kbd>mouse click</kbd> selects everything in between.
> Go to [Column selection topic](column-selection.md) for more information.
## Known Issues and Limitations
- Using the Hierarchical Grid with Selection enabled on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application. IE11 is no longer supported as of version 13.0.0.

    ```typescript
    import 'core-js/es7/array';
    ```
- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning
## API References
- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
_[IgxGridRow API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)
- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Row Selection](row-selection.md)
- [Cell Selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Virtualization and Performance](virtualization.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
