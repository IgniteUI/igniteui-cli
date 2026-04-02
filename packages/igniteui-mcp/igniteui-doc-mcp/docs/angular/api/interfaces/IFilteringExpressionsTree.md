# Interface: IFilteringExpressionsTree

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L22)

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md).[`IExpressionTree`](IExpressionTree.md)

## Properties

### entity?

> `optional` **entity?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L16)

#### Inherited from

[`IExpressionTree`](IExpressionTree.md).[`entity`](IExpressionTree.md#entity)

***

### fieldName?

> `optional` **fieldName?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L15)

#### Inherited from

[`IExpressionTree`](IExpressionTree.md).[`fieldName`](IExpressionTree.md#fieldname)

***

### filteringOperands

> **filteringOperands**: ([`IFilteringExpression`](IFilteringExpression.md) \| `IFilteringExpressionsTree`)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L23)

#### Overrides

[`IExpressionTree`](IExpressionTree.md).[`filteringOperands`](IExpressionTree.md#filteringoperands)

***

### ~~find?~~

> `optional` **find?**: (`fieldName`) => [`IFilteringExpression`](IFilteringExpression.md) \| `IFilteringExpressionsTree`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L31)

#### Parameters

##### fieldName

`string`

#### Returns

[`IFilteringExpression`](IFilteringExpression.md) \| `IFilteringExpressionsTree`

#### Deprecated

in version 18.2.0. Use `ExpressionsTreeUtil.find` instead.

***

### ~~findIndex?~~

> `optional` **findIndex?**: (`fieldName`) => `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L37)

#### Parameters

##### fieldName

`string`

#### Returns

`number`

#### Deprecated

in version 18.2.0. Use `ExpressionsTreeUtil.findIndex` instead.

***

### operator

> **operator**: [`FilteringLogic`](../enumerations/FilteringLogic.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L14)

#### Inherited from

[`IExpressionTree`](IExpressionTree.md).[`operator`](IExpressionTree.md#operator)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### returnFields?

> `optional` **returnFields?**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L17)

#### Inherited from

[`IExpressionTree`](IExpressionTree.md).[`returnFields`](IExpressionTree.md#returnfields)

***

### type?

> `optional` **type?**: [`FilteringExpressionsTreeType`](../enumerations/FilteringExpressionsTreeType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L25)
