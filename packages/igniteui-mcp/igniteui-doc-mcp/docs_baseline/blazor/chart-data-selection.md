---
title: Blazor Chart Data Selection | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Blazor chart with the data selection!
_keywords: Blazor charts, chart data, selection, data selection, Ignite UI for Blazor, Infragistics
_license: commercial
_language: en
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Selection
_premium: true
---

# Blazor Chart Selection

The Ignite UI for Blazor selection feature in Blazor {ComponentTitle} allows users to interactively select, highlight, outline and vice-versa deselect single or multiple series within a chart. This provides many different possibilities with how users interact with the data presented in more meaningful ways.

## Configuring Selection

The default behavior [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_SelectionMode) turned off and requires opting into one of the following options. There are several selection modes available in the `{ComponentName}`:

- **Auto**
- **None**
- **Brighten**
- **FadeOthers**
- **GrayscaleOthers**
- **FocusColorThickOutline**
- **FocusColorOutline**
- **SelectionColorThickOutline**
- **SelectionColorOutline**
- **FocusColorFill**
- **SelectionColorFill**
- **ThickOutline**

`Brighten` will fade the selected item while `FadeOthers` will cause the opposite effect occur.
`GrayscaleOthers` will behave similarly to `FadeOthers` but instead show a gray color to the rest of the series. Note this will override any [`SelectionBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_SelectionBrush) setting.
`SelectionColorOutline` and `SelectionColorThickOutline` will draw a border around the series.

In conjunction, a [`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_SelectionBehavior) is available to provide greater control on which items get selected. The default behavior for Auto is `PerSeriesAndDataItemMultiSelect`.

- **Auto**
- **PerDataItemMultiSelect**
- **PerDataItemSingleSelect**
- **PerSeriesAndDataItemMultiSelect**
- **PerSeriesAndDataItemSingleSelect**
- **PerSeriesAndDataItemGlobalSingleSelect**
- **PerSeriesMultiSelect**
- **PerSeriesSingleSelect**

## Configuring Selection via Color Fill

The following example shows the combination of both `SelectionColorFill` and `Auto` selection behavior aka `PerSeriesAndDataItemMultiSelect`. Color Fills provide a useful visual cue as it changes the entire series item's back color. By clicking each item you'll see the item change from green to purple.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Average Temperature Range in New York
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="TemperatureAverageData"
        YAxisTitle="Temperature in Degrees Celsius"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        ToolTipType="ToolTipType.None"
        SelectionMode="SeriesSelectionMode.SelectionColorFill"
        SelectionBehavior="SeriesSelectionBehavior.Auto"
        SelectionBrush="purple"
        FocusBrush="purple">
        </IgbCategoryChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;

    }

    private IgbCategoryChart chart;

    private TemperatureAverageData _temperatureAverageData = null;
    public TemperatureAverageData TemperatureAverageData
    {
        get
        {
            if (_temperatureAverageData == null)
            {
                _temperatureAverageData = new TemperatureAverageData();
            }
            return _temperatureAverageData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class TemperatureAverageDataItem
{
    public string Month { get; set; }
    public double Temperature { get; set; }
}

public class TemperatureAverageData
    : List<TemperatureAverageDataItem>
{
    public TemperatureAverageData()
    {
        this.Add(new TemperatureAverageDataItem() { Month = @"Jan", Temperature = 3 });
        this.Add(new TemperatureAverageDataItem() { Month = @"Feb", Temperature = 4 });
        this.Add(new TemperatureAverageDataItem() { Month = @"Mar", Temperature = 9 });
        // ... 9 more items
    }
}
```


## Configuring Multiple Selection

Other selection modes offer various methods of selection. For example using [`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_SelectionBehavior) with `PerDataItemMultiSelect` will affect all series in entire category when multiple series are present while allowing selection across categories. Compared to `PerDataItemSingleSelect`, only a single category of items can be selected at a time. This is useful if multiple series are bound to different datasources and provides greater control of selection between categories.
`PerSeriesAndDataItemGlobalSingleSelect` allows single series selection across all categories at a time.

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
            PropertyPath="SelectionMode"
            Name="SelectionModeEditor"
            @ref="selectionModeEditor"
            Label="Selection Mode: "
            PrimitiveValue="@("SelectionColorFill")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="SelectionBehavior"
            Name="SelectionBehaviorEditor"
            @ref="selectionBehaviorEditor"
            Label="Selection Behavior: "
            PrimitiveValue="@("PerSeriesAndDataItemGlobalSingleSelect")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Highest Grossing Movie Franchises
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
        ChartType="CategoryChartType.Column"
        DataSource="EnergyRenewableConsumption"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        SelectionMode="SeriesSelectionMode.SelectionColorFill"
        SelectionBehavior="SeriesSelectionBehavior.PerSeriesAndDataItemGlobalSingleSelect"
        SelectionBrush="orange"
        FocusBrush="orange">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditor = this.propertyEditor;
        var selectionModeEditor = this.selectionModeEditor;
        var selectionBehaviorEditor = this.selectionBehaviorEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription selectionModeEditor;
    private IgbPropertyEditorPropertyDescription selectionBehaviorEditor;
    private IgbCategoryChart chart;

    private EnergyRenewableConsumption _energyRenewableConsumption = null;
    public EnergyRenewableConsumption EnergyRenewableConsumption
    {
        get
        {
            if (_energyRenewableConsumption == null)
            {
                _energyRenewableConsumption = new EnergyRenewableConsumption();
            }
            return _energyRenewableConsumption;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EnergyRenewableConsumptionItem
{
    public string Location { get; set; }
    public double Year { get; set; }
    public double Hydro { get; set; }
    public double Solar { get; set; }
    public double Wind { get; set; }
    public double Other { get; set; }
}

public class EnergyRenewableConsumption
    : List<EnergyRenewableConsumptionItem>
{
    public EnergyRenewableConsumption()
    {
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"China", Year = 2019, Hydro = 1269.5, Solar = 223, Wind = 405.2, Other = 102.8 });
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"Europe", Year = 2019, Hydro = 632.54, Solar = 154, Wind = 461.3, Other = 220.3 });
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"USA", Year = 2019, Hydro = 271.16, Solar = 108, Wind = 303.4, Other = 78.34 });
        // ... 2 more items
    }
}
```


## Configuring Outline Selection

When [`FocusBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_FocusBrush) is applied, selected series will appear with a border when the [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_SelectionMode) property is set to one of the focus options.

## Radial Series Selection

This example demonstrates another series type via the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) where each radial series can be selected with different colors.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Ronaldo vs Messi Player Stats
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
        @ref="chart"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        SelectionMode="SeriesSelectionMode.SelectionColorFill"
        SelectionBehavior="SeriesSelectionBehavior.PerSeriesMultiSelect">
            <IgbCategoryAngleAxis
            Name="angleAxis"
            @ref="angleAxis"
            DataSource="FootballPlayerStats"
            Label="Attribute">
            </IgbCategoryAngleAxis>

            <IgbNumericRadiusAxis
            Name="radiusAxis"
            @ref="radiusAxis"
            InnerRadiusExtentScale="0.1"
            Interval="2"
            MinimumValue="0"
            MaximumValue="10">
            </IgbNumericRadiusAxis>

            <IgbRadialColumnSeries
            Name="RadialColumnSeries1"
            @ref="radialColumnSeries1"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Ronaldo"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="3"
            Title="Ronaldo"
            SelectionBrush="yellow">
            </IgbRadialColumnSeries>

            <IgbRadialColumnSeries
            Name="RadialColumnSeries2"
            @ref="radialColumnSeries2"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Messi"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="3"
            Title="Messi"
            SelectionBrush="cyan">
            </IgbRadialColumnSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var angleAxis = this.angleAxis;
        var radiusAxis = this.radiusAxis;
        var radialColumnSeries1 = this.radialColumnSeries1;
        var radialColumnSeries2 = this.radialColumnSeries2;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryAngleAxis angleAxis;
    private IgbNumericRadiusAxis radiusAxis;
    private IgbRadialColumnSeries radialColumnSeries1;
    private IgbRadialColumnSeries radialColumnSeries2;

    private FootballPlayerStats _footballPlayerStats = null;
    public FootballPlayerStats FootballPlayerStats
    {
        get
        {
            if (_footballPlayerStats == null)
            {
                _footballPlayerStats = new FootballPlayerStats();
            }
            return _footballPlayerStats;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FootballPlayerStatsItem
{
    public string Attribute { get; set; }
    public double Ronaldo { get; set; }
    public double Messi { get; set; }
}

public class FootballPlayerStats
    : List<FootballPlayerStatsItem>
{
    public FootballPlayerStats()
    {
        this.Add(new FootballPlayerStatsItem() { Attribute = @"Dribbling", Ronaldo = 8, Messi = 10 });
        this.Add(new FootballPlayerStatsItem() { Attribute = @"Passing", Ronaldo = 8, Messi = 10 });
        this.Add(new FootballPlayerStatsItem() { Attribute = @"Finishing", Ronaldo = 10, Messi = 10 });
        // ... 5 more items
    }
}
```


## Programmatic Selection

Chart Selection can also be configured in code where selected items in the chart can be seen on startup or runtime. This can be achieved by adding items to the `SelectedSeriesCollection` of the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html). The `Matcher` property of the [`IgbChartSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChartSelection.html) object allows for selecting a series based on a "matcher", ideal when you do not have access to the actual series from the chart. If you know the properties that your datasource contains, you can use the `ValueMemberPath` that the series would be.

The matcher is ideal for using in charts, such as the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) when you do not have access to the actual series, like the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html). In this case you if you know the properties that your datasource contained you can surmise the ValueMemberPaths that the series would have. For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to highlight the series bound to Solar values, you can add a ChartSelection object to the [`SelectedSeriesItems`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_SelectedSeriesItems) collection using a matcher with the following properties set

For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to select the series bound to Solar values, you can add a ChartSelection object to the SelectedSeriesItems collection using a matcher with the following properties set.

```razor
@using IgniteUI.Blazor.Controls
@using System
@using System.Collections.Generic
@using System.Collections

<div class="container vertical">
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
        DataSource="EnergyRenewableConsumption"
        ChartType="CategoryChartType.Column"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        YAxisTitle="TWh"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        SelectionMode="SeriesSelectionMode.SelectionColorFill"
        SelectionBehavior="SeriesSelectionBehavior.Auto"
        SelectionBrush="orange">
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

        if (firstRender) {
            this.SelectionMatcherOnViewInit();
        }
    }

    private IgbLegend legend;
    private IgbCategoryChart chart;

    private System.Threading.Timer _timer;

    public void SelectionMatcherOnViewInit()
    {
    	_timer = new System.Threading.Timer((_) =>
    	{
    		addSelection();
    	}, null, 1000, 0);
    	_timer = null;
    }

    private void addSelection()
    {
    	var chart = this.chart;
    	//var data = (IList)chart.DataSource;
    	var data = this.EnergyRenewableConsumption;
    	IgbChartSelection selection = new IgbChartSelection();
    	selection.Item = data[1];
    	IgbSeriesMatcher matcher = new IgbSeriesMatcher();
    	matcher.MemberPath = "Hydro";
    	matcher.MemberPathType = "ValueMemberPath";
    	selection.Matcher = matcher;

    	chart.SelectedSeriesItems.Add(selection);

    	IgbChartSelection selection2 = new IgbChartSelection();
    	selection2 = new IgbChartSelection();
    	selection2.Item = data[2];
    	IgbSeriesMatcher matcher2 = new IgbSeriesMatcher();
    	matcher2 = new IgbSeriesMatcher();
    	matcher2.MemberPath = "Wind";
    	matcher2.MemberPathType = "ValueMemberPath";
    	selection2.Matcher = matcher2;

    	chart.SelectedSeriesItems.Add(selection2);
    }

    private EnergyRenewableConsumption _energyRenewableConsumption = null;
    public EnergyRenewableConsumption EnergyRenewableConsumption
    {
        get
        {
            if (_energyRenewableConsumption == null)
            {
                _energyRenewableConsumption = new EnergyRenewableConsumption();
            }
            return _energyRenewableConsumption;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EnergyRenewableConsumptionItem
{
    public string Location { get; set; }
    public double Year { get; set; }
    public double Hydro { get; set; }
    public double Solar { get; set; }
    public double Wind { get; set; }
    public double Other { get; set; }
}

public class EnergyRenewableConsumption
    : List<EnergyRenewableConsumptionItem>
{
    public EnergyRenewableConsumption()
    {
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"China", Year = 2019, Hydro = 1269.5, Solar = 223, Wind = 405.2, Other = 102.8 });
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"Europe", Year = 2019, Hydro = 632.54, Solar = 154, Wind = 461.3, Other = 220.3 });
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"USA", Year = 2019, Hydro = 271.16, Solar = 108, Wind = 303.4, Other = 78.34 });
        // ... 2 more items
    }
}
```


## API References

The following is a list of API members mentioned in the above sections:

| [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) Properties                    | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) Properties |
| ----------------------------------------------|---------------------------|
|                                               |                           |
