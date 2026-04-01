---
title: Blazor Grid Multi Row Layout - Ignite UI for Blazor
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Blazor Data Grid. Check out examples and demos!
_keywords: Multi-Row Layout, Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_tocName: Multi-Row Layout
_premium: true
---

# Blazor Grid Multi-row Layout

The Multi-row Layout in the Ignite UI for Blazor extends the rendering capabilities of the Blazor Grid. The feature allows splitting a single data record into multiple visible rows.

## Blazor Multi-row Layout Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        Name="grid"
        @ref="grid"
        Data="CustomersData"
        RowEditable="true"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter"
        PrimaryKey="Company"
        GroupingExpressions="GroupingExpression1">
            <IgbGridToolbar
            >
                <IgbGridToolbarTitle
                >
                </IgbGridToolbarTitle>

                <IgbGridToolbarActions
                >
                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumnLayout
            Header="ID">
                <IgbColumn
                Field="ID"
                RowStart="1"
                ColStart="1"
                RowEnd="3"
                Filterable="false"
                Width="150px">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Pinned="true"
            Header="Contact Details">
                <IgbColumn
                Field="Company"
                Header="Company"
                RowStart="1"
                ColStart="1"
                ColEnd="3"
                Sortable="true"
                Width="350px">
                </IgbColumn>

                <IgbColumn
                Field="ContactName"
                Header="Name"
                RowStart="2"
                ColStart="1"
                ColEnd="2"
                Groupable="true">
                </IgbColumn>

                <IgbColumn
                Field="ContactTitle"
                Header="Title"
                RowStart="2"
                ColStart="2"
                ColEnd="3"
                Groupable="true">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Pinned="false"
            Header="Address Details">
                <IgbColumn
                Field="Country"
                RowStart="1"
                ColStart="1"
                ColEnd="3"
                Groupable="true"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="Region"
                RowStart="1"
                ColStart="3"
                ColEnd="5"
                Groupable="true"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="PostalCode"
                RowStart="1"
                ColStart="5"
                ColEnd="7"
                Groupable="true"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="City"
                RowStart="2"
                ColStart="1"
                ColEnd="4"
                Groupable="true"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="Address"
                RowStart="2"
                ColStart="4"
                ColEnd="7"
                Filterable="false">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Header="Phone Details">
                <IgbColumn
                Field="Phone"
                RowStart="1"
                ColStart="1"
                ColEnd="2"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="Fax"
                RowStart="2"
                ColStart="1"
                ColEnd="2"
                Filterable="false"
                Width="220px">
                </IgbColumn>

            </IgbColumnLayout>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;
    private IgbGroupingExpression[] _groupingExpression1 = null;
    public IgbGroupingExpression[] GroupingExpression1
    {
        get
        {
            if (this._groupingExpression1 == null)
            {
                var groupingExpression1 = new IgbGroupingExpression[1];
                var groupingExpression2 = new IgbGroupingExpression();
                groupingExpression2.FieldName = "Country";
                groupingExpression2.IgnoreCase = false;
                groupingExpression2.Dir = SortingDirection.Asc;
                groupingExpression1[0] = groupingExpression2;
                this._groupingExpression1 = groupingExpression1;
            }
            return this._groupingExpression1;
        }
    }

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


The declaration of Multi-row Layout is achieved through [`IgbColumnLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnLayout.html) component. Each [`IgbColumnLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnLayout.html) component should be considered as a block, containing one or multiple [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) components. Some of the grid features work on block level (those are listed in the "Feature Integration" section below). For example the virtualization will use the block to determine the virtual chunks, so for better performance split the columns into more [`IgbColumnLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnLayout.html) blocks if the layout allows it. There should be no columns outside of those blocks and no usage of [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) when configuring a multi-row layout. Multi-row Layout is implemented on top of the [grid layout](https://www.w3.org/TR/css-grid-1/) specification and should conform to its requirements.

The [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) component exposes four [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) properties to determine the location and span of each cell:

- [`ColStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_ColStart) - column index from which the field is starting. This property is **mandatory**.
- [`RowStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_RowStart) - row index from which the field is starting. This property is **mandatory**.
- [`ColEnd`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_ColEnd) - column index where the current field should end. The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field. This property is **optional**. If not set defaults to **colStart + 1**.
- [`RowEnd`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_RowEnd) - row index where the current field should end. The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field. This property is **optional**. If not set defaults to **rowStart + 1**.

```razor
<IgbColumnLayout>
    <IgbColumn RowStart="1" RowEnd="3" ColStart="1" Field="ID"></IgbColumn>
</IgbColumnLayout>
<IgbColumnLayout>
    <IgbColumn RowStart="1" ColStart="1" ColEnd="3" Field="CompanyName"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="1" ColEnd="2" Field="ContactName"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="2" ColEnd="3" Field="ContactTitle"></IgbColumn>
</IgbColumnLayout>
<IgbColumnLayout>
    <IgbColumn RowStart="1" ColStart="1" ColEnd="3" Field="Country"></IgbColumn>
    <IgbColumn RowStart="1" ColStart="3" ColEnd="5" Field="Region"></IgbColumn>
    <IgbColumn RowStart="1" ColStart="5" ColEnd="7" Field="PostalCode"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="1" ColEnd="4" Field="City"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="4" ColEnd="7" Field="Address"></IgbColumn>
</IgbColumnLayout>
<IgbColumnLayout>
    <IgbColumn RowStart="1" ColStart="1" Field="Phone"></IgbColumn>
    <IgbColumn RowStart="2" ColStart="1" Field="Fax"></IgbColumn>
</IgbColumnLayout>
```

The result of the above configuration can be seen on the screenshot below:

<img src="../../../images/multi-row-layout-1.png" alt="multi-row-layout" style="width: 100%"/>

> \[!Note]
> [`RowStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_RowStart) and [`ColStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_ColStart) properties must be set for each [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) into a [`IgbColumnLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnLayout.html). The [`IgbColumnLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnLayout.html) component is not verifying if the layout is correct and not throwing errors or warnings about that. The developers must make sure that the declaration of their layout is correct and complete, otherwise they may end up in broken layout with misalignments, overlaps and browser inconsistencies.

## Feature Integration

Due to the completely different rendering approach of Multi-row Layout, some of the column features will work only on [`IgbColumnLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnLayout.html) component. Such features are Column Pinning and Column Hiding. Otherwise - Sorting and Grouping will work in the same way - on the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) component.

- Filtering - only Excel Style Filtering is supported. Setting `FilterMode` explicitly to `FilterMode.quickFilter` has no effect.
- Paging - works on records, not visual rows.
- Group By - `HideGroupedColumns` option has no effect in Multi-row Layout. The grouped columns are always visible.

The following features are currently **not** supported:

- Column Moving
- Multi-column Headers
- Export to Excel
- Summaries

## Keyboard Navigation

[`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) with Multi-Row Layouts provides build-in keyboard navigation.

### Horizontal Navigation

- <kbd>←</kbd> or <kbd>→</kbd> - move to the adjacent cell on the left/right within the current row unaffected by the column layouts that are defined. If the current cell spans on more than one row, <kbd>←</kbd> and <kbd>→</kbd> should navigate to the first cell on the left and right with the same `rowStart`, unless you have navigated to some other adjacent cell before. The navigation stores the starting navigation cell and navigates to the cells with the same `rowStart` if possible.
- <kbd>CTRL</kbd> + <kbd>←</kbd> (<kbd>HOME</kbd>) or <kbd>CTRL</kbd> + <kbd>→</kbd> (<kbd>END</kbd>) - navigate to the start or end of the row and select the cell with accordance to the starting navigation cell.

### Vertical Navigation

- <kbd>↑</kbd> or <kbd>↓</kbd> - move to the cell above/below in relation to a starting position and is unaffected by the rows. If the current cell spans on more than one column the next active cell will be selected with accordance to the starting navigation cell.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> or <kbd>CTRL</kbd> + <kbd>Down</kbd> - Navigate and apply focus on the same column on the first or on the last row.
- <kbd>CTRL</kbd> + <kbd>HOME</kbd> or <kbd>CTRL</kbd> + <kbd>END</kbd> - Navigate to the first row and focus first cell or navigate to the last row and focus the last cell.

> \[!Note]
> Navigation through cells which span on multiple rows or columns is done with accordance to the starting navigation cell and will allow returning to the starting cell using the key for the opposite direction. The same approach is used when navigating through group rows.

> \[!Note]
> Selection and multi cell selection are working on layout, meaning that when a cell is active, its layout will be selected. Also all features of multiple selection like drag selection are applicable and will work per layout not per cell.

### Custom Keyboard Navigation

The grid allows customizing the default navigation behavior when a certain key is pressed. Actions like **going to the next cell** or **cell below** could be handled easily with the powerful keyboard navigation API:

- `GridKeydown` is exposed. The event will emit `IGridKeydownEventArgs`. This event is available only through the keyboard key combinations mentioned above, for all other key actions you can use `KeyDown` event.
- `NavigateTo` - this method allows you to navigate to a position based on provided `RowIndex` and `VisibleColumnIndex`

The demo below adds additional navigation down/up via the <kbd>ENTER</kbd> and <kbd>SHIFT</kbd> + <kbd>ENTER</kbd> keys, similar to the behavior observed in Excel.

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
        Id="grid"
        Data="CompanyData"
        GridKeydownScript="WebGridMRLCustomNavigationEvent">
            <IgbColumnLayout
            Name="CompanyInfo"
            @ref="companyInfo"
            Header="Company">
                <IgbColumn
                Field="Company"
                Header="Company"
                RowStart="1"
                ColStart="1"
                ColEnd="3">
                </IgbColumn>

                <IgbColumn
                Field="Country"
                Header="Country"
                RowStart="2"
                ColStart="1">
                </IgbColumn>

                <IgbColumn
                Field="City"
                Header="City"
                RowStart="2"
                ColStart="2">
                </IgbColumn>

                <IgbColumn
                Field="Address"
                Header="Address"
                RowStart="3"
                ColStart="1"
                ColEnd="3">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Name="Sales"
            @ref="sales"
            Header="Sales">
                <IgbColumn
                Field="LifetimeSales"
                Header="Lifetime Sales"
                RowStart="1"
                RowEnd="3"
                ColStart="1"
                ColEnd="3">
                </IgbColumn>

                <IgbColumn
                Field="QuarterlySales"
                Header="Quarterly"
                RowStart="3"
                ColStart="1">
                </IgbColumn>

                <IgbColumn
                Field="YearlySales"
                Header="Yearly"
                RowStart="3"
                ColStart="2">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Name="MarketPotentialInfo"
            @ref="marketPotentialInfo"
            Header="Market Potential">
                <IgbColumn
                Field="MarketPotential"
                Header="Market Potential"
                RowStart="1"
                RowEnd="4"
                ColStart="1">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Name="Assets"
            @ref="assets"
            Header="Assets">
                <IgbColumn
                Field="AssetsCash"
                Header="Assets Cash"
                RowStart="1"
                ColStart="1">
                </IgbColumn>

                <IgbColumn
                Field="AccountsReceivable"
                Header="Accounts Receivable"
                RowStart="1"
                ColStart="2"
                ColEnd="4">
                </IgbColumn>

                <IgbColumn
                Field="AssetsBooks"
                Header="Assets Books"
                RowStart="2"
                RowEnd="4"
                ColStart="1"
                ColEnd="4">
                </IgbColumn>

            </IgbColumnLayout>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var companyInfo = this.companyInfo;
        var sales = this.sales;
        var marketPotentialInfo = this.marketPotentialInfo;
        var assets = this.assets;

    }

    private IgbGrid grid;
    private IgbColumnLayout companyInfo;
    private IgbColumnLayout sales;
    private IgbColumnLayout marketPotentialInfo;
    private IgbColumnLayout assets;

    private CompanyData _companyData = null;
    public CompanyData CompanyData
    {
        get
        {
            if (_companyData == null)
            {
                _companyData = new CompanyData();
            }
            return _companyData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CompanyDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public double LifetimeSales { get; set; }
    public double QuarterlySales { get; set; }
    public double YearlySales { get; set; }
    public double MarketPotential { get; set; }
    public double AssetsCash { get; set; }
    public double AccountsReceivable { get; set; }
    public double AssetsBooks { get; set; }
}

public class CompanyData
    : List<CompanyDataItem>
{
    public CompanyData()
    {
        this.Add(new CompanyDataItem() { ID = @"abc1000", Company = @"Sportan", Address = @"Rapelye Street", City = @"Oceola", Country = @"VU", LifetimeSales = 40882580.18, QuarterlySales = 430845.78, YearlySales = 1197420.17, MarketPotential = 4210805124.61, AssetsCash = 264714.71, AccountsReceivable = 63084.44, AssetsBooks = 7534.74 });
        this.Add(new CompanyDataItem() { ID = @"abc1001", Company = @"Bugsall", Address = @"Hoyt Street", City = @"Rosine", Country = @"FM", LifetimeSales = 29231147.89, QuarterlySales = 227299.97, YearlySales = 1486467.06, MarketPotential = 2505447478.96, AssetsCash = 370690.39, AccountsReceivable = 69242.24, AssetsBooks = 12507.92 });
        this.Add(new CompanyDataItem() { ID = @"abc1002", Company = @"Hydrocom", Address = @"Sunnyside Court", City = @"Cornfields", Country = @"KE", LifetimeSales = 35628528.18, QuarterlySales = 226007.91, YearlySales = 1092555.78, MarketPotential = 4930069033.99, AssetsCash = 403038.64, AccountsReceivable = 56183.05, AssetsBooks = 8113.52 });
        // ... 26 more items
    }
}
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
    --ig-grid-cell-active-border-color: #ffcd0f;
    --ig-grid-cell-selected-background: #6f6f6f;
    --ig-grid-row-hover-background: #fde069;
    --ig-grid-row-selected-background: #8d8d8d;
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #fff;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersData"
        PrimaryKey="Company">
            <IgbColumnLayout
            Hidden="true"
            Header="ID">
                <IgbColumn
                Field="ID"
                RowStart="1"
                ColStart="1"
                RowEnd="3"
                Filterable="false"
                Width="150px">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Pinned="true"
            Header="Contact Details">
                <IgbColumn
                Field="Company"
                Header="Company"
                RowStart="1"
                ColStart="1"
                ColEnd="3"
                Sortable="true"
                Width="350px">
                </IgbColumn>

                <IgbColumn
                Field="ContactName"
                Header="Name"
                RowStart="2"
                ColStart="1"
                ColEnd="2">
                </IgbColumn>

                <IgbColumn
                Field="ContactTitle"
                Header="Title"
                RowStart="2"
                ColStart="2"
                ColEnd="3">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Pinned="false"
            Header="Address Details">
                <IgbColumn
                Field="Country"
                RowStart="1"
                ColStart="1"
                ColEnd="3"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="Region"
                RowStart="1"
                ColStart="3"
                ColEnd="5"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="PostalCode"
                RowStart="1"
                ColStart="5"
                ColEnd="7"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="City"
                RowStart="2"
                ColStart="1"
                ColEnd="4"
                Filterable="false"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="Address"
                RowStart="2"
                ColStart="4"
                ColEnd="7">
                </IgbColumn>

            </IgbColumnLayout>

            <IgbColumnLayout
            Header="Phone Details">
                <IgbColumn
                Field="Phone"
                RowStart="1"
                ColStart="1"
                ColEnd="2"
                Width="220px">
                </IgbColumn>

                <IgbColumn
                Field="Fax"
                RowStart="2"
                ColStart="1"
                ColEnd="2"
                Width="220px">
                </IgbColumn>

            </IgbColumnLayout>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumnLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnLayout.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
