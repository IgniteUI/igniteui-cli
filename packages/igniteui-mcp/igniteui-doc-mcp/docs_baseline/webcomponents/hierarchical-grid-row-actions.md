---
title:  Row actions in Web Components Hierarchical Grid - Infragistics
_description: The IgcHierarchicalGrid provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-actions
_tocName: Row Actions
_premium: true
---

# Row Actions in Web Components Hierarchical Grid

The Ignite UI for Web Components Row Actions feature in Web Components Hierarchical Grid enables developers to use an [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) and utilize CRUD for row/cell components and row pinning. There are several predefined UI controls for these operations that are applicable to a specific row in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) – editing and pinning.

## Usage

The predefined actions UI components are:

- [`IgcGridEditingActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgrideditingactions.html) - includes functionality and UI specifically designed for the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`rowEditable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowEditable) option and row deletion of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html).

- [`IgcGridPinningActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridpinningactions.html) - includes functionality and UI specifically designed for the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) and this is all needed to have an [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) providing default interactions.

<!-- ComponentEnd: HierarchicalGrid -->

```html
<igc-grid row-editable="true" primary-key="ID">
    <igc-column field="field"></igc-column>
    <igc-action-strip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</igc-grid>
```

<!-- ComponentStart: HierarchicalGrid -->

```html
<igc-hierarchical-grid row-editable="true" primary-key="ID">
    <igc-column field="field"></igc-column>
    <igc-action-strip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> When `ActionStripComponent` is a child component of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html).

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igc-hierarchical-grid>
    <igc-action-strip #actionstrip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions edit-row="true" delete-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcGridPinningActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridpinningactions.html)
- [`IgcGridEditingActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgrideditingactions.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
