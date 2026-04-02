# Function: recreateExpression()

> **recreateExpression**(`expression`, `fields`): [`IFilteringExpression`](../interfaces/IFilteringExpression.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts:141](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/expressions-tree-util.ts#L141)

Recreates an expression from the given fields by applying the correct operands
and adjusting the search value to be the correct type.

## Parameters

### expression

[`IFilteringExpression`](../interfaces/IFilteringExpression.md)

The expression to recreate.

### fields

[`FieldType`](../interfaces/FieldType.md)[]

An array of fields to use for recreating the expression.

## Returns

[`IFilteringExpression`](../interfaces/IFilteringExpression.md)

The recreated expression.
