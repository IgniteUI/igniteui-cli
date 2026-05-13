---
title: Blazor Step Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Step Chart
_keywords: Blazor Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Step Chart
_premium: true
---

# Blazor Step Chart

The Ignite UI for Blazor Step Chart belongs to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. Values are represented on the y-axis and categories are displayed on the x-axis. Step Chart emphasizes the amount of change over a period of time or compares multiple items.

## Blazor Step Area Chart

You can create Blazor Step Area Chart in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by setting [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to `StepArea` enum, as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls

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
        DataSource="CountryRenewableElectricity"
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.StepArea"
        TitleAlignment="HorizontalAlignment.Left"
        TitleLeftMargin="25"
        TitleTopMargin="10"
        TitleBottomMargin="10"
        IsCategoryHighlightingEnabled="false"
        IsSeriesHighlightingEnabled="true"
        IsTransitionInEnabled="true"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        YAxisTitle="TWh"
        CrosshairsSnapToData="true">
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

## Blazor Step Line Chart

The Blazor Step Line Chart is very similar to Step Area Chart, except that the area below lines are filled in.

You can create Step Line Chart in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data and setting [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to `StepLine` value, as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls

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
        ChartType="CategoryChartType.StepLine"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        IsCategoryHighlightingEnabled="false"
        IsSeriesHighlightingEnabled="true"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        XAxisInterval="1"
        YAxisTitle="TWh"
        CrosshairsSnapToData="true">
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

## Blazor Step Chart Styling

If you need Step Charts with more features such as composite other series, you can configure the [`MarkerTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerTypes), [`MarkerBrushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerBrushes), [`MarkerOutlines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerOutlines), lines' [`Brushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Brushes), and lines' [`Outlines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Outlines) properties on the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control as demonstrated below.

```razor
@using IgniteUI.Blazor.Controls

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
        ChartType="CategoryChartType.StepLine"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        IsCategoryHighlightingEnabled="false"
        IsSeriesHighlightingEnabled="true"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        YAxisTitle="TWh"
        MarkerBrushes="white"
        MarkerOutlines="#8ce7d9 #ee5879 #735656"
        Brushes="#8ce7d9 #ee5879 #735656"
        Outlines="#8ce7d9 #ee5879 #735656"
        CrosshairsSnapToData="true">
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

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](line-chart.md)
- [Chart Markers](../features/chart-markers.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType)
- `StepArea`
- `StepLine`
- [`Brushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Brushes)
- [`Outlines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Outlines)
- [`MarkerBrushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerBrushes)
- [`MarkerOutlines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerOutlines)
- [`MarkerTypes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_MarkerTypes)
