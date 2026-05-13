---
title: Web Components Map | Data Visualization Tools | Binding JSON Files | Infragistics
_description: Learn how to use Infragistics' Web Components map to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View Ignite UI for Web Components map demos!
_keywords: Web Components map, JSON files, Ignite UI for Web Components, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series"]
namespace: Infragistics.Controls.Maps
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

<div class="divider--half"></div>

## Data Example

Here is an example of data from JSON file:

```json
[
   { "name": "Sydney Island", "lat": -16.68972, "lon": 139.45917 },
   { "name": "Sydney Creek",  "lat": -16.3,     "lon": 128.95 },
   { "name": "Mount Sydney",  "lat": -21.39864, "lon": 121.193 },
 // ...
]
```

## Code Snippet

The following code loads and binds [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded JSON file with geographic locations:

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
connectedCallback() {
    const url = "../data/WorldCities.json";

    fetch(url)
        .then((response) => response.json())
        .then(data => this.onDataLoaded(data));
}

onDataLoaded(jsonData: any[]) {
    const geoLocations: any[] = [];
    for (const jsonItem of jsonData) {
        if (jsonItem.cap) {
            const location = {
                latitude: jsonItem.lat,
                longitude: jsonItem.lon,
                population: jsonItem.pop,
                city: jsonItem.name,
                country: jsonItem.country
            };
            geoLocations.push(location);
        }
    }

    let geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    let geoSeries : IgcGeographicSymbolSeriesComponent = new IgcGeographicSymbolSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.markerType = MarkerType.Circle;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.markerBrush = "LightGray";
    geoSeries.markerOutline = "Black";

    geoMap.series.add(geoSeries);
}
```

## API References

- [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html)
- [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html)
- `GeographicMap`
- `DataSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html#longitudeMemberPath)
