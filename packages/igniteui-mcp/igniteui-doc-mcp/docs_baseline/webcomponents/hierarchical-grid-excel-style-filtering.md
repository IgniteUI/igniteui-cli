---
title: Web Components Hierarchical Grid Excel Style Filtering - Ignite UI for Web Components
_description: Learn how to configure Excel filtering in Web Components Hierarchical Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
_keywords: excel like filter, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_tocName: Excel Style Filtering
_premium: true
---

# Excel Filtering in Web Components Hierarchical Grid

The Web Components Hierarchical Grid exposes an Excel-style filtering feature that provides an Excel-like filtering UI. It simplifies the process of working with large datasets. The main idea is to help them filter the data that is most relevant, while eliminating irrelevant entries.

## Web Components Hierarchical Grid Excel Style Filtering Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

To turn on the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) component's Excel-style filtering, two inputs should be set. The [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#allowFiltering) should be set to **true** and the [`filterMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#filterMode) should be set to `ExcelStyleFilter` value.

```html
<igc-hierarchical-grid auto-generate="true" allow-filtering="true" filter-mode="excelStyleFilter" >
</igc-hierarchical-grid>
```

## Interactions

In order to open the filter menu for a particular column, the Web Components filter icon in the header should be clicked. Additionally, you can use the <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> combination on a selected header. If the column can be sorted, pinned, moved, selected or hidden along with the filtering functionality, there will be buttons available for the features that are turned on.

If no filter is applied, all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data, you can select/deselect the items in the list and either click the Apply button, or press <kbd>ENTER</kbd>. The filtering applied through the list items creates filter expressions with `equals` operator and the logic operator between the expressions is `OR`.

If you type something in the search box and apply the filter, only the items that match the search criteria will be selected. If you want to add items to the currently filtered ones, however, you should select the option **Add current selection to filter**.

If you want to clear the filter, you can check the **Select All** option and then click the Apply button.

To apply a filter with different expressions, you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button, which can clear the filter.

## Configure Menu Features

Sorting, pinning and hiding features can be removed from the filter menu using the corresponding inputs: [`sortable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortable), [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#selected), [`disablePinning`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#disablePinning), [`disableHiding`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#disableHiding).

```html
<igc-hierarchical-grid auto-gGenerate="false" moving="true" allow-filtering='true' filter-mode="ExcelStyleFilter"
    height="650px" width="100%" id="hierarchicalGrid">
    <igc-column field="Artist" filterable='true' sortable="true"></igc-column>
    <igc-column field="Photo" filterable='false'></igc-column>
    <igc-column field="Debut" filterable='true' disable-pinning="true" disable-hiding="true"></igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" filterable='true' date-type="Number" sortable="false"></igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" filterable='true' date-type="Number"></igc-column>
    <!-- ... -->
</igc-hierarchical-grid>
```

In the sample below 'Artist' column have all three features enabled, 'Debut' have all three disabled, 'Grammy Nominations' has only pinning and hiding.

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Templates

If you want to further customize the Excel style filter menu, you can use the [`excelStyleHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#excelStyleHeaderIconTemplate) property to define a custom template for the header icon of the menu.

The following code demonstrates how to customize the Excel style filter menu using the [`excelStyleHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#excelStyleHeaderIconTemplate):

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.excelStyleHeaderIconTemplate = this.webGridFilterAltIconTemplate;
}

public webGridFilterAltIconTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<img height="15px" width="15px" src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" title="Continued" alt="Continued" />`
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-hierarchical-grid class="hgrid" auto-generate="false" allow-fFiltering='true' filter-mode="ExcelStyleFilter"
    height="650px" width="100%" row-height="65px" id="hierarchicalGrid">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>
    <igc-row-island key="Albums" auto-generate="false" allow-fFiltering='true' filter-mode="ExcelStyleFilter">
        <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
            <igc-excel-style-column-operations>
                <igc-excel-style-header
                    show-pinning="true"
                    show-hiding="true"
                >
                </igc-excel-style-header>

                <igc-excel-style-sorting></igc-excel-style-sorting>
            </igc-excel-style-column-operations>

            <igc-excel-style-filter-operations>
                <igc-excel-style-search></igc-excel-style-search>
            </igc-excel-style-filter-operations>
        </igc-grid-excel-style-filtering>

</igc-hierarchical-grid>
``` -->

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-hierarchical-grid class="grid"></igc-hierarchical-grid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-list-item-background: #ffcd0f;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-grid-filtering-row-background: #ffcd0f;
        --ig-button-background: #FFCD0F;
        --ig-button-foreground: #292826;
        --ig-button-hover-background: #292826;
        --ig-button-hover-foreground: #ffcd0f;

        --ig-list-background: #FFCD0F;
        --ig-list-item-background: #FFCD0F;
        --ig-list-item-background-hover: #c2b1b1bd;

        --ig-checkbox-empty-color: #292826;
        --ig-checkbox-fill-color: #292826;
        --ig-checkbox-tick-color: #FFCD0F;
        --ig-checkbox-label-color: #292826;

        --ig-drop-down-background-color: #FFCD0F;
        --ig-drop-down-item-text-color: #292826;
        --ig-drop-down-item-background: #FFCD0F;
        --ig-drop-down-item-text-color: #292826;
        --ig-drop-down-focused-item-background: #c2b1b1bd;
    }
```


## API References

- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
