---
title: React Combo | Data Visualization Tools | Infragistics
_description: Infragistics' React combo component helps you select the best chart to display your data. Improve your graphs and visualization with Ignite UI for  React!
_keywords: React combo, drop down, Ignite UI for React, Infragistics
mentionedTypes: []
_tocName: Multi-Column Combo Box
_premium: true
---

# React Multi-Column Combo Box Overview

The Multi-Column Combo Box automatically generates columns for properties on the data object. This component is unique in that it's a combo box that visualizes large amounts of data similar to a data grid embedded in the dropdown.

## React Multi-Column Combo Box Example

This sample demonstrates how to create [`IgrMultiColumnComboBox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html) that displays data in multiple columns in a popup window.

```typescript
export class SampleComboData {

    public static getPopulation(): any[] {
        const data = [
            { country:  "Afghanistan", pop:  35320445, id: "Afghanistan", continent: "Middle_East" },
            { country:  "Albania", pop:  3215988, id: "Albania", continent: "Europe" },
            { country:  "Algeria", pop:  35980193, id: "Algeria", continent: "Middle_East" },
            { country:  "American Samoa", pop:  69543, id: "American_Samoa", continent: "Oceania" },
            { country:  "Andorra", pop:  86165, id: "Andorra", continent: "Europe" },
            { country:  "Angola", pop:  19618432, id: "Angola", continent: "Africa" },
            { country:  "Antigua and Barbuda", pop:  89612, id: "Antigua_and_Barbuda", continent: "Central_America" },
            { country:  "Argentina", pop:  40764561, id: "Argentina", continent: "South_America" },
            { country:  "Armenia", pop:  3100236, id: "Armenia", continent: "Europe" },
            { country:  "Aruba", pop:  108141, id: "Aruba", continent: "Central_America" },
            { country:  "Australia", pop:  22323900, id: "Australia", continent: "Oceania" },
            { country:  "Austria", pop:  8423635, id: "Austria", continent: "Europe" },
            { country:  "Azerbaijan", pop:  9173082, id: "Azerbaijan", continent: "Middle_East" },
            { country:  "Bahamas", pop:  347176, id: "Bahamas", continent: "Central_America" },
            { country:  "Bahrain", pop:  1323535, id: "Bahrain", continent: "Middle_East" },
            { country:  "Bangladesh", pop:  150493658, id: "Bangladesh", continent: "Asia" },
            { country:  "Barbados", pop:  273925, id: "Barbados", continent: "Central_America" },
            { country:  "Belarus", pop:  9473000, id: "Belarus", continent: "Europe" },
            { country:  "Belgium", pop:  11020952, id: "Belgium", continent: "Europe" },
            { country:  "Belize", pop:  356600, id: "Belize", continent: "Central_America" },
            { country:  "Benin", pop:  9099922, id: "Benin", continent: "Africa" },
            { country:  "Bermuda", pop:  64700, id: "Bermuda", continent: "Central_America" },
            { country:  "Bhutan", pop:  738267, id: "Bhutan", continent: "Asia" },
            { country:  "Bolivia", pop:  10088108, id: "Bolivia", continent: "South_America" },
            { country:  "Bosnia and Herzegovina", pop:  3752228, id: "Bosnia_and_Herzegovina", continent: "Europe" },
            { country:  "Botswana", pop:  2030738, id: "Botswana", continent: "Africa" },
            { country:  "Brazil", pop:  196655014, id: "Brazil", continent: "South_America" },
            { country:  "Brunei", pop:  405938, id: "Brunei", continent: "Asia" },
            { country:  "Bulgaria", pop:  7348328, id: "Bulgaria", continent: "Europe" },
            { country:  "Burkina Faso", pop:  16967845, id: "Burkina_Faso", continent: "Africa" },
            { country:  "Burundi", pop:  8575172, id: "Burundi", continent: "Africa" },
            { country:  "Cambodia", pop:  14305183, id: "Cambodia", continent: "Asia" },
            { country:  "Cameroon", pop:  20030362, id: "Cameroon", continent: "Africa" },
            { country:  "Canada", pop:  34483975, id: "Canada", continent: "North_America" },
            { country:  "Cape Verde", pop:  500585, id: "Cape_Verde", continent: "Africa" },
            { country:  "Cayman Islands", pop:  56729, id: "Cayman_Islands", continent: "Central_America" },
            { country:  "Central African Republic", pop:  4486837, id: "Central_African_Republic", continent: "Africa" },
            { country:  "Chad", pop:  11525496, id: "Chad", continent: "Africa" },
            { country:  "Channel Islands", pop:  153876, id: "Channel_Islands", continent: "Europe" },
            { country:  "Chile", pop:  17269525, id: "Chile", continent: "South_America" },
            { country:  "China", pop:  1344130000, id: "China", continent: "Asia" },
            { country:  "Colombia", pop:  46927125, id: "Colombia", continent: "South_America" },
            { country:  "Comoros", pop:  753943, id: "Comoros", continent: "Africa" },
            { country:  "Congo, Dem. Rep.", pop:  67757577, id: "Congo__Dem__Rep_", continent: "Africa" },
            { country:  "Congo, Rep.", pop:  4139748, id: "Congo__Rep_", continent: "Africa" },
            { country:  "Costa Rica", pop:  4726575, id: "Costa_Rica", continent: "Central_America" },
            { country:  "Cote d'Ivoire", pop:  20152894, id: "Cote_d_Ivoire", continent: "Africa" },
            { country:  "Croatia", pop:  4403000, id: "Croatia", continent: "Europe" },
            { country:  "Cuba", pop:  11253665, id: "Cuba", continent: "Central_America" },
            { country:  "Curacao", pop:  145619, id: "Curacao", continent: "Central_America" },
            { country:  "Cyprus", pop:  1116564, id: "Cyprus", continent: "Europe" },
            { country:  "Czechia", pop:  10496088, id: "Czech_Republic", continent: "Europe" },
            { country:  "Denmark", pop:  5570572, id: "Denmark", continent: "Europe" },
            { country:  "Djibouti", pop:  905564, id: "Djibouti", continent: "Africa" },
            { country:  "Dominica", pop:  67675, id: "Dominica", continent: "Central_America" },
            { country:  "Dominican Republic", pop:  10056181, id: "Dominican_Republic", continent: "Central_America" },
            { country:  "Ecuador", pop:  14666055, id: "Ecuador", continent: "South_America" },
            { country:  "Egypt, Arab Rep.", pop:  82536770, id: "Egypt__Arab_Rep_", continent: "Middle_East" },
            { country:  "El Salvador", pop:  6227491, id: "El_Salvador", continent: "Central_America" },
            { country:  "Equatorial Guinea", pop:  720213, id: "Equatorial_Guinea", continent: "Africa" },
            { country:  "Eritrea", pop:  5415280, id: "Eritrea", continent: "Africa" },
            { country:  "Estonia", pop:  1339928, id: "Estonia", continent: "Europe" },
            { country:  "Ethiopia", pop:  84734262, id: "Ethiopia", continent: "Africa" },
            { country:  "Faeroe Islands", pop:  48863, id: "Faeroe_Islands", continent: "Central_America" },
            { country:  "Fiji", pop:  868406, id: "Fiji", continent: "Oceania" },
            { country:  "Finland", pop:  5388272, id: "Finland", continent: "Europe" },
            { country:  "France", pop:  65433714, id: "France", continent: "Europe" },
            { country:  "French Polynesia", pop:  273777, id: "French_Polynesia", continent: "Oceania" },
            { country:  "Gabon", pop:  1534262, id: "Gabon", continent: "Africa" },
            { country:  "Gambia", pop:  1776103, id: "Gambia", continent: "Africa" },
            { country:  "Georgia", pop:  4486000, id: "Georgia", continent: "Europe" },
            { country:  "Germany", pop:  81797673, id: "Germany", continent: "Europe" },
            { country:  "Ghana", pop:  24965816, id: "Ghana", continent: "Africa" },
            { country:  "Greece", pop:  11300410, id: "Greece", continent: "Europe" },
            { country:  "Greenland", pop:  56840, id: "Greenland", continent: "North_America" },
            { country:  "Grenada", pop:  104890, id: "Grenada", continent: "Central_America" },
            { country:  "Guam", pop:  182111, id: "Guam", continent: "Central_America" },
            { country:  "Guatemala", pop:  14757316, id: "Guatemala", continent: "Central_America" },
            { country:  "Guinea", pop:  10221808, id: "Guinea", continent: "Africa" },
            { country:  "Guinea-Bissau", pop:  1547061, id: "Guinea-Bissau", continent: "Africa" },
            { country:  "Guyana", pop:  756040, id: "Guyana", continent: "South_America" },
            { country:  "Haiti", pop:  10123787, id: "Haiti", continent: "Central_America" },
            { country:  "Honduras", pop:  7754687, id: "Honduras", continent: "Central_America" },
            { country:  "Hong Kong SAR, China", pop:  7071600, id: "Hong_Kong_SAR__China", continent: "Asia" },
            { country:  "Hungary", pop:  9971727, id: "Hungary", continent: "Europe" },
            { country:  "Iceland", pop:  319014, id: "Iceland", continent: "Europe" },
            { country:  "India", pop:  1241491960, id: "India", continent: "Asia" },
            { country:  "Indonesia", pop:  242325638, id: "Indonesia", continent: "Asia" },
            { country:  "Iran, Islamic Rep.", pop:  74798599, id: "Iran__Islamic_Rep_", continent: "Middle_East" },
            { country:  "Iraq", pop:  32961959, id: "Iraq", continent: "Middle_East" },
            { country:  "Ireland", pop:  4576317, id: "Ireland", continent: "Europe" },
            { country:  "Isle of Man", pop:  83327, id: "Isle_of_Man", continent: "Europe" },
            { country:  "Israel", pop:  7765900, id: "Israel", continent: "Middle_East" },
            { country:  "Italy", pop:  60723603, id: "Italy", continent: "Europe" },
            { country:  "Jamaica", pop:  2706500, id: "Jamaica", continent: "Central_America" },
            { country:  "Japan", pop:  127817277, id: "Japan", continent: "Asia" },
            { country:  "Jordan", pop:  6181000, id: "Jordan", continent: "Middle_East" },
            { country:  "Kazakhstan", pop:  16558676, id: "Kazakhstan", continent: "Asia" },
            { country:  "Kenya", pop:  41609728, id: "Kenya", continent: "Africa" },
            { country:  "Kiribati", pop:  101093, id: "Kiribati", continent: "Oceania" },
            { country:  "Korea, Dem. Rep.", pop:  24451285, id: "Korea__Dem__Rep_", continent: "Asia" },
            { country:  "Korea, Rep.", pop:  49779000, id: "Korea__Rep_", continent: "Asia" },
            { country:  "Kosovo", pop:  1802765, id: "Kosovo", continent: "Europe" },
            { country:  "Kuwait", pop:  2818042, id: "Kuwait", continent: "Middle_East" },
            { country:  "Kyrgyz Republic", pop:  5514600, id: "Kyrgyz_Republic", continent: "Asia" },
            { country:  "Lao PDR", pop:  6288037, id: "Lao_PDR", continent: "Asia" },
            { country:  "Latvia", pop:  2058184, id: "Latvia", continent: "Europe" },
            { country:  "Lebanon", pop:  4259405, id: "Lebanon", continent: "Middle_East" },
            { country:  "Lesotho", pop:  2193843, id: "Lesotho", continent: "Africa" },
            { country:  "Liberia", pop:  4128572, id: "Liberia", continent: "Africa" },
            { country:  "Libya", pop:  6422772, id: "Libya", continent: "Middle_East" },
            { country:  "Liechtenstein", pop:  36304, id: "Liechtenstein", continent: "Europe" },
            { country:  "Lithuania", pop:  3030173, id: "Lithuania", continent: "Europe" },
            { country:  "Luxembourg", pop:  518252, id: "Luxembourg", continent: "Europe" },
            { country:  "Macao SAR, China", pop:  555731, id: "Macao_SAR__China", continent: "Asia" },
            { country:  "Macedonia, FYR", pop:  2063893, id: "Macedonia__FYR", continent: "Europe" },
            { country:  "Madagascar", pop:  21315135, id: "Madagascar", continent: "Africa" },
            { country:  "Malawi", pop:  15380888, id: "Malawi", continent: "Africa" },
            { country:  "Malaysia", pop:  28859154, id: "Malaysia", continent: "Asia" },
            { country:  "Maldives", pop:  320081, id: "Maldives", continent: "Asia" },
            { country:  "Mali", pop:  15839538, id: "Mali", continent: "Africa" },
            { country:  "Malta", pop:  415654, id: "Malta", continent: "Europe" },
            { country:  "Marshall Islands", pop:  54816, id: "Marshall_Islands", continent: "Oceania" },
            { country:  "Mauritania", pop:  3541540, id: "Mauritania", continent: "Africa" },
            { country:  "Mauritius", pop:  1286051, id: "Mauritius", continent: "Africa" },
            { country:  "Mexico", pop:  114793341, id: "Mexico", continent: "North_America" },
            { country:  "Micronesia, Fed. Sts.", pop:  111542, id: "Micronesia__Fed__Sts_", continent: "Oceania" },
            { country:  "Moldova", pop:  3559000, id: "Moldova", continent: "Europe" },
            { country:  "Monaco", pop:  35427, id: "Monaco", continent: "Europe" },
            { country:  "Mongolia", pop:  2800114, id: "Mongolia", continent: "Asia" },
            { country:  "Montenegro", pop:  632261, id: "Montenegro", continent: "Europe" },
            { country:  "Morocco", pop:  32272974, id: "Morocco", continent: "Middle_East" },
            { country:  "Mozambique", pop:  23929708, id: "Mozambique", continent: "Africa" },
            { country:  "Myanmar", pop:  48336763, id: "Myanmar", continent: "Asia" },
            { country:  "Namibia", pop:  2324004, id: "Namibia", continent: "Africa" },
            { country:  "Nepal", pop:  30485798, id: "Nepal", continent: "Asia" },
            { country:  "Netherlands", pop:  16693074, id: "Netherlands", continent: "Europe" },
            { country:  "New Caledonia", pop:  254024, id: "New_Caledonia", continent: "Oceania" },
            { country:  "New Zealand", pop:  4405200, id: "New_Zealand", continent: "Oceania" },
            { country:  "Nicaragua", pop:  5869859, id: "Nicaragua", continent: "Central_America" },
            { country:  "Niger", pop:  16068994, id: "Niger", continent: "Africa" },
            { country:  "Nigeria", pop:  162470737, id: "Nigeria", continent: "Africa" },
            { country:  "Northern Mariana Islands", pop:  61174, id: "Northern_Mariana_Islands", continent: "Central_America" },
            { country:  "Norway", pop:  4953088, id: "Norway", continent: "Europe" },
            { country:  "Oman", pop:  2846145, id: "Oman", continent: "Middle_East" },
            { country:  "Pakistan", pop:  176745364, id: "Pakistan", continent: "Middle_East" },
            { country:  "Palau", pop:  20609, id: "Palau", continent: "Oceania" },
            { country:  "Panama", pop:  3571185, id: "Panama", continent: "Central_America" },
            { country:  "Papua New Guinea", pop:  7013829, id: "Papua_New_Guinea", continent: "Oceania" },
            { country:  "Paraguay", pop:  6568290, id: "Paraguay", continent: "South_America" },
            { country:  "Peru", pop:  29399817, id: "Peru", continent: "South_America" },
            { country:  "Philippines", pop:  94852030, id: "Philippines", continent: "Asia" },
            { country:  "Poland", pop:  38534157, id: "Poland", continent: "Europe" },
            { country:  "Portugal", pop:  10556999, id: "Portugal", continent: "Europe" },
            { country:  "Puerto Rico", pop:  3706690, id: "Puerto_Rico", continent: "Central_America" },
            { country:  "Qatar", pop:  1870041, id: "Qatar", continent: "Middle_East" },
            { country:  "Romania", pop:  21384832, id: "Romania", continent: "Europe" },
            { country:  "Russian Federation", pop:  142960000, id: "Russian_Federation", continent: "Europe" },
            { country:  "Rwanda", pop:  10942950, id: "Rwanda", continent: "Africa" },
            { country:  "Samoa", pop:  183874, id: "Samoa", continent: "Oceania" },
            { country:  "San Marino", pop:  31735, id: "San_Marino", continent: "Europe" },
            { country:  "Sao Tome and Principe", pop:  168526, id: "Sao_Tome_and_Principe", continent: "Africa" },
            { country:  "Saudi Arabia", pop:  28082541, id: "Saudi_Arabia", continent: "Middle_East" },
            { country:  "Senegal", pop:  12767556, id: "Senegal", continent: "Africa" },
            { country:  "Serbia", pop:  7258745, id: "Serbia", continent: "Europe" },
            { country:  "Seychelles", pop:  86000, id: "Seychelles", continent: "Africa" },
            { country:  "Sierra Leone", pop:  5997486, id: "Sierra_Leone", continent: "Africa" },
            { country:  "Singapore", pop:  5183700, id: "Singapore", continent: "Asia" },
            { country:  "Sint Maarten", pop:  36609, id: "Sint_Maarten", continent: "Europe" },
            { country:  "Slovak Republic", pop:  5398384, id: "Slovak_Republic", continent: "Europe" },
            { country:  "Slovenia", pop:  2052843, id: "Slovenia", continent: "Europe" },
            { country:  "Solomon Islands", pop:  552267, id: "Solomon_Islands", continent: "Oceania" },
            { country:  "Somalia", pop:  9556873, id: "Somalia", continent: "Middle_East" },
            { country:  "South Africa", pop:  50586757, id: "South_Africa", continent: "Africa" },
            { country:  "South Sudan", pop:  10314021, id: "South_Sudan", continent: "Africa" },
            { country:  "Spain", pop:  46174601, id: "Spain", continent: "Europe" },
            { country:  "Sri Lanka", pop:  20869000, id: "Sri_Lanka", continent: "Asia" },
            { country:  "St. Kitts and Nevis", pop:  53051, id: "St__Kitts_and_Nevis", continent: "Central_America" },
            { country:  "St. Lucia", pop:  176000, id: "St__Lucia", continent: "Central_America" },
            { country:  "St. Martin (French part)", pop:  30615, id: "St__Martin__French_part_", continent: "Europe" },
            { country:  "St. Vincent and the Grenadines", pop:  109365, id: "St__Vincent_and_the_Grenadines", continent: "Central_America" },
            { country:  "Sudan", pop:  34318385, id: "Sudan", continent: "Africa" },
            { country:  "Suricountry", pop:  529419, id: "Suricountry", continent: "South_America" },
            { country:  "Swaziland", pop:  1067773, id: "Swaziland", continent: "Africa" },
            { country:  "Sweden", pop:  9449213, id: "Sweden", continent: "Europe" },
            { country:  "Switzerland", pop:  7912398, id: "Switzerland", continent: "Europe" },
            { country:  "Syrian Arab Republic", pop:  20820311, id: "Syrian_Arab_Republic", continent: "Middle_East" },
            { country:  "Tajikistan", pop:  6976958, id: "Tajikistan", continent: "Asia" },
            { country:  "Tanzania", pop:  46218486, id: "Tanzania", continent: "Africa" },
            { country:  "Thailand", pop:  69518555, id: "Thailand", continent: "Asia" },
            { country:  "Timor-Leste", pop:  1175880, id: "Timor-Leste", continent: "Oceania" },
            { country:  "Togo", pop:  6154813, id: "Togo", continent: "Africa" },
            { country:  "Tonga", pop:  104509, id: "Tonga", continent: "Oceania" },
            { country:  "Trinidad and Tobago", pop:  1346350, id: "Trinidad_and_Tobago", continent: "Central_America" },
            { country:  "Tunisia", pop:  10673800, id: "Tunisia", continent: "Middle_East" },
            { country:  "Turkey", pop:  73639596, id: "Turkey", continent: "Middle_East" },
            { country:  "Turkmenistan", pop:  5105301, id: "Turkmenistan", continent: "Asia" },
            { country:  "Turks and Caicos Islands", pop:  39184, id: "Turks_and_Caicos_Islands", continent: "Central_America" },
            { country:  "Tuvalu", pop:  9847, id: "Tuvalu", continent: "Oceania" },
            { country:  "Uganda", pop:  34509205, id: "Uganda", continent: "Africa" },
            { country:  "Ukraine", pop:  45706100, id: "Ukraine", continent: "Europe" },
            { country:  "United Arab Emirates", pop:  7890924, id: "United_Arab_Emirates", continent: "Middle_East" },
            { country:  "United Kingdom", pop:  62744081, id: "United_Kingdom", continent: "Europe" },
            { country:  "United States", pop:  311591917, id: "United_States", continent: "North_America" },
            { country:  "Uruguay", pop:  3368595, id: "Uruguay", continent: "South_America" },
            { country:  "Uzbekistan", pop:  29341200, id: "Uzbekistan", continent: "Asia" },
            { country:  "Vanuatu", pop:  245619, id: "Vanuatu", continent: "Oceania" },
            { country:  "Venezuela, RB", pop:  29278000, id: "Venezuela__RB", continent: "South_America" },
            { country:  "Vietnam", pop:  87840000, id: "Vietnam", continent: "Asia" },
            { country:  "Virgin Islands (U.S.)", pop:  109666, id: "Virgin_Islands__U_S__", continent: "Central_America" },
            { country:  "West Bank and Gaza", pop:  3927051, id: "West_Bank_and_Gaza", continent: "Middle_East" },
            { country:  "Yemen, Rep.", pop:  24799880, id: "Yemen__Rep_", continent: "Middle_East" },
            { country:  "Zambia", pop:  13474959, id: "Zambia", continent: "Africa" },
            { country:  "Zimbabwe", pop:  12754378, id: "Zimbabwe", continent: "Africa" }
        ];
        return data;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SampleComboData } from './SampleComboData';
import { IgrMultiColumnComboBoxModule } from 'igniteui-react-data-grids';
import { IgrMultiColumnComboBox, SortMode } from 'igniteui-react-data-grids';
import { IgrColumnWidth } from 'igniteui-react-data-grids';

IgrMultiColumnComboBoxModule.register();

export default class MultiColumnComboBoxOverview extends React.Component<any, any> {
    public multiColumnComboBox!: IgrMultiColumnComboBox;
    public countryData: any[];

    constructor(props: any) {
        super(props);
        this.onMultiColumnComboBoxRef = this.onMultiColumnComboBoxRef.bind(this);
        this.countryData = SampleComboData.getPopulation();
    }

    public onMultiColumnComboBoxRef(multiColumnComboBox: IgrMultiColumnComboBox) {
        if (!multiColumnComboBox) { return; }
        this.multiColumnComboBox = multiColumnComboBox;
        this.multiColumnComboBox.dataSource = this.countryData;
        this.multiColumnComboBox.textField = "country";
        this.multiColumnComboBox.fields = ["country", "continent", "pop"];
        this.multiColumnComboBox.placeholder = "Choose a country";
        this.multiColumnComboBox.sortMode = SortMode.SortByOneColumnOnly;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrMultiColumnComboBox width="600px" defaultColumnWidth="200"
                            ref={this.onMultiColumnComboBoxRef}>
                    </IgrMultiColumnComboBox>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MultiColumnComboBoxOverview/>);
```


## Dependencies

When installing the charts component, the core package must also be installed.

```cmd
npm install --save igniteui-react-core
npm install --save igniteui-react-data-grids
npm install --save igniteui-react-inputs
npm install --save igniteui-react-layouts
```

## Component Modules

The Multi-Column Combo Box requires the following modules:

```ts
import { IgrMultiColumnComboBoxModule } from 'igniteui-react-data-grids';
import { IgrMultiColumnComboBox } from 'igniteui-react-data-grids';

IgrMultiColumnComboBoxModule.register();
```

## Usage

### Binding a Data Source

In order to display your objects in the Multi-Column Combo Box component, you will need to bind the `DataSource` property. This can be bound in the form of an array of complex objects. The following code demonstrates how to bind the data source property.

In the below code snippet, the "countryNames" collection is an any\[] full of custom objects.

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryNames} />
```

### Setting Display Value and Data Value

You can configure different properties of the Multi-Column Combo Box's bound `DataSource` to act as the display text for the control as well as the underlying value when a selection is made. This is done by setting the [`textField`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#textField) and [`valueField`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#valueField) properties of the control, respectively, to the name of the property on the data item that you want to represent these things.

The following code snippet shows how to set these properties, given that the underlying data item has a "Country" and "ID" property:

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        textField="Country" valueField={["ID"]}/>
```

### Setting Fields

By default, the Multi-Column Combo Box will show all of the properties on the underlying data item, but this can be controlled by setting the [`fields`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#fields) property on the component. This property takes a `string[]` of property paths on the underlying data item to determine which properties are shown.

The following code snippet shows how to set this, and the resulting drop-down would only show the ID and Country columns:

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        fields={["ID", "Country"]} />
```

### Setting Placeholder Text

It is possible to configure the text that shows as a placeholder for when there is no selection in the Multi-Column Combo Box component. This is done by setting the [`placeholder`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#placeholder) property to the string you would like to be displayed. The following code demonstrates how to set this:

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        placeholder="Please choose a country" />
```

### Configuring Sorting Mode

The user has the ability to sort the columns that are displayed in the Multi-Column Combo Box by clicking the header of the column in the drop-down. The way the sorting is configured can be modified as well, as the columns can be sorted by only a single column or multiple columns, and they can be limited to either ascending and descending, or they can be tri-state. This is done by setting the [`sortMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#sortMode) property of the component.

Note, the TriState sort options will allow sorted columns to be unsorted.

The following code demonstrates how to set the Multi-Column Combo Box to be able to sort by multiple columns tri-state.

```tsx
<IgrMultiColumnComboBox height="50px" width="400px" dataSource={this.countryData}
                        sortMode={SortMode.SortByMultipleColumnsTriState} />
```

## API References

- `DataSource`
- [`fields`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#fields)
- `GetValueAsync`
- `GetValue`
- [`IgrMultiColumnComboBox`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html)
- [`placeholder`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#placeholder)
- [`sortMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#sortMode)
- [`textField`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#textField)
- `ValueChanged`
- [`valueField`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrmulticolumncombobox.html#valueField)
