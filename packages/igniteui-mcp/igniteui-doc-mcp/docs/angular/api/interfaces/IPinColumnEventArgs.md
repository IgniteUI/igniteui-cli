# Interface: IPinColumnEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L144)

The event arguments after a column's pin state is changed.
`insertAtIndex`specifies at which index in the pinned/unpinned area the column was inserted.
`isPinned` returns the actual pin state of the column after the operation completed.

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IPinColumnCancellableEventArgs`](IPinColumnCancellableEventArgs.md)

## Properties

### column

> **column**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L145)

***

### insertAtIndex

> **insertAtIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L150)

If pinned, specifies at which index in the pinned area the column is inserted.
If unpinned, specifies at which index in the unpinned area the column is inserted.

***

### isPinned

> **isPinned**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:155](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L155)

Returns the actual pin state of the column.
If pinning/unpinning is successful, value of `isPinned` will change accordingly when read in the "-ing" and "-ed" event.

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
