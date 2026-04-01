---
title: Blazor Grid Size - Ignite UI for Blazor
_description: Learn how to apply different size capabilities to the Grid component. You can use a set of compact view options in the Ignite UI for Blazor.
_keywords:  material size, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/size
_tocName: Size
_premium: true
---

# Blazor Grid Size

The Ignite UI for Blazor Size feature in Blazor Grid allows users to control the spacing and layout of data within the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content. They can choose from three size options:

- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## Blazor Grid Size Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
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
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="InvoicesData"
        AllowFiltering="true">
            <IgbColumn
            Field="CustomerName"
            Header="Customer Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Salesperson"
            Header="Sales Person"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipperName"
            Header="Shipper Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ProductID"
            Header="ID"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Filterable="false">
            </IgbColumn>

            <IgbColumn
            Field="Quantity"
            Header="Quantity"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Filterable="false">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipName"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCountry"
            Header="Country"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipCity"
            Header="City"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="ShipPostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var sizeEditor = this.sizeEditor;
        var grid = this.grid;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
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


## Usage

As you can see in the demo above, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

```razor
<IgbGrid Class="gridSize" Data=northwindEmployees @ref=grid>
</IgbGrid>
```

And now let's see in details how each option reflects on the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component. When you switch between different size options the height of each [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) element and the corresponding paddings will be changed. Also if you want to apply custom column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width), please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `56px`;

> \[!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

<!-- ComponentStart: Grid -->

```razor
<div class="options vertical">
    <IgbPropertyEditorPanel
    DescriptionType="WebGrid"
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

Now we can add the markup.

```razor
<div class="container vertical">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="InvoicesData"
        AllowFiltering="true"
        Id="grid"
        Name="grid"
        @ref="grid">
            <IgbColumn Field="CustomerName" Header="Customer Name" Sortable="true" HasSummary="true" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Country" Header="Country" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="City" Header="City" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="Address" Header="Address" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="PostalCode" Header="Postal Code" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="Salesperson" Header="Sales Person" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipperName" Header="Shipper Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ProductID" Header="ID" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ProductName" Header="Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="UnitPrice" Header="Unit Price" DataType="GridColumnDataType.Number" Sortable="true" HasSummary="true" Filterable="false"></IgbColumn>
            <IgbColumn Field="Quantity" Header="Quantity" DataType="GridColumnDataType.Number" Sortable="true" HasSummary="true" Filterable="false"></IgbColumn>
            <IgbColumn Field="Discontinued" Header="Discontinued" DataType="GridColumnDataType.Boolean" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="Discontinued" Header="Discontinued" DataType="GridColumnDataType.Boolean" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipName" Header="Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipCountry" Header="Country" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"> </IgbColumn>
            <IgbColumn Field="ShipCity" Header="City" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
            <IgbColumn Field="ShipPostalCode" Header="Postal Code" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true"></IgbColumn>
        </IgbGrid>
    </div>
</div>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the size:

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- Blazor -->

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

<!-- end: Blazor -->

Another option that [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides for you, in order to be able to change the height of the rows in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), is the property [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight). So let's see in action how this property affects the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight) specified**.
- `--ig-size` will **affect all of the rest elements in the Grid**, as it has been described above.

We can now extend our sample and add [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight) property to the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html):

```razor
<IgbGrid
   @ref="grid"
   Id="grid"
   Class="gridSize"
   Width="100%"
   Height="100%"
   AutoGenerate="true"
   Data="northwindEmployees"
   RowHeight="rowHeight">
</IgbGrid>

@code {
   private string rowHeight = "80px";
}
```

 

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

<!-- ComponentStart: Grid -->

## Additional Resources

- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
