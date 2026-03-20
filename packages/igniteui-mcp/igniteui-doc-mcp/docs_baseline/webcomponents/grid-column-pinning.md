---
title: Web Components Grid Column Pinning - Ignite UI for Web Components
_description: Want to use the Pinning feature of the Ignite UI for Web Components when you develop your next app? Easily lock column or change column order with rich API.
_keywords: Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

# Web Components Grid Column Pinning

The Ignite UI for Web Components Column Pinning feature in Web Components Grid enables developers to lock specific columns in a desired order, ensuring visibility all the time even when users scroll horizontally through the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). There’s an integrated UI for Column Pinning, accessible via the Web Components Grid toolbar. Additionally, developers have the flexibility to build a custom user interface which changes the pin state of the columns.

## Web Components Grid Column Pinning Example

This example demonstrates how you can pin a column or multiple columns to the left or right side of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Column Pinning API

Column pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pinned) property of the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html). Pinned columns are rendered on the left side of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) by default and stay fixed through horizontal scrolling of the unpinned columns in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) body.

```html
<igc-grid id="grid1" width="700px" auto-generate="false">
    <igc-column field="Name" pinned="true"></igc-column>
    <igc-column field="AthleteNumber"></igc-column>
    <igc-column field="TrackProgress"></igc-column>
    <igc-paginator per-page="10">
    </igc-paginator>
</igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
}
```

<!-- ComponentEnd: Grid -->

You may also use the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)'s [`pinColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#pinColumn) or [`unpinColumn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#unpinColumn) methods of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) to pin or unpin columns by their field name:

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->

```typescript
this.grid.pinColumn('AthleteNumber');
this.grid.unpinColumn('Name');
```

<!-- ComponentEnd: Grid -->

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

<!-- Angular, React, WebComponents -->

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the `ColumnPin` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- end: Angular, React, WebComponents, React -->

<!-- WebComponents -->

```html
<igc-grid id="dataGrid" auto-generate="true"></igc-grid>
```

```typescript
constructor() {
    var dataGrid = document.getElementById('dataGrid') as IgcGridComponent;
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

<!-- WebComponents -->

```html
<igc-grid id="dataGrid" auto-generate="true"></igc-grid>
```

```typescript
var grid = document.getElementById('dataGrid') as IgcGridComponent;
grid.pinning = { columns: ColumnPinningPosition.End };
```

### Demo

```typescript
export class AthletesDataExtendedItem {
    public constructor(init: Partial<AthletesDataExtendedItem>) {
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
    public FirstPlaces: number;
    public SecondPlaces: number;
    public ThirdPlaces: number;
    public RegistrationDate: string;
    public Birthday: string;
    public Sponsor: string;
    public Agent: string;
    public AgentContact: string;
    public AgentPhone: string;

}
export class AthletesDataExtended extends Array<AthletesDataExtendedItem> {
    public constructor(items: Array<AthletesDataExtendedItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataExtendedItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 4, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana`, FirstPlaces: 2, SecondPlaces: 3, ThirdPlaces: 0, RegistrationDate: `2017-08-07T07:35:06.000Z`, Birthday: `1979-03-09T22:00:00.000Z`, Sponsor: `Buzzdog`, Agent: `Yoshiko Trinke`, AgentContact: `ytrinke1x@symantec.com`, AgentPhone: `+1-615-409-3097` }),
                new AthletesDataExtendedItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/11.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 4, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway`, FirstPlaces: 1, SecondPlaces: 0, ThirdPlaces: 3, RegistrationDate: `2017-03-22T06:55:46.000Z`, Birthday: `1982-04-29T21:00:00.000Z`, Sponsor: `Realcube`, Agent: `Celestina Noweak`, AgentContact: `cnoweak3q@nhs.uk`, AgentPhone: `+1-971-806-8372` }),
                new AthletesDataExtendedItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 2, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan`, FirstPlaces: 1, SecondPlaces: 3, ThirdPlaces: 4, RegistrationDate: `2017-06-29T01:58:27.000Z`, Birthday: `1992-05-15T21:00:00.000Z`, Sponsor: `Twinte`, Agent: `Karol Emett`, AgentContact: `kemetth@ocn.ne.jp`, AgentPhone: `+1-215-959-2505` }),
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
```


<!-- React, WebComponents, Blazor -->

### Column Pinning on Both Sides

Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.

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


<!-- end: React, WebComponents, Blazor -->

## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.

This can be done by creating a header template for the columns with a custom icon.

```html
<igc-grid id="grid1" width="100%" height="500px" auto-generate="false">
    <igc-column id="Name" field="Name" data-type="String" width="250px"></igc-column>
    <igc-column id="Title" field="Title" data-type="String" width="300px"></igc-column>
    <igc-column id="ID" field="ID" data-type="Number" width="200px"></igc-column>
    <igc-column id="HireDate" field="HireDate" header="Hire Date" data-type="Date" width="200px"></igc-column>
    <igc-column id="Age" field="Age" data-type="Number" width="200px"></igc-column>
    <igc-column id="Address" field="Address" data-type="String" width="200px"></igc-column>
    <igc-column id="City" field="City" data-type="String" width="200px"></igc-column>
    <igc-column id="Country" field="Country" data-type="String" width="200px"></igc-column>
    <igc-column id="Fax" field="Fax" data-type="String" width="200px"></igc-column>
    <igc-column id="PostalCode" field="PostalCode" header="Postal Code" data-type="String" width="200px"></igc-column>
    <igc-column id="Phone" field="Phone" data-type="String" width="200px"></igc-column>
</igc-grid>
```

```ts
constructor() {
    var grid1 = document.getElementById('grid1') as IgcGridComponent;
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

    grid.data = this.data;
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

<!-- ComponentEnd: Grid -->

On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: IgcColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
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
```


## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set an `ID` for the grid first:

```html
<igc-grid id="grid"></igc-grid>
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
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-pinned-border-style: double;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
```


<!-- end: WebComponents, Blazor -->

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

## Additional Resources

<!-- ComponentStart: Grid, HierarchicalGrid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid, HierarchicalGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
