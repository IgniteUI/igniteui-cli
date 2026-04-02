# Interface: IPivotValue

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:149](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L149)

Configuration of a pivot value aggregation.

## Properties

### aggregate

> **aggregate**: [`IPivotAggregator`](IPivotAggregator.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L157)

Active aggregator definition with key, label and aggregator.

***

### aggregateList?

> `optional` **aggregateList?**: [`IPivotAggregator`](IPivotAggregator.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L161)

List of aggregates to show in aggregate drop-down.

***

### dataType?

> `optional` **dataType?**: `GridColumnDataType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L167)

Enables a data type specific template of the cells

***

### displayName?

> `optional` **displayName?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L153)

Display name to show instead of member for the column header of this value. *

***

### enabled

> **enabled**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L163)

Enables/Disables a particular value from pivot aggregation.

***

### formatter?

> `optional` **formatter?**: (`value`, `rowData?`, `columnData?`) => `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:172](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L172)

Applies display format to cell values.

#### Parameters

##### value

`any`

##### rowData?

[`IPivotGridRecord`](IPivotGridRecord.md)

##### columnData?

[`IPivotGridColumn`](IPivotGridColumn.md)

#### Returns

`any`

***

### member

> **member**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:151](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L151)

Unique member to extract related data field value for aggregations.

***

### styles?

> `optional` **styles?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L165)

Allow conditionally styling of the IgxPivotGrid cells.
