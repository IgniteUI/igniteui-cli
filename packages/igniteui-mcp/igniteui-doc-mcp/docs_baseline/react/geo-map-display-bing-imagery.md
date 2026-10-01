---
title: "React Map | Data Visualization Tools | Displaying Bing Imagery | Infragistics"
description: Use Infragistics' React to display imagery from Microsoft Bing Maps. View Ignite UI for React map tutorials!
keywords: "React map, bing maps, Ignite UI for React, Infragistics, imagery tile source, map background"
license: commercial
mentionedTypes: ["GeographicMap", "BingMapsMapImagery"]
llms:
  description: "NOTE: As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired."
_tocName: Displaying Bing Imagery
_premium: true
---
# React Displaying Imagery from Bing Maps

NOTE: As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.

For more details:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

The React `IgrBingMapsMapImagery` is geographic imagery mapping service provided by Microsoft® company. It provides 3 styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a> web site. The Ignite UI for React map component can display geographic imagery from Bing Maps in the map’s background content using the `IgrBingMapsMapImagery` class.

## React Displaying Imagery from Bing Maps Example

## Code Snippet
The following code snippet shows how to display geographic imagery tiles from Bing Maps in React `IgrGeographicMap` using `IgrBingMapsMapImagery` class.

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrBingMapsMapImagery } from 'igniteui-react-maps';
import { BingMapsImageryStyle } from 'igniteui-react-maps';
// ...
const tileSource = new IgrBingMapsMapImagery();
tileSource.apiKey = "YOUR_BING_MAPS_API_KEY";
tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels; // or
tileSource.imageryStyle = BingMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = BingMapsImageryStyle.Road;

// resolving BingMaps uri based on HTTP protocol of hosting website
let tileUri = tileSource.actualBingImageryRestUri;
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

## Properties
The following table summarized properties of the `IgrBingMapsMapImagery` class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|`ApiKey`|string|Represents the property for setting an API key required for the Bing Maps imagery service. You must obtain this key from the <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> website.|
|`ImageryStyle`|`IgrBingMapsImageryStyle`|Represents the property for setting the Bing Maps imagery tiles map style. This property can be set to the following `IgrBingMapsImageryStyle` enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> AerialWithLabels - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul>|
|`BingImageryRestUri`|string|Represents the property for setting the Bing Imagery REST URI specifying where the TilePath and SubDomains will come from. This is an optional property, and if not specified it will use the default REST URI.|
|`CultureName`|string|Represents a property for setting the culture name for the tile source.|
|`IsDeferredLoad`|boolean|Represents the property that specifies whether or not the Bing Maps service should auto-initialized upon the assignment of valid property values.|
|`IsInitialized`|boolean|Represents the property that is set to True occurs when geographic imagery tiles from Bing Maps service have been initialized and they are ready for rendering in the map component.|
|`SubDomains`|`IgrSubDomainsCollection`|Represents an image collection of URI sub domains|
|`TilePath`|string|Represents a property that sets the map tile image URI, this is the actual location of the Bing Maps|

## API References
`IgrBingMapsImageryStyle`
`IgrBingMapsMapImagery`
`IgrGeographicMap`
