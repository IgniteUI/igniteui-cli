# Interface: IColumnExportingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L101)

columnExporting event arguments
```typescript
this.exporterService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
// set args properties here
});
```

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L120)

Skip the exporting column when set to true

***

### columnIndex

> **columnIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L115)

Contains the exporting column index

***

### field

> **field**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:110](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L110)

Contains the exporting column field name

***

### grid?

> `optional` **grid?**: [`GridTypeBase`](GridTypeBase.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:130](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L130)

A reference to the grid owner.

***

### header

> **header**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L105)

Contains the exporting column header

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### skipFormatter

> **skipFormatter**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/base-export-service.ts#L125)

Export the column's data without applying its formatter, when set to true
