# Interface: IColumnVisibilityChangingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:548](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L548)

The event arguments when a column's visibility is changed.
The event is cancelable
It contains information about the column and the it's visibility after the operation (will be `true` when hiding and `false` when showing)

## Extends

- [`IColumnVisibilityChangedEventArgs`](IColumnVisibilityChangedEventArgs.md).[`CancelableEventArgs`](CancelableEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableEventArgs`](CancelableEventArgs.md).[`cancel`](CancelableEventArgs.md#cancel)

***

### column

> **column**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:535](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L535)

Represents the column the event originated from

#### Inherited from

[`IColumnVisibilityChangedEventArgs`](IColumnVisibilityChangedEventArgs.md).[`column`](IColumnVisibilityChangedEventArgs.md#column)

***

### newValue

> **newValue**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:540](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L540)

The new hidden state that the column will have, if operation is successful.
Will be `true` when hiding and `false` when showing.

#### Inherited from

[`IColumnVisibilityChangedEventArgs`](IColumnVisibilityChangedEventArgs.md).[`newValue`](IColumnVisibilityChangedEventArgs.md#newvalue)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IColumnVisibilityChangedEventArgs`](IColumnVisibilityChangedEventArgs.md).[`owner`](IColumnVisibilityChangedEventArgs.md#owner)
