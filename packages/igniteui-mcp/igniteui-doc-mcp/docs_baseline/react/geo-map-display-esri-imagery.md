---
title: React Map | Data Visualization Tools | Displaying ESRI Imagery |  Infragistics
_description: Use Infragistics' React to display imagery from ESRI maps. View Ignite UI for React map tutorials!
_keywords: React map, ESRI, Ignite UI for React, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Displaying Esri Imagery
_premium: true
---

# React Displaying Imagery from Esri Maps

The [`IgrArcGISOnlineMapImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrarcgisonlinemapimagery.html) is a free geographic imagery mapping service created by <a href="https://www.esri.com/" target="_blank">Esri</a> company. It provides over 40 styles of geographic imagery tiles of the world and some thematic tiles for the USA. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

## React Displaying Imagery from Esri Maps Example

```typescript
/**
 * Describes available links to imagery tile sources on public ArcGIS/Esri servers.
 * You can find up-to-date list on https://services.arcgisonline.com/arcgis/rest/services
 */
export enum EsriStyle {

    // note Esri maps show geographic tiles for the whole of world with shapes
    WorldTopographicMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
    WorldStreetMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
    WorldSatelliteMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
    WorldPhysicalMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer",
    WorldDeLormesMap = "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer",
    WorldTerrainMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",
    WorldNationalGeoMap = "https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",
    WorldShadedReliefMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer",

    // not usable imagery tiles
    // WorldHillShadeDarkMap = "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer",
    // WorldHillShadeLightMap = "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",
    // WorldElevation3dTerrainMap = "https://services.arcgisonline.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
    // WorldElevation3dTopographicMap = "https://services.arcgisonline.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",
    // WorldOceansMap = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer",

    // note Esri overlays show geographic tiles for the whole of world without any shapes
    WorldOceansBaseMap = "https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",
    WorldOceansOverlay = "https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",

    WorldLightGrayMap = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",
    WorldLightGrayOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",

    WorldDarkGrayMap = "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer",
    WorldDarkGrayOverlay = "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",

    WorldAdminOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",
    WorldTransportationOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
    WorldBordersWithDarkLabelsOverlay ="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",
    WorldBordersWithLightLabelsOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer",

    // these Esri maps show only geographic tiles for the USA
    // therefore the Map should be zoomed in to geographic bounds of USA when using them
    UsaOwnerOccupiedHousing = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Owner_Occupied_Housing/MapServer",
    UsaSoilSurvey = "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/Soil_Survey_Map/MapServer",
    UsaPopulationOlderThanAge64 = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Percent_Over_64/MapServer",
    UsaPopulationYoungerThan18 = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Percent_Under_18/MapServer",
    UsaPopulationGrowth2015 = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Projected_Population_Change/MapServer",
    UsaUnemploymentRate = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Unemployment_Rate/MapServer",
    UsaSocialVulnerability = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Social_Vulnerability_Index/MapServer",
    UsaRetailSpendingPotential = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Retail_Spending_Potential/MapServer",
    UsaPopulationChange2010 = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Recent_Population_Change/MapServer",
    UsaPopulationChange2000 = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer",
    UsaPopulationDensity = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Population_Density/MapServer",
    UsaPopulationByGender = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Population_by_Sex/MapServer",
    UsaMedianHouseholdIncome = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Household_Income/MapServer",
    UsaMedianNetWorth = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Net_Worth/MapServer",
    UsaMedianHomeValue = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Home_Value/MapServer",
    UsaMedianAge = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Age/MapServer",
    UsaLaborForceParticipation = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Labor_Force_Participation_Rate/MapServer",
    UsaAverageHouseholdSize = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Average_Household_Size/MapServer",
    UsaDiversityIndex = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Diversity_Index/MapServer",
    UsaRailNetwork = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",

}

export class EsriUtility {

    public static getUri(style: EsriStyle): string {

        let isHttpSecured = window.location.toString().startsWith("https:");

        // resolving Esri Server uri based on hosting website
        let uri: string = style;
        if (!isHttpSecured) {
            uri = uri.replace("https:", "http:");
        }
        // console.log("uri " + uri);
        return uri;
    }

}
```
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
import { MapUtils, MapRegion } from './MapUtils';
import { EsriUtility, EsriStyle } from './EsriUtility';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryEsri extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.onEsriMapStreet = this.onEsriMapStreet.bind(this);
        this.onEsriMapOceans = this.onEsriMapOceans.bind(this);
        this.onEsriMapNational = this.onEsriMapNational.bind(this);
        this.onEsriMapTopographic = this.onEsriMapTopographic.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container horizontal" >
                <div className="container">
                    <IgrGeographicMap
                        ref={this.onEsriMapStreet}
                        width="100%" height="100%" zoomable="true"/>
                </div>
                <div className="container">
                    <IgrGeographicMap
                        ref={this.onEsriMapTopographic}
                        width="100%" height="100%" zoomable="true"/>
                </div>
                <div className="container">
                    <IgrGeographicMap
                        ref={this.onEsriMapOceans}
                        width="100%" height="100%" zoomable="true"/>
                </div>

                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @ESRI/ArcGIS</div>
            </div>
        );
    }

    public onEsriMapStreet(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldStreetMap);
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onEsriMapOceans(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansBaseMap);
        // or
        // tileSource.mapServerUri = "https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer";
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onEsriMapTopographic(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldTopographicMap);
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onEsriMapNational(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldNationalGeoMap);
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryEsri/>);
```


<div class="divider--half"></div>

## Code Snippet

The following code snippet shows how to display React geographic imagery tiles from Esri imagery servers in [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) using [`IgrArcGISOnlineMapImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrarcgisonlinemapimagery.html) class.

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
// ...
const tileSource = new IgrArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

## Esri Utility

Alternatively, you can use the [EsriUtility](geo-map-resources-esri.md) which defines all styles provided by Esri imagery servers.

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
const tileSource = new IgrArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

## API References

- [`IgrArcGISOnlineMapImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrarcgisonlinemapimagery.html)
- [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html)
