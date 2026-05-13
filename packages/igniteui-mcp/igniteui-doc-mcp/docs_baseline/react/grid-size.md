---
title: React Grid Size - Ignite UI for React
_description: Learn how to apply different size capabilities to the Grid component. You can use a set of compact view options in the Ignite UI for React.
_keywords:  material size, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/size
_tocName: Size
_premium: true
---

# React Grid Size

The Ignite UI for React Size feature in React Grid allows users to control the spacing and layout of data within the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content. They can choose from three size options:

- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## React Grid Size Example

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
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipName: `Jefferson Home`, ShipAddress: `124 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 60098, ShipCountry: `USA`, ShipRegion: `South East`, ShipperName: `Federal Shipping`, CustomerID: 1000, CustomerName: `Martin Jefferson`, CustomerFirstName: `Martin`, CustomerLastName: `Jefferson`, CustomerAddress: `124 Wall Street, Miami, USA, 60098`, Salesperson: `Nancy Jefferson`, OrderID: 1931, OrderDate: `3/14/2022`, ProductID: 189, ProductName: `IPad`, UnitPrice: 16150.61, Quantity: 3, ExtendedPrice: 48451.83, Freight: 980.61, Discontinued: false, Region: `South East`, Address: `124 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 60098 }),
                new InvoicesDataItem({ ShipName: `Black Home`, ShipAddress: `162 Main Street`, ShipCity: `Miami`, ShipPostalCode: 80193, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1001, CustomerName: `Anna Black`, CustomerFirstName: `Anna`, CustomerLastName: `Black`, CustomerAddress: `162 Main Street, Miami, USA, 80193`, Salesperson: `Anna Smith`, OrderID: 1163, OrderDate: `5/22/2022`, ProductID: 138, ProductName: `Mac Book Pro`, UnitPrice: 18520.59, Quantity: 4, ExtendedPrice: 74082.36, Freight: 850.59, Discontinued: false, Region: `West`, Address: `162 Main Street`, City: `Miami`, Country: `USA`, PostalCode: 80193 }),
                new InvoicesDataItem({ ShipName: `Watson Townhouse`, ShipAddress: `164 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 50111, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1002, CustomerName: `Max Watson`, CustomerFirstName: `Max`, CustomerLastName: `Watson`, CustomerAddress: `164 Wall Street, Miami, USA, 50111`, Salesperson: `Martin Watson`, OrderID: 1230, OrderDate: `2/9/2022`, ProductID: 118, ProductName: `Mac Book Air`, UnitPrice: 25310.39, Quantity: 3, ExtendedPrice: 75931.17, Freight: 210.39, Discontinued: false, Region: `West`, Address: `164 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 50111 }),
                // ... 496 more items
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

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
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
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
                        name="SizeEditor"
                        label="Grid Size:"
                        valueType="EnumValue"
                        dropDownNames={["Small", "Medium", "Large"]}
                        dropDownValues={["Small", "Medium", "Large"]}
                        changed={this.webGridSetGridSize}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.invoicesData}
                    allowFiltering={true}>
                    <IgrColumn
                        field="CustomerName"
                        header="Customer Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Salesperson"
                        header="Sales Person"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipperName"
                        header="Shipper Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ProductID"
                        header="ID"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        header="Quantity"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipName"
                        header="Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Country"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="City"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipPostalCode"
                        header="Postal Code"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
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

    public webGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("grid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Usage

As you can see in the demo above, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

```tsx
<IgrGrid className="gridSize"></IgrGrid>
```

And now let's see in details how each option reflects on the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component. When you switch between different size options the height of each [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) element and the corresponding paddings will be changed. Also if you want to apply custom column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width), please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

```tsx
<IgrPropertyEditorPanel
    ref={propertyEditorRef}
    componentRenderer={renderer}
    target={grid}
    descriptionType="WebGrid"
    isHorizontal={true}
    isWrappingEnabled={true}>
    <IgrPropertyEditorPropertyDescription
        name="SizeEditor"
        label="Grid Size:"
        valueType="EnumValue"
        dropDownNames={["Small", "Medium", "Large"]}
        dropDownValues={["Small", "Medium", "Large"]}
        changed={webGridSetGridSize}>
    </IgrPropertyEditorPropertyDescription>
</IgrPropertyEditorPanel>
```

Now we can add the markup.

```tsx
<IgrGrid autoGenerate={false} ref={gridRef} data={invoicesData} allowFiltering={true}>
    <IgrColumn field="CustomerName" header="Customer Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="Country" header="Country" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="City" header="City" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="Address" header="Address" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="PostalCode" header="Postal Code" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="Salesperson" header="Sales Person" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipperName" header="Shipper Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="OrderDate" header="Order Date" dataType="date" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ProductID" header="ID" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ProductName" header="Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" sortable={true} hasSummary={true} filterable={false}></IgrColumn>
    <IgrColumn field="Quantity" header="Quantity" dataType="number" sortable={true} hasSummary={true} filterable={false}></IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipName" header="Name" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipCountry" header="Country" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipCity" header="City" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
    <IgrColumn field="ShipPostalCode" header="Postal Code" dataType="string" sortable={true} hasSummary={true}></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the size:

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```tsx
private propertyEditor: IgrPropertyEditorPanel
private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
}
private sizeEditor: IgrPropertyEditorPropertyDescription
private grid: IgrGrid
private gridRef(r: IgrGrid) {
    this.grid = r;
    this.setState({});
}

constructor(props: any) {
    super(props);

    this.propertyEditorRef = this.propertyEditorRef.bind(this);
    this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
    this.gridRef = this.gridRef.bind(this);
}

private _componentRenderer: ComponentRenderer = null;
  public get renderer(): ComponentRenderer {
    if (this._componentRenderer == null) {
      this._componentRenderer = new ComponentRenderer();
      var context = this._componentRenderer.context;
      PropertyEditorPanelDescriptionModule.register(context);
      WebHierarchicalGridDescriptionModule.register(context);
    }
    return this._componentRenderer;
}

public webGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
    var newVal = (args.newValue as string).toLowerCase();
    var grid = document.getElementById("grid");
    grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
}
```

Another option that [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides for you, in order to be able to change the height of the rows in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), is the property [`rowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowHeight). So let's see in action how this property affects the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is [`rowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowHeight) specified**.
- `--ig-size` will **affect all of the rest elements in the Grid**, as it has been described above.

We can now extend our sample and add [`rowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowHeight) property to the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html):

```tsx
<IgrGrid className="gridSize" rowHeight="80px" width="100%" height="550px" allowFiltering={true}></IgrGrid>
```

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

<!-- ComponentStart: Grid -->

## Additional Resources

- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
