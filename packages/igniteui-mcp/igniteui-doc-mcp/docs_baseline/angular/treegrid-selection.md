---
_tocName: Selection
---
---title: Angular Tree Grid Selection - Ignite UI for Angular_description: See how easy it is to select data in Ignite UI for Angular grid using variety of events, rich API or with simple mouse interactions like single select._keywords: data select, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/selection---# Angular Tree Grid SelectionWith Ignite UI for Angular Tree Grid you can easily select data by using variety of events, rich API or with simple mouse interactions like single select.## Angular Grid Selection ExampleThe sample below demonstrates the three types of Tree Grid's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.<div class="divider--half"></div>```typescript
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
```<div class="divider--half"></div>## Angular Grid Selection OptionsIgniteUI for Angular Tree Grid component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the Tree Grid. In order to change/enable selection mode you can use [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection), [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) or [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) properties.### Angular Row SelectionProperty [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) enables you to specify the following options:- none - Row selection would be disabled for the Tree Grid- single - Selection of only one row within the Tree Grid would be available- multiple - Multi-row selection would be available by using the `Row selectors`, with a key combination like <kbd>ctrl</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused - multipleCascade -  This is a mode for cascading selection, resulting in the selection of all children in the tree below the record that the user selects with user interaction. In this mode a parent's selection state entirely depends on the selection state of its children.> Go to [Row selection topic](row-selection.md) for more information.### Angular Cell SelectionProperty [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) enables you to specify the following options:- none - Cell selection would be disabled for the Tree Grid- single - Selection of only one cell within the Tree Grid would be available.- multiple - Currently, this is the default state of the selection in the Tree Grid. Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.> Go to [Cell selection topic](cell-selection.md) for more information.### Angular Column SelectionThe [`selectable` property](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selectable) enables you to specify the following options for each **column**:- false - the corresponding column selection will be disabled for the Tree Grid- true - the corresponding column selection will be enabled for the Tree Grid- This lead to the following three variations:- Single selection - <kbd>mouse click</kbd> over the column cell.- Multi column selection - holding <kbd>ctrl</kbd> + <kbd>mouse click</kbd> over the column cells.- Range column selection - holding <kbd>shift</kbd> + <kbd>mouse click</kbd> selects everything in between.> Go to [Column selection topic](column-selection.md) for more information.## Known Issues and Limitations- Using the Tree Grid with Selection enabled on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application. IE11 is no longer supported as of version 13.0.0.

    ```typescript
    import 'core-js/es7/array';
    ```- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning## API References- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)_ [IgxTreeGridRow API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Tree Grid overview](tree-grid.md)- [Row Selection](row-selection.md)- [Cell Selection](cell-selection.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Virtualization and Performance](virtualization.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
