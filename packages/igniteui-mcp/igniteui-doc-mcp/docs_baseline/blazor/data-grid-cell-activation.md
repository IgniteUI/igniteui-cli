---
title: Blazor Data Grid | Real-Time Data Grid and Tables | Activation | Infragistics
_description: Use Infragistics' Ignite UI for Blazor Data Table & Grid to support the cell activation feature that will enable keyboard navigation through the cells of the grid. View Ignite UI for Blazor table tutorials!
_keywords: Blazor Table, Data Grid, cell activation, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "GridActivationMode"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Cell Activation
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Cell Activation

The Ignite UI for Blazor Data Table / Data Grid supports a cell activation feature that will enable keyboard navigation through the cells of the grid. This is activated by setting the [`ActivationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ActivationMode) property of the grid to `Cell`.

## Blazor Grid Cell Activation Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="container vertical">
        <div class="options horizontal">
            <label>
                Enter Key Mode:
                <select @bind="EnterKeyMode">
                    <option>@EnterKeyBehaviors.Edit</option>
                    <option>@EnterKeyBehaviors.MoveDown</option>
                    <option>@EnterKeyBehaviors.MoveLeft</option>
                    <option>@EnterKeyBehaviors.MoveRight</option>
                    <option>@EnterKeyBehaviors.MoveUp</option>
                    <option>@EnterKeyBehaviors.None</option>
                </select>
            </label>
            <label>
                Enter Key After Edit Mode:
                <select @bind="EnterKeyAfterEditMode" disabled="@EditDisabled">
                    <option>@EnterKeyBehaviorAfterEdit.MoveDown</option>
                    <option>@EnterKeyBehaviorAfterEdit.MoveLeft</option>
                    <option>@EnterKeyBehaviorAfterEdit.MoveRight</option>
                    <option>@EnterKeyBehaviorAfterEdit.MoveUp</option>
                    <option>@EnterKeyBehaviorAfterEdit.None</option>
                </select>
            </label>
        </div>
        @if (Data != null)
        {
        <div style="overflow: hidden">
            <IgbDataGrid Height="100%" Width="100%"
                  DataSource="Data"
                  EnterBehavior="@EnterKeyMode"
                  EnterBehaviorAfterEdit="@EnterKeyAfterEditMode"
                  EditMode="@CanEdit"
                  AutoGenerateColumns="false"
                  SelectionMode="DataGridSelectionMode.SingleRow"
                  ActivationMode="GridActivationMode.Cell">
                <IgbTextColumn Width="@("*>170")" Field="Name" />
                <IgbImageColumn Width="@("*>120")" IsEditable="false" Field="Photo" PaddingTop="5" PaddingBottom="5" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center"/>
                <IgbNumericColumn Width="@("*>100")" Field="Age" HorizontalAlignment="@CellContentHorizontalAlignment.Center"/>
                <IgbTextColumn Width="@("*>150")" Field="Street" HeaderText="Address" />
                <IgbTextColumn Width="@("*>130")"Field="City"  />
                <IgbImageColumn Width="@("*>120")" IsEditable="false" Field="CountryFlag" HeaderText="Country" PaddingTop="5" PaddingBottom="5" ContentOpacity="1" />
                <IgbTextColumn Field="Phone" Width="@("*>120")" />
                <IgbDateTimeColumn Width="@("*>150")" Field="Birthday" HorizontalAlignment="@CellContentHorizontalAlignment.Center"/>
                <IgbNumericColumn Width="@("*>170")" Field="Salary" PositivePrefix="$" ShowGroupingSeparator="true" MinFractionDigits="2" />
                <IgbTextColumn Width="@("*>150")" Field="Email" />
            </IgbDataGrid>
        </div>
        }

    </div>
</div>

@code {

    private object Data;
    private bool EditDisabled { get; set; }

    private EditModeType _canEdit;
    public EditModeType CanEdit
    {
        get { return _canEdit; }
        set
        {
            _canEdit = value;
        }
    }

    private EnterKeyBehaviors _enterKeyMode;
    public EnterKeyBehaviors EnterKeyMode
    {
        get { return _enterKeyMode; }
        set
        {
            _enterKeyMode = value;
            if (_enterKeyMode == EnterKeyBehaviors.Edit)
            {
                EditDisabled = false;
                CanEdit = EditModeType.Cell;
            }
            else
            {
                EditDisabled = true;
                CanEdit = EditModeType.None;
            }
        }
    }

    private EnterKeyBehaviorAfterEdit _enterKeyAfterEditMode;
    public EnterKeyBehaviorAfterEdit EnterKeyAfterEditMode
    {
        get { return _enterKeyAfterEditMode; }
        set
        {
            _enterKeyAfterEditMode = value;
        }
    }

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(200, false);
        this.EnterKeyMode = EnterKeyBehaviors.Edit;
        this.EnterKeyAfterEditMode = EnterKeyBehaviorAfterEdit.MoveDown;
    }

}
```


<div class="divider--half"></div>

## Excel Style Navigation

[`EnterBehaviorAfterEdit`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_EnterBehaviorAfterEdit) property will configure the grid to navigate to the next cell up, down, left or right after the enter key is pressed in edit mode. Otherwise, the [`EnterBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_EnterBehavior) property of the grid can be used to navigate to other cells, while not in edit mode, up, down, left or right.

## Keyboard Navigation

After setting the [`ActivationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ActivationMode) property of the grid to `Cell`, this will enable a range of keyboard navigation options in the data grid. Below is a description of each of the key presses / combinations and the effect they will have relative to the currently activated cell:

- <kbd>↑</kbd>: Navigate one cell up.
- <kbd>↓</kbd>: Navigate one cell down.
- <kbd>←</kbd>: Navigate one cell to the left on the current row only.
- <kbd>→</kbd>: Navigate one cell to the right on the current row only.
- <kbd>PAGE UP</kbd>: Scroll the grid one viewport page up.
- <kbd>PAGE DOWN</kbd>: Scroll the grid one viewport page down.
- <kbd>TAB</kbd>: Move the active cell to the next cell to the right, or the left-most cell of the next row if the last cell of that row is reached.
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd>: Move the active cell to the next cell to the left, or the right-most cell of the previous row if the first cell of that row is reached.
- <kbd>CTRL</kbd> + <kbd>↑</kbd>: Move to the top cell in the column.
- <kbd>CTRL</kbd> + <kbd>↓</kbd>: Move to the bottom cell in the column.
- <kbd>CTRL</kbd> + <kbd>←</kbd>: Move to the left-most cell in the row.
- <kbd>CTRL</kbd> + <kbd>→</kbd>: Move to the right-most cell in the row.
- <kbd>CTRL</kbd> + <kbd>HOME</kbd>: Move to the top-left cell in the grid.
- <kbd>CTRL</kbd> + <kbd>END</kbd>: Move to the bottom-right cell in the grid.

## API References

- [`ActivationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ActivationMode)
- `Cell`
