---
title: Blazor Grid Paging - Ignite UI for Blazor
_description: Configure Blazor pagination and create custom pages in the Blazor table by Ignite UI, get data for the requested pages with variety of events.
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Paging, Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
namespace: Infragistics.Controls
_canonicalLink: grids/grid/paging
_tocName: Paging
_premium: true
---

# Blazor Grid Pagination Overview

The Ignite UI for Blazor Pagination feature in Blazor Grid is used to split a large set of data into a sequence of pages that have similar content. React grid pagination improves user experience and data interaction. [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) pagination is configurable via a separate component projected in the grid tree by defining a [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html)  tag, similar to adding of a column. As in any Blazor table, the pagination in the Blazor Grid supports template for custom pages.

## Blazor Grid Pagination Example

The following example represents [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) pagination and exposes the options usage of items per page and how paging can be enabled. The user can also quickly navigate through the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) pages via "Go to last page" and "Go to first page" buttons.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbPaginator
            PerPage="10">
            </IgbPaginator>

            <IgbColumn
            Field="Id"
            Header="Rank"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed"
            DataType="GridColumnDataType.Number"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="TrackProgress"
            Header="Track Progress"
            BodyTemplateScript="WebGridProgressCellTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="CountryFlag"
            Header="Country Flag"
            BodyTemplateScript="WebGridImageCellTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.DigitsInfo = "1.1-5";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }
    private IgbColumn column2;
    private IgbColumn column3;

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

```css
.gridSize {
    --ig-size: var(--ig-size-small);
}
```

```razor
<IgbGrid @ref=grid Class="gridSize" Width="100%" Height="500px" Data=Data>
    <IgbPaginator PerPage="10"></IgbPaginator>
</IgbGrid>
```

<!-- ComponentStart: Grid -->

## Paging with Group By

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process.

Integration between Paging and Group By is described in the [Group By](groupby.md#blazor-grid-group-by-with-paging) topic.

<!-- ComponentEnd: Grid -->

## Usage

The [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html) component is used along with the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component in the example below, but you can use it with any other component in case paging functionality is needed.

<!-- ComponentStart: Grid, TreeGrid -->

```razor
<IgbGrid @ref=grid Data=Data className="gridSize">
    <IgbPaginator Page="grid.Page" TotalRecords="grid.TotalRecords" PerPage="10">
    </IgbPaginator>
</IgbGrid>
```

<!-- ComponentEnd: Grid, TreeGrid -->

### Paginator Component Demo

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            Name="SizeEditor"
            @ref="sizeEditor"
            Label="Grid Size:"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
            DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
            ChangedScript="WebGridSetGridSize">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="AthletesData"
        Name="grid"
        @ref="grid"
        Id="grid">
            <IgbPaginator
            Name="paginator"
            @ref="paginator"
            PerPage="15"
            ResourceStrings="PaginatorResourceStrings1">
            </IgbPaginator>

            <IgbColumn
            Field="Id"
            Header="Rank"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name">
            </IgbColumn>

            <IgbColumn
            Field="BeatsPerMinute"
            Header="Beats Per Minute"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="TopSpeed"
            Header="Top Speed"
            DataType="GridColumnDataType.Number"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var paginator = this.paginator;
        var column1 = this.column1;
        var propertyEditor = this.propertyEditor;
        var sizeEditor = this.sizeEditor;

        this.BindElements = () => {
            propertyEditor.Target = this.grid;
        };
        this.BindElements();

    }

    private IgbGrid grid;
    private IgbPaginator paginator;
    private IgbPaginatorResourceStrings _paginatorResourceStrings1 = null;
    public IgbPaginatorResourceStrings PaginatorResourceStrings1
    {
        get
        {
            if (this._paginatorResourceStrings1 == null)
            {
                var paginatorResourceStrings1 = new IgbPaginatorResourceStrings();
                paginatorResourceStrings1.Igx_paginator_label = "Records per page";
                this._paginatorResourceStrings1 = paginatorResourceStrings1;
            }
            return this._paginatorResourceStrings1;
        }
    }
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.DigitsInfo = "1.1-5";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }
    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;

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

<div class="divider--half"></div>

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html)

## Additional Resources

<!-- ComponentStart: Grid, TreeGrid -->

<!-- * [Paginator](../paginator.md) -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid, TreeGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
