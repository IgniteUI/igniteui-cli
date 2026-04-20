---
title: Angular Hierarchical Grid Sorting - Ignite UI for Angular
_description: Get started with the Angular sorting feature of Ignite for Angular UI grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: angular sort, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/sorting
_tocName: Sorting
_premium: true
---
# Angular Hierarchical Grid Sorting
In Ignite UI for Angular Hierarchical Grid, data sorting is enabled on a per-column level, meaning that the **igx-hierarchical-grid** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.
>[!NOTE]
> Up until now, grouping/sorting worked in conjunction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.
## Angular Hierarchical Grid Sorting Overview Example
Additionally there is a custom context menu added for sorting using **igx-hierarchical-grid**'s [`contextMenu`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#contextMenu) Output.
```typescript
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

import { HGridContextmenuComponent } from './hgrid-contextmenu/hgrid-contextmenu.component';

@Component({
    selector: 'app-hierarchical-grid-sorting',
    styleUrls: ['./hierarchical-grid-sorting.component.scss'],
    templateUrl: 'hierarchical-grid-sorting.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, HGridContextmenuComponent]
})

export class HGridSortingSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.hierarchicalGrid.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'Artist',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public ngAfterViewInit(): void {
        this.hierarchicalGrid.cdr.detectChanges();
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

    public formatter = (a) => a;
}
```
```html
<div class="hgrid-sample" (window:click)="disableContextMenu()">
  <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false"
    [height]="'480px'" [width]="'100%'" [rowHeight]="'65px'" (contextMenu)="rightClick($event)" #hierarchicalGrid>
    <igx-column field="Artist" [sortable]="true"></igx-column>
    <igx-column field="Photo">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
          <img [src]="cell.value" class="photo" />
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="Debut" [sortable]="true" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [sortable]="true"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [sortable]="true"></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
      <igx-column field="Album" [sortable]="true"></igx-column>
      <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
      <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true"></igx-column>
      <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true"></igx-column>
      <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
        <igx-column field="Number" header="No." [sortable]="true"></igx-column>
        <igx-column field="Title" [sortable]="true"></igx-column>
        <igx-column field="Released" dataType="date" [sortable]="true"></igx-column>
        <igx-column field="Genre" [sortable]="true"></igx-column>
      </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
      <igx-column field="Tour" [sortable]="true"></igx-column>
      <igx-column field="StartedOn" header="Started on" [sortable]="true"></igx-column>
      <igx-column field="Location" [sortable]="true"></igx-column>
      <igx-column field="Headliner" [sortable]="true"></igx-column>
    </igx-row-island>

  </igx-hierarchical-grid>
  @if (contextmenu) {
    <div>
      <app-hgrid-contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell"></app-hgrid-contextmenu>
    </div>
  }
</div>
```
```scss
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}

.hgrid-sample{
    padding: 16px;
}
```
<div class="divider--half"></div>
This is done via the [`sortable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortable) input. With the Hierarchical Grid sorting, you can also set the [`sortingIgnoreCase`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortingIgnoreCase) property to perform case sensitive sorting:
```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```
## Sorting Indicators
Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.
The **IgxHierarchicalGrid** provides a solution for this problem by indicating the index of each sorted column.
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
You can sort any column or a combination of columns through the Hierarchical Grid API using the Hierarchical Grid [`sort`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#sort) method:
```typescript
import { SortingDirection } from 'igniteui-angular/core';
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package
// Perform a case insensitive ascending sort on the ProductName column.
this.hierarchicalGrid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });
// Perform sorting on both the ProductName and Price columns.
this.hierarchicalGrid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```
> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.
As with the filtering behavior, you can clear the sorting state by using the [`clearSort`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#clearsort) method:
```typescript
// Removes the sorting state from the ProductName column
this.hierarchicalGrid.clearSort('ProductName');
// Removes the sorting state from every column in the Hierarchical Grid
this.hierarchicalGrid.clearSort();
```
> [!NOTE]
> The [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#sortStrategy) of the **Hierarchical Grid** is of different type compared to the [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortStrategy) of the **column**, since they work in different scopes and expose different parameters.
> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the Hierarchical Grid.
## Initial sorting state
It is possible to set the initial sorting state of the Hierarchical Grid by passing an array of sorting expressions to the [`sortingExpressions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#sortingExpressions) property of the Hierarchical Grid.
```typescript
public ngOnInit(): void {
    this.hierarchicalGrid.sortingExpressions = [
        { 
            dir: SortingDirection.Asc, fieldName: 'Artist',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance() 
        }
    ];
}
```
> [!NOTE]
> If values of type `string` are used by a column of [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) `Date`, the Hierarchical Grid won't parse them to `Date` objects and using Hierarchical Grid `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.
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
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-sorting-styling',
    styleUrls: ['./hierarchical-grid-sorting-styling.component.scss'],
    templateUrl: 'hierarchical-grid-sorting-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridSortingStylingComponent implements OnInit, AfterViewInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.hierarchicalGrid.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'Artist',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public ngAfterViewInit(): void {
        this.hierarchicalGrid.cdr.detectChanges();
    }

    public formatter = (a) => a;
}
```
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false" [height]="'480px'" [width]="'100%'"
        [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist" [sortable]="true"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [sortable]="true" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [sortable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [sortable]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-column field="Number" header="No." [sortable]="true"></igx-column>
                <igx-column field="Title" [sortable]="true"></igx-column>
                <igx-column field="Released" dataType="date" [sortable]="true"></igx-column>
                <igx-column field="Genre" [sortable]="true"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour" [sortable]="true"></igx-column>
            <igx-column field="StartedOn" header="Started on" [sortable]="true"></igx-column>
            <igx-column field="Location" [sortable]="true"></igx-column>
            <igx-column field="Headliner" [sortable]="true"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
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
- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [ISortingExpression](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingexpression.html)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
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
