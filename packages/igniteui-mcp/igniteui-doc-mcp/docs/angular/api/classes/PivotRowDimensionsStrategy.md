# Class: PivotRowDimensionsStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L24)

Interface describing Pivot data processing for dimensions.
Should contain a process method and return records hierarchy based on the provided dimensions.

## Implements

- [`IPivotDimensionStrategy`](../interfaces/IPivotDimensionStrategy.md)

## Constructors

### Constructor

> **new PivotRowDimensionsStrategy**(): `PivotRowDimensionsStrategy`

#### Returns

`PivotRowDimensionsStrategy`

## Methods

### process()

> **process**(`collection`, `rows`, `values`, `cloneStrategy`, `pivotKeys?`): [`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L31)

#### Parameters

##### collection

`any`

##### rows

[`IPivotDimension`](../interfaces/IPivotDimension.md)[]

##### values

[`IPivotValue`](../interfaces/IPivotValue.md)[]

##### cloneStrategy

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

##### pivotKeys?

[`IPivotKeys`](../interfaces/IPivotKeys.md) = `DEFAULT_PIVOT_KEYS`

#### Returns

[`IPivotGridRecord`](../interfaces/IPivotGridRecord.md)[]

#### Implementation of

[`IPivotDimensionStrategy`](../interfaces/IPivotDimensionStrategy.md).[`process`](../interfaces/IPivotDimensionStrategy.md#process)

***

### instance()

> `static` **instance**(): `PivotRowDimensionsStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L27)

#### Returns

`PivotRowDimensionsStrategy`
