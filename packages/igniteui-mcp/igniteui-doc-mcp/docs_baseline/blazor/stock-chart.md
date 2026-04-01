---
title: Blazor Stock/Financial Charts | Ignite UI for Blazor
_description: The Ignite UI for Blazor Stock Chart is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Try for FREE.
_keywords: Blazor Charts, Stock Chart, Financial Chart, Candlestick Chart, OHLC Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "FinancialChartType", "IndicatorTypes", "ZoomSliderType", "Series", "FinancialChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Financial / Stock Chart
_premium: true
---

# Blazor Stock Chart

The Ignite UI for Blazor Stock Chart, sometimes referred to as Blazor Financial Chart or Candlestick Chart, is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Stock Chart shows stock prices for a ticker over time in a Time Series X-Axis. Also, this chart shows information for a company’s ticker data like Open Price, High Price, Low Price and Close Price (OHLC) for configurable period of time. The Stock Chart offers multiple ways in which the data can be visualized and interpreted, including display modes for price and volume and a host of Stock indicators.

## Blazor Stock Chart Example

You can create Stock Chart using the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) control by binding your data and optionally setting [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to `Line` value, as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">
    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                Height="100%"
                ChartType=FinancialChartType.Line
                Thickness=2
                DataSource="Data"
                ChartTitle="Google vs Microsoft Changes"
                Subtitle="Between 2013 and 2017"
                YAxisMode="FinancialChartYAxisMode.PercentChange"
                YAxisTitle="Percent Changed"
             />
        }
    </div>
</div>

@code {

    protected List<StockPrice[]> Data;

    protected override async Task OnInitializedAsync()
    {
        this.Data = await StocksHistory.GetMultipleStocks();
    }
}
```


<div class="divider--half"></div>

## Stock Chart Recommendations

### Are Blazor Stock Charts right for your project?

The typical stock chart is represented with ticker data in a candlestick chart which is used for the technical analysis of the price ranges. A candlestick chart compares the high and low prices of a day to the open and close of the ticker symbol.

- The body of the candlestick chart shows the open and close trade values (O/C).
- The wicks of the candlestick chart show the high and low trade prices (H/L).
- The distance between the top and bottom of the ticker value is the day range of the ticker price.
- The candlestick chart ticker value is hollow when the asset closed higher than it opened.
- The candlestick chart ticker value is filled when the asset closed lower than it opened.
- A black or red candle represents a price with a lower closing price than the prior candle's close.
- A white or green candle represents a higher closing price than the prior candle's close.

The Stock Chart can be set to display one of the following:

- Candlestick Chart
- Bar Chart
- Column Chart
- Line Chart

As a Stock Chart is meant to allow the user to perform data analysis functions, it includes interactive elements such as:

- Time-based Filters
- Prices View
- Volume View
- Indicators View
- Trend Lines
- Navigation / Zoombar View

### Stock Chart Data Structure

- The data source must be an array or a list of data items.
- The data source must contain at least one data item.
- All data items must contain at least one date-time (or string) column that represents the date of the ticker data.
- All data items must contain 1 numeric column for Bar, Line, and Column chart.
- All data items must contain 4 numeric columns for Open, High, Low, Close (OHLC) for a Candlestick chart.
- All data items must contain 5 numeric columns for Open, High, Low, Close and Volume for a Candlestick chart.

## Blazor Stock Chart with Multiple Series

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">
    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                Height="100%"
                ChartType=FinancialChartType.Line
                Thickness=2
                DataSource="Data"
                ChartTitle="Google vs Microsoft Changes"
                Subtitle="Between 2013 and 2017"
                YAxisMode="FinancialChartYAxisMode.PercentChange"
                YAxisTitle="Percent Changed"
             />
        }
    </div>
</div>

@code {

    protected List<StockPrice[]> Data;

    protected override async Task OnInitializedAsync()
    {
        this.Data = await StocksHistory.GetMultipleStocks();
    }
}
```


<div class="divider--half"></div>

## Blazor Stock Chart

In this example the Stock Chart is representing the S\&P 500 over the course of a year; useful for investors and conducting technical analysis and forecasting future pricing/reports.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbFinancialChart @ref="Chart"
                        Width="100%"
                        Height="100%"
                        IsToolbarVisible="false"
                        ChartType="FinancialChartType.Candle"
                        DataSource="Data"
                        ChartTitle="S&P 500"
                        TitleAlignment="HorizontalAlignment.Left"
                        TitleLeftMargin="25"
                        TitleTopMargin="10"
                        TitleBottomMargin="10"
                        Subtitle="CME - CME Delayed Price, Currency in USD"
                        SubtitleAlignment="HorizontalAlignment.Left"
                        SubtitleLeftMargin="25"
                        SubtitleTopMargin="5"
                        SubtitleBottomMargin="10"
                        YAxisLabelLocation="YAxisLabelLocation.OutsideLeft"
                        YAxisMode="FinancialChartYAxisMode.Numeric"
                        YAxisTitle="Financial Prices"
                        YAxisTitleLeftMargin="10"
                        YAxisTitleRightMargin="5"
                        YAxisLabelLeftMargin="0"
                        ZoomSliderType="FinancialChartZoomSliderType.None" />
    </div>
</div>

@code {

    public List<StockIndexInfo> Data = new StockIndexData();
    public IgbFinancialChart Chart;

}
```


<div class="divider--half"></div>

## Blazor Stock Chart Styling

If you need a Stock Chart with more features such as composite other series, you can configure the thickness, outlines, brushes, negative outlines, negative brushes as demonstrated below. In this example, the stock chart is comparing revenue between Amazon, Microsoft and Tesla.

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">
    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                Height="100%"
                ChartType=FinancialChartType.Candle
                Thickness=2
                DataSource="Data"
                ChartTitle="Google vs Microsoft Changes"
                Subtitle="Between 2013 and 2017"
                YAxisMode="FinancialChartYAxisMode.PercentChange"
                YAxisTitle="Percent Changed"
                NegativeOutlines="rgb(213, 94, 0)"
                NegativeBrushes="Transparent"
                Brushes="Transparent"
                ZoomSliderType="FinancialChartZoomSliderType.None"/>
        }
    </div>
</div>

@code {

    protected List<StockPrice[]> Data;

    protected override async Task OnInitializedAsync()
    {
        this.Data = await StocksHistory.GetMultipleStocks();
    }
}
```


<div class="divider--half"></div>

## Blazor Chart Annotations

The Crosshair Annotation Layer provides crossing lines that meet at the actual value of every targeted series. Crosshair types include: Horizontal, Vertical, and Both. The Crosshairs can also be configured to snap to data points by setting the [`CrosshairsSnapToData`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_CrosshairsSnapToData) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

The Callout Layer displays a callout at X/Y positions.

Note: When using the ordinal X axis mode, the CalloutsXMemberPath should point to the numeric index of the item, otherwise CalloutsXMemberPath should point to the time value.

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Annotations: </label>
        <label class="options-item">
            <input type="checkbox"
                   checked=@CrosshairsVisible
                   @onchange="OnCrosshairsVisible" /> Crosshair
        </label>
        <label class="options-item">
            <input type="checkbox"
                   checked=@CalloutsAnnotationVisible
                   @onchange="OnCalloutsVisible" /> Callouts
        </label>
        <label class="options-item">
            <input type="checkbox"
                   checked=@ItemTooltipVisible
                   @onchange="OnItemTooltipVisible" /> Item Tooltip
        </label>
        <label class="options-item">
            <input type="checkbox"
                   checked=@FinalValuesVisible
                   @onchange="OnFinalValuesVisible" /> Final Values
        </label>
        <label class="options-item">
            <input type="checkbox"
                   checked=@MarkersVisible
                   @onchange="OnMarkersVisible" /> Markers
        </label>
    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                Height="100%"
                @ref="@Chart"
                ChartType=FinancialChartType.Line
                Thickness=2
                XAxisMode="XAxisMode"
                YAxisMode="YAxisMode"
                DataSource="Data"
                ExcludedProperties=ExcludedProps
                CalloutsVisible="@CalloutsAnnotationVisible"
                CalloutsXMemberPath="Index"
                CalloutsYMemberPath="Value"
                CalloutsLabelMemberPath="Info"
                CalloutsContentMemberPath="Info"
                CrosshairsSnapToData=false
                ToolTipType="@TooltipType"
                CrosshairsDisplayMode="CrosshairsMode"
                CrosshairsAnnotationEnabled="@CrosshairsVisible"
                FinalValueAnnotationsVisible="@FinalValuesVisible"/>
        }
    </div>
</div>

@code {

    public IgbFinancialChart _Chart;
    public IgbFinancialChart Chart
    {
        get { return _Chart; }
        set
        {
            _Chart = value;
            this.Chart.MarkerTypes.Clear();
            this.Chart.MarkerTypes.Add(MarkerType.None);
            StateHasChanged();
        }
    }
    public FinancialChartXAxisMode XAxisMode = FinancialChartXAxisMode.Ordinal;
    public FinancialChartYAxisMode YAxisMode = FinancialChartYAxisMode.Numeric;
    List<StockItem> Data;

    public string[] ExcludedProps { get; set; } = new string[] { "Index", "Info" };
    public CrosshairsDisplayMode CrosshairsMode = CrosshairsDisplayMode.Both;
    public ToolTipType TooltipType = ToolTipType.Item;
    public Boolean CalloutsAnnotationVisible { get; set; } = true;
    public Boolean CrosshairsVisible { get; set; } = true;
    public Boolean FinalValuesVisible { get; set; } = true;
    public Boolean ItemTooltipVisible { get; set; } = true;
    public Boolean MarkersVisible { get; set; } = false;

    protected override void OnInitialized()
    {
        InitData();
    }

    private void OnItemTooltipVisible(ChangeEventArgs e)
    {
        if ((bool)e.Value == true)
        {
            TooltipType = ToolTipType.Item;
        }
        else
        {
            TooltipType = ToolTipType.None;
        }
        ItemTooltipVisible = (bool)e.Value;
    }
    private void OnCrosshairsVisible(ChangeEventArgs e)
    {
        if ((bool)e.Value == true)
        {
            CrosshairsMode = CrosshairsDisplayMode.Both;
        }
        else
        {
            CrosshairsMode = CrosshairsDisplayMode.None;
        }
        CrosshairsVisible = (bool)e.Value;
    }
    private void OnCalloutsVisible(ChangeEventArgs e)
    {
        CalloutsAnnotationVisible = (bool)e.Value;
    }
    private void OnFinalValuesVisible(ChangeEventArgs e)
    {
        FinalValuesVisible = (bool)e.Value;
    }
    private void OnMarkersVisible(ChangeEventArgs e)
    {

        if ((bool)e.Value == true)
        {
            this.Chart.MarkerTypes.Clear();
            this.Chart.MarkerTypes.Add(MarkerType.Automatic);
        }
        else
        {
            this.Chart.MarkerTypes.Clear();
            this.Chart.MarkerTypes.Add(MarkerType.None);
        }
        MarkersVisible = (bool)e.Value;
    }

    public void InitData()
    {
        var today = DateTime.Now;
        var year = today.Year;
        var dateMonth = today.Month;
        var dateEnd = new DateTime(year + 5, dateMonth, 1);
        var dateStart = new DateTime(year - 1, dateMonth, 1);

        var stockData = StocksUtility.GetStocksBetween(dateStart, dateEnd);

        var minVal = int.MaxValue;
        var maxVal = int.MinValue;
        var minIndex = 0;
        var maxIndex = 0;
        var idx = 0;
        var currentYear = 0;
        var currentQuarter = 0;

        // adding annotation data for some data item
        foreach (var item in stockData) {

            if (minVal > item.Close)
            {
                minVal = (int)item.Close;
                minIndex = idx;
            }
            if (maxVal < item.Close)
            {
                maxVal = (int)item.Close;
                maxIndex = idx;
            }
            var itemYear = StocksUtility.GetYear(item.Date);
            if (currentYear != itemYear.Year)
            {
                currentYear = itemYear.Year;
                item.Info = itemYear.Year.ToString();
            }

            var itemQuarter = StocksUtility.GetQuarter(item.Date);
            if (currentQuarter != itemQuarter)
            {
                currentQuarter = (int)itemQuarter;
                item.Info = "Q" + itemQuarter;
            }

            item.Index = idx;
            item.Value = (int)item.Close;
            idx++;
        }

        stockData[100].Info = "SPLIT";
        stockData[200].Info = "SPLIT";
        stockData[250].Info = "SPLIT";

        stockData[130].Info = "DIV";
        stockData[270].Info = "DIV";
        stockData[320].Info = "DIV";

        stockData[minIndex].Info = "MIN";
        stockData[maxIndex].Info = "MAX";

        this.Data = stockData;
    }
}
```


<div class="divider--half"></div>

## Blazor Chart Panes

The following panes are available:

- Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
- Indicator Pane - Renders all the financial indicators in a separate chart while the BollingerBands and PriceChannel overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
- Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
- Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

### Indicator Pane

Financial Indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed below the price pane because they do not share the same Y-Axis scale.

By default the indicator panes are not displayed. The toolbar allows the end user to select which indicator to display at run time.
In order to display an indicator pane initially, the [`IndicatorTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_IndicatorTypes) property must be set to a least one type of indicator, as demonstrated in the following code:

### Volume Pane

The volume pane represents the number of shares traded during a given period. Low volume would indicate little interest, while high volume would indicate high interest with a lot of trades. This can be displayed using column, line or area chart types. The toolbar allows the end user to display the volume pane by selecting a chart type to render the data at runtime. In order the display the pane, a volume type must be set, as demonstrated in the following code:

### Price Pane

This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to `Auto`. You can override the default setting, as demonstrated in the following code:

Note that is recommended to use line chart type if plotting multiple data sources or if plotting data source with a lot of data points.

### Zoom Pane

This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the [`ZoomSliderType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_ZoomSliderType) to `none` as demonstrated in the following code:

Note that you should set the [`ZoomSliderType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_ZoomSliderType) option to the same value as the [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) option is set to. This way, the zoom slider will show correct preview of the price pane. The following code demonstrates how to do this:

In this example, the stock chart is plotting revenue for United States.

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                            Height="100%"
                            ChartType=FinancialChartType.Candle
                            DataSource="Data"
                            ZoomSliderType="FinancialChartZoomSliderType.Candle"
                            VolumeType="FinancialChartVolumeType.Area"
                            OverlayBrushes="rgba(5, 138, 0, 0.17)"
                            OverlayOutlines="rgba(5, 138, 0, 0.4)"
                            OverlayThickness=1 />
        }
        @*TODO OverlayTypes="FinancialOverlayType.PriceChannel"*@

    </div>
</div>

@code {

    List<StockItem> Data;

    protected override void OnInitialized()
    {
        var today = DateTime.Now;
        var year = today.Year;
        var month = today.Month;
        var dateEnd = new DateTime(year, month, 1);
        var dateStart = new DateTime(year - 1, month, 1);
        this.Data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](../features/chart-animations.md)
- [Chart Annotations](../features/chart-annotations.md)
- [Chart Navigation](../features/chart-navigation.md)
- [Chart Trendlines](../features/chart-trendlines.md)
- [Chart Performance](../features/chart-performance.md)

## API References

The following table lists API members mentioned in the above sections:

- [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType)
- [`CrosshairsSnapToData`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_CrosshairsSnapToData)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_DataSource)
- [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html)
- [`IndicatorTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_IndicatorTypes)
- [`ZoomSliderType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_ZoomSliderType)
