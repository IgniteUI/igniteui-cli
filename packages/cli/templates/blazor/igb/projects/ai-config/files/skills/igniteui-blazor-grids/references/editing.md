# Editing - Cell Editing, Row Editing & Validation

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For grid setup and column configuration — see [`structure.md`](./structure.md). 
> For programmatic API access — see [`data-operations.md`](./data-operations.md).

## Contents

- [Choosing an Editing Mode](#choosing-an-editing-mode)
- [Cell Editing](#cell-editing)
- [Row Editing](#row-editing)
- [Adding & Deleting Rows Programmatically](#adding--deleting-rows-programmatically)
- [Validation](#validation)
- [Custom Editors](#custom-editors)
- [Key Rules](#key-rules)

---

> **Pivot Grid does not support editing.** The Pivot Grid is read-only. The content below applies to IgbGrid, IgbTreeGrid, and IgbHierarchicalGrid.

---

## Choosing an Editing Mode

| Mode | Property | Best For | Commit Behavior |
|---|---|---|---|
| Cell editing | `Editable="true"` on column | Quick inline edits | Commits on blur, Enter, or Tab |
| Row editing | `RowEditable="true"` on grid | Multi-field row changes | Shows confirm/cancel banner; commits on confirm |

> **Recommendation:** Use **row editing** for most CRUD scenarios. It gives users a clear confirm/cancel flow and prevents partial row updates.

---

## Cell Editing

### Enable cell editing

Mark columns as editable:

```razor
<IgbGrid Data="@employees" PrimaryKey="Id" AutoGenerate="false">
    <IgbColumn Field="Id" Header="ID" Editable="false" />
    <IgbColumn Field="Name" Header="Name" Editable="true" DataType="GridColumnDataType.String" />
    <IgbColumn Field="Salary" Header="Salary" Editable="true" DataType="GridColumnDataType.Currency" />
    <IgbColumn Field="HireDate" Header="Hire Date" Editable="true" DataType="GridColumnDataType.Date" />
    <IgbColumn Field="IsActive" Header="Active" Editable="true" DataType="GridColumnDataType.Boolean" />
</IgbGrid>
```

- Double-click (or press Enter on a focused cell) enters edit mode.
- The editor type is determined by `DataType`: text input for strings, numeric input for numbers, datepicker for dates, checkbox for booleans.

### Cell editing events

| Event | Type | Description |
|---|---|---|
| `CellEditEnter` | `EventCallback<IgbGridEditEventArgs>` | Fires when a cell enters edit mode |
| `CellEdit` | `EventCallback<IgbGridEditEventArgs>` | Fires before a cell value is committed - set `args.Cancel = true` to reject |
| `CellEditDone` | `EventCallback<IgbGridEditDoneEventArgs>` | Fires after a cell value is committed |
| `CellEditExit` | `EventCallback<IgbGridEditEventArgs>` | Fires when a cell exits edit mode |

### Example: Validate before commit

```razor
<IgbGrid Data="data" PrimaryKey="Id" CellEdit="OnCellEdit">
    <IgbColumn Field="Salary" Editable="true" DataType="GridColumnDataType.Number" />
</IgbGrid>

@code {
    private void OnCellEdit(IgbGridEditEventArgs args)
    {
        if (args.Column.Field == "Salary")
        {
            var newValue = Convert.ToDecimal(args.NewValue);
            if (newValue < 0)
            {
                args.Cancel = true; // reject negative salary
            }
        }
    }
}
```

### Example: React to committed changes

```razor
<IgbGrid Data="data" PrimaryKey="Id" CellEditDone="OnCellEditDone">
    ...
</IgbGrid>

@code {
    private async Task OnCellEditDone(IgbGridEditDoneEventArgs args)
    {
        var rowData = args.RowData;
        var field = args.Column.Field;
        var newValue = args.NewValue;
        // Save to server
        await EmployeeService.UpdateFieldAsync(rowData, field, newValue);
    }
}
```

---

## Row Editing

### Enable row editing

```razor
<IgbGrid Data="employees" PrimaryKey="Id" RowEditable="true" AutoGenerate="false">
    <IgbColumn Field="Id" Header="ID" Editable="false" />
    <IgbColumn Field="Name" Header="Name" Editable="true" />
    <IgbColumn Field="Department" Header="Department" Editable="true" />
    <IgbColumn Field="Salary" Header="Salary" Editable="true" DataType="GridColumnDataType.Currency" />
</IgbGrid>
```

- When `RowEditable="true"`, editing a cell shows a row-level overlay with **Confirm** and **Cancel** buttons.
- All cells in the row are editable simultaneously.
- Changes are committed to the data source only on **Confirm**.

### Row editing events

| Event | Type | Description |
|---|---|---|
| `RowEditEnter` | `EventCallback<IgbGridEditEventArgs>` | Fires when a row enters edit mode |
| `RowEdit` | `EventCallback<IgbGridEditEventArgs>` | Fires before row changes are committed - set `args.Cancel = true` to reject |
| `RowEditDone` | `EventCallback<IgbGridEditDoneEventArgs>` | Fires after row changes are committed |
| `RowEditExit` | `EventCallback<IgbGridEditEventArgs>` | Fires when a row exits edit mode |

### Example: Save row on confirm

```razor
<IgbGrid Data="data" PrimaryKey="Id" RowEditable="true"
         RowEditDone="OnRowEditDone">
    ...
</IgbGrid>

@code {
    private async Task OnRowEditDone(IgbGridEditDoneEventArgs args)
    {
        var updatedRow = args.RowData;
        await EmployeeService.UpdateAsync(updatedRow);
    }
}
```

### Row editing with Action Strip

Add inline add/edit/delete actions:

```razor
<IgbGrid Data="data" PrimaryKey="Id" RowEditable="true">
    <IgbColumn Field="Name" Editable="true" />
    <IgbColumn Field="Salary" Editable="true" DataType="GridColumnDataType.Number" />
    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true" />
    </IgbActionStrip>
</IgbGrid>
```

`IgbGridEditingActions` provides:
- **Edit** - enters row edit mode on the clicked row
- **Delete** - removes the row
- **Add Row** (when `AddRow="true"`) - adds a new empty row above or below

---

## Adding & Deleting Rows Programmatically

### Add a row

```razor
@code {
    private async Task AddEmployee()
    {
        var newEmployee = new Employee
        {
            Id = employees.Max(e => e.Id) + 1,
            Name = "New Employee",
            Department = "Unassigned",
            Salary = 0
        };
        await grid.AddRowAsync(newEmployee);
    }
}
```

### Delete a row

```razor
@code {
    private async Task DeleteEmployee(int id)
    {
        await grid.DeleteRowAsync(id); // pass the primary key value
    }
}
```

---

## Validation

### Built-in validation

Columns support built-in validators that run during editing:

```razor
<IgbColumn Field="Name" Editable="true" Required="true" />
<IgbColumn Field="Email" Editable="true" DataType="GridColumnDataType.String" MinLength="5" MaxLength="100" />
<IgbColumn Field="Age" Editable="true" DataType="GridColumnDataType.Number" Min="18" Max="120" />
```

| Validator Parameter | Type | Description |
|---|---|---|
| `Required` | `bool` | Value cannot be empty |
| `MinLength` | `int` | Minimum string length |
| `MaxLength` | `int` | Maximum string length |
| `Min` | `object` | Minimum numeric/date value |
| `Max` | `object` | Maximum numeric/date value |

### Validation display

When a validation rule is violated, the cell shows a red border and a tooltip with the error message. The row cannot be committed while validation errors exist in row editing mode.

### Custom validation

Implement custom logic in the `CellEdit` or `RowEdit` event:

```razor
<IgbGrid Data="data" PrimaryKey="Id" RowEditable="true"
         RowEdit="OnRowEdit">
    <IgbColumn Field="StartDate" Editable="true" DataType="GridColumnDataType.Date" />
    <IgbColumn Field="EndDate" Editable="true" DataType="GridColumnDataType.Date" />
</IgbGrid>

@code {
    private void OnRowEdit(IgbGridEditEventArgs args)
    {
        var rowData = args.NewValue as ProjectTask;
        if (rowData != null && rowData.EndDate < rowData.StartDate)
        {
            args.Cancel = true;
            // Show notification to user
        }
    }
}
```

---

## Custom Editors

Provide a fully custom edit template for a column:

```razor
<IgbColumn Field="Priority" Header="Priority" Editable="true">
    <InlineEditorTemplate>
        @{
            var cell = (IgbCellTemplateContext)context;
        }
        <IgbSelect @bind-Value="cell.Cell.EditValue">
            <IgbSelectItem Value="Low">Low</IgbSelectItem>
            <IgbSelectItem Value="Medium">Medium</IgbSelectItem>
            <IgbSelectItem Value="High">High</IgbSelectItem>
            <IgbSelectItem Value="Critical">Critical</IgbSelectItem>
        </IgbSelect>
    </InlineEditorTemplate>
</IgbColumn>

<IgbColumn Field="AssignedTo" Header="Assigned To" Editable="true">
    <InlineEditorTemplate>
        @{
            var cell = (IgbCellTemplateContext)context;
        }
        <IgbCombo TValue="Person"
                   Data="people"
                   ValueKey="Id"
                   DisplayKey="Name"
                   SingleSelect="true"
                   @bind-Value="cell.Cell.EditValue" />
    </InlineEditorTemplate>
</IgbColumn>
```

---

## Key Rules

1. **Set `PrimaryKey`** - editing requires a primary key to identify rows.
2. **`Editable` is on the column, not the grid** - mark each editable column individually.
3. **`RowEditable` is on the grid** - it enables the row-editing overlay with confirm/cancel.
4. **Use `CellEdit` / `RowEdit` to cancel edits** - set `args.Cancel = true` before commit.
5. **Use `CellEditDone` / `RowEditDone` to persist** - these fire after the edit is committed to the grid.
6. **Validation blocks commit** - in row editing, the row cannot be confirmed while validation errors exist.
7. **Pivot Grid is read-only** - never set `Editable` or `RowEditable` on an `IgbPivotGrid`.
8. **Row editing mode is recommended** - it provides the best UX with confirm/cancel and prevents partial updates.