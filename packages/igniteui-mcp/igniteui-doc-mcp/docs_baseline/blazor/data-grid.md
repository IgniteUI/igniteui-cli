---
title: Blazor Data Grid Component - Infragistics
_description: Create super-fast, responsive Blazor Data Grids and tables with Ignite UI for Blazor. Supports editing, filtering, data binding and many more. Try it now!
_keywords: Blazor, Ignite UI for Blazor, Infragistics, Getting Started, Grid
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

# Blazor Grid Overview and Configuration

<div class="sample-content">
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <p>The Blazor Data Grid component is used for displaying large volumes of data. Modern and more complex grids ensure smooth UX and bring an array of features for manipulating tabular data. There is an intuitive API, theming, branding, filtering, sorting, data selection, Excel-style filtering, and many more.</p>
            <p>The Ignite UI for Blazor Data Table / Data Grid is a tabular Blazor grid component that allows you to quickly bind and display your data with little coding or configuration. Features of the Blazor data grid in our toolbox include filtering, sorting, templates, row selection, row grouping, row pinning, movable columns, virtualization, Master-Detail, and much more.</p>
            <p>The Blazor tables are optimized for speed and performance, with the ability to handle millions of rows and columns, and real-time updates in an instant, making Ignite UI for Blazor Data Grid the best Blazor Data Grid on the market. </p>
        </div>
    </article>
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <div class="tab-content">
                <img class="b-lazy responsive-img"
                    src="../../images/general/landing-grid-page.png"
                    data-src="../../images/general/landing-grid-page.png"
                    data-srcset="../../images/general/landing-grid-page.png 480w, ../../images/general/landing-grid-page.png 768w, ../../images/general/landing-grid-page.png 1100w"
                    alt="Blazor Data Grid"
                    title="Blazor Data Grid Component - Infragistics">
            </div>
        </div>
    </article>
</div>

## Blazor Data Grid Example

In this Ignite UI for Blazor Grid example, you can see how users can do both basic and excel-style filtering, live-data sorting, and use grid summaries as well as cell templating. The demo also includes paging set to display 10 items per page.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units in Stock"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            BodyTemplateScript="WebGridBooleanCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Filterable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;

    }

    private IgbGrid grid;
    private IgbColumn column1;

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```


<div class="divider--half"></div>

## Getting Started with Blazor Data Grid

### Dependencies

To get started with the Blazor Data Grid, first you need to install the IgniteUI.Blazor package.

Please refer to these topics on adding the IgniteUI.Blazor package:

- [Getting Started](../general-getting-started-blazor-client.md)
- [Adding Nuget Package](../general-nuget-feed.md)

You also need to include the following CSS link in the index.html file of your application to provide the necessary styles to the grid:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```

### Component Modules

The `DataGrid` requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbGridModule));
```

## Usage

Now that we have the grid packages imported, let’s get started with the basic configuration and bind to local data:

```razor
<IgbGrid Id="grid1" Data="data" AutoGenerate="true"></IgbGrid>
```

The [`Id`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_Id) property is a string value and is the unique identifier of the grid which will be auto-generated if not provided, while `data` binds the grid, in this case to local data.

The [`AutoGenerate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AutoGenerate) property tells the grid to auto generate the grid's [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) components based on the data source fields. It will also try to deduce the appropriate data type for the column if possible. Otherwise, the developer needs to explicitly define the columns and the mapping to the data source fields.

## Editable Blazor Grid

Each operation for grid editing includes batch operations, meaning the API gives you the option to group edits into a single server call, or you can perform grid edit / update operations as they occur with grid interactions. Along with a great developer experience as an editable grid with CRUD operations, the grid includes Excel-like keyboard navigation. Common default grid navigation is included, plus the option to override any navigation option to meet the needs of your customers. An editable grid in with a great navigation scheme is critical to any modern line of business application, with the Ignite UI grid we make it easy.

Following this topic you will learn more about [cell template](data-grid.md#cell-template) and [cell editing template](data-grid.md#cell-editing-template) and editing.

## Grid Column Configuration

[`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) is used to define the grid's columns collection and to enable features per column like **sorting** and **filtering**. Cell, header, and footer templates are also available.

### Defining Columns

Let's turn the [`AutoGenerate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_AutoGenerate) property off and define the columns collection in the markup:

```razor
<IgbGrid AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="Name" Sortable=true />
    <IgbColumn Field="AthleteNumber" Sortable=true Header="Athlete Number" Filterable=false/>
    <IgbColumn Field="TrackProgress" Header="Track Progress" Filterable=false />
</IgbGrid>
```

### Header Template

The header template can be set to modify the column headers. The snippets below show you how to format the header text to upper case.

```razor
<IgbColumn Field="Name" HeaderTemplateScript="UpperCaseTemplate" />

//In JavaScript:
igRegisterScript("UpperCaseTemplate", (ctx) => {

    var html = window.igTemplating.html;

    return html`${this.formatUppercase(ctx.column.field)}`;

}, false)

function formatUppercase(value) {
    return value.toUpperCase();
}
```

### Cell Template

When cell template is set it changes all the cells in the column. The context object provided in the template consists of the cell value provided implicitly and the cell object itself. It can be used to define a template where the cells' text could be formatted e.g. as title case.

```razor
<IgbColumn Field="Name" BodyTemplateScript="NameCellTemplate"/>

//In JavaScript:
igRegisterScript("NameCellTemplate", (ctx) => {
    var html = window.igTemplating.html;

    return html`${this.formatTitleCase(ctx.implicit)}`;
}, false);

function formatTitleCase(value) {
    return value.toUpperCase();
}
```

In the snippet above we take a reference to the implicitly provided cell value. This is sufficient if you just want to present some data and maybe apply some custom styling or pipe transforms over the value of the cell. However even more useful is to take the `Cell` instance itself as shown below:

```razor
<IgbGrid Id="grid" AutoGenerate=false>
    <IgbColumn Field="Name" BodyTemplateScript="NameCellTemplate" />
    <IgbColumn Field="Subscription" BodyTemplateScript="SubscriptionCellTemplate" />
</IgbGrid>

//In JavaScript:
igRegisterScript("NameCellTemplate", (ctx) => {
       var html = window.igTemplating.html;
    return html`
        <span tabindex="0" @keyup=${(e) => this.deleteRow(e, ctx.cell.id.rowIndex)}> ${this.formatTitleCase(ctx.cell.value)}</span >
    `;
}, false);

igRegisterScript("SubscriptionCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
     if (ctx.cell.value) {
            return html` <input type="checkbox" checked /> `;
    } else {
            return html` <input type="checkbox"/> `;
    }
}, false);

function deleteRow(e, rowIndex) {
    if (e.code === "Delete") {
        this.grid.deleteRow(rowIndex);
    }
}

function formatTitleCase(value) {
    return value.toUpperCase();
}
```

> **Note**:
> The grid exposes a default handling for number, string, date and boolean column types. For example, the column will display `check` or `close` icon, instead of true/false by default, for boolean column type.

When properly implemented, the cell editing template also ensures that the cell's `EditValue` will correctly pass through the grid [editing event cycle](grid/editing.md#event-arguments-and-sequence).

### Cell Editing Template

The column also accepts one last template that will be used when a cell is in edit mode. As with the other column templates, the provided context object is again the cell value and the cell object itself. Of course in order to make the edit-mode template accessible to end users, you need
to set the [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) property of the column to true.

```razor
<IgbColumn Field="Price" Editable=true DataType="GridColumnDataType.Number" InlineEditorTemplateScript="PriceCellTemplate" />

//In JavaScript:
igRegisterScript("PriceCellTemplate", (ctx) => {
    var html = window.igTemplating.html;

    return html`
        <label>
            Enter the new price tag
        </label>
        <input name="price" type="number" value="${ctx.cell.value}"
        @change=${(e) => this.updateValue(e, ctx.cell.value)} />
    `;
}, false);

function updateValue(event, value) {
}
```

Make sure to check the API for the `Cell` in order to get accustomed with the provided properties you can use in your templates.

### Column Template API

Each of the column templates can be changed programmatically at any point through the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) object itself. For example in the code below, we have declared two templates for our user data. In our TypeScript code we'll get references to the templates themselves and then based on some condition we will render the appropriate template for the column in our application.

```razor
<IgbGrid ColumnInit=OnColumnInit />

@code {
    public void OnColumnInit(IgbColumnComponentEventArgs args)
    {
        IgbColumn column = args.Detail;
        // Return the appropriate template based on some condition.
        // For example saved user settings, viewport size, etc.
        column.BodyTemplateScript = "NormalViewTemplate";
    }
}

//In JavaScript:
igRegisterScript("NormalViewTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`
        <div class="user-details">${ctx.cell.value}</div>
        <user-details-component></user-details-component>
    `;
}, false);

igRegisterScript("SmallViewTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`
        <div class="user-details-small" style="color: blue">${ctx.cell.value}</div>
    `;
}, false);
```

Column properties can also be set in code in the `ColumnInit` event which is emitted when the columns are initialized in the grid.

```razor
<IgbGrid ColumnInit=OnColumnInit />

@code {
    public void OnColumnInit(IgbColumnComponentEventArgs args)
    {
        IgbColumn column = args.Detail;
        if (column.Field == "ProductName") {
            column.Sortable = true;
            column.Editable = true;
        }
    }
}
```

The code above will make the **ProductName** column sortable and editable and will instantiate the corresponding features UI (like inputs for editing, etc.).

### Custom Display Format

There are optional parameters for formatting:

- [`Format`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFieldPipeArgs.html#IgniteUI_Blazor_Controls_IgbFieldPipeArgs_Format) - determines what date/time parts are displayed, defaults to `'mediumDate'`, equivalent to **'MMM d, y'**
- [`Timezone`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFieldPipeArgs.html#IgniteUI_Blazor_Controls_IgbFieldPipeArgs_Timezone) - the timezone offset for dates. By default uses the end-user's local system timezone
- [`DigitsInfo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFieldPipeArgs.html#IgniteUI_Blazor_Controls_IgbFieldPipeArgs_DigitsInfo) - decimal representation objects. Default to **1.0-3**

To allow customizing the display format by these parameters, the [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs) input is exposed. A column will respect only the corresponding properties for its data type, if [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs) is set. Example:

```razor
<IgbColumn Field="OrderDate"
           DataType=GridColumnDataType.Date
           PipeArgs=@(new IgbColumnPipeArgs() { Timezone="UTC+0", DigitsInfo="1.2-2", Format = "longDate" }) />

<IgbColumn Field="UnitPrice"
           DataType=GridColumnDataType.Date
           PipeArgs=@(new IgbColumnPipeArgs() { Timezone="UTC+0", DigitsInfo="1.2-2", Format = "longDate" }) />
```

The `OrderDate` column will respect only the [`Format`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFieldPipeArgs.html#IgniteUI_Blazor_Controls_IgbFieldPipeArgs_Format) and [`Timezone`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFieldPipeArgs.html#IgniteUI_Blazor_Controls_IgbFieldPipeArgs_Timezone) properties, while the `UnitPrice` will only respect the [`DigitsInfo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFieldPipeArgs.html#IgniteUI_Blazor_Controls_IgbFieldPipeArgs_DigitsInfo).

All available column data types could be found in the official [Column types topic](grid/column-types.md#default-template).

## Complex Data Binding

Complex Data Binding allows for seamless interaction with multi-level data, complex, real-world datasets, object-oriented data modules, etc. Using our Blazor Data Grid, you can easily bind to complex objects (including data structures that nest deeper than one level). This happens through a path of properties in the data record.

Take a look at the following data model:

```razor
public class AminoAcid
{
    public string Name { get; set; }
    public AminoAbbreviation Abbreviation { get; set; }
    public AminoWeight Weight { get; set; }
}

public class AminoAbbreviation
{
    public string Short { get; set; }
    public string Long { get; set; }
}

public class AminoWeight
{
    public double Molecular { get; set; }
    public double Residue { get; set; }
}
```

For example, in order to display the weights of a given amino acid in the grid the following snippet will suffice

```razor
<IgbColumn Field="Weight.Molecular" />
<IgbColumn Field="Weight.Residue" />
```

An alternative way to bind complex data, or to visualize composite data (from more than one column) in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) is to use a custom body template for the column. Generally, one can:

- use the `value` of the cell, that contains the nested data

```razor
<IgbColumn Field="Abbreviation.Long" BodyTemplateScript="AbbreviationLongCellTemplate"/>

//In JavaScript:
igRegisterScript("AbbreviationLongCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`
        <div>
            <div>
                ${ctx.cell.value}
                ${this.GetName(ctx.cell.id.rowIndex)}
                ${this.GetWeight(ctx.cell.id.rowIndex)}
            </div>
        </div>
    `;
}, false);

function GetName(rowIndex) {
    return this.grid.getRowByIndex(rowIndex).data["Name"];

}

function GetWeight(rowIndex) {
    return this.grid.getRowByIndex(rowIndex).data["Weight"]["Molecular"];
}
```

Here is an example on how body template is used to display complex data. Below is the data that we are going to use:

```razor
public class EmployeesNestedData : List<EmployeesNestedDataItem>
{
    public EmployeesNestedData()
    {
        this.Add(new EmployeesNestedDataItem()
        {
            Age = 55,
            Employees = new List<EmployeesNestedDataItem_EmployeesItem>()
            {
                new EmployeesNestedDataItem_EmployeesItem()
                },
                new EmployeesNestedDataItem_EmployeesItem()
                {
                    Age = 29,
                    Salary = 60000,
                    Productivity = 80,
                    City = @"Munich",
                    Country = @"Germany",
                    Phone = @"609-333-444",
                    HireDate = @"2009, 6, 19",
                    ID = 2,
                    Name = @"Thomas Anderson",
                    Title = @"Senior Software Developer"
                },
                new EmployeesNestedDataItem_EmployeesItem()
                {
                    Age = 31,
                    Salary = 90000,
                    Productivity = 80,
                    City = @"Warasw",
                    Country = @"Poland",
                    Phone = @"609-222-205",
                    HireDate = @"2014, 8, 18",
                    ID = 11,
                    Name = @"Monica Reyes",
                    Title = @"Software Development Team Lead"
                },
                new EmployeesNestedDataItem_EmployeesItem()
                {
                    Age = 35,
                    Salary = 70000,
                    Productivity = 70,
                    City = @"Koln",
                    Country = @"Germany",
                    Phone = @"609-502-525",
                    HireDate = @"2015, 9, 17",
                    ID = 6,
                    Name = @"Roland Mendel",
                    Title = @"Senior Software Developer"
                }}
            });
        }
    }
}
```

The custom template for the column, that will render the nested data:

```razor
<IgbColumn Header="Employees" Field="Employees" BodyTemplateScript="WebGridNestedDataCellTemplate" />

//In JavaScript:
igRegisterScript("WebGridNestedDataCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function() {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }
    const people = ctx.cell.value;
    if (people != null) {
        if (people.length === 0) return html``;
        const person = people[0];
        return html`
    <igc-expansion-panel>
        <h3 slot="title">
        ${person.Name}
        </h3>
        <div class="description">
            <div>
                <label for="title">Title</label>
                <input id='Title' type="text" name="title" value="${person.Title}" style="text-overflow: ellipsis;" />
            </div>
            <div>
                <label for="age">Age</label>
                <input id='Age' type="text" name="title" value="${person.Age}" style="text-overflow: ellipsis;" />
            </div>
        </div>
    </igc-expansion-panel>
        `;
    }
}, false);
```

And the result from this configuration is:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="EmployeesNestedData"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbColumn
            Header="Name"
            Field="Name"
            Width="15%">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            Header="Title"
            Width="15%">
            </IgbColumn>

            <IgbColumn
            Field="Salary"
            Header="Salary"
            Width="10%">
            </IgbColumn>

            <IgbColumn
            Field="Employees"
            Header="Employees"
            BodyTemplateScript="WebGridNestedDataCellTemplate"
            Width="20%"
            MinWidth="275px"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            Width="15%">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            Width="15%">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            Header="Age"
            Width="10%">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;

    }

    private IgbGrid grid;
    private IgbColumn column1;

    private EmployeesNestedData _employeesNestedData = null;
    public EmployeesNestedData EmployeesNestedData
    {
        get
        {
            if (_employeesNestedData == null)
            {
                _employeesNestedData = new EmployeesNestedData();
            }
            return _employeesNestedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesNestedDataItem
{
    public double ID { get; set; }
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
    public List<EmployeesNestedDataItem_EmployeesItem> Employees { get; set; }
}
public class EmployeesNestedDataItem_EmployeesItem
{
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
}

public class EmployeesNestedData
    : List<EmployeesNestedDataItem>
{
    public EmployeesNestedData()
    {
        this.Add(new EmployeesNestedDataItem() { ID = 1, Age = 55, Salary = 80000, Productivity = 90, City = @"Berlin", Country = @"Germany", Phone = @"609-202-505", HireDate = @"2008-03-20", Name = @"John Winchester", Title = @"Development Manager", Employees = new List<EmployeesNestedDataItem_EmployeesItem>()
        {
            new EmployeesNestedDataItem_EmployeesItem() { Age = 43, Salary = 70000, Productivity = 80, City = @"Hamburg", Country = @"Germany", Phone = @"609-444-555", HireDate = @"2011-06-03", ID = 3, Name = @"Michael Burke", Title = @"Senior Software Developer" },
            new EmployeesNestedDataItem_EmployeesItem() { Age = 29, Salary = 60000, Productivity = 80, City = @"Munich", Country = @"Germany", Phone = @"609-333-444", HireDate = @"2009-06-19", ID = 2, Name = @"Thomas Anderson", Title = @"Senior Software Developer" },
            new EmployeesNestedDataItem_EmployeesItem() { Age = 31, Salary = 90000, Productivity = 80, City = @"Warasw", Country = @"Poland", Phone = @"609-222-205", HireDate = @"2014-08-18", ID = 11, Name = @"Monica Reyes", Title = @"Software Development Team Lead" },
            // ... 8 more items
    }
}
```


### Working with Flat Data Overview

The flat data binding approach is similar to the one that we already described above, but instead of **cell value** we are going to use the [`Data`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_Data) property of the [`IgbGridRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridRow.html).

Since the Blazor grid is a component for **rendering**, **manipulating** and **preserving** data records, having access to **every data record** gives you the opportunity to customize the approach of handling it. The `data` property provides you this opportunity.

Below is the data that we are going to use:

```razor
public class CustomersData : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem()
        {
            ID = "ALFKI",
            CompanyName = "Alfreds Futterkiste",
            ContactName = "Maria Anders",
            ContactTitle = "Sales Representative",
            Address = "Obere Str. 57",
            City = "Berlin",
            Region = "East",
            PostalCode = "12209",
            Country = "Germany",
            Phone = "030-0074321",
            Fax = "030-0076545"
        });
    }
}
```

The custom template:

```razor
<IgbColumn Header="Address" Field="Address"
           Editable="true"
           BodyTemplateScript="AddressCellTemplate" />

//In JavaScript:
igRegisterScript("AddressCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div class="address-container">
    <div class="country-city">
        <span><strong>Country:</strong> ${ctx.cell.row.data.Country}</span>
        <br>
        <span><strong>City:</strong> ${ctx.cell.row.data.City}</span>
    </div>
    <div class="phone-pscode">
        <span><strong>Postal Code:</strong> ${ctx.cell.row.data.PostalCode}</span>
        <br>
        <span><strong>Phone:</strong> ${ctx.cell.row.data.Phone}</span>
    </div>
    <br />
</div>`;
}, false);
```

Keep in mind that with the above defined template you will not be able to make editing operations, so we need an editor template.

```razor
<IgbColumn Header="Address" Field="Address"
           Editable="true"
           InlineEditorTemplateScript="AddressEditCellTemplate" />

//In JavaScript:
igRegisterScript("AddressEditCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function() {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }

    return html`<div class="address-container--edit">
    <div>
        <span><strong>Country:</strong></span>
        <input id='Country' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.Country}"></input>
        <br>
        <span><strong>City:</strong></span>
        <input id='City' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.City}"></input>
    </div>
    <div>
        <span><strong>Postal Code:</strong></span>
        <input id='PostalCode' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.PostalCode}"></input>
        <br>
        <span><strong>Selected:</strong></span>
        <input id='Phone' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.Phone}"></input>
    </div>
    <br>
</div>`;
}, false);
```

### Working with Flat Data Example

Using code snippets from previous section will result in the following example of [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        PrimaryKey="ID"
        Name="grid"
        @ref="grid">
            <IgbColumn
            Header="ID"
            Field="ID">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Contact"
            Editable="true"
            BodyTemplateScript="WebGridCompositeContactCellTemplate"
            InlineEditorTemplateScript="WebGridCompositeContactEditCellTemplate"
            Width="250px"
            Resizable="false"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Header="Address"
            Field="Address"
            Editable="true"
            BodyTemplateScript="WebGridCompositeAddressCellTemplate"
            InlineEditorTemplateScript="WebGridCompositeAddressEditCellTemplate"
            Width="250px"
            Resizable="false"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Header="Country"
            Field="Country">
            </IgbColumn>

            <IgbColumn
            Header="Region"
            Field="Region">
            </IgbColumn>

            <IgbColumn
            Header="Phone"
            Field="Phone">
            </IgbColumn>

            <IgbColumn
            Header="Fax"
            Field="Fax">
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

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


## Keyboard Navigation

Keyboard navigation of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides a rich variety of keyboard interactions for the user. It enhances accessibility and allows intuitive navigation through any type of elements inside (cell, row, column header, toolbar, footer, etc.).

<!-- The sizing topic is still not available thus the Sizing section is commented out. -->

<!-- ## Sizing

See the [Grid Sizing](sizing.md) topic. -->

## Styling Blazor Grid

> **Note**:
> The grid uses **css grid layout**, which is **not supported in IE without prefixing**, consequently it will not render properly.

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grids/theming-grid.md). In case you would like to change the header background and text color, you need to set a class for the grid first:

```razor
 <IgbGrid Class="grid"></IgbGrid>
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

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- `Cell`
- [`IgbCellTemplateContext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCellTemplateContext.html)
- [`IgbGridRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridRow.html)
- [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html)
- [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html)

## Additional Resources

- [Grid Sizing](grid/sizing.md)
- [Virtualization and Performance](grid/virtualization.md)
- [Paging](grid/paging.md)
- [Filtering](grid/filtering.md)
- [Sorting](grid/sorting.md)
- [Summaries](grid/summaries.md)
- [Column Moving](grid/column-moving.md)
- [Column Pinning](grid/column-pinning.md)
- [Column Resizing](grid/column-resizing.md)
- [Selection](grid/selection.md)
- [Column Data Types](grid/column-types.md#default-template)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
