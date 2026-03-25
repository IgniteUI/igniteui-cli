# Abstract Class: IgxNotificationsDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L7)

Common interface for Components with show and collapse functionality

## Extends

- [`IgxToggleDirective`](IgxToggleDirective.md)

## Extended by

- [`IgxSnackbarComponent`](IgxSnackbarComponent.md)
- [`IgxToastComponent`](IgxToastComponent.md)

## Implements

- [`IToggleView`](../interfaces/IToggleView.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxNotificationsDirective**(): `IgxNotificationsDirective`

#### Returns

`IgxNotificationsDirective`

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`constructor`](IgxToggleDirective.md#constructor)

## Properties

### \_overlayId

> `protected` **\_overlayId**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L193)

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`_overlayId`](IgxToggleDirective.md#_overlayid)

***

### appended

> **appended**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L143)

Emits an event after the toggle element is appended to the overlay container.

```typescript
onAppended() {
 alert("Content appended!");
}
```

```html
<div
  igxToggle
  (appended)='onToggleAppended()'>
</div>
```

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`appended`](IgxToggleDirective.md#appended)

***

### ariaLive

> **ariaLive**: `string` = `'polite'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L15)

Sets/gets the `aria-live` attribute.
If not set, `aria-live` will have value `"polite"`.

***

### autoHide

> **autoHide**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L22)

Sets/gets whether the element will be hidden after the `displayTime` is over.
Default value is `true`.

***

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L105)

Emits an event after the toggle container is closed.

```typescript
onToggleClosed(event) {
 alert("Toggle closed!");
}
```

```html
<div
  igxToggle
  (closed)='onToggleClosed($event)'>
</div>
```

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`closed`](IgxToggleDirective.md#closed)

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L124)

Emits an event before the toggle container is closed.

```typescript
onToggleClosing(event) {
 alert("Toggle closing!");
}
```

```html
<div
 igxToggle
 (closing)='onToggleClosing($event)'>
</div>
```

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`closing`](IgxToggleDirective.md#closing)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L196)

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`destroy$`](IgxToggleDirective.md#destroy)

***

### displayTime

> **displayTime**: `number` = `4000`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L30)

Sets/gets the duration of time span (in milliseconds) which the element will be visible
after it is being shown.
Default value is `4000`.

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:160](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L160)

Identifier which is registered into `IgxNavigationService`

```typescript
let myToggleId = this.toggle.id;
```

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`id`](IgxToggleDirective.md#id)

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L67)

Emits an event after the toggle container is opened.

```typescript
onToggleOpened(event) {
   alert("Toggle opened!");
}
```

```html
<div
  igxToggle
  (opened)='onToggleOpened($event)'>
</div>
```

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`opened`](IgxToggleDirective.md#opened)

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L86)

Emits an event before the toggle container is opened.

```typescript
onToggleOpening(event) {
 alert("Toggle opening!");
}
```

```html
<div
  igxToggle
  (opening)='onToggleOpening($event)'>
</div>
```

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`opening`](IgxToggleDirective.md#opening)

***

### outlet

> **outlet**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L39)

Gets/Sets the container used for the element.

#### Remarks

`outlet` is an instance of `IgxOverlayOutletDirective` or an `ElementRef`.

***

### overlayService

> `protected` **overlayService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L46)

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`overlayService`](IgxToggleDirective.md#overlayservice)

## Accessors

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L46)

Enables/Disables the visibility of the element.
If not set, the `isVisible` attribute will have value `false`.

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L50)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### overlayId

#### Get Signature

> **get** **overlayId**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:303](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L303)

Returns the id of the overlay the content is rendered in.
```typescript
this.myToggle.overlayId;
```

##### Returns

`string`

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`overlayId`](IgxToggleDirective.md#overlayid)

## Methods

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L104)

Hides the element.

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`close`](../interfaces/IToggleView.md#close)

#### Overrides

[`IgxToggleDirective`](IgxToggleDirective.md).[`close`](IgxToggleDirective.md#close)

***

### reposition()

> **reposition**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:313](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L313)

Repositions the toggle.
```typescript
this.myToggle.reposition();
```

#### Returns

`void`

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`reposition`](IgxToggleDirective.md#reposition)

***

### setOffset()

> **setOffset**(`deltaX`, `deltaY`, `offsetMode?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:321](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L321)

Offsets the content along the corresponding axis by the provided amount with optional
offsetMode that determines whether to add (by default) or set the offset values with OffsetMode.Add and OffsetMode.Set

#### Parameters

##### deltaX

`number`

##### deltaY

`number`

##### offsetMode?

[`OffsetMode`](../enumerations/OffsetMode.md)

#### Returns

`void`

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`setOffset`](IgxToggleDirective.md#setoffset)

***

### toggle()

> **toggle**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L281)

Opens or closes the toggle, depending on its current state.

```typescript
this.myToggle.toggle();
```

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`toggle`](../interfaces/IToggleView.md#toggle)

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`toggle`](IgxToggleDirective.md#toggle)
