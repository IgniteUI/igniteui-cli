# Class: DimensionValuesFilteringStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L127)

## Extends

- [`FilteringStrategy`](FilteringStrategy.md)

## Constructors

### Constructor

> **new DimensionValuesFilteringStrategy**(`fields?`): `DimensionValuesFilteringStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L135)

Creates a new instance of FormattedValuesFilteringStrategy.

#### Parameters

##### fields?

`string`[]

An array of column field names that should be formatted.
If omitted the values of all columns which has formatter will be formatted.

#### Returns

`DimensionValuesFilteringStrategy`

#### Overrides

[`FilteringStrategy`](FilteringStrategy.md).[`constructor`](FilteringStrategy.md#constructor)

## Methods

### filter()

> **filter**\<`T`\>(`data`, `expressionsTree`, `advancedExpressionsTree`, `grid`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:256](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L256)

#### Type Parameters

##### T

`T`

#### Parameters

##### data

`T`[]

##### expressionsTree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### advancedExpressionsTree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### grid

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`T`[]

#### Inherited from

[`FilteringStrategy`](FilteringStrategy.md).[`filter`](FilteringStrategy.md#filter)

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

[`FilteringStrategy`](FilteringStrategy.md).[`findMatchByExpression`](FilteringStrategy.md#findmatchbyexpression)

***

### getFieldValue()

> `protected` **getFieldValue**(`rec`, `fieldName`, `_isDate?`, `_isTime?`, `grid?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:139](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L139)

#### Parameters

##### rec

`any`

##### fieldName

`string`

##### \_isDate?

`boolean` = `false`

##### \_isTime?

`boolean` = `false`

##### grid?

[`PivotGridType`](../interfaces/PivotGridType.md)

#### Returns

`any`

#### Overrides

[`FilteringStrategy`](FilteringStrategy.md).[`getFieldValue`](FilteringStrategy.md#getfieldvalue)

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

[`FilteringStrategy`](FilteringStrategy.md).[`getFilteredData`](FilteringStrategy.md#getfiltereddata)

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

[`FilteringStrategy`](FilteringStrategy.md).[`getFilterItemKeyValue`](FilteringStrategy.md#getfilteritemkeyvalue)

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

[`FilteringStrategy`](FilteringStrategy.md).[`getFilterItemLabel`](FilteringStrategy.md#getfilteritemlabel)

***

### getFilterItems()

> **getFilterItems**(`column`, `tree`): `Promise`\<[`IgxFilterItem`](../interfaces/IgxFilterItem.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L148)

#### Parameters

##### column

[`ColumnType`](../interfaces/ColumnType.md)

##### tree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Returns

`Promise`\<[`IgxFilterItem`](../interfaces/IgxFilterItem.md)[]\>

#### Overrides

[`FilteringStrategy`](FilteringStrategy.md).[`getFilterItems`](FilteringStrategy.md#getfilteritems)

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

[`FilteringStrategy`](FilteringStrategy.md).[`matchRecord`](FilteringStrategy.md#matchrecord)

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

[`FilteringStrategy`](FilteringStrategy.md).[`shouldFormatFilterValues`](FilteringStrategy.md#shouldformatfiltervalues)

***

### instance()

> `static` **instance**(): [`FilteringStrategy`](FilteringStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-strategy.ts#L252)

#### Returns

[`FilteringStrategy`](FilteringStrategy.md)

#### Inherited from

[`FilteringStrategy`](FilteringStrategy.md).[`instance`](FilteringStrategy.md#instance)
