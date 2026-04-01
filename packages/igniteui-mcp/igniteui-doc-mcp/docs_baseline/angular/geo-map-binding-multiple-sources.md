---
title: Angular Map | Data Visualization Tools | Binding Multiple Data Source | Infragistics
_description: Use Infragistics' Angular JavaScript map to add multiple geographic series objects to overlay custom data sources with geo-spacial data. View Ignite UI for Angular map tutorials!
_keywords: Angular map, geographic series, Ignite UI for Angular, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "SeriesViewer", "Series", "GeographicShapeSeriesBase"]
_tocName: Binding Multiple Sources
_premium: true
---

# Angular Binding Multiple Data Sources

In the Ignite UI for Angular map, you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) for plotting geographic locations of airports, the [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) for plotting flights between airports, and 2nd [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) for plotting gridlines of major geographic coordinates.

## Angular Binding Multiple Data Sources Example

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
import { WorldConnections } from "./WorldConnections";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;

    @ViewChild("polylineTooltipTemplate", { static: true })
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate", { static: true })
    public pointTooltipTemplate: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
            
      this.map.updateZoomWindow({ left: 0.195, top: 0.1, width: 0.5, height: 0.5 });

      const worldFlights = WorldConnections.getFlights();
      const worldAirports = WorldConnections.getAirports();
      const worldGridlines = WorldConnections.getGridlines();

      this.addPolylineSeriesWith(worldFlights);
      this.addGridlineSeriesWith(worldGridlines);
      this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data: any[]) {
        const gridSeries = new IgxGeographicPolylineSeriesComponent();
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        this.map.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data: any[]) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.polylineTooltipTemplate;
        this.map.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data: any[]) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
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

    <ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>Departure: {{item.origin.country}}</span><br/>
            <span>Destination: {{item.dest.country}}</span><br/>
            <span>Distance: {{item.distance}} miles</span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
        <div>
            <span>{{item?.country}}</span><br />
            <span>{{item?.name}}</span><br />
            <span>Population: {{item.pop}} M</span><br/>
            <span>Flights: {{item.flights}}</span>
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

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

- [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) – displays locations of major airports
- [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) – displays flights between airports
- [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

## Creating Data Sources

Create data sources for all geographic series that you want to display in the Ignite UI for Angular map. For example, you can the use [WorldConnections](geo-map-resources-world-connections.md) script.

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>
            Arrival: {{item.origin.country}}
            </span>
            <br/>
            <span>
            Destination: {{item.dest.country}}
            </span>
            <br/>
            <span>
            Distance: {{item.distance}} miles
            </span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
            <div>
                <span>
                {{item?.country}}
                </span>
                <br />
                <span>
                {{item?.name}}
                </span>
                <br />
                <span>
                Population: {{item.pop}} M
                </span>
                <br/>
                <span>
                Flights: {{item.flights}}
                </span>
            </div>
        </ng-template>
```

## Overlaying Flights

Create first [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) object with flight connections between major airports and add it to the Series collection of the Ignite UI for Angular map.

```html
<igx-geographic-polyline-series  #polylineSeries
        [tooltipTemplate]="polylineTooltipTemplate"
                name="polylineSeries"
                shapeMemberPath="points"
                shapeStroke="rgba(147, 15, 180, 0.5)"
                thickness={3.0} >
</igx-geographic-polyline-series>
```

## Overlaying Gridlines

Create second [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) object with geographic gridlines and add it to the Series collection of the Ignite UI for Angular map.

```html
  <igx-geographic-polyline-series  #polylineSeries
            [tooltipTemplate]="polylineTooltipTemplate"
                 datasource = worldFlights
                 name="polylineSeries"
                 shapeMemberPath="points"
                 shapeStroke="rgba(196, 14, 14,0.05)"
                 thickness={3.0} >
    </igx-geographic-polyline-series>
```

## Overlaying Airports

Create [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) object with airport points and add it to the Series collection of the geographic Ignite UI for Angular map.

```html
<igx-geographic-symbol-series  #symbolSeries
    name="symbolSeries"
    longitudeMemberPath="longitude"
    latitudeMemberPath="latitude"
    markerType="Circle"
    markerOutline="rgb(73, 73, 73)"
    markerBrush="White" >
</igx-geographic-symbol-series>
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldConnections } from "../../utilities/WorldConnections";

@Component({
  selector: "app-map-binding-multiple-data-sources",
  styleUrls: ["./map-binding-multiple-data-sources.component.scss"],
  templateUrl: "./map-binding-multiple--data-sources.component.html"
})

export class MapBindingMultipleSourcesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("polylineTooltipTemplate")
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate")
    public pointTooltipTemplate: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.map.windowRect = { left: 0.195, top: 0.1, width: 0.5, height: 0.5 };

      const worldFlights = WorldConnections.getFlights();
      const worldAirports = WorldConnections.getAirports();
      const worldGridlines = WorldConnections.getGridlines();

      this.addPolylineSeriesWith(worldFlights);
      this.addGridlineSeriesWith(worldGridlines);
      this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data: any[]) {
        const gridSeries = new IgxGeographicPolylineSeriesComponent();
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        this.map.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data: any[]) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.polylineTooltipTemplate;
        this.map.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data: any[]) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
        this.map.series.add(symbolSeries);
    }
}
```

## API References

- [`IgxGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
- [`IgxGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)
