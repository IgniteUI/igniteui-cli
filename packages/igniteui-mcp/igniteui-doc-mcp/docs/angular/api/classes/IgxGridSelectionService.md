# Class: IgxGridSelectionService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L11)

## Constructors

### Constructor

> **new IgxGridSelectionService**(): `IgxGridSelectionService`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L75)

#### Returns

`IgxGridSelectionService`

## Properties

### activeElement

> **activeElement**: [`ISelectionNode`](../interfaces/ISelectionNode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L17)

***

### columnSelection

> **columnSelection**: `Set`\<`string`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L26)

***

### columnsState

> **columnsState**: [`IColumnSelectionState`](../interfaces/IColumnSelectionState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L20)

***

### dragMode

> **dragMode**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L16)

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L15)

***

### indeterminateRows

> **indeterminateRows**: `Set`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L25)

***

### keyboardState

> **keyboardState**: [`ISelectionKeyboardState`](../interfaces/ISelectionKeyboardState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L18)

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L13)

***

### pointerState

> **pointerState**: [`ISelectionPointerState`](../interfaces/ISelectionPointerState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L19)

***

### rowSelection

> **rowSelection**: `Set`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L24)

***

### selection

> **selection**: `Map`\<`number`, `Set`\<`number`\>\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L22)

***

### temp

> **temp**: `Map`\<`number`, `Set`\<`number`\>\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L23)

## Accessors

### allData

#### Get Signature

> **get** **allData**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:697](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L697)

Returns all data in the grid, with applied filtering and sorting and without deleted rows.

##### Returns

`any`[]

***

### filteredSelectedRowIds

#### Get Signature

> **get** **filteredSelectedRowIds**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:630](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L630)

##### Returns

`any`[]

***

### primaryButton

#### Get Signature

> **get** **primaryButton**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L67)

##### Returns

`boolean`

#### Set Signature

> **set** **primaryButton**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L71)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ranges

#### Get Signature

> **get** **ranges**(): [`GridSelectionRange`](../interfaces/GridSelectionRange.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L52)

Returns the current selected ranges in the grid from both
keyboard and pointer interactions

##### Returns

[`GridSelectionRange`](../interfaces/GridSelectionRange.md)[]

## Methods

### add()

> **add**(`node`, `addToRange?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L114)

Adds a single node.
Single clicks | Ctrl + single clicks on cells is the usual case.

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### addToRange?

`boolean` = `true`

#### Returns

`void`

***

### addKeyboardRange()

> **addKeyboardRange**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:129](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L129)

Adds the active keyboard range selection (if any) to the `ranges` meta.

#### Returns

`void`

***

### addRangeMeta()

> **addRangeMeta**(`node`, `state?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:170](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L170)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### state?

[`SelectionState`](../type-aliases/SelectionState.md)

#### Returns

`void`

***

### areAllRowSelected()

> **areAllRowSelected**(`newSelection?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:613](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L613)

#### Parameters

##### newSelection?

`any`

#### Returns

`boolean`

***

### areEqualCollections()

> `protected` **areEqualCollections**(`first`, `second`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:830](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L830)

#### Parameters

##### first

`any`

##### second

`any`

#### Returns

`boolean`

***

### clear()

> **clear**(`clearAcriveEl?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:368](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L368)

#### Parameters

##### clearAcriveEl?

`boolean` = `false`

#### Returns

`void`

***

### clearAllSelectedColumns()

> **clearAllSelectedColumns**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:826](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L826)

Clear columnSelection

#### Returns

`void`

***

### clearAllSelectedRows()

> **clearAllSelectedRows**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:689](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L689)

Clear rowSelection and update checkbox state

#### Returns

`void`

***

### clearHeaderCBState()

> **clearHeaderCBState**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:676](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L676)

#### Returns

`void`

***

### clearRowSelection()

> **clearRowSelection**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:426](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L426)

Clears row selection, if filtering is applied clears only selected rows from filtered data.

#### Parameters

##### event?

`any`

#### Returns

`void`

***

### clearTextSelection()

> **clearTextSelection**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:377](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L377)

#### Returns

`void`

***

### deselectColumn()

> **deselectColumn**(`field`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:789](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L789)

Deselect the specified column and emit event.

#### Parameters

##### field

`string`

##### event?

`any`

#### Returns

`void`

***

### deselectColumns()

> **deselectColumns**(`fields`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:801](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L801)

Deselect specified columns. And emit event.

#### Parameters

##### fields

`string`[]

##### event?

`any`

#### Returns

`void`

***

### deselectColumnsWithNoEvent()

> **deselectColumnsWithNoEvent**(`fields`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:796](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L796)

Deselect specified columns. No event is emitted.

#### Parameters

##### fields

`string`[]

#### Returns

`void`

***

### deselectPivotRowByID()

> **deselectPivotRowByID**(`rowID`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:491](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L491)

#### Parameters

##### rowID

`any`

##### event?

`any`

#### Returns

`void`

***

### deselectRow()

> **deselectRow**(`rowID`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:476](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L476)

Deselect the specified row and emit event.

#### Parameters

##### rowID

`any`

##### event?

`any`

#### Returns

`void`

***

### deselectRows()

> **deselectRows**(`keys`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:543](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L543)

#### Parameters

##### keys

`any`[]

##### event?

`any`

#### Returns

`void`

***

### deselectRowsWithNoEvent()

> **deselectRowsWithNoEvent**(`rowIDs`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:569](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L569)

Deselect specified rows. No event is emitted.

#### Parameters

##### rowIDs

`any`[]

#### Returns

`void`

***

### dragSelect()

> **dragSelect**(`node`, `state`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:361](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L361)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### state

[`SelectionState`](../type-aliases/SelectionState.md)

#### Returns

`void`

***

### emitColumnSelectionEvent()

> **emitColumnSelectionEvent**(`newSelection`, `added`, `removed`, `event?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:808](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L808)

#### Parameters

##### newSelection

`any`

##### added

`any`

##### removed

`any`

##### event?

`any`

#### Returns

`boolean`

***

### emitRowSelectionEvent()

> **emitRowSelectionEvent**(`newSelection`, `added`, `removed`, `event?`, `currSelection?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:636](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L636)

#### Parameters

##### newSelection

`any`

##### added

`any`

##### removed

`any`

##### event?

`any`

##### currSelection?

`any`

#### Returns

`boolean`

***

### generateRange()

> **generateRange**(`node`, `state?`): [`GridSelectionRange`](../interfaces/GridSelectionRange.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L183)

Generates a new selection range from the given `node`.
If `state` is passed instead it will generate the range based on the passed `node`
and the start node of the `state`.

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### state?

[`SelectionState`](../type-aliases/SelectionState.md)

#### Returns

[`GridSelectionRange`](../interfaces/GridSelectionRange.md)

***

### getIndeterminateRows()

> **getIndeterminateRows**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:421](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L421)

Returns array of the rows in indeterminate state.

#### Returns

`any`[]

***

### getPivotRowsByIds()

> **getPivotRowsByIds**(`ids`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:661](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L661)

#### Parameters

##### ids

`any`[]

#### Returns

`any`[]

***

### getRecordKey()

> **getRecordKey**(`record`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:684](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L684)

#### Parameters

##### record

`any`

#### Returns

`any`

***

### getRowDataById()

> **getRowDataById**(`rowID`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:668](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L668)

#### Parameters

##### rowID

`any`

#### Returns

`any`

***

### getRowIDs()

> **getRowIDs**(`data`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:680](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L680)

#### Parameters

##### data

`any`

#### Returns

`any`[]

***

### getSelectedColumns()

> **getSelectedColumns**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:709](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L709)

Returns array of the selected columns fields.

#### Returns

`any`[]

***

### getSelectedRows()

> **getSelectedRows**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:416](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L416)

Returns array of the selected row id's.

#### Returns

`any`[]

***

### getSelectedRowsData()

> **getSelectedRowsData**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:393](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L393)

#### Returns

`any`[]

***

### hasSomeRowSelected()

> **hasSomeRowSelected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:624](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L624)

#### Returns

`boolean`

***

### initColumnsState()

> **initColumnsState**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L105)

Resets the columns state

#### Returns

`void`

***

### initKeyboardState()

> **initKeyboardState**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L84)

Resets the keyboard state

#### Returns

`void`

***

### initPointerState()

> **initPointerState**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L94)

Resets the pointer state

#### Returns

`void`

***

### isActiveLayout()

> **isActiveLayout**(`current`, `target`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:166](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L166)

#### Parameters

##### current

[`IMultiRowLayoutNode`](../interfaces/IMultiRowLayoutNode.md)

##### target

[`IMultiRowLayoutNode`](../interfaces/IMultiRowLayoutNode.md)

#### Returns

`boolean`

***

### isActiveNode()

> **isActiveNode**(`node`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L154)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

#### Returns

`boolean`

***

### isColumnSelected()

> **isColumnSelected**(`field`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:713](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L713)

#### Parameters

##### field

`string`

#### Returns

`boolean`

***

### isInMap()

> **isInMap**(`node`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L145)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

#### Returns

`boolean`

***

### isPivotRowSelected()

> **isPivotRowSelected**(`rowID`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:579](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L579)

#### Parameters

##### rowID

`any`

#### Returns

`boolean`

***

### isRowInIndeterminateState()

> **isRowInIndeterminateState**(`rowID`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:591](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L591)

#### Parameters

##### rowID

`any`

#### Returns

`boolean`

***

### isRowSelected()

> **isRowSelected**(`rowID`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:575](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L575)

#### Parameters

##### rowID

`any`

#### Returns

`boolean`

***

### keyboardStateOnFocus()

> **keyboardStateOnFocus**(`node`, `emitter`, `dom`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L222)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### emitter

`EventEmitter`\<[`GridSelectionRange`](../interfaces/GridSelectionRange.md)\>

##### dom

`any`

#### Returns

`void`

***

### keyboardStateOnKeydown()

> **keyboardStateOnKeydown**(`node`, `shift`, `shiftTab`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:207](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L207)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### shift

`boolean`

##### shiftTab

`boolean`

#### Returns

`void`

***

### mergeMap()

> **mergeMap**(`target`, `source`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:276](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L276)

#### Parameters

##### target

`Map`\<`number`, `Set`\<`number`\>\>

##### source

`Map`\<`number`, `Set`\<`number`\>\>

#### Returns

`void`

***

### pointerDown()

> **pointerDown**(`node`, `shift`, `ctrl`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:244](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L244)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### shift

`boolean`

##### ctrl

`boolean`

#### Returns

`void`

***

### pointerDownShiftKey()

> **pointerDownShiftKey**(`node`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:271](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L271)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

#### Returns

`void`

***

### pointerEnter()

> **pointerEnter**(`node`, `event`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:295](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L295)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### event

`PointerEvent`

#### Returns

`boolean`

***

### pointerUp()

> **pointerUp**(`node`, `emitter`, `firedOutsideGrid?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:318](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L318)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### emitter

`EventEmitter`\<[`GridSelectionRange`](../interfaces/GridSelectionRange.md)\>

##### firedOutsideGrid?

`boolean`

#### Returns

`boolean`

***

### remove()

> **remove**(`node`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L135)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

#### Returns

`void`

***

### removeRangeMeta()

> **removeRangeMeta**(`node`, `state?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:174](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L174)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### state?

[`SelectionState`](../type-aliases/SelectionState.md)

#### Returns

`void`

***

### restoreTextSelection()

> **restoreTextSelection**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:386](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L386)

#### Returns

`void`

***

### selectAllRows()

> **selectAllRows**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:442](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L442)

Select all rows, if filtering is applied select only from filtered data.

#### Parameters

##### event?

`any`

#### Returns

`void`

***

### selectColumn()

> **selectColumn**(`field`, `clearPrevSelection?`, `selectColumnsRange?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:718](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L718)

Select the specified column and emit event.

#### Parameters

##### field

`string`

##### clearPrevSelection?

`any`

##### selectColumnsRange?

`any`

##### event?

`any`

#### Returns

`void`

***

### selectColumns()

> **selectColumns**(`fields`, `clearPrevSelection?`, `selectColumnsRange?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:735](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L735)

Select specified columns. And emit event.

#### Parameters

##### fields

`string`[]

##### clearPrevSelection?

`any`

##### selectColumnsRange?

`any`

##### event?

`any`

#### Returns

`void`

***

### selectColumnsRange()

> **selectColumnsRange**(`field`, `event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:755](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L755)

Select range from last clicked column to the current specified column.

#### Parameters

##### field

`string`

##### event

`any`

#### Returns

`void`

***

### selectColumnsWithNoEvent()

> **selectColumnsWithNoEvent**(`fields`, `clearPrevSelection?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:779](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L779)

Select specified columns. No event is emitted.

#### Parameters

##### fields

`string`[]

##### clearPrevSelection?

`any`

#### Returns

`void`

***

### selected()

> **selected**(`node`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L150)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

#### Returns

`boolean`

***

### selectMultipleRows()

> **selectMultipleRows**(`rowID`, `rowData`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:596](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L596)

Select range from last selected row to the current specified row.

#### Parameters

##### rowID

`any`

##### rowData

`any`

##### event?

`any`

#### Returns

`void`

***

### selectPivotRowById()

> **selectPivotRowById**(`rowID`, `clearPrevSelection`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:467](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L467)

#### Parameters

##### rowID

`any`

##### clearPrevSelection

`boolean`

##### event?

`any`

#### Returns

`void`

***

### selectRange()

> **selectRange**(`node`, `state`, `collection?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:343](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L343)

#### Parameters

##### node

[`ISelectionNode`](../interfaces/ISelectionNode.md)

##### state

[`SelectionState`](../type-aliases/SelectionState.md)

##### collection?

`Map`\<`number`, `Set`\<`number`\>\> = `...`

#### Returns

`void`

***

### selectRowById()

> **selectRowById**(`rowID`, `clearPrevSelection?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:451](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L451)

Select the specified row and emit event.

#### Parameters

##### rowID

`any`

##### clearPrevSelection?

`any`

##### event?

`any`

#### Returns

`void`

***

### selectRows()

> **selectRows**(`keys`, `clearPrevSelection?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:524](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L524)

Select the specified rows and emit event.

#### Parameters

##### keys

`any`[]

##### clearPrevSelection?

`boolean`

##### event?

`any`

#### Returns

`void`

***

### selectRowsWithNoEvent()

> **selectRowsWithNoEvent**(`rowIDs`, `clearPrevSelection?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/selection/selection.service.ts:559](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/selection/selection.service.ts#L559)

Select specified rows. No event is emitted.

#### Parameters

##### rowIDs

`any`[]

##### clearPrevSelection?

`any`

#### Returns

`void`
