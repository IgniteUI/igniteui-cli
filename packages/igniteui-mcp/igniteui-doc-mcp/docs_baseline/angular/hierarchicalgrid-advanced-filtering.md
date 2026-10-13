---
title: Advanced Filtering in Angular Data Grid - Ignite UI for Angular
description: Learn how to configure advanced filter of data with the Angular table. The grid advanced filtering is more convenient and engaging than ever.
keywords: advanced filter, igniteui for angular, infragistics
license: commercial
_canonicalLink: grid/advanced-filtering
llms:
  description: "The Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any Angular table like the Hierarchical Grid."
_tocName: Advanced Filtering
_premium: true
---
# Angular Hierarchical Grid Advanced Filtering

The Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any [Angular table](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) like the Hierarchical Grid.

## Angular Hierarchical Grid Advanced Filtering Example

```typescript
import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, inject } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarDirective } from 'igniteui-angular/grids/core';
import { FilteringExpressionsTree, FilteringLogic, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-advanced-filtering',
    styleUrls: ['./hierarchical-grid-advanced-filtering.component.scss'],
    templateUrl: 'hierarchical-grid-advanced-filtering.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})

export class HGridAdvancedFilteringSampleComponent implements AfterViewInit{
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('hGrid', { static: true })
    private hGrid: IgxHierarchicalGridComponent;

    public localData;

    constructor() {
        this.localData = SINGERS;
    }

    public ngAfterViewInit() {
        const albumsTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Albums', ['Artist']);
        albumsTree.filteringOperands.push({
            fieldName: 'LaunchDate',
            condition: IgxDateFilteringOperand.instance().condition('after'),
            conditionName: IgxDateFilteringOperand.instance().condition('after').name,
            searchVal: new Date(2017, 1, 1)
        });
        const tree = new FilteringExpressionsTree(FilteringLogic.And);
        tree.filteringOperands.push({
            fieldName: 'Artist',
            condition: IgxStringFilteringOperand.instance().condition('inQuery'),
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            searchTree: albumsTree
        });
        this.hGrid.advancedFilteringExpressionsTree = tree;
        this.cdr.detectChanges();
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid #hGrid [igxPreventDocumentScroll]="true" class="hgrid" [data]="localData" [autoGenerate]="false" [allowAdvancedFiltering]="true"
        [height]="'600px'" [width]="'100%'" [rowHeight]="'65px'">
        <igx-grid-toolbar></igx-grid-toolbar>

        <igx-column field="Artist"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" dataType="number" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowAdvancedFiltering]="true">
            <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
            <igx-column field="Artist" header="Artist" [hidden]="true"></igx-column>

            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false" [allowAdvancedFiltering]="true">
            <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}

.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```

## Interaction

In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. The dialog is using the [`IgxQueryBuilder`](mcp:get_api_reference?platform=angular&component=IgxQueryBuilderComponent) component to generate,display and edit the filtering logic. You can have a look at the [`Query Builder topic`](../query-builder.md#getting-started-with-ignite-ui-for-angular-query-builder) for details on the interaction process.

In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.

## Usage

To enable the advanced filtering, the [`allowAdvancedFiltering`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=allowAdvancedFiltering) input property should be set to `true`.

```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</igx-hierarchical-grid>
```

The advanced filtering generates a [`IgxFilteringExpressionsTree`](mcp:get_api_reference?platform=angular&component=FilteringExpressionsTree) which is stored in the [`advancedFilteringExpressionsTree`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=advancedFilteringExpressionsTree) input property. You could use this property to set an initial state of the advanced filtering.

```TypeScript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.Or);
    tree.filteringOperands.push({
        fieldName: 'Artist',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        conditionName: IgxStringFilteringOperand.instance().condition('startsWith').name,
        searchVal: 'A'
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.And);
    subTree.filteringOperands.push({
        fieldName: 'GrammyAwards',
        condition: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo'),
        conditionName: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo').name,
        searchVal: 1
    });
    subTree.filteringOperands.push({
        fieldName: 'Debut',
        condition: IgxNumberFilteringOperand.instance().condition('lessThan'),
        conditionName: IgxNumberFilteringOperand.instance().condition('lessThan').name,
        searchVal: 2000
    });
    tree.filteringOperands.push(subTree);
    this.hierarchicalGrid.advancedFilteringExpressionsTree = tree;
}
```

The advanced filtering in the `IgxHierarchicalGrid` can be used to filter root grid data based on child grids data using the _IN / NOT-IN_ operators. This way, subqueries can be created to define more complex filtering logic. More information about this functionality can be found in [`Query Builder's Using Sub-Queries section`](../query-builder-model.md#using-sub-queries). Here's a sample [`IgxFilteringExpressionsTree`](mcp:get_api_reference?platform=angular&component=FilteringExpressionsTree) with a subquery:

```TypeScript
ngAfterViewInit(): void {
    const albumsTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Albums', ['Artist']);
    albumsTree.filteringOperands.push({
        fieldName: 'LaunchDate',
        condition: IgxDateFilteringOperand.instance().condition('after'),
        conditionName: IgxDateFilteringOperand.instance().condition('after').name,
        searchVal: new Date(2017, 1, 1)
    });
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'Artist',
        condition: IgxStringFilteringOperand.instance().condition('inQuery'),
        conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
        searchTree: albumsTree
    });
    this.hierarchicalGrid.advancedFilteringExpressionsTree = tree;
}
```

If remote data is used, the [`schema`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=schema) property of the `IgxHierarchicalGrid` should be set. Please refer to [`Load on Demand`](../hierarchicalgrid/load-on-demand.md) topic for detailed guidance.

In case you don't want to show the Hierarchical Grid toolbar, you could use the [`openAdvancedFilteringDialog`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=openAdvancedFilteringDialog) and [`closeAdvancedFilteringDialog`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=closeAdvancedFilteringDialog) methods to open and close the advanced filtering dialog programmatically.

**Note:** 
You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the Hierarchical Grid. Both filtering user interfaces will work independently of one another. The final filtered result in the Hierarchical Grid is the intersection between the results of the two filters.

## External Advanced filtering

As you see the demo above the Advanced filtering dialog is hosted in an overlay on top of the Hierarchical Grid. When the setup in the dialog is ready, the apply or close actions would hide that dialog. There is a way to make that dialog stay always visible - be used as a standalone component. In the demo below, the advanced filtering dialog is declared separately of the Hierarchical Grid.

### Demo

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxAdvancedFilteringDialogComponent, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarDirective } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-external-advanced-filtering',
    templateUrl: './hierarchical-grid-external-advanced-filtering.component.html',
    styleUrls: ['./hierarchical-grid-external-advanced-filtering.component.scss'],
    imports: [IgxAdvancedFilteringDialogComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent]
})
export class HGridExternalAdvancedFilteringComponent {

    public localdata: any;
    constructor() {
        this.localdata = SINGERS;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-advanced-filtering-dialog class="advanced-dialog" [grid]="hierarchicalGrid">
    </igx-advanced-filtering-dialog>

    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  [data]="localdata" [autoGenerate]="false" [height]="'400px'"
        [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
            <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-flow: column;
    align-items: stretch;
}

.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}

.advanced-dialog {
    margin-bottom: 2px;
    height: 325px;
    overflow-y: auto;
}
```

### Usage

It's super easy to configure the advanced filtering to work outside of the Hierarchical Grid. All you need to do is to create the dialog and set its [`grid`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarAdvancedFilteringComponent&member=grid) property:

```html
<igx-advanced-filtering-dialog [grid]="hierarchicalGrid">
</igx-advanced-filtering-dialog>
```

You can also see how our [drag and drop App Builder™](https://www.infragistics.com/products/appbuilder) can streamline the entire design-to-Angular-code story.

## Styling

To get started with styling the Advanced Filtering dialog, we need to import the `index` file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Since the Advanced Filtering dialog uses the [`IgxQueryBuilder`](mcp:get_api_reference?platform=angular&component=IgxQueryBuilderComponent) component, you can use the `query-builder-theme` to style it. To style the header title, you can create a custom theme that extends the `query-builder-theme` and set the `$header-foreground` parameter.

```scss
$custom-query-builder: query-builder-theme(
  $background: #1f2836,
  $foreground: #f5f6e6,
  $accent-color: #f5f6e6
);
```

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `palette` and `color` functions. Please refer to [`Palettes`](/themes/sass/palettes) topic for detailed guidance on how to use them.

The last step is to **include** the component theme in our application.

```scss
igx-advanced-filtering-dialog {
  @include tokens($custom-query-builder);
}
```

**Note:** 
We include the created **query-builder-theme** within `igx-advanced-filtering-dialog`, so that this custom theme will affect only the query builder nested in the advanced filtering dialog. Otherwise other query builder components in the application would be affected too.

**Note:** 
In some component templates, Emulated View Encapsulation can still prevent the generated token declarations from reaching nested Ignite UI elements. If the theme does not take effect, use `::ng-deep` as shown below or move the theme to a global stylesheet.


```scss
:host {
  ::ng-deep {
    igx-advanced-filtering-dialog {
      @include tokens($custom-query-builder);
    }
  }
}
```

### Demo

```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarDirective } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-advanced-filtering-style',
    styleUrls: ['./hierarchical-grid-advanced-filtering-style.component.scss'],
    templateUrl: 'hierarchical-grid-advanced-filtering-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})

export class HGridAdvancedFilteringStyleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false" [allowAdvancedFiltering]="true"
    [height]="'600px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-grid-toolbar></igx-grid-toolbar>

    <igx-column field="Artist"></igx-column>
    <igx-column field="Photo" [filterable]="false">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

        <igx-column field="Album"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
    <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="Number" header="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released" dataType="date"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

        <igx-column field="Tour"></igx-column>
        <igx-column field="StartedOn" header="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```
```scss
@use "igniteui-angular/theming" as *;

$custom-query-builder: query-builder-theme(
    $background: #1f2836,
    $foreground: #f5f6e6,
    $accent-color: #f5f6e6
);

:host ::ng-deep {
    igx-advanced-filtering-dialog {
        @include tokens($custom-query-builder);
    }
}
```

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## API References
- [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent)
- [`IgxHierarchicalGrid`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent)
- `IgxHierarchicalGridComponent Styles`
## Additional Resources

- [Hierarchical Grid overview](/hierarchicalgrid/hierarchical-grid)
- [Excel Style Filtering](/hierarchicalgrid/excel-style-filtering)
- [Paging](/hierarchicalgrid/paging)

- [Filtering](/hierarchicalgrid/filtering)
- [Virtualization and Performance](/hierarchicalgrid/virtualization)
- [Sorting](/hierarchicalgrid/sorting)
- [Summaries](/hierarchicalgrid/summaries)
- [Column Moving](/hierarchicalgrid/column-moving)
- [Column Pinning](/hierarchicalgrid/column-pinning)
- [Column Resizing](/hierarchicalgrid/column-resizing)
- [Selection](/hierarchicalgrid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
