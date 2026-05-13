---
title: React Grid Column Selection - Ignite UI for React
_description: Learn how to configure column selection with Ignite UI for React Grid. This makes grid interactions much easier and faster than ever.
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics, column selection
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-selection
_tocName: Column Selection
_premium: true
---

# React Grid Column Selection Overview

The React Grid Column Selection feature in Ignite UI for React offers a simplified and Excel-like way to select and highlight an entire column with a single click. It can be enabled through the [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection) input. Thanks to the rich API, the feature allows for easy manipulation of the selection state, data extraction from the selected fractions, data analysis operations, and visualizations.

## React Grid Column Selection Example

The sample below demonstrates the three types of [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s **column selection** behavior. Use the column selection dropdown below to enable each of the available selection modes.

<!-- ComponentStart: Grid -->

\*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private columnSelectionEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ColumnSelection"
                        name="ColumnSelectionEditor"
                        valueType="EnumValue"
                        dropDownNames={["None", "Single", "Multiple", "MultipleCascade"]}
                        dropDownValues={["None", "Single", "Multiple", "MultipleCascade"]}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnSelection="single">
                    <IgrColumn
                        field="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        selectable={false}>
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Basic Usage

The column selection feature can be enabled through the [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection) input, which takes `GridSelectionMode` values.

## Interactions

The default selection mode is `None`. If set to `Single` or `Multiple`, all of the presented columns will be [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!Note]
> The [Multi Column Headers](multi-column-headers.md) feature does not reflect on the [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable) input. The `ColumnGroupComponent` is [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected) if all of its [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable) descendants are [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected).

<!-- ComponentStart: Grid -->

\*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumnGroup, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnGroupModule
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
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnSelection="multiple">
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            header="Company">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                header="Name"
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                header="Title"
                                selectable={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumn
                        field="ID">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="Country Information">
                        <IgrColumnGroup
                            header="Region Information">
                            <IgrColumn
                                field="Country"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="City">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode">
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="City Information">
                            <IgrColumn
                                field="Fax"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                selectable={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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

## Keyboard Combinations

> [!Note]
> The keyboard combinations are available only when the grid [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:

- Multi-column selection - holding <kbd>CTRL</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API Manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected) by setting the corresponding **setter**.

> [!Note]
> The above statement also applies to the `ColumnGroupComponent`, except that when the [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [API References](#api-references) section.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a `class` for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
```

### Demo

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

#grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
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
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnSelection="multiple">
                    <IgrColumn
                        field="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        selectable={false}>
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

## API References

The column selection UI has a few more APIs to explore, which are listed below.

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup)

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) properties:

- [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection)
- [`selectedColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectedColumns)
- [`selectColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectColumns)
- [`deselectColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectColumns)
- [`selectAllColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectAllColumns)
- [`deselectAllColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectAllColumns)

[`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) properties:

- [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable)
- [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected)

[`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) properties:

- [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable)
- [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected)

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) events:

- `OnColumnsSelectionChange`

## Additional Resources

<!-- ComponentStart: Grid -->

- [Selection](selection.md)
- [Cell Selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
