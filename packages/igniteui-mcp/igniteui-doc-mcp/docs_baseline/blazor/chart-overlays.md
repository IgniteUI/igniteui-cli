---
title: Blazor Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics Ignite UI for Blazor chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our Ignite UI for Blazor graph types!
_keywords: Blazor charts, data chart, value overlay, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Overlays
_premium: true
---

# Blazor Chart Overlays

The Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgbValueOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html). This can help you to visualize data such as the mean or median of a particular series.

## Blazor Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
        <IgbDataChart Height="100%" Width="100%" IsHorizontalZoomEnabled="true" IsVerticalZoomEnabled="true">
            <IgbCategoryXAxis Name="xAxis" DataSource="Data" Label="Label" />
            <IgbNumericYAxis Name="yAxis" MinimumValue="0" MaximumValue="10" />

            <IgbColumnSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ValueMemberPath="Value" />

            <IgbValueOverlay AxisName="yAxis" Value="2.0" Thickness="5" />
            <IgbValueOverlay AxisName="yAxis" Value="3.6" Thickness="5" />
            <IgbValueOverlay AxisName="yAxis" Value="5.8" Thickness="5" />
            <IgbValueOverlay AxisName="yAxis" Value="1.0" Thickness="5" />
            <IgbValueOverlay AxisName="yAxis" Value="8.0" Thickness="5" />
            <IgbValueOverlay AxisName="yAxis" Value="7.0" Thickness="5" />
            <IgbValueOverlay AxisName="yAxis" Value="5.0" Thickness="5" />

        </IgbDataChart>

        }
    </div>
</div>

@code {

    private List<OverlayDataItem> Data;

    protected override void OnInitialized()
    {
        var data = new List<OverlayDataItem>() {
            new OverlayDataItem() { Label = "1", Value = 1.0 },
            new OverlayDataItem() { Label = "2", Value = 2.0 },
            new OverlayDataItem() { Label = "3", Value = 6.0 },
            new OverlayDataItem() { Label = "4", Value = 8.0 },
            new OverlayDataItem() { Label = "5", Value = 2.0 },
            new OverlayDataItem() { Label = "6", Value = 6.0 },
            new OverlayDataItem() { Label = "7", Value = 4.0 },
            new OverlayDataItem() { Label = "8", Value = 2.0 },
            new OverlayDataItem() { Label = "9", Value = 1.0 }
        };

        this.Data = data;
    }

    public class OverlayDataItem {
        public string Label { get; set; }
        public double Value { get; set; }
    }

}
```


<div class="divider--half"></div>

## Blazor Value Overlay Properties

Unlike other series types that use a [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single [`Axis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html#IgniteUI_Blazor_Controls_IgbValueOverlay_Axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgbValueOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html) appearance properties are inherited from [`Series`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_Series) and so [`Brush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Brush) and [`Thickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Thickness) for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a [`IgbValueOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html) to show the value of the overlay on the owning axis. In order to show this, you can set the [`IsAxisAnnotationEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html#IgniteUI_Blazor_Controls_IgbValueOverlay_IsAxisAnnotationEnabled) property to true.

## Blazor Value Layer

The Blazor charting components also expose the ability to use value lines to call out different focal points of your data, such as minimum, maximum, and average values.

Applying the [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html) in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) and [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) components is done by setting the [`ValueLines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ValueLines) property on the chart. This property takes a collection of the `ValueLayerValueMode` enumeration. You can mix and match multiple value layers in the same chart by adding multiple `ValueLayerValueMode` enumerations to the [`ValueLines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ValueLines) collection of the chart.

In the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html), this is done by adding a [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html) to the [`Series`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_Series) collection of the chart and then setting the [`ValueMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_ValueMode) property to one of the `ValueLayerValueMode` enumerations. Each of these enumerations and what they mean is listed below:

- `Auto`: The default value mode of the `ValueLayerValueMode` enumeration.
- `Average`: Applies potentially multiple value lines to call out the average value of each series plotted in the chart.
- `GlobalAverage`: Applies a single value line to call out the average of all of the series values in the chart.
- `GlobalMaximum`: Applies a single value line to call out the absolute maximum value of all of the series values in the chart.
- `GlobalMinimum`: Applies a single value line to call out the absolute minimum value of all of the series values in the chart.
- `Maximum`: Applies potentially multiple value lines to call out the maximum value of each series plotted in the chart.
- `Minimum`: Applies potentially multiple value lines to call out the minimum value of each series plotted in the chart.

If you want to prevent any particular series from being taken into account when using the [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html) element, you can set the [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_TargetSeries) property on the layer. This will force the layer to target the series that you define. You can have as many [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html) elements within a single [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) as you want.

The following sample demonstrates usage of the different [`ValueLines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ValueLines) in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html):

```razor
@using IgniteUI.Blazor.Controls
@using System
@using System.Linq

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="ValueListHandler"
            Name="ValueListEditor"
            @ref="valueListEditor"
            Label="Value List"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownValues="@(new string[] { "Auto", "Average", "GlobalAverage", "GlobalMaximum", "GlobalMinimum", "Maximum", "Minimum" })"
            DropDownNames="@(new string[] { "Auto", "Average", "GlobalAverage", "GlobalMaximum", "GlobalMinimum", "Maximum", "Minimum" })"
            PrimitiveValue="@("Auto")"
            Changed="EditorChangeUpdateValueLines">
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
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "America", "Europe" })"
        ChartType="CategoryChartType.Column"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        IsTransitionInEnabled="false"
        YAxisMinimumValue="0"
        YAxisMaximumValue="100">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditor = this.propertyEditor;
        var valueListEditor = this.valueListEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription valueListEditor;
    private IgbCategoryChart chart;

    public void EditorChangeUpdateValueLines(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        //var item = this.PropertyEditor.Properties.Where((p) => p.PropertyPath == "MarkerType").First();
        //var value = (string)item.PrimitiveValue;
        var chart = this.chart;

        var valueLineType = (ValueLayerValueMode)Enum.Parse(typeof(ValueLayerValueMode), args.NewValue.ToString());
        chart.ValueLines.Clear();
        chart.ValueLines.Add(valueLineType);
    }

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


<div class="divider--half"></div>

## Blazor Financial Overlays

You can also plot built-in financial overlays and indicators in Blazor [Stock Chart](../types/stock-chart.md).

## Chart Overlay Text <label class="badge badge--preview">PREVIEW</label>

The Blazor [`IgbValueOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html), [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html), and all Data Annotation Layers can render custom overlay text inside plot area of the XamDataChart component. You can use this overlay text to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis in relationship to the layers.

For example, you can use [`IgbDataAnnotationSliceLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationSliceLayer.html), [`IgbValueOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html), and [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html) to show overlay text.

```csharp
using System;
using System.Collections.Generic;
public class AnnotationSliceMultiOverlayDataItem
{
    public double Value { get; set; }
}

public class AnnotationSliceMultiOverlayData
    : List<AnnotationSliceMultiOverlayDataItem>
{
    public AnnotationSliceMultiOverlayData()
    {
        this.Add(new AnnotationSliceMultiOverlayDataItem() { Value = 50 });
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
        PlotAreaMarginBottom="50"
        ChartTitle="This sample demonstrates the DataAnnotationSliceLayer with overlay text compared against the value layers in the DataChart.">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="StockTesla"
            Label="Date"
            LabelLeftMargin="0"
            LabelTopMargin="5"
            LabelRightMargin="0"
            LabelBottomMargin="15">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            LabelExtent="60"
            LabelHorizontalAlignment="HorizontalAlignment.Center"
            LabelLeftMargin="0"
            LabelTopMargin="0"
            LabelRightMargin="5"
            LabelBottomMargin="0"
            MinimumValue="0"
            MaximumValue="550">
            </IgbNumericYAxis>

            <IgbLineSeries
            Name="series1"
            @ref="series1"
            Title="Stock Price"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="StockTesla"
            ValueMemberPath="Open"
            ShowDefaultTooltip="true"
            MarkerType="MarkerType.None"
            Brush="black">
            </IgbLineSeries>

            <IgbValueOverlay
            Name="valueOverlay"
            @ref="valueOverlay"
            Value="435"
            Brush="green"
            IsAxisAnnotationEnabled="true"
            Thickness="2"
            DashArray="@(new double[] { 2, 4 })"
            AxisName="yAxis"
            OverlayText="OverlayText on ValueOverlay"
            OverlayTextLocation="OverlayTextLocation.OutsideBottomCenter">
            </IgbValueOverlay>

            <IgbValueLayer
            Name="valueLayer"
            @ref="valueLayer"
            ValueMode="ValueLayerValueMode.Average"
            Brush="purple"
            Thickness="2"
            DashArray="@(new double[] { 2, 4 })"
            TargetAxisName="yAxis"
            IsAxisAnnotationEnabled="true"
            OverlayText="OverlayText on ValueLayer (Average)"
            OverlayTextLocation="OverlayTextLocation.OutsideBottomCenter">
            </IgbValueLayer>

            <IgbDataAnnotationSliceLayer
            Name="AnnoLayer"
            @ref="annoLayer"
            DataSource="AnnotationSliceMultiOverlayData"
            TargetAxisName="yAxis"
            Brush="green"
            AnnotationTextColor="white"
            AnnotationLabelMemberPath="Label"
            AnnotationValueMemberPath="Value"
            OverlayTextMemberPath="Label"
            OverlayTextVerticalMargin="20"
            OverlayTextHorizontalMargin="0"
            OverlayTextLocation="OverlayTextLocation.OutsideBottomCenter"
            OverlayText="OverlayText on DataAnnotationSliceLayer"
            Thickness="2">
            </IgbDataAnnotationSliceLayer>

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
        var valueOverlay = this.valueOverlay;
        var valueLayer = this.valueLayer;
        var annoLayer = this.annoLayer;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbLineSeries series1;
    private IgbValueOverlay valueOverlay;
    private IgbValueLayer valueLayer;
    private IgbDataAnnotationSliceLayer annoLayer;

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

    private AnnotationSliceMultiOverlayData _annotationSliceMultiOverlayData = null;
    public AnnotationSliceMultiOverlayData AnnotationSliceMultiOverlayData
    {
        get
        {
            if (_annotationSliceMultiOverlayData == null)
            {
                _annotationSliceMultiOverlayData = new AnnotationSliceMultiOverlayData();
            }
            return _annotationSliceMultiOverlayData;
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


### Styling Overlay Text

This code example shows how to style and customize Overlay Text on
the [`IgbDataAnnotationSliceLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataAnnotationSliceLayer.html), [`IgbValueOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html), and [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html).

<div class="divider--half"></div>

```razor
public Series StylingOverlayText()
{
    var annoLayer = new IgbDataAnnotationSliceLayer();

    // styling optional overlay text
    annoLayer.OverlayTextColor = Brushes.White;
    annoLayer.OverlayTextBackground = Brushes.Green;
    annoLayer.OverlayTextBorderColor = Brushes.Black;
    annoLayer.OverlayTextBorderThickness = 1;
    annoLayer.OverlayTextBorderRadius = 4;
    annoLayer.OverlayTextHorizontalMargin = 5;
    annoLayer.OverlayTextHorizontalPadding = 2;
    annoLayer.OverlayTextVerticalMargin = 5;
    annoLayer.OverlayTextVerticalPadding = 2;

    return annoLayer;
}
```

## Additional Resources

You can find more information about related chart types in these topics:

- [Chart Annotations](chart-annotations.md)
- [Column Chart](../types/area-chart.md)
- [Line Chart](../types/line-chart.md)
- [Stock Chart](../types/stock-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`IgbValueOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html)
- [`Axis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueOverlay.html#IgniteUI_Blazor_Controls_IgbValueOverlay_Axis)
- [`Brush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Brush)
- `IsAxisAnnotationsEnabled`
- [`Series`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_Series)
- [`Thickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Thickness)
- [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html)
- `ValueLayerValueMode`
- [`ValueLines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ValueLines)
- [`OverlayText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_OverlayText)
- [`TargetAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_TargetAxis)
- `OverlayTextMemberPath`
- [`OverlayTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_OverlayTextColor)
- [`OverlayTextBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_OverlayTextBackground)
- [`OverlayTextBorderColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_OverlayTextBorderColor)
- [`OverlayTextLocation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html#IgniteUI_Blazor_Controls_IgbValueLayer_OverlayTextLocation)
