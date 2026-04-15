---
title: Blazor Grid Editing Rows - Ignite UI for Blazor
_description: Want to enable row editing in Blazor Grid? Need a powerful API for CRUD operations? Try our Ignite UI for Blazor Grid rows editing component!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-editing
_tocName: Row Editing
_premium: true
---

# Blazor Grid Row Editing

The Ignite UI for Blazor Row Editing feature in Blazor Grid allows editing data directly within the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). On top of this convenient way to manipulate data, there’s a powerful API for full CRUD operations. You can perform grid row editing by clicking on a row and pressing **Enter key**. Another quick way is to double click with the mouse on the row that needs to be modified.

## Blazor Grid Row Editing Example

The following sample demonstrates how to enable row editing in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="NwindData"
        Name="grid"
        @ref="grid"
        Id="grid"
        PrimaryKey="ProductID"
        RowEditable="true">
            <IgbColumn
            Field="ProductID"
            Header="Product ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Prod. Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean">
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
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.Format = "mediumDate";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

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


> [!Note]
> When a row is in edit mode, clicking on a cell in another row will act like the "Done" button is pressed, submitting all changes made in the previous row. If the newly focused cell is editable, the new row enters edit mode as well. However, if the cell is not editable, only the previous row exits edit mode.

## Row Editing Usage

Define a [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) with bound data source and [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) set to true:

```razor
 <IgbGrid Width="100%"  
             Height="100%"
             PrimaryKey="Key"
             AutoGenerate="false"
             Data="northwindEmployees"
             RowEditable="true">
        <IgbColumn Field="ID" Editable="false"></IgbColumn>
        <IgbColumn Field="ContactName"></IgbColumn>
        <IgbColumn Field="ContactTitle"></IgbColumn>
        <IgbColumn Field="City"></IgbColumn>
        <IgbColumn Field="CompanyName"></IgbColumn>
        <IgbColumn Field="Fax"></IgbColumn>
        <IgbColumn Field="Address"></IgbColumn>
        <IgbColumn Field="PostalCode"></IgbColumn>
        <IgbColumn Field="Country"></IgbColumn>
        <IgbColumn Field="Phone"></IgbColumn>
    </IgbGrid>

    @code {
        public string Key = "ID";
        private Northwind.EmployeesType[] northwindEmployees = Array.Empty<Northwind.EmployeesType>();
        protected override async Task OnInitializedAsync()
        {
            northwindEmployees = await this.northwindService.GetEmployees() ?? northwindEmployees;

        }
    }
```

<!-- ComponentEnd: Grid -->

> [!Note]
> Setting primary key is mandatory for row editing operations.

> [!Note]
> Enabling editing for individual columns is not necessary. Using the [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) property in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), all rows, with defined [`Field`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Field) property (excluding the primary row) will be editable. If you want to disable editing for a specific column, simply set the [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) input of that column to `false`.

> [!Note]
> The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) utilizes `BaseTransactionService` - an internal provider that holds pending cell changes until the row state is either submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), the cell will also stay in edit mode.

- When perform **sorting**, **filtering**, **searching** and **hiding** operations, will revert all current changes in the row and row will exit edit mode.

- When perform **paging**, **resizing**, **pinning** and **moving** operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.

## Keyboard Navigation

- <kbd>ENTER</kbd> and <kbd>F2</kbd> enters row edit mode

- <kbd>ESC</kbd> exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

<!-- ComponentStart: Grid -->

- Expanding and collapsing grouped rows will not terminate editing for the current row.

<!-- ComponentEnd: Grid -->

## Customizing Row Editing Overlay

### Customizing Text

Customizing the text of the row editing overlay is possible using via templating.

The `RowChangesCount` property is exposed and it holds the count of the changed cells.

```razor
igRegisterScript("RowEditTextTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
   Changes: ${ctx.implicit}
</div>`;
}, false);
```

### Customizing Buttons

Customizing the buttons of the row editing overlay also possible via templating.

```razor
 igRegisterScript("RowEditActionsTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.endRowEdit = ctx.implicit;
    return html`<div>
  <button @click="(event) => endRowEdit(false, event)">Cancel</button>
    <button @click="(event) => endRowEdit(true, event)">Apply</button>
</div>`;
}, false);
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-banner-banner-background: #e3e3e3;
    --ig-banner-banner-message-color: #423589;
}
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="NwindData"
        Name="grid"
        @ref="grid"
        Id="grid"
        PrimaryKey="ProductID"
        RowEditable="true">
            <IgbColumn
            Field="ProductID"
            Header="Product ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Prod. Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued"
            DataType="GridColumnDataType.Boolean">
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
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.Format = "mediumDate";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }

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


## Known Issues and Limitations

- When the grid has no [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable)
- `RowEditEnter`
- `RowEdit`
- `RowEditDone`
- `EndEdit`
- [`Field`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Field)
- [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable)
- [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Grid Editing](editing.md)

<!-- ComponentEnd: Grid -->

<!-- * [Grid Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
