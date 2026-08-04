---
title: Web Components Chart Markers | Data Visualization | Infragistics
_description: Infragistics' Web Components Chart Markers
_keywords: Web Components Charts, Markers, Marker Size, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType", "MarkerSeries", "ScatterLineSeries", "ScatterSplineSeries", "ScatterSeries", "LineSeries", "SplineSeries", "MarkerAutomaticBehavior", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Markers
_premium: true
---

# Web Components Chart Markers

In Ignite UI for Web Components, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

## Web Components Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the [`markerType`](mcp:get_api_reference?platform=webcomponents&component=IgcMarkerSeriesComponent&member=markerType) property to [`Circle`](mcp:get_api_reference?platform=webcomponents&component=MarkerType&member=Circle) enum value.

The colors of the markers are also managed by setting the [`markerBrushes`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=markerBrushes) and [`markerOutlines`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=markerOutlines) properties in the sample below. The markers and [`chartType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=chartType) is configurable in this sample by using the drop-downs as well.

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
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

## Web Components Chart Marker Size

You can control the exact device-independent pixel dimensions of data point markers by setting the `MarkerSize` property on any series that supports markers. This gives you precise control over how large markers appear on screen, regardless of the marker template or style being used.

By default, marker sizing is determined by the series marker template. When you set `MarkerSize` to a specific numeric value, all markers in that series render at that exact device-independent pixel width and height. Setting `MarkerSize` back to `NaN` restores the default template-driven sizing.

The `MarkerSize` property is available on all series types that derive from [`IgcMarkerSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcMarkerSeriesComponent), including [`IgcLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent), [`IgcSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcSplineSeriesComponent), [`IgcAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAreaSeriesComponent), [`IgcColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnSeriesComponent), [`IgcScatterSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSeriesComponent), [`IgcScatterLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterLineSeriesComponent), [`IgcScatterSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSplineSeriesComponent), and polar/radial series types.

The following code examples show how to set `MarkerSize` to 30 device-independent pixels on a [`IgcScatterLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterLineSeriesComponent) in the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control:

```html
<igc-data-chart>
    <igc-scatter-line-series
        marker-size="30"
        marker-type="Circle"
        x-member-path="X"
        y-member-path="Y"
        x-axis-name="xAxis"
        y-axis-name="yAxis">
    </igc-scatter-line-series>
</igc-data-chart>
```

To reset markers to their default template-driven size, set `MarkerSize` to `NaN` (or remove the attribute in markup):

The following sample demonstrates `MarkerSize` on scatter series with an interactive editor:

```typescript
export class CountryDemographicAfricanItem {
    public constructor(init: Partial<CountryDemographicAfricanItem>) {
        Object.assign(this, init);
    }

    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class CountryDemographicAfrican extends Array<CountryDemographicAfricanItem> {
    public constructor(items: Array<CountryDemographicAfricanItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryDemographicAfricanItem({ population: 39728000, birthRate: 23.9, deathRate: 4.77, name: `Algeria` }),
                new CountryDemographicAfricanItem({ population: 27884000, birthRate: 42.32, deathRate: 8.68, name: `Angola` }),
                new CountryDemographicAfricanItem({ population: 10576000, birthRate: 37.43, deathRate: 9.32, name: `Benin` }),
                // ... 51 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CountryDemographicEuropeItem {
    public constructor(init: Partial<CountryDemographicEuropeItem>) {
        Object.assign(this, init);
    }

    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class CountryDemographicEurope extends Array<CountryDemographicEuropeItem> {
    public constructor(items: Array<CountryDemographicEuropeItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryDemographicEuropeItem({ population: 2891000, birthRate: 11.88, deathRate: 7.22, name: `Albania` }),
                new CountryDemographicEuropeItem({ population: 8679000, birthRate: 9.8, deathRate: 9.6, name: `Austria` }),
                new CountryDemographicEuropeItem({ population: 9439000, birthRate: 12.5, deathRate: 12.6, name: `Belarus` }),
                // ... 42 more items
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

> [!NOTE]
> For [`IgcBubbleSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent), the `MarkerSize` property does not override the bubble radius, which is controlled by the radius data column and the [`radiusScale`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent&member=radiusScale). Bubble sizes remain entirely driven by the data and scale configuration.

<div class="divider--half"></div>

## Web Components Chart Checkmark Marker Type

The Ignite UI for Web Components charts include a `Checkmark` option in the [`markerType`](mcp:get_api_reference?platform=webcomponents&component=IgcMarkerSeriesComponent&member=markerType) enum. This marker renders a V-shaped checkmark icon inside a circle on data points in your chart.

You can apply the `Checkmark` marker type to an individual series by setting its [`markerType`](mcp:get_api_reference?platform=webcomponents&component=IgcMarkerSeriesComponent&member=markerType) property to `MarkerType.Checkmark`. To use the checkmark shape for all series in the chart simultaneously, set the chart's [`markerAutomaticBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=markerAutomaticBehavior) property to `MarkerAutomaticBehavior.Checkmark`.

The `SeriesViewer.CheckmarkMarkerTemplate` property defines the marker template used for series with a checkmark marker type, and can be used to customize its appearance across the chart.

<div class="divider--half"></div>

## Web Components Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  [`markerTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcMarkerSeriesComponent&member=markerTemplate) property of a series rendered in the [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) control as it is demonstrated in example below.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`markerBrushes`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=markerBrushes)
- [`markerOutlines`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=markerOutlines)
- `MarkerSize`
- [`markerType`](mcp:get_api_reference?platform=webcomponents&component=IgcMarkerSeriesComponent&member=markerType)
- `UseLightweightMarkers`
- [`markerAutomaticBehavior`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=markerAutomaticBehavior)
- `SeriesViewer.CheckmarkMarkerTemplate`
- [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
