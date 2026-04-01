---
title: Angular Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' Angular to display imagery from Microsoft Azure Maps. View Ignite UI for Angular map tutorials!
_keywords: Angular map, azure maps, Ignite UI for Angular, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap", "AzureMapsImagery", "GeographicTileSeries"]
_tocName: Displaying Azure Imagery
_premium: true
---

# Angular Imagery from Azure Maps <label class="badge badge--preview">PREVIEW</label>

The Angular [`IgxAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html) is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The Ignite UI for Angular map component can display geographic imagery from Azure Maps in the map’s background content using the [`IgxAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html) class.

## Angular Displaying Imagery from Azure Maps - Overview

<img src="../images/general/AzureMapsImagery.png" alt="AzureMapsImagery" />

<div class="divider--half"></div>

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

// Ignite UI Maps & Charts
import { IgxAzureMapsImageryModule, IgxGeographicMapModule } from "igniteui-angular-maps";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";

// Ignite UI Angular components
import { IgxButtonModule, IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxGeographicMapModule,
    IgxAzureMapsImageryModule,
    IgxDataChartInteractivityModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxSelectModule       // <-- Add this for the dropdown combo
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // <-- Needed to allow Web Components like igx-combo
})
export class AppModule {}
```
```typescript
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AzureMapsImageryStyle,
  IgxAzureMapsImagery,
  IgxGeographicMapComponent,
  IgxGeographicTileSeriesComponent
} from 'igniteui-angular-maps';
import {
  IgxDialogComponent,
  IgxSelectComponent
} from 'igniteui-angular';
import { MapRegion, MapUtility } from './MapUtility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('map', { static: false }) map!: IgxGeographicMapComponent;
  @ViewChild('tileSeries', { static: false }) tileSeries!: IgxGeographicTileSeriesComponent;
  @ViewChild('dialog', { static: false }) dialog!: IgxDialogComponent;
  @ViewChild('styleSelect', { static: false }) styleSelect!: IgxSelectComponent;

  // Bound to the input in the dialog
  public apiKeyInputValue: string = '';

  public azureTile!: IgxAzureMapsImagery;
  public azureBackground!: IgxAzureMapsImagery;
  public apiKey?: string;
  public styleChangeTimeout?: number;

  public styleOptions: string[] = [];
  public selectedStyle!: string;
  public previewImageSrc: string = '';
  public isMapHidden = true;

  public styleConfig: Record<string, { placeholder: string; background?: AzureMapsImageryStyle; zoom: () => void }> = {
    Satellite: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_satellite.png", zoom: () => this.zoomUS() },
    Road: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_road.png", zoom: () => this.zoomUS() },
    DarkGrey: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_darkgrey.png", zoom: () => this.zoomUS() },
    TerraOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_terra_overlay.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    HybridRoadOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/AzureHybridRoad.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    HybridDarkGreyOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_hybriddarkgrey.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    LabelsRoadOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_labelsroad.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    LabelsDarkGreyOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_labelsdarkgrey.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    TrafficDelayOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_trafficdelay.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    TrafficAbsoluteOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_traffic_absolute.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    TrafficReducedOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_traffic_light.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    TrafficRelativeOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_traffic_relative.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    WeatherInfraredOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_weather_Infrared_road.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomUS() },
    WeatherRadarOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_weather_radar.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomUS() }
  };

  ngOnInit(): void {
    // Preload preview images
    Object.values(this.styleConfig).forEach(cfg => new Image().src = cfg.placeholder);

    // Populate dropdown options + default style
    this.styleOptions = Object.keys(this.styleConfig);
    this.selectedStyle = this.styleOptions[0];
    this.previewImageSrc = this.styleConfig[this.selectedStyle].placeholder;
  }

  ngAfterViewInit(): void {
    // We'll initialize tile imagery after the user sets the API key
    // Open dialog automatically after view initializes
    setTimeout(() => {
      if (this.dialog) {
        this.dialog.open();
      }
    });
  }

  public openDialog() {
    this.dialog.open();
  }

  private zoomUS() {
    if (this.map) MapUtility.navigateTo(this.map, MapRegion.UnitedStates);
  }

  private zoomNY() {
    if (this.map) {
      this.map.zoomToGeographic({
        left: -74.2591,
        top: 40.9176,
        width: -73.7004 - (-74.2591),
        height: 40.4774 - 40.9176
      });
    }
  }

  private setApiKey(key: string) {
    this.apiKey = key;

    // create azureTile & background if not yet
    if (!this.azureTile) {
      this.azureTile = new IgxAzureMapsImagery();
      this.tileSeries.tileImagery = this.azureTile;
    }
    if (!this.azureBackground) {
      this.azureBackground = new IgxAzureMapsImagery();
      this.azureBackground.imageryStyle = AzureMapsImageryStyle.DarkGrey;
      this.map.backgroundContent = this.azureBackground;
    }

    this.azureTile.apiKey = key;
    this.azureBackground.apiKey = key;
  }

  showMap() {
    this.isMapHidden = false;
  } 

  public onSubmit(form: NgForm) {
    const key = this.apiKeyInputValue;
    if (!key) return;

    this.setApiKey(key);
    if (this.selectedStyle) this.updateAzureMap(this.selectedStyle);
    this.showMap();
    // Close the dialog first, then reset form after a tick
    setTimeout(() => {
      this.dialog.close();
      form.resetForm();
    });
  }

  public onReset(form: NgForm) {
    this.apiKey = undefined;
    this.apiKeyInputValue = '';
    if (this.azureTile) this.azureTile.apiKey = '';
    if (this.azureBackground) this.azureBackground.apiKey = '';
    this.previewImageSrc = this.styleConfig[this.selectedStyle].placeholder;

    setTimeout(() => {
      this.dialog.close();
      form.resetForm();
    });
  }

  public onStyleChange(value: string) {
    const cfg = this.styleConfig[value];
    if (!cfg) return;

    this.previewImageSrc = cfg.placeholder;

    if (this.apiKey) {
      if (this.styleChangeTimeout) clearTimeout(this.styleChangeTimeout);
      this.styleChangeTimeout = window.setTimeout(() => this.updateAzureMap(value), 30);
    }
  }

  private updateAzureMap(styleName: string) {
    if (!this.azureTile || !this.azureBackground) return;

    const cfg = this.styleConfig[styleName];
    if (!cfg) return;

    this.azureTile.imageryStyle =
      AzureMapsImageryStyle[styleName as keyof typeof AzureMapsImageryStyle];

    this.azureBackground.imageryStyle = cfg.background ?? AzureMapsImageryStyle.DarkGrey;
    cfg.zoom();
  }
}
```
```html
<div class="container sample center" 
     style="flex-direction:column; align-items:center; gap:2px;">

  <!-- Controls row stays above the map -->
  <div class="controls-row">
    <button igxButton="contained" (click)="openDialog()">Enter your Azure Maps API Key</button>

    <igx-select #styleSelect
                placeholder="Choose Azure Imagery"
                [(ngModel)]="selectedStyle"
                (selectionChanging)="onStyleChange($event.newSelection?.value)">
      <igx-select-item *ngFor="let s of styleOptions" [value]="s">
        <span>{{ s }}</span>
      </igx-select-item>
    </igx-select>
  </div>

  <!-- Azure Key Dialog with Form -->
  <igx-dialog #dialog class="custom-dialog">
    <form #keyForm="ngForm" (ngSubmit)="onSubmit(keyForm)">
      <div class="dialog-header">
        <h3>Azure Key</h3>
      </div>

      <div class="dialog-content" style="display:flex; flex-direction:column; gap:12px;">
        <label for="azureKeyInput">An image will remain visible when no key is entered.</label>
        <input
          id="azureKeyInput"
          name="azureKeyInput"
          [(ngModel)]="apiKeyInputValue"
          type="text"
          placeholder="Enter your key"
          required />
      </div>

      <div class="dialog-actions" style="display:flex; justify-content:flex-end; gap:8px; margin-top:1rem;">
        <button type="button" (click)="onReset(keyForm)">Clear</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  </igx-dialog>

  <!-- Map container with fixed height -->
  <div class="map-container">
    <img *ngIf="!apiKey" class="placeholder" [src]="previewImageSrc" alt="Map Imagery" />
    <igx-geographic-map #map [hidden]="isMapHidden">
      <igx-geographic-tile-series #tileSeries></igx-geographic-tile-series>
    </igx-geographic-map>
  </div>
</div>
```
```scss
:host {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
}

/* === Controls === */
.controls-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10; /* stay above map */
  padding: 8px 0;
}

/* === Map Container === */
.map-container {
  flex: 1 1 auto; /* expand to fill available space */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Map expands full width/height */
.map-container igx-geographic-map {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* === Placeholder Image === */
.map-container img.placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 950px;
  max-width: 900px;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: contain;
  z-index: 1;
  pointer-events: none; /* clicks go through */
}

/* === Utility Classes === */
.hidden {
  display: none !important;
}

.show {
  display: inline !important;
}

.dialog-container {
  display: flex;
  align-items: center;

  igx-icon {
    margin-right: 8px;
  }
}

::ng-deep igx-dialog.custom-dialog {
  width: 400px;
  height: auto;
}
```


## Angular Displaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles from Azure Maps in Angular [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) using [`IgxAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html) class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxAzureMapsImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxAzureMapsImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.TerraOverlay; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; //or Traffic & Weather etc.

this.map.backgroundContent = tileSource;
```

## Angular Overlaying Imagery from Azure Maps - Overview

When working with the [`IgxGeographicTileSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographictileseriescomponent.html), you can combine **overlays** (traffic, weather, labels) on top of a **base map style** such as eg. **Satellite**, **Road**, or **DarkGrey**. Using **TerraOverlay** with eg. **Satellite** to visualize terrain.

- **Base Styles**: Satellite, Road, Terra, and DarkGrey provide the core background tiles.
- **Overlay Styles**: Traffic and Weather imagery (e.g., `TrafficRelativeOverlay`, `WeatherRadarOverlay`) are designed to be layered on top of a base style by assigning them to a tile series.
- **Hybrid Styles**: Variants like `HybridRoadOverlay` and `HybridDarkGreyOverlay` already combine a base style with overlays (labels, roads, etc.), so you don’t need to manage multiple layers manually.

This design allows you to build richer maps, for example:

- Displaying **Satellite imagery** with a **TrafficOverlay** to highlight congestion on real-world images.
- Using **Terra** with **WeatherRadarOverlay** to visualize terrain with precipitation.
- Applying **DarkGrey** with **LabelsRoadOverlay** for a dashboard-friendly, contrast-heavy view.

<img src="../images/general/Azure_Traffic_Tile_Series_With_Background.png" alt="Azure Traffic Tile Series With Background" />

<div class="divider--half"></div>

## Angular Overlaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles on top of a background imagery joining eg. traffic with a dark grey map for the Angular [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) using [`IgxAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html) and [`IgxGeographicTileSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographictileseriescomponent.html) classes.

```html
<igx-geographic-map #map height="100%" width="100%" zoomable="true">
  <igx-geographic-tile-series #tileSeries></igx-geographic-tile-series>
</igx-geographic-map>
```

```ts
export class AppComponent implements AfterViewInit {
  @ViewChild('map', { static: true }) public map!: IgxGeographicMapComponent;
  @ViewChild('tileSeries', { static: true }) public tileSeries!: IgxGeographicTileSeriesComponent;

  public azureImagery!: IgxAzureMapsImagery;
  public azureKey: string = "<YOUR_KEY_HERE>";

  ngAfterViewInit(): void {
    // Update TileSeries
    const overlay = new IgxAzureMapsImagery();
    overlay.apiKey = this.azureKey;
    overlay.imageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay;
    this.tileSeries.tileImagery = overlay;

    // Update Map Background
    this.azureImagery = new IgxAzureMapsImagery();
    this.azureImagery.apiKey = this.azureKey;
    this.azureImagery.imageryStyle = AzureMapsImageryStyle.DarkGrey;
    this.map.backgroundContent = this.azureImagery;
  }
}
```

## Properties

The following table summarizes properties of the [`IgxAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html) class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`apiKey`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html#apiKey)|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|[`imageryStyle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html#imageryStyle)|[`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_maps.azuremapsimagerystyle.html)|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following [`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_maps.azuremapsimagerystyle.html) enumeration values:<ul><li>Satellite - Specifies the Satellite map style without road or labels overlay</li><li>Road - Specifies the Aerial map style with road and labels overlay</li><li>DarkGrey - Specifies a dark grey basemap style for contrast and highlighting overlays</li><li>TerraOverlay - Specifies a terrain map style with shaded relief to highlight elevation and landscape features</li><li>LabelsRoadOverlay - One of several overlays of city labels without an aerial overlay</li><li>HybridRoadOverlay - Satellite background combined with road and label overlays</li><li>HybridDarkGreyOverlay - Satellite background combined with dark grey label overlays</li><li>LabelsDarkGreyOverlay - One of several overlays of city labels over a dark grey basemap</li><li>TrafficDelayOverlay - Displays traffic delays and congestion areas in real time</li><li>TrafficAbsoluteOverlay - Displays current traffic speeds as absolute values</li><li>TrafficReducedOverlay - Displays reduced traffic flow with light-based visualization</li><li>TrafficRelativeOverlay - Displays traffic speeds relative to normal conditions</li><li>TrafficRelativeDarkOverlay - Displays traffic speeds relative to normal conditions over a dark basemap for enhanced contrast</li><li>WeatherRadarOverlay - Displays near real-time radar imagery of precipitation</li><li>WeatherInfraredOverlay - Displays infrared satellite imagery of cloud cover</li></ul> |

## API References

- [`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_maps.azuremapsimagerystyle.html)
- [`IgxAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxazuremapsimagery.html)
- [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
