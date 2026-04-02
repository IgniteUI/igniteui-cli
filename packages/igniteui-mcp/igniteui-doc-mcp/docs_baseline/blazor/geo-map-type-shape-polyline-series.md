---
title: Blazor Map | Data Visualization Tools | Shape Polyline Series | Infragistics
_description: Use Infragistics Blazor map's shape polyline series to render roads or connections between geographic locations such as cities or airports. Learn more about Ignite UI for Blazor map's series!
_keywords: Blazor map, Ignite UI for Blazor, shape polyline series, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_tocName: Geographic Polyline Map
_premium: true
---

# Blazor Geographic Polyline Map

In Blazor map component, you can use the [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

## Blazor Geographic Polyline Map Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap @ref="@MapRef" Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicPolylineSeries
            Outline="Red"
            ShapefileDataSource="Data" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private IgbShapeDataSource Data;
    private IgbGeographicMap MapRef { get; set; }

    protected override void OnInitialized()
    {
        this.Data = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp",
            DatabaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf"
        };
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.MapRef != null)
        {
            Rect zoomRect = new Rect() { Left = 0.2, Top = 0.1, Width = 0.6, Height = 0.6 };
            await this.MapRef.EnsureReady();
            await this.MapRef.UpdateZoomWindowAsync(zoomRect);
        }
    }
}
```


<div class="divider--half"></div>

The [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) works a lot like the [`IgbGeographicShapeSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeries.html) except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements

Similarly to other types of geographic series in the control, the [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) has the [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the [`ShapeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeriesBase.html#IgniteUI_Blazor_Controls_IgbGeographicShapeSeriesBase_ShapeMemberPath) property. The [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) uses points of this mapped data column to plot polygons in the control.

## Code Snippet

The following code shows how to bind the [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) to locations of cities loaded from a shape file using the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html).

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries Outline="Red" ShapefileDataSource="DataSource" />
</IgbGeographicMap>

@code {

    public IgbShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        this.DataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf"
        };
    }
}
```

## API References

- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)
- [`IgbGeographicShapeSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html)
