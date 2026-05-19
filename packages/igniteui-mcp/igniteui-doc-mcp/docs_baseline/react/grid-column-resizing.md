---
title: React Grid Column Resizing - Ignite UI for React
_description: Start using React Grid Column Resizing in order to change the grid column width in an instant. React drag resizing has never been so easy. Try for free!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-resizing
_tocName: Column Resizing
_premium: true
---

# React  Grid Column Resizing Overview

The Ignite UI for React Column Resizing feature in React Grid allows users to easily adjust the width of the columns of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). By default, they will see a temporary resize indicator while the drag resizing operation is in effect. There are several resizing options available - Resizing Columns in Pixels/Percentages, Restrict Column Resizing, Auto-Size Columns on Double Click, and Auto-Size Columns on Initialization.

## React  Grid Column Resizing Example

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
import { IgrGridBaseDirective, IgrColumnResizeEventArgs } from 'igniteui-react-grids';

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
        this.webGridColumnResized = this.webGridColumnResized.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.customersData}
                    id="grid"
                    ref={this.gridRef}
                    onColumnResized={this.webGridColumnResized}>
                    <IgrColumn
                        field="ID"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        minWidth="60px"
                        maxWidth="230px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        resizable={true}>
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


    public webGridColumnResized(args: IgrColumnResizeEventArgs): void {
        var col = args.detail.column;
        var pWidth = args.detail.prevWidth;
        var nWidth = args.detail.newWidth;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

**Column resizing** is also enabled per-column level, meaning that the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) can have a mix of resizable and non-resizable columns. This is done via the [`resizable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#resizable) input of the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html).

```tsx
<IgrColumn field="ID" resizable={true} width="100px"></IgrColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

You can subscribe to the `ColumnResized` event of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) object, are exposed through the event arguments.

```tsx
const onResize = (event: IgrColumnResizeEventArgs) => {
  const col = event.detail.column;
  const pWidth = event.detail.prevWidth;
  const nWidth = event.detail.newWidth;
}

<IgrGrid id="grid" autoGenerate={false} onColumnResized={onResize}>
    <IgrColumn field="ID" width="100px" resizable={true}></IgrColumn>
    <IgrColumn field="CompanyName" width="100px" resizable={true}></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

## Resizing Columns in Pixels/Percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the **Column Resizing** feature. By default if a column does not have width set, it fits the available space with width set in pixels.

This means that the following configuration is possible:

```tsx
<IgrGrid id="grid" autoGenerate={false}>
    <IgrColumn field="ID" width="10%" resizable={true}></IgrColumn>
    <IgrColumn field="CompanyName" width="100px" resizable={true}></IgrColumn>
    <IgrColumn field="ContactTitle" resizable={true}></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict Column Resizing

You can also configure the minimum and maximum allowable column widths. This is done via the [`minWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#minWidth) and [`maxWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#maxWidth) inputs of the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`minWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#minWidth) and [`maxWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#maxWidth).

```tsx
<IgrColumn field="ID" width="100px" resizable={true}
            minWidth="60px" maxWidth="230px"></IgrColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.

This means the following configurations are possible:

```tsx
<IgrColumn field="ID" width="10%" resizable={true}
            minWidth="60px" maxWidth="230px"></IgrColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

or

```tsx
<IgrColumn field="ID" width="100px" resizable={true}
            minWidth="5%" maxWidth="15%"></IgrColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

## Auto-Size Columns on Double Click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`maxWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#maxWidth) is set on that column and the new width exceeds that [`maxWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#maxWidth) value. In this case the column will be sized according to preset [`maxWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#maxWidth) value.

You can also auto-size a column dynamically using the exposed [`autosize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#autosize) method on [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html).

```tsx
const column = grid.getColumnByName('ID');
column.autosize();
```

<!-- ComponentEnd: Grid, TreeGrid -->

## Auto-Size Columns on Initialization

Each column can be set to auto-size on initialization by setting [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#width) to 'auto':

```tsx
<IgrColumn width='auto'>
```

When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.

This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.

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
                    primaryKey="ProductID"
                    ref={this.gridRef}>
                    <IgrColumn
                        field="ID"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        width="auto"
                        resizable={true}>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change the color of the resize handle, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS property for that class:

```css
.grid {
    --ig-grid-resize-line-color: #f35b04;
}
```

### Demo

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
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
    --ig-grid-resize-line-color: #f35b04;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { AthletesDataItem, AthletesData } from './AthletesData';

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
                    ref={this.gridRef}
                    id="grid"
                    data={this.athletesData}>
                    <IgrColumn
                        field="Id"
                        header="Rank"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Athlete"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats per Minute"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Track Progress"
                        resizable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References

- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
