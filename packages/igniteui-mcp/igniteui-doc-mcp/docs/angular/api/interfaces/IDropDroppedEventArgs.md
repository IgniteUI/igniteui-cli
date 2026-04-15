# Interface: IDropDroppedEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L90)

## Extends

- [`IDropBaseEventArgs`](IDropBaseEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L92)

Specifies if the default drop logic related to the event should be canceled.

***

### drag

> **drag**: [`IgxDragDirective`](../classes/IgxDragDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L61)

The igxDrag directive instanced on an element that entered the area of the igxDrop element

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`drag`](IDropBaseEventArgs.md#drag)

***

### dragData

> **dragData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L63)

The data contained for the draggable element in igxDrag directive.

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`dragData`](IDropBaseEventArgs.md#dragdata)

***

### offsetX

> **offsetX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L82)

The current position of the pointer on X axis relative to the container that initializes the igxDrop.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`offsetX`](IDropBaseEventArgs.md#offsetx)

***

### offsetY

> **offsetY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L87)

The current position of the pointer on Y axis relative to the container that initializes the igxDrop.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`offsetY`](IDropBaseEventArgs.md#offsety)

***

### originalEvent

> **originalEvent**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L57)

Reference to the original event that caused the draggable element to enter the igxDrop element.
Can be PointerEvent, TouchEvent or MouseEvent.

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`originalEvent`](IDropBaseEventArgs.md#originalevent)

***

### owner

> **owner**: [`IgxDropDirective`](../classes/IgxDropDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L59)

The owner igxDrop directive that triggered this event.

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`owner`](IDropBaseEventArgs.md#owner)

***

### pageX

> **pageX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L72)

The current position of the pointer on X axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`pageX`](IDropBaseEventArgs.md#pagex)

***

### pageY

> **pageY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L77)

The current position of the pointer on Y axis when the event was triggered.
Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`pageY`](IDropBaseEventArgs.md#pagey)

***

### startX

> **startX**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L65)

The initial position of the pointer on X axis when the dragged element began moving

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`startX`](IDropBaseEventArgs.md#startx)

***

### startY

> **startY**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L67)

The initial position of the pointer on Y axis when the dragged element began moving

#### Inherited from

[`IDropBaseEventArgs`](IDropBaseEventArgs.md).[`startY`](IDropBaseEventArgs.md#starty)
