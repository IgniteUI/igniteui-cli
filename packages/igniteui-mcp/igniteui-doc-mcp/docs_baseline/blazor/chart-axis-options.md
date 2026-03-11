---
title: Blazor Axis Options | Data Visualization | Infragistics
_description: Infragistics' Blazor Axis Options
_keywords: Blazor Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_tocName: Axis Options
_premium: true
---

# Blazor Axis Options

In all Ignite UI for Blazor charts, the axes provide properties for visual configurations such as titles, labels, and ranges. These features are demonstrated in the examples provided below.

## Axis Titles Example

The axis titles feature of the Blazor charts, allows you to add contextual information to the your chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, colors, margins, and alignments.

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
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Line"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        XAxisTitle="Year"
        XAxisTitleTextColor="gray"
        XAxisTitleTextStyle="10pt 'Titillium Web'"
        XAxisTitleAngle="0"
        YAxisTitle="Trillions of Watt-hours (Twh)"
        YAxisTitleTextColor="gray"
        YAxisTitleTextStyle="10pt 'Titillium Web'"
        YAxisTitleAngle="90"
        YAxisTitleLeftMargin="5">
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

## Axis Labels Example

The Blazor Charts allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of axis labels. The following example shows how to use these features of axes.

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
            PropertyPath="XAxisLabelAngle"
            Name="XAxisLabelAngleEditor"
            @ref="xAxisLabelAngleEditor"
            Label="X Axis Label Angle"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "0", "45", "90", "135", "180", "225", "270" })"
            DropDownValues="@(new string[] { "0", "45", "90", "135", "180", "225", "270" })"
            PrimitiveValue="0">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisLabelAngle"
            Name="YAxisLabelAngleEditor"
            @ref="yAxisLabelAngleEditor"
            Label="Y Axis Label Angle"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "-90", "-45", "0", "45", "90" })"
            DropDownValues="@(new string[] { "-90", "-45", "0", "45", "90" })"
            PrimitiveValue="0">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="XAxisLabelTextColor"
            Name="XAxisLabelTextColorEditor"
            @ref="xAxisLabelTextColorEditor"
            Label="X Axis Label Color"
            ValueType="PropertyEditorValueType.EnumValue"
            ShouldOverrideDefaultEditor="true"
            DropDownNames="@(new string[] { "red", "green" })"
            DropDownValues="@(new string[] { "red", "green" })"
            PrimitiveValue="@("red")">
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
        TopMargin="20"
        XAxisLabelAngle="0"
        XAxisLabelTextColor="gray"
        XAxisLabelTextStyle="10pt 'Titillium Web'"
        XAxisLabelTopMargin="5"
        YAxisLabelAngle="0"
        YAxisLabelTextColor="gray"
        YAxisLabelTextStyle="10pt 'Titillium Web'"
        YAxisLabelRightMargin="5"
        YAxisLabelLocation="YAxisLabelLocation.OutsideRight"
        TitleTopMargin="10">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var xAxisLabelAngleEditor = this.xAxisLabelAngleEditor;
        var yAxisLabelAngleEditor = this.yAxisLabelAngleEditor;
        var xAxisLabelTextColorEditor = this.xAxisLabelTextColorEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription xAxisLabelAngleEditor;
    private IgbPropertyEditorPropertyDescription yAxisLabelAngleEditor;
    private IgbPropertyEditorPropertyDescription xAxisLabelTextColorEditor;
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

## Axis Labels Management & Formatting

The axes of the chart have the ability to perform an enhanced calculation regarding the amount of space available to the labels of the owning axis. This enhanced calculation allows the axis to optimize the amount of space given to it in order to display more labels for the given axis.

This enhanced calculation is something that you need to opt-in to, which you can do by setting the [`UseEnhancedIntervalManagement`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_UseEnhancedIntervalManagement) property to true. Then, if you prefer to display as many labels as can fit in the dimensions of the axis without manually setting the [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_Interval) property of the axis, you can set the [`EnhancedIntervalPreferMoreCategoryLabels`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAxis.html#IgniteUI_Blazor_Controls_IgbAxis_EnhancedIntervalPreferMoreCategoryLabels) property on the axis to true.

The chart also has the ability to consider auto-rotation of the labels if they will not fit in the allotted space as well as the ability to apply an automatic margin to the plot area to ensure the labels can fit. This is something that can be opted into initially by first setting the [`AutoMarginAndAngleUpdateMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_AutoMarginAndAngleUpdateMode) property on the chart to either `SizeChanging` or `SizeChangingAndZoom`. This will tell the chart when to re-evaluate the auto margin and angle applied to the labels, if desired.

After setting the [`AutoMarginAndAngleUpdateMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_AutoMarginAndAngleUpdateMode), you can set the [`ShouldAutoExpandMarginForInitialLabels`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ShouldAutoExpandMarginForInitialLabels) property to true to opt into the automatic margin or set the [`ShouldConsiderAutoRotationForInitialLabels`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ShouldConsiderAutoRotationForInitialLabels) property to true for the auto-rotation. You can also further customize the automatic margin that is applied by setting the [`AutoExpandMarginExtraPadding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_AutoExpandMarginExtraPadding) and [`AutoExpandMarginMaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_AutoExpandMarginMaximumValue) to provide extra space or a maximum possible margin, respectively.

Custom label formats such as [`IgbNumberFormatSpecifier`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumberFormatSpecifier.html) and [`IgbDateTimeFormatSpecifier`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeFormatSpecifier.html) can be added to each axis via the `XAxisLabelFormatSpecifier` and `YAxisLabelFormatSpecifier` collections. Commonly used for applying Intl.NumberFormat and Intl.DateTimeFormat language sensitive number, date and time formatting. In order for a custom format to be applied to the labels, the [`YAxisLabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelFormat) or [`XAxisLabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelFormat) need to be set to data item's property name on the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html), eg. `{Date}`. For the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) the number is the context because it uses a numeric axis, therefore this needs to be set to `{0}`.

The following example formats the yAxis with a [`IgbNumberFormatSpecifier`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumberFormatSpecifier.html) to represent $USD prices for top box office movies in the United States.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Highest Grossing Movie Franchises
    </div>
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        ValueFormatString="{0} Billion"
        ValueFormatSpecifiers="NumberFormatSpecifier1">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        DataSource="HighestGrossingMovies"
        ChartType="CategoryChartType.Column"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        FinalValueAnnotationsPrecision="2"
        DataToolTipValueFormatString="{0} Billion"
        DataToolTipValueFormatSpecifiers="NumberFormatSpecifier3"
        YAxisLabelFormat="{0}B"
        YAxisLabelFormatSpecifiers="NumberFormatSpecifier5">
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
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbNumberFormatSpecifier[] _numberFormatSpecifier1 = null;
    public IgbNumberFormatSpecifier[] NumberFormatSpecifier1
    {
        get
        {
            if (this._numberFormatSpecifier1 == null)
            {
                var numberFormatSpecifier1 = new IgbNumberFormatSpecifier[1];
                var numberFormatSpecifier2 = new IgbNumberFormatSpecifier();
                numberFormatSpecifier2.Style = "currency";
                numberFormatSpecifier2.Currency = "USD";
                numberFormatSpecifier2.CurrencyDisplay = "symbol";
                numberFormatSpecifier2.MaximumFractionDigits = 2;
                numberFormatSpecifier2.MinimumFractionDigits = 2;
                numberFormatSpecifier1[0] = numberFormatSpecifier2;
                this._numberFormatSpecifier1 = numberFormatSpecifier1;
            }
            return this._numberFormatSpecifier1;
        }
    }
    private IgbCategoryChart chart;
    private IgbNumberFormatSpecifier[] _numberFormatSpecifier3 = null;
    public IgbNumberFormatSpecifier[] NumberFormatSpecifier3
    {
        get
        {
            if (this._numberFormatSpecifier3 == null)
            {
                var numberFormatSpecifier3 = new IgbNumberFormatSpecifier[1];
                var numberFormatSpecifier4 = new IgbNumberFormatSpecifier();
                numberFormatSpecifier4.Style = "currency";
                numberFormatSpecifier4.Currency = "USD";
                numberFormatSpecifier4.CurrencyDisplay = "symbol";
                numberFormatSpecifier4.MaximumFractionDigits = 2;
                numberFormatSpecifier4.MinimumFractionDigits = 2;
                numberFormatSpecifier3[0] = numberFormatSpecifier4;
                this._numberFormatSpecifier3 = numberFormatSpecifier3;
            }
            return this._numberFormatSpecifier3;
        }
    }
    private IgbNumberFormatSpecifier[] _numberFormatSpecifier5 = null;
    public IgbNumberFormatSpecifier[] NumberFormatSpecifier5
    {
        get
        {
            if (this._numberFormatSpecifier5 == null)
            {
                var numberFormatSpecifier5 = new IgbNumberFormatSpecifier[1];
                var numberFormatSpecifier6 = new IgbNumberFormatSpecifier();
                numberFormatSpecifier6.Style = "currency";
                numberFormatSpecifier6.Currency = "USD";
                numberFormatSpecifier6.CurrencyDisplay = "symbol";
                numberFormatSpecifier6.MinimumFractionDigits = 0;
                numberFormatSpecifier5[0] = numberFormatSpecifier6;
                this._numberFormatSpecifier5 = numberFormatSpecifier5;
            }
            return this._numberFormatSpecifier5;
        }
    }

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

## Axis Range Example

In the Blazor charts, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the [`YAxisMinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMinimumValue) and [`YAxisMaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMaximumValue) options.

By default, charts will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the [`YAxisMinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMinimumValue) to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the [`YAxisMaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMaximumValue) property.

```razor
@using IgniteUI.Blazor.Controls
@using System
@using System.Linq

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisMinimumValueHandler"
            Name="YAxisMinimumValue"
            @ref="yAxisMinimumValue"
            Label="Y Axis Minimum Value"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100" })"
            DropDownValues="@(new string[] { "0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100" })"
            PrimitiveValue="0"
            Changed="EditorChangeUpdateYAxisMinimumValue">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="YAxisMaximumValueHandler"
            Name="YAxisMaximumValue"
            @ref="yAxisMaximumValue"
            Label="Y Axis Maximum Value"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200" })"
            DropDownValues="@(new string[] { "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200" })"
            PrimitiveValue="150"
            Changed="EditorChangeUpdateYAxisMaximumValue">
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
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Line"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        YAxisMinimumValue="0"
        YAxisMaximumValue="150">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var yAxisMinimumValue = this.yAxisMinimumValue;
        var yAxisMaximumValue = this.yAxisMaximumValue;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription yAxisMinimumValue;
    private IgbPropertyEditorPropertyDescription yAxisMaximumValue;
    private IgbCategoryChart chart;

    public void EditorChangeUpdateYAxisMinimumValue(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = this.chart;
        var yAxisMinimumVal = args.NewValue;
        chart.YAxisMinimumValue = Convert.ToDouble(yAxisMinimumVal);
    }

    public void EditorChangeUpdateYAxisMaximumValue(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = this.chart;
        var yAxisMaximumVal = args.NewValue;
        chart.YAxisMaximumValue = Convert.ToDouble(yAxisMaximumVal);
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


<div class="divider--half"></div>

## Axis Modes & Scale

In the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) and [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) controls, you can choose if your data is plotted on logarithmic scale along the y-axis when the [`YAxisIsLogarithmic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisIsLogarithmic) property is set to true or on linear scale when this property is set to false (default value). With the [`YAxisLogarithmBase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisLogarithmBase) property, you can change base of logarithmic scale from default value of 10 to other integer value.

The [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) and control allows you to choose how your data is represented along the y-axis using [`YAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisMode) property that provides `Numeric` and `PercentChange` modes. The `Numeric` mode will plot data with the exact values while the `PercentChange` mode will display the data as percentage change relative to the first data point provided. The default value is `Numeric` mode.

In addition to [`YAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisMode) property, the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) control has [`XAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_XAxisMode) property that provides `Time` and `Ordinal` modes for the x-axis. The `Time` mode will render space along the x-axis for gaps in data (e.g. no stock trading on weekends or holidays). The `Ordinal` mode will collapse date areas where data does not exist. The default value is `Ordinal` mode.

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">X-Axis Mode: </label>
        <label class="options-item">
            <select @bind="@XAxisMode">
                <option>@FinancialChartXAxisMode.Ordinal</option>
                <option>@FinancialChartXAxisMode.Time</option>
            </select>
            <label class="options-label">Y-Axis Mode: </label>
            <select @bind="@YAxisMode">
                <option>@FinancialChartYAxisMode.Numeric</option>
                <option>@FinancialChartYAxisMode.PercentChange</option>
            </select>
            <label class="options-label">Y-Axis IsLogarithmic:</label>
            <label class="options-item">
                <input type="checkbox" @onchange="OnChanged" />
            </label>
        </label>
    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                Height="100%"
                DataSource="Data"
                ChartType=FinancialChartType.Candle
                Thickness=2
                XAxisMode="XAxisMode"
                YAxisMode="YAxisMode"
                YAxisIsLogarithmic=YAxisIsLogarithmic/>
        }
    </div>
</div>

@code {

    public FinancialChartXAxisMode XAxisMode = FinancialChartXAxisMode.Ordinal;
    public FinancialChartYAxisMode YAxisMode = FinancialChartYAxisMode.Numeric;
    public bool YAxisIsLogarithmic = false;

    List<StockItem> Data;

    protected override void OnInitialized()
    {
        var today = DateTime.Now;
        var year = today.Year;
        var month = today.Month;
        var dateEnd = new DateTime(year, month, 1);
        var dateStart = new DateTime(year - 1, month, 1);
        this.Data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }

    public void OnChanged(ChangeEventArgs args)
    {
        YAxisIsLogarithmic = (bool)args.Value;
    }
}
```


<div class="divider--half"></div>

## Axis Gap Example

The [`XAxisGap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisGap) property of the Blazor charts, determines the amount of space between columns or bars of plotted series. This property accepts a numeric value between 0.0 and 1.0. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

The [`XAxisMaximumGap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisMaximumGap) property of the Blazor charts, determines the maximum gap value to allow. This default is set to 1.0 but can be changed depending on what you set [`XAxisGap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisGap) to.

The [`XAxisMinimumGapSize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisMinimumGapSize) property of the Blazor charts, determines the minimum amount of pixels to use for the gap between the categories, if possible.

The following example shows the average maximum temperature in Celsius in New York City's Central Park represented by a [Column Chart](../types/column-chart.md) with an [`XAxisGap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisGap) initially set to 1, and so there will be a full category's width between the columns. There is a slider that allows you to configure the gap in this example so that you can see what the different values do.

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
            PropertyPath="XAxisGap"
            Name="XAxisGap"
            @ref="xAxisGap"
            Label="X Axis - Gap"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.Slider"
            PrimitiveValue="0.5"
            Min="0"
            Max="1.5"
            Step="0.1">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="XAxisMaximumGap"
            Name="XAxisMaximumGap"
            @ref="xAxisMaximumGap"
            Label="Maximum Gap"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "1.5", "1.3", "1.0", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0" })"
            DropDownValues="@(new string[] { "1.5", "1.3", "1.0", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0" })"
            PrimitiveValue="0.5">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Renewable Electricity Generated
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Column"
        CrosshairsSnapToData="true"
        YAxisTitle="TWh"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        XAxisInterval="1"
        XAxisGap="0.5"
        XAxisMaximumGap="1.5">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var xAxisGap = this.xAxisGap;
        var xAxisMaximumGap = this.xAxisMaximumGap;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription xAxisGap;
    private IgbPropertyEditorPropertyDescription xAxisMaximumGap;
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

## Axis Overlap Example

The [`XAxisOverlap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisOverlap) property of the Blazor charts, allows setting the overlap of the rendered columns or bars of plotted series. This property accepts a numeric value between -1.0 and 1.0. The value represents a relative overlap out of the available number of pixels dedicated to each series. Setting this property to a negative value (down to -1.0) results in the categories being pushed away from each other, producing a gap between themselves. Conversely, setting this property to a positive value (up to 1.0) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

The following example shows a comparison of the highest grossing worldwide film franchises compared by the total world box office revenue of the franchise and the highest grossing movie in the series, represented by a [Column Chart](../types/column-chart.md) with an [`XAxisOverlap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisOverlap) initially set to 1, and so the columns will completely overlap each other. There is a slider that allows you to configure the overlap in this example so that you can see what the different values do.

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
            PropertyPath="XAxisOverlap"
            Name="XAxisOverlap"
            @ref="xAxisOverlap"
            Label="X Axis - Overlap"
            ShouldOverrideDefaultEditor="true"
            ValueType="PropertyEditorValueType.Slider"
            Min="0"
            Max="1"
            Step="0.1"
            PrimitiveValue="0">
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
        DataSource="HighestGrossingMovies"
        ChartType="CategoryChartType.Column"
        CrosshairsSnapToData="true"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        XAxisInterval="1"
        XAxisOverlap="1">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var xAxisOverlap = this.xAxisOverlap;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription xAxisOverlap;
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

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layout](chart-axis-layouts.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)                                         | [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html)       | [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)        |
| ------------------------------------------------------ | ---------------------- | ---------------------- |
| `Axes` ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`MaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_MaximumValue)             | [`YAxisMaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMaximumValue)    | [`YAxisMaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMaximumValue)    |
| `Axes` ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`MinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_MinimumValue)             | [`YAxisMinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMinimumValue)    | [`YAxisMinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisMinimumValue)    |
| `Axes` ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`IsLogarithmic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_IsLogarithmic)            | [`YAxisIsLogarithmic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisIsLogarithmic)   | [`YAxisIsLogarithmic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisIsLogarithmic)   |
| `Axes` ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ [`LogarithmBase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_LogarithmBase)            | [`YAxisLogarithmBase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisLogarithmBase)   | [`YAxisLogarithmBase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_YAxisLogarithmBase)   |
| `Axes` ➔ [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html) ➔ [`Gap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryAxisBase.html#IgniteUI_Blazor_Controls_IgbCategoryAxisBase_Gap)                     | None                   | [`XAxisGap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisGap)             |
| `Axes` ➔ [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html) ➔ [`Overlap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryAxisBase.html#IgniteUI_Blazor_Controls_IgbCategoryAxisBase_Overlap)                 | None                   | [`XAxisOverlap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_XAxisOverlap)         |
| `Axes` ➔ [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html)                                  | [`XAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_XAxisMode)            | None                   |
| `Axes` ➔ [`IgbPercentChangeYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPercentChangeYAxis.html)                         | [`YAxisMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html#IgniteUI_Blazor_Controls_IgbFinancialChart_YAxisMode)            | None                   |
| `Axes` ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ `labelSettings.angle`      | [`YAxisLabelAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelAngle)      | [`YAxisLabelAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelAngle)      |
| `Axes` ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ `labelSettings.angle`      | [`XAxisLabelAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelAngle)      | [`XAxisLabelAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelAngle)      |
| `Axes` ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ `labelSettings.textColor`  | `YAxisLabelForeground` | `YAxisLabelForeground` |
| `Axes` ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ `labelSettings.textColor`  | `XAxisLabelForeground` | `XAxisLabelForeground` |
| `Axes` ➔ [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) ➔ `labelSettings.visibility` | [`YAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelVisibility) | [`YAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_YAxisLabelVisibility) |
| `Axes` ➔ [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) ➔ `labelSettings.visibility` | [`XAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelVisibility) | [`XAxisLabelVisibility`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbXYChart.html#IgniteUI_Blazor_Controls_IgbXYChart_XAxisLabelVisibility) |
