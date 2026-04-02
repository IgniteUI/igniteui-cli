# Class: IgxToggleDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L43)

Common interface for Components with show and collapse functionality

## Extended by

- [`IgxTooltipDirective`](IgxTooltipDirective.md)
- [`IgxNotificationsDirective`](IgxNotificationsDirective.md)

## Implements

- [`IToggleView`](../interfaces/IToggleView.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxToggleDirective**(): `IgxToggleDirective`

#### Returns

`IgxToggleDirective`

## Properties

### \_overlayId

> `protected` **\_overlayId**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L193)

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

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L196)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:160](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L160)

Identifier which is registered into `IgxNavigationService`

```typescript
let myToggleId = this.toggle.id;
```

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

***

### overlayService

> `protected` **overlayService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L46)

## Accessors

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

## Methods

### close()

> **close**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:262](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L262)

Closes the toggle.

```typescript
this.myToggle.close();
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

> **open**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L213)

Opens the toggle.

```typescript
this.myToggle.open();
```

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`open`](../interfaces/IToggleView.md#open)

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
