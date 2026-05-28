---
title: Blazor Chart Highlight Filter | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Highlight Filter
_keywords: Blazor Charts, Highlighting, Filtering, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "XamDataChart", "Series", "HighlightedValuesDisplayMode"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Highlight Filter
_premium: true
---

# Blazor Chart Highlight Filter

The Ignite UI for Blazor Chart components support a data highlighting overlay that can enhance the visualization of the series plotted in those charts by allowing you to view a subset of the data plotted. When enabled, this will highlight a subset of data while showing the total set with a reduced opacity in the case of column and area series types, and a dashed line in the case of line series types. This can help you to visualize things like target values versus actual values with your data set. This feature is demonstrated in the following example:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="DataChart"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="HighlightedValuesDisplayMode"
            Name="HighlightedValuesDisplayModeEditor"
            @ref="highlightedValuesDisplayModeEditor"
            Label="Highlight Display Mode: "
            PrimitiveValue="@("Hidden")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        Name="chart"
        @ref="chart"
        HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Hidden">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="CountryRenewableElectricity"
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis">
            </IgbNumericYAxis>

            <IgbColumnSeries
            Name="ColumnSeries1"
            @ref="columnSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="Europe"
            HighlightedDataSource="CountryRenewableElectricityFiltered">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries2"
            @ref="columnSeries2"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="China"
            HighlightedDataSource="CountryRenewableElectricityFiltered">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries3"
            @ref="columnSeries3"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="America"
            HighlightedDataSource="CountryRenewableElectricityFiltered">
            </IgbColumnSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var highlightedValuesDisplayModeEditor = this.highlightedValuesDisplayModeEditor;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var columnSeries1 = this.columnSeries1;
        var columnSeries2 = this.columnSeries2;
        var columnSeries3 = this.columnSeries3;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription highlightedValuesDisplayModeEditor;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbColumnSeries columnSeries1;
    private IgbColumnSeries columnSeries2;
    private IgbColumnSeries columnSeries3;

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

    private CountryRenewableElectricityFiltered _countryRenewableElectricityFiltered = null;
    public CountryRenewableElectricityFiltered CountryRenewableElectricityFiltered
    {
        get
        {
            if (_countryRenewableElectricityFiltered == null)
            {
                _countryRenewableElectricityFiltered = new CountryRenewableElectricityFiltered();
            }
            return _countryRenewableElectricityFiltered;
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
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityFilteredItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricityFiltered
    : List<CountryRenewableElectricityFilteredItem>
{
    public CountryRenewableElectricityFiltered()
    {
        this.Add(new CountryRenewableElectricityFilteredItem() { Year = @"2009", Europe = 26, China = 14, America = 12 });
        this.Add(new CountryRenewableElectricityFilteredItem() { Year = @"2010", Europe = 29, China = 17, America = 18 });
        this.Add(new CountryRenewableElectricityFilteredItem() { Year = @"2011", Europe = 50, China = 21, America = 22 });
        // ... 9 more items
    }
}
```

Note that data highlighting feature is supported by the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) and [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart), but it is configured in different ways in those controls due to the nature of how those controls work. One thing remains constant with this feature though, in that you need to set the [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedValuesDisplayMode) property to `Overlay` if you want to see the highlight. The following will explain the different configurations for the highlight filter feature.

## Using Highlight Filter with DataChart

In the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart), much of the highlight filter API happens on the series themselves, mainly by setting the [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedDataSource) property to a collection representing a subset of the data you want to highlight. The count of the items in the [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedDataSource) needs to match the count of the data bound to the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=DataSource) of the series that you are looking to highlight, and in the case of category series, it will use the `ValueMemberPath` that you have defined as the highlight path by default. The sample at the top of this page uses the [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedDataSource) in the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) to show the overlay.

In the case that the schema does not match between the [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedDataSource) and the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=DataSource) of the series, you can configure this using the `HighlightedValueMemberPath` property on the series. Additionally, if you would like to use the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=DataSource) of the series itself as the highlight source and have a path on your data item that represents the subset, you can do this. This is done by simply setting the `HighlightedValueMemberPath` property to that path and not providing a [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedDataSource).

The reduced opacity of the column and area series types is configurable by setting the [`HighlightedValuesFadeOpacity`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesFadeOpacity) property on the series. You can also set the [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedValuesDisplayMode) property to `Hidden` if you do not wish to see the overlay at all.

The part of the series shown by the highlight filter will be represented in the legend and tooltip layers of the chart separately. You can configure the title that this is given in the tooltip and legend by setting the [`HighlightedTitleSuffix`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedTitleSuffix). This will append the value that you provide to the end of the [`ChartTitle`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=ChartTitle) of the series.

If the `DataLegend` or [`IgbDataToolTipLayer`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer) is used then the highlighted series will appear grouped. This can be managed by setting the [`HighlightedValuesDataLegendGroup`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesDataLegendGroup) property on the series to categorize them appropriately.

The following example demonstrates the usage of the data legend grouping and highlighting overlay feature within the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) control using the [`HighlightedValuesDataLegendGroup`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesDataLegendGroup):

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        GroupRowVisible="true">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        Name="chart"
        @ref="chart"
        HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Overlay">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis">
            </IgbNumericYAxis>

            <IgbColumnSeries
            Name="ColumnSeries1"
            @ref="columnSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="America"
            ValueMemberPath="America"
            DataLegendGroup="Olympic Medals"
            HighlightedValuesDataLegendGroup="Gold Medals"
            HighlightedValueMemberPath="AmericaGold"
            HighlightedTitleSuffix="">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries2"
            @ref="columnSeries2"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="China"
            ValueMemberPath="China"
            DataLegendGroup="Olympic Medals"
            HighlightedValuesDataLegendGroup="Gold Medals"
            HighlightedValueMemberPath="ChinaGold"
            HighlightedTitleSuffix="">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries3"
            @ref="columnSeries3"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="Russia"
            ValueMemberPath="Russia"
            DataLegendGroup="Olympic Medals"
            HighlightedValuesDataLegendGroup="Gold Medals"
            HighlightedValueMemberPath="RussiaGold"
            HighlightedTitleSuffix="">
            </IgbColumnSeries>

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
        var columnSeries1 = this.columnSeries1;
        var columnSeries2 = this.columnSeries2;
        var columnSeries3 = this.columnSeries3;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbColumnSeries columnSeries1;
    private IgbColumnSeries columnSeries2;
    private IgbColumnSeries columnSeries3;

    private OlympicMedalsTopCountriesWithTotals _olympicMedalsTopCountriesWithTotals = null;
    public OlympicMedalsTopCountriesWithTotals OlympicMedalsTopCountriesWithTotals
    {
        get
        {
            if (_olympicMedalsTopCountriesWithTotals == null)
            {
                _olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
            }
            return _olympicMedalsTopCountriesWithTotals;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OlympicMedalsTopCountriesWithTotalsItem
{
    public string Year { get; set; }
    public double America { get; set; }
    public double AmericaGold { get; set; }
    public double China { get; set; }
    public double ChinaGold { get; set; }
    public double Russia { get; set; }
    public double RussiaGold { get; set; }
    public double Total { get; set; }
}

public class OlympicMedalsTopCountriesWithTotals
    : List<OlympicMedalsTopCountriesWithTotalsItem>
{
    public OlympicMedalsTopCountriesWithTotals()
    {
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"1996", America = 148, AmericaGold = 50, China = 110, ChinaGold = 40, Russia = 95, RussiaGold = 20, Total = 353 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2000", America = 142, AmericaGold = 40, China = 115, ChinaGold = 45, Russia = 91, RussiaGold = 40, Total = 348 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2004", America = 134, AmericaGold = 35, China = 121, ChinaGold = 55, Russia = 86, RussiaGold = 25, Total = 341 });
        // ... 3 more items
    }
}
```

The following example demonstrates the usage of the data legend grouping and highlighting overlay feature within the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) control using the [`HighlightedValuesDataLegendGroup`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesDataLegendGroup):

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        Name="chart"
        @ref="chart"
        HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Overlay">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis">
            </IgbNumericYAxis>

            <IgbColumnSeries
            Name="ColumnSeries1"
            @ref="columnSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="America"
            ValueMemberPath="America"
            DataLegendGroup="Olympic Medals"
            HighlightedValuesDataLegendGroup="Gold Medals"
            HighlightedValueMemberPath="AmericaGold"
            HighlightedTitleSuffix="">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries2"
            @ref="columnSeries2"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="China"
            ValueMemberPath="China"
            DataLegendGroup="Olympic Medals"
            HighlightedValuesDataLegendGroup="Gold Medals"
            HighlightedValueMemberPath="ChinaGold"
            HighlightedTitleSuffix="">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries3"
            @ref="columnSeries3"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="Russia"
            ValueMemberPath="Russia"
            DataLegendGroup="Olympic Medals"
            HighlightedValuesDataLegendGroup="Gold Medals"
            HighlightedValueMemberPath="RussiaGold"
            HighlightedTitleSuffix="">
            </IgbColumnSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer"
            GroupRowVisible="true"
            GroupingMode="DataToolTipLayerGroupingMode.Grouped">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var columnSeries1 = this.columnSeries1;
        var columnSeries2 = this.columnSeries2;
        var columnSeries3 = this.columnSeries3;
        var dataToolTipLayer = this.dataToolTipLayer;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbColumnSeries columnSeries1;
    private IgbColumnSeries columnSeries2;
    private IgbColumnSeries columnSeries3;
    private IgbDataToolTipLayer dataToolTipLayer;

    private OlympicMedalsTopCountriesWithTotals _olympicMedalsTopCountriesWithTotals = null;
    public OlympicMedalsTopCountriesWithTotals OlympicMedalsTopCountriesWithTotals
    {
        get
        {
            if (_olympicMedalsTopCountriesWithTotals == null)
            {
                _olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
            }
            return _olympicMedalsTopCountriesWithTotals;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OlympicMedalsTopCountriesWithTotalsItem
{
    public string Year { get; set; }
    public double America { get; set; }
    public double AmericaGold { get; set; }
    public double China { get; set; }
    public double ChinaGold { get; set; }
    public double Russia { get; set; }
    public double RussiaGold { get; set; }
    public double Total { get; set; }
}

public class OlympicMedalsTopCountriesWithTotals
    : List<OlympicMedalsTopCountriesWithTotalsItem>
{
    public OlympicMedalsTopCountriesWithTotals()
    {
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"1996", America = 148, AmericaGold = 50, China = 110, ChinaGold = 40, Russia = 95, RussiaGold = 20, Total = 353 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2000", America = 142, AmericaGold = 40, China = 115, ChinaGold = 45, Russia = 91, RussiaGold = 40, Total = 348 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2004", America = 134, AmericaGold = 35, China = 121, ChinaGold = 55, Russia = 86, RussiaGold = 25, Total = 341 });
        // ... 3 more items
    }
}
```

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) control using the `HighlightedValueMemberPath`:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="DataChart"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="HighlightedValuesDisplayMode"
            Name="HighlightedValuesDisplayModeEditor"
            @ref="highlightedValuesDisplayModeEditor"
            Label="Highlight Display Mode: "
            PrimitiveValue="@("Hidden")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Hidden"
        Name="chart"
        @ref="chart">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            MinimumValue="0"
            MaximumValue="400">
            </IgbNumericYAxis>

            <IgbColumnSeries
            Name="ColumnSeries1"
            @ref="columnSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            ValueMemberPath="Total"
            HighlightedValueMemberPath="America">
            </IgbColumnSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var highlightedValuesDisplayModeEditor = this.highlightedValuesDisplayModeEditor;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var columnSeries1 = this.columnSeries1;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription highlightedValuesDisplayModeEditor;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbColumnSeries columnSeries1;

    private OlympicMedalsTopCountriesWithTotals _olympicMedalsTopCountriesWithTotals = null;
    public OlympicMedalsTopCountriesWithTotals OlympicMedalsTopCountriesWithTotals
    {
        get
        {
            if (_olympicMedalsTopCountriesWithTotals == null)
            {
                _olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
            }
            return _olympicMedalsTopCountriesWithTotals;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OlympicMedalsTopCountriesWithTotalsItem
{
    public string Year { get; set; }
    public double America { get; set; }
    public double AmericaGold { get; set; }
    public double China { get; set; }
    public double ChinaGold { get; set; }
    public double Russia { get; set; }
    public double RussiaGold { get; set; }
    public double Total { get; set; }
}

public class OlympicMedalsTopCountriesWithTotals
    : List<OlympicMedalsTopCountriesWithTotalsItem>
{
    public OlympicMedalsTopCountriesWithTotals()
    {
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"1996", America = 148, AmericaGold = 50, China = 110, ChinaGold = 40, Russia = 95, RussiaGold = 20, Total = 353 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2000", America = 142, AmericaGold = 40, China = 115, ChinaGold = 45, Russia = 91, RussiaGold = 40, Total = 348 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2004", America = 134, AmericaGold = 35, China = 121, ChinaGold = 55, Russia = 86, RussiaGold = 25, Total = 341 });
        // ... 3 more items
    }
}
```

## Using Highlight Filter in CategoryChart

The [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) highlight filter happens on the chart by setting the [`InitialHighlightFilter`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=InitialHighlightFilter) property. Since the [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) takes all of the properties on your underlying data item into account by default, you will need to define the [`InitialGroups`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=InitialGroups) on the chart as well so that the data can be grouped and aggregated in a way that you can have a subset of the data to filter on. You can set the [`InitialGroups`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=InitialGroups) to a value path in your underlying data item to group by a path that has duplicate values.

<!-- Unsure of this part. Need to review -->

<!-- ????? The `InitialHighlightFilter` is done using OData filter query syntax. The syntax for this is an abbreviation of the filter operator. For example, if you wanted to have an InitialHighlightFilter of "Month not equals January" it would be represented as "Month ne 'January'"-->

Similar to the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart), the [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedValuesDisplayMode) property is also exposed on the [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart). In the case that you do not want to see the overlay, you can set this property to `Hidden`.

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) control:

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
            PropertyPath="HighlightedValuesDisplayMode"
            Name="highlightedValuesDisplayModeEditor"
            @ref="highlightedValuesDisplayModeEditor"
            Label="Highlight Display Mode: "
            PrimitiveValue="@("Hidden")">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Sales Filtered by Country
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="SalesData"
        InitialGroups="Month"
        InitialHighlightFilter="Country ne 'UK'"
        HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Hidden">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var highlightedValuesDisplayModeEditor = this.highlightedValuesDisplayModeEditor;
        var chart = this.chart;

        this.BindElements = () => {
            propertyEditor.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription highlightedValuesDisplayModeEditor;
    private IgbCategoryChart chart;

    private SalesData _salesData = null;
    public SalesData SalesData
    {
        get
        {
            if (_salesData == null)
            {
                _salesData = new SalesData();
            }
            return _salesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SalesDataItem
{
    public string Country { get; set; }
    public string Product { get; set; }
    public double UnitsSold { get; set; }
    public double ManufacturingPrice { get; set; }
    public double SalePrice { get; set; }
    public double GrossSales { get; set; }
    public double Discounts { get; set; }
    public double Sales { get; set; }
    public double COGS { get; set; }
    public double Profit { get; set; }
    public string Date { get; set; }
    public string Month { get; set; }
    public string Year { get; set; }
}

public class SalesData
    : List<SalesDataItem>
{
    public SalesData()
    {
        this.Add(new SalesDataItem() { Country = @"UK", Product = @"Vermont", UnitsSold = 501, ManufacturingPrice = 15, SalePrice = 23, GrossSales = 26440, Discounts = 0, Sales = 26440, COGS = 16185, Profit = 11255, Date = @"1/1/20", Month = @"January", Year = @"2020" });
        this.Add(new SalesDataItem() { Country = @"Japan", Product = @"Kensington", UnitsSold = 1372, ManufacturingPrice = 3, SalePrice = 20, GrossSales = 27440, Discounts = 0, Sales = 27440, COGS = 16185, Profit = 11255, Date = @"1/1/20", Month = @"January", Year = @"2020" });
        this.Add(new SalesDataItem() { Country = @"India", Product = @"Kensington", UnitsSold = 2762, ManufacturingPrice = 3, SalePrice = 20, GrossSales = 55240, Discounts = 0, Sales = 55240, COGS = 13210, Profit = 42030, Date = @"1/1/20", Month = @"January", Year = @"2020" });
        // ... 1039 more items
    }
}
```

<!-- TODO add new section that talks about how this feature also applies to Range, Financial series and the HighlightedValueMemberPath property corresponds to:
HighlightedHighMemberPath and HighlightedLowMemberPath in Range Series
HighlightedHighMemberPath, HighlightedLowMemberPath, HighlightedOpenMemberPath, HighlightedCloseMemberPath in Financial Series-->

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Highlighting](chart-highlighting.md)
- [Chart Data Tooltip](chart-data-tooltip.md)
- [Chart Data Aggregations](chart-data-aggregations.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgbCategoryChart`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart) Properties                    | [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) Properties |
| ----------------------------------------------|---------------------------|
| [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedDataSource)        | [`HighlightedDataSource`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedDataSource)  |
| [`HighlightedTitleSuffix`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedTitleSuffix)        | [`HighlightedTitleSuffix`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedTitleSuffix)  |
| `CategoryChart.HighlightedValueMemberPath`    | `Series.HighlightedValueMemberPath`     |
| [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedValuesDisplayMode)  | [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesDisplayMode)   |
| [`HighlightedValuesFadeOpacity`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesFadeOpacity)  | [`HighlightedValuesFadeOpacity`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesFadeOpacity)   |
| [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=HighlightedValuesDisplayMode)  | [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=HighlightedValuesDisplayMode)   |
| [`InitialHighlightFilter`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=InitialHighlightFilter)        |  |
| [`InitialGroups`](mcp:get_api_reference?platform=blazor&component=IgbCategoryChart&member=InitialGroups)                 |  |
