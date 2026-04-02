---
title: React Map | Data Visualization Tools | Scatter Contour Series | Data Binding | Infragistics
_description: Use Infragistics React map's scatter contour series to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for React map's series!
_keywords: React map, scatter contour series, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap","GeographicContourLineSeries","CustomPaletteColorScale", "Series"]
_tocName: Geographic Contour Map
_premium: true
---

# React Geographic Contour Map

In React map component, you can use the [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data defined by geographic locations such as weather temperature, atmospheric pressure, precipitation, population distribution, topographic data, etc.

## React Geographic Contour Map Example

```css
.LegendOverlay {
    border-radius: 3px;
    background: rgba(221, 221, 221, 0.671);
    position: absolute;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-left: 2px;
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    pointer-events: none;
    font-family: Lato, Helvetica, sans-serif;
    font-size: 10px;
    color: #2c2c2c;
}

.LegendItem {
    /* height: 12px; */
    /* width: 10px; */
    /* background: rgb(5, 91, 219); */
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 0px;
    /* border-radius: 3px; */
    text-decoration: none;
}

.LegendItemMap {
    height: 12px;
    width: 12px;
    background: rgb(35, 36, 36);
    background: rgb(5, 91, 219);
    display: inline-block;
    /* margin-left: 2px; */
    /* margin-top: 2px; */
    margin-top: 1px;
    border-radius: 3px;
}

.LegendItemLabel {
    /* background: rgb(97, 241, 186); */
    /* width: 115px; */
    display: inline-block;
    /* vertical-align: text-top; */
    margin-left: 5px;
    margin-right: 5px;
    font-size: 10px;
}

.SourceLabel {
    display: block;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 10px;
    font-family: Lato, Helvetica, sans-serif;
    color: #2c2c2c;
    background: #f0f1f100;
}

.SourceStyle {
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 10px;
    font-family: Lato, Helvetica, sans-serif;
    color: #2c2c2c;
    background: #f0f1f100;
    pointer-events: auto;
}

.SourceStyle a {
    color: #1362f5 !important;
    background: #f0f1f100 !important;
    pointer-events: auto;
}

.SourceStyle a:hover {
    /* color: #134ff5; */
    color: #2c2c2c !important;
    background: #f0f1f100 !important;
    pointer-events: auto;
}
```
```tsx
import React from 'react';
import "./LegendOverlay.css";

export class LegendOverlay extends React.Component<any, any> {

    public render(): JSX.Element {

        let bg: string = this.props.background;
        if (bg === undefined) { bg = "rgba(221, 221, 221, 0.65)"; }

        let style = { background: bg, bottom: 3, left: 3 } as React.CSSProperties;

        const dock: string = this.props.dock;
        if (dock === "TopRight") {
            style = { background: bg, top: 3, right: 3 } as React.CSSProperties;
        }
        else if (dock === "TopLeft") {
            style = { background: bg, top: 3, left: 3 } as React.CSSProperties;
        }
        else if (dock === "BottomRight") {
            style = { background: bg, bottom: 3, right: 3 } as React.CSSProperties;
        }
        else  { // if (dock === "BottomLeft")
            style = { background: bg, bottom: 3, left: 3 } as React.CSSProperties;
        }

        // let title: JSX.Element;

        const hasLink = this.props.href !== undefined || this.props.text !== undefined;
        return hasLink ?
            <div className="LegendOverlay" style={style}>
                <LegendLink text={this.props.text} href={this.props.href}  />
                <div   >
                    {this.props.children}
                </div>
            </div>
            :
            <div className="LegendOverlay" style={style}>
                <div   >
                    {this.props.children}
                </div>
            </div>

        // return (
            // <div className="LegendOverlay" style={style}>
            //     {this.props.children}
            // </div>
        // );
    }
}

export class LegendItem extends React.Component<any, any> {

    public render(): JSX.Element {
        const bg = this.props.background;
        const bgStyle = { background: bg } as React.CSSProperties;

        return (
            <div  className="LegendItem">
                <div   className="LegendItemMap" style={bgStyle}/>
                <label className="LegendItemLabel">{this.props.text}</label>
            </div>
        );
    }
}

export class LegendLink extends React.Component<any, any> {

    public render(): JSX.Element {
        const hasLink = this.props.href !== undefined;

        return hasLink ?
        <div className="SourceStyle">
            <a target="_blank" href={this.props.href} rel="noopener noreferrer">
            {this.props.text}</a>
        </div> :
        // <div >
            <label className="SourceLabel">{this.props.text}</label>
        // </div>
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LegendOverlay, LegendItem } from "./LegendOverlay"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicContourLineSeries } from 'igniteui-react-maps';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterContourSeries extends React.Component<any, any> {

    private geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrGeographicMap
                    ref={this.onMapRef}
                    width="100%"
                    height="100%"
                    zoomable="true" />

                <LegendOverlay dock="BottomLeft"
                text="Source: NOAA" href="https://www.noaa.gov/" />
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>

            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldTemperatures.shp: " + shapeRecords.length);

        const contourPoints: any[] = [];
        for (const record of shapeRecords) {
            const temp = record.fieldValues.Contour;
            // using only major contours (every 10th degrees Celsius)
            if (temp % 10 === 0 && temp >= 0) {
                for (const shapes of record.points) {
                     for (let i = 0; i < shapes.length; i++) {
                        if (i % 5 === 0) {
                            const p = shapes[i];
                            const item = { lon: p.x, lat: p.y, value: temp};
                            contourPoints.push(item);
                        }
                     }
                }
            }
        }

        console.log("loaded contour points: " + contourPoints.length);
        this.createContourSeries(contourPoints);
    }

    public createContourSeries(data: any[])
    {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)",  // semi-transparent red
        ];

        const brushScale = new IgrValueBrushScale({});
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const contourSeries = new IgrGeographicContourLineSeries( { name: "contourSeries" });
        contourSeries.dataSource = data;
        contourSeries.longitudeMemberPath = "lon";
        contourSeries.latitudeMemberPath = "lat";
        contourSeries.valueMemberPath = "value";
        contourSeries.fillScale = brushScale;
        contourSeries.tooltipTemplate = this.createContourTooltip;
        contourSeries.thickness = 4;

        this.geoMap.series.add(contourSeries);
    }

    public createContourTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        // dataContext.item is always a number for contour series
        const tmp = dataItem.toFixed(1) + "°C";
        return <div className="tooltipBox">
            <div className="tooltipRow">
                <div className="tooltipLbl">Temperature:</div>
                <div className="tooltipVal"> {tmp}</div>
            </div>
        </div>
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapTypeScatterContourSeries/>);
```


<div class="divider--half"></div>

The [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) works a lot like the [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) except that it represents data as contour lines, colored using a fill scale and the geographic scatter area series, represents data as a surface interpolated using a color scale.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store geographic location (longitude and latitude coordinates) and one data column that stores a value associated with the geographic location. These data column, are identified by [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#latitudeMemberPath), and [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#valueMemberPath) properties of the geographic series.
The [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a `TriangulationSource` for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`ItemsSource`|any|The source of data items to perform triangulation on if the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource) property provides no triangulation data.|
|[`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#longitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the `ItemsSource`.|
|[`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#latitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to to the `ItemsSource`.|
|[`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#valueMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`fillScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#fillScale) property is set.|
|[`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource)|any|Gets or sets the source of triangulation data. Setting Triangles of the TriangulationSource object to this property improves both runtime performance and geographic series rendering.|
|[`triangleVertexMemberPath1`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#triangleVertexMemberPath1)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath2`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#triangleVertexMemberPath2)|string| The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath3`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#triangleVertexMemberPath3)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Contour Fill Scale

Use the [`fillScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#fillScale) property of the [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) to resolve fill brushes of the contour lines of the geographic series.
The provided \`ValueBrushScale class should satisfy most of your coloring needs, but the application for custom coloring logic can inherit the ValueBrushScale class.
The following table list properties of the CustomPaletteColorScale affecting the surface coloring of the GeographicContourLineSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`brushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#brushes)|BrushCollection|Gets or sets the collection of brushes for filling contours of the [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html)|
|[`maximumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html#maximumValue)|double|The highest value to assign a brush in a fill scale.|
|[`minimumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html#minimumValue)|double|The lowest value to assign a brush in a fill scale.|

## Code Snippet

The following code shows how to bind the [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) to triangulation data representing surface temperatures in the world.

<!-- React -->

```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicContourLineSeries } from 'igniteui-react-maps';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
// ...

public render() {
    return (
    <IgrGeographicMap
        ref={this.onMapReferenced}
        width="600px"
        height="600px"
        zoomable="true" />
    );
}
```

```ts
public onMapReferenced(map: IgrGeographicMap) {
    this.geoMap = map;
    this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };
    const sds = new IgrShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {
    const contourPoints: any[] = [];
    for (const record of sds.getPointData()) {
        const temp = record.fieldValues.Contour;
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                 for (let i = 0; i < shapes.length; i++) {
                    if (i % 5 === 0) {
                        const p = shapes[i];
                        const item = { lon: p.x, lat: p.y, value: temp};
                        contourPoints.push(item);
                    }
                 }
            }
        }
    }

    this.createContourSeries(contourPoints);
}

public createContourSeries(data: any[])
{
    const brushes = [
        "rgba(32, 146, 252, 0.5)",
        "rgba(14, 194, 14, 0.5)",
        "rgba(252, 120, 32, 0.5)",
        "rgba(252, 32, 32, 0.5)",
    ];

    const brushScale = new IgrValueBrushScale({});
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const contourSeries = new IgrGeographicContourLineSeries( { name: "contourSeries" });
    contourSeries.dataSource = data;
    contourSeries.longitudeMemberPath = "lon";
    contourSeries.latitudeMemberPath = "lat";
    contourSeries.valueMemberPath = "value";
    contourSeries.fillScale = brushScale;
    contourSeries.thickness = 4;

    this.geoMap.series.add(contourSeries);
}
```

## API References

- [`fillScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#fillScale)
- [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html)
- [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#longitudeMemberPath)
- [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource)
- `TriangulationSource`
- [`IgrValueBrushScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrvaluebrushscale.html)
- [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#valueMemberPath)
