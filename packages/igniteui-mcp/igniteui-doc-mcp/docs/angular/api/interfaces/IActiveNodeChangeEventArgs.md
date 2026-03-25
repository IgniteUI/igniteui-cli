# Interface: IActiveNodeChangeEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:474](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L474)

Emitted when the active node is changed

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### column

> **column**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:478](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L478)

Represents the column index of the active node

***

### level?

> `optional` **level?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:483](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L483)

Optional
Represents the hierarchical level of the active node

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### row

> **row**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:476](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L476)

Represents the row index of the active node

***

### tag

> **tag**: [`GridKeydownTargetType`](../type-aliases/GridKeydownTargetType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:488](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L488)

Represents the type of the active node.
The GridKeydownTargetType is an enum or that specifies the possible target types
