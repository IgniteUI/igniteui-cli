---
title: Blazor Tree Grid Column Pinning - Ignite UI for Blazor
_description: Want to use the Pinning feature of the Ignite UI for Blazor when you develop your next app? Easily lock column or change column order with rich API.
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# Blazor Tree Grid Column Pinning

The Ignite UI for Blazor Column Pinning feature in Blazor Tree Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). There’s an integrated UI for Column Pinning, accessible via the Blazor Tree Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## Blazor Tree Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

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
        ForeignKey="ParentID">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="OnPTO"
            DataType="GridColumnDataType.Boolean">
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


## Column Pinning API

Column pinning is controlled through the [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Pinned) property of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html). Pinned columns are rendered on the left side of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) body.

<!-- ComponentEnd: TreeGrid -->

You may also use the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)'s [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PinColumn) or [`UnpinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_UnpinColumn) methods of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) to pin or unpin columns by their field name:

<!-- ComponentEnd: TreeGrid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents, React -->

<!-- Blazor -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPinScript` event and providing a JavaScript function for changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Blazor -->

```razor
<IgbTreeGrid Data=data AutoGenerate=true ColumnPinScript="onColumnPin"/>


//In JavaScript
function onColumnPin(e) {
    if (e.detail.column.field == "Country") {
        e.detail.insertAtIndex = 0;
    }
}

igRegisterScript("onColumnPin", onColumnPin, false);
```

## Pinning Position

You can change the column pinning position via the [`Pinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.

```razor
<IgbTreeGrid Data=data AutoGenerate=true Pinning="pinningConfig"></IgbTreeGrid>

@code {
    private IgbPinningConfig pinningConfig = new() {
        Columns = ColumnPinningPosition.End
    };
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

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
        Pinning="PinningConfig1">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Width="250">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            Width="300"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date"
            Width="200">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Width="100">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            DataType="GridColumnDataType.String"
            Width="200">
            </IgbColumn>

            <IgbColumn
            Field="City"
            DataType="GridColumnDataType.String"
            Width="200">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            Width="200">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            DataType="GridColumnDataType.String"
            Width="200">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Width="200">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            Width="200">
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
    private IgbPinningConfig _pinningConfig1 = null;
    public IgbPinningConfig PinningConfig1
    {
        get
        {
            if (this._pinningConfig1 == null)
            {
                var pinningConfig1 = new IgbPinningConfig();
                pinningConfig1.Columns = ColumnPinningPosition.End;
                this._pinningConfig1 = pinningConfig1;
            }
            return this._pinningConfig1;
        }
    }

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


<!-- React, WebComponents, Blazor -->

### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatDetails"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        AutoGenerate="false"
        Width="100%"
        Height="480px"
        ColumnSelection="GridSelectionMode.Multiple"
        Pinning="PinningConfig"
        Moving="true"
        >
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbButton class="pinning-button" Variant="ButtonVariant.Contained" @onclick="() => UnpinColumn()">Unpin Selected Columns</IgbButton>
                    <IgbButton class="pinning-button" Variant="ButtonVariant.Contained" @onclick="() => PinLeft()">Pin Selected Left</IgbButton>
                    <IgbButton class="pinning-button" Variant="ButtonVariant.Contained" @onclick="() => PinRight()">Pin Selected Right</IgbButton>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn @ref="col1"
                Field="Name"
                DataType="GridColumnDataType.String"
                Width="250px"
            />

            <IgbColumn @ref="col2"
                Field="Title"
                DataType="GridColumnDataType.String"
                Width="250px" />

            <IgbColumn Field="ID" DataType="GridColumnDataType.Number" Width="100px" />

            <IgbColumn
                Field="HireDate"
                Header="Hire Date"
                DataType="GridColumnDataType.Date"
                Width="200px"
            />

            <IgbColumn 
                Field="Age"
                DataType="GridColumnDataType.Number"
            />

            <IgbColumn
                Field="Address"
                DataType="GridColumnDataType.String"
                Width="200px"
                DisablePinning="true"
            />

            <IgbColumn Field="City" DataType="GridColumnDataType.String" Width="200px" />
            <IgbColumn Field="Country" DataType="GridColumnDataType.String" Width="200px" />
            <IgbColumn Field="Fax" DataType="GridColumnDataType.String" Width="200px" />
            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Width="200px"
            />
            <IgbColumn Field="Phone" DataType="GridColumnDataType.String" Width="200px" />

        </IgbTreeGrid>

    </div>
</div>

@code {
    private IgbTreeGrid treeGrid;
    private IgbColumn col1;
    private IgbColumn col2;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            col1.Pinned = true;
            col1.PinningPosition = ColumnPinningPosition.End;

            col2.Pinned = true;
            col2.PinningPosition = ColumnPinningPosition.Start;
        }

    }

    private EmployeesFlatDetails _employeesFlatDetails = null;
    private EmployeesFlatDetails EmployeesFlatDetails
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

    private IgbPinningConfig _pinningConfig = null;
    private IgbPinningConfig PinningConfig
    {
        get
        {
            if (this._pinningConfig == null)
            {
                var pinningConfig1 = new IgbPinningConfig();
                pinningConfig1.Columns = ColumnPinningPosition.End;
                this._pinningConfig = pinningConfig1;
            }
            return this._pinningConfig;
        }
    }

    private async void PinLeft()
    {
        var selected = this.treeGrid.SelectedColumns();
        var gridColumns = this.treeGrid.ActualColumnList.Where(col => selected.Contains(col)).ToList();

        if (gridColumns == null) return;

        foreach (var col in gridColumns)
        {
            if (col.Pinned)
            {
                col.Pinned = false;
                StateHasChanged();
            }

            await Task.Delay(1);

            col.PinningPosition = ColumnPinningPosition.Start;
            col.Pinned = true;
            StateHasChanged();
        }
    }

    private async void PinRight()
    {

        var selected = this.treeGrid.SelectedColumns();
        var gridColumns = this.treeGrid.ActualColumnList.Where(col => selected.Contains(col)).ToList();

        if (gridColumns == null) return;

        foreach (var col in gridColumns)
        {
            if (col.Pinned)
            {
                col.Pinned = false;
                StateHasChanged();
            }

            await Task.Delay(1);

            col.PinningPosition = ColumnPinningPosition.End;
            col.Pinned = true;
            StateHasChanged();
        }
    }

    private void UnpinColumn()
    {

        var selected = this.treeGrid.SelectedColumns();
        var gridColumns = this.treeGrid.ActualColumnList.Where(col => selected.Contains(col)).ToList();

        if (gridColumns == null) return;

        foreach (var col in gridColumns)
        {
            col.Pinned = false;
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


<!-- end: React, WebComponents, Blazor -->

## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

```razor
<IgbTreeGrid AutoGenerate="false" Name="treeGrid" @ref="treeGrid" Data="EmployeesFlatData" PrimaryKey="ID" ForeignKey="ParentID">
    <IgbColumn Field="Name" DataType="String" Pinned="true"
    HeaderTemplateScript="WebTreeGridPinHeaderTemplate" Name="column1" @ref="column1"></IgbColumn>

    <IgbColumn Field="Title" DataType="String" Pinned="true"
    HeaderTemplateScript="WebTreeGridPinHeaderTemplate" Name="column2" @ref="column2"></IgbColumn>

    <IgbColumn Field="Phone" DataType="String"
    HeaderTemplateScript="WebTreeGridPinHeaderTemplate" Name="column3" @ref="column3"></IgbColumn>

    <IgbColumn Field="Age" DataType="Number"
    HeaderTemplateScript="WebTreeGridPinHeaderTemplate" Name="column4" @ref="column4"></IgbColumn>

    <IgbColumn Field="HireDate" DataType="Date"
    HeaderTemplateScript="WebTreeGridPinHeaderTemplate" Name="column5" @ref="column5"></IgbColumn>

    <IgbColumn Field="OnPTO" DataType="Boolean"
    HeaderTemplateScript="WebTreeGridPinHeaderTemplate" Name="column6" @ref="column6"></IgbColumn>
</IgbTreeGrid>


// In JavaScript

igRegisterScript("WebTreeGridPinHeaderTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.toggleColumnPin = function toggleColumnPin(field) {
        var grid = document.getElementsByTagName("igc-tree-grid")[0];
        var col = grid.getColumnByName(field);
        col.pinned = !col.pinned;
        grid.markForCheck();
    }
    return html`<div>
    <span style="float:left">${ctx.column.field}</span>
    <span style="float:right" onpointerdown='toggleColumnPin("${ctx.column.field}")'>📌</span>
</div>`;
}, false);
```

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
        Data="EmployeesFlatData"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Pinned="true"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Pinned="true"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="OnPTO"
            DataType="GridColumnDataType.Boolean"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
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
        var column5 = this.column5;
        var column6 = this.column6;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;

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


## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```razor
<IgbTreeGrid Id="grid"></IgbTreeGrid>
```

Then set the related CSS properties to this class:

```css
#grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-pinned-border-style: double;
    --ig-grid-cell-active-border-color: #FFCD0F;
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
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatData"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Pinned="true"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Pinned="true"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="OnPTO"
            DataType="GridColumnDataType.Boolean"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
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
        var column5 = this.column5;
        var column6 = this.column6;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;

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


<!-- end: WebComponents, Blazor -->

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
