---
title: Web Components Master-Detail Grid - Infragistics
_description: Define expandable detail view template for data in rows with Ignite UI Web Components Grid. Useful for displaying master-detail style data in a hierarchical structure.
_keywords: Web Components, {ComponentKeywords}, Ignite UI for Web Components, master detail, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid"]
_tocName: Master-Detail
_premium: true
---

# Web Components Master-Detail Grid

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component supports specifying a detail template that displays additional details for a particular row by expanding/collapsing its content. When specified each record acts as a master, which upon expansion shows a customizable details template with contextual data for the current record.

This mode is useful when you need to display master-detail style data in a hierarchical structure.

## Web Components Grid Master-Detail Example

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

## Configuration

To configure the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) to display in master-detail mode you need to specify a template for the grid:

```ts
constructor() {
  var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
  this._bind = () => {
    grid.data = this.customersData;
    grid.detailTemplate = this.masterDetailTemplate;
  }
  this._bind();
}
```

Context of the template is the master record data, so that values from the master record can be displayed in the detail template. For example:

```ts
    public masterDetailTemplate = (ctx: IgcGridMasterDetailContext) => {
        var data = ctx.implicit;
        return html` <div class="contact-container">
        <span><strong>Name:</strong> ${data.ContactName}</span> <br/>
        <span><strong>Title:</strong> ${data.ContactTitle}</span> <br/>
        <span><strong>Company:</strong> ${data.CompanyName}</span> <br/>
    </div>`;
    }
```

## API

Additional API methods for controlling the expansion states are also exposed:

- [`expandAll`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#expandAll)
- [`collapseAll`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#collapseAll)
- [`toggleRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#toggleRow)
- [`expandRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#expandRow)
- [`collapseRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#collapseRow)

## Keyboard navigation

- When focus is on a detail row:

  - <kbd>🡑</kbd> - navigates one row up, focusing a cell from the previous row.
  - <kbd>🡓</kbd> - navigates one row down, focusing a cell from the next row.
  - <kbd>TAB</kbd> - Allows focus to move to the next focusable element inside the template if there are focusable elements, otherwise moves to the next grid row.
  - <kbd>SHIFT</kbd> + <kbd><kbd>TAB</kbd> - moves the focus to the previous row.

- When focus is on a data row with expander:
  - <kbd>ALT</kbd> + <kbd>🡒</kbd> or <kbd>ALT</kbd> + <kbd>🡓</kbd> - expands the row.
  - <kbd>ALT</kbd> + <kbd>🡐</kbd> or <kbd>ALT</kbd> + <kbd>🡑</kbd> - collapses the row.

## Known Issues and Limitations

|Known Limitations| Description|
| --- | --- |
| Tab navigation inside the custom detail template may not update the master grid scroll position in case the next focused element is outside the visible view port.| Tab navigation inside the custom detail template is left up to the browser. |
| Details template will not be exported to Excel.| As the details template can contain any type of content we cannot export it to excel out of the box.|
| The search feature will not highlight elements from the details template. | |

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- `HierarchicalGridRow`
