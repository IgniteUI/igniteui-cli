---
title: React Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' React to display imagery from Microsoft Azure Maps. View Ignite UI for React map tutorials!
_keywords: React map, azure maps, Ignite UI for React, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap", "AzureMapsImagery", "GeographicTileSeries"]
_tocName: Displaying Azure Imagery
_premium: true
---

# React Imagery from Azure Maps <label class="badge badge--preview">PREVIEW</label>

The React [`IgrAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html) is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The Ignite UI for React map component can display geographic imagery from Azure Maps in the map’s background content using the [`IgrAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html) class.

## React Displaying Imagery from Azure Maps - Overview

<img src="../images/general/AzureMapsImagery.png" alt="AzureMapsImagery" />

<div class="divider--half"></div>

```typescript
import { IgrGeographicMap } from 'igniteui-react-maps';

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

    public static navigateTo(geoMap: IgrGeographicMap, name: MapRegion): void {

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
        while (s.length < places) {s = " " + s;}
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
        this.addRegion(MapRegion.European, { left: -36.0, top:31.0, width: 98.0, height: 38.0 });
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  IgrGeographicMapModule,
  IgrGeographicMap,
  IgrAzureMapsImagery,
  AzureMapsImageryStyle,
  IgrGeographicTileSeries
} from "igniteui-react-maps";
import { IgrButton, IgrDialog, IgrInput, IgrSelect, IgrSelectItem } from "igniteui-react";
import { IgrDataChartInteractivityModule } from "igniteui-react-charts";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { MapUtils, MapRegion } from './MapUtils';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryAzure extends React.Component<any, any> {
   
  constructor(props: any) {
    super(props);
    this.state = { apiKey: "", styleName: "Satellite", mapVisible: false };

    this.onDialogRef = this.onDialogRef.bind(this);
    this.onDialogShow = this.onDialogShow.bind(this);
    this.onDialogHide = this.onDialogHide.bind(this);
    this.onApiKeyChange = this.onApiKeyChange.bind(this);
    this.onApplyKey = this.onApplyKey.bind(this);
    this.onResetKey = this.onResetKey.bind(this);
    this.onStyleChange = this.onStyleChange.bind(this);
  }

  componentDidMount() {
    this.onDialogShow(); // open dialog on startup
  }

  render(): JSX.Element {
    const currentStyle = this.mapStyles[this.state.styleName];

    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100%" }}>
        {/* Controls */}
        <div style={{ flex: "0 0 auto", display: "flex", gap: "12px", alignItems: "center", justifyContent: "center", padding: "12px", zIndex: 2 }}>
          <IgrButton variant="contained" onClick={this.onDialogShow}>Enter Azure Maps API Key</IgrButton>
          <IgrSelect value={this.state.styleName} onChange={this.onStyleChange} style={{ minWidth: "220px" }}>
            {Object.keys(this.mapStyles).map(key => (
              <IgrSelectItem key={key} value={key}>{key}</IgrSelectItem>
            ))}
          </IgrSelect>
        </div>

        {/* Image or map */}
        <div style={{
          width: "100%",
          maxWidth: "100%",
          aspectRatio: "4 / 3",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden"
        }}>
          {!this.state.mapVisible ? (
            <img src={currentStyle.placeholder} alt={this.state.styleName} style={{ maxWidth: "960px", height: "100%", objectFit: "contain", display: "block", margin: "0 auto" }} />
          ) : (
            <IgrGeographicMap ref={r => this.geoMap = r!} width="100%" height="100%" zoomable={true} />
          )}
        </div>

        {/* Dialog */}
        <IgrDialog title="Azure Key" ref={this.onDialogRef} className="igr-dialog">
          <IgrInput
            label="An image will remain visible when no key is entered."
            value={this.state.apiKey}
            inputMode="text"
            onInput={this.onApiKeyChange}
          />
          <div slot="footer" style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <IgrButton variant="flat" onClick={this.onResetKey}>Clear</IgrButton>
            <IgrButton variant="flat" onClick={this.onApplyKey}>Submit</IgrButton>
          </div>
        </IgrDialog>
      </div>
    );
  }

  private geoMap?: IgrGeographicMap;
  private dialogRef?: IgrDialog;

  private trafficWeatherStyles = [
  AzureMapsImageryStyle.TrafficDelayOverlay,
  AzureMapsImageryStyle.TrafficAbsoluteOverlay,
  AzureMapsImageryStyle.TrafficReducedOverlay,
  AzureMapsImageryStyle.TrafficRelativeDarkOverlay,
  AzureMapsImageryStyle.WeatherInfraredOverlay,
  AzureMapsImageryStyle.WeatherRadarOverlay
  ];

  private onDialogRef(dialog: IgrDialog) { this.dialogRef = dialog; }
  private onDialogShow() { this.dialogRef?.show(); }
  private onDialogHide() { this.dialogRef?.hide(); }
  private onApiKeyChange(e: any) { this.setState({ apiKey: e.detail ?? e.target?.value ?? "" }); }
  private onResetKey() { this.setState({ apiKey: "", mapVisible: false }); this.onDialogHide(); }

  private onApplyKey() {
    if (!this.state.apiKey) { this.onDialogHide(); return; }
    this.setState({ mapVisible: true }, () => this.updateAzureMap(this.mapStyles[this.state.styleName].azureStyle));
    this.onDialogHide();
  }

  private onStyleChange(e: CustomEvent) {
    const selected = e.detail.value as string;
    this.setState({ styleName: selected }, () => {
      if (this.state.apiKey) this.updateAzureMap(this.mapStyles[selected].azureStyle);
    });
  }

  private updateAzureMap(style: AzureMapsImageryStyle) {
    if (!this.geoMap || !this.state.apiKey) return;

    this.geoMap.series.clear();
    const tileSource = new IgrAzureMapsImagery();
    tileSource.apiKey = this.state.apiKey;

    const series = new IgrGeographicTileSeries({ name: "AzureTileSeries", tileImagery: tileSource });
    series.tileImagery = tileSource;

    if (this.trafficWeatherStyles.includes(style)) {
      const bg = new IgrAzureMapsImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.DarkGrey;
      this.geoMap.backgroundContent = bg;

      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);

      if (style === AzureMapsImageryStyle.WeatherInfraredOverlay || style === AzureMapsImageryStyle.WeatherRadarOverlay) {
        MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
      } else {
        this.geoMap.zoomToGeographic({ left: -74.2591, top: 40.9176, width: -73.7004 - (-74.2591), height: 40.4774 - 40.9176 });
      }
    } else if (style === AzureMapsImageryStyle.TerraOverlay) {
      const bg = new IgrAzureMapsImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.Satellite;
      this.geoMap.backgroundContent = bg;

      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);
      MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
    } else {
      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);
      const bg = new IgrAzureMapsImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.Satellite;
      this.geoMap.backgroundContent = bg;
      MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
    }
  }

    private mapStyles: Record<string, { placeholder: string; azureStyle: AzureMapsImageryStyle }> = {
    Satellite: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_satellite.png", azureStyle: AzureMapsImageryStyle.Satellite },
    Road: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_road.png", azureStyle: AzureMapsImageryStyle.Road },
    DarkGrey: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_darkgrey.png", azureStyle: AzureMapsImageryStyle.DarkGrey },
    TerraOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_terra_overlay.png", azureStyle: AzureMapsImageryStyle.TerraOverlay },
    HybridRoadOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/AzureHybridRoad.png", azureStyle: AzureMapsImageryStyle.HybridRoadOverlay },
    HybridDarkGreyOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_hybriddarkgrey.png", azureStyle: AzureMapsImageryStyle.HybridDarkGreyOverlay },
    LabelsRoadOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_labelsroad.png", azureStyle: AzureMapsImageryStyle.LabelsRoadOverlay },
    LabelsDarkGreyOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_labelsdarkgrey.png", azureStyle: AzureMapsImageryStyle.LabelsDarkGreyOverlay },
    TrafficDelayOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_trafficdelay.png", azureStyle: AzureMapsImageryStyle.TrafficDelayOverlay },
    TrafficAbsoluteOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_traffic_absolute.png", azureStyle: AzureMapsImageryStyle.TrafficAbsoluteOverlay },
    TrafficReducedOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_traffic_light.png", azureStyle: AzureMapsImageryStyle.TrafficReducedOverlay },
    TrafficRelativeOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_traffic_relative.png", azureStyle: AzureMapsImageryStyle.TrafficRelativeDarkOverlay },
    WeatherInfraredOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_weather_Infrared_road.png", azureStyle: AzureMapsImageryStyle.WeatherInfraredOverlay },
    WeatherRadarOverlay: { placeholder: "https://dl.infragistics.com/x/img/maps/azure_weather_radar.png", azureStyle: AzureMapsImageryStyle.WeatherRadarOverlay }
  };
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryAzure/>);
```


## React Displaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles from Azure Maps in React [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) using [`IgrAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html) class.

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrAzureMapsImagery } from 'igniteui-react-maps';
import { AzureMapsImageryStyle } from 'igniteui-react-maps';
// ...
const tileSource = new IgrAzureMapsImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; // or
tileSource.imageryStyle = AzureMapsImageryStyle.DarkGrey; // Traffic, Weather etc.

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

## React Overlaying Imagery from Azure Maps - Overview

When working with the [`IgrGeographicTileSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographictileseries.html), you can combine **overlays** (traffic, weather, labels) on top of a **base map style** such as eg. **Satellite**, **Road**, or **DarkGrey**. Using **TerraOverlay** with eg. **Satellite** to visualize terrain.

- **Base Styles**: Satellite, Road, Terra, and DarkGrey provide the core background tiles.
- **Overlay Styles**: Traffic and Weather imagery (e.g., `TrafficRelativeOverlay`, `WeatherRadarOverlay`) are designed to be layered on top of a base style by assigning them to a tile series.
- **Hybrid Styles**: Variants like `HybridRoadOverlay` and `HybridDarkGreyOverlay` already combine a base style with overlays (labels, roads, etc.), so you don’t need to manage multiple layers manually.

This design allows you to build richer maps, for example:

- Displaying **Satellite imagery** with a **TrafficOverlay** to highlight congestion on real-world images.
- Using **Terra** with **WeatherRadarOverlay** to visualize terrain with precipitation.
- Applying **DarkGrey** with **LabelsRoadOverlay** for a dashboard-friendly, contrast-heavy view.

<img src="../images/general/Azure_Traffic_Tile_Series_With_Background.png" alt="Azure Traffic Tile Series With Background" />

<div class="divider--half"></div>

## React Overlaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles on top of a background imagery joining eg. traffic with a dark grey map for the React [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) using [`IgrAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html) and [`IgrGeographicTileSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographictileseries.html) classes.

```ts
// App.tsx
import React, { useEffect, useRef } from 'react';
import {
  IgrGeographicMap,
  IgrGeographicTileSeries,
  IgrAzureMapsImagery,
  AzureMapsImageryStyle
} from 'igniteui-react-maps';

export default function App() {
    const mapRef = useRef<IgrGeographicMap>(null);
    const tileSeriesRef = useRef<IgrGeographicTileSeries>(null);
    const azureKey = "<YOUR_KEY_HERE>";

    // Update TileSeries
    const series = new IgrGeographicTileSeries({
    name: "AzureTileSeries",
    });

    const overlay = new IgrAzureMapsImagery({});
    overlay.apiKey = azureKey;
    overlay.imageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay;
    series.tileImagery = overlay;

    // Update Map Background
    const background = new IgrAzureMapsImagery({});
    background.apiKey = azureKey;
    background.imageryStyle = AzureMapsImageryStyle.DarkGrey;
    this.geoMap.backgroundContent = background;

    this.geoMap.series.add(series);

    return (
        <div style={{ height: "100vh" }}>
        <IgrGeographicMap
            ref={mapRef}
            width="100%" height="100%"
            zoomable={true}>
            <IgrGeographicTileSeries ref={tileSeriesRef} />
        </IgrGeographicMap>
        </div>
    );
}
```

## Properties

The following table summarizes properties of the [`IgrAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html) class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`apiKey`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html#apiKey)|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|[`imageryStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html#imageryStyle)|[`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_maps.azuremapsimagerystyle.html)|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following [`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_maps.azuremapsimagerystyle.html) enumeration values:<ul><li>Satellite - Specifies the Satellite map style without road or labels overlay</li><li>Road - Specifies the Aerial map style with road and labels overlay</li><li>DarkGrey - Specifies a dark grey basemap style for contrast and highlighting overlays</li><li>TerraOverlay - Specifies a terrain map style with shaded relief to highlight elevation and landscape features</li><li>LabelsRoadOverlay - One of several overlays of city labels without an aerial overlay</li><li>HybridRoadOverlay - Satellite background combined with road and label overlays</li><li>HybridDarkGreyOverlay - Satellite background combined with dark grey label overlays</li><li>LabelsDarkGreyOverlay - One of several overlays of city labels over a dark grey basemap</li><li>TrafficDelayOverlay - Displays traffic delays and congestion areas in real time</li><li>TrafficAbsoluteOverlay - Displays current traffic speeds as absolute values</li><li>TrafficReducedOverlay - Displays reduced traffic flow with light-based visualization</li><li>TrafficRelativeOverlay - Displays traffic speeds relative to normal conditions</li><li>TrafficRelativeDarkOverlay - Displays traffic speeds relative to normal conditions over a dark basemap for enhanced contrast</li><li>WeatherRadarOverlay - Displays near real-time radar imagery of precipitation</li><li>WeatherInfraredOverlay - Displays infrared satellite imagery of cloud cover</li></ul> |

## API References

- [`AzureMapsImageryStyle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_maps.azuremapsimagerystyle.html)
- [`IgrAzureMapsImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrazuremapsimagery.html)
- [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html)
