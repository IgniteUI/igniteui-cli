---
title: Blazor Grid Column Pinning - Ignite UI for Blazor
_description: Want to use the Pinning feature of the Ignite UI for Blazor when you develop your next app? Easily lock column or change column order with rich API.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# Blazor Grid Column Pinning

The Ignite UI for Blazor Column Pinning feature in Blazor Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). There’s an integrated UI for Column Pinning, accessible via the Blazor Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## Blazor Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersDataLocal"
        Name="grid"
        @ref="grid">
            <IgbGridToolbar
            >
                <IgbGridToolbarTitle
                >
                </IgbGridToolbarTitle>

                <IgbGridToolbarActions
                >
                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="ID"
            Header="ID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company Name"
            Width="300px">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Contact Name"
            Width="200px"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Contact Title"
            Width="200px"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            Width="300px">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            Width="120px">
            </IgbColumn>

            <IgbColumn
            Field="Region"
            Header="Region"
            Width="120px">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            Width="150px">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            Header="Phone"
            Width="150px">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            Header="Fax"
            Width="150px">
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

    private CustomersDataLocal _customersDataLocal = null;
    public CustomersDataLocal CustomersDataLocal
    {
        get
        {
            if (_customersDataLocal == null)
            {
                _customersDataLocal = new CustomersDataLocal();
            }
            return _customersDataLocal;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataLocalItem
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

public class CustomersDataLocal
    : List<CustomersDataLocalItem>
{
    public CustomersDataLocal()
    {
        this.Add(new CustomersDataLocalItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataLocalItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataLocalItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


## Column Pinning API

Column pinning is controlled through the [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowDirective.html#IgniteUI_Blazor_Controls_IgbRowDirective_Pinned) property of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html). Pinned columns are rendered on the left side of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) body.

```razor
<IgbGrid Data=data AutoGenerate=false>
    <IgbColumn Field="Name" Pinned=true></IgbColumn>
    <IgbColumn Field="AthleteNumber"></IgbColumn>
    <IgbColumn Field="TrackProgress"></IgbColumn>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

You may also use the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PinColumn) or [`UnpinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_UnpinColumn) methods of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) to pin or unpin columns by their field name:

<!-- ComponentStart: Grid -->

```razor
@code {
    grid.PinColumn("AthleteNumber", 0);
    grid.UnpinColumn("Name", 0);
}
```

<!-- ComponentEnd: Grid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents, React -->

<!-- Blazor -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPinScript` event and providing a JavaScript function for changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Blazor -->

```razor
<IgbGrid Data=data AutoGenerate=true ColumnPinScript="onColumnPin"/>


//In JavaScript
function onColumnPin(e) {
    if (e.detail.column.field == "Country") {
        e.detail.insertAtIndex = 0;
    }
}

igRegisterScript("onColumnPin", onColumnPin, false);
```

## Pinning Position

You can change the column pinning position via the [`Pinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.

```razor
<IgbGrid Data=data AutoGenerate=true Pinning="pinningConfig"></IgbGrid>

@code {
    private IgbPinningConfig pinningConfig = new() {
        Columns = ColumnPinningPosition.End
    };
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesDataExtended"
        Name="grid"
        @ref="grid"
        Id="grid"
        Pinning="PinningConfig1">
            <IgbGridToolbar
            >
                <IgbGridToolbarTitle
                >
                </IgbGridToolbarTitle>

                <IgbGridToolbarActions
                >
                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="CountryFlag"
            Header="Team"
            BodyTemplateScript="WebGridImageCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Avatar"
            BodyTemplateScript="WebGridAvatarCellTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Name">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            Header="Athlete Number"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed">
            </IgbColumn>

            <IgbColumn
            Field="RegistrationDate"
            Header="Registration Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Birthday"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbColumn
            Field="Sponsor">
            </IgbColumn>

            <IgbColumn
            Field="Agent">
            </IgbColumn>

            <IgbColumn
            Field="AgentContact"
            Header="Agent Contact">
            </IgbColumn>

            <IgbColumn
            Field="AgentPhone"
            Header="Agent Phone">
            </IgbColumn>

            <IgbColumn
            Field="FirstPlaces"
            Header="Gold"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="SecondPlaces"
            Header="Silver"
            Pinned="true">
            </IgbColumn>

            <IgbColumn
            Field="ThirdPlaces"
            Header="Bronze"
            Pinned="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;

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
                pinningConfig1.Columns = ColumnPinningPosition.End;
                this._pinningConfig1 = pinningConfig1;
            }
            return this._pinningConfig1;
        }
    }
    private IgbColumn column1;
    private IgbColumn column2;

    private AthletesDataExtended _athletesDataExtended = null;
    public AthletesDataExtended AthletesDataExtended
    {
        get
        {
            if (_athletesDataExtended == null)
            {
                _athletesDataExtended = new AthletesDataExtended();
            }
            return _athletesDataExtended;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataExtendedItem
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
    public double FirstPlaces { get; set; }
    public double SecondPlaces { get; set; }
    public double ThirdPlaces { get; set; }
    public string RegistrationDate { get; set; }
    public string Birthday { get; set; }
    public string Sponsor { get; set; }
    public string Agent { get; set; }
    public string AgentContact { get; set; }
    public string AgentPhone { get; set; }
}

public class AthletesDataExtended
    : List<AthletesDataExtendedItem>
{
    public AthletesDataExtended()
    {
        this.Add(new AthletesDataExtendedItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 4, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana", FirstPlaces = 2, SecondPlaces = 3, ThirdPlaces = 0, RegistrationDate = @"2017-08-07T07:35:06.000Z", Birthday = @"1979-03-09T22:00:00.000Z", Sponsor = @"Buzzdog", Agent = @"Yoshiko Trinke", AgentContact = @"ytrinke1x@symantec.com", AgentPhone = @"+1-615-409-3097" });
        this.Add(new AthletesDataExtendedItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/11.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 4, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway", FirstPlaces = 1, SecondPlaces = 0, ThirdPlaces = 3, RegistrationDate = @"2017-03-22T06:55:46.000Z", Birthday = @"1982-04-29T21:00:00.000Z", Sponsor = @"Realcube", Agent = @"Celestina Noweak", AgentContact = @"cnoweak3q@nhs.uk", AgentPhone = @"+1-971-806-8372" });
        this.Add(new AthletesDataExtendedItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 2, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan", FirstPlaces = 1, SecondPlaces = 3, ThirdPlaces = 4, RegistrationDate = @"2017-06-29T01:58:27.000Z", Birthday = @"1992-05-15T21:00:00.000Z", Sponsor = @"Twinte", Agent = @"Karol Emett", AgentContact = @"kemetth@ocn.ne.jp", AgentPhone = @"+1-215-959-2505" });
        // ... 182 more items
    }
}
```


<!-- React, WebComponents, Blazor -->

### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersDataLocal"
        width="100%"
        height="480px"
        ColumnSelection="GridSelectionMode.Multiple"
        Moving="true"
        Pinning="PinningConfig"
        Name="grid"
        @ref="grid">
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
                @ref="col1"
                Field="Company"
                Header="Company Name"
                Width="300px"
            />
            <IgbColumn @ref="col2"
                Field="ContactName"
                Header="Contact Name"
                Width="200px"    />
            <IgbColumn
                Field="ContactTitle"
                Header="Contact Title"
                Width="200px"
            />
            <IgbColumn
                Field="Address"
                Header="Address"
                Width="300px">
            </IgbColumn>
            <IgbColumn
                Field="City"
                Header="City"
                Width="120px"
            />
            <IgbColumn
                Field="Region"
                Header="Region"
                Width="120px"
            />
            <IgbColumn
                Field="PostalCode"
                Header="Postal Code"
                Width="150px"
            />
            <IgbColumn
                Field="Phone"
                Header="Phone"
                Width="150px"
            />
            <IgbColumn
                Field="Fax"
                Header="Fax"
                Width="150px"
            />
        </IgbGrid>

    </div>
</div>

@code {
    private IgbGrid grid;
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

    private CustomersDataLocal _customersDataLocal = null;
    private CustomersDataLocal CustomersDataLocal
    {
        get
        {
            if (_customersDataLocal == null)
            {
                _customersDataLocal = new CustomersDataLocal();
            }
            return _customersDataLocal;
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
public class CustomersDataLocalItem
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

public class CustomersDataLocal
    : List<CustomersDataLocalItem>
{
    public CustomersDataLocal()
    {
        this.Add(new CustomersDataLocalItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataLocalItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataLocalItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


<!-- end: React, WebComponents, Blazor -->

## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

```razor
<IgbGrid AutoGenerate="false" Data="CustomersData" Name="grid" @ref="grid">
    <IgbColumn Field="ID" Hidden="true"></IgbColumn>

    <IgbColumn Field="CompanyName" Header="Company" Width="300px"
    HeaderTemplateScript="WebGridPinHeaderTemplate" Name="column1" @ref="column1"></IgbColumn>

    <IgbColumn Field="ContactName" Header="Name" Width="200px" Pinned="true"
    HeaderTemplateScript="WebGridPinHeaderTemplate" Name="column2" @ref="column2"> </IgbColumn>

    <IgbColumn Field="ContactTitle" Header="Title" Width="200px" Pinned="true"
    HeaderTemplateScript="WebGridPinHeaderTemplate" Name="column3" @ref="column3"> </IgbColumn>
</IgbGrid>

// In JavaScript
igRegisterScript("WebGridPinHeaderTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.toggleColumnPin = function toggleColumnPin(field) {
        var grid = document.getElementsByTagName("igc-grid")[0];
        var col = grid.getColumnByName(field);
        col.pinned = !col.pinned;
        grid.markForCheck();
    }
    return html`<div>
    <span style="float:left">${ctx.column.field}</span>
    <span style="float:right" @pointerdown="${() => toggleColumnPin(ctx.column.field)}">📌</span>
</div>`;
}, false);
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        Name="grid"
        @ref="grid">
            <IgbColumn
            Field="ID"
            Header="ID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
            Width="300px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name"
            Width="200px"
            Pinned="true"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title"
            Width="200px"
            Pinned="true"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            Header="Address"
            Width="300px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            Width="120px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="Region"
            Header="Region"
            Width="120px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            Width="150px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column7"
            @ref="column7">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            Header="Phone"
            Width="150px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column8"
            @ref="column8">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            Header="Fax"
            Width="150px"
            HeaderTemplateScript="WebGridPinHeaderTemplate"
            Name="column9"
            @ref="column9">
            </IgbColumn>

        </IgbGrid>

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

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;
    private IgbColumn column7;
    private IgbColumn column8;
    private IgbColumn column9;

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


## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```razor
<IgbGrid Id="grid"></IgbGrid>
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
        <IgbGrid
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersData"
        ColumnSelection="GridSelectionMode.Single">
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
            Field="ID"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
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
            Field="Address">
            </IgbColumn>

            <IgbColumn
            Field="City">
            </IgbColumn>

            <IgbColumn
            Field="Region">
            </IgbColumn>

            <IgbColumn
            Field="Phone">
            </IgbColumn>

            <IgbColumn
            Field="Fax">
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


<!-- end: WebComponents, Blazor -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
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
