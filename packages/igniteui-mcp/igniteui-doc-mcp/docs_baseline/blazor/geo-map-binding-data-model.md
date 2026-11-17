---
title: "Blazor Map | Data Visualization Tools | Binding Geographic Data Models | Infragistics"
description: Use Infragistics' Blazor map to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. View Ignite UI for Blazor map demos!
keywords: "Blazor map, binding data models, Ignite UI for Blazor, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "GeographicScatterAreaSeries", "GeographicHighDensityScatterSeries", "GeographicProportionalSymbolSeries", "GeographicContourLineSeries", "GeographicShapeSeries", "GeographicPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "The Ignite UI for Blazor map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps."
platformType: xplat
_tocName: Binding Data Model
_premium: true
---
# Blazor Binding Geographic Data Models

The Ignite UI for Blazor map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=DataSource) property of geographic series is used for the purpose of binding to data models. This property can be bound an array of custom objects.

## Blazor Binding Geographic Data Models Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            @for (int i = 0; i < this.Data.Count; i++)
            {
                FlightInfo info = this.Data[i];
                List<WorldCity> symbolData = new List<WorldCity>() { info.Origin, info.Dest };

                GeoLocation geoOrigin = new GeoLocation() { Lat = info.Origin.Lat, Lon = info.Origin.Lon };
                GeoLocation geoDest = new GeoLocation() { Lat = info.Dest.Lat, Lon = info.Dest.Lon };

                List<List<Point>> geoPath = WorldUtils.CalcPaths(geoOrigin, geoDest);
                double geoDistance = WorldUtils.CalcDistance(geoOrigin, geoDest);

                FlightInfo route = new FlightInfo()
                {
                    Points =  geoPath,
                    Origin = info.Origin,
                    Dest = info.Dest,
                    Distance = geoDistance,
                    Time = geoDistance / 850
                };

                List<FlightInfo> geoRoute = new List<FlightInfo>() { route };

                <IgbGeographicSymbolSeries DataSource="symbolData" MarkerType="MarkerType.Circle"
                                        LatitudeMemberPath="Lat" LongitudeMemberPath="Lon"
                                        MarkerBrush="White" MarkerOutline="@info.Color"
                                        Thickness="1">
                </IgbGeographicSymbolSeries>

                <IgbGeographicPolylineSeries DataSource="geoRoute" ShapeMemberPath="Points"
                                          ShapeStrokeThickness="9" ShapeOpacity="0.5"
                                          ShapeStroke="@info.Color">
                </IgbGeographicPolylineSeries>
            }

        </IgbGeographicMap>
    </div>
</div>

@code {

    private List<FlightInfo> Data;

    protected override void OnInitialized()
    {
        WorldCity cityDAL = new WorldCity() { Lat = 32.763, Lon = -96.663, Country = "US", Name = "Dallas" };
        WorldCity citySYD = new WorldCity() { Lat = -33.889, Lon = 151.028, Country = "Australia", Name = "Sydney" };
        WorldCity cityNZL = new WorldCity() { Lat = -36.848, Lon = 174.763, Country = "New Zealand", Name = "Auckland" };
        WorldCity cityQTR = new WorldCity() { Lat = 25.285, Lon = 51.531, Country = "Qatar", Name = "Doha" };
        WorldCity cityPAN = new WorldCity() { Lat = 8.949, Lon = -79.400, Country = "Panama", Name = "Panama" };
        WorldCity cityCHL = new WorldCity() { Lat = -33.475, Lon = -70.647, Country = "Chile", Name = "Santiago" };
        WorldCity cityJAP = new WorldCity() { Lat = 35.683, Lon = 139.809, Country = "Japan", Name = "Tokyo" };
        WorldCity cityALT = new WorldCity() { Lat = 33.795, Lon = -84.349, Country = "US", Name = "Atlanta" };
        WorldCity cityJOH = new WorldCity() { Lat = -26.178, Lon = 28.004, Country = "South Africa", Name = "Johannesburg" };
        WorldCity cityNYC = new WorldCity() { Lat = 40.750, Lon = -74.0999, Country = "US", Name = "New York" };
        WorldCity citySNG = new WorldCity() { Lat = 1.229, Lon = 104.177, Country = "Singapore", Name = "Singapore" };
        WorldCity cityMOS = new WorldCity() { Lat = 55.750, Lon = 37.700, Country = "Russia", Name = "Moscow" };
        WorldCity cityROM = new WorldCity() { Lat = 41.880, Lon = 12.520, Country = "Italy", Name = "Roma" };
        WorldCity cityLAX = new WorldCity() { Lat = 34.000, Lon = -118.25, Country = "US", Name = "Los Angeles" };

        this.Data = new List<FlightInfo>() {
            new FlightInfo(){ Origin = cityDAL, Dest = citySNG, Color = "Green" },
            new FlightInfo(){ Origin = cityMOS, Dest = cityNZL, Color = "Red" },
            new FlightInfo(){ Origin = cityCHL, Dest = cityJAP, Color = "Blue" },
            new FlightInfo(){ Origin = cityPAN, Dest = cityROM, Color = "Orange" },
            new FlightInfo(){ Origin = cityALT, Dest = cityJOH, Color = "Black" },
            new FlightInfo(){ Origin = cityNYC, Dest = cityQTR, Color = "Purple" },
            new FlightInfo(){ Origin = cityLAX, Dest = citySYD, Color = "Gray" },
        };
    }
}
```

The following table summarized data structures required for each type of geographic series:

| Geographic Series  | Properties   | Description   |
|--------------|---------------| ---------------|
| [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) | [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath), [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) | [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=LongitudeMemberPath), [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=LatitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries) | [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LongitudeMemberPath), [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LatitudeMemberPath), [`RadiusMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for size/radius of symbols |
| [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) | [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LongitudeMemberPath), [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LatitudeMemberPath), [`ColorMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
| [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) | [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LongitudeMemberPath), [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LatitudeMemberPath), [`ValueMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=ValueMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
|[`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries)|[`ShapeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=ShapeMemberPath)|Specifies the name of data column of [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=DataSource) items that contains the geographic points of shapes. This property must be mapped to an array of arrays of objects with x and y properties. |
|[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)|[`ShapeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries&member=ShapeMemberPath)|Specifies the name of data column of [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries&member=DataSource) items that contains the geographic coordinates of lines. This property must be mapped to an array of arrays of objects with x and y properties. |

## Code Snippet
The following code shows how to bind the [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) to a custom data model that contains geographic locations of some cities of the world stored using longitude and latitude coordinates. Also, we use the [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) to plot shortest geographic path between these locations using the great circle maths of `MapGeodesics`, shown in full with the code below

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    Zoomable="true" />
```

```razor
@using IgniteUI.Blazor.Controls;
@using System;
@using System.Collections.Generic;
@using System.Linq;
// ...
public class GeoLocation
{
        public double Lat { get; set; }
        public double Lon { get; set; }
}

public class WorldCity
{
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public string Name { get; set; }
        public bool Cap { get; set; }
}

public static class WorldUtils
{
        public static List<List<Point>> CalcPaths(GeoLocation origin, GeoLocation dest)
        {
            int interval = 200;
            var paths = new List<List<Point>>() { new List<Point>() };
            int pathID = 0;
            double distance = WorldUtils.CalcDistance(origin, dest);

            if (distance <= interval)
            {
                paths[pathID].Add(new Point() { X = dest.Lon, Y = dest.Lat });
            }
            else
            {
                GeoLocation current = origin;
                GeoLocation previous = origin;

                for(int dist = interval; dist <= distance; dist += interval)
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
                    else if(previous.Lon < -150 && current.Lon > 150)
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

            foreach(GeoLocation gl in locations)
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

            for(int lon = -180; lon <= 180; lon += 1)
            {
                double x = lon;
                double y = 75 * Math.Cos(lon * Math.PI / 180);
                line.Add(new Point(x, y));
            }

            return line;
        }
}

public class FlightInfo
{
        public WorldCity Origin { get; set; }
        public WorldCity Dest { get; set; }
        public double Distance { get; set; }
        public double Time { get; set; }
        public List<List<Point>> Points { get; set; }
        public string Color { get; set; }
}
// ...
public void MapBindingDataModelOnViewInit()
{
    var geoMap = this.geoMap;
    geoMap.UpdateZoomWindow(new Rect() { Left = 0.2, Top = 0.1, Width = 0.6, Height = 0.6 });

    var CityDAL = new WorldCity() { Lat = 32.763, Lon = -96.663, Country = "US", Name = "Dallas" };
    var CitySYD = new WorldCity() { Lat = -33.889, Lon = 151.028, Country = "Australia", Name = "Sydney" };
    var CityNZL = new WorldCity() { Lat = -36.848, Lon = 174.763, Country = "New Zealand", Name = "Auckland" };
    var CityQTR = new WorldCity() { Lat = 25.285, Lon = 51.531, Country = "Qatar", Name = "Doha" };
    var CityPAN = new WorldCity() { Lat = 8.949, Lon = -79.4, Country = "Panama", Name = "Panama" };
    var CityCHL = new WorldCity() { Lat = -33.475, Lon = -70.647, Country = "Chile", Name = "Santiago" };
    var CityJAP = new WorldCity() { Lat = 35.683, Lon = 139.809, Country = "Japan", Name = "Tokyo" };
    var CityALT = new WorldCity() { Lat = 33.795, Lon = -84.349, Country = "US", Name = "Atlanta" };
    var CityJOH = new WorldCity() { Lat = -26.178, Lon = 28.004, Country = "South Africa", Name = "Johannesburg" };
    var CityNYC = new WorldCity() { Lat = 40.75, Lon = -74.0999, Country = "US", Name = "New York" };
    var CitySNG = new WorldCity() { Lat = 1.229, Lon = 104.177, Country = "Singapore", Name = "Singapore" };
    var CityMOS = new WorldCity() { Lat = 55.75, Lon = 37.7, Country = "Russia", Name = "Moscow" };
    var CityROM = new WorldCity() { Lat = 41.88, Lon = 12.52, Country = "Italy", Name = "Roma" };
    var CityLAX = new WorldCity() { Lat = 34.0, Lon = -118.25, Country = "US", Name = "Los Angeles" };

    var flights = new List<FlightInfo>() {
        new FlightInfo() { Origin = CityDAL, Dest = CitySNG, Color = "Green" },
        new FlightInfo() { Origin = CityMOS, Dest = CityNZL, Color = "Red" },
        new FlightInfo() { Origin = CityCHL, Dest = CityJAP, Color = "Blue" },
        new FlightInfo() { Origin = CityPAN, Dest = CityROM, Color = "Orange" },
        new FlightInfo() { Origin = CityALT, Dest = CityJOH, Color = "Black" },
        new FlightInfo() { Origin = CityNYC, Dest = CityQTR, Color = "Purple" },
        new FlightInfo() { Origin = CityLAX, Dest = CitySYD, Color = "Gray" }
    };

    // the route first, so that the cities at either end of it draw on top
    foreach (var flight in flights)
    {
        AddFlightRoute(geoMap, flight);
        AddFlightCities(geoMap, flight);
    }
}

/// <summary>The flight itself, as a great circle path between its two cities.</summary>
public void AddFlightRoute(IgbGeographicMap geoMap, FlightInfo flight)
{
    var geoOrigin = new GeoLocation() { Lat = flight.Origin.Lat, Lon = flight.Origin.Lon };
    var geoDest = new GeoLocation() { Lat = flight.Dest.Lat, Lon = flight.Dest.Lon };
    var geoDistance = WorldUtils.CalcDistance(geoOrigin, geoDest);
    var geoRoutes = new List<FlightInfo>() {
        new FlightInfo() {
            Points = WorldUtils.CalcPaths(geoOrigin, geoDest),
            Origin = flight.Origin,
            Dest = flight.Dest,
            Distance = geoDistance,
            Time = geoDistance / 850
        }
    };

    var lineSeries = new IgbGeographicPolylineSeries();
    lineSeries.DataSource = geoRoutes;
    lineSeries.ShapeMemberPath = "Points";
    lineSeries.ShapeStrokeThickness = 9;
    lineSeries.ShapeOpacity = 0.5;
    lineSeries.ShapeStroke = flight.Color;
    geoMap.Series.Add(lineSeries);
}

/// <summary>The cities at either end, in the flight's own colour.</summary>
public void AddFlightCities(IgbGeographicMap geoMap, FlightInfo flight)
{
    var geoLocations = new List<WorldCity>() { flight.Origin, flight.Dest };

    var symbolSeries = new IgbGeographicSymbolSeries();
    symbolSeries.DataSource = geoLocations;
    symbolSeries.MarkerType = MarkerType.Circle;
    symbolSeries.LatitudeMemberPath = "Lat";
    symbolSeries.LongitudeMemberPath = "Lon";
    symbolSeries.MarkerBrush = "White";
    symbolSeries.MarkerOutline = flight.Color;
    symbolSeries.Thickness = 1;
    geoMap.Series.Add(symbolSeries);
}
```

## API References
[`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries)
[`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries)
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries)
[`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries)
[`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries)
