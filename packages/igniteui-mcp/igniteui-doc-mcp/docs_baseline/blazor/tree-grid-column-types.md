---
title: Blazor Tree Grid Column Data Types - Ignite UI for Blazor
_description: Handle cell and editing templates in Blazor by choosing from several predefined column data types - number, string, date, boolean, currency and percent column.
_keywords: Column Data Type , Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-types
_tocName: Column Types
_premium: true
---

# Blazor Tree Grid Column Types Overview

The Blazor Tree Grid provides a default handling of **number**, **string**, **date**, **boolean**, **currency** and **percent** column data types, based on which the appearance of the default and editing templates will be present.

<!-- ComponentStart: Grid, TreeGrid -->

## Blazor Tree Grid Column Types Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">

        <IgbTreeGrid
            AutoGenerate="false"
            Data="WorkersDataSource"
            PrimaryKey="ID"
            ForeignKey="ParentID"
            AllowFiltering="true"
            FilterMode="FilterMode.ExcelStyleFilter"
            Locale="EN"
            SummaryCalculationMode="GridSummaryCalculationMode.RootLevelOnly"
        >
            <IgbColumn
                Field="Name"
                Header="Full Name"
                DataType="GridColumnDataType.String"
                Width="220px"
                Sortable="true"
                HasSummary="true"
                Editable="true"
                Resizable="true"
            ></IgbColumn>
            <IgbColumn
                Field="Avatar"
                Header="Photo"
                DataType="GridColumnDataType.Image"
                Width="120px"
                Resizable="true"
            ></IgbColumn>
            <IgbColumn
                Field="Title"
                Header="Title"
                DataType="GridColumnDataType.String"
                Width="250px"
                Sortable="true"
                HasSummary="true"
                Editable="true"
                Resizable="true"
            ></IgbColumn>
            <IgbColumn
                Field="Age"
                Header="Age"
                DataType="GridColumnDataType.Number"
                Width="120px"
                Sortable="true"
                HasSummary="true"
                Editable="true"
                Resizable="true"
            ></IgbColumn>
            <IgbColumn
                Field="HireFullDate"
                Header="Hire Full Date"
                DataType="GridColumnDataType.DateTime"
                Width="300px"
                Sortable="true"
                HasSummary="true"
                Editable="true"
                Resizable="true"
                PipeArgs="ColumnPipeArgs1"
            ></IgbColumn>
            <IgbColumn
                Field="HireDate"
                Header="Hire Date"
                DataType="GridColumnDataType.Date"
                Width="160px"
                Sortable="true"
                HasSummary="true"
                Editable="true"
                Resizable="true"
                PipeArgs="ColumnPipeArgs2"
            ></IgbColumn>
            <IgbColumn
                Field="HireTime"
                Header="Hire Time"
                DataType="GridColumnDataType.Time"
                Width="160px"
                Sortable="true"
                HasSummary="true"
                Editable="true"
                Resizable="true"
                PipeArgs="ColumnPipeArgs3"
            ></IgbColumn>
            <IgbColumn
                Field="Salary"
                Header="Salary"
                DataType="GridColumnDataType.Currency"
                Width="120px"
                Sortable="true"
                HasSummary="true"
                Editable="true"
                Resizable="true"
                PipeArgs="ColumnPipeArgs4"
            ></IgbColumn>
            <IgbColumn
                Field="CompletedTasks"
                Header="Completed Tasks"
                DataType="GridColumnDataType.Percent"
                Width="200px"
                Sortable="true"
                Editable="true"
                Resizable="true"
                PipeArgs="ColumnPipeArgs5"
            ></IgbColumn>
            <IgbColumn
                Field="OnPTO"
                Header="On PTO"
                DataType="GridColumnDataType.Boolean"
                Width="120px"
                Sortable="true"
                Editable="true"
                Resizable="true"
            ></IgbColumn>
        </IgbTreeGrid>

    </div>
</div>

@code {

    public IgbColumnPipeArgs ColumnPipeArgs1 = new IgbColumnPipeArgs()
    {
        Format = "long"
    };

    public IgbColumnPipeArgs ColumnPipeArgs2 = new IgbColumnPipeArgs()
    {
        Format = "mediumDate"
    };

    public IgbColumnPipeArgs ColumnPipeArgs3 = new IgbColumnPipeArgs()
    {
        Format = "shortTime"
    };

    public IgbColumnPipeArgs ColumnPipeArgs4 = new IgbColumnPipeArgs()
    {
        DigitsInfo = "1.3-3"
    };

    public IgbColumnPipeArgs ColumnPipeArgs5 = new IgbColumnPipeArgs()
    {
        DigitsInfo = "2.2-3"
    };

    private WorkersData _WorkersData = null;
    public WorkersData WorkersDataSource
    {
        get
        {
            if (_WorkersData == null)
            {
                _WorkersData = new WorkersData();
            }
            return _WorkersData;
        }
    }

}
```
```csharp
//begin data
using System;
using System.Collections.Generic;

public class WorkersData : List<Worker>
{
    public WorkersData()
    {
        List<Worker> data = new List<Worker>()
        {
            new Worker()
            },
            new Worker()
            {
                Age = 42,
                HireDate = DateTime.Parse("2014-01-22"),
                HireTime = DateTime.Parse("2014-01-22") + new TimeSpan(12,0,0),
                HireFullDate = DateTime.Parse("2014-01-22") + new TimeSpan(12,0,0),
                ID = 4,
                Name = "Ana Sanders",
                OnPTO = true,
                ParentID = -1,
                Avatar = "https://dl.infragistics.com/x/img/people/women/14.png",
                Salary = 39,
                CompletedTasks = 0.39,
                Title = "CEO"
            },
            new Worker()
            {
                Age = 49,
                HireDate = DateTime.Parse("2014-01-22"),
                HireTime = DateTime.Parse("2014-01-22") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2014-01-22") + new TimeSpan(14,0,0),
                ID = 18,
                Name = "Victoria Lincoln",
                OnPTO = true,
                ParentID = -1,
                Avatar = "https://dl.infragistics.com/x/img/people/women/2.png",
                Salary = 52,
                CompletedTasks = 0.52,
                Title = "Accounting Manager"
            },
            new Worker()
            {
                Age = 61,
                HireDate = DateTime.Parse("2010-01-01"),
                HireTime = DateTime.Parse("2010-01-01") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2010-01-01") + new TimeSpan(14,0,0),
                ID = 10,
                Name = "Yang Wang",
                OnPTO = false,
                ParentID = -1,
                Avatar = "https://dl.infragistics.com/x/img/people/men/14.png",
                Salary = 13,
                CompletedTasks = 0.13,
                Title = "Localization Manager"
            },
            new Worker()
            {
                Age = 43,
                HireDate = DateTime.Parse("2011-06-03"),
                HireTime = DateTime.Parse("2011-06-03") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2011-06-03") + new TimeSpan(14,0,0),
                ID = 3,
                Name = "Michael Burke",
                OnPTO = true,
                ParentID = 1,
                Avatar = "https://dl.infragistics.com/x/img/people/men/11.png",
                Salary = 22,
                CompletedTasks = 0.22,
                Title = "Senior Software Developer"
            },
            new Worker()
            {
                Age = 29,
                HireDate = DateTime.Parse("2009-06-19"),
                HireTime = DateTime.Parse("2009-06-19") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2009-06-19") + new TimeSpan(14,0,0),
                ID = 2,
                Name = "Thomas Anderson",
                OnPTO = false,
                ParentID = 1,
                Avatar = "https://dl.infragistics.com/x/img/people/men/2.png",
                Salary = 30,
                CompletedTasks = 0.3,
                Title = "Senior Software Developer"
            },
            new Worker()
            {
                Age = 31,
                HireDate = DateTime.Parse("2014-08-18"),
                HireTime = DateTime.Parse("2014-08-18") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2014-08-18") + new TimeSpan(14,0,0),
                ID = 11,
                Name = "Monica Reyes",
                OnPTO = false,
                ParentID = 1,
                Avatar = "https://dl.infragistics.com/x/img/people/women/13.png",
                Salary = 45,
                CompletedTasks = 0.45,
                Title = "Software Development Team Lead"
            },
            new Worker()
            {
                Age = 35,
                HireDate = DateTime.Parse("2015-09-17"),
                HireTime = DateTime.Parse("2015-09-17") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2015-09-17") + new TimeSpan(14,0,0),
                ID = 6,
                Name = "Roland Mendel",
                OnPTO = false,
                ParentID = 11,
                Avatar = "https://dl.infragistics.com/x/img/people/men/13.png",
                Salary = 35,
                CompletedTasks = 0.35,
                Title = "Senior Software Developer"
            },
            new Worker()
            {
                Age = 44,
                HireDate = DateTime.Parse("2009-10-11"),
                HireTime = DateTime.Parse("2009-10-11") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2009-10-11") + new TimeSpan(14,0,0),
                ID = 12,
                Name = "Sven Cooper",
                OnPTO = true,
                ParentID = 11,
                Avatar = "https://dl.infragistics.com/x/img/people/men/16.png",
                Salary = 29,
                CompletedTasks = 0.29,
                Title = "Senior Software Developer"
            },
            new Worker()
            {
                Age = 44,
                HireDate = DateTime.Parse("2014-04-04"),
                HireTime = DateTime.Parse("2014-04-04") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2014-04-04") + new TimeSpan(14,0,0),
                ID = 14,
                Name = "Laurence Johnson",
                OnPTO = false,
                ParentID = 4,
                Avatar = "https://dl.infragistics.com/x/img/people/men/17.png",
                Salary = 63,
                CompletedTasks = 0.63,
                Title = "Director"
            },
            new Worker()
            {
                Age = 25,
                HireDate = DateTime.Parse("2017-11-09"),
                HireTime = DateTime.Parse("2017-11-09") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2017-11-09") + new TimeSpan(14,0,0),
                ID = 5,
                Name = "Elizabeth Richards",
                OnPTO = true,
                ParentID = 4,
                Avatar = "https://dl.infragistics.com/x/img/people/women/11.png",
                Salary = 67,
                CompletedTasks = 0.67,
                Title = "Vice President"
            },
            new Worker()
            {
                Age = 39,
                HireDate = DateTime.Parse("2010-03-22"),
                HireTime = DateTime.Parse("2010-03-22") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2010-03-22") + new TimeSpan(14,0,0),
                ID = 13,
                Name = "Trevor Ashworth",
                OnPTO = true,
                ParentID = 5,
                Avatar = "https://dl.infragistics.com/x/img/people/men/18.png",
                Salary = 70,
                CompletedTasks = 0.7,
                Title = "Director"
            },
            new Worker()
            {
                Age = 44,
                HireDate = DateTime.Parse("2014-04-04"),
                HireTime = DateTime.Parse("2014-04-04") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2014-04-04") + new TimeSpan(14,0,0),
                ID = 17,
                Name = "Antonio Moreno",
                OnPTO = false,
                ParentID = 18,
                Avatar = "https://dl.infragistics.com/x/img/people/men/19.png",
                Salary = 52,
                CompletedTasks = 0.52,
                Title = "Senior Accountant"
            },
            new Worker()
            {
                Age = 50,
                HireDate = DateTime.Parse("2007-11-18"),
                HireTime = DateTime.Parse("2007-11-18") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2007-11-18") + new TimeSpan(14,0,0),
                ID = 7,
                Name = "Pedro Rodriguez",
                OnPTO = false,
                ParentID = 10,
                Avatar = "https://dl.infragistics.com/x/img/people/men/10.png",
                Salary = 43,
                CompletedTasks = 0.43,
                Title = "Senior Localization Developer"
            },
            new Worker()
            {
                Age = 27,
                HireDate = DateTime.Parse("2016-02-19"),
                HireTime = DateTime.Parse("2016-02-19") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2016-02-19") + new TimeSpan(14,0,0),
                ID = 8,
                Name = "Casey Harper",
                OnPTO = true,
                ParentID = 10,
                Avatar = "https://dl.infragistics.com/x/img/people/women/15.png",
                Salary = 35,
                CompletedTasks = 0.35,
                Title = "Senior Localization"
            },
            new Worker()
            {
                Age = 25,
                HireDate = DateTime.Parse("2017-11-09"),
                HireTime = DateTime.Parse("2017-11-09") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2017-11-09") + new TimeSpan(14,0,0),
                ID = 15,
                Name = "Patricia Simpson",
                OnPTO = false,
                ParentID = 7,
                Avatar = "https://dl.infragistics.com/x/img/people/women/16.png",
                Salary = 15,
                CompletedTasks = 0.15,
                Title = "Localization Intern"
            },
            new Worker()
            {
                Age = 39,
                HireDate = DateTime.Parse("2010-03-22"),
                HireTime = DateTime.Parse("2010-03-22") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2010-03-22") + new TimeSpan(14,0,0),
                ID = 9,
                Name = "Francisco Chang",
                OnPTO = false,
                ParentID = 7,
                Avatar = "https://dl.infragistics.com/x/img/people/men/26.png",
                Salary = 15,
                CompletedTasks = 0.15,
                Title = "Localization Intern"
            },
            new Worker()
            {
               Age = 25,
                HireDate = DateTime.Parse("2018-03-18"),
                HireTime = DateTime.Parse("2018-03-18") + new TimeSpan(14,0,0),
                HireFullDate = DateTime.Parse("2018-03-18") + new TimeSpan(14,0,0),
                ID = 16,
                Name = "Peter Lewis",
                OnPTO = true,
                ParentID = 7,
                Avatar = "https://dl.infragistics.com/x/img/people/men/27.png",
                Salary = 15,
                CompletedTasks = 0.15,
                Title = "Localization Intern"
            }
        };
 
        this.AddRange(data);
    }
}

public class Worker
{
    public int ID { get; set; }
    public int ParentID { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
    public string Avatar { get; set; }
    public int Age { get; set; }
    public int Salary { get; set; }
    public double CompletedTasks { get; set; }
    public bool OnPTO { get; set; }
    public DateTime HireDate { get; set; }
    public DateTime HireTime { get; set; }
    public DateTime HireFullDate { get; set; }
}

//end data
```

<!-- ComponentEnd: Grid, TreeGrid -->

## Blazor Tree Grid Default Template

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

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) accepts date values of type **Date object**, **Number (milliseconds)**, **An ISO date-time string**. This section shows [how to configure a custom display format](../data-grid.md#custom-display-format).

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

See the editing templates part of [Tree Grid Editing topic](editing.md#editing-templates)

## Custom Editing Template and Formatter

Custom template and column formatter definition will always take precedence over the column data type set:

### Custom Template

```razor
<IgbTreeGrid>
 <IgbColumn InlineEditorTemplate="EditTemplate"></IgbColumn>
</IgbTreeGrid>
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
<IgbTreeGrid>
 <IgbColumn FormatterScript="CurrencyFormatter"></IgbColumn>
</IgbTreeGrid>

//In Javascript
igRegisterScript("CurrencyFormatter", (value) => {
    return `$ ${value.toFixed(0)}`;
}, false);
```

## API References

- `Cell`
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs)
- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Locale)
- [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType)

## Additional Resources

- For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)
- [Editing](editing.md)
- [Summaries](summaries.md)
