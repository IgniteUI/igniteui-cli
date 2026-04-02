---
title: Web Components Data Grid Component - Infragistics
_description: Create super-fast, responsive Web Components Data Grids and tables with Ignite UI for Web Components. Supports editing, filtering, data binding and many more. Try it now!
_keywords: Web Components, Ignite UI for Web Components, Infragistics, Getting Started, Grid
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.ColumnPipeArgs"]
namespace: Infragistics.Controls
_tocName: Grid
---

<style>
    .sample-content {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .sample-column {
        display: flex;
        flex-flow: column nowrap;
        flex: 1 0 25%;
        align-content: flex-start;
        min-width: 280px;
    }

    .tabbar-wrapper {
        width: inherit;
        position: relative;
        height: 100%;
        margin: 0 auto;
    }

    .tabbar-wrapper > p {
        padding-right: 20px
    }
</style>

# Web Components Grid Overview and Configuration

<div class="sample-content">
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <p>The Web Components Data Grid component is used for displaying large volumes of data. Modern and more complex grids ensure smooth UX and bring an array of features for manipulating tabular data. There is an intuitive API, theming, branding, filtering, sorting, data selection, Excel-style filtering, and many more.</p>
            <p>The Ignite UI for Web Components Data Table / Data Grid is a tabular Web Components grid component that allows you to quickly bind and display your data with little coding or configuration. Features of the Web Components data grid in our toolbox include filtering, sorting, templates, row selection, row grouping, row pinning, movable columns, virtualization, Master-Detail, and much more.</p>
            <p>The Web Components tables are optimized for speed and performance, with the ability to handle millions of rows and columns, and real-time updates in an instant, making Ignite UI for Web Components Data Grid the best Web Components Data Grid on the market. </p>
        </div>
    </article>
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <div class="tab-content">
                <img class="b-lazy responsive-img"
                    src="../../images/general/landing-grid-page.png"
                    data-src="../../images/general/landing-grid-page.png"
                    data-srcset="../../images/general/landing-grid-page.png 480w, ../../images/general/landing-grid-page.png 768w, ../../images/general/landing-grid-page.png 1100w"
                    alt="Web Components Data Grid"
                    title="Web Components Data Grid Component - Infragistics">
            </div>
        </div>
    </article>
</div>

## Web Components Data Grid Example

In this Ignite UI for Web Components Grid example, you can see how users can do both basic and excel-style filtering, live-data sorting, and use grid summaries as well as cell templating. The demo also includes paging set to display 10 items per page.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```


<div class="divider--half"></div>

## Getting Started with Web Components Data Grid

### Dependencies

To get started with the Web Components Data Grid, first you need to install the `igniteui-webcomponents-grids` package.

```cmd
npm install --save igniteui-webcomponents-grids
```

You also need to include the following import to use the grid:

```typescript
import 'igniteui-webcomponents-grids/grids/combined.js';
```

The corresponding styles should also be referenced. You can choose light or dark option for one of the [themes](../themes/overview.md) and based on your project configuration to import it:

```typescript
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
```

Or to link it:

```typescript
<link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css'>
```

For more details on how to customize the appearance of the grid, you may have a look at the [styling](data-grid.md#styling-web-components-grid) section.

## Usage

Now that we have the grid packages imported, let’s get started with the basic configuration and bind to local data:

```html
<igc-grid id="grid1" auto-generate="true"></igc-grid>
```

```typescript
constructor() {
    let grid1 = document.getElementById("grid1") as IgcGridComponent;
    grid1.data = data;
}
```

The [`id`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#id) property is a string value and is the unique identifier of the grid which will be auto-generated if not provided, while `data` binds the grid, in this case to local data.

The [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#autoGenerate) property tells the grid to auto generate the grid's [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) components based on the data source fields. It will also try to deduce the appropriate data type for the column if possible. Otherwise, the developer needs to explicitly define the columns and the mapping to the data source fields.

## Editable Web Components Grid

Each operation for grid editing includes batch operations, meaning the API gives you the option to group edits into a single server call, or you can perform grid edit / update operations as they occur with grid interactions. Along with a great developer experience as an editable grid with CRUD operations, the grid includes Excel-like keyboard navigation. Common default grid navigation is included, plus the option to override any navigation option to meet the needs of your customers. An editable grid in with a great navigation scheme is critical to any modern line of business application, with the Ignite UI grid we make it easy.

Following this topic you will learn more about [cell template](data-grid.md#cell-template) and [cell editing template](data-grid.md#cell-editing-template) and editing.

## Grid Column Configuration

[`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) is used to define the grid's columns collection and to enable features per column like **sorting** and **filtering**. Cell, header, and footer templates are also available.

### Defining Columns

Let's turn the [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#autoGenerate) property off and define the columns collection in the markup:

```html
<igc-grid id="grid1" auto-generate="false" allow-filtering="true">
    <igc-column field="Name" sortable="true" header=" "></igc-column>
    <igc-column field="AthleteNumber" sortable="true" header="Athlete number" filterable="false"></igc-column>
    <igc-column id="trackProgress" field="TrackProgress" header="Track progress" filterable="false"></igc-column>
</igc-grid>
```

```typescript
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    grid1.data = this.data;
}
```

### Header Template

The header template can be set to modify the column headers. The snippets below show you how to format the header text to upper case.

```html
<igc-column id="name" field="Name"></igc-column>
```

```typescript
constructor() {
    var name = this.name = document.getElementById('name') as IgcColumnComponent;

    this._bind = () => {
        name.headerTemplate = this.nameHeaderTemplate;
    }

    this._bind();
}

public nameHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        ${this.formatUppercase(ctx.column.field)}
    `;
}

public formatUppercase(value: string) {
    return value.toUpperCase();
}
```

### Cell Template

When cell template is set it changes all the cells in the column. The context object provided in the template consists of the cell value provided implicitly and the cell object itself. It can be used to define a template where the cells' text could be formatted e.g. as title case.

```html
<igc-column id="name" field="Name"></igc-column>
```

```typescript
constructor() {
    var name = this.name = document.getElementById('name') as IgcColumnComponent;
    name.bodyTemplate = this.nameCellTemplate;
}

public nameCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        ${this.formatTitleCase(ctx.implicit)}
    `;
}

public formatTitleCase(value: string) {
    return value.toUpperCase();
}
```

In the snippet above we take a reference to the implicitly provided cell value. This is sufficient if you just want to present some data and maybe apply some custom styling or pipe transforms over the value of the cell. However even more useful is to take the `Cell` instance itself as shown below:

```html
<igc-grid id="grid" auto-generate="false">
    <igc-column id="name" field="Name" data-type="string"></igc-column>
    <igc-column id="subscription" field="Subscription" data-type="boolean"></igc-column>
</igc-grid>
```

```typescript
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var name = this.name = document.getElementById('name') as IgcColumnComponent;
    var subscription = this.subscription = document.getElementById('subscription') as IgcColumnComponent;
    grid.data = this.data;
    name.bodyTemplate = this.nameCellTemplate;
    subscription.bodyTemplate = this.subscriptionCellTemplate;
}

public nameCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <span tabindex="0" @keydown="${() => this.deleteRow(ctx.cell.id.rowIndex)}">${this.formatTitleCase(ctx.cell.value)}</span>
    `;
}

public subscriptionCellTemplate = (ctx: IgcCellTemplateContext) => {
    if (ctx.cell.value) {
            return html` <input type="checkbox" checked /> `;
    } else {
            return html` <input type="checkbox"/> `;
    }
}

public deleteRow(rowIndex: number) {
     this.grid.deleteRow(rowIndex);
}

public formatTitleCase(value: string) {
    return value.toUpperCase();
}
```

> **Note**:
> The grid exposes a default handling for number, string, date and boolean column types. For example, the column will display `check` or `close` icon, instead of true/false by default, for boolean column type.

When properly implemented, the cell editing template also ensures that the cell's `EditValue` will correctly pass through the grid [editing event cycle](grid/editing.md#event-arguments-and-sequence).

### Cell Editing Template

The column also accepts one last template that will be used when a cell is in edit mode. As with the other column templates, the provided context object is again the cell value and the cell object itself. Of course in order to make the edit-mode template accessible to end users, you need
to set the [`editable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#editable) property of the column to true.

```html
<igc-column id="price" field="Price" data-type="number" editable="true"></igc-column>
```

```typescript
constructor() {
    var price = this.price = document.getElementById('price') as IgcColumnComponent;
    price.inlineEditorTemplate = this.priceCellTemplate;
}

public priceCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <label>
            Enter the new price tag
        </label>
        <input name="price" type="number" value="${ctx.cell.value}" @change="${() => this.updateValue(ctx.cell.value)}"  />
    `;
}

public updateValue(value: number) {
}
```

Make sure to check the API for the `Cell` in order to get accustomed with the provided properties you can use in your templates.

### Column Template API

Each of the column templates can be changed programmatically at any point through the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) object itself. For example in the code below, we have declared two templates for our user data. In our TypeScript code we'll get references to the templates themselves and then based on some condition we will render the appropriate template for the column in our application.

```html
<igc-grid>
    <!-- Column declarations -->
</igc-grid>
```

```typescript
var user = this.user = document.getElementById('user') as IgcColumnComponent;
// Return the appropriate template based on some condition.
// For example saved user settings, viewport size, etc.
user.bodyTemplate = this.smallView;

public normalViewTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="user-details">${ ctx.cell.value }</div>
        <user-details-component></user-details-component>
    `;
}

public smallViewTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="user-details-small">${ ctx.cell.value }</div>
    `;
}
```

Column properties can also be set in code in the `ColumnInit` event which is emitted when the columns are initialized in the grid.

```typescript
public initColumns(column: IgcGridColumn) {
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```

The code above will make the **ProductName** column sortable and editable and will instantiate the corresponding features UI (like inputs for editing, etc.).

### Custom Display Format

There are optional parameters for formatting:

- [`format`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfieldpipeargs.html#format) - determines what date/time parts are displayed, defaults to `'mediumDate'`, equivalent to **'MMM d, y'**
- [`timezone`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfieldpipeargs.html#timezone) - the timezone offset for dates. By default uses the end-user's local system timezone
- [`digitsInfo`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfieldpipeargs.html#digitsInfo) - decimal representation objects. Default to **1.0-3**

To allow customizing the display format by these parameters, the [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs) input is exposed. A column will respect only the corresponding properties for its data type, if [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs) is set. Example:

```html
<igc-column id="orderDate" field="OrderDate" data-type="date"></igc-column>
```

```typescript
private _columnPipeArgs: any | null = null;
    public get columnPipeArgs(): any {
        if (this._columnPipeArgs == null)
        {
            var columnPipeArgs: any = {};
            columnPipeArgs.format = "longDate";
            columnPipeArgs.timezone = "UTC";
            columnPipeArgs.digitsInfo = "1.2-2"
            this._columnPipeArgs = columnPipeArgs;
        }
        return this._columnPipeArgs;
    }

constructor() {
    var orderDate = this.orderDate = document.getElementById('orderDate') as IgcColumnComponent;
    orderDate.pipeArgs = this.columnPipeArgs;
}
```

The `OrderDate` column will respect only the [`format`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfieldpipeargs.html#format) and [`timezone`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfieldpipeargs.html#timezone) properties, while the `UnitPrice` will only respect the [`digitsInfo`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfieldpipeargs.html#digitsInfo).

All available column data types could be found in the official [Column types topic](grid/column-types.md#default-template).

## Grid Data Structure

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) handles **flat data** and nested **POJO (Plain old Java objects)**. The data structure specific for rendering is in the form:

```typescript
const OBJECT_ARRAY = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        // ...
        ObjectKeyN: valueN
    },
    // ...
  }];

const POJO = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        // ...
        ObjectKeyN: {
          ObjectKeyN1: value1,
          ObjectKeyN2: value2,
          // ...
          ObjectKeyNM: valueNM,
        }
    },
    // ...
  }];
```

> **WARNING**:
> **The key values must not contain arrays**.

> If you use [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#autoGenerate) columns **the data keys must be identical.**

## Grid Data Binding

Our Web Components Data Grid provides unmatched data binding options and is optimized for real-time updates and smooth scrolling. With low-latency rendering, the grid ensures any UI change is displayed in an instant, including live streaming data, large datasets, and more.

Before going any further with the Web Components Data Grid we want to change the grid to bind to remote data service, which is the common scenario in large-scale applications.

You can do this by fetching the data from a given url receiving a JSON response and assigning it to the grid's `data` property that is used as the grid's data source:

```html
<igc-grid id="grid1"></igc-grid>
```

```typescript
public fetchData(url: string): void {
    fetch(url)
      .then(response => response.json())
      .then(data => this.onDataLoaded(data));
}
public onDataLoaded(jsonData: any[]) {
    var grid1 = document.getElementById("grid1") as IgcGridComponent;
    grid1.data = jsonData;
}
```

**Note**: The grid [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#autoGenerate) property is best to be avoided when binding to remote data for now. It assumes that the data is available in order to inspect it and generate the appropriate columns. This is usually not the case until the remote service responds, and the grid will throw an error. Making [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#autoGenerate) available, when binding to remote service, is on our roadmap for future versions.

## Complex Data Binding

Complex Data Binding allows for seamless interaction with multi-level data, complex, real-world datasets, object-oriented data modules, etc. Using our Web Components Data Grid, you can easily bind to complex objects (including data structures that nest deeper than one level). This happens through a path of properties in the data record.

Take a look at the following data model:

```typescript
interface AminoAcid {
    name: string;
    abbreviation: {
        short: string;
        long: string;
    }
    weight: {
        molecular: number;
        residue: number;
    },
    formula: {
        molecular: string;
        residue: string;
    }
}
```

For example, in order to display the weights of a given amino acid in the grid the following snippet will suffice

```html
<igc-column field="weight.molecular"></igc-column>
<igc-column field="weight.residue"></igc-column>
```

An alternative way to bind complex data, or to visualize composite data (from more than one column) in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) is to use a custom body template for the column. Generally, one can:

- use the `value` of the cell, that contains the nested data

<!---->

- use the `cell` object in the template, from which to access the `ctx.cell.id.rowIndex` or `ctx.cell.id.rowID` to get the row via the grid's API and retrieve any value from it and interpolate those in the template.

```html
<igc-column id="abbreviationLong" field="abbreviation.long"></igc-column>
```

```typescript
constructor() {
    var grid = (this.grid = document.getElementById("grid") as IgcGridComponent);
    var abbreviationLong = this.abbreviationLong = document.getElementById('abbreviationLong') as IgcColumnComponent;
    abbreviationLong.bodyTemplate = this.abbreviationLongCellTemplate;
}

public abbreviationLongCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div>
            <div>
                ${ ctx.cell.value }
                    ${this.getName(ctx.cell.id.rowIndex)}
                    ${this.getWeight(ctx.cell.id.rowIndex)}
            </div>
        </div>
    `;
}

public getName(rowIndex: number) {
    return this.grid.getRowByIndex(rowIndex).data["Name"];
}
public getWeight(rowIndex: number) {
    return this.grid.getRowByIndex(rowIndex).data["weight"]["molecular"];
}
```

Here is an example on how body template is used to display complex data. Below is the data that we are going to use:

```typescript
export const EMPLOYEE_DATA = [
    {
        Age: 55,
        Employees: [
            {
                Age: 43,
                HireDate: new Date(2011, 6, 3),
                ID: 3,
                Name: "Michael Burke",
                Title: "Senior Software Developer"
            },
            {
                Age: 29,
                HireDate: new Date(2009, 6, 19),
                ID: 2,
                Name: "Thomas Anderson",
                Title: "Senior Software Developer"
            },
            {
                Age: 31,
                HireDate: new Date(2014, 8, 18),
                ID: 11,
                Name: "Monica Reyes",
                Title: "Software Development Team Lead"
            },
            {
                Age: 35,
                HireDate: new Date(2015, 9, 17),
                ID: 6,
                Name: "Roland Mendel",
                Title: "Senior Software Developer"
            }],
        HireDate: new Date(2008, 3, 20),
        ID: 1,
        Name: "John Winchester",
        Title: "Development Manager"
    }
]
```

The custom template for the column, that will render the nested data:

```html
<igc-column id="employees" field="Employees" header="Employees" width="40%"></igc-column>
```

```typescript
constructor() {
    var employees = this.employees = document.getElementById('employees') as IgcColumnComponent;
    employees.bodyTemplate = this.addressCellTemplate;
}

public addressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
    <igc-expansion-panel>
            <div slot="title" style="font-size: 1.1em; font-weight: bold; margin-top: 1rem; margin-bottom: 0.25rem;">
            ${ctx.cell.value[0].Name}
            </div>
            <div class="description">
                <div style="display: flex; align-items: center;">
                    <div for="title" style="width: 2rem; margin: 0rem;">Title</div>
                    <input id='Title' type="text" name="title" value="${ctx.cell.value[0].Title}" style="text-overflow: ellipsis;" />
                </div>
                <div style="display: flex; align-items: center;">
                    <div for="age" style="width: 2rem; margin: 0rem;">Age</div>
                    <input id='Age' type="text" name="title" value="${ctx.cell.value[0].Age}" style="text-overflow: ellipsis;" />
                </div>
            </div>
        </igc-expansion-panel>
    `;
}
```

And the result from this configuration is:

```typescript
export class EmployeesNestedDataItem {
    public constructor(init: Partial<EmployeesNestedDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public Name: string;
    public Title: string;
    public Employees: EmployeesNestedDataItem_EmployeesItem[];

}
export class EmployeesNestedDataItem_EmployeesItem {
    public constructor(init: Partial<EmployeesNestedDataItem_EmployeesItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Title: string;

}
export class EmployeesNestedData extends Array<EmployeesNestedDataItem> {
    public constructor(items: Array<EmployeesNestedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedDataItem({ ID: 1, Age: 55, Salary: 80000, Productivity: 90, City: `Berlin`, Country: `Germany`, Phone: `609-202-505`, HireDate: `2008-03-20`, Name: `John Winchester`, Title: `Development Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 43, Salary: 70000, Productivity: 80, City: `Hamburg`, Country: `Germany`, Phone: `609-444-555`, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 60000, Productivity: 80, City: `Munich`, Country: `Germany`, Phone: `609-333-444`, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, Title: `Senior Software Developer` }),
                // ... 20 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Working with Flat Data Overview

The flat data binding approach is similar to the one that we already described above, but instead of **cell value** we are going to use the [`data`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#data) property of the [`IgcGridRowComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridrowcomponent.html).

Since the Web Components grid is a component for **rendering**, **manipulating** and **preserving** data records, having access to **every data record** gives you the opportunity to customize the approach of handling it. The `data` property provides you this opportunity.

Below is the data that we are going to use:

```typescript
export const DATA: any[] = [
    {
        Address: "Obere Str. 57",
        City: "Berlin",
        CompanyName: "Alfreds Futterkiste",
        ContactName: "Maria Anders",
        ContactTitle: "Sales Representative",
        Country: "Germany",
        Fax: "030-0076545",
        ID: "ALFKI",
        Phone: "030-0074321",
        PostalCode: "12209",
        Region: null
    }
]
```

The custom template:

```html
<igc-column id="address" field="Address" header="Address" width="25%" editable="true"></igc-column>
```

```typescript
constructor() {
    var address = this.address = document.getElementById('address') as IgcColumnComponent;
    address.bodyTemplate = this.addressCellTemplate;
}

public addressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="address-container">
        <!-- In the Address column combine the Country, City and PostCode values of the corresponding data record -->
            <span><strong>Country:</strong> ${this.getCountry(ctx.cell.id.rowIndex)}</span>
            <br/>
            <span><strong>City:</strong> ${this.getCity(ctx.cell.id.rowIndex)}</span>
            <br/>
            <span><strong>Postal Code:</strong> ${this.getPostalCode(ctx.cell.id.rowIndex)}</span>
        </div>
    `;
}

public getCountry(rowIndex: number) {
    return this.grid.getRowByIndex(rowIndex).data["Country"];
}

public getCity(rowIndex: number) {
     return this.grid.getRowByIndex(rowIndex).data["City"];
}

public getPostalCode(rowIndex: number) {
     return this.grid.getRowByIndex(rowIndex).data["PostalCode"];
}
```

Keep in mind that with the above defined template you will not be able to make editing operations, so we need an editor template.

```html
<igc-column id="address" field="Address" data-type="number" width="25%" editable="true"></igc-column>
```

```typescript
constructor() {
    var address = this.address = document.getElementById('address') as IgcColumnComponent;
    address.inlineEditorTemplate = this.webGridCompositeAddressEditCellTemplate;
}

public webGridCompositeAddressEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    var cell = ctx.cell as any;
    if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
        return html``
    }

    function keyUpHandler(event: any, ctx: IgcCellTemplateContext) {
        var cell = ctx.cell as any;
        if (cell !== undefined && cell.row !== undefined && cell.row.data !== undefined) {
            cell.row.data[event.target.id] = event.target.value;
        }
        }

    return html`<div class="address-container--edit" style="display: inline-grid">
            <div>
                <span><strong>Country:</strong></span>
                <input id='Country' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.Country}"></input>
                <br>
                <span><strong>City:</strong></span>
                <input id='City' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.City}"></input>
            </div>
            <div>
                <span><strong>Postal Code:</strong></span>
                <input id='PostalCode' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.PostalCode}"></input>
                <br>
                <span><strong>Selected:</strong></span>
                <input id='Phone' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.Phone}"></input>
            </div>
            <br>
        </div>`;
}
```

### Working with Flat Data Example

Using code snippets from previous section will result in the following example of [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                // ... 24 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Keyboard Navigation

Keyboard navigation of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) provides a rich variety of keyboard interactions for the user. It enhances accessibility and allows intuitive navigation through any type of elements inside (cell, row, column header, toolbar, footer, etc.).

<!-- The sizing topic is still not available thus the Sizing section is commented out. -->

<!-- ## Sizing

See the [Grid Sizing](sizing.md) topic. -->

## Styling Web Components Grid

> **Note**:
> The grid uses **css grid layout**, which is **not supported in IE without prefixing**, consequently it will not render properly.

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grids/theming-grid.md). In case you would like to change the header background and text color, you need to set a class for the grid first:

```html
<igc-grid class="grid"></igc-grid>
```

Then set the `--header-background` and `--header-text-color` CSS properties for that class:

```css
.grid {
    --header-background: #494949;
    --header-text-color: #FFF;
}
```

## Known Limitations

|Limitation|Description|
|--- |--- |
|Column widths set in `percentage` and `px`|Currently we do not support mixing of column widths with `%` and `px`.|
|When trying to filter a column of type `number`|If a value different than `number` is entered into the filtering input, `NaN` is returned due to an incorrect cast.|
|Grid `width` does not depend on the column widths | The `width` of all columns does not determine the spanning of the grid itself. It is determined by the parent container dimensions or the defined grid's `width`.|
|Grid nested in parent container | When grid's `width` is not set and it is placed in a parent container with defined dimensions, the grid spans to this container.|
| Columns have a minimum allowed column width. Depending on the `--ig-size` CSS variable, they are as follows: <br/>"small": 56px <br/> "medium": 64px <br/> "large ": 80px | If width less than the minimum allowed is set it will not affect the rendered elements. They will render with the minimum allowed width for the corresponding `--ig-size`. This may lead to an unexpected behavior with horizontal virtualization and is therefore not supported.
| Row height is not affected by the height of cells that are not currently rendered in view. | Because of virtualization a column with a custom template (that changes the cell height) that is not in the view will not affect the row height. The row height will be affected only while the related column is scrolled in the view.

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- `Cell`
- [`IgcCellTemplateContext`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccelltemplatecontext.html)
- [`IgcGridRowComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridrowcomponent.html)
- [`IgcGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html)
- [`IgcPaginatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginatorcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
