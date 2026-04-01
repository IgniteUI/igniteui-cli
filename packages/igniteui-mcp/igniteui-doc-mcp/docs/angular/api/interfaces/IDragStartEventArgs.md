# Interface: IDragStartEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L119)

## Extends

- [`IDragBaseEventArgs`](IDragBaseEventArgs.md)

## Extended by

- [`IDragMoveEventArgs`](IDragMoveEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:121](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L121)

Set if the the dragging should be canceled.

***

### originalEvent

> **originalEvent**: `PointerEvent` \| `MouseEvent` \| `TouchEvent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L100)

Reference to the original event that caused the interaction with the element.
Can be PointerEvent, TouchEvent or MouseEvent.

#### Inherited from

[`IDragBaseEventArgs`](IDragBaseEventArgs.md).[`originalEvent`](IDragBaseEventArgs.md#originalevent)

***

### owner

> **owner**: [`IgxDragDirective`](../classes/IgxDragDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:102](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L102)

The owner igxDrag directive that triggered this event.

#### Inherited from

[`IDragBaseEventArgs`](IDragBaseEventArgs.md).[`owner`](IDragBaseEventArgs.md#owner)

***

### pageX

> **pageX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L111)

The current position of the pointer on X axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDragBaseEventArgs`](IDragBaseEventArgs.md).[`pageX`](IDragBaseEventArgs.md#pagex)

***

### pageY

> **pageY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L116)

The current position of the pointer on Y axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDragBaseEventArgs`](IDragBaseEventArgs.md).[`pageY`](IDragBaseEventArgs.md#pagey)

***

### startX

> **startX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L104)

The initial position of the pointer on X axis when the dragged element began moving

#### Inherited from

[`IDragBaseEventArgs`](IDragBaseEventArgs.md).[`startX`](IDragBaseEventArgs.md#startx)

***

### startY

> **startY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L106)

The initial position of the pointer on Y axis when the dragged element began moving

#### Inherited from

[`IDragBaseEventArgs`](IDragBaseEventArgs.md).[`startY`](IDragBaseEventArgs.md#starty)
