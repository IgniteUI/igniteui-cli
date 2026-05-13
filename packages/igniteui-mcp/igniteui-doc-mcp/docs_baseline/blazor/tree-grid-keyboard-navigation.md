---
title: Blazor Tree Grid Keyboard Navigation - Ignite UI for Blazor
_description: Learn how to use Tree Grid Keyboard Navigation with Ignite UI for Blazor. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, Ignite UI for Blazor, infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Keyboard navigation
_premium: true
---

# Blazor Tree Grid Keyboard Navigation

The Ignite UI for Blazor Keyboard Navigation feature in Blazor Tree Grid provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) and allows the user to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled).
- **Tree Grid header**.
- **Tree Grid body**.
- **Column summaries** (if enabled).
- **Tree Grid paginator** (if enabled).

> [!Note]
> Due to this change, navigating between the cells with <kbd>TAB</kbd> and <kbd>SHIFT</kbd> + <kbd>TAB</kbd> is no longer supported in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).
> Pressing the <kbd>TAB</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

> [!Note]
> Exposing any **focusable** element into the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full **keyboard navigation** support in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) header container is focused, the following key combinations are available:

### Key Combinations

- <kbd>↑</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>↓</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>←</kbd> navigates one cell left (no looping).
- <kbd>→</kbd> navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>HOME</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>END</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>ALT</kbd> + <kbd>L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared.
- <kbd>SPACE</kbd> selects the column. If the column is already selected, selection is cleared.
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd> ungroups the column, if the column is marked as groupable.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> collapses the column group header, if the header is not already collapsed.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> expands the column group header, if the header is not already expanded.

## Body navigation

When the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) body is focused, the following key combinations are available:

### Key Combination

<!-- ComponentStart: Grid, TreeGrid -->

- <kbd>↑</kbd>- navigates one cell up.
- <kbd>↓</kbd> navigates one cell down.

<!-- ComponentEnd: Grid, TreeGrid -->

- <kbd>←</kbd> navigates one cell left (no wrapping between lines).
- <kbd>→</kbd> - navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> navigates to the first cell in the column.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> navigates to the last cell in the column.
- <kbd>HOME</kbd> navigates to the leftmost cell in the row.
- <kbd>END</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>HOME</kbd> navigates to the top leftmost data cell in the grid.
- <kbd>CTRL</kbd> + <kbd>END</kbd> navigates to the bottom rightmost data cell in the grid.
- <kbd>PAGE UP</kbd> scrolls one page (view port) up.
- <kbd>PAGE DOWN</kbd> scrolls one page (view port) down.
- <kbd>ENTER</kbd> enters edit mode.
- <kbd>F2</kbd> enters edit mode.
- <kbd>ESC</kbd> exits edit mode.
- <kbd>TAB</kbd> available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to the **CANCEL** and **DONE** buttons, and from **DONE** button to the left-most editable cell in the row.
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - available only if there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the first cell in the row, moves the focus to the last editable cell in the previous row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to **CANCEL** and **DONE** buttons, and from **DONE** button to the right-most editable cell in the row.
- <kbd>SPACE</kbd> - selects the row, if [Row Selection](row-selection.md) is enabled.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> -

 <!-- ComponentStart: TreeGrid -->

collapses the current node.

 <!-- ComponentEnd: TreeGrid -->

- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - <!-- ComponentStart: Grid -->
    over Group Row - expands the group.

 <!-- ComponentEnd: Grid -->

 <!-- ComponentStart: TreeGrid -->

expands the current node.

 <!-- ComponentEnd: TreeGrid -->

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Custom Keyboard Navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>ENTER</kbd> or <kbd>TAB</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:

| API | Description | Arguments |
|---------|-------------|-----------|
| `GridKeydown` | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [`IgbGridKeydownEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridKeydownEventArgs.html) |
| `ActiveNodeChange` | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [`IgbActiveNodeChangeEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActiveNodeChangeEventArgs.html) |

<br />

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the `GridKeydown` event:

```razor
<IgbTreeGrid Id="grid1" PrimaryKey="ProductID" GridKeydownScript="WebGridCustomKBNav">
</IgbTreeGrid>
```

```razor
// In JavaScript

igRegisterScript("WebGridCustomKBNav", (evtArgs) => {
    const args = evtArgs.detail;
    const target = args.target;
    const evt = args.event;
    const type = args.targetType;
    const grid = document.getElementById("grid1");

    if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}, false);
```

> [!Note]
> Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:

- Double click or press <kbd>F2</kbd> key on a cell in a numeric column, change the value to **7** and press <kbd>TAB</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>ENTER</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

### Demo

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
        Data="EmployeesNestedData"
        ChildDataKey="Employees"
        RowSelection="GridSelectionMode.Multiple"
        Moving="true"
        AllowFiltering="true"
        GridKeydownScript="WebGridCustomKBNav">
            <IgbPaginator
            PerPage="15">
            </IgbPaginator>

            <IgbColumn
            Field="Name"
            Header="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            Header="Hire Date"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            Editable="true"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            Header="Age"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            Editable="true"
            Resizable="true">
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

## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
