---
title: Blazor Hierarchical Grid Row Dragging - Ignite UI for Blazor
_description: Row dragging in Blazor Hierarchical Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in Blazor Hierarchical Grid

The Ignite UI for Blazor Row Dragging feature in Blazor Hierarchical Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) component and is configurable via the [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) input.

## Blazor Hierarchical Grid Row Drag Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container horizontal fill">
        <div class="container vertical" style="padding: 0.5rem;">
            <IgbHierarchicalGrid AutoGenerate="false"
                                 Data="SingersNestedData"
                                 PrimaryKey="ID"
                                 Id="hierarchicalGrid1"
                                 Name="hierarchicalGrid1"
                                 @ref="hierarchicalGrid1"
                                 Width="100%"
                                 Height="100%"
                                 RowDraggable=true
                                 RowDragEndScript="OnHierarchicalRowDragEndHandler">
                <IgbColumn Field="Artist"
                           Header="Artist"
                           DataType="GridColumnDataType.String"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="Photo"
                           Header="Photo"
                           DataType="GridColumnDataType.Image"
                           MinWidth="115px"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="Debut"
                           Header="Debut"
                           DataType="GridColumnDataType.Number"
                           MinWidth="88px"
                           MaxWidth="230px"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="GrammyNominations"
                           Header="Grammy Nominations"
                           DataType="GridColumnDataType.String"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="GrammyAwards"
                           Header="Grammy Awards"
                           DataType="GridColumnDataType.String"
                           Resizable="true">
                </IgbColumn>

                <IgbRowIsland ChildDataKey="Albums"
                              AutoGenerate="false">
                    <IgbColumn Field="Album"
                               Header="Album"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="LaunchDate"
                               Header="Launch Date"
                               DataType="GridColumnDataType.Date"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="BillboardReview"
                               Header="Billboard Review"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="USBillboard200"
                               Header="US Billboard 200"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbRowIsland ChildDataKey="Songs"
                                  AutoGenerate="false">
                        <IgbColumn Field="Number"
                                   Header="No."
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                        <IgbColumn Field="Title"
                                   Header="Title"
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                        <IgbColumn Field="Released"
                                   Header="Released"
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                        <IgbColumn Field="Genre"
                                   Header="Genre"
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                    </IgbRowIsland>

                </IgbRowIsland>

                <IgbRowIsland ChildDataKey="Tours"
                              AutoGenerate="false">
                    <IgbColumn Field="Tour"
                               Header="Tour"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="StartedOn"
                               Header="Started on"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="Location"
                               Header="Location"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="Headliner"
                               Header="Headliner"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbHierarchicalGrid>

        </div>

        <div class="container vertical" style="padding: 0.5rem;">
            <IgbHierarchicalGrid AutoGenerate="false"                                 
                                 PrimaryKey="ID"
                                 Id="hierarchicalGrid2"
                                 Name="hierarchicalGrid2"
                                 @ref="hierarchicalGrid2"
                                 Data="Data2"
                                 EmptyGridMessage="Drag and Drop a row from the left grid to this grid"
                                 Width="100%"
                                 Height="100%">
                <IgbColumn Field="Artist"
                           Header="Artist"
                           DataType="GridColumnDataType.String"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="Photo"
                           Header="Photo"
                           DataType="GridColumnDataType.Image"
                           MinWidth="115px"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="Debut"
                           Header="Debut"
                           DataType="GridColumnDataType.Number"
                           MinWidth="88px"
                           MaxWidth="230px"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="GrammyNominations"
                           Header="Grammy Nominations"
                           DataType="GridColumnDataType.String"
                           Resizable="true">
                </IgbColumn>

                <IgbColumn Field="GrammyAwards"
                           Header="Grammy Awards"
                           DataType="GridColumnDataType.String"
                           Resizable="true">
                </IgbColumn>

                <IgbRowIsland ChildDataKey="Albums"
                              AutoGenerate="false">
                    <IgbColumn Field="Album"
                               Header="Album"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="LaunchDate"
                               Header="Launch Date"
                               DataType="GridColumnDataType.Date"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="BillboardReview"
                               Header="Billboard Review"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="USBillboard200"
                               Header="US Billboard 200"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbRowIsland ChildDataKey="Songs"
                                  AutoGenerate="false">
                        <IgbColumn Field="Number"
                                   Header="No."
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                        <IgbColumn Field="Title"
                                   Header="Title"
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                        <IgbColumn Field="Released"
                                   Header="Released"
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                        <IgbColumn Field="Genre"
                                   Header="Genre"
                                   DataType="GridColumnDataType.String"
                                   Resizable="true">
                        </IgbColumn>

                    </IgbRowIsland>

                </IgbRowIsland>

                <IgbRowIsland ChildDataKey="Tours"
                              AutoGenerate="false">
                    <IgbColumn Field="Tour"
                               Header="Tour"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="StartedOn"
                               Header="Started on"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="Location"
                               Header="Location"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                    <IgbColumn Field="Headliner"
                               Header="Headliner"
                               DataType="GridColumnDataType.String"
                               Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbHierarchicalGrid>

        </div>
    </div>
   
</div>

@code {

   
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid1 = this.hierarchicalGrid1;
        var hierarchicalGrid2 = this.hierarchicalGrid2;     
    }

    protected override void OnInitialized()
    {                
        this.Data2 = new List<SingersNestedItem>() { };
    }

    private IgbHierarchicalGrid hierarchicalGrid1;
    private IgbHierarchicalGrid hierarchicalGrid2;

    private List<SingersNestedItem> Data2 { get; set; }

    private SingersNestedData _SingersNestedData = null;
    public SingersNestedData SingersNestedData
    {
        get
        {
            if (_SingersNestedData == null)
            {
                _SingersNestedData = new SingersNestedData();
            }
            return _SingersNestedData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;

public class SingersNestedItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersNestedItem_TourInfo> Tours { get; set; }
    public List<SingersNestedItem_AlbumInfo> Albums { get; set; }
}

public class SingersNestedItem_TourInfo
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}

public class SingersNestedItem_AlbumInfo
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersNestedItem_SongInfo> Songs { get; set; }
}

public class SingersNestedItem_SongInfo
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersNestedData : List<SingersNestedItem>
{
    public SingersNestedData()
    {
        this.Add(new SingersNestedItem
        {
            ID = 0,
            Artist = @"Naomí Yepes",
            Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png",
            Debut = 2011,
            GrammyNominations = 6,
            GrammyAwards = 0,
            HasGrammyAward = false,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"City Jam Sessions",
                    StartedOn = @"Aug 13",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2013",
                    StartedOn = @"Dec 13",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2014",
                    StartedOn = @"Dec 14",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Watermelon Tour",
                    StartedOn = @"Feb 15",
                    Location = @"Worldwide",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2016",
                    StartedOn = @"Dec 16",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"The Dragon Tour",
                    StartedOn = @"Feb 17",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Organic Sessions",
                    StartedOn = @"Aug 18",
                    Location = @"United States, England",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Hope World Tour",
                    StartedOn = @"Mar 19",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Dream Driven",
                    LaunchDate = @"August 25, 2014",
                    BillboardReview = 81,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ferocious",
                            Released = @"28 Apr 2014",
                            Genre = @"Dance-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Going crazy",
                            Released = @"10 Feb 2015",
                            Genre = @"Dance-pop EDM",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Future past",
                            Released = @"14 Jul 2021",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Roaming like them",
                            Released = @"2 Jul 2014",
                            Genre = @"Electro house Electropop",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Last Wishes",
                            Released = @"12 Aug 2014",
                            Genre = @"R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Stay where you are",
                            Released = @"14 Aug 1998",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Imaginarium",
                            Released = @"15 Sep 2013",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Tell me",
                            Released = @"30 Sep 2014",
                            Genre = @"Synth-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Shredded into pieces",
                            Released = @"2 Sep 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Capture this moment",
                            Released = @"5 Jan 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 12,
                            Title = @"Dream Driven",
                            Released = @"12 Dec 1999",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"The dragon journey",
                    LaunchDate = @"May 20, 2016",
                    BillboardReview = 60,
                    USBillboard200 = 2,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Organic me",
                    LaunchDate = @"August 17, 2018",
                    BillboardReview = 82,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Compass",
                            Released = @"15 Jan 2020",
                            Genre = @"mystical parody-bap ",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Key Fields Forever",
                            Released = @"2 Jan 2020",
                            Genre = @"Dance-pop EDM",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stand by Your Goblins",
                            Released = @"20 Nov 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Mad to Walk",
                            Released = @"12 May 2019",
                            Genre = @"Electro house Electropop",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Alice's Waiting",
                            Released = @"28 Jan 2020",
                            Genre = @"R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"We Shall Kiss",
                            Released = @"30 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Behind Single Ants",
                            Released = @"2 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Soap Autopsy",
                            Released = @"8 Aug 2019",
                            Genre = @"Synth-pop R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Have You Met Rich?",
                            Released = @"1 Jul 2019",
                            Genre = @"ethno-tunes",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Livin' on a Banana",
                            Released = @"22 Nov 2019",
                            Genre = @"Crunk reggaeton",
                            Album = @"Organic me"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Curiosity",
                    LaunchDate = @"December 7, 2019",
                    BillboardReview = 75,
                    USBillboard200 = 12,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 1,
            Artist = @"Babila Ebwélé",
            Photo = @"https://dl.infragistics.com/x/img/people/names/babila.png",
            Debut = 2009,
            GrammyNominations = 0,
            GrammyAwards = 11,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"No foundations",
                    StartedOn = @"Jun 04",
                    Location = @"United States, Europe",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Crazy eyes",
                    StartedOn = @"Jun 08",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Zero gravity",
                    StartedOn = @"Apr 19",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Battle with myself",
                    StartedOn = @"Mar 08",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Drive",
                            Released = @"20 May 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Don't Natter",
                            Released = @"10 Jun 2019",
                            Genre = @"adult calypso-industrial",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stairway to Balloons",
                            Released = @"18 Jun 2019",
                            Genre = @"calypso and mariachi",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"The Number of your Apple",
                            Released = @"29 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Your Delightful Heart",
                            Released = @"24 Feb 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Nice Weather For Balloons",
                            Released = @"1 Aug 2019",
                            Genre = @"rap-hop",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"The Girl From Cornwall",
                            Released = @"4 May 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Here Without Jack",
                            Released = @"24 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Born Rancid",
                            Released = @"19 Mar 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Death's dead",
                    LaunchDate = @"June 8, 2016",
                    BillboardReview = 85,
                    USBillboard200 = 95,
                    Artist = @"Babila Ebwélé",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ghost in My Rod",
                            Released = @"5 Oct 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Bed of Men",
                            Released = @"14 Nov 2019",
                            Genre = @"whimsical comedy-grass ",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Don't Push",
                            Released = @"2 Jan 2020",
                            Genre = @"unblack electronic-trip-hop",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Nice Weather For Men",
                            Released = @"18 Dec 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Rancid Rhapsody",
                            Released = @"10 Mar 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Push, Push, Push!",
                            Released = @"21 Feb 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"My Name is Sarah",
                            Released = @"15 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"The Girl From My Hotel",
                            Released = @"6 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Free Box",
                            Released = @"18 Apr 2019",
                            Genre = @"splitter-funk",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Hotel Cardiff",
                            Released = @"30 Dec 2019",
                            Genre = @"guilty pleasure ebm",
                            Album = @"Death's dead"
                        }}

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 2,
            Artist = @"Ahmad Nazeri",
            Photo = @"https://dl.infragistics.com/x/img/people/names/ahmad.png",
            Debut = 2004,
            GrammyNominations = 3,
            GrammyAwards = 1,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
            }
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Bursting bubbles",
                    LaunchDate = @"April 17, 2006",
                    BillboardReview = 69,
                    USBillboard200 = 39,
                    Artist = @"Ahmad Nazeri",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        // ... 11 more items
    }
}
```


## Configuration

In order to enable row-dragging for your [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html), all you need to do is set the grid's [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```razor
<IgbHierarchicalGrid RowDraggable="true">
</IgbHierarchicalGrid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's [`DragIndicatorIconTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" DragIndicatorIconTemplate="dragIndicatorIconTemplate" @ref="grid">
</IgbHierarchicalGrid>

private RenderFragment<IgbGridEmptyTemplateContext> dragIndicatorIconTemplate = (context) =>
{
    return @<div>
        <IgbIcon IconName="drag_handle" Collection="material"></IgbIcon>
    </div>;
};
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

## Application Demo

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

```razor
<IgbHierarchicalGrid Data="CustomersData" PrimaryKey="ID" RowDraggable="true" RowDragEndScript="WebHierarchicalGridReorderRowHandler"></IgbHierarchicalGrid>

// In JavaScript
igRegisterScript("WebHierarchicalGridReorderRowHandler", (args) => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName("igc-hierarchical-grid")[0];
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-hierarchical-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
}, false);

function getCurrentRowIndex(rowList, cursorPosition) {
    for (const row of rowList) {
        const rowRect = row.getBoundingClientRect();
        if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
            cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
            // return the index of the targeted row
            return parseInt(row.attributes["data-rowindex"].value);
        }
    }
    return -1;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> Make sure that there is a [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

- Is the row expanded? If so, collapse it.
- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`Data`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html#IgniteUI_Blazor_Controls_IgbHierarchicalGrid_Data) array
- Was the row initially selected? If so, mark it as selected.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

Below, you can see this implemented:

```razor
<IgbHierarchicalGrid Data="SingersData" PrimaryKey="ID" RowDraggable="true" RowDragEndScript="WebGridReorderRowHandler"></IgbHierarchicalGrid >

//In JavaScript
igRegisterScript("WebGridReorderRowHandler", (args) => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName("igc-hierarchical-grid")[0];
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-hierarchical-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
}, false);

function getCurrentRowIndex(rowList, cursorPosition) {
    for (const row of rowList) {
        const rowRect = row.getBoundingClientRect();
        if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
            cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
            // return the index of the targeted row
            return parseInt(row.attributes["data-rowindex"].value);
        }
    }
    return -1;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="ID"
        RowDraggable="true"
        RowDragEndScript="WebHierarchicalGridReorderRowHandler">
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


## Limitations

Currently, there are no known limitations for the [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable).

## API References

- [`RowDraggable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowDraggable)
- `RowDragStart`
- `RowDragEnd`
- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
