---
title: Web Components Tree Grid Multi-Column Headers - Ignite UI for Web Components
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Web Components grid and combine them into multi headers.
_keywords: Multi-Column Headers, Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/multi-column-headers
_tocName: Multi-Column Headers
_premium: true
---

# Web Components Tree Grid Multi-Column Headers Overview

The Ignite UI for Web Components Multi-Column Headers feature in Web Components Tree Grid allows you to group columns by placing them under a common multi-header. Each multi-column headers group in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) could be a representation of combinations between other groups or columns. This feature is particularly useful when dealing with large datasets where scrolling horizontally might be cumbersome.

## Web Components Tree Grid Multi-Column Headers Example

```typescript
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
                // ... 15 more items
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

<!-- WebComponents -->

```html
<igc-tree-grid primaryKey="ID" foreignKey="ParentID">
    <igc-column-group header="Contact Information">
        <igc-column field="Phone" data-type="String" sortable="true" resizable="true"></igc-column>
        <igc-column field="Fax" data-type="String" sortable="true" resizable="true"></igc-column>
        <igc-column field="PostalCode" data-type="String" sortable="true" resizable="true"></igc-column>
    </igc-column-group>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) leads to the desired result.

<!-- WebComponents -->

```html
<igc-tree-grid primary-key="ID" foreign-key="ParentID" moving="true">
    <igc-column-group pinned="false" header="General Information">
        <igc-column field="HireDate" data-type="date" sortable="true" resizable="true"></igc-column>
        <igc-column-group header="Person Details">
            <igc-column field="ID" data-type="number" resizable="true" filterable="false"></igc-column>
            <igc-column field="Title" data-type="string" sortable="true" resizable="true"></igc-column>
            <igc-column field="Age" data-type="number" sortable="true" resizable="true"></igc-column>
        </igc-column-group>
    </igc-column-group>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

Every [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).

> \[!Note]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested column groups or columns is not allowed. <br />
> Moving between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

<!-- WebComponents -->

```html
<igc-tree-grid primary-key="ID" foreign-key="ParentID" moving="true">
    <igc-column-group header="Contact Information">
        <igc-column field="Phone" data-type="String" sortable="true" resizable="true"></igc-column>
    </igc-column-group>
    <igc-column field="Name" data-type="String" sortable="true" resizable="true"></igc-column>
    <igc-column field="Title" data-type="String" sortable="true" resizable="true"></igc-column>
    <igc-column field="Age" data-type="Number" sortable="true" resizable="true"></igc-column>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

## Multi-Column Header Template

<!-- WebComponents -->

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

> \[!Note]
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
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
                // ... 15 more items
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


<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-tree-grid class="grid"></igc-tree-grid>
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
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#treeGrid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
