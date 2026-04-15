---
title: Blazor Data Grid | Data Animation | Data Binding | Infragistics
_description: Use Infragistics' Blazor table to handle thousands of updates per seconds while remaining responsive. View Ignite UI for Blazor table demos!
_keywords: Blazor Table, Data Grid, live data updates, Ignite UI for Blazor, Infragistics, data binding
mentionedTypes: ["Implementation.Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Binding Live Data
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Binding Live Data

The Ignite UI for Blazor Data Table / Data Grid is able to handle thousands of updates per seconds, while keeping the grid responsive for any interaction that the user may undertake. You can use the following sample to check performance of the Grid handling under various live data scenarios by adjusting interval between data updates as well as volume of data updates.

## Blazor Binding Live Data Example

```razor
@using Infragistics.Samples.Shared.Components
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="options horizontal">
        <div class="options vertical" style="width: auto">
            <Toggle OnClick="onLiveSomePricesClicked" Width="150px" Background="@liveSomePricesBackground">@liveSomePricesText</Toggle>
            <Toggle OnClick="onLiveAllPricesClicked"  Width="150px" Background="@liveAllPricesBackground" >@liveAllPricesText</Toggle>
        </div>

        <div class="options vertical" style="width: auto">
            <Switch OnToggle="onToggleGrouping">Grouping</Switch>
            <Switch OnToggle="onToggleHeat">Heat</Switch>
        </div>
    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
                      DataSource="Data"
                      AutoGenerateColumns="false"
                      SelectionMode="@DataGridSelectionMode.MultipleRow"
                      IsGroupCollapsable="true"
                      RowHeight="32"
                      HeaderClickAction="@HeaderClickAction.SortByMultipleColumnsTriState"
                      ActivationMode="GridActivationMode.Cell"
                      DefaultColumnMinWidth="100"
                      IsRowHoverEnabled="false">

                        <IgbTextColumn Width="@("*>140")" Field="ID" IsHidden="true" />
                        <IgbTextColumn Width="@("*>120")" Field="Category" />
                        <IgbTextColumn Width="@("*>110")" Field="Type" />
                        <IgbTextColumn Width="@("*>110")" Field="Risk" />

                        <IgbNumericColumn Width="@("*>120")" Field="Open" HeaderText="Open" ShowGroupingSeparator="true" PositivePrefix="$" MinFractionDigits="2" MaxFractionDigits="2" />
                        <IgbTemplateColumn Width="@("*>120")" Field="Price"
                            CellStyleKeyRequestedScript="onPriceStyleKey"
                            CellUpdatingScript="onPriceCellUpdating"
                            DataBoundScript="onPriceDataBound"
                            HeaderText="Close" />
                        <IgbNumericColumn Width="@("*>120")" Field="Change" HeaderText="Change ($)" MinFractionDigits="2" MaxFractionDigits="2" />
                        <IgbNumericColumn Width="@("*>180")" Field="ChangePercent" HeaderText="Change (%)" NegativeSuffix="%" PositiveSuffix="%" MinFractionDigits="2" MaxFractionDigits="2" />

                        <IgbTextColumn Width="@("*>120")" Field="Contract" />
                        <IgbTextColumn Width="@("*>130")" Field="Settlement" />
                        <IgbTextColumn Width="@("*>130")" Field="Region" />
                        <IgbTextColumn Width="@("*>120")" Field="Country" />

                        <IgbNumericColumn Width="@("*>110")" Field="Buy" ShowGroupingSeparator="true" PositivePrefix="$" MinFractionDigits="2" MaxFractionDigits="2" />
                        <IgbNumericColumn Width="@("*>110")" Field="Sell" ShowGroupingSeparator="true" PositivePrefix="$" MinFractionDigits="2" MaxFractionDigits="2" />
                        <IgbNumericColumn Width="@("*>130")" Field="Spread" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" />
                        <IgbNumericColumn Width="@("*>130")" Field="Volume" ShowGroupingSeparator="true" MinFractionDigits="0" MaxFractionDigits="0" />
                        <IgbNumericColumn Width="@("*>130")" Field="DailyHigh" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                        <IgbNumericColumn Width="@("*>130")" Field="DailyLow" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                        <IgbNumericColumn Width="@("*>130")" Field="YearlyHigh" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                        <IgbNumericColumn Width="@("*>130")" Field="YearlyLow" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                        <IgbNumericColumn Width="@("*>130")" Field="YearlyStart" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />

                        <IgbDateTimeColumn Width="@("*>140")" Field="Maturity" HorizontalAlignment="@CellContentHorizontalAlignment.Right" />
                        <IgbTextColumn Width="@("*>120")" Field="Currency" />
                        <IgbTextColumn Width="@("*>130")" Field="Sector" />
                        <IgbTextColumn Width="@("*>130")" Field="Security" />
                        <IgbTextColumn Width="@("*>170")" Field="Issuer" />

                </IgbDataGrid>
            </div>
        }


    </div>
</div>

@code {

    public List<PortfolioInfo> Data;

    public DateTime lastUpdateTime = new DateTime();
    public int frequency = 1000; // 15
    public int DataVolume = 500;
    public bool isTimerTicking = false;
    public bool isUpdatingAllPrices = false;
    public bool isUpdatingSomePrices = false;

    public string liveSomePricesBackground = "#5E28E9";
    public string liveAllPricesBackground = "#EF2B76";

    public string liveAllPricesText = "Live All Prices";
    public string liveSomePricesText = "Live Prices";

    public bool liveSomePricesDisabled = false;
    public bool liveAllPricesDisabled = false;

    public bool canvasChecked = false;
    public bool chartOpen = false;
    public bool UseRowGrouping = true;
    public bool UseHeatBackground = true;
    public string[] hiddenColumns;
    public string[] allColumns;

    private IgbDataGrid grid;
    public IgbDataGrid DataGridRef
    {
        get { return grid; }
        set { grid = value; StateHasChanged(); this.onGridGroupingAdd(); }
    }

    protected override void OnInitialized()
    {
        this.Data = PortfolioData.Create(this.DataVolume);
    }

    private void onLiveAllPricesClicked(object sender)
    {
        if (this.liveAllPricesDisabled) return;

        this.isUpdatingAllPrices = !this.isUpdatingAllPrices;
        this.isUpdatingSomePrices = false;

        if (this.isTimerTicking)
        {
            this.isTimerTicking = false;
            this.liveAllPricesText = "Live All Prices";
            this.liveAllPricesDisabled = false;
            this.liveSomePricesDisabled = false;
        }
        else
        {
            this.startTicking();
            this.liveAllPricesText = "Stop All Prices";
            this.liveAllPricesDisabled = false;
            this.liveSomePricesDisabled = true;
        }

        this.liveSomePricesBackground = liveSomePricesDisabled ? "gray" : "#5E28E9";
        this.liveAllPricesBackground = liveAllPricesDisabled ? "gray" : "#EF2B76";
    }

    private void onLiveSomePricesClicked(object sender)
    {
        if (this.liveSomePricesDisabled) return;

        this.isUpdatingAllPrices = false;
        this.isUpdatingSomePrices = !this.isUpdatingSomePrices;

        if (this.isTimerTicking)
        {
            this.isTimerTicking = false;
            this.liveSomePricesText = "Live Prices";
            this.liveSomePricesDisabled = false;
            this.liveAllPricesDisabled = false;
        }
        else
        {
            this.startTicking();
            this.liveSomePricesText = "Stop Prices";
            this.liveSomePricesDisabled = false;
            this.liveAllPricesDisabled = true;
        }

        this.liveSomePricesBackground = liveSomePricesDisabled ? "gray" : "#5E28E9";
        this.liveAllPricesBackground = liveAllPricesDisabled ? "gray" : "#EF2B76";
    }

    public void stopTicking()
    {
        if (this.isTimerTicking)
        {
            this.isTimerTicking = false;
        }
    }

    public void startTicking()
    {
        if (!this.isTimerTicking)
        {
            this.isTimerTicking = true;
            //Task.Delay(16).ContinueWith((t) => onTimerTick());
            Task.Delay(this.frequency).ContinueWith((t) => onTimerTick());
        }
    }

    public static Random random = new Random();
    public void onTimerTick()
    {
        if (!this.isTimerTicking)
        {
            return;
        }
        if (this.grid == null)
        {
            //Task.Delay(16).ContinueWith((t) => onTimerTick());
            Task.Delay(this.frequency).ContinueWith((t) => onTimerTick());
            return;
        }

        var stillAnimating = false;

        var useClear = this.isUpdatingAllPrices;
        var updateAll = this.isUpdatingAllPrices;

        var toChangeIndexes = new List<bool>();
        foreach (var item in this.Data)
        {
            toChangeIndexes.Add(false);
            if (!this.UseHeatBackground)
            {
                item.PriceHeat = 0;
            }
            else if (item.PriceHeat != 0)
            {
                stillAnimating = true;
            }
        }

        var toChange = (int)Math.Round(this.DataVolume / 10.0);
        if (updateAll)
        {
            toChange = this.Data.Count;
        }
        else
        {
            toChange = (int)(random.Next(2, this.Data.Count - 1));
        }

        var sortingByPrice = false;
        for (var i = 0; i < this.grid.SortDescriptions.Count; i++)
        {
            if (this.grid.SortDescriptions[i].Field == "Price" ||
                this.grid.SortDescriptions[i].Field.Contains("Change"))
            {
                sortingByPrice = true;
            }
        }

        var changing = false;
        var toChangeCount = 0;

        var now = DateTime.Now;
        var elapsedTime = now.Subtract(this.lastUpdateTime);
        var elapsedInterval = elapsedTime.TotalMilliseconds > this.frequency;
        if (elapsedInterval)
        {
            this.lastUpdateTime = DateTime.Now;
            for (var i = 0; i < toChange; i++)
            {
                var index = (int)(random.Next(0, this.Data.Count - 1));
                //while (toChangeIndexes[index] != true)
                //{
                //    index = (int)Math.Round(random.NextDouble() * this.Data.Count - 1);
                //}

                toChangeIndexes[index] = true;
                toChangeCount++;
                changing = true;

            }
        }

        for (var i = 0; i < this.Data.Count; i++)
        {
            var item = this.Data[i];
            if (toChangeIndexes[i] == true)
            {
                if (sortingByPrice && !useClear)
                {
                    this.grid.NotifyRemoveItem(this.Data, i, item);
                    PortfolioData.RandomizeDataValues(item);
                    this.grid.NotifyInsertItem(this.Data, i, item);
                }
                else
                {
                    PortfolioData.RandomizeDataValues(item);
                    this.grid.NotifyUpdateItem(this.Data, i, item, true);
                }

                if (this.UseHeatBackground)
                {
                    if (item.Change > 0)
                    {
                        item.PriceHeat = 1;
                    }
                    else
                    {
                        item.PriceHeat = -1;
                    }
                }
            }
            else
            {
                if (this.UseHeatBackground)
                {
                    if (item.PriceHeat > 0)
                    {
                        item.PriceHeat -= .06;
                        if (item.PriceHeat < 0)
                        {
                            item.PriceHeat = 0;
                        }
                    }
                    if (item.PriceHeat < 0)
                    {
                        item.PriceHeat += .06;
                        if (item.PriceHeat > 0)
                        {
                            item.PriceHeat = 0;
                        }
                    }
                }
            }
        }

        if (sortingByPrice && useClear && elapsedInterval)
        {
            this.grid.NotifyClearItems(Data);
        }
        else if (useClear)
        {
            this.grid.NotifyClearItems(Data);
        }

        if (!sortingByPrice || !elapsedInterval)
        {
            this.grid.InvalidateVisibleRows();
        }
        // }
        // this.grid.invalidateVisibleRows();

        if (elapsedInterval && this.chartOpen)
        {
            //this.updatePricesByCountry();
            //this.chart.NotifyClearItems(this.pricesByCountry);
        }

        Task.Delay(this.frequency).ContinueWith((t) => onTimerTick());
    }

    private void onToggleHeat(bool isCheched)
    {
        this.UseHeatBackground = isCheched;
        this.grid.Flush();
    }

    private void onToggleGrouping(bool isCheched)
    {
        this.UseRowGrouping = isCheched;
        if (this.UseRowGrouping)
            this.onGridGroupingAdd();
        else
            this.onGridGroupingRemove();
    }

    private void onGridGroupingRemove()
    {
        this.grid.GroupDescriptions.Clear();
        this.grid.Flush();
    }

    private void onGridGroupingAdd()
    {
        var g = new IgbColumnGroupDescription();
        g.Field = "Category";
        g.SortDirection = ListSortDirection.Descending;
        this.grid.GroupDescriptions.Add(g);

        g = new IgbColumnGroupDescription();
        g.Field = "Type";
        g.SortDirection = ListSortDirection.Descending;
        this.grid.GroupDescriptions.Add(g);

        g = new IgbColumnGroupDescription();
        g.Field = "Contract";
        g.SortDirection = ListSortDirection.Descending;
        this.grid.GroupDescriptions.Add(g);
    }
}


@*<Button BackgroundColor="green" DisplayType="@ButtonDisplayStyle.Fab"> </Button>
    <Button BackgroundColor="#FF418A" DisplayType="@ButtonDisplayStyle.Flat"> </Button>
    <Checkbox Checked="true">Checkbox </Checkbox>*@
```


## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
