# Class: IgxOverlayService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L41)

[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay-main)
The overlay service allows users to show components on overlay div above all other elements in the page.

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxOverlayService**(): `IgxOverlayService`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:136](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L136)

#### Returns

`IgxOverlayService`

## Properties

### animationStarting

> **animationStarting**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L116)

Emitted just before the overlay animation start.
```typescript
animationStarting(event: OverlayAnimationEventArgs){
    const animationStarting = event;
}
```

***

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L86)

Emitted after the overlay content is closed and all animations are finished.
```typescript
closed(event: OverlayEventArgs){
    const closed = event;
}
```

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L76)

Emitted just before the overlay content starts to close.
```typescript
closing(event: OverlayCancelableEventArgs){
    const closing = event;
}
```

***

### contentAppended

> **contentAppended**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L106)

Emitted after the content is appended to the overlay, and before animations are started.
```typescript
contentAppended(event: OverlayEventArgs){
    const contentAppended = event;
}
```

***

### contentAppending

> **contentAppending**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L96)

Emitted before the content is appended to the overlay.
```typescript
contentAppending(event: OverlayEventArgs){
    const contentAppending = event;
}
```

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L66)

Emitted after the overlay content is opened and all animations are finished.
```typescript
opened(event: OverlayEventArgs){
    const opened = event;
}
```

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L56)

Emitted just before the overlay content starts to open.
```typescript
opening(event: OverlayCancelableEventArgs){
    const opening = event;
}
```

***

### platformUtil

> `protected` **platformUtil**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L45)

## Methods

### attach()

#### Call Signature

> **attach**(`element`, `settings?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L293)

Generates Id. Provide this Id when call `show(id)` method

##### Parameters

###### element

`ElementRef`

###### settings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

(optional): Display settings for the overlay, such as positioning and scroll/close behavior.

##### Returns

`string`

Id of the created overlay. Valid until `detach` is called.

#### Call Signature

> **attach**(`component`, `settings?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:304](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L304)

Generates Id. Provide this Id when call `show(id)` method

Note created instance is in root scope, prefer the `viewContainerRef` overload when local injection context is needed.

##### Parameters

###### component

`Type`\<`any`\>

Component Type to show in overlay

###### settings?

[`OverlayCreateSettings`](../interfaces/OverlayCreateSettings.md)

(optional): Create settings for the overlay, such as positioning and scroll/close behavior.
Includes also an optional `Injector` to add to the created dynamic component's injectors.

##### Returns

`string`

Id of the created overlay. Valid until `detach` is called.

#### Call Signature

> **attach**(`component`, `viewContainerRef`, `settings?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:313](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L313)

Generates an Id. Provide this Id when calling the `show(id)` method

##### Parameters

###### component

`Type`\<`any`\>

Component Type to show in overlay

###### viewContainerRef

`ViewContainerRef`

Reference to the container where created component's host view will be inserted

###### settings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

(optional): Display settings for the overlay, such as positioning and scroll/close behavior.

##### Returns

`string`

***

### detach()

> **detach**(`id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:361](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L361)

Remove overlay with the provided id.

#### Parameters

##### id

`string`

Id of the overlay to remove
```typescript
this.overlay.detach(id);
```

#### Returns

`void`

***

### detachAll()

> **detachAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:386](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L386)

Remove all the overlays.
```typescript
this.overlay.detachAll();
```

#### Returns

`void`

***

### hide()

> **hide**(`id`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:465](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L465)

Hides the component with the ID provided as a parameter.
```typescript
this.overlay.hide(id);
```

#### Parameters

##### id

`string`

##### event?

`Event`

#### Returns

`void`

***

### hideAll()

> **hideAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:475](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L475)

Hides all the components and the overlay.
```typescript
this.overlay.hideAll();
```

#### Returns

`void`

***

### reposition()

> **reposition**(`id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:489](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L489)

Repositions the component with ID provided as a parameter.

#### Parameters

##### id

`string`

Id to reposition overlay for
```typescript
this.overlay.reposition(id);
```

#### Returns

`void`

***

### setOffset()

> **setOffset**(`id`, `deltaX`, `deltaY`, `offsetMode?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:522](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L522)

Offsets the content along the corresponding axis by the provided amount with optional offsetMode that determines whether to add (by default) or set the offset values

#### Parameters

##### id

`string`

Id to offset overlay for

##### deltaX

`number`

Amount of offset in horizontal direction

##### deltaY

`number`

Amount of offset in vertical direction

##### offsetMode?

[`OffsetMode`](../enumerations/OffsetMode.md)

Determines whether to add (by default) or set the offset values with OffsetMode.Add and OffsetMode.Set
```typescript
this.overlay.setOffset(id, deltaX, deltaY, offsetMode);
```

#### Returns

`void`

***

### show()

> **show**(`id`, `settings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:398](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L398)

Shows the overlay for provided id.

#### Parameters

##### id

`string`

Id to show overlay for

##### settings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

Display settings for the overlay, such as positioning and scroll/close behavior.

#### Returns

`void`

***

### createAbsoluteOverlaySettings()

> `static` **createAbsoluteOverlaySettings**(`position?`, `outlet?`): [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L147)

Creates overlay settings with global or container position strategy and preset position settings

#### Parameters

##### position?

[`AbsolutePosition`](../enumerations/AbsolutePosition.md)

Preset position settings. Default position is 'center'

##### outlet?

`any`

The outlet container to attach the overlay to

#### Returns

[`OverlaySettings`](../interfaces/OverlaySettings.md)

Non-modal overlay settings based on Global or Container position strategy and the provided position.

***

### createRelativeOverlaySettings()

> `static` **createRelativeOverlaySettings**(`target`, `position?`, `strategy?`): [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/overlay.ts:169](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/overlay.ts#L169)

Creates overlay settings with auto, connected or elastic position strategy and preset position settings

#### Parameters

##### target

`HTMLElement` \| [`Point`](Point.md)

Attaching target for the component to show

##### position?

[`RelativePosition`](../enumerations/RelativePosition.md)

Preset position settings. By default the element is positioned below the target, left aligned.

##### strategy?

[`RelativePositionStrategy`](../enumerations/RelativePositionStrategy.md)

The relative position strategy to be applied to the overlay settings. Default is Auto positioning strategy.

#### Returns

[`OverlaySettings`](../interfaces/OverlaySettings.md)

Non-modal overlay settings based on the provided target, strategy and position.
