---
title: React Grid Column Hiding - Ignite UI for React
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-hiding
_tocName: Column Hiding
_premium: true
---

# React Grid Column Hiding

The Ignite UI for React has a built-in column hiding UI, which can be used through the React Grid toolbar to change the visible state of the columns. Developers have the flexibility to define the Column Hiding UI anywhere within the page as needed. The React Grid Column Hiding feature is especially useful when one wants to decrease the size of the grid and to eliminate the need for tabbing through redundant fields.

## React Grid Column Hiding Example

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                // ... 24 more items
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
import { IgrGrid, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
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
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnWidth="200px"
                    allowFiltering={true}
                    columnSelection="single">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Grid Setup

Let's start by creating our [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) and binding it to our data. We will also enable both filtering and sorting for the columns.

```tsx
<IgrGrid autoGenerate={false} data={customersData} width="100%" height="560px" allowFiltering={true}>
    <IgrColumn field="ID" dataType="string" sortable={true} hidden={true}></IgrColumn>
    <IgrColumn field="ContactName" dataType="string" sortable={true} hidden={true}></IgrColumn>
    <IgrColumn field="ContactTitle" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="City" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="CompanyName" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="Fax" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="Address" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="PostalCode" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="Country" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="Phone" dataType="string" sortable={true}></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an `DropDown` in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html) and the [`IgrGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarhiding.html) inside of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

```tsx
<IgrGrid>
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarHiding></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

<!-- Web Components -->

<!-- end: Web Components -->

<!-- Web Components -->

<!-- end: Web Components -->

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the [`title`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#title) property, we will set the title that is displayed inside the dropdown button in the toolbar.

```tsx
<IgrGrid>
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarHiding title="Column Hiding"></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

<!-- Web Components -->

<!-- end: Web Components -->

<!-- Web Components -->

<!-- end: Web Components -->

You can see the result of the code from above at the beginning of this article in the React Column Hiding Example section.

### Disable hiding of a column

We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disableHiding) property to true.

```tsx
<IgrGrid>
    <IgrColumn field="ContactName" dataType="string" sortable={true} disableHiding={true}></IgrColumn>
    <IgrColumn field="ContactTitle" dataType="string" sortable={true} disableHiding={true}></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

## Styling

The grid could be further customized by setting some of the available [CSS variables](../theming-grid.md).
In order to achieve that, we will use a class that we will first assign to the grid:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

<!-- ComponentEnd: Grid -->

Then set the related CSS variables for the related components. We will apply the styles also only on the `igx-column-actions`, so the rest of the grid is unaffected:

<!-- ComponentStart: Grid -->

```css
.grid  igx-column-actions {
    /* Main Column Actions styles */
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;

    /* Checkbox styles */
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-fill-color: #ffcd0f;

    /* Input styles */
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;

    /* Buttons styles */
    --ig-button-foreground: #292826;
    --ig-button-background: #ffcd0f;
    --ig-button-hover-background: #404040;
    --ig-button-hover-foreground: #ffcd0f;
    --ig-button-focus-background: #ffcd0f;
    --ig-button-focus-foreground: black;
    --ig-button-focus-visible-background: #ffcd0f;
    --ig-button-focus-visible-foreground: black;
    --ig-button-disabled-foreground: #ffcd0f;
}
```

<!-- ComponentEnd: Grid -->

### Demo

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                // ... 24 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    .grid igc-grid-toolbar-actions, igx-column-actions {
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-label-color-hover: #c5a11b;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-focus-outline-color: #c5a11b;
    --ig-checkbox-empty-fill-color: #292826;
    --ig-checkbox-fill-color: #ffcd0f;
    --ig-checkbox-fill-color-hover: #c5a11b;
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;
    --ig-flat-button-foreground: #292826;
    --ig-flat-button-background: #ffcd0f;
    --ig-flat-button-hover-background: #404040;
    --ig-flat-button-hover-foreground: #ffcd0f;
    --ig-flat-button-focus-background: #ffcd0f;
    --ig-flat-button-focus-foreground: black;
    --ig-flat-button-focus-visible-background: #ffcd0f;
    --ig-flat-button-focus-visible-foreground: black;
    --ig-flat-button-disabled-foreground: #ffcd0f;
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
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
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnWidth="200px"
                    allowFiltering={true}
                    columnSelection="single">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        dataType="string"
                        hidden={true}
                        disableHiding={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="string"
                        sortable={true}
                        disableHiding={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        dataType="string"
                        sortable={true}
                        disableHiding={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        dataType="string"
                        sortable={true}
                        disableHiding={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
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

In this article we learned how to use the built-in column hiding UI in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s toolbar. The column hiding UI has a few more APIs to explore, which are listed below.

- `ColumnActionsComponent`

Additional components with relative APIs that were used:

[`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) properties:

- [`disableHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disableHiding)

[`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html) properties:

- `showProgress`

[`IgrGridToolbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbar.html) methods:

- [`IgrGridToolbarHiding`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarhiding.html)
- [`IgrGridToolbarActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbaractions.html)
- [`IgrGridToolbarTitle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbartitle.html)

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) events:

- `ColumnVisibilityChanged`

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
