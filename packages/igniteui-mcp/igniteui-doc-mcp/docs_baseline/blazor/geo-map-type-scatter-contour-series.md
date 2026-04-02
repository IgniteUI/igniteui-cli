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

In Blazor map component, you can use the [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data defined by geographic locations such as weather temperature, atmospheric pressure, precipitation, population distribution, topographic data, etc.

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

The [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) works a lot like the [`IgbGeographicScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html) except that it represents data as contour lines, colored using a fill scale and the geographic scatter area series, represents data as a surface interpolated using a color scale.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) has the [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store geographic location (longitude and latitude coordinates) and one data column that stores a value associated with the geographic location. These data column, are identified by [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LongitudeMemberPath), [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LatitudeMemberPath), and [`ValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_ValueMemberPath) properties of the geographic series.
The [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`TrianglesSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_TrianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a `TriangulationSource` for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)|any|The source of data items to perform triangulation on if the [`TrianglesSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_TrianglesSource) property provides no triangulation data.|
|[`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LongitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource).|
|[`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LatitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to to the [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource).|
|[`ValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_ValueMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`FillScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_FillScale) property is set.|
|[`TrianglesSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_TrianglesSource)|any|Gets or sets the source of triangulation data. Setting Triangles of the TriangulationSource object to this property improves both runtime performance and geographic series rendering.|
|[`TriangleVertexMemberPath1`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_TriangleVertexMemberPath1)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`TriangleVertexMemberPath2`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_TriangleVertexMemberPath2)|string| The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`TriangleVertexMemberPath3`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_TriangleVertexMemberPath3)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Contour Fill Scale

Use the [`FillScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_FillScale) property of the [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) to resolve fill brushes of the contour lines of the geographic series.
The provided \`ValueBrushScale class should satisfy most of your coloring needs, but the application for custom coloring logic can inherit the ValueBrushScale class.
The following table list properties of the CustomPaletteColorScale affecting the surface coloring of the GeographicContourLineSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`Brushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_Brushes)|BrushCollection|Gets or sets the collection of brushes for filling contours of the [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html)|
|[`MaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCustomPaletteColorScale.html#IgniteUI_Blazor_Controls_IgbCustomPaletteColorScale_MaximumValue)|double|The highest value to assign a brush in a fill scale.|
|[`MinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCustomPaletteColorScale.html#IgniteUI_Blazor_Controls_IgbCustomPaletteColorScale_MinimumValue)|double|The lowest value to assign a brush in a fill scale.|

## Code Snippet

The following code shows how to bind the [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) to triangulation data representing surface temperatures in the world.

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

- [`FillScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_FillScale)
- [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html)
- [`IgbGeographicScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LongitudeMemberPath)
- [`TrianglesSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_TrianglesSource)
- `TriangulationSource`
- [`IgbValueBrushScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbValueBrushScale.html)
- [`ValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_ValueMemberPath)
