---
title: Web Components Tree Grid Filtering - Ignite UI for Web Components
_description: Start using angular filter to return specific data with Web Components Tree Grid. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: filter, Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/filtering
_tocName: Filtering
---

# Web Components Tree Grid Filtering

The Ignite UI for Web Components Filtering in Web Components Tree Grid is a feature that allows for selectively displaying or hiding data based on specific criteria or conditions. There is a bound data container through which the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) Component provides rich filtering API and all the filtering capabilities. The available filtering types here are three:

- Quick filtering
- [Excel Style Filtering](excel-style-filtering.md)
- [Advanced Filtering](advanced-filtering.md)

## Web Components Tree Grid Filtering Example

The sample below demonstrates [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s **Quick Filter** user experience.

```typescript
export class OrdersDataItem {
    public constructor(init: Partial<OrdersDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersData extends Array<OrdersDataItem> {
    public constructor(items: Array<OrdersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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


## Setup

In order to specify if filtering is enabled and which filtering mode should be used, the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) exposes the following properties - `AllowFiltering`, `AllowAdvancedFiltering`, `FilterMode` and [`filterable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#filterable).

Property `AllowFiltering` enables you to specify the following options:

- **false** - the filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the filtering for the corresponding grid will be enabled.

Property `AllowAdvancedFiltering` enables you to specify the following options:

- **false** - the advanced filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the advanced filtering for the corresponding grid will be enabled.

Property `FilterMode` enables you to specify the following options:

- **QuickFilter** - a simplistic filtering UI. This is the default value.
- **ExcelStyleFilter** - an Excel-like filtering UI.

Property [`filterable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#filterable) enables you to specify the following options:

- **true** - the filtering for the corresponding column will be enabled. This is the default value.
- **false** - the filtering for the corresponding column will be disabled.

```html
<igc-tree-grid id="grid1" auto-generate="false" allow-filtering="true">
    <igc-column field="ProductName" data-type="string"></igc-column>
    <igc-column field="Price" data-type="number" filterable="false"></igc-column>
</igc-tree-grid>
```

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the `AllowAdvancedFiltering` input property to **true**

```html
<igc-tree-grid  data="data" auto-generate="true" allow-advanced-filtering="true">
</igc-tree-grid>
```

> [!Note]
> You can enable both the `QuickFilter` or `ExcelStyleFilter` and the advanced filtering user interfaces in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). Both filtering user interfaces will work independently of one another. The final filtered result in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) is the intersection between the results of the two filters.

## Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For **number** and **date** columns 'Equals' is selected by default, for **string** - 'Contains' and for **boolean** - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

## Usage

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) of the column, the correct set of **filtering operations** is loaded inside the filter UI dropdown. Additionally, you can set the `IgnoreCase` and the initial `Condition` properties.

The filtering feature is enabled for the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) component by setting the `AllowFiltering` input to **true**. The default `FilterMode` is `QuickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`filterable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#filterable) input to **false**.

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igc-tree-grid auto-generate="false" allow-filtering="true">
    <igc-column field="ProductName" data-type="string"></igc-column>
    <igc-column field="Price" datdata-typeaType="number"></igc-column>
    <igc-column field="Discontinued" data-type="boolean" filterable="false"></igc-column>
</igc-tree-grid>
```

> [!Note]
> If values of type **string** are used by a column of data type **date**, the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) won't parse them to **date** objects and using filtering conditions won't be possible. If you want to use **string** objects, additional logic should be implemented on the application level, in order to parse the values to **date** objects.

You can filter any column or a combination of columns through the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) API. The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) exposes several methods for this task - [`Filter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.filter.html), `FilterGlobal` and `ClearFilter`.

- [`Filter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_excel.filter.html) - filter a single column or a combination of columns.

There are five filtering operand classes exposed:

- [`IgcFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfilteringoperand.html): this is a base filtering operand, which can be inherited when defining custom filtering conditions.
- [`IgcBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcbooleanfilteringoperand.html) defines all default filtering conditions for **boolean** type.
- [`IgcNumberFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcnumberfilteringoperand.html) defines all default filtering conditions for **numeric** type.
- [`IgcStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcstringfilteringoperand.html) defines all default filtering conditions for **string** type.
- [`IgcDateFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdatefilteringoperand.html) defines all default filtering conditions for **date** type.

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', IgcStringFilteringOperand.instance().condition('contains'), true);
```

The only required parameters are the column field key and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.

> [!Note]
> The filtering operation **DOES NOT** change the underlying data source of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgcStringFilteringOperand.instance().condition('contains'),
    fieldName: 'ProductName',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new IgcFilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgcNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
```

- `FilterGlobal` - clears all existing filters and applies the new filtering condition to all Tree Grid's columns.

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal('myproduct', IgcStringFilteringOperand.instance().condition('contains'), false);
```

- `ClearFilter` - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

## Initial filtered state

To set the initial filtering state of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html), set the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#filteringExpressionsTree) property to an array of [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#filteringExpressionsTree) for each column to be filtered.

```typescript
constructor() {
    const gridFilteringExpressionsTree: IgcFilteringExpressionsTree = { operator: FilteringLogic.And };
    const productFilteringExpressionsTree: IgcFilteringExpression = {
        fieldName: "ProductName",
        conditionName: "contains",
        ignoreCase: true,
        searchVal: "Chai"
    };

    const quantityFilteringExpressionsTree: IgcFilteringExpression = {
        fieldName: "QuantityPerUnit",
        conditionName: "contains",
        ignoreCase: true,
        searchVal: "1"
    };

    gridFilteringExpressionsTree.filteringOperands = [ productFilteringExpressionsTree, quantityFilteringExpressionsTree ];

    this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

### Filtering logic

The `FilteringLogic` property of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) controls how filtering multiple columns will resolve in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). You can change it at any time through the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) API, or through the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) input property.

```typescript
import { FilteringLogic } from "igniteui-webcomponents-grids/grids";

this.grid.filteringLogic = FilteringLogic.OR;
```

The default value of `AND` returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to `OR`, a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

## Custom Filtering Operands

You can customize the filtering menu by adding, removing or modifying the filtering operands. By default, the filtering menu contains certain operands based on the column’s data type ([`IgcBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcbooleanfilteringoperand.html), [`IgcDateFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdatefilteringoperand.html), [`IgcNumberFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcnumberfilteringoperand.html) and [`IgcStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcstringfilteringoperand.html)). You can extend these classes or their base class [`IgcFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfilteringoperand.html) to change the filtering menu items’ behavior.

In the sample below, inspect the “Product Name” and “Discontinued” columns filters menus. For the “Discontinued” column filter, we have limited the number of operands to All, True and False. For the “Product Name” column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.

To do that, extend the [`IgcStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcstringfilteringoperand.html) and [`IgcBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcbooleanfilteringoperand.html), modify the operations and their logic, and set the column `filters` input to the new operands.

```typescript

export class GridCustomFilteringComponent {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
}

export class CaseSensitiveFilteringOperand extends IgcStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgcStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgcStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgcStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgcStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgcBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```

<!-- ComponentStart: Grid, TreeGrid -->

```html
<!-- grid-custom-filtering.component.html -->

<igc-tree-grid auto-generate="false" allow-filtering="true">
    <igc-column id="ProductName" field="ProductName" header="Product Name" data-type="string"></igc-column>
    <igc-column id="Discontinued" field="Discontinued" header="Discontinued" data-type="boolean"></igc-column>
</igc-tree-grid>
```

```ts
constructor() {
    var productName = document.getElementById('ProductName') as IgcColumnComponent;
    var discontinued = document.getElementById('Discontinued') as IgcColumnComponent;
    productName.filters = this.caseSensitiveFilteringOperand;
    discontinued.filters = this.booleanFilteringOperand;
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

```typescript
export class OrdersDataItem {
    public constructor(init: Partial<OrdersDataItem>) {
        Object.assign(this, init);
    }
    
    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersData extends Array<OrdersDataItem> {
    public constructor() {
        super();
        this.push(new OrdersDataItem(
        {
            ID: 1,
            ParentID: -1,
            Name: `Order 1`,
            Category: ``,
            OrderDate: `2010-02-17`,
            Units: 1844,
            UnitPrice: 3.73,
            Price: 6884.38,
            Delivered: true
        }));
        this.push(new OrdersDataItem(
        {
            ID: 101,
            ParentID: 1,
            Name: `Chocolate Chip Cookies`,
            Category: `Cookies`,
            OrderDate: `2010-02-17`,
            Units: 834,
            UnitPrice: 3.59,
            Price: 2994.06,
            Delivered: true
        }));
        this.push(new OrdersDataItem(
        {
            ID: 102,
            ParentID: 1,
            Name: `Red Apples`,
            Category: `Fruit`,
            OrderDate: `2010-02-17`,
            Units: 371,
            UnitPrice: 3.66,
            Price: 1357.86,
            Delivered: true
        }));
        // ... 19 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-tree-grid class="grid"></igc-tree-grid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
}
```

### Demo

```typescript
export class OrdersDataItem {
    public constructor(init: Partial<OrdersDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersData extends Array<OrdersDataItem> {
    public constructor(items: Array<OrdersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
}
```


## Known Limitations

> [!Note]
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
