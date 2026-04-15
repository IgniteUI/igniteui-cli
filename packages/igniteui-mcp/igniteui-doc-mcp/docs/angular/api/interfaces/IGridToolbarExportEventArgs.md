# Interface: IGridToolbarExportEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:278](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L278)

Represents the arguments for the grid toolbar export event.
It provides information about the grid instance, exporter service, export options,
and allows the event to be canceled.

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:298](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L298)

`cancel` returns whether the event has been intercepted and stopped
If the value becomes "true", it returns/exits from the method, instantiating the interface

***

### exporter

> **exporter**: [`IgxBaseExporter`](../classes/IgxBaseExporter.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L287)

The `exporter` is a base service.
The type (an abstract class `IgxBaseExporter`) has it's own properties and methods
It is used to define the format and options of the export, the exported element
and methods for preparing the data from the elements for exporting

***

### grid

> **grid**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:280](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L280)

`grid` represents a reference to the instance of the grid te event originated from

***

### options

> **options**: [`IgxExporterOptionsBase`](../classes/IgxExporterOptionsBase.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L293)

Represents the different settings, that can be given to an export
The type (an abstract class `IgxExporterOptionsBase`) has properties for column settings
(whether they should be ignored) as well as method for generating a file name

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
