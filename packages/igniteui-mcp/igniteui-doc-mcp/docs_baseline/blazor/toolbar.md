---
title: Blazor Toolbar Component | Ignite UI for Blazor
_description: See how you can easily get started with Blazor Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Toolbar components, Blazor Toolbar controls
_license: commercial
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart", "TrendLineType"]
_tocName: Toolbar
_premium: true
---

# Blazor Toolbar Overview

The Blazor Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) or [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

## Blazor Toolbar Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
    </div>
    <div id="aboveContentSplit">
        <div id="aboveContentLeftContainer">
            <IgbToolbar
            Name="toolbar"
            @ref="toolbar"
            Orientation="ToolbarOrientation.Horizontal">
            </IgbToolbar>

        </div>
        <div id="aboveContentRightContainer">
            <IgbLegend
            Name="legend"
            @ref="legend"
            Orientation="LegendOrientation.Horizontal">
            </IgbLegend>

        </div>
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Line"
        IsHorizontalZoomEnabled="true"
        IsVerticalZoomEnabled="true"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        YAxisTitle="TWh"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        YAxisLabelLocation="YAxisLabelLocation.OutsideRight"
        IsTransitionInEnabled="true">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var toolbar = this.toolbar;
        var chart = this.chart;

        this.BindElements = () => {
            toolbar.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbToolbar toolbar;
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

## Dependencies

Add the **IgniteUI.Blazor.Controls** namespace in the **\_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

The following modules are required when using the [`IgbToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html) with the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component and it's features.

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbToolbarModule),
    typeof(IgbDataChartToolbarModule),
    typeof(IgbDataChartCoreModule),
    typeof(IgbDataChartCategoryModule),
    typeof(IgbDataChartAnnotationModule),
    typeof(IgbDataChartInteractivityModule),
    typeof(IgbDataChartCategoryTrendLineModule)
);
```

You will also need to link an additional CSS file to apply the styling to the [`IgbToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

## Usage

### Tool Actions

The following is a list of the different [`IgbToolAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html) items that you can add to the Toolbar.

- [`IgbToolActionButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionButton.html)
- [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html)
- [`IgbToolActionIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionIconButton.html)
- [`IgbToolActionIconMenu`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionIconMenu.html)
- [`IgbToolActionLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionLabel.html)
- [`IgbToolActionNumberInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionNumberInput.html)
- [`IgbToolActionRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionRadio.html)
- [`IgbToolActionSubPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionSubPanel.html)

Each of these tools exposes an `OnCommand` event that is triggered by mouse click. Note, the [`IgbToolActionIconMenu`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionIconMenu.html) is a wrapper for other tools that can also be wrapped inside a [`IgbToolActionIconMenu`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionIconMenu.html).

New and existing tools can be repositioned and marked hidden using the [`OverlayId`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_OverlayId), [`BeforeId`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_BeforeId) and [`AfterId`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_AfterId) properties on the [`IgbToolAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html) object. ToolActions also expose a [`Visibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_Visibility) property.

The following example demonstrates a couple of features. First you can group tools together in the [`IgbToolActionSubPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionSubPanel.html) including hiding built in tools such as the **ZoomReset** and **AnalyzeMenu** menu tool actions. In this example a new instance of the **ZoomReset** tool action within the **ZoomMenu** by using the the [`AfterId`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_AfterId) property and assigning that to **ZoomOut** to be precise with it's placement. It is also highlighted via the [`IsHighlighted`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_IsHighlighted) property on the tool.

```razor
@using IgniteUI.Blazor.Controls
@using System

<div class="container vertical">
    <div id="aboveContentSplit">
        <div id="aboveContentLeftContainer">
            <IgbToolbar
            Name="toolbar"
            @ref="toolbar"
            Orientation="ToolbarOrientation.Horizontal"
            OnCommand="ToolbarToggleAnnotations">
                <IgbToolActionIconMenu
                Name="MenuForSubPanelTool"
                @ref="menuForSubPanelTool"
                IconCollectionName="ChartToolbarIcons"
                IconName="analyze">
                    <IgbToolActionGroupHeader
                    Name="SubPanelGroup"
                    @ref="subPanelGroup"
                    CloseOnExecute="true"
                    Title="Visualizations"
                    Subtitle="Layers">
                    </IgbToolActionGroupHeader>

                    <IgbToolActionSubPanel
                    Name="CustomSubPanelTools"
                    @ref="customSubPanelTools">
                        <IgbToolActionCheckbox
                        Name="EnableTooltipsLabel"
                        @ref="enableTooltipsLabel"
                        Title="Enable Tooltips"
                        CommandId="EnableTooltips">
                        </IgbToolActionCheckbox>

                        <IgbToolActionCheckbox
                        Name="EnableCrosshairsLabel"
                        @ref="enableCrosshairsLabel"
                        Title="Enable Crosshairs"
                        CommandId="EnableCrosshairs">
                        </IgbToolActionCheckbox>

                        <IgbToolActionCheckbox
                        Name="EnableFinalValuesLabel"
                        @ref="enableFinalValuesLabel"
                        Title="Enable Final Values"
                        CommandId="EnableFinalValues">
                        </IgbToolActionCheckbox>

                    </IgbToolActionSubPanel>

                </IgbToolActionIconMenu>

                <IgbToolActionLabel
                Name="zoomResetLabel"
                @ref="zoomResetLabel"
                Title="Reset"
                AfterId="ZoomOut"
                IconName="reset"
                IconCollectionName="ChartToolbarIcons"
                CommandId="ZoomReset"
                IsHighlighted="true">
                </IgbToolActionLabel>

                <IgbToolActionLabel
                Name="zoomResetHidden"
                @ref="zoomResetHidden"
                OverlayId="ZoomReset"
                Visibility="Visibility.Collapsed">
                </IgbToolActionLabel>

                <IgbToolActionIconMenu
                Name="AnalyzeMenu"
                @ref="analyzeMenu"
                OverlayId="AnalyzeMenu"
                Visibility="Visibility.Collapsed">
                </IgbToolActionIconMenu>

                <IgbToolActionLabel
                Name="CopyMenu"
                @ref="copyMenu"
                OverlayId="CopyMenu"
                Visibility="Visibility.Collapsed">
                </IgbToolActionLabel>

            </IgbToolbar>

        </div>
        <div id="aboveContentRightContainer">
            <!-- insert aboveContentRight -->
            <!-- end aboveContentRight -->
        </div>
    </div>
    <div class="container vertical fill">
        <IgbDataChart
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsHorizontalZoomEnabled="true"
        IsVerticalZoomEnabled="true"
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
            Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="America">
            </IgbLineSeries>

            <IgbLineSeries
            Name="LineSeries2"
            @ref="lineSeries2"
            Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="Europe">
            </IgbLineSeries>

            <IgbLineSeries
            Name="LineSeries3"
            @ref="lineSeries3"
            Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="China">
            </IgbLineSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;
        var menuForSubPanelTool = this.menuForSubPanelTool;
        var subPanelGroup = this.subPanelGroup;
        var customSubPanelTools = this.customSubPanelTools;
        var enableTooltipsLabel = this.enableTooltipsLabel;
        var enableCrosshairsLabel = this.enableCrosshairsLabel;
        var enableFinalValuesLabel = this.enableFinalValuesLabel;
        var zoomResetLabel = this.zoomResetLabel;
        var zoomResetHidden = this.zoomResetHidden;
        var analyzeMenu = this.analyzeMenu;
        var copyMenu = this.copyMenu;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var lineSeries1 = this.lineSeries1;
        var lineSeries2 = this.lineSeries2;
        var lineSeries3 = this.lineSeries3;

        this.BindElements = () => {
            toolbar.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbToolbar toolbar;
    private IgbToolActionIconMenu menuForSubPanelTool;
    private IgbToolActionGroupHeader subPanelGroup;
    private IgbToolActionSubPanel customSubPanelTools;
    private IgbToolActionCheckbox enableTooltipsLabel;
    private IgbToolActionCheckbox enableCrosshairsLabel;
    private IgbToolActionCheckbox enableFinalValuesLabel;
    private IgbToolActionLabel zoomResetLabel;
    private IgbToolActionLabel zoomResetHidden;
    private IgbToolActionIconMenu analyzeMenu;
    private IgbToolActionLabel copyMenu;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbLineSeries lineSeries1;
    private IgbLineSeries lineSeries2;
    private IgbLineSeries lineSeries3;

    public void ToolbarToggleAnnotations(IgbToolCommandEventArgs args)
    {
        var target = this.chart;
        switch (args.Command.CommandId)
        {
            case "EnableTooltips":
                IgbSeries annotationSeries = null;
                foreach (var s in target.Series)
                {
                    if (s is IgbDataToolTipLayer)
                    {
                        annotationSeries = s;
                    }
                }

                if (annotationSeries == null) {
                    target.Series.Add(new IgbDataToolTipLayer());
                } else {
                    target.Series.Remove(annotationSeries);
                }
                break;
            case "EnableCrosshairs":
                IgbSeries crosshairSeries = null;

                foreach (var s in target.Series)
                {
                    if (s is IgbCrosshairLayer)
                    {
                        crosshairSeries = s;
                    }
                }

                if (crosshairSeries == null)
                {
                    target.Series.Add(new IgbCrosshairLayer());
                }
                else
                {
                    target.Series.Remove(crosshairSeries);
                }
                break;
            case "EnableFinalValues":
                IgbSeries finalValuesSeries = null;

                foreach (var s in target.Series)
                {
                    if (s is IgbFinalValueLayer)
                    {
                        finalValuesSeries = s;
                    }
                }

                if (finalValuesSeries == null)
                {
                    target.Series.Add(new IgbFinalValueLayer());
                }
                else
                {
                    target.Series.Remove(finalValuesSeries);
                }
                break;
    	}
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

### Blazor Data Chart Integration

The Blazor Toolbar contains a [`Target`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html#IgniteUI_Blazor_Controls_IgbToolbar_Target) property. This is used to link a component, such as the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) as shown in the code below:

```razor
  <IgbToolbar
    Name="Toolbar"
    @ref="toolbar"
    Target="@chart">
  <IgbToolbar>

  <IgbDataChart
    Name="chart"
    @ref="chart">
  </IgbDataChart>
```

Several pre-existing [`IgbToolAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html) items and menus become available when the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) is linked with the Toolbar. Here is a list of the built-in Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) Tool Actions and their associated [`OverlayId`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_OverlayId):

Zooming Actions

- `ZoomMenu`: A [`IgbToolActionIconMenu`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionIconMenu.html) that exposes three [`IgbToolActionLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionLabel.html) items to invoke the [`ZoomIn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ZoomIn) and [`ZoomOut`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ZoomOut) methods on the chart for increasing/decreasing the chart's zoom level including `ZoomReset`, a [`IgbToolActionLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionLabel.html) that invokes the [`ResetZoom`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ResetZoom) method on the chart to reset the zoom level to it's default position.

Trend Actions

- `AnalyzeMenu`: A [`IgbToolActionIconMenu`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionIconMenu.html) that contains several options for configuring different options of the chart.
- `AnalyzeHeader`: A sub section header.
  - `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
  - `LinesHeader`: A sub menu section header for the following three tools:
    - `MaxValue`: A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that displays a dashed horizontal line along the yAxis at the maximum value of the series.
    - `MinValue`: A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that displays a dashed horizontal line along the yAxis at the minimum value of the series.
    - `Average`:  A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that displays a dashed horizontal line along the yAxis at the average value of the series.
  - `TrendsMenu`: A sub menu containing tools for applying various trendlines to the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) plot area.
  - `TrendsHeader`: A sub menu section header for the following three tools:
    - **Exponential**: A [`IgbToolActionRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionRadio.html) that sets the [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLineType) on each series in the chart to **ExponentialFit**.
    - **Linear**: A [`IgbToolActionRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionRadio.html) that sets the [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLineType) on each series in the chart to **LinearFit**.
    - **Logarithmic**: A [`IgbToolActionRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionRadio.html) that sets the [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLineType) on each series in the the chart to **LogarithmicFit**.
- `HelpersHeader`: A sub section header.
  - `SeriesAvg`: A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that adds or removes a [`IgbValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueLayer.html) to the chart's series collection using the `ValueLayerValueMode` of type `Average`.
  - `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)'s plot area.
  - `ValueLabelsHeader`: A sub menu section header for the following tools:
    - `ShowValueLabels`: A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that toggles data point values by using a [`IgbCalloutLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html).
    - `ShowLastValueLabel`: A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that toggles final value axis annotations by using a [`IgbFinalValueLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinalValueLayer.html).
- `ShowCrosshairs`: A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that toggles mouse-over crosshair annotations via the chart's [`CrosshairsDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_CrosshairsDisplayMode) property.
- `ShowGridlines`: A [`IgbToolActionCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionCheckbox.html) that toggles extra gridlines by applying a `MajorStroke` to the X-Axis.

Save to Image Action

- `CopyAsImage`: A [`IgbToolActionLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolActionLabel.html) that exposes an option to copy the chart to the clipboard.
- `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `RenderIconFromText` method. There are three parameters to pass in this method. The first is the icon collection name defined on the tool eg. [`IconCollectionName`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_IconCollectionName). The second is the name of the icon defined on the tool eg. [`IconName`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolAction.html#IgniteUI_Blazor_Controls_IgbToolAction_IconName), followed by adding the SVG string.

### Data URL Icons

Similarly to adding svg, you can also add an Icon image from a URL via the [`RegisterIconFromDataURL`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html#IgniteUI_Blazor_Controls_IgbToolbar_RegisterIconFromDataURL). The method's third parameter would be used to enter a string URL.

The following snippet shows both methods of adding an Icon.

```razor
<IgbToolActionLabel
    Title="Custom Icon"
    IconName="CustomIcon"
    IconCollectionName="CustomCollection">
</IgbToolActionLabel>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;

        if (firstRender) {
            this.ToolbarCustomIconOnViewInit();
        }
    }

    private IgbToolbar toolbar;

    public void ToolbarCustomIconOnViewInit()
    {
      this.toolbar.EnsureReady().ContinueWith(new Action<Task>((e) =>
      {
        string icon =
        @"
          <svg width=""28px"" height=""28px"" stroke=""none"" viewBox=""0 0 3.5 3.5"" xmlns=""http://www.w3.org/2000/svg"" xmlns:xlink=""http://www.w3.org/1999/xlink"" aria-hidden=""true"" role=""img"" class=""iconify iconify--gis"" preserveAspectRatio=""xMidYMid meet""><path d=""M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z"" fill=""#000000"" fill-rule=""evenodd""/></svg>
        ";
        this.toolbar.RegisterIconFromTextAsync("CustomCollection", "CustomIcon", icon);
      }));
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;

        if (firstRender) {
            this.ToolbarCustomIconOnViewInit();
        }
    }

    private IgbToolbar toolbar;

    public void ToolbarCustomIconOnViewInit()
    {
      this.toolbar.EnsureReady().ContinueWith(new Action<Task>((e) =>
      {
            this.toolbar.RegisterIconFromDataURLAsync("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");
      }));
    }
}
```

### Vertical Orientation

By default the Blazor Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the [`Orientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html#IgniteUI_Blazor_Controls_IgbToolbar_Orientation) property.

```razor
<IgbToolbar Orientation="ToolbarOrientation.Vertical" />
```

The following example demonstrates the vertical orientation of the Blazor Toolbar.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="aboveContent">
        <IgbToolbar
        Name="toolbar"
        @ref="toolbar"
        Orientation="ToolbarOrientation.Vertical">
        </IgbToolbar>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        IsHorizontalZoomEnabled="true"
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
            Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="America">
            </IgbLineSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var lineSeries1 = this.lineSeries1;

        this.BindElements = () => {
            toolbar.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbToolbar toolbar;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbLineSeries lineSeries1;

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

### Color Editor

You can add a custom color editor tool to the the Blazor Toolbar, which will also work with the Command event to perform custom styling to your application.

```razor
<IgbToolbar
Name="toolbar"
@ref="toolbar">
    <IgbToolActionColorEditor
    Title="Series Brush">
    </IgbToolActionColorEditor>
</IgbToolbar>
```

The following example demonstrates styling the Blazor Data Chart series brush with the Color Editor tool. ```razor
@using IgniteUI.Blazor.Controls
@using System

<div class="container vertical">
    <div id="aboveContentSplit">
        <div id="aboveContentLeftContainer">
            <IgbToolbar
            Name="toolbar"
            @ref="toolbar"
            OnCommand="ColorEditorToggleSeriesBrush">
                <IgbToolActionColorEditor
                Title="Series Brush"
                Name="colorEditorTool"
                @ref="colorEditorTool"
                CommandId="ToggleSeriesBrush">
                </IgbToolActionColorEditor>

            </IgbToolbar>

        </div>
        <div id="aboveContentRightContainer">
            <!-- insert aboveContentRight -->
            <!-- end aboveContentRight -->
        </div>
    </div>
    <div class="container vertical fill">
        <IgbDataChart
        IsHorizontalZoomEnabled="true"
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
            Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="America"
            MarkerType="MarkerType.None">
            </IgbLineSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;
        var colorEditorTool = this.colorEditorTool;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var lineSeries1 = this.lineSeries1;

        this.BindElements = () => {
            toolbar.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbToolbar toolbar;
    private IgbToolActionColorEditor colorEditorTool;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbLineSeries lineSeries1;

    public void ColorEditorToggleSeriesBrush(IgbToolCommandEventArgs args)
    {
    	var target = this.chart;
        var color = args.Command.ArgumentsList[0].Value;
        switch (args.Command.CommandId)
        {
            case "ToggleSeriesBrush":
                IgbSeries series = target.ContentSeries[0];
                series.Brush = color.ToString();
            break;
        }

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

<!-- ## Styling/Theming

The icon component can be styled by using it's `BaseTheme` property directly to the `Toolbar`.

```html
<igx-toolbar baseTheme="SlingshotDark" />
```

```html
<igc-toolbar base-theme="SlingshotDark" />
```

```razor
<IgbToolbar BaseTheme="BaseControlTheme.SlingshotDark" />
```

```tsx
<IgrToolbar baseTheme="SlingshotDark" />
```

<!-- The following example demonstrates the various theme options that can be applied.
`sample="/charts/toolbar/theming", height="600", alt="Blazor Toolbar Styling/Theming"` -->

## API References

- [`IgbToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html)
- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
