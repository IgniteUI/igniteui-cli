---
title: Blazor Grid Column Reordering & Moving - Ignite UI for Blazor
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the Blazor Column Moving API. Try Ignite UI for Blazor!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-moving
_tocName: Column Moving
_premium: true
---

# Grid Column Reordering & Moving

The Blazor Grid Column Moving feature in Ignite UI for Blazor allows quick and easy column reordering. This can be done through the Column Moving API or by dragging and dropping the headers to another position via mouse or touch gestures. In the Blazor Grid, you can enable Column Moving for pinned and unpinned columns and for [Multi-Column Headers](multi-column-headers.md) as well.

> \[!Note]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> \[!Note]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**!

> \[!Note]
> If the pinned area exceeds its maximum allowed width (80% of the total [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```razor
    public RenderFragment<IgbColumnTemplateContext> headerTemplate => (context) =>
    {
        return @<IgbIcon Collection="fas" IconName="fa-thumbtack" draggable="false" @onclick="() => onClick()"></IgbIcon>;
    };
```

## Blazor Grid Column Moving Overview Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="FinancialDataAll"
        PrimaryKey="ProductID"
        Moving="true"
        Name="grid"
        @ref="grid">
            <IgbColumn
            Header="Category"
            Field="Category"
            Pinned="true"
            Width="200px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Header="Type"
            Field="Type"
            Pinned="true"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Header="Price"
            Field="Price"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs1"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Header="Buy"
            Field="Buy"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs2"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Header="Sell"
            Field="Sell"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs3"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Header="Spread"
            Field="Spread"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="Change"
            Header="Change"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="ChangePercent"
            Header="Change Percent"
            DataType="GridColumnDataType.Number"
            Width="150px"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="YearlyChange"
            Header="Yearly Change"
            DataType="GridColumnDataType.Number"
            Width="150px"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;
        var column5 = this.column5;
        var column6 = this.column6;
        var column7 = this.column7;
        var column8 = this.column8;
        var column9 = this.column9;

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
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
    private IgbColumn column4;
    private IgbColumnPipeArgs _columnPipeArgs2 = null;
    public IgbColumnPipeArgs ColumnPipeArgs2
    {
        get
        {
            if (this._columnPipeArgs2 == null)
            {
                var columnPipeArgs2 = new IgbColumnPipeArgs();
                columnPipeArgs2.CurrencyCode = "USD";
                columnPipeArgs2.DigitsInfo = "1.2-2";
                this._columnPipeArgs2 = columnPipeArgs2;
            }
            return this._columnPipeArgs2;
        }
    }
    private IgbColumn column5;
    private IgbColumnPipeArgs _columnPipeArgs3 = null;
    public IgbColumnPipeArgs ColumnPipeArgs3
    {
        get
        {
            if (this._columnPipeArgs3 == null)
            {
                var columnPipeArgs3 = new IgbColumnPipeArgs();
                columnPipeArgs3.CurrencyCode = "USD";
                columnPipeArgs3.DigitsInfo = "1.2-2";
                this._columnPipeArgs3 = columnPipeArgs3;
            }
            return this._columnPipeArgs3;
        }
    }
    private IgbColumn column6;
    private IgbColumn column7;
    private IgbColumn column8;
    private IgbColumn column9;

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


## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) could have either movable or immovable columns. This is done via the [`Moving`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Moving) input of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

<!-- ComponentStart: Grid -->

```razor
<IgbGrid Moving=true></IgbGrid>
```

<!-- ComponentEnd: Grid -->

## API

In addition to the drag and drop functionality, the Column Moving feature also provides API methods to allow moving a column/reordering columns programmatically:

[`MoveColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_MoveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `Position` (representing a `DropPosition` value), which determines whether to place the column before or after the target column.

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        IgbColumn Col2 = await this.grid.GetColumnByVisibleIndexAsync(1);
        this.Grid.MoveColumn(Col1,Col2, DropPosition.AfterDropTarget);
    }
```

[`Move`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        this.Col1.Move(3);
    }
```

Note that when using the column moving feature, the `ColumnMovingEnd` event will be emitted if the operation was successful. Also note that in comparison to the drag and drop functionality, using the column moving feature does not require setting the [`Moving`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Moving) property to true.

## Events

There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are `ColumnMovingStart`, `ColumnMoving` and `ColumnMovingEnd`.

You can subscribe to the `ColumnMovingEnd` event of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the **Category** column after the **Change On Year(%)** column in the following code snippet.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

```razor
    <IgbGrid ShowGroupArea="true" @ref='Grid' Width="100%" Height="100%"
             AllowFiltering=true
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate=true
             Data=northwindEmployees
             Moving="true"
             ColumnMovingEndScript='onColumnMovingEnd'>
    </IgbGrid>
```

```razor
igRegisterScript("onColumnMovingEnd", (event) => {
    if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}, false);
```

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).

In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="FinancialDataAll"
        PrimaryKey="ProductID"
        Moving="true"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbColumn
            Field="Category"
            Pinned="true"
            Width="200px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Type"
            Pinned="true"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs1"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Buy"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs2"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="Sell"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs3"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="Spread"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="Change"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="ChangePercent"
            Header="Change Percent"
            DataType="GridColumnDataType.Number"
            MinWidth="150px"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="YearlyChange"
            Header="Yearly Change"
            DataType="GridColumnDataType.Number"
            MinWidth="150px"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;
        var column5 = this.column5;
        var column6 = this.column6;
        var column7 = this.column7;
        var column8 = this.column8;
        var column9 = this.column9;

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
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
    private IgbColumn column4;
    private IgbColumnPipeArgs _columnPipeArgs2 = null;
    public IgbColumnPipeArgs ColumnPipeArgs2
    {
        get
        {
            if (this._columnPipeArgs2 == null)
            {
                var columnPipeArgs2 = new IgbColumnPipeArgs();
                columnPipeArgs2.CurrencyCode = "USD";
                columnPipeArgs2.DigitsInfo = "1.2-2";
                this._columnPipeArgs2 = columnPipeArgs2;
            }
            return this._columnPipeArgs2;
        }
    }
    private IgbColumn column5;
    private IgbColumnPipeArgs _columnPipeArgs3 = null;
    public IgbColumnPipeArgs ColumnPipeArgs3
    {
        get
        {
            if (this._columnPipeArgs3 == null)
            {
                var columnPipeArgs3 = new IgbColumnPipeArgs();
                columnPipeArgs3.CurrencyCode = "USD";
                columnPipeArgs3.DigitsInfo = "1.2-2";
                this._columnPipeArgs3 = columnPipeArgs3;
            }
            return this._columnPipeArgs3;
        }
    }
    private IgbColumn column6;
    private IgbColumn column7;
    private IgbColumn column8;
    private IgbColumn column9;

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


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
