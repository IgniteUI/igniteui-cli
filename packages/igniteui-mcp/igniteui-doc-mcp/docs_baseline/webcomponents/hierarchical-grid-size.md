---
title: Web Components Hierarchical Grid Size - Ignite UI for Web Components
_description: Learn how to apply different size capabilities to the Hierarchical Grid component. You can use a set of compact view options in the Ignite UI for Web Components.
_keywords:  material size, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/size
_tocName: Size
_premium: true
---

# Web Components Hierarchical Grid Size

The Ignite UI for Web Components Size feature in Web Components Hierarchical Grid allows users to control the spacing and layout of data within the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html). By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content. They can choose from three size options:

- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## Web Components Hierarchical Grid Size Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Usage

As you can see in the demo above, the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

```html
<igc-hierarchical-grid id="grid" class="gridSize">
</igc-hierarchical-grid>
```

And now let's see in details how each option reflects on the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) component. When you switch between different size options the height of each [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) element and the corresponding paddings will be changed. Also if you want to apply custom column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width), please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width) is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width) is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#width) is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

```html
<div class="size-chooser">
    <igc-property-editor-panel
    description-type="WebHierarchicalGrid"
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

<!-- ComponentEnd: HierarchicalGrid -->

Now we can add the markup.

```html
<igc-hierarchical-grid id="grid" height="600px" width="100%" allow-filtering="true">
    <igc-column field="CustomerID"></igc-column>
    <igc-column field="CompanyName"></igc-column>
    <igc-column field="ContactName"></igc-column>
    <igc-column field="ContactTitle"></igc-column>
    <igc-column field="Address"></igc-column>
    <igc-column field="City"></igc-column>
    <igc-column field="PostalCode"></igc-column>
    <igc-column field="Country"></igc-column>
    <igc-column field="Phone"></igc-column>
    <igc-column field="Fax"></igc-column>

    <igc-row-island key="Orders" auto-generate="false" >
            <igc-column field="OrderID"></igc-column>
            <igc-column field="EmployeeID"></igc-column>
            <igc-column field="OrderDate"></igc-column>
            <igc-column field="RequiredDate"></igc-column>
            <igc-column field="ShippedDate"></igc-column>
            <igc-column field="ShipVia"></igc-column>
            <igc-column field="Freight"></igc-column>
            <igc-column field="ShipName"></igc-column>
            <igc-column field="ShipAddress"></igc-column>
            <igc-column field="ShipCity"></igc-column>
            <igc-column field="ShipPostalCode"></igc-column>
            <igc-column field="ShipCountry"></igc-column>

        <igc-row-island key="OrderDetails" auto-generate="false">
                <igc-column field="ProductID"></igc-column>
                <igc-column field="UnitPrice"></igc-column>
                <igc-column field="Quantity"></igc-column>
                <igc-column field="Discount"></igc-column>
        </igc-row-island>
    </igc-row-island>

</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the size:

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```ts
constructor() {
    var propertyEditor = this.propertyEditor = document.getElementById('PropertyEditor') as IgcPropertyEditorPanelComponent;
    var sizeEditor = this.sizeEditor = document.getElementById('SizeEditor') as IgcPropertyEditorPropertyDescriptionComponent;
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGrid;
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

Another option that [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) provides for you, in order to be able to change the height of the rows in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), is the property [`rowHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowHeight). So let's see in action how this property affects the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is [`rowHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowHeight) specified**.
- `--ig-size` will **affect all of the rest elements in the Hierarchical Grid**, as it has been described above.

We can now extend our sample and add [`rowHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowHeight) property to the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html):

```html
<igc-hierarchical-grid id="grid" class="gridSize" row-height="80px" width="100%" height="550px" allow-filtering="true">
</igc-hierarchical-grid>
```

## API References

- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
