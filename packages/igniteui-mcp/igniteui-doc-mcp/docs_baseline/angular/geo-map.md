---
title: Angular Map | Data Visualization Tools | Map Overview | Infragistics
_description: Use Infragistics' Angular JavaScript map to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps. View the Ignite UI for Angular map demos!
_keywords: Angular map, geographic map, imagery tiles, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series"]
_tocName: Geographic Map Features
---

# Angular Map Overview

The Ignite UI for Angular map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

## Angular Map Example

The following sample demonstrates how display data in [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) using [`IgxGeographicProportionalSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) also known as Bubble Series.

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


<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's Series property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) can be added for plotting geographic locations such as cities and the [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

NOTE: As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.

For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

<!-- Angular, React, WebComponents -->

## Dependencies

The Angular geographic map component, you need to first install these packages:

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
npm install --save igniteui-angular-maps
```

<!-- end: Angular, React, WebComponents -->

## Component Modules

The [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) requires the following modules, however the DataChartInteractivityModule is only required for mouse interactions, such as panning and zooming the map content.

```ts
// app.module.ts
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxGeographicMapModule,
        IgxDataChartInteractivityModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-overview",
  styleUrls: ["./map-overview.component.scss"],
  templateUrl: "./map-overview.component.html"
})

export class MapOverviewComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
```

<div class="divider--half"></div>

## Usage

Now that the map module is imported, next step is to create geographic map. The following code demonstrates how to do this and enable zooming in the map.

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related Angular map features in these topics:

- [Geographic Map Navigation](geo-map-navigation.md)

<!-- - [Geographic Map Imagery](geo-map-display-imagery-types.md) -->

- [Using Scatter Symbol Series](geo-map-type-scatter-symbol-series.md)
- [Using Scatter Proportional Series](geo-map-type-scatter-bubble-series.md)
- [Using Scatter Contour Series](geo-map-type-scatter-contour-series.md)
- [Using Scatter Density Series](geo-map-type-scatter-density-series.md)
- [Using Scatter Area Series](geo-map-type-scatter-area-series.md)
- [Using Shape Polygon Series](geo-map-type-shape-polygon-series.md)
- [Using Shape Polyline Series](geo-map-type-shape-polyline-series.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
- [`IgxGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)
- [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
- [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
- [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
- [`IgxGeographicProportionalSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html)
- [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)
- [`IgxGeographicScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)
