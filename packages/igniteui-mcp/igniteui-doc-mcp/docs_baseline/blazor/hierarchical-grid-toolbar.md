---
title: Blazor Hierarchical Grid for Ignite UI for Blazor for
_description: Use Blazor Hierarchical Grid for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: Blazor, Hierarchical Grid, Hierarchical Grid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridToolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid", "GridToolbarActions"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/toolbar
_tocName: Toolbar
_premium: true
---

# Blazor Hierarchical Grid Toolbar

The Ignite UI for Blazor Toolbar in is a container for UI operations in the Blazor Hierarchical Grid. The Blazor toolbar is located at the top of the Blazor component, i.e., the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the Blazor Hierarchical Grid includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support Blazor events and expose API for developers.

<!-- ComponentStart: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

The predefined [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) and [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html) UI components are added inside the [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html) and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid>
    <IgbGridToolbar>
        <IgbGridToolbarTitle>Hierarchical Grid Toolbar</IgbGridToolbarTitle>
        <IgbGridToolbarActions>
            <IgbGridToolbarAdvancedFiltering></IgbGridToolbarAdvancedFiltering>
            <IgbGridToolbarHiding></IgbGridToolbarHiding>
            <IgbGridToolbarPinning></IgbGridToolbarPinning>
            <IgbGridToolbarExporter></IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid>
    <IgbGridToolbar>
    </IgbGridToolbar>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

For a comprehensive look over each of the default UI components, continue reading the **Features** section below.

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for Blazor suite.

Listed below are the main features of the toolbar with example code for each of them.

<!-- ComponentStart: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

### Title

Setting a title for the toolbar in your grid is achieved by using the [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html).

Users can provide anything from simple text to more involved templates.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarTitle>Grid toolbar title</IgbGridToolbarTitle>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Actions

The [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) is where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <!--...-->
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Column Pinning

The [`IgbGridToolbarPinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarPinning.html) component provides the default UI for interacting with column pinning in the grid.

The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component title, the placeholder for the component input and the height of the dropdown itself.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarPinning Title="Grid pinned columns" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarPinning>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Column Hiding

The [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html) provides the default UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarHiding Title="Grid column hiding" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarHiding>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Advanced Filtering

Toolbar Advanced Filtering component provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarAdvancedFiltering></IgbGridToolbarAdvancedFiltering>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Data Exporting

<!-- ComponentStart: HierarchicalGrid -->

> [!Note]
> When exporting the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
> belonging to their respective grid (the child grids will not be included in the exported data).

<!-- ComponentEnd: HierarchicalGrid -->

As with the rest of the toolbar actions, exporting is provided through a [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html) out of the box.

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.

These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the generated file. For full reference, consult the API documentation for the `ToolbarExporter`.

Here is a snippet showing some of the options which can be customized through the Blazor template:

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarExporter ExportCSV="true" ExportExcel="true" Filename="exported_data"></IgbGridToolbarExporter>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

In addition to changing the exported filename, the user can further configure the exporter options by waiting for the `ToolbarExporting` event and customizing the options entry in the event properties.

> [!Note]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

```razor
<IgbHierarchicalGrid ToolbarExportingScript="ConfigureExport"></IgbHierarchicalGrid>

// In Javascript
igRegisterScript("ConfigureExport", (evt) => {
    const args = evt.detail;
    const options = args.options;
    options.fileName = `Report_${new Date().toDateString()}`;
    args.exporter.columnExporting.subscribe((columnArgs) => {
        columnArgs.cancel = columnArgs.header === 'Photo';
    });
}, false);
```

<!-- ComponentEnd: HierarchicalGrid -->

The following sample demonstrates how to customize the exported files:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        PrimaryKey="ID"
        ToolbarExportingScript="WebHierarchicalGridToolbarExporting"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarExporter
                    >
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Width="150px">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.String"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.String"
            Width="200px">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;

    }

    private IgbHierarchicalGrid hierarchicalGrid1;

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.

Moreover, users can set the toolbar [`ShowProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html#IgniteUI_Blazor_Controls_IgbGridToolbar_ShowProgress) property and use for their own long running operations or just as another way to signify an action taking place in the grid.

The sample belows uses has significant amount of data, in order to increase the time needed for data export so the progressbar can be seen. Additionally it has another button that simulates a long running operation in the grid:

<!-- NOTE this sample is differed -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
            AutoGenerate="false"
            Data="SingersNestedData"
            PrimaryKey="ID"
            Name="hierarchicalGrid1"
            @ref="hierarchicalGrid1"
        >
            <IgbGridToolbar @ref="toolbar">
                <IgbGridToolbarTitle>
                    <span>Singers</span>
                </IgbGridToolbarTitle>
                <IgbButton @onclick="ShowProgress">
                  Simulate long running operation
                </IgbButton>
                <IgbGridToolbarActions>
                  <IgbGridToolbarExporter></IgbGridToolbarExporter>
                </IgbGridToolbarActions>
            </IgbGridToolbar>
            <IgbColumn
                Field="Artist"
                Header="Artist"
                DataType="GridColumnDataType.String"
                Width="150px"
            ></IgbColumn>
            <IgbColumn
                Field="Photo"
                Header="Photo"
                DataType="GridColumnDataType.Image"
            ></IgbColumn>
            <IgbColumn
                Field="Debut"
                Header="Debut"
                DataType="GridColumnDataType.Number"
            ></IgbColumn>
            <IgbColumn
                Field="GrammyNominations"
                Header="Grammy Nominations"
                DataType="GridColumnDataType.String"
                Width="200px"
            ></IgbColumn>
            <IgbColumn
                Field="GrammyAwards"
                Header="Grammy Awards"
                DataType="GridColumnDataType.String"
                Width="200px"
            ></IgbColumn>
            <IgbRowIsland ChildDataKey="Albums" AutoGenerate="false">
                <IgbColumn
                    Field="Album"
                    Header="Album"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="LaunchDate"
                    Header="Launch Date"
                    DataType="GridColumnDataType.Date"
                ></IgbColumn>
                <IgbColumn
                    Field="BillboardReview"
                    Header="Billboard Review"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="USBillboard200"
                    Header="US Billboard 200"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbRowIsland ChildDataKey="Songs" AutoGenerate="false">
                    <IgbColumn
                        Field="Number"
                        Header="No."
                        DataType="GridColumnDataType.String"
                    ></IgbColumn>
                    <IgbColumn
                        Field="Title"
                        Header="Title"
                        DataType="GridColumnDataType.String"
                    ></IgbColumn>
                    <IgbColumn
                        Field="Released"
                        Header="Released"
                        DataType="GridColumnDataType.Date"
                    ></IgbColumn>
                    <IgbColumn
                        Field="Genre"
                        Header="Genre"
                        DataType="GridColumnDataType.String"
                    ></IgbColumn>
                </IgbRowIsland>
            </IgbRowIsland>
            <IgbRowIsland ChildDataKey="Tours" AutoGenerate="false">
                <IgbColumn
                    Field="Tour"
                    Header="Tour"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="StartedOn"
                    Header="Started on"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="Location"
                    Header="Location"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="Headliner"
                    Header="Headliner"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
            </IgbRowIsland>
        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    private IgbHierarchicalGrid hierarchicalGrid1;
    private IgbGridToolbar toolbar;

    protected override void OnAfterRender(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;
    }

    private async void ShowProgress()
    {
        this.toolbar.ShowProgress = true;

        await Task.Delay(5000);

        this.toolbar.ShowProgress = false;
    }

    private SingersNestedData _singersNestedData = null;
    public SingersNestedData SingersNestedData
    {
        get
        {
            if (_singersNestedData == null)
            {
                _singersNestedData = new SingersNestedData();
            }
            return _singersNestedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;

public class SingersNestedItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersNestedItem_TourInfo> Tours { get; set; }
    public List<SingersNestedItem_AlbumInfo> Albums { get; set; }
}

public class SingersNestedItem_TourInfo
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}

public class SingersNestedItem_AlbumInfo
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersNestedItem_SongInfo> Songs { get; set; }
}

public class SingersNestedItem_SongInfo
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersNestedData : List<SingersNestedItem>
{
    public SingersNestedData()
    {
        this.Add(new SingersNestedItem
        {
            ID = 0,
            Artist = @"Naomí Yepes",
            Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png",
            Debut = 2011,
            GrammyNominations = 6,
            GrammyAwards = 0,
            HasGrammyAward = false,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"City Jam Sessions",
                    StartedOn = @"Aug 13",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2013",
                    StartedOn = @"Dec 13",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2014",
                    StartedOn = @"Dec 14",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Watermelon Tour",
                    StartedOn = @"Feb 15",
                    Location = @"Worldwide",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2016",
                    StartedOn = @"Dec 16",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"The Dragon Tour",
                    StartedOn = @"Feb 17",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Organic Sessions",
                    StartedOn = @"Aug 18",
                    Location = @"United States, England",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Hope World Tour",
                    StartedOn = @"Mar 19",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Dream Driven",
                    LaunchDate = @"August 25, 2014",
                    BillboardReview = 81,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ferocious",
                            Released = @"28 Apr 2014",
                            Genre = @"Dance-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Going crazy",
                            Released = @"10 Feb 2015",
                            Genre = @"Dance-pop EDM",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Future past",
                            Released = @"14 Jul 2021",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Roaming like them",
                            Released = @"2 Jul 2014",
                            Genre = @"Electro house Electropop",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Last Wishes",
                            Released = @"12 Aug 2014",
                            Genre = @"R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Stay where you are",
                            Released = @"14 Aug 1998",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Imaginarium",
                            Released = @"15 Sep 2013",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Tell me",
                            Released = @"30 Sep 2014",
                            Genre = @"Synth-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Shredded into pieces",
                            Released = @"2 Sep 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Capture this moment",
                            Released = @"5 Jan 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 12,
                            Title = @"Dream Driven",
                            Released = @"12 Dec 1999",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"The dragon journey",
                    LaunchDate = @"May 20, 2016",
                    BillboardReview = 60,
                    USBillboard200 = 2,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Organic me",
                    LaunchDate = @"August 17, 2018",
                    BillboardReview = 82,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Compass",
                            Released = @"15 Jan 2020",
                            Genre = @"mystical parody-bap ",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Key Fields Forever",
                            Released = @"2 Jan 2020",
                            Genre = @"Dance-pop EDM",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stand by Your Goblins",
                            Released = @"20 Nov 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Mad to Walk",
                            Released = @"12 May 2019",
                            Genre = @"Electro house Electropop",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Alice's Waiting",
                            Released = @"28 Jan 2020",
                            Genre = @"R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"We Shall Kiss",
                            Released = @"30 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Behind Single Ants",
                            Released = @"2 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Soap Autopsy",
                            Released = @"8 Aug 2019",
                            Genre = @"Synth-pop R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Have You Met Rich?",
                            Released = @"1 Jul 2019",
                            Genre = @"ethno-tunes",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Livin' on a Banana",
                            Released = @"22 Nov 2019",
                            Genre = @"Crunk reggaeton",
                            Album = @"Organic me"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Curiosity",
                    LaunchDate = @"December 7, 2019",
                    BillboardReview = 75,
                    USBillboard200 = 12,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 1,
            Artist = @"Babila Ebwélé",
            Photo = @"https://dl.infragistics.com/x/img/people/names/babila.png",
            Debut = 2009,
            GrammyNominations = 0,
            GrammyAwards = 11,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"No foundations",
                    StartedOn = @"Jun 04",
                    Location = @"United States, Europe",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Crazy eyes",
                    StartedOn = @"Jun 08",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Zero gravity",
                    StartedOn = @"Apr 19",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Battle with myself",
                    StartedOn = @"Mar 08",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Drive",
                            Released = @"20 May 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Don't Natter",
                            Released = @"10 Jun 2019",
                            Genre = @"adult calypso-industrial",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stairway to Balloons",
                            Released = @"18 Jun 2019",
                            Genre = @"calypso and mariachi",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"The Number of your Apple",
                            Released = @"29 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Your Delightful Heart",
                            Released = @"24 Feb 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Nice Weather For Balloons",
                            Released = @"1 Aug 2019",
                            Genre = @"rap-hop",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"The Girl From Cornwall",
                            Released = @"4 May 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Here Without Jack",
                            Released = @"24 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Born Rancid",
                            Released = @"19 Mar 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Death's dead",
                    LaunchDate = @"June 8, 2016",
                    BillboardReview = 85,
                    USBillboard200 = 95,
                    Artist = @"Babila Ebwélé",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ghost in My Rod",
                            Released = @"5 Oct 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Bed of Men",
                            Released = @"14 Nov 2019",
                            Genre = @"whimsical comedy-grass ",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Don't Push",
                            Released = @"2 Jan 2020",
                            Genre = @"unblack electronic-trip-hop",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Nice Weather For Men",
                            Released = @"18 Dec 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Rancid Rhapsody",
                            Released = @"10 Mar 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Push, Push, Push!",
                            Released = @"21 Feb 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"My Name is Sarah",
                            Released = @"15 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"The Girl From My Hotel",
                            Released = @"6 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Free Box",
                            Released = @"18 Apr 2019",
                            Genre = @"splitter-funk",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Hotel Cardiff",
                            Released = @"30 Dec 2019",
                            Genre = @"guilty pleasure ebm",
                            Album = @"Death's dead"
                        }}

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 2,
            Artist = @"Ahmad Nazeri",
            Photo = @"https://dl.infragistics.com/x/img/people/names/ahmad.png",
            Debut = 2004,
            GrammyNominations = 3,
            GrammyAwards = 1,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
            }
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Bursting bubbles",
                    LaunchDate = @"April 17, 2006",
                    BillboardReview = 69,
                    USBillboard200 = 39,
                    Artist = @"Ahmad Nazeri",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        // ... 11 more items
    }
}
```


## Custom Content

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.

Here is a sample snippet:

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbHierarchicalGrid>
    <IgbGridToolbar>
        <IgbGridToolbarTitle>title</IgbGridToolbarTitle>
        @*
            Everything between the toolbar tags except the default toolbar components
            will be projected as custom content.
        *@
        <IgbGridToolbarActions>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
            AutoGenerate="false"
            Data="SingersNestedData"
            PrimaryKey="ID"
            Name="hierarchicalGrid1"
            @ref="hierarchicalGrid1"
        >
            <IgbGridToolbar>
                <IgbGridToolbarTitle>
                    <span>Singers</span>
                </IgbGridToolbarTitle>
                <IgbButton @onclick="ClearSort">
                  <span slot="prefix">
                    <IgbIcon @ref="iconRef" IconName="clear" Collection="material"></IgbIcon>
                  </span>
                  Clear Sort
                </IgbButton>  
                <IgbGridToolbarActions>
                  <IgbGridToolbarHiding></IgbGridToolbarHiding>
                </IgbGridToolbarActions>
            </IgbGridToolbar>
            <IgbColumn
                Field="Artist"
                Header="Artist"
                DataType="GridColumnDataType.String"
                Width="150px"
                Sortable="true"
            ></IgbColumn>
            <IgbColumn
                Field="Photo"
                Header="Photo"
                DataType="GridColumnDataType.Image"
            ></IgbColumn>
            <IgbColumn
                Field="Debut"
                Header="Debut"
                DataType="GridColumnDataType.Number"
                Sortable="true"
            ></IgbColumn>
            <IgbColumn
                Field="GrammyNominations"
                Header="Grammy Nominations"
                DataType="GridColumnDataType.String"
                Width="200px"
                Sortable="true"
            ></IgbColumn>
            <IgbColumn
                Field="GrammyAwards"
                Header="Grammy Awards"
                DataType="GridColumnDataType.String"
                Width="200px"
                Sortable="true"
            ></IgbColumn>
            <IgbRowIsland ChildDataKey="Albums" AutoGenerate="false">
                <IgbColumn
                    Field="Album"
                    Header="Album"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="LaunchDate"
                    Header="Launch Date"
                    DataType="GridColumnDataType.Date"
                ></IgbColumn>
                <IgbColumn
                    Field="BillboardReview"
                    Header="Billboard Review"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="USBillboard200"
                    Header="US Billboard 200"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbRowIsland ChildDataKey="Songs" AutoGenerate="false">
                    <IgbColumn
                        Field="Number"
                        Header="No."
                        DataType="GridColumnDataType.String"
                    ></IgbColumn>
                    <IgbColumn
                        Field="Title"
                        Header="Title"
                        DataType="GridColumnDataType.String"
                    ></IgbColumn>
                    <IgbColumn
                        Field="Released"
                        Header="Released"
                        DataType="GridColumnDataType.Date"
                    ></IgbColumn>
                    <IgbColumn
                        Field="Genre"
                        Header="Genre"
                        DataType="GridColumnDataType.String"
                    ></IgbColumn>
                </IgbRowIsland>
            </IgbRowIsland>
            <IgbRowIsland ChildDataKey="Tours" AutoGenerate="false">
                <IgbColumn
                    Field="Tour"
                    Header="Tour"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="StartedOn"
                    Header="Started on"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="Location"
                    Header="Location"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
                <IgbColumn
                    Field="Headliner"
                    Header="Headliner"
                    DataType="GridColumnDataType.String"
                ></IgbColumn>
            </IgbRowIsland>
        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    private string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg>";

    private IgbHierarchicalGrid hierarchicalGrid1;
    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;

        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("clear", clearIcon, "material");
            }));
        }
    }

    private void ClearSort()
    {
        this.hierarchicalGrid1.ClearSort("");
    }

    private SingersNestedData _singersNestedData = null;
    public SingersNestedData SingersNestedData
    {
        get
        {
            if (_singersNestedData == null)
            {
                _singersNestedData = new SingersNestedData();
            }
            return _singersNestedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;

public class SingersNestedItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersNestedItem_TourInfo> Tours { get; set; }
    public List<SingersNestedItem_AlbumInfo> Albums { get; set; }
}

public class SingersNestedItem_TourInfo
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}

public class SingersNestedItem_AlbumInfo
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersNestedItem_SongInfo> Songs { get; set; }
}

public class SingersNestedItem_SongInfo
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersNestedData : List<SingersNestedItem>
{
    public SingersNestedData()
    {
        this.Add(new SingersNestedItem
        {
            ID = 0,
            Artist = @"Naomí Yepes",
            Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png",
            Debut = 2011,
            GrammyNominations = 6,
            GrammyAwards = 0,
            HasGrammyAward = false,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"City Jam Sessions",
                    StartedOn = @"Aug 13",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2013",
                    StartedOn = @"Dec 13",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2014",
                    StartedOn = @"Dec 14",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Watermelon Tour",
                    StartedOn = @"Feb 15",
                    Location = @"Worldwide",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2016",
                    StartedOn = @"Dec 16",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"The Dragon Tour",
                    StartedOn = @"Feb 17",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Organic Sessions",
                    StartedOn = @"Aug 18",
                    Location = @"United States, England",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Hope World Tour",
                    StartedOn = @"Mar 19",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Dream Driven",
                    LaunchDate = @"August 25, 2014",
                    BillboardReview = 81,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ferocious",
                            Released = @"28 Apr 2014",
                            Genre = @"Dance-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Going crazy",
                            Released = @"10 Feb 2015",
                            Genre = @"Dance-pop EDM",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Future past",
                            Released = @"14 Jul 2021",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Roaming like them",
                            Released = @"2 Jul 2014",
                            Genre = @"Electro house Electropop",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Last Wishes",
                            Released = @"12 Aug 2014",
                            Genre = @"R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Stay where you are",
                            Released = @"14 Aug 1998",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Imaginarium",
                            Released = @"15 Sep 2013",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Tell me",
                            Released = @"30 Sep 2014",
                            Genre = @"Synth-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Shredded into pieces",
                            Released = @"2 Sep 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Capture this moment",
                            Released = @"5 Jan 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 12,
                            Title = @"Dream Driven",
                            Released = @"12 Dec 1999",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"The dragon journey",
                    LaunchDate = @"May 20, 2016",
                    BillboardReview = 60,
                    USBillboard200 = 2,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Organic me",
                    LaunchDate = @"August 17, 2018",
                    BillboardReview = 82,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Compass",
                            Released = @"15 Jan 2020",
                            Genre = @"mystical parody-bap ",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Key Fields Forever",
                            Released = @"2 Jan 2020",
                            Genre = @"Dance-pop EDM",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stand by Your Goblins",
                            Released = @"20 Nov 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Mad to Walk",
                            Released = @"12 May 2019",
                            Genre = @"Electro house Electropop",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Alice's Waiting",
                            Released = @"28 Jan 2020",
                            Genre = @"R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"We Shall Kiss",
                            Released = @"30 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Behind Single Ants",
                            Released = @"2 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Soap Autopsy",
                            Released = @"8 Aug 2019",
                            Genre = @"Synth-pop R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Have You Met Rich?",
                            Released = @"1 Jul 2019",
                            Genre = @"ethno-tunes",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Livin' on a Banana",
                            Released = @"22 Nov 2019",
                            Genre = @"Crunk reggaeton",
                            Album = @"Organic me"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Curiosity",
                    LaunchDate = @"December 7, 2019",
                    BillboardReview = 75,
                    USBillboard200 = 12,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 1,
            Artist = @"Babila Ebwélé",
            Photo = @"https://dl.infragistics.com/x/img/people/names/babila.png",
            Debut = 2009,
            GrammyNominations = 0,
            GrammyAwards = 11,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"No foundations",
                    StartedOn = @"Jun 04",
                    Location = @"United States, Europe",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Crazy eyes",
                    StartedOn = @"Jun 08",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Zero gravity",
                    StartedOn = @"Apr 19",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Battle with myself",
                    StartedOn = @"Mar 08",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Drive",
                            Released = @"20 May 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Don't Natter",
                            Released = @"10 Jun 2019",
                            Genre = @"adult calypso-industrial",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stairway to Balloons",
                            Released = @"18 Jun 2019",
                            Genre = @"calypso and mariachi",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"The Number of your Apple",
                            Released = @"29 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Your Delightful Heart",
                            Released = @"24 Feb 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Nice Weather For Balloons",
                            Released = @"1 Aug 2019",
                            Genre = @"rap-hop",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"The Girl From Cornwall",
                            Released = @"4 May 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Here Without Jack",
                            Released = @"24 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Born Rancid",
                            Released = @"19 Mar 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Death's dead",
                    LaunchDate = @"June 8, 2016",
                    BillboardReview = 85,
                    USBillboard200 = 95,
                    Artist = @"Babila Ebwélé",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ghost in My Rod",
                            Released = @"5 Oct 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Bed of Men",
                            Released = @"14 Nov 2019",
                            Genre = @"whimsical comedy-grass ",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Don't Push",
                            Released = @"2 Jan 2020",
                            Genre = @"unblack electronic-trip-hop",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Nice Weather For Men",
                            Released = @"18 Dec 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Rancid Rhapsody",
                            Released = @"10 Mar 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Push, Push, Push!",
                            Released = @"21 Feb 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"My Name is Sarah",
                            Released = @"15 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"The Girl From My Hotel",
                            Released = @"6 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Free Box",
                            Released = @"18 Apr 2019",
                            Genre = @"splitter-funk",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Hotel Cardiff",
                            Released = @"30 Dec 2019",
                            Genre = @"guilty pleasure ebm",
                            Album = @"Death's dead"
                        }}

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 2,
            Artist = @"Ahmad Nazeri",
            Photo = @"https://dl.infragistics.com/x/img/people/names/ahmad.png",
            Debut = 2004,
            GrammyNominations = 3,
            GrammyAwards = 1,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
            }
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Bursting bubbles",
                    LaunchDate = @"April 17, 2006",
                    BillboardReview = 69,
                    USBillboard200 = 39,
                    Artist = @"Ahmad Nazeri",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        // ... 11 more items
    }
}
```


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbHierarchicalGrid class="grid"></IgbHierarchicalGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-toolbar-background-color: #2a2b2f;
    --ig-grid-toolbar-title-text-color: #ffcd0f;
    --ig-grid-toolbar-dropdown-background: #2a2b2f;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        PrimaryKey="ID"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >
                    <IgbGridToolbarAdvancedFiltering
                    >
                    </IgbGridToolbarAdvancedFiltering>

                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>

                    <IgbGridToolbarExporter
                    >
                    </IgbGridToolbarExporter>

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Width="150px">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.String">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.String"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.String"
            Width="200px">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbHierarchicalGrid grid;

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


<!-- ComponentStart: HierarchicalGrid -->

## Known Limitations

> [!Note]
> Currently, defining a toolbar component directly inside the IgbRowIsland is not supported. Use the `ToolbarTemplate` property instead.

<!-- ComponentEnd: HierarchicalGrid -->

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgbGridToolbarAdvancedFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarAdvancedFiltering.html)
- [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html)
- [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html)
- [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html)
- [`IgbGridToolbarPinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarPinning.html)
- [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html)

[`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) Events:

- `ToolbarExporting`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
