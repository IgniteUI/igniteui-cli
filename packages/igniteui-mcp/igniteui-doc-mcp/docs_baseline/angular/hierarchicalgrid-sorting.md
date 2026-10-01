---
title: Angular Hierarchical Grid Sorting - Ignite UI for Angular
description: Get started with the Angular sorting feature of Ignite for Angular UI grid! Configure a mix of sortable columns & change the display order of data records.
keywords: angular sort, ignite ui for angular, infragistics
license: commercial
_canonicalLink: grid/sorting
llms:
  description: "In Ignite UI for Angular Hierarchical Grid, data sorting is enabled on a per-column level, meaning that the igx-hierarchical-grid can have a mix of sortable and non-sortable columns."
_tocName: Sorting
_premium: true
---
# Angular Hierarchical Grid Sorting

In Ignite UI for Angular Hierarchical Grid, data sorting is enabled on a per-column level, meaning that the **igx-hierarchical-grid** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.

**Note:** 
Up until now, grouping/sorting worked in conjunction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

## Angular Hierarchical Grid Sorting Overview Example

Additionally there is a custom context menu added for sorting using **igx-hierarchical-grid**'s [`contextMenu`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=contextMenu) Output.

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

This is done via the [`sortable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=sortable) input. With the Hierarchical Grid sorting, you can also set the [`sortingIgnoreCase`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=sortingIgnoreCase) property to perform case sensitive sorting:

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The **IgxHierarchicalGrid** provides a solution for this problem by indicating the index of each sorted column.

## Sorting through the API

You can sort any column or a combination of columns through the Hierarchical Grid API using the Hierarchical Grid [`sort`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=sort) method:

```typescript
import { SortingDirection } from 'igniteui-angular/grids/core';
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package

// Perform a case insensitive ascending sort on the ProductName column.
this.hierarchicalGrid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.hierarchicalGrid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

**Note:** 
Sorting is performed using our [`IgxDefaultSortingStrategy`](mcp:get_api_reference?platform=angular&component=DefaultSortingStrategy) algorithm. Any [`IgxColumnComponent`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=sortStrategy) or [`ISortingExpression`](mcp:get_api_reference?platform=angular&component=ISortingExpression&member=strategy) can use a custom implementation of the [`IgxISortingStrategy`](mcp:get_api_reference?platform=angular&component=ISortingStrategy) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`clearSort`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=clearsort) method:

```typescript
// Removes the sorting state from the ProductName column
this.hierarchicalGrid.clearSort('ProductName');

// Removes the sorting state from every column in the Hierarchical Grid
this.hierarchicalGrid.clearSort();
```

**Note:** 
The [`sortStrategy`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=sortStrategy) of the **Hierarchical Grid** is of different type compared to the [`sortStrategy`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=sortStrategy) of the **column**, since they work in different scopes and expose different parameters.

**Note:** 
The sorting operation **DOES NOT** change the underlying data source of the Hierarchical Grid.

## Initial sorting state

It is possible to set the initial sorting state of the Hierarchical Grid by passing an array of sorting expressions to the [`sortingExpressions`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=sortingExpressions) property of the Hierarchical Grid.

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

**Note:** 
If values of type `string` are used by a column of [`dataType`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=dataType) `Date`, the Hierarchical Grid won't parse them to `Date` objects and using Hierarchical Grid `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

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

## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the `grid-theme` and accepts the `$sorted-header-icon-color` and `sortable-header-icon-hover-color` parameters.

```scss
$custom-theme: grid-theme(
  $sorted-header-icon-color: #ffb06a,
  $sortable-header-icon-hover-color: black
);
```

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `palette` and `color` functions. Please refer to [`Palettes`](/themes/sass/palettes) topic for detailed guidance on how to use them.

The last step is to apply the component theme with `tokens()`:

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

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## API References
- [`IgxHierarchicalGrid`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent)
- `IgxHierarchicalGridComponent Styles`
- [`IgxISortingExpression`](mcp:get_api_reference?platform=angular&component=ISortingExpression)
## Additional Resources

- [Hierarchical Grid overview](/hierarchicalgrid/hierarchical-grid)
- [Virtualization and Performance](/hierarchicalgrid/virtualization)
- [Paging](/hierarchicalgrid/paging)
- [Filtering](/hierarchicalgrid/filtering)
- [Summaries](/hierarchicalgrid/summaries)
- [Column Moving](/hierarchicalgrid/column-moving)
- [Column Pinning](/hierarchicalgrid/column-pinning)
- [Column Resizing](/hierarchicalgrid/column-resizing)
- [Selection](/hierarchicalgrid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
