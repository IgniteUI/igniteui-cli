---
title: Blazor Tree Grid Column Reordering & Moving - Ignite UI for Blazor
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the Blazor Column Moving API. Try Ignite UI for Blazor!
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-moving
_tocName: Column Moving
_premium: true
---

# Tree Grid Column Reordering & Moving

The Blazor Tree Grid Column Moving feature in Ignite UI for Blazor allows quick and easy column reordering. This can be done through the Column Moving API or by dragging and dropping the headers to another position via mouse or touch gestures. In the Blazor Tree Grid, you can enable Column Moving for pinned and unpinned columns and for [Multi-Column Headers](multi-column-headers.md) as well.

> [!Note]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> [!Note]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**!

> [!Note]
> If the pinned area exceeds its maximum allowed width (80% of the total [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```razor
    public RenderFragment<IgbColumnTemplateContext> headerTemplate => (context) =>
    {
        return @<IgbIcon Collection="fas" IconName="fa-thumbtack" draggable="false" @onclick="() => onClick()"></IgbIcon>;
    };
```

## Blazor Tree Grid Column Moving Overview Example

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
        ColumnWidth="200">
            <IgbPaginator
            PerPage="10"
            TotalRecords="20">
            </IgbPaginator>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="ID"
            DataType="GridColumnDataType.Number"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="City"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column10"
            @ref="column10">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column11"
            @ref="column11">
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
        var column7 = this.column7;
        var column8 = this.column8;
        var column9 = this.column9;
        var column10 = this.column10;
        var column11 = this.column11;

    }

    private IgbTreeGrid treeGrid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;
    private IgbColumn column7;
    private IgbColumn column8;
    private IgbColumn column9;
    private IgbColumn column10;
    private IgbColumn column11;

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

## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) could have either movable or immovable columns. This is done via the [`Moving`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Moving) input of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

## API

In addition to the drag and drop functionality, the Column Moving feature also provides API methods to allow moving a column/reordering columns programmatically:

[`MoveColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_MoveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `Position` (representing a `DropPosition` value), which determines whether to place the column before or after the target column.

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        IgbColumn Col2 = await this.grid.GetColumnByVisibleIndexAsync(1);
        this.Grid.MoveColumn(Col1,Col2, DropPosition.AfterDropTarget);
    }
```

[`Move`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```razor
    public async void HandleClick()
    {
        IgbColumn Col1 = await this.grid.GetColumnByVisibleIndexAsync(0);
        this.Col1.Move(3);
    }
```

Note that when using the column moving feature, the `ColumnMovingEnd` event will be emitted if the operation was successful. Also note that in comparison to the drag and drop functionality, using the column moving feature does not require setting the [`Moving`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Moving) property to true.

## Events

There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are `ColumnMovingStart`, `ColumnMoving` and `ColumnMovingEnd`.

You can subscribe to the `ColumnMovingEnd` event of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the **Category** column after the **Change On Year(%)** column in the following code snippet.

```razor
    <IgbTreeGrid ShowGroupArea="true" @ref='Grid' Width="100%" Height="100%"
             AllowFiltering=true
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate=true
             Data=northwindEmployees
             Moving="true"
             ColumnMovingEndScript='onColumnMovingEnd'>
    </IgbTreeGrid>
```

```razor
igRegisterScript("onColumnMovingEnd", (event) => {
    if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}, false);
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).

In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid class="grid"></IgbTreeGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
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
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="EmployeesFlatDetails"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        ColumnWidth="200">
            <IgbPaginator
            PerPage="10"
            TotalRecords="20">
            </IgbPaginator>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="ID"
            DataType="GridColumnDataType.Number"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="City"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column10"
            @ref="column10">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="WebTreeGridPinHeaderTemplate"
            Name="column11"
            @ref="column11">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;
        var column5 = this.column5;
        var column6 = this.column6;
        var column7 = this.column7;
        var column8 = this.column8;
        var column9 = this.column9;
        var column10 = this.column10;
        var column11 = this.column11;

    }

    private IgbTreeGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;
    private IgbColumn column7;
    private IgbColumn column8;
    private IgbColumn column9;
    private IgbColumn column10;
    private IgbColumn column11;

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

## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
