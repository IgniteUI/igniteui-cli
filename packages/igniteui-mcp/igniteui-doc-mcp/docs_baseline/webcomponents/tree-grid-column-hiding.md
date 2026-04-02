---
title: Web Components Tree Grid Column Hiding - Ignite UI for Web Components
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
_keywords: Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-hiding
_tocName: Column Hiding
_premium: true
---

# Web Components Tree Grid Column Hiding

The Ignite UI for Web Components has a built-in column hiding UI, which can be used through the Web Components Tree Grid toolbar to change the visible state of the columns. Developers have the flexibility to define the Column Hiding UI anywhere within the page as needed. The Web Components Tree Grid Column Hiding feature is especially useful when one wants to decrease the size of the grid and to eliminate the need for tabbing through redundant fields.

## Web Components Tree Grid Column Hiding Example

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


## Tree Grid Setup

Let's start by creating our [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) and binding it to our data. We will also enable both filtering and sorting for the columns.

```html
<igc-tree-grid id="treeGrid" auto-generate="false" width="100%" height="560px" allow-filtering="true">
    <igc-column field="Name" data-type="string" sortable="true" hidden="true"></igc-column>
    <igc-column field="ID" data-type="number" sortable="true" hidden="true"></igc-column>
    <igc-column field="Title" data-type="string" sortable="true"></igc-column>
    <igc-column field="HireDate" data-type="date" sortable="true"></igc-column>
    <igc-column field="Age" data-type="number" sortable="true"></igc-column>
    <igc-column field="Address" data-type="string" sortable="true"></igc-column>
    <igc-column field="City" data-type="string" sortable="true"></igc-column>
    <igc-column field="Country" data-type="string" sortable="true"></igc-column>
    <igc-column field="Fax" data-type="string" sortable="true"></igc-column>
    <igc-column field="PostalCode" data-type="string" sortable="true"></igc-column>
    <igc-column field="Phone" data-type="string" sortable="true"></igc-column>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an `DropDown` in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the [`IgcGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractionscomponent.html) and the [`IgcGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarhidingcomponent.html) inside of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

<!-- Web Components -->

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid>
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- end: Web Components -->

<!-- Web Components -->

<!-- end: Web Components -->

The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the [`title`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#title) property, we will set the title that is displayed inside the dropdown button in the toolbar.

<!-- Web Components -->

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid id="treeGrid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-hiding id="hidingAction" title="Column Hiding"></igc-grid-toolbar-hiding>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- end: Web Components -->

<!-- Web Components -->

<!-- end: Web Components -->

You can see the result of the code from above at the beginning of this article in the Web Components Column Hiding Example section.

### Disable hiding of a column

We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#disableHiding) property to true.

```html
<igc-tree-grid>
    <igc-column field="Name" data-type="string" sortable="true" disable-hiding="true"></igc-column>
    <igc-column field="Title" data-type="string" sortable="true" disable-hiding="true"></igc-column>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

## Styling

The grid could be further customized by setting some of the available [CSS variables](../theming-grid.md).
In order to achieve that, we will use a class that we will first assign to the grid:

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid id="treeGrid"></igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

Then set the related CSS variables for the related components. We will apply the styles also only on the `igx-column-actions`, so the rest of the grid is unaffected:

<!-- ComponentStart: TreeGrid -->

```css
.tree-grid {
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

<!-- ComponentEnd: TreeGrid -->

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


## API References

In this article we learned how to use the built-in column hiding UI in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s toolbar. The column hiding UI has a few more APIs to explore, which are listed below.

- `ColumnActionsComponent`

Additional components with relative APIs that were used:

[`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) properties:

- [`disableHiding`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#disableHiding)

[`IgcGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html) properties:

- `showProgress`

[`IgcGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarcomponent.html) methods:

- [`IgcGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarhidingcomponent.html)
- [`IgcGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbaractionscomponent.html)
- [`IgcGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbartitlecomponent.html)

[`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) events:

- `ColumnVisibilityChanged`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
