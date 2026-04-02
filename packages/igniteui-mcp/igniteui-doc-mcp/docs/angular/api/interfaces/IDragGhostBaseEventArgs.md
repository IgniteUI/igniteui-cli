# Interface: IDragGhostBaseEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L132)

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L138)

Set if the ghost creation/destruction should be canceled.

***

### ghostElement

> **ghostElement**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:136](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L136)

Instance to the ghost element that is created when dragging starts.

***

### owner

> **owner**: [`IgxDragDirective`](../classes/IgxDragDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L134)

The owner igxDrag directive that triggered this event.

#### Overrides

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
