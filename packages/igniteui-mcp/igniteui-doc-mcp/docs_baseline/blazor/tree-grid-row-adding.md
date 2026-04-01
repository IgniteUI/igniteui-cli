---
title: Blazor Tree Grid Row Adding - Ignite UI for Blazor
_description: Learn how to use and customize the built-in row adding functionality with Blazor and utilize intuitive grid row adding and CRUD capabilities.
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-adding
_tocName: Row Adding
_premium: true
---

# Blazor Tree Grid Row Adding

<!-- ComponentStart: TreeGrid -->

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) provides a convenient way to perform data manipulations through inline row adding and a powerful API for Blazor CRUD operations. Add an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with editing actions enabled in the grid's template, hover a row and use the provided button, press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI or <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> to spawn the UI for adding a child for the selected row.

<!-- ComponentEnd: TreeGrid -->

## Blazor Tree Grid Row Adding Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesNestedTreeData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        RowEditable="true">
            <IgbActionStrip
            >
                <IgbGridEditingActions
                AddRow="true"
                AddChild="true">
                </IgbGridEditingActions>

            </IgbActionStrip>

            <IgbColumn
            Field="Name"
            Header="Full Name"
            DataType="GridColumnDataType.String"
            Resizable="true"
            Sortable="true"
            Filterable="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Resizable="false"
            Sortable="false"
            Filterable="false"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            Resizable="true"
            Sortable="true"
            Filterable="true"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date"
            Resizable="true"
            Sortable="true"
            Filterable="true"
            Editable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;

    }

    private IgbTreeGrid treeGrid;

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


## Row Adding Usage

Then define a [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) with bound data source, [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) set to true and an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with editing actions enabled. The `AddRow` input controls the visibility of the button that spawns the row adding UI.

<!-- ComponentStart: TreeGrid -->

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid AutoGenerate="false" Id="treegrid" PrimaryKey="ID" ForeignKey="ParentID" RowEditable="true">
    <IgbColumn Field="Name" Header="Name" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Title" Header="Title" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date"></IgbColumn>
    <IgbColumn Field="OnPTO" Header="On PTO" DataType="GridColumnDataType.Boolean"></IgbColumn>

    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
    </IgbActionStrip>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- Blazor -->

<!-- end: Blazor -->

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) column's input to `false`.

<!-- ComponentStart: TreeGrid -->

> **Note**:
> The [`IgbGridEditingActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditingActions.html) inputs controlling the visibility of the add row and add child buttons may use the action strip context (which is of type [`IgbRowType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html) to fine tune which records the buttons show for.

<!-- ComponentEnd: TreeGrid -->

The internal `BaseTransactionService` is automatically provided for [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

[`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

```razor
@code {
    await this.treeGrid.BeginAddRowByIdAsync('ALFKI', true);  // Spawns the add row UI to add a child for the row with PK 'ALFKI'
    await this.treeGrid.BeginAddRowByIdAsync(null, false);     // Spawns the add row UI as the first record
}
```

The [`BeginAddRowByIndex`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_BeginAddRowByIndex) method works similarly but the row to use as context is specified by index.

```razor
@code {
    await this.treeGrid.BeginAddRowByIndexAsync(10, true);   // Spawns the add row UI to add a child for the row at index 10
    await this.treeGrid.BeginAddRowByIndexAsync(0);    // Spawns the add row UI as the first record
}
```

<!-- ComponentEnd: TreeGrid -->

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Tree Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). In a [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

<!-- ComponentStart: TreeGrid -->

- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a child

<!-- ComponentEnd: TreeGrid -->

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

## Customizing Row Adding Overlay

### Customizing Text

<!-- WebComponents, React, Blazor -->

Customizing the text of the row adding overlay is possible using the [`RowAddTextTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowAddTextTemplate).

<!-- end: WebComponents, React, Blazor -->

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbTreeGrid Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowAddTextTemplate="addTextTemplate">
</IgbTreeGrid>

@code {
    private RenderFragment<IgbGridEmptyTemplateContext> addTextTemplate = (context) =>
    {
        return @<span>Adding Row</span>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

<!-- Blazor -->

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
<IgbTreeGrid Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowEditActionsTemplateScript="rowEditActionsTemplate">
</IgbTreeGrid>

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

<!-- end: Blazor -->

## Styling

The row adding UI comprises the buttons in the [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Tree Grid Row Editing](row-editing.md#styling)
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
- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

## Additional Resources

- [Tree Grid Editing](editing.md)

<!-- * [Tree Grid Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
