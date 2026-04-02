# Class: IgcTextareaComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:90](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L90)

This element represents a multi-line plain-text editing control,
useful when you want to allow users to enter a sizeable amount of free-form text,
for example a comment on a review or feedback form.

## Element

igc-textarea

## Slot

- Text content from the default slot will be used as the value of the component.

## Slot

prefix - Renders content before the input.

## Slot

suffix - Renders content after input.

## Slot

helper-text - Renders content below the input.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

too-long - Renders content when the maxlength validation fails.

## Slot

too-short - Renders content when the minlength validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Fires

igcInput - Emitted when the control receives user input.

## Fires

igcChange - Emitted when the a change to the control value is committed by the user.

## Csspart

container - The main wrapper that holds all main input elements of the textarea.

## Csspart

input - The native input element of the igc-textarea.

## Csspart

label - The native label element of the igc-textarea.

## Csspart

prefix - The prefix wrapper of the igc-textarea.

## Csspart

suffix - The suffix wrapper of the igc-textarea.

## Csspart

helper-text - The helper text wrapper of the igc-textarea.

## Extends

- `FormRequiredInterface`\<`this`\> & `FormAssociatedElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcTextareaComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### autocapitalize

> **autocapitalize**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:147](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L147)

Controls whether and how text input is automatically capitalized as it is entered/edited by the user.

[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize).

#### Attr

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).autocapitalize`

***

### autocomplete

> **autocomplete**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:137](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L137)

Specifies what if any permission the browser has to provide for automated assistance in filling out form field values,
as well as guidance to the browser as to the type of information expected in the field.
Refer to [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for additional information.

#### Attr

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).disabled`

***

### inputMode

> **inputMode**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:158](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L158)

Hints at the type of data that might be entered by the user while editing the element or its contents.
This allows a browser to display an appropriate virtual keyboard.

[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)

#### Attr

inputmode

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).inputMode`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).invalid`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:166](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L166)

The label for the control.

#### Attr

***

### maxLength

> **maxLength**: `number`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:175](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L175)

The maximum number of characters (UTF-16 code units) that the user can enter.
If this value isn't specified, the user can enter an unlimited number of characters.

#### Attr

maxlength

***

### minLength

> **minLength**: `number`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:183](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L183)

The minimum number of characters (UTF-16 code units) required that the user should enter.

#### Attr

minlength

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).name`

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:190](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L190)

Whether the control will have outlined appearance.

#### Attr

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:198](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L198)

The placeholder attribute of the control.

#### Attr

***

### readOnly

> **readOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:206](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L206)

Makes the control a readonly field.

#### Attr

readonly

***

### resize

> **resize**: `TextareaResize` = `'vertical'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:215](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L215)

Controls whether the control can be resized.
When `auto` is set, the control will try to expand and fit its content.

#### Attr

***

### rows

> **rows**: `number` = `3`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:224](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L224)

The number of visible text lines for the control. If it is specified, it must be a positive integer.
If it is not specified, the default value is 3.

#### Attr

***

### spellcheck

> **spellcheck**: `boolean` = `true`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:253](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L253)

Controls whether the element may be checked for spelling errors.

#### Attr

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).spellcheck`

***

### validateOnly

> **validateOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:272](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L272)

Enables validation rules to be evaluated without restricting user input. This applies to the `maxLength` property
when it is defined.

#### Attr

validate-only

***

### wrap

> **wrap**: `"off"` \| `"hard"` \| `"soft"` = `'soft'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:263](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L263)

Indicates how the control should wrap the value for form submission.
Refer to [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes)
for explanation of the available values.

#### Attr

***

### tagName

> `readonly` `static` **tagName**: `"igc-textarea"` = `'igc-textarea'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:95](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L95)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).defaultValue`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).form`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).required`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).validationMessage`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).validity`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:233](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L233)

The value of the component

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).willValidate`

## Methods

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).checkValidity`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).reportValidity`

***

### scrollTo()

> **scrollTo**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:393](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L393)

The **`scrollTo()`** method of the Element interface scrolls to a particular set of coordinates inside a given element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTo)

#### Parameters

##### options?

`ScrollToOptions`

#### Returns

`void`

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).scrollTo`

***

### select()

> **select**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:366](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L366)

Selects all text within the control.

#### Returns

`void`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcTextareaComponentEventMap, Constructor<LitElement>>( LitElement ) ).setCustomValidity`

***

### setRangeText()

> **setRangeText**(`replacement`, `start`, `end`, `selectMode?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:382](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L382)

Replaces the selected text in the control.

#### Parameters

##### replacement

`string`

##### start

`number`

##### end

`number`

##### selectMode?

`RangeTextSelectMode` = `'preserve'`

#### Returns

`void`

***

### setSelectionRange()

> **setSelectionRange**(`start`, `end`, `direction?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/textarea/textarea.ts:372](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/textarea/textarea.ts#L372)

Sets the text selection range of the control

#### Parameters

##### start

`number`

##### end

`number`

##### direction?

`SelectionRangeDirection` = `'none'`

#### Returns

`void`
