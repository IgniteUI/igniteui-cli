# Interface: IPivotDimensionData

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:238](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L238)

Interface describing the pivot dimension data.
Contains additional information needed to render dimension headers.

## Properties

### column

> **column**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:240](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L240)

Associated column definition.

***

### dimension

> **dimension**: [`IPivotDimension`](IPivotDimension.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:242](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L242)

Associated dimension definition.

***

### isChild?

> `optional` **isChild?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L246)

Whether this a child dimension.

***

### prevDimensions

> **prevDimensions**: [`IPivotDimension`](IPivotDimension.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:244](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L244)

List of previous dimension groups.
