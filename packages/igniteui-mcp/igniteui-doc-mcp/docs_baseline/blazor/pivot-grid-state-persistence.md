---
title: Blazor Pivot Grid State Persistence - Ignite UI for Blazor
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

# Blazor Pivot Grid State Persistence

The Ignite UI for Blazor State Persistence in Blazor Pivot Grid allows developers to easily save and restore the grid state. When the [`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) is applied on the Blazor [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html), it exposes the `GetStateAsStringAsync` and `ApplyStateFromStringAsync` methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) supports saving and restoring the state of the following features:

<!-- ComponentStart: PivotGrid -->

- `Sorting`
- `Filtering`
- `CellSelection`
- `ColumnSelection`
- `Expansion`
- [`IgbPivotConfiguration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotConfiguration.html)
  - Pivot Configuration properties defined by the `IPivotConfiguration` interface.
  - Pivot Dimension and Value functions are restored using application level code, see [Restoring Pivot Configuration](state-persistence.md#restoring-pivot-configuration) section.

<!-- ComponentEnd: PivotGrid -->

## Usage

The `GetStateAsStringAsync` returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid, PivotGrid -->

```razor
<IgbPivotGrid>
    <IgbGridState @ref="gridState"></IgbGridState>
</IgbPivotGrid>

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

<IgbPivotGrid Rendered="OnGridRendered">
    <IgbGridState @ref="gridState"></IgbGridState>
    <IgbColumn Field="ContactName" Header="Name" MinWidth="200px" ></IgbColumn>
    <IgbColumn Field="ContactTitle" Header="Title" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
    <IgbColumn Field="CompanyName" Header="Company" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
</IgbPivotGrid>

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

<!-- ComponentStart: PivotGrid -->

## Restoring Pivot Configuration

[`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) will not persist pivot dimension functions, value formatters, etc. by default (see [limitations](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The [`IgbPivotGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html) exposes two events which can be used to set back any custom functions you have in the configuration: `DimensionInit` and `ValueInit`. Let's show how to do this:

- Assign event handlers for the `DimensionInit` and `ValueInit` events:

```razor
    <IgbPivotGrid
        @ref="grid"
        Width="95%"
        Height="500px"
        PivotConfiguration="PivotConfiguration"
        ValueInitScript="OnValueInit">
    </IgbPivotGrid>
```

> The `DimensionInit` and `ValueInit` events are emitted for each value and dimension defined in the [`PivotConfiguration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotGrid.html#IgniteUI_Blazor_Controls_IgbPivotGrid_PivotConfiguration) property.

- In the `ValueInit` event handler set all custom aggregators, formatters and styles:

```razor
// In Javascript
const totalSale = (members, data) => {
    return data.reduce((accumulator, value) => accumulator + value.ProductUnitPrice * value.NumberOfUnits, 0);
};

const totalMin = (members, data) => {
    let min = 0;
    if (data.length === 1) {
        min = data[0].ProductUnitPrice * data[0].NumberOfUnits;
    } else if (data.length > 1) {
        const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
        min = mappedData.reduce((a, b) => Math.min(a, b));
    }
    return min;
};

const totalMax = (members, data) => {
    let max = 0;
    if (data.length === 1) {
        max = data[0].ProductUnitPrice * data[0].NumberOfUnits;
    } else if (data.length > 1) {
        const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
        max = mappedData.reduce((a, b) => Math.max(a, b));
    }
    return max;
};

igRegisterScript("OnValueInit", (args) => {
    const value = args.detail;
    if (value.member === "AmountOfSale") {
      value.aggregate.aggregator = totalSale;
      value.aggregateList?.forEach((aggr) => {
        switch (aggr.key) {
          case "SUM":
            aggr.aggregator = totalSale;
            break;
          case "MIN":
            aggr.aggregator = totalMin;
            break;
          case "MAX":
            aggr.aggregator = totalMax;
            break;
        }
      });
    }
}, false);
```

<!-- ComponentEnd: PivotGrid -->

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
                <li>Clicking the SAVE button or leaving the page <a id="leaveLink" href="./grids/pivot-grid/state-persistence-about"><strong>here</strong></a> will save grid state to localStorage.</li>
                <li>Use the control buttons to SAVE / RESTORE / RESET / DELETE / grid state or LEAVE the page.</li>
                <li>Select/Deselect checkboxes to control saving / restoring feature state.</li>
            </ul>
        </div>
        <div class="container horizontal">
            <IgbCheckbox Change="@((evt) => OnChange(evt, "AllFeatures"))" Checked="allOptions">All Features</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "CellSelection"))" Checked="options.CellSelection">Cell Selection</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "ColumnSelection"))" Checked="options.ColumnSelection">Col Selection</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Expansion"))" Checked="options.Expansion">Expansion</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Filtering"))" Checked="options.Filtering">Filtering</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "Sorting"))" Checked="options.Sorting">Sorting</IgbCheckbox>
            <IgbCheckbox Change="@((evt) => OnChange(evt, "PivotConfiguration"))" Checked="options.PivotConfiguration">Pivot Configuration</IgbCheckbox>
        </div>
        <IgbPivotGrid
            @ref="grid"
            Width="95%"
            Height="500px"
            Data="PivotDataFlat"
            PivotConfiguration="PivotConfiguration"
            ColumnSelection="GridSelectionMode.Single"
            ValueInitScript="OnValueInit"
            Rendered="OnGridRendered">
            <IgbGridState @ref="gridState"></IgbGridState>
        </IgbPivotGrid>
    </div>
</div>

@code {

    private string restoreIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z'/></svg>";
    private string saveIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z'/></svg>";
    private string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg>";
    private string forwardIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z'/></svg>";
    private string deleteIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z'/></svg>";
    private string refreshIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z'/></svg>";

    private IgbPivotGrid grid;
    private IgbGridState gridState;
    private IgbPaginator paginator;
    private bool allOptions = true;
    private IgbGridStateOptions options = new IgbGridStateOptions()
    {
        CellSelection = true,
        Filtering = true,
        Sorting = true,
        Expansion = true,
        ColumnSelection = true,
        PivotConfiguration = true
    };
    private string stateKey = "pivot-grid-state";
    private IgbIcon IconRef;
    private IDisposable registration;

    private PivotDataFlat _pivotDataFlat = null;
    public PivotDataFlat PivotDataFlat
    {
        get
        {
            if (_pivotDataFlat == null)
            {
                _pivotDataFlat = new PivotDataFlat();
            }
            return _pivotDataFlat;
        }
    }

    private IgbPivotConfiguration _pivotConfiguration;
    public IgbPivotConfiguration PivotConfiguration
    {
        get
        {
            if (_pivotConfiguration == null) {
                var pivotConfiguration = new IgbPivotConfiguration();
                var dateBaseDimension = new IgbPivotDimension() {
                    MemberName = "Date",
                    Enabled = true
                };
                var dateDimensionOptions = new IgbPivotDateDimensionOptions() {
                    Months = false,
                    Quarters = true,
                    FullDate = false
                };
                var pivotDateDimension = new IgbPivotDateDimension() {
                    BaseDimension = dateBaseDimension,
                    Options = dateDimensionOptions,
                    Enabled = true
                };
                pivotDateDimension.BaseDimension = dateBaseDimension;
                pivotConfiguration.Columns = [pivotDateDimension];

                var productNameDimension = new IgbPivotDimension() {
                    MemberName = "ProductName",
                    Enabled = true
                };
                var sellerCityDimension = new IgbPivotDimension() {
                    MemberName = "SellerCity",
                    Enabled = true
                };
                pivotConfiguration.Rows = [productNameDimension, sellerCityDimension];

                var sellerNameDimension = new IgbPivotDimension() {
                    MemberName = "SellerName",
                    Enabled = true
                };
                pivotConfiguration.Filters = [sellerNameDimension];


                var pivotValue = new IgbPivotValue() {
                    Member = "Value",
                    Aggregate = new IgbPivotAggregator() {
                        Key = "SUM",
                        AggregatorName = PivotAggregationType.SUM,
                        Label = "Sum"
                    },
                    Enabled = true,
                    AggregateList = new IgbPivotAggregator[] {
                        new IgbPivotAggregator() {
                            Key = "SUM",
                            AggregatorName = PivotAggregationType.SUM,
                            Label = "Sum"
                        }
                    }
                };

                var amountOfSaleValue = new IgbPivotValue() {
                    Member = "AmountOfSale",
                    DisplayName = "Amount of Sale",
                    Enabled = true,
                    Aggregate = new IgbPivotAggregator() {
                        Key = "SUM",
                        Label = "Sum of Sale",
                        AggregatorScript = "PivotDataFlatAggregateSumSale"
                    },
                    AggregateList = new IgbPivotAggregator[] {
                        new IgbPivotAggregator() {
                            Key = "SUM",
                            Label = "Sum of Sale",
                            AggregatorScript = "PivotDataFlatAggregateSumSale"
                        },
                        new IgbPivotAggregator() {
                            Key = "MIN",
                            Label = "Minimum of Sale",
                            AggregatorScript = "PivotDataFlatAggregateMinSale"
                        },
                        new IgbPivotAggregator() {
                            Key = "MAX",
                            Label = "Maximum of Sale",
                            AggregatorScript = "PivotDataFlatAggregateMaxSale"
                        }
                    }
                };
            pivotConfiguration.Values = [pivotValue, amountOfSaleValue];
            _pivotConfiguration = pivotConfiguration;
            }
            return _pivotConfiguration;
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
        grid.GetAllDimensions().ToList().ForEach(dim => {
            grid.ClearFilter(dim.MemberName);
        });
        grid.SortingExpressions = new IgbSortingExpression[0];
        grid.DeselectAllColumns();
        grid.ClearCellSelection();
    }

    void OnChange(IgbCheckboxChangeEventArgs eventArgs, string action)
    {
        if (action == "AllFeatures")
        {
            var newOptions = new IgbGridStateOptions()
            {
                CellSelection = eventArgs.Detail.Checked,
                Filtering = eventArgs.Detail.Checked,
                Sorting = eventArgs.Detail.Checked,
                Expansion = eventArgs.Detail.Checked,
                ColumnSelection = eventArgs.Detail.Checked,
                PivotConfiguration = eventArgs.Detail.Checked
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

    public void OnGridRendered()
    {
        RestoreGridState();
    }

    async void LeavePage()
    {
        SaveGridState();
        await JS.InvokeVoidAsync("window.location.replace", "./grids/pivot-grid/state-persistence-about");
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
public class PivotDataFlatItem
{
    public string ProductName { get; set; }
    public double ProductUnitPrice { get; set; }
    public string SellerName { get; set; }
    public string SellerCity { get; set; }
    public string Date { get; set; }
    public double Value { get; set; }
    public double NumberOfUnits { get; set; }
}

public class PivotDataFlat
    : List<PivotDataFlatItem>
{
    public PivotDataFlat()
    {
        this.Add(new PivotDataFlatItem() { ProductName = @"Clothing", ProductUnitPrice = 12.8, SellerName = @"Stanley Brooker", SellerCity = @"Seattle", Date = @"01/01/2007", Value = 94.4, NumberOfUnits = 282 });
        this.Add(new PivotDataFlatItem() { ProductName = @"Clothing", ProductUnitPrice = 49.6, SellerName = @"Elisa Longbottom", SellerCity = @"Sofia", Date = @"01/05/2007", Value = 70.8, NumberOfUnits = 296 });
        this.Add(new PivotDataFlatItem() { ProductName = @"Bikes", ProductUnitPrice = 3.6, SellerName = @"Lydia Burson", SellerCity = @"Tokyo", Date = @"01/06/2007", Value = 35.8, NumberOfUnits = 68 });
        // ... 497 more items
    }
}
```


<!-- ComponentStart: PivotGrid -->

<!-- ComponentEnd: PivotGrid -->

## Limitations

<!-- ComponentStart: PivotGrid -->

- [`GetState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html#IgniteUI_Blazor_Controls_IgbGridState_GetState) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgbGridState`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridState.html) directive will ignore the pivot dimension `MemberFunction`, pivot values [`Member`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotValue.html#IgniteUI_Blazor_Controls_IgbPivotValue_Member), `Formatter`, custom [`Aggregate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotValue.html#IgniteUI_Blazor_Controls_IgbPivotValue_Aggregate) functions, [`Styles`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotValue.html#IgniteUI_Blazor_Controls_IgbPivotValue_Styles) and pivot configuration strategies: [`ColumnStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotConfiguration.html#IgniteUI_Blazor_Controls_IgbPivotConfiguration_ColumnStrategy) and [`RowStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPivotConfiguration.html#IgniteUI_Blazor_Controls_IgbPivotConfiguration_RowStrategy).

<!-- ComponentEnd: PivotGrid -->

<!-- ComponentStart: PivotGrid -->

<!-- * [Pivot Grid Features](features.md) -->

<!-- ComponentEnd: PivotGrid -->
