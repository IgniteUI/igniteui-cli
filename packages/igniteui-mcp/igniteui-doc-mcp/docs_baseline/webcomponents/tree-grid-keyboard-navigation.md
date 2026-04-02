---
title: Web Components Tree Grid Keyboard Navigation - Ignite UI for Web Components
_description: Learn how to use Tree Grid Keyboard Navigation with Ignite UI for Web Components. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, Ignite UI for Web Components, infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Keyboard navigation
_premium: true
---

# Web Components Tree Grid Keyboard Navigation

The Ignite UI for Web Components Keyboard Navigation feature in Web Components Tree Grid provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) and allows the user to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled).
- **Tree Grid header**.
- **Tree Grid body**.
- **Column summaries** (if enabled).
- **Tree Grid paginator** (if enabled).

> [!Note]
> Due to this change, navigating between the cells with <kbd>TAB</kbd> and <kbd>SHIFT</kbd> + <kbd>TAB</kbd> is no longer supported in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).
> Pressing the <kbd>TAB</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

> [!Note]
> Exposing any **focusable** element into the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full **keyboard navigation** support in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) header container is focused, the following key combinations are available:

### Key Combinations

- <kbd>↑</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>↓</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>←</kbd> navigates one cell left (no looping).
- <kbd>→</kbd> navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>HOME</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>END</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>ALT</kbd> + <kbd>L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared.
- <kbd>SPACE</kbd> selects the column. If the column is already selected, selection is cleared.

 

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd> ungroups the column, if the column is marked as groupable.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> collapses the column group header, if the header is not already collapsed.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> expands the column group header, if the header is not already expanded.

## Body navigation

When the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) body is focused, the following key combinations are available:

### Key Combination

<!-- ComponentStart: Grid, TreeGrid -->

- <kbd>↑</kbd>- navigates one cell up.
- <kbd>↓</kbd> navigates one cell down.

<!-- ComponentEnd: Grid, TreeGrid -->

- <kbd>←</kbd> navigates one cell left (no wrapping between lines).
- <kbd>→</kbd> - navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> navigates to the first cell in the column.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> navigates to the last cell in the column.
- <kbd>HOME</kbd> navigates to the leftmost cell in the row.
- <kbd>END</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>HOME</kbd> navigates to the top leftmost data cell in the grid.
- <kbd>CTRL</kbd> + <kbd>END</kbd> navigates to the bottom rightmost data cell in the grid.
- <kbd>PAGE UP</kbd> scrolls one page (view port) up.
- <kbd>PAGE DOWN</kbd> scrolls one page (view port) down.
- <kbd>ENTER</kbd> enters edit mode.
- <kbd>F2</kbd> enters edit mode.
- <kbd>ESC</kbd> exits edit mode.
- <kbd>TAB</kbd> available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to the **CANCEL** and **DONE** buttons, and from **DONE** button to the left-most editable cell in the row.
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - available only if there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the first cell in the row, moves the focus to the last editable cell in the previous row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to **CANCEL** and **DONE** buttons, and from **DONE** button to the right-most editable cell in the row.
- <kbd>SPACE</kbd> - selects the row, if [Row Selection](row-selection.md) is enabled.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> -

 

 

 <!-- ComponentStart: TreeGrid -->

collapses the current node.

 <!-- ComponentEnd: TreeGrid -->

- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - <!-- ComponentStart: Grid -->
    over Group Row - expands the group.

 <!-- ComponentEnd: Grid -->

 

 <!-- ComponentStart: TreeGrid -->

expands the current node.

 <!-- ComponentEnd: TreeGrid -->

 

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Demo

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
    public LastName: string;
    public FullAddress: string;

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
            Title: `Development Manager`,
            LastName: `Winchester`,
            FullAddress: `Obere Str. 57, Berlin, Germany`
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
            Title: `CEO`,
            LastName: `Sanders`,
            FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico`
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
            Title: `Accounting Manager`,
            LastName: `Lincoln`,
            FullAddress: `Mataderos 2312, México D.F., Mexico`
        }));
        // ... 15 more items
    }
}
```
```typescript
export enum ItemAction {
    Filterable,
    Sortable,
    Selectable,
    Groupable,
    Collapsible,
    Expandable,
    Editable,
    Always
}

export enum GridSection {
    THEAD = 'igx-grid__thead-wrapper',
    TBODY = 'igx-grid__tbody-content',
    FOOTER = 'igx-grid__tfoot'
}
export class Item {
    public title: string;
    public subTitle: string;
    public action: ItemAction;
    public active = false;

    private _completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean, itemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = itemAction;

        if (itemAction === ItemAction.Always) {
            this.active = true;
        }
    }

    public set completed(value: boolean) {
        if (this.active || (!value && !this.completed)) {
            this._completed = value;
        }
    }

    public get completed() {
        return this._completed;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Custom Keyboard Navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>ENTER</kbd> or <kbd>TAB</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:

| API | Description | Arguments |
|---------|-------------|-----------|
| `GridKeydown` | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [`IgcGridKeydownEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridkeydowneventargs.html) |
| `ActiveNodeChange` | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [`IgcActiveNodeChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactivenodechangeeventargs.html) |
| [`navigateTo`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#navigateTo) | Navigates to a position in the grid, based on provided `Rowindex` and `VisibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />`grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });` | `RowIndex: number, VisibleColumnIndex: number, callback: ({ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getNextCell)| returns `ICellPosition` object, which defines the next cell by `RowIndex` and `VisibleColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getNextCell) method. The callback function accepts [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) as a param and returns a `boolean` value indication if a given criteria is met: <br />`const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);` | `currentRowIndex: number, currentVisibleColumnIndex: number, callback: (Column) => boolean` |
| [`getPreviousCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getPreviousCell) | returns `ICellPosition` object, which defines the previous cell by `RowIndex` and `VisibleColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getPreviousCell) method. The callback function accepts [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) as a param and returns a `boolean` value indication if a given criteria is met: <br />`const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);` | `CurrentRowIndex: number, CurrentVisibleColumnIndex: number, callback: (Column) => boolean` |

<br />

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the `GridKeydown` event:

```html
<igc-tree-grid id="grid1" primary-key="ProductID">
</igc-tree-grid>
```

```ts
constructor() {
        const grid = this.grid = document.getElementById('grid1') as IgcTreeGridComponent;
        grid.data = this.data
        grid.addEventListener("gridKeydown", this.customKeydown);
    }
```

<!-- WebComponents -->

```typescript
public customKeydown(args: : CustomEvent<IgcGridKeydownEventArgs>) {
    const evt = args.detail;
    const target = evt.target as IgcCellType;
    const evt: KeyboardEvent = evt.event as KeyboardEvent;
    const type = evt.targetType;

    if (type === 'dataCell' && target.inEditMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

<!-- WebComponents -->

Based on the event arg values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>TAB</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>ENTER</kbd> key over a cell, we will move focus to cell in the next row:

```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
        });
```

> [!Note]
> Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:

- Double click or press <kbd>F2</kbd> key on a cell in a numeric column, change the value to **7** and press <kbd>TAB</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>ENTER</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

### Demo

```typescript
export class EmployeesNestedDataItem {
    public constructor(init: Partial<EmployeesNestedDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public Name: string;
    public Title: string;
    public Employees: EmployeesNestedDataItem_EmployeesItem[];

}
export class EmployeesNestedDataItem_EmployeesItem {
    public constructor(init: Partial<EmployeesNestedDataItem_EmployeesItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Title: string;

}
export class EmployeesNestedData extends Array<EmployeesNestedDataItem> {
    public constructor(items: Array<EmployeesNestedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedDataItem({ ID: 1, Age: 55, Salary: 80000, Productivity: 90, City: `Berlin`, Country: `Germany`, Phone: `609-202-505`, HireDate: `2008-03-20`, Name: `John Winchester`, Title: `Development Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 43, Salary: 70000, Productivity: 80, City: `Hamburg`, Country: `Germany`, Phone: `609-444-555`, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 60000, Productivity: 80, City: `Munich`, Country: `Germany`, Phone: `609-333-444`, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, Title: `Senior Software Developer` }),
                // ... 20 more items
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


## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
