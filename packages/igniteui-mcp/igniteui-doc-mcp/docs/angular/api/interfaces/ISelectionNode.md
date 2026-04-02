# Interface: ISelectionNode

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L32)

Represents a single selected cell or node in a grid.

## Properties

### column

> **column**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L40)

The index of the selected column.

***

### isSummaryRow?

> `optional` **isSummaryRow?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L51)

(Optional)
Indicates if the selected node is a summary row.
This property is true if the selected row is a summary row; otherwise, it is false.

***

### layout?

> `optional` **layout?**: [`IMultiRowLayoutNode`](IMultiRowLayoutNode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L45)

(Optional)
Additional layout information for multi-row selection nodes.

***

### row

> **row**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L36)

The index of the selected row.
