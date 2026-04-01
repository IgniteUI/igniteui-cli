---
title: Blazor Tree Grid Editing Rows - Ignite UI for Blazor
_description: Want to enable row editing in Blazor Tree Grid? Need a powerful API for CRUD operations? Try our Ignite UI for Blazor Tree Grid rows editing component!
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-editing
_tocName: Row Editing
_premium: true
---

# Blazor Tree Grid Row Editing

The Ignite UI for Blazor Row Editing feature in Blazor Tree Grid allows editing data directly within the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). On top of this convenient way to manipulate data, there’s a powerful API for full CRUD operations. You can perform grid row editing by clicking on a row and pressing **Enter key**. Another quick way is to double click with the mouse on the row that needs to be modified.

## Blazor Tree Grid Row Editing Example

The following sample demonstrates how to enable row editing in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

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
        Moving="true"
        RowEditable="true"
        RowSelection="GridSelectionMode.Multiple">
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


> \[!Note]
> When a row is in edit mode, clicking on a cell in another row will act like the "Done" button is pressed, submitting all changes made in the previous row. If the newly focused cell is editable, the new row enters edit mode as well. However, if the cell is not editable, only the previous row exits edit mode.

## Row Editing Usage

Define a [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) with bound data source and [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) set to true:

```razor
 <IgbTreeGrid Width="100%" Height="100%" PrimaryKey="ID" AutoGenerate="false" Data="data" RowEditable="true">
        <IgbColumn Field="Name" Header="Name" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="Age" Header="Age" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="Title" Header="Title" DataType="GridColumnDataType.String"></IgbColumn>
        <IgbColumn Field="HireDate" Header="Hire Date" DataType="GridColumnDataType.Date"></IgbColumn>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

> \[!Note]
> Setting primary key is mandatory for row editing operations.

> \[!Note]
> Enabling editing for individual columns is not necessary. Using the [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) property in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html), all rows, with defined [`Field`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Field) property (excluding the primary row) will be editable. If you want to disable editing for a specific column, simply set the [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) input of that column to `false`.

> \[!Note]
> The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) utilizes `BaseTransactionService` - an internal provider that holds pending cell changes until the row state is either submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html), the cell will also stay in edit mode.

- When perform **sorting**, **filtering**, **searching** and **hiding** operations, will revert all current changes in the row and row will exit edit mode.

- When perform **paging**, **resizing**, **pinning** and **moving** operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.

## Keyboard Navigation

- <kbd>ENTER</kbd> and <kbd>F2</kbd> enters row edit mode

- <kbd>ESC</kbd> exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

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
        <IgbTreeGrid
        AutoGenerate="false"
        Name="grid"
        @ref="grid"
        Id="grid"
        Data="EmployeesNestedTreeData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        Moving="true"
        RowEditable="true"
        RowSelection="GridSelectionMode.Multiple">
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
        var grid = this.grid;

    }

    private IgbTreeGrid grid;

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
- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

## Additional Resources

<!-- Blazor -->

<!-- * [Tree Grid Transactions](batch-editing.md) -->

<!-- end: Blazor -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
