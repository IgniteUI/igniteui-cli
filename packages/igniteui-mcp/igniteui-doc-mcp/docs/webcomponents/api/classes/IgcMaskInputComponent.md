# Class: IgcMaskInputComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:56](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L56)

A masked input is an input field where a developer can control user input and format the visible value,
based on configurable rules

## Element

igc-mask-input

## Slot

prefix - Renders content before the input

## Slot

suffix - Renders content after the input

## Slot

helper-text - Renders content below the input

## Slot

value-missing - Renders content when the required validation fails.

## Slot

bad-input - Renders content when a required mask pattern validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Fires

igcInput - Emitted when the control receives user input

## Fires

igcChange - Emitted when an alteration of the control's value is committed by the user

## Csspart

container - The main wrapper that holds all main input elements

## Csspart

input - The native input element

## Csspart

label - The native label element

## Csspart

prefix - The prefix wrapper

## Csspart

suffix - The suffix wrapper

## Csspart

helper-text - The helper text wrapper

## Extends

- `IgcMaskInputBaseComponent`

## Properties

### disabled

> **disabled**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:29](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L29)

The disabled state of the component.

#### Attr

#### Default

```ts
false
```

#### Inherited from

`IgcMaskInputBaseComponent.disabled`

***

### invalid

> **invalid**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:36](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L36)

Sets the control into invalid state (visual state only).

#### Attr

#### Default

```ts
false
```

#### Inherited from

`IgcMaskInputBaseComponent.invalid`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L70)

The label for the control.

#### Attr

#### Inherited from

`IgcMaskInputBaseComponent.label`

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`IgcMaskInputBaseComponent.name`

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:56](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L56)

Whether the control will have outlined appearance.

#### Attr

#### Default

```ts
false
```

#### Inherited from

`IgcMaskInputBaseComponent.outlined`

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:63](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L63)

The placeholder attribute of the control.

#### Attr

#### Inherited from

`IgcMaskInputBaseComponent.placeholder`

***

### readOnly

> **readOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input-base.ts:50](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input-base.ts#L50)

Makes the control a readonly field.

#### Attr

readonly

#### Default

```ts
false
```

#### Inherited from

`IgcMaskInputBaseComponent.readOnly`

***

### valueMode

> **valueMode**: `MaskInputValueMode` = `'raw'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:104](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L104)

Dictates the behavior when retrieving the value of the control:

- `raw`: Returns clean input (e.g. "5551234567")
- `withFormatting`: Returns with mask formatting (e.g. "(555) 123-4567")

Empty values always return an empty string, regardless of the value mode.

#### Attr

value-mode

#### Default

```ts
'raw'
```

## Accessors

### defaultValue

#### Set Signature

> **set** **defaultValue**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:156](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L156)

The initial value of the component.

##### Parameters

###### value

`unknown`

##### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.defaultValue`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`IgcMaskInputBaseComponent.form`

***

### mask

#### Get Signature

> **get** **mask**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:145](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L145)

The masked pattern of the component.

##### Attr

##### Default

```ts
'CCCCCCCCCC'
```

##### Returns

`string`

#### Set Signature

> **set** **mask**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:138](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L138)

The masked pattern of the component.

##### Attr

##### Default

```ts
'CCCCCCCCCC'
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

`IgcMaskInputBaseComponent.mask`

***

### prompt

#### Get Signature

> **get** **prompt**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:163](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L163)

The prompt symbol to use for unfilled parts of the mask pattern.

##### Attr

##### Default

```ts
'_'
```

##### Returns

`string`

#### Set Signature

> **set** **prompt**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:156](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L156)

The prompt symbol to use for unfilled parts of the mask pattern.

##### Attr

##### Default

```ts
'_'
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

`IgcMaskInputBaseComponent.prompt`

***

### required

#### Set Signature

> **set** **required**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:174](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L174)

When set, makes the component a required field for validation.

##### Attr

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.required`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`IgcMaskInputBaseComponent.validationMessage`

***

### validity

#### Get Signature

> **get** **validity**(): `ValidityState`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:51](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L51)

Returns a ValidityState object which represents the different validity states
the element can be in, with respect to constraint validation.

##### Returns

`ValidityState`

#### Inherited from

`IgcMaskInputBaseComponent.validity`

***

### value

#### Get Signature

> **get** **value**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:122](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L122)

The value attribute of the control.
Type varies based on the input type and can be string, Date or null.

##### Returns

`string`

#### Set Signature

> **set** **value**(`string`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:115](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L115)

The value of the input.

Regardless of the currently set `value-mode`, an empty value will return an empty string.

##### Attr

##### Parameters

###### string

`string`

##### Returns

`void`

#### Overrides

`IgcMaskInputBaseComponent.value`

***

### willValidate

#### Get Signature

> **get** **willValidate**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:60](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L60)

A boolean value which returns true if the element is a submittable element
that is a candidate for constraint validation.

##### Returns

`boolean`

#### Inherited from

`IgcMaskInputBaseComponent.willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L102)

Removes focus from the control.

#### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`IgcMaskInputBaseComponent.checkValidity`

***

### focus()

> **focus**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:96](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L96)

Sets focus on the control.

#### Parameters

##### options?

`FocusOptions`

#### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.focus`

***

### isValidMaskPattern()

> **isValidMaskPattern**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input.ts:256](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input.ts#L256)

Returns whether the current masked input is valid according to the mask pattern.

#### Returns

`boolean`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`IgcMaskInputBaseComponent.reportValidity`

***

### select()

> **select**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:90](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L90)

Selects all the text inside the input.

#### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.select`

***

### setCustomValidity()

> **setCustomValidity**(`message`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:149](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L149)

Sets a custom validation message for the control.
As long as `message` is not empty, the control is considered invalid.

#### Parameters

##### message

`string`

#### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.setCustomValidity`

***

### setRangeText()

> **setRangeText**(`replacement`, `start?`, `end?`, `selectMode?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input-base.ts:198](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input-base.ts#L198)

Replaces the selected text in the control and re-applies the mask

#### Parameters

##### replacement

`string`

##### start?

`number`

##### end?

`number`

##### selectMode?

`RangeTextSelectMode`

#### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.setRangeText`

***

### setSelectionRange()

> **setSelectionRange**(`start?`, `end?`, `direction?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input-base.ts:187](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input-base.ts#L187)

Sets the text selection range of the control

#### Parameters

##### start?

`number`

##### end?

`number`

##### direction?

`SelectionRangeDirection` = `'none'`

#### Returns

`void`

#### Inherited from

`IgcMaskInputBaseComponent.setSelectionRange`
