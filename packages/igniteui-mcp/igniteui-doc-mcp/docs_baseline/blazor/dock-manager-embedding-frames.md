---
title: "Blazor Dock Manager | Embed Frames | Infragistics"
description: Use Infragistics' Blazor dock manager to embed interactive content using panes. View Ignite UI for Blazor dock manager tutorials!
keywords: dock manager, embed frames, Ignite UI for Blazor, Infragistics
license: commercial
mentionedTypes: ["DockManager"]
llms:
  description: "The Infragistics Blazor Dock Manager component provides you with the layout for embedding interactive content in your application using panes."
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

## API References

[`IgbDockManager`](mcp:get_api_reference?platform=blazor&component=IgbDockManager)<br />
