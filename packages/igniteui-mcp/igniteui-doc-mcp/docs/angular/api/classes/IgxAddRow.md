# Class: IgxAddRow

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L80)

## Extends

- [`IgxEditRow`](IgxEditRow.md)

## Constructors

### Constructor

> **new IgxAddRow**(`id`, `index`, `data`, `recordRef`, `grid`): `IgxAddRow`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:81](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L81)

#### Parameters

##### id

`any`

##### index

`number`

##### data

`any`

##### recordRef

`any`

##### grid

[`GridType`](../interfaces/GridType.md)

#### Returns

`IgxAddRow`

#### Overrides

[`IgxEditRow`](IgxEditRow.md).[`constructor`](IgxEditRow.md#constructor)

## Properties

### data

> **data**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`data`](IgxEditRow.md#data)

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`grid`](IgxEditRow.md#grid)

***

### id

> **id**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`id`](IgxEditRow.md#id)

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L15)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`index`](IgxEditRow.md#index)

***

### newData

> **newData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:12](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L12)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`newData`](IgxEditRow.md#newdata)

***

### recordRef

> **recordRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L84)

***

### rowFormGroup

> **rowFormGroup**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L13)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`rowFormGroup`](IgxEditRow.md#rowformgroup)

***

### state

> **state**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L11)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`state`](IgxEditRow.md#state)

***

### transactionState

> **transactionState**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L10)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`transactionState`](IgxEditRow.md#transactionstate)

## Accessors

### isAddRow

#### Get Signature

> **get** **isAddRow**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L103)

##### Returns

`boolean`

#### Overrides

[`IgxEditRow`](IgxEditRow.md).[`isAddRow`](IgxEditRow.md#isaddrow)

## Methods

### createRowDataEventArgs()

> **createRowDataEventArgs**(`event?`): [`IRowDataCancelableEventArgs`](../interfaces/IRowDataCancelableEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L38)

#### Parameters

##### event?

`Event`

#### Returns

[`IRowDataCancelableEventArgs`](../interfaces/IRowDataCancelableEventArgs.md)

#### Inherited from

[`IgxEditRow`](IgxEditRow.md).[`createRowDataEventArgs`](IgxEditRow.md#createrowdataeventargs)

***

### createRowEditDoneEventArgs()

> **createRowEditDoneEventArgs**(`cachedRowData`, `event?`): [`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L97)

#### Parameters

##### cachedRowData

`any`

##### event?

`Event`

#### Returns

[`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

#### Overrides

[`IgxEditRow`](IgxEditRow.md).[`createRowEditDoneEventArgs`](IgxEditRow.md#createroweditdoneeventargs)

***

### createRowEditEventArgs()

> **createRowEditEventArgs**(`includeNewValue?`, `event?`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:89](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L89)

#### Parameters

##### includeNewValue?

`boolean` = `true`

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

#### Overrides

[`IgxEditRow`](IgxEditRow.md).[`createRowEditEventArgs`](IgxEditRow.md#createrowediteventargs)
