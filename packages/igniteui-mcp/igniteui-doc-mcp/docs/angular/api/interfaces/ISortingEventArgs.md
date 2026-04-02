# Interface: ISortingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:495](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L495)

Represents event arguments related to sorting and grouping operations
The event is cancelable

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md).[`CancelableEventArgs`](CancelableEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableEventArgs`](CancelableEventArgs.md).[`cancel`](CancelableEventArgs.md#cancel)

***

### groupingExpressions?

> `optional` **groupingExpressions?**: [`IGroupingExpression`](IGroupingExpression.md) \| [`IGroupingExpression`](IGroupingExpression.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:509](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L509)

Optional
Represents the grouping expressions applied to the grid.
It can be a single grouping expression or an array of them
The expression contains information like the sorting expression and criteria by which the elements will be grouped

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### sortingExpressions?

> `optional` **sortingExpressions?**: [`ISortingExpression`](ISortingExpression.md)\<`any`\> \| [`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:502](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L502)

Optional
Represents the sorting expressions applied to the grid.
It can be a single sorting expression or an array of them
The expression contains information like file name, whether the letter case should be taken into account, etc.
