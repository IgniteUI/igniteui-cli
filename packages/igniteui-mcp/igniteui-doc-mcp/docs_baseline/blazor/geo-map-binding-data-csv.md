---
title: "Blazor Map | Data Visualization Tools | Binding CSV Data | Infragistics"
description: Learn how to use Infragistics' Blazor map to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View Ignite UI for Blazor map demos!
keywords: "Blazor map, plot data, Ignite UI for Blazor, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "GeographicHighDensityScatterSeries"]
namespace: Infragistics.Controls.Maps
llms:
  description: "With the Ignite UI for Blazor map component, you can plot geographic data loaded from various file types."
platformType: xplat
_tocName: Binding CSV File
_premium: true
---
# Blazor Binding CSV Files with Geographic Locations

With the Ignite UI for Blazor map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from a comma separated values (CSV) file.

## Blazor Binding CSV Files with Geographic Locations Example

```razor
@using IgniteUI.Blazor.Controls

@inject HttpClient Http

<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap @ref="MapRef" Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicHighDensityScatterSeries DataSource="Data"
                    LatitudeMemberPath="Lat"
                    LongitudeMemberPath="Lon"
                    HeatMaximumColor="Red"
                    HeatMinimumColor="Black"
                    HeatMinimum="0"
                    HeatMaximum="5"
                    PointExtent="1"
                    MouseOverEnabled="true" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private List<WorldPlaceCsv> Data;
    public IgbGeographicMap MapRef;

    protected override async Task OnInitializedAsync()
    {
        string url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        string csv = await Http.GetStringAsync(url);
        var csvLines = csv.Split(Environment.NewLine);
        var dataItems = new List<WorldPlaceCsv>();

        for (int i = 1; i < csvLines.Length - 1; i++)
        {
            var columns = csvLines[i].Split(",");
            var location = new WorldPlaceCsv() {
                Lat =  double.Parse(columns[1]),
                Lon = double.Parse(columns[2]),
                Name = columns[0],
                Pop = double.Parse(columns[3])
            };

            dataItems.Add(location);
        }

        this.Data = dataItems;
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (MapRef != null && !firstRender)
        {
            var geoRegion = new Rect(-130, 15, new Size(65, 35));
            MapRef.ZoomToGeographic(geoRegion);
        }
    }

    public class WorldPlaceCsv {
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
Here is an example of data from CSV file:

```csv
CityName,Lat,Lon,Population
New York,40.6943,-73.9249,19354922
Los Angeles,34.1139,-118.4068,12815475
```

```razor
CityName,Lat,Lon,Population
New York,40.6943,-73.9249,19354922
Los Angeles,34.1139,-118.4068,12815475
```

## Code Snippet
The following code loads and binds [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) in the map component to an array of objects created from loaded CSV file with geographic locations.

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    Zoomable="true" />
```

```razor
public class WorldPlaceCsv
{
    public string Name { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public double Population { get; set; }
}

public async void MapBindingDataCsvOnViewInit()
{
    var map = this.geoMap;
    var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
    var client = new HttpClient();
    var csv = await client.GetStringAsync(url);
    var csvLines = csv.Split('\n');
    var geoLocations = new List<WorldPlaceCsv>();
    // parsing CSV data and creating geographic locations
    for (int i = 1; i < csvLines.Length; i++)
    {
        var columns = csvLines[i].Split(',');
        if (columns.Length < 4) continue;
        geoLocations.Add(new WorldPlaceCsv
        {
            Name = columns[0],
            Latitude = double.Parse(columns[1]),
            Longitude = double.Parse(columns[2]),
            Population = double.Parse(columns[3])
        });
    }
    // creating the series with the loaded data
    var series = new IgbGeographicHighDensityScatterSeries
    {
        Name = "hdSeries",
        DataSource = geoLocations,
        LatitudeMemberPath = "Latitude",
        LongitudeMemberPath = "Longitude",
        HeatMaximumColor = "Red",
        HeatMinimumColor = "Black",
        HeatMinimum = 0,
        HeatMaximum = 5,
        PointExtent = 1,
        MouseOverEnabled = true
    };
    map.Series.Add(series);

    var geoBounds = new Rect() { Left = -130, Top = 15, Width = Math.Abs(-130 + 65), Height = Math.Abs(50 - 15) };
    // zooming to the bounds of the lower 48 states
    map.ZoomToGeographic(geoBounds);
}
```

## API References
[`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries)
