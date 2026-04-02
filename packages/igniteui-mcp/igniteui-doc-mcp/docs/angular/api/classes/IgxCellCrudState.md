# Class: IgxCellCrudState

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:207](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L207)

## Extended by

- [`IgxRowCrudState`](IgxRowCrudState.md)

## Constructors

### Constructor

> **new IgxCellCrudState**(): `IgxCellCrudState`

#### Returns

`IgxCellCrudState`

## Properties

### cell

> **cell**: [`IgxCell`](IgxCell.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L209)

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:208](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L208)

***

### isInCompositionMode

> **isInCompositionMode**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:211](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L211)

***

### row

> **row**: [`IgxEditRow`](IgxEditRow.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L210)

## Accessors

### cellInEditMode

#### Get Signature

> **get** **cellInEditMode**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:231](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L231)

##### Returns

`boolean`

## Methods

### beginCellEdit()

> **beginCellEdit**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:235](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L235)

#### Parameters

##### event?

`Event`

#### Returns

`void`

***

### cellEdit()

> **cellEdit**(`event?`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:245](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L245)

#### Parameters

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

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

***

### createCell()

> **createCell**(`cell`): [`IgxCell`](IgxCell.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L213)

#### Parameters

##### cell

`any`

#### Returns

[`IgxCell`](IgxCell.md)

***

### createRow()

> **createRow**(`cell`): [`IgxEditRow`](IgxEditRow.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:218](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L218)

#### Parameters

##### cell

[`IgxCell`](IgxCell.md)

#### Returns

[`IgxEditRow`](IgxEditRow.md)

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

***

### sameCell()

> **sameCell**(`cell`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:226](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L226)

#### Parameters

##### cell

[`IgxCell`](IgxCell.md)

#### Returns

`boolean`

***

### sameRow()

> **sameRow**(`rowID`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L222)

#### Parameters

##### rowID

`any`

#### Returns

`boolean`

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
