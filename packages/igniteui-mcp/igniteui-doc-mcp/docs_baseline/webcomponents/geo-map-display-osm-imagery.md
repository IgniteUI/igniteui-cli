---
title: "Web Components Map | Data Visualization Tools | Displaying Open Street Maps Imagery | Infragistics"
description: Use Infragistics' Web Components to display imagery from OSM maps. View Ignite UI for Web Components map tutorials!
keywords: "Web Components map, OSM, Ignite UI for Web Components, Infragistics, imagery tile source, map background"
license: commercial
mentionedTypes: ["GeographicMap"]
llms:
  description: "The Web Components OpenStreetMapImagery is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world."
platformType: xplat
_tocName: Displaying OSM Imagery
_premium: true
---
# Web Components Displaying Imagery from Open Street Maps

The Web Components `IgcOpenStreetMapImagery` is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the Ignite UI for Web Components map component already displays geographic imagery from the Open Street Maps. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

## Web Components Displaying Imagery from Open Street Maps Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Code Snippet
This code example explicitly sets `backgroundContent` of the map component to the `IgcOpenStreetMapImagery` object which provides geographic imagery from  OpenStreetMap© contributors.

```html
<igc-geographic-map
    id="map"
    height="100%"
    width="100%"
    zoomable="true">
</igc-geographic-map>
```

```ts
import { IgcGeographicMapComponent, IgcOpenStreetMapImagery } from 'igniteui-webcomponents-maps';
// ...
private map: IgcGeographicMapComponent
var map = this.map = document.getElementById('map') as IgcGeographicMapComponent;
var osmImagery = new IgcOpenStreetMapImagery();
map.backgroundContent = osmImagery;
```

## API References
`IgcOpenStreetMapImagery`
