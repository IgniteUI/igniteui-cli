---
title: "Blazor Map | World Utility | Data Source | Infragistics"
description: Use Infragistics' Blazor JavaScript map data utility to generate geographic data. View Ignite UI for Blazor map demos!
keywords: "Blazor map, map data, Ignite UI for Blazor, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap"]
llms:
  description: "The resource topic provides implementation of utility that helps with generating Blazor geographic data."
_tocName: World Utility
_premium: true
---
# Blazor World Utility

The resource topic provides implementation of utility that helps with generating Blazor geographic data.

## Code Snippet

```ts
export default class WorldUtils {

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
    public static calcBearing(origin: any, dest: any) : number
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
    public static calcDistance(origin: any, dest: any) : number {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let sinProd = Math.sin(origin.lat) * Math.sin(dest.lat);
        let cosProd = Math.cos(origin.lat) * Math.cos(dest.lat);
        let lonDelta = (dest.lon - origin.lon);

        let angle = Math.acos(sinProd + cosProd * Math.cos(lonDelta));
        let distance = angle * 6371.0;
        return distance; // * 6371.0; // in km
    }

    public static toRadianLocation(geoPoint: any) : any {
        let x = this.toRadians(geoPoint.lon);
        let y = this.toRadians(geoPoint.lat);
        return { lon: x, lat: y };
    }

    public static toRadians(degrees: number) : number
    {
        return degrees * Math.PI / 180;
    }

    public static toDegrees(radians: number) : number {
        return (radians * 180.0 / Math.PI);
    }

    public static toDegreesNormalized(radians: number) : number
    {
        let degrees = this.toDegrees(radians);
        degrees = (degrees + 360) % 360;
        return degrees;
    }

    // converts latitude coordinate to a string
    public static toStringLat(latitude: number) : string {
        let str = Math.abs(latitude).toFixed(1) + "°";
        return latitude > 0 ? str + "N" : str + "S";
    }

    // converts longitude coordinate to a string
    public static toStringLon(coordinate: number) : string {
        let val = Math.abs(coordinate);
        let str = val < 100 ? val.toFixed(1) : val.toFixed(0);
        return coordinate > 0 ? str + "°E" : str + "°W";
    }

    public static toStringAbbr(value: number) : string {
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

    public static getLongitude(location: any) : number {
        if (location.x) return location.x;
        if (location.lon) return location.lon;
        if (location.longitude) return location.longitude;
        return Number.NaN;
    }

    public static getLatitude(location: any) : number {
        if (location.y) return location.y;
        if (location.lat) return location.lat;
        if (location.latitude) return location.latitude;
        return Number.NaN;
    }

    public static getBounds(locations: any[]) : any {
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
        }

        const geoBounds = {
            left: minLon,
            top: minLat,
            width: Math.abs(maxLon - minLon),
            height: Math.abs(maxLat - minLat)
        };
        return geoBounds;
    }
}
```

```razor
    public static class WorldUtils
    {
        public static List<List<Point>> CalcPaths(GeoLocation origin, GeoLocation dest)
        {
            int interval = 200;
            List<List<Point>> paths = new List<List<Point>>() { new List<Point>() };
            int pathID = 0;
            double distance = WorldUtils.CalcDistance(origin, dest);

            if (distance <= interval)
            {
                Console.WriteLine("Distance Less Than Equal To Interval!");
                paths[pathID].Add(new Point() { X = dest.Lon, Y = dest.Lat });
            }
            else
            {
                Console.WriteLine("Distance Greater Than Interval!");
                GeoLocation current = origin;
                GeoLocation previous = origin;

                for (int dist = interval; dist <= distance; dist += interval)
                {
                    previous = current;

                    paths[pathID].Add(new Point() { X = current.Lon, Y = current.Lat });

                    double bearing = WorldUtils.CalcBearing(current, dest);
                    current = WorldUtils.CalcDestination(current, bearing, interval);

                    if (previous.Lon > 150 && current.Lon < -150)
                    {
                        paths[pathID].Add(new Point() { X = 180, Y = current.Lat });
                        paths.Add(new List<Point>());
                        pathID++;
                        current = new GeoLocation() { Lon = -180, Lat = current.Lat };
                    }
                    else if (previous.Lon < -150 && current.Lon > 150)
                    {
                        paths[pathID].Add(new Point() { X = -180, Y = current.Lat });
                        paths.Add(new List<Point>());
                        pathID++;
                        current = new GeoLocation() { Lon = 180, Lat = current.Lat };
                    }
                }

                paths[pathID].Add(new Point() { X = dest.Lon, Y = dest.Lat });

            }

            return paths;

        }

        public static double CalcBearing(GeoLocation origin, GeoLocation dest)
        {
            origin = WorldUtils.ToRadianLocation(origin);
            dest = WorldUtils.ToRadianLocation(dest);

            double range = (dest.Lon - origin.Lon);

            double y = Math.Sin(range) * Math.Cos(dest.Lat);
            double x = Math.Cos(origin.Lat) * Math.Sin(dest.Lat) - Math.Sin(origin.Lat) * Math.Cos(dest.Lat) * Math.Cos(range);
            double angle = Math.Atan2(y, x);

            return WorldUtils.ToDegreesNormalized(angle);
        }

        public static GeoLocation CalcDestination(GeoLocation origin, double bearing, double distance)
        {
            double radius = 6371.0;

            origin = WorldUtils.ToRadianLocation(origin);
            bearing = WorldUtils.ToRadians(bearing);

            distance = distance / radius;

            double lat = Math.Asin(Math.Sin(origin.Lat) * Math.Cos(distance) +
               Math.Cos(origin.Lat) * Math.Sin(distance) * Math.Cos(bearing));
            double x = Math.Sin(bearing) * Math.Sin(distance) * Math.Cos(origin.Lat);
            double y = Math.Cos(distance) - Math.Sin(origin.Lat) * Math.Sin(origin.Lat);
            double lon = origin.Lon + Math.Atan2(x, y);
            // normalize lon to coordinate between -180º and +180º
            lon = (lon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

            lon = WorldUtils.ToDegrees(lon);
            lat = WorldUtils.ToDegrees(lat);

            return new GeoLocation() { Lat = lat, Lon = lon };
        }

        public static double CalcDistance(GeoLocation origin, GeoLocation dest)
        {
            origin = WorldUtils.ToRadianLocation(origin);
            dest = WorldUtils.ToRadianLocation(dest);

            double sinProd = Math.Sin(origin.Lat) * Math.Sin(dest.Lat);
            double cosProd = Math.Cos(origin.Lat) * Math.Cos(dest.Lat);
            double lonDelta = (dest.Lon - origin.Lon);

            double angle = Math.Acos(sinProd + cosProd * Math.Cos(lonDelta));
            double distance = angle * 6371.0;
            return distance;
        }

        public static GeoLocation ToRadianLocation(GeoLocation geoPoint)
        {
            double x = WorldUtils.ToRadians(geoPoint.Lon);
            double y = WorldUtils.ToRadians(geoPoint.Lat);

            return new GeoLocation() { Lon = x, Lat = y };
        }

        public static double ToRadians(double degrees)
        {
            return degrees * Math.PI / 180;
        }

        public static double ToDegrees(double radians)
        {
            return (radians * 180.0 / Math.PI);
        }

        public static double ToDegreesNormalized(double radians)
        {
            double degrees = WorldUtils.ToDegrees(radians);
            degrees = (degrees + 360) % 360;
            return degrees;
        }

        public static string ToStringLat(double latitude)
        {
            string str = Math.Abs(latitude) + "°";
            return latitude > 0 ? str + "N" : str + "S";
        }

        public static string ToStringLon(double coordinate)
        {
            double val = Math.Abs(coordinate);
            string str = val.ToString();
            return coordinate > 0 ? str + "°E" : str + "°W";
        }

        public static string ToStringAbbr(double value)
        {
            if (value > 1000000000000)
            {
                return (value / 1000000000000).ToString("N1") + " T";
        }
            else if (value > 1000000000)
            {
                return (value / 1000000000).ToString("N1") + " B";
          }
            else if (value > 1000000)
            {
                return (value / 1000000).ToString("N1") + " M";
          }
            else if (value > 1000)
            {
                return (value / 1000).ToString("N1") + " K";
          }
            return value.ToString("N0");
        }

        public static double GetLongitude(GeoLocation location)
        {
            return location.Lon;
        }

        public static double GetLatitude(GeoLocation location)
        {
            return location.Lat;
        }

        public static Rect GetBounds(List<GeoLocation> locations)
        {
            double minLat = 90;
            double maxLat = -90;
            double minLon = 180;
            double maxLon = -180;

            foreach (GeoLocation gl in locations)
            {
                double curLon = WorldUtils.GetLongitude(gl);
                double curLat = WorldUtils.GetLatitude(gl);

                if (!double.IsNaN(curLon))
                {
                    minLon = Math.Min(minLon, curLon);
                    maxLon = Math.Max(maxLon, curLon);
                }

                if (!double.IsNaN(curLat))
                {
                    minLat = Math.Min(minLat, curLat);
                    maxLat = Math.Min(maxLat, curLat);
                }
            }

            Rect geoBounds = new Rect(minLon, minLat, Math.Abs(maxLon - minLon), Math.Abs(maxLat - minLat));
            return geoBounds;
        }

        public static List<Point> GetNightShapes()
        {
            List<Point> line = new List<Point>();

            for (int lon = -180; lon <= 180; lon += 1)
            {
                double x = lon;
                double y = 75 * Math.Cos(lon * Math.PI / 180);
                line.Add(new Point(x, y));
            }

            return line;
        }
    }
```

## API References
[`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap)
