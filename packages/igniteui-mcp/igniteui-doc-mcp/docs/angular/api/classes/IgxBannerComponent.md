# Class: IgxBannerComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L57)

**Ignite UI for Angular Banner** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/banner.html)

The Ignite UI Banner provides a highly template-able and easy to use banner that can be shown in your application.

Usage:

```html
<igx-banner #banner>
  Our privacy settings have changed.
 <igx-banner-actions>
     <button type="button" igxButton="contained">Read More</button>
     <button type="button" igxButton="contained">Accept and Continue</button>
 </igx-banner-actions>
</igx-banner>
```

## Implements

- [`IToggleView`](../interfaces/IToggleView.md)

## Constructors

### Constructor

> **new IgxBannerComponent**(): `IgxBannerComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:248](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L248)

#### Returns

`IgxBannerComponent`

## Properties

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L106)

Fires after the banner hides
```typescript
public handleClosed(event) {
 ...
}
```
```html
<igx-banner (closed)="handleClosed($event)"></igx-banner>
```

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L120)

Fires before the banner hides
```typescript
public handleClosing(event) {
 ...
}
```
```html
<igx-banner (closing)="handleClosing($event)"></igx-banner>
```

***

### cssClass

> **cssClass**: `string` = `'igx-banner-host'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:224](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L224)

***

### elementRef

> **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L58)

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L78)

Fires after the banner shows up
```typescript
public handleOpened(event) {
 ...
}
```
```html
<igx-banner (opened)="handleOpened($event)"></igx-banner>
```

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L92)

Fires before the banner shows up
```typescript
public handleOpening(event) {
 ...
}
```
```html
<igx-banner (opening)="handleOpening($event)"></igx-banner>
```

## Accessors

### animationSettings

#### Get Signature

> **get** **animationSettings**(): `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:146](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L146)

Get the animation settings used by the banner open/close methods
```typescript
let currentAnimations: ToggleAnimationSettings = banner.animationSettings
```

##### Returns

`ToggleAnimationSettings`

#### Set Signature

> **set** **animationSettings**(`settings`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L135)

Set the animation settings used by the banner open/close methods
```typescript
import { slideInLeft, slideOutRight } from 'igniteui-angular';
...
banner.animationSettings: ToggleAnimationSettings = { openAnimation: slideInLeft, closeAnimation: slideOutRight };
```

##### Parameters

###### settings

`ToggleAnimationSettings`

##### Returns

`void`

***

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L209)

Gets whether the banner is collapsed.

```typescript
const isCollapsed: boolean = banner.collapsed;
```

##### Returns

`boolean`

***

### element

#### Get Signature

> **get** **element**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:219](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L219)

Returns the native element of the banner component
```typescript
 const myBannerElement: HTMLElement = banner.element;
```

##### Returns

`any`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`element`](../interfaces/IToggleView.md#element)

***

### expanded

#### Get Signature

> **get** **expanded**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L183)

Gets/Sets whether the banner is expanded (visible) or collapsed (hidden).
Defaults to `false`.
Setting to `true` opens the banner, while `false` closes it.

##### Examples

```ts
// Expand the banner
banner.expanded = true;
```

```ts
// Collapse the banner
banner.expanded = false;
```

```ts
// Check if the banner is expanded
const isExpanded = banner.expanded;
```

##### Returns

`boolean`

#### Set Signature

> **set** **expanded**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L187)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L161)

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L157)

Gets/Sets the resource strings.

##### Remarks

By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

## Methods

### close()

> **close**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:298](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L298)

Closes the banner

```typescript
 myBanner.close();
```

```html
<igx-banner #banner>
...
</igx-banner>
<button type="button" (click)="banner.close()">Close Banner</button>
```

#### Parameters

##### event?

`Event`

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`close`](../interfaces/IToggleView.md#close)

***

### open()

> **open**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:268](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L268)

Opens the banner

```typescript
 myBanner.open();
```

```html
<igx-banner #banner>
...
</igx-banner>
<button type="button" (click)="banner.open()">Open Banner</button>
```

#### Parameters

##### event?

`Event`

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`open`](../interfaces/IToggleView.md#open)

***

### toggle()

> **toggle**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/banner/src/banner/banner.component.ts:328](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/banner/src/banner/banner.component.ts#L328)

Toggles the banner

```typescript
 myBanner.toggle();
```

```html
<igx-banner #banner>
...
</igx-banner>
<button type="button" (click)="banner.toggle()">Toggle Banner</button>
```

#### Parameters

##### event?

`Event`

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`toggle`](../interfaces/IToggleView.md#toggle)
