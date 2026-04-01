# Interface: HeaderType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L115)

Interface representing a header cell in the grid. It is essentially the blueprint to a header cell object.
Contains definitions of properties, relevant to the header

## Properties

### column

> **column**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L120)

The column that the header cell represents.

***

### nativeElement

> **nativeElement**: `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L118)

Represents the native HTML element of the cell itself

***

### selectable

> **selectable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L124)

Indicates whether the cell can be selected

***

### selected

> **selected**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L126)

Indicates whether the cell is currently selected

***

### sortDirection

> **sortDirection**: [`SortingDirection`](../enumerations/SortingDirection.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:130](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L130)

Represents the sorting direction of the column (ascending, descending or none).

***

### sorted

> **sorted**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:122](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L122)

Indicates whether the column is currently sorted.

***

### title

> **title**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L128)

Indicates whether the column header is a title cell.
