# Class: IgxGroupedTreeGridSorting

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/tree-grid/src/tree-grid.grouping.pipe.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/tree-grid/src/tree-grid.grouping.pipe.ts#L23)

Represents a class implementing the IGridSortingStrategy interface.
It provides sorting functionality for grid data based on sorting expressions.

## Extends

- [`IgxSorting`](IgxSorting.md)

## Constructors

### Constructor

> **new IgxGroupedTreeGridSorting**(): `IgxGroupedTreeGridSorting`

#### Returns

`IgxGroupedTreeGridSorting`

#### Inherited from

[`IgxSorting`](IgxSorting.md).[`constructor`](IgxSorting.md#constructor)

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

#### Inherited from

[`IgxSorting`](IgxSorting.md).[`sort`](IgxSorting.md#sort)

***

### instance()

> `static` **instance**(): `IgxGroupedTreeGridSorting`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/tree-grid/src/tree-grid.grouping.pipe.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/tree-grid/src/tree-grid.grouping.pipe.ts#L26)

#### Returns

`IgxGroupedTreeGridSorting`
