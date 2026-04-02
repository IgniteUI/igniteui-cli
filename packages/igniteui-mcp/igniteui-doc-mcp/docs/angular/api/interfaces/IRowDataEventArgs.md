# Interface: IRowDataEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:172](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L172)

Represents event arguments related to events, that can occur for rows in a grid
Example for events: adding, deleting, selection, transaction, etc.

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IRowDataCancelableEventArgs`](IRowDataCancelableEventArgs.md)

## Properties

### ~~data~~

> **data**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L176)

#### Deprecated

since version 17.1.0. Use the `rowData` property instead.

***

### owner

> **owner**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L187)

Represents the grid instance that owns the edit event.

#### Overrides

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### ~~primaryKey~~

> **primaryKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L183)

Represents the unique key, the row can be associated with.
Available if `primaryKey` exists

#### Deprecated

since version 17.1.0. Use the `rowKey` property instead.

***

### rowData

> **rowData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L177)

***

### rowKey

> **rowKey**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L184)
