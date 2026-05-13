---
title: Blazor Hierarchical Grid Sorting - Ignite UI for Blazor
_description: Get started with the Blazor sorting feature of Ignite UI for Blazor Hierarchical Grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: Blazor sort, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/sorting
_tocName: Sorting
_premium: true
---

# Blazor Hierarchical Grid Sorting

The Ignite UI for Blazor Data Sorting feature in Blazor Hierarchical Grid is enabled on a per-column level, meaning that the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) can have a mix of sortable and non-sortable columns. Performing Blazor sort actions enables you to change the display order of the records based on specified criteria.

## Blazor Hierarchical Grid Sorting Overview Example

<!-- ComponentStart: HierarchicalGrid -->

Additionally there is a custom contextmenu added for sorting using [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)'s `ContextMenu` Output.

<!-- ComponentEnd: HierarchicalGrid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        PrimaryKey="ID"
        SortingExpressions="SortingExpression1"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Sortable="true">
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
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Sortable="true">
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
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[1];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.FieldName = "Artist";
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }

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

This is done via the [`Sortable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Sortable) input. With the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) sorting, you can also set the [`SortingIgnoreCase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SortingIgnoreCase) property to perform case sensitive sorting:

```razor
<IgbColumn Field="Title" Sortable="true"></IgbColumn>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) provides a solution for this problem by indicating the index of each sorted column.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        PrimaryKey="ID"
        SortingExpressions="SortingExpression1"
        Name="hierarchicalGrid1"
        @ref="hierarchicalGrid1">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Sortable="true">
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
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Sortable="true">
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
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[4];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.FieldName = "Artist";
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                var sortingExpression3 = new IgbSortingExpression();
                sortingExpression3.Dir = SortingDirection.Desc;
                sortingExpression3.FieldName = "Debut";
                sortingExpression3.IgnoreCase = true;
                sortingExpression1[1] = sortingExpression3;
                var sortingExpression4 = new IgbSortingExpression();
                sortingExpression4.Dir = SortingDirection.Asc;
                sortingExpression4.FieldName = "GrammyNominations";
                sortingExpression4.IgnoreCase = true;
                sortingExpression1[2] = sortingExpression4;
                var sortingExpression5 = new IgbSortingExpression();
                sortingExpression5.Dir = SortingDirection.Asc;
                sortingExpression5.FieldName = "GrammyAwards";
                sortingExpression5.IgnoreCase = true;
                sortingExpression1[3] = sortingExpression5;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }

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

## Sorting through the API

You can sort any column or a combination of columns through the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) API using the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) [`Sort`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Sort) method:

<!-- ComponentStart: HierarchicalGrid -->

```razor
@code {
    this.hierarchicalGrid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression
            },
            new IgbSortingExpression
            {
                FieldName = "Country",
                Dir = SortingDirection.Asc
            }
        });
}
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`ClearSort`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClearSort) method:

```razor
@code {
    @*Removes the sorting state from the Title column*@
    this.hierarchicalGrid.ClearSortAsync("Title");

    @*Removes the sorting state from every column in the Grid*@
    this.hierarchicalGrid.ClearSortAsync("");
}
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> The [`SortStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SortStrategy) of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) is of different type compared to the [`SortStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortStrategy) of the [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html), since they work in different scopes and expose different parameters.

> [!Note]
> The sorting operation **DOES NOT** change the underlying data source of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) by passing an array of sorting expressions to the [`SortingExpressions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortingExpressions) property of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

<!-- ComponentStart: HierarchicalGrid -->

```razor
@code {
    protected override void OnAfterRender(bool first)
    {
        if (first)
        {
            this.hierarchicalGrid.SortingExpressions = new IgbSortingExpression[]{
                new IgbSortingExpression()
                {
                    FieldName = "Title",
                    Dir = SortingDirection.Asc
                }};
        }
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> If values of type `string` are used by a column of [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) `Date`, the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) won't parse them to `Date` objects and using [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- [`SortHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortHeaderIconTemplate) – re-templates the sorting icon when no sorting is applied.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbHierarchicalGrid SortHeaderIconTemplate="SortDefaultTemplate"></IgbHierarchicalGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDefaultTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="unfold_more" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

- [`SortAscendingHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortAscendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in ascending order.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbHierarchicalGrid SortAscendingHeaderIconTemplate="SortAscendingTemplate"></IgbHierarchicalGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortAscendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_less" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

- [`SortDescendingHeaderIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SortDescendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in descending order.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbHierarchicalGrid SortDescendingHeaderIconTemplate="SortDescendingTemplate"></IgbHierarchicalGrid>

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDescendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_more" Collection="material"></IgbIcon>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbHierarchicalGrid class="grid">
</IgbHierarchicalGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
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
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="ID"
        SortingExpressions="SortingExpression1">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date"
                    Sortable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Sortable="true">
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
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Sortable="true">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid = this.hierarchicalGrid;

    }

    private IgbHierarchicalGrid hierarchicalGrid;
    private IgbSortingExpression[] _sortingExpression1 = null;
    public IgbSortingExpression[] SortingExpression1
    {
        get
        {
            if (this._sortingExpression1 == null)
            {
                var sortingExpression1 = new IgbSortingExpression[1];
                var sortingExpression2 = new IgbSortingExpression();
                sortingExpression2.FieldName = "Artist";
                sortingExpression2.Dir = SortingDirection.Asc;
                sortingExpression2.IgnoreCase = true;
                sortingExpression1[0] = sortingExpression2;
                this._sortingExpression1 = sortingExpression1;
            }
            return this._sortingExpression1;
        }
    }

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

## API References

- [`IgbSortingExpression`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSortingExpression.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
