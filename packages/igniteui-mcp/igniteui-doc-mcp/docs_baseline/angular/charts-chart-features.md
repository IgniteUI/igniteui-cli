---
title: Angular Chart Features | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Features
_keywords: Angular Charts, Features, Infragistics
_license: commercial
mentionedTypes: ["FinancialChart", "CategoryChart", "XamDataChart"]
_tocName: Chart Features
---

# Angular Chart Features

The Ignite UI for Angular Charts allow you to display many different features to portray the full data story to be told with your chart. Each of these features are fully customizable, and can be styled to suit your design needs - allowing you full control. Interactions such as highlighting and annotations allow you to call out important data details allowing for a deeper data analysis within your chart.

The Angular Charts offer the following chart features:

## Axis

Modify or customize all aspects of both the X-Axis and Y-Axis using the different axis properties. You can display gridlines, customize the style of tickmarks, change axis titles, and even modify axis locations and crossing values. You can learn more about customizations of the Angular chart's [Axis Gridlines](features/chart-axis-gridlines.md), [Axis Layouts](features/chart-axis-layouts.md), and [Axis Options](features/chart-axis-options.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartScatterModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartScatterModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component } from "@angular/core";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    public SinData: any[];
    public CosData: any[];

    public YAxisCrossingValue : number = 0;
    public XAxisCrossingValue : number = 0;

    constructor() {

      this.SinData= [];
      this.CosData= [];

        for (let i = -360; i <= 360; i+=10)
        {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);

            this.SinData.push( { X : i, Y : sin });
            this.CosData.push( { X : i, Y : cos });
        }
    }

    public OnXAxisCrossingValueChanged(e : any) {
        this.XAxisCrossingValue = e.target.value;
    }

    public OnYAxisCrossingValueChanged(e : any) {
        this.YAxisCrossingValue = e.target.value;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">

        <label>X Axis Crossing Value:  </label>
        <label class="options-value" ><span [textContent]="XAxisCrossingValue" ></span></label>
        <input type="range" min="-1.25" max="1.25" step="0.25" value="0" (input)="OnXAxisCrossingValueChanged($event)" />

        <label>Y Axis Crossing Value:  </label>
        <label class="options-value" ><span [textContent]="YAxisCrossingValue" ></span></label>
        <input type="range" min="-360" max="360" step="40" value="0" (input)="OnYAxisCrossingValueChanged($event)" />
    </div>

    <div class="container">
        <igx-data-chart isHorizontalZoomEnabled=true isVerticalZoomEnabled=true
            width="100%" height="100%" [dataSource]="SinData" >
            <igx-numeric-x-axis #xAxis interval="40"
                minimumValue="-360"
                maximumValue="360"
                labelLocation="InsideBottom"
                [crossingAxis]="yAxis"
                [crossingValue]="XAxisCrossingValue">
            </igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis
                minimumValue="-1.25"
                maximumValue="1.25"
                interval="0.25"
                labelLocation="InsideLeft"
                [crossingAxis]="xAxis"
                [crossingValue]="YAxisCrossingValue" >
            </igx-numeric-y-axis>

            <igx-scatter-spline-series markerType="Circle"
                [dataSource]="SinData"
                [xAxis]="xAxis"
                [yAxis]="yAxis"
                xMemberPath="X"
                yMemberPath="Y" >
            </igx-scatter-spline-series>

            <igx-scatter-spline-series markerType="Circle"
                [dataSource]="CosData"
                [xAxis]="xAxis"
                [yAxis]="yAxis"
                xMemberPath="X"
                yMemberPath="Y">
            </igx-scatter-spline-series>
        </igx-data-chart>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Annotations

These additional layers are on top of the chart which are mouse / touch dependent. Used individually or combined, they provide powerful interactions that help to highlight certain values within the chart. You can learn more about this feature in the [Chart Annotations](features/chart-annotations.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxCategoryChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxCalloutLayerComponent } from "igniteui-angular-charts";
import { IgxSeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];
    public calloutData: any[];

    public crosshairsDisplay: string = "Both";
    public crosshairAnnotations: boolean = true;
    public finalValuesVisible: boolean = true;
    public calloutsVisible: boolean = true;
    public markerType: string = "Circle";

    constructor() {
    }

    public ngOnInit() {

        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 },
        ];

        this.calloutData = [];

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            this.calloutData.push({ index: i, label: item.USA + " TWh", value: item.USA });
        }
    }

    public OnCrosshairVisibilityChanged(e: any) {
        const val = e.target.checked;

        if (val) {
            this.crosshairsDisplay = "Both";
        }
        else {
            this.crosshairsDisplay = "None";
        }
    }

    public OnMarkersVisibilityChanged(e: any) {
        const val = e.target.checked;

        if (val) {
            this.markerType = "Circle";
        }
        else {
            this.markerType = "None";
        }
    }

    public OnCalloutsVisibilityChanged(e: any) {
        this.calloutsVisible = e.target.checked;
    }

    public OnFinalValueVisibilityChanged(e: any) {
        this.finalValuesVisible = e.target.checked;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Annotations: </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnCrosshairVisibilityChanged($event)" /> Crosshair
        </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnCalloutsVisibilityChanged($event)" /> Callouts
        </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnFinalValueVisibilityChanged($event)" /> Final Values
        </label>
        <label class="options-item">
            <input type="checkbox" checked=true (change)="OnMarkersVisibilityChanged($event)" /> Markers
        </label>
    </div>

    <div class="options vertical">
        <label id="legendTitle">Renewable Electricity Generated</label>
    </div>
    <div class="container">
        <igx-category-chart height="100%" width="100%"
            [dataSource]="data"
            chartType="line"
            yAxisTitle="TWh"
            yAxisTitleLeftMargin="5"
            yAxisLabelLocation="OutsideRight"
            crosshairsSnapToData="false"
            [crosshairsDisplayMode]="crosshairsDisplay"
            [crosshairsAnnotationEnabled]="crosshairAnnotations"
            [finalValueAnnotationsVisible]="finalValuesVisible"
            [calloutsVisible]="calloutsVisible"
            [calloutsDataSource]="calloutData"
            [markerTypes]="markerType"
            calloutsXMemberPath="index"
            calloutsYMemberPath="value"
            calloutsLabelMemberPath="label"
			computedPlotAreaMarginMode="series">
        </igx-category-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Animations

Animate your chart as it loads a new data source by enabling animations. These are customizable by setting different types of animations and the speed at which those animations take place. You can learn more about this feature in the [Chart Animations](features/chart-animations.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxCategoryChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public transitionInMode: string = "Auto";
    public transitionInInterval: string = "1000";
    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    constructor() {
        this.data = this.generateData();
    }

    public onChangeAmountClicked() {
        this.data = this.generateData();
    }

    public OnTransitionIntervalChange(e: any) {
        this.transitionInInterval = e.target.value;
    }

    private generateData(): any[] {
        const data: any[] = [
            { Year: "2009", Europe: 31, China: 21, USA: 19 },
            { Year: "2010", Europe: 43, China: 26, USA: 24 },
            { Year: "2011", Europe: 66, China: 29, USA: 28 },
            { Year: "2012", Europe: 69, China: 32, USA: 26 },
            { Year: "2013", Europe: 58, China: 47, USA: 38 },
            { Year: "2014", Europe: 40, China: 46, USA: 31 },
            { Year: "2015", Europe: 78, China: 50, USA: 19 },
            { Year: "2016", Europe: 13, China: 90, USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96, USA: 38 }
        ];

        return data;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Transition Type: </label>
        <select [(ngModel)]="transitionInMode">
            <option>AccordionFromBottom</option>
            <option>AccordionFromCategoryAxisMaximum</option>
            <option>AccordionFromCategoryAxisMinimum</option>
            <option>AccordionFromLeft</option>
            <option>AccordionFromRight</option>
            <option>AccordionFromTop</option>
            <option>AccordionFromValueAxisMaximum</option>
            <option>AccordionFromValueAxisMinimum</option>
            <option>Expand</option>
            <option>FromZero</option>
            <option>SweepFromBottom</option>
            <option>SweepFromCategoryAxisMaximum</option>
            <option>SweepFromCategoryAxisMinimum</option>
            <option>SweepFromCenter</option>
            <option>SweepFromLeft</option>
            <option>SweepFromRight</option>
            <option>SweepFromTop</option>
            <option>SweepFromValueAxisMaximum</option>
            <option>SweepFromValueAxisMinimum</option>
            <option>Auto</option>
        </select>
        <button (click)="onChangeAmountClicked()">Reload Chart</button>
        <input class="options-slider" type="range" min="50" max="2000" step="50"
              [value]="transitionInInterval" (change)="OnTransitionIntervalChange($event)" />
        <label class="options-label">{{transitionInInterval}}ms</label>
    </div>
    <div class="container">
        <igx-category-chart height="100%"
            chartType="line"
            [dataSource]="data"
            isTransitionInEnabled="true"
            [transitionInMode]="transitionInMode"
            [transitionInDuration]="transitionInInterval"
            yAxisLabelExtent="40"
			computedPlotAreaMarginMode="series"
            #chart>
        </igx-category-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Highlighting

Bring focus to visuals such as lines, columns, or markers by highlighting them as the mouse hovers over the data items. This features is enabled on all chart types. You can learn more about this feature in the [Chart Highlighting](features/chart-highlighting.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxCategoryChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    public isItemHighlightingEnabled: boolean = false;
    public isSeriesHighlightingEnabled: boolean = true;
    public isCategoryHighlightingEnabled: boolean = false;
    public highlightMode: string = "Auto";
    public highlightBehavior: string = "Auto";
    public legendHighlightMode: string = "Auto";
    public excludedProperties: any;

    public data = [
        { Month: "JAN", NewYork : 10.6, LosAngeles : 28.3 },
        { Month: "FEB", NewYork : 7.8,  LosAngeles : 31.1 },
        { Month: "MAR", NewYork : 12.2, LosAngeles : 27.8 },
        { Month: "APR", NewYork : 11.7, LosAngeles : 33.9 },
        { Month: "MAY", NewYork : 19.4, LosAngeles : 35.0 },
        { Month: "JUN", NewYork : 23.3, LosAngeles : 36.7 },
        { Month: "JUL", NewYork : 27.2, LosAngeles : 33.3 },
        { Month: "AUG", NewYork : 25.6, LosAngeles : 36.7 },
        { Month: "SEP", NewYork : 22.8, LosAngeles : 43.9 },
        { Month: "OCT", NewYork : 17.8, LosAngeles : 38.3 },
        { Month: "NOV", NewYork : 17.8, LosAngeles : 32.8 },
        { Month: "DEC", NewYork : 8.3,  LosAngeles : 28.9 }
    ];

    public OnEnableHighlightingChange = (e : any) => {

        const value = e.target.value;

        if(value=="Series"){
            this.isItemHighlightingEnabled = false;
            this.isSeriesHighlightingEnabled = true;
            this.isCategoryHighlightingEnabled = false;
        }
         else if(value == "Item") {
            this.isItemHighlightingEnabled = true;
            this.isSeriesHighlightingEnabled = false;
            this.isCategoryHighlightingEnabled = false;
        }
         else if(value == "Category") {
            this.isItemHighlightingEnabled = false;
            this.isSeriesHighlightingEnabled = false;
            this.isCategoryHighlightingEnabled = true;
        }
         else if(value=="None") {
            this.isItemHighlightingEnabled = false;
            this.isSeriesHighlightingEnabled = false;
            this.isCategoryHighlightingEnabled = false;
        }
    }

    public ngAfterViewInit(): void {
    }

    constructor() { }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <div class="options horizontal">
        <span style="margin-left: 0.25rem;">Highlight Target:</span>
            <select (change)=OnEnableHighlightingChange($event) style="width: 7rem; margin-right: 1rem;">
                <option>Series</option>
                <option>Item</option>
                <option>Category</option>
                <option>None</option>
            </select>
            <span>Mode:</span>
                <select [(ngModel)]="highlightMode" style="width: 7rem; margin-right: 1rem;">
                    <option>Auto</option>
                    <option>BrightenSpecific</option>
                    <option>Brighten</option>
                    <option>FadeOthersSpecific</option>
                    <option>FadeOthers</option>
                    <option>None</option>
                </select>
            <span>Behavior:</span>
                <select [(ngModel)]="highlightBehavior" style="width: 7rem; margin-right: 1rem;">
                    <option>Auto</option>
                    <option>DirectlyOver</option>
                    <option>NearestItems</option>
                    <option>NearestItemsRetainMainShapes</option>
                    <option>NearestItemsAndSeries</option>
                </select>
            <span>Legend:</span>
                <select [(ngModel)]="legendHighlightMode" style="width: 7rem; margin-right: 1rem;">
                    <option>Auto</option>
                    <option>None</option>
                    <option>MatchSeries</option>
                </select>
            </div>
        <span id="legendTitle">Average Temperatures in the U.S. Cities</span>
        <div class="legend" >
            <igx-legend #legend orientation="Horizontal"></igx-legend>
        </div>

    </div>


    <div class="container">
        <igx-category-chart #chart height="100%" width="100%"
            [legend]="legend"
            [dataSource]="data"
            chartType="Column"
            [isCategoryHighlightingEnabled]="isCategoryHighlightingEnabled"
            [isItemHighlightingEnabled]="isItemHighlightingEnabled"
            [isSeriesHighlightingEnabled]="isSeriesHighlightingEnabled"
            [legendHighlightingMode]="legendHighlightMode"
            [highlightingMode]="highlightMode"
            [highlightingBehavior]="highlightBehavior"
            yAxisTitle="Temperatures in Celsius"
            yAxisMinimumValue="0"
            xAxisInterval="1">
        </igx-category-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Markers

Identify data points quickly, even if the value falls between major gridlines with the use of markers on the chart series. These are fully customizable in style, color, and shape. You can learn more about this feature in the [Chart Markers](features/chart-markers.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxCategoryChartModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxPropertyEditorPanelModule,
    IgxCategoryChartModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-angular-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxPropertyEditorPropertyDescriptionChangedEventArgs, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-angular-charts';
import { EnumUtil } from 'igniteui-angular-core';
import { IgxPropertyEditorPanelComponent } from 'igniteui-angular-layouts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("chartTypeEditor", { static: true } )
	private chartTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("markerTypeEditor", { static: true } )
	private markerTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
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
            CategoryChartDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public editorChangeUpdateMarkerType({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var item = sender as IgxPropertyEditorPropertyDescriptionComponent;
	    var chart = this.chart;

	    var markerVal = item.primitiveValue;
	    chart.markerTypes = markerVal;
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      name="PropertyEditor"
      #propertyEditor
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="ChartType"
          name="ChartTypeEditor"
          #chartTypeEditor
          label="Chart Type"
          primitiveValue="Line">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="MarkerTypeHandler"
          name="MarkerTypeEditor"
          #markerTypeEditor
          label="Marker Type"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownValues="Circle, Automatic, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, None"
          dropDownNames="Circle, Automatic, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, None"
          primitiveValue="Circle"
          (changed)="this.editorChangeUpdateMarkerType($event)">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      isSeriesHighlightingEnabled="true"
      chartType="Line"
      [dataSource]="countryRenewableElectricity"
      computedPlotAreaMarginMode="Series">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Navigation

You can navigate the chart by zooming and panning with the mouse, keyboard, and touch interactions. You can learn more about this feature in the [Chart Navigation](features/chart-navigation.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxLegendModule, IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";


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
    IgxDataChartCoreModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxLegendModule,
    IgxNumberAbbreviatorModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleScatterStats],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts";
import { IgxSizeScaleComponent } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    public isZoomEnabled: boolean = true;

    public defaultInteraction: string = "DragZoom";
    public panModifier: string = "None";
    public zoomModifier: string = "None";

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    constructor() {
        this.data = SampleScatterStats.getCountriesWithHighIncome();
    }

    public ngOnInit() {
        this.createSeries();
        this.chart.actualWindowScaleHorizontal = 0.6;
        this.chart.actualWindowScaleVertical = 0.6;
        this.chart.actualWindowPositionVertical = 0.2;
        this.chart.actualWindowPositionHorizontal = 0.2;
    }

    public onPanUpClick() {
        this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick() {
        this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanRightClick() {
        this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onPanLeftClick() {
        this.chart.actualWindowPositionHorizontal -= 0.05;
    }

    public createSeries() {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const series = new IgxBubbleSeriesComponent();
        series.title = "Countries";
        series.dataSource = SampleScatterStats.getCountries();
        series.showDefaultTooltip = true;
        series.xMemberPath = "population";
        series.yMemberPath = "gdpTotal";
        series.radiusMemberPath = "gdpPerCapita";
        series.radiusScale = sizeScale;
        series.xAxis = this.xAxis;
        series.yAxis = this.yAxis;

        this.chart.series.clear();
        this.chart.series.add(series);
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Default Drag Option:</span>
        <select [(ngModel)]="defaultInteraction">
            <option>DragZoom</option>
            <option>DragPan</option>
            <option>None</option>
        </select>
        <span class="options-item">Pan Modifier:</span>
        <select [(ngModel)]="panModifier">
            <option>Alt</option>
            <option>Control</option>
            <option>Shift</option>
            <option>Windows</option>
            <option>Apple</option>
            <option>None</option>
        </select>
        <span class="options-item">Zoom Modifier:</span>
        <select [(ngModel)]="zoomModifier">
            <option>Alt</option>
            <option>Control</option>
            <option>Shift</option>
            <option>Windows</option>
            <option>Apple</option>
            <option>None</option>
        </select>
    </div>
    <div class="options horizontal">
        <label class="options-item"><input type="checkbox" [(ngModel)]="isZoomEnabled" /> Enable Zooming</label>
        <button class="options-item" (click)="onPanUpClick()">Pan Up</button>
        <button class="options-item" (click)="onPanDownClick()">Pan Down</button>
        <button class="options-item" (click)="onPanLeftClick()">Pan Left</button>
        <button class="options-item" (click)="onPanRightClick()">Pan Right</button>
    </div>

    <div class="container">
        <igx-data-chart #chart [dataSource]="data"
            width="100%"
            height="100%"
            [defaultInteraction]="defaultInteraction"
            [dragModifier]="zoomModifier"
            [panModifier]="panModifier"
            [isHorizontalZoomEnabled]="isZoomEnabled"
            [isVerticalZoomEnabled]="isZoomEnabled">

            <igx-numeric-x-axis #xAxis
                isLogarithmic=true
                abbreviateLargeNumbers=true
                title="Population">
            </igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis
                isLogarithmic=true
                abbreviateLargeNumbers=true
                title="Total GDP ($)">
            </igx-numeric-y-axis>
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

## Overlays

Overlays allows you to annotate important values and thresholds by plotting horizontal or vertical lines in charts. You can learn more about this feature in the [Chart Overlays](features/chart-overlays.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxValueOverlayModule, IgxLegendModule } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";


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
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxValueOverlayModule,
    IgxLegendModule
],
  providers: [SharedData],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit } from "@angular/core";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = [
            { Label: 1, Value: 1.0 },
            { Label: 2, Value: 2.0 },
            { Label: 3, Value: 6.0 },
            { Label: 4, Value: 8.0 },
            { Label: 5, Value: 2.0 },
            { Label: 6, Value: 6.0 },
            { Label: 7, Value: 4.0 },
            { Label: 8, Value: 2.0 },
            { Label: 9, Value: 1.0 }
        ];
    }
}
```
```html
<div class="container vertical">
    <igx-legend #legend orientation="horizontal"></igx-legend>

    <igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
        <igx-category-x-axis #xAxis label="Label"></igx-category-x-axis>
        <igx-numeric-y-axis #yAxis minimumValue=0 maximumValue=10></igx-numeric-y-axis>

        <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Value" showDefaultTooltip=true
            markerType="None"></igx-column-series>

        <igx-value-overlay [axis]="yAxis" value=2.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=3.6 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=5.8 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=1.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=8.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=7.0 thickness=5></igx-value-overlay>
        <igx-value-overlay [axis]="yAxis" value=5.0 thickness=5></igx-value-overlay>

    </igx-data-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Performance

Angular charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the charts and they should be considered when optimizing performance in your application. You can learn more about this feature in the [Chart Performance](features/chart-performance.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { IgxSliderModule } from "igniteui-angular";


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
    IgxCategoryChartModule,
    IgxLegendModule,
    IgxSliderModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { IgxAssigningCategoryStyleEventArgs } from "igniteui-angular-charts";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";
import { IgxChartSeriesEventArgs } from "igniteui-angular-charts";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit, OnDestroy {
    @Input()
    public scalingRatio: number = 1;

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    private currValue: number = 15;
    private currIndex: number = 0;

    private _maxPoints: number = 500000;

    private _refreshMilliseconds: number = 10;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;
    private _assigningData: boolean = false;
    private _data: any[];

    constructor(private _zone: NgZone) {
        this._data = this.generateData();
    }

    public onGenerateDataClicked() {
        this._data = this.generateData();
    }

    public onAssignDataClicked() {
        this._time = new Date();
        this._assigningData = true;
        this.chart.dataSource = this._data;
    }

    public onMaxPointsChanged(e: any) {
        let num: number = parseInt(e.target.value, 10);
        if (isNaN(num)) {
            num = 5000;
        }
        if (num < 5000) {
            num = 5000;
        }
        if (num > 2000000) {
            num = 2000000;
        }
        this.maxPoints = num;
    }

    public get maxPointsText(): string {
        return this.toShortString(this._maxPoints);
    }

    public get maxPoints(): number {
        return this._maxPoints;
    }
    @Input()
    public set maxPoints(v: number) {
        this._maxPoints = v;
    }

    public ngOnDestroy(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
            window.clearInterval(this._interval);
            });
            this._interval = -1;
        }
    }

    public ngAfterViewInit(): void {
        this.chart.seriesAdded.subscribe((args: { sender: any, args: IgxChartSeriesEventArgs }) => {
            const cat = args.args.series as IgxHorizontalAnchoredCategorySeriesComponent;
            cat.isCustomCategoryStyleAllowed = true;
            cat.assigningCategoryStyle.subscribe((event: { sender: any, args: IgxAssigningCategoryStyleEventArgs }) => {
                if (this._assigningData) {
                    this._assigningData = false;

                    this._zone.runOutsideAngular(() => {
                        window.setTimeout(() => {}, 0);
                    });
                }
            });
        });

        this.chart.seriesRemoved.subscribe((event: { sender: any, args: IgxChartSeriesEventArgs }) => {
            const cat = event.args.series as IgxHorizontalAnchoredCategorySeriesComponent;
            cat.isCustomCategoryStyleAllowed = false;
            cat.assigningCategoryStyle.unsubscribe();
        });

        this.chart.dataSource = this._data;
    }

    private generateData(): any[] {
        const data: any[] = [];
        for (this.currIndex = 0; this.currIndex <= this.maxPoints; this.currIndex++) {
            this.currValue += Math.random() * 4.0 - 2.0;
            const label = this.toShortString(this.currIndex);
            data.push({ Label: label, Value: this.currValue });
        }
        return data;
    }

    private toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <button (click)="onGenerateDataClicked()">Generate Data</button>
        <button (click)="onAssignDataClicked()">AssignData</button>

        <label class="options-label">Data amount: {{ maxPointsText }}</label>
        <input class="options-slider" type="range" id="slider" min="5000" max="2000000" step="1000" [value]="maxPoints"
            (input)="onMaxPointsChanged($event)"/>
    </div>
    <div class="container">
        <igx-category-chart height="100%" yAxisLabelExtent="40"
        markerTypes="None"
        toolTipType="Default"
        xAxisEnhancedIntervalPreferMoreCategoryLabels="false"
        shouldAutoExpandMarginForInitialLabels="false"
        crosshairsDisplayMode="None"
        #chart>
        </igx-category-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Tooltips

Display all information relevant to the particular series type via Tooltips. There are different tooltips that can be enabled, such as Item-level and Category-level tooltips. You can learn more about this feature in the [Chart Tooltips](features/chart-tooltips.md) topic.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';

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
    IgxPropertyEditorPanelModule,
    IgxLegendModule,
    IgxCategoryChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("toolTipTypeEditor", { static: true } )
	private toolTipTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
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
  <div class="options vertical">
      <igx-property-editor-panel
      name="PropertyEditor"
      #propertyEditor
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="ToolTipType"
          name="ToolTipTypeEditor"
          #toolTipTypeEditor
          label="ToolTip Type: "
          primitiveValue="Data">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Highest Grossing Movie Franchises
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend>
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      chartType="Column"
      [legend]="legend"
      [dataSource]="highestGrossingMovies"
      xAxisInterval="1"
      yAxisTitle="Billions of U.S. Dollars"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      crosshairsSnapToData="true">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Trendlines

Use trendlines to identify a trend or find patterns in your data. There are many different trendlines supported by the Angular chart, such as CubicFit and LinearFit. You can learn more about this feature in the [Chart Trendlines](features/chart-trendlines.md) topic.

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
    providers: [FinancialDataService],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;
    public trendlineType = "CubicFit";

    constructor(private dataService: FinancialDataService) {
        this.data = [this.dataService.getMsft()];
    }

    public OnTrendlineTypeChanged(e: any) {
        this.trendlineType = e.target.value;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Annotations: </label>
        <label class="options-item">
            <select (change)="OnTrendlineTypeChanged($event)">
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
        </label>
    </div>
    <div class="options vertical" >
        <label id="legendTitle">Microsoft Stock Trend </label>
    </div>

    <div class="container">
        <igx-financial-chart width="100%"
            height="100%"
            chartType=Bar
            thickness=2
            [dataSource]="data"
            [trendLineType]="trendlineType"
            trendLineThickness=2
            trendLinePeriod=10
            trendLineBrushes="rgba(0, 101, 209, 1)"
            zoomSliderType="None"
            isHorizontalZoomEnabled="false"
            isVerticalZoomEnabled="false">
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

## API References

- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
