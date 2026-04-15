# Class: IgxSnackbarComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L39)

**Ignite UI for Angular Snackbar** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar.html)

The Ignite UI Snack Bar provides feedback about an operation with a single-line message, which can
include a link to an action such as Undo.

Example:
```html
<button type="button" igxButton (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar>
     Message sent
  </igx-snackbar>
</div>
```

## Extends

- [`IgxNotificationsDirective`](IgxNotificationsDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxSnackbarComponent**(): `IgxSnackbarComponent`

#### Returns

`IgxSnackbarComponent`

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`constructor`](IgxNotificationsDirective.md#constructor)

## Properties

### \_overlayId

> `protected` **\_overlayId**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L193)

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`_overlayId`](IgxNotificationsDirective.md#_overlayid)

***

### actionText?

> `optional` **actionText?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L72)

Sets/gets the `actionText` attribute.
```html
<igx-snackbar [actionText] = "'Action Text'"></igx-snackbar>
```

***

### animationDone

> **animationDone**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L100)

An event that will be emitted when the snackbar animation ends.
Provides reference to the `ToggleViewEventArgs` interface as an argument.
```html
<igx-snackbar (animationDone) = "animationDone($event)"></igx-snackbar>
```

***

### animationStarted

> **animationStarted**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L91)

An event that will be emitted when the snackbar animation starts.
Provides reference to the `ToggleViewEventArgs` interface as an argument.
```html
<igx-snackbar (animationStarted) = "animationStarted($event)"></igx-snackbar>
```

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

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`appended`](IgxNotificationsDirective.md#appended)

***

### ariaLive

> **ariaLive**: `string` = `'polite'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L15)

Sets/gets the `aria-live` attribute.
If not set, `aria-live` will have value `"polite"`.

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`ariaLive`](IgxNotificationsDirective.md#arialive)

***

### autoHide

> **autoHide**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L22)

Sets/gets whether the element will be hidden after the `displayTime` is over.
Default value is `true`.

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`autoHide`](IgxNotificationsDirective.md#autohide)

***

### clicked

> **clicked**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L82)

An event that will be emitted when the action button is clicked.
Provides reference to the `IgxSnackbarComponent` as an argument.
```html
<igx-snackbar (clicked)="clickedHandler($event)"></igx-snackbar>
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

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`closed`](IgxNotificationsDirective.md#closed)

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

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`closing`](IgxNotificationsDirective.md#closing)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L196)

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`destroy$`](IgxNotificationsDirective.md#destroy)

***

### displayTime

> **displayTime**: `number` = `4000`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L30)

Sets/gets the duration of time span (in milliseconds) which the element will be visible
after it is being shown.
Default value is `4000`.

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`displayTime`](IgxNotificationsDirective.md#displaytime)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L55)

Sets/gets the `id` of the snackbar.
If not set, the `id` of the first snackbar component  will be `"igx-snackbar-0"`;
```html
<igx-snackbar id = "Snackbar1"></igx-snackbar>
```
```typescript
let snackbarId = this.snackbar.id;
```

#### Memberof

IgxSnackbarComponent

#### Overrides

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`id`](IgxNotificationsDirective.md#id)

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

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`opened`](IgxNotificationsDirective.md#opened)

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

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`opening`](IgxNotificationsDirective.md#opening)

***

### outlet

> **outlet**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L39)

Gets/Sets the container used for the element.

#### Remarks

`outlet` is an instance of `IgxOverlayOutletDirective` or an `ElementRef`.

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`outlet`](IgxNotificationsDirective.md#outlet)

***

### overlayService

> `protected` **overlayService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L46)

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`overlayService`](IgxNotificationsDirective.md#overlayservice)

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

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`isVisible`](IgxNotificationsDirective.md#isvisible)

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

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`overlayId`](IgxNotificationsDirective.md#overlayid)

***

### positionSettings

#### Get Signature

> **get** **positionSettings**(): [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:110](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L110)

Get the position and animation settings used by the snackbar.
```typescript
@ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
let currentPosition: PositionSettings = this.snackbar.positionSettings
```

##### Returns

[`PositionSettings`](../interfaces/PositionSettings.md)

#### Set Signature

> **set** **positionSettings**(`settings`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L135)

Set the position and animation settings used by the snackbar.
```html
<igx-snackbar [positionSettings]="newPositionSettings"></igx-snackbar>
```
```typescript
import { slideInTop, slideOutBottom } from 'igniteui-angular';
...
@ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
 public newPositionSettings: PositionSettings = {
     openAnimation: useAnimation(slideInTop, { params: { duration: '1000ms', fromPosition: 'translateY(100%)'}}),
     closeAnimation: useAnimation(slideOutBottom, { params: { duration: '1000ms', fromPosition: 'translateY(0)'}}),
     horizontalDirection: HorizontalAlignment.Left,
     verticalDirection: VerticalAlignment.Middle,
     horizontalStartPoint: HorizontalAlignment.Left,
     verticalStartPoint: VerticalAlignment.Middle,
     minSize: { height: 100, width: 100 }
 };
this.snackbar.positionSettings = this.newPositionSettings;
```

##### Parameters

###### settings

[`PositionSettings`](../interfaces/PositionSettings.md)

##### Returns

`void`

## Methods

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/notification/notifications.directive.ts#L104)

Hides the element.

#### Returns

`void`

#### Inherited from

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`close`](IgxNotificationsDirective.md#close)

***

### open()

> **open**(`message?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L154)

Shows the snackbar and hides it after the `displayTime` is over if `autoHide` is set to `true`.
```typescript
this.snackbar.open();
```

#### Parameters

##### message?

`string`

#### Returns

`void`

#### Overrides

`IgxNotificationsDirective.open`

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

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`reposition`](IgxNotificationsDirective.md#reposition)

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

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`setOffset`](IgxNotificationsDirective.md#setoffset)

***

### toggle()

> **toggle**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/snackbar/src/snackbar/snackbar.component.ts#L171)

Opens or closes the snackbar, depending on its current state.

```typescript
this.snackbar.toggle();
```

#### Returns

`void`

#### Overrides

[`IgxNotificationsDirective`](IgxNotificationsDirective.md).[`toggle`](IgxNotificationsDirective.md#toggle)
