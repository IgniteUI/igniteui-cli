---
title: Web Components Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
description: Use Infragistics Ignite UI for Web Components chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our Ignite UI for Web Components graph types!
keywords: Web Components charts, data chart, value overlay, Ignite UI for Web Components, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "The Web Components DataChart allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the ValueOverlay."
_tocName: Chart Overlays
_premium: true
---
# Web Components Chart Overlays

The Web Components [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgcValueOverlay`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent). This can help you to visualize data such as the mean or median of a particular series.

## Web Components Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Value Overlay Properties

Unlike other series types that use a [`ItemsSource`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=dataSource) for data binding, the value overlay uses a [`ValueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=valueMemberPath) property to bind a single numeric value. In addition, the value overlay requires you to define a single [`Axis`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the [`ValueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=valueMemberPath) property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the [`ValueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=valueMemberPath) should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgcValueOverlay`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent) appearance properties are inherited from [`Series`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=Series) and so [`Brush`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=brush) and [`Thickness`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=thickness) for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a [`IgcValueOverlay`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent) to show the value of the overlay on the owning axis. In order to show this, you can set the [`IsAxisAnnotationEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent&member=isAxisAnnotationEnabled) property to true.

## Web Components Value Layer

The Web Components charting components also expose the ability to use value lines to call out different focal points of your data, such as minimum, maximum, and average values.

Applying the [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) in the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) and [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) components is done by setting the [`ValueLines`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=valueLines) property on the chart. This property takes a collection of the [`IgcValueLayerValueMode`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode) enumeration. You can mix and match multiple value layers in the same chart by adding multiple [`IgcValueLayerValueMode`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode) enumerations to the [`ValueLines`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=valueLines) collection of the chart.

In the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent), this is done by adding a [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) to the [`Series`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=Series) collection of the chart and then setting the [`ValueMode`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) property to one of the [`IgcValueLayerValueMode`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode) enumerations. Each of these enumerations and what they mean is listed below:

- [`Auto`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=Auto): The default value mode of the [`IgcValueLayerValueMode`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode) enumeration.
- [`Average`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=Average): Applies potentially multiple value lines to call out the average value of each series plotted in the chart.
- [`GlobalAverage`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=GlobalAverage): Applies a single value line to call out the average of all of the series values in the chart.
- [`GlobalMaximum`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=GlobalMaximum): Applies a single value line to call out the absolute maximum value of all of the series values in the chart.
- [`GlobalMinimum`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=GlobalMinimum): Applies a single value line to call out the absolute minimum value of all of the series values in the chart.
- [`Maximum`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=Maximum): Applies potentially multiple value lines to call out the maximum value of each series plotted in the chart.
- [`Minimum`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=Minimum): Applies potentially multiple value lines to call out the minimum value of each series plotted in the chart.

If you want to prevent any particular series from being taken into account when using the [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) element, you can set the [`TargetSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent&member=targetSeries) property on the layer. This will force the layer to target the series that you define. You can have as many [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) elements within a single [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) as you want.

The following sample demonstrates usage of the different [`ValueLines`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=valueLines) in the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent):

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

## Web Components Financial Overlays

You can also plot built-in financial overlays and indicators in Web Components [Stock Chart](../types/stock-chart.md).

## Chart Overlay Text 

The Web Components [`IgcValueOverlay`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent), [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent), and all Data Annotation Layers can render custom overlay text inside plot area of the DataChart component. You can use this overlay text to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis in relationship to the layers.

For example, you can use [`IgcDataAnnotationSliceLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcDataAnnotationSliceLayerComponent), [`IgcValueOverlay`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent), and [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) to show overlay text.

```typescript
export class AnnotationSliceMultiOverlayDataItem {
    public constructor(init: Partial<AnnotationSliceMultiOverlayDataItem>) {
        Object.assign(this, init);
    }

    public value: number;

}
export class AnnotationSliceMultiOverlayData extends Array<AnnotationSliceMultiOverlayDataItem> {
    public constructor(items: Array<AnnotationSliceMultiOverlayDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceMultiOverlayDataItem({ value: 50 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class StockTeslaItem {
    public constructor(init: Partial<StockTeslaItem>) {
        Object.assign(this, init);
    }

    public date: string;
    public open: number;
    public high: number;
    public low: number;
    public close: number;
    public volume: number;
    public change: number;
    public index: number;

}
export class StockTesla extends Array<StockTeslaItem> {
    public constructor(items: Array<StockTeslaItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new StockTeslaItem({ date: `2019-01-10`, open: 20.4, high: 23, low: 19.8, close: 23, volume: 779333701, change: 12.7, index: 0 }),
                new StockTeslaItem({ date: `2019-01-22`, open: 22.8, high: 23.5, low: 19.7, close: 19.9, volume: 911781100, change: -12.6, index: 1 }),
                new StockTeslaItem({ date: `2019-01-31`, open: 19.5, high: 20.8, low: 18.6, close: 20.5, volume: 926375717, change: 5, index: 2 }),
                // ... 224 more items
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

### Styling Overlay Text

This code example shows how to style and customize Overlay Text on
the [`IgcDataAnnotationSliceLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcDataAnnotationSliceLayerComponent), [`IgcValueOverlay`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent), and [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent).

```html
<igc-data-annotation-slice-layer
    name="AnnoLayer"
    id="AnnoLayer"
    brush="green"
    annotation-text-color="white"
    annotation-label-member-path="label"
    annotation-value-member-path="value"
    overlay-text-color="red"
    overlay-text-background="green"
    overlay-text-border-color="black"
    overlay-text-member-path="label"
    overlay-text-vertical-margin="20"
    overlay-text-horizontal-margin="0"
    overlay-text-location="OutsideBottomCenter"
    overlay-text="OverlayText on DataAnnotationSliceLayer"
    thickness="2">
    </igc-data-annotation-slice-layer>
```

## Additional Resources

You can find more information about related chart types in these topics:

- [Chart Annotations](chart-annotations.md)
- [Column Chart](../types/area-chart.md)
- [Line Chart](../types/line-chart.md)
- [Stock Chart](../types/stock-chart.md)

## API References
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
[`IgcValueOverlay`](mcp:get_api_reference?platform=webcomponents&component=IgcValueOverlayComponent)
[`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent)
[`IgcValueLayerValueMode`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode)
[`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
[`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent)
