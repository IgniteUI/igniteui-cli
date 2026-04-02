# Interface: IColumnMovingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:311](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L311)

Represents event arguments related to a column moving operation in a grid

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:321](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L321)

`cancel` returns whether the event has been intercepted and stopped
If the value becomes "true", it returns/exits from the method, instantiating the interface

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### source

> **source**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:316](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L316)

Represents the column that is being moved.
The `ColumnType` contains the information (the grid it belongs to, css data, settings, etc.) of the column in its properties
