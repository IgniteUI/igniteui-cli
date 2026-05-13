---
title: Blazor Map | Data Visualization Tools | Displaying ESRI Imagery |  Infragistics
_description: Use Infragistics' Blazor to display imagery from ESRI maps. View Ignite UI for Blazor map tutorials!
_keywords: Blazor map, ESRI, Ignite UI for Blazor, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Displaying Esri Imagery
_premium: true
---

# Blazor Displaying Imagery from Esri Maps

The [`IgbArcGISOnlineMapImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbArcGISOnlineMapImagery.html) is a free geographic imagery mapping service created by <a href="https://www.esri.com/" target="_blank">Esri</a> company. It provides over 40 styles of geographic imagery tiles of the world and some thematic tiles for the USA. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

## Blazor Displaying Imagery from Esri Maps Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container horizontal">
    <IgbGeographicMap Height="100%" Width="100%" Zoomable="true" BackgroundContent="@StreetMapImagery">
    </IgbGeographicMap>
    <IgbGeographicMap Height="100%" Width="100%" Zoomable="true" BackgroundContent="@OceansImagery">
    </IgbGeographicMap>
    <IgbGeographicMap Height="100%" Width="100%" Zoomable="true" BackgroundContent="@TopographicImagery">
    </IgbGeographicMap>
</div>

@code {

    private IgbArcGISOnlineMapImagery StreetMapImagery;
    private IgbArcGISOnlineMapImagery OceansImagery;
    private IgbArcGISOnlineMapImagery TopographicImagery;

    protected override void OnInitialized()
    {
        IgbArcGISOnlineMapImagery image1 = new IgbArcGISOnlineMapImagery()
        {
            MapServerUri = EsriStyle.WorldStreetMap
        };

        IgbArcGISOnlineMapImagery image2 = new IgbArcGISOnlineMapImagery()
        {
            MapServerUri = EsriStyle.WorldOceansMap
        };

        IgbArcGISOnlineMapImagery image3 = new IgbArcGISOnlineMapImagery()
        {
            MapServerUri = EsriStyle.WorldTopographicMap
        };

        this.StreetMapImagery = image1;
        this.OceansImagery = image2;
        this.TopographicImagery = image3;
    }
}
```

<div class="divider--half"></div>

## Code Snippet

The following code snippet shows how to display Blazor geographic imagery tiles from Esri imagery servers in [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) using [`IgbArcGISOnlineMapImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbArcGISOnlineMapImagery.html) class.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="EsriImagery" />

protected override void OnInitialized()
{
    IgbArcGISOnlineMapImagery imagery = new IgbArcGISOnlineMapImagery()
    {
        MapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer"
    };

    this.EsriImagery = imagery;
}
```

## Esri Utility

Alternatively, you can use the [EsriUtility](geo-map-resources-esri.md) which defines all styles provided by Esri imagery servers.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="EsriImagery" />

protected override void OnInitialized()
{
    IgbArcGISOnlineMapImagery imagery = new IgbArcGISOnlineMapImagery()
    {
        MapServerUri = EsriStyle.WorldOceansMap
    };

    this.EsriImagery = imagery;
}
```

## API References

- [`IgbArcGISOnlineMapImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbArcGISOnlineMapImagery.html)
- [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html)
