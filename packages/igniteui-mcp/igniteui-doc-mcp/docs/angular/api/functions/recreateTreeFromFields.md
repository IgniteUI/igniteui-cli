# Function: recreateTreeFromFields()

> **recreateTreeFromFields**(`tree`, `fields`): [`IExpressionTree`](../interfaces/IExpressionTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts:207](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts#L207)

Recreates the tree from a given array of fields by applying the correct operands.
It is recommended to use `recreateTree` if there will be multiple entities in the tree
with potentially colliding field names.

## Parameters

### tree

[`IExpressionTree`](../interfaces/IExpressionTree.md)

The expression tree to recreate.

### fields

[`FieldType`](../interfaces/FieldType.md)[]

An array of fields to use for recreating the tree.

## Returns

[`IExpressionTree`](../interfaces/IExpressionTree.md)
