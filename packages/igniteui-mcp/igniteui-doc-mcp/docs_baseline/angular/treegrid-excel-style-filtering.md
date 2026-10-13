---
title: Excel Style Filtering in Angular Tree Grid - Ignite UI for Angular
description: Learn how to configure Excel filtering in Angular Tree Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
keywords: excel like filter, igniteui for angular, infragistics
license: commercial
_canonicalLink: grid/excel-style-filtering
llms:
  description: "The grid Excel filtering provides an Excel like filtering UI for any Angular table like the Tree Grid."
_tocName: Excel Style Filtering
_premium: true
---
# Excel Filtering in Angular Tree Grid

The grid Excel filtering provides an Excel like filtering UI for any Angular table like the Tree Grid.

## Angular Tree Grid Excel Style Filtering Example

```typescript
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { TreeGridFilteringStrategy } from 'igniteui-angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-excel-style-filtering-sample-1',
    styleUrls: ['./tree-grid-excel-style-filtering-sample-1.component.scss'],
    templateUrl: 'tree-grid-excel-style-filtering-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridExcelStyleFilteringSample1Component implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public filterStrategy = new TreeGridFilteringStrategy(['ID', 'Name']);

    public size = 'large';
    public sizes: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA;
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

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event: any) {
        this.size = this.sizes[event.index].label;
        this.treegrid1.reflow();
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }
}
```
```html
<div class="grid__wrapper">
  <div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
  </div>
  <igx-tree-grid [igxPreventDocumentScroll]="true" [moving]="true"  #treegrid1 [data]="data" [autoGenerate]="false" height="850px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter" [filterStrategy]="filterStrategy">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ID" header="Order ID" [sortable]="true">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true">
    </igx-column>
    <igx-column field="Units" header="Units" dataType="number" [sortable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="true" >
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="true">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
.grid__wrapper {
    margin: 16px;
}

.gridSample__filter {
    width: 200px;
}

.cell__inner,
.cell__inner_2 {
  display: flex;
  align-items: center;
  height: 100%;
}

.cell__inner {
  position: relative;
  justify-content: space-between;
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

To turn on the grid excel filtering, two inputs should be set. The [`allowFiltering`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=allowFiltering) should be set to `true` and the [`filterMode`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=filterMode) should be set to `excelStyleFilter`.

```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-tree-grid>
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
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [moving]="true" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Order ID" [dataType]="'string'"></igx-column>
    <igx-column field="Name" header="Order Product" [dataType]="'string'" [sortable]="true"></igx-column>
    <igx-column field="Category" header="Category" [dataType]="'string'" [sortable]="true"></igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true"></igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions"></igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false" [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false"></igx-column>
    <igx-column field="Delivered" header="Deliverued" [dataType]="'boolean'" [sortable]="false">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

In the sample below 'Order Product', 'Category' and 'Units' columns have all three features enabled, 'Price' have all three disabled, 'Order Date' and 'Delivered' have only pinning and hiding.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-excel-style-filtering-sample-2',
    styleUrls: ['./tree-grid-excel-style-filtering-sample-2.component.scss'],
    templateUrl: 'tree-grid-excel-style-filtering-sample-2.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridExcelStyleFilteringSample2Component implements OnInit {
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
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [autoGenerate]="false" height="850px" width="100%" [allowFiltering]="true"
    primaryKey="ID" [moving]="true" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true" >
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true" >
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false" [disablePinning]="true" [disableHiding]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [sortable]="false">
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
.grid__wrapper {
    margin: 16px;
}

.gridSample__filter {
    width: 200px;
}

.cell__inner,
.cell__inner_2 {
  display: flex;
  align-items: center;
  height: 100%;
}

.cell__inner {
  position: relative;
  justify-content: space-between;
}
```

## Templates

If you want to further customize the Excel style filter menu without disabling the column features you could use custom templates. The Excel Style filter menu provides two directives for templating:

- `IgxExcelStyleColumnOperationsTemplateDirective` - re-templates the area with all column operations like sorting, pinning, etc.
- `IgxExcelStyleFilterOperationsTemplateDirective` - re-templates the area with all filter specific operations.

You could either re-template only one of those areas or both of them. You could put any custom content inside those directives or you could use any of our built-in Excel style filtering components.

The following code demonstrates how to define a custom Excel style filter menu using the [`IgxExcelStyleHeader`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleHeaderComponent), [`IgxExcelStyleSorting`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleSortingComponent) and [`IgxExcelStyleSearch`](mcp:get_api_reference?platform=angular&component=IgxExcelStyleSearchComponent) components.

```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">

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
</igx-tree-grid>
```

You could also re-template the Excel style filtering icon in the column header using the `igxExcelStyleHeaderIcon` directive:

```html
<igx-tree-grid ...>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</igx-tree-grid>
```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleHeaderIconDirective, IgxExcelStyleSearchComponent, IgxExcelStyleSortingComponent, IgxGridExcelStyleFilteringComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-excel-style-filtering-sample-3',
    styleUrls: ['./tree-grid-excel-style-filtering-sample-3.component.scss'],
    templateUrl: 'tree-grid-excel-style-filtering-sample-3.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxExcelStyleHeaderIconDirective, IgxIconComponent, IgxGridExcelStyleFilteringComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleSortingComponent, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleSearchComponent, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridExcelStyleFilteringSample3Component implements OnInit {
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
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [autoGenerate]="false" [moving]="true" height="650px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
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

    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
.grid__wrapper {
    margin: 16px;
}

.gridSample__filter {
    width: 200px;
}

.cell__inner,
.cell__inner_2 {
  display: flex;
  align-items: center;
  height: 100%;
}

.cell__inner {
  position: relative;
  justify-content: space-between;
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

These values can be provided manually and loaded on demand, which is demonstrated in the [`Tree Grid Remote Data Operations`](/treegrid/remote-data-operations#unique-column-values-strategy) topic.

## Formatted Values Filtering Strategy

By default, the Tree Grid component filters the data based on the original cell values, however in some cases you may want to filter the data based on the formatted values. In order to do that you can use the [`IgxTreeGridFormattedValuesFilteringStrategy`](mcp:get_api_reference?platform=angular&component=TreeGridFormattedValuesFilteringStrategy). The following sample demonstrates how to format the numeric values of a column as strings and filter the Tree Grid based on the string values:

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { TreeGridFormattedValuesFilteringStrategy } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-formatted-filtering-strategy',
    styleUrls: ['./tree-grid-formatted-filtering-strategy.component.scss'],
    templateUrl: 'tree-grid-formatted-filtering-strategy.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridFormattedFilteringStrategyComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public filterStrategy = new TreeGridFormattedValuesFilteringStrategy();

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public formatPrice(value: number) {
        return value ? value < 3 ? 'low' : value > 5 ? 'high' : 'medium' : '';
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treegrid1 [data]="data" [autoGenerate]="false" height="600px" width="100%"
    [allowFiltering]="true" filterMode="excelStyleFilter" [filterStrategy]="filterStrategy"
    primaryKey="ID" foreignKey="ParentID">

    <igx-column field="ID" header="Order ID" [sortable]="true" [disableHiding]="true">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true" [disableHiding]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true" [disableHiding]="true">
    </igx-column>
    <igx-column field="Units" header="Units" dataType="number" [sortable]="true" [disableHiding]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price Category" dataType="string" [sortable]="true" [disableHiding]="true" [formatter]="formatPrice">
    </igx-column>
    <igx-column field="Price" header="Price" dataType="number" [sortable]="true" [disableHiding]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [sortable]="true" [disableHiding]="true">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
.grid__wrapper {
    margin: 16px;
}
```

**Note:** 
The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter.

## Tree Filter View

By default, the Excel Style Filtering dialog displays the items in a list view. In order to display them in a tree view you can use the [`IgxTreeGridFilteringStrategy`](mcp:get_api_reference?platform=angular&component=TreeGridFilteringStrategy) and specify an array of column field names. Filter items will be displayed in a tree view for the specified columns and in a list view for all other columns. The following sample demonstrates how to show filter items in a tree view for the first column:

```typescript
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { TreeGridFilteringStrategy } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridExcelStyleFilteringComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';

import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-tree-filter-view',
    styleUrls: ['./tree-grid-tree-filter-view.component.scss'],
    templateUrl: 'tree-grid-tree-filter-view.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridTreeFilterViewComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public filterStrategy = new TreeGridFilteringStrategy(['Name']);

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <div class="flex-column">
    <igx-select #gridColumns value="ID" class="igSelect">
      <label igxLabel>Columns:</label>
      @for (c of tGrid.columns; track c) {
        <igx-select-item [value]="c.field">
          {{ c.field }}
        </igx-select-item>
      }
    </igx-select>

    <igx-grid-excel-style-filtering
      [column]="tGrid.getColumnByName(gridColumns.value)"
      [maxHeight]="'590px'">
    </igx-grid-excel-style-filtering>
  </div>

  <igx-tree-grid [igxPreventDocumentScroll]="true" [data]="data" [autoGenerate]="false" height="653px" width="800px" primaryKey="ID"
    foreignKey="ParentID" #tGrid>
    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" dataType="number">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
.grid__wrapper {
    margin: 16px;
    display: flex;
    column-gap: 16px;
}
```

## External Excel Style filtering

As you see at the demos above the default appearance of the Excel Style filtering dialog is inside the Tree Grid. So this dialog is only visible when configuring the filters. There is a way to make that dialog stay always visible - it can be used outside of the grid as a standalone component. In the demo below, the Excel style filtering is declared separately of the Tree Grid.

### Demo

```typescript
import { Component, ViewChild, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridExcelStyleFilteringComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';

import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-external-excel-style-filtering',
    templateUrl: './tree-grid-external-excel-style-filtering.component.html',
    styleUrls: ['./tree-grid-external-excel-style-filtering.component.scss'],
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridExternalExcelStyleFilteringComponent implements OnInit {
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() { }

    public ngOnInit() {
        this.data = ORDERS_DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <div class="flex-column">
    <igx-select #gridColumns value="ID" class="igSelect">
      <label igxLabel>Columns:</label>
      @for (c of tGrid.columns; track c) {
        <igx-select-item [value]="c.field">
          {{ c.field }}
        </igx-select-item>
      }
    </igx-select>

    <igx-grid-excel-style-filtering [column]="tGrid.getColumnByName(gridColumns.value)" [maxHeight]="'590px'">
    </igx-grid-excel-style-filtering>
  </div>

  <igx-tree-grid [igxPreventDocumentScroll]="true" [data]="data" [autoGenerate]="false" height="653px" width="800px" primaryKey="ID"
    foreignKey="ParentID" #tGrid>
    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
.grid__wrapper {
    display: flex;
    flex-flow: row;
    height: 650px;
    margin: 15px;
    justify-content: center;
    column-gap: 5px;
}

.flex-column {
    display: flex;
    flex-flow: column;
    height: 650px;
    margin-left: 1px;
}

.igSelect {
    margin-left: 1px;
}
```

### Usage

In order to configure the Excel style filtering component, you should set its [`column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) property to one of the Tree Grid's columns. In the sample above, we have bound the [`column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) property to the value of an IgxSelectComponent that displays the Tree Grid's columns.

```html
<igx-select #gridColums value="ID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of treegrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="treegrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

## External Outlet

The Tree Grid's [`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) creates separate stacking context for each grid in the DOM. This ensures that all descendant elements of the grid will render as intended, without overlapping one another.
However, elements that go outside of the grid (e.g. Excel Style filter) will conflict with outside elements with the same `z-index` (e.g. having two grids one under another) resulting in false rendering. The solution for this issue is to set the [`outlet`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=outlet) property to an external outlet directive which allows the overlay elements to always appear on top.

### Demo

```typescript
import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-external-outlet',
    styleUrls: ['./tree-grid-external-outlet-sample.component.scss'],
    templateUrl: 'tree-grid-external-outlet-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxOverlayOutletDirective]
})

export class TreeGridExternalOutletComponent implements OnInit {
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
    }
}
```
```html
<div>
  <igx-tree-grid [igxPreventDocumentScroll]="true" #tGrid1 [data]="data" [autoGenerate]="false" height="300px" width="100%"
    [allowFiltering]="true" primaryKey="ID" [moving]="true" foreignKey="ParentID" filterMode="excelStyleFilter"
    [outlet]="filteringOverlayOutlet">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ID" header="Order ID" [sortable]="true">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [sortable]="true">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [sortable]="true">
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

  <br>

    <igx-tree-grid [igxPreventDocumentScroll]="true" #tGrid2 [data]="data" [autoGenerate]="false" height="300px" width="100%"
      [allowFiltering]="true" primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter"
      [outlet]="filteringOverlayOutlet">
      <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
          <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
      </igx-grid-toolbar>

      <igx-column field="ID" header="Order ID" [sortable]="true">
      </igx-column>
      <igx-column field="Name" header="Order Product" [sortable]="true">
      </igx-column>
      <igx-column field="Category" header="Category" [sortable]="true">
      </igx-column>
      <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true">
      </igx-column>
      <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
      </igx-column>
      <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
      </igx-column>
      <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [sortable]="true">
      </igx-column>
      <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [sortable]="true">
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
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-excel-style-filtering-style',
    styleUrls: ['./tree-grid-excel-style-filtering-style.component.scss'],
    templateUrl: 'tree-grid-excel-style-filtering-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridExcelStyleFilteringStyleComponent implements OnInit {

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
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }

}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [autoGenerate]="false" [moving]="true" height="850px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Order ID" [sortable]="true">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="true">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="true">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
- [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent)
- `IgxTreeGridComponent Styles`
- `Excel Filtering Theme`
## Additional Resources

- [Tree Grid overview](/treegrid/tree-grid)
- [Paging](/treegrid/paging)

- [Virtualization and Performance](/treegrid/virtualization)
- [Sorting](/treegrid/sorting)
- [Summaries](/treegrid/summaries)
- [Column Moving](/treegrid/column-moving)
- [Column Pinning](/treegrid/column-pinning)
- [Column Resizing](/treegrid/column-resizing)
- [Selection](/treegrid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
