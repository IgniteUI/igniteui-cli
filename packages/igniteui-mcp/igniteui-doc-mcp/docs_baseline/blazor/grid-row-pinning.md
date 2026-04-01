---
title: Blazor Grid Row Pinning in - Ignite UI for Blazor
_description: Use the Blazor Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-pinning
_tocName: Row Pinning
_premium: true
---

# Blazor Grid Row Pinning

The Ignite UI for Blazor Row Pinning feature in Blazor Grid allows you to  pin one or multiple rows to the top or bottom of grid. Row Pinning allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) vertically. The Blazor Grid has a built-in row pinning UI, which is enabled by initializing an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component in the context of Grid. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

## Blazor Grid Row Pinning Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="false"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            Name="rowPinningEditor"
            @ref="rowPinningEditor"
            ValueType="PropertyEditorValueType.EnumValue"
            Label="Row Pinning toggle"
            DropDownNames="@(new string[] { "Top", "Bottom" })"
            DropDownValues="@(new string[] { "Top", "Bottom" })"
            ChangedScript="WebGridSetRowPinning">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersDataLocal"
        Pinning="PinningConfig1"
        PrimaryKey="ID"
        CellSelection="GridSelectionMode.None"
        RowEditable="true">
            <IgbColumn
            Field="Company"
            Header="Company"
            Width="300px">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title">
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
            Field="Phone"
            Header="Phone">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            Header="Fax">
            </IgbColumn>

            <IgbActionStrip
            Name="actionStrip"
            @ref="actionStrip">
                <IgbGridPinningActions
                >
                </IgbGridPinningActions>

            </IgbActionStrip>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var rowPinningEditor = this.rowPinningEditor;
        var grid = this.grid;
        var actionStrip = this.actionStrip;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription rowPinningEditor;
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


## Row Pinning UI

The built-in row pinning UI is enabled by adding an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with the [`IgbGridPinningActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridPinningActions.html) component. The action strip is automatically shown when hovering a row and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```razor
    <IgbGrid Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate=true
             Data=northwindEmployees
             RowEditable=true>
        <IgbColumn Field="ID" Editable=false></IgbColumn>
        <IgbColumn Field="ContactName"></IgbColumn>
        <IgbColumn Field="ContactTitle"></IgbColumn>
        <IgbColumn Field="City" Sortable=true></IgbColumn>
        <IgbColumn Field="CompanyName" Sortable=true></IgbColumn>
        <IgbColumn Field="Fax" Sortable=true></IgbColumn>
        <IgbColumn Field="Address" Sortable=true></IgbColumn>
        <IgbColumn Field="PostalCode" Sortable=true></IgbColumn>
        <IgbColumn Field="Country" Sortable=true></IgbColumn>
        <IgbColumn Field="Phone" Sortable=true></IgbColumn>
        <IgbActionStrip>
            <IgbGridPinningActions></IgbGridPinningActions>
            <IgbGridEditingActions></IgbGridEditingActions>
        </IgbActionStrip>
    </IgbGrid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## Row Pinning API

Row pinning is controlled through the [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowDirective.html#IgniteUI_Blazor_Controls_IgbRowDirective_Pinned) input of the `Row`. Pinned rows are rendered at the top of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) by default and stay fixed through vertical scrolling of the unpinned rows in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) body.

```razor
this.Grid.PinRowAsync("ALFKI", 0);
```

You may also use the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s [`PinRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_PinRow) or [`UnpinRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_UnpinRow) methods of the to pin or unpin records by their ID:

```razor
this.Grid.PinRowAsync("ALFKI", 0);
this.Grid.UnpinRowAsync("ALFKI");
```

Note that the row ID is the primary key value, defined by the [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.

A row is pinned below the last pinned row. Changing the order of the pinned rows can be done by subscribing to the `RowPinning` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

```razor
<IgbGrid Width="100%"
             Id="grid"
             RowPinningScript="rowPinningHandler"
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate="true"
             Data="northwindEmployees">
</IgbGrid>
```

```razor
// In JavaScript

function rowPinningHandler(event) {
    event.detail.insertAtIndex = 0;
}

igRegisterScript("rowPinningHandler", rowPinningHandler, false);
```

## Pinning Position

You can change the row pinning position via the [`Pinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Pinning) configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.

```razor
    <IgbGrid Id="grid"
            Width="100%"
            Height="100%"
            Pinning=PinningConfig
            PrimaryKey="Key"
            AutoGenerate=true
            Data=northwindEmployees>
    </IgbGrid>
    @code {
        public string Key = "ID";
        private Northwind.EmployeesType[] northwindEmployees = Array.Empty<Northwind.EmployeesType>();
        public IgbPinningConfig PinningConfig = new IgbPinningConfig()
        {
            Rows = RowPinningPosition.Bottom
        };
        protected override async Task OnInitializedAsync()
        {
            northwindEmployees = await this.northwindService.GetEmployees() ?? northwindEmployees;
        }
    }
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Custom Row Pinning UI

You can define your custom UI and change the pin state of the rows via the related API.

### Via extra column with icon

Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.

<!-- ComponentStart: Grid, TreeGrid -->

```razor
<IgbColumn Width="70px" BodyTemplateScript="WebGridRowPinCellTemplate"/>

// In Javascript

igRegisterScript("WebGridRowPinCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.toggleRowPin = function toggleRowPin(index) {
        var grid = document.getElementsByTagName("igc-grid")[0];
        grid.getRowByIndex(index).pinned = !grid.getRowByIndex(index).pinned;
    }
    const index = ctx.cell.id.rowIndex;
    return html`<div>
    <span onpointerdown='toggleRowPin("${index}")'>📌</span>
</div>`;
}, false);
```

<!-- end: Angular -->

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentEnd: Grid, TreeGrid -->

#### Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        Name="grid"
        @ref="grid"
        Data="CustomersDataLocal"
        PrimaryKey="ID"
        CellSelection="GridSelectionMode.None">
            <IgbColumn
            Width="100px"
            Filterable="false"
            Pinned="true"
            BodyTemplateScript="WebGridRowPinCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ID"
            Width="150px"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company"
            Width="350px">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Contact Tiasdsadtle">
            </IgbColumn>

            <IgbColumn
            Field="Address">
            </IgbColumn>

            <IgbColumn
            Field="City">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code">
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
        var column1 = this.column1;

    }

    private IgbGrid grid;
    private IgbColumn column1;

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


<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Row Pinning Limitations

- Only records that exist in the data source can be pinned.
- The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied.
- The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
- As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vice versa). Additionally, range selection (e.g. using <kbd>SHIFT</kbd> + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-style: double;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-cell-active-border-color: #FFCD0F;
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
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="CustomersDataLocal"
        PrimaryKey="ID"
        CellSelection="GridSelectionMode.None"
        RenderedScript="WebGridPinRowOnRendered"
        Pinning="PinningConfig1">
            <IgbColumn
            Field="Company"
            Header="Company"
            Width="300px">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title">
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
            Field="Phone"
            Header="Phone">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            Header="Fax">
            </IgbColumn>

            <IgbActionStrip
            >
                <IgbGridPinningActions
                >
                </IgbGridPinningActions>

            </IgbActionStrip>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

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


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbGridRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridRow.html)
- [`IgbRowType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
