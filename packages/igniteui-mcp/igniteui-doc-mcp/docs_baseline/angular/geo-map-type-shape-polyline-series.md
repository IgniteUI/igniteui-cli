---
title: Angular Map | Data Visualization Tools | Shape Polyline Series | Infragistics
_description: Use Infragistics Angular map's shape polyline series to render roads or connections between geographic locations such as cities or airports. Learn more about Ignite UI for Angular map's series!
_keywords: Angular map, Ignite UI for Angular, shape polyline series, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_tocName: Geographic Polyline Map
_premium: true
---

# Angular Geographic Polyline Map

In Angular map component, you can use the [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

## Angular Geographic Polyline Map Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxGeographicMapModule } from "igniteui-angular-maps";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";


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
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, EmbeddedViewRef, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

  @ViewChild("map", { static: true })
  public map: IgxGeographicMapComponent;

  @ViewChild("template", { static: true })
  public tooltip: TemplateRef<object>;

  constructor() {
  }

  public ngAfterViewInit(): void {
    
    this.map.updateZoomWindow({ left: 0.195, top: 0.325, width: 0.2, height: 0.1});

    const sds = new IgxShapeDataSource();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp";
    sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf";
    sds.dataBind();
  }

  public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    // console.log("loaded /Shapes/AmericanRoads.shp " + shapeRecords.length);

    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];

    // filtering records of loaded shapefile
    for (const record of shapeRecords) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road"
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }

    // creating polyline series for roads of each country
    this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");
}

  public addSeriesWith(shapeData: any[], shapeBrush: string) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = shapeData;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeFilterResolution = 2.0;
        lineSeries.shapeStrokeThickness = 2;
        lineSeries.shapeStroke = shapeBrush;
        lineSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(lineSeries);
    }
}
```
```html
<div class="container vertical">
    <igx-geographic-map #map
        width="100%"
        height="100%"
        zoomable="true" >
    </igx-geographic-map>
    <!--
    <div class="my-legend">
    <div id="legendTitle">Geographic Map: Polyline Series</div>
    <div class="legend-scale">
    <ul class="legend-labels">
        <li><span style="background:rgb(219, 84, 5)"></span>Canadian Roads</li>
        <li><span style="background:rgb(32, 146, 252)"></span>American Roads</li>
        <li><span style="background:rgb(14, 194, 14)"></span>Mexican Roads</li>
    </ul>
    </div>
    </div> -->
    <ng-template let-series="series" let-item="item" #template>
    <div>
        <span>{{item.country}} {{item.type}}</span><br />
        <span>Length: {{item.length}} miles</span>
    </div>
    </ng-template>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

The [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) works a lot like the [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html) except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements

Similarly to other types of geographic series in the control, the [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriesbasecomponent.html#shapeMemberPath) property. The [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) uses points of this mapped data column to plot polygons in the control.

## Code Snippet

The following code shows how to bind the [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) to locations of cities loaded from a shape file using the [`IgxShapeDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapedatasource.html).

<!-- Angular -->

```html
<div className="sampleRoot" >

        <igx-geographic-map #map
            width="700px"
            height="500px"
            zoomable="true"
            >
        </igx-geographic-map>
</div>
<ng-template let-series="series" let-item="item" #template>
<div>
    <span>
    {{item.country}} {{item.type}}
    </span>
    <br />
    <span>
    Length: {{item.length}} miles
    </span>
</div>
</ng-template>
```

```ts
import { AfterViewInit, Component, EmbeddedViewRef, TemplateRef, ViewChild} from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxIgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-shape-polyline-series",
  styleUrls: ["./map-geographic-shape-polyline-series.component.scss"],
  templateUrl: "./map-geographic-shape-polyline-series.component.html"
})

export class MapTypeShapePolylineSeriesComponent implements AfterViewInit {

  @ViewChild ("map")
  public map: IgxGeographicMapComponent;

  @ViewChild("template")
  public tooltip: TemplateRef<object>;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.map.windowRect = { left: 0.195, top: 0.325, width: 0.2, height: 0.1 };

    const sds = new IgxShapeDataSource();
    sds.shapefileSource = "/assets/Shapes/AmericanRoads.shp";
    sds.databaseSource  = "/assets/Shapes/AmericanRoads.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
  }

  public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded /Shapes/AmericanRoads.shp " + shapeRecords.length);

    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];

    // filtering records of loaded shapefile
    for (const record of shapeRecords) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road"
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }

    // creating polyline series for roads of each country
    this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");
}

  public addSeriesWith(shapeData: any[], shapeBrush: string) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = shapeData;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeFilterResolution = 2.0;
        lineSeries.shapeStrokeThickness = 2;
        lineSeries.shapeStroke = shapeBrush;
        lineSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(lineSeries);
    }
}
```

## API References

- [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
- [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
- `ItemsSource`
- [`IgxShapeDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapedatasource.html)
