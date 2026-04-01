---
title: Blazor Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' Blazor Axis Gridlines
_keywords: Blazor Axis, Gridlines, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
_tocName: Axis Gridlines
_premium: true
---

# Blazor Axis Gridlines

All Ignite UI for Blazor charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

> \[!Note]
> the following examples can be applied to [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) as well as [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) controls.

Axis major gridlines are long lines that extend horizontally along the Y-Axis or vertically along the X-Axis from locations of axis labels, and they render through the plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines.

Axis tickmarks are displayed along all horizontal and vertical axes at each label at all major line positions of the Blazor chart.

## Blazor Axis Gridlines Example

This example shows how configure the axis gridline to display major and minor gridlines at specified intervals:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="XAxisStroke"
            Name="XAxisStroke"
            @ref="xAxisStroke"
            Label="X Axis Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("gray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="XAxisMajorStroke"
            Name="XAxisMajorStroke"
            @ref="xAxisMajorStroke"
            Label="X Axis Major Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("darkslategray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisStroke"
            Name="YAxisStroke"
            @ref="yAxisStroke"
            Label="Y Axis Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("gray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisMajorStroke"
            Name="YAxisMajorStroke"
            @ref="yAxisMajorStroke"
            Label="Y Axis Major Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("darkslategray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisMinorStroke"
            Name="YAxisMinorStroke"
            @ref="yAxisMinorStroke"
            Label="Y Axis Minor Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("gray")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
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
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Line"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        XAxisStroke="#919191"
        XAxisStrokeThickness="2"
        XAxisInterval="1"
        XAxisMajorStroke="#474747"
        XAxisMajorStrokeThickness="0.5"
        YAxisStroke="gray"
        YAxisStrokeThickness="2"
        YAxisInterval="20"
        YAxisMajorStroke="darkslategray"
        YAxisMajorStrokeThickness="1"
        YAxisMinorInterval="5"
        YAxisMinorStroke="gray"
        YAxisMinorStrokeThickness="0.5"
        Thickness="2">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var xAxisStroke = this.xAxisStroke;
        var xAxisMajorStroke = this.xAxisMajorStroke;
        var yAxisStroke = this.yAxisStroke;
        var yAxisMajorStroke = this.yAxisMajorStroke;
        var yAxisMinorStroke = this.yAxisMinorStroke;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription xAxisStroke;
    private IgbPropertyEditorPropertyDescription xAxisMajorStroke;
    private IgbPropertyEditorPropertyDescription yAxisStroke;
    private IgbPropertyEditorPropertyDescription yAxisMajorStroke;
    private IgbPropertyEditorPropertyDescription yAxisMinorStroke;
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

## Blazor Axis Gridlines Properties

Setting the axis interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis.

In order to display minor gridlines that correspond to minor interval, you need to set [`XAxisMinorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMinorStroke) and [`XAxisMinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMinorStrokeThickness) properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your Blazor chart by setting the following properties:

| Axis Visuals           | Type    | Property Names                                               | Description |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| Major Stroke Color     | string  | [`XAxisMajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMajorStroke) <br> [`YAxisMajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMajorStroke)                   | These properties set the color of axis major gridlines. |
| Minor Stroke Color     | string  | [`XAxisMinorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMinorStroke) <br> [`YAxisMinorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMinorStroke)                   | These properties set the color of axis minor gridlines. |
| Major Stroke Thickness | number  | [`XAxisMajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMajorStrokeThickness) <br> [`YAxisMajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMajorStrokeThickness) | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number  | [`XAxisMinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMinorStrokeThickness) <br> [`YAxisMinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMinorStrokeThickness) | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number  | [`XAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisInterval) <br> [`YAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisInterval)                         | These properties set interval between axis major gridlines and labels. |
| Minor Interval         | number  | [`XAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisMinorInterval) <br> [`YAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisMinorInterval)               | These properties set interval between axis minor gridlines, if used. |
| Axis Line Stroke Color | string  | [`XAxisStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStroke) <br> [`YAxisStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStroke)                   | These properties set the color of an axis line. |
| Axis Stroke Thickness  | number  | [`XAxisStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStrokeThickness) <br> [`YAxisStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStrokeThickness) | These properties set the thickness in pixels of an axis line. |

Regarding the Major and Minor Interval in the table above, it is important to note that the major interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval. The minor interval gridlines are always rendered between the major gridlines, and as such, the minor interval properties should always be set to something much smaller (usually 2-5 times smaller) than the value of the major Interval properties.

On category axes, the intervals are represented as an index between first item and last category item. Generally, this value should equal to 10-20% of total numbers of category items for the major Interval so that all axis labels fit on axis so that they are not clipped by other axis labels. For minor intervals, this is represented as a fraction of the major interval properties. This value generally should equal between 0.25 and 0.5.

On numeric axes, the interval values are represented as a double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.

On date time axes, this value is represented as time span between axis minimum value and axis maximum value.

The following example demonstrates how to customize the gridlines by setting the properties above:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="XAxisStroke"
            Name="XAxisStroke"
            @ref="xAxisStroke"
            Label="X Axis Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("gray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="XAxisMajorStroke"
            Name="XAxisMajorStroke"
            @ref="xAxisMajorStroke"
            Label="X Axis Major Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("darkslategray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisStroke"
            Name="YAxisStroke"
            @ref="yAxisStroke"
            Label="Y Axis Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("gray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisMajorStroke"
            Name="YAxisMajorStroke"
            @ref="yAxisMajorStroke"
            Label="Y Axis Major Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("darkslategray")">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisMinorStroke"
            Name="YAxisMinorStroke"
            @ref="yAxisMinorStroke"
            Label="Y Axis Minor Stroke"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            DropDownValues="@(new string[] { "gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen" })"
            PrimitiveValue="@("gray")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
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
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Line"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        XAxisStroke="#919191"
        XAxisStrokeThickness="2"
        XAxisInterval="1"
        XAxisMajorStroke="#474747"
        XAxisMajorStrokeThickness="0.5"
        YAxisStroke="gray"
        YAxisStrokeThickness="2"
        YAxisInterval="20"
        YAxisMajorStroke="darkslategray"
        YAxisMajorStrokeThickness="1"
        YAxisMinorInterval="5"
        YAxisMinorStroke="gray"
        YAxisMinorStrokeThickness="0.5"
        Thickness="2">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var xAxisStroke = this.xAxisStroke;
        var xAxisMajorStroke = this.xAxisMajorStroke;
        var yAxisStroke = this.yAxisStroke;
        var yAxisMajorStroke = this.yAxisMajorStroke;
        var yAxisMinorStroke = this.yAxisMinorStroke;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription xAxisStroke;
    private IgbPropertyEditorPropertyDescription xAxisMajorStroke;
    private IgbPropertyEditorPropertyDescription yAxisStroke;
    private IgbPropertyEditorPropertyDescription yAxisMajorStroke;
    private IgbPropertyEditorPropertyDescription yAxisMinorStroke;
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


The axes of the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) also have the ability to place a dash array on the major and minor gridlines by utilizing the [`MajorStrokeDashArray`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MajorStrokeDashArray) and [`MinorStrokeDashArray`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MinorStrokeDashArray) properties, respectively. The actual axis line can be dashed as well by setting the [`StrokeDashArray`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_StrokeDashArray) property of the corresponding axis. These properties take an array of numbers that will describe the length of the dashes for the corresponding grid lines.

The following example demonstrates a [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) with the above dash array properties set:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
    </div>
    <div class="legend">
        <IgbLegend
        Name="Legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="CountryRenewableElectricity"
            Label="Year"
            Interval="1"
            MajorStroke="#474747"
            MajorStrokeThickness="0.5"
            Stroke="#919191"
            StrokeThickness="2"
            StrokeDashArray="@(new double[] { 5, 5 })"
            MajorStrokeDashArray="@(new double[] { 5, 5 })"
            TickLength="0">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Stroke="gray"
            StrokeThickness="2"
            Interval="20"
            MajorStroke="darkslategray"
            MajorStrokeThickness="1"
            MinorInterval="5"
            MinorStroke="gray"
            MinorStrokeThickness="0.5"
            StrokeDashArray="@(new double[] { 5, 5 })"
            MajorStrokeDashArray="@(new double[] { 5, 5 })"
            MinorStrokeDashArray="@(new double[] { 2.5, 2.5 })"
            TickLength="0">
            </IgbNumericYAxis>

            <IgbLineSeries
            Name="LineSeries1"
            @ref="lineSeries1"
            Title="Europe"
            XAxisName="xAxis"
            YAxisName="yAxis"
            MarkerType="MarkerType.Circle"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="Europe"
            ShowDefaultTooltip="true">
            </IgbLineSeries>

            <IgbLineSeries
            Name="LineSeries2"
            @ref="lineSeries2"
            Title="China"
            XAxisName="xAxis"
            YAxisName="yAxis"
            MarkerType="MarkerType.Circle"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="China"
            ShowDefaultTooltip="true">
            </IgbLineSeries>

            <IgbLineSeries
            Name="LineSeries3"
            @ref="lineSeries3"
            Title="America"
            XAxisName="xAxis"
            YAxisName="yAxis"
            MarkerType="MarkerType.Circle"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="America"
            ShowDefaultTooltip="true">
            </IgbLineSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var lineSeries1 = this.lineSeries1;
        var lineSeries2 = this.lineSeries2;
        var lineSeries3 = this.lineSeries3;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbLineSeries lineSeries1;
    private IgbLineSeries lineSeries2;
    private IgbLineSeries lineSeries3;

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

## Blazor Axis Tickmarks Example

Axis tick marks are enabled by setting the [`XAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickLength) and [`YAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickLength) properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the [`YAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickLength) property is set to 5, axis labels will be shifted left by that amount.

The following example demonstrates how to customize the tickmarks by setting the properties above:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="XAxisTickLength"
            Name="XAxisTickLength"
            @ref="xAxisTickLength"
            Label="X Axis Tick Length"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.Slider"
            Min="0"
            Max="20"
            PrimitiveValue="10">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
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
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Line"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        XAxisTickLength="10"
        XAxisTickStrokeThickness="1"
        XAxisTickStroke="gray"
        YAxisTickLength="0"
        YAxisTickStrokeThickness="0"
        YAxisTickStroke="#00000000">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var xAxisTickLength = this.xAxisTickLength;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription xAxisTickLength;
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

## Blazor Axis Tickmarks Properties

You can customize how the axis tickmarks are displayed in our Blazor chats by setting the following properties:

| Axis Visuals           | Type    | Property Names                                             | Description |
| -----------------------|---------|------------------------------------------------------------|------------------------- |
| Tick Stroke Color      | string  | [`XAxisTickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickStroke) <br> [`YAxisTickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickStroke)                   | These properties set the color of the tickmarks. |
| Tick Stroke Thickness  | number  | [`XAxisTickStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickStrokeThickness) <br> [`YAxisTickStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickStrokeThickness) | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length     | number  | [`XAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickLength) <br> [`YAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickLength)                   | These properties set the length of the axis tick marks. |

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)                                     | [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) or [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) |
| -------------------------------------------------- | ----------------------------------- |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_Interval)             | [`XAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisInterval) (Major Interval) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_Interval)             | [`YAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisInterval) (Major Interval) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`MinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_MinorInterval)        | [`XAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisMinorInterval)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`MinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_MinorInterval)        | [`YAxisMinorInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMinorInterval)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`MajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MajorStroke)          | [`XAxisMajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMajorStroke)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`MajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MajorStroke)          | [`YAxisMajorStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMajorStroke)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`MajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MajorStrokeThickness) | [`XAxisMajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMajorStrokeThickness) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`MajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MajorStrokeThickness) | [`YAxisMajorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMajorStrokeThickness) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`MinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MinorStrokeThickness) | [`XAxisMinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisMinorStrokeThickness) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`MinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_MinorStrokeThickness) | [`YAxisMinorStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisMinorStrokeThickness) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`StrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_StrokeThickness)      | [`XAxisStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStrokeThickness)   |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`StrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_StrokeThickness)      | [`YAxisStrokeThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStrokeThickness)   |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`Stroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_Stroke)               | [`XAxisStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStroke) (Axis Line Color) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`Stroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_Stroke)               | [`YAxisStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStroke) (Axis Line Color) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`TickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_TickLength)           | [`XAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickLength)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`TickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_TickLength)           | [`YAxisTickLength`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickLength)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`TickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_TickStroke)           | [`XAxisTickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisTickStroke)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`TickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_TickStroke)           | [`YAxisTickStroke`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisTickStroke)    |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ [`Strip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_Strip)                | [`XAxisStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisStrip) (Space between Major Gridlines) |
| [`Axes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html#IgniteUI_Blazor_Controls_IgbDataChart_Axes) ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`Strip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_Strip)                | [`YAxisStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisStrip) (Space between Major Gridlines) |
