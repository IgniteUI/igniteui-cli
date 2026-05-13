---
title: Blazor Tree Grid Conditional Cell Styling - Ignite UI for Blazor
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Blazor Tree Grid to make cells stand out.
_keywords: conditional styling, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/conditional-cell-styling
_tocName: Conditional Styling
_premium: true
---

# Blazor Tree Grid Conditional Styling

The Ignite UI for Blazor Conditional Styling feature in Blazor Tree Grid allows custom styling on a row or cell level. The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) Conditional Styling functionality is used to visually emphasize or highlight data that meets certain criteria, making it easier for users to identify important information or trends within the grid.

## Tree Grid Conditional Row Styling

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component in Ignite UI for Blazor provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) input on the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component;
- By setting [`RowStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowStyles) input on the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) rows by setting the [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) input and define custom rules.

```razor
<IgbTreeGrid AutoGenerate="true" Id="grid" Data="CustomersData" Name="grid" RowClassesScript="RowClassesHandler" @ref="grid">
</IgbTreeGrid>
```

The [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```razor
igRegisterScript("RowClassesHandler", () => {
    return {
        activeRow: (row) => row.index % 2 === 0
    };
}, true);
```

```css
.activeRow {
    border-top: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="EmployeesFlatData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        RowEditable="true"
        RowClassesScript="WebGridRowClassesHandler"
        Name="treeGrid1"
        @ref="treeGrid1">
            <IgbColumn
            Field="Name"
            Header="Full Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            Header="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            Header="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid1 = this.treeGrid1;

    }

    private IgbTreeGrid treeGrid1;

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

### Using Row Styles

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) control exposes the [`RowStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowStyles) property which allows conditional styling of the data rows. Similar to [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both [`RowStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowStyles) and [`RowClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowClasses) is:

```razor
(row) => boolean
```

Let's define our styles:

<!-- ComponentStart: TreeGrid -->

```razor
igRegisterScript("WebTreeGridRowStylesHandler", () => {
    return {
        'background': (row) => row.data['Title'] === 'CEO' ? '#6c757d' :
            row.data['Title'].includes('President') ? '#adb5bd' :
            row.data['Title'].includes('Director') ? '#ced4da' :
            row.data['Title'].includes('Manager') ? '#dee2e6' :
            row.data['Title'].includes('Lead') ? '#e9ecef' :
            row.data['Title'].includes('Senior') ? '#f8f9fa' : null,
        'border-left': (row) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ? '2px solid' : null,
        'border-color': (row) => row.data['Title'] === 'CEO' ? '#495057' : null,
        'color': (row) => row.data['Title'] === 'CEO' ? '#fff' : null
    };
}, true);
```

```razor
<IgbTreeGrid AutoGenerate="true" PrimaryKey="ID" ForeignKey="ParentID" Data="Data" RowStylesScript="WebTreeGridRowStylesHandler">
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatDetails"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        RowStylesScript="WebTreeGridRowStylesHandler">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Filterable="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Resizable="false"
            Filterable="false"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            Resizable="true"
            Filterable="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            Resizable="true"
            Filterable="true"
            Editable="true">
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

    private EmployeesFlatDetails _employeesFlatDetails = null;
    public EmployeesFlatDetails EmployeesFlatDetails
    {
        get
        {
            if (_employeesFlatDetails == null)
            {
                _employeesFlatDetails = new EmployeesFlatDetails();
            }
            return _employeesFlatDetails;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDetailsItem
{
    public string Address { get; set; }
    public double Age { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Fax { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Phone { get; set; }
    public double PostalCode { get; set; }
    public string Title { get; set; }
    public string LastName { get; set; }
    public string FullAddress { get; set; }
}

public class EmployeesFlatDetails
    : List<EmployeesFlatDetailsItem>
{
    public EmployeesFlatDetails()
    {
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Obere Str. 57", Age = 55, City = @"Berlin", Country = @"Germany", Fax = @"030-0076545", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Phone = @"030-0074321", PostalCode = 12209, Title = @"Development Manager", LastName = @"Winchester", FullAddress = @"Obere Str. 57, Berlin, Germany" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Avda. de la Constitución 2222", Age = 42, City = @"México D.F.", Country = @"Mexico", Fax = @"(51) 555-3745", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Phone = @"(5) 555-4729", PostalCode = 5021, Title = @"CEO", LastName = @"Sanders", FullAddress = @"Avda. de la Constitución 2222, México D.F., Mexico" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Mataderos 2312", Age = 49, City = @"México D.F.", Country = @"Mexico", Fax = @"(5) 555-3995", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Phone = @"(5) 555-3932", PostalCode = 5023, Title = @"Accounting Manager", LastName = @"Lincoln", FullAddress = @"Mataderos 2312, México D.F., Mexico" });
        // ... 15 more items
    }
}
```

## Tree Grid Conditional Cell Styling

## Overview

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component in Ignite UI for Blazor provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) input [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes

You can conditionally style the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) cells by setting the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) input and define custom rules.

<!-- ComponentStart: TreeGrid -->

```razor
<IgbColumn Field="UnitPrice" Header="Unit Price" DataType="GridColumnDataType.Currency" CellClassesScript="UnitPriceCellClassesHandler">
</IgbColumn>
```

<!-- ComponentEnd: TreeGrid -->

The [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

<!-- ComponentStart: TreeGrid -->

```razor
igRegisterScript("UnitPriceCellClassesHandler", () => {
    return {
        downPrice: (rowData, columnKey) => rowData[columnKey] <= 5,
        upPrice: (rowData, columnKey) => rowData[columnKey] > 5,
    };
}, true);
```

```css
.upPrice {
    color: red !important;
}

.downPrice {
    color: green !important;
}
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="OrdersTreeData"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="ID"
            Header="Order ID"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product"
            DataType="GridColumnDataType.String"
            CellClassesScript="WebTreeGridAllergensCellClassesHandler"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Category"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Units"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Currency"
            CellClassesScript="WebTreeGridUnitPriceCellClassesHandler"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Delivered"
            DataType="GridColumnDataType.Boolean">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var column1 = this.column1;
        var column2 = this.column2;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;
    private IgbColumn column2;

    private OrdersTreeData _ordersTreeData = null;
    public OrdersTreeData OrdersTreeData
    {
        get
        {
            if (_ordersTreeData == null)
            {
                _ordersTreeData = new OrdersTreeData();
            }
            return _ordersTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OrdersTreeDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string OrderDate { get; set; }
    public double Units { get; set; }
    public double UnitPrice { get; set; }
    public double Price { get; set; }
    public bool Delivered { get; set; }
}

public class OrdersTreeData
    : List<OrdersTreeDataItem>
{
    public OrdersTreeData()
    {
        this.Add(new OrdersTreeDataItem() { ID = 1, ParentID = -1, Name = @"Order 1", Category = @"", OrderDate = @"2010-02-17", Units = 1844, UnitPrice = 3.73, Price = 6884.38, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 101, ParentID = 1, Name = @"Chocolate Chip Cookies", Category = @"Cookies", OrderDate = @"2010-02-17", Units = 834, UnitPrice = 3.59, Price = 2994.06, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 102, ParentID = 1, Name = @"Red Apples", Category = @"Fruit", OrderDate = @"2010-02-17", Units = 371, UnitPrice = 3.66, Price = 1357.86, Delivered = true });
        // ... 19 more items
    }
}
```

- By using the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) input [`CellStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```razor
(rowData, columnKey, cellValue, rowIndex) => boolean
```

### Using Cell Styles

Columns expose the [`CellStyles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellStyles) property which allows conditional styling of the column cells. Similar to [`CellClasses`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_CellClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

Let's define our styles:

<!-- ComponentStart: TreeGrid -->

```razor
igRegisterScript("WebTreeGridCellStylesHandler", () => {
    return {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "UnitPrice") {
                if (cellValue > 10) return "#dc3545";
                if (cellValue < 5) return "#28a745";
                if (cellValue >= 5 && cellValue <= 10) return "#17a2b8";
            }
        }
    };
}, true);
```

```razor
<IgbColumn CellStylesScript="WebTreeGridCellStylesHandler">
</IgbColumn>
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="OrdersTreeData"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="ID"
            Header="Order ID"
            DataType="GridColumnDataType.String"
            CellStylesScript="WebTreeGridCellStylesHandler"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Order Product"
            DataType="GridColumnDataType.String"
            CellStylesScript="WebTreeGridCellStylesHandler"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Currency"
            CellStylesScript="WebTreeGridCellStylesHandler"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            CellStylesScript="WebTreeGridCellStylesHandler"
            Name="column4"
            @ref="column4">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;

    private OrdersTreeData _ordersTreeData = null;
    public OrdersTreeData OrdersTreeData
    {
        get
        {
            if (_ordersTreeData == null)
            {
                _ordersTreeData = new OrdersTreeData();
            }
            return _ordersTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OrdersTreeDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string OrderDate { get; set; }
    public double Units { get; set; }
    public double UnitPrice { get; set; }
    public double Price { get; set; }
    public bool Delivered { get; set; }
}

public class OrdersTreeData
    : List<OrdersTreeDataItem>
{
    public OrdersTreeData()
    {
        this.Add(new OrdersTreeDataItem() { ID = 1, ParentID = -1, Name = @"Order 1", Category = @"", OrderDate = @"2010-02-17", Units = 1844, UnitPrice = 3.73, Price = 6884.38, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 101, ParentID = 1, Name = @"Chocolate Chip Cookies", Category = @"Cookies", OrderDate = @"2010-02-17", Units = 834, UnitPrice = 3.59, Price = 2994.06, Delivered = true });
        this.Add(new OrdersTreeDataItem() { ID = 102, ParentID = 1, Name = @"Red Apples", Category = @"Fruit", OrderDate = @"2010-02-17", Units = 371, UnitPrice = 3.66, Price = 1357.86, Delivered = true });
        // ... 19 more items
    }
}
```

## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

<!--ComponentEnd: Grid, HierarchicalGrid, TreeGrid-->

## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
