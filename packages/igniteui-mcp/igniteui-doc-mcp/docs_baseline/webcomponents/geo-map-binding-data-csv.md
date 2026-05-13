---
title: Web Components Map | Data Visualization Tools | Binding CSV Data | Infragistics
_description: Learn how to use Infragistics' Web Components map to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View Ignite UI for Web Components map demos!
_keywords: Web Components map, plot data, Ignite UI for Web Components, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicHighDensityScatterSeries"]
namespace: Infragistics.Controls.Maps
_tocName: Binding CSV File
_premium: true
---

# Web Components Binding CSV Files with Geographic Locations

With the Ignite UI for Web Components map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from a comma separated values (CSV) file.

## Web Components Binding CSV Files with Geographic Locations Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Data Example

Here is an example of data from CSV file:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## Code Snippet

The following code loads and binds [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded CSV file with geographic locations.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    const url = "/data/UsaCitiesPopulation.csv";

    fetch(url)
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");
    // parsing CSV data and creating geographic locations
    const geoLocations: any[] = [];

    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        const location = {
            latitude:  Number(columns[1]),
            longitude: Number(columns[2]),
            name:  columns[0],
            population: Number(columns[3])
        };
        geoLocations.push(location);
    }

    // creating HD series with loaded data
    const geoSeries = new IgcGeographicHighDensityScatterSeriesComponent();
    geoSeries.name = "hdSeries";
    geoSeries.dataSource = geoLocations;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.mouseOverEnabled = true;
    // adding symbol series to the geographic amp
    this.geoMap.series.add(geoSeries);
    // zooming to bound of lower 48-states
    const geoBounds = {
        left: -130,
        top: 15,
        width: Math.abs(-130 + 65),
        height: Math.abs(50 - 15)
    };

    this.geoMap.zoomToGeographic(geoBounds);
}
```

## API References

- [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html)
- `DataSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#longitudeMemberPath)
- [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMaximumColor)
- [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMinimumColor)
- [`pointExtent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#pointExtent)
