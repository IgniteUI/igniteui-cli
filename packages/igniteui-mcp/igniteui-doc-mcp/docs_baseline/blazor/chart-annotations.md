---
title: Blazor Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Annotations
_keywords: Blazor Charts, Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Annotations
_premium: true
---

# Blazor Chart Annotations

The Blazor chart's hover interactions and annotations are implemented through hover interaction layers, which are series that are added to the series collection. These layers are dependent on the cursor position. Each of these annotation layers provides a different hover interaction that may be used individually or combined with others to provide powerful hover interactions.

## Blazor Annotations Example

The following example demonstrates the annotation layers that are available on the Blazor chart. Click on the checkboxes to turn each layer on and off.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
            <label class="options-label">Annotations: </label>
            <label class="options-item">
                <input type="checkbox" @onchange="OnCrosshairsVisibleCheckboxChange" checked="@CrosshairsVisible" /> Crosshair
            </label>
            <label class="options-item">
                <input type="checkbox" @onchange="OnCalloutsVisibleCheckboxChange" checked="@CalloutsVisible" /> Callouts
            </label>
            <label class="options-item">
                <input type="checkbox" @onchange="OnFinalValuesCheckboxChange" checked="@FinalValuesVisible" /> Final Values
            </label>
            <label class="options-item">
                <input type="checkbox" @onchange="OnMarkersVisibleCheckBoxChange" checked="@MarkersVisible" /> Markers
            </label>
    </div>

    <div class="container vertical">
        @if (Data != null)
        {
            <IgbCategoryChart Height="100%" Width="100%"
                           @ref="Chart"
                           DataSource="Data"
                           ChartType="CategoryChartType.Line"
                           Subtitle="Renewable Electricity Generated"
                           YAxisTitle="TWh"
                           Thickness="2"
                           CrosshairsSnapToData="true"
                           CrosshairsDisplayMode="@CrosshairMode"
                           CrosshairsAnnotationEnabled="@CrosshairsVisible"
                           FinalValueAnnotationsVisible="@FinalValuesVisible"
                           YAxisLabelLocation="YAxisLabelLocation.OutsideRight"
                           CalloutsVisible="@CalloutsVisible"
                           CalloutsYMemberPath="Value"
                           CalloutsXMemberPath="Index"
                           CalloutsLabelMemberPath="Label"
                           CalloutsDataSource="CalloutData"
                           ExcludedProperties="@(new string[] { "China", "Europe" })"
                           ComputedPlotAreaMarginMode=ComputedPlotAreaMarginMode.Series>
            </IgbCategoryChart>
        }
    </div>
</div>

@code {

    private List<EnergyRenewableInfo> Data = new EnergyRenewableData();
    private List<CalloutInfo> CalloutData = new List<CalloutInfo>();

    private IgbCategoryChart _Chart;
    private IgbCategoryChart Chart
    {
        get { return _Chart; }
        set { _Chart = value;
            Chart.MarkerTypes.Add(MarkerType.Circle);
            StateHasChanged(); }
    }
    private bool MarkersVisible = true;
    private bool FinalValuesVisible = true;
    private bool CalloutsVisible = true;
    private bool CrosshairsVisible = true;

    private CrosshairsDisplayMode CrosshairMode = CrosshairsDisplayMode.Both;

    private void OnMarkersVisibleCheckBoxChange(ChangeEventArgs args)
    {
        Chart.MarkerTypes.Clear();
        bool value = args.Value != null ? (bool)args.Value : false;
        if (value == true)
        {
            Chart.MarkerTypes.Add(MarkerType.Automatic);
        }
        else {
            Chart.MarkerTypes.Add(MarkerType.None);
        }
        this.MarkersVisible = value;
    }
    private void OnFinalValuesCheckboxChange(ChangeEventArgs args)
    {
        this.FinalValuesVisible = (bool)args.Value;
    }
    private void OnCalloutsVisibleCheckboxChange(ChangeEventArgs args)
    {
        this.CalloutsVisible = (bool)args.Value;
    }
    private void OnCrosshairsVisibleCheckboxChange(ChangeEventArgs args)
    {
        bool isVisible = (bool)args.Value;
        this.CrosshairMode = isVisible ? CrosshairsDisplayMode.Both : CrosshairsDisplayMode.None;
    }
    protected override void OnInitialized()
    {
        for (int i = 0; i < this.Data.Count; i++)
        {
            CalloutData.Add(
                new CalloutInfo {
                    Index = i, Label =
                    this.Data[i].USA + " " + "TWh",
                    Value = this.Data[i].USA });
        }
    }

    public class CalloutInfo
    {
        public int Index { get; set; }
        public int Value { get; set; }
        public string Label { get; set; }
    }
}
```


<div class="divider--half"></div>

Like this sample? Get access to our complete Blazor toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-blazor/download">Download it for free.</a>

## Blazor Crosshair Layer

The [`IgbCrosshairLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCrosshairLayer.html) renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines.

Crosshair types include:

- Horizontal
- Vertical
- Both

The chart's crosshairs can also be configured to snap to data points by setting the [`CrosshairsSnapToData`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_CrosshairsSnapToData) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

You can configure the crosshair layer so that the layer will only display on one specific series, as by default they will target all series in the chart control. To achieve this, set the [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCrosshairLayer.html#IgniteUI_Blazor_Controls_IgbCrosshairLayer_TargetSeries) property.

By default, the color of the crosshair lines is a lighter color than the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the [`Brush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Brush) property of the Crosshair Layer.

The following example shows how to configure the crosshair layer but targeting a single series, setting the type to vertical and styling the brush color.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
        <IgbDataChart Height="100%" Width="100%" Subtitle="Renewable Energy Generated">
            <IgbCategoryXAxis Name="xAxis" DataSource="Data" Label="Year" />
            <IgbNumericYAxis Name="yAxis" Title="TWh" LabelLocation="AxisLabelsLocation.OutsideRight" />

            <IgbLineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ValueMemberPath="USA" />

            <IgbCrosshairLayer HorizontalLineVisibility="Visibility.Collapsed" Brush="DodgerBlue" />
        </IgbDataChart>
        }
    </div>
</div>

@code {

    private List<EnergyRenewableInfo> Data = new EnergyRenewableData();

}
```


<div class="divider--half"></div>

## Blazor Final Value Layer

The [`IgbFinalValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinalValueLayer.html) of the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control provides a quick view along the axis of the ending value displayed in a series.

You can configure this annotation to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCrosshairLayer.html#IgniteUI_Blazor_Controls_IgbCrosshairLayer_TargetSeries) property.

You can also customize this annotation by setting the following properties:

- [`AxisAnnotationBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinalValueLayer.html#IgniteUI_Blazor_Controls_IgbFinalValueLayer_AxisAnnotationBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`AxisAnnotationTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinalValueLayer.html#IgniteUI_Blazor_Controls_IgbFinalValueLayer_AxisAnnotationTextColor): This property is used to choose the brush for the annotation's text color.
- [`AxisAnnotationOutline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinalValueLayer.html#IgniteUI_Blazor_Controls_IgbFinalValueLayer_AxisAnnotationOutline): This property is used to choose the brush for the annotation's outline color.

The following example demonstrates how to style the final value layer annotation by setting the properties listed above.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
        <IgbDataChart Height="100%" Width="100%" Subtitle="Renewable Energy Generated">
            <IgbCategoryXAxis Name="xAxis" DataSource="Data" Label="Year" />
            <IgbNumericYAxis Name="yAxis" Title="TWh" LabelLocation="AxisLabelsLocation.OutsideRight" />

            <IgbLineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ValueMemberPath="USA" />

            <IgbFinalValueLayer AxisAnnotationBackground="Orange" AxisAnnotationTextColor="Black" AxisAnnotationOutline="Black"/>
        </IgbDataChart>
        }
    </div>
</div>

@code {

    private List<EnergyRenewableInfo> Data = new EnergyRenewableData();

}
```


<div class="divider--half"></div>

## Blazor Callout Layer

The [`IgbCalloutLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html) displays annotations from existing or new data on the chart control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users.

You can configure the callouts to target a specific series if you want to have multiple callout layers present with different configurations. This can be done by setting the [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_TargetSeries) property.

You can also customize this annotation by setting the following properties:

- [`CalloutLeaderBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_CalloutLeaderBrush): This property is used to choose the brush for the leader lines for the callouts for the layer.
- [`CalloutOutline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_CalloutOutline): This property is used to choose the brush for the annotation's outline color.
- [`CalloutBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_CalloutBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`CalloutTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_CalloutTextColor): This property is used to choose the brush for the annotation's text color.
- [`CalloutStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_CalloutStrokeThickness): This property is used to choose the thickness for the callout backing.
- [`CalloutCornerRadius`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_CalloutCornerRadius): This property is used to curve the corners of the callouts.
- [`AllowedPositions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_AllowedPositions): This property is used to choose which positions that the callout layer is allowed to use. eg. top, bottom

The following example demonstrates how to style the callout layer annotations by setting the properties listed above:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
    </div>
    <div class="container vertical fill">
        <IgbDataChart
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        Name="chart"
        @ref="chart">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="CountryRenewableElectricity"
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="TWh"
            LabelLocation="AxisLabelsLocation.OutsideRight">
            </IgbNumericYAxis>

            <IgbLineSeries
            Name="lineSeries1"
            @ref="lineSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="America"
            Brush="#8961a9"
            MarkerOutline="#8961a9"
            ShouldHideAutoCallouts="false">
            </IgbLineSeries>

            <IgbCalloutLayer
            Name="CalloutLayer1"
            @ref="calloutLayer1"
            IsAutoCalloutBehaviorEnabled="true"
            CalloutLeaderBrush="#8961a9"
            CalloutOutline="#8961a9"
            CalloutBackground="white"
            CalloutTextColor="#8961a9"
            CalloutStrokeThickness="1"
            CalloutCollisionMode="CalloutCollisionMode.Greedy">
            </IgbCalloutLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var lineSeries1 = this.lineSeries1;
        var calloutLayer1 = this.calloutLayer1;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbLineSeries lineSeries1;
    private IgbCalloutLayer calloutLayer1;

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

<!-- Blazor -->

### Timeline Styling

The following example demonstrates how to style the data chart as a timeline with annotations by setting the [`AllowedPositions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html#IgniteUI_Blazor_Controls_IgbCalloutLayer_AllowedPositions) properties listed above:

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


<!-- end: Blazor -->

## API References

The following is a list of API members mentioned in the above sections:

- [`CrosshairsSnapToData`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_CrosshairsSnapToData)
- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
