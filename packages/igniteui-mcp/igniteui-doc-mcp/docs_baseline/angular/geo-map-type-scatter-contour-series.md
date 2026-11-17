---
title: "Angular Map | Data Visualization Tools | Scatter Contour Series | Data Binding | Infragistics"
description: Use Infragistics Angular map's scatter contour series to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Angular map's series!
keywords: "Angular map, scatter contour series, Ignite UI for Angular, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "GeographicContourLineSeries", "CustomPaletteColorScale", "Series"]
llms:
  description: "In Angular map component, you can use the GeographicContourLineSeries to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point."
platformType: xplat
_tocName: Geographic Contour Map
_premium: true
---
# Angular Geographic Contour Map

In Angular map component, you can use the [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data defined by geographic locations such as weather temperature, atmospheric pressure, precipitation, population distribution, topographic data, etc.

## Angular Geographic Contour Map Example

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
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicContourLineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";

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
        this.createContourSeries(contourPoints);
    }

    public createContourSeries(data: any[]) {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)"  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const contourSeries = new IgxGeographicContourLineSeriesComponent();
        contourSeries.dataSource = data;
        contourSeries.longitudeMemberPath = "lon";
        contourSeries.latitudeMemberPath = "lat";
        contourSeries.valueMemberPath = "value";
        contourSeries.fillScale = brushScale;
        contourSeries.tooltipTemplate = this.tooltip;
        contourSeries.thickness = 4;

        this.map.series.add(contourSeries);
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
        <span [style.color]="series.brush">
            {{item | number: 2}} "°C"
        </span>
    </ng-template>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

The [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) works a lot like the [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) except that it represents data as contour lines, colored using a fill scale and the geographic scatter area series, represents data as a surface interpolated using a color scale.

## Data Requirements
Similar to other types of geographic series in the map component, the [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) has the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=dataSource) property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store geographic location (longitude and latitude coordinates) and one data column that stores a value associated with the geographic location. These data column, are identified by [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=longitudeMemberPath), [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=latitudeMemberPath), and [`valueMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=valueMemberPath) properties of the geographic series.
The [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=trianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a `TriangulationSource` for this property, especially when a large number of data items are present.

## Data Binding
The following table summarizes properties of [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=dataSource)|any|The source of data items to perform triangulation on if the [`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=trianglesSource) property provides no triangulation data.|
|[`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=longitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=dataSource).|
|[`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=latitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to to the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=dataSource).|
|[`valueMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=valueMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`fillScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=fillScale) property is set.|
|[`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=trianglesSource)|any|Gets or sets the source of triangulation data. Setting Triangles of the TriangulationSource object to this property improves both runtime performance and geographic series rendering.|
|[`triangleVertexMemberPath1`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=triangleVertexMemberPath1)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath2`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=triangleVertexMemberPath2)|string| The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath3`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=triangleVertexMemberPath3)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Contour Fill Scale
Use the [`fillScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=fillScale) property of the [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) to resolve fill brushes of the contour lines of the geographic series.
The provided `ValueBrushScale class should satisfy most of your coloring needs, but the application for custom coloring logic can inherit the ValueBrushScale class.
The following table list properties of the CustomPaletteColorScale affecting the surface coloring of the GeographicContourLineSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`IgxGeographicMapComponent.brushes`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=brushes)|BrushCollection|Gets or sets the collection of brushes for filling contours of the [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent)|
|[`maximumValue`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent&member=maximumValue)|double|The highest value to assign a brush in a fill scale.|
|[`minimumValue`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent&member=minimumValue)|double|The lowest value to assign a brush in a fill scale.|

## Code Snippet

The following code shows how to bind the [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) to triangulation data representing surface temperatures in the world.

```html
<igx-geographic-map
    #geoMap
    height="100%"
    width="100%"
    zoomable="true">
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent, IgxGeographicContourLineSeriesComponent, IgxValueBrushScaleComponent } from 'igniteui-angular-maps';

var contourSeries = new IgxGeographicContourLineSeriesComponent();
contourSeries.dataSource = this.worldTemperatures;
contourSeries.longitudeMemberPath = "lon";
contourSeries.latitudeMemberPath = "lat";
contourSeries.valueMemberPath = "value";
contourSeries.thickness = 4;
var valueBrushScale1 = new IgxValueBrushScaleComponent();
valueBrushScale1.brushes = ["rgba(32, 146, 252, 0.5)", "rgba(14, 194, 14, 0.5)", "rgba(252, 120, 32, 0.5)", "rgba(252, 32, 32, 0.5)"];
valueBrushScale1.minimumValue = 0;
valueBrushScale1.maximumValue = 30;
contourSeries.fillScale = valueBrushScale1;
this.geoMap.series.add(contourSeries);
```

## API References

[`fillScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=fillScale)<br />
[`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent)<br />
[`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent)<br />
[`IgxValueBrushScaleComponent`](mcp:get_api_reference?platform=angular&component=IgxValueBrushScaleComponent)<br />
