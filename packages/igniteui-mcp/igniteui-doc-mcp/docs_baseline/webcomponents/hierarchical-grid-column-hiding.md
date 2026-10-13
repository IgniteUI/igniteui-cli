---
title: "Web Components Hierarchical Grid Column Hiding - Ignite UI for Web Components"
description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
keywords: "Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/column-hiding"
llms:
  description: "Ignite UI for Web Components IgcHierarchicalGrid provides a ColumnActionsComponent with a ColumnHidingDirective which allows users to perform column hiding directly through the user interface or by using the Web Components component."
_componentKey: HierarchicalGrid
_tocName: Column Hiding
_premium: true
---
# Web Components Hierarchical Grid Column Hiding

The Ignite UI for Web Components has a built-in column hiding UI, which can be used through the Web Components Hierarchical Grid toolbar to change the visible state of the columns. Developers have the flexibility to define the Column Hiding UI anywhere within the page as needed. The Web Components Hierarchical Grid Column Hiding feature is especially useful when one wants to decrease the size of the grid and to eliminate the need for tabbing through redundant fields.

## Web Components Hierarchical Grid Column Hiding Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Hierarchical Grid Setup

Let's start by creating our [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) and binding it to our data. We will also enable both filtering and sorting for the columns.

```html
<igc-hierarchical-grid auto-generate="false" primary-key="ID" allow-filtering="true" name="hierarchicalGrid1" id="hierarchicalGrid1">
    <igc-column field="Artist" header="Artist" data-type="string" sortable="true"></igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"></igc-column>
    <igc-column field="Debut" header="Debut" data-type="number" hidden="true"></igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" sortable="true" hidden="true"></igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" sortable="true"> </igc-column>
</igc-hierarchical-grid>
```

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an [`IgcDropdown`](mcp:get_api_reference?platform=webcomponents&component=IgcDropdownComponent) in the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the [`IgcGridToolbarActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarActionsComponent) and the [`IgcGridToolbarHiding`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarHidingComponent) inside of the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent).

The [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the [`Title`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarHidingComponent&member=title) and [`Prompt`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarHidingComponent&member=prompt) properties, we will set the title and filter prompt that are displayed inside the dropdown in the toolbar.

You can see the result of the code from above at the beginning of this article in the Web Components Column Hiding Example section.

### Disable hiding of a column
We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=disableHiding) property to true.

```html
<igc-hierarchical-grid>
    <igc-column field="Artist" data-type="string" sortable="true" disable-hiding="true"></igc-column>
    <igc-column field="GrammyAwards" data-type="string" sortable="true" disable-hiding="true"></igc-column>

    <igc-row-island>
        <igc-column field="Album" data-type="string" sortable="true" disable-hiding="true"></igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

## Styling

The grid could be further customized by setting some of the available [CSS variables](../grid/theming-grid.md).
In order to achieve that, we will use a class that we will first assign to the grid:

```html
<igc-hierarchical-grid class="hierarchical-grid"></igc-hierarchical-grid>
```

Then set the related CSS variables for the related components. We will apply the styles also only on the `igx-column-actions`, so the rest of the grid is unaffected:

```css
.hierarchical-grid {
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

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
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
[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
[`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent)
[`IgcGridToolbar`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarComponent)
[`IgcGridToolbarHiding`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarHidingComponent)
[`IgcGridToolbarActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarActionsComponent)
[`IgcGridToolbarTitle`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarTitleComponent)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
