# Class: DefaultPivotGridRecordSortingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts#L6)

## Extends

- [`DefaultSortingStrategy`](DefaultSortingStrategy.md)

## Constructors

### Constructor

> `protected` **new DefaultPivotGridRecordSortingStrategy**(): `DefaultPivotGridRecordSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L39)

#### Returns

`DefaultPivotGridRecordSortingStrategy`

#### Inherited from

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`constructor`](DefaultSortingStrategy.md#constructor)

## Properties

### \_instance

> `protected` `static` **\_instance**: `DefaultPivotGridRecordSortingStrategy` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts#L7)

#### Overrides

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`_instance`](DefaultSortingStrategy.md#_instance)

## Methods

### arraySort()

> `protected` **arraySort**(`data`, `compareFn?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L107)

#### Parameters

##### data

`any`[]

##### compareFn?

(`arg0`, `arg1`) => `number`

#### Returns

`any`[]

#### Inherited from

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`arraySort`](DefaultSortingStrategy.md#arraysort)

***

### compareObjects()

> `protected` **compareObjects**(`obj1`, `obj2`, `key`, `reverse`, `ignoreCase`, `valueResolver`, `isDate`, `isTime`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L88)

#### Parameters

##### obj1

`any`

##### obj2

`any`

##### key

`string`

##### reverse

`number`

##### ignoreCase

`boolean`

##### valueResolver

(`obj`, `key`, `isDate?`, `isTime?`) => `any`

##### isDate

`boolean`

##### isTime

`boolean`

#### Returns

`number`

#### Inherited from

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`compareObjects`](DefaultSortingStrategy.md#compareobjects)

***

### compareValues()

> **compareValues**(`a`, `b`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L77)

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`number`

#### Inherited from

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`compareValues`](DefaultSortingStrategy.md#comparevalues)

***

### getFieldValue()

> `protected` **getFieldValue**(`obj`, `key`, `_isDate?`, `_isTime?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts#L22)

#### Parameters

##### obj

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)

##### key

`string`

##### \_isDate?

`boolean` = `false`

##### \_isTime?

`boolean` = `false`

#### Returns

`any`

***

### prepareSortValue()

> `protected` **prepareSortValue**(`value`, `ignoreCase`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L111)

#### Parameters

##### value

`any`

##### ignoreCase

`boolean`

#### Returns

`any`

#### Inherited from

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`prepareSortValue`](DefaultSortingStrategy.md#preparesortvalue)

***

### sort()

> **sort**(`data`, `fieldName`, `dir`, `ignoreCase`, `valueResolver`, `isDate?`, `isTime?`, `_grid?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts#L11)

#### Parameters

##### data

`any`[]

##### fieldName

`string`

##### dir

[`SortingDirection`](../enumerations/SortingDirection.md)

##### ignoreCase

`boolean`

##### valueResolver

(`obj`, `key`, `isDate?`) => `any`

##### isDate?

`boolean`

##### isTime?

`boolean`

##### \_grid?

[`PivotGridType`](../interfaces/PivotGridType.md)

#### Returns

`any`[]

#### Overrides

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`sort`](DefaultSortingStrategy.md#sort)

***

### instance()

> `static` **instance**(): `DefaultPivotGridRecordSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-sort-strategy.ts#L8)

#### Returns

`DefaultPivotGridRecordSortingStrategy`

#### Overrides

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`instance`](DefaultSortingStrategy.md#instance)
