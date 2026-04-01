# Interface: IDragMoveEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L124)

## Extends

- [`IDragStartEventArgs`](IDragStartEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:121](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L121)

Set if the the dragging should be canceled.

#### Inherited from

[`IDragStartEventArgs`](IDragStartEventArgs.md).[`cancel`](IDragStartEventArgs.md#cancel)

***

### nextPageX

> **nextPageX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L126)

The new pageX position of the pointer that the igxDrag will use. It can be overridden to limit dragged element X movement.

***

### nextPageY

> **nextPageY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L128)

The new pageX position of the pointer that the igxDrag will use. It can be overridden to limit dragged element Y movement.

***

### originalEvent

> **originalEvent**: `PointerEvent` \| `MouseEvent` \| `TouchEvent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L100)

Reference to the original event that caused the interaction with the element.
Can be PointerEvent, TouchEvent or MouseEvent.

#### Inherited from

[`IDragStartEventArgs`](IDragStartEventArgs.md).[`originalEvent`](IDragStartEventArgs.md#originalevent)

***

### owner

> **owner**: [`IgxDragDirective`](../classes/IgxDragDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:102](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L102)

The owner igxDrag directive that triggered this event.

#### Inherited from

[`IDragStartEventArgs`](IDragStartEventArgs.md).[`owner`](IDragStartEventArgs.md#owner)

***

### pageX

> **pageX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L111)

The current position of the pointer on X axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDragStartEventArgs`](IDragStartEventArgs.md).[`pageX`](IDragStartEventArgs.md#pagex)

***

### pageY

> **pageY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L116)

The current position of the pointer on Y axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDragStartEventArgs`](IDragStartEventArgs.md).[`pageY`](IDragStartEventArgs.md#pagey)

***

### startX

> **startX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L104)

The initial position of the pointer on X axis when the dragged element began moving

#### Inherited from

[`IDragStartEventArgs`](IDragStartEventArgs.md).[`startX`](IDragStartEventArgs.md#startx)

***

### startY

> **startY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L106)

The initial position of the pointer on Y axis when the dragged element began moving

#### Inherited from

[`IDragStartEventArgs`](IDragStartEventArgs.md).[`startY`](IDragStartEventArgs.md#starty)
