# Class: IgcCheckboxComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox.ts:34](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox.ts#L34)

A check box allowing single values to be selected/deselected.

## Element

igc-checkbox

## Slot

- The checkbox label.

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

base - The base wrapper of the checkbox.

## Csspart

control - The checkbox input element.

## Csspart

label - The checkbox label.

## Csspart

indicator - The checkbox indicator icon.

## Extends

- `IgcCheckboxBaseComponent`

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

`IgcCheckboxBaseComponent.disabled`

***

### indeterminate

> **indeterminate**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox.ts:53](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox.ts#L53)

Draws the checkbox in indeterminate state.

#### Attr

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

`IgcCheckboxBaseComponent.invalid`

***

### labelPosition

> **labelPosition**: `ToggleLabelPosition` = `'after'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox-base.ts:91](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox-base.ts#L91)

The label position of the control.

#### Attr

label-position

#### Inherited from

`IgcCheckboxBaseComponent.labelPosition`

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`IgcCheckboxBaseComponent.name`

## Accessors

### checked

#### Set Signature

> **set** **checked**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox-base.ts:78](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox-base.ts#L78)

The checked state of the control.

##### Attr

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`IgcCheckboxBaseComponent.checked`

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

`IgcCheckboxBaseComponent.defaultChecked`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`IgcCheckboxBaseComponent.form`

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

`IgcCheckboxBaseComponent.required`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`IgcCheckboxBaseComponent.validationMessage`

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

`IgcCheckboxBaseComponent.validity`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox-base.ts:61](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox-base.ts#L61)

The value attribute of the control.

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`IgcCheckboxBaseComponent.value`

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

`IgcCheckboxBaseComponent.willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox-base.ts:106](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox-base.ts#L106)

Removes focus from the control.

#### Returns

`void`

#### Inherited from

`IgcCheckboxBaseComponent.blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`IgcCheckboxBaseComponent.checkValidity`

***

### click()

> **click**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox-base.ts:94](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox-base.ts#L94)

Simulates a click on the control.

#### Returns

`void`

#### Inherited from

`IgcCheckboxBaseComponent.click`

***

### focus()

> **focus**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/checkbox/checkbox-base.ts:100](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/checkbox/checkbox-base.ts#L100)

Sets focus on the control.

#### Parameters

##### options?

`FocusOptions`

#### Returns

`void`

#### Inherited from

`IgcCheckboxBaseComponent.focus`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`IgcCheckboxBaseComponent.reportValidity`

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

`IgcCheckboxBaseComponent.setCustomValidity`
