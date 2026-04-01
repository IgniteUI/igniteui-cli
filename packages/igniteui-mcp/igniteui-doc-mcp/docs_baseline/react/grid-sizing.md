---
title: React Grid Sizing - Ignite UI for React
_description: Understand how the React Grid sizing works and learn how to use the width and height in order to accommodate the different scenarios that users can have.
_keywords: Sizing , React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_tocName: Sizing
_premium: true
---

# React Grid Sizing

The Ignite UI for React Sizing feature in React Grid is an important aspect of creating responsive and user-friendly grid interfaces. The React Grid Sizing feature enables users to adjust the [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) and [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) of the grid to accommodate different screen sizes, content, or user preferences. In terms of border and padding size for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), they are taken into its width/height size calculations or also known as [Border box](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) sizing. It is applied in all scenarios.

> \[!Note]
> If the Border box sizing is overridden by the user we cannot guarantee that the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) will size correctly.

## React Grid Width

If the [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) input does not have value assigned, its default value is `100%` and the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) tries to fill the available space. You can check how the grid reacts to it in the `Percentages` section.

> \[!Note]
> Setting manually the [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) style of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) itself will result in an unexpected behavior.

### Null

The grid's [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) can accepts value of `null`, which when set, renders all columns in the DOM. The grid sizes accordingly so there is no grid horizontal scrollbar since column virtualization is not applied.

- If there are 6 columns and none of them has width defined, the grid will have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of `816px`, because each column by default have assigned [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of `136px` in this scenario. Same will happen if the columns have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) in percentages. If vertical scrollbar is rendered or there are features that render additional columns their width will be added also.

<img src="../../../images/grid_sizing/columns-default-gridWidth-null-v2.jpg" alt="columns-default-gridWidth-null-v2" style="width: 80%"/>

- If there are 6 columns with column width set to `200px` they will fit in our window and all will be visible:

<img src="../../../images/grid_sizing/width-null-no-scroll-v2.jpg" alt="width-null-no-scroll-v2" style="width: 80%"/>

- If there are more columns or ones with bigger width that go out of the browser's view, they will all still render. Let's have the same amount of columns but each with column width of `300px`. Since they don't all fit in the browser view area, it will create a scrollbar natively. The next example displays this exact scenario:

<img src="../../../images/grid_sizing/width-null-scroll-v2.jpg" alt="width-null-scroll-v2" style="width: 80%"/>

- If the grid has a parent element of any sort and it doesn't have any overflow set, it will still render all columns visible. Otherwise if the parent element has overflow `auto` or `scroll`, a scrollbar for that parent element will be rendered natively. The parent has bigger height for easier visualization in the following example.

<img src="../../../images/grid_sizing/width-null-parent-scroll-v2.jpg" alt="width-null-parent-scroll-v2" style="width: 80%"/>

> \[!Note]
> Due to this behavior, if the grid data contains too many columns, it might have significant impact on the browser performance, since all columns would be rendered without virtualization.

### Pixels

When the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) has its [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) input is set to pixels it will set the whole grid size to that value and it will be static. It will not react to any browser resizing or changes in the DOM, although this is not the case for the grid content:

- When width is set in pixels in order for the grid to render horizontal scrollbar, its content width needs to exceed the specified grid [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width). Let's, for example, have the combined width of the columns exceed `1200px`. In this case a horizontal scrollbar will be rendered.

<img src="../../../images/grid_sizing/width-cols-scrollbar-v2.jpg" alt="width-cols-scrollbar-v2" style="width: 80%"/>

- For scenarios where the grid has a parent element, it depends on the parent styling if it will render scrollbar or not. Everything else related to the grid itself is still retained. If the parent element width is smaller than the grid's width and has overflow style set to `auto` or `scroll`, it will render scrollbar natively. For example, if the parent has `width` set to `1000px` and the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) `width` is still `1200px`, it will look similar to the following illustrations:

<img src="../../../images/grid_sizing/width-cols-scroll-parent-noscroll-v2.jpg" alt="width-cols-scroll-parent-noscroll-v2" style="width: 80%"/>
<img src="../../../images/grid_sizing/width-cols-scroll-parent-scroll-v2.jpg" alt="width-cols-scroll-parent-scroll-v2" style="width: 80%"/>

### Percentages

When the [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is set to percentages it will size the grid according to the parent element's width. If the parent element does not have width specified the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) will size relative to the browser window.

- For example, if we set the grid [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) input to `100%` and there is no parent element it will fill 100% of the available width of the browser window. If it is resized the grid will resize as well accordingly.

<img src="../../../images/grid_sizing/width-percent-100p-v2.jpg" alt="width-percent-100p-v2" style="width: 80%"/>

- If we set grid's width to `100%` and there is a parent element that has specific width of `1200px`, this will mean that the grid will size relative to that element and his final width will be `1200px`.

<img src="../../../images/grid_sizing/width-percent-parent-100p-v2.jpg" alt="width-percent-parent-100p-v2" style="width: 80%"/>

- If we have a parent element with [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of `1000px` and have the grid's [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) set to `150%`, the calculated grid width will be `1500px`. In this case the grid will still render fully visible but if we set `overflow: auto` of the parent, that parent will render scrollbar on its own.

<img src="../../../images/grid_sizing/width-percent-150p-parent-noscroll-v2.jpg" alt="width-percent-150p-parent-noscroll-v2" style="width: 80%"/>
<img src="../../../images/grid_sizing/width-percent-150p-parent-scroll-v2.jpg" alt="width-percent-150p-parent-scroll-v2" style="width: 80%"/>

## React Grid Height

By default if no height is defined for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), it will be set to `100%`. You can check how the grid reacts depending on the DOM structure in the `Percentages` section.

> \[!Note]
> Setting manually the [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) style of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) itself will result in an unexpected behavior.

### Null

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) input can accept `null` value, which when set, displays all rows with no scrollbar no matter how many they are. In this case, there is no vertical virtualization since the grid renders all rows anyway.

- If we have data with 14 rows in this case the grid will render all 14 of them and size the grid so all are visible without any empty space inside the grid.

<img src="../../../images/grid_sizing/height-null-14rows-v2.jpg" alt="height-null-14rows-v2" style="width: 80%"/>

- If we have 24 rows instead, the grid will still render all rows but since they are too many, they exceed the browser boundaries. That's why the browser itself will render vertical scrollbar by default so the user can scroll down to the rest of the rows.

<img src="../../../images/grid_sizing/height-null-24rows-v2.jpg" alt="height-null-24rows-v2" style="width: 80%"/>

- If there is a parent element with defined [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height), the grid will still render all rows and not be affected. Let's say the parent has [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) of `650px`. If it has `overflow` set to `auto` or `scroll`, it will render a vertical scrollbar but the grid will still be unaffected:

<img src="../../../images/grid_sizing/height-null-24rows-parent-noscroll-v2.jpg" alt="height-null-24rows-parent-noscroll-v2" style="width: 80%"/>
<img src="../../../images/grid_sizing/height-null-24rows-parent-scroll-v2.jpg" alt="height-null-24rows-parent-scroll-v2" style="width: 80%"/>

> \[!Note]
> Due to this behavior, if the grid data contains too many rows, it might have significant impact on the browser performance, since all rows would be rendered without virtualization.

### Pixels

Setting the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) in pixels is more straightforward since the grid will size to that specific size in all occasions similarly to how [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is set in pixels.

- If we set, for example, the height `500px` with 4 rows for our data the grid will sit to that size and since 4 rows are not enough to fill the visible area it is expected to have some empty area.

<img src="../../../images/grid_sizing/height-500px-4rows-v2.jpg" alt="height-500px-4rows-v2" style="width: 80%"/>

- If the number of rows exceeds the visible area of the grid when [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) is set to pixels a vertical scrollbar will be rendered. For example, a grid with `500px` height set and 14 rows will be rendered the following way:

<img src="../../../images/grid_sizing/height-500px-14rows-v2.jpg" alt="height-500px-14rows-v2" style="width: 80%"/>

- If there is a parent element with [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) defined, unless it has `overflow` set to `auto` or `scroll`, the grid will still be fully visible. Otherwise it will render a scrollbar.

<img src="../../../images/grid_sizing/height-700px-14rows-parent-noscroll-v2.jpg" alt="height-700px-14rows-parent-noscroll-v2" style="width: 80%"/>
<img src="../../../images/grid_sizing/height-700px-14rows-parent-scroll-v2.jpg" alt="height-700px-14rows-parent-scroll-v2" style="width: 80%"/>

### Percentages

When the [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) input is set to percentages, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) will size based on the parent element height. If the parent element has its [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) set in pixels or percentages, the grid will size relative to the size of the parent.

When the parent element does not have defined height, the browser does not assign height to it initially and sizes it based on its children and their size. That is why there is no way for the grid to know what base height to use in order to apply percentage sizing based on it. For this reason, it will render a maximum of 10 rows and if they are more rows, a vertical scrollbar will be rendered. Otherwise, the grid will fit to number of rendered rows. We will look in this scenario in more detail in the next examples.

Let's have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) set to `1200px` and the parent element not having any size applied to it:

- If there are less than 10 rows the grid will try to fit all rows in the visible area without having an empty space between the last row and the bottom of the visible area. For example, let's have the grid data to consist of 7 rows. The grid will render all 7 rows without vertical scrollbar and without empty space inside the grid.

<img src="../../../images/grid_sizing/height-undefined-7rows-v2.jpg" alt="height-undefined-7rows-v2" style="width: 80%"/>

- If there are more than 10 rows a vertical scrollbar will be rendered for the rest of the rows and only 10 rows can be visible at any time. In the next example only the row number is increased to 14.

<img src="../../../images/grid_sizing/height-undefined-14rows-v2.jpg" alt="height-undefined-14rows-v2" style="width: 80%"/>

- If we set the parent element height to `800px` and the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) to `100%` height this means that the grid will be sized to 100 percentages of `800px`.

<img src="../../../images/grid_sizing/height-percent-100-parent-800px-v2.jpg" alt="height-percent-100-parent-800px-v2" style="width: 80%"/>

- If the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) is set to a number bigger than `100%` and the parent element has height, for the parent to render scrollbar it again needs to have `overflow` set to `auto` or `scroll`. Otherwise the grid will be fully visibly and size relative to the parent size.

<img src="../../../images/grid_sizing/height-percent-130p-parent-noscroll-v2.jpg" alt="height-percent-130p-parent-noscroll-v2" style="width: 80%"/>
<img src="../../../images/grid_sizing/height-percent-130p-parent-scroll-v2.jpg" alt="height-percent-130p-parent-scroll-v2" style="width: 80%"/>

- If we want the grid to be sized to `100%` from the browser window we would need to set both `body` and parent grid element heights to `100%`. In this case, the parent element can be sized and the grid will size accordingly if the browser is resized.

<img src="../../../images/grid_sizing/height-percent-100-parent-100-v2.jpg" alt="height-percent-100-parent-100-v2" style="width: 80%"/>

## React Grid Column Sizing

Depending on the grid size itself, the columns inside it can also be sized differently that could result in scenarios where the grid renders horizontal scrollbar or not. Columns can have width set in pixels, percentages or autosized when nothing is set. We will take a deeper look regarding these scenarios in this section.

### Default

By default when a column doesn't have a specified width it will try to autosize, so that it fills if any empty space is available in the grid view area. Autosized columns have minimum width of `136px`, so if the area available is less than `136px` for that column, it will default to that size.

When the grid is resized in these scenarios, the column width is also updated to reflect the changes, so it fills any new empty space available.

- If a column does not have specified [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) and the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) has [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) set to `null`, it will be sized to the minimum of `136px`. This means that for a grid with [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) `null` and 6 columns that don't have width, each column will be sized to `136px`.

<img src="../../../images/grid_sizing/columns-default-gridWidth-null-v2.jpg" alt="columns-default-gridWidth-null-v2" style="width: 80%"/>

- When there are multiple autosized columns they will divide the available space between each other equally. This means that if we have 6 columns and there is empty area of `1200px`, each will size to `200px`.

<img src="../../../images/grid_sizing/columns-default-all-row-selectors-v2.jpg" alt="columns-default-all-row-selectors-v2" style="width: 80%"/>

- If there is available empty space, so that each autosized column will be less than `136px`, all autosized columns will default to `136px` and the grid will render horizontal scrollbar. In the next example let's have 12 autosized columns and the grid [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) set to `1000px`.

<img src="../../../images/grid_sizing/columns-default-all-min-136px-v2.jpg" alt="columns-default-all-min-136px-v2" style="width: 80%"/>

- If a column does not have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) specified, but all other columns have either [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) in pixels or percentages, that column will try to also fill the available space. For example, if we don't have width set to the first column and all other 5 have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of `100px`, the first will fill the rest.

<img src="../../../images/grid_sizing/columns-default-first-rest-100px-v2.jpg" alt="columns-default-first-rest-100px-v2" style="width: 80%"/>

- Same applies if multiple columns does not have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) specified, all will divide the available space between each other equally. In the next illustration the first column has [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) set to `100px`.

<img src="../../../images/grid_sizing/columns-default-all-first-100px-v2.jpg" alt="columns-default-all-first-100px-v2" style="width: 80%"/>

> \[!Note]
> Feature columns like Row Selector checkbox column and etc. fill additional space that is taken into account when autosizing columns.

### Pixels

When columns have set specific [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) in pixels, they stick to that size, unless they are resized manually. Since the combined [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of the columns is static, it can be less than the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) or exceed it.

- If the combined `width` of all columns is less than the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width), there would be an empty are inside the grid that the columns wouldn't be able to fill. This is the expected behavior of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). In the next example the columns have `150px` width.

<img src="../../../images/grid_sizing/columns-150px-empty-area-v2.jpg" alt="columns-150px-empty-area-v2" style="width: 80%"/>

- If the combined [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of all columns is bigger than the actual [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width), a horizontal scrollbar will be rendered. In the next example each of the 6 columns have width of `300px` and grid has width of `1200px`, which means that the columns combined have excess of `600px` that goes out of bounds.

<img src="../../../images/grid_sizing/columns-150px-extra-area-v2.jpg" alt="columns-150px-extra-area-v2" style="width: 80%"/>

### Percentages

When columns have set [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) in percentages, their size is calculated relatively to the grid size. It is similar to how width in pixels works, but provides also responsiveness to the columns which means that when the grid is resized, the columns also will resize accordingly.

- If the combined width of all columns is less than `100%`, similarly to when in pixels, there could be an empty area of the grid that the columns do not cover.

<img src="../../../images/grid_sizing/columns-percent-less-100p-v2.jpg" alt="columns-percent-less-100p-v2" style="width: 80%"/>

- If the combined width is exactly `100%`, the columns will fill all available space of the grid.

<img src="../../../images/grid_sizing/columns-percent-100p-v2.jpg" alt="columns-percent-100p-v2" style="width: 80%"/>

- If the combined width exceeds `100%` in order for the user to be able to see the columns out of view, a horizontal scrollbar is rendered.

<img src="../../../images/grid_sizing/columns-percent-bigger-100p-v2.jpg" alt="columns-percent-bigger-100p-v2" alt="columns-percent-bigger-100p-v2" style="width: 80%"/>

- If columns are set in percentages and the grid [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is set to `null`, it would apply [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) of `136px` to each column. That is because the columns cannot be sized relatively to the grid, since it doesn't have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) itself and relies on its content to be sized when its [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `null`. In the following example all 6 columns have [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) set to `50%`:

<img src="../../../images/grid_sizing/columns-percent-gridWidth-null-v2.jpg" alt="columns-percent-gridWidth-null-v2" style="width: 80%"/>

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
