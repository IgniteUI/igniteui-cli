---
title: Row Pinning in Angular Tree Grid - Ignite UI for Angular
_description: Use the Angular Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: lock row, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/row-pinning
_tocName: Row Pinning
_premium: true
---
# Angular Tree Grid Row Pinning
One or multiple rows can be pinned to the top or bottom of the Angular UI Grid. **Row Pinning** in Ignite UI for Angular allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the Tree Grid vertically. The Material UI Grid has a built-in row pinning UI, which is enabled by initializing an `igxActionStrip` component in the context of Tree Grid. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.
## Angular Tree Grid Row Pinning Example
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IPinningConfig, IgxColumnComponent, IgxGridEditingActionsComponent, IgxGridPinningActionsComponent, RowPinningPosition } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-row-pinning',
    styleUrls: ['tree-grid-row-pinning.component.scss'],
    templateUrl: 'tree-grid-row-pinning.component.html',
    imports: [IgxSwitchComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxGridEditingActionsComponent]
})
export class TreeGridRowPinningSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true })
    public treeGrid: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', dataType: 'string' },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date' }
        ];

        this.treeGrid.pinRow(this.data[0].ID);
        this.treeGrid.pinRow(this.data[3].ID);
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}
```
```html
<div class="switches">
  <igx-switch (change)='changePinningPosition()' style="padding-left: 20px"> Bottom Row Pinning toggle</igx-switch>
</div>

<div class="grid-container">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid1 [pinning]="pinningConfig" #treegrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [width]="'100%'" [height]="'520px'" [cellSelection]="'none'" [rowEditable]="true">
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [dataType]="c.dataType" [header]="c.label">
      </igx-column>
    }
    <igx-action-strip #actionStrip1>
      <igx-grid-pinning-actions></igx-grid-pinning-actions>
      <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
  </igx-tree-grid>
</div>
```
```scss
.grid-container {
    display: flex;
    padding: 20px;
}

.switches {
    margin-top: 24px;
}
```
## Row Pinning UI
The built-in row pinning UI is enabled by adding an `igxActionStrip` component with the `GridPinningActions` component. The action strip is automatically shown when hovering a row and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.
```html
<igx-tree-grid [data]="data" [autoGenerate]="false">
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```
## Row Pinning API
Row pinning is controlled through the `pinned` input of the [`row`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/rowtype.html). Pinned rows are rendered at the top of the Tree Grid by default and stay fixed through vertical scrolling of the unpinned rows in the Tree Grid body.
```typescript
this.treeGrid.getRowByIndex(0).pinned = true;
```
You may also use the Tree Grid's [`pinRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#pinRow) or [`unpinRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#unpinRow) methods of the [`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) to pin or unpin records by their ID:
```typescript
this.treeGrid.pinRow('ALFKI');
this.treeGrid.unpinRow('ALFKI');
```
Note that the row ID is the primary key value, defined by the [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#primaryKey) of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.
A row is pinned below the last pinned row. Changing the order of the pinned rows can be done by subscribing to the [`rowPinning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowPinning) event and changing the [`insertAtIndex`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipinroweventargs.html#insertAtIndex) property of the event arguments to the desired position index.
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (rowPinning)="rowPinning($event)">
</igx-tree-grid>
```
```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```
## Pinning Position
You can change the row pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#pinning) configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-tree-grid>
```
```typescript
public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Bottom };
```
## Custom Row Pinning UI
You can define your custom UI and change the pin state of the rows via the related API.
### Via extra column with icon
Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column width="70px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igx-column>
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
</igx-tree-grid>
```
On click of the custom icon the pin state of the related row can be changed using the row's API methods.
```typescript
public togglePinning(row: IgxGridRow, event) {
    event.preventDefault();
    if (row.pinned) {
        row.unpin();
    } else {
        row.pin();
    }
}
```
#### Demo
```typescript
import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IPinningConfig, IgxCellTemplateDirective, IgxColumnComponent, RowPinningPosition, RowType } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { icons } from '../../services/svgIcons';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


const FILTERING_ICONS_FONT_SET = 'filtering-icons';

@Component({
    selector: 'app-tree-grid-row-pinning-extra-column',
    styleUrls: ['tree-grid-row-pinning-extra-column.component.scss'],
    templateUrl: 'tree-grid-row-pinning-extra-column.component.html',
    imports: [IgxSwitchComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent]
})
export class TreeGridRowPinningExtraColumnSampleComponent implements OnInit, AfterViewInit {
    private iconService = inject(IgxIconService);


    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', dataType: 'string' },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date' }
        ];
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === 'pin' || icon.name === 'unpin');
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public togglePinning(row: RowType, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}
```
```html
<div class="switches">
  <igx-switch (change)='changePinningPosition()' style="padding-left: 20px"> Bottom Row Pinning toggle</igx-switch>
</div>

<div class="grid-container">
  <igx-tree-grid [igxPreventDocumentScroll]="true" [pinning]="pinningConfig" #treegrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [width]="'100%'" [height]="'520px'" [cellSelection]="'none'">
    <igx-column width='70px' [pinned]="true">
      <ng-template igxCell let-cell="cell" let-val>
        <igx-icon class="pin-icon" family="filtering-icons" name="{{cell.row.pinned ? 'unpin' : 'pin'}}"
          (mouseup)="togglePinning(cell.row, $event)">
        </igx-icon>
      </ng-template>
    </igx-column>
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [dataType]="c.dataType" [header]="c.label">
      </igx-column>
    }
  </igx-tree-grid>
</div>
```
```scss
.grid-container {
    display: flex;
    padding: 20px;
}

.pin-icon {
    cursor: pointer;
    color: #999;
}

.pin-icon:hover {
    color: #444
}

.switches {
    margin-top: 24px;
}
```
## Row Pinning Limitations
- Only records that exist in the data source can be pinned.
- The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied.
- Because of how pinned rows are stored internally so that they may appear both in the pinned and unpinned areas of the grid, row pinning is not supported when records in the grid are fetched from a remote endpoint on demand (remote virtualization).
- The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
- As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vise versa). Additionally, range selection (e.g. using Shift + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.
- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning
<div class="divider--half"></div>
## Styling
The IgxTreeGrid allows styling through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The Tree Grid's [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the Tree Grid.
Below, we are going through the steps of customizing the Tree Grid's row pinning styling.
### Importing the Styling Library
To begin the customization of the row pinning feature, you need to import the `index` file, where all styling functions and mixins are located.
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
### Defining a Theme
Next, create a new theme, that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the parameters, required to customize the row pinning feature as desired.
```scss
$custom-grid-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f
);
```
### Using CSS variables
The last step is to pass the custom grid theme:
```scss
:host {
  @include tokens($custom-grid-theme);
}
```
### Demo
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IPinningConfig, IgxColumnComponent, IgxGridPinningActionsComponent, RowPinningPosition } from 'igniteui-angular/grids/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-row-pinning-styling',
    styleUrls: ['tree-grid-row-pinning-styling.component.scss'],
    templateUrl: 'tree-grid-row-pinning-styling.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent]
})
export class TreeGridRowPinningStylingSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true })
    public treeGrid: IgxTreeGridComponent;

    public data: IEmployee[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', dataType: 'string' },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date' }
        ];

        this.treeGrid.pinRow(this.data[0].ID);
        this.treeGrid.pinRow(this.data[3].ID);
    }
}
```
```html
<div class="grid-container">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid1 [pinning]="pinningConfig" #treegrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [width]="'100%'" [height]="'510px'" [cellSelection]="'none'">
    @for (c of columns; track c) {
      <igx-column [field]="c.field" [dataType]="c.dataType" [header]="c.label">
      </igx-column>
    }
    <igx-action-strip #actionStrip1>
      <igx-grid-pinning-actions></igx-grid-pinning-actions>
    </igx-action-strip>
  </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f
);

:host {
  @include tokens($custom-theme);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## API References
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)
- [IgxTreeGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridrow.html)
- [IgxHierarchicalGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridrow.html)
- [RowType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/RowType.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
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
