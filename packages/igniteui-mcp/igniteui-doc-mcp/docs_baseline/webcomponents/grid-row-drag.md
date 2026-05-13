---
title: Web Components Grid Row Dragging - Ignite UI for Web Components
_description: Row dragging in Web Components Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in Web Components Grid

The Ignite UI for Web Components Row Dragging feature in Web Components Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component and is configurable via the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowDraggable) input.

## Web Components Grid Row Drag Example

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }
    
    public ID: string;
    public CompanyName: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: string;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor() {
        super();
        this.push(new CustomersDataItem(
        {
            ID: `ALFKI`,
            CompanyName: `Alfreds Futterkiste`,
            ContactName: `Maria Anders`,
            ContactTitle: `Sales Representative`,
            Address: `Obere Str. 57`,
            City: `Berlin`,
            Region: `East`,
            PostalCode: `12209`,
            Country: `Germany`,
            Phone: `030-0074321`,
            Fax: `030-0076545`
        }));
        this.push(new CustomersDataItem(
        {
            ID: `ANATR`,
            CompanyName: `Ana Trujillo Emparedados y helados`,
            ContactName: `Ana Trujillo`,
            ContactTitle: `Owner`,
            Address: `Avda. de la Constitución 2222`,
            City: `México D.F.`,
            Region: `South`,
            PostalCode: `05021`,
            Country: `Mexico`,
            Phone: `(5) 555-4729`,
            Fax: `(5) 555-3745`
        }));
        this.push(new CustomersDataItem(
        {
            ID: `ANTON`,
            CompanyName: `Antonio Moreno Taquería`,
            ContactName: `Antonio Moreno`,
            ContactTitle: `Owner`,
            Address: `Mataderos 2312`,
            City: `México D.F.`,
            Region: `South`,
            PostalCode: `05023`,
            Country: `Mexico`,
            Phone: `(5) 555-3932`,
            Fax: `(5) 555-3745`
        }));
        // ... 24 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Configuration

In order to enable row-dragging for your [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), all you need to do is set the grid's [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```html
<igc-grid row-draggable="true">
</igc-grid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

```html
<igc-grid row-draggable="true" id="grid">
</igc-grid>
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

<!-- ComponentEnd: Grid -->

## Application Demo

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

<!-- ComponentStart: Grid -->

```html
<igc-grid id="grid" row-draggable="true" primary-key="ID">
</igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.addEventListener("rowDragEnd", this.webGridReorderRowHandler)
}
```

<!-- ComponentEnd: Grid -->

> [!Note]
> Make sure that there is a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: Grid -->

- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`data`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#data) array

<!-- ComponentEnd: Grid -->

Below, you can see this implemented:

<!-- ComponentStart: Grid -->

```typescript
public webGridReorderRowHandler(args: CustomEvent<IgcRowDragEndEventArgs>): void {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName("igc-grid")[0] as any;
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
    const currRowIndex = this.getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    grid.deleteRow(args.detail.dragData.key);
    grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
}

public getCurrentRowIndex(rowList: any[], cursorPosition) {
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

<!-- ComponentEnd: Grid -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: Grid -->

Holding onto the drag icon will allow you to move a row anywhere in the grid:

<!-- ComponentEnd: Grid -->

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                // ... 24 more items
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

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Limitations

Currently, there are no known limitations for the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowDraggable).

## API References

- [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowDraggable)
- `RowDragStart`
- `RowDragEnd`
- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
