---
title: Web Components Data Chart | Data Visualization Tools | Navigation | Infragistics
_description: Navigate Infragistics' Web Components charts by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for Web Components graph navigation capabilities!
_keywords: Web Components charts, data chart, navigation, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "ModifierKeys"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Navigation
_premium: true
---

# Web Components Chart Navigation

The Ignite UI for Web Components charts allows for interactive panning and zooming via the mouse, keyboard and touch.

## Web Components Chart Navigation Example

The following example shows all of the available panning and zooming options that are available. You can interact with the example by using the buttons, or select your desired options using the dropdowns or checkboxes.

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


<div class="divider--half"></div>

Like this sample? Get access to our complete Web Components toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-web-components/download">Download it for free.</a>

## Chart Navigation with User Interactions

Whether or not zooming is on by default depends on the chart you are using. If you are using [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html), it is on by default, but it is not in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html). In order to enable or disable navigation in the UI, you need to set either the [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#isHorizontalZoomEnabled) and/or the [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#isVerticalZoomEnabled) properties of the chart, depending on the direction that you wish to enable or disable zooming.

It is also possible to zoom or pan simply by clicking the mouse or using touch. The [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#defaultInteraction) property of the data chart determines what happens on mouse click or touch events. This property defaults to `DragZoom` and when set to this with zooming enabled, clicking and dragging will place a preview rectangle over the plot area that will become the zoomed area of the chart. This [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#defaultInteraction) property can also be set to either `DragPan` to allow panning or `None` to prevent these operations.

## Chart Navigation with Touch, Mouse and Keyboard

Navigation in the Web Components data chart can happen with either touch, the mouse or the keyboard. The following operations can be invoked using touch, mouse or keyboard operations by default:

- **Panning**: Using <kbd>🡐</kbd> <kbd>🡒</kbd> <kbd>🡑</kbd> <kbd>🡓</kbd> arrow keys on the keyboard or holding the <kbd>SHIFT</kbd> key, clicking and dragging with the mouse or pressing and moving your finger via touch.
- **Zoom In**: Using the <kbd>PAGE UP</kbd> key on the keyboard, rolling the mouse wheel up, or pinching to zoom in via touch.
- **Zoom Out**: Using the <kbd>PAGE DOWN</kbd> key on the keyboard, rolling the mouse wheel down, or pinching to zoom out via touch.
- **Fit to Chart Plot Area**: Using the <kbd>HOME</kbd> key on the keyboard. There is no mouse or touch operation for this.
- **Area Zoom**: Click and drag the mouse within the plot area with the [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#defaultInteraction) property set to its default - `DragZoom`.

The zoom and pan operations can also be enabled by using modifier keys by setting the [`dragModifier`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#dragModifier) and [`panModifier`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#panModifier) properties, respectively. These properties can be set to the following modifier keys, and when pressed, the corresponding operation will be executed:

| Modifier Value | Corresponding Key |
| ---------------|------------------ |
| `Shift`        | <kbd>SHIFT</kbd> |
| `Control`      | <kbd>CTRL</kbd> |
| `Windows`      | <kbd>WIN</kbd> |
| `Apple`        | <kbd>APPLE</kbd> |
| `None`         | no keys |

## Chart Navigation with Scrollbars

The chart can be scrolled by enabling the [`verticalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#verticalViewScrollbarMode) and [`horizontalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#horizontalViewScrollbarMode) properties.

These can be configured to the following options

- `Persistent` - The scrollbars always stay visible, as long as the chart is zoomed in, and fade away when fully zoomed out.
- `Fading` - The scrollbars disappear after use and reappear when the mouse is near their location.
- `FadeToLine` - The scrollbars are reduced to a thinner line when zooming is not in use.
- `None` - Default, no scrollbars are shown.

The following example demonstrates enabling scrollbars.

```typescript
//begin async data
export class MultipleStocks extends Array<Array<StockItem>> {
    public static async fetch(): Promise<MultipleStocks> {
        const dataSources: any[] = [
          //await this.getAmazonStock(),
          await this.getGoogleStock(),
          await this.getAmazonStock(),
          //await this.getTeslaStock()
        ];
        return new Promise<MultipleStocks>((resolve, reject) => {
        resolve(dataSources);
        });
    }

    /** gets Amazon stock OHLC prices from a .JSON file */
    public static async getAmazonStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Amazon"]
      };
      // console.log("fetchAmazonStock: ", stockData.length);

      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    /** gets Tesla stock OHLC prices from a .JSON file */
    public static async getTeslaStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Tesla"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    /** gets Microsoft stock OHLC prices from a .JSON file */
    public static async getMicrosoftStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Microsoft"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    /** gets Google stock OHLC prices from a .JSON file */
    public static async getGoogleStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Google"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    public static convertData(jsonData: any[]): StockItem[] {
      let stockItems: StockItem[] = [];

      for (let json of jsonData) {
        let parts = json.date.split("-"); // "2020-01-01"
        let item = new StockItem();
        item.date = new Date(parts[0], parts[1], parts[2],13,0,0);
        item.open = json.open;
        item.high = json.high;
        item.low = json.low;
        item.close = json.close;
        item.volume = json.volume;
        stockItems.push(item);

      }

      return stockItems;
    }
  }

  export class StockItem {
    public open?: number;
    public close?: number;
    public high?: number;
    public low?: number;
    public volume?: number;

    public date?: Date;

  }
//end async data
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Chart Navigation through Code

> \[!Note]
> Code navigation of the chart can only be used for the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control.

The Web Components data chart provides several navigation properties that are updated each time a zoom or pan operation happens in the chart. You can also set each of these properties to zoom or pan the data chart programmatically. The following is a list of these properties:

- [`windowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowPositionHorizontal): A numeric value describing the X portion of the content view rectangle displayed by the data chart.
- [`windowPositionVertical`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowPositionVertical): A numeric value describing the Y portion of the content view rectangle displayed by the data chart.
- [`windowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowRect): A `Rect` object representing a rectangle that represents the portion of the chart that is currently in view. For example, a [`windowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowRect) of "0, 0, 1, 1" would be the entirety of the data chart.
- [`windowScaleHorizontal`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#windowScaleHorizontal): A numeric value describing the width portion of the content view rectangle displayed by the data chart.
- [`windowScaleVertical`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#windowScaleVertical): A numeric value describing the height portion of the content view rectangle displayed by the data chart.

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Tooltips](chart-tooltips.md)
- [Chart Trendlines](chart-trendlines.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#defaultInteraction)
- [`dragModifier`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#dragModifier)
- [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#isHorizontalZoomEnabled)
- [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html#isVerticalZoomEnabled)
- [`panModifier`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#panModifier)
- [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
- [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)
- [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html)
