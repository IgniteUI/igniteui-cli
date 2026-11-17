---
title: "Blazor Map | Data Visualization Tools | Binding Multiple Data Shapes | Infragistics"
description: Use Infragistics' Blazor to add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. View Ignite UI for Blazor map tutorials!
keywords: "Blazor map, shape files, Ignite UI for Blazor, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "In the Ignite UI for Blazor map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data."
platformType: xplat
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

```razor
@using IgniteUI.Blazor.Controls;
```

The map's mouse interactions, such as panning and zooming, come from [`IgbDataChartInteractivityModule`](mcp:get_api_reference?platform=blazor&component=IgbDataChartInteractivityModule), which no component requests on its own, so it has to be registered. [`IgbGeographicMapModule`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMapModule) is optional: the [`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap) loads it when it first renders (see [Component Modules](general-getting-started.md#component-modules)).

```razor
// in Program.cs file
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGeographicMapModule),
    typeof(IgbDataChartInteractivityModule)
);
```

## Creating Series

Next, we need to create a map with a few Geographic Series that will later load different type of shapefile.

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    Zoomable="true">
    <IgbGeographicShapeSeries
        @ref="polygonSeries"
        ShapeMemberPath="Points"
        ShapeFill="rgb(150, 150, 150)"
        ShapeStroke="Black"
        ShapeStrokeThickness="1" />
    <IgbGeographicPolylineSeries
        @ref="lineSeries"
        ShapeMemberPath="Points"
        ShapeStroke="rgba(147, 15, 180, 0.5)"
        Thickness="3" />
    <IgbGeographicSymbolSeries
        @ref="symbolSeries"
        LongitudeMemberPath="Longitude"
        LatitudeMemberPath="Latitude"
        MarkerType="MarkerType.Circle"
        MarkerOutline="rgba(2, 102, 196, 1)"
        MarkerBrush="White" />
</IgbGeographicMap>
```

## Loading Shapefiles

Next, in constructor of your page, add a [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) for each shapefile that you want to display in the geographic map component. Each source is given the method that turns its records into data; those methods belong to a `MapMultipleShapesReaders` class, and the sections below show each of them.

```razor
@using IgniteUI.Blazor.Controls;
// ...
private MapMultipleShapesReaders mapMultipleShapesReaders = new MapMultipleShapesReaders();
// ...
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapMultipleShapesReaders;

var sdsPolygons = new IgbShapeDataSource()
{
    ShapefileSource = root + "WorldCountries.shp",
    DatabaseSource = root + "WorldCountries.dbf"
};
sdsPolygons.ImportCompleted += readers.ReadPolygons;
sdsPolygons.DataBind();

var sdsPolylines = new IgbShapeDataSource()
{
    ShapefileSource = root + "WorldCableRoutes.shp",
    DatabaseSource = root + "WorldCableRoutes.dbf"
};
sdsPolylines.ImportCompleted += readers.ReadPolylines;
sdsPolylines.DataBind();

var sdsLocations = new IgbShapeDataSource()
{
    ShapefileSource = root + "WorldCities.shp",
    DatabaseSource = root + "WorldCities.dbf"
};
sdsLocations.ImportCompleted += readers.ReadPoints;
sdsLocations.DataBind();
```

## Processing Polygons

Process shapes data loaded in [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) with countries of the world and assign it to [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) object.

```razor
/// <summary>Country shapes, with the fields the tooltip shows taken from the .DBF file.</summary>
public void ReadPolygons(object sender, EventArgs e)
{
    var sds = sender as IgbShapeDataSource;
    var geoPolygons = new List<object>();
    // parsing shapefile data and creating geo-polygons
    foreach (var record in sds.GetPointData())
    {
        // using field/column names from .DBF file
        geoPolygons.Add(new
        {
            points = record.Points,
            name = record.FieldValues["NAME"],
            population = record.FieldValues["POP_2005"]
        });
    }

    var map = this.geoMap;
    var polygonSeries = map.Series[0] as IgbGeographicShapeSeries;
    polygonSeries.DataSource = geoPolygons;
}
```

## Processing Polyline

Process shapes data loaded in [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) with communication routes between major cities and assign it to [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) object.

```razor
/// <summary>Connections between places, each record one path.</summary>
public void ReadPolylines(object sender, EventArgs e)
{
    var sds = sender as IgbShapeDataSource;
    var geoPolylines = new List<object>();
    // parsing shapefile data and creating geo-polylines
    foreach (var record in sds.GetPointData())
    {
        // using field/column names from .DBF file
        geoPolylines.Add(new
        {
            points = record.Points,
            name = record.FieldValues["Name"],
            capacity = record.FieldValues["CapacityG"],
            distance = record.FieldValues["DistanceKM"],
            isOverLand = (double)record.FieldValues["OverLand"] == 0,
            isActive = (double)record.FieldValues["NotLive"] != 0,
            service = record.FieldValues["InService"]
        });
    }

    var map = this.geoMap;
    var lineSeries = map.Series[1] as IgbGeographicPolylineSeries;
    lineSeries.DataSource = geoPolylines;
}
```

## Processing Points

Process shapes data loaded in [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) with locations of major cities and assign it to [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) object.

```razor
/// <summary>Cities with a known population, one point per record.</summary>
public void ReadPoints(object sender, EventArgs e)
{
    var sds = sender as IgbShapeDataSource;
    var geoLocations = new List<object>();
    // parsing shapefile data and creating geo-locations
    foreach (var record in sds.GetPointData())
    {
        var pop = (double)record.FieldValues["POPULATION"];
        if (pop > 0)
        {
            // each of these records holds a single point
            // using field/column names from .DBF file
            geoLocations.Add(new
            {
                latitude = record.Points[0][0].Y,
                longitude = record.Points[0][0].X,
                city = record.FieldValues["NAME"],
                population = pop
            });
        }
    }

    var map = this.geoMap;
    var symbolSeries = map.Series[2] as IgbGeographicSymbolSeries;
    symbolSeries.DataSource = geoLocations;
}
```

## Map Background

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    BackgroundContent="@null" />
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```razor
<IgbGeographicMap
    @ref="geoMap"
    Height="100%"
    Width="100%"
    Zoomable="true">
    <IgbGeographicShapeSeries
        @ref="polygonSeries"
        ShapeMemberPath="Points"
        ShapeFill="rgb(150, 150, 150)"
        ShapeStroke="Black"
        ShapeStrokeThickness="1" />
    <IgbGeographicPolylineSeries
        @ref="lineSeries"
        ShapeMemberPath="Points"
        ShapeStroke="rgba(147, 15, 180, 0.5)"
        Thickness="3" />
    <IgbGeographicSymbolSeries
        @ref="symbolSeries"
        LongitudeMemberPath="Longitude"
        LatitudeMemberPath="Latitude"
        MarkerType="MarkerType.Circle"
        MarkerOutline="rgba(2, 102, 196, 1)"
        MarkerBrush="White" />
</IgbGeographicMap>
```

```razor
@using IgniteUI.Blazor.Controls;
// ...
private MapMultipleShapesReaders mapMultipleShapesReaders = new MapMultipleShapesReaders();
// ...
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapMultipleShapesReaders;

var sdsPolygons = new IgbShapeDataSource()
{
    ShapefileSource = root + "WorldCountries.shp",
    DatabaseSource = root + "WorldCountries.dbf"
};
sdsPolygons.ImportCompleted += readers.ReadPolygons;
sdsPolygons.DataBind();

var sdsPolylines = new IgbShapeDataSource()
{
    ShapefileSource = root + "WorldCableRoutes.shp",
    DatabaseSource = root + "WorldCableRoutes.dbf"
};
sdsPolylines.ImportCompleted += readers.ReadPolylines;
sdsPolylines.DataBind();

var sdsLocations = new IgbShapeDataSource()
{
    ShapefileSource = root + "WorldCities.shp",
    DatabaseSource = root + "WorldCities.dbf"
};
sdsLocations.ImportCompleted += readers.ReadPoints;
sdsLocations.DataBind();
```

## API References
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries)
[`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
