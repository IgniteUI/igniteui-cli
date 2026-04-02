# Interface: IGridScrollEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:452](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L452)

Event emitted when a grid is scrolled.

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### direction

> **direction**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:454](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L454)

The scroll direction - vertical or horizontal.

***

### event

> **event**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:457](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L457)

The original browser scroll event.

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### scrollPosition

> **scrollPosition**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:459](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L459)

The new scroll position
