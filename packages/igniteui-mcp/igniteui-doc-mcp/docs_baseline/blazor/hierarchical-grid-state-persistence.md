---
title: Blazor Hierarchical Grid State Persistence - Ignite UI for Blazor
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Blazor. Learn how to restore columns, explore usage, and see demos!
_keywords: state persistence, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridStateBaseDirective", "GridState", "PivotConfiguration", "PivotDimension", "PivotValue"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/state-persistence
_tocName: State Persistence
_premium: true
---

# Blazor Hierarchical Grid State Persistence

The Ignite UI for Blazor State Persistence in Blazor Hierarchical Grid allows developers to easily save and restore the grid state. When the [`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) is applied on the Blazor [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html), it exposes the `GetStateAsStringAsync` and `ApplyStateFromStringAsync` methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) supports saving and restoring the state of the following features:

<!-- ComponentStart: HierarchicalGrid -->

- **RowIslands**
  - saving/restoring features for all child grids down the hierarchy
- **Sorting**
- **Filtering**
- **AdvancedFiltering**
- **Paging**
- **CellSelection**
- **RowSelection**
- **ColumnSelection**
- **RowPinning**
- **Expansion**
- **Columns**
  - Multi column headers
  - Columns order
  - Column properties defined by the `IColumnState` interface.

<!-- * Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section. -->

<!-- ComponentEnd: HierarchicalGrid -->

## Usage

The `GetStateAsStringAsync` returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```razor
<IgbHierarchicalGrid>
    <IgbGridState @ref="gridState"></IgbGridState>
</IgbHierarchicalGrid>

@code {
    // get all features` state in a serialized JSON string
    string stateString = gridState.GetStateAsStringAsync(new string[0]);

    // get the sorting and filtering expressions
    string sortingFilteringStates = gridState.GetStateAsStringAsync(new string[] { "sorting", "filtering" });
}
```

`ApplyStateFromStringAsync` - The method accepts a serialized JSON string as argument and will restore the state of each feature found in the JSON string or specified features as second argument.

```razor
gridState.ApplyStateFromStringAsync(gridStateString, new string[0]);
gridState.ApplyStateFromStringAsync(sortingFilteringStates, new string[0])
```

The [`Options`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridStateBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridStateBaseDirective_Options) object implements the [`IgbGridStateOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridStateOptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. `GetStateAsStringAsync` methods will not put the state of these features in the returned value and `ApplyStateFromStringAsync` methods will not restore state for them.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```razor
gridState.Options = new IgbGridStateOptions
    {
        CellSelection = false,
        Sorting = false
    };
```

The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `LocalStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```razor
@using IgniteUI.Blazor.Controls
@using Newtonsoft.Json
@implements IDisposable

@inject IJSRuntime JS
@inject NavigationManager Navigation

<IgbHierarchicalGrid Rendered="OnGridRendered">
    <IgbGridState @ref="gridState"></IgbGridState>
    <IgbColumn Field="ContactName" Header="Name" MinWidth="200px" ></IgbColumn>
    <IgbColumn Field="ContactTitle" Header="Title" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
    <IgbColumn Field="CompanyName" Header="Company" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
</IgbHierarchicalGrid>

@code {
    protected override void OnAfterRender(bool firstRender)
    {
        Navigation.LocationChanged += OnLocationChanged;
    }

    void OnLocationChanged(object sender, LocationChangedEventArgs e)
    {
        SaveGridState();
    }

    void IDisposable.Dispose()
    {
        // Unsubscribe from the event when our component is disposed
        Navigation.LocationChanged -= OnLocationChanged;
    }

    void OnGridRendered()
    {
        RestoreGridState();
    }

    async void SaveGridState() {
        string state = gridState.GetStateAsStringAsync(new string[0]);
        await JS.InvokeVoidAsync("window.localStorage.setItem", "grid-state", state);
    }

    async void RestoreGridState() {
        string state = await JS.InvokeAsync<string>("window.localStorage.getItem", "grid-state");
        if (state) {
            gridState.ApplyStateFromStringAsync(state, new string[0]);
        }
    }
}
```

<!-- ComponentStart: HierarchicalGrid -->

## Restoring Child Grids

Saving / Restoring state for the child grids is controlled by the `RowIslands` property and is enabled by default. [`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) will use the same options for saving/restoring features both for the root grid and all child grids down the hierarchy. For example, if we pass the following options:

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid>
    <IgbGridState @ref="gridState"></IgbGridState>
</IgbHierarchicalGrid>

@code {
    private IgbGridState gridState;

    gridState.Options = new IgbGridStateOptions
    {
        CellSelection = false,
        Sorting = false,
        RowIslands = true
    };
}
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

Then the [`GetState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html#IgniteUI_Blazor_Controls_IgbGridState_GetState) API will return the state for all grids (root grid and child grids) features excluding `Selection` and `Sorting`. If later on the developer wants to restore only the `Filtering` state for all grids, use:

Then the [`GetState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html#IgniteUI_Blazor_Controls_IgbGridState_GetState) API will return the state for all grids (root grid and child grids) features excluding `Selection` and `Sorting`. If later on the developer wants to restore only the `Filtering` state for all grids, use:

```razor
gridState.ApplyStateFromStringAsync(gridStateString, new string[] { "filtering", "rowIslands" });
```

<!-- ComponentEnd: HierarchicalGrid -->

## Demo

```razor
@using IgniteUI.Blazor.Controls
@implements IDisposable

@inject IJSRuntime JS
@inject NavigationManager Navigation

<div class="container vertical">

    <div class="container vertical sampleContainer">
        <div class="container horizontal">
            <IgbButton @onclick="RestoreGridState">
                <IgbIcon @ref="IconRef" IconName="restore" Collection="material"></IgbIcon>
                <span>Restore</span>
            </IgbButton>
            <IgbButton @onclick="SaveGridState">
                <IgbIcon IconName="save" Collection="material"></IgbIcon>
                <span>Save</span>
            </IgbButton>
            <IgbButton @onclick="ResetGridState">
                <IgbIcon IconName="clear" Collection="material"></IgbIcon>
                <span>Reset</span>
            </IgbButton>
            <IgbButton @onclick="LeavePage">
                <IgbIcon IconName="forward" Collection="material"></IgbIcon>
                <span>Leave</span>
            </IgbButton>
            <IgbButton @onclick="ClearStorage">
                <IgbIcon IconName="delete" Collection="material"></IgbIcon>
                <span>Clear</span>
            </IgbButton>
            <IgbButton @onclick="ReloadPage">
                <IgbIcon IconName="refresh" Collection="material"></IgbIcon>
                <span>Reload</span>
            </IgbButton>
        </div>
        <div class="container horizontal">
            <ul>
                <li>Clicking the SAVE button or leaving the page <a id="leaveLink" href="./grids/hierarchical-grid/state-persistence-about"><strong>here</strong></a> will save grid state to localStorage.</li>
                <li>Use the control buttons to SAVE / RESTORE / RESET / DELETE / grid state or LEAVE the page.</li>
                <li>Select/Deselect checkboxes to control saving / restoring feature state.</li>
            </ul>
        </div>
        <div class="container horizontal">
            <IgbCheckbox Change="@((evt) => OnChange(evt, "AllFeatures"))" Checked="allOptions">All Features</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "AdvancedFiltering"))" Checked="options.AdvancedFiltering">Adv.Filtering</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "CellSelection"))" Checked="options.CellSelection">Cell Selection</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Columns"))" Checked="options.Columns">Columns</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "ColumnSelection"))" Checked="options.ColumnSelection">Col Selection</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Expansion"))" Checked="options.Expansion">Expansion</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Filtering"))" Checked="options.Filtering">Filtering</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Paging"))" Checked="options.Paging">Paging</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "RowPinning"))" Checked="options.RowPinning">Row Pinning</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "RowSelection"))" Checked="options.RowSelection">Row Selection</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Sorting"))" Checked="options.Sorting">Sorting</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "RowIslands"))" Checked="options.RowIslands">Row Islands</IgbCheckbox>
        </div>
        <IgbHierarchicalGrid
            @ref="grid"
            Width="95%"
            Height="500px"
            PrimaryKey="Photo"
            AutoGenerate="false"
            Data="SingersData"
            Moving="true"
            AllowFiltering="true"
            Rendered="OnGridRendered"
            DataChanged="OnGridDataChanged"
            ColumnSelection="GridSelectionMode.Multiple"
            RowSelection="GridSelectionMode.Multiple">
            <IgbGridState @ref="gridState"></IgbGridState>
            <IgbGridToolbar>
                <IgbGridToolbarActions>
                    <IgbGridToolbarHiding></IgbGridToolbarHiding>
                    <IgbGridToolbarPinning></IgbGridToolbarPinning>
                </IgbGridToolbarActions>
            </IgbGridToolbar>
            <IgbActionStrip>
                <IgbGridPinningActions></IgbGridPinningActions>
            </IgbActionStrip>
            <IgbPaginator @ref="paginator"></IgbPaginator>

            <IgbColumn Field="Artist" Sortable="true"></IgbColumn>
            <IgbColumn DataType="GridColumnDataType.Image" Field="Photo" Editable="false" Sortable="true">
            </IgbColumn>
            <IgbColumn Field="Debut" DataType="GridColumnDataType.Number" Sortable="true"></IgbColumn>
            <IgbColumn Field="GrammyNominations" Header="Grammy Nominations" DataType="GridColumnDataType.Number" Sortable="true"></IgbColumn>
            <IgbColumn Field="GrammyAwards" Header="Grammy Awards" DataType="GridColumnDataType.Number" Sortable="true"></IgbColumn>
            <IgbRowIsland ChildDataKey="Albums" ColumnSelection="GridSelectionMode.Multiple"
            RowSelection="GridSelectionMode.Multiple"
            AutoGenerate="false"
            PrimaryKey="Album"
            AllowFiltering="true">
            <IgbColumn Field="Album" Sortable="true"></IgbColumn>
            <IgbColumn Field="LaunchDate" Header="Launch Date" DataType="GridColumnDataType.Date" Sortable="true"></IgbColumn>
            <IgbColumn Field="BillboardReview" Header="Billboard Review" Sortable="true"></IgbColumn>
            <IgbColumn Field="USBillboard200" Header="US Billboard 200" Sortable="true"></IgbColumn>
        <IgbRowIsland ChildDataKey="Songs" ColumnSelection="GridSelectionMode.Multiple"
            RowSelection="GridSelectionMode.Multiple"
            AutoGenerate="false"
            PrimaryKey="Number"
            AllowFiltering="true">
                <IgbColumn Field="Number" Header="No." Sortable="true"></IgbColumn>
                <IgbColumn Field="Title" Sortable="true"></IgbColumn>
                <IgbColumn Field="Released" DataType="GridColumnDataType.Date" Sortable="true"></IgbColumn>
                <IgbColumn Field="Genre"></IgbColumn>
        </IgbRowIsland>
    </IgbRowIsland>

    <IgbRowIsland ChildDataKey="Tours" ColumnSelection="GridSelectionMode.Multiple"
            RowSelection="GridSelectionMode.Multiple"
        AutoGenerate="false"
        PrimaryKey="Tour"
        AllowFiltering="true">
        <IgbColumn Field="Tour" Sortable="true"></IgbColumn>
        <IgbColumn Field="StartedOn" Header="Started on" Sortable="true"></IgbColumn>
        <IgbColumn Field="Location" Sortable="true"></IgbColumn>
        <IgbColumn Field="Headliner" Sortable="true"></IgbColumn>
    </IgbRowIsland>
        </IgbHierarchicalGrid>
    </div>
</div>

@code {

    private string restoreIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z'/></svg>";
    private string saveIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z'/></svg>";
    private string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg>";
    private string forwardIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z'/></svg>";
    private string deleteIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z'/></svg>";
    private string refreshIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z'/></svg>";

    private IgbHierarchicalGrid grid;
    private IgbGridState gridState;
    private IgbPaginator paginator;
    private bool allOptions = true;
    private bool ready = false;
    private IgbGridStateOptions options = new IgbGridStateOptions()
    {
        CellSelection = true,
        RowSelection = true,
        Filtering = true,
        AdvancedFiltering = true,
        Paging = true,
        Sorting = true,
        Columns = true,
        Expansion = true,
        RowPinning = true,
        ColumnSelection = true,
        RowIslands = true
    };
    private string stateKey = "hierarchical-grid-state";
    private IgbIcon IconRef;
    private IDisposable registration;

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

    protected override void OnInitialized()
    {
        base.OnInitialized();
    }

    protected override void OnAfterRender(bool firstRender)
    {
        var grid = this.grid;
        if (this.IconRef != null && firstRender)
        {
            this.IconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.IconRef.RegisterIconFromText("restore", restoreIcon, "material");
                this.IconRef.RegisterIconFromText("save", saveIcon, "material");
                this.IconRef.RegisterIconFromText("clear", clearIcon, "material");
                this.IconRef.RegisterIconFromText("forward", forwardIcon, "material");
                this.IconRef.RegisterIconFromText("delete", deleteIcon, "material");
                this.IconRef.RegisterIconFromText("refresh", refreshIcon, "material");
            }));
        }

        if (firstRender)
        {
            registration = Navigation.RegisterLocationChangingHandler(OnLocationChanged);
        }
    }

    ValueTask OnLocationChanged(LocationChangingContext arg)
    {
        SaveGridState();
        return ValueTask.CompletedTask;
    }

    public void Dispose()
    {
        registration?.Dispose();
    }

    async void SaveGridState()
    {
        string state = await gridState.GetStateAsStringAsync(new string[0]);
        await JS.InvokeVoidAsync("window.localStorage.setItem", stateKey, state);
    }

    async void RestoreGridState()
    {
        string state = await JS.InvokeAsync<string>("window.localStorage.getItem", stateKey);
        if (state != null)
        {
            await gridState.ApplyStateFromStringAsync(state, new string[0]);
        }
    }

    void ResetGridState()
    {
        paginator.PerPage = 15;
        paginator.TotalRecords = SingersData.Count;
        grid.ClearFilter("");
        grid.SortingExpressions = new IgbSortingExpression[0];
        grid.DeselectAllColumns();
        grid.DeselectAllRows();
        grid.ClearCellSelection();
    }

    void OnChange(IgbCheckboxChangeEventArgs eventArgs, string action)
    {
        if (action == "AllFeatures")
        {
            var newOptions = new IgbGridStateOptions()
            {
                CellSelection = eventArgs.Detail.Checked,
                RowSelection = eventArgs.Detail.Checked,
                Filtering = eventArgs.Detail.Checked,
                AdvancedFiltering = eventArgs.Detail.Checked,
                Paging = eventArgs.Detail.Checked,
                Sorting = eventArgs.Detail.Checked,
                GroupBy = eventArgs.Detail.Checked,
                Columns = eventArgs.Detail.Checked,
                Expansion = eventArgs.Detail.Checked,
                RowPinning = eventArgs.Detail.Checked,
                ColumnSelection = eventArgs.Detail.Checked,
                RowIslands = eventArgs.Detail.Checked
            };
            options = newOptions;
            gridState.Options = newOptions;
        }
        else
        {
            var newOptions = new IgbGridStateOptions();
            options.GetType().GetProperty(action).SetValue(newOptions, eventArgs.Detail.Checked);
            gridState.Options = newOptions; 
        }
    }

    public void OnGridDataChanged()
    {
        ready = true;
    }

    public async void OnGridRendered()
    {
        await WaitForGridReadyAsync();
        RestoreGridState();
    }

    private async Task WaitForGridReadyAsync()
    {
        while (!ready)
        {
            await Task.Delay(100); // wait for update
        }
    }

    async void LeavePage()
    {
        SaveGridState();
        await JS.InvokeVoidAsync("window.location.replace", "./grids/hierarchical-grid/state-persistence-about");
    }

    async void ClearStorage()
    {
        await JS.InvokeVoidAsync("window.localStorage.removeItem", stateKey);
    }

    async void ReloadPage()
    {
        await JS.InvokeVoidAsync("window.location.reload");
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

## Limitations

<!-- ComponentStart: HierarchicalGrid -->

- When restoring all grid features at once (using `applyState` API with no parameters), then column properties for the root grid might be reset to default. If this happens, restore the columns or column selection feature separately after that:

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

- [`GetStateAsString`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html#IgniteUI_Blazor_Controls_IgbGridState_GetStateAsString) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) component will ignore the columns `Formatter`, [`Filters`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotConfiguration.html#IgniteUI_Blazor_Controls_IgbPivotConfiguration_Filters), `Summaries`, `SortStrategy`, `CellClasses`, `CellStyles`, `HeaderTemplate` and `BodyTemplate` properties.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->
