---
_tocName: Export services
_premium: true
---
---title: Angular Pivot Grid Export to Excel and PDF - Ignite UI for Angular_description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc_keywords: data export, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/export-excel---# Angular Pivot Grid Export to Excel and PDF Service@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {<p class="highlight">Whether your audience needs a spreadsheet for deeper analysis or a polished PDF they can share right away, the Ignite UI exporters help you deliver the right file from the IgxPivotGrid in seconds. Inject the [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html) or [`IgxPdfExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html), call the respective [`export`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#export)/[`export`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html#export) method, and the component handles the rest—from honoring filters and sorting to shaping the output format.</p>}@@if (igxName === 'IgxHierarchicalGrid' || igxName === 'IgxPivotGrid') {<p class="highlight">The Ignite UI Excel and PDF Exporter services treat the IgxPivotGrid exactly like your users see it on screen—complete with hierarchical layouts and summaries. Inject the [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html) or [`IgxPdfExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html), call the appropriate [`export`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#export)/[`export`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html#export) method, and let the service generate the final document.</p>}The sections below walk through setup, usage patterns, and tips for tailoring each export so that your users receive data that is ready to consume, no matter which file type they prefer.<div class="divider"></div>## Angular Excel Exporter ExampleThis live example demonstrates the standard Excel and PDF export workflow for the Pivot Grid—bound data, two export buttons (Excel and PDF), and the resulting `.xlsx` and `.pdf` files with preserved filtering and sorting state. Share it with stakeholders who want to preview the experience before wiring it into their application.```typescript
import { Component, ViewChild, inject } from "@angular/core";

import {
    IPivotConfiguration,
    IgxPivotDateDimension,
    IgxPivotNumericAggregate,
    PivotAggregation,
    IgxExcelExporterOptions,
    IgxExcelExporterService,
    IgxPdfExporterService,
    IgxPdfExporterOptions,
    IColumnExportingEventArgs
} from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { SALES_DATA } from "../../data/dataToAnalyze";

export class IgxTotalSaleAggregate {
    public static totalSale: PivotAggregation = (members, data: any) =>
        data.reduce((accumulator, value) => accumulator + value.Product.UnitPrice * value.NumberOfUnits, 0);

    public static totalMin: PivotAggregation = (members, data: any) => {
        let min = 0;
        if (data.length === 1) {
            min = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    };

    public static totalMax: PivotAggregation = (members, data: any) => {
        let max = 0;
        if (data.length === 1) {
            max = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    };
}

@Component({
    selector: 'app-pivot-export-sample',
    styleUrls: ['./pivot-export.component.scss'],
    templateUrl: './pivot-export.component.html',
    imports: [IgxButtonDirective, IgxPivotGridComponent]
})
export class PivotExportComponent {
    private excelExportService = inject(IgxExcelExporterService);
    private pdfExportService = inject(IgxPdfExporterService);

    @ViewChild(IgxPivotGridComponent, { static: true }) public grid: IgxPivotGridComponent;

    public data = SALES_DATA;

    public pivotConfig: IPivotConfiguration = {
        columns: [
            new IgxPivotDateDimension(
                {
                    memberName: 'Date',
                    enabled: true
                },
                {
                    months: false,
                    quarters: true,
                    fullDate: false
                }
            )
        ],
        rows: [
            {
                memberName: 'City',
                width: "150px",
                memberFunction: (data) => data.Seller.City,
                enabled: true
            },
            {
                memberFunction: () => 'All Products',
                memberName: 'AllProducts',
                enabled: true,
                width: "150px",
                childLevel: {
                    memberFunction: (data) => data.Product.Name,
                    memberName: 'ProductCategory',
                    enabled: true
                }
            }
        ],
        values: [
            {
                member: 'Value',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                }],
                enabled: false,
                formatter: (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined
            },
            {
                member: 'AmountofSale',
                displayName: 'Amount of Sale',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                }, {
                    key: 'MIN',
                    aggregator: IgxTotalSaleAggregate.totalMin,
                    label: 'Minimum of Sale'
                }, {
                    key: 'MAX',
                    aggregator: IgxTotalSaleAggregate.totalMax,
                    label: 'Maximum of Sale'
                }],
                enabled: true,
                dataType: 'currency'
            }
        ]
    };

    public exportButtonHandler() {
        this.excelExportService.export(this.grid, new IgxExcelExporterOptions('ExportedDataFile'));
    }

    public exportPdfButtonHandler() {
        const pdfOptions = new IgxPdfExporterOptions('ExportedDataFile');

        this.pdfExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
            const header = args.header || '';

            // Cancel if it's a quarter (Q1-Q4)
            // This makes the PDF more readable by excluding less important columns
            if (/Q[1-4]/i.test(header)) {
                args.cancel = true;
            }
        });

        this.pdfExportService.export(this.grid, pdfOptions);
    }
}
```
```html
<div class="pivotgrid-sample">
    <div class="button-container">
        <div class="button-container__actions">
            <button igxButton="contained" (click)="exportButtonHandler()">Export To Excel</button>
            <button igxButton="contained" (click)="exportPdfButtonHandler()">Export To PDF</button>
        </div>
    </div>

    <igx-pivot-grid #grid [data]="data" [pivotConfiguration]="pivotConfig" [rowSelection]="'single'"
        [superCompactMode]="true" [defaultExpandState]='true' [pivotUI]="{ showRowHeaders: true }">
    </igx-pivot-grid>
</div>
```
```scss
.pivotgrid-sample {
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    height: 80%;

    .button-container {
        margin: 25px auto;

        &__actions {
            display: flex;
            flex-direction: row;
            gap: 16px;
            align-items: center;
        }
    }

    igx-pivot-grid {
        align-items: center;
    }
}
```<div class="divider--half"></div>## Exporting Pivot Grid's DataGetting the exporters into your project takes only a few lines of code. Follow these steps and you will have reusable services that can create either Excel or PDF outputs on demand:1. Import the [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html) and/or [`IgxPdfExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html) in your root module.2. Inject whichever exporter you need and call its `export` method when the user requests a file.```typescript// component.tsimport { IgxExcelExporterService, IgxPdfExporterService } from 'igniteui-angular/grids/core';// import { IgxExcelExporterService, IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package...private excelExportService = inject(IgxExcelExporterService);private pdfExportService = inject(IgxPdfExporterService);```> [!Note]> In v12.2.1 and later, `IgxExcelExporterService` is provided in root and does not need to be registered in the `providers` array. The PDF exporter was introduced in later versions and is available as an injectable service without any additional configuration.To initiate an export process you may use the handler of a button in your component's template.```html<igx-pivot-grid #pivotGrid [data]="localData" [pivotConfiguration]="pivotConfig"></igx-pivot-grid><button (click)="exportButtonHandler()">Export IgxPivotGrid to Excel</button><button (click)="exportPdfButtonHandler()">Export IgxPivotGrid to PDF</button>```You may access either exporter service by defining it as a constructor dependency and letting Angular provide an instance. Calling the shared [`export`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#export) method initiates the download while automatically respecting the component state, selected rows, and formatting rules.Here is the code which will execute both export processes in the component's typescript file:```typescript// component.tsimport { IgxExcelExporterService, IgxExcelExporterOptions, IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';@ViewChild('pivotGrid') public pivotGrid: IgxPivotGridComponent;private excelExportService = inject(IgxExcelExporterService);private pdfExportService = inject(IgxPdfExporterService);public exportButtonHandler() {
  this.excelExportService.export(this.pivotGrid, new IgxExcelExporterOptions('ExportedDataFile'));}public exportPdfButtonHandler() {
  this.pdfExportService.export(this.pivotGrid, new IgxPdfExporterOptions('ExportedDataFile'));}```Once wired up, pressing the respective buttons downloads files named `ExportedDataFile.xlsx` or `ExportedDataFile.pdf` populated with the current Pivot Grid view. You can swap in customer-friendly file names, append timestamps, or surface a success toast so users know their export has completed.> [!NOTE]> Expand/collapse indicators in Excel are shown based on the hierarchy of the last dimension of the Pivot Grid.> [!NOTE]> The exported Pivot Grid will not be formatted as a table, since Excel tables do not support multiple row headers.PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.## Customizing the Exported ContentMost teams tailor exports before sharing them: hiding internal-use columns, renaming headers, or skipping rows that only apply to administrators. Both exporter services expose events that let you intercept every row or column and decide how it should appear in the file. Subscribe to [`columnExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#columnexporting) and [`rowExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#rowexporting) to make last-minute adjustments—set `cancel = true` to omit an item or tweak the event arguments to update values on the fly.The following example will exclude all columns from the export if their header is "Amount of Sale":```typescript// component.tsthis.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
    if (args.header == 'Amount of Sale') {
        args.cancel = true;
    }});this.excelExportService.export(this.pivotGrid, new IgxExcelExporterOptions('ExportedDataFile'));```When you are exporting data from the Pivot Grid component, the services automatically respect sorting, filtering, summaries, and hidden columns so the file reflects what the user currently sees. Need the full dataset instead? Toggle the relevant flags on [`IgxExcelExporterOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporteroptions.html) or [`IgxPdfExporterOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporteroptions.html) to include filtered rows, hidden columns, or custom metadata.## Known LimitationsBefore shipping exports to production users, review the following platform constraints so you can set expectations and provide helpful guidance within your app.|Limitation|Description||--- |--- ||Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns. Consider slicing extremely large exports by date range or segment to stay within these limits.||Cell Styling|The Excel exporter service does not support exporting a custom style applied directly to a cell component. In such scenarios we recommend using the richer [Excel Library](../excel-library.md) for fine-grained formatting.||Wide PDF layouts|Very wide exports can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|## API ReferencesThe Excel and PDF Exporter services have a few more APIs to explore, which are listed below.- [IgxExcelExporterService API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html)- [IgxExcelExporterOptions API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporteroptions.html)- [IgxPdfExporterService API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html)- [IgxPdfExporterOptions API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporteroptions.html)Additional components that were used:- [IgxPivotGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpivotgridcomponent.html)- [IgxPivotGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)<div class="divider"></div>## Additional Resources<div class="divider--half"></div>Our community is active and always welcoming to new ideas. The links below connect you with samples, community answers, and the engineering team.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
