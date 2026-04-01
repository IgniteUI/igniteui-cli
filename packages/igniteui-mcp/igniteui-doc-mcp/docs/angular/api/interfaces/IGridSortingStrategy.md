# Interface: IGridSortingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L20)

Represents a sorting strategy for the grid data
Contains a single method sort that sorts the provided data based on the given sorting expressions

## Extended by

- [`IGridGroupingStrategy`](IGridGroupingStrategy.md)

## Methods

### sort()

> **sort**(`data`, `expressions`, `grid?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L28)

`data`: The array of data to be sorted. Could be of any type.
`expressions`: An array of sorting expressions that define the sorting rules. The expression contains information like file name, whether the letter case should be taken into account, etc.
`grid`: (Optional) The instance of the grid where the sorting is applied.
Returns a new array with the data sorted according to the sorting expressions.

#### Parameters

##### data

`any`[]

##### expressions

[`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

##### grid?

[`GridTypeBase`](GridTypeBase.md)

#### Returns

`any`[]
