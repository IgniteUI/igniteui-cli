---
title: Blazor Chart Data Annotations | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Data Annotations
_keywords: Blazor Charts, Data Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Annotations
_premium: true
---

# Blazor Chart Data Annotations <label class="badge badge--preview">PREVIEW</label>

In the Blazor chart, the data annotation layers allow you to annotate data plotted in Data Chart with sloped lines, vertical/horizontal lines (aka axis slices), vertical/horizontal strips (targeting specific axis), rectangles, and even parallelograms (aka bands). With data-binding supported, you can create as many annotations as you want to customize your charts. Also, you can combine different annotation layers and you can overlay text inside of plot area to annotated important events, patterns, and regions in your data.

> \[!Note]
> These features are designed to support cartesian axes and does not currently support radius or angle axes.

For example, you can annotates stock prices with stock events and patterns.

```csharp
using System;
using System.Collections.Generic;
public class AnnotationLineData1Item
{
    public double StartX { get; set; }
    public double StartY { get; set; }
    public double EndX { get; set; }
    public double EndY { get; set; }
    public string Label { get; set; }
}

public class AnnotationLineData1
    : List<AnnotationLineData1Item>
{
    public AnnotationLineData1()
    {
        this.Add(new AnnotationLineData1Item() { StartX = 190, StartY = 138, EndX = 230, EndY = 138, Label = @"52-Week Low" });
        this.Add(new AnnotationLineData1Item() { StartX = 190, StartY = 481, EndX = 230, EndY = 481, Label = @"52-Week High" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationLineData2Item
{
    public double StartX { get; set; }
    public double StartY { get; set; }
    public double EndX { get; set; }
    public double EndY { get; set; }
    public string Label { get; set; }
}

public class AnnotationLineData2
    : List<AnnotationLineData2Item>
{
    public AnnotationLineData2()
    {
        this.Add(new AnnotationLineData2Item() { StartX = 48, StartY = 25, EndX = 105, EndY = 250, Label = @"Growth &
Support" });
        this.Add(new AnnotationLineData2Item() { StartX = 108, StartY = 440, EndX = 155, EndY = 210, Label = @"Decline &
Resistance" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationSliceEarningsBeatDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class AnnotationSliceEarningsBeatData
    : List<AnnotationSliceEarningsBeatDataItem>
{
    public AnnotationSliceEarningsBeatData()
    {
        this.Add(new AnnotationSliceEarningsBeatDataItem() { Value = 155, Label = @"Earnings Beat" });
        this.Add(new AnnotationSliceEarningsBeatDataItem() { Value = 86, Label = @"Earnings Beat" });
        this.Add(new AnnotationSliceEarningsBeatDataItem() { Value = 28, Label = @"Earnings Beat" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationSliceEarningsMissDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class AnnotationSliceEarningsMissData
    : List<AnnotationSliceEarningsMissDataItem>
{
    public AnnotationSliceEarningsMissData()
    {
        this.Add(new AnnotationSliceEarningsMissDataItem() { Value = 9, Label = @"Earnings Miss" });
        this.Add(new AnnotationSliceEarningsMissDataItem() { Value = 179, Label = @"Earnings Miss" });
        this.Add(new AnnotationSliceEarningsMissDataItem() { Value = 215, Label = @"Earnings Miss" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationSliceStockSplitDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class AnnotationSliceStockSplitData
    : List<AnnotationSliceStockSplitDataItem>
{
    public AnnotationSliceStockSplitData()
    {
        this.Add(new AnnotationSliceStockSplitDataItem() { Value = 126, Label = @"Stock Split 3-1" });
        this.Add(new AnnotationSliceStockSplitDataItem() { Value = 61, Label = @"Stock Split 5-1" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationStripDataItem
{
    public double Start { get; set; }
    public double End { get; set; }
    public string Label { get; set; }
}

public class AnnotationStripData
    : List<AnnotationStripDataItem>
{
    public AnnotationStripData()
    {
        this.Add(new AnnotationStripDataItem() { Start = 40, End = 45, Label = @"Covid - Market Crash" });
        this.Add(new AnnotationStripDataItem() { Start = 100, End = 144, Label = @"Fed Rate Up  0.25 - 5.25%" });
        this.Add(new AnnotationStripDataItem() { Start = 190, End = 205, Label = @"Fed Rate Down 5.25% to 4.45%" });
    }
}
```
```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsVerticalZoomEnabled="false"
        IsHorizontalZoomEnabled="true"
        Brushes="green red"
        Outlines="green red"
        PlotAreaMarginLeft="10"
        PlotAreaMarginTop="0"
        PlotAreaMarginRight="20"
        PlotAreaMarginBottom="0"
        LeftMargin="10"
        TopMargin="0"
        RightMargin="20"
        BottomMargin="0"
        IsWindowSyncedToVisibleRange="false"
        ChartTitle="This Data Chart has multiple Data Annotation Layers bound to data that annotates important events and patterns in stock prices.">
            <IgbCategoryXAxis
            Name="xAxisBottom"
            @ref="xAxisBottom"
            DataSource="StockTesla"
            Label="Index"
            TickLength="0"
            LabelLocation="AxisLabelsLocation.OutsideBottom"
            LabelTextColor="#00000000"
            LabelFontSize="12"
            LabelExtent="140"
            LabelLeftMargin="0"
            LabelTopMargin="15"
            LabelRightMargin="0"
            LabelBottomMargin="15"
            LabelAngle="90">
            </IgbCategoryXAxis>

            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="StockTesla"
            Label="Date"
            LabelLeftMargin="0"
            LabelTopMargin="5"
            LabelRightMargin="0"
            LabelBottomMargin="5">
            </IgbCategoryXAxis>

            <IgbCategoryXAxis
            Name="xAxisTop"
            @ref="xAxisTop"
            DataSource="StockTesla"
            Label="Date"
            TickLength="0"
            LabelLocation="AxisLabelsLocation.OutsideTop"
            LabelFontSize="12"
            LabelExtent="40"
            LabelTextColor="#00000000"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxisLeft"
            @ref="yAxisLeft"
            LabelLocation="AxisLabelsLocation.OutsideLeft"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Right"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbNumericYAxis
            Name="yAxisRight"
            @ref="yAxisRight"
            LabelLocation="AxisLabelsLocation.OutsideRight"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Left"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbFinancialPriceSeries
            Name="series1"
            @ref="series1"
            Title="Stock Price"
            DisplayType="PriceDisplayType.Candlestick"
            XAxisName="xAxis"
            YAxisName="yAxisLeft"
            DataSource="StockTesla"
            OpenMemberPath="Open"
            HighMemberPath="High"
            LowMemberPath="Low"
            CloseMemberPath="Close"
            ShowDefaultTooltip="false">
            </IgbFinancialPriceSeries>

            <IgbDataToolTipLayer
            Name="Tooltip"
            @ref="tooltip"
            IncludedColumns="@(new string[] { "High", "Low", "Open", "Close" })"
            LayoutMode="DataLegendLayoutMode.Vertical">
            </IgbDataToolTipLayer>

            <IgbDataAnnotationStripLayer
            Name="StripLayer"
            @ref="stripLayer"
            DataSource="AnnotationStripData"
            TargetAxisName="xAxisTop"
            CenterLabelMemberPath="Label"
            StartValueMemberPath="Start"
            EndValueMemberPath="End"
            EndLabelDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelDisplayMode="DataAnnotationDisplayMode.Hidden"
            Brush="black"
            Outline="black"
            OverlayTextColor="purple"
            OverlayTextLocation="OverlayTextLocation.Hidden"
            OverlayTextMemberPath="Label">
            </IgbDataAnnotationStripLayer>

            <IgbDataAnnotationLineLayer
            Name="LineLayer52WeekRange"
            @ref="lineLayer52WeekRange"
            DataSource="AnnotationLineData1"
            TargetAxisName="yAxisRight"
            CenterLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelYDisplayMode="DataAnnotationDisplayMode.DataValue"
            EndLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            EndLabelYDisplayMode="DataAnnotationDisplayMode.DataValue"
            Brush="purple"
            Outline="purple"
            OverlayTextColor="purple"
            OverlayTextVerticalMargin="5"
            OverlayTextHorizontalMargin="5"
            OverlayTextLocation="OverlayTextLocation.OutsideBottomLeft"
            OverlayTextMemberPath="Label"
            StartLabelXMemberPath="StartLabel"
            EndLabelXMemberPath="EndLabel"
            StartValueXMemberPath="StartX"
            StartValueYMemberPath="StartY"
            EndValueXMemberPath="EndX"
            EndValueYMemberPath="EndY">
            </IgbDataAnnotationLineLayer>

            <IgbDataAnnotationLineLayer
            Name="LineLayerGrowthAndDecline"
            @ref="lineLayerGrowthAndDecline"
            DataSource="AnnotationLineData2"
            TargetAxisName="xAxis"
            CenterLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            EndLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            AnnotationBackgroundMode="AnnotationAppearanceMode.BrightnessShift"
            Brush="purple"
            Outline="purple"
            OverlayTextColor="purple"
            OverlayTextVerticalMargin="-10"
            OverlayTextHorizontalMargin="70"
            OverlayTextMemberPath="Label"
            StartLabelXMemberPath="StartLabel"
            EndLabelXMemberPath="EndLabel"
            StartValueXMemberPath="StartX"
            StartValueYMemberPath="StartY"
            EndValueXMemberPath="EndX"
            EndValueYMemberPath="EndY">
            </IgbDataAnnotationLineLayer>

            <IgbDataAnnotationSliceLayer
            Name="SliceLayerStockSplit"
            @ref="sliceLayerStockSplit"
            DataSource="AnnotationSliceStockSplitData"
            TargetAxisName="xAxisBottom"
            Brush="dodgerblue"
            AnnotationTextColor="white"
            AnnotationLabelMemberPath="Label"
            AnnotationValueMemberPath="Value"
            OverlayTextMemberPath="Label"
            OverlayTextAngle="90"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.Hidden">
            </IgbDataAnnotationSliceLayer>

            <IgbDataAnnotationSliceLayer
            Name="SliceLayerEarningsMissAnnotations"
            @ref="sliceLayerEarningsMissAnnotations"
            DataSource="AnnotationSliceEarningsMissData"
            TargetAxisName="xAxisBottom"
            Brush="red"
            AnnotationTextColor="white"
            AnnotationLabelMemberPath="Label"
            AnnotationValueMemberPath="Value"
            OverlayTextMemberPath="Label"
            OverlayTextAngle="90"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.Hidden">
            </IgbDataAnnotationSliceLayer>

            <IgbDataAnnotationSliceLayer
            Name="SliceLayerEarningsBeatAnnotations"
            @ref="sliceLayerEarningsBeatAnnotations"
            DataSource="AnnotationSliceEarningsBeatData"
            TargetAxisName="xAxisBottom"
            Brush="green"
            AnnotationTextColor="white"
            AnnotationLabelMemberPath="Label"
            AnnotationValueMemberPath="Value"
            OverlayTextMemberPath="Label"
            OverlayTextAngle="90"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.Hidden">
            </IgbDataAnnotationSliceLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxisBottom = this.xAxisBottom;
        var xAxis = this.xAxis;
        var xAxisTop = this.xAxisTop;
        var yAxisLeft = this.yAxisLeft;
        var yAxisRight = this.yAxisRight;
        var series1 = this.series1;
        var tooltip = this.tooltip;
        var stripLayer = this.stripLayer;
        var lineLayer52WeekRange = this.lineLayer52WeekRange;
        var lineLayerGrowthAndDecline = this.lineLayerGrowthAndDecline;
        var sliceLayerStockSplit = this.sliceLayerStockSplit;
        var sliceLayerEarningsMissAnnotations = this.sliceLayerEarningsMissAnnotations;
        var sliceLayerEarningsBeatAnnotations = this.sliceLayerEarningsBeatAnnotations;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxisBottom;
    private IgbCategoryXAxis xAxis;
    private IgbCategoryXAxis xAxisTop;
    private IgbNumericYAxis yAxisLeft;
    private IgbNumericYAxis yAxisRight;
    private IgbFinancialPriceSeries series1;
    private IgbDataToolTipLayer tooltip;
    private IgbDataAnnotationStripLayer stripLayer;
    private IgbDataAnnotationLineLayer lineLayer52WeekRange;
    private IgbDataAnnotationLineLayer lineLayerGrowthAndDecline;
    private IgbDataAnnotationSliceLayer sliceLayerStockSplit;
    private IgbDataAnnotationSliceLayer sliceLayerEarningsMissAnnotations;
    private IgbDataAnnotationSliceLayer sliceLayerEarningsBeatAnnotations;

    private StockTesla _stockTesla = null;
    public StockTesla StockTesla
    {
        get
        {
            if (_stockTesla == null)
            {
                _stockTesla = new StockTesla();
            }
            return _stockTesla;
        }
    }

    private AnnotationStripData _annotationStripData = null;
    public AnnotationStripData AnnotationStripData
    {
        get
        {
            if (_annotationStripData == null)
            {
                _annotationStripData = new AnnotationStripData();
            }
            return _annotationStripData;
        }
    }

    private AnnotationLineData1 _annotationLineData1 = null;
    public AnnotationLineData1 AnnotationLineData1
    {
        get
        {
            if (_annotationLineData1 == null)
            {
                _annotationLineData1 = new AnnotationLineData1();
            }
            return _annotationLineData1;
        }
    }

    private AnnotationLineData2 _annotationLineData2 = null;
    public AnnotationLineData2 AnnotationLineData2
    {
        get
        {
            if (_annotationLineData2 == null)
            {
                _annotationLineData2 = new AnnotationLineData2();
            }
            return _annotationLineData2;
        }
    }

    private AnnotationSliceStockSplitData _annotationSliceStockSplitData = null;
    public AnnotationSliceStockSplitData AnnotationSliceStockSplitData
    {
        get
        {
            if (_annotationSliceStockSplitData == null)
            {
                _annotationSliceStockSplitData = new AnnotationSliceStockSplitData();
            }
            return _annotationSliceStockSplitData;
        }
    }

    private AnnotationSliceEarningsMissData _annotationSliceEarningsMissData = null;
    public AnnotationSliceEarningsMissData AnnotationSliceEarningsMissData
    {
        get
        {
            if (_annotationSliceEarningsMissData == null)
            {
                _annotationSliceEarningsMissData = new AnnotationSliceEarningsMissData();
            }
            return _annotationSliceEarningsMissData;
        }
    }

    private AnnotationSliceEarningsBeatData _annotationSliceEarningsBeatData = null;
    public AnnotationSliceEarningsBeatData AnnotationSliceEarningsBeatData
    {
        get
        {
            if (_annotationSliceEarningsBeatData == null)
            {
                _annotationSliceEarningsBeatData = new AnnotationSliceEarningsBeatData();
            }
            return _annotationSliceEarningsBeatData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class StockTeslaItem
{
    public string Date { get; set; }
    public double Open { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double Close { get; set; }
    public double Volume { get; set; }
    public double Change { get; set; }
    public double Index { get; set; }
}

public class StockTesla
    : List<StockTeslaItem>
{
    public StockTesla()
    {
        this.Add(new StockTeslaItem() { Date = @"2019-01-10", Open = 20.4, High = 23, Low = 19.8, Close = 23, Volume = 779333701, Change = 12.7, Index = 0 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-22", Open = 22.8, High = 23.5, Low = 19.7, Close = 19.9, Volume = 911781100, Change = -12.6, Index = 1 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-31", Open = 19.5, High = 20.8, Low = 18.6, Close = 20.5, Volume = 926375717, Change = 5, Index = 2 });
        // ... 224 more items
    }
}
```


Like this sample? Get access to our complete Blazor toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-blazor/download">Download it for free.</a>

## Blazor Data Annotation Slice Layer Example

In Blazor, the link:{DataChartLink}.DataAnnotationSliceLayer.html\[DataAnnotationSliceLayer] renders multiple vertical or horizontal lines that slice the chart at multiple values of an axis in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component. This data annotation layer is often used to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal slices or setting TargetAxis property to x-axis will render data annotation layer as vertical slices. Similarly to all series, the DataAnnotationSliceLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the `AnnotationValueMemberPath` property.

For example, you can use DataAnnotationSliceLayer to annotate stock prices with important events such as stock split and outcome of earning reports.

```csharp
using System;
using System.Collections.Generic;
public class AnnotationSliceEarningsBeatDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class AnnotationSliceEarningsBeatData
    : List<AnnotationSliceEarningsBeatDataItem>
{
    public AnnotationSliceEarningsBeatData()
    {
        this.Add(new AnnotationSliceEarningsBeatDataItem() { Value = 155, Label = @"Earnings Beat" });
        this.Add(new AnnotationSliceEarningsBeatDataItem() { Value = 86, Label = @"Earnings Beat" });
        this.Add(new AnnotationSliceEarningsBeatDataItem() { Value = 28, Label = @"Earnings Beat" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationSliceEarningsMissDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class AnnotationSliceEarningsMissData
    : List<AnnotationSliceEarningsMissDataItem>
{
    public AnnotationSliceEarningsMissData()
    {
        this.Add(new AnnotationSliceEarningsMissDataItem() { Value = 9, Label = @"Earnings Miss" });
        this.Add(new AnnotationSliceEarningsMissDataItem() { Value = 179, Label = @"Earnings Miss" });
        this.Add(new AnnotationSliceEarningsMissDataItem() { Value = 215, Label = @"Earnings Miss" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationSliceStockSplitDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class AnnotationSliceStockSplitData
    : List<AnnotationSliceStockSplitDataItem>
{
    public AnnotationSliceStockSplitData()
    {
        this.Add(new AnnotationSliceStockSplitDataItem() { Value = 126, Label = @"Stock Split 3-1" });
        this.Add(new AnnotationSliceStockSplitDataItem() { Value = 61, Label = @"Stock Split 5-1" });
    }
}
```
```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsVerticalZoomEnabled="false"
        IsHorizontalZoomEnabled="true"
        Brushes="green red"
        Outlines="green red"
        PlotAreaMarginLeft="10"
        PlotAreaMarginTop="0"
        PlotAreaMarginRight="20"
        PlotAreaMarginBottom="0"
        LeftMargin="10"
        TopMargin="0"
        RightMargin="20"
        BottomMargin="0"
        IsWindowSyncedToVisibleRange="false"
        ChartTitle="This Data Chart demonstrates the DataAnnotationSliceLayer bound to data that annotates stock splits and earnings miss/beat events.">
            <IgbCategoryXAxis
            Name="xAxisBottom"
            @ref="xAxisBottom"
            DataSource="StockTesla"
            Label="Index"
            TickLength="0"
            LabelLocation="AxisLabelsLocation.OutsideBottom"
            LabelTextColor="#00000000"
            LabelFontSize="12"
            LabelExtent="140"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            LabelAngle="90">
            </IgbCategoryXAxis>

            <IgbCategoryXAxis
            Name="xAxisTop"
            @ref="xAxisTop"
            DataSource="StockTesla"
            Label="Date"
            LabelLocation="AxisLabelsLocation.OutsideBottom">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxisLeft"
            @ref="yAxisLeft"
            LabelLocation="AxisLabelsLocation.OutsideLeft"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Right"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbNumericYAxis
            Name="yAxisRight"
            @ref="yAxisRight"
            LabelLocation="AxisLabelsLocation.OutsideRight"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Left"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbFinancialPriceSeries
            Name="series1"
            @ref="series1"
            Title="Stock Price"
            DisplayType="PriceDisplayType.Candlestick"
            XAxisName="xAxisTop"
            YAxisName="yAxisLeft"
            DataSource="StockTesla"
            OpenMemberPath="Open"
            HighMemberPath="High"
            LowMemberPath="Low"
            CloseMemberPath="Close"
            ShowDefaultTooltip="false">
            </IgbFinancialPriceSeries>

            <IgbDataToolTipLayer
            Name="Tooltip"
            @ref="tooltip"
            IncludedColumns="@(new string[] { "High", "Low", "Open", "Close" })"
            LayoutMode="DataLegendLayoutMode.Vertical">
            </IgbDataToolTipLayer>

            <IgbDataAnnotationSliceLayer
            Name="SliceLayerStockSplit"
            @ref="sliceLayerStockSplit"
            DataSource="AnnotationSliceStockSplitData"
            TargetAxisName="xAxisBottom"
            Brush="dodgerblue"
            AnnotationTextColor="white"
            AnnotationLabelMemberPath="Label"
            AnnotationValueMemberPath="Value"
            OverlayTextMemberPath="Label"
            OverlayTextAngle="90"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.Hidden">
            </IgbDataAnnotationSliceLayer>

            <IgbDataAnnotationSliceLayer
            Name="SliceLayerEarningsMissAnnotations"
            @ref="sliceLayerEarningsMissAnnotations"
            DataSource="AnnotationSliceEarningsMissData"
            TargetAxisName="xAxisBottom"
            Brush="red"
            AnnotationTextColor="white"
            AnnotationLabelMemberPath="Label"
            AnnotationValueMemberPath="Value"
            OverlayTextMemberPath="Label"
            OverlayTextAngle="90"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.Hidden">
            </IgbDataAnnotationSliceLayer>

            <IgbDataAnnotationSliceLayer
            Name="SliceLayerEarningsBeatAnnotations"
            @ref="sliceLayerEarningsBeatAnnotations"
            DataSource="AnnotationSliceEarningsBeatData"
            TargetAxisName="xAxisBottom"
            Brush="green"
            AnnotationTextColor="white"
            AnnotationLabelMemberPath="Label"
            AnnotationValueMemberPath="Value"
            OverlayTextMemberPath="Label"
            OverlayTextAngle="90"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.Hidden">
            </IgbDataAnnotationSliceLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxisBottom = this.xAxisBottom;
        var xAxisTop = this.xAxisTop;
        var yAxisLeft = this.yAxisLeft;
        var yAxisRight = this.yAxisRight;
        var series1 = this.series1;
        var tooltip = this.tooltip;
        var sliceLayerStockSplit = this.sliceLayerStockSplit;
        var sliceLayerEarningsMissAnnotations = this.sliceLayerEarningsMissAnnotations;
        var sliceLayerEarningsBeatAnnotations = this.sliceLayerEarningsBeatAnnotations;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxisBottom;
    private IgbCategoryXAxis xAxisTop;
    private IgbNumericYAxis yAxisLeft;
    private IgbNumericYAxis yAxisRight;
    private IgbFinancialPriceSeries series1;
    private IgbDataToolTipLayer tooltip;
    private IgbDataAnnotationSliceLayer sliceLayerStockSplit;
    private IgbDataAnnotationSliceLayer sliceLayerEarningsMissAnnotations;
    private IgbDataAnnotationSliceLayer sliceLayerEarningsBeatAnnotations;

    private StockTesla _stockTesla = null;
    public StockTesla StockTesla
    {
        get
        {
            if (_stockTesla == null)
            {
                _stockTesla = new StockTesla();
            }
            return _stockTesla;
        }
    }

    private AnnotationSliceStockSplitData _annotationSliceStockSplitData = null;
    public AnnotationSliceStockSplitData AnnotationSliceStockSplitData
    {
        get
        {
            if (_annotationSliceStockSplitData == null)
            {
                _annotationSliceStockSplitData = new AnnotationSliceStockSplitData();
            }
            return _annotationSliceStockSplitData;
        }
    }

    private AnnotationSliceEarningsMissData _annotationSliceEarningsMissData = null;
    public AnnotationSliceEarningsMissData AnnotationSliceEarningsMissData
    {
        get
        {
            if (_annotationSliceEarningsMissData == null)
            {
                _annotationSliceEarningsMissData = new AnnotationSliceEarningsMissData();
            }
            return _annotationSliceEarningsMissData;
        }
    }

    private AnnotationSliceEarningsBeatData _annotationSliceEarningsBeatData = null;
    public AnnotationSliceEarningsBeatData AnnotationSliceEarningsBeatData
    {
        get
        {
            if (_annotationSliceEarningsBeatData == null)
            {
                _annotationSliceEarningsBeatData = new AnnotationSliceEarningsBeatData();
            }
            return _annotationSliceEarningsBeatData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class StockTeslaItem
{
    public string Date { get; set; }
    public double Open { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double Close { get; set; }
    public double Volume { get; set; }
    public double Change { get; set; }
    public double Index { get; set; }
}

public class StockTesla
    : List<StockTeslaItem>
{
    public StockTesla()
    {
        this.Add(new StockTeslaItem() { Date = @"2019-01-10", Open = 20.4, High = 23, Low = 19.8, Close = 23, Volume = 779333701, Change = 12.7, Index = 0 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-22", Open = 22.8, High = 23.5, Low = 19.7, Close = 19.9, Volume = 911781100, Change = -12.6, Index = 1 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-31", Open = 19.5, High = 20.8, Low = 18.6, Close = 20.5, Volume = 926375717, Change = 5, Index = 2 });
        // ... 224 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Data Annotation Strip Layer Example

In Blazor, the [`IgbDataAnnotationStripLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationStripLayer.html) renders multiple vertical or horizontal strips between 2 values on an axis in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component. This data annotation layer can be used to annotate duration of events (e.g. stock market crash) on x-axis or important range of values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal strips or setting TargetAxis property to x-axis will render data annotation layer as vertical strips. Similarly to all series, the [`IgbDataAnnotationStripLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationStripLayer.html) also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the AnnotationValueMemberPath property.

For example, you can use [`IgbDataAnnotationStripLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationStripLayer.html) to annotate chart with stock market crashes and changes in federal interest rates.

```csharp
using System;
using System.Collections.Generic;
public class AnnotationStripDataItem
{
    public double Start { get; set; }
    public double End { get; set; }
    public string Label { get; set; }
}

public class AnnotationStripData
    : List<AnnotationStripDataItem>
{
    public AnnotationStripData()
    {
        this.Add(new AnnotationStripDataItem() { Start = 40, End = 45, Label = @"Covid - Market Crash" });
        this.Add(new AnnotationStripDataItem() { Start = 100, End = 144, Label = @"Fed Rate Up  0.25 - 5.25%" });
        this.Add(new AnnotationStripDataItem() { Start = 190, End = 205, Label = @"Fed Rate Down 5.25% to 4.45%" });
    }
}
```
```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsVerticalZoomEnabled="false"
        IsHorizontalZoomEnabled="true"
        Brushes="green red"
        Outlines="green red"
        PlotAreaMarginLeft="10"
        PlotAreaMarginTop="0"
        PlotAreaMarginRight="20"
        PlotAreaMarginBottom="0"
        LeftMargin="10"
        TopMargin="0"
        RightMargin="20"
        BottomMargin="0"
        IsWindowSyncedToVisibleRange="false"
        ChartTitle="This Data Chart demonstrates the DataAnnotationStripLayer bound to data that markert events affecting stock prices.">
            <IgbCategoryXAxis
            Name="xAxisBottom"
            @ref="xAxisBottom"
            DataSource="StockTesla"
            Label="Date"
            LabelLeftMargin="10"
            LabelTopMargin="5"
            LabelRightMargin="10"
            LabelBottomMargin="15">
            </IgbCategoryXAxis>

            <IgbCategoryXAxis
            Name="xAxisTop"
            @ref="xAxisTop"
            DataSource="StockTesla"
            Label="Date"
            TickLength="0"
            LabelTextColor="#00000000"
            LabelLocation="AxisLabelsLocation.OutsideTop"
            LabelFontSize="12"
            LabelExtent="40"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxisLeft"
            @ref="yAxisLeft"
            LabelLocation="AxisLabelsLocation.OutsideLeft"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Right"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbNumericYAxis
            Name="yAxisRight"
            @ref="yAxisRight"
            LabelLocation="AxisLabelsLocation.OutsideRight"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Left"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbFinancialPriceSeries
            Name="series1"
            @ref="series1"
            Title="Stock Price"
            DisplayType="PriceDisplayType.Candlestick"
            XAxisName="xAxisBottom"
            YAxisName="yAxisLeft"
            DataSource="StockTesla"
            OpenMemberPath="Open"
            HighMemberPath="High"
            LowMemberPath="Low"
            CloseMemberPath="Close"
            ShowDefaultTooltip="false">
            </IgbFinancialPriceSeries>

            <IgbDataToolTipLayer
            Name="Tooltip"
            @ref="tooltip"
            IncludedColumns="@(new string[] { "High", "Low", "Open", "Close" })"
            LayoutMode="DataLegendLayoutMode.Vertical">
            </IgbDataToolTipLayer>

            <IgbDataAnnotationStripLayer
            Name="StripLayer"
            @ref="stripLayer"
            DataSource="AnnotationStripData"
            TargetAxisName="xAxisTop"
            CenterLabelMemberPath="Label"
            StartValueMemberPath="Start"
            EndValueMemberPath="End"
            StartLabelDisplayMode="DataAnnotationDisplayMode.Hidden"
            EndLabelDisplayMode="DataAnnotationDisplayMode.Hidden"
            Brush="black"
            Outline="black"
            OverlayTextColor="purple"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="-50"
            OverlayTextLocation="OverlayTextLocation.InsideTopCenter"
            OverlayTextMemberPath="Label">
            </IgbDataAnnotationStripLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxisBottom = this.xAxisBottom;
        var xAxisTop = this.xAxisTop;
        var yAxisLeft = this.yAxisLeft;
        var yAxisRight = this.yAxisRight;
        var series1 = this.series1;
        var tooltip = this.tooltip;
        var stripLayer = this.stripLayer;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxisBottom;
    private IgbCategoryXAxis xAxisTop;
    private IgbNumericYAxis yAxisLeft;
    private IgbNumericYAxis yAxisRight;
    private IgbFinancialPriceSeries series1;
    private IgbDataToolTipLayer tooltip;
    private IgbDataAnnotationStripLayer stripLayer;

    private StockTesla _stockTesla = null;
    public StockTesla StockTesla
    {
        get
        {
            if (_stockTesla == null)
            {
                _stockTesla = new StockTesla();
            }
            return _stockTesla;
        }
    }

    private AnnotationStripData _annotationStripData = null;
    public AnnotationStripData AnnotationStripData
    {
        get
        {
            if (_annotationStripData == null)
            {
                _annotationStripData = new AnnotationStripData();
            }
            return _annotationStripData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class StockTeslaItem
{
    public string Date { get; set; }
    public double Open { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double Close { get; set; }
    public double Volume { get; set; }
    public double Change { get; set; }
    public double Index { get; set; }
}

public class StockTesla
    : List<StockTeslaItem>
{
    public StockTesla()
    {
        this.Add(new StockTeslaItem() { Date = @"2019-01-10", Open = 20.4, High = 23, Low = 19.8, Close = 23, Volume = 779333701, Change = 12.7, Index = 0 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-22", Open = 22.8, High = 23.5, Low = 19.7, Close = 19.9, Volume = 911781100, Change = -12.6, Index = 1 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-31", Open = 19.5, High = 20.8, Low = 18.6, Close = 20.5, Volume = 926375717, Change = 5, Index = 2 });
        // ... 224 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Data Annotation Line Layer Example

In Blazor, [`IgbDataAnnotationLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationLineLayer.html) renders multiple lines between 2 points in plot area of the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component. This data annotation layer can be used to annotate stock chart with growth and decline in stock prices. Similarly to all series, the DataAnnotationLineLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath`  properties.

For example, you can use DataAnnotationLineLayer to annotate growth and decline patterns in stock prices and 52-week high and low of stock prices on y-axis.

```csharp
using System;
using System.Collections.Generic;
public class AnnotationLineData1Item
{
    public double StartX { get; set; }
    public double StartY { get; set; }
    public double EndX { get; set; }
    public double EndY { get; set; }
    public string Label { get; set; }
}

public class AnnotationLineData1
    : List<AnnotationLineData1Item>
{
    public AnnotationLineData1()
    {
        this.Add(new AnnotationLineData1Item() { StartX = 190, StartY = 138, EndX = 230, EndY = 138, Label = @"52-Week Low" });
        this.Add(new AnnotationLineData1Item() { StartX = 190, StartY = 481, EndX = 230, EndY = 481, Label = @"52-Week High" });
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class AnnotationLineData2Item
{
    public double StartX { get; set; }
    public double StartY { get; set; }
    public double EndX { get; set; }
    public double EndY { get; set; }
    public string Label { get; set; }
}

public class AnnotationLineData2
    : List<AnnotationLineData2Item>
{
    public AnnotationLineData2()
    {
        this.Add(new AnnotationLineData2Item() { StartX = 48, StartY = 25, EndX = 105, EndY = 250, Label = @"Growth &
Support" });
        this.Add(new AnnotationLineData2Item() { StartX = 108, StartY = 440, EndX = 155, EndY = 210, Label = @"Decline &
Resistance" });
    }
}
```
```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsVerticalZoomEnabled="false"
        IsHorizontalZoomEnabled="true"
        Brushes="green red"
        Outlines="green red"
        PlotAreaMarginLeft="10"
        PlotAreaMarginTop="0"
        PlotAreaMarginRight="20"
        PlotAreaMarginBottom="0"
        LeftMargin="10"
        TopMargin="0"
        RightMargin="20"
        BottomMargin="0"
        IsWindowSyncedToVisibleRange="false"
        ChartTitle="The Data Chart demonstrates the DataAnnotationLineLayer bound to data that annotates stock growth and decline patterns.">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="StockTesla"
            Label="Date"
            LabelLeftMargin="0"
            LabelTopMargin="10"
            LabelRightMargin="0"
            LabelBottomMargin="15">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxisLeft"
            @ref="yAxisLeft"
            LabelLocation="AxisLabelsLocation.OutsideLeft"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Right"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbNumericYAxis
            Name="yAxisRight"
            @ref="yAxisRight"
            LabelLocation="AxisLabelsLocation.OutsideRight"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Left"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbFinancialPriceSeries
            Name="series1"
            @ref="series1"
            Title="Stock Price"
            DisplayType="PriceDisplayType.Candlestick"
            XAxisName="xAxis"
            YAxisName="yAxisLeft"
            DataSource="StockTesla"
            OpenMemberPath="Open"
            HighMemberPath="High"
            LowMemberPath="Low"
            CloseMemberPath="Close"
            ShowDefaultTooltip="false">
            </IgbFinancialPriceSeries>

            <IgbDataToolTipLayer
            Name="Tooltip"
            @ref="tooltip"
            IncludedColumns="@(new string[] { "High", "Low", "Open", "Close" })"
            LayoutMode="DataLegendLayoutMode.Vertical">
            </IgbDataToolTipLayer>

            <IgbDataAnnotationLineLayer
            Name="LineLayer52WeekRange"
            @ref="lineLayer52WeekRange"
            DataSource="AnnotationLineData1"
            TargetAxisName="yAxisRight"
            CenterLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelYDisplayMode="DataAnnotationDisplayMode.DataValue"
            EndLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            EndLabelYDisplayMode="DataAnnotationDisplayMode.DataValue"
            Brush="purple"
            Outline="purple"
            OverlayTextColor="purple"
            OverlayTextVerticalMargin="5"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.OutsideBottomLeft"
            OverlayTextMemberPath="Label"
            StartLabelXMemberPath="StartLabel"
            EndLabelXMemberPath="EndLabel"
            StartValueXMemberPath="StartX"
            StartValueYMemberPath="StartY"
            EndValueXMemberPath="EndX"
            EndValueYMemberPath="EndY">
            </IgbDataAnnotationLineLayer>

            <IgbDataAnnotationLineLayer
            Name="LineLayerGrowthAndDecline"
            @ref="lineLayerGrowthAndDecline"
            DataSource="AnnotationLineData2"
            TargetAxisName="xAxis"
            CenterLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            EndLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            AnnotationBackgroundMode="AnnotationAppearanceMode.BrightnessShift"
            Brush="purple"
            Outline="purple"
            OverlayTextColor="purple"
            OverlayTextVerticalMargin="-10"
            OverlayTextHorizontalMargin="70"
            OverlayTextMemberPath="Label"
            StartLabelXMemberPath="StartLabel"
            EndLabelXMemberPath="EndLabel"
            StartValueXMemberPath="StartX"
            StartValueYMemberPath="StartY"
            EndValueXMemberPath="EndX"
            EndValueYMemberPath="EndY">
            </IgbDataAnnotationLineLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxisLeft = this.yAxisLeft;
        var yAxisRight = this.yAxisRight;
        var series1 = this.series1;
        var tooltip = this.tooltip;
        var lineLayer52WeekRange = this.lineLayer52WeekRange;
        var lineLayerGrowthAndDecline = this.lineLayerGrowthAndDecline;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxisLeft;
    private IgbNumericYAxis yAxisRight;
    private IgbFinancialPriceSeries series1;
    private IgbDataToolTipLayer tooltip;
    private IgbDataAnnotationLineLayer lineLayer52WeekRange;
    private IgbDataAnnotationLineLayer lineLayerGrowthAndDecline;

    private StockTesla _stockTesla = null;
    public StockTesla StockTesla
    {
        get
        {
            if (_stockTesla == null)
            {
                _stockTesla = new StockTesla();
            }
            return _stockTesla;
        }
    }

    private AnnotationLineData1 _annotationLineData1 = null;
    public AnnotationLineData1 AnnotationLineData1
    {
        get
        {
            if (_annotationLineData1 == null)
            {
                _annotationLineData1 = new AnnotationLineData1();
            }
            return _annotationLineData1;
        }
    }

    private AnnotationLineData2 _annotationLineData2 = null;
    public AnnotationLineData2 AnnotationLineData2
    {
        get
        {
            if (_annotationLineData2 == null)
            {
                _annotationLineData2 = new AnnotationLineData2();
            }
            return _annotationLineData2;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class StockTeslaItem
{
    public string Date { get; set; }
    public double Open { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double Close { get; set; }
    public double Volume { get; set; }
    public double Change { get; set; }
    public double Index { get; set; }
}

public class StockTesla
    : List<StockTeslaItem>
{
    public StockTesla()
    {
        this.Add(new StockTeslaItem() { Date = @"2019-01-10", Open = 20.4, High = 23, Low = 19.8, Close = 23, Volume = 779333701, Change = 12.7, Index = 0 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-22", Open = 22.8, High = 23.5, Low = 19.7, Close = 19.9, Volume = 911781100, Change = -12.6, Index = 1 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-31", Open = 19.5, High = 20.8, Low = 18.6, Close = 20.5, Volume = 926375717, Change = 5, Index = 2 });
        // ... 224 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Data Annotation Rect Layer Example

In Blazor, the [`IgbDataAnnotationRectLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationRectLayer.html) renders multiple rectangles defined by starting and ending points in plot area of the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component. This data annotation layer can be used to annotate region of plot area such as bearish patterns in stock prices. Similarly to all series, the DataAnnotationRectLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the rectangles. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties.

For example, you can use DataAnnotationRectLayer to annotate bearish patterns and gaps in stock prices on y-axis.

```csharp
using System;
using System.Collections.Generic;
public class AnnotationRectDataItem
{
    public double StartX { get; set; }
    public double StartY { get; set; }
    public double EndX { get; set; }
    public double EndY { get; set; }
    public string Label { get; set; }
}

public class AnnotationRectData
    : List<AnnotationRectDataItem>
{
    public AnnotationRectData()
    {
        this.Add(new AnnotationRectDataItem() { StartX = 85, StartY = 190, EndX = 140, EndY = 415, Label = @"Head & Shoulders Pattern
  (Bearish Downtrend)" });
        this.Add(new AnnotationRectDataItem() { StartX = 53, StartY = 75, EndX = 230, EndY = 80, Label = @"Price Gap (Bearish Target)" });
    }
}
```
```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsVerticalZoomEnabled="false"
        IsHorizontalZoomEnabled="true"
        Brushes="green red"
        Outlines="green red"
        PlotAreaMarginLeft="10"
        PlotAreaMarginTop="0"
        PlotAreaMarginRight="20"
        PlotAreaMarginBottom="0"
        LeftMargin="10"
        TopMargin="0"
        RightMargin="20"
        BottomMargin="0"
        IsWindowSyncedToVisibleRange="false"
        ChartTitle="This Data Chart demonstrates the DataAnnotationRectLayer bound to data that annotates bearish patterns in stock prices.">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="StockTesla"
            Label="Date"
            LabelLeftMargin="0"
            LabelTopMargin="10"
            LabelRightMargin="0"
            LabelBottomMargin="10">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbFinancialPriceSeries
            Name="series1"
            @ref="series1"
            Title="Stock Price"
            DisplayType="PriceDisplayType.Candlestick"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="StockTesla"
            OpenMemberPath="Open"
            HighMemberPath="High"
            LowMemberPath="Low"
            CloseMemberPath="Close"
            ShowDefaultTooltip="false">
            </IgbFinancialPriceSeries>

            <IgbDataToolTipLayer
            Name="Tooltip"
            @ref="tooltip"
            IncludedColumns="@(new string[] { "High", "Low", "Open", "Close" })"
            LayoutMode="DataLegendLayoutMode.Vertical">
            </IgbDataToolTipLayer>

            <IgbDataAnnotationRectLayer
            Name="RectLayer"
            @ref="rectLayer"
            DataSource="AnnotationRectData"
            TargetAxisName="xAxis"
            CenterLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            EndLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelYDisplayMode="DataAnnotationDisplayMode.Hidden"
            EndLabelYDisplayMode="DataAnnotationDisplayMode.Hidden"
            ActualAreaFillOpacity="0.1"
            Brush="purple"
            Outline="purple"
            OverlayTextColor="purple"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="-50"
            OverlayTextLocation="OverlayTextLocation.OutsideBottomCenter"
            OverlayTextMemberPath="Label"
            StartLabelXMemberPath="StartLabel"
            EndLabelXMemberPath="EndLabel"
            StartValueXMemberPath="StartX"
            StartValueYMemberPath="StartY"
            EndValueXMemberPath="EndX"
            EndValueYMemberPath="EndY">
            </IgbDataAnnotationRectLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var series1 = this.series1;
        var tooltip = this.tooltip;
        var rectLayer = this.rectLayer;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbFinancialPriceSeries series1;
    private IgbDataToolTipLayer tooltip;
    private IgbDataAnnotationRectLayer rectLayer;

    private StockTesla _stockTesla = null;
    public StockTesla StockTesla
    {
        get
        {
            if (_stockTesla == null)
            {
                _stockTesla = new StockTesla();
            }
            return _stockTesla;
        }
    }

    private AnnotationRectData _annotationRectData = null;
    public AnnotationRectData AnnotationRectData
    {
        get
        {
            if (_annotationRectData == null)
            {
                _annotationRectData = new AnnotationRectData();
            }
            return _annotationRectData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class StockTeslaItem
{
    public string Date { get; set; }
    public double Open { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double Close { get; set; }
    public double Volume { get; set; }
    public double Change { get; set; }
    public double Index { get; set; }
}

public class StockTesla
    : List<StockTeslaItem>
{
    public StockTesla()
    {
        this.Add(new StockTeslaItem() { Date = @"2019-01-10", Open = 20.4, High = 23, Low = 19.8, Close = 23, Volume = 779333701, Change = 12.7, Index = 0 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-22", Open = 22.8, High = 23.5, Low = 19.7, Close = 19.9, Volume = 911781100, Change = -12.6, Index = 1 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-31", Open = 19.5, High = 20.8, Low = 18.6, Close = 20.5, Volume = 926375717, Change = 5, Index = 2 });
        // ... 224 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Data Annotation Band Layer Example

In Blazor, the [`IgbDataAnnotationBandLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationBandLayer.html) renders multiple skewed rectangles (free-form parallelogram) between 2 points in plot area of the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component. This data annotation layer can be used to annotate range of growth and decline in stock prices. Similarly to all series, the DataAnnotationBandLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties. In addition, you can specify thickness/size of the skewed rectangle by binding numeric data column to the AnnotationBreadthMemberPath property.

For example, you can use DataAnnotationBandLayer to annotate range of growth in stock prices.

```csharp
using System;
using System.Collections.Generic;
public class AnnotationBandDataItem
{
    public string StartLabel { get; set; }
    public string EndLabel { get; set; }
    public double StartX { get; set; }
    public double StartY { get; set; }
    public double EndX { get; set; }
    public double EndY { get; set; }
    public double Value { get; set; }
    public string Label { get; set; }
}

public class AnnotationBandData
    : List<AnnotationBandDataItem>
{
    public AnnotationBandData()
    {
        this.Add(new AnnotationBandDataItem() { StartLabel = @"Growth Start", EndLabel = @"Growth Stop", StartX = 48, StartY = 110, EndX = 105, EndY = 335, Value = 170, Label = @"Rapid Growth" });
    }
}
```
```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsVerticalZoomEnabled="false"
        IsHorizontalZoomEnabled="true"
        Brushes="green red"
        Outlines="green red"
        PlotAreaMarginLeft="10"
        PlotAreaMarginTop="0"
        PlotAreaMarginRight="20"
        PlotAreaMarginBottom="0"
        LeftMargin="10"
        TopMargin="0"
        RightMargin="20"
        BottomMargin="0"
        IsWindowSyncedToVisibleRange="false"
        ChartTitle="Data Chart with DataAnnotationBandLayer bound to data that annotates stock rapid growth">
            <IgbCategoryXAxis
            Name="xAxisBottom"
            @ref="xAxisBottom"
            DataSource="StockTesla"
            Label="Index"
            TickLength="0"
            LabelLocation="AxisLabelsLocation.OutsideBottom"
            LabelTextColor="#00000000"
            LabelFontSize="12"
            LabelExtent="120"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            LabelAngle="90">
            </IgbCategoryXAxis>

            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="StockTesla"
            Label="Date">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxisLeft"
            @ref="yAxisLeft"
            LabelLocation="AxisLabelsLocation.OutsideLeft"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Right"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbNumericYAxis
            Name="yAxisRight"
            @ref="yAxisRight"
            LabelLocation="AxisLabelsLocation.OutsideRight"
            LabelFontSize="12"
            LabelExtent="80"
            LabelHorizontalAlignment="HorizontalAlignment.Left"
            LabelLeftMargin="8"
            LabelTopMargin="3"
            LabelRightMargin="8"
            LabelBottomMargin="5"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbFinancialPriceSeries
            Name="series1"
            @ref="series1"
            Title="Stock Price"
            DisplayType="PriceDisplayType.Candlestick"
            XAxisName="xAxis"
            YAxisName="yAxisLeft"
            DataSource="StockTesla"
            OpenMemberPath="Open"
            HighMemberPath="High"
            LowMemberPath="Low"
            CloseMemberPath="Close"
            ShowDefaultTooltip="false">
            </IgbFinancialPriceSeries>

            <IgbDataToolTipLayer
            Name="Tooltip"
            @ref="tooltip"
            IncludedColumns="@(new string[] { "High", "Low", "Open", "Close" })"
            LayoutMode="DataLegendLayoutMode.Vertical">
            </IgbDataToolTipLayer>

            <IgbDataAnnotationBandLayer
            Name="BandLayer"
            @ref="bandLayer"
            DataSource="AnnotationBandData"
            TargetAxisName="xAxisBottom"
            CenterLabelXDisplayMode="DataAnnotationDisplayMode.Hidden"
            StartLabelXDisplayMode="DataAnnotationDisplayMode.DataLabel"
            EndLabelXDisplayMode="DataAnnotationDisplayMode.DataLabel"
            Brush="purple"
            Outline="purple"
            OverlayTextColor="purple"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="-50"
            OverlayTextLocation="OverlayTextLocation.InsideTopCenter"
            OverlayTextMemberPath="Label"
            StartLabelXMemberPath="StartLabel"
            EndLabelXMemberPath="EndLabel"
            StartValueXMemberPath="StartX"
            StartValueYMemberPath="StartY"
            EndValueXMemberPath="EndX"
            EndValueYMemberPath="EndY"
            AnnotationBreadthMemberPath="Value">
            </IgbDataAnnotationBandLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxisBottom = this.xAxisBottom;
        var xAxis = this.xAxis;
        var yAxisLeft = this.yAxisLeft;
        var yAxisRight = this.yAxisRight;
        var series1 = this.series1;
        var tooltip = this.tooltip;
        var bandLayer = this.bandLayer;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxisBottom;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxisLeft;
    private IgbNumericYAxis yAxisRight;
    private IgbFinancialPriceSeries series1;
    private IgbDataToolTipLayer tooltip;
    private IgbDataAnnotationBandLayer bandLayer;

    private StockTesla _stockTesla = null;
    public StockTesla StockTesla
    {
        get
        {
            if (_stockTesla == null)
            {
                _stockTesla = new StockTesla();
            }
            return _stockTesla;
        }
    }

    private AnnotationBandData _annotationBandData = null;
    public AnnotationBandData AnnotationBandData
    {
        get
        {
            if (_annotationBandData == null)
            {
                _annotationBandData = new AnnotationBandData();
            }
            return _annotationBandData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class StockTeslaItem
{
    public string Date { get; set; }
    public double Open { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double Close { get; set; }
    public double Volume { get; set; }
    public double Change { get; set; }
    public double Index { get; set; }
}

public class StockTesla
    : List<StockTeslaItem>
{
    public StockTesla()
    {
        this.Add(new StockTeslaItem() { Date = @"2019-01-10", Open = 20.4, High = 23, Low = 19.8, Close = 23, Volume = 779333701, Change = 12.7, Index = 0 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-22", Open = 22.8, High = 23.5, Low = 19.7, Close = 19.9, Volume = 911781100, Change = -12.6, Index = 1 });
        this.Add(new StockTeslaItem() { Date = @"2019-01-31", Open = 19.5, High = 20.8, Low = 18.6, Close = 20.5, Volume = 926375717, Change = 5, Index = 2 });
        // ... 224 more items
    }
}
```


<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- `TargetAxis`: This property specifies which axis should have an enabled DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `DataSource`: This property binds data to the annotation layer to provide the precise shape.
- `StartValueXMemberPath`: This property is a mapping to the name of the data column with x-positions for the start of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `StartValueYMemberPath`: This property is a mapping to the name of data column with y-positions for the start of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `EndValueXMemberPath`: This property is a mapping to the data column with x-positions for the end of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `EndValueYMemberPath`: This property is a mapping to the data column with y-positions for end of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `StartLabelXMemberPath`: This property is a mapping to the data column representing the overlay label for the starting position of the xAxis along the axis.
- `StartLabelXDisplayMode` | `StartLabelYDisplayMode` | `EndLabelXDisplayMode` | `EndLabelYDisplayMode` | `CenterLabelXDisplayMode`: These properties specify what should annotation labels display on starting, ending, or center of the annotation shape, e.g. mapped data value, mapped data label, axis value, or hide a given annotation label.
- `StartLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the starting position of [`IgbDataAnnotationBandLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationBandLayer.html), [`IgbDataAnnotationLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationLineLayer.html), [`IgbDataAnnotationRectLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationRectLayer.html) on the y-axis.
- `EndLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the ending position of [`IgbDataAnnotationBandLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationBandLayer.html), [`IgbDataAnnotationLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationLineLayer.html), [`IgbDataAnnotationRectLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationRectLayer.html) on the y-axis.
