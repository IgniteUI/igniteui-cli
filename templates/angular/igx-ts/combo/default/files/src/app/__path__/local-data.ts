const division = {
    'New England 01': ['Connecticut', 'Maine', 'Massachusetts'],
    'New England 02': ['New Hampshire', 'Rhode Island', 'Vermont'],
    'Mid-Atlantic': ['New Jersey', 'New York', 'Pennsylvania'],
    'East North Central 02': ['Michigan', 'Ohio', 'Wisconsin'],
    'East North Central 01': ['Illinois', 'Indiana'],
    'West North Central 01': ['Missouri', 'Nebraska', 'North Dakota', 'South Dakota'],
    'West North Central 02': ['Iowa', 'Kansas', 'Minnesota'],
    'South Atlantic 01': ['Delaware', 'Florida', 'Georgia', 'Maryland'],
    'South Atlantic 02': ['North Carolina', 'South Carolina', 'Virginia',
        'District of Columbia', 'West Virginia'],
    'South Atlantic 03': ['District of Columbia', 'West Virginia'],
    'East South Central 01': ['Alabama', 'Kentucky'],
    'East South Central 02': ['Mississippi', 'Tennessee'],
    'West South Central': ['Arkansas', 'Louisiana', 'Oklahoma', 'Texas'],
    // tslint:disable-next-line:object-literal-key-quotes
    'Mountain': ['Arizona', 'Colorado', 'Idaho', 'Montana', 'Nevada', 'New Mexico', 'Utah', 'Wyoming'],
    'Pacific 01': ['Alaska', 'California'],
    'Pacific 02': ['Hawaii', 'Oregon', 'Washington']
};

const localData: any[] = [];
const keys = Object.keys(division);
for (const key of keys) {
    division[key].map((e) => {
        localData.push({
            field: e,
            region: key.substring(0, key.length - 3)
        });
    });
}

export { localData };
