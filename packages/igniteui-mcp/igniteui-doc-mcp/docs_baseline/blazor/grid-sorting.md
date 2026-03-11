---
title: Blazor Grid Sorting - Ignite UI for Blazor
_description: Get started with the Blazor sorting feature of Ignite UI for Blazor Grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: Blazor sort, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/sorting
_tocName: Sorting
_premium: true
---

# Blazor Grid Sorting

The Ignite UI for Blazor Data Sorting feature in Blazor Grid is enabled on a per-column level, meaning that the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) can have a mix of sortable and non-sortable columns. Performing Blazor sort actions enables you to change the display order of the records based on specified criteria.

## Blazor Grid Sorting Overview Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="SortingOptions.Mode"
            Name="SortingOptionsEditor"
            @ref="sortingOptionsEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Clear Sorting")"
            ButtonClicked="WebGridClearSort"
            Name="propertyEditorPropertyDescription1"
            @ref="propertyEditorPropertyDescription1">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Clear Grouped Columns")"
            ButtonClicked="WebGridClearGrouping"
            Name="propertyEditorPropertyDescription2"
            @ref="propertyEditorPropertyDescription2">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="ProductSales"
        Name="grid"
        @ref="grid"
        SortingExpressions="SortingExpression1">
            <IgbColumn
            Field="OrderID"
            Header="Order ID"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category Name"
            DataType="GridColumnDataType.String"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
            DataType="GridColumnDataType.String"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCountry"
            Header="Ship Country"
            DataType="GridColumnDataType.String"
            Groupable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="SaleAmount"
            Header="Sale Amount"
            DataType="GridColumnDataType.Currency"
            Groupable="true"
            Sortable="true"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ShippedDate"
            Header="Shipped Date"
            DataType="GridColumnDataType.Date"
            Sortable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var sortingOptionsEditor = this.sortingOptionsEditor;
        var propertyEditorPropertyDescription1 = this.propertyEditorPropertyDescription1;
        var propertyEditorPropertyDescription2 = this.propertyEditorPropertyDescription2;
        var grid = this.grid;
        var column1 = this.column1;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sortingOptionsEditor;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription1;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription2;
    private IgbGrid grid;
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[1];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.FieldName = "Category";
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.CurrencyCode = "USD";
                columnPipeArgs1.DigitsInfo = "1.2-2";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

    public void WebGridClearSort(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        this.grid.ClearSort("");
    }

    public void WebGridClearGrouping(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        this.grid.ClearGrouping("");
    }

    private ProductSales _productSales = null;
    public ProductSales ProductSales
    {
        get
        {
            if (_productSales == null)
            {
                _productSales = new ProductSales();
            }
            return _productSales;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class ProductSalesItem
{
    public double OrderID { get; set; }
    public double SaleAmount { get; set; }
    public string Category { get; set; }
    public string Company { get; set; }
    public string ShipCountry { get; set; }
    public string ShippedDate { get; set; }
}

public class ProductSales
    : List<ProductSalesItem>
{
    public ProductSales()
    {
        this.Add(new ProductSalesItem() { OrderID = 10524, SaleAmount = 3192.65, Category = @"Beverages", Company = @"Berglunds snabbköp", ShipCountry = @"France", ShippedDate = @"1997-05-07T00:00:00Z" });
        this.Add(new ProductSalesItem() { OrderID = 10672, SaleAmount = 3815.25, Category = @"Beverages", Company = @"Berglunds snabbköp", ShipCountry = @"Germany", ShippedDate = @"1997-09-26T00:00:00Z" });
        this.Add(new ProductSalesItem() { OrderID = 10801, SaleAmount = 3026.85, Category = @"Beverages", Company = @"Bólido Comidas preparadas", ShipCountry = @"Brazil", ShippedDate = @"1997-12-31T00:00:00Z" });
        // ... 63 more items
    }
}
```


This is done via the [`Sortable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Sortable) input. With the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) sorting, you can also set the [`SortingIgnoreCase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SortingIgnoreCase) property to perform case sensitive sorting:

```razor
<IgbColumn Field="Title" Sortable="true"></IgbColumn>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides a solution for this problem by indicating the index of each sorted column.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="FinancialDataAll"
        Name="grid"
        @ref="grid"
        SortingExpressions="SortingExpression1"
        Id="grid">
            <IgbColumn
            Field="Settlement"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Type"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Region"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Buy"
            DataType="GridColumnDataType.Currency"
            Sortable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[6];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.FieldName = "Settlement";
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                var sortingExpression3 = new IgbSortingExpression();
                sortingExpression3.Dir = SortingDirection.Desc;
                sortingExpression3.FieldName = "Type";
                sortingExpression3.IgnoreCase = true;
                sortingExpression1[1] = sortingExpression3;
                var sortingExpression4 = new IgbSortingExpression();
                sortingExpression4.Dir = SortingDirection.Asc;
                sortingExpression4.FieldName = "Region";
                sortingExpression4.IgnoreCase = true;
                sortingExpression1[2] = sortingExpression4;
                var sortingExpression5 = new IgbSortingExpression();
                sortingExpression5.Dir = SortingDirection.Asc;
                sortingExpression5.FieldName = "Country";
                sortingExpression5.IgnoreCase = true;
                sortingExpression1[3] = sortingExpression5;
                var sortingExpression6 = new IgbSortingExpression();
                sortingExpression6.Dir = SortingDirection.Asc;
                sortingExpression6.FieldName = "Price";
                sortingExpression6.IgnoreCase = true;
                sortingExpression1[4] = sortingExpression6;
                var sortingExpression7 = new IgbSortingExpression();
                sortingExpression7.Dir = SortingDirection.Asc;
                sortingExpression7.FieldName = "Buy";
                sortingExpression7.IgnoreCase = true;
                sortingExpression1[5] = sortingExpression7;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }

    private FinancialDataAll _financialDataAll = null;
    public FinancialDataAll FinancialDataAll
    {
        get
        {
            if (_financialDataAll == null)
            {
                _financialDataAll = new FinancialDataAll();
            }
            return _financialDataAll;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FinancialDataAllItem
{
    public string Category { get; set; }
    public string Type { get; set; }
    public double Spread { get; set; }
    public double Open { get; set; }
    public double Price { get; set; }
    public double Buy { get; set; }
    public double Sell { get; set; }
    public double Change { get; set; }
    public double ChangePercent { get; set; }
    public double Volume { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double YearlyHigh { get; set; }
    public double YearlyLow { get; set; }
    public double YearlyStart { get; set; }
    public double YearlyChange { get; set; }
    public string Settlement { get; set; }
    public string Contract { get; set; }
    public string Region { get; set; }
    public string Country { get; set; }
    public string Risk { get; set; }
    public string Sector { get; set; }
    public string Currency { get; set; }
    public string Security { get; set; }
    public string Issuer { get; set; }
    public string Maturity { get; set; }
    public string IndGroup { get; set; }
    public string IndSector { get; set; }
    public string IndCategory { get; set; }
    public string CUSIP { get; set; }
    public string Cpn { get; set; }
    public double KRD_3YR { get; set; }
    public double ZV_SPREAD { get; set; }
    public double KRD_5YR { get; set; }
    public double KRD_1YR { get; set; }
    public double ID { get; set; }
}

public class FinancialDataAll
    : List<FinancialDataAllItem>
{
    public FinancialDataAll()
    {
        this.Add(new FinancialDataAllItem() { Category = @"Fuel", Type = @"Ethanol", Spread = 0.01, Open = 1.512, Price = 2.76, Buy = 2.75, Sell = 2.76, Change = 0.01, ChangePercent = 0.2, Volume = 14, High = 2.75, Low = 1.12, YearlyHigh = 2.75, YearlyLow = 1.12, YearlyStart = 1.48, YearlyChange = 86.7, Settlement = @"Cash", Contract = @"CFD", Region = @"Middle East", Country = @"Saudi Arabia", Risk = @"Low", Sector = @"Government", Currency = @"EUR", Security = @"Good", Issuer = @"American Airlines", Maturity = @"2022-02-11", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 0 });
        this.Add(new FinancialDataAllItem() { Category = @"Fuel", Type = @"Natural Gas", Spread = 0.02, Open = 2.094, Price = 2.07, Buy = 2.09, Sell = 2.09, Change = -0.03, ChangePercent = -1.8, Volume = 2783, High = 2.11, Low = 2.09, YearlyHigh = 3.2, YearlyLow = 1.84, YearlyStart = 2.52, YearlyChange = -16.51, Settlement = @"Credit", Contract = @"Options", Region = @"Middle East", Country = @"Saudi Arabia", Risk = @"High", Sector = @"Public", Currency = @"PLN", Security = @"High", Issuer = @"Delta Airlines", Maturity = @"2022-02-22", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 1 });
        this.Add(new FinancialDataAllItem() { Category = @"Agriculture", Type = @"Cotton", Spread = 0.01, Open = 61.77, Price = 62.9, Buy = 61.77, Sell = 61.77, Change = 1.14, ChangePercent = 1.84, Volume = 3612, High = 62.06, Low = 61.32, YearlyHigh = 67.59, YearlyLow = 54.33, YearlyStart = 60.96, YearlyChange = 1.31, Settlement = @"Cash", Contract = @"Options", Region = @"North America", Country = @"United States", Risk = @"Low", Sector = @"Private", Currency = @"EUR", Security = @"Good", Issuer = @"Southwest", Maturity = @"2022-05-23", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 2 });
        // ... 997 more items
    }
}
```


## Sorting through the API

You can sort any column or a combination of columns through the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) API using the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) [`Sort`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Sort) method:

<!-- ComponentStart: Grid -->

```razor
@code {
    this.grid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression
            },
            new IgbSortingExpression
            {
                FieldName = "Country",
                Dir = SortingDirection.Asc
            }
        });
}
```

<!-- ComponentEnd: Grid -->

> \[!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`ClearSort`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClearSort) method:

```razor
@code {
    @*Removes the sorting state from the Title column*@
    this.grid.ClearSortAsync("Title");

    @*Removes the sorting state from every column in the Grid*@
    this.grid.ClearSortAsync("");
}
```

<!-- ComponentEnd: Grid -->

> \[!Note]
> The [`SortStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SortStrategy) of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) is of different type compared to the [`SortStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortStrategy) of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html), since they work in different scopes and expose different parameters.

> \[!Note]
> The sorting operation **DOES NOT** change the underlying data source of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) by passing an array of sorting expressions to the [`SortingExpressions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortingExpressions) property of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

<!-- ComponentStart: Grid -->

```razor
@code {
    protected override void OnAfterRender(bool first)
    {
        if (first)
        {
            this.grid.SortingExpressions = new IgbSortingExpression[]{
                new IgbSortingExpression()
                {
                    FieldName = "Title",
                    Dir = SortingDirection.Asc
                }};
        }
    }
}
```

<!-- ComponentEnd: Grid -->

> \[!Note]
> If values of type `string` are used by a column of [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) `Date`, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) won't parse them to `Date` objects and using [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- [`SortHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortHeaderIconTemplate) – re-templates the sorting icon when no sorting is applied.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGrid SortHeaderIconTemplate="SortDefaultTemplate"></IgbGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDefaultTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="unfold_more" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

- [`SortAscendingHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortAscendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in ascending order.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGrid SortAscendingHeaderIconTemplate="SortAscendingTemplate"></IgbGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortAscendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_less" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

- [`SortDescendingHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortDescendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in descending order.

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGrid SortDescendingHeaderIconTemplate="SortDescendingTemplate"></IgbGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDescendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_more" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid class="grid">
</IgbGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="ProductSales"
        Name="grid"
        @ref="grid"
        Id="grid"
        SortingExpressions="SortingExpression1">
            <IgbColumn
            Field="OrderID"
            Header="Order ID"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            Header="Category Name"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCountry"
            Header="Ship Country"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="SaleAmount"
            Header="Sale Amount"
            DataType="GridColumnDataType.Currency"
            Sortable="true"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ShippedDate"
            Header="Shipped Date"
            DataType="GridColumnDataType.Date"
            Sortable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;

    }

    private IgbGrid grid;
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[1];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.FieldName = "Category";
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.CurrencyCode = "USD";
                columnPipeArgs1.DigitsInfo = "1.2-2";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

    private ProductSales _productSales = null;
    public ProductSales ProductSales
    {
        get
        {
            if (_productSales == null)
            {
                _productSales = new ProductSales();
            }
            return _productSales;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class ProductSalesItem
{
    public double OrderID { get; set; }
    public double SaleAmount { get; set; }
    public string Category { get; set; }
    public string Company { get; set; }
    public string ShipCountry { get; set; }
    public string ShippedDate { get; set; }
}

public class ProductSales
    : List<ProductSalesItem>
{
    public ProductSales()
    {
        this.Add(new ProductSalesItem() { OrderID = 10524, SaleAmount = 3192.65, Category = @"Beverages", Company = @"Berglunds snabbköp", ShipCountry = @"France", ShippedDate = @"1997-05-07T00:00:00Z" });
        this.Add(new ProductSalesItem() { OrderID = 10672, SaleAmount = 3815.25, Category = @"Beverages", Company = @"Berglunds snabbköp", ShipCountry = @"Germany", ShippedDate = @"1997-09-26T00:00:00Z" });
        this.Add(new ProductSalesItem() { OrderID = 10801, SaleAmount = 3026.85, Category = @"Beverages", Company = @"Bólido Comidas preparadas", ShipCountry = @"Brazil", ShippedDate = @"1997-12-31T00:00:00Z" });
        // ... 63 more items
    }
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbSortingExpression`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSortingExpression.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
