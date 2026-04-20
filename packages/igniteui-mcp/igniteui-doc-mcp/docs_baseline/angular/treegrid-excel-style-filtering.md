---
title: Excel Style Filtering in Angular Tree Grid - Ignite UI for Angular
_description: Learn how to configure Excel filtering in Angular Tree Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
_keywords: excel like filter, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/excel-style-filtering
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
<div class="divider--half"></div>
## Usage
To turn on the grid excel filtering, two inputs should be set. The [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowFiltering) should be set to `true` and the [`filterMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filterMode) should be set to `excelStyleFilter`.
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-tree-grid>
```
## Interactions
In order to open the filter menu for a particular column, the Angular filter icon in the header should be clicked. Additionally, you can use the `Ctrl + Shift + L` combination on a selected header. If the column can be sorted, pinned, moved, selected or hidden along with the filtering functionality, there will be buttons available for the features that are turned on.
If no filter is applied, all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data, you can select/deselect the items in the list and either click the Apply button, or press `Enter`. The filtering applied through the list items creates filter expressions with `equals` operator and the logic operator between the expressions is [`OR`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html#or).
If you type something in the search box and apply the filter, only the items that match the search criteria will be selected. If you want to add items to the currently filtered ones, however, you should select the option `Add current selection to filter`.
If you want to clear the filter, you can check the `Select All` option and then click the Apply button.
To apply a filter with different expressions, you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button, which can clear the filter.
<div class="divider--half"></div>
## Configure Menu Features
Sorting, pinning and hiding features can be removed from the filter menu using the corresponding inputs: [`sortable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#sortable), [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#selected), [`disablePinning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#disablePinning), [`disableHiding`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#disableHiding).
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
<div class="divider--half"></div>
In the sample below 'Order Product', 'Category' and 'Units' columns have all three features enabled, 'Price' have all three disabled, 'Order Date' and 'Delivered' have only pinning and hiding.
<div class="divider--half"></div>
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
<div class="divider--half"></div>
## Templates
If you want to further customize the Excel style filter menu without disabling the column features you could use custom templates. The Excel Style filter menu provides two directives for templating:
- `IgxExcelStyleColumnOperationsTemplateDirective` - re-templates the area with all column operations like sorting, pinning, etc.
- `IgxExcelStyleFilterOperationsTemplateDirective` - re-templates the area with all filter specific operations.
You could either re-template only one of those areas or both of them. You could put any custom content inside those directives or you could use any of our built-in Excel style filtering components.
The following code demonstrates how to define a custom Excel style filter menu using the [`igx-excel-style-header`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstyleheadercomponent.html), [`igx-excel-style-sorting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstylesortingcomponent.html) and [`igx-excel-style-search`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstylesearchcomponent.html) components.
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
<div class="divider--half"></div>
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
- [`igx-excel-style-header`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstyleheadercomponent.html)
- [`igx-excel-style-sorting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstylesortingcomponent.html)
- [`igx-excel-style-moving`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstylemovingcomponent.html)
- [`igx-excel-style-pinning`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstylepinningcomponent.html)
- [`igx-excel-style-hiding`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstylehidingcomponent.html)
- [`igx-excel-style-selecting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstyleselectingcomponent.html)
- [`igx-excel-style-clear-filters`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstyleclearfilterscomponent.html)
- [`igx-excel-style-conditional-filter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstyleconditionalfiltercomponent.html)
- [`igx-excel-style-search`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelstylesearchcomponent.html)
<div class="divider--half"></div>
## Unique Column Values Strategy
The list items inside the Excel Style Filtering dialog represent the unique values for the respective column. These values can be provided manually and loaded on demand, which is demonstrated in the [`Tree Grid Remote Data Operations`](remote-data-operations.md#unique-column-values-strategy) topic.
## Formatted Values Filtering Strategy
By default, the Tree Grid component filters the data based on the original cell values, however in some cases you may want to filter the data based on the formatted values. @@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') { In order to do that you can use the [`FormattedValuesFilteringStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/formattedvaluesfilteringstrategy.html). }  In order to do that you can use the [`TreeGridFormattedValuesFilteringStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/treegridformattedvaluesfilteringstrategy.html).  The following sample demonstrates how to format the numeric values of a column as strings and filter the Tree Grid based on the string values:
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
>[!NOTE]
>The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter.
## Tree Filter View
By default, the Excel Style Filtering dialog displays the items in a list view. In order to display them in a tree view you can use the [`TreeGridFilteringStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/treegridfilteringstrategy.html) and specify an array of column field names. Filter items will be displayed in a tree view for the specified columns and in a list view for all other columns. The following sample demonstrates how to show filter items in a tree view for the first column:
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
    changeDetection: ChangeDetectionStrategy.OnPush,
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
import { Component, ViewChild, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridExcelStyleFilteringComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';

import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
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
<div class="divider--half"></div>
### Usage
In order to configure the Excel style filtering component, you should set its [`column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridexcelstylefilteringcomponent.html#column) property to one of the Tree Grid's columns. In the sample above, we have bound the [`column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridexcelstylefilteringcomponent.html#column) property to the value of an IgxSelectComponent that displays the Tree Grid's columns.
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
However, elements that go outside of the grid (e.g. Excel Style filter) will conflict with outside elements with the same `z-index` (e.g. having two grids one under another) resulting in false rendering. The solution for this issue is to set the [`outlet`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#outlet) property to an external outlet directive which allows the overlay elements to always appear on top.
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
To get started with styling the Excel Style Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
The Excel Style Filtering dialog takes its background color from the grid's theme, using the `filtering-row-background` parameter. Additionally, there are specific Excel Style Filtering parameters available for customizing the text color of elements within the dialog. To change the overall style of the dialog, you need to create a custom theme.
```scss
$custom-grid: grid-theme(
  $filtering-row-background: #ffcd0f,
  $excel-filtering-header-foreground: #292826,
  $excel-filtering-subheader-foreground: #292826,
  $excel-filtering-actions-foreground: #006400,
  $excel-filtering-actions-hover-foreground: #ffcd0f,
  $excel-filtering-actions-disabled-foreground: #9e9e9e
);
```
We obviously have a lot more components inside the excel like filtering dialog, such as buttons, checkboxes, a list and even a drop-down. In order to style them, we need to create a separate theme for each one:
```scss
$custom-button: contained-button-theme(
  $background: #ffcd0f,
  $foreground: #292826,
  $hover-background: #292826,
  $hover-foreground: #ffcd0f
);
$flat-custom-button: flat-button-theme(
  $foreground: #ffcd0f,
);
$custom-checkbox: checkbox-theme(
  $empty-color: #292826,
  $fill-color: #292826,
  $tick-color: #ffcd0f,
  $label-color: #292826
);
$custom-drop-down: drop-down-theme(
  $background-color: #ffcd0f,
  $item-text-color: #292826,
  $hover-item-background: #292826,
  $hover-item-text-color: #ffcd0f
);
$custom-input-group: input-group-theme(
  $box-background: #ffcd0f,
  $idle-text-color: #292826,
  $focused-text-color: #292826,
  $filled-text-color: #292826
);
$custom-list: list-theme(
  $background: #ffcd0f
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
In this example we only changed some of the parameters for the listed components, but the [`button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme), [`checkbox-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-checkbox-theme), [`drop-down-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme), [`input-group-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme), [`list-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-list-theme) themes provide way more parameters to control their respective styling.
The last step is to **include** each component’s custom theme. We will also set the color property for the input's placeholder.
```scss
:host {
    @include tokens($custom-grid);
    @include tokens($custom-drop-down);

    .igx-excel-filter, 
    .igx-excel-filter__secondary {
        @include tokens($custom-button);
        @include tokens($custom-checkbox);
        @include tokens($custom-input-group);
        @include tokens($custom-list);

        .igx-input-group__input::placeholder {
            color: #ffcd0f;
        }
    }
}
```
>[!NOTE]
>We scope most of the components' mixins within `.igx-excel-filter` and `.igx-excel-filter__secondary`, so that these custom themes will affect only components nested in the excel style filtering dialog and all of its sub-dialogs. Otherwise other buttons, checkboxes, input-groups and lists would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:
```scss
:host {
  ::ng-deep {
    @include tokens($custom-grid);
    @include tokens($custom-drop-down);

    .igx-excel-filter,
    .igx-excel-filter__secondary {
      @include tokens($custom-button);
      @include tokens($flat-custom-button);
      @include tokens($custom-checkbox);
      @include tokens($custom-input-group);
      @include tokens($custom-list);
      
      .igx-input-group__input::placeholder {
        color: #ffcd0f;
      }
    }
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

$yellow: #ffcd0f;
$black: #292826;

$custom-grid: grid-theme(
  $filtering-row-background: $yellow
);

$custom-flat-button: flat-button-theme(
  $background: $yellow,
  $foreground: $black,
  $hover-background: $black,
  $hover-foreground: $yellow
);

$custom-contained-button: contained-button-theme(
  $background: $black,
  $foreground: $yellow,
  $hover-background: $black,
  $hover-foreground: $yellow
);

$custom-button-group: button-group-theme(
  $item-background: $yellow,
  $item-text-color: $black,
  $item-hover-background: $black,
  $item-hover-text-color: $yellow
);

$custom-input-group: input-group-theme(
  $box-background: $yellow,
  $idle-text-color: $black,
  $focused-text-color: $black,
  $filled-text-color: $black
);

$custom-list: list-theme(
  $background: $yellow
);

$custom-checkbox: checkbox-theme(
  $empty-color: $black,
  $fill-color: $black,
  $tick-color: $yellow,
  $label-color: $black
);

$custom-drop-down: drop-down-theme(
  $background-color: $yellow,
  $selected-item-background: lighten($black, 10%),
  $selected-focus-item-background: lighten($black, 15%),
  $item-text-color: $black,
  $hover-item-background: $black,
  $hover-item-text-color: $yellow
);

:host {
  ::ng-deep {
    @include tokens($custom-grid);
    @include tokens($custom-drop-down);
    @include tokens($custom-input-group);
    @include tokens($custom-checkbox);
    @include tokens($custom-list);
    @include tokens($custom-flat-button);
    @include tokens($custom-button-group);

    .igx-excel-filter__apply {
      @include tokens($custom-contained-button);
    }
  }
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>
## API References
<div class="divider--half"></div>
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
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
