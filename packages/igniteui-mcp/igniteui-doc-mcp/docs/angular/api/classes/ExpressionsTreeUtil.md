# Class: ExpressionsTreeUtil

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts#L8)

## Constructors

### Constructor

> **new ExpressionsTreeUtil**(): `ExpressionsTreeUtil`

#### Returns

`ExpressionsTreeUtil`

## Methods

### find()

> `static` **find**(`tree`, `fieldName`): [`IFilteringExpression`](../interfaces/IFilteringExpression.md) \| [`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts#L15)

Returns the filtering expression for a column with the provided tree and fieldName.
```typescript
let filteringExpression = ExpressionsTreeUtil.find(gridExpressionTree, 'Column Field');
```

#### Parameters

##### tree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### fieldName

`string`

#### Returns

[`IFilteringExpression`](../interfaces/IFilteringExpression.md) \| [`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

***

### findIndex()

> `static` **findIndex**(`tree`, `fieldName`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts#L31)

Returns the index of the filtering expression for a column with the provided tree and fieldName.
```typescript
let filteringExpressionIndex = ExpressionsTreeUtil.findIndex(gridExpressionTree, 'Column Field');
```

#### Parameters

##### tree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### fieldName

`string`

#### Returns

`number`

***

### isFilteringExpressionsTreeForColumn()

> `protected` `static` **isFilteringExpressionsTreeForColumn**(`expressionsTree`, `fieldName`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts#L46)

#### Parameters

##### expressionsTree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### fieldName

`string`

#### Returns

`boolean`
