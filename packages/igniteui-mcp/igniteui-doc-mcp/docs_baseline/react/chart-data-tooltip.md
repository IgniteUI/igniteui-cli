---
title: React Chart Data Tooltip | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for React chart with the data tooltip layer!
_keywords: React charts, chart legend, legend, legend types, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Tooltip
_premium: true
---

# React Chart Data Tooltip

In Ignite UI for React, the **DataToolTip** displays values and titles of series as well as legend badges of series in a tooltip. In addition, it provides many configuration properties of the [`IgrDataLegend`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatalegend.html) for filtering series rows and values columns, styling, and formatting values. This tooltip type updates while moving the mouse inside of the plot area of the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html), and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) components.

## React Data Tooltip Properties

All properties of [`IgrDataToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatatooltiplayer.html) are prefixed with **DataToolTip** and exposed on API of [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) components. However, you will need to create an instance of [`IgrDataToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatatooltiplayer.html) and add it to series collection of [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component if you want to use it with Radial Charts, Polar Charts, Scatter Charts.

## React Data Tooltip Elements

The **DataToolTip** displays content using a set of three types of rows and four types of columns.

### React Data Tooltip Rows

The rows of the **DataToolTip** include the header row, series row(s), and the summary row.

The header row displays the axis label of the point that is hovered, and can be changed using the [`dataToolTipHeaderText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipHeaderText) property.

The series row can actually be a set of rows corresponding to each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol and unit, if specified.

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the [`dataToolTipSummaryTitleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipSummaryTitleText) property of the legend. Also, you can use the [`dataToolTipSummaryType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipSummaryType) property to customize whether you display the Total, Min, Max, or Average of series values in the summary row.

The following example demonstrates the data tooltip with a summary applied:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Highest Grossing Movie Franchises
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    dataSource={this.highestGrossingMovies}
                    toolTipType="Data"
                    xAxisInterval="1"
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    crosshairsDisplayMode="None"
                    isCategoryHighlightingEnabled="true"
                    highlightingMode="FadeOthersSpecific"
                    highlightingBehavior="NearestItemsAndSeries">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### React Data Tooltip Columns

The columns of the [`IgrDataToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatatooltiplayer.html) include the title, label, value, and units columns. Each series in the chart can have multiple columns for label, value, and units depending on the [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipIncludedColumns) or [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipExcludedColumns) collections of the chart.

The title column displays legend badges and series titles, which come from the [`chartTitle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#chartTitle) property of the different [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html) plotted in the chart.

The label column displays the name or abbreviation of the different property paths in the [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipIncludedColumns) or [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipExcludedColumns) collections of the tooltip.

The value column displays series values as abbreviated text which can be formatted using the [`dataToolTipValueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatAbbreviation) property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the [`dataToolTipValueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMinFractions) and [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMaxFractions) for minimum and maximum digits, respectively.

The units column displays an abbreviation symbol and/or unit text, which can be set either on the **DataToolTip** by setting the [`dataToolTipUnitsText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipUnitsText) for all columns or using the following properties on each series in the chart:

- Category Series (e.g. ColumnSeries)
  - ValueMemberAsLegendUnit="K"
- Financial Price Series:
  - OpenMemberAsLegendUnit="K"
  - LowMemberAsLegendUnit="K"
  - HighMemberAsLegendUnit="K"
  - CloseMemberAsLegendUnit="K"
- Range Series:
  - LowMemberAsLegendUnit="K"
  - HighMemberAsLegendUnit="K"
- Radial Series:
  - ValueMemberAsLegendUnit="km"
- Polar Series:
  - RadiusMemberAsLegendUnit="km"
  - AngleMemberAsLegendUnit="degrees"

For the above-listed properties, there are corresponding properties ending with **MemberAsLegendLabel** to determine the text in the label columns mentioned previously.

The columns included in the [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipIncludedColumns) and [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipExcludedColumns) collections generally correspond to the value paths of your underlying data items, but the financial series has the option to include some special ones in addition to the `High`, `Low`, `Open`, and `Close` paths that are required for the financial series to plot correctly. You have the ability to show `TypicalPrice`, `Change`, and `Volume` options within the tooltip.

The following example demonstrates a data tooltip with the added columns of Open, High, Low, Close, and Change:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { MultipleStocks } from './MultipleStocks';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrFinancialChart
                    ref={this.chartRef}
                    chartType="Candle"
                    isVerticalZoomEnabled="true"
                    isHorizontalZoomEnabled="true"
                    dataSource={this.multipleStocks}
                    toolTipType="Data"
                    dataToolTipIncludedColumns={["Open", "Close", "High", "Low", "Change"]}
                    dataToolTipHeaderFormatTime="None"
                    zoomSliderType="None">
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _multipleStocks: MultipleStocks = null;
    private _isFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._isFetching)
        {
            this._isFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this.setState({});  })();
        }
        return this._multipleStocks;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## React Data Tooltip Grouping for Data Chart

[`dataLegendGroup`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#dataLegendGroup) can be set, on all types of series, to a string that will categorize a group of series in Data Legend. Each group will have its own summary row displayed before another group of series is displayed:
By default, DataLegend will hide names of groups, but you can display group names by setting the [`groupRowVisible`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatalegend.html#groupRowVisible) property to true. [`groupingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatatooltiplayer.html#groupingMode) should be set to "Grouped" and [`labelDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatalegend.html#labelDisplayMode) should be set to "Visible" on the Data Tooltip Layer.

```typescript
export class OlympicMedalsTopCountriesWithTotalsItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesWithTotalsItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public america: number;
    public americaGold: number;
    public china: number;
    public chinaGold: number;
    public russia: number;
    public russiaGold: number;
    public total: number;

}
export class OlympicMedalsTopCountriesWithTotals extends Array<OlympicMedalsTopCountriesWithTotalsItem> {
    public constructor(items: Array<OlympicMedalsTopCountriesWithTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `1996`, america: 148, americaGold: 50, china: 110, chinaGold: 40, russia: 95, russiaGold: 20, total: 353 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2000`, america: 142, americaGold: 40, china: 115, chinaGold: 45, russia: 91, russiaGold: 40, total: 348 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2004`, america: 134, americaGold: 35, china: 121, chinaGold: 55, russia: 86, russiaGold: 25, total: 341 }),
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-react-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
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
    private columnSeries1: IgrColumnSeries
    private columnSeries2: IgrColumnSeries
    private columnSeries3: IgrColumnSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="America"
                        valueMemberPath="america"
                        dataLegendGroup="Medals by Country">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="China"
                        valueMemberPath="china"
                        dataLegendGroup="Medals by Country">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries3"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="Russia"
                        valueMemberPath="russia"
                        dataLegendGroup="Medals by Country">
                    </IgrColumnSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        groupRowVisible="true"
                        groupingMode="Grouped">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## React Data Tooltip Grouping & Positioning for Category Chart & Financial Chart

You can set [`dataToolTipGroupingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipGroupingMode) property to either `Grouped` or `Individual` to group content for multiple series into single tooltip or separate content for each series in multiple tooltips. In the `Grouped` mode, you can customize where the tooltip is shown by setting the [`dataToolTipGroupedPositionModeX`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipGroupedPositionModeX) and [`dataToolTipGroupedPositionModeY`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipGroupedPositionModeY) properties. This essentially allows you to customize the horizontal and vertical alignments of the tooltip and whether you want it to track to the closest series points to the mouse position or pin the tooltip to edge of plot area.

The following example demonstrates a data tooltip positioned to the top-right of the chart:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private groupedPositionXEditor: IgrPropertyEditorPropertyDescription
    private groupedPositionYEditor: IgrPropertyEditorPropertyDescription
    private groupingModeEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="DataToolTipGroupedPositionModeX"
                        primitiveValue="PinRight"
                        name="GroupedPositionXEditor"
                        label="Grouped X Position: ">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="DataToolTipGroupedPositionModeY"
                        primitiveValue="PinTop"
                        name="GroupedPositionYEditor"
                        label="Grouped Y Position: ">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="DataToolTipGroupingMode"
                        primitiveValue="Grouped"
                        name="GroupingModeEditor"
                        label="Grouping Mode: ">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Highest Grossing Movie Franchises
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    dataSource={this.highestGrossingMovies}
                    toolTipType="Data"
                    dataToolTipGroupedPositionModeX="PinRight"
                    dataToolTipGroupedPositionModeY="PinTop"
                    dataToolTipGroupingMode="Grouped"
                    xAxisInterval="1"
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    crosshairsDisplayMode="None">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## React Data Tooltip Value Formatting

The **DataToolTip** provides automatic abbreviation of large numbers using its [`dataToolTipValueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatAbbreviation) property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the [`dataToolTipValueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMinFractions) and [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMaxFractions). This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.

The following example demonstrates a **DataToolTip** with the minimum and maximum fractions set:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Highest Grossing Movie Franchises
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    dataSource={this.highestGrossingMovies}
                    toolTipType="Data"
                    dataToolTipUnitsText="B"
                    dataToolTipValueFormatMode="Decimal"
                    dataToolTipValueFormatMinFractions="2"
                    xAxisInterval="1"
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isCategoryHighlightingEnabled="false"
                    crosshairsDisplayMode="None"
                    highlightingMode="FadeOthersSpecific"
                    highlightingBehavior="NearestItemsAndSeries">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## React Data Tooltip Value Mode

You can change the default decimal display of values within the **DataToolTip** to be currency by changing the [`dataToolTipValueFormatMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMode) property of the layer. The **DataToolTip** also exposes the ability to modify the culture of the displayed currency symbol by using its [`dataToolTipValueFormatCulture`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatCulture) property and setting it to its corresponding culture tag. For example, the following sample demonstrates a chart with the [`dataToolTipValueFormatCulture`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatCulture) set to "en-GB":

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { MultipleStocks } from './MultipleStocks';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrFinancialChart
                    ref={this.chartRef}
                    chartType="Candle"
                    toolTipType="Data"
                    dataSource={this.multipleStocks}
                    dataToolTipIncludedColumns={["Close", "Change", "Value"]}
                    dataToolTipExcludedColumns={["High", "Low", "Open", "Volume"]}
                    dataToolTipLabelDisplayMode="Hidden"
                    dataToolTipValueFormatMode="Currency"
                    dataToolTipValueFormatCulture="en-GB"
                    dataToolTipHeaderFormatTime="None"
                    zoomSliderType="None">
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _multipleStocks: MultipleStocks = null;
    private _isFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._isFetching)
        {
            this._isFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this.setState({});  })();
        }
        return this._multipleStocks;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Layout Mode

Legend items can be positioned in a vertical or table structure via the [`layoutMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatalegend.html#layoutMode) property. The default value is `Table`, which retains the same look and feel as seen in previous releases.

eg.

<img src="../../../images/general/layout_mode.png" alt="Layout Mode" />

## React Data Tooltip Styling

The **DataToolTip** provides properties for styling each type of column. Each of these properties begins with Title, Label, Value, or Units, and you can style the text's color, font, and margin. For example, if you wanted to set the text color of each of these, you would set the [`dataToolTipTitleTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipTitleTextColor), [`dataToolTipLabelTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipLabelTextColor), [`dataToolTipValueTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueTextColor), and [`dataToolTipUnitsTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipUnitsTextColor) properties.

The following example demonstrates usage of the styling properties mentioned above:

```typescript
//begin data
export class StockGoogle extends Array<StockItem> {

	constructor(){
    super();
    let jsonData = [
      { "Date": "2014-03-01", "Open": 559.6, "High": 568.2, "Low": 558.4, "Close": 566.9, "Volume": 2182626 },
      { "Date": "2014-03-02", "Open": 562.4, "High": 571.8, "Low": 561.4, "Close": 567.0, "Volume": 2088804 },
      { "Date": "2014-03-03", "Open": 569.9, "High": 587.3, "Low": 564.1, "Close": 569.7, "Volume": 5087530 },
      { "Date": "2014-03-04", "Open": 574.6, "High": 577.8, "Low": 543.0, "Close": 543.1, "Volume": 6377658 },
      { "Date": "2014-03-07", "Open": 540.7, "High": 548.5, "Low": 527.1, "Close": 538.1, "Volume": 4389569 },
      { "Date": "2014-03-08", "Open": 542.6, "High": 555.0, "Low": 541.6, "Close": 554.9, "Volume": 3152406 },
      { "Date": "2014-03-09", "Open": 559.6, "High": 565.4, "Low": 553.0, "Close": 564.1, "Volume": 3324742 },
      { "Date": "2014-03-10", "Open": 565.0, "High": 565.0, "Low": 539.9, "Close": 541.0, "Volume": 4027743 },
      { "Date": "2014-03-11", "Open": 532.5, "High": 540.0, "Low": 526.5, "Close": 530.6, "Volume": 3916171 },
      { "Date": "2014-03-14", "Open": 538.3, "High": 544.1, "Low": 529.6, "Close": 532.5, "Volume": 2568020 },
      { "Date": "2014-03-15", "Open": 536.8, "High": 538.5, "Low": 518.5, "Close": 536.4, "Volume": 3847453 },
      { "Date": "2014-03-16", "Open": 543.0, "High": 557.0, "Low": 540.0, "Close": 556.5, "Volume": 4879889 },
      { "Date": "2014-03-17", "Open": 548.8, "High": 549.5, "Low": 531.1, "Close": 536.1, "Volume": 6795393 },
      { "Date": "2014-03-21", "Open": 536.1, "High": 536.7, "Low": 525.6, "Close": 528.6, "Volume": 2561214 },
      { "Date": "2014-03-22", "Open": 528.6, "High": 537.2, "Low": 527.5, "Close": 534.8, "Volume": 2359421 },
      { "Date": "2014-03-23", "Open": 533.8, "High": 533.9, "Low": 526.3, "Close": 526.9, "Volume": 2051066 },
      { "Date": "2014-03-24", "Open": 530.1, "High": 531.6, "Low": 522.1, "Close": 525.2, "Volume": 1881965 },
      { "Date": "2014-03-25", "Open": 522.5, "High": 524.7, "Low": 515.4, "Close": 516.2, "Volume": 2097264 },
      { "Date": "2014-03-28", "Open": 517.2, "High": 518.6, "Low": 502.8, "Close": 517.1, "Volume": 3326429 },
      { "Date": "2014-03-29", "Open": 516.9, "High": 529.5, "Low": 516.3, "Close": 527.7, "Volume": 2692489 },
      { "Date": "2014-03-30", "Open": 527.6, "High": 528.0, "Low": 522.5, "Close": 526.7, "Volume": 1746904 },
      { "Date": "2014-04-01", "Open": 527.1, "High": 532.9, "Low": 523.9, "Close": 531.4, "Volume": 1900432 },
      { "Date": "2014-04-02", "Open": 533.8, "High": 534.0, "Low": 525.6, "Close": 527.9, "Volume": 1685042 },
      { "Date": "2014-04-05", "Open": 524.8, "High": 528.9, "Low": 521.3, "Close": 527.8, "Volume": 1021408 },
      { "Date": "2014-04-06", "Open": 525.2, "High": 526.8, "Low": 515.1, "Close": 515.1, "Volume": 1684381 },
      { "Date": "2014-04-07", "Open": 515.8, "High": 516.7, "Low": 503.3, "Close": 510.0, "Volume": 3216077 },
      { "Date": "2014-04-08", "Open": 508.5, "High": 517.2, "Low": 506.4, "Close": 511.0, "Volume": 2016131 },
      { "Date": "2014-04-09", "Open": 510.8, "High": 519.9, "Low": 504.2, "Close": 518.7, "Volume": 2432783 },
      { "Date": "2014-04-12", "Open": 523.5, "High": 530.2, "Low": 519.0, "Close": 529.9, "Volume": 1908392 },
      { "Date": "2014-04-13", "Open": 530.9, "High": 536.1, "Low": 529.5, "Close": 533.1, "Volume": 1648907 },
      { "Date": "2014-04-14", "Open": 533.0, "High": 533.0, "Low": 525.3, "Close": 526.6, "Volume": 1191863 },
      { "Date": "2014-04-15", "Open": 525.7, "High": 525.9, "Low": 517.4, "Close": 520.0, "Volume": 1703758 },
      { "Date": "2014-04-16", "Open": 521.4, "High": 521.8, "Low": 515.4, "Close": 520.6, "Volume": 1481688 },
      { "Date": "2014-04-19", "Open": 519.7, "High": 529.8, "Low": 517.6, "Close": 528.9, "Volume": 1276362 },
      { "Date": "2014-04-20", "Open": 529.7, "High": 536.2, "Low": 526.3, "Close": 529.8, "Volume": 1780113 },
      { "Date": "2014-04-21", "Open": 532.9, "High": 539.2, "Low": 531.9, "Close": 538.9, "Volume": 1193389 },
      { "Date": "2014-04-22", "Open": 541.1, "High": 547.6, "Low": 540.8, "Close": 545.1, "Volume": 1611837 },
      { "Date": "2014-04-23", "Open": 547.3, "High": 553.6, "Low": 543.7, "Close": 552.7, "Volume": 1929632 },
      { "Date": "2014-04-27", "Open": 556.0, "High": 566.0, "Low": 554.4, "Close": 566.0, "Volume": 2100298 },
      { "Date": "2014-04-28", "Open": 564.6, "High": 567.8, "Low": 561.0, "Close": 561.7, "Volume": 1647717 },
      { "Date": "2014-04-29", "Open": 563.4, "High": 564.0, "Low": 558.7, "Close": 560.1, "Volume": 1350657 },
      { "Date": "2014-04-30", "Open": 560.8, "High": 561.4, "Low": 555.9, "Close": 559.9, "Volume": 1766794 },
      { "Date": "2014-05-02", "Open": 560.7, "High": 560.9, "Low": 545.7, "Close": 553.9, "Volume": 1434989 },
      { "Date": "2014-05-03", "Open": 551.0, "High": 552.3, "Low": 542.5, "Close": 544.9, "Volume": 1861921 },
      { "Date": "2014-05-04", "Open": 541.5, "High": 548.6, "Low": 538.8, "Close": 544.7, "Volume": 1812084 },
      { "Date": "2014-05-05", "Open": 546.4, "High": 555.0, "Low": 544.5, "Close": 553.9, "Volume": 1684886 },
      { "Date": "2014-05-06", "Open": 558.1, "High": 558.1, "Low": 548.9, "Close": 556.3, "Volume": 1732592 },
      { "Date": "2014-05-09", "Open": 557.1, "High": 562.9, "Low": 556.0, "Close": 562.1, "Volume": 1463676 },
      { "Date": "2014-05-10", "Open": 560.5, "High": 563.6, "Low": 557.9, "Close": 560.5, "Volume": 1349444 },
      { "Date": "2014-05-11", "Open": 558.0, "High": 559.9, "Low": 555.0, "Close": 558.8, "Volume": 1097380 },
      { "Date": "2014-05-12", "Open": 557.3, "High": 558.0, "Low": 548.5, "Close": 551.4, "Volume": 1457104 },
      { "Date": "2014-05-13", "Open": 552.3, "High": 552.3, "Low": 545.6, "Close": 551.8, "Volume": 1217176 },
      { "Date": "2014-05-16", "Open": 549.3, "High": 549.6, "Low": 541.5, "Close": 544.3, "Volume": 1704027 },
      { "Date": "2014-05-17", "Open": 544.2, "High": 545.3, "Low": 539.3, "Close": 543.0, "Volume": 1445878 },
      { "Date": "2014-05-18", "Open": 544.9, "High": 553.6, "Low": 544.0, "Close": 553.4, "Volume": 1737343 },
      { "Date": "2014-05-19", "Open": 554.2, "High": 555.0, "Low": 548.5, "Close": 554.9, "Volume": 2451341 },
      { "Date": "2014-05-20", "Open": 556.9, "High": 557.6, "Low": 550.4, "Close": 556.4, "Volume": 4496962 },
      { "Date": "2014-05-23", "Open": 555.1, "High": 565.0, "Low": 554.3, "Close": 565.0, "Volume": 1534659 },
      { "Date": "2014-05-24", "Open": 565.2, "High": 572.6, "Low": 561.0, "Close": 564.6, "Volume": 2201789 },
      { "Date": "2014-05-25", "Open": 565.3, "High": 580.0, "Low": 565.2, "Close": 578.6, "Volume": 1964447 },
      { "Date": "2014-05-26", "Open": 581.0, "High": 582.5, "Low": 571.9, "Close": 576.0, "Volume": 1737210 },
      { "Date": "2014-05-27", "Open": 577.2, "High": 579.9, "Low": 573.8, "Close": 577.2, "Volume": 2231174 },
      { "Date": "2014-05-30", "Open": 578.7, "High": 579.6, "Low": 574.8, "Close": 575.3, "Volume": 1310909 },
      { "Date": "2014-06-01", "Open": 578.3, "High": 584.4, "Low": 576.6, "Close": 582.7, "Volume": 1446309 },
      { "Date": "2014-06-02", "Open": 583.4, "High": 585.4, "Low": 580.4, "Close": 582.3, "Volume": 1054936 },
      { "Date": "2014-06-03", "Open": 583.4, "High": 585.0, "Low": 580.9, "Close": 584.7, "Volume": 712210 },
      { "Date": "2014-06-07", "Open": 583.8, "High": 586.4, "Low": 579.6, "Close": 582.3, "Volume": 1061833 },
      { "Date": "2014-06-08", "Open": 577.7, "High": 579.5, "Low": 566.1, "Close": 571.1, "Volume": 1908647 },
      { "Date": "2014-06-09", "Open": 571.6, "High": 576.7, "Low": 569.4, "Close": 576.1, "Volume": 1113907 },
      { "Date": "2014-06-10", "Open": 565.9, "High": 576.6, "Low": 565.0, "Close": 571.1, "Volume": 1353317 },
      { "Date": "2014-06-11", "Open": 571.9, "High": 580.9, "Low": 571.4, "Close": 579.2, "Volume": 1617569 },
      { "Date": "2014-06-14", "Open": 582.6, "High": 585.2, "Low": 578.0, "Close": 584.9, "Volume": 1852290 },
      { "Date": "2014-06-15", "Open": 585.7, "High": 585.8, "Low": 576.6, "Close": 584.8, "Volume": 1618815 },
      { "Date": "2014-06-16", "Open": 588.0, "High": 588.4, "Low": 582.2, "Close": 582.7, "Volume": 1394560 },
      { "Date": "2014-06-17", "Open": 579.5, "High": 581.0, "Low": 568.6, "Close": 573.7, "Volume": 3015475 },
      { "Date": "2014-06-18", "Open": 593.0, "High": 596.8, "Low": 582.0, "Close": 595.1, "Volume": 4006389 },
      { "Date": "2014-06-21", "Open": 591.8, "High": 594.4, "Low": 585.2, "Close": 589.5, "Volume": 2060334 },
      { "Date": "2014-06-22", "Open": 590.7, "High": 599.6, "Low": 590.6, "Close": 594.7, "Volume": 1694787 },
      { "Date": "2014-06-23", "Open": 593.2, "High": 597.9, "Low": 592.5, "Close": 596.0, "Volume": 1229846 },
      { "Date": "2014-06-24", "Open": 596.5, "High": 599.5, "Low": 591.8, "Close": 593.4, "Volume": 1033341 },
      { "Date": "2014-06-25", "Open": 590.4, "High": 591.9, "Low": 587.0, "Close": 589.0, "Volume": 932724 },
      { "Date": "2014-06-28", "Open": 588.1, "High": 592.5, "Low": 584.8, "Close": 590.6, "Volume": 984161 },
      { "Date": "2014-06-29", "Open": 588.8, "High": 589.7, "Low": 583.5, "Close": 585.6, "Volume": 1346647 },
      { "Date": "2014-06-30", "Open": 586.5, "High": 589.5, "Low": 584.0, "Close": 587.4, "Volume": 1013932 },
      { "Date": "2014-06-31", "Open": 580.6, "High": 583.6, "Low": 570.0, "Close": 571.6, "Volume": 2099516 },
      { "Date": "2014-07-01", "Open": 570.4, "High": 576.0, "Low": 562.9, "Close": 566.1, "Volume": 1950171 },
      { "Date": "2014-07-04", "Open": 569.0, "High": 575.4, "Low": 564.1, "Close": 573.1, "Volume": 1427169 },
      { "Date": "2014-07-05", "Open": 570.0, "High": 572.0, "Low": 562.6, "Close": 565.1, "Volume": 1556685 },
      { "Date": "2014-07-06", "Open": 561.8, "High": 570.7, "Low": 560.0, "Close": 566.4, "Volume": 1330877 },
      { "Date": "2014-07-07", "Open": 568.0, "High": 569.9, "Low": 561.1, "Close": 563.4, "Volume": 1108900 },
      { "Date": "2014-07-08", "Open": 563.6, "High": 570.3, "Low": 560.4, "Close": 568.8, "Volume": 1492491 },
      { "Date": "2014-07-11", "Open": 570.0, "High": 570.5, "Low": 566.0, "Close": 567.9, "Volume": 1215968 },
      { "Date": "2014-07-12", "Open": 564.5, "High": 565.9, "Low": 560.9, "Close": 562.7, "Volume": 1537758 },
      { "Date": "2014-07-13", "Open": 567.3, "High": 575.0, "Low": 565.8, "Close": 574.8, "Volume": 1437922 },
      { "Date": "2014-07-14", "Open": 576.2, "High": 577.9, "Low": 570.9, "Close": 574.6, "Volume": 982926 },
      { "Date": "2014-07-15", "Open": 577.9, "High": 579.4, "Low": 570.5, "Close": 573.5, "Volume": 1517056 },
      { "Date": "2014-07-18", "Open": 576.1, "High": 584.5, "Low": 576.0, "Close": 582.2, "Volume": 1282531 },
      { "Date": "2014-07-19", "Open": 585.0, "High": 587.3, "Low": 584.0, "Close": 586.9, "Volume": 979298 },
      { "Date": "2014-07-20", "Open": 585.9, "High": 586.7, "Low": 582.6, "Close": 584.5, "Volume": 1034779 },
      { "Date": "2014-07-21", "Open": 583.8, "High": 584.5, "Low": 581.1, "Close": 583.4, "Volume": 912854 },
      { "Date": "2014-07-22", "Open": 583.6, "High": 585.2, "Low": 580.6, "Close": 582.6, "Volume": 789484 },
      { "Date": "2014-07-25", "Open": 584.7, "High": 585.0, "Low": 579.0, "Close": 580.2, "Volume": 1358810 },
      { "Date": "2014-07-26", "Open": 581.3, "High": 581.8, "Low": 576.6, "Close": 577.9, "Volume": 1635465 },
      { "Date": "2014-07-27", "Open": 577.3, "High": 578.5, "Low": 570.1, "Close": 571.0, "Volume": 1700161 },
      { "Date": "2014-07-28", "Open": 569.6, "High": 573.3, "Low": 567.1, "Close": 569.2, "Volume": 1295963 },
      { "Date": "2014-07-29", "Open": 571.3, "High": 572.0, "Low": 567.1, "Close": 571.6, "Volume": 1081231 },
      { "Date": "2014-08-02", "Open": 571.9, "High": 577.8, "Low": 571.2, "Close": 577.3, "Volume": 1576830 },
      { "Date": "2014-08-03", "Open": 580.0, "High": 583.0, "Low": 575.0, "Close": 577.9, "Volume": 1214586 },
      { "Date": "2014-08-04", "Open": 580.0, "High": 586.0, "Low": 579.2, "Close": 582.0, "Volume": 1459956 },
      { "Date": "2014-08-05", "Open": 584.0, "High": 586.5, "Low": 582.0, "Close": 586.1, "Volume": 1629477 },
      { "Date": "2014-08-08", "Open": 586.6, "High": 591.8, "Low": 586.3, "Close": 589.7, "Volume": 1429101 },
      { "Date": "2014-08-09", "Open": 588.9, "High": 589.0, "Low": 580.0, "Close": 581.0, "Volume": 1286722 },
      { "Date": "2014-08-10", "Open": 581.5, "High": 583.5, "Low": 576.9, "Close": 583.1, "Volume": 975145 },
      { "Date": "2014-08-11", "Open": 580.4, "High": 581.8, "Low": 576.3, "Close": 581.4, "Volume": 1217721 },
      { "Date": "2014-08-12", "Open": 581.0, "High": 581.6, "Low": 574.5, "Close": 575.6, "Volume": 1597677 },
      { "Date": "2014-08-15", "Open": 572.9, "High": 575.0, "Low": 568.2, "Close": 573.1, "Volume": 1596224 },
      { "Date": "2014-08-16", "Open": 572.8, "High": 581.5, "Low": 572.7, "Close": 580.0, "Volume": 1478306 },
      { "Date": "2014-08-17", "Open": 580.0, "High": 587.5, "Low": 578.8, "Close": 584.8, "Volume": 1690994 },
      { "Date": "2014-08-18", "Open": 587.0, "High": 589.5, "Low": 585.0, "Close": 589.3, "Volume": 1442012 },
      { "Date": "2014-08-19", "Open": 591.5, "High": 596.5, "Low": 589.5, "Close": 596.1, "Volume": 3727045 },
      { "Date": "2014-08-22", "Open": 593.8, "High": 594.0, "Low": 583.5, "Close": 587.4, "Volume": 1687710 },
      { "Date": "2014-08-23", "Open": 586.9, "High": 586.9, "Low": 581.0, "Close": 581.1, "Volume": 1467703 },
      { "Date": "2014-08-24", "Open": 581.5, "High": 589.6, "Low": 580.5, "Close": 588.0, "Volume": 1724537 },
      { "Date": "2014-08-25", "Open": 587.5, "High": 588.0, "Low": 574.2, "Close": 575.1, "Volume": 1925350 },
      { "Date": "2014-08-26", "Open": 576.1, "High": 579.3, "Low": 574.7, "Close": 577.1, "Volume": 1439807 },
      { "Date": "2014-08-29", "Open": 571.8, "High": 578.2, "Low": 571.2, "Close": 576.4, "Volume": 1281204 },
      { "Date": "2014-08-30", "Open": 576.9, "High": 579.9, "Low": 572.9, "Close": 577.4, "Volume": 1618437 },
      { "Date": "2014-09-01", "Open": 576.0, "High": 577.6, "Low": 567.0, "Close": 568.3, "Volume": 1445027 },
      { "Date": "2014-09-02", "Open": 567.3, "High": 571.9, "Low": 563.3, "Close": 570.1, "Volume": 1175307 },
      { "Date": "2014-09-03", "Open": 573.0, "High": 577.2, "Low": 572.5, "Close": 575.3, "Volume": 1138636 },
      { "Date": "2014-09-06", "Open": 578.8, "High": 581.0, "Low": 574.4, "Close": 577.4, "Volume": 1211320 },
      { "Date": "2014-09-07", "Open": 574.4, "High": 575.3, "Low": 563.7, "Close": 563.7, "Volume": 1906427 },
      { "Date": "2014-09-08", "Open": 565.6, "High": 573.9, "Low": 557.5, "Close": 572.5, "Volume": 1987888 },
      { "Date": "2014-09-09", "Open": 571.2, "High": 571.5, "Low": 559.1, "Close": 560.9, "Volume": 2519693 },
      { "Date": "2014-09-10", "Open": 557.7, "High": 565.1, "Low": 544.0, "Close": 544.5, "Volume": 3078634 },
      { "Date": "2014-09-13", "Open": 545.0, "High": 549.5, "Low": 533.1, "Close": 533.2, "Volume": 2578676 },
      { "Date": "2014-09-14", "Open": 538.9, "High": 547.2, "Low": 533.2, "Close": 537.9, "Volume": 2217230 },
      { "Date": "2014-09-15", "Open": 531.0, "High": 532.8, "Low": 518.3, "Close": 530.0, "Volume": 3712536 },
      { "Date": "2014-09-16", "Open": 519.0, "High": 529.4, "Low": 515.0, "Close": 524.5, "Volume": 3698423 },
      { "Date": "2014-09-17", "Open": 527.3, "High": 531.0, "Low": 508.5, "Close": 511.2, "Volume": 5530674 },
      { "Date": "2014-09-20", "Open": 509.4, "High": 521.8, "Low": 508.1, "Close": 520.8, "Volume": 2605505 },
      { "Date": "2014-09-21", "Open": 525.2, "High": 526.8, "Low": 519.1, "Close": 526.5, "Volume": 2332531 },
      { "Date": "2014-09-22", "Open": 529.9, "High": 539.8, "Low": 528.8, "Close": 532.7, "Volume": 2917183 },
      { "Date": "2014-09-23", "Open": 539.3, "High": 547.2, "Low": 535.9, "Close": 544.0, "Volume": 2345296 },
      { "Date": "2014-09-24", "Open": 544.4, "High": 544.9, "Low": 535.8, "Close": 539.8, "Volume": 1972047 },
      { "Date": "2014-09-27", "Open": 537.0, "High": 544.4, "Low": 537.0, "Close": 540.8, "Volume": 1184973 },
      { "Date": "2014-09-28", "Open": 543.0, "High": 549.0, "Low": 541.6, "Close": 548.9, "Volume": 1273372 },
      { "Date": "2014-09-29", "Open": 550.0, "High": 554.2, "Low": 547.0, "Close": 549.3, "Volume": 1767107 },
      { "Date": "2014-09-30", "Open": 549.0, "High": 552.8, "Low": 543.5, "Close": 550.3, "Volume": 1451667 },
      { "Date": "2014-09-31", "Open": 559.4, "High": 559.6, "Low": 554.8, "Close": 559.1, "Volume": 2032887 },
      { "Date": "2014-10-03", "Open": 555.5, "High": 557.9, "Low": 553.2, "Close": 555.2, "Volume": 1378511 },
      { "Date": "2014-10-04", "Open": 553.0, "High": 555.5, "Low": 549.3, "Close": 554.1, "Volume": 1240761 },
      { "Date": "2014-10-05", "Open": 556.8, "High": 556.8, "Low": 544.0, "Close": 545.9, "Volume": 2026740 },
      { "Date": "2014-10-06", "Open": 545.5, "High": 546.9, "Low": 541.0, "Close": 542.0, "Volume": 1329604 },
      { "Date": "2014-10-07", "Open": 546.2, "High": 546.2, "Low": 538.7, "Close": 541.0, "Volume": 1629259 },
      { "Date": "2014-10-10", "Open": 541.5, "High": 549.6, "Low": 541.0, "Close": 547.5, "Volume": 1131546 },
      { "Date": "2014-10-11", "Open": 548.5, "High": 551.9, "Low": 546.3, "Close": 550.3, "Volume": 964866 },
      { "Date": "2014-10-12", "Open": 550.4, "High": 550.5, "Low": 545.2, "Close": 547.3, "Volume": 1126594 },
      { "Date": "2014-10-13", "Open": 549.8, "High": 549.8, "Low": 543.5, "Close": 545.4, "Volume": 1335719 },
      { "Date": "2014-10-14", "Open": 546.7, "High": 546.7, "Low": 542.1, "Close": 544.4, "Volume": 1285991 },
      { "Date": "2014-10-17", "Open": 543.6, "High": 543.8, "Low": 534.1, "Close": 536.5, "Volume": 1721282 },
      { "Date": "2014-10-18", "Open": 537.5, "High": 541.9, "Low": 534.2, "Close": 535.0, "Volume": 1957664 },
      { "Date": "2014-10-19", "Open": 535.0, "High": 538.2, "Low": 530.1, "Close": 537.0, "Volume": 1388440 },
      { "Date": "2014-10-20", "Open": 531.3, "High": 535.1, "Low": 531.1, "Close": 534.8, "Volume": 1559131 },
      { "Date": "2014-10-21", "Open": 541.6, "High": 542.1, "Low": 536.6, "Close": 537.5, "Volume": 2218249 },
      { "Date": "2014-10-24", "Open": 537.6, "High": 542.7, "Low": 535.6, "Close": 539.3, "Volume": 1701682 },
      { "Date": "2014-10-25", "Open": 539.0, "High": 544.0, "Low": 538.6, "Close": 541.1, "Volume": 1784967 },
      { "Date": "2014-10-26", "Open": 540.9, "High": 541.5, "Low": 537.0, "Close": 540.4, "Volume": 1519503 },
      { "Date": "2014-10-28", "Open": 540.6, "High": 542.0, "Low": 536.6, "Close": 541.8, "Volume": 1145231 },
      { "Date": "2014-11-01", "Open": 538.9, "High": 541.4, "Low": 531.9, "Close": 533.8, "Volume": 2109599 },
      { "Date": "2014-11-02", "Open": 533.5, "High": 535.5, "Low": 529.8, "Close": 533.8, "Volume": 1522481 },
      { "Date": "2014-11-03", "Open": 531.4, "High": 536.0, "Low": 529.3, "Close": 531.3, "Volume": 1279288 },
      { "Date": "2014-11-04", "Open": 531.2, "High": 537.3, "Low": 528.6, "Close": 537.3, "Volume": 1392208 },
      { "Date": "2014-11-05", "Open": 531.0, "High": 532.9, "Low": 524.3, "Close": 525.3, "Volume": 2558649 },
      { "Date": "2014-11-08", "Open": 527.1, "High": 531.0, "Low": 523.8, "Close": 527.0, "Volume": 2327127 },
      { "Date": "2014-11-09", "Open": 522.1, "High": 534.2, "Low": 520.5, "Close": 533.4, "Volume": 1871268 },
      { "Date": "2014-11-10", "Open": 533.1, "High": 536.3, "Low": 525.6, "Close": 526.1, "Volume": 1716835 },
      { "Date": "2014-11-11", "Open": 527.8, "High": 533.9, "Low": 527.1, "Close": 528.3, "Volume": 1610964 },
      { "Date": "2014-11-12", "Open": 523.5, "High": 528.5, "Low": 518.7, "Close": 518.7, "Volume": 1989117 },
      { "Date": "2014-11-15", "Open": 522.7, "High": 523.1, "Low": 513.3, "Close": 513.8, "Volume": 2812786 },
      { "Date": "2014-11-16", "Open": 511.6, "High": 513.0, "Low": 489.0, "Close": 495.4, "Volume": 3953371 },
      { "Date": "2014-11-17", "Open": 497.0, "High": 507.0, "Low": 496.8, "Close": 504.9, "Volume": 2875281 },
      { "Date": "2014-11-18", "Open": 513.0, "High": 513.9, "Low": 504.7, "Close": 511.1, "Volume": 2918730 },
      { "Date": "2014-11-19", "Open": 511.5, "High": 517.7, "Low": 506.9, "Close": 516.4, "Volume": 3680148 },
      { "Date": "2014-11-22", "Open": 516.1, "High": 526.5, "Low": 516.1, "Close": 524.9, "Volume": 2723599 },
      { "Date": "2014-11-23", "Open": 527.0, "High": 534.6, "Low": 526.3, "Close": 530.6, "Volume": 2191567 },
      { "Date": "2014-11-24", "Open": 530.5, "High": 531.8, "Low": 527.0, "Close": 528.8, "Volume": 704035 },
      { "Date": "2014-11-26", "Open": 528.8, "High": 534.3, "Low": 527.3, "Close": 534.0, "Volume": 1037727 },
      { "Date": "2014-11-29", "Open": 532.2, "High": 535.5, "Low": 530.0, "Close": 530.3, "Volume": 2276104 },
      { "Date": "2014-11-30", "Open": 528.1, "High": 531.1, "Low": 527.1, "Close": 530.4, "Volume": 873923 },
      { "Date": "2014-11-31", "Open": 531.3, "High": 532.6, "Low": 525.8, "Close": 526.4, "Volume": 1371819 },
      { "Date": "2015-00-02", "Open": 529.0, "High": 531.3, "Low": 524.1, "Close": 524.8, "Volume": 1446662 },
      { "Date": "2015-00-05", "Open": 523.3, "High": 524.3, "Low": 513.1, "Close": 513.9, "Volume": 2054238 },
      { "Date": "2015-00-06", "Open": 515.0, "High": 516.2, "Low": 501.1, "Close": 502.0, "Volume": 2891950 },
      { "Date": "2015-00-07", "Open": 507.0, "High": 507.2, "Low": 499.6, "Close": 501.1, "Volume": 2059366 },
      { "Date": "2015-00-08", "Open": 498.0, "High": 503.5, "Low": 491.0, "Close": 502.7, "Volume": 3344395 },
      { "Date": "2015-00-09", "Open": 504.8, "High": 504.9, "Low": 494.8, "Close": 496.2, "Volume": 2065715 },
      { "Date": "2015-00-12", "Open": 494.9, "High": 496.0, "Low": 487.6, "Close": 492.6, "Volume": 2320446 },
      { "Date": "2015-00-13", "Open": 498.8, "High": 503.0, "Low": 492.4, "Close": 496.2, "Volume": 2365687 },
      { "Date": "2015-00-14", "Open": 494.6, "High": 503.2, "Low": 493.0, "Close": 500.9, "Volume": 2229638 },
      { "Date": "2015-00-15", "Open": 505.6, "High": 505.7, "Low": 497.8, "Close": 501.8, "Volume": 2711355 },
      { "Date": "2015-00-16", "Open": 500.0, "High": 508.2, "Low": 500.0, "Close": 508.1, "Volume": 2292043 },
      { "Date": "2015-00-20", "Open": 511.0, "High": 512.5, "Low": 506.0, "Close": 506.9, "Volume": 2225922 },
      { "Date": "2015-00-21", "Open": 507.3, "High": 519.3, "Low": 506.2, "Close": 518.0, "Volume": 2262455 },
      { "Date": "2015-00-22", "Open": 521.5, "High": 536.3, "Low": 519.7, "Close": 534.4, "Volume": 2669558 },
      { "Date": "2015-00-23", "Open": 535.6, "High": 542.2, "Low": 533.0, "Close": 540.0, "Volume": 2275485 },
      { "Date": "2015-00-26", "Open": 538.5, "High": 539.0, "Low": 529.7, "Close": 535.2, "Volume": 1539524 },
      { "Date": "2015-00-27", "Open": 530.0, "High": 530.7, "Low": 518.2, "Close": 518.6, "Volume": 1898844 },
      { "Date": "2015-00-28", "Open": 522.8, "High": 523.0, "Low": 510.0, "Close": 510.0, "Volume": 1679230 },
      { "Date": "2015-00-29", "Open": 511.0, "High": 511.1, "Low": 501.2, "Close": 510.7, "Volume": 4174924 },
      { "Date": "2015-00-30", "Open": 515.9, "High": 539.9, "Low": 515.5, "Close": 534.5, "Volume": 5590977 },
      { "Date": "2015-01-02", "Open": 531.7, "High": 533.0, "Low": 518.5, "Close": 528.5, "Volume": 2841976 },
      { "Date": "2015-01-03", "Open": 528.0, "High": 533.4, "Low": 523.3, "Close": 529.2, "Volume": 2033085 },
      { "Date": "2015-01-04", "Open": 529.2, "High": 532.7, "Low": 521.3, "Close": 522.8, "Volume": 1659125 },
      { "Date": "2015-01-05", "Open": 523.8, "High": 528.5, "Low": 522.1, "Close": 527.6, "Volume": 1844687 },
      { "Date": "2015-01-06", "Open": 527.6, "High": 537.2, "Low": 526.4, "Close": 531.0, "Volume": 1758650 },
      { "Date": "2015-01-09", "Open": 528.0, "High": 532.0, "Low": 526.0, "Close": 527.8, "Volume": 1264276 },
      { "Date": "2015-01-10", "Open": 529.3, "High": 537.7, "Low": 526.9, "Close": 536.9, "Volume": 1745076 },
      { "Date": "2015-01-11", "Open": 535.3, "High": 538.5, "Low": 533.4, "Close": 536.0, "Volume": 1373970 },
      { "Date": "2015-01-12", "Open": 537.3, "High": 544.8, "Low": 534.7, "Close": 542.9, "Volume": 1615824 },
      { "Date": "2015-01-13", "Open": 543.4, "High": 549.9, "Low": 543.1, "Close": 549.0, "Volume": 1895126 },
      { "Date": "2015-01-17", "Open": 546.8, "High": 550.0, "Low": 541.1, "Close": 542.8, "Volume": 1612439 },
      { "Date": "2015-01-18", "Open": 541.4, "High": 545.5, "Low": 537.5, "Close": 539.7, "Volume": 1449089 },
      { "Date": "2015-01-19", "Open": 538.0, "High": 543.1, "Low": 538.0, "Close": 542.9, "Volume": 987478 },
      { "Date": "2015-01-20", "Open": 543.1, "High": 543.8, "Low": 535.8, "Close": 539.0, "Volume": 1441212 },
      { "Date": "2015-01-23", "Open": 536.0, "High": 536.4, "Low": 529.4, "Close": 531.9, "Volume": 1453907 },
      { "Date": "2015-01-24", "Open": 530.0, "High": 536.8, "Low": 528.3, "Close": 536.1, "Volume": 1002393 },
      { "Date": "2015-01-25", "Open": 535.9, "High": 546.2, "Low": 535.4, "Close": 543.9, "Volume": 1821041 },
      { "Date": "2015-01-26", "Open": 543.2, "High": 556.1, "Low": 541.5, "Close": 555.5, "Volume": 2305219 },
      { "Date": "2015-01-27", "Open": 554.2, "High": 564.7, "Low": 552.9, "Close": 558.4, "Volume": 2403553 },
      { "Date": "2015-02-02", "Open": 560.5, "High": 572.1, "Low": 558.8, "Close": 571.3, "Volume": 2123796 },
      { "Date": "2015-02-03", "Open": 570.5, "High": 575.4, "Low": 566.5, "Close": 573.6, "Volume": 1700084 },
      { "Date": "2015-02-04", "Open": 571.9, "High": 577.1, "Low": 568.0, "Close": 573.4, "Volume": 1871694 },
      { "Date": "2015-02-05", "Open": 575.0, "High": 577.9, "Low": 573.4, "Close": 575.3, "Volume": 1385818 },
      { "Date": "2015-02-06", "Open": 574.9, "High": 576.7, "Low": 566.8, "Close": 567.7, "Volume": 1654561 },
      { "Date": "2015-02-09", "Open": 566.9, "High": 570.3, "Low": 563.5, "Close": 568.9, "Volume": 1059336 },
      { "Date": "2015-02-10", "Open": 564.3, "High": 564.9, "Low": 554.7, "Close": 555.0, "Volume": 1787357 },
      { "Date": "2015-02-11", "Open": 555.1, "High": 558.1, "Low": 550.7, "Close": 551.2, "Volume": 1815763 },
      { "Date": "2015-02-12", "Open": 553.5, "High": 556.4, "Low": 550.5, "Close": 555.5, "Volume": 1385772 },
      { "Date": "2015-02-13", "Open": 553.5, "High": 558.4, "Low": 544.2, "Close": 547.3, "Volume": 1698872 },
      { "Date": "2015-02-16", "Open": 551.0, "High": 556.9, "Low": 546.0, "Close": 554.5, "Volume": 1636493 },
      { "Date": "2015-02-17", "Open": 551.7, "High": 553.8, "Low": 548.0, "Close": 550.8, "Volume": 1800570 },
      { "Date": "2015-02-18", "Open": 552.5, "High": 559.8, "Low": 547.0, "Close": 559.5, "Volume": 2128714 },
      { "Date": "2015-02-19", "Open": 559.4, "High": 560.8, "Low": 556.1, "Close": 558.0, "Volume": 1194049 },
      { "Date": "2015-02-20", "Open": 561.6, "High": 561.7, "Low": 559.0, "Close": 560.4, "Volume": 2609690 },
      { "Date": "2015-02-23", "Open": 560.4, "High": 562.4, "Low": 555.8, "Close": 558.8, "Volume": 1639306 },
      { "Date": "2015-02-24", "Open": 562.6, "High": 574.6, "Low": 561.2, "Close": 570.2, "Volume": 2576234 },
      { "Date": "2015-02-25", "Open": 570.5, "High": 572.3, "Low": 558.7, "Close": 558.8, "Volume": 2146384 },
      { "Date": "2015-02-26", "Open": 557.6, "High": 558.9, "Low": 550.6, "Close": 555.2, "Volume": 1568331 },
      { "Date": "2015-02-27", "Open": 553.0, "High": 555.3, "Low": 548.1, "Close": 548.3, "Volume": 1892323 },
      { "Date": "2015-02-30", "Open": 551.6, "High": 553.5, "Low": 548.2, "Close": 552.0, "Volume": 1283958 },
      { "Date": "2015-02-31", "Open": 550.0, "High": 554.7, "Low": 546.7, "Close": 548.0, "Volume": 1583677 },
      { "Date": "2015-03-01", "Open": 548.6, "High": 551.1, "Low": 539.5, "Close": 542.6, "Volume": 1957718 },
      { "Date": "2015-03-02", "Open": 540.9, "High": 540.9, "Low": 533.9, "Close": 535.5, "Volume": 1711737 },
      { "Date": "2015-03-06", "Open": 532.2, "High": 538.4, "Low": 529.6, "Close": 536.8, "Volume": 1320767 },
      { "Date": "2015-03-07", "Open": 538.1, "High": 542.7, "Low": 536.0, "Close": 537.0, "Volume": 1299298 },
      { "Date": "2015-03-08", "Open": 538.4, "High": 543.9, "Low": 538.4, "Close": 541.6, "Volume": 1175332 },
      { "Date": "2015-03-09", "Open": 541.0, "High": 542.0, "Low": 535.5, "Close": 540.8, "Volume": 1553586 },
      { "Date": "2015-03-10", "Open": 542.3, "High": 542.3, "Low": 537.3, "Close": 540.0, "Volume": 1405574 },
      { "Date": "2015-03-13", "Open": 538.4, "High": 544.1, "Low": 537.3, "Close": 539.2, "Volume": 1640809 },
      { "Date": "2015-03-14", "Open": 536.3, "High": 537.6, "Low": 528.1, "Close": 530.4, "Volume": 2597043 },
      { "Date": "2015-03-15", "Open": 528.7, "High": 534.7, "Low": 523.2, "Close": 532.5, "Volume": 2312512 },
      { "Date": "2015-03-16", "Open": 529.9, "High": 535.6, "Low": 529.6, "Close": 533.8, "Volume": 1296304 },
      { "Date": "2015-03-17", "Open": 528.7, "High": 529.8, "Low": 521.0, "Close": 524.0, "Volume": 2145955 },
      { "Date": "2015-03-20", "Open": 525.6, "High": 536.1, "Low": 524.5, "Close": 535.4, "Volume": 1675487 },
      { "Date": "2015-03-21", "Open": 537.5, "High": 539.4, "Low": 533.7, "Close": 534.0, "Volume": 1839668 },
      { "Date": "2015-03-22", "Open": 534.4, "High": 541.1, "Low": 531.8, "Close": 539.4, "Volume": 1589248 },
      { "Date": "2015-03-23", "Open": 541.0, "High": 551.0, "Low": 540.2, "Close": 547.0, "Volume": 4173376 },
      { "Date": "2015-03-24", "Open": 566.1, "High": 571.1, "Low": 557.3, "Close": 565.1, "Volume": 4919031 },
      { "Date": "2015-03-27", "Open": 563.4, "High": 566.0, "Low": 553.2, "Close": 555.4, "Volume": 2398039 },
      { "Date": "2015-03-28", "Open": 554.6, "High": 556.0, "Low": 550.4, "Close": 553.7, "Volume": 1490983 },
      { "Date": "2015-03-29", "Open": 550.5, "High": 553.7, "Low": 546.9, "Close": 549.1, "Volume": 1698761 },
      { "Date": "2015-03-30", "Open": 547.9, "High": 548.6, "Low": 535.0, "Close": 537.3, "Volume": 2082214 },
      { "Date": "2015-04-01", "Open": 538.4, "High": 539.5, "Low": 532.1, "Close": 537.9, "Volume": 1768181 },
      { "Date": "2015-04-04", "Open": 538.5, "High": 544.1, "Low": 535.1, "Close": 540.8, "Volume": 1307960 },
      { "Date": "2015-04-05", "Open": 538.2, "High": 539.7, "Low": 530.4, "Close": 530.8, "Volume": 1383068 },
      { "Date": "2015-04-06", "Open": 531.2, "High": 532.4, "Low": 521.1, "Close": 524.2, "Volume": 1566987 },
      { "Date": "2015-04-07", "Open": 524.0, "High": 533.5, "Low": 521.8, "Close": 530.7, "Volume": 1546278 },
      { "Date": "2015-04-08", "Open": 536.6, "High": 541.1, "Low": 536.0, "Close": 538.2, "Volume": 1527615 },
      { "Date": "2015-04-11", "Open": 538.4, "High": 542.0, "Low": 535.4, "Close": 535.7, "Volume": 905285 },
      { "Date": "2015-04-12", "Open": 531.6, "High": 533.2, "Low": 525.3, "Close": 529.0, "Volume": 1634174 },
      { "Date": "2015-04-13", "Open": 530.6, "High": 534.3, "Low": 528.7, "Close": 529.6, "Volume": 1253063 },
      { "Date": "2015-04-14", "Open": 533.8, "High": 539.0, "Low": 532.4, "Close": 538.4, "Volume": 1403935 },
      { "Date": "2015-04-15", "Open": 539.2, "High": 539.3, "Low": 530.4, "Close": 533.9, "Volume": 1971343 },
      { "Date": "2015-04-18", "Open": 532.0, "High": 534.8, "Low": 528.9, "Close": 532.3, "Volume": 2003421 },
      { "Date": "2015-04-19", "Open": 534.0, "High": 540.7, "Low": 533.0, "Close": 537.4, "Volume": 1966947 },
      { "Date": "2015-04-20", "Open": 538.5, "High": 542.9, "Low": 533.0, "Close": 539.3, "Volume": 1430826 },
      { "Date": "2015-04-21", "Open": 538.0, "High": 543.8, "Low": 536.0, "Close": 542.5, "Volume": 1462695 },
      { "Date": "2015-04-22", "Open": 540.1, "High": 544.2, "Low": 539.5, "Close": 540.1, "Volume": 1176214 },
      { "Date": "2015-04-26", "Open": 538.1, "High": 539.0, "Low": 529.9, "Close": 532.3, "Volume": 2406512 },
      { "Date": "2015-04-27", "Open": 532.8, "High": 540.5, "Low": 531.7, "Close": 539.8, "Volume": 1525019 },
      { "Date": "2015-04-28", "Open": 538.0, "High": 540.6, "Low": 536.3, "Close": 539.8, "Volume": 1029849 },
      { "Date": "2015-04-29", "Open": 537.4, "High": 538.6, "Low": 531.5, "Close": 532.1, "Volume": 2597407 },
      { "Date": "2015-05-01", "Open": 536.8, "High": 536.8, "Low": 529.8, "Close": 534.0, "Volume": 1904332 },
      { "Date": "2015-05-02", "Open": 532.9, "High": 543.0, "Low": 531.3, "Close": 539.2, "Volume": 1938989 },
      { "Date": "2015-05-03", "Open": 539.9, "High": 543.5, "Low": 537.1, "Close": 540.3, "Volume": 1717036 },
      { "Date": "2015-05-04", "Open": 537.8, "High": 540.6, "Low": 534.3, "Close": 536.7, "Volume": 1348337 },
      { "Date": "2015-05-05", "Open": 536.4, "High": 537.2, "Low": 532.5, "Close": 533.3, "Volume": 1388220 },
      { "Date": "2015-05-08", "Open": 533.3, "High": 534.1, "Low": 526.2, "Close": 526.8, "Volume": 1524139 },
      { "Date": "2015-05-09", "Open": 527.6, "High": 529.2, "Low": 523.0, "Close": 526.7, "Volume": 1455266 },
      { "Date": "2015-05-10", "Open": 529.4, "High": 538.4, "Low": 529.4, "Close": 536.7, "Volume": 1814958 },
      { "Date": "2015-05-11", "Open": 538.4, "High": 539.0, "Low": 533.0, "Close": 534.6, "Volume": 1217536 },
      { "Date": "2015-05-12", "Open": 531.6, "High": 533.1, "Low": 530.2, "Close": 532.3, "Volume": 955789 },
      { "Date": "2015-05-15", "Open": 528.0, "High": 528.3, "Low": 524.0, "Close": 527.2, "Volume": 1632702 },
      { "Date": "2015-05-16", "Open": 528.4, "High": 529.6, "Low": 525.6, "Close": 528.1, "Volume": 1071814 },
      { "Date": "2015-05-17", "Open": 529.4, "High": 531.0, "Low": 525.1, "Close": 529.3, "Volume": 1294216 },
      { "Date": "2015-05-18", "Open": 531.0, "High": 538.1, "Low": 530.8, "Close": 536.7, "Volume": 1833109 },
      { "Date": "2015-05-19", "Open": 537.2, "High": 538.3, "Low": 533.0, "Close": 536.7, "Volume": 1893497 },
      { "Date": "2015-05-22", "Open": 539.6, "High": 543.7, "Low": 537.5, "Close": 538.2, "Volume": 1250282 },
      { "Date": "2015-05-23", "Open": 539.6, "High": 541.5, "Low": 535.3, "Close": 540.5, "Volume": 1197450 },
      { "Date": "2015-05-24", "Open": 540.0, "High": 540.0, "Low": 535.7, "Close": 537.8, "Volume": 1286608 },
      { "Date": "2015-05-25", "Open": 538.9, "High": 540.9, "Low": 535.2, "Close": 535.2, "Volume": 1335697 },
      { "Date": "2015-05-26", "Open": 537.3, "High": 537.8, "Low": 531.4, "Close": 531.7, "Volume": 2109130 },
      { "Date": "2015-05-29", "Open": 525.0, "High": 528.6, "Low": 520.5, "Close": 521.5, "Volume": 1937821 },
      { "Date": "2015-05-30", "Open": 526.0, "High": 526.3, "Low": 520.5, "Close": 520.5, "Volume": 2235595 },
      { "Date": "2015-06-01", "Open": 524.7, "High": 525.7, "Low": 518.2, "Close": 521.8, "Volume": 1961354 },
      { "Date": "2015-06-02", "Open": 521.1, "High": 524.6, "Low": 521.1, "Close": 523.4, "Volume": 1235903 },
      { "Date": "2015-06-06", "Open": 519.5, "High": 525.3, "Low": 519.0, "Close": 522.9, "Volume": 1280525 },
      { "Date": "2015-06-07", "Open": 523.1, "High": 526.2, "Low": 515.2, "Close": 525.0, "Volume": 1597229 },
      { "Date": "2015-06-08", "Open": 521.0, "High": 522.7, "Low": 516.1, "Close": 516.8, "Volume": 1296699 },
      { "Date": "2015-06-09", "Open": 523.1, "High": 523.8, "Low": 520.4, "Close": 520.7, "Volume": 1842347 },
      { "Date": "2015-06-10", "Open": 526.3, "High": 532.6, "Low": 525.5, "Close": 530.1, "Volume": 1956682 },
      { "Date": "2015-06-13", "Open": 532.9, "High": 547.1, "Low": 532.4, "Close": 546.5, "Volume": 2206475 },
      { "Date": "2015-06-14", "Open": 546.8, "High": 565.9, "Low": 546.7, "Close": 561.1, "Volume": 3244066 },
      { "Date": "2015-06-15", "Open": 560.1, "High": 566.5, "Low": 556.8, "Close": 560.2, "Volume": 1784554 },
      { "Date": "2015-06-16", "Open": 565.1, "High": 580.7, "Low": 565.0, "Close": 579.9, "Volume": 4768318 },
      { "Date": "2015-06-17", "Open": 649.0, "High": 674.5, "Low": 645.0, "Close": 672.9, "Volume": 11164943 },
      { "Date": "2015-06-20", "Open": 659.2, "High": 668.9, "Low": 653.0, "Close": 663.0, "Volume": 5860872 },
      { "Date": "2015-06-21", "Open": 655.2, "High": 673.0, "Low": 654.3, "Close": 662.3, "Volume": 3377196 },
      { "Date": "2015-06-22", "Open": 660.9, "High": 678.6, "Low": 659.0, "Close": 662.1, "Volume": 3929309 },
      { "Date": "2015-06-23", "Open": 661.3, "High": 663.6, "Low": 641.0, "Close": 644.3, "Volume": 3029109 },
      { "Date": "2015-06-24", "Open": 647.0, "High": 648.2, "Low": 622.5, "Close": 623.6, "Volume": 3625747 },
      { "Date": "2015-06-27", "Open": 621.0, "High": 634.3, "Low": 620.5, "Close": 627.3, "Volume": 2675381 },
      { "Date": "2015-06-28", "Open": 632.8, "High": 632.8, "Low": 623.3, "Close": 628.0, "Volume": 1727327 },
      { "Date": "2015-06-29", "Open": 628.8, "High": 633.4, "Low": 622.6, "Close": 631.9, "Volume": 1575069 },
      { "Date": "2015-06-30", "Open": 630.0, "High": 635.2, "Low": 622.0, "Close": 632.6, "Volume": 1474203 },
      { "Date": "2015-06-31", "Open": 631.4, "High": 632.9, "Low": 625.5, "Close": 625.6, "Volume": 1706149 },
      { "Date": "2015-07-03", "Open": 625.3, "High": 633.1, "Low": 625.3, "Close": 631.2, "Volume": 1304511 },
      { "Date": "2015-07-04", "Open": 628.4, "High": 634.8, "Low": 627.2, "Close": 629.3, "Volume": 1490881 },
      { "Date": "2015-07-05", "Open": 634.3, "High": 647.9, "Low": 633.2, "Close": 643.8, "Volume": 2334266 },
      { "Date": "2015-07-06", "Open": 645.0, "High": 645.4, "Low": 632.3, "Close": 642.7, "Volume": 1572600 },
      { "Date": "2015-07-07", "Open": 640.2, "High": 642.7, "Low": 629.7, "Close": 635.3, "Volume": 1403865 },
      { "Date": "2015-07-10", "Open": 639.5, "High": 643.4, "Low": 631.3, "Close": 633.7, "Volume": 1809205 },
      { "Date": "2015-07-11", "Open": 669.2, "High": 674.9, "Low": 654.3, "Close": 660.8, "Volume": 5029203 },
      { "Date": "2015-07-12", "Open": 663.1, "High": 665.0, "Low": 652.3, "Close": 659.6, "Volume": 2940803 },
      { "Date": "2015-07-13", "Open": 659.3, "High": 664.5, "Low": 651.7, "Close": 656.5, "Volume": 1810749 },
      { "Date": "2015-07-14", "Open": 655.0, "High": 659.9, "Low": 652.7, "Close": 657.1, "Volume": 1072061 },
      { "Date": "2015-07-17", "Open": 656.8, "High": 661.4, "Low": 651.2, "Close": 660.9, "Volume": 1051699 },
      { "Date": "2015-07-18", "Open": 661.9, "High": 664.0, "Low": 653.5, "Close": 656.1, "Volume": 1456059 },
      { "Date": "2015-07-19", "Open": 656.6, "High": 667.0, "Low": 654.2, "Close": 660.9, "Volume": 2134098 },
      { "Date": "2015-07-20", "Open": 655.5, "High": 663.0, "Low": 642.9, "Close": 646.8, "Volume": 2855299 },
      { "Date": "2015-07-21", "Open": 639.8, "High": 640.0, "Low": 612.3, "Close": 612.5, "Volume": 4265183 },
      { "Date": "2015-07-24", "Open": 573.0, "High": 614.0, "Low": 565.0, "Close": 589.6, "Volume": 5770302 },
      { "Date": "2015-07-25", "Open": 614.9, "High": 617.5, "Low": 581.1, "Close": 582.1, "Volume": 3537966 },
      { "Date": "2015-07-26", "Open": 610.4, "High": 631.7, "Low": 599.0, "Close": 628.6, "Volume": 4235891 },
      { "Date": "2015-07-27", "Open": 639.4, "High": 643.6, "Low": 622.0, "Close": 637.6, "Volume": 3491336 },
      { "Date": "2015-07-28", "Open": 632.8, "High": 636.9, "Low": 624.6, "Close": 630.4, "Volume": 1978733 },
      { "Date": "2015-07-31", "Open": 627.5, "High": 635.8, "Low": 617.7, "Close": 618.3, "Volume": 2176737 },
      { "Date": "2015-08-01", "Open": 602.4, "High": 612.9, "Low": 594.1, "Close": 597.8, "Volume": 3702105 },
      { "Date": "2015-08-02", "Open": 605.6, "High": 614.3, "Low": 599.7, "Close": 614.3, "Volume": 2575620 },
      { "Date": "2015-08-03", "Open": 617.0, "High": 619.7, "Low": 602.8, "Close": 606.3, "Volume": 1759572 },
      { "Date": "2015-08-04", "Open": 600.0, "High": 603.5, "Low": 595.3, "Close": 600.7, "Volume": 2089453 },
      { "Date": "2015-08-08", "Open": 612.5, "High": 616.3, "Low": 604.1, "Close": 614.7, "Volume": 2279538 },
      { "Date": "2015-08-09", "Open": 621.2, "High": 626.5, "Low": 609.6, "Close": 612.7, "Volume": 1702094 },
      { "Date": "2015-08-10", "Open": 613.1, "High": 624.2, "Low": 611.4, "Close": 621.4, "Volume": 1900526 },
      { "Date": "2015-08-11", "Open": 619.8, "High": 625.8, "Low": 617.4, "Close": 625.8, "Volume": 1373545 },
      { "Date": "2015-08-14", "Open": 625.7, "High": 625.9, "Low": 619.4, "Close": 623.2, "Volume": 1702271 },
      { "Date": "2015-08-15", "Open": 626.7, "High": 638.7, "Low": 623.8, "Close": 635.1, "Volume": 2084397 },
      { "Date": "2015-08-16", "Open": 635.5, "High": 638.0, "Low": 632.3, "Close": 636.0, "Volume": 1286454 },
      { "Date": "2015-08-17", "Open": 637.8, "High": 650.9, "Low": 635.0, "Close": 642.9, "Volume": 2274690 },
      { "Date": "2015-08-18", "Open": 636.8, "High": 640.0, "Low": 627.0, "Close": 629.3, "Volume": 5133386 },
      { "Date": "2015-08-21", "Open": 634.4, "High": 636.5, "Low": 625.9, "Close": 635.4, "Volume": 1788506 },
      { "Date": "2015-08-22", "Open": 627.0, "High": 627.5, "Low": 615.4, "Close": 622.7, "Volume": 2562869 },
      { "Date": "2015-08-23", "Open": 622.0, "High": 628.9, "Low": 620.0, "Close": 622.4, "Volume": 1470949 },
      { "Date": "2015-08-24", "Open": 616.6, "High": 627.3, "Low": 612.4, "Close": 625.8, "Volume": 2240098 },
      { "Date": "2015-08-25", "Open": 629.8, "High": 629.8, "Low": 611.0, "Close": 612.0, "Volume": 2174009 },
      { "Date": "2015-08-28", "Open": 610.3, "High": 614.6, "Low": 589.4, "Close": 594.9, "Volume": 3127667 },
      { "Date": "2015-08-29", "Open": 597.3, "High": 605.0, "Low": 590.2, "Close": 595.0, "Volume": 2310284 },
      { "Date": "2015-08-30", "Open": 603.3, "High": 608.8, "Low": 600.7, "Close": 608.4, "Volume": 2413441 },
      { "Date": "2015-09-01", "Open": 608.4, "High": 612.1, "Low": 599.9, "Close": 611.3, "Volume": 1867601 },
      { "Date": "2015-09-02", "Open": 607.2, "High": 627.3, "Low": 603.1, "Close": 626.9, "Volume": 2684805 },
      { "Date": "2015-09-05", "Open": 632.0, "High": 643.0, "Low": 627.0, "Close": 641.5, "Volume": 1787880 },
      { "Date": "2015-09-06", "Open": 638.8, "High": 649.3, "Low": 636.5, "Close": 645.4, "Volume": 2166264 },
      { "Date": "2015-09-07", "Open": 649.2, "High": 650.6, "Low": 632.1, "Close": 642.4, "Volume": 2089776 },
      { "Date": "2015-09-08", "Open": 641.4, "High": 644.5, "Low": 625.6, "Close": 639.2, "Volume": 2180441 },
      { "Date": "2015-09-09", "Open": 640.0, "High": 646.0, "Low": 635.3, "Close": 643.6, "Volume": 1645844 },
      { "Date": "2015-09-12", "Open": 642.1, "High": 648.5, "Low": 639.0, "Close": 646.7, "Volume": 1275206 },
      { "Date": "2015-09-13", "Open": 643.1, "High": 657.8, "Low": 643.1, "Close": 652.3, "Volume": 1790704 },
      { "Date": "2015-09-14", "Open": 653.2, "High": 659.4, "Low": 648.9, "Close": 651.2, "Volume": 1412040 },
      { "Date": "2015-09-15", "Open": 654.7, "High": 663.1, "Low": 654.5, "Close": 661.7, "Volume": 1830524 },
      { "Date": "2015-09-16", "Open": 664.1, "High": 665.0, "Low": 657.2, "Close": 662.2, "Volume": 1606138 },
      { "Date": "2015-09-19", "Open": 661.2, "High": 666.8, "Low": 659.6, "Close": 666.1, "Volume": 1465339 },
      { "Date": "2015-09-20", "Open": 664.0, "High": 664.7, "Low": 644.2, "Close": 650.3, "Volume": 2490016 },
      { "Date": "2015-09-21", "Open": 654.1, "High": 655.9, "Low": 641.7, "Close": 642.6, "Volume": 1791099 },
      { "Date": "2015-09-22", "Open": 646.7, "High": 657.8, "Low": 644.0, "Close": 651.8, "Volume": 3782103 },
      { "Date": "2015-09-23", "Open": 727.5, "High": 730.0, "Low": 701.5, "Close": 702.0, "Volume": 6642504 },
      { "Date": "2015-09-26", "Open": 701.5, "High": 719.1, "Low": 701.3, "Close": 712.8, "Volume": 2701629 },
      { "Date": "2015-09-27", "Open": 707.4, "High": 713.6, "Low": 704.5, "Close": 708.5, "Volume": 2224309 },
      { "Date": "2015-09-28", "Open": 707.3, "High": 713.0, "Low": 703.1, "Close": 713.0, "Volume": 2176623 },
      { "Date": "2015-09-29", "Open": 710.5, "High": 718.3, "Low": 710.0, "Close": 716.9, "Volume": 1454128 },
      { "Date": "2015-09-30", "Open": 715.7, "High": 718.0, "Low": 710.0, "Close": 710.8, "Volume": 1903980 },
      { "Date": "2015-10-02", "Open": 711.1, "High": 721.6, "Low": 705.9, "Close": 721.1, "Volume": 1871073 },
      { "Date": "2015-10-03", "Open": 718.9, "High": 724.6, "Low": 714.7, "Close": 722.2, "Volume": 1560770 },
      { "Date": "2015-10-04", "Open": 722.0, "High": 733.1, "Low": 721.9, "Close": 728.1, "Volume": 1704575 },
      { "Date": "2015-10-05", "Open": 729.5, "High": 739.5, "Low": 729.5, "Close": 731.3, "Volume": 1860367 },
      { "Date": "2015-10-06", "Open": 731.5, "High": 735.4, "Low": 727.0, "Close": 733.8, "Volume": 1509656 },
      { "Date": "2015-10-09", "Open": 730.2, "High": 734.7, "Low": 719.4, "Close": 724.9, "Volume": 2065619 },
      { "Date": "2015-10-10", "Open": 724.4, "High": 730.6, "Low": 718.5, "Close": 728.3, "Volume": 1603937 },
      { "Date": "2015-10-11", "Open": 732.5, "High": 741.0, "Low": 730.2, "Close": 735.4, "Volume": 1366375 },
      { "Date": "2015-10-12", "Open": 731.0, "High": 737.8, "Low": 728.6, "Close": 731.2, "Volume": 1668048 },
      { "Date": "2015-10-13", "Open": 729.2, "High": 731.1, "Low": 716.7, "Close": 717.0, "Volume": 2062982 },
      { "Date": "2015-10-16", "Open": 715.6, "High": 729.5, "Low": 711.3, "Close": 729.0, "Volume": 1891074 },
      { "Date": "2015-10-17", "Open": 729.3, "High": 731.8, "Low": 723.0, "Close": 725.3, "Volume": 1491709 },
      { "Date": "2015-10-18", "Open": 727.6, "High": 741.4, "Low": 727.0, "Close": 740.0, "Volume": 1671588 },
      { "Date": "2015-10-19", "Open": 738.7, "High": 742.0, "Low": 737.4, "Close": 738.4, "Volume": 1327109 },
      { "Date": "2015-10-20", "Open": 746.5, "High": 757.9, "Low": 743.0, "Close": 756.6, "Volume": 2212302 },
      { "Date": "2015-10-23", "Open": 757.5, "High": 762.7, "Low": 751.8, "Close": 756.0, "Volume": 1414487 },
      { "Date": "2015-10-24", "Open": 752.0, "High": 755.3, "Low": 737.6, "Close": 748.3, "Volume": 2333130 },
      { "Date": "2015-10-25", "Open": 748.1, "High": 752.0, "Low": 746.1, "Close": 748.1, "Volume": 1122224 },
      { "Date": "2015-10-27", "Open": 748.5, "High": 753.4, "Low": 747.5, "Close": 750.3, "Volume": 838518 },
      { "Date": "2015-10-30", "Open": 748.8, "High": 754.9, "Low": 741.3, "Close": 742.6, "Volume": 2035261 },
      { "Date": "2015-11-01", "Open": 747.1, "High": 769.0, "Low": 746.7, "Close": 767.0, "Volume": 2129940 },
      { "Date": "2015-11-02", "Open": 768.9, "High": 776.0, "Low": 759.0, "Close": 762.4, "Volume": 2195686 },
      { "Date": "2015-11-03", "Open": 766.0, "High": 769.0, "Low": 745.6, "Close": 752.5, "Volume": 2590641 },
      { "Date": "2015-11-04", "Open": 753.1, "High": 768.5, "Low": 750.0, "Close": 766.8, "Volume": 2757283 },
      { "Date": "2015-11-07", "Open": 767.8, "High": 768.7, "Low": 755.1, "Close": 763.3, "Volume": 1812314 },
      { "Date": "2015-11-08", "Open": 757.9, "High": 764.8, "Low": 754.2, "Close": 762.4, "Volume": 1829475 },
      { "Date": "2015-11-09", "Open": 759.2, "High": 764.2, "Low": 737.0, "Close": 751.6, "Volume": 2699990 },
      { "Date": "2015-11-10", "Open": 752.9, "High": 755.9, "Low": 743.8, "Close": 749.5, "Volume": 1988380 },
      { "Date": "2015-11-11", "Open": 741.2, "High": 745.7, "Low": 736.8, "Close": 738.9, "Volume": 2224410 },
      { "Date": "2015-11-14", "Open": 741.8, "High": 748.7, "Low": 724.2, "Close": 747.8, "Volume": 2412497 },
      { "Date": "2015-11-15", "Open": 753.0, "High": 758.1, "Low": 743.0, "Close": 743.4, "Volume": 2666229 },
      { "Date": "2015-11-16", "Open": 750.0, "High": 760.6, "Low": 739.4, "Close": 758.1, "Volume": 1993251 },
      { "Date": "2015-11-17", "Open": 762.4, "High": 762.7, "Low": 749.0, "Close": 749.4, "Volume": 1553418 },
      { "Date": "2015-11-18", "Open": 746.5, "High": 754.1, "Low": 738.1, "Close": 739.3, "Volume": 3148743 },
      { "Date": "2015-11-21", "Open": 746.1, "High": 750.0, "Low": 740.0, "Close": 747.8, "Volume": 1525703 },
      { "Date": "2015-11-22", "Open": 751.6, "High": 754.9, "Low": 745.5, "Close": 750.0, "Volume": 1365520 },
      { "Date": "2015-11-23", "Open": 753.5, "High": 754.2, "Low": 744.0, "Close": 750.3, "Volume": 1566726 },
      { "Date": "2015-11-24", "Open": 749.5, "High": 751.4, "Low": 746.6, "Close": 748.4, "Volume": 527223 },
      { "Date": "2015-11-28", "Open": 752.9, "High": 763.0, "Low": 749.5, "Close": 762.5, "Volume": 1515716 },
      { "Date": "2015-11-29", "Open": 766.7, "High": 780.0, "Low": 766.4, "Close": 776.6, "Volume": 1765012 },
      { "Date": "2015-11-30", "Open": 776.6, "High": 777.6, "Low": 766.9, "Close": 771.0, "Volume": 1293521 },
      { "Date": "2015-11-31", "Open": 769.5, "High": 769.5, "Low": 758.3, "Close": 758.9, "Volume": 1500923 },
      { "Date": "2016-00-04", "Open": 743.0, "High": 744.1, "Low": 731.3, "Close": 741.8, "Volume": 3258199 },
      { "Date": "2016-00-05", "Open": 746.5, "High": 752.0, "Low": 738.6, "Close": 742.6, "Volume": 1950691 },
      { "Date": "2016-00-06", "Open": 730.0, "High": 747.2, "Low": 728.9, "Close": 743.6, "Volume": 1947034 },
      { "Date": "2016-00-07", "Open": 730.3, "High": 738.5, "Low": 719.1, "Close": 726.4, "Volume": 2963741 },
      { "Date": "2016-00-08", "Open": 731.5, "High": 733.2, "Low": 713.0, "Close": 714.5, "Volume": 2450857 },
      { "Date": "2016-00-11", "Open": 716.6, "High": 718.9, "Low": 703.5, "Close": 716.0, "Volume": 2090621 },
      { "Date": "2016-00-12", "Open": 721.7, "High": 728.8, "Low": 717.3, "Close": 726.1, "Volume": 2024509 },
      { "Date": "2016-00-13", "Open": 730.9, "High": 734.7, "Low": 698.6, "Close": 700.6, "Volume": 2468295 },
      { "Date": "2016-00-14", "Open": 705.4, "High": 721.9, "Low": 689.1, "Close": 714.7, "Volume": 2211853 },
      { "Date": "2016-00-15", "Open": 692.3, "High": 706.7, "Low": 685.4, "Close": 694.5, "Volume": 3592449 },
      { "Date": "2016-00-19", "Open": 703.3, "High": 710.0, "Low": 693.4, "Close": 701.8, "Volume": 2258479 },
      { "Date": "2016-00-20", "Open": 688.6, "High": 706.9, "Low": 673.3, "Close": 698.5, "Volume": 3439386 },
      { "Date": "2016-00-21", "Open": 702.2, "High": 719.2, "Low": 694.5, "Close": 706.6, "Volume": 2410263 },
      { "Date": "2016-00-22", "Open": 723.6, "High": 728.1, "Low": 720.1, "Close": 725.3, "Volume": 2006528 },
      { "Date": "2016-00-25", "Open": 723.6, "High": 729.7, "Low": 710.0, "Close": 711.7, "Volume": 1704641 },
      { "Date": "2016-00-26", "Open": 713.9, "High": 718.3, "Low": 706.5, "Close": 713.0, "Volume": 1324300 },
      { "Date": "2016-00-27", "Open": 713.7, "High": 718.2, "Low": 694.4, "Close": 700.0, "Volume": 2139970 },
      { "Date": "2016-00-28", "Open": 722.2, "High": 733.7, "Low": 712.4, "Close": 731.0, "Volume": 2658016 },
      { "Date": "2016-00-29", "Open": 731.5, "High": 745.0, "Low": 726.8, "Close": 743.0, "Volume": 3394935 },
      { "Date": "2016-01-01", "Open": 750.5, "High": 757.9, "Low": 743.3, "Close": 752.0, "Volume": 4801816 },
      { "Date": "2016-01-02", "Open": 784.5, "High": 789.9, "Low": 764.6, "Close": 764.6, "Volume": 6332431 },
      { "Date": "2016-01-03", "Open": 770.2, "High": 774.5, "Low": 720.5, "Close": 727.0, "Volume": 6162333 },
      { "Date": "2016-01-04", "Open": 722.8, "High": 727.0, "Low": 701.9, "Close": 708.0, "Volume": 5145855 },
      { "Date": "2016-01-05", "Open": 703.9, "High": 704.0, "Low": 680.1, "Close": 683.6, "Volume": 5069985 },
      { "Date": "2016-01-08", "Open": 667.9, "High": 684.0, "Low": 663.1, "Close": 682.7, "Volume": 4212541 },
      { "Date": "2016-01-09", "Open": 672.3, "High": 699.9, "Low": 668.8, "Close": 678.1, "Volume": 3604335 },
      { "Date": "2016-01-10", "Open": 686.9, "High": 701.3, "Low": 682.1, "Close": 684.1, "Volume": 2627379 },
      { "Date": "2016-01-11", "Open": 675.0, "High": 689.4, "Low": 668.9, "Close": 683.1, "Volume": 3007223 },
      { "Date": "2016-01-12", "Open": 690.3, "High": 693.8, "Low": 678.6, "Close": 682.4, "Volume": 2129831 },
      { "Date": "2016-01-16", "Open": 693.0, "High": 698.0, "Low": 685.0, "Close": 691.0, "Volume": 2497024 },
      { "Date": "2016-01-17", "Open": 699.0, "High": 709.8, "Low": 691.4, "Close": 708.4, "Volume": 2466808 },
      { "Date": "2016-01-18", "Open": 710.0, "High": 712.4, "Low": 696.0, "Close": 697.4, "Volume": 1859130 },
      { "Date": "2016-01-19", "Open": 695.0, "High": 703.1, "Low": 694.0, "Close": 700.9, "Volume": 1582260 },
      { "Date": "2016-01-22", "Open": 707.5, "High": 713.2, "Low": 702.5, "Close": 706.5, "Volume": 1946067 },
      { "Date": "2016-01-23", "Open": 701.5, "High": 708.4, "Low": 693.6, "Close": 695.9, "Volume": 1999699 },
      { "Date": "2016-01-24", "Open": 688.9, "High": 700.0, "Low": 680.8, "Close": 699.6, "Volume": 1958611 },
      { "Date": "2016-01-25", "Open": 700.0, "High": 706.0, "Low": 690.6, "Close": 705.8, "Volume": 1631855 },
      { "Date": "2016-01-26", "Open": 708.6, "High": 713.4, "Low": 700.9, "Close": 705.1, "Volume": 2239978 },
      { "Date": "2016-01-29", "Open": 700.3, "High": 710.9, "Low": 697.7, "Close": 697.8, "Volume": 2280280 },
      { "Date": "2016-02-01", "Open": 703.6, "High": 718.8, "Low": 699.8, "Close": 718.8, "Volume": 2147442 },
      { "Date": "2016-02-02", "Open": 719.0, "High": 720.0, "Low": 712.0, "Close": 718.9, "Volume": 1627753 },
      { "Date": "2016-02-03", "Open": 718.7, "High": 719.5, "Low": 706.0, "Close": 712.4, "Volume": 1956761 },
      { "Date": "2016-02-04", "Open": 715.0, "High": 716.5, "Low": 706.0, "Close": 710.9, "Volume": 1967873 },
      { "Date": "2016-02-07", "Open": 706.9, "High": 708.1, "Low": 686.9, "Close": 695.2, "Volume": 2985094 },
      { "Date": "2016-02-08", "Open": 688.6, "High": 703.8, "Low": 685.3, "Close": 694.0, "Volume": 2063357 },
      { "Date": "2016-02-09", "Open": 698.5, "High": 705.7, "Low": 694.0, "Close": 705.2, "Volume": 1418704 },
      { "Date": "2016-02-10", "Open": 708.1, "High": 716.4, "Low": 703.4, "Close": 712.8, "Volume": 2829412 },
      { "Date": "2016-02-11", "Open": 720.0, "High": 726.9, "Low": 717.1, "Close": 726.8, "Volume": 1963907 },
      { "Date": "2016-02-14", "Open": 726.8, "High": 735.5, "Low": 725.1, "Close": 730.5, "Volume": 1716910 },
      { "Date": "2016-02-15", "Open": 726.9, "High": 732.3, "Low": 724.8, "Close": 728.3, "Volume": 1720965 },
      { "Date": "2016-02-16", "Open": 726.4, "High": 737.5, "Low": 724.5, "Close": 736.1, "Volume": 1572329 },
      { "Date": "2016-02-17", "Open": 736.5, "High": 743.1, "Low": 736.0, "Close": 737.8, "Volume": 1856800 },
      { "Date": "2016-02-18", "Open": 741.9, "High": 742.0, "Low": 731.8, "Close": 737.6, "Volume": 2796376 },
      { "Date": "2016-02-21", "Open": 736.5, "High": 742.5, "Low": 733.5, "Close": 742.1, "Volume": 1831839 },
      { "Date": "2016-02-22", "Open": 737.5, "High": 745.0, "Low": 737.5, "Close": 740.8, "Volume": 1264396 },
      { "Date": "2016-02-23", "Open": 742.4, "High": 745.7, "Low": 736.1, "Close": 738.1, "Volume": 1421861 },
      { "Date": "2016-02-24", "Open": 732.0, "High": 737.8, "Low": 731.0, "Close": 735.3, "Volume": 1564782 },
      { "Date": "2016-02-28", "Open": 736.8, "High": 739.0, "Low": 732.5, "Close": 733.5, "Volume": 1299812 },
      { "Date": "2016-02-29", "Open": 734.6, "High": 747.3, "Low": 728.8, "Close": 744.8, "Volume": 1902128 },
      { "Date": "2016-02-30", "Open": 750.1, "High": 757.9, "Low": 748.7, "Close": 750.5, "Volume": 1780998 },
      { "Date": "2016-02-31", "Open": 749.3, "High": 750.9, "Low": 740.9, "Close": 745.0, "Volume": 1712375 },
      { "Date": "2016-03-01", "Open": 738.6, "High": 750.3, "Low": 737.0, "Close": 749.9, "Volume": 1574870 },
      { "Date": "2016-03-04", "Open": 750.1, "High": 752.8, "Low": 742.4, "Close": 745.3, "Volume": 1131843 },
      { "Date": "2016-03-05", "Open": 738.0, "High": 742.8, "Low": 735.4, "Close": 737.8, "Volume": 1129829 },
      { "Date": "2016-03-06", "Open": 735.8, "High": 746.2, "Low": 735.6, "Close": 745.7, "Volume": 1050193 },
      { "Date": "2016-03-07", "Open": 745.4, "High": 747.0, "Low": 736.3, "Close": 740.3, "Volume": 1429504 },
      { "Date": "2016-03-08", "Open": 744.0, "High": 745.5, "Low": 735.5, "Close": 739.1, "Volume": 1285755 },
      { "Date": "2016-03-11", "Open": 743.0, "High": 745.0, "Low": 736.0, "Close": 736.1, "Volume": 1211762 },
      { "Date": "2016-03-12", "Open": 738.0, "High": 743.8, "Low": 731.0, "Close": 743.1, "Volume": 1349734 },
      { "Date": "2016-03-13", "Open": 749.2, "High": 754.4, "Low": 744.3, "Close": 751.7, "Volume": 1707095 },
      { "Date": "2016-03-14", "Open": 754.0, "High": 757.3, "Low": 752.7, "Close": 753.2, "Volume": 1130971 },
      { "Date": "2016-03-15", "Open": 754.0, "High": 761.0, "Low": 752.7, "Close": 759.0, "Volume": 1800413 },
      { "Date": "2016-03-18", "Open": 760.5, "High": 768.0, "Low": 757.3, "Close": 766.6, "Volume": 1555953 },
      { "Date": "2016-03-19", "Open": 769.5, "High": 769.9, "Low": 749.3, "Close": 753.9, "Volume": 2027642 },
      { "Date": "2016-03-20", "Open": 758.0, "High": 758.1, "Low": 750.0, "Close": 752.7, "Volume": 1525591 },
      { "Date": "2016-03-21", "Open": 755.4, "High": 760.5, "Low": 749.5, "Close": 759.1, "Volume": 2743620 },
      { "Date": "2016-03-22", "Open": 726.3, "High": 736.1, "Low": 713.6, "Close": 718.8, "Volume": 5939199 },
      { "Date": "2016-03-25", "Open": 716.1, "High": 723.9, "Low": 715.6, "Close": 723.1, "Volume": 1955567 },
      { "Date": "2016-03-26", "Open": 725.4, "High": 725.8, "Low": 703.0, "Close": 708.1, "Volume": 2727185 },
      { "Date": "2016-03-27", "Open": 707.3, "High": 709.0, "Low": 692.4, "Close": 705.8, "Volume": 3086722 },
      { "Date": "2016-03-28", "Open": 708.3, "High": 714.2, "Low": 689.5, "Close": 691.0, "Volume": 2851108 },
      { "Date": "2016-03-29", "Open": 690.7, "High": 697.6, "Low": 689.0, "Close": 693.0, "Volume": 2484273 },
      { "Date": "2016-04-02", "Open": 697.6, "High": 700.6, "Low": 691.0, "Close": 698.2, "Volume": 1644126 },
      { "Date": "2016-04-03", "Open": 696.9, "High": 697.8, "Low": 692.0, "Close": 692.4, "Volume": 1530993 },
      { "Date": "2016-04-04", "Open": 690.5, "High": 699.8, "Low": 689.0, "Close": 695.7, "Volume": 1688569 },
      { "Date": "2016-04-05", "Open": 697.7, "High": 702.3, "Low": 695.7, "Close": 701.4, "Volume": 1677405 },
      { "Date": "2016-04-06", "Open": 698.4, "High": 711.9, "Low": 698.1, "Close": 711.1, "Volume": 1826146 },
      { "Date": "2016-04-09", "Open": 712.0, "High": 718.7, "Low": 710.0, "Close": 712.9, "Volume": 1508423 },
      { "Date": "2016-04-10", "Open": 716.8, "High": 723.5, "Low": 715.7, "Close": 723.2, "Volume": 1563105 },
      { "Date": "2016-04-11", "Open": 723.4, "High": 724.5, "Low": 712.8, "Close": 715.3, "Volume": 1686823 },
      { "Date": "2016-04-12", "Open": 717.1, "High": 719.3, "Low": 709.0, "Close": 713.3, "Volume": 1360732 },
      { "Date": "2016-04-13", "Open": 711.9, "High": 716.7, "Low": 709.3, "Close": 710.8, "Volume": 1307338 },
      { "Date": "2016-04-16", "Open": 709.1, "High": 718.5, "Low": 705.6, "Close": 716.5, "Volume": 1316177 },
      { "Date": "2016-04-17", "Open": 716.0, "High": 721.5, "Low": 704.1, "Close": 706.2, "Volume": 1999456 },
      { "Date": "2016-04-18", "Open": 703.7, "High": 711.6, "Low": 700.6, "Close": 706.6, "Volume": 1763394 },
      { "Date": "2016-04-19", "Open": 702.4, "High": 706.0, "Low": 696.8, "Close": 700.3, "Volume": 1656321 },
      { "Date": "2016-04-20", "Open": 701.6, "High": 714.6, "Low": 700.5, "Close": 709.7, "Volume": 1816027 },
      { "Date": "2016-04-23", "Open": 706.5, "High": 711.5, "Low": 704.2, "Close": 704.2, "Volume": 1320927 },
      { "Date": "2016-04-24", "Open": 706.9, "High": 721.0, "Low": 706.9, "Close": 720.1, "Volume": 1920411 },
      { "Date": "2016-04-25", "Open": 720.8, "High": 727.5, "Low": 719.7, "Close": 725.3, "Volume": 1629198 },
      { "Date": "2016-04-26", "Open": 722.9, "High": 728.3, "Low": 720.3, "Close": 724.1, "Volume": 1542866 },
      { "Date": "2016-04-27", "Open": 724.0, "High": 733.9, "Low": 724.0, "Close": 732.7, "Volume": 1974026 },
      { "Date": "2016-04-31", "Open": 731.7, "High": 739.7, "Low": 731.3, "Close": 735.7, "Volume": 2129545 },
      { "Date": "2016-05-01", "Open": 734.5, "High": 737.2, "Low": 730.7, "Close": 734.1, "Volume": 1253593 },
      { "Date": "2016-05-02", "Open": 732.5, "High": 733.0, "Low": 724.2, "Close": 730.4, "Volume": 1341807 },
      { "Date": "2016-05-03", "Open": 729.3, "High": 729.5, "Low": 720.6, "Close": 722.3, "Volume": 1226253 },
      { "Date": "2016-05-06", "Open": 724.9, "High": 724.9, "Low": 714.6, "Close": 716.5, "Volume": 1566059 },
      { "Date": "2016-05-07", "Open": 719.8, "High": 722.0, "Low": 716.5, "Close": 716.6, "Volume": 1336754 },
      { "Date": "2016-05-08", "Open": 724.0, "High": 728.6, "Low": 720.6, "Close": 728.3, "Volume": 1583701 },
      { "Date": "2016-05-09", "Open": 722.9, "High": 729.5, "Low": 722.3, "Close": 728.6, "Volume": 988914 },
      { "Date": "2016-05-10", "Open": 719.5, "High": 725.9, "Low": 716.4, "Close": 719.4, "Volume": 1216443 },
      { "Date": "2016-05-13", "Open": 716.5, "High": 725.4, "Low": 716.5, "Close": 718.4, "Volume": 1258930 },
      { "Date": "2016-05-14", "Open": 716.5, "High": 722.5, "Low": 713.1, "Close": 718.3, "Volume": 1306065 },
      { "Date": "2016-05-15", "Open": 719.0, "High": 723.0, "Low": 717.3, "Close": 718.9, "Volume": 1214517 },
      { "Date": "2016-05-16", "Open": 714.9, "High": 716.6, "Low": 703.3, "Close": 710.4, "Volume": 1982471 },
      { "Date": "2016-05-17", "Open": 708.6, "High": 708.8, "Low": 688.5, "Close": 691.7, "Volume": 3402357 },
      { "Date": "2016-05-20", "Open": 698.8, "High": 702.5, "Low": 693.4, "Close": 693.7, "Volume": 2082538 },
      { "Date": "2016-05-21", "Open": 698.4, "High": 702.8, "Low": 692.0, "Close": 695.9, "Volume": 1465634 },
      { "Date": "2016-05-22", "Open": 699.1, "High": 700.9, "Low": 693.1, "Close": 697.5, "Volume": 1184318 },
      { "Date": "2016-05-23", "Open": 697.5, "High": 702.0, "Low": 687.0, "Close": 701.9, "Volume": 2171415 },
      { "Date": "2016-05-24", "Open": 675.2, "High": 689.4, "Low": 673.5, "Close": 675.2, "Volume": 4449022 },
      { "Date": "2016-05-27", "Open": 671.0, "High": 672.3, "Low": 663.3, "Close": 668.3, "Volume": 2641085 },
      { "Date": "2016-05-28", "Open": 679.0, "High": 680.3, "Low": 673.0, "Close": 680.0, "Volume": 2173762 },
      { "Date": "2016-05-29", "Open": 683.0, "High": 687.4, "Low": 681.4, "Close": 684.1, "Volume": 1932561 },
      { "Date": "2016-05-30", "Open": 685.5, "High": 692.3, "Low": 683.6, "Close": 692.1, "Volume": 1597714 },
      { "Date": "2016-06-01", "Open": 692.2, "High": 700.6, "Low": 692.1, "Close": 699.2, "Volume": 1344710 },
      { "Date": "2016-06-05", "Open": 696.1, "High": 696.9, "Low": 688.9, "Close": 694.5, "Volume": 1462616 },
      { "Date": "2016-06-06", "Open": 690.0, "High": 701.7, "Low": 689.1, "Close": 697.8, "Volume": 1411925 },
      { "Date": "2016-06-07", "Open": 698.1, "High": 698.2, "Low": 688.2, "Close": 695.4, "Volume": 1304200 },
      { "Date": "2016-06-08", "Open": 699.5, "High": 705.7, "Low": 696.4, "Close": 705.6, "Volume": 1575166 },
      { "Date": "2016-06-11", "Open": 708.0, "High": 716.5, "Low": 707.2, "Close": 715.1, "Volume": 1111762 },
      { "Date": "2016-06-12", "Open": 719.1, "High": 722.9, "Low": 715.9, "Close": 720.6, "Volume": 1336921 },
      { "Date": "2016-06-13", "Open": 723.6, "High": 724.0, "Low": 716.9, "Close": 717.0, "Volume": 935876 },
      { "Date": "2016-06-14", "Open": 721.6, "High": 722.2, "Low": 718.0, "Close": 721.0, "Volume": 950193 },
      { "Date": "2016-06-15", "Open": 725.7, "High": 725.7, "Low": 719.1, "Close": 719.9, "Volume": 1279339 },
      { "Date": "2016-06-18", "Open": 722.7, "High": 736.1, "Low": 721.2, "Close": 733.8, "Volume": 1295476 },
      { "Date": "2016-06-19", "Open": 729.9, "High": 737.0, "Low": 729.0, "Close": 737.0, "Volume": 1227486 },
      { "Date": "2016-06-20", "Open": 737.3, "High": 742.1, "Low": 737.1, "Close": 741.2, "Volume": 1289671 },
      { "Date": "2016-06-21", "Open": 740.4, "High": 741.7, "Low": 735.8, "Close": 738.6, "Volume": 1026306 },
      { "Date": "2016-06-22", "Open": 741.9, "High": 743.2, "Low": 736.6, "Close": 742.7, "Volume": 1259823 },
      { "Date": "2016-06-25", "Open": 740.7, "High": 742.6, "Low": 737.5, "Close": 739.8, "Volume": 1032432 },
      { "Date": "2016-06-26", "Open": 739.0, "High": 741.7, "Low": 734.3, "Close": 738.4, "Volume": 1186738 },
      { "Date": "2016-06-27", "Open": 738.3, "High": 744.5, "Low": 737.0, "Close": 741.8, "Volume": 1512517 },
      { "Date": "2016-06-28", "Open": 747.0, "High": 748.6, "Low": 739.3, "Close": 745.9, "Volume": 3530169 },
      { "Date": "2016-06-29", "Open": 772.7, "High": 778.5, "Low": 766.8, "Close": 768.8, "Volume": 3841482 },
      { "Date": "2016-07-01", "Open": 761.1, "High": 780.4, "Low": 761.1, "Close": 772.9, "Volume": 2700470 },
      { "Date": "2016-07-02", "Open": 768.7, "High": 775.8, "Low": 767.9, "Close": 771.1, "Volume": 1784525 },
      { "Date": "2016-07-03", "Open": 767.2, "High": 773.2, "Low": 766.8, "Close": 773.2, "Volume": 1287421 },
      { "Date": "2016-07-04", "Open": 772.2, "High": 774.1, "Low": 768.8, "Close": 771.6, "Volume": 1140254 },
      { "Date": "2016-07-05", "Open": 773.8, "High": 783.0, "Low": 772.3, "Close": 782.2, "Volume": 1801205 },
      { "Date": "2016-07-08", "Open": 782.0, "High": 782.6, "Low": 778.1, "Close": 781.8, "Volume": 1107857 },
      { "Date": "2016-07-09", "Open": 781.1, "High": 788.9, "Low": 780.6, "Close": 784.3, "Volume": 1318894 },
      { "Date": "2016-07-10", "Open": 783.8, "High": 786.8, "Low": 782.8, "Close": 784.7, "Volume": 786363 },
      { "Date": "2016-07-11", "Open": 785.0, "High": 789.8, "Low": 783.0, "Close": 784.9, "Volume": 975113 },
      { "Date": "2016-07-12", "Open": 781.5, "High": 783.4, "Low": 780.4, "Close": 783.2, "Volume": 740498 },
      { "Date": "2016-07-15", "Open": 783.8, "High": 787.5, "Low": 780.1, "Close": 782.4, "Volume": 938186 },
      { "Date": "2016-07-16", "Open": 780.3, "High": 781.0, "Low": 773.4, "Close": 777.1, "Volume": 1028047 },
      { "Date": "2016-07-17", "Open": 777.3, "High": 780.8, "Low": 773.5, "Close": 779.9, "Volume": 924226 },
      { "Date": "2016-07-18", "Open": 780.0, "High": 782.9, "Low": 777.0, "Close": 777.5, "Volume": 719429 },
      { "Date": "2016-07-19", "Open": 775.0, "High": 777.1, "Low": 773.1, "Close": 775.4, "Volume": 861546 },
      { "Date": "2016-07-22", "Open": 773.3, "High": 774.5, "Low": 770.0, "Close": 772.1, "Volume": 951362 },
      { "Date": "2016-07-23", "Open": 775.5, "High": 776.4, "Low": 771.8, "Close": 772.1, "Volume": 928232 },
      { "Date": "2016-07-24", "Open": 770.6, "High": 774.5, "Low": 767.1, "Close": 769.6, "Volume": 1071999 },
      { "Date": "2016-07-25", "Open": 767.0, "High": 771.9, "Low": 763.2, "Close": 769.4, "Volume": 926883 },
      { "Date": "2016-07-26", "Open": 769.0, "High": 776.1, "Low": 765.9, "Close": 769.5, "Volume": 1166681 },
      { "Date": "2016-07-29", "Open": 768.7, "High": 775.0, "Low": 766.6, "Close": 772.1, "Volume": 847565 },
      { "Date": "2016-07-30", "Open": 769.3, "High": 774.5, "Low": 766.8, "Close": 769.1, "Volume": 1130029 },
      { "Date": "2016-07-31", "Open": 767.0, "High": 769.1, "Low": 765.4, "Close": 767.0, "Volume": 1248556 },
      { "Date": "2016-08-01", "Open": 769.3, "High": 771.0, "Low": 764.3, "Close": 768.8, "Volume": 925131 },
      { "Date": "2016-08-02", "Open": 773.0, "High": 773.9, "Low": 768.4, "Close": 771.5, "Volume": 1072658 },
      { "Date": "2016-08-06", "Open": 773.5, "High": 782.0, "Low": 771.0, "Close": 780.1, "Volume": 1442822 },
      { "Date": "2016-08-07", "Open": 780.0, "High": 782.7, "Low": 776.2, "Close": 780.4, "Volume": 894021 },
      { "Date": "2016-08-08", "Open": 778.6, "High": 780.4, "Low": 773.6, "Close": 775.3, "Volume": 1270264 },
      { "Date": "2016-08-09", "Open": 770.1, "High": 773.2, "Low": 759.7, "Close": 759.7, "Volume": 1885496 },
      { "Date": "2016-08-12", "Open": 755.1, "High": 770.3, "Low": 754.0, "Close": 769.0, "Volume": 1310986 },
      { "Date": "2016-08-13", "Open": 764.5, "High": 766.2, "Low": 755.8, "Close": 759.7, "Volume": 1395046 },
      { "Date": "2016-08-14", "Open": 759.6, "High": 767.7, "Low": 759.1, "Close": 762.5, "Volume": 1094490 },
      { "Date": "2016-08-15", "Open": 762.9, "High": 773.8, "Low": 760.0, "Close": 771.8, "Volume": 1346751 },
      { "Date": "2016-08-16", "Open": 769.8, "High": 769.8, "Low": 764.7, "Close": 768.9, "Volume": 2049338 },
      { "Date": "2016-08-19", "Open": 772.4, "High": 774.0, "Low": 764.4, "Close": 765.7, "Volume": 1172824 },
      { "Date": "2016-08-20", "Open": 769.0, "High": 773.3, "Low": 768.5, "Close": 771.4, "Volume": 978631 },
      { "Date": "2016-08-21", "Open": 772.7, "High": 777.2, "Low": 768.3, "Close": 776.2, "Volume": 1167810 },
      { "Date": "2016-08-22", "Open": 780.0, "High": 789.9, "Low": 778.4, "Close": 787.2, "Volume": 1486223 },
      { "Date": "2016-08-23", "Open": 786.6, "High": 788.9, "Low": 784.1, "Close": 786.9, "Volume": 1411937 },
      { "Date": "2016-08-26", "Open": 782.7, "High": 782.7, "Low": 773.1, "Close": 774.2, "Volume": 1533206 },
      { "Date": "2016-08-27", "Open": 775.5, "High": 786.0, "Low": 774.3, "Close": 783.0, "Volume": 1153247 },
      { "Date": "2016-08-28", "Open": 777.9, "High": 781.8, "Low": 775.0, "Close": 781.6, "Volume": 1109834 },
      { "Date": "2016-08-29", "Open": 781.4, "High": 785.8, "Low": 774.2, "Close": 775.0, "Volume": 1314746 },
      { "Date": "2016-08-30", "Open": 776.3, "High": 780.9, "Low": 774.1, "Close": 777.3, "Volume": 1585333 },
      { "Date": "2016-09-03", "Open": 774.3, "High": 776.1, "Low": 769.5, "Close": 772.6, "Volume": 1278821 },
      { "Date": "2016-09-04", "Open": 776.0, "High": 778.7, "Low": 772.9, "Close": 776.4, "Volume": 1201350 },
      { "Date": "2016-09-05", "Open": 779.3, "High": 782.1, "Low": 775.6, "Close": 776.5, "Volume": 1461151 },
      { "Date": "2016-09-06", "Open": 779.0, "High": 780.5, "Low": 775.5, "Close": 776.9, "Volume": 1070692 },
      { "Date": "2016-09-07", "Open": 779.7, "High": 779.7, "Low": 770.8, "Close": 775.1, "Volume": 933158 },
      { "Date": "2016-09-10", "Open": 777.7, "High": 789.4, "Low": 775.9, "Close": 785.9, "Volume": 1174923 },
      { "Date": "2016-09-11", "Open": 786.7, "High": 792.3, "Low": 780.6, "Close": 783.1, "Volume": 1372461 },
      { "Date": "2016-09-12", "Open": 783.8, "High": 788.1, "Low": 782.1, "Close": 786.1, "Volume": 937435 },
      { "Date": "2016-09-13", "Open": 781.2, "High": 781.2, "Low": 773.0, "Close": 778.2, "Volume": 1365277 },
      { "Date": "2016-09-14", "Open": 781.6, "High": 784.0, "Low": 776.0, "Close": 778.5, "Volume": 852487 },
      { "Date": "2016-09-17", "Open": 779.8, "High": 785.9, "Low": 777.5, "Close": 780.0, "Volume": 1092973 },
      { "Date": "2016-09-18", "Open": 787.9, "High": 801.6, "Low": 785.6, "Close": 795.3, "Volume": 2056903 },
      { "Date": "2016-09-19", "Open": 798.9, "High": 804.6, "Low": 797.6, "Close": 801.6, "Volume": 1766798 },
      { "Date": "2016-09-20", "Open": 803.3, "High": 804.0, "Low": 796.0, "Close": 797.0, "Volume": 1757528 },
      { "Date": "2016-09-21", "Open": 795.0, "High": 799.5, "Low": 794.0, "Close": 799.4, "Volume": 1266181 },
      { "Date": "2016-09-24", "Open": 804.9, "High": 815.2, "Low": 804.8, "Close": 813.1, "Volume": 1697514 },
      { "Date": "2016-09-25", "Open": 816.7, "High": 816.7, "Low": 805.1, "Close": 807.7, "Volume": 1576404 },
      { "Date": "2016-09-26", "Open": 806.3, "High": 807.0, "Low": 796.3, "Close": 799.1, "Volume": 1647733 },
      { "Date": "2016-09-27", "Open": 801.0, "High": 803.5, "Low": 791.5, "Close": 795.4, "Volume": 2749221 },
      { "Date": "2016-09-28", "Open": 808.4, "High": 815.5, "Low": 793.6, "Close": 795.4, "Volume": 4269902 },
      { "Date": "2016-09-31", "Open": 795.5, "High": 796.9, "Low": 784.0, "Close": 784.5, "Volume": 2427284 },
      { "Date": "2016-10-01", "Open": 782.9, "High": 789.5, "Low": 775.5, "Close": 783.6, "Volume": 2406356 },
      { "Date": "2016-10-02", "Open": 778.2, "High": 781.6, "Low": 763.5, "Close": 768.7, "Volume": 1918414 },
      { "Date": "2016-10-03", "Open": 767.3, "High": 770.0, "Low": 759.0, "Close": 762.1, "Volume": 1943175 },
      { "Date": "2016-10-04", "Open": 750.7, "High": 770.4, "Low": 750.6, "Close": 762.0, "Volume": 2134812 },
      { "Date": "2016-10-07", "Open": 774.5, "High": 785.2, "Low": 772.5, "Close": 782.5, "Volume": 1585070 },
      { "Date": "2016-10-08", "Open": 783.4, "High": 795.6, "Low": 780.2, "Close": 790.5, "Volume": 1366873 },
      { "Date": "2016-10-09", "Open": 779.9, "High": 791.2, "Low": 771.7, "Close": 785.3, "Volume": 2607121 },
      { "Date": "2016-10-10", "Open": 791.2, "High": 791.2, "Low": 752.2, "Close": 762.6, "Volume": 4745183 },
      { "Date": "2016-10-11", "Open": 756.5, "High": 760.8, "Low": 750.4, "Close": 754.0, "Volume": 2431815 },
      { "Date": "2016-10-14", "Open": 755.6, "High": 757.9, "Low": 727.5, "Close": 736.1, "Volume": 3654385 },
      { "Date": "2016-10-15", "Open": 747.0, "High": 764.4, "Low": 747.0, "Close": 758.5, "Volume": 2384001 },
      { "Date": "2016-10-16", "Open": 755.2, "High": 766.4, "Low": 750.5, "Close": 764.5, "Volume": 1472594 },
      { "Date": "2016-10-17", "Open": 766.9, "High": 772.7, "Low": 764.2, "Close": 771.2, "Volume": 1286961 },
      { "Date": "2016-10-18", "Open": 771.4, "High": 775.0, "Low": 760.0, "Close": 760.5, "Volume": 1547145 },
      { "Date": "2016-10-21", "Open": 762.6, "High": 769.7, "Low": 760.6, "Close": 769.2, "Volume": 1330639 },
      { "Date": "2016-10-22", "Open": 772.6, "High": 777.0, "Low": 767.0, "Close": 768.3, "Volume": 1593108 },
      { "Date": "2016-10-23", "Open": 767.7, "High": 768.3, "Low": 755.3, "Close": 761.0, "Volume": 1478417 },
      { "Date": "2016-10-25", "Open": 764.3, "High": 765.0, "Low": 760.5, "Close": 761.7, "Volume": 587421 },
      { "Date": "2016-10-28", "Open": 760.0, "High": 779.5, "Low": 759.8, "Close": 768.2, "Volume": 2188151 },
      { "Date": "2016-10-29", "Open": 771.5, "High": 778.5, "Low": 768.2, "Close": 770.8, "Volume": 1616618 },
      { "Date": "2016-10-30", "Open": 770.1, "High": 773.0, "Low": 754.8, "Close": 758.0, "Volume": 2392890 },
      { "Date": "2016-11-01", "Open": 757.4, "High": 759.9, "Low": 737.0, "Close": 747.9, "Volume": 3017947 },
      { "Date": "2016-11-02", "Open": 744.6, "High": 754.0, "Low": 743.1, "Close": 750.5, "Volume": 1452484 },
      { "Date": "2016-11-05", "Open": 757.7, "High": 763.9, "Low": 752.9, "Close": 762.5, "Volume": 1394223 },
      { "Date": "2016-11-06", "Open": 764.7, "High": 768.8, "Low": 757.3, "Close": 759.1, "Volume": 1690689 },
      { "Date": "2016-11-07", "Open": 761.0, "High": 771.4, "Low": 755.8, "Close": 771.2, "Volume": 1760966 },
      { "Date": "2016-11-08", "Open": 772.5, "High": 778.2, "Low": 767.2, "Close": 776.4, "Volume": 1488059 },
      { "Date": "2016-11-09", "Open": 780.0, "High": 789.4, "Low": 779.0, "Close": 789.3, "Volume": 1821914 },
      { "Date": "2016-11-12", "Open": 785.0, "High": 791.3, "Low": 784.4, "Close": 789.3, "Volume": 2104117 },
      { "Date": "2016-11-13", "Open": 793.9, "High": 804.4, "Low": 793.3, "Close": 796.1, "Volume": 2145209 },
      { "Date": "2016-11-14", "Open": 797.4, "High": 804.0, "Low": 794.0, "Close": 797.1, "Volume": 1704150 },
      { "Date": "2016-11-15", "Open": 797.3, "High": 803.0, "Low": 792.9, "Close": 797.9, "Volume": 1626499 },
      { "Date": "2016-11-16", "Open": 800.4, "High": 800.9, "Low": 790.3, "Close": 790.8, "Volume": 2443796 },
      { "Date": "2016-11-19", "Open": 790.2, "High": 797.7, "Low": 786.3, "Close": 794.2, "Volume": 1232087 },
      { "Date": "2016-11-20", "Open": 796.8, "High": 798.6, "Low": 793.3, "Close": 796.4, "Volume": 951014 },
      { "Date": "2016-11-21", "Open": 795.8, "High": 796.7, "Low": 787.1, "Close": 794.6, "Volume": 1211346 },
      { "Date": "2016-11-22", "Open": 792.4, "High": 793.3, "Low": 788.6, "Close": 791.3, "Volume": 972169 },
      { "Date": "2016-11-23", "Open": 790.9, "High": 792.7, "Low": 787.3, "Close": 789.9, "Volume": 623944 },
      { "Date": "2016-11-27", "Open": 790.7, "High": 797.9, "Low": 787.7, "Close": 791.5, "Volume": 789321 },
      { "Date": "2016-11-28", "Open": 793.7, "High": 794.2, "Low": 783.2, "Close": 785.0, "Volume": 1153824 },
      { "Date": "2016-11-29", "Open": 783.3, "High": 785.9, "Low": 778.9, "Close": 782.8, "Volume": 744272 },
      { "Date": "2016-11-30", "Open": 782.8, "High": 782.8, "Low": 770.4, "Close": 771.8, "Volume": 1769950 },
      { "Date": "2017-00-03", "Open": 778.8, "High": 789.6, "Low": 775.8, "Close": 786.1, "Volume": 1657268 },
      { "Date": "2017-00-04", "Open": 788.4, "High": 791.3, "Low": 783.2, "Close": 786.9, "Volume": 1072958 },
      { "Date": "2017-00-05", "Open": 786.1, "High": 794.5, "Low": 785.0, "Close": 794.0, "Volume": 1335167 },
      { "Date": "2017-00-06", "Open": 795.3, "High": 807.9, "Low": 792.2, "Close": 806.1, "Volume": 1640170 },
      { "Date": "2017-00-09", "Open": 806.4, "High": 810.0, "Low": 802.8, "Close": 806.6, "Volume": 1274645 },
      { "Date": "2017-00-10", "Open": 807.9, "High": 809.1, "Low": 803.5, "Close": 804.8, "Volume": 1176780 },
      { "Date": "2017-00-11", "Open": 805.0, "High": 808.1, "Low": 801.4, "Close": 807.9, "Volume": 1065936 },
      { "Date": "2017-00-12", "Open": 807.1, "High": 807.4, "Low": 799.2, "Close": 806.4, "Volume": 1353057 },
      { "Date": "2017-00-13", "Open": 807.5, "High": 811.2, "Low": 806.7, "Close": 807.9, "Volume": 1099215 },
      { "Date": "2017-00-17", "Open": 807.1, "High": 807.1, "Low": 800.4, "Close": 804.6, "Volume": 1362115 },
      { "Date": "2017-00-18", "Open": 805.8, "High": 806.2, "Low": 801.0, "Close": 806.1, "Volume": 1294407 },
      { "Date": "2017-00-19", "Open": 805.1, "High": 809.5, "Low": 801.8, "Close": 802.2, "Volume": 919325 },
      { "Date": "2017-00-20", "Open": 806.9, "High": 806.9, "Low": 801.7, "Close": 805.0, "Volume": 1670045 },
      { "Date": "2017-00-23", "Open": 807.3, "High": 820.9, "Low": 803.7, "Close": 819.3, "Volume": 1963628 },
      { "Date": "2017-00-24", "Open": 822.3, "High": 825.9, "Low": 817.8, "Close": 823.9, "Volume": 1474010 },
      { "Date": "2017-00-25", "Open": 829.6, "High": 835.8, "Low": 825.1, "Close": 835.7, "Volume": 1627304 },
      { "Date": "2017-00-26", "Open": 837.8, "High": 838.0, "Low": 827.0, "Close": 832.1, "Volume": 2973891 },
      { "Date": "2017-00-27", "Open": 834.7, "High": 842.0, "Low": 820.4, "Close": 823.3, "Volume": 2965771 },
      { "Date": "2017-00-30", "Open": 814.7, "High": 815.8, "Low": 799.8, "Close": 802.3, "Volume": 3246573 },
      { "Date": "2017-00-31", "Open": 796.9, "High": 801.3, "Low": 790.5, "Close": 796.8, "Volume": 2160556 },
      { "Date": "2017-01-01", "Open": 799.7, "High": 801.2, "Low": 791.2, "Close": 795.7, "Volume": 2029744 },
      { "Date": "2017-01-02", "Open": 793.8, "High": 802.7, "Low": 792.0, "Close": 798.5, "Volume": 1532138 },
      { "Date": "2017-01-03", "Open": 803.0, "High": 806.0, "Low": 800.4, "Close": 801.5, "Volume": 1463448 },
      { "Date": "2017-01-06", "Open": 799.7, "High": 801.7, "Low": 795.3, "Close": 801.3, "Volume": 1184483 },
      { "Date": "2017-01-07", "Open": 804.0, "High": 810.5, "Low": 801.8, "Close": 807.0, "Volume": 1241221 },
      { "Date": "2017-01-08", "Open": 807.0, "High": 811.8, "Low": 803.2, "Close": 808.4, "Volume": 1155990 },
      { "Date": "2017-01-09", "Open": 809.5, "High": 810.7, "Low": 804.5, "Close": 809.6, "Volume": 990391 },
      { "Date": "2017-01-10", "Open": 811.7, "High": 815.3, "Low": 809.8, "Close": 813.7, "Volume": 1134976 },
      { "Date": "2017-01-13", "Open": 816.0, "High": 821.0, "Low": 815.5, "Close": 819.2, "Volume": 1213324 },
      { "Date": "2017-01-14", "Open": 819.0, "High": 823.0, "Low": 816.0, "Close": 820.5, "Volume": 1054732 },
      { "Date": "2017-01-15", "Open": 819.4, "High": 823.0, "Low": 818.5, "Close": 819.0, "Volume": 1313617 },
      { "Date": "2017-01-16", "Open": 819.9, "High": 824.4, "Low": 819.0, "Close": 824.2, "Volume": 1287626 },
      { "Date": "2017-01-17", "Open": 823.0, "High": 828.1, "Low": 821.7, "Close": 828.1, "Volume": 1611039 },
      { "Date": "2017-01-21", "Open": 828.7, "High": 833.5, "Low": 828.4, "Close": 831.7, "Volume": 1262337 },
      { "Date": "2017-01-22", "Open": 828.7, "High": 833.3, "Low": 828.6, "Close": 830.8, "Volume": 987248 },
      { "Date": "2017-01-23", "Open": 830.1, "High": 832.5, "Low": 822.9, "Close": 831.3, "Volume": 1472771 },
      { "Date": "2017-01-24", "Open": 827.7, "High": 829.0, "Low": 824.2, "Close": 828.6, "Volume": 1392202 },
      { "Date": "2017-01-27", "Open": 824.5, "High": 830.5, "Low": 824.0, "Close": 829.3, "Volume": 1101466 },
      { "Date": "2017-01-28", "Open": 825.6, "High": 828.5, "Low": 820.2, "Close": 823.2, "Volume": 2260769 },
      { "Date": "2017-02-01", "Open": 828.9, "High": 836.3, "Low": 827.3, "Close": 835.2, "Volume": 1496540 },
      { "Date": "2017-02-02", "Open": 833.9, "High": 834.5, "Low": 829.6, "Close": 830.6, "Volume": 942476 },
      { "Date": "2017-02-03", "Open": 830.6, "High": 831.4, "Low": 825.8, "Close": 829.1, "Volume": 896378 },
      { "Date": "2017-02-06", "Open": 827.0, "High": 828.9, "Low": 822.4, "Close": 827.8, "Volume": 1109037 },
      { "Date": "2017-02-07", "Open": 827.4, "High": 833.4, "Low": 826.5, "Close": 831.9, "Volume": 1037630 },
      { "Date": "2017-02-08", "Open": 833.5, "High": 838.1, "Low": 831.8, "Close": 835.4, "Volume": 989773 },
      { "Date": "2017-02-09", "Open": 836.0, "High": 842.0, "Low": 834.2, "Close": 838.7, "Volume": 1261517 },
      { "Date": "2017-02-10", "Open": 843.3, "High": 844.9, "Low": 839.5, "Close": 843.3, "Volume": 1704024 },
      { "Date": "2017-02-13", "Open": 844.0, "High": 848.7, "Low": 843.3, "Close": 845.5, "Volume": 1223647 },
      { "Date": "2017-02-14", "Open": 843.6, "High": 847.2, "Low": 840.8, "Close": 845.6, "Volume": 780198 },
      { "Date": "2017-02-15", "Open": 847.6, "High": 848.6, "Low": 840.8, "Close": 847.2, "Volume": 1381474 },
      { "Date": "2017-02-16", "Open": 849.0, "High": 850.9, "Low": 846.1, "Close": 848.8, "Volume": 977560 },
      { "Date": "2017-02-17", "Open": 851.6, "High": 853.4, "Low": 847.1, "Close": 852.1, "Volume": 1716471 },
      { "Date": "2017-02-20", "Open": 850.0, "High": 850.2, "Low": 845.1, "Close": 848.4, "Volume": 1231521 },
      { "Date": "2017-02-21", "Open": 851.4, "High": 853.5, "Low": 829.0, "Close": 830.5, "Volume": 2463484 },
      { "Date": "2017-02-22", "Open": 831.9, "High": 835.5, "Low": 827.2, "Close": 829.6, "Volume": 1401465 },
      { "Date": "2017-02-23", "Open": 821.0, "High": 822.6, "Low": 812.3, "Close": 817.6, "Volume": 3487056 },
      { "Date": "2017-02-24", "Open": 820.1, "High": 821.9, "Low": 808.9, "Close": 814.4, "Volume": 1981006 },
      { "Date": "2017-02-27", "Open": 807.0, "High": 821.6, "Low": 803.4, "Close": 819.5, "Volume": 1894990 },
      { "Date": "2017-02-28", "Open": 820.4, "High": 826.0, "Low": 814.0, "Close": 820.9, "Volume": 1620542 },
      { "Date": "2017-02-29", "Open": 825.0, "High": 832.8, "Low": 822.4, "Close": 831.4, "Volume": 1786321 },
      { "Date": "2017-02-30", "Open": 833.5, "High": 833.7, "Low": 829.0, "Close": 831.5, "Volume": 1055339 },
      { "Date": "2017-02-31", "Open": 829.0, "High": 831.6, "Low": 827.4, "Close": 829.6, "Volume": 1401893 },
      { "Date": "2017-03-03", "Open": 829.2, "High": 840.9, "Low": 829.2, "Close": 838.5, "Volume": 1671503 },
      { "Date": "2017-03-04", "Open": 831.4, "High": 835.2, "Low": 829.0, "Close": 834.6, "Volume": 1045363 },
      { "Date": "2017-03-05", "Open": 835.5, "High": 842.5, "Low": 830.7, "Close": 831.4, "Volume": 1555328 },
      { "Date": "2017-03-06", "Open": 832.4, "High": 836.4, "Low": 826.5, "Close": 827.9, "Volume": 1254433 },
      { "Date": "2017-03-07", "Open": 828.0, "High": 828.5, "Low": 820.5, "Close": 824.7, "Volume": 1057253 },
      { "Date": "2017-03-10", "Open": 825.4, "High": 829.4, "Low": 823.8, "Close": 824.7, "Volume": 978905 },
      { "Date": "2017-03-11", "Open": 824.7, "High": 827.4, "Low": 817.0, "Close": 823.4, "Volume": 1079732 },
      { "Date": "2017-03-12", "Open": 821.9, "High": 826.7, "Low": 821.0, "Close": 824.3, "Volume": 900480 },
      { "Date": "2017-03-13", "Open": 822.1, "High": 826.4, "Low": 821.4, "Close": 823.6, "Volume": 1122362 },
      { "Date": "2017-03-17", "Open": 825.0, "High": 837.8, "Low": 824.5, "Close": 837.2, "Volume": 895015 },
      { "Date": "2017-03-18", "Open": 834.2, "High": 838.9, "Low": 832.7, "Close": 836.8, "Volume": 836722 },
      { "Date": "2017-03-19", "Open": 839.8, "High": 842.2, "Low": 836.3, "Close": 838.2, "Volume": 954330 },
      { "Date": "2017-03-20", "Open": 841.4, "High": 845.2, "Low": 839.3, "Close": 841.6, "Volume": 959031 },
      { "Date": "2017-03-21", "Open": 842.9, "High": 843.9, "Low": 840.6, "Close": 843.2, "Volume": 1323583 },
      { "Date": "2017-03-24", "Open": 851.2, "High": 863.5, "Low": 849.9, "Close": 862.8, "Volume": 1372541 },
      { "Date": "2017-03-25", "Open": 865.0, "High": 875.0, "Low": 862.8, "Close": 872.3, "Volume": 1671972 },
      { "Date": "2017-03-26", "Open": 874.2, "High": 876.0, "Low": 867.8, "Close": 871.7, "Volume": 1237167 },
      { "Date": "2017-03-27", "Open": 873.6, "High": 875.4, "Low": 870.4, "Close": 874.3, "Volume": 2026816 },
      { "Date": "2017-03-28", "Open": 910.7, "High": 916.9, "Low": 905.8, "Close": 906.0, "Volume": 3276255 },
      { "Date": "2017-04-01", "Open": 901.9, "High": 915.7, "Low": 901.5, "Close": 912.6, "Volume": 2115993 },
      { "Date": "2017-04-02", "Open": 909.6, "High": 920.8, "Low": 909.5, "Close": 916.4, "Volume": 1587219 },
      { "Date": "2017-04-03", "Open": 914.9, "High": 928.1, "Low": 912.5, "Close": 927.0, "Volume": 1499532 },
      { "Date": "2017-04-04", "Open": 926.1, "High": 935.9, "Low": 924.6, "Close": 931.7, "Volume": 1422144 },
      { "Date": "2017-04-05", "Open": 933.5, "High": 934.9, "Low": 925.2, "Close": 927.1, "Volume": 1911275 },
      { "Date": "2017-04-08", "Open": 926.1, "High": 936.9, "Low": 925.3, "Close": 934.3, "Volume": 1329825 },
      { "Date": "2017-04-09", "Open": 937.0, "High": 937.5, "Low": 929.5, "Close": 932.2, "Volume": 1581809 },
      { "Date": "2017-04-10", "Open": 932.0, "High": 932.0, "Low": 925.2, "Close": 928.8, "Volume": 1173925 },
      { "Date": "2017-04-11", "Open": 925.3, "High": 932.5, "Low": 923.0, "Close": 930.6, "Volume": 835386 },
      { "Date": "2017-04-12", "Open": 931.5, "High": 933.4, "Low": 927.9, "Close": 932.2, "Volume": 1050601 },
      { "Date": "2017-04-15", "Open": 933.0, "High": 938.3, "Low": 929.3, "Close": 937.1, "Volume": 1108496 },
      { "Date": "2017-04-16", "Open": 940.0, "High": 943.1, "Low": 937.6, "Close": 943.0, "Volume": 969479 },
      { "Date": "2017-04-17", "Open": 935.7, "High": 939.3, "Low": 918.1, "Close": 919.6, "Volume": 2362072 },
      { "Date": "2017-04-18", "Open": 921.0, "High": 933.2, "Low": 918.8, "Close": 930.2, "Volume": 1596897 },
      { "Date": "2017-04-19", "Open": 931.5, "High": 937.8, "Low": 931.0, "Close": 934.0, "Volume": 1393024 },
      { "Date": "2017-04-22", "Open": 935.0, "High": 941.9, "Low": 935.0, "Close": 941.9, "Volume": 1120385 },
      { "Date": "2017-04-23", "Open": 947.9, "High": 951.5, "Low": 942.6, "Close": 948.8, "Volume": 1270817 },
      { "Date": "2017-04-24", "Open": 953.0, "High": 955.1, "Low": 949.5, "Close": 955.0, "Volume": 1034199 },
      { "Date": "2017-04-25", "Open": 957.3, "High": 972.6, "Low": 955.5, "Close": 969.5, "Volume": 1660474 },
      { "Date": "2017-04-26", "Open": 969.7, "High": 975.0, "Low": 965.0, "Close": 971.5, "Volume": 1252010 },
      { "Date": "2017-04-30", "Open": 970.3, "High": 976.2, "Low": 969.5, "Close": 975.9, "Volume": 1466654 },
      { "Date": "2017-04-31", "Open": 975.0, "High": 979.3, "Low": 960.2, "Close": 964.9, "Volume": 2448067 },
      { "Date": "2017-05-01", "Open": 969.0, "High": 971.5, "Low": 960.0, "Close": 967.0, "Volume": 1410458 },
      { "Date": "2017-05-02", "Open": 969.5, "High": 975.9, "Low": 966.0, "Close": 975.6, "Volume": 1750955 },
      { "Date": "2017-05-05", "Open": 976.5, "High": 986.9, "Low": 975.1, "Close": 983.7, "Volume": 1252106 },
      { "Date": "2017-05-06", "Open": 983.2, "High": 988.3, "Low": 975.1, "Close": 976.6, "Volume": 1814624 },
      { "Date": "2017-05-07", "Open": 979.6, "High": 984.1, "Low": 975.8, "Close": 981.1, "Volume": 1453874 },
      { "Date": "2017-05-08", "Open": 982.4, "High": 984.6, "Low": 977.2, "Close": 983.4, "Volume": 1481916 },
      { "Date": "2017-05-09", "Open": 984.5, "High": 984.5, "Low": 935.6, "Close": 949.8, "Volume": 3309389 },
      { "Date": "2017-05-12", "Open": 939.6, "High": 949.4, "Low": 915.2, "Close": 942.9, "Volume": 3763529 },
      { "Date": "2017-05-13", "Open": 951.9, "High": 960.0, "Low": 944.1, "Close": 953.4, "Volume": 2013337 },
      { "Date": "2017-05-14", "Open": 959.9, "High": 961.1, "Low": 942.3, "Close": 950.8, "Volume": 1489715 },
      { "Date": "2017-05-15", "Open": 934.0, "High": 943.3, "Low": 924.4, "Close": 942.3, "Volume": 2133050 },
      { "Date": "2017-05-16", "Open": 940.0, "High": 942.0, "Low": 931.6, "Close": 939.8, "Volume": 3094711 },
      { "Date": "2017-05-19", "Open": 950.0, "High": 960.0, "Low": 949.0, "Close": 957.4, "Volume": 1533336 },
      { "Date": "2017-05-20", "Open": 957.5, "High": 961.6, "Low": 950.0, "Close": 950.6, "Volume": 1125990 },
      { "Date": "2017-05-21", "Open": 953.6, "High": 960.1, "Low": 950.8, "Close": 959.5, "Volume": 1202233 },
      { "Date": "2017-05-22", "Open": 958.7, "High": 960.7, "Low": 954.5, "Close": 957.1, "Volume": 941958 },
      { "Date": "2017-05-23", "Open": 956.8, "High": 966.0, "Low": 954.2, "Close": 965.6, "Volume": 1527856 },
      { "Date": "2017-05-26", "Open": 969.9, "High": 973.3, "Low": 950.8, "Close": 952.3, "Volume": 1598355 },
      { "Date": "2017-05-27", "Open": 942.5, "High": 948.3, "Low": 926.9, "Close": 927.3, "Volume": 2579930 },
      { "Date": "2017-05-28", "Open": 929.0, "High": 942.8, "Low": 916.0, "Close": 940.5, "Volume": 2721406 },
      { "Date": "2017-05-29", "Open": 929.9, "High": 931.3, "Low": 910.6, "Close": 917.8, "Volume": 3299176 },
      { "Date": "2017-05-30", "Open": 926.0, "High": 926.0, "Low": 908.3, "Close": 908.7, "Volume": 2090226 },
      { "Date": "2017-06-03", "Open": 912.2, "High": 913.9, "Low": 894.8, "Close": 898.7, "Volume": 1710373 },
      { "Date": "2017-06-05", "Open": 901.8, "High": 914.5, "Low": 898.5, "Close": 911.7, "Volume": 1813884 },
      { "Date": "2017-06-06", "Open": 904.1, "High": 914.9, "Low": 899.7, "Close": 906.7, "Volume": 1424503 },
      { "Date": "2017-06-07", "Open": 908.9, "High": 921.5, "Low": 908.9, "Close": 918.6, "Volume": 1637785 },
      { "Date": "2017-06-10", "Open": 921.8, "High": 930.4, "Low": 919.6, "Close": 928.8, "Volume": 1192825 },
      { "Date": "2017-06-11", "Open": 929.5, "High": 931.4, "Low": 922.0, "Close": 930.1, "Volume": 1113235 },
      { "Date": "2017-06-12", "Open": 938.7, "High": 946.3, "Low": 934.5, "Close": 943.8, "Volume": 1532144 },
      { "Date": "2017-06-13", "Open": 946.3, "High": 954.5, "Low": 943.0, "Close": 947.2, "Volume": 1294687 },
      { "Date": "2017-06-14", "Open": 952.0, "High": 956.9, "Low": 948.0, "Close": 956.0, "Volume": 1053774 },
      { "Date": "2017-06-17", "Open": 957.0, "High": 960.7, "Low": 949.2, "Close": 953.4, "Volume": 1165537 },
      { "Date": "2017-06-18", "Open": 953.0, "High": 968.0, "Low": 950.6, "Close": 965.4, "Volume": 1153964 },
      { "Date": "2017-06-19", "Open": 967.8, "High": 973.0, "Low": 964.0, "Close": 970.9, "Volume": 1224540 },
      { "Date": "2017-06-20", "Open": 975.0, "High": 975.9, "Low": 961.5, "Close": 968.1, "Volume": 1624463 },
      { "Date": "2017-06-21", "Open": 962.3, "High": 973.2, "Low": 960.1, "Close": 972.9, "Volume": 1711000 },
      { "Date": "2017-06-24", "Open": 972.2, "High": 986.2, "Low": 970.8, "Close": 980.3, "Volume": 3248347 },
      { "Date": "2017-06-25", "Open": 953.8, "High": 959.7, "Low": 945.4, "Close": 950.7, "Volume": 4660979 },
      { "Date": "2017-06-26", "Open": 954.7, "High": 955.0, "Low": 942.3, "Close": 947.8, "Volume": 2088256 },
      { "Date": "2017-06-27", "Open": 951.8, "High": 951.8, "Low": 920.0, "Close": 934.1, "Volume": 3212996 },
      { "Date": "2017-06-28", "Open": 929.4, "High": 943.8, "Low": 927.5, "Close": 941.5, "Volume": 1846351 },
      { "Date": "2017-06-31", "Open": 941.9, "High": 943.6, "Low": 926.0, "Close": 930.5, "Volume": 1970095 },
      { "Date": "2017-07-01", "Open": 932.4, "High": 937.5, "Low": 929.3, "Close": 930.8, "Volume": 1277734 },
      { "Date": "2017-07-02", "Open": 928.6, "High": 932.6, "Low": 916.7, "Close": 930.4, "Volume": 1824448 },
      { "Date": "2017-07-03", "Open": 930.3, "High": 932.2, "Low": 922.2, "Close": 923.6, "Volume": 1202512 },
      { "Date": "2017-07-04", "Open": 926.8, "High": 930.3, "Low": 923.0, "Close": 928.0, "Volume": 1082267 },
      { "Date": "2017-07-07", "Open": 929.1, "High": 931.7, "Low": 926.5, "Close": 929.4, "Volume": 1032239 },
      { "Date": "2017-07-08", "Open": 927.1, "High": 935.8, "Low": 925.6, "Close": 926.8, "Volume": 1061579 },
      { "Date": "2017-07-09", "Open": 920.6, "High": 926.0, "Low": 917.3, "Close": 922.9, "Volume": 1192081 },
      { "Date": "2017-07-10", "Open": 917.5, "High": 919.3, "Low": 906.1, "Close": 907.2, "Volume": 1823967 },
      { "Date": "2017-07-11", "Open": 908.0, "High": 917.8, "Low": 905.6, "Close": 914.4, "Volume": 1206782 },
      { "Date": "2017-07-14", "Open": 922.5, "High": 924.7, "Low": 918.2, "Close": 922.7, "Volume": 1064530 },
      { "Date": "2017-07-15", "Open": 924.2, "High": 926.5, "Low": 919.8, "Close": 922.2, "Volume": 883369 },
      { "Date": "2017-07-16", "Open": 925.3, "High": 932.7, "Low": 923.4, "Close": 927.0, "Volume": 1006711 },
      { "Date": "2017-07-17", "Open": 925.8, "High": 926.9, "Low": 911.0, "Close": 911.0, "Volume": 1277238 },
      { "Date": "2017-07-18", "Open": 910.3, "High": 915.3, "Low": 907.1, "Close": 910.7, "Volume": 1342689 },
      { "Date": "2017-07-21", "Open": 910.0, "High": 913.0, "Low": 903.4, "Close": 906.7, "Volume": 943441 },
      { "Date": "2017-07-22", "Open": 912.7, "High": 925.9, "Low": 911.5, "Close": 924.7, "Volume": 1166737 },
      { "Date": "2017-07-23", "Open": 921.9, "High": 929.9, "Low": 919.4, "Close": 927.0, "Volume": 1090248 },
      { "Date": "2017-07-24", "Open": 928.7, "High": 930.8, "Low": 915.5, "Close": 921.3, "Volume": 1270306 },
      { "Date": "2017-07-25", "Open": 923.5, "High": 925.6, "Low": 915.5, "Close": 915.9, "Volume": 1053376 },
      { "Date": "2017-07-28", "Open": 916.0, "High": 919.2, "Low": 911.9, "Close": 913.8, "Volume": 1086484 },
      { "Date": "2017-07-29", "Open": 905.1, "High": 923.3, "Low": 905.0, "Close": 921.3, "Volume": 1185564 },
      { "Date": "2017-07-30", "Open": 920.0, "High": 930.8, "Low": 919.6, "Close": 929.6, "Volume": 1301225 },
      { "Date": "2017-07-31", "Open": 931.8, "High": 942.0, "Low": 931.8, "Close": 939.3, "Volume": 1582579 },
      { "Date": "2017-08-01", "Open": 941.1, "High": 942.5, "Low": 935.1, "Close": 937.3, "Volume": 947374 },
      { "Date": "2017-08-05", "Open": 933.1, "High": 937.0, "Low": 922.0, "Close": 928.5, "Volume": 1348292 },
      { "Date": "2017-08-06", "Open": 930.1, "High": 930.9, "Low": 919.3, "Close": 927.8, "Volume": 1527650 },
      { "Date": "2017-08-07", "Open": 931.7, "High": 936.4, "Low": 923.6, "Close": 936.0, "Volume": 1212743 },
      { "Date": "2017-08-08", "Open": 936.5, "High": 937.0, "Low": 924.9, "Close": 926.5, "Volume": 1011538 },
      { "Date": "2017-08-11", "Open": 934.3, "High": 938.4, "Low": 926.9, "Close": 929.1, "Volume": 1266991 },
      { "Date": "2017-08-12", "Open": 932.6, "High": 933.5, "Low": 923.9, "Close": 932.1, "Volume": 1134397 },
      { "Date": "2017-08-13", "Open": 930.7, "High": 937.3, "Low": 929.9, "Close": 935.1, "Volume": 1102631 },
      { "Date": "2017-08-14", "Open": 931.3, "High": 932.8, "Low": 924.0, "Close": 925.1, "Volume": 1397644 },
      { "Date": "2017-08-15", "Open": 924.7, "High": 926.5, "Low": 916.4, "Close": 920.3, "Volume": 2505430 },
      { "Date": "2017-08-18", "Open": 920.0, "High": 922.1, "Low": 910.6, "Close": 915.0, "Volume": 1306922 },
      { "Date": "2017-08-19", "Open": 917.4, "High": 922.4, "Low": 912.5, "Close": 921.8, "Volume": 936654 },
      { "Date": "2017-08-20", "Open": 923.0, "High": 933.9, "Low": 922.0, "Close": 931.6, "Volume": 1669763 },
      { "Date": "2017-08-21", "Open": 933.0, "High": 936.5, "Low": 923.8, "Close": 932.5, "Volume": 1290607 },
      { "Date": "2017-08-22", "Open": 927.8, "High": 934.7, "Low": 926.5, "Close": 928.5, "Volume": 1052704 },
      { "Date": "2017-08-25", "Open": 925.5, "High": 926.4, "Low": 909.7, "Close": 921.0, "Volume": 1856822 },
      { "Date": "2017-08-26", "Open": 923.7, "High": 930.8, "Low": 921.1, "Close": 924.9, "Volume": 1666861 },
      { "Date": "2017-08-27", "Open": 927.7, "High": 949.9, "Low": 927.7, "Close": 944.5, "Volume": 2212600 },
      { "Date": "2017-08-28", "Open": 941.4, "High": 950.7, "Low": 940.5, "Close": 949.5, "Volume": 1020312 },
      { "Date": "2017-08-29", "Open": 952.0, "High": 959.8, "Low": 951.5, "Close": 959.1, "Volume": 1580994 },
      { "Date": "2017-09-02", "Open": 960.0, "High": 962.5, "Low": 947.8, "Close": 953.3, "Volume": 1283444 },
      { "Date": "2017-09-03", "Open": 954.0, "High": 958.0, "Low": 949.1, "Close": 957.8, "Volume": 888346 },
      { "Date": "2017-09-04", "Open": 957.0, "High": 960.4, "Low": 950.7, "Close": 951.7, "Volume": 952391 },
      { "Date": "2017-09-05", "Open": 955.5, "High": 970.9, "Low": 955.2, "Close": 970.0, "Volume": 1213816 },
      { "Date": "2017-09-06", "Open": 966.7, "High": 979.5, "Low": 963.4, "Close": 978.9, "Volume": 1173882 },
      { "Date": "2017-09-09", "Open": 980.0, "High": 985.4, "Low": 976.1, "Close": 977.0, "Volume": 891355 },
      { "Date": "2017-09-10", "Open": 980.0, "High": 981.6, "Low": 966.1, "Close": 972.6, "Volume": 968362 },
      { "Date": "2017-09-11", "Open": 973.7, "High": 990.7, "Low": 972.3, "Close": 989.3, "Volume": 1693274 },
      { "Date": "2017-09-12", "Open": 987.5, "High": 994.1, "Low": 985.0, "Close": 987.8, "Volume": 1262793 },
      { "Date": "2017-09-13", "Open": 992.0, "High": 997.2, "Low": 989.0, "Close": 989.7, "Volume": 1169777 },
      { "Date": "2017-09-16", "Open": 992.1, "High": 993.9, "Low": 984.0, "Close": 992.0, "Volume": 910543 },
      { "Date": "2017-09-17", "Open": 990.3, "High": 996.4, "Low": 988.6, "Close": 992.2, "Volume": 1290186 },
      { "Date": "2017-09-18", "Open": 991.8, "High": 996.7, "Low": 987.0, "Close": 992.8, "Volume": 1057581 },
      { "Date": "2017-09-19", "Open": 986.0, "High": 988.9, "Low": 978.4, "Close": 984.5, "Volume": 1313575 },
      { "Date": "2017-09-20", "Open": 989.4, "High": 991.0, "Low": 984.6, "Close": 988.2, "Volume": 1183186 },
      { "Date": "2017-09-23", "Open": 989.5, "High": 989.5, "Low": 966.1, "Close": 968.5, "Volume": 1478448 },
      { "Date": "2017-09-24", "Open": 970.0, "High": 972.2, "Low": 961.0, "Close": 970.5, "Volume": 1212153 },
      { "Date": "2017-09-25", "Open": 968.4, "High": 976.1, "Low": 960.5, "Close": 973.3, "Volume": 1211262 },
      { "Date": "2017-09-26", "Open": 980.0, "High": 987.6, "Low": 972.2, "Close": 972.6, "Volume": 2042149 },
      { "Date": "2017-09-27", "Open": 1009.2, "High": 1048.4, "Low": 1008.2, "Close": 1019.3, "Volume": 5167689 },
      { "Date": "2017-09-30", "Open": 1014.0, "High": 1025.0, "Low": 1007.5, "Close": 1017.1, "Volume": 2085062 },
      { "Date": "2017-09-31", "Open": 1015.2, "High": 1024.0, "Low": 1010.4, "Close": 1016.6, "Volume": 1331391 },
      { "Date": "2017-10-01", "Open": 1017.2, "High": 1029.7, "Low": 1017.0, "Close": 1025.5, "Volume": 1373444 },
      { "Date": "2017-10-02", "Open": 1021.8, "High": 1028.1, "Low": 1013.0, "Close": 1025.6, "Volume": 1048970 },
      { "Date": "2017-10-03", "Open": 1022.1, "High": 1032.7, "Low": 1020.3, "Close": 1032.5, "Volume": 1076350 },
      { "Date": "2017-10-06", "Open": 1029.0, "High": 1034.9, "Low": 1025.0, "Close": 1025.9, "Volume": 1125185 },
      { "Date": "2017-10-07", "Open": 1027.3, "High": 1034.0, "Low": 1025.1, "Close": 1033.3, "Volume": 1112331 },
      { "Date": "2017-10-08", "Open": 1030.5, "High": 1043.5, "Low": 1028.5, "Close": 1039.8, "Volume": 1088716 },
      { "Date": "2017-10-09", "Open": 1034.0, "High": 1034.0, "Low": 1019.7, "Close": 1031.3, "Volume": 1245246 },
      { "Date": "2017-10-10", "Open": 1026.5, "High": 1030.8, "Low": 1025.3, "Close": 1028.1, "Volume": 720676 },
      { "Date": "2017-10-13", "Open": 1023.4, "High": 1031.6, "Low": 1022.6, "Close": 1025.8, "Volume": 885779 },
      { "Date": "2017-10-14", "Open": 1022.6, "High": 1026.8, "Low": 1014.1, "Close": 1026.0, "Volume": 959222 },
      { "Date": "2017-10-15", "Open": 1019.2, "High": 1024.1, "Low": 1015.4, "Close": 1020.9, "Volume": 853992 },
      { "Date": "2017-10-16", "Open": 1022.5, "High": 1035.9, "Low": 1022.5, "Close": 1032.5, "Volume": 1129688 },
      { "Date": "2017-10-17", "Open": 1034.0, "High": 1034.4, "Low": 1017.8, "Close": 1019.1, "Volume": 1397064 },
      { "Date": "2017-10-20", "Open": 1020.3, "High": 1022.6, "Low": 1017.5, "Close": 1018.4, "Volume": 953470 },
      { "Date": "2017-10-21", "Open": 1023.3, "High": 1035.1, "Low": 1022.7, "Close": 1034.5, "Volume": 1096999 },
      { "Date": "2017-10-22", "Open": 1035.0, "High": 1039.7, "Low": 1031.4, "Close": 1036.0, "Volume": 746878 },
      { "Date": "2017-10-24", "Open": 1035.9, "High": 1043.2, "Low": 1035.0, "Close": 1040.6, "Volume": 536996 },
      { "Date": "2017-10-27", "Open": 1040.0, "High": 1055.5, "Low": 1038.4, "Close": 1054.2, "Volume": 1307881 },
      { "Date": "2017-10-28", "Open": 1055.1, "High": 1062.4, "Low": 1040.0, "Close": 1047.4, "Volume": 1424394 },
      { "Date": "2017-10-29", "Open": 1042.7, "High": 1044.1, "Low": 1015.6, "Close": 1021.7, "Volume": 2459426 },
      { "Date": "2017-10-30", "Open": 1022.4, "High": 1028.5, "Low": 1015.0, "Close": 1021.4, "Volume": 1724031 },
      { "Date": "2017-11-01", "Open": 1015.8, "High": 1022.5, "Low": 1002.0, "Close": 1010.2, "Volume": 1909566 },
      { "Date": "2017-11-04", "Open": 1012.7, "High": 1016.1, "Low": 995.6, "Close": 998.7, "Volume": 1906439 },
      { "Date": "2017-11-05", "Open": 995.9, "High": 1020.6, "Low": 988.3, "Close": 1005.1, "Volume": 2067318 },
      { "Date": "2017-11-06", "Open": 1001.5, "High": 1025.0, "Low": 1001.1, "Close": 1018.4, "Volume": 1271964 },
      { "Date": "2017-11-07", "Open": 1020.4, "High": 1034.2, "Low": 1018.1, "Close": 1030.9, "Volume": 1458242 },
      { "Date": "2017-11-08", "Open": 1037.5, "High": 1042.0, "Low": 1032.5, "Close": 1037.0, "Volume": 1290774 },
      { "Date": "2017-11-11", "Open": 1035.5, "High": 1043.8, "Low": 1032.0, "Close": 1041.1, "Volume": 1192838 },
      { "Date": "2017-11-12", "Open": 1039.6, "High": 1050.3, "Low": 1033.7, "Close": 1040.5, "Volume": 1279659 },
      { "Date": "2017-11-13", "Open": 1046.1, "High": 1046.7, "Low": 1038.4, "Close": 1040.6, "Volume": 1282677 },
      { "Date": "2017-11-14", "Open": 1045.0, "High": 1058.5, "Low": 1043.1, "Close": 1049.2, "Volume": 1558835 },
      { "Date": "2017-11-15", "Open": 1054.6, "High": 1067.6, "Low": 1049.5, "Close": 1064.2, "Volume": 3275931 },
      { "Date": "2017-11-18", "Open": 1066.1, "High": 1078.5, "Low": 1062.0, "Close": 1077.1, "Volume": 1554552 },
      { "Date": "2017-11-19", "Open": 1075.2, "High": 1076.8, "Low": 1063.5, "Close": 1070.7, "Volume": 1338725 },
      { "Date": "2017-11-20", "Open": 1071.8, "High": 1073.4, "Low": 1061.5, "Close": 1065.0, "Volume": 1268582 },
      { "Date": "2017-11-21", "Open": 1065.0, "High": 1069.3, "Low": 1061.8, "Close": 1063.6, "Volume": 995703 },
      { "Date": "2017-11-22", "Open": 1061.1, "High": 1064.2, "Low": 1059.4, "Close": 1060.1, "Volume": 755095 },
      { "Date": "2017-11-26", "Open": 1058.1, "High": 1060.1, "Low": 1050.2, "Close": 1056.7, "Volume": 761237 },
      { "Date": "2017-11-27", "Open": 1057.4, "High": 1058.4, "Low": 1048.0, "Close": 1049.4, "Volume": 1271911 },
      { "Date": "2017-11-28", "Open": 1051.6, "High": 1054.8, "Low": 1044.8, "Close": 1048.1, "Volume": 837121 },
      { "Date": "2017-11-29", "Open": 1046.7, "High": 1049.7, "Low": 1044.9, "Close": 1046.4, "Volume": 887511 },
      { "Date": "2018-00-02", "Open": 1048.3, "High": 1066.9, "Low": 1045.2, "Close": 1065.0, "Volume": 1237564 },
      { "Date": "2018-00-03", "Open": 1064.3, "High": 1086.3, "Low": 1063.2, "Close": 1082.5, "Volume": 1430170 },
      { "Date": "2018-00-04", "Open": 1088.0, "High": 1093.6, "Low": 1084.0, "Close": 1086.4, "Volume": 1004605 },
      { "Date": "2018-00-05", "Open": 1094.0, "High": 1104.3, "Low": 1092.0, "Close": 1102.2, "Volume": 1279123 },
      { "Date": "2018-00-08", "Open": 1102.2, "High": 1111.3, "Low": 1101.6, "Close": 1106.9, "Volume": 1047603 },
      { "Date": "2018-00-09", "Open": 1109.4, "High": 1110.6, "Low": 1101.2, "Close": 1106.3, "Volume": 902541 },
      { "Date": "2018-00-10", "Open": 1097.1, "High": 1104.6, "Low": 1096.1, "Close": 1102.6, "Volume": 1042793 },
      { "Date": "2018-00-11", "Open": 1106.3, "High": 1106.5, "Low": 1099.6, "Close": 1105.5, "Volume": 978292 },
      { "Date": "2018-00-12", "Open": 1102.4, "High": 1124.3, "Low": 1101.2, "Close": 1122.3, "Volume": 1720533 },
      { "Date": "2018-00-16", "Open": 1132.5, "High": 1139.9, "Low": 1117.8, "Close": 1121.8, "Volume": 1575261 },
      { "Date": "2018-00-17", "Open": 1126.2, "High": 1132.6, "Low": 1117.0, "Close": 1132.0, "Volume": 1202639 },
      { "Date": "2018-00-18", "Open": 1131.4, "High": 1132.5, "Low": 1117.5, "Close": 1129.8, "Volume": 1198234 },
      { "Date": "2018-00-19", "Open": 1131.8, "High": 1137.9, "Low": 1128.3, "Close": 1137.5, "Volume": 1778229 },
      { "Date": "2018-00-22", "Open": 1137.5, "High": 1159.9, "Low": 1135.1, "Close": 1155.8, "Volume": 1617975 },
      { "Date": "2018-00-23", "Open": 1159.8, "High": 1171.6, "Low": 1158.8, "Close": 1170.0, "Volume": 1333056 },
      { "Date": "2018-00-24", "Open": 1177.3, "High": 1179.9, "Low": 1161.0, "Close": 1164.2, "Volume": 1416625 },
      { "Date": "2018-00-25", "Open": 1172.5, "High": 1175.9, "Low": 1162.8, "Close": 1170.4, "Volume": 1480540 },
      { "Date": "2018-00-26", "Open": 1175.1, "High": 1175.8, "Low": 1158.1, "Close": 1175.8, "Volume": 2018755 },
      { "Date": "2018-00-29", "Open": 1176.5, "High": 1186.9, "Low": 1172.0, "Close": 1175.6, "Volume": 1378913 },
      { "Date": "2018-00-30", "Open": 1167.8, "High": 1176.5, "Low": 1163.5, "Close": 1163.7, "Volume": 1556346 },
      { "Date": "2018-00-31", "Open": 1170.6, "High": 1173.0, "Low": 1159.1, "Close": 1169.9, "Volume": 1538688 }];
      let stockItems: StockItem[] = [];

      for (let json of jsonData) {
        let parts = json.Date.split("-");
        let item = new StockItem();
        item.date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 13, 0, 0);
        item.open = json.Open;
        item.high = json.High;
        item.low = json.Low;
        item.close = json.Close;
        item.volume = json.Volume;
        stockItems.push(item);
      }
	  this.push(...stockItems);
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
  //end data
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { StockGoogle } from './StockGoogle';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrFinancialChart
                    ref={this.chartRef}
                    isVerticalZoomEnabled="true"
                    isHorizontalZoomEnabled="true"
                    dataSource={this.stockGoogle}
                    toolTipType="Data"
                    dataToolTipIncludedColumns={["Open", "Close", "High", "Low", "Change"]}
                    dataToolTipLabelTextColor="rgba(74, 74, 74, 1)"
                    dataToolTipUnitsText="K"
                    dataToolTipUnitsTextColor="rgba(0, 173, 3, 1)"
                    dataToolTipUnitsTextStyle="normal bold 14px Verdana"
                    dataToolTipValueFormatMode="Currency"
                    dataToolTipValueTextColor="rgba(0, 173, 3, 1)"
                    dataToolTipValueTextStyle="normal bold 14px Verdana"
                    dataToolTipHeaderFormatTime="None"
                    yAxisTitle="Thousands of Dollars ($)"
                    zoomSliderType="None">
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _stockGoogle: StockGoogle = null;
    public get stockGoogle(): StockGoogle {
        if (this._stockGoogle == null)
        {
            this._stockGoogle = new StockGoogle();
        }
        return this._stockGoogle;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

Several properties are exposed including grouping portions of the tooltip.

- `GroupTextMargin`
- [`groupTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatalegend.html#groupTextColor)
- `GroupTextFontSize`
- `GroupTextFontFamily`
- `GroupTextFontStyle`
- `GroupTextFontStretch`
- `GroupTextFontWeight`
- `HeaderTextMargin`
- [`headerTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatalegend.html#headerTextColor)
- `HeaderTextFontSize`
- `HeaderTextFontFamily`
- `HeaderTextFontStyle`
- `HeaderTextFontStretch`
- `HeaderTextFontWeight`

## API References

- [`dataToolTipExcludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipExcludedColumns)
- [`dataToolTipGroupedPositionModeX`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipGroupedPositionModeX)
- [`dataToolTipGroupedPositionModeY`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipGroupedPositionModeY)
- [`dataToolTipGroupingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipGroupingMode)
- [`dataToolTipHeaderText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipHeaderText)
- [`dataToolTipIncludedColumns`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipIncludedColumns)
- [`dataToolTipLabelTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipLabelTextColor)
- [`IgrDataToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatatooltiplayer.html)
- [`dataToolTipSummaryTitleText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipSummaryTitleText)
- [`dataToolTipSummaryType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipSummaryType)
- [`dataToolTipTitleTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipTitleTextColor)
- [`dataToolTipUnitsTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipUnitsTextColor)
- [`dataToolTipUnitsText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipUnitsText)
- [`dataToolTipValueFormatAbbreviation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatAbbreviation)
- [`dataToolTipValueFormatCulture`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatCulture)
- [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMaxFractions)
- [`dataToolTipValueFormatMaxFractions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMaxFractions)
- [`dataToolTipValueFormatMinFractions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMinFractions)
- [`dataToolTipValueFormatMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueFormatMode)
- [`dataToolTipValueTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#dataToolTipValueTextColor)
- `MemberAsLegendLabel`
