# Interface: IGridClipboardEvent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L9)

The event arguments when data from a grid is being copied.

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L16)

`cancel` returns whether an external event has intercepted the copying
If the value becomes "true", it returns/exits from the method, instantiating the interface

***

### data

> **data**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/events.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/events.ts#L11)

`data` can be of any type and refers to the data that is being copied/stored to the clipboard
