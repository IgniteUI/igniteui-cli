---
title: Web Components Chart Data Annotations | Data Visualization | Infragistics
_description: Infragistics' Web Components Chart Data Annotations
_keywords: Web Components Charts, Data Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Annotations
_premium: true
---

# Web Components Chart Data Annotations <label class="badge badge--preview">PREVIEW</label>

In the Web Components chart, the data annotation layers allow you to annotate data plotted in Data Chart with sloped lines, vertical/horizontal lines (aka axis slices), vertical/horizontal strips (targeting specific axis), rectangles, and even parallelograms (aka bands). With data-binding supported, you can create as many annotations as you want to customize your charts. Also, you can combine different annotation layers and you can overlay text inside of plot area to annotated important events, patterns, and regions in your data.

> [!Note]
> These features are designed to support cartesian axes and does not currently support radius or angle axes.

For example, you can annotates stock prices with stock events and patterns.

```typescript
export class AnnotationLineData1Item {
    public constructor(init: Partial<AnnotationLineData1Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationLineData1 extends Array<AnnotationLineData1Item> {
    public constructor(items: Array<AnnotationLineData1Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineData1Item({ startX: 190, startY: 138, endX: 230, endY: 138, label: `52-Week Low` }),
                new AnnotationLineData1Item({ startX: 190, startY: 481, endX: 230, endY: 481, label: `52-Week High` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationLineData2Item {
    public constructor(init: Partial<AnnotationLineData2Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationLineData2 extends Array<AnnotationLineData2Item> {
    public constructor(items: Array<AnnotationLineData2Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineData2Item({ startX: 48, startY: 25, endX: 105, endY: 250, label: `Growth &
Support` }),
                new AnnotationLineData2Item({ startX: 108, startY: 440, endX: 155, endY: 210, label: `Decline &
Resistance` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationSliceEarningsBeatDataItem {
    public constructor(init: Partial<AnnotationSliceEarningsBeatDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceEarningsBeatData extends Array<AnnotationSliceEarningsBeatDataItem> {
    public constructor(items: Array<AnnotationSliceEarningsBeatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceEarningsBeatDataItem({ value: 155, label: `Earnings Beat` }),
                new AnnotationSliceEarningsBeatDataItem({ value: 86, label: `Earnings Beat` }),
                new AnnotationSliceEarningsBeatDataItem({ value: 28, label: `Earnings Beat` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationSliceEarningsMissDataItem {
    public constructor(init: Partial<AnnotationSliceEarningsMissDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceEarningsMissData extends Array<AnnotationSliceEarningsMissDataItem> {
    public constructor(items: Array<AnnotationSliceEarningsMissDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceEarningsMissDataItem({ value: 9, label: `Earnings Miss` }),
                new AnnotationSliceEarningsMissDataItem({ value: 179, label: `Earnings Miss` }),
                new AnnotationSliceEarningsMissDataItem({ value: 215, label: `Earnings Miss` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationSliceStockSplitDataItem {
    public constructor(init: Partial<AnnotationSliceStockSplitDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceStockSplitData extends Array<AnnotationSliceStockSplitDataItem> {
    public constructor(items: Array<AnnotationSliceStockSplitDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceStockSplitDataItem({ value: 126, label: `Stock Split 3-1` }),
                new AnnotationSliceStockSplitDataItem({ value: 61, label: `Stock Split 5-1` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationStripDataItem {
    public constructor(init: Partial<AnnotationStripDataItem>) {
        Object.assign(this, init);
    }

    public start: number;
    public end: number;
    public label: string;

}
export class AnnotationStripData extends Array<AnnotationStripDataItem> {
    public constructor(items: Array<AnnotationStripDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationStripDataItem({ start: 40, end: 45, label: `Covid - Market Crash` }),
                new AnnotationStripDataItem({ start: 100, end: 144, label: `Fed Rate Up  0.25 - 5.25%` }),
                new AnnotationStripDataItem({ start: 190, end: 205, label: `Fed Rate Down 5.25% to 4.45%` }),
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

Like this sample? Get access to our complete Web Components toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-web-components/download">Download it for free.</a>

## Web Components Data Annotation Slice Layer Example

In Web Components, the link:{DataChartLink}.DataAnnotationSliceLayer.html\[DataAnnotationSliceLayer] renders multiple vertical or horizontal lines that slice the chart at multiple values of an axis in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) component. This data annotation layer is often used to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal slices or setting TargetAxis property to x-axis will render data annotation layer as vertical slices. Similarly to all series, the DataAnnotationSliceLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the `AnnotationValueMemberPath` property.

For example, you can use DataAnnotationSliceLayer to annotate stock prices with important events such as stock split and outcome of earning reports.

```typescript
export class AnnotationSliceEarningsBeatDataItem {
    public constructor(init: Partial<AnnotationSliceEarningsBeatDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceEarningsBeatData extends Array<AnnotationSliceEarningsBeatDataItem> {
    public constructor(items: Array<AnnotationSliceEarningsBeatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceEarningsBeatDataItem({ value: 155, label: `Earnings Beat` }),
                new AnnotationSliceEarningsBeatDataItem({ value: 86, label: `Earnings Beat` }),
                new AnnotationSliceEarningsBeatDataItem({ value: 28, label: `Earnings Beat` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationSliceEarningsMissDataItem {
    public constructor(init: Partial<AnnotationSliceEarningsMissDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceEarningsMissData extends Array<AnnotationSliceEarningsMissDataItem> {
    public constructor(items: Array<AnnotationSliceEarningsMissDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceEarningsMissDataItem({ value: 9, label: `Earnings Miss` }),
                new AnnotationSliceEarningsMissDataItem({ value: 179, label: `Earnings Miss` }),
                new AnnotationSliceEarningsMissDataItem({ value: 215, label: `Earnings Miss` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationSliceStockSplitDataItem {
    public constructor(init: Partial<AnnotationSliceStockSplitDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceStockSplitData extends Array<AnnotationSliceStockSplitDataItem> {
    public constructor(items: Array<AnnotationSliceStockSplitDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceStockSplitDataItem({ value: 126, label: `Stock Split 3-1` }),
                new AnnotationSliceStockSplitDataItem({ value: 61, label: `Stock Split 5-1` }),
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

<div class="divider--half"></div>

## Web Components Data Annotation Strip Layer Example

In Web Components, the [`IgcDataAnnotationStripLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationstriplayercomponent.html) renders multiple vertical or horizontal strips between 2 values on an axis in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) component. This data annotation layer can be used to annotate duration of events (e.g. stock market crash) on x-axis or important range of values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal strips or setting TargetAxis property to x-axis will render data annotation layer as vertical strips. Similarly to all series, the [`IgcDataAnnotationStripLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationstriplayercomponent.html) also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the AnnotationValueMemberPath property.

For example, you can use [`IgcDataAnnotationStripLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationstriplayercomponent.html) to annotate chart with stock market crashes and changes in federal interest rates.

```typescript
export class AnnotationStripDataItem {
    public constructor(init: Partial<AnnotationStripDataItem>) {
        Object.assign(this, init);
    }

    public start: number;
    public end: number;
    public label: string;

}
export class AnnotationStripData extends Array<AnnotationStripDataItem> {
    public constructor(items: Array<AnnotationStripDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationStripDataItem({ start: 40, end: 45, label: `Covid - Market Crash` }),
                new AnnotationStripDataItem({ start: 100, end: 144, label: `Fed Rate Up  0.25 - 5.25%` }),
                new AnnotationStripDataItem({ start: 190, end: 205, label: `Fed Rate Down 5.25% to 4.45%` }),
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

<div class="divider--half"></div>

## Web Components Data Annotation Line Layer Example

In Web Components, [`IgcDataAnnotationLineLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationlinelayercomponent.html) renders multiple lines between 2 points in plot area of the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) component. This data annotation layer can be used to annotate stock chart with growth and decline in stock prices. Similarly to all series, the DataAnnotationLineLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath`  properties.

For example, you can use DataAnnotationLineLayer to annotate growth and decline patterns in stock prices and 52-week high and low of stock prices on y-axis.

```typescript
export class AnnotationLineData1Item {
    public constructor(init: Partial<AnnotationLineData1Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationLineData1 extends Array<AnnotationLineData1Item> {
    public constructor(items: Array<AnnotationLineData1Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineData1Item({ startX: 190, startY: 138, endX: 230, endY: 138, label: `52-Week Low` }),
                new AnnotationLineData1Item({ startX: 190, startY: 481, endX: 230, endY: 481, label: `52-Week High` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class AnnotationLineData2Item {
    public constructor(init: Partial<AnnotationLineData2Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationLineData2 extends Array<AnnotationLineData2Item> {
    public constructor(items: Array<AnnotationLineData2Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineData2Item({ startX: 48, startY: 25, endX: 105, endY: 250, label: `Growth &
Support` }),
                new AnnotationLineData2Item({ startX: 108, startY: 440, endX: 155, endY: 210, label: `Decline &
Resistance` }),
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

<div class="divider--half"></div>

## Web Components Data Annotation Rect Layer Example

In Web Components, the [`IgcDataAnnotationRectLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationrectlayercomponent.html) renders multiple rectangles defined by starting and ending points in plot area of the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) component. This data annotation layer can be used to annotate region of plot area such as bearish patterns in stock prices. Similarly to all series, the DataAnnotationRectLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the rectangles. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties.

For example, you can use DataAnnotationRectLayer to annotate bearish patterns and gaps in stock prices on y-axis.

```typescript
export class AnnotationRectDataItem {
    public constructor(init: Partial<AnnotationRectDataItem>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationRectData extends Array<AnnotationRectDataItem> {
    public constructor(items: Array<AnnotationRectDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationRectDataItem({ startX: 85, startY: 190, endX: 140, endY: 415, label: `Head & Shoulders Pattern
  (Bearish Downtrend)` }),
                new AnnotationRectDataItem({ startX: 53, startY: 75, endX: 230, endY: 80, label: `Price Gap (Bearish Target)` }),
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

<div class="divider--half"></div>

## Web Components Data Annotation Band Layer Example

In Web Components, the [`IgcDataAnnotationBandLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationbandlayercomponent.html) renders multiple skewed rectangles (free-form parallelogram) between 2 points in plot area of the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) component. This data annotation layer can be used to annotate range of growth and decline in stock prices. Similarly to all series, the DataAnnotationBandLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties. In addition, you can specify thickness/size of the skewed rectangle by binding numeric data column to the AnnotationBreadthMemberPath property.

For example, you can use DataAnnotationBandLayer to annotate range of growth in stock prices.

```typescript
export class AnnotationBandDataItem {
    public constructor(init: Partial<AnnotationBandDataItem>) {
        Object.assign(this, init);
    }

    public startLabel: string;
    public endLabel: string;
    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public value: number;
    public label: string;

}
export class AnnotationBandData extends Array<AnnotationBandDataItem> {
    public constructor(items: Array<AnnotationBandDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationBandDataItem({ startLabel: `Growth Start`, endLabel: `Growth Stop`, startX: 48, startY: 110, endX: 105, endY: 335, value: 170, label: `Rapid Growth` }),
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

<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- `TargetAxis`: This property specifies which axis should have an enabled DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `DataSource`: This property binds data to the annotation layer to provide the precise shape.
- `StartValueXMemberPath`: This property is a mapping to the name of the data column with x-positions for the start of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `StartValueYMemberPath`: This property is a mapping to the name of data column with y-positions for the start of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `EndValueXMemberPath`: This property is a mapping to the data column with x-positions for the end of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `EndValueYMemberPath`: This property is a mapping to the data column with y-positions for end of the DataAnnotationBandLayer, DataAnnotationLineLayer, DataAnnotationRectLayer.
- `StartLabelXMemberPath`: This property is a mapping to the data column representing the overlay label for the starting position of the xAxis along the axis.
- `StartLabelXDisplayMode` | `StartLabelYDisplayMode` | `EndLabelXDisplayMode` | `EndLabelYDisplayMode` | `CenterLabelXDisplayMode`: These properties specify what should annotation labels display on starting, ending, or center of the annotation shape, e.g. mapped data value, mapped data label, axis value, or hide a given annotation label.
- `StartLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the starting position of [`IgcDataAnnotationBandLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationbandlayercomponent.html), [`IgcDataAnnotationLineLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationlinelayercomponent.html), [`IgcDataAnnotationRectLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationrectlayercomponent.html) on the y-axis.
- `EndLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the ending position of [`IgcDataAnnotationBandLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationbandlayercomponent.html), [`IgcDataAnnotationLineLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationlinelayercomponent.html), [`IgcDataAnnotationRectLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdataannotationrectlayercomponent.html) on the y-axis.
