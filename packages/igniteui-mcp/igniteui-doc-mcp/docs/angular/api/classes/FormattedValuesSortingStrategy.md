# Class: FormattedValuesSortingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L153)

## Extends

- [`DefaultSortingStrategy`](DefaultSortingStrategy.md)

## Constructors

### Constructor

> **new FormattedValuesSortingStrategy**(): `FormattedValuesSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:156](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L156)

#### Returns

`FormattedValuesSortingStrategy`

#### Overrides

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`constructor`](DefaultSortingStrategy.md#constructor)

## Properties

### \_instance

> `protected` `static` **\_instance**: `FormattedValuesSortingStrategy` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L154)

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

> `protected` **compareObjects**(`obj1`, `obj2`, `key`, `reverse`, `ignoreCase`, `valueResolver`, `isDate`, `isTime`, `grid?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:180](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L180)

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

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`number`

#### Overrides

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

> **sort**(`data`, `fieldName`, `dir`, `ignoreCase`, `valueResolver`, `isDate?`, `isTime?`, `grid?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:164](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L164)

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

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`any`[]

#### Overrides

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`sort`](DefaultSortingStrategy.md#sort)

***

### instance()

> `static` **instance**(): `FormattedValuesSortingStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:160](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L160)

#### Returns

`FormattedValuesSortingStrategy`

#### Overrides

[`DefaultSortingStrategy`](DefaultSortingStrategy.md).[`instance`](DefaultSortingStrategy.md#instance)
