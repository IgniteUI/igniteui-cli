---
title: Angular Chart Data Annotations | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Data Annotations
_keywords: Angular Charts, Data Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Annotations
_premium: true
---

# Angular Chart Data Annotations <label class="badge badge--preview">PREVIEW</label>

In the Angular chart, the data annotation layers allow you to annotate data plotted in Data Chart with sloped lines, vertical/horizontal lines (aka axis slices), vertical/horizontal strips (targeting specific axis), rectangles, and even parallelograms (aka bands). With data-binding supported, you can create as many annotations as you want to customize your charts. Also, you can combine different annotation layers and you can overlay text inside of plot area to annotated important events, patterns, and regions in your data.

> [!Note]
> These features are designed to support cartesian axes and does not currently support radius or angle axes.

For example, you can annotates stock prices with stock events and patterns.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataAnnotationStripLayerModule, IgxDataAnnotationSliceLayerModule, IgxDataAnnotationLineLayerModule, IgxNumberAbbreviatorModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationStripLayerModule,
    IgxDataAnnotationSliceLayerModule,
    IgxDataAnnotationLineLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationStripDataItem, AnnotationStripData } from './AnnotationStripData';
import { AnnotationLineData1Item, AnnotationLineData1 } from './AnnotationLineData1';
import { AnnotationLineData2Item, AnnotationLineData2 } from './AnnotationLineData2';
import { AnnotationSliceStockSplitDataItem, AnnotationSliceStockSplitData } from './AnnotationSliceStockSplitData';
import { AnnotationSliceEarningsMissDataItem, AnnotationSliceEarningsMissData } from './AnnotationSliceEarningsMissData';
import { AnnotationSliceEarningsBeatDataItem, AnnotationSliceEarningsBeatData } from './AnnotationSliceEarningsBeatData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationStripLayerComponent, IgxDataAnnotationLineLayerComponent, IgxDataAnnotationSliceLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxisBottom", { static: true } )
	private xAxisBottom: IgxCategoryXAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("xAxisTop", { static: true } )
	private xAxisTop: IgxCategoryXAxisComponent
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("stripLayer", { static: true } )
	private stripLayer: IgxDataAnnotationStripLayerComponent
	@ViewChild("lineLayer52WeekRange", { static: true } )
	private lineLayer52WeekRange: IgxDataAnnotationLineLayerComponent
	@ViewChild("lineLayerGrowthAndDecline", { static: true } )
	private lineLayerGrowthAndDecline: IgxDataAnnotationLineLayerComponent
	@ViewChild("sliceLayerStockSplit", { static: true } )
	private sliceLayerStockSplit: IgxDataAnnotationSliceLayerComponent
	@ViewChild("sliceLayerEarningsMissAnnotations", { static: true } )
	private sliceLayerEarningsMissAnnotations: IgxDataAnnotationSliceLayerComponent
	@ViewChild("sliceLayerEarningsBeatAnnotations", { static: true } )
	private sliceLayerEarningsBeatAnnotations: IgxDataAnnotationSliceLayerComponent
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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
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
          <igx-category-x-axis
          name="xAxisBottom"
          #xAxisBottom
          [dataSource]="stockTesla"
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
          </igx-category-x-axis>
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="stockTesla"
          label="date"
          labelLeftMargin="0"
          labelTopMargin="5"
          labelRightMargin="0"
          labelBottomMargin="5">
          </igx-category-x-axis>
          <igx-category-x-axis
          name="xAxisTop"
          #xAxisTop
          [dataSource]="stockTesla"
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
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxisLeft"
          #yAxisLeft
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
          </igx-numeric-y-axis>
          <igx-numeric-y-axis
          name="yAxisRight"
          #yAxisRight
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
          </igx-numeric-y-axis>
          <igx-financial-price-series
          name="series1"
          #series1
          title="Stock Price"
          displayType="Candlestick"
          [xAxis]="xAxis"
          [yAxis]="yAxisLeft"
          [dataSource]="stockTesla"
          openMemberPath="open"
          highMemberPath="high"
          lowMemberPath="low"
          closeMemberPath="close"
          showDefaultTooltip="false">
          </igx-financial-price-series>
          <igx-data-tool-tip-layer
          name="Tooltip"
          #tooltip
          includedColumns="high, low, open, close"
          layoutMode="Vertical">
          </igx-data-tool-tip-layer>
          <igx-data-annotation-strip-layer
          name="StripLayer"
          #stripLayer
          [dataSource]="annotationStripData"
          [targetAxis]="xAxisTop"
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
          </igx-data-annotation-strip-layer>
          <igx-data-annotation-line-layer
          name="LineLayer52WeekRange"
          #lineLayer52WeekRange
          [dataSource]="annotationLineData1"
          [targetAxis]="yAxisRight"
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
          </igx-data-annotation-line-layer>
          <igx-data-annotation-line-layer
          name="LineLayerGrowthAndDecline"
          #lineLayerGrowthAndDecline
          [dataSource]="annotationLineData2"
          [targetAxis]="xAxis"
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
          </igx-data-annotation-line-layer>
          <igx-data-annotation-slice-layer
          name="SliceLayerStockSplit"
          #sliceLayerStockSplit
          [dataSource]="annotationSliceStockSplitData"
          [targetAxis]="xAxisBottom"
          brush="dodgerblue"
          annotationTextColor="white"
          annotationLabelMemberPath="label"
          annotationValueMemberPath="value"
          overlayTextMemberPath="label"
          overlayTextAngle="90"
          overlayTextVerticalMargin="20"
          overlayTextHorizontalMargin="0"
          overlayTextLocation="Hidden">
          </igx-data-annotation-slice-layer>
          <igx-data-annotation-slice-layer
          name="SliceLayerEarningsMissAnnotations"
          #sliceLayerEarningsMissAnnotations
          [dataSource]="annotationSliceEarningsMissData"
          [targetAxis]="xAxisBottom"
          brush="red"
          annotationTextColor="white"
          annotationLabelMemberPath="label"
          annotationValueMemberPath="value"
          overlayTextMemberPath="label"
          overlayTextAngle="90"
          overlayTextVerticalMargin="20"
          overlayTextHorizontalMargin="0"
          overlayTextLocation="Hidden">
          </igx-data-annotation-slice-layer>
          <igx-data-annotation-slice-layer
          name="SliceLayerEarningsBeatAnnotations"
          #sliceLayerEarningsBeatAnnotations
          [dataSource]="annotationSliceEarningsBeatData"
          [targetAxis]="xAxisBottom"
          brush="green"
          annotationTextColor="white"
          annotationLabelMemberPath="label"
          annotationValueMemberPath="value"
          overlayTextMemberPath="label"
          overlayTextAngle="90"
          overlayTextVerticalMargin="20"
          overlayTextHorizontalMargin="0"
          overlayTextLocation="Hidden">
          </igx-data-annotation-slice-layer>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">Download it for free.</a>

## Angular Data Annotation Slice Layer Example

In Angular, the link:{DataChartLink}.DataAnnotationSliceLayer.html\[DataAnnotationSliceLayer] renders multiple vertical or horizontal lines that slice the chart at multiple values of an axis in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component. This data annotation layer is often used to annotate important events (e.g. company quarter reports) on x-axis or important values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal slices or setting TargetAxis property to x-axis will render data annotation layer as vertical slices. Similarly to all series, the DataAnnotationSliceLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the `AnnotationValueMemberPath` property.

For example, you can use DataAnnotationSliceLayer to annotate stock prices with important events such as stock split and outcome of earning reports.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataAnnotationSliceLayerModule, IgxNumberAbbreviatorModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationSliceLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationSliceStockSplitDataItem, AnnotationSliceStockSplitData } from './AnnotationSliceStockSplitData';
import { AnnotationSliceEarningsMissDataItem, AnnotationSliceEarningsMissData } from './AnnotationSliceEarningsMissData';
import { AnnotationSliceEarningsBeatDataItem, AnnotationSliceEarningsBeatData } from './AnnotationSliceEarningsBeatData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationSliceLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxisBottom", { static: true } )
	private xAxisBottom: IgxCategoryXAxisComponent
	@ViewChild("xAxisTop", { static: true } )
	private xAxisTop: IgxCategoryXAxisComponent
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("sliceLayerStockSplit", { static: true } )
	private sliceLayerStockSplit: IgxDataAnnotationSliceLayerComponent
	@ViewChild("sliceLayerEarningsMissAnnotations", { static: true } )
	private sliceLayerEarningsMissAnnotations: IgxDataAnnotationSliceLayerComponent
	@ViewChild("sliceLayerEarningsBeatAnnotations", { static: true } )
	private sliceLayerEarningsBeatAnnotations: IgxDataAnnotationSliceLayerComponent
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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
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
          <igx-category-x-axis
          name="xAxisBottom"
          #xAxisBottom
          [dataSource]="stockTesla"
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
          </igx-category-x-axis>
          <igx-category-x-axis
          name="xAxisTop"
          #xAxisTop
          [dataSource]="stockTesla"
          label="date"
          labelLocation="OutsideBottom">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxisLeft"
          #yAxisLeft
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
          </igx-numeric-y-axis>
          <igx-numeric-y-axis
          name="yAxisRight"
          #yAxisRight
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
          </igx-numeric-y-axis>
          <igx-financial-price-series
          name="series1"
          #series1
          title="Stock Price"
          displayType="Candlestick"
          [xAxis]="xAxisTop"
          [yAxis]="yAxisLeft"
          [dataSource]="stockTesla"
          openMemberPath="open"
          highMemberPath="high"
          lowMemberPath="low"
          closeMemberPath="close"
          showDefaultTooltip="false">
          </igx-financial-price-series>
          <igx-data-tool-tip-layer
          name="Tooltip"
          #tooltip
          includedColumns="high, low, open, close"
          layoutMode="Vertical">
          </igx-data-tool-tip-layer>
          <igx-data-annotation-slice-layer
          name="SliceLayerStockSplit"
          #sliceLayerStockSplit
          [dataSource]="annotationSliceStockSplitData"
          [targetAxis]="xAxisBottom"
          brush="dodgerblue"
          annotationTextColor="white"
          annotationLabelMemberPath="label"
          annotationValueMemberPath="value"
          overlayTextMemberPath="label"
          overlayTextAngle="90"
          overlayTextVerticalMargin="20"
          overlayTextHorizontalMargin="0"
          overlayTextLocation="Hidden">
          </igx-data-annotation-slice-layer>
          <igx-data-annotation-slice-layer
          name="SliceLayerEarningsMissAnnotations"
          #sliceLayerEarningsMissAnnotations
          [dataSource]="annotationSliceEarningsMissData"
          [targetAxis]="xAxisBottom"
          brush="red"
          annotationTextColor="white"
          annotationLabelMemberPath="label"
          annotationValueMemberPath="value"
          overlayTextMemberPath="label"
          overlayTextAngle="90"
          overlayTextVerticalMargin="20"
          overlayTextHorizontalMargin="0"
          overlayTextLocation="Hidden">
          </igx-data-annotation-slice-layer>
          <igx-data-annotation-slice-layer
          name="SliceLayerEarningsBeatAnnotations"
          #sliceLayerEarningsBeatAnnotations
          [dataSource]="annotationSliceEarningsBeatData"
          [targetAxis]="xAxisBottom"
          brush="green"
          annotationTextColor="white"
          annotationLabelMemberPath="label"
          annotationValueMemberPath="value"
          overlayTextMemberPath="label"
          overlayTextAngle="90"
          overlayTextVerticalMargin="20"
          overlayTextHorizontalMargin="0"
          overlayTextLocation="Hidden">
          </igx-data-annotation-slice-layer>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Data Annotation Strip Layer Example

In Angular, the [`IgxDataAnnotationStripLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationstriplayercomponent.html) renders multiple vertical or horizontal strips between 2 values on an axis in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component. This data annotation layer can be used to annotate duration of events (e.g. stock market crash) on x-axis or important range of values on y-axis. Setting the TargetAxis property to y-axis will render data annotation layer as horizontal strips or setting TargetAxis property to x-axis will render data annotation layer as vertical strips. Similarly to all series, the [`IgxDataAnnotationStripLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationstriplayercomponent.html) also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 1 numeric data column mapped to the AnnotationValueMemberPath property.

For example, you can use [`IgxDataAnnotationStripLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationstriplayercomponent.html) to annotate chart with stock market crashes and changes in federal interest rates.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataAnnotationStripLayerModule, IgxNumberAbbreviatorModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationStripLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationStripDataItem, AnnotationStripData } from './AnnotationStripData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationStripLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxisBottom", { static: true } )
	private xAxisBottom: IgxCategoryXAxisComponent
	@ViewChild("xAxisTop", { static: true } )
	private xAxisTop: IgxCategoryXAxisComponent
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("stripLayer", { static: true } )
	private stripLayer: IgxDataAnnotationStripLayerComponent
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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
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
          <igx-category-x-axis
          name="xAxisBottom"
          #xAxisBottom
          [dataSource]="stockTesla"
          label="date"
          labelLeftMargin="10"
          labelTopMargin="5"
          labelRightMargin="10"
          labelBottomMargin="15">
          </igx-category-x-axis>
          <igx-category-x-axis
          name="xAxisTop"
          #xAxisTop
          [dataSource]="stockTesla"
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
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxisLeft"
          #yAxisLeft
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
          </igx-numeric-y-axis>
          <igx-numeric-y-axis
          name="yAxisRight"
          #yAxisRight
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
          </igx-numeric-y-axis>
          <igx-financial-price-series
          name="series1"
          #series1
          title="Stock Price"
          displayType="Candlestick"
          [xAxis]="xAxisBottom"
          [yAxis]="yAxisLeft"
          [dataSource]="stockTesla"
          openMemberPath="open"
          highMemberPath="high"
          lowMemberPath="low"
          closeMemberPath="close"
          showDefaultTooltip="false">
          </igx-financial-price-series>
          <igx-data-tool-tip-layer
          name="Tooltip"
          #tooltip
          includedColumns="high, low, open, close"
          layoutMode="Vertical">
          </igx-data-tool-tip-layer>
          <igx-data-annotation-strip-layer
          name="StripLayer"
          #stripLayer
          [dataSource]="annotationStripData"
          [targetAxis]="xAxisTop"
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
          </igx-data-annotation-strip-layer>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Data Annotation Line Layer Example

In Angular, [`IgxDataAnnotationLineLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationlinelayercomponent.html) renders multiple lines between 2 points in plot area of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component. This data annotation layer can be used to annotate stock chart with growth and decline in stock prices. Similarly to all series, the DataAnnotationLineLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath`  properties.

For example, you can use DataAnnotationLineLayer to annotate growth and decline patterns in stock prices and 52-week high and low of stock prices on y-axis.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataAnnotationLineLayerModule, IgxNumberAbbreviatorModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationLineLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationLineData1Item, AnnotationLineData1 } from './AnnotationLineData1';
import { AnnotationLineData2Item, AnnotationLineData2 } from './AnnotationLineData2';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationLineLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("lineLayer52WeekRange", { static: true } )
	private lineLayer52WeekRange: IgxDataAnnotationLineLayerComponent
	@ViewChild("lineLayerGrowthAndDecline", { static: true } )
	private lineLayerGrowthAndDecline: IgxDataAnnotationLineLayerComponent
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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
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
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="stockTesla"
          label="date"
          labelLeftMargin="0"
          labelTopMargin="10"
          labelRightMargin="0"
          labelBottomMargin="15">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxisLeft"
          #yAxisLeft
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
          </igx-numeric-y-axis>
          <igx-numeric-y-axis
          name="yAxisRight"
          #yAxisRight
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
          </igx-numeric-y-axis>
          <igx-financial-price-series
          name="series1"
          #series1
          title="Stock Price"
          displayType="Candlestick"
          [xAxis]="xAxis"
          [yAxis]="yAxisLeft"
          [dataSource]="stockTesla"
          openMemberPath="open"
          highMemberPath="high"
          lowMemberPath="low"
          closeMemberPath="close"
          showDefaultTooltip="false">
          </igx-financial-price-series>
          <igx-data-tool-tip-layer
          name="Tooltip"
          #tooltip
          includedColumns="high, low, open, close"
          layoutMode="Vertical">
          </igx-data-tool-tip-layer>
          <igx-data-annotation-line-layer
          name="LineLayer52WeekRange"
          #lineLayer52WeekRange
          [dataSource]="annotationLineData1"
          [targetAxis]="yAxisRight"
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
          </igx-data-annotation-line-layer>
          <igx-data-annotation-line-layer
          name="LineLayerGrowthAndDecline"
          #lineLayerGrowthAndDecline
          [dataSource]="annotationLineData2"
          [targetAxis]="xAxis"
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
          </igx-data-annotation-line-layer>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Data Annotation Rect Layer Example

In Angular, the [`IgxDataAnnotationRectLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationrectlayercomponent.html) renders multiple rectangles defined by starting and ending points in plot area of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component. This data annotation layer can be used to annotate region of plot area such as bearish patterns in stock prices. Similarly to all series, the DataAnnotationRectLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the rectangles. The starting points should be mapped using using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties.

For example, you can use DataAnnotationRectLayer to annotate bearish patterns and gaps in stock prices on y-axis.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataAnnotationRectLayerModule, IgxNumberAbbreviatorModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationRectLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationRectDataItem, AnnotationRectData } from './AnnotationRectData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationRectLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("rectLayer", { static: true } )
	private rectLayer: IgxDataAnnotationRectLayerComponent
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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
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
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="stockTesla"
          label="date"
          labelLeftMargin="0"
          labelTopMargin="10"
          labelRightMargin="0"
          labelBottomMargin="10">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxis"
          #yAxis
          minimumValue="0"
          maximumValue="550">
          </igx-numeric-y-axis>
          <igx-financial-price-series
          name="series1"
          #series1
          title="Stock Price"
          displayType="Candlestick"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [dataSource]="stockTesla"
          openMemberPath="open"
          highMemberPath="high"
          lowMemberPath="low"
          closeMemberPath="close"
          showDefaultTooltip="false">
          </igx-financial-price-series>
          <igx-data-tool-tip-layer
          name="Tooltip"
          #tooltip
          includedColumns="high, low, open, close"
          layoutMode="Vertical">
          </igx-data-tool-tip-layer>
          <igx-data-annotation-rect-layer
          name="RectLayer"
          #rectLayer
          [dataSource]="annotationRectData"
          [targetAxis]="xAxis"
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
          </igx-data-annotation-rect-layer>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Data Annotation Band Layer Example

In Angular, the [`IgxDataAnnotationBandLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationbandlayercomponent.html) renders multiple skewed rectangles (free-form parallelogram) between 2 points in plot area of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component. This data annotation layer can be used to annotate range of growth and decline in stock prices. Similarly to all series, the DataAnnotationBandLayer also supports data binding via the `DataSource` property that can be set to a collection of data items which should have at least 4 numeric data columns representing x/y coordinates of starting point and ending point of the lines. The starting points should be mapped using `StartValueXMemberPath` and `StartValueYMemberPath` properties and the ending points should be mapped using `EndValueXMemberPath` and `EndValueYMemberPath` properties. In addition, you can specify thickness/size of the skewed rectangle by binding numeric data column to the AnnotationBreadthMemberPath property.

For example, you can use DataAnnotationBandLayer to annotate range of growth in stock prices.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataAnnotationBandLayerModule, IgxNumberAbbreviatorModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationBandLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationBandDataItem, AnnotationBandData } from './AnnotationBandData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationBandLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxisBottom", { static: true } )
	private xAxisBottom: IgxCategoryXAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("bandLayer", { static: true } )
	private bandLayer: IgxDataAnnotationBandLayerComponent
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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
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
          <igx-category-x-axis
          name="xAxisBottom"
          #xAxisBottom
          [dataSource]="stockTesla"
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
          </igx-category-x-axis>
          <igx-category-x-axis
          name="xAxis"
          #xAxis
          [dataSource]="stockTesla"
          label="date">
          </igx-category-x-axis>
          <igx-numeric-y-axis
          name="yAxisLeft"
          #yAxisLeft
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
          </igx-numeric-y-axis>
          <igx-numeric-y-axis
          name="yAxisRight"
          #yAxisRight
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
          </igx-numeric-y-axis>
          <igx-financial-price-series
          name="series1"
          #series1
          title="Stock Price"
          displayType="Candlestick"
          [xAxis]="xAxis"
          [yAxis]="yAxisLeft"
          [dataSource]="stockTesla"
          openMemberPath="open"
          highMemberPath="high"
          lowMemberPath="low"
          closeMemberPath="close"
          showDefaultTooltip="false">
          </igx-financial-price-series>
          <igx-data-tool-tip-layer
          name="Tooltip"
          #tooltip
          includedColumns="high, low, open, close"
          layoutMode="Vertical">
          </igx-data-tool-tip-layer>
          <igx-data-annotation-band-layer
          name="BandLayer"
          #bandLayer
          [dataSource]="annotationBandData"
          [targetAxis]="xAxisBottom"
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
          </igx-data-annotation-band-layer>
      </igx-data-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
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
- `StartLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the starting position of [`IgxDataAnnotationBandLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationbandlayercomponent.html), [`IgxDataAnnotationLineLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationlinelayercomponent.html), [`IgxDataAnnotationRectLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationrectlayercomponent.html) on the y-axis.
- `EndLabelYMemberPath`: This property is a mapping to the data column representing the axis label for the ending position of [`IgxDataAnnotationBandLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationbandlayercomponent.html), [`IgxDataAnnotationLineLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationlinelayercomponent.html), [`IgxDataAnnotationRectLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationrectlayercomponent.html) on the y-axis.
