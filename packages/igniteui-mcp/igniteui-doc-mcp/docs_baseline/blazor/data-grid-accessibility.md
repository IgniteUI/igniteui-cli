---
title: Blazor Data Grid | Real-Time Data Grid and Tables | Accessibility Compliance | Infragistics
_description: Use Infragistics' Ignite UI for Blazor Data Table & Grid to support accessibility feature that will enable screen readers to read "speak" keyboard navigation interactions through the cells and columns of the grid. View Ignite UI for Blazor table tutorials!
_keywords: Blazor Table, Data Grid, cell accessibility, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Accessibility Compliance
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Accessibility Compliance

The Ignite UI for Blazor Data Table / Data Grid supports accessibility and screen readers that interpret keyboard navigation interactions through the cells and columns of the grid.

This is activated by setting `--use-accessibility` property to **true** explicitly in CSS, preferably using a div tag around the grid.

## Blazor Grid Accessible Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="container vertical" style="--use-accessibility:true;">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                        DataSource="Data"
                        AutoGenerateColumns="false">
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
</div>

@code {

    private List<SaleInfo> Data;
    private Random Rand = new Random();

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

## Section 508 Compliance

<a href="https://www.section508.gov/" target="_blank">Section 508</a> of the Rehabilitation Act was amended in 1998 by Congress to require all Federal agencies to make their electronic and information technology accessible to people with disabilities. Since then, Section 508 compliance has not only been a requirement in government agencies, but it's also important when providing software solutions and designing Web pages.

Section 1194.22 of the Section 508 law specifically targets Web-based intranet and internet information and systems, and contains a set of 16 rules to follow. In order to enable you to keep your Web applications and Web sites compatible with these rules with minimal effort on your part, Infragistics has taken steps to ensure that the Ignite UI for Angular controls and components are compliant with the relevant accessibility rules.

## WAI-ARIA Support

In 2014 the W3C finalized their <a href="https://www.w3.org/TR/wai-aria/" target="_blank">WAI-ARIA specification</a> which defined how to design Web content and Web applications to be more accessible to users with disabilities.

This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the directionality of the components is.

ARIA Attributes
In order to give screen readers the contextual information they require to interpret and interact with the grid, ARIA attributes are added to the grid DOM elements. These attributes are particularity useful when plain HTML elements such div and span are used to create complex DOM structures, which is the case with ag-Grid.

When inspecting the grid's DOM elements the following roles and properties are supported and announced by the screen reader:

- Grid Cell - element containing a grid cell.
- Row Count - announces the number of rows.
- Column Count - announces the number of rows.
- Row - a row of column headers or grid cells.
- Row Index - announces the visible index of the row.
- Row Selected - only present if the row is selectable, it announces the selection state.
- Group Expanded - only present in row groups, it announces the expand state.
- Column Header - element containing a column header.
- Cell Index - announces the visible index of the column.
- Colspan - only present if the column spans across multiple columns, it helps guide screen readers.
- Sort - only present in sortable columns, it announces the sort state.
- Column Index - announces the visible index of the cell.
- Selected - only present if the cell is selectable, it announces the selection state.
- Expanded - only present in a group cell, it announces the expand state.

## Keyboard Navigation

After setting the `UseAccessibility` property to **true**, this will enable a range of keyboard navigation options in the data grid that screen readers can recognize. Below is a description of each of the key presses / combinations and the effect they will have relative to the currently activated cell:

Navigating within the Grid

- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd>: Navigate one cell up.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>←</kbd>: Navigate one cell left.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>↓</kbd>: Navigate one cell below.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>↑</kbd>: Navigate one cell above.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>HOME</kbd>: Navigate to first column header.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>END</kbd>: Navigate to last visible cell.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>↑</kbd> Navigate to current column header.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>↓</kbd> Navigate to last cell in current column.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>←</kbd> Navigate to first cell in current row.
- <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>→</kbd> Navigate to last cell in current row.

Screen Reader Commands

- <kbd>CTRL</kbd> OR <kbd>ALT</kbd> + <kbd>Num Pad 5</kbd>: Read current cell.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>↑</kbd>: Read current row.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>HOME</kbd>: Read from start of row.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>PAGE UP</kbd>: Read to end of row from current cell.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>Num Pad 5</kbd>: Read current column.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>END</kbd>: Read from top of column.
- <kbd>INSERT</kbd> + <kbd>SHIFT</kbd> + <kbd>PAGE DOWN</kbd>: Read to bottom of column.

## Code Snippet

The following demonstrates how to implement cell accessibility in the  Blazor data grid:

```razor
<div style="--use-accessibility:true;">

        @if (DataSource != null)
        {
            <IgbDataGrid Height="100%" Width="100%" />
        }
</div>
```

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
- `UseAccessibility`
