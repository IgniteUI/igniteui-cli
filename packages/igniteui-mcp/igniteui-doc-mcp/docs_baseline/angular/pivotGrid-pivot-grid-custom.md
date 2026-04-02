---
title: Angular Pivot Grid Custom Remote | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, Angular pivot table, ignite ui for angular, pivot grid customization, pivot grid remote, pivot remote
_license: commercial
_tocName: Pivot Grid Remote Operations
_premium: true
---


# Angular Pivot Grid Remote Operations

In scenarios where the pivot data is already grouped and aggregated from a remote service and there's no need for further processing on the client, the pivot grid can be configured to use a custom empty strategy that will skip data processing on the client and allow it to directly display the data as is:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    columnStrategy: NoopPivotDimensionsStrategy.instance(),
    rowStrategy: NoopPivotDimensionsStrategy.instance(),
}
```

The following example show how to handle scenarios, where the data is already aggregated and how its structure should look like:
```typescript
import { AfterViewInit, Component, ViewChild, inject } from "@angular/core";

import { IPivotConfiguration, IgxPivotNumericAggregate, NoopPivotDimensionsStrategy } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { PivotDataService } from "../../services/pivotRemoteData.service";

@Component({
    selector: 'app-pivot-grid-noop-sample',
    styleUrls: ['./pivot-grid-noop-sample.component.scss'],
    templateUrl: './pivot-grid-noop-sample.component.html',
    providers: [PivotDataService],
    imports: [IgxPivotGridComponent]
})
export class PivotGridNoopSampleComponent implements AfterViewInit {
    private _remoteService = inject(PivotDataService);

    @ViewChild('grid', { static: true })
    public grid: IgxPivotGridComponent;

    public data: any[];

    public pivotConfigHierarchy: IPivotConfiguration = {
        columnStrategy: NoopPivotDimensionsStrategy.instance(),
        rowStrategy: NoopPivotDimensionsStrategy.instance(),
        columns: [
            {
                memberName: 'Country',
                enabled: true
            }
        ],
        rows: [
            {
                memberFunction: () => 'All',
                memberName: 'AllProducts',
                enabled: true,
                childLevel: {
                    memberFunction: (data) => data.ProductCategory,
                    memberName: 'ProductCategory',
                    enabled: true
                }
            },
            {
                memberName: 'AllSeller',
                memberFunction: () => 'All Sellers',
                enabled: true,
                childLevel: {
                    enabled: true,
                    memberName: 'SellerName'
                }
            }
        ],
        values: [
            {
                member: 'UnitsSold',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true,
                formatter: (value) => value ? value : 0
            }
        ],
        filters: null
    };

    ngAfterViewInit(): void {
        this.grid.isLoading = true;
        this._remoteService.getData().subscribe((data: any) => {
            this.grid.isLoading = false;
            this.data = data;
        });
    }
}
```
```html
<igx-pivot-grid
    #grid
    [data]="data"
    [pivotConfiguration]="pivotConfigHierarchy"
    [defaultExpandState]='true'
    [pivotUI]='{ showConfiguration: false }'
    [superCompactMode]="true"
    [height]="'500px'">
</igx-pivot-grid>
```
```scss
:host {
    display: block;
    padding: 8px;
}
```

Users have the ability to achieve certain scenarios by feeding the pivot grid with already aggregated data.
There are some requirements on how the data should look like and some specifics regarding hierarchies in the pivot view. For example, to declare hierarchy in `rows` dimension:

```typescript
rows: [
    {
        memberName: 'AllProducts',
        memberFunction: () => 'All Products',
        enabled: true,
        childLevel: {
            memberName: 'ProductCategory',
            enabled: true
        }
    }
]
```

And an example of the aggregated would be:

```typescript
public aggregatedData = [
    {
        ProductCategory: 'All', AllProducts: 'All Products', All: 1000, 'All-Bulgaria': 774, 'All-USA': 829, 'All-Uruguay': 524, AllProducts_records: [
            { ProductCategory: 'Clothing', 'All-Bulgaria': 774, 'All-USA': 296, 'All-Uruguay': 456 },
            { ProductCategory: 'Bikes', 'All-Uruguay': 68 },
            { ProductCategory: 'Accessories', 'All-USA': 293 },
            { ProductCategory: 'Components', 'All-USA': 240 }
        ]
    }
];
```

The Pivot grid provides the object keys fields it uses to do its pivot calculations.

- `children` - Field that stores children for hierarchy building. It represents a map from grouped values and all the pivotGridRecords that are based on that value. It can be utilized in very specific scenarios, where there is a need to do something while creating the hierarchies. No need to change this for common usage.
- `records` - Field that stores reference to the original data records. Can be seen in the example from above - `AllProducts_records`. Avoid setting fields in the data with the same name as this property. If your data records has `records` property, you can specify different and unique value for it using the `pivotKeys`.
- `aggregations` - Field that stores aggregation values. It's applied while creating the hierarchies and also it should not be changed for common scenarios.
- `level` - Field that stores dimension level based on its hierarchy. Avoid setting fields in the data with the same name as this property. If your data records has `level` property, you can specify different and unique value for it using the `pivotKeys`.
- `columnDimensionSeparator` - Separator used when generating the unique column field values. It is the dash(`-`) from the example from above - `All-Bulgaria`.
- `rowDimensionSeparator` - Separator used when generating the unique row field values. It is the underscore(`_`) from the example from above - `AllProducts_records`. It's used when creating the `records` and `level` field.

All of these are stored in the `pivotKeys` property which is part of the `PivotConfiguration` and can be used to change the default pivot keys.
These defaults are:

```typescript
export const DEFAULT_PIVOT_KEYS = {
    aggregations: 'aggregations', records: 'records', children: 'children', level: 'level',
    rowDimensionSeparator: '_', columnDimensionSeparator: '-'
};
```

Setting `NoopPivotDimensionsStrategy` for the `columnStrategy` and `rowStrategy` skips the data grouping and aggregation done by the data pipes, but the pivot grid still needs declarations for the rows, columns, values and filters in order to render the pivot view as expected:

```typescript
public pivotConfig: IPivotConfiguration = {
    rows: [
        {
            memberName: 'AllProducts',
            memberFunction: () => 'All Products',
            enabled: true,
            childLevel: {
                memberName: 'ProductCategory',
                enabled: true
            }
        }
    ],
    columns: [
        {
            memberName: 'All',
            enabled: true,
            childLevel: {
                memberName: 'Country',
                enabled: true
            }
        }
    ],
    values: [
        {
            member: 'UnitsSold',
            aggregate: {
                aggregator: IgxPivotNumericAggregate.sum,
                key: 'sum',
                label: 'Sum'
            },
            enabled: true
        },
    ]
}
```

It is important for the data to match the configuration. For the best results no additional fields should be included into the aggregated data and no fields from the provided data should be left undeclared as rows or columns. The `IgxPivotGrid` component builds its data based on the `PivotConfiguration` and it is expected for the configuration and aggregated data to match accordingly.

Similarly for other remote data operations like sorting and filtering, data processing can be skipped by setting the related empty strategies - `filterStrategy`, `sortStrategy`:

```html
<igx-pivot-grid [filterStrategy]="noopFilterStrategy" [sortStrategy]="noopSortStrategy" ...>
</igx-pivot-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();
public noopSortStrategy = NoopSortingStrategy.instance();
```

## API References

- [IgxPivotGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html)
- [IgxPivotDataSelectorComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotdataselectorcomponent.html)


## Additional Resources

<div class="divider--half"></div>

- [Angular Pivot Grid Features](pivot-grid-features.md)
- [Angular Pivot Grid Overview](pivot-grid.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
