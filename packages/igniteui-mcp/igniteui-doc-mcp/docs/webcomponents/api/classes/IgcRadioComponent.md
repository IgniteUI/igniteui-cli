# Class: IgcRadioComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:62](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L62)

## Element

igc-radio

## Slot

- The radio label.

## Slot

helper-text - Renders content below the input.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Fires

igcChange - Emitted when the control's checked state changes.

## Csspart

base - The radio control base wrapper.

## Csspart

control - The radio input control.

## Csspart

label - The radio control label.

## Extends

- `FormRequiredInterface`\<`this`\> & `FormAssociatedCheckboxElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcRadioComponentEventMap`, `this`\> & `LitElement`\<`this`\>

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

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).disabled`

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

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).invalid`

***

### labelPosition

> **labelPosition**: `ToggleLabelPosition` = `'after'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:177](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L177)

The label position of the radio control.

#### Attr

label-position

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).name`

***

### tagName

> `readonly` `static` **tagName**: `"igc-radio"` = `'igc-radio'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:67](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L67)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### checked

#### Set Signature

> **set** **checked**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:160](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L160)

The checked state of the control.

##### Attr

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### defaultChecked

#### Set Signature

> **set** **defaultChecked**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:162](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L162)

The initial checked state of the component.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).defaultChecked`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).form`

***

### required

#### Get Signature

> **get** **required**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:134](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L134)

When set, makes the component a required field for validation.

##### Attr

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **required**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:124](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L124)

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

#### Overrides

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).required`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).validationMessage`

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

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).validity`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L143)

The value attribute of the control.

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

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:231](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L231)

Removes focus from the radio control.

#### Returns

`void`

#### Overrides

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:244](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L244)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Overrides

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).checkValidity`

***

### click()

> **click**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:219](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L219)

Simulates a click on the radio control.

#### Returns

`void`

#### Overrides

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).click`

***

### focus()

> **focus**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:225](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L225)

Sets focus on the radio control.

#### Parameters

##### options?

`FocusOptions`

#### Returns

`void`

#### Overrides

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).focus`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:253](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L253)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Overrides

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).reportValidity`

***

### setCustomValidity()

> **setCustomValidity**(`message`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio/radio.ts:265](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio/radio.ts#L265)

Sets a custom validation message for the control.
As long as `message` is not empty, the control is considered invalid.

#### Parameters

##### message

`string`

#### Returns

`void`

#### Overrides

`FormAssociatedCheckboxRequiredMixin( EventEmitterMixin<IgcRadioComponentEventMap, Constructor<LitElement>>( LitElement ) ).setCustomValidity`
