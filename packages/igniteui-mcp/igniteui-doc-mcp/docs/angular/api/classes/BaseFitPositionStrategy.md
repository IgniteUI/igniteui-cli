# Abstract Class: BaseFitPositionStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:4](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L4)

Positions the element based on the directions and start point passed in trough PositionSettings.
It is possible to either pass a start point or an HTMLElement as a positioning base.

## Extends

- [`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md)

## Extended by

- [`AutoPositionStrategy`](AutoPositionStrategy.md)
- [`ElasticPositionStrategy`](ElasticPositionStrategy.md)

## Constructors

### Constructor

> **new BaseFitPositionStrategy**(`settings?`): `BaseFitPositionStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L33)

#### Parameters

##### settings?

[`PositionSettings`](../interfaces/PositionSettings.md)

#### Returns

`BaseFitPositionStrategy`

#### Inherited from

[`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md).[`constructor`](ConnectedPositioningStrategy.md#constructor)

## Properties

### \_initialSettings

> `protected` **\_initialSettings**: [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L6)

***

### \_initialSize

> `protected` **\_initialSize**: [`Size`](../interfaces/Size.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:5](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L5)

***

### settings

> **settings**: [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L21)

PositionSettings to use when position the component in the overlay

#### Inherited from

[`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md).[`settings`](ConnectedPositioningStrategy.md#settings)

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

#### Inherited from

[`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md).[`calculateElementRectangles`](ConnectedPositioningStrategy.md#calculateelementrectangles)

***

### calculateLeft()

> `protected` **calculateLeft**(`targetRect`, `elementRect`, `startPoint`, `direction`, `offset?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:81](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L81)

Calculates the position of the left border of the element if it gets positioned
with provided start point and direction

#### Parameters

##### targetRect

`Partial`\<`DOMRect`\>

Rectangle of the target where element is attached

##### elementRect

`Partial`\<`DOMRect`\>

Rectangle of the element

##### startPoint

[`HorizontalAlignment`](../enumerations/HorizontalAlignment.md)

Start point of the target

##### direction

[`HorizontalAlignment`](../enumerations/HorizontalAlignment.md)

Direction in which to show the element

##### offset?

`number`

#### Returns

`number`

***

### calculateTop()

> `protected` **calculateTop**(`targetRect`, `elementRect`, `startPoint`, `direction`, `offset?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:99](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L99)

Calculates the position of the top border of the element if it gets positioned
with provided position settings related to the target

#### Parameters

##### targetRect

`Partial`\<`DOMRect`\>

Rectangle of the target where element is attached

##### elementRect

`Partial`\<`DOMRect`\>

Rectangle of the element

##### startPoint

[`VerticalAlignment`](../enumerations/VerticalAlignment.md)

Start point of the target

##### direction

[`VerticalAlignment`](../enumerations/VerticalAlignment.md)

Direction in which to show the element

##### offset?

`number`

#### Returns

`number`

***

### clone()

> **clone**(): [`IPositionStrategy`](../interfaces/IPositionStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/connected-positioning-strategy.ts#L58)

Creates clone of this position strategy

#### Returns

[`IPositionStrategy`](../interfaces/IPositionStrategy.md)

clone of this position strategy

#### Inherited from

[`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md).[`clone`](ConnectedPositioningStrategy.md#clone)

***

### fitInViewport()

> `abstract` `protected` **fitInViewport**(`element`, `connectedFit`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L124)

Fits the element into viewport according to the position settings

#### Parameters

##### element

`HTMLElement`

element to fit in viewport

##### connectedFit

`ConnectedFit`

connectedFit object containing all necessary parameters

#### Returns

`any`

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

#### Inherited from

[`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md).[`getElementOffsets`](ConnectedPositioningStrategy.md#getelementoffsets)

***

### position()

> **position**(`contentElement`, `size`, `document?`, `initialCall?`, `target?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L20)

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

#### Overrides

[`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md).[`position`](ConnectedPositioningStrategy.md#position)

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

#### Inherited from

[`ConnectedPositioningStrategy`](ConnectedPositioningStrategy.md).[`setStyle`](ConnectedPositioningStrategy.md#setstyle)

***

### shouldFitInViewPort()

> `protected` **shouldFitInViewPort**(`connectedFit`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L113)

Returns whether the element should fit in viewport

#### Parameters

##### connectedFit

`ConnectedFit`

connectedFit object containing all necessary parameters

#### Returns

`boolean`

***

### updateViewPortFit()

> `protected` **updateViewPortFit**(`connectedFit`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/base-fit-position-strategy.ts#L44)

Checks if element can fit in viewport and updates provided connectedFit
with the result

#### Parameters

##### connectedFit

`ConnectedFit`

connectedFit to update

#### Returns

`void`
