---
title: "Blazor Map | Data Visualization Tools | Scatter High Density Series | Data Binding | Infragistics"
description: Use Infragistics Blazor map's scatter high density series to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time. Learn more about Ignite UI for Blazor map's series!
keywords: "Blazor map, scatter high density series, Ignite UI for Blazor, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "Series"]
llms:
  description: "In Blazor map component, you can use the GeographicHighDensityScatterSeries to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time."
platformType: xplat
_tocName: Geographic High Density Map
_premium: true
---
# Blazor Geographic High Density Map

In Blazor map component, you can use the [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

## Blazor Geographic High Density Map Example

```razor
@using IgniteUI.Blazor.Controls

@inject HttpClient Http

<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap @ref="MapRef" Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicHighDensityScatterSeries DataSource="Data"
                LongitudeMemberPath="Lon"
                LatitudeMemberPath="Lat"
                HeatMaximumColor="Red"
                HeatMinimumColor="10"
                HeatMaximum="5"
                HeatMinimum="0"
                PointExtent="1"
                MouseOverEnabled="true" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    public List<GeoPlace> Data;
    public Rect GeoBound;
    public IgbGeographicMap MapRef;
    public bool MapZoomed = false;
    public bool MapRendered = false;

    protected override async Task OnInitializedAsync()
    {
        this.Data = new GeoPlaceData();

        this.GeoBound = new Rect(100, -40, new Size(50, 25));
        await Task.Delay(100);
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (MapRef != null && !firstRender)
        {
            Task.Delay(500).ContinueWith((t) => OnMapRender());
        }
    }

    private void OnMapRender()
    {
        if (MapRef != null)
        {
            MapRef.ZoomToGeographic(this.GeoBound);
        }
    }


}
```

The demo above shows the [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) series in the map component bound to hundreds or even thousands of data points representing Australia’s population density. The map plot area with more densely populated data points represented as coalescences of red pixels and loosely distributed data points by discrete blue pixels.

Because there are so many data points, the series displays the scatter data as tiny dots as opposed to full size markers, and displays areas with the most data using a higher color density representing a cluster of data points.

## Data Requirements
Similar to other types of scatter series in the map control, the [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) series has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=DataSource) property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=LongitudeMemberPath) and [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=LatitudeMemberPath) properties to map these data columns.

### Data Binding
The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property|Type|Description |
| ---|---|--- |
| [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=DataSource)|any|Gets or sets the items source |
| [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=LongitudeMemberPath)|string|Uses the DataSource property to determine the location of the longitude values on the assigned items |
| [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=LatitudeMemberPath)|string|Uses the DataSource property to determine the location of the latitude values on the assigned items |

## Heat Color Scale
The Heat Color Scale, an optional feature, determines the color pattern within the series. The following table summarizes the properties used for determining the color scale.

| Property |Type|Description |
| ---|---|--- |
| [`HeatMinimum`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMinimum)|Double|Defines the double value representing the minimum end of the color scale |
| [`HeatMaximum`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMaximum)|Double|Defines the double value representing the maximum end of the color scale |
| [`HeatMinimumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMinimumColor)|Color|Defines the point density color used at the bottom end of the color scale |
| [`HeatMaximumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMaximumColor)|Color|Defines the point density color used at the top end of the color scale |

## Code Example

The following code demonstrates how set the [`HeatMinimumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMinimumColor) and [`HeatMaximumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMaximumColor) properties of the [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries)

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    Zoomable="true" />
```

```razor
public class AusPlace
{
    public string Name { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}

public async void MapTypeScatterDensitySeriesOnViewInit()
{
    var map = this.geoMap;
    var url = "https://static.infragistics.com/xplatform/data/AusPlaces.csv";
    var client = new HttpClient();
    var csv = await client.GetStringAsync(url);
    var csvLines = csv.Split('\n');
    var geoLocations = new List<AusPlace>();
    // parsing CSV data and creating geographic locations
    for (int i = 1; i < csvLines.Length; i++)
    {
        var columns = csvLines[i].Split(',');
        if (columns.Length < 3) continue;
        geoLocations.Add(new AusPlace
        {
            Name = columns[0],
            Longitude = double.Parse(columns[1]),
            Latitude = double.Parse(columns[2])
        });
    }
    // creating the high density series with the loaded data
    var series = new IgbGeographicHighDensityScatterSeries
    {
        DataSource = geoLocations,
        LongitudeMemberPath = "Longitude",
        LatitudeMemberPath = "Latitude",
        HeatMaximumColor = "Red",
        HeatMinimumColor = "Black",
        HeatMinimum = 0,
        HeatMaximum = 5,
        PointExtent = 1,
        MouseOverEnabled = true
    };
    map.Series.Add(series);

    var bounds = new Rect() { Left = 110, Top = -10, Width = 45, Height = -35 };
    map.ZoomToGeographic(bounds);
}
```

## API References
[`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries)
