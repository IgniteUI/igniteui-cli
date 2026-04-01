# Interface: IColumnResizingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L206)

The event arguments when a column is being resized
It contains information about the column, it's old and new width
The event can be canceled

## Extends

- [`IColumnResizeEventArgs`](IColumnResizeEventArgs.md).[`CancelableEventArgs`](CancelableEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableEventArgs`](CancelableEventArgs.md).[`cancel`](CancelableEventArgs.md#cancel)

***

### column

> **column**: [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:194](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L194)

Represents the information of the column that is being resized

#### Inherited from

[`IColumnResizeEventArgs`](IColumnResizeEventArgs.md).[`column`](IColumnResizeEventArgs.md#column)

***

### newWidth

> **newWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:198](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L198)

Represents the new width, the column is being resized to

#### Inherited from

[`IColumnResizeEventArgs`](IColumnResizeEventArgs.md).[`newWidth`](IColumnResizeEventArgs.md#newwidth)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IColumnResizeEventArgs`](IColumnResizeEventArgs.md).[`owner`](IColumnResizeEventArgs.md#owner)

***

### prevWidth

> **prevWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L196)

Represents the old width of the column before the resizing

#### Inherited from

[`IColumnResizeEventArgs`](IColumnResizeEventArgs.md).[`prevWidth`](IColumnResizeEventArgs.md#prevwidth)
