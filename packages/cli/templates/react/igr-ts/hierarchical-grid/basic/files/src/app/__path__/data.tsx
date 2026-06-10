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
  TrackNumber: number;
  Title: string;
  Released: string;
  Genre: string;
  Album: string;
}

export const ARTISTS: Artist[] = [
  {
    Artist: 'Naomí Yepes',
    HasGrammyAward: false,
    Debut: 2011,
    GrammyNominations: 6,
    GrammyAwards: 0,
    Albums: [
      {
        Album: 'Initiation',
        LaunchDate: new Date('September 3, 2013'),
        BillboardReview: 86,
        USBillboard200: 1,
        Artist: 'Naomí Yepes'
      },
      {
        Album: 'Dream Driven',
        LaunchDate: new Date('August 25, 2014'),
        BillboardReview: 81,
        USBillboard200: 1,
        Artist: 'Naomí Yepes',
        Songs: [
          { TrackNumber: 1, Title: 'Intro', Released: '*', Genre: '*', Album: 'Dream Driven' },
          { TrackNumber: 2, Title: 'Ferocious', Released: '28-Apr-2014', Genre: 'Dance-pop R&B', Album: 'Dream Driven' },
          { TrackNumber: 3, Title: 'Going crazy', Released: '10-Feb-2015', Genre: 'Dance-pop EDM', Album: 'Dream Driven' },
          { TrackNumber: 4, Title: 'Future past', Released: '*', Genre: '*', Album: 'Dream Driven' },
          { TrackNumber: 5, Title: 'Roaming like them', Released: '2-Jul-2014', Genre: 'Electro house Electropop', Album: 'Dream Driven' },
          { TrackNumber: 6, Title: 'Last Wishes', Released: '12-Aug-2014', Genre: 'R&B', Album: 'Dream Driven' }
        ]
      },
      {
        Album: 'The dragon journey',
        LaunchDate: new Date('May 20, 2016'),
        BillboardReview: 60,
        USBillboard200: 2,
        Artist: 'Naomí Yepes'
      },
      {
        Album: 'Curiosity',
        LaunchDate: new Date('December 7, 2019'),
        BillboardReview: 75,
        USBillboard200: 12,
        Artist: 'Naomí Yepes'
      }
    ]
  },
  {
    Artist: 'Babila Ebwélé',
    HasGrammyAward: true,
    Debut: 2009,
    GrammyNominations: 0,
    GrammyAwards: 11,
    Albums: [
      {
        Album: 'Pushing up daisies',
        LaunchDate: new Date('May 31, 2000'),
        BillboardReview: 86,
        USBillboard200: 42,
        Artist: 'Babila Ebwélé',
        Songs: [
          { TrackNumber: 1, Title: 'Wood Shavings Forever', Released: '9-Jun-2019', Genre: '*', Album: 'Pushing up daisies' },
          { TrackNumber: 2, Title: 'Early Morning Drive', Released: '20-May-2019', Genre: '*', Album: 'Pushing up daisies' },
          { TrackNumber: 3, Title: "Don't Natter", Released: '10-Jun-2019', Genre: 'adult calypso-industrial', Album: 'Pushing up daisies' },
          { TrackNumber: 4, Title: 'Stairway to Balloons', Released: '18-Jun-2019', Genre: 'calypso and mariachi', Album: 'Pushing up daisies' },
          { TrackNumber: 5, Title: 'The Number of your Apple', Released: '29-Oct-2019', Genre: '*', Album: 'Pushing up daisies' },
          { TrackNumber: 6, Title: 'Your Delightful Heart', Released: '24-Feb-2019', Genre: '*', Album: 'Pushing up daisies' }
        ]
      },
      {
        Album: 'Laughing out loud',
        LaunchDate: new Date('April 28, 2003'),
        BillboardReview: 92,
        USBillboard200: 5,
        Artist: 'Babila Ebwélé'
      }
    ]
  }
];
