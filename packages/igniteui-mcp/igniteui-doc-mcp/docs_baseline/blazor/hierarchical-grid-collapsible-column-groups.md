---
title: Blazor Hierarchical Grid Collapsible Column Groups - Ignite UI for Blazor
_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our Blazor Hierarchical Grid. Try it now!
_keywords: Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["ColumnGroup"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/collapsible-column-groups
_tocName: Collapsible Column Groups
_premium: true
---

# Blazor Hierarchical Grid Collapsible Column Groups Overview

The Ignite UI for Blazor Collapsible Column Groups feature in Blazor Hierarchical Grid allows you to organize and manage multiple levels of nested columns and column groups in the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) by grouping them together and providing the option to collapse or expand these groups for improved data visualization and navigation.

## Blazor Hierarchical Grid Collapsible Column Groups Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HierarchicalCustomersData"
        Name="grid"
        @ref="grid"
        Id="grid"
        PrimaryKey="CustomerID">
            <IgbColumnGroup
            Header="General Information"
            Collapsible="true">
                <IgbColumn
                Field="ContactName"
                Header="Contact Name"
                VisibleWhenCollapsed="true">
                </IgbColumn>

                <IgbColumn
                Field="ContactTitle"
                Header="Contact Title"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="CustomerID"
                Header="Customer ID"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="Company"
                Header="Company Name"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumnGroup
                Header="Address Information"
                Collapsible="true">
                    <IgbColumnGroup
                    Header="Location"
                    Width="250px"
                    VisibleWhenCollapsed="true">
                        <IgbColumn
                        Field="Country"
                        Header="Country"
                        VisibleWhenCollapsed="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="City"
                        Header="City"
                        VisibleWhenCollapsed="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="Address"
                        Header="Address"
                        VisibleWhenCollapsed="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="PostalCode"
                        Header="Postal Code"
                        VisibleWhenCollapsed="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumnGroup
                Header="Order Details"
                Collapsible="true">
                    <IgbColumn
                    Field="OrderID"
                    Header="Order ID"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="EmployeeID"
                    Header="Employee ID"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="OrderDate"
                    Header="Order Date"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="RequiredDate"
                    Header="Required Date"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="General Shipping Information"
                Collapsible="true">
                    <IgbColumn
                    Field="ShippedDate"
                    Header="Shipped Date"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ShipVia"
                    Header="Ship Via"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Freight"
                    Header="Freight"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ShipName"
                    Header="Ship Name"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Shipping Location"
                Collapsible="true">
                    <IgbColumn
                    Field="ShipAddress"
                    Header="Ship Address"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ShipCity"
                    Header="Ship City"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ShipPostalCode"
                    Header="Ship Postal Code"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ShipCountry"
                    Header="Ship Country"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="ProductID"
                    Header="Product ID"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

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


## Setup

To get started with the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) and the **Collapsible multi-column headers** feature, first you need to install Ignite UI for Blazor by typing the following command:

<!-- Blazor -->

```cmd
> dotnet add package IgniteUI.Blazor --version 25.2.77 (March 2026)
```

<!-- end: Blazor -->

For a complete introduction to the Ignite UI for Blazor, read the [getting started](../../general-getting-started.md) topic.

Also, we strongly suggest that you take a brief look at [multi-column headers](multi-column-headers.md) topic, to see more detailed information on how to setup the column groups in your grid.

## Usage

**Collapsible Column Groups** is a part of the multi-column headers feature which provides a way to collapse/expand a column group to a smaller set of data. When a column group is collapsed, a subset of the columns will be shown to the end-user and the other child columns of the group will hide. Each collapsed/expanded column can be bound to the grid data source, or it may be unbound, thus calculated.

In order to define a column group as collapsible, you need to set the [`Collapsible`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html#IgniteUI_Blazor_Controls_IgbColumnGroup_Collapsible) property on the [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) to **true**.

You need to define the property [`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) to at least two child columns. At least one column must be visible when the group is collapsed ([`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) set to **true**) and at least one column must be hidden when the group is expanded ([`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) set to `false`), otherwise the **collapsible functionality will be disabled**. If [`VisibleWhenCollapsed`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_VisibleWhenCollapsed) is not specified for some of the child columns, then this column will be always visible regardless of whether the parent state is expanded or collapsed.

Let's see the markup below:

```razor
 <IgbColumnGroup Header="Customer Information" Collapsible="true">
    <!--The column below will be visible when its parent is collapsed-->
    <IgbColumn Field="CustomerName" Header="Full name" VisibleWhenCollapsed="true"></IgbColumn>
        <!--The three columns below will be visible when its parent is expanded-->
        <IgbColumn Field="CustomerID" Header="Customer ID" VisibleWhenCollapsed="false"></IgbColumn>
        <IgbColumn Field="FirstName" Header="First Name" VisibleWhenCollapsed="false"></IgbColumn>
        <IgbColumn Field="LastName" Header="Last Name" VisibleWhenCollapsed="false"></IgbColumn>
        <IgbColumnGroup Header="Customer Address">
            <IgbColumn Field="Country" Header="Country" Sortable="true"></IgbColumn>
            <IgbColumn Field="City" Header="City" Sortable="true"></IgbColumn>
        </IgbColumnGroup>
 </IgbColumnGroup>
```

To summarize, every child column has three states:

- Can be always visible, no matter the expanded state of its parent.
- Can be visible, when its parent is collapsed.
- Can be hidden, when its parent is collapsed.

The initial state of the column group which is specified as collapsible is [`Expanded`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html#IgniteUI_Blazor_Controls_IgbColumnGroup_Expanded) set to **true**, but you can easily change this behavior by setting it to **false**.

> **Note**
> Please keep in mind that initially collapse group option takes precedence over column hidden - If you declared your column to be hidden using the property
> hidden and you have a group defined where the same column should be shown, the column will be shown.

## API References

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
