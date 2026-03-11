---
title: Web Components Data Grid | Column Options | Infragistics
_description: See how Infragistics' Ignite UI for Web Components Data Grid supports the ability to pin, move, filter, and sort columns individually through a drop down UI from each column header. Check out Ignite UI for Web Components table's column option!
_keywords: Web Components Table, Data Grid, column options, Ignite UI for Web Components, Infragistics
mentionedTypes: ["Grid", "HeaderClickAction", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Options
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Web Components Grid Column Options Overview

The Ignite UI for Web Components Data Grid supports the ability to group, hide, sort, move, pin, filter, and sort columns directly from a UI exposed on each column header.

To enable the column options ui you can set the grid's [`isColumnOptionsEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#isColumnOptionsEnabled) property to true.

## Web Components Grid Column Options Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Column Options Configurations

Filtering can be toggled per column by setting the column's [`isFilteringEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#isFilteringEnabled) property. Setting true or false will show or hide the filtering section in the column's options ui.

Sorting can be toggled for the entire grid if the [`headerClickAction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#headerClickAction) property is applied. Setting this to [`None`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.headerclickaction.html#None) for example will completely remove sorting from grid and reflect in the options ui for each column. And setting [`SortByOneColumnOnly`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.headerclickaction.html#SortByOneColumnOnly) for example will continue to allow one column to be sorted at a time.

## Code Snippet

The following code demonstrates how to programmatically enable the column options ui adjust filtering and sorting in the column options ui by adjusting the grid and column.

<!--WebComponents-->

```ts
import { HeaderClickAction } from 'igniteui-webcomponents-data-grids';

//enable column options
this.grid.isColumnOptionsEnabled="true";

//adjust filtering for column
let idColumn = this.grid.actualColumns.item(0);
idColumn.isFilteringEnabled="false";

//adjust sorting
this.grid.headerClickAction = HeaderClickAction.SortByOneColumnOnly;
```

```html
<igc-data-grid
     id="grid"
     height="calc(100% - 40px)"
     width="100%"
     header-click-action="SortByOneColumnOnly"
     is-column-options-enabled="true">
    <igc-text-column field="ID" is-filtering-enabled="false"></igc-text-column>
</igc-data-grid>
```

## API References

- [`headerClickAction`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#headerClickAction)
- [`isColumnOptionsEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#isColumnOptionsEnabled)
- [`isFilteringEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcolumncomponent.html#isFilteringEnabled)
- [`SortByOneColumnOnly`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.headerclickaction.html#SortByOneColumnOnly)
