---
title: Blazor Hierarchical Grid Cell Editing - Ignite UI for Blazor
_description: The Hierarchical Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# Blazor Hierarchical Grid Cell Editing

The Ignite UI for Blazor Cell Editing in Blazor Hierarchical Grid provides a great data manipulation capability of the content of individual cells within the Blazor Hierarchical Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for Blazor is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Blazor Hierarchical Grid Cell Editing and Edit Templates Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        AllowFiltering="true">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units in Stock"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean"
            Sortable="true"
            HasSummary="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Filterable="false">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Locations"
            AutoGenerate="false">
                <IgbColumn
                Field="Shop"
                Header="Shop"
                DataType="GridColumnDataType.String"
                Editable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LastInventory"
                Header="Last Inventory"
                DataType="GridColumnDataType.Date"
                Editable="true"
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

## Cell Editing

### Editing through UI

You can enter edit mode for specific cell, when an editable cell is focused in one of the following ways:

- on double click;
- on single click - Single click will enter edit mode only if the previously selected cell was in edit mode and currently selected cell is editable. If the previously selected cell was not in edit mode, single click will select the cell without entering edit mode;
- on key press <kbd>ENTER</kbd>;
- on key press <kbd>F2</kbd>;

You can exit edit mode **without committing** the changes in one of the following ways:

- on key press <kbd>Escape</kbd>;
- when you perform **sorting**, **filtering**, **searching** and **hiding** operations;

You can exit edit mode and **commit** the changes in one of the following ways:

- on key press <kbd>ENTER</kbd>;
- on key press <kbd>F2</kbd>;
- on key press <kbd>TAB</kbd>;
- on single click to another cell - when you click on another cell in the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) API but only if primary key is defined:

```razor
@code {
    this.hierarchicalGrid.UpdateCell(newValue, rowID, 'ReorderLevel');
}
```

<!-- ComponentEnd: HierarchicalGrid -->

Another way to update cell is directly through `Update` method of `Cell`:

```razor
@code {
    private UpdateCell() {
        IgbCell cell = this.hierarchicalGrid.GetCellByColumn(rowIndex, "ReorderLevel");
        cell.Update(70);
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

If you want to provide a custom template which will be applied to a cell, you can pass such template either to the cell itself, or to its header. First create the column as you usually would:

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbColumn
    Field="Age"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```

<!-- ComponentEnd: HierarchicalGrid -->

and pass the template:

```razor
// In JavaScript

igRegisterScript("WebGridCellEditCellTemplate", (ctx) => {
    let cellValues = [];
    let uniqueValues = [];
    for(const i of ctx.cell.grid.data){
        const field = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`<div>
    <igc-select position-strategy="fixed" @igcChange=${ e => ctx.cell.editValue = e.detail.value}>
          ${cellValues}
    </igc-select>
</div>`;
}, false);
```

Working sample of the above can be found here for further reference:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="HGridDndData"
        PrimaryKey="Name"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbColumn
            Field="Name"
            Header="Character Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Race"
            Header="Race"
            DataType="GridColumnDataType.String"
            InlineEditorTemplateScript="HGridCellEditCellTemplate"
            Editable="true"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Class"
            Header="Class"
            InlineEditorTemplateScript="HGridCellEditCellTemplate"
            Editable="true"
            DataType="GridColumnDataType.String"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            Header="Age"
            DataType="GridColumnDataType.String"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Alignment"
            Header="Alignment"
            InlineEditorTemplateScript="HGridCellEditCellTemplate"
            Editable="true"
            DataType="GridColumnDataType.String"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Skills"
            AutoGenerate="false">
                <IgbColumn
                Field="Skill"
                Header="Skill"
                DataType="GridColumnDataType.String"
                Editable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Level"
                Header="Level"
                DataType="GridColumnDataType.String"
                Editable="true"
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
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;

    }

    private IgbHierarchicalGrid hierarchicalGrid1;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;

    private HGridDndData _hGridDndData = null;
    public HGridDndData HGridDndData
    {
        get
        {
            if (_hGridDndData == null)
            {
                _hGridDndData = new HGridDndData();
            }
            return _hGridDndData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HGridDndDataItem
{
    public string Name { get; set; }
    public string Age { get; set; }
    public string Alignment { get; set; }
    public string Race { get; set; }
    public string Class { get; set; }
    public List<HGridDndDataItem_SkillsItem> Skills { get; set; }
}
public class HGridDndDataItem_SkillsItem
{
    public string Skill { get; set; }
    public string Level { get; set; }
}

public class HGridDndData
    : List<HGridDndDataItem>
{
    public HGridDndData()
    {
        this.Add(new HGridDndDataItem() { Name = @"Stredo", Age = @"244", Alignment = @"💜 Lawful evil", Race = @"👩 Human", Class = @"🎻 Bard", Skills = new List<HGridDndDataItem_SkillsItem>()
        {
            new HGridDndDataItem_SkillsItem() { Skill = @"🎻 Bardic Inspiration", Level = @"4" },
            new HGridDndDataItem_SkillsItem() { Skill = @"🎻 Countercharm", Level = @"4" },
            new HGridDndDataItem_SkillsItem() { Skill = @"🎻 Jack of All Trades", Level = @"4" },
            // ... 9 more items
    }
}
```

## CRUD operations

> [!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) component exposes the `AddRow` method which will add the provided data to the data source itself.

```razor
@code {
    //Assuming we have a `GetNewRecord` method returning the new row data.
    const record = this.GetNewRecord();
    this.HierarchicalGridRef.AddRow(record);
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Updating data in the Hierarchical Grid

Updating data in the Hierarchical Grid is achieved through `UpdateRow` and `UpdateCell` methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

```razor
@code {
    // Updating the whole row
    this.hierarchicalGrid.UpdateRow(newData, this.selectedCell.cellID.rowID);

    // Just a particular cell through the Tree Grid API
    this.hierarchicalGrid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

    // Directly using the cell `update` method
    this.selectedCell.Update(newData);

    // Directly using the row `update` method
    IgbRowType row = this.hierarchicalGrid.GetRowByKey(rowID);
    row.Update(newData);
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Deleting data from the Hierarchical Grid

Please keep in mind that `DeleteRow` method will remove the specified row only if a [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) is defined.

<!-- ComponentStart: HierarchicalGrid -->

```razor
@code {
    // Delete row through Grid API
    this.hierarchicalGrid.DeleteRow(this.selectedCell.cellID.rowID);
    // Delete row through row object
    IgbRowType row = this.hierarchicalGrid.GetRowByIndex(rowIndex);
    row.Del();
}
```

### Cell Validation on Edit Event

Using the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)'s editing events, we can alter how the user interacts with the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

```razor
<IgbHierarchicalGrid CellEditScript="HandleCellEdit" />
```

<!-- ComponentEnd: HierarchicalGrid -->

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- Blazor -->

<!-- ComponentStart: HierarchicalGrid -->

If the value entered in a cell under the **Units On Order** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and the user will be alerted to the cancellation.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: TreeGrid -->

```razor
// In JavaScript
igRegisterScript("WebGridEditingEventsCellEdit", (ev) => {
    var d = ev.detail;

    if (d.column != null && d.column.field == "UnitsOnOrder") {
        if (d.newValue > d.rowData.UnitsInStock) {
            d.cancel = true;
            alert("You cannot order more than the units in stock!")
        }
    }
}, false);
```

<!-- ComponentEnd: HierarchicalGrid -->

The result of the above validation being applied to our [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) can be seen in the below demo:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        CellEditScript="WebGridEditingEventsCellEdit"
        PrimaryKey="ProductID"
        AllowFiltering="true">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units in Stock"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsOnOrder"
            Header="Units in Order"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean"
            Sortable="true"
            HasSummary="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Filterable="false">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Locations"
            AutoGenerate="false">
                <IgbColumn
                Field="Shop"
                Header="Shop"
                DataType="GridColumnDataType.String"
                Editable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LastInventory"
                Header="Last Inventory"
                DataType="GridColumnDataType.Date"
                Editable="true"
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

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbHierarchicalGrid Class="hierarchicalGrid"></IgbHierarchicalGrid>
```

Then set the related CSS properties for that class:

```css
.hierarchicalGrid {
    --ig-grid-edit-mode-color: #FFA500;
    --ig-grid-cell-active-border-color: #FFA500;
    --ig-grid-cell-editing-background: #add8e6;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Styling Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        AllowFiltering="true">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units in Stock"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean"
            Sortable="true"
            HasSummary="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            HasSummary="true"
            Editable="true"
            Filterable="false">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Locations"
            AutoGenerate="false">
                <IgbColumn
                Field="Shop"
                Header="Shop"
                DataType="GridColumnDataType.String"
                Editable="true"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LastInventory"
                Header="Last Inventory"
                DataType="GridColumnDataType.Date"
                Editable="true"
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

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)
- [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html)

## Additional Resources
