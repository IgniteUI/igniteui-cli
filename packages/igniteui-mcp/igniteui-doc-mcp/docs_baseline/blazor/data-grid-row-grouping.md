---
title: Blazor Data Grid | Row Grouping | Infragistics
_description: Use Infragistics' Blazor grid component's Group Row feature to group rows into a sticky header Row Group. This is an easy way to visually group data based on your criteria. Check out Ignite UI for Blazor table demos!
_keywords: Blazor Table, Data Grid, row grouping, groupby area,  Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/groupby
_tocName: Row Grouping
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Row Grouping

The Ignite UI for Blazor Data Table / Data Grid lets you group rows into a ‘sticky header’ Row Group. This is similar to the Group By feature in Microsoft Outlook, which is an easy way to visually group data based on your own criteria.

## Blazor Row Group-By Area Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="container vertical">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      DataSource="Data"
                      AutoGenerateColumns="false"
                      IsGroupCollapsable="true"
                      IsGroupByAreaVisible="true">
                    <IgbTextColumn Field="Name" Width="@("*>120")" />
                    <IgbNumericColumn Field="Age" Width="@("*>110")" />
                    <IgbDateTimeColumn Field="Birthday" HorizontalAlignment="CellContentHorizontalAlignment.Center" Width="@("*>160")"/>
                    <IgbTextColumn IsEditable="false" Field="Country" HeaderText="Country" Width="@("*>160")"
                                    PaddingTop="5" PaddingBottom="5" ContentOpacity="1" HorizontalAlignment="CellContentHorizontalAlignment.Center"/>
                    <IgbTextColumn Field="Street" />
                    <IgbNumericColumn Field="Salary" HeaderText="Salary" Width="@("*>130")"
                                    PositivePrefix="$" ShowGroupingSeparator="true"/>
                    <IgbTextColumn Field="City" />
                    <IgbNumericColumn Field="Salary" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
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

## Group-By Area

Set `IsGroupByAreaVisible` property on the DataGrid to True, as shown in the example above, to the user interface. The group-by area allows users more options to group and sort columns without interact when interacting the DataGrid indirectly. Groups can be positioned and reordered based on the users needs. This area also populates when columns are programmatically added as [`GroupDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_GroupDescriptions) on the DataGrid as well.

## Using Group Descriptions Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="container vertical">
        <div class="options horizontal">
            <span class="options-item">Group Header Display Mode: </span>
            <select class="options-item" @bind="GroupHeaderClickAction">
                <option>@GroupHeaderDisplayMode.Combined</option>
                <option>@GroupHeaderDisplayMode.Split</option>
            </select>

    </div>

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      @ref="@DataGridRef"
                      DataSource="Data"
                      AutoGenerateColumns="false"
                      IsGroupCollapsable="true"
                      GroupHeaderDisplayMode="@GroupHeaderClickAction">
                    <IgbTextColumn Field="Name" Width="@("*>120")" />
                    <IgbNumericColumn Field="Age" Width="@("*>110")" />
                    <IgbDateTimeColumn Field="Birthday" HorizontalAlignment="CellContentHorizontalAlignment.Center" Width="@("*>160")"/>
                    <IgbTextColumn IsEditable="false" Field="Country" HeaderText="Country" Width="@("*>160")"
                                    PaddingTop="5" PaddingBottom="5" ContentOpacity="1" HorizontalAlignment="CellContentHorizontalAlignment.Center"/>
                    <IgbTextColumn Field="Street" />
                    <IgbNumericColumn Field="Salary" HeaderText="Salary" Width="@("*>130")"
                                    PositivePrefix="$" ShowGroupingSeparator="true"/>
                    <IgbTextColumn Field="City" />
                    <IgbNumericColumn Field="Salary" PositivePrefix="$" ShowGroupingSeparator="true" MaxFractionDigits="0" MinFractionDigits="0" />
                </IgbDataGrid>
            </div>
        }

    </div>
</div>

@code {

    private List<Employee> Data;
    private IgbDataGrid grid;
    private GroupHeaderDisplayMode GroupHeaderClickAction { get; set; } = GroupHeaderDisplayMode.Combined;

    public IgbDataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            OnGridCreated();

            StateHasChanged();
        }
    }

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(200, false);
    }

    private void OnGridCreated()
    {
        var country = new IgbColumnGroupDescription() { Field = "Country", DisplayName = "Location" };
        var city = new IgbColumnGroupDescription() { Field = "City", DisplayName = "City" };
        var income = new IgbColumnGroupDescription() { Field = "Income", DisplayName = "Income" };

        grid.GroupDescriptions.Add(country);
        grid.GroupDescriptions.Add(city);
        grid.GroupDescriptions.Add(income);
    }

}
```


<div class="divider--half"></div>

## Hierarchical Groups

The [`GroupHeaderDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_GroupHeaderDisplayMode) property allows the groups to be hierarchical. By default, each group description that is added gets aggregated together. Setting the [`GroupHeaderDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_GroupHeaderDisplayMode) to `Split` will create a section header for ever group defined in [`GroupDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_GroupDescriptions) property of the [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html).

```razor
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource"
    GroupHeaderDisplayMode="GroupHeaderDisplayMode.Split" />
```

## Collapsible Groups

Also, the [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html) can display a toggle on each group section to allow the end user to expand or collapse the grouped data via the [`IsGroupCollapsable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_IsGroupCollapsable) property.

```razor
<IgbDataGrid @ref="DataGridRef" Height="100%" Width="100%"
    DataSource="DataSource"
    IsGroupCollapsable="true" />
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```razor
<IgbDataGrid @ref="DataGridRef" Height="100%" Width="100%"
    DataSource="DataSource"
    GroupHeaderDisplayMode="GroupHeaderDisplayMode.Split"
    IsGroupCollapsable="true" />

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
            OnGridCreated();
            StateHasChanged();
        }
    }

    private void OnGridCreated()
    {
        var state = new ColumnGroupDescription { Field = "Country", DisplayName = "Location" };
        var city = new ColumnGroupDescription { Field = "City", DisplayName = "City" };
        var income = new ColumnGroupDescription { Field = "Income", DisplayName = "Income" };

        this.DataGridRef.GroupDescriptions.Add(state);
        this.DataGridRef.GroupDescriptions.Add(city);
        this.DataGridRef.GroupDescriptions.Add(income);
    }
}
```

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
- [`GroupDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_GroupDescriptions)
- [`GroupHeaderDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_GroupHeaderDisplayMode)
- `IsGroupByAreaVisible`
- [`IsGroupCollapsable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_IsGroupCollapsable)
