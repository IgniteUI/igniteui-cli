---
title: Blazor Map | Data Visualization Tools | Binding JSON Files | Infragistics
_description: Learn how to use Infragistics' Blazor map to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View Ignite UI for Blazor map demos!
_keywords: Blazor map, JSON files, Ignite UI for Blazor, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series"]
namespace: Infragistics.Controls.Maps
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

<div class="divider--half"></div>

## Data Example

Here is an example of data from JSON file:

```json
[
   { "name": "Sydney Island", "lat": -16.68972, "lon": 139.45917 },
   { "name": "Sydney Creek",  "lat": -16.3,     "lon": 128.95 },
   { "name": "Mount Sydney",  "lat": -21.39864, "lon": 121.193 },
 // ...
]
```

## Code Snippet

The following code loads and binds [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html) in the map component to an array of objects created from loaded JSON file with geographic locations:

```razor
@using System.Net.Http.Json
@using IgniteUI.Blazor.Controls

@inject HttpClient Http

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicSymbolSeries DataSource="DataSource"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerBrush="LightGray"
        MarkerOutline="Black" />
</IgbGeographicMap>

@code {

    private WorldPlaceJson[] DataSource;

    protected override async Task OnInitializedAsync()
    {
        var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
        var http = new HttpClient();
        this.DataSource = await http.GetFromJsonAsync<WorldPlaceJson[]>(url);

        await Task.Delay(1);
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

## API References

- [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html)
- [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html)
- `GeographicMap`
- `DataSource`
- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath)
