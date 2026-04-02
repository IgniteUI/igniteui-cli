---
title: Blazor Data Grid | Horizontal Scrolling | Infragistics
_description: Use Infragistics' Blazor grid component's horizontal scrolling feature to scroll seamlessly through the columns. Check out Ignite UI for Blazor table demos!
_keywords: Blazor Table, Data Grid, column, horizontal, scrolling, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Horizontal Scrolling
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Horizontal Scrolling

The Ignite UI for Blazor Data Table / Data Grid supports Horizontal Scrolling is enabled by setting the total width of the columns greater than the width of the Blazor data grid.

## Blazor Horizontal Scrolling Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="container vertical">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      DefaultColumnMinWidth="120"
                      DataSource="Data"
                      AutoGenerateColumns="false">
                        <IgbTextColumn Field="ID" Width="@("*>110")" />
                        <IgbTextColumn Field="FirstName" Width="@("*>190")" />
                        <IgbTextColumn Field="LastName" Width="@("*>190")" />
                        <IgbDateTimeColumn Field="Birthday" Width="@("*>170")" />
                        <IgbNumericColumn Field="Age" Width="@("*>120")" />
                        <IgbImageColumn IsEditable="false" Field="CountryFlag" />
                        <IgbTextColumn Field="Street" Width="@("*>160")" />
                        <IgbTextColumn Field="City" Width="260" />
                        <IgbTextColumn Field="Country" Width="@("*>170")" />
                        <IgbNumericColumn Field="Salary" Width="@("*>170")" />
                        <IgbNumericColumn Field="Sales" Width="@("*>120")" />
                        <IgbNumericColumn Field="Salary" Width="@("*>120")" PositivePrefix="$"
                                       ShowGroupingSeparator="true"
                                       MaxFractionDigits="0"
                                       MinFractionDigits="0" />
                </IgbDataGrid>
            </div>
        }

    </div>
</div>

@code {

    private List<Employee> Data;

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(200, false);

    }

}
```


<div class="divider--half"></div>

## Setting Default Column Width

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    DefaultColumnMinWidth="300" />
```

## Setting Individual Column Widths

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    AutoGenerateColumns="false">
    <IgbTextColumn Field="FirstName" Width="300" />
    <IgbTextColumn Field="LastName" Width="300" />
    <IgbNumericColumn Field="Age" Width="300" />
    <IgbDateTimeColumn Field="Birthday" Width="300" />
    <IgbTextColumn Field="Street" Width="300" />
    <IgbTextColumn Field="City" Width="300" />
    <IgbNumericColumn Field="Salary" Width="300" />
    <IgbNumericColumn Field="Sales" Width="300" />
</IgbDataGrid>
```

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
