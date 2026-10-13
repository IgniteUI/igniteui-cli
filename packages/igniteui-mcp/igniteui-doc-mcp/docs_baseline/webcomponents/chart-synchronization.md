---
title: "Web Components Data Chart | Data Visualization Tools | Synchronization | Infragistics"
description: Synchronize between multiple Infragistics' Web Components charts controls including zooming, panning and crosshair events. Learn about our Ignite UI for Web Components graph synchronization capabilities!
keywords: "Web Components charts, data chart, synchronization, Ignite UI for Web Components, Infragistics"
license: commercial
mentionedTypes: ["DataChart"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Web Components data chart allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts."
_tocName: Chart Synchronization
_premium: true
---
# Web Components Chart Synchronization

The Ignite UI for Web Components data chart allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## Web Components Chart Synchronization Example

This sample shows synchronization of two Web Components data charts:

```typescript
export class SampleFinancialData {

    public static create(items?: number): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = Math.round(o + (Math.random() * 5));
        let l = Math.round(o - (Math.random() * 5));
        let c = Math.round(l + (Math.random() * (h - l)));

        if (items === undefined) {
            items = 200;
        }

        const today = new Date();
        const end = new Date(today.getFullYear(), 11, 1);
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const date = time.toDateString();
            const label = this.getShortDate(time, false);
            // adding new data item
            data.push({"Time": time, "Date": date, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.45;
            o = Math.round(o + (mod * 5 * 2));
            v = Math.round(v + (mod * 5 * 100));
            h = Math.round(o + (Math.random() * 5));
            l = Math.round(o - (Math.random() * 5));
            c = Math.round(l + (Math.random() * (h - l)));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(dt: Date, days: number): Date {
        return new Date(dt.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static getShortDate(dt: Date, showYear: boolean): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const ind = dt.getMonth();
        const day = dt.getDay() + 1;
        let label = months[ind] + " " + day;
        if (showYear) {
            label += " " +  dt.getFullYear();
        }
        return label;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Chart Synchronization Properties

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the [`SyncChannel`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=syncChannel) property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the [`SynchronizeHorizontally`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=synchronizeHorizontally) and [`SynchronizeVertically`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=synchronizeVertically) properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the [`IsHorizontalZoomEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=isHorizontalZoomEnabled) and/or [`IsVerticalZoomEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=isVerticalZoomEnabled) property to **true**, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## API References
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
