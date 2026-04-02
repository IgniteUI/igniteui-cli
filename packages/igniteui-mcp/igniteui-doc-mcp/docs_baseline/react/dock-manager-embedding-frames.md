---
title: React Dock Manager | Embed Frames | Infragistics
_description: Use Infragistics' React dock manager to embed interactive content using panes. View Ignite UI for React dock manager tutorials!
_keywords: dock manager, embed frames, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["DockManager"]
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


<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="http://localhost:4200">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

<!--
## Usage

Once the Dock Manager is imported, you can add it on the page:

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

```ts
import { IgcDockManagerPaneType, IgcSplitPaneOrientation, IgcDockManagerComponent } from 'igniteui-dockmanager';

// ...

this.dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;
this.dockManager.layout = {
    rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content1',
                header: 'Pane 1'
            }
        ]
    }
};
```

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
``` -->

## API References

- [`IgrDockManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html)
