# Class: GroupMemberCountSortingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L116)

## Implements

- [`ISortingStrategy`](../interfaces/ISortingStrategy.md)

## Constructors

### Constructor

> `protected` **new GroupMemberCountSortingStrategy**(): `GroupMemberCountSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L119)

#### Returns

`GroupMemberCountSortingStrategy`

## Properties

### \_instance

> `protected` `static` **\_instance**: `GroupMemberCountSortingStrategy` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L117)

## Methods

### compareObjects()

> `protected` **compareObjects**(`obj1`, `obj2`, `data`, `fieldName`, `reverse`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L145)

#### Parameters

##### obj1

`any`

##### obj2

`any`

##### data

`any`[]

##### fieldName

`string`

##### reverse

`number`

#### Returns

`number`

***

### groupBy()

> **groupBy**(`data`, `key`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L138)

#### Parameters

##### data

`any`

##### key

`any`

#### Returns

`any`

***

### sort()

> **sort**(`data`, `fieldName`, `dir`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L125)

#### Parameters

##### data

`any`[]

##### fieldName

`string`

##### dir

[`SortingDirection`](../enumerations/SortingDirection.md)

#### Returns

`any`[]

#### Implementation of

[`ISortingStrategy`](../interfaces/ISortingStrategy.md).[`sort`](../interfaces/ISortingStrategy.md#sort)

***

### instance()

> `static` **instance**(): `GroupMemberCountSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:121](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L121)

#### Returns

`GroupMemberCountSortingStrategy`
