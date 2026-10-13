---
title: "React Dock Manager | Embed Frames | Infragistics"
description: Use Infragistics' React dock manager to embed interactive content using panes. View Ignite UI for React dock manager tutorials!
keywords: dock manager, embed frames, Ignite UI for React, Infragistics
license: commercial
mentionedTypes: ["DockManager"]
llms:
  description: "The Infragistics React Dock Manager component provides you with the layout for embedding interactive content in your application using panes."
_tocName: Embedding Frames
_premium: true
---
# React Embedding Frames in Dock Manager

The Infragistics React Dock Manager component provides you with the layout for embedding interactive content in your application using panes.

## React Embedding Frames in Dock Manager Example

```css
.dockManagerContent {
    padding: 0.5rem;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    /* background: orange; */
}

.dockManagerFull {
    padding: 0rem;
    margin: 0rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.dockManagerFrame {
    padding: 0rem;
    margin: 0rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.employeesDetailsRow {
    height: 4rem;
    display: flex;
    flex-direction: row;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import { IgrContentPane, IgrDockManager, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

export default class DockManagerEmbeddingFrames extends React.Component {

    public dockManager: IgrDockManager;
    public geoMapPane: IgrContentPane;
    public gaugePane: IgrContentPane;
    public doughnutChartPane: IgrContentPane;

    constructor(props: any) {
        super(props);

        // this.onMapRef = this.onMapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDockManager id="dockManager">
                    <div className="dockManagerFull" slot="doughnutChartContainer"  >
                        <iframe className="dockManagerFrame" seamless frameBorder="0"
                        src='https://infragistics.com/webcomponents-demos/charts/doughnut-chart-overview' ></iframe>
                    </div>
                    <div className="dockManagerFull" slot="gaugeContainer" >
                        <iframe className="dockManagerFrame" seamless frameBorder="0"
                        src='https://infragistics.com/webcomponents-demos/gauges/radial-gauge-needle' ></iframe>
                    </div>
                    <div className="dockManagerFull" slot="geoMapContainer"  >
                        <iframe className="dockManagerFrame" seamless frameBorder="0"
                        src='https://infragistics.com/react-demos/maps/geo-map-binding-data-csv'  ></iframe>
                    </div>
                </IgrDockManager>
            </div>
        );
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder

        this.gaugePane = {
            // size: 150,
            header: 'ANGULAR RADIAL GAUGE',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'gaugeContainer'
        };

        this.doughnutChartPane = {
            // size: 150,
            header: 'WEB COMPONENT DOUGHNUT CHART',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'doughnutChartContainer'
        };

        this.geoMapPane = {
            // size: 200,
            header: 'REACT GEOGRAPHIC MAP',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'geoMapContainer'
        };

        this.dockManager = document.getElementById("dockManager") as IgrDockManager;
        this.dockManager.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.vertical,
                panes: [
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.horizontal,
                        // size: 250,
                        panes: [  this.gaugePane, this.doughnutChartPane]
                    },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        // size: 200,
                        panes: [
                            // this.financialChartPane,
                            this.geoMapPane ]
                    },

                ]
            },
        };
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerEmbeddingFrames/>);
```

## API References

[`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager)<br />
