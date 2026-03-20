---
title: Blazor Tree Grid Row Pinning in - Ignite UI for Blazor
_description: Use the Blazor Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-pinning
_tocName: Row Pinning
_premium: true
---

# Blazor Tree Grid Row Pinning

The Ignite UI for Blazor Row Pinning feature in Blazor Tree Grid allows you to  pin one or multiple rows to the top or bottom of grid. Row Pinning allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) vertically. The Blazor Tree Grid has a built-in row pinning UI, which is enabled by initializing an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component in the context of Tree Grid. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

## Blazor Tree Grid Row Pinning Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="WebTreeGrid"
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
        <IgbTreeGrid
        AutoGenerate="false"
        Id="treeGrid"
        Name="treeGrid"
        @ref="treeGrid"
        Data="EmployeesNestedTreeData"
        RowEditable="true"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        CellSelection="GridSelectionMode.None"
        RenderedScript="WebTreeGridPinRowOnRendered"
        Pinning="PinningConfig1">
            <IgbColumn
            Field="Name"
            Header="Full Name">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Title">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbActionStrip
            Name="actionStrip"
            @ref="actionStrip">
                <IgbGridPinningActions
                >
                </IgbGridPinningActions>

            </IgbActionStrip>

        </IgbTreeGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var rowPinningEditor = this.rowPinningEditor;
        var treeGrid = this.treeGrid;
        var actionStrip = this.actionStrip;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription rowPinningEditor;
    private IgbTreeGrid treeGrid;
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

    private EmployeesNestedTreeData _employeesNestedTreeData = null;
    public EmployeesNestedTreeData EmployeesNestedTreeData
    {
        get
        {
            if (_employeesNestedTreeData == null)
            {
                _employeesNestedTreeData = new EmployeesNestedTreeData();
            }
            return _employeesNestedTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesNestedTreeDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesNestedTreeData
    : List<EmployeesNestedTreeDataItem>
{
    public EmployeesNestedTreeData()
    {
        this.Add(new EmployeesNestedTreeDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


## Row Pinning UI

The built-in row pinning UI is enabled by adding an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with the [`IgbGridPinningActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridPinningActions.html) component. The action strip is automatically shown when hovering a row and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```razor
    <IgbTreeGrid Width="100%"  
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
    </IgbTreeGrid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## Row Pinning API

Row pinning is controlled through the [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Pinned) input of the `Row`. Pinned rows are rendered at the top of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) by default and stay fixed through vertical scrolling of the unpinned rows in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) body.

```razor
this.Grid.PinRowAsync("ALFKI", 0);
```

You may also use the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)'s [`PinRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_PinRow) or [`UnpinRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_UnpinRow) methods of the to pin or unpin records by their ID:

```razor
this.Grid.PinRowAsync("ALFKI", 0);
this.Grid.UnpinRowAsync("ALFKI");
```

Note that the row ID is the primary key value, defined by the [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.

A row is pinned below the last pinned row. Changing the order of the pinned rows can be done by subscribing to the `RowPinning` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

```razor
<IgbTreeGrid Width="100%"
             Id="grid"
             RowPinningScript="rowPinningHandler"
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate="true"
             Data="northwindEmployees">
</IgbTreeGrid>
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
    <IgbTreeGrid Id="grid"
            Width="100%"
            Height="100%"
            Pinning=PinningConfig
            PrimaryKey="Key"
            AutoGenerate=true
            Data=northwindEmployees>
    </IgbTreeGrid>
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
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Data="EmployeesNestedTreeData"
        RowEditable="true"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        CellSelection="GridSelectionMode.None"
        Pinning="PinningConfig1">
            <IgbColumn
            Width="150px"
            Filterable="false"
            Pinned="true"
            BodyTemplateScript="WebTreeGridRowPinCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            Header="Full Name">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Title">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var column1 = this.column1;

    }

    private IgbTreeGrid treeGrid;
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
    private IgbColumn column1;

    private EmployeesNestedTreeData _employeesNestedTreeData = null;
    public EmployeesNestedTreeData EmployeesNestedTreeData
    {
        get
        {
            if (_employeesNestedTreeData == null)
            {
                _employeesNestedTreeData = new EmployeesNestedTreeData();
            }
            return _employeesNestedTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesNestedTreeDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesNestedTreeData
    : List<EmployeesNestedTreeDataItem>
{
    public EmployeesNestedTreeData()
    {
        this.Add(new EmployeesNestedTreeDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


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
<IgbTreeGrid class="grid"></IgbTreeGrid>
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
        <IgbTreeGrid
        AutoGenerate="false"
        Id="treeGrid"
        Name="treeGrid"
        @ref="treeGrid"
        Data="EmployeesNestedTreeData"
        RenderedScript="WebTreeGridPinRowOnRendered"
        RowEditable="true"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        CellSelection="GridSelectionMode.None"
        Pinning="PinningConfig1">
            <IgbColumn
            Field="Name"
            Header="Full Name">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Title">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

            <IgbActionStrip
            Name="actionStrip"
            @ref="actionStrip">
                <IgbGridPinningActions
                >
                </IgbGridPinningActions>

            </IgbActionStrip>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var actionStrip = this.actionStrip;

    }

    private IgbTreeGrid treeGrid;
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

    private EmployeesNestedTreeData _employeesNestedTreeData = null;
    public EmployeesNestedTreeData EmployeesNestedTreeData
    {
        get
        {
            if (_employeesNestedTreeData == null)
            {
                _employeesNestedTreeData = new EmployeesNestedTreeData();
            }
            return _employeesNestedTreeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesNestedTreeDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesNestedTreeData
    : List<EmployeesNestedTreeDataItem>
{
    public EmployeesNestedTreeData()
    {
        this.Add(new EmployeesNestedTreeDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesNestedTreeDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- `TreeGridRow`
- [`IgbRowType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
