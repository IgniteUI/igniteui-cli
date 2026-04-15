---
title: Export to Excel Component - Native Angular | Ignite UI for Angular
_description: Users can export their data for editing or offline presentation can do so in Excel format with the Export to Excel Ignite UI for Angular component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Controls, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, Excel Export, Angular Excel Component, Angular Export Excel
_license: commercial
_tocName: Excel Exporter
_premium: true
---

# Excel Exporter

<p class="highlight">

The Ignite UI for Angular Excel Exporter service can export data in Microsoft® Excel® format from raw data (array) or from the [**IgxGrid**](grid/grid.md), [**IgxTreeGrid**](treegrid/tree-grid.md) and [**IgxHierarchicalGrid**](hierarchicalgrid/hierarchical-grid.md) components. The exporting functionality is encapsulated in the [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html) class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc.
</p>
<div class="divider"></div>

## Angular Excel Exporter Example


```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, inject } from '@angular/core';

import { IgxExcelExporterOptions, IgxExcelExporterService } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-excel-export',
    styleUrls: ['./excel-export.component.scss'],
    templateUrl: './excel-export.component.html',
    imports: [IgxButtonDirective]
})
export class ExcelExportComponent {
  private excelExportService = inject(IgxExcelExporterService);


  public localData = [
    { Name: 'Eric Ridley', Age: '26' },
    { Name: 'Alanis Brook', Age: '22' },
    { Name: 'Jonathan Morris', Age: '23' }
  ];

  public exportButtonHandler() {
    this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions('ExportFileFromData'));
  }

}
```
```html
<p>
  Press the "Export Data" button below to export an array as .xlsx file.<br />
  <button igxButton="contained" (click)="exportButtonHandler()">Export Data</button><br />
</p>
```

<div class="divider--half"></div>

## Usage

To start using the IgniteUI Excel Exporter first import the [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html) in the app.module.ts file and add the service to the `providers` array:

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from 'igniteui-angular/grids/core';
// import { IgxExcelExporterService } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

> [!Note]
> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.

To initiate an export process you may use the handler of a button in your component's template.

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

You may access the exporter service by defining an argument of type [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html) in the component's constructor and the Angular framework will provide an instance of the service. To export some data in MS Excel format you need to invoke the exporter service's [`exportData`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#exportdata) method. This method accepts as a first argument the data you want to export and the second argument is of type [`IgxExcelExporterOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporteroptions.html) and allows you to configure the export process.

Here is the code which will execute the export process in the component's typescript file:

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from 'igniteui-angular/grids/core';
// import { IgxExcelExporterService, IgxExcelExporterOptions } from '@infragistics/igniteui-angular'; for licensed package
...

public localData = [
  { Name: 'Eric Ridley', Age: '26' },
  { Name: 'Alanis Brook', Age: '22' },
  { Name: 'Jonathan Morris', Age: '23' }
];

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions('ExportedDataFile'));
}

```

If all went well, you should see an export button. When pressed, it will trigger the export process and the browser will download a file named "ExportedDataFile.xlsx" which contains the data from the `localData` array in MS Excel format.

## Customizing the Exported Content

In the above examples the Excel Exporter service was exporting all available data. There are situations in which you may want to skip exporting a row or even an entire column. To achieve this you may hook to the [`columnExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#columnexporting) and/or [`rowExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html#rowexporting) events which are fired respectively for each column and/or each row and cancel the respective event by setting the event argument object's [`cancel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/irowexportingeventargs.html#cancel) property to `true`.

The following example will exclude a column from the export if its header is "Age" and if its index is 1:

```typescript
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions('ExportedDataFile'));
```

## API References

The Excel Exporter service has a few more APIs to explore, which are listed below.

- [`IgxExcelExporterService API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html)
- [`IgxExcelExporterOptions API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporteroptions.html)

Grids Excel Exporters:

- [`IgxGrid Excel Exporters`](grid/export-excel.md)
- [`IgxTreeGrid Excel Exporters`](treegrid/export-excel.md)

Additional components that were used:

- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
