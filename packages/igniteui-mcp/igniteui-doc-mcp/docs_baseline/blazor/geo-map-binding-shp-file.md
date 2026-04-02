---
title: Blazor Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics
_description: Use Infragistics' Blazor JavaScript map to load geo-spatial data from shape files. View Ignite UI for Blazor map demos!
_keywords: Blazor map, shapefiles, Ignite UI for Blazor, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_tocName: Binding Shape File
_premium: true
---

# Blazor Binding Shape Files with Geo-spatial Data

The Ignite UI for Blazor map component, the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html) class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of [`IgbShapefileRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapefileRecord.html) objects.

## Blazor Binding Shape Files with Geo-spatial Data Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicPolylineSeries ShapefileDataSource="Data"
                                      ShapeFilterResolution="0.0"
                                      ShapeStrokeThickness="3"
                                      ShapeStroke="rgb(82, 82, 82, 0.4)"/>
        </IgbGeographicMap>
    </div>
</div>

@code {

    private IgbShapeDataSource Data;

    protected override void OnInitialized()
    {
        this.Data = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp",
            DatabaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf"
        };
    }
}
```


<div class="divider--half"></div>

The following table explains properties of the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html) class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| [`ShapefileSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html#IgniteUI_Blazor_Controls_IgbShapeDataSource_ShapefileSource) | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|[`DatabaseSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html#IgniteUI_Blazor_Controls_IgbShapeDataSource_DatabaseSource) | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

<!-- TODO add for WPF only: -->

<!-- Both of the source properties for shape files are of Uri type. This means that shape files can be embedded resources in the application assembly and on the internet (via http). Refer to the previous section for more information on this process. The rules for resolving Uri objects are equivalent to any standard Uri property, for example the BitmapImage.UriSource property. -->

When both source properties are set to non-null values, then the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html) object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html) is populated with [`IgbShapefileRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapefileRecord.html) objects and the `ImportCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles

The following code creates an instance of the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html) object for loading a shape file that contains locations of major cities in the world. It also demonstrates how to handle the `ImportCompleted` event as a prerequisite for binding data to the map component.

## Binding Shapefiles

In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have an [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property which can be bound to an array of objects. The [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html) is an example such array because it contains a list of [`IgbShapefileRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapefileRecord.html) objects.

The [`IgbShapefileRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapefileRecord.html) class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|`Points`|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| `Fields` |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet

This code example assumes that shape files were loaded using the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html).
The following code binds [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) in the map component to the [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html) and maps the `Points` property of all [`IgbShapefileRecord`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapefileRecord.html) objects.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries ShapefileDataSource="@DataSource"
        ShapeFilterResolution="0.0"
        ShapeStrokeThickness="3"
        ShapeStroke="rgb(82, 82, 82, 0.4)"/>
</IgbGeographicMap>

@code {

    private ShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        this.DataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf"
        };
    }
}
```

## API References

- `Fields`
- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)
- `ImportCompleted`
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- `Points`
- [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html)
