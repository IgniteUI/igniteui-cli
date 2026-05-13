---
title: React Tree Grid Column Resizing - Ignite UI for React
_description: Start using React Tree Grid Column Resizing in order to change the grid column width in an instant. React drag resizing has never been so easy. Try for free!
_keywords: React, Tree Grid, IgrTreeGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-resizing
_tocName: Column Resizing
_premium: true
---

# React  Tree Grid Column Resizing Overview

The Ignite UI for React Column Resizing feature in React Tree Grid allows users to easily adjust the width of the columns of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html). By default, they will see a temporary resize indicator while the drag resizing operation is in effect. There are several resizing options available - Resizing Columns in Pixels/Percentages, Restrict Column Resizing, Auto-Size Columns on Double Click, and Auto-Size Columns on Initialization.

## React  Tree Grid Column Resizing Example

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
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        resizable={true}
                        minWidth="60"
                        maxWidth="250"
                        width="220">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

**Column resizing** is also enabled per-column level, meaning that the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) can have a mix of resizable and non-resizable columns. This is done via the [`resizable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#resizable) input of the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html).

```tsx
<IgrColumn field="ID" resizable={true} width="100px"></IgrColumn>
```

<!-- ComponentEnd: Grid, TreeGrid -->

You can subscribe to the `ColumnResized` event of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) object, are exposed through the event arguments.

<!-- ComponentStart: TreeGrid -->

```tsx
const onResize = (event: IgrColumnResizeEventArgs) => {
  const col = event.detail.column;
  const pWidth = event.detail.prevWidth;
  const nWidth = event.detail.newWidth;
}

<IgrTreeGrid data={data} autoGenerate={false} primaryKey="ID" foreignKey="ParentID" onColumnResized={onResize}>
    <IgrColumn field="Title" width="100px" resizable={true}></IgrColumn>
    <IgrColumn field="HireDate" width="100px" resizable={true}></IgrColumn>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

## Resizing Columns in Pixels/Percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the **Column Resizing** feature. By default if a column does not have width set, it fits the available space with width set in pixels.

This means that the following configuration is possible:

```tsx
<IgrTreeGrid data={data} autoGenerate={false} primaryKey="ID" foreignKey="ParentID" onColumnResized={onResize}>
    <IgrColumn field="Title" resizable={true} width="10%"></IgrColumn>
    <IgrColumn field="HireDate" resizable={true} width="100px"></IgrColumn>
    <IgrColumn field="Age" dataType="number" resizable={true}></IgrColumn>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

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
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        header="Name"
                        dataType="string"
                        resizable={true}
                        width="220px"
                        minWidth="200px"
                        maxWidth="250px">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Title"
                        dataType="string"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="string"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        resizable={true}
                        width="auto">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
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
<IgrTreeGrid className="grid"></IgrTreeGrid>
```

Then set the related CSS property for that class:

```css
.grid {
    --ig-grid-resize-line-color: #f35b04;
}
```

### Demo

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
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
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

#grid {
    --ig-grid-resize-line-color: #f35b04;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
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
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        resizable={true}
                        minWidth="60"
                        maxWidth="250"
                        width="220">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
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
- [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)

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
