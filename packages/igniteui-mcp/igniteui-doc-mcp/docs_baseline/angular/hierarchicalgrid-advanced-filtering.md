---
title: Advanced Filtering in Angular Data Grid - Ignite UI for Angular
_description: Learn how to configure advanced filter of data with the Angular table. The grid advanced filtering is more convenient and engaging than ever.
_keywords: advanced filter, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/advanced-filtering
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
<div class="divider--half"></div>
## Interaction
In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. The dialog is using the [`IgxQueryBuilder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) component to generate,display and edit the filtering logic. You can have a look at the [`Query Builder topic`](../query-builder.md#getting-started-with-ignite-ui-for-angular-query-builder) for details on the interaction process.
In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.
## Usage
To enable the advanced filtering, the [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#allowAdvancedFiltering) input property should be set to `true`.
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</igx-hierarchical-grid>
```
The advanced filtering generates a [`FilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/filteringexpressionstree.html) which is stored in the [`advancedFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#advancedFilteringExpressionsTree) input property. You could use this property to set an initial state of the advanced filtering.
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
The advanced filtering in the `IgxHierarchicalGrid` can be used to filter root grid data based on child grids data using the _IN / NOT-IN_ operators. This way, subqueries can be created to define more complex filtering logic. More information about this functionality can be found in [`Query Builder's Using Sub-Queries section`](../query-builder-model.md#using-sub-queries). Here's a sample [`FilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/filteringexpressionstree.html) with a subquery:
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
If remote data is used, the [`schema`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#schema) property of the `IgxHierarchicalGrid` should be set. Please refer to [`Load on Demand`](../hierarchicalgrid/load-on-demand.md) topic for detailed guidance.
In case you don't want to show the Hierarchical Grid toolbar, you could use the [`openAdvancedFilteringDialog`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#openAdvancedFilteringDialog) and [`closeAdvancedFilteringDialog`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#closeAdvancedFilteringDialog) methods to open and close the advanced filtering dialog programmatically.
>[!NOTE]
>You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the Hierarchical Grid. Both filtering user interfaces will work independently of one another. The final filtered result in the Hierarchical Grid is the intersection between the results of the two filters.
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
It's super easy to configure the advanced filtering to work outside of the Hierarchical Grid. All you need to do is to create the dialog and set its [`grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaradvancedfilteringcomponent.html#grid) property:
```html
<igx-advanced-filtering-dialog [grid]="hierarchicalGrid">
</igx-advanced-filtering-dialog>
```
You can also see how our [drag and drop App Builder™](https://www.infragistics.com/products/appbuilder) can streamline the entire design-to-Angular-code story.
<div class="divider--half"></div>
## Styling
To get started with styling the Advanced Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Since the Advanced Filtering dialog uses the [`IgxQueryBuilder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) component, you can use the [`query-builder-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#query-builder-theme) to style it. To style the header title, you can create a custom theme that extends the [`query-builder-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#query-builder-theme) and set the `$header-foreground` parameter.
```scss
$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component theme in our application.
```scss
$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px)
);
igx-advanced-filtering-dialog {
  @include tokens($custom-query-builder);
}
```
>[!NOTE]
>We include the created **query-builder-theme** within `igx-advanced-filtering-dialog`, so that this custom theme will affect only the query builder nested in the advanced filtering dialog. Otherwise other query builder components in the application would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:
```scss
$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px)
);
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
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px)
);

:host {
    @include tokens($custom-query-builder);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>
## API References
<div class="divider--half"></div>
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Filtering](filtering.md)
- [Excel Style Filtering](excel-style-filtering.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
