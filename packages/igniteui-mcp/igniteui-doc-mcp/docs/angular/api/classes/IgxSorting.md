# Class: IgxSorting

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:81](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L81)

Represents a class implementing the IGridSortingStrategy interface.
It provides sorting functionality for grid data based on sorting expressions.

## Extended by

- [`IgxGrouping`](IgxGrouping.md)
- [`IgxDataRecordSorting`](IgxDataRecordSorting.md)
- [`IgxGroupedTreeGridSorting`](IgxGroupedTreeGridSorting.md)

## Implements

- [`IGridSortingStrategy`](../interfaces/IGridSortingStrategy.md)

## Constructors

### Constructor

> **new IgxSorting**(): `IgxSorting`

#### Returns

`IgxSorting`

## Methods

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

[`IGridSortingStrategy`](../interfaces/IGridSortingStrategy.md).[`sort`](../interfaces/IGridSortingStrategy.md#sort)
