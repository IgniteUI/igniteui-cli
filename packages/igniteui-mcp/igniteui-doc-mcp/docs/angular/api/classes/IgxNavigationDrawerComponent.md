# Class: IgxNavigationDrawerComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L44)

**Ignite UI for Angular Navigation Drawer** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navdrawer)

The Ignite UI Navigation Drawer is a collapsible side navigation container commonly used in combination with the Navbar.

Example:
```html
<igx-nav-drawer id="navigation" [isOpen]="true">
  <ng-template igxDrawer>
    <nav>
      <span igxDrawerItem [isHeader]="true">Email</span>
      <span igxDrawerItem igxRipple>Inbox</span>
      <span igxDrawerItem igxRipple>Deleted</span>
      <span igxDrawerItem igxRipple>Sent</span>
    </nav>
  </ng-template>
</igx-nav-drawer>
```

## Implements

- [`IToggleView`](../interfaces/IToggleView.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxNavigationDrawerComponent**(): `IgxNavigationDrawerComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:454](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L454)

#### Returns

`IgxNavigationDrawerComponent`

## Properties

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:247](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L247)

Event fired when the Navigation Drawer has closed.

```html
<igx-nav-drawer (closed)='onClosed()'></igx-nav-drawer>
```

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:239](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L239)

Event fired as the Navigation Drawer is about to close.

```html
<igx-nav-drawer (closing)='onClosing()'></igx-nav-drawer>
```

***

### disableAnimation

> **disableAnimation**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:191](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L191)

Enables/disables the animation, when toggling the drawer. Set to `false` by default.
````html
<igx-nav-drawer [disableAnimation]="true"></igx-nav-drawer>
````

***

### enableGestures

> **enableGestures**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L114)

Enables the use of touch gestures to manipulate the drawer:
- swipe/pan from edge to open, swipe-toggle and pan-drag.

```typescript
// get
let gesturesEnabled = this.navdrawer.enableGestures;
```

```html
<!--set-->
<igx-nav-drawer [enableGestures]='true'></igx-nav-drawer>
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:83](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L83)

ID of the component

```typescript
// get
let myNavDrawerId = this.navdrawer.id;
```

```html
<!--set-->
 <igx-nav-drawer id='navdrawer'></igx-nav-drawer>
```

***

### miniWidth

> **miniWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L206)

Width of the drawer in its mini state.

```typescript
// get
let navDrawerMiniWidth = this.navdrawer.miniWidth;
```

```html
<!--set-->
<igx-nav-drawer [miniWidth]="'34px'"></igx-nav-drawer>
```

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:231](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L231)

Event fired when the Navigation Drawer has opened.

```html
<igx-nav-drawer (opened)='onOpened()'></igx-nav-drawer>
```

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:223](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L223)

Event fired as the Navigation Drawer is about to open.

```html
 <igx-nav-drawer (opening)='onOpening()'></igx-nav-drawer>
```

***

### pinChange

> **pinChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:215](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L215)

Pinned state change output for two-way binding.

```html
<igx-nav-drawer [(pin)]='isPinned'></igx-nav-drawer>
```

***

### pinThreshold

> **pinThreshold**: `number` = `1024`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L135)

Minimum device width required for automatic pin to be toggled.
Default is 1024, can be set to a falsy value to disable this behavior.

```typescript
// get
let navDrawerPinThreshold = this.navdrawer.pinThreshold;
```

```html
<!--set-->
<igx-nav-drawer [pinThreshold]='1024'></igx-nav-drawer>
```

***

### position

> **position**: `string` = `'left'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L98)

Position of the Navigation Drawer. Can be "left"(default) or "right".

```typescript
// get
let myNavDrawerPosition = this.navdrawer.position;
```

```html
<!--set-->
<igx-nav-drawer [position]="'left'"></igx-nav-drawer>
```

## Accessors

### isOpen

#### Get Signature

> **get** **isOpen**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:279](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L279)

State of the drawer.

```typescript
// get
let navDrawerIsOpen = this.navdrawer.isOpen;
```

```html
<!--set-->
<igx-nav-drawer [isOpen]='false'></igx-nav-drawer>
```

Two-way data binding.
```html
<!--set-->
<igx-nav-drawer [(isOpen)]='model.isOpen'></igx-nav-drawer>
```

##### Returns

`any`

#### Set Signature

> **set** **isOpen**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:282](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L282)

##### Parameters

###### value

`any`

##### Returns

`void`

***

### pin

#### Get Signature

> **get** **pin**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L152)

When pinned the drawer is relatively positioned instead of sitting above content.
May require additional layout styling.

```typescript
// get
let navDrawerIsPinned = this.navdrawer.pin;
```

```html
<!--set-->
<igx-nav-drawer [pin]="false"></igx-nav-drawer>
```

##### Returns

`boolean`

#### Set Signature

> **set** **pin**(`v`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:155](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L155)

##### Parameters

###### v

`boolean`

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L176)

##### Returns

`string`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:179](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L179)

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:582](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L582)

Close the Navigation Drawer. Has no effect if already closed.

```typescript
this.navdrawer.close();
```

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`close`](../interfaces/IToggleView.md#close)

***

### open()

> **open**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:551](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L551)

Open the Navigation Drawer. Has no effect if already opened.

```typescript
this.navdrawer.open();
```

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`open`](../interfaces/IToggleView.md#open)

***

### toggle()

> **toggle**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts:536](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.component.ts#L536)

Toggle the open state of the Navigation Drawer.

```typescript
this.navdrawer.toggle();
```

#### Returns

`void`

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`toggle`](../interfaces/IToggleView.md#toggle)
