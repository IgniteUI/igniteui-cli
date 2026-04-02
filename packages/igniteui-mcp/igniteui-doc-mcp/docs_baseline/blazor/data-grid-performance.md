---
title: Blazor Data Grid | Performance | Infragistics
_description: Use the Infragistics' Blazor table for high performance data scenarios. Scroll through an unlimited number of rows and columns with full virtualization. View Ignite UI for Blazor table tutorials!
_keywords: Blazor Table, Data Grid, performance, Ignite UI for Blazor, Infragistics, data binding
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: High Performance
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor High Performance with Live Data

The Ignite UI for Blazor Data Table / Data Grid is optimized for high-performance with live data scenarios. With fast load time, smooth scrolling with zero lag time or screen flicker, you can seamlessly scroll through an unlimited number of rows and columns in your Blazor data grid application with full virtualization of grid's columns and rows.

## Blazor High Performance with Live Data Example

This sample demonstrates this performance by binding thousands of financial records to the Blazor data grid, grouping them by 1 column (eg. Territory), and live-updating multiple columns every couple of milliseconds. You can change various options in real-time and the Data Grid performance with no lag, screen flicker, or visual delay

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      @ref="DataGridRef"
                      AutoGenerateColumns="false"
                      HeaderClickAction="@HeaderClickAction.SortByMultipleColumnsTriState"
                      RowHeight="40"
                      SelectionMode="@DataGridSelectionMode.MultipleRow"
                      DefaultColumnMinWidth="80"
                      SortDescriptionsChanged="OnSortDescriptionsChanged"
                      ColumnShowingAnimationMode="@ColumnShowingAnimationMode.Auto"
                      ColumnHidingAnimationMode="@ColumnHidingAnimationMode.Auto"
                      DataSource="Data"
                      IsRowHoverEnabled="false">
                    <IgbTextColumn Field="FirstName" HeaderText="First Name" Width="@("*>130")" />
                    <IgbTextColumn Field="LastName" HeaderText="Last Name" Width="@("*>130")" />
                    <IgbTextColumn Field="Territory" Width="@("*>130")" />
                    <IgbNumericColumn Field="YearToDateSales" HeaderText="YTD Sales" Width="@("*>130")"
                                PositivePrefix="$" ShowGroupingSeparator="true" />
                    <IgbTemplateColumn Field="AvgSale" HeaderText="Avg. Sale" Width="@("*>120")" HorizontalAlignment="@CellContentHorizontalAlignment.Right"
                                    CellUpdatingScript="onAvgSaleCellUpdating"  />
                    <IgbTemplateColumn Field="Change" Width="@("*>120")" HorizontalAlignment="@CellContentHorizontalAlignment.Right"
                                    CellUpdatingScript="onChangeCellUpdating"/>
                    <IgbTemplateColumn Field="PercentChange" Width="@("*>140")" HorizontalAlignment="@CellContentHorizontalAlignment.Right"
                                    HeaderText="Change (%)" CellUpdatingScript="onPercentChangeCellUpdating"/>
                    <IgbDateTimeColumn Field="DateValue" HeaderText="Date" Width="@("*>120")" />

                    @for (int i = 0; i < 8; i++)
                    {
                        string str = "KPI_" + i.ToString();
                        <IgbNumericColumn Width="@("*>150")" Field="@str" DataBoundScript="onKPIColumnDataBound"/>
                    }
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private void OnSortDescriptionsChanged(IgbGridSortDescriptionsChangedEventArgs args)
    {

    }

    private List<SalesPerson> Data;

    private IgbDataGrid _grid;
    private IgbDataGrid DataGridRef
    {
        get { return _grid; }
        set
        {
            _grid = value;
            this.OnDataGridRef();
            StateHasChanged();
        }
    }

    private DateTime lastDataUpdate = new DateTime();
    private int interval = 1000;
    private Random random = new Random();

    protected override void OnInitialized()
    {
        this.Data = SalesPersonData.GenerateSalesPeople(500);
    }

    private void OnDataGridRef()
    {
        var columnGroup = new IgbColumnGroupDescription();
        columnGroup.Field = "Territory";
        this.DataGridRef.GroupDescriptions.Add(columnGroup);

        Task.Delay(1000).ContinueWith((t) => OnTimerTick());
    }

    private void OnTimerTick()
    {
        bool sortedBySales = false;

        int toChange = (int)Math.Round(this.Data.Count / 10.0);
        var toChangeIndexes = new List<bool>();
        bool stillAnimating = false;

        for (int i = 0; i < this.Data.Count; i++)
        {
            toChangeIndexes.Add(false);
            SalesPerson item = this.Data[i];
            if (item.AvgSaleHeat != 0)
            {
                stillAnimating = true;
            }
        }

        var now = DateTime.Now;
        bool intervalElapsed = false;

        if ((now - lastDataUpdate).TotalMilliseconds > this.interval)
        {
            intervalElapsed = true;
        }

        bool useClear = false;
        bool sortingByAvgSale = false;

        for (int i = 0; i < this.DataGridRef.SortDescriptions.Count; i++)
        {
            if (this.DataGridRef.SortDescriptions[i].Field == "AvgSale" || this.DataGridRef.SortDescriptions[i].Field.IndexOf("Change") >= 0)
            {
                sortingByAvgSale = true;
            }
        }

        bool changing = false;
        if (intervalElapsed)
        {
            this.lastDataUpdate = new DateTime();
            for (int i = 0; i < toChange; i++)
            {
                int index = (int)Math.Round(random.NextDouble() * (this.Data.Count - 1));
                toChangeIndexes[index] = true;

            }
        }

        for (int i = 0; i < toChangeIndexes.Count; i++)
        {
            var item = this.Data[i];
            if (toChangeIndexes[i] == true)
            {
                if (sortingByAvgSale && !useClear)
                {
                    this.DataGridRef.NotifyRemoveItem(this.Data, i, item);
                    this.RandomizeItem(item);
                    this.DataGridRef.NotifyInsertItem(this.Data, i, item);
                }
                else
                {
                    this.RandomizeItem(item);
                    this.DataGridRef.NotifyUpdateItem(this.Data, i, item, true);
                }

                if (item.Change > 0)
                {
                    item.AvgSaleHeat = 1;
                }
                else
                {
                    item.AvgSaleHeat = -1;
                }
            }
            else
            {
                if (item.AvgSaleHeat > 0)
                {
                    item.AvgSaleHeat -= .06;
                    if (item.AvgSaleHeat < 0)
                    {
                        item.AvgSaleHeat = 0;
                    }
                }
                if (item.AvgSaleHeat < 0)
                {
                    item.AvgSaleHeat += .06;
                    if (item.AvgSaleHeat > 0)
                    {
                        item.AvgSaleHeat = 0;
                    }
                }
            }
        }

        //if(sortingByAvgSale && useClear)
        //{
        //    this.DataGridRef.ActualDataSource.QueueAutoRefresh();
        //}

        if (!sortingByAvgSale || !intervalElapsed)
        {
            this.DataGridRef.InvalidateVisibleRows();
        }

        Task.Delay(1000).ContinueWith((t) => OnTimerTick());
    }

    private void RandomizeItem(SalesPerson item)
    {
        item.Change = (random.NextDouble() * 40.0) - 20.0;
        double prevSale = item.AvgSale;
        item.AvgSale += item.Change;
        item.PercentChange = ((item.AvgSale / prevSale) * 100.00);
    }
}
```


<div class="divider--half"></div>

## Additional Resources

- [Column Types](column-types.md)
- [Row Grouping](row-grouping.md)

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
