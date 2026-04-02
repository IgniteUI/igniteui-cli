---
title: Blazor Grid Row Adding - Ignite UI for Blazor
_description: Learn how to use and customize the built-in row adding functionality with Blazor and utilize intuitive grid row adding and CRUD capabilities.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-adding
_tocName: Row Adding
_premium: true
---

# Blazor Grid Row Adding

<!-- ComponentStart: Grid, HierarchicalGrid -->

The Ignite UI for Blazor Row Adding feature in Blazor Grid enables users to input and submit new data records without navigating to a separate form or page. With the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), users can manipulate data through inline row adding and a powerful API for CRUD operations.
Add an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with editing actions enabled in the grid's template. After that hover a row and use the provided button. Finally press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Blazor Grid Row Adding Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        RowEditable="true">
            <IgbActionStrip
            >
                <IgbGridEditingActions
                AddRow="true">
                </IgbGridEditingActions>

            </IgbActionStrip>

            <IgbColumn
            Field="ProductID"
            Header="Product ID"
            DataType="GridColumnDataType.Number"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Product Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="OrderDate"
            Header="Order Date"
            DataType="GridColumnDataType.Date">
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


## Row Adding Usage

Then define a [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) with bound data source, [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) set to true and an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with editing actions enabled. The `AddRow` input controls the visibility of the button that spawns the row adding UI.

<!-- ComponentStart: Grid -->

```razor
<IgbGrid AutoGenerate="false" Id="grid" Data="NwindData" PrimaryKey="ProductID" RowEditable="true">
    <IgbColumn Field="ProductID" Header="Product ID" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="ReorderLevel" Header="Reorder Level" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="ProductName" Header="Product Name" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="UnitsInStock" Header="Units In Stock" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date"></IgbColumn>
    <IgbColumn Field="Discontinued" Header="Discontinued" DataType="GridColumnDataType.Boolean"></IgbColumn>

    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
    </IgbActionStrip>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentEnd: TreeGrid -->

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) column's input to `false`.

<!-- ComponentStart: Grid, HierarchicalGrid -->

> **Note**:
> The [`IgbGridEditingActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditingActions.html) input controlling the visibility of the add row button may use the action strip context (which is of type [`IgbRowType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html) to fine tune which records the button shows for.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

The internal `BaseTransactionService` is automatically provided for [`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html#IgniteUI_Blazor_Controls_IgbRowType_Grid). It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

[`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html#IgniteUI_Blazor_Controls_IgbRowType_Grid) allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

<!-- ComponentStart: Grid, HierarchicalGrid -->

Using [`BeginAddRowById`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_BeginAddRowById) requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

```razor
@code {
    await this.grid.BeginAddRowByIdAsync('ALFKI', false);  // Spawns the add row UI under the row with PK 'ALFKI'
    await this.grid.BeginAddRowByIdAsync(null, false);     // Spawns the add row UI as the first record
}
```

The [`BeginAddRowByIndex`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_BeginAddRowByIndex) method works similarly but requires you to specify the index at which the UI should spawn. Allowed values range between 0 and the size of the data view - 1.

```razor
@code {
    await this.grid.BeginAddRowByIndexAsync(10);   // Spawns the add row UI at index 10
    await this.grid.BeginAddRowByIndexAsync(0);    // Spawns the add row UI as the first record
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The [`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html#IgniteUI_Blazor_Controls_IgbRowType_Grid) scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the [`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html#IgniteUI_Blazor_Controls_IgbRowType_Grid). In a [`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html#IgniteUI_Blazor_Controls_IgbRowType_Grid) that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the [`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html#IgniteUI_Blazor_Controls_IgbRowType_Grid) to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

<!---->

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the [`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html#IgniteUI_Blazor_Controls_IgbRowType_Grid) gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

## Customizing Row Adding Overlay

### Customizing Text

Customizing the text of the row adding overlay is possible using the [`RowAddTextTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowAddTextTemplate).

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGrid Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowAddTextTemplate="addTextTemplate">
</IgbGrid>

@code {
    private RenderFragment<IgbGridEmptyTemplateContext> addTextTemplate = (context) =>
    {
        return @<span>Adding Row</span>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Customizing Buttons

Customizing the buttons of the row editing overlay is possible by using the `RowEditActions` template.

<!--
REQUIRES FIX!
```ts
this.grid.rowEditActionsTemplate = (endRowEdit: IgcGridRowEditActionsTemplateContext) => {
    return html`
        <button @click="${evt => endRowEdit.implicit(false, evt)}">Cancel</button>
        <button @click="${evt => endRowEdit.implicit(true, evt)}">Apply</button>
    `;
}
```
-->

```razor
<IgbGrid Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowEditActionsTemplateScript="rowEditActionsTemplate">
</IgbGrid>

//In JavaScript:
igRegisterScript("rowEditActionsTemplate", (endRowEdit) => {
    var html = window.igTemplating.html;
    return html`<div class="row-actions">
        <button @click="${evt => endRowEdit.implicit(false, evt)}">Cancel</button>
        <button @click="${evt => endRowEdit.implicit(true, evt)}">Apply</button>
    </div>`
}, false);
```

> **Note**:
> Using `RowEditActions` template will change edit actions for both editing and adding overlay buttons.

## Styling

The row adding UI comprises the buttons in the [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Grid Row Editing](row-editing.md#styling)
- [Snackbar](../../notifications/snackbar.md#styling)

<!-- - [ActionStrip](../action-strip.md#styling) -->

## API References

- [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable)
- `RowEditEnter`
- `RowEdit`
- `RowEditDone`
- `RowEditCancel`
- `EndEdit`
- [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

- [Grid Editing](editing.md)

<!-- * [Grid Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
