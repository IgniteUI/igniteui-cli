# Interface: IColumnVisibilityChangedEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:533](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L533)

The event arguments after a column's visibility is changed.

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IColumnVisibilityChangingEventArgs`](IColumnVisibilityChangingEventArgs.md)

## Properties

### column

> **column**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:535](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L535)

Represents the column the event originated from

***

### newValue

> **newValue**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:540](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L540)

The new hidden state that the column will have, if operation is successful.
Will be `true` when hiding and `false` when showing.

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
