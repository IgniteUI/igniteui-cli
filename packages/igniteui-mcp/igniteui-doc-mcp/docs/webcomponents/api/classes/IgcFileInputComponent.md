# Class: IgcFileInputComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:74](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L74)

## Element

igc-file-input

## Slot

prefix - Renders content before the input.

## Slot

suffix - Renders content after input.

## Slot

helper-text - Renders content below the input.

## Slot

file-selector-text - Renders content for the browse button when input type is file.

## Slot

file-missing-text - Renders content when input type is file and no file is chosen.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Fires

igcChange - Emitted when the control's checked state changes.

## Fires

igcCancel - Emitted when the control's file picker dialog is canceled.

## Csspart

container - The main wrapper that holds all main input elements.

## Csspart

input - The native input element.

## Csspart

label - The native label element.

## Csspart

file-names - The file names wrapper when input type is 'file'.

## Csspart

file-selector-button - The browse button when input type is 'file'.

## Csspart

prefix - The prefix wrapper.

## Csspart

suffix - The suffix wrapper.

## Csspart

helper-text - The helper text wrapper.

## Extends

- `EventEmitterInterface`\<`IgcFileInputComponentEventMap`, `this`\> & `IgcInputBaseComponent`\<`this`\>

## Properties

### accept

> **accept**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:190](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L190)

The accept attribute of the control.
Defines the file types as a list of comma-separated values that the file input should accept.

#### Attr

***

### autofocus

> **autofocus**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:197](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L197)

The autofocus attribute of the control.

#### Attr

#### Overrides

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).autofocus`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).disabled`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).invalid`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L70)

The label for the control.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).label`

***

### multiple

> **multiple**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:182](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L182)

The multiple attribute of the control.
Used to indicate that a file input allows the user to select more than one file.

#### Attr

#### Default

```ts
false
```

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).name`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).outlined`

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:63](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L63)

The placeholder attribute of the control.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).placeholder`

***

### tagName

> `readonly` `static` **tagName**: `"igc-file-input"` = `'igc-file-input'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:78](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L78)

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).defaultValue`

***

### files

#### Get Signature

> **get** **files**(): `FileList`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:200](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L200)

Returns the list of selected files.

##### Returns

`FileList`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).form`

***

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:166](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L166)

Gets/Sets the locale used for getting language, affecting resource strings.

##### Attr

locale

##### Parameters

###### value

`string`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).required`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:153](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L153)

The resource strings for localization.

##### Parameters

###### value

`IFileInputResourceStrings`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).validationMessage`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).validity`

***

### value

#### Get Signature

> **get** **value**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:145](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L145)

The value attribute of the control.
Type varies based on the input type and can be string, Date or null.

##### Returns

`string`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/file-input/file-input.ts:139](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/file-input/file-input.ts#L139)

The value of the control.
Similar to native file input, this property is read-only and cannot be set programmatically.

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).value`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L102)

Removes focus from the control.

#### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).checkValidity`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).focus`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).reportValidity`

***

### select()

> **select**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/input/input-base.ts:90](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/input/input-base.ts#L90)

Selects all the text inside the input.

#### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).select`

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

`EventEmitterMixin< IgcFileInputComponentEventMap, AbstractConstructor<IgcInputBaseComponent> >(IgcInputBaseComponent).setCustomValidity`
