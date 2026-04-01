---
title: Web Components Map | Data Visualization Tools | Binding Geographic Data Models | Infragistics
_description: Use Infragistics' Web Components JavaScript map to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. View Ignite UI for Web Components map demos!
_keywords: Web Components map, binding data models, Ignite UI for Web Components, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicScatterAreaSeries", "GeographicHighDensityScatterSeries", "GeographicProportionalSymbolSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeries", "GeographicPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
_tocName: Binding Data Model
_premium: true
---

# Web Components Binding Geographic Data Models

The Ignite UI for Web Components map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The `ItemsSource` property of geographic series is used for the purpose of binding to data models. This property can be bound an array of custom objects.

## Web Components Binding Geographic Data Models Example

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

The following table summarized data structures required for each type of geographic series:

| Geographic Series  | Properties   | Description   |
|--------------|---------------| ---------------|
| [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html) | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html#latitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html) | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgcGeographicProportionalSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicproportionalsymbolseriescomponent.html) | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicproportionalsymbolseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicproportionalsymbolseriescomponent.html#latitudeMemberPath), [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicproportionalsymbolseriescomponent.html#radiusMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for size/radius of symbols |
| [`IgcGeographicScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicscatterareaseriescomponent.html) | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#latitudeMemberPath), [`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicscatterareaseriescomponent.html#colorMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
| [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) | [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#latitudeMemberPath), [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#valueMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
|[`IgcGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriescomponent.html)|[`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriesbasecomponent.html#shapeMemberPath)|Specifies the name of data column of `ItemsSource` items that contains the geographic points of shapes. This property must be mapped to an array of arrays of objects with x and y properties. |
|[`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html)|[`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriesbasecomponent.html#shapeMemberPath)|Specifies the name of data column of `ItemsSource` items that contains the geographic coordinates of lines. This property must be mapped to an array of arrays of objects with x and y properties. |

## Code Snippet

The following code shows how to bind the [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html) to a custom data model that contains geographic locations of some cities of the world stored using longitude and latitude coordinates. Also, we use the [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html) to plot shortest geographic path between these locations using the [WorldUtility](geo-map-resources-world-util.md)

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
public flights: any[];

constructor() {
    super();

    const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
    const citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
    const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
    const cityQTR = { lat: 25.285, lon:  51.531,  country: "Qatar", name: "Doha" };
    const cityPAN = { lat:  8.949, lon: -79.400,  country: "Panama", name: "Panama" };
    const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
    const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
    const cityALT = { lat: 33.795,  lon: -84.349, country: "US", name: "Atlanta" };
    const cityJOH = { lat: -26.178, lon: 28.004,  country: "South Africa", name: "Johannesburg" };
    const cityNYC = { lat: 40.750, lon: -74.0999, country: "US", name: "New York" };
    const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name: "Singapore" };
    const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow" };
    const cityROM = { lat:  41.880, lon: 12.520,  country: "Italy", name: "Roma" };
    const cityLAX = { lat: 34.000, lon: -118.25,  country: "US", name: "Los Angeles" };

    this.flights = [
        { origin: cityDAL, dest: citySNG, color: "Green" },
        { origin: cityMOS, dest: cityNZL, color: "Red" },
        { origin: cityCHL, dest: cityJAP, color: "Blue" },
        { origin: cityPAN, dest: cityROM, color: "Orange" },
        { origin: cityALT, dest: cityJOH, color: "Black" },
        { origin: cityNYC, dest: cityQTR, color: "Purple" },
        { origin: cityLAX, dest: citySYD, color: "Gray" },
    ];
}

connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    for (const flight of this.flights) {
        this.createPolylineSeries(flight);
        this.createSymbolSeries(flight);
    }
}

createSymbolSeries(flight: any)
{
    const geoLocations = [flight.origin, flight.dest ];
    const symbolSeries = new IgcGeographicSymbolSeriesComponent();
    symbolSeries.dataSource = geoLocations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = flight.color;
    symbolSeries.thickness = 1;
    this.geoMap.series.add(symbolSeries);
}

createPolylineSeries(flight: any)
{
    const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
    const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);

    const geoRoutes = [
        { points: geoPath ,
          origin: flight.origin,
          dest: flight.dest,
          distance: geoDistance,
          time: geoDistance / 850,
    }];

    const lineSeries = new IgcGeographicPolylineSeriesComponent();
    lineSeries.dataSource = geoRoutes;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeStrokeThickness = 9;
    lineSeries.shapeOpacity = 0.5;
    lineSeries.shapeStroke = flight.color;

    this.geoMap.series.add(lineSeries);
}
```

## API References

- [`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicscatterareaseriescomponent.html#colorMemberPath)
- [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html)
- [`IgcGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographichighdensityscatterseriescomponent.html)
- [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html)
- [`IgcGeographicProportionalSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicproportionalsymbolseriescomponent.html)
- [`IgcGeographicScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicscatterareaseriescomponent.html)
- [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html#longitudeMemberPath)
- [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicproportionalsymbolseriescomponent.html#radiusMemberPath)
- [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#valueMemberPath)
