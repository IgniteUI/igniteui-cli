# Class: IgxDataRecordSorting

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:378](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L378)

Represents a class extending the IgxSorting class
Provides custom data record sorting.

## Extends

- [`IgxSorting`](IgxSorting.md)

## Constructors

### Constructor

> **new IgxDataRecordSorting**(): `IgxDataRecordSorting`

#### Returns

`IgxDataRecordSorting`

#### Inherited from

[`IgxSorting`](IgxSorting.md).[`constructor`](IgxSorting.md#constructor)

## Methods

### getFieldValue()

> `protected` **getFieldValue**(`obj`, `key`, `isDate?`, `isTime?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts:383](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-sorting-strategy.ts#L383)

Overrides the base method to retrieve the field value from the data object instead of the record object.
Returns the value of the specified field in the data object.

#### Parameters

##### obj

`any`

##### key

`string`

##### isDate?

`boolean` = `false`

##### isTime?

`boolean` = `false`

#### Returns

`any`

#### Overrides

`IgxSorting.getFieldValue`

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

#### Inherited from

[`IgxSorting`](IgxSorting.md).[`sort`](IgxSorting.md#sort)
