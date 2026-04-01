---
title: Web Components Map | Data Visualization Tools | Displaying Open Street Maps Imagery | Infragistics
_description: Use Infragistics' Web Components to display imagery from OSM maps. View Ignite UI for Web Components map tutorials!
_keywords: Web Components map, OSM, Ignite UI for Web Components, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Displaying OSM Imagery
_premium: true
---

# Web Components Displaying Imagery from Open Street Maps

The Web Components [`IgcOpenStreetMapImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcopenstreetmapimagery.html) is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the Ignite UI for Web Components map component already displays geographic imagery from the Open Street Maps. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

## Web Components Displaying Imagery from Open Street Maps Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Code Snippet

This code example explicitly sets `BackgroundContent` of the map component to the [`IgcOpenStreetMapImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcopenstreetmapimagery.html) object which provides geographic imagery from  OpenStreetMap© contributors.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcOpenStreetMapImagery } from 'igniteui-webcomponents-maps';
// ...

let geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent

const mapImagery = new OpenStreetMapImagery();
this.geoMap.backgroundContent = mapImagery;
```

## API References

- `BackgroundContent`
- [`IgcOpenStreetMapImagery`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcopenstreetmapimagery.html)
