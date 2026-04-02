# Class: NoopFilteringStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:232](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L232)

## Extends

- [`BaseFilteringStrategy`](BaseFilteringStrategy.md)

## Constructors

### Constructor

> **new NoopFilteringStrategy**(): `NoopFilteringStrategy`

#### Returns

`NoopFilteringStrategy`

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`constructor`](BaseFilteringStrategy.md#constructor)

## Methods

### filter()

> **filter**(`data`, `_`, `__?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:242](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L242)

#### Parameters

##### data

`any`[]

##### \_

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### \_\_?

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Returns

`any`[]

#### Overrides

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`filter`](BaseFilteringStrategy.md#filter)

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

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`findMatchByExpression`](BaseFilteringStrategy.md#findmatchbyexpression)

***

### getFieldValue()

> `protected` **getFieldValue**(`rec`, `_fieldName`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:233](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L233)

#### Parameters

##### rec

`any`

##### \_fieldName

`string`

#### Returns

`any`

#### Overrides

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`getFieldValue`](BaseFilteringStrategy.md#getfieldvalue)

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

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`getFilteredData`](BaseFilteringStrategy.md#getfiltereddata)

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

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`getFilterItemKeyValue`](BaseFilteringStrategy.md#getfilteritemkeyvalue)

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

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`getFilterItemLabel`](BaseFilteringStrategy.md#getfilteritemlabel)

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

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`getFilterItems`](BaseFilteringStrategy.md#getfilteritems)

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

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`matchRecord`](BaseFilteringStrategy.md#matchrecord)

***

### shouldFormatFilterValues()

> `protected` **shouldFormatFilterValues**(`_column`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L221)

#### Parameters

##### \_column

[`ColumnType`](../interfaces/ColumnType.md)

#### Returns

`boolean`

#### Inherited from

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`shouldFormatFilterValues`](BaseFilteringStrategy.md#shouldformatfiltervalues)

***

### instance()

> `static` **instance**(): `NoopFilteringStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:238](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L238)

#### Returns

`NoopFilteringStrategy`
