---
title: Angular Grid Multi-row Layout - Ignite UI for Angular
description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Angular Data Grid. Check out examples and demos!
keywords: angular multi-row layout, material row layout, ignite ui for angular
license: commercial
llms:
  description: "Multi-row Layout extends the rendering capabilities of the igxGridComponent."
_tocName: Multi-row Layout
_premium: true
---
# Angular Multi-row Layout

Multi-row Layout extends the rendering capabilities of the `igxGridComponent`. The feature allows splitting a single data record into multiple visible rows.

## Angular Multi-row Layout Example

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxColumnLayoutComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-multi-row-layout-sample',
    styleUrls: ['./grid-multi-row-layout.component.scss'],
    templateUrl: './grid-multi-row-layout.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnLayoutComponent, IgxColumnComponent]
})
export class GridMultiRowLayoutComponent {

    public sourceData = DATA;
    public group = [
        {
            dir: SortingDirection.Asc,
            fieldName: 'Country',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
    ];
    public sort = [
        {
            dir: SortingDirection.Desc,
            fieldName: 'CompanyName',
            ignoreCase: true
        }
    ];
}
```
```html
<div class="wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid
        [width]="'100%'"
        height="720px"
        [data]="sourceData"
        [autoGenerate]="false"
        [groupingExpressions]="group"
        [sortingExpressions]="sort"
        [allowFiltering]="true">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column-layout [pinned]="true" [header]="'ID'">
            <igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID" [filterable]="false" [width]="'150px'"></igx-column>
        </igx-column-layout>
        <igx-column-layout [pinned]="true" [header]="'Contact Details'">
            <igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName" [header]="'Company Name'" [sortable]="true" [width]="'350px'"></igx-column>
            <igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName" [header]="'Contact Name'" [groupable]="true"></igx-column>
            <igx-column [rowEnd]="3" [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle" [header]="'Contact Title'" [groupable]="true"></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Address Details'">
            <igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country" [groupable]="true" [filterable]="false" [width]="'220px'"></igx-column>
            <igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region" [groupable]="true" [filterable]="false" [width]="'220px'"></igx-column>
            <igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode" [header]="'Postal Code'" [groupable]="true" [filterable]="false" [width]="'220px'"></igx-column>
            <igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City" [groupable]="true" [filterable]="false"></igx-column>
            <igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address" [filterable]="false"></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Phone Details'">
                <igx-column [rowStart]="1" [colStart]="1" [colEnd]="2" field="Phone" [filterable]="false" [width]="'220px'"></igx-column>
                <igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="Fax" [filterable]="false"></igx-column>
            </igx-column-layout>
    </igx-grid>
</div>
```
```scss
.wrapper {
    --ig-size: var(--ig-size-medium);
    padding: 16px;
}
```

The declaration of Multi-row Layout is achieved through [`igx-column-layout`](mcp:get_api_reference?platform=angular&component=IgxColumnLayoutComponent) component. Each `igx-column-layout` component should be considered as a block, containing one or multiple `igx-column` components. Some of the grid features work on block level (those are listed in the "Feature Integration" section below). For example the virtualization will use the block to determine the virtual chunks, so for better performance split the columns into more `igx-column-layout` blocks if the layout allows it. There should be no columns outside of those blocks and no usage of `IgxColumnGroupComponent` when configuring a multi-row layout. Multi-row Layout is implemented on top of the [grid layout](https://www.w3.org/TR/css-grid-1/) specification and should conform to its requirements.

`IgxColumnComponent` exposes four `@Input` properties to determine the location and span of each cell:

- [`colStart`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=colStart) - column index from which the field is starting. This property is **mandatory**.
- [`rowStart`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=rowStart) - row index from which the field is starting. This property is **mandatory**.
- [`colEnd`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=colEnd) - column index where the current field should end. The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field. This property is **optional**. If not set defaults to `colStart + 1`.
- [`rowEnd`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=rowEnd) - row index where the current field should end. The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field. This property is **optional**. If not set defaults to `rowStart + 1`.

```html
<igx-column-layout>
 <igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID"></igx-column>
</igx-column-layout>
<igx-column-layout>
 <igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName"></igx-column>
 <igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName"></igx-column>
 <igx-column [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle"></igx-column>
</igx-column-layout>
<igx-column-layout>
 <igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country"></igx-column>
 <igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region"></igx-column>
 <igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode"></igx-column>
 <igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City"></igx-column>
 <igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address"></igx-column>
</igx-column-layout>
<igx-column-layout>
    <igx-column [rowStart]="1" [colStart]="1" field="Phone"></igx-column>
    <igx-column [rowStart]="2" [colStart]="1" field="Fax"></igx-column>
</igx-column-layout>
```

The result of the above configuration can be seen on the screenshot below:

**Note:** 
[`rowStart`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=rowStart) and [`colStart`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=colStart) properties must be set for each `igx-column` into `igx-column-layout`. The `igxColumnLayout` component is not verifying if the layout is correct and not throwing errors or warnings about that. The developers must make sure that the declaration of their layout is correct and complete, otherwise they may end up in broken layout with misalignments, overlaps and browser inconsistencies.

## Feature Integration

Due to the completely different rendering approach of Multi-row Layout, some of the column features will work only on `igx-column-layout` component. Such features are Column Pinning and Column Hiding. Others like - Sorting and Grouping will work in the same way - on `igx-column` component.

- Filtering - only Excel Style Filtering is supported. Setting `filterMode` explicitly to `FilterMode.quickFilter` has no effect.
- Paging - works on records, not visual rows.
- Group By - `hideGroupedColumns` option has no effect in Multi-row Layout. The grouped columns are always visible.

The following features are currently **not** supported:

- Column Moving
- Multi-column Headers
- Export to Excel
- Summaries

## Keyboard Navigation

IgxGridComponent with Multi-Row Layouts provides build-in keyboard navigation.

### Horizontal navigation

- <kbd>Arrow Left</kbd> or <kbd>Arrow Right</kbd> - move to the adjacent cell on the left/right within the current row unaffected by the column layouts that are defined. If the current cell spans on more than one row, <kbd>Arrow Left</kbd> and <kbd>Arrow Right</kbd> should navigate to the first cell on the left and right with the same `rowStart`, unless you have navigated to some other adjacent cell before. The navigation stores the starting navigation cell and navigates to the cells with the same `rowStart` if possible.
- <kbd>Ctrl</kbd> + <kbd>Arrow Left</kbd> (<kbd>HOME</kbd>) or <kbd>Ctrl</kbd> + <kbd>Arrow Right</kbd> (<kbd>END</kbd>) - navigate to the start or end of the row and select the cell with accordance to the starting navigation cell.

### Vertical navigation

- <kbd>Arrow Up</kbd> or <kbd>Arrow Down</kbd> - move to the cell above/below in relation to a starting position and is unaffected by the rows. If the current cell spans on more than one column the next active cell will be selected with accordance to the starting navigation cell.
- <kbd>Ctrl</kbd> + <kbd>Arrow Up</kbd> or <kbd>Ctrl</kbd> + <kbd>Down</kbd> - Navigate and apply focus on the same column on the first or on the last row.
- <kbd>Ctrl</kbd> + <kbd>Home</kbd> or <kbd>Ctrl</kbd> + <kbd>End</kbd> - Navigate to the first row and focus first cell or navigate to the last row and focus the last cell.

**Note:** 
Navigation through cells which span on multiple rows or columns is done with accordance to the starting navigation cell and will allow returning to the starting cell using the key for the opposite direction. The same approach is used when navigating through group rows.

**Note:** 
Selection and multi cell selection are working on layout, meaning that when a cell is active, its layout will be selected. Also all features of multiple selection like drag selection are applicable and will work per layout not per cell.

### Custom Keyboard Navigation

The grid allows customizing the default navigation behavior when a certain key is pressed. Actions like `going to the next cell` or `cell below` could be handled easily with the powerful keyboard navigation API:

- [`gridKeydown`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=gridKeydown) is exposed. The event will emit [`IgxIGridKeydownEventArgs`](mcp:get_api_reference?platform=angular&component=IGridKeydownEventArgs). This event is available only through the keyboard key combinations mentioned above, for all other key actions you can use `keydown` event `(keydown)="onKeydown($event)"`
- [`navigateTo`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=navigateTo) - this method allows you to navigate to a position based on provided `rowindex` and `visibleColumnIndex`

The demo below adds additional navigation down/up via the <kbd>Enter</kbd> and <kbd>Shift</kbd> + <kbd>Enter</kbd> keys, similar to the behavior observed in Excel.

### Demo

```typescript
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxColumnLayoutComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/company-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-mrl-custom-navigation-sample',
    styleUrls: ['./grid-mrl-custom-navigation.component.scss'],
    templateUrl: './grid-mrl-custom-navigation.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnLayoutComponent, IgxColumnComponent]
})
export class GridMRLCustomNavigationComponent {
    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;

    public sourceData = DATA;

    public customNavigation(args) {
        const target = args.target;
        if (args.event.key.toLowerCase() === 'enter') {
            args.event.preventDefault();
            args.cancel = true;
            const rowIndex = target.row.index === undefined ? target.index : target.row.index;
            this.grid.navigateTo(args.event.shiftKey ? rowIndex - 1 : rowIndex + 1, target.column.visibleIndex,
                 (obj) => {
                    obj.target.activate();
                });
        }
    }
}
```
```html
<div class="wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid
        [width]="'100%'"
        height="570px"
        [data]="sourceData"
        [autoGenerate]="false"
        (gridKeydown)="customNavigation($event)">
        <igx-column-layout [header]="'Company'">
            <igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="company" header='Company'></igx-column>
            <igx-column [rowStart]="2" [colStart]="1"field="country" header='Country'></igx-column>
            <igx-column [rowStart]="2" [colStart]="2" field="city" header='City'></igx-column>
            <igx-column [rowStart]="3" [colStart]="1" [colEnd]="3" field="address" header='Address'></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Sales'">
            <igx-column [rowStart]="1" [rowEnd]='3' [colStart]="1" [colEnd]="3" field="sales_lifetimeSales" header='Lifetime Sales'></igx-column>
            <igx-column [rowStart]="3" [colStart]="1" field="sales_quarterlySales" header='Quarterly'></igx-column>
            <igx-column [rowStart]="3" [colStart]="2" field="sales_yearlySales" header='Yearly'></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Market Potential'">
            <igx-column [rowStart]="1" [rowEnd]='4' [colStart]="1" field="sales_marketPotential" header='Market Potential'></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Assets'">
            <igx-column [rowStart]="1" [colStart]="1" field="assets_cash" header='Assets Cash'></igx-column>
            <igx-column [rowStart]="1" [colStart]="2" [colEnd]="4" field="assets_accRec" header='Accounts Receivable'></igx-column>
            <igx-column [rowStart]="2" [rowEnd]='4' [colStart]="1" [colEnd]="4" field="assets_books" header='Assets Books'></igx-column>
        </igx-column-layout>
    </igx-grid>
</div>
```
```scss
.wrapper {
    --ig-size: var(--ig-size-medium);
    padding: 16px;
}
```

## Layout Configurator

Sometimes when configuring a column layout it might be a challenge to calculate and set the proper [`colStart`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=colStart)  and [`colEnd`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=colEnd)  or [`rowStart`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=rowStart)  and [`rowEnd`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=rowEnd). Especially when there are a lot of columns in a single layout. That is why we have created a small configurator, so you can easily do that and have a similar preview of how it would look inside the igxGrid when applied. You can do the following interactions with it:

- Set number of rows for the whole configuration. All layouts must have the same amount of rows.
- Add/Remove column layouts by clicking the `Add Layout` chip or reordering them by dragging a layout chip left/right.
- Set specific settings for each layout as number of columns and how wide they will be. The setting refer to the currently selected layout.
- Resize column cells in the layout preview so they can span more columns/rows or clear them using the `Delete` button.
- Set columns in the preview by dragging a column chip in the place your will want it to be.
- Add/Remove new columns by using the `Add Column` chip.
- Get template output of the whole configuration ready to by placed inside an igxGrid or the JSON representation that can also be used and parsed in your template using [`NgForOf`](https://angular.io/api/common/NgForOf) for example.

By default we have set the same columns as our previous sample, but it can be cleared and configured to match your desired configuration.

```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewEncapsulation, DOCUMENT, inject } from "@angular/core";
import { IDropBaseEventArgs, IDropDroppedEventArgs, IgxButtonDirective, IgxDropDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { NgStyle, NgClass } from "@angular/common";

interface IColumnConfig {
    key: string;
    width: string;
    colStart: number;
    rowStart: number;
    colSpan: number;
    rowSpan: number;
    selected: boolean;
    hovered: boolean;
}

interface IBlockConfig {
    key: string;
    colsCount: number;
    colsWidth: number;
    collection: IColumnConfig[][];
}

// eslint-disable-next-line no-shadow
enum DialogType {
    Template = 0,
    JSON = 1
}

// tslint:disable:object-literal-sort-keys
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-multi-row-layout-configuration-sample",
    styleUrls: ["./grid-multi-row-layout-configuration.component.scss"],
    templateUrl: "./grid-multi-row-layout-configuration.component.html",
    imports: [IgxChipsAreaComponent, IgxChipComponent, IgxSuffixDirective, IgxIconButtonDirective, IgxIconComponent, IgxPrefixDirective, IgxInputGroupComponent, IgxInputDirective, NgStyle, IgxDropDirective, NgClass, IgxButtonDirective, IgxDialogComponent]
})
export class GridMultiRowLayoutConfigurationComponent {
    cdr = inject(ChangeDetectorRef);
    private document = inject<Document>(DOCUMENT);


    @ViewChild("resultDialog", { read: IgxDialogComponent, static : true })
    public resultDialog: IgxDialogComponent;

    @ViewChild("textArea", { read: ElementRef, static : true })
    public textArea: ElementRef;

    @ViewChild("grid", { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;

    @ViewChildren("gridCell", { read: ElementRef })
    public gridCells: QueryList<ElementRef>;

    @ViewChild("resizeIndicator", { read: ElementRef, static : true })
    public resizeIndicator: ElementRef;

    @ViewChild("layoutContainer", { read: ElementRef, static : true })
    public layoutContainer: ElementRef;

    public get layoutScrollTop() {
        if (this.layoutContainer) {
            return this.layoutContainer.nativeElement.scrollTop;
        }
        return 0;
    }

    public get layoutScrollLeft() {
        if (this.layoutContainer) {
            return this.layoutContainer.nativeElement.scrollLeft;
        }
        return 0;
    }

    public collection: IColumnConfig[][] = [];
    public gridCollection = [];
    public jsonCollection = "";
    public cellSelected;
    public resizeVisible = false;
    public resizeTop;
    public resizeLeft;
    public resizeWidth = 0;
    public resizeHeight = 0;

    public dialogType = DialogType.JSON;
    public rowsCount = 2;
    public rowsHeight = 40;
    public selectedBlock;
    public blocks: IBlockConfig[] = [];

    public columnsList = [
        { field: "Company Name", key: "CompanyName" },
        { field: "Contact Name", key: "ContactName" },
        { field: "Contact Title", key: "ContactTitle" },
        { field: "City", key: "City" },
        { field: "Country", key: "Country" },
        { field: "Address", key: "Address" },
        { field: "Region", key: "Region" },
        { field: "Postal Code", key: "PostalCode" }
    ];
    public columnsConfiguration;

    public data = [
    ];

    private dragStarted = false;
    private dragStartX;
    private dragStartY;

    private curResizedCell;
    private colSpanIncrease = 0;
    private rowSpanIncrease = 0;
    private resizeInitialWidth = 0;
    private resizeInitialHeight = 0;

    constructor() {
        const newCollection1 = [
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "ID", rowSpan: 2, rowStart: 1, selected: false,
                  width: "" }
            ],
            []
        ];
        this.blocks.push({
            collection: newCollection1,
            colsCount: 1,
            colsWidth: 136,
            key: "ID"
        });

        const newCollection2 = [
            [
                { colSpan: 2, colStart: 1, hovered: false, key: "CompanyName", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" }
            ],
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "ContactName", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" },
                { colSpan: 1, colStart: 2, hovered: false, key: "ContactTitle", rowSpan: 1, rowStart: 2,
                  selected: false, width: "" }
            ]
        ];
        this.blocks.push({
            collection: newCollection2,
            colsCount: 2,
            colsWidth: 136,
            key: "Contact Details"
        });

        const newCollection3 = [
            [
                { colSpan: 2, colStart: 1, hovered: false, key: "Country", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" },
                { colSpan: 2, colStart: 3, hovered: false, key: "Region", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" },
                { colSpan: 2, colStart: 5, hovered: false, key: "PostalCode", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" }
            ],
            [
                { colSpan: 3, colStart: 1, hovered: false, key: "City", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" },
                { colSpan: 3, colStart: 4, hovered: false, key: "Address", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" }
            ]
        ];
        this.blocks.push({
            collection: newCollection3,
            colsCount: 6,
            colsWidth: 136,
            key: "Address Details"
        });

        const newCollection4 = [
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "Phone", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" }
            ],
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "Fax", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" }
            ]
        ];
        this.blocks.push({
            collection: newCollection4,
            colsCount: 1,
            colsWidth: 136,
            key: "Phone Details"
        });

        this.selectedBlock = this.blocks[0];
    }

    public getLayoutRowStyle(blockIndex) {
        let style = "";
        this.blocks[blockIndex].collection.forEach(() => {
                style += " " + this.rowsHeight + "px";
        });
        return style;
    }

    public getLayoutColsStyle(blockIndex) {
        let style = "";
        this.blocks[blockIndex].collection[0].forEach((col) => {
            for (let i = 0; i < col.colSpan; i++) {
                style += " " + this.blocks[blockIndex].colsWidth + "px";
            }
        });
        return style;
    }

    public resetCollections() {
        const newCollection = [];
        for (let rowIndex = 0; rowIndex < this.rowsCount; rowIndex++) {
            const row = [];
            for (let colIndex = 0; colIndex < this.selectedBlock.colsCount; colIndex++) {
                row.push({
                    colSpan: 1,
                    colStart: colIndex + 1,
                    key: "",
                    rowSpan: 1,
                    rowStart: rowIndex + 1,
                    width: ""
                });
            }

            newCollection.push(row);
        }
        this.selectedBlock.collection = newCollection;
    }

    public updateCollectionLayout(blockIndex = 0) {
        for (const record of this.blocks[blockIndex].collection) {
            let column = record[0];
            for (let colIndex = 1; colIndex < record.length; colIndex++) {
                if (record[colIndex].key === column.key &&
                        record[colIndex].key !== "") {
                    column.colSpan += record[colIndex].colSpan;
                    record.splice(colIndex, 1);
                    colIndex--;
                } else {
                    column = record[colIndex];
                }
            }
        }
    }

    public rowCountChanged(event) {
        const newRowsCount = parseInt(event.target.value, 10);
        if (newRowsCount <= 0 || !newRowsCount) {
            return;
        }

        if (newRowsCount > this.rowsCount) {
            const rowStart = this.rowsCount + 1;
            this.blocks.forEach((block) => {
                for (let i = 0; i < newRowsCount - this.rowsCount; i++) {
                    const row = [];

                    for (let colIndex = 0; colIndex < block.colsCount; colIndex++) {
                        row.push({
                            colSpan: 1,
                            colStart: colIndex + 1,
                            key: "",
                            rowSpan: 1,
                            rowStart: rowStart + i,
                            width: ""
                        });
                    }

                    block.collection.push(row);
                }
            });
        } else if (newRowsCount < this.rowsCount) {
            this.blocks.forEach((block) => {
                let rowsToRemove = this.rowsCount - newRowsCount;
                for (let rowIndex = block.collection.length - 1; rowIndex >= 0; rowIndex--) {
                    if (rowsToRemove > 0) {
                        block.collection.pop();
                        rowsToRemove--;
                    } else {
                        block.collection[rowIndex].forEach((col) => {
                            col.rowSpan = Math.min(
                                col.rowSpan,
                                (block.collection.length + 1) - col.rowStart
                            );
                        });
                    }
                }
            });
        }

        this.rowsCount = newRowsCount;
    }

    public rowHeightChanged(event) {
        this.rowsHeight = event.target.value;
        this.cdr.detectChanges();
    }

    public colCountChanged(event) {
        const newColsCount = parseInt(event.target.value, 10);
        if (newColsCount <= 0 || !newColsCount) {
            return;
        }

        if (newColsCount > this.selectedBlock.colsCount) {
            this.selectedBlock.collection.map((rowContainer, rowIndex) => {
                const colStart = this.selectedBlock.colsCount + 1;
                for (let i = 0; i < newColsCount - this.selectedBlock.colsCount; i++) {
                    rowContainer.push({
                        colSpan: 1,
                        colStart: colStart + i,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowIndex + 1,
                        width: "",
                        selected: false,
                        hovered: false
                    });
                }
            });
        } else if (newColsCount < this.selectedBlock.colsCount) {
            this.selectedBlock.collection.map((rowContainer) => {
                let colsToRemove = this.selectedBlock.colsCount - newColsCount;
                while (colsToRemove > 0) {
                    if (rowContainer[rowContainer.length - 1].colSpan <= colsToRemove) {
                        colsToRemove -= rowContainer[rowContainer.length - 1].colSpan;
                        rowContainer.pop();
                    } else {
                        rowContainer[rowContainer.length - 1].colSpan -= colsToRemove;
                        colsToRemove = 0;
                    }
                }
            });
        }

        this.selectedBlock.colsCount = newColsCount;
    }

    public colWidthChanged(event) {
        this.selectedBlock.colsWidth = event.target.value;
    }

    public onColEnter(event: IDropBaseEventArgs, blockIndex, rowIndex, colIndex) {
        this.blocks[blockIndex].collection[rowIndex][colIndex].hovered = true;
    }

    public onColLeave(event: IDropBaseEventArgs, blockIndex, rowIndex, colIndex) {
        this.blocks[blockIndex].collection[rowIndex][colIndex].hovered = false;
    }

    public onColDropped(event: IDropDroppedEventArgs, blockIndex, rowIndex, colIndex) {
        event.cancel = true;
        this.blocks[blockIndex].collection[rowIndex][colIndex].key = event.drag.data.chip.data.key;
        this.updateCollectionLayout(blockIndex);
    }

    public flattenCollection(block: IBlockConfig) {
        const result = [];
        block.collection.forEach((row) => {
            row.forEach((col) => {
                const newCol = { ...col };
                delete newCol.hovered;
                delete newCol.selected;
                newCol.width = block.colsWidth + "px";

                result.push(newCol);
            });
        });

        return result;
    }

    public getColumnLayoutTemplate() {
        let columnLayout = "";
        this.blocks.forEach((block) => {
            const flatCollection = this.flattenCollection(block);
            columnLayout += `<igx-column-layout [header]="'${block.key}'">`;
            flatCollection.map((row) => {
                const column =
                    '\n    <igx-column [rowStart]="' + row.rowStart + '"' +
                    ' [rowEnd]="' + (row.rowStart + row.rowSpan) + '"' +
                    ' [colStart]="' + row.colStart + '"' +
                    ' [colEnd]="' + (row.colStart + row.colSpan) + '"' +
                    ' [field]="\'' + row.key + '\'"' +
                    ' [width]="\'' + row.width + '\'">' +
                    "\n    </igx-column>";
                columnLayout += column;
            });

            columnLayout += "\n</igx-column-layout>\n";
        });

        this.dialogType = DialogType.Template;
        this.jsonCollection = columnLayout;
        this.resultDialog.open();
    }

    public renderJson() {
        const fullCollection = [];
        this.blocks.forEach((block) => {
            const flatCollection = this.flattenCollection(block);
            const mappedCollection = flatCollection.map((row) => ({
                    key: row.key,
                    rowStart: row.rowStart,
                    rowEnd: row.rowStart + row.rowSpan,
                    colStart: row.colStart,
                    colEnd: row.colStart + row.colSpan
                }));

            const fullBlock = {
                layout: block.key,
                columns: mappedCollection
            };
            fullCollection.push(fullBlock);
        });
        this.dialogType = DialogType.JSON;
        this.jsonCollection = JSON.stringify(fullCollection)
            .replace(new RegExp(`{`, "g"), `\n\t{`) // newline for beginning of each object
            .replace(new RegExp(`":`, "g"), `": `) // interval after each :
            .replace(new RegExp(`{"layout":`, "g"), `{\n\t\t"layout":`) // new line and indent for layout
            .replace(new RegExp(`,"columns":`, "g"), `,\n\t\t"columns":`) // new line and indent for columns list
            .replace(new RegExp(`]},`, "g"), `\n\t\t]\n\t},`) // new line and indent for end columns list
            .replace(new RegExp(`{"key"`, "g"), `\t\t{"key"`) // indent for each column
            .replace(new RegExp(`}]}]`, "g"), `}\n\t\t]\n\t}\n]`); // new lines and indents at the end
        this.resultDialog.open();
    }

    public copyToClipboard() {
        this.textArea.nativeElement.select();
        this.document.execCommand("copy");
    }

    public clickCell(cellRef, blockIndex, rowIndex, colIndex) {
        this.selectedBlock = this.blocks[blockIndex];
        this.cellSelected = this.blocks[blockIndex].collection[rowIndex][colIndex];
        this.cellSelected.selected = true;

        this.resizeTop = cellRef.offsetTop;
        this.resizeLeft = cellRef.offsetLeft;
        this.resizeHeight = cellRef.offsetHeight;
        this.resizeWidth = cellRef.offsetWidth;
        this.resizeInitialHeight = this.resizeHeight;
        this.resizeInitialWidth = this.resizeWidth;
        this.resizeVisible = true;
    }

    public onBlur(event, blockIndex, rowIndex, colIndex) {
        this.cellSelected = null;
        this.blocks[blockIndex].collection[rowIndex][colIndex].selected = false;
        this.resizeVisible = false;
    }

    public pointerDownResize(event, blockIndex, rowIndex, colIndex) {
        this.dragStarted = true;
        this.dragStartX = event.pageX;
        this.dragStartY = event.pageY;
        this.curResizedCell = this.blocks[blockIndex].collection[rowIndex][colIndex];

        event.target.setPointerCapture(event.pointerId);
    }

    public pointerMoveResizeLeft(event, cellRef, blockIndex) {
        if (this.dragStarted) {
            const curBlock = this.blocks[blockIndex];
            const curDistance = this.dragStartX - event.pageX;
            const minIncrease = -this.curResizedCell.colSpan;
            const maxIncrease = this.curResizedCell.colStart - 1;
            this.colSpanIncrease = Math.min(Math.round(curDistance / curBlock.colsWidth), maxIncrease);
            this.colSpanIncrease = Math.max(this.colSpanIncrease, minIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * curBlock.colsWidth;
            this.resizeLeft = cellRef.offsetLeft - this.colSpanIncrease * curBlock.colsWidth;
        }
    }

    public pointerMoveResizeRight(event, cellRef, blockIndex) {
        if (this.dragStarted) {
            const curBlock = this.blocks[blockIndex];
            const curDistance = event.pageX - this.dragStartX;
            const maxIncrease = curBlock.colsCount - (this.curResizedCell.colStart + this.curResizedCell.colSpan - 1);
            this.colSpanIncrease = Math.min(Math.round(curDistance / curBlock.colsWidth), maxIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * curBlock.colsWidth;
        }
    }

    public pointerUpResizeRight(event, cellRef, blockIndex, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;
        const curBlock = this.blocks[blockIndex];

        if (this.colSpanIncrease > 0) {
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const nextCell = curBlock.collection[rowIndex][colIndex + 1];
                if (!nextCell || (this.curResizedCell.colStart + this.curResizedCell.colSpan + i) !==
                        (nextCell.colStart || nextCell.rowSpan > 1)) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (nextCell.colSpan > 1) {
                    nextCell.colStart++;
                    nextCell.colSpan--;

                    for (let nextCellRowIndex = nextCell.rowStart;
                        nextCellRowIndex < nextCell.rowStart + nextCell.rowSpan - 1;
                        nextCellRowIndex++) {

                        let nextCellEndIndex = 0;
                        for (let j = 0; j < curBlock.collection[nextCellRowIndex].length; j++) {
                            if ((curBlock.collection[nextCellRowIndex][j].colStart +
                                curBlock.collection[nextCellRowIndex][j].colSpan) >= nextCell.colStart) {
                                break;
                            } else {
                            nextCellEndIndex = j;
                            }
                        }

                        curBlock.collection[nextCellRowIndex].splice(nextCellEndIndex + 1, 0 , {
                            colSpan: 1,
                            colStart: nextCell.colStart - 1,
                            hovered: false,
                            key: "",
                            rowSpan: 1,
                            rowStart: nextCellRowIndex + 1,
                            selected: false,
                            width: ""
                        });
                   }
                } else {
                    curBlock.collection[rowIndex].splice(colIndex + 1, 1);
                }
            }

            if (this.curResizedCell.rowSpan > 1) {
                for (let row = this.curResizedCell.rowStart;
                        row < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        row++) {
                    for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                        let nextCellIndex = 0;
                        const nextCell = curBlock.collection[row].find((cell, index) => {
                            nextCellIndex = index;
                            return cell.colStart === this.curResizedCell.colStart +
                                this.curResizedCell.colSpan + spanIndex;
                        });
                        if (nextCell) {
                            if (nextCell.colSpan > 1) {
                                nextCell.colStart++;
                                nextCell.colSpan--;
                            } else {
                                curBlock.collection[row].splice(nextCellIndex, 1);
                            }
                        }
                    }
                }
            }

            this.curResizedCell.colSpan += this.colSpanIncrease;
        } else if (this.colSpanIncrease < 0) {
            this.colSpanIncrease = -1 * Math.min(-1 * this.colSpanIncrease, this.curResizedCell.colSpan);
            const rowEndIndex = this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;

            for (let rowUpdateIndex = rowIndex; rowUpdateIndex < rowEndIndex; rowUpdateIndex++) {
                const firstHalf = [];
                for (const record of curBlock.collection[rowUpdateIndex]) {
                    if (record.colStart <
                            this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = curBlock.collection[rowUpdateIndex].slice(firstHalf.length);
                for (let i = 0; i < -1 * this.colSpanIncrease; i++) {
                    secondHalf.unshift({
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + this.curResizedCell.colSpan - i - 1,
                        hovered: false,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowUpdateIndex + 1,
                        selected: false,
                        width: ""
                    });
                }

                curBlock.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);

            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            if (this.curResizedCell.colSpan === 0) {
                curBlock.collection[rowIndex].splice(colIndex + this.curResizedCell.colSpan, 1);
            }
        }
        this.colSpanIncrease = 0;
    }

    public pointerUpResizeLeft(event, cellRef, blockIndex, targetRowIndex, targetColIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;
        const curBlock = this.blocks[blockIndex];

        const curIndexFromEnd = curBlock.collection[targetRowIndex].length - targetColIndex - 1;
        if (this.colSpanIncrease > 0) {
            // Handle first row
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const curIndexFromStart = curBlock.collection[targetRowIndex].length - curIndexFromEnd - 1;
                const prevCell = curBlock.collection[targetRowIndex][curIndexFromStart - 1];
                if (!prevCell ||
                    prevCell.colStart + prevCell.colSpan + i !==
                    curBlock.collection[targetRowIndex][curIndexFromStart].colStart ||
                    (prevCell.rowSpan > 1 && prevCell.rowStart !== this.curResizedCell.rowStart)) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (prevCell.colSpan > 1) {
                    prevCell.colSpan--;

                    for (let prevCellRowIndex = prevCell.rowStart;
                         prevCellRowIndex < prevCell.rowStart + prevCell.rowSpan - 1;
                         prevCellRowIndex++) {

                            const prevCellEndIndex = this.getRightInsertIndex(curBlock.collection[prevCellRowIndex],
                                    prevCell.colStart, prevCell.colSpan);
                            curBlock.collection[prevCellRowIndex].splice(prevCellEndIndex, 0 , {
                                colSpan: 1,
                                colStart: prevCell.colStart + prevCell.colSpan,
                                hovered: false,
                                key: "",
                                rowSpan: 1,
                                rowStart: prevCellRowIndex + 1,
                                selected: false,
                                width: ""
                            });
                    }
                } else {
                    curBlock.collection[targetRowIndex].splice(curIndexFromStart - 1, 1);
                }
            }

            // Handle the rest if it spans more than one row
            if (this.curResizedCell.rowSpan > 1) {
                for (let rowIndex = this.curResizedCell.rowStart;
                        rowIndex < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        rowIndex++) {
                    let leftSibling;
                    let leftSiblingIndex = 0;
                    for (let m = 0; m < curBlock.collection[rowIndex].length; m++) {
                        if (curBlock.collection[rowIndex][m].colStart >=
                            this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                            break;
                        }
                        leftSiblingIndex = m;
                        leftSibling = curBlock.collection[rowIndex][m];
                    }

                    if (leftSibling) {
                        for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                            if (leftSibling.colSpan > 1) {
                                leftSibling.colSpan--;
                            } else {
                                curBlock.collection[rowIndex].splice(leftSiblingIndex - spanIndex, 1);
                            }
                            leftSibling = curBlock.collection[rowIndex][leftSiblingIndex - spanIndex - 1];
                        }
                    }
                }
            }

            this.curResizedCell.colStart -= this.colSpanIncrease;
            this.curResizedCell.colSpan += this.colSpanIncrease;
        } else if (this.colSpanIncrease < 0) {
            this.colSpanIncrease = -1 * Math.min(-1 * this.colSpanIncrease, this.curResizedCell.colSpan);
            const rowEndIndex = this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
            for (let rowUpdateIndex = targetRowIndex; rowUpdateIndex < rowEndIndex; rowUpdateIndex++) {
                const firstHalf = [];
                for (const record of curBlock.collection[rowUpdateIndex]) {
                    if (record.colStart < this.curResizedCell.colStart) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = curBlock.collection[rowUpdateIndex].slice(firstHalf.length);
                for (let i = 0; i < -1 * this.colSpanIncrease; i++) {
                    firstHalf.push({
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + i,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowUpdateIndex + 1,
                        selected: false,
                        width: ""
                    });
                }

                curBlock.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);
            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            this.curResizedCell.colStart += -1 * this.colSpanIncrease;
            curBlock.collection[targetRowIndex] =
                curBlock.collection[targetRowIndex].filter((cell) => cell.colSpan > 0);
        }
        this.colSpanIncrease = 0;
    }

    public pointerMoveResizeBottom(event, cellRef, blockIndex, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = event.pageY - this.dragStartY;
            const maxIncrease = this.rowsCount - rowIndex - this.curResizedCell.rowSpan;
            this.rowSpanIncrease = Math.min(Math.round(curDistance / this.rowsHeight), maxIncrease);
            this.resizeHeight = this.resizeInitialHeight + this.rowSpanIncrease * this.rowsHeight;
        }
    }

    public getRightInsertIndex(rowCollection, cellColStart, cellColSpan) {
        let rightCellIndex = 0;
        for (let cellIndex = 0; cellIndex < rowCollection.length; cellIndex++) {
            if (rowCollection[cellIndex].colStart >= cellColStart + cellColSpan) {
                break;
            } else {
                rightCellIndex = cellIndex;
            }
        }
        return rightCellIndex;
    }

    public getLeftInsertIndex(rowCollection, cellColStart) {
        let leftCellIndex = 0;
        let index = 0;
        for (index = 0; index < rowCollection.length; index++) {
            leftCellIndex = index;
            if (rowCollection[index].colStart >= cellColStart) {
                break;
            }
        }
        return index === rowCollection.length ? index : leftCellIndex;
    }

    public pointerUpResizeBottom(event, cellRef, blockIndex, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;
        const curBlock = this.blocks[blockIndex];

        if (this.rowSpanIncrease > 0) {
            for (let increaseIndex = 1; increaseIndex <= this.rowSpanIncrease; increaseIndex++) {
                // Cycle how many rows should the size of the cell increase, and edit them accordingly.
                const curRowIndex = rowIndex + (this.curResizedCell.rowSpan - 1) + increaseIndex;

                for (let j = curBlock.collection[curRowIndex].length - 1; j >= 0; j--) {
                    // Cycle all cells backwards because when cell spans in
                    // the way it should be cut and cells on the right should be added.
                    const curCell = curBlock.collection[curRowIndex][j];
                    let curCellStart = curCell.colStart;
                    let curCellEnd = curCell.colStart + curCell.colSpan;
                    const resizedCellStart = this.curResizedCell.colStart;
                    const resizedCellEnd = this.curResizedCell.colStart + this.curResizedCell.colSpan;

                    if (curCellStart < resizedCellEnd && curCellStart < resizedCellStart &&
                         curCellEnd >= resizedCellEnd && curCell.rowSpan === 1) {
                        // If current cell spans the way of the resized
                        // down cell and the end is spanning more to the right,
                        // cut the current cell and add the needed cells after the resized cell ends.
                        const numNewCells = curCellEnd - resizedCellEnd;
                        for (let i = 0; i < numNewCells; i++) {
                            curCell.colSpan--;
                            curCellEnd--;
                            curBlock.collection[curRowIndex].splice(j + 1, 0, {
                                colSpan: 1,
                                colStart: curCellEnd,
                                hovered: false,
                                key: "",
                                rowSpan: 1,
                                rowStart: curRowIndex + 1,
                                selected: false,
                                width: ""
                            });
                        }
                        curCell.colSpan -= this.curResizedCell.colSpan;
                    } else if (resizedCellStart <= curCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd > resizedCellEnd && curCell.rowSpan === 1) {
                        const numNewCells = resizedCellEnd - curCellStart;
                        curCell.colSpan -= numNewCells;
                        curCell.colStart += numNewCells;
                        curCellStart += numNewCells;
                    } else if (resizedCellStart <= curCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd > resizedCellEnd && curCell.rowSpan > 1) {
                        const numNewCells = resizedCellEnd - curCellStart;
                        for (let curCellRowIndex = curCell.rowStart;
                                curCellRowIndex < (curCell.rowStart + curCell.rowSpan - 1);
                                curCellRowIndex++) {

                            const prevCellIndex = this.getRightInsertIndex(curBlock.collection[curCellRowIndex],
                                curCell.colStart, curCell.colSpan);
                            for (let i = 0 ; i < numNewCells; i++) {
                                // We add them anyway, even if they shouldn't be added to be sure.
                                // On the next pass in the loop they will be removed.
                                curBlock.collection[curCellRowIndex].splice(prevCellIndex + i, 0, {
                                    colSpan: 1,
                                    colStart: curCellStart + i,
                                    hovered: false,
                                    key: "",
                                    rowSpan: 1,
                                    rowStart: curCellRowIndex + 1,
                                    selected: false,
                                    width: ""
                                });
                            }
                        }
                        curCell.colSpan -= numNewCells;
                        curCell.colStart += numNewCells;
                    } else if (resizedCellStart <= curCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd <= resizedCellEnd && curCell.rowSpan > 1) {
                        const prevCellIndex = this.getLeftInsertIndex(curBlock.collection[curRowIndex], curCellStart);
                        curCell.rowStart++;
                        curCell.rowSpan--;
                        curBlock.collection[curRowIndex + 1].splice(prevCellIndex, 0, curCell);
                        curBlock.collection[curRowIndex].splice(prevCellIndex, 1);
                    } else if (curCellStart <= resizedCellEnd &&
                            curCellEnd >= resizedCellStart && curCellEnd <= resizedCellEnd) {
                        // If current cell is in the way of resized down cell decrease the size of the current cell.
                        // To do: this case probably can be combined with the first one.
                        const cellsToFill = curCellEnd - resizedCellStart;
                        curCell.colSpan -= cellsToFill;
                        for (let curCellRowIndex = curCell.rowStart;
                                curCellRowIndex < (curCell.rowStart + curCell.rowSpan - 1);
                                curCellRowIndex++) {

                            const nextCellIndex = this.getRightInsertIndex(curBlock.collection[curCellRowIndex],
                                curCell.colStart, curCell.colSpan);
                            for (let i = 0 ; i < cellsToFill; i++) {
                                // We add them anyway, even if they shouldn't be added to be sure.
                                // On the next pass in the loop they will be removed.
                                curBlock.collection[curCellRowIndex].splice(nextCellIndex - i, 0, {
                                    colSpan: 1,
                                    colStart: curCellEnd - i - 1,
                                    hovered: false,
                                    key: "",
                                    rowSpan: 1,
                                    rowStart: curCellRowIndex + 1,
                                    selected: false,
                                    width: ""
                                });
                            }
                        }
                    } else if (curCellStart < resizedCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd > resizedCellStart && resizedCellEnd < curCellEnd  && curCell.rowSpan > 1) {
                        this.rowSpanIncrease = increaseIndex - 1;
                        break;
                    }

                    if (curCell.colSpan <= 0) {
                        // If the current cell span is <= 0 it should be removed.
                        curBlock.collection[curRowIndex] =
                            curBlock.collection[curRowIndex].filter((cell) => cell.colSpan > 0);
                    }
                }
            }

            this.curResizedCell.rowSpan += this.rowSpanIncrease;
        } else if (this.rowSpanIncrease < 0) {
            this.rowSpanIncrease = -1 * Math.min(-1 * this.rowSpanIncrease, this.curResizedCell.rowSpan);
            const startIndex = this.curResizedCell.rowStart + this.curResizedCell.rowSpan - 2;
            let startCellIndex = 0;
            for (let i = startIndex; i > startIndex + this.rowSpanIncrease; i--) {
                startCellIndex = this.getLeftInsertIndex(curBlock.collection[i], this.curResizedCell.colStart);
                for (let j = 0; j < this.curResizedCell.colSpan; j++) {
                    curBlock.collection[i].splice(startCellIndex + j, 0, {
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + j,
                        hovered: false,
                        key: "",
                        rowSpan: 1,
                        rowStart: i + 1,
                        selected: false,
                        width: ""
                    });
                }
            }

            this.curResizedCell.rowSpan += this.rowSpanIncrease;
            if (this.curResizedCell.rowSpan === 0) {
                // We use the last cell index since when rowSpan reaches 0 it will point to the column index of
                // the top row of the cell. This is where the cell information is saved when it spans more rows.
                curBlock.collection[this.curResizedCell.rowStart - 1] =
                    curBlock.collection[this.curResizedCell.rowStart - 1].filter((cell) => cell.rowSpan > 0);
            }
        }

        this.rowSpanIncrease = 0;
    }

    public onCellKey(event, blockIndex, rowIndex, colIndex) {
        const curBlock = this.blocks[blockIndex];
        if (event.key === "Delete" || event.key === "Del") {
            for (let i = rowIndex; i < rowIndex + this.cellSelected.rowSpan; i++) {
                const rowFirstHalf = [];
                for (const record of curBlock.collection[i]) {
                    if (record.colStart < this.cellSelected.colStart) {
                        rowFirstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const rowSecondHalf = curBlock.collection[i].slice(rowFirstHalf.length + (i === rowIndex ? 1 : 0));
                for (let j = 0; j < this.cellSelected.colSpan; j++) {
                    rowFirstHalf.push({
                        colSpan: 1,
                        colStart: this.cellSelected.colStart + j,
                        key: "",
                        rowSpan: 1,
                        rowStart: i + 1,
                        selected: false,
                        width: ""
                    });
                }
                curBlock.collection[i] = rowFirstHalf.concat(rowSecondHalf);
            }

            this.cellSelected = null;
            this.resizeVisible = false;
        }
    }

    public onChipMoved(event) {
        event.owner.dragDir.dragGhost.children[2].remove();
    }

    public onRemovePointerDown(event) {
        event.stopPropagation();
    }

    public onRemoveClickBlock(index) {
        if (this.blocks.length === 1) {
            return;
        }

        const removedBlock = this.blocks.splice(index, 1)[0];
        if (removedBlock === this.selectedBlock) {
            const newSelectIndex = index === 0 ? 0 : (index - 1);
            this.selectedBlock = this.blocks[newSelectIndex];
        }
    }

    public onRemoveClickColumn(index) {
        this.columnsList.splice(index, 1);
    }

    public onPointerOver(chip) {
        chip.data.hovered = true;
    }

    public onPointerLeave(chip) {
        chip.data.hovered = false;
    }

    public onAddBlockClick(chip) {
        chip.data.clicked = true;
        requestAnimationFrame(() => {
            const input = chip.elementRef.nativeElement.querySelector("input");
            input.focus();
        });
    }

    public onAddChipClick(chip) {
        chip.data.clicked = true;
        requestAnimationFrame(() => {
            const input = chip.elementRef.nativeElement.querySelector("input");
            input.focus();
        });
    }

    public inputKeyDownBlock(event, chip) {
        event.stopPropagation();

        if (event.key === "Escape") {
            chip.data.clicked = false;
        } else if (event.key === "Enter") {
            const newCollection = [];
            for (let i = 0; i < this.rowsCount; i++) {
                newCollection.push([{
                    colSpan: 1,
                    colStart: 1,
                    key: "",
                    rowSpan: 1,
                    rowStart: i + 1,
                    width: "",
                    selected: false,
                    hovered: false
                }]);
            }

            const newBlock = {
                collection: newCollection,
                colsCount: 1,
                colsWidth: 136,
                key: event.target.value
            };
            this.blocks.push(newBlock);
            event.target.value = "";
            this.selectedBlock = newBlock;

            requestAnimationFrame(() => {
                this.layoutContainer.nativeElement.scrollLeft = 9999999;
            });
        }
    }

    public inputKeyDown(event, chip) {
        event.stopPropagation();

        if (event.key === "Escape") {
            chip.data.clicked = false;
        } else if (event.key === "Enter") {
            this.columnsList.push({
                field: event.target.value,
                key: event.target.value
            });
            event.target.value = "";
        }
    }

    public inputBlur(event, addChip) {
        if (event.relatedTarget === addChip.elementRef.nativeElement ||
            event.relatedTarget === addChip.elementRef.nativeElement.children[0]) {
            // Clicked on the same chip, so we don't close it.
            return;
        }
        addChip.data.clicked = false;
    }

    public onContainerScroll() {
        this.resizeVisible = false;
    }

    public blocksOrderChanged(event) {
        const newBlocksList = [];
        event.chipsArray.forEach((chip) => {
            const foundBlock = this.blocks.find((block) => block.key === chip.id);
            if (foundBlock) {
                newBlocksList.push(foundBlock);
            }
        });
        this.blocks = newBlocksList;
    }
}
```
```html
<div class="sample-wrapper mrl-layout">
  <section style="height: 800px;">
    <div style="display: flex; justify-content: center; flex-wrap: wrap; margin-top: 15px; margin-bottom: 15px;">
      <div class="settingsInputWrapper">
        <label for="rowsCount">Rows</label>
        <input name="rowsCount" type="number" min="1" [value]="rowsCount" (input)="rowCountChanged($event)" style="width: 100px;"/>
      </div>
      <div class="layoutListContainer" >
        <label>Select layout to configure or reorder them:</label>
        <igx-chips-area style="margin: auto; justify-content: center;" (reorder)="blocksOrderChanged($event)">
          @for (block of blocks; track block; let blockIndex = $index) {
            <igx-chip #chip [style.margin]="'5px'"
              [id]="block.key" [data]="block" [selected]="block.key === selectedBlock.key" [draggable]="true"
              (chipClick)="selectedBlock = block" (pointerenter)="onPointerOver(chip)" (pointerleave)="onPointerLeave(chip)">
              {{block.key}}

                <igx-icon
                    [style.opacity]="chip.data.hovered ? '1' : '0'" [style.z-index]="chip.data.hovered ? '1' : '-1'" [style.width]="chip.data.hovered ? '24px' : '0px'"
                    style="transition: opacity 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955); transition: width 100ms cubic-bezier(0.455, 0.03, 0.515, 0.955);"
                    (pointerdown)="onRemovePointerDown($event)" (mousedown)="onRemovePointerDown($event)" (click)="onRemoveClickBlock(blockIndex)"
                    igxSuffix
                    id="igx-icon-150">
                    cancel
                </igx-icon>
            </igx-chip>
          }
          <igx-chip #addBlock [style.margin]="'5px'" [data]="{ clicked: false }" (chipClick)="onAddBlockClick(addBlock)">
            <igx-icon igxPrefix>add_circle_outline</igx-icon>
            @if (!addBlock.data.clicked) {
              <span>{{"Add Layout"}}</span>
            }
            @if (addBlock.data.clicked) {
              <igx-input-group>
                <input igxInput type="text" placeholder="Layout Name" (keydown)="inputKeyDownBlock($event, addBlock)" (blur)="inputBlur($event, addBlock)"/>
              </igx-input-group>
            }
          </igx-chip>
        </igx-chips-area>
      </div>
      <div class="layoutSettingsContainer">
        <div class="settingsInputWrapper">
          <label for="colsCount">Columns</label>
          <input name="colsCount" type="number" min="1" [value]="selectedBlock.colsCount" (input)="colCountChanged($event)" style="width: 100px;"/>
        </div>
        <div class="settingsInputWrapper">
          <label for="colsWidth">Column Width</label>
          <input name="colsWidth" type="number" min="1" [value]="selectedBlock.colsWidth" (input)="colWidthChanged($event)" style="width: 100px;" />
        </div>
      </div>
    </div>

    <div #layoutContainer class="layoutContainer" (scroll)="onContainerScroll()">
      <span>Click on a cell to resize it left/right/down or delete it:</span>
      <div style="display: table; text-align:center; margin-bottom: 15px; margin: auto;">
        <div class="igx-grid__thead-wrapper igx-grid__tr--mrl" style="display: flex;">
          @for (block of blocks; track block; let blockIndex = $index) {
            <div class="rowLayoutView igx-grid__mrl-block"
                        [ngStyle]="{
                            'grid-template-rows': getLayoutRowStyle(blockIndex),
                            'grid-template-columns': getLayoutColsStyle(blockIndex),
                            '-ms-grid-rows': getLayoutRowStyle(blockIndex),
                            '-ms-grid-columns': getLayoutColsStyle(blockIndex),
                            'border': block.key === selectedBlock.key ? '1px solid #00b33c' : '1px solid rgba(0, 0, 0, 0.12)'
                        }">
              @for (row of block.collection; track row; let rowIndex = $index) {
                @for (col of row; track col; let colIndex = $index) {
                  <div #gridCell tabindex="0" class="columnIn" [class.columnInHovered]="col.hovered"
                                [ngStyle]="{'grid-row-start': col.rowStart, 'grid-column-start': col.colStart, 'grid-column-end': col.colStart + col.colSpan, 'grid-row-end': col.rowStart + col.rowSpan,
                                '-ms-grid-row': col.rowStart, '-ms-grid-column': col.colStart, '-ms-grid-column-span': col.colSpan, '-ms-grid-row-span': col.rowSpan}"
                    igxDrop (dropped)="onColDropped($event, blockIndex, rowIndex, colIndex)" (enter)="onColEnter($event, blockIndex, rowIndex, colIndex)" (leave)="onColLeave($event, blockIndex, rowIndex, colIndex)"
                    (click)="clickCell(gridCell, blockIndex, rowIndex, colIndex)" (blur)="onBlur($event, blockIndex, rowIndex, colIndex)" (keyup)="onCellKey($event, blockIndex, rowIndex, colIndex)">
                    <div class="igx-grid__th-title textWrapper">{{col.key}}</div>
                    @if (block.collection[rowIndex][colIndex].selected) {
                      <span #resizeHandleRight [ngClass]="col.colStart !== 1 ? 'resizerLeft' : 'resizerLeft-small'"
                        (pointerdown)="pointerDownResize($event, blockIndex, rowIndex, colIndex)"
                        (pointermove)="pointerMoveResizeLeft($event, gridCell, blockIndex)"
                        (pointerup)="pointerUpResizeLeft($event, gridCell, blockIndex, rowIndex, colIndex)">
                      </span>
                      <span #resizeHandleRight [ngClass]="(col.colStart + col.colSpan - 1) !== block.colsCount ? 'resizerRight' : 'resizerRight-small'"
                        (pointerdown)="pointerDownResize($event, blockIndex, rowIndex, colIndex)"
                        (pointermove)="pointerMoveResizeRight($event, gridCell, blockIndex)"
                        (pointerup)="pointerUpResizeRight($event, gridCell, blockIndex, rowIndex, colIndex)">
                      </span>
                      <span #resizeHandleBottom [ngClass]="(col.rowStart + col.rowSpan - 1) !== rowsCount ? 'resizerBottom' : 'resizerBottom-small'"
                        (pointerdown)="pointerDownResize($event, blockIndex, rowIndex, colIndex)"
                        (pointermove)="pointerMoveResizeBottom($event, gridCell, blockIndex, rowIndex, colIndex)"
                        (pointerup)="pointerUpResizeBottom($event, gridCell, blockIndex, rowIndex, colIndex)">
                      </span>
                    }
                  </div>
                }
              }
            </div>
          }
        </div>
        <div #resizeIndicator style="position: absolute; border: 2px dotted #09f;"
                    [ngStyle]="{
                                'top': (resizeTop - layoutScrollTop) + 'px',
                                'left': (resizeLeft - layoutScrollLeft)  + 'px',
                                'width': resizeWidth + 'px',
                                'height': resizeHeight + 'px',
                                'display': resizeVisible ? 'block' : 'none'
                                }">
        </div>
      </div>
    </div>

    <div  style="width: 100%; margin-bottom: 15px; text-align:center; min-height: 50px;" >
      <span>Drag a column into a layout cell to apply:</span>
      <igx-chips-area style="margin: auto; justify-content: center; gap: 10px;">
        @for (col of columnsList; track col; let colIndex = $index) {
          <igx-chip #chip  [data]="col" [draggable]="true"
            (pointerenter)="onPointerOver(chip)" (pointerleave)="onPointerLeave(chip)">
            {{col.key}}
              <igx-icon
              [style.opacity]="chip.data.hovered ? '1' : '0'" [style.z-index]="chip.data.hovered ? '1' : '-1'" [style.width]="chip.data.hovered ? '24px' : '0px'"
              style="transition: opacity 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955); transition: width 100ms cubic-bezier(0.455, 0.03, 0.515, 0.955);"
              igxSuffix (pointerdown)="onRemovePointerDown($event)" (mousedown)="onRemovePointerDown($event)" (click)="onRemoveClickColumn(colIndex)"
              id="igx-icon-150">
                cancel
              </igx-icon>
          </igx-chip>
        }
        <igx-chip #addChip [data]="{ clicked: false }" (chipClick)="onAddChipClick(addChip)">
          <igx-icon igxPrefix>add_circle_outline</igx-icon>
          @if (!addChip.data.clicked) {
            <span>{{"Add Column"}}</span>
          }
          @if (addChip.data.clicked) {
            <igx-input-group>
              <input igxInput type="text" placeholder="Column Key" (keydown)="inputKeyDown($event, addChip)" (blur)="inputBlur($event, addChip)"/>
            </igx-input-group>
          }
        </igx-chip>
      </igx-chips-area>
    </div>
    <div style="width: 100%; text-align: center; margin: 10px;">
      <span igxButton="contained" class="bottomButton" (click)="resetCollections()">Clear Layout</span>
      <span igxButton="contained" class="bottomButton" (click)="getColumnLayoutTemplate()">Template</span>
      <span igxButton="contained" class="bottomButton" (click)="renderJson()">JSON</span>
    </div>

    <igx-dialog #resultDialog title="Result"
      leftButtonLabel="Copy" (leftButtonSelect)="copyToClipboard()" rightButtonLabel="Close" (rightButtonSelect)="resultDialog.close()"
      backgroundClick="true" [closeOnOutsideSelect]="true">
      <div class="login-form">
        <textarea #textArea rows="20" cols="120" readonly style="margin: 10px; margin-top: 0px;">{{jsonCollection}}</textarea>
      </div>
    </igx-dialog>
  </section>
</div>
```
```scss
.mrl-layout {
	igx-input-group {
		--ig-size: 1;
		--size: 22px;
		--idle-bottom-line-color: transparent;
		--hover-bottom-line-color: transparent;
		--focused-bottom-line-color: transparent;
		--focused-secondary-color: transparent;
		
		.igx-input-group__bundle-start,
		.igx-input-group__bundle-end {
			display: none;
		}
		
		.igx-input-group__bundle {
			top: 0;
		}
	}
	
	igx-chip {
		--ig-size: var(--ig-size-medium);
	}
}

.igx-grid__thead-wrapper {
    position: initial !important;
}

.settingsInputWrapper {
    width: fit-content;
    display: flex;
    flex-flow: column;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15px;
}

.layoutSettingsContainer {
    display: flex;
    flex-flow: row;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 15px;
}

.layoutListContainer {
    width: fit-content;
    margin-top: auto;
    margin-bottom: auto;
    text-align:center;
    min-height: 50px;
}

.layoutContainer {
    width: 100%;
    max-height:250px;
    margin-bottom: 15px;
    text-align:center;
    min-height: 50px;
    overflow: auto;
}

.colsWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-flow: row;
            flex-flow: row;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: auto;
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.dark-theme .colsWrapper {
    border: 1px solid rgba(255, 255, 255, 0.12);
}

.columnOut {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 7px;
    margin-right: 7px;
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'Titillium Web', sans-serif;
    line-height: 1.25rem;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    cursor: pointer;
}

.columnOut:hover {
    background-color: rgba(0, 0, 0, 0.12) !important;
}

.columnOut:active {
    background-color: rgba(0, 0, 0, 0.22) !important;
}


.columnIn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    padding: 0;
    overflow: visible;
    outline-style: hidden !important;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: left;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.dark-theme .columnIn {
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.columnIn:focus {
    outline-style: hidden !important;
}

.columnInHovered {
    background-color: rgba(0, 0, 0, 0.22) !important;
}

.dark-theme .columnInHovered {
    background-color: rgba(255, 255, 255, 0.22) !important;
}

.textWrapper {
    margin: auto;
    -ms-flex-item-align: end;
    align-self: flex-end;
    line-height: unset !important;
    padding: 0 1.5rem;
}

.resizerLeft {
    position: absolute;
    width: 6px;
    top: 0;
    left: -3px;
    height: 100%;
    z-index: 2;
    cursor: col-resize;
}

.resizerLeft-small {
    position: absolute;
    width: 3px;
    top: 0;
    left: 0px;
    height: 100%;
    z-index: 2;
    cursor: col-resize;
}

.resizerRight {
    position: absolute;
    width: 6px;
    top: 0;
    right: -3px;
    height: 100%;
    z-index: 2;
    cursor: col-resize;
}

.resizerRight-small {
    position: absolute;
    width: 3px;
    top: 0;
    right: 0px;
    height: 100%;
    z-index: 2;
    cursor: col-resize;
}

.resizerBottom {
    position: absolute;
    width: 100%;
    height: 6px;
    bottom: -3px;
    left: 0px;
    z-index: 2;
    cursor: row-resize;
}

.resizerBottom-small {
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0px;
    left: 0px;
    z-index: 2;
    cursor: row-resize;
}

.rowLayoutView {
    display: -ms-grid;
    display: grid;
    margin: auto;
    position: inherit;
}

.outer-wrapper {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
}

.grid-wrapper {
    margin: auto;
    width: 800px;
}

.bottomButton {
    margin: 5px;
}

.igx-input-group__bundle {
    padding-top: 0;
    top: -2px;
}

.igx-grid__thead-wrapper {
    position: static;
}
```

## Styling

The igxGrid allows styling through the [`Ignite UI for Angular Theme Library`](/themes/sass/component-themes). The `grid-theme` exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Multi-row Layout styling.

### Importing global theme

To begin the customization of the Multi-row Layout feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Defining custom theme

Next, create a new theme, that extends the `grid-theme` and accepts the parameters, required to customize the feature layout as desired.

```scss
$custom-theme: grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $cell-selected-text-color: #ffcd0f,
  $row-hover-background: #fde069,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $sorted-header-icon-color: #ffcd0f,
  $sortable-header-icon-hover-color: #e9bd0d
);
```

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `palette` and `color` functions. Please refer to [`Palettes`](/themes/sass/palettes) topic for detailed guidance on how to use them.

### Applying the custom theme

The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:  

```scss
:host {
  @include tokens($custom-theme);
}
```

In order for the custom theme do affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

### Demo

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxColumnLayoutComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-multi-row-layout-styling-sample',
    styleUrls: ['./grid-multi-row-layout-styling.component.scss'],
    templateUrl: './grid-multi-row-layout-styling.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnLayoutComponent, IgxColumnComponent]
})
export class GridMultiRowLayoutStylingComponent {

    public sourceData = DATA;
    public group = [
        {
            dir: SortingDirection.Asc,
            fieldName: 'Country',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
    ];
    public sort = [
        {
            dir: SortingDirection.Desc,
            fieldName: 'CompanyName',
            ignoreCase: true
        }
    ];
}
```
```html
<div class="wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid
        [width]="'100%'"
        height="720px"
        [data]="sourceData"
        [autoGenerate]="false"
        [sortingExpressions]="sort">
        <igx-column-layout [header]="'ID'">
            <igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID" [filterable]="false"></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Contact Details'">
            <igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName" [header]="'Company Name'" [sortable]="true"></igx-column>
            <igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName" [header]="'Contact Name'"></igx-column>
            <igx-column [rowEnd]="3" [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle" [header]="'Contact Title'"></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Address Details'">
            <igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country"></igx-column>
            <igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region"></igx-column>
            <igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode" [header]="'Postal Code'" [filterable]="false"></igx-column>
            <igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City"></igx-column>
            <igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address"></igx-column>
        </igx-column-layout>
        <igx-column-layout [header]="'Phone Details'">
                <igx-column [rowStart]="1" [colStart]="1" [colEnd]="2" field="Phone"></igx-column>
                <igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="Fax"></igx-column>
            </igx-column-layout>
    </igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-theme: grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $cell-selected-text-color: #ffcd0f,
  $row-hover-background: #fde069,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $sorted-header-icon-color: #ffcd0f,
  $sortable-header-icon-hover-color: #e9bd0d
);

:host {
  @include tokens($custom-theme);
}
```

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## API References
- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- `IgxGridComponent Styles`
- [`IgxColumnLayout`](mcp:get_api_reference?platform=angular&component=IgxColumnLayoutComponent)
- [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent)
## Additional Resources

- [Grid overview](/grid/grid)
- [Paging](/grid/paging)

- [Virtualization and Performance](/grid/virtualization)
- [Sorting](/grid/sorting)
- [Column Resizing](/grid/column-resizing)
- [Selection](/grid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
