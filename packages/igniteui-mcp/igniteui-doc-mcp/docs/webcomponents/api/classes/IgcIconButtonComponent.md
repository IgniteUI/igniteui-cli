# Class: IgcIconButtonComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/icon-button.ts:25](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/icon-button.ts#L25)

## Element

igc-icon-button

## Csspart

base - The wrapping element of the icon button.

## Csspart

icon - The icon element of the icon button.

## Extends

- `IgcButtonBaseComponent`

## Properties

### collection?

> `optional` **collection?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/icon-button.ts:47](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/icon-button.ts#L47)

The name of the icon collection.

#### Attr

***

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

### mirrored

> **mirrored**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/icon-button.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/icon-button.ts#L54)

Whether to flip the icon button. Useful for RTL layouts.

#### Attr

***

### name?

> `optional` **name?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/icon-button.ts:40](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/icon-button.ts#L40)

The name of the icon.

#### Attr

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

`IgcButtonBaseComponent.target`

***

### type

> **type**: `"reset"` \| `"submit"` \| `"button"` = `'button'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/button-base.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/button-base.ts#L42)

The type of the button. Defaults to `button`.

#### Attr

#### Inherited from

`IgcButtonBaseComponent.type`

***

### variant

> **variant**: `IconButtonVariant` = `'contained'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button/icon-button.ts:61](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button/icon-button.ts#L61)

The visual variant of the icon button.

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
