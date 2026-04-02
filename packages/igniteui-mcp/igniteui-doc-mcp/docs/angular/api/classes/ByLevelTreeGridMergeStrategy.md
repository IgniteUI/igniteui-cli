# Class: ByLevelTreeGridMergeStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:168](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L168)

Merge strategy interface.

## Extends

- [`DefaultMergeStrategy`](DefaultMergeStrategy.md)

## Constructors

### Constructor

> **new ByLevelTreeGridMergeStrategy**(): `ByLevelTreeGridMergeStrategy`

#### Returns

`ByLevelTreeGridMergeStrategy`

#### Inherited from

[`DefaultMergeStrategy`](DefaultMergeStrategy.md).[`constructor`](DefaultMergeStrategy.md#constructor)

## Properties

### \_instance

> `protected` `static` **\_instance**: [`DefaultMergeStrategy`](DefaultMergeStrategy.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L46)

#### Inherited from

[`DefaultMergeStrategy`](DefaultMergeStrategy.md).[`_instance`](DefaultMergeStrategy.md#_instance)

## Methods

### comparer()

> **comparer**(`prevRecord`, `record`, `field`, `isDate?`, `isTime?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:170](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L170)

Function that compares values for merging. Returns true if same, false if different.

#### Parameters

##### prevRecord

`any`

##### record

`any`

##### field

`string`

##### isDate?

`boolean` = `false`

##### isTime?

`boolean` = `false`

#### Returns

`boolean`

#### Overrides

[`DefaultMergeStrategy`](DefaultMergeStrategy.md).[`comparer`](DefaultMergeStrategy.md#comparer)

***

### merge()

> **merge**(`data`, `field`, `comparer?`, `result`, `activeRowIndexes`, `isDate?`, `isTime?`, `grid?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L53)

Function that processes merging of the whole data per merged field.
Returns collection where object has reference to the original record and map of the cell merge metadata per field.

#### Parameters

##### data

`any`[]

##### field

`string`

##### comparer?

(`prevRecord`, `record`, `field`, `isDate?`, `isTime?`) => `boolean`

##### result

`any`[]

##### activeRowIndexes

`number`[]

##### isDate?

`boolean` = `false`

##### isTime?

`boolean` = `false`

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`any`[]

#### Inherited from

[`DefaultMergeStrategy`](DefaultMergeStrategy.md).[`merge`](DefaultMergeStrategy.md#merge)

***

### instance()

> `static` **instance**(): [`DefaultMergeStrategy`](DefaultMergeStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L48)

#### Returns

[`DefaultMergeStrategy`](DefaultMergeStrategy.md)

#### Inherited from

[`DefaultMergeStrategy`](DefaultMergeStrategy.md).[`instance`](DefaultMergeStrategy.md#instance)
