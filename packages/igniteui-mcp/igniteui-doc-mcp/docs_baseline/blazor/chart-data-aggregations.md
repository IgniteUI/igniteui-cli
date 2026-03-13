---
title: Blazor Data Aggregations | Data Visualization | Infragistics
_description: Infragistics' Blazor Data Aggregations
_keywords: Blazor Charts, Markers, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Aggregations
_premium: true
---

# Blazor Data Aggregations

In the Ignite UI for Blazor [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control Data Aggregations feature allows you to group data in the chart by unique values on the `XAxis` and then sort those groups. You may then apply summaries which will be reflected by the range of the `YAxis` and will be displayed in the tooltip when hovering the series.

## Blazor Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and can be changed to other properties within each data item such as Product, MonthName, and Year to aggregate the sales data. Also a summary and sort option is available to get a desirable order for the grouped property.

Note, the abbreviated functions found within the dropdowns for [`InitialSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialSummaries) and [`GroupSorts`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_GroupSorts) have be applied as shown to get a correct result based on the property you assign. eg. Sum(sales) as Sales | Sales Desc

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
            PropertyPath="InitialGroupsHandler"
            Name="InitialGroups"
            @ref="initialGroups"
            Label="Initial Groups"
            ValueType="PropertyEditorValueType.EnumValue"
            ShouldOverrideDefaultEditor="true"
            DropDownNames="@(new string[] { "Country", "Product", "Month", "Year" })"
            DropDownValues="@(new string[] { "Country", "Product", "Month", "Year" })"
            PrimitiveValue="@("Country")"
            Changed="EditorChangeUpdateInitialGroups">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Sales Aggregated by Country and Product
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        DataSource="SalesData"
        ChartType="CategoryChartType.Column"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        InitialGroups="Country"
        InitialSummaries="Sum(Sales) as Sales"
        GroupSorts="Sales Desc">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var editor = this.editor;
        var initialGroups = this.initialGroups;
        var chart = this.chart;

        this.BindElements = () => {
            editor.Target = this.chart;
        };
        this.BindElements();

        if (firstRender) {
            this.PropertyEditorInitAggregationsOnViewInit();
        }
    }

    private IgbPropertyEditorPanel editor;
    private IgbPropertyEditorPropertyDescription initialGroups;
    private IgbCategoryChart chart;

    public void PropertyEditorInitAggregationsOnViewInit()
    {
    	var editor = this.editor;
    	editor.EnsureReady().ContinueWith(new Action<Task>((e) =>
    	{
    		var initialSummariesDropdown = new IgbPropertyEditorPropertyDescription();
    		var sortGroupsDropdown = new IgbPropertyEditorPropertyDescription();
    		initialSummariesDropdown.Label = "Initial Summaries";
    		initialSummariesDropdown.ValueType = PropertyEditorValueType.EnumValue;
    		initialSummariesDropdown.ShouldOverrideDefaultEditor = true;
    		initialSummariesDropdown.DropDownNames = new string[] { "Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" };
    		initialSummariesDropdown.DropDownValues = new string[] { "Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" };
    		sortGroupsDropdown.Label = "Sort Groups";
    		sortGroupsDropdown.ValueType = PropertyEditorValueType.EnumValue;
    		sortGroupsDropdown.ShouldOverrideDefaultEditor = true;
    		sortGroupsDropdown.DropDownNames = new string[] { "Sales Asc", "Sales Desc" };
    		sortGroupsDropdown.DropDownValues = new string[] { "Sales Asc", "Sales Desc" };

    		editor.Properties.Add(initialSummariesDropdown);
    		editor.Properties.Add(sortGroupsDropdown);

    		initialSummariesDropdown.Changed += this.EditorChangeUpdateInitialSummaries;
    		sortGroupsDropdown.Changed += this.EditorChangeUpdateGroupSorts;
    	}));

    }

    public void EditorChangeUpdateInitialSummaries(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
    	var chart = this.chart;
    	var intialSummaryVal = args.NewValue.ToString();
    	chart.InitialSummaries = intialSummaryVal;
    }

    public void EditorChangeUpdateGroupSorts(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
    	var chart = this.chart;
    	var groupSortsVal = args.NewValue.ToString();
    	chart.GroupSorts = groupSortsVal;
    }

    public void EditorChangeUpdateInitialGroups(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = this.chart;
        var initialGroupVal = args.NewValue.ToString();
        chart.InitialGroups = null;
        chart.InitialGroups = initialGroupVal;
    }

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


## API References

The following is a list of API members mentioned in the above sections:

- [`InitialSortDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialSortDescriptions)
- [`InitialSorts`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialSorts)
- [`SortDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SortDescriptions)
- [`InitialGroups`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialGroups)
- [`InitialGroupDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialGroupDescriptions)
- [`GroupDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_GroupDescriptions)
- [`InitialSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialSummaries)
- [`InitialSummaryDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialSummaryDescriptions)
- [`SummaryDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_SummaryDescriptions)
- [`InitialGroupSortDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_InitialGroupSortDescriptions)
- [`GroupSorts`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_GroupSorts)
- [`GroupSortDescriptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_GroupSortDescriptions)

> \[!Note]
> Chart Aggregation will not work when using [`IncludedProperties`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_IncludedProperties) | [`ExcludedProperties`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ExcludedProperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render. The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.
