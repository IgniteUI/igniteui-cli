---
title: "Blazor Map | Data Visualization Tools | Scatter Symbol Series | Data Binding | Infragistics"
description: Use Infragistics Blazor map's scatter symbol series to display geo-spatial data using points or markers in a geographic context.. Learn more about Ignite UI for Blazor map's series!
keywords: "Blazor map, scatter symbol series, Ignite UI for Blazor, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series"]
llms:
  description: "In Blazor map component, you can use the GeographicSymbolSeries to display geo-spatial data using points or markers in a geographic context."
platformType: xplat
_tocName: Geographic Symbol Map
_premium: true
---
# Blazor Geographic Symbol Map

In Blazor map component, you can use the [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) to display geo-spatial data using points or markers in a geographic context. This type of geographic series is often used to render a collection of geographic locations such as cities, airports, earthquakes, or points of interests.

## Blazor Geographic Symbol Map Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicSymbolSeries DataSource="Cities"
                                    MarkerType="MarkerType.Circle"
                                    LatitudeMemberPath="Lat"
                                    LongitudeMemberPath="Lon"
                                    MarkerBrush="White"
                                    MarkerOutline="Gray" />
            <IgbGeographicSymbolSeries DataSource="Capitals"
                                    MarkerType="MarkerType.Circle"
                                    LatitudeMemberPath="Lat"
                                    LongitudeMemberPath="Lon"
                                    MarkerBrush="White"
                                    MarkerOutline="rgb(32, 146, 252)" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private List<WorldCity> Cities;
    private List<WorldCity> Capitals;

    protected override void OnInitialized()
    {
        this.Cities = WorldLocations.GetCities();
        this.Capitals = WorldLocations.GetCapitals();
    }
}
```

## Data Requirements
Similarly to other types of geographic series in the map component, the [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=DataSource) property which can be bound to an array of objects. In addition, each data item in this object must have two numeric data columns that store a geographic location (longitude and latitude). These data columns are then mapped to the [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath) and [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath) properties. The [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) uses values of these mapped data columns to plot symbol elements in the geographic map component.

## Code Snippet
The following code shows how to bind the [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) to locations of cities loaded from a shape file using the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord).

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    Zoomable="true">
    <IgbGeographicSymbolSeries
        @ref="citiesSeries"
        DataSource="WorldCities"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Y"
        LongitudeMemberPath="X"
        MarkerBrush="White"
        MarkerOutline="Gray" />
    <IgbGeographicSymbolSeries
        @ref="capitalsSeries"
        DataSource="WorldCapitals"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Y"
        LongitudeMemberPath="X"
        MarkerBrush="White"
        MarkerOutline="rgba(32, 146, 252, 1)" />
</IgbGeographicMap>
```

## API References
[`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
