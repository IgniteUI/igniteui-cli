---
title: Angular Map | Data Visualization Tools | Binding Geographic Data Models | Infragistics
_description: Use Infragistics' Angular JavaScript map to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. View Ignite UI for Angular map demos!
_keywords: Angular map, binding data models, Ignite UI for Angular, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicScatterAreaSeries", "GeographicHighDensityScatterSeries", "GeographicProportionalSymbolSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeries", "GeographicPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
_tocName: Binding Data Model
_premium: true
---

# Angular Binding Geographic Data Models

The Ignite UI for Angular map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The `ItemsSource` property of geographic series is used for the purpose of binding to data models. This property can be bound an array of custom objects.

## Angular Binding Geographic Data Models Example

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
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldUtility } from "./WorldUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;
    @ViewChild("pointSeriesTooltipTemplate", { static: true })
    public pointSeriesTooltipTemplate: TemplateRef<object>;
    @ViewChild("polylineSeriesTooltipTemplate", { static: true })
    public polylineSeriesTooltipTemplate: TemplateRef<object>;
    public flights: any[];
    constructor() {
    }

    public ngAfterViewInit(): void {
        const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
        const citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
        const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
        const cityQTR = { lat: 25.285, lon:  51.531,  country: "Qatar", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  country: "Panama", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
        const cityALT = { lat: 33.795,  lon: -84.349, country: "US", name: "Atlanta" };
        const cityJOH = { lat: -26.178, lon: 28.004,  country: "South Africa", name: "Johannesburg" };
        const cityNYC = { lat: 40.750, lon: -74.0999, country: "US", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow" };
        const cityROM = { lat:  41.880, lon: 12.520,  country: "Italy", name: "Rome" };
        const cityLAX = { lat: 34.000, lon: -118.25,  country: "US", name: "Los Angeles" };

        this.flights = [
            { origin: cityDAL, dest: citySNG, color: "Green" },
            { origin: cityMOS, dest: cityNZL, color: "Red" },
            { origin: cityCHL, dest: cityJAP, color: "Blue" },
            { origin: cityPAN, dest: cityROM, color: "Orange" },
            { origin: cityALT, dest: cityJOH, color: "Black" },
            { origin: cityNYC, dest: cityQTR, color: "Purple" },
            { origin: cityLAX, dest: citySYD, color: "Gray" }
        ];

        for (const flight of this.flights) {
            this.createPolylineSeries(flight);
            this.createSymbolSeries(flight);
        }
    }

    public createSymbolSeries(flight: any) {
        const geoLocations = [flight.origin, flight.dest ];
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = flight.color;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointSeriesTooltipTemplate;

        this.map.series.add(symbolSeries);
    }

    public createPolylineSeries(flight: any) {
        const geoPath = WorldUtility.calcPaths(flight.origin, flight.dest);
        const geoDistance = WorldUtility.calcDistance(flight.origin, flight.dest);
        const geoRoutes = [
            {
              dest: flight.dest,
              distance: geoDistance,
              origin: flight.origin,
              points: geoPath,
              time: geoDistance / 850
        }];

        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = geoRoutes;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStrokeThickness = 9;
        lineSeries.shapeOpacity = 0.5;
        lineSeries.shapeStroke = flight.color;
        lineSeries.tooltipTemplate = this.polylineSeriesTooltipTemplate;
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

    <ng-template let-series="series" let-item="item" #pointSeriesTooltipTemplate>
            <div>
                <span [style.color]="series.brush">{{item.country}}</span>
            </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #polylineSeriesTooltipTemplate>
        <div>
            <span [style.color]="series.brush">Departure: {{item.origin.country}}</span><br/>
            <span [style.color]="series.brush">Arrival: {{item.dest.country}}</span>
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

The following table summarized data structures required for each type of geographic series:

| Geographic Series                                                                                                                                                                                                      | Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)                         | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudeMemberPath)                                                                                                                                                                                                                                    | Specifies names of 2 numeric longitude and latitude coordinates                                                                                                                                    |
| [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)                                                                                                                                                                                                            | Specifies names of 2 numeric longitude and latitude coordinates                                                                                                                                    |
| [`IgxGeographicProportionalSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#latitudeMemberPath), [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusMemberPath) | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for size/radius of symbols                                                                                    |
| [`IgxGeographicScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)               | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#latitudeMemberPath), [`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorMemberPath)                | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values                                                                                   |
| [`IgxGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)               | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#latitudeMemberPath), [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#valueMemberPath)                | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values                                                                                   |
| [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)                           | [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriesbasecomponent.html#shapeMemberPath)                                                                                                                                                                                                                                                                                                                                                                                                                                            | Specifies the name of data column of `ItemsSource` items that contains the geographic points of shapes. This property must be mapped to an array of arrays of objects with x and y properties.     |
| [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)                     | [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriesbasecomponent.html#shapeMemberPath)                                                                                                                                                                                                                                                                                                                                                                                                                                            | Specifies the name of data column of `ItemsSource` items that contains the geographic coordinates of lines. This property must be mapped to an array of arrays of objects with x and y properties. |

## Code Snippet

The following code shows how to bind the [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) to a custom data model that contains geographic locations of some cities of the world stored using longitude and latitude coordinates. Also, we use the [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) to plot shortest geographic path between these locations using the [WorldUtility](geo-map-resources-world-util.md)

```html
<div className="sampleRoot">
  <igx-geographic-map #map width="700px" height="500px" zoomable="true">
  </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #pointSeriesTemplate>
  <div>
    <span [style.color]="series.brush"> {{item.country}} </span>
  </div>
</ng-template>

<ng-template let-series="series" let-item="item" #polylineSeriesTooltipTemplate>
  <div>
    <span [style.color]="series.brush">
      Departure: {{item.origin.country}}
    </span>
    <br />
    <span [style.color]="series.brush"> Arrival: {{item.dest.country}} </span>
  </div>
</ng-template>
```

```ts
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-binding-geographic-data-models",
  styleUrls: ["./map-binding-geographic-data-models.component.scss"],
  templateUrl: "./map-binding-geographic-data-models.component.html",
})
export class MapBindingDataModelComponent implements AfterViewInit {
  @ViewChild("map")
  public map: IgxGeographicMapComponent;
  @ViewChild("pointSeriesTemplate")
  public pointSeriesTemplate: TemplateRef<object>;
  @ViewChild("polylineSeriesTooltipTemplate")
  public polylineSeriesTooltipTemplate: TemplateRef<object>;
  public flights: any[];
  constructor() {}

  public ngAfterViewInit(): void {
    const cityDAL = {
      lat: 32.763,
      lon: -96.663,
      country: "US",
      name: "Dallas",
    };
    const citySYD = {
      lat: -33.889,
      lon: 151.028,
      country: "Australia",
      name: "Sydney",
    };
    const cityNZL = {
      lat: -36.848,
      lon: 174.763,
      country: "New Zealand",
      name: "Auckland",
    };
    const cityQTR = {
      lat: 25.285,
      lon: 51.531,
      country: "Qatar",
      name: "Doha",
    };
    const cityPAN = {
      lat: 8.949,
      lon: -79.4,
      country: "Panama",
      name: "Panama",
    };
    const cityCHL = {
      lat: -33.475,
      lon: -70.647,
      country: "Chile",
      name: "Santiago",
    };
    const cityJAP = {
      lat: 35.683,
      lon: 139.809,
      country: "Japan",
      name: "Tokyo",
    };
    const cityALT = {
      lat: 33.795,
      lon: -84.349,
      country: "US",
      name: "Atlanta",
    };
    const cityJOH = {
      lat: -26.178,
      lon: 28.004,
      country: "South Africa",
      name: "Johannesburg",
    };
    const cityNYC = {
      lat: 40.75,
      lon: -74.0999,
      country: "US",
      name: "New York",
    };
    const citySNG = {
      lat: 1.229,
      lon: 104.177,
      country: "Singapore",
      name: "Singapore",
    };
    const cityMOS = {
      lat: 55.75,
      lon: 37.7,
      country: "Russia",
      name: "Moscow",
    };
    const cityROM = { lat: 41.88, lon: 12.52, country: "Italy", name: "Roma" };
    const cityLAX = {
      lat: 34.0,
      lon: -118.25,
      country: "US",
      name: "Los Angeles",
    };

    this.flights = [
      { origin: cityDAL, dest: citySNG, color: "Green" },
      { origin: cityMOS, dest: cityNZL, color: "Red" },
      { origin: cityCHL, dest: cityJAP, color: "Blue" },
      { origin: cityPAN, dest: cityROM, color: "Orange" },
      { origin: cityALT, dest: cityJOH, color: "Black" },
      { origin: cityNYC, dest: cityQTR, color: "Purple" },
      { origin: cityLAX, dest: citySYD, color: "Gray" },
    ];

    for (const flight of this.flights) {
      this.createPolylineSeries(flight);
      this.createSymbolSeries(flight);
    }
  }

  public createSymbolSeries(flight: any) {
    const geoLocations = [flight.origin, flight.dest];
    const symbolSeries = new IgxGeographicSymbolSeriesComponent();
    symbolSeries.dataSource = geoLocations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush = "White";
    symbolSeries.markerOutline = flight.color;
    symbolSeries.thickness = 1;
    symbolSeries.tooltipTemplate = this.pointSeriesTemplate;

    this.map.series.add(symbolSeries);
  }

  public createPolylineSeries(flight: any) {
    const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
    const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);
    const geoRoutes = [
      {
        dest: flight.dest,
        distance: geoDistance,
        origin: flight.origin,
        points: geoPath,
        time: geoDistance / 850,
      },
    ];

    const lineSeries = new IgxGeographicPolylineSeriesComponent();
    lineSeries.dataSource = geoRoutes;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeStrokeThickness = 9;
    lineSeries.shapeOpacity = 0.5;
    lineSeries.shapeStroke = flight.color;
    lineSeries.tooltipTemplate = this.polylineSeriesTooltipTemplate;
    this.map.series.add(lineSeries);
  }
}
```

## API References

- [`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorMemberPath)
- [`IgxGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)
- [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
- [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
- [`IgxGeographicProportionalSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html)
- [`IgxGeographicScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)
- [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudeMemberPath)
- [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusMemberPath)
- [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#valueMemberPath)
