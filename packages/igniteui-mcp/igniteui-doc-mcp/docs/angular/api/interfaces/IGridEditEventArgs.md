# Interface: IGridEditEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L112)

Represents event arguments related to grid editing.
The event is cancelable
It contains information about the row and the column, as well as the old and nwe value of the element/cell

## Extends

- [`CancelableEventArgs`](CancelableEventArgs.md).[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md)

## Extended by

- [`IRowDataCancelableEventArgs`](IRowDataCancelableEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableEventArgs`](CancelableEventArgs.md).[`cancel`](CancelableEventArgs.md#cancel)

***

### cellID?

> `optional` **cellID?**: `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L56)

#### columnID

> **columnID**: `any`

#### rowID

> **rowID**: `any`

#### rowIndex

> **rowIndex**: `number`

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`cellID`](IGridEditDoneEventArgs.md#cellid)

***

### column?

> `optional` **column?**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L87)

Optional
Represents the column information of the edited cell

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`column`](IGridEditDoneEventArgs.md#column)

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L82)

Optional
Represents the original event, that has triggered the edit

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`event`](IGridEditDoneEventArgs.md#event)

***

### isAddRow?

> `optional` **isAddRow?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L97)

Optional
Indicates if the editing consists of adding a new row

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`isAddRow`](IGridEditDoneEventArgs.md#isaddrow)

***

### newValue?

> `optional` **newValue?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L76)

Optional
Represents the value, that is being entered in the edited cell
When there is no `newValue` and the event has ended, the value of the cell returns to the `oldValue`

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`newValue`](IGridEditDoneEventArgs.md#newvalue)

***

### oldValue

> **oldValue**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:70](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L70)

Represents the previous (before editing) value of the edited cell.
It's used when the event has been stopped/exited.

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`oldValue`](IGridEditDoneEventArgs.md#oldvalue)

***

### owner?

> `optional` **owner?**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L92)

Optional
Represents the grid instance that owns the edit event.

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`owner`](IGridEditDoneEventArgs.md#owner)

***

### ~~primaryKey~~

> **primaryKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L54)

#### Deprecated

since version 17.1.0. Use the `rowKey` property instead.

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`primaryKey`](IGridEditDoneEventArgs.md#primarykey)

***

### rowData

> **rowData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L65)

`rowData` represents the updated/committed data of the row after the edit (newValue)
The only case rowData (of the current object) is used directly, is when there is no rowEditing or transactions enabled

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`rowData`](IGridEditDoneEventArgs.md#rowdata)

***

### ~~rowID~~

> **rowID**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L50)

#### Deprecated

since version 17.1.0. Use the `rowKey` property instead.

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`rowID`](IGridEditDoneEventArgs.md#rowid)

***

### rowKey

> **rowKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L55)

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`rowKey`](IGridEditDoneEventArgs.md#rowkey)

***

### valid?

> `optional` **valid?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L103)

Optional
Indicates if the new value would be valid.
It can be set to return the result of the methods for validation of the grid

#### Inherited from

[`IGridEditDoneEventArgs`](IGridEditDoneEventArgs.md).[`valid`](IGridEditDoneEventArgs.md#valid)
