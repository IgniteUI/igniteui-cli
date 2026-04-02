---
title: Blazor Data Chart | Data Visualization Tools | Navigation | Infragistics
_description: Navigate Infragistics' Blazor charts by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for Blazor graph navigation capabilities!
_keywords: Blazor charts, data chart, navigation, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "ModifierKeys"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Navigation
_premium: true
---

# Blazor Chart Navigation

The Ignite UI for Blazor charts allows for interactive panning and zooming via the mouse, keyboard and touch.

## Blazor Chart Navigation Example

The following example shows all of the available panning and zooming options that are available. You can interact with the example by using the buttons, or select your desired options using the dropdowns or checkboxes.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <div class="options vertical" style="width: 100px">
            <button @onclick="OnPanUp">Pan Up</button>
            <button @onclick="OnPanDown">Pan Down</button>
        </div>
        <div class="options vertical" style="width: 100px">
            <button @onclick="OnPanLeft">Pan Left</button>
            <button @onclick="OnPanRight">Pan Right</button>
        </div>
        <div class="options vertical" style="width: 100px">
            <button @onclick="OnZoomIn">Zoom In</button>
            <button @onclick="OnZoomOut">Zoom Out</button>
        </div>
        <div class="options vertical" style="width: 120px; align-self: center">
            <label class="options-label" style="margin: 5px">Pan Modifier:</label>
            <label class="options-label" style="margin: 5px">Zoom Modifier:</label>
        </div>
        <div class="options vertical" style="width: 100px">
            <select @bind="@PanModifier" style="margin: 5px">
                <option>@ModifierKeys.Alt</option>
                <option>@ModifierKeys.Control</option>
                <option>@ModifierKeys.Shift</option>
                <option>@ModifierKeys.Windows</option>
                <option>@ModifierKeys.Apple</option>
                <option>@ModifierKeys.None</option>
            </select>
            <select @bind="@DragModifier" style="margin: 5px">
                <option>@ModifierKeys.Alt</option>
                <option>@ModifierKeys.Control</option>
                <option>@ModifierKeys.Shift</option>
                <option>@ModifierKeys.Windows</option>
                <option>@ModifierKeys.Apple</option>
                <option>@ModifierKeys.None</option>
            </select>
        </div>
        <div class="options vertical" style="width: 150px; align-self: center">
            <label class="options-label" style="margin: 5px;">Interaction:</label>
            <label class="options-label" style="margin: 5px;">Zooming:</label>
        </div>
        <div class="options vertical" style="width: 100px">
            <select @bind="@DefaultInteraction" style="margin: 5px">
                <option>@InteractionState.DragZoom</option>
                <option>@InteractionState.DragPan</option>
                <option>@InteractionState.None</option>
            </select>
            <input class="options-item" type="checkbox" @onchange="OnEnableZoomingChange" checked="@IsZoomingEnabled" />
        </div>
    </div>

    <div class="container vertical">

        <IgbDataChart @ref="Chart" Height="100%" Width="100%"
                   Subtitle="Stock Prices Series in Candlestick Display Type"
                   SubtitleTopMargin="10"
                   IsHorizontalZoomEnabled="@IsZoomingEnabled"
                   IsVerticalZoomEnabled="@IsZoomingEnabled"
                   PanModifier="@PanModifier"
                   DragModifier="@DragModifier"
                   DefaultInteraction="@DefaultInteraction">

            <IgbCategoryXAxis Name="xAxis" Label="Label" DataSource="Data" />
            <IgbNumericYAxis Name="yAxis" Title="Amount (in USD)" TitleRightMargin="10"
                    LabelRightMargin="10"
                    LabelHorizontalAlignment="HorizontalAlignment.Left"
                    LabelLocation="AxisLabelsLocation.OutsideRight" />

            <IgbFinancialPriceSeries XAxisName="xAxis"
                    YAxisName="yAxis"
                    DataSource="Data"
                    DisplayType="PriceDisplayType.Candlestick"
                    OpenMemberPath="Open"
                    CloseMemberPath="Close"
                    HighMemberPath="High"
                    LowMemberPath="Low"
                    VolumeMemberPath="Volume"
                    ShowDefaultTooltip="true"
                    IsTransitionInEnabled="true"
                    Title="Price" />
        </IgbDataChart>

    </div>
</div>

@code {
    private List<SampleFinancialItem> Data;
    private bool IsZoomingEnabled = true;
    private ModifierKeys PanModifier = ModifierKeys.Alt;
    private ModifierKeys DragModifier = ModifierKeys.Shift;
    private InteractionState DefaultInteraction = InteractionState.DragPan;

    private IgbDataChart _chart;
    public IgbDataChart Chart
    {
        get { return _chart; }
        set {
            _chart = value;
            this.Chart.ActualWindowScaleHorizontal = 0.60;
            this.Chart.ActualWindowScaleVertical = 0.60;
            this.Chart.ActualWindowPositionVertical = 0.20;
            this.Chart.ActualWindowPositionHorizontal = 0.20;
            StateHasChanged();
        }
    }

    protected override void OnInitialized()
    {
        Data = SampleFinancialData.Create();
    }

    private void OnPanUp()
    {
        this.Chart.ActualWindowPositionVertical -= 0.05;
    }

    private void OnPanDown()
    {
        this.Chart.ActualWindowPositionVertical += 0.05;
    }

    private void OnPanLeft()
    {
        this.Chart.ActualWindowPositionHorizontal -= 0.05;
    }

    private void OnPanRight()
    {
        this.Chart.ActualWindowPositionHorizontal += 0.05;
    }

    private void OnZoomIn()
    {
        if (this.Chart.ActualWindowPositionHorizontal < 1.0)
            this.Chart.ActualWindowPositionHorizontal += 0.025;

        if (this.Chart.ActualWindowPositionVertical < 1.0)
            this.Chart.ActualWindowPositionVertical += 0.025;

        if (this.Chart.ActualWindowScaleHorizontal > 0.05)
            this.Chart.ActualWindowScaleHorizontal -= 0.05;

        if (this.Chart.ActualWindowScaleVertical > 0.05)
            this.Chart.ActualWindowScaleVertical -= 0.05;

    }

    private void OnZoomOut()
    {
        if (this.Chart.ActualWindowPositionHorizontal > 0.025)
            this.Chart.ActualWindowPositionHorizontal -= 0.025;

        if (this.Chart.ActualWindowPositionVertical > 0.025)
            this.Chart.ActualWindowPositionVertical -= 0.025;

        if (this.Chart.ActualWindowScaleHorizontal < 1.0)
            this.Chart.ActualWindowScaleHorizontal += 0.05;

        if (this.Chart.ActualWindowScaleVertical < 1.0)
            this.Chart.ActualWindowScaleVertical += 0.05;

    }

    private void OnEnableZoomingChange(ChangeEventArgs args)
    {
        this.IsZoomingEnabled = (bool)args.Value;
    }
}
```


<div class="divider--half"></div>

Like this sample? Get access to our complete Blazor toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-blazor/download">Download it for free.</a>

## Chart Navigation with User Interactions

Whether or not zooming is on by default depends on the chart you are using. If you are using [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html), it is on by default, but it is not in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html). In order to enable or disable navigation in the UI, you need to set either the [`IsHorizontalZoomEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_IsHorizontalZoomEnabled) and/or the [`IsVerticalZoomEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_IsVerticalZoomEnabled) properties of the chart, depending on the direction that you wish to enable or disable zooming.

It is also possible to zoom or pan simply by clicking the mouse or using touch. The [`DefaultInteraction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_DefaultInteraction) property of the data chart determines what happens on mouse click or touch events. This property defaults to `DragZoom` and when set to this with zooming enabled, clicking and dragging will place a preview rectangle over the plot area that will become the zoomed area of the chart. This [`DefaultInteraction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_DefaultInteraction) property can also be set to either `DragPan` to allow panning or `None` to prevent these operations.

## Chart Navigation with Touch, Mouse and Keyboard

Navigation in the Blazor data chart can happen with either touch, the mouse or the keyboard. The following operations can be invoked using touch, mouse or keyboard operations by default:

- **Panning**: Using <kbd>🡐</kbd> <kbd>🡒</kbd> <kbd>🡑</kbd> <kbd>🡓</kbd> arrow keys on the keyboard or holding the <kbd>SHIFT</kbd> key, clicking and dragging with the mouse or pressing and moving your finger via touch.
- **Zoom In**: Using the <kbd>PAGE UP</kbd> key on the keyboard, rolling the mouse wheel up, or pinching to zoom in via touch.
- **Zoom Out**: Using the <kbd>PAGE DOWN</kbd> key on the keyboard, rolling the mouse wheel down, or pinching to zoom out via touch.
- **Fit to Chart Plot Area**: Using the <kbd>HOME</kbd> key on the keyboard. There is no mouse or touch operation for this.
- **Area Zoom**: Click and drag the mouse within the plot area with the [`DefaultInteraction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_DefaultInteraction) property set to its default - `DragZoom`.

The zoom and pan operations can also be enabled by using modifier keys by setting the [`DragModifier`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_DragModifier) and [`PanModifier`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_PanModifier) properties, respectively. These properties can be set to the following modifier keys, and when pressed, the corresponding operation will be executed:

| Modifier Value | Corresponding Key |
| ---------------|------------------ |
| `Shift`        | <kbd>SHIFT</kbd> |
| `Control`      | <kbd>CTRL</kbd> |
| `Windows`      | <kbd>WIN</kbd> |
| `Apple`        | <kbd>APPLE</kbd> |
| `None`         | no keys |

## Chart Navigation with Scrollbars

The chart can be scrolled by enabling the [`VerticalViewScrollbarMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_VerticalViewScrollbarMode) and [`HorizontalViewScrollbarMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_HorizontalViewScrollbarMode) properties.

These can be configured to the following options

- `Persistent` - The scrollbars always stay visible, as long as the chart is zoomed in, and fade away when fully zoomed out.
- `Fading` - The scrollbars disappear after use and reappear when the mouse is near their location.
- `FadeToLine` - The scrollbars are reduced to a thinner line when zooming is not in use.
- `None` - Default, no scrollbars are shown.

The following example demonstrates enabling scrollbars.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbFinancialChart
        Name="chart"
        @ref="chart"
        IsToolbarVisible="false"
        IsVerticalZoomEnabled="true"
        IsHorizontalZoomEnabled="true"
        DataSource="MultipleStocks"
        VerticalViewScrollbarMode="SeriesViewerScrollbarMode.Fading"
        HorizontalViewScrollbarMode="SeriesViewerScrollbarMode.Persistent"
        ZoomSliderType="FinancialChartZoomSliderType.None"
        WindowRect="@(new Rect(0, 0, 0.5, 1))">
        </IgbFinancialChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;

    }

    private IgbFinancialChart chart;

    private MultipleStocks _multipleStocks = null;
    public MultipleStocks MultipleStocks
    {
        get
        {
            if (_multipleStocks == null)
            {
                MultipleStocks.Fetch().ContinueWith((t) => {_multipleStocks = t.Result;  StateHasChanged(); });
            }
            return _multipleStocks;
        }
    }

}
```
```csharp
//begin async data
    using System;
    using System.Collections.Generic;
    using System.Text.Json;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Net.Http;
    using System.Collections.ObjectModel;
    using IgniteUI.Blazor.Controls;

    public class MultipleStocks : List<TitledStockData>
    {
        public async static Task<MultipleStocks> Fetch()
        {
            var google = await MultipleStocks.GetGoogleStock();
            var amazon = await MultipleStocks.GetAmazonStock();

            var val = new MultipleStocks();
            val.Add(google);
            val.Add(amazon);
            return val;
        }

        /** gets Amazon stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetAmazonStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Amazon";
            return stockData;
        }

        /** gets Tesla stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetTeslaStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Tesla";
            return stockData;
        }

        /** gets Microsoft stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetMicrosoftStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Microsoft";
            return stockData;
        }

        /** gets Google stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetGoogleStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Google";
            return stockData;
        }

        private async static Task<Dictionary<string, object>[]> Fetch(string url)
        {
            HttpClient client = new HttpClient();
            var str = await client.GetStringAsync(url);
            var arr = JsonSerializer.Deserialize<Dictionary<string, object>[]>(str);
            return arr;
        }

        public static TitledStockData ConvertData(Dictionary<string, object>[] arr)
        {
            var ret = new TitledStockData();

            foreach (var json in arr)
            {
                var date = ((JsonElement)json["date"]).GetString();
                var parts = date.Split('-'); // "2020-01-01"
                var item = new MultipleStocksItem();
                item.Date = new DateTime(int.Parse(parts[0]), int.Parse(parts[1]) + 1, int.Parse(parts[2]),12,0,0);
                item.Open = ((JsonElement)json["open"]).GetDouble();
                item.High = ((JsonElement)json["high"]).GetDouble();
                item.Low = ((JsonElement)json["low"]).GetDouble();
                item.Close = ((JsonElement)json["close"]).GetDouble();
                item.Volume = ((JsonElement)json["volume"]).GetDouble();
                ret.Add(item);
            }

            return ret;
        }
    }

    public class MultipleStocksItem
    {
        [DataSeriesMemberIntent(DataSeriesIntent.SeriesTitle)]
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public double Open { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Close { get; set; }
        public double Volume { get; set; }
    }

    public class TitledStockData
        : ObservableCollection<MultipleStocksItem>
    {

    }
    //end async data
```


<div class="divider--half"></div>

## Chart Navigation through Code

> [!Note]
> Code navigation of the chart can only be used for the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control.

The Blazor data chart provides several navigation properties that are updated each time a zoom or pan operation happens in the chart. You can also set each of these properties to zoom or pan the data chart programmatically. The following is a list of these properties:

- [`WindowPositionHorizontal`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowPositionHorizontal): A numeric value describing the X portion of the content view rectangle displayed by the data chart.
- [`WindowPositionVertical`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowPositionVertical): A numeric value describing the Y portion of the content view rectangle displayed by the data chart.
- [`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect): A `Rect` object representing a rectangle that represents the portion of the chart that is currently in view. For example, a [`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect) of "0, 0, 1, 1" would be the entirety of the data chart.
- [`WindowScaleHorizontal`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_WindowScaleHorizontal): A numeric value describing the width portion of the content view rectangle displayed by the data chart.
- [`WindowScaleVertical`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_WindowScaleVertical): A numeric value describing the height portion of the content view rectangle displayed by the data chart.

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Tooltips](chart-tooltips.md)
- [Chart Trendlines](chart-trendlines.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`DefaultInteraction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_DefaultInteraction)
- [`DragModifier`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_DragModifier)
- [`IsHorizontalZoomEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_IsHorizontalZoomEnabled)
- [`IsVerticalZoomEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_IsVerticalZoomEnabled)
- [`PanModifier`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_PanModifier)
- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html)
