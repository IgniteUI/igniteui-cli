# Class: NoopPivotDimensionsStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L11)

Interface describing Pivot data processing for dimensions.
Should contain a process method and return records hierarchy based on the provided dimensions.

## Implements

- [`IPivotDimensionStrategy`](../interfaces/IPivotDimensionStrategy.md)

## Constructors

### Constructor

> **new NoopPivotDimensionsStrategy**(): `NoopPivotDimensionsStrategy`

#### Returns

`NoopPivotDimensionsStrategy`

## Methods

### process()

> **process**(`collection`, `_`, `__`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L18)

#### Parameters

##### collection

`any`[]

##### \_

[`IPivotDimension`](../interfaces/IPivotDimension.md)[]

##### \_\_

[`IPivotValue`](../interfaces/IPivotValue.md)[]

#### Returns

`any`[]

#### Implementation of

[`IPivotDimensionStrategy`](../interfaces/IPivotDimensionStrategy.md).[`process`](../interfaces/IPivotDimensionStrategy.md#process)

***

### instance()

> `static` **instance**(): `NoopPivotDimensionsStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/pivot-strategy.ts#L14)

#### Returns

`NoopPivotDimensionsStrategy`
