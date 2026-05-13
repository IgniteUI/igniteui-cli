---
title: Blazor Pie Charts and Graphs | Ignite UI for Blazor
_description: The Ignite UI for Blazor data pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections. Try for FREE.
_keywords: Blazor charts, pie chart, Ignite UI for Blazor, Infragistics, data binding, slice selection, animation, highlighting, legend
_license: commercial
mentionedTypes: ["DataPieChart", "XamDataChart", "OthersCategoryType", "SeriesSelectionMode", "SeriesSelectionBehavior", "SeriesHighlightingBehavior"]
namespace: Infragistics.Controls.Charts
_tocName: Data Pie Chart
_premium: true
---

# Blazor Data Pie Chart

The Ignite UI for Blazor Data Pie Chart is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## Blazor Data Pie Chart Example

You can create the Blazor Pie Chart in the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Global Electricity Demand by Energy Use
    </div>
    <div class="container vertical fill">
        <IgbDataPieChart
        Name="chart"
        @ref="chart"
        DataSource="EnergyGlobalDemand">
        </IgbDataPieChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;

    }

    private IgbDataPieChart chart;

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

## Blazor Data Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization such as Doughnut (Ring) Chart, Funnel Chart, Stacked Area Chart, Stacked Bar Chart, and Treemap.

The Blazor Data Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Selection
- Slice Highlighting
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

## Blazor Data Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`Legend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Legend) property. The ItemLegend will display its items in vertical orientation as a default, but this can be changed by setting its `Orientation` property.

The labels shown on the legend will display the same content as the label that is shown for each slice in the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) by default, but this can be modified by utilizing the [`LegendSliceLabelContentMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_LegendSliceLabelContentMode) property on the chart. This exposes an enumeration that allows you to show the label, value, percentage, or any combination of those as the legend's content for each slice in the chart.

You can also modify the ItemLegend badge. By default, it appears as a filled circle corresponding to the color of the associated chart slice. You can configure this by using the [`LegendItemBadgeShape`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_LegendItemBadgeShape) property on the chart, and you can set this to be a circle, line, bar, column, and more.

Below is an example that demonstrates usage of the ItemLegend with the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html).

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
        <IgbDataPieChart
        Name="chart"
        @ref="chart"
        DataSource="EnergyGlobalDemand">
        </IgbDataPieChart>

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
    private IgbDataPieChart chart;

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

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice.

The Others category in the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) has three main, configurable properties - [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryType), [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryThreshold), and [`OthersCategoryText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryText) that allow you to configure how the Others slice in the chart is shown. These are each described below:

The [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryType) property works in tandem with the [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryThreshold) property of the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html). For the [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryType), you can define whether you want the [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryThreshold) to be evaluated as a number or a percentage. For example, if you decide on number and set the [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryThreshold) to 5, any slices that have a value less than 5 will become part of the Others category. Using the same value of 5 with a percent type, any values that are less than 5 percent of the total values of the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) will become part of the Others category.

To get the underlying data items that are contained within the Others slice in the chart, you can utilize the [`GetOthersContext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_GetOthersContext) method on the chart. This return type of this method is an [`IgbOthersCategoryContext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbOthersCategoryContext.html) which exposes an [`Items`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbOthersCategoryContext.html#IgniteUI_Blazor_Controls_IgbOthersCategoryContext_Items) property. The [`Items`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbOthersCategoryContext.html#IgniteUI_Blazor_Controls_IgbOthersCategoryContext_Items) property returns an array that will contain the items in the Others slice. Additionally, when clicking the Others slice, the `Item` property of the event arguments for the `SeriesClick` event will be will also return this [`IgbOthersCategoryContext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbOthersCategoryContext.html).

By default, the Others slice will be represented by a label of "Others." You can change this by modifying the [`OthersCategoryText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryText) property of the chart.

### Blazor Styling the Others Slice

You can style the aggregated Others slice separately from other slices by using these properties:

- `OthersCategoryBrush`\
    Sets the fill (brush) used for the Others slice.

- `OthersCategoryOutline`\
    Sets the outline (stroke) used for the Others slice.

These properties only affect the Others slice (when it exists). All other slices continue to use the normal palette and item-wise coloring behavior.

> [!NOTE]
> The Others slice is only rendered when the chart is configured to create it (for example, with [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryThreshold) greater than `0` and an appropriate [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryType)). If the Others slice is not present, `OthersCategoryBrush` and `OthersCategoryOutline` have no visible effect.

If you want to ensure that the Others category does not show up in the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html), you can set the [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryThreshold) to 0.

The following sample demonstrates usage of the Others slice in the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html):

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="DataPieChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="OthersCategoryType"
            Name="OthersCategoryTypeEditor"
            @ref="othersCategoryTypeEditor"
            Label="Others Type: "
            PrimitiveValue="@("Number")"
            ValueType="PropertyEditorValueType.EnumValue">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="OthersCategoryThreshold"
            Name="OthersCategoryThresholdEditor"
            @ref="othersCategoryThresholdEditor"
            Label="Others Threshold: "
            ValueType="PropertyEditorValueType.Slider"
            Min="0"
            Max="50"
            PrimitiveValue="15">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="OthersCategoryText"
            Name="OthersCategoryTextEditor"
            @ref="othersCategoryTextEditor"
            Label="Others Text: "
            ValueType="PropertyEditorValueType.StringValue">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Global Electricity Demand by Energy Use
    </div>
    <div class="container vertical fill">
        <IgbDataPieChart
        Name="chart"
        @ref="chart"
        DataSource="DataPieData"
        OthersCategoryType="OthersCategoryType.Number"
        OthersCategoryThreshold="15">
        </IgbDataPieChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var othersCategoryTypeEditor = this.othersCategoryTypeEditor;
        var othersCategoryThresholdEditor = this.othersCategoryThresholdEditor;
        var othersCategoryTextEditor = this.othersCategoryTextEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription othersCategoryTypeEditor;
    private IgbPropertyEditorPropertyDescription othersCategoryThresholdEditor;
    private IgbPropertyEditorPropertyDescription othersCategoryTextEditor;
    private IgbDataPieChart chart;

    private DataPieData _dataPieData = null;
    public DataPieData DataPieData
    {
        get
        {
            if (_dataPieData == null)
            {
                _dataPieData = new DataPieData();
            }
            return _dataPieData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class DataPieDataItem
{
    public double V1 { get; set; }
    public string Category { get; set; }
}

public class DataPieData
    : List<DataPieDataItem>
{
    public DataPieData()
    {
        this.Add(new DataPieDataItem() { V1 = 100, Category = @"Maintenance" });
        this.Add(new DataPieDataItem() { V1 = 40, Category = @"Cooling" });
        this.Add(new DataPieDataItem() { V1 = 20, Category = @"Residential" });
        // ... 5 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Data Pie Chart Selection

The [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) supports slice selection by mouse click on the slices plotted in the chart. This can be configured by utilizing the [`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SelectionBehavior) and [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SelectionMode) properties of the chart, described below:

The main two options of the [`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SelectionBehavior) are `PerDataItemSingleSelect` and `PerDataItemMultiSelect`, which will enable single and multiple selection, respectively.

The [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SelectionMode) property exposes an enumeration that determines how the pie chart slices respond to being selected. The following are the options of that enumeration and what they do:

- `Brighten`: The selected slices will be highlighted.
- `FadeOthers`: The selected slices will remain their same color and others will fade.
- `FocusColorFill`: The selected slices will change their background to the FocusBrush of the chart.
- `FocusColorOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart.
- `FocusColorThickOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- `GrayscaleOthers`: The unselected slices will have a gray color filter applied to them.
- `None`: There is no effect on the selected slices.
- `SelectionColorFill`: The selected slices will change their background to the SelectionBrush of the chart.
- `SelectionColorOutline`: The selected slices will have an outline with the color defined by the SelectionBrush of the chart.
- `SelectionColorThickOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- `ThickOutline`: The selected slices will apply an outline with the thickness dependent on the Thickness property of the chart.

When a slice is selected, its underlying data item will be added to the SelectedSeriesItems collection of the chart. As such, the XamDataPieChart exposes the SelectedSeriesItemsChanged event to detect when a slice has been selected and this collection is changed.

The following sample demonstrates the selection feature of the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) control:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="DataPieChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            Label="Selection Behavior: "
            ValueType="PropertyEditorValueType.EnumValue"
            PropertyPath="SelectionBehavior"
            Name="SelectionBehaviorEditor"
            @ref="selectionBehaviorEditor"
            ShouldOverrideDefaultEditor="true"
            DropDownNames="@(new string[] { "PerDataItemSingleSelect", "PerDataItemMultiSelect" })"
            DropDownValues="@(new string[] { "PerDataItemSingleSelect", "PerDataItemMultiSelect" })"
            PrimitiveValue="@("PerDataItemSingleSelect")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="SelectionMode"
            Name="SelectionModeEditor"
            @ref="selectionModeEditor"
            Label="Selection Mode: "
            PrimitiveValue="@("Brighten")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Global Electricity Demand by Energy Use
    </div>
    <div class="container vertical fill">
        <IgbDataPieChart
        Name="chart"
        @ref="chart"
        DataSource="EnergyGlobalDemand"
        HighlightingMode="SeriesHighlightingMode.None"
        SelectionMode="SeriesSelectionMode.Brighten"
        SelectionBehavior="SeriesSelectionBehavior.PerDataItemSingleSelect"
        SelectionBrush="dodgerblue"
        FocusBrush="black"
        Thickness="3">
        </IgbDataPieChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var selectionBehaviorEditor = this.selectionBehaviorEditor;
        var selectionModeEditor = this.selectionModeEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription selectionBehaviorEditor;
    private IgbPropertyEditorPropertyDescription selectionModeEditor;
    private IgbDataPieChart chart;

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

## Blazor Data Pie Chart Highlighting

The [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) supports mouse over highlighting, as well as a highlighting overlay that can be configured by providing a separate data source.

First, the [`HighlightingBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingBehavior) enumerated property determines how a slice will be highlighted. The following are the options of that property and what they do:

- `DirectlyOver`: The slices are only highlighted when the mouse is directly over them.
- `NearestItems`: The nearest slice to the mouse position will be highlighted.
- `NearestItemsAndSeries`: The nearest slice and series to the mouse position will be highlighted.
- `NearestItemsRetainMainShapes`: The nearest items to the mouse position will be highlighted and the main shapes of the series will not be de-emphasized.

The [`HighlightingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightingMode) enumerated property determines how the data pie chart slices respond to being highlighted. The following are the options of that property and what they do:

- `Brighten`: The series will have its color brightened when the mouse position is over or near it.
- `BrightenSpecific`: The specific slice will have its color brightened when the mouse position is over or near it.
- `FadeOthers`: The series will retain its color when the mouse position is over or near it, while the others will appear faded.
- `FadeOthersSpecific`: The specific slice will retain its color when the mouse position is over or near it, while the others will appear faded.
- `None`: The series and slices will not be highlighted.

The following example demonstrates the mouse highlighting behaviors of the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) component:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="DataPieChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="HighlightingMode"
            Name="HighlightingModeEditor"
            @ref="highlightingModeEditor"
            Label="Highlighting Mode: "
            PrimitiveValue="@("BrightenSpecific")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="HighlightingBehavior"
            Name="HighlightingBehaviorEditor"
            @ref="highlightingBehaviorEditor"
            Label="Highlighting Behavior: "
            PrimitiveValue="@("DirectlyOver")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Global Electricity Demand by Energy Use
    </div>
    <div class="container vertical fill">
        <IgbDataPieChart
        Name="chart"
        @ref="chart"
        DataSource="EnergyGlobalDemand"
        HighlightingBehavior="SeriesHighlightingBehavior.DirectlyOver"
        HighlightingMode="SeriesHighlightingMode.BrightenSpecific">
        </IgbDataPieChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var highlightingModeEditor = this.highlightingModeEditor;
        var highlightingBehaviorEditor = this.highlightingBehaviorEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription highlightingModeEditor;
    private IgbPropertyEditorPropertyDescription highlightingBehaviorEditor;
    private IgbDataPieChart chart;

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

In addition to the mouse highlighting, the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) exposes a highlight filter capability that can display a subset of your data. This is applied by specifying a `HighlightedDataSource` for the control and by setting the [`HighlightedValuesDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_HighlightedValuesDisplayMode) property to `Overlay`. The `HighlightedDataSource` expects a subset of the data assigned to the `DataSource` property of the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html).

When these conditions are met, the values of the subset will be highlighted, while the remainder of the full set of data will be faded - effectively creating a highlight for the subset and allowing easier visualization of a subset of your data within the same control.

The following example demonstrates highlight filtering.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataPieChart
        Name="chart"
        @ref="chart"
        DataSource="OnlineTrafficHighlightTotals"
        HighlightedDataSource="OnlineTrafficHighlightDesktopOnly"
        HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Overlay">
        </IgbDataPieChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;

    }

    private IgbDataPieChart chart;

    private OnlineTrafficHighlightTotals _onlineTrafficHighlightTotals = null;
    public OnlineTrafficHighlightTotals OnlineTrafficHighlightTotals
    {
        get
        {
            if (_onlineTrafficHighlightTotals == null)
            {
                _onlineTrafficHighlightTotals = new OnlineTrafficHighlightTotals();
            }
            return _onlineTrafficHighlightTotals;
        }
    }

    private OnlineTrafficHighlightDesktopOnly _onlineTrafficHighlightDesktopOnly = null;
    public OnlineTrafficHighlightDesktopOnly OnlineTrafficHighlightDesktopOnly
    {
        get
        {
            if (_onlineTrafficHighlightDesktopOnly == null)
            {
                _onlineTrafficHighlightDesktopOnly = new OnlineTrafficHighlightDesktopOnly();
            }
            return _onlineTrafficHighlightDesktopOnly;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OnlineTrafficHighlightDesktopOnlyItem
{
    public string Category { get; set; }
    public double Value { get; set; }
}

public class OnlineTrafficHighlightDesktopOnly
    : List<OnlineTrafficHighlightDesktopOnlyItem>
{
    public OnlineTrafficHighlightDesktopOnly()
    {
        this.Add(new OnlineTrafficHighlightDesktopOnlyItem() { Category = @"Apparel", Value = 27 });
        this.Add(new OnlineTrafficHighlightDesktopOnlyItem() { Category = @"Beauty", Value = 29 });
        this.Add(new OnlineTrafficHighlightDesktopOnlyItem() { Category = @"Travel", Value = 41 });
        // ... 4 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class OnlineTrafficHighlightTotalsItem
{
    public string Category { get; set; }
    public double Value { get; set; }
}

public class OnlineTrafficHighlightTotals
    : List<OnlineTrafficHighlightTotalsItem>
{
    public OnlineTrafficHighlightTotals()
    {
        this.Add(new OnlineTrafficHighlightTotalsItem() { Category = @"Apparel", Value = 56 });
        this.Add(new OnlineTrafficHighlightTotalsItem() { Category = @"Beauty", Value = 67 });
        this.Add(new OnlineTrafficHighlightTotalsItem() { Category = @"Travel", Value = 80 });
        // ... 4 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Data Pie Chart Animation

The [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) supports animating its slices into view, as well as when a value changes.

You can set the [`IsTransitionInEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html#IgniteUI_Blazor_Controls_IgbDataPieChart_IsTransitionInEnabled) property to **true** to have the pie chart animate into view. The type of animation performed can be configured by setting the [`TransitionInMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html#IgniteUI_Blazor_Controls_IgbDataPieChart_TransitionInMode) enumerated property to the type of animation you would like to see. Additionally, you can also set the [`TransitionInSpeedType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html#IgniteUI_Blazor_Controls_IgbDataPieChart_TransitionInSpeedType) property to scale with index, value, normal, or randomized. The duration of this animation can be controlled by the [`TransitionInDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html#IgniteUI_Blazor_Controls_IgbDataPieChart_TransitionInDuration) property, which takes a `TimeSpan`.

If you would like to animate data changes, this can also be done by setting the [`AnimateSeriesWhenAxisRangeChanges`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_AnimateSeriesWhenAxisRangeChanges) property to **true**. The duration of this change can be configured by setting the [`TransitionDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TransitionDuration) property as well.

The following sample demonstrates the usage of animation in the [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html):

```razor
@using IgniteUI.Blazor.Controls
@using System

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="DataPieChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="ReplayTransitionIn"
            Label="Replay Animation"
            PrimitiveValue="@("Replay Animation")"
            ValueType="PropertyEditorValueType.Button"
            ButtonClicked="EditorButtonReplayTransitionInDomain"
            Name="propertyEditorPropertyDescription1"
            @ref="propertyEditorPropertyDescription1">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Global Electricity Demand by Energy Use
    </div>
    <div class="container vertical fill">
        <IgbDataPieChart
        Name="chart"
        @ref="chart"
        DataSource="EnergyGlobalDemand"
        TransitionInMode="CategoryTransitionInMode.Auto"
        TransitionInDuration="1000"
        TransitionInSpeedType="TransitionInSpeedType.Random"
        HighlightingMode="SeriesHighlightingMode.None">
        </IgbDataPieChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var propertyEditorPropertyDescription1 = this.propertyEditorPropertyDescription1;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription propertyEditorPropertyDescription1;
    private IgbDataPieChart chart;

    public void EditorButtonReplayTransitionInDomain(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = this.chart;
        chart.ReplayTransitionIn();

    }

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

## Additional Resources

- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html#IgniteUI_Blazor_Controls_IgbDataPieChart_ChartType)
- [`OthersCategoryThreshold`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryThreshold)
- [`OthersCategoryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieBaseChart.html#IgniteUI_Blazor_Controls_IgbDataPieBaseChart_OthersCategoryType)
- [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SelectionMode)
- [`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SelectionBehavior)

|Chart Type       | Control Name   | API Members |
|-----------------|----------------|------------ |
|Data Pie Chart      | [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html)     | [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html) |
|Item Legend | [`IgbItemLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbItemLegend.html) | [`IgbItemLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbItemLegend.html) |
