---
title: Blazor Chart Markers | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Markers
_keywords: Blazor Charts, Markers, Marker Size, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType", "MarkerSeries", "ScatterLineSeries", "ScatterSplineSeries", "ScatterSeries", "LineSeries", "SplineSeries", "MarkerAutomaticBehavior", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Markers
_premium: true
---

# Blazor Chart Markers

In Ignite UI for Blazor, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

## Blazor Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the [`MarkerType`](mcp:get_api_reference?platform=blazor&component=IgbMarkerSeries&member=MarkerType) property to `Circle` enum value.

The colors of the markers are also managed by setting the [`MarkerBrushes`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=MarkerBrushes) and [`MarkerOutlines`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=MarkerOutlines) properties in the sample below. The markers and [`ChartType`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=ChartType) is configurable in this sample by using the drop-downs as well.

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
            PropertyPath="ChartType"
            Name="ChartTypeEditor"
            @ref="chartTypeEditor"
            Label="Chart Type"
            PrimitiveValue="@("Line")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="MarkerTypeHandler"
            Name="MarkerTypeEditor"
            @ref="markerTypeEditor"
            Label="Marker Type"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownValues="@(new string[] { "Circle", "Checkmark", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None" })"
            DropDownNames="@(new string[] { "Circle", "Checkmark", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None" })"
            PrimitiveValue="@("Circle")"
            Changed="EditorChangeUpdateMarkerType">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Renewable Electricity Generated
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        IsSeriesHighlightingEnabled="true"
        ChartType="CategoryChartType.Line"
        DataSource="CountryRenewableElectricity"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var chartTypeEditor = this.chartTypeEditor;
        var markerTypeEditor = this.markerTypeEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription chartTypeEditor;
    private IgbPropertyEditorPropertyDescription markerTypeEditor;
    private IgbCategoryChart chart;

    public void EditorChangeUpdateMarkerType(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        //var item = this.PropertyEditor.Properties.Where((p) => p.PropertyPath == "MarkerType").First();
        //var value = (string)item.PrimitiveValue;
        var chart = this.chart;

        var markerVal = (MarkerType)Enum.Parse(typeof(MarkerType), args.NewValue.ToString());
        chart.MarkerTypes.Clear();
        chart.MarkerTypes.Add(markerVal);
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

## Blazor Chart Marker Size

You can control the exact device-independent pixel dimensions of data point markers by setting the `MarkerSize` property on any series that supports markers. This gives you precise control over how large markers appear on screen, regardless of the marker template or style being used.

By default, marker sizing is determined by the series marker template. When you set `MarkerSize` to a specific numeric value, all markers in that series render at that exact device-independent pixel width and height. Setting `MarkerSize` back to `NaN` restores the default template-driven sizing.

The `MarkerSize` property is available on all series types that derive from [`IgbMarkerSeries`](mcp:get_api_reference?platform=blazor&component=IgbMarkerSeries), including [`IgbLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbLineSeries), [`IgbSplineSeries`](mcp:get_api_reference?platform=blazor&component=IgbSplineSeries), [`IgbAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbAreaSeries), [`IgbColumnSeries`](mcp:get_api_reference?platform=blazor&component=IgbColumnSeries), [`IgbScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbScatterSeries), [`IgbScatterLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbScatterLineSeries), [`IgbScatterSplineSeries`](mcp:get_api_reference?platform=blazor&component=IgbScatterSplineSeries), and polar/radial series types.

The following code examples show how to set `MarkerSize` to 30 device-independent pixels on a [`IgbScatterLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbScatterLineSeries) in the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) control:

```razor
<IgbDataChart>
    <IgbScatterLineSeries
        MarkerSize="30"
        MarkerType="Circle"
        XMemberPath="X"
        YMemberPath="Y"
        XAxisName="xAxis"
        YAxisName="yAxis" />
</IgbDataChart>
```

To reset markers to their default template-driven size, set `MarkerSize` to `NaN` (or remove the attribute in markup):

```razor
<IgbLineSeries MarkerSize="NaN" MarkerType="Circle" ... />
```

The following sample demonstrates `MarkerSize` on scatter series with an interactive editor:

```razor
@using IgniteUI.Blazor.Controls
@using System

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="DataChart"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="MarkerSizeHandler"
            Name="MarkerSizeEditor"
            @ref="markerSizeEditor"
            Label="Marker Size"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "3", "5", "7", "10", "12", "15", "20", "25", "30" })"
            DropDownValues="@(new string[] { "3", "5", "7", "10", "12", "15", "20", "25", "30" })"
            PrimitiveValue="@("10")"
            Changed="EditorChangeUpdateDataChartMarkerSize">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="MarkerTypeHandler"
            Name="MarkerTypeEditor"
            @ref="markerTypeEditor"
            Label="Marker Type"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownValues="@(new string[] { "Circle", "Checkmark", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "Hidden", "Automatic", "None" })"
            DropDownNames="@(new string[] { "Circle", "Checkmark", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "Hidden", "Automatic", "None" })"
            PrimitiveValue="@("Circle")"
            Changed="EditorChangeUpdateDataChartMarkerType">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Population Statistics for Selected Continents
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart">
            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            Title="Death Rate (per 1,000 people)"
            MinimumValue="5"
            MaximumValue="15">
            </IgbNumericXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="Birth Rate (per 1,000 people)"
            MinimumValue="0"
            MaximumValue="50"
            Interval="10">
            </IgbNumericYAxis>

            <IgbScatterSeries
            Name="scatterSeries1"
            @ref="scatterSeries1"
            Title="Europe"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="DeathRate"
            YMemberPath="BirthRate"
            DataSource="CountryDemographicEurope"
            MarkerType="MarkerType.Circle"
            MarkerSize="10"
            ShowDefaultTooltip="true">
            </IgbScatterSeries>

            <IgbScatterSeries
            Name="scatterSeries2"
            @ref="scatterSeries2"
            Title="Africa"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="DeathRate"
            YMemberPath="BirthRate"
            DataSource="CountryDemographicAfrican"
            MarkerType="MarkerType.Circle"
            MarkerSize="10"
            ShowDefaultTooltip="true">
            </IgbScatterSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var markerSizeEditor = this.markerSizeEditor;
        var markerTypeEditor = this.markerTypeEditor;
        var legend = this.legend;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var scatterSeries1 = this.scatterSeries1;
        var scatterSeries2 = this.scatterSeries2;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription markerSizeEditor;
    private IgbPropertyEditorPropertyDescription markerTypeEditor;
    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbNumericXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbScatterSeries scatterSeries1;
    private IgbScatterSeries scatterSeries2;

    public void EditorChangeUpdateDataChartMarkerSize(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = this.chart;
        var markerSizeVal = Convert.ToInt32(args.NewValue);
        var series = chart.ActualSeries;
        for (var i = 0; i < series.Count; i++)
        {
            var markerSeries = series[i] as IgbMarkerSeries;
            if (markerSeries != null)
            {
                markerSeries.MarkerSize = markerSizeVal;
            }
        }
    }

    public void EditorChangeUpdateDataChartMarkerType(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = this.chart;
        var markerTypeVal = (MarkerType)Enum.Parse(typeof(MarkerType), args.NewValue.ToString());
        var series = chart.ActualSeries;
        for (var i = 0; i < series.Count; i++)
        {
            var markerSeries = series[i] as IgbMarkerSeries;
            if (markerSeries != null)
            {
                markerSeries.MarkerType = markerTypeVal;
            }
        }
    }

    private CountryDemographicEurope _countryDemographicEurope = null;
    public CountryDemographicEurope CountryDemographicEurope
    {
        get
        {
            if (_countryDemographicEurope == null)
            {
                _countryDemographicEurope = new CountryDemographicEurope();
            }
            return _countryDemographicEurope;
        }
    }

    private CountryDemographicAfrican _countryDemographicAfrican = null;
    public CountryDemographicAfrican CountryDemographicAfrican
    {
        get
        {
            if (_countryDemographicAfrican == null)
            {
                _countryDemographicAfrican = new CountryDemographicAfrican();
            }
            return _countryDemographicAfrican;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryDemographicAfricanItem
{
    public double Population { get; set; }
    public double BirthRate { get; set; }
    public double DeathRate { get; set; }
    public string Name { get; set; }
}

public class CountryDemographicAfrican
    : List<CountryDemographicAfricanItem>
{
    public CountryDemographicAfrican()
    {
        this.Add(new CountryDemographicAfricanItem() { Population = 39728000, BirthRate = 23.9, DeathRate = 4.77, Name = @"Algeria" });
        this.Add(new CountryDemographicAfricanItem() { Population = 27884000, BirthRate = 42.32, DeathRate = 8.68, Name = @"Angola" });
        this.Add(new CountryDemographicAfricanItem() { Population = 10576000, BirthRate = 37.43, DeathRate = 9.32, Name = @"Benin" });
        // ... 51 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryDemographicEuropeItem
{
    public double Population { get; set; }
    public double BirthRate { get; set; }
    public double DeathRate { get; set; }
    public string Name { get; set; }
}

public class CountryDemographicEurope
    : List<CountryDemographicEuropeItem>
{
    public CountryDemographicEurope()
    {
        this.Add(new CountryDemographicEuropeItem() { Population = 2891000, BirthRate = 11.88, DeathRate = 7.22, Name = @"Albania" });
        this.Add(new CountryDemographicEuropeItem() { Population = 8679000, BirthRate = 9.8, DeathRate = 9.6, Name = @"Austria" });
        this.Add(new CountryDemographicEuropeItem() { Population = 9439000, BirthRate = 12.5, DeathRate = 12.6, Name = @"Belarus" });
        // ... 42 more items
    }
}
```

> [!NOTE]
> For [`IgbBubbleSeries`](mcp:get_api_reference?platform=blazor&component=IgbBubbleSeries), the `MarkerSize` property does not override the bubble radius, which is controlled by the radius data column and the [`RadiusScale`](mcp:get_api_reference?platform=blazor&component=IgbBubbleSeries&member=RadiusScale). Bubble sizes remain entirely driven by the data and scale configuration.

<div class="divider--half"></div>

## Blazor Chart Checkmark Marker Type

The Ignite UI for Blazor charts include a `Checkmark` option in the [`MarkerType`](mcp:get_api_reference?platform=blazor&component=IgbMarkerSeries&member=MarkerType) enum. This marker renders a V-shaped checkmark icon inside a circle on data points in your chart.

You can apply the `Checkmark` marker type to an individual series by setting its [`MarkerType`](mcp:get_api_reference?platform=blazor&component=IgbMarkerSeries&member=MarkerType) property to `MarkerType.Checkmark`. To use the checkmark shape for all series in the chart simultaneously, set the chart's [`MarkerAutomaticBehavior`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=MarkerAutomaticBehavior) property to `MarkerAutomaticBehavior.Checkmark`.

The `SeriesViewer.CheckmarkMarkerTemplate` property defines the marker template used for series with a checkmark marker type, and can be used to customize its appearance across the chart.

<div class="divider--half"></div>

## Blazor Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  [`MarkerTemplate`](mcp:get_api_reference?platform=blazor&component=IgbMarkerSeries&member=MarkerTemplate) property of a series rendered in the [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) control as it is demonstrated in example below.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options vertical">
        <span class="legend-title">Percentage Change in Energy Generation in 2019</span>
        <div class="legend">
            <IgbLegend @ref="Legend" Orientation="LegendOrientation.Horizontal" />
        </div>
    </div>

    <div class="container vertical">
             <IgbCategoryChart Height="100%" Width="100%"
                           Legend="Legend"
                           DataSource="Data"
                           ChartType="CategoryChartType.Column"
                           Thickness="2"
                           IsHorizontalZoomEnabled="false"
                           IsVerticalZoomEnabled="false"
                           IsSeriesHighlightingEnabled="true"
                           YAxisMinimumValue="-20" YAxisMaximumValue="30" YAxisInterval="10"
                           XAxisMajorStrokeThickness="1" XAxisMajorStroke="LightGray"
                           SeriesAddedScript="onCategoryChatMarkerStylingSeries">
                @*note custom marker template is implemented in CategoryChatMarkerStyling.js*@
            </IgbCategoryChart>
    </div>
</div>

@code {

    private IgbLegend _Legend;
    private IgbLegend Legend
    {
        get { return _Legend; }
        set { _Legend = value; StateHasChanged(); }
    }

    private List<EnergyChangeInfo> Data = new EnergyChangeData();

}
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`MarkerBrushes`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=MarkerBrushes)
- [`MarkerOutlines`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=MarkerOutlines)
- `MarkerSize`
- [`MarkerType`](mcp:get_api_reference?platform=blazor&component=IgbMarkerSeries&member=MarkerType)
- `UseLightweightMarkers`
- [`MarkerAutomaticBehavior`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=MarkerAutomaticBehavior)
- `SeriesViewer.CheckmarkMarkerTemplate`
- [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart)
- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart)
