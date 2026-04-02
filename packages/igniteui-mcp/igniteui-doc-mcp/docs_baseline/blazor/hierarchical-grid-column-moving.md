---
title: Blazor Hierarchical Grid Column Reordering & Moving - Ignite UI for Blazor
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the Blazor Column Moving API. Try Ignite UI for Blazor!
_keywords: Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-moving
_tocName: Column Moving
_premium: true
---

# Hierarchical Grid Column Reordering & Moving

The Blazor Hierarchical Grid Column Moving feature in Ignite UI for Blazor allows quick and easy column reordering. This can be done through the Column Moving API or by dragging and dropping the headers to another position via mouse or touch gestures. In the Blazor Hierarchical Grid, you can enable Column Moving for pinned and unpinned columns and for [Multi-Column Headers](multi-column-headers.md) as well.

> [!Note]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> [!Note]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**!

> [!Note]
> If the pinned area exceeds its maximum allowed width (80% of the total [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```razor
    public RenderFragment<IgbColumnTemplateContext> headerTemplate => (context) =>
    {
        return @<IgbIcon Collection="fas" IconName="fa-thumbtack" draggable="false" @onclick="() => onClick()"></IgbIcon>;
    };
```

## Blazor Hierarchical Grid Column Moving Overview Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HierarchicalCustomers"
        Moving="true"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbPaginator
            Name="paginator"
            @ref="paginator"
            PerPage="15">
            </IgbPaginator>

            <IgbColumn
            Field="CustomerID"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            DataType="GridColumnDataType.String"
            Width="150px"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            DataType="GridColumnDataType.String"
            Width="150px"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            DataType="GridColumnDataType.String"
            Width="150px"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="City"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column10"
            @ref="column10">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false"
            Moving="true">
                <IgbColumn
                Field="OrderID"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="EmployeeID"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="OrderDate"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="RequiredDate"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="ShippedDate"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="ShipVia"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="Freight"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="ShipName"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipAddress"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipCity"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipPostalCode"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipCountry"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false"
                Moving="true">
                    <IgbColumn
                    Field="ProductID"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="UnitPrice"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;
        var paginator = this.paginator;
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

    }

    private IgbHierarchicalGrid hierarchicalGrid1;
    private IgbPaginator paginator;
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

    private HierarchicalCustomers _hierarchicalCustomers = null;
    public HierarchicalCustomers HierarchicalCustomers
    {
        get
        {
            if (_hierarchicalCustomers == null)
            {
                _hierarchicalCustomers = new HierarchicalCustomers();
            }
            return _hierarchicalCustomers;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HierarchicalCustomersItem
{
    public string CustomerID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public List<HierarchicalCustomersItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersItem_OrdersItem
{
    public double OrderID { get; set; }
    public double EmployeeID { get; set; }
    public string OrderDate { get; set; }
    public string RequiredDate { get; set; }
    public string ShippedDate { get; set; }
    public double ShipVia { get; set; }
    public double Freight { get; set; }
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public double ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
}

public class HierarchicalCustomers
    : List<HierarchicalCustomersItem>
{
    public HierarchicalCustomers()
    {
        this.Add(new HierarchicalCustomersItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersItem_OrdersItem>()
        {
            new HierarchicalCustomersItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0 },
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0 },
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0 }}
             },
            new HierarchicalCustomersItem_OrdersItem() { OrderID = 10274, EmployeeID = 6, OrderDate = @"1996-08-06T00:00:00", RequiredDate = @"1996-09-03T00:00:00", ShippedDate = @"1996-08-16T00:00:00", ShipVia = 1, Freight = 6.01, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 71, UnitPrice = 17.2, Quantity = 20, Discount = 0 },
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 27.8, Quantity = 7, Discount = 0 }}
             },
            new HierarchicalCustomersItem_OrdersItem() { OrderID = 10295, EmployeeID = 2, OrderDate = @"1996-09-02T00:00:00", RequiredDate = @"1996-09-30T00:00:00", ShippedDate = @"1996-09-10T00:00:00", ShipVia = 2, Freight = 1.15, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 56, UnitPrice = 30.4, Quantity = 4, Discount = 0 }}
             },
            // ... 21 more items
    }
}
```


## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) could have either movable or immovable columns. This is done via the [`Moving`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Moving) input of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid Moving=true>
    ...
    <IgbRowIsland Moving=true></IgbRowIsland>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

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

You can subscribe to the `ColumnMovingEnd` event of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the **Category** column after the **Change On Year(%)** column in the following code snippet.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

```razor
    <IgbHierarchicalGrid ShowGroupArea="true" @ref='Grid' Width="100%" Height="100%"
             AllowFiltering=true
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate=true
             Data=northwindEmployees
             Moving="true"
             ColumnMovingEndScript='onColumnMovingEnd'>
    </IgbHierarchicalGrid>
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
<IgbHierarchicalGrid class="grid"></IgbHierarchicalGrid>
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
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HierarchicalCustomers"
        Moving="true"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbPaginator
            Name="paginator"
            @ref="paginator"
            PerPage="15">
            </IgbPaginator>

            <IgbColumn
            Field="CustomerID"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            DataType="GridColumnDataType.String"
            Width="150px"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            DataType="GridColumnDataType.String"
            Width="150px"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            DataType="GridColumnDataType.String"
            Width="150px"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="City"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            DataType="GridColumnDataType.String"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column10"
            @ref="column10">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false"
            Moving="true">
                <IgbColumn
                Field="OrderID"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="EmployeeID"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="OrderDate"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="RequiredDate"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="ShippedDate"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="ShipVia"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="Freight"
                DataType="GridColumnDataType.Number">
                </IgbColumn>

                <IgbColumn
                Field="ShipName"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipAddress"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipCity"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipPostalCode"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="ShipCountry"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false"
                Moving="true">
                    <IgbColumn
                    Field="ProductID"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="UnitPrice"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    DataType="GridColumnDataType.Number">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var paginator = this.paginator;
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

    }

    private IgbHierarchicalGrid grid;
    private IgbPaginator paginator;
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

    private HierarchicalCustomers _hierarchicalCustomers = null;
    public HierarchicalCustomers HierarchicalCustomers
    {
        get
        {
            if (_hierarchicalCustomers == null)
            {
                _hierarchicalCustomers = new HierarchicalCustomers();
            }
            return _hierarchicalCustomers;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HierarchicalCustomersItem
{
    public string CustomerID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public List<HierarchicalCustomersItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersItem_OrdersItem
{
    public double OrderID { get; set; }
    public double EmployeeID { get; set; }
    public string OrderDate { get; set; }
    public string RequiredDate { get; set; }
    public string ShippedDate { get; set; }
    public double ShipVia { get; set; }
    public double Freight { get; set; }
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public double ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
}

public class HierarchicalCustomers
    : List<HierarchicalCustomersItem>
{
    public HierarchicalCustomers()
    {
        this.Add(new HierarchicalCustomersItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersItem_OrdersItem>()
        {
            new HierarchicalCustomersItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0 },
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0 },
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0 }}
             },
            new HierarchicalCustomersItem_OrdersItem() { OrderID = 10274, EmployeeID = 6, OrderDate = @"1996-08-06T00:00:00", RequiredDate = @"1996-09-03T00:00:00", ShippedDate = @"1996-08-16T00:00:00", ShipVia = 1, Freight = 6.01, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 71, UnitPrice = 17.2, Quantity = 20, Discount = 0 },
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 27.8, Quantity = 7, Discount = 0 }}
             },
            new HierarchicalCustomersItem_OrdersItem() { OrderID = 10295, EmployeeID = 2, OrderDate = @"1996-09-02T00:00:00", RequiredDate = @"1996-09-30T00:00:00", ShippedDate = @"1996-09-10T00:00:00", ShipVia = 2, Freight = 1.15, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersItem_OrdersItem_OrderDetailsItem() { ProductID = 56, UnitPrice = 30.4, Quantity = 4, Discount = 0 }}
             },
            // ... 21 more items
    }
}
```


## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
