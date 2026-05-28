---
title: Blazor Hierarchical Grid Filtering - Ignite UI for Blazor
_description: Start using angular filter to return specific data with Blazor Hierarchical Grid. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: filter, Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/filtering
_tocName: Filtering
---

# Blazor Hierarchical Grid Filtering

The Ignite UI for Blazor Filtering in Blazor Hierarchical Grid is a feature that allows for selectively displaying or hiding data based on specific criteria or conditions. There is a bound data container through which the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) Component provides rich filtering API and all the filtering capabilities. The available filtering types here are three:

- Quick filtering
- [Excel Style Filtering](excel-style-filtering.md)
- [Advanced Filtering](advanced-filtering.md)

## Blazor Hierarchical Grid Filtering Example

The sample below demonstrates [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid)'s **Quick Filter** user experience.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        PrimaryKey="ID"
        AllowFiltering="true"
        FilterMode="FilterMode.QuickFilter"
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
            Resizable="true"
            Filterable="false">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            Resizable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false"
            AllowFiltering="true"
            FilterMode="FilterMode.QuickFilter">
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
                AutoGenerate="false"
                AllowFiltering="true"
                FilterMode="FilterMode.QuickFilter">
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
            AutoGenerate="false"
            AllowFiltering="true"
            FilterMode="FilterMode.QuickFilter">
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

## Setup

In order to specify if filtering is enabled and which filtering mode should be used, the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) exposes the following properties - [`AllowFiltering`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=AllowFiltering), [`AllowAdvancedFiltering`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=AllowAdvancedFiltering), [`FilterMode`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=FilterMode) and [`Filterable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Filterable).

Property [`AllowFiltering`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=AllowFiltering) enables you to specify the following options:

- **false** - the filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the filtering for the corresponding grid will be enabled.

Property [`AllowAdvancedFiltering`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=AllowAdvancedFiltering) enables you to specify the following options:

- **false** - the advanced filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the advanced filtering for the corresponding grid will be enabled.

Property [`FilterMode`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=FilterMode) enables you to specify the following options:

- **QuickFilter** - a simplistic filtering UI. This is the default value.
- **ExcelStyleFilter** - an Excel-like filtering UI.

Property [`Filterable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Filterable) enables you to specify the following options:

- **true** - the filtering for the corresponding column will be enabled. This is the default value.
- **false** - the filtering for the corresponding column will be disabled.

```razor
<IgbHierarchicalGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbHierarchicalGrid>
```

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the [`AllowAdvancedFiltering`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=AllowAdvancedFiltering) input property to **true**

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbHierarchicalGrid Data=data AutoGenerate=true AllowAdvancedFiltering=true />
```

> [!Note]
> You can enable both the `QuickFilter` or `ExcelStyleFilter` and the advanced filtering user interfaces in the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid). Both filtering user interfaces will work independently of one another. The final filtered result in the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) is the intersection between the results of the two filters.

## Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For **number** and **date** columns 'Equals' is selected by default, for **string** - 'Contains' and for **boolean** - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

## Usage

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set [`DataType`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=DataType) of the column, the correct set of **filtering operations** is loaded inside the filter UI dropdown. Additionally, you can set the `IgnoreCase` and the initial `Condition` properties.

The filtering feature is enabled for the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) component by setting the [`AllowFiltering`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=AllowFiltering) input to **true**. The default [`FilterMode`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=FilterMode) is `QuickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`Filterable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=Filterable) input to **false**.

<!-- ComponentEnd: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid Data=data AutoGenerate=false AllowFiltering=true>
    <IgbColumn Field="ProductName" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="Price" DataType="GridColumnDataType.Number" Filterable=false></IgbColumn>
</IgbHierarchicalGrid>
```

> [!Note]
> If values of type **string** are used by a column of data type **date**, the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) won't parse them to **date** objects and using filtering conditions won't be possible. If you want to use **string** objects, additional logic should be implemented on the application level, in order to parse the values to **date** objects.

## Initial filtered state

To set the initial filtering state of the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid), set the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) [`FilteringExpressionsTree`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=FilteringExpressionsTree) property to an array of [`FilteringExpressionsTree`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=FilteringExpressionsTree) for each column to be filtered.

```razor
<IgbHierarchicalGrid
    FilteringExpressionsTree="filteringExpressions"
    AllowFiltering="true"
    FilterMode="FilterMode.QuickFilter">
</IgbHierarchicalGrid>

@code {

    protected override async Task OnInitializedAsync()
    {
        IgbFilteringExpressionsTree gridFilteringExpressionsTree = new IgbFilteringExpressionsTree() { Operator = FilteringLogic.And };

        IgbFilteringExpression categoryFilteringExpressionsTree = new IgbFilteringExpression()
            {
            FieldName = "Category",
            ConditionName = "contains",
            IgnoreCase = true,
            SearchVal = "Metals"
        };

        IgbFilteringExpression typeFilteringExpressionsTree = new IgbFilteringExpression()
        {
            FieldName = "Type",
            ConditionName = "contains",
            IgnoreCase = true,
            SearchVal = "e"
        };

        gridFilteringExpressionsTree.FilteringOperands = new IgbFilteringExpression[2] { categoryFilteringExpressionsTree, typeFilteringExpressionsTree };

        filteringExpressions = gridFilteringExpressionsTree;
    }

    public IgbFilteringExpressionsTree filteringExpressions;
}
```

### Filtering logic

The [`FilteringLogic`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=FilteringLogic) property of the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) controls how filtering multiple columns will resolve in the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid). You can change it at any time through the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) API, or through the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) input property.

```razor
 <IgbHierarchicalGrid FilteringLogic="FilteringLogic.Or"></IgbHierarchicalGrid>
```

The default value of `AND` returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to `OR`, a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbHierarchicalGrid Class="grid"></IgbHierarchicalGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
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
        Id="hierarchicalGrid1"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1"
        AllowFiltering="true"
        FilterMode="FilterMode.QuickFilter">
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
            Resizable="true"
            Filterable="false">
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
            AutoGenerate="false"
            AllowFiltering="true"
            FilterMode="FilterMode.QuickFilter">
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
                AutoGenerate="false"
                AllowFiltering="true"
                FilterMode="FilterMode.QuickFilter">
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
            AutoGenerate="false"
            AllowFiltering="true"
            FilterMode="FilterMode.QuickFilter">
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

## Known Limitations

> [!Note]
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).

## API References

- [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid)
- [`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
