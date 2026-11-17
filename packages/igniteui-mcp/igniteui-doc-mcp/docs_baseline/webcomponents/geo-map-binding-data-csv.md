---
title: "Web Components Map | Data Visualization Tools | Binding CSV Data | Infragistics"
description: Learn how to use Infragistics' Web Components map to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View Ignite UI for Web Components map demos!
keywords: "Web Components map, plot data, Ignite UI for Web Components, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "GeographicHighDensityScatterSeries"]
namespace: Infragistics.Controls.Maps
llms:
  description: "With the Ignite UI for Web Components map component, you can plot geographic data loaded from various file types."
platformType: xplat
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

## Data Example
Here is an example of data from CSV file:

```csv
CityName,Lat,Lon,Population
New York,40.6943,-73.9249,19354922
Los Angeles,34.1139,-118.4068,12815475
```

## Code Snippet
The following code loads and binds `IgcGeographicHighDensityScatterSeriesComponent` in the map component to an array of objects created from loaded CSV file with geographic locations.

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
var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
fetch(url)
    .then((response) => response.text())
    .then((csvData: string) => {
        var csvLines = csvData.split("\n");
        var geoLocations: any[] = [];
        // parsing CSV data and creating geographic locations
        for (var i = 1; i < csvLines.length; i++) {
            var columns = csvLines[i].split(",");
            if (columns.length < 4) continue;
            geoLocations.push({
                name: columns[0],
                latitude: Number(columns[1]),
                longitude: Number(columns[2]),
                population: Number(columns[3])
            });
        }
        // creating the series with the loaded data
        var series = new IgcGeographicHighDensityScatterSeriesComponent();
        series.name = "hdSeries";
        series.dataSource = geoLocations;
        series.latitudeMemberPath = "latitude";
        series.longitudeMemberPath = "longitude";
        series.heatMaximumColor = "Red";
        series.heatMinimumColor = "Black";
        series.heatMinimum = 0;
        series.heatMaximum = 5;
        series.pointExtent = 1;
        series.mouseOverEnabled = true;
        // adding the series to the geographic map
        map.series.add(series);

        // zooming to the bounds of the lower 48 states
        map.zoomToGeographic({
            left: -130,
            top: 15,
            width: Math.abs(-130 + 65),
            height: Math.abs(50 - 15)
        });
    });
```

## API References
`IgcGeographicHighDensityScatterSeriesComponent`
