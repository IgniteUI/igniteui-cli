---
title: React Stock/Financial Charts | Ignite UI for React
_description: The Ignite UI for React Stock Chart is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Try for FREE.
_keywords: React Charts, Stock Chart, Financial Chart, Candlestick Chart, OHLC Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "FinancialChartType", "IndicatorTypes", "ZoomSliderType", "Series", "FinancialChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Financial / Stock Chart
_premium: true
---

# React Stock Chart

The Ignite UI for React Stock Chart, sometimes referred to as React Financial Chart or Candlestick Chart, is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Stock Chart shows stock prices for a ticker over time in a Time Series X-Axis. Also, this chart shows information for a company’s ticker data like Open Price, High Price, Low Price and Close Price (OHLC) for configurable period of time. The Stock Chart offers multiple ways in which the data can be visualized and interpreted, including display modes for price and volume and a host of Stock indicators.

## React Stock Chart Example

You can create Stock Chart using the [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) control by binding your data and optionally setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialcharttype.html#Line) value, as shown in the example below.

```typescript
export default class StocksHistory {
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartMultipleData extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { data: [] };
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container" style={{height: "calc(100% - 25px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={2}
                    chartTitle="Google vs Microsoft Changes"
                    subtitle="Between 2013 and 2017"
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed"
                    dataSource={this.state.data} />
                </div>
            </div>
        );
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartMultipleData/>);
```


<div class="divider--half"></div>

## Stock Chart Recommendations

### Are React Stock Charts right for your project?

The typical stock chart is represented with ticker data in a candlestick chart which is used for the technical analysis of the price ranges. A candlestick chart compares the high and low prices of a day to the open and close of the ticker symbol.

- The body of the candlestick chart shows the open and close trade values (O/C).
- The wicks of the candlestick chart show the high and low trade prices (H/L).
- The distance between the top and bottom of the ticker value is the day range of the ticker price.
- The candlestick chart ticker value is hollow when the asset closed higher than it opened.
- The candlestick chart ticker value is filled when the asset closed lower than it opened.
- A black or red candle represents a price with a lower closing price than the prior candle's close.
- A white or green candle represents a higher closing price than the prior candle's close.

The Stock Chart can be set to display one of the following:

- Candlestick Chart
- Bar Chart
- Column Chart
- Line Chart

As a Stock Chart is meant to allow the user to perform data analysis functions, it includes interactive elements such as:

- Time-based Filters
- Prices View
- Volume View
- Indicators View
- Trend Lines
- Navigation / Zoombar View

### Stock Chart Data Structure

- The data source must be an array or a list of data items.
- The data source must contain at least one data item.
- All data items must contain at least one date-time (or string) column that represents the date of the ticker data.
- All data items must contain 1 numeric column for Bar, Line, and Column chart.
- All data items must contain 4 numeric columns for Open, High, Low, Close (OHLC) for a Candlestick chart.
- All data items must contain 5 numeric columns for Open, High, Low, Close and Volume for a Candlestick chart.

## React Stock Chart with Multiple Series

```typescript
export default class StocksHistory {
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartMultipleData extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { data: [] };
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container" style={{height: "calc(100% - 25px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={2}
                    chartTitle="Google vs Microsoft Changes"
                    subtitle="Between 2013 and 2017"
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed"
                    dataSource={this.state.data} />
                </div>
            </div>
        );
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartMultipleData/>);
```


<div class="divider--half"></div>

## React Stock Chart

In this example the Stock Chart is representing the S\&P 500 over the course of a year; useful for investors and conducting technical analysis and forecasting future pricing/reports.

```typescript
export class StockIndexData {
    public static getData(): any[] {
        return [
{ 'Date': new Date(2020, 2, 3),   'Open': 3235, 'High': 3268, 'Low': 3235, 'Close': 3248, 'Volume': 3757910000 },
{ 'Date': new Date(2020, 2, 4),   'Open': 3280, 'High': 3306, 'Low': 3280, 'Close': 3297, 'Volume': 3995320000 },
{ 'Date': new Date(2020, 2, 5),   'Open': 3324, 'High': 3337, 'Low': 3313, 'Close': 3334, 'Volume': 4117730000 },
{ 'Date': new Date(2020, 2, 6),   'Open': 3344, 'High': 3347, 'Low': 3334, 'Close': 3345, 'Volume': 3868370000 },
{ 'Date': new Date(2020, 2, 7),   'Open': 3335, 'High': 3341, 'Low': 3322, 'Close': 3327, 'Volume': 3730650000 },
{ 'Date': new Date(2020, 2, 10),  'Open': 3318, 'High': 3352, 'Low': 3317, 'Close': 3352, 'Volume': 3450350000 },
{ 'Date': new Date(2020, 2, 11),  'Open': 3365, 'High': 3375, 'Low': 3352, 'Close': 3357, 'Volume': 3760550000 },
{ 'Date': new Date(2020, 2, 12),  'Open': 3370, 'High': 3381, 'Low': 3369, 'Close': 3379, 'Volume': 3926380000 },
{ 'Date': new Date(2020, 2, 13),  'Open': 3365, 'High': 3385, 'Low': 3360, 'Close': 3373, 'Volume': 3498240000 },
{ 'Date': new Date(2020, 2, 14),  'Open': 3378, 'High': 3380, 'Low': 3366, 'Close': 3380, 'Volume': 3398040000 },
{ 'Date': new Date(2020, 2, 18),  'Open': 3369, 'High': 3375, 'Low': 3355, 'Close': 3370, 'Volume': 3746720000 },
{ 'Date': new Date(2020, 2, 19),  'Open': 3380, 'High': 3393, 'Low': 3378, 'Close': 3386, 'Volume': 3600150000 },
{ 'Date': new Date(2020, 2, 20),  'Open': 3380, 'High': 3389, 'Low': 3341, 'Close': 3373, 'Volume': 4007320000 },
{ 'Date': new Date(2020, 2, 21),  'Open': 3360, 'High': 3360, 'Low': 3328, 'Close': 3337, 'Volume': 3899270000 },
{ 'Date': new Date(2020, 2, 24),  'Open': 3257, 'High': 3259, 'Low': 3214, 'Close': 3225, 'Volume': 4842960000 },
{ 'Date': new Date(2020, 2, 25),  'Open': 3238, 'High': 3246, 'Low': 3118, 'Close': 3128, 'Volume': 5591510000 },
{ 'Date': new Date(2020, 2, 26),  'Open': 3139, 'High': 3182, 'Low': 3108, 'Close': 3116, 'Volume': 5478110000 },
{ 'Date': new Date(2020, 2, 27),  'Open': 3062, 'High': 3097, 'Low': 2977, 'Close': 2978, 'Volume': 7058840000 },
{ 'Date': new Date(2020, 2, 28),  'Open': 2916, 'High': 2959, 'Low': 2855, 'Close': 2954, 'Volume': 8563850000 },
{ 'Date': new Date(2020, 3, 2),   'Open': 2974, 'High': 3090, 'Low': 2945, 'Close': 3090, 'Volume': 6376400000 },
{ 'Date': new Date(2020, 3, 3),   'Open': 3096, 'High': 3136, 'Low': 2976, 'Close': 3003, 'Volume': 6355940000 },
{ 'Date': new Date(2020, 3, 4),   'Open': 3045, 'High': 3130, 'Low': 3034, 'Close': 3130, 'Volume': 5035480000 },
{ 'Date': new Date(2020, 3, 5),   'Open': 3075, 'High': 3083, 'Low': 2999, 'Close': 3023, 'Volume': 5575550000 },
{ 'Date': new Date(2020, 3, 6),   'Open': 2954, 'High': 2985, 'Low': 2901, 'Close': 2972, 'Volume': 6552140000 },
{ 'Date': new Date(2020, 3, 9),   'Open': 2863, 'High': 2863, 'Low': 2734, 'Close': 2746, 'Volume': 8423050000 },
{ 'Date': new Date(2020, 3, 10),  'Open': 2813, 'High': 2882, 'Low': 2734, 'Close': 2882, 'Volume': 7635960000 },
{ 'Date': new Date(2020, 3, 11),  'Open': 2825, 'High': 2825, 'Low': 2707, 'Close': 2741, 'Volume': 7374110000 },
{ 'Date': new Date(2020, 3, 12),  'Open': 2630, 'High': 2660, 'Low': 2478, 'Close': 2480, 'Volume': 8829380000 },
{ 'Date': new Date(2020, 3, 13),  'Open': 2569, 'High': 2711, 'Low': 2492, 'Close': 2711, 'Volume': 8258670000 },
{ 'Date': new Date(2020, 3, 16),  'Open': 2508, 'High': 2562, 'Low': 2380, 'Close': 2386, 'Volume': 7781540000 },
{ 'Date': new Date(2020, 3, 17),  'Open': 2425, 'High': 2553, 'Low': 2367, 'Close': 2529, 'Volume': 8358500000 },
{ 'Date': new Date(2020, 3, 18),  'Open': 2436, 'High': 2453, 'Low': 2280, 'Close': 2398, 'Volume': 8755780000 },
{ 'Date': new Date(2020, 3, 19),  'Open': 2393, 'High': 2466, 'Low': 2319, 'Close': 2409, 'Volume': 7946710000 },
{ 'Date': new Date(2020, 3, 20),  'Open': 2431, 'High': 2453, 'Low': 2295, 'Close': 2304, 'Volume': 9044690000 },
{ 'Date': new Date(2020, 3, 23),  'Open': 2290, 'High': 2300, 'Low': 2191, 'Close': 2237, 'Volume': 7402180000 },
{ 'Date': new Date(2020, 3, 24),  'Open': 2344, 'High': 2449, 'Low': 2344, 'Close': 2447, 'Volume': 7547350000 },
{ 'Date': new Date(2020, 3, 25),  'Open': 2457, 'High': 2571, 'Low': 2407, 'Close': 2475, 'Volume': 8285670000 },
{ 'Date': new Date(2020, 3, 26),  'Open': 2501, 'High': 2637, 'Low': 2500, 'Close': 2630, 'Volume': 7753160000 },
{ 'Date': new Date(2020, 3, 27),  'Open': 2555, 'High': 2615, 'Low': 2520, 'Close': 2541, 'Volume': 6194330000 },
{ 'Date': new Date(2020, 3, 30),  'Open': 2558, 'High': 2631, 'Low': 2545, 'Close': 2626, 'Volume': 5746220000 },
{ 'Date': new Date(2020, 3, 31),  'Open': 2614, 'High': 2641, 'Low': 2571, 'Close': 2584, 'Volume': 6568290000 },
{ 'Date': new Date(2020, 4, 1),   'Open': 2498, 'High': 2522, 'Low': 2447, 'Close': 2470, 'Volume': 5947900000 },
{ 'Date': new Date(2020, 4, 2),   'Open': 2458, 'High': 2533, 'Low': 2455, 'Close': 2526, 'Volume': 6454990000 },
{ 'Date': new Date(2020, 4, 3),   'Open': 2514, 'High': 2538, 'Low': 2459, 'Close': 2488, 'Volume': 6087190000 },
{ 'Date': new Date(2020, 4, 6),   'Open': 2578, 'High': 2676, 'Low': 2574, 'Close': 2663, 'Volume': 6391860000 },
{ 'Date': new Date(2020, 4, 7),   'Open': 2738, 'High': 2756, 'Low': 2657, 'Close': 2659, 'Volume': 7040720000 },
{ 'Date': new Date(2020, 4, 8),   'Open': 2685, 'High': 2760, 'Low': 2663, 'Close': 2749, 'Volume': 5856370000 },
{ 'Date': new Date(2020, 4, 9),   'Open': 2776, 'High': 2818, 'Low': 2762, 'Close': 2789, 'Volume': 7880140000 },
{ 'Date': new Date(2020, 4, 13),  'Open': 2782, 'High': 2782, 'Low': 2721, 'Close': 2761, 'Volume': 5274310000 },
{ 'Date': new Date(2020, 4, 14),  'Open': 2805, 'High': 2851, 'Low': 2805, 'Close': 2846, 'Volume': 5567400000 },
{ 'Date': new Date(2020, 4, 15),  'Open': 2795, 'High': 2801, 'Low': 2761, 'Close': 2783, 'Volume': 5203390000 },
{ 'Date': new Date(2020, 4, 16),  'Open': 2799, 'High': 2806, 'Low': 2764, 'Close': 2799, 'Volume': 5179990000 },
{ 'Date': new Date(2020, 4, 17),  'Open': 2842, 'High': 2879, 'Low': 2830, 'Close': 2874, 'Volume': 5792140000 },
{ 'Date': new Date(2020, 4, 20),  'Open': 2845, 'High': 2868, 'Low': 2820, 'Close': 2823, 'Volume': 5220160000 },
{ 'Date': new Date(2020, 4, 21),  'Open': 2784, 'High': 2785, 'Low': 2727, 'Close': 2736, 'Volume': 5075830000 },
{ 'Date': new Date(2020, 4, 22),  'Open': 2787, 'High': 2815, 'Low': 2775, 'Close': 2799, 'Volume': 5049660000 },
{ 'Date': new Date(2020, 4, 23),  'Open': 2810, 'High': 2844, 'Low': 2794, 'Close': 2797, 'Volume': 5756520000 },
{ 'Date': new Date(2020, 4, 24),  'Open': 2812, 'High': 2842, 'Low': 2791, 'Close': 2836, 'Volume': 5374480000 },
{ 'Date': new Date(2020, 4, 27),  'Open': 2854, 'High': 2887, 'Low': 2852, 'Close': 2878, 'Volume': 5194260000 },
{ 'Date': new Date(2020, 4, 28),  'Open': 2909, 'High': 2921, 'Low': 2860, 'Close': 2863, 'Volume': 5672880000 },
{ 'Date': new Date(2020, 4, 29),  'Open': 2918, 'High': 2954, 'Low': 2912, 'Close': 2939, 'Volume': 6620140000 },
{ 'Date': new Date(2020, 4, 30),  'Open': 2930, 'High': 2930, 'Low': 2892, 'Close': 2912, 'Volume': 6523120000 },
{ 'Date': new Date(2020, 5, 1),   'Open': 2869, 'High': 2869, 'Low': 2821, 'Close': 2830, 'Volume': 4753160000 },
{ 'Date': new Date(2020, 5, 4),   'Open': 2815, 'High': 2844, 'Low': 2797, 'Close': 2842, 'Volume': 4723140000 },
{ 'Date': new Date(2020, 5, 5),   'Open': 2868, 'High': 2898, 'Low': 2863, 'Close': 2868, 'Volume': 5129590000 },
{ 'Date': new Date(2020, 5, 6),   'Open': 2883, 'High': 2891, 'Low': 2847, 'Close': 2848, 'Volume': 4861920000 },
{ 'Date': new Date(2020, 5, 7),   'Open': 2878, 'High': 2901, 'Low': 2876, 'Close': 2881, 'Volume': 5164640000 },
{ 'Date': new Date(2020, 5, 8),   'Open': 2908, 'High': 2932, 'Low': 2902, 'Close': 2929, 'Volume': 4857160000 },
{ 'Date': new Date(2020, 5, 11),  'Open': 2915, 'High': 2944, 'Low': 2903, 'Close': 2930, 'Volume': 4807320000 },
{ 'Date': new Date(2020, 5, 12),  'Open': 2939, 'High': 2945, 'Low': 2869, 'Close': 2870, 'Volume': 5107710000 },
{ 'Date': new Date(2020, 5, 13),  'Open': 2865, 'High': 2874, 'Low': 2793, 'Close': 2820, 'Volume': 6143130000 },
{ 'Date': new Date(2020, 5, 14),  'Open': 2794, 'High': 2852, 'Low': 2766, 'Close': 2852, 'Volume': 5641920000 },
{ 'Date': new Date(2020, 5, 15),  'Open': 2829, 'High': 2865, 'Low': 2816, 'Close': 2863, 'Volume': 5477040000 },
{ 'Date': new Date(2020, 5, 18),  'Open': 2913, 'High': 2968, 'Low': 2913, 'Close': 2953, 'Volume': 6364290000 },
{ 'Date': new Date(2020, 5, 19),  'Open': 2948, 'High': 2964, 'Low': 2922, 'Close': 2922, 'Volume': 4969330000 },
{ 'Date': new Date(2020, 5, 20),  'Open': 2953, 'High': 2980, 'Low': 2953, 'Close': 2971, 'Volume': 4992970000 },
{ 'Date': new Date(2020, 5, 21),  'Open': 2969, 'High': 2978, 'Low': 2938, 'Close': 2948, 'Volume': 4966940000 },
{ 'Date': new Date(2020, 5, 22),  'Open': 2948, 'High': 2956, 'Low': 2933, 'Close': 2955, 'Volume': 3952800000 },
{ 'Date': new Date(2020, 5, 26),  'Open': 3004, 'High': 3021, 'Low': 2988, 'Close': 2991, 'Volume': 5837060000 },
{ 'Date': new Date(2020, 5, 27),  'Open': 3015, 'High': 3036, 'Low': 2969, 'Close': 3036, 'Volume': 6371230000 },
{ 'Date': new Date(2020, 5, 28),  'Open': 3046, 'High': 3068, 'Low': 3023, 'Close': 3029, 'Volume': 5402670000 },
{ 'Date': new Date(2020, 5, 29),  'Open': 3025, 'High': 3049, 'Low': 2998, 'Close': 3044, 'Volume': 7275080000 },
{ 'Date': new Date(2020, 6, 1),   'Open': 3038, 'High': 3062, 'Low': 3031, 'Close': 3055, 'Volume': 4673410000 },
{ 'Date': new Date(2020, 6, 2),   'Open': 3064, 'High': 3081, 'Low': 3051, 'Close': 3080, 'Volume': 5187230000 },
{ 'Date': new Date(2020, 6, 3),   'Open': 3098, 'High': 3130, 'Low': 3098, 'Close': 3122, 'Volume': 5989560000 },
{ 'Date': new Date(2020, 6, 4),   'Open': 3111, 'High': 3128, 'Low': 3090, 'Close': 3112, 'Volume': 6428130000 },
{ 'Date': new Date(2020, 6, 5),   'Open': 3163, 'High': 3211, 'Low': 3163, 'Close': 3193, 'Volume': 8617590000 },
{ 'Date': new Date(2020, 6, 8),   'Open': 3199, 'High': 3233, 'Low': 3196, 'Close': 3232, 'Volume': 8437380000 },
{ 'Date': new Date(2020, 6, 9),   'Open': 3213, 'High': 3222, 'Low': 3193, 'Close': 3207, 'Volume': 6382620000 },
{ 'Date': new Date(2020, 6, 10),  'Open': 3213, 'High': 3223, 'Low': 3181, 'Close': 3190, 'Volume': 6570840000 },
{ 'Date': new Date(2020, 6, 11),  'Open': 3123, 'High': 3123, 'Low': 2999, 'Close': 3002, 'Volume': 7018890000 },
{ 'Date': new Date(2020, 6, 12),  'Open': 3071, 'High': 3088, 'Low': 2984, 'Close': 3041, 'Volume': 5832250000 },
{ 'Date': new Date(2020, 6, 15),  'Open': 2993, 'High': 3079, 'Low': 2965, 'Close': 3066, 'Volume': 5740660000 },
{ 'Date': new Date(2020, 6, 16),  'Open': 3131, 'High': 3153, 'Low': 3076, 'Close': 3124, 'Volume': 5829240000 },
{ 'Date': new Date(2020, 6, 17),  'Open': 3136, 'High': 3141, 'Low': 3108, 'Close': 3113, 'Volume': 4549390000 },
{ 'Date': new Date(2020, 6, 18),  'Open': 3101, 'High': 3120, 'Low': 3093, 'Close': 3115, 'Volume': 4429030000 },
{ 'Date': new Date(2020, 6, 19),  'Open': 3140, 'High': 3155, 'Low': 3083, 'Close': 3097, 'Volume': 8327780000 },
{ 'Date': new Date(2020, 6, 22),  'Open': 3094, 'High': 3120, 'Low': 3079, 'Close': 3117, 'Volume': 4665380000 },
{ 'Date': new Date(2020, 6, 23),  'Open': 3138, 'High': 3154, 'Low': 3127, 'Close': 3131, 'Volume': 4704830000 },
{ 'Date': new Date(2020, 6, 24),  'Open': 3114, 'High': 3115, 'Low': 3032, 'Close': 3050, 'Volume': 5587200000 },
{ 'Date': new Date(2020, 6, 25),  'Open': 3046, 'High': 3086, 'Low': 3024, 'Close': 3083, 'Volume': 4815420000 },
{ 'Date': new Date(2020, 6, 26),  'Open': 3073, 'High': 3073, 'Low': 3004, 'Close': 3009, 'Volume': 8098120000 },
{ 'Date': new Date(2020, 6, 29),  'Open': 3018, 'High': 3053, 'Low': 2999, 'Close': 3053, 'Volume': 4462770000 },
{ 'Date': new Date(2020, 6, 30),  'Open': 3050, 'High': 3111, 'Low': 3047, 'Close': 3100, 'Volume': 4696280000 },
{ 'Date': new Date(2020, 7, 1),   'Open': 3105, 'High': 3128, 'Low': 3101, 'Close': 3115, 'Volume': 4443130000 },
{ 'Date': new Date(2020, 7, 2),   'Open': 3143, 'High': 3165, 'Low': 3124, 'Close': 3130, 'Volume': 4190830000 },
{ 'Date': new Date(2020, 7, 6),   'Open': 3155, 'High': 3182, 'Low': 3155, 'Close': 3179, 'Volume': 4736450000 },
{ 'Date': new Date(2020, 7, 7),   'Open': 3166, 'High': 3184, 'Low': 3142, 'Close': 3145, 'Volume': 4563700000 },
{ 'Date': new Date(2020, 7, 8),   'Open': 3153, 'High': 3171, 'Low': 3136, 'Close': 3169, 'Volume': 4927700000 },
{ 'Date': new Date(2020, 7, 9),   'Open': 3176, 'High': 3179, 'Low': 3115, 'Close': 3152, 'Volume': 4829020000 },
{ 'Date': new Date(2020, 7, 10),  'Open': 3152, 'High': 3186, 'Low': 3136, 'Close': 3185, 'Volume': 4515340000 },
{ 'Date': new Date(2020, 7, 13),  'Open': 3205, 'High': 3235, 'Low': 3149, 'Close': 3155, 'Volume': 4890780000 },
{ 'Date': new Date(2020, 7, 14),  'Open': 3141, 'High': 3200, 'Low': 3127, 'Close': 3197, 'Volume': 4476170000 },
{ 'Date': new Date(2020, 7, 15),  'Open': 3225, 'High': 3238, 'Low': 3200, 'Close': 3226, 'Volume': 4669760000 },
{ 'Date': new Date(2020, 7, 16),  'Open': 3208, 'High': 3220, 'Low': 3198, 'Close': 3215, 'Volume': 3961230000 },
{ 'Date': new Date(2020, 7, 17),  'Open': 3224, 'High': 3233, 'Low': 3205, 'Close': 3224, 'Volume': 3993830000 },
{ 'Date': new Date(2020, 7, 20),  'Open': 3224, 'High': 3258, 'Low': 3215, 'Close': 3251, 'Volume': 3971200000 },
{ 'Date': new Date(2020, 7, 21),  'Open': 3268, 'High': 3277, 'Low': 3247, 'Close': 3257, 'Volume': 4547960000 },
{ 'Date': new Date(2020, 7, 22),  'Open': 3254, 'High': 3279, 'Low': 3253, 'Close': 3276, 'Volume': 4255190000 },
{ 'Date': new Date(2020, 7, 23),  'Open': 3271, 'High': 3279, 'Low': 3222, 'Close': 3235, 'Volume': 4290460000 },
{ 'Date': new Date(2020, 7, 24),  'Open': 3218, 'High': 3227, 'Low': 3200, 'Close': 3215, 'Volume': 3894900000 },
{ 'Date': new Date(2020, 7, 27),  'Open': 3219, 'High': 3241, 'Low': 3214, 'Close': 3239, 'Volume': 3963910000 },
{ 'Date': new Date(2020, 7, 28),  'Open': 3234, 'High': 3243, 'Low': 3216, 'Close': 3218, 'Volume': 4027890000 },
{ 'Date': new Date(2020, 7, 29),  'Open': 3227, 'High': 3264, 'Low': 3227, 'Close': 3258, 'Volume': 4676300000 },
{ 'Date': new Date(2020, 7, 30),  'Open': 3231, 'High': 3250, 'Low': 3204, 'Close': 3246, 'Volume': 4254010000 },
{ 'Date': new Date(2020, 7, 31),  'Open': 3270, 'High': 3272, 'Low': 3220, 'Close': 3271, 'Volume': 5117260000 },
{ 'Date': new Date(2020, 8, 3),   'Open': 3288, 'High': 3302, 'Low': 3284, 'Close': 3294, 'Volume': 4643640000 },
{ 'Date': new Date(2020, 8, 4),   'Open': 3289, 'High': 3306, 'Low': 3286, 'Close': 3306, 'Volume': 4621670000 },
{ 'Date': new Date(2020, 8, 5),   'Open': 3317, 'High': 3330, 'Low': 3317, 'Close': 3327, 'Volume': 4732220000 },
{ 'Date': new Date(2020, 8, 6),   'Open': 3323, 'High': 3351, 'Low': 3318, 'Close': 3349, 'Volume': 4267490000 },
{ 'Date': new Date(2020, 8, 7),   'Open': 3340, 'High': 3352, 'Low': 3328, 'Close': 3351, 'Volume': 4104860000 },
{ 'Date': new Date(2020, 8, 10),  'Open': 3356, 'High': 3363, 'Low': 3335, 'Close': 3360, 'Volume': 4318570000 },
{ 'Date': new Date(2020, 8, 11),  'Open': 3370, 'High': 3381, 'Low': 3326, 'Close': 3333, 'Volume': 5087650000 },
{ 'Date': new Date(2020, 8, 12),  'Open': 3355, 'High': 3387, 'Low': 3355, 'Close': 3380, 'Volume': 3768560000 },
{ 'Date': new Date(2020, 8, 13),  'Open': 3372, 'High': 3387, 'Low': 3363, 'Close': 3373, 'Volume': 3648810000 },
{ 'Date': new Date(2020, 8, 14),  'Open': 3368, 'High': 3378, 'Low': 3361, 'Close': 3372, 'Volume': 3193400000 },
{ 'Date': new Date(2020, 8, 17),  'Open': 3380, 'High': 3387, 'Low': 3379, 'Close': 3381, 'Volume': 3671290000 },
{ 'Date': new Date(2020, 8, 18),  'Open': 3387, 'High': 3395, 'Low': 3370, 'Close': 3389, 'Volume': 3881310000 },
{ 'Date': new Date(2020, 8, 19),  'Open': 3392, 'High': 3399, 'Low': 3369, 'Close': 3374, 'Volume': 3884480000 },
{ 'Date': new Date(2020, 8, 20),  'Open': 3360, 'High': 3390, 'Low': 3354, 'Close': 3385, 'Volume': 3642850000 },
{ 'Date': new Date(2020, 8, 21),  'Open': 3386, 'High': 3399, 'Low': 3379, 'Close': 3397, 'Volume': 3705420000 },
{ 'Date': new Date(2020, 8, 24),  'Open': 3418, 'High': 3432, 'Low': 3413, 'Close': 3431, 'Volume': 3728690000 },
{ 'Date': new Date(2020, 8, 25),  'Open': 3435, 'High': 3444, 'Low': 3425, 'Close': 3443, 'Volume': 3619300000 },
{ 'Date': new Date(2020, 8, 26),  'Open': 3449, 'High': 3481, 'Low': 3444, 'Close': 3478, 'Volume': 3754360000 },
{ 'Date': new Date(2020, 8, 27),  'Open': 3485, 'High': 3501, 'Low': 3468, 'Close': 3484, 'Volume': 3929560000 },
{ 'Date': new Date(2020, 8, 28),  'Open': 3494, 'High': 3509, 'Low': 3484, 'Close': 3508, 'Volume': 3855880000 },
{ 'Date': new Date(2020, 8, 31),  'Open': 3509, 'High': 3514, 'Low': 3493, 'Close': 3500, 'Volume': 4342290000 },
{ 'Date': new Date(2020, 9, 1),   'Open': 3507, 'High': 3528, 'Low': 3494, 'Close': 3526, 'Volume': 4083110000 },
{ 'Date': new Date(2020, 9, 2),   'Open': 3543, 'High': 3588, 'Low': 3535, 'Close': 3580, 'Volume': 4285190000 },
{ 'Date': new Date(2020, 9, 3),   'Open': 3564, 'High': 3564, 'Low': 3427, 'Close': 3455, 'Volume': 4898680000 },
{ 'Date': new Date(2020, 9, 4),   'Open': 3453, 'High': 3479, 'Low': 3349, 'Close': 3426, 'Volume': 4431440000 },
{ 'Date': new Date(2020, 9, 8),   'Open': 3371, 'High': 3379, 'Low': 3329, 'Close': 3331, 'Volume': 4665600000 },
{ 'Date': new Date(2020, 9, 9),   'Open': 3369, 'High': 3424, 'Low': 3366, 'Close': 3398, 'Volume': 3920830000 },
{ 'Date': new Date(2020, 9, 10),  'Open': 3412, 'High': 3425, 'Low': 3329, 'Close': 3339, 'Volume': 4192250000 },
{ 'Date': new Date(2020, 9, 11),  'Open': 3352, 'High': 3368, 'Low': 3310, 'Close': 3340, 'Volume': 3704450000 },
{ 'Date': new Date(2020, 9, 14),  'Open': 3363, 'High': 3402, 'Low': 3363, 'Close': 3383, 'Volume': 3832130000 },
{ 'Date': new Date(2020, 9, 15),  'Open': 3407, 'High': 3419, 'Low': 3389, 'Close': 3401, 'Volume': 4051460000 },
{ 'Date': new Date(2020, 9, 16),  'Open': 3411, 'High': 3428, 'Low': 3384, 'Close': 3385, 'Volume': 4710030000 },
{ 'Date': new Date(2020, 9, 17),  'Open': 3346, 'High': 3375, 'Low': 3328, 'Close': 3357, 'Volume': 4371940000 },
{ 'Date': new Date(2020, 9, 18),  'Open': 3357, 'High': 3362, 'Low': 3292, 'Close': 3319, 'Volume': 7068700000 },
{ 'Date': new Date(2020, 9, 21),  'Open': 3285, 'High': 3285, 'Low': 3229, 'Close': 3281, 'Volume': 4828350000 },
{ 'Date': new Date(2020, 9, 22),  'Open': 3295, 'High': 3320, 'Low': 3270, 'Close': 3315, 'Volume': 3963300000 },
{ 'Date': new Date(2020, 9, 23),  'Open': 3320, 'High': 3323, 'Low': 3232, 'Close': 3236, 'Volume': 4364500000 },
{ 'Date': new Date(2020, 9, 24),  'Open': 3226, 'High': 3278, 'Low': 3209, 'Close': 3246, 'Volume': 4599470000 },
{ 'Date': new Date(2020, 9, 25),  'Open': 3236, 'High': 3306, 'Low': 3228, 'Close': 3298, 'Volume': 3792220000 },
{ 'Date': new Date(2020, 9, 28),  'Open': 3333, 'High': 3360, 'Low': 3332, 'Close': 3351, 'Volume': 3946060000 },
{ 'Date': new Date(2020, 9, 29),  'Open': 3350, 'High': 3357, 'Low': 3327, 'Close': 3335, 'Volume': 3651880000 },
{ 'Date': new Date(2020, 9, 30),  'Open': 3341, 'High': 3393, 'Low': 3340, 'Close': 3363, 'Volume': 4722530000 },
{ 'Date': new Date(2020, 10, 1),  'Open': 3385, 'High': 3397, 'Low': 3361, 'Close': 3380, 'Volume': 4070530000 },
{ 'Date': new Date(2020, 10, 2),  'Open': 3338, 'High': 3369, 'Low': 3323, 'Close': 3348, 'Volume': 3961550000 },
{ 'Date': new Date(2020, 10, 5),  'Open': 3367, 'High': 3409, 'Low': 3367, 'Close': 3408, 'Volume': 3686920000 },
{ 'Date': new Date(2020, 10, 6),  'Open': 3408, 'High': 3431, 'Low': 3354, 'Close': 3360, 'Volume': 4443380000 },
{ 'Date': new Date(2020, 10, 7),  'Open': 3384, 'High': 3426, 'Low': 3384, 'Close': 3419, 'Volume': 3807830000 },
{ 'Date': new Date(2020, 10, 8),  'Open': 3434, 'High': 3447, 'Low': 3428, 'Close': 3446, 'Volume': 3856190000 },
{ 'Date': new Date(2020, 10, 9),  'Open': 3459, 'High': 3482, 'Low': 3458, 'Close': 3477, 'Volume': 3939060000 },
{ 'Date': new Date(2020, 10, 12), 'Open': 3500, 'High': 3549, 'Low': 3499, 'Close': 3534, 'Volume': 3428970000 },
{ 'Date': new Date(2020, 10, 13), 'Open': 3534, 'High': 3534, 'Low': 3500, 'Close': 3511, 'Volume': 3605150000 },
{ 'Date': new Date(2020, 10, 14), 'Open': 3515, 'High': 3527, 'Low': 3480, 'Close': 3488, 'Volume': 3840630000 },
{ 'Date': new Date(2020, 10, 15), 'Open': 3453, 'High': 3489, 'Low': 3440, 'Close': 3483, 'Volume': 3717640000 },
{ 'Date': new Date(2020, 10, 16), 'Open': 3493, 'High': 3515, 'Low': 3480, 'Close': 3483, 'Volume': 4675890000 },
{ 'Date': new Date(2020, 10, 19), 'Open': 3493, 'High': 3502, 'Low': 3419, 'Close': 3426, 'Volume': 4086200000 },
{ 'Date': new Date(2020, 10, 20), 'Open': 3439, 'High': 3476, 'Low': 3435, 'Close': 3443, 'Volume': 3901260000 },
{ 'Date': new Date(2020, 10, 21), 'Open': 3439, 'High': 3464, 'Low': 3433, 'Close': 3435, 'Volume': 4097750000 },
{ 'Date': new Date(2020, 10, 22), 'Open': 3438, 'High': 3460, 'Low': 3415, 'Close': 3453, 'Volume': 4163630000 },
{ 'Date': new Date(2020, 10, 23), 'Open': 3464, 'High': 3466, 'Low': 3440, 'Close': 3465, 'Volume': 3646570000 },
{ 'Date': new Date(2020, 10, 26), 'Open': 3441, 'High': 3441, 'Low': 3364, 'Close': 3400, 'Volume': 3988080000 },
{ 'Date': new Date(2020, 10, 27), 'Open': 3403, 'High': 3409, 'Low': 3388, 'Close': 3390, 'Volume': 3946990000 },
{ 'Date': new Date(2020, 10, 28), 'Open': 3342, 'High': 3342, 'Low': 3268, 'Close': 3271, 'Volume': 5129860000 },
{ 'Date': new Date(2020, 10, 29), 'Open': 3277, 'High': 3341, 'Low': 3259, 'Close': 3310, 'Volume': 4903070000 },
{ 'Date': new Date(2020, 10, 30), 'Open': 3293, 'High': 3304, 'Low': 3233, 'Close': 3269, 'Volume': 4840450000 },
{ 'Date': new Date(2020, 11, 2),  'Open': 3296, 'High': 3330, 'Low': 3279, 'Close': 3310, 'Volume': 4310590000 },
{ 'Date': new Date(2020, 11, 3),  'Open': 3336, 'High': 3389, 'Low': 3336, 'Close': 3369, 'Volume': 4220070000 },
{ 'Date': new Date(2020, 11, 4),  'Open': 3406, 'High': 3486, 'Low': 3405, 'Close': 3443, 'Volume': 4783040000 },
{ 'Date': new Date(2020, 11, 5),  'Open': 3485, 'High': 3529, 'Low': 3485, 'Close': 3510, 'Volume': 4841190000 },
{ 'Date': new Date(2020, 11, 6),  'Open': 3508, 'High': 3521, 'Low': 3484, 'Close': 3509, 'Volume': 4833950000 },
{ 'Date': new Date(2020, 11, 9),  'Open': 3583, 'High': 3645, 'Low': 3547, 'Close': 3550, 'Volume': 8556610000 },
{ 'Date': new Date(2020, 11, 10), 'Open': 3543, 'High': 3557, 'Low': 3511, 'Close': 3545, 'Volume': 6024230000 },
{ 'Date': new Date(2020, 11, 11), 'Open': 3563, 'High': 3581, 'Low': 3557, 'Close': 3572, 'Volume': 4609970000 },
{ 'Date': new Date(2020, 11, 12), 'Open': 3562, 'High': 3569, 'Low': 3518, 'Close': 3537, 'Volume': 4890120000 },
{ 'Date': new Date(2020, 11, 13), 'Open': 3552, 'High': 3593, 'Low': 3552, 'Close': 3585, 'Volume': 4709670000 },
{ 'Date': new Date(2020, 11, 16), 'Open': 3600, 'High': 3628, 'Low': 3600, 'Close': 3626, 'Volume': 5281980000 },
{ 'Date': new Date(2020, 11, 17), 'Open': 3610, 'High': 3623, 'Low': 3588, 'Close': 3609, 'Volume': 4799570000 },
{ 'Date': new Date(2020, 11, 18), 'Open': 3612, 'High': 3619, 'Low': 3567, 'Close': 3567, 'Volume': 5274450000 },
{ 'Date': new Date(2020, 11, 19), 'Open': 3559, 'High': 3585, 'Low': 3543, 'Close': 3581, 'Volume': 4347200000 },
{ 'Date': new Date(2020, 11, 20), 'Open': 3579, 'High': 3581, 'Low': 3556, 'Close': 3557, 'Volume': 4218970000 },
{ 'Date': new Date(2020, 11, 23), 'Open': 3566, 'High': 3589, 'Low': 3552, 'Close': 3577, 'Volume': 5036290000 },
{ 'Date': new Date(2020, 11, 24), 'Open': 3594, 'High': 3642, 'Low': 3594, 'Close': 3635, 'Volume': 6267570000 },
{ 'Date': new Date(2020, 11, 25), 'Open': 3635, 'High': 3635, 'Low': 3617, 'Close': 3629, 'Volume': 4902560000 },
{ 'Date': new Date(2020, 11, 27), 'Open': 3638, 'High': 3644, 'Low': 3629, 'Close': 3638, 'Volume': 2778450000 },
{ 'Date': new Date(2020, 11, 30), 'Open': 3634, 'High': 3634, 'Low': 3594, 'Close': 3621, 'Volume': 6291400000 },
{ 'Date': new Date(2020, 12, 1),  'Open': 3645, 'High': 3678, 'Low': 3645, 'Close': 3662, 'Volume': 5403660000 },
{ 'Date': new Date(2020, 12, 2),  'Open': 3653, 'High': 3670, 'Low': 3644, 'Close': 3669, 'Volume': 5029620000 },
{ 'Date': new Date(2020, 12, 3),  'Open': 3668, 'High': 3682, 'Low': 3657, 'Close': 3666, 'Volume': 5091760000 },
{ 'Date': new Date(2020, 12, 4),  'Open': 3670, 'High': 3699, 'Low': 3670, 'Close': 3699, 'Volume': 5086370000 },
{ 'Date': new Date(2020, 12, 7),  'Open': 3694, 'High': 3697, 'Low': 3678, 'Close': 3691, 'Volume': 4788560000 },
{ 'Date': new Date(2020, 12, 8),  'Open': 3683, 'High': 3708, 'Low': 3678, 'Close': 3702, 'Volume': 4549670000 },
{ 'Date': new Date(2020, 12, 9),  'Open': 3705, 'High': 3712, 'Low': 3660, 'Close': 3672, 'Volume': 5209940000 },
{ 'Date': new Date(2020, 12, 10), 'Open': 3659, 'High': 3678, 'Low': 3645, 'Close': 3668, 'Volume': 4618240000 },
{ 'Date': new Date(2020, 12, 11), 'Open': 3656, 'High': 3665, 'Low': 3633, 'Close': 3663, 'Volume': 4367150000 },
{ 'Date': new Date(2020, 12, 14), 'Open': 3675, 'High': 3697, 'Low': 3645, 'Close': 3647, 'Volume': 4594920000 },
{ 'Date': new Date(2020, 12, 15), 'Open': 3666, 'High': 3695, 'Low': 3659, 'Close': 3694, 'Volume': 4360280000 },
{ 'Date': new Date(2020, 12, 16), 'Open': 3696, 'High': 3711, 'Low': 3688, 'Close': 3701, 'Volume': 4056950000 },
{ 'Date': new Date(2020, 12, 17), 'Open': 3713, 'High': 3725, 'Low': 3710, 'Close': 3722, 'Volume': 4184930000 },
{ 'Date': new Date(2020, 12, 18), 'Open': 3722, 'High': 3726, 'Low': 3685, 'Close': 3709, 'Volume': 7068340000 },
{ 'Date': new Date(2020, 12, 21), 'Open': 3684, 'High': 3702, 'Low': 3636, 'Close': 3694, 'Volume': 4732160000 },
{ 'Date': new Date(2020, 12, 22), 'Open': 3698, 'High': 3698, 'Low': 3676, 'Close': 3687, 'Volume': 4023940000 },
{ 'Date': new Date(2020, 12, 23), 'Open': 3693, 'High': 3711, 'Low': 3689, 'Close': 3690, 'Volume': 3772630000 },
{ 'Date': new Date(2020, 12, 24), 'Open': 3694, 'High': 3703, 'Low': 3689, 'Close': 3703, 'Volume': 1885090000 },
{ 'Date': new Date(2020, 12, 28), 'Open': 3723, 'High': 3740, 'Low': 3723, 'Close': 3735, 'Volume': 3527460000 },
{ 'Date': new Date(2020, 12, 29), 'Open': 3750, 'High': 3756, 'Low': 3723, 'Close': 3727, 'Volume': 3387030000 },
{ 'Date': new Date(2020, 12, 30), 'Open': 3736, 'High': 3744, 'Low': 3730, 'Close': 3732, 'Volume': 3145200000 },
{ 'Date': new Date(2020, 12, 31), 'Open': 3733, 'High': 3760, 'Low': 3726, 'Close': 3756, 'Volume': 3172510000 },
{ 'Date': new Date(2021, 1, 4),   'Open': 3764, 'High': 3769, 'Low': 3662, 'Close': 3700, 'Volume': 5006680000 },
{ 'Date': new Date(2021, 1, 5),   'Open': 3698, 'High': 3737, 'Low': 3695, 'Close': 3726, 'Volume': 4582620000 },
{ 'Date': new Date(2021, 1, 6),   'Open': 3712, 'High': 3783, 'Low': 3705, 'Close': 3748, 'Volume': 6049970000 },
{ 'Date': new Date(2021, 1, 7),   'Open': 3764, 'High': 3811, 'Low': 3764, 'Close': 3803, 'Volume': 5080870000 },
{ 'Date': new Date(2021, 1, 8),   'Open': 3815, 'High': 3826, 'Low': 3783, 'Close': 3824, 'Volume': 4764180000 },
{ 'Date': new Date(2021, 1, 11),  'Open': 3803, 'High': 3817, 'Low': 3789, 'Close': 3799, 'Volume': 4450500000 },
{ 'Date': new Date(2021, 1, 12),  'Open': 3801, 'High': 3810, 'Low': 3776, 'Close': 3801, 'Volume': 4977210000 },
{ 'Date': new Date(2021, 1, 13),  'Open': 3802, 'High': 3820, 'Low': 3791, 'Close': 3809, 'Volume': 4590420000 },
{ 'Date': new Date(2021, 1, 14),  'Open': 3814, 'High': 3823, 'Low': 3792, 'Close': 3795, 'Volume': 5180140000 },
{ 'Date': new Date(2021, 1, 15),  'Open': 3788, 'High': 3788, 'Low': 3749, 'Close': 3768, 'Volume': 5353060000 },
{ 'Date': new Date(2021, 1, 19),  'Open': 3781, 'High': 3804, 'Low': 3780, 'Close': 3798, 'Volume': 4982940000 },
{ 'Date': new Date(2021, 1, 20),  'Open': 3816, 'High': 3859, 'Low': 3816, 'Close': 3851, 'Volume': 4551790000 },
{ 'Date': new Date(2021, 1, 21),  'Open': 3857, 'High': 3861, 'Low': 3845, 'Close': 3853, 'Volume': 4484460000 },
{ 'Date': new Date(2021, 1, 22),  'Open': 3844, 'High': 3852, 'Low': 3830, 'Close': 3841, 'Volume': 5080430000 },
{ 'Date': new Date(2021, 1, 25),  'Open': 3851, 'High': 3859, 'Low': 3797, 'Close': 3855, 'Volume': 6955860000 },
{ 'Date': new Date(2021, 1, 26),  'Open': 3862, 'High': 3870, 'Low': 3847, 'Close': 3849, 'Volume': 6029090000 },
{ 'Date': new Date(2021, 1, 27),  'Open': 3836, 'High': 3836, 'Low': 3732, 'Close': 3750, 'Volume': 9878040000 },
{ 'Date': new Date(2021, 1, 28),  'Open': 3755, 'High': 3830, 'Low': 3755, 'Close': 3787, 'Volume': 6937960000 },
{ 'Date': new Date(2021, 1, 29),  'Open': 3778, 'High': 3778, 'Low': 3694, 'Close': 3714, 'Volume': 6612570000 }
        ];
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StockIndexData } from './StockIndexData';

IgrFinancialChartModule.register();

export default class FinancialChartStockIndexChart extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = StockIndexData.getData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="container" >
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    isToolbarVisible={false}
                    chartType="Candle"
                    chartTitle="S&P 500"
                    titleAlignment="Left"
                    titleLeftMargin="25"
                    titleTopMargin="10"
                    titleBottomMargin="10"
                    subtitle="CME - CME Delayed Price, Currency in USD"
                    subtitleAlignment="Left"
                    subtitleLeftMargin="25"
                    subtitleTopMargin="5"
                    subtitleBottomMargin="10"
                    yAxisLabelLocation="OutsideLeft"
                    yAxisMode="Numeric"
                    yAxisTitle="Financial Prices"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    zoomSliderType="None"
                    dataSource={this.data}/>
            </div>
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartStockIndexChart/>);
```


<div class="divider--half"></div>

## React Stock Chart Styling

If you need a Stock Chart with more features such as composite other series, you can configure the thickness, outlines, brushes, negative outlines, negative brushes as demonstrated below. In this example, the stock chart is comparing revenue between Amazon, Microsoft and Tesla.

```typescript
export default class StocksHistory {
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartStyling extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { data: [] };
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="container" >
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Candle"
                    thickness={2}
                    chartTitle="Google vs Microsoft Changes"
                    subtitle="Between 2013 and 2017"
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed"
                    negativeOutlines="rgb(213, 94, 0)"
                    negativeBrushes="Transparent"
                    brushes="Transparent"
                    zoomSliderType="None"
                    dataSource={this.state.data}/>
            </div>
        </div>
        );
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartStyling/>);
```


<div class="divider--half"></div>

## React Chart Annotations

The Crosshair Annotation Layer provides crossing lines that meet at the actual value of every targeted series. Crosshair types include: Horizontal, Vertical, and Both. The Crosshairs can also be configured to snap to data points by setting the [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#crosshairsSnapToData) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

The Callout Layer displays a callout at X/Y positions.

Note: When using the ordinal X axis mode, the CalloutsXMemberPath should point to the numeric index of the item, otherwise CalloutsXMemberPath should point to the time value.

```typescript
export class StocksUtility {

    public static intervalDays: number = 1;
    public static intervalHours: number = 0;
    public static intervalMinutes: number = 0;

    public static priceStart: number = 200;
    public static priceRange: number = 1;
    public static volumeRange: number = 1000;
    public static volumeStart: number = 20000000;

    public static GetStocksFrom(dateEnd: Date, years: number): any {
        const dateStart = this.AddYears(dateEnd, -years);
        return this.GetStocksBetween(dateStart, dateEnd);
    }

    public static GetStocksItems(points: number): any {
        this.intervalDays = 0;
        this.intervalHours = 1;
        this.intervalMinutes = 0;

        const today = new Date();
        const year = today.getFullYear();
        const dateEnd = new Date(year, 11, 1);
        const dateStart = this.AddHours(dateEnd, -points);
        return this.GetStocksBetween(dateStart, dateEnd);
    }

    public static GetStocksBetween(dateStart: Date, dateEnd: Date): any {

        let interval = this.intervalDays * 24 * 60;
        interval += this.intervalHours * 60;
        interval += this.intervalMinutes;

        let time = this.AddDays(dateStart, 0);
        let v = this.volumeStart;
        let o = this.priceStart;
        let h = o + (Math.random() * this.priceRange);
        let l = o - (Math.random() * this.priceRange);
        let c = l + (Math.random() * (h - l));

        const stock = [];
        while (time.getTime() < dateEnd.getTime()) {
            stock.push({ date: time, open: o, high: h, low: l, close: c, volume: v });

            o = c + ((Math.random() - 0.5) * this.priceRange);
            if (o < 0) {
                o = Math.abs(o) + 2;
            }
            h = o + (Math.random() * this.priceRange);
            l = o - (Math.random() * this.priceRange);
            c = l + (Math.random() * (h - l));
            v = v + ((Math.random() - 0.5) * this.volumeRange);
            if (v < 0) {
                v = Math.abs(v) + 10000;
            }

            o = Math.round(o * 100) / 100;
            h = Math.round(h * 100) / 100;
            l = Math.round(l * 100) / 100;
            c = Math.round(c * 100) / 100;
            v = Math.round(v * 100) / 100;

            time = this.AddMinutes(time, interval);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/Stock Prices"]
        };
        return stock;
    }

    public static AddMinutes(date: Date, minutes: number): Date {
        return new Date(date.getTime() + minutes * 60 * 1000);
    }

    public static AddHours(date: Date, hours: number): Date {
        return new Date(date.getTime() + hours * 60 * 60 * 1000);
    }

    public static AddDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static AddYears(date: Date, years: number): Date {
        return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "M";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "K";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static GetYear(date: Date): number {
        return date.getFullYear();
    }

    public static GetQuarter(date: Date): number {
        const month = date.getMonth();
        return Math.round((month + 2) / 3);
    }

    public static GetLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static GetNewItem(array: any[], interval?: number): any {
        const lastItem = this.GetLastItem(array);

        if (interval === undefined) {
            interval = this.intervalDays * 24 * 60;
            interval += this.intervalHours * 60;
            interval += this.intervalMinutes;
        }

        const time = this.AddMinutes(lastItem.date, interval);
        let v = lastItem.volume;
        let o = lastItem.open;
        let h = lastItem.high;
        let l = lastItem.low;
        let c = lastItem.close;

        o = c + ((Math.random() - 0.5) * this.priceRange);
        if (o < 0) {
            o = Math.abs(o) + 2;
        }
        h = o + (Math.random() * this.priceRange);
        l = o - (Math.random() * this.priceRange);
        c = l + (Math.random() * (h - l));
        v = v + ((Math.random() - 0.5) * this.volumeRange);
        if (v < 0) {
            v = Math.abs(v) + 10000;
        }

        const newValue = { date: time, open: o, high: h, low: l, close: c, volume: v };

        return newValue;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart, MarkerType } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartAnnotations extends React.Component<any, any> {

    public data: any[];
    public excludeProperties: string[] = ["index", "info"];

    private _chart: IgrFinancialChart;

    constructor(props: any) {
        super(props);
        this.state = {
            calloutsVisible: true,
            crosshairsMode: "Both",
            crosshairsVisible: true,
            finalValuesVisible: true,
            markersVisible: false,
            markerTypes: [ MarkerType.None ],
            toolTipVisible: true,
            toolTipType: "Item"
        };
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="options horizontal">
                <label className="options-label">Annotations: </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.crosshairsVisible}
                        onChange={this.onCrosshairsVisible}/> Crosshair 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.calloutsVisible}
                        onChange={this.onCalloutsVisible}/> Callouts 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.toolTipVisible}
                        onChange={this.onItemTooltipVisible}/> Item Tooltip 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.finalValuesVisible}
                        onChange={this.onFinalValuesVisible}/> Final Values 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.markersVisible}
                        onChange={this.onMarkersVisible}/> Markers 
                </label>
            </div>

            <div className="container" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={2}
                    xAxisMode={this.state.xAxisMode}
                    yAxisMode={this.state.yAxisMode}
                    dataSource={this.data}
                    excludedProperties={this.excludeProperties}
                    calloutsVisible={this.state.calloutsVisible}
                    calloutsXMemberPath="index"
                    calloutsYMemberPath="value"
                    calloutsLabelMemberPath="info"
                    calloutsContentMemberPath="info"
                    crosshairsSnapToData={false}
                    toolTipType={this.state.toolTipType}
                    crosshairsDisplayMode={this.state.crosshairsMode}
                    crosshairsAnnotationEnabled={this.state.crosshairsVisible}
                    finalValueAnnotationsVisible={this.state.finalValuesVisible}
                    markerTypes={this.state.markerTypes}/>
            </div>
        </div>
        );
    }

    private onChartRef = (chart: IgrFinancialChart) => {
        this._chart = chart;
    }

    public onCrosshairsVisible = (e: any) => {
        const visible = e.target.checked;
        const mode = e.target.checked ? "Both" : "None";
        this.setState({ crosshairsVisible: visible, crosshairsMode: mode });
    }
    public onCalloutsVisible = (e: any) => {
        this.setState({ calloutsVisible: e.target.checked });
    }
    public onFinalValuesVisible = (e: any) => {
        this.setState({ finalValuesVisible: e.target.checked });
    }
    public onMarkersVisible = (e: any) => {
        const visible = e.target.checked;
        const type = e.target.checked ? [ MarkerType.Automatic ] : [ MarkerType.None ];
        this.setState({ markerTypes: type, markersVisible: visible });
    }
    public onItemTooltipVisible = (e: any) => {
        const visible = e.target.checked;
        const type = e.target.checked ? "Item" : "None";
        this.setState({ toolTipVisible: visible, toolTipType: type });
    }

    public initData() {
        const today = new Date();
        const year = today.getFullYear();
        const dateMonth = today.getMonth();
        const dateEnd = new Date(year, dateMonth, 1);
        const dateStart = new Date(year - 1, dateMonth, 1);

        const stockData = StocksUtility.GetStocksBetween(dateStart, dateEnd);

        let minVal: number = Number.MAX_VALUE;
        let maxVal: number = Number.MIN_VALUE;
        let minIndex: number = 0;
        let maxIndex: number = 0;
        let idx: number = 0;
        let currentYear = 0;
        let currentQuarter = 0;

        // adding annotation data for some data item
        for (const item of stockData) {

            if (minVal > item.close) {
                minVal = item.close;
                minIndex = idx;
            }
            if (maxVal < item.close) {
                maxVal = item.close;
                maxIndex = idx;
            }
            const itemYear = StocksUtility.GetYear(item.date);
            if (currentYear !== itemYear) {
                currentYear = itemYear;
                item.info = itemYear;
            }

            const itemQuarter = StocksUtility.GetQuarter(item.date);
            if (currentQuarter !== itemQuarter) {
                currentQuarter = itemQuarter;
                item.info = "Q" + itemQuarter;
            }

            item.index = idx;
            item.value = item.close;
            idx++;
        }

        stockData[100].info = "SPLIT";
        stockData[200].info = "SPLIT";
        stockData[250].info = "SPLIT";

        stockData[130].info = "DIV";
        stockData[270].info = "DIV";
        stockData[320].info = "DIV";

        stockData[minIndex].info = "MIN";
        stockData[maxIndex].info = "MAX";

        this.data = stockData;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartAnnotations/>);
```


<div class="divider--half"></div>

## React Chart Panes

The following panes are available:

- Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
- Indicator Pane - Renders all the financial indicators in a separate chart while the BollingerBands and PriceChannel overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
- Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
- Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

### Indicator Pane

Financial Indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed below the price pane because they do not share the same Y-Axis scale.

By default the indicator panes are not displayed. The toolbar allows the end user to select which indicator to display at run time.
In order to display an indicator pane initially, the [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#indicatorTypes) property must be set to a least one type of indicator, as demonstrated in the following code:

### Volume Pane

The volume pane represents the number of shares traded during a given period. Low volume would indicate little interest, while high volume would indicate high interest with a lot of trades. This can be displayed using column, line or area chart types. The toolbar allows the end user to display the volume pane by selecting a chart type to render the data at runtime. In order the display the pane, a volume type must be set, as demonstrated in the following code:

### Price Pane

This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to [`Auto`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialcharttype.html#Auto). You can override the default setting, as demonstrated in the following code:

Note that is recommended to use line chart type if plotting multiple data sources or if plotting data source with a lot of data points.

### Zoom Pane

This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#zoomSliderType) to `none` as demonstrated in the following code:

Note that you should set the [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#zoomSliderType) option to the same value as the [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) option is set to. This way, the zoom slider will show correct preview of the price pane. The following code demonstrates how to do this:

In this example, the stock chart is plotting revenue for United States.

```typescript
export class StocksUtility {

    public static intervalDays: number = 1;
    public static intervalHours: number = 0;
    public static intervalMinutes: number = 0;

    public static priceStart: number = 200;
    public static priceRange: number = 1;
    public static volumeRange: number = 1000;
    public static volumeStart: number = 20000000;

    public static GetStocksFrom(dateEnd: Date, years: number): any {
        const dateStart = this.AddYears(dateEnd, -years);
        return this.GetStocksBetween(dateStart, dateEnd);
    }

    public static GetStocksItems(points: number): any {
        this.intervalDays = 0;
        this.intervalHours = 1;
        this.intervalMinutes = 0;

        const today = new Date();
        const year = today.getFullYear();
        const dateEnd = new Date(year, 11, 1);
        const dateStart = this.AddHours(dateEnd, -points);
        return this.GetStocksBetween(dateStart, dateEnd);
    }

    public static GetStocksBetween(dateStart: Date, dateEnd: Date): any {

        let interval = this.intervalDays * 24 * 60;
        interval += this.intervalHours * 60;
        interval += this.intervalMinutes;

        let time = this.AddDays(dateStart, 0);
        let v = this.volumeStart;
        let o = this.priceStart;
        let h = o + (Math.random() * this.priceRange);
        let l = o - (Math.random() * this.priceRange);
        let c = l + (Math.random() * (h - l));

        const stock = [];
        while (time.getTime() < dateEnd.getTime()) {
            stock.push({ date: time, open: o, high: h, low: l, close: c, volume: v });

            o = c + ((Math.random() - 0.5) * this.priceRange);
            if (o < 0) {
                o = Math.abs(o) + 2;
            }
            h = o + (Math.random() * this.priceRange);
            l = o - (Math.random() * this.priceRange);
            c = l + (Math.random() * (h - l));
            v = v + ((Math.random() - 0.5) * this.volumeRange);
            if (v < 0) {
                v = Math.abs(v) + 10000;
            }

            o = Math.round(o * 100) / 100;
            h = Math.round(h * 100) / 100;
            l = Math.round(l * 100) / 100;
            c = Math.round(c * 100) / 100;
            v = Math.round(v * 100) / 100;

            time = this.AddMinutes(time, interval);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/Stock Prices"]
        };
        return stock;
    }

    public static AddMinutes(date: Date, minutes: number): Date {
        return new Date(date.getTime() + minutes * 60 * 1000);
    }

    public static AddHours(date: Date, hours: number): Date {
        return new Date(date.getTime() + hours * 60 * 60 * 1000);
    }

    public static AddDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static AddYears(date: Date, years: number): Date {
        return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "M";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "K";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static GetYear(date: Date): number {
        return date.getFullYear();
    }

    public static GetQuarter(date: Date): number {
        const month = date.getMonth();
        return Math.round((month + 2) / 3);
    }

    public static GetLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static GetNewItem(array: any[], interval?: number): any {
        const lastItem = this.GetLastItem(array);

        if (interval === undefined) {
            interval = this.intervalDays * 24 * 60;
            interval += this.intervalHours * 60;
            interval += this.intervalMinutes;
        }

        const time = this.AddMinutes(lastItem.date, interval);
        let v = lastItem.volume;
        let o = lastItem.open;
        let h = lastItem.high;
        let l = lastItem.low;
        let c = lastItem.close;

        o = c + ((Math.random() - 0.5) * this.priceRange);
        if (o < 0) {
            o = Math.abs(o) + 2;
        }
        h = o + (Math.random() * this.priceRange);
        l = o - (Math.random() * this.priceRange);
        c = l + (Math.random() * (h - l));
        v = v + ((Math.random() - 0.5) * this.volumeRange);
        if (v < 0) {
            v = Math.abs(v) + 10000;
        }

        const newValue = { date: time, open: o, high: h, low: l, close: c, volume: v };

        return newValue;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartPanes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
         this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container">
                    <IgrFinancialChart
                        width="100%"
                        height="100%"
                        chartType="Candle"
                        zoomSliderType="Candle"
                        volumeType="Area"
                        overlayBrushes="rgba(5, 138, 0, 0.17)"
                        overlayOutlines="rgba(5, 138, 0, 0.4)"
                        overlayThickness={1}
                        dataSource={this.data} />
                </div>
            </div>
        );
    }

    public initData() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dateEnd = new Date(year, month, 1);
        const dateStart = new Date(year - 1, month, 1);

        this.data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartPanes/>);
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](../features/chart-animations.md)
- [Chart Annotations](../features/chart-annotations.md)
- [Chart Navigation](../features/chart-navigation.md)
- [Chart Trendlines](../features/chart-trendlines.md)
- [Chart Performance](../features/chart-performance.md)

## API References

The following table lists API members mentioned in the above sections:

- [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType)
- [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#crosshairsSnapToData)
- `ItemsSource`
- [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html)
- [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#indicatorTypes)
- [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#zoomSliderType)
