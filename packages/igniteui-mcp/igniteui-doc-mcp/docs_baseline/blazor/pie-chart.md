---
title: Blazor Pie Charts and Graphs | Ignite UI for Blazor
_description: The Ignite UI for Blazor pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections. Try for FREE.
_keywords: Blazor charts, pie chart, Ignite UI for Blazor, Infragistics, data binding, slice selection, slice explosion, animation
_license: commercial
mentionedTypes: ["XamPieChart", "XamDataChart"]
namespace: Infragistics.Controls.Charts
_tocName: Pie Chart
_premium: true
---

# Blazor Pie Chart

The Ignite UI for Blazor Pie Chart, or Pie Graph, is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## Blazor Pie Chart Example

You can create the Blazor Pie Chart in the [`IgbPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChart.html) by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization. In this case, the example shows the overall breakdown of budget spend by department.

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
        <IgbPieChart
        Name="chart"
        @ref="chart"
        LegendLabelMemberPath="Category"
        LabelMemberPath="Summary"
        LabelsPosition="LabelsPosition.BestFit"
        ValueMemberPath="Value"
        RadiusFactor="0.7"
        DataSource="EnergyGlobalDemand">
        </IgbPieChart>

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

    private IgbItemLegend legend;
    private IgbPieChart chart;

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

## Blazor Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization. Others include:

- Pie
- Doughnut (Ring)
- Funnel
- Stacked Area
- Stacked 100% Area (Stacked Percentage Area)
- Stacked Bar
- Stacked 100% Bar (Stacked Percentage Bar)
- Treemap
- Waterfall

The Blazor Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

Best Practices for a Pie Chart:

- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
- Ensuring data segments add up to 100%.
- Arranging the order of data from largest (highest) to smallest (least).
- Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
- Ensuring the color palette is distinguishable for segments/slices of the parts.
- Considering data labels in segments vs. legends for ease of reading.
- Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
- Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When:

- Comparing change over time —use a Bar, Line or Area chart.
- Requiring precise data comparison —use a Bar, Line or Area chart.
- You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a Bar chart.

## Blazor Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum. You can collapse the point using legend click.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`Legend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_Legend) property. The [`LegendLabelMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_LegendLabelMemberPath) can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

Additionally you can use the [`LegendItemTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_LegendItemTemplate) and [`LegendItemBadgeTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_LegendItemBadgeTemplate) properties and the various font properties on ItemLegend to further customize the look of the legend items.

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
        <IgbPieChart
        Name="chart"
        @ref="chart"
        ValueMemberPath="Value"
        LabelMemberPath="Summary"
        LabelsPosition="LabelsPosition.OutsideEnd"
        LegendLabelMemberPath="Category"
        Outlines="white"
        RadiusFactor="0.7"
        LabelExtent="30"
        DataSource="EnergyGlobalDemand">
        </IgbPieChart>

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

    private IgbItemLegend legend;
    private IgbPieChart chart;

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

## Blazor Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

In the sample below, the [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_OthersCategoryThreshold) is set to 2, and [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_OthersCategoryType) is set to Number. Therefore, items with value less than or equal to 2 will be assigned to the "Others" category.

If you set [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_OthersCategoryType) to Percent, then [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_OthersCategoryThreshold) will be interpreted as a percentage rather than as a value, i.e. items whose values are less than 2% of the sum of all item values would be assigned to the Others category. You can use whichever [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_OthersCategoryType) is most appropriate for your application.

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
        <IgbPieChart
        Name="chart"
        @ref="chart"
        LabelMemberPath="Summary"
        LabelsPosition="LabelsPosition.OutsideEnd"
        LabelExtent="30"
        ValueMemberPath="Value"
        Outlines="white"
        OthersCategoryThreshold="10"
        OthersCategoryType="OthersCategoryType.Number"
        OthersCategoryText="Others"
        RadiusFactor="0.7"
        LegendLabelMemberPath="Category"
        DataSource="EnergyGlobalDemand">
        </IgbPieChart>

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

    private IgbItemLegend legend;
    private IgbPieChart chart;

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

## Blazor Pie Chart Explosion

The pie chart supports explosion of individual pie slices as well as a `SliceClick` event that allows you to modify selection states and implement custom logic

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options vertical">
        <span class="legend-title">Global Electricity Demand by Energy Use</span>
        <div class="legend">
            <IgbItemLegend @ref="Legend" Orientation="LegendOrientation.Horizontal" />
        </div>
        <div class="overlay-right">
            <div class="options horizontal">
                <label class="options-label">
                    <input type="checkbox" @onchange="onExplosionModeChanged"
                           checked="@ExplodeMultipleSlices"/>Allow Multi-Slice Explosion
                </label>
            </div>
        </div>
    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbPieChart Height="100%" Width="100%"
                      DataSource="Data"
                      Legend="Legend"
                      LabelMemberPath="Summary"
                      LegendLabelMemberPath="Category"
                      ValueMemberPath="MarketShare"
                      Outlines="white"
                      RadiusFactor="0.7"
                      StartAngle="0"
                      SliceClick="OnSliceClick"
                      LabelsPosition="LabelsPosition.OutsideEnd"
                      LabelExtent="10"
                      AllowSliceSelection="false"
                      AllowSliceExplosion="true"
                      ExplodedSlices="ExplodedSlices"
                      ExplodedRadius="0.1">
            </IgbPieChart>
        }

    </div>
</div>

@code {

    private List<DataItem> Data;

    private IgbItemLegend _legend;
    public IgbItemLegend Legend
    {
        get { return _legend; }
        set { _legend = value; StateHasChanged(); }
    }

    public int[] ExplodedSlices { get; set; } = new int[1];
    public bool ExplodeMultipleSlices = true;

    protected override void OnInitialized()
    {
        this.Data = new List<DataItem>();
        this.Data.Add(new DataItem { MarketShare = 37, Category = "Cooling", });
        this.Data.Add(new DataItem { MarketShare = 25, Category = "Residential", });
        this.Data.Add(new DataItem { MarketShare = 12, Category = "Heating", });
        this.Data.Add(new DataItem { MarketShare = 11, Category = "Lighting", });
        this.Data.Add(new DataItem { MarketShare = 15, Category = "Other", });
    }

    public class DataItem
    {
        public string Category { get; set; }
        public double MarketShare { get; set; }
        public string Summary { get { return Category + " " + MarketShare + "%"; } }
    }

    private void onExplosionModeChanged(ChangeEventArgs args)
    {
        this.ExplodeMultipleSlices = (bool)args.Value;
    }

    protected void OnSliceClick(IgbSliceClickEventArgs e)
    {
        var slice = e.Index;

        if (ExplodedSlices.Contains(slice))
        {
            if (ExplodeMultipleSlices)
            {
                var list = ExplodedSlices.ToList(); list.Remove(slice);
                ExplodedSlices = list.ToArray();
            }
            else
            {
                ExplodedSlices = new int[] { e.Index }; // for single selection
            }
        }
        else
        {
            if (ExplodeMultipleSlices)
            {
                var list = ExplodedSlices.ToList(); list.Add(slice);
                ExplodedSlices = list.ToArray();
            }
            else
            {
                ExplodedSlices = new int[] { e.Index }; // for single selection
            }

        }
    }

}
```

<div class="divider--half"></div>

## Blazor Pie Chart Selection

The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the [`SelectedItems`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_SelectedItems) property. The selected slices are then highlighted.

There is a property called [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_SelectionMode) which is how you set what mode you want the pie chart to use. The default value is `Single`. In order to disable selection, set the property to `Manual`.

The pie chart supports three different selection modes.

- Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
- Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
- Manual - When the mode is set to Manual, selection is disabled.

The pie chart has 4 events associated with selection:

- SelectedItemChanging
- SelectedItemChanged
- SelectedItemsChanging
- SelectedItemsChanged

The events that end in “Changing” are cancelable events which means you can stop the selection of a slice by setting the event argument property `Cancel` to true. When set to true the associated property will not update and the slice will not become selected. This is useful for scenarios where you want to keep users from being able to select certain slices based on the data inside it.

For scenarios where you click on the Others slice, the pie chart will return an object called [`IgbPieSliceOthersContext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieSliceOthersContext.html). This object contains a list of the data items contained within the Others slice.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options vertical">
        <span class="legend-title">Global Electricity Demand by Energy Use</span>
        <div class="legend">
            <IgbItemLegend @ref="Legend" Orientation="LegendOrientation.Horizontal" />
        </div>
    </div>

    <div class="container vertical">
        @if (Data != null)
        {
            <IgbPieChart Height="calc(100% - 2rem)" Width="calc(100% - 2rem)"
                      Legend="Legend"
                      DataSource="Data"
                      LegendLabelMemberPath="Category"
                      LabelMemberPath="Summary"
                      LabelsPosition="LabelsPosition.OutsideEnd"
                      LabelExtent="30"
                      ValueMemberPath="MarketShare"
                      Outlines="#FFFFFF"
                      SelectionMode="SliceSelectionMode.Multiple"
                      SelectedSliceStroke="#FFFFFF"
                      SelectedSliceFill="#8F8F8F"
                      SelectedSliceOpacity="1.0"
                      SelectedSliceStrokeThickness="2"
                      RadiusFactor="0.7"
                      StartAngle="0">
            </IgbPieChart>
        }
    </div>
</div>

@code {

    private List<DataItem> Data;

    private IgbItemLegend _legend;
    public IgbItemLegend Legend
    {
        get { return _legend; }
        set { _legend = value; StateHasChanged(); }
    }

    protected override void OnInitialized()
    {
        this.Data = new List<DataItem>();
        this.Data.Add(new DataItem { MarketShare = 37, Category = "Cooling", });
        this.Data.Add(new DataItem { MarketShare = 25, Category = "Residential", });
        this.Data.Add(new DataItem { MarketShare = 12, Category = "Heating", });
        this.Data.Add(new DataItem { MarketShare = 11, Category = "Lighting", });
        this.Data.Add(new DataItem { MarketShare = 15, Category = "Other", });
    }

    public class DataItem
    {
        public string Category { get; set; }
        public double MarketShare { get; set; }
        public string Summary { get { return Category + " " + MarketShare + "%"; } }
    }
}
```

<div class="divider--half"></div>

## Blazor Pie Chart Animation

You can animate the pie chart smoothly by setting the `radiusFactor` property, which will scale the chart's radius. Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <button @onclick="onAnimationToggle">Animate Chart</button>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbPieChart Height="100%" Width="100%"
                DataSource="Data"
                LabelMemberPath="Summary"
                LegendLabelMemberPath="Category"
                ValueMemberPath="MarketShare"
                LabelsPosition="LabelsPosition.InsideEnd"
                StartAngle="StartAngle"
                LabelExtent="LabelExtent"
                RadiusFactor="RadiusFactor">
            </IgbPieChart>
        }
    </div>
</div>

@code {

    private List<DataItem> Data;
    public double StartAngle = 0;
    public double RadiusFactor = 0.1;
    public double LabelExtent = 0.7;
    public Boolean isAnimating = false;

    public void onAnimationToggle()
    {
        if (!this.isAnimating)
        {
            this.StartAngle = 0;
            this.RadiusFactor = 0.1;
            this.isAnimating = true;

            Task.Delay(16).ContinueWith((t) => OnTimerTick());
        }
        else
        {
            this.isAnimating = false;
        }
    }

    private void OnTimerTick()
    {
        if (this.isAnimating)
        {
            if (this.RadiusFactor < 1.0)
                this.RadiusFactor += 0.0025;

            if (this.StartAngle < 360)
                this.StartAngle++;

            if (this.RadiusFactor >= 1.0 &&
                this.StartAngle >= 360)
            {
                this.isAnimating = false;
            }

            Task.Delay(16).ContinueWith((t) => OnTimerTick());
            this.StateHasChanged();
        }
    }

    protected override void OnInitialized()
    {
        this.Data = new List<DataItem>();
        this.Data.Add(new DataItem { MarketShare = 37, Category = "Cooling", });
        this.Data.Add(new DataItem { MarketShare = 25, Category = "Residential", });
        this.Data.Add(new DataItem { MarketShare = 12, Category = "Heating", });
        this.Data.Add(new DataItem { MarketShare = 11, Category = "Lighting", });
        this.Data.Add(new DataItem { MarketShare = 15, Category = "Other", });

        this.onAnimationToggle();
    }

    public class DataItem
    {
        public string Category { get; set; }
        public double MarketShare { get; set; }
        public string Summary { get { return Category + " " + MarketShare + "%"; } }
    }
}
```

<div class="divider--half"></div>

## Blazor Pie Chart Styling

Once our pie chart is created, we may want to make some further styling customizations such as a change of the colors for the slices of the chart, as demonstrated below:

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
        <IgbPieChart
        Name="chart"
        @ref="chart"
        LegendLabelMemberPath="Category"
        ValueMemberPath="Value"
        LabelMemberPath="Summary"
        LabelsPosition="LabelsPosition.OutsideEnd"
        LabelExtent="30"
        Brushes="#f7d262 #a8a8b7 #e051a9 #f8a15f #735656"
        Outlines="white"
        RadiusFactor="0.7"
        StartAngle="0"
        DataSource="EnergyGlobalDemand">
        </IgbPieChart>

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

    private IgbItemLegend legend;
    private IgbPieChart chart;

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

## Blazor Radial Pie Chart

The Radial Pie Chart belongs to a group of Radial Charts and uses belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

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
        IsVerticalZoomEnabled="false">
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

            <IgbRadialPieSeries
            Name="RadialPieSeries1"
            @ref="radialPieSeries1"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Ronaldo"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="3"
            Title="Ronaldo">
            </IgbRadialPieSeries>

            <IgbRadialPieSeries
            Name="RadialPieSeries2"
            @ref="radialPieSeries2"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Messi"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="3"
            Title="Messi">
            </IgbRadialPieSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer">
            </IgbDataToolTipLayer>

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
        var radialPieSeries1 = this.radialPieSeries1;
        var radialPieSeries2 = this.radialPieSeries2;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryAngleAxis angleAxis;
    private IgbNumericRadiusAxis radiusAxis;
    private IgbRadialPieSeries radialPieSeries1;
    private IgbRadialPieSeries radialPieSeries2;
    private IgbDataToolTipLayer dataToolTipLayer;

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

<div class="divider--half"></div>

## Additional Resources

- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`LegendItemBadgeTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_LegendItemBadgeTemplate)
- [`LegendItemTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_LegendItemTemplate)
- [`LegendLabelMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_LegendLabelMemberPath)
- [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_OthersCategoryThreshold)
- [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_OthersCategoryType)
- [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChartBase.html#IgniteUI_Blazor_Controls_IgbPieChartBase_SelectionMode)

|Chart Type       | Control Name   | API Members |
|-----------------|----------------|------------ |
|Pie Chart      | [`IgbPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPieChart.html)     | `PieChart` |
|Radial Pie Chart | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbRadialPieSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialPieSeries.html) |
