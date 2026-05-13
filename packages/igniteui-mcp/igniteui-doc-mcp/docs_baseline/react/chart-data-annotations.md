---
title: React Chart Data Annotations | Data Visualization | Infragistics
_description: Infragistics' React Chart Data Annotations
_keywords: React Charts, Data Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Annotations
_premium: true
---

# React Chart Data Annotations <label class="badge badge--preview">PREVIEW</label>

In the React chart, the data annotation layers allow you to annotate data plotted in Data Chart with sloped lines, vertical/horizontal lines (aka axis slices), vertical/horizontal strips (targeting specific axis), rectangles, and even parallelograms (aka bands). With data-binding supported, you can create as many annotations as you want to customize your charts. Also, you can combine different annotation layers and you can overlay text inside of plot area to annotated important events, patterns, and regions in your data.

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
                new AnnotationSliceEarningsBeatDataItem({ value: 28, label: `Earnings Miss` }),
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationStripLayerModule, IgrDataAnnotationSliceLayerModule, IgrDataAnnotationLineLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationStripLayer, IgrDataAnnotationLineLayer, IgrDataAnnotationSliceLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationStripDataItem, AnnotationStripData } from './AnnotationStripData';
import { AnnotationLineData1Item, AnnotationLineData1 } from './AnnotationLineData1';
import { AnnotationLineData2Item, AnnotationLineData2 } from './AnnotationLineData2';
import { AnnotationSliceStockSplitDataItem, AnnotationSliceStockSplitData } from './AnnotationSliceStockSplitData';
import { AnnotationSliceEarningsMissDataItem, AnnotationSliceEarningsMissData } from './AnnotationSliceEarningsMissData';
import { AnnotationSliceEarningsBeatDataItem, AnnotationSliceEarningsBeatData } from './AnnotationSliceEarningsBeatData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationStripLayerModule,
    IgrDataAnnotationSliceLayerModule,
    IgrDataAnnotationLineLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxisBottom: IgrCategoryXAxis
    private xAxisBottonRef(r: IgrCategoryXAxis){
        this.xAxisBottom = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
     private xAxisRef(r: IgrCategoryXAxis){
        this.xAxis = r;
        this.setState({});
    }
    private xAxisTop: IgrCategoryXAxis
    private xAxisTopRef(r: IgrCategoryXAxis){
        this.xAxisTop = r;
        this.setState({});
    }
    private yAxisLeft: IgrNumericYAxis
    private yAxisLeftRef(r: IgrNumericYAxis){
        this.yAxisLeft = r;
        this.setState({});
    }
    private yAxisRight: IgrNumericYAxis
      private yAxisRightRef(r: IgrNumericYAxis){
        this.yAxisRight = r;
        this.setState({});
    }
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private stripLayer: IgrDataAnnotationStripLayer
     private stripRef1(r: IgrDataAnnotationStripLayer){
        this.stripLayer = r;
        this.setState({});
    }
    private lineLayer52WeekRange: IgrDataAnnotationLineLayer
    private lineRef1(r: IgrDataAnnotationLineLayer){
        this.lineLayer52WeekRange = r;
        this.setState({});
    }
    private lineLayerGrowthAndDecline: IgrDataAnnotationLineLayer
     private lineRef2(r: IgrDataAnnotationLineLayer){
        this.lineLayerGrowthAndDecline = r;
        this.setState({});
    }
    private sliceLayerStockSplit: IgrDataAnnotationSliceLayer
     private sliceRef1(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerStockSplit = r;
        this.setState({});
    }
    private sliceLayerEarningsMissAnnotations: IgrDataAnnotationSliceLayer
    private sliceRef2(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerEarningsMissAnnotations = r;
        this.setState({});
    }
    private sliceLayerEarningsBeatAnnotations: IgrDataAnnotationSliceLayer
    private sliceRef3(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerEarningsBeatAnnotations = r;
        this.setState({});
    }
    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.stripRef1 = this.stripRef1.bind(this);
        this.lineRef1 = this.lineRef1.bind(this);
        this.lineRef2 = this.lineRef2.bind(this);
        this.sliceRef1 = this.sliceRef1.bind(this);
        this.sliceRef2 = this.sliceRef2.bind(this);
        this.sliceRef3 = this.sliceRef3.bind(this);
        this.xAxisRef = this.xAxisRef.bind(this);
        this.xAxisBottonRef = this.xAxisBottonRef.bind(this);
        this.xAxisTopRef = this.xAxisTopRef.bind(this);
        this.yAxisLeftRef = this.yAxisLeftRef.bind(this);
        this.yAxisRightRef = this.yAxisRightRef.bind(this);
    }
    componentDidMount(): void {
        this.stripLayer.targetAxis = this.xAxisTop;
        this.lineLayer52WeekRange.targetAxis = this.yAxisRight;
        this.lineLayerGrowthAndDecline.targetAxis = this.xAxis;
        this.sliceLayerStockSplit.targetAxis = this.xAxisBottom;
        this.sliceLayerEarningsMissAnnotations.targetAxis = this.xAxisBottom;
        this.sliceLayerEarningsBeatAnnotations.targetAxis = this.xAxisBottom;        
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="false"
                    isHorizontalZoomEnabled="true"
                    brushes="green red"
                    outlines="green red"
                    plotAreaMarginLeft="10"
                    plotAreaMarginTop="0"
                    plotAreaMarginRight="20"
                    plotAreaMarginBottom="0"
                    leftMargin="10"
                    topMargin="0"
                    rightMargin="20"
                    bottomMargin="0"
                    isWindowSyncedToVisibleRange="false"
                    chartTitle="This Data Chart has multiple Data Annotation Layers bound to data that annotates important events and patterns in stock prices.">
                    <IgrCategoryXAxis
                        name="xAxisBottom"
                        ref={this.xAxisBottonRef}
                        dataSource={this.stockTesla}
                        label="index"
                        tickLength="0"
                        labelLocation="OutsideBottom"
                        labelTextColor="rgba(0, 0, 0, 0)"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="140"
                        labelLeftMargin="0"
                        labelTopMargin="15"
                        labelRightMargin="0"
                        labelBottomMargin="15"
                        labelAngle="90">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxis"
                        ref={this.xAxisRef}
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="5"
                        labelRightMargin="0"
                        labelBottomMargin="5">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxisTop"
                        ref={this.xAxisTopRef}
                        dataSource={this.stockTesla}
                        label="date"
                        tickLength="0"
                        labelLocation="OutsideTop"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="40"
                        labelTextColor="rgba(0, 0, 0, 0)"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxisLeft"
                        ref={this.yAxisLeftRef}
                        labelLocation="OutsideLeft"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Right"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrNumericYAxis
                        name="yAxisRight"
                        ref={this.yAxisRightRef}
                        labelLocation="OutsideRight"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Left"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxisLeft"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["high", "low", "open", "close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationStripLayer
                        ref={this.stripRef1}
                        name="StripLayer"
                        dataSource={this.annotationStripData}
                        centerLabelMemberPath="label"
                        startValueMemberPath="start"
                        endValueMemberPath="end"
                        endLabelDisplayMode="Hidden"
                        startLabelDisplayMode="Hidden"
                        brush="black"
                        outline="black"
                        overlayTextColor="purple"
                        overlayTextLocation="Hidden"
                        overlayTextMemberPath="label">
                    </IgrDataAnnotationStripLayer>
                    <IgrDataAnnotationLineLayer
                        name="LineLayer52WeekRange"
                        ref={this.lineRef1}
                        dataSource={this.annotationLineData1}
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        startLabelYDisplayMode="DataValue"
                        endLabelXDisplayMode="Hidden"
                        endLabelYDisplayMode="DataValue"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="5"
                        overlayTextHorizontalMargin="5"
                        overlayTextLocation="OutsideBottomLeft"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationLineLayer>
                    <IgrDataAnnotationLineLayer
                        name="LineLayerGrowthAndDecline"
                        ref={this.lineRef2}
                        dataSource={this.annotationLineData2}
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        endLabelXDisplayMode="Hidden"
                        annotationBackgroundMode="BrightnessShift"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="-10"
                        overlayTextHorizontalMargin="70"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationLineLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerStockSplit"
                        ref={this.sliceRef1}
                        dataSource={this.annotationSliceStockSplitData}
                        brush="dodgerblue"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
                    </IgrDataAnnotationSliceLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerEarningsMissAnnotations"
                        ref={this.sliceRef2}
                        dataSource={this.annotationSliceEarningsMissData}
                        brush="red"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
                    </IgrDataAnnotationSliceLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerEarningsBeatAnnotations"
                        ref={this.sliceRef3}
                        dataSource={this.annotationSliceEarningsBeatData}
                        brush="green"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
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

    private _annotationStripData: AnnotationStripData = null;
    public get annotationStripData(): AnnotationStripData {
        if (this._annotationStripData == null)
        {
            this._annotationStripData = new AnnotationStripData();
        }
        return this._annotationStripData;
    }

    private _annotationLineData1: AnnotationLineData1 = null;
    public get annotationLineData1(): AnnotationLineData1 {
        if (this._annotationLineData1 == null)
        {
            this._annotationLineData1 = new AnnotationLineData1();
        }
        return this._annotationLineData1;
    }

    private _annotationLineData2: AnnotationLineData2 = null;
    public get annotationLineData2(): AnnotationLineData2 {
        if (this._annotationLineData2 == null)
        {
            this._annotationLineData2 = new AnnotationLineData2();
        }
        return this._annotationLineData2;
    }

    private _annotationSliceStockSplitData: AnnotationSliceStockSplitData = null;
    public get annotationSliceStockSplitData(): AnnotationSliceStockSplitData {
        if (this._annotationSliceStockSplitData == null)
        {
            this._annotationSliceStockSplitData = new AnnotationSliceStockSplitData();
        }
        return this._annotationSliceStockSplitData;
    }

    private _annotationSliceEarningsMissData: AnnotationSliceEarningsMissData = null;
    public get annotationSliceEarningsMissData(): AnnotationSliceEarningsMissData {
        if (this._annotationSliceEarningsMissData == null)
        {
            this._annotationSliceEarningsMissData = new AnnotationSliceEarningsMissData();
        }
        return this._annotationSliceEarningsMissData;
    }

    private _annotationSliceEarningsBeatData: AnnotationSliceEarningsBeatData = null;
    public get annotationSliceEarningsBeatData(): AnnotationSliceEarningsBeatData {
        if (this._annotationSliceEarningsBeatData == null)
        {
            this._annotationSliceEarningsBeatData = new AnnotationSliceEarningsBeatData();
        }
        return this._annotationSliceEarningsBeatData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

Like this sample? Get access to our complete React toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-react/download">Download it for free.</a>

## React Data Annotation Slice Layer Example

In React, the link:{DataChartLink}.DataAnnotationSliceLayer.html\[DataAnnotationSliceLayer] renders multiple vertical or horizontal lines that slice the chart at multiple values of an axis in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component. This data annotation layer is often used to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal slices or setting TargetAxis property to x-axis will render data annotation layer as vertical slices. Similarly to all series, the DataAnnotationSliceLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the `AnnotationValueMemberPath` property.

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
                new AnnotationSliceEarningsBeatDataItem({ value: 28, label: `Earnings Miss` }),
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationSliceLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationSliceLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationSliceStockSplitDataItem, AnnotationSliceStockSplitData } from './AnnotationSliceStockSplitData';
import { AnnotationSliceEarningsMissDataItem, AnnotationSliceEarningsMissData } from './AnnotationSliceEarningsMissData';
import { AnnotationSliceEarningsBeatDataItem, AnnotationSliceEarningsBeatData } from './AnnotationSliceEarningsBeatData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationSliceLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxisBottom: IgrCategoryXAxis
    private xAxisBottomRef(r: IgrCategoryXAxis){
        this.xAxisBottom =r;
        this.setState({});
    }
    private xAxisTop: IgrCategoryXAxis
    private yAxisLeft: IgrNumericYAxis
    private yAxisRight: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private sliceLayerStockSplit: IgrDataAnnotationSliceLayer
    private sliceLayerStockSplitRef(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerStockSplit = r;
        this.setState({});
    }
    private sliceLayerEarningsMissAnnotations: IgrDataAnnotationSliceLayer
    private sliceLayerEarningsMissAnnotationsRef(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerEarningsMissAnnotations = r;
        this.setState({});
    }
    private sliceLayerEarningsBeatAnnotations: IgrDataAnnotationSliceLayer
    private sliceLayerEarningsBeatAnnotationsRef(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerEarningsBeatAnnotations = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.sliceLayerStockSplitRef = this.sliceLayerStockSplitRef.bind(this);
        this.xAxisBottomRef = this.xAxisBottomRef.bind(this);
        this.sliceLayerEarningsMissAnnotationsRef = this.sliceLayerEarningsMissAnnotationsRef.bind(this);
        this.sliceLayerEarningsBeatAnnotationsRef = this.sliceLayerEarningsBeatAnnotationsRef.bind(this);
    }

    componentDidMount(): void {
        this.sliceLayerStockSplit.targetAxis = this.xAxisBottom;
        this.sliceLayerEarningsMissAnnotations.targetAxis = this.xAxisBottom;
        this.sliceLayerEarningsBeatAnnotations.targetAxis = this.xAxisBottom;
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="false"
                    isHorizontalZoomEnabled="true"
                    brushes="green red"
                    outlines="green red"
                    plotAreaMarginLeft="10"
                    plotAreaMarginTop="0"
                    plotAreaMarginRight="20"
                    plotAreaMarginBottom="0"
                    leftMargin="10"
                    topMargin="0"
                    rightMargin="20"
                    bottomMargin="0"
                    isWindowSyncedToVisibleRange="false"
                    chartTitle="This Data Chart demonstrates the DataAnnotationSliceLayer bound to data that annotates stock splits and earnings miss/beat events.">
                    <IgrCategoryXAxis
                        name="xAxisBottom"
                        ref={this.xAxisBottomRef}
                        dataSource={this.stockTesla}
                        label="index"
                        tickLength="0"
                        labelLocation="OutsideBottom"
                        labelTextColor="rgba(0, 0, 0, 0)"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="140"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        labelAngle="90">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxisTop"
                        dataSource={this.stockTesla}
                        label="date"
                        labelLocation="OutsideBottom">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxisLeft"
                        labelLocation="OutsideLeft"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Right"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrNumericYAxis
                        name="yAxisRight"
                        labelLocation="OutsideRight"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Left"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxisTop"
                        yAxisName="yAxisLeft"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["high", "low", "open", "close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerStockSplit"
                        ref={this.sliceLayerStockSplitRef}
                        dataSource={this.annotationSliceStockSplitData}
                        brush="dodgerblue"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
                    </IgrDataAnnotationSliceLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerEarningsMissAnnotations"
                        ref={this.sliceLayerEarningsMissAnnotationsRef}
                        dataSource={this.annotationSliceEarningsMissData}
                        brush="red"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
                    </IgrDataAnnotationSliceLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerEarningsBeatAnnotations"
                        ref={this.sliceLayerEarningsBeatAnnotationsRef}
                        dataSource={this.annotationSliceEarningsBeatData}
                        brush="green"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
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

    private _annotationSliceStockSplitData: AnnotationSliceStockSplitData = null;
    public get annotationSliceStockSplitData(): AnnotationSliceStockSplitData {
        if (this._annotationSliceStockSplitData == null)
        {
            this._annotationSliceStockSplitData = new AnnotationSliceStockSplitData();
        }
        return this._annotationSliceStockSplitData;
    }

    private _annotationSliceEarningsMissData: AnnotationSliceEarningsMissData = null;
    public get annotationSliceEarningsMissData(): AnnotationSliceEarningsMissData {
        if (this._annotationSliceEarningsMissData == null)
        {
            this._annotationSliceEarningsMissData = new AnnotationSliceEarningsMissData();
        }
        return this._annotationSliceEarningsMissData;
    }

    private _annotationSliceEarningsBeatData: AnnotationSliceEarningsBeatData = null;
    public get annotationSliceEarningsBeatData(): AnnotationSliceEarningsBeatData {
        if (this._annotationSliceEarningsBeatData == null)
        {
            this._annotationSliceEarningsBeatData = new AnnotationSliceEarningsBeatData();
        }
        return this._annotationSliceEarningsBeatData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Data Annotation Strip Layer Example

In React, the [`IgrDataAnnotationStripLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationstriplayer.html) renders multiple vertical or horizontal strips between 2 values on an axis in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component. This data annotation layer can be used to annotate duration of events (e.g. stock market crash) on x-axis or important range of values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal strips or setting TargetAxis property to x-axis will render data annotation layer as vertical strips. Similarly to all series, the [`IgrDataAnnotationStripLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationstriplayer.html) also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the AnnotationValueMemberPath property.

For example, you can use [`IgrDataAnnotationStripLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationstriplayer.html) to annotate chart with stock market crashes and changes in federal interest rates.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationStripLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationStripLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationStripDataItem, AnnotationStripData } from './AnnotationStripData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationStripLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxisBottom: IgrCategoryXAxis
    private xAxisTop: IgrCategoryXAxis
    private xAxisTopRef(r: IgrCategoryXAxis){
        this.xAxisTop = r;
        this.setState({});
    }
    private yAxisLeft: IgrNumericYAxis
    private yAxisRight: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private stripLayer: IgrDataAnnotationStripLayer
    private stripLayerRef(r: IgrDataAnnotationStripLayer){
        this.stripLayer = r;
        this.setState({});
    }
    componentDidMount(): void {
        this.stripLayer.targetAxis = this.xAxisTop;
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.xAxisTopRef = this.xAxisTopRef.bind(this);
        this.stripLayerRef = this.stripLayerRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="false"
                    isHorizontalZoomEnabled="true"
                    brushes="green red"
                    outlines="green red"
                    plotAreaMarginLeft="10"
                    plotAreaMarginTop="0"
                    plotAreaMarginRight="20"
                    plotAreaMarginBottom="0"
                    leftMargin="10"
                    topMargin="0"
                    rightMargin="20"
                    bottomMargin="0"
                    isWindowSyncedToVisibleRange="false"
                    chartTitle="This Data Chart demonstrates the DataAnnotationStripLayer bound to data that markert events affecting stock prices.">
                    <IgrCategoryXAxis
                        name="xAxisBottom"
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="10"
                        labelTopMargin="5"
                        labelRightMargin="10"
                        labelBottomMargin="15">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxisTop"
                        ref={this.xAxisTopRef}
                        dataSource={this.stockTesla}
                        label="date"
                        tickLength="0"
                        labelTextColor="rgba(0, 0, 0, 0)"
                        labelLocation="OutsideTop"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="40"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxisLeft"
                        labelLocation="OutsideLeft"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Right"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrNumericYAxis
                        name="yAxisRight"
                        labelLocation="OutsideRight"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Left"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxisBottom"
                        yAxisName="yAxisLeft"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["high", "low", "open", "close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationStripLayer
                        name="StripLayer"
                        ref={this.stripLayerRef}
                        dataSource={this.annotationStripData}
                        centerLabelMemberPath="label"
                        startValueMemberPath="start"
                        endValueMemberPath="end"
                        startLabelDisplayMode="Hidden"
                        endLabelDisplayMode="Hidden"
                        brush="black"
                        outline="black"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="-50"
                        overlayTextLocation="InsideTopCenter"
                        overlayTextMemberPath="label">
                    </IgrDataAnnotationStripLayer>
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

    private _annotationStripData: AnnotationStripData = null;
    public get annotationStripData(): AnnotationStripData {
        if (this._annotationStripData == null)
        {
            this._annotationStripData = new AnnotationStripData();
        }
        return this._annotationStripData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Data Annotation Line Layer Example

In React, [`IgrDataAnnotationLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationlinelayer.html) renders multiple lines between 2 points in plot area of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component. This data annotation layer can be used to annotate stock chart with growth and decline in stock prices. Similarly to all series, the DataAnnotationLineLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath`  properties.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationLineLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationLineLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationLineData1Item, AnnotationLineData1 } from './AnnotationLineData1';
import { AnnotationLineData2Item, AnnotationLineData2 } from './AnnotationLineData2';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationLineLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    } 
    private xAxis: IgrCategoryXAxis
    private xAxisRef(r: IgrCategoryXAxis){
        this.xAxis = r;
        this.setState({});
    }
    private yAxisLeft: IgrNumericYAxis
    private yAxisRight: IgrNumericYAxis
    private yAxisRightRef(r: IgrNumericYAxis){
        this.yAxisRight = r;
        this.setState({});
    }
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private lineLayer52WeekRange: IgrDataAnnotationLineLayer
    private lineLayer52WeekRangeRef(r: IgrDataAnnotationLineLayer){
        this.lineLayer52WeekRange = r;
        this.setState({});
    }
    private lineLayerGrowthAndDecline: IgrDataAnnotationLineLayer
    private lineLayerGrowthAndDeclineRef(r: IgrDataAnnotationLineLayer){
        this.lineLayerGrowthAndDecline = r;
        this.setState({});
    }
    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.xAxisRef = this.xAxisRef.bind(this);
        this.yAxisRightRef = this.yAxisRightRef.bind(this);
        this.lineLayer52WeekRangeRef = this.lineLayer52WeekRangeRef.bind(this);
        this.lineLayerGrowthAndDeclineRef = this.lineLayerGrowthAndDeclineRef.bind(this);
    }
    componentDidMount(): void {
        this.lineLayer52WeekRange.targetAxis = this.yAxisRight;
        this.lineLayerGrowthAndDecline.targetAxis = this.xAxis;
    }
    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="false"
                    isHorizontalZoomEnabled="true"
                    brushes="green red"
                    outlines="green red"
                    plotAreaMarginLeft="10"
                    plotAreaMarginTop="0"
                    plotAreaMarginRight="20"
                    plotAreaMarginBottom="0"
                    leftMargin="10"
                    topMargin="0"
                    rightMargin="20"
                    bottomMargin="0"
                    isWindowSyncedToVisibleRange="false"
                    chartTitle="The Data Chart demonstrates the DataAnnotationLineLayer bound to data that annotates stock growth and decline patterns.">
                    <IgrCategoryXAxis
                        name="xAxis"
                        ref={this.xAxisRef}
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="10"
                        labelRightMargin="0"
                        labelBottomMargin="15">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxisLeft"
                        labelLocation="OutsideLeft"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Right"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrNumericYAxis
                        name="yAxisRight"
                        ref={this.yAxisRightRef}
                        labelLocation="OutsideRight"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Left"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxisLeft"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["high", "low", "open", "close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationLineLayer
                        name="LineLayer52WeekRange"
                        ref={this.lineLayer52WeekRangeRef}
                        dataSource={this.annotationLineData1}
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        startLabelYDisplayMode="DataValue"
                        endLabelXDisplayMode="Hidden"
                        endLabelYDisplayMode="DataValue"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="5"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="OutsideBottomLeft"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationLineLayer>
                    <IgrDataAnnotationLineLayer
                        name="LineLayerGrowthAndDecline"
                        ref={this.lineLayerGrowthAndDeclineRef}
                        dataSource={this.annotationLineData2}
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        endLabelXDisplayMode="Hidden"
                        annotationBackgroundMode="BrightnessShift"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="-10"
                        overlayTextHorizontalMargin="70"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationLineLayer>
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

    private _annotationLineData1: AnnotationLineData1 = null;
    public get annotationLineData1(): AnnotationLineData1 {
        if (this._annotationLineData1 == null)
        {
            this._annotationLineData1 = new AnnotationLineData1();
        }
        return this._annotationLineData1;
    }

    private _annotationLineData2: AnnotationLineData2 = null;
    public get annotationLineData2(): AnnotationLineData2 {
        if (this._annotationLineData2 == null)
        {
            this._annotationLineData2 = new AnnotationLineData2();
        }
        return this._annotationLineData2;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Data Annotation Rect Layer Example

In React, the [`IgrDataAnnotationRectLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationrectlayer.html) renders multiple rectangles defined by starting and ending points in plot area of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component. This data annotation layer can be used to annotate region of plot area such as bearish patterns in stock prices. Similarly to all series, the DataAnnotationRectLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the rectangles. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationRectLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationRectLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationRectDataItem, AnnotationRectData } from './AnnotationRectData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationRectLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private xAxisRef(r: IgrCategoryXAxis){
        this.xAxis = r;
        this.setState({});
    }
    private yAxis: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private rectLayer: IgrDataAnnotationRectLayer
    private rectLayerRef(r: IgrDataAnnotationRectLayer){
        this.rectLayer = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.xAxisRef = this.xAxisRef.bind(this);
        this.rectLayerRef = this.rectLayerRef.bind(this);
    }
    componentDidMount(): void {
        this.rectLayer.targetAxis = this.xAxis;
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="false"
                    isHorizontalZoomEnabled="true"
                    brushes="green red"
                    outlines="green red"
                    plotAreaMarginLeft="10"
                    plotAreaMarginTop="0"
                    plotAreaMarginRight="20"
                    plotAreaMarginBottom="0"
                    leftMargin="10"
                    topMargin="0"
                    rightMargin="20"
                    bottomMargin="0"
                    isWindowSyncedToVisibleRange="false"
                    chartTitle="This Data Chart demonstrates the DataAnnotationRectLayer bound to data that annotates bearish patterns in stock prices.">
                    <IgrCategoryXAxis
                        name="xAxis"
                        ref={this.xAxisRef}
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="10"
                        labelRightMargin="0"
                        labelBottomMargin="10">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["high", "low", "open", "close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationRectLayer
                        name="RectLayer"
                        ref={this.rectLayerRef}
                        dataSource={this.annotationRectData}
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        endLabelXDisplayMode="Hidden"
                        startLabelYDisplayMode="Hidden"
                        endLabelYDisplayMode="Hidden"
                        actualAreaFillOpacity="0.1"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="-50"
                        overlayTextLocation="OutsideBottomCenter"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationRectLayer>
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

    private _annotationRectData: AnnotationRectData = null;
    public get annotationRectData(): AnnotationRectData {
        if (this._annotationRectData == null)
        {
            this._annotationRectData = new AnnotationRectData();
        }
        return this._annotationRectData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Data Annotation Band Layer Example

In React, the [`IgrDataAnnotationBandLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationbandlayer.html) renders multiple skewed rectangles (free-form parallelogram) between 2 points in plot area of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component. This data annotation layer can be used to annotate range of growth and decline in stock prices. Similarly to all series, the DataAnnotationBandLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties. In addition, you can specify thickness/size of the skewed rectangle by binding numeric data column to the AnnotationBreadthMemberPath property.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationBandLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationBandLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationBandDataItem, AnnotationBandData } from './AnnotationBandData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationBandLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }      
    private xAxisBottom: IgrCategoryXAxis
    private xAxisBottomRef(r: IgrCategoryXAxis){
        this.xAxisBottom = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxisLeft: IgrNumericYAxis
    private yAxisRight: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private bandLayer: IgrDataAnnotationBandLayer
    private bandLayerRef(r: IgrDataAnnotationBandLayer) {
        this.bandLayer = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.bandLayerRef = this.bandLayerRef.bind(this);   
        this.xAxisBottomRef = this.xAxisBottomRef.bind(this);     
    }
    componentDidMount(): void {
        this.bandLayer.targetAxis = this.xAxisBottom;
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="false"
                    isHorizontalZoomEnabled="true"
                    brushes="green red"
                    outlines="green red"
                    plotAreaMarginLeft="10"
                    plotAreaMarginTop="0"
                    plotAreaMarginRight="20"
                    plotAreaMarginBottom="0"
                    leftMargin="10"
                    topMargin="0"
                    rightMargin="20"
                    bottomMargin="0"
                    isWindowSyncedToVisibleRange="false"
                    chartTitle="Data Chart with DataAnnotationBandLayer bound to data that annotates stock rapid growth">
                    <IgrCategoryXAxis
                        name="xAxisBottom"
                        ref={this.xAxisBottomRef}
                        dataSource={this.stockTesla}
                        label="index"
                        tickLength="0"
                        labelLocation="OutsideBottom"
                        labelTextColor="rgba(0, 0, 0, 0)"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="120"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        labelAngle="90">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.stockTesla}
                        label="date">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxisLeft"
                        labelLocation="OutsideLeft"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Right"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrNumericYAxis
                        name="yAxisRight"
                        labelLocation="OutsideRight"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Left"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxisLeft"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["high", "low", "open", "close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationBandLayer
                        name="BandLayer"
                        ref={this.bandLayerRef}
                        dataSource={this.annotationBandData}
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="DataLabel"
                        endLabelXDisplayMode="DataLabel"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="-50"
                        overlayTextLocation="InsideTopCenter"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY"
                        annotationBreadthMemberPath="value">
                    </IgrDataAnnotationBandLayer>
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

    private _annotationBandData: AnnotationBandData = null;
    public get annotationBandData(): AnnotationBandData {
        if (this._annotationBandData == null)
        {
            this._annotationBandData = new AnnotationBandData();
        }
        return this._annotationBandData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
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
- `StartLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the starting position of [`IgrDataAnnotationBandLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationbandlayer.html), [`IgrDataAnnotationLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationlinelayer.html), [`IgrDataAnnotationRectLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationrectlayer.html) on the y-axis.
- `EndLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the ending position of [`IgrDataAnnotationBandLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationbandlayer.html), [`IgrDataAnnotationLineLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationlinelayer.html), [`IgrDataAnnotationRectLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdataannotationrectlayer.html) on the y-axis.
