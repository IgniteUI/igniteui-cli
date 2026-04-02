# Class: DefaultMergeStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L45)

Merge strategy interface.

## Extended by

- [`DefaultTreeGridMergeStrategy`](DefaultTreeGridMergeStrategy.md)
- [`ByLevelTreeGridMergeStrategy`](ByLevelTreeGridMergeStrategy.md)

## Implements

- [`IGridMergeStrategy`](../interfaces/IGridMergeStrategy.md)

## Constructors

### Constructor

> **new DefaultMergeStrategy**(): `DefaultMergeStrategy`

#### Returns

`DefaultMergeStrategy`

## Properties

### \_instance

> `protected` `static` **\_instance**: `DefaultMergeStrategy` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L46)

## Methods

### comparer()

> **comparer**(`prevRecord`, `record`, `field`, `isDate?`, `isTime?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L95)

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

#### Implementation of

[`IGridMergeStrategy`](../interfaces/IGridMergeStrategy.md).[`comparer`](../interfaces/IGridMergeStrategy.md#comparer)

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

#### Implementation of

[`IGridMergeStrategy`](../interfaces/IGridMergeStrategy.md).[`merge`](../interfaces/IGridMergeStrategy.md#merge)

***

### instance()

> `static` **instance**(): `DefaultMergeStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L48)

#### Returns

`DefaultMergeStrategy`
