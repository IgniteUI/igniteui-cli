---
title: Web Components Tree Grid Clipboard Interactions - Ignite UI for Web Components
_description: The Web Components Tree Grid Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!
_keywords: Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/clipboard-interactions
_tocName: Clipboard Interactions
_premium: true
---

# Web Components Tree Grid Clipboard Overview

Copy to clipboard operations are now available in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). This functionality provides a fast, easy and customizable way to copy data of the Web Components [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) into Excel or other external programs.

## Web Components Tree Grid Clipboard Example

```typescript
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: string;
    public Title: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor() {
        super();
        this.push(new EmployeesFlatDetailsItem(
        {
            Address: `Obere Str. 57`,
            Age: 55,
            City: `Berlin`,
            Country: `Germany`,
            Fax: `030-0076545`,
            HireDate: `2008, 3, 20`,
            ID: 1,
            Name: `Johnathan Winchester`,
            ParentID: -1,
            Phone: `030-0074321`,
            PostalCode: `12209`,
            Title: `Development Manager`
        }));
        this.push(new EmployeesFlatDetailsItem(
        {
            Address: `Avda. de la Constitución 2222`,
            Age: 42,
            City: `México D.F.`,
            Country: `Mexico`,
            Fax: `(5) 555-3745`,
            HireDate: `2014, 1, 22`,
            ID: 4,
            Name: `Ana Sanders`,
            ParentID: -1,
            Phone: `(5) 555-4729`,
            PostalCode: `05021`,
            Title: `CEO`
        }));
        this.push(new EmployeesFlatDetailsItem(
        {
            Address: `Mataderos 2312`,
            Age: 49,
            City: `México D.F.`,
            Country: `Mexico`,
            Fax: `(5) 555-3995`,
            HireDate: `2014, 1, 22`,
            ID: 18,
            Name: `Victoria Lincoln`,
            ParentID: -1,
            Phone: `(5) 555-3932`,
            PostalCode: `05023`,
            Title: `Accounting Manager`
        }));
        // ... 15 more items
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

> \[!Note]
> In order to **copy** cells in IE 11, you can use the keyboard selection. Hold the <kbd>SHIFT</kbd> key in order to make a multi-cell selection, press <kbd>CTRL</kbd> + <kbd>C</kbd> in order to copy.

- The copy behavior is disabled while the grid is in edit mode.
- The current version of this feature covers only the **copy** from grid behavior. Later on we plan to expose `paste` within grid behavior.

## API Usage

We expose [`IgcClipboardOptions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcclipboardoptions.html) property, which handles the following options:

- [`enabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcclipboardoptions.html#enabled) Enables/disables copying of selected cells.
- [`copyHeaders`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcclipboardoptions.html#copyHeaders) Include the associated headers when copying.
- [`copyFormatters`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcclipboardoptions.html#copyFormatters) Apply any existing column formatters to the copied data.
- [`separator`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcclipboardoptions.html#separator) The string separator to use the for formatting the data in the clipboard. Default is `/t`

> \[!Note]
> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.

- `GridCopy` Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the [`IgcClipboardOptions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcclipboardoptions.html).

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
