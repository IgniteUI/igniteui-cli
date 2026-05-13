---
title: Web Components Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' Web Components Chart Annotations
_keywords: Web Components Charts, Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Annotations
_premium: true
---

# Web Components Chart Annotations

The Web Components chart's hover interactions and annotations are implemented through hover interaction layers, which are series that are added to the series collection. These layers are dependent on the cursor position. Each of these annotation layers provides a different hover interaction that may be used individually or combined with others to provide powerful hover interactions.

## Web Components Annotations Example

The following example demonstrates the annotation layers that are available on the Web Components chart. Click on the checkboxes to turn each layer on and off.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

Like this sample? Get access to our complete Web Components toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-web-components/download">Download it for free.</a>

## Web Components Crosshair Layer

The [`IgcCrosshairLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccrosshairlayercomponent.html) renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines.

Crosshair types include:

- Horizontal
- Vertical
- Both

The chart's crosshairs can also be configured to snap to data points by setting the [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#crosshairsSnapToData) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

You can configure the crosshair layer so that the layer will only display on one specific series, as by default they will target all series in the chart control. To achieve this, set the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccrosshairlayercomponent.html#targetSeries) property.

By default, the color of the crosshair lines is a lighter color than the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the [`brush`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriescomponent.html#brush) property of the Crosshair Layer.

The following example shows how to configure the crosshair layer but targeting a single series, setting the type to vertical and styling the brush color.

```typescript
export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "2009", "Europe": 31, "China": 21, "USA": 19 });
        data.push({ "Year": "2010", "Europe": 43, "China": 26, "USA": 24 });
        data.push({ "Year": "2011", "Europe": 66, "China": 29, "USA": 28 });
        data.push({ "Year": "2012", "Europe": 69, "China": 32, "USA": 26 });
        data.push({ "Year": "2013", "Europe": 58, "China": 47, "USA": 38 });
        data.push({ "Year": "2014", "Europe": 40, "China": 46, "USA": 31 });
        data.push({ "Year": "2015", "Europe": 78, "China": 50, "USA": 19 });
        data.push({ "Year": "2016", "Europe": 13, "China": 90, "USA": 52 });
        data.push({ "Year": "2017", "Europe": 78, "China": 132, "USA": 50 });
        data.push({ "Year": "2018", "Europe": 40, "China": 134, "USA": 34 });
        data.push({ "Year": "2019", "Europe": 80, "China": 96, "USA": 38 });
        return data;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Final Value Layer

The [`IgcFinalValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinalvaluelayercomponent.html) of the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control provides a quick view along the axis of the ending value displayed in a series.

You can configure this annotation to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccrosshairlayercomponent.html#targetSeries) property.

You can also customize this annotation by setting the following properties:

- [`axisAnnotationBackground`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinalvaluelayercomponent.html#axisAnnotationBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`axisAnnotationTextColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinalvaluelayercomponent.html#axisAnnotationTextColor): This property is used to choose the brush for the annotation's text color.
- [`axisAnnotationOutline`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinalvaluelayercomponent.html#axisAnnotationOutline): This property is used to choose the brush for the annotation's outline color.

The following example demonstrates how to style the final value layer annotation by setting the properties listed above.

```typescript
export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "2009", "Europe": 31, "China": 21, "USA": 19 });
        data.push({ "Year": "2010", "Europe": 43, "China": 26, "USA": 24 });
        data.push({ "Year": "2011", "Europe": 66, "China": 29, "USA": 28 });
        data.push({ "Year": "2012", "Europe": 69, "China": 32, "USA": 26 });
        data.push({ "Year": "2013", "Europe": 58, "China": 47, "USA": 38 });
        data.push({ "Year": "2014", "Europe": 40, "China": 46, "USA": 31 });
        data.push({ "Year": "2015", "Europe": 78, "China": 50, "USA": 19 });
        data.push({ "Year": "2016", "Europe": 13, "China": 90, "USA": 52 });
        data.push({ "Year": "2017", "Europe": 78, "China": 132, "USA": 50 });
        data.push({ "Year": "2018", "Europe": 40, "China": 134, "USA": 34 });
        data.push({ "Year": "2019", "Europe": 80, "China": 96, "USA": 38 });
        return data;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

```html
<igc-category-chart
     id="chart"
     final-value-annotations-visible="true">
</igc-category-chart>
```

## Web Components Callout Layer

The [`IgcCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html) displays annotations from existing or new data on the chart control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users.

You can configure the callouts to target a specific series if you want to have multiple callout layers present with different configurations. This can be done by setting the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#targetSeries) property.

You can also customize this annotation by setting the following properties:

- [`calloutLeaderBrush`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#calloutLeaderBrush): This property is used to choose the brush for the leader lines for the callouts for the layer.
- [`calloutOutline`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#calloutOutline): This property is used to choose the brush for the annotation's outline color.
- [`calloutBackground`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#calloutBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`calloutTextColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#calloutTextColor): This property is used to choose the brush for the annotation's text color.
- [`calloutStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#calloutStrokeThickness): This property is used to choose the thickness for the callout backing.
- [`calloutCornerRadius`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#calloutCornerRadius): This property is used to curve the corners of the callouts.
- [`allowedPositions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html#allowedPositions): This property is used to choose which positions that the callout layer is allowed to use. eg. top, bottom

The following example demonstrates how to style the callout layer annotations by setting the properties listed above:

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

```html
<igc-category-chart
     id="chart"
     width="800px"
     height="400px"
     callouts-visible="true">
</igc-category-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcCategoryChartComponent);

chart.dataSource = data;
chart.calloutsDataSource = categoryData;
chart.calloutsXMemberPath = "index";
chart.calloutsYMemberPath = "value";
chart.calloutsLabelMemberPath = "info";
```

## API References

The following is a list of API members mentioned in the above sections:

- [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#crosshairsSnapToData)
- [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
