# Interface: IDropBaseEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L52)

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IDropDroppedEventArgs`](IDropDroppedEventArgs.md)

## Properties

### drag

> **drag**: [`IgxDragDirective`](../classes/IgxDragDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L61)

The igxDrag directive instanced on an element that entered the area of the igxDrop element

***

### dragData

> **dragData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L63)

The data contained for the draggable element in igxDrag directive.

***

### offsetX

> **offsetX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L82)

The current position of the pointer on X axis relative to the container that initializes the igxDrop.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

***

### offsetY

> **offsetY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L87)

The current position of the pointer on Y axis relative to the container that initializes the igxDrop.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

***

### originalEvent

> **originalEvent**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L57)

Reference to the original event that caused the draggable element to enter the igxDrop element.
Can be PointerEvent, TouchEvent or MouseEvent.

***

### owner

> **owner**: [`IgxDropDirective`](../classes/IgxDropDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L59)

The owner igxDrop directive that triggered this event.

#### Overrides

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### pageX

> **pageX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L72)

The current position of the pointer on X axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

***

### pageY

> **pageY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L77)

The current position of the pointer on Y axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

***

### startX

> **startX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L65)

The initial position of the pointer on X axis when the dragged element began moving

***

### startY

> **startY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L67)

The initial position of the pointer on Y axis when the dragged element began moving
