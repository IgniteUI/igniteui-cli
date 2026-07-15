---
title: Blazor Map | Data Visualization Tools | Scatter Proportional Series | Data Binding | Infragistics
_description: Use Infragistics Blazor map's scatter proportional series to plot markers for the geographic points specified by the data in your application. Learn more about Ignite UI for Blazor map's series!
_keywords: Blazor map, scatter proportional series, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series"]
_tocName: Geographic Bubble Map
_premium: true
---

# Blazor Geographic Bubble Map

In Blazor map component, you can use the [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries) to plot bubbles or proportional markers at the geographic locations specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Also you can use this map series in a fleet management system or a GPS system for dynamic vehicle tracking.

## Blazor Geographic Bubble Map Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicProportionalSymbolSeries DataSource="WorldCities"
                                                MarkerType="MarkerType.Circle"
                                                RadiusScale="SeriesSizeScale"
                                                FillScale="ColorScale"
                                                FillMemberPath="Pop"
                                                RadiusMemberPath="Pop"
                                                LatitudeMemberPath="Lat"
                                                LongitudeMemberPath="Lon"
                                                MarkerOutline="rgba(0,0,0,0.3)" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private List<WorldCity> WorldCities;
    private IgbSizeScale SeriesSizeScale;
    private IgbValueBrushScale ColorScale;

    protected override void OnInitialized()
    {
        this.WorldCities = WorldLocations.GetAll();

        this.SeriesSizeScale = new IgbSizeScale()
        {
            MinimumValue = 4,
            MaximumValue = 60
        };

        this.ColorScale = new IgbValueBrushScale()
        {
            Brushes = "rgba(14, 194, 14, 0.4), rgba(252, 170, 32, 0.4), rgba(252, 32, 32, 0.4)",
            MinimumValue = 0,
            MaximumValue = 30
        };
    }
}
```

<div class="divider--half"></div>

The demo above shows the [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries) series and how to specify data binding options of the series. Automatic marker selection is configured along with marker collision avoidance logic, and marker outline and fill colors are specified too.

## Configuration Summary

Similar to other types of scatter series in the map control, the [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries) series has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=DataSource) property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LongitudeMemberPath) and [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LatitudeMemberPath) properties to map these data columns. The [`RadiusScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusScale) and [`RadiusMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusMemberPath) will settings configures the radius for the bubbles.

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property|Type|Description |
| ---|---|--- |
| [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=DataSource)|any|Gets or sets the items source |
| [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LongitudeMemberPath)|string|Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LatitudeMemberPath)|string|Uses the ItemsSource property to determine the location of the latitude values on the assigned items |
| [`RadiusMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusMemberPath)|string|Sets the path to use to get the radius values for the series. |
| [`RadiusScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusScale)|[`IgbSizeScale`](mcp:get_api_reference?platform=blazor&component=IgbSizeScale)|Gets or sets the radius scale property for the current bubble series. |
| [`MinimumValue`](mcp:get_api_reference?platform=blazor&component=IgbSizeScale&member=MinimumValue)|any|Configure the minimum value for calculating value sub ranges. |
| [`MaximumValue`](mcp:get_api_reference?platform=blazor&component=IgbSizeScale&member=MaximumValue)|any|Configure the maximum value for calculating value sub ranges. |

## Code Snippet

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicProportionalSymbolSeries DataSource="WorldCities"
        MarkerType="MarkerType.Circle"
        RadiusScale="SeriesSizeScale"
        FillScale="ColorScale"
        FillMemberPath="Pop"
        RadiusMemberPath="Pop"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerOutline="rgba(0,0,0,0.3)" />
</IgbGeographicMap>

@code {

    private List<WorldCity> WorldCities;
    private SizeScale SeriesSizeScale;
    private ValueBrushScale ColorScale;

    protected override void OnInitialized()
    {
        this.WorldCities = WorldLocations.GetAll();

        this.SeriesSizeScale = new SizeScale()
        {
            MinimumValue = 4,
            MaximumValue = 60
        };

        this.ColorScale = new ValueBrushScale()
        {
            Brushes = "rgba(14, 194, 14, 0.4), rgba(252, 170, 32, 0.4), rgba(252, 32, 32, 0.4)",
            MinimumValue = 0,
            MaximumValue = 30
        };
    }
}
```

## API References

- [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries)
- [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=DataSource)
- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LatitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=LongitudeMemberPath)
- [`RadiusMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusMemberPath)
- [`RadiusScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusScale)
