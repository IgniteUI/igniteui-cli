---
title: Web Components Pie Charts and Graphs | Ignite UI for Web Components
_description: The Ignite UI for Web Components data pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections. Try for FREE.
_keywords: Web Components charts, pie chart, Ignite UI for Web Components, Infragistics, data binding, slice selection, animation, highlighting, legend
_license: commercial
mentionedTypes: ["DataPieChart", "XamDataChart", "OthersCategoryType", "SeriesSelectionMode", "SeriesSelectionBehavior", "SeriesHighlightingBehavior"]
namespace: Infragistics.Controls.Charts
_tocName: Data Pie Chart
_premium: true
---

# Web Components Data Pie Chart

The Ignite UI for Web Components Data Pie Chart is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## Web Components Data Pie Chart Example

You can create the Web Components Pie Chart in the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization.

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
                // ... 2 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Data Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization such as Doughnut (Ring) Chart, Funnel Chart, Stacked Area Chart, Stacked Bar Chart, and Treemap.

The Web Components Data Pie Chart includes interactive features that give the viewer tools to analyze data, like:

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

## Web Components Data Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`IgcLegendComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igclegendcomponent.html) property. The ItemLegend will display its items in vertical orientation as a default, but this can be changed by setting its [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igclegendcomponent.html#orientation) property.

The labels shown on the legend will display the same content as the label that is shown for each slice in the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) by default, but this can be modified by utilizing the [`legendSliceLabelContentMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#legendSliceLabelContentMode) property on the chart. This exposes an enumeration that allows you to show the label, value, percentage, or any combination of those as the legend's content for each slice in the chart.

You can also modify the ItemLegend badge. By default, it appears as a filled circle corresponding to the color of the associated chart slice. You can configure this by using the [`legendItemBadgeShape`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#legendItemBadgeShape) property on the chart, and you can set this to be a circle, line, bar, column, and more.

Below is an example that demonstrates usage of the ItemLegend with the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html).

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
                // ... 2 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice.

The Others category in the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) has three main, configurable properties - [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryType), [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryThreshold), and [`othersCategoryText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryText) that allow you to configure how the Others slice in the chart is shown. These are each described below:

The [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryType) property works in tandem with the [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryThreshold) property of the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html). For the [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryType), you can define whether you want the [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryThreshold) to be evaluated as a number or a percentage. For example, if you decide on number and set the [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryThreshold) to 5, any slices that have a value less than 5 will become part of the Others category. Using the same value of 5 with a percent type, any values that are less than 5 percent of the total values of the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) will become part of the Others category.

To get the underlying data items that are contained within the Others slice in the chart, you can utilize the [`getOthersContext`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#getOthersContext) method on the chart. This return type of this method is an [`IgcOthersCategoryContextComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcotherscategorycontextcomponent.html) which exposes an [`items`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcotherscategorycontextcomponent.html#items) property. The [`items`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcotherscategorycontextcomponent.html#items) property returns an array that will contain the items in the Others slice. Additionally, when clicking the Others slice, the `Item` property of the event arguments for the `SeriesClick` event will be will also return this [`IgcOthersCategoryContextComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcotherscategorycontextcomponent.html).

By default, the Others slice will be represented by a label of "Others." You can change this by modifying the [`othersCategoryText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryText) property of the chart.

### Web Components Styling the Others Slice

You can style the aggregated Others slice separately from other slices by using these properties:

- `OthersCategoryBrush`\
    Sets the fill (brush) used for the Others slice.

- `OthersCategoryOutline`\
    Sets the outline (stroke) used for the Others slice.

These properties only affect the Others slice (when it exists). All other slices continue to use the normal palette and item-wise coloring behavior.

> [!NOTE]
> The Others slice is only rendered when the chart is configured to create it (for example, with [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryThreshold) greater than `0` and an appropriate [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryType)). If the Others slice is not present, `OthersCategoryBrush` and `OthersCategoryOutline` have no visible effect.

If you want to ensure that the Others category does not show up in the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html), you can set the [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryThreshold) to 0.

The following sample demonstrates usage of the Others slice in the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html):

```typescript
export class DataPieDataItem {
    public constructor(init: Partial<DataPieDataItem>) {
        Object.assign(this, init);
    }

    public v1: number;
    public category: string;

}
export class DataPieData extends Array<DataPieDataItem> {
    public constructor(items: Array<DataPieDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new DataPieDataItem({ v1: 100, category: `Maintenance` }),
                new DataPieDataItem({ v1: 40, category: `Cooling` }),
                new DataPieDataItem({ v1: 20, category: `Residential` }),
                // ... 5 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Data Pie Chart Selection

The [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) supports slice selection by mouse click on the slices plotted in the chart. This can be configured by utilizing the [`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#selectionBehavior) and [`selectionMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#selectionMode) properties of the chart, described below:

The main two options of the [`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#selectionBehavior) are [`PerDataItemSingleSelect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionbehavior.html#PerDataItemSingleSelect) and [`PerDataItemMultiSelect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionbehavior.html#PerDataItemMultiSelect), which will enable single and multiple selection, respectively.

The [`selectionMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#selectionMode) property exposes an enumeration that determines how the pie chart slices respond to being selected. The following are the options of that enumeration and what they do:

- [`Brighten`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#Brighten): The selected slices will be highlighted.
- [`FadeOthers`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#FadeOthers): The selected slices will remain their same color and others will fade.
- [`FocusColorFill`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#FocusColorFill): The selected slices will change their background to the FocusBrush of the chart.
- [`FocusColorOutline`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#FocusColorOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart.
- [`FocusColorThickOutline`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#FocusColorThickOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- [`GrayscaleOthers`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#GrayscaleOthers): The unselected slices will have a gray color filter applied to them.
- [`None`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#None): There is no effect on the selected slices.
- [`SelectionColorFill`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#SelectionColorFill): The selected slices will change their background to the SelectionBrush of the chart.
- [`SelectionColorOutline`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#SelectionColorOutline): The selected slices will have an outline with the color defined by the SelectionBrush of the chart.
- [`SelectionColorThickOutline`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#SelectionColorThickOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- [`ThickOutline`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#ThickOutline): The selected slices will apply an outline with the thickness dependent on the Thickness property of the chart.

When a slice is selected, its underlying data item will be added to the SelectedSeriesItems collection of the chart. As such, the XamDataPieChart exposes the SelectedSeriesItemsChanged event to detect when a slice has been selected and this collection is changed.

The following sample demonstrates the selection feature of the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) control:

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
                // ... 2 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Data Pie Chart Highlighting

The [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) supports mouse over highlighting, as well as a highlighting overlay that can be configured by providing a separate data source.

First, the [`highlightingBehavior`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#highlightingBehavior) enumerated property determines how a slice will be highlighted. The following are the options of that property and what they do:

- [`DirectlyOver`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.serieshighlightingbehavior.html#DirectlyOver): The slices are only highlighted when the mouse is directly over them.
- [`NearestItems`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.serieshighlightingbehavior.html#NearestItems): The nearest slice to the mouse position will be highlighted.
- [`NearestItemsAndSeries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.serieshighlightingbehavior.html#NearestItemsAndSeries): The nearest slice and series to the mouse position will be highlighted.
- [`NearestItemsRetainMainShapes`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.serieshighlightingbehavior.html#NearestItemsRetainMainShapes): The nearest items to the mouse position will be highlighted and the main shapes of the series will not be de-emphasized.

The [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#highlightingMode) enumerated property determines how the data pie chart slices respond to being highlighted. The following are the options of that property and what they do:

- [`Brighten`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#Brighten): The series will have its color brightened when the mouse position is over or near it.
- `BrightenSpecific`: The specific slice will have its color brightened when the mouse position is over or near it.
- [`FadeOthers`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#FadeOthers): The series will retain its color when the mouse position is over or near it, while the others will appear faded.
- `FadeOthersSpecific`: The specific slice will retain its color when the mouse position is over or near it, while the others will appear faded.
- [`None`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.seriesselectionmode.html#None): The series and slices will not be highlighted.

The following example demonstrates the mouse highlighting behaviors of the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) component:

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
                // ... 2 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


In addition to the mouse highlighting, the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) exposes a highlight filter capability that can display a subset of your data. This is applied by specifying a `HighlightedDataSource` for the control and by setting the [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#highlightedValuesDisplayMode) property to `Overlay`. The `HighlightedDataSource` expects a subset of the data assigned to the `DataSource` property of the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html).

When these conditions are met, the values of the subset will be highlighted, while the remainder of the full set of data will be faded - effectively creating a highlight for the subset and allowing easier visualization of a subset of your data within the same control.

The following example demonstrates highlight filtering.

```typescript
export class OnlineTrafficHighlightDesktopOnlyItem {
    public constructor(init: Partial<OnlineTrafficHighlightDesktopOnlyItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public value: number;

}
export class OnlineTrafficHighlightDesktopOnly extends Array<OnlineTrafficHighlightDesktopOnlyItem> {
    public constructor(items: Array<OnlineTrafficHighlightDesktopOnlyItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineTrafficHighlightDesktopOnlyItem({ category: `Apparel`, value: 27 }),
                new OnlineTrafficHighlightDesktopOnlyItem({ category: `Beauty`, value: 29 }),
                new OnlineTrafficHighlightDesktopOnlyItem({ category: `Travel`, value: 41 }),
                // ... 4 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class OnlineTrafficHighlightTotalsItem {
    public constructor(init: Partial<OnlineTrafficHighlightTotalsItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public value: number;

}
export class OnlineTrafficHighlightTotals extends Array<OnlineTrafficHighlightTotalsItem> {
    public constructor(items: Array<OnlineTrafficHighlightTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineTrafficHighlightTotalsItem({ category: `Apparel`, value: 56 }),
                new OnlineTrafficHighlightTotalsItem({ category: `Beauty`, value: 67 }),
                new OnlineTrafficHighlightTotalsItem({ category: `Travel`, value: 80 }),
                // ... 4 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Data Pie Chart Animation

The [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) supports animating its slices into view, as well as when a value changes.

You can set the [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html#isTransitionInEnabled) property to **true** to have the pie chart animate into view. The type of animation performed can be configured by setting the [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html#transitionInMode) enumerated property to the type of animation you would like to see. Additionally, you can also set the [`transitionInSpeedType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html#transitionInSpeedType) property to scale with index, value, normal, or randomized. The duration of this animation can be controlled by the [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html#transitionInDuration) property, which takes a `TimeSpan`.

If you would like to animate data changes, this can also be done by setting the [`animateSeriesWhenAxisRangeChanges`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#animateSeriesWhenAxisRangeChanges) property to **true**. The duration of this change can be configured by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#transitionDuration) property as well.

The following sample demonstrates the usage of animation in the [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html):

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
                // ... 2 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Additional Resources

- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`chartType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html#chartType)
- [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryThreshold)
- [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiebasechartcomponent.html#othersCategoryType)
- [`selectionMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#selectionMode)
- [`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#selectionBehavior)

|Chart Type       | Control Name   | API Members |
|-----------------|----------------|------------ |
|Data Pie Chart      | [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html)     | [`IgcDataPieChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatapiechartcomponent.html) |
|Item Legend | [`IgcItemLegendComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcitemlegendcomponent.html) | [`IgcItemLegendComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcitemlegendcomponent.html) |
