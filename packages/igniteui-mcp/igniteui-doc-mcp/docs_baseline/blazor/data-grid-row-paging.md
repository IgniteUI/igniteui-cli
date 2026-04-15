---
title: Blazor grid/table pagination – Ignite UI for Blazor 
_description: View Infragistics' Blazor grid component's Pager, which was designed to take in an array of data and output portions of that data as a page.
_keywords: Blazor Table, Data Grid, row, paging, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/paging
_tocName: Row Paging
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid/Table Pagination

Tabular table UIs are used commonly in many web products. Building a tabular table UI from scratch isn't easy, however, Ignite UI for Blazor grid, creating a Table UI is simple, and binding large amounts of local or remote data to the Blazor grid is easy. Since the grid is virtualized by default, you are not required to include table pagination to show large data sets. It is mainly used due to its most efficient ways of organizing complex data in the UI. With table pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without actually needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows / buttons that let users flip through pages, as demonstrated here:

Row Paging is enabled within the Ignite UI for Blazor Data Table / Data Grid by setting the `IsPagerVisible` property. In addition, you can limit the maximum number of visible rows by setting [`PageSize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_PageSize).

## Blazor Row Paging Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

        @if (Data != null)
        {
            <div class="container center" style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                        DataSource="Data"
                        AutoGenerateColumns="false"
                        IsPagerVisible="true"
                        PageSize="20">
                    <IgbTextColumn Field="ProductID" Width="@("*>110")" HeaderText="ID" HorizontalAlignment="CellContentHorizontalAlignment.Center" />
                    <IgbTextColumn Field="ProductName" HeaderText="Product" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>130")"/>
                    <IgbNumericColumn Field="ProductPrice" HeaderText="Price" Width="@("*>110")" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbNumericColumn Field="OrderItems" HeaderText="Orders" Width="@("*>140")" PositivePrefix="" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbNumericColumn Field="OrderValue" HeaderText="Order Value" Width="@("*>160")" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" Width="@("*>150")" DateTimeFormat="DateTimeFormats.DateShort" />
                    <IgbNumericColumn Field="Margin" Width="@("*>140")" PositivePrefix="$"/>
                    <IgbNumericColumn Field="Profit" Width="@("*>140")" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbTextColumn Field="Status" Width="@("*>140")" />
                </IgbDataGrid>
            </div>
        }

</div>

@code {

    private List<SaleInfo> Data;
    private Random Rand = new Random();

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
            "United-States", "United-Kingdom", "France", "Canada", "Poland",
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

        this.Data = sales;
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
        var flag = "https://dl.infragistics.com/x/img/flags/" + country + ".png";
        return flag;
    }

    public class SaleInfo
    {
        public string Status { get; set; }
        public string ProductName { get; set; }
        public string CountryFlag { get; set; }
        public string Country { get; set; }
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


<div class="divider--half"></div>

## Overview

From a UX perspective, table pagination has pros and cons. According to a [recent article](https://www.uxmatters.com/mt/archives/2018/11/paging-scrolling-and-infinite-scroll.php) on UX Matters, here is a breakdown of the good and the bad when it comes to table pagination.

Table Pagination Benefits:

- Limits user choice
- Clicks are measurable

Table Pagination Negatives:

- Users still have to scrolls
- Pagers work and behave differently from site to site
- Too many UI controls can be confusing
- Users perceive paging and slow and cumbersome
- Users may not notice pagination controls
- Page loading may be slow
- Users are confused whether actions apply to Page or entire set of data

With the Ignite UI Blazor grid, we allow the developer to add paging, however, as the grid has infinite scrolling built in by default, we recommend infinite (or virtual) scrolling vs. adding a pager to the grid. With virtualized, infinite scrolling as the default user experience, you get:

- Best performance while still having control or how much data is ‘paged’ via the scrolling interaction
- Natural approach to scrolling all content
- All interactions are clear to the end user
- Maps to the natural interactions on a mobile UX

## Blazor Grid/Page Synchronization

When users interact with the Grid like sorting and grouping, and you have enabled the Blazor Pager on the grid, you need to use the following functions to ensure that the Blazor Pagination data is synchronized with the Blazor table display.

- applySorts
- applyGroups
- applyFilters

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
- `IsPagerVisible`
- [`PageSize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_PageSize)
