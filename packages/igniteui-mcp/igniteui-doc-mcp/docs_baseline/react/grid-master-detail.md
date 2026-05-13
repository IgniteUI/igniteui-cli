---
title: React Master-Detail Grid - Infragistics
_description: Define expandable detail view template for data in rows with Ignite UI React Grid. Useful for displaying master-detail style data in a hierarchical structure.
_keywords: React, {ComponentKeywords}, Ignite UI for React, master detail, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid"]
_tocName: Master-Detail
_premium: true
---

# React Master-Detail Grid

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component supports specifying a detail template that displays additional details for a particular row by expanding/collapsing its content. When specified each record acts as a master, which upon expansion shows a customizable details template with contextual data for the current record.

This mode is useful when you need to display master-detail style data in a hierarchical structure.

## React Grid Master-Detail Example

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrGridMasterDetailContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.customersData}
                    primaryKey="ID"
                    detailTemplate={this.webGridMasterDetailTemplate}
                    ref={this.gridRef}>
                    <IgrColumn
                        field="ContactName"
                        header="Contact"
                        width="250px"
                        resizable={false}>
                    </IgrColumn>
                    <IgrColumn
                        header="Address"
                        field="Address"
                        editable={true}
                        width="250px"
                        resizable={false}>
                    </IgrColumn>
                    <IgrColumn
                        header="Country"
                        field="Country">
                    </IgrColumn>
                    <IgrColumn
                        header="Region"
                        field="Region">
                    </IgrColumn>
                    <IgrColumn
                        header="Phone"
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        header="Fax"
                        field="Fax">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }


    public webGridMasterDetailTemplate = (props: {dataContext: IgrGridMasterDetailContext}) => {
        const data = props.dataContext.implicit;

        return (
            <>
            <div className="contact-container">
                <span><strong>Name:</strong> {data.ContactName}</span>
                <br />
                <span><strong>Title:</strong> {data.ContactTitle}</span>
                <br />
                <span><strong>Company:</strong> {data.Company}</span>
                <br />
            </div>
            </>
        );
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Configuration

To configure the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) to display in master-detail mode you need to specify a template for the grid:

```ts
<IgrGrid detailTemplate={masterDetailTemplate} autoGenerate="false" data={nwindData}>
```

Context of the template is the master record data, so that values from the master record can be displayed in the detail template. For example:

```ts
const masterDetailTemplate = (args: IgrGridMasterDetailContext) => {
    const data = args.implicit;
    return (
        <div className="contact-container">
            <span><strong>Name:</strong> {data.ContactName}</span> <br/>
            <span><strong>Title:</strong> {data.ContactTitle}</span> <br/>
            <span><strong>Company:</strong> {data.CompanyName}</span> <br/>
        </div>
    );
}
```

## API

Additional API methods for controlling the expansion states are also exposed:

- [`expandAll`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#expandAll)
- [`collapseAll`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#collapseAll)
- [`toggleRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#toggleRow)
- [`expandRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#expandRow)
- [`collapseRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#collapseRow)

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

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- `HierarchicalGridRow`
