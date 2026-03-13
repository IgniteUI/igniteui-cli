---
title: Blazor Tree Grid Row Dragging - Ignite UI for Blazor
_description: Row dragging in Blazor Tree Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in Blazor Tree Grid

The Ignite UI for Blazor Row Dragging feature in Blazor Tree Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component and is configurable via the [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) input.

## Blazor Tree Grid Row Drag Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container horizontal fill">
        <div class="container vertical" style="padding: 0.5rem;">
            <IgbTreeGrid
            AutoGenerate="false"
            Name="treeGrid"
            @ref="treeGrid"
            Id="treeGrid"
            Data="EmployeesNestedData"
            ChildDataKey="Employees"
            RowDraggable=true
            RowDragEndScript="OnTreeGridRowDragEndHandler"
            Width="100%"
            Height="100%"
           >
                <IgbColumn
                Field="Name"
                Header="Name"
                DataType="GridColumnDataType.String"
                Sortable="true"
                Editable="true"
                >
                </IgbColumn>

                <IgbColumn
                Field="HireDate"
                Header="Hire Date"
                DataType="GridColumnDataType.Date"
                Sortable="true"
                >
                </IgbColumn>

                <IgbColumn
                Field="Age"
                Header="Age"
                DataType="GridColumnDataType.Number"
                Sortable="true"
                >
                </IgbColumn>
            </IgbTreeGrid>
        </div>
        <div class="container vertical" style="padding: 0.5rem;">
            <IgbTreeGrid AutoGenerate="false"
                         Name="treeGrid2"
                         @ref="treeGrid2"
                         Id="treeGrid2"
                         Data="Data2"
                         EmptyGridMessage="Drag and Drop a row from the left grid to this grid"
                         ChildDataKey="Employees"
                         Width="100%"
                         Height="100%"
                         >
                <IgbColumn Field="Name"
                           Header="Name"
                           DataType="GridColumnDataType.String"
                           Sortable="true"
                           Editable="true"
                           >
                </IgbColumn>

                <IgbColumn Field="HireDate"
                           Header="Hire Date"
                           DataType="GridColumnDataType.Date"
                           Sortable="true"
                           >
                </IgbColumn>

                <IgbColumn Field="Age"
                           Header="Age"
                           DataType="GridColumnDataType.Number"
                           Sortable="true"
                           >
                </IgbColumn>
            </IgbTreeGrid>
        </div> 
    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid = this.treeGrid;
        var treeGrid2 = this.treeGrid2;        

    }

    protected override void OnInitialized()
    {
        this.Data2 = new List<EmployeesNestedDataItem_EmployeesItem>() { };
    }

    private IgbTreeGrid treeGrid;
    private IgbTreeGrid treeGrid2;

    private List<EmployeesNestedDataItem_EmployeesItem> Data2 { get; set; }

    private EmployeesNestedData _employeesNestedData = null;
    public EmployeesNestedData EmployeesNestedData
    {
        get
        {
            if (_employeesNestedData == null)
            {
                _employeesNestedData = new EmployeesNestedData();
            }
            return _employeesNestedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesNestedDataItem
{
    public double ID { get; set; }
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
    public List<EmployeesNestedDataItem_EmployeesItem> Employees { get; set; }
}
public class EmployeesNestedDataItem_EmployeesItem
{
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
}

public class EmployeesNestedData
    : List<EmployeesNestedDataItem>
{
    public EmployeesNestedData()
    {
        this.Add(new EmployeesNestedDataItem() { ID = 1, Age = 55, Salary = 80000, Productivity = 90, City = @"Berlin", Country = @"Germany", Phone = @"609-202-505", HireDate = @"2008-03-20", Name = @"John Winchester", Title = @"Development Manager", Employees = new List<EmployeesNestedDataItem_EmployeesItem>()
        {
            new EmployeesNestedDataItem_EmployeesItem() { Age = 43, Salary = 70000, Productivity = 80, City = @"Hamburg", Country = @"Germany", Phone = @"609-444-555", HireDate = @"2011-06-03", ID = 3, Name = @"Michael Burke", Title = @"Senior Software Developer" },
            new EmployeesNestedDataItem_EmployeesItem() { Age = 29, Salary = 60000, Productivity = 80, City = @"Munich", Country = @"Germany", Phone = @"609-333-444", HireDate = @"2009-06-19", ID = 2, Name = @"Thomas Anderson", Title = @"Senior Software Developer" },
            new EmployeesNestedDataItem_EmployeesItem() { Age = 31, Salary = 90000, Productivity = 80, City = @"Warasw", Country = @"Poland", Phone = @"609-222-205", HireDate = @"2014-08-18", ID = 11, Name = @"Monica Reyes", Title = @"Software Development Team Lead" },
            // ... 8 more items
    }
}
```


## Configuration

In order to enable row-dragging for your [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html), all you need to do is set the grid's [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```razor
<IgbTreeGrid RowDraggable="true">
</IgbTreeGrid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's [`DragIndicatorIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

<!-- end: Blazor -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- Blazor -->

<!-- ComponentStart: TreeGrid -->

```razor
<IgbTreeGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" DragIndicatorIconTemplate="dragIndicatorIconTemplate" @ref="grid">
</IgbTreeGrid>

private RenderFragment<IgbGridEmptyTemplateContext> dragIndicatorIconTemplate = (context) =>
{
    return @<div>
        <IgbIcon IconName="drag_handle" Collection="material"></IgbIcon>
    </div>;
};
```

<!-- ComponentEnd: TreeGrid -->

<!-- end: Blazor -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

## Application Demo

### Row Reordering Demo

<!--  WebComponents, Blazor, React -->

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

```razor
<IgbTreeGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" RowDragStartScript="WebTreeGridReorderRowStartHandler" RowDragEndScript="WebTreeGridReorderRowHandler"></IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!--  end: WebComponents, Blazor, React -->

> \[!Note]
> Make sure that there is a [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

- Is the row expanded? If so, collapse it.
- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`Data`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html#IgniteUI_Blazor_Controls_IgbTreeGrid_Data) array
- Was the row initially selected? If so, mark it as selected.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

Below, you can see this implemented:

<!-- Blazor -->

<!-- ComponentStart: TreeGrid -->

```razor
//in JavaScript
igRegisterScript("WebTreeGridReorderRowStartHandler", (args) => {
    const draggedRow = args.detail.dragElement;
    const row = this.treeGrid.getRowByIndex(draggedRow.getAttribute('data-rowindex'));
    if (row.expanded) {
        row.expanded = false;
    }
}, false);

igRegisterScript("WebTreeGridReorderRowHandler", (args) => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName("igc-tree-grid")[0];
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-tree-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    const draggedRow = args.detail.dragData.data;
    const childRows = this.findChildRows(grid.data, draggedRow);
    //remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
    // reinsert the child rows
    childRows.reverse().forEach(childRow => {
        grid.data.splice(currRowIndex + 1, 0, childRow);
    });
}, false);

function findChildRows(rows, parent) {
    const childRows = [];
    rows.forEach(row => {
        if (row.ParentID === parent.ID) {
            childRows.push(row);
            // Recursively find children of current row
            const grandchildren = this.findChildRows(rows, row);
            childRows.push(...grandchildren);
        }
    });
    return childRows;
}

function getCurrentRowIndex(rowList, cursorPosition) {
    for (const row of rowList) {
        const rowRect = row.getBoundingClientRect();
        if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
            cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
            // return the index of the targeted row
            return parseInt(row.attributes["data-rowindex"].value);
        }
    }
    return -1;
}
```

<!-- ComponentEnd: TreeGrid -->

<!-- end: Blazor -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

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
        RowDragStartScript="WebTreeGridReorderRowStartHandler"
        RowDraggable="true"
        RowDragEndScript="WebTreeGridReorderRowHandler">
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


## Limitations

Currently, there are no known limitations for the [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable).

## API References

- [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable)
- `RowDragStart`
- `RowDragEnd`
- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
