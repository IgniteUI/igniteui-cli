---
title: Excel Style Filtering in Angular Hierarchical Grid - Ignite UI for Angular
description: Learn how to configure Excel filtering in Angular Hierarchical Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
keywords: excel like filter, igniteui for angular, infragistics
license: commercial
_canonicalLink: grid/excel-style-filtering
llms:
  description: "The grid Excel filtering provides an Excel like filtering UI for any Angular table like the Hierarchical Grid."
_tocName: Excel Style Filtering
_premium: true
---
# Excel Filtering in Angular Hierarchical Grid

The grid Excel filtering provides an Excel like filtering UI for any Angular table like the Hierarchical Grid.

## Angular Hierarchical Grid Excel Style Filtering Example

```typescript
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-1',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-1.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridExcelStyleFilteringSample1Component implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    public size = 'large';
    public sizes: any[];

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    public formatter = (a) => a;

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
        this.hierarchicalGrid.reflow();
    }
}
```
```html
<div class="wrapper">
    <div class="density-chooser">
        <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
    </div>
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [moving]="true" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    height="850px" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Artist" [sortable]="true"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [sortable]="true" dataType="number" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [sortable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [sortable]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter" [moving]="true">
            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.wrapper {
    margin: 16px;
}

.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}

.density-chooser {
    margin-bottom: 16px;
}

igx-buttongroup{
    display: block;
    width: 500px;
}
```

## Usage

To turn on the grid excel filtering, two inputs should be set. The [`allowFiltering`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=allowFiltering) should be set to `true` and the [`filterMode`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=filterMode) should be set to `excelStyleFilter`.

```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-hierarchical-grid>
```

## Interactions

In order to open the filter menu for a particular column, the Angular filter icon in the header should be clicked. Additionally, you can use the `Ctrl + Shift + L` combination on a selected header. If the column can be sorted, pinned, moved, selected or hidden along with the filtering functionality, there will be buttons available for the features that are turned on.

If no filter is applied, all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data, you can select/deselect the items in the list and either click the Apply button, or press `Enter`. The filtering applied through the list items creates filter expressions with `equals` operator and the logic operator between the expressions is [`IgxFilteringLogic.Or`](mcp:get_api_reference?platform=angular&component=FilteringLogic&member=Or).

If you type something in the search box and apply the filter, only the items that match the search criteria will be selected. If you want to add items to the currently filtered ones, however, you should select the option `Add current selection to filter`.

If you want to clear the filter, you can check the `Select All` option and then click the Apply button.

To apply a filter with different expressions, you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button, which can clear the filter.

## Configure Menu Features

Sorting, pinning and hiding features can be removed from the filter menu using the corresponding inputs: [`sortable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=sortable), [`selected`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selected), [`disablePinning`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=disablePinning), [`disableHiding`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=disableHiding).

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [moving]="true" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```

In the sample below 'Artist' column have all three features enabled, 'Debut' have all three disabled, 'Grammy Nominations' has only pinning and hiding.

```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-2',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-2.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-2.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridExcelStyleFilteringSample2Component {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [moving]="true" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    height="850px" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true" dataType="number" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [filterable]='true' dataType="number" [sortable]="false"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [filterable]='true' dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
            <igx-column field="Album" [filterable]='true'></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [filterable]='true' dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [filterable]='true' dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.wrapper {
    margin: 16px;
}

.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```

## Templates

If you want to further customize the Excel style filter menu without disabling the column features you could use custom templates. The Excel Style filter menu provides two directives for templating:

- `IgxExcelStyleColumnOperationsTemplateDirective` - re-templates the area with all column operations like sorting, pinning, etc.
- `IgxExcelStyleFilterOperationsTemplateDirective` - re-templates the area with all filter specific operations.

You could either re-template only one of those areas or both of them. You could put any custom content inside those directives or you could use any of our built-in Excel style filtering components.

The following code demonstrates how to define a custom Excel style filter menu using the [`IgxExcelStyleHeader`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleHeaderComponent), [`IgxExcelStyleSorting`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleSortingComponent) and [`IgxExcelStyleSearch`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleSearchComponent) components.

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    
    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

    ...

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
            <igx-excel-style-column-operations>
                <igx-excel-style-header
                    [showPinning]="true"
                    [showHiding]="true"
                >
                </igx-excel-style-header>

                <igx-excel-style-sorting></igx-excel-style-sorting>
            </igx-excel-style-column-operations>

            <igx-excel-style-filter-operations>
                <igx-excel-style-search></igx-excel-style-search>
            </igx-excel-style-filter-operations>
        </igx-grid-excel-style-filtering>
        ....
    </igx-row-island>
</igx-hierarchical-grid>
```

You could also re-template the Excel style filtering icon in the column header using the `igxExcelStyleHeaderIcon` directive:

```html
<igx-hierarchical-grid ...>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</igx-hierarchical-grid>
```

```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleHeaderIconDirective, IgxExcelStyleSearchComponent, IgxExcelStyleSortingComponent, IgxGridExcelStyleFilteringComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-3',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-3.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-3.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxExcelStyleHeaderIconDirective, IgxIconComponent, IgxGridExcelStyleFilteringComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleSortingComponent, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleSearchComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridExcelStyleFilteringSample3Component {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [moving]="true" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    height="650px" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>


        <ng-template igxExcelStyleHeaderIcon>
            <igx-icon>filter_alt</igx-icon>
        </ng-template>

        <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
            <igx-excel-style-column-operations>
                <igx-excel-style-header
                    [showPinning]="true"
                    [showHiding]="true"
                >
                </igx-excel-style-header>

                <igx-excel-style-sorting></igx-excel-style-sorting>
            </igx-excel-style-column-operations>

            <igx-excel-style-filter-operations>
                <igx-excel-style-search></igx-excel-style-search>
            </igx-excel-style-filter-operations>
        </igx-grid-excel-style-filtering>

        <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true" dataType="number" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [filterable]='true' dataType="number" [sortable]="false"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [filterable]='true' dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">

            <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
                <igx-excel-style-column-operations>
                    <igx-excel-style-header
                        [showPinning]="true"
                        [showHiding]="true"
                    >
                    </igx-excel-style-header>

                    <igx-excel-style-sorting></igx-excel-style-sorting>
                </igx-excel-style-column-operations>

                <igx-excel-style-filter-operations>
                    <igx-excel-style-search></igx-excel-style-search>
                </igx-excel-style-filter-operations>
            </igx-grid-excel-style-filtering>

            <igx-column field="Album" [filterable]='true'></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [filterable]='true' dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [filterable]='true' dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.wrapper {
    margin: 16px;
}

.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```

Here is the full list of Excel style filtering components that you could use:

- [`IgxExcelStyleHeader`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleHeaderComponent)
- [`IgxExcelStyleSorting`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleSortingComponent)
- [`IgxExcelStyleMoving`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleMovingComponent)
- [`IgxExcelStylePinning`](mcp:get_api_reference?platform=angular&component=IgxExcelStylePinningComponent)
- [`IgxExcelStyleHiding`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleHidingComponent)
- [`IgxExcelStyleSelecting`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleSelectingComponent)
- [`IgxExcelStyleClearFilters`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleClearFiltersComponent)
- [`IgxExcelStyleConditionalFilter`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleConditionalFilterComponent)
- [`IgxExcelStyleSearch`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleSearchComponent)

## Unique Column Values Strategy

The list items inside the Excel Style Filtering dialog represent the unique values for the respective column.

These values can be provided manually and loaded on demand, which is demonstrated in the [`Hierarchical Grid Remote Data Operations`](/hierarchicalgrid/remote-data-operations#unique-column-values-strategy) topic.

## Formatted Values Filtering Strategy

By default, the Hierarchical Grid component filters the data based on the original cell values, however in some cases you may want to filter the data based on the formatted values. In order to do that you can use the [`IgxFormattedValuesFilteringStrategy`](mcp:get_api_reference?platform=angular&component=FormattedValuesFilteringStrategy).

The following sample demonstrates how to format the numeric values of a column as strings and filter the Hierarchical Grid based on the string values:

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { FormattedValuesFilteringStrategy } from 'igniteui-angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-formatted-filtering-strategy',
    styleUrls: ['./hierarchical-grid-formatted-filtering-strategy.component.scss'],
    templateUrl: 'hierarchical-grid-formatted-filtering-strategy.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridFormattedFilteringStrategyComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public filterStrategy = new FormattedValuesFilteringStrategy();

    constructor() {
        this.localdata = SINGERS;
    }

    public decadeFormatter = (value: number) => Math.floor(value / 10) * 10 + 's';
}
```
```html
<div class="wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false"
        [allowFiltering]='true' filterMode="excelStyleFilter" [filterStrategy]="filterStrategy"
        height="600px" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column field="Debut" header="Debut Decade" [sortable]="true" [disableHiding]="true" [formatter]="decadeFormatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [sortable]="true" [disableHiding]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
            <igx-column field="Album" [sortable]="true" [disableHiding]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [disableHiding]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true" [disableHiding]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true" [disableHiding]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.wrapper {
    margin: 16px;
}
```

**Note:** 
The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter.

## External Excel Style filtering

As you see at the demos above the default appearance of the Excel Style filtering dialog is inside the Hierarchical Grid. So this dialog is only visible when configuring the filters. There is a way to make that dialog stay always visible - it can be used outside of the grid as a standalone component. In the demo below, the Excel style filtering is declared separately of the Hierarchical Grid.

### Demo

```typescript
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridExcelStyleFilteringComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';

import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-external-excel-style-filtering',
    templateUrl: './hierarchical-grid-external-excel-style-filtering.component.html',
    styleUrls: ['./hierarchical-grid-external-excel-style-filtering.component.scss'],
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HGridExternalExcelStyleFilteringComponent implements AfterViewInit{

    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true })
    public hgrid: IgxHierarchicalGridComponent;

    public columns: any[];
    public localdata: any[];

    constructor() {
        this.localdata = SINGERS;
    }

    public ngAfterViewInit() {
        this.columns = this.hgrid.columnList.filter(c => c.filterable);
    }
}
```
```html
<div class="grid__wrapper">
  <div class="flex-column">
    <igx-select #gridColums value="Artist" class="igSelect">
      <label igxLabel>Columns:</label>
      @for (c of columns; track c) {
        <igx-select-item [value]="c.field">
          {{c.field}}
        </igx-select-item>
      }
    </igx-select>

    <igx-grid-excel-style-filtering [column]="hierarchicalGrid.getColumnByName(gridColums.value)" [maxHeight]="'590px'">
    </igx-grid-excel-style-filtering>
  </div>

  <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata"
    [autoGenerate]="false" height="640px" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="Artist"></igx-column>
    <igx-column field="Photo" [filterable]="false">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
          <img [src]="cell.value" class="photo" />
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="Debut" [sortable]="true" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
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
    flex-flow: row;
    column-gap: 5px;
}

.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}

.flex-column {
    display: flex;
    flex-flow: column;
    height: 645px;
    margin-left: 1px;
}

.igSelect {
    margin-left: 1px;
}
```

### Usage

In order to configure the Excel style filtering component, you should set its [`column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) property to one of the Hierarchical Grid's columns. In the sample above, we have bound the [`column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) property to the value of an IgxSelectComponent that displays the Hierarchical Grid's columns.

```html
<igx-select #gridColums value="Artist">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of hierarchicalgrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="hierarchicalgrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

## External Outlet

The Hierarchical Grid's [`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) creates separate stacking context for each grid in the DOM. This ensures that all descendant elements of the grid will render as intended, without overlapping one another.
However, elements that go outside of the grid (e.g. Excel Style filter) will conflict with outside elements with the same `z-index` (e.g. having two grids one under another) resulting in false rendering. The solution for this issue is to set the [`outlet`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=outlet) property to an external outlet directive which allows the overlay elements to always appear on top.

### Demo

```typescript
import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-external-outlet',
    styleUrls: ['./hierarchical-grid-external-outlet-sample.component.scss'],
    templateUrl: 'hierarchical-grid-external-outlet-sample.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxOverlayOutletDirective]
})

export class HierarchicalGridExternalOutletComponent implements OnInit {
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = SINGERS;

    }
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hGrid1 class="hgrid" [data]="data" [moving]="true" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    height="300px" [width]="'100%'" [rowHeight]="'65px'" [outlet]="filteringOverlayOutlet">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Artist" [sortable]="true"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [sortable]="true" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [sortable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [sortable]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [moving]="true" [allowFiltering]='true' filterMode="excelStyleFilter">
            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>

    <br>

    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hGrid2 class="hgrid" [data]="data" [moving]="true" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    height="300px" [width]="'100%'" [rowHeight]="'65px'" [outlet]="filteringOverlayOutlet">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Artist" [sortable]="true"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [sortable]="true" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [sortable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [sortable]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' [moving]="true" filterMode="excelStyleFilter">
            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>

</div>

<div #filteringOverlayOutlet="overlay-outlet" igxOverlayOutlet></div>
```
```scss
.grid__wrapper {
    margin: 0 16px;
    padding-top: 10px;
}
```

## Styling

To get started with styling the Excel Style Filtering dialog, we need to import the `index` file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

There are a couple of ways to style the Excel Style Filtering dialog. It can be styled using the `grid-theme`. The Excel Style Filtering dialog inherits the `$background`, `$foreground`, and `$accent-color` values defined in the `grid-theme`. It also provides dedicated parameters for customizing the dialog’s text colors.

Alternatively, you can use the dedicated `excel-filtering-theme`, which allows you to fully style only the Excel Style Filtering dialog.

The simplest approach is to use the `grid-theme`:

```scss
$background: #292826;
$foreground: #eeece1;
$accent: #ffcd0f;

$custom-grid: grid-theme(
  $background: $background,
  $foreground: $foreground,
  $accent-color: $accent,
);
```

The background and foreground colors of the Excel Style Filtering dialog are inherited from the grid theme. Additionally, all nested components, such as buttons and checkboxes, inherit the accent color from the grid theme.

After that, we are ready to include our newly created grid theme. If we want to make additional style changes specific to the Excel Style Filtering dialog, we can target it directly:

```scss
:host {
    @include tokens($custom-grid);

    igx-grid-excel-style-filtering {
        --ig-excel-filtering-background: #444;
    }
}
```

**Note:** 
This sample uses `::ng-deep` because both the generated theme selectors and the direct Excel Filtering selector must reach elements inside the grid's view. Moving the overrides to a global stylesheet is an alternative.


```scss
:host ::ng-deep {
    @include tokens($custom-grid);

    igx-grid-excel-style-filtering {
        --ig-excel-filtering-background: #444;
    }
}
```

### Demo

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-style',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-style.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HGridExcelStyleFilteringStyleComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
}
```
```html
<div class="wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [moving]="true" [autoGenerate]="false"
    [allowFiltering]='true' filterMode="excelStyleFilter" height="900px" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist" [sortable]="true"></igx-column>
        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [sortable]="true" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [sortable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [sortable]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter" [moving]="true">
            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$background: #292826;
$foreground: #eeece1;
$accent: #ffcd0f;

$custom-grid: grid-theme(
    $background: $background,
    $foreground: $foreground,
    $accent-color: $accent,
);

:host ::ng-deep {
    @include tokens($custom-grid);

    igx-grid-excel-style-filtering {
        --ig-excel-filtering-background: #444;
    }
}
```

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## API References
- [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent)
- [`IgxHierarchicalGrid`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent)
- `IgxHierarchicalGridComponent Styles`
- `Excel Filtering Theme`
## Additional Resources

- [Hierarchical Grid overview](/hierarchicalgrid/hierarchical-grid)
- [Paging](/hierarchicalgrid/paging)

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
