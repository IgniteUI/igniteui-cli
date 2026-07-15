---
title: Web Components Hierarchical Grid Row Selection - Ignite UI for Web Components
_description: Perform data manipulation without affecting the underlying data with Hierarchical Grid Batch Editing, using Web Components Hierarchical Grid. See demos & examples!
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "RowSelectorTemplateDetails", "HeadSelectorTemplateDetails", "Checkbox"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-selection
_tocName: Row Selection
_premium: true
---

# Web Components Hierarchical Grid Row Selection

The Ignite UI for Web Components Row Selection feature in Web Components Hierarchical Grid allows users to interactively select, highlight, or deselect a single or multiple rows of data. There are several selection modes available in the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent):

- None Selection
- Multiple Selection
- Single Selection

## Web Components Row Selection Example

<!-- ComponentStart: Grid, HierarchicalGrid -->

The sample below demonstrates the three types of [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)'s **row selection** behavior. Use the drop-down below to enable each of the available selection modes. Use the checkbox to _hide_ or _show_ the row selector checkboxes.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Setup

In order to setup row selection in the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent), you just need to set the [`rowSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=rowSelection) property. This property accepts `GridSelectionMode` enumeration.

`GridSelectionMode` exposes the following modes:

- **None**
- **Single**
- **Multiple**

Below we will take a look at each of them in more detail.

### None Selection

In the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) by default row selection is disabled ([`rowSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=rowSelection) is None). So you can **not** select or deselect a row through interaction with the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set [`rowSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=rowSelection) to `Single` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the <kbd>SPACE</kbd> key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected `RowSelectionChanging` event is emitted.

```html
<igc-hierarchical-grid id="grid" row-selection="Single" auto-generate="true"
        allow-filtering="true">
</igc-hierarchical-grid>
```

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.addEventListener("rowSelectionChanging", this.handleRowSelection);
}
```

```ts
public handleRowSelection(args: IgcRowSelectionEventArgs) {
    if (args.detail.added.length && args.detail.added[0] === 3) {
        args.detail.cancel = true;
    }
}
```

### Multiple Selection

To enable multiple row selection in the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) just set the [`rowSelection`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=rowSelection) property to `Multiple`. This will enable a row selector field on each row and in the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the <kbd>SPACE</kbd> key when a cell is focused. If you have selected one row and click on another while holding the <kbd>SHIFT</kbd> key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you **click** while holding the <kbd>CTRL</kbd> key, the row will be toggled and the previous selection will be preserved.

```html
<igc-hierarchical-grid id="grid" primary-key="ProductID" row-selection="Multiple"
        allow-filtering="true" auto-generate="true">
</igc-hierarchical-grid>
```

**Notes**

<!-- ComponentStart: Grid, HierarchicalGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

- Row selection will trigger `RowSelectionChanging` event. This event gives you information about the **new selection**, **old selection**, the rows that have been **added** and **removed** from the old selection. Also the event is **cancellable**, so this allows you to prevent selection.
- When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set [`hideRowSelectors`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=hideRowSelectors) to **true**.
- When you switch between row selection modes at runtime, this will clear the previous row selection state.

## API usage

### Select Rows Programmatically

The code snippet below can be used to select one or multiple rows simultaneously (via [`primaryKey`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=primaryKey)). Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```html
<igc-hierarchical-grid id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</igc-hierarchical-grid>

<button id='select'>Select 1,2 and 5</button>
```

```ts
constructor() {
    document.getElementById("select").addEventListener("click", this.onClickSelect);
}
public onClickSelect() {
    const grid = document.getElementById("grid") as IgcHierarchicalGridComponent;
    grid.selectRows([1,2,5], true);
}
```

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) selection.

### Deselect Rows

If you need to deselect rows programmatically, you can use the [`deselectRows`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=deselectRows) method.

```html
<igc-hierarchical-grid id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</igc-hierarchical-grid>

<button id='deselect'>DeSelect</button>
```

```ts
constructor() {
    document.getElementById("deselect").addEventListener("click", this.onClickDeselect);
}
public onClickDeselect() {
    const grid = document.getElementById("grid") as IgcHierarchicalGridComponent;
    grid.deselectRows([1,2,5]);
}
```

### Row Selection Event

When there is some change in the row selection `RowSelectionChanging` event is emitted. `RowSelectionChanging` exposes the following arguments:

- `OldSelection`  - array of row IDs that contains the previous state of the row selection.
- `NewSelection` - array of row IDs that match the new state of the row selection.
- `Added` - array of row IDs that are currently added to the selection.
- `Removed` - array of row IDs that are currently removed according old selection state.
- `Event` - the original event that triggered row selection change.
- `Cancel` - allows you the prevent the row selection change.

<!-- ComponentStart: HierarchicalGrid -->

- `Owner` - if the event is triggered from a child grid, this will give you a reference to the component, from which the event is emitted.

<!-- ComponentEnd: HierarchicalGrid -->

```html
<igc-hierarchical-grid id="grid">
</igc-hierarchical-grid>
```

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.addEventListener("rowSelectionChanging", this.handleRowSelectionChange);
}

public handleRowSelectionChange(args) {
    args.detail.cancel = true; // this will cancel the row selection
}
```

### Select All Rows

Another useful API method that [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) provides is [`selectAllRows`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=selectAllRows). By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. If you call the method with **false** parameter, `SelectAllRows(false)` will always select all data in the grid, even if filtering is applied.

> **Note** Keep in mind that [`selectAllRows`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=selectAllRows) will not select the rows that are deleted.

### Deselect All Rows

[`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) provides a [`deselectAllRows`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=deselectAllRows) method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. If you call the method with **false** parameter, `DeselectAllRows(false)` will always clear all row selection state even if filtering is applied.

### How to get Selected Rows

If you need to see which rows are currently selected, you can get their row IDs with the [`selectedRows`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=selectedRows) getter.

```ts
public getSelectedRows() {
    const grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    const currentSelection = grid.selectedRows; // return array of row IDs
}
```

Additionally, assigning row IDs to [`selectedRows`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=selectedRows) will allow you to change the grid's selection state.

```ts
public mySelectedRows = [1, 2, 3]; // an array of row IDs
constructor() {
    const grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.selectedRows = this.mySelectedRows;
}
```

### Row Selector Templates

You can template header and row selectors in the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) and also access their contexts which provide useful functionality for different scenarios.

By default, the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [RowSelectionChanging event](#row-selection-event). In case you implement a custom template with a [`click`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=click) handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row Template

To create a custom row selector template,  within the `igc-hierarchical-grid` you can use the [`rowSelectorTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=rowSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

The [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcRowSelectorTemplateDetails&member=selected) property shows whether the current row is selected or not while the [`index`](mcp:get_api_reference?platform=webcomponents&component=IgcRowSelectorTemplateDetails&member=index) property can be used to access the row index.

```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    if (ctx.implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
            <span> ${ctx.implicit.index}</span>
            <igc-checkbox checked></igc-checkbox>
            </div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
            <span> ${ctx.implicit.index}</span>
            <igc-checkbox></igc-checkbox>
            </div>`;
    }
}
```

The [`rowID`](mcp:get_api_reference?platform=webcomponents&component=IgcRowSelectorTemplateDetails&member=rowID) property can be used to get a reference of an `igc-hierarchical-grid` row. This is useful when you implement a `click` handler on the row selector element.

```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    return html`
        <igc-checkbox
            @click="${(event: any) => {
            this.onSelectorClick(event, ctx.implicit.key);
            }}"
        ></igc-checkbox>
    `;
}
```

In the above example we are using an [`IgcCheckboxComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) and we bind `rowContext.selected` to its [`checked`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=checked) property. See this in action in our [Row Numbering Demo](#row-numbering-demo).

<!-- ComponentStart: HierarchicalGrid -->

> [!Note]
> The `rowContext.select()` and `rowContext.deselect()` methods are exposed in the template context of an `igc-hierarchical-grid`. They make it easier to toggle the current row, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

### Header Template

To create a custom header selector template, within the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent), you can use the [`headSelectorTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=headSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The [`selectedCount`](mcp:get_api_reference?platform=webcomponents&component=IgcHeadSelectorTemplateDetails&member=selectedCount) property shows you how many rows are currently selected while [`totalCount`](mcp:get_api_reference?platform=webcomponents&component=IgcHeadSelectorTemplateDetails&member=totalCount) shows you how many rows there are in the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) in total.

```ts
public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    return html` ${ctx.implicit.selectedCount} / ${ctx.implicit.totalCount} `;
};
```

The [`selectedCount`](mcp:get_api_reference?platform=webcomponents&component=IgcHeadSelectorTemplateDetails&member=selectedCount) and [`totalCount`](mcp:get_api_reference?platform=webcomponents&component=IgcHeadSelectorTemplateDetails&member=totalCount) properties can be used to determine if the head selector should be checked or indeterminate (partially selected).

```html
<igc-hierarchical-grid id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</igc-hierarchical-grid>
```

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.headSelectorTemplate = this.headSelectorTemplate;
}

public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    const implicit: any = ctx.implicit;
    if (implicit.selectedCount > 0 && implicit.selectedCount === implicit.totalCount) {
            return html`<igc-checkbox checked></igc-checkbox>`;
        } else if (implicit.selectedCount > 0 && implicit.selectedCount !== implicit.totalCount) {
            return html`<igc-checkbox indeterminate></igc-checkbox>`;
        }
        return html`<igc-checkbox></igc-checkbox>`;
}
```

<!-- ComponentStart: HierarchicalGrid -->

Each hierarchy level in an `igc-hierarchical-grid` can have its own row and header templating.

> [!Note]
> The `headContext.selectAll()` and `headContext.deselectAll()` methods are exposed in the template context of an `igc-hierarchical-grid`. They make it easier to toggle all rows, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses [`index`](mcp:get_api_reference?platform=webcomponents&component=IgcRowSelectorTemplateDetails&member=index) to display row numbers and an [`IgcCheckboxComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) bound to [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcRowSelectorTemplateDetails&member=selected).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Conditional Selection Demo

This demo prevents some rows from being selected using the `RowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## API References

- [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
- `HierarchicalGridRow`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
