# Interface: IColumnMovingStartEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L302)

Represents event arguments related to the start of a column moving operation in a grid.

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### source

> **source**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:307](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L307)

Represents the column that is being moved.
The `ColumnType` contains the information (the grid it belongs to, css data, settings, etc.) of the column in its properties
