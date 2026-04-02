# Class: NoopSortingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:359](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L359)

Represents a class implementing the IGridSortingStrategy interface with a no-operation sorting strategy.
It performs no sorting and returns the data as it is.

## Implements

- [`IGridSortingStrategy`](../interfaces/IGridSortingStrategy.md)

## Methods

### sort()

> **sort**(`data`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:369](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L369)

`data`: The array of data to be sorted. Could be of any type.
`expressions`: An array of sorting expressions that define the sorting rules. The expression contains information like file name, whether the letter case should be taken into account, etc.
`grid`: (Optional) The instance of the grid where the sorting is applied.
Returns a new array with the data sorted according to the sorting expressions.

#### Parameters

##### data

`any`[]

#### Returns

`any`[]

#### Implementation of

[`IGridSortingStrategy`](../interfaces/IGridSortingStrategy.md).[`sort`](../interfaces/IGridSortingStrategy.md#sort)

***

### instance()

> `static` **instance**(): `NoopSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:364](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L364)

#### Returns

`NoopSortingStrategy`
