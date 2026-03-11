---
title: Web Components Data Grid | Cell Merging | Merging | Infragistics
_description: Use the cell merging feature of the Infragistics' Web Components data grid to join cells with duplicate values.
_keywords: Web Components Table, Data Grid, cell merging, Ignite UI for Web Components, Infragistics
mentionedTypes: ["Grid", "MergedCellMode", "MergedCellEvaluationCriteria"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Cell Merging
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Web Components Grid Cell Merging

The Ignite UI for Web Components Data Table / Data Grid supports cell merging. You may opt-in and detect when adjacent sibling records for a specific column contains the same value. While the cells are not active, selected, or in edit mode, the value displays across the cells.

## Web Components Grid Cell Merging Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Overview

Cell Merging in the Web Components data grid can be configured by using the [`mergedCellMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#mergedCellMode) option of the entire Web Components grid or individual columns. This property can be set to one of the following options, listed below:

- [`Never`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.mergedcellmode.html#Never): The grid or column will never merge cells. This is the default behavior.
- [`Always`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.mergedcellmode.html#Always): The grid or column will always attempt to merge cells.
- [`OnlyWhenSorted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.mergedcellmode.html#OnlyWhenSorted): The grid or column will only attempt to merge cells when a column is sorted.

Note, regardless of the value of this property, cells can only be merged across sibling records.

Cell merging can be evaluated based on whether the data is formatted or not using the [`mergedCellEvaluationCriteria`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#mergedCellEvaluationCriteria) property. This is applicable to the entire grid or individual columns and can be set to one of the following options, listed below:

- [`RawValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.mergedcellevaluationcriteria.html#RawValue): Merge cells from adjacent rows when the raw values from the cells are the same. This is the default value.
- [`FormattedText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.mergedcellevaluationcriteria.html#FormattedText): Merge cells from adjacent rows when the formatted value from the cells is the same.

<div class="divider--half"></div>

## API References

- [`FormattedText`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.mergedcellevaluationcriteria.html#FormattedText)
- [`mergedCellEvaluationCriteria`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#mergedCellEvaluationCriteria)
- [`mergedCellMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html#mergedCellMode)
- [`OnlyWhenSorted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_grids.mergedcellmode.html#OnlyWhenSorted)
