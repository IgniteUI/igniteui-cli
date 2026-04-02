---
title: Blazor Grid Column Resizing - Ignite UI for Blazor
_description: Start using Blazor Grid Column Resizing in order to change the grid column width in an instant. Blazor drag resizing has never been so easy. Try for free!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-resizing
_tocName: Column Resizing
_premium: true
---

# Blazor  Grid Column Resizing Overview

The Ignite UI for Blazor Column Resizing feature in Blazor Grid allows users to easily adjust the width of the columns of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). By default, they will see a temporary resize indicator while the drag resizing operation is in effect. There are several resizing options available - Resizing Columns in Pixels/Percentages, Restrict Column Resizing, Auto-Size Columns on Double Click, and Auto-Size Columns on Initialization.

## Blazor  Grid Column Resizing Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        Id="grid"
        Name="grid"
        @ref="grid"
        ColumnResizedScript="WebGridColumnResized">
            <IgbColumn
            Field="ID"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name"
            MinWidth="60px"
            MaxWidth="230px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City">
            </IgbColumn>

            <IgbColumn
            Field="Region"
            Header="Region"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            Header="Phone"
            Resizable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


**Column resizing** is also enabled per-column level, meaning that the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) can have a mix of resizable and non-resizable columns. This is done via the [`Resizable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Resizable) input of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html).

```razor
<IgbColumn Field="ID" Resizable=true Width="100px"></IgbColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

You can subscribe to the `ColumnResized` event of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) object, are exposed through the event arguments.

<!-- ComponentStart: Grid -->

```razor
<IgbGrid Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="ID" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="CompanyName" Resizable=true Width="100px"></IgbColumn>
</IgbGrid>

@code {
    private void onResize(IgbColumnResizeEventArgs args)
    {
        IgbColumnType col = args.Detail.Column;
        string pWidth = args.Detail.PrevWidth;
        string nWidth = args.Detail.NewWidth;
    }
}
```

<!-- ComponentEnd: Grid -->

## Resizing Columns in Pixels/Percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the **Column Resizing** feature. By default if a column does not have width set, it fits the available space with width set in pixels.

This means that the following configuration is possible:

```razor
<IgbGrid Data=data AutoGenerate=false ColumnResized="onResize">
    <IgbColumn Field="ID" Resizable=true Width="10%"></IgbColumn>
    <IgbColumn Field="CompanyName" Resizable=true Width="100px"></IgbColumn>
    <IgbColumn Field="ContactTitle" Resizable=true></IgbColumn>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict Column Resizing

You can also configure the minimum and maximum allowable column widths. This is done via the [`MinWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MinWidth) and [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) inputs of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`MinWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MinWidth) and [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth).

```razor
<IgbColumn Field="ContactTitle" Resizable=true Width="100px" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.

This means the following configurations are possible:

```razor
<IgbColumn Field="ContactTitle" Resizable=true Width="10%" MinWidth="60px" MaxWidth="230px"></IgbColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

or

```razor
<IgbColumn Field="ID" Resizable=true Width="100px" MinWidth="5%" MaxWidth="15%"></IgbColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

## Auto-Size Columns on Double Click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) is set on that column and the new width exceeds that [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) value. In this case the column will be sized according to preset [`MaxWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_MaxWidth) value.

You can also auto-size a column dynamically using the exposed [`Autosize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Autosize) method on [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html).

```razor
@code {
    private IgbGrid gridRef;

    private void AutosizeColumn()
    {
        IgbColumn column = gridRef.Columns.Where((col) => { return col.Field == "ID"; }).FirstOrDefault();
        column.Autosize(false);
    }
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

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
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        PrimaryKey="ProductID"
        Name="grid"
        @ref="grid">
            <IgbColumn
            Field="ID"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company Name"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title"
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
            Field="Region"
            Width="auto"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
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

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change the color of the resize handle, you need to set a class for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
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
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="AthletesData">
            <IgbColumn
            Field="Id"
            Header="Rank"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Athlete"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats per Minute"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Track Progress"
            Resizable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
    }
}
```


## API References

- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

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
