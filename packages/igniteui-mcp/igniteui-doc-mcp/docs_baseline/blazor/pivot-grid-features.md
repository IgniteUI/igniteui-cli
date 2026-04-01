---
title: Blazor Pivot Grid Features | Pivot Tables | Infragistics
_description: Create fast, responsive Blazor Pivot Grid and tables with Ignite UI for Blazor and perform complex data analysis via pivot data.
_keywords: Blazor, Pivot Grid, material pivot table, Ignite UI for Blazor, grid features, pivot features
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid"]
namespace: Infragistics.Controls
_tocName: Features
_premium: true
---

# Blazor Pivot Grid Features

The pivot and flat grid components inherit from a common base and thus share some functionality and features.

> \[!Note]
> Some features do not have meaningful behavior in the context of a pivot table and therefore cannot be enabled for [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html). These include:
>
> - CRUD operations
> - Grouping
> - Row/Column Pinning
> - Summaries
> - Paging

The Pivot Grid component has additional features and functionalities related to its dimensions as described below.

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


## Dimensions Sorting

Dimension values in the `rows` or `columns` can be sorted via the related chip or the API. This functionality is embedded and enabled by default.

The dimension is sorted on click of the related chip and as a result the dimension values are sorted in ascending/descending order.

Sorting can also be applied initially via the `sortDirection` property of the dimension definition.

<!-- Blazor -->

```razor
    var pivotConfiguration = new IgbPivotConfiguration();
    var rowDimension = new IgbPivotDimension() {
        MemberName = "SellerName",
        Enabled = true,
        SortDirection = SortingDirection.Asc
    };
    pivotConfiguration.Rows.Add(rowDimension);
```

<!-- end:Blazor -->

## Dimensions Resizing

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized by double clicking the resize indicator, or by using the related API - [`AutoSizeRowDimension`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_AutoSizeRowDimension).

A different size can also be set initially with the `Width` property available in the dimension definition:

<!-- Blazor -->

```razor
    var pivotConfiguration = new IgbPivotConfiguration();
    var rowDimension = new IgbPivotDimension() {
        MemberName = "SellerName",
        Enabled = true,
        Width = "400px"
    };
    pivotConfiguration.Rows.Add(rowDimension);
```

<!-- end:Blazor -->

## Dimensions Selection

The Pivot Grid supports single selection which is enabled just like in the base grid. For example:

```razor
<IgbPivotGrid PivotConfiguration="PivotConfiguration"
        Data="PivotSalesData"
        Name="grid"
        RowSelection=GridSelectionMode.Single
        @ref="grid">
</IgbPivotGrid>
```

In case there are multiple row or column dimensions which would create groups that span multiple rows/columns, selection is applied to all cells that belong to the selected group.

## Super Compact Mode

The [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html) component provides a [`SuperCompactMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_SuperCompactMode) input. It is suitable for cases that require a lot of cells to be present on the screen at once. If enabled the option ignores the `--ig-size` CSS variable for the Pivot Grid. Enabling [`SuperCompactMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_SuperCompactMode) also sets the `--ig-size` to `small` for each child component(like [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html)) that does not have the `SuperCompactMode` option.

```razor
<IgbPivotGrid SuperCompactMode=true></IgbPivotGrid>
```

## Additional Summary Column

When a `column` dimension defines a hierarchy, the Pivot Grid will render additional summary/total column, which accumulates the aggregations of all of the columns inside the group. When the group is collapsed only the summary column will remain. And when the group is expanded the additional summary column appears at the end of the group.

## Interactions

### Keyboard Navigation

Keyboard navigation in [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html) works similarly to the one in [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). The Pivot Grid is split into three areas - `rows`, `columns`, `values`. The areas for `rows` and `columns` are considered headers for the purposes of navigation while the area for `values` is the body.
The keyboard arrows allow navigating the active element within the current area only.

### Dimensions Drag & Drop

The dimensions are represented by chips, which can be dragged & dropped.
All chips can change their order within their area by drag & drop.
The chips from `rows`, `column`, `filter`(dimension chips) can be moved from any of those areas to any other and at any place.
Chips from these areas can not be moved to the `values` area and chips from the `values` area can not be moved to any of the dimension areas.

> \[!Note]
> The chips from the Pivot Grid can not be moved to the Pivot Data Selector and items from the Pivot Data Selector can not be moved to the Pivot Grid.

## API References

- [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html)
- [`IgbPivotDataSelector`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotDataSelector.html)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
