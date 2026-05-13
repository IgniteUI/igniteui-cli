---
title:  Row actions in React Hierarchical Grid - Infragistics
_description: The IgrHierarchicalGrid provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-actions
_tocName: Row Actions
_premium: true
---

# Row Actions in React Hierarchical Grid

The Ignite UI for React Row Actions feature in React Hierarchical Grid enables developers to use an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) and utilize CRUD for row/cell components and row pinning. There are several predefined UI controls for these operations that are applicable to a specific row in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) – editing and pinning.

## Usage

The predefined actions UI components are:

- [`IgrGridEditingActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditingactions.html) - includes functionality and UI specifically designed for the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) option and row deletion of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

- [`IgrGridPinningActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridpinningactions.html) - includes functionality and UI specifically designed for the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) and this is all needed to have an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) providing default interactions.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```tsx
<IgrHierarchicalGrid rowEditable={true} primaryKey="ID">
    <IgrColumn field="field">
    </IgrColumn>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions></IgrGridEditingActions>
    </IgrActionStrip>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> When `ActionStripComponent` is a child component of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html).

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```tsx
<IgrHierarchicalGrid>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions editRow={true} deleteRow={true}></IgrGridEditingActions>
    </IgrActionStrip>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, IgrActionStrip, IgrGridPinningActions, IgrGridEditingActions, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

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
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private actionStrip: IgrActionStrip
    private column: IgrColumn
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID"
                    rowEditable={true}
                    allowFiltering={true}
                    pinning={this.pinningConfig1}>
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                        <IgrGridEditingActions
                            editRow={true}
                            deleteRow={true}
                            addRow={true}>
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        sortable={true}>
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
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References

- [`IgrGridPinningActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridpinningactions.html)
- [`IgrGridEditingActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditingactions.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
