---
title: Blazor Grid for Ignite UI for Blazor for
_description: Use Blazor Grid for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: Blazor, Grid, Grid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridToolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid", "GridToolbarActions"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/toolbar
_tocName: Toolbar
_premium: true
---

# Blazor Grid Toolbar

The Ignite UI for Blazor Toolbar in is a container for UI operations in the Blazor Grid. The Blazor toolbar is located at the top of the Blazor component, i.e., the [`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html#IgniteUI_Blazor_Controls_IgbGridToolbar_Grid) and it matches its horizontal size. The toolbar container can host any custom content or set of predefined UI controls. The default set for the Blazor Grid includes:

- Column Hiding
- Column Pinning
- Excel Exporting
- Advanced Filtering

The toolbar and the predefined UI components support Blazor events and expose API for developers.

<!-- ComponentStart: Grid, TreeGrid -->

## Blazor Toolbar Grid Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
        Name="grid1"
        @ref="grid1">
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
            Field="Name"
            Header="Athlete"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="CountryName"
            Header="Country"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Progress">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;

    }

    private IgbGrid grid1;

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
    }
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

The predefined [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) and [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html) UI components are added inside the [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html) and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

```razor
<IgbGrid>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarAdvancedFiltering>
            </IgbGridToolbarAdvancedFiltering>
            <IgbGridToolbarHiding>
            </IgbGridToolbarHiding>
            <IgbGridToolbarPinning>
            </IgbGridToolbarPinning>
            <IgbGridToolbarExporter>
            </IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> As seen in the code snippet above, the predefined `Actions` UI components are wrapped in the [`IgbGridToolbarActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarActions.html) container. This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

```razor
<IgbGrid>
    <IgbGridToolbar>
    </IgbGridToolbar>
</IgbGrid>
```

<!-- ComponentEnd: Grid -->

For a comprehensive look over each of the default UI components, continue reading the **Features** section below.

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.

As shown above, it can be configured to provide default components for controlling, column hiding, column pinning, advanced filtering and exporting data from the grid.

These features can be enabled independently from each other by following a pattern similar to the card component of the Ignite UI for Blazor suite.

Listed below are the main features of the toolbar with example code for each of them.

<!-- ComponentStart: Grid, TreeGrid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
        Name="grid1"
        @ref="grid1">
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
            Field="Name"
            Header="Athlete"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="CountryName"
            Header="Country"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Progress">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;

    }

    private IgbGrid grid1;

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
    }
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

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
<IgbGridToolbarExporter ExportStartedScript="WebGridToolbarExporting"></IgbGridToolbarExporter>
```

```razor
// In Javascript
igRegisterScript("WebGridToolbarExporting", (evt) => {
        const args = evt.detail;
        const options = args.options;
        options.fileName = `Report_${new Date().toDateString()}`;
        args.exporter.columnExporting.subscribe((columnArgs) => {
                columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
        });
}, false);
```

<!-- ComponentEnd: Grid -->

The following sample demonstrates how to customize the exported files:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
        ToolbarExportingScript="WebGridToolbarExporting"
        Name="grid1"
        @ref="grid1">
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
            Field="Name"
            Header="Athlete"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="CountryName"
            Header="Country"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Progress">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;

    }

    private IgbGrid grid1;

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
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
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
        Name="grid1"
        @ref="grid1">
            <IgbGridToolbar
                ShowProgress="@showProgress">
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

                    <IgbButton style="margin:5px" Variant="ButtonVariant.Outlined" disabled="@showProgress" @onclick="LongRunning">
                        Simulate long running operation
                    </IgbButton>    

                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            Header="Athlete"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="CountryName"
            Header="Country"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Progress">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;

    }

    private IgbGrid grid1;
    private bool showProgress = false;

    private async Task LongRunning()
    {
        showProgress = true;
        StateHasChanged();

        await Task.Delay(5000);

        showProgress = false;
        StateHasChanged();
    }

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
    }
}
```

## Custom Content

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.

Here is a sample snippet:

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbGrid>
    <IgbGridToolbar>
        <IgbGridToolbarTitle>title</IgbGridToolbarTitle>
        @*
            Everything between the toolbar tags except the default toolbar components
            will be projected as custom content.
        *@
        <IgbGridToolbarActions>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="PlayersData"
        Name="grid1"
        @ref="grid1">
            <IgbGridToolbar
            >
                <IgbGridToolbarActions
                >

                    <IgbButton onclick="clearSort()">Clear Sort</IgbButton>

                    <IgbGridToolbarHiding
                    >
                    </IgbGridToolbarHiding>

                    <IgbGridToolbarPinning
                    >
                    </IgbGridToolbarPinning>
                </IgbGridToolbarActions>

            </IgbGridToolbar>

            <IgbColumn
            Field="Name"
            Header="Athlete"
            Width="200px"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="CountryName"
            Header="Country"
            Width="200px"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            Header="ID"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Progress"
            Sortable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid1 = this.grid1;

    }

    private IgbGrid grid1;
   
    private PlayersData _PlayersData = null;
    public PlayersData PlayersData
    {
        get
        {
            if (_PlayersData == null)
            {
                _PlayersData = new PlayersData();
            }
            return _PlayersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class PlayersDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class PlayersData // AthletesData
    : List<PlayersDataItem>
{
    public PlayersData()
    {
        this.Add(new PlayersDataItem()
        {
            Id = 100,
            Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png",
            Position = @"current",
            Name = @"Alexis Walker",
            AthleteNumber = 43183,
            BeatsPerMinute = 103,
            TopSpeed = 5.8,
            Registered = @"2017-08-07T10:35:06-03:00",
            TrackProgress = 45,
            CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png",
            CountryName = @"Ghana"
        });
        this.Add(new PlayersDataItem()
        {
            Id = 101,
            Avatar = @"https://dl.infragistics.com/x/img/people/women/11.png",
            Position = @"down",
            Name = @"Lavínia Silva",
            AthleteNumber = 33994,
            BeatsPerMinute = 93,
            TopSpeed = 5.6,
            Registered = @"2017-03-22T08:55:46-02:00",
            TrackProgress = 45,
            CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png",
            CountryName = @"Norway"
        });
        this.Add(new PlayersDataItem()
        {
            Id = 105,
            Avatar = @"https://dl.infragistics.com/x/img/people/men/12.png",
            Position = @"down",
            Name = @"Samu Hokkanen",
            AthleteNumber = 22469,
            BeatsPerMinute = 106,
            TopSpeed = 5.5,
            Registered = @"2017-06-29T04:58:27-03:00",
            TrackProgress = 25,
            CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png",
            CountryName = @"Azerbaijan"
        });
        // ... 182 more items
    }
}
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbGrid class="grid"></IgbGrid>
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
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
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
            Field="Name"
            Header="Athlete"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="CountryName"
            Header="Country"
            Width="200px">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed">
            </IgbColumn>

            <IgbColumn
            Field="AthleteNumber"
            Header="ID">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Progress">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private AthletesData _athletesData = null;
    public AthletesData AthletesData
    {
        get
        {
            if (_athletesData == null)
            {
                _athletesData = new AthletesData();
            }
            return _athletesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class AthletesDataItem
{
    public double Id { get; set; }
    public string Avatar { get; set; }
    public string Position { get; set; }
    public string Name { get; set; }
    public double AthleteNumber { get; set; }
    public double BeatsPerMinute { get; set; }
    public double TopSpeed { get; set; }
    public string Registered { get; set; }
    public double TrackProgress { get; set; }
    public string CountryFlag { get; set; }
    public string CountryName { get; set; }
}

public class AthletesData
    : List<AthletesDataItem>
{
    public AthletesData()
    {
        this.Add(new AthletesDataItem() { Id = 100, Avatar = @"https://dl.infragistics.com/x/img/people/women/20.png", Position = @"current", Name = @"Alexis Walker", AthleteNumber = 43183, BeatsPerMinute = 103, TopSpeed = 5.8, Registered = @"2017-08-07T10:35:06-03:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/GH.png", CountryName = @"Ghana" });
        this.Add(new AthletesDataItem() { Id = 101, Avatar = @"https://dl.infragistics.com/x/img/people/women/31.png", Position = @"down", Name = @"Lavínia Silva", AthleteNumber = 33994, BeatsPerMinute = 93, TopSpeed = 5.6, Registered = @"2017-03-22T08:55:46-02:00", TrackProgress = 45, CountryFlag = @"https://dl.infragistics.com/x/img/flags/NO.png", CountryName = @"Norway" });
        this.Add(new AthletesDataItem() { Id = 105, Avatar = @"https://dl.infragistics.com/x/img/people/men/13.png", Position = @"down", Name = @"Samu Hokkanen", AthleteNumber = 22469, BeatsPerMinute = 106, TopSpeed = 5.5, Registered = @"2017-06-29T04:58:27-03:00", TrackProgress = 25, CountryFlag = @"https://dl.infragistics.com/x/img/flags/AZ.png", CountryName = @"Azerbaijan" });
        // ... 182 more items
    }
}
```

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgbGridToolbarAdvancedFiltering`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarAdvancedFiltering.html)
- [`IgbGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html)
- [`IgbGridToolbarExporter`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarExporter.html)
- [`IgbGridToolbarHiding`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarHiding.html)
- [`IgbGridToolbarPinning`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarPinning.html)
- [`IgbGridToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbarTitle.html)

[`Grid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridToolbar.html#IgniteUI_Blazor_Controls_IgbGridToolbar_Grid) Events:

- `ToolbarExporting`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
