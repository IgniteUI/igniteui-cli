# Class: IgcTooltipComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:55](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L55)

Provides a way to display supplementary information related to an element when a user interacts with it (e.g., hover, focus).
It offers features such as placement customization, delays, sticky mode, and animations.

## Element

igc-tooltip

## Slot

- Default slot of the tooltip component.

## Slot

close-button - Slot for custom sticky-mode close action (e.g., an icon/button).

## Csspart

base - The wrapping container of the tooltip content.

## Csspart

simple-text - The container where the message property of the tooltip is rendered.

## Fires

igcOpening - Emitted before the tooltip begins to open. Can be canceled to prevent opening.

## Fires

igcOpened - Emitted after the tooltip has successfully opened and is visible.

## Fires

igcClosing - Emitted before the tooltip begins to close. Can be canceled to prevent closing.

## Fires

igcClosed - Emitted after the tooltip has been fully removed from view.

## Extends

- `EventEmitterInterface`\<`IgcTooltipComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### anchor?

> `optional` **anchor?**: `string` \| `Element`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:188](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L188)

An element instance or an IDREF to use as the anchor for the tooltip.

#### Remarks

Trying to bind to an IDREF that does not exist in the current DOM root at will not work.
In such scenarios, it is better to get a DOM reference and pass it to the tooltip instance.

#### Attr

anchor

***

### message

> **message**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:258](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L258)

Specifies a plain text as tooltip content.

#### Attr

message

***

### offset

> **offset**: `number` = `6`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:167](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L167)

The offset of the tooltip from the anchor in pixels.

#### Attr

offset

#### Default

```ts
6
```

***

### placement

> **placement**: [`PopoverPlacement`](../type-aliases/PopoverPlacement.md) = `'bottom'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:176](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L176)

Where to place the floating element relative to the parent anchor element.

#### Attr

placement

#### Default

```ts
bottom
```

***

### sticky

> **sticky**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:267](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L267)

Specifies if the tooltip remains visible until the user closes it via the close button or Esc key.

#### Attr

sticky

#### Default

```ts
false
```

***

### withArrow

> **withArrow**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:158](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L158)

Whether to render an arrow indicator for the tooltip.

#### Attr

with-arrow

#### Default

```ts
false
```

***

### tagName

> `readonly` `static` **tagName**: `"igc-tooltip"` = `'igc-tooltip'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:59](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L59)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### hideDelay

#### Set Signature

> **set** **hideDelay**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:244](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L244)

Specifies the number of milliseconds that should pass before hiding the tooltip.

##### Attr

hide-delay

##### Default

```ts
300
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### hideTriggers

#### Set Signature

> **set** **hideTriggers**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:214](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L214)

Which event triggers will hide the tooltip.
Expects a comma separate string of different event triggers.

##### Attr

hide-triggers

##### Default

```ts
pointerleave, click
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### open

#### Set Signature

> **set** **open**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L143)

Whether the tooltip is showing.

##### Attr

open

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### showDelay

#### Set Signature

> **set** **showDelay**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:229](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L229)

Specifies the number of milliseconds that should pass before showing the tooltip.

##### Attr

show-delay

##### Default

```ts
200
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### showTriggers

#### Set Signature

> **set** **showTriggers**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:198](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L198)

Which event triggers will show the tooltip.
Expects a comma separate string of different event triggers.

##### Attr

show-triggers

##### Default

```ts
pointerenter
```

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:364](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L364)

Hides the tooltip if not already hidden.

#### Returns

`Promise`\<`boolean`\>

***

### show()

> **show**(`target?`): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:354](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L354)

Shows the tooltip if not already showing.
 If a target is provided, sets it as a transient anchor.

#### Parameters

##### target?

`string` \| `Element`

#### Returns

`Promise`\<`boolean`\>

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/tooltip/tooltip.ts:369](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tooltip/tooltip.ts#L369)

Toggles the tooltip between shown/hidden state

#### Returns

`Promise`\<`boolean`\>
