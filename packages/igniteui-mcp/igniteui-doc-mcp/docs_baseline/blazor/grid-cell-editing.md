---
title: Blazor Grid Cell Editing - Ignite UI for Blazor
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# Blazor Grid Cell Editing

The Ignite UI for Blazor Cell Editing in Blazor Grid provides a great data manipulation capability of the content of individual cells within the Blazor Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for Blazor is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Blazor Grid Cell Editing and Edit Templates Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        AllowFiltering="true"
        CellEditEnterScript="WebGridOnEditEnter">
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
            InlineEditorTemplateScript="WebGridNumericColEditCellTemplate"
            Editable="true"
            Filterable="false"
            Name="column1"
            @ref="column1">
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
- on single click to another cell - when you click on another cell in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> \[!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) API but only if primary key is defined:

<!-- ComponentStart: Grid -->

```razor
this.grid.UpdateCell(newValue, rowID, 'ReorderLevel')
```

<!-- ComponentEnd: Grid -->

Another way to update cell is directly through [`Update`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowDirective.html#IgniteUI_Blazor_Controls_IgbRowDirective_Update) method of `Cell`:

<!-- ComponentStart: Grid -->

```razor
@code {
    private UpdateCell() {
        IgbCell cell = this.grid1.GetCellByColumn(rowIndex, "ReorderLevel");
        cell.Update(70);
    }
}
```

<!-- ComponentEnd: Grid -->

### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

<!-- Blazor, WebComponents -->

If you want to provide a custom template which will be applied to a cell, you can pass such template either to the cell itself, or to its header. First create the column as you usually would:

<!-- end: Blazor, WebComponents -->

<!-- Blazor -->

<!-- ComponentStart: Grid -->

```razor
<IgbColumn
    Field="Race"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```

<!-- ComponentEnd: Grid -->

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

<!-- end: Blazor -->

Working sample of the above can be found here for further reference:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid1"
        @ref="grid1"
        Data="RoleplayDataStats"
        PrimaryKey="Name">
            <IgbColumn
            Field="Name"
            Header="Character Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Race"
            Header="Race"
            DataType="GridColumnDataType.String"
            InlineEditorTemplateScript="WebGridCellEditCellTemplate"
            Editable="true"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Class"
            Header="Class"
            InlineEditorTemplateScript="WebGridCellEditCellTemplate"
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
            InlineEditorTemplateScript="WebGridCellEditCellTemplate"
            Editable="true"
            DataType="GridColumnDataType.String"
            Name="column3"
            @ref="column3">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;

    }

    private IgbGrid grid1;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;

    private RoleplayDataStats _roleplayDataStats = null;
    public RoleplayDataStats RoleplayDataStats
    {
        get
        {
            if (_roleplayDataStats == null)
            {
                _roleplayDataStats = new RoleplayDataStats();
            }
            return _roleplayDataStats;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class RoleplayDataStatsItem
{
    public string Name { get; set; }
    public string Age { get; set; }
    public string Alignment { get; set; }
    public string Race { get; set; }
    public string Class { get; set; }
}

public class RoleplayDataStats
    : List<RoleplayDataStatsItem>
{
    public RoleplayDataStats()
    {
        this.Add(new RoleplayDataStatsItem() { Name = @"Stredo", Age = @"244", Alignment = @"💜 Lawful evil", Race = @"👩 Human", Class = @"🎻 Bard" });
        this.Add(new RoleplayDataStatsItem() { Name = @"Haluun", Age = @"40", Alignment = @"🤍 Unaligned", Race = @"🧒🏻 Hafling", Class = @"🙏🏻 Monk" });
        this.Add(new RoleplayDataStatsItem() { Name = @"Ivellios", Age = @"244", Alignment = @"🧡 Chaotic good", Race = @"👩 Human", Class = @"⚔️ Paladin" });
        // ... 20 more items
    }
}
```


<!-- ComponentStart: Grid -->

### Grid Excel Style Editing

Using Excel Style Editing allows the user to navigate trough the cells just as he would using the Excel, and ever so quickly edit them.

Implementing this custom functionality can be done by utilizing the events of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). First we hook up to the grid's keydown events, and from there we can implement two functionalities:

- Constant edit mode

<!---->

- <kbd>ENTER</kbd>/<kbd>SHIFT</kbd> + <kbd>ENTER</kbd> navigation

Key parts of finding the next eligible index would be:

Please check the full sample for further reference:

#### Blazor Grid Excel Style Editing Sample

<!-- WebComponents, Blazor -->




<!-- end: WebComponents, Blazor -->

Main benefits of the above approach include:

- Constant edit mode: typing while a cell is selected will immediately enter edit mode with the value typed, replacing the existing one
- Any non-data rows are skipped when navigating with <kbd>ENTER</kbd>/<kbd>SHIFT</kbd> + <kbd>ENTER</kbd>. This allows users to quickly cycle through their values.

<!-- ComponentEnd: Grid -->

## CRUD operations

> \[!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component exposes the `AddRow` method which will add the provided data to the data source itself.

<!-- ComponentStart: Grid -->

```razor
@code {
    //Assuming we have a `GetNewRecord` method returning the new row data.
    const record = this.GetNewRecord();
    this.GridRef.AddRow(record);
}
```

<!-- ComponentEnd: Grid -->

### Updating data in the Grid

Updating data in the Grid is achieved through `UpdateRow` and `UpdateCell` methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

<!-- ComponentStart: Grid -->

```razor
@code {
    // Updating the whole row
    this.grid.UpdateRow(newData, this.selectedCell.cellID.rowID);

    // Just a particular cell through the Grid API
    this.grid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

    // Directly using the cell `update` method
    this.selectedCell.Update(newData);

    // Directly using the row `update` method
    IgbRowType row = this.grid.GetRowByKey(rowID);
    row.Update(newData);
}
```

<!-- ComponentEnd: Grid -->

### Deleting data from the Grid

Please keep in mind that `DeleteRow` method will remove the specified row only if a [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) is defined.

<!-- ComponentStart: Grid -->

```razor
@code {
    // Delete row through Grid API
    this.grid.DeleteRow(this.selectedCell.cellID.rowID);
    // Delete row through row object
    IgbRowType row = this.grid.GetRowByIndex(rowIndex);
    row.Del();
}
```

### Cell Validation on Edit Event

Using the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s editing events, we can alter how the user interacts with the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

<!-- Blazor, WebComponents -->

```razor
<IgbGrid CellEditScript="HandleCellEdit" />
```

<!-- ComponentEnd: Grid -->

<!-- end: Blazor, WebComponents -->

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- ComponentStart: Grid -->

```razor
// In JavaScript
igRegisterScript("HandleCellEdit", (ev) => {
    var d = ev.detail;
    if (d.column != null && d.column.field == "UnitsOnOrder") {
        if (d.newValue > d.rowData.UnitsInStock) {
            d.cancel = true;
            alert("You cannot order more than the units in stock!")
        }
    }
}, false);
```

If the value entered in a cell under the **Units On Order** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and the user will be alerted to the cancellation.

<!-- ComponentEnd: Grid -->

<!-- Blazor -->

If the value entered in a cell under the **Age** column is below 18 or the value in the **HireDate** column is in the future, the editing will be cancelled and the user will be alerted to the cancellation.

<!-- end: Blazor -->

<!-- ComponentEnd: TreeGrid -->

The result of the above validation being applied to our [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) can be seen in the below demo:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="NwindData"
        PrimaryKey="ProductID"
        CellEditScript="WebGridEditingEventsCellEdit"
        Name="grid1"
        @ref="grid1">
            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            DataType="GridColumnDataType.Number"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="UnitsOnOrder"
            Header="Units on Order"
            DataType="GridColumnDataType.Number"
            Editable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;

    }

    private IgbGrid grid1;

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

<!-- WebComponents, Blazor, React -->

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid Class="grid"></IgbGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-edit-mode-color: #FFA500;
    --ig-grid-cell-active-border-color: #FFA500;
    --ig-grid-cell-editing-background: #add8e6;
}
```

<!-- ComponentEnd: Grid -->

### Styling Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
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

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

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


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

<!---->

- [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html)

## Additional Resources

<!-- Blazor, WebComponents, React -->

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- ComponentEnd: Grid -->

<!-- end: Blazor, WebComponents, React -->
