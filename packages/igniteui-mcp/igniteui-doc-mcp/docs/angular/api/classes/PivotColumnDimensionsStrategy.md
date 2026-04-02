# Class: PivotColumnDimensionsStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L66)

Interface describing Pivot data processing for dimensions.
Should contain a process method and return records hierarchy based on the provided dimensions.

## Implements

- [`IPivotDimensionStrategy`](../interfaces/IPivotDimensionStrategy.md)

## Constructors

### Constructor

> **new PivotColumnDimensionsStrategy**(): `PivotColumnDimensionsStrategy`

#### Returns

`PivotColumnDimensionsStrategy`

## Methods

### process()

> **process**(`collection`, `columns`, `values`, `cloneStrategy`, `pivotKeys?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L73)

#### Parameters

##### collection

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

##### columns

[`IPivotDimension`](../interfaces/IPivotDimension.md)[]

##### values

[`IPivotValue`](../interfaces/IPivotValue.md)[]

##### cloneStrategy

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

##### pivotKeys?

[`IPivotKeys`](../interfaces/IPivotKeys.md) = `DEFAULT_PIVOT_KEYS`

#### Returns

`any`[]

#### Implementation of

[`IPivotDimensionStrategy`](../interfaces/IPivotDimensionStrategy.md).[`process`](../interfaces/IPivotDimensionStrategy.md#process)

***

### instance()

> `static` **instance**(): [`PivotRowDimensionsStrategy`](PivotRowDimensionsStrategy.md) \| `PivotColumnDimensionsStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L69)

#### Returns

[`PivotRowDimensionsStrategy`](PivotRowDimensionsStrategy.md) \| `PivotColumnDimensionsStrategy`
