# Interface: IGridContextMenuEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L43)

Represents an event argument for the grid contextMenu output

## Extends

- [`IGridCellEventArgs`](IGridCellEventArgs.md).[`IGridRowEventArgs`](IGridRowEventArgs.md)

## Properties

### cell

> **cell**: [`CellType`](CellType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L22)

Represents the grid cell that triggered the event.

#### Inherited from

[`IGridCellEventArgs`](IGridCellEventArgs.md).[`cell`](IGridCellEventArgs.md#cell)

***

### event

> **event**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L28)

Represents the original event that occurred
Examples of such events include: selecting, clicking, double clicking, etc.

#### Inherited from

[`IGridCellEventArgs`](IGridCellEventArgs.md).[`event`](IGridCellEventArgs.md#event)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IGridCellEventArgs`](IGridCellEventArgs.md).[`owner`](IGridCellEventArgs.md#owner)

***

### row

> **row**: [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L34)

Represents the grid row that triggered the event.

#### Inherited from

[`IGridRowEventArgs`](IGridRowEventArgs.md).[`row`](IGridRowEventArgs.md#row)
