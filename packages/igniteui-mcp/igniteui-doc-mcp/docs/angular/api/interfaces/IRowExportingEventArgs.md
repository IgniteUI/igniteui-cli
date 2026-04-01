# Interface: IRowExportingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L76)

rowExporting event arguments
this.exporterService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
// set args properties here
})

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L90)

Skip the exporting row when set to true

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### rowData

> **rowData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L80)

Contains the exporting row data

***

### rowIndex

> **rowIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L85)

Contains the exporting row index
