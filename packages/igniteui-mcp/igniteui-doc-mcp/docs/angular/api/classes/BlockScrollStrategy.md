# Class: BlockScrollStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts#L6)

Prevents scrolling while the overlay content is shown.

## Extends

- [`ScrollStrategy`](ScrollStrategy.md)

## Constructors

### Constructor

> **new BlockScrollStrategy**(): `BlockScrollStrategy`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts#L13)

#### Returns

`BlockScrollStrategy`

#### Overrides

[`ScrollStrategy`](ScrollStrategy.md).[`constructor`](ScrollStrategy.md#constructor)

## Methods

### attach()

> **attach**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts#L36)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts#L46)

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

> **initialize**(`document`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/scroll/block-scroll-strategy.ts#L21)

Initializes the strategy. Should be called once

#### Parameters

##### document

`Document`

#### Returns

`void`

#### Overrides

[`ScrollStrategy`](ScrollStrategy.md).[`initialize`](ScrollStrategy.md#initialize)
