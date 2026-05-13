---
title:  Row actions in Blazor Grid - Infragistics
_description: The IgbGrid provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-actions
_tocName: Row Actions
_premium: true
---

# Row Actions in Blazor Grid

The Ignite UI for Blazor Row Actions feature in Blazor Grid enables developers to use an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) and utilize CRUD for row/cell components and row pinning. There are several predefined UI controls for these operations that are applicable to a specific row in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) – editing and pinning.

## Usage

The predefined actions UI components are:

- [`IgbGridEditingActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditingActions.html) - includes functionality and UI specifically designed for the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) option and row deletion of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

- [`IgbGridPinningActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridPinningActions.html) - includes functionality and UI specifically designed for the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) and this is all needed to have an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) providing default interactions.

```razor
<IgbGrid Data=northwindEmployees RowEditable="True" PrimaryKey="ID">
    @foreach (var c in columns)
    {
        <IgbColumn Field="@c.Field">
        </IgbColumn>
    }
    <IgbActionStrip @ref=actionstrip>
        <IgbGridPinningActions></IgbGridPinningActions>
        <IgbGridEditingActions></IgbGridEditingActions>
    </IgbActionStrip>
</IgbGrid>
```

> [!Note]
> When `ActionStripComponent` is a child component of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html).

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<div class="grid__wrapper">
    <IgbGrid Data=northwindEmployees>
        <IgbActionStrip @ref=actionstrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbGridEditingActions
                EditRow="true"
                DeleteRow="true"
                AddRow="true">
            </IgbGridEditingActions>
        </IgbActionStrip>
    </IgbGrid>
</div>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        RowEditable="true"
        AllowFiltering="true"
        Pinning="PinningConfig1"
        PrimaryKey="ProductID">
            <IgbActionStrip
            Name="actionStrip"
            @ref="actionStrip">
                <IgbGridPinningActions
                >
                </IgbGridPinningActions>

                <IgbGridEditingActions
                EditRow="true"
                DeleteRow="true"
                AddRow="true">
                </IgbGridEditingActions>

            </IgbActionStrip>

            <IgbColumn
            Field="ProductName"
            Header="Product Name">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price">
            </IgbColumn>

            <IgbColumn
            Field="UnitsOnOrder"
            Header="Units On Order">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock">
            </IgbColumn>

            <IgbColumn
            Field="QuantityPerUnit"
            Header="Quantity Per Unit">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var actionStrip = this.actionStrip;

    }

    private IgbGrid grid;
    private IgbPinningConfig _pinningConfig1 = null;
    public IgbPinningConfig PinningConfig1
    {
        get
        {
            if (this._pinningConfig1 == null)
            {
                var pinningConfig1 = new IgbPinningConfig();
                pinningConfig1.Rows = RowPinningPosition.Top;
                this._pinningConfig1 = pinningConfig1;
            }
            return this._pinningConfig1;
        }
    }
    private IgbActionStrip actionStrip;

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```

## API References

- [`IgbGridPinningActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridPinningActions.html)
- [`IgbGridEditingActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditingActions.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
