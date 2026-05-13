---
title: Web Components Tree Grid Column Pinning - Ignite UI for Web Components
_description: Want to use the Pinning feature of the Ignite UI for Web Components when you develop your next app? Easily lock column or change column order with rich API.
_keywords: Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# Web Components Tree Grid Column Pinning

The Ignite UI for Web Components Column Pinning feature in Web Components Tree Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). There’s an integrated UI for Column Pinning, accessible via the Web Components Tree Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## Web Components Tree Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
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
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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

## Column Pinning API

Column pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pinned) property of the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html). Pinned columns are rendered on the left side of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) body.

```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="false">
    <igc-column field="Name" pinned="true"></igc-column>
    <igc-column field="Title"></igc-column>
    <igc-column field="ID"></igc-column>
</igc-tree-grid>
```

<!-- ComponentEnd: TreeGrid -->

You may also use the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s [`pinColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#unpinColumn) methods of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) to pin or unpin columns by their field name:

<!-- ComponentStart: TreeGrid -->

```typescript
this.treeGrid.pinColumn('Title');
this.treeGrid.unpinColumn('Name');
```

<!-- ComponentEnd: TreeGrid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents, React -->

```html
<igc-tree-grid id="dataGrid" auto-generate="true"></igc-tree-grid>
```

```typescript
constructor() {
    var dataGrid = document.getElementById('dataGrid') as IgcTreeGridComponent;
    dataGrid.data = this.data;
    dataGrid.addEventListener("columnPin", this.columnPinning);
}
```

```typescript
public columnPinning(event) {
    if (event.detail.column.field === 'Name') {
        event.detail.insertAtIndex = 0;
    }
}
```

## Pinning Position

You can change the column pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.

```html
<igc-tree-grid id="dataGrid" auto-generate="true"></igc-tree-grid>
```

```typescript
var grid = document.getElementById('dataGrid') as IgcTreeGridComponent;
grid.pinning = { columns: ColumnPinningPosition.End };
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
```

### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

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

## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="false" width="100%" height="620px">
    <igc-column id="Name" field="Name" data-type="String" width="250px"></igc-column>
    <igc-column id="Title" field="Title" data-type="String" width="300px"></igc-column>
    <igc-column id="ID" field="ID" data-type="Number" width="200px"></igc-column>
    <igc-column id="HireDate" field="HireDate" header="Hire Date" data-type="Date" width="200px"></igc-column>
    <igc-column id="Age" field="Age" data-type="Number" width="200px"></igc-column>
    <igc-column id="Address" field="Address" data-type="String" width="200px"></igc-column>
    <igc-column id="City" field="City" data-type="String" width="200px"></igc-column>
    <igc-column id="Country" field="Country" data-type="String" width="200px"></igc-column>
    <igc-column id="Fax" field="Fax" data-type="string" width="200px"></igc-column>
    <igc-column id="PostalCode" field="PostalCode" header="Postal Code" data-type="String" width="200px"></igc-column>
    <igc-column id="Phone" field="Phone" data-type="String" width="200px"></igc-column>
</igc-tree-grid>
```

```ts
constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    var Name = document.getElementById('Name') as IgcColumnComponent;
    var Title = document.getElementById('Title') as IgcColumnComponent;
    var ID = document.getElementById('ID') as IgcColumnComponent;
    var HireDate = document.getElementById('HireDate') as IgcColumnComponent;
    var Age = document.getElementById('Age') as IgcColumnComponent;
    var Address = document.getElementById('Address') as IgcColumnComponent;
    var City = document.getElementById('City') as IgcColumnComponent;
    var Country = document.getElementById('Country') as IgcColumnComponent;
    var Fax = document.getElementById('Fax') as IgcColumnComponent;
    var PostalCode = document.getElementById('PostalCode') as IgcColumnComponent;
    var Phone = document.getElementById('Phone') as IgcColumnComponent;

    treeGrid.data = this.data;
    Name.headerTemplate = this.pinHeaderTemplate;
    Title.headerTemplate = this.pinHeaderTemplate;
    ID.headerTemplate = this.pinHeaderTemplate;
    HireDate.headerTemplate = this.pinHeaderTemplate;
    Age.headerTemplate = this.pinHeaderTemplate;
    Address.headerTemplate = this.pinHeaderTemplate;
    City.headerTemplate = this.pinHeaderTemplate;
    Country.headerTemplate = this.pinHeaderTemplate;
    Fax.headerTemplate = this.pinHeaderTemplate;
    PostalCode.headerTemplate = this.pinHeaderTemplate;
    Phone.headerTemplate = this.pinHeaderTemplate;
}

public pinHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <div class="title-inner">
            <span style="float:left">${ctx.cell.column.header}</span>
            <igc-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" @click="${() => toggleColumn(ctx.cell.column)}"></igx-icon>
        </div>
    `;
}
```

<!-- ComponentEnd: TreeGrid -->

On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: IgcColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```

### Demo

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
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
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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

## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```html
<igc-tree-grid id="grid"></igc-tree-grid>
```

Then set the related CSS properties to this class:

```css
#grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-pinned-border-style: double;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
```

### Demo

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
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
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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

#treeGrid {
	--pinned-border-width: 5px;
    --pinned-border-style: double;
    --pinned-border-color: #FFCD0F;
	--cell-active-border-color: #FFCD0F;
}
```

<!-- end: WebComponents, Blazor -->

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
