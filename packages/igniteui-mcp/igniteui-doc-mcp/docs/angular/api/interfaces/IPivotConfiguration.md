# Interface: IPivotConfiguration

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L86)

Configuration of the pivot grid.

## Properties

### columns

> **columns**: [`IPivotDimension`](IPivotDimension.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L94)

A list of the columns.

***

### columnStrategy?

> `optional` **columnStrategy?**: [`IPivotDimensionStrategy`](IPivotDimensionStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L90)

A strategy to transform the columns.

***

### filters?

> `optional` **filters?**: [`IPivotDimension`](IPivotDimension.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L98)

Dimensions to be displayed in the filter area.

***

### pivotKeys?

> `optional` **pivotKeys?**: [`IPivotKeys`](IPivotKeys.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L100)

Pivot data keys used for data generation. Can be used for custom remote scenarios where the data is pre-populated.

***

### rows

> **rows**: [`IPivotDimension`](IPivotDimension.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L92)

A list of the rows.

***

### rowStrategy?

> `optional` **rowStrategy?**: [`IPivotDimensionStrategy`](IPivotDimensionStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L88)

A strategy to transform the rows.

***

### values

> **values**: [`IPivotValue`](IPivotValue.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid.interface.ts#L96)

A list of the values.
