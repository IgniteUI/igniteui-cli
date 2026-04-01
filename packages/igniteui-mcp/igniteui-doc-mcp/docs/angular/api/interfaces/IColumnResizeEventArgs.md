# Interface: IColumnResizeEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:192](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L192)

The event arguments when a column is being resized

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IColumnResizingEventArgs`](IColumnResizingEventArgs.md)

## Properties

### column

> **column**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:194](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L194)

Represents the information of the column that is being resized

***

### newWidth

> **newWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:198](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L198)

Represents the new width, the column is being resized to

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### prevWidth

> **prevWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L196)

Represents the old width of the column before the resizing
