---
title: React Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics
_description: Use Infragistics' React JavaScript map to load geo-spatial data from shape files. View Ignite UI for React map demos!
_keywords: React map, shapefiles, Ignite UI for React, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_tocName: Binding Shape File
_premium: true
---

# React Binding Shape Files with Geo-spatial Data

The Ignite UI for React map component, the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html) class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of [`IgrShapefileRecord`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapefilerecord.html) objects.

## React Binding Shape Files with Geo-spatial Data Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingShapefilePolylines extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

        // loading a shapefile with geographic polygons
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldCities.shp " + shapeRecords.length);

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM
            };
            geoPolylines.push(route);
        }

        const geoSeries = new IgrGeographicPolylineSeries( { name: "series" });
        geoSeries.dataSource = geoPolylines;
        geoSeries.shapeMemberPath = "points";
        geoSeries.shapeFilterResolution = 0.0;
        geoSeries.shapeStrokeThickness = 3;
        geoSeries.shapeStroke = "rgb(82, 82, 82, 0.4)";
        geoSeries.tooltipTemplate = this.createTooltip;

        this.geoMap.series.add(geoSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const capacity = dataItem.capacity + " GB/s";
        const distance = dataItem.distance + " KM";

        return <div>
            {/* <div className="tooltipTitle">{dataItem.name}</div> */}
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Name</div>
                    <div className="tooltipVal">{dataItem.name}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Distance</div>
                    <div className="tooltipVal">{distance}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Capacity</div>
                    <div className="tooltipVal">{capacity}</div>
                </div>
            </div>
        </div>
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapBindingShapefilePolylines/>);
```


<div class="divider--half"></div>

The following table explains properties of the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html) class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| [`shapefileSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html#shapefileSource) | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|[`databaseSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html#databaseSource) | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

<!-- TODO add for WPF only: -->

<!-- Both of the source properties for shape files are of Uri type. This means that shape files can be embedded resources in the application assembly and on the internet (via http). Refer to the previous section for more information on this process. The rules for resolving Uri objects are equivalent to any standard Uri property, for example the BitmapImage.UriSource property. -->

When both source properties are set to non-null values, then the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html) object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html) is populated with [`IgrShapefileRecord`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapefilerecord.html) objects and the `ImportCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles

The following code creates an instance of the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html) object for loading a shape file that contains locations of major cities in the world. It also demonstrates how to handle the `ImportCompleted` event as a prerequisite for binding data to the map component.

```ts
import { IgrShapeDataSource } from 'igniteui-react-core';
// ...

const sds = new IgrShapeDataSource();
sds.importCompleted = this.onShapePolylinesLoaded;
sds.shapefileSource = url + "/shapes/WorldCableRoutes.shp";
sds.databaseSource  = url + "/shapes/WorldCableRoutes.dbf";
sds.dataBind();
```

## Binding Shapefiles

In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have an `ItemsSource` property which can be bound to an array of objects. The [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html) is an example such array because it contains a list of [`IgrShapefileRecord`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapefilerecord.html) objects.

The [`IgrShapefileRecord`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapefilerecord.html) class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|`Points`|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| `Fields` |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet

This code example assumes that shape files were loaded using the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html).
The following code binds [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) in the map component to the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html) and maps the `Points` property of all [`IgrShapefileRecord`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapefilerecord.html) objects.

```ts
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
// ...

public onShapePolylinesLoaded(sds: IgrShapeDataSource, e: any) {
    const geoPolylines: any[] = [];
    for (const record of sds.getPointData()) {
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues["Name"],
                capacity: record.fieldValues["CapacityG"],
                distance: record.fieldValues["DistanceKM"],
                isOverLand: record.fieldValues["OverLand"] === 0,
                isActive: record.fieldValues["NotLive"] !== 0,
                service: record.fieldValues["InService"]
            };
            geoPolylines.push(route);
        }

    const geoSeries = new IgrGeographicPolylineSeries( { name: "series" });
    geoSeries.dataSource = geoPolylines;
    geoSeries.shapeMemberPath = "points";
    geoSeries.shapeFilterResolution = 0.0;
    geoSeries.shapeStrokeThickness = 3;
    geoSeries.shapeStroke = "rgb(82, 82, 82, 0.4)";
    geoSeries.tooltipTemplate = this.createTooltip;
    this.geoMap.series.add(symbolSeries);
}
```

## API References

- `Fields`
- [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html)
- `ImportCompleted`
- `ItemsSource`
- `Points`
- [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html)
