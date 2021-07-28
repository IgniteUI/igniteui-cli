export interface Artist {
  Artist: string;
  HasGrammyAward: boolean;
  Debut: number;
  GrammyNominations: number;
  GrammyAwards: number;
  Albums?: Album[];
}

export interface Album {
  Album: string;
  LaunchDate: Date;
  BillboardReview: number;
  USBillboard200: number;
  Artist: string;
  Songs?: Song[];
}

export interface Song {
  TrackNumber: string;
  Title: string;
  Released: string;
  Genre: string;
  Album: string;
}

export const ARTISTS: Artist[] = [
  {
    Artist: "Naomí Yepes",
    HasGrammyAward: false,
    Debut: 2011,
    GrammyNominations: 6,
    GrammyAwards: 0,
    Albums: [
      {
        Album: "Initiation",
        LaunchDate: new Date("September 3, 2013"),
        BillboardReview: 86,
        USBillboard200: 1,
        Artist: "Naomí Yepes"
      },
      {
        Album: "Dream Driven",
        LaunchDate: new Date("August 25, 2014"),
        BillboardReview: 81,
        USBillboard200: 1,
        Artist: "Naomí Yepes",
        Songs: [
          {
            TrackNumber: "1",
            Title: "Intro",
            Released: "*",
            Genre: "*",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "2",
            Title: "Ferocious",
            Released: "28-Apr-2014",
            Genre: "Dance-pop R&B",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "3",
            Title: "Going crazy",
            Released: "10-Feb-2015",
            Genre: "Dance-pop EDM",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "4",
            Title: "Future past",
            Released: "*",
            Genre: "*",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "5",
            Title: "Roaming like them",
            Released: "2-Jul-2014",
            Genre: "Electro house Electropop",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "6",
            Title: "Last Wishes",
            Released: "12-Aug-2014",
            Genre: "R&B",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "7",
            Title: "Stay where you are",
            Released: "*",
            Genre: "*",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "8",
            Title: "Imaginarium",
            Released: "*",
            Genre: "*",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "9",
            Title: "Tell me",
            Released: "30-Sep-2014",
            Genre: "Synth-pop R&B",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "10",
            Title: "Shredded into pieces",
            Released: "*",
            Genre: "*",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "11",
            Title: "Capture this moment",
            Released: "*",
            Genre: "*",
            Album: "Dream Driven"
          },
          {
            TrackNumber: "12",
            Title: "Dream Driven",
            Released: "*",
            Genre: "*",
            Album: "Dream Driven"
          }
        ]
      },
      {
        Album: "The dragon journey",
        LaunchDate: new Date("May 20, 2016"),
        BillboardReview: 60,
        USBillboard200: 2,
        Artist: "Naomí Yepes"
      },
      {
        Album: "Organic me",
        LaunchDate: new Date("August 17, 2018"),
        BillboardReview: 82,
        USBillboard200: 1,
        Artist: "Naomí Yepes",
        Songs: [
          {
            TrackNumber: "1",
            Title: "I Love",
            Released: "11-May-2019",
            Genre: "Crunk reggaeton",
            Album: "Organic me"
          },
          {
            TrackNumber: "2",
            Title: "Early Morning Compass",
            Released: "15-Jan-2020",
            Genre: "mystical parody-bap ",
            Album: "Organic me"
          },
          {
            TrackNumber: "3",
            Title: "Key Fields Forever",
            Released: "2-Jan-2020",
            Genre: "Dance-pop EDM",
            Album: "Organic me"
          },
          {
            TrackNumber: "4",
            Title: "Stand by Your Goblins",
            Released: "20-Nov-2019",
            Genre: "*",
            Album: "Organic me"
          },
          {
            TrackNumber: "5",
            Title: "Mad to Walk",
            Released: "12-May-2019",
            Genre: "Electro house Electropop",
            Album: "Organic me"
          },
          {
            TrackNumber: "6",
            Title: "Alice's Waiting",
            Released: "28-Jan-2020",
            Genre: "R&B",
            Album: "Organic me"
          },
          {
            TrackNumber: "7",
            Title: "We Shall Kiss",
            Released: "30-Oct-2019",
            Genre: "*",
            Album: "Organic me"
          },
          {
            TrackNumber: "8",
            Title: "Behind Single Ants",
            Released: "2-Oct-2019",
            Genre: "*",
            Album: "Organic me"
          },
          {
            TrackNumber: "9",
            Title: "Soap Autopsy",
            Released: "8-Aug-2019",
            Genre: "Synth-pop R&B",
            Album: "Organic me"
          },
          {
            TrackNumber: "10",
            Title: "Have You Met Rich?",
            Released: "1-Jul-2019",
            Genre: "ethno-tunes",
            Album: "Organic me"
          },
          {
            TrackNumber: "11",
            Title: "Livin' on a Banana",
            Released: "22-Nov-2019",
            Genre: "Crunk reggaeton",
            Album: "Organic me"
          }
        ]
      },
      {
        Album: "Curiosity",
        LaunchDate: new Date("December 7, 2019"),
        BillboardReview: 75,
        USBillboard200: 12,
        Artist: "Naomí Yepes"
      }
    ]
  },
  {
    Artist: "Babila Ebwélé",
    HasGrammyAward: true,
    Debut: 2009,
    GrammyNominations: 0,
    GrammyAwards: 11,
    Albums: [
      {
        Album: "Pushing up daisies",
        LaunchDate: new Date("May 31, 2000"),
        BillboardReview: 86,
        USBillboard200: 42,
        Artist: "Babila Ebwélé",
        Songs: [
          {
            TrackNumber: "1",
            Title: "Wood Shavings Forever",
            Released: "9-Jun-2019",
            Genre: "*",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "2",
            Title: "Early Morning Drive",
            Released: "20-May-2019",
            Genre: "*",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "3",
            Title: "Don't Natter",
            Released: "10-Jun-2019",
            Genre: "adult calypso-industrial",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "4",
            Title: "Stairway to Balloons",
            Released: "18-Jun-2019",
            Genre: "calypso and mariachi",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "5",
            Title: "The Number of your Apple",
            Released: "29-Oct-2019",
            Genre: "*",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "6",
            Title: "Your Delightful Heart",
            Released: "24-Feb-2019",
            Genre: "*",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "7",
            Title: "Nice Weather For Balloons",
            Released: "1-Aug-2019",
            Genre: "rap-hop",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "8",
            Title: "The Girl From Cornwall",
            Released: "4-May-2019",
            Genre: "enigmatic rock-and-roll",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "9",
            Title: "Here Without Jack",
            Released: "24-Oct-2019",
            Genre: "*",
            Album: "Pushing up daisies"
          },
          {
            TrackNumber: "10",
            Title: "Born Rancid",
            Released: "19-Mar-2019",
            Genre: "*",
            Album: "Pushing up daisies"
          }
        ]
      },
      {
        Album: "Death's dead",
        LaunchDate: new Date("June 8, 2016"),
        BillboardReview: 85,
        USBillboard200: 95,
        Artist: "Babila Ebwélé",
        Songs: [
          {
            TrackNumber: "1",
            Title: "Men Sound Better With You",
            Released: "20-Oct-2019",
            Genre: "rap-hop",
            Album: "Death's dead"
          },
          {
            TrackNumber: "2",
            Title: "Ghost in My Rod",
            Released: "5-Oct-2019",
            Genre: "enigmatic rock-and-roll",
            Album: "Death's dead"
          },
          {
            TrackNumber: "3",
            Title: "Bed of Men",
            Released: "14-Nov-2019",
            Genre: "whimsical comedy-grass ",
            Album: "Death's dead"
          },
          {
            TrackNumber: "4",
            Title: "Don't Push",
            Released: "2-Jan-2020",
            Genre: "unblack electronic-trip-hop",
            Album: "Death's dead"
          },
          {
            TrackNumber: "5",
            Title: "Nice Weather For Men",
            Released: "18-Dec-2019",
            Genre: "*",
            Album: "Death's dead"
          },
          {
            TrackNumber: "6",
            Title: "Rancid Rhapsody",
            Released: "10-Mar-2019",
            Genre: "*",
            Album: "Death's dead"
          },
          {
            TrackNumber: "7",
            Title: "Push, Push, Push!",
            Released: "21-Feb-2019",
            Genre: "*",
            Album: "Death's dead"
          },
          {
            TrackNumber: "8",
            Title: "My Name is Sarah",
            Released: "15-Nov-2019",
            Genre: "*",
            Album: "Death's dead"
          },
          {
            TrackNumber: "9",
            Title: "The Girl From My Hotel",
            Released: "6-Nov-2019",
            Genre: "*",
            Album: "Death's dead"
          },
          {
            TrackNumber: "10",
            Title: "Free Box",
            Released: "18-Apr-2019",
            Genre: "splitter-funk",
            Album: "Death's dead"
          },
          {
            TrackNumber: "11",
            Title: "Hotel Cardiff",
            Released: "30-Dec-2019",
            Genre: "guilty pleasure ebm",
            Album: "Death's dead"
          }
        ]
      }
    ]
  },
  {
    Artist: "Ahmad Nazeri",
    HasGrammyAward: true,
    Debut: 2004,
    GrammyNominations: 3,
    GrammyAwards: 1,
    Albums: [
      {
        Album: "Emergency",
        LaunchDate: new Date("March 6, 2004"),
        BillboardReview: 98,
        USBillboard200: 69,
        Artist: "Ahmad Nazeri"
      },
      {
        Album: "Bursting bubbles",
        LaunchDate: new Date("April 17, 2006"),
        BillboardReview: 69,
        USBillboard200: 39,
        Artist: "Ahmad Nazeri"
      }
    ]
  },
  {
    Artist: "Kimmy McIlmorie",
    HasGrammyAward: true,
    Debut: 2007,
    GrammyNominations: 21,
    GrammyAwards: 3,
    Albums: [
      {
        Album: "Here we go again",
        LaunchDate: new Date("November 18, 2017"),
        BillboardReview: 68,
        USBillboard200: 1,
        Artist: "Kimmy McIlmorie"
      }
    ]
  },
  {
    Artist: "Mar Rueda",
    HasGrammyAward: true,
    Debut: 1996,
    GrammyNominations: 14,
    GrammyAwards: 2
  },
  {
    Artist: "Izabella Tabakova",
    HasGrammyAward: true,
    Debut: 2017,
    GrammyNominations: 7,
    GrammyAwards: 11,
    Albums: [
      {
        Album: "Once bitten",
        LaunchDate: new Date("July 16, 2007"),
        BillboardReview: 79,
        USBillboard200: 53,
        Artist: "Izabella Tabakova",
        Songs: [
          {
            TrackNumber: "1",
            Title: "Whole Lotta Super Cats",
            Released: "21-May-2019",
            Genre: "*",
            Album: "Once bitten"
          },
          {
            TrackNumber: "2",
            Title: "Enter Becky",
            Released: "16-Jan-2020",
            Genre: "*",
            Album: "Once bitten"
          },
          {
            TrackNumber: "3",
            Title: "Your Cheatin' Flamingo",
            Released: "14-Jan-2020",
            Genre: "*",
            Album: "Once bitten"
          },
          {
            TrackNumber: "4",
            Title: "Mad to Kiss",
            Released: "6-Nov-2019",
            Genre: "Synth-pop R&B",
            Album: "Once bitten"
          },
          {
            TrackNumber: "5",
            Title: "Hotel Prague",
            Released: "20-Oct-2019",
            Genre: "ethno-tunes",
            Album: "Once bitten"
          },
          {
            TrackNumber: "6",
            Title: "Jail on My Mind",
            Released: "31-May-2019",
            Genre: "Crunk reggaeton",
            Album: "Once bitten"
          },
          {
            TrackNumber: "7",
            Title: "Amazing Blues",
            Released: "29-May-2019",
            Genre: "mystical parody-bap ",
            Album: "Once bitten"
          },
          {
            TrackNumber: "8",
            Title: "Goody Two Iron Filings",
            Released: "4-Jul-2019",
            Genre: "Electro house Electropop",
            Album: "Once bitten"
          },
          {
            TrackNumber: "9",
            Title: "I Love in Your Arms",
            Released: "7-Jun-2019",
            Genre: "R&B",
            Album: "Once bitten"
          },
          {
            TrackNumber: "10",
            Title: "Truly Madly Amazing",
            Released: "12-Sep-2019",
            Genre: "ethno-tunes",
            Album: "Once bitten"
          }
        ]
      },
      {
        Album: "Your graciousness",
        LaunchDate: new Date("November 17, 2004"),
        BillboardReview: 69,
        USBillboard200: 30,
        Artist: "Izabella Tabakova",
        Songs: [
          {
            TrackNumber: "1",
            Title: "We Shall Tickle",
            Released: "31-Aug-2019",
            Genre: "old emo-garage ",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "2",
            Title: "Snail Boogie",
            Released: "14-Jun-2019",
            Genre: "*",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "3",
            Title: "Amazing Liz",
            Released: "15-Oct-2019",
            Genre: "*",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "4",
            Title: "When Sexy Aardvarks Cry",
            Released: "1-Oct-2019",
            Genre: "whimsical comedy-grass ",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "5",
            Title: "Stand By Dave",
            Released: "18-Aug-2019",
            Genre: "unblack electronic-trip-hop",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "6",
            Title: "The Golf Course is Your Land",
            Released: "2-Apr-2019",
            Genre: "*",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "7",
            Title: "Where Have All the Men Gone?",
            Released: "29-Apr-2019",
            Genre: "*",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "8",
            Title: "Rhythm of the Leg",
            Released: "5-Aug-2019",
            Genre: "ethno-tunes",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "9",
            Title: "Baby, I Need Your Hats",
            Released: "5-Dec-2019",
            Genre: "neuro-tunes",
            Album: "Your graciousness"
          },
          {
            TrackNumber: "10",
            Title: "Stand by Your Cat",
            Released: "25-Jul-2019",
            Genre: "*",
            Album: "Your graciousness"
          }
        ]
      },
      {
        Album: "Dark matters",
        LaunchDate: new Date("November 3, 2002"),
        BillboardReview: 79,
        USBillboard200: 85,
        Artist: "Izabella Tabakova"
      }
    ]
  },
  {
    Artist: "Nguyễn Diệp Chi",
    HasGrammyAward: true,
    Debut: 1992,
    GrammyNominations: 4,
    GrammyAwards: 2,
    Albums: [
      {
        Album: "Library of liberty",
        LaunchDate: new Date("December 22, 2003"),
        BillboardReview: 93,
        USBillboard200: 5,
        Artist: "Nguyễn Diệp Chi"
      }
    ]
  },
  {
    Artist: "Eva Lee",
    HasGrammyAward: false,
    Debut: 2008,
    GrammyNominations: 2,
    GrammyAwards: 0,
    Albums: [
      {
        Album: "Just a tease",
        LaunchDate: new Date("May 3, 2001"),
        BillboardReview: 91,
        USBillboard200: 29,
        Artist: "Eva Lee"
      }
    ]
  },
  {
    Artist: "Siri Jakobsson",
    HasGrammyAward: true,
    Debut: 1990,
    GrammyNominations: 2,
    GrammyAwards: 8,
    Albums: [
      {
        Album: "Under the bus",
        LaunchDate: new Date("May 14, 2000"),
        BillboardReview: 67,
        USBillboard200: 67,
        Artist: "Siri Jakobsson",
        Songs: [
          {
            TrackNumber: "1",
            Title: "Jack Broke My Heart At Tesco's",
            Released: "19-Jan-2020",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "2",
            Title: "Cat Deep, Hats High",
            Released: "5-Dec-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "3",
            Title: "In Snail We Trust",
            Released: "31-May-2019",
            Genre: "hardcore opera",
            Album: "Under the bus"
          },
          {
            TrackNumber: "4",
            Title: "Liz's Waiting",
            Released: "22-Jul-2019",
            Genre: "emotional C-jam ",
            Album: "Under the bus"
          },
          {
            TrackNumber: "5",
            Title: "Lifeless Blues",
            Released: "14-Jun-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "6",
            Title: "I Spin",
            Released: "26-Mar-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "7",
            Title: "Ring of Rock",
            Released: "12-Dec-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "8",
            Title: "Livin' on a Rock",
            Released: "17-Apr-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "9",
            Title: "Your Lifeless Heart",
            Released: "15-Sep-2019",
            Genre: "adult calypso-industrial",
            Album: "Under the bus"
          },
          {
            TrackNumber: "10",
            Title: "The High Street on My Mind",
            Released: "11-Nov-2019",
            Genre: "calypso and mariachi",
            Album: "Under the bus"
          },
          {
            TrackNumber: "11",
            Title: "Behind Ugly Curtains",
            Released: "8-May-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "12",
            Title: "Where Have All the Curtains Gone?",
            Released: "28-Jun-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "13",
            Title: "Ghost in My Apple",
            Released: "14-Dec-2019",
            Genre: "*",
            Album: "Under the bus"
          },
          {
            TrackNumber: "14",
            Title: "I Chatter",
            Released: "30-Nov-2019",
            Genre: "*",
            Album: "Under the bus"
          }
        ]
      }
    ]
  },
  {
    Artist: "Pablo Cambeiro",
    HasGrammyAward: false,
    Debut: 2011,
    GrammyNominations: 5,
    GrammyAwards: 0,
    Albums: [
      {
        Album: "Fluke",
        LaunchDate: new Date("August 4, 2017"),
        BillboardReview: 93,
        USBillboard200: 98,
        Artist: "Pablo Cambeiro"
      },
      {
        Album: "Crowd control",
        LaunchDate: new Date("August 26, 2003"),
        BillboardReview: 68,
        USBillboard200: 84,
        Artist: "Pablo Cambeiro",
        Songs: [
          {
            TrackNumber: "1",
            Title: "My Bed on My Mind",
            Released: "25-Mar-2019",
            Genre: "ethno-tunes",
            Album: "Crowd control"
          },
          {
            TrackNumber: "2",
            Title: "Bright Blues",
            Released: "28-Sep-2019",
            Genre: "neuro-tunes",
            Album: "Crowd control"
          },
          {
            TrackNumber: "3",
            Title: "Sail, Sail, Sail!",
            Released: "5-Mar-2019",
            Genre: "*",
            Album: "Crowd control"
          },
          {
            TrackNumber: "4",
            Title: "Hotel My Bed",
            Released: "22-Mar-2019",
            Genre: "*",
            Album: "Crowd control"
          },
          {
            TrackNumber: "5",
            Title: "Gonna Make You Mash",
            Released: "18-May-2019",
            Genre: "*",
            Album: "Crowd control"
          },
          {
            TrackNumber: "6",
            Title: "Straight Outta America",
            Released: "16-Jan-2020",
            Genre: "hardcore opera",
            Album: "Crowd control"
          },
          {
            TrackNumber: "7",
            Title: "I Drive",
            Released: "23-Feb-2019",
            Genre: "emotional C-jam ",
            Album: "Crowd control"
          },
          {
            TrackNumber: "8",
            Title: "Like a Teddy",
            Released: "31-Aug-2019",
            Genre: "*",
            Album: "Crowd control"
          },
          {
            TrackNumber: "9",
            Title: "Teddy Boogie",
            Released: "30-Nov-2019",
            Genre: "*",
            Album: "Crowd control"
          }
        ]
      }
    ]
  },
  {
    Artist: "Athar Malakooti",
    HasGrammyAward: false,
    Debut: 2017,
    GrammyNominations: 0,
    GrammyAwards: 0,
    Albums: [
      {
        Album: "Pushing up daisies",
        LaunchDate: new Date("February 24, 2016"),
        BillboardReview: 74,
        USBillboard200: 77,
        Artist: "Athar Malakooti"
      }
    ]
  },
  {
    Artist: "Marti Valencia",
    HasGrammyAward: true,
    Debut: 2004,
    GrammyNominations: 1,
    GrammyAwards: 1,
    Albums: [
      {
        Album: "Nemesis",
        LaunchDate: new Date("June 30, 2004"),
        BillboardReview: 94,
        USBillboard200: 9,
        Artist: "Marti Valencia"
      },
      {
        Album: "First chance",
        LaunchDate: new Date("January 7, 2019"),
        BillboardReview: 96,
        USBillboard200: 19,
        Artist: "Marti Valencia",
        Songs: [
          {
            TrackNumber: "1",
            Title: "My Name is Jason",
            Released: "12-Jul-2019",
            Genre: "*",
            Album: "First chance"
          },
          {
            TrackNumber: "2",
            Title: "Amazing Andy",
            Released: "5-Mar-2019",
            Genre: "*",
            Album: "First chance"
          },
          {
            TrackNumber: "3",
            Title: "The Number of your Knight",
            Released: "4-Dec-2019",
            Genre: "*",
            Album: "First chance"
          },
          {
            TrackNumber: "4",
            Title: "I Sail",
            Released: "3-Mar-2019",
            Genre: "*",
            Album: "First chance"
          },
          {
            TrackNumber: "5",
            Title: "Goody Two Hands",
            Released: "11-Oct-2019",
            Genre: "Electro house Electropop",
            Album: "First chance"
          },
          {
            TrackNumber: "6",
            Title: "Careful With That Knife",
            Released: "18-Dec-2019",
            Genre: "R&B",
            Album: "First chance"
          },
          {
            TrackNumber: "7",
            Title: "Four Single Ants",
            Released: "18-Jan-2020",
            Genre: "*",
            Album: "First chance"
          },
          {
            TrackNumber: "8",
            Title: "Kiss Forever",
            Released: "10-Aug-2019",
            Genre: "*",
            Album: "First chance"
          },
          {
            TrackNumber: "9",
            Title: "Rich's Waiting",
            Released: "15-Mar-2019",
            Genre: "Synth-pop R&B",
            Album: "First chance"
          },
          {
            TrackNumber: "10",
            Title: "Japan is Your Land",
            Released: "7-Mar-2019",
            Genre: "ethno-tunes",
            Album: "First chance"
          },
          {
            TrackNumber: "11",
            Title: "Pencils in My Banana",
            Released: "21-Jun-2019",
            Genre: "Crunk reggaeton",
            Album: "First chance"
          },
          {
            TrackNumber: "12",
            Title: "I Sail in Your Arms",
            Released: "30-Apr-2019",
            Genre: "Synth-pop R&B",
            Album: "First chance"
          }
        ]
      },
      {
        Album: "God's advocate",
        LaunchDate: new Date("April 29, 2007"),
        BillboardReview: 66,
        USBillboard200: 37,
        Artist: "Marti Valencia"
      }
    ]
  },
  {
    Artist: "Alicia Stanger",
    HasGrammyAward: false,
    Debut: 2010,
    GrammyNominations: 1,
    GrammyAwards: 0,
    Albums: [
      {
        Album: "Forever alone",
        LaunchDate: new Date("November 3, 2005"),
        BillboardReview: 82,
        USBillboard200: 7,
        Artist: "Alicia Stanger"
      }
    ]
  },
  {
    Artist: "Peter Taylor",
    HasGrammyAward: true,
    Debut: 2005,
    GrammyNominations: 0,
    GrammyAwards: 2,
    Albums: [
      {
        Album: "Decisions decisions",
        LaunchDate: new Date("April 10, 2008"),
        BillboardReview: 85,
        USBillboard200: 35,
        Artist: "Peter Taylor"
      },
      {
        Album: "Climate changed",
        LaunchDate: new Date("June 20, 2015"),
        BillboardReview: 66,
        USBillboard200: 89,
        Artist: "Peter Taylor"
      }
    ]
  }
];
