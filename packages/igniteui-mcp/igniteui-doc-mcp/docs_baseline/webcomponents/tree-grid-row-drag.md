---
title: Web Components Tree Grid Row Dragging - Ignite UI for Web Components
_description: Row dragging in Web Components Tree Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in Web Components Tree Grid

The Ignite UI for Web Components Row Dragging feature in Web Components Tree Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) component and is configurable via the `RowDraggable` input.

## Web Components Tree Grid Row Drag Example

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
                new EmployeesNestedDataItem(
                {
                    ID: 1,
                    Age: 55,
                    Salary: 80000,
                    Productivity: 90,
                    City: `Berlin`,
                    Country: `Germany`,
                    Phone: `609-202-505`,
                    HireDate: `2008-03-20`,
                    Name: `John Winchester`,
                    Title: `Development Manager`,
                    Employees: [
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 43,
                            Salary: 70000,
                            Productivity: 80,
                            City: `Hamburg`,
                            Country: `Germany`,
                            Phone: `609-444-555`,
                            HireDate: `2011-06-03`,
                            ID: 3,
                            Name: `Michael Burke`,
                            Title: `Senior Software Developer`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 29,
                            Salary: 60000,
                            Productivity: 80,
                            City: `Munich`,
                            Country: `Germany`,
                            Phone: `609-333-444`,
                            HireDate: `2009-06-19`,
                            ID: 2,
                            Name: `Thomas Anderson`,
                            Title: `Senior Software Developer`
                        }),
                // ... 20 more items
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Configuration

In order to enable row-dragging for your [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html), all you need to do is set the grid's `RowDraggable` to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```html
<igc-tree-grid row-draggable="true">
</igc-tree-grid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's `DragIndicatorIconTemplate`. In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

```html
<igc-tree-grid row-draggable="true" id="grid">
</igc-tree-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.dragIndicatorIconTemplate = this.dragIndicatorIconTemplate;
}

public dragIndicatorIconTemplate = (ctx: IgcGridEmptyTemplateContext) => {
    return html`<igc-icon name="drag_handle" collection="material"></igc-icon>`;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

## Application Demo

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid id="tGrid" row-draggable="true" primary-key="ID">
</igc-tree-grid>
```

```ts
constructor() {
    var tGrid = this.tGrid = document.getElementById('tGrid') as IgcTreeGridComponent;
    tGrid.addEventListener("rowDragStart", this.webTreeGridReorderRowStartHandler);
    tGrid.addEventListener("rowDragEnd", this.webTreeGridReorderRowHandler);
}
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> Make sure that there is a `PrimaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once `RowDraggable` is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

- Is the row expanded? If so, collapse it.
- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`data`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#data) array
- Was the row initially selected? If so, mark it as selected.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

Below, you can see this implemented:

<!-- ComponentStart: TreeGrid -->

```ts
public webTreeGridReorderRowStartHandler(args: CustomEvent<IgcRowDragStartEventArgs){
        const draggedRow = args.detail.dragElement;
        const grid = this.treeGrid;
        const row = grid.getRowByIndex(draggedRow.getAttribute('data-rowindex'));
        if(row.expanded){
            row.expanded = false;
        }
    }

    public webTreeGridReorderRowHandler(args: CustomEvent<IgcRowDragEndEventArgs>): void {
        const ghostElement = args.detail.dragDirective.ghostElement;
        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = this.treeGrid;
        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-tree-grid-row"));
        const currRowIndex = this.getCurrentRowIndex(rows,
        { x: dragElementPos.x, y: dragElementPos.y });
        if (currRowIndex === -1) { return; }
        const draggedRow = args.detail.dragData.data;
        const childRows = this.findChildRows(grid.data, draggedRow);
        //remove the row that was dragged and place it onto its new location
        grid.deleteRow(args.detail.dragData.key);
        grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
        // reinsert the child rows
        childRows.reverse().forEach(childRow => {
            grid.data.splice(currRowIndex + 1, 0, childRow);
        });
    }

    private findChildRows(rows: any[], parent: any): any[] {
        const childRows: any[] = [];
        rows.forEach(row => {
            if (row.ParentID === parent.ID) {
                childRows.push(row);
                // Recursively find children of current row
                const grandchildren = this.findChildRows(rows, row);
                childRows.push(...grandchildren);
            }
        });
        return childRows;
    }

    public getCurrentRowIndex(rowList: any[], cursorPosition: any) {
        for (const row of rowList) {
            const rowRect = row.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return parseInt(row.attributes["data-rowindex"].value);
            }
        }
        return -1;
    }
```

<!-- ComponentEnd: TreeGrid -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

```typescript
export class EmployeesNestedTreeDataItem {
    public constructor(init: Partial<EmployeesNestedTreeDataItem>) {
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
export class EmployeesNestedTreeData extends Array<EmployeesNestedTreeDataItem> {
    public constructor(items: Array<EmployeesNestedTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedTreeDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesNestedTreeDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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


## Limitations

Currently, there are no known limitations for the `RowDraggable`.

## API References

- `RowDraggable`
- `RowDragStart`
- `RowDragEnd`
- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
