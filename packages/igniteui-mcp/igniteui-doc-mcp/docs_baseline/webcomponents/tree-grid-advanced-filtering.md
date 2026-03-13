---
title: Web Components Tree Grid Advanced Filtering - Ignite UI for Web Components
_description: Learn how to configure advanced filter of data with the Web Components Tree Grid. The grid advanced filtering is more convenient and engaging than ever.
_keywords: Advanced Filtering, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/advanced-filtering
_tocName: Advanced Filtering
_premium: true
---

# Web Components Tree Grid Advanced Filtering

The Ignite UI for Web Components Advanced Filtering in Web Components Tree Grid allows you to manipulate data by providing you with a dialog where you can create different groups with filtering conditions across all columns in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

## Web Components Tree Grid Advanced Filtering Example

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


## Interaction

In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. If no advanced filter is applied, you should start with creating a group of filtering conditions linked with **AND** or **OR**. After that, you can add filtering conditions or sub-groups.

In order to add a filtering condition, you have to select any of the [`filterable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#filterable) columns, an operand based on the column [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) and a value if the operand is not unary. Once the condition is committed, a chip with the condition information appears. By hovering or clicking the chip, you have the options to modify it or add another condition or group right after it.

If you select more than one filtering condition chip, a context menu appears with options to create a group or delete the filters. If you choose to create a group with the selected conditions, the newly created group will appear where the topmost selected condition was placed.

In order to select a group, you can also click on its vertical line, which is colored based on the the linking condition **AND** or **OR**. If a single group is selected, you get a context menu with options to change its filtering logic, ungroup or delete it.

In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.

## Usage

To enable the advanced filtering, the `AllowAdvancedFiltering` input property should be set to **true**.

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid id="treeGrid" auto-generate="true" allow-advanced-filtering="true">
    <igc-grid-toolbar></igc-grid-toolbar>
</igc-tree-grid>
```

```ts
constructor() {
    let treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
    treeGrid.data = this.data
}
```

<!-- ComponentEnd: TreeGrid -->

The advanced filtering generates a [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#filteringExpressionsTree) which is stored in the `AdvancedFilteringExpressionsTree` input property. You could use the `AdvancedFilteringExpressionsTree` property to set an initial state of the advanced filtering.

<!-- WebComponents -->

```typescript
connectedCallback(): void {
    const tree = new IgcFilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('contains'),
        searchVal: 'cha',
        ignoreCase: true
    });
    const subTree = new IgcFilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'ProductName',
        condition: IgcStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'Chan',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    grid.advancedFilteringExpressionsTree = tree;
}
```

<!-- end: WebComponents -->

In case you don't want to show the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) toolbar, you could use the `OpenAdvancedFilteringDialog` and `CloseAdvancedFilteringDialog` methods to open and close the advanced filtering dialog programmatically.

> \[!Note]
> You can enable both the **QuickFilter**/**ExcelStyleFilter** and the advanced filtering user interfaces in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). Both filtering user interfaces will work independently of one another. The final filtered result in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) is the intersection between the results of the two filters.

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- WebComponents -->

```html
<igc-tree-grid class="grid"></igc-tree-grid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-query-builder-header-foreground: #512da8;
    --ig-query-builder-color-expression-group-and: #eb0000;
    --ig-query-builder-color-expression-group-or: #0000f3;
    --ig-query-builder-subquery-header-background: var(--ig-gray-300);
    --ig-query-builder-subquery-border-color: var(--ig-warn-500);
    --ig-query-builder-subquery-border-radius: 4px;
}
```

### Demo

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

#treeGrid {
    --ig-query-builder-header-foreground: #512da8;
    --ig-query-builder-color-expression-group-and: #eb0000;
    --ig-query-builder-color-expression-group-or: #0000f3;
    --ig-query-builder-subquery-header-background: var(--ig-gray-300);
    --ig-query-builder-subquery-border-color: var(--ig-warn-500);
    --ig-query-builder-subquery-border-radius: 4px;
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
