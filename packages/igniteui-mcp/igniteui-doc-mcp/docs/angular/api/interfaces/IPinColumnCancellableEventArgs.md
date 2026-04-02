# Interface: IPinColumnCancellableEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L165)

The event arguments before a column's pin state is changed.
`insertAtIndex`specifies at which index in the pinned/unpinned area the column is inserted.
Can be changed in the `columnPin` event.
`isPinned` returns the actual pin state of the column. When pinning/unpinning is successful,
the value of `isPinned` will change accordingly when read in the "-ing" and "-ed" event.

## Extends

- [`IPinColumnEventArgs`](IPinColumnEventArgs.md).[`CancelableEventArgs`](CancelableEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableEventArgs`](CancelableEventArgs.md).[`cancel`](CancelableEventArgs.md#cancel)

***

### column

> **column**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L145)

#### Inherited from

[`IPinColumnEventArgs`](IPinColumnEventArgs.md).[`column`](IPinColumnEventArgs.md#column)

***

### insertAtIndex

> **insertAtIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L150)

If pinned, specifies at which index in the pinned area the column is inserted.
If unpinned, specifies at which index in the unpinned area the column is inserted.

#### Inherited from

[`IPinColumnEventArgs`](IPinColumnEventArgs.md).[`insertAtIndex`](IPinColumnEventArgs.md#insertatindex)

***

### isPinned

> **isPinned**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:155](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L155)

Returns the actual pin state of the column.
If pinning/unpinning is successful, value of `isPinned` will change accordingly when read in the "-ing" and "-ed" event.

#### Inherited from

[`IPinColumnEventArgs`](IPinColumnEventArgs.md).[`isPinned`](IPinColumnEventArgs.md#ispinned)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IPinColumnEventArgs`](IPinColumnEventArgs.md).[`owner`](IPinColumnEventArgs.md#owner)
