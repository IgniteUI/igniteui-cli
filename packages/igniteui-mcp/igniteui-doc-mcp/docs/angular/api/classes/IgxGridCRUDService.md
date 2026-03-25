# Class: IgxGridCRUDService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:632](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L632)

## Extends

- [`IgxRowAddCrudState`](IgxRowAddCrudState.md)

## Constructors

### Constructor

> **new IgxGridCRUDService**(): `IgxGridCRUDService`

#### Returns

`IgxGridCRUDService`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`constructor`](IgxRowAddCrudState.md#constructor)

## Properties

### addRowParent

> **addRowParent**: [`IgxAddRowParent`](../interfaces/IgxAddRowParent.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:531](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L531)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`addRowParent`](IgxRowAddCrudState.md#addrowparent)

***

### cell

> **cell**: [`IgxCell`](IgxCell.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L209)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`cell`](IgxRowAddCrudState.md#cell)

***

### closeRowEditingOverlay

> **closeRowEditingOverlay**: `Subject`\<`unknown`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:351](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L351)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`closeRowEditingOverlay`](IgxRowAddCrudState.md#closeroweditingoverlay)

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:208](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L208)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`grid`](IgxRowAddCrudState.md#grid)

***

### isInCompositionMode

> **isInCompositionMode**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:211](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L211)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`isInCompositionMode`](IgxRowAddCrudState.md#isincompositionmode)

***

### row

> **row**: [`IgxEditRow`](IgxEditRow.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L210)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`row`](IgxRowAddCrudState.md#row)

## Accessors

### cellInEditMode

#### Get Signature

> **get** **cellInEditMode**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:231](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L231)

##### Returns

`boolean`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`cellInEditMode`](IgxRowAddCrudState.md#cellineditmode)

***

### nonEditable

#### Get Signature

> **get** **nonEditable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:369](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L369)

##### Returns

`boolean`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`nonEditable`](IgxRowAddCrudState.md#noneditable)

***

### primaryKey

#### Get Signature

> **get** **primaryKey**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:356](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L356)

##### Returns

`any`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`primaryKey`](IgxRowAddCrudState.md#primarykey)

***

### rowEditing

#### Get Signature

> **get** **rowEditing**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:365](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L365)

##### Returns

`boolean`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`rowEditing`](IgxRowAddCrudState.md#rowediting)

***

### rowEditingBlocked

#### Get Signature

> **get** **rowEditingBlocked**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:373](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L373)

##### Returns

`boolean`

#### Set Signature

> **set** **rowEditingBlocked**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:377](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L377)

##### Parameters

###### val

`boolean`

##### Returns

`void`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`rowEditingBlocked`](IgxRowAddCrudState.md#roweditingblocked)

***

### rowInEditMode

#### Get Signature

> **get** **rowInEditMode**(): [`RowType`](../interfaces/RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:360](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L360)

##### Returns

[`RowType`](../interfaces/RowType.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`rowInEditMode`](IgxRowAddCrudState.md#rowineditmode)

## Methods

### beginCellEdit()

> **beginCellEdit**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:235](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L235)

#### Parameters

##### event?

`Event`

#### Returns

`void`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`beginCellEdit`](IgxRowAddCrudState.md#begincelledit)

***

### beginRowEdit()

> **beginRowEdit**(`event?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:382](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L382)

Enters row edit mode

#### Parameters

##### event?

`Event`

#### Returns

`boolean`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`beginRowEdit`](IgxRowAddCrudState.md#beginrowedit)

***

### cellEdit()

> **cellEdit**(`event?`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:245](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L245)

#### Parameters

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`cellEdit`](IgxRowAddCrudState.md#celledit)

***

### cellEditDone()

> **cellEditDone**(`event`, `addRow`): [`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:308](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L308)

#### Parameters

##### event

`any`

##### addRow

`boolean`

#### Returns

[`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`cellEditDone`](IgxRowAddCrudState.md#celleditdone)

***

### createCell()

> **createCell**(`cell`): [`IgxCell`](IgxCell.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L213)

#### Parameters

##### cell

`any`

#### Returns

[`IgxCell`](IgxCell.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`createCell`](IgxRowAddCrudState.md#createcell)

***

### createRow()

> **createRow**(`cell`): [`IgxEditRow`](IgxEditRow.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:218](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L218)

#### Parameters

##### cell

[`IgxCell`](IgxCell.md)

#### Returns

[`IgxEditRow`](IgxEditRow.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`createRow`](IgxRowAddCrudState.md#createrow)

***

### endCellEdit()

> **endCellEdit**(`restoreFocus?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:334](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L334)

Clears cell editing state

#### Parameters

##### restoreFocus?

`boolean` = `false`

#### Returns

`void`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`endCellEdit`](IgxRowAddCrudState.md#endcelledit)

***

### endEdit()

> **endEdit**(`commit?`, `event?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:740](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L740)

Finishes the row transactions on the current row and returns whether the grid editing was canceled.

#### Parameters

##### commit?

`boolean` = `true`

##### event?

`Event`

#### Returns

`boolean`

#### Remarks

If `commit === true`, passes them from the pending state to the data (or transaction service)

#### Example

```html
<button type="button" igxButton (click)="grid.endEdit(true)">Commit Row</button>
```

***

### endEditMode()

> **endEditMode**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:500](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L500)

Clears cell and row editing state and closes row editing template if it is open

#### Returns

`void`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`endEditMode`](IgxRowAddCrudState.md#endeditmode)

***

### endRowEdit()

> **endRowEdit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:493](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L493)

Clears row editing state

#### Returns

`void`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`endRowEdit`](IgxRowAddCrudState.md#endrowedit)

***

### enterAddRowMode()

> **enterAddRowMode**(`parentRow`, `asChild?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:685](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L685)

Enters add row mode by creating temporary dummy so the user can fill in new row cells.

#### Parameters

##### parentRow

[`RowType`](../interfaces/RowType.md)

Parent row after which the Add Row UI will be rendered.
                 If `null` will show it at the bottom after all rows (or top if there are not rows).

##### asChild?

`boolean`

Specifies if the new row should be added as a child to a tree row.

##### event?

`Event`

Base event that triggered the add row mode.

#### Returns

`void`

***

### enterEditMode()

> **enterEditMode**(`cell`, `event?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:634](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L634)

#### Parameters

##### cell

`any`

##### event?

`Event`

#### Returns

`boolean`

***

### exitCellEdit()

> **exitCellEdit**(`event?`): [`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:319](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L319)

Exit cell edit mode

#### Parameters

##### event?

`Event`

#### Returns

[`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`exitCellEdit`](IgxRowAddCrudState.md#exitcelledit)

***

### exitRowEdit()

> **exitRowEdit**(`cachedRowData`, `event?`): [`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:483](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L483)

Exit row edit mode

#### Parameters

##### cachedRowData

`any`

##### event?

`Event`

#### Returns

[`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`exitRowEdit`](IgxRowAddCrudState.md#exitrowedit)

***

### getParentRowId()

> `protected` **getParentRowId**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:621](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L621)

#### Returns

`any`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`getParentRowId`](IgxRowAddCrudState.md#getparentrowid)

***

### rowEdit()

> **rowEdit**(`event`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:406](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L406)

#### Parameters

##### event

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`rowEdit`](IgxRowAddCrudState.md#rowedit)

***

### rowEditDone()

> **rowEditDone**(`cachedRowData`, `event`): [`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:475](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L475)

#### Parameters

##### cachedRowData

`any`

##### event

`Event`

#### Returns

[`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`rowEditDone`](IgxRowAddCrudState.md#roweditdone)

***

### sameCell()

> **sameCell**(`cell`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:226](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L226)

#### Parameters

##### cell

[`IgxCell`](IgxCell.md)

#### Returns

`boolean`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`sameCell`](IgxRowAddCrudState.md#samecell)

***

### sameRow()

> **sameRow**(`rowID`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L222)

#### Parameters

##### rowID

`any`

#### Returns

`boolean`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`sameRow`](IgxRowAddCrudState.md#samerow)

***

### targetInEdit()

> **targetInEdit**(`rowIndex`, `columnIndex`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:342](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L342)

Returns whether the targeted cell is in edit mode

#### Parameters

##### rowIndex

`number`

##### columnIndex

`number`

#### Returns

`boolean`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`targetInEdit`](IgxRowAddCrudState.md#targetinedit)

***

### updateCell()

> **updateCell**(`exit`, `event?`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:251](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L251)

#### Parameters

##### exit

`boolean`

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`updateCell`](IgxRowAddCrudState.md#updatecell)

***

### updateRow()

> **updateRow**(`commit`, `event?`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:412](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L412)

#### Parameters

##### commit

`boolean`

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`updateRow`](IgxRowAddCrudState.md#updaterow)

***

### updateRowEditData()

> **updateRowEditData**(`row`, `value?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:508](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L508)

#### Parameters

##### row

[`IgxEditRow`](IgxEditRow.md)

##### value?

`any`

#### Returns

`void`

#### Inherited from

[`IgxRowAddCrudState`](IgxRowAddCrudState.md).[`updateRowEditData`](IgxRowAddCrudState.md#updateroweditdata)
