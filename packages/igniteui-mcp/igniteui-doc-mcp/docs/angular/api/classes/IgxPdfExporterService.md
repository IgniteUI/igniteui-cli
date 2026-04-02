# Class: IgxPdfExporterService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter.ts#L36)

**Ignite UI for Angular PDF Exporter Service** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/exporter_pdf.html)

The Ignite UI for Angular PDF Exporter service can export data in PDF format from both raw data
(array) or from an `IgxGrid`.

Example:
```typescript
public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private pdfExportService: IgxPdfExporterService) {
}

this.pdfExportService.exportData(this.localData, new IgxPdfExporterOptions("FileName"));
```

## Extends

- [`IgxBaseExporter`](IgxBaseExporter.md)

## Constructors

### Constructor

> **new IgxPdfExporterService**(): `IgxPdfExporterService`

#### Returns

`IgxPdfExporterService`

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`constructor`](IgxBaseExporter.md#constructor)

## Properties

### \_ownersMap

> `protected` **\_ownersMap**: `Map`\<`any`, [`IColumnList`](../interfaces/IColumnList.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:205](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L205)

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`_ownersMap`](IgxBaseExporter.md#_ownersmap)

***

### \_sort

> `protected` **\_sort**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:203](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L203)

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`_sort`](IgxBaseExporter.md#_sort)

***

### columnExporting

> **columnExporting**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L201)

This event is emitted when a column is exported.
```typescript
this.exporterService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
// put event handler code here
});
```

#### Memberof

IgxBaseExporter

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`columnExporting`](IgxBaseExporter.md#columnexporting)

***

### exportEnded

> **exportEnded**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter.ts#L48)

This event is emitted when the export process finishes.
```typescript
this.exporterService.exportEnded.subscribe((args: IPdfExportEndedEventArgs) => {
// put event handler code here
});
```

#### Memberof

IgxPdfExporterService

#### Overrides

[`IgxBaseExporter`](IgxBaseExporter.md).[`exportEnded`](IgxBaseExporter.md#exportended)

***

### pivotGridFilterFieldsCount

> `protected` **pivotGridFilterFieldsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:204](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L204)

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`pivotGridFilterFieldsCount`](IgxBaseExporter.md#pivotgridfilterfieldscount)

***

### rowExporting

> **rowExporting**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L189)

This event is emitted when a row is exported.
```typescript
this.exporterService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
// put event handler code here
});
```

#### Memberof

IgxBaseExporter

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`rowExporting`](IgxBaseExporter.md#rowexporting)

## Methods

### export()

> **export**(`grid`, `options`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:228](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L228)

Method for exporting IgxGrid component's data.
```typescript
this.exporterService.export(this.igxGridForExport, this.exportOptions);
```

#### Parameters

##### grid

`any`

##### options

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md)

#### Returns

`void`

#### Memberof

IgxBaseExporter

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`export`](IgxBaseExporter.md#export)

***

### exportData()

> **exportData**(`data`, `options`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L287)

Method for exporting any kind of array data.
```typescript
this.exporterService.exportData(this.arrayForExport, this.exportOptions);
```

#### Parameters

##### data

`any`[]

##### options

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md)

#### Returns

`void`

#### Memberof

IgxBaseExporter

#### Inherited from

[`IgxBaseExporter`](IgxBaseExporter.md).[`exportData`](IgxBaseExporter.md#exportdata)

***

### exportDataImplementation()

> `protected` **exportDataImplementation**(`data`, `options`, `done`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter.ts#L53)

#### Parameters

##### data

[`IExportRecord`](../interfaces/IExportRecord.md)[]

##### options

[`IgxPdfExporterOptions`](IgxPdfExporterOptions.md)

##### done

() => `void`

#### Returns

`void`

#### Overrides

[`IgxBaseExporter`](IgxBaseExporter.md).[`exportDataImplementation`](IgxBaseExporter.md#exportdataimplementation)
