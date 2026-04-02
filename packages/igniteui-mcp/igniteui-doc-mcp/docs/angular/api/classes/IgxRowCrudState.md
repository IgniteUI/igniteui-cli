# Class: IgxRowCrudState

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:350](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L350)

## Extends

- [`IgxCellCrudState`](IgxCellCrudState.md)

## Extended by

- [`IgxRowAddCrudState`](IgxRowAddCrudState.md)

## Constructors

### Constructor

> **new IgxRowCrudState**(): `IgxRowCrudState`

#### Returns

`IgxRowCrudState`

#### Inherited from

[`IgxCellCrudState`](IgxCellCrudState.md).[`constructor`](IgxCellCrudState.md#constructor)

## Properties

### cell

> **cell**: [`IgxCell`](IgxCell.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L209)

#### Inherited from

[`IgxCellCrudState`](IgxCellCrudState.md).[`cell`](IgxCellCrudState.md#cell)

***

### closeRowEditingOverlay

> **closeRowEditingOverlay**: `Subject`\<`unknown`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:351](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L351)

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:208](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L208)

#### Inherited from

[`IgxCellCrudState`](IgxCellCrudState.md).[`grid`](IgxCellCrudState.md#grid)

***

### isInCompositionMode

> **isInCompositionMode**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:211](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L211)

#### Inherited from

[`IgxCellCrudState`](IgxCellCrudState.md).[`isInCompositionMode`](IgxCellCrudState.md#isincompositionmode)

***

### row

> **row**: [`IgxEditRow`](IgxEditRow.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L210)

#### Inherited from

[`IgxCellCrudState`](IgxCellCrudState.md).[`row`](IgxCellCrudState.md#row)

## Accessors

### cellInEditMode

#### Get Signature

> **get** **cellInEditMode**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:231](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L231)

##### Returns

`boolean`

#### Inherited from

[`IgxCellCrudState`](IgxCellCrudState.md).[`cellInEditMode`](IgxCellCrudState.md#cellineditmode)

***

### nonEditable

#### Get Signature

> **get** **nonEditable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:369](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L369)

##### Returns

`boolean`

***

### primaryKey

#### Get Signature

> **get** **primaryKey**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:356](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L356)

##### Returns

`any`

***

### rowEditing

#### Get Signature

> **get** **rowEditing**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:365](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L365)

##### Returns

`boolean`

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

***

### rowInEditMode

#### Get Signature

> **get** **rowInEditMode**(): [`RowType`](../interfaces/RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:360](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L360)

##### Returns

[`RowType`](../interfaces/RowType.md)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`beginCellEdit`](IgxCellCrudState.md#begincelledit)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`cellEdit`](IgxCellCrudState.md#celledit)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`cellEditDone`](IgxCellCrudState.md#celleditdone)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`createCell`](IgxCellCrudState.md#createcell)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`createRow`](IgxCellCrudState.md#createrow)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`endCellEdit`](IgxCellCrudState.md#endcelledit)

***

### endEditMode()

> **endEditMode**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:500](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L500)

Clears cell and row editing state and closes row editing template if it is open

#### Returns

`void`

***

### endRowEdit()

> **endRowEdit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:493](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L493)

Clears row editing state

#### Returns

`void`

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`exitCellEdit`](IgxCellCrudState.md#exitcelledit)

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

***

### getParentRowId()

> `protected` **getParentRowId**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:525](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L525)

#### Returns

`any`

***

### rowEdit()

> **rowEdit**(`event`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:406](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L406)

#### Parameters

##### event

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`sameCell`](IgxCellCrudState.md#samecell)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`sameRow`](IgxCellCrudState.md#samerow)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`targetInEdit`](IgxCellCrudState.md#targetinedit)

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

[`IgxCellCrudState`](IgxCellCrudState.md).[`updateCell`](IgxCellCrudState.md#updatecell)

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
