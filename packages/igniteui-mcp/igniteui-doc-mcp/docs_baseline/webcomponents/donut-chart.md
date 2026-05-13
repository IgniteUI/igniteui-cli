---
title: Web Components Donut Chart | Data Visualization | Infragistics
_description: Infragistics' Web Components Donut Chart
_keywords: Web Components Charts, Donut Chart, Donut Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDoughnutChart", "DoughnutChart"]
namespace: Infragistics.Controls.Charts
_tocName: Donut Chart
_premium: true
---

# Web Components Donut Chart

The Ignite UI for Web Components Donut Chart is similar to the [Pie Chart](pie-chart.md), proportionally illustrating the occurrences of a variable. The donut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data. The rings are capable of being bound to a different data item, or they can share a common data source.

## Web Components Donut Chart Example

You can create Donut Chart using the [`IgcDoughnutChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdoughnutchartcomponent.html) control by binding your data as shown in the example below.

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

## Web Components Donut Chart Recommendations

### Are Web Components Donut Charts right for your project?

Donut Charts are appropriate for small data sets and are easy to read at a glance. Donut charts are just one type of part-to-whole visualization. Others include:

- [Pie](pie-chart.md)

<!-- - Funnel  -->

- [Stacked Area](area-chart.md)
- [Stacked 100% Area (Stacked Percentage Area)](area-chart.md)
- [Stacked Bar](bar-chart.md)
- [Stacked 100% Bar (Stacked Percentage Bar)](bar-chart.md)
- [Treemap](treemap-chart.md)
- [Waterfall](column-chart.md)

The Web Components Donut Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

### Best Practices for Donut Charts

- Using multiple data sets to display your data in a ring display.
- Placing the information such as values or labels, within the hole of the donut for quick explanation of data.
- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Ensuring data segments add up to 100%.
- Ensuring the color palette is distinguishable for segments/slices of the parts.

### When not to use a Donut Chart

- Comparing change over time —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- Requiring precise data comparison —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- You have more than 6 or 8 segments (high data volume) — consider a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a [Bar](bar-chart.md) chart.
- You have negative data, as this can not be represented in a donut chart.

## Web Components Donut Chart - Slice Selection

The Web Components Donut Chart has the ability to select slices on click. Optionally, you may apply a single custom visual style to the selected slices. The `SliceClick` event is raised when the user clicks on a slice. Enabling slice selection allows you to modify the slice's selection upon click. The following sample demonstrates how to enable slice selection and set the selected slice color to gray.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Donut Chart - Multiple Rings

It is possible to have a multiple ring display in the Web Components Donut Chart, with each of the rings capable of being bound to a different data item, or they can share a common data source. This can be helpful if you need to display your data as tiers that have an underlying common category, such as the season to month data display below:

```typescript
export class CalendarMonthsItem {
    public constructor(init: Partial<CalendarMonthsItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class CalendarMonths extends Array<CalendarMonthsItem> {
    public constructor(items: Array<CalendarMonthsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CalendarMonthsItem({ value: 1, label: `December` }),
                new CalendarMonthsItem({ value: 1, label: `January` }),
                new CalendarMonthsItem({ value: 1, label: `February` }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CalendarSeasonsItem {
    public constructor(init: Partial<CalendarSeasonsItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class CalendarSeasons extends Array<CalendarSeasonsItem> {
    public constructor(items: Array<CalendarSeasonsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CalendarSeasonsItem({ value: 4, label: `Winter` }),
                new CalendarSeasonsItem({ value: 4, label: `Spring` }),
                new CalendarSeasonsItem({ value: 4, label: `Summer` }),
                // ... 1 more items
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

You can find more information about related chart types in these topics:

- [Pie Chart](pie-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgcDoughnutChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdoughnutchartcomponent.html)
- [`allowSliceExplosion`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdoughnutchartcomponent.html#allowSliceExplosion)
- [`allowSliceSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdoughnutchartcomponent.html#allowSliceSelection)
- [`innerExtent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdoughnutchartcomponent.html#innerExtent)
- `SliceClick`
