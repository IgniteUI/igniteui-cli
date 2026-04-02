---
title: Angular Stock/Financial Charts | Ignite UI for Angular
_description: The Ignite UI for Angular Stock Chart is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Try for FREE.
_keywords: Angular Charts, Stock Chart, Financial Chart, Candlestick Chart, OHLC Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "FinancialChartType", "IndicatorTypes", "ZoomSliderType", "Series", "FinancialChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Financial / Stock Chart
_premium: true
---

# Angular Stock Chart

The Ignite UI for Angular Stock Chart, sometimes referred to as Angular Financial Chart or Candlestick Chart, is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Stock Chart shows stock prices for a ticker over time in a Time Series X-Axis. Also, this chart shows information for a company’s ticker data like Open Price, High Price, Low Price and Close Price (OHLC) for configurable period of time. The Stock Chart offers multiple ways in which the data can be visualized and interpreted, including display modes for price and volume and a host of Stock indicators.

## Angular Stock Chart Example

You can create Stock Chart using the [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) control by binding your data and optionally setting [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialcharttype.html#Line) value, as shown in the example below.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./FinancialDataService";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [FinancialDataService],
schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getGoog(), this.dataService.getMsft() ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical" >
        <label id="legendTitle">Stock Changes: Microsoft vs Google </label>
    </div>

    <igx-financial-chart height="100%" width="100%"
    [dataSource]="data"
    chartType="line"
    thickness=2
    yAxisMode="PercentChange"
    yAxisTitle="Percent Changed">
    </igx-financial-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Stock Chart Recommendations

### Are Angular Stock Charts right for your project?

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

## Angular Stock Chart with Multiple Series

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./FinancialDataService";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [FinancialDataService],
schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getGoog(), this.dataService.getMsft() ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical" >
        <label id="legendTitle">Stock Changes: Microsoft vs Google </label>
    </div>

    <igx-financial-chart height="100%" width="100%"
    [dataSource]="data"
    chartType="line"
    thickness=2
    yAxisMode="PercentChange"
    yAxisTitle="Percent Changed">
    </igx-financial-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Stock Chart

In this example the Stock Chart is representing the S\&P 500 over the course of a year; useful for investors and conducting technical analysis and forecasting future pricing/reports.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { StockIndexDataService } from "./StockIndexDataService";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [StockIndexDataService],
schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StockIndexDataService } from "./StockIndexDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockIndexDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public stocksData: any;

    constructor(private dataService: StockIndexDataService) {
        this.stocksData = [
            this.dataService.getData()
        ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical" >
        <label id="legendTitle">S&P 500 Index </label>
    </div>

    <igx-financial-chart height="100%" width="100%"
    [dataSource]="stocksData"
    isToolbarVisible="false"
    chartType="Candle"
    yAxisLabelLocation="OutsideLeft"
    yAxisMode="Numeric"
    yAxisTitle="Financial Prices"
    yAxisTitleLeftMargin="10"
    yAxisTitleRightMargin="5"
    yAxisLabelLeftMargin="0"
    zoomSliderType="None">
    </igx-financial-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Stock Chart Styling

If you need a Stock Chart with more features such as composite other series, you can configure the thickness, outlines, brushes, negative outlines, negative brushes as demonstrated below. In this example, the stock chart is comparing revenue between Amazon, Microsoft and Tesla.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./FinancialDataService";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [FinancialDataService],
schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn(), this.dataService.getMsft() ];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical" >
        <label id="legendTitle">Stock Changes: Microsoft vs Google </label>
    </div>

    <igx-financial-chart height="100%" width="100%"
    [dataSource]="data"
    chartType=Candle
    thickness=2
    yAxisMode="PercentChange"
    yAxisTitle="Percent Changed Since 2013"
    negativeOutlines="rgb(213, 94, 0)"
    negativeBrushes="Transparent"
    brushes="Transparent"
    zoomSliderType="None">
    </igx-financial-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Chart Annotations

The Crosshair Annotation Layer provides crossing lines that meet at the actual value of every targeted series. Crosshair types include: Horizontal, Vertical, and Both. The Crosshairs can also be configured to snap to data points by setting the [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsSnapToData) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

The Callout Layer displays a callout at X/Y positions.

Note: When using the ordinal X axis mode, the CalloutsXMemberPath should point to the numeric index of the item, otherwise CalloutsXMemberPath should point to the time value.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { StocksUtility } from "./StocksUtility";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [StocksUtility],
schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, ViewChild, ChangeDetectionStrategy, Component } from "@angular/core";
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { StocksUtility } from "./StocksUtility";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StocksUtility ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild("financialChart", { static: true })
    public chart: IgxFinancialChartComponent;
    public stocksData: any;
    public calloutsData: any[];
    public options: SampleOptions = new SampleOptions();
    public excludedProperties: any;

    constructor(private dataService: StocksUtility) {

        const today = new Date()
        const year = today.getFullYear();
        const dateMonth = today.getMonth();
        const dateEnd = new Date(year + 5, dateMonth, 1);
        const dateStart = new Date(year - 1, dateMonth, 1);

        this.stocksData = [
            this.dataService = StocksUtility.GetStocksBetween(dateStart, dateEnd)
        ];

        this.calloutsData = this.getCallouts(this.stocksData);
    }

    public ngAfterViewInit(): void {
        // binding only properties with "stack" prefix
        this.chart.excludedProperties = [ "info", "label", "value" ];
    }

    public getCallouts(stocks: any[]): any[] {
        const callouts: any[] = [];
        for (const stock of stocks) {
            const intervalSplit = Math.floor(Math.random() * (300 - 280)) + 280;
            const intervalDiv = Math.floor(Math.random() * (400 - 360)) + 360;
            const calloutMin = new CalloutDataItem({ label: "MIN"});
            const calloutMax = new CalloutDataItem({ label: "MAX"});
            // initalizing values for min/max callouts
            calloutMin.value = Number.MAX_VALUE;
            calloutMax.value = Number.MIN_VALUE;
            let idx: number = 0;

            for (const item of stock) {
                // finding item with min/max price
                if (calloutMin.value > item.close) {
                    calloutMin.value = item.close;
                    calloutMin.index = idx;
                }
                if (calloutMax.value < item.close) {
                    calloutMax.value = item.close;
                    calloutMax.index = idx;
                }
                const offset = idx + 10;
                const calloutEvent = new CalloutDataItem({ index: idx });
                // creating SPLIT/DIVIDEND events at specific intervals
                if (offset % intervalSplit === 5) {
                    calloutEvent.value = item.close;
                    calloutEvent.label = "SPLIT";
                    callouts.push(calloutEvent);
                } else if (offset % intervalDiv === 5) {
                    calloutEvent.value = item.close;
                    calloutEvent.label = "DIV";
                    callouts.push(calloutEvent);
                }

                idx++;
            }
            callouts.push(calloutMin);
            callouts.push(calloutMax);
        }
        return callouts;
    }
}

class CalloutDataItem {
    public label: string;
    public index: number;
    public value: number;

    public constructor(init?: Partial<CalloutDataItem>) {
        Object.assign(this, init);
    }
}

class SampleOptions {
    public crosshairAnnotations: string = "Both";
    public finalValueAnnotations: boolean = true;
    public calloutsVisible: boolean = true;
    public itemToolTip: string = "Item";
    public markerTypes: string = "None";
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Annotations: </label>
        <label class="options-item"><input [(ngModel)]="options.calloutsVisible" type="checkbox" />Show Callouts</label>
        <label class="option-item"><input [(ngModel)]="options.finalValueAnnotations" type="checkbox" />Final Value</label>
        <label class="options-item">Crosshairs</label>
        <select class="select" [(ngModel)]="options.crosshairAnnotations">
            <option>None</option>
            <option>Both</option>
        </select>
        <label class="optionItem">Item Tooltip</label>
        <select class="select" [(ngModel)]="options.itemToolTip">
            <option>None</option>
            <option>Item</option>
        </select>
        <label class="optionItem">Markers</label>
        <select class="select" [(ngModel)]="options.markerTypes">
            <option>None</option>
            <option>Circle</option>
        </select>
    </div>
    <div class="container">
        <igx-financial-chart #financialChart height="100%" width="100%"
            [dataSource]="stocksData"
            chartType="Line"
            [crosshairsDisplayMode]="options.crosshairAnnotations"
            [finalValueAnnotationsVisible]="options.finalValueAnnotations"
            [markerTypes]="options.markerTypes"
            [calloutsVisible]="options.calloutsVisible"
            [calloutsDataSource]="calloutsData"
            calloutsXMemberPath="index"
            calloutsYMemberPath="value"
            calloutsLabelMemberPath="label"
            calloutsContentMemberPath="label"
            [toolTipType]="options.itemToolTip"
            xAxisExtent="50"
            thickness="2">
        </igx-financial-chart>

    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Chart Panes

The following panes are available:

- Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
- Indicator Pane - Renders all the financial indicators in a separate chart while the BollingerBands and PriceChannel overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
- Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
- Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

### Indicator Pane

Financial Indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed below the price pane because they do not share the same Y-Axis scale.

By default the indicator panes are not displayed. The toolbar allows the end user to select which indicator to display at run time.
In order to display an indicator pane initially, the [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#indicatorTypes) property must be set to a least one type of indicator, as demonstrated in the following code:

### Volume Pane

The volume pane represents the number of shares traded during a given period. Low volume would indicate little interest, while high volume would indicate high interest with a lot of trades. This can be displayed using column, line or area chart types. The toolbar allows the end user to display the volume pane by selecting a chart type to render the data at runtime. In order the display the pane, a volume type must be set, as demonstrated in the following code:

### Price Pane

This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to [`Auto`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.financialcharttype.html#Auto). You can override the default setting, as demonstrated in the following code:

Note that is recommended to use line chart type if plotting multiple data sources or if plotting data source with a lot of data points.

### Zoom Pane

This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#zoomSliderType) to `none` as demonstrated in the following code:

Note that you should set the [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#zoomSliderType) option to the same value as the [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) option is set to. This way, the zoom slider will show correct preview of the price pane. The following code demonstrates how to do this:

In this example, the stock chart is plotting revenue for United States.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { StockDataService } from "./StockDataService";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [StockDataService],
schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { FinancialChartType } from "igniteui-angular-charts";
import { FinancialChartVolumeType } from "igniteui-angular-charts";
import { FinancialChartZoomSliderType } from "igniteui-angular-charts";
import { FinancialIndicatorType } from "igniteui-angular-charts";
import { FinancialOverlayType } from "igniteui-angular-charts";
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialIndicatorTypeCollection } from "igniteui-angular-charts";
import { IgxFinancialOverlayTypeCollection } from "igniteui-angular-charts";
import { StockDataService } from "./StockDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    public data: any[];
    @ViewChild("chart", { static: true })
    public chart: IgxFinancialChartComponent;

    constructor(private dataService: StockDataService) {
        this.data = this.dataService.GetStockTSLA();

    }

    public ngAfterViewInit(): void {

        this.chart.chartType = FinancialChartType.Candle;
        this.chart.zoomSliderType = FinancialChartZoomSliderType.Candle;
        this.chart.volumeType = FinancialChartVolumeType.Area;
        this.chart.indicatorTypes.add(FinancialIndicatorType.ForceIndex);
        this.chart.overlayTypes.add(FinancialOverlayType.PriceChannel);
    }
}
```
```html
<div class="container vertical">
    <igx-financial-chart height="100%" width="100%"
        [dataSource]="data"
        #chart>
    </igx-financial-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
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

- [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType)
- [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsSnapToData)
- `ItemsSource`
- [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
- [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#indicatorTypes)
- [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#zoomSliderType)
