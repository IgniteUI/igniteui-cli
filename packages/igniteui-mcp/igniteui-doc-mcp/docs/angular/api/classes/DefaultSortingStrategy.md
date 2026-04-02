# Class: DefaultSortingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L36)

## Extended by

- [`FormattedValuesSortingStrategy`](FormattedValuesSortingStrategy.md)
- [`DefaultPivotGridRecordSortingStrategy`](DefaultPivotGridRecordSortingStrategy.md)
- [`DefaultPivotSortingStrategy`](DefaultPivotSortingStrategy.md)

## Implements

- [`ISortingStrategy`](../interfaces/ISortingStrategy.md)

## Constructors

### Constructor

> `protected` **new DefaultSortingStrategy**(): `DefaultSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L39)

#### Returns

`DefaultSortingStrategy`

## Properties

### \_instance

> `protected` `static` **\_instance**: `DefaultSortingStrategy` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L37)

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

***

### sort()

> **sort**(`data`, `fieldName`, `dir`, `ignoreCase`, `valueResolver`, `isDate?`, `isTime?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L46)

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

#### Returns

`any`[]

#### Implementation of

[`ISortingStrategy`](../interfaces/ISortingStrategy.md).[`sort`](../interfaces/ISortingStrategy.md#sort)

***

### instance()

> `static` **instance**(): `DefaultSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L41)

#### Returns

`DefaultSortingStrategy`
