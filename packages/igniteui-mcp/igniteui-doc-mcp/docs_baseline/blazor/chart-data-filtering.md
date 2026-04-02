---
title: Blazor Chart Data Filtering | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Data Filtering
_keywords: Blazor Charts, Filtering, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Filtering
_premium: true
---

# Blazor Chart Data Filtering

Data Filtering allows you to query large data in order to analyze and plot small subset of data entries via filter expressions, all without having to manually modify the datasource bound to the chart.

A complete list of valid expressions and keywords to form a query string can be found here:

[Filter expressions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris)

> NOTE: Any incorrect filter applied will result with an empty chart.

## Blazor Chart Data Filter Example

The following example depicts a [Column Chart](../types/column-chart.md) of annual birth rates across several decades. The drop-down allows you to select a decade, which inserts an expression via the [`InitialFilter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialFilter) property, to update the chart visual and thus filtering out the other decades out.

```razor
@using IgniteUI.Blazor.Controls
@using System
@using System.Linq

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="editor"
        @ref="editor"

        DescriptionType="CategoryChart"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="InitialFilterHandler"
            Name="InitialFilter"
            @ref="initialFilter"
            Label="Modify Filter"
            ValueType="PropertyEditorValueType.EnumValue"
            ShouldOverrideDefaultEditor="true"
            DropDownNames="@(new string[] { "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020" })"
            DropDownValues="@(new string[] { "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020" })"
            Changed="EditorChangeDataFilter">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Annual Birth Rates by World Region
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
        DataSource="ContinentsBirthRate"
        ChartType="CategoryChartType.Column"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        YAxisLabelFormat="{0}M">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var editor = this.editor;
        var initialFilter = this.initialFilter;
        var chart = this.chart;

        this.BindElements = () => {
            editor.Target = this.chart;
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbPropertyEditorPanel editor;
    private IgbPropertyEditorPropertyDescription initialFilter;
    private IgbCategoryChart chart;

    public void EditorChangeDataFilter(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = this.chart;
        var filter = args.NewValue.ToString();
        chart.InitialFilter = "(contains(Year," + "'" + filter + "'" + "))";
    }

    private ContinentsBirthRate _continentsBirthRate = null;
    public ContinentsBirthRate ContinentsBirthRate
    {
        get
        {
            if (_continentsBirthRate == null)
            {
                _continentsBirthRate = new ContinentsBirthRate();
            }
            return _continentsBirthRate;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class ContinentsBirthRateItem
{
    public string Year { get; set; }
    public double Asia { get; set; }
    public double Africa { get; set; }
    public double Europe { get; set; }
    public double NorthAmerica { get; set; }
    public double SouthAmerica { get; set; }
    public double Oceania { get; set; }
}

public class ContinentsBirthRate
    : List<ContinentsBirthRateItem>
{
    public ContinentsBirthRate()
    {
        this.Add(new ContinentsBirthRateItem() { Year = @"1950", Asia = 62, Africa = 13, Europe = 10, NorthAmerica = 4, SouthAmerica = 8, Oceania = 1 });
        this.Add(new ContinentsBirthRateItem() { Year = @"1960", Asia = 68, Africa = 12, Europe = 15, NorthAmerica = 4, SouthAmerica = 9, Oceania = 2 });
        this.Add(new ContinentsBirthRateItem() { Year = @"1970", Asia = 80, Africa = 17, Europe = 11, NorthAmerica = 3, SouthAmerica = 9, Oceania = 1 });
        // ... 5 more items
    }
}
```


<div class="divider--half"></div>

The [`InitialFilter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialFilter) property is a string that requires the following syntax in order to filter properly. The value requires sets of parentheses that include both the filter expression definition, column and value associated with the record(s) filtering in.

eg. To show all countries that start with the letter B:

"(startswith(Country, 'B'))"

eg. Concatenating more than one expression:

"(startswith(Country, 'B') and endswith(Country, 'L') and contains(Product, 'Royal Oak') and contains(Date, '3/1/20'))"

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`IsTransitionInEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_IsTransitionInEnabled)
- [`TransitionInDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInDuration)
- [`TransitionInMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInMode)
