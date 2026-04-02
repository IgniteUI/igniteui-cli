# Class: IgcChipComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:44](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L44)

Chips help people enter information, make selections, filter content, or trigger actions.

## Element

igc-chip

## Slot

- Renders content in the default slot of the chip.

## Slot

prefix - Renders content at the start of the chip, before the default content.

## Slot

suffix - Renders content at the end of the chip after the default content.

## Slot

select - Content to render when the chip in selected state.

## Slot

remove - Content to override the default remove chip icon.

## Fires

igcRemove - Emits an event when the chip component is removed. Returns the removed chip component.

## Fires

igcSelect - Emits event when the chip component is selected/deselected and any related animations and transitions also end.

## Csspart

base - The base wrapper of the chip.

## Csspart

prefix - The prefix container of the chip.

## Csspart

suffix - The suffix container of the chip.

## Extends

- `EventEmitterInterface`\<`IgcChipComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:67](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L67)

Sets the disabled state for the chip.

#### Attr

***

### removable

> **removable**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:74](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L74)

Defines if the chip is removable or not.

#### Attr

***

### selectable

> **selectable**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:81](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L81)

Defines if the chip is selectable or not.

#### Attr

***

### selected

> **selected**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:89](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L89)

Defines if the chip is selected or not.

#### Attr

***

### variant

> **variant**: `StyleVariant`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:96](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L96)

A property that sets the color variant of the chip component.

#### Attr

***

### tagName

> `readonly` `static` **tagName**: `"igc-chip"` = `'igc-chip'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:48](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L48)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:103](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L103)

Gets/Sets the locale used for getting language, affecting resource strings.

##### Attr

locale

##### Parameters

###### value

`string`

##### Returns

`void`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chip/chip.ts:116](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chip/chip.ts#L116)

The resource strings for localization.
Currently only aria-labels for the default select/remove icons are localized.

##### Parameters

###### value

`IChipResourceStrings`

##### Returns

`void`
