# Class: IgcButtonComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button.ts:26](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button.ts#L26)

Represents a clickable button, used to submit forms or anywhere in a
document for accessible, standard button functionality.

## Element

igc-button

## Slot

- Renders the label of the button.

## Slot

prefix - Renders content before the label of the button.

## Slot

suffix - Renders content after the label of the button.

## Csspart

base - The native button element of the igc-button component.

## Csspart

prefix - The prefix container of the igc-button component.

## Csspart

suffix - The suffix container of the igc-button component.

## Extends

- `IgcButtonBaseComponent`

## Properties

### download?

> `optional` **download?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:56](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L56)

Prompts to save the linked URL instead of navigating to it.

#### Attr

#### Inherited from

`IgcButtonBaseComponent.download`

***

### href?

> `optional` **href?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:49](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L49)

The URL the button points to.

#### Attr

#### Inherited from

`IgcButtonBaseComponent.href`

***

### rel?

> `optional` **rel?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:71](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L71)

The relationship of the linked URL.
See https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types

#### Attr

#### Inherited from

`IgcButtonBaseComponent.rel`

***

### target?

> `optional` **target?**: `"_blank"` \| `"_parent"` \| `"_self"` \| `"_top"`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:63](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L63)

Where to display the linked URL, as the name for a browsing context.

#### Attr

#### Inherited from

[`IgcIconButtonComponent`](IgcIconButtonComponent.md).[`target`](IgcIconButtonComponent.md#target)

***

### type

> **type**: `"reset"` \| `"submit"` \| `"button"` = `'button'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L42)

The type of the button. Defaults to `button`.

#### Attr

#### Inherited from

[`IgcIconButtonComponent`](IgcIconButtonComponent.md).[`type`](IgcIconButtonComponent.md#type)

***

### variant

> **variant**: `ButtonVariant` = `'contained'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button.ts:40](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button.ts#L40)

Sets the variant of the button.

#### Attr

## Accessors

### disabled

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:78](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L78)

The disabled state of the component

##### Attr

[disabled=false]

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`IgcButtonBaseComponent.disabled`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:90](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L90)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`IgcButtonBaseComponent.form`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:107](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L107)

Removes focus from the button.

#### Returns

`void`

#### Inherited from

`IgcButtonBaseComponent.blur`

***

### click()

> **click**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:101](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L101)

Simulates a mouse click on the element

#### Returns

`void`

#### Inherited from

`IgcButtonBaseComponent.click`

***

### focus()

> **focus**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:96](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L96)

Sets focus in the button.

#### Parameters

##### options?

`FocusOptions`

#### Returns

`void`

#### Inherited from

`IgcButtonBaseComponent.focus`
