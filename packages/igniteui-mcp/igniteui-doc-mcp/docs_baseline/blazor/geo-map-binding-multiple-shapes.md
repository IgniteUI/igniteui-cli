---
title: "Blazor Map | Data Visualization Tools | Binding Multiple Data Shapes | Infragistics"
description: Use Infragistics' Blazor to add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. View Ignite UI for Blazor map tutorials!
keywords: "Blazor map, shape files, Ignite UI for Blazor, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "In the Ignite UI for Blazor map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data."
_tocName: Binding Multiple Shapes
_premium: true
---
# Blazor Binding and Overlaying Multiple Shape Files

In the Ignite UI for Blazor map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) for plotting geographic locations of ports, the [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) for plotting routes between ports, and the [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) for plotting shapes of countries.

## Blazor Binding and Overlaying Multiple Shape Files Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicShapeSeries ShapefileDataSource="AsiaShape" Outline="Black" Thickness="1" Brush="#d10700" />
            <IgbGeographicShapeSeries ShapefileDataSource="EuropeShape" Outline="Black" Thickness="1" Brush="#04b530" />
            <IgbGeographicShapeSeries ShapefileDataSource="AmericanShape" Outline="Black" Thickness="1" Brush="#0073d1" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private IgbShapeDataSource AsiaShape;
    private IgbShapeDataSource EuropeShape;
    private IgbShapeDataSource AmericanShape;

    protected override void OnInitialized()
    {
        this.AsiaShape = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.dbf"
        };

        this.EuropeShape = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.dbf"
        };

        this.AmericanShape = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_north_america.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_north_america.dbf"
        };
    }
}
```

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) class. Refer to the [Binding Shape Files](./geo-map-binding-shp-file.md) topic for more information about [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) object.

- [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) – displays locations of major cities
- [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) – displays routes between major ports
- [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) – displays shapes of countries of the world

You can use geographic series in above or other combinations to plot desired data.

## Importing Components

First, let's import required components and modules:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbGeographicMapModule),
    typeof(IgbDataChartInteractivityModule)
);
```

## Creating Series

Next, we need to create a map with a few Geographic Series that will later load different type of shapefile.

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicShapeSeries ShapefileDataSource="@AsiaShape" Outline="Black" Thickness="1" Brush="Red" />
    <IgbGeographicShapeSeries ShapefileDataSource="@EuropeShape" Outline="Black" Thickness="1" Brush="Purple" />
</IgbGeographicMap>
```

## Loading Shapefiles

Next, in constructor of your page, add a [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) for each shapefile that you want to display in the geographic map component.

```razor
public IgbShapeDataSource AsiaShape;
public IgbShapeDataSource EuropeShape;

protected override void OnInitialized()
{
    this.AsiaShape = new IgbShapeDataSource()
    {
        ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.shp",
        DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.dbf"
    };

    this.EuropeShape = new IgbShapeDataSource()
    {
        ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.shp",
        DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.dbf"
    };
}
```

## Map Background

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```razor
<IgbGeographicMap Height="100%" Width="100%" BackgroundContent="@null"/>
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicShapeSeries ShapefileDataSource="AsiaShape" Outline="Black" Thickness="1" Brush="Red" />
    <IgbGeographicShapeSeries ShapefileDataSource="EuropeShape" Outline="Black" Thickness="1" Brush="Purple" />
</IgbGeographicMap>

@code {

    public IgbShapeDataSource AsiaShape;
    public IgbShapeDataSource EuropeShape;

    protected override void OnInitialized()
    {
        this.AsiaShape = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.dbf"
        };

        this.EuropeShape = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.dbf"
        };
    }
}
```

## API References
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries)
[`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
