# Class: IgxCell

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L119)

## Constructors

### Constructor

> **new IgxCell**(`id`, `rowIndex`, `column`, `value`, `_editValue`, `rowData`, `grid`): `IgxCell`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L124)

#### Parameters

##### id

`any`

##### rowIndex

`number`

##### column

`any`

##### value

`any`

##### \_editValue

`any`

##### rowData

`any`

##### grid

[`GridType`](../interfaces/GridType.md)

#### Returns

`IgxCell`

## Properties

### \_editValue

> **\_editValue**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:129](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L129)

***

### column

> **column**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L127)

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L131)

***

### id

> **id**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L125)

***

### pendingValue

> **pendingValue**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:122](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L122)

***

### primaryKey

> **primaryKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L120)

***

### rowData

> **rowData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:130](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L130)

***

### rowIndex

> **rowIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L126)

***

### state

> **state**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:121](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L121)

***

### value

> **value**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L128)

## Accessors

### editValue

#### Get Signature

> **get** **editValue**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L135)

##### Returns

`any`

#### Set Signature

> **set** **editValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:142](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L142)

##### Parameters

###### value

`any`

##### Returns

`void`

## Methods

### castToNumber()

> **castToNumber**(`value`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L154)

#### Parameters

##### value

`any`

#### Returns

`any`

***

### createCellEditDoneEventArgs()

> **createCellEditDoneEventArgs**(`value`, `event?`): [`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L183)

#### Parameters

##### value

`any`

##### event?

`Event`

#### Returns

[`IGridEditDoneEventArgs`](../interfaces/IGridEditDoneEventArgs.md)

***

### createCellEditEventArgs()

> **createCellEditEventArgs**(`includeNewValue?`, `event?`): [`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/crud.service.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/crud.service.ts#L162)

#### Parameters

##### includeNewValue?

`boolean` = `true`

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](../interfaces/IGridEditEventArgs.md)
