# Class: ConnectedPositioningStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L17)

Positions the element based on the directions and start point passed in trough PositionSettings.
It is possible to either pass a start point or an HTMLElement as a positioning base.

## Extended by

- [`BaseFitPositionStrategy`](BaseFitPositionStrategy.md)

## Implements

- [`IPositionStrategy`](../interfaces/IPositionStrategy.md)

## Constructors

### Constructor

> **new ConnectedPositioningStrategy**(`settings?`): `ConnectedPositioningStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L33)

#### Parameters

##### settings?

[`PositionSettings`](../interfaces/PositionSettings.md)

#### Returns

`ConnectedPositioningStrategy`

## Properties

### settings

> **settings**: [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L21)

PositionSettings to use when position the component in the overlay

#### Implementation of

[`IPositionStrategy`](../interfaces/IPositionStrategy.md).[`settings`](../interfaces/IPositionStrategy.md#settings)

## Methods

### calculateElementRectangles()

> `protected` **calculateElementRectangles**(`contentElement`, `target`): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L67)

Obtains the DomRect objects for the required elements - target and element to position

#### Parameters

##### contentElement

`any`

##### target

`HTMLElement` \| [`Point`](Point.md)

#### Returns

`object`

target and element DomRect objects

##### elementRect

> **elementRect**: `Partial`\<`DOMRect`\>

##### targetRect

> **targetRect**: `Partial`\<`DOMRect`\>

***

### clone()

> **clone**(): [`IPositionStrategy`](../interfaces/IPositionStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L58)

Creates clone of this position strategy

#### Returns

[`IPositionStrategy`](../interfaces/IPositionStrategy.md)

clone of this position strategy

#### Implementation of

[`IPositionStrategy`](../interfaces/IPositionStrategy.md).[`clone`](../interfaces/IPositionStrategy.md#clone)

***

### getElementOffsets()

> `protected` **getElementOffsets**(`connectedFit`): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L82)

Get element horizontal and vertical offsets by connectedFit
or `this.settings` if connectedFit offset is not defined.

#### Parameters

##### connectedFit

`ConnectedFit`

#### Returns

`object`

horizontalOffset and verticalOffset

##### horizontalOffset

> **horizontalOffset**: `number`

##### verticalOffset

> **verticalOffset**: `number`

***

### position()

> **position**(`contentElement`, `size`, `document?`, `initialCall?`, `target?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:49](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L49)

Position the element based on the PositionStrategy implementing this interface.

#### Parameters

##### contentElement

`HTMLElement`

The HTML element to be positioned

##### size

[`Size`](../interfaces/Size.md)

Size of the element

##### document?

`Document`

reference to the Document object

##### initialCall?

`boolean`

should be true if this is the initial call to the method

##### target?

`HTMLElement` \| [`Point`](Point.md)

attaching target for the component to show
```typescript
settings.positionStrategy.position(content, size, document, true);
```

#### Returns

`void`

#### Implementation of

[`IPositionStrategy`](../interfaces/IPositionStrategy.md).[`position`](../interfaces/IPositionStrategy.md#position)

***

### setStyle()

> `protected` **setStyle**(`element`, `targetRect`, `elementRect`, `connectedFit`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L97)

Sets element's style which effectively positions provided element according
to provided position settings

#### Parameters

##### element

`HTMLElement`

Element to position

##### targetRect

`Partial`\<`DOMRect`\>

Bounding rectangle of strategy target

##### elementRect

`Partial`\<`DOMRect`\>

Bounding rectangle of the element

##### connectedFit

`ConnectedFit`

#### Returns

`void`
