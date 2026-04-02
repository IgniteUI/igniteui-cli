---
title: Angular Pivot Grid Features | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, Angular pivot table, ignite ui for angular, pivot grid features, pivot features
_license: commercial
_tocName: Pivot Grid Features
_premium: true
---

# Angular Pivot Grid Features

The pivot and flat grid component classes inherit from a common base and thus share some functionality and features.

>[!NOTE]
>Some features do not have meaningful behavior in the context of a pivot table and therefore cannot be enabled for `IgxPivotGrid`. These include:
>
> - CRUD operations
> - Grouping
> - Row/Column Pinning
> - Summaries
> - Paging

The Pivot Grid component has additional features and functionalities related to its dimensions as described below.

```typescript
import { Component } from "@angular/core";

import { IPivotConfiguration, IgxPivotDateDimension, IgxPivotNumericAggregate, PivotAggregation } from 'igniteui-angular/grids/core';
import { FilteringExpressionsTree, FilteringLogic, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxPivotDataSelectorComponent, IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { SALES_DATA } from "../../data/dataToAnalyze";

export class IgxTotalSaleAggregate {
    public static totalSale: PivotAggregation = (members, data: any) =>
        data.reduce((accumulator, value) => accumulator + value.Product.UnitPrice * value.NumberOfUnits, 0);

    public static totalMin: PivotAggregation = (members, data: any) => {
        let min = 0;
        if (data.length === 1) {
            min = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    };

    public static totalMax: PivotAggregation = (members, data: any) => {
        let max = 0;
        if (data.length === 1) {
            max = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    };
}

@Component({
    selector: 'app-pivot-features-sample',
    styleUrls: ['./pivot-features.component.scss'],
    templateUrl: './pivot-features.component.html',
    imports: [IgxPivotGridComponent, IgxPivotDataSelectorComponent]
})
export class PivotFeaturesComponent {
    public data = SALES_DATA;

    public pivotConfig: IPivotConfiguration = {
        columns: [
            new IgxPivotDateDimension(
                {
                    memberName: 'Date',
                    enabled: true
                },
                {
                    months: false,
                    quarters: true,
                    fullDate: false
                }
            )
        ],
        rows: [
            {
                memberFunction: () => 'All Products',
                memberName: 'AllProducts',
                enabled: true,
                width: "150px",
                childLevel: {
                    memberFunction: (data) => data.Product.Name,
                    memberName: 'ProductCategory',
                    enabled: true
                }
            },
            {
                memberName: 'City',
                width: "150px",
                memberFunction: (data) => data.Seller.City,
                enabled: true
            }
        ],
        values: [
            {
                member: 'Value',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                }],
                enabled: true,
                styles: {
                    downFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150,
                    upFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
                },
                formatter: (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined
            },
            {
                member: 'AmountofSale',
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
                }],
                enabled: true,
                dataType: 'currency'
            }
        ],
        filters: [
            {
                memberName: 'SellerName',
                memberFunction: (data) => data.Seller.Name,
                enabled: true
            }
        ]
    };
}
```
```html
<div class="pivot-container">
    <igx-pivot-grid #grid1 [data]="data" [height]="'850px'" [pivotConfiguration]="pivotConfig" [rowSelection]="'single'"
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

    ::ng-deep {
        .upFontValue {
            color: var(--ig-success-500);
        }

        .downFontValue {
            color: var(--ig-error-500);
        }

        igx-pivot-data-selector {
            border: 1px solid hsla(var(--ig-gray-200));
            margin: 0 8px;
        }
    }

}

igx-pivot-grid {
    flex: 1;
}

igx-pivot-data-selector {
    --ig-size: var(--ig-size-small);
}

.pivot-container {
    display: flex;
    align-items: flex-start;
    flex: 1 1 auto;
    order: 0;
}
```

## Dimensions filtering

All dimensions (filters, rows, columns) can be filtered via the chip UI or the API. This functionality is embedded and enabled by default.

>[!NOTE]
>You can use the filtering dimension to filter out data values which are not a part of the pivot view.

The filtering UI can be opened via the dimension chips filter icon and allows excel-style filtering of the unique dimension values.

>[!NOTE]
>If there is not enough space for all of the filtering chips, the pivot grid will show the ones that were cut off into a dropdown. End-users can access and manipulate them there.

Dimensions can also be filtered initially via the dimension configuration in `pivotConfiguration` with the dimension's `filter` property.
It can be set to a new `FilteringExpressionsTree` with the related filter condition, for example:

```typescript
public filterExpTree = new FilteringExpressionsTree(FilteringLogic.And);

constructor() {
    this.filterExpTree.filteringOperands = [
        {
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            fieldName: 'SellerName',
            searchVal: 'Stanley'
        }
    ];
}

public pivotConfigHierarchy: IPivotConfiguration = {
    filters: [
        {
            memberName: 'SellerName',
            enabled: true,
            filter: this.filterExpTree
        }
    ]
}
```

## Dimensions sorting

Dimension values in the `rows` or `columns` can be sorted via the related chip or the API. This functionality is embedded and enabled by default.

The dimension is sorted on click of the related chip and as a result the dimension values are sorted in ascending/descending order.

Sorting can also be applied initially via the `sortDirection` property of the dimension definition.

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'SellerName',
            enabled: true,
            sortDirection: SortingDirection.Asc
        }
    ]
}
```

## Dimensions resizing

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized by double clicking the resize indicator, or by using the related API - `autoSizeRowDimension`.

A different size can also be set initially with the `width` property available in the dimension definition:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'Country',
            enabled: true,
            width: '400px'
        }
    ]
}
```

>[!NOTE]
>As of version `18.0.0` the IgniteUI for Angular the `width` of the row dimensions can also be set to `auto`.

## Dimensions selection

The Pivot Grid supports single selection which is enabled just like in the base grid. For example:

```html
<igx-pivot-grid #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

In case there are multiple row or column dimensions which would create groups that span multiple rows/columns, selection is applied to all cells that belong to the selected group.

## Super Compact Mode

The `IgxPivotGrid` component provides a `superCompactMode` `@Input`. It is suitable for cases that require a lot of cells to be present on the screen at once. If enabled the option ignores the `ig-size` variable for the pivot grid. Enabling `superCompactMode` also sets the `ig-size` variable to `ig-size-small` for each child component(like `IgxChip`) that does not have the `superCompactMode` option.

```html
<igx-pivot-grid [superCompactMode]="true"></igx-pivot-grid>
```

## Additional summary column

When a `column` dimension defines a hierarchy, the pivot grid will render additional summary/total column, which accumulates the aggregations of all of the columns inside the group. When the group is collapsed only the summary column will remain. And when the group is expanded the additional summary column appears at the end of the group.

## Row Dimensions Headers

As of version `18.0.0` the IgniteUI for Angular row dimension value headers can be enabled through `pivotUI` option:

```html
<igx-pivot-grid [pivotUI]="{ showRowHeaders: true }">
</igx-pivot-grid>
```

## Row Dimension Layout

The `IgxPivotGridComponent` supports two ways of row dimension rendering. This can be controlled by setting the `pivotUI` option's `rowLayout` property.

```html
  <igx-pivot-grid [pivotUI]="pivotUI">
  </igx-pivot-grid>
```

```typescript
public pivotUI: IPivotUISettings = { rowLayout: PivotRowLayoutType.Horizontal };
```

The default layout of the grid is `Vertical`. In this mode the hierarchy of dimensions expands vertically. The alternative would be `Horizontal`. In this mode, the children of a single row dimension when expanded are shown horizontally in the same parent multi row layout. In the sample bellow you can toggle between the two modes to compare them.

Note that in the `Horizontal` mode, the parent row dimension aggregates are not visible unless the parent row is collapsed.
To show the parent dimension in a row summary, the `horizontalSummary` property can be enabled for the related dimension.

```ts
rows: [
    {
        memberFunction: () => 'All Products',
        memberName: 'AllProducts',
        enabled: true,
        horizontalSummary: true,
        width: "150px",
        childLevel: {
            //...
        }
    }
]
```

Additionally the position of the summary can be changed via the `horizontalSummariesPosition` property of the `pivotUI` option. It can be set to either `Top`(default) or `Bottom`.

```ts
public pivotUI: IPivotUISettings = { rowLayout: PivotRowLayoutType.Horizontal, horizontalSummariesPosition: PivotSummaryPosition.Bottom };
```

>[!NOTE]
> The row summary related options - `horizontalSummary` and  `horizontalSummariesPosition` are applicable only for the `Horizontal` layout mode.

```typescript
import { Component, ViewChild } from "@angular/core";

import { IPivotConfiguration, IPivotUISettings, IgxPivotDateDimension, IgxPivotNumericAggregate, PivotAggregation, PivotRowLayoutType, PivotSummaryPosition } from 'igniteui-angular/grids/core';
import { FilteringExpressionsTree, FilteringLogic, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IChangeCheckboxEventArgs } from 'igniteui-angular/checkbox';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { SALES_DATA } from "../../data/dataToAnalyze";

export class IgxTotalSaleAggregate {
    public static totalSale: PivotAggregation = (members, data: any) =>
        data.reduce((accumulator, value) => accumulator + value.Product.UnitPrice * value.NumberOfUnits, 0);

    public static totalMin: PivotAggregation = (members, data: any) => {
        let min = 0;
        if (data.length === 1) {
            min = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    };

    public static totalMax: PivotAggregation = (members, data: any) => {
        let max = 0;
        if (data.length === 1) {
            max = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    };
}

@Component({
    selector: 'app-pivot-layout-sample',
    styleUrls: ['./pivot-layout.component.scss'],
    templateUrl: './pivot-layout.component.html',
    imports: [IgxSwitchComponent, IgxPivotGridComponent]
})
export class PivotGridLayoutComponent {
    public data = SALES_DATA;
    public enableSummaries = true;
    public pivotUI: IPivotUISettings = { showRowHeaders: true, rowLayout: PivotRowLayoutType.Horizontal };

    @ViewChild("grid1")
    public grid1: IgxPivotGridComponent;

    public pivotConfig = this.buildPivotConfig();

    public buildPivotConfig(): IPivotConfiguration {
        return {
            columns: [
                new IgxPivotDateDimension(
                    {
                        memberName: 'Date',
                        enabled: true
                    },
                    {
                        months: false,
                        quarters: true,
                        fullDate: false
                    }
                )
            ],
            rows: [
                {
                    memberFunction: () => 'All Products',
                    memberName: 'AllProducts',
                    enabled: true,
                    horizontalSummary: this.enableSummaries,
                    width: "150px",
                    childLevel: {
                        memberFunction: (data) => data.Product.Name,
                        memberName: 'ProductCategory',
                        horizontalSummary: this.enableSummaries,
                        width: "150px",
                        enabled: true,
                        childLevel: {
                            memberName: 'City',
                            width: "150px",
                            memberFunction: (data) => data.Seller.City,
                            enabled: true
                        }
                    }
                }
            ],
            values: [
                {
                    member: 'Value',
                    aggregate: {
                        key: 'SUM',
                        aggregator: IgxPivotNumericAggregate.sum,
                        label: 'Sum'
                    },
                    aggregateList: [{
                        key: 'SUM',
                        aggregator: IgxPivotNumericAggregate.sum,
                        label: 'Sum'
                    }],
                    enabled: true,
                    styles: {
                        downFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150,
                        upFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
                    },
                    formatter: (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined
                },
                {
                    member: 'AmountofSale',
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
                    }],
                    enabled: true,
                    dataType: 'currency'
                }
            ],
            filters: [
                {
                    memberName: 'SellerName',
                    memberFunction: (data) => data.Seller.Name,
                    enabled: true
                }
            ]
        };
    }

    public onShowRowHeaders(event: IChangeCheckboxEventArgs) {
        this.pivotUI.showRowHeaders = event.checked;
        this.grid1.pivotUI = this.pivotUI;
    }

    public onLayoutToggle(event: IChangeCheckboxEventArgs) {
        this.pivotUI.rowLayout = event.checked ? PivotRowLayoutType.Horizontal : PivotRowLayoutType.Vertical;
        this.grid1.pivotUI = this.pivotUI;
    }

    public onSummariesToggle(event: IChangeCheckboxEventArgs) {
        this.enableSummaries = event.checked;
        this.grid1.pivotConfiguration = this.buildPivotConfig();
    }

    public onSummariesPositionToggle(event: IChangeCheckboxEventArgs) {
        this.pivotUI.horizontalSummariesPosition = event.checked ? PivotSummaryPosition.Top : PivotSummaryPosition.Bottom ;
        this.grid1.pivotUI = this.pivotUI;
    }
}
```
```html
<div class="switches">
    <igx-switch [checked]="pivotUI.showRowHeaders" (change)="onShowRowHeaders($event)">Show row headers</igx-switch>
    <igx-switch [checked]="pivotUI.rowLayout === 'horizontal'" (change)="onLayoutToggle($event)">Horizontal layout</igx-switch>
    <igx-switch [checked]="pivotConfig.rows[0].horizontalSummary" (change)="onSummariesToggle($event)">Horizontal summaries</igx-switch>
    <igx-switch [checked]="pivotUI.horizontalSummariesPosition === 'top'" (change)="onSummariesPositionToggle($event)">Horizontal summaries position</igx-switch>
</div>
<div class="pivot-container">
    <igx-pivot-grid #grid1 [data]="data" [height]="'800px'" [pivotConfiguration]="pivotConfig" [rowSelection]="'single'"
        [superCompactMode]="true" [defaultExpandState]='true' [pivotUI]="pivotUI">
    </igx-pivot-grid>
</div>
```
```scss
:host {
    padding: 8px;
    display: flex;
    flex-direction: column;

    ::ng-deep {
        .upFontValue {
            color: var(--ig-success-500);
        }

        .downFontValue {
            color: var(--ig-error-500);
        }

        igx-pivot-data-selector {
            border: 1px solid hsla(var(--ig-gray-200));
            margin: 0 8px;
        }
    }

}

igx-pivot-grid {
    flex: 1;
}

igx-pivot-data-selector {
    --ig-size: var(--ig-size-small);
}

.pivot-container {
    display: flex;
    align-items: flex-start;
    flex: 1 1 auto;
    order: 0;
}

.switches {
    margin-top: 12px;
    margin-bottom: 8px;
    width: 100%;
    display: flex;
    gap: 15px;
}
```

## Interactions

### Keyboard navigation

Keyboard navigation in `IgxPivotGrid` works similarly to the one in `IgxGrid`. The pivot grid is split into three areas - `rows`, `columns`, `values`. The areas for `rows` and `columns` are considered headers for the purposes of navigation while the area for `values` is the body.
The keyboard arrows allow navigating the active element within the current area only.

### Dimensions drag & drop

The dimensions are represented by chips, which can be dragged & dropped.
All chips can change their order within their area by drag & drop.
The chips from `rows`, `column`, `filter`(dimension chips) can be moved from any of those areas to any other and at any place.
Chips from these areas can not be moved to the `values` area and chips from the `values` area can not be moved to any of the dimension areas.

>[!NOTE]
>The chips from the Pivot Grid can not be moved to the Pivot Data Selector and items from the Pivot Data Selector can not be moved to the Pivot Grid.

## API References

- [IgxPivotGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html)
- [IgxPivotDataSelectorComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotdataselectorcomponent.html)


## Additional Resources

<div class="divider--half"></div>

- [Angular Pivot Grid Overview](pivot-grid.md)
- [Angular Pivot Grid Custom Aggregations](pivot-grid-custom.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
