# Class: IgxGrouping

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:164](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L164)

Represents a class implementing the IGridGroupingStrategy interface and extending the IgxSorting class.
It provides a method to group data based on the given grouping state.

## Extends

- [`IgxSorting`](IgxSorting.md)

## Implements

- [`IGridGroupingStrategy`](../interfaces/IGridGroupingStrategy.md)

## Constructors

### Constructor

> **new IgxGrouping**(): `IgxGrouping`

#### Returns

`IgxGrouping`

#### Inherited from

[`IgxSorting`](IgxSorting.md).[`constructor`](IgxSorting.md#constructor)

## Methods

### groupBy()

> **groupBy**(`data`, `state`, `grid?`, `groupsRecords?`, `fullResult?`): [`IGroupByResult`](../interfaces/IGroupByResult.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:170](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L170)

Groups the provided data based on the given grouping state.
Returns an object containing the result of the grouping operation.

#### Parameters

##### data

`any`[]

##### state

[`IGroupingState`](../interfaces/IGroupingState.md)

##### grid?

`any`

##### groupsRecords?

`any`[]

##### fullResult?

[`IGroupByResult`](../interfaces/IGroupByResult.md) = `...`

#### Returns

[`IGroupByResult`](../interfaces/IGroupByResult.md)

#### Implementation of

[`IGridGroupingStrategy`](../interfaces/IGridGroupingStrategy.md).[`groupBy`](../interfaces/IGridGroupingStrategy.md#groupby)

***

### sort()

> **sort**(`data`, `expressions`, `grid?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L90)

Sorts the provided data based on the given sorting expressions.
`data`: The array of data to be sorted.
`expressions`: An array of sorting expressions that define the sorting rules. The expression contains information like file name, whether the letter case should be taken into account, etc.
`grid`: (Optional) The instance of the grid where the sorting is applied.
Returns a new array with the data sorted according to the sorting expressions.

#### Parameters

##### data

`any`[]

##### expressions

[`ISortingExpression`](../interfaces/ISortingExpression.md)\<`any`\>[]

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`any`[]

#### Implementation of

[`IGridGroupingStrategy`](../interfaces/IGridGroupingStrategy.md).[`sort`](../interfaces/IGridGroupingStrategy.md#sort)

#### Inherited from

[`IgxSorting`](IgxSorting.md).[`sort`](IgxSorting.md#sort)
