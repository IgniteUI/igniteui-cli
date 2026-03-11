---
title: Blazor Data Grid | Binding Local Data | Infragistics
_description: Use Infragistics' Blazor grid control to bind to an array of data. Learn how Ignite UI for Blazor table can help you better display your data!
_keywords: Blazor Table, Data Grid, binding to data, Ignite UI for Blazor, Infragistics, data binding
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Binding Local Data
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Binding Local Data

The following sample demonstrates the Ignite UI for Blazor Data Table / Data Grid data binding to an array of data.

## Blazor Binding Local Data Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      DataSource="Data"
                      AutoGenerateColumns="false">
                    <IgbTextColumn Field="ProductID" Width="@("*>110")" HeaderText="ID" HorizontalAlignment="CellContentHorizontalAlignment.Center" />
                    <IgbTextColumn Field="ProductName" HeaderText="Product" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>130")" />
                    <IgbNumericColumn Field="ProductPrice" HeaderText="Price" Width="@("*>110")" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbNumericColumn Field="OrderItems" HeaderText="Orders" Width="@("*>140")" PositivePrefix="" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbNumericColumn Field="OrderValue" HeaderText="Order Value" Width="@("*>160")" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" Width="@("*>150")" DateTimeFormat="DateTimeFormats.DateShort" />
                    <IgbNumericColumn Field="Margin" Width="@("*>140")" PositivePrefix="$" />
                    <IgbNumericColumn Field="Profit" Width="@("*>140")" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                    <IgbTextColumn Field="Status" Width="@("*>140")" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<SaleInfo> Data;

    private Random Rand = new Random();

    public IgbDataGrid GridRef { get; set; }

    protected override void OnInitialized()
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

    public DateTime GetRandomDate()
    {
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


## Code Snippet

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="false">
    <IgbTextColumn Field="ProductID" Width="110" HeaderText="ID" HorizontalAlignment="CellContentHorizontalAlignment.Center" />
    <IgbTextColumn Field="ProductName" HeaderText="Product" Width="120" />
    <IgbImageColumn Field="CountryFlag" HeaderText="Country" Width="130"/>
    <IgbNumericColumn Field="ProductPrice" HeaderText="Price" Width="110" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbNumericColumn Field="OrderItems" HeaderText="Orders" Width="140" PositivePrefix ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbNumericColumn Field="OrderValue" HeaderText="Order Value" Width="160" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbDateTimeColumn Field="OrderDate" HeaderText="Order Date" Width="150" DateTimeFormat="DateTimeFormats.DateShort" />
    <IgbNumericColumn Field="Margin" Width="140" PositivePrefix="$"/>
    <IgbNumericColumn Field="Profit" Width="140" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
    <IgbTextColumn Field="Status" Width="140" />
</IgbDataGrid>

@code {

    private List<SaleInfo> DataSource;
    private Random Rand = new Random();

    protected override void OnInitialized()
    {
        base.OnInitialized();

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

<!-- TODO ADD WC, ETC. -->

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
