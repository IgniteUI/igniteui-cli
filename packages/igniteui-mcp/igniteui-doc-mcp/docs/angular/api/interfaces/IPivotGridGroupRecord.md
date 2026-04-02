# Interface: IPivotGridGroupRecord

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:284](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L284)

## Extends

- [`IPivotGridRecord`](IPivotGridRecord.md)

## Properties

### aggregationValues

> **aggregationValues**: `Map`\<`string`, `any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:268](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L268)

Gets/Sets the aggregation value associated with the value path. Value path depends on configured column dimension hierarchy and values.*

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`aggregationValues`](IPivotGridRecord.md#aggregationvalues)

***

### children?

> `optional` **children?**: `Map`\<`string`, [`IPivotGridRecord`](IPivotGridRecord.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:271](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L271)

List of children records in case any row dimension member contain a hierarchy. Each dimension member contains its own hierarchy, which you can get by its memberName. *

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`children`](IPivotGridRecord.md#children)

***

### dataIndex?

> `optional` **dataIndex?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L281)

The index of the record in the total view

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`dataIndex`](IPivotGridRecord.md#dataindex)

***

### dimensions

> **dimensions**: [`IPivotDimension`](IPivotDimension.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:277](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L277)

List of dimensions associated with the record.*

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`dimensions`](IPivotGridRecord.md#dimensions)

***

### dimensionValues

> **dimensionValues**: `Map`\<`string`, `string`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L265)

Gets/Sets the group value associated with the related row dimension by its memberName. *

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`dimensionValues`](IPivotGridRecord.md#dimensionvalues)

***

### height?

> `optional` **height?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:285](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L285)

***

### level?

> `optional` **level?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:275](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L275)

Record level*

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`level`](IPivotGridRecord.md#level)

***

### records?

> `optional` **records?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:273](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L273)

List of original data records associated with the current pivoted data. *

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`records`](IPivotGridRecord.md#records)

***

### rowSpan?

> `optional` **rowSpan?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:286](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L286)

***

### totalRecordDimensionName?

> `optional` **totalRecordDimensionName?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:279](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L279)

If set, it specifies the name of the dimension, that has total record enabled.

#### Inherited from

[`IPivotGridRecord`](IPivotGridRecord.md).[`totalRecordDimensionName`](IPivotGridRecord.md#totalrecorddimensionname)
