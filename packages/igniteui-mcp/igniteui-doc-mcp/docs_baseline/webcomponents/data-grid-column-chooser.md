---
title: Web Components Data Grid | Column Chooser | Infragistics
_description: Learn how Infragistics' Ignite UI for Web Components grid component supports the ability to show and hide columns directly through the UI or by using the Web Components control. View Ignite UI for Web Components table demos for more information!
_keywords: Web Components Table, Data Grid, column chooser, Ignite UI for Web Components, Infragistics
mentionedTypes: ["Grid", "DataGridColumn", "DataGridToolbar", "Button", "ColumnChooser", "ColumnHidingAnimationMode", "ColumnShowingAnimationMode", "ColumnChooserTitle"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Chooser
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Web Components Grid Column Chooser Overview

The Ignite UI for Web Components Data Grid supports the ability show and hide columns with the UI through the [`IgcDataGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html) component or by the [`columnChooser`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooser) component that provides flexibility to place it anywhere on the page. The [`isHidden`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#isHidden) property on the columns can also be used to quickly hide or show a single column programmatically for manual column generation, and the value of [`isHidden`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#isHidden) will reflect in the [`columnChooser`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooser) component. Each approach can be used interchangeably to change the visible state of the columns.

## Web Components Grid Column Chooser Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Toolbar's Column Chooser UI

The Column Chooser UI is accessible within the [`IgcDataGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html) component separate from the grid. For this purpose all we have to do is set the toolbar's [`columnChooser`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooser) property to true. The toolbar will then display a [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html), when clicked, will display the column chooser UI. This button also displays the total of hidden columns. If the toolbar is not created, enabling the [`columnChooser`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooser) property will have no effect and hide the button.

The [`IgcDataGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html) provides additional properties such as adding a title to the toolbar by using the [`toolbarTitle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#toolbarTitle) property, placing text in the [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) by setting the [`columnChooserText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooserText) property, and adding a title header to the column chooser UI by setting [`columnChooserTitle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooserTitle).

The Column Chooser can be configured with animations by setting the grid's [`columnHidingAnimationMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#columnHidingAnimationMode) and [`columnShowingAnimationMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#columnShowingAnimationMode) properties.

## Code Snippet

The following demonstrates how to implement the Column Chooser Toolbar UI for the Web Components Data Grid:

```html
<igc-dataGrid-toolbar
    toolbar-title="Grid Title"
    column-chooser="true"
    column-chooser-text="Columns"
    column-chooser-title="Column Chooser">
</igc-dataGrid-toolbar>
<igc-data-grid
    id="grid"
    height="calc(100% - 40px)"
    width="100%"
    auto-generate-columns="false"
    default-column-min-width="120px"
    scrollbar-style = "thin"
    column-hiding-animation-mode="SlideOver">
</igc-data-grid>
```

```ts
import { IgcDataGrid } from 'igniteui-webcomponents-data-grids';
import { IgcDataGridToolbar } from 'igniteui-webcomponents-data-grids';
import { ColumnMovingAnimationMode } from 'igniteui-webcomponents-data-grids';

private grid: IgcDataGridComponent;
private toolbar: IgcDataGridToolbarComponent;

connectedCallback() {
    this.toolbar.targetGrid = this.grid;
    let productNameColumn = document.getElementById("productname") as IgcTextColumnComponent;
    productNameColumn.isHidden = true;
    this.toolbar.columnChooser = true;
    this.toolbar.toolbarTitle = "Grid Title";
    this.toolbar.columnChooserText = "Choose Text";
    this.toolbar.columnChooserTitle = "Choose Title Text";
    this.grid.columnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;
}
```

## Simple Column Chooser

Let's say we want to manually display the [`columnChooser`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooser) UI without the toolbar and put it anywhere we want on our page. This can be easily done by simply creating an instance of the component in our markup.

## Demo

```css
.gridContainer {
    height: calc(100% - 20px);
    width: calc(100%);

    padding: 10px;
    margin: 0px;
}

.gridOptionsLabel {
    font-size: 13px;
    font-family: "Verdana";
    padding-left: 1rem;
    color: rgb(24, 29, 31);
}

.columnChooserContainer {
    margin: 20px;
    min-width: 225px;
    height: 500px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 5px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    background-color: rgb(248, 248, 248);
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Code Snippet

The following demonstrates how to implement the Column Chooser UI for the Data Grid:

```html
<igc-column-chooser
    id="columnUI"
    height="100%"
    width="250px"
    title="Column Chooser"
    show-all-text="Show All"
    hide-all-text="Hide All">
</igc-column-chooser>
<igc-data-grid
    id="grid"
    height="100%"
    width="100%"
    data-source={this.data}
    auto-generate-columns="false"
    column-hiding-animation-mode="SlideOver">
    <igx-text-column is-hidden="true" field="ProductPrice" header-text="Product Price"><igc-text-column>
</igc-data-grid>
```

```ts
import { IgcDataGrid } from 'igniteui-webcomponents-data-grids';
import { IgcColumnChooser } from 'igniteui-webcomponents-data-grids';
import { ColumnMovingAnimationMode } from 'igniteui-webcomponents-data-grids';

private grid: IgcDataGridComponent;
private columnChooser: IgcColumnChooserComponent;

connectedCallback() {
    this.columnChooser.targetGrid = this.grid;
    this.columnChooser.showAllText = "Show All";
    this.columnChooser.hideAllText = "Hide All";
    this.grid.columnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;
}
```

## API References

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`columnChooserText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooserText)
- [`columnChooserTitle`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooserTitle)
- [`columnChooser`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html#columnChooser)
- [`columnHidingAnimationMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#columnHidingAnimationMode)
- [`columnShowingAnimationMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#columnShowingAnimationMode)
- [`IgcDataGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridtoolbarcomponent.html)
