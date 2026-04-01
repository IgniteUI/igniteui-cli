# Class: IgcDateTimeInputComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:92](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L92)

A date time input is an input field that lets you set and edit the date and time in a chosen input element
using customizable display and input formats.

## Element

igc-date-time-input

## Slot

prefix - Renders content before the input.

## Slot

suffix - Renders content after input.

## Slot

helper-text - Renders content below the input.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

range-overflow - Renders content when the max validation fails.

## Slot

range-underflow - Renders content when the min validation fails.

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

- `EventEmitterInterface`\<`IgcDateTimeInputComponentEventMap`, `this`\> & `IgcMaskInputBaseComponent`\<`this`\>

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).disabled`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).invalid`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L70)

The label for the control.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).label`

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).name`

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

[`IgcFileInputComponent`](IgcFileInputComponent.md).[`outlined`](IgcFileInputComponent.md#outlined)

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:63](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L63)

The placeholder attribute of the control.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).placeholder`

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

[`IgcMaskInputComponent`](IgcMaskInputComponent.md).[`readOnly`](IgcMaskInputComponent.md#readonly)

***

### spinDelta?

> `optional` **spinDelta?**: `DatePartDeltas`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:241](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L241)

Delta values used to increment or decrement each date part on step actions.
All values default to `1`.

***

### spinLoop

> **spinLoop**: `boolean` = `true`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:248](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L248)

Sets whether to loop over the currently spun segment.

#### Attr

spin-loop

***

### tagName

> `readonly` `static` **tagName**: `"igc-date-time-input"` = `'igc-date-time-input'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:96](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L96)

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).defaultValue`

***

### displayFormat

#### Set Signature

> **set** **displayFormat**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:226](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L226)

Format to display the value in when not editing.
Defaults to the locale format if not set.

##### Attr

display-format

##### Parameters

###### value

`string`

##### Returns

`void`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).form`

***

### inputFormat

#### Set Signature

> **set** **inputFormat**(`val`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:165](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L165)

The date format to apply on the input.

##### Attr

input-format

##### Parameters

###### val

`string`

##### Returns

`void`

***

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:255](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L255)

Gets/Sets the locale used for formatting the display value.

##### Attr

locale

##### Parameters

###### value

`string`

##### Returns

`void`

***

### mask

#### Set Signature

> **set** **mask**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input-base.ts:59](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input-base.ts#L59)

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

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).mask`

***

### max

#### Set Signature

> **set** **max**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:211](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L211)

The maximum value required for the input to remain valid.

##### Attr

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

***

### min

#### Set Signature

> **set** **min**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:197](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L197)

The minimum value required for the input to remain valid.

##### Attr

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

***

### prompt

#### Set Signature

> **set** **prompt**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/mask-input/mask-input-base.ts:74](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/mask-input/mask-input-base.ts#L74)

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

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).prompt`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).required`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).validationMessage`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).validity`

***

### value

#### Get Signature

> **get** **value**(): `Date` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:188](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L188)

The value attribute of the control.
Type varies based on the input type and can be string, Date or null.

##### Returns

`Date` \| `null`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:183](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L183)

The value of the input.

##### Attr

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

#### Overrides

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).value`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L102)

Removes focus from the control.

#### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).checkValidity`

***

### clear()

> **clear**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:670](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L670)

Clears the input element of user input.

#### Returns

`void`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).focus`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).reportValidity`

***

### select()

> **select**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:90](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L90)

Selects all the text inside the input.

#### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).select`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).setCustomValidity`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).setRangeText`

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

`EventEmitterMixin< IgcDateTimeInputComponentEventMap, AbstractConstructor<IgcMaskInputBaseComponent> >(IgcMaskInputBaseComponent).setSelectionRange`

***

### stepDown()

> **stepDown**(`datePart?`, `delta?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:665](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L665)

Decrements a date/time portion.

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

##### delta?

`number`

#### Returns

`void`

***

### stepUp()

> **stepUp**(`datePart?`, `delta?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-time-input/date-time-input.ts:660](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-time-input/date-time-input.ts#L660)

Increments a date/time portion.

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

##### delta?

`number`

#### Returns

`void`
