---
title: Web Components Hierarchical Grid Multi-Column Headers - Ignite UI for Web Components
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Web Components grid and combine them into multi headers.
_keywords: Multi-Column Headers, Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# Web Components Hierarchical Grid Multi-Column Headers Overview

The Ignite UI for Web Components Multi-Column Headers feature in Web Components Hierarchical Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## Web Components Hierarchical Grid Multi-Column Headers Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The declaration of multi-column headers is achieved by wrapping a set of columns into an [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) component with [`header`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#header) title information passed.

```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" moving="true" allow-filtering="true">
    <igc-column field="CustomerID" sortable="true" resizable="true"> </igc-column>
    <igc-column-group header="Address Information">
        <igc-column-group header="Location">
            <igc-column field="Address" sortable="true" resizable="true"></igc-column>
            <igc-column field="City" sortable="true" resizable="true"></igc-column>
            <igc-column field="PostalCode" sortable="true" resizable="true"></igc-column>
            <igc-column field="Country" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
        <igc-column-group header="Contact Information">
            <igc-column field="Phone" sortable="true" resizable="true"></igc-column>
            <igc-column field="Fax" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) leads to the desired result.

```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" moving="true" allow-filtering="true">
    <igc-column field="CustomerID" dataType="string" sortable="true" resizable="true"> </igc-column>
    <igc-column-group header="General Information">
        <igc-column field="CompanyName" dataType="string" sortable="true" resizable="true"></igc-column>
        <igc-column-group header="Person Details">
            <igc-column field="ContactName" dataType="string" sortable="true" resizable="true"></igc-column>
            <igc-column field="ContactTitle" dataType="string" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

Every [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> [!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" moving="true" allow-filtering="true">
    <igc-column field="CustomerID" dataType="string" movable="true" pinned="true" sortable="true" resizable="true"> </igc-column>
    <igc-column-group movable="true" pinned="true" header="General Information">
        <igc-column field="CompanyName" dataType="string" sortable="true" resizable="true"></igc-column>
        <igc-column-group header="Person Details">
            <igc-column field="ContactName" dataType="string" sortable="true" resizable="true"></igc-column>
            <igc-column field="ContactTitle" dataType="string" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

## Multi-Column Header Template

Each of the column groups of the grid can be templated separately. The following code snippet demonstrates how to use the [`headerTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#headerTemplate) of a column group:

```html
<igc-column-group id="addressInfo" header="Address Information">
</igc-column-group>
```

```ts
constructor() {
    var addresss = this.addresss = document.getElementById('addressInfo') as IgcColumnGroupComponent;
    addresss.headerTemplate = this.columnGroupHeaderTemplate;
}

public columnGroupHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        ${ctx.column.header.toUpperCase()}
    `;
}
```

If you want to re-use a single template for several column groups, you could set the [`headerTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#headerTemplate) property of the column group like this:

```html
<igc-column-group id="generalInfo" header="General Information">
</igc-column-group>
<igc-column-group id="addressInfo" header="Address Information">
</igc-column-group>
```

```ts
constructor() {
    var general = this.general = document.getElementById('generalInfo') as IgcColumnGroupComponent;
    var addresss = this.address = document.getElementById('addressInfo') as IgcColumnGroupComponent;
    general.headerTemplate = this.columnGroupHeaderTemplate;
    addresss.headerTemplate = this.columnGroupHeaderTemplate;
}

public columnGroupHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        ${ctx.column.header.toUpperCase()}
    `;
}
```

> [!Note]
> If a header is re-templated and the corresponding column group is movable, you have to set the **draggable** attribute to **false** on the templated elements, so that you can handle any of the events that are applied!

```ts
public columnHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        <igc-icon draggable="false" @click="${() => this.onClick()}"></igc-icon>
    `;
}
```

The following sample demonstrates how to implement collapsible column groups using header templates.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-hierarchical-grid class="grid"></igc-hierarchical-grid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```

## API References

- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
