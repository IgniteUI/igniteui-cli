---
title: Blazor Sparkline | Data Visualization Tools | Infragistics
_description: Use Infragistics' Blazor sparkline chart control to render in a small scale layout such as a grid cell or stand alone. Learn about the Ignite UI for Blazor sparkline chart configurable elements!
_keywords: Sparkline, Ignite UI for Blazor, Infragistics, WinLoss, Area, Column
_license: commercial
mentionedTypes: ["XamSparkline", "SparklineDisplayType", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_tocName: Sparkline Chart
_premium: true
---

# Blazor Sparkline

The Ignite UI for Blazor Sparkline is a lightweight charting control. It is intended for rendering within a small-scale layout such as within a grid cell but can also be rendered alone. The `Sparkline` has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips.

## Blazor Sparkline Example

The following example shows all the different types of `Sparkline` available. The type is defined by setting the [`DisplayType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_DisplayType) property. If the [`DisplayType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_DisplayType) property is not specified, then by default, the `Line` type is displayed.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">

        @if (Data != null)
        {
            <label class="legend-title">Sparkline with Line Display Type</label>
            <div class="container" style="padding: 0.5rem;">
                <IgbSparkline Height="100%" Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.Line"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>

            <label class="legend-title">Sparkline with Area Display Type</label>
            <div class="container" style="padding: 0.5rem;">
                <IgbSparkline Height="100%"  Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.Area"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>

            <label class="legend-title">Sparkline with Column Display Type</label>
            <div class="container" style="padding: 0.5rem;">
               <IgbSparkline Height="100%" Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.Column"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>

            <label class="legend-title">Sparkline with Win/Loss Display Type</label>
            <div class="container" style="padding: 0.5rem;">
                <IgbSparkline Height="100%" Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.WinLoss"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>
        }

</div>

@code {

    private List<SparklineItem> Data;

    protected override void OnInitialized()
    {
        this.Data = SparklineData.Generate();
    }

}
```


<div class="divider--half"></div>

Like this sample? Get access to our complete Blazor toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-blazor/download">Download it for free.</a>

## Sparkline Recommendations

### Is the Sparkline chart right for your project?

The primary benefit of the Sparkline control compared to other charting controls is that it can render in a limited space such as a grid cell with all its visual elements shown.

The Blazor Sparkline has the ability to mark the data points with elliptical icons to indicate the highest, lowest, first, last, and negative values. The markers can be customized with a desired shape, color, or image.

### Sparkline Use Cases

- You have a compact space to display a chart in.
- You want to show trends in a series of values, such as weekly revenue.

### Sparkline Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Sparkline

- You need to analyze the data in detail.
- You need to display every label of the data points. It only allows showing high and low values on the Y-Axis, and first and last values on the X-Axis.

### Sparkline Data Structure

- It requires one-dimensional data.
- The data set must contain at least two numeric fields.
- The text in the data source fields can be used to display the first and last label on the X-Axis.

## Sparkline Types

The Blazor Sparkline supports the following types of sparklines by setting the [`DisplayType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_DisplayType) property accordingly:

- `Line`:  Displays the line chart type of Sparkline with numeric data, connecting the data points with line segments. At least two data points must be supplied to visualize the data in Sparkline.
- `Area`: Displays the Area chart type of Sparkline with numeric data. This is like line type with additional steps of closing the area after each line is drawn. At least two data points must be supplied to visualize the data in Sparkline.
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html): Displays the Column chart type of Sparkline with numeric data. Some may refer to it as vertical bars. This type can render a single data point, but it would require specifying the minimum value range property (minimum) in Sparkline so the supplied single data point can be visible, otherwise the value will be treated as the minimum value and will not be visible.
- `WinLoss`: This type is similar in its visual appearance to Column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative value) of the data set. The idea is to indicate a win or loss scenario. For the Win/Loss chart to display properly, the data set must have both positive and negative values. If the WinLoss sparkline is bound to the same data as the other types such as the Line type, which can be bound to a collection of numeric values, then the Blazor Sparkline will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">

        @if (Data != null)
        {
            <label class="legend-title">Sparkline with Line Display Type</label>
            <div class="container" style="padding: 0.5rem;">
                <IgbSparkline Height="100%" Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.Line"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>

            <label class="legend-title">Sparkline with Area Display Type</label>
            <div class="container" style="padding: 0.5rem;">
                <IgbSparkline Height="100%"  Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.Area"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>

            <label class="legend-title">Sparkline with Column Display Type</label>
            <div class="container" style="padding: 0.5rem;">
               <IgbSparkline Height="100%" Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.Column"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>

            <label class="legend-title">Sparkline with Win/Loss Display Type</label>
            <div class="container" style="padding: 0.5rem;">
                <IgbSparkline Height="100%" Width="100%" DataSource="Data"
                           DisplayType="SparklineDisplayType.WinLoss"
                           ValueMemberPath="Value"
                           LabelMemberPath="Angle">
                </IgbSparkline>
            </div>
        }

</div>

@code {

    private List<SparklineItem> Data;

    protected override void OnInitialized()
    {
        this.Data = SparklineData.Generate();
    }

}
```


<div class="divider--half"></div>

## Markers

The Blazor Sparkline allows you to show markers as circular-colored icons on your series to indicate the individual data points based on X/Y coordinates. Markers can be set on sparklines of display types of `Line`, `Area`, and [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html). The `WinLoss` type of sparkline does not currently accept markers. By default, markers are not displayed, but they can be enabled by setting the corresponding marker visibility property.

Markers in the sparkline can be placed in any combination of the following locations:

- `All`: Display markers for all data points in the sparkline.
- `Low`: Display markers on the data point of the lowest value. If there are multiple points at the lowest value, it will show on each point with that value.
- `High`: Display markers on the data point of the highest value. If there are multiple points at the highest value, it will show on each point with that value.
- `First`: Display a marker on the first data point in the sparkline.
- `Last`: Display a marker on the last data point in the sparkline.
- `Negative`: Display markers on the negative data points plotted in the sparkline.

All of the markers mentioned above can be customized using the related marker type's property in aspects of color, visibility, and size. For example, the `Low` markers above will have properties [`LowMarkerBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_LowMarkerBrush), [`LowMarkerVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_LowMarkerVisibility), and [`LowMarkerSize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_LowMarkerSize).

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="Sparkline"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="FirstMarkerVisibility"
            Name="FirstMarkerVisibilityEditor"
            @ref="firstMarkerVisibilityEditor"
            Label="First Markers"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Visible", "Collapsed" })"
            DropDownValues="@(new string[] { "Visible", "Collapsed" })"
            PrimitiveValue="@("Visible")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="HighMarkerVisibility"
            Name="HighMarkerVisibilityEditor"
            @ref="highMarkerVisibilityEditor"
            Label="High Markers"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Visible", "Collapsed" })"
            DropDownValues="@(new string[] { "Visible", "Collapsed" })"
            PrimitiveValue="@("Visible")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="LowMarkerVisibility"
            Name="LowMarkerVisibilityEditor"
            @ref="lowMarkerVisibilityEditor"
            Label="Low Markers"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Visible", "Collapsed" })"
            DropDownValues="@(new string[] { "Visible", "Collapsed" })"
            PrimitiveValue="@("Visible")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="NegativeMarkerVisibility"
            Name="NegativeMarkerVisibilityEditor"
            @ref="negativeMarkerVisibilityEditor"
            Label="Negative Markers"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Visible", "Collapsed" })"
            DropDownValues="@(new string[] { "Visible", "Collapsed" })"
            PrimitiveValue="@("Visible")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="LastMarkerVisibility"
            Name="LastMarkerVisibilityEditor"
            @ref="lastMarkerVisibilityEditor"
            Label="Last Markers"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Visible", "Collapsed" })"
            DropDownValues="@(new string[] { "Visible", "Collapsed" })"
            PrimitiveValue="@("Visible")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="MarkerVisibility"
            Name="MarkerVisibilityEditor"
            @ref="markerVisibilityEditor"
            Label="All Markers"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Visible", "Collapsed" })"
            DropDownValues="@(new string[] { "Visible", "Collapsed" })"
            PrimitiveValue="@("Visible")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbSparkline
        Name="chart"
        @ref="chart"
        DataSource="SparklineProfitData"
        DisplayType="SparklineDisplayType.Line"
        LabelMemberPath="Label"
        ValueMemberPath="Value"
        MarkerVisibility="Visibility.Visible"
        HighMarkerVisibility="Visibility.Visible"
        LowMarkerVisibility="Visibility.Visible"
        FirstMarkerVisibility="Visibility.Visible"
        LastMarkerVisibility="Visibility.Visible"
        NegativeMarkerVisibility="Visibility.Visible"
        MarkerSize="10"
        FirstMarkerSize="10"
        LastMarkerSize="10"
        LowMarkerSize="10"
        HighMarkerSize="10"
        NegativeMarkerSize="10"
        Minimum="0"
        Maximum="60">
        </IgbSparkline>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var firstMarkerVisibilityEditor = this.firstMarkerVisibilityEditor;
        var highMarkerVisibilityEditor = this.highMarkerVisibilityEditor;
        var lowMarkerVisibilityEditor = this.lowMarkerVisibilityEditor;
        var negativeMarkerVisibilityEditor = this.negativeMarkerVisibilityEditor;
        var lastMarkerVisibilityEditor = this.lastMarkerVisibilityEditor;
        var markerVisibilityEditor = this.markerVisibilityEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription firstMarkerVisibilityEditor;
    private IgbPropertyEditorPropertyDescription highMarkerVisibilityEditor;
    private IgbPropertyEditorPropertyDescription lowMarkerVisibilityEditor;
    private IgbPropertyEditorPropertyDescription negativeMarkerVisibilityEditor;
    private IgbPropertyEditorPropertyDescription lastMarkerVisibilityEditor;
    private IgbPropertyEditorPropertyDescription markerVisibilityEditor;
    private IgbSparkline chart;

    private SparklineProfitData _sparklineProfitData = null;
    public SparklineProfitData SparklineProfitData
    {
        get
        {
            if (_sparklineProfitData == null)
            {
                _sparklineProfitData = new SparklineProfitData();
            }
            return _sparklineProfitData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SparklineProfitDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }
}

public class SparklineProfitData
    : List<SparklineProfitDataItem>
{
    public SparklineProfitData()
    {
        this.Add(new SparklineProfitDataItem() { Value = 30, Label = @"A" });
        this.Add(new SparklineProfitDataItem() { Value = 40, Label = @"B" });
        this.Add(new SparklineProfitDataItem() { Value = 50, Label = @"C" });
        // ... 5 more items
    }
}
```


<div class="divider--half"></div>

## Normal Range

The normal range feature of the Blazor Sparkline is a horizontal stripe representing some pre-defined meaningful range when the data is being visualized. The normal range can be set as a shaded area outlined with the desired color.

The normal range can be wider than the maximum data point or beyond, and it can also be as thin as the sparkline's `Line` display type, to serve as a threshold indicator, for instance. The width of the normal range is determined by the following three properties, which serve as the minimum settings required for displaying the normal range:

- [`NormalRangeVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_NormalRangeVisibility): Whether the normal range is visible.
- [`NormalRangeMaximum`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_NormalRangeMaximum): The bottom border of the range.
- [`NormalRangeMinimum`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_NormalRangeMinimum): The top border of the range.

By default, the normal range is not displayed. When enabled, the normal range shows up with a light gray color appearance, which can also be configured using the [`NormalRangeFill`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_NormalRangeFill) property.

You can also configure whether to show the normal range in front of or behind the plotted series in your Blazor Sparkline by setting the [`DisplayNormalRangeInFront`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_DisplayNormalRangeInFront) property.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="Sparkline"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="NormalRangeVisibility"
            Name="NormalRangeVisibilityEditor"
            @ref="normalRangeVisibilityEditor"
            Label="Normal Range Visibility"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Visible", "Collapsed" })"
            DropDownValues="@(new string[] { "Visible", "Collapsed" })"
            PrimitiveValue="@("Visible")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="NormalRangeMinimum"
            Name="NormalRangeMinimumEditor"
            @ref="normalRangeMinimumEditor"
            Label="Normal Range Minimum"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "0", "10", "15", "20", "25", "30" })"
            DropDownValues="@(new string[] { "0", "10", "15", "20", "25", "30" })"
            PrimitiveValue="25">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="NormalRangeMaximum"
            Name="NormalRangeMaximumEditor"
            @ref="normalRangeMaximumEditor"
            Label="Normal Range Maximum"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "0", "10", "15", "20", "25", "30" })"
            DropDownValues="@(new string[] { "0", "10", "15", "20", "25", "30" })"
            PrimitiveValue="25">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbSparkline
        Name="chart"
        @ref="chart"
        DataSource="SparklineMixedData"
        DisplayType="SparklineDisplayType.Area"
        LabelMemberPath="Label"
        ValueMemberPath="Value"
        NormalRangeVisibility="Visibility.Visible"
        NormalRangeMinimum="15"
        NormalRangeMaximum="25">
        </IgbSparkline>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var normalRangeVisibilityEditor = this.normalRangeVisibilityEditor;
        var normalRangeMinimumEditor = this.normalRangeMinimumEditor;
        var normalRangeMaximumEditor = this.normalRangeMaximumEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription normalRangeVisibilityEditor;
    private IgbPropertyEditorPropertyDescription normalRangeMinimumEditor;
    private IgbPropertyEditorPropertyDescription normalRangeMaximumEditor;
    private IgbSparkline chart;

    private SparklineMixedData _sparklineMixedData = null;
    public SparklineMixedData SparklineMixedData
    {
        get
        {
            if (_sparklineMixedData == null)
            {
                _sparklineMixedData = new SparklineMixedData();
            }
            return _sparklineMixedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SparklineMixedDataItem
{
    public string Label { get; set; }
    public double Value { get; set; }
}

public class SparklineMixedData
    : List<SparklineMixedDataItem>
{
    public SparklineMixedData()
    {
        this.Add(new SparklineMixedDataItem() { Label = @"A", Value = 30 });
        this.Add(new SparklineMixedDataItem() { Label = @"B", Value = -10 });
        this.Add(new SparklineMixedDataItem() { Label = @"C", Value = 40 });
        // ... 5 more items
    }
}
```


<div class="divider--half"></div>

## Trendlines

The Blazor Sparkline has support for a range of trendlines that display as another layer on top of the actual sparkline layer. To display a sparkline, you can use the [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_TrendLineType) property.

The trendlines are calculated according to the algorithm specified by the [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_TrendLineType) property using the values of the data the the chart is bound to.

Trendlines can only be displayed one at a time and by default, the trendline is not displayed.

The sample below shows all the available trendlines via the dropdown:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="Sparkline"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="TrendLineType"
            Name="TrendLineTypeEditor"
            @ref="trendLineTypeEditor"
            Label="Trendline Type"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "CubicFit", "CumulativeAverage", "ExponentialAverage", "ExponentialFit", "LinearFit", "LogarithmicFit", "ModifiedAverage", "None", "PowerLawFit", "QuadraticFit", "QuarticFit", "QuinticFit", "SimpleAverage", "WeightedAverage" })"
            DropDownValues="@(new string[] { "CubicFit", "CumulativeAverage", "ExponentialAverage", "ExponentialFit", "LinearFit", "LogarithmicFit", "ModifiedAverage", "None", "PowerLawFit", "QuadraticFit", "QuarticFit", "QuinticFit", "SimpleAverage", "WeightedAverage" })"
            PrimitiveValue="@("CubicFit")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbSparkline
        Name="chart"
        @ref="chart"
        DataSource="SparklineMixedData"
        DisplayType="SparklineDisplayType.Area"
        LabelMemberPath="Label"
        ValueMemberPath="Value"
        TrendLineType="TrendLineType.CubicFit">
        </IgbSparkline>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var trendLineTypeEditor = this.trendLineTypeEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription trendLineTypeEditor;
    private IgbSparkline chart;

    private SparklineMixedData _sparklineMixedData = null;
    public SparklineMixedData SparklineMixedData
    {
        get
        {
            if (_sparklineMixedData == null)
            {
                _sparklineMixedData = new SparklineMixedData();
            }
            return _sparklineMixedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SparklineMixedDataItem
{
    public string Label { get; set; }
    public double Value { get; set; }
}

public class SparklineMixedData
    : List<SparklineMixedDataItem>
{
    public SparklineMixedData()
    {
        this.Add(new SparklineMixedDataItem() { Label = @"A", Value = 30 });
        this.Add(new SparklineMixedDataItem() { Label = @"B", Value = -10 });
        this.Add(new SparklineMixedDataItem() { Label = @"C", Value = 40 });
        // ... 5 more items
    }
}
```


<div class="divider--half"></div>

## Unknown Value Interpolation

The Blazor Sparkline can detect unknown values and render the space for unknown values through a specified interpolation algorithm. If your data contains null values and you do not use this feature, meaning no interpolation is specified, the unknown value will not be plotted.

To plot the unknown values, you can set the [`UnknownValuePlotting`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_UnknownValuePlotting) property of the Blazor Sparkline. The sample below shows the differences between the values of the [`UnknownValuePlotting`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_UnknownValuePlotting) property, allowing you to toggle it on or off using a checkbox:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="Sparkline"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="UnknownValuePlotting"
            Name="UnknownValuePlottingEditor"
            @ref="unknownValuePlottingEditor"
            Label="Unknown Value Plotting"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "LinearInterpolate", "DontPlot" })"
            DropDownValues="@(new string[] { "LinearInterpolate", "DontPlot" })"
            PrimitiveValue="@("LinearInterpolate")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbSparkline
        Name="chart"
        @ref="chart"
        DataSource="SparklineUnknownData"
        DisplayType="SparklineDisplayType.Area"
        LabelMemberPath="Label"
        ValueMemberPath="Value"
        UnknownValuePlotting="UnknownValuePlotting.LinearInterpolate">
        </IgbSparkline>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var unknownValuePlottingEditor = this.unknownValuePlottingEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription unknownValuePlottingEditor;
    private IgbSparkline chart;

    private SparklineUnknownData _sparklineUnknownData = null;
    public SparklineUnknownData SparklineUnknownData
    {
        get
        {
            if (_sparklineUnknownData == null)
            {
                _sparklineUnknownData = new SparklineUnknownData();
            }
            return _sparklineUnknownData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SparklineUnknownDataItem
{
    public double Label { get; set; }
    public double Value { get; set; }
}

public class SparklineUnknownData
    : List<SparklineUnknownDataItem>
{
    public SparklineUnknownData()
    {
        this.Add(new SparklineUnknownDataItem() { Label = 4, Value = 4 });
        this.Add(new SparklineUnknownDataItem() { Label = 5, Value = 5 });
        this.Add(new SparklineUnknownDataItem() { Label = 2, Value = double.NaN });
        // ... 7 more items
    }
}
```


<div class="divider--half"></div>

## Sparkline in Data Grid

You can embed the Blazor Sparkline in a template column of data grid or other UI controls that support templates. The following code example shows how to do this:

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Rendering
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbDataGrid Height="100%" Width="100%"
                      RowHeight="90"
                      AutoGenerateColumns="false"

                      DataSource="Data">
                <IgbTextColumn Field="ProductID" HeaderText="ID" Width="@("*>110")"
                            HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbTextColumn Field="ProductName" HeaderText="Product" Width="@("*>140")" />
                <IgbNumericColumn Field="ProductPrice" HeaderText="Price" Width="@("*>110")"
                               PositivePrefix="$" ShowGroupingSeparator="true"
                               MinFractionDigits="2" />

                @* custom sparkline solumn: *@
                <IgbTemplateColumn Field="OrderHistory" Width="@("*>180")"
                                HeaderText="Order History" PaddingTop="10" PaddingBottom="10"
                                HorizontalAlignment="CellContentHorizontalAlignment.Center">
                    <Template>
                        <div style="width: 100%; height: 70px; background: transparent">
                            <IgbSparkline Height="100%" Width="100%"
                                       DataSource="@((context.RowItem as Product).OrderHistory)"
                                       DisplayType="SparklineDisplayType.Line"
                                       ValueMemberPath="Sold"
                                       LabelMemberPath="Week"
                                       Brush="rgb(21, 190, 6)">
                            </IgbSparkline>
                        </div>
                    </Template>
                </IgbTemplateColumn>

                <IgbNumericColumn Field="OrderCount" HeaderText="Orders" Width="@("*>110")"
                               HorizontalAlignment="CellContentHorizontalAlignment.Center" />
                <IgbNumericColumn Field="Profit" Width="@("*>120")" PositivePrefix="$" ShowGroupingSeparator="true" />

                <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>120")"
                             ContentOpacity="1" HorizontalAlignment="CellContentHorizontalAlignment.Center"
                             PaddingTop="10" PaddingBottom="10"/>
                <IgbTextColumn Field="Status" HeaderText="Status" Width="@("*>120")"
                            HorizontalAlignment="CellContentHorizontalAlignment.Center" />
            </IgbDataGrid>
        }
    </div>
</div>

@code {

    private List<Product> Data;

    protected override void OnInitialized()
    {
        this.Data = Products.GetData(20);
    }
}
```


## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`DisplayNormalRangeInFront`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_DisplayNormalRangeInFront)
- [`DisplayType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_DisplayType)
- [`LowMarkerBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_LowMarkerBrush)
- [`LowMarkerSize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_LowMarkerSize)
- [`LowMarkerVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_LowMarkerVisibility)
- [`NormalRangeFill`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_NormalRangeFill)
- [`UnknownValuePlotting`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html#IgniteUI_Blazor_Controls_IgbSparkline_UnknownValuePlotting)
- [`IgbSparkline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html)
