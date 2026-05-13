---
title:  Row actions in React Grid - Infragistics
_description: The IgrGrid provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-actions
_tocName: Row Actions
_premium: true
---

# Row Actions in React Grid

The Ignite UI for React Row Actions feature in React Grid enables developers to use an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) and utilize CRUD for row/cell components and row pinning. There are several predefined UI controls for these operations that are applicable to a specific row in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) – editing and pinning.

## Usage

The predefined actions UI components are:

- [`IgrGridEditingActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrideditingactions.html) - includes functionality and UI specifically designed for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) option and row deletion of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

- [`IgrGridPinningActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridpinningactions.html) - includes functionality and UI specifically designed for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) and this is all needed to have an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) providing default interactions.

<!-- ComponentStart: Grid -->

```tsx
<IgrGrid rowEditable={true} primaryKey="ID">
    <IgrColumn field="field">
    </IgrColumn>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions></IgrGridEditingActions>
    </IgrActionStrip>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> When `ActionStripComponent` is a child component of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html).

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- ComponentStart: Grid, TreeGrid -->

```tsx
<IgrGrid>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions editRow={true} deleteRow={true}></IgrGridEditingActions>
    </IgrActionStrip>
</IgrGrid>
```

<!-- ComponentEnd: Grid, TreeGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, RowPinningPosition, IgrActionStrip, IgrGridPinningActions, IgrGridEditingActions, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
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

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.nwindData}
                    rowEditable={true}
                    allowFiltering={true}
                    pinning={this.pinningConfig1}
                    primaryKey="ProductID">
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
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsOnOrder"
                        header="Units On Order">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock">
                    </IgrColumn>
                    <IgrColumn
                        field="QuantityPerUnit"
                        header="Quantity Per Unit">
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
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
