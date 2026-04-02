---
title: Blazor Grid Column Data Types - Ignite UI for Blazor
_description: Handle cell and editing templates in Blazor by choosing from several predefined column data types - number, string, date, boolean, currency and percent column.
_keywords: Column Data Type , Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-types
_tocName: Column Types
_premium: true
---

# Blazor Grid Column Types Overview

The Blazor Grid provides a default handling of **number**, **string**, **date**, **boolean**, **currency** and **percent** column data types, based on which the appearance of the default and editing templates will be present.

<!-- ComponentStart: Grid, TreeGrid -->

## Blazor Grid Column Types Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesDataExtendedDates"
        Name="grid"
        @ref="grid"
        Id="grid"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter"
        Locale="EN">
            <IgbColumn
            Field="ProductName"
            Header="Prod. Name"
            Width="120px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            Width="120px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.Number"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="OrderFullDate"
            Header="Order Full Date"
            Width="300px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.DateTime"
            PipeArgs="ColumnPipeArgs2"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            Width="160px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.Date"
            PipeArgs="ColumnPipeArgs3"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="OrderDateDelay"
            Header="Order Time"
            Width="120px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.Time"
            PipeArgs="ColumnPipeArgs4"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Stock Value"
            Width="120px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs5"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="UnitsOnOrder"
            Header="% Change"
            Width="120px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.Percent"
            PipeArgs="ColumnPipeArgs6"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            Width="160px"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true"
            DataType="GridColumnDataType.Boolean">
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

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.DigitsInfo = "1.4-4";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }
    private IgbColumn column2;
    private IgbColumnPipeArgs _columnPipeArgs2 = null;
    public IgbColumnPipeArgs ColumnPipeArgs2
    {
        get
        {
            if (this._columnPipeArgs2 == null)
            {
                var columnPipeArgs2 = new IgbColumnPipeArgs();
                columnPipeArgs2.Format = "long";
                this._columnPipeArgs2 = columnPipeArgs2;
            }
            return this._columnPipeArgs2;
        }
    }
    private IgbColumn column3;
    private IgbColumnPipeArgs _columnPipeArgs3 = null;
    public IgbColumnPipeArgs ColumnPipeArgs3
    {
        get
        {
            if (this._columnPipeArgs3 == null)
            {
                var columnPipeArgs3 = new IgbColumnPipeArgs();
                columnPipeArgs3.Format = "mediumDate";
                this._columnPipeArgs3 = columnPipeArgs3;
            }
            return this._columnPipeArgs3;
        }
    }
    private IgbColumn column4;
    private IgbColumnPipeArgs _columnPipeArgs4 = null;
    public IgbColumnPipeArgs ColumnPipeArgs4
    {
        get
        {
            if (this._columnPipeArgs4 == null)
            {
                var columnPipeArgs4 = new IgbColumnPipeArgs();
                columnPipeArgs4.Format = "shortTime";
                this._columnPipeArgs4 = columnPipeArgs4;
            }
            return this._columnPipeArgs4;
        }
    }
    private IgbColumn column5;
    private IgbColumnPipeArgs _columnPipeArgs5 = null;
    public IgbColumnPipeArgs ColumnPipeArgs5
    {
        get
        {
            if (this._columnPipeArgs5 == null)
            {
                var columnPipeArgs5 = new IgbColumnPipeArgs();
                columnPipeArgs5.DigitsInfo = "1.4-4";
                this._columnPipeArgs5 = columnPipeArgs5;
            }
            return this._columnPipeArgs5;
        }
    }
    private IgbColumn column6;
    private IgbColumnPipeArgs _columnPipeArgs6 = null;
    public IgbColumnPipeArgs ColumnPipeArgs6
    {
        get
        {
            if (this._columnPipeArgs6 == null)
            {
                var columnPipeArgs6 = new IgbColumnPipeArgs();
                columnPipeArgs6.DigitsInfo = "1.4-4";
                this._columnPipeArgs6 = columnPipeArgs6;
            }
            return this._columnPipeArgs6;
        }
    }

    private InvoicesDataExtendedDates _invoicesDataExtendedDates = null;
    public InvoicesDataExtendedDates InvoicesDataExtendedDates
    {
        get
        {
            if (_invoicesDataExtendedDates == null)
            {
                _invoicesDataExtendedDates = new InvoicesDataExtendedDates();
            }
            return _invoicesDataExtendedDates;
        }
    }

}
```
```csharp
//begin data
    using System;
    using System.Collections.Generic;
    using System.Text.Json;
    using System.Collections.ObjectModel;
    using IgniteUI.Blazor.Controls;

    public class InvoicesDataExtendedDates : List<Invoice>
    {

        public InvoicesDataExtendedDates()
        {

            List<Invoice> data = new List<Invoice>()
            {
                new Invoice()
                },
                new Invoice()
                {
                    ProductID = 2,
                    ProductName = "Chang",
                    SupplierID = 1,
                    CategoryID = 1,
                    QuantityPerUnit = "24 - 12 oz bottles",
                    UnitPrice = 19.0000,
                    UnitsInStock = 17,
                    UnitsOnOrder = 0.040,
                    ReorderLevel = 25,
                    Discontinued = true,
                    OrderDate = DateTime.Parse("2003-03-17"),
                    OrderDateDelay = DateTime.Parse("2003-03-17") + new TimeSpan(5,40,0),
                    OrderFullDate =  DateTime.Parse("2003-03-17") + new TimeSpan(5,40,0)
                },
                new Invoice()
                {
                    ProductID = 3,
                    ProductName = "Aniseed Syrup",
                    SupplierID = 1,
                    CategoryID = 2,
                    QuantityPerUnit = "12 - 550 ml bottles",
                    UnitPrice = 10.0000,
                    UnitsInStock = 13,
                    UnitsOnOrder = 0.070,
                    ReorderLevel = 25,
                    Discontinued = false,
                    OrderDate = DateTime.Parse("2006-03-17"),
                    OrderDateDelay = DateTime.Parse("2006-03-17") + new TimeSpan(1,55,0),
                    OrderFullDate = DateTime.Parse("2006-03-17") + new TimeSpan(1,55,0)
                },
                new Invoice()
                {
                    ProductID = 4,
                    ProductName = "Chef Antons Cajun Seasoning",
                    SupplierID = 2,
                    CategoryID = 2,
                    QuantityPerUnit = "48 - 6 oz jars",
                    UnitPrice = 22.0000,
                    UnitsInStock = 53,
                    UnitsOnOrder = 0.030,
                    ReorderLevel = 0,
                    Discontinued = false,
                    OrderDate = DateTime.Parse("2016-03-17"),
                    OrderDateDelay = DateTime.Parse("2016-03-17") + new TimeSpan(11,11,0),
                    OrderFullDate = DateTime.Parse("2016-03-17") + new TimeSpan(11,11,0)
                },
                new Invoice()
                {
                    ProductID = 5,
                    ProductName = "Chef Antons Gumbo Mix",
                    SupplierID = 2,
                    CategoryID = 2,
                    QuantityPerUnit = "36 boxes",
                    UnitPrice = 21.3500,
                    UnitsInStock = 0,
                    UnitsOnOrder = 0.030,
                    ReorderLevel = 0,
                    Discontinued = true,
                    OrderDate = DateTime.Parse("2011-11-11"),
                    OrderDateDelay = DateTime.Parse("2011-11-11") + new TimeSpan(11,11,0),
                    OrderFullDate = DateTime.Parse("2011-11-11") + new TimeSpan(11,11,0)
                },
                new Invoice()
                {
                    ProductID = 6,
                    ProductName = "Grandmas Boysenberry Spread",
                    SupplierID = 3,
                    CategoryID = 2,
                    QuantityPerUnit = "12 - 8 oz jars",
                    UnitPrice = 25.0000,
                    UnitsInStock = 0,
                    UnitsOnOrder = 0.030,
                    ReorderLevel = 25,
                    Discontinued = false,
                    OrderDate = DateTime.Parse("2017-12-17"),
                    OrderDateDelay = DateTime.Parse("2017-12-17") + new TimeSpan(2,15,0),
                    OrderFullDate = DateTime.Parse("2017-12-17") + new TimeSpan(2,15,0)
                },
                new Invoice()
                {
                    ProductID = 7,
                    ProductName = "Uncle Bobs Organic Dried Pears",
                    SupplierID = 3,
                    CategoryID = 7,
                    QuantityPerUnit = "12 - 1 lb pkgs.",
                    UnitPrice = 30.0000,
                    UnitsInStock = 150,
                    UnitsOnOrder = 0.030,
                    ReorderLevel = 10,
                    Discontinued = false,
                    OrderDate = DateTime.Parse("2016-07-17"),
                    OrderDateDelay = DateTime.Parse("2016-07-17") + new TimeSpan(2,15,0),
                    OrderFullDate = DateTime.Parse("2016-07-17") + new TimeSpan(2,15,0)
                },
                new Invoice()
                {
                    ProductID = 8,
                    ProductName = "Northwoods Cranberry Sauce",
                    SupplierID = 3,
                    CategoryID = 2,
                    QuantityPerUnit = "12 - 12 oz jars",
                    UnitPrice = 40.0000,
                    UnitsInStock = 6,
                    UnitsOnOrder = 0.030,
                    ReorderLevel = 0,
                    Discontinued = false,
                    OrderDate = DateTime.Parse("2018-01-17"),
                    OrderDateDelay = DateTime.Parse("2018-01-17") + new TimeSpan(2,15,0),
                    OrderFullDate = DateTime.Parse("2018-01-17") + new TimeSpan(2,15,0)
                },
                new Invoice()
                {
                    ProductID = 9,
                    ProductName = "Mishi Kobe Niku",
                    SupplierID = 4,
                    CategoryID = 6,
                    QuantityPerUnit = "18 - 500 g pkgs.",
                    UnitPrice = 97.0000,
                    UnitsInStock = 29,
                    UnitsOnOrder = 0.030,
                    ReorderLevel = 0,
                    Discontinued = true,
                    OrderDate = DateTime.Parse("2010-02-17"),
                    OrderDateDelay = DateTime.Parse("2010-02-17") + new TimeSpan(8,10,0),
                    OrderFullDate = DateTime.Parse("2010-02-17") + new TimeSpan(8,10,0)
                }
            };

            this.AddRange(data);
        }

    }

    public class Invoice
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int SupplierID { get; set; }
        public int CategoryID { get; set; }
        public string QuantityPerUnit { get; set; }
        public double UnitPrice { get; set; }
        public int UnitsInStock { get; set; }
        public double UnitsOnOrder { get; set; }
        public int ReorderLevel { get; set; }
        public bool Discontinued { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime? OrderDateDelay { get; set; }
        public DateTime? OrderFullDate { get; set; }
    }

    //end data
```


<!-- ComponentEnd: Grid, TreeGrid -->

## Blazor Grid Default Template

If you want to enable a data type-specific template, you should set the column [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) input, otherwise the column will be treated as a string column since that is the default value for column [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType).

The following sections describe the default templates for each [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType).

### String

This column [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) is not changing the appearance or format of the cell value.

### Number

If the [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) is set to **number**, the cell value will be formatted based on application or grid's [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Locale) settings, as well as when [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs) property is specified. Then the number format will be changed based on them, for example it might change the:

- Number of digits after the decimal point
- Decimal separator with `,` or `.`

```razor
<IgbColumn Field="Sales" DataType="GridColumnDataType.Number" PipeArgs=formatOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatOptions = new IgbColumnPipeArgs() { DigitsInfo = "1.4-4" };
}
```

### DateTime, Date and Time

The appearance of the date portions will be set (e.g. day, month, year) based on [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Locale) format or [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs) input. The pipe arguments can be used to specify a custom date format or timezone:

- **format** - The default value for formatting the date is `'mediumDate'`. Other available options are `'short'`, `'long'`, `'shortDate'`, `'fullDate'`, `'longTime'`, `'fullTime'` and etc.
- **timezone** - The user's local system timezone is the default value. The timezone offset or standard GMT/UTC or continental US timezone abbreviation can also be passed. Different timezone examples which will display the corresponding time of the location anywhere in the world:

```razor
<IgbColumn Field="Date" DataType="GridColumnDataType.Date" PipeArgs=formatDateOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatDateOptions = new IgbColumnPipeArgs()
    {
        /** The date/time components that a date column will display, using predefined options or a custom format string. */
        /** e.g 'dd/mm/yyyy' or 'shortDate' **/
        Format = "longDate",
        /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
        Timezone = "GMT"
    };
}
```

Available timezones:

| Timezone                  | Value                     |
|---------------------------| ------------------------- |
| Alpha Time Zone           |‘UTC+1’                    |
| Australian Central Time   |‘UTC+9:30/ +10:30’         |
| Arabia Standard Time      |‘UTC+3’                    |
| Central Standard Time     |‘UTC-6’                    |
| China Standard Time       |‘UTC+8’                    |
| Delta Time Zone           |‘UTC+4’                    |
| Greenwich Mean Time       |‘UTC+0’                    |
| Gulf Standard Time        |‘UTC+4’                    |
| Hawaii Standard Time      |‘UTC-10’                   |
| India Standard Time       |‘UTC+4’                    |

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) accepts date values of type **Date object**, **Number (milliseconds)**, **An ISO date-time string**. This section shows [how to configure a custom display format](../data-grid.md#custom-display-format).

As you can see in the sample, we specify a different format options in order to showcase the available formats for the specific column type. For example, below you can find the format options for the **time** portion of the date object:

```razor
// Time format with equivalent example
@code {
    public Dictionary<string, string> timeFormats = new() {
        { "shortTime", "h:mm a" },
        { "mediumTime", "h:mm:ss a" },
        { "longTime", "h:mm:ss a z" },
        { "fullTime", "h:mm:ss a zzzz" },
    };
}
```

#### Cell Editing

When it comes to cell editing based on the column type a different editor will appear:

- `DateTime` - `DateTimeEditor` will be used. This editor will give you a mask directions for the input elements part of the `DateTime` object.
- `Date` - [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) will be used.
- `Time` - `TimePicker` will be used.

#### Filtering

The same editors listed above will be used when it comes to Quick Filtering/Excel-style Filtering. These are the following filtering operands that each type exposes:

- `DateTime` and `Date` - Equals, Does Not Equal, Before, After, Today, Yesterday, This Month, Last Month, Next Month, This Year, Last Year, Next Year, Empty, Not Empty, Null, Not Null;
- `Time` - At, Not At, Before, After, At or Before, At or After, Empty, Not Empty, Null, Not Null;

#### Summaries

The available Summary operands will be **Count**, **Earliest** (date/time) and **Latest** (date/time).

#### Sorting

- `Time`: Column sorts based on the time portion of the object, ms will be disregarded.
- `Date`: Column sorts based on the date portion, disregards the time portion.
- `DateTime`: Column sorts based on the full date.

### Boolean

The default template is using material icons for visualization of boolean values - 'clear' icon for **false** values and 'check' icon for **true** values. As for the editing template, it is using [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) component.

```razor
<IgbColumn DataType="GridColumnDataType.Boolean"></IgbColumn>
```

### Image

Default template is using the value coming from the data as an image source to a default image template. The default image template will extract the name of the image file and set it as `alt` attribute of the image to meet the accessibility requirement. The displayed cell size is adjusted to the sizes of the images rendered, so keep in mind that large images will still be rendered and the grid rows will become as large as the images in the image column. Filtering, sorting and grouping will be turned off by default for image type columns. If you want to enable them, you need to provide custom strategies which perform the data operations.

```razor
<IgbColumn DataType="GridColumnDataType.Image"></IgbColumn>
```

When [`AutoGenerate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AutoGenerate) is used for the columns, the grid analyses the values in the first data record. If a value is of type string and matches the pattern of a url ending in an image extension (gif, jpg, jpeg, tiff, png, webp, bmp) then the column will automatically be marked as `dataType === GridColumnDataType.Image` and a default image template will be rendered.

### Currency

#### Default template

The default template will show a numeric value with currency symbol that would be either prefixed or suffixed.

By using the [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs) input the end-user can customize the number format by **decimal point**, **currencyCode** and **display**.

```razor
<IgbColumn Field="UnitsInStock" DataType="GridColumnDataType.Currency" PipeArgs=formatOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatOptions = new IgbColumnPipeArgs()
    {
        DigitsInfo = "3.4-4",
        Display = "symbol-narrow"
    };
}
```

| Parameter                 | Description                                                |
|---------------------------| -------------------------|
| digitsInfo                | Represents Decimal representation of currency value        |
| display\-                | Displays the value by narrow or wide symbol                |

\*display - for the default en-US locale, the code USD can be represented by the narrow symbol $ or the wide symbol US$.

<!-- ComponentStart: Grid -->

Upon editing of cell's value the **currency symbol** will be visible as suffix or prefix. More about that could be found in the official [Cell editing topic](cell-editing.md#blazor-grid-cell-editing-and-edit-templates-example).

<!-- ComponentEnd: Grid -->

> When using <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)

### Percent

Default template is showing the percent equivalent of the underlying numeric value. The displayed cell value is a multiplied result by display factor of '100' - for example, as the default factor is 100 and the "value" passed to the cell is 0.123, then the displayed cell value will be "12.3%".

When it comes to cell editing, the value will be the same as the data source value - the display factor is '1'. Upon editing of the cell a preview of the percent value will be shown as a suffix element.For example, while editing '0.0547' the preview element will show '5.47%'.

```razor
<IgbColumn Field="UnitsInStock" DataType="GridColumnDataType.Percent" PipeArgs=formatPercentOptions></IgbColumn>

@code {
    private IgbColumnPipeArgs formatPercentOptions = new IgbColumnPipeArgs()
    {
        /**
        * Decimal representation options, specified by a string in the following format:
        * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
        * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
        * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
        * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
        */
        DigitsInfo = "2.2-3"
    };
}
```

> [!Note]
> When using <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)

## Default Editing Template

See the editing templates part of [Grid Editing topic](editing.md#editing-templates)

## Custom Editing Template and Formatter

Custom template and column formatter definition will always take precedence over the column data type set:

### Custom Template

```razor
<IgbGrid>
 <IgbColumn InlineEditorTemplate="EditTemplate"></IgbColumn>
</IgbGrid>
@code {
    public RenderFragment<IgbCellTemplateContext> EditTemplate = (ctx) =>
    {
        var value = ctx.Cell.Value;
        return@<input value="@value" />;
    };
}
```

### Column Formatter

```razor
<IgbGrid>
 <IgbColumn FormatterScript="CurrencyFormatter"></IgbColumn>
</IgbGrid>

//In Javascript
igRegisterScript("CurrencyFormatter", (value) => {
    return `$ ${value.toFixed(0)}`;
}, false);
```

## API References

- `Cell`
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Locale)
- [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType)

## Additional Resources

- For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)
- [Editing](editing.md)
- [Summaries](summaries.md)
