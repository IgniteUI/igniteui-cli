# Interface: ISortingStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L22)

## Properties

### sort

> **sort**: (`data`, `fieldName`, `dir`, `ignoreCase`, `valueResolver`, `isDate?`, `isTime?`, `grid?`) => `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L24)

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

[`GridTypeBase`](GridTypeBase.md)

#### Returns

`any`[]
