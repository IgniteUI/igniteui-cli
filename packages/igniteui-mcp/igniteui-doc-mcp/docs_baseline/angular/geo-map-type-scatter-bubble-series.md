---
title: "Angular Map | Data Visualization Tools | Scatter Proportional Series | Data Binding | Infragistics"
description: Use Infragistics Angular map's scatter proportional series to plot markers for the geographic points specified by the data in your application. Learn more about Ignite UI for Angular map's series!
keywords: "Angular map, scatter proportional series, Ignite UI for Angular, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "Series"]
llms:
  description: "In Angular map component, you can use the GeographicProportionalSymbolSeries to plot bubbles or proportional markers at the geographic locations specified by the data in your application."
platformType: xplat
_tocName: Geographic Bubble Map
_premium: true
---
# Angular Geographic Bubble Map

In Angular map component, you can use the [`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent) to plot bubbles or proportional markers at the geographic locations specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Also you can use this map series in a fleet management system or a GPS system for dynamic vehicle tracking.

## Angular Geographic Bubble Map Example

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
import { IgxSizeScaleComponent } from "igniteui-angular-charts";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts";
import { MarkerType } from "igniteui-angular-charts";
import { IgxDataContext } from "igniteui-angular-core";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicProportionalSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldLocations } from "./WorldLocations";

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
    public tooltipTemplate: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const sds = new IgxShapeDataSource();
        sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        // console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

        const contourPoints: any[] = [];
        for (const record of shapeRecords) {
            const temp = record.fieldValues.Contour;
            // using only major contours (every 10th degrees Celsius)
            if (temp % 10 === 0 && temp >= 0) {
                for (const shapes of record.points) {
                    for (let i = 0; i < shapes.length; i++) {
                        if (i % 5 === 0) {
                            const p = shapes[i];
                            const item = { lon: p.x, lat: p.y, value: temp };
                            contourPoints.push(item);
                        }
                    }
                }
            }
        }

        // console.log("loaded contour points: " + contourPoints.length);
        this.addSeriesWith(WorldLocations.getAll());
    }

    public addSeriesWith(locations: any[]) {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 4;
        sizeScale.maximumValue = 60;

        const brushes = [
            "rgba(14, 194, 14, 0.4)",  // semi-transparent green
            "rgba(252, 170, 32, 0.4)", // semi-transparent orange
            "rgba(252, 32, 32, 0.4)"  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.fillMemberPath = "pop";
        symbolSeries.radiusMemberPath = "pop";
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
        symbolSeries.tooltipTemplate = this.tooltipTemplate;

        this.map.series.add(symbolSeries);
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

    <ng-template let-series="series" let-item="item" #template>
        <div>
            <span>{{item.name}}</span>
        </div>
    </ng-template>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

The demo above shows the [`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent) series and how to specify data binding options of the series. Automatic marker selection is configured along with marker collision avoidance logic, and marker outline and fill colors are specified too.

## Configuration Summary
Similar to other types of scatter series in the map control, the [`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent) series has the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=dataSource) property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=longitudeMemberPath) and [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=latitudeMemberPath) properties to map these data columns. The [`radiusScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusScale) and [`radiusMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusMemberPath) will settings configures the radius for the bubbles.

The following table summarizes the [`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent) series properties used for data binding.

| Property|Type|Description |
| ---|---|--- |
| [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=dataSource)|any|Gets or sets the items source |
| [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=longitudeMemberPath)|string|Uses the DataSource property to determine the location of the longitude values on the assigned items |
| [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=latitudeMemberPath)|string|Uses the DataSource property to determine the location of the latitude values on the assigned items |
| [`radiusMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusMemberPath)|string|Sets the path to use to get the radius values for the series. |
| [`radiusScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusScale)|[`IgxSizeScaleComponent`](mcp:get_api_reference?platform=angular&component=IgxSizeScaleComponent)|Gets or sets the radius scale property for the current bubble series. |
| [`minimumValue`](mcp:get_api_reference?platform=angular&component=IgxSizeScaleComponent&member=minimumValue)|any|Configure the minimum value for calculating value sub ranges. |
| [`maximumValue`](mcp:get_api_reference?platform=angular&component=IgxSizeScaleComponent&member=maximumValue)|any|Configure the maximum value for calculating value sub ranges. |

## Code Snippet

```html
<igx-geographic-map
    #map
    height="100%"
    width="100%"
    zoomable="true">
    <igx-geographic-proportional-symbol-series
        #worldCitiesSeries
        [dataSource]="worldCities"
        markerType="Circle"
        fillMemberPath="population"
        radiusMemberPath="population"
        latitudeMemberPath="y"
        longitudeMemberPath="x"
        markerOutline="rgba(0, 0, 0, 0.3)">
        <igx-size-scale
            minimumValue=4
            maximumValue=60>
        </igx-size-scale>
        <igx-value-brush-scale
            brushes="rgba(14, 194, 14, 0.4) rgba(252, 170, 32, 0.4) rgba(252, 32, 32, 0.4)"
            minimumValue=0
            maximumValue=30>
        </igx-value-brush-scale>
    </igx-geographic-proportional-symbol-series>
</igx-geographic-map>
```

## API References

[`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent)<br />
[`radiusScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusScale)<br />
