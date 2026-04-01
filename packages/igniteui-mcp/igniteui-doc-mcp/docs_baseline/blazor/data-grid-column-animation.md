---
title: Blazor Data Grid | Column Animations | Infragistics
_description: Learn how to display column animations through events when moving or hiding columns with Infragistics' Ignite UI for Blazor data table & grid. Check out Ignite UI for Blazor table tutorials!
_keywords: Blazor Table, Data Grid, column animations, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Animations
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Column Animations

The Ignite UI for Blazor Data Table / Data Grid supports Column Animation during events like Column Hiding or Column Moving. When Column Animation on the Blazor data grid is set, the corresponding animation will fire for all of the cells in that column.

## Blazor Grid Column Animations Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <label class="options-item" style="width: 9rem">Adding Animation: </label>
        <select class="options-item" style="width: 9rem" @bind="ShowingAddingAnimation">
            <option>@ColumnShowingAnimationMode.Auto</option>
            <option>@ColumnShowingAnimationMode.None</option>
            <option>@ColumnShowingAnimationMode.SlideFromLeft</option>
            <option>@ColumnShowingAnimationMode.SlideFromRight</option>
            <option>@ColumnShowingAnimationMode.SlideFromTop</option>
            <option>@ColumnShowingAnimationMode.SlideFromBottom</option>
            <option>@ColumnShowingAnimationMode.FadeIn</option>
            <option>@ColumnShowingAnimationMode.SlideFromLeftAndFadeIn</option>
            <option>@ColumnShowingAnimationMode.SlideFromRightAndFadeIn</option>
            <option>@ColumnShowingAnimationMode.SlideFromTopAndFadeIn</option>
            <option>@ColumnShowingAnimationMode.SlideFromBottomAndFadeIn</option>
        </select>
        <span class="options-item" style="width: 9rem">Exchange Animation: </span>
        <select class="options-item" style="width: 9rem" @bind="ExchangeAnimation">
            <option>@ColumnExchangingAnimationMode.Auto</option>
            <option>@ColumnExchangingAnimationMode.None</option>
            <option>@ColumnExchangingAnimationMode.SlideToLeft</option>
            <option>@ColumnExchangingAnimationMode.SlideToRight</option>
            <option>@ColumnExchangingAnimationMode.SlideToTop</option>
            <option>@ColumnExchangingAnimationMode.SlideToBottom</option>
            <option>@ColumnExchangingAnimationMode.Crossfade</option>
            <option>@ColumnExchangingAnimationMode.SlideToLeftAndCrossfade</option>
            <option>@ColumnExchangingAnimationMode.SlideToRightAndCrossfade</option>
            <option>@ColumnExchangingAnimationMode.SlideToTopAndCrossfade</option>
            <option>@ColumnExchangingAnimationMode.SlideToBottomAndCrossfade</option>
        </select>
    </div>
    <div class="options horizontal">
        <span class="options-item" style="width: 9rem">Hiding Animation: </span>
        <select class="options-item" style="width: 9rem" @bind="HidingAnimation">
            <option>@ColumnHidingAnimationMode.Auto</option>
            <option>@ColumnHidingAnimationMode.None</option>
            <option>@ColumnHidingAnimationMode.SlideToLeft</option>
            <option>@ColumnHidingAnimationMode.SlideToRight</option>
            <option>@ColumnHidingAnimationMode.SlideToTop</option>
            <option>@ColumnHidingAnimationMode.SlideToBottom</option>
            <option>@ColumnHidingAnimationMode.FadeOut</option>
            <option>@ColumnHidingAnimationMode.SlideToLeftAndFadeOut</option>
            <option>@ColumnHidingAnimationMode.SlideToRightAndFadeOut</option>
            <option>@ColumnHidingAnimationMode.SlideToTopAndFadeOut</option>
            <option>@ColumnHidingAnimationMode.SlideToBottomAndFadeOut</option>
        </select>
        <span class="options-item" style="width: 9rem">Updating Animation: </span>
        <select class="options-item" style="width: 9rem" @bind="UpdatingAnimation">
            <option>@ColumnPropertyUpdatingAnimationMode.Auto</option>
            <option>@ColumnPropertyUpdatingAnimationMode.None</option>
            <option>@ColumnPropertyUpdatingAnimationMode.Interpolate</option>
            <option>@ColumnPropertyUpdatingAnimationMode.InterpolateDeep</option>
        </select>
    </div>
    <div class="options horizontal">
        <span class="options-item" style="width: 9rem">Moving Animation: </span>
        <select class="options-item" style="width: 9rem" @bind="MovingAnimation">
            <option>@ColumnMovingAnimationMode.Auto</option>
            <option>@ColumnMovingAnimationMode.None</option>
            <option>@ColumnMovingAnimationMode.SlideOver</option>
        </select>
        <button class="options-item" @onclick="OnHideClick">Hide Column</button>
        <button class="options-item" @onclick="OnShowClick">Show Column</button>
        <button class="options-item" @onclick="OnReloadClick">Reload Grid</button>
    </div>

    <div class="container vertical" style="height: calc(100% - 125px)">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
                      DefaultColumnMinWidth="100"
                      ColumnAddingAnimationMode="@ShowingAddingAnimation"
                      ColumnShowingAnimationMode="@ShowingAddingAnimation"
                      ColumnExchangingAnimationMode="@ExchangeAnimation"
                      ColumnHidingAnimationMode="@HidingAnimation"
                      ColumnMovingAnimationMode="@MovingAnimation"
                      ColumnPropertyUpdatingAnimationMode="@UpdatingAnimation"
                      AutoGenerateColumns="false"
                      DataSource="Data"
                      IsColumnOptionsEnabled="true">
                    <IgbTextColumn Field="Name" Width="@("*>170")" />
                    <IgbTextColumn Field="Street" HeaderText="Address" Width="@("*>150")" />
                    <IgbTextColumn Field="City" Width="@("*>120")" />
                    <IgbNumericColumn Field="Salary" Width="@("*>120")" PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbDateTimeColumn Field="Birthday" Width="@("*>170")" />
                    <IgbTextColumn Field="Country" Width="@("*>120")" />
                    <IgbNumericColumn Field="Sales" Width="@("*>120")" PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbNumericColumn Field="Age" Width="@("*>120")" />
                    <IgbTextColumn Field="Email" Width="@("*>120")" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<Employee> Data;
    private IgbDataGrid DataGridRef;

    private ColumnShowingAnimationMode ShowingAddingAnimation = ColumnShowingAnimationMode.SlideFromLeft;
    private ColumnExchangingAnimationMode ExchangeAnimation = ColumnExchangingAnimationMode.Crossfade;
    private ColumnHidingAnimationMode HidingAnimation = ColumnHidingAnimationMode.FadeOut;
    private ColumnPropertyUpdatingAnimationMode UpdatingAnimation = ColumnPropertyUpdatingAnimationMode.Interpolate;
    private ColumnMovingAnimationMode MovingAnimation = ColumnMovingAnimationMode.SlideOver;

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(100, false);
    }

    private void OnHideClick(MouseEventArgs e)
    {
        foreach (IgbDataGridColumn col in this.DataGridRef.ActualColumns)
        {
            if (!col.IsHidden)
            {
                col.IsHidden = true;
                break;
            }
        }
    }

    private void OnReloadClick(MouseEventArgs e)
    {
        List<Employee> newData = EmployeeData.Create(100, false);
        for (int i = 0; i < newData.Count; i++)
        {
            Employee oldData = this.Data[i];
            this.Data[i].Salary = newData[i].Salary;
            this.DataGridRef.NotifySetItem(this.Data, i, oldData, newData[i]);
        }
    }

    private void OnShowClick(MouseEventArgs e)
    {
        IEnumerable<IgbDataGridColumn> revColumns = this.DataGridRef.ActualColumns.Reverse();

        foreach (IgbDataGridColumn col in revColumns)
        {
            if (col.IsHidden)
            {
                col.IsHidden = false;
                break;
            }
        }

        this.DataGridRef.ActualColumns.Reverse();
    }
}
```


<div class="divider--half"></div>

## Animation Properties

Each column animation property is listed and described below:

- [`ColumnAddingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnAddingAnimationMode): When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.
- [`ColumnExchangingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnExchangingAnimationMode): When a column is exchanged, you have the option to have the exchanged column header and its cells slide to the left, right, top, or bottom. There are also options to have it fade as well as slide and fade.
- [`ColumnHidingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnHidingAnimationMode): When a column is hidden, you have the option to have the column header and its cells slide out to the left, right, top, or bottom. There are also options to have it fade out as well as slide and fade out.
- [`ColumnMovingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingAnimationMode): When a column is moved, you have the option to have the column header and its cells slide over.
- [`ColumnPropertyUpdatingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnPropertyUpdatingAnimationMode): When a column's property changes, you have the option to have that property change animate by interpolating or deeply interpolating its change.
- [`ColumnShowingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnShowingAnimationMode): When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.

## Code Snippet

The following demonstrates the implementation of each of the column animations described in this topic:

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    ColumnAddingAnimationMode="ColumnShowingAnimationMode.SlideFromLeft"
    ColumnExchangingAnimationMode="ColumnExchangingAnimationMode.SlideToRight"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToTopAndFadeOut"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnPropertyUpdatingAnimationMode="ColumnPropertyUpdatingAnimationMode.Interpolate"
    ColumnShowingAnimationMode="ColumnShowingAnimationMode.SlideFromBottomAndFadeIn" />
```

## API References

- [`ColumnAddingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnAddingAnimationMode)
- [`ColumnExchangingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnExchangingAnimationMode)
- [`ColumnHidingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnHidingAnimationMode)
- [`ColumnMovingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingAnimationMode)
- [`ColumnPropertyUpdatingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnPropertyUpdatingAnimationMode)
