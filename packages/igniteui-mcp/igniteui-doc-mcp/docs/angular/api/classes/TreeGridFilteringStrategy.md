# Class: TreeGridFilteringStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts#L8)

## Extends

- [`BaseFilteringStrategy`](BaseFilteringStrategy.md)

## Extended by

- [`TreeGridFormattedValuesFilteringStrategy`](TreeGridFormattedValuesFilteringStrategy.md)
- [`TreeGridMatchingRecordsOnlyFilteringStrategy`](TreeGridMatchingRecordsOnlyFilteringStrategy.md)

## Constructors

### Constructor

> **new TreeGridFilteringStrategy**(`hierarchicalFilterFields?`): `TreeGridFilteringStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts#L10)

#### Parameters

##### hierarchicalFilterFields?

`string`[]

#### Returns

`TreeGridFilteringStrategy`

#### Overrides

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`constructor`](BaseFilteringStrategy.md#constructor)

## Properties

### hierarchicalFilterFields?

> `optional` **hierarchicalFilterFields?**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts#L10)

## Methods

### filter()

> **filter**(`data`, `expressionsTree`, `advancedExpressionsTree?`, `grid?`): [`ITreeGridRecord`](../interfaces/ITreeGridRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts#L14)

#### Parameters

##### data

[`ITreeGridRecord`](../interfaces/ITreeGridRecord.md)[]

##### expressionsTree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### advancedExpressionsTree?

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

[`ITreeGridRecord`](../interfaces/ITreeGridRecord.md)[]

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

> `protected` **getFieldValue**(`rec`, `fieldName`, `isDate?`, `isTime?`, `grid?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts#L19)

#### Parameters

##### rec

`any`

##### fieldName

`string`

##### isDate?

`boolean` = `false`

##### isTime?

`boolean` = `false`

##### grid?

[`GridTypeBase`](../interfaces/GridTypeBase.md)

#### Returns

`any`

#### Overrides

[`BaseFilteringStrategy`](BaseFilteringStrategy.md).[`getFieldValue`](BaseFilteringStrategy.md#getfieldvalue)

***

### getFilteredData()

> `protected` **getFilteredData**(`column`, `tree`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts#L90)

#### Parameters

##### column

[`ColumnType`](../interfaces/ColumnType.md)

##### tree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Returns

`any`

#### Overrides

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/tree-grid-filtering-strategy.ts#L72)

#### Parameters

##### column

[`ColumnType`](../interfaces/ColumnType.md)

##### tree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Returns

`Promise`\<[`IgxFilterItem`](../interfaces/IgxFilterItem.md)[]\>

#### Overrides

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
