---
title: Blazor Hierarchical Grid | Fastest Blazor Hierarchical Table | Infragistics
_description: The Ignite UI for Blazor Hierarchical Grid is used to display and manipulate hierarchical with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: Blazor hierarchical grid, igniteui for Blazor, infragistics
_license: commercial
mentionedTypes: ["HierarchicalGridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Hierarchical Grid
---

# Hierarchical Data Grid Overview and Configuration

The Ignite UI for Blazor Hierarchical Data Grid is used to display and manipulate hierarchical tabular data. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating, column moving, column pinning, export to Excel and CSV, and more. The Hierarchical Grid builds upon the Flat Grid Component and extends its functionality by allowing the users to expand or collapse the rows of the parent grid, revealing corresponding child grids, when more detailed information is needed.

## Blazor Hierarchical Data Grid Example

In this Blazor grid example you can see how users can visualize hierarchical sets of data and use cell templating to add other visual components.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        PrimaryKey="ID"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image"
            MinWidth="115px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            MinWidth="88px"
            MaxWidth="230px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Resizable="true">
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

## Getting Started with Ignite UI for Blazor Hierarchical Grid

### Dependencies

To get started with the Blazor hierarchical grid, first you need to install the IgniteUI.Blazor package.

Please refer to these topics on adding the IgniteUI.Blazor package:

- [Getting Started](../../general-getting-started-blazor-client.md)
- [Adding Nuget Package](../../general-nuget-feed.md)

You also need to include the following CSS link in the index.html file of your application to provide the necessary styles to the hierarchical grid:

```razor
<link href="_content/IgniteUI.Blazor/themes/grid/light/bootstrap.css" rel="stylesheet" />
```

Afterwards, you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```

### Component Modules

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbhierarchicalGridModule));
```

## Using the Blazor Hierarchical Data Grid

### Data Binding

The **IgbHierarchicalGrid** derives from IgbGrid and shares most of its functionality. The main difference is that it allows multiple levels of hierarchy to be defined. They are configured through a separate tag within the definition of **IgbHierarchicalGrid**, called **IgbRowIsland**. The **IgbRowIsland** component defines the configuration for each child grid for the particular level. Multiple row islands per level are also supported.
The Hierarchical Grid supports two ways of binding to data:

### Using hierarchical data

If the application loads the whole hierarchical data as an array of objects referencing children arrays of objects, then the Hierarchical Grid can be configured to read it and bind to it automatically. Here is an example of a properly structured hierarchical data source:

```razor
public class SingersData : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem()
        {
            Artist = "Naomí Yepes",
            Photo = "assets/images/hgrid/naomi.png",
            Debut = "2011",
            GrammyNomination = 6,
            GrammyAwards = 0,
            Tours = new List<ToursItem>() {
            new ToursItem() {
                Tour = "Faithful Tour",
                StartedOn = new DateTime(),
                Location = "Worldwide",
                Headliner = "NO",
                TouredBy = "Naomí Yepes"
            }
           },
            Albums = new List<AlbumItem>() {
            new AlbumItem() {
                Album = "Dream Driven",
                LaunchDate = new DateTime(),
                BillboardReview= "81",
                Artist = "Naomí Yepes",
                Songs = new List<SongItem>() {
                    new SongItem() {
                        Number = "1",
                        Title="Intro",
                        Released = "*",
                        Genre = "Rock",
                        Album ="Dream Driven"
                    }
                }
            }
           }
        });
    }
}
```

Each **IgbRowIsland** should specify the key of the property that holds the children data.

```razor
<IgbHierarchicalGrid Data="SingersData" AutoGenerate="true">
    <IgbRowIsland ChildDataKey="Tours" AutoGenerate="true"></IgbRowIsland>
    <IgbRowIsland ChildDataKey="Albums"AutoGenerate="true">
        <IgbRowIsland ChildDataKey="Songs" AutoGenerate="true"></IgbRowIsland>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```

> [!NOTE]
> Note that instead of `data` the user configures only the `childDataKey` that the IgbHierarchicalGrid needs to read to set the data automatically.

### Using Load-On-Demand

Most applications are designed to load as little data as possible initially, which results in faster load times. In such cases IgbHierarchicalGrid may be configured to allow user-created services to feed it with data on demand.

```razor
<IgbHierarchicalGrid Id="hGrid" AutoGenerate="true" PrimaryKey="customerId" Height="600px"
    RenderedScript="OnGridRendered">
    <IgbRowIsland ChildDataKey="Orders" PrimaryKey="orderId" AutoGenerate="true" GridCreatedScript="OnGridCreated">
        <IgbRowIsland ChildDataKey="Details" PrimaryKey="productId" AutoGenerate="true" GridCreatedScript="OnGridCreated"></IgbRowIsland>
    </IgbRowIsland>
</IgbHierarchicalGrid>

In JavaScript
igRegisterScript("OnGridRendered", () => {
    const grid = document.getElementsByTagName("igc-hierarchical-grid")[0];
    grid.isLoading = true;
    getData({ parentID: null, rootLevel: true, key: "Customers" }).then(
        (data) => {
            grid.isLoading = false;
            grid.data = data;
            grid.markForCheck();
        });
}, false)

igRegisterScript("OnGridCreated", (args) => {
    const context = args.detail;
    const _parentKey = context.owner.childDataKey === "Orders" ? "Customers" : "Orders";
    const dataState = {
        key: context.owner.childDataKey,
        parentID: context.parentID,
        parentKey: _parentKey,
        rootLevel: false,
      };
      context.grid.isLoading = true;
      getData(dataState).then((data) => {
        context.grid.isLoading = false;
        context.grid.data = data;
        context.grid.markForCheck();
      });
}, false)

const DATA_URL = `https://data-northwind.indigo.design/`;

function getData(dataState) {
    return fetch(buildUrl(dataState))
        .then((result) => result.json());
}

function buildUrl(dataState) {
    let qS = "";
    if (dataState) {
        if (dataState.rootLevel) {
            qS += `${dataState.key}`;
        } else {
            qS += `${dataState.parentKey}/${dataState.parentID}/${dataState.key}`;
        }
    }
    return `${DATA_URL}${qS}`;
}
```

## Hide/Show row expand indicators

If you have a way to provide information whether a row has children prior to its expanding, you could use the [`HasChildrenKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbHierarchicalGridBaseDirective_HasChildrenKey) input property. This way you could provide a boolean property from the data objects which indicates whether an expansion indicator should be displayed.

```razor
<IgbHierarchicalGrid Data="data" PrimaryKey="ID" HasChildrenKey="hasChildren">
</IgbHierarchicalGrid>
```

Note that setting the [`HasChildrenKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbHierarchicalGridBaseDirective_HasChildrenKey) property is not required. In case you don't provide it, expansion indicators will be displayed for each row.

Additionally if you wish to show/hide the header expand/collapse all indicator you can use the [`ShowExpandAll`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbHierarchicalGridBaseDirective_ShowExpandAll) property.
This UI is disabled by default for performance reasons and it is not recommended to enable it in grids with large data or grids with load on demand.

## Features

The grid features could be enabled and configured through the IgbRowIsland markup - they get applied for every grid that is created for it. Changing options at runtime through the row island instance changes them for each of the grids it has spawned.

```razor
<IgbHierarchicalGrid Data="localData" AutoGenerate="false"
    AllowFiltering="true" Height="600px" Width="800px">
    <IgbColumn Field="ID" Pinned="true" Filterable="true"></IgbColumn>
    <IgbColumnGroup Header="Information">
        <IgbColumn Field="ChildLevels"></IgbColumn>
        <IgbColumn Field="ProductName" HasSummary="true"></IgbColumn>
    </IgbColumnGroup>
    <IgbRowIsland ChildDataKey="childData" AutoGenerate="false" RowSelection="GridSelectionMode.Multiple">
        <IgbColumn Field="ID" HasSummary="true" DataType="number"></IgbColumn>
        <IgbColumnGroup Header="Information2">
            <IgbColumn Field="ChildLevels"></IgbColumn>
            <IgbColumn Field="ProductName"></IgbColumn>
        </IgbColumnGroup>
        <IgbPaginator PerPage="5"></IgbPaginator>
    <IgbRowIsland>
    <IgbPaginator></IgbPaginator>
</IgbHierarchicalGrid>
```

The following grid features work on a per grid level, which means that each grid instance manages them independently of the rest of the grids:

- Sorting
- Filtering
- Paging
- Multi Column Headers
- Hiding
- Pinning
- Moving
- Summaries
- Search

The Selection and Navigation features work globally for the whole Hierarchical Grid

- Selection
    Selection does not allow selected cells to be present for two different child grids at once.
- Navigation
    When navigating <kbd>↑</kbd> + <kbd>↓</kbd>, if next/prev element is a child grid, navigation will continue in the related child grid, marking the related cell as selected and focused. If the child cell is outside the current visible view port it is scrolled into view so that selected cell is always visible.

## Collapse All Button

The Hierarchical Grid allows the users to conveniently collapse all its currently expanded rows by pressing the "Collapse All" button at its top left corner. Additionally, every child grid which contains other grids and is a Hierarchical Grid itself, also has such a button - this way the user is able to collapse only a given grid in the hierarchy:

<img class="responsive-img" src="../../../images/unfold_less_icon_screenshot.jpg" srcset="../../images/unfold_less_icon_screenshoto@2x.jpg 2x" alt="unfold_less_icon_screenshot" />

<!-- TODO: uncomment when sizing topic is ready -->

<!-- ## Sizing

See the [Hierarchical Grid Sizing](sizing.md) topic. -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md). In case you would like to change the header background and text color, you need to set a class for the grid first:

```razor
 <IgbHierarchicalGrid Class="grid"></IgbHierarchicalGrid>
```

Then set the `--header-background` and `--header-text-color` CSS properties for that class:

```css
.grid {
    --header-background: #494949;
    --header-text-color: #FFF;
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
        Name="hGrid"
        @ref="hGrid"
        Id="hGrid">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image"
            MinWidth="115px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            MinWidth="88px"
            MaxWidth="230px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hGrid = this.hGrid;

    }

    private IgbHierarchicalGrid hGrid;

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

## Known Limitations

|Limitation|Description|
|--- |--- |
|Group By|Group By feature is not supported by the hierarchical grid.|

## API References

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)
- [`IgbRowIsland`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowIsland.html)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- `Cell`

<!-- TODO: uncomment when all of the topics are ready -->

<!-- ## Additional Resources

- [Grid Sizing](sizing.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
