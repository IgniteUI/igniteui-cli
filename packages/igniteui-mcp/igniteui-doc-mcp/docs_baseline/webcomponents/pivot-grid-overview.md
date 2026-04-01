---
title: Web Components Pivot Grid Component - Ignite UI for Web Components by Infragistics
_description: Create fast, responsive Web Components pivot grids and tables with Ignite UI for Web Components. Perform complex analysis and apply data sorting, grouping, or filtering.
_keywords: Web Components pivot grid, Web Components material pivot table, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["PivotGrid", "PivotDimension", "PivotValue"]
namespace: Infragistics.Controls
_tocName: Pivot Grid
---

# Web Components Pivot Grid Overview

The Web Components Pivot Grid is used for summing up and representing voluminous multidimensional data in a cross-tabular format. The data summery can be easily and quickly sorted, grouped, or filtered. Such data can include sums, averages, and other statistics. End-users are enabled to modify the pivot table layout through drag-and-drop operations, according to their needs.

The Web Components Pivot Grid presents data in a pivot table and helps users performing complex analysis on the supplied data set. This sophisticated Pivot Grid control is used for organizing, summarizing, and filtering large volumes of data which is later displayed in a cross-table format. Key features of an Web Components Pivot Grid are row dimensions, column dimensions, aggregations, and filters.

The [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html) gives the ability to users to configure and display their data in a multi-dimensional pivot table structure.
The rows and columns represent distinct data groups, and the data cell values represent aggregations. This allows complex data analysis based on a simple flat data set. The [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html) is a feature-rich pivot table that provides easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

## Web Components Pivot Grid Example

The following is an Web Components Pivot Grid example in combination with the Web Components Pivot Data Selector Component. This way you can have more flexible runtime configuration options.

```typescript
export class PivotSalesDataItem {
    public constructor(init: Partial<PivotSalesDataItem>) {
        Object.assign(this, init);
    }

    public Country: string;
    public Product: string;
    public UnitsSold: number;
    public ManufacturingPrice: number;
    public SalePrice: number;
    public GrossSales: number;
    public Discounts: number;
    public Sales: number;
    public COGS: number;
    public Profit: number;
    public Date: string;
    public MonthName: string;
    public Year: number;

}
export class PivotSalesData extends Array<PivotSalesDataItem> {
    public constructor() {
        super();
        this.push(new PivotSalesDataItem(
        {
            Country: `UK`,
            Product: `Vermont`,
            UnitsSold: 501,
            ManufacturingPrice: 15,
            SalePrice: 23,
            GrossSales: 26440,
            Discounts: null,
            Sales: 26440,
            COGS: 16185,
            Profit: 11255,
            Date: `1/1/20`,
            MonthName: `January`,
            Year: 2020
        }));
        this.push(new PivotSalesDataItem(
        {
            Country: `Japan`,
            Product: `Kensington`,
            UnitsSold: 1372,
            ManufacturingPrice: 3,
            SalePrice: 20,
            GrossSales: 27440,
            Discounts: null,
            Sales: 27440,
            COGS: 16185,
            Profit: 11255,
            Date: `1/1/20`,
            MonthName: `January`,
            Year: 2020
        }));
        this.push(new PivotSalesDataItem(
        {
            Country: `India`,
            Product: `Kensington`,
            UnitsSold: 2762,
            ManufacturingPrice: 3,
            SalePrice: 20,
            GrossSales: 55240,
            Discounts: null,
            Sales: 55240,
            COGS: 13210,
            Profit: 42030,
            Date: `1/1/20`,
            MonthName: `January`,
            Year: 2020
        }));
        // ... 1039 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Getting Started With Web Components Pivot Grid

The Web Components IgcPivotGrid can be configured via the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#pivotConfiguration) property.

<!--WebComponents -->

```html
<igc-pivot-grid #grid1 data="data" pivot-configuration="pivotConfigHierarchy">
</igc-pivot-grid>
```

It is defined by three main dimensions: **rows**, **columns** and **values**. The **rows** and **columns** define the grouped structure that is displayed in the rows and columns of the grid. The **values** define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the **filters** configuration property. It can be used for fields that you do not want to add as a dimension or a value but would like to filter their related member values via the UI.

### Dimensions Configuration

Each basic dimension configuration requires a [`memberName`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdimension.html#memberName) that matches a field from the provided **data**.

Multiple sibling dimensions can be defined, which creates a more complex nested group in the related row or column dimension area.

The dimensions can be reordered or moved from one area to another via their corresponding chips using drag & drop.

A dimension can also describe an expandable hierarchy via the [`childLevel`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdimension.html#childLevel) property, for example:

<!-- WebComponents -->

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

<!-- end: WebComponents -->

In this case the dimension renders an expander in the related section of the grid (row or column) and allows the children to be expanded or collapsed as part of the hierarchy. By default the row dimensions are initially expanded. This behavior can be controlled with the [`defaultExpandState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#defaultExpandState) property of the Pivot Grid.

### Predefined Dimensions

As part of the Pivot Grid some additional predefined dimensions are exposed for easier configuration:

- [`IgcPivotDateDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdatedimension.html)
    Can be used for date fields. Describes the following hierarchy by default:
  - All Periods
  - Years
  - Quarters
  - Months
  - Full Date

It can be set for rows or columns, for example:

<!-- WebComponents -->

```typescript
public pivotConfigHierarchy: IgcPivotConfiguration = {
    rows: [
        new IgcPivotDateDimension({ memberName: 'Date', enabled: true });
    ]
}
```

It also allows for further customization via the second option parameter in order to enable or disable a particular part of the hierarchy, for example:

<!-- WebComponents -->

```typescript
 new IgcPivotDateDimension({ memberName: 'Date', enabled: true }, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```

### Values Configuration

A value configuration requires a **member** that matches a field from the provided **data**, or it can define a custom **aggregator** function for more complex custom scenarios. Out of the box, there are 4 predefined aggregations that can be used depending on the data type of the data field:

- `PivotNumericAggregate` - for numeric fields.
    Contains the following aggregation functions: `SUM`, `AVG`, `MIN`, `MAX`, `COUNT`.
- `PivotDateAggregate` - for date fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `PivotTimeAggregate` - for time fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `PivotAggregate` - for any other data types. This is the base aggregation.
    Contains the following aggregation functions: `COUNT`.

The current aggregation function can be changed at runtime using the value chip's drop-down. By default, it displays a list of available aggregations based on the field's data type. A custom list of aggregations can also be set via the [`aggregateList`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotvalue.html#aggregateList) property, for example:

<!-- WebComponents -->

```typescript
public pivotConfigHierarchy: IgcPivotConfiguration = {
    values: [
        {
            member: 'AmountOfSale',
            displayName: 'Amount of Sale',
            aggregate: {
                key: 'SUM',
                aggregator: IgcTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            },
            aggregateList: [{
                key: 'SUM',
                aggregator: IgcTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            }, {
                key: 'MIN',
                aggregator: IgcTotalSaleAggregate.totalMin,
                label: 'Minimum of Sale'
            }, {
                key: 'MAX',
                aggregator: IgcTotalSaleAggregate.totalMax,
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

The pivot value also provides a [`displayName`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdatedimension.html#displayName) property. It can be used to display a custom name for this value in the column header.

### Enable Property

[`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#pivotConfiguration) is the interface that describes the current state of the [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html) component. With it the developer can declare fields of the data as **rows**, **columns**, **filters** or **values**. The configuration allows enabling or disabling each of these elements separately. Only enabled elements are included in the current state of the Pivot Grid. The [`IgcPivotDataSelectorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdataselectorcomponent.html) component utilizes the same configuration and shows a list of all elements - enabled and disabled. For each of them there is a checkbox in the appropriate state. End-users can easily tweak the pivot state by toggling the different elements using these checkboxes.
The `Enable` property controls if a given [`IgcPivotDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdimension.html) or [`IgcPivotValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotvalue.html) is active and takes part in the pivot view rendered by the Pivot Grid.

### Full Configuration Code

Let's take a look at a basic pivot configuration:

<!-- WebComponents -->

```typescript
      public pivotConfigHierarchy: IgcPivotConfiguration = {
        columns: [
            {

                memberName: 'ProductName',
                memberFunction: (data) => data.ProductName,
                enabled: true
            },
            {

                memberName: 'SellerCity',
                memberFunction: (data) => data.SellerCity,
                enabled: true
            }


        ],
        rows: [
            {
                memberName: 'SellerName',
                memberFunction: (data) => data.SellerName,
                enabled: true,
            }
        ],
        values: [
            {
                member: 'AmountofSale',
                displayName: "Amount of Sale",
                aggregate: {
                    aggregator: IgcPivotNumericAggregate.sum,
                    key: 'SUM',
                    label: 'Sum of Sale'
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
        ProductName: `Clothing`,
        ProductUnitPrice: 12.8,
        SellerName: `Stanley Brooker`,
        SellerCity: `Seattle`,
        Date: `2007-01-01T00:00:00`,
        Value: 94.4,
        NumberOfUnits: 282
    },
];
```

### Full Configuration Example

Using above code will result in the following example which groups the Date unique columns, Product Name and Seller City in unique rows and displays the related aggregations for the amount of sale in the related cells:

```typescript
export class PivotDataFlatItem {
    public constructor(init: Partial<PivotDataFlatItem>) {
        Object.assign(this, init);
    }

    public ProductName: string;
    public ProductUnitPrice: number;
    public SellerName: string;
    public SellerCity: string;
    public Date: string;
    public Value: number;
    public NumberOfUnits: number;

}
export class PivotDataFlat extends Array<PivotDataFlatItem> {
    public constructor(items: Array<PivotDataFlatItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 12.8, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `01/01/2007`, Value: 94.4, NumberOfUnits: 282 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 49.6, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `01/05/2007`, Value: 70.8, NumberOfUnits: 296 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 3.6, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `01/06/2007`, Value: 35.8, NumberOfUnits: 68 }),
                // ... 497 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Auto generate configuration

The [`autoGenerateConfig`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#autoGenerateConfig) property automatically generates dimensions and values based on the data source fields:

- Numeric Fields:
  - Created as [`IgcPivotValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotvalue.html) using `PivotNumericAggregate.sum` aggregator.
  - Added to the values collection and enabled by default.

- Non-Numeric Fields:
  - Created as [`IgcPivotDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdimension.html).
  - Disabled by default.
  - Added to the columns collection.

- Date Fields(only the first `date` field is enabled, the other `date` fields apply non-numeric fields rule):
  - Created as [`IgcPivotDateDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdatedimension.html)
  - Enabled by default
  - added to the rows collection.

This feature allows developers to quickly create a pivot view without manually specifying dimensions and values. With a pivot selector next to the pivot grid, users can enable and reorder dimensions and values as needed.

### Pivot Value Calculation Keys

The Pivot grid provides a customization to the object keys fields it uses to do its pivot calculations.
A more detailed view of how they are used can be seen bellow in example data, where you can see already aggregated values:

```json
[
    {
        ProductCategory: 'All', AllProducts: 'All Products', All: 1000, 'All-Bulgaria': 774, 'All-USA': 829, 'All-Uruguay': 524,
        AllProducts_records: [
            { ProductCategory: 'Clothing', 'All-Bulgaria': 774, 'All-USA': 296, 'All-Uruguay': 456 },
            { ProductCategory: 'Bikes', 'All-Uruguay': 68 },
            { ProductCategory: 'Accessories', 'All-USA': 293 },
            { ProductCategory: 'Components', 'All-USA': 240 }
        ]
    }
];
```

All of these are stored in the **pivotKeys** property which is part of the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#pivotConfiguration) and can be used to change the default pivot keys.

- **children** - Field that stores children for hierarchy building. It represents a map from grouped values and all the pivotGridRecords that are based on that value. It can be utilized in very specific scenarios, where there is a need to do something while creating the hierarchies. No need to change this for common usage.
- **records** - Field that stores reference to the original data records. Can be seen in the example from above - **AllProducts_records**. Avoid setting fields in the data with the same name as this property. If your data records has **records** property, you can specify different and unique value for it using the **pivotKeys**.
- **aggregations** - Field that stores aggregation values. It's applied while creating the hierarchies and also it should not be changed for common scenarios.
- **level** - Field that stores dimension level based on its hierarchy. Avoid setting fields in the data with the same name as this property. If your data records has **level** property, you can specify different and unique value for it using the **pivotKeys**.
- **columnDimensionSeparator** - Separator used when generating the unique column field values. It is the dash(**-**) from example value - **All-Bulgaria**.
- **rowDimensionSeparator** - Separator used when generating the unique row field values. It's used when creating the **records** and **level** field.

The default values are:

```typescript
{
    aggregations: 'aggregations',
    records: 'records',
    children: 'children',
    level: 'level',
    rowDimensionSeparator: '_',
    columnDimensionSeparator: '-'
};
```

> \[!Note]
> If you have data field values that contain the default keys, make sure to change the separators that match to any other symbols that you are not currently using. Otherwise could lead to unexpected behavior in calculating and showing the aggregated values.

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Setting columns declaratively is not supported. | The Pivot grid generates its columns based on the [`columns`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#columns) configuration, so setting them declaratively, like in the base grid, is not supported. Such columns are disregarded. |
| Setting duplicate [`memberName`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdimension.html#memberName) or [`member`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotvalue.html#member) property values for dimensions/values. | These properties should be unique for each dimension/value. Duplication may result in loss of data from the final result. |
| Row Selection is only supported in **Single** mode. | Multiple selection is currently not supported. |

## API References

- [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html#pivotConfiguration)
- [`IgcPivotGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotgridcomponent.html)
- [`IgcPivotDataSelectorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdataselectorcomponent.html)
- [`IgcPivotDateDimension`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpivotdatedimension.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

<!-- ## Additional Resources -->

<!-- TODO write these topics: -->

<!-- * [Web Components Pivot Grid Features](features.md) -->

<!-- * [Web Components Pivot Grid Custom Aggregations](remote-operations.md) -->

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
