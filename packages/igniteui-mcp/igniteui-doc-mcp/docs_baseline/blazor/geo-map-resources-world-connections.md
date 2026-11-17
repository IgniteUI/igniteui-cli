---
title: "Blazor Map | World Connections | Data Source | Infragistics"
description: Use Infragistics' Blazor map data utility to generate locations of airports, flight paths and geographic gridlines. View Ignite UI for Blazor map demos!
keywords: "Blazor map, map data, Ignite UI for Blazor, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap"]
llms:
  description: "The resource topic provides implementation of data utility for generating locations of airports, flight paths, and geographic gridlines."
platformType: xplat
_tocName: World Connections
_premium: true
---
# Blazor World Connections

The resource topic provides implementation of data utility for generating locations of airports, flight paths, and geographic gridlines. You can use these data sources as reference point for creating your own geographic data. Note that this utility depends on [WorldUtil](./geo-map-resources-world-util.md) and [WorldLocations](./geo-map-resources-world-locations.md) scripts.

## Code Snippet

```razor
public static class WorldConnections
{
    public static List<FlightInfo> Flights { get; set; }
    public static List<WorldCity> Airports { get; set; }

    public static Dictionary<string, string> FlightsLookup = new Dictionary<string, string>();
    public static Dictionary<string, WorldCity> AirportsLookup = new Dictionary<string, WorldCity>();

    static WorldConnections()
    {
        Init();
    }

    public static List<FlightInfo> GetFlights()
    {
        return Flights;
    }

    public static List<WorldCity> GetAirports()
    {
        return Airports;
    }

    public static int ComparePopulation(WorldCity a, WorldCity b)
    {
        if(a.Pop < b.Pop)
        {
            return 1;
        }
        if(a.Pop > b.Pop)
        {
            return -1;
        }

        return 0;
    }

    static Random rand = new Random();

    public static void Init()
    {
        Flights = new List<FlightInfo>();
        Airports = new List<WorldCity>();

        var fullCityList = WorldLocations.GetAll();
        var cities = new List<WorldCity>();

        var countries = new Dictionary<string, int>();

        foreach (var city in fullCityList)
        {
            if (countries.ContainsKey(city.Country))
            {
                if (countries[city.Country] < 2)
                {
                    cities.Add(city);
                    countries[city.Country]++;
                }
            }
            else
            {
                cities.Add(city);
                countries.Add(city.Country, 1);
            }
        }

        fullCityList.Sort(new Comparison<WorldCity>(ComparePopulation));

        int count = cities.Count;
        int flightsCount = 0;

        double minDistance = 200;
        double maxDistance = 10000;
        double flightsLimit = 250;

        for (int i=0; i<count; i++)
        {
            WorldCity origin = cities[i];
            int connectionsCount = 0;
            double connectionsMax = Math.Min(20, Math.Round(origin.Pop * 4));

            for (int j=0; j<count; j++)
            {
                WorldCity dest = cities[j];

                GeoLocation originGeo = new GeoLocation() { Lat = origin.Lat, Lon = origin.Lon };
                GeoLocation destGeo = new GeoLocation() { Lat = dest.Lat, Lon = dest.Lon };

                if(origin.Name != dest.Name)
                {
                    string route = origin.Name + "-" + dest.Name;
                    bool routeIsValid = !FlightsLookup.ContainsKey(route);

                    double distance = Math.Round(WorldUtils.CalcDistance(originGeo, destGeo));
                    bool distanceIsValid = distance > minDistance && distance < maxDistance;

                    double pass = Math.Round(rand.NextDouble() * 200) + 150;
                    double time = distance / 800;
                    bool trafficIsValid = origin.Pop > 3 && dest.Pop > 1.0;

                    if(routeIsValid && distanceIsValid && trafficIsValid)
                    {
                        FlightsLookup.Add(route, route);

                        List<List<Point>> paths = WorldUtils.CalcPaths(originGeo, destGeo);
                        flightsCount++;
                        connectionsCount++;

                        string id = origin.Name.Substring(0, 3).ToUpper() + "-" + flightsCount;
                        FlightInfo flight = new FlightInfo() { ID = id, Origin = origin, Dest = dest, Time = time, Passengers = pass, Distance = distance, Points = paths };
                        Flights.Add(flight);
                    }

                    if (connectionsCount > connectionsMax)
                    {
                        break;
                    }
                    if (flightsCount > flightsLimit)
                    {
                        break;
                    }
                }
            }

        }

        foreach(FlightInfo flight in Flights)
        {
            AddAirport(flight.Origin);
            AddAirport(flight.Dest);
        }

        Airports = AirportsLookup.Values.ToList();
    }

    public static void AddAirport(WorldCity city)
    {
        if (!AirportsLookup.ContainsKey(city.Name))
        {
            AirportsLookup.Add(city.Name, city);
        }
    }

    public static List<CoordinateLine> GetGridlines()
    {
        List<CoordinateLine> gridlines = new List<CoordinateLine>();

        List<List<Point>> latLines = new List<List<Point>>();
        List<List<Point>> lonLines = new List<List<Point>>();

        for (int lon = -180; lon <= 180; lon += 30)
        {
            List<Point> points = new List<Point>();
            points.Add(new Point(lon, -90));
            points.Add(new Point(lon, 90));

            lonLines.Add(points);
        }

        for (int lat= -90; lat<= 90; lat += 30)
        {
            List<Point> points = new List<Point>();
            points.Add(new Point(-180, lat));
            points.Add(new Point(180, lat));

            latLines.Add(points);
        }

        CoordinateLine lines1 = new CoordinateLine() { Points = lonLines };
        CoordinateLine lines2 = new CoordinateLine() { Points = latLines };

        gridlines.Add(lines1);
        gridlines.Add(lines2);

        return gridlines;
    }
}

public class FlightInfo
{
    public string ID { get; set; }
    public WorldCity Origin { get; set; }
    public WorldCity Dest { get; set; }
    public double Time { get; set; }
    public double Passengers { get; set; }
    public double Distance { get; set; }
    public List<List<Point>> Points { get; set; }
    public string Color { get; set; }
}

public class CoordinateLine
{
    public List<List<Point>> Points { get; set; }
}
```

## API References
[`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap)
