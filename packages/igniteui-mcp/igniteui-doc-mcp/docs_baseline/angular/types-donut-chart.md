---
title: Angular Donut Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Donut Chart
_keywords: Angular Charts, Donut Chart, Donut Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDoughnutChart", "DoughnutChart"]
namespace: Infragistics.Controls.Charts
_tocName: Donut Chart
_premium: true
---

# Angular Donut Chart

The Ignite UI for Angular Donut Chart is similar to the [Pie Chart](pie-chart.md), proportionally illustrating the occurrences of a variable. The donut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data. The rings are capable of being bound to a different data item, or they can share a common data source.

## Angular Donut Chart Example

You can create Donut Chart using the [`IgxDoughnutChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdoughnutchartcomponent.html) control by binding your data as shown in the example below.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxItemLegendModule, IgxDoughnutChartModule } from 'igniteui-angular-charts';

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
    IgxDoughnutChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxDoughnutChartComponent, IgxRingSeriesComponent } from 'igniteui-angular-charts';

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
	private chart: IgxDoughnutChartComponent
	@ViewChild("series", { static: true } )
	private series: IgxRingSeriesComponent
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
      <igx-doughnut-chart
      name="chart"
      #chart
      allowSliceExplosion="true">
          <igx-ring-series
          name="series"
          #series
          labelMemberPath="summary"
          labelsPosition="OutsideEnd"
          labelExtent="30"
          valueMemberPath="value"
          legendLabelMemberPath="category"
          outlines="white"
          radiusFactor="0.6"
          startAngle="30"
          [dataSource]="energyGlobalDemand"
          [legend]="legend">
          </igx-ring-series>
      </igx-doughnut-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Donut Chart Recommendations

### Are Angular Donut Charts right for your project?

Donut Charts are appropriate for small data sets and are easy to read at a glance. Donut charts are just one type of part-to-whole visualization. Others include:

- [Pie](pie-chart.md)

<!-- - Funnel  -->

- [Stacked Area](area-chart.md)
- [Stacked 100% Area (Stacked Percentage Area)](area-chart.md)
- [Stacked Bar](bar-chart.md)
- [Stacked 100% Bar (Stacked Percentage Bar)](bar-chart.md)
- [Treemap](treemap-chart.md)
- [Waterfall](column-chart.md)

The Angular Donut Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

### Best Practices for Donut Charts

- Using multiple data sets to display your data in a ring display.
- Placing the information such as values or labels, within the hole of the donut for quick explanation of data.
- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Ensuring data segments add up to 100%.
- Ensuring the color palette is distinguishable for segments/slices of the parts.

### When not to use a Donut Chart

- Comparing change over time —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- Requiring precise data comparison —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- You have more than 6 or 8 segments (high data volume) — consider a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a [Bar](bar-chart.md) chart.
- You have negative data, as this can not be represented in a donut chart.

## Angular Donut Chart - Slice Selection

The Angular Donut Chart has the ability to select slices on click. Optionally, you may apply a single custom visual style to the selected slices. The `SliceClick` event is raised when the user clicks on a slice. Enabling slice selection allows you to modify the slice's selection upon click. The following sample demonstrates how to enable slice selection and set the selected slice color to gray.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDoughnutChartModule, IgxRingSeriesModule, IgxLegendModule, IgxItemLegendModule } from "igniteui-angular-charts";


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
    IgxDoughnutChartModule,
    IgxRingSeriesModule,
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
import { IgxDoughnutChartComponent } from "igniteui-angular-charts";
import { IgxRingSeriesComponent } from "igniteui-angular-charts";
import { IgxSliceClickEventArgs } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public data: any;
    public selectedSliceLabel : string = "No Selection";
    public selectedSliceValue : string = "0%";

    @ViewChild("chart", { static: true })
    public chart: IgxDoughnutChartComponent;

    constructor() {
        this.data = [
            { Value: 37, Label: "Cooling", Summary: "Cooling 37%" },
            { Value: 25, Label: "Residential", Summary: "Residential 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 11, Label: "Lighting", Summary: "Lighting 11%" },
            { Value: 18, Label: "Other", Summary: "Other 18%" }
        ];

    }


    public OnSliceClick(e: any) {

        if (e.args.isSelected)
        {
            this.selectedSliceLabel = this.data[e.args.index].Label;
            this.selectedSliceValue = this.data[e.args.index].Value + "%";
        }
        else
        {
            this.selectedSliceLabel = "No Selection";
            this.selectedSliceValue = "0%";
        }
    }

    public ngAfterViewInit(): void {
    }


}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <div class="options vertical">
            <span id="legendTitle">Global Electricity Demand by Energy Use</span>
            <div class="legend">
                <igx-item-legend #legend height="100px" width="100px" orientation="horizontal"></igx-item-legend>
            </div>
        </div>
    </div>

    <div class="container relative">
        <div class="container-overlay">
            <igx-doughnut-chart #chart height="100%" width="100%"
                allowSliceSelection="true" innerExtent="0.6"
                (sliceClick)="OnSliceClick($event)"
                selectedSliceStroke="White"
                selectedSliceFill="Gray"
                selectedSliceStrokeThickness="1"
                selectedSliceOpacity="0.75">
                <igx-ring-series
                    [dataSource]="data"
                    valueMemberPath="Value"
                    labelMemberPath="Summary"
                    legendLabelMemberPath="Label"
                    [legend]="legend"
                    selectedSliceStroke = "white"
                    selectedSliceFill= "rgb(143,143,143)"
                    selectedSliceOpacity =1.0
                    selectedSliceStrokeThickness=2
                    startAngle=260
                    labelsPosition="OutsideEnd"
                    labelExtent="30"
                    radiusFactor="0.6" >
                </igx-ring-series>
            </igx-doughnut-chart>

        <div class="overlay-center" style="line-height: 1.1; text-align: center;">
            <label style="font-size: 1.2rem;"><span [textContent]="selectedSliceLabel"></span></label>
            <label style="font-size: 2.2rem;"><span [textContent]="selectedSliceValue"></span></label>
        </div>
    </div>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Donut Chart - Multiple Rings

It is possible to have a multiple ring display in the Angular Donut Chart, with each of the rings capable of being bound to a different data item, or they can share a common data source. This can be helpful if you need to display your data as tiers that have an underlying common category, such as the season to month data display below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxLegendModule, IgxDoughnutChartModule } from 'igniteui-angular-charts';

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
    IgxDoughnutChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CalendarSeasonsItem, CalendarSeasons } from './CalendarSeasons';
import { CalendarMonthsItem, CalendarMonths } from './CalendarMonths';
import { IgxDoughnutChartComponent, IgxRingSeriesComponent } from 'igniteui-angular-charts';

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
	private chart: IgxDoughnutChartComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxRingSeriesComponent
	@ViewChild("series2", { static: true } )
	private series2: IgxRingSeriesComponent
    private _calendarSeasons: CalendarSeasons = null;
    public get calendarSeasons(): CalendarSeasons {
        if (this._calendarSeasons == null)
        {
            this._calendarSeasons = new CalendarSeasons();
        }
        return this._calendarSeasons;
    }

    private _calendarMonths: CalendarMonths = null;
    public get calendarMonths(): CalendarMonths {
        if (this._calendarMonths == null)
        {
            this._calendarMonths = new CalendarMonths();
        }
        return this._calendarMonths;
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
      Hierarchical Chart
  </div>
  <div class="container fill">
      <igx-doughnut-chart
      name="chart"
      #chart
      allowSliceExplosion="false"
      allowSliceSelection="false">
          <igx-ring-series
          name="series1"
          #series1
          labelMemberPath="label"
          valueMemberPath="value"
          labelsPosition="Center"
          radiusFactor="0.9"
          outlines="white"
          brushes="rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1)"
          [dataSource]="calendarSeasons">
          </igx-ring-series>
          <igx-ring-series
          name="series2"
          #series2
          labelMemberPath="label"
          valueMemberPath="value"
          labelsPosition="Center"
          radiusFactor="0.9"
          outlines="white"
          brushes="rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1)"
          [dataSource]="calendarMonths">
          </igx-ring-series>
      </igx-doughnut-chart>
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

You can find more information about related chart types in these topics:

- [Pie Chart](pie-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgxDoughnutChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdoughnutchartcomponent.html)
- [`allowSliceExplosion`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdoughnutchartcomponent.html#allowSliceExplosion)
- [`allowSliceSelection`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdoughnutchartcomponent.html#allowSliceSelection)
- [`innerExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdoughnutchartcomponent.html#innerExtent)
- `SliceClick`
