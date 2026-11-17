---
title: "Angular Map | Data Visualization Tools | Scatter Area Series | Data Binding | Infragistics"
description: Use Infragistics Angular map's scatter area series to draw a colored area surface based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Angular map's series!
keywords: "Angular map, scatter area series, Ignite UI for Angular, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "GeographicScatterAreaSeries", "CustomPaletteColorScale", "Series"]
llms:
  description: "In Angular map component, you can use the GeographicScatterAreaSeries to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point."
platformType: xplat
_tocName: Geographic Area Map
_premium: true
---
# Angular Geographic Area Map

In Angular map component, you can use the [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

## Angular Geographic Area Map Example

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
import { IgxCustomPaletteColorScaleComponent } from "igniteui-angular-charts";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicScatterAreaSeriesComponent } from "igniteui-angular-maps";

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
        this.createContourSeries(contourPoints);
    }

    public createContourSeries(data: any[]) {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)"  // semi-transparent red
        ];

        const colorScale = new IgxCustomPaletteColorScaleComponent();
        colorScale.palette = brushes;
        colorScale.minimumValue = 0;
        colorScale.maximumValue = 30;

        const areaSeries = new IgxGeographicScatterAreaSeriesComponent();
        areaSeries.dataSource = data;
        areaSeries.longitudeMemberPath = "lon";
        areaSeries.latitudeMemberPath = "lat";
        areaSeries.colorMemberPath = "value";
        areaSeries.colorScale = colorScale;
        areaSeries.tooltipTemplate = this.tooltipTemplate;
        areaSeries.thickness = 4;

        this.map.series.add(areaSeries);
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
            <span>Degrees: {{item.value}} "°F"</span><br/>
            <span>Longitude: {{item.lon}}</span><br/>
            <span>Latitude: {{item.lat}}</span>
        </div>
    </ng-template>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

The [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) works a lot like the [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Data Requirements
Similar to other types of geographic series in the map component, the [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) has the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=dataSource) property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=longitudeMemberPath), [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=latitudeMemberPath), and [`colorMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=colorMemberPath) properties of the geographic series identify these data column.
The [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=trianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

## Data Binding
The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=dataSource)|any|The source of data items to perform triangulation on if the [`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=trianglesSource) property provides no triangulation data.|
|[`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=longitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=dataSource).|
|[`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=latitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=dataSource).|
|[`colorMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=colorMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`IgxColorScaleComponent`](mcp:get_api_reference?platform=angular&component=IgxColorScaleComponent) property is set.|
|[`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=trianglesSource)|any|The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.|
|[`triangleVertexMemberPath1`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=triangleVertexMemberPath1)|string|The name of the property of the [`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=trianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath2`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=triangleVertexMemberPath2)|string|The name of the property of the [`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=trianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath3`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=triangleVertexMemberPath3)|string|The name of the property of the [`trianglesSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=trianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Color Scale
Use the ColorScale property of the [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgxCustomPaletteColorScaleComponent`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the [`IgxCustomPaletteColorScaleComponent`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent) affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`IgxCustomPaletteColorScaleComponent.palette`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent&member=palette)| `ObservableCollection<Color>` |Gets or sets the collection of colors to select from or to interpolate between.|
|[`interpolationMode`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent&member=interpolationMode)|[`ColorScaleInterpolationMode`](mcp:get_api_reference?platform=angular&component=ColorScaleInterpolationMode)|Gets or sets the method getting a color from the Palette.|
|[`maximumValue`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent&member=maximumValue)|double|The highest value to assign a color. Any given value greater than this value will be Transparent.|
|[`minimumValue`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent&member=minimumValue)|double|The lowest value to assign a color. Any given value less than this value will be Transparent.|

## Code Snippet
The following code shows how to bind the [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) to triangulation data representing surface temperatures in the world.

```html
<igx-geographic-map
    #geoMap
    height="100%"
    width="100%"
    zoomable="true">
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent, IgxGeographicScatterAreaSeriesComponent, IgxCustomPaletteColorScaleComponent } from 'igniteui-angular-maps';

var areaSeries = new IgxGeographicScatterAreaSeriesComponent();
areaSeries.dataSource = this.worldTemperatures;
areaSeries.longitudeMemberPath = "lon";
areaSeries.latitudeMemberPath = "lat";
areaSeries.colorMemberPath = "value";
var customPaletteColorScale1 = new IgxCustomPaletteColorScaleComponent();
customPaletteColorScale1.palette = ["rgba(32, 146, 252, 0.5)", "rgba(14, 194, 14, 0.5)", "rgba(252, 120, 32, 0.5)", "rgba(252, 32, 32, 0.5)"];
customPaletteColorScale1.minimumValue = 0;
customPaletteColorScale1.maximumValue = 30;
areaSeries.colorScale = customPaletteColorScale1;
this.geoMap.series.add(areaSeries);
```

## API References
[`IgxColorScaleComponent`](mcp:get_api_reference?platform=angular&component=IgxColorScaleComponent)
[`IgxCustomPaletteColorScaleComponent`](mcp:get_api_reference?platform=angular&component=IgxCustomPaletteColorScaleComponent)
[`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent)
[`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent)
