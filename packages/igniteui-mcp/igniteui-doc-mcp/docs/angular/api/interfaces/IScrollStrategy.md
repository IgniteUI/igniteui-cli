# Interface: IScrollStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts#L6)

[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay-scroll).
Scroll strategies determines how the scrolling will be handled in the provided IgxOverlayService.

## Methods

### attach()

> **attach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts#L26)

Attaches the strategy
```typescript
settings.scrollStrategy.attach();
```

#### Returns

`void`

***

### detach()

> **detach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts#L34)

Detaches the strategy
```typescript
settings.scrollStrategy.detach();
```

#### Returns

`void`

***

### initialize()

> **initialize**(`document`, `overlayService`, `id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/IScrollStrategy.ts#L18)

Initializes the strategy. Should be called once

#### Parameters

##### document

`Document`

reference to Document object.

##### overlayService

[`IgxOverlayService`](../classes/IgxOverlayService.md)

IgxOverlay service to use in this strategy.

##### id

`string`

Unique id for this strategy.
```typescript
settings.scrollStrategy.initialize(document, overlay, id);
```

#### Returns

`any`
