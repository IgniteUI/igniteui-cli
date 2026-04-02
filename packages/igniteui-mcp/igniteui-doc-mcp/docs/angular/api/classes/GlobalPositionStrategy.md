# Class: GlobalPositionStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L9)

Positions the element based on the directions passed in trough PositionSettings.
These are Top/Middle/Bottom for verticalDirection and Left/Center/Right for horizontalDirection

## Extended by

- [`ContainerPositionStrategy`](ContainerPositionStrategy.md)

## Implements

- [`IPositionStrategy`](../interfaces/IPositionStrategy.md)

## Constructors

### Constructor

> **new GlobalPositionStrategy**(`settings?`): `GlobalPositionStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L25)

#### Parameters

##### settings?

[`PositionSettings`](../interfaces/PositionSettings.md)

#### Returns

`GlobalPositionStrategy`

## Properties

### \_defaultSettings

> `protected` **\_defaultSettings**: [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L15)

***

### settings

> **settings**: [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L13)

PositionSettings to use when position the component in the overlay

#### Implementation of

[`IPositionStrategy`](../interfaces/IPositionStrategy.md).[`settings`](../interfaces/IPositionStrategy.md#settings)

## Methods

### clone()

> **clone**(): [`IPositionStrategy`](../interfaces/IPositionStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L53)

Clone the strategy instance.
```typescript
settings.positionStrategy.clone();
```

#### Returns

[`IPositionStrategy`](../interfaces/IPositionStrategy.md)

#### Implementation of

[`IPositionStrategy`](../interfaces/IPositionStrategy.md).[`clone`](../interfaces/IPositionStrategy.md#clone)

***

### position()

> **position**(`contentElement`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L41)

Position the element based on the PositionStrategy implementing this interface.

#### Parameters

##### contentElement

`HTMLElement`

The HTML element to be positioned

#### Returns

`void`

#### Implementation of

[`IPositionStrategy`](../interfaces/IPositionStrategy.md).[`position`](../interfaces/IPositionStrategy.md#position)

***

### setPosition()

> `protected` **setPosition**(`contentElement`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L57)

#### Parameters

##### contentElement

`HTMLElement`

#### Returns

`void`
