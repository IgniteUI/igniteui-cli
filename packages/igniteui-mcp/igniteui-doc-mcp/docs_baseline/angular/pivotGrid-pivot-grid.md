---
title: Angular Pivot Grid & Table – Ignite UI for Angular
description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex analysis and apply data sorting, grouping, or filtering.
keywords: angular pivot grid, angular pivot grid component, angular pivot table, angular pivot table component, angular pivot data table, Angular pivot table, angular ui components, ignite ui for angular
license: commercial
llms:
  description: "Ignite UI for Angular Pivot Grid is one of our best Angular Components, representing a table of grouped values and aggregates that lets you organize and summarize data in a tabular form."
_tocName: Pivot Grid
_premium: true
---
# Angular Pivot Grid Component Overview

Ignite UI for Angular Pivot Grid is one of our best [Angular Components](https://www.infragistics.com/products/ignite-ui-angular), representing a table of grouped values and aggregates that lets you organize and summarize data in a tabular form. It is a data summarization tool that is used to reorganize and summarize selected columns and rows of data coming from a spreadsheet or database table to obtain a desired report.

## What is Angular Pivot Grid?

The Angular Pivot Grid component presents data in a pivot table and helps perform complex analysis on the supplied data set. This sophisticated Pivot Grid control is used for organizing, summarizing, and filtering large volumes of data which is later displayed in a cross-table format. Key features of an Angular Pivot Grid are row dimensions, column dimensions, aggregations, and filters.

The `IgxPivotGridComponent` gives the ability to users to configure and display their data in a multi-dimensional pivot table structure.
The rows and columns represent distinct data groups, and the data cell values represent aggregations. This allows complex data analysis based on a simple flat data set. The `IgxPivotGridComponent` is a feature-rich pivot table that provides easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

## Angular Pivot Grid Example

The following is an Angular Pivot Grid example in combination with the Angular Pivot Data Selector Component. This way you can have more flexible runtime configuration options.

```typescript
import { Component } from "@angular/core";
import { GridColumnDataType } from 'igniteui-angular/core';
import { IPivotConfiguration, IgxPivotDateDimension, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxPivotDataSelectorComponent, IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { SALES_DATA_NEW } from '../../data/salesDataNew';
@Component({
    selector: 'app-pivot-data-selector-sample',
    styleUrls: ['./pivot-data-selector-sample.component.scss'],
    templateUrl: './pivot-data-selector-sample.component.html',
    imports: [IgxPivotGridComponent, IgxPivotDataSelectorComponent]
})
export class PivotDataSelectorSampleComponent {
    public data = SALES_DATA_NEW;
    public pivotConfigHierarchy: IPivotConfiguration;
    public dateDimension: IgxPivotDateDimension;

    constructor() {
        this.dateDimension = new IgxPivotDateDimension({
            memberName: 'Date',
            enabled: true
        }, {
            months: false,
            quarters: true,
            years: true
        });

        this.pivotConfigHierarchy = {
            columns: [

                {
                    memberName: 'Country',
                    enabled: true
                },
                {

                    memberName: 'Product',
                    enabled: true
                }
            ],
            rows: [
                this.dateDimension
            ],
            values: [
                {
                    member: 'Sales',
                    aggregate: {
                        aggregator: IgxPivotNumericAggregate.sum,
                        key: 'Sum Of Sales',
                        label: 'Sum'
                    },
                    enabled: false,
                    dataType: GridColumnDataType.Currency
                },
                {
                    member: 'Profit',
                    aggregate: {
                        aggregator: IgxPivotNumericAggregate.sum,
                        key: 'Sum Of Profit',
                        label: 'Sum'
                    },
                    enabled: true,
                    dataType: GridColumnDataType.Currency
                }
            ],
            filters: [
                {
                    memberName: 'Month',
                    memberFunction: (data) => data['Month Name'],
                    enabled: false
                }
            ]
        };
    }
}
```
```html
<div class="pivot-container">
    <igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy" [height]="'850px'"
        [superCompactMode]="true" [defaultExpandState]='true'>
    </igx-pivot-grid>
    <igx-pivot-data-selector [grid]="grid1"></igx-pivot-data-selector>
</div>
```
```scss
:host {
    padding: 8px;
    display: flex;
    flex-direction: column;
}

igx-pivot-grid {
    flex: 1;
}

:host ::ng-deep {
    igx-pivot-data-selector {
        border: 1px solid hsla(var(--ig-gray-200));
        margin: 0 8px;
    }
}

.pivot-container {
    display: flex;
    flex: 1 1 auto;
    order: 0;
    align-items: stretch;
}
```

## Getting started with Ignite UI for Angular Pivot Grid

To get started with the Ignite UI for Angular Pivot Grid component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](/general/getting-started) topic.

The next step is to import the `IgxPivotGridModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { IgxPivotGridModule } from 'igniteui-angular/grids/pivot-grid';
// import { IgxPivotGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
  imports: [
    ...
    IgxPivotGridModule,
    ...
  ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxPivotGridComponent` as a standalone dependency, or use the [`IGX_PIVOT_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/grids/pivot-grid/src/pivot-grid.module.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_PIVOT_GRID_DIRECTIVES } from 'igniteui-angular/grids/pivot-grid';
// import { IGX_PIVOT_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
  <igx-pivot-grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
  </igx-pivot-grid>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_PIVOT_GRID_DIRECTIVES]
  /* or imports: [IgxPivotGridComponent] */
})
export class HomeComponent {
  public data: Transaction [];
}
```

Now that you have the Ignite UI for Angular Pivot Grid module or directives imported, you can start using the `igx-pivot-grid` component.

## Using the Angular Pivot Grid

The Angular Pivot Grid Component can be configured via the [`IgxPivotGrid.pivotConfiguration`](mcp:get_api_reference?platform=angular&component=IgxPivotGridComponent&member=pivotConfiguration) property.

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

It is defined by three main dimensions: `rows`, `columns` and `values`. The `rows` and `columns` define the grouped structure that is displayed in the rows and columns of the [Angular grid](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid). The `values` define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the `filters` configuration property. It can be used for fields that you do not want to add as a dimension or a value but would like to filter their related member values via the UI.

### Dimensions configuration

Each basic dimension configuration requires a `memberName` that matches a field from the provided `data`, or a `memberFunction` that extracts a value from the record in case of complex objects or other custom scenarios.

**Note:** 
The `memberName` needs to be unique. In case you need different dimensions for the same field, you can define a custom unique `memberName` for each, and extract the related value via `memberFunction`.

Multiple sibling dimensions can be defined, which creates a more complex nested group in the related row or column dimension area.

The dimensions can be reordered or moved from one area to another via their corresponding chips using drag & drop.

A dimension can also describe an expandable hierarchy via the `childLevel` property, for example:

```typescript
{
  memberFunction: () => 'All',
  memberName: 'AllProducts',
  enabled: true,
  childLevel: {
    memberFunction: (data) => data.ProductCategory,
    memberName: 'ProductCategory',
    enabled: true
  }
}
```

In this case the dimension renders an expander in the related section of the grid (row or column) and allows the children to be expanded or collapsed as part of the hierarchy. By default the row dimensions are initially expanded. This behavior can be controlled with the `defaultExpandState` `@Input` of the pivot grid.

### Predefined dimensions

As part of the pivot grid some additional predefined dimensions are exposed for easier configuration:

`IgxPivotDateDimension` can be used for date fields. Describes the following hierarchy by default:

- All Periods
- Years
- Quarters
- Months
- Full Date

It can be set for rows or columns, for example:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
  rows: [
    new IgxPivotDateDimension({ memberName: 'Date', enabled: true });
  ]
}
```

It also allows for further customization via the second option parameter in order to enable or disable a particular part of the hierarchy, for example:

```typescript
new IgxPivotDateDimension({ memberName: 'Date', enabled: true }, {
  total: true,
  years: true,
  months: true,
  fullDate: true,
  quarters: false
});
```

### Values configuration

A value configuration requires a `member` that matches a field from the provided `data`, or it can define either via an `aggregatorName` or custom `aggregator` function for more complex scenarios.

**Note:** 
The `member` needs to be unique. In case you need different value aggregations for the same field, you can define a custom unique `member` for each, and extract the related value via the `aggregator` function.

 Out of the box, there are 4 predefined aggregations that can be used depending on the data type of the data field:

- `IgxPivotNumericAggregate` - for numeric fields.
  Contains the following aggregation functions: `SUM`, `AVG`, `MIN`, `MAX`, `COUNT`.
- `IgxPivotDateAggregate` - for date fields.
  Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotTimeAggregate` - for time fields.
  Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotAggregate` - for any other data types. This is the base aggregation.
  Contains the following aggregation functions: `COUNT`.

The current aggregation function can be changed at runtime using the value chip's drop-down. By default, it displays a list of available aggregations based on the field's data type. A custom list of aggregations can also be set via the `aggregateList` property, for example:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
  values: [
    {
      member: 'AmountOfSale',
      displayName: 'Amount of Sale',
      aggregate: {
        key: 'SUM',
        aggregator: IgxTotalSaleAggregate.totalSale,
        label: 'Sum of Sale'
      },
      aggregateList: [{
        key: 'SUM',
        aggregator: IgxTotalSaleAggregate.totalSale,
        label: 'Sum of Sale'
      }, {
        key: 'MIN',
        aggregator: IgxTotalSaleAggregate.totalMin,
        label: 'Minimum of Sale'
      }, {
        key: 'MAX',
        aggregator: IgxTotalSaleAggregate.totalMax,
        label: 'Maximum of Sale'
      }]
    }
  ]
}

public static totalSale: PivotAggregation = (members, data: any) =>
  data.reduce((accumulator, value) => accumulator + value.UnitPrice * value.UnitsSold, 0);

public static totalMin: PivotAggregation = (members, data: any) => {
  return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.min(a, b));
};

public static totalMax: PivotAggregation = (members, data: any) => {
  return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.max(a,b));
};
```

The pivot value also provides a `displayName` property. It can be used to display a custom name for this value in the column header.

**Note:** 
If you define both `aggregatorName` and `aggregator` function, `aggregatorName` takes precedence. If none is set then an error is thrown.

### Enable property

`IPivotConfiguration` is the interface that describes the current state of the `IgxPivotGrid` component. With it the developer can declare fields of the data as `rows`, `columns`, `filters` or `values`. The configuration allows enabling or disabling each of these elements separately. Only enabled elements are included in the current state of the pivot grid. The `IgxPivotDataSelector` component utilizes the same configuration and shows a list of all elements - enabled and disabled. For each of them there is a checkbox in the appropriate state. End-users can easily tweak the pivot state by toggling the different elements using these checkboxes.
The `enable` property controls if a given `IPivotDimension` or `IPivotValue` is active and takes part in the pivot view rendered by the pivot grid.

### Full configuration example

Let's take a look at a basic pivot configuration:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
  columns: [
    {
      memberName: 'Product',
      memberFunction: (data) => data.Product.Name,
      enabled: true
    }
  ],
  rows: [
    {
      memberName: 'Seller',
      memberFunction: (data) => data.Seller.Name,
      enabled: true,
    }
  ],
  values: [
    {
      member: 'NumberOfUnits',
      aggregate: {
        aggregator: IgxPivotNumericAggregate.sum,
        key: 'sum',
        label: 'Sum'
      },
      enabled: true
    },
    {
      member: 'AmountOfSale',
      aggregate: {
        aggregatorName: 'SUM',
        key: 'sum',
        label: 'Sum'
      },
      enabled: true
    }
  ]
};
```

This configuration defines 1 row, 1 column and 1 aggregation that sums the values of each dimension groups.
The members match fields available in the provided data source:

```typescript
public data = [
[
  {
    Product: {
      Name: 'Clothing',
      UnitPrice: '12.814860936633712'
    },
    Seller: {
      Name: 'Stanley Brooker',
      City: 'Seattle'
    },
    Date: '2007-01-01T00:00:00',
    Value: '94.2652032683907',
    NumberOfUnits: '282'
  },
  //...
];
```

Resulting in the following view, which groups the Product Categories unique columns, Sellers Names in unique rows and displays the related aggregations for the number of units in the related cells:

```typescript
import { Component } from "@angular/core";
import { DATA } from '../../data/pivot-data';

import { IPivotConfiguration, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';

@Component({
    selector: 'app-pivot-grid-basic-sample',
    styleUrls: ['./pivot-grid-basic-sample.component.scss'],
    templateUrl: './pivot-grid-basic-sample.component.html',
    imports: [IgxPivotGridComponent]
})
export class PivotGridBasicSampleComponent {
    public data = DATA;
    public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [
            {

                memberName: 'Product',
                memberFunction: (data) => data.Product.Name,
                enabled: true
            }

        ],
        rows: [
            {
                memberName: 'Seller',
                memberFunction: (data) => data.Seller.Name,
                enabled: true
            }
        ],
        values: [
            {
                member: 'NumberOfUnits',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true

            }
        ],
        filters: null
    };
}
```
```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy" height="500px">
</igx-pivot-grid>
```
```scss
:host {
    display: block;
    padding: 8px;
}
```

And if you want to streamline the entire app development process, you can try out our [WYSIWYG App Builder™](https://www.infragistics.com/products/appbuilder) for your next Angular app.

### Auto generate configuration

The `autoGenerateConfig` property automatically generates dimensions and values based on the data source fields:

- Numeric Fields:
  - Created as `IPivotValue` using `IgxPivotNumericAggregate.sum` aggregator.
  - Added to the values collection and enabled by default.

- Non-Numeric Fields:
  - Created as `IPivotDimension`.
  - Disabled by default.
  - Added to the columns collection.

- Date Fields(only the first `date` field is enabled, the other `date` fields apply non-numeric fields rule):
  - Created as `IgxPivotDateDimension`
  - Enabled by default
  - added to the rows collection.

This feature allows developers to quickly create a pivot view without manually specifying dimensions and values. With a pivot selector next to the pivot grid, users can enable and reorder dimensions and values as needed.

## Styling

The Pivot Grid can be styled through the [`Ignite UI for Angular Theme Library`](/themes/sass/component-themes). The grid's `grid-theme` exposes a wide variety of properties, which allows the customization of all the pivot grid's features.

### Importing global theme

To get started with styling the Pivot Grid, you first need to import the `index` file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Defining custom theme

Next you need to create a custom theme, the easiest and recommended way to style the `igx-pivot-grid` is to use the `grid-theme` and provide just the three main colors: `background`, `foreground`, and `accent-color`.

**Note:** 
There is no specific `sass` pivot grid function.

These are the core theme properties. When you set them, all grid parts and internal components derive their colors from those values, resulting in a consistent appearance throughout the entire grid. Nested components such as buttons, icons, inputs, dropdowns, checkboxes, scrollbars, chips, and other helper components also derive their styling tokens from the main `grid-theme` for a unified look.

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

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes) topic for detailed guidance on how to use them.

### Applying the custom theme

The last step is to **include** the component theme in our application.

```scss
igx-pivot-grid {
  @include tokens($custom-grid);
}
```

### Demo

```typescript
import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { DATA } from '../../data/pivot-data';

import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IPivotConfiguration, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';

@Component({
    selector: 'app-pivot-styling',
    styleUrls: ['./pivot-styling.component.scss'],
    templateUrl: './pivot-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxPivotGridComponent, IgxButtonGroupComponent, IgxButtonDirective]
})

export class PivotStylingComponent {
  public data = DATA;
  public themes = [
    { label: 'Studio', class: 'theme-studio', swatch: 'theme-swatch--studio' },
    { label: 'Ledger', class: 'theme-ledger', swatch: 'theme-swatch--ledger' },
    { label: 'Editorial', class: 'theme-editorial', swatch: 'theme-swatch--editorial' },
    { label: 'Midnight', class: 'theme-midnight', swatch: 'theme-swatch--midnight' }
  ];

  public activeTheme = signal(this.themes[0].class);

  public pivotConfigHierarchy: IPivotConfiguration = {
    columns: [
      {
        memberName: 'Product',
        memberFunction: (data) => data.Product.Name,
        enabled: true
      }
    ],
    rows: [
      {
        memberName: 'City',
        memberFunction: (data) => data.Seller.City,
        enabled: true,
        childLevel: {
          memberName: 'Seller',
          memberFunction: (data) => data.Seller.Name,
          enabled: true
        }
      }
    ],
    values: [
      {
        member: 'NumberOfUnits',
        aggregate: {
          aggregator: IgxPivotNumericAggregate.sum,
          key: 'sum',
          label: 'Sum'
        },
        enabled: true
      }
    ],
    filters: null
  };

  public selectTheme(args: { index: number }) {
    this.activeTheme.set(this.themes[args.index].class);
  }
}
```
```html
<div class="pivot-theming-sample">
    <div class="theme-picker">
        <span class="theme-picker__label">Pick a theme</span>

        <igx-buttongroup
            class="theme-switcher"
            selectionMode="singleRequired"
            (selected)="selectTheme($event)">
            @for (theme of themes; track theme.class) {
                <button igxButton [selected]="activeTheme() === theme.class">
                    <span class="theme-swatch" [class]="theme.swatch"></span>
                    {{ theme.label }}
                </button>
            }
        </igx-buttongroup>

        <p class="theme-picker__hint">
            Custom themes, not built-in: each is a <code>grid-theme()</code> with its
            own background and accent.
        </p>
    </div>

    <igx-pivot-grid
        #grid1
        [class]="activeTheme()"
        [data]="data"
        [pivotConfiguration]="pivotConfigHierarchy"
        [allowFiltering]="true"
        [filterMode]="'excelStyleFilter'"
        height="500px">
    </igx-pivot-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$studio-bg: #faf4ed;
$studio-accent: #907aa9;
$ledger-bg: #eceff4;
$ledger-accent: #5e81ac;
$editorial-bg: #333c43;
$editorial-accent: #a7c080;
$midnight-bg: #282a36;
$midnight-accent: #bd93f9;

.theme-studio {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0.6;

    @include tokens(grid-theme(
        $background: $studio-bg,
        $foreground: #575279,
        $accent-color: $studio-accent,
        $header-background: #fffaf3,
        $header-border-color: #dfdad9,
        $row-border-color: #f2e9e1,
        $grid-border-color: #dfdad9,
        $grid-shadow: (0 1px 3px rgba(87, 82, 121, 0.10), 0 1px 2px rgba(87, 82, 121, 0.06))
    ));
}

.theme-ledger {
    --ig-size: var(--ig-size-small);
    --ig-radius-factor: 0;

    @include tokens(grid-theme(
        $background: $ledger-bg,
        $foreground: #2e3440,
        $accent-color: $ledger-accent,
        $header-background: #d8dee9,
        $row-odd-background: #eceff4,
        $row-even-background: #e5e9f0,
        $body-column-border-color-odd: #d8dee9,
        $body-column-border-color-even: #d8dee9,
        $row-border-color: #d8dee9,
        $grid-border-color: #c8d0dc
    ));
}

.theme-editorial {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0;

    @include tokens(grid-theme(
        $schema: $dark-material-schema,
        $background: $editorial-bg,
        $foreground: #d3c6aa,
        $accent-color: $editorial-accent,
        $header-background: #3a464c,
        $row-border-color: #333c43,
        $grid-border-color: #333c43
    ));
}

.theme-midnight {
    --ig-size: var(--ig-size-medium);
    --ig-radius-factor: 0.25;

    @include tokens(grid-theme(
        $schema: $dark-material-schema,
        $background: $midnight-bg,
        $foreground: #f8f8f2,
        $accent-color: $midnight-accent,
        $header-background: #21222c,
        $body-column-border-color-odd: #44475a,
        $body-column-border-color-even: #44475a,
        $row-border-color: #44475a,
        $grid-border-color: #44475a
    ));
}

.pivot-theming-sample {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.theme-picker {
    --ig-button-group-elevation: 0;

    display: flex;
    flex-direction: column;
    gap: 6px;
    align-self: flex-start;
}

.theme-picker__label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--ig-gray-700);
}

.theme-picker__hint {
    margin: 0;
    font-size: 12px;
    line-height: 1.45;
    color: var(--ig-gray-600);

    code {
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 11px;
    }
}

.theme-swatch {
    display: inline-block;
    min-width: 14px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid var(--ig-gray-300);
    vertical-align: -2px;
    background: linear-gradient(135deg, var(--swatch-bg) 0 50%, var(--swatch-accent) 50% 100%);
}

.theme-swatch--studio {
    --swatch-bg: #{$studio-bg};
    --swatch-accent: #{$studio-accent};
}

.theme-swatch--ledger {
    --swatch-bg: #{$ledger-bg};
    --swatch-accent: #{$ledger-accent};
}

.theme-swatch--editorial {
    --swatch-bg: #{$editorial-bg};
    --swatch-accent: #{$editorial-accent};
}

.theme-swatch--midnight {
    --swatch-bg: #{$midnight-bg};
    --swatch-accent: #{$midnight-accent};
}
```

There are also additional parameters in the `grid-theme` that you can use if you want more specific customizations.

## Known Issues and Limitations

| Limitation                                                                        | Description                                                                                                                                                                                                                      |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Setting columns declaratively is not supported.                                   | The Pivot grid generates its columns based on the `columns` configuration, so setting them declaratively, like in the base grid, is not supported. Such columns are disregarded.                                                 |
| Setting duplicate `memberName` or `member` property values for dimensions/values. | `memberName`/`member` should be unique for each dimension/value. Duplication may result in loss of data from the final result.                                                                                                   |
| Row Selection is only supported in `single` mode.                                 | Multiple selection is currently not supported.                                                                                                                                                                                   |
| Merging the dimension members is case sensitive                                   | The pivot grid creates groups and merges the same (case sensitive) values. But the dimensions provide `memberFunction` and this can be changed there, the result of the `memberFunction` are compared and used as display value. |

## API References
- [`IgxPivotGrid`](mcp:get_api_reference?platform=angular&component=IgxPivotGridComponent)
- [`IgxPivotDataSelector`](mcp:get_api_reference?platform=angular&component=IgxPivotDataSelectorComponent)
- `grid-theme`
## Additional Resources

- [Angular Pivot Grid Features](/pivotgrid/pivot-grid-features)
- [Angular Pivot Grid Custom Aggregations](/pivotgrid/pivot-grid-custom)
- [Ignite UI for Angular Skills](/ai/skills) — Agent Skills for grids, data operations, and theming

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
