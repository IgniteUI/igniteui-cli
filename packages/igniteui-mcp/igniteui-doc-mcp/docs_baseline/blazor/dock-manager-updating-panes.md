---
title: Blazor Dock Manager | Updating Panes | Infragistics
_description: Use Infragistics' Blazor dock manager control to create interactive content using panes that can update based on actions. Check out Ignite UI for Blazor dock manager tutorials!
_keywords: dock manager, layout, updating panes, Ignite UI for Blazor
_license: commercial
mentionedTypes: ["DockManager"]
_tocName: Using Panes
_premium: true
---

# Blazor Updating Panes in Dock Manager

The Infragistics Blazor Dock Manager component provides you with the layout for creating interactive content in your application using panes that can update based on actions of end-users.

## Blazor Updating Panes in Dock Manager Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JSRuntime

<div class="container vertical">
    <div class="container vertical" style="overflow: hidden;">

        @*NOTE: code in npmJS\src\DockManagerUpdatingPanes.js file sets layout of these DIV elements:*@
        <IgbDockManager @ref="dockManager" Layout="Layout" height="100%" width="100%">
            <div slot="content1">
                @if (this.EmployeeList != null)
                {
                     @foreach (var employee in this.EmployeeList)
                     {
                         <div style="background: @employee.Background; display: flex; flex-direction: row; align-items: center; cursor: pointer; padding: 0.5rem"
                              @onclick="@(e => onClick(employee))">
                             <img style="height: 3rem; width: 3rem" src="@employee.Photo"/>
                             <div style="padding-left: 1rem">@employee.Name</div>
                         </div>
                     }
                }
            </div>

            <div slot="content2" style="height: 100%; width: 100%; overflow: hidden;">
                <IgbCategoryChart @ref="ProductivityChart" Height="100%" Width="100%"
                               ChartTitle="@EmployeeSelectedInfo"
                               TitleTopMargin="10"
                               ChartType="CategoryChartType.Column"
                               ToolTipType="ToolTipType.Item"
                               CrosshairsDisplayMode="CrosshairsDisplayMode.Both"
                               CrosshairsAnnotationEnabled="true"
                               IsSeriesHighlightingEnabled="true"
                               IsTransitionInEnabled="true"
                               YAxisMaximumValue="100"
                               YAxisMinimumValue="40"/>
            </div>

            <div slot="content3" style="height: 100%; width: 100%; overflow: hidden;">
                <IgbGeographicMap @ref="GeoMap" Height="100%" Width="100%" Zoomable="true"
                               BackgroundContent="@GeoImagery">
                      <IgbGeographicSymbolSeries
                               DataSource="EmployeeList"
                               MarkerType="MarkerType.Circle"
                               LatitudeMemberPath="Latitude"
                               LongitudeMemberPath="Longitude"
                               MarkerBrush="White"
                               MarkerOutline="Red" />

                      <IgbGeographicSymbolSeries @ref="GeoSeries"
                               DataSource="EmployeeSelected"
                               MarkerType="MarkerType.Circle"
                               LatitudeMemberPath="Latitude"
                               LongitudeMemberPath="Longitude"
                               MarkerBrush="White"
                               MarkerOutline="DarkViolet" />
                </IgbGeographicMap>
            </div>

        </IgbDockManager>
    </div>
</div>

@code {

    public IgbDockManager dockManager { get; set; }
    public IgbDockManagerLayout Layout { get; set; }
    protected List<PersonInfo> EmployeeList;
    protected List<PersonInfo> EmployeeSelected;
    protected IgbArcGISOnlineMapImagery GeoImagery;
    protected IgbGeographicSymbolSeries GeoSeries;
    protected IgbGeographicMap GeoMap;
    protected Rect GeoBounds;
    protected IgbCategoryChart ProductivityChart;
    protected string EmployeeSelectedInfo;

    protected override void OnInitialized()
    {
        Layout = new IgbDockManagerLayout();
        Layout.RootPane = new IgbSplitPane();
        Layout.RootPane.Size = 200;
        Layout.RootPane.PaneType = DockManagerPaneType.SplitPane;
        Layout.RootPane.Orientation = SplitPaneOrientation.Horizontal;

        var rootPane = new IgbDockManagerPaneCollection(null, null);
        var splitpane1 = new IgbSplitPane { PaneType = DockManagerPaneType.SplitPane, Orientation = SplitPaneOrientation.Vertical };
        var splitpane2 = new IgbSplitPane { PaneType = DockManagerPaneType.SplitPane, Orientation = SplitPaneOrientation.Vertical, Size=200 };
        var contentpane1 = new IgbContentPane { PaneType = DockManagerPaneType.ContentPane, Header = "Managers List", ContentId = "content1" };
        var contentpane2 = new IgbContentPane { PaneType = DockManagerPaneType.ContentPane, Header = "Manager's Productivity", ContentId = "content2" };
        var contentpane3 = new IgbContentPane { PaneType = DockManagerPaneType.ContentPane, Header = "Managers Location", ContentId = "content3" };

        splitpane1.Panes.Add(contentpane1);
        splitpane2.Panes.Add(contentpane2);
        splitpane2.Panes.Add(contentpane3);
        Layout.RootPane.Panes.Add(splitpane1);
        Layout.RootPane.Panes.Add(splitpane2);
    }

    protected override async Task OnInitializedAsync()
    {
        this.GeoBounds = new Rect() { Left = - 150, Top = - 60, Width = 315, Height = 140 };

        this.GeoImagery = new IgbArcGISOnlineMapImagery();
        this.GeoImagery.MapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";

        this.EmployeeList = PersonDataSource.Create(200);
        this.EmployeeList[0].Background = "#a8d3fd";
        this.EmployeeSelected =  new List<PersonInfo> { this.EmployeeList[0] };
        this.EmployeeSelectedInfo = this.EmployeeList[0].Name + " (" + this.EmployeeList[0].City + ", " + this.EmployeeList[0].Country + ")";
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            if (this.ProductivityChart != null)
            {
                this.ProductivityChart.DataSource = this.EmployeeList[0].Productivity;
            }
        }
    }

    private void onClick(PersonInfo selectedManager)
    {
        this.EmployeeSelected = new List<PersonInfo> { selectedManager };
        this.EmployeeSelectedInfo = selectedManager.Name + " (" + selectedManager.City + ", " + selectedManager.Country + ")";
        this.ProductivityChart.DataSource = selectedManager.Productivity;

        this.ZoomMapToLocationOf(selectedManager);

        foreach(var employee in this.EmployeeList)
        {
            if (employee.ID != selectedManager.ID) {
                employee.Background = "transparent";
            } else {
                employee.Background = "#a8d3fd";
            }
        }
    }

    private void ZoomMapToLocationOf(PersonInfo selectedManager)
    {
        var geoZoom = new Rect();
        geoZoom.Width = 30;
        geoZoom.Height = 20;
        geoZoom.Left = selectedManager.Longitude - (geoZoom.Width  / 2);
        geoZoom.Top  = selectedManager.Latitude  - (geoZoom.Height / 2);
        this.GeoMap.ZoomToGeographic(geoZoom);
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
