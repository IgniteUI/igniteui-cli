interface Division {
  name: string;
  states: string[];
}

export interface State {
  name: string;
  region: string;
}

const divisions: Division[] = [
  { name: 'New England 01', states: ['Connecticut', 'Maine', 'Massachusetts'] },
  { name: 'New England 02', states: ['New Hampshire', 'Rhode Island', 'Vermont'] },
  { name: 'Mid-Atlantic', states: ['New Jersey', 'New York', 'Pennsylvania'] },
  { name: 'East North Central 02', states: ['Michigan', 'Ohio', 'Wisconsin'] },
  { name: 'East North Central 01', states: ['Illinois', 'Indiana'] },
  { name: 'West North Central 01', states: ['Missouri', 'Nebraska', 'North Dakota', 'South Dakota'] },
  { name: 'West North Central 02', states: ['Iowa', 'Kansas', 'Minnesota'] },
  { name: 'South Atlantic 01', states: ['Delaware', 'Florida', 'Georgia', 'Maryland'] },
  { name: 'South Atlantic 02', states: ['North Carolina', 'South Carolina', 'Virginia', 'District of Columbia', 'West Virginia'] },
  { name: 'South Atlantic 03', states: ['District of Columbia', 'West Virginia'] },
  { name: 'East South Central 01', states: ['Alabama', 'Kentucky'] },
  { name: 'East South Central 02', states: ['Mississippi', 'Tennessee'] },
  { name: 'West South Central', states: ['Arkansas', 'Louisiana', 'Oklahoma', 'Texas'] },
  { name: 'Mountain', states: ['Arizona', 'Colorado', 'Idaho', 'Montana', 'Nevada', 'New Mexico', 'Utah', 'Wyoming'] },
  { name: 'Pacific 01', states: ['Alaska', 'California'] },
  { name: 'Pacific 02', states: ['Hawaii', 'Oregon', 'Washington'] }
];

const localData: State[] = [];
divisions
  .map(d => d.states
    .map(s => localData.push({
      name: s,
      region: d.name.replace(/[\d]+/, '').trim()
    })));

export { localData };
