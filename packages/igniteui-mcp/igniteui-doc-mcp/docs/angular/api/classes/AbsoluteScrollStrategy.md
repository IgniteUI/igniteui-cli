# Class: AbsoluteScrollStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts#L8)

On scroll reposition the overlay content.

## Extends

- [`ScrollStrategy`](ScrollStrategy.md)

## Constructors

### Constructor

> **new AbsoluteScrollStrategy**(`scrollContainer?`): `AbsoluteScrollStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts#L16)

#### Parameters

##### scrollContainer?

`HTMLElement`

#### Returns

`AbsoluteScrollStrategy`

#### Overrides

[`ScrollStrategy`](ScrollStrategy.md).[`constructor`](ScrollStrategy.md#constructor)

## Methods

### attach()

> **attach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts#L48)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts#L64)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/absolute-scroll-strategy.ts#L31)

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
