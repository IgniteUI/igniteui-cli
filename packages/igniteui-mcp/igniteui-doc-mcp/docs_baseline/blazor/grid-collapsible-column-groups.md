---
title: Blazor Grid Collapsible Column Groups - Ignite UI for Blazor
_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our Blazor Grid. Try it now!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["ColumnGroup"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/collapsible-column-groups
_tocName: Collapsible Column Groups
_premium: true
---

# Blazor Grid Collapsible Column Groups Overview

The Ignite UI for Blazor Collapsible Column Groups feature in Blazor Grid allows you to organize and manage multiple levels of nested columns and column groups in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) by grouping them together and providing the option to collapse or expand these groups for improved data visualization and navigation.

## Blazor Grid Collapsible Column Groups Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesData"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbColumnGroup
            Header="Customer Information"
            Collapsible="true">
                <IgbColumn
                Field="CustomerName"
                Header="Customer Name"
                VisibleWhenCollapsed="true">
                </IgbColumn>

                <IgbColumn
                Field="CustomerID"
                Header="Customer ID"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="CustomerFirstName"
                Header="First Name"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="CustomerLastName"
                Header="Last Name"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumnGroup
                Header="Customer Address"
                Expanded="false"
                Collapsible="true">
                    <IgbColumn
                    Field="CustomerAddress"
                    Header="Full Address"
                    Width="250px"
                    VisibleWhenCollapsed="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    VisibleWhenCollapsed="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    VisibleWhenCollapsed="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="Country"
                    VisibleWhenCollapsed="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    Header="Postal Code"
                    VisibleWhenCollapsed="false">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumn
            Field="ShipperName"
            Header="Shipper Name">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date">
            </IgbColumn>

            <IgbColumnGroup
            Header="Product Details"
            Collapsible="true"
            Expanded="false">
                <IgbColumn
                Field="ProductName"
                Header="Name">
                </IgbColumn>

                <IgbColumn
                Field="UnitPrice"
                Header="Unit Price">
                </IgbColumn>

                <IgbColumn
                Field="ProductID"
                Header="ID"
                VisibleWhenCollapsed="true">
                </IgbColumn>

                <IgbColumn
                Field="Quantity"
                VisibleWhenCollapsed="false">
                </IgbColumn>

                <IgbColumn
                Field="Discontinued"
                VisibleWhenCollapsed="false">
                </IgbColumn>

            </IgbColumnGroup>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private InvoicesData _invoicesData = null;
    public InvoicesData InvoicesData
    {
        get
        {
            if (_invoicesData == null)
            {
                _invoicesData = new InvoicesData();
            }
            return _invoicesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class InvoicesDataItem
{
    public string ShipName { get; set; }
    public string ShipAddress { get; set; }
    public string ShipCity { get; set; }
    public double ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public string ShipRegion { get; set; }
    public string ShipperName { get; set; }
    public double CustomerID { get; set; }
    public string CustomerName { get; set; }
    public string CustomerFirstName { get; set; }
    public string CustomerLastName { get; set; }
    public string CustomerAddress { get; set; }
    public string Salesperson { get; set; }
    public double OrderID { get; set; }
    public string OrderDate { get; set; }
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double ExtendedPrice { get; set; }
    public double Freight { get; set; }
    public bool Discontinued { get; set; }
    public string Region { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public double PostalCode { get; set; }
}

public class InvoicesData
    : List<InvoicesDataItem>
{
    public InvoicesData()
    {
        this.Add(new InvoicesDataItem() { ShipName = @"Jefferson Home", ShipAddress = @"124 Wall Street", ShipCity = @"Miami", ShipPostalCode = 60098, ShipCountry = @"USA", ShipRegion = @"South East", ShipperName = @"Federal Shipping", CustomerID = 1000, CustomerName = @"Martin Jefferson", CustomerFirstName = @"Martin", CustomerLastName = @"Jefferson", CustomerAddress = @"124 Wall Street, Miami, USA, 60098", Salesperson = @"Nancy Jefferson", OrderID = 1931, OrderDate = @"3/14/2022", ProductID = 189, ProductName = @"IPad", UnitPrice = 16150.61, Quantity = 3, ExtendedPrice = 48451.83, Freight = 980.61, Discontinued = false, Region = @"South East", Address = @"124 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 60098 });
        this.Add(new InvoicesDataItem() { ShipName = @"Black Home", ShipAddress = @"162 Main Street", ShipCity = @"Miami", ShipPostalCode = 80193, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1001, CustomerName = @"Anna Black", CustomerFirstName = @"Anna", CustomerLastName = @"Black", CustomerAddress = @"162 Main Street, Miami, USA, 80193", Salesperson = @"Anna Smith", OrderID = 1163, OrderDate = @"5/22/2022", ProductID = 138, ProductName = @"Mac Book Pro", UnitPrice = 18520.59, Quantity = 4, ExtendedPrice = 74082.36, Freight = 850.59, Discontinued = false, Region = @"West", Address = @"162 Main Street", City = @"Miami", Country = @"USA", PostalCode = 80193 });
        this.Add(new InvoicesDataItem() { ShipName = @"Watson Townhouse", ShipAddress = @"164 Wall Street", ShipCity = @"Miami", ShipPostalCode = 50111, ShipCountry = @"USA", ShipRegion = @"West", ShipperName = @"United Package", CustomerID = 1002, CustomerName = @"Max Watson", CustomerFirstName = @"Max", CustomerLastName = @"Watson", CustomerAddress = @"164 Wall Street, Miami, USA, 50111", Salesperson = @"Martin Watson", OrderID = 1230, OrderDate = @"2/9/2022", ProductID = 118, ProductName = @"Mac Book Air", UnitPrice = 25310.39, Quantity = 3, ExtendedPrice = 75931.17, Freight = 210.39, Discontinued = false, Region = @"West", Address = @"164 Wall Street", City = @"Miami", Country = @"USA", PostalCode = 50111 });
        // ... 496 more items
    }
}
```


## Setup

To get started with the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) and the **Collapsible multi-column headers** feature, first you need to install Ignite UI for Blazor by typing the following command:

<!-- Blazor -->

```cmd
> dotnet add package IgniteUI.Blazor --version 25.2.83 (March 2026)
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

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
