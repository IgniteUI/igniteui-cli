---
title: Web Components Grid Clipboard Interactions - Ignite UI for Web Components
_description: The Web Components Grid Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!
_keywords: Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/clipboard-interactions
_tocName: Clipboard Interactions
_premium: true
---

# Web Components Grid Clipboard Overview

Copy to clipboard operations are now available in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). This functionality provides a fast, easy and customizable way to copy data of the Web Components [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) into Excel or other external programs.

## Web Components Grid Clipboard Example

```typescript
export class NwindDataItem {
    public constructor(init: Partial<NwindDataItem>) {
        Object.assign(this, init);
    }

    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;
    public OrderDate: string;
    public Rating: number;
    public Locations: NwindDataItem_LocationsItem[];

}
export class NwindDataItem_LocationsItem {
    public constructor(init: Partial<NwindDataItem_LocationsItem>) {
        Object.assign(this, init);
    }

    public Shop: string;
    public LastInventory: string;

}
export class NwindData extends Array<NwindDataItem> {
    public constructor() {
        super();
        this.push(new NwindDataItem(
        {
            ProductID: 1,
            ProductName: `Chai`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `10 boxes x 20 bags`,
            UnitPrice: 18,
            UnitsInStock: 39,
            UnitsOnOrder: 30,
            ReorderLevel: 10,
            Discontinued: false,
            OrderDate: `2012-02-12`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 2,
            ProductName: `Chang`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `24 - 12 oz bottles`,
            UnitPrice: 19,
            UnitsInStock: 17,
            UnitsOnOrder: 40,
            ReorderLevel: 25,
            Discontinued: true,
            OrderDate: `2003-03-17`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 3,
            ProductName: `Aniseed Syrup`,
            SupplierID: 1,
            CategoryID: 2,
            QuantityPerUnit: `12 - 550 ml bottles`,
            UnitPrice: 10,
            UnitsInStock: 13,
            UnitsOnOrder: 70,
            ReorderLevel: 25,
            Discontinued: false,
            OrderDate: `2006-03-17`,
            Rating: 3,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `24/7 Market`,
                    LastInventory: `11/11/2018`
                })]

        }));
        // ... 17 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Functionality

Copy behavior is working with the default interaction defined by the browser and operating system. Thus for the copy and paste behaviors, these are:

- Windows/Unix based
  - <kbd>CTRL</kbd> + <kbd>C</kbd> / <kbd>CTRL</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - <kbd>CTRL</kbd> + <kbd>V</kbd> / <kbd>SHIFT</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - Copy action through the browser menu
- macOS
  - <kbd>CMD</kbd> + <kbd>C</kbd> as a keyboard shortcut
  - <kbd>CMD</kbd> + <kbd>V</kbd> as a keyboard shortcut
  - Copy action through the browser menu

## Limitations

- Both the **cut** and **copy** events are not natively supported in Internet Explorer. The exception is the
    **paste** event (IE 11) which is emitted but does not expose the `ClipboardData` property in the event.

> [!Note]
> In order to **copy** cells in IE 11, you can use the keyboard selection. Hold the <kbd>SHIFT</kbd> key in order to make a multi-cell selection, press <kbd>CTRL</kbd> + <kbd>C</kbd> in order to copy.

- The copy behavior is disabled while the grid is in edit mode.
- The current version of this feature covers only the **copy** from grid behavior. Later on we plan to expose `paste` within grid behavior.

## API Usage

We expose [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#clipboardOptions) property, which handles the following options:

- `Enabled` Enables/disables copying of selected cells.
- `CopyHeaders` Include the associated headers when copying.
- `CopyFormatters` Apply any existing column formatters to the copied data.
- `Separator` The string separator to use the for formatting the data in the clipboard. Default is `/t`

> [!Note]
> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.

- `GridCopy` Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#clipboardOptions).

## Additional Resources

<!-- ComponentStart: Grid -->

- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)
- [Virtualization and Performance](virtualization.md)
- [Multi-column headers](multi-column-headers.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
