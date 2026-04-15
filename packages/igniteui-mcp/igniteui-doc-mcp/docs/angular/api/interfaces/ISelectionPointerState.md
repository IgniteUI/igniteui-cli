# Interface: ISelectionPointerState

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L80)

Represents the state of the grid selection using pointer interactions (mouse).
Extends ISelectionKeyboardState to include pointer-specific properties.

## Extends

- [`ISelectionKeyboardState`](ISelectionKeyboardState.md)

## Properties

### active

> **active**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L73)

Indicates whether the selection is currently active (being performed). `False` when resetting the selection.

#### Inherited from

[`ISelectionKeyboardState`](ISelectionKeyboardState.md).[`active`](ISelectionKeyboardState.md#active)

***

### ctrl

> **ctrl**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L82)

Indicates whether the Ctrl key is currently pressed during the selection.

***

### node

> **node**: [`ISelectionNode`](ISelectionNode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L67)

The selected node in the grid, if any. Can be null if no node is selected.

#### Inherited from

[`ISelectionKeyboardState`](ISelectionKeyboardState.md).[`node`](ISelectionKeyboardState.md#node)

***

### primaryButton

> **primaryButton**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L84)

Indicates whether the primary pointer button is pressed during the selection (clicked).

***

### range

> **range**: [`GridSelectionRange`](GridSelectionRange.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L71)

The range of the selected cells in the grid. Can be null when resetting the selection.

#### Inherited from

[`ISelectionKeyboardState`](ISelectionKeyboardState.md).[`range`](ISelectionKeyboardState.md#range)

***

### shift

> **shift**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/types.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/types.ts#L69)

Indicates whether the Shift key is currently pressed during the selection.

#### Inherited from

[`ISelectionKeyboardState`](ISelectionKeyboardState.md).[`shift`](ISelectionKeyboardState.md#shift)
