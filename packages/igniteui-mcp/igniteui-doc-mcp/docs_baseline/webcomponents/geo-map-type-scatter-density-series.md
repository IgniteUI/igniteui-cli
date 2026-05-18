---
title: Web Components Map | Data Visualization Tools | Scatter High Density Series | Data Binding | Infragistics
_description: Use Infragistics Web Components map's scatter high density series to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time. Learn more about Ignite UI for Web Components map's series!
_keywords: Web Components map, scatter high density series, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series"]
_tocName: Geographic High Density Map
_premium: true
---

# Web Components Geographic High Density Map

In Web Components map component, you can use the [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html) to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

## Web Components Geographic High Density Map Example

```typescript
export class WorldUtils {

    // calculate geo-paths between two locations using great circle formula
    public static calcPaths(origin: any, dest: any): any[] {
        let interval = 200;
        let paths: any[] = [[]];
        let pathID = 0;
        let distance = this.calcDistance(origin, dest);
        if (distance <= interval) {
            paths[pathID].push({ x: origin.lon, y: origin.lat });
            paths[pathID].push({ x: dest.lon, y: dest.lat });
        } else {
            let current = origin;
            let previous = origin;

            for (let dist = interval; dist <= distance; dist += interval)
            {
                previous = current
                paths[pathID].push({ x: current.lon, y: current.lat });

                let bearing = this.calcBearing(current, dest);
                current = this.calcDestination(current, bearing, interval);
                // ensure geo-path wrap around the world through the new date-line
                if (previous.lon > 150 && current.lon < -150) {
                    paths[pathID].push({ x: 180, y: current.lat });
                    paths.push([]);
                    pathID++
                    current = { lon: -180, lat: current.lat }
                } else if (previous.lon < -150 && current.lon > 150) {
                    paths[pathID].push({ x: -180, y: current.lat });
                    paths.push([]);
                    pathID++
                    current = { lon: 180, lat: current.lat }
                }
            }
            paths[pathID].push({ x: dest.lon, y: dest.lat });
        }
        return paths;
    }

    // calculate bearing angle between two locations
    public static calcBearing(origin: any, dest: any): number
    {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let range = (dest.lon - origin.lon);
        let y = Math.sin(range) * Math.cos(dest.lat);
        let x = Math.cos(origin.lat) * Math.sin(dest.lat) -
                Math.sin(origin.lat) * Math.cos(dest.lat) * Math.cos(range);
        let angle = Math.atan2(y, x);
        return this.toDegreesNormalized(angle);
    }

    // calculate destination for origin location and travel distance
    public static calcDestination(origin: any, bearing: number, distance: number): any {
        let radius = 6371.0;
        origin = this.toRadianLocation(origin);
        bearing = this.toRadians(bearing);
        distance = distance / radius; // angular distance in radians

        let lat = Math.asin(Math.sin(origin.lat) * Math.cos(distance) +
                       Math.cos(origin.lat) * Math.sin(distance) * Math.cos(bearing));
        let x = Math.sin(bearing) * Math.sin(distance) * Math.cos(origin.lat);
        let y = Math.cos(distance) - Math.sin(origin.lat) * Math.sin(origin.lat);
        let lon = origin.lon + Math.atan2(x, y);
        // normalize lon to coordinate between -180º and +180º
        lon = (lon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

        lon = this.toDegrees(lon);
        lat = this.toDegrees(lat);

        return { lon: lon, lat: lat };
    }

    // calculate distance between two locations
    public static calcDistance(origin: any, dest: any): number {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let sinProd = Math.sin(origin.lat) * Math.sin(dest.lat);
        let cosProd = Math.cos(origin.lat) * Math.cos(dest.lat);
        let lonDelta = (dest.lon - origin.lon);

        let angle = Math.acos(sinProd + cosProd * Math.cos(lonDelta));
        let distance = angle * 6371.0;
        return distance; // * 6371.0; // in km
    }

    public static toRadianLocation(geoPoint: any): any {
        let x = this.toRadians(geoPoint.lon);
        let y = this.toRadians(geoPoint.lat);
        return { lon: x, lat: y };
    }

    public static toRadians(degrees: number): number
    {
        return degrees * Math.PI / 180;
    }

    public static toDegrees(radians: number): number {
        return (radians * 180.0 / Math.PI);
    }

    public static toDegreesNormalized(radians: number): number
    {
        let degrees = this.toDegrees(radians);
        degrees = (degrees + 360) % 360;
        return degrees;
    }

    // converts latitude coordinate to a string
    public static toStringLat(latitude: number): string {
        let str = Math.abs(latitude).toFixed(1) + "°";
        return latitude > 0 ? str + "N" : str + "S";
    }

    // converts longitude coordinate to a string
    public static toStringLon(coordinate: number): string {
        let val = Math.abs(coordinate);
        let str = val < 100 ? val.toFixed(1) : val.toFixed(0);
        return coordinate > 0 ? str + "°E" : str + "°W";
    }

    public static toStringAbbr(value: number): string {
        if (value > 1000000000000) {
            return (value / 1000000000000).toFixed(1) + " T"
        } else if (value > 1000000000) {
            return (value / 1000000000).toFixed(1) + " B"
        } else if (value > 1000000) {
            return (value / 1000000).toFixed(1) + " M"
        } else if (value > 1000) {
            return (value / 1000).toFixed(1) + " K"
        }
        return value.toFixed(0);
    }

    public static getLongitude(location: any): number {
        if (location.x) return location.x;
        if (location.lon) return location.lon;
        if (location.longitude) return location.longitude;
        return Number.NaN;
    }

    public static getLatitude(location: any): number {
        if (location.y) return location.y;
        if (location.lat) return location.lat;
        if (location.latitude) return location.latitude;
        return Number.NaN;
    }

    public static getBounds(locations: any[]): any {
        let minLat = 90;
        let maxLat = -90;
        let minLon = 180;
        let maxLon = -180;

        for (const location of locations) {
            const crrLon = this.getLongitude(location);
            if (!Number.isNaN(crrLon)) {
                minLon = Math.min(minLon, crrLon);
                maxLon = Math.max(maxLon, crrLon);
            }

            const crrLat = this.getLatitude(location);
            if (!Number.isNaN(crrLat)) {
                minLat = Math.min(minLat, crrLat);
                maxLat = Math.max(maxLat, crrLat);
            }

            // if (location.x) {
            //     minLon = Math.min(minLon, location.x);
            //     maxLon = Math.max(maxLon, location.x);
            // } else if (location.lon) {
            //     minLon = Math.min(minLon, location.lon);
            //     maxLon = Math.max(maxLon, location.lon);
            // } else if (location.longitude) {
            //     minLon = Math.min(minLon, location.longitude);
            //     maxLon = Math.max(maxLon, location.longitude);
            // }
            // if (location.y) {
            //     minLat = Math.min(minLat, location.y);
            //     maxLat = Math.max(maxLat, location.y);
            // } else if (location.lat) {
            //     minLat = Math.min(minLat, location.lat);
            //     maxLat = Math.max(maxLat, location.lat);
            // } else if (location.latitude) {
            //     minLat = Math.min(minLat, location.latitude);
            //     maxLat = Math.max(maxLat, location.latitude);
            // }
        }

        const geoBounds = {
            left: minLon,
            top: minLat,
            width: Math.abs(maxLon - minLon),
            height: Math.abs(maxLat - minLat)
        };
        return geoBounds;
    }

    public static getNightShapes(): any[] {
        let nightShape = [];

        let line: any[] = [];

        for (let lon = -180; lon <= 180; lon += 1) {

            // let line: any[] = [{x: lon, y: -90}, {x: lon, y: 90}];
            let x = lon;
            let y = 75 * Math.cos(lon * Math.PI / 180);
            line.push({x: x, y: y});
        }
        // line.push({x: 180, y: 90});
        // line.push({x: -180, y: 90});
        // line.push({x: -180, y: -90});

        let coordinateLine = {points: [line]};

        nightShape.push(coordinateLine);

        return nightShape;
    }

}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

The demo above shows the [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html) series in the map component bound to hundreds or even thousands of data points representing Australia’s population density. The map plot area with more densely populated data points represented as coalescences of red pixels and loosely distributed data points by discrete blue pixels.

Because there are so many data points, the series displays the scatter data as tiny dots as opposed to full size markers, and displays areas with the most data using a higher color density representing a cluster of data points.

## Data Requirements

Similar to other types of scatter series in the map control, the [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html) series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#longitudeMemberPath) and [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#latitudeMemberPath) properties to map these data columns.

### Data Binding

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property|Type|Description |
| ---|---|--- |
| `ItemsSource`|any|Gets or sets the items source |
| [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#longitudeMemberPath)|string|Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)|string|Uses the ItemsSource property to determine the location of the latitude values on the assigned items |

## Heat Color Scale

The Heat Color Scale, an optional feature, determines the color pattern within the series. The following table summarizes the properties used for determining the color scale.

| Property |Type|Description |
| ---|---|--- |
| [`heatMinimum`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMinimum)|Double|Defines the double value representing the minimum end of the color scale |
| [`heatMaximum`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMaximum)|Double|Defines the double value representing the maximum end of the color scale |
| [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMinimumColor)|Color|Defines the point density color used at the bottom end of the color scale |
| [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMaximumColor)|Color|Defines the point density color used at the top end of the color scale |

## Code Example

The following code demonstrates how set the [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMinimumColor) and [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMaximumColor) properties of the [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html)

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicHighDensityScatterSeriesComponent } from 'igniteui-webcomponents-maps';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    const url = "../data/Places.csv";

    fetch(url)
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");
    const geoLocations: any[] = [];

    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        const location = {
            latitude:  Number(columns[2]),
            longitude: Number(columns[1]),
            name:  columns[0]
        };
        geoLocations.push(location);
    }

    // creating HD series with loaded data
    const geoSeries = new IgcGeographicHighDensityScatterSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.latitudeMemberPath = "latitude";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    // adding HD series to the geographic amp
    this.geoMap.series.add(geoSeries);
}
```

## API References

- [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html)
- [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html)
- [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMaximumColor)
- [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#heatMinimumColor)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#longitudeMemberPath)
