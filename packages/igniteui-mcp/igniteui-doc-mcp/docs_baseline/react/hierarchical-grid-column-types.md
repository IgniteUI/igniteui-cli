---
title: React Hierarchical Grid Column Data Types - Ignite UI for React
_description: Handle cell and editing templates in React by choosing from several predefined column data types - number, string, date, boolean, currency and percent column.
_keywords: Column Data Type , React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-types
_tocName: Column Types
_premium: true
---

# React Hierarchical Grid Column Types Overview

The React Hierarchical Grid provides a default handling of **number**, **string**, **date**, **boolean**, **currency** and **percent** column data types, based on which the appearance of the default and editing templates will be present.

## React Hierarchical Grid Default Template

If you want to enable a data type-specific template, you should set the column [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) input, otherwise the column will be treated as a string column since that is the default value for column [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType).

The following sections describe the default templates for each [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType).

### String

This column [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) is not changing the appearance or format of the cell value.

### Number

If the [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) is set to **number**, the cell value will be formatted based on application or grid's [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) settings, as well as when [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs) property is specified. Then the number format will be changed based on them, for example it might change the:

- Number of digits after the decimal point
- Decimal separator with `,` or `.`

```tsx
const formatOptions : IgrColumnPipeArgs = {
    digitsInfo: "1.4-4"
};

<IgrColumn pipeArgs={formatOptions} dataType="number"></IgrColumn>
```

### DateTime, Date and Time

The appearance of the date portions will be set (e.g. day, month, year) based on [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) format or [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs) input. The pipe arguments can be used to specify a custom date format or timezone:

- **format** - The default value for formatting the date is `'mediumDate'`. Other available options are `'short'`, `'long'`, `'shortDate'`, `'fullDate'`, `'longTime'`, `'fullTime'` and etc.
- **timezone** - The user's local system timezone is the default value. The timezone offset or standard GMT/UTC or continental US timezone abbreviation can also be passed. Different timezone examples which will display the corresponding time of the location anywhere in the world:

```tsx
const formatOptions : IgrColumnPipeArgs = {
    format: "long",
    timezone: "UTC+0"
};

<IgrColumn pipeArgs={formatOptions} dataType="date"></IgrColumn>
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

The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) accepts date values of type **Date object**, **Number (milliseconds)**, **An ISO date-time string**. This section shows [how to configure a custom display format](../data-grid.md#custom-display-format).

As you can see in the sample, we specify a different format options in order to showcase the available formats for the specific column type. For example, below you can find the format options for the **time** portion of the date object:

```tsx
const timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },
];
```

#### Cell Editing

When it comes to cell editing based on the column type a different editor will appear:

- `DateTime` - `DateTimeEditor` will be used. This editor will give you a mask directions for the input elements part of the `DateTime` object.
- `Date` - [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html) will be used.
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

The default template is using material icons for visualization of boolean values - 'clear' icon for **false** values and 'check' icon for **true** values. As for the editing template, it is using [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html) component.

```tsx
<IgrColumn dataType="boolean"></IgrColumn>
```

### Image

Default template is using the value coming from the data as an image source to a default image template. The default image template will extract the name of the image file and set it as `alt` attribute of the image to meet the accessibility requirement. The displayed cell size is adjusted to the sizes of the images rendered, so keep in mind that large images will still be rendered and the grid rows will become as large as the images in the image column. Filtering, sorting and grouping will be turned off by default for image type columns. If you want to enable them, you need to provide custom strategies which perform the data operations.

```tsx
<IgrColumn field="Image" dataType="image"></IgrColumn>
```

When [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#autoGenerate) is used for the columns, the grid analyses the values in the first data record. If a value is of type string and matches the pattern of a url ending in an image extension (gif, jpg, jpeg, tiff, png, webp, bmp) then the column will automatically be marked as `dataType === GridColumnDataType.Image` and a default image template will be rendered.

### Currency

#### Default template

The default template will show a numeric value with currency symbol that would be either prefixed or suffixed.

By using the [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs) input the end-user can customize the number format by **decimal point**, **currencyCode** and **display**.

```tsx
const formatOptions : IgrColumnPipeArgs = {
    digitsInfo: "1.4-4",
    display: "symbol-narrow"
};

<IgrColumn pipeArgs={formatOptions} dataType="currency" field="UnitsInStock"></IgrColumn>
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

```tsx
/**
- Decimal representation options, specified by a string in the following format:
- `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
- `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
- `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
- `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
*/
const formatOptions : IgrColumnPipeArgs = {
    digitsInfo: "2.2-3"
};

<IgrColumn pipeArgs={formatOptions} dataType="percent"></IgrColumn>
```

> [!Note]
> When using <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)

## Default Editing Template

See the editing templates part of [Hierarchical Grid Editing topic](editing.md#editing-templates)

## Custom Editing Template and Formatter

Custom template and column formatter definition will always take precedence over the column data type set:

### Custom Template

```tsx
const editCellTemplate = (ctx: IgrCellTemplateContext) => {
    return (
        <>
            <input></input>
        </>
    );
}

<IgrHierarchicalGrid autoGenerate={false}>
    <IgrColumn inlineEditorTemplate={editCellTemplate}></IgrColumn>
</IgrHierarchicalGrid>
```

### Column Formatter

```tsx
const formatCurrency = (value: number) => {
    return `$ ${value.toFixed(0)}`;
}

<IgrHierarchicalGrid autoGenerate={false}>
    <IgrColumn formatter={formatCurrency} field="UnitsInStock"></IgrColumn>
</IgrHierarchicalGrid>
```

## API References

- `Cell`
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs)
- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale)
- [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType)

## Additional Resources

- For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)
- [Editing](editing.md)
- [Summaries](summaries.md)
