# Class: IgxDateFilteringOperand

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L210)

Provides filtering operations for Dates

## Export

## Extends

- `IgxBaseDateTimeFilteringOperand`

## Constructors

### Constructor

> `protected` **new IgxDateFilteringOperand**(): `IgxDateFilteringOperand`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:211](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L211)

#### Returns

`IgxDateFilteringOperand`

#### Overrides

`IgxBaseDateTimeFilteringOperand.constructor`

## Properties

### operations

> **operations**: [`IFilteringOperation`](../interfaces/IFilteringOperation.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L9)

#### Inherited from

`IgxBaseDateTimeFilteringOperand.operations`

***

### \_instance

> `protected` `static` **\_instance**: [`IgxFilteringOperand`](IgxFilteringOperand.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L8)

#### Inherited from

`IgxBaseDateTimeFilteringOperand._instance`

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

`IgxBaseDateTimeFilteringOperand.append`

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

`IgxBaseDateTimeFilteringOperand.condition`

***

### conditionList()

> **conditionList**(): `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L50)

Returns an array of names of the conditions which are visible in the filtering UI

#### Returns

`string`[]

#### Inherited from

`IgxBaseDateTimeFilteringOperand.conditionList`

***

### findValueInSet()

> `protected` **findValueInSet**(`target`, `searchVal`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L418)

#### Parameters

##### target

`any`

##### searchVal

`Set`\<`any`\>

#### Returns

`boolean`

#### Overrides

`IgxBaseDateTimeFilteringOperand.findValueInSet`

***

### validateInputData()

> `protected` **validateInputData**(`target`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:197](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L197)

#### Parameters

##### target

`Date`

#### Returns

`void`

#### Inherited from

`IgxBaseDateTimeFilteringOperand.validateInputData`

***

### getDateParts()

> `static` **getDateParts**(`date`, `dateFormat?`): [`IDateParts`](../interfaces/IDateParts.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L153)

Splits a Date object into parts

#### Parameters

##### date

`Date`

##### dateFormat?

`string`

#### Returns

[`IDateParts`](../interfaces/IDateParts.md)

#### Memberof

IgxDateFilteringOperand

#### Inherited from

`IgxBaseDateTimeFilteringOperand.getDateParts`

***

### instance()

> `static` **instance**(): [`IgxFilteringOperand`](IgxFilteringOperand.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-condition.ts#L43)

#### Returns

[`IgxFilteringOperand`](IgxFilteringOperand.md)

#### Inherited from

`IgxBaseDateTimeFilteringOperand.instance`
