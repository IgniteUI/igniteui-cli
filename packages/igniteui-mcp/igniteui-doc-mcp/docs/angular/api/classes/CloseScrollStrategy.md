# Class: CloseScrollStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts#L8)

Uses a tolerance and closes the shown component upon scrolling if the tolerance is exceeded

## Extends

- [`ScrollStrategy`](ScrollStrategy.md)

## Constructors

### Constructor

> **new CloseScrollStrategy**(`scrollContainer?`): `CloseScrollStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts#L20)

#### Parameters

##### scrollContainer?

`HTMLElement`

#### Returns

`CloseScrollStrategy`

#### Overrides

[`ScrollStrategy`](ScrollStrategy.md).[`constructor`](ScrollStrategy.md#constructor)

## Methods

### attach()

> **attach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts#L53)

Attaches the strategy
```typescript
settings.scrollStrategy.attach();
```

#### Returns

`void`

#### Overrides

[`ScrollStrategy`](ScrollStrategy.md).[`attach`](ScrollStrategy.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts#L68)

Detaches the strategy
```typescript
settings.scrollStrategy.detach();
```

#### Returns

`void`

#### Overrides

[`ScrollStrategy`](ScrollStrategy.md).[`detach`](ScrollStrategy.md#detach)

***

### initialize()

> **initialize**(`document`, `overlayService`, `id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/close-scroll-strategy.ts#L36)

Initializes the strategy. Should be called once

#### Parameters

##### document

`Document`

reference to Document object.

##### overlayService

[`IgxOverlayService`](IgxOverlayService.md)

IgxOverlay service to use in this strategy.

##### id

`string`

Unique id for this strategy.
```typescript
settings.scrollStrategy.initialize(document, overlay, id);
```

#### Returns

`void`

#### Overrides

[`ScrollStrategy`](ScrollStrategy.md).[`initialize`](ScrollStrategy.md#initialize)
