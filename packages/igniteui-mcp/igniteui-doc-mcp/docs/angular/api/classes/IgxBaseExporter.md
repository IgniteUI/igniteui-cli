# Abstract Class: IgxBaseExporter

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L175)

## Extended by

- [`IgxCsvExporterService`](IgxCsvExporterService.md)
- [`IgxExcelExporterService`](IgxExcelExporterService.md)
- [`IgxPdfExporterService`](IgxPdfExporterService.md)

## Constructors

### Constructor

> **new IgxBaseExporter**(): `IgxBaseExporter`

#### Returns

`IgxBaseExporter`

## Properties

### \_ownersMap

> `protected` **\_ownersMap**: `Map`\<`any`, [`IColumnList`](../interfaces/IColumnList.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:205](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L205)

***

### \_sort

> `protected` **\_sort**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:203](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L203)

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

***

### exportEnded

> **exportEnded**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L177)

***

### pivotGridFilterFieldsCount

> `protected` **pivotGridFilterFieldsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:204](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L204)

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

***

### exportDataImplementation()

> `abstract` `protected` **exportDataImplementation**(`data`, `options`, `done`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:1462](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L1462)

#### Parameters

##### data

`any`[]

##### options

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md)

##### done

() => `void`

#### Returns

`void`
