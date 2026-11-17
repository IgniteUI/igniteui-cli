---
title: "Angular Map | Data Visualization Tools | Shape Polyline Series | Infragistics"
description: Use Infragistics Angular map's shape polyline series to render roads or connections between geographic locations such as cities or airports. Learn more about Ignite UI for Angular map's series!
keywords: "Angular map, Ignite UI for Angular, shape polyline series, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Angular map component, you can use the GeographicPolylineSeries to display geo-spatial data using polylines in a geographic context."
platformType: xplat
_tocName: Geographic Polyline Map
_premium: true
---
# Angular Geographic Polyline Map

In Angular map component, you can use the [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

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

The [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) works a lot like the [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements
Similarly to other types of geographic series in the control, the [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) has the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=dataSource) property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the [`shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=shapeMemberPath) property. The [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) uses points of this mapped data column to plot polylines in the control.

When the shapes come straight from a shape file and need no reshaping first, the series can be given a [`shapefileDataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=shapefileDataSource) of its own instead, and it reads the points out of the records itself. That is what the code below does; [Binding Shape Files](./geo-map-binding-shp-file.md) covers the other route, where a handler turns each record into an object of your own and maps [`shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=shapeMemberPath) to it.

## Code Snippet
The following code gives the [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) a [`shapefileDataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=shapefileDataSource) pointing at a shape file of American roads, and draws every road in it.

```html
<igx-geographic-map
    #map
    height="100%"
    width="100%"
    zoomable="true">
    <igx-geographic-polyline-series
        #geographicPolylineSeries1
        outline="Red">
        <igx-shape-data-source
            shapefileSource="https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp"
            databaseSource="https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf">
        </igx-shape-data-source>
    </igx-geographic-polyline-series>
</igx-geographic-map>
```

## API References
[`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent)
[`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent)
[`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord)
