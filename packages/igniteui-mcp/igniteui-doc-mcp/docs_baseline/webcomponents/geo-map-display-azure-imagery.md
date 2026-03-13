---
title: Web Components Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' Web Components to display imagery from Microsoft Azure Maps. View Ignite UI for Web Components map tutorials!
_keywords: Web Components map, azure maps, Ignite UI for Web Components, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap", "AzureMapsImagery", "GeographicTileSeries"]
_tocName: Displaying Azure Imagery
_premium: true
---

# Web Components Imagery from Azure Maps <label class="badge badge--preview">PREVIEW</label>

The Web Components [`IgcAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html) is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The Ignite UI for Web Components map component can display geographic imagery from Azure Maps in the map’s background content using the [`IgcAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html) class.

## Web Components Displaying Imagery from Azure Maps - Overview

<img src="../images/general/AzureMapsImagery.png" alt="AzureMapsImagery" />

<div class="divider--half"></div>

```typescript
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';

export enum MapRegion {
    Caribbean = "Caribbean",
    UnitedStates = "United States",
    UnitedKingdom = "United Kingdom",
    European = "European",
    SouthAfrica = "South Africa",
    Poland = "Poland",
    Australia = "Australia",
    Japan = "Japan",
    Uruguay = "Uruguay",
    Egypt = "Egypt",
    Hawaii = "Hawaii",
}

export class MapUtils {

    public static navigateTo(geoMap: IgcGeographicMapComponent, name: MapRegion): void {

        const geoRect = this.getRegions()[name];
        // console.log("MapUtils " + name) ;
        geoMap.zoomToGeographic(geoRect);
    }

    public static toPixel(num: number): string {
        const s = Math.abs(num).toFixed(0);
        return s + " px";
    }

    public static toLng(num: number): string {
        num = this.clamp(num, -180, 180);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s
        }

        if (num > 0) {
            return s + "°E";
        } else  {
            return s + "°W";
        }
    }

    public static toLat(num: number): string {
        num = this.clamp(num, -90, 90);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s
        }

        if (num > 0) {
            return s + "°N";
        } else  {
            return s + "°S";
        }
    }

    public static clamp(num: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, num));
    }

    public static pad(num: number, places?: number): string {
        places = places || 20;
        let s = num.toFixed(1).toString();
        while (s.length < places) {s = " " + s};
        return s;
    }

    public static getBingKey(): string {
        return "Avlo7qsH1zZZI0XNpTwZ4XwvUJmCbd-mczMeUXVAW9kYYOKdmBIVRe8aoO02Xctq";
    }

    public static getRegions(): any {
        // create regions only once
        if (this.Regions === undefined) {
            this.createRegions();
        }
        return this.Regions;
    }

    private static Regions: any;

    private static addRegion(name: string, geoRect: any): void {
        geoRect.name = name;
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);

        this.Regions[name] = geoRect;
    }

    private static createRegions(): void {
        this.Regions = {};
        this.addRegion(MapRegion.Australia, { left: 81.5, top: -52.0, width: 98.0, height: 56.0 });
        this.addRegion(MapRegion.Caribbean, { left: -92.9, top: 5.4, width: 35.1, height: 25.8 });
        this.addRegion(MapRegion.Egypt, { left: 19.3, top: 19.9, width: 19.3, height: 13.4 });
        this.addRegion(MapRegion.European, { left: -36.0, top: 31.0, width: 98.0, height: 38.0 });
        this.addRegion(MapRegion.Japan, { left: 122.7, top: 29.4, width: 27.5, height: 17.0 });
        this.addRegion(MapRegion.Hawaii, { left: -161.2, top: 18.5, width: 6.6, height: 4.8 });
        this.addRegion(MapRegion.Poland, { left: 13.0, top: 48.0, width: 11.0, height: 9.0 });
        this.addRegion(MapRegion.SouthAfrica, { left: 9.0, top: -37.1, width: 26.0, height: 17.8 });
        this.addRegion(MapRegion.UnitedStates, { left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
        this.addRegion(MapRegion.UnitedKingdom, { left: -15.0, top: 49.5, width: 22.5, height: 8.0 });
        this.addRegion(MapRegion.Uruguay, { left: -62.1, top: -35.7, width: 10.6, height: 7.0 });
    }

}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Web Components Displaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles from Azure Maps in Web Components [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html) using [`IgcAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html) class.

```ts
const tileSource = new IgcAzureMapsImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; // or
tileSource.imageryStyle = AzureMapsImageryStyle.DarkGrey; // Traffic, Weather etc.

map.backgroundContent = tileSource;
```

## Web Components Overlaying Imagery from Azure Maps - Overview

When working with the [`IgcGeographicTileSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographictileseriescomponent.html), you can combine **overlays** (traffic, weather, labels) on top of a **base map style** such as eg. **Satellite**, **Road**, or **DarkGrey**. Using **TerraOverlay** with eg. **Satellite** to visualize terrain.

- **Base Styles**: Satellite, Road, Terra, and DarkGrey provide the core background tiles.
- **Overlay Styles**: Traffic and Weather imagery (e.g., `TrafficRelativeOverlay`, `WeatherRadarOverlay`) are designed to be layered on top of a base style by assigning them to a tile series.
- **Hybrid Styles**: Variants like `HybridRoadOverlay` and `HybridDarkGreyOverlay` already combine a base style with overlays (labels, roads, etc.), so you don’t need to manage multiple layers manually.

This design allows you to build richer maps, for example:

- Displaying **Satellite imagery** with a **TrafficOverlay** to highlight congestion on real-world images.
- Using **Terra** with **WeatherRadarOverlay** to visualize terrain with precipitation.
- Applying **DarkGrey** with **LabelsRoadOverlay** for a dashboard-friendly, contrast-heavy view.

<img src="../images/general/Azure_Traffic_Tile_Series_With_Background.png" alt="Azure Traffic Tile Series With Background" />

<div class="divider--half"></div>

## Web Components Overlaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles on top of a background imagery joining eg. traffic with a dark grey map for the Web Components [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html) using [`IgcAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html) and [`IgcGeographicTileSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographictileseriescomponent.html) classes.

```html
<!-- index.html -->
<html>
  <head>
    <script type="module" src="index.ts"></script>
  </head>
  <body style="margin:0;">
    <igc-geographic-map id="map" width="100%" height="100%" zoomable="true">
      <igc-geographic-tile-series id="tileSeries"></igc-geographic-tile-series>
    </igc-geographic-map>
  </body>
</html>
```

```ts
// index.ts
import {
  IgcGeographicMapComponent,
  IgcGeographicTileSeriesComponent,
  IgcAzureMapsImagery,
  AzureMapsImageryStyle,
  IgcGeographicMapModule
} from 'igniteui-webcomponents-maps';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcGeographicMapModule);

const azureKey = "<YOUR_KEY_HERE>";

window.addEventListener("load", () => {
  const map = document.getElementById("map") as IgcGeographicMapComponent;
  const tileSeries = document.getElementById("tileSeries") as IgcGeographicTileSeriesComponent;

  // Update TileSeries
  const overlay = new IgcAzureMapsImagery();
  overlay.apiKey = azureKey;
  overlay.imageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay;
  tileSeries.tileImagery = overlay;

  // Update Map Background
  const background = new IgcAzureMapsImagery();
  background.apiKey = azureKey;
  background.imageryStyle = AzureMapsImageryStyle.DarkGrey;
  map.backgroundContent = background;
});
```

## Properties

The following table summarizes properties of the [`IgcAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html) class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`apiKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html#apiKey)|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|[`imageryStyle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html#imageryStyle)|[`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_maps.azuremapsimagerystyle.html)|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following [`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_maps.azuremapsimagerystyle.html) enumeration values:<ul><li>Satellite - Specifies the Satellite map style without road or labels overlay</li><li>Road - Specifies the Aerial map style with road and labels overlay</li><li>DarkGrey - Specifies a dark grey basemap style for contrast and highlighting overlays</li><li>TerraOverlay - Specifies a terrain map style with shaded relief to highlight elevation and landscape features</li><li>LabelsRoadOverlay - One of several overlays of city labels without an aerial overlay</li><li>HybridRoadOverlay - Satellite background combined with road and label overlays</li><li>HybridDarkGreyOverlay - Satellite background combined with dark grey label overlays</li><li>LabelsDarkGreyOverlay - One of several overlays of city labels over a dark grey basemap</li><li>TrafficDelayOverlay - Displays traffic delays and congestion areas in real time</li><li>TrafficAbsoluteOverlay - Displays current traffic speeds as absolute values</li><li>TrafficReducedOverlay - Displays reduced traffic flow with light-based visualization</li><li>TrafficRelativeOverlay - Displays traffic speeds relative to normal conditions</li><li>TrafficRelativeDarkOverlay - Displays traffic speeds relative to normal conditions over a dark basemap for enhanced contrast</li><li>WeatherRadarOverlay - Displays near real-time radar imagery of precipitation</li><li>WeatherInfraredOverlay - Displays infrared satellite imagery of cloud cover</li></ul> |

## API References

- [`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_maps.azuremapsimagerystyle.html)
- [`IgcAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcazuremapsimagery.html)
- [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html)
