---
title: Blazor Dock Manager | Embed Frames | Infragistics
_description: Use Infragistics' Blazor dock manager to embed interactive content using panes. View Ignite UI for Blazor dock manager tutorials!
_keywords: dock manager, embed frames, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["DockManager"]
_tocName: Embedding Frames
_premium: true
---

# Blazor Embedding Frames in Dock Manager

The Infragistics Blazor Dock Manager component provides you with the layout for embedding interactive content in your application using panes.

## Blazor Embedding Frames in Dock Manager Example

```razor
@inject IJSRuntime JSRuntime;
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbDockManager @ref="dockManager" Layout="Layout" height="100%" width="100%">
            <div slot="content1" class="container vertical">
                <iframe src="https://infragistics.com/webcomponents-demos/charts/doughnut-chart-overview"
                        class="container vertical" seamless frameBorder="0" >
                </iframe>
            </div>
            <div slot="content2" class="container vertical">
                <iframe src="https://infragistics.com/webcomponents-demos/gauges/radial-gauge-needle"
                        class="container vertical" seamless frameBorder="0" >
                </iframe>
            </div>
            <div slot="content3" class="container vertical">
                <iframe src="https://infragistics.com/webcomponents-demos/maps/geo-map-binding-data-csv"
                        class="container vertical" seamless frameBorder="0" >
                </iframe>
            </div>
        </IgbDockManager>
    </div>
</div>

@code {

    public IgbDockManager dockManager { get; set; }
    public IgbDockManagerLayout Layout { get; set; }

    protected override void OnInitialized()
    {
        Layout = new IgbDockManagerLayout();
        Layout.RootPane = new IgbSplitPane();
        Layout.RootPane.PaneType = DockManagerPaneType.SplitPane;
        Layout.RootPane.Orientation = SplitPaneOrientation.Horizontal;
        var splitPane1 = new IgbSplitPane
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            Size = 300
        };
        var contentPane1 = new IgbContentPane
        {
            PaneType = DockManagerPaneType.ContentPane,
            Header = "EMBEDDED RADIAL GAUGE",
            ContentId = "content1",
        };
        var contentPane2 = new IgbContentPane
        {
            PaneType = DockManagerPaneType.ContentPane,
            Header = "EMBEDDED DOUGHNUT CHART",
            ContentId = "content2",
        };
        var contentPane3 = new IgbContentPane
        {
            PaneType = DockManagerPaneType.ContentPane,
            Header = "EMBEDDED GEOGRAPHIC MAP",
            ContentId = "content3",
        };
        Layout.RootPane.Panes.Add(splitPane1);
        splitPane1.Panes.Add(contentPane1);
        splitPane1.Panes.Add(contentPane2);
        splitPane1.Panes.Add(contentPane3);
    }
}
```

<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="https://localhost:44317">View on StackBlitz
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

- [`IgbDockManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDockManager.html)
