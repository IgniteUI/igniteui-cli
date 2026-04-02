---
title: Blazor Tree Grid Component - Ignite UI for Blazor by Infragistics
_description: The Ignite UI for Blazor Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: Blazor tree grid, igniteui for Blazor, infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "TreeGrid", "Column"]
namespace: Infragistics.Controls
_tocName: Tree Grid
---

# Blazor Tree Grid Overview and Configuration

The Blazor Tree Grid is a UI component that combines the functionality of a data grid (table) with a tree view, allowing hierarchical data to be easily displayed in a tabular format. Unlike a regular grid, a tree grid enables rows to expand and collapse, revealing child rows nested under parent rows, making it useful for representing structured data such as file explorers, organizational charts, project tasks, or product categories.

Ignite UI for Blazor Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. Displaying of tabular data has never been easier and beautiful thanks to the Material Table-based UI Tree Grid.

## Blazor Tree Grid Example

In this example, you can see how users can manipulate hierarchical or flat data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel and csv.

### Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesNestedData"
        ChildDataKey="Employees"
        RowSelection="GridSelectionMode.Multiple"
        Moving="true"
        AllowFiltering="true"
        FilterMode="FilterMode.ExcelStyleFilter">
            <IgbPaginator
            >
            </IgbPaginator>

            <IgbGridToolbar
            >
                <IgbGridToolbarTitle
                Name="Employees"
                @ref="employees">
                </IgbGridToolbarTitle>

                <IgbGridToolbarActions
                >
                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                    <IgbGridToolbarExporter
                    ExportCSV="true"
                    ExportExcel="true">
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Editable="true"
            Resizable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            Header="Age"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var employees = this.employees;

    }

    private IgbTreeGrid treeGrid;
    private IgbGridToolbarTitle employees;

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


## Getting Started with Ignite UI for Blazor Tree Grid

### Dependencies

Getting started with our Blazor Grid library and the Blazor Tree Grid in particular is the first step to building powerful, data-rich applications that display hierarchical information in a clear and interactive way. The Blazor Tree Grid allows you to present parent-child data structures in a familiar tabular format, complete with features like row expansion, sorting, filtering, editing, and virtualization for high performance with large datasets.

To get started with the Blazor tree grid, first you need to install the IgniteUI.Blazor package.

Please refer to these topics on adding the IgniteUI.Blazor package:

- [Getting Started](../../general-getting-started-blazor-client.md)
- [Adding Nuget Package](../../general-nuget-feed.md)

You also need to include the following CSS link in the index.html file of your application to provide the necessary styles to the tree grid:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```

### Component Modules

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTreeGridModule));
```

## Usage

The tree grid shares a lot of features with the grid, but it also adds the ability to display its data hierarchically.
In order to achieve this, the tree grid provides us with a couple of ways to define the relations among our data objects - by using a [child collection](overview.md#child-collection) for every data object or by using [primary and foreign keys](overview.md#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- `GridCell` - Ordinary cell that contains a value.
- `TreeGridCell` - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the `level` property of its inner `treeRow`.

> [!Note]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`ExpansionDepth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_ExpansionDepth) property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection

When we are using the child collection option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in the  tree grid will have a direct reference to any of its children. In this case the data property of our tree grid that contains the original data source will be a hierarchically defined collection.

For this sample, let's use the following collection structure:

```razor
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
    public List<EmployeesItem> Employees { get; set; }
}
public class EmployeesItem
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
```

Now let's start by importing our [`Data`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_Data) collection and binding it to our tree grid.

```razor
 <IgbTreeGrid
    AutoGenerate="false"
    ChildDataKey="Employees"
    Data="EmployeesNestedData"
    Name="treeGrid"
    @ref="treeGrid">
        <IgbColumn Field="Name" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="Age" DataType="GridColumnDataType.Number"> </IgbColumn>
</IgbTreeGrid>
```

In order for the tree grid to build the hierarchy, we will have to set its [`ChildDataKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_ChildDataKey) property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we can disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

We can now enable the row selection and paging features of the tree grid by using the [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) and add the [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html) element.
We can also enable the summaries, the filtering, sorting, editing, moving and resizing features for each of our columns.

```razor
<IgbTreeGrid AutoGenerate="false"
             ChildDataKey="Employees"
             Data="EmployeesNestedData"
             RowSelection="GridSelectionMode.Multiple"
             AllowFiltering=true
             Moving=true
            Name="treeGrid"
            @ref="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true HasSummary=true></IgbColumn>
    <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable=true Editable=true Resizable=true HasSummary=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true Editable=true Resizable=true HasSummary=true> </IgbColumn>
    <IgbPaginator></IgbPaginator>
</IgbTreeGrid>
```

Finally, we can enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html), [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html), [`IgbGridToolbarPinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarPinning.html) and [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) respectively.

```razor
<IgbTreeGrid AutoGenerate="false"
             ChildDataKey="Employees"
             Data="EmployeesNestedData"
             RowSelection="GridSelectionMode.Multiple"
             AllowFiltering=true
             Moving=true
            Name="treeGrid"
            @ref="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true HasSummary=true></IgbColumn>
    <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable=true Editable=true Resizable=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true Editable=true Resizable=true > </IgbColumn>
    <IgbPaginator></IgbPaginator>
    <IgbGridToolbar>
        <IgbGridToolbarTitle> Employees </IgbGridToolbarTitle>
        <IgbGridToolbarActions>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
            <IgbGridToolbarExporter></IgbGridToolbarExporter>
    </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbTreeGrid>
```

You can see the result of the code from above at the beginning of this article in the [Tree Grid Example](./overview.md#example) section.

### Primary and Foreign keys

When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the `data` property of our tree grid that contains the original data source will be a flat collection.

```razor
public class EmployeesFlatDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}
```

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique as it will be our [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey). The ParentID contains the ID of the parent node and could be set as a [`ForeignKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_ForeignKey). If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

The parent-child relation is configured using the tree grid's [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) and [`ForeignKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_ForeignKey) properties.

Here is the template of the component which demonstrates how to configure the tree grid to display the data defined in the above flat collection:

```razor
<IgbTreeGrid AutoGenerate="false"
             PrimaryKey="ID"
             ForeignKey="ParentID"
             Data="EmployeesFlatDataItem"
             Name="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="JobTitle" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number"></IgbColumn>
</IgbTreeGrid>
```

In addition we will enable the row selection feature of the tree grid by using the rowSelection property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

```razor
<IgbTreeGrid AutoGenerate="false"
             PrimaryKey="ID"
             ForeignKey="ParentID"
             Data="EmployeesFlatDataItem"
             RowSelection="GridSelectionMode.Multiple"
             AllowFiltering=true
             Moving=true
             Name="treeGrid"
             @ref="treeGrid">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true></IgbColumn>
    <IgbColumn Field="JobTitle" DataType="GridColumnDataType.String" Sortable=true Editable=true Resizable=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true Editable=true Resizable=true> </IgbColumn>
</IgbTreeGrid>
```

And here is the final result:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        AllowFiltering="true"
        Moving="true"
        RowSelection="GridSelectionMode.Multiple">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            Header="Job Title"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

    private EmployeesFlatData _employeesFlatData = null;
    public EmployeesFlatData EmployeesFlatData
    {
        get
        {
            if (_employeesFlatData == null)
            {
                _employeesFlatData = new EmployeesFlatData();
            }
            return _employeesFlatData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatData
    : List<EmployeesFlatDataItem>
{
    public EmployeesFlatData()
    {
        this.Add(new EmployeesFlatDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


## Persistence and Integration

The indentation of the tree grid cell persists across other tree grid features like filtering, sorting and paging.

- When `Sorting` is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a [`VisibleIndex`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleIndex) of 0) is always the tree column.
- The column that ends up with a [`VisibleIndex`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleIndex) of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

## Blazor Tree Grid Styling Configuration

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid Class="tree-grid">
```

Then set the related CSS properties for that class:

```css
.tree-grid {
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #FFF;
    --ig-grid-expand-icon-color: #FFCD0F;
    --ig-grid-expand-icon-hover-color: #E0B710;
    --ig-grid-row-hover-background: #F8E495;
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesNestedData"
        ChildDataKey="Employees">
            <IgbColumn
            Field="Name"
            Header="Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            Header="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="salary"
            Header="Salary"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="productivity"
            Header="Productivity"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

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


## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html)
- [`IgbTreeGridRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGridRecord.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
