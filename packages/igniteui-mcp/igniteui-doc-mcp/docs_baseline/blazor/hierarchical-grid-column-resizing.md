---
title: Blazor Hierarchical Grid Column Resizing - Ignite UI for Blazor
_description: Start using Blazor Hierarchical Grid Column Resizing in order to change the grid column width in an instant. Blazor drag resizing has never been so easy. Try for free!
_keywords: Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-resizing
_tocName: Column Resizing
_premium: true
---

# Blazor  Hierarchical Grid Column Resizing Overview

The Ignite UI for Blazor Column Resizing feature in Blazor Hierarchical Grid allows users to easily adjust the width of the columns of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html). By default, they will see a temporary resize indicator while the drag resizing operation is in effect. There are several resizing options available - Resizing Columns in Pixels/Percentages, Restrict Column Resizing, Auto-Size Columns on Double Click, and Auto-Size Columns on Initialization.

## Blazor  Hierarchical Grid Column Resizing Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        PrimaryKey="ID"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image"
            MinWidth="115px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            MinWidth="88px"
            MaxWidth="230px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;

    }

    private IgbHierarchicalGrid hierarchicalGrid1;

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```

**Column resizing** is also enabled per-column level, meaning that the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) can have a mix of resizable and non-resizable columns. This is done via the [`Resizable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Resizable) input of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html).

```razor
<IgbColumn Field="Artist" Resizable=true></IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

You can subscribe to the `ColumnResized` event of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) object, are exposed through the event arguments.

```razor
<IgbHierarchicalGrid Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="Artist" Resizable=true></IgbColumn>
</IgbHierarchicalGrid>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

## Resizing Columns in Pixels/Percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the **Column Resizing** feature. By default if a column does not have width set, it fits the available space with width set in pixels.

This means that the following configuration is possible:

```razor
<IgbHierarchicalGrid Data=data ColumnResized="onResize" AutoGenerate=false Height="600px" Width="100%">
    <IgbColumn Field="Artist" Resizable=true Width="10%"></IgbColumn>
    <IgbColumn Field="GrammyNominations" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="GrammyAwards" Resizable=true></IgbColumn>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict Column Resizing

You can also configure the minimum and maximum allowable column widths. This is done via the [`MinWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MinWidth) and [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) inputs of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`MinWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MinWidth) and [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth).

```razor
<IgbColumn Field="Artist" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.

This means the following configurations are possible:

```razor
<IgbColumn Field="Artist" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

or

```razor
<IgbColumn Field="Artist" Resizable=true Width="100px" MinWidth="60px" MaxWidth="15%"></IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

## Auto-Size Columns on Double Click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) is set on that column and the new width exceeds that [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) value. In this case the column will be sized according to preset [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) value.

You can also auto-size a column dynamically using the exposed [`Autosize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Autosize) method on [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html).

```razor
@code {
    private IgbHierarchicalGrid gridRef;

    private void AutosizeColumn()
    {
        IgbColumn column = gridRef.Columns.Where((col) => { return col.Field == "Artist"; }).FirstOrDefault();
        column.Autosize(false);
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

## Auto-Size Columns on Initialization

Each column can be set to auto-size on initialization by setting [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) to 'auto':

```razor
<IgbColumn Width="auto"></IgbColumn>
```

When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.

This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HierarchicalCustomers"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbColumn
            Field="CustomerID"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="CompanyName"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Orders"
            AutoGenerate="false">
                <IgbColumn
                Field="OrderID"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="EmployeeID"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="OrderDate"
                Width="auto"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="RequiredDate"
                Width="auto"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShippedDate"
                Width="auto"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipVia"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Freight"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipName"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipAddress"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipCity"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipPostalCode"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="ShipCountry"
                Width="auto"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="OrderDetails"
                AutoGenerate="false">
                    <IgbColumn
                    Field="ProductID"
                    Width="auto"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="UnitPrice"
                    Width="auto"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Quantity"
                    Width="auto"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Discount"
                    Width="auto"
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
        var hierarchicalGrid1 = this.hierarchicalGrid1;

    }

    private IgbHierarchicalGrid hierarchicalGrid1;

    private HierarchicalCustomersCustom _hierarchicalCustomers = null;
    public HierarchicalCustomersCustom HierarchicalCustomers
    {
        get
        {
            if (_hierarchicalCustomers == null)
            {
                _hierarchicalCustomers = new HierarchicalCustomersCustom();
            }
            return _hierarchicalCustomers;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HierarchicalCustomersCustomItem
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
    public List<HierarchicalCustomersCustomItem_OrdersItem> Orders { get; set; }
}
public class HierarchicalCustomersCustomItem_OrdersItem
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
    public List<HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem> OrderDetails { get; set; }
}
public class HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem
{
    public double ProductID { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
}

public class HierarchicalCustomersCustom
    : List<HierarchicalCustomersCustomItem>
{
    public HierarchicalCustomersCustom()
    {
        this.Add(new HierarchicalCustomersCustomItem() { CustomerID = @"VINET", Company = @"Vins et alcools Chevalier", ContactName = @"Paul Henriot", ContactTitle = @"Accounting Manager", Address = @"59 rue de Abbaye", City = @"Reims", PostalCode = 51100, Country = @"France", Phone = @"26.47.15.10", Fax = @"26.47.15.11", Orders = new List<HierarchicalCustomersCustomItem_OrdersItem>()
        {
            new HierarchicalCustomersCustomItem_OrdersItem() { OrderID = 10248, EmployeeID = 5, OrderDate = @"1996-07-04T00:00:00", RequiredDate = @"1996-08-01T00:00:00", ShippedDate = @"1996-07-16T00:00:00", ShipVia = 3, Freight = 32.38, ShipName = @"Vins et alcools Chevalier", ShipAddress = @"59 rue de Abbaye", ShipCity = @"Reims", ShipPostalCode = 51100, ShipCountry = @"France", OrderDetails = new List<HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 11, UnitPrice = 14, Quantity = 12, Discount = 0 },
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 42, UnitPrice = 9.8, Quantity = 10, Discount = 0 },
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 72, UnitPrice = 34.8, Quantity = 5, Discount = 0 }}
             }}
            new HierarchicalCustomersCustomItem_OrdersItem() { OrderID = 10249, EmployeeID = 6, OrderDate = @"1996-07-05T00:00:00", RequiredDate = @"1996-08-16T00:00:00", ShippedDate = @"1996-07-10T00:00:00", ShipVia = 1, Freight = 11.61, ShipName = @"Toms Spezialitäten", ShipAddress = @"Luisenstr. 48", ShipCity = @"Münster", ShipPostalCode = 44087, ShipCountry = @"Germany", OrderDetails = new List<HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 14, UnitPrice = 18.6, Quantity = 9, Discount = 0 },
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 51, UnitPrice = 42.4, Quantity = 40, Discount = 0 }}
             }}
            new HierarchicalCustomersCustomItem_OrdersItem() { OrderID = 10250, EmployeeID = 4, OrderDate = @"1996-07-08T00:00:00", RequiredDate = @"1996-08-05T00:00:00", ShippedDate = @"1996-07-12T00:00:00", ShipVia = 2, Freight = 65.83, ShipName = @"Hanari Carnes", ShipAddress = @"Rua do Paço, 67", ShipCity = @"Sao Paulo", ShipPostalCode = 5454, ShipCountry = @"Brazil", OrderDetails = new List<HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem>()
            {
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 41, UnitPrice = 7.7, Quantity = 10, Discount = 0 },
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 51, UnitPrice = 42.4, Quantity = 35, Discount = 0.16 },
                new HierarchicalCustomersCustomItem_OrdersItem_OrderDetailsItem() { ProductID = 65, UnitPrice = 16.8, Quantity = 15, Discount = 0.16 }}
             }}
    }
}
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change the color of the resize handle, you need to set a class for the grid first:

```razor
<IgbHierarchicalGrid class="grid"></IgbHierarchicalGrid>
```

Then set the related CSS property for that class:

```css
.grid {
    --ig-grid-resize-line-color: #f35b04;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="SingersData"
        PrimaryKey="ID">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image"
            MinWidth="115px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            MinWidth="88px"
            MaxWidth="230px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

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

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```

## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)

## Additional Resources

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
