---
title: Blazor Grid Keyboard Navigation - Ignite UI for Blazor
_description: Learn how to use Grid Keyboard Navigation with Ignite UI for Blazor. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, Ignite UI for Blazor, infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Keyboard navigation
_premium: true
---

# Blazor Grid Keyboard Navigation

The Ignite UI for Blazor Keyboard Navigation feature in Blazor Grid provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) and allows the user to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled).
- **Grid header**.
- **Grid body**.
- **Column summaries** (if enabled).
- **Grid paginator** (if enabled).

> \[!Note]
> Due to this change, navigating between the cells with <kbd>TAB</kbd> and <kbd>SHIFT</kbd> + <kbd>TAB</kbd> is no longer supported in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).
> Pressing the <kbd>TAB</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

> \[!Note]
> Exposing any **focusable** element into the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full **keyboard navigation** support in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) header container is focused, the following key combinations are available:

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

 <!-- ComponentStart: Grid -->

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>←</kbd> groups the column, if the column is marked as groupable.

 <!-- ComponentEnd: Grid -->

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd> ungroups the column, if the column is marked as groupable.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> collapses the column group header, if the header is not already collapsed.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> expands the column group header, if the header is not already expanded.

## Body navigation

When the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) body is focused, the following key combinations are available:

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

 <!-- ComponentStart: Grid -->

over Group Row - collapses the group.

 <!-- ComponentEnd: Grid -->

 

 

- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - <!-- ComponentStart: Grid -->
    over Group Row - expands the group.

 <!-- ComponentEnd: Grid -->

 

 

 <!-- ComponentStart: Grid -->

- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> - over Master Detail Row - collapses the details view.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - over Master Detail Row - expands the details view.
- <kbd>SPACE</kbd> - over Group Row - selects all rows in the group, if [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) property is set to multiple.

 <!-- ComponentEnd: Grid -->

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Custom Keyboard Navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>ENTER</kbd> or <kbd>TAB</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:

<!-- Blazor -->

| API | Description | Arguments |
|---------|-------------|-----------|
| `GridKeydown` | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [`IgbGridKeydownEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridKeydownEventArgs.html) |
| `ActiveNodeChange` | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [`IgbActiveNodeChangeEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActiveNodeChangeEventArgs.html) |

<!-- end: Blazor -->

<br />

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the `GridKeydown` event:

```razor
<IgbGrid Id="grid1" PrimaryKey="ProductID" GridKeydownScript="WebGridCustomKBNav">
</IgbGrid>
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

<!-- WebComponents -->

<!-- Angular, WebComponents, Blazor -->

Based on the event arg values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>TAB</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>ENTER</kbd> key over a cell, we will move focus to cell in the next row:

<!-- end: Angular, WebComponents, Blazor -->

```razor

// In JavaScript

igRegisterScript("WebGridCustomKBNav", (evtArgs) => {
    const args = evtArgs.detail;
    const target = args.target;
    const evt = args.event;
    const type = args.targetType;
    const grid = document.getElementById("grid1");

    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    grid.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
    });
}, false);

```

> \[!Note]
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
        <IgbGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        Moving="true"
        PrimaryKey="ProductID"
        RowEditable="true"
        GridKeydownScript="WebGridCustomKBNav">
            <IgbColumn
            Field="ProductID"
            Header="Product ID">
            </IgbColumn>

            <IgbColumn
            Field="ReorderLevel"
            Header="Reorder Level"
            DataType="GridColumnDataType.Number">
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
            Field="OrderDate"
            Header="Order Date">
            </IgbColumn>

            <IgbColumn
            Field="Discontinued"
            Header="Discontinued">
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


## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
