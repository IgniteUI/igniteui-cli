---
title: Web Components Grid Exporting - Ignite UI for Web Components
_description: With Ignite UI for Web Components Grid exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
_keywords: Web Components, Grid, Grid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/export-excel
_tocName: Exporting
_premium: true
---

# Web Components Grid Exporting

The Ignite UI for Web Components Grid provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the [`IgcGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexporter.html) inside the grid's toolbar. By default, all export formats are enabled.

## Web Components Exporting Example

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

<!-- ComponentStart: Grid -->

## Export Grouped Data

To export grouped data, group the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) by one or more columns. The browser will download a file named "ExportedDataFile.xlsx" that contains the data from the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component in Excel format, grouped by the selected columns. You can find an example at the beginning of the topic.

<!-- ComponentEnd: Grid -->

## Export Multi Column Headers Grid

You can export [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> [!Note]
> The exported [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) will not be formatted as a table, since Excel tables do not support multiple column headers.

> [!Note]
> [`IgcGridToolbarExporter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexporter.html) is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
>
> - `export-excel`, `export-csv`, `export-pdf`

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

## Export Grid with Frozen Column Headers

By default, the Excel Exporter service exports the grid with scrollable (unfrozen) column headers. In many scenarios you may want to freeze all headers at the top of the exported Excel file so they always stay in view as the user scrolls through the records. To achieve this, set the `ExporterOption` `FreezeHeaders` to `true`.

> [!Note]
> PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

<!-- ComponentStart: Grid, TreeGrid -->

```ts
constructor() {
  var gridToolbarExporter1 = document.getElementById('gridToolbarExporter1') as IgcGridToolbarExporterComponent;
  gridToolbarExporter1.addEventListener("exportStarted", this.webGridExportEventFreezeHeaders);
}

public webGridExportEventFreezeHeaders(args: any): void {
  args.detail.options.freezeHeaders = true;
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

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

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
