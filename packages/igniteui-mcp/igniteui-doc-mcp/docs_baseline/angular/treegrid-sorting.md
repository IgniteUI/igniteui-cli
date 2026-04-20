---
title: Angular Tree Grid Sorting - Ignite UI for Angular
_description: Get started with the Angular sorting feature of Ignite for Angular UI grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: angular sort, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/sorting
_tocName: Sorting
_premium: true
---
# Angular Tree Grid Sorting
In Ignite UI for Angular Tree Grid, data sorting is enabled on a per-column level, meaning that the **igx-tree-grid** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.
>[!NOTE]
> Up until now, grouping/sorting worked in conjunction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.
## Angular Tree Grid Sorting Overview Example
Additionally there is a custom context menu added for sorting using **igx-tree-grid**'s [`contextMenu`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#contextMenu) Output.
```typescript
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DefaultSortingStrategy, ISortingOptions, SortingDirection } from 'igniteui-angular/core';
import { IgxTreeGridComponent, IgxTreeGridGroupByAreaComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxComboClearIconDirective, IgxComboItemDirective } from 'igniteui-angular/combo';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { TreeGridContextmenuComponent } from './tree-grid-contextmenu/tree-grid-contextmenu.component';

@Component({
    selector: 'app-tree-grid-sorting-sample',
    styleUrls: ['./tree-grid-sorting-sample.component.scss'],
    templateUrl: 'tree-grid-sorting-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxButtonDirective, IgxGridToolbarActionsComponent, IgxSimpleComboComponent, FormsModule, IgxComboClearIconDirective, IgxComboItemDirective, IgxTreeGridGroupByAreaComponent, IgxColumnComponent, IgxCellTemplateDirective, TreeGridContextmenuComponent, UpperCasePipe]
})

export class TreeGridSortingSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;
    public data: any[];
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public sortingTypes: ISortingOptions[] = [
        {
            mode: 'single'
        }, {
            mode: 'multiple'
        }
    ];
    public sortingOptions: ISortingOptions = this.sortingTypes[1];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() { }

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit(): void {
        this.treegrid1.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'UnitPrice',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public rightClick(eventArgs) {
      eventArgs.event.preventDefault();
      this.contextmenuX = eventArgs.event.clientX;
      this.contextmenuY = eventArgs.event.clientY;
      this.contextmenu = true;
      this.clickedCell = eventArgs.cell;
    }

    public disableContextMenu() {
      this.contextmenu = false;
    }

    handleSearchResults(event: KeyboardEvent) {
        event.preventDefault();
    }
}
```
```html
<div class="grid__wrapper" (window:click)="disableContextMenu()">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treegrid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
    primaryKey="ID" foreignKey="ParentID" (contextMenu)="rightClick($event)" [sortingOptions]="sortingOptions">
    <igx-grid-toolbar>
      <button class="button-opitions" igxButton="contained" (click)="treegrid1.sortingExpressions = []">
        Clear Sorting
      </button>

      <button class="button-opitions" igxButton="contained" (click)="groupArea.expressions = []">
        Clear Grouped columns
      </button>
      <igx-grid-toolbar-actions>
        <igx-simple-combo #comboItem
          [data]="sortingTypes"
          [displayKey]="'mode'"
          [(ngModel)]="sortingOptions"
          (keydown)="handleSearchResults($event)">
          <ng-template igxComboClearIcon></ng-template>
          <ng-template igxComboItem let-item>
            <div>{{ item.mode | uppercase }}</div>
          </ng-template>
        </igx-simple-combo>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-tree-grid-group-by-area
      #groupArea
      [grid]="treegrid1"
      [hideGroupedColumns]="true">
    </igx-tree-grid-group-by-area>

    <igx-column field="ID" header="Order ID" [groupable]="true" [sortable]="true">
    </igx-column>
    <igx-column field="Name" header="Order Product" [groupable]="true" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [groupable]="true" [sortable]="true">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [groupable]="true" [sortable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [groupable]="true" [sortable]="true">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [groupable]="true" [sortable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [groupable]="true" [sortable]="true">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [groupable]="true" [sortable]="true">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        }
      </ng-template>
    </igx-column>
  </igx-tree-grid>
  @if (contextmenu) {
    <div>
      <app-tree-grid-contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell"></app-tree-grid-contextmenu>
    </div>
  }
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
    margin: 0 16px;
    padding-top: 16px;
}

.igx-grid-toolbar ::ng-deep {
    .igx-grid-toolbar__custom-content {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
}
```
<div class="divider--half"></div>
This is done via the [`sortable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortable) input. With the Tree Grid sorting, you can also set the [`sortingIgnoreCase`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortingIgnoreCase) property to perform case sensitive sorting:
```html
<igx-column field="Name" header="Order Product" [dataType]="'string'" sortable="true"></igx-column>
```
## Sorting Indicators
Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.
The **IgxTreeGrid** provides a solution for this problem by indicating the index of each sorted column.
@@if(igxName === "IgxGrid"){
```typescript
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { DefaultSortingStrategy } from 'igniteui-angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { FinancialData } from '../../data/financialData';
import  {generateRandomInteger, generateRandomFloat} from '../../data/utils';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-sorting-indicators',
    templateUrl: './grid-sorting-indicators.component.html',
    styleUrls: ['./grid-sorting-indicators.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridSortingIndicatorsComponent implements OnInit, AfterViewInit {

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    public data;

    public ngOnInit(): void {
        const typeArr = ['Gold', 'Silver', 'Coal'];
        this.data = FinancialData.generateData(1000).map(dataObj => {
                const type = typeArr[generateRandomInteger(0, 2)];
                switch (type) {
                    case 'Gold':
                        dataObj['Type'] = 'Gold';
                        dataObj['Price'] = generateRandomFloat(1261.78, 1302.76);
                        dataObj['Buy'] = generateRandomFloat(1261.78, 1280.73);
                        break;
                    case 'Silver':
                        dataObj['Type'] = 'Silver';
                        dataObj['Price'] = generateRandomFloat(17.12, 17.73);
                        dataObj['Buy'] = generateRandomFloat(17.12, 17.43);
                        break;
                    case 'Coal':
                        dataObj['Type'] = 'Coal';
                        dataObj['Price'] = generateRandomFloat(0.40, 0.42);
                        dataObj['Buy'] = generateRandomFloat(0.42, 0.46);
                        break;
                }
                return dataObj;
        });
    }

    public ngAfterViewInit() {
        const expressions = [];
        this.grid.columns.forEach(c => {
            const sortExpr =
            {
                dir: generateRandomInteger(1, 2), fieldName: c.field,
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            };
            expressions.push(sortExpr);
        });
        this.grid.sortingExpressions = expressions;
        this.grid.cdr.detectChanges();
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [height]="'500px'" width="100%">
        <igx-column [sortable]="true" [field]="'Settlement'"></igx-column>
        <igx-column [sortable]="true" [field]="'Type'"></igx-column>
        <igx-column [sortable]="true" [field]="'Region'"></igx-column>
        <igx-column [sortable]="true" [field]="'Country'"></igx-column>
        <igx-column [sortable]="true" [field]="'Price'" dataType="number" [formatter]="formatCurrency"></igx-column>
        <igx-column [sortable]="true" [field]="'Buy'" dataType="number" [formatter]="formatCurrency">
        </igx-column>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
  margin: 0 auto;
  padding: 16px;
}
```
}
## Sorting through the API
You can sort any column or a combination of columns through the Tree Grid API using the Tree Grid [`sort`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#sort) method:
```typescript
import { SortingDirection } from 'igniteui-angular/core';
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package
// Perform a case insensitive ascending sort on the ProductName column.
this.treeGrid.sort({ fieldName: 'Name', dir: SortingDirection.Asc, ignoreCase: true });
// Perform sorting on both the ProductName and Price columns.
this.treeGrid.sort([
    { fieldName: 'Name', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'UnitPrice', dir: SortingDirection.Desc }
]);
```
> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.
As with the filtering behavior, you can clear the sorting state by using the [`clearSort`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#clearsort) method:
```typescript
// Removes the sorting state from the ProductName column
this.treeGrid.clearSort('Name');
// Removes the sorting state from every column in the Tree Grid
this.treeGrid.clearSort();
```
> [!NOTE]
> The [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#sortStrategy) of the **Tree Grid** is of different type compared to the [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortStrategy) of the **column**, since they work in different scopes and expose different parameters.
> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the Tree Grid.
## Initial sorting state
It is possible to set the initial sorting state of the Tree Grid by passing an array of sorting expressions to the [`sortingExpressions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#sortingExpressions) property of the Tree Grid.
```typescript
public ngAfterViewInit(): void {
    this.treeGrid.sortingExpressions = [
        { 
            dir: SortingDirection.Asc, fieldName: 'UnitPrice',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance() 
        }
    ];
}
```
> [!NOTE]
> If values of type `string` are used by a column of [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) `Date`, the Tree Grid won't parse them to `Date` objects and using Tree Grid `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.
<div class="divider--half"></div>
## Sorting Indicators Templates
The sorting indicator icon in the column header can be customized using a template. The following directives are available for templating the sorting indicator for any sorting state (ascending, descending, none):
- `IgxSortHeaderIconDirective` – re-templates the sorting icon when no sorting is applied.
```html
<ng-template igxSortHeaderIcon>
    <igx-icon>unfold_more</igx-icon>
</ng-template>
```
- `IgxSortAscendingHeaderIconDirective` – re-templates the sorting icon when the column is sorted in ascending order.
```html
<ng-template igxSortAscendingHeaderIcon>
    <igx-icon>expand_less</igx-icon>
</ng-template>
```
- `IgxSortDescendningHeaderIconDirective` – re-templates the sorting icon when the column is sorted in descending order.
```html
<ng-template igxSortDescendingHeaderIcon>
    <igx-icon>expand_more</igx-icon>
</ng-template>
```
<div class="divider--half"></div>
## Styling
To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Following the simplest approach, we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the `$sorted-header-icon-color` and `sortable-header-icon-hover-color` parameters.
```scss
$custom-theme: grid-theme(
  $sorted-header-icon-color: #ffb06a,
  $sortable-header-icon-hover-color: black
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component mixins:
```scss
:host {
  @include tokens($custom-theme);
}
```
### Demo
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-sorting-styling',
    styleUrls: ['./tree-grid-sorting-styling.component.scss'],
    templateUrl: 'tree-grid-sorting-styling.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridSortingStylingComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA;
        this.treegrid1.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'UnitPrice',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [autoGenerate]="false" height="500px" width="100%" primaryKey="ID"
    foreignKey="ParentID">
    <igx-column field="ID" header="Order ID" [sortable]="true">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions"  [sortable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate"
      [sortable]="true">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [groupable]="true" [sortable]="true">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        }
      </ng-template>
    </igx-column>
  </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-theme: grid-theme(
  $sorted-header-icon-color: #ffb06a,
  $sortable-header-icon-hover-color: black
);

:host {
  @include tokens($custom-theme);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## API References
- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [ISortingExpression](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingexpression.html)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
