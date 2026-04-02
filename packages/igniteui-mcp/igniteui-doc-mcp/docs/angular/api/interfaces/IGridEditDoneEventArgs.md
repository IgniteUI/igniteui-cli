# Interface: IGridEditDoneEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L46)

Represents event arguments related to grid editing completion.

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IGridEditEventArgs`](IGridEditEventArgs.md)

## Properties

### cellID?

> `optional` **cellID?**: `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L56)

#### columnID

> **columnID**: `any`

#### rowID

> **rowID**: `any`

#### rowIndex

> **rowIndex**: `number`

***

### column?

> `optional` **column?**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L87)

Optional
Represents the column information of the edited cell

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L82)

Optional
Represents the original event, that has triggered the edit

***

### isAddRow?

> `optional` **isAddRow?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L97)

Optional
Indicates if the editing consists of adding a new row

***

### newValue?

> `optional` **newValue?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L76)

Optional
Represents the value, that is being entered in the edited cell
When there is no `newValue` and the event has ended, the value of the cell returns to the `oldValue`

***

### oldValue

> **oldValue**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:70](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L70)

Represents the previous (before editing) value of the edited cell.
It's used when the event has been stopped/exited.

***

### owner?

> `optional` **owner?**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L92)

Optional
Represents the grid instance that owns the edit event.

#### Overrides

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### ~~primaryKey~~

> **primaryKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L54)

#### Deprecated

since version 17.1.0. Use the `rowKey` property instead.

***

### rowData

> **rowData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L65)

`rowData` represents the updated/committed data of the row after the edit (newValue)
The only case rowData (of the current object) is used directly, is when there is no rowEditing or transactions enabled

***

### ~~rowID~~

> **rowID**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L50)

#### Deprecated

since version 17.1.0. Use the `rowKey` property instead.

***

### rowKey

> **rowKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L55)

***

### valid?

> `optional` **valid?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L103)

Optional
Indicates if the new value would be valid.
It can be set to return the result of the methods for validation of the grid
