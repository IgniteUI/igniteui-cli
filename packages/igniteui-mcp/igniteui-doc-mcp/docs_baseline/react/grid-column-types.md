---
title: React Grid Column Data Types - Ignite UI for React
_description: Handle cell and editing templates in React by choosing from several predefined column data types - number, string, date, boolean, currency and percent column.
_keywords: Column Data Type , React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-types
_tocName: Column Types
_premium: true
---

# React Grid Column Types Overview

The React Grid provides a default handling of **number**, **string**, **date**, **boolean**, **currency** and **percent** column data types, based on which the appearance of the default and editing templates will be present.

<!-- ComponentStart: Grid, TreeGrid -->

## React Grid Column Types Example

```typescript
//begin data
export class InvoicesDataExtendedDates extends Array<Invoice>
{
    public constructor() {
        super();
        this.push(new Invoice(
                {
                    ProductID: 1,
                    ProductName: "Chai",
                    SupplierID: 1,
                    CategoryID: 1,
                    QuantityPerUnit: "10 boxes x 20 bags",
                    UnitPrice: 18.0000,
                    UnitsInStock: 39,
                    UnitsOnOrder: 0.030,
                    ReorderLevel: 10,
                    Discontinued: false,
                    OrderDate: new Date("2012-02-12"),
                    OrderDateDelay: new Date("2012-02-12"),
                    OrderFullDate: new Date("2012-02-12")
                }));
                this.push(new Invoice(
                {
                    ProductID: 2,
                    ProductName: "Chang",
                    SupplierID: 1,
                    CategoryID: 1,
                    QuantityPerUnit: "24 - 12 oz bottles",
                    UnitPrice: 19.0000,
                    UnitsInStock: 17,
                    UnitsOnOrder: 0.040,
                    ReorderLevel: 25,
                    Discontinued: true,
                    OrderDate: new Date("2003-03-17"),
                    OrderDateDelay: new Date("2003-03-17"),
                    OrderFullDate: new Date("2003-03-17")
                }));
                this.push(new Invoice(
                {
                    ProductID: 3,
                    ProductName: "Aniseed Syrup",
                    SupplierID: 1,
                    CategoryID: 2,
                    QuantityPerUnit: "12 - 550 ml bottles",
                    UnitPrice: 10.0000,
                    UnitsInStock: 13,
                    UnitsOnOrder: 0.070,
                    ReorderLevel: 25,
                    Discontinued: false,
                    OrderDate: new Date("2006-03-17"),
                    OrderDateDelay: new Date("2006-03-17"),
                    OrderFullDate: new Date("2006-03-17")
                }));
        // ... 6 more items
    }

}

export class Invoice
{
    public constructor(init: Partial<Invoice>) {
        Object.assign(this, init);
    }
    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;
    public OrderDate: Date;
    public OrderDateDelay: Date;
    public OrderFullDate: Date;
}
//end data
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-small);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { InvoicesDataExtendedDates } from './InvoicesDataExtendedDates';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "";
            columnPipeArgs1.digitsInfo = "1.4-4";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private  _columnPipeArgs2: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs2(): IgrColumnPipeArgs {
        if (this._columnPipeArgs2 == null)
        {
            var columnPipeArgs2: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs2.format = "long";
            columnPipeArgs2.timezone = "UTC+0";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }
    private  _columnPipeArgs3: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs3(): IgrColumnPipeArgs {
        if (this._columnPipeArgs3 == null)
        {
            var columnPipeArgs3: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs3.format = "mediumDate";

            this._columnPipeArgs3 = columnPipeArgs3;
        }
        return this._columnPipeArgs3;
    }
    private  _columnPipeArgs4: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs4(): IgrColumnPipeArgs {
        if (this._columnPipeArgs4 == null)
        {
            var columnPipeArgs4: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs4.format = "shortTime";
            columnPipeArgs4.timezone = "UTC+0";

            this._columnPipeArgs4 = columnPipeArgs4;
        }
        return this._columnPipeArgs4;
    }
    private  _columnPipeArgs5: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs5(): IgrColumnPipeArgs {
        if (this._columnPipeArgs5 == null)
        {
            var columnPipeArgs5: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs5.currencyCode = "";
            columnPipeArgs5.digitsInfo = "1.4-4";

            this._columnPipeArgs5 = columnPipeArgs5;
        }
        return this._columnPipeArgs5;
    }
    private  _columnPipeArgs6: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs6(): IgrColumnPipeArgs {
        if (this._columnPipeArgs6 == null)
        {
            var columnPipeArgs6: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs6.currencyCode = "";
            columnPipeArgs6.digitsInfo = "1.4-4";

            this._columnPipeArgs6 = columnPipeArgs6;
        }
        return this._columnPipeArgs6;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.invoicesDataExtendedDates}
                    ref={this.gridRef}
                    id="grid"
                    allowFiltering={true}
                    filterMode="excelStyleFilter"
                    locale="EN">
                    <IgrColumn
                        field="ProductName"
                        header="Prod. Name"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="number"
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderFullDate"
                        header="Order Full Date"
                        width="300px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="dateTime"
                        pipeArgs={this.columnPipeArgs2}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        width="160px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="date"
                        pipeArgs={this.columnPipeArgs3}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDateDelay"
                        header="Order Time"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="time"
                        pipeArgs={this.columnPipeArgs4}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Stock Value"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs5}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsOnOrder"
                        header="% Change"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="percent"
                        pipeArgs={this.columnPipeArgs6}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        width="160px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="boolean">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesDataExtendedDates: InvoicesDataExtendedDates = null;
    public get invoicesDataExtendedDates(): InvoicesDataExtendedDates {
        if (this._invoicesDataExtendedDates == null)
        {
            this._invoicesDataExtendedDates = new InvoicesDataExtendedDates();
        }
        return this._invoicesDataExtendedDates;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentEnd: Grid, TreeGrid -->

## React Grid Default Template

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

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) accepts date values of type **Date object**, **Number (milliseconds)**, **An ISO date-time string**. This section shows [how to configure a custom display format](../data-grid.md#custom-display-format).

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

<!-- ComponentStart: Grid -->

Upon editing of cell's value the **currency symbol** will be visible as suffix or prefix. More about that could be found in the official [Cell editing topic](cell-editing.md#react-grid-cell-editing-and-edit-templates-example).

<!-- ComponentEnd: Grid -->

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

See the editing templates part of [Grid Editing topic](editing.md#editing-templates)

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

<IgrGrid autoGenerate={false}>
    <IgrColumn inlineEditorTemplate={editCellTemplate}></IgrColumn>
</IgrGrid>
```

### Column Formatter

```tsx
const formatCurrency = (value: number) => {
    return `$ ${value.toFixed(0)}`;
}

<IgrGrid autoGenerate={false}>
    <IgrColumn formatter={formatCurrency} field="UnitsInStock"></IgrColumn>
</IgrGrid>
```

## API References

- `Cell`
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale)
- [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType)

## Additional Resources

- For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)
- [Editing](editing.md)
- [Summaries](summaries.md)
