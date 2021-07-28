export interface NodeData {
  Name: string;
  Icon: string;
  Files?: NodeData[];
}

export interface SelectableNodeData extends NodeData {
  Selected?: boolean;
}

export const REMOTE_ROOT: NodeData = {
  Name: 'Network',
  Icon: 'devices',
  Files: []
};

export const REMOTE_DATA: NodeData[] = [
  { Name: 'DESKTOP-XYZ', Icon: 'computer' },
  { Name: 'TABLET-ABC', Icon: 'tablet' },
  { Name: 'PHONE-123', Icon: 'smartphone' }
];

export const DATA: NodeData[] = [
  {
    Name: 'Computer', Icon: 'computer', Files: [
      {
        Name: 'Documents',
        Icon: 'library_books',
        Files:
          [
            { Name: 'Report 2016', Icon: 'article' },
            { Name: 'Report 2017', Icon: 'article' },
            { Name: 'Report 2018', Icon: 'article' },
            { Name: 'Report 2019', Icon: 'article' },
            { Name: 'Report 2020', Icon: 'article' }
          ]
      },
      {
        Name: 'Music',
        Icon: 'library_music',
        Files:
          [
            { Name: 'Track 1', Icon: 'audiotrack' },
            { Name: 'Track 2', Icon: 'audiotrack' },
            { Name: 'Track 3', Icon: 'audiotrack' },
            { Name: 'Track 4', Icon: 'audiotrack' },
            { Name: 'Track 5', Icon: 'audiotrack' }
          ]
      },
      {
        Name: 'Pictures',
        Icon: 'photo_library',
        Files:
          [
            { Name: 'Image 101', Icon: 'image' },
            { Name: 'Image 102', Icon: 'image' },
            { Name: 'Image 103', Icon: 'image' },
            { Name: 'Image 104', Icon: 'image' },
            { Name: 'Image 105', Icon: 'image' }
          ]
      },
      {
        Name: 'Recycle Bin',
        Icon: 'delete',
        Files:
          [
            { Name: 'Track 6', Icon: 'audiotrack' },
            { Name: 'Track 7', Icon: 'audiotrack' },
            { Name: 'Image 106', Icon: 'image' },
            { Name: 'Image 107', Icon: 'image' }
          ]
      }
    ]
  }
];
