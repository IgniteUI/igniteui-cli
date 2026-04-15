# Function: recreateTree()

> **recreateTree**(`tree`, `entities`, `isRoot?`): [`IExpressionTree`](../interfaces/IExpressionTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts:181](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts#L181)

Recreates the tree from a given array of entities by applying the correct operands
for each expression and adjusting the search values to be the correct type.

## Parameters

### tree

[`IExpressionTree`](../interfaces/IExpressionTree.md)

The expression tree to recreate.

### entities

[`EntityType`](../interfaces/EntityType.md)[]

An array of entities to use for recreating the tree.

### isRoot?

`boolean` = `false`

## Returns

[`IExpressionTree`](../interfaces/IExpressionTree.md)

The recreated expression tree.
