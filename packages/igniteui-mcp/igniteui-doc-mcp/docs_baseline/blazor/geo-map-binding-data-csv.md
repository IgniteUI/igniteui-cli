---
title: Blazor Map | Data Visualization Tools | Binding CSV Data | Infragistics
_description: Learn how to use Infragistics' Blazor map to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View Ignite UI for Blazor map demos!
_keywords: Blazor map, plot data, Ignite UI for Blazor, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicHighDensityScatterSeries"]
namespace: Infragistics.Controls.Maps
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

<div class="divider--half"></div>

## Data Example

Here is an example of data from CSV file:

```razor
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## Code Snippet

The following code loads and binds [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html) in the map component to an array of objects created from loaded CSV file with geographic locations.

```razor
@using IgniteUI.Blazor.Controls
@inject HttpClient Http

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicHighDensityScatterSeries DataSource="DataSource"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        HeatMaximumColor="Red"
        HeatMinimumColor="Black"
        HeatMinimum="0"
        HeatMaximum="5"
        PointExtent="1"
        MouseOverEnabled="true" />
</IgbGeographicMap>

@code {
    private List<WorldPlaceCsv> DataSource;

    protected override async Task OnInitializedAsync()
    {
        string url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        string csv = await Http.GetStringAsync(url);

        string[] csvLines = csv.Split(Environment.NewLine);

        List<WorldPlaceCsv> dataItems = new List<WorldPlaceCsv>();

        for (int i = 1; i < csvLines.Length - 1; i++)
        {
            string[] columns = csvLines[i].Split(",");

            WorldPlaceCsv location = new WorldPlaceCsv() {
                Lat=  double.Parse(columns[1]),
                Lon= double.Parse(columns[2]),
                Name= columns[0],
                Pop= double.Parse(columns[3])
            };

            dataItems.Add(location);
        }

        this.DataSource = dataItems;

        await Task.Delay(1);
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

## API References

- [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html)
- `DataSource`
- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_LongitudeMemberPath)
- [`HeatMaximumColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_HeatMaximumColor)
- [`HeatMinimumColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_HeatMinimumColor)
- [`PointExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_PointExtent)
