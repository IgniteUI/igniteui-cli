---
title: React Map | Data Visualization Tools | Displaying Open Street Maps Imagery | Infragistics
_description: Use Infragistics' React to display imagery from OSM maps. View Ignite UI for React map tutorials!
_keywords: React map, OSM, Ignite UI for React, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Displaying OSM Imagery
_premium: true
---

# React Displaying Imagery from Open Street Maps

The React [`IgrOpenStreetMapImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igropenstreetmapimagery.html) is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the Ignite UI for React map component already displays geographic imagery from the Open Street Maps. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

## React Displaying Imagery from Open Street Maps Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// for handling of maps events
import { IgrRectChangedEventArgs } from 'igniteui-react-core';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrOpenStreetMapImagery } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule, IgrSeriesViewer } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryOSM extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        // actualWindowRectChanged={this.onMapWindowRectChanged}
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

        const mapImagery = new IgrOpenStreetMapImagery();
        geoMap.backgroundContent = mapImagery;

        const geoRect = { left: -150.0, top: -60.0, width: 315.0, height: 140.0 };
        geoMap.zoomToGeographic(geoRect);
    }

    public onMapWindowRectChanged(viewer: IgrSeriesViewer, e: IgrRectChangedEventArgs) {
        let geoMap = viewer as IgrGeographicMap;
        // const rect = e.newRect;
        // console.log("win \n left:" + rect.left +
        // ", top:" + rect.top + ", width:"  + rect.width + ", height:"  + rect.height);

        // const geo = geoMap.getGeographicFromZoom(rect);
        // console.log("geo \n left:" + geo.left +
        // ", top:" + geo.top + ", width:"  + geo.width + ", height:"  + geo.height);
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryOSM/>);
```


<div class="divider--half"></div>

## Code Snippet

This code example explicitly sets `BackgroundContent` of the map component to the [`IgrOpenStreetMapImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igropenstreetmapimagery.html) object which provides geographic imagery from  OpenStreetMap© contributors.

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrOpenStreetMapImagery } from 'igniteui-react-maps';
// ...
const tileSource = new IgrOpenStreetMapImagery();

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

## API References

- `BackgroundContent`
- [`IgrOpenStreetMapImagery`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igropenstreetmapimagery.html)
