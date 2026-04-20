---
title: Angular Map | Data Visualization Tools | Scatter High Density Series | Data Binding | Infragistics
_description: Use Infragistics Angular map's scatter high density series to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time. Learn more about Ignite UI for Angular map's series!
_keywords: Angular map, scatter high density series, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series"]
_tocName: Geographic High Density Map
_premium: true
---

# Angular Geographic High Density Map

In Angular map component, you can use the [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

## Angular Geographic High Density Map Example

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
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
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
    @ViewChild("template", { static: true })
    public tooltip: TemplateRef<object>;

    public geoLocations;
    constructor() {
    }

    public ngAfterViewInit(): void {
         // fetching geographic locations from public JSON folder
         fetch("https://static.infragistics.com/xplatform/data/AusPlaces.json")
         .then((response) => response.json())
         .then((data) => this.onDataLoaded(data, ""));
      }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        this.geoLocations = sds;
        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = sds;
        geoSeries.longitudeMemberPath = "x";
        geoSeries.latitudeMemberPath = "y";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding HD series to the geographic amp
        this.map.series.add(geoSeries);

        // zooming to bound of all geographic locations
        const geoBounds = WorldUtility.getBounds(this.geoLocations);
        geoBounds.top = 0;
        geoBounds.height = -50;
        this.map.zoomToGeographic(geoBounds);
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
            <span>{{item.n}}</span>
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

The demo above shows the [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) series in the map component bound to hundreds or even thousands of data points representing Australia’s population density. The map plot area with more densely populated data points represented as coalescences of red pixels and loosely distributed data points by discrete blue pixels.

Because there are so many data points, the series displays the scatter data as tiny dots as opposed to full size markers, and displays areas with the most data using a higher color density representing a cluster of data points.

## Data Requirements

Similar to other types of scatter series in the map control, the [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#longitudeMemberPath) and [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#latitudeMemberPath) properties to map these data columns.

### Data Binding

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property                                                                                                                                                                                                        | Type   | Description                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                                                                                                   | any    | Gets or sets the items source                                                                         |
| [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#longitudeMemberPath) | string | Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)   | string | Uses the ItemsSource property to determine the location of the latitude values on the assigned items  |

## Heat Color Scale

The Heat Color Scale, an optional feature, determines the color pattern within the series. The following table summarizes the properties used for determining the color scale.

| Property                                                                                                                                                                                                  | Type   | Description                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- |
| [`heatMinimum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMinimum)           | Double | Defines the double value representing the minimum end of the color scale  |
| [`heatMaximum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMaximum)           | Double | Defines the double value representing the maximum end of the color scale  |
| [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMinimumColor) | Color  | Defines the point density color used at the bottom end of the color scale |
| [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMaximumColor) | Color  | Defines the point density color used at the top end of the color scale    |

## Code Example

The following code demonstrates how set the [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMinimumColor) and [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMaximumColor) properties of the [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)

<!-- Angular -->

```html
<div className="sampleRoot">
  <igx-geographic-map #map width="700px" height="500px" zoomable="true">
  </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #template>
  <div>
    <span> {{item.n}} </span>
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
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-geographic-scatter-density-series",
  styleUrls: ["./map-geographic-scatter-density-series.component.scss"],
  templateUrl: ".map-geographic-scatter-density-series.component.html",
})
export class MapTypeScatterDensitySeriesComponent implements AfterViewInit {
  @ViewChild("map")
  public map: IgxGeographicMapComponent;
  @ViewChild("template")
  public tooltip: TemplateRef<object>;

  public geoLocations;
  constructor() {}

  public ngAfterViewInit(): void {
    // fetching geographic locations from public JSON folder
    fetch("assets/Data/AusPlaces.json")
      .then((response) => response.json())
      .then((data) => this.onDataLoaded(data, ""));
  }

  public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    this.geoLocations = sds;
    // creating HD series with loaded data
    const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
    geoSeries.dataSource = sds;
    geoSeries.longitudeMemberPath = "x";
    geoSeries.latitudeMemberPath = "y";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.tooltipTemplate = this.tooltip;
    geoSeries.mouseOverEnabled = true;

    // adding HD series to the geographic amp
    this.map.series.add(geoSeries);

    // zooming to bound of all geographic locations
    const geoBounds = WorldUtils.getBounds(this.geoLocations);
    geoBounds.top = 0;
    geoBounds.height = -50;
    this.map.zoomToGeographic(geoBounds);
  }
}
```

## API References

- [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
- [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
- [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMaximumColor)
- [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMinimumColor)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#longitudeMemberPath)
