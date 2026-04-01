# Interface: IGridGroupingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L34)

Represents a grouping strategy for the grid data, extending the Sorting Strategy interface (contains a sorting method).

## Extends

- [`IGridSortingStrategy`](IGridSortingStrategy.md)

## Methods

### groupBy()

> **groupBy**(`data`, `state`, `grid?`, `groupsRecords?`, `fullResult?`): [`IGroupByResult`](IGroupByResult.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L45)

The method groups the provided data based on the given grouping state and returns the result.
`data`: The array of data to be grouped. Could be of any type.
`state`: The grouping state that defines the grouping settings and expressions.
`grid`: (Optional) The instance of the grid where the grouping is applied.
`groupsRecords`: (Optional) An array that holds the records for each group.
`fullResult`: (Optional) The complete result of grouping including groups and summary data.
Returns an object containing the result of the grouping operation.

#### Parameters

##### data

`any`[]

##### state

[`IGroupingState`](IGroupingState.md)

##### grid?

`any`

##### groupsRecords?

`any`[]

##### fullResult?

[`IGroupByResult`](IGroupByResult.md)

#### Returns

[`IGroupByResult`](IGroupByResult.md)

***

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

#### Inherited from

[`IGridSortingStrategy`](IGridSortingStrategy.md).[`sort`](IGridSortingStrategy.md#sort)
