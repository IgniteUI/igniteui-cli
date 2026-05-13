---
title: Blazor Pivot Grid Component - Ignite UI for Blazor by Infragistics
_description: Create fast, responsive Blazor pivot grids and tables with Ignite UI for Blazor. Perform complex analysis and apply data sorting, grouping, or filtering.
_keywords: Blazor pivot grid, Blazor material pivot table, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["PivotGrid", "PivotDimension", "PivotValue"]
namespace: Infragistics.Controls
_tocName: Pivot Grid
---

# Blazor Pivot Grid Overview

The Blazor Pivot Grid is used for summing up and representing voluminous multidimensional data in a cross-tabular format. The data summery can be easily and quickly sorted, grouped, or filtered. Such data can include sums, averages, and other statistics. End-users are enabled to modify the pivot table layout through drag-and-drop operations, according to their needs.

The Blazor Pivot Grid presents data in a pivot table and helps users performing complex analysis on the supplied data set. This sophisticated Pivot Grid control is used for organizing, summarizing, and filtering large volumes of data which is later displayed in a cross-table format. Key features of an Blazor Pivot Grid are row dimensions, column dimensions, aggregations, and filters.

The [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html) gives the ability to users to configure and display their data in a multi-dimensional pivot table structure.
The rows and columns represent distinct data groups, and the data cell values represent aggregations. This allows complex data analysis based on a simple flat data set. The [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html) is a feature-rich pivot table that provides easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

## Blazor Pivot Grid Example

The following is an Blazor Pivot Grid example in combination with the Blazor Pivot Data Selector Component. This way you can have more flexible runtime configuration options.

```razor
@using IgniteUI.Blazor.Controls


@inject IJSRuntime JS

<div class="container horizontal">

    <div class="container vertical">
        <IgbPivotGrid Data="PivotSalesData"
                      Height="100%"
                      DefaultExpandState=true
                      PivotConfiguration="PivotConfiguration"
                      Name="grid"
                      @ref="grid">
        </IgbPivotGrid>
    </div>
    <div class="container vertical" style="width: auto;">
        <IgbPivotDataSelector @ref="selector"></IgbPivotDataSelector>
    </div>

</div>

@code {
    protected override void OnAfterRender(bool firstRender)
    {
        base.OnAfterRender(firstRender);
        if (firstRender)
        {
            selector.Grid = grid;
        }
    }

    public IgbPivotGrid grid;
    private IgbPivotDataSelector selector;
    private IgbPivotConfiguration _pivotConfiguration = null;
    public IgbPivotConfiguration PivotConfiguration
    {
        get
        {
            if (this._pivotConfiguration == null)
            {
                IgbPivotConfiguration pivotConfiguration = new IgbPivotConfiguration();
                IgbPivotDimension pivotDimension1 = new IgbPivotDimension()
                    {
                        MemberName = "Product",
                        Enabled = true
                    };

                IgbPivotDimension pivotDimension2 = new IgbPivotDimension()
                    {
                        MemberName = "Country",
                        Enabled = true
                    };

                IgbPivotDateDimension pivotDimension3 = new IgbPivotDateDimension();
                pivotDimension3.Enabled = true;
                pivotDimension3.BaseDimension = new IgbPivotDimension()
                    {
                        MemberName = "Date",
                        Enabled = true
                    };
                pivotDimension3.Options = new IgbPivotDateDimensionOptions()
                    {
                        Months = false
                    };

                IgbPivotDimension pivotDimension4 = new IgbPivotDimension()
                    {
                        MemberName = "MonthName",
                        Enabled = false
                    };

                pivotConfiguration.Columns = [pivotDimension1, pivotDimension2];
                pivotConfiguration.Rows = [ pivotDimension3 ];
                pivotConfiguration.Filters = [ pivotDimension4 ];

                IgbPivotValue pivotValue1 = new IgbPivotValue()
                    {

                        Member = "Sales",
                        Enabled = false,
                        DataType = GridColumnDataType.Currency,
                        Aggregate = new IgbPivotAggregator()
                        {
                            AggregatorName = PivotAggregationType.SUM,
                            Key = "SUM",
                            Label = "Sum"
                        }
                    };


                IgbPivotValue pivotValue2 = new IgbPivotValue()
                    {

                        Member = "Profit",
                        Enabled = true,
                        DataType = GridColumnDataType.Currency,
                        Aggregate = new IgbPivotAggregator()
                        {
                            AggregatorName = PivotAggregationType.SUM,
                            Key = "SUM",
                            Label = "Sum"
                        }
                    };

                pivotConfiguration.Values = [pivotValue1, pivotValue2];

                this._pivotConfiguration = pivotConfiguration;
            }
            return this._pivotConfiguration;
        }
    }

    private PivotSalesData _pivotSalesData = null;
    public PivotSalesData PivotSalesData
    {
        get
        {
            if (_pivotSalesData == null)
            {
                _pivotSalesData = new PivotSalesData();
            }
            return _pivotSalesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class PivotSalesDataItem
{
    public string Country { get; set; }
    public string Product { get; set; }
    public double UnitsSold { get; set; }
    public double ManufacturingPrice { get; set; }
    public double SalePrice { get; set; }
    public double GrossSales { get; set; }
    public double Discounts { get; set; }
    public double Sales { get; set; }
    public double COGS { get; set; }
    public double Profit { get; set; }
    public string Date { get; set; }
    public string MonthName { get; set; }
    public double Year { get; set; }
}

public class PivotSalesData
    : List<PivotSalesDataItem>
{
    public PivotSalesData()
    {
        this.Add(new PivotSalesDataItem() { Country = @"UK", Product = @"Vermont", UnitsSold = 501, ManufacturingPrice = 15, SalePrice = 23, GrossSales = 26440, Discounts = double.NaN, Sales = 26440, COGS = 16185, Profit = 11255, Date = @"01/01/2020", MonthName = @"January", Year = 2020 });
        this.Add(new PivotSalesDataItem() { Country = @"Japan", Product = @"Kensington", UnitsSold = 1372, ManufacturingPrice = 3, SalePrice = 20, GrossSales = 27440, Discounts = double.NaN, Sales = 27440, COGS = 16185, Profit = 11255, Date = @"01/01/2020", MonthName = @"January", Year = 2020 });
        this.Add(new PivotSalesDataItem() { Country = @"India", Product = @"Kensington", UnitsSold = 2762, ManufacturingPrice = 3, SalePrice = 20, GrossSales = 55240, Discounts = double.NaN, Sales = 55240, COGS = 13210, Profit = 42030, Date = @"01/01/2020", MonthName = @"January", Year = 2020 });
        // ... 1039 more items
    }
}
```

## Getting Started With Blazor Pivot Grid

The Blazor PivotGrid can be configured via the [`PivotConfiguration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_PivotConfiguration) property.

```razor
<IgbPivotGrid PivotConfiguration="PivotConfiguration" Data="PivotData">
</IgbPivotGrid>
```

It is defined by three main dimensions: **rows**, **columns** and **values**. The **rows** and **columns** define the grouped structure that is displayed in the rows and columns of the grid. The **values** define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the **filters** configuration property. It can be used for fields that you do not want to add as a dimension or a value but would like to filter their related member values via the UI.

### Dimensions Configuration

Each basic dimension configuration requires a [`MemberName`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDimension.html#IgniteUI_Blazor_Controls_IgbPivotDimension_MemberName) that matches a field from the provided **data**.

Multiple sibling dimensions can be defined, which creates a more complex nested group in the related row or column dimension area.

The dimensions can be reordered or moved from one area to another via their corresponding chips using drag & drop.

A dimension can also describe an expandable hierarchy via the [`ChildLevel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDimension.html#IgniteUI_Blazor_Controls_IgbPivotDimension_ChildLevel) property, for example:

```razor
@code {
    var pivotConfiguration = new IgbPivotConfiguration();
    pivotConfiguration.Rows.Add(new IgbPivotDimension()
        {
            MemberName = "Product",
            Enabled = true,
            Name = "pivotDimension1",
            ChildLevel = new IgbPivotDimension() { MemberName = "Country", Enabled = true, Name = "pivotDimension2" }
        });
}
```

In this case the dimension renders an expander in the related section of the grid (row or column) and allows the children to be expanded or collapsed as part of the hierarchy. By default the row dimensions are initially expanded. This behavior can be controlled with the [`DefaultExpandState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_DefaultExpandState) property of the Pivot Grid.

### Predefined Dimensions

As part of the Pivot Grid some additional predefined dimensions are exposed for easier configuration:

- [`IgbPivotDateDimension`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDateDimension.html)
    Can be used for date fields. Describes the following hierarchy by default:
  - All Periods
  - Years
  - Quarters
  - Months
  - Full Date

It can be set for rows or columns, for example:

```razor
@code {
    IgbPivotDateDimension dateDim = new IgbPivotDateDimension();
    dateDim.BaseDimension = new IgbPivotDimension()
        {
            MemberName = "Date",
            Enabled = true
        };
    _config.Rows.Add(dateDim);
}
```

It also allows for further customization via the second option parameter in order to enable or disable a particular part of the hierarchy, for example:

```razor
@code {
    IgbPivotDateDimension dateDim = new IgbPivotDateDimension();
    dateDim.BaseDimension = new IgbPivotDimension()
        {
            MemberName = "Date",
            Enabled = true
        };
    dateDim.Options = new IgbPivotDateDimensionOptions()
        {
            Years = true,
            Months = true,
            FullDate = true,
            Quarters = true
        };
    _config.Rows.Add(dateDim);
}
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

The current aggregation function can be changed at runtime using the value chip's drop-down. By default, it displays a list of available aggregations based on the field's data type. A custom list of aggregations can also be set via the [`AggregateList`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotValue.html#IgniteUI_Blazor_Controls_IgbPivotValue_AggregateList) property, for example:

```razor
@code {
    IgbPivotConfiguration pivotConfiguration1 = new IgbPivotConfiguration();
    IgbPivotValue pivotValue = new IgbPivotValue()
        {
            Member = "Sales",
            Name = "pivotValue1",
            DisplayName = "Amount of Sales",
            Enabled = true,
            Aggregate = new IgbPivotAggregator() { Key = "sum", AggregatorName = PivotAggregationType.SUM, Label = "Sum of Sales" }
        };
    pivotValue.AggregateList.Add(new IgbPivotAggregator() { Key = "sum", AggregatorName = PivotAggregationType.SUM, Label = "Sum of Sales" });
    pivotValue.AggregateList.Add(new IgbPivotAggregator() { Key = "min", AggregatorName = PivotAggregationType.MIN, Label = "Minimum of Sales" });
    pivotValue.AggregateList.Add(new IgbPivotAggregator() { Key = "max", AggregatorName = PivotAggregationType.MAX, Label = "Maximum of Sales" });
    pivotConfiguration1.Values.Add(pivotValue);
```

The pivot value also provides a [`DisplayName`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDateDimension.html#IgniteUI_Blazor_Controls_IgbPivotDateDimension_DisplayName) property. It can be used to display a custom name for this value in the column header.

### Enable Property

[`PivotConfiguration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_PivotConfiguration) is the interface that describes the current state of the [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html) component. With it the developer can declare fields of the data as **rows**, **columns**, **filters** or **values**. The configuration allows enabling or disabling each of these elements separately. Only enabled elements are included in the current state of the Pivot Grid. The [`IgbPivotDataSelector`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDataSelector.html) component utilizes the same configuration and shows a list of all elements - enabled and disabled. For each of them there is a checkbox in the appropriate state. End-users can easily tweak the pivot state by toggling the different elements using these checkboxes.
The `Enable` property controls if a given [`IgbPivotDimension`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDimension.html) or [`IgbPivotValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotValue.html) is active and takes part in the pivot view rendered by the Pivot Grid.

### Full Configuration Code

Let's take a look at a basic pivot configuration:

```razor
    IgbPivotConfiguration pivotConfiguration = new IgbPivotConfiguration();
    pivotConfiguration.Rows.Add(new IgbPivotDimension()
        {
            MemberName = "SellerName",
            Enabled = true,
            Name = "pivotDimension1"
        });
    pivotConfiguration.Columns.Add(new IgbPivotDimension()
        {
            MemberName = "ProductName",
            Enabled = true,
            Name = "pivotDimension2"
        });
    pivotConfiguration.Columns.Add(new IgbPivotDimension()
        {
            MemberName = "SellerCity",
            Enabled = true,
            Name = "pivotDimension2"
        });
    pivotConfiguration.Values.Add(new IgbPivotValue()
        {
            Member = "AmountofSale",
            Name = "pivotValue1",
            Enabled = true,
            Aggregate = new IgbPivotAggregator() { Key = "SUM", AggregatorName = PivotAggregationType.SUM, Label = "Sum" }
        });
}
```

This configuration defines 1 row, 1 column and 1 aggregation that sums the values of each dimension groups.
The members match fields available in the provided data source:

```razor
public PivotDataFlat()
{
    this.Add(new PivotDataFlatItem()
    {
        ProductName = @"Clothing",
            ProductUnitPrice = 12.8,
            SellerName = @"Stanley Brooker",
            SellerCity = @"Seattle",
            Date = @"2007-01-01T00:00:00",
            Value = 94.4,
            NumberOfUnits = 282
    });
```

### Full Configuration Example

Using above code will result in the following example which groups the Date unique columns, Product Name and Seller City in unique rows and displays the related aggregations for the amount of sale in the related cells:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbPivotGrid
        Data="PivotDataFlat"
        Name="grid"
        @ref="grid"
        RowSelection="GridSelectionMode.Single"
        SuperCompactMode="true"
        PivotConfiguration="PivotConfiguration1">
        </IgbPivotGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbPivotGrid grid;
    private IgbPivotConfiguration _pivotConfiguration1 = null;
    public IgbPivotConfiguration PivotConfiguration1
    {
        get
        {
            if (this._pivotConfiguration1 == null)
            {
                var pivotConfiguration1 = new IgbPivotConfiguration();
                var pivotDateDimension1 = new IgbPivotDateDimension();
                pivotDateDimension1.MemberName = "Date";
                pivotDateDimension1.Enabled = true;
                pivotDateDimension1.Name = "pivotDateDimension1";var pivotDimension1 = new IgbPivotDimension();
                pivotDimension1.MemberName = "Date";
                pivotDimension1.Enabled = true;
                pivotDimension1.Name = "pivotDimension1";pivotDateDimension1.BaseDimension = pivotDimension1;
                var pivotDateDimensionOptions1 = new IgbPivotDateDimensionOptions();
                pivotDateDimensionOptions1.Years = true;
                pivotDateDimensionOptions1.Months = false;
                pivotDateDimensionOptions1.Quarters = true;
                pivotDateDimensionOptions1.FullDate = false;
                pivotDateDimensionOptions1.Name = "pivotDateDimensionOptions1";pivotDateDimension1.Options = pivotDateDimensionOptions1;
                pivotConfiguration1.Columns = [pivotDateDimension1];
                var pivotDimension2 = new IgbPivotDimension();
                pivotDimension2.MemberName = "ProductName";
                pivotDimension2.SortDirection = SortingDirection.Asc;
                pivotDimension2.Enabled = true;
                pivotDimension2.Name = "pivotDimension2";var pivotDimension3 = new IgbPivotDimension();
                pivotDimension3.MemberName = "SellerCity";
                pivotDimension3.Enabled = true;
                pivotDimension3.Name = "pivotDimension3";pivotConfiguration1.Rows = [pivotDimension2,pivotDimension3];
                var pivotDimension4 = new IgbPivotDimension();
                pivotDimension4.MemberName = "SellerName";
                pivotDimension4.Enabled = true;
                pivotDimension4.Name = "pivotDimension4";pivotConfiguration1.Filters = [pivotDimension4];
                var pivotValue1 = new IgbPivotValue();
                pivotValue1.Member = "AmountofSale";
                pivotValue1.DisplayName = "Amount of Sale";
                pivotValue1.Enabled = true;
                pivotValue1.Name = "pivotValue1";var pivotAggregator1 = new IgbPivotAggregator();
                pivotAggregator1.Key = "SUM";
                pivotAggregator1.Label = "Sum of Sale";
                pivotAggregator1.AggregatorScript = "PivotDataFlatAggregateSumSale";
                pivotAggregator1.Name = "pivotAggregator1";pivotValue1.Aggregate = pivotAggregator1;
                var pivotAggregator2 = new IgbPivotAggregator();
                pivotAggregator2.Key = "SUM";
                pivotAggregator2.Label = "Sum of Sale";
                pivotAggregator2.AggregatorScript = "PivotDataFlatAggregateSumSale";
                pivotAggregator2.Name = "pivotAggregator2";var pivotAggregator3 = new IgbPivotAggregator();
                pivotAggregator3.Key = "MIN";
                pivotAggregator3.Label = "Minimum of Sale";
                pivotAggregator3.AggregatorScript = "PivotDataFlatAggregateMinSale";
                pivotAggregator3.Name = "pivotAggregator3";var pivotAggregator4 = new IgbPivotAggregator();
                pivotAggregator4.Key = "MAX";
                pivotAggregator4.Label = "Maximum of Sale";
                pivotAggregator4.AggregatorScript = "PivotDataFlatAggregateMaxSale";
                pivotAggregator4.Name = "pivotAggregator4";pivotValue1.AggregateList = [pivotAggregator2,pivotAggregator3,pivotAggregator4];
                pivotConfiguration1.Values = [pivotValue1];

                this._pivotConfiguration1 = pivotConfiguration1;
            }
            return this._pivotConfiguration1;
        }
    }

    private PivotDataFlat _pivotDataFlat = null;
    public PivotDataFlat PivotDataFlat
    {
        get
        {
            if (_pivotDataFlat == null)
            {
                _pivotDataFlat = new PivotDataFlat();
            }
            return _pivotDataFlat;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class PivotDataFlatItem
{
    public string ProductName { get; set; }
    public double ProductUnitPrice { get; set; }
    public string SellerName { get; set; }
    public string SellerCity { get; set; }
    public string Date { get; set; }
    public double Value { get; set; }
    public double NumberOfUnits { get; set; }
}

public class PivotDataFlat
    : List<PivotDataFlatItem>
{
    public PivotDataFlat()
    {
        this.Add(new PivotDataFlatItem() { ProductName = @"Clothing", ProductUnitPrice = 12.8, SellerName = @"Stanley Brooker", SellerCity = @"Seattle", Date = @"01/01/2007", Value = 94.4, NumberOfUnits = 282 });
        this.Add(new PivotDataFlatItem() { ProductName = @"Clothing", ProductUnitPrice = 49.6, SellerName = @"Elisa Longbottom", SellerCity = @"Sofia", Date = @"01/05/2007", Value = 70.8, NumberOfUnits = 296 });
        this.Add(new PivotDataFlatItem() { ProductName = @"Bikes", ProductUnitPrice = 3.6, SellerName = @"Lydia Burson", SellerCity = @"Tokyo", Date = @"01/06/2007", Value = 35.8, NumberOfUnits = 68 });
        // ... 497 more items
    }
}
```

### Auto generate configuration

The [`AutoGenerateConfig`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_AutoGenerateConfig) property automatically generates dimensions and values based on the data source fields:

- Numeric Fields:
  - Created as [`IgbPivotValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotValue.html) using `PivotNumericAggregate.sum` aggregator.
  - Added to the values collection and enabled by default.

- Non-Numeric Fields:
  - Created as [`IgbPivotDimension`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDimension.html).
  - Disabled by default.
  - Added to the columns collection.

- Date Fields(only the first `date` field is enabled, the other `date` fields apply non-numeric fields rule):
  - Created as [`IgbPivotDateDimension`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDateDimension.html)
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

All of these are stored in the **pivotKeys** property which is part of the [`PivotConfiguration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_PivotConfiguration) and can be used to change the default pivot keys.

- **children** - Field that stores children for hierarchy building. It represents a map from grouped values and all the pivotGridRecords that are based on that value. It can be utilized in very specific scenarios, where there is a need to do something while creating the hierarchies. No need to change this for common usage.
- **records** - Field that stores reference to the original data records. Can be seen in the example from above - **AllProducts_records**. Avoid setting fields in the data with the same name as this property. If your data records has **records** property, you can specify different and unique value for it using the **pivotKeys**.
- **aggregations** - Field that stores aggregation values. It's applied while creating the hierarchies and also it should not be changed for common scenarios.
- **level** - Field that stores dimension level based on its hierarchy. Avoid setting fields in the data with the same name as this property. If your data records has **level** property, you can specify different and unique value for it using the **pivotKeys**.
- **columnDimensionSeparator** - Separator used when generating the unique column field values. It is the dash(**-**) from example value - **All-Bulgaria**.
- **rowDimensionSeparator** - Separator used when generating the unique row field values. It's used when creating the **records** and **level** field.

The default values are:

```razor
@code {
    {
        aggregations: 'aggregations',
        records: 'records',
        children: 'children',
        level: 'level',
        rowDimensionSeparator: '_',
        columnDimensionSeparator: '-'
    };
}
```

> [!Note]
> If you have data field values that contain the default keys, make sure to change the separators that match to any other symbols that you are not currently using. Otherwise could lead to unexpected behavior in calculating and showing the aggregated values.

When overriding the [`IgbPivotKeys`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotKeys.html) in Blazor, currently you will need to define all other keys, since assigning a new PivotKeys object, it replaces completely the default ones:

```razor
@code {
    var pivotConfiguration = new IgbPivotConfiguration();
    pivotConfiguration.PivotKeys = new IgbPivotKeys()
    {
        Aggregations = "aggregations",
        Records = "records",
        Children = "children",
        Level = "level",
        RowDimensionSeparator = "_",
        ColumnDimensionSeparator = "^"
    };
}
```

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Setting columns declaratively is not supported. | The Pivot grid generates its columns based on the [`Columns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Columns) configuration, so setting them declaratively, like in the base grid, is not supported. Such columns are disregarded. |
| Setting duplicate [`MemberName`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDimension.html#IgniteUI_Blazor_Controls_IgbPivotDimension_MemberName) or [`Member`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotValue.html#IgniteUI_Blazor_Controls_IgbPivotValue_Member) property values for dimensions/values. | These properties should be unique for each dimension/value. Duplication may result in loss of data from the final result. |
| Row Selection is only supported in **Single** mode. | Multiple selection is currently not supported. |

## API References

- [`PivotConfiguration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_PivotConfiguration)
- [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html)
- [`IgbPivotDataSelector`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDataSelector.html)
- [`IgbPivotDateDimension`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDateDimension.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

<!-- ## Additional Resources -->

<!-- TODO write these topics: -->

<!-- * [Blazor Pivot Grid Features](features.md) -->

<!-- * [Blazor Pivot Grid Custom Aggregations](remote-operations.md) -->

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
