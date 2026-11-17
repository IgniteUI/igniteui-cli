---
title: "Angular Map | Data Visualization Tools | Shape Polygon Series | Infragistics"
description: Use Infragistics Angular map's shape polygon series to render shapes of countries or regions defined by geographic locations. Learn more about Ignite UI for Angular map's series!
keywords: "Angular map, shape polygon series, Ignite UI for Angular, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Angular map component, you can use the GeographicShapeSeries to display geo-spatial data using shape polygons in a geographic context."
platformType: xplat
_tocName: Geographic Polygon Map
_premium: true
---
# Angular Geographic Polygon Map

In Angular map component, you can use the [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

## Angular Geographic Polygon Map Example

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
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicShapeSeriesComponent } from "igniteui-angular-maps";

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

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
        const sds = new IgxShapeDataSource();
        sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        // console.log("loaded /Shapes/WorldCountries.shp " + shapeRecords.length);

        const countriesNATO: any[] = [];
        const countriesSCO: any[] = [];
        const countriesARAB: any[] = [];
        const countriesOther: any[] = [];

        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                name: record.fieldValues.NAME,
                org: record.fieldValues.ALLIANCE,
                points: record.points,
                pop: (record.fieldValues.POPULATION / 1000000).toFixed(1)
            };

            const group = record.fieldValues.ALLIANCE;
            if (group === "NATO") {
                countriesNATO.push(country);
            } else if (group === "SCO") {
                countriesSCO.push(country);
            } else if (group === "ARAB LEAGUE") {
                countriesARAB.push(country);
            } else {
                countriesOther.push(country);
            }
        }

        this.addSeriesWith(countriesNATO, "rgb(32, 146, 252)", "NATO");
        this.addSeriesWith(countriesSCO, "rgb(252, 32, 32)", "SCO");
        this.addSeriesWith(countriesARAB, "rgb(14, 194, 14)", "AL");
        this.addSeriesWith(countriesOther, "rgb(146, 146, 146)", "Other");
  }

    public addSeriesWith(shapeData: any[], shapeBrush: string, shapeTitle: string) {
        const seriesName = shapeTitle + "series";
        const geoSeries = new IgxGeographicShapeSeriesComponent();
        geoSeries.dataSource = shapeData;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = shapeBrush;
        geoSeries.outline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.thickness = 1;
        geoSeries.title = shapeTitle;

        this.map.series.add(geoSeries);
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
        <div id="legendTitle">Geographic Map: Polygon Series</div>
        <div class="legend-scale">
            <ul class="legend-labels">
            <li><span style="background:rgb(219, 84, 5)"></span>China/Russia/Middle East/India</li>
            <li><span style="background:rgb(32, 146, 252)"></span>Americas & UK</li>
            <li><span style="background:rgb(14, 194, 14)"></span>Africa</li>
            </ul>
        </div>
    </div> -->

    <ng-template let-series="series" let-item="item" #template>
        <div>
            <div *ngIf="item.org;then hasOrg; else notOrg" ></div>
            <span>{{item.name}}: </span>
            <span>{{item.pop}} M</span>
        </div>
        <ng-template #hasOrg>
            <span [style.color]="series.brush">{{item.org}}</span><br />
        </ng-template>
        <ng-template #notOrg>
            <span></span>
        </ng-template>
    </ng-template>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

The [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) works a lot like the [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) except that geo-spatial data is rendered with polygons instead of polylines.

## Data Requirements
Similar to other types of geographic series in the map control, the [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) has the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=dataSource) property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the [`shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=shapeMemberPath) property. The [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) uses points of this mapped data column to plot polygons in the map control.

When the shapes come straight from a shape file and need no reshaping first, the series can be given a [`shapefileDataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=shapefileDataSource) of its own instead, and it reads the points out of the records itself. That is what the code below does; [Binding Shape Files](./geo-map-binding-shp-file.md) covers the other route, where a handler turns each record into an object of your own and maps [`shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=shapeMemberPath) to it.

## Code Snippet
The following code gives the [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) a [`shapefileDataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=shapefileDataSource) pointing at a shape file of the world’s countries, and draws every country in it.

```html
<igx-geographic-map
    #map
    height="100%"
    width="100%"
    zoomable="true">
    <igx-geographic-shape-series
        #geographicShapeSeries1
        outline="Black"
        thickness=0.5
        markerCollisionAvoidance="Omit">
        <igx-shape-data-source
            shapefileSource="https://static.infragistics.com/xplatform/shapes/world_countries_all.shp"
            databaseSource="https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf">
        </igx-shape-data-source>
    </igx-geographic-shape-series>
</igx-geographic-map>
```

## API References
[`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent)
[`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent)
[`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord)
