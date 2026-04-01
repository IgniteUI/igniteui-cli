# Interface: IRowSelectionEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L213)

The event arguments when the selection state of a row is being changed
The event is cancelable

## Extends

- [`CancelableEventArgs`](CancelableEventArgs.md).[`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### added

> `readonly` **added**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L222)

Represents an array of all added rows
Whenever a row has been selected, the array is "refreshed" with the selected rows

***

### allRowsSelected?

> `readonly` `optional` **allRowsSelected?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:236](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L236)

Indicates whether or not all rows of the grid have been selected

***

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableEventArgs`](CancelableEventArgs.md).[`cancel`](CancelableEventArgs.md#cancel)

***

### event?

> `readonly` `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:234](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L234)

Represents the original event, that has triggered the selection change
selecting, deselecting

***

### newSelection

> **newSelection**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:217](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L217)

Represents the newly selected rows

***

### oldSelection

> `readonly` **oldSelection**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:215](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L215)

Represents an array of rows, that have already been selected

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### removed

> `readonly` **removed**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:228](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L228)

Represents an array of all rows, removed from the selection
Whenever a row has been deselected, the array is "refreshed" with the rows,
that have been previously selected, but are no longer
