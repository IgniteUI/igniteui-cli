export interface Country {
  name: string;
  header?: boolean;
  disabled?: boolean;
}

const data: Country[] = [
  { name: 'EU', header: true },
  { name: 'Germany' },
  { name: 'Bulgaria' },
  { name: 'UK', disabled: true },
  { name: 'NA', header: true },
  { name: 'Canada' },
  { name: 'USA' },
  { name: 'Mexico' },
  { name: 'SA', header: true },
  { name: 'Brazil' },
  { name: 'Colombia', disabled: true },
  { name: 'Argentina' }];

export { data };
