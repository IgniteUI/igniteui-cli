---
title: Blazor Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' Blazor Axis Layouts
_keywords: Blazor Axis, Layouts, Location, Position, Share, Multiple, Crossing, Infragistics
_license: commercial
mentionedTypes: [ "DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "Axis", "AxisLabelSettings", "ScatterSplineSeries", "TimeXAxis" ]
_tocName: Axis Layouts
_premium: true
---

# Blazor Axis Layouts

All Ignite UI for Blazor charts include options to configure many axis layout options such as location as well as having the ability to share axis between series or have multiple axes in the same chart. These features are demonstrated in the examples given below.

> [!Note]
> the following examples can be applied to [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) as well as [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) controls.

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The [`XAxisLabelLocation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelLocation) property of the Blazor charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the [`YAxisLabelLocation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelLocation) property to position y-axis on left side or right side of plot area.

The following example depicts the amount of renewable electricity produced since 2009, represented by a [Line Chart](../types/line-chart.md). There is a drop-down that lets you configure the [`YAxisLabelLocation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelLocation) so that you can visualize what the axes look like when the labels are placed on the left or right side on the inside or outside of the chart's plot area.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="false"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisLabelLocation"
            Name="YAxisLabelLocation"
            @ref="yAxisLabelLocation"
            Label="Y Axis - Label Location"
            PrimitiveValue="@("OutsideRight")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Renewable Electricity Generated
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Line"
        YAxisTitle="Labels Location"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        XAxisInterval="1"
        YAxisLabelLocation="YAxisLabelLocation.OutsideRight">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var yAxisLabelLocation = this.yAxisLabelLocation;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription yAxisLabelLocation;
    private IgbCategoryChart chart;

    private CountryRenewableElectricity _countryRenewableElectricity = null;
    public CountryRenewableElectricity CountryRenewableElectricity
    {
        get
        {
            if (_countryRenewableElectricity == null)
            {
                _countryRenewableElectricity = new CountryRenewableElectricity();
            }
            return _countryRenewableElectricity;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricity
    : List<CountryRenewableElectricityItem>
{
    public CountryRenewableElectricity()
    {
        this.Add(new CountryRenewableElectricityItem() { Year = @"2009", Europe = 34, China = 21, America = 19 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2010", Europe = 43, China = 26, America = 24 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2011", Europe = 66, China = 29, America = 28 });
        // ... 9 more items
    }
}
```


<!-- ## Axis Orientation Example

TODO add info/example of 4 charts with all possible combinations of XAxisInverted and YAxisInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use Blazor Data Chart to share axis, add multiple y-axis and/or x-axis in the same plot area, or even cross axes at specific values. The following examples show how to use these features of the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html).

### Axis Sharing Example

You can share and add multiple axes in the same plot area of the Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html). It a common scenario to use share [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) and add multiple [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

The following example depicts a stock price and trade volume chart with a [Stock Chart](../types/stock-chart.md) and a [Column Chart](../types/column-chart.md) plotted. In this case, the Y-Axis on the left is used by the [Column Chart](../types/column-chart.md) and the Y-Axis on the right is used by the [Stock Chart](../types/stock-chart.md), while the X-Axis is shared between the two.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbDataChart Height="100%" Width="100%"
                       Subtitle="Stock Prices and Trade Volume"
                       SubtitleTopMargin="10"
                       IsHorizontalZoomEnabled="true"
                       IsVerticalZoomEnabled="true">
                <IgbCategoryXAxis Name="xAxisShared" Label="Label" Gap="0.75" DataSource="Data" />
                <IgbNumericYAxis Name="yAxisRight" LabelLocation="AxisLabelsLocation.OutsideRight"
                                 MinimumValue="400"
                                 MaximumValue="700" Title="Stock Price ($)" />
                <IgbNumericYAxis Name="yAxisLeft" LabelLocation="AxisLabelsLocation.OutsideLeft"
                                 MinimumValue="5000"
                                 MaximumValue="45000" Title="Trade Volume"
                                 MajorStrokeThickness="0"
                                 AbbreviateLargeNumbers="true" />

                <IgbColumnSeries XAxisName="xAxisShared"
                                 YAxisName="yAxisLeft"
                                 DataSource="Data"
                                 ValueMemberPath="Volume"
                                 ShowDefaultTooltip="true"
                                 Title="Trade Volume" />

                <IgbFinancialPriceSeries XAxisName="xAxisShared"
                                         YAxisName="yAxisRight"
                                         DisplayType="PriceDisplayType.Candlestick"
                                         DataSource="Data"
                                         HighMemberPath="High" LowMemberPath="Low" CloseMemberPath="Close" OpenMemberPath="Open"
                                         VolumeMemberPath="Volume"
                                         ShowDefaultTooltip="true"
                                         Title="Stock Price" />
            </IgbDataChart>
        }

    </div>
</div>

@code {

    private List<SharedAxisFinancialItem> Data;

    protected override void OnInitialized()
    {
        this.Data = SharedAxisFinancialData.Create();
    }
}
```


<div class="divider--half"></div>

### Axis Crossing Example

In addition to placing axes outside plot area, the Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) also provides options to position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting [`CrossingAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_CrossingAxis) and [`CrossingValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_CrossingValue) properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at (0, 0) origin point.

The following example shows a Sin and Cos wave represented by a [Scatter Spline Chart](../types/scatter-chart.md) with the X and Y axes crossing each other at the (0, 0) origin point.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <label>X-Axis Crossing Value:  </label>
        <label class="options-value" >@XAxisCrossingValue</label>
        <input type="range" min="-360" max="360" step="10" value="0" @oninput="OnXAxisCrossingValueChanged" />
        <label>Y-Axis Crossing Value:  </label>
        <label class="options-value" >@YAxisCrossingValue</label>
        <input type="range" min="-1.25" max="1.25" step="0.125" value="0" @oninput="OnYAxisCrossingValueChanged" />
    </div>
    <div class="container vertical">
        @if (SinData != null && CosData != null)
        {
        <IgbDataChart Height="100%" Width="100%" IsVerticalZoomEnabled="true" IsHorizontalZoomEnabled="true"
                   PlotAreaMarginTop="60" PlotAreaMarginBottom="60"
                   PlotAreaMarginLeft="30" PlotAreaMarginRight="30">
            <IgbNumericXAxis Name="xAxis" Interval="40" MinimumValue="-360" MaximumValue="360"
                          LabelLocation="AxisLabelsLocation.InsideBottom"
                          LabelTopMargin="10"
                          CrossingAxisName="yAxis"
                          CrossingValue="@YAxisCrossingValue"
                          StrokeThickness="1" Stroke="black"/>
            <IgbNumericYAxis Name="yAxis" MinimumValue="-1.25" MaximumValue="1.25" Interval="0.25"
                          LabelLocation="AxisLabelsLocation.InsideLeft"
                          LabelRightMargin="10"
                          CrossingAxisName="xAxis"
                          CrossingValue="@XAxisCrossingValue"
                          StrokeThickness="1" Stroke="black"/>

            <IgbScatterSplineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="SinData"
                                 XMemberPath="X" YMemberPath="Y" MarkerType="MarkerType.Circle" />
            <IgbScatterSplineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="CosData"
                                 XMemberPath="X" YMemberPath="Y" MarkerType="MarkerType.Circle" />
        </IgbDataChart>
        }
    </div>
</div>

@code {

    private List<Point> SinData;
    private List<Point> CosData;

    private double YAxisCrossingValue = 0;
    private double XAxisCrossingValue = 0;

    protected override void OnInitialized()
    {
        List<Point> _sinData = new List<Point>();
        List<Point> _cosData = new List<Point>();

        for (int i = - 360; i <= 360; i += 10)
        {
            double radians = (i * Math.PI) / 180;
            double sin = Math.Sin(radians);
            double cos = Math.Cos(radians);

            _sinData.Add(new Point() { X = i, Y = sin });
            _cosData.Add(new Point() { X = i, Y = cos });
        }

        this.SinData = _sinData;
        this.CosData = _cosData;
    }

    private void OnXAxisCrossingValueChanged(ChangeEventArgs args)
    {
        this.XAxisCrossingValue = double.Parse(args.Value.ToString());
    }

    private void OnYAxisCrossingValueChanged(ChangeEventArgs args)
    {
        this.YAxisCrossingValue = double.Parse(args.Value.ToString());
    }
}
```


<div class="divider--half"></div>

### Axis Timeline Example

The following example demonstrates how to style the data chart using the [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) as a timeline:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbDataChart Height="100%" Width="100%"
        @ref="Chart"
        IsHorizontalZoomEnabled="false" IsVerticalZoomEnabled="false"
        ChartTitle="Brexit Timeline"
        Subtitle="Brexit: Key events in the process of the UK's exit from the EU"
        TitleTopMargin=50
        PlotAreaMarginLeft=100
        PlotAreaMarginRight=100>
    </IgbDataChart>
</div>

@code {
    private List<SampleTimelineItem> CategoryData;
    private IgbNumericYAxis NumericYAxis;
    private IgbTimeXAxis TimeXAxis;
    private IgbCalloutLayer CalloutLayer;
    private IgbLineSeries LineSeries1;

    private IgbDataChart _chart;
    private IgbDataChart Chart
    {
        get { return _chart; }
        set
        {
            _chart = value;
            this.OnChart();

            value.Axes.Add(this.TimeXAxis);
            value.Axes.Add(this.NumericYAxis);
            value.Series.Add(this.LineSeries1);
            value.Series.Add(this.CalloutLayer);
            StateHasChanged();
        }
    }

    private void OnChart()
    {
        this.CategoryData = SampleTimelineData.Create();
        this.InitAxes();
        this.InitCategorySeries();
    }

    public void InitCategorySeries()
    {
        this.LineSeries1 = new IgbLineSeries()
            {
                Brush = "Navy",
                DataSource = this.CategoryData,
                XAxisName = "TimeXAxis",
                YAxisName = "NumericYAxis",
                ValueMemberPath = "Y",
                Thickness = 15,
                MarkerThickness = 15,
                MarkerBrush = "#EC0D00",
                MarkerOutline = "#EC0D00",
                MarkerFillMode = MarkerFillMode.MatchMarkerOutline,
                ShowDefaultTooltip = false,
            };

        this.CalloutLayer = new IgbCalloutLayer()
            {
                TargetSeries = this.LineSeries1,
                DataSource = this.CategoryData,
                XMemberPath = "Date",
                YMemberPath = "Y",
                LabelMemberPath = "Year",
                IsAutoCalloutBehaviorEnabled = false,
                UseValueForAutoCalloutLabels = false,
                CalloutLeaderBrush = "#EC0D00",
                CalloutTextColor = "Navy",
                CalloutOutline = "#EC0D00",
                CalloutBackground = "Transparent",
                IsCalloutOffsettingEnabled = false,
                TextStyle = "font-size: 25px",
                CalloutPositionPadding = 50,
                CalloutCollisionMode = CalloutCollisionMode.Greedy,
                ShowDefaultTooltip = false,
        };

        this.CalloutLayer.AllowedPositions.Add(CalloutPlacementPositions.Top);
        this.CalloutLayer.AllowedPositions.Add(CalloutPlacementPositions.TopLeft);
        this.CalloutLayer.AllowedPositions.Add(CalloutPlacementPositions.TopRight);
        this.CalloutLayer.AllowedPositions.Add(CalloutPlacementPositions.Bottom);
        this.CalloutLayer.AllowedPositions.Add(CalloutPlacementPositions.BottomLeft);
        this.CalloutLayer.AllowedPositions.Add(CalloutPlacementPositions.BottomRight);
    }

    public void InitAxes()
    {
        this.NumericYAxis = new IgbNumericYAxis() { Name = "NumericYAxis", Title = "Numeric Y Axis", MinimumValue=0, MaximumValue=10, LabelVisibility = Visibility.Collapsed, MajorStrokeThickness=0.0 };
        this.TimeXAxis = new IgbTimeXAxis() { Name = "TimeXAxis", Title = "Time X Axis", DataSource = this.CategoryData, DateTimeMemberPath = "Date", LabelVisibility = Visibility.Collapsed };
    }

}
```


## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:
d in the above sections:

| [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)                                         | [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)                 |
| ------------------------------------------------------ | ------------------------------- |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`CrossingAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_CrossingAxis)             | None                            |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`CrossingValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_CrossingValue)            | None                            |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`IsInverted`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_IsInverted)               | [`XAxisInverted`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisInverted)                 |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`IsInverted`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_IsInverted)               | [`YAxisInverted`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisInverted)                 |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ `LabelLocation`            | [`YAxisLabelLocation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelLocation)            |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ `LabelLocation`            | [`XAxisLabelLocation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelLocation)            |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ `LabelHorizontalAlignment` | [`YAxisLabelHorizontalAlignment`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelHorizontalAlignment) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ `LabelVerticalAlignment`   | [`XAxisLabelVerticalAlignment`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelVerticalAlignment)   |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ `LabelVisibility`          | [`YAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelVisibility)          |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ `LabelVisibility`          | [`XAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelVisibility)          |

<!-- TODO correct links in Transformer -->

<!--
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.location`            | `YAxisLabelLocation`            |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.location`            | `XAxisLabelLocation`            |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.horizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.verticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.visibility`          | `YAxisLabelVisibility`          |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.visibility`          | `XAxisLabelVisibility`          | -->
