---
title: Blazor Hierarchical Grid Multi-Column Headers - Ignite UI for Blazor
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Blazor grid and combine them into multi headers.
_keywords: Multi-Column Headers, Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# Blazor Hierarchical Grid Multi-Column Headers Overview

The Ignite UI for Blazor Multi-Column Headers feature in Blazor Hierarchical Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## Blazor Hierarchical Grid Multi-Column Headers Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Pin First Group")"
            ButtonClicked="WebHierarchicalGridPinFirstGroupToggle"
            Name="propertyEditorPropertyDescription1"
            @ref="propertyEditorPropertyDescription1">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            ValueType="PropertyEditorValueType.Button"
            PrimitiveValue="@("Hide First Group")"
            ButtonClicked="WebHierarchicalGridHideFirstGroupToggle"
            Name="propertyEditorPropertyDescription2"
            @ref="propertyEditorPropertyDescription2">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HierarchicalCustomers"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="CustomerID"
        Moving="true"
        AllowFiltering="true">
            <IgbColumn
            Field="CustomerID"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="Company"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Address"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumnGroup
                Header="Order Information">
                    <IgbColumnGroup
                    Header="Order Details">
                        <IgbColumn
                        Field="OrderID"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="EmployeeID"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="OrderDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="RequiredDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                    <IgbColumnGroup
                    Header="General Shipping Information">
                        <IgbColumn
                        Field="ShipDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipVia"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="Freight"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipName"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                    <IgbColumnGroup
                    Header="Shipping Locations">
                        <IgbColumn
                        Field="ShipAddress"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipCity"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipPostalCode"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipCountry"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                </IgbColumnGroup>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="ProductID"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="UnitPrice"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var propertyEditorPropertyDescription1 = this.propertyEditorPropertyDescription1;
        var propertyEditorPropertyDescription2 = this.propertyEditorPropertyDescription2;
        var hierarchicalGrid = this.hierarchicalGrid;

        this.BindElements = () => {
            propertyEditor.Target = this.hierarchicalGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription1;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription2;
    private IgbHierarchicalGrid hierarchicalGrid;

    public void WebHierarchicalGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.hierarchicalGrid.GetColumns().ElementAt(1);
        columnGroup.Pinned = !columnGroup.Pinned;
    }

    public void WebHierarchicalGridHideFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.hierarchicalGrid.GetColumns().ElementAt(1);
        columnGroup.Hidden = !columnGroup.Hidden;
    }

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


The declaration of multi-column headers is achieved by wrapping a set of columns into an [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) component with [`Header`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Header) title information passed.

```razor
<IgbHierarchicalGrid Data="HierarchicalCustomers" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID" Moving="true" AllowFiltering="true">
    <IgbColumn Field="CustomerID" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumnGroup Header="Address Information">
        <IgbColumnGroup Header="Location">
            <IgbColumn Field="Address" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="City" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="PostalCode" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Country" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
        <IgbColumnGroup Header="Contact Information">
            <IgbColumn Field="Phone" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Fax" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) leads to the desired result.

```razor
<IgbHierarchicalGrid Data="HierarchicalCustomers" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID" Moving="true" AllowFiltering="true">
    <IgbColumn Field="CustomerID" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumnGroup Header="Person Details">
            <IgbColumn Field="ContactName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="ContactTitle" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

Every [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> [!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

```razor
<IgbHierarchicalGrid Data="HierarchicalCustomers" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID" Moving="true" AllowFiltering="true">
    <IgbColumn Field="CustomerID" Sortable=true Resizable=true Movable=true DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumnGroup Movable=true Pinned="true" Header="General Information">
        <IgbColumn Field="CompanyName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumnGroup Movable=true Pinned="true" Header="General Information">
            <IgbColumn Field="ContactName" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="ContactTitle" Sortable=true Resizable=true DataType="GridColumnDataType.String"></IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

## Multi-Column Header Template

Each of the column groups of the grid can be templated separately. The column group expects `RenderFragment` for the [`HeaderTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_HeaderTemplate) property.
The expression is provided with the column group object as a context.

```razor
<IgbColumnGroup Header="Address Information" HeaderTemplate="Template">
</IgbColumnGroup>

@code {
    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        string value = ctx.Column.Header.ToUpper();
        return @<span>@value</span>;
    };
}
```

If you want to re-use a single template for several column groups, you could set the [`HeaderTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_HeaderTemplate) property of the column group like this:

```razor
<IgbColumnGroup Header="General Information" HeaderTemplate="Template">
</IgbColumnGroup>
<IgbColumnGroup Header="Address Information" HeaderTemplate="Template">
</IgbColumnGroup>

@code {
    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        string value = ctx.Column.Header.ToUpper();
        return @<span>@value</span>;
    };
}
```

> [!Note]
> If a header is re-templated and the corresponding column group is movable, you have to set the **draggable** attribute to **false** on the templated elements, so that you can handle any of the events that are applied!

```razor
@code {
    public Dictionary<string, object> DraggableAttributes { get; set; } =
        new Dictionary<string, object>()
        {
            { "draggable", "false" }
        };

    public RenderFragment<IgbColumnTemplateContext> Template = (ctx) => {
        return @<IgbIcon AdditionalAttributes="DraggableAttributes"  @onclick="onClick"/>;
    };
}
```

The following sample demonstrates how to implement collapsible column groups using header templates.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HierarchicalCustomers"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="CustomerID"
        Moving="true"
        AllowFiltering="true">
            <IgbColumn
            Field="CustomerID"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information"
            HeaderTemplateScript="WebHierarchicalGridColumnGroupHeaderTemplate"
            Name="columnGroup1"
            @ref="columnGroup1">
                <IgbColumn
                Field="Company"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information"
            HeaderTemplateScript="WebHierarchicalGridColumnGroupHeaderTemplate"
            Name="columnGroup2"
            @ref="columnGroup2">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Address"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumnGroup
                Header="Order Information">
                    <IgbColumnGroup
                    Header="Order Details"
                    HeaderTemplateScript="WebHierarchicalGridColumnGroupHeaderTemplate"
                    Name="columnGroup3"
                    @ref="columnGroup3">
                        <IgbColumn
                        Field="OrderID"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="EmployeeID"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="OrderDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="RequiredDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                    <IgbColumnGroup
                    Header="General Shipping Information"
                    HeaderTemplateScript="WebHierarchicalGridColumnGroupHeaderTemplate"
                    Name="columnGroup4"
                    @ref="columnGroup4">
                        <IgbColumn
                        Field="ShipDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipVia"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="Freight"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipName"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                    <IgbColumnGroup
                    Header="Shipping Locations"
                    HeaderTemplateScript="WebHierarchicalGridColumnGroupHeaderTemplate"
                    Name="columnGroup5"
                    @ref="columnGroup5">
                        <IgbColumn
                        Field="ShipAddress"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipCity"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipPostalCode"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipCountry"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                </IgbColumnGroup>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="ProductID"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="UnitPrice"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
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
        var hierarchicalGrid = this.hierarchicalGrid;
        var columnGroup1 = this.columnGroup1;
        var columnGroup2 = this.columnGroup2;
        var columnGroup3 = this.columnGroup3;
        var columnGroup4 = this.columnGroup4;
        var columnGroup5 = this.columnGroup5;

    }

    private IgbHierarchicalGrid hierarchicalGrid;
    private IgbColumnGroup columnGroup1;
    private IgbColumnGroup columnGroup2;
    private IgbColumnGroup columnGroup3;
    private IgbColumnGroup columnGroup4;
    private IgbColumnGroup columnGroup5;

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


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbHierarchicalGrid class="grid"></IgbHierarchicalGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HierarchicalCustomers"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="CustomerID"
        Moving="true"
        AllowFiltering="true">
            <IgbColumn
            Field="CustomerID"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="Company"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ContactName"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="ContactTitle"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Address"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumnGroup
                Header="Order Information">
                    <IgbColumnGroup
                    Header="Order Details">
                        <IgbColumn
                        Field="OrderID"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="EmployeeID"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="OrderDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="RequiredDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                    <IgbColumnGroup
                    Header="General Shipping Information">
                        <IgbColumn
                        Field="ShipDate"
                        DataType="GridColumnDataType.Date"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipVia"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="Freight"
                        DataType="GridColumnDataType.Number"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipName"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                    <IgbColumnGroup
                    Header="Shipping Locations">
                        <IgbColumn
                        Field="ShipAddress"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipCity"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipPostalCode"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                        <IgbColumn
                        Field="ShipCountry"
                        DataType="GridColumnDataType.String"
                        Sortable="true"
                        Resizable="true">
                        </IgbColumn>

                    </IgbColumnGroup>

                </IgbColumnGroup>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="ProductID"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="UnitPrice"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
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
        var hierarchicalGrid = this.hierarchicalGrid;

    }

    private IgbHierarchicalGrid hierarchicalGrid;

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

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)
- [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
