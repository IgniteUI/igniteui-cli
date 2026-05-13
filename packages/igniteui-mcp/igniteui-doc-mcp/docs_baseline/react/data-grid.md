---
title: React Data Grid Component - Infragistics
_description: Create super-fast, responsive React Data Grids and tables with Ignite UI for React. Supports editing, filtering, data binding and many more. Try it now!
_keywords: React, Ignite UI for React, Infragistics, Getting Started, Grid
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

# React Grid Overview and Configuration

<div class="sample-content">
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <p>The React Data Grid component is used for displaying large volumes of data. Modern and more complex grids ensure smooth UX and bring an array of features for manipulating tabular data. There is an intuitive API, theming, branding, filtering, sorting, data selection, Excel-style filtering, and many more.</p>
            <p>The Ignite UI for React Data Table / Data Grid is a tabular React grid component that allows you to quickly bind and display your data with little coding or configuration. Features of the React data grid in our toolbox include filtering, sorting, templates, row selection, row grouping, row pinning, movable columns, virtualization, Master-Detail, and much more.</p>
            <p>The React tables are optimized for speed and performance, with the ability to handle millions of rows and columns, and real-time updates in an instant, making Ignite UI for React Data Grid the best React Data Grid on the market. </p>
        </div>
    </article>
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <div class="tab-content">
                <img class="b-lazy responsive-img"
                    src="../../images/general/landing-grid-page.png"
                    data-src="../../images/general/landing-grid-page.png"
                    data-srcset="../../images/general/landing-grid-page.png 480w, ../../images/general/landing-grid-page.png 768w, ../../images/general/landing-grid-page.png 1100w"
                    alt="React Data Grid"
                    title="React Data Grid Component - Infragistics">
            </div>
        </div>
    </article>
</div>

## React Data Grid Example

In this Ignite UI for React Grid example, you can see how users can do both basic and excel-style filtering, live-data sorting, and use grid summaries as well as cell templating. The demo also includes paging set to display 10 items per page.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import NwindData from './NwindData.json';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    allowFiltering={true}
                    filterMode="excelStyleFilter">
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        bodyTemplate={this.webGridBooleanCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        filterable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }


    public webGridBooleanCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Getting Started with React Data Grid

### Dependencies

To get started with the React Data Grid, first you need to install the `igniteui-react` and `igniteui-react-grids` packages.

```cmd
npm install --save igniteui-react
npm install --save igniteui-react-grids
```

You also need to include the following import to use the grid:

```tsx
import { IgrGrid } from "igniteui-react-grids";
```

The corresponding styles should also be referenced. You can choose light or dark option for one of the [themes](../themes/overview.md) and based on your project configuration to import it:

```tsx
import 'igniteui-react-grids/grids/themes/light/bootstrap.css'
```

For more details on how to customize the appearance of the grid, you may have a look at the [styling](data-grid.md#styling-react-grid) section.

## Usage

Now that we have the grid packages imported, let’s get started with the basic configuration and bind to local data:

```tsx
<IgrGrid id="grid1" autoGenerate={true} data={localData}></IgrGrid>
```

The [`id`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#id) property is a string value and is the unique identifier of the grid which will be auto-generated if not provided, while `data` binds the grid, in this case to local data.

The [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#autoGenerate) property tells the grid to auto generate the grid's [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) components based on the data source fields. It will also try to deduce the appropriate data type for the column if possible. Otherwise, the developer needs to explicitly define the columns and the mapping to the data source fields.

## Editable React Grid

Each operation for grid editing includes batch operations, meaning the API gives you the option to group edits into a single server call, or you can perform grid edit / update operations as they occur with grid interactions. Along with a great developer experience as an editable grid with CRUD operations, the grid includes Excel-like keyboard navigation. Common default grid navigation is included, plus the option to override any navigation option to meet the needs of your customers. An editable grid in with a great navigation scheme is critical to any modern line of business application, with the Ignite UI grid we make it easy.

Following this topic you will learn more about [cell template](data-grid.md#cell-template) and [cell editing template](data-grid.md#cell-editing-template) and editing.

## Grid Column Configuration

[`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) is used to define the grid's columns collection and to enable features per column like **sorting** and **filtering**. Cell, header, and footer templates are also available.

### Defining Columns

Let's turn the [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#autoGenerate) property off and define the columns collection in the markup:

```tsx
<IgrGrid id="grid1" autoGenerate={false} allowFiltering={true} data={localData}>
    <IgrColumn field="Name" sortable={true}></igc-column>
    <IgrColumn field="AthleteNumber" header="Athlete number" filterable={false} sortable={true}></IgrColumn>
    <IgrColumn field="TrackProgress" header="Track progress" filterable={false}></IgrColumn>
</IgrGrid>
```

### Header Template

The header template can be set to modify the column headers. The snippets below show you how to format the header text to upper case.

```tsx
function nameHeaderTemplate(ctx: IgrColumnTemplateContext) {
    return (
        <>
            {formatUppercase(ctx.column.field)}
        </>
    );
}

function formatUppercase(value: string) {
    return value.toUpperCase();
}

<IgrColumn field="Name" headerTemplate={nameHeaderTemplate}></IgrColumn>
```

### Cell Template

When cell template is set it changes all the cells in the column. The context object provided in the template consists of the cell value provided implicitly and the cell object itself. It can be used to define a template where the cells' text could be formatted e.g. as title case.

```tsx
function formatTitleCase(value: string) {
    return value.toUpperCase();
}

function nameCellTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            {formatTitleCase(ctx.implicit)}
        </>
    );
}

<IgrColumn field="Name" bodyTemplate={nameCellTemplate}></IgrColumn>
```

In the snippet above we take a reference to the implicitly provided cell value. This is sufficient if you just want to present some data and maybe apply some custom styling or pipe transforms over the value of the cell. However even more useful is to take the `Cell` instance itself as shown below:

```tsx
function nameCellTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            <span tabIndex={0} onClick={() => deleteRow(ctx.cell.id.rowID)}>
                {formatTitleCase(ctx.cell.value)}
            </span>
        </>
    );
}

function subscriptionCellTemplate(ctx: IgrCellTemplateContext) {
    if (ctx.cell.value) {
            return (
                <>
                <input type="checkbox" checked />
                </>
            );
    } else {
            return (
                <>
                <input type="checkbox"/>
                </>
            );
    }
}

function deleteRow(rowID: any) {
    grid.current.deleteRow(rowID);
}

function formatTitleCase(value: string) {
    return value.toUpperCase();
}

<IgrGrid id="grid" ref={grid} autoGenerate={false} data={data} primaryKey="Name">
    <IgrColumn field="Name" dataType="string" bodyTemplate={nameCellTemplate}></IgrColumn>
    <IgrColumn field="Subscription" dataType="boolean" bodyTemplate={subscriptionCellTemplate}></IgrColumn>
</IgrGrid>
```

> **Note**:
> The grid exposes a default handling for number, string, date and boolean column types. For example, the column will display `check` or `close` icon, instead of true/false by default, for boolean column type.

When properly implemented, the cell editing template also ensures that the cell's `EditValue` will correctly pass through the grid [editing event cycle](grid/editing.md#event-arguments-and-sequence).

### Cell Editing Template

The column also accepts one last template that will be used when a cell is in edit mode. As with the other column templates, the provided context object is again the cell value and the cell object itself. Of course in order to make the edit-mode template accessible to end users, you need
to set the [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) property of the column to true.

```tsx
function priceCellTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            <label>
                Enter the new price tag
            </label>
            <input name="price" type="number" value={ctx.cell.value}
                onChange={() => updateValue(ctx.cell.value)}/>
        </>
    );
}

function updateValue(value: number) {
  // Custom update code
}

<IgrColumn field="Price" dataType="number" editable={true} inlineEditorTemplate={priceCellTemplate}></IgrColumn>
```

Make sure to check the API for the `Cell` in order to get accustomed with the provided properties you can use in your templates.

### Column Template API

Each of the column templates can be changed programmatically at any point through the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) object itself. For example in the code below, we have declared two templates for our user data. In our TypeScript code we'll get references to the templates themselves and then based on some condition we will render the appropriate template for the column in our application.

```tsx
<IgrGrid ref={grid}>
    {/* Column declarations */}
</IgrGrid>
```

```tsx
function normalViewTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            <div className="user-details">{ ctx.cell.value }</div>
            <UserDetailsComponent></UserDetailsComponent>
        </>
    );
}

function smallViewTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            <div className="user-details-small">{ ctx.cell.value }</div>
        </>
    );
}

const column = grid.current.getColumnByName("User");
// Return the appropriate template based on some condition.
// For example saved user settings, viewport size, etc.
column.bodyTemplate = smallViewTemplate;
```

Column properties can also be set in code in the `ColumnInit` event which is emitted when the columns are initialized in the grid.

```tsx
function initColumns(event: CustomEvent<IgrColumn>) {
    const column: IgrColumn = event.detail;
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}

<IgrGrid onColumnInit={initColumns} />
```

The code above will make the **ProductName** column sortable and editable and will instantiate the corresponding features UI (like inputs for editing, etc.).

### Custom Display Format

There are optional parameters for formatting:

- `Format` - determines what date/time parts are displayed, defaults to `'mediumDate'`, equivalent to **'MMM d, y'**
- `Timezone` - the timezone offset for dates. By default uses the end-user's local system timezone
- `DigitsInfo` - decimal representation objects. Default to **1.0-3**

To allow customizing the display format by these parameters, the [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs) input is exposed. A column will respect only the corresponding properties for its data type, if [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs) is set. Example:

```tsx
const columnPipeArgs: IgrColumnPipeArgs = {
    format: "longDate",
    timezone: "UTC",
    digitsInfo: "1.2-2"
};

<IgrColumn field="OrderDate" dataType="date" pipeArgs={columnPipeArgs}></IgrColumn>
```

The `OrderDate` column will respect only the `Format` and `Timezone` properties, while the `UnitPrice` will only respect the `DigitsInfo`.

All available column data types could be found in the official [Column types topic](grid/column-types.md#default-template).

## Grid Data Structure

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) handles **flat data** and nested **POJO (Plain old Java objects)**. The data structure specific for rendering is in the form:

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

> If you use [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#autoGenerate) columns **the data keys must be identical.**

## Grid Data Binding

Our React Data Grid provides unmatched data binding options and is optimized for real-time updates and smooth scrolling. With low-latency rendering, the grid ensures any UI change is displayed in an instant, including live streaming data, large datasets, and more.

Before going any further with the React Data Grid we want to change the grid to bind to remote data service, which is the common scenario in large-scale applications.

You can do this by fetching the data from a given url receiving a JSON response and assigning it to the grid's `data` property that is used as the grid's data source:

```tsx
<IgrGrid ref={grid} data={data}></IgrGrid>
```

```tsx
const [data, setData] = useState<any[]>([]);

function fetchData(url: string): void {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
}
```

**Note**: The grid [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#autoGenerate) property is best to be avoided when binding to remote data for now. It assumes that the data is available in order to inspect it and generate the appropriate columns. This is usually not the case until the remote service responds, and the grid will throw an error. Making [`autoGenerate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#autoGenerate) available, when binding to remote service, is on our roadmap for future versions.

## Complex Data Binding

Complex Data Binding allows for seamless interaction with multi-level data, complex, real-world datasets, object-oriented data modules, etc. Using our React Data Grid, you can easily bind to complex objects (including data structures that nest deeper than one level). This happens through a path of properties in the data record.

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

```tsx
<IgrColumn field="weight.molecular"></IgrColumn>
<IgrColumn field="weight.residue"></IgrColumn>
```

An alternative way to bind complex data, or to visualize composite data (from more than one column) in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is to use a custom body template for the column. Generally, one can:

- use the `value` of the cell, that contains the nested data
- use the `cell` object in the template, from which to access the `ctx.cell.id.rowIndex` or `ctx.cell.id.rowID` to get the row via the grid's API and retrieve any value from it and interpolate those in the template.

```tsx
function getName(rowIndex: number) {
    return grid.current.getRowByIndex(rowIndex).data["Name"];
}
function getWeight(rowIndex: number) {
    return grid.current.getRowByIndex(rowIndex).data["weight"]["molecular"];
}

function abbreviationLongCellTemplate(ctx: IgrCellTemplateContext) {
    return (
        <>
            <div>
            <div>
                { ctx.cell.value }
                    {getName(ctx.cell.id.rowIndex)}
                    {getWeight(ctx.cell.id.rowIndex)}
            </div>
        </div>
        </>
    )
}

<IgrColumn field="abbreviation.long" bodyTemplate={abbreviationLongCellTemplate}></IgrColumn>
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

```tsx
function addressCellTemplate(ctx: IgrCellTemplateContext) {
    if (ctx.cell.value != null) {
        if (ctx.cell.value.length === 0) return <></>;
        const value = ctx.cell.value[0];
        return (
          <>
              <IgrExpansionPanel>
                  <div slot="title" style={{fontSize: "1.1em", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.25rem"}}>
                      {value.Name}
                  </div>
                  <div className="description">
                      <IgrInput type="text" label="Title" name="title" value={value.Title} style={{textOverflow: "ellipsis"}}
                          onInput={(e: CustomEvent<string>) => {
                              ctx.cell.value[0][e.target.label] = e.detail;
                              grid.current.markForCheck();
                          }} />
                      <IgrInput type="number" label="Age" name="title" value={value.Age} style={{textOverflow: "ellipsis"}}
                          onInput={(e: CustomEvent<string>) => {
                              ctx.cell.value[0][e.target.label] = e.detail;
                              grid.current.markForCheck();
                          }} />
                  </div>
              </IgrExpansionPanel>
          </>
        );
    }
    return <></>;
}

<IgrColumn field="Employees" header="Employees" width="40%" bodyTemplate={addressCellTemplate}></IgrColumn>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrInputModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesNestedDataItem, EmployeesNestedDataItem_EmployeesItem, EmployeesNestedData } from './EmployeesNestedData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrExpansionPanel, IgrInput } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrInputModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
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
                    data={this.employeesNestedData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        header="Name"
                        field="Name"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Title"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Salary"
                        header="Salary"
                        width="10%">
                    </IgrColumn>
                    <IgrColumn
                        field="Employees"
                        header="Employees"
                        bodyTemplate={this.webGridNestedDataCellTemplate}
                        width="20%"
                        minWidth="275px">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        width="10%">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedData: EmployeesNestedData = null;
    public get employeesNestedData(): EmployeesNestedData {
        if (this._employeesNestedData == null)
        {
            this._employeesNestedData = new EmployeesNestedData();
        }
        return this._employeesNestedData;
    }


    public webGridNestedDataCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value != null) {
            if (props.dataContext.cell.value.length === 0) return <></>;
            const value = props.dataContext.cell.value[0];
            var grid = this.grid;
            return (
        <>
            <IgrExpansionPanel>
                <div slot="title" style={{fontSize: "1.1em", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.25rem"}}>
                {value.Name}
                </div>
                <div className="description">
                    <IgrInput type="text" label="Title" name="title" value={value.Title} onChange={(e: any) => {
                            props.dataContext.cell.value[0][e.target.label] = e.detail;
                            grid.markForCheck();
                        }} style={{textOverflow: "ellipsis"}} />
                    <IgrInput type="number" label="Age" name="title" value={value.Age} onInput={(e: any) => {
                            props.dataContext.cell.value[0][e.target.label] = e.detail;
                            grid.markForCheck();
                        }} style={{textOverflow: "ellipsis"}} />
                </div>
            </IgrExpansionPanel>
        </>);
        }
        return <></>;
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Working with Flat Data Overview

The flat data binding approach is similar to the one that we already described above, but instead of **cell value** we are going to use the [`data`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#data) property of the [`IgrGridRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridrow.html).

Since the React grid is a component for **rendering**, **manipulating** and **preserving** data records, having access to **every data record** gives you the opportunity to customize the approach of handling it. The `data` property provides you this opportunity.

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

```tsx
function getCountry(rowIndex: number) {
    return grid.current.getRowByIndex(rowIndex).data["Country"];
}

function getCity(rowIndex: number) {
     return grid.current.getRowByIndex(rowIndex).data["City"];
}

function getPostalCode(rowIndex: number) {
     return grid.current.getRowByIndex(rowIndex).data["PostalCode"];
}

function addressCellTemplate(ctx: IgrCellTemplateContext) {
    var cell: IgrCellType = ctx.cell;
    if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
        return <></>;
    }

    return (
        <>
            <div className="address-container">
                <div className="country-city">
                    <span><strong>Country:</strong> {cell.row.data.Country}</span>
                    <br/>
                    <span><strong>City:</strong> {cell.row.data.City}</span>
                </div>
                <div className="phone-pscode">
                    <span><strong>Postal Code:</strong> {cell.row.data.PostalCode}</span>
                    <br/>
                    <span><strong>Phone:</strong> {cell.row.data.Phone}</span>
                </div>
                <br />
            </div>
        </>
    );
}

<IgrColumn field="Address" header="Address" width="25%" editable={true} bodyTemplate={addressCellTemplate}></IgrColumn>
```

Keep in mind that with the above defined template you will not be able to make editing operations, so we need an editor template.

```tsx
function addressEditCellTemplate(ctx: IgrCellTemplateContext) {
    var cell: IgrCellType = ctx.cell;
    if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
        return <></>;
    }

    return (
        <>
            <div className="contact-container--edit" style={{padding: "1rem"}}>
                <IgrInput
                    label="Country"
                    onInput={(e: CustomEvent<string>) => cell.row.data.Country = e.detail}
                    value={cell.row.data.Country}
                ></IgrInput>
                <IgrInput
                    label="City"
                    onInput={(e: CustomEvent<string>) => cell.row.data.City = e.detail}
                    value={cell.row.data.City}
                ></IgrInput>
                <IgrInput
                    label="Postal Code"
                    onInput={(e: CustomEvent<string>) => cell.row.data.PostalCode = e.detail}
                    value={cell.row.data.PostalCode}
                ></IgrInput>
                <IgrInput
                    label="Phone"
                    onInput={(e: CustomEvent<string>) => cell.row.data.Phone = e.detail}
                    value={cell.row.data.Phone}
                ></IgrInput>
            </div>
        </>
    );
}

<IgrColumn field="Address" dataType="number" width="25%" editable={true} inlineEditorTemplate={addressEditCellTemplate}></IgrColumn>
```

### Working with Flat Data Example

Using code snippets from previous section will result in the following example of [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrInputModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrInput } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrInputModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
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
                    data={this.customersData}
                    primaryKey="ID"
                    ref={this.gridRef}>
                    <IgrColumn
                        header="ID"
                        field="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact"
                        editable={true}
                        bodyTemplate={this.webGridCompositeContactCellTemplate}
                        inlineEditorTemplate={this.webGridCompositeContactEditCellTemplate}
                        width="250px"
                        resizable={false}>
                    </IgrColumn>
                    <IgrColumn
                        header="Address"
                        field="Address"
                        editable={true}
                        bodyTemplate={this.webGridCompositeAddressCellTemplate}
                        inlineEditorTemplate={this.webGridCompositeAddressEditCellTemplate}
                        width="250px"
                        resizable={false}>
                    </IgrColumn>
                    <IgrColumn
                        header="Country"
                        field="Country">
                    </IgrColumn>
                    <IgrColumn
                        header="Region"
                        field="Region">
                    </IgrColumn>
                    <IgrColumn
                        header="Phone"
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        header="Fax"
                        field="Fax">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }


    public webGridCompositeContactCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
        <>
            <div className="contact-container">
                <span><strong>Name:</strong> {cell.row.data.ContactName}</span>
                <br />
                <span><strong>Title:</strong> {cell.row.data.ContactTitle}</span>
                <br />
                <span><strong>Company:</strong> {cell.row.data.Company}</span>
                <br />
            </div>
        </>
        );
    }

    public webGridCompositeContactEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        var grid = this.grid;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>
        }

        return (
            <>
                <div className="contact-container--edit" style={{padding: "1rem"}}>
                    <IgrInput
                        label='Name'
                        onInput={(e: any) => cell.row.data.ContactName = e.detail}
                        value={cell.row.data.ContactName}
                    ></IgrInput>
                    <IgrInput
                        label='Title'
                        onInput={(e: any) => cell.row.data.ContactTitle = e.detail}
                        value={cell.row.data.ContactTitle}
                    ></IgrInput>
                    <IgrInput
                        label='Company'
                        onInput={(e: any) => cell.row.data.Company = e.detail}
                        value={cell.row.data.Company}
                    ></IgrInput>
                </div>
            </>
        );
    }

    public webGridCompositeAddressCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
        <>
            <div className="address-container">
                <div className="country-city">
                    <span><strong>Country:</strong> {cell.row.data.Country}</span>
                    <br/>
                    <span><strong>City:</strong> {cell.row.data.City}</span>
                </div>
                <div className="phone-pscode">
                    <span><strong>Postal Code:</strong> {cell.row.data.PostalCode}</span>
                    <br/>
                    <span><strong>Phone:</strong> {cell.row.data.Phone}</span>
                </div>
                <br />
            </div>
        </>
        );
    }

    public webGridCompositeAddressEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        var grid = this.grid;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
            <>
                <div className="contact-container--edit" style={{padding: "1rem"}}>
                    <IgrInput
                        label='Country'
                        onInput={(e: any) => cell.row.data.Country = e.detail}
                        value={cell.row.data.Country}
                    ></IgrInput>
                    <IgrInput
                        label='City'
                        onInput={(e: any) => cell.row.data.City = e.detail}
                        value={cell.row.data.City}
                    ></IgrInput>
                    <IgrInput
                        label='Postal Code'
                        onInput={(e: any) => cell.row.data.PostalCode = e.detail}
                        value={cell.row.data.PostalCode}
                    ></IgrInput>
                    <IgrInput
                        label='Phone'
                        onInput={(e: any) => cell.row.data.Phone = e.detail}
                        value={cell.row.data.Phone}
                    ></IgrInput>
                </div>
            </>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Keyboard Navigation

Keyboard navigation of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides a rich variety of keyboard interactions for the user. It enhances accessibility and allows intuitive navigation through any type of elements inside (cell, row, column header, toolbar, footer, etc.).

<!-- The sizing topic is still not available thus the Sizing section is commented out. -->

<!-- ## Sizing

See the [Grid Sizing](sizing.md) topic. -->

## Styling React Grid

> **Note**:
> The grid uses **css grid layout**, which is **not supported in IE without prefixing**, consequently it will not render properly.

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grids/theming-grid.md). In case you would like to change the header background and text color, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
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

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- `Cell`
- [`IgrCellTemplateContext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcelltemplatecontext.html)
- [`IgrGridRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridrow.html)
- [`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html)
- [`IgrPaginator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpaginator.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
