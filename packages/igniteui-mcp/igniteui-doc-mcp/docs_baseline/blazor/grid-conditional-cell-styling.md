---
title: Blazor Grid Conditional Cell Styling - Ignite UI for Blazor
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Blazor Grid to make cells stand out.
_keywords: conditional styling, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/conditional-cell-styling
_tocName: Conditional Styling
_premium: true
---

# Blazor Grid Conditional Styling

The Ignite UI for Blazor Conditional Styling feature in Blazor Grid allows custom styling on a row or cell level. The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) Conditional Styling functionality is used to visually emphasize or highlight data that meets certain criteria, making it easier for users to identify important information or trends within the grid.

## Grid Conditional Row Styling

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component in Ignite UI for Blazor provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) input on the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component;
- By setting [`RowStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowStyles) input on the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) rows by setting the [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) input and define custom rules.

```razor
<IgbGrid AutoGenerate="true" Id="grid" Data="CustomersData" Name="grid" RowClassesScript="RowClassesHandler" @ref="grid">
</IgbGrid>
```

The [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```razor
igRegisterScript("RowClassesHandler", () => {
    return {
        activeRow: (row) => row.index % 2 === 0
    };
}, true);
```

```css
.activeRow {
    border-top: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
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
        Data="NwindData"
        RowClassesScript="WebGridRowClassesHandler"
        Name="grid1"
        @ref="grid1">
            <IgbColumn
            Field="ProductID"
            Header="Product ID">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Product Name">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;

    }

    private IgbGrid grid1;

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```

### Using Row Styles

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) control exposes the [`RowStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowStyles) property which allows conditional styling of the data rows. Similar to [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both [`RowStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowStyles) and [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) is:

```razor
(row) => boolean
```

Let's define our styles:

```razor
igRegisterScript("WebGridRowStylesHandler", () => {
    return {
        'background': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
        'border': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
    };
}, true);
```

```razor
<IgbGrid AutoGenerate="true" Id="grid" Data="CustomersData" Name="grid" RowStylesScript="WebGridRowStylesHandler" @ref="grid">
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="FinancialDataAll"
        Name="grid"
        @ref="grid"
        Id="grid"
        AllowFiltering="true"
        RowStylesScript="WebGridRowStylesHandler">
            <IgbColumn
            Field="Category"
            Width="120px">
            </IgbColumn>

            <IgbColumn
            Field="Type"
            Filterable="false"
            Width="120px">
            </IgbColumn>

            <IgbColumn
            Field="Open"
            Header="Open Price"
            Width="120px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            Width="120px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Change"
            Width="120px"
            DataType="GridColumnDataType.Number"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ChangePercent"
            Header="Change(%)"
            Width="120px"
            DataType="GridColumnDataType.Percent"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="YearlyChange"
            Header="Change On Year(%)"
            Width="150px"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Buy"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Sell"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Spread"
            Width="130px"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Volume"
            Width="130px"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="High"
            Header="High(D)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Low"
            Header="Low(D)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="YearlyHigh"
            Header="High(Y)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="YearlyLow"
            Header="Low(Y)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="YearlyStart"
            Header="Start(Y)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
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

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;

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

## Grid Conditional Cell Styling

## Overview

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component in Ignite UI for Blazor provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) input [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes

You can conditionally style the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) cells by setting the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) input and define custom rules.

```razor
<IgbColumn Field="BeatsPerMinute" CellClassesScript="CellClassesHandler">
```

<!-- ComponentEnd: Grid -->

The [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```razor
igRegisterScript("CellClassesHandler", () => {
    return {
        downFont: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] <= 95,
        upFont: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] > 95
    };
}, true);
```

```css
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
```

<!-- ComponentEnd: Grid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="AthletesData">
            <IgbColumn
            Field="Id"
            Header="Rank"
            Sortable="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Athlete"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats per Minute"
            DataType="GridColumnDataType.Number"
            Editable="true"
            Sortable="true"
            CellClassesScript="WebGridBeatsPerMinuteCellClassesHandler"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed"
            DataType="GridColumnDataType.Number"
            Editable="true"
            Sortable="true"
            CellClassesScript="WebGridTopSpeedCellClassesHandler"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Track Progress"
            Editable="true"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="CountryFlag"
            Header="Country"
            BodyTemplateScript="WebGridImageCellTemplate"
            Name="column3"
            @ref="column3">
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

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
    }
}
```

- By using the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) input [`CellStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```razor
(rowData, columnKey, cellValue, rowIndex) => boolean
```

### Using Cell Styles

Columns expose the [`CellStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellStyles) property which allows conditional styling of the column cells. Similar to [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

Let's define our styles:

<!-- ComponentStart: Grid -->

```razor
igRegisterScript("WebGridCellStylesHandler", () => {
    return {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "Position") {
                switch (cellValue) {
                    case "up": return "#28a745";
                    case "down": return "#dc3545";
                    case "current": return "#17a2b8"
                }
            }
        }
    };
}, true);
```

```razor
<IgbColumn CellStylesScript="WebGridCellStylesHandler">
</IgbColumn>
```

<!-- ComponentEnd: Grid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
        PrimaryKey="Id"
        Name="grid1"
        @ref="grid1">
            <IgbColumn
            Field="Id"
            CellStylesScript="WebGridCellStylesHandler"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Position"
            CellStylesScript="WebGridCellStylesHandler"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            CellStylesScript="WebGridCellStylesHandler"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            CellStylesScript="WebGridCellStylesHandler"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="CountryName"
            CellStylesScript="WebGridCellStylesHandler"
            Name="column5"
            @ref="column5">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;
        var column5 = this.column5;

    }

    private IgbGrid grid1;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
    }
}
```

## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

<!--ComponentEnd: Grid, HierarchicalGrid, TreeGrid-->

## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Column Hiding](column-hiding.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- * [Toolbar](toolbar.md) -->

- [Multi-column Headers](multi-column-headers.md)
- [Size](size.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
