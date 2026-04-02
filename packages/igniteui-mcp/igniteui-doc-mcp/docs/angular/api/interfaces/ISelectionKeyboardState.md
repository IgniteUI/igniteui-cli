# Interface: ISelectionKeyboardState

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L65)

Represents the state of the keyboard when selecting.

## Extended by

- [`ISelectionPointerState`](ISelectionPointerState.md)

## Properties

### active

> **active**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L73)

Indicates whether the selection is currently active (being performed). `False` when resetting the selection.

***

### node

> **node**: [`ISelectionNode`](ISelectionNode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L67)

The selected node in the grid, if any. Can be null if no node is selected.

***

### range

> **range**: [`GridSelectionRange`](GridSelectionRange.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L71)

The range of the selected cells in the grid. Can be null when resetting the selection.

***

### shift

> **shift**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L69)

Indicates whether the Shift key is currently pressed during the selection.
