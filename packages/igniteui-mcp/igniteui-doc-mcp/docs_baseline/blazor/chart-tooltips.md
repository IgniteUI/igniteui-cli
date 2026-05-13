---
title: Blazor Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Tooltips
_keywords: Blazor Charts, Tooltips, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Tooltips
_premium: true
---

# Blazor Chart Tooltips

In Blazor charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html), [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html), and [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) controls.

## Blazor Chart Tooltip Types

Blazor Chart provide three types of tooltips that you can with tooltips enabled by setting the [`ToolTipType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ToolTipType) property. The following example shows the [Column Chart](../types/column-chart.md) with a combo-box that you can use to change type of tooltips.

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

The [`ToolTipType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ToolTipType) property is configurable and can be set to one of the following options:

| Property Value     | Description  |
| -------------------|----------------|
| `Default`  Tooltip | Display a tooltip for a single item when the pointer is positioned over it. |
| `Data` Tooltip | Display the data tooltips for all series in the chart. |
| `Item`  Tooltip    | Display a tooltip for each data item in the category that the pointer is positioned over. |
| `Category` Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over. |

<div class="divider--half"></div>

## Blazor Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of Blazor charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in Blazor [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control. Note that you can also apply the same logic to custom tooltips in Blazor [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) control.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options vertical">
        <span class="legend-title">Highest Grossing Movie Franchises</span>
        <div class="legend">
            <IgbLegend @ref="Legend" Orientation="LegendOrientation.Horizontal" />
        </div>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbCategoryChart Height="100%" Width="100%"
                           DataSource="Data"
                           IsTransitionInEnabled="true" XAxisInterval="1"
                           ChartType="CategoryChartType.Column"
                           ToolTipType="ToolTipType.None"
                           SeriesPointerEnterScript="onCategoryChatTooltipCreated"
                           SeriesAddedScript="onCategoryChatTooltipSeriesAdded">
            </IgbCategoryChart>
        }
    </div>
</div>

@code {

    private List<FilmFranchiseInfo> Data = new FilmFranchiseData();

    private IgbLegend _Legend;
    private IgbLegend Legend
    {
        get { return _Legend; }
        set { _Legend = value; StateHasChanged(); }
    }

}
```

<div class="divider--half"></div>

## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in Blazor Data Chart control.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
        @if (Data != null)
        {
          <IgbDataChart Height="100%" Width="100%" Subtitle="Energy Source of Biggest Countries"
                     IsHorizontalZoomEnabled="false" IsVerticalZoomEnabled="false"
                     SeriesMouseEnterScript="onSeriesMouseEnter">
              @*note the onSeriesMouseEnter" function is implemented .JS file in wwwroot folder*@

              <IgbCategoryXAxis Name="xAxis" DataSource="Data" Label="Country"></IgbCategoryXAxis>
              <IgbNumericYAxis  Name="yAxis"></IgbNumericYAxis>

              <IgbColumnSeries Title="Coal" XAxisName="xAxis" YAxisName="yAxis" ValueMemberPath="Coal"
                            DataSource="Data" ShowDefaultTooltip="false"/>
              <IgbColumnSeries Title="Hydro" XAxisName="xAxis" YAxisName="yAxis" ValueMemberPath="Hydro"
                            DataSource="Data" ShowDefaultTooltip="false"/>
              <IgbColumnSeries Title="Nuclear" XAxisName="xAxis" YAxisName="yAxis" ValueMemberPath="Nuclear"
                            DataSource="Data" ShowDefaultTooltip="false"/>
              <IgbColumnSeries Title="Gas" XAxisName="xAxis" YAxisName="yAxis" ValueMemberPath="Gas"
                            DataSource="Data" ShowDefaultTooltip="false"/>
              <IgbColumnSeries Title="Oil" XAxisName="xAxis" YAxisName="yAxis" ValueMemberPath="Oil"
                            DataSource="Data" ShowDefaultTooltip="false"/>
          </IgbDataChart>

        }
</div>

@code {

    private List<EnergyProductionData.Energy> Data;

    protected override void OnInitialized()
    {
        this.Data = EnergyProductionData.Generate();
    }
}
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Markers](chart-markers.md)

## API References

The [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) and [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) components share the following API properties:

- [`ToolTipType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ToolTipType)

In the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component, you can use the following API components and properties:

- [`IgbDataToolTipLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataToolTipLayer.html)
- [`IgbItemToolTipLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbItemToolTipLayer.html)
- [`IgbCategoryToolTipLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryToolTipLayer.html)
- `ShowDefaultToolTip`
