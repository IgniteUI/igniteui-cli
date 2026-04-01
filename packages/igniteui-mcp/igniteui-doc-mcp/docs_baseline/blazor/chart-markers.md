---
title: Blazor Chart Markers | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Markers
_keywords: Blazor Charts, Markers, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Markers
_premium: true
---

# Blazor Chart Markers

In Ignite UI for Blazor, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

## Blazor Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the `MarkerType` property to `Circle` enum value.

The colors of the markers are also managed by setting the [`MarkerBrushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerBrushes) and [`MarkerOutlines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerOutlines) properties in the sample below. The markers and [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) is configurable in this sample by using the drop-downs as well.

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
            DropDownValues="@(new string[] { "Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None" })"
            DropDownNames="@(new string[] { "Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None" })"
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

## Blazor Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  `MarkerTemplate` property of a series rendered in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control as it is demonstrated in example below.

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

- [`MarkerBrushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerBrushes)
- [`MarkerOutlines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerOutlines)
- `MarkerType`
- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
