---
title: React Grid Cascading combos - Ignite UI for React
_description: Perform updating via cascading combos in Grid, using React Grid. See demos & examples!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
_language: en
sharedComponents: ["Grid"]
mentionedTypes: ["Column", "Combo"]
namespace: Infragistics.Controls
_tocName: Cascading Combos
_premium: true
---

# React Grid with Cascading Combos

The Grid's Editing functionality provides with the opportunity to use Cascading Combobox components. By selecting the value in any preceding [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html), the users will receive only the data that is relevant to their selection within the next React Combobox component.

## Angular Grid with Cascading Combos Sample Overview

The sample below demonstrates how [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) works with nested Cascading [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html) components.

<!-- ComponentStart: Grid -->

```typescript
export class WorldCitiesAbove500KItem {
    public constructor(init: Partial<WorldCitiesAbove500KItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Name: string;
    public Country: string;
    public Region: string;
    public Population: number;

}
export class WorldCitiesAbove500K extends Array<WorldCitiesAbove500KItem> {
    public constructor(items: Array<WorldCitiesAbove500KItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldCitiesAbove500KItem({ ID: 10000, Name: `Shanghai`, Country: `China`, Region: `Shanghai`, Population: 22315474 }),
                new WorldCitiesAbove500KItem({ ID: 10001, Name: `Istanbul`, Country: `Turkey`, Region: `Istanbul`, Population: 14804116 }),
                new WorldCitiesAbove500KItem({ ID: 10002, Name: `Buenos Aires`, Country: `Argentina`, Region: `Buenos Aires F.D.`, Population: 13076300 }),
                // ... 921 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrComboModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { WorldCitiesAbove500KItem, WorldCitiesAbove500K } from './WorldCitiesAbove500K';
import { IgrCombo, IgrComponentBoolValueChangedEventArgs } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrComboModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridWithComboRendered = this.webGridWithComboRendered.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.worldCitiesAbove500K}
                    primaryKey="ID"
                    ref={this.gridRef}
                    onRendered={this.webGridWithComboRendered}>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        bodyTemplate={this.webGridCountryDropDownTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        bodyTemplate={this.webGridRegionDropDownTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        bodyTemplate={this.webGridCityDropDownTemplate}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _worldCitiesAbove500K: WorldCitiesAbove500K = null;
    public get worldCitiesAbove500K(): WorldCitiesAbove500K {
        if (this._worldCitiesAbove500K == null)
        {
            this._worldCitiesAbove500K = new WorldCitiesAbove500K();
        }
        return this._worldCitiesAbove500K;
    }


    public gridData = [
        { ID: 1, Country: '', Region: '', City: '' },
        { ID: 2, Country: '', Region: '', City: '' },
        { ID: 3, Country: '', Region: '', City: '' }
    ];
    public countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index);
    public regions = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
    public cities = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
    private comboRefCollection = new Array<IgrCombo>();
    private comboRefs(r: IgrCombo) {
        if (this && r && !this.comboRefCollection.includes(r)) {
            this.comboRefCollection.push(r);
        }
    }

    public webGridWithComboRendered(args: IgrComponentBoolValueChangedEventArgs): void {
        const grid = args.target as IgrGrid;
        grid.data = this.gridData;
    }

    public onCountryChange(rowId: string, args: CustomEvent<any>) {
        // find next combo
        const regionCombo = this.comboRefCollection.find(c => c.name === "region_" + rowId);
        const cityCombo = this.comboRefCollection.find(c => c.name === "city_" + rowId);
        const regions = this.regions;
        const newValue = args.detail.newValue[0];
        if (newValue === undefined) {
            regionCombo.deselect(regionCombo.value);
            regionCombo.disabled = true;
            regionCombo.data = [];

            cityCombo.deselect(regionCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            regionCombo.disabled = false;
            regionCombo.data = regions.filter(x => x.Country === newValue);

            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        }
    }

    public onRegionChange(rowId: string, args: CustomEvent<any>) {
        // find next combo
        const cityCombo = this.comboRefCollection.find(c => c.name === "city_" + rowId);
        const cities = this.cities;
        const newValue = args.detail.newValue[0];
        if (newValue === undefined) {
            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            cityCombo.disabled = false;
            cityCombo.data = cities.filter(x => x.Region === newValue);
        }
    }

    public webGridCountryDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        (this as any).comboRefs = (this as any).comboRefs.bind(this);
        const id = cell.id.rowID;
        const comboId = "country" + id;
        return (
        <>
            <IgrCombo data={this.countries} ref={(this as any).comboRefs} onChange={(args: any) => { (this as any).onCountryChange(id, args) }} placeholder="Choose Country..." valueKey="Country" displayKey="Country" singleSelect={true} name={comboId}></IgrCombo>
        </>
        );
    }

    public webGridRegionDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        const id = cell.id.rowID;
        const comboId = "region_" + id;
        (this as any).comboRefs = (this as any).comboRefs.bind(this);
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={(this as any).comboRefs} onChange={(args: any) => { (this as any).onRegionChange(id, args) }} placeholder="Choose Region..." disabled={true} valueKey="Region"  displayKey="Region" singleSelect={true} name={comboId}>
                </IgrCombo>
            </div>
        </>
        );
    }

    public webGridCityDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        const id = cell.id.rowID;
        const comboId = "city_" + id;
        (this as any).comboRefs = (this as any).comboRefs.bind(this);
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={(this as any).comboRefs} placeholder="Choose City..." disabled={true} valueKey="Name"  displayKey="Name" name={comboId} singleSelect={true}>
                </IgrCombo>
            </div>
        </>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<!-- ComponentEnd: Grid -->

## Setup

In order enable column editing, make sure [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) property is set to `true`.

Once the column editing is enabled, you can start by adding your [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html). Please note that here in order to have only one single selection available, you will need to use set the [`singleSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#singleSelect) property.

To get started with the [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html), first you need to import it:

```tsx
import { IgrCombo } from 'igniteui-react';
```

Then you should define the column template with the combo:

```tsx
   <IgrColumn
    field="Country"
    header="Country"
    bodyTemplate={webGridCountryDropDownTemplate}>
    </IgrColumn>
```

```tsx
    const webGridCountryDropDownTemplate = (ctx: IgrCellTemplateContext) => {
        const rowId = ctx.cell?.id.rowID;
        if (!rowId) return <></>;
        const comboId = `country_${rowId}`;

        return (
        <>
            <IgrCombo
                data={countries}
                ref={getComboRef(comboId)}
                onChange={(event: CustomEvent) => { onCountryChange(rowId, event) }}
                placeholder="Choose Country..."
                valueKey="Country"
                displayKey="Country"
                singleSelect={true}
                name={comboId}>
            </IgrCombo>
        </>
        );
    }
```

- [`displayKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#displayKey) - Required for object arrays - Specifies which property will be used for the items' text. If no value is specified for [`displayKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#displayKey), the  combo will use the specified [`valueKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#valueKey) (if any).

In order to handle the selection change, we need the `onChange` event. The emitted event arguments contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.

```tsx
    const onCountryChange = (rowId: string, event: CustomEvent) => {
        const regionCombo = getComboRef(`region_${rowId}`).current;
        const cityCombo = getComboRef(`city_${rowId}`).current;
        const regions = regions;
        const newValue = event.detail.newValue[0];

        if (newValue === undefined) {
            regionCombo.deselect(regionCombo.value);
            regionCombo.disabled = true;
            regionCombo.data = [];

            cityCombo.deselect(regionCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            regionCombo.disabled = false;
            regionCombo.data = regions.filter(x => x.Country === newValue);

            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        }
    }
```

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Combo drop-down list may hide behind other UI elements. | Due to the stacking order of elements in the grid the combo drop-down may hide behind other elements like header, footers etc. |

## React Grid API Members

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html)
- [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html)
