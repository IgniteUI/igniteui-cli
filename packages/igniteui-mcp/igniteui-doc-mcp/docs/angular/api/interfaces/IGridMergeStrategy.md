# Interface: IGridMergeStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L14)

Merge strategy interface.

## Properties

### comparer

> **comparer**: (`prevRecord`, `record`, `field`) => `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L41)

Function that compares values for merging. Returns true if same, false if different.

#### Parameters

##### prevRecord

`any`

##### record

`any`

##### field

`string`

#### Returns

`boolean`

***

### merge

> **merge**: (`data`, `field`, `comparer`, `result`, `activeRowIndexes`, `isDate?`, `isTime?`, `grid?`) => `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/merge-strategy.ts#L20)

Function that processes merging of the whole data per merged field.
Returns collection where object has reference to the original record and map of the cell merge metadata per field.

#### Parameters

##### data

`any`[]

##### field

`string`

##### comparer

(`prevRecord`, `currentRecord`, `field`) => `boolean`

##### result

`any`[]

##### activeRowIndexes

`number`[]

##### isDate?

`boolean`

##### isTime?

`boolean`

##### grid?

[`GridTypeBase`](GridTypeBase.md)

#### Returns

`any`[]
