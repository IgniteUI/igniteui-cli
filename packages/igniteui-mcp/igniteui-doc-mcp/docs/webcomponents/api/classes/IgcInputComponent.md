# Class: IgcInputComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:66](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L66)

## Element

igc-input

## Slot

prefix - Renders content before the input.

## Slot

suffix - Renders content after input.

## Slot

helper-text - Renders content below the input.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

type-mismatch - Renders content when the a type url/email input pattern validation fails.

## Slot

pattern-mismatch - Renders content when the pattern validation fails.

## Slot

too-long - Renders content when the maxlength validation fails.

## Slot

too-short - Renders content when the minlength validation fails.

## Slot

range-overflow - Renders content when the max validation fails.

## Slot

range-underflow - Renders content when the min validation fails.

## Slot

step-mismatch - Renders content when the step validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Fires

igcInput - Emitted when the control input receives user input.

## Fires

igcChange - Emitted when the control's checked state changes.

## Csspart

container - The main wrapper that holds all main input elements.

## Csspart

input - The native input element.

## Csspart

label - The native label element.

## Csspart

prefix - The prefix wrapper.

## Csspart

suffix - The suffix wrapper.

## Csspart

helper-text - The helper text wrapper.

## Extends

- `IgcInputBaseComponent`

## Properties

### autocomplete

> **autocomplete**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:231](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L231)

The autocomplete attribute of the control.

#### Attr

***

### autofocus

> **autofocus**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:224](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L224)

The autofocus attribute of the control.

#### Attr

#### Overrides

`IgcInputBaseComponent.autofocus`

***

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

`IgcInputBaseComponent.disabled`

***

### inputMode

> **inputMode**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:133](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L133)

The input mode attribute of the control.
See [relevant MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)

#### Attr

inputmode

#### Overrides

`IgcInputBaseComponent.inputMode`

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

`IgcInputBaseComponent.invalid`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L70)

The label for the control.

#### Attr

#### Inherited from

`IgcInputBaseComponent.label`

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`IgcInputBaseComponent.name`

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

`IgcInputBaseComponent.outlined`

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:63](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L63)

The placeholder attribute of the control.

#### Attr

#### Inherited from

`IgcInputBaseComponent.placeholder`

***

### readOnly

> **readOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:125](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L125)

Makes the control a readonly field.

#### Attr

readonly

#### Default

```ts
false
```

***

### type

> **type**: `InputType` = `'text'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:116](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L116)

The type attribute of the control.

#### Attr

***

### validateOnly

> **validateOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:241](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L241)

Enables validation rules to be evaluated without restricting user input. This applies to the `maxLength` property for
string-type inputs or allows spin buttons to exceed the predefined `min/max` limits for number-type inputs.

#### Attr

validate-only

#### Default

```ts
false
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

`IgcInputBaseComponent.defaultValue`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`IgcInputBaseComponent.form`

***

### max

#### Set Signature

> **set** **max**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:196](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L196)

The max attribute of the control.

##### Attr

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### maxLength

#### Set Signature

> **set** **maxLength**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:168](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L168)

The maximum string length of the control.

##### Attr

maxlength

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### min

#### Set Signature

> **set** **min**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:182](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L182)

The min attribute of the control.

##### Attr

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### minLength

#### Set Signature

> **set** **minLength**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:154](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L154)

The minimum string length required by the control.

##### Attr

minlength

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### pattern

#### Set Signature

> **set** **pattern**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L140)

The pattern attribute of the control.

##### Attr

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

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

`IgcInputBaseComponent.required`

***

### step

#### Set Signature

> **set** **step**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:210](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L210)

The step attribute of the control.

##### Attr

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`IgcInputBaseComponent.validationMessage`

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

`IgcInputBaseComponent.validity`

***

### value

#### Get Signature

> **get** **value**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:106](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L106)

The value attribute of the control.
Type varies based on the input type and can be string, Date or null.

##### Returns

`string`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L102)

The value of the control.

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

`IgcInputBaseComponent.value`

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

`IgcInputBaseComponent.willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L102)

Removes focus from the control.

#### Returns

`void`

#### Inherited from

`IgcInputBaseComponent.blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`IgcInputBaseComponent.checkValidity`

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

`IgcInputBaseComponent.focus`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`IgcInputBaseComponent.reportValidity`

***

### select()

> **select**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:90](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L90)

Selects all the text inside the input.

#### Returns

`void`

#### Inherited from

`IgcInputBaseComponent.select`

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

`IgcInputBaseComponent.setCustomValidity`

***

### setRangeText()

> **setRangeText**(`replacement`, `start?`, `end?`, `selectMode?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:245](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L245)

Replaces the selected text in the input.

#### Parameters

##### replacement

`string`

##### start?

`number`

##### end?

`number`

##### selectMode?

`RangeTextSelectMode` = `'preserve'`

#### Returns

`void`

***

### setSelectionRange()

> **setSelectionRange**(`start?`, `end?`, `direction?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:257](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L257)

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

***

### stepDown()

> **stepDown**(`n?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:272](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L272)

Decrements the numeric value of the input by one or more steps.

#### Parameters

##### n?

`number`

#### Returns

`void`

***

### stepUp()

> **stepUp**(`n?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input.ts:266](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input.ts#L266)

Increments the numeric value of the input by one or more steps.

#### Parameters

##### n?

`number`

#### Returns

`void`
