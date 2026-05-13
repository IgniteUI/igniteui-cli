---
title: Blazor Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Highlighting
_keywords: Blazor Charts, Highlighting, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Highlighting
_premium: true
---

## Blazor Chart Highlighting Example

The following example demonstrates the different highlighting options that are available on the Blazor chart.

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
            PropertyPath="HighlightingMode"
            Name="HighlightingModeEditor"
            @ref="highlightingModeEditor"
            Label="Highlighting Mode: "
            PrimitiveValue="@("FadeOthersSpecific")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="HighlightingBehavior"
            Name="HighlightingBehaviorEditor"
            @ref="highlightingBehaviorEditor"
            Label="Highlighting Behavior: "
            PrimitiveValue="@("NearestItemsAndSeries")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Average Temperature in Sydney
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        DataSource="TemperatureAnnotatedData"
        HighlightingMode="SeriesHighlightingMode.FadeOthersSpecific"
        HighlightingBehavior="SeriesHighlightingBehavior.NearestItemsAndSeries"
        YAxisMaximumValue="35"
        YAxisLabelLocation="YAxisLabelLocation.OutsideRight"
        ToolTipType="ToolTipType.None"
        IsTransitionInEnabled="false">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var highlightingModeEditor = this.highlightingModeEditor;
        var highlightingBehaviorEditor = this.highlightingBehaviorEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription highlightingModeEditor;
    private IgbPropertyEditorPropertyDescription highlightingBehaviorEditor;
    private IgbCategoryChart chart;

    private TemperatureAnnotatedData _temperatureAnnotatedData = null;
    public TemperatureAnnotatedData TemperatureAnnotatedData
    {
        get
        {
            if (_temperatureAnnotatedData == null)
            {
                _temperatureAnnotatedData = new TemperatureAnnotatedData();
            }
            return _temperatureAnnotatedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class TemperatureAnnotatedDataItem
{
    public double Index { get; set; }
    public string TempInfo { get; set; }
    public double Temperature { get; set; }
    public string Month { get; set; }
}

public class TemperatureAnnotatedData
    : List<TemperatureAnnotatedDataItem>
{
    public TemperatureAnnotatedData()
    {
        this.Add(new TemperatureAnnotatedDataItem() { Index = 0, TempInfo = @"27°C", Temperature = 27, Month = @"Jan" });
        this.Add(new TemperatureAnnotatedDataItem() { Index = 1, TempInfo = @"25°C", Temperature = 25, Month = @"Feb" });
        this.Add(new TemperatureAnnotatedDataItem() { Index = 2, TempInfo = @"21°C", Temperature = 21, Month = @"Mar" });
        // ... 9 more items
    }
}
```

<div class="divider--half"></div>

# Blazor Chart Highlighting Modes & Behaviors

All Blazor Charts support a variety of highlighting options. [`HighlightingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingMode) can be set to brighten or fade when the mouse is hovering over a series/data item rendered in the plot area. [`HighlightingBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingBehavior) can be set to directly over or the nearest data item to trigger the highlighting effect. Highlighting modes and behaviors is supported by the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html), [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html), and [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) controls and they have the same API for using the highlighting feature.

The following example demonstrates the [`HighlightingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingMode) Blazor chart.

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
            PropertyPath="HighlightingMode"
            Name="HighlightingModeEditor"
            @ref="highlightingModeEditor"
            Label="Highlighting Mode: "
            PrimitiveValue="@("BrightenSpecific")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        DataSource="TemperatureAnnotatedData"
        HighlightingMode="SeriesHighlightingMode.BrightenSpecific"
        ToolTipType="ToolTipType.None"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        IsTransitionInEnabled="false">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var highlightingModeEditor = this.highlightingModeEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription highlightingModeEditor;
    private IgbCategoryChart chart;

    private TemperatureAnnotatedData _temperatureAnnotatedData = null;
    public TemperatureAnnotatedData TemperatureAnnotatedData
    {
        get
        {
            if (_temperatureAnnotatedData == null)
            {
                _temperatureAnnotatedData = new TemperatureAnnotatedData();
            }
            return _temperatureAnnotatedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class TemperatureAnnotatedDataItem
{
    public double Index { get; set; }
    public string TempInfo { get; set; }
    public double Temperature { get; set; }
    public string Month { get; set; }
}

public class TemperatureAnnotatedData
    : List<TemperatureAnnotatedDataItem>
{
    public TemperatureAnnotatedData()
    {
        this.Add(new TemperatureAnnotatedDataItem() { Index = 0, TempInfo = @"27°C", Temperature = 27, Month = @"Jan" });
        this.Add(new TemperatureAnnotatedDataItem() { Index = 1, TempInfo = @"25°C", Temperature = 25, Month = @"Feb" });
        this.Add(new TemperatureAnnotatedDataItem() { Index = 2, TempInfo = @"21°C", Temperature = 21, Month = @"Mar" });
        // ... 9 more items
    }
}
```

The following example demonstrates the [`HighlightingBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingBehavior) Blazor chart.

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
            PropertyPath="HighlightingBehavior"
            Name="HighlightingBehaviorEditor"
            @ref="highlightingBehaviorEditor"
            Label="Highlighting Behavior: "
            PrimitiveValue="@("DirectlyOver")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        DataSource="TemperatureAnnotatedData"
        HighlightingMode="SeriesHighlightingMode.Brighten"
        HighlightingBehavior="SeriesHighlightingBehavior.DirectlyOver"
        ToolTipType="ToolTipType.None"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        IsTransitionInEnabled="false">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var highlightingBehaviorEditor = this.highlightingBehaviorEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription highlightingBehaviorEditor;
    private IgbCategoryChart chart;

    private TemperatureAnnotatedData _temperatureAnnotatedData = null;
    public TemperatureAnnotatedData TemperatureAnnotatedData
    {
        get
        {
            if (_temperatureAnnotatedData == null)
            {
                _temperatureAnnotatedData = new TemperatureAnnotatedData();
            }
            return _temperatureAnnotatedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class TemperatureAnnotatedDataItem
{
    public double Index { get; set; }
    public string TempInfo { get; set; }
    public double Temperature { get; set; }
    public string Month { get; set; }
}

public class TemperatureAnnotatedData
    : List<TemperatureAnnotatedDataItem>
{
    public TemperatureAnnotatedData()
    {
        this.Add(new TemperatureAnnotatedDataItem() { Index = 0, TempInfo = @"27°C", Temperature = 27, Month = @"Jan" });
        this.Add(new TemperatureAnnotatedDataItem() { Index = 1, TempInfo = @"25°C", Temperature = 25, Month = @"Feb" });
        this.Add(new TemperatureAnnotatedDataItem() { Index = 2, TempInfo = @"21°C", Temperature = 21, Month = @"Mar" });
        // ... 9 more items
    }
}
```

# Blazor Chart Legend Highlighting

All Blazor Charts support legend highlighting. [`LegendHighlightingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_LegendHighlightingMode) can enabled so that when mouse is hovering over a legend marker item then the rendered series will highlight in the plot area. Legend highlighting is supported by the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html), [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html), and [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) controls and they have the same API for using the highlighting feature.

The following example demonstrates the legend series highlighting Blazor chart.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
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
        HighlightingMode="SeriesHighlightingMode.Brighten"
        LegendHighlightingMode="LegendHighlightingMode.MatchSeries"
        IsTransitionInEnabled="false">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

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

## Highlight Layers

The Ignite UI for Blazor [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) can enable three types of highlighting when hovering over data items.

1. Series Highlighting will highlight the single data point represented by a marker or column when the pointer is positioned over it. This is enabled by setting the [`IsSeriesHighlightingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_IsSeriesHighlightingEnabled) property to true.

2. Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position. This is enabled by setting the [`IsItemHighlightingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_IsItemHighlightingEnabled) property to true.

3. Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position. This is enabled by setting the [`IsCategoryHighlightingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_IsCategoryHighlightingEnabled) property to true.

The following example demonstrates the different highlighting layers that are available on the Blazor chart.

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

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`HighlightingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingMode)
- [`HighlightingBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingBehavior)
- `LegendHighlightingBehavior`
- [`IsCategoryHighlightingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_IsCategoryHighlightingEnabled)
- [`IsItemHighlightingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_IsItemHighlightingEnabled)
- [`IsSeriesHighlightingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_IsSeriesHighlightingEnabled)
- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html)
