# Class: IgxFilteringOperand

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L7)

Provides base filtering operations
Implementations should be Singleton

## Export

## Extended by

- [`IgxBooleanFilteringOperand`](IgxBooleanFilteringOperand.md)
- [`IgxNumberFilteringOperand`](IgxNumberFilteringOperand.md)
- [`IgxStringFilteringOperand`](IgxStringFilteringOperand.md)

## Constructors

### Constructor

> **new IgxFilteringOperand**(): `IgxFilteringOperand`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L11)

#### Returns

`IgxFilteringOperand`

## Properties

### operations

> **operations**: [`IFilteringOperation`](../interfaces/IFilteringOperation.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L9)

***

### \_instance

> `protected` `static` **\_instance**: `IgxFilteringOperand` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L8)

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

***

### conditionList()

> **conditionList**(): `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L50)

Returns an array of names of the conditions which are visible in the filtering UI

#### Returns

`string`[]

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

***

### instance()

> `static` **instance**(): `IgxFilteringOperand`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L43)

#### Returns

`IgxFilteringOperand`
