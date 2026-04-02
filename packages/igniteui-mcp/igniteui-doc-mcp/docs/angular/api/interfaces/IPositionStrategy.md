# Interface: IPositionStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts#L7)

[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay-position)
Position strategies determine where to display the component in the provided IgxOverlayService.

## Properties

### settings

> **settings**: [`PositionSettings`](PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts#L11)

PositionSettings to use when position the component in the overlay

## Methods

### clone()

> **clone**(): `IPositionStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts#L34)

Clone the strategy instance.
```typescript
settings.positionStrategy.clone();
```

#### Returns

`IPositionStrategy`

***

### position()

> **position**(`contentElement`, `size?`, `document?`, `initialCall?`, `target?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/IPositionStrategy.ts#L26)

Position the element based on the PositionStrategy implementing this interface.

#### Parameters

##### contentElement

`HTMLElement`

The HTML element to be positioned

##### size?

[`Size`](Size.md)

Size of the element

##### document?

`Document`

reference to the Document object

##### initialCall?

`boolean`

should be true if this is the initial call to the method

##### target?

`HTMLElement` \| [`Point`](../classes/Point.md)

attaching target for the component to show
```typescript
settings.positionStrategy.position(content, size, document, true);
```

#### Returns

`void`
