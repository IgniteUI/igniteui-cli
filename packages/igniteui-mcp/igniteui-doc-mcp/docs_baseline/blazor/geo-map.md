---
title: Blazor Map | Data Visualization Tools | Map Overview | Infragistics
_description: Use Infragistics' Blazor JavaScript map to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps. View the Ignite UI for Blazor map demos!
_keywords: Blazor map, geographic map, imagery tiles, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series"]
_tocName: Geographic Map Features
---

# Blazor Map Overview

The Ignite UI for Blazor map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

## Blazor Map Example

The following sample demonstrates how display data in [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) using [`IgbGeographicProportionalSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html) also known as Bubble Series.

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

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's Series property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) can be added for plotting geographic locations such as cities and the [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

NOTE: As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.

For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

## Component Modules

The [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) requires the following modules, however the DataChartInteractivityModule is only required for mouse interactions, such as panning and zooming the map content.

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbGeographicMapModule),
    typeof(IgbDataChartInteractivityModule)
);
```

<div class="divider--half"></div>

## Usage

Now that the map module is imported, next step is to create geographic map. The following code demonstrates how to do this and enable zooming in the map.

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true" />
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related Blazor map features in these topics:

- [Geographic Map Navigation](geo-map-navigation.md)

<!-- - [Geographic Map Imagery](geo-map-display-imagery-types.md) -->

- [Using Scatter Symbol Series](geo-map-type-scatter-symbol-series.md)
- [Using Scatter Proportional Series](geo-map-type-scatter-bubble-series.md)
- [Using Scatter Contour Series](geo-map-type-scatter-contour-series.md)
- [Using Scatter Density Series](geo-map-type-scatter-density-series.md)
- [Using Scatter Area Series](geo-map-type-scatter-area-series.md)
- [Using Shape Polygon Series](geo-map-type-shape-polygon-series.md)
- [Using Shape Polyline Series](geo-map-type-shape-polyline-series.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html)
- [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html)
- [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html)
- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)
- [`IgbGeographicShapeSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeries.html)
- [`IgbGeographicProportionalSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html)
- [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html)
- [`IgbGeographicScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html)
