# Class: IgcRatingComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:72](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L72)

Rating provides insight regarding others' opinions and experiences,
and can allow the user to submit a rating of their own

## Element

igc-rating

## Fires

igcChange - Emitted when the value of the control changes.

## Fires

igcHover - Emitted when hover is enabled and the user mouses over a symbol of the rating.

## Csspart

base - The main wrapper which holds all of the rating elements.

## Csspart

label - The label part.

## Csspart

value-label - The value label part.

## Csspart

symbols - A wrapper for all rating symbols.

## Csspart

symbol - The part of the encapsulated default symbol.

## Csspart

full - The part of the encapsulated full symbols.

## Csspart

empty - The part of the encapsulated empty symbols.

## Cssproperty

--symbol-size - The size of the symbols.

## Cssproperty

--symbol-full-color - The color of the filled symbol.

## Cssproperty

--symbol-empty-color - The color of the empty symbol.

## Cssproperty

--symbol-full-filter - The filter(s) used for the filled symbol.

## Cssproperty

--symbol-empty-filter - The filter(s) used for the empty symbol.

## Extends

- `FormAssociatedElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcRatingComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### allowReset

> **allowReset**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:244](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L244)

Whether to reset the rating when the user selects the same value.

#### Attr

allow-reset

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

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).disabled`

***

### hoverPreview

> **hoverPreview**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:211](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L211)

Sets hover preview behavior for the component

#### Attr

hover-preview

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

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).invalid`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:176](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L176)

The label of the control.

#### Attr

label

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).name`

***

### readOnly

> **readOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:218](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L218)

Makes the control a readonly field.

#### Attr

readonly

***

### valueFormat

> **valueFormat**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:186](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L186)

A format string which sets aria-valuetext. Instances of '{0}' will be replaced
with the current value of the control and instances of '{1}' with the maximum value for the control.

Important for screen-readers and useful for localization.

#### Attr

value-format

***

### tagName

> `readonly` `static` **tagName**: `"igc-rating"` = `'igc-rating'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:77](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L77)

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

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).defaultValue`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).form`

***

### max

#### Set Signature

> **set** **max**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:141](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L141)

The maximum value for the rating.

If there are projected symbols, the maximum value will be resolved
based on the number of symbols.

##### Attr

max

##### Default

```ts
5
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### single

#### Set Signature

> **set** **single**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:226](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L226)

Toggles single selection visual mode.

##### Attr

single

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### step

#### Set Signature

> **set** **step**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:163](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L163)

The minimum value change allowed.

Valid values are in the interval between 0 and 1 inclusive.

##### Attr

step

##### Default

```ts
1
```

##### Parameters

###### value

`number`

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

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).validationMessage`

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

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).validity`

***

### value

#### Set Signature

> **set** **value**(`number`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:195](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L195)

The current value of the component

##### Attr

value

##### Default

```ts
0
```

##### Parameters

###### number

`number`

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

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).willValidate`

## Methods

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).checkValidity`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).reportValidity`

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

`FormAssociatedMixin( EventEmitterMixin<IgcRatingComponentEventMap, Constructor<LitElement>>( LitElement ) ).setCustomValidity`

***

### stepDown()

> **stepDown**(`n?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:367](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L367)

Decrements the value of the control by `n` steps multiplied by
the step factor.

#### Parameters

##### n?

`number` = `1`

#### Returns

`void`

***

### stepUp()

> **stepUp**(`n?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating.ts:359](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating.ts#L359)

Increments the value of the control by `n` steps multiplied by the
step factor.

#### Parameters

##### n?

`number` = `1`

#### Returns

`void`
