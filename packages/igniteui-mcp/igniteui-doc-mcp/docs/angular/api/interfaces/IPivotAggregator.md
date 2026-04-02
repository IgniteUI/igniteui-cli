# Interface: IPivotAggregator

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L62)

Interface describing a IPivotAggregator class.
Used for specifying custom aggregator lists.

## Properties

### aggregator?

> `optional` **aggregator?**: (`members`, `data?`) => `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L79)

Aggregator function can be a custom implementation of `PivotAggregation`, or
use predefined ones from `IgxPivotAggregate` and its variants.

#### Parameters

##### members

`any`[]

##### data?

`any`[]

#### Returns

`any`

***

### aggregatorName?

> `optional` **aggregatorName?**: [`PivotAggregationType`](../type-aliases/PivotAggregationType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L71)

Aggregation name that will be used from a list of predefined aggregations.
If not set will use the specified aggregator function.

***

### key

> **key**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L64)

Aggregation unique key.

***

### label

> **label**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L66)

Aggregation label to show in the UI.
