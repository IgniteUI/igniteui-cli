---
title: Web Components Grid Group By | Group by multiple fields | Infragistics
_description: Configure group by that allows visualizing of data records in Web Components Material table, visualize the grouped data in separate and convenient column group.
_keywords: Web Components, Grid, Ignite UI for Web Components, group by, Infragistics
_license: commercial
mentionedTypes: ["Grid", "RowDirective", "GroupByRowSelectorTemplateDetails"]
namespace: Infragistics.Controls
_tocName: Group By
_premium: true
---

# Web Components Grid Group By

The Ignite UI for Web Components Group By behavior in Web Components IgcGrid creates grouped data rows based on the column values. The Group By in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) allows for visualizing the groups in a hierarchical structure. The grouped data rows can be expanded or collapsed and the order of grouping may be changed through the UI or API. When Row Selection is enabled, a Group By row selector is rendered in the left-most area of the group row. In case the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) property is set to single, checkboxes are disabled and only serve as an indication for the group where selection is placed. If the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) property is set to multiple, clicking over the Group By row selector selects all records belonging to this group.

## Web Components Grid Group By Example

This example presents the grouping capabilities of a large amount of data. Dragging the column headers to the top (grouping area) allows users to see the data for the selected column in a hierarchical structure. They can do group by in multiple fields by dragging more column headers to the top. These grouping options come in handy when you have tables with numerous rows and columns where users want to present the data in a much faster and visually acceptable way.

```typescript
export class InvoicesWorldDataItem {
    public constructor(init: Partial<InvoicesWorldDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipRegion: string;
    public ShipPostalCode: string;
    public ShipCountry: string;
    public CustomerID: string;
    public CustomerName: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ShipperName: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public Discontinued: boolean;
    public ExtendedPrice: number;
    public Freight: number;

}
export class InvoicesWorldData extends Array<InvoicesWorldDataItem> {
    public constructor(items: Array<InvoicesWorldDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10692, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `United Package`, ProductID: 63, ProductName: `Vegie-spread`, UnitPrice: 43.9, Quantity: 20, Discontinued: false, ExtendedPrice: 878, Freight: 61.02 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 3, ProductName: `Aniseed Syrup`, UnitPrice: 10, Quantity: 6, Discontinued: false, ExtendedPrice: 60, Freight: 23.94 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 76, ProductName: `Lakkalikööri`, UnitPrice: 18, Quantity: 15, Discontinued: false, ExtendedPrice: 270, Freight: 23.94 }),
                // ... 319 more items
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


## Initial Grouping State

It is possible to define initial grouping of the grid by assigning an array of expressions to the [`groupingExpressions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#groupingExpressions) property of the grid.

```typescript
constructor() {
    var grid = document.getElementById("grid") as IgcGridComponent;
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

Grouping expressions implement the `ISortingExpression` interface.

## Group By API

### Grouping API

Grouping is available through the UI and through a robust API exposed by the grid component. Developers can allow end-users to group the grid data by certain columns, by setting each column's `Groupable` property to `true`.

```html
<igc-grid auto-generate="false" id="grid">
    <igc-column field="OrderID" hidden="true"></igc-column>
    <igc-column field="ShipCountry" header="Ship Country" width="200px" groupable="true"> </igc-column>
    <igc-column field="OrderDate" header="Order Date" data-type="date" width="200px" groupable="true"> </igc-column>
    <igc-column field="PostalCode" header="Postal Code" width="200px" groupable="true"> </igc-column>
    <igc-column field="Discontinued" width="200px" data-type="boolean" groupable="true" name="column1" id="column1"> </igc-column>
    <igc-column field="ShipName" header="Ship Name" width="200px" groupable="true"> </igc-column>
    <igc-column field="ShipCity" header="Ship City" width="200px" groupable="true"> </igc-column>
    <igc-column field="ShipperName" header="Shipper Name" width="200px" groupable="true"> </igc-column>
    <igc-column field="Salesperson" header="Sales Person" width="200px" groupable="true"> </igc-column>
    <igc-column field="UnitPrice" header="Unit Price" width="200px" groupable="true"> </igc-column>
    <igc-column field="Quantity" width="200px" groupable="true"> </igc-column>
</igc-grid>
```

```typescript
    constructor() {
        var column1 = (this.column1 = document.getElementById("column1") as IgcColumnComponent);
        column1.groupable = true;
    }
```

During runtime the expressions are gettable and settable from the `groupingExpressions` property. If you need to add or change an existing expression you may also use the [`groupBy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#groupBy) method with either a single or an array of expressions.

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

### Expand/Collapse API

In addition to grouping expressions you can also control the expansion states for group rows. They are stored in a separate property of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component [`groupingExpansionState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#groupingExpansionState) which is a collection of [`IgcGroupByExpandState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyexpandstate.html). Each expansion state is uniquely defined by the field name it is created for and the value it represents for each level of grouping, i.e. the identifier is a hierarchy array of [`IgcGroupByKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbykey.html).

As with [`groupingExpressions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#groupingExpressions), setting a list of [`IgcGroupByExpandState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyexpandstate.html) directly to the [`groupingExpansionState`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#groupingExpansionState) will change the expansion accordingly. Additionally [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) exposes a method [`toggleGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#toggleGroup) that toggles a group by the group record instance or via the [`expanded`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowdirective.html#expanded) property of the row.

```typescript
const groupRow = this.grid.getRowByIndex(0).groupRow;
grid.toggleGroup(groupRow);
```

```typescript
const groupRow = this.grid.getRowByIndex(0);
groupRow.expanded = false;
```

Groups can be created expanded (**default**) or collapsed and the expansion states would generally only contain the state opposite to the default behavior. You can control whether groups should be created expanded or not through the [`groupsExpanded`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#groupsExpanded) property.

### Select/Deselect All Rows in a Group API

Selecting/Deselecting all rows in a group is available through the [`selectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#selectRowsInGroup) and [`deselectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#deselectRowsInGroup) API methods.

The code snippet below can be used to select all rows within a group using the group record instance [`selectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#selectRowsInGroup) method. Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```typescript
const groupRow = this.grid.getRowByIndex(0).groupRow;
grid.selectRowsInGroup(groupRow);
```

If you need to deselect all rows within a group programmatically, you can use the [`deselectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#deselectRowsInGroup) method.

```typescript
const groupRow = this.grid.getRowByIndex(0).groupRow;
grid.deselectRowsInGroup(groupRow);
```

## Templating

### Group Row Templates

The group row except for the expand/collapse UI is fully templatable. By default it renders a grouping icon and displays the field name and value it represents. The context to render the template against is of type [`IgcGroupByRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrecord.html).

As an example, the following template would make the group rows summary more verbose:

```ts
    public groupByRowTemplate = (ctx: IgcGroupByRowTemplateContext) => {
        const groupRow: IgcGroupByRecord = ctx.implicit;
        return html`<span>Total items with value: ${ groupRow.value } are ${ groupRow.records.length }</span>`;
    }
```

### Group Row Selector Templates

As mentioned above the group row except for the expand/collapse UI is fully templatable. To create a custom Group By row selector template use [`groupByRowSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#groupByRowSelectorTemplate). From the template, you can access the implicitly provided context variable, with properties that give you information about the Group By row's state.

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrowselectortemplatedetails.html#selectedCount) property shows how many of the group records are currently selected while [`totalCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrowselectortemplatedetails.html#totalCount) shows how many records belong to the group.

```ts
public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateContext) => {
    return html`
        ${ ctx.implicit.selectedCount } / ${ ctx.implicit.totalCount  }
    `;
}
```

The [`groupRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrowselectortemplatedetails.html#groupRow) property returns a reference to the group row.

```ts
public groupByRowSelectorTemplate = (ctx: IgcGroupByRowSelectorTemplateContext) => {
    const groupRow = ctx.implicit.groupRow;
    return html` <div @click=${(e: any) => this.handleGroupByRowSelectorClick(e, groupRow)} ">Handle groupRow</div> `;
};
```

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrowselectortemplatedetails.html#selectedCount) and [`totalCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrowselectortemplatedetails.html#totalCount) properties can be used to determine if the Group By row selector should be checked or indeterminate (partially selected).

## Web Components Grid Group By With Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

### Web Components Group By With Paging Example

```typescript
export class InvoicesWorldDataItem {
    public constructor(init: Partial<InvoicesWorldDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipRegion: string;
    public ShipPostalCode: string;
    public ShipCountry: string;
    public CustomerID: string;
    public CustomerName: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ShipperName: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public Discontinued: boolean;
    public ExtendedPrice: number;
    public Freight: number;

}
export class InvoicesWorldData extends Array<InvoicesWorldDataItem> {
    public constructor(items: Array<InvoicesWorldDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10692, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `United Package`, ProductID: 63, ProductName: `Vegie-spread`, UnitPrice: 43.9, Quantity: 20, Discontinued: false, ExtendedPrice: 878, Freight: 61.02 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 3, ProductName: `Aniseed Syrup`, UnitPrice: 10, Quantity: 6, Discontinued: false, ExtendedPrice: 60, Freight: 23.94 }),
                new InvoicesWorldDataItem({ ShipName: `Alfred's Futterkiste`, ShipAddress: `Obere Str. 57`, ShipCity: `Berlin`, ShipRegion: null, ShipPostalCode: `12209`, ShipCountry: `Germany`, CustomerID: `ALFKI`, CustomerName: `Alfreds Futterkiste`, Address: `Obere Str. 57`, City: `Berlin`, Region: null, PostalCode: 12209, Country: `Germany`, Salesperson: `Margaret Peacock`, OrderID: 10702, OrderDate: `2016-11-22T22:00:00.000Z`, ShipperName: `Speedy Express`, ProductID: 76, ProductName: `Lakkalikööri`, UnitPrice: 18, Quantity: 15, Discontinued: false, ExtendedPrice: 270, Freight: 23.94 }),
                // ... 319 more items
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


## Group By With Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.md#summaries-with-group-by) topic.

## Keyboard Navigation

The grouping UI supports the following keyboard interactions:

- For group rows (focus should be on the row or the expand/collapse cell)
  - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - Expands the group
  - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - Collapses the group
  - <kbd>SPACE</kbd> - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple

- For group [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html) components in the group by area (focus should be on the chip)
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - moves the focused chip left, changing the grouping order, if possible
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - moves the focused chip right, changing the grouping order, if possible
  - <kbd>SPACE</kbd> - changes the sorting direction
  - <kbd>DELETE</kbd> - ungroups the field
  - The separate elements of the chip are also focusable and can be interacted with using the <kbd>ENTER</kbd> key.

## Web Components Grid Custom Group By

Grid allows defining custom grouping per column or per grouping expression, which provides grouping based on a custom condition. This is useful when you need to group by complex objects or for other application specific scenarios.

The sample below demonstrates custom grouping by `Date`, where the date values are sorted and grouped by Day, Week, Month or Year based on user-selected grouping mode.

### Web Components Custom Group By Example

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor() {
        super();
        this.push(new InvoicesDataItem(
        {
            ShipName: `Jefferson Home`,
            ShipAddress: `124 Wall Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 60098,
            ShipCountry: `USA`,
            ShipRegion: `South East`,
            ShipperName: `Federal Shipping`,
            CustomerID: 1000,
            CustomerName: `Martin Jefferson`,
            CustomerFirstName: `Martin`,
            CustomerLastName: `Jefferson`,
            CustomerAddress: `124 Wall Street, Miami, USA, 60098`,
            Salesperson: `Nancy Jefferson`,
            OrderID: 1931,
            OrderDate: `3/14/2022`,
            ProductID: 189,
            ProductName: `IPad`,
            UnitPrice: 16150.61,
            Quantity: 3,
            ExtendedPrice: 48451.83,
            Freight: 980.61,
            Discontinued: false,
            Region: `South East`,
            Address: `124 Wall Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 60098
        }));
        this.push(new InvoicesDataItem(
        {
            ShipName: `Black Home`,
            ShipAddress: `162 Main Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 80193,
            ShipCountry: `USA`,
            ShipRegion: `West`,
            ShipperName: `United Package`,
            CustomerID: 1001,
            CustomerName: `Anna Black`,
            CustomerFirstName: `Anna`,
            CustomerLastName: `Black`,
            CustomerAddress: `162 Main Street, Miami, USA, 80193`,
            Salesperson: `Anna Smith`,
            OrderID: 1163,
            OrderDate: `5/22/2022`,
            ProductID: 138,
            ProductName: `Mac Book Pro`,
            UnitPrice: 18520.59,
            Quantity: 4,
            ExtendedPrice: 74082.36,
            Freight: 850.59,
            Discontinued: false,
            Region: `West`,
            Address: `162 Main Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 80193
        }));
        this.push(new InvoicesDataItem(
        {
            ShipName: `Watson Townhouse`,
            ShipAddress: `164 Wall Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 50111,
            ShipCountry: `USA`,
            ShipRegion: `West`,
            ShipperName: `United Package`,
            CustomerID: 1002,
            CustomerName: `Max Watson`,
            CustomerFirstName: `Max`,
            CustomerLastName: `Watson`,
            CustomerAddress: `164 Wall Street, Miami, USA, 50111`,
            Salesperson: `Martin Watson`,
            OrderID: 1230,
            OrderDate: `2/9/2022`,
            ProductID: 118,
            ProductName: `Mac Book Air`,
            UnitPrice: 25310.39,
            Quantity: 3,
            ExtendedPrice: 75931.17,
            Freight: 210.39,
            Discontinued: false,
            Region: `West`,
            Address: `164 Wall Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 50111
        }));
        // ... 496 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


The sample defines custom sorting for the different date conditions.
Each custom strategy defines the `GroupingComparer` method, which is the custom compare function used when sorting the values. Additionally it extracts the values from the date needed for the comparison.

```typescript
public groupByMode = "Month";
public getParsedDate(date: any) {
    return {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
}
```

A `GroupingComparer` function is defined for the grouping expressions, which determines the items belonging to the same group based on the selected grouping mode. Values in the sorted data for which this function returns 0 are marked as part of the same group.

```typescript
grid.groupingExpressions = [
    { fieldName: 'OrderDate', dir: SortingDirection.Desc,
    groupingComparer: (a, b) => {
            const dateA = this.getParsedDate(a);
            const dateB = this.getParsedDate(b);
            if (this.groupByMode === 'Month') {
                return dateA.month === dateB.month ? 0 : -1;
            } else if (this.groupByMode === "Year") {
                return dateA.year === dateB.year ? 0 : -1;
            } else if (this.groupByMode === 'Week') {
                return this.getWeekOfDate(a) === this.getWeekOfDate(b) ? 0 : -1;
            }
            return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
        }
    }
];
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```ts
<igc-grid class="grid">
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-group-row-background: #969799;
    --ig-grid-group-row-selected-background: #969799;
    --ig-grid-group-label-column-name-text: #f8f8f8;
    --ig-grid-group-label-text: #f8f8f8;
    --ig-grid-group-count-text-color: #222;
    --ig-grid-expand-icon-color: #f8f8f8;
    --ig-grid-expand-icon-hover-color: #f8f8f8;
}
```

### Demo

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipName: `Jefferson Home`, ShipAddress: `124 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 60098, ShipCountry: `USA`, ShipRegion: `South East`, ShipperName: `Federal Shipping`, CustomerID: 1000, CustomerName: `Martin Jefferson`, CustomerFirstName: `Martin`, CustomerLastName: `Jefferson`, CustomerAddress: `124 Wall Street, Miami, USA, 60098`, Salesperson: `Nancy Jefferson`, OrderID: 1931, OrderDate: `3/14/2022`, ProductID: 189, ProductName: `IPad`, UnitPrice: 16150.61, Quantity: 3, ExtendedPrice: 48451.83, Freight: 980.61, Discontinued: false, Region: `South East`, Address: `124 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 60098 }),
                new InvoicesDataItem({ ShipName: `Black Home`, ShipAddress: `162 Main Street`, ShipCity: `Miami`, ShipPostalCode: 80193, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1001, CustomerName: `Anna Black`, CustomerFirstName: `Anna`, CustomerLastName: `Black`, CustomerAddress: `162 Main Street, Miami, USA, 80193`, Salesperson: `Anna Smith`, OrderID: 1163, OrderDate: `5/22/2022`, ProductID: 138, ProductName: `Mac Book Pro`, UnitPrice: 18520.59, Quantity: 4, ExtendedPrice: 74082.36, Freight: 850.59, Discontinued: false, Region: `West`, Address: `162 Main Street`, City: `Miami`, Country: `USA`, PostalCode: 80193 }),
                new InvoicesDataItem({ ShipName: `Watson Townhouse`, ShipAddress: `164 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 50111, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1002, CustomerName: `Max Watson`, CustomerFirstName: `Max`, CustomerLastName: `Watson`, CustomerAddress: `164 Wall Street, Miami, USA, 50111`, Salesperson: `Martin Watson`, OrderID: 1230, OrderDate: `2/9/2022`, ProductID: 118, ProductName: `Mac Book Air`, UnitPrice: 25310.39, Quantity: 3, ExtendedPrice: 75931.17, Freight: 210.39, Discontinued: false, Region: `West`, Address: `164 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 50111 }),
                // ... 496 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-chip-text-color: rgb(248, 248, 248);
    --ig-chip-hover-text-color: rgb(225, 225, 225);
    --ig-chip-background: rgb(73, 73, 73);
    --ig-chip-hover-background: rgb(56, 56, 56);
    --ig-chip-focus-background: rgb(223, 181, 13);
    --ig-chip-selected-background: rgb(223, 181, 13);
    --ig-chip-focus-selected-background: rgb(223, 181, 13);
    --ig-grid-group-row-background: rgb(73, 73, 73);
    --ig-grid-group-row-selected-background: rgb(56, 56, 56);
    --ig-grid-group-label-column-name-text: rgb(248, 248, 248);
    --ig-grid-group-label-text: rgb(248, 248, 248);
    --ig-grid-group-count-background: rgb(255, 205, 15);
    --ig-grid-group-count-text-color: rgb(34, 34, 34);
    --ig-grid-expand-icon-color: rgb(255, 205, 15);
    --ig-grid-expand-icon-hover-color: rgb(223, 181, 13);
}
```


## Known Limitations

|Limitation|Description|
|--- |--- |
|Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown.

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcGroupByRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrecord.html)
- `ISortingExpression`
- [`column`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgroupbyrecord.html#column)
- `IGroupByExpandState`
- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html)

## Additional Resources

- [Grid overview](../data-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Column Moving](column-moving.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
