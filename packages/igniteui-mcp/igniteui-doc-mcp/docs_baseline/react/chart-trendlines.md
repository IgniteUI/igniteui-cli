---
title: React Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' React Chart Trendlines
_keywords: React Charts, Trendlines, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Trendlines
_premium: true
---

# React Chart Trendlines

In Ignite UI for React charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html), and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLineType) property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness.

The trendlines also have the ability to have a dash array applied to them once enabled. This is done by setting the `TrendLineDashArray` property to an array of numbers. The numeric array describes the length of the dashes of the trendline.

## React Chart Trendlines Example

The following sample depicts a [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) showing the stock trend of Microsoft between 2013 and 2017 with a **QuinticFit** trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

```typescript
export default class StocksHistory {
  /** gets stock OHLC prices for multiple stocks */

  public static async getMultipleStocks(): Promise<any[]> {
    // getting prices of multiples stocks asynchronously
    const dataSources: any[] = [
      await this.getAmazonStock(),
      await this.getGoogleStock(),
      await this.getMicrosoftStock(),
      await this.getTeslaStock()
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartTrendlines extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { trendLineType: "QuinticFit", data:[] }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
                <label className="options-label">Trendlines:</label>
                <select value={this.state.trendLineType}
                    onChange={this.onTrendlineChanged}>
                    <option>CubicFit</option>
                    <option>LinearFit</option>
                    <option>QuinticFit</option>
                    <option>QuarticFit</option>
                    <option>ExponentialFit</option>
                    <option>PowerLawFit</option>
                    <option>LogarithmicFit</option>
                    <option>CumulativeAverage</option>
                    <option>ExponentialAverage</option>
                    <option>SimpleAverage</option>
                    <option>ModifiedAverage</option>
                    <option>WeightedAverage</option>
                    <option>None</option>
                </select>
            </div>

            <div className="container" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Bar"
                    thickness={2}
                    trendLineType={this.state.trendLineType}
                    trendLineThickness={2}
                    trendLinePeriod={10}
                    trendLineBrushes="rgba(0, 101, 209, 1)"
                    chartTitle="Microsoft Trend"
                    subtitle="Between 2013 and 2017"
                    dataSource={this.state.data}
                    zoomSliderType="None"
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false} />
            </div>
        </div>
        );
    }

    public onTrendlineChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({trendLineType: mode});
    }

    public initData() {
        StocksHistory.getMicrosoftStock().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartTrendlines/>);
```

<div class="divider--half"></div>

## React Chart Trendlines Dash Array Example

The following sample depicts a [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) showing a [`IgrFinancialPriceSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialpriceseries.html) with a **QuarticFit** dashed trendline applied via the [`trendLineDashArray`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialpriceseries.html#trendLineDashArray) property:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryTrendLineModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { Stock2YearsItem, Stock2Years } from './Stock2Years';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryTrendLineModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="true"
                    isHorizontalZoomEnabled="true">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.stock2Years}
                        labelLocation="OutsideBottom"
                        label="month"
                        interval="1"
                        labelExtent="30">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="Series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.stock2Years}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        volumeMemberPath="volume"
                        showDefaultTooltip="true"
                        trendLineType="QuarticFit"
                        trendLineBrush="dodgerblue"
                        trendLineDashArray="5, 5">
                    </IgrFinancialPriceSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _stock2Years: Stock2Years = null;
    public get stock2Years(): Stock2Years {
        if (this._stock2Years == null)
        {
            this._stock2Years = new Stock2Years();
        }
        return this._stock2Years;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Chart Trendline Layer

The [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html) is a series type that is designed to display a single trendline type for a target series. The difference between this and the existing trendline features on the existing series types is that since the [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html) is a series type, you can add more than one of them to the [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html) collection of the chart to have multiple trendlines attached to the same series. You can also have the trendline appear in the legend, which was not possible previously.

## Trendline Layer Usage

The [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html) must be provided with a [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html#targetSeries) and a [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html#trendLineType) in order to work properly. The different trendline types that are available are the same as the trendlines that are available on the series.

If you would like to show the [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html) in the Legend, you can do so by setting the `UseLegend` property to `true`.

## Styling the Trendline Layer

By default, the [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html) renders with the same color as its [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html#targetSeries) in a dashed line. This can be configured by using the various styling properties on the [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html).

To change the color of the trendline that is drawn, you can set its `Brush` property. Alternatively, you can also set the `UseIndex` property to `true`, which will pull from the chart's [`brushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#brushes) palette based on the index in which the [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html) is placed in the chart's [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html) collection.

You can also modify the way that the [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html) appears by using its `AppearanceMode` and `ShiftAmount` properties. The `ShiftAmount` takes a value between -1.0 and 1.0 to determine how much of a "shift" to apply to the options that end in "Shift".

The following are the options for the `AppearanceMode` property:

- `Auto`: This will default to the DashPattern enumeration.
- `BrightnessShift`: The trendline will take the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html#targetSeries) brush and modify its brightness based on the provided `ShiftAmount`.
- `DashPattern`: The trendline will appear as a dashed line. The frequency of the dashes can be modified by using the `DashArray` property on the [`IgrTrendLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html).
- `OpacityShift`: The trendline will take the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html#targetSeries) brush and modify its opacity based on the provided `ShiftAmount`.
- `SaturationShift`: The trendline will take the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtrendlinelayer.html#targetSeries) brush and modify its saturation based on the provided `ShiftAmount`.

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) components share the following API properties:

- [`trendLineBrushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLineBrushes)
- [`trendLinePeriod`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLinePeriod)
- [`trendLineThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLineThickness)
- [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#trendLineType)

In the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component, most types of series have the following API properties:

- [`trendLineBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#trendLineBrush)
- [`trendLineDashArray`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#trendLineDashArray)
- [`trendLinePeriod`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#trendLinePeriod)
- [`trendLineThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#trendLineThickness)
- [`trendLineType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#trendLineType)
