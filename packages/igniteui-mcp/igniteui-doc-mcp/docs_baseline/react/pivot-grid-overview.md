---
title: React Pivot Grid Component - Ignite UI for React by Infragistics
_description: Create fast, responsive React pivot grids and tables with Ignite UI for React. Perform complex analysis and apply data sorting, grouping, or filtering.
_keywords: React pivot grid, React material pivot table, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["PivotGrid", "PivotDimension", "PivotValue"]
namespace: Infragistics.Controls
_tocName: Pivot Grid
---

# React Pivot Grid Overview

The React Pivot Grid is used for summing up and representing voluminous multidimensional data in a cross-tabular format. The data summery can be easily and quickly sorted, grouped, or filtered. Such data can include sums, averages, and other statistics. End-users are enabled to modify the pivot table layout through drag-and-drop operations, according to their needs.

The React Pivot Grid presents data in a pivot table and helps users performing complex analysis on the supplied data set. This sophisticated Pivot Grid control is used for organizing, summarizing, and filtering large volumes of data which is later displayed in a cross-table format. Key features of an React Pivot Grid are row dimensions, column dimensions, aggregations, and filters.

The [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) gives the ability to users to configure and display their data in a multi-dimensional pivot table structure.
The rows and columns represent distinct data groups, and the data cell values represent aggregations. This allows complex data analysis based on a simple flat data set. The [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) is a feature-rich pivot table that provides easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

## React Pivot Grid Example

The following is an React Pivot Grid example in combination with the React Pivot Data Selector Component. This way you can have more flexible runtime configuration options.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.pivot-container {
    display: flex;
    flex: 1 1 auto;
    order: 0;
    align-items: stretch;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SALES_DATA_NEW as pivotData } from './salesDataNew';
import { IgrPivotConfiguration, IgrPivotDataSelector, IgrPivotDateDimension, IgrPivotGrid } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function App() {
    let grid: IgrPivotGrid;
    const gridRef = (r: IgrPivotGrid) => {
        grid = r;
    }
    const selector = (selector: IgrPivotDataSelector) => {
        selector.grid = grid;
    }
    const pivotConfiguration: IgrPivotConfiguration = {
        rows: [
            new IgrPivotDateDimension({
                enabled: true,
                memberName: "Date",
            })
        ],
        columns: [
            {
                enabled: true,
                memberName: "Country",
            },
            {
                enabled: true,
                memberName: "Product",
            },
        ],
        values: [
            {
                enabled: true,
                member: "Sales",
                aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "SUM",
                },
            },
            {
                enabled: true,
                member: "Profit",
                aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "SUM",
                },
            },
        ],
    };

    return (
        <>
            <div className="container sample ig-typography">
                <div className="container fill">
                    <div className="pivot-container">
                        <IgrPivotGrid data={pivotData} ref={gridRef} pivotConfiguration={pivotConfiguration} defaultExpandState={true} superCompactMode={true}>
                        </IgrPivotGrid>
                        <IgrPivotDataSelector ref={selector}></IgrPivotDataSelector>
                    </div>
                </div>
            </div>
        </>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
```typescript
export const SALES_DATA_NEW =
    [
        {
            "Country": "UK",
            "Product": "Vermont",
            "Units Sold": "501",
            "Manufacturing Price": 15,
            "Sale Price": 23,
            "Gross Sales": 26440,
            "Discounts": null,
            "Sales": 26440,
            "COGS": 16185,
            "Profit": 11255,
            "Date": "1/1/20",
            "Month Name": "January",
            "Year": "2020"
        },
        {
            "Country": "Japan",
            "Product": "Kensington",
            "Units Sold": "1372",
            "Manufacturing Price": 3,
            "Sale Price": 20,
            "Gross Sales": 27440,
            "Discounts": null,
            "Sales": 27440,
            "COGS": 16185,
            "Profit": 11255,
            "Date": "1/1/20",
            "Month Name": "January",
            "Year": "2020"
        },
        {
            "Country": "India",
            "Product": "Kensington",
            "Units Sold": "2762",
            "Manufacturing Price": 3,
            "Sale Price": 20,
            "Gross Sales": 55240,
            "Discounts": null,
            "Sales": 55240,
            "COGS": 13210,
            "Profit": 42030,
            "Date": "1/1/20",
            "Month Name": "January",
            "Year": "2020"
        },
        // ... 1039 more items
    ];
```

## Getting Started With React Pivot Grid

The React IgrPivotGrid can be configured via the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#pivotConfiguration) property.

```tsx
<IgrPivotGrid data={pivotData} pivotConfiguration={pivotConfiguration}>
</IgrPivotGrid>
```

It is defined by three main dimensions: **rows**, **columns** and **values**. The **rows** and **columns** define the grouped structure that is displayed in the rows and columns of the grid. The **values** define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the **filters** configuration property. It can be used for fields that you do not want to add as a dimension or a value but would like to filter their related member values via the UI.

### Dimensions Configuration

Each basic dimension configuration requires a [`memberName`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdimension.html#memberName) that matches a field from the provided **data**.

Multiple sibling dimensions can be defined, which creates a more complex nested group in the related row or column dimension area.

The dimensions can be reordered or moved from one area to another via their corresponding chips using drag & drop.

A dimension can also describe an expandable hierarchy via the [`childLevel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdimension.html#childLevel) property, for example:

```tsx
const dimension: IgrPivotDimension = {
    memberName: "AllProducts",
    enabled: true,
    childLevel: {
        memberName: "ProductCategory",
        enabled: true
    }
};

```

In this case the dimension renders an expander in the related section of the grid (row or column) and allows the children to be expanded or collapsed as part of the hierarchy. By default the row dimensions are initially expanded. This behavior can be controlled with the [`defaultExpandState`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#defaultExpandState) property of the Pivot Grid.

### Predefined Dimensions

As part of the Pivot Grid some additional predefined dimensions are exposed for easier configuration:

- [`IgrPivotDateDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdatedimension.html)
    Can be used for date fields. Describes the following hierarchy by default:
  - All Periods
  - Years
  - Quarters
  - Months
  - Full Date

It can be set for rows or columns, for example:

```ts

const pivotConfiguration: IgrPivotConfiguration = {
    columns: [
        new IgrPivotDateDimension({
            enabled: true,
            memberName: "Date",
        })
    ]
};
```

It also allows for further customization via the second option parameter in order to enable or disable a particular part of the hierarchy, for example:

```tsx
 new IgrPivotDateDimension({
    enabled: true,
    memberName: "Date",
}, {
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

The current aggregation function can be changed at runtime using the value chip's drop-down. By default, it displays a list of available aggregations based on the field's data type. A custom list of aggregations can also be set via the [`aggregateList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotvalue.html#aggregateList) property, for example:

```typescript
const totalSale = (members: any, data: any) => data.reduce((accumulator:any, value: any) => accumulator + value.UnitPrice * value.UnitsSold, 0);

const totalMin = (members: any, data: any) => {
    return data.map((x:any) => x.UnitPrice * x.UnitsSold).reduce((a:number, b:number) => Math.min(a, b));
};

const totalMax = (members: any, data: any) => {
    return data.map((x:any) => x.UnitPrice * x.UnitsSold).reduce((a:number, b:number) => Math.max(a,b));
};

const pivotConfiguration: IgrPivotConfiguration = {
      values: [
            {
                enabled: true,
                member: "AmountofSale",
                displayName: "Amount of Sale",
                aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "Sum of Sale",
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: totalSale,
                    label: 'Sum of Sale'
                }, {
                    key: 'MIN',
                    aggregator: totalMin,
                    label: 'Minimum of Sale'
                }, {
                    key: 'MAX',
                    aggregator: totalMax,
                    label: 'Maximum of Sale'
                }]
            }
      ]
};
```

The pivot value also provides a [`displayName`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdatedimension.html#displayName) property. It can be used to display a custom name for this value in the column header.

### Enable Property

[`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#pivotConfiguration) is the interface that describes the current state of the [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html) component. With it the developer can declare fields of the data as **rows**, **columns**, **filters** or **values**. The configuration allows enabling or disabling each of these elements separately. Only enabled elements are included in the current state of the Pivot Grid. The [`IgrPivotDataSelector`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdataselector.html) component utilizes the same configuration and shows a list of all elements - enabled and disabled. For each of them there is a checkbox in the appropriate state. End-users can easily tweak the pivot state by toggling the different elements using these checkboxes.
The `Enable` property controls if a given [`IgrPivotDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdimension.html) or [`IgrPivotValue`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotvalue.html) is active and takes part in the pivot view rendered by the Pivot Grid.

### Full Configuration Code

Let's take a look at a basic pivot configuration:

```tsx
const pivotConfiguration1: IgrPivotConfiguration = {
    columns: [
        new IgrPivotDateDimension({
            enabled: true,
            memberName: "Date",
        })
    ],
    rows: [
        {
            enabled: true,
            memberName: "SellerCity"
        },
        {
            enabled: true,
            memberName: "ProductName"
        }
    ],
    filters: [
        {
            enabled: true,
            memberName: "SellerName"
        }
    ],
    values: [
        {
            member: "ProductUnitPrice",
            displayName: "Amount of Sale",
            dataType: "currency",
            enabled: true,
            aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "Sum of Sale",
                }
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPivotGridModule } from 'igniteui-react-grids';
import { IgrPivotGrid, IgrPivotConfiguration, IgrPivotDateDimension, IgrPivotDimension, IgrPivotDateDimensionOptions, SortingDirection, IgrPivotValue, IgrPivotAggregator } from 'igniteui-react-grids';
import { PivotDataFlatItem, PivotDataFlat } from './PivotDataFlat';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPivotGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrPivotGrid
    private gridRef(r: IgrPivotGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pivotConfiguration1: IgrPivotConfiguration | null = null;
    public get pivotConfiguration1(): IgrPivotConfiguration {
        if (this._pivotConfiguration1 == null)
        {
            var pivotConfiguration1: IgrPivotConfiguration = {} as IgrPivotConfiguration;

            var igrPivotDateDimension1 = new IgrPivotDateDimension();
            igrPivotDateDimension1.memberName = "Date";
            igrPivotDateDimension1.enabled = true;
            var igrPivotDimension1: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension1.memberName = "Date";
            igrPivotDimension1.enabled = true;

            igrPivotDateDimension1.baseDimension = igrPivotDimension1;
            var igrPivotDateDimensionOptions1: IgrPivotDateDimensionOptions = {} as IgrPivotDateDimensionOptions;
            igrPivotDateDimensionOptions1.years = true;
            igrPivotDateDimensionOptions1.months = false;
            igrPivotDateDimensionOptions1.quarters = true;
            igrPivotDateDimensionOptions1.fullDate = false;

            igrPivotDateDimension1.options = igrPivotDateDimensionOptions1;

            pivotConfiguration1.columns = [igrPivotDateDimension1];
            var igrPivotDimension2: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension2.memberName = "ProductName";
            igrPivotDimension2.sortDirection = SortingDirection.Asc;
            igrPivotDimension2.enabled = true;

            var igrPivotDimension3: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension3.memberName = "SellerCity";
            igrPivotDimension3.enabled = true;

            pivotConfiguration1.rows = [igrPivotDimension2,igrPivotDimension3];
            var igrPivotDimension4: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension4.memberName = "SellerName";
            igrPivotDimension4.enabled = true;

            pivotConfiguration1.filters = [igrPivotDimension4];
            var igrPivotValue1: IgrPivotValue = {} as IgrPivotValue;
            igrPivotValue1.member = "AmountofSale";
            igrPivotValue1.displayName = "Amount of Sale";
            igrPivotValue1.enabled = true;
            var igrPivotAggregator1: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator1.key = "SUM";
            igrPivotAggregator1.label = "Sum of Sale";
            igrPivotAggregator1.aggregator = this.pivotDataFlatAggregateSumSale;

            igrPivotValue1.aggregate = igrPivotAggregator1;
            var igrPivotAggregator2: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator2.key = "SUM";
            igrPivotAggregator2.label = "Sum of Sale";
            igrPivotAggregator2.aggregator = this.pivotDataFlatAggregateSumSale;

            var igrPivotAggregator3: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator3.key = "MIN";
            igrPivotAggregator3.label = "Minimum of Sale";
            igrPivotAggregator3.aggregator = this.pivotDataFlatAggregateMinSale;

            var igrPivotAggregator4: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator4.key = "MAX";
            igrPivotAggregator4.label = "Maximum of Sale";
            igrPivotAggregator4.aggregator = this.pivotDataFlatAggregateMaxSale;

            igrPivotValue1.aggregateList = [igrPivotAggregator2,igrPivotAggregator3,igrPivotAggregator4];

            pivotConfiguration1.values = [igrPivotValue1];

            this._pivotConfiguration1 = pivotConfiguration1;
        }
        return this._pivotConfiguration1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrPivotGrid
                    data={this.pivotDataFlat}
                    ref={this.gridRef}
                    rowSelection="single"
                    superCompactMode={true}
                    pivotConfiguration={this.pivotConfiguration1}>
                </IgrPivotGrid>
            </div>
        </div>
        );
    }

    private _pivotDataFlat: PivotDataFlat = null;
    public get pivotDataFlat(): PivotDataFlat {
        if (this._pivotDataFlat == null)
        {
            this._pivotDataFlat = new PivotDataFlat();
        }
        return this._pivotDataFlat;
    }


    public pivotDataFlatAggregateSumSale(members: any[], data: any[]): any {
        return data.reduce((accumulator, value) => accumulator + value.ProductUnitPrice * value.NumberOfUnits, 0);
    }

    public pivotDataFlatAggregateMinSale(members: any[], data: any[]): any {
        let min = 0;
        if (data.length === 1) {
            min = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    }

    public pivotDataFlatAggregateMaxSale(members: any[], data: any[]): any {
        let max = 0;
        if (data.length === 1) {
            max = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Auto generate configuration

The [`autoGenerateConfig`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#autoGenerateConfig) property automatically generates dimensions and values based on the data source fields:

- Numeric Fields:
  - Created as [`IgrPivotValue`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotvalue.html) using `PivotNumericAggregate.sum` aggregator.
  - Added to the values collection and enabled by default.

- Non-Numeric Fields:
  - Created as [`IgrPivotDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdimension.html).
  - Disabled by default.
  - Added to the columns collection.

- Date Fields(only the first `date` field is enabled, the other `date` fields apply non-numeric fields rule):
  - Created as [`IgrPivotDateDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdatedimension.html)
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

All of these are stored in the **pivotKeys** property which is part of the [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#pivotConfiguration) and can be used to change the default pivot keys.

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

> [!Note]
> If you have data field values that contain the default keys, make sure to change the separators that match to any other symbols that you are not currently using. Otherwise could lead to unexpected behavior in calculating and showing the aggregated values.

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Setting columns declaratively is not supported. | The Pivot grid generates its columns based on the [`columns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columns) configuration, so setting them declaratively, like in the base grid, is not supported. Such columns are disregarded. |
| Setting duplicate [`memberName`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdimension.html#memberName) or [`member`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotvalue.html#member) property values for dimensions/values. | These properties should be unique for each dimension/value. Duplication may result in loss of data from the final result. |
| Row Selection is only supported in **Single** mode. | Multiple selection is currently not supported. |

## API References

- [`pivotConfiguration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html#pivotConfiguration)
- [`IgrPivotGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotgrid.html)
- [`IgrPivotDataSelector`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdataselector.html)
- [`IgrPivotDateDimension`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpivotdatedimension.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

<!-- ## Additional Resources -->

<!-- TODO write these topics: -->

<!-- * [React Pivot Grid Features](features.md) -->

<!-- * [React Pivot Grid Custom Aggregations](remote-operations.md) -->

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
