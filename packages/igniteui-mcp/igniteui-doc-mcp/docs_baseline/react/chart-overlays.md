---
title: React Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics Ignite UI for React chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our Ignite UI for React graph types!
_keywords: React charts, data chart, value overlay, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Overlays
_premium: true
---

# React Chart Overlays

The React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgrValueOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html). This can help you to visualize data such as the mean or median of a particular series.

## React Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrValueOverlay } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartValueOverlay extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{height: "calc(100% - 35px)"}}>
                    <IgrDataChart width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0} maximumValue={10} />

                        <IgrColumnSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Value" />

                        <IgrValueOverlay name="overlay1" axisName="yAxis" value={2.0} thickness={5} />
                        <IgrValueOverlay name="overlay2" axisName="yAxis" value={3.6} thickness={5} />
                        <IgrValueOverlay name="overlay3" axisName="yAxis" value={5.8} thickness={5} />
                        <IgrValueOverlay name="overlay4" axisName="yAxis" value={1.0} thickness={5} />
                        <IgrValueOverlay name="overlay5" axisName="yAxis" value={8.0} thickness={5} />
                        <IgrValueOverlay name="overlay6" axisName="yAxis" value={7.0} thickness={5} />
                        <IgrValueOverlay name="overlay7" axisName="yAxis" value={5.0} thickness={5} />
                    </IgrDataChart>
                </div>
            </div >
        );
    }

    public initData() {
        this.data = [
            { "Label": 1, "Value": 1.0 },
            { "Label": 2, "Value": 2.0 },
            { "Label": 3, "Value": 6.0 },
            { "Label": 4, "Value": 8.0 },
            { "Label": 5, "Value": 2.0 },
            { "Label": 6, "Value": 6.0 },
            { "Label": 7, "Value": 4.0 },
            { "Label": 8, "Value": 2.0 },
            { "Label": 9, "Value": 1.0 },
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartValueOverlay/>);
```

<div class="divider--half"></div>

## React Value Overlay Properties

Unlike other series types that use a `ItemsSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single [`axis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgrValueOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html) appearance properties are inherited from [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html) and so [`brush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#brush) and [`thickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#thickness) for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a [`IgrValueOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html) to show the value of the overlay on the owning axis. In order to show this, you can set the [`isAxisAnnotationEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#isAxisAnnotationEnabled) property to true.

## React Value Layer

The React charting components also expose the ability to use value lines to call out different focal points of your data, such as minimum, maximum, and average values.

Applying the [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html) in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) components is done by setting the [`valueLines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#valueLines) property on the chart. This property takes a collection of the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html) enumeration. You can mix and match multiple value layers in the same chart by adding multiple [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html) enumerations to the [`valueLines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#valueLines) collection of the chart.

In the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html), this is done by adding a [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html) to the [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html) collection of the chart and then setting the `ValueMode` property to one of the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html) enumerations. Each of these enumerations and what they mean is listed below:

- [`Auto`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#Auto): The default value mode of the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html) enumeration.
- [`Average`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#Average): Applies potentially multiple value lines to call out the average value of each series plotted in the chart.
- [`GlobalAverage`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#GlobalAverage): Applies a single value line to call out the average of all of the series values in the chart.
- [`GlobalMaximum`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#GlobalMaximum): Applies a single value line to call out the absolute maximum value of all of the series values in the chart.
- [`GlobalMinimum`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#GlobalMinimum): Applies a single value line to call out the absolute minimum value of all of the series values in the chart.
- [`Maximum`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#Maximum): Applies potentially multiple value lines to call out the maximum value of each series plotted in the chart.
- [`Minimum`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html#Minimum): Applies potentially multiple value lines to call out the minimum value of each series plotted in the chart.

If you want to prevent any particular series from being taken into account when using the [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html) element, you can set the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html#targetSeries) property on the layer. This will force the layer to target the series that you define. You can have as many [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html) elements within a single [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) as you want.

The following sample demonstrates usage of the different [`valueLines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#valueLines) in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html):

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
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { MarkerType, MarkerType_$type } from 'igniteui-react-charts';
import { EnumUtil } from 'igniteui-react-core';

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
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private valueListEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.editorChangeUpdateValueLines = this.editorChangeUpdateValueLines.bind(this);
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
                        propertyPath="ValueListHandler"
                        name="ValueListEditor"
                        label="Value List"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownValues={["Auto", "Average", "GlobalAverage", "GlobalMaximum", "GlobalMinimum", "Maximum", "Minimum"]}
                        dropDownNames={["Auto", "Average", "GlobalAverage", "GlobalMaximum", "GlobalMinimum", "Maximum", "Minimum"]}
                        primitiveValue="Auto"
                        changed={this.editorChangeUpdateValueLines}>
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
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "america", "europe"]}
                    chartType="Column"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    crosshairsDisplayMode="None"
                    isTransitionInEnabled="false"
                    yAxisMinimumValue="0"
                    yAxisMaximumValue="100">
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

    public editorChangeUpdateValueLines(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgrPropertyEditorPropertyDescription;
        var chart = this.chart;

        var valueLineType = item.primitiveValue;
        chart.valueLines = valueLineType;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Financial Overlays

You can also plot built-in financial overlays and indicators in React [Stock Chart](../types/stock-chart.md).

## Chart Overlay Text <label class="badge badge--preview">PREVIEW</label>

The React [`IgrValueOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html), [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html), and all Data Annotation Layers can render custom overlay text inside plot area of the XamDataChart component. You can use this overlay text to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis in relationship to the layers.

For example, you can use [`IgrDataAnnotationSliceLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationslicelayer.html), [`IgrValueOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html), and [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html) to show overlay text.

```typescript
export class AnnotationSliceMultiOverlayDataItem {
    public constructor(init: Partial<AnnotationSliceMultiOverlayDataItem>) {
        Object.assign(this, init);
    }

    public value: number;

}
export class AnnotationSliceMultiOverlayData extends Array<AnnotationSliceMultiOverlayDataItem> {
    public constructor(items: Array<AnnotationSliceMultiOverlayDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceMultiOverlayDataItem({ value: 50 }),
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule, IgrDataChartAnnotationModule, IgrDataAnnotationSliceLayerModule, IgrNumberAbbreviatorModule, IgrValueOverlayModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrValueOverlay, IgrValueLayer, IgrDataAnnotationSliceLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationSliceMultiOverlayDataItem, AnnotationSliceMultiOverlayData } from './AnnotationSliceMultiOverlayData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationSliceLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule,
    IgrValueOverlayModule
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
    private yAxisRef(r: IgrNumericYAxis) {
        this.yAxis = r;
        this.setState({});
    }
    private series1: IgrLineSeries
    private valueOverlay: IgrValueOverlay
    private valueLayer: IgrValueLayer
    private annoLayer: IgrDataAnnotationSliceLayer
    private annoLayerRef(r: IgrDataAnnotationSliceLayer){
        this.annoLayer = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.yAxisRef = this.yAxisRef.bind(this);
        this.annoLayerRef = this.annoLayerRef.bind(this);
    }
    componentDidMount(): void {
        this.annoLayer.targetAxis = this.yAxis;
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    plotAreaMarginBottom="50"
                    chartTitle="This sample demonstrates the DataAnnotationSliceLayer with overlay text compared against the value layers in the DataChart.">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="5"
                        labelRightMargin="0"
                        labelBottomMargin="15">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        ref={this.yAxisRef}
                        labelExtent="60"
                        labelHorizontalAlignment="Center"
                        labelLeftMargin="0"
                        labelTopMargin="0"
                        labelRightMargin="5"
                        labelBottomMargin="0"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="series1"
                        title="Stock Price"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.stockTesla}
                        valueMemberPath="open"
                        showDefaultTooltip="true"
                        markerType="None"
                        brush="black">
                    </IgrLineSeries>
                    <IgrValueOverlay
                        name="valueOverlay"
                        value="435"
                        brush="green"
                        isAxisAnnotationEnabled="true"
                        thickness="2"
                        dashArray="2, 4"
                        axisName="yAxis"
                        overlayText="OverlayText on ValueOverlay"
                        overlayTextLocation="OutsideBottomCenter">
                    </IgrValueOverlay>
                    <IgrValueLayer
                        name="valueLayer"
                        valueMode="Average"
                        brush="purple"
                        thickness="2"
                        dashArray="2, 4"
                        targetAxisName="yAxis"
                        isAxisAnnotationEnabled="true"
                        overlayText="OverlayText on ValueLayer (Average)"
                        overlayTextLocation="OutsideBottomCenter">
                    </IgrValueLayer>
                    <IgrDataAnnotationSliceLayer
                        name="AnnoLayer"
                        ref={this.annoLayerRef}
                        dataSource={this.annotationSliceMultiOverlayData}
                        brush="green"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="OutsideBottomCenter"
                        overlayText="OverlayText on DataAnnotationSliceLayer"
                        thickness="2">
                    </IgrDataAnnotationSliceLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationSliceMultiOverlayData: AnnotationSliceMultiOverlayData = null;
    public get annotationSliceMultiOverlayData(): AnnotationSliceMultiOverlayData {
        if (this._annotationSliceMultiOverlayData == null)
        {
            this._annotationSliceMultiOverlayData = new AnnotationSliceMultiOverlayData();
        }
        return this._annotationSliceMultiOverlayData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Styling Overlay Text

This code example shows how to style and customize Overlay Text on
the [`IgrDataAnnotationSliceLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationslicelayer.html), [`IgrValueOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html), and [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html).

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Chart Annotations](chart-annotations.md)
- [Column Chart](../types/area-chart.md)
- [Line Chart](../types/line-chart.md)
- [Stock Chart](../types/stock-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
- `ItemsSource`
- [`IgrValueOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html)
- [`axis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#axis)
- [`brush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#brush)
- `IsAxisAnnotationsEnabled`
- [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html)
- [`thickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#thickness)
- [`IgrValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluelayer.html)
- [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.valuelayervaluemode.html)
- [`valueLines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#valueLines)
- [`overlayText`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#overlayText)
- `TargetAxis`
- `OverlayTextMemberPath`
- [`overlayTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#overlayTextColor)
- [`overlayTextBackground`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#overlayTextBackground)
- [`overlayTextBorderColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#overlayTextBorderColor)
- [`overlayTextLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvalueoverlay.html#overlayTextLocation)
