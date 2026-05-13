---
title: Blazor Tree Grid Cell Editing - Ignite UI for Blazor
_description: The Tree Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# Blazor Tree Grid Cell Editing

The Ignite UI for Blazor Cell Editing in Blazor Tree Grid provides a great data manipulation capability of the content of individual cells within the Blazor Tree Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for Blazor is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Blazor Tree Grid Cell Editing and Edit Templates Example

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
        AllowFiltering="true"
        ForeignKey="ParentID">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Editable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            Editable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Editable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            Editable="true"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="OnPTO"
            DataType="GridColumnDataType.Boolean"
            Editable="true"
            HasSummary="true"
            Width="130px">
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
- on single click to another cell - when you click on another cell in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) API but only if primary key is defined:

```razor
@code {
    this.treeGrid.UpdateCell(newValue, rowID, 'ReorderLevel');
}
```

<!-- ComponentEnd: TreeGrid -->

Another way to update cell is directly through `Update` method of `Cell`:

```razor
@code {
    private UpdateCell() {
        IgbCell cell = this.treeGrid.GetCellByColumn(rowIndex, "Age");
        cell.Update(9999);
    }
}
```

<!-- ComponentEnd: TreeGrid -->

### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

If you want to provide a custom template which will be applied to a cell, you can pass such template either to the cell itself, or to its header. First create the column as you usually would:

<!-- ComponentStart: TreeGrid -->

```razor
<IgbColumn
    Field="Category"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```

<!-- ComponentEnd: TreeGrid -->

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
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid1"
        @ref="treeGrid1"
        Id="treeGrid1"
        Data="RoleplayTreeGridData"
        PrimaryKey="ID"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name"
            Header="Character Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Race"
            Header="Race"
            DataType="GridColumnDataType.String"
            Editable="true"
            InlineEditorTemplateScript="WebTreeGridCellEditCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Class"
            Header="Class"
            InlineEditorTemplateScript="WebTreeGridCellEditCellTemplate"
            DataType="GridColumnDataType.String"
            Editable="true"
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
            InlineEditorTemplateScript="WebTreeGridCellEditCellTemplate"
            DataType="GridColumnDataType.String"
            Editable="true"
            Name="column3"
            @ref="column3">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treeGrid1 = this.treeGrid1;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;

    }

    private IgbTreeGrid treeGrid1;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;

    private RoleplayTreeGridData _roleplayTreeGridData = null;
    public RoleplayTreeGridData RoleplayTreeGridData
    {
        get
        {
            if (_roleplayTreeGridData == null)
            {
                _roleplayTreeGridData = new RoleplayTreeGridData();
            }
            return _roleplayTreeGridData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class RoleplayTreeGridDataItem
{
    public double ID { get; set; }
    public double ParentID { get; set; }
    public string Name { get; set; }
    public string Age { get; set; }
    public string Alignment { get; set; }
    public string Race { get; set; }
    public string Class { get; set; }
}

public class RoleplayTreeGridData
    : List<RoleplayTreeGridDataItem>
{
    public RoleplayTreeGridData()
    {
        this.Add(new RoleplayTreeGridDataItem() { ID = 1, ParentID = 8, Name = @"Stredo", Age = @"244", Alignment = @"💜 Lawful evil", Race = @"👩 Human", Class = @"🎻 Bard" });
        this.Add(new RoleplayTreeGridDataItem() { ID = 2, ParentID = 7, Name = @"Haluun", Age = @"40", Alignment = @"🤍 Unaligned", Race = @"🧒🏻 Hafling", Class = @"🙏🏻 Monk" });
        this.Add(new RoleplayTreeGridDataItem() { ID = 3, ParentID = 9, Name = @"Ivellios", Age = @"244", Alignment = @"🧡 Chaotic good", Race = @"👩 Human", Class = @"⚔️ Paladin" });
        // ... 20 more items
    }
}
```

## CRUD operations

> [!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component exposes the `AddRow` method which will add the provided data to the data source itself.

```razor
//Assuming we have a `GetNewRecord` method returning the new row data.
const record = this.GetNewRecord();
this.TreeGridRef.AddRow(record);
```

<!-- ComponentEnd: TreeGrid -->

### Updating data in the Tree Grid

Updating data in the Tree Grid is achieved through `UpdateRow` and `UpdateCell` methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

```razor
@code {
    // Updating the whole row
    this.treeGrid.UpdateRow(newData, this.selectedCell.cellID.rowID);

    // Just a particular cell through the Tree Grid API
    this.treeGrid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

    // Directly using the cell `update` method
    this.selectedCell.Update(newData);

    // Directly using the row `update` method
    IgbRowType row = this.treeGrid.GetRowByKey(rowID);
    row.Update(newData);
}
```

<!-- ComponentEnd: TreeGrid -->

### Deleting data from the Tree Grid

Please keep in mind that `DeleteRow` method will remove the specified row only if a [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) is defined.

```razor
@code {
    // Delete row through Tree Grid API
    this.treeGrid.DeleteRow(this.selectedCell.cellID.rowID);
    // Delete row through row object
    IgbRowType row = this.treeGrid.GetRowByIndex(rowIndex);
    row.Del();
}
```

### Cell Validation on Edit Event

Using the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)'s editing events, we can alter how the user interacts with the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

```razor
<IgbTreeGrid CellEditScript="HandleCellEdit" />
```

<!-- ComponentEnd: TreeGrid -->

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

```razor
// In JavaScript
igRegisterScript("HandleCellEdit", (ev) => {
    const column = event.detail.column;

    if (column.field === 'Age') {
        if (event.detail.newValue < 18) {
            event.detail.cancel = true;
            alert('Employees must be at least 18 years old!');
        }
    } else if (column.field === 'HireDate') {
        if (event.detail.newValue > new Date().getTime()) {
            event.detail.cancel = true;
            alert('The employee hire date must be in the past!');
        }
    }
}, false);
```

<!-- Blazor -->

<!-- ComponentEnd: TreeGrid -->

The result of the above validation being applied to our [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) can be seen in the below demo:

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
        CellEditScript="WebTreeGridCellEdit"
        ForeignKey="ParentID">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
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

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbTreeGrid Class="treeGrid"></IgbTreeGrid>
```

Then set the related CSS properties for that class:

```css
.treeGrid {
    --ig-grid-edit-mode-color: #FFA500;
    --ig-grid-cell-active-border-color: #FFA500;
    --ig-grid-cell-editing-background: #add8e6;
}
```

<!-- ComponentEnd: TreeGrid -->

### Styling Example

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
        AllowFiltering="true"
        ForeignKey="ParentID">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="OnPTO"
            DataType="GridColumnDataType.Boolean"
            Editable="true"
            Width="130px">
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

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html)

## Additional Resources
