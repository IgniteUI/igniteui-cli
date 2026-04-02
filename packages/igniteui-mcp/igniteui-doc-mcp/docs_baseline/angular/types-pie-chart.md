---
title: Angular Pie Charts and Graphs | Ignite UI for Angular
_description: The Ignite UI for Angular pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections. Try for FREE.
_keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, slice explosion, animation
_license: commercial
mentionedTypes: ["XamPieChart", "XamDataChart"]
namespace: Infragistics.Controls.Charts
_tocName: Pie Chart
_premium: true
---

# Angular Pie Chart

The Ignite UI for Angular Pie Chart, or Pie Graph, is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## Angular Pie Chart Example

You can create the Angular Pie Chart in the [`IgxPieChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartcomponent.html) by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization. In this case, the example shows the overall breakdown of budget spend by department.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxItemLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';

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
    IgxItemLegendModule,
    IgxPieChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxItemLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="legend">
      <igx-item-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-item-legend>
  </div>
  <div class="container fill">
      <igx-pie-chart
      name="chart"
      #chart
      legendLabelMemberPath="category"
      labelMemberPath="summary"
      labelsPosition="BestFit"
      valueMemberPath="value"
      radiusFactor="0.7"
      [dataSource]="energyGlobalDemand"
      [legend]="legend">
      </igx-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization. Others include:

- Pie
- Doughnut (Ring)
- Funnel
- Stacked Area
- Stacked 100% Area (Stacked Percentage Area)
- Stacked Bar
- Stacked 100% Bar (Stacked Percentage Bar)
- Treemap
- Waterfall

The Angular Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

Best Practices for a Pie Chart:

- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
- Ensuring data segments add up to 100%.
- Arranging the order of data from largest (highest) to smallest (least).
- Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
- Ensuring the color palette is distinguishable for segments/slices of the parts.
- Considering data labels in segments vs. legends for ease of reading.
- Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
- Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When:

- Comparing change over time —use a Bar, Line or Area chart.
- Requiring precise data comparison —use a Bar, Line or Area chart.
- You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a Bar chart.

## Angular Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum. You can collapse the point using legend click.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`IgxLegendComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html) property. The [`legendLabelMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#legendLabelMemberPath) can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

Additionally you can use the [`legendItemTemplate`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#legendItemTemplate) and [`legendItemBadgeTemplate`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#legendItemBadgeTemplate) properties and the various font properties on ItemLegend to further customize the look of the legend items.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxItemLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';

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
    IgxItemLegendModule,
    IgxPieChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxItemLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="legend">
      <igx-item-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-item-legend>
  </div>
  <div class="container fill">
      <igx-pie-chart
      name="chart"
      #chart
      valueMemberPath="value"
      labelMemberPath="summary"
      labelsPosition="OutsideEnd"
      legendLabelMemberPath="category"
      outlines="white"
      radiusFactor="0.7"
      labelExtent="30"
      [dataSource]="energyGlobalDemand"
      [legend]="legend">
      </igx-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

In the sample below, the [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#othersCategoryThreshold) is set to 2, and [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#othersCategoryType) is set to Number. Therefore, items with value less than or equal to 2 will be assigned to the "Others" category.

If you set [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#othersCategoryType) to Percent, then [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#othersCategoryThreshold) will be interpreted as a percentage rather than as a value, i.e. items whose values are less than 2% of the sum of all item values would be assigned to the Others category. You can use whichever [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#othersCategoryType) is most appropriate for your application.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxItemLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';

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
    IgxItemLegendModule,
    IgxPieChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxItemLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="legend">
      <igx-item-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-item-legend>
  </div>
  <div class="container fill">
      <igx-pie-chart
      name="chart"
      #chart
      labelMemberPath="summary"
      labelsPosition="OutsideEnd"
      labelExtent="30"
      valueMemberPath="value"
      outlines="white"
      othersCategoryThreshold="10"
      othersCategoryType="Number"
      othersCategoryText="Others"
      radiusFactor="0.7"
      legendLabelMemberPath="category"
      [dataSource]="energyGlobalDemand"
      [legend]="legend">
      </igx-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Pie Chart Explosion

The pie chart supports explosion of individual pie slices as well as a `SliceClick` event that allows you to modify selection states and implement custom logic

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPieChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxPieChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;

    constructor() {
        this.data = [
            { MarketShare: 37, Company: "Cooling", Summary: "Cooling 37%" },
            { MarketShare: 25, Company: "Residential", Summary: "Residential 25%"  },
            { MarketShare: 12, Company: "Heating", Summary: "Heating 12%" },
            { MarketShare: 8, Company: "Lighting", Summary: "Lighting 8%" },
            { MarketShare: 18, Company: "Other", Summary: "Other 18%" }
        ];
    }

    public pieSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }

    public ngAfterViewInit(): void {
        this.chart.explodedSlices.add(3);
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <span id="legendTitle">Global Electricity Demand by Energy Use</span>
        <igx-item-legend #legend></igx-item-legend>
    </div>
<div class="container">
    <igx-pie-chart #chart
        height="100%"
        width="100%"
        [dataSource]="data"
        [legend]="legend"
        labelMemberPath="Summary"
        legendLabelMemberPath="Company"
        valueMemberPath="MarketShare"
        (sliceClick)="pieSliceClickEvent($event)"
        labelsPosition="OutsideEnd"
        labelExtent="30">
    </igx-pie-chart>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Pie Chart Selection

The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the [`selectedItems`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#selectedItems) property. The selected slices are then highlighted.

There is a property called [`selectionMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#selectionMode) which is how you set what mode you want the pie chart to use. The default value is `Single`. In order to disable selection, set the property to `Manual`.

The pie chart supports three different selection modes.

- Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
- Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
- Manual - When the mode is set to Manual, selection is disabled.

The pie chart has 4 events associated with selection:

- SelectedItemChanging
- SelectedItemChanged
- SelectedItemsChanging
- SelectedItemsChanged

The events that end in “Changing” are cancelable events which means you can stop the selection of a slice by setting the event argument property `Cancel` to true. When set to true the associated property will not update and the slice will not become selected. This is useful for scenarios where you want to keep users from being able to select certain slices based on the data inside it.

For scenarios where you click on the Others slice, the pie chart will return an object called [`IgxPieSliceOthersContext`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiesliceotherscontext.html). This object contains a list of the data items contained within the Others slice.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPieChartModule, IgxLegendModule, IgxItemLegendModule } from "igniteui-angular-charts";


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
    IgxPieChartModule,
    IgxLegendModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public selectionType: string;
    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;

    constructor() {
        this.data = [
            { MarketShare: 37, Company: "Cooling", Summary: "Cooling 37%" },
            { MarketShare: 25, Company: "Residential", Summary: "Residential 25%"  },
            { MarketShare: 12, Company: "Heating", Summary: "Heating 12%" },
            { MarketShare: 8, Company: "Lighting", Summary: "Lighting 8%" },
            { MarketShare: 18, Company: "Other", Summary: "Other 18%" }
        ];

        this.selectionType = "Single";
    }

    public ngAfterViewInit(): void {
        this.chart.selectedItem = this.data[3];
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Global Electricity Demand by Energy Use</label>
        <igx-item-legend #legend></igx-item-legend>
    </div>
    <div class="container">
        <igx-pie-chart #chart
            height="100%"
            width="100%"
            [dataSource]="data"
            [legend]="legend"
            valueMemberPath="MarketShare"
            labelMemberPath="Summary"
            legendLabelMemberPath="Company"
            [selectionMode]="selectionType"
            selectedSliceStroke = "white"
            selectedSliceFill= "rgb(143,143,143)"
            selectedSliceOpacity =1.0
            selectedSliceStrokeThickness=2
            labelsPosition="OutsideEnd"
            labelExtent="30">
        </igx-pie-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Pie Chart Animation

You can animate the pie chart smoothly by setting the `radiusFactor` property, which will scale the chart's radius. Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPieChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxPieChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;
    public animateChart: string = "Pause Animation";
    private _refreshInterval: number = 10;
    private _interval: number = -1;
    private isTimerStarted: boolean = false;

    constructor(private _zone: NgZone) {
        this.data = [
            { MarketShare: 37, Company: "Cooling", Summary: "Cooling 37%" },
            { MarketShare: 25, Company: "Residential", Summary: "Residential 25%"  },
            { MarketShare: 12, Company: "Heating", Summary: "Heating 12%" },
            { MarketShare: 8, Company: "Lighting", Summary: "Lighting 8%" },
            { MarketShare: 18, Company: "Other", Summary: "Other 18%" }
        ];
    }

    public onClicked() {
        if (!this.isTimerStarted) {
            this.animateChart = "Start Animation";
            this.isTimerStarted = true;
            window.setTimeout(() => this.tick(), 16);
        } else {
            this.isTimerStarted = false;
            this.animateChart = "Pause Animation";
        }
    }

    public get refreshInterval(): number {
        return this._refreshInterval;
    }

    public set refreshInterval(v: number) {
        this._refreshInterval = v;
        this.setupInterval();
    }

    public ngAfterViewInit(): void {
        this.setupInterval();
    }

    private setupInterval(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this._interval);
            });
            this._interval = -1;
        }

        this._zone.runOutsideAngular(() => {
            this._interval = window.setInterval(() => this.tick(),
                this.refreshInterval);
        });
    }

    private tick(): void {

        if (!this.isTimerStarted) {

            this.chart.radiusFactor += 0.0025;
            this.chart.startAngle++;
            if (this.chart.startAngle >= 360) {
                this.chart.startAngle = 0;
            }
            if (this.chart.radiusFactor > 1.0) {
                this.chart.radiusFactor = 0.1;
            }
        }
    }

}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <button class="button" (click)="onClicked()" >
            <label>{{animateChart}}</label>
        </button>
    </div>
    <div class="container">
        <igx-pie-chart #chart height="100%"
            width="100%"
            [dataSource]="data"
            valueMemberPath="MarketShare"
            labelMemberPath="Summary"
            labelsPosition="InsideEnd"
            startAngle = 0
            labelExtent = 0.7
            radiusFactor = 0.1>
        </igx-pie-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Pie Chart Styling

Once our pie chart is created, we may want to make some further styling customizations such as a change of the colors for the slices of the chart, as demonstrated below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPieChartModule, IgxItemLegendModule } from 'igniteui-angular-charts';

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
    IgxPieChartModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxItemLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="legend">
      <igx-item-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-item-legend>
  </div>
  <div class="container fill">
      <igx-pie-chart
      name="chart"
      #chart
      legendLabelMemberPath="category"
      valueMemberPath="value"
      labelMemberPath="summary"
      labelsPosition="OutsideEnd"
      labelExtent="30"
      brushes="rgba(247, 210, 98, 1) rgba(168, 168, 183, 1) rgba(224, 81, 169, 1) rgba(248, 161, 95, 1) rgba(115, 86, 86, 1)"
      outlines="white"
      radiusFactor="0.7"
      startAngle="0"
      [dataSource]="energyGlobalDemand"
      [legend]="legend">
      </igx-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Radial Pie Chart

The Radial Pie Chart belongs to a group of Radial Charts and uses belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDataChartCoreModule, IgxDataChartRadialModule, IgxDataChartRadialCoreModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

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
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartRadialModule,
    IgxDataChartRadialCoreModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialPieSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxCategoryAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("radialPieSeries1", { static: true } )
	private radialPieSeries1: IgxRadialPieSeriesComponent
	@ViewChild("radialPieSeries2", { static: true } )
	private radialPieSeries2: IgxRadialPieSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _footballPlayerStats: FootballPlayerStats = null;
    public get footballPlayerStats(): FootballPlayerStats {
        if (this._footballPlayerStats == null)
        {
            this._footballPlayerStats = new FootballPlayerStats();
        }
        return this._footballPlayerStats;
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
  <div class="legend-title">
      Ronaldo vs Messi Player Stats
  </div>
  <div class="legend">
      <igx-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-legend>
  </div>
  <div class="container fill">
      <igx-data-chart
      name="chart"
      #chart
      [legend]="legend"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false">
          <igx-category-angle-axis
          name="angleAxis"
          #angleAxis
          [dataSource]="footballPlayerStats"
          label="attribute">
          </igx-category-angle-axis>
          <igx-numeric-radius-axis
          name="radiusAxis"
          #radiusAxis
          innerRadiusExtentScale="0.1"
          interval="2"
          minimumValue="0"
          maximumValue="10">
          </igx-numeric-radius-axis>
          <igx-radial-pie-series
          name="RadialPieSeries1"
          #radialPieSeries1
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="ronaldo"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="3"
          title="Ronaldo">
          </igx-radial-pie-series>
          <igx-radial-pie-series
          name="RadialPieSeries2"
          #radialPieSeries2
          [dataSource]="footballPlayerStats"
          [angleAxis]="angleAxis"
          [valueAxis]="radiusAxis"
          valueMemberPath="messi"
          showDefaultTooltip="false"
          areaFillOpacity="0.8"
          thickness="3"
          title="Messi">
          </igx-radial-pie-series>
          <igx-data-tool-tip-layer
          name="dataToolTipLayer"
          #dataToolTipLayer>
          </igx-data-tool-tip-layer>
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

## Additional Resources

- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`legendItemBadgeTemplate`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#legendItemBadgeTemplate)
- [`legendItemTemplate`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#legendItemTemplate)
- [`legendLabelMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#legendLabelMemberPath)
- [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#othersCategoryThreshold)
- [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#othersCategoryType)
- [`selectionMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartbasecomponent.html#selectionMode)

|Chart Type       | Control Name   | API Members |
|-----------------|----------------|------------ |
|Pie Chart      | [`IgxPieChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpiechartcomponent.html)     | `PieChart` |
|Radial Pie Chart | [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxRadialPieSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialpieseriescomponent.html) |
