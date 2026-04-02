---
title: Blazor Chart Features | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Features
_keywords: Blazor Charts, Features, Infragistics
_license: commercial
mentionedTypes: ["FinancialChart", "CategoryChart", "XamDataChart"]
_tocName: Chart Features
---

# Blazor Chart Features

The Ignite UI for Blazor Charts allow you to display many different features to portray the full data story to be told with your chart. Each of these features are fully customizable, and can be styled to suit your design needs - allowing you full control. Interactions such as highlighting and annotations allow you to call out important data details allowing for a deeper data analysis within your chart.

The Blazor Charts offer the following chart features:

## Axis

Modify or customize all aspects of both the X-Axis and Y-Axis using the different axis properties. You can display gridlines, customize the style of tickmarks, change axis titles, and even modify axis locations and crossing values. You can learn more about customizations of the Blazor chart's [Axis Gridlines](features/chart-axis-gridlines.md), [Axis Layouts](features/chart-axis-layouts.md), and [Axis Options](features/chart-axis-options.md) topic.

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

## Annotations

These additional layers are on top of the chart which are mouse / touch dependent. Used individually or combined, they provide powerful interactions that help to highlight certain values within the chart. You can learn more about this feature in the [Chart Annotations](features/chart-annotations.md) topic.

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

## Animations

Animate your chart as it loads a new data source by enabling animations. These are customizable by setting different types of animations and the speed at which those animations take place. You can learn more about this feature in the [Chart Animations](features/chart-animations.md) topic.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <span class="options-label">Transition Type </span>
        <select @bind="@SelectedTransition">
            <option>@CategoryTransitionInMode.AccordionFromBottom</option>
            <option>@CategoryTransitionInMode.AccordionFromCategoryAxisMaximum</option>
            <option>@CategoryTransitionInMode.AccordionFromCategoryAxisMinimum</option>
            <option>@CategoryTransitionInMode.AccordionFromLeft</option>
            <option>@CategoryTransitionInMode.AccordionFromRight</option>
            <option>@CategoryTransitionInMode.AccordionFromTop</option>
            <option>@CategoryTransitionInMode.AccordionFromValueAxisMaximum</option>
            <option>@CategoryTransitionInMode.AccordionFromValueAxisMinimum</option>
            <option>@CategoryTransitionInMode.Expand</option>
            <option>@CategoryTransitionInMode.FromZero</option>
            <option>@CategoryTransitionInMode.SweepFromBottom</option>
            <option>@CategoryTransitionInMode.SweepFromCategoryAxisMaximum</option>
            <option>@CategoryTransitionInMode.SweepFromCategoryAxisMinimum</option>
            <option>@CategoryTransitionInMode.SweepFromCenter</option>
            <option>@CategoryTransitionInMode.SweepFromLeft</option>
            <option>@CategoryTransitionInMode.SweepFromRight</option>
            <option>@CategoryTransitionInMode.SweepFromTop</option>
            <option>@CategoryTransitionInMode.SweepFromValueAxisMaximum</option>
            <option>@CategoryTransitionInMode.SweepFromValueAxisMinimum</option>
            <option>@CategoryTransitionInMode.Auto</option>
        </select>
        <label class="options-value" style="width: 75px">@IntervalLabel</label>
        <input class="options-slider" type="range" min="50" max="2000" step="50"
               value=@TransitionInInterval @onchange="OnTransitionIntervalChange" />
        <button @onclick="OnReloadChart">Reload Chart</button>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbCategoryChart Height="100%" Width="100%"
                @ref="Chart"
                DataSource="Data"
                ChartType="CategoryChartType.Line"
                IsTransitionInEnabled="true"
                TransitionInMode="@SelectedTransition"
                TransitionInDuration="@TransitionInInterval"
                IsHorizontalZoomEnabled="false"
                IsVerticalZoomEnabled="false"
                YAxisTitle="TWh"
                YAxisTitleLeftMargin="10"
                YAxisTitleRightMargin="5"
                YAxisLabelLeftMargin="0"
                ComputedPlotAreaMarginMode=ComputedPlotAreaMarginMode.Series>
            </IgbCategoryChart>
        }
    </div>
</div>

@code {


    private int _transitionInterval = 1000; // milliseconds
    private int TransitionInInterval
    {
        get { return _transitionInterval; }
        set
        {
            _transitionInterval = value;
            StateHasChanged();
        }
    }
    private string IntervalLabel
    {
        get
        {
            return (_transitionInterval).ToString("0") + "ms";
        }
    }
    private CategoryTransitionInMode _selectedTransition;
    private CategoryTransitionInMode SelectedTransition
    {
        get { return _selectedTransition; }
        set
        {
            _selectedTransition = value;
            StateHasChanged();
        }
    }
    private IgbCategoryChart _Chart;
    private IgbCategoryChart Chart
    {
        get { return _Chart; }
        set { _Chart = value;
            StateHasChanged();
        }
    }

    private List<EnergyRenewableInfo> Data = new EnergyRenewableData();

    private void OnTransitionIntervalChange(ChangeEventArgs args)
    {
        this.TransitionInInterval = int.Parse(args.Value.ToString());
    }

    private void OnReloadChart()
    {
        this.Chart.ReplayTransitionIn();
    }
}
```


<div class="divider--half"></div>

## Highlighting

Bring focus to visuals such as lines, columns, or markers by highlighting them as the mouse hovers over the data items. This features is enabled on all chart types. You can learn more about this feature in the [Chart Highlighting](features/chart-highlighting.md) topic.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical sample">

    <div class="options horizontal">
        <label class="options-label" style="margin-left: 0.25rem;">Highlight Target:</label>
        <select @onchange="OnHighlightingTargetChanged" style="width: 7rem; margin-right: 1rem;">
            <option>Series</option>
            <option>Item</option>
            <option>Category</option>
            <option>None</option>
        </select>

        <label class="options-label">Mode:</label>
        <select @bind="@HighlightingMode" style="width: 7rem; margin-right: 1rem;">
            <option>@SeriesHighlightingMode.Auto</option>
            <option>@SeriesHighlightingMode.Brighten</option>
            <option>@SeriesHighlightingMode.BrightenSpecific</option>
            <option>@SeriesHighlightingMode.FadeOthers</option>
            <option>@SeriesHighlightingMode.FadeOthersSpecific</option>
            <option>@SeriesHighlightingMode.None</option>
        </select>

        <label class="options-label">Behavior:</label>
        <select @bind="@HighlightingBehavior" style="width: 7rem; margin-right: 1rem;" >
            <option>@SeriesHighlightingBehavior.Auto</option>
            <option>@SeriesHighlightingBehavior.DirectlyOver</option>
            <option>@SeriesHighlightingBehavior.NearestItems</option>
            <option>@SeriesHighlightingBehavior.NearestItemsAndSeries</option>
            <option>@SeriesHighlightingBehavior.NearestItemsRetainMainShapes</option>
        </select>

        <label class="options-label">Legend:</label>
        <select @bind="@HighlightingLegend" style="width: 7rem; margin-right: 1rem;"
                title="Chart will highlight series when you hover over legend items">
            <option>@LegendHighlightingMode.Auto</option>
            <option>@LegendHighlightingMode.MatchSeries</option>
            <option>@LegendHighlightingMode.None</option>
        </select>
    </div>

    <div class="options vertical">
        <label class="legend-title">Average Temperatures in the U.S. Cities</label>
        <div class="legend">
            <IgbLegend @ref="Legend" Orientation="LegendOrientation.Horizontal" />
        </div>
    </div>

    <div class="container vertical">
        <IgbCategoryChart Height="100%" Width="100%"
                       Legend="@Legend"
                       DataSource="Data"
                       ChartType="CategoryChartType.Column"
                       IsCategoryHighlightingEnabled="@IsCategoryHighlighting"
                       IsItemHighlightingEnabled="@IsItemHighlighting"
                       IsSeriesHighlightingEnabled="@IsSeriesHighlighting"
                       HighlightingMode="@HighlightingMode"
                       HighlightingBehavior="@HighlightingBehavior"
                       LegendHighlightingMode="@HighlightingLegend"
                       YAxisTitle="Temperatures in Celsius"
                       YAxisMinimumValue="0"
                       XAxisInterval="1">
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

    private bool IsSeriesHighlighting = true;
    private bool IsItemHighlighting = false;
    private bool IsCategoryHighlighting = false;
    private LegendHighlightingMode HighlightingLegend = LegendHighlightingMode.Auto;
    private SeriesHighlightingMode HighlightingMode = SeriesHighlightingMode.Auto;
    private SeriesHighlightingBehavior HighlightingBehavior = SeriesHighlightingBehavior.Auto;

    private List<AverageTemperature> Data = new AverageTemperatureData();

    private void OnHighlightingTargetChanged(ChangeEventArgs args)
    {
        var highlighingTarget = (string)args.Value;
        if (highlighingTarget == "Series")
        {
            this.IsItemHighlighting = false;
            this.IsSeriesHighlighting = true;
            this.IsCategoryHighlighting = false;
        }
        else if(highlighingTarget == "Item")
        {
            this.IsItemHighlighting = true;
            this.IsSeriesHighlighting = false;
            this.IsCategoryHighlighting = false;
        }
        else if (highlighingTarget == "Category")
        {
            this.IsItemHighlighting = false;
            this.IsSeriesHighlighting = false;
            this.IsCategoryHighlighting = true;
        }
        else
        {
            this.IsItemHighlighting = false;
            this.IsSeriesHighlighting = false;
            this.IsCategoryHighlighting = false;
        }
    }

    public class AverageTemperature
    {
        public string Month { get; set; }
        public double NewYork { get; set; }
        public double LosAngeles { get; set; }
    }

    public class AverageTemperatureData : List<AverageTemperature>
    {
        public AverageTemperatureData()
        {
            this.Add(new AverageTemperature { NewYork = 10.6, LosAngeles = 28.3, Month = "JAN" });
            this.Add(new AverageTemperature { NewYork = 7.8,  LosAngeles = 31.1, Month = "FEB" });
            this.Add(new AverageTemperature { NewYork = 12.2, LosAngeles = 27.8, Month = "MAR" });
            // ... 9 more items
        }
    }
}
```


<div class="divider--half"></div>

## Markers

Identify data points quickly, even if the value falls between major gridlines with the use of markers on the chart series. These are fully customizable in style, color, and shape. You can learn more about this feature in the [Chart Markers](features/chart-markers.md) topic.

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

## Navigation

You can navigate the chart by zooming and panning with the mouse, keyboard, and touch interactions. You can learn more about this feature in the [Chart Navigation](features/chart-navigation.md) topic.

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

## Overlays

Overlays allows you to annotate important values and thresholds by plotting horizontal or vertical lines in charts. You can learn more about this feature in the [Chart Overlays](features/chart-overlays.md) topic.

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

## Performance

Blazor charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the charts and they should be considered when optimizing performance in your application. You can learn more about this feature in the [Chart Performance](features/chart-performance.md) topic.

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

## Tooltips

Display all information relevant to the particular series type via Tooltips. There are different tooltips that can be enabled, such as Item-level and Category-level tooltips. You can learn more about this feature in the [Chart Tooltips](features/chart-tooltips.md) topic.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="ToolTipType"
            Name="ToolTipTypeEditor"
            @ref="toolTipTypeEditor"
            Label="ToolTip Type: "
            PrimitiveValue="@("Data")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Highest Grossing Movie Franchises
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="HighestGrossingMovies"
        XAxisInterval="1"
        YAxisTitle="Billions of U.S. Dollars"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        CrosshairsSnapToData="true">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var toolTipTypeEditor = this.toolTipTypeEditor;
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription toolTipTypeEditor;
    private IgbLegend legend;
    private IgbCategoryChart chart;

    private HighestGrossingMovies _highestGrossingMovies = null;
    public HighestGrossingMovies HighestGrossingMovies
    {
        get
        {
            if (_highestGrossingMovies == null)
            {
                _highestGrossingMovies = new HighestGrossingMovies();
            }
            return _highestGrossingMovies;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HighestGrossingMoviesItem
{
    public string Franchise { get; set; }
    public double TotalRevenue { get; set; }
    public double HighestGrossing { get; set; }
}

public class HighestGrossingMovies
    : List<HighestGrossingMoviesItem>
{
    public HighestGrossingMovies()
    {
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Marvel Universe", TotalRevenue = 22.55, HighestGrossing = 2.8 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Star Wars", TotalRevenue = 10.32, HighestGrossing = 2.07 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Harry Potter", TotalRevenue = 9.19, HighestGrossing = 1.34 });
        // ... 3 more items
    }
}
```


<div class="divider--half"></div>

## Trendlines

Use trendlines to identify a trend or find patterns in your data. There are many different trendlines supported by the Blazor chart, such as CubicFit and LinearFit. You can learn more about this feature in the [Chart Trendlines](features/chart-trendlines.md) topic.

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Trendlines: </label>
        <label class="options-item">
            <select @bind="@TrendLineType">
                <option>@TrendLineType.CubicFit</option>
                <option>@TrendLineType.LinearFit</option>
                <option>@TrendLineType.QuinticFit</option>
                <option>@TrendLineType.QuarticFit</option>
                <option>@TrendLineType.ExponentialFit</option>
                <option>@TrendLineType.PowerLawFit</option>
                <option>@TrendLineType.LogarithmicFit</option>
                <option>@TrendLineType.CumulativeAverage</option>
                <option>@TrendLineType.ExponentialAverage</option>
                <option>@TrendLineType.SimpleAverage</option>
                <option>@TrendLineType.ModifiedAverage</option>
                <option>@TrendLineType.WeightedAverage</option>
                <option>@TrendLineType.None</option>
            </select>
        </label>

    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                Height="100%"
                ChartType=FinancialChartType.Bar
                Thickness=2
                DataSource="Data"
                TrendLineType="@TrendLineType"
                TrendLineThickness=2
                TrendLinePeriod=10
                TrendLineBrushes="rgba(0, 101, 209, 1)"
                ChartTitle="Microsoft Trend"
                Subtitle="Between 2013 and 2017"
                ZoomSliderType="FinancialChartZoomSliderType.None"
                IsHorizontalZoomEnabled="false"
                IsVerticalZoomEnabled="false"/>
        }
    </div>
</div>

@code {

    protected StockPrice[] Data;
    protected TrendLineType TrendLineType = TrendLineType.QuinticFit;

    protected override async Task OnInitializedAsync()
    {
        this.Data = await StocksHistory.GetMicrosoftStock();
    }
}
```


<div class="divider--half"></div>

## API References

- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html)
