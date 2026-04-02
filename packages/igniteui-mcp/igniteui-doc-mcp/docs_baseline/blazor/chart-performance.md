---
title: Blazor Chart Performance | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Performance
_keywords: Blazor Charts, Performance, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "XamDataChart", "FinancialChartVolumeType", "FinancialChartZoomSliderType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Performance
_premium: true
---

# Blazor Chart Performance

Blazor charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the chart and they should be considered when optimizing performance in your application. This topic will guide you to make Blazor charts work as fast as possible in your application.

## Blazor Chart Performance Examples

The following examples demonstrates two high performance scenarios of Blazor charts.

## Blazor Chart with High-Frequency

In High-Frequency scenario, the Blazor Charts can render data items that are updating in real time or at specified milliseconds intervals. You will experience no lag, no screen-flicker, and no visual delays, even as you interact with the chart on a touch-device. The following sample demonstrates the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) in High-Frequency scenario.

```razor
@using System.Collections.ObjectModel
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal" style="padding-bottom: 1rem">
         <button @onclick="OnDataFeedClick" style="width: 5rem">@DataFeedAction</button>
         <label class="options-label">Refresh: </label>
         <label class="options-value">@DataFeedInterval ms</label>
         <input class="options-slider" type="range" min="5" max="250" step="5"
                value=@DataFeedInterval @onchange="OnRefreshFrequencyChanged" />

         <button @onclick="OnDataGenerateClick">Generate</button>
         <label class="options-label">Points: </label>
         <label class="options-value">@DataPoints</label>
         <input class="options-slider" type="range" min="100" max="2000" step="100"
                value=@DataPoints @onchange="OnDataPointsChanged" />
    </div>

    <div class="container vertical">
         <IgbCategoryChart Height="100%" Width="100%" @ref="Chart"
                        ChartType="CategoryChartType.Line"
                        DataSource="@Data"
                        YAxisExtent="40"
                        SeriesAdded="OnSeriesAdded">
         </IgbCategoryChart>
    </div>
</div>

@code {

    //private List<CategoryDataItem> Data;
    private ObservableCollection<CategoryDataItem> Data;

    private IgbCategoryChart _Chart;
    private IgbCategoryChart Chart
    {
        get { return _Chart; }
        set { _Chart = value; StateHasChanged(); }
    }

    private int DataIndex = 0;
    private double DataPoints = 500;
    private double DataFeedInterval = 5;
    private string DataFeedAction = "Start";
    private bool DataFeedUpdating = false;
    private bool RefreshChanged = false;

    private void OnDataUpdate()
    {
        if (!DataFeedUpdating) return;
        if (RefreshChanged) return;

        this.DataIndex++;

        var oldItem = this.Data[0];
        var newItem = CategoryDataSource.GetNewItem(this.Data, this.DataIndex);

        this.Data.RemoveAt(0);
        this.Chart.NotifyRemoveItem(this.Data, 0, oldItem);
        this.Data.Add(newItem);
        this.Chart.NotifyInsertItem(this.Data, this.Data.Count - 1, newItem);

        Task.Delay((int)this.DataFeedInterval).ContinueWith((t) => OnDataUpdate());
    }

    private void OnSeriesAdded(IgbChartSeriesEventArgs e)
    {
        ((IgbCategoryChart)e.Parent).MarkerTypes.Clear();
        ((IgbCategoryChart)e.Parent).MarkerTypes.Add(MarkerType.None);
    }

    protected override void OnInitialized()
    {
        OnDataGenerateClick();
    }

    private void OnDataGenerateClick()
    {
        var dataList = CategoryDataSource.Generate(0, (int)this.DataPoints, false);

        this.Data = new ObservableCollection<CategoryDataItem>(dataList);

        SetupInterval();
    }

    private void OnDataFeedClick()
    {
        DataFeedUpdating = !DataFeedUpdating;
        DataFeedAction = DataFeedUpdating ? "Stop" : "Start";

        SetupInterval();
    }

    private void OnDataPointsChanged(ChangeEventArgs args)
    {
        double num = double.Parse(args.Value.ToString());

        if (num < 100) num = 100;
        if (num > 10000) num = 10000;

        this.DataPoints = num;
    }

    private void OnRefreshFrequencyChanged(ChangeEventArgs args)
    {
        RefreshChanged = true;
        double num = double.Parse(args.Value.ToString());

        if (num < 5) num = 5;
        if (num > 1000) num = 1000;

        this.DataFeedInterval = num;

        RefreshChanged = false;
        SetupInterval();
    }

    private void SetupInterval()
    {
        Task.Delay((int)this.DataFeedInterval).ContinueWith((t) => OnDataUpdate());
    }

}
```


<div class="divider--half"></div>

## Blazor Chart with High-Volume

In High-Volume scenario, the Blazor Charts can render 1 million of data points while the chart keeps providing smooth performance when end-users tries zooming in/out or navigating chart content. The following sample demonstrates the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) in High-Volume scenario.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Data Points: </label>
        <label class="options-value">@DataInfo</label>
        <input class="options-slider" type="range" min="10000" max="1000000" step="10000"
               value="@DataPoints" @onchange="OnDataPointsChanged" />
        <button @onclick="OnDataGenerateClick">Generate Data</button>
    </div>
    <div class="container vertical">
        <IgbCategoryChart @ref="chart"
            Height="100%" Width="100%"
            DataSourceScript="getHighVolumeData"
            YAxisLabelLocation="YAxisLabelLocation.OutsideRight"
            YAxisTitle="Value of Data Points"
            XAxisTitle="Index of Data Points"
            ToolTipType="ToolTipType.Default"
            XAxisEnhancedIntervalPreferMoreCategoryLabels="false"
            ShouldAutoExpandMarginForInitialLabels="false"
            CrosshairsDisplayMode="CrosshairsDisplayMode.None"
            SeriesAdded="OnSeriesAdded">
        </IgbCategoryChart>
    </div>
</div>

@code {
    private IgbCategoryChart chart;
    private int DataPoints = 1000000;
    private string DataInfo;

    protected override void OnInitialized()
    {
        this.DataInfo = ToShortString(this.DataPoints);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await IgniteUIBlazor.JsRuntime.InvokeVoidAsync("setHighVolumeDataCount", this.DataPoints);
        }
    }

    private void OnSeriesAdded(IgbChartSeriesEventArgs e)
    {
        ((IgbCategoryChart)e.Parent).MarkerTypes.Clear();
        ((IgbCategoryChart)e.Parent).MarkerTypes.Add(MarkerType.None);
    }

    private void OnDataPointsChanged(ChangeEventArgs args)
    {
        this.DataPoints = int.Parse(args.Value.ToString());
        this.DataInfo = ToShortString(this.DataPoints);
    }

    private void OnDataGenerateClick()
    {
        Task.Delay(1).ContinueWith((t) => GenerateData());
    }

    private async Task GenerateData()
    {
        await IgniteUIBlazor.JsRuntime.InvokeVoidAsync("setHighVolumeDataCount", this.DataPoints);
    }

    public static string ToShortString(double largeValue)
    {
        double roundValue;

        if (largeValue >= 1000000)
        {
            roundValue = Math.Round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000)
        {
            roundValue = Math.Round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.Round(largeValue);
        return roundValue + "";
    }
}
```


<div class="divider--half"></div>

## General Performance Guidelines

This section lists guidelines and chart features that add to the overhead and processing updates in the Blazor charts.

### Data Size

If you need to plot data sources with large number of data points (e.g. 10,000+), we recommend using Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) with one of the following type of series which where designed for specially for that purpose.

- [Scatter HD Chart](../types/scatter-chart.md#blazor-scatter-high-density-chart) instead of [Category Point Chart](../types/point-chart.md) or [Scatter Marker Chart](../types/scatter-chart.md#blazor-scatter-marker-chart)
- [Scatter Polyline Chart](../types/shape-chart.md#blazor-scatter-polyline-chart) instead of [Category Line Chart](../types/line-chart.md#blazor-line-chart-example) or [Scatter Line Chart](../types/scatter-chart.md#blazor-scatter-line-chart)
- [Scatter Polygon Chart](../types/shape-chart.md#blazor-scatter-polygon-chart) instead of [Category Area Chart](../types/area-chart.md#blazor-area-chart-example) or [Column Chart](../types/column-chart.md#blazor-column-chart-example)

### Data Structure

Although Blazor charts support rendering of multiple data sources by binding array of arrays of data points to [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_DataSource) property. It is much faster for charts if multiple data sources are flatten into single data source where each data item contains multiple data columns rather just one data column. For example:

```razor
this.CategoryChart.DataSource = FlattenDataSource.Create();
this.FinancialChart.DataSource = FlattenDataSource.Create();

public static class FlattenDataSource
{
    public static List<FlattenDataItem> Create() {
        var data = new List<FlattenDataItem>() {
            new FlattenDataItem { Year = "1996", USA = 148, CHN = 110 },
            new FlattenDataItem { Year = "2000", USA = 142, CHN = 115 },
        };
        return data;
    }
    public class FlattenDataItem
    {
        public int USA { get; set; }
        public int CHN { get; set; }
        public int Year { get; set; }
    }
}
// instead of this data structure:
public static class MultiDataSources
{
    public static List<MultiDataItem> Create() {
        var dataSource1 = new List<MultiDataItem>() {
            new MultiDataItem { Year = "1996", Value = 148 },
            new MultiDataItem { Year = "2000", Value = 142 },
        };
        var dataSource2 = new List<MultiDataItem>() {
            new MultiDataItem { Year = "1996", Value = 110 },
            new MultiDataItem { Year = "2000", Value = 115 },
        };
        var multipleSources = new List<List<MultiDataItem>>();
        multipleSources.Add(dataSource1);
        multipleSources.Add(dataSource2);
        return multipleSources;
    }
    public class MultiDataItem
    {
        public int Value { get; set; }
        public int Year { get; set; }
    }
}
```

### Data Filtering

Blazor [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) and the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) controls have built-in data adapter that analyzes your data and generates chart series for you. However, it works faster if you use [`IncludedProperties`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_IncludedProperties) and [`ExcludedProperties`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ExcludedProperties) to filter only those data columns that you actually want to render. For example,

```razor
this.Chart.IncludedProperties = new string[] { "Year", "USA", "RUS" };
this.Chart.ExcludedProperties = new string[] { "CHN",  "FRN", "GER" };
```

## Chart Performance Guidelines

### Chart Types

Simpler chart types such as [Line Chart](../types/line-chart.md) have faster performance than using [Spline Chart](../types/spline-chart.md) because of the complex interpolation of spline lines between data points. Therefore, you should use [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property of Blazor [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) or the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) control to select type of chart that renders faster. Alternatively, you can change a type of series to a faster series in Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control.

The following table lists chart types in order from the fastest performance to slower performance in each group of charts:

| Chart Group     | Chart Type |
| ----------------|--------------------------------- |
| Pie Charts       | - [Pie Chart](../types/pie-chart.md) <br> - [Donut Chart](../types/donut-chart.md) <br> - [Radial Pie Chart](../types/radial-chart.md#blazor-radial-pie-chart) |
| Line Charts      | - [Category Line Chart](../types/line-chart.md#blazor-line-chart-example) <br> - [Category Spline Chart](../types/spline-chart.md#blazor-spline-chart-example) <br> - [Step Line Chart](../types/step-chart.md#blazor-step-line-chart) <br> - [Radial Line Chart](../types/radial-chart.md#blazor-radial-line-chart) <br> - [Polar Line Chart](../types/polar-chart.md#blazor-polar-line-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#blazor-scatter-line-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#blazor-scatter-polyline-chart) (\*)  <br> - [Scatter Contour Chart](../types/scatter-chart.md#blazor-scatter-contour-chart) <br> - [Stacked Line Chart](../types/stacked-chart.md#blazor-stacked-line-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#blazor-stacked-100-line-chart) <br> |
| Area Charts      | - [Category Area Chart](../types/area-chart.md#blazor-area-chart-example) <br> - [Step Area Chart](../types/step-chart.md#blazor-step-area-chart) <br> - [Range Area Chart](../types/area-chart.md#blazor-range-area-chart) <br> - [Radial Area Chart](../types/radial-chart.md#blazor-radial-area-chart) <br> - [Polar Area Chart](../types/polar-chart.md#blazor-polar-area-chart) <br> - [Scatter Polygon Chart](../types/shape-chart.md#blazor-scatter-polygon-chart) (\*) <br> - [Scatter Area Chart](../types/scatter-chart.md#blazor-scatter-area-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#blazor-stacked-area-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#blazor-stacked-100-area-chart) <br> |
| Column Charts    | - [Column Chart](../types/column-chart.md#blazor-column-chart-example) <br> - [Bar Chart](../types/bar-chart.md#blazor-bar-chart-example) <br> - [Waterfall Chart](../types/column-chart.md#blazor-waterfall-chart) <br> - [Range Column Chart](../types/column-chart.md#blazor-range-column-chart) <br> - [Radial Column Chart](../types/radial-chart.md#blazor-radial-column-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#blazor-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#blazor-stacked-bar-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#blazor-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#blazor-stacked-100-bar-chart) |
| Spline Charts    | - [Category Spline Chart](../types/spline-chart.md#blazor-spline-chart-example) <br> - [Polar Spline Chart](../types/polar-chart.md#blazor-polar-spline-chart) <br> - [Scatter Spline Chart](../types/scatter-chart.md#blazor-scatter-spline-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#blazor-stacked-spline-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#blazor-stacked-100-spline-chart) <br> |
| Point Charts     | - [Category Point Chart](../types/point-chart.md) <br> - [Scatter HD Chart](../types/scatter-chart.md#blazor-scatter-high-density-chart)  <br> - [Scatter Marker Chart](../types/scatter-chart.md#blazor-scatter-marker-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Polar Marker Chart](../types/polar-chart.md#blazor-polar-marker-chart) <br> |
| Financial Charts | - [Stock Chart in Line Mode](../types/stock-chart.md) <br> - [Stock Chart in Column Mode](../types/stock-chart.md) <br> - [Stock Chart in Bar Mode](../types/stock-chart.md) <br> - [Stock Chart in Candle Mode](../types/stock-chart.md) <br> - [Stock Chart with Overlays](../types/stock-chart.md) <br> - [Stock Chart with Zoom Pane](../types/stock-chart.md) <br> - [Stock Chart with Volume Pane](../types/stock-chart.md#volume-pane) <br> - [Stock Chart with Indicator Pane](../types/stock-chart.md#indicator-pane) <br> |
| Scatter Charts   | - [Scatter HD Chart](../types/scatter-chart.md#blazor-scatter-high-density-chart) <br> - [Scatter Marker Chart](../types/scatter-chart.md#blazor-scatter-marker-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#blazor-scatter-line-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Scatter Spline Chart](../types/scatter-chart.md#blazor-scatter-spline-chart) <br> - [Scatter Area Chart](../types/scatter-chart.md#blazor-scatter-area-chart) <br> - [Scatter Contour Chart](../types/scatter-chart.md#blazor-scatter-contour-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#blazor-scatter-polyline-chart) (\*) <br> - [Scatter Polygon Chart](../types/shape-chart.md#blazor-scatter-polygon-chart) (\*) <br> |
| Radial Charts    | - [Radial Line Chart](../types/radial-chart.md#blazor-radial-line-chart) <br> - [Radial Area Chart](../types/radial-chart.md#blazor-radial-area-chart) <br> - [Radial Pie Chart](../types/radial-chart.md#blazor-radial-pie-chart) <br> - [Radial Column Chart](../types/radial-chart.md#blazor-radial-column-chart) <br> |
| Polar Charts     | - [Polar Marker Chart](../types/polar-chart.md#blazor-polar-marker-chart) <br> - [Polar Line Chart](../types/polar-chart.md#blazor-polar-line-chart) <br> - [Polar Area Chart](../types/polar-chart.md#blazor-polar-area-chart) <br> - [Polar Spline Chart](../types/polar-chart.md#blazor-polar-spline-chart) <br> - [Polar Spline Area Chart](../types/polar-chart.md#blazor-polar-spline-area-chart) <br> |
| Stacked Charts   | - [Stacked Line Chart](../types/stacked-chart.md#blazor-stacked-line-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#blazor-stacked-area-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#blazor-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#blazor-stacked-bar-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#blazor-stacked-spline-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#blazor-stacked-100-line-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#blazor-stacked-100-area-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#blazor-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#blazor-stacked-100-bar-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#blazor-stacked-100-spline-chart) <br> |

\* Note that the [Scatter Polygon Chart](../types/shape-chart.md) and [Scatter Polyline Chart](../types/shape-chart.md) have better performance than rest of charts if you have a lot of data sources bound to the chart. For more info, see [Series Collection](#series-collection) section. Otherwise, other chart types are faster.

### Chart Animations

Enabling [Chart Animations](chart-animations.md) will slightly delay final rendering series in the Blazor charts while they play transition-in animations.

### Chart Annotations

Enabling [Chart Annotations](chart-annotations.md) such as the Callout Annotations, Crosshairs Annotations, or Final Value Annotations, will slightly decrease performance of the Blazor chart.

### Chart Highlighting

Enabling the [Chart Highlighting](chart-highlighting.md) will slightly decrease performance of the Blazor chart.

### Chart Legend

Adding a legend to the Blazor charts might decrease performance if titles of series or data items mapped to legend are changing often at runtime.

### Chart Markers

In Blazor charts, [Markers](chart-markers.md) are especially expensive when it comes to chart performance because they add to the layout complexity of the chart, and perform data binding to obtain certain information. Also, markers decrease performance when there are a lot of data points or if there are many data sources bound. Therefore, if markers are not needed, they should be removed from the chart.

This code snippet shows how to remove markers from the Blazor charts.

```razor
// on CategoryChart or FinancialChart
this.Chart.MarkerTypes.Clear();
this.Chart.MarkerTypes.Add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.MarkerType = MarkerType.None;
```

### Chart Resolution

Setting the [`Resolution`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Resolution) property to a higher value will improve performance, but it will lower the graphical fidelity of lines of plotted series. As such, it can be increased up until the fidelity is unacceptable.

This code snippet shows how to decrease resolution in the Blazor charts.

```razor
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;
```

### Chart Overlays

Enabling [Chart Overlays](chart-overlays.md) will slightly decrease performance of the Blazor chart.

### Chart Trendlines

Enabling [Chart Trendlines](chart-trendlines.md) will slightly decrease performance of the Blazor chart.

### Axis Types

Usage of x-axis with DateTime support is not recommended if spaces between data points, based on the amount of time span between them, are not important. Instead, ordinal/category axis should be used because it is more efficient in the way it coalesces data. Also, ordinal/category axis doesn’t perform any sorting on the data like the time-based x-axis does.

> [!Note]
> The [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) already uses ordinal/category axis so there is no need to change its properties.

This code snippet shows how to ordinal/category x-axis in the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) and [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) controls.

```razor
<IgbFinancialChart XAxisMode="FinancialChartXAxisMode.Ordinal"/>

<IgbDataChart >
    <IgbCategoryXAxis Label="Time" />
</IgbDataChart>
```

### Axis Intervals

By default, Blazor charts will automatically calculate [`YAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisInterval) based on range of your data. Therefore, you should avoid setting axis interval especially to a small value to prevent rendering of too many of axis gridlines and axis labels. Also, you might want to consider increasing [`YAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisInterval) property to a larger value than the automatically calculated axis interval if you do not need many axis gridlines or axis labels.

> [!Note]
> We do not recommend setting axis minor interval as it will decrease chart performance.

This code snippet shows how to set axis major interval in the Blazor charts.

```razor
<IgbCategoryChart  XAxisInterval="5" YAxisInterval="50"/>

<IgbFinancialChart XAxisInterval="5" YAxisInterval="50"/>

<IgbDataChart >
    <IgbCategoryXAxis Name="xAxis" Interval="5" />
    <IgbNumericYAxis  Name="yAxis" Interval="50" />
</IgbDataChart>
```

### Axis Scale

Setting the [`YAxisIsLogarithmic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisIsLogarithmic) property to false is recommended for higher performance, as fewer operations are needed than calculating axis range and values of axis labels in logarithmic scale.

### Axis Labels Visibility

In the same way as Markers, axis labels are also expensive because they use templates and bindings, and may have their data context changed often. If labels are not used, they should be hidden or their interval should be increased to decrease number of axis labels.

This code snippet shows how to hide axis labels in the Blazor charts.

```razor
<IgbCategoryChart
    XAxisLabelVisibility="Visibility.Collapsed"
    YAxisLabelVisibility="Visibility.Collapsed">
</IgbCategoryChart>

<IgbFinancialChart
    XAxisLabelVisibility="Visibility.Collapsed"
    YAxisLabelVisibility="Visibility.Collapsed">
</IgbFinancialChart>

<IgbDataChart>
    <IgbCategoryXAxis Name="xAxis" LabelVisibility="Visibility.Collapsed" />
    <IgbNumericYAxis  Name="yAxis" LabelVisibility="Visibility.Collapsed" />
</IgbDataChart>
```

### Axis Labels Abbreviation

Although, the Blazor charts support abbreviation of large numbers (e.g. 10,000+) displayed in axis labels when [`YAxisAbbreviateLargeNumbers`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisAbbreviateLargeNumbers) is set to true. We recommend, instead pre-processing large values in your data items by dividing them a common factor and then setting [`YAxisTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTitle) to a string that represents factor used used to abbreviate your data values.

This code snippet shows how to set axis title in the Blazor charts.

```razor
<IgbCategoryChart  YAxisTitle="In millions of Dollars"/>

<IgbFinancialChart YAxisTitle="In millions of Dollars"/>

<IgbDataChart >
    <IgbNumericYAxis Title="In millions of Dollars" />
</IgbDataChart>
```

### Axis Labels Extent

At runtime, the Blazor charts adjust extent of labels on y-axis based on a label with longest value. This might decrease chart performance if range of data changes and labels need to be updated often. Therefore, it is recommended to set label extent at design time in order to improve chart performance.

The following code snippet shows how to set a fixed extent for labels on y-axis in the Blazor charts.

```razor
<IgbCategoryChart  XAxisLabelExtent="50" YAxisLabelExtent="50"/>

<IgbFinancialChart XAxisLabelExtent="50" YAxisLabelExtent="50"/>

<IgbDataChart>
    <IgbCategoryXAxis Name="xAxis" LabelExtent="50" />
    <IgbNumericYAxis  Name="yAxis" LabelExtent="50" />
</IgbDataChart>
```

### Axis Other Visuals

Enabling additional axis visuals (e.g. axis titles) or changing their default values might decrease performance in the Blazor charts.

For example, changing these properties on the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) or [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) control:

| Axis Visual          | X-Axis Properties | Y-Axis Properties |
| ---------------------|-------------------|------------------- |
| All Axis Visual      | [`XAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisInterval)<br>  [`XAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisMinorInterval) | [`YAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisInterval)<br>  [`YAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisMinorInterval) |
| Axis Tickmarks       | [`XAxisTickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickStroke) <br>  [`XAxisTickStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickStrokeThickness)<br>  [`XAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickLength)<br>  | [`YAxisTickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickStroke) <br>  [`YAxisTickStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickStrokeThickness)<br>  [`YAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickLength)<br> |
| Axis Major Gridlines | [`XAxisMajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMajorStroke)<br>  [`XAxisMajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMajorStrokeThickness)<br>   | [`YAxisMajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMajorStroke)<br>  [`YAxisMajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMajorStrokeThickness)<br> |
| Axis Minor Gridlines | [`XAxisMinorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMinorStroke)<br>  [`XAxisMinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMinorStrokeThickness)<br>   | [`YAxisMinorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMinorStroke)<br>  [`YAxisMinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMinorStrokeThickness)<br> |
| Axis Main Line       | [`XAxisStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStroke)<br>  [`XAxisStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStrokeThickness)<br>   | [`YAxisStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStroke)<br>  [`YAxisStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStrokeThickness)<br> |
| Axis Titles          | [`XAxisTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTitle)<br>  [`XAxisTitleAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTitleAngle)<br>    | [`YAxisTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTitle)<br>  [`YAxisTitleAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTitleAngle)<br> |
| Axis Strips          | [`XAxisStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStrip)<br>   | [`YAxisStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStrip)<br> |

Or changing properties of an [`IgbAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html) in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control:

| Axis Visual          | Axis Properties |
| ---------------------|------------------- |
| All Axis Visuals     | `Interval`, `MinorInterval` |
| Axis Tickmarks       | `TickStroke` , `TickStrokeThickness`, `TickLength` |
| Axis Major Gridlines | `MajorStroke`, `MajorStrokeThickness` |
| Axis Minor Gridlines | `MinorStroke`, `MinorStrokeThickness` |
| Axis Main Line       | `Stroke`, `StrokeThickness` |
| Axis Titles          | [`ChartTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ChartTitle), `TitleAngle` |
| Axis Strips          | `Strip` |

## Performance in Financial Chart

In addition to above performance guidelines, the Blazor [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) control has the following unique features that affect performance.

### Y-Axis Mode

Setting the [`YAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisMode) option to `Numeric` is recommended for higher performance, as fewer operations are needed than using `PercentChange` mode.

### Chart Panes

Setting a lot of panes using [`IndicatorTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_IndicatorTypes) and [`OverlayTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_OverlayTypes) options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

### Zoom Slider

Setting the [`ZoomSliderType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_ZoomSliderType) option to `None` will improve chart performance and enable more vertical space for other indicators and the volume pane.

### Volume Type

Setting the [`VolumeType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_VolumeType) property can have the following impact on chart performance:

- `None` - is the least expensive since it does not display the volume pane.
- `Line` - is more expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
- `Area` - is more expensive to render than the `Line` volume type.
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) - is more expensive to render than the `Area` volume type and it is recommended when rendering volume data of 1-3 stocks.

## Performance in Data Chart

In addition to the general performance guidelines, the Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control has the following unique features that affect performance.

### Axes Collection

Adding too many axis to the [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) collection of the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control will decrease chart performance and we recommend [Sharing Axes](chart-axis-layouts.md#axis-sharing-example) between series.

### Series Collection

Also, adding a lot of series to the [`Series`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_Series) collection of the Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control will add overhead to rendering because each series has its own rendering canvas. This is especially important if you have more than 10 series in the Data Chart. We recommend combining multiple data sources into flatten data source (see [Data Structure](#data-structure) section) and then using conditional styling feature of the following series:

| Slower Performance Scenario | Faster Scenario with Conditional Styling |
| ----------------------------|---------------------------------------- |
| 10+ of [`IgbLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLineSeries.html)         | Single [`IgbScatterLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterLineSeries.html) |
| 20+ of [`IgbLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLineSeries.html)         | Single [`IgbScatterPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolylineSeries.html) |
| 10+ of [`IgbScatterLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterLineSeries.html)  | Single [`IgbScatterPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolylineSeries.html) |
| 10+ of [`IgbPointSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPointSeries.html)        | Single [`IgbScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSeries.html) |
| 20+ of [`IgbPointSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPointSeries.html)        | Single [`IgbHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHighDensityScatterSeries.html) |
| 20+ of [`IgbScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSeries.html)      | Single [`IgbHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHighDensityScatterSeries.html) |
| 10+ of [`IgbAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAreaSeries.html)         | Single [`IgbScatterPolygonSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolygonSeries.html) |
| 10+ of [`IgbColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnSeries.html)       | Single [`IgbScatterPolygonSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolygonSeries.html) |

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](../types/area-chart.md)
- [Bar Chart](../types/bar-chart.md)
- [Bubble Chart](../types/bubble-chart.md)
- [Column Chart](../types/column-chart.md)
- [Donut Chart](../types/donut-chart.md)
- [Pie Chart](../types/pie-chart.md)
- [Point Chart](../types/point-chart.md)
- [Polar Chart](../types/polar-chart.md)
- [Radial Chart](../types/radial-chart.md)
- [Shape Chart](../types/shape-chart.md)
- [Spline Chart](../types/spline-chart.md)
- [Scatter Chart](../types/scatter-chart.md)
- [Stacked Chart](../types/stacked-chart.md)
- [Step Chart](../types/shape-chart.md)
- [Stock Chart](../types/stock-chart.md)
- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Markers](chart-markers.md)
- [Chart Overlays](chart-overlays.md)
- [Chart Trendlines](chart-trendlines.md)

## API References

The following table lists API members mentioned in above sections:

- [`Resolution`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Resolution)
- [`IndicatorTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_IndicatorTypes)
- [`OverlayTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_OverlayTypes)
- [`VolumeType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_VolumeType)
- [`ZoomSliderType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_ZoomSliderType)
- [`XAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_XAxisMode)
- [`YAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisMode)
- [`XAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisInterval)
- [`YAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisInterval)
- [`XAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisMinorInterval)
- [`YAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMinorInterval)
- [`XAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelVisibility)
- [`YAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelVisibility)
- [`YAxisIsLogarithmic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisIsLogarithmic)
