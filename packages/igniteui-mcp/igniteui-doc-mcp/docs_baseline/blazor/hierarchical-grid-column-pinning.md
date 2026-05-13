---
title: Blazor Hierarchical Grid Column Pinning - Ignite UI for Blazor
_description: Want to use the Pinning feature of the Ignite UI for Blazor when you develop your next app? Easily lock column or change column order with rich API.
_keywords: Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# Blazor Hierarchical Grid Column Pinning

The Ignite UI for Blazor Column Pinning feature in Blazor Hierarchical Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html). There’s an integrated UI for Column Pinning, accessible via the Blazor Hierarchical Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## Blazor Hierarchical Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="HierarchicalCustomersData"
        ColumnSelection="GridSelectionMode.Single"
        PrimaryKey="CustomerID">
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
            Field="CustomerID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company Name"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Contact Name">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Contact Title">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country">
            </IgbColumn>

            <IgbColumn
            Field="Phone">
            </IgbColumn>

            <IgbColumn
            Field="Fax">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumn
                Field="OrderDate"
                Header="Order Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="RequiredDate"
                Header="Required Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShippedDate"
                Header="Shipped Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipName"
                Header="Ship Name"
                DataType="GridColumnDataType.String"
                Resizable="true"
                Pinned="true">
                </IgbColumn>

                <IgbColumn
                Field="ShippedVia"
                Header="Shipped Via"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Freight"
                Header="Freight"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="UnitPrice"
                    Header="Unit Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    Header="Quantity"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    Header="Discount"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Weight"
                    Header="Weight"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Length"
                    Header="Length"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="TotalPrice"
                    Header="Total Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
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

    }

    private IgbHierarchicalGrid grid;

    private HierarchicalCustomersData _hierarchicalCustomersData = null;
    public HierarchicalCustomersData HierarchicalCustomersData
    {
        get
        {
            if (_hierarchicalCustomersData == null)
            {
                _hierarchicalCustomersData = new HierarchicalCustomersData();
            }
            return _hierarchicalCustomersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HierarchicalCustomersDataItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
    public double Weight { get; set; }
    public double Length { get; set; }
    public double TotalPrice { get; set; }
}

public class HierarchicalCustomersData
    : List<HierarchicalCustomersDataItem>
{
    public HierarchicalCustomersData()
    {
        this.Add(new HierarchicalCustomersDataItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de l'Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersDataItem_OrdersItem>()
        {
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0, Weight = 2.5, Length = 25.6, TotalPrice = 225.75 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0, Weight = 2.1, Length = 29.3, TotalPrice = 250.5 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0, Weight = 2.7, Length = 24.8, TotalPrice = 220.25 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10274, EmployeeID = 6, OrderDate = @"1996-08-06T00:00:00", RequiredDate = @"1996-09-03T00:00:00", ShippedDate = @"1996-08-16T00:00:00", ShipVia = 1, Freight = 6.01, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 71, UnitPrice = 17.2, Quantity = 20, Discount = 0 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 27.8, Quantity = 7, Discount = 0 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10295, EmployeeID = 2, OrderDate = @"1996-09-02T00:00:00", RequiredDate = @"1996-09-30T00:00:00", ShippedDate = @"1996-09-10T00:00:00", ShipVia = 2, Freight = 1.15, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 56, UnitPrice = 30.4, Quantity = 4, Discount = 0 }}
             },
            // ... 21 more items
    }
}
```

## Column Pinning API

Column pinning is controlled through the [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Pinned) property of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html). Pinned columns are rendered on the left side of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) body.

<!-- ComponentEnd: HierarchicalGrid -->

You may also use the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)'s [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PinColumn) or [`UnpinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_UnpinColumn) methods of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) to pin or unpin columns by their field name:

<!-- ComponentEnd: HierarchicalGrid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

## Pinning Position

You can change the column pinning position via the [`Pinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.

```razor
<IgbHierarchicalGrid Data=data AutoGenerate=true Pinning="pinningConfig"></IgbHierarchicalGrid>

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
        <IgbHierarchicalGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="HierarchicalCustomersData"
        ColumnSelection="GridSelectionMode.Single"
        PrimaryKey="CustomerID"
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
            Field="CustomerID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company Name"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Contact Name">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Contact Title">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country">
            </IgbColumn>

            <IgbColumn
            Field="Phone">
            </IgbColumn>

            <IgbColumn
            Field="Fax">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumn
                Field="OrderDate"
                Header="Order Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="RequiredDate"
                Header="Required Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShippedDate"
                Header="Shipped Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipName"
                Header="Ship Name"
                DataType="GridColumnDataType.String"
                Resizable="true"
                Pinned="true">
                </IgbColumn>

                <IgbColumn
                Field="ShippedVia"
                Header="Shipped Via"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Freight"
                Header="Freight"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="UnitPrice"
                    Header="Unit Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    Header="Quantity"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    Header="Discount"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Weight"
                    Header="Weight"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Length"
                    Header="Length"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="TotalPrice"
                    Header="Total Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
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

    }

    private IgbHierarchicalGrid grid;
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

    private HierarchicalCustomersData _hierarchicalCustomersData = null;
    public HierarchicalCustomersData HierarchicalCustomersData
    {
        get
        {
            if (_hierarchicalCustomersData == null)
            {
                _hierarchicalCustomersData = new HierarchicalCustomersData();
            }
            return _hierarchicalCustomersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HierarchicalCustomersDataItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
    public double Weight { get; set; }
    public double Length { get; set; }
    public double TotalPrice { get; set; }
}

public class HierarchicalCustomersData
    : List<HierarchicalCustomersDataItem>
{
    public HierarchicalCustomersData()
    {
        this.Add(new HierarchicalCustomersDataItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de l'Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersDataItem_OrdersItem>()
        {
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0, Weight = 2.5, Length = 25.6, TotalPrice = 225.75 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0, Weight = 2.1, Length = 29.3, TotalPrice = 250.5 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0, Weight = 2.7, Length = 24.8, TotalPrice = 220.25 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10274, EmployeeID = 6, OrderDate = @"1996-08-06T00:00:00", RequiredDate = @"1996-09-03T00:00:00", ShippedDate = @"1996-08-16T00:00:00", ShipVia = 1, Freight = 6.01, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 71, UnitPrice = 17.2, Quantity = 20, Discount = 0 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 27.8, Quantity = 7, Discount = 0 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10295, EmployeeID = 2, OrderDate = @"1996-09-02T00:00:00", RequiredDate = @"1996-09-30T00:00:00", ShippedDate = @"1996-09-10T00:00:00", ShipVia = 2, Freight = 1.15, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 56, UnitPrice = 30.4, Quantity = 4, Discount = 0 }}
             },
            // ... 21 more items
    }
}
```

### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        Name="grid"
        @ref="grid"
        Pinning="PinningConfig"
        Data="HierarchicalCustomersData"
        Moving="true"
        PrimaryKey="CustomerID"
        AutoGenerate="false"
        ColumnSelection="GridSelectionMode.Multiple"
        Width="100%"
        Height="480px"
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

            <IgbColumn
                Field="CustomerID"
                Hidden="true"
            />       
            <IgbColumn @ref="col1"
                Field="Company"
                Header="Company Name" 
            />
            <IgbColumn @ref="col2"
                Field="ContactName"
                Header="Contact Name" />
            <IgbColumn
                Field="ContactTitle"
                Header="Contact Title"
            />
            <IgbColumn
                Field="Address"
                Header="Address"
            />
            <IgbColumn
                Field="City"
                Header="City"
            />
            <IgbColumn
                Field="PostalCode"
                Header="Postal Code"
            />
            <IgbColumn
                Field="Country"
                Header="Country"
            />
            <IgbColumn
                Field="Phone"
            />
            <IgbColumn
                Field="Fax"
            />
            <IgbRowIsland
                ChildDataKey="Orders"
                AutoGenerate="false"
                Pinning="PinningConfig"
            >
                <IgbColumn
                    Field="OrderDate"
                    Header="Order Date"
                    DataType="GridColumnDataType.Date"
                    Resizable="true"
                    Pinned="true"
                    PinningPosition="ColumnPinningPosition.Start"
                />
                <IgbColumn
                    Field="RequiredDate"
                    Header="Required Date"
                    DataType="GridColumnDataType.Date"
                    Resizable="true"
                />
                <IgbColumn
                    Field="ShippedDate"
                    Header="Shipped Date"
                    DataType="GridColumnDataType.Date"
                    Resizable="true"
                />
                <IgbColumn
                    Field="ShipName"
                    Header="Ship Name"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                    PinningPosition="ColumnPinningPosition.End"
                    Pinned="true"
                />
                <IgbColumn
                    Field="ShippedVia"
                    Header="Shipped Via"
                    DataType="GridColumnDataType.String"
                    PinningPosition="ColumnPinningPosition.End"
                    Pinned="true"
                    Resizable="true"
                />
                <IgbColumn
                    Field="Freight"
                    Header="Freight"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                />
                <IgbRowIsland
                    ChildDataKey="OrderDetails"
                    AutoGenerate="false"
                >
                    <IgbColumn
                        Field="UnitPrice"
                        Header="Unit Price"
                        DataType="GridColumnDataType.String"
                        Resizable="true"
                    />
                    <IgbColumn
                        Field="Quantity"
                        Header="Quantity"
                        DataType="GridColumnDataType.String"
                        Resizable="true"
                    />
                    <IgbColumn
                        Field="Discount"
                        Header="Discount"
                        DataType="GridColumnDataType.String"
                        Resizable="true"
                    />
                    <IgbColumn
                        Field="Weight"
                        Header="Weight"
                        DataType="GridColumnDataType.String"
                        Resizable="true"
                    />
                    <IgbColumn
                        Field="Length"
                        Header="Length"
                        DataType="GridColumnDataType.String"
                        Resizable="true"
                    />
                    <IgbColumn
                        Field="TotalPrice"
                        Header="Total Price"
                        DataType="GridColumnDataType.String"
                        Resizable="true"
                    />
                </IgbRowIsland>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {
    private IgbHierarchicalGrid grid;
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

    private HierarchicalCustomersDataPin _hierarchicalCustomersData = null;
    private HierarchicalCustomersDataPin HierarchicalCustomersData
    {
        get
        {
            if (_hierarchicalCustomersData == null)
            {
                _hierarchicalCustomersData = new HierarchicalCustomersDataPin();
            }
            return _hierarchicalCustomersData;
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
        var selected = this.grid.SelectedColumns();
        var gridColumns = this.grid.ActualColumnList.Where(col => selected.Contains(col)).ToList();

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

        var selected = this.grid.SelectedColumns();
        var gridColumns = this.grid.ActualColumnList.Where(col => selected.Contains(col)).ToList();

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

        var selected = this.grid.SelectedColumns();
        var gridColumns = this.grid.ActualColumnList.Where(col => selected.Contains(col)).ToList();

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
public class HierarchicalCustomersDataPinItem
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
    public List<HierarchicalCustomersDataPinItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersDataPinItem_OrdersItem
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
    public List<HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
    public double Weight { get; set; }
    public double Length { get; set; }
    public double TotalPrice { get; set; }
}

public class HierarchicalCustomersDataPin
    : List<HierarchicalCustomersDataPinItem>
{
    public HierarchicalCustomersDataPin()
    {
        this.Add(new HierarchicalCustomersDataPinItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de l'Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersDataPinItem_OrdersItem>()
        {
            new HierarchicalCustomersDataPinItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0, Weight = 2.5, Length = 25.6, TotalPrice = 225.75 },
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0, Weight = 2.1, Length = 29.3, TotalPrice = 250.5 },
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0, Weight = 2.7, Length = 24.8, TotalPrice = 220.25 }}
             }}
            new HierarchicalCustomersDataPinItem_OrdersItem() { OrderID = 10249, EmployeeID = 6, OrderDate = @"1996-07-05T00:00:00", RequiredDate = @"1996-08-16T00:00:00", ShippedDate = @"1996-07-10T00:00:00", ShipVia = 1, Freight = 11.61, ShipName = @"Toms Spezialitäten", ShipAddress = @"Luisenstr. 48", ShipCity = @"Münster", ShipPostalCode = 44087, ShipCountry = @"Germany", OrderDetails = new List<HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 14, UnitPrice = 18.6, Quantity = 9, Discount = 0, Weight = 3.2, Length = 28.6, TotalPrice = 253.75 },
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 51, UnitPrice = 42.4, Quantity = 40, Discount = 0, Weight = 2.5, Length = 25.6, TotalPrice = 225.75 }}
             }}
            new HierarchicalCustomersDataPinItem_OrdersItem() { OrderID = 10250, EmployeeID = 4, OrderDate = @"1996-07-08T00:00:00", RequiredDate = @"1996-08-05T00:00:00", ShippedDate = @"1996-07-12T00:00:00", ShipVia = 2, Freight = 65.83, ShipName = @"Hanari Carnes", ShipAddress = @"Rua do Paço, 67", ShipCity = @"Lyon", ShipPostalCode = 5454, ShipCountry = @"Brazil", OrderDetails = new List<HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 41, UnitPrice = 7.7, Quantity = 10, Discount = 0, Weight = 2.9, Length = 26.9, TotalPrice = 233.5 },
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 51, UnitPrice = 42.4, Quantity = 35, Discount = 0.16, Weight = 3.5, Length = 27.4, TotalPrice = 261.25 },
                new HierarchicalCustomersDataPinItem_OrdersItem_OrderDetailsItem() { ProductID = 65, UnitPrice = 16.8, Quantity = 15, Discount = 0.16, Weight = 2.2, Length = 30.2, TotalPrice = 249.75 }}
             }}
    }
}
```

## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="HierarchicalCustomersData"
        ColumnSelection="GridSelectionMode.Single"
        PrimaryKey="CustomerID">
            <IgbColumn
            Field="CustomerID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company Name"
            Pinned="true"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Contact Name"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Contact Title"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumn
                Field="OrderDate"
                Header="Order Date"
                DataType="GridColumnDataType.Date"
                Resizable="true"
                HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                Name="column10"
                @ref="column10">
                </IgbColumn>

                <IgbColumn
                Field="RequiredDate"
                Header="Required Date"
                DataType="GridColumnDataType.Date"
                Resizable="true"
                HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                Name="column11"
                @ref="column11">
                </IgbColumn>

                <IgbColumn
                Field="ShippedDate"
                Header="Shipped Date"
                DataType="GridColumnDataType.Date"
                Resizable="true"
                HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                Name="column12"
                @ref="column12">
                </IgbColumn>

                <IgbColumn
                Field="ShipName"
                Header="Ship Name"
                DataType="GridColumnDataType.String"
                Resizable="true"
                Pinned="true"
                HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                Name="column13"
                @ref="column13">
                </IgbColumn>

                <IgbColumn
                Field="ShippedVia"
                Header="Shipped Via"
                DataType="GridColumnDataType.String"
                Resizable="true"
                HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                Name="column14"
                @ref="column14">
                </IgbColumn>

                <IgbColumn
                Field="Freight"
                Header="Freight"
                DataType="GridColumnDataType.String"
                Resizable="true"
                HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                Name="column15"
                @ref="column15">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="UnitPrice"
                    Header="Unit Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                    HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                    Name="column16"
                    @ref="column16">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    Header="Quantity"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                    HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                    Name="column17"
                    @ref="column17">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    Header="Discount"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                    HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                    Name="column18"
                    @ref="column18">
                    </IgbColumn>

                    <IgbColumn
                    Field="Weight"
                    Header="Weight"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                    HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                    Name="column19"
                    @ref="column19">
                    </IgbColumn>

                    <IgbColumn
                    Field="Length"
                    Header="Length"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                    HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                    Name="column20"
                    @ref="column20">
                    </IgbColumn>

                    <IgbColumn
                    Field="TotalPrice"
                    Header="Total Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true"
                    HeaderTemplateScript="HierarchicalGridPinHeaderTemplate"
                    Name="column21"
                    @ref="column21">
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
        var column12 = this.column12;
        var column13 = this.column13;
        var column14 = this.column14;
        var column15 = this.column15;
        var column16 = this.column16;
        var column17 = this.column17;
        var column18 = this.column18;
        var column19 = this.column19;
        var column20 = this.column20;
        var column21 = this.column21;

    }

    private IgbHierarchicalGrid grid;
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
    private IgbColumn column12;
    private IgbColumn column13;
    private IgbColumn column14;
    private IgbColumn column15;
    private IgbColumn column16;
    private IgbColumn column17;
    private IgbColumn column18;
    private IgbColumn column19;
    private IgbColumn column20;
    private IgbColumn column21;

    private HierarchicalCustomersData _hierarchicalCustomersData = null;
    public HierarchicalCustomersData HierarchicalCustomersData
    {
        get
        {
            if (_hierarchicalCustomersData == null)
            {
                _hierarchicalCustomersData = new HierarchicalCustomersData();
            }
            return _hierarchicalCustomersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HierarchicalCustomersDataItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
    public double Weight { get; set; }
    public double Length { get; set; }
    public double TotalPrice { get; set; }
}

public class HierarchicalCustomersData
    : List<HierarchicalCustomersDataItem>
{
    public HierarchicalCustomersData()
    {
        this.Add(new HierarchicalCustomersDataItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de l'Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersDataItem_OrdersItem>()
        {
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0, Weight = 2.5, Length = 25.6, TotalPrice = 225.75 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0, Weight = 2.1, Length = 29.3, TotalPrice = 250.5 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0, Weight = 2.7, Length = 24.8, TotalPrice = 220.25 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10274, EmployeeID = 6, OrderDate = @"1996-08-06T00:00:00", RequiredDate = @"1996-09-03T00:00:00", ShippedDate = @"1996-08-16T00:00:00", ShipVia = 1, Freight = 6.01, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 71, UnitPrice = 17.2, Quantity = 20, Discount = 0 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 27.8, Quantity = 7, Discount = 0 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10295, EmployeeID = 2, OrderDate = @"1996-09-02T00:00:00", RequiredDate = @"1996-09-30T00:00:00", ShippedDate = @"1996-09-10T00:00:00", ShipVia = 2, Freight = 1.15, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 56, UnitPrice = 30.4, Quantity = 4, Discount = 0 }}
             },
            // ... 21 more items
    }
}
```

## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```razor
<IgbHierarchicalGrid Id="grid"></IgbHierarchicalGrid>
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

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="HierarchicalCustomersData"
        ColumnSelection="GridSelectionMode.Single"
        PrimaryKey="CustomerID">
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
            Field="CustomerID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company Name"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Contact Name">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Contact Title">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country">
            </IgbColumn>

            <IgbColumn
            Field="Phone">
            </IgbColumn>

            <IgbColumn
            Field="Fax">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumn
                Field="OrderDate"
                Header="Order Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="RequiredDate"
                Header="Required Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShippedDate"
                Header="Shipped Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipName"
                Header="Ship Name"
                DataType="GridColumnDataType.String"
                Resizable="true"
                Pinned="true">
                </IgbColumn>

                <IgbColumn
                Field="ShippedVia"
                Header="Shipped Via"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Freight"
                Header="Freight"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="UnitPrice"
                    Header="Unit Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    Header="Quantity"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    Header="Discount"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Weight"
                    Header="Weight"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Length"
                    Header="Length"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="TotalPrice"
                    Header="Total Price"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
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

    }

    private IgbHierarchicalGrid grid;

    private HierarchicalCustomersData _hierarchicalCustomersData = null;
    public HierarchicalCustomersData HierarchicalCustomersData
    {
        get
        {
            if (_hierarchicalCustomersData == null)
            {
                _hierarchicalCustomersData = new HierarchicalCustomersData();
            }
            return _hierarchicalCustomersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HierarchicalCustomersDataItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem
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
    public List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
    public double Weight { get; set; }
    public double Length { get; set; }
    public double TotalPrice { get; set; }
}

public class HierarchicalCustomersData
    : List<HierarchicalCustomersDataItem>
{
    public HierarchicalCustomersData()
    {
        this.Add(new HierarchicalCustomersDataItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de l'Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersDataItem_OrdersItem>()
        {
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0, Weight = 2.5, Length = 25.6, TotalPrice = 225.75 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0, Weight = 2.1, Length = 29.3, TotalPrice = 250.5 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0, Weight = 2.7, Length = 24.8, TotalPrice = 220.25 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10274, EmployeeID = 6, OrderDate = @"1996-08-06T00:00:00", RequiredDate = @"1996-09-03T00:00:00", ShippedDate = @"1996-08-16T00:00:00", ShipVia = 1, Freight = 6.01, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 71, UnitPrice = 17.2, Quantity = 20, Discount = 0 },
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 27.8, Quantity = 7, Discount = 0 }}
             },
            new HierarchicalCustomersDataItem_OrdersItem() { OrderID = 10295, EmployeeID = 2, OrderDate = @"1996-09-02T00:00:00", RequiredDate = @"1996-09-30T00:00:00", ShippedDate = @"1996-09-10T00:00:00", ShipVia = 2, Freight = 1.15, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de l'Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersDataItem_OrdersItem_OrderDetailsItem() { ProductID = 56, UnitPrice = 30.4, Quantity = 4, Discount = 0 }}
             },
            // ... 21 more items
    }
}
```

<!-- end: WebComponents, Blazor -->

## API References

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

<!-- ComponentStart: Grid, HierarchicalGrid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid, HierarchicalGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
