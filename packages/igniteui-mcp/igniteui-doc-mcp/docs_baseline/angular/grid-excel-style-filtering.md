---
title: Excel Style Filtering in Angular Data Grid- Ignite UI for Angular
description: Learn how to configure Excel filtering in Angular Data Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
keywords: excel like filter, igniteui for angular, infragistics
license: commercial
llms:
  description: "The grid Excel filtering provides an Excel like filtering UI for any Angular table like the Grid."
_tocName: Excel Style Filtering
_premium: true
---
# Excel Filtering in Angular Grid

The grid Excel filtering provides an Excel like filtering UI for any Angular table like the Grid.

## Angular Grid Excel Style Filtering Example

```typescript
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-excel-style-filtering-sample-1.component.scss'],
    templateUrl: 'grid-excel-style-filtering-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})

export class ExcelStyleFilteringSample1Component implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    public size = 'large';
    public sizes;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
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

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
        this.grid1.reflow();
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
  <div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
  </div>
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [moving]="true" [autoGenerate]="false" height="850px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" dataType="number">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="true" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>

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

To turn on the grid excel filtering, two inputs should be set. The [`allowFiltering`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=allowFiltering) should be set to `true` and the [`filterMode`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=filterMode) should be set to `excelStyleFilter`.

```html
<igx-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-grid>
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
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [moving]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false"  [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

In the sample below **Product Name** and **Discontinued** columns have all four features enabled, **Quantity Per Unit** have all three disabled, **Unit Price** has only sorting and **Order Date** has only pinning and hiding and all are [`selectable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=selectable).

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-excel-style-filtering-sample-2.component.scss'],
    templateUrl: 'grid-excel-style-filtering-sample-2.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})

export class ExcelStyleFilteringSample2Component implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
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
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [moving]="true" [autoGenerate]="false" height="850px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ProductName" header="Product Name" [sortable]="true"  [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true"  [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true"  dataType="number">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false"  [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true"  [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>

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
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">

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
</igx-grid>
```

You could also re-template the Excel style filtering icon in the column header using the `igxExcelStyleHeaderIcon` directive:

```html
<igx-grid ...>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</igx-grid>
```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleHeaderIconDirective, IgxExcelStyleSearchComponent, IgxExcelStyleSortingComponent, IgxGridExcelStyleFilteringComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-excel-style-filtering-sample-3.component.scss'],
    templateUrl: 'grid-excel-style-filtering-sample-3.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxExcelStyleHeaderIconDirective, IgxIconComponent, IgxGridExcelStyleFilteringComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleSortingComponent, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleSearchComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})

export class ExcelStyleFilteringSample3Component implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
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
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" [moving]="true" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
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

    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price"  dataType="number">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>

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

These values can be provided manually and loaded on demand, which is demonstrated in the [`Grid Remote Data Operations`](/grid/remote-data-operations#unique-column-values-strategy) topic.

## Formatted Values Filtering Strategy

By default, the Grid component filters the data based on the original cell values, however in some cases you may want to filter the data based on the formatted values. In order to do that you can use the [`IgxFormattedValuesFilteringStrategy`](mcp:get_api_reference?platform=angular&component=FormattedValuesFilteringStrategy).

The following sample demonstrates how to format the numeric values of a column as strings and filter the Grid based on the string values:

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { FormattedValuesFilteringStrategy } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-formatted-filtering-strategy.component.scss'],
    templateUrl: 'grid-formatted-filtering-strategy.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class GridFormattedFilteringStrategyComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];
    public filterStrategy = new FormattedValuesFilteringStrategy();

    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatPrice(value: number) {
        return value < 15 ? 'low' : value > 50 ? 'high' : 'medium';
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%"
    [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [filterStrategy]="filterStrategy">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price Category" [sortable]="true" [disableHiding]="true" dataType="string" [formatter]="formatPrice">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="true" [disableHiding]="true" [dataType]="'date'">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [disableHiding]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
}
```

**Note:** 
The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter.

## External Excel Style filtering

As you see at the demos above the default appearance of the Excel Style filtering dialog is inside the Grid. So this dialog is only visible when configuring the filters. There is a way to make that dialog stay always visible - it can be used outside of the grid as a standalone component. In the demo below, the Excel style filtering is declared separately of the Grid.

### Demo

```typescript
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCSVTextDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxExcelTextDirective, IgxGridExcelStyleFilteringComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { CurrencyPipe } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-external-excel-style-filtering',
    templateUrl: './grid-external-excel-style-filtering.component.html',
    styleUrls: ['./grid-external-excel-style-filtering.component.scss'],
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxCSVTextDirective, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class GridExternalExcelStyleFilteringComponent implements OnInit {

    public data: any[];
    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <div class="flex-column">
    <igx-select #gridColums value="ProductName" class="igSelect">
      <label igxLabel>Columns:</label>
      @for (c of grid1.columns; track c) {
        <igx-select-item [value]="c.field">
          {{ c.field }}
        </igx-select-item>
      }
    </igx-select>

    <igx-grid-excel-style-filtering [column]="grid1.getColumnByName(gridColums.value)" [maxHeight]="'590px'">
    </igx-grid-excel-style-filtering>
  </div>

  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [autoGenerate]="false" [data]="data" height="653px">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
        <igx-grid-toolbar-exporter>
          <span excelText>Export to Excel</span>
          <span csvText>Export to CSV</span>
        </igx-grid-toolbar-exporter>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ProductName" header="Product Name" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" dataType="number">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    display: flex;
    flex-flow: row;
    margin: 15px;
    column-gap: 5px;
}

.flex-column {
    display: flex;
    flex-flow: column;
    height: 650px;
}

.igSelect {
    margin-left: 1px;
}
```

### Usage

In order to configure the Excel style filtering component, you should set its [`column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) property to one of the Grid's columns. In the sample above, we have bound the [`column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) property to the value of an IgxSelectComponent that displays the Grid's columns.

```html
<igx-select #gridColums value="ProductID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of grid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="grid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

## External Outlet

The Grid's [`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) creates separate stacking context for each grid in the DOM. This ensures that all descendant elements of the grid will render as intended, without overlapping one another.
However, elements that go outside of the grid (e.g. Excel Style filter) will conflict with outside elements with the same `z-index` (e.g. having two grids one under another) resulting in false rendering. The solution for this issue is to set the [`outlet`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=outlet) property to an external outlet directive which allows the overlay elements to always appear on top.

### Demo

```typescript
import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-external-outlet',
    styleUrls: ['./grid-external-outlet-sample.component.scss'],
    templateUrl: 'grid-external-outlet-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxOverlayOutletDirective, CurrencyPipe]
})

export class GridExternalOutletComponent implements OnInit {
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" height="300px" width="100%"
    [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [outlet]="filteringOverlayOutlet">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" dataType="number">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>

  <br>

    <igx-grid [igxPreventDocumentScroll]="true" #grid2 [data]="data" [autoGenerate]="false" height="300px" width="100%"
      [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [outlet]="filteringOverlayOutlet">
      <igx-column field="ProductName" header="Product Name" [dataType]="'string'">
      </igx-column>
      <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [dataType]="'string'">
      </igx-column>
      <igx-column field="UnitPrice" header="Unit Price" dataType="number">
        <ng-template igxCell let-cell="cell" let-val let-row>
          {{+val | currency}}
        </ng-template>
      </igx-column>
      <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
      </igx-column>
      <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'">
        <ng-template igxCell let-cell="cell" let-val>
          @if (val) {
            <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
          }
          @if (!val) {
            <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
          }
        </ng-template>
      </igx-column>
    </igx-grid>
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
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-esf-style-sample',
    styleUrls: ['./grid-excel-style-filtering-style.component.scss'],
    templateUrl: 'grid-excel-style-filtering-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class ExcelStyleFilteringStyleComponent implements OnInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = DATA;
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

  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" [moving]="true" height="850px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" dataType="number">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="true" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>

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
- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- `IgxGridComponent Styles`
- `Excel Filtering Theme`
## Additional Resources

- [Grid overview](/grid/grid)
- [Paging](/grid/paging)

- [Virtualization and Performance](/grid/virtualization)
- [Sorting](/grid/sorting)
- [Summaries](/grid/summaries)
- [Column Moving](/grid/column-moving)
- [Column Pinning](/grid/column-pinning)
- [Column Resizing](/grid/column-resizing)
- [Selection](/grid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
