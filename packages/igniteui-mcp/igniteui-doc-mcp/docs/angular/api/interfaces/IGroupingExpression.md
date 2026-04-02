# Interface: IGroupingExpression

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grouping-expression.interface.ts:5](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grouping-expression.interface.ts#L5)

## Extends

- [`ISortingExpression`](ISortingExpression.md)

## Properties

### dir

> **dir**: [`SortingDirection`](../enumerations/SortingDirection.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L17)

#### Inherited from

[`ISortingExpression`](ISortingExpression.md).[`dir`](ISortingExpression.md#dir)

***

### fieldName

> **fieldName**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L15)

#### Inherited from

[`ISortingExpression`](ISortingExpression.md).[`fieldName`](ISortingExpression.md#fieldname)

***

### groupingComparer?

> `optional` **groupingComparer?**: (`a`, `b`, `currRec?`, `groupRec?`) => `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grouping-expression.interface.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grouping-expression.interface.ts#L7)

#### Parameters

##### a

`any`

##### b

`any`

##### currRec?

`any`

##### groupRec?

`any`

#### Returns

`number`

***

### ignoreCase?

> `optional` **ignoreCase?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L18)

#### Inherited from

[`ISortingExpression`](ISortingExpression.md).[`ignoreCase`](ISortingExpression.md#ignorecase)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`ISortingExpression`](ISortingExpression.md).[`owner`](ISortingExpression.md#owner)

***

### strategy?

> `optional` **strategy?**: [`ISortingStrategy`](ISortingStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/sorting-strategy.ts#L19)

#### Inherited from

[`ISortingExpression`](ISortingExpression.md).[`strategy`](ISortingExpression.md#strategy)
