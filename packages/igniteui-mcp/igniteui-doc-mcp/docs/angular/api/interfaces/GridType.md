# Interface: GridType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:432](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L432)

Interface representing a grid type. It is essentially the blueprint to a grid object.
Contains definitions of properties and methods, relevant to a grid
Extends `IGridDataBindable`

## Extends

- [`IGridDataBindable`](IGridDataBindable.md)

## Extended by

- [`FlatGridType`](FlatGridType.md)
- [`TreeGridType`](TreeGridType.md)
- [`HierarchicalGridType`](HierarchicalGridType.md)
- [`PivotGridType`](PivotGridType.md)

## Indexable

> \[`key`: `string`\]: `any`

## Properties

### \_baseFontSize?

> `optional` **\_baseFontSize?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:641](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L641)

The default font size, calculated for each element

***

### \_filteredSortedUnpinnedData

> **\_filteredSortedUnpinnedData**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:694](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L694)

***

### \_filteredUnpinnedData

> **\_filteredUnpinnedData**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:693](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L693)

***

### \_totalRecords

> **\_totalRecords**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:705](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L705)

***

### activeNodeChange

> **activeNodeChange**: `EventEmitter`\<[`IActiveNodeChangeEventArgs`](IActiveNodeChangeEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:818](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L818)

***

### advancedFilteringExpressionsTree

> **advancedFilteringExpressionsTree**: [`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:877](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L877)

***

### advancedFilteringExpressionsTreeChange

> **advancedFilteringExpressionsTreeChange**: `EventEmitter`\<[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:878](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L878)

***

### allowAdvancedFiltering

> **allowAdvancedFiltering**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:872](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L872)

***

### allowFiltering

> **allowFiltering**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:445](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L445)

Indicates whether filtering in the grid is enabled. If te value is true, the grid can be filtered

***

### batchEditing

> **batchEditing**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:881](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L881)

***

### batchEditingChange?

> `optional` **batchEditingChange?**: `EventEmitter`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:839](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L839)

***

### calcHeight

> **calcHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:633](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L633)

CSS styling calculated for an element: calcHeight, calcWidth, outerWidth

***

### calcWidth

> **calcWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:634](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L634)

***

### cascadeOnDelete?

> `optional` **cascadeOnDelete?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:796](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L796)

***

### cdr

> `readonly` **cdr**: `ChangeDetectorRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:753](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L753)

Provides change detection functionality.
A change-detection tree collects all views that are to be checked for changes.
The property cannot be changed (readonly)

***

### cellClick

> **cellClick**: `EventEmitter`\<[`IGridCellEventArgs`](IGridCellEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:820](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L820)

***

### cellEdit

> **cellEdit**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:849](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L849)

***

### cellEditDone

> **cellEditDone**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:850](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L850)

***

### cellEditEnter

> **cellEditEnter**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:848](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L848)

***

### cellEditExit

> **cellEditExit**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:851](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L851)

***

### cellMergeMode

> **cellMergeMode**: [`GridCellMergeMode`](../type-aliases/GridCellMergeMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:435](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L435)

***

### cellSelection

> **cellSelection**: [`GridSelectionMode`](../type-aliases/GridSelectionMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:774](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L774)

Represents the selection mode for cells: 'none','single', 'multiple', 'multipleCascade'

***

### childDataKey?

> `optional` **childDataKey?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:794](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L794)

***

### childLayoutKeys?

> `optional` **childLayoutKeys?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:806](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L806)

***

### childLayoutList?

> `optional` **childLayoutList?**: `QueryList`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:807](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L807)

***

### columnInDrag

> **columnInDrag**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:530](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L530)

Indicates if the column of the grid is in drag mode

***

### columnList

> **columnList**: `QueryList`\<[`ColumnType`](ColumnType.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:659](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L659)

An unmodifiable list, containing all the columns of the grid.

***

### columnMoving

> **columnMoving**: `EventEmitter`\<[`IColumnMovingEventArgs`](IColumnMovingEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:834](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L834)

***

### columnMovingEnd

> **columnMovingEnd**: `EventEmitter`\<[`IColumnMovingEndEventArgs`](IColumnMovingEndEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:832](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L832)

***

### columnMovingStart

> **columnMovingStart**: `EventEmitter`\<[`IColumnMovingStartEventArgs`](IColumnMovingStartEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:835](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L835)

***

### columnPin

> **columnPin**: `EventEmitter`\<[`IPinColumnCancellableEventArgs`](IPinColumnCancellableEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:836](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L836)

***

### columnPinned

> **columnPinned**: `EventEmitter`\<[`IPinColumnEventArgs`](IPinColumnEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:830](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L830)

***

### columnResized

> **columnResized**: `EventEmitter`\<[`IColumnResizeEventArgs`](IColumnResizeEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:831](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L831)

***

### columns

> **columns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:660](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L660)

***

### columnSelection

> **columnSelection**: [`GridSelectionMode`](../type-aliases/GridSelectionMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:778](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L778)

Represents the selection mode for columns: 'none','single', 'multiple', 'multipleCascade'

***

### columnSelectionChanging

> **columnSelectionChanging**: `EventEmitter`\<[`IColumnSelectionEventArgs`](IColumnSelectionEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:833](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L833)

***

### columnVisibilityChanged

> **columnVisibilityChanged**: `EventEmitter`\<[`IColumnVisibilityChangedEventArgs`](IColumnVisibilityChangedEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:838](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L838)

***

### columnVisibilityChanging

> **columnVisibilityChanging**: `EventEmitter`\<[`IColumnVisibilityChangingEventArgs`](IColumnVisibilityChangingEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:837](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L837)

***

### columnWidthSetByUser

> **columnWidthSetByUser**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:630](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L630)

Indicates whether the width of the column is set by the user, or is configured automatically.

***

### contextMenu

> **contextMenu**: `EventEmitter`\<[`IGridContextMenuEventArgs`](IGridContextMenuEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:823](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L823)

***

### currencyPositionLeft

> **currencyPositionLeft**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:627](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L627)

Indicates whether the currency symbol is positioned to the left of values.

***

### data

> **data**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L29)

#### Inherited from

[`IGridDataBindable`](IGridDataBindable.md).[`data`](IGridDataBindable.md#data)

***

### dataCloneStrategy

> **dataCloneStrategy**: [`IDataCloneStrategy`](IDataCloneStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:475](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L475)

Strategy, used for cloning the provided data. The type has one method, that takes any type of data

***

### dataRowList

> **dataRowList**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:656](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L656)

***

### dataView

> **dataView**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:692](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L692)

***

### dataWithAddedInTransactionRows

> **dataWithAddedInTransactionRows**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:696](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L696)

***

### defaultRowHeight

> **defaultRowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:639](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L639)

***

### defaultSummaryHeight

> **defaultSummaryHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:701](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L701)

***

### disableTransitions

> **disableTransitions**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:625](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L625)

Indicates whether transitions are disabled for the grid.

***

### doubleClick

> **doubleClick**: `EventEmitter`\<[`IGridCellEventArgs`](IGridCellEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:822](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L822)

***

### dragIndicatorIconBase

> **dragIndicatorIconBase**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:623](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L623)

The base drag indicator icon. Could be of any type

***

### dragIndicatorIconTemplate

> **dragIndicatorIconTemplate**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:621](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L621)

The template for drag indicator icons. Could be of any type

***

### excelStyleHeaderIconTemplate

> **excelStyleHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:770](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L770)

The template for header icon
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### expansionDepth?

> `optional` **expansionDepth?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:793](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L793)

***

### expansionStates

> **expansionStates**: `Map`\<`any`, `boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:652](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L652)

***

### filteredSortedData

> **filteredSortedData**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:695](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L695)

***

### filtering

> **filtering**: `EventEmitter`\<[`IFilteringEventArgs`](IFilteringEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:828](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L828)

***

### filteringDone

> **filteringDone**: `EventEmitter`\<[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:829](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L829)

***

### filteringExpressionsTree

> **filteringExpressionsTree**: [`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:875](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L875)

***

### filteringExpressionsTreeChange

> **filteringExpressionsTreeChange**: `EventEmitter`\<[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:876](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L876)

***

### filteringLogic

> **filteringLogic**: [`FilteringLogic`](../enumerations/FilteringLogic.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:870](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L870)

***

### filteringPipeTrigger

> **filteringPipeTrigger**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:460](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L460)

***

### filterMode

> **filterMode**: [`FilterMode`](../type-aliases/FilterMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:481](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L481)

The filter mode for the grid. It can be quick filter of excel-style filter

***

### filterStrategy

> **filterStrategy**: [`IFilteringStrategy`](IFilteringStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:871](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L871)

***

### firstEditableColumnIndex

> **firstEditableColumnIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:730](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L730)

***

### flatData?

> `optional` **flatData?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:790](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L790)

***

### foreignKey?

> `optional` **foreignKey?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:795](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L795)

***

### formGroupCreated

> **formGroupCreated**: `EventEmitter`\<[`IGridFormGroupCreatedEventArgs`](IGridFormGroupCreatedEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:859](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L859)

***

### getHeaderCellWidth

> **getHeaderCellWidth**: (`element`) => [`ISizeInfo`](ISizeInfo.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:746](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L746)

Property, that gets the header cell inner width for auto-sizing.

#### Parameters

##### element

`HTMLElement`

#### Returns

[`ISizeInfo`](ISizeInfo.md)

***

### gridAPI

> `readonly` **gridAPI**: [`GridServiceType`](GridServiceType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:478](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L478)

Represents the grid service type providing API methods for the grid

***

### gridKeydown

> **gridKeydown**: `EventEmitter`\<[`IGridKeydownEventArgs`](IGridKeydownEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:819](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L819)

***

### groupByRowSelectorTemplate?

> `optional` **groupByRowSelectorTemplate?**: `TemplateRef`\<[`IgxGroupByRowSelectorTemplateContext`](IgxGroupByRowSelectorTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:578](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L578)

Optional
The template for the group row selector.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### groupingExpansionState?

> `optional` **groupingExpansionState?**: [`IGroupByExpandState`](IGroupByExpandState.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:882](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L882)

***

### groupingExpressions?

> `optional` **groupingExpressions?**: [`IGroupingExpression`](IGroupingExpression.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:883](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L883)

***

### groupingExpressionsChange?

> `optional` **groupingExpressionsChange?**: `EventEmitter`\<[`IGroupingExpression`](IGroupingExpression.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:884](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L884)

***

### groupingFlatResult?

> `optional` **groupingFlatResult?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:887](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L887)

***

### groupingMetadata?

> `optional` **groupingMetadata?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:889](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L889)

***

### groupingResult?

> `optional` **groupingResult?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:888](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L888)

***

### groupRowTemplate?

> `optional` **groupRowTemplate?**: `TemplateRef`\<[`IgxGroupByRowTemplateContext`](IgxGroupByRowTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:572](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L572)

Optional
The template for group-by rows.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### groupsExpanded?

> `optional` **groupsExpanded?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:885](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L885)

***

### groupsRecords?

> `readonly` `optional` **groupsRecords?**: [`IGroupByRecord`](IGroupByRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:886](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L886)

***

### groupStrategy?

> `optional` **groupStrategy?**: [`IGridGroupingStrategy`](IGridGroupingStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:869](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L869)

***

### hasChildrenKey?

> `optional` **hasChildrenKey?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:799](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L799)

***

### hasDetails

> **hasDetails**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:733](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L733)

***

### hasExpandableChildren?

> `optional` **hasExpandableChildren?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:549](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L549)

Optional
Indicates whether the grid has expandable children (hierarchical and tree grid)

***

### hasPinnedRecords

> **hasPinnedRecords**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:685](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L685)

***

### hasVisibleColumns

> **hasVisibleColumns**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:544](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L544)

Indicates whether the grid has columns that are shown

***

### headerCollapsedIndicatorTemplate

> **headerCollapsedIndicatorTemplate**: `TemplateRef`\<[`IgxGridTemplateContext`](IgxGridTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:614](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L614)

The template for header collapsed indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### headerExpandedIndicatorTemplate

> **headerExpandedIndicatorTemplate**: `TemplateRef`\<[`IgxGridTemplateContext`](IgxGridTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:619](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L619)

The template for header expanded indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### headerFeaturesWidth

> **headerFeaturesWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:631](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L631)

***

### headSelectorBaseAriaLabel

> **headSelectorBaseAriaLabel**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:541](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L541)

***

### headSelectorTemplate

> **headSelectorTemplate**: `TemplateRef`\<[`IgxHeadSelectorTemplateContext`](IgxHeadSelectorTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:589](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L589)

The template for the header selector.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### hiddenColumnsCount

> **hiddenColumnsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:557](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L557)

Represents the count of only the hidden (not visible) columns

***

### highlightedRowID?

> `optional` **highlightedRowID?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:804](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L804)

***

### iconTemplate?

> `optional` **iconTemplate?**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:566](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L566)

Optional
The template for grid icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:451](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L451)

Represents the unique identifier of the grid.

#### Overrides

[`IGridDataBindable`](IGridDataBindable.md).[`id`](IGridDataBindable.md#id)

***

### isCellSelectable

> **isCellSelectable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:682](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L682)

Indicates whether cells are selectable in the grid

***

### isLoading

> **isLoading**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:465](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L465)

***

### isMultiRowSelectionEnabled

> **isMultiRowSelectionEnabled**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:684](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L684)

Indicates whether it is allowed to select more than one row in the grid

***

### isRowPinningToTop

> **isRowPinningToTop**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:732](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L732)

***

### isRowSelectable

> **isRowSelectable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:526](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L526)

Indicates whether the grid's rows can be selected

***

### lastChildGrid?

> `optional` **lastChildGrid?**: `GridType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:785](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L785)

***

### lastEditableColumnIndex

> **lastEditableColumnIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:731](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L731)

***

### lastSearchInfo

> `readonly` **lastSearchInfo**: [`ISearchInfo`](ISearchInfo.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:719](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L719)

Represents the last search in the grid
It contains the search text (the user has entered), the match and some settings for the search

***

### loadChildrenOnDemand?

> `optional` **loadChildrenOnDemand?**: (`parentID`, `done`) => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:798](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L798)

#### Parameters

##### parentID

`any`

##### done

(`children`) => `void`

#### Returns

`void`

***

### loadingRows?

> `optional` **loadingRows?**: `Set`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:801](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L801)

***

### locale

> **locale**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:434](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L434)

Represents the locale of the grid: `USD`, `EUR`, `GBP`, `CNY`, `JPY`, etc.

***

### localeChange

> **localeChange**: `EventEmitter`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:827](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L827)

***

### mergeStrategy

> **mergeStrategy**: [`IGridMergeStrategy`](IGridMergeStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:436](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L436)

***

### moving

> **moving**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:464](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L464)

Indicates whether the grid is currently in a moving state.

***

### multiRowLayoutRowSize

> **multiRowLayoutRowSize**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:638](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L638)

***

### nativeElement

> **nativeElement**: `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:440](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L440)

Represents the native HTML element itself

***

### navigation

> **navigation**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:518](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L518)

***

### outerWidth

> **outerWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:635](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L635)

***

### outlet

> **outlet**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:521](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L521)

***

### pagingMode

> **pagingMode**: [`GridPagingMode`](../type-aliases/GridPagingMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:710](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L710)

Represents the paging of the grid. It can be either 'Local' or 'Remote'
- Local: Default value; The grid will paginate the data source based on the page

***

### parent?

> `optional` **parent?**: `GridType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:803](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L803)

***

### parentVirtDir

> **parentVirtDir**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:653](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L653)

***

### pinnedColumns

> **pinnedColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:666](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L666)

An array of columns, but it counts only the ones that are pinned

***

### pinnedColumnsCount

> **pinnedColumnsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:559](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L559)

Represents the count of only the pinned columns

***

### pinnedEndColumns

> **pinnedEndColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:670](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L670)

An array of columns, but it counts only the ones that are pinned to the end.

***

### pinnedEndWidth

> **pinnedEndWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:535](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L535)

The width of pinned element for pinning at end.

***

### pinnedRecords

> **pinnedRecords**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:687](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L687)

***

### pinnedRecordsCount

> **pinnedRecordsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:686](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L686)

***

### pinnedRows

> **pinnedRows**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:691](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L691)

***

### pinnedStartColumns

> **pinnedStartColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:668](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L668)

An array of columns, but it counts only the ones that are pinned to the start.

***

### pinnedStartWidth

> **pinnedStartWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:533](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L533)

The width of pinned element for pinning at start.

***

### pinning

> **pinning**: [`IPinningConfig`](IPinningConfig.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:650](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L650)

The configuration for columns and rows pinning in the grid
It's of type IPinningConfig, which can have value for columns (start, end) and for rows (top, bottom)

***

### pipeTrigger

> **pipeTrigger**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:454](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L454)

***

### primaryKey

> **primaryKey**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:449](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L449)

Represents the unique primary key used for identifying rows in the grid

#### Overrides

[`IGridDataBindable`](IGridDataBindable.md).[`primaryKey`](IGridDataBindable.md#primarykey)

***

### processedExpandedFlatData?

> `optional` **processedExpandedFlatData?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:813](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L813)

***

### processedRecords?

> `optional` **processedRecords?**: `Map`\<`any`, [`ITreeGridRecord`](ITreeGridRecord.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:815](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L815)

***

### processedRootRecords?

> `optional` **processedRootRecords?**: [`ITreeGridRecord`](ITreeGridRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:809](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L809)

***

### rangeSelected

> **rangeSelected**: `EventEmitter`\<[`GridSelectionRange`](GridSelectionRange.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:825](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L825)

***

### records?

> `optional` **records?**: `Map`\<`any`, [`ITreeGridRecord`](ITreeGridRecord.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:812](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L812)

***

### rendered$

> **rendered$**: `Observable`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:864](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L864)

***

### renderedRowHeight

> **renderedRowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:453](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L453)

The height of the visible rows in the grid.

***

### resizeNotify

> **resizeNotify**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:866](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L866)

***

### resourceStrings

> **resourceStrings**: `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:437](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L437)

***

### rootGrid?

> `optional` **rootGrid?**: `GridType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:808](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L808)

***

### rootRecords?

> `optional` **rootRecords?**: [`ITreeGridRecord`](ITreeGridRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:810](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L810)

***

### rootSummariesEnabled

> **rootSummariesEnabled**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:443](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L443)

***

### rowAdd

> **rowAdd**: `EventEmitter`\<[`IRowDataCancelableEventArgs`](IRowDataCancelableEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:840](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L840)

***

### rowAdded

> **rowAdded**: `EventEmitter`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:841](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L841)

***

### rowAddedNotifier

> **rowAddedNotifier**: `Subject`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:843](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L843)

***

### rowClick

> **rowClick**: `EventEmitter`\<[`IGridRowEventArgs`](IGridRowEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:821](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L821)

***

### rowCollapsedIndicatorTemplate

> **rowCollapsedIndicatorTemplate**: `TemplateRef`\<[`IgxGridRowTemplateContext`](IgxGridRowTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:765](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L765)

The template for collapsed row indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### rowDelete

> **rowDelete**: `EventEmitter`\<[`IRowDataCancelableEventArgs`](IRowDataCancelableEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:844](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L844)

***

### rowDeleted

> **rowDeleted**: `EventEmitter`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:845](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L845)

***

### rowDeletedNotifier

> **rowDeletedNotifier**: `Subject`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:847](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L847)

***

### rowDragEnd

> **rowDragEnd**: `EventEmitter`\<[`IRowDragEndEventArgs`](IRowDragEndEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:857](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L857)

***

### rowDraggable

> **rowDraggable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:447](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L447)

Indicates whether rows in the grid can be dragged. If te value is true, the rows can be dragged

***

### rowDragging

> **rowDragging**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:728](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L728)

Indicates whether a row is currently being dragged

***

### rowDragStart

> **rowDragStart**: `EventEmitter`\<[`IRowDragStartEventArgs`](IRowDragStartEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:856](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L856)

***

### rowEdit

> **rowEdit**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:853](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L853)

***

### rowEditable

> **rowEditable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:442](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L442)

Indicates whether rows in the grid are editable. If te value is true, the rows can be edited

***

### rowEditDone

> **rowEditDone**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:854](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L854)

***

### rowEditEnter

> **rowEditEnter**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:852](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L852)

***

### rowEditExit

> **rowEditExit**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:855](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L855)

***

### rowEditingOverlay

> **rowEditingOverlay**: [`IgxToggleDirective`](../classes/IgxToggleDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:703](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L703)

***

### rowEditTabs

> **rowEditTabs**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:715](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L715)

***

### rowExpandedIndicatorTemplate

> **rowExpandedIndicatorTemplate**: `TemplateRef`\<[`IgxGridRowTemplateContext`](IgxGridRowTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:760](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L760)

The template for expanded row indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### rowHeight

> **rowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:637](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L637)

The height of each row in the grid. Setting a constant height can solve problems with not showing all elements when scrolling

***

### rowList

> **rowList**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:657](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L657)

***

### rowLoadingIndicatorTemplate?

> `optional` **rowLoadingIndicatorTemplate?**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:584](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L584)

Optional
The template for row loading indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### rowSelection

> **rowSelection**: [`GridSelectionMode`](../type-aliases/GridSelectionMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:776](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L776)

Represents the selection mode for rows: 'none','single', 'multiple', 'multipleCascade'

***

### rowSelectionChanging

> **rowSelectionChanging**: `EventEmitter`\<[`IRowSelectionEventArgs`](IRowSelectionEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:826](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L826)

***

### rowSelectorTemplate

> **rowSelectorTemplate**: `TemplateRef`\<[`IgxRowSelectorTemplateContext`](IgxRowSelectorTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:594](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L594)

The template for row selectors.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### rowToggle

> **rowToggle**: `EventEmitter`\<[`IRowToggleEventArgs`](IRowToggleEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:858](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L858)

***

### scrollSize

> **scrollSize**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:642](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L642)

***

### selected

> **selected**: `EventEmitter`\<[`IGridCellEventArgs`](IGridCellEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:824](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L824)

***

### selectedCells?

> `optional` **selectedCells?**: [`CellType`](CellType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:890](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L890)

***

### selectedRows

> **selectedRows**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:891](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L891)

***

### selectionService

> **selectionService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:517](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L517)

The service handling selection in the grid. Selecting, deselecting elements

***

### selectRowOnClick

> **selectRowOnClick**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:772](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L772)

***

### showExpandAll?

> `optional` **showExpandAll?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:554](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L554)

Optional
Indicates whether collapsed grid elements should be expanded

***

### showRowSelectors

> **showRowSelectors**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:528](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L528)

Indicates whether the selectors of the rows are visible

***

### sortAscendingHeaderIconTemplate

> **sortAscendingHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:604](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L604)

The template for ascending sort header icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### sortDescendingHeaderIconTemplate

> **sortDescendingHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:609](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L609)

The template for descending sort header icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### sortHeaderIconTemplate

> **sortHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:599](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L599)

The template for sort header icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### sortingExpressions

> **sortingExpressions**: [`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:873](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L873)

***

### sortingExpressionsChange

> **sortingExpressionsChange**: `EventEmitter`\<[`ISortingExpression`](ISortingExpression.md)\<`any`\>[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:874](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L874)

***

### sortingOptions

> **sortingOptions**: [`ISortingOptions`](ISortingOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:879](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L879)

***

### sortStrategy

> **sortStrategy**: [`IGridSortingStrategy`](IGridSortingStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:868](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L868)

***

### summariesMargin

> **summariesMargin**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:540](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L540)

The CSS margin of the summaries

***

### summariesRowList

> **summariesRowList**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:678](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L678)

***

### summaryCalculationMode

> **summaryCalculationMode**: [`GridSummaryCalculationMode`](../type-aliases/GridSummaryCalculationMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:780](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L780)

Represents the calculation mode for summaries: 'rootLevelOnly', 'childLevelsOnly', 'rootAndChildLevels'

***

### summaryPipeTrigger

> **summaryPipeTrigger**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:455](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L455)

***

### summaryPosition

> **summaryPosition**: [`GridSummaryPosition`](../type-aliases/GridSummaryPosition.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:782](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L782)

Represents the position of summaries: 'top', 'bottom'

***

### summaryRowHeight

> **summaryRowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:702](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L702)

***

### tbody

> **tbody**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:654](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L654)

***

### toolbarExporting

> **toolbarExporting**: `EventEmitter`\<[`IGridToolbarExportEventArgs`](IGridToolbarExportEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:862](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L862)

***

### totalRowsCountAfterFilter

> **totalRowsCountAfterFilter**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:704](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L704)

***

### transactions

> `readonly` **transactions**: [`TransactionService`](TransactionService.md)\<[`Transaction`](Transaction.md), [`State`](State.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:698](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L698)

Represents the transaction service for the grid.

***

### treeGroupArea?

> `optional` **treeGroupArea?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:816](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L816)

***

### uniqueColumnValuesStrategy

> **uniqueColumnValuesStrategy**: (`column`, `tree`, `done`) => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:743](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L743)

Property, that provides a callback for loading unique column values on demand.
If this property is provided, the unique values it generates will be used by the Excel Style Filtering

#### Parameters

##### column

[`ColumnType`](ColumnType.md)

##### tree

[`FilteringExpressionsTree`](../classes/FilteringExpressionsTree.md)

##### done

(`values`) => `void`

#### Returns

`void`

***

### unpinnedColumns

> **unpinnedColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:664](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L664)

An array of columns, but it counts only the ones that are not pinned

***

### unpinnedRecords

> **unpinnedRecords**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:688](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L688)

***

### unpinnedWidth

> **unpinnedWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:538](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L538)

The width of unpinned element

***

### updateOnRender?

> `optional` **updateOnRender?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:805](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L805)

***

### validation

> `readonly` **validation**: [`IgxGridValidationService`](../classes/IgxGridValidationService.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:700](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L700)

Represents the validation service for the grid. The type contains properties and methods (logic) for validating records

***

### validationStatusChange

> **validationStatusChange**: `EventEmitter`\<[`IGridValidationStatusEventArgs`](IGridValidationStatusEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:860](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L860)

***

### validationTrigger

> **validationTrigger**: [`GridValidationTrigger`](../type-aliases/GridValidationTrigger.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:645](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L645)

The trigger for grid validation. It's value can either be `change` or `blur`

***

### verticalScrollContainer

> **verticalScrollContainer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:655](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L655)

***

### virtualizationState

> **virtualizationState**: [`IForOfState`](IForOfState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:513](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L513)

Represents the state of virtualization for the grid. It has an owner, start index and chunk size

***

### visibleColumns

> **visibleColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:662](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L662)

An array of columns, but it counts only the ones visible (not hidden) in the view

## Accessors

### filteredData

#### Get Signature

> **get** **filteredData**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L30)

##### Returns

`any`[]

#### Inherited from

[`IGridDataBindable`](IGridDataBindable.md).[`filteredData`](IGridDataBindable.md#filtereddata)

## Methods

### clearCellSelection()

> **clearCellSelection**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:953](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L953)

#### Returns

`void`

***

### clearGrouping()?

> `optional` **clearGrouping**(`field`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:898](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L898)

#### Parameters

##### field

`string`

#### Returns

`void`

***

### clearSort()

> **clearSort**(`name?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:927](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L927)

#### Parameters

##### name?

`string`

#### Returns

`void`

***

### closeRowEditingOverlay()

> **closeRowEditingOverlay**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:972](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L972)

#### Returns

`void`

***

### collapseRow()

> **collapseRow**(`id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:967](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L967)

#### Parameters

##### id

`any`

#### Returns

`void`

***

### columnToVisibleIndex()

> **columnToVisibleIndex**(`key`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:945](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L945)

#### Parameters

##### key

`string` \| `number`

#### Returns

`number`

***

### createColumnsList()?

> `optional` **createColumnsList**(`cols`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:977](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L977)

#### Parameters

##### cols

[`ColumnType`](ColumnType.md)[]

#### Returns

`void`

***

### createFilterDropdown()

> **createFilterDropdown**(`column`, `options`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:960](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L960)

#### Parameters

##### column

[`ColumnType`](ColumnType.md)

##### options

[`OverlaySettings`](OverlaySettings.md)

#### Returns

`any`

***

### createRow()?

> `optional` **createRow**(`index`, `data?`): [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:963](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L963)

#### Parameters

##### index

`number`

##### data?

`any`

#### Returns

[`RowType`](RowType.md)

***

### deleteRow()

> **deleteRow**(`id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:964](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L964)

#### Parameters

##### id

`any`

#### Returns

`any`

***

### deleteRowById()

> **deleteRowById**(`id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:965](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L965)

#### Parameters

##### id

`any`

#### Returns

`any`

***

### deselectAllColumns()

> **deselectAllColumns**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:903](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L903)

#### Returns

`void`

***

### deselectAllRows()

> **deselectAllRows**(`onlyFilterData?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:958](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L958)

#### Parameters

##### onlyFilterData?

`boolean`

#### Returns

`void`

***

### deselectColumns()

> **deselectColumns**(`columns`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:904](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L904)

#### Parameters

##### columns

`string`[] \| [`ColumnType`](ColumnType.md)[]

#### Returns

`void`

***

### deselectRows()

> **deselectRows**(`rowIDs`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:956](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L956)

#### Parameters

##### rowIDs

`any`[]

#### Returns

`void`

***

### generateRowPath()?

> `optional` **generateRowPath**(`rowId`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:980](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L980)

#### Parameters

##### rowId

`any`

#### Returns

`any`[]

***

### getChildGrids()?

> `optional` **getChildGrids**(`inDepth?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:943](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L943)

#### Parameters

##### inDepth?

`boolean`

#### Returns

`any`[]

***

### getColumnByName()

> **getColumnByName**(`name`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:919](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L919)

#### Parameters

##### name

`string`

#### Returns

`any`

***

### getColumnByVisibleIndex()

> **getColumnByVisibleIndex**(`index`): [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:920](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L920)

#### Parameters

##### index

`number`

#### Returns

[`ColumnType`](ColumnType.md)

***

### getDefaultExpandState()

> **getDefaultExpandState**(`record`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:908](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L908)

#### Parameters

##### record

`any`

#### Returns

`boolean`

***

### getDragGhostCustomTemplate()

> **getDragGhostCustomTemplate**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:915](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L915)

#### Returns

`any`

***

### getEmptyRecordObjectFor()

> **getEmptyRecordObjectFor**(`inRow`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:931](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L931)

#### Parameters

##### inRow

[`RowType`](RowType.md)

#### Returns

`any`

***

### getHeaderGroupWidth()

> **getHeaderGroupWidth**(`column`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:921](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L921)

#### Parameters

##### column

[`ColumnType`](ColumnType.md)

#### Returns

`string`

***

### getInitialPinnedIndex()

> **getInitialPinnedIndex**(`rec`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:935](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L935)

#### Parameters

##### rec

`any`

#### Returns

`number`

***

### getNextCell()

> **getNextCell**(`currRowIndex`, `curVisibleColIndex`, `callback`): [`ICellPosition`](ICellPosition.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:952](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L952)

#### Parameters

##### currRowIndex

`number`

##### curVisibleColIndex

`number`

##### callback

(`c`) => `boolean`

#### Returns

[`ICellPosition`](ICellPosition.md)

***

### getPossibleColumnWidth()

> **getPossibleColumnWidth**(`baseWidth?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:910](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L910)

#### Parameters

##### baseWidth?

`number`

#### Returns

`string`

***

### getPreviousCell()

> **getPreviousCell**(`currRowIndex`, `curVisibleColIndex`, `callback`): [`ICellPosition`](ICellPosition.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:950](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L950)

#### Parameters

##### currRowIndex

`number`

##### curVisibleColIndex

`number`

##### callback

(`c`) => `boolean`

#### Returns

[`ICellPosition`](ICellPosition.md)

***

### getRowByIndex()?

> `optional` **getRowByIndex**(`index`): [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:923](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L923)

#### Parameters

##### index

`number`

#### Returns

[`RowType`](RowType.md)

***

### getRowByKey()?

> `optional` **getRowByKey**(`key`): [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:922](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L922)

#### Parameters

##### key

`any`

#### Returns

[`RowType`](RowType.md)

***

### getSelectedRanges()

> **getSelectedRanges**(): [`GridSelectionRange`](GridSelectionRange.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:902](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L902)

#### Returns

[`GridSelectionRange`](GridSelectionRange.md)[]

***

### getUnpinnedIndexById()

> **getUnpinnedIndexById**(`id`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:930](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L930)

#### Parameters

##### id

`any`

#### Returns

`number`

***

### getVisibleContentHeight()

> **getVisibleContentHeight**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:913](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L913)

#### Returns

`number`

***

### groupBy()?

> `optional` **groupBy**(`expression`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:899](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L899)

#### Parameters

##### expression

[`IGroupingExpression`](IGroupingExpression.md) \| [`IGroupingExpression`](IGroupingExpression.md)[]

#### Returns

`void`

***

### hasVerticalScroll()

> **hasVerticalScroll**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:912](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L912)

#### Returns

`boolean`

***

### isChildGridRecord()?

> `optional` **isChildGridRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:942](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L942)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### isColumnGrouped()

> **isColumnGrouped**(`fieldName`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:937](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L937)

#### Parameters

##### fieldName

`string`

#### Returns

`boolean`

***

### isDetailRecord()

> **isDetailRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:938](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L938)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### isExpandedGroup()

> **isExpandedGroup**(`group`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:976](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L976)

#### Parameters

##### group

[`IGroupByRecord`](IGroupByRecord.md)

#### Returns

`boolean`

***

### isGhostRecord()

> **isGhostRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:940](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L940)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### isGroupByRecord()

> **isGroupByRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:939](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L939)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### isHierarchicalRecord()?

> `optional` **isHierarchicalRecord**(`record`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:944](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L944)

#### Parameters

##### record

`any`

#### Returns

`boolean`

***

### isRecordMerged()

> **isRecordMerged**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:934](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L934)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### isRecordPinned()

> **isRecordPinned**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:933](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L933)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### isRecordPinnedByViewIndex()

> **isRecordPinnedByViewIndex**(`rowIndex`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:936](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L936)

#### Parameters

##### rowIndex

`number`

#### Returns

`boolean`

***

### isSummaryRow()

> **isSummaryRow**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:932](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L932)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### isTreeRow()?

> `optional` **isTreeRow**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:941](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L941)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

***

### moveColumn()

> **moveColumn**(`column`, `target`, `pos`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:946](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L946)

#### Parameters

##### column

[`ColumnType`](ColumnType.md)

##### target

[`ColumnType`](ColumnType.md)

##### pos

[`DropPosition`](../enumerations/DropPosition.md)

#### Returns

`void`

***

### navigateTo()

> **navigateTo**(`rowIndex`, `visibleColumnIndex`, `callback?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:948](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L948)

#### Parameters

##### rowIndex

`number`

##### visibleColumnIndex

`number`

##### callback?

(`e`) => `any`

#### Returns

`void`

***

### notifyChanges()

> **notifyChanges**(`repaint?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:968](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L968)

#### Parameters

##### repaint?

`boolean`

#### Returns

`void`

***

### openAdvancedFilteringDialog()

> **openAdvancedFilteringDialog**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:917](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L917)

#### Parameters

##### overlaySettings?

[`OverlaySettings`](OverlaySettings.md)

#### Returns

`void`

***

### openRowOverlay()

> **openRowOverlay**(`id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:916](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L916)

#### Parameters

##### id

`any`

#### Returns

`void`

***

### pinRow()

> **pinRow**(`id`, `index?`, `row?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:928](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L928)

#### Parameters

##### id

`any`

##### index?

`number`

##### row?

[`RowType`](RowType.md)

#### Returns

`boolean`

***

### preventHeaderScroll()?

> `optional` **preventHeaderScroll**(`args`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:981](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L981)

#### Parameters

##### args

`any`

#### Returns

`void`

***

### reflow()

> **reflow**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:973](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L973)

#### Returns

`void`

***

### refreshSearch()

> **refreshSearch**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:907](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L907)

#### Returns

`void`

***

### repositionRowEditingOverlay()

> **repositionRowEditingOverlay**(`row`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:971](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L971)

#### Parameters

##### row

[`RowType`](RowType.md)

#### Returns

`void`

***

### resetColumnCollections()

> **resetColumnCollections**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:969](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L969)

#### Returns

`void`

***

### resetHorizontalVirtualization()

> **resetHorizontalVirtualization**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:911](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L911)

#### Returns

`void`

***

### resolveOutlet()?

> `optional` **resolveOutlet**(): [`IgxOverlayOutletDirective`](../classes/IgxOverlayOutletDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:900](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L900)

#### Returns

[`IgxOverlayOutletDirective`](../classes/IgxOverlayOutletDirective.md)

***

### selectAllRows()

> **selectAllRows**(`onlyFilterData?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:957](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L957)

#### Parameters

##### onlyFilterData?

`boolean`

#### Returns

`void`

***

### selectColumns()

> **selectColumns**(`columns`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:905](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L905)

#### Parameters

##### columns

`string`[] \| [`ColumnType`](ColumnType.md)[]

#### Returns

`void`

***

### selectedColumns()

> **selectedColumns**(): [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:906](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L906)

#### Returns

[`ColumnType`](ColumnType.md)[]

***

### selectRange()

> **selectRange**(`range`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:954](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L954)

#### Parameters

##### range

[`GridSelectionRange`](GridSelectionRange.md) \| [`GridSelectionRange`](GridSelectionRange.md)[]

#### Returns

`void`

***

### selectRows()

> **selectRows**(`rowIDs`, `clearCurrentSelection?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:955](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L955)

#### Parameters

##### rowIDs

`any`[]

##### clearCurrentSelection?

`boolean`

#### Returns

`void`

***

### setFilteredData()

> **setFilteredData**(`data`, `pinned`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:924](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L924)

#### Parameters

##### data

`any`

##### pinned

`boolean`

#### Returns

`void`

***

### setFilteredSortedData()

> **setFilteredSortedData**(`data`, `pinned`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:925](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L925)

#### Parameters

##### data

`any`

##### pinned

`boolean`

#### Returns

`void`

***

### setUpPaginator()

> **setUpPaginator**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:959](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L959)

#### Returns

`void`

***

### showSnackbarFor()

> **showSnackbarFor**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:918](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L918)

#### Parameters

##### index

`number`

#### Returns

`void`

***

### sort()

> **sort**(`expression`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:926](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L926)

#### Parameters

##### expression

[`ISortingExpression`](ISortingExpression.md)\<`any`\> \| [`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

#### Returns

`void`

***

### toggleAll()?

> `optional` **toggleAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:979](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L979)

#### Returns

`void`

***

### toggleAllGroupRows()?

> `optional` **toggleAllGroupRows**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:978](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L978)

#### Returns

`void`

***

### toggleGroup()?

> `optional` **toggleGroup**(`groupRow`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:897](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L897)

#### Parameters

##### groupRow

[`IGroupByRecord`](IGroupByRecord.md)

#### Returns

`void`

***

### trackColumnChanges()

> **trackColumnChanges**(`index`, `column`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:909](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L909)

#### Parameters

##### index

`number`

##### column

`any`

#### Returns

`any`

***

### triggerPipes()

> **triggerPipes**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:970](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L970)

#### Returns

`void`

***

### unpinRow()

> **unpinRow**(`id`, `row?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:929](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L929)

#### Parameters

##### id

`any`

##### row?

[`RowType`](RowType.md)

#### Returns

`boolean`

***

### updateCell()

> **updateCell**(`value`, `rowSelector`, `column`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:961](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L961)

#### Parameters

##### value

`any`

##### rowSelector

`any`

##### column

`string`

#### Returns

`void`

***

### updateColumns()

> **updateColumns**(`columns`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:901](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L901)

#### Parameters

##### columns

[`ColumnType`](ColumnType.md)[]

#### Returns

`void`

***

### updateRow()

> **updateRow**(`value`, `rowSelector`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:966](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L966)

#### Parameters

##### value

`any`

##### rowSelector

`any`

#### Returns

`void`
