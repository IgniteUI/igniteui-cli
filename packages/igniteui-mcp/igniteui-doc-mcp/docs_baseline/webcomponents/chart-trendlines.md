---
title: Web Components Chart Trendlines | Data Visualization | Infragistics
description: Infragistics' Web Components Chart Trendlines
keywords: Web Components Charts, Trendlines, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "In Ignite UI for Web Components charts, trendlines help in identifying a trend or finding patterns in data."
_tocName: Chart Trendlines
_premium: true
---
# Web Components Chart Trendlines

In Ignite UI for Web Components charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent), [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent), and [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the [`TrendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=trendLineType) property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness.

The trendlines also have the ability to have a dash array applied to them once enabled. This is done by setting the [`TrendLineDashArray`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialPriceSeriesComponent&member=trendLineDashArray) property to an array of numbers. The numeric array describes the length of the dashes of the trendline.

## Web Components Chart Trendlines Example

The following sample depicts a [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) showing the stock trend of Microsoft between 2013 and 2017 with a **QuinticFit** trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

```typescript
export class StocksHistory {
  /** gets stock OHLC prices for multiple stocks */

  public static async getMultipleStocks(): Promise<any[]> {
    // getting prices of multiples stocks asynchronously
    const dataSources: any[] = [
      //await this.getAmazonStock(),
      await this.getGoogleStock(),
      await this.getMicrosoftStock(),
      //await this.getTeslaStock()
    ];

    return new Promise<any[]>((resolve, reject) => {
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
      item.date = new Date(parts[0], parts[1], parts[2]);
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
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Chart Trendlines Dash Array Example

The following sample depicts a [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) showing a [`IgcFinancialPriceSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialPriceSeriesComponent) with a **QuarticFit** dashed trendline applied via the [`TrendLineDashArray`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialPriceSeriesComponent&member=trendLineDashArray) property:

```typescript
export class Stock2YearsItem {
    public constructor(init: Partial<Stock2YearsItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public open: number;
    public high: number;
    public low: number;
    public close: number;
    public volume: number;

}
export class Stock2Years extends Array<Stock2YearsItem> {
    public constructor(items: Array<Stock2YearsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new Stock2YearsItem(
                {
                    month: `2020`,
                    open: 41.1,
                    high: 41.6,
                    low: 41.1,
                    close: 41.4,
                    volume: 32610
                }),
                new Stock2YearsItem(
                {
                    month: `FEB`,
                    open: 41.4,
                    high: 41.7,
                    low: 41.2,
                    close: 41.4,
                    volume: 28666
                }),
                new Stock2YearsItem(
                {
                    month: `MAR`,
                    open: 41.3,
                    high: 41.3,
                    low: 40.7,
                    close: 41,
                    volume: 30139
                }),
                // ... 21 more items
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Chart Trendline Layer

The [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent) is a series type that is designed to display a single trendline type for a target series. The difference between this and the existing trendline features on the existing series types is that since the [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent) is a series type, you can add more than one of them to the [`Series`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=Series) collection of the chart to have multiple trendlines attached to the same series. You can also have the trendline appear in the legend, which was not possible previously.

## Trendline Layer Usage

The [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent) must be provided with a [`TargetSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=targetSeries) and a [`TrendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=trendLineType) in order to work properly. The different trendline types that are available are the same as the trendlines that are available on the series.

If you would like to show the [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent) in the Legend, you can do so by setting the [`UseLegend`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=useLegend) property to `true`.

## Styling the Trendline Layer

By default, the [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent) renders with the same color as its [`TargetSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=targetSeries) in a dashed line. This can be configured by using the various styling properties on the [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent).

To change the color of the trendline that is drawn, you can set its [`Brush`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=brush) property. Alternatively, you can also set the [`UseIndex`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=useIndex) property to `true`, which will pull from the chart's [`Brushes`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=brushes) palette based on the index in which the [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent) is placed in the chart's [`Series`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=Series) collection.

You can also modify the way that the [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent) appears by using its [`AppearanceMode`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=appearanceMode) and [`ShiftAmount`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=shiftAmount) properties. The [`ShiftAmount`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=shiftAmount) takes a value between -1.0 and 1.0 to determine how much of a "shift" to apply to the options that end in "Shift".

The following are the options for the [`AppearanceMode`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=appearanceMode) property:

- `Auto`: This will default to the DashPattern enumeration.
- `BrightnessShift`: The trendline will take the [`TargetSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=targetSeries) brush and modify its brightness based on the provided [`ShiftAmount`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=shiftAmount).
- `DashPattern`: The trendline will appear as a dashed line. The frequency of the dashes can be modified by using the [`DashArray`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=dashArray) property on the [`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent).
- `OpacityShift`: The trendline will take the [`TargetSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=targetSeries) brush and modify its opacity based on the provided [`ShiftAmount`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=shiftAmount).
- `SaturationShift`: The trendline will take the [`TargetSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=targetSeries) brush and modify its saturation based on the provided [`ShiftAmount`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent&member=shiftAmount).

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References
[`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
[`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent)
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
[`IgcTrendLineLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcTrendLineLayerComponent)
