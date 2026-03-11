---
title: Blazor Map | Data Visualization Tools | Scatter Symbol Series | Data Binding | Infragistics
_description: Use Infragistics Blazor map's scatter symbol series to display geo-spatial data using points or markers in a geographic context.. Learn more about Ignite UI for Blazor map's series!
_keywords: Blazor map, scatter symbol series, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series"]
_tocName: Geographic Symbol Map
_premium: true
---

# Blazor Geographic Symbol Map

In Blazor map component, you can use the [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) to display geo-spatial data using points or markers in a geographic context. This type of geographic series is often used to render a collection of geographic locations such as cities, airports, earthquakes, or points of interests.

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


<div class="divider--half"></div>

## Data Requirements

Similarly to other types of geographic series in the map component, the [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) has the [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property which can be bound to an array of objects. In addition, each data item in this object must have two numeric data columns that store a geographic location (longitude and latitude). These data columns are then mapped to the [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath) and [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath) properties. The [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) uses values of these mapped data columns to plot symbol elements in the geographic map component.

## Code Snippet

The following code shows how to bind the [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) to locations of cities loaded from a shape file using the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html).

```razor
@using IgniteUI.Blazor.Controls


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

## API References

- [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath)
- [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html)
