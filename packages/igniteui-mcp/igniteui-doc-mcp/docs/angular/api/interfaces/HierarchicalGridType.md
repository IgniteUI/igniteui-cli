# Interface: HierarchicalGridType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:1015](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L1015)

An interface describing a Hierarchical Grid type. It is essentially the blueprint to a grid kind
Contains definitions of properties and methods, relevant to a grid kind
Extends from `GridType`

## Extends

- [`GridType`](GridType.md)

## Indexable

> \[`key`: `string`\]: `any`

## Properties

### \_baseFontSize?

> `optional` **\_baseFontSize?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:641](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L641)

The default font size, calculated for each element

#### Inherited from

[`GridType`](GridType.md).[`_baseFontSize`](GridType.md#_basefontsize)

***

### \_filteredSortedUnpinnedData

> **\_filteredSortedUnpinnedData**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:694](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L694)

#### Inherited from

[`GridType`](GridType.md).[`_filteredSortedUnpinnedData`](GridType.md#_filteredsortedunpinneddata)

***

### \_filteredUnpinnedData

> **\_filteredUnpinnedData**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:693](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L693)

#### Inherited from

[`GridType`](GridType.md).[`_filteredUnpinnedData`](GridType.md#_filteredunpinneddata)

***

### \_totalRecords

> **\_totalRecords**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:705](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L705)

#### Inherited from

[`GridType`](GridType.md).[`_totalRecords`](GridType.md#_totalrecords)

***

### activeNodeChange

> **activeNodeChange**: `EventEmitter`\<[`IActiveNodeChangeEventArgs`](IActiveNodeChangeEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:818](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L818)

#### Inherited from

[`GridType`](GridType.md).[`activeNodeChange`](GridType.md#activenodechange)

***

### advancedFilteringExpressionsTree

> **advancedFilteringExpressionsTree**: [`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:877](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L877)

#### Inherited from

[`GridType`](GridType.md).[`advancedFilteringExpressionsTree`](GridType.md#advancedfilteringexpressionstree)

***

### advancedFilteringExpressionsTreeChange

> **advancedFilteringExpressionsTreeChange**: `EventEmitter`\<[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:878](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L878)

#### Inherited from

[`GridType`](GridType.md).[`advancedFilteringExpressionsTreeChange`](GridType.md#advancedfilteringexpressionstreechange)

***

### allowAdvancedFiltering

> **allowAdvancedFiltering**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:872](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L872)

#### Inherited from

[`GridType`](GridType.md).[`allowAdvancedFiltering`](GridType.md#allowadvancedfiltering)

***

### allowFiltering

> **allowFiltering**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:445](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L445)

Indicates whether filtering in the grid is enabled. If te value is true, the grid can be filtered

#### Inherited from

[`GridType`](GridType.md).[`allowFiltering`](GridType.md#allowfiltering)

***

### batchEditing

> **batchEditing**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:881](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L881)

#### Inherited from

[`GridType`](GridType.md).[`batchEditing`](GridType.md#batchediting)

***

### batchEditingChange?

> `optional` **batchEditingChange?**: `EventEmitter`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:839](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L839)

#### Inherited from

[`GridType`](GridType.md).[`batchEditingChange`](GridType.md#batcheditingchange)

***

### calcHeight

> **calcHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:633](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L633)

CSS styling calculated for an element: calcHeight, calcWidth, outerWidth

#### Inherited from

[`GridType`](GridType.md).[`calcHeight`](GridType.md#calcheight)

***

### calcWidth

> **calcWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:634](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L634)

#### Inherited from

[`GridType`](GridType.md).[`calcWidth`](GridType.md#calcwidth)

***

### cascadeOnDelete?

> `optional` **cascadeOnDelete?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:796](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L796)

#### Inherited from

[`GridType`](GridType.md).[`cascadeOnDelete`](GridType.md#cascadeondelete)

***

### cdr

> `readonly` **cdr**: `ChangeDetectorRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:753](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L753)

Provides change detection functionality.
A change-detection tree collects all views that are to be checked for changes.
The property cannot be changed (readonly)

#### Inherited from

[`GridType`](GridType.md).[`cdr`](GridType.md#cdr)

***

### cellClick

> **cellClick**: `EventEmitter`\<[`IGridCellEventArgs`](IGridCellEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:820](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L820)

#### Inherited from

[`GridType`](GridType.md).[`cellClick`](GridType.md#cellclick)

***

### cellEdit

> **cellEdit**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:849](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L849)

#### Inherited from

[`GridType`](GridType.md).[`cellEdit`](GridType.md#celledit)

***

### cellEditDone

> **cellEditDone**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:850](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L850)

#### Inherited from

[`GridType`](GridType.md).[`cellEditDone`](GridType.md#celleditdone)

***

### cellEditEnter

> **cellEditEnter**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:848](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L848)

#### Inherited from

[`GridType`](GridType.md).[`cellEditEnter`](GridType.md#celleditenter)

***

### cellEditExit

> **cellEditExit**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:851](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L851)

#### Inherited from

[`GridType`](GridType.md).[`cellEditExit`](GridType.md#celleditexit)

***

### cellMergeMode

> **cellMergeMode**: [`GridCellMergeMode`](../type-aliases/GridCellMergeMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:435](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L435)

#### Inherited from

[`GridType`](GridType.md).[`cellMergeMode`](GridType.md#cellmergemode)

***

### cellSelection

> **cellSelection**: [`GridSelectionMode`](../type-aliases/GridSelectionMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:774](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L774)

Represents the selection mode for cells: 'none','single', 'multiple', 'multipleCascade'

#### Inherited from

[`GridType`](GridType.md).[`cellSelection`](GridType.md#cellselection)

***

### childDataKey?

> `optional` **childDataKey?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:794](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L794)

#### Inherited from

[`GridType`](GridType.md).[`childDataKey`](GridType.md#childdatakey)

***

### childLayoutKeys

> **childLayoutKeys**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:1016](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L1016)

#### Overrides

[`GridType`](GridType.md).[`childLayoutKeys`](GridType.md#childlayoutkeys)

***

### childLayoutList?

> `optional` **childLayoutList?**: `QueryList`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:807](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L807)

#### Inherited from

[`GridType`](GridType.md).[`childLayoutList`](GridType.md#childlayoutlist)

***

### columnInDrag

> **columnInDrag**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:530](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L530)

Indicates if the column of the grid is in drag mode

#### Inherited from

[`GridType`](GridType.md).[`columnInDrag`](GridType.md#columnindrag)

***

### columnList

> **columnList**: `QueryList`\<[`ColumnType`](ColumnType.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:659](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L659)

An unmodifiable list, containing all the columns of the grid.

#### Inherited from

[`GridType`](GridType.md).[`columnList`](GridType.md#columnlist)

***

### columnMoving

> **columnMoving**: `EventEmitter`\<[`IColumnMovingEventArgs`](IColumnMovingEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:834](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L834)

#### Inherited from

[`GridType`](GridType.md).[`columnMoving`](GridType.md#columnmoving)

***

### columnMovingEnd

> **columnMovingEnd**: `EventEmitter`\<[`IColumnMovingEndEventArgs`](IColumnMovingEndEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:832](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L832)

#### Inherited from

[`GridType`](GridType.md).[`columnMovingEnd`](GridType.md#columnmovingend)

***

### columnMovingStart

> **columnMovingStart**: `EventEmitter`\<[`IColumnMovingStartEventArgs`](IColumnMovingStartEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:835](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L835)

#### Inherited from

[`GridType`](GridType.md).[`columnMovingStart`](GridType.md#columnmovingstart)

***

### columnPin

> **columnPin**: `EventEmitter`\<[`IPinColumnCancellableEventArgs`](IPinColumnCancellableEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:836](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L836)

#### Inherited from

[`GridType`](GridType.md).[`columnPin`](GridType.md#columnpin)

***

### columnPinned

> **columnPinned**: `EventEmitter`\<[`IPinColumnEventArgs`](IPinColumnEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:830](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L830)

#### Inherited from

[`GridType`](GridType.md).[`columnPinned`](GridType.md#columnpinned)

***

### columnResized

> **columnResized**: `EventEmitter`\<[`IColumnResizeEventArgs`](IColumnResizeEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:831](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L831)

#### Inherited from

[`GridType`](GridType.md).[`columnResized`](GridType.md#columnresized)

***

### columns

> **columns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:660](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L660)

#### Inherited from

[`GridType`](GridType.md).[`columns`](GridType.md#columns)

***

### columnSelection

> **columnSelection**: [`GridSelectionMode`](../type-aliases/GridSelectionMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:778](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L778)

Represents the selection mode for columns: 'none','single', 'multiple', 'multipleCascade'

#### Inherited from

[`GridType`](GridType.md).[`columnSelection`](GridType.md#columnselection)

***

### columnSelectionChanging

> **columnSelectionChanging**: `EventEmitter`\<[`IColumnSelectionEventArgs`](IColumnSelectionEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:833](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L833)

#### Inherited from

[`GridType`](GridType.md).[`columnSelectionChanging`](GridType.md#columnselectionchanging)

***

### columnVisibilityChanged

> **columnVisibilityChanged**: `EventEmitter`\<[`IColumnVisibilityChangedEventArgs`](IColumnVisibilityChangedEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:838](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L838)

#### Inherited from

[`GridType`](GridType.md).[`columnVisibilityChanged`](GridType.md#columnvisibilitychanged)

***

### columnVisibilityChanging

> **columnVisibilityChanging**: `EventEmitter`\<[`IColumnVisibilityChangingEventArgs`](IColumnVisibilityChangingEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:837](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L837)

#### Inherited from

[`GridType`](GridType.md).[`columnVisibilityChanging`](GridType.md#columnvisibilitychanging)

***

### columnWidthSetByUser

> **columnWidthSetByUser**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:630](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L630)

Indicates whether the width of the column is set by the user, or is configured automatically.

#### Inherited from

[`GridType`](GridType.md).[`columnWidthSetByUser`](GridType.md#columnwidthsetbyuser)

***

### contextMenu

> **contextMenu**: `EventEmitter`\<[`IGridContextMenuEventArgs`](IGridContextMenuEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:823](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L823)

#### Inherited from

[`GridType`](GridType.md).[`contextMenu`](GridType.md#contextmenu)

***

### currencyPositionLeft

> **currencyPositionLeft**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:627](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L627)

Indicates whether the currency symbol is positioned to the left of values.

#### Inherited from

[`GridType`](GridType.md).[`currencyPositionLeft`](GridType.md#currencypositionleft)

***

### data

> **data**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L29)

#### Inherited from

[`GridType`](GridType.md).[`data`](GridType.md#data)

***

### dataCloneStrategy

> **dataCloneStrategy**: [`IDataCloneStrategy`](IDataCloneStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:475](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L475)

Strategy, used for cloning the provided data. The type has one method, that takes any type of data

#### Inherited from

[`GridType`](GridType.md).[`dataCloneStrategy`](GridType.md#dataclonestrategy)

***

### dataRowList

> **dataRowList**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:656](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L656)

#### Inherited from

[`GridType`](GridType.md).[`dataRowList`](GridType.md#datarowlist)

***

### dataView

> **dataView**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:692](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L692)

#### Inherited from

[`GridType`](GridType.md).[`dataView`](GridType.md#dataview)

***

### dataWithAddedInTransactionRows

> **dataWithAddedInTransactionRows**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:696](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L696)

#### Inherited from

[`GridType`](GridType.md).[`dataWithAddedInTransactionRows`](GridType.md#datawithaddedintransactionrows)

***

### defaultRowHeight

> **defaultRowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:639](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L639)

#### Inherited from

[`GridType`](GridType.md).[`defaultRowHeight`](GridType.md#defaultrowheight)

***

### defaultSummaryHeight

> **defaultSummaryHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:701](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L701)

#### Inherited from

[`GridType`](GridType.md).[`defaultSummaryHeight`](GridType.md#defaultsummaryheight)

***

### disableTransitions

> **disableTransitions**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:625](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L625)

Indicates whether transitions are disabled for the grid.

#### Inherited from

[`GridType`](GridType.md).[`disableTransitions`](GridType.md#disabletransitions)

***

### doubleClick

> **doubleClick**: `EventEmitter`\<[`IGridCellEventArgs`](IGridCellEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:822](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L822)

#### Inherited from

[`GridType`](GridType.md).[`doubleClick`](GridType.md#doubleclick)

***

### dragIndicatorIconBase

> **dragIndicatorIconBase**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:623](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L623)

The base drag indicator icon. Could be of any type

#### Inherited from

[`GridType`](GridType.md).[`dragIndicatorIconBase`](GridType.md#dragindicatoriconbase)

***

### dragIndicatorIconTemplate

> **dragIndicatorIconTemplate**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:621](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L621)

The template for drag indicator icons. Could be of any type

#### Inherited from

[`GridType`](GridType.md).[`dragIndicatorIconTemplate`](GridType.md#dragindicatoricontemplate)

***

### excelStyleHeaderIconTemplate

> **excelStyleHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:770](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L770)

The template for header icon
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`excelStyleHeaderIconTemplate`](GridType.md#excelstyleheadericontemplate)

***

### expansionDepth?

> `optional` **expansionDepth?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:793](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L793)

#### Inherited from

[`GridType`](GridType.md).[`expansionDepth`](GridType.md#expansiondepth)

***

### expansionStates

> **expansionStates**: `Map`\<`any`, `boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:652](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L652)

#### Inherited from

[`GridType`](GridType.md).[`expansionStates`](GridType.md#expansionstates)

***

### filteredSortedData

> **filteredSortedData**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:695](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L695)

#### Inherited from

[`GridType`](GridType.md).[`filteredSortedData`](GridType.md#filteredsorteddata)

***

### filtering

> **filtering**: `EventEmitter`\<[`IFilteringEventArgs`](IFilteringEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:828](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L828)

#### Inherited from

[`GridType`](GridType.md).[`filtering`](GridType.md#filtering)

***

### filteringDone

> **filteringDone**: `EventEmitter`\<[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:829](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L829)

#### Inherited from

[`GridType`](GridType.md).[`filteringDone`](GridType.md#filteringdone)

***

### filteringExpressionsTree

> **filteringExpressionsTree**: [`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:875](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L875)

#### Inherited from

[`GridType`](GridType.md).[`filteringExpressionsTree`](GridType.md#filteringexpressionstree)

***

### filteringExpressionsTreeChange

> **filteringExpressionsTreeChange**: `EventEmitter`\<[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:876](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L876)

#### Inherited from

[`GridType`](GridType.md).[`filteringExpressionsTreeChange`](GridType.md#filteringexpressionstreechange)

***

### filteringLogic

> **filteringLogic**: [`FilteringLogic`](../enumerations/FilteringLogic.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:870](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L870)

#### Inherited from

[`GridType`](GridType.md).[`filteringLogic`](GridType.md#filteringlogic)

***

### filteringPipeTrigger

> **filteringPipeTrigger**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:460](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L460)

#### Inherited from

[`GridType`](GridType.md).[`filteringPipeTrigger`](GridType.md#filteringpipetrigger)

***

### filterMode

> **filterMode**: [`FilterMode`](../type-aliases/FilterMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:481](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L481)

The filter mode for the grid. It can be quick filter of excel-style filter

#### Inherited from

[`GridType`](GridType.md).[`filterMode`](GridType.md#filtermode)

***

### filterStrategy

> **filterStrategy**: [`IFilteringStrategy`](IFilteringStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:871](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L871)

#### Inherited from

[`GridType`](GridType.md).[`filterStrategy`](GridType.md#filterstrategy)

***

### firstEditableColumnIndex

> **firstEditableColumnIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:730](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L730)

#### Inherited from

[`GridType`](GridType.md).[`firstEditableColumnIndex`](GridType.md#firsteditablecolumnindex)

***

### flatData?

> `optional` **flatData?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:790](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L790)

#### Inherited from

[`GridType`](GridType.md).[`flatData`](GridType.md#flatdata)

***

### foreignKey?

> `optional` **foreignKey?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:795](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L795)

#### Inherited from

[`GridType`](GridType.md).[`foreignKey`](GridType.md#foreignkey)

***

### formGroupCreated

> **formGroupCreated**: `EventEmitter`\<[`IGridFormGroupCreatedEventArgs`](IGridFormGroupCreatedEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:859](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L859)

#### Inherited from

[`GridType`](GridType.md).[`formGroupCreated`](GridType.md#formgroupcreated)

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

#### Inherited from

[`GridType`](GridType.md).[`getHeaderCellWidth`](GridType.md#getheadercellwidth)

***

### gridAPI

> `readonly` **gridAPI**: [`GridServiceType`](GridServiceType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:478](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L478)

Represents the grid service type providing API methods for the grid

#### Inherited from

[`GridType`](GridType.md).[`gridAPI`](GridType.md#gridapi)

***

### gridKeydown

> **gridKeydown**: `EventEmitter`\<[`IGridKeydownEventArgs`](IGridKeydownEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:819](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L819)

#### Inherited from

[`GridType`](GridType.md).[`gridKeydown`](GridType.md#gridkeydown)

***

### groupByRowSelectorTemplate?

> `optional` **groupByRowSelectorTemplate?**: `TemplateRef`\<[`IgxGroupByRowSelectorTemplateContext`](IgxGroupByRowSelectorTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:578](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L578)

Optional
The template for the group row selector.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`groupByRowSelectorTemplate`](GridType.md#groupbyrowselectortemplate)

***

### groupingExpansionState?

> `optional` **groupingExpansionState?**: [`IGroupByExpandState`](IGroupByExpandState.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:882](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L882)

#### Inherited from

[`GridType`](GridType.md).[`groupingExpansionState`](GridType.md#groupingexpansionstate)

***

### groupingExpressions?

> `optional` **groupingExpressions?**: [`IGroupingExpression`](IGroupingExpression.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:883](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L883)

#### Inherited from

[`GridType`](GridType.md).[`groupingExpressions`](GridType.md#groupingexpressions)

***

### groupingExpressionsChange?

> `optional` **groupingExpressionsChange?**: `EventEmitter`\<[`IGroupingExpression`](IGroupingExpression.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:884](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L884)

#### Inherited from

[`GridType`](GridType.md).[`groupingExpressionsChange`](GridType.md#groupingexpressionschange)

***

### groupingFlatResult?

> `optional` **groupingFlatResult?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:887](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L887)

#### Inherited from

[`GridType`](GridType.md).[`groupingFlatResult`](GridType.md#groupingflatresult)

***

### groupingMetadata?

> `optional` **groupingMetadata?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:889](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L889)

#### Inherited from

[`GridType`](GridType.md).[`groupingMetadata`](GridType.md#groupingmetadata)

***

### groupingResult?

> `optional` **groupingResult?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:888](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L888)

#### Inherited from

[`GridType`](GridType.md).[`groupingResult`](GridType.md#groupingresult)

***

### groupRowTemplate?

> `optional` **groupRowTemplate?**: `TemplateRef`\<[`IgxGroupByRowTemplateContext`](IgxGroupByRowTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:572](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L572)

Optional
The template for group-by rows.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`groupRowTemplate`](GridType.md#grouprowtemplate)

***

### groupsExpanded?

> `optional` **groupsExpanded?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:885](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L885)

#### Inherited from

[`GridType`](GridType.md).[`groupsExpanded`](GridType.md#groupsexpanded)

***

### groupsRecords?

> `readonly` `optional` **groupsRecords?**: [`IGroupByRecord`](IGroupByRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:886](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L886)

#### Inherited from

[`GridType`](GridType.md).[`groupsRecords`](GridType.md#groupsrecords)

***

### groupStrategy?

> `optional` **groupStrategy?**: [`IGridGroupingStrategy`](IGridGroupingStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:869](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L869)

#### Inherited from

[`GridType`](GridType.md).[`groupStrategy`](GridType.md#groupstrategy)

***

### hasChildrenKey?

> `optional` **hasChildrenKey?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:799](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L799)

#### Inherited from

[`GridType`](GridType.md).[`hasChildrenKey`](GridType.md#haschildrenkey)

***

### hasDetails

> **hasDetails**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:733](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L733)

#### Inherited from

[`GridType`](GridType.md).[`hasDetails`](GridType.md#hasdetails)

***

### hasExpandableChildren?

> `optional` **hasExpandableChildren?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:549](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L549)

Optional
Indicates whether the grid has expandable children (hierarchical and tree grid)

#### Inherited from

[`GridType`](GridType.md).[`hasExpandableChildren`](GridType.md#hasexpandablechildren)

***

### hasPinnedRecords

> **hasPinnedRecords**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:685](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L685)

#### Inherited from

[`GridType`](GridType.md).[`hasPinnedRecords`](GridType.md#haspinnedrecords)

***

### hasVisibleColumns

> **hasVisibleColumns**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:544](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L544)

Indicates whether the grid has columns that are shown

#### Inherited from

[`GridType`](GridType.md).[`hasVisibleColumns`](GridType.md#hasvisiblecolumns)

***

### headerCollapsedIndicatorTemplate

> **headerCollapsedIndicatorTemplate**: `TemplateRef`\<[`IgxGridTemplateContext`](IgxGridTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:614](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L614)

The template for header collapsed indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`headerCollapsedIndicatorTemplate`](GridType.md#headercollapsedindicatortemplate)

***

### headerExpandedIndicatorTemplate

> **headerExpandedIndicatorTemplate**: `TemplateRef`\<[`IgxGridTemplateContext`](IgxGridTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:619](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L619)

The template for header expanded indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`headerExpandedIndicatorTemplate`](GridType.md#headerexpandedindicatortemplate)

***

### headerFeaturesWidth

> **headerFeaturesWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:631](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L631)

#### Inherited from

[`GridType`](GridType.md).[`headerFeaturesWidth`](GridType.md#headerfeatureswidth)

***

### headSelectorBaseAriaLabel

> **headSelectorBaseAriaLabel**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:541](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L541)

#### Inherited from

[`GridType`](GridType.md).[`headSelectorBaseAriaLabel`](GridType.md#headselectorbasearialabel)

***

### headSelectorTemplate

> **headSelectorTemplate**: `TemplateRef`\<[`IgxHeadSelectorTemplateContext`](IgxHeadSelectorTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:589](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L589)

The template for the header selector.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`headSelectorTemplate`](GridType.md#headselectortemplate)

***

### hiddenColumnsCount

> **hiddenColumnsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:557](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L557)

Represents the count of only the hidden (not visible) columns

#### Inherited from

[`GridType`](GridType.md).[`hiddenColumnsCount`](GridType.md#hiddencolumnscount)

***

### highlightedRowID?

> `optional` **highlightedRowID?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:804](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L804)

#### Inherited from

[`GridType`](GridType.md).[`highlightedRowID`](GridType.md#highlightedrowid)

***

### iconTemplate?

> `optional` **iconTemplate?**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:566](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L566)

Optional
The template for grid icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`iconTemplate`](GridType.md#icontemplate)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:451](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L451)

Represents the unique identifier of the grid.

#### Inherited from

[`GridType`](GridType.md).[`id`](GridType.md#id)

***

### isCellSelectable

> **isCellSelectable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:682](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L682)

Indicates whether cells are selectable in the grid

#### Inherited from

[`GridType`](GridType.md).[`isCellSelectable`](GridType.md#iscellselectable)

***

### isLoading

> **isLoading**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:465](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L465)

#### Inherited from

[`GridType`](GridType.md).[`isLoading`](GridType.md#isloading)

***

### isMultiRowSelectionEnabled

> **isMultiRowSelectionEnabled**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:684](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L684)

Indicates whether it is allowed to select more than one row in the grid

#### Inherited from

[`GridType`](GridType.md).[`isMultiRowSelectionEnabled`](GridType.md#ismultirowselectionenabled)

***

### isRowPinningToTop

> **isRowPinningToTop**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:732](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L732)

#### Inherited from

[`GridType`](GridType.md).[`isRowPinningToTop`](GridType.md#isrowpinningtotop)

***

### isRowSelectable

> **isRowSelectable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:526](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L526)

Indicates whether the grid's rows can be selected

#### Inherited from

[`GridType`](GridType.md).[`isRowSelectable`](GridType.md#isrowselectable)

***

### lastChildGrid?

> `optional` **lastChildGrid?**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:785](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L785)

#### Inherited from

[`GridType`](GridType.md).[`lastChildGrid`](GridType.md#lastchildgrid)

***

### lastEditableColumnIndex

> **lastEditableColumnIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:731](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L731)

#### Inherited from

[`GridType`](GridType.md).[`lastEditableColumnIndex`](GridType.md#lasteditablecolumnindex)

***

### lastSearchInfo

> `readonly` **lastSearchInfo**: [`ISearchInfo`](ISearchInfo.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:719](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L719)

Represents the last search in the grid
It contains the search text (the user has entered), the match and some settings for the search

#### Inherited from

[`GridType`](GridType.md).[`lastSearchInfo`](GridType.md#lastsearchinfo)

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

#### Inherited from

[`GridType`](GridType.md).[`loadChildrenOnDemand`](GridType.md#loadchildrenondemand)

***

### loadingRows?

> `optional` **loadingRows?**: `Set`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:801](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L801)

#### Inherited from

[`GridType`](GridType.md).[`loadingRows`](GridType.md#loadingrows)

***

### locale

> **locale**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:434](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L434)

Represents the locale of the grid: `USD`, `EUR`, `GBP`, `CNY`, `JPY`, etc.

#### Inherited from

[`GridType`](GridType.md).[`locale`](GridType.md#locale)

***

### localeChange

> **localeChange**: `EventEmitter`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:827](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L827)

#### Inherited from

[`GridType`](GridType.md).[`localeChange`](GridType.md#localechange)

***

### mergeStrategy

> **mergeStrategy**: [`IGridMergeStrategy`](IGridMergeStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:436](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L436)

#### Inherited from

[`GridType`](GridType.md).[`mergeStrategy`](GridType.md#mergestrategy)

***

### moving

> **moving**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:464](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L464)

Indicates whether the grid is currently in a moving state.

#### Inherited from

[`GridType`](GridType.md).[`moving`](GridType.md#moving)

***

### multiRowLayoutRowSize

> **multiRowLayoutRowSize**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:638](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L638)

#### Inherited from

[`GridType`](GridType.md).[`multiRowLayoutRowSize`](GridType.md#multirowlayoutrowsize)

***

### nativeElement

> **nativeElement**: `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:440](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L440)

Represents the native HTML element itself

#### Inherited from

[`GridType`](GridType.md).[`nativeElement`](GridType.md#nativeelement)

***

### navigation

> **navigation**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:518](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L518)

#### Inherited from

[`GridType`](GridType.md).[`navigation`](GridType.md#navigation)

***

### outerWidth

> **outerWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:635](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L635)

#### Inherited from

[`GridType`](GridType.md).[`outerWidth`](GridType.md#outerwidth)

***

### outlet

> **outlet**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:521](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L521)

#### Inherited from

[`GridType`](GridType.md).[`outlet`](GridType.md#outlet)

***

### pagingMode

> **pagingMode**: [`GridPagingMode`](../type-aliases/GridPagingMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:710](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L710)

Represents the paging of the grid. It can be either 'Local' or 'Remote'
- Local: Default value; The grid will paginate the data source based on the page

#### Inherited from

[`GridType`](GridType.md).[`pagingMode`](GridType.md#pagingmode)

***

### parent?

> `optional` **parent?**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:803](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L803)

#### Inherited from

[`GridType`](GridType.md).[`parent`](GridType.md#parent)

***

### parentVirtDir

> **parentVirtDir**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:653](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L653)

#### Inherited from

[`GridType`](GridType.md).[`parentVirtDir`](GridType.md#parentvirtdir)

***

### pinnedColumns

> **pinnedColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:666](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L666)

An array of columns, but it counts only the ones that are pinned

#### Inherited from

[`GridType`](GridType.md).[`pinnedColumns`](GridType.md#pinnedcolumns)

***

### pinnedColumnsCount

> **pinnedColumnsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:559](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L559)

Represents the count of only the pinned columns

#### Inherited from

[`GridType`](GridType.md).[`pinnedColumnsCount`](GridType.md#pinnedcolumnscount)

***

### pinnedEndColumns

> **pinnedEndColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:670](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L670)

An array of columns, but it counts only the ones that are pinned to the end.

#### Inherited from

[`GridType`](GridType.md).[`pinnedEndColumns`](GridType.md#pinnedendcolumns)

***

### pinnedEndWidth

> **pinnedEndWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:535](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L535)

The width of pinned element for pinning at end.

#### Inherited from

[`GridType`](GridType.md).[`pinnedEndWidth`](GridType.md#pinnedendwidth)

***

### pinnedRecords

> **pinnedRecords**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:687](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L687)

#### Inherited from

[`GridType`](GridType.md).[`pinnedRecords`](GridType.md#pinnedrecords)

***

### pinnedRecordsCount

> **pinnedRecordsCount**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:686](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L686)

#### Inherited from

[`GridType`](GridType.md).[`pinnedRecordsCount`](GridType.md#pinnedrecordscount)

***

### pinnedRows

> **pinnedRows**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:691](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L691)

#### Inherited from

[`GridType`](GridType.md).[`pinnedRows`](GridType.md#pinnedrows)

***

### pinnedStartColumns

> **pinnedStartColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:668](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L668)

An array of columns, but it counts only the ones that are pinned to the start.

#### Inherited from

[`GridType`](GridType.md).[`pinnedStartColumns`](GridType.md#pinnedstartcolumns)

***

### pinnedStartWidth

> **pinnedStartWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:533](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L533)

The width of pinned element for pinning at start.

#### Inherited from

[`GridType`](GridType.md).[`pinnedStartWidth`](GridType.md#pinnedstartwidth)

***

### pinning

> **pinning**: [`IPinningConfig`](IPinningConfig.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:650](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L650)

The configuration for columns and rows pinning in the grid
It's of type IPinningConfig, which can have value for columns (start, end) and for rows (top, bottom)

#### Inherited from

[`GridType`](GridType.md).[`pinning`](GridType.md#pinning)

***

### pipeTrigger

> **pipeTrigger**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:454](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L454)

#### Inherited from

[`GridType`](GridType.md).[`pipeTrigger`](GridType.md#pipetrigger)

***

### primaryKey

> **primaryKey**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:449](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L449)

Represents the unique primary key used for identifying rows in the grid

#### Inherited from

[`GridType`](GridType.md).[`primaryKey`](GridType.md#primarykey)

***

### processedExpandedFlatData?

> `optional` **processedExpandedFlatData?**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:813](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L813)

#### Inherited from

[`GridType`](GridType.md).[`processedExpandedFlatData`](GridType.md#processedexpandedflatdata)

***

### processedRecords?

> `optional` **processedRecords?**: `Map`\<`any`, [`ITreeGridRecord`](ITreeGridRecord.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:815](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L815)

#### Inherited from

[`GridType`](GridType.md).[`processedRecords`](GridType.md#processedrecords)

***

### processedRootRecords?

> `optional` **processedRootRecords?**: [`ITreeGridRecord`](ITreeGridRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:809](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L809)

#### Inherited from

[`GridType`](GridType.md).[`processedRootRecords`](GridType.md#processedrootrecords)

***

### rangeSelected

> **rangeSelected**: `EventEmitter`\<[`GridSelectionRange`](GridSelectionRange.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:825](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L825)

#### Inherited from

[`GridType`](GridType.md).[`rangeSelected`](GridType.md#rangeselected)

***

### records?

> `optional` **records?**: `Map`\<`any`, [`ITreeGridRecord`](ITreeGridRecord.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:812](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L812)

#### Inherited from

[`GridType`](GridType.md).[`records`](GridType.md#records)

***

### rendered$

> **rendered$**: `Observable`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:864](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L864)

#### Inherited from

[`GridType`](GridType.md).[`rendered$`](GridType.md#rendered)

***

### renderedRowHeight

> **renderedRowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:453](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L453)

The height of the visible rows in the grid.

#### Inherited from

[`GridType`](GridType.md).[`renderedRowHeight`](GridType.md#renderedrowheight)

***

### resizeNotify

> **resizeNotify**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:866](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L866)

#### Inherited from

[`GridType`](GridType.md).[`resizeNotify`](GridType.md#resizenotify)

***

### resourceStrings

> **resourceStrings**: `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:437](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L437)

#### Inherited from

[`GridType`](GridType.md).[`resourceStrings`](GridType.md#resourcestrings)

***

### rootGrid?

> `optional` **rootGrid?**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:808](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L808)

#### Inherited from

[`GridType`](GridType.md).[`rootGrid`](GridType.md#rootgrid)

***

### rootRecords?

> `optional` **rootRecords?**: [`ITreeGridRecord`](ITreeGridRecord.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:810](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L810)

#### Inherited from

[`GridType`](GridType.md).[`rootRecords`](GridType.md#rootrecords)

***

### rootSummariesEnabled

> **rootSummariesEnabled**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:443](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L443)

#### Inherited from

[`GridType`](GridType.md).[`rootSummariesEnabled`](GridType.md#rootsummariesenabled)

***

### rowAdd

> **rowAdd**: `EventEmitter`\<[`IRowDataCancelableEventArgs`](IRowDataCancelableEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:840](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L840)

#### Inherited from

[`GridType`](GridType.md).[`rowAdd`](GridType.md#rowadd)

***

### rowAdded

> **rowAdded**: `EventEmitter`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:841](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L841)

#### Inherited from

[`GridType`](GridType.md).[`rowAdded`](GridType.md#rowadded)

***

### rowAddedNotifier

> **rowAddedNotifier**: `Subject`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:843](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L843)

#### Inherited from

[`GridType`](GridType.md).[`rowAddedNotifier`](GridType.md#rowaddednotifier)

***

### rowClick

> **rowClick**: `EventEmitter`\<[`IGridRowEventArgs`](IGridRowEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:821](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L821)

#### Inherited from

[`GridType`](GridType.md).[`rowClick`](GridType.md#rowclick)

***

### rowCollapsedIndicatorTemplate

> **rowCollapsedIndicatorTemplate**: `TemplateRef`\<[`IgxGridRowTemplateContext`](IgxGridRowTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:765](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L765)

The template for collapsed row indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`rowCollapsedIndicatorTemplate`](GridType.md#rowcollapsedindicatortemplate)

***

### rowDelete

> **rowDelete**: `EventEmitter`\<[`IRowDataCancelableEventArgs`](IRowDataCancelableEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:844](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L844)

#### Inherited from

[`GridType`](GridType.md).[`rowDelete`](GridType.md#rowdelete)

***

### rowDeleted

> **rowDeleted**: `EventEmitter`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:845](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L845)

#### Inherited from

[`GridType`](GridType.md).[`rowDeleted`](GridType.md#rowdeleted)

***

### rowDeletedNotifier

> **rowDeletedNotifier**: `Subject`\<[`IRowDataEventArgs`](IRowDataEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:847](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L847)

#### Inherited from

[`GridType`](GridType.md).[`rowDeletedNotifier`](GridType.md#rowdeletednotifier)

***

### rowDragEnd

> **rowDragEnd**: `EventEmitter`\<[`IRowDragEndEventArgs`](IRowDragEndEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:857](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L857)

#### Inherited from

[`GridType`](GridType.md).[`rowDragEnd`](GridType.md#rowdragend)

***

### rowDraggable

> **rowDraggable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:447](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L447)

Indicates whether rows in the grid can be dragged. If te value is true, the rows can be dragged

#### Inherited from

[`GridType`](GridType.md).[`rowDraggable`](GridType.md#rowdraggable)

***

### rowDragging

> **rowDragging**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:728](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L728)

Indicates whether a row is currently being dragged

#### Inherited from

[`GridType`](GridType.md).[`rowDragging`](GridType.md#rowdragging)

***

### rowDragStart

> **rowDragStart**: `EventEmitter`\<[`IRowDragStartEventArgs`](IRowDragStartEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:856](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L856)

#### Inherited from

[`GridType`](GridType.md).[`rowDragStart`](GridType.md#rowdragstart)

***

### rowEdit

> **rowEdit**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:853](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L853)

#### Inherited from

[`GridType`](GridType.md).[`rowEdit`](GridType.md#rowedit)

***

### rowEditable

> **rowEditable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:442](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L442)

Indicates whether rows in the grid are editable. If te value is true, the rows can be edited

#### Inherited from

[`GridType`](GridType.md).[`rowEditable`](GridType.md#roweditable)

***

### rowEditDone

> **rowEditDone**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:854](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L854)

#### Inherited from

[`GridType`](GridType.md).[`rowEditDone`](GridType.md#roweditdone)

***

### rowEditEnter

> **rowEditEnter**: `EventEmitter`\<[`IGridEditEventArgs`](IGridEditEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:852](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L852)

#### Inherited from

[`GridType`](GridType.md).[`rowEditEnter`](GridType.md#roweditenter)

***

### rowEditExit

> **rowEditExit**: `EventEmitter`\<[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:855](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L855)

#### Inherited from

[`GridType`](GridType.md).[`rowEditExit`](GridType.md#roweditexit)

***

### rowEditingOverlay

> **rowEditingOverlay**: [`IgxToggleDirective`](../classes/IgxToggleDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:703](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L703)

#### Inherited from

[`GridType`](GridType.md).[`rowEditingOverlay`](GridType.md#roweditingoverlay)

***

### rowEditTabs

> **rowEditTabs**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:715](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L715)

#### Inherited from

[`GridType`](GridType.md).[`rowEditTabs`](GridType.md#rowedittabs)

***

### rowExpandedIndicatorTemplate

> **rowExpandedIndicatorTemplate**: `TemplateRef`\<[`IgxGridRowTemplateContext`](IgxGridRowTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:760](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L760)

The template for expanded row indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`rowExpandedIndicatorTemplate`](GridType.md#rowexpandedindicatortemplate)

***

### rowHeight

> **rowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:637](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L637)

The height of each row in the grid. Setting a constant height can solve problems with not showing all elements when scrolling

#### Inherited from

[`GridType`](GridType.md).[`rowHeight`](GridType.md#rowheight)

***

### rowList

> **rowList**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:657](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L657)

#### Inherited from

[`GridType`](GridType.md).[`rowList`](GridType.md#rowlist)

***

### rowLoadingIndicatorTemplate?

> `optional` **rowLoadingIndicatorTemplate?**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:584](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L584)

Optional
The template for row loading indicators.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`rowLoadingIndicatorTemplate`](GridType.md#rowloadingindicatortemplate)

***

### rowSelection

> **rowSelection**: [`GridSelectionMode`](../type-aliases/GridSelectionMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:776](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L776)

Represents the selection mode for rows: 'none','single', 'multiple', 'multipleCascade'

#### Inherited from

[`GridType`](GridType.md).[`rowSelection`](GridType.md#rowselection)

***

### rowSelectionChanging

> **rowSelectionChanging**: `EventEmitter`\<[`IRowSelectionEventArgs`](IRowSelectionEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:826](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L826)

#### Inherited from

[`GridType`](GridType.md).[`rowSelectionChanging`](GridType.md#rowselectionchanging)

***

### rowSelectorTemplate

> **rowSelectorTemplate**: `TemplateRef`\<[`IgxRowSelectorTemplateContext`](IgxRowSelectorTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:594](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L594)

The template for row selectors.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`rowSelectorTemplate`](GridType.md#rowselectortemplate)

***

### rowToggle

> **rowToggle**: `EventEmitter`\<[`IRowToggleEventArgs`](IRowToggleEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:858](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L858)

#### Inherited from

[`GridType`](GridType.md).[`rowToggle`](GridType.md#rowtoggle)

***

### scrollSize

> **scrollSize**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:642](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L642)

#### Inherited from

[`GridType`](GridType.md).[`scrollSize`](GridType.md#scrollsize)

***

### selected

> **selected**: `EventEmitter`\<[`IGridCellEventArgs`](IGridCellEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:824](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L824)

#### Inherited from

[`GridType`](GridType.md).[`selected`](GridType.md#selected)

***

### selectedCells?

> `optional` **selectedCells?**: [`CellType`](CellType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:890](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L890)

#### Inherited from

[`GridType`](GridType.md).[`selectedCells`](GridType.md#selectedcells)

***

### selectedRows

> **selectedRows**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:891](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L891)

#### Inherited from

[`GridType`](GridType.md).[`selectedRows`](GridType.md#selectedrows)

***

### selectionService

> **selectionService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:517](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L517)

The service handling selection in the grid. Selecting, deselecting elements

#### Inherited from

[`GridType`](GridType.md).[`selectionService`](GridType.md#selectionservice)

***

### selectRowOnClick

> **selectRowOnClick**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:772](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L772)

#### Inherited from

[`GridType`](GridType.md).[`selectRowOnClick`](GridType.md#selectrowonclick)

***

### showExpandAll?

> `optional` **showExpandAll?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:554](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L554)

Optional
Indicates whether collapsed grid elements should be expanded

#### Inherited from

[`GridType`](GridType.md).[`showExpandAll`](GridType.md#showexpandall)

***

### showRowSelectors

> **showRowSelectors**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:528](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L528)

Indicates whether the selectors of the rows are visible

#### Inherited from

[`GridType`](GridType.md).[`showRowSelectors`](GridType.md#showrowselectors)

***

### sortAscendingHeaderIconTemplate

> **sortAscendingHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:604](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L604)

The template for ascending sort header icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`sortAscendingHeaderIconTemplate`](GridType.md#sortascendingheadericontemplate)

***

### sortDescendingHeaderIconTemplate

> **sortDescendingHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:609](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L609)

The template for descending sort header icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`sortDescendingHeaderIconTemplate`](GridType.md#sortdescendingheadericontemplate)

***

### sortHeaderIconTemplate

> **sortHeaderIconTemplate**: `TemplateRef`\<[`IgxGridHeaderTemplateContext`](IgxGridHeaderTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:599](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L599)

The template for sort header icons.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`GridType`](GridType.md).[`sortHeaderIconTemplate`](GridType.md#sortheadericontemplate)

***

### sortingExpressions

> **sortingExpressions**: [`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:873](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L873)

#### Inherited from

[`GridType`](GridType.md).[`sortingExpressions`](GridType.md#sortingexpressions)

***

### sortingExpressionsChange

> **sortingExpressionsChange**: `EventEmitter`\<[`ISortingExpression`](ISortingExpression.md)\<`any`\>[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:874](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L874)

#### Inherited from

[`GridType`](GridType.md).[`sortingExpressionsChange`](GridType.md#sortingexpressionschange)

***

### sortingOptions

> **sortingOptions**: [`ISortingOptions`](ISortingOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:879](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L879)

#### Inherited from

[`GridType`](GridType.md).[`sortingOptions`](GridType.md#sortingoptions)

***

### sortStrategy

> **sortStrategy**: [`IGridSortingStrategy`](IGridSortingStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:868](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L868)

#### Inherited from

[`GridType`](GridType.md).[`sortStrategy`](GridType.md#sortstrategy)

***

### summariesMargin

> **summariesMargin**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:540](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L540)

The CSS margin of the summaries

#### Inherited from

[`GridType`](GridType.md).[`summariesMargin`](GridType.md#summariesmargin)

***

### summariesRowList

> **summariesRowList**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:678](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L678)

#### Inherited from

[`GridType`](GridType.md).[`summariesRowList`](GridType.md#summariesrowlist)

***

### summaryCalculationMode

> **summaryCalculationMode**: [`GridSummaryCalculationMode`](../type-aliases/GridSummaryCalculationMode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:780](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L780)

Represents the calculation mode for summaries: 'rootLevelOnly', 'childLevelsOnly', 'rootAndChildLevels'

#### Inherited from

[`GridType`](GridType.md).[`summaryCalculationMode`](GridType.md#summarycalculationmode)

***

### summaryPipeTrigger

> **summaryPipeTrigger**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:455](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L455)

#### Inherited from

[`GridType`](GridType.md).[`summaryPipeTrigger`](GridType.md#summarypipetrigger)

***

### summaryPosition

> **summaryPosition**: [`GridSummaryPosition`](../type-aliases/GridSummaryPosition.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:782](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L782)

Represents the position of summaries: 'top', 'bottom'

#### Inherited from

[`GridType`](GridType.md).[`summaryPosition`](GridType.md#summaryposition)

***

### summaryRowHeight

> **summaryRowHeight**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:702](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L702)

#### Inherited from

[`GridType`](GridType.md).[`summaryRowHeight`](GridType.md#summaryrowheight)

***

### tbody

> **tbody**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:654](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L654)

#### Inherited from

[`GridType`](GridType.md).[`tbody`](GridType.md#tbody)

***

### toolbarExporting

> **toolbarExporting**: `EventEmitter`\<[`IGridToolbarExportEventArgs`](IGridToolbarExportEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:862](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L862)

#### Inherited from

[`GridType`](GridType.md).[`toolbarExporting`](GridType.md#toolbarexporting)

***

### totalRowsCountAfterFilter

> **totalRowsCountAfterFilter**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:704](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L704)

#### Inherited from

[`GridType`](GridType.md).[`totalRowsCountAfterFilter`](GridType.md#totalrowscountafterfilter)

***

### transactions

> `readonly` **transactions**: [`TransactionService`](TransactionService.md)\<[`Transaction`](Transaction.md), [`State`](State.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:698](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L698)

Represents the transaction service for the grid.

#### Inherited from

[`GridType`](GridType.md).[`transactions`](GridType.md#transactions)

***

### treeGroupArea?

> `optional` **treeGroupArea?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:816](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L816)

#### Inherited from

[`GridType`](GridType.md).[`treeGroupArea`](GridType.md#treegrouparea)

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

#### Inherited from

[`GridType`](GridType.md).[`uniqueColumnValuesStrategy`](GridType.md#uniquecolumnvaluesstrategy)

***

### unpinnedColumns

> **unpinnedColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:664](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L664)

An array of columns, but it counts only the ones that are not pinned

#### Inherited from

[`GridType`](GridType.md).[`unpinnedColumns`](GridType.md#unpinnedcolumns)

***

### unpinnedRecords

> **unpinnedRecords**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:688](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L688)

#### Inherited from

[`GridType`](GridType.md).[`unpinnedRecords`](GridType.md#unpinnedrecords)

***

### unpinnedWidth

> **unpinnedWidth**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:538](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L538)

The width of unpinned element

#### Inherited from

[`GridType`](GridType.md).[`unpinnedWidth`](GridType.md#unpinnedwidth)

***

### updateOnRender?

> `optional` **updateOnRender?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:805](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L805)

#### Inherited from

[`GridType`](GridType.md).[`updateOnRender`](GridType.md#updateonrender)

***

### validation

> `readonly` **validation**: [`IgxGridValidationService`](../classes/IgxGridValidationService.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:700](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L700)

Represents the validation service for the grid. The type contains properties and methods (logic) for validating records

#### Inherited from

[`GridType`](GridType.md).[`validation`](GridType.md#validation)

***

### validationStatusChange

> **validationStatusChange**: `EventEmitter`\<[`IGridValidationStatusEventArgs`](IGridValidationStatusEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:860](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L860)

#### Inherited from

[`GridType`](GridType.md).[`validationStatusChange`](GridType.md#validationstatuschange)

***

### validationTrigger

> **validationTrigger**: [`GridValidationTrigger`](../type-aliases/GridValidationTrigger.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:645](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L645)

The trigger for grid validation. It's value can either be `change` or `blur`

#### Inherited from

[`GridType`](GridType.md).[`validationTrigger`](GridType.md#validationtrigger)

***

### verticalScrollContainer

> **verticalScrollContainer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:655](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L655)

#### Inherited from

[`GridType`](GridType.md).[`verticalScrollContainer`](GridType.md#verticalscrollcontainer)

***

### virtualizationState

> **virtualizationState**: [`IForOfState`](IForOfState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:513](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L513)

Represents the state of virtualization for the grid. It has an owner, start index and chunk size

#### Inherited from

[`GridType`](GridType.md).[`virtualizationState`](GridType.md#virtualizationstate)

***

### visibleColumns

> **visibleColumns**: [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:662](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L662)

An array of columns, but it counts only the ones visible (not hidden) in the view

#### Inherited from

[`GridType`](GridType.md).[`visibleColumns`](GridType.md#visiblecolumns)

## Accessors

### filteredData

#### Get Signature

> **get** **filteredData**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L30)

##### Returns

`any`[]

#### Inherited from

[`GridType`](GridType.md).[`filteredData`](GridType.md#filtereddata)

## Methods

### clearCellSelection()

> **clearCellSelection**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:953](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L953)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`clearCellSelection`](GridType.md#clearcellselection)

***

### clearGrouping()?

> `optional` **clearGrouping**(`field`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:898](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L898)

#### Parameters

##### field

`string`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`clearGrouping`](GridType.md#cleargrouping)

***

### clearSort()

> **clearSort**(`name?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:927](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L927)

#### Parameters

##### name?

`string`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`clearSort`](GridType.md#clearsort)

***

### closeRowEditingOverlay()

> **closeRowEditingOverlay**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:972](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L972)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`closeRowEditingOverlay`](GridType.md#closeroweditingoverlay)

***

### collapseRow()

> **collapseRow**(`id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:967](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L967)

#### Parameters

##### id

`any`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`collapseRow`](GridType.md#collapserow)

***

### columnToVisibleIndex()

> **columnToVisibleIndex**(`key`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:945](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L945)

#### Parameters

##### key

`string` \| `number`

#### Returns

`number`

#### Inherited from

[`GridType`](GridType.md).[`columnToVisibleIndex`](GridType.md#columntovisibleindex)

***

### createColumnsList()?

> `optional` **createColumnsList**(`cols`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:977](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L977)

#### Parameters

##### cols

[`ColumnType`](ColumnType.md)[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`createColumnsList`](GridType.md#createcolumnslist)

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

#### Inherited from

[`GridType`](GridType.md).[`createFilterDropdown`](GridType.md#createfilterdropdown)

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

#### Inherited from

[`GridType`](GridType.md).[`createRow`](GridType.md#createrow)

***

### deleteRow()

> **deleteRow**(`id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:964](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L964)

#### Parameters

##### id

`any`

#### Returns

`any`

#### Inherited from

[`GridType`](GridType.md).[`deleteRow`](GridType.md#deleterow)

***

### deleteRowById()

> **deleteRowById**(`id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:965](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L965)

#### Parameters

##### id

`any`

#### Returns

`any`

#### Inherited from

[`GridType`](GridType.md).[`deleteRowById`](GridType.md#deleterowbyid)

***

### deselectAllColumns()

> **deselectAllColumns**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:903](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L903)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`deselectAllColumns`](GridType.md#deselectallcolumns)

***

### deselectAllRows()

> **deselectAllRows**(`onlyFilterData?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:958](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L958)

#### Parameters

##### onlyFilterData?

`boolean`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`deselectAllRows`](GridType.md#deselectallrows)

***

### deselectColumns()

> **deselectColumns**(`columns`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:904](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L904)

#### Parameters

##### columns

`string`[] \| [`ColumnType`](ColumnType.md)[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`deselectColumns`](GridType.md#deselectcolumns)

***

### deselectRows()

> **deselectRows**(`rowIDs`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:956](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L956)

#### Parameters

##### rowIDs

`any`[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`deselectRows`](GridType.md#deselectrows)

***

### generateRowPath()?

> `optional` **generateRowPath**(`rowId`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:980](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L980)

#### Parameters

##### rowId

`any`

#### Returns

`any`[]

#### Inherited from

[`GridType`](GridType.md).[`generateRowPath`](GridType.md#generaterowpath)

***

### getChildGrids()?

> `optional` **getChildGrids**(`inDepth?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:943](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L943)

#### Parameters

##### inDepth?

`boolean`

#### Returns

`any`[]

#### Inherited from

[`GridType`](GridType.md).[`getChildGrids`](GridType.md#getchildgrids)

***

### getColumnByName()

> **getColumnByName**(`name`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:919](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L919)

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

[`GridType`](GridType.md).[`getColumnByName`](GridType.md#getcolumnbyname)

***

### getColumnByVisibleIndex()

> **getColumnByVisibleIndex**(`index`): [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:920](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L920)

#### Parameters

##### index

`number`

#### Returns

[`ColumnType`](ColumnType.md)

#### Inherited from

[`GridType`](GridType.md).[`getColumnByVisibleIndex`](GridType.md#getcolumnbyvisibleindex)

***

### getDefaultExpandState()

> **getDefaultExpandState**(`record`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:908](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L908)

#### Parameters

##### record

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`getDefaultExpandState`](GridType.md#getdefaultexpandstate)

***

### getDragGhostCustomTemplate()

> **getDragGhostCustomTemplate**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:915](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L915)

#### Returns

`any`

#### Inherited from

[`GridType`](GridType.md).[`getDragGhostCustomTemplate`](GridType.md#getdragghostcustomtemplate)

***

### getEmptyRecordObjectFor()

> **getEmptyRecordObjectFor**(`inRow`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:931](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L931)

#### Parameters

##### inRow

[`RowType`](RowType.md)

#### Returns

`any`

#### Inherited from

[`GridType`](GridType.md).[`getEmptyRecordObjectFor`](GridType.md#getemptyrecordobjectfor)

***

### getHeaderGroupWidth()

> **getHeaderGroupWidth**(`column`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:921](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L921)

#### Parameters

##### column

[`ColumnType`](ColumnType.md)

#### Returns

`string`

#### Inherited from

[`GridType`](GridType.md).[`getHeaderGroupWidth`](GridType.md#getheadergroupwidth)

***

### getInitialPinnedIndex()

> **getInitialPinnedIndex**(`rec`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:935](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L935)

#### Parameters

##### rec

`any`

#### Returns

`number`

#### Inherited from

[`GridType`](GridType.md).[`getInitialPinnedIndex`](GridType.md#getinitialpinnedindex)

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

#### Inherited from

[`GridType`](GridType.md).[`getNextCell`](GridType.md#getnextcell)

***

### getPossibleColumnWidth()

> **getPossibleColumnWidth**(`baseWidth?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:910](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L910)

#### Parameters

##### baseWidth?

`number`

#### Returns

`string`

#### Inherited from

[`GridType`](GridType.md).[`getPossibleColumnWidth`](GridType.md#getpossiblecolumnwidth)

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

#### Inherited from

[`GridType`](GridType.md).[`getPreviousCell`](GridType.md#getpreviouscell)

***

### getRowByIndex()?

> `optional` **getRowByIndex**(`index`): [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:923](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L923)

#### Parameters

##### index

`number`

#### Returns

[`RowType`](RowType.md)

#### Inherited from

[`GridType`](GridType.md).[`getRowByIndex`](GridType.md#getrowbyindex)

***

### getRowByKey()?

> `optional` **getRowByKey**(`key`): [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:922](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L922)

#### Parameters

##### key

`any`

#### Returns

[`RowType`](RowType.md)

#### Inherited from

[`GridType`](GridType.md).[`getRowByKey`](GridType.md#getrowbykey)

***

### getSelectedRanges()

> **getSelectedRanges**(): [`GridSelectionRange`](GridSelectionRange.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:902](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L902)

#### Returns

[`GridSelectionRange`](GridSelectionRange.md)[]

#### Inherited from

[`GridType`](GridType.md).[`getSelectedRanges`](GridType.md#getselectedranges)

***

### getUnpinnedIndexById()

> **getUnpinnedIndexById**(`id`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:930](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L930)

#### Parameters

##### id

`any`

#### Returns

`number`

#### Inherited from

[`GridType`](GridType.md).[`getUnpinnedIndexById`](GridType.md#getunpinnedindexbyid)

***

### getVisibleContentHeight()

> **getVisibleContentHeight**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:913](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L913)

#### Returns

`number`

#### Inherited from

[`GridType`](GridType.md).[`getVisibleContentHeight`](GridType.md#getvisiblecontentheight)

***

### groupBy()?

> `optional` **groupBy**(`expression`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:899](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L899)

#### Parameters

##### expression

[`IGroupingExpression`](IGroupingExpression.md) \| [`IGroupingExpression`](IGroupingExpression.md)[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`groupBy`](GridType.md#groupby)

***

### hasVerticalScroll()

> **hasVerticalScroll**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:912](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L912)

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`hasVerticalScroll`](GridType.md#hasverticalscroll)

***

### isChildGridRecord()?

> `optional` **isChildGridRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:942](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L942)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isChildGridRecord`](GridType.md#ischildgridrecord)

***

### isColumnGrouped()

> **isColumnGrouped**(`fieldName`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:937](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L937)

#### Parameters

##### fieldName

`string`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isColumnGrouped`](GridType.md#iscolumngrouped)

***

### isDetailRecord()

> **isDetailRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:938](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L938)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isDetailRecord`](GridType.md#isdetailrecord)

***

### isExpandedGroup()

> **isExpandedGroup**(`group`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:976](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L976)

#### Parameters

##### group

[`IGroupByRecord`](IGroupByRecord.md)

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isExpandedGroup`](GridType.md#isexpandedgroup)

***

### isGhostRecord()

> **isGhostRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:940](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L940)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isGhostRecord`](GridType.md#isghostrecord)

***

### isGroupByRecord()

> **isGroupByRecord**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:939](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L939)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isGroupByRecord`](GridType.md#isgroupbyrecord)

***

### isHierarchicalRecord()?

> `optional` **isHierarchicalRecord**(`record`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:944](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L944)

#### Parameters

##### record

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isHierarchicalRecord`](GridType.md#ishierarchicalrecord)

***

### isRecordMerged()

> **isRecordMerged**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:934](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L934)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isRecordMerged`](GridType.md#isrecordmerged)

***

### isRecordPinned()

> **isRecordPinned**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:933](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L933)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isRecordPinned`](GridType.md#isrecordpinned)

***

### isRecordPinnedByViewIndex()

> **isRecordPinnedByViewIndex**(`rowIndex`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:936](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L936)

#### Parameters

##### rowIndex

`number`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isRecordPinnedByViewIndex`](GridType.md#isrecordpinnedbyviewindex)

***

### isSummaryRow()

> **isSummaryRow**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:932](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L932)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isSummaryRow`](GridType.md#issummaryrow)

***

### isTreeRow()?

> `optional` **isTreeRow**(`rec`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:941](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L941)

#### Parameters

##### rec

`any`

#### Returns

`boolean`

#### Inherited from

[`GridType`](GridType.md).[`isTreeRow`](GridType.md#istreerow)

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

#### Inherited from

[`GridType`](GridType.md).[`moveColumn`](GridType.md#movecolumn)

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

#### Inherited from

[`GridType`](GridType.md).[`navigateTo`](GridType.md#navigateto)

***

### notifyChanges()

> **notifyChanges**(`repaint?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:968](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L968)

#### Parameters

##### repaint?

`boolean`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`notifyChanges`](GridType.md#notifychanges)

***

### openAdvancedFilteringDialog()

> **openAdvancedFilteringDialog**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:917](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L917)

#### Parameters

##### overlaySettings?

[`OverlaySettings`](OverlaySettings.md)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`openAdvancedFilteringDialog`](GridType.md#openadvancedfilteringdialog)

***

### openRowOverlay()

> **openRowOverlay**(`id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:916](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L916)

#### Parameters

##### id

`any`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`openRowOverlay`](GridType.md#openrowoverlay)

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

#### Inherited from

[`GridType`](GridType.md).[`pinRow`](GridType.md#pinrow)

***

### preventHeaderScroll()?

> `optional` **preventHeaderScroll**(`args`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:981](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L981)

#### Parameters

##### args

`any`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`preventHeaderScroll`](GridType.md#preventheaderscroll)

***

### reflow()

> **reflow**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:973](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L973)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`reflow`](GridType.md#reflow)

***

### refreshSearch()

> **refreshSearch**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:907](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L907)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`refreshSearch`](GridType.md#refreshsearch)

***

### repositionRowEditingOverlay()

> **repositionRowEditingOverlay**(`row`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:971](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L971)

#### Parameters

##### row

[`RowType`](RowType.md)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`repositionRowEditingOverlay`](GridType.md#repositionroweditingoverlay)

***

### resetColumnCollections()

> **resetColumnCollections**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:969](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L969)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`resetColumnCollections`](GridType.md#resetcolumncollections)

***

### resetHorizontalVirtualization()

> **resetHorizontalVirtualization**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:911](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L911)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`resetHorizontalVirtualization`](GridType.md#resethorizontalvirtualization)

***

### resolveOutlet()?

> `optional` **resolveOutlet**(): [`IgxOverlayOutletDirective`](../classes/IgxOverlayOutletDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:900](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L900)

#### Returns

[`IgxOverlayOutletDirective`](../classes/IgxOverlayOutletDirective.md)

#### Inherited from

[`GridType`](GridType.md).[`resolveOutlet`](GridType.md#resolveoutlet)

***

### selectAllRows()

> **selectAllRows**(`onlyFilterData?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:957](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L957)

#### Parameters

##### onlyFilterData?

`boolean`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`selectAllRows`](GridType.md#selectallrows)

***

### selectColumns()

> **selectColumns**(`columns`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:905](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L905)

#### Parameters

##### columns

`string`[] \| [`ColumnType`](ColumnType.md)[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`selectColumns`](GridType.md#selectcolumns)

***

### selectedColumns()

> **selectedColumns**(): [`ColumnType`](ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:906](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L906)

#### Returns

[`ColumnType`](ColumnType.md)[]

#### Inherited from

[`GridType`](GridType.md).[`selectedColumns`](GridType.md#selectedcolumns)

***

### selectRange()

> **selectRange**(`range`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:954](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L954)

#### Parameters

##### range

[`GridSelectionRange`](GridSelectionRange.md) \| [`GridSelectionRange`](GridSelectionRange.md)[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`selectRange`](GridType.md#selectrange)

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

#### Inherited from

[`GridType`](GridType.md).[`selectRows`](GridType.md#selectrows)

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

#### Inherited from

[`GridType`](GridType.md).[`setFilteredData`](GridType.md#setfiltereddata)

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

#### Inherited from

[`GridType`](GridType.md).[`setFilteredSortedData`](GridType.md#setfilteredsorteddata)

***

### setUpPaginator()

> **setUpPaginator**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:959](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L959)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`setUpPaginator`](GridType.md#setuppaginator)

***

### showSnackbarFor()

> **showSnackbarFor**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:918](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L918)

#### Parameters

##### index

`number`

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`showSnackbarFor`](GridType.md#showsnackbarfor)

***

### sort()

> **sort**(`expression`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:926](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L926)

#### Parameters

##### expression

[`ISortingExpression`](ISortingExpression.md)\<`any`\> \| [`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`sort`](GridType.md#sort)

***

### toggleAll()?

> `optional` **toggleAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:979](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L979)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`toggleAll`](GridType.md#toggleall)

***

### toggleAllGroupRows()?

> `optional` **toggleAllGroupRows**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:978](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L978)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`toggleAllGroupRows`](GridType.md#toggleallgrouprows)

***

### toggleGroup()?

> `optional` **toggleGroup**(`groupRow`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:897](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L897)

#### Parameters

##### groupRow

[`IGroupByRecord`](IGroupByRecord.md)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`toggleGroup`](GridType.md#togglegroup)

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

#### Inherited from

[`GridType`](GridType.md).[`trackColumnChanges`](GridType.md#trackcolumnchanges)

***

### triggerPipes()

> **triggerPipes**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:970](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L970)

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`triggerPipes`](GridType.md#triggerpipes)

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

#### Inherited from

[`GridType`](GridType.md).[`unpinRow`](GridType.md#unpinrow)

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

#### Inherited from

[`GridType`](GridType.md).[`updateCell`](GridType.md#updatecell)

***

### updateColumns()

> **updateColumns**(`columns`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:901](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L901)

#### Parameters

##### columns

[`ColumnType`](ColumnType.md)[]

#### Returns

`void`

#### Inherited from

[`GridType`](GridType.md).[`updateColumns`](GridType.md#updatecolumns)

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

#### Inherited from

[`GridType`](GridType.md).[`updateRow`](GridType.md#updaterow)
