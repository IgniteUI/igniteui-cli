---
title: Blazor Donut Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Donut Chart
_keywords: Blazor Charts, Donut Chart, Donut Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDoughnutChart", "DoughnutChart"]
namespace: Infragistics.Controls.Charts
_tocName: Donut Chart
_premium: true
---

# Blazor Donut Chart

The Ignite UI for Blazor Donut Chart is similar to the [Pie Chart](pie-chart.md), proportionally illustrating the occurrences of a variable. The donut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data. The rings are capable of being bound to a different data item, or they can share a common data source.

## Blazor Donut Chart Example

You can create Donut Chart using the [`IgbDoughnutChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDoughnutChart.html) control by binding your data as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Global Electricity Demand by Energy Use
    </div>
    <div class="legend">
        <IgbItemLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbItemLegend>

    </div>
    <div class="container vertical fill">
        <IgbDoughnutChart
        Name="chart"
        @ref="chart"
        AllowSliceExplosion="true">
            <IgbRingSeries
            Name="series"
            @ref="series"
            LabelMemberPath="Summary"
            LabelsPosition="LabelsPosition.OutsideEnd"
            LabelExtent="30"
            ValueMemberPath="Value"
            LegendLabelMemberPath="Category"
            Outlines="white"
            RadiusFactor="0.6"
            StartAngle="30"
            DataSource="EnergyGlobalDemand">
            </IgbRingSeries>

        </IgbDoughnutChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var series = this.series;

        this.BindElements = () => {
            series.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbItemLegend legend;
    private IgbDoughnutChart chart;
    private IgbRingSeries series;

    private EnergyGlobalDemand _energyGlobalDemand = null;
    public EnergyGlobalDemand EnergyGlobalDemand
    {
        get
        {
            if (_energyGlobalDemand == null)
            {
                _energyGlobalDemand = new EnergyGlobalDemand();
            }
            return _energyGlobalDemand;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EnergyGlobalDemandItem
{
    public double Value { get; set; }
    public string Category { get; set; }
    public string Summary { get; set; }
}

public class EnergyGlobalDemand
    : List<EnergyGlobalDemandItem>
{
    public EnergyGlobalDemand()
    {
        this.Add(new EnergyGlobalDemandItem() { Value = 37, Category = @"Cooling", Summary = @"Cooling 37%" });
        this.Add(new EnergyGlobalDemandItem() { Value = 25, Category = @"Residential", Summary = @"Residential 25%" });
        this.Add(new EnergyGlobalDemandItem() { Value = 12, Category = @"Heating", Summary = @"Heating 12%" });
        // ... 2 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Donut Chart Recommendations

### Are Blazor Donut Charts right for your project?

Donut Charts are appropriate for small data sets and are easy to read at a glance. Donut charts are just one type of part-to-whole visualization. Others include:

- [Pie](pie-chart.md)

<!-- - Funnel  -->

- [Stacked Area](area-chart.md)
- [Stacked 100% Area (Stacked Percentage Area)](area-chart.md)
- [Stacked Bar](bar-chart.md)
- [Stacked 100% Bar (Stacked Percentage Bar)](bar-chart.md)
- [Treemap](treemap-chart.md)
- [Waterfall](column-chart.md)

The Blazor Donut Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

### Best Practices for Donut Charts

- Using multiple data sets to display your data in a ring display.
- Placing the information such as values or labels, within the hole of the donut for quick explanation of data.
- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Ensuring data segments add up to 100%.
- Ensuring the color palette is distinguishable for segments/slices of the parts.

### When not to use a Donut Chart

- Comparing change over time —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- Requiring precise data comparison —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- You have more than 6 or 8 segments (high data volume) — consider a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a [Bar](bar-chart.md) chart.
- You have negative data, as this can not be represented in a donut chart.

## Blazor Donut Chart - Slice Selection

The Blazor Donut Chart has the ability to select slices on click. Optionally, you may apply a single custom visual style to the selected slices. The `SliceClick` event is raised when the user clicks on a slice. Enabling slice selection allows you to modify the slice's selection upon click. The following sample demonstrates how to enable slice selection and set the selected slice color to gray.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal" >
        <div class="options vertical">
            <span class="legend-title">Global Electricity Demand by Energy Use</span>
            <div class="legend">
                <IgbItemLegend @ref="Legend" Orientation="LegendOrientation.Horizontal"/>
            </div>
        </div>
    </div>

    <div class="container relative">
        <div class="container-overlay">

            <IgbDoughnutChart Height="100%" Width="100%"
                           @ref="Chart"
                           AllowSliceSelection="true" InnerExtent="0.6"
                           SliceClick="OnSliceClick"
                           SelectedSliceStroke="White"
                           SelectedSliceFill="Gray"
                           SelectedSliceStrokeThickness="1"
                           SelectedSliceOpacity="0.75">
                <IgbRingSeries DataSource="Data"
                            LabelMemberPath="Summary"
                            LabelsPosition="LabelsPosition.OutsideEnd"
                            LabelExtent="30"
                            ValueMemberPath="MarketShare"
                            LegendLabelMemberPath="Category"
                            RadiusFactor="0.6"
                            StartAngle="30">
                </IgbRingSeries>
            </IgbDoughnutChart>

            <div class="overlay-center" style="line-height: 1.1">
                <label class="options-label" style="font-size: 1.2rem;"> @SelectedSliceLabel </label>
                <label class="options-value" style="font-size: 2.2rem;"> @SelectedSliceValue </label>
            </div>
        </div>
    </div>
</div>

@code {

    public List<DataItem> Data;
    public string SelectedSliceLabel;
    public string SelectedSliceValue;
    public IgbItemLegend Legend;
    public IgbDoughnutChart Chart;

    protected override void OnInitialized()
    {
        this.Data = new List<DataItem>();
        this.Data.Add(new DataItem { MarketShare = 37, Category = "Cooling", });
        this.Data.Add(new DataItem { MarketShare = 25, Category = "Residential", });
        this.Data.Add(new DataItem { MarketShare = 12, Category = "Heating", });
        this.Data.Add(new DataItem { MarketShare = 11, Category = "Lighting", });
        this.Data.Add(new DataItem { MarketShare = 15, Category = "Other", });

        this.SelectedSliceValue = this.Data[0].MarketShare + "%";
        this.SelectedSliceLabel = this.Data[0].Category;
    }

    public class DataItem
    {
        public string Category { get; set; }
        public double MarketShare { get; set; }
        public string Summary { get { return Category + " " + MarketShare + "%"; } }
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (Chart != null && Legend != null && !firstRender)
            this.Chart.ActualSeries[0].Legend = Legend;

    }

    protected void OnSliceClick(IgbSliceClickEventArgs e)
    {
        if (e.IsSelected)
        {
            this.SelectedSliceLabel = this.Data[e.Index].Category;
            this.SelectedSliceValue = this.Data[e.Index].MarketShare + "%";
        }
        else
        {
            this.SelectedSliceLabel = "No Selection";
            this.SelectedSliceValue = "0%";
        }
    }
}
```

<div class="divider--half"></div>

## Blazor Donut Chart - Multiple Rings

It is possible to have a multiple ring display in the Blazor Donut Chart, with each of the rings capable of being bound to a different data item, or they can share a common data source. This can be helpful if you need to display your data as tiers that have an underlying common category, such as the season to month data display below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Hierarchical Chart
    </div>
    <div class="container vertical fill">
        <IgbDoughnutChart
        Name="chart"
        @ref="chart"
        AllowSliceExplosion="false"
        AllowSliceSelection="false">
            <IgbRingSeries
            Name="series1"
            @ref="series1"
            LabelMemberPath="Label"
            ValueMemberPath="Value"
            LabelsPosition="LabelsPosition.Center"
            RadiusFactor="0.9"
            Outlines="white"
            Brushes="#3cbdc9 #9fb328 #f96232 #8a58d6"
            DataSource="CalendarSeasons">
            </IgbRingSeries>

            <IgbRingSeries
            Name="series2"
            @ref="series2"
            LabelMemberPath="Label"
            ValueMemberPath="Value"
            LabelsPosition="LabelsPosition.Center"
            RadiusFactor="0.9"
            Outlines="white"
            Brushes="#3cbdc9 #3cbdc9 #3cbdc9 #9fb328 #9fb328 #9fb328 #f96232 #f96232 #f96232 #8a58d6 #8a58d6 #8a58d6"
            DataSource="CalendarMonths">
            </IgbRingSeries>

        </IgbDoughnutChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var series1 = this.series1;
        var series2 = this.series2;

    }

    private IgbDoughnutChart chart;
    private IgbRingSeries series1;
    private IgbRingSeries series2;

    private CalendarSeasons _calendarSeasons = null;
    public CalendarSeasons CalendarSeasons
    {
        get
        {
            if (_calendarSeasons == null)
            {
                _calendarSeasons = new CalendarSeasons();
            }
            return _calendarSeasons;
        }
    }

    private CalendarMonths _calendarMonths = null;
    public CalendarMonths CalendarMonths
    {
        get
        {
            if (_calendarMonths == null)
            {
                _calendarMonths = new CalendarMonths();
            }
            return _calendarMonths;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CalendarMonthsItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class CalendarMonths
    : List<CalendarMonthsItem>
{
    public CalendarMonths()
    {
        this.Add(new CalendarMonthsItem() { Value = 1, Label = @"December" });
        this.Add(new CalendarMonthsItem() { Value = 1, Label = @"January" });
        this.Add(new CalendarMonthsItem() { Value = 1, Label = @"February" });
        // ... 9 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class CalendarSeasonsItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class CalendarSeasons
    : List<CalendarSeasonsItem>
{
    public CalendarSeasons()
    {
        this.Add(new CalendarSeasonsItem() { Value = 4, Label = @"Winter" });
        this.Add(new CalendarSeasonsItem() { Value = 4, Label = @"Spring" });
        this.Add(new CalendarSeasonsItem() { Value = 4, Label = @"Summer" });
        // ... 1 more items
    }
}
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Pie Chart](pie-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgbDoughnutChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDoughnutChart.html)
- [`AllowSliceExplosion`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDoughnutChart.html#IgniteUI_Blazor_Controls_IgbDoughnutChart_AllowSliceExplosion)
- [`AllowSliceSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDoughnutChart.html#IgniteUI_Blazor_Controls_IgbDoughnutChart_AllowSliceSelection)
- [`InnerExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDoughnutChart.html#IgniteUI_Blazor_Controls_IgbDoughnutChart_InnerExtent)
- `SliceClick`
