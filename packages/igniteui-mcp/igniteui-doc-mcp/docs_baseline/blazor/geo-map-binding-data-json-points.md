---
title: "Blazor Map | Data Visualization Tools | Binding JSON Files | Infragistics"
description: Learn how to use Infragistics' Blazor map to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View Ignite UI for Blazor map demos!
keywords: "Blazor map, JSON files, Ignite UI for Blazor, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "Series"]
namespace: Infragistics.Controls.Maps
llms:
  description: "With the Ignite UI for Blazor map, you can plot geographic data loaded from various file types."
platformType: xplat
_tocName: Binding JSON File
_premium: true
---
# Blazor Binding JSON Files with Geographic Locations

With the Ignite UI for Blazor map, you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

## Blazor Binding JSON Files with Geographic Locations Example

```razor
@using System.Net.Http.Json
@using IgniteUI.Blazor.Controls

@inject HttpClient Http

<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicSymbolSeries DataSource="Data"
                                    MarkerType="MarkerType.Circle"
                                    LatitudeMemberPath="Lat"
                                    LongitudeMemberPath="Lon"
                                    MarkerBrush="LightGray"
                                    MarkerOutline="Black" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private WorldPlaceJson[] Data;

    protected override async Task OnInitializedAsync()
    {
        var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
        var http = new HttpClient();
        this.Data = await http.GetFromJsonAsync<WorldPlaceJson[]>(url);


    }

    public class WorldPlaceJson {

        public string Name { get; set; }

        public double Lat { get; set; }

        public double Lon { get; set; }

        public double Pop { get; set; }

        public string Country { get; set; }
        public bool Cap { get; set; }
    }
}
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
The following code loads and binds [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) in the map component to an array of objects created from loaded JSON file with geographic locations:

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    Zoomable="true" />
```

```razor
public class WorldPlaceJson
{
    public string Name { get; set; }
    public double Lat { get; set; }
    public double Lon { get; set; }
    public double Pop { get; set; }
    public string Country { get; set; }
    public bool Cap { get; set; }
}

public async void MapBindingDataJsonPointsOnViewInit()
{
    var map = this.geoMap;
    var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
    var client = new HttpClient();
    var json = await client.GetStringAsync(url);
    var geoLocations = new List<WorldPlaceJson>();
    using (var document = JsonDocument.Parse(json))
    {
        foreach (var item in document.RootElement.EnumerateArray())
        {
            if (!item.GetProperty("cap").GetBoolean()) continue;
            geoLocations.Add(new WorldPlaceJson
            {
                Name = item.GetProperty("name").GetString(),
                Lat = item.GetProperty("lat").GetDouble(),
                Lon = item.GetProperty("lon").GetDouble(),
                Pop = item.GetProperty("pop").GetDouble(),
                Country = item.GetProperty("country").GetString(),
                Cap = item.GetProperty("cap").GetBoolean()
            });
        }
    }
    var series = new IgbGeographicSymbolSeries
    {
        DataSource = geoLocations,
        LatitudeMemberPath = "Lat",
        LongitudeMemberPath = "Lon",
        MarkerBrush = "rgba(255, 255, 255, 1.0)",
        MarkerOutline = "rgba(135, 5, 255, 1.0)",
        MarkerThickness = 1,
        MarkerType = MarkerType.Circle
    };
    map.Series.Add(series);
}
```

## API References
[`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries)
[`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries)
[`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap)
[`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=DataSource)
[`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath)
[`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath)
