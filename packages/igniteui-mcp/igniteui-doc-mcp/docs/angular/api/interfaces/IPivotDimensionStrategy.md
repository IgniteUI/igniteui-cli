# Interface: IPivotDimensionStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L42)

Interface describing Pivot data processing for dimensions.
Should contain a process method and return records hierarchy based on the provided dimensions.

## Methods

### process()

> **process**(`collection`, `dimensions`, `values`, `cloneStrategy`, `pivotKeys?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L44)

#### Parameters

##### collection

`any`

##### dimensions

[`IPivotDimension`](IPivotDimension.md)[]

##### values

[`IPivotValue`](IPivotValue.md)[]

##### cloneStrategy

[`IDataCloneStrategy`](IDataCloneStrategy.md)

##### pivotKeys?

[`IPivotKeys`](IPivotKeys.md)

#### Returns

`any`[]
