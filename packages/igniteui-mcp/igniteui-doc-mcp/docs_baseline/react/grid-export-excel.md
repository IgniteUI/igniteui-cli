---
title: React Grid Exporting - Ignite UI for React
_description: With Ignite UI for React Grid exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
_keywords: React, Grid, Grid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/export-excel
_tocName: Exporting
_premium: true
---

# React Grid Exporting

<!-- Blazor, React, WebComponents -->

The Ignite UI for React Grid provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the [`IgrGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarexporter.html) inside the grid's toolbar. By default, all export formats are enabled.

<!-- end: Blazor, React, WebComponents  -->

## React Exporting Example

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipName: `Jefferson Home`, ShipAddress: `124 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 60098, ShipCountry: `USA`, ShipRegion: `South East`, ShipperName: `Federal Shipping`, CustomerID: 1000, CustomerName: `Martin Jefferson`, CustomerFirstName: `Martin`, CustomerLastName: `Jefferson`, CustomerAddress: `124 Wall Street, Miami, USA, 60098`, Salesperson: `Nancy Jefferson`, OrderID: 1931, OrderDate: `3/14/2022`, ProductID: 189, ProductName: `IPad`, UnitPrice: 16150.61, Quantity: 3, ExtendedPrice: 48451.83, Freight: 980.61, Discontinued: false, Region: `South East`, Address: `124 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 60098 }),
                new InvoicesDataItem({ ShipName: `Black Home`, ShipAddress: `162 Main Street`, ShipCity: `Miami`, ShipPostalCode: 80193, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1001, CustomerName: `Anna Black`, CustomerFirstName: `Anna`, CustomerLastName: `Black`, CustomerAddress: `162 Main Street, Miami, USA, 80193`, Salesperson: `Anna Smith`, OrderID: 1163, OrderDate: `5/22/2022`, ProductID: 138, ProductName: `Mac Book Pro`, UnitPrice: 18520.59, Quantity: 4, ExtendedPrice: 74082.36, Freight: 850.59, Discontinued: false, Region: `West`, Address: `162 Main Street`, City: `Miami`, Country: `USA`, PostalCode: 80193 }),
                new InvoicesDataItem({ ShipName: `Watson Townhouse`, ShipAddress: `164 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 50111, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1002, CustomerName: `Max Watson`, CustomerFirstName: `Max`, CustomerLastName: `Watson`, CustomerAddress: `164 Wall Street, Miami, USA, 50111`, Salesperson: `Martin Watson`, OrderID: 1230, OrderDate: `2/9/2022`, ProductID: 118, ProductName: `Mac Book Air`, UnitPrice: 25310.39, Quantity: 3, ExtendedPrice: 75931.17, Freight: 210.39, Discontinued: false, Region: `West`, Address: `164 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 50111 }),
                // ... 496 more items
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

import { IgrGridModule, IgrGridToolbarModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrGridToolbarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private _groupingExpression1: IgrGroupingExpression[] | null = null;
    public get groupingExpression1(): IgrGroupingExpression[] {
        if (this._groupingExpression1 == null)
        {
            let groupingExpression1: IgrGroupingExpression[] = [];
            var groupingExpression2: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;
            groupingExpression2.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression2)
            var groupingExpression3: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression3.fieldName = "ShipCity";
            groupingExpression3.ignoreCase = false;
            groupingExpression3.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression3)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
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
                    data={this.invoicesData}
                    ref={this.gridRef}
                    id="grid"
                    groupingExpressions={this.groupingExpression1}
                    hideGroupedColumns={true}>
                    <IgrGridToolbar>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarExporter>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipAddress"
                        header="Ship Address"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentStart: Grid -->

## Export Grouped Data

To export grouped data, group the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) by one or more columns. The browser will download a file named "ExportedDataFile.xlsx" that contains the data from the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component in Excel format, grouped by the selected columns. You can find an example at the beginning of the topic.

<!-- ComponentEnd: Grid -->

## Export Multi Column Headers Grid

You can export [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> \[!Note]
> The exported [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) will not be formatted as a table, since Excel tables do not support multiple column headers.

> \[!Note]
> [`IgrGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridtoolbarexporter.html) is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
>
> <!-- Angular, React -->
>
> - `exportExcel`, `exportCsv`, `exportPdf`
>
> <!-- end: Angular, React -->

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
        --ig-size: var(--ig-size-small);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrGridToolbarModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebGridToolbarDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrExporterEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrGridToolbarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private generalInformation: IgrColumnGroup
    private personalDetails: IgrColumnGroup
    private addressInformation: IgrColumnGroup
    private location: IgrColumnGroup
    private contactInformation: IgrColumnGroup

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridExportEventMultiColumnHeaders = this.webGridExportEventMultiColumnHeaders.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.customersData}
                    moving={true}
                    allowFiltering={true}>
                    <IgrGridToolbar>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarHiding>
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning>
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarExporter
                                exportCSV={false}
                                exportExcel={true}
                                exportPDF={true}
                                onExportStarted={this.webGridExportEventMultiColumnHeaders}>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        resizable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information"
                        collapsible={true}
                        expanded={true}>
                        <IgrColumn
                            field="Company"
                            visibleWhenCollapsed={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details"
                            collapsible={true}
                            expanded={false}
                            visibleWhenCollapsed={false}>
                            <IgrColumn
                                field="ContactName">
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location"
                            collapsible={true}
                            expanded={false}
                            visibleWhenCollapsed={true}>
                            <IgrColumn
                                field="Country"
                                visibleWhenCollapsed={true}
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Region"
                                visibleWhenCollapsed={false}
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                visibleWhenCollapsed={false}
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                visibleWhenCollapsed={false}
                                hidden={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone">
                            </IgrColumn>
                            <IgrColumn
                                field="Fax">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode">
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebGridToolbarDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridExportEventMultiColumnHeaders(args: IgrExporterEventArgs): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Export Grid with Frozen Column Headers

By default, the Excel Exporter service exports the grid with scrollable (unfrozen) column headers. In many scenarios you may want to freeze all headers at the top of the exported Excel file so they always stay in view as the user scrolls through the records. To achieve this, set the `ExporterOption` `FreezeHeaders` to `true`.

> \[!Note]
> PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

<!-- React -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
function exportEventFreezeHeaders(args: IgrExporterEventArgs) {
    args.detail.options.freezeHeaders = true;
  }

<IgrGridToolbar>
  <IgrGridToolbarActions>
    <IgrGridToolbarExporter onExportStarted={exportEventFreezeHeaders}></IgrGridToolbarExporter>
  </IgrGridToolbarActions>
</IgrGridToolbar>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: React -->

<!-- ComponentEnd: Grid, TreeGrid -->

## Known Limitations

<!-- ComponentStart: Grid -->

|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

<!-- ComponentEnd: Grid -->

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
