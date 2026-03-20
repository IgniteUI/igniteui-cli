---
title: Blazor Grid State Persistence - Ignite UI for Blazor
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

# Blazor Grid State Persistence

<!-- Blazor -->

The Ignite UI for Blazor State Persistence in Blazor Grid allows developers to easily save and restore the grid state. When the [`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) is applied on the Blazor [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), it exposes the `GetStateAsStringAsync` and `ApplyStateFromStringAsync` methods that developers can use to achieve state persistence in any scenario.

<!-- end: Blazor -->

## Supported Features

[`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) supports saving and restoring the state of the following features:

<!-- ComponentStart: Grid, TreeGrid -->

- **Sorting**
- **Filtering**
- **Advanced Filtering**
- **Paging**
- **CellSelection**
- **RowSelection**
- **ColumnSelection**
- **RowPinning**
- **Expansion**
- **GroupBy**
- **Columns**
  - Multi column headers
  - Columns order
  - Column properties defined by the `IColumnState` interface.

<!-- * Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section. -->

<!-- ComponentEnd: Grid, TreeGrid -->

## Usage

<!-- Blazor -->

The `GetStateAsStringAsync` returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

<!-- end: Blazor -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```razor
<IgbGrid>
    <IgbGridState @ref="gridState"></IgbGridState>
</IgbGrid>

@code {
    // get all features` state in a serialized JSON string
    string stateString = gridState.GetStateAsStringAsync(new string[0]);

    // get the sorting and filtering expressions
    string sortingFilteringStates = gridState.GetStateAsStringAsync(new string[] { "sorting", "filtering" });
}
```

<!-- Blazor -->

`ApplyStateFromStringAsync` - The method accepts a serialized JSON string as argument and will restore the state of each feature found in the JSON string or specified features as second argument.

```razor
gridState.ApplyStateFromStringAsync(gridStateString, new string[0]);
gridState.ApplyStateFromStringAsync(sortingFilteringStates, new string[0])
```

<!-- Blazor -->

The [`Options`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridStateBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridStateBaseDirective_Options) object implements the [`IgbGridStateOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridStateOptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. `GetStateAsStringAsync` methods will not put the state of these features in the returned value and `ApplyStateFromStringAsync` methods will not restore state for them.

<!-- end: Blazor -->

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

<IgbGrid Rendered="OnGridRendered">
    <IgbGridState @ref="gridState"></IgbGridState>
    <IgbColumn Field="ContactName" Header="Name" MinWidth="200px" ></IgbColumn>
    <IgbColumn Field="ContactTitle" Header="Title" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
    <IgbColumn Field="CompanyName" Header="Company" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
</IgbGrid>

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
                <li>Clicking the SAVE button or leaving the page <a id="leaveLink" href="./grids/grid/state-persistence-about"><strong>here</strong></a> will save grid state to localStorage.</li>
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
            <IgbCheckbox Change="@((evt) => OnChange(evt, "GroupBy"))" Checked="options.GroupBy">Group By</IgbCheckbox>
        </div>
        <IgbGrid
            @ref="grid"
            Width="95%"
            Height="500px"
            PrimaryKey="ID"
            AutoGenerate="false"
            Data="CustomersData"
            Rendered="OnGridRendered"
            Moving="true"
            AllowFiltering="true"
            AllowAdvancedFiltering="true"
            FilterMode="FilterMode.ExcelStyleFilter"
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

            <IgbColumn Field="ID" Header="ID" Sortable="true" Filterable="true" Pinned="true"></IgbColumn>
            <IgbColumn Field="ContactName" Header="Name" MinWidth="200px" Pinned="true"></IgbColumn>
            <IgbColumn Field="ContactTitle" Header="Title" MinWidth="200px" Pinned="true" Groupable="true"></IgbColumn>
            <IgbColumn Field="Company" Header="Company" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
            <IgbColumn Field="Country" Header="Country" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
            <IgbColumn Field="City" Header="City" MinWidth="120px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
            <IgbColumn Field="Address" Header="Address" MinWidth="300px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
            <IgbColumn Field="Region" Header="Region" MinWidth="120px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
            <IgbColumn Field="PostalCode" Header="Postal Code" MinWidth="150px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
            <IgbColumn Field="Phone" Header="Phone" MinWidth="150px" Sortable="true" Filterable="true"></IgbColumn>
        </IgbGrid>
    </div>
</div>

@code {

    private string restoreIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z'/></svg>";
    private string saveIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z'/></svg>";
    private string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg>";
    private string forwardIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z'/></svg>";
    private string deleteIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z'/></svg>";
    private string refreshIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z'/></svg>";

    private IgbGrid grid;
    private IgbGridState gridState;
    private IgbPaginator paginator;
    private bool allOptions = true;
    private IgbGridStateOptions options = new IgbGridStateOptions()
    {
        CellSelection = true,
        RowSelection = true,
        Filtering = true,
        AdvancedFiltering = true,
        Paging = true,
        Sorting = true,
        GroupBy = true,
        Columns = true,
        Expansion = true,
        RowPinning = true,
        ColumnSelection= true
    };
    private string stateKey = "grid-state";
    private IgbIcon IconRef;
    private IDisposable registration;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
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

    void OnGridRendered()
    {
        RestoreGridState();
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
        paginator.TotalRecords = CustomersData.Count;
        paginator.Paginate(0);
        grid.ClearFilter("");
        grid.SortingExpressions = new IgbSortingExpression[0];
        grid.GroupingExpressions = new IgbGroupingExpression[0];
        grid.DeselectAllColumns();
        grid.DeselectAllRows();
        grid.ClearCellSelection();
    }

        void OnChange(IgbCheckboxChangeEventArgs eventArgs, string action)
    {
        bool isChecked = eventArgs.Detail.Checked;
        if (action == "AllFeatures")
        {
            var newOptions = new IgbGridStateOptions()
            {
                CellSelection = isChecked,
                RowSelection = isChecked,
                Filtering = isChecked,
                AdvancedFiltering = isChecked,
                Paging = isChecked,
                Sorting = isChecked,
                GroupBy = isChecked,
                Columns = isChecked,
                Expansion = isChecked,
                RowPinning = isChecked,
                ColumnSelection = isChecked
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

    async void LeavePage()
    {
        SaveGridState();
        await JS.InvokeVoidAsync("window.location.replace", "./grids/grid/state-persistence-about");
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
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```


## Limitations

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- Blazor -->

- [`GetStateAsString`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html#IgniteUI_Blazor_Controls_IgbGridState_GetStateAsString) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) component will ignore the columns `Formatter`, [`Filters`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotConfiguration.html#IgniteUI_Blazor_Controls_IgbPivotConfiguration_Filters), `Summaries`, `SortStrategy`, `CellClasses`, `CellStyles`, `HeaderTemplate` and `BodyTemplate` properties.

<!-- end: Blazor -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: Grid -->

## Additional Resources

- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->
