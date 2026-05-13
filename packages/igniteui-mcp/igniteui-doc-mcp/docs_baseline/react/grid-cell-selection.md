---
title: React Grid Cell Selection - Ignite UI for React
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Grid supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for React, infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-selection
_tocName: Cell Selection
_premium: true
---

# React Grid Cell Selection

The Ignite UI for React Cell Selection in React Grid enables rich data select capabilities and offers powerful API in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component. The React Grid supports three selection modes:

- Grid Multiple Cell Selection
- Grid Single Selection
- Grid None Selection

Let's dive deeper into each of these options.

## React Grid Cell Selection Example

The sample below demonstrates the three types of [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.

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
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private cellSelectionEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="CellSelection"
                        name="CellSelectionEditor"
                        valueType="EnumValue"
                        dropDownNames={["None", "Single", "Multiple"]}
                        dropDownValues={["NOne", "Single", "Multiple"]}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.nwindData}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Units Price"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        dataType="boolean">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date">
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

## Selection Types

### Grid Multiple-Cell Selection

How to select cells:

- By **Mouse drag** - Rectangular data selection of cells would be performed.
- By <kbd>CTRL</kbd> key press + **Mouse drag** - Multiple range selections would be performed. Any other existing cell selection will be persisted.
- Instant multi-cell selection by using <kbd>SHIFT</kbd> key. Select single cell and select another single cell by holding the <kbd>SHIFT</kbd> key. Cell range between the two cells will be selected. Keep in mind that if another second cell is selected while holding <kbd>SHIFT</kbd> key the cell selection range will be updated based on the first selected cell position (starting point).
- Keyboard multi-cell selection by using the <kbd>Arrow</kbd> keys while holding <kbd>SHIFT</kbd> key. Multi-cell selection range will be created based on the focused cell.
- Keyboard multi-cell selection by using the <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>  keys and <kbd>CTRL</kbd> + <kbd>HOME</kbd>/<kbd>END</kbd> while holding <kbd>SHIFT</kbd> key. Multi-cell selection range will be created based on the focused cell.
- Clicking with the **Left Mouse** key while holding <kbd>CTRL</kbd> key will add single cell ranges into the selected cells collection.
- Continuous multiple cell selection is available, by clicking with the mouse and dragging.

<!-- ComponentStart: Grid, TreeGrid -->

#### Demo

<!-- TODO sample does not load any data in Blazor -->

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor() {
        super();
        this.push(new InvoicesDataItem(
        {
            ShipName: `Jefferson Home`,
            ShipAddress: `124 Wall Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 60098,
            ShipCountry: `USA`,
            ShipRegion: `South East`,
            ShipperName: `Federal Shipping`,
            CustomerID: 1000,
            CustomerName: `Martin Jefferson`,
            CustomerFirstName: `Martin`,
            CustomerLastName: `Jefferson`,
            CustomerAddress: `124 Wall Street, Miami, USA, 60098`,
            Salesperson: `Nancy Jefferson`,
            OrderID: 1931,
            OrderDate: `3/14/2022`,
            ProductID: 189,
            ProductName: `IPad`,
            UnitPrice: 16150.61,
            Quantity: 3,
            ExtendedPrice: 48451.83,
            Freight: 980.61,
            Discontinued: false,
            Region: `South East`,
            Address: `124 Wall Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 60098
        }));
        this.push(new InvoicesDataItem(
        {
            ShipName: `Black Home`,
            ShipAddress: `162 Main Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 80193,
            ShipCountry: `USA`,
            ShipRegion: `West`,
            ShipperName: `United Package`,
            CustomerID: 1001,
            CustomerName: `Anna Black`,
            CustomerFirstName: `Anna`,
            CustomerLastName: `Black`,
            CustomerAddress: `162 Main Street, Miami, USA, 80193`,
            Salesperson: `Anna Smith`,
            OrderID: 1163,
            OrderDate: `5/22/2022`,
            ProductID: 138,
            ProductName: `Mac Book Pro`,
            UnitPrice: 18520.59,
            Quantity: 4,
            ExtendedPrice: 74082.36,
            Freight: 850.59,
            Discontinued: false,
            Region: `West`,
            Address: `162 Main Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 80193
        }));
        this.push(new InvoicesDataItem(
        {
            ShipName: `Watson Townhouse`,
            ShipAddress: `164 Wall Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 50111,
            ShipCountry: `USA`,
            ShipRegion: `West`,
            ShipperName: `United Package`,
            CustomerID: 1002,
            CustomerName: `Max Watson`,
            CustomerFirstName: `Max`,
            CustomerLastName: `Watson`,
            CustomerAddress: `164 Wall Street, Miami, USA, 50111`,
            Salesperson: `Martin Watson`,
            OrderID: 1230,
            OrderDate: `2/9/2022`,
            ProductID: 118,
            ProductName: `Mac Book Air`,
            UnitPrice: 25310.39,
            Quantity: 3,
            ExtendedPrice: 75931.17,
            Freight: 210.39,
            Discontinued: false,
            Region: `West`,
            Address: `164 Wall Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 50111
        }));
        // ... 496 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrColumn, IgrGrid, IgrGridModule, IgrGridSelectionRangeEventArgs } from 'igniteui-react-grids';
import { InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());
const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>`;

export default function App() {
    const data = new InvoicesData();
    const rightGridRef = useRef(null);

    function onGridRangeSelected(evt: IgrGridSelectionRangeEventArgs): void {
        const grid = evt.target as IgrGrid;
        rightGridRef.current.data = grid.getSelectedData(false, false);
    }

    return (
        <>
            <div className="container sample">      
                <div className="container horizontal wrapper">
                    <IgrGrid autoGenerate={false} cellSelection="multiple" data={data} onRangeSelected={onGridRangeSelected} width="40%">
                        <IgrColumn field="ProductID" header="Product ID">
                        </IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name">
                        </IgrColumn>
                        <IgrColumn field="UnitPrice" header="Unit Price">
                        </IgrColumn>
                        <IgrColumn field="Quantity">
                        </IgrColumn>
                    </IgrGrid>

                    <IgrGrid ref={rightGridRef} autoGenerate={false} width="40%">
                        <IgrColumn field="ProductID" header="Product ID">
                        </IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name">
                        </IgrColumn>
                        <IgrColumn field="UnitPrice" header="Unit Price">
                        </IgrColumn>
                        <IgrColumn field="Quantity">
                        </IgrColumn>
                    </IgrGrid>
                </div>
            </div>
        </>
        );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```

<!-- ComponentEnd: Grid, TreeGrid -->

### Grid Single Selection

When you set the [`cellSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#cellSelection) to **single**, this allows you to have only one selected cell in the grid at a time. Also the mode **mouse drag** will not work and instead of selecting a cell, this will make default text selection.

> When single cell is selected [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected) event is emitted, no matter if the **selection mode** is **single** or **multiple**. In multi-cell selection mode when you select a range of cells `RangeSelected` event is emitted.

### Grid None Selection

If you want to disable cell selection you can just set [`cellSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#cellSelection) to **none**. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the **activation style** is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.

## Keyboard Navigation Interactions

### While Shift Key is Pressed

- <kbd>SHIFT</kbd> + <kbd>↑</kbd> to add above cell to the current selection.
- <kbd>SHIFT</kbd> + <kbd>↓</kbd> to add below cell to the current selection.
- <kbd>SHIFT</kbd> + <kbd>←</kbd> to add left cell to the current selection.
- <kbd>SHIFT</kbd> + <kbd>→</kbd> to add right cell to the current selection.

### While Ctrl + Shift Keys are Pressed

- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>↑</kbd> to select all cells above the focused cell in the column.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>↓</kbd> to select all cells below the focused cell in the column.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>←</kbd> to select all cells till the start of the row.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>→</kbd> to select all cells till the end of the row.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>HOME</kbd> to select all cells from the focused cell till the first-most cell in the grid
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>END</kbd> to select all cells from the focused cell till the last-most cell in the grid

> [!Note]
> Continuous scroll is possible only within Grid's body.

## Api Usage

Below are the methods that you can use in order to select ranges, clear selection or get selected cells data.

### Select range

[`selectRange`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectRange) - Select a range of cells with the API. rowStart and rowEnd should use row indexes and columnStart and columnEnd could use column index or column data field value.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const range: IgrGridSelectionRange[] = [{ rowStart: 2, rowEnd: 2, columnStart: "ProductName", columnEnd: "UnitsInStock" }];
gridRef.current.selectRange(range)
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Clear cell selection

[`clearCellSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clearCellSelection) will clear the current cell selection.

```tsx
gridRef.current.clearCellSelection();
```

### Get Selected Data

[`getSelectedData`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:

- If three different single cells are selected:

```typescript
expectedData = [
    { CompanyName: 'Infragistics' },
    { Name: 'Michael Langdon' },
    { ParentID: 147 }
];
```

- If three cells from one column are selected:

```typescript
expectedData = [
    { Address: 'Obere Str. 57'},
    { Address: 'Avda. de la Constitución 2222'},
    { Address: 'Mataderos 2312'}
];
```

- If three cells are selected with mouse drag from one row and three columns:

```typescript
expectedData = [
    { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
];
```

- If three cells are selected with mouse drag from two rows and three columns:

```typescript
expectedData = [
    { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
    { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
];
```

- If two different ranges are selected:

```typescript
expectedData = [
    { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
    { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
    { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
    { Address: 'Fauntleroy Circus', City: 'London'}
];
```

- If two overlapping ranges are selected, the format would be:

```typescript
expectedData = [
    { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
    { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
    { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
    { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
];
```

## Features Integration

The multi-cell selection is index based (DOM elements selection).

- `Sorting` - When sorting is performed selection will not be cleared. It will leave currently selected cells the same while sorting ascending or descending.
- `Paging` - On paging selected cells will be cleared. Selection wont be persisted across pages.
- `Filtering` - When filtering is performed selection will not be cleared. If filtering is cleared it will return - the initially selected cells.
- `Resizing` - On column resizing selected cells will not be cleared.
- `Hiding` - It will not clear the selected cells. If column is hidden, the cells from the next visible column will be selected.
- [`pinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#pinning) - Selected cell will not be cleared. Same as hiding
- [`groupBy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#groupBy) - On column grouping selected cells will not be cleared.

<!-- ComponentEnd: Grid, TreeGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- ComponentStart: Grid -->

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-cell-selected-text-color: #FFFFFF;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062A3;
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

#grid {
    --cell-selected-text-color: #FFFFFF;
    --cell-active-border-color: #f2c43c;
    --cell-selected-background: #0062a3;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
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
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnSelection="single">
                    <IgrColumn
                        field="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

<!-- ComponentStart: Grid, HierarchicalGrid -->

- [Selection](selection.md)
- [Row Selection](row-selection.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
