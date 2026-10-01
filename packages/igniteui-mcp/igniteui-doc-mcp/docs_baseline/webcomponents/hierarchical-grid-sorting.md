---
title: "Web Components Hierarchical Grid Sorting - Ignite UI for Web Components"
description: Get started with the Web Components sorting feature of Ignite UI for Web Components Hierarchical Grid! Configure a mix of sortable columns & change the display order of data records.
keywords: "Web Components sort, Web Components, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/sorting"
llms:
  description: "The Ignite UI for Web Components Data Sorting feature in Web Components Hierarchical Grid is enabled on a per-column level, meaning that the IgcHierarchicalGrid can have a mix of sortable and non-sortable columns."
_componentKey: HierarchicalGrid
_tocName: Sorting
_premium: true
---
# Web Components Hierarchical Grid Sorting

The Ignite UI for Web Components Data Sorting feature in Web Components Hierarchical Grid is enabled on a per-column level, meaning that the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) can have a mix of sortable and non-sortable columns. Performing Web Components sort actions enables you to change the display order of the records based on specified criteria.

## Web Components Hierarchical Grid Sorting Overview Example

Additionally there is a custom contextmenu added for sorting using [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)'s [`IgcHierarchicalGrid.contextMenu`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=contextMenu) Output.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

This is done via the [`IgcColumn.sortable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=sortable) input. With the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) sorting, you can also set the [`IgcColumnState.sortingIgnoreCase`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=sortingIgnoreCase) property to perform case sensitive sorting:

```html
<igc-column field="ProductName" header="Product Name" data-type="string" sortable="true"></igc-column>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) provides a solution for this problem by indicating the index of each sorted column.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Sorting through the API

You can sort any column or a combination of columns through the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) API using the [`Sort`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sort) method:

```typescript
import { SortingDirection } from 'igniteui-webcomponents-grids';
```

```typescript

// Perform a case insensitive ascending sort on the ProductName column.
this.hierarchicalGrid.sort([{ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true }]);

// Perform sorting on both the ProductName and Price columns.
this.hierarchicalGrid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);

```

**Note:** 
Sorting is performed using our [`IgcGridSortingStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcGridSortingStrategy) algorithm. Any [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent) or `ISortingExpression` can use a custom implementation of the [`IgcGridSortingStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcGridSortingStrategy) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`IgcHierarchicalGrid.clearSort`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=clearSort) method:

```typescript
// Removes the sorting state from the ProductName column
this.hierarchicalGrid.clearSort('ProductName');

// Removes the sorting state from every column in the Hierarchical Grid
this.hierarchicalGrid.clearSort();
```

**Note:** 
The [`IgcHierarchicalGrid.sortStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sortStrategy) of the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) is of different type compared to the [`IgcHierarchicalGrid.sortStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sortStrategy) of the [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent), since they work in different scopes and expose different parameters.

**Note:** 
The sorting operation **DOES NOT** change the underlying data source of the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) by passing an array of sorting expressions to the [`IgcHierarchicalGrid.sortingExpressions`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sortingExpressions) property of the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent).

```typescript
public connectedCallback() {
    this.hierarchicalGrid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

**Note:** 
If values of type `string` are used by a column of [`IgcHierarchicalGrid.dataType`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=dataType) `Date`, the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) won't parse them to `Date` objects and using [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- [`IgcHierarchicalGrid.sortHeaderIconTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sortHeaderIconTemplate) – re-templates the sorting icon when no sorting is applied.

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.sortHeaderIconTemplate = this.sortHeaderIconTemplate;
}

public sortHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="unfold_more"></igc-icon>`;
}
```

- [`IgcHierarchicalGrid.sortAscendingHeaderIconTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sortAscendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in ascending order.

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.sortAscendingHeaderIconTemplate = this.sortAscendingHeaderIconTemplate;
}

public sortAscendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_less"></igc-icon>`;
}
```

- [`IgcHierarchicalGrid.sortDescendingHeaderIconTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=sortDescendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in descending order.

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.sortDescendingHeaderIconTemplate = this.sortDescendingHeaderIconTemplate;
}

public sortDescendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_more"></igc-icon>`;
}
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grid/theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-hierarchical-grid class="grid">
</igc-hierarchical-grid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```

## API References

[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)<br />
[`IgcSortingExpression`](mcp:get_api_reference?platform=webcomponents&component=IgcSortingExpression)<br />

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
