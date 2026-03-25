# Class: IgxEditRow

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L9)

## Extended by

- [`IgxAddRow`](IgxAddRow.md)

## Constructors

### Constructor

> **new IgxEditRow**(`id`, `index`, `data`, `grid`): `IgxEditRow`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

#### Parameters

##### id

`any`

##### index

`number`

##### data

`any`

##### grid

[`GridType`](../interfaces/GridType.md)

#### Returns

`IgxEditRow`

## Properties

### data

> **data**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

***

### id

> **id**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

***

### newData

> **newData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:12](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L12)

***

### rowFormGroup

> **rowFormGroup**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L13)

***

### state

> **state**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L11)

***

### transactionState

> **transactionState**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L10)

## Accessors

### isAddRow

#### Get Signature

> **get** **isAddRow**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L75)

##### Returns

`boolean`

## Methods

### createRowDataEventArgs()

> **createRowDataEventArgs**(`event?`): [`IRowDataCancelableEventArgs`](../interfaces/IRowDataCancelableEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L38)

#### Parameters

##### event?

`Event`

#### Returns

[`IRowDataCancelableEventArgs`](../interfaces/IRowDataCancelableEventArgs.md)

***

### createRowEditDoneEventArgs()

> **createRowEditDoneEventArgs**(`cachedRowData`, `event?`): [`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L55)

#### Parameters

##### cachedRowData

`any`

##### event?

`Event`

#### Returns

[`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

***

### createRowEditEventArgs()

> **createRowEditEventArgs**(`includeNewValue?`, `event?`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L19)

#### Parameters

##### includeNewValue?

`boolean` = `true`

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)
