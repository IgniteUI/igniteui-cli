---
title: Advanced Filtering in Angular Data Grid - Ignite UI for Angular
description: Learn how to configure advanced filter of data with the Angular table. The grid advanced filtering is more convenient and engaging than ever.
keywords: advanced filter, igniteui for angular, infragistics
license: commercial
llms:
  description: "The Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any Angular table like the Grid."
_tocName: Advanced Filtering
_premium: true
---
# Angular Grid Advanced Filtering

The Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any [Angular table](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) like the Grid.

## Angular Grid Advanced Filtering Example

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-advanced-filtering-sample',
    styleUrls: ['./grid-advanced-filtering-sample.component.scss'],
    templateUrl: 'grid-advanced-filtering-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective]
})
export class GridAdvancedFilteringSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatCurrency(val: string) {
        return '$' + parseInt(val, 10).toFixed(2);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [moving]="true" [allowAdvancedFiltering]="true" [autoGenerate]="false" height="500px" width="100%">
    <igx-grid-toolbar></igx-grid-toolbar>

    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true"  [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" dataType="number" [formatter]="formatCurrency">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="true" [dataType]="'date'">
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
    margin: 15px;
}
```

## Interaction

In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. The dialog is using the [`IgxQueryBuilder`](mcp:get_api_reference?platform=angular&component=IgxQueryBuilderComponent) component to generate,display and edit the filtering logic. You can have a look at the [`Query Builder topic`](../query-builder.md#getting-started-with-ignite-ui-for-angular-query-builder) for details on the interaction process.

In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.

## Usage

To enable the advanced filtering, the [`allowAdvancedFiltering`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=allowAdvancedFiltering) input property should be set to `true`.

```html
<igx-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</igx-grid>
```

The advanced filtering generates a [`IgxFilteringExpressionsTree`](mcp:get_api_reference?platform=angular&component=FilteringExpressionsTree) which is stored in the [`advancedFilteringExpressionsTree`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=advancedFilteringExpressionsTree) input property. You could use this property to set an initial state of the advanced filtering.

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    
    this.grid.advancedFilteringExpressionsTree = tree;
}
```

In case you don't want to show the Grid toolbar, you could use the [`openAdvancedFilteringDialog`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=openAdvancedFilteringDialog) and [`closeAdvancedFilteringDialog`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=closeAdvancedFilteringDialog) methods to open and close the advanced filtering dialog programmatically.

**Note:** 
You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the Grid. Both filtering user interfaces will work independently of one another. The final filtered result in the Grid is the intersection between the results of the two filters.

## External Advanced filtering

As you see the demo above the Advanced filtering dialog is hosted in an overlay on top of the Grid. When the setup in the dialog is ready, the apply or close actions would hide that dialog. There is a way to make that dialog stay always visible - be used as a standalone component. In the demo below, the advanced filtering dialog is declared separately of the Grid.

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxAdvancedFilteringDialogComponent, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';
@Component({
    selector: 'app-grid-external-advanced-filtering',
    templateUrl: './grid-external-advanced-filtering.component.html',
    styleUrls: ['./grid-external-advanced-filtering.component.scss'],
    imports: [IgxAdvancedFilteringDialogComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class GridExternalAdvancedFilteringComponent {

    public data: any;

    constructor() {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-advanced-filtering-dialog [grid]="grid1" class="advanced-dialog">
  </igx-advanced-filtering-dialog>

  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [autoGenerate]="false" [data]="data" height="400px">
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
    flex-flow: column;
    margin: 15px;
    align-items: stretch;
}

.advanced-dialog {
    margin-bottom: 2px;
    height: 325px;
    overflow-y: auto;
}
```

### Usage

It's super easy to configure the advanced filtering to work outside of the Grid. All you need to do is to create the dialog and set its [`grid`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarAdvancedFilteringComponent&member=grid) property:

```html
<igx-advanced-filtering-dialog [grid]="grid1">
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
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-adf-style-sample',
    styleUrls: ['./grid-advanced-filtering-style.component.scss'],
    templateUrl: 'grid-advanced-filtering-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective]
})
export class GridAdvancedFilteringStyleComponent implements OnInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatCurrency(val: string) {
        return '$' + parseInt(val, 10).toFixed(2);
    }
}
```
```html
<igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" [moving]="true" [allowAdvancedFiltering]="true" height="500px" width="100%">
  <igx-grid-toolbar></igx-grid-toolbar>
  <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
  </igx-column>
  <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true" [dataType]="'string'">
  </igx-column>
  <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" dataType="number" [formatter]="formatCurrency">
  </igx-column>
  <igx-column field="OrderDate" header="Order Date" [sortable]="true" [dataType]="'date'">
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
- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- `IgxGridComponent Styles`
## Additional Resources

- [Grid overview](/grid/grid)
- [Excel Style Filtering](/grid/excel-style-filtering)
- [Paging](/grid/paging)

- [Filtering](/grid/filtering)
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
