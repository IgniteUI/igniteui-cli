# Interface: IColumnSelectionEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:243](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L243)

The event arguments when the selection state of a column is being changed
The event is cancelable

## Extends

- [`CancelableEventArgs`](CancelableEventArgs.md).[`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### added

> `readonly` **added**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L252)

Represents an array of all added columns
Whenever a column has been selected, the array is "refreshed" with the selected columns

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:263](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L263)

Represents the original event, that has triggered the selection change
selecting, deselecting

***

### newSelection

> **newSelection**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:247](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L247)

Represents the newly selected columns

***

### oldSelection

> `readonly` **oldSelection**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:245](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L245)

Represents an array of columns, that have already been selected

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### removed

> `readonly` **removed**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:257](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L257)

Represents an array of all columns, removed from the selection
Whenever a column has been deselected, the array is "refreshed" with the columns, that have been previously selected, but are no longer
