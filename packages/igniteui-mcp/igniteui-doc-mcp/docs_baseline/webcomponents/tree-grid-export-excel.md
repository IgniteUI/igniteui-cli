---
title: Web Components Tree Grid Exporting - Ignite UI for Web Components
_description: With Ignite UI for Web Components Tree Grid exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
_keywords: Web Components, Tree Grid, Tree Grid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/export-excel
_tocName: Exporting
_premium: true
---

# Web Components Tree Grid Exporting

The Ignite UI for Web Components Tree Grid provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the [`IgcGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexportercomponent.html) inside the grid's toolbar. By default, all export formats are enabled.

## Web Components Exporting Example

```typescript
export class EmployeesNestedDataItem {
    public constructor(init: Partial<EmployeesNestedDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public Name: string;
    public Title: string;
    public Employees: EmployeesNestedDataItem_EmployeesItem[];

}
export class EmployeesNestedDataItem_EmployeesItem {
    public constructor(init: Partial<EmployeesNestedDataItem_EmployeesItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Title: string;

}
export class EmployeesNestedData extends Array<EmployeesNestedDataItem> {
    public constructor(items: Array<EmployeesNestedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedDataItem({ ID: 1, Age: 55, Salary: 80000, Productivity: 90, City: `Berlin`, Country: `Germany`, Phone: `609-202-505`, HireDate: `2008-03-20`, Name: `John Winchester`, Title: `Development Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 43, Salary: 70000, Productivity: 80, City: `Hamburg`, Country: `Germany`, Phone: `609-444-555`, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 60000, Productivity: 80, City: `Munich`, Country: `Germany`, Phone: `609-333-444`, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, Title: `Senior Software Developer` }),
                // ... 20 more items
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


## Export Multi Column Headers Grid

You can export [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` `IgnoreMultiColumnHeaders` to `true`.

> [!Note]
> The exported [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) will not be formatted as a table, since Excel tables do not support multiple column headers.

> [!Note]
> [`IgcGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridtoolbarexportercomponent.html) is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
>
> - `export-excel`, `export-csv`, `export-pdf`

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

<!-- ComponentStart: TreeGrid -->

|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../../excel-library.md).|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

<!-- ComponentEnd: TreeGrid -->

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
