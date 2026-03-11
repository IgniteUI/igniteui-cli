---
title: Blazor Data Grid Component | Real-Time Blazor Tables | Infragistics
_description: Infragistics' Blazor grid component helps you create a fast, real-time react data grid. Learn how Ignite UI for Blazor can help you better display your data!
_keywords: Blazor Table, Data Grid, overview, Ignite UI for Blazor, data binding, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Table / Grid
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md), and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Data Grid Overview

The Ignite UI for Blazor Data Table / Data Grid is a tabular Blazor grid component that allows you to quickly bind and display your data with little coding or configuration. Features of the Blazor data grid include filtering, sorting, templates, row selection, row grouping, row pinning and movable columns. The Blazor tables are optimized for live, streaming data, with the ability to handle unlimited data set size in number of rows or columns.

## Blazor Data Grid Example

This demo implements some of the features that are available in the Grid:
Filtering, Grouping, Pin/Unpin columns, Reposition columns, Sorting, and Summaries

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Rendering
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.RenderTree
@using Microsoft.AspNetCore.Components.Web

@using IgniteUI.Blazor.Controls


<div class="container vertical">

    <div class="container vertical">

        @if (Employees != null)
        {
            <IgbDataGridToolbar ToolbarTitle="Sales Team" ColumnChooser="true" ColumnPinning="true" TargetGrid="@DataGridRef"/>

            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      @ref="@DataGridRef"
                      RowHeight="50"
                      DataSource="Employees"
                      AutoGenerateColumns="false"
                      IsColumnOptionsEnabled="true"
                      IsGroupCollapsable="true"
                      ActivationMode="GridActivationMode.Cell"
                      SummaryScope="@SummaryScope.Root"
                      GroupSummaryDisplayMode="@GroupSummaryDisplayMode.RowBottom"
                      GroupHeaderDisplayMode="@GroupHeaderDisplayMode.Combined"
                      CornerRadiusTopLeft="0"
                      CornerRadiusTopRight="0"
                      ColumnMovingSeparatorWidth="2"
                      ColumnMovingMode="ColumnMovingMode.Deferred"
                      ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
                      ColumnShowingAnimationMode="ColumnShowingAnimationMode.SlideFromRightAndFadeIn"
                      ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToRightAndFadeOut"
                      SelectionMode="DataGridSelectionMode.SingleRow">

                    <IgbImageColumn IsEditable="false" Width="@("*>120")" Field="Photo" PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                                HorizontalAlignment="@CellContentHorizontalAlignment.Stretch"  />

                    <IgbTextColumn Width="@("*>130")" Field="Name" />

                    @*NOTE: CellUpdatingScript is implemented in wwwroot/*.js file *@
                    <IgbTemplateColumn Width="@("*>160")" Field="Sales" CellUpdatingScript="onUpdatingSalesColumn"
                                    HorizontalAlignment="@CellContentHorizontalAlignment.Center" />

                    <IgbNumericColumn Width="@("*>130")" Field="Salary" PositivePrefix="$"
                                ShowGroupingSeparator="true"
                                MaxFractionDigits="0"
                                MinFractionDigits="0" />

                    <IgbNumericColumn Width="100" Field="Age" HorizontalAlignment="@CellContentHorizontalAlignment.Center"/>
                    <IgbDateTimeColumn Width="@("*>140")" Field="Birthday" HeaderText="Date of Birth" />

                    <IgbImageColumn IsEditable="false" Width="@("*>110")" Field="CountryFlag" HeaderText="Country" PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                                HorizontalAlignment="@CellContentHorizontalAlignment.Stretch" />

                    @*NOTE: CellUpdatingScript is implemented in wwwroot/*.js file *@
                    <IgbTemplateColumn Width="@("*>170")" Field="Address" CellUpdatingScript="onUpdatingAddressColumn" />
                    <IgbTemplateColumn Width="@("*>130")" Field="Phone" CellUpdatingScript="onUpdatingPhoneColumn" />

                    <IgbTextColumn Width="@("*>120")" Field="Income" />
                    <IgbTextColumn Width="@("*>120")" Field="Email" IsEditable="false" />

                </IgbDataGrid>
            </div>
        }


    </div>
</div>

@code {

    private List<Employee> Employees;

    private IgbDataGrid _grid;
    private IgbDataGrid DataGridRef
    {
        get { return _grid; }
        set { _grid = value; this.OnDataGridRef(); StateHasChanged(); }
    }

    protected override void OnInitialized()
    {
        this.Employees = EmployeeData.Create(100, false);
    }

    private void OnDataGridRef()
    {
        var peopleGroup = new IgbColumnGroupDescription() { Field = "Country", DisplayName = "Country" };
        var incomeGroup = new IgbColumnGroupDescription() { Field = "Income", DisplayName = "Income" };
        this._grid.GroupDescriptions.Add(peopleGroup);
        this._grid.GroupDescriptions.Add(incomeGroup);

        var ageSummary = new IgbColumnSummaryDescription() { Field = "Age", Operand = DataSourceSummaryOperand.Average };
        var peopleSummary = new IgbColumnSummaryDescription() { Field = "Photo", Operand = DataSourceSummaryOperand.Count };
        var salarySummary = new IgbColumnSummaryDescription() { Field = "Salary", Operand = DataSourceSummaryOperand.Sum };
        var saleSummary = new IgbColumnSummaryDescription() { Field = "Sales", Operand = DataSourceSummaryOperand.Max };

        this._grid.SummaryDescriptions.Add(ageSummary);
        this._grid.SummaryDescriptions.Add(peopleSummary);
        this._grid.SummaryDescriptions.Add(salarySummary);
        this._grid.SummaryDescriptions.Add(saleSummary);

        // TODO fix onSummarziePeopleGender
        //var nameSummary = new IgbColumnSummaryDescription() { Field = "Name", Operand = DataSourceSummaryOperand.Custom,
        //    ProvideCalculatorScript = "onSummarziePeopleGender" };
        //this._grid.SummaryDescriptions.Add(nameSummary);
    }

}
```


<div class="divider--half"></div>

## Getting Started

### Dependencies

<!-- Blazor -->

Please refer to these topics on adding the IgniteUI.Blazor package.

- [Getting Started](../../general-getting-started.md)
- [Adding Nuget Package](../../general-nuget-feed.md)

Afterwards, you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```

<!-- end: Blazor -->

### Component Modules

The [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html) requires the following modules:

<!-- Blazor -->

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDataGridModule));
```

<!-- end: Blazor -->

<div class="divider--half"></div>

### Optional Modules

The optional [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html) features, seen above, requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbDataGridModule),
    typeof(IgbDataGridToolbarModule),
    typeof(IgbSparklineModule)
);
```

<div class="divider--half"></div>

### Sample Data Source

Now that the Blazor data grid module is imported, next is the basic configuration of the Blazor grid that binds to local data.

```razor
@code {

    public List<SaleInfo> DataSource { get; set;}
    Random Rand = new Random();

    protected override void OnInitialized()
    {
        GenerateData();
    }

    public void GenerateData()
    {
        string[] names = new string[] {
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "Nvidia Motherboard",
            "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" };

        string[] countries = new string[] {
            "USA", "UK", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain", };
        string[] status = new string[] { "Packing", "Shipped", "Delivered" };

        var sales = new List<SaleInfo>();

        for (var i = 0; i < 200; i++)
        {
            var price = GetRandomNumber(10000, 90000) / 100;
            var items = GetRandomNumber(4, 30);
            var value = Math.Round(price * items);
            var margin = GetRandomNumber(2, 5);
            var profit = Math.Round((price * margin / 100) * items);
            var country = GetRandomItem(countries);

            var item = new SaleInfo()
            {
                Country = country,
                CountryFlag = GetCountryFlag(country),
                Margin = margin,
                OrderDate = GetRandomDate(),
                OrderItems = items,
                OrderValue = value,
                ProductID = 1001 + i,
                ProductName = GetRandomItem(names),
                ProductPrice = price,
                Profit = Math.Round(profit),
                Status = GetRandomItem(status)
            };
            sales.Add(item);
        }

        this.DataSource = sales;
    }

    public double GetRandomNumber(double min, double max)
    {
        return Math.Round(min + (Rand.NextDouble() * (max - min)));
    }

    public string GetRandomItem(string[] array)
    {
        var index = (int)Math.Round(GetRandomNumber(0, array.Length - 1));
        return array[index];
    }

    public DateTime GetRandomDate() {
        var today = new DateTime();
        var year = today.Year;
        var month = this.GetRandomNumber(1, 9);
        var day = this.GetRandomNumber(10, 27);
        return new DateTime(year, (int)month, (int)day);
    }

    public string GetCountryFlag(string country)
    {
        var flag = "https://static.infragistics.com/xplatform/images/flags/" + country + ".png";
        return flag;
    }

    public class SaleInfo
    {
        public string? Status { get; set; }
        public string? ProductName { get; set; }
        public string? CountryFlag { get; set; }
        public string? Country { get; set; }
        public DateTime OrderDate { get; set; }
        public double Profit { get; set; }
        public double ProductPrice { get; set; }
        public double ProductID { get; set; }
        public double OrderValue { get; set; }
        public double OrderItems { get; set; }
        public double Margin { get; set; }
    }
}
```

### Auto-Generate Columns

The following code demonstrates how to bind the Blazor data grid to the above local data.

```razor
 <IgbDataGrid Height="100%"
    Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="true"
    DefaultColumnMinWidth="100"
    SummaryScope="SummaryScope.Root"
    IsColumnOptionsEnabled="true"
    IsGroupCollapsable="true"
    GroupSummaryDisplayMode="GroupSummaryDisplayMode.RowBottom"
    ColumnMovingMode="ColumnMovingMode.Deferred"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnMovingSeparatorWidth="2"
    ColumnShowingAnimationMode="ColumnShowingAnimationMode.SlideFromRightAndFadeIn"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToRightAndFadeOut"
    SelectionMode="GridSelectionMode.SingleRow"
    CornerRadiusTopLeft="0"
    CornerRadiusTopRight="0" />
```

### Manually Define Columns

```razor
<IgbDataGrid Height="100%"
    Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="false">
    <IgbNumericColumn Field="ProductID" HeaderText="Product ID" />
    <IgbTextColumn Field="ProductName" HeaderText="Product Name" />
    <IgbTextColumn Field="QuantityPerUnit" HeaderText="Quantity Per Unit" />
    <IgbNumericColumn Field="UnitsInStock" HeaderText="Units In Stock" />
    <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" />
</IgbDataGrid>
```

### Styling Columns

The following code demonstrates how to style specific columns using the provided column's properties.

```razor
<IgbTextColumn
    Background="SkyBlue"
    FontStyle="italic"
    FontWeight="bold"
    FontFamily="Times New Roman"
    FontSize="16"
/>
```

<!-- Blazor -->

### Tutorial Video

Learn more about creating a Blazor data grid in our short tutorial video:

<iframe width="100%" height="600" src="https://www.youtube.com/embed/aT1L3nXqN6o">
</iframe>
<!-- end: Blazor -->

## Additional Resources

- [Accessibility Compliance](accessibility.md)
- [Cell Activation](cell-activation.md)
- [Grid Editing](cell-editing.md)
- [Cell Selection](cell-selection.md)
- [Column Animation](column-animation.md)
- [Column Chooser](column-chooser.md)
- [Column Filtering](column-filtering.md)
- [Column Moving](column-moving.md)
- [Column Options](column-options.md)
- [Column Resizing](column-resizing.md)
- [Column Sorting](column-sorting.md)
- [Column Types](column-types.md)
- [Performance](performance.md)
- [Row Pinning](row-pinning.md)
- [Row Grouping](row-grouping.md)
- [Row Highlighting](row-highlighting.md)

<!-- TODO fix build flagging list items -->

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
