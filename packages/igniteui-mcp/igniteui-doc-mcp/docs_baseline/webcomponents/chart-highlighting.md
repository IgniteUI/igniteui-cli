---
title: Web Components Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' Web Components Chart Highlighting
_keywords: Web Components Charts, Highlighting, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Highlighting
_premium: true
---

## Web Components Chart Highlighting Example

The following example demonstrates the different highlighting options that are available on the Web Components chart.

```typescript
export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public tempInfo: string;
    public temperature: number;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor(items: Array<TemperatureAnnotatedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAnnotatedDataItem({ index: 0, tempInfo: `27°C`, temperature: 27, month: `Jan` }),
                new TemperatureAnnotatedDataItem({ index: 1, tempInfo: `25°C`, temperature: 25, month: `Feb` }),
                new TemperatureAnnotatedDataItem({ index: 2, tempInfo: `21°C`, temperature: 21, month: `Mar` }),
                // ... 9 more items
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

# Web Components Chart Highlighting Modes & Behaviors

All Web Components Charts support a variety of highlighting options. [`highlightingMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=highlightingMode) can be set to brighten or fade when the mouse is hovering over a series/data item rendered in the plot area. [`highlightingBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=highlightingBehavior) can be set to directly over or the nearest data item to trigger the highlighting effect. Highlighting modes and behaviors is supported by the [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent), [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent), and [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) controls and they have the same API for using the highlighting feature.

The following example demonstrates the [`highlightingMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=highlightingMode) Web Components chart.

```typescript
export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public tempInfo: string;
    public temperature: number;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor(items: Array<TemperatureAnnotatedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAnnotatedDataItem({ index: 0, tempInfo: `27°C`, temperature: 27, month: `Jan` }),
                new TemperatureAnnotatedDataItem({ index: 1, tempInfo: `25°C`, temperature: 25, month: `Feb` }),
                new TemperatureAnnotatedDataItem({ index: 2, tempInfo: `21°C`, temperature: 21, month: `Mar` }),
                // ... 9 more items
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

The following example demonstrates the [`highlightingBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=highlightingBehavior) Web Components chart.

```typescript
export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public tempInfo: string;
    public temperature: number;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor(items: Array<TemperatureAnnotatedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAnnotatedDataItem({ index: 0, tempInfo: `27°C`, temperature: 27, month: `Jan` }),
                new TemperatureAnnotatedDataItem({ index: 1, tempInfo: `25°C`, temperature: 25, month: `Feb` }),
                new TemperatureAnnotatedDataItem({ index: 2, tempInfo: `21°C`, temperature: 21, month: `Mar` }),
                // ... 9 more items
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

# Web Components Chart Legend Highlighting

All Web Components Charts support legend highlighting. [`legendHighlightingMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=legendHighlightingMode) can enabled so that when mouse is hovering over a legend marker item then the rendered series will highlight in the plot area. Legend highlighting is supported by the [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent), [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent), and [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) controls and they have the same API for using the highlighting feature.

The following example demonstrates the legend series highlighting Web Components chart.

```typescript
export class HighestGrossingMoviesItem {
    public constructor(init: Partial<HighestGrossingMoviesItem>) {
        Object.assign(this, init);
    }

    public franchise: string;
    public totalRevenue: number;
    public highestGrossing: number;

}
export class HighestGrossingMovies extends Array<HighestGrossingMoviesItem> {
    public constructor(items: Array<HighestGrossingMoviesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HighestGrossingMoviesItem({ franchise: `Marvel Universe`, totalRevenue: 22.55, highestGrossing: 2.8 }),
                new HighestGrossingMoviesItem({ franchise: `Star Wars`, totalRevenue: 10.32, highestGrossing: 2.07 }),
                new HighestGrossingMoviesItem({ franchise: `Harry Potter`, totalRevenue: 9.19, highestGrossing: 1.34 }),
                // ... 3 more items
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

## Highlight Layers

The Ignite UI for Web Components [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) can enable three types of highlighting when hovering over data items.

1. Series Highlighting will highlight the single data point represented by a marker or column when the pointer is positioned over it. This is enabled by setting the [`isSeriesHighlightingEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=isSeriesHighlightingEnabled) property to true.

2. Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position. This is enabled by setting the [`isItemHighlightingEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=isItemHighlightingEnabled) property to true.

3. Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position. This is enabled by setting the [`isCategoryHighlightingEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=isCategoryHighlightingEnabled) property to true.

The following example demonstrates the different highlighting layers that are available on the Web Components chart.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`highlightingMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=highlightingMode)
- [`highlightingBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=highlightingBehavior)
- `LegendHighlightingBehavior`
- [`isCategoryHighlightingEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=isCategoryHighlightingEnabled)
- [`isItemHighlightingEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=isItemHighlightingEnabled)
- [`isSeriesHighlightingEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=isSeriesHighlightingEnabled)
- [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
- [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent)
