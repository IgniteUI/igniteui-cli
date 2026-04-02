# Abstract Class: BaseFilteringStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L39)

## Extended by

- [`NoopFilteringStrategy`](NoopFilteringStrategy.md)
- [`FilteringStrategy`](FilteringStrategy.md)
- [`TreeGridFilteringStrategy`](TreeGridFilteringStrategy.md)

## Implements

- [`IFilteringStrategy`](../interfaces/IFilteringStrategy.md)

## Constructors

### Constructor

> **new BaseFilteringStrategy**(): `BaseFilteringStrategy`

#### Returns

`BaseFilteringStrategy`

## Methods

### filter()

> `abstract` **filter**(`data`, `expressionsTree`, `advancedExpressionsTree?`, `grid?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:225](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L225)

#### Parameters

##### data

`any`[]

##### expressionsTree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### advancedExpressionsTree?

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`any`[]

#### Implementation of

[`IFilteringStrategy`](../interfaces/IFilteringStrategy.md).[`filter`](../interfaces/IFilteringStrategy.md#filter)

***

### findMatchByExpression()

> **findMatchByExpression**(`rec`, `expr`, `isDate?`, `isTime?`, `grid?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L41)

#### Parameters

##### rec

`any`

##### expr

[`IFilteringExpression`](../interfaces/IFilteringExpression.md)

##### isDate?

`boolean`

##### isTime?

`boolean`

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`boolean`

***

### getFieldValue()

> `abstract` `protected` **getFieldValue**(`rec`, `fieldName`, `isDate?`, `isTime?`, `grid?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:228](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L228)

#### Parameters

##### rec

`any`

##### fieldName

`string`

##### isDate?

`boolean`

##### isTime?

`boolean`

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`any`

***

### getFilteredData()

> `protected` **getFilteredData**(`column`, `tree`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:159](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L159)

#### Parameters

##### column

[`ColumnType`](../interfaces/ColumnType.md)

##### tree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Returns

`any`

***

### getFilterItemKeyValue()

> `protected` **getFilterItemKeyValue**(`value`, `column`): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:192](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L192)

#### Parameters

##### value

`any`

##### column

[`ColumnType`](../interfaces/ColumnType.md)

#### Returns

`object`

##### finalValue

> **finalValue**: `any`

##### key

> **key**: `any`

***

### getFilterItemLabel()

> `protected` **getFilterItemLabel**(`column`, `value`, `applyFormatter`, `data`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L163)

#### Parameters

##### column

[`ColumnType`](../interfaces/ColumnType.md)

##### value

`any`

##### applyFormatter

`boolean`

##### data

`any`

#### Returns

`any`

***

### getFilterItems()

> **getFilterItems**(`column`, `tree`): `Promise`\<[`IgxFilterItem`](../interfaces/IgxFilterItem.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L131)

#### Parameters

##### column

[`ColumnType`](../interfaces/ColumnType.md)

##### tree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Returns

`Promise`\<[`IgxFilterItem`](../interfaces/IgxFilterItem.md)[]\>

#### Implementation of

[`IFilteringStrategy`](../interfaces/IFilteringStrategy.md).[`getFilterItems`](../interfaces/IFilteringStrategy.md#getfilteritems)

***

### matchRecord()

> **matchRecord**(`rec`, `expressions`, `grid?`, `entity?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L67)

#### Parameters

##### rec

`any`

##### expressions

[`IFilteringExpression`](../interfaces/IFilteringExpression.md) \| [`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

##### entity?

`string`

#### Returns

`boolean`

***

### shouldFormatFilterValues()

> `protected` **shouldFormatFilterValues**(`_column`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L221)

#### Parameters

##### \_column

[`ColumnType`](../interfaces/ColumnType.md)

#### Returns

`boolean`
