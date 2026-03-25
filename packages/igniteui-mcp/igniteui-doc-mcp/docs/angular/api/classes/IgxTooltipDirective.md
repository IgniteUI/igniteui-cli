# Class: IgxTooltipDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts#L31)

**Ignite UI for Angular Tooltip** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tooltip)

The Ignite UI for Angular Tooltip directive is used to mark an HTML element in the markup as one that should behave as a tooltip.
The tooltip is used in combination with the Ignite UI for Angular Tooltip Target by assigning the exported tooltip reference to the
respective target's selector property.

Example:
```html
<button type="button" igxButton [igxTooltipTarget]="tooltipRef">Hover me</button>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

## Extends

- [`IgxToggleDirective`](IgxToggleDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxTooltipDirective**(): `IgxTooltipDirective`

#### Returns

`IgxTooltipDirective`

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

### context

> **context**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts#L64)

Gets/sets any tooltip related data.
The 'context' can be used for storing any information that is necessary
to access when working with the tooltip.

```typescript
// get
let tooltipContext = this.tooltip.context;
```

```typescript
// set
this.tooltip.context = "Tooltip's context";
```

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L196)

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`destroy$`](IgxToggleDirective.md#destroy)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts#L76)

Identifier for the tooltip.
If this is property is not explicitly set, it will be automatically generated.

```typescript
let tooltipId = this.tooltip.id;
```

#### Overrides

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

### overlayService

> `protected` **overlayService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L46)

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`overlayService`](IgxToggleDirective.md#overlayservice)

## Accessors

### arrow

#### Get Signature

> **get** **arrow**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts#L101)

Get the arrow element of the tooltip.

```typescript
let tooltipArrow = this.tooltip.arrow;
```

##### Returns

`HTMLElement`

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

***

### role

#### Get Signature

> **get** **role**(): `"tooltip"` \| `"status"`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts#L90)

##### Returns

`"tooltip"` \| `"status"`

#### Set Signature

> **set** **role**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip.directive.ts#L87)

Get the role attribute of the tooltip.

```typescript
let tooltipRole = this.tooltip.role;
```

##### Parameters

###### value

`"tooltip"` \| `"status"`

##### Returns

`void`

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

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`close`](IgxToggleDirective.md#close)

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

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`open`](IgxToggleDirective.md#open)

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

#### Inherited from

[`IgxToggleDirective`](IgxToggleDirective.md).[`toggle`](IgxToggleDirective.md#toggle)
