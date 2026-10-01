---
title:  Row actions in Web Components Grid - Infragistics
description: The IgcGrid provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
keywords: "Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/row-actions"
llms:
  description: "The Ignite UI for Web Components Row Actions feature in Web Components Grid enables developers to use an ActionStrip and utilize CRUD for row/cell components and row pinning."
_componentKey: Grid
_tocName: Row Actions
_premium: true
---
# Row Actions in Web Components Grid

The Ignite UI for Web Components Row Actions feature in Web Components Grid enables developers to use an [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) and utilize CRUD for row/cell components and row pinning. There are several predefined UI controls for these operations that are applicable to a specific row in the [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent) – editing and pinning.

## Usage

The predefined actions UI components are:

- [`IgcGridEditingActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditingActionsComponent) - includes functionality and UI specifically designed for the [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent) editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`IgcGrid.rowEditable`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=rowEditable) option and row deletion of the [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent).

- [`IgcGridPinningActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridPinningActionsComponent) - includes functionality and UI specifically designed for the [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent) row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent) and this is all needed to have an [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) providing default interactions.

**Note:** 
When [`IgcActionStripComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) is a child component of the [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent), hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent).

```html
<igc-grid>
    <igc-action-strip #actionstrip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions edit-row="true" delete-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</igc-grid>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## API References
[`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent)
[`IgcGridPinningActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridPinningActionsComponent)
[`IgcGridEditingActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditingActionsComponent)
