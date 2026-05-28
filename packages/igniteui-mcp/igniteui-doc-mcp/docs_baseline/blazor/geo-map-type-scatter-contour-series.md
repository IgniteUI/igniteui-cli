---
title: Blazor Map | Data Visualization Tools | Scatter Contour Series | Data Binding | Infragistics
_description: Use Infragistics Blazor map's scatter contour series to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Blazor map's series!
_keywords: Blazor map, scatter contour series, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap","GeographicContourLineSeries","CustomPaletteColorScale", "Series"]
_tocName: Geographic Contour Map
_premium: true
---

# Blazor Geographic Contour Map

In Blazor map component, you can use the [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data defined by geographic locations such as weather temperature, atmospheric pressure, precipitation, population distribution, topographic data, etc.

## Blazor Geographic Contour Map Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicContourLineSeries LongitudeMemberPath="Lon"
                                         LatitudeMemberPath="Lat"
                                         ValueMemberPath="Value"
                                         FillScale="@BrushScale"
                                         DataSource="Data"
                                         Thickness="2">
            </IgbGeographicContourLineSeries>
        </IgbGeographicMap>
    </div>
</div>

@code {
    private List<WorldLocation> Data;
    private IgbValueBrushScale BrushScale;

    protected override void OnInitialized()
    {
        var brushes = "";
        brushes += "rgba(32, 146, 252, 0.5) "; // semi-transparent blue
        brushes += "rgba(14, 194, 14, 0.5) ";  // semi-transparent green
        brushes += "rgba(252, 120, 32, 0.5) "; // semi-transparent orange
        brushes += "rgba(252, 32, 32, 0.5) ";  // semi-transparent red

        this.BrushScale = new IgbValueBrushScale();
        this.BrushScale.Brushes = brushes;
        this.BrushScale.MinimumValue = 0;
        this.BrushScale.MaximumValue = 30;

        this.Data = WorldTemperatures.Load();
    }

}
```

<div class="divider--half"></div>

The [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) works a lot like the [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) except that it represents data as contour lines, colored using a fill scale and the geographic scatter area series, represents data as a surface interpolated using a color scale.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=DataSource) property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store geographic location (longitude and latitude coordinates) and one data column that stores a value associated with the geographic location. These data column, are identified by [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LongitudeMemberPath), [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LatitudeMemberPath), and [`ValueMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=ValueMemberPath) properties of the geographic series.
The [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=TrianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a `TriangulationSource` for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=DataSource)|any|The source of data items to perform triangulation on if the [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=TrianglesSource) property provides no triangulation data.|
|[`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LongitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=DataSource).|
|[`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LatitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to to the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=DataSource).|
|[`ValueMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=ValueMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`FillScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=FillScale) property is set.|
|[`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=TrianglesSource)|any|Gets or sets the source of triangulation data. Setting Triangles of the TriangulationSource object to this property improves both runtime performance and geographic series rendering.|
|[`TriangleVertexMemberPath1`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=TriangleVertexMemberPath1)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`TriangleVertexMemberPath2`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=TriangleVertexMemberPath2)|string| The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`TriangleVertexMemberPath3`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=TriangleVertexMemberPath3)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Contour Fill Scale

Use the [`FillScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=FillScale) property of the [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) to resolve fill brushes of the contour lines of the geographic series.
The provided \`ValueBrushScale class should satisfy most of your coloring needs, but the application for custom coloring logic can inherit the ValueBrushScale class.
The following table list properties of the CustomPaletteColorScale affecting the surface coloring of the GeographicContourLineSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`Brushes`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=Brushes)|BrushCollection|Gets or sets the collection of brushes for filling contours of the [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries)|
|[`MaximumValue`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale&member=MaximumValue)|double|The highest value to assign a brush in a fill scale.|
|[`MinimumValue`](mcp:get_api_reference?platform=blazor&component=IgbCustomPaletteColorScale&member=MinimumValue)|double|The lowest value to assign a brush in a fill scale.|

## Code Snippet

The following code shows how to bind the [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) to triangulation data representing surface temperatures in the world.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicContourLineSeries LongitudeMemberPath="Lon"
        LatitudeMemberPath="Lat"
        ValueMemberPath="Value"
        FillScale="@BrushScale"
        DataSource="@Data"
        Thickness="2">
    </IgbGeographicContourLineSeries>
</IgbGeographicMap>

@code {
    private List<Location> Data;
    private ValueBrushScale BrushScale;

    protected override void OnInitialized()
    {
        var brushes = "";
        brushes += "rgba(32, 146, 252, 0.5) "; // semi-transparent blue
        brushes += "rgba(14, 194, 14, 0.5) ";  // semi-transparent green
        brushes += "rgba(252, 120, 32, 0.5) "; // semi-transparent orange
        brushes += "rgba(252, 32, 32, 0.5) ";  // semi-transparent red

        this.BrushScale = new ValueBrushScale();
        this.BrushScale.Brushes = brushes;
        this.BrushScale.MinimumValue = 0;
        this.BrushScale.MaximumValue = 30;

        this.Data = WorldTemperatures.Load();
    }
}
```

## API References

- [`FillScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=FillScale)
- [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries)
- [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries)
- [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=DataSource)
- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LatitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=LongitudeMemberPath)
- [`TrianglesSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=TrianglesSource)
- `TriangulationSource`
- [`IgbValueBrushScale`](mcp:get_api_reference?platform=blazor&component=IgbValueBrushScale)
- [`ValueMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=ValueMemberPath)
