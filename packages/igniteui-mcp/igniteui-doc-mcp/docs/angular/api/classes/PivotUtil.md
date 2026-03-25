# Class: PivotUtil

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L6)

## Constructors

### Constructor

> **new PivotUtil**(): `PivotUtil`

#### Returns

`PivotUtil`

## Methods

### aggregate()

> `static` **aggregate**(`records`, `values`): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:324](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L324)

#### Parameters

##### records

`any`

##### values

[`IPivotValue`](../interfaces/IPivotValue.md)[]

#### Returns

`object`

***

### applyAggregationRecordData()

> `protected` `static` **applyAggregationRecordData**(`aggregationData`, `groupName`, `rec`, `pivotKeys`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:311](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L311)

#### Parameters

##### aggregationData

`any`

##### groupName

`string`

##### rec

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)

##### pivotKeys

[`IPivotKeys`](../interfaces/IPivotKeys.md)

#### Returns

`void`

***

### applyAggregations()

> `static` **applyAggregations**(`rec`, `hierarchies`, `values`, `pivotKeys`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:290](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L290)

#### Parameters

##### rec

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)

##### hierarchies

`any`

##### values

`any`

##### pivotKeys

[`IPivotKeys`](../interfaces/IPivotKeys.md)

#### Returns

`void`

***

### assignLevels()

> `static` **assignLevels**(`dims`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L175)

#### Parameters

##### dims

`any`

#### Returns

`void`

***

### buildExpressionTree()

> `static` **buildExpressionTree**(`config`): [`FilteringExpressionsTree`](FilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:404](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L404)

#### Parameters

##### config

[`IPivotConfiguration`](../interfaces/IPivotConfiguration.md)

#### Returns

[`FilteringExpressionsTree`](FilteringExpressionsTree.md)

***

### extractValueFromDimension()

> `static` **extractValueFromDimension**(`dim`, `recData`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L222)

#### Parameters

##### dim

[`IPivotDimension`](../interfaces/IPivotDimension.md)

##### recData

`any`

#### Returns

`any`

***

### extractValuesForColumn()

> `static` **extractValuesForColumn**(`dims`, `recData`, `pivotKeys`, `path?`): `Map`\<`string`, `any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:257](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L257)

#### Parameters

##### dims

[`IPivotDimension`](../interfaces/IPivotDimension.md)[]

##### recData

`any`

##### pivotKeys

[`IPivotKeys`](../interfaces/IPivotKeys.md)

##### path?

`any`[] = `[]`

#### Returns

`Map`\<`string`, `any`\>

***

### extractValuesForRow()

> `static` **extractValuesForRow**(`dims`, `recData`, `pivotKeys`, `cloneStrategy`): `Map`\<`string`, `any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:235](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L235)

#### Parameters

##### dims

[`IPivotDimension`](../interfaces/IPivotDimension.md)[]

##### recData

`any`

##### pivotKeys

[`IPivotKeys`](../interfaces/IPivotKeys.md)

##### cloneStrategy

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

#### Returns

`Map`\<`string`, `any`\>

***

### flatten()

> `static` **flatten**(`arr`, `lvl?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:275](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L275)

#### Parameters

##### arr

`any`

##### lvl?

`number` = `0`

#### Returns

`any`

***

### flattenGroups()

> `static` **flattenGroups**(`data`, `dimension`, `expansionStates`, `defaultExpand`, `parent?`, `parentRec?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L27)

#### Parameters

##### data

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

##### dimension

[`IPivotDimension`](../interfaces/IPivotDimension.md)

##### expansionStates

`any`

##### defaultExpand

`boolean`

##### parent?

[`IPivotDimension`](../interfaces/IPivotDimension.md)

##### parentRec?

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)

#### Returns

`void`

***

### flattenGroupsHorizontally()

> `static` **flattenGroupsHorizontally**(`data`, `dimension`, `expansionStates`, `defaultExpand`, `visibleDimensions`, `summariesPosition`, `parent?`, `parentRec?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L85)

#### Parameters

##### data

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

##### dimension

[`IPivotDimension`](../interfaces/IPivotDimension.md)

##### expansionStates

`any`

##### defaultExpand

`boolean`

##### visibleDimensions

[`IPivotDimension`](../interfaces/IPivotDimension.md)[]

##### summariesPosition

[`PivotSummaryPosition`](../enumerations/PivotSummaryPosition.md)

##### parent?

[`IPivotDimension`](../interfaces/IPivotDimension.md)

##### parentRec?

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)

#### Returns

`void`

***

### getAggregateList()

> `static` **getAggregateList**(`val`, `grid`): [`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:473](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L473)

#### Parameters

##### val

[`IPivotValue`](../interfaces/IPivotValue.md)

##### grid

[`PivotGridType`](../interfaces/PivotGridType.md)

#### Returns

[`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

***

### getAggregatorForType()

> `static` **getAggregatorForType**(`aggregate`, `dataType`): (`members`, `data?`) => `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:337](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L337)

#### Parameters

##### aggregate

[`IPivotAggregator`](../interfaces/IPivotAggregator.md)

##### dataType

`GridColumnDataType`

#### Returns

(`members`, `data?`) => `any`

***

### getAggregatorsForValue()

> `static` **getAggregatorsForValue**(`value`, `grid`): [`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:494](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L494)

#### Parameters

##### value

[`IPivotValue`](../interfaces/IPivotValue.md)

##### grid

[`PivotGridType`](../interfaces/PivotGridType.md)

#### Returns

[`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

***

### getDimensionDepth()

> `static` **getDimensionDepth**(`dim`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:226](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L226)

#### Parameters

##### dim

[`IPivotDimension`](../interfaces/IPivotDimension.md)

#### Returns

`number`

***

### getDirectLeafs()

> `static` **getDirectLeafs**(`records`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:378](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L378)

#### Parameters

##### records

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

#### Returns

`any`[]

***

### getFieldsHierarchy()

> `static` **getFieldsHierarchy**(`data`, `dimensions`, `dimensionType`, `pivotKeys`, `cloneStrategy`): `Map`\<`string`, `any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L187)

#### Parameters

##### data

`any`[]

##### dimensions

[`IPivotDimension`](../interfaces/IPivotDimension.md)[]

##### dimensionType

[`PivotDimensionType`](../enumerations/PivotDimensionType.md)

##### pivotKeys

[`IPivotKeys`](../interfaces/IPivotKeys.md)

##### cloneStrategy

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

#### Returns

`Map`\<`string`, `any`\>

***

### getRecordKey()

> `static` **getRecordKey**(`rec`, `currentDim`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:391](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L391)

#### Parameters

##### rec

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)

##### currentDim

[`IPivotDimension`](../interfaces/IPivotDimension.md)

#### Returns

`string`

***

### processGroups()

> `static` **processGroups**(`recs`, `dimension`, `pivotKeys`, `cloneStrategy`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L9)

#### Parameters

##### recs

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

##### dimension

[`IPivotDimension`](../interfaces/IPivotDimension.md)

##### pivotKeys

[`IPivotKeys`](../interfaces/IPivotKeys.md)

##### cloneStrategy

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

#### Returns

`void`

***

### processHierarchy()

> `static` **processHierarchy**(`hierarchies`, `pivotKeys`, `level?`, `rootData?`): [`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:351](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L351)

#### Parameters

##### hierarchies

`any`

##### pivotKeys

`any`

##### level?

`number` = `0`

##### rootData?

`boolean` = `false`

#### Returns

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

***

### sort()

> `static` **sort**(`data`, `expressions`, `sorting?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L206)

#### Parameters

##### data

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

##### expressions

[`ISortingExpression`](../interfaces/ISortingExpression.md)\<`any`\>[]

##### sorting?

[`IGridSortingStrategy`](../interfaces/IGridSortingStrategy.md) = `...`

#### Returns

`any`[]

***

### updateColumnTypeByAggregator()

> `static` **updateColumnTypeByAggregator**(`columns`, `value`, `isSingleValue`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-util.ts:510](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-util.ts#L510)

#### Parameters

##### columns

`any`[]

##### value

[`IPivotValue`](../interfaces/IPivotValue.md)

##### isSingleValue

`boolean`

#### Returns

`void`
