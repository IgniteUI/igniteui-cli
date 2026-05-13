---
title: React Hierarchical Grid Row Dragging - Ignite UI for React
_description: Row dragging in React Hierarchical Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in React Hierarchical Grid

The Ignite UI for React Row Dragging feature in React Hierarchical Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) component and is configurable via the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) input.

## React Hierarchical Grid Row Drag Example

```typescript
export class SingersDataItem {
    public constructor(init: Partial<SingersDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Artist: string;
    public Photo: string;
    public Debut: number;
    public GrammyNominations: number;
    public GrammyAwards: number;
    public HasGrammyAward: boolean;
    public Tours: SingersDataItem_ToursItem[];
    public Albums: SingersDataItem_AlbumsItem[];

}
export class SingersDataItem_ToursItem {
    public constructor(init: Partial<SingersDataItem_ToursItem>) {
        Object.assign(this, init);
    }

    public Tour: string;
    public StartedOn: string;
    public Location: string;
    public Headliner: string;
    public TouredBy: string;

}
export class SingersDataItem_AlbumsItem {
    public constructor(init: Partial<SingersDataItem_AlbumsItem>) {
        Object.assign(this, init);
    }

    public Album: string;
    public LaunchDate: string;
    public BillboardReview: number;
    public USBillboard200: number;
    public Artist: string;
    public Songs: SingersDataItem_AlbumsItem_SongsItem[];

}
export class SingersDataItem_AlbumsItem_SongsItem {
    public constructor(init: Partial<SingersDataItem_AlbumsItem_SongsItem>) {
        Object.assign(this, init);
    }

    public Number: number;
    public Title: string;
    public Released: string;
    public Genre: string;
    public Album: string;

}
export class SingersData extends Array<SingersDataItem> {
    public constructor(items: Array<SingersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SingersDataItem(
                {
                    ID: 0,
                    Artist: `Naomí Yepes`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/naomi.png`,
                    Debut: 2011,
                    GrammyNominations: 6,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Faithful Tour`,
                            StartedOn: `Sep 12`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `City Jam Sessions`,
                            StartedOn: `Aug 13`,
                            Location: `North America`,
                            Headliner: `YES`,
                            TouredBy: `Naomí Yepes`
                        }),
                // ... 8 more items
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Dream Driven`,
                            LaunchDate: `August 25, 2014`,
                            BillboardReview: 81,
                            USBillboard200: 1,
                            Artist: `Naomí Yepes`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Intro`,
                                    Released: `29 Apr 2021`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Ferocious`,
                                    Released: `28 Apr 2014`,
                                    Genre: `Dance-pop R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Going crazy`,
                                    Released: `10 Feb 2015`,
                                    Genre: `Dance-pop EDM`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Future past`,
                                    Released: `14 Jul 2021`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Roaming like them`,
                                    Released: `2 Jul 2014`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Last Wishes`,
                                    Released: `12 Aug 2014`,
                                    Genre: `R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Stay where you are`,
                                    Released: `14 Aug 1998`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Imaginarium`,
                                    Released: `15 Sep 2013`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Tell me`,
                                    Released: `30 Sep 2014`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Shredded into pieces`,
                                    Released: `2 Sep 2011`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Capture this moment`,
                                    Released: `5 Jan 2011`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `Dream Driven`,
                                    Released: `12 Dec 1999`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `The dragon journey`,
                            LaunchDate: `May 20, 2016`,
                            BillboardReview: 60,
                            USBillboard200: 2,
                            Artist: `Naomí Yepes`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Organic me`,
                            LaunchDate: `August 17, 2018`,
                            BillboardReview: 82,
                            USBillboard200: 1,
                            Artist: `Naomí Yepes`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `I Love`,
                                    Released: `11 May 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Early Morning Compass`,
                                    Released: `15 Jan 2020`,
                                    Genre: `mystical parody-bap `,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Key Fields Forever`,
                                    Released: `2 Jan 2020`,
                                    Genre: `Dance-pop EDM`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Stand by Your Goblins`,
                                    Released: `20 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Mad to Walk`,
                                    Released: `12 May 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Alice's Waiting`,
                                    Released: `28 Jan 2020`,
                                    Genre: `R&B`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `We Shall Kiss`,
                                    Released: `30 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Behind Single Ants`,
                                    Released: `2 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Soap Autopsy`,
                                    Released: `8 Aug 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Have You Met Rich?`,
                                    Released: `1 Jul 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Livin' on a Banana`,
                                    Released: `22 Nov 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Organic me`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Curiosity`,
                            LaunchDate: `December 7, 2019`,
                            BillboardReview: 75,
                            USBillboard200: 12,
                            Artist: `Naomí Yepes`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 1,
                    Artist: `Babila Ebwélé`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/babila.png`,
                    Debut: 2009,
                    GrammyNominations: 0,
                    GrammyAwards: 11,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `The last straw`,
                            StartedOn: `May 09`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `No foundations`,
                            StartedOn: `Jun 04`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Crazy eyes`,
                            StartedOn: `Jun 08`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Zero gravity`,
                            StartedOn: `Apr 19`,
                            Location: `United States`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Battle with myself`,
                            StartedOn: `Mar 08`,
                            Location: `North America`,
                            Headliner: `YES`,
                            TouredBy: `Babila Ebwélé`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Pushing up daisies`,
                            LaunchDate: `May 31, 2000`,
                            BillboardReview: 86,
                            USBillboard200: 42,
                            Artist: `Babila Ebwélé`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Wood Shavings Forever`,
                                    Released: `9 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Early Morning Drive`,
                                    Released: `20 May 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Don't Natter`,
                                    Released: `10 Jun 2019`,
                                    Genre: `adult calypso-industrial`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Stairway to Balloons`,
                                    Released: `18 Jun 2019`,
                                    Genre: `calypso and mariachi`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `The Number of your Apple`,
                                    Released: `29 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Your Delightful Heart`,
                                    Released: `24 Feb 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Nice Weather For Balloons`,
                                    Released: `1 Aug 2019`,
                                    Genre: `rap-hop`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `The Girl From Cornwall`,
                                    Released: `4 May 2019`,
                                    Genre: `enigmatic rock-and-roll`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Here Without Jack`,
                                    Released: `24 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Born Rancid`,
                                    Released: `19 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Death's dead`,
                            LaunchDate: `June 8, 2016`,
                            BillboardReview: 85,
                            USBillboard200: 95,
                            Artist: `Babila Ebwélé`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Men Sound Better With You`,
                                    Released: `20 Oct 2019`,
                                    Genre: `rap-hop`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Ghost in My Rod`,
                                    Released: `5 Oct 2019`,
                                    Genre: `enigmatic rock-and-roll`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Bed of Men`,
                                    Released: `14 Nov 2019`,
                                    Genre: `whimsical comedy-grass `,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Don't Push`,
                                    Released: `2 Jan 2020`,
                                    Genre: `unblack electronic-trip-hop`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Nice Weather For Men`,
                                    Released: `18 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Rancid Rhapsody`,
                                    Released: `10 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Push, Push, Push!`,
                                    Released: `21 Feb 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `My Name is Sarah`,
                                    Released: `15 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `The Girl From My Hotel`,
                                    Released: `6 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Free Box`,
                                    Released: `18 Apr 2019`,
                                    Genre: `splitter-funk`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Hotel Cardiff`,
                                    Released: `30 Dec 2019`,
                                    Genre: `guilty pleasure ebm`,
                                    Album: `Death's dead`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 2,
                    Artist: `Ahmad Nazeri`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/ahmad.png`,
                    Debut: 2004,
                    GrammyNominations: 3,
                    GrammyAwards: 1,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Emergency`,
                            LaunchDate: `March 6, 2004`,
                            BillboardReview: 98,
                            USBillboard200: 69,
                            Artist: `Ahmad Nazeri`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Bursting bubbles`,
                            LaunchDate: `April 17, 2006`,
                            BillboardReview: 69,
                            USBillboard200: 39,
                            Artist: `Ahmad Nazeri`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 3,
                    Artist: `Kimmy McIlmorie`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/kimmy.png`,
                    Debut: 2007,
                    GrammyNominations: 21,
                    GrammyAwards: 3,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Here we go again`,
                            LaunchDate: `November 18, 2017`,
                            BillboardReview: 68,
                            USBillboard200: 1,
                            Artist: `Kimmy McIlmorie`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 4,
                    Artist: `Mar Rueda`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/mar.png`,
                    Debut: 1996,
                    GrammyNominations: 14,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                    ]

                }),
                new SingersDataItem(
                {
                    ID: 5,
                    Artist: `Izabella Tabakova`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/izabella.png`,
                    Debut: 2017,
                    GrammyNominations: 7,
                    GrammyAwards: 11,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final breath`,
                            StartedOn: `Jun 13`,
                            Location: `Europe`,
                            Headliner: `YES`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Once bitten`,
                            StartedOn: `Dec 18`,
                            Location: `Australia, United States`,
                            Headliner: `NO`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Code word`,
                            StartedOn: `Sep 19`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final draft`,
                            StartedOn: `Sep 17`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Izabella Tabakova`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Once bitten`,
                            LaunchDate: `July 16, 2007`,
                            BillboardReview: 79,
                            USBillboard200: 53,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Whole Lotta Super Cats`,
                                    Released: `21 May 2019`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Enter Becky`,
                                    Released: `16 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Your Cheatin' Flamingo`,
                                    Released: `14 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Mad to Kiss`,
                                    Released: `6 Nov 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Hotel Prague`,
                                    Released: `20 Oct 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Jail on My Mind`,
                                    Released: `31 May 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Amazing Blues`,
                                    Released: `29 May 2019`,
                                    Genre: `mystical parody-bap `,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Goody Two Iron Filings`,
                                    Released: `4 Jul 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `I Love in Your Arms`,
                                    Released: `7 Jun 2019`,
                                    Genre: `R&B`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Truly Madly Amazing`,
                                    Released: `12 Sep 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Once bitten`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Your graciousness`,
                            LaunchDate: `November 17, 2004`,
                            BillboardReview: 69,
                            USBillboard200: 30,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `We Shall Tickle`,
                                    Released: `31 Aug 2019`,
                                    Genre: `old emo-garage `,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Snail Boogie`,
                                    Released: `14 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Amazing Liz`,
                                    Released: `15 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `When Sexy Aardvarks Cry`,
                                    Released: `1 Oct 2019`,
                                    Genre: `whimsical comedy-grass `,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Stand By Dave`,
                                    Released: `18 Aug 2019`,
                                    Genre: `unblack electronic-trip-hop`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `The Golf Course is Your Land`,
                                    Released: `2 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Where Have All the Men Gone?`,
                                    Released: `29 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Rhythm of the Leg`,
                                    Released: `5 Aug 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Baby, I Need Your Hats`,
                                    Released: `5 Dec 2019`,
                                    Genre: `neuro-tunes`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Stand by Your Cat`,
                                    Released: `25 Jul 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Dark matters`,
                            LaunchDate: `November 3, 2002`,
                            BillboardReview: 79,
                            USBillboard200: 85,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 6,
                    Artist: `Nguyễn Diệp Chi`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/nguyen.png`,
                    Debut: 1992,
                    GrammyNominations: 4,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Library of liberty`,
                            LaunchDate: `December 22, 2003`,
                            BillboardReview: 93,
                            USBillboard200: 5,
                            Artist: `Nguyễn Diệp Chi`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 7,
                    Artist: `Eva Lee`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/eva.png`,
                    Debut: 2008,
                    GrammyNominations: 2,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Just a tease`,
                            LaunchDate: `May 3, 2001`,
                            BillboardReview: 91,
                            USBillboard200: 29,
                            Artist: `Eva Lee`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 8,
                    Artist: `Siri Jakobsson`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/siri.png`,
                    Debut: 1990,
                    GrammyNominations: 2,
                    GrammyAwards: 8,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Basket case`,
                            StartedOn: `Jan 07`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `The bigger fish`,
                            StartedOn: `Dec 07`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Missed the boat`,
                            StartedOn: `Jun 09`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Equivalent exchange`,
                            StartedOn: `Feb 06`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Damage control`,
                            StartedOn: `Oct 11`,
                            Location: `Australia, United States`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Under the bus`,
                            LaunchDate: `May 14, 2000`,
                            BillboardReview: 67,
                            USBillboard200: 67,
                            Artist: `Siri Jakobsson`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Jack Broke My Heart At Tesco's`,
                                    Released: `19 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Cat Deep, Hats High`,
                                    Released: `5 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `In Snail We Trust`,
                                    Released: `31 May 2019`,
                                    Genre: `hardcore opera`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Liz's Waiting`,
                                    Released: `22 Jul 2019`,
                                    Genre: `emotional C-jam `,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Lifeless Blues`,
                                    Released: `14 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `I Spin`,
                                    Released: `26 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Ring of Rock`,
                                    Released: `12 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Livin' on a Rock`,
                                    Released: `17 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Your Lifeless Heart`,
                                    Released: `15 Sep 2019`,
                                    Genre: `adult calypso-industrial`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `The High Street on My Mind`,
                                    Released: `11 Nov 2019`,
                                    Genre: `calypso and mariachi`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Behind Ugly Curtains`,
                                    Released: `8 May 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `Where Have All the Curtains Gone?`,
                                    Released: `28 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 13,
                                    Title: `Ghost in My Apple`,
                                    Released: `14 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 14,
                                    Title: `I Chatter`,
                                    Released: `30 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 9,
                    Artist: `Pablo Cambeiro`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/pablo.png`,
                    Debut: 2011,
                    GrammyNominations: 5,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Beads`,
                            StartedOn: `May 11`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Concept art`,
                            StartedOn: `Dec 18`,
                            Location: `United States`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Glass shoe`,
                            StartedOn: `Jan 20`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Pushing buttons`,
                            StartedOn: `Feb 15`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Dark matters`,
                            StartedOn: `Jan 04`,
                            Location: `Australia, United States`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Greener grass`,
                            StartedOn: `Sep 09`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Apparatus`,
                            StartedOn: `Nov 16`,
                            Location: `Europe`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Fluke`,
                            LaunchDate: `August 4, 2017`,
                            BillboardReview: 93,
                            USBillboard200: 98,
                            Artist: `Pablo Cambeiro`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Crowd control`,
                            LaunchDate: `August 26, 2003`,
                            BillboardReview: 68,
                            USBillboard200: 84,
                            Artist: `Pablo Cambeiro`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `My Bed on My Mind`,
                                    Released: `25 Mar 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Bright Blues`,
                                    Released: `28 Sep 2019`,
                                    Genre: `neuro-tunes`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Sail, Sail, Sail!`,
                                    Released: `5 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Hotel My Bed`,
                                    Released: `22 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Gonna Make You Mash`,
                                    Released: `18 May 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Straight Outta America`,
                                    Released: `16 Jan 2020`,
                                    Genre: `hardcore opera`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `I Drive`,
                                    Released: `23 Feb 2019`,
                                    Genre: `emotional C-jam `,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Like a Teddy`,
                                    Released: `31 Aug 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Teddy Boogie`,
                                    Released: `30 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 10,
                    Artist: `Athar Malakooti`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/athar.png`,
                    Debut: 2017,
                    GrammyNominations: 0,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Pushing up daisies`,
                            LaunchDate: `February 24, 2016`,
                            BillboardReview: 74,
                            USBillboard200: 77,
                            Artist: `Athar Malakooti`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 11,
                    Artist: `Marti Valencia`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/marti.png`,
                    Debut: 2004,
                    GrammyNominations: 1,
                    GrammyAwards: 1,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Cat eat cat world`,
                            StartedOn: `Sep 00`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Marti Valencia`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final straw`,
                            StartedOn: `Sep 06`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Marti Valencia`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Nemesis`,
                            LaunchDate: `June 30, 2004`,
                            BillboardReview: 94,
                            USBillboard200: 9,
                            Artist: `Marti Valencia`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `First chance`,
                            LaunchDate: `January 7, 2019`,
                            BillboardReview: 96,
                            USBillboard200: 19,
                            Artist: `Marti Valencia`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `My Name is Jason`,
                                    Released: `12 Jul 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Amazing Andy`,
                                    Released: `5 Mar 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `The Number of your Knight`,
                                    Released: `4 Dec 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `I Sail`,
                                    Released: `3 Mar 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Goody Two Hands`,
                                    Released: `11 Oct 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Careful With That Knife`,
                                    Released: `18 Dec 2019`,
                                    Genre: `R&B`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Four Single Ants`,
                                    Released: `18 Jan 2020`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Kiss Forever`,
                                    Released: `10 Aug 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Rich's Waiting`,
                                    Released: `15 Mar 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Japan is Your Land`,
                                    Released: `7 Mar 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Pencils in My Banana`,
                                    Released: `21 Jun 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `I Sail in Your Arms`,
                                    Released: `30 Apr 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `First chance`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `God's advocate`,
                            LaunchDate: `April 29, 2007`,
                            BillboardReview: 66,
                            USBillboard200: 37,
                            Artist: `Marti Valencia`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 12,
                    Artist: `Alicia Stanger`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/alicia.png`,
                    Debut: 2010,
                    GrammyNominations: 1,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Forever alone`,
                            LaunchDate: `November 3, 2005`,
                            BillboardReview: 82,
                            USBillboard200: 7,
                            Artist: `Alicia Stanger`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 13,
                    Artist: `Peter Taylor`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/peter.png`,
                    Debut: 2005,
                    GrammyNominations: 0,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Love`,
                            StartedOn: `Jun 04`,
                            Location: `Europe, Asia`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Fault of treasures`,
                            StartedOn: `Oct 13`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `For eternity`,
                            StartedOn: `Mar 05`,
                            Location: `United States`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Time flies`,
                            StartedOn: `Jun 03`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Highest difficulty`,
                            StartedOn: `Nov 01`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Sleeping dogs`,
                            StartedOn: `May 04`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Decisions decisions`,
                            LaunchDate: `April 10, 2008`,
                            BillboardReview: 85,
                            USBillboard200: 35,
                            Artist: `Peter Taylor`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Climate changed`,
                            LaunchDate: `June 20, 2015`,
                            BillboardReview: 66,
                            USBillboard200: 89,
                            Artist: `Peter Taylor`,
                            Songs: [
                            ]

                        })]

                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
}

.drop-area {
  width: 240px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  background: #dcdcdc;
  color: #111;
  text-align: center;
}
```
```tsx
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrHierarchicalGrid,
  IgrColumn,
  IgrRowIsland,
  IgrRowDragEndEventArgs,
} from "igniteui-react-grids";
import { IgrIcon } from "igniteui-react";
import { SingersData } from "./SingersData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const singersData = new SingersData();
  const treeGridRef = useRef<IgrHierarchicalGrid>(null);

  const onRowDragEnd = (evt: IgrRowDragEndEventArgs) => {
    const ghostElement = evt.detail.dragDirective.ghostElement;
    if (ghostElement != null) {
      const dragElementPos = ghostElement.getBoundingClientRect();
      const dropAreaPosition = document
        .getElementById("dropArea")
        .getBoundingClientRect();

      const withinXBounds =
        dragElementPos.x >= dropAreaPosition.x &&
        dragElementPos.x <= dropAreaPosition.x + dropAreaPosition.width;
      const withinYBounds =
        dragElementPos.y >= dropAreaPosition.y &&
        dragElementPos.y <= dropAreaPosition.y + dropAreaPosition.height;
      if (withinXBounds && withinYBounds) {
        treeGridRef.current.deleteRow(evt.detail.dragData.key);
      }
    }
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="container horizontal wrapper">
          <div className="drop-area" id="dropArea">
            <IgrIcon>delete</IgrIcon>
            <div>Drag a row here to delete it</div>
          </div>

          <IgrHierarchicalGrid
            ref={treeGridRef}
            autoGenerate={false}
            data={singersData}
            primaryKey="ID"
            height="480px"
            width="70%"
            rowDraggable={true}
            onRowDragEnd={onRowDragEnd}
          >
            <IgrColumn
              field="Artist"
              header="Artist"
              dataType="string"
              width="150px"
            ></IgrColumn>
            <IgrColumn
              field="Photo"
              header="Photo"
              dataType="image"
            ></IgrColumn>
            <IgrColumn
              field="Debut"
              header="Debut"
              dataType="number"
            ></IgrColumn>
            <IgrColumn
              field="GrammyNominations"
              header="Grammy Nominations"
              dataType="string"
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="GrammyAwards"
              header="Grammy Awards"
              dataType="string"
              width="200px"
            ></IgrColumn>
            <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
              <IgrColumn
                field="Album"
                header="Album"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="LaunchDate"
                header="Launch Date"
                dataType="date"
              ></IgrColumn>
              <IgrColumn
                field="BillboardReview"
                header="Billboard Review"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="USBillboard200"
                header="US Billboard 200"
                dataType="string"
              ></IgrColumn>
              <IgrRowIsland childDataKey="Songs" autoGenerate={false}>
                <IgrColumn
                  field="Number"
                  header="No."
                  dataType="string"
                ></IgrColumn>
                <IgrColumn
                  field="Title"
                  header="Title"
                  dataType="string"
                ></IgrColumn>
                <IgrColumn
                  field="Released"
                  header="Released"
                  dataType="date"
                ></IgrColumn>
                <IgrColumn
                  field="Genre"
                  header="Genre"
                  dataType="string"
                ></IgrColumn>
              </IgrRowIsland>
            </IgrRowIsland>
            <IgrRowIsland childDataKey="Tours" autoGenerate={false}>
              <IgrColumn
                field="Tour"
                header="Tour"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="StartedOn"
                header="Started on"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="Location"
                header="Location"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="Headliner"
                header="Headliner"
                dataType="string"
              ></IgrColumn>
            </IgrRowIsland>
          </IgrHierarchicalGrid>
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## Configuration

In order to enable row-dragging for your [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), all you need to do is set the grid's [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```tsx
<IgrHierarchicalGrid rowDraggable={true}>
</IgrHierarchicalGrid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

<!-- ComponentStart: HierarchicalGrid -->

```tsx
    const dragIndicatorIconTemplate = (ctx: IgrGridEmptyTemplateContext) => {
        return (
            <>
                <IgrIcon name="drag_handle" collection="material" />
            </>
        );
    }

    <IgrHierarchicalGrid rowDraggable={true} dragIndicatorIconTemplate={dragIndicatorIconTemplate}>
    </IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

## Application Demo

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

<!-- ComponentStart: HierarchicalGrid -->

```tsx
<IgrHierarchicalGrid rowDraggable={true} primaryKey="ID" onRowDragEnd={webHierarchicalGridReorderRowHandler}>
</IgHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> Make sure that there is a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

- Is the row expanded? If so, collapse it.
- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`data`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html#data) array
- Was the row initially selected? If so, mark it as selected.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

Below, you can see this implemented:

<!-- ComponentStart: HierarchicalGrid -->

```tsx
const webHierarchicalGridReorderRowHandler = (args: IgrRowDragEndEventArgs): void => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    hierarchicalGridRef.current.collapseAll();
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-hierarchical-grid-row"));
    const currRowIndex = getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    hierarchicalGridRef.current.deleteRow(args.detail.dragData.key);
    hierarchicalGridRef.current.data.splice(currRowIndex, 0, args.detail.dragData.data);
}

const getCurrentRowIndex = (rowList: any[], cursorPosition: any) => {
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

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrRowDragEndEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.webHierarchicalGridReorderRowHandler = this.webHierarchicalGridReorderRowHandler.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    rowDraggable={true}
                    onRowDragEnd={this.webHierarchicalGridReorderRowHandler}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                sortable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }


    public webHierarchicalGridReorderRowHandler(args: IgrRowDragEndEventArgs): void {
        const ghostElement = args.detail.dragDirective.ghostElement;
        if (!ghostElement) {
            return;
        }
        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = this.hierarchicalGrid;
        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-hierarchical-grid-row"));
        const currRowIndex = this.getCurrentRowIndex(rows,
        { x: dragElementPos.x, y: dragElementPos.y });
        if (currRowIndex === -1) { return; }
        // remove the row that was dragged and place it onto its new location
        grid.deleteRow(args.detail.dragData.key);
        grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
    }

    public getCurrentRowIndex(rowList: any[], cursorPosition: any) {
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Limitations

Currently, there are no known limitations for the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable).

## API References

- [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable)
- `RowDragStart`
- `RowDragEnd`
- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
