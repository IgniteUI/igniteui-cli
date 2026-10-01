---
title: Angular Tree Grid Export to Excel and PDF - Ignite UI for Angular
description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc
keywords: data export, ignite ui for angular, infragistics
license: commercial
_canonicalLink: grid/export-excel
llms:
  description: "Whether your audience needs a spreadsheet for deeper analysis or a polished PDF they can share right away, the Ignite UI exporters help you deliver the right file from the IgxTreeGrid in seconds."
_tocName: Export services
_premium: true
---
# Angular Tree Grid Export to Excel and PDF Service

<p class="highlight">

Whether your audience needs a spreadsheet for deeper analysis or a polished PDF they can share right away, the Ignite UI exporters help you deliver the right file from the IgxTreeGrid in seconds. Inject the [`IgxExcelExporterService`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService) or [`IgxPdfExporterService`](mcp:get_api_reference?platform=angular&component=IgxPdfExporterService), call the respective [`export`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService&member=export)/[`export`](mcp:get_api_reference?platform=angular&component=IgxPdfExporterService&member=export) method, and the component handles the rest—from honoring filters and sorting to shaping the output format.
</p>

The sections below walk through setup, usage patterns, and tips for tailoring each export so that your users receive data that is ready to consume, no matter which file type they prefer.

<igc-divider></igc-divider>

## Angular Excel Exporter Example

This live example demonstrates the standard Excel and PDF export workflow for the Tree Grid—bound data, two export buttons (Excel and PDF), and the resulting `.xlsx` and `.pdf` files with preserved filtering and sorting state. Share it with stakeholders who want to preview the experience before wiring it into their application.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../../../tree-grid/data/orders';
import { IgxPreventDocumentScrollDirective } from '../../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-excel-export-tree-grid-sample',
    styleUrls: ['./excel-export-tree-grid-sample.component.scss'],
    templateUrl: './excel-export-tree-grid-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridExcelExportSample1Component implements OnInit {

  @ViewChild('igxTreeGrid1', { static: true })
  public igxTreeGrid1: IgxTreeGridComponent;

  public data: any[];

  public options = {
    digitsInfo: '1.2-2',
    currencyCode: 'USD'
  };
  public formatOptions = this.options;


  constructor() { }

  public ngOnInit(): void {
    this.data = ORDERS_DATA;
  }
    /*
    The following code demonstrates how to attach event handlers to exporter specific events
    and also how to customize the column export process.
    this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
      if (args.header == 'Age' && args.columnIndex == 1) {
        args.cancel = true;
      }
    });
    this.excelExportService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
    });
    this.excelExportService.exportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
    });
    */

}
```
```html
<p class="grid__wrapper">
  <igx-tree-grid #igxTreeGrid1 [igxPreventDocumentScroll]="true" [data]="data" [autoGenerate]="false" height="280px" width="100%"
    primaryKey="ID" foreignKey="ParentID">
    <igx-grid-toolbar>
      <igx-grid-toolbar-actions>
        <igx-grid-toolbar-exporter [exportExcel]="true" [exportCSV]="false">
        </igx-grid-toolbar-exporter>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Delivered" alt="Delivered"/>
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered"/>
        }
      </ng-template>
    </igx-column>
  </igx-tree-grid>
</p>
```
```scss
.grid__wrapper {
    padding-top: 16px;
    width: 98% !important;
    margin: 0 auto;
    padding-left: 1%;
    padding-right: 1%;
}

.exportButton {
    margin-top: 5px;
}
```

## Exporting Tree Grid's Data

Getting the exporters into your project takes only a few lines of code. Follow these steps and you will have reusable services that can create either Excel or PDF outputs on demand:

1. Import the [`IgxExcelExporterService`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService) and/or [`IgxPdfExporterService`](mcp:get_api_reference?platform=angular&component=IgxPdfExporterService) in your root module.
2. Inject whichever exporter you need and call its `export` method when the user requests a file.

```typescript
// component.ts
import { IgxExcelExporterService, IgxPdfExporterService } from 'igniteui-angular/grids/core';
// import { IgxExcelExporterService, IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package

...

private excelExportService = inject(IgxExcelExporterService);
private pdfExportService = inject(IgxPdfExporterService);

```

**Note:** 
In v12.2.1 and later, `IgxExcelExporterService` is provided in root and does not need to be registered in the `providers` array. The PDF exporter was introduced in later versions and is available as an injectable service without any additional configuration.

To initiate an export process you may use the handler of a button in your component's template.

```html
<igx-tree-grid #treeGrid [data]="localData" [autoGenerate]="true"></igx-tree-grid>
<button (click)="exportButtonHandler()">Export IgxTreeGrid to Excel</button>
<button (click)="exportPdfButtonHandler()">Export IgxTreeGrid to PDF</button>
```

You may access either exporter service by defining it as a constructor dependency and letting Angular provide an instance. Calling the shared [`export`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService&member=export) method initiates the download while automatically respecting the component state, selected rows, and formatting rules.

Here is the code which will execute both export processes in the component's typescript file:

```typescript
// component.ts
import { IgxExcelExporterService, IgxExcelExporterOptions, IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';

@ViewChild('treeGrid') public treeGrid: IgxTreeGridComponent;

private excelExportService = inject(IgxExcelExporterService);
private pdfExportService = inject(IgxPdfExporterService);

public exportButtonHandler() {
  this.excelExportService.export(this.treeGrid, new IgxExcelExporterOptions('ExportedDataFile'));
}

public exportPdfButtonHandler() {
  this.pdfExportService.export(this.treeGrid, new IgxPdfExporterOptions('ExportedDataFile'));
}
```

Once wired up, pressing the respective buttons downloads files named `ExportedDataFile.xlsx` or `ExportedDataFile.pdf` populated with the current Tree Grid view. You can swap in customer-friendly file names, append timestamps, or surface a success toast so users know their export has completed.

## Export All Data

Large, remote datasets often load page-by-page or on demand, which means the Tree Grid might not have every record available when the user clicks **Export**. To guarantee a complete workbook, hydrate the exporter with the full data collection before starting the process. The `exportData` helper bypasses the component and works directly against plain objects, so you can reuse the same routine for scheduled exports or admin-only downloads.

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions('ExportedDataFile'));
}
```

**Tip:** 
When offering PDF downloads for remote data, consider fetching the complete dataset first and then calling `export` so the document mirrors the user's expectations.

## Export Multi Column Headers Grid

Dashboards often rely on [multi-column headers](/treegrid/multi-column-headers) to add context—think of a "Q1/Q2/Q3" band above individual month columns. The exporter mirrors this structure so spreadsheet users immediately understand the grouping logic. If your downstream workflow prefers simple column names, flip the [`exporter option`](mcp:get_api_reference?platform=angular&component=IGridToolbarExportEventArgs) [`ignoreMultiColumnHeaders`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterOptions&member=ignoremulticolumnheaders) flag to `true` and the output will include only the leaf headers.

**Note:** 
The exported Tree Grid will not be formatted as a table, since Excel tables do not support multiple row headers.

```typescript
import { Component } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxColumnGroupComponent, IgxExporterEvent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tree-grid-multi-column-headers-export-sample',
    styleUrls: ['./tree-grid-multi-column-headers-export.component.scss'],
    templateUrl: './tree-grid-multi-column-headers-export.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxSwitchComponent, FormsModule, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxColumnGroupComponent]
})
export class TreeGridMultiColumnHeadersExportComponent {
    public data = generateEmployeeDetailedFlatData();
    public selectionMode: GridSelectionMode = 'none';
    public exportHeaders = true;

    public exportStarted(args: IgxExporterEvent) {
        args.options.ignoreMultiColumnHeaders = !this.exportHeaders;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" [moving]="true" foreignKey="ParentID" [rowSelection]="selectionMode" height="740px"
        [allowFiltering]="true" width="100%">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-switch [(ngModel)]="exportHeaders">Export multi-column headers</igx-switch>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-exporter [exportCSV]="false" [exportExcel]="true" (exportStarted)="exportStarted($event)">
                </igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
        <igx-column field="ID" dataType="number" [resizable]="true" [filterable]="false"></igx-column>
        <igx-column field="Name" dataType="string" [sortable]="true" [resizable]="true" width="200px"></igx-column>
        <igx-column-group [pinned]="false" header="General Information">
            <igx-column field="HireDate" dataType="date" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="City" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Address" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
    margin: 15px;
}
```

## Export Grid with Frozen Column Headers

Long sheets can become hard to read once the header row scrolls out of view. Enabling frozen headers keeps key context—like "Customer" or "Invoice Total"—visible at the top of the worksheet while your users explore the data further down. Toggle the [`exporter option`](mcp:get_api_reference?platform=angular&component=IGridToolbarExportEventArgs) [`freezeHeaders`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterOptions&member=freezeHeaders) flag to `true` before calling `export` and the service will handle the rest.

```typescript
public exportButtonHandler() {
    const exporterOptions = new IgxExcelExporterOptions('ExportedDataFile');
    exporterOptions.freezeHeaders = true;
    this.excelExportService.export(this.grid, exporterOptions);
}
```

PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

## Customizing the Exported Content

Most teams tailor exports before sharing them: hiding internal-use columns, renaming headers, or skipping rows that only apply to administrators. Both exporter services expose events that let you intercept every row or column and decide how it should appear in the file. Subscribe to [`columnExporting`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService&member=columnexporting) and [`rowExporting`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService&member=rowexporting) to make last-minute adjustments—set `cancel = true` to omit an item or tweak the event arguments to update values on the fly.

The following example will exclude a column from the export if its header is "Age" and if its index is 1:

```typescript
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.treeGrid, new IgxExcelExporterOptions('ExportedDataFile'));
```

When you are exporting data from the Tree Grid component, the services automatically respect sorting, filtering, summaries, and hidden columns so the file reflects what the user currently sees. Need the full dataset instead? Toggle the relevant flags on [`IgxExcelExporterOptions`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterOptions) or [`IgxPdfExporterOptions`](mcp:get_api_reference?platform=angular&component=IgxPdfExporterOptions) to include filtered rows, hidden columns, or custom metadata.

## Known Limitations

Before shipping exports to production users, review the following platform constraints so you can set expectations and provide helpful guidance within your app.

|Limitation|Description|
|--- |--- |
|Hierarchy levels|The exporter supports up to 8 levels of hierarchy. If you need deeper structures, flatten the data or export subsets to keep the file readable.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns. Consider slicing extremely large exports by date range or segment to stay within these limits.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied directly to a cell component. In such scenarios we recommend using the richer [Excel Library](/excel-library) for fine-grained formatting.|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

## API References
The Excel and PDF Exporter services have a few more APIs to explore, which are listed below.
- [`IgxExcelExporterService`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService)
- [`IgxExcelExporterOptions`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterOptions)
- [`IgxPdfExporterService`](mcp:get_api_reference?platform=angular&component=IgxPdfExporterService)
- [`IgxPdfExporterOptions`](mcp:get_api_reference?platform=angular&component=IgxPdfExporterOptions)
Additional components that were used:
- [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent)
- `IgxTreeGridComponent Styles`
<igc-divider></igc-divider>
## Additional Resources

Our community is active and always welcoming to new ideas. The links below connect you with samples, community answers, and the engineering team.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
