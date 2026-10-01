---
title: Angular Shape Chart | Data Visualization | Infragistics
description: Infragistics' Angular Shape Chart
keywords: Angular Charts, Shape Chart, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Angular Shape Charts are a group of charts that take array of shapes (array or arrays of X/Y points) and render them as collection of polygons or polylines in Cartesian (x, y) coordinate system."
_tocName: Shape Chart
_premium: true
---
# Angular Shape Charts

The Ignite UI for Angular Shape Charts are a group of charts that take array of shapes (array or arrays of X/Y points) and render them as collection of polygons or polylines in Cartesian (x, y) coordinate system. They are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## Angular Scatter Polygon Chart

The Angular Scatter Polygon Chart renders an array or array of arrays of polygons in the Cartesian (x, y) coordinate system using `IgxScatterPolygonSeries` in the `IgxDataChart` control. This chart can be used to filled shapes of plot diagrams, blueprints, or even the floor plan of buildings.

You can create this type of chart in the `IgxDataChart` control by binding your data to a `IgxScatterPolygonSeries`, as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartShapeModule, IgxDataChartShapeCoreModule, IgxLegendModule, IgxDataChartInteractivityModule, IgxDataChartScatterModule } from "igniteui-angular-charts";


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
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxDataChartScatterModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxStyleShapeEventArgs } from "igniteui-angular-charts";
import { IgxScatterPolygonSeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild('airplaneShapeSeries', { static: true })
    public airplaneShapeSeries: IgxScatterPolygonSeriesComponent;

    @ViewChild('airplaneSeatSeries', { static: true })
    public airplaneSeatSeries: IgxScatterPolygonSeriesComponent;

    @ViewChild('seatTooltip', { static: true })
    public seatTooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit() {

      fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonShape(data));

      fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonSeats(data));
    }

    public onLoadedJsonShape(jsonData: any[]) {
        // console.log('airplane-shape.json ' + jsonData.length);
        this.airplaneShapeSeries.dataSource = jsonData;
    }

    public onLoadedJsonSeats(jsonData: any[]) {
      // console.log('airplane-seats.json ' + jsonData.length);
      this.airplaneSeatSeries.dataSource = jsonData;
      this.airplaneSeatSeries.showDefaultTooltip = true;
      this.airplaneSeatSeries.tooltipTemplate = this.seatTooltip;
    }

    public onStylingShape(ev: { sender: any, args: IgxStyleShapeEventArgs }) {

        ev.args.shapeOpacity = 1.0;
        ev.args.shapeStrokeThickness = 0.5;
        ev.args.shapeStroke = 'Black';

        const itemRecord = ev.args.item as any;
        if (itemRecord.class === 'First') {
            ev.args.shapeFill = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            ev.args.shapeFill = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            ev.args.shapeFill = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
          ev.args.shapeFill = 'Red';
        }

        if (itemRecord.status === 'Sold') {
          ev.args.shapeFill = 'Gray';
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Airplane Seating Chart (Polygons)</label>
    </div>

    <div class="custom-legend">
      <div><span style="background: DodgerBlue; "></span><label>First Class</label></div>
      <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
      <div><span style="background: Orange; "></span><label>Premium Class</label></div>
      <div><span style="background: Red; "></span><label>Economy Class</label></div>
      <div><span style="background: Gray; "></span><label>Sold Seat</label> </div>
      <div><span style="background: LightGray; "></span><label>Airplane</label> </div>
    </div>

    <div class="container">
        <igx-data-chart isHorizontalZoomEnabled="true" isVerticalZoomEnabled="true"
          width="100%"
          height="100%">
            <igx-numeric-x-axis #xAxis name="xAxis" minimumValue="-1000" maximumValue="1000" interval="200"></igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis name="yAxis" minimumValue="-600" maximumValue="600" interval="200"></igx-numeric-y-axis>

             <igx-scatter-polygon-series name="airplaneShapeSeries" #airplaneShapeSeries
                [xAxis]="xAxis"
                [yAxis]="yAxis" shapeMemberPath="points" thickness="0.5"
                title="Airplane Shape" brush="LightGray" outline="Black">
             </igx-scatter-polygon-series>

             <igx-scatter-polygon-series name="airplaneSeatSeries" #airplaneSeatSeries
                [xAxis]="xAxis"
                [yAxis]="yAxis" shapeMemberPath="points" thickness="0.5"
                title="Airplane Seats"
                (styleShape)="onStylingShape($event)">
             </igx-scatter-polygon-series>

        </igx-data-chart>
    </div>

    <div class="options horizontal">
      <div><span style="background: dodgerblue; "></span><label>First Class</label></div>
      <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
      <div><span style="background: Orange; "></span><label>Premium Class</label></div>
      <div><span style="background: red; "></span><label>Economy Class</label></div>
      <div><span style="background: gray; "></span><label>Sold Seat</label> </div>
    </div>
</div>

<ng-template let-series="series" let-item="item" #seatTooltip>
  <div>
      <span>{{item.class}} Class</span>
      <br />
      <span>Seat: {{item.seat}}</span>
      <br />
      <span>Price: ${{item.price}}</span>
      <br />
      <span>Status: {{item.status}}</span>
  </div>
</ng-template>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Scatter Polyline Chart

The Angular Scatter Polyline Chart renders an array or array of arrays of polylines in the Cartesian (x, y) coordinate system using `IgxScatterPolylineSeries` in the `IgxDataChart` control. This chart can be used to outlines of plot diagrams, blueprints, or even the floor plan of buildings. Also, it can visualizes complex relationships between a large amount of elements.

You can create this type of chart in the `IgxDataChart` control by binding your data to a `IgxScatterPolylineSeries`, as shown in the example below:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartShapeModule, IgxDataChartShapeCoreModule, IgxLegendModule, IgxDataChartInteractivityModule, IgxDataChartScatterModule } from "igniteui-angular-charts";


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
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxDataChartScatterModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxStyleShapeEventArgs } from "igniteui-angular-charts";
import { IgxScatterPolylineSeriesComponent } from "igniteui-angular-charts";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild('airplaneShapeSeries', { static: true })
    public airplaneShapeSeries: IgxScatterPolylineSeriesComponent;

    @ViewChild('airplaneSeatSeries', { static: true })
    public airplaneSeatSeries: IgxScatterPolylineSeriesComponent;

    @ViewChild('seatTooltip', { static: true })
    public seatTooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit() {

      fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonShape(data));

      fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonSeats(data));
    }

    public onLoadedJsonShape(jsonData: any[]) {
        // console.log('airplane-shape.json ' + jsonData.length);
        this.airplaneShapeSeries.dataSource = jsonData;
    }

    public onLoadedJsonSeats(jsonData: any[]) {
      // console.log('airplane-seats.json ' + jsonData.length);
      this.airplaneSeatSeries.dataSource = jsonData;
      this.airplaneSeatSeries.showDefaultTooltip = true;
      this.airplaneSeatSeries.tooltipTemplate = this.seatTooltip;
    }

    public onStylingShape(ev: { sender: any, args: IgxStyleShapeEventArgs }) {

        ev.args.shapeOpacity = 1.0;
        ev.args.shapeStrokeThickness = 1.0;
        ev.args.shapeStroke = 'Black';

        const itemRecord = ev.args.item as any;
        if (itemRecord.class === 'First') {
            ev.args.shapeStroke = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            ev.args.shapeStroke = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            ev.args.shapeStroke = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
          ev.args.shapeStroke = 'Red';
        }

        if (itemRecord.status === 'Sold') {
          ev.args.shapeFill = 'Gray';
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <label id="legendTitle">Airplane Seating Chart (Polylines)</label>
    </div>

    <div class="custom-legend">
      <div><span style="background: DodgerBlue; "></span><label>First Class</label></div>
      <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
      <div><span style="background: Orange; "></span><label>Premium Class</label></div>
      <div><span style="background: Red; "></span><label>Economy Class</label></div>
      <div><span style="background: Gray; "></span><label>Sold Seat</label> </div>
      <div><span style="background: LightGray; "></span><label>Airplane</label> </div>
    </div>

    <div class="container">
        <igx-data-chart isHorizontalZoomEnabled="true" isVerticalZoomEnabled="true"
          width="100%"
          height="100%">
            <igx-numeric-x-axis #xAxis name="xAxis" minimumValue="-1000" maximumValue="1000" interval="200"></igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis name="yAxis" minimumValue="-600" maximumValue="600" interval="200"></igx-numeric-y-axis>

            <igx-scatter-polyline-series name="airplaneShapeSeries" #airplaneShapeSeries
                [xAxis]="xAxis"
                [yAxis]="yAxis" shapeMemberPath="points" thickness="0.5"
                title="Airplane Shape" brush="LightGray" outline="Black">
             </igx-scatter-polyline-series>

             <igx-scatter-polyline-series name="airplaneSeatSeries" #airplaneSeatSeries
                [xAxis]="xAxis"
                [yAxis]="yAxis" shapeMemberPath="points"
                title="Airplane Seats"
                (styleShape)="onStylingShape($event)">
             </igx-scatter-polyline-series>
        </igx-data-chart>
    </div>

    <div class="option horizontal">
      <div><span style="border-color: dodgerblue; "></span><label>First Class</label></div>
      <div><span style="border-color: LimeGreen; "></span><label>Business Class</label></div>
      <div><span style="border-color: Orange; "></span><label>Premium Class</label></div>
      <div><span style="border-color: red; "></span><label>Economy Class</label></div>
      <div><span style="border-color: gray; "></span><label>Sold Seat</label> </div>
    </div>
</div>

<ng-template let-series="series" let-item="item" #seatTooltip>
  <div>
      <span>{{item.class}} Class</span>
      <br />
      <span>Seat: {{item.seat}}</span>
      <br />
      <span>Price: ${{item.price}}</span>
      <br />
      <span>Status: {{item.status}}</span>
  </div>
</ng-template>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](./area-chart.md)
- [Line Chart](./line-chart.md)
- [Scatter Chart](./scatter-chart.md)

## API References
`IgxDataChart`
`IgxScatterPolygonSeries`
`IgxScatterPolylineSeries`
`IgxNumericXAxis`
`IgxNumericYAxis`
