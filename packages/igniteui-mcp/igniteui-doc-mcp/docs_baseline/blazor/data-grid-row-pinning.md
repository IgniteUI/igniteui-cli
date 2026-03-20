---
title: Blazor Data Grid | Row Pinning |  Infragistics
_description: Use Infragistics' Blazor grid component's row pinning feature in order to lock row change row order with a rich and easy to use API. Check out Ignite UI for Blazor table demos!
_keywords: Blazor Table, Data Grid, row pinning, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/row-pinning
_tocName: Row Pinning
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Row Pinning

The Ignite UI for Blazor Data Table / Data Grid allows Row Pinning by either using keys or the underlying data source items. When a row is pinned, it will be duplicated at the top of the blazor data grid and remain fixed there with light gray background and its actual row will be rendered with low opacity.

## Blazor Row Pinning Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="container vertical">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      @ref="@DataGridRef"
                      DataSource="Data"
                      AutoGenerateColumns="false"
                      ActivationMode="GridActivationMode.Cell">
                    <IgbImageColumn IsEditable="false" Field="Photo" Width="@("*>140")" ContentOpacity="1" HorizontalAlignment="CellContentHorizontalAlignment.Center"/>
                    <IgbTextColumn Field="FirstName" HeaderText="First Name" Width="@("*>150")" />
                    <IgbTextColumn Field="LastName" HeaderText="Last Name" Width="@("*>140")"  />
                    <IgbTextColumn Field="City" Width="@("*>120")" />
                    <IgbTextColumn Field="Country" Width="@("*>150")" />
                    <IgbNumericColumn Field="Sales" Width="@("*>140")" PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbNumericColumn Field="Age" Width="@("*>110")" />
                    <IgbDateTimeColumn Field="Birthday" Width="@("*>170")" HorizontalAlignment="CellContentHorizontalAlignment.Right" />
                    <IgbNumericColumn Field="Salary" Width="@("*>130")" PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbTextColumn Field="Email" HeaderText="Email" Width="@("*>150")" />
                </IgbDataGrid>
            </div>
        }

    </div>
</div>

@code {

    private List<Employee> Data;
    private IgbDataGrid grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            OnGridChanged();
            StateHasChanged();
        }
    }


    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(200, false);
    }

    private void OnGridChanged()
    {
        grid.PinnedItems.Add(this.Data[2] as Employee);
        grid.PinnedItems.Add(this.Data[4] as Employee);
    }

}
```


<div class="divider--half"></div>

You can pin rows in the Blazor data grid by adding the target row’s underlying data item to the pinnedItems collection of the Blazor grid.

## Code Snippet

```razor
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource" />

@code {

    private IgbDataGrid grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            OnGridChanged();
            StateHasChanged();
        }
    }

    private void OnGridChanged()
    {
        grid.PinnedItems.Add(this.DataSource[2] as Employee);
        grid.PinnedItems.Add(this.DataSource[4] as Employee);
    }
}
```

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
