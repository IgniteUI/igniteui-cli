# Interface: IRowDataCancelableEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L115)

Represents event arguments related to events, that can occur for rows in a grid
Example for events: adding, deleting, selection, transaction, etc.

## Extends

- [`IRowDataEventArgs`](IRowDataEventArgs.md).[`IGridEditEventArgs`](IGridEditEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`cancel`](IGridEditEventArgs.md#cancel)

***

### ~~cellID?~~

> `optional` **cellID?**: `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L119)

#### ~~columnID~~

> **columnID**: `any`

#### ~~rowID~~

> **rowID**: `any`

#### ~~rowIndex~~

> **rowIndex**: `number`

#### Deprecated

#### Overrides

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`cellID`](IGridEditEventArgs.md#cellid)

***

### column?

> `optional` **column?**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L87)

Optional
Represents the column information of the edited cell

#### Inherited from

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`column`](IGridEditEventArgs.md#column)

***

### ~~data~~

> **data**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L176)

#### Deprecated

since version 17.1.0. Use the `rowData` property instead.

#### Inherited from

[`IRowDataEventArgs`](IRowDataEventArgs.md).[`data`](IRowDataEventArgs.md#data)

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L82)

Optional
Represents the original event, that has triggered the edit

#### Inherited from

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`event`](IGridEditEventArgs.md#event)

***

### ~~isAddRow?~~

> `optional` **isAddRow?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L135)

#### Deprecated

#### Overrides

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`isAddRow`](IGridEditEventArgs.md#isaddrow)

***

### ~~newValue?~~

> `optional` **newValue?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L131)

#### Deprecated

#### Overrides

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`newValue`](IGridEditEventArgs.md#newvalue)

***

### ~~oldValue~~

> **oldValue**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L127)

#### Deprecated

#### Overrides

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`oldValue`](IGridEditEventArgs.md#oldvalue)

***

### owner

> **owner**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:136](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L136)

Represents the grid instance that owns the edit event.

#### Overrides

[`IRowDataEventArgs`](IRowDataEventArgs.md).[`owner`](IRowDataEventArgs.md#owner)

***

### ~~primaryKey~~

> **primaryKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L183)

Represents the unique key, the row can be associated with.
Available if `primaryKey` exists

#### Deprecated

since version 17.1.0. Use the `rowKey` property instead.

#### Inherited from

[`IRowDataEventArgs`](IRowDataEventArgs.md).[`primaryKey`](IRowDataEventArgs.md#primarykey)

***

### rowData

> **rowData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L177)

`rowData` represents the updated/committed data of the row after the edit (newValue)
The only case rowData (of the current object) is used directly, is when there is no rowEditing or transactions enabled

#### Inherited from

[`IRowDataEventArgs`](IRowDataEventArgs.md).[`rowData`](IRowDataEventArgs.md#rowdata)

***

### ~~rowID~~

> **rowID**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L50)

#### Deprecated

since version 17.1.0. Use the `rowKey` property instead.

#### Inherited from

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`rowID`](IGridEditEventArgs.md#rowid)

***

### rowKey

> **rowKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L184)

#### Inherited from

[`IRowDataEventArgs`](IRowDataEventArgs.md).[`rowKey`](IRowDataEventArgs.md#rowkey)

***

### valid?

> `optional` **valid?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L103)

Optional
Indicates if the new value would be valid.
It can be set to return the result of the methods for validation of the grid

#### Inherited from

[`IGridEditEventArgs`](IGridEditEventArgs.md).[`valid`](IGridEditEventArgs.md#valid)
