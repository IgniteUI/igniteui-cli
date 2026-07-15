---
title: Web Components Map | Data Visualization Tools | ESRI Map Resources | Infragistics
_description: Use Infragistics' Web Components to display imagery from ESRI maps. View Ignite UI for Web Components map tutorials!
_keywords: Web Components map, ESRI, Ignite UI for Web Components, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Esri Utility
_premium: true
---

# Web Components Esri Utility

The resource topic provides implementation of an utility that helps with using [`IgcArcGISOnlineMapImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcarcgisonlinemapimagery.html) provided by Esri Maps in [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html).

## Code Snippet

```ts

export class EsriUtility {

    public static getUri(style: EsriStyle): string {
        let isHttpSecured = window.location.toString().startsWith("https:");
        // resolving Esri Server uri based on hosting website
        let uri: string = style;
        if (!isHttpSecured) {
            uri = uri.replace("https:", "http:");
        }
        return uri;
    }
}

/**
 * Describes available links to imagery tile sources on public ArcGIS/Esri servers.
 * You can find up-to-date list on https://services.arcgisonline.com/arcgis/rest/services
 */
export enum EsriStyle {

    // these Esri maps show geographic tiles for the whole of world
    WorldStreetMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
    WorldTopographicMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
    WorldImageryMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
    WorldOceansMap = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer",
    WorldNationalGeoMap = "https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",
    WorldTerrainMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",
    WorldDeLormesMap = "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer",
    WorldLightGrayMap = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",
    WorldShadedReliefMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer",
    WorldPhysicalMap = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer",

    // these Esri maps show geographic tiles for the whole of world without contours of continents
    // therefore the Map should also load a shapefile of continents when using them
    WorldAdminOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",
    WorldTransportationOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
    WorldBoundariesDarkOverlay ="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",
    WorldBoundariesLightOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer",
    WorldLabelsLightGrayOverlay = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",

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
```

## API References

- [`IgcArcGISOnlineMapImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcarcgisonlinemapimagery.html)
- [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html)
