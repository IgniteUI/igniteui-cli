---
title: Blazor Map | Data Visualization Tools | Map Navigation | Infragistics
_description: Navigate Infragistics' Blazor map by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for Blazor map's navigation capabilities!
_keywords: Blazor map, navigation, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Navigating Map Content
_premium: true
---

# Blazor Navigating Map Content

Navigation in the [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) control is enabled by default and it allows zooming and panning of the map content. However, this behavior can be changed using the [`Zoomable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_Zoomable) property. It is important to know that the map allows only synchronized zooming - scaling the map content with preserved aspect ratio. As result, it is not possible to scale the map content vertically without scaling it also horizontally and vice versa.

## Blazor Navigating Map Content Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container horizontal">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true" @ref="GeoMap">
        </IgbGeographicMap>
    </div>

    <div class="overlay-border overlay-bottom-right" >
        <label class="overlay-label">Select Map Region</label>
        <select @onchange="OnMapRegionSelectionChanged">
            <option>Australia</option>
            <option>Caribbean</option>
            <option>Egypt</option>
            <option>European</option>
            <option>Hawaii</option>
            <option>Japan</option>
            <option>Poland</option>
            <option>SouthAfrica</option>
            <option>UnitedKingdom</option>
            <option>UnitedStates</option>
            <option>Uruguay</option>
        </select>
        <label class="overlay-label">Map Geographic Rect</label>
        <div class="overlay-row">
            <label class="overlay-field">Top:</label>
            <label class="overlay-value">@MapUtils.ToLat(MapRegionRect.Top)</label>
        </div>
        <div class="overlay-row">
            <label class="overlay-field">Left:</label>
            <label class="overlay-value">@MapUtils.ToLng(MapRegionRect.Left)</label>
        </div>
        <div class="overlay-row">
            <label class="overlay-field">Height:</label>
            <label class="overlay-value">@MapUtils.ToLat(MapRegionRect.Height)</label>
        </div>
        <div class="overlay-row">
            <label class="overlay-field">Width:</label>
            <label class="overlay-value">@MapUtils.ToLng(MapRegionRect.Width)</label>
        </div>
        @* <label class="overlay-label">Map Window Rect</label> *@
        @*<div class="overlay-row">
                <label class="overlay-field">Top:</label>
                <label class="overlay-value">@GeoMap.ActualWindowRect.Top</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Left:</label>
                <label class="overlay-value">@GeoMap.ActualWindowRect.Left</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Height:</label>
                <label class="overlay-value">@GeoMap.ActualWindowRect.Height</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Width:</label>
                <label class="overlay-value">@GeoMap.ActualWindowRect.Width</label>
            </div>
            <label class="overlay-label">Map Window Position</label>
            <div class="overlay-row">
                <label class="overlay-field">Horizontal:</label>
                <label class="overlay-value">@GeoMap.WindowPositionHorizontal</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Vertical:</label>
                <label class="overlay-value">@GeoMap.WindowPositionVertical</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Scale:</label>
                <label class="overlay-value">@GeoMap.WindowScale</label>
            </div>*@
        @* <label class="overlay-label">Map Hover Coordinates</label> *@
        @*<div class="overlay-row">
                <label class="overlay-field">Longitude:</label>
                <label class="overlay-value">@MapUtils.ToLng(this.state.mapHoverGeographicCoordinate.x)</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Latitude:</label>
                <label class="overlay-value">@MapUtils.ToLat(this.state.mapHoverGeographicCoordinate.y)</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Window X:</label>
                <label class="overlay-value">{this.state.mapHoverWindowCoordinate.x}</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Window Y:</label>
                <label class="overlay-value">{this.state.mapHoverWindowCoordinate.y}</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Pixel X:</label>
                <label class="overlay-value">@MapUtils.ToPixel(this.state.mapHoverRelativeCoordinate.x)</label>
            </div>
            <div class="overlay-row">
                <label class="overlay-field">Pixel Y:</label>
                <label class="overlay-value">@MapUtils.ToPixel(this.state.mapHoverRelativeCoordinate.y)</label>
            </div>*@
    </div>

    @*<div class="overlay-border overlay-bottom-right">Imagery Tiles: ESRI/ArcGIS</div>*@

</div>

@code {

    private IgbGeographicMap GeoMap;
    private Rect MapRegionRect;

    Dictionary<MapRegion, Rect> regions;

    protected override void OnInitialized()
    {
        regions = MapUtils.GetRegions();
        this.MapRegionRect = regions[MapRegion.Australia];
    }

    public void OnMapRegionSelectionChanged(ChangeEventArgs args)
    {
        MapRegion region = (MapRegion)Enum.Parse(typeof(MapRegion), args.Value.ToString());
        this.MapRegionRect = regions[region];
        MapUtils.NavigateTo(this.GeoMap, region);
    }
}
```


<div class="divider--half"></div>

## Geographic Coordinates

You navigate map content within geographic region bound by these coordinates:

- horizontally from 180°E (negative) to 180°W (positive) longitudes
- vertically from 85°S (negative) to 85°N (positive) latitudes

This code snippet shows how navigate the map using geographic coordinates:

```razor
this.GeoMap.ZoomToGeographic(new Rect() { Left = -134.5, Top = 16.5, Width = 70.0, Height = 37.0 });
```

## Window Coordinates

Also, you can navigate map content within window rectangle bound by these relative coordinates:

- horizontally from 0.0 to 1.0 values
- vertically from 0.0 to 1.0 values

This code snippet shows how navigate the map using relative window coordinates:

```razor
this.GeoMap.ZoomToGeographic(new Rect() { Left = 0.1, Top = 0.1, Width = 0.5, Height = 0.5 });
// or
this.GeoMap.WindowPositionHorizontal = 0.1;
this.GeoMap.WindowPositionVertical = 0.1;
this.GeoMap.WindowScale = 0.5;
```

## Properties

The following table summarizes properties that can be used in navigation of the [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) control:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect)| Rect | Sets new position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values will zoom out the entire map content in the navigation window. |
|[`WindowScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_WindowScale)| number | Sets new size of the navigation window in of the map control. It is equivalent smallest value of Width or Height stored in the [`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect) property |
|[`WindowPositionHorizontal`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowPositionHorizontal)| number | Sets new horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect) property. |
|[`WindowPositionVertical`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowPositionVertical)| number | Sets new vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect) property. |
|[`ActualWindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_ActualWindowRect)| Rect | Indicates current position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values displays the entire map content in the navigation window. |
|[`ActualWindowScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_ActualWindowScale)| number | Indicates current size of the navigation window in of the map control. It is equivalent to smallest value of Width or Height stored in the [`ActualWindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_ActualWindowRect) property |
|[`ActualWindowPositionHorizontal`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_ActualWindowPositionHorizontal)| number | Indicates current horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`ActualWindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_ActualWindowRect) property. |
|[`ActualWindowPositionVertical`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_ActualWindowPositionVertical)| number | Indicates vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`ActualWindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_ActualWindowRect) property. |

## API References

- [`ActualWindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_ActualWindowRect)
- [`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect)
- [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html)
- [`Zoomable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_Zoomable)
