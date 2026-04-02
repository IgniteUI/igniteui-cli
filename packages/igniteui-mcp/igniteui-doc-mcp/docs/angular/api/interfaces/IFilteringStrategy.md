# Interface: IFilteringStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L24)

## Methods

### filter()

> **filter**(`data`, `expressionsTree`, `advancedExpressionsTree?`, `grid?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L25)

#### Parameters

##### data

`any`[]

##### expressionsTree

[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

##### advancedExpressionsTree?

[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

##### grid?

[`GridTypeBase`](GridTypeBase.md)

#### Returns

`any`[]

***

### getFilterItems()

> **getFilterItems**(`column`, `tree`): `Promise`\<[`IgxFilterItem`](IgxFilterItem.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L28)

#### Parameters

##### column

[`ColumnType`](ColumnType.md)

##### tree

[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

#### Returns

`Promise`\<[`IgxFilterItem`](IgxFilterItem.md)[]\>
