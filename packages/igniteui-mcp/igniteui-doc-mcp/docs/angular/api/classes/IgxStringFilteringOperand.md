# Class: IgxStringFilteringOperand

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:812](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L812)

Provides filtering operations for strings

## Export

## Extends

- [`IgxFilteringOperand`](IgxFilteringOperand.md)

## Constructors

### Constructor

> `protected` **new IgxStringFilteringOperand**(): `IgxStringFilteringOperand`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:813](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L813)

#### Returns

`IgxStringFilteringOperand`

#### Overrides

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`constructor`](IgxFilteringOperand.md#constructor)

## Properties

### operations

> **operations**: [`IFilteringOperation`](../interfaces/IFilteringOperation.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L9)

#### Inherited from

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`operations`](IgxFilteringOperand.md#operations)

***

### \_instance

> `protected` `static` **\_instance**: [`IgxFilteringOperand`](IgxFilteringOperand.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L8)

#### Inherited from

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`_instance`](IgxFilteringOperand.md#_instance)

## Methods

### append()

> **append**(`operation`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L76)

Adds a new condition to the filtering operations.

#### Parameters

##### operation

[`IFilteringOperation`](../interfaces/IFilteringOperation.md)

The filtering operation.

#### Returns

`void`

#### Inherited from

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`append`](IgxFilteringOperand.md#append)

***

### condition()

> **condition**(`name`): [`IFilteringOperation`](../interfaces/IFilteringOperation.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L67)

Returns an instance of the condition with the specified name.

#### Parameters

##### name

`string`

The name of the condition.

#### Returns

[`IFilteringOperation`](../interfaces/IFilteringOperation.md)

#### Inherited from

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`condition`](IgxFilteringOperand.md#condition)

***

### conditionList()

> **conditionList**(): `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L50)

Returns an array of names of the conditions which are visible in the filtering UI

#### Returns

`string`[]

#### Inherited from

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`conditionList`](IgxFilteringOperand.md#conditionlist)

***

### findValueInSet()

> `protected` **findValueInSet**(`target`, `searchVal`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L80)

#### Parameters

##### target

`any`

##### searchVal

`Set`\<`any`\>

#### Returns

`boolean`

#### Inherited from

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`findValueInSet`](IgxFilteringOperand.md#findvalueinset)

***

### applyIgnoreCase()

> `static` **applyIgnoreCase**(`a`, `ignoreCase`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:889](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L889)

Applies case sensitivity on strings if provided

#### Parameters

##### a

`string`

##### ignoreCase

`boolean`

#### Returns

`string`

#### Memberof

IgxStringFilteringOperand

***

### instance()

> `static` **instance**(): [`IgxFilteringOperand`](IgxFilteringOperand.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L43)

#### Returns

[`IgxFilteringOperand`](IgxFilteringOperand.md)

#### Inherited from

[`IgxFilteringOperand`](IgxFilteringOperand.md).[`instance`](IgxFilteringOperand.md#instance)
