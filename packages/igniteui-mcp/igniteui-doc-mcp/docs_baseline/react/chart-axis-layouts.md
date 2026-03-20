---
title: React Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' React Axis Layouts
_keywords: React Axis, Layouts, Location, Position, Share, Multiple, Crossing, Infragistics
_license: commercial
mentionedTypes: [ "DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "Axis", "AxisLabelSettings", "ScatterSplineSeries", "TimeXAxis" ]
_tocName: Axis Layouts
_premium: true
---

# React Axis Layouts

All Ignite UI for React charts include options to configure many axis layout options such as location as well as having the ability to share axis between series or have multiple axes in the same chart. These features are demonstrated in the examples given below.

> \[!Note]
> the following examples can be applied to [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) as well as [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) controls.

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisLabelLocation) property of the React charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisLabelLocation) property to position y-axis on left side or right side of plot area.

The following example depicts the amount of renewable electricity produced since 2009, represented by a [Line Chart](../types/line-chart.md). There is a drop-down that lets you configure the [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisLabelLocation) so that you can visualize what the axes look like when the labels are placed on the left or right side on the inside or outside of the chart's plot area.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private yAxisLabelLocation: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisLabelLocation"
                        name="YAxisLabelLocation"
                        label="Y Axis - Label Location"
                        primitiveValue="OutsideRight">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    computedPlotAreaMarginMode="Series"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    chartType="Line"
                    yAxisTitle="Labels Location"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    xAxisInterval="1"
                    yAxisLabelLocation="OutsideRight">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
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


<!-- ## Axis Orientation Example

TODO add info/example of 4 charts with all possible combinations of XAxisInverted and YAxisInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use React Data Chart to share axis, add multiple y-axis and/or x-axis in the same plot area, or even cross axes at specific values. The following examples show how to use these features of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html).

### Axis Sharing Example

You can share and add multiple axes in the same plot area of the React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html). It a common scenario to use share [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) and add multiple [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

The following example depicts a stock price and trade volume chart with a [Stock Chart](../types/stock-chart.md) and a [Column Chart](../types/column-chart.md) plotted. In this case, the Y-Axis on the left is used by the [Column Chart](../types/column-chart.md) and the Y-Axis on the right is used by the [Stock Chart](../types/stock-chart.md), while the X-Axis is shared between the two.

```typescript
export class SharedAxisFinancialData {

    public static create(items?: number): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = Math.round(o + (Math.random() * 5));
        let l = Math.round(o - (Math.random() * 5));
        let c = Math.round(l + (Math.random() * (h - l)));

        if (items === undefined) {
            items = 400;
        }

        const today = new Date();
        const end = new Date(today.getFullYear(), today.getMonth(), today.getDay());
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const date = time.toDateString();
            const label = this.getShortDate(time, false);
            // adding new data item
            data.push({"Time": time, "Date": date, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.49;
            o = Math.round(o + (mod * 20));
            o = Math.max(o, 500);
            o = Math.min(o, 675);

            v = Math.round(v + (mod * 500));
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SharedAxisFinancialData } from './SharedAxisFinancialData';
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';

IgrNumberAbbreviatorModule.register();
IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.data = SharedAxisFinancialData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        subtitle="Stock Prices and Trade Volume"
                        subtitleTopMargin="10"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxisShared" label="Label" gap="0.75"/>
                        <IgrNumericYAxis  name="yAxisRight" labelLocation="OutsideRight"
                        minimumValue={400} title="Stock Price ($)"
                        maximumValue={700}
                        />
                        <IgrNumericYAxis name="yAxisLeft" labelLocation="OutsideLeft"
                        minimumValue={5000} title="Trade Volume"
                        maximumValue={45000}
                        majorStrokeThickness={0}
                        abbreviateLargeNumbers={true}/>

                        <IgrColumnSeries
                        name="series2"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisLeft"
                        valueMemberPath="Volume"
                        showDefaultTooltip="true"
                        title="Trade Volume" />

                        <IgrFinancialPriceSeries
                        name="series1"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisRight"
                        displayType="Candlestick"
                        highMemberPath="High"
                        lowMemberPath="Low"
                        closeMemberPath="Close"
                        openMemberPath="Open"
                        volumeMemberPath="Volume"
                        showDefaultTooltip="true"
                        title="Stock Price" />

                    </IgrDataChart>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartAxisSharing/>);
```


<div class="divider--half"></div>

### Axis Crossing Example

In addition to placing axes outside plot area, the React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) also provides options to position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting [`crossingAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#crossingAxis) and [`crossingValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#crossingValue) properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at (0, 0) origin point.

The following example shows a Sin and Cos wave represented by a [Scatter Spline Chart](../types/scatter-chart.md) with the X and Y axes crossing each other at the (0, 0) origin point.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataChartCoreModule, IgrDataChartInteractivityModule, IgrDataChartScatterCoreModule, IgrDataChartScatterModule,
         IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSplineSeries } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[] = [];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);        
        
        this.onXAxisCrossValueChange = this.onXAxisCrossValueChange.bind(this);
        this.onYAxisCrossValueChange = this.onYAxisCrossValueChange.bind(this);

        this.state = {
            xAxisCrossValue: 0,
            yAxisCrossValue: 0
        }
        
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="option-label">X-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.xAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-360} max={360} step={10} value={this.state.xAxisCrossValue}
                           onChange={this.onXAxisCrossValueChange}/>
                    <label className="option-label">Y-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.yAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-1.25} max={1.25} step={0.125} value={this.state.yAxisCrossValue} 
                           onChange={this.onYAxisCrossValueChange}/>
                </div>
                <div className="container">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        plotAreaMarginBottom={60}
                        plotAreaMarginTop={60}
                        plotAreaMarginLeft={30}
                        plotAreaMarginRight={30}>

                        <IgrNumericXAxis name="xAxis" interval={40} minimumValue={-360} maximumValue={360} labelLocation="InsideBottom"
                            labelTopMargin={10} crossingAxisName="yAxis" crossingValue={this.state.yAxisCrossValue} strokeThickness={1} stroke="Black" />

                        <IgrNumericYAxis name="yAxis" minimumValue={-1.25} maximumValue={1.25} interval={0.25} labelLocation="InsideLeft"
                            labelRightMargin={10} crossingAxisName="xAxis" crossingValue={this.state.xAxisCrossValue} strokeThickness={1} stroke="Black" />

                        <IgrScatterSplineSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" markerType="Circle" xMemberPath="X" yMemberPath="sinValue" />
                        <IgrScatterSplineSeries name="series2" xAxisName="xAxis" yAxisName="yAxis" markerType="Circle" xMemberPath="X" yMemberPath="cosValue" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        for (let i = -360; i <= 360; i += 10) {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);
            this.data.push({ X: i, sinValue: sin, cosValue: cos });
        }
    }

    public onXAxisCrossValueChange(e: any){
        this.setState({ xAxisCrossValue: e.target.value});
    }

    public onYAxisCrossValueChange(e: any){
        this.setState({ yAxisCrossValue: e.target.value});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartAxisSharing/>);
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:
d in the above sections:

| [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)                                         | [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)                 |
| ------------------------------------------------------ | ------------------------------- |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`crossingAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#crossingAxis)             | None                            |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`crossingValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#crossingValue)            | None                            |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ [`isInverted`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#isInverted)               | [`xAxisInverted`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisInverted)                 |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ [`isInverted`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#isInverted)               | [`yAxisInverted`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisInverted)                 |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ `LabelLocation`            | [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisLabelLocation)            |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ `LabelLocation`            | [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisLabelLocation)            |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ `LabelHorizontalAlignment` | [`yAxisLabelHorizontalAlignment`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisLabelHorizontalAlignment) |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ `LabelVerticalAlignment`   | [`xAxisLabelVerticalAlignment`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisLabelVerticalAlignment)   |
| `Axes` ➔ [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) ➔ `LabelVisibility`          | [`yAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisLabelVisibility)          |
| `Axes` ➔ [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) ➔ `LabelVisibility`          | [`xAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisLabelVisibility)          |

<!-- TODO correct links in Transformer -->

<!--
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.location`            | `YAxisLabelLocation`            |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.location`            | `XAxisLabelLocation`            |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.horizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.verticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.visibility`          | `YAxisLabelVisibility`          |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.visibility`          | `XAxisLabelVisibility`          | -->
