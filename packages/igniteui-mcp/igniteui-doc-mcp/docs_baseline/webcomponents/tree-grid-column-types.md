---
title: Web Components Tree Grid Column Data Types - Ignite UI for Web Components
_description: Handle cell and editing templates in Web Components by choosing from several predefined column data types - number, string, date, boolean, currency and percent column.
_keywords: Column Data Type , Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-types
_tocName: Column Types
_premium: true
---

# Web Components Tree Grid Column Types Overview

The Web Components Tree Grid provides a default handling of **number**, **string**, **date**, **boolean**, **currency** and **percent** column data types, based on which the appearance of the default and editing templates will be present.

<!-- ComponentStart: Grid, TreeGrid -->

## Web Components Tree Grid Column Types Example

```typescript
export const EMPLOYEES_DATA = [
    {
        Age: 55,
        HireDate: new Date("2008-03-20"),
        HireTime: new Date("2008-03-20"),
        HireFullDate: new Date("2008-03-20"),
        ID: 1,
        Name: "Johnathan Winchester",
        Phone: "0251-031259",
        OnPTO: false,
        ParentID: -1,
        Avatar: "https://dl.infragistics.com/x/img/people/men/15.png",
        Salary: 15,
        CompletedTasks: 0.15,
        Title: "Development Manager"
    },
    {
        Age: 42,
        HireDate: new Date("2014-01-22"),
        HireTime: new Date("2014-01-22"),
        HireFullDate: new Date("2014-01-22"),
        ID: 4,
        Name: "Ana Sanders",
        Phone: "(21) 555-0091",
        OnPTO: true,
        ParentID: -1,
        Avatar: "https://dl.infragistics.com/x/img/people/women/14.png",
        Salary: 39,
        CompletedTasks: 0.39,
        Title: "CEO"
    },
    {
        Age: 49,
        HireDate: new Date("2014-01-22"),
        HireTime: new Date("2014-01-22"),
        HireFullDate: new Date("2014-01-22"),
        ID: 18,
        Name: "Victoria Lincoln",
        Phone: "(071) 23 67 22 20",
        OnPTO: true,
        ParentID: -1,
        Avatar: "https://dl.infragistics.com/x/img/people/women/12.png",
        Salary: 52,
        CompletedTasks: 0.52,
        Title: "Accounting Manager"
    },
    {
        Age: 61,
        HireDate: new Date("2010-01-01"),
        HireTime: new Date("2010-01-01"),
        HireFullDate: new Date("2010-01-01"),
        ID: 10,
        Name: "Yang Wang",
        Phone: "(21) 555-0091",
        OnPTO: false,
        ParentID: -1,
        Avatar: "https://dl.infragistics.com/x/img/people/men/14.png",
        Salary: 13,
        CompletedTasks: 0.13,
        Title: "Localization Manager"
    },
    {
        Age: 43,
        HireDate: new Date("2011-06-03"),
        HireTime: new Date("2011-06-03"),
        HireFullDate: new Date("2011-06-03"),
        ID: 3,
        Name: "Michael Burke",
        Phone: "0452-076545",
        OnPTO: true,
        ParentID: 1,
        Avatar: "https://dl.infragistics.com/x/img/people/men/11.png",
        Salary: 22,
        CompletedTasks: 0.22,
        Title: "Senior Software Developer"
    },
    {
        Age: 29,
        HireDate: new Date("2009-06-19"),
        HireTime: new Date("2009-06-19"),
        HireFullDate: new Date("2009-06-19"),
        ID: 2,
        Name: "Thomas Anderson",
        Phone: "(14) 555-8122",
        OnPTO: false,
        ParentID: 1,
        Avatar: "https://dl.infragistics.com/x/img/people/men/12.png",
        Salary: 30,
        CompletedTasks: 0.3,
        Title: "Senior Software Developer"
    },
    {
        Age: 31,
        HireDate: new Date("2014-08-18"),
        HireTime: new Date("2014-08-18"),
        HireFullDate: new Date("2014-08-18"),
        ID: 11,
        Name: "Monica Reyes",
        Phone: "7675-3425",
        OnPTO: false,
        ParentID: 1,
        Avatar: "https://dl.infragistics.com/x/img/people/women/13.png",
        Salary: 45,
        CompletedTasks: 0.45,
        Title: "Software Development Team Lead"
    },
    {
        Age: 35,
        HireDate: new Date("2015-09-17"),
        HireTime: new Date("2015-09-17"),
        HireFullDate: new Date("2015-09-17"),
        ID: 6,
        Name: "Roland Mendel",
        Phone: "(505) 555-5939",
        OnPTO: false,
        ParentID: 11,
        Avatar: "https://dl.infragistics.com/x/img/people/men/13.png",
        Salary: 35,
        CompletedTasks: 0.35,
        Title: "Senior Software Developer"
    },
    {
        Age: 44,
        HireDate: new Date("2009-10-11"),
        HireTime: new Date("2009-10-11"),
        HireFullDate: new Date("2009-10-11"),
        ID: 12,
        Name: "Sven Cooper",
        Phone: "0695-34 67 21",
        OnPTO: true,
        ParentID: 11,
        Avatar: "https://dl.infragistics.com/x/img/people/men/16.png",
        Salary: 29,
        CompletedTasks: 0.29,
        Title: "Senior Software Developer"
    },
    {
        Age: 44,
        HireDate: new Date("2014-04-04"),
        HireTime: new Date("2014-04-04"),
        HireFullDate: new Date("2014-04-04"),
        ID: 14,
        Name: "Laurence Johnson",
        Phone: "981-443655",
        OnPTO: false,
        ParentID: 4,
        Avatar: "https://dl.infragistics.com/x/img/people/men/17.png",
        Salary: 63,
        CompletedTasks: 0.63,
        Title: "Director"
    },
    {
        Age: 25,
        HireDate: new Date("2017-11-09"),
        HireTime: new Date("2017-11-09"),
        HireFullDate: new Date("2017-11-09"),
        ID: 5,
        Name: "Elizabeth Richards",
        Phone: "(2) 283-2951",
        OnPTO: true,
        ParentID: 4,
        Avatar: "https://dl.infragistics.com/x/img/people/women/11.png",
        Salary: 67,
        CompletedTasks: 0.67,
        Title: "Vice President"
    },
    {
        Age: 39,
        HireDate: new Date("2010-03-22"),
        HireTime: new Date("2010-03-22"),
        HireFullDate: new Date("2010-03-22"),
        ID: 13,
        Name: "Trevor Ashworth",
        Phone: "981-443655",
        OnPTO: true,
        ParentID: 5,
        Avatar: "https://dl.infragistics.com/x/img/people/men/18.png",
        Salary: 70,
        CompletedTasks: 0.7,
        Title: "Director"
    },
    {
        Age: 44,
        HireDate: new Date("2014-04-04"),
        HireTime: new Date("2014-04-04"),
        HireFullDate: new Date("2014-04-04"),
        ID: 17,
        Name: "Antonio Moreno",
        Phone: "(505) 555-5939",
        OnPTO: false,
        ParentID: 18,
        Avatar: "https://dl.infragistics.com/x/img/people/men/19.png",
        Salary: 52,
        CompletedTasks: 0.52,
        Title: "Senior Accountant"
    },
    {
        Age: 50,
        HireDate: new Date("2007-11-18"),
        HireTime: new Date("2007-11-18"),
        HireFullDate: new Date("2007-11-18"),
        ID: 7,
        Name: "Pedro Rodriguez",
        Phone: "035-640230",
        OnPTO: false,
        ParentID: 10,
        Avatar: "https://dl.infragistics.com/x/img/people/men/10.png",
        Salary: 43,
        CompletedTasks: 0.43,
        Title: "Senior Localization Developer"
    },
    {
        Age: 27,
        HireDate: new Date("2016-02-19"),
        HireTime: new Date("2016-02-19"),
        HireFullDate: new Date("2016-02-19"),
        ID: 8,
        Name: "Casey Harper",
        Phone: "0342-023176",
        OnPTO: true,
        ParentID: 10,
        Avatar: "https://dl.infragistics.com/x/img/people/women/15.png",
        Salary: 35,
        CompletedTasks: 0.35,
        Title: "Senior Localization"
    },
    {
        Age: 25,
        HireDate: new Date("2017-11-09"),
        HireTime: new Date("2017-11-09"),
        HireFullDate: new Date("2017-11-09"),
        ID: 15,
        Name: "Patricia Simpson",
        Phone: "069-0245984",
        OnPTO: false,
        ParentID: 7,
        Avatar: "https://dl.infragistics.com/x/img/people/women/16.png",
        Salary: 15,
        CompletedTasks: 0.15,
        Title: "Localization Intern"
    },
    {
        Age: 39,
        HireDate: new Date("2010-03-22"),
        HireTime: new Date("2010-03-22"),
        HireFullDate: new Date("2010-03-22"),
        ID: 9,
        Name: "Francisco Chang",
        Phone: "(91) 745 6200",
        OnPTO: false,
        ParentID: 7,
        Avatar: "https://dl.infragistics.com/x/img/people/men/26.png",
        Salary: 15,
        CompletedTasks: 0.15,
        Title: "Localization Intern"
    },
    {
        Age: 25,
        HireDate: new Date("2018-03-18"),
        HireTime: new Date("2018-03-18"),
        HireFullDate: new Date("2018-03-18"),
        ID: 16,
        Name: "Peter Lewis",
        Phone: "069-0245984",
        OnPTO: true,
        ParentID: 7,
        Avatar: "https://dl.infragistics.com/x/img/people/men/27.png",
        Salary: 15,
        CompletedTasks: 0.15,
        Title: "Localization Intern"
    }
];
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
img {
    width: 50px;
}
```


<!-- ComponentEnd: Grid, TreeGrid -->

## Web Components Tree Grid Default Template

If you want to enable a data type-specific template, you should set the column [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) input, otherwise the column will be treated as a string column since that is the default value for column [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType).

The following sections describe the default templates for each [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType).

### String

This column [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) is not changing the appearance or format of the cell value.

### Number

If the [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) is set to **number**, the cell value will be formatted based on application or grid's `Locale` settings, as well as when [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs) property is specified. Then the number format will be changed based on them, for example it might change the:

- Number of digits after the decimal point
- Decimal separator with `,` or `.`

```html
<igc-column id="column" data-type="number">
</igc-column>
```

```ts
public get formatOptions(): any {
  return {
    digitsInfo: "1.4-4"
  };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatOptions;
}
```

### DateTime, Date and Time

The appearance of the date portions will be set (e.g. day, month, year) based on `Locale` format or [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs) input. The pipe arguments can be used to specify a custom date format or timezone:

- **format** - The default value for formatting the date is `'mediumDate'`. Other available options are `'short'`, `'long'`, `'shortDate'`, `'fullDate'`, `'longTime'`, `'fullTime'` and etc.
- **timezone** - The user's local system timezone is the default value. The timezone offset or standard GMT/UTC or continental US timezone abbreviation can also be passed. Different timezone examples which will display the corresponding time of the location anywhere in the world:

```html
<igc-column id="column" data-type="date">
</igc-column>
```

```ts
public get formatDateOptions(): any {
    return {
        format: "long",
        timezone: "UTC+0"
    };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatDateOptions;
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

The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) accepts date values of type **Date object**, **Number (milliseconds)**, **An ISO date-time string**. This section shows [how to configure a custom display format](../data-grid.md#custom-display-format).

As you can see in the sample, we specify a different format options in order to showcase the available formats for the specific column type. For example, below you can find the format options for the **time** portion of the date object:

```ts
// Time format with equivalent example
public timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },
];
```

#### Cell Editing

When it comes to cell editing based on the column type a different editor will appear:

- `DateTime` - `DateTimeEditor` will be used. This editor will give you a mask directions for the input elements part of the `DateTime` object.
- `Date` - [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html) will be used.
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

The default template is using material icons for visualization of boolean values - 'clear' icon for **false** values and 'check' icon for **true** values. As for the editing template, it is using [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) component.

```html
<igc-column data-type="boolean">
</igc-column>
```

### Image

Default template is using the value coming from the data as an image source to a default image template. The default image template will extract the name of the image file and set it as `alt` attribute of the image to meet the accessibility requirement. The displayed cell size is adjusted to the sizes of the images rendered, so keep in mind that large images will still be rendered and the grid rows will become as large as the images in the image column. Filtering, sorting and grouping will be turned off by default for image type columns. If you want to enable them, you need to provide custom strategies which perform the data operations.

```html
<igc-column field="Image" data-type="image">
</igc-column>
```

When `AutoGenerate` is used for the columns, the grid analyses the values in the first data record. If a value is of type string and matches the pattern of a url ending in an image extension (gif, jpg, jpeg, tiff, png, webp, bmp) then the column will automatically be marked as `dataType === GridColumnDataType.Image` and a default image template will be rendered.

### Currency

#### Default template

The default template will show a numeric value with currency symbol that would be either prefixed or suffixed.

By using the [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs) input the end-user can customize the number format by **decimal point**, **currencyCode** and **display**.

```html
<igc-column id="column" field="UnitsInStock" data-type="currency">
</igc-column>
```

```ts
public get formatOptions(): any {
    return {
        digitsInfo: '3.4-4',
        display: 'symbol-narrow'
    };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatOptions;
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

```html
<igc-column id="column" field="UnitsInStock" data-type="percent">
</igc-column>
```

```ts
public get formatPercentOptions(): any {
    return {
        /**
        * Decimal representation options, specified by a string in the following format:
        * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
        * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
        * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
        * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
        */
        digitsInfo: '2.2-3'
    };
}

constructor() {
    var column = document.getElementById('column') as IgcColumnComponent;
    column.pipeArgs = this.formatPercentOptions;
}
```

> [!Note]
> When using <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)

## Default Editing Template

See the editing templates part of [Tree Grid Editing topic](editing.md#editing-templates)

## Custom Editing Template and Formatter

Custom template and column formatter definition will always take precedence over the column data type set:

### Custom Template

```html
<igc-tree-grid id="grid1" auto-generate="false">
    <igc-column id="UnitsInStock" field="UnitsInStock" data-type="currency" editable="true">
    </igc-column>
</igc-tree-grid>
```

```ts
constructor() {
    var unitsInStock = document.getElementById('UnitsInStock') as IgcColumnComponent;
    unitsInStock.inlineEditorTemplate = this.editCellTemplate;
}

public editCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<input></input>`;
}
```

### Column Formatter

```html
<igc-tree-grid id="grid1" auto-generate="false">
    <igc-column id="UnitsInStock" field="UnitsInStock" data-type="currency">
    </igc-column>
</igc-tree-grid>
```

```ts
constructor() {
    var unitsInStock = this.unitsInStock = document.getElementById('UnitsInStock') as IgcColumnComponent;
    unitsInStock.formatter = this.formatCurrency;
}

public formatCurrency(value: number) {
    return `$ ${value.toFixed(0)}`;
}
```

## API References

- `Cell`
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs)
- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)
- `Locale`
- [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType)

## Additional Resources

- For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)
- [Editing](editing.md)
- [Summaries](summaries.md)
