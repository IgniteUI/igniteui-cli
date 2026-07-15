---
title: Blazor Map | Data Visualization Tools | Scatter Area Series | Data Binding | Infragistics
_description: Use Infragistics Blazor map's scatter area series to draw a colored area surface based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Blazor map's series!
_keywords: Blazor map, scatter area series, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap","GeographicScatterAreaSeries","CustomPaletteColorScale", "Series"]
_tocName: Geographic Area Map
_premium: true
---

# Blazor Geographic Area Map

In Blazor map component, you can use the [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

## Blazor Geographic Area Map Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicScatterAreaSeries LongitudeMemberPath="Lon"
                                         LatitudeMemberPath="Lat"
                                         ColorMemberPath="Value"
                                         ColorScale="@ColorScale"
                                         DataSource="Data">
            </IgbGeographicScatterAreaSeries>
        </IgbGeographicMap>
    </div>
</div>

@code {

    private List<WorldLocation> Data;
    private IgbCustomPaletteColorScale ColorScale;

    protected override void OnInitialized()
    {
        var brushes = "";
        brushes += "rgba(32, 146, 252, 0.5) "; // semi-transparent blue
        brushes += "rgba(14, 194, 14, 0.5) ";  // semi-transparent green
        brushes += "rgba(252, 120, 32, 0.5) "; // semi-transparent orange
        brushes += "rgba(252, 32, 32, 0.5) ";  // semi-transparent red

        this.ColorScale = new IgbCustomPaletteColorScale();
        this.ColorScale.Palette = brushes;
        this.ColorScale.MinimumValue = 0;
        this.ColorScale.MaximumValue = 30;

        this.Data = WorldTemperatures.Load();
    }

}
```

<div class="divider--half"></div>

The [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) works a lot like the [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=DataSource) property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LongitudeMemberPath), [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LatitudeMemberPath), and [`ColorMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorMemberPath) properties of the geographic series identify these data column.
The [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TrianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=DataSource)|any|The source of data items to perform triangulation on if the [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TrianglesSource) property provides no triangulation data.|
|[`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LongitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=DataSource).|
|[`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LatitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=DataSource).|
|[`ColorMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`ColorScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorScale) property is set.|
|[`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TrianglesSource)|any|The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.|
|[`TriangleVertexMemberPath1`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TriangleVertexMemberPath1)|string|The name of the property of the [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TrianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`TriangleVertexMemberPath2`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TriangleVertexMemberPath2)|string|The name of the property of the [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TrianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`TriangleVertexMemberPath3`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TriangleVertexMemberPath3)|string|The name of the property of the [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TrianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Color Scale

Use the ColorScale property of the [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgbCustomPaletteColorScale`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the [`IgbCustomPaletteColorScale`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale) affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`Palette`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale&member=Palette)| ObservableCollection<Color> |Gets or sets the collection of colors to select from or to interpolate between.|
|[`InterpolationMode`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale&member=InterpolationMode)|`ColorScaleInterpolationMode`|Gets or sets the method getting a color from the Palette.|
|[`MaximumValue`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale&member=MaximumValue)|double|The highest value to assign a color. Any given value greater than this value will be Transparent.|
|[`MinimumValue`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale&member=MinimumValue)|double|The lowest value to assign a color. Any given value less than this value will be Transparent.|

## Code Snippet

The following code shows how to bind the [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) to triangulation data representing surface temperatures in the world.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicScatterAreaSeries LongitudeMemberPath="Lon"
        LatitudeMemberPath="Lat"
        ColorMemberPath="Value"
        ColorScale="ColorScale"
        DataSource="Data">
    </IgbGeographicScatterAreaSeries>
</IgbGeographicMap>

@code {

    private List<Location> Data;
    private CustomPaletteColorScale ColorScale;

    protected override void OnInitialized()
    {
        var brushes = "";
        brushes += "rgba(32, 146, 252, 0.5) "; // semi-transparent blue
        brushes += "rgba(14, 194, 14, 0.5) ";  // semi-transparent green
        brushes += "rgba(252, 120, 32, 0.5) "; // semi-transparent orange
        brushes += "rgba(252, 32, 32, 0.5) ";  // semi-transparent red

        this.ColorScale = new CustomPaletteColorScale();
        this.ColorScale.Palette = brushes;
        this.ColorScale.MinimumValue = 0;
        this.ColorScale.MaximumValue = 30;

        this.Data = WorldTemperatures.Load();
    }
}
```

## API References

- [`ColorMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorMemberPath)
- [`ColorScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorScale)
- [`IgbCustomPaletteColorScale`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale)
- [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries)
- [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries)
- [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=DataSource)
- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LatitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=LongitudeMemberPath)
- [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=TrianglesSource)
- `TriangulationSource`
