---
title: Web Components Grid Multi-Column Headers - Ignite UI for Web Components
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Web Components grid and combine them into multi headers.
_keywords: Multi-Column Headers, Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# Web Components Grid Multi-Column Headers Overview

The Ignite UI for Web Components Multi-Column Headers feature in Web Components Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## Web Components Grid Multi-Column Headers Example

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

The declaration of multi-column headers is achieved by wrapping a set of columns into an [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) component with [`header`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#header) title information passed.

```html
<igc-grid allow-filtering="true">
    <igc-column-group header="Contact Information">
        <igc-column sortable="true" resizable="true" field="Phone"></igc-column>
        <igc-column sortable="true" resizable="true" field="Fax"></igc-column>
        <igc-column sortable="true" resizable="true" field="PostalCode"></igc-column>
    </igc-column-group>
</igc-grid>
```

<!-- ComponentEnd: Grid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) leads to the desired result.

```html
<igc-grid height="600px" allow-filtering="true">
    <igc-column-group header="General Information">
        <igc-column movable="true" sortable="true" resizable="true" field="CompanyName"></igc-column>
        <igc-column-group movable="true" header="Person Details">
            <igc-column movable="true" pinned="false" sortable="true" resizable="true" field="ContactName"></igc-column>
            <igc-column movable="true" sortable="true" resizable="true" field="ContactTitle"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-grid>
```

<!-- ComponentEnd: Grid -->

Every [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> [!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

```html
<igc-grid height="600px" allow-filtering="true">
    <igc-column-group  movable="true" pinned="true" header="General Information">
        <igc-column movable="true" sortable="true" resizable="true" field="CompanyName"></igc-column>
    </igc-column-group>
    <igc-column sortable="true" resizable="true" field="Phone"></igc-column>
    <igc-column sortable="true" resizable="true" field="Fax"></igc-column>
    <igc-column sortable="true" resizable="true" field="PostalCode"></igc-column>
</igc-grid>
```

<!-- ComponentEnd: Grid -->

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

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-grid class="grid"></igc-grid>
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
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Grid Overview](../data-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Group by](groupby.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
