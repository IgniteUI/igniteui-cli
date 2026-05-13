---
title: Web Components Grid Size - Ignite UI for Web Components
_description: Learn how to apply different size capabilities to the Grid component. You can use a set of compact view options in the Ignite UI for Web Components.
_keywords:  material size, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/size
_tocName: Size
_premium: true
---

# Web Components Grid Size

The Ignite UI for Web Components Size feature in Web Components Grid allows users to control the spacing and layout of data within the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content. They can choose from three size options:

- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## Web Components Grid Size Example

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

## Usage

As you can see in the demo above, the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

```html
<igc-grid id="grid" class="gridSize">
</igc-grid>
```

And now let's see in details how each option reflects on the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component. When you switch between different size options the height of each [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) element and the corresponding paddings will be changed. Also if you want to apply custom column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width), please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width) is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width) is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width) is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

```html
<div class="size-chooser">
    <igc-property-editor-panel
    description-type="WebGrid"
    is-horizontal="true"
    is-wrapping-enabled="true"
    name="PropertyEditor"
    id="propertyEditor">
        <igc-property-editor-property-description
        name="SizeEditor"
        id="SizeEditor"
        label="Grid Size:"
        value-type="EnumValue"
        drop-down-names="Small, Medium, Large"
        drop-down-values="Small, Medium, Large">
        </igc-property-editor-property-description>
    </igc-property-editor-panel>
</div>
```

Now we can add the markup.

```html
<igc-grid id="grid" width="100%" height="550px" allow-filtering="true">
    <igc-column-group  header="Customer Information">
    <igc-column field="CustomerName" header="Customer Name" data-type="String" sortable="true" has-summary="true">
    </igc-column>
    <igc-column-group  header="Customer Address">
        <igc-column field="Country" header="Country" data-type="String" sortable="true" has-summary="true">
        </igc-column>
        <igc-column field="City" header="City" data-type="String" sortable="true" has-summary="true">
        </igc-column>
        <igc-column field="Address" header="Address" data-type="String" sortable="true" has-summary="true">
        </igc-column>
        <igc-column field="PostalCode" header="Postal Code" data-type="String" sortable="true" has-summary="true">
        </igc-column>
    </igc-column-group>
    </igc-column-group>
    <igc-column field="Salesperson" header="Sales Person" data-type="String" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ShipperName" header="Shipper Name"  data-type="String" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="OrderDate" header="Order Date"  data-type="Date" sortable="true" has-summary="true">
    </igc-column>
    <igc-column-group  header="Product Details">
        <igc-column field="ProductID" header="ID" data-type="String" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="ProductName" header="Name" data-type="String" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="UnitPrice" header="Unit Price" data-type="Number" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="Quantity" header="Quantity" data-type="Number" sortable="true" has-summary="true" filterable="false">
        </igc-column>
        <igc-column field="Discontinued" header="Discontinued" data-type="Boolean" sortable="true" has-summary="true" >
        </igc-column>
    </igc-column-group>
    <igc-column-group  header="Shipping Information">
        <igc-column field="ShipName" header="Name" data-type="String" sortable="true" has-summary="true" >
        </igc-column>
        <igc-column-group  header="Shipping Address">
            <igc-column field="ShipCountry" header="Country" data-type="String" sortable="true" has-summary="true" >
            </igc-column>
            <igc-column field="ShipCity" header="City" data-type="String" sortable="true" has-summary="true" >
            </igc-column>
            <igc-column field="ShipPostalCode" header="Postal Code" data-type="String" sortable="true" has-summary="true" >
            </igc-column>
        </igc-column-group>
    </igx-column-group>
</igx-grid>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the size:

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```ts
constructor() {
    var propertyEditor = this.propertyEditor = document.getElementById('PropertyEditor') as IgcPropertyEditorPanelComponent;
    var sizeEditor = this.sizeEditor = document.getElementById('SizeEditor') as IgcPropertyEditorPropertyDescriptionComponent;
    var grid = this.grid = document.getElementById('grid') as IgcGrid;
    propertyEditor.componentRenderer = this.renderer;
    propertyEditor.target = this.grid;
    this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
    sizeEditor.changed = this.webGridSetGridSize;
    grid.data = this.data;
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

public webGridSetGridSize(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
    var newVal = (args.newValue as string).toLowerCase();
    var grid = document.getElementById("grid");
    grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
}
```

Another option that [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) provides for you, in order to be able to change the height of the rows in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), is the property [`rowHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowHeight). So let's see in action how this property affects the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is [`rowHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowHeight) specified**.
- `--ig-size` will **affect all of the rest elements in the Grid**, as it has been described above.

We can now extend our sample and add [`rowHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowHeight) property to the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html):

```html
<igc-grid id="grid" class="gridSize" row-height="80px" width="100%" height="550px" allow-filtering="true">
</igc-grid>
```

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

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

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
