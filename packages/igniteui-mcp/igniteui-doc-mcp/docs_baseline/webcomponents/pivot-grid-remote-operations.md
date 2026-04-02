---
title: Web Components Pivot Grid Custom Remote | Pivot Tables | Infragistics
_description: Create fast, responsive Web Components pivot grids and tables with Ignite UI for Web Components. Perform complex data analysis via pivot data.
_keywords: Web Components pivot grid, Web Components material pivot table, ignite ui for Web Components, pivot grid customization, pivot grid remote, pivot remote
_license: commercial
mentionedTypes: ["PivotGrid", "PivotConfiguration", "PivotKeys"]
namespace: Infragistics.Controls
_tocName: Remote Operations
_premium: true
---

# Web Components Pivot Grid Remote Operations

In scenarios where the pivot data is already grouped and aggregated from a remote service and there's no need for further processing on the client, the pivot grid can be configured to use a custom empty strategy that will skip data processing on the client and allow it to directly display the data as is:

```typescript
public pivotConfigHierarchy: IgcPivotConfiguration = {
    columnStrategy: IgcNoopPivotDimensionsStrategy.instance(),
    rowStrategy: IgcNoopPivotDimensionsStrategy.instance(),
}
```

The following example show how to handle scenarios, where the data is already aggregated and how its structure should look like: ```typescript
export class PivotNoopData extends Array<any> {
    public constructor() {
        super();
        this.push({
            'AllProducts': 'All', 'USA': 1159, 'Uruguay': 1274, 'Bulgaria': 1012, 'France': 1301, 'Germany': 570, 'Austria': 990,
            'AllSeller_records': [
                {
                    'AllSeller': 'All Sellers',
                    'USA': 1159, 'Uruguay': 1274, 'Bulgaria': 1012, 'France': 1301, 'Germany': 570, 'Austria': 990,
                    'AllSeller_records': [
                        { 'SellerName': 'David', 'USA': 293, 'France': 240, 'Austria': 270, 'Uruguay': 130, 'Bulgaria': 110 },
                        { 'SellerName': 'Lydia', 'Germany': 120, 'Uruguay': 68, 'Austria': 250, 'France': 170, 'Bulgaria': 220 },
                        { 'SellerName': 'Stanley', 'Austria': 400, 'Germany': 240, 'Bulgaria': 282, ' USA': 330 },
                        { 'SellerName': 'Elisa', 'USA': 296, 'Uruguay': 530, 'France': 430, 'Germany': 230 },
                        { 'SellerName': 'John', 'France': 361, 'USA': 240, 'Bulgaria': 190, 'Uruguay': 90 },
                        { 'SellerName': 'Larry', 'Uruguay': 456, 'France': 100, 'Austria': 70, 'Bulgaria': 210 }
                    ]
                }
            ],
            'AllProducts_records': [
                {
                    'ProductCategory': 'Accessories',
                    'USA': 623,
                    'France': 100,
                    'Austria': 400,
                    'Bulgaria': 210,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers', 'USA': 623, 'France': 100, 'Austria': 400, 'Bulgaria': 210,
                            'AllSeller_records': [
                                { 'SellerName': 'David', 'USA': 293 },
                                { 'SellerName': 'Stanley', 'USA': 330, 'Austria': 400 },
                                { 'SellerName': 'Larry', 'France': 100, 'Bulgaria': 210 }
                            ]
                        }
                    ]
                },
                {
                    'ProductCategory': 'Bikes',
                    'Uruguay': 198,
                    'France': 531,
                    'Germany': 120,
                    'Austria': 270,
                    'Bulgaria': 190,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers',
                            'Uruguay': 198,
                            'France': 531,
                            'Germany': 120,
                            'Austria': 270,
                            'Bulgaria': 190,
                            'AllSeller_records': [
                                { 'SellerName': 'Lydia', 'Uruguay': 68, 'Germany': 120, 'France': 170 },
                                { 'SellerName': 'John', 'France': 361, 'Bulgaria': 190 },
                                { 'SellerName': 'David', 'Austria': 270, 'Uruguay': 130 }
                            ]
                        }
                    ]
                },
                {
                    'ProductCategory': 'Clothing',
                    'USA': 296,
                    'Uruguay': 986,
                    'Bulgaria': 502,
                    'Germany': 470,
                    'France': 430,
                    'Austria': 70,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers', 'USA': 296, 'Uruguay': 986, 'Bulgaria': 502, 'Germany': 470, 'France': 430, 'Austria': 70,
                            'AllSeller_records': [
                                { 'SellerName': 'Elisa', 'USA': 296, 'Uruguay': 530, 'France': 430, 'Germany': 230 },
                                { 'SellerName': 'Lydia', 'Bulgaria': 220 },
                                { 'SellerName': 'Larry', 'Uruguay': 456, 'Austria': 70 },
                                { 'SellerName': 'Stanley', 'Germany': 240, 'Bulgaria': 282 }
                            ]
                        }
                    ]
                },
                {
                    'ProductCategory': 'Components',
                    'USA': 240,
                    'France': 240,
                    'Austria': 250,
                    'Bulgaria': 110,
                    'Uruguay': 90,
                    'AllSeller_records': [
                        {
                            'AllSeller': 'All Sellers',
                            'USA': 240,
                            'France': 240,
                            'Austria': 250,
                            'Bulgaria': 110,
                            'Uruguay': 90,
                            'AllSeller_records': [
                                { 'SellerName': 'John', 'USA': 240, 'Uruguay': 90 },
                                { 'SellerName': 'David', 'France': 240, 'Bulgaria': 110 },
                                { 'SellerName': 'Lydia', 'Austria': 250 }
                            ]
                        }
                    ]
                }
            ]
        });
    }

    public static getData(): Promise<any> {
        return new Promise(resolve => setTimeout(() => {
            resolve(new PivotNoopData());
        }, 1000));
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


Users have the ability to achieve certain scenarios by feeding the pivot grid with already aggregated data.
There are some requirements on how the data should look like and some specifics regarding hierarchies in the pivot view. For example, to declare hierarchy in **rows** dimension:

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

- [`children`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#children) - Field that stores children for hierarchy building. It represents a map from grouped values and all the pivotGridRecords that are based on that value. It can be utilized in very specific scenarios, where there is a need to do something while creating the hierarchies. No need to change this for common usage.
- [`records`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#records) - Field that stores reference to the original data records. Can be seen in the example from above - **AllProducts_records**. Avoid setting fields in the data with the same name as this property. If your data records has **records** property, you can specify different and unique value for it using the [`pivotKeys`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotconfiguration.html#pivotKeys).
- [`aggregations`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#aggregations) - Field that stores aggregation values. It's applied while creating the hierarchies and also it should not be changed for common scenarios.
- [`level`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#level) - Field that stores dimension level based on its hierarchy. Avoid setting fields in the data with the same name as this property. If your data records has **level** property, you can specify different and unique value for it using the [`pivotKeys`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotconfiguration.html#pivotKeys).
- [`columnDimensionSeparator`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#columnDimensionSeparator) - Separator used when generating the unique column field values. It is the dash(**-**) from the example from above - **All-Bulgaria**.
- [`rowDimensionSeparator`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#rowDimensionSeparator) - Separator used when generating the unique row field values. It is the underscore(**\_**) from the example from above - **AllProducts_records**. It's used when creating the [`records`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#records) and [`level`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotkeys.html#level) field.

All of these are stored in the [`pivotKeys`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotconfiguration.html#pivotKeys) property which is part of the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#pivotConfiguration) and can be used to change the default pivot keys.
These defaults are:

```typescript
export const   = {
    aggregations: 'aggregations', records: 'records', children: 'children', level: 'level',
    rowDimensionSeparator: '_', columnDimensionSeparator: '-'
};
```

Setting `NoopPivotDimensionsStrategy` for the [`columnStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotconfiguration.html#columnStrategy) and [`rowStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotconfiguration.html#rowStrategy) skips the data grouping and aggregation done by the data pipes, but the pivot grid still needs declarations for the rows, columns, values and filters in order to render the pivot view as expected:

```typescript
public pivotConfig: IgcPivotConfiguration = {
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
                aggregator: IgcPivotNumericAggregate.sum,
                key: 'sum',
                label: 'Sum'
            },
            enabled: true
        },
    ]
}
```

It is important for the data to match the configuration. For the best results no additional fields should be included into the aggregated data and no fields from the provided data should be left undeclared as rows or columns. The [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html) component builds its data based on the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#pivotConfiguration) and it is expected for the configuration and aggregated data to match accordingly.

Similarly for other remote data operations like sorting and filtering, data processing can be skipped by setting the related empty strategies - [`filterStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#filterStrategy), [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#sortStrategy):

```html
<igc-pivot-grid filter-strategy="noopFilterStrategy" sort-strategy="noopSortStrategy">
</igc-pivot-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();
public noopSortStrategy = NoopSortingStrategy.instance();
```

## API References

- [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html)
- [`IgcPivotDataSelectorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdataselectorcomponent.html)

## Additional Resources

<!-- * [Web Components Pivot Grid Features](pivot-grid-features.md) -->

- [Web Components Pivot Grid Overview](overview.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
