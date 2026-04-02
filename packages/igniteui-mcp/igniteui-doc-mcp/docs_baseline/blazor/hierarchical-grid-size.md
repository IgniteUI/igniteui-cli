---
title: Blazor Hierarchical Grid Size - Ignite UI for Blazor
_description: Learn how to apply different size capabilities to the Hierarchical Grid component. You can use a set of compact view options in the Ignite UI for Blazor.
_keywords:  material size, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/size
_tocName: Size
_premium: true
---

# Blazor Hierarchical Grid Size

The Ignite UI for Blazor Size feature in Blazor Hierarchical Grid allows users to control the spacing and layout of data within the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html). By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content. They can choose from three size options:

- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## Blazor Hierarchical Grid Size Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebHierarchicalGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            Name="SizeEditor"
            @ref="sizeEditor"
            Label="Grid Size:"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
            DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
            ChangedScript="WebHierarchicalGridSetGridSize">
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
        AllowFiltering="true">
            <IgbColumn
            Field="CustomerID"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="City"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
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
                AutoGenerate="false">
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

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var sizeEditor = this.sizeEditor;
        var hierarchicalGrid = this.hierarchicalGrid;

        this.BindElements = () => {
            propertyEditor.Target = this.hierarchicalGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
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


## Usage

As you can see in the demo above, the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

```razor
<IgbHierarchicalGrid Class="gridSize" Data=northwindEmployees @ref=grid>
</IgbHierarchicalGrid>
```

And now let's see in details how each option reflects on the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) component. When you switch between different size options the height of each [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) element and the corresponding paddings will be changed. Also if you want to apply custom column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width), please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

<!-- ComponentStart: HierarchicalGrid -->

```razor
<div class="options vertical">
    <IgbPropertyEditorPanel
    DescriptionType="WebHierarchicalGrid"
    IsHorizontal="true"
    IsWrappingEnabled="true"
    Name="PropertyEditor"
    @ref="propertyEditor">
        <IgbPropertyEditorPropertyDescription
        Name="SizeEditor"
        @ref="sizeEditor"
        Label="Grid Size:"
        ValueType="PropertyEditorValueType.EnumValue"
        DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
        DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
        ChangedScript="WebGridSetGridSize">
        </IgbPropertyEditorPropertyDescription>
    </IgbPropertyEditorPanel>
</div>
```

<!-- ComponentEnd: HierarchicalGrid -->

Now we can add the markup.

```razor
<IgbHierarchicalGrid AutoGenerate="false" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="grid" AllowFiltering="true">
    <IgbColumn Field="CustomerID" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="CompanyName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="ContactName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Address" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="City" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="PostalCode" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Country" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Phone" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Fax" DataType="GridColumnDataType.String"></IgbColumn>

    <IgbRowIsland ChildDataKey="Orders" AutoGenerate="false">
        <IgbColumn Field="OrderID" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="OrderDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="RequiredDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="ShippedDate" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="ShipVia" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="Freight" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="ShipName" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipAddress" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipCity" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipPostalCode" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="ShipCountry" DataType="GridColumnDataType.String"></IgbColumn>

        <IgbRowIsland ChildDataKey="OrderDetails" AutoGenerate="false">
            <IgbColumn Field="ProductID" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="UnitPrice" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="Quantity" DataType="GridColumnDataType.Number"></IgbColumn>
            <IgbColumn Field="Discount" DataType="GridColumnDataType.Number"></IgbColumn>
        </IgbRowIsland>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the size:

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```razor
@code {
    // In JavaScript
    igRegisterScript("WebGridSetGridSize", (sender, evtArgs) => {
        var newVal = evtArgs.newValue.toLowerCase();
        var grid = document.getElementById("grid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }, false);
}
```

Another option that [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) provides for you, in order to be able to change the height of the rows in the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html), is the property [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight). So let's see in action how this property affects the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight) specified**.
- `--ig-size` will **affect all of the rest elements in the Hierarchical Grid**, as it has been described above.

We can now extend our sample and add [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight) property to the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html):

```razor
<IgbHierarchicalGrid
   @ref="grid"
   Id="grid"
   Class="gridSize"
   Width="100%"
   Height="100%"
   AutoGenerate="true"
   Data="northwindEmployees"
   RowHeight="rowHeight">
</IgbHierarchicalGrid>

@code {
   private string rowHeight = "80px";
}
```

 

## API References

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
