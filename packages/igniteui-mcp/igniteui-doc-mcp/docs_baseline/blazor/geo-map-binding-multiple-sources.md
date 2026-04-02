---
title: Blazor Map | Data Visualization Tools | Binding Multiple Data Source | Infragistics
_description: Use Infragistics' Blazor JavaScript map to add multiple geographic series objects to overlay custom data sources with geo-spacial data. View Ignite UI for Blazor map tutorials!
_keywords: Blazor map, geographic series, Ignite UI for Blazor, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "SeriesViewer", "Series", "GeographicShapeSeriesBase"]
_tocName: Binding Multiple Sources
_premium: true
---

# Blazor Binding Multiple Data Sources

In the Ignite UI for Blazor map, you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) for plotting geographic locations of airports, the [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) for plotting flights between airports, and 2nd [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) for plotting gridlines of major geographic coordinates.

## Blazor Binding Multiple Data Sources Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicPolylineSeries DataSource="Flights" ShapeMemberPath="Points"
                                      ShapeStroke="rgba(196, 14, 14, 0.2)" ShapeStrokeThickness="4" />
            <IgbGeographicPolylineSeries DataSource="Coordinates" ShapeMemberPath="Points"
                                      ShapeStroke="Gray" ShapeStrokeThickness="1">
            </IgbGeographicPolylineSeries>
            <IgbGeographicSymbolSeries DataSource="Airports" LatitudeMemberPath="Lat"
                                    LongitudeMemberPath="Lon" MarkerType="MarkerType.Circle"
                                    MarkerBrush="#AAD3DF" MarkerOutline="Black" Thickness="1" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private List<WorldCity> Airports;
    private List<FlightInfo> Flights;
    private List<CoordinateLine> Coordinates;

    protected override void OnInitialized()
    {
        Airports = WorldConnections.GetAirports();
        Flights = WorldConnections.GetFlights();
        Coordinates = WorldConnections.GetGridlines();
    }
}
```


<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

- [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) – displays locations of major airports
- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) – displays flights between airports
- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

## Creating Data Sources

Create data sources for all geographic series that you want to display in the Ignite UI for Blazor map. For example, you can the use [WorldConnections](geo-map-resources-world-connections.md) script.

```razor
@code {

    public List<WorldCity> Airports;
    public List<FlightInfo> Flights;
    public List<CoordinateLine> Coordinates;

    protected override void OnInitialized()
    {
        Airports = WorldConnections.GetAirports();
        Flights = WorldConnections.GetFlights();
        Coordinates = WorldConnections.GetGridlines();
    }
}
```

## Overlaying Flights

Create first [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) object with flight connections between major airports and add it to the Series collection of the Ignite UI for Blazor map.

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries DataSource="Flights" ShapeMemberPath="Points"
        ShapeStroke="rgba(196, 14, 14, 0.05)" ShapeStrokeThickness="4" />
</IgbGeographicMap>
```

## Overlaying Gridlines

Create second [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) object with geographic gridlines and add it to the Series collection of the Ignite UI for Blazor map.

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries DataSource="Coordinates" ShapeMemberPath="Points"
        ShapeStroke="Gray" ShapeStrokeThickness="1" />
</IgbGeographicMap>
```

## Overlaying Airports

Create [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) object with airport points and add it to the Series collection of the geographic Ignite UI for Blazor map.

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicSymbolSeries DataSource="Airports" LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon" MarkerType="MarkerType.Circle"
        MarkerBrush="#AAD3DF" MarkerOutline="Black" Thickness="1" />
</IgbGeographicMap>
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries DataSource="Flights" ShapeMemberPath="Points"
        ShapeStroke="rgba(196, 14, 14, 0.05)" ShapeStrokeThickness="4" />
    <IgbGeographicPolylineSeries DataSource="Coordinates" ShapeMemberPath="Points"
        ShapeStroke="Gray" ShapeStrokeThickness="1">
    </IgbGeographicPolylineSeries>
    <IgbGeographicSymbolSeries DataSource="Airports" LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon" MarkerType="MarkerType.Circle"
        MarkerBrush="#AAD3DF" MarkerOutline="Black" Thickness="1" />
</IgbGeographicMap>

@code {

    private List<WorldCity> Airports;
    private List<FlightInfo> Flights;
    private List<CoordinateLine> Coordinates;

    protected override void OnInitialized()
    {
        Airports = WorldConnections.GetAirports();
        Flights = WorldConnections.GetFlights();
        Coordinates = WorldConnections.GetGridlines();
    }
}
```

## API References

- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)
- [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html)
