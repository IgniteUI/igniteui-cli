---
title: "Web Components Grid Row Dragging - Ignite UI for Web Components"
description: Row dragging in Web Components Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
keywords: "Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/row-drag"
llms:
  description: "The Ignite UI for Web Components Row Dragging feature in Web Components Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse."
_componentKey: Grid
_tocName: Row Dragging
_premium: true
---
# Row Dragging in Web Components Grid

The Ignite UI for Web Components Row Dragging feature in Web Components Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent) component and is configurable via the [`IgcGrid.rowDraggable`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=rowDraggable) input.

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

In order to enable row-dragging for your [`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent), all you need to do is set the grid's [`IgcGrid.rowDraggable`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=rowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's [`IgcGrid.rowDragStart`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=rowDragStart) event to fire. Releasing the click at any time will cause [`IgcGrid.rowDragEnd`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=rowDragEnd) event to fire.

```html
<igc-grid row-draggable="true">
</igc-grid>
```

### Drop Areas

First we need to register the `DragDropModule`:

```typescript
import { IgcDragDropModule } from 'igniteui-webcomponents';
// ...
ModuleManager.register(
    IgcDragDropModule
);
```

In this case, our drop-area will be a whole second grid where we'll drop the rows.

```html
<igc-grid id="targetGrid" auto-generate="false" primary-key="ID">
</igc-grid>
```

```ts
constructor() {
    var targetGrid = this.targetGrid = document.getElementById('targetGrid') as IgcGridComponent;

    this._bind = () => {
        targetGrid.data = this.data;
        targetGrid.emptyGridTemplate = this.dragHereTemplate;
        targetGrid.enter = this.onEnterAllowed;
        targetGrid.leave = this.onLeaveAllowed;
        targetGrid.dropped = this.onDropAllowed;
    }
    this._bind();
}

public dragHereTemplate = (ctx: IgcGridEmptyTemplateContext) => {
    return html`Drop a row to add it to the grid`;
}
```

```typescript
export class IgcGridRowDragComponent {
    constructor() {
        var sourceGrid = this.sourceGrid = document.getElementById('sourceGrid') as IgcGridComponent;
        var targetGrid = this.targetGrid = document.getElementById('targetGrid') as IgcGridComponent;
    }

    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
    }
}
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

    this._bind = () => {
        grid.rowDragGhost = this.rowDragGhostTemplate;
    }
    this._bind();
}

public rowDragGhostTemplate = (ctx: IgcGridRowDragGhostContext) => {
    return html`<igc-icon fontSet="material">arrow_right_alt</igc-icon>`;
}

```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's `DragIndicatorIconTemplate`. In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

Once our drop handlers are properly configured, we're good to go!

The result of the configuration can be seem below:

#### Example Demo



## Application Demo

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

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

**Note:** 
Make sure that there is a [`IgcGrid.primaryKey`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=primaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`IgcGrid.rowDraggable`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=rowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the `Data` array

Below, you can see this implemented:

```typescript
public webGridReorderRowHandler(args: CustomEvent<IgcRowDragEndEventArgs>): void {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const grid = document.getElementsByTagName["igc-grid"](0) as any;
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

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

Holding onto the drag icon will allow you to move a row anywhere in the grid:

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

## Limitations

Currently, there are no known limitations for the [`IgcGrid.rowDraggable`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent&member=rowDraggable).

## API References
[`IgcGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcGridComponent)
## Additional Resources
Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
