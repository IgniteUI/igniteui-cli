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

You can create the Web Components Pie Chart in the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization.

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

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`IgcLegendComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcLegendComponent) property. The ItemLegend will display its items in vertical orientation as a default, but this can be changed by setting its [`orientation`](mcp:get_api_reference?platform=webcomponents&component=IgcLegendComponent&member=orientation) property.

The labels shown on the legend will display the same content as the label that is shown for each slice in the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) by default, but this can be modified by utilizing the [`legendSliceLabelContentMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=legendSliceLabelContentMode) property on the chart. This exposes an enumeration that allows you to show the label, value, percentage, or any combination of those as the legend's content for each slice in the chart.

You can also modify the ItemLegend badge. By default, it appears as a filled circle corresponding to the color of the associated chart slice. You can configure this by using the [`legendItemBadgeShape`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=legendItemBadgeShape) property on the chart, and you can set this to be a circle, line, bar, column, and more.

Below is an example that demonstrates usage of the ItemLegend with the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent).

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

The Others category in the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) has three main, configurable properties - [`othersCategoryType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryType), [`othersCategoryThreshold`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryThreshold), and [`othersCategoryText`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryText) that allow you to configure how the Others slice in the chart is shown. These are each described below:

The [`othersCategoryType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryType) property works in tandem with the [`othersCategoryThreshold`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryThreshold) property of the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent). For the [`othersCategoryType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryType), you can define whether you want the [`othersCategoryThreshold`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryThreshold) to be evaluated as a number or a percentage. For example, if you decide on number and set the [`othersCategoryThreshold`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryThreshold) to 5, any slices that have a value less than 5 will become part of the Others category. Using the same value of 5 with a percent type, any values that are less than 5 percent of the total values of the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) will become part of the Others category.

To get the underlying data items that are contained within the Others slice in the chart, you can utilize the [`getOthersContext`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=getOthersContext) method on the chart. This return type of this method is an [`IgcOthersCategoryContextComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcOthersCategoryContextComponent) which exposes an [`items`](mcp:get_api_reference?platform=webcomponents&component=IgcOthersCategoryContextComponent&member=items) property. The [`items`](mcp:get_api_reference?platform=webcomponents&component=IgcOthersCategoryContextComponent&member=items) property returns an array that will contain the items in the Others slice. Additionally, when clicking the Others slice, the `Item` property of the event arguments for the `SeriesClick` event will be will also return this [`IgcOthersCategoryContextComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcOthersCategoryContextComponent).

By default, the Others slice will be represented by a label of "Others." You can change this by modifying the [`othersCategoryText`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryText) property of the chart.

### Web Components Styling the Others Slice

You can style the aggregated Others slice separately from other slices by using these properties:

- `OthersCategoryBrush`\
    Sets the fill (brush) used for the Others slice.

- `OthersCategoryOutline`\
    Sets the outline (stroke) used for the Others slice.

These properties only affect the Others slice (when it exists). All other slices continue to use the normal palette and item-wise coloring behavior.

> [!NOTE]
> The Others slice is only rendered when the chart is configured to create it (for example, with [`othersCategoryThreshold`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryThreshold) greater than `0` and an appropriate [`othersCategoryType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryType)). If the Others slice is not present, `OthersCategoryBrush` and `OthersCategoryOutline` have no visible effect.

If you want to ensure that the Others category does not show up in the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent), you can set the [`othersCategoryThreshold`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryThreshold) to 0.

The following sample demonstrates usage of the Others slice in the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent):

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

The [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) supports slice selection by mouse click on the slices plotted in the chart. This can be configured by utilizing the [`selectionBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=selectionBehavior) and [`selectionMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=selectionMode) properties of the chart, described below:

The main two options of the [`selectionBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=selectionBehavior) are [`PerDataItemSingleSelect`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionBehavior&member=PerDataItemSingleSelect) and [`PerDataItemMultiSelect`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionBehavior&member=PerDataItemMultiSelect), which will enable single and multiple selection, respectively.

The [`selectionMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=selectionMode) property exposes an enumeration that determines how the pie chart slices respond to being selected. The following are the options of that enumeration and what they do:

- [`Brighten`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=Brighten): The selected slices will be highlighted.
- [`FadeOthers`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=FadeOthers): The selected slices will remain their same color and others will fade.
- [`FocusColorFill`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=FocusColorFill): The selected slices will change their background to the FocusBrush of the chart.
- [`FocusColorOutline`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=FocusColorOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart.
- [`FocusColorThickOutline`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=FocusColorThickOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- [`GrayscaleOthers`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=GrayscaleOthers): The unselected slices will have a gray color filter applied to them.
- [`None`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=None): There is no effect on the selected slices.
- [`SelectionColorFill`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=SelectionColorFill): The selected slices will change their background to the SelectionBrush of the chart.
- [`SelectionColorOutline`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=SelectionColorOutline): The selected slices will have an outline with the color defined by the SelectionBrush of the chart.
- [`SelectionColorThickOutline`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=SelectionColorThickOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- [`ThickOutline`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=ThickOutline): The selected slices will apply an outline with the thickness dependent on the Thickness property of the chart.

When a slice is selected, its underlying data item will be added to the SelectedSeriesItems collection of the chart. As such, the XamDataPieChart exposes the SelectedSeriesItemsChanged event to detect when a slice has been selected and this collection is changed.

The following sample demonstrates the selection feature of the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) control:

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

The [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) supports mouse over highlighting, as well as a highlighting overlay that can be configured by providing a separate data source.

First, the [`highlightingBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=highlightingBehavior) enumerated property determines how a slice will be highlighted. The following are the options of that property and what they do:

- [`DirectlyOver`](mcp:get_api_reference?platform=webcomponents&component=SeriesHighlightingBehavior&member=DirectlyOver): The slices are only highlighted when the mouse is directly over them.
- [`NearestItems`](mcp:get_api_reference?platform=webcomponents&component=SeriesHighlightingBehavior&member=NearestItems): The nearest slice to the mouse position will be highlighted.
- [`NearestItemsAndSeries`](mcp:get_api_reference?platform=webcomponents&component=SeriesHighlightingBehavior&member=NearestItemsAndSeries): The nearest slice and series to the mouse position will be highlighted.
- [`NearestItemsRetainMainShapes`](mcp:get_api_reference?platform=webcomponents&component=SeriesHighlightingBehavior&member=NearestItemsRetainMainShapes): The nearest items to the mouse position will be highlighted and the main shapes of the series will not be de-emphasized.

The [`highlightingMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=highlightingMode) enumerated property determines how the data pie chart slices respond to being highlighted. The following are the options of that property and what they do:

- [`Brighten`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=Brighten): The series will have its color brightened when the mouse position is over or near it.
- `BrightenSpecific`: The specific slice will have its color brightened when the mouse position is over or near it.
- [`FadeOthers`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=FadeOthers): The series will retain its color when the mouse position is over or near it, while the others will appear faded.
- `FadeOthersSpecific`: The specific slice will retain its color when the mouse position is over or near it, while the others will appear faded.
- [`None`](mcp:get_api_reference?platform=webcomponents&component=SeriesSelectionMode&member=None): The series and slices will not be highlighted.

The following example demonstrates the mouse highlighting behaviors of the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) component:

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

In addition to the mouse highlighting, the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) exposes a highlight filter capability that can display a subset of your data. This is applied by specifying a `HighlightedDataSource` for the control and by setting the [`highlightedValuesDisplayMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=highlightedValuesDisplayMode) property to `Overlay`. The `HighlightedDataSource` expects a subset of the data assigned to the `DataSource` property of the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent).

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

The [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) supports animating its slices into view, as well as when a value changes.

You can set the [`isTransitionInEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=isTransitionInEnabled) property to **true** to have the pie chart animate into view. The type of animation performed can be configured by setting the [`transitionInMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=transitionInMode) enumerated property to the type of animation you would like to see. Additionally, you can also set the [`transitionInSpeedType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=transitionInSpeedType) property to scale with index, value, normal, or randomized. The duration of this animation can be controlled by the [`transitionInDuration`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=transitionInDuration) property, which takes a `TimeSpan`.

If you would like to animate data changes, this can also be done by setting the [`animateSeriesWhenAxisRangeChanges`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=animateSeriesWhenAxisRangeChanges) property to **true**. The duration of this change can be configured by setting the [`transitionDuration`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=transitionDuration) property as well.

The following sample demonstrates the usage of animation in the [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent):

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

- [`chartType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=chartType)
- [`othersCategoryThreshold`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryThreshold)
- [`othersCategoryType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=othersCategoryType)
- [`selectionMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=selectionMode)
- [`selectionBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent&member=selectionBehavior)

|Chart Type       | Control Name   | API Members |
|-----------------|----------------|------------ |
|Data Pie Chart      | [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent)     | [`IgcDataPieChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataPieChartComponent) |
|Item Legend | [`IgcItemLegendComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcItemLegendComponent) | [`IgcItemLegendComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcItemLegendComponent) |
