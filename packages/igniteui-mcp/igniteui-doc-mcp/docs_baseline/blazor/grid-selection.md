---
title: Blazor Grid Selection - Ignite UI for Blazor
_description: See how easy it is to select data in Ignite UI for Blazor grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/selection
_tocName: Selection
---

# Blazor Grid Selection Overview

With the Ignite UI for Blazor Select feature in Blazor Grid you can easily interact with and manipulate data using simple mouse interactions. There are three selection modes available:

- Row selection
- Cell selection
- Column selection

With the [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) property, you can specify:

- None
- Single
- Multiple Select

## Blazor Grid Selection Example

The sample below demonstrates three types of **cell selection** behaviors in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). Use the buttons below to enable each of the available selection modes.

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
            PropertyPath="CellSelection"
            Name="CellSelectionEditor"
            @ref="cellSelectionEditor"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "None", "Single", "Multiple" })"
            DropDownValues="@(new string[] { "NOne", "Single", "Multiple" })">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Data="NwindData">
            <IgbColumn
            Field="ProductID"
            Header="Product ID">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Product Name">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Units Price"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            DataType="GridColumnDataType.Boolean">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var cellSelectionEditor = this.cellSelectionEditor;
        var grid = this.grid;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription cellSelectionEditor;
    private IgbGrid grid;

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


## Blazor Grid Selection Options

<!-- ComponentStart: Grid, HierarchicalGrid -->

The Ignite UI for Blazor [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). In order to change/enable selection mode you can use [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection), [`CellSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_CellSelection) or [`Selectable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Selectable) properties.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

### Blazor Grid Row Selection

Property [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) enables you to specify the following options:

- `None` - Row selection would be disabled for the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).
- `Single` - Selection of only one row within the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) would be available.
- `Multiple` - Multi-row selection would be available by using the row selectors, with a key combination like <kbd>CTRL</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused.

> Go to [Row selection topic](row-selection.md) for more information.

### Blazor Grid Cell Selection

Property [`CellSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_CellSelection) enables you to specify the following options:

- `None` - Cell selection would be disabled for the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).
- `Single` - Selection of only one cell within the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) would be available.
- `Multiple` - Currently, this is the default state of the selection in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Cell selection topic](cell-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Blazor Grid Column Selection

The [`Selectable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Selectable) property enables you to specify the following options for each [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html). The corresponding column selection will be enabled or disabled if this property is set to true or false, respectively.

This leads to the following three variations:

- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>CTRL</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>mouse click</kbd> selects everything in between.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Column selection topic](column-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid -->

## Blazor Grid Context Menu

Using the `ContextMenu` event you can add a custom context menu to facilitate your work with [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). With a **right click** on the grid's body, the event emits the cell on which it is triggered. The **context menu** will operate with the emitted cell.

If there is a **multi-cell selection**, we will put logic, which will check whether the selected cell is in the area of the multi-cell selection. If it is, we will also emit the values of the selected cells.

Basically the main function will look like this:

```razor
    public void RightClick(MouseEventArgs e)
    {
        this.MenuX = e.ClientX + "px";
        this.MenuY = e.ClientY + "px";
    }


    public void onMenuShow(IgbGridCellEventArgs e)
    {
        IgbGridCellEventArgsDetail detail = e.Detail;
        this.ShowMenu = true;
        this.ClickedCell = detail.Cell;
    }
```

The context menu will have the following functions:

- Copy the selected cell's *value*.
- Copy the selected cell's *dataRow*.
- If the selected cell is within a **multi-cell selection range**, copy all the *selected data*.

```razor
    public void CopyCellData()
    {
        this.ShowMenu = false;
        this.SelectedData = this.ClickedCell.Value.ToString();
        StateHasChanged();
    }


    public async void CopyRowData()
    {
        this.ShowMenu = false;
        NwindDataItem rowData = this.NwindData.ElementAt(this.ClickedCell.Id.RowIndex);
        this.SelectedData = JsonConvert.SerializeObject(rowData);
        StateHasChanged();
}

    public async void CopyCellsData()
    {
        this.ShowMenu = false;
        var selectedData = await this.grid.GetSelectedDataAsync(true, false);
        this.SelectedData = JsonConvert.SerializeObject(selectedData);
        StateHasChanged();
    }
```

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) will fetch the copied data and will paste it in a container element.

The template we are going to use to combine the grid with the context menu:

```razor
<div class="container vertical">
    <div class="wrapper" oncontextmenu="event.preventDefault()">
        <IgbGrid AutoGenerate="false"
                 CellSelection="GridSelectionMode.Multiple"
                 ContextMenu="onMenuShow"
                 @oncontextmenu="RightClick"
                 Name="grid"
                 @ref="grid"
                 Data="NwindData">
            <IgbColumn Field="ProductID"
                       Header="Product ID">
            </IgbColumn>

            <IgbColumn Field="ProductName"
                       Header="Product Name">
            </IgbColumn>

            <IgbColumn Field="UnitsInStock"
                       Header="Units In Stock"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="UnitPrice"
                       Header="Units Price"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="Discontinued"
                       DataType="GridColumnDataType.Boolean">
            </IgbColumn>

            <IgbColumn Field="OrderDate"
                       Header="Order Date"
                       DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbGrid>
        <div class="selected-data-area">
            @SelectedData
        </div>
        </div>
        @if (ShowMenu)
        {
            <div id="menu" class="contextmenu" style="left: @MenuX; top: @MenuY">
                <span id="copySingleCell" class="item" @onclick="CopyCellData">
                    <IgbIcon @ref=icon IconName="content_copy" Collection="material"></IgbIcon>Copy Cell Data
                </span>
            <span id="copyRow" class="item" @onclick="CopyRowData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Row Data
                </span>
            <span id="copyMultiCells" class="item" @onclick="CopyCellsData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Cells Data
                </span>
            </div>
        }
</div>
```

Select multiple cells and press the right mouse button. The context menu will appear and after selecting **Copy cells data** the selected data will appear in the right empty box.

The result is:

```razor
@using IgniteUI.Blazor.Controls
@using System.Text.Json

<div class="container vertical">
    <div class="wrapper" oncontextmenu="event.preventDefault()" @onclick="CloseMenu">
        <IgbGrid AutoGenerate="false"
                 CellSelection="GridSelectionMode.Multiple"
                 ContextMenu="onMenuShow"
                 @oncontextmenu="RightClick"
                 Name="grid"
                 @ref="grid"
                 Data="NwindData">
            <IgbColumn Field="ProductID"
                       Header="Product ID">
            </IgbColumn>

            <IgbColumn Field="ProductName"
                       Header="Product Name">
            </IgbColumn>

            <IgbColumn Field="UnitsInStock"
                       Header="Units In Stock"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="UnitPrice"
                       Header="Units Price"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="Discontinued"
                       DataType="GridColumnDataType.Boolean">
            </IgbColumn>

            <IgbColumn Field="OrderDate"
                       Header="Order Date"
                       DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbGrid>
        <div class="selected-data-area">
            @SelectedData
        </div>
        </div>
        @if (ShowMenu)
        {
            <div id="menu" class="contextmenu" style="left: @MenuX; top: @MenuY">
                <span id="copySingleCell" class="item" @onclick="CopyCellData">
                    <IgbIcon @ref=icon IconName="content_copy" Collection="material"></IgbIcon>Copy Cell Data
                </span>
            <span id="copyRow" class="item" @onclick="CopyRowData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Row Data
                </span>
                <span id="copyMultiCells" class="item" @onclick="CopyCellsData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Cells Data
                </span>
        </div>
        }
    </div>

<style>

    .contextmenu {
        position: absolute;
        width: 180px;
        background: white;
        display: flex;
        cursor: context-menu;
        flex-direction: column;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
        z-index: 9999;
        font-size: 0.75rem;
        font-weight: 650;
    }

    .item {
        padding: 10px;
        display: flex;
    }

        .item:hover {
            background: rgb(204, 203, 203);
        }

    .icon {
        vertical-align: middle;
        margin-bottom: 5px;
        margin-right: 5px;
    }

    .selected-data-area {
        overflow-y: auto;
        width: 50%;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
        margin-left: 10px;
    }

    .wrapper {
        margin: 10px;
        display: flex;
        justify-content: space-evenly;
    }
</style>

@code {
    private IgbGrid grid;
    public IgbIcon icon;
    public bool ShowMenu = false;
    public bool? ShowCopyCells = false;
    public string MenuX;
    public string MenuY;
    public IgbCellType ClickedCell;
    public IgbRowType ClickedRow;
    public string iconContent = "<svg xmlns='http://www.w3.org/2000/svg' height='48' viewBox='0 -960 960 960' width='48'><path d = 'M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z' /></svg >";
    public string SelectedData;

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

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.icon != null)
        {
            this.icon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.icon.RegisterIconFromTextAsync("content_copy", iconContent, "material");
            }));
        }
    }

    public void RightClick(MouseEventArgs e)
    {
        this.MenuX = e.ClientX + "px";
        this.MenuY = e.ClientY + "px";
    }

    public void CloseMenu(MouseEventArgs e)
    {
        if (e.Button == 0)
        {
            this.ShowMenu = false;
            StateHasChanged();
        }
    }


    public async void onMenuShow(IgbGridContextMenuEventArgs e)
    {
        this.ShowMenu = true;
        this.ClickedCell = e.Detail.Cell;
        this.ClickedRow = e.Detail.Row;
    }

    public void CopyCellData()
    {
        this.ShowMenu = false;
        this.SelectedData = this.ClickedCell.Value.ToString();
        StateHasChanged();
    }


    public async void CopyRowData()
    {
        this.ShowMenu = false;
        this.SelectedData = JsonSerializer.Serialize(this.ClickedRow.Data);
        StateHasChanged();
}

    public async void CopyCellsData()
    {
        this.ShowMenu = false;
        var selectedData = await this.grid.GetSelectedDataAsync(false, false);
        List<object> newList = new List<object>();
        //Map to simpler dictionary
        foreach (Dictionary<string, object> item in selectedData)
        {
            Dictionary<string, string> values = new Dictionary<string, string>();
            foreach (var key in item.Keys)
            {
                object value = item[key];
                string rawText = ((System.Text.Json.JsonElement)value).GetRawText().Trim('"');
                values.Add(key, rawText);
            }
            newList.Add(values);
        }
        this.SelectedData = JsonSerializer.Serialize(newList);
        StateHasChanged();
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


<!-- ComponentEnd: Grid -->

## Known Issues and Limitations

When the grid has no [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection
- Row Expand/collapse
- Row Editing
- Row Pinning

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Row Selection](row-selection.md)
- [Cell Selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
