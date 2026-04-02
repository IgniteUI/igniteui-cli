# Type Alias: GridSelectionMode

> **GridSelectionMode** = *typeof* [`GridSelectionMode`](../variables/GridSelectionMode.md)\[keyof *typeof* [`GridSelectionMode`](../variables/GridSelectionMode.md)\]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/enums.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/enums.ts#L55)

Enumeration representing different selection modes for the grid elements if can be selected.
- 'none': No selection is allowed. Default row and column selection mode.
- 'single': Only one element can be selected at a time. Selecting a new one will deselect the previously selected one.
- 'multiple': Default cell selection mode. More than one element can be selected at a time.
- 'multipleCascade': Similar to multiple selection. It is used in hierarchical or tree grids. Allows selection not only to an individual item but also all its related or nested items in a single action
