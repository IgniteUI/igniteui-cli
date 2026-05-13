---
title: Blazor Grid Row Dragging - Ignite UI for Blazor
_description: Row dragging in Blazor Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in Blazor Grid

The Ignite UI for Blazor Row Dragging feature in Blazor Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component and is configurable via the [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) input.

## Blazor Grid Row Drag Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container horizontal">
    <div class="container vertical" style="padding: 0.5rem;">

        @if (Data1 != null)
        {
                <IgbGrid Height="100%" Id="grid1" Width="100%"
                         Data="Data1" PrimaryKey="@("ID")"
                    RowDragEndScript="OnRowDragEndHandler"
                     RowDraggable=true>
                    <IgbColumn Field="ID" Width="100px" />
                    <IgbColumn Field="CompanyName" Width="100px" />
                    <IgbColumn Field="ContactName" Width="100px" />
                    <IgbColumn Field="ContactTitle" Width="100px" />
                    <IgbColumn Field="Address" Width="100px" />
                    <IgbColumn Field="City" Width="100px" />
                    <IgbColumn Field="Region" Width="100px" />
                    <IgbColumn Field="PostalCode" Width="100px" />
                    <IgbColumn Field="Phone" Width="100px" />
                    <IgbColumn Field="Fax" Width="100px" />
                </IgbGrid>
        }
    </div>
    <div class="container vertical" style="padding: 0.5rem;">
        @if (Data2 != null)
        {
                <IgbGrid Id='grid2' Height="100%" Width="100%"
                         Data="Data2" PrimaryKey="@("ID")"
                         EmptyGridMessage="Drag and Drop a row from the left grid to this grid">
                    <IgbColumn Field="ID" Width="100px" />
                    <IgbColumn Field="CompanyName" Width="100px" />
                    <IgbColumn Field="ContactName" Width="100px" />
                    <IgbColumn Field="ContactTitle" Width="100px" />
                    <IgbColumn Field="Address" Width="100px" />
                    <IgbColumn Field="City" Width="100px" />
                    <IgbColumn Field="Region" Width="100px" />
                    <IgbColumn Field="PostalCode" Width="100px" />
                    <IgbColumn Field="Phone" Width="100px" />
                    <IgbColumn Field="Fax" Width="100px" />
                </IgbGrid>
        }
    </div>
</div>

@code {
    private CustomersData Data1 { get; set; }
    private List<CustomersDataItem> Data2 { get; set; }

    protected override void OnInitialized()
    {
        this.Data1 = new CustomersData();
        this.Data2 = new List<CustomersDataItem>() { };
    }
}
```

## Configuration

In order to enable row-dragging for your [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), all you need to do is set the grid's [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```razor
<IgbGrid RowDraggable="true">
</IgbGrid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's [`DragIndicatorIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: TreeGrid -->

```razor
<IgbGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" DragIndicatorIconTemplate="dragIndicatorIconTemplate" @ref="grid">
</IgbGrid>

private RenderFragment<IgbGridEmptyTemplateContext> dragIndicatorIconTemplate = (context) =>
{
    return @<div>
        <IgbIcon IconName="drag_handle" Collection="material"></IgbIcon>
    </div>;
};
```

<!-- ComponentEnd: Grid -->

## Application Demo

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

<!-- ComponentStart: Grid -->

```razor
<IgbGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" RowDragEndScript="WebGridReorderRowHandler"></IgbGrid>

// In JavaScript
igRegisterScript("WebGridReorderRowHandler", (args) => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName("igc-grid")[0];
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
}, false);

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

<!-- ComponentEnd: Grid -->

> [!Note]
> Make sure that there is a [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: Grid -->

- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`Data`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_Data) array

<!-- ComponentEnd: Grid -->

Below, you can see this implemented:

<!-- ComponentEnd: Grid -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: Grid -->

Holding onto the drag icon will allow you to move a row anywhere in the grid:

<!-- ComponentEnd: Grid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        Name="grid"
        @ref="grid"
        Data="CustomersData"
        RowDraggable="true"
        PrimaryKey="ID"
        RowDragEndScript="WebGridReorderRowHandler">
            <IgbColumn
            Field="ID"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company">
            </IgbColumn>

            <IgbColumn
            Field="ContactName"
            Header="Name"
            MinWidth="60px"
            MaxWidth="230px">
            </IgbColumn>

            <IgbColumn
            Field="ContactTitle"
            Header="Title">
            </IgbColumn>

            <IgbColumn
            Field="Address">
            </IgbColumn>

            <IgbColumn
            Field="City">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode">
            </IgbColumn>

            <IgbColumn
            Field="Phone">
            </IgbColumn>

            <IgbColumn
            Field="Fax">
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

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Limitations

Currently, there are no known limitations for the [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable).

## API References

- [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable)
- `RowDragStart`
- `RowDragEnd`
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
