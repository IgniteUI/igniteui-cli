---
title: Web Components Tree Grid Selection - Ignite UI for Web Components
_description: See how easy it is to select data in Ignite UI for Web Components grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/selection
_tocName: Selection
---

# Web Components Tree Grid Selection Overview

With the Ignite UI for Web Components Select feature in Web Components Tree Grid you can easily interact with and manipulate data using simple mouse interactions. There are three selection modes available:

- Row selection
- Cell selection
- Column selection

With the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) property, you can specify:

- None
- Single
- Multiple Select

## Web Components Tree Grid Selection Example

The sample below demonstrates three types of **cell selection** behaviors in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). Use the buttons below to enable each of the available selection modes.

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Tree Grid Selection Options

### Web Components Tree Grid Row Selection

Property [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) enables you to specify the following options:

- `None` - Row selection would be disabled for the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).
- `Single` - Selection of only one row within the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) would be available.
- `Multiple` - Multi-row selection would be available by using the row selectors, with a key combination like <kbd>CTRL</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused.

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

- `MultipleCascade` - This is a mode for cascading selection, resulting in the selection of all children in the tree below the record that the user selects with user interaction. In this mode a parent's selection state entirely depends on the selection state of its children.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

> Go to [Row selection topic](row-selection.md) for more information.

### Web Components Tree Grid Cell Selection

Property [`cellSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#cellSelection) enables you to specify the following options:

- `None` - Cell selection would be disabled for the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).
- `Single` - Selection of only one cell within the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) would be available.
- `Multiple` - Currently, this is the default state of the selection in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Cell selection topic](cell-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Web Components Tree Grid Column Selection

The [`selectable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#selectable) property enables you to specify the following options for each [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html). The corresponding column selection will be enabled or disabled if this property is set to true or false, respectively.

This leads to the following three variations:

- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>CTRL</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>mouse click</kbd> selects everything in between.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

> Go to [Column selection topic](column-selection.md) for more information.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Known Issues and Limitations

When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection
- Row Expand/collapse
- Row Editing
- Row Pinning

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
