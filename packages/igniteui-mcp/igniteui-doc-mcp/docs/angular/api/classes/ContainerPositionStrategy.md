# Class: ContainerPositionStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts#L8)

Positions the element inside the containing outlet based on the directions passed in trough PositionSettings.
These are Top/Middle/Bottom for verticalDirection and Left/Center/Right for horizontalDirection

## Extends

- [`GlobalPositionStrategy`](GlobalPositionStrategy.md)

## Constructors

### Constructor

> **new ContainerPositionStrategy**(`settings?`): `ContainerPositionStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts#L10)

#### Parameters

##### settings?

[`PositionSettings`](../interfaces/PositionSettings.md)

#### Returns

`ContainerPositionStrategy`

#### Overrides

[`GlobalPositionStrategy`](GlobalPositionStrategy.md).[`constructor`](GlobalPositionStrategy.md#constructor)

## Properties

### \_defaultSettings

> `protected` **\_defaultSettings**: [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L15)

#### Inherited from

[`GlobalPositionStrategy`](GlobalPositionStrategy.md).[`_defaultSettings`](GlobalPositionStrategy.md#_defaultsettings)

***

### settings

> **settings**: [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L13)

PositionSettings to use when position the component in the overlay

#### Inherited from

[`GlobalPositionStrategy`](GlobalPositionStrategy.md).[`settings`](GlobalPositionStrategy.md#settings)

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

#### Inherited from

[`GlobalPositionStrategy`](GlobalPositionStrategy.md).[`clone`](GlobalPositionStrategy.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts#L32)

Disposes the observer and cleans up references.

#### Returns

`void`

***

### position()

> **position**(`contentElement`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/container-position-strategy.ts#L17)

Position the element based on the PositionStrategy implementing this interface.

#### Parameters

##### contentElement

`HTMLElement`

#### Returns

`void`

#### Overrides

[`GlobalPositionStrategy`](GlobalPositionStrategy.md).[`position`](GlobalPositionStrategy.md#position)

***

### setPosition()

> `protected` **setPosition**(`contentElement`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/position/global-position-strategy.ts#L57)

#### Parameters

##### contentElement

`HTMLElement`

#### Returns

`void`

#### Inherited from

[`GlobalPositionStrategy`](GlobalPositionStrategy.md).[`setPosition`](GlobalPositionStrategy.md#setposition)
