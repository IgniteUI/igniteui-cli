---
title: Blazor Map | Data Visualization Tools | Displaying Open Street Maps Imagery | Infragistics
_description: Use Infragistics' Blazor to display imagery from OSM maps. View Ignite UI for Blazor map tutorials!
_keywords: Blazor map, OSM, Ignite UI for Blazor, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Displaying OSM Imagery
_premium: true
---

# Blazor Displaying Imagery from Open Street Maps

The Blazor [`IgbOpenStreetMapImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbOpenStreetMapImagery.html) is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the Ignite UI for Blazor map component already displays geographic imagery from the Open Street Maps. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

## Blazor Displaying Imagery from Open Street Maps Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">

    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true" BackgroundContent="@OSMImagery"/>
    </div>
</div>

@code {

    private IgbOpenStreetMapImagery OSMImagery;
    private IgbGeographicMap MapRef { get; set; }

    protected override void OnInitialized()
    {
        this.OSMImagery = new IgbOpenStreetMapImagery();
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.MapRef != null)
        {
            Rect zoomRect = new Rect() { Left = -150, Top = -60, Width = 315, Height = 140 };
            await this.MapRef.EnsureReady();
            await this.MapRef.UpdateWorldRectAsync(zoomRect);
        }
    }
}
```


<div class="divider--half"></div>

## Code Snippet

This code example explicitly sets [`BackgroundContent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_BackgroundContent) of the map component to the [`IgbOpenStreetMapImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbOpenStreetMapImagery.html) object which provides geographic imagery from  OpenStreetMap© contributors.

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true"
    BackgroundContent="OSMImagery" />

@code {

    public IgbOpenStreetMapImagery OSMImagery;

    protected override void OnInitialized()
    {
        this.OSMImagery = new IgbOpenStreetMapImagery();
    }
}
```

## API References

- [`BackgroundContent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_BackgroundContent)
- [`IgbOpenStreetMapImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbOpenStreetMapImagery.html)
