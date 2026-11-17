---
title: "Blazor Combo Features"
description: "The Blazor Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
keywords: "Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Combo Features, Blazor Combo Data Binding, Blazor Combo Filtering, Blazor Combo Grouping"
license: MIT
last_updated: "2026-11-16"
platformType: web-only
mentionedTypes: ["Combo"]
llms:
  description: "The Blazor Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
_tocName: Features
---
# Combo Component Features

The Blazor Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <style>
        .options {
            display: flex;
            flex-direction: column;
            margin-top: 12px; 
            gap: 8px;
        }
    </style>

    <IgbCombo 
        @bind-Value="SelectedCities"
        Label="Cities" 
        Placeholder="Pick a city" 
        Data="Data" 
        ValueKey="Id" 
        DisplayKey="Name"
        DisableFiltering="@DisableFiltering"
        CaseSensitiveIcon="@CaseSensitiveIcon"
        GroupKey="@Group"
        Disabled="@Disabled">
    </IgbCombo>

    <div class="options">
        <IgbSwitch Change="@OnDisableFilteringClick">Disable Filtering</IgbSwitch>
        <IgbSwitch Change="@OnCaseSensitiveClick" Disabled="@DisableFiltering">Show Case-sensitive Icon</IgbSwitch>
        <IgbSwitch Change="@OnGroupClick">Enable Grouping</IgbSwitch>
        <IgbSwitch Change="@OnDisableClick">Disable Combo</IgbSwitch>
    </div>
</div>

@code {
    private List<City> Data;
    private string[] SelectedCities = [];
    private bool DisableFiltering = false;
    private bool CaseSensitiveIcon = false;
    private string Group = "";
    private bool Disabled = false;

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
    }

    public void OnDisableFilteringClick(IgbCheckboxChangeEventArgs e) {
        this.DisableFiltering = e.Detail.Checked;
    }

    public void OnCaseSensitiveClick(IgbCheckboxChangeEventArgs e) {
        this.CaseSensitiveIcon = e.Detail.Checked;
    }

    public void OnGroupClick(IgbCheckboxChangeEventArgs e) {
        this.Group = e.Detail.Checked ? "Country" : "";
    }

    public void OnDisableClick(IgbCheckboxChangeEventArgs e) {
        this.Disabled = e.Detail.Checked;
    }
}
```

## Features

### Data Binding

The following snippets bind the Blazor Combo to a local list of US states through its [`data`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=data) property, storing the code of each state and showing its name. The keys that the Combo reads from each item are described in [Data Binding](./overview.md#data-binding) in the Combo Overview topic.

```razor
<IgbCombo @bind-Value="selectedStates" Data="usStates" ValueKey="Id" DisplayKey="Name" />

@code {
    // Items such as new UsState { Id = "CT", Name = "Connecticut", Region = "New England" }
    private List<UsState> usStates = UsStatesData.States;
    private string[] selectedStates = [];
}
```

`IgbCombo` infers its value type from `Data` and `@bind-Value`. The Blazor snippets in the rest of this topic leave them out, so add them back when you copy a snippet.

### Filtering

The Blazor Combo filters its list of options as the user types in the search input of the dropdown. Filtering is on by default. Set [`disableFiltering`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=disableFiltering) to turn it off, which also hides the search input.

To let users switch the search between case-sensitive and case-insensitive, set [`caseSensitiveIcon`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=caseSensitiveIcon). The Combo then shows a case-sensitive icon in its search input. The icon has no effect while filtering is disabled, because the search input is hidden.

```razor
@* Shows the case-sensitive icon in the search input *@
<IgbCombo CaseSensitiveIcon="true" />

@* Turns filtering off, which also hides the search input *@
<IgbCombo DisableFiltering="true" />
```

#### Filtering Options

The [`filteringOptions`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=filteringOptions) property configures how the Blazor Combo matches the search text:

- `filterKey` - the data field to search in. Defaults to the field set by `displayKey`.
- `caseSensitive` - whether the search is case-sensitive. Defaults to `false`. The case-sensitive icon toggles this value.
- `matchDiacritics` - whether accented letters match only themselves, so that `é` doesn't match `e`. Defaults to `false`.

In Blazor, set these options through an `IgbFilteringOptions` object, as `FilterKey`, `CaseSensitive` and `MatchDiacritics`.

The following snippet searches the region of each state instead of its name, and makes the search case-sensitive:

```razor
<IgbCombo FilteringOptions="@filteringOptions" />

@code {
    private IgbFilteringOptions filteringOptions = new IgbFilteringOptions
    {
        FilterKey = "Region",
        CaseSensitive = true
    };
}
```

### Search Input Focus

When the dropdown of the Blazor Combo opens, its search input receives focus.

Set [`autofocusList`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=autofocusList) to focus the list of options instead. On mobile devices, this keeps the software keyboard from opening with the dropdown.

```razor
<IgbCombo AutofocusList="true" />
```

### Grouping

Set [`groupKey`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=groupKey) to a field of the data items to group the options of the Blazor Combo under a header for each value of that field:

In Blazor, the key is the name of the C# property, such as `Region`:

```razor
<IgbCombo GroupKey="Region" />
```

**Note:** 
The [`groupKey`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=groupKey) property takes effect only when the data items are objects.

#### Sorting Direction

The [`groupSorting`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=groupSorting) property sets the order of the groups in the Blazor Combo: `asc` (the default) sorts them in ascending order, `desc` in descending order, and `none` keeps them in the order their first items appear in the data. The items inside each group keep their order in the data.

In Blazor, set it to a `GroupingDirection` value: `Asc`, `Desc` or `None`.

```razor
<IgbCombo GroupSorting="GroupingDirection.Desc" />
```

### Clear Button

The Blazor Combo shows a clear button in its input while at least one option is selected, and clicking the button clears the selection. Set [`disableClear`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=disableClear) to hide the button:

```razor
<IgbCombo DisableClear="true" />
```

### Autofocus

Set [`autofocus`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=autofocus) to focus the Blazor Combo when the page loads:

```razor
<IgbCombo Autofocus="true" />
```

## API References

See the complete Blazor Combo API reference:

- [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbComboModule)

## Additional Resources

Use the following Blazor resources to learn more about the Combo:

- [Combo Overview](./overview.md)
- [Combo Templates](./templates.md)
- [Single Selection Combo](./single-selection.md)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
