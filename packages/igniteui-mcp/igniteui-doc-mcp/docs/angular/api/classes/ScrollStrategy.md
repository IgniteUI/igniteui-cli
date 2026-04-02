# Abstract Class: ScrollStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts:4](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts#L4)

[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay-scroll).
Scroll strategies determines how the scrolling will be handled in the provided IgxOverlayService.

## Extended by

- [`AbsoluteScrollStrategy`](AbsoluteScrollStrategy.md)
- [`BlockScrollStrategy`](BlockScrollStrategy.md)
- [`CloseScrollStrategy`](CloseScrollStrategy.md)
- [`NoOpScrollStrategy`](NoOpScrollStrategy.md)

## Implements

- [`IScrollStrategy`](../interfaces/IScrollStrategy.md)

## Constructors

### Constructor

> **new ScrollStrategy**(): `ScrollStrategy`

#### Returns

`ScrollStrategy`

## Methods

### attach()

> `abstract` **attach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts#L23)

Attaches the strategy
```typescript
settings.scrollStrategy.attach();
```

#### Returns

`void`

#### Implementation of

[`IScrollStrategy`](../interfaces/IScrollStrategy.md).[`attach`](../interfaces/IScrollStrategy.md#attach)

***

### detach()

> `abstract` **detach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts#L31)

Detaches the strategy
```typescript
settings.scrollStrategy.detach();
```

#### Returns

`void`

#### Implementation of

[`IScrollStrategy`](../interfaces/IScrollStrategy.md).[`detach`](../interfaces/IScrollStrategy.md#detach)

***

### initialize()

> `abstract` **initialize**(`document`, `overlayService`, `id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/scroll-strategy.ts#L15)

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

`any`

#### Implementation of

[`IScrollStrategy`](../interfaces/IScrollStrategy.md).[`initialize`](../interfaces/IScrollStrategy.md#initialize)
