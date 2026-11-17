---
title: Free Blazor Data Grid Lite (Open Source) - Ignite UI Grid Lite | MIT license
description: Create apps with our open-source Grid Lite. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
keywords: overview, Blazor, , Ignite UI for Blazor, Infragistics
mentionedTypes: []
namespace: Infragistics.Controls
license: MIT
llms:
  description: "The Ignite UI for Blazor Grid Lite is a lightweight, high-performance Blazor data grid that’s free to use, open-source, and built for modern Blazor applications."
_tocName: Grid Lite
---
# Free & Open-Source Blazor Data Grid (Grid Lite)

The Ignite UI for Blazor Grid Lite is a lightweight, high-performance Blazor data grid that’s free to use, open-source, and built for modern Blazor applications.

This free Blazor data grid is open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. It delivers essential data-display functionality with minimal overhead and the performance users expect. The Blazor Grid Lite is designed for developers who need fast and lightweight data presentation.

## What You Get with our Free Blazor Data Grid

Our free, open-source Blazor Grid Lite comes with the following column-based features: sorting, filtering, hiding, resizing and a variety of pre-defined data types. Blazing-fast performance is delivered with the use of row virtualization. In addition, the component supports keyboard navigation and theming through the [Ignite UI Theming Framework](../themes/overview.md).

### Install IgniteUI.Blazor.GridLite

Grid Lite ships in the MIT-licensed [IgniteUI.Blazor.GridLite](https://www.nuget.org/packages/IgniteUI.Blazor.GridLite) package on NuGet.org. Its source is on [GitHub](https://github.com/IgniteUI/IgniteUI.Blazor.GridLite).

In Visual Studio, open the NuGet package manager by selecting **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**. Search for and install the **IgniteUI.Blazor.GridLite** NuGet package.

Or install via the Package Manager Console:

```cmd
Install-Package IgniteUI.Blazor.GridLite
```

Or via .NET CLI:

```cmd
dotnet add package IgniteUI.Blazor.GridLite
```

### Using Grid Lite

1 - Add the **IgniteUI.Blazor.Controls** namespace in the **_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

2 - Add a theme stylesheet to the host page: **Components/App.razor** in a Blazor Web App, or **wwwroot/index.html** in a standalone Blazor WebAssembly app.

If the app also uses the `IgniteUI.Blazor.Lite` or `IgniteUI.Blazor` package, keep that package's [theme stylesheet](../themes/overview.md); it styles the grid too. Otherwise, link one of the themes the `IgniteUI.Blazor.GridLite` package ships:

```razor
<head>
    <link href="_content/IgniteUI.Blazor.GridLite/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

The themes are `themes/{light|dark}/{bootstrap|material|fluent|indigo}.css`; see [Styles and Themes](./theming.md).

The grid needs no service registration and no script tag. In a Blazor Web App, render it in an interactive render mode.

3 - Add the Grid Lite component to your razor page:

```razor
<IgbGridLite Data="data" AutoGenerate="true">
</IgbGridLite>

@code {
    private object[] data = new object[]
    {
        new { Name = "John", Age = 30, City = "New York" },
        new { Name = "Jane", Age = 25, City = "Los Angeles" },
        new { Name = "Bob", Age = 35, City = "Chicago" }
    };
}
```

## Grid Lite in Action

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using Microsoft.JSInterop
@using IgniteUI.Blazor.Controls
@implements IAsyncDisposable
@inject IJSRuntime JSRuntime

<div class="@RootClass">
    <section class="team-directory" aria-labelledby="team-directory-title">
        <div class="team-directory__header">
            <h2 id="team-directory-title" class="team-directory__title">Team Directory</h2>
            <span class="team-directory__count" aria-live="polite">@visibleCount of @members.Count people</span>
        </div>

        <div class="team-directory__toolbar">
            @* Department quick filter: selected chips show the chip's check icon instead of the dot. *@
            <div class="department-filter" role="group" aria-label="Filter by department">
                <span class="department-filter__label" aria-hidden="true">Department</span>
                @foreach (var option in departmentOptions)
                {
                    var isSelected = selectedDepartments.Contains(option.Name);
                    <IgbChip @key="option.Name"
                             class="department-filter__chip"
                             Outlined="true"
                             Selectable="true"
                             Selected="isSelected"
                             SelectedChanged="@(selected => ToggleDepartmentAsync(option.Name, selected))">
                        @if (!isSelected)
                        {
                            <span slot="prefix" class="@DotClass(option.Name)" aria-hidden="true"></span>
                        }
                        @option.Name
                        <span slot="suffix" class="department-filter__count">@option.Count</span>
                    </IgbChip>
                }
                @if (selectedDepartments.Count > 0)
                {
                    <IgbButton class="department-filter__clear" Variant="ButtonVariant.Flat" @onclick="ClearDepartmentsAsync">Clear</IgbButton>
                }
            </div>
            <IgbIconButton @ref="themeToggle"
                           class="team-directory__theme-toggle"
                           Variant="IconButtonVariant.Flat"
                           IconName="@(isDark ? "light_mode" : "dark_mode")"
                           Collection="@IconCollection"
                           title="@ThemeButtonLabel"
                           aria-label="@ThemeButtonLabel"
                           @onclick="ToggleTheme" />
        </div>

        @* Shown only while the layout hides columns, so they stay reachable: the chip brings all of them
           back, and the grid scrolls sideways. *@
        @if (tier > LayoutTier.Full)
        {
            <div class="team-directory__columns-bar">
                <span class="team-directory__columns-info" aria-live="polite">@ColumnsInfo</span>
                <IgbChip class="department-filter__chip team-directory__columns-chip"
                         Outlined="true"
                         Selectable="true"
                         Selected="showAllColumns"
                         SelectedChanged="ToggleAllColumnsAsync">
                    Show all columns
                </IgbChip>
            </div>
        }

        <div class="team-directory__grid-host" @ref="gridHost">
            <IgbGridLite @ref="grid"
                         TItem="TeamMember"
                         Data="members"
                         class="@GridClass"
                         AdoptRootStyles="true"
                         SortingOptions="sortingOptions"
                         SortingExpressions="initialSort"
                         Filtered="OnGridFilteredAsync"
                         Rendered="OnGridRenderedAsync">
                @* Every width has a floor that keeps its content and the filter row's chip readable, and the
                   grid scrolls sideways below the sum of the floors. Narrower hosts drop the columns that
                   matter least first (see LayoutTier and events.js), so what remains still fits. *@
                <IgbGridLiteColumn Field="@nameof(TeamMember.Name)" Header="Employee"
                                   DataType="GridLiteColumnDataType.String" Width="minmax(180px, 2fr)"
                                   Sortable Filterable />
                <IgbGridLiteColumn Field="@nameof(TeamMember.Department)" Header="Department"
                                   DataType="GridLiteColumnDataType.String" Width="minmax(150px, 1fr)"
                                   Sortable Filterable />
                <IgbGridLiteColumn Field="@nameof(TeamMember.EmploymentType)" Header="Employment"
                                   DataType="GridLiteColumnDataType.String" Width="minmax(130px, 1fr)"
                                   Filterable />
                <IgbGridLiteColumn Field="@nameof(TeamMember.Satisfaction)" Header="Satisfaction"
                                   DataType="GridLiteColumnDataType.Number" Width="minmax(170px, 1fr)"
                                   Sortable Filterable />
                @* Grid Lite has no date type: the column holds the displayed label, and events.js gives
                   it a comparer that sorts by date. *@
                <IgbGridLiteColumn Field="@nameof(TeamMember.RegisteredLabel)" Header="Registered"
                                   DataType="GridLiteColumnDataType.String" Width="minmax(130px, 1fr)"
                                   Sortable Filterable />
                <IgbGridLiteColumn Field="@nameof(TeamMember.Active)" Header="Status"
                                   DataType="GridLiteColumnDataType.Boolean" Width="minmax(120px, 1fr)"
                                   Filterable />
                <IgbGridLiteColumn Field="@nameof(TeamMember.Location)" Header="Location"
                                   DataType="GridLiteColumnDataType.String" Width="minmax(140px, 1fr)"
                                   Sortable Filterable />
                @* Hidden: the department chips filter on this column, so they combine with the
                   Department column's own filter instead of replacing it. *@
                <IgbGridLiteColumn Field="@nameof(TeamMember.QuickFilterDepartment)"
                                   DataType="GridLiteColumnDataType.String" Hidden />
            </IgbGridLite>
        </div>
    </section>
</div>

@code {
    private const string ChipFilterKey = nameof(TeamMember.QuickFilterDepartment);

    // The sample's own icon collection, so it cannot clash with icons registered by other samples.
    private const string IconCollection = "grid-lite-in-action";

    // Material Icons (Apache-2.0), 24px viewBox.
    private const string LightModeIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z'/></svg>";
    private const string DarkModeIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z'/></svg>";

    // How many columns the grid's width leaves room for. Each step to a narrower tier drops one more
    // column, in this order: Location, Employment, Registered, Satisfaction, Status. Employee and
    // Department always stay. The limits are the sum of the visible columns' minimum widths
    // (1020, 880, 750, 620, 450 px) plus room for the scroll bar.
    private enum LayoutTier { Full, Wide, Medium, Compact, Narrow, Minimal }

    private static LayoutTier TierFor(double width) => width switch
    {
        >= 1040 => LayoutTier.Full,
        >= 900 => LayoutTier.Wide,
        >= 770 => LayoutTier.Medium,
        >= 640 => LayoutTier.Compact,
        >= 470 => LayoutTier.Narrow,
        _ => LayoutTier.Minimal
    };

    // Columns the user can see: Employee, Department, Employment, Satisfaction, Registered, Status and
    // Location. The hidden quick-filter column does not count.
    private const int DataColumnCount = 7;

    // The columns a tier drops. They are hidden through the grid's own column list (events.js): the
    // grid reads its column elements once, so a Hidden parameter changed later would not reach it.
    private static string[] HiddenFieldsFor(LayoutTier tier) => new[]
    {
        tier > LayoutTier.Full ? nameof(TeamMember.Location) : null,
        tier > LayoutTier.Wide ? nameof(TeamMember.EmploymentType) : null,
        tier > LayoutTier.Medium ? nameof(TeamMember.RegisteredLabel) : null,
        tier > LayoutTier.Compact ? nameof(TeamMember.Satisfaction) : null,
        tier > LayoutTier.Narrow ? nameof(TeamMember.Active) : null
    }.Where(field => field != null).ToArray();

    private readonly IgbGridLiteSortingOptions sortingOptions = new() { Mode = GridLiteSortingMode.Single };

    // One stable instance: the grid only re-sends a parameter that changed, so re-rendering (for
    // example when the row count updates) never resets the sort the user picked.
    private readonly IgbGridLiteSortingExpression[] initialSort =
    {
        new() { Key = nameof(TeamMember.Name), Direction = GridLiteSortingDirection.Ascending }
    };

    private List<TeamMember> members = new();
    private List<DepartmentOption> departmentOptions = new();
    private readonly HashSet<string> selectedDepartments = new();
    private int visibleCount;
    private bool isDark;
    private LayoutTier tier = LayoutTier.Full;
    private bool showAllColumns;
    private DotNetObjectReference<App> selfReference;

    private IgbGridLite<TeamMember> grid;
    private IgbIconButton themeToggle;
    private ElementReference gridHost;

    // The theme class sits on the root: the dark palette in index.css is declared there, so
    // everything below it, the grid's cell templates included, follows.
    private string RootClass => isDark ? "grid-lite-in-action dark-theme" : "grid-lite-in-action";

    private string ThemeButtonLabel => isDark ? "Switch to light theme" : "Switch to dark theme";

    protected override void OnInitialized()
    {
        members = TeamDirectoryData.CreateMembers();
        departmentOptions = TeamDirectoryData.CreateDepartmentOptions(members);
        visibleCount = members.Count;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (!firstRender)
        {
            return;
        }

        // The grid reports its width from the first measurement on, so the right columns show before
        // the user sees the first frame, and again whenever the frame is resized.
        selfReference = DotNetObjectReference.Create(this);
        await JSRuntime.InvokeVoidAsync("gridLiteInAction.observeWidth", gridHost, selfReference);

        if (themeToggle != null)
        {
            await themeToggle.EnsureReady();
            await themeToggle.RegisterIconFromTextAsync("light_mode", LightModeIcon, IconCollection);
            await themeToggle.RegisterIconFromTextAsync("dark_mode", DarkModeIcon, IconCollection);
        }
    }

    [JSInvokable]
    public async Task OnHostWidthChanged(double width)
    {
        var next = TierFor(width);
        if (next != tier)
        {
            tier = next;
            await ApplyColumnVisibilityAsync();
            await InvokeAsync(StateHasChanged);
        }
    }

    private Task ToggleAllColumnsAsync(bool selected)
    {
        showAllColumns = selected;
        return ApplyColumnVisibilityAsync();
    }

    // The chip overrides the layout: every column shows and the grid scrolls sideways.
    private string[] HiddenFields => showAllColumns ? Array.Empty<string>() : HiddenFieldsFor(tier);

    private string ColumnsInfo => $"{DataColumnCount - HiddenFields.Length} of {DataColumnCount} columns shown";

    // The narrowest layout also packs its two columns tighter (smaller cell padding, slimmer pill and
    // avatar, lower minimum widths) so they fit even a 320 px screen without scrolling.
    private bool IsCompact => tier == LayoutTier.Minimal && !showAllColumns;

    private string GridClass => IsCompact ? "team-directory__grid team-directory__grid--compact" : "team-directory__grid";

    private Task ApplyColumnVisibilityAsync() =>
        JSRuntime.InvokeVoidAsync("gridLiteInAction.setLayout", gridHost, HiddenFields, IsCompact).AsTask();

    public async ValueTask DisposeAsync()
    {
        try
        {
            await JSRuntime.InvokeVoidAsync("gridLiteInAction.stopObservingWidth", gridHost);
        }
        catch (JSDisconnectedException)
        {
            // The page is already gone, so there is nothing left to stop.
        }

        selfReference?.Dispose();
    }

    // Grid Lite has no Razor cell templates yet, so events.js assigns JavaScript templates and the
    // Registered comparer to the grid's columns once the grid exists in the browser.
    private async Task OnGridRenderedAsync()
    {
        await JSRuntime.InvokeVoidAsync("gridLiteInAction.configureColumns", gridHost);
    }

    private Task ToggleDepartmentAsync(string department, bool isSelected)
    {
        if (isSelected)
        {
            selectedDepartments.Add(department);
        }
        else
        {
            selectedDepartments.Remove(department);
        }

        return ApplyDepartmentChipsAsync();
    }

    private Task ClearDepartmentsAsync()
    {
        selectedDepartments.Clear();
        return ApplyDepartmentChipsAsync();
    }

    // The chips filter through the grid's own pipeline, on a hidden column, so they combine with
    // every filter in the filter row.
    private async Task ApplyDepartmentChipsAsync()
    {
        if (grid == null)
        {
            return;
        }

        await grid.ClearFilterAsync(ChipFilterKey);
        if (selectedDepartments.Count > 0)
        {
            await grid.FilterAsync(selectedDepartments.Select(department => new IgbGridLiteFilterExpression
            {
                Key = ChipFilterKey,
                Condition = "equals",
                SearchTerm = department,
                Criteria = GridLiteFilterCriteria.Or
            }));
        }

        await RefreshVisibleCountAsync();
    }

    private Task OnGridFilteredAsync(IgbGridLiteFilteredEventArgs args) => RefreshVisibleCountAsync();

    private async Task RefreshVisibleCountAsync()
    {
        visibleCount = await JSRuntime.InvokeAsync<int>("gridLiteInAction.countVisibleRows", gridHost);
    }

    private void ToggleTheme() => isDark = !isDark;

    private static string DotClass(string department) =>
        $"department-filter__dot department-filter__dot--{department.ToLowerInvariant()}";
}
```

Grid Lite is designed to give you the core features that you need to deliver a beautiful data grid / data table experience in your apps. Designed for performance and beauty, the Grid Lite will work in any framework, on any platform.

## Performance Built In

Row-level virtualization allows you to render unlimited amounts of data with smooth scrolling.

## Automatic Column Types

Column types are automatically generated based on your data source, with built-in filtering tailored to each column type.

## Interactive Features

All the core interactive features your users expect: column filtering, column hiding, column resizing, column sorting, and more.

## Beautiful UX & Branding

Built-in theme support for Bootstrap, Material, Fluent & Indigo, plus endless branding options in color palettes, fonts, elevation, display density & more.

## Rich Keyboard Navigation

Full Excel-style keyboard navigation gives users the experience they expect, with high performance even on large datasets.

## Is Grid Lite a Free & Open-Source Blazor Data Grid?

Yes. Ignite UI Grid Lite is a free, open-source Blazor data grid released under the MIT license. You can use it in commercial or personal projects with no licensing fees. It is part of our initiative to make Ignite UI more open, transparent, and accessible.

- MIT-licensed

- Free for commercial use

- Community-driven development

- No feature gating

However, if your project scales and grows in complexity and functionality, and you require an enterprise-grade application, we have a seamless upgrade strategy. It will make the transitioning from the free Blazor data grid (Grid Lite) to the full-featured and advanced Data Grid simpler and faster.

## API References

[`IgbGridLite<TItem>`](mcp:get_api_reference?platform=blazor&component=IgbGridLite%3CTItem%3E)<br />
[`IgbGridLiteColumn`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteColumn)<br />
