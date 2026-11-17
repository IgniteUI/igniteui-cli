---
title: "Web Components Map | Data Visualization Tools | Binding JSON Files | Infragistics"
description: Learn how to use Infragistics' Web Components map to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View Ignite UI for Web Components map demos!
keywords: "Web Components map, JSON files, Ignite UI for Web Components, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "Series"]
namespace: Infragistics.Controls.Maps
llms:
  description: "With the Ignite UI for Web Components map, you can plot geographic data loaded from various file types."
platformType: xplat
_tocName: Binding JSON File
_premium: true
---
# Web Components Binding JSON Files with Geographic Locations

With the Ignite UI for Web Components map, you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

## Web Components Binding JSON Files with Geographic Locations Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Data Example
Here is an example of data from JSON file:

```json
[
    { "cap": false, "pop":  0.47, "lat":  68.96, "lon":   33.09, "country": "Russia" ,    "name": "Murmansk" },
    { "cap": true,  "pop":  1.65, "lat":  53.90, "lon":   27.58, "country": "Byelarus" ,  "name": "Minsk" },
    { "cap": true,  "pop":  0.58, "lat":  54.69, "lon":   25.28, "country": "Lithuania" , "name": "Vilnius" },
 // ...
]
```

## Code Snippet
The following code loads and binds `IgcGeographicHighDensityScatterSeriesComponent` in the map component to an array of objects created from loaded JSON file with geographic locations:

```html
<igc-geographic-map
    id="geoMap"
    height="100%"
    width="100%"
    zoomable="true">
</igc-geographic-map>
```

```ts
var map = this.geoMap;
var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
fetch(url)
    .then((response) => response.json())
    .then((data: any[]) => {
        var geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (var item of data) {
            if (!item.cap) continue;
            // the series binds to member names, so each item is projected onto them --
            // the shape the other platforms give a type of its own
            geoLocations.push({
                latitude: item.lat,
                longitude: item.lon,
                population: item.pop,
                city: item.name,
                country: item.country
            });
        }
        var series = new IgcGeographicSymbolSeriesComponent();
        series.dataSource = geoLocations;
        series.latitudeMemberPath = "latitude";
        series.longitudeMemberPath = "longitude";
        series.markerBrush = "rgba(255, 255, 255, 1.0)";
        series.markerOutline = "rgba(135, 5, 255, 1.0)";
        series.markerThickness = 1;
        series.markerType = MarkerType.Circle;
        map.series.add(series);
    });
```

## API References
`IgcGeographicHighDensityScatterSeriesComponent`
`IgcGeographicSymbolSeriesComponent`
`IgcGeographicMapComponent`
`dataSource`
`latitudeMemberPath`
`longitudeMemberPath`
