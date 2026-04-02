# Class: IgcSliderComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider.ts:46](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider.ts#L46)

A slider component used to select numeric value within a range.

## Element

igc-slider

## Fires

igcInput - Emitted when a value is changed via thumb drag or keyboard interaction.

## Fires

igcChange - Emitted when a value change is committed on a thumb drag end or keyboard interaction.

## Csspart

base - The base wrapper of the slider.

## Csspart

ticks - The ticks container.

## Csspart

tick-group - The tick group container.

## Csspart

tick - The tick element.

## Csspart

tick-label - The tick label element.

## Csspart

tick-label-inner - The inner element of the tick label.

## Csspart

thumbs - The thumbs container.

## Csspart

thumb - The thumb element.

## Csspart

thumb-label - The thumb tooltip label container.

## Csspart

thumb-label-inner - The thumb tooltip label inner element.

## Csspart

track - The track container.

## Csspart

steps - The track steps element.

## Csspart

inactive - The inactive element of the track.

## Csspart

fill - The filled part of the track.

## Extends

- `FormAssociatedElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcSliderComponentEventMap`, `this`\> & `IgcSliderBaseComponent`\<`this`\>

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

[`IgcCheckboxComponent`](IgcCheckboxComponent.md).[`disabled`](IgcCheckboxComponent.md#disabled)

***

### discreteTrack

> **discreteTrack**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:183](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L183)

Marks the slider track as discrete so it displays the steps.
If the `step` is 0, the slider will remain continuos even if `discreteTrack` is `true`.

#### Attr

discrete-track

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).discreteTrack`

***

### hidePrimaryLabels

> **hidePrimaryLabels**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:235](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L235)

Hides the primary tick labels.

#### Attr

hide-primary-labels

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).hidePrimaryLabels`

***

### hideSecondaryLabels

> **hideSecondaryLabels**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:242](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L242)

Hides the secondary tick labels.

#### Attr

hide-secondary-labels

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).hideSecondaryLabels`

***

### hideTooltip

> **hideTooltip**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:190](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L190)

Hides the thumb tooltip.

#### Attr

hide-tooltip

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).hideTooltip`

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

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).invalid`

***

### locale

> **locale**: `string` = `'en'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:249](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L249)

The locale used to format the thumb and tick label values in the slider.

#### Attr

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).locale`

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).name`

***

### primaryTicks

> **primaryTicks**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:214](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L214)

The number of primary ticks. It defaults to 0 which means no primary ticks are displayed.

#### Attr

primary-ticks

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).primaryTicks`

***

### secondaryTicks

> **secondaryTicks**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:221](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L221)

The number of secondary ticks. It defaults to 0 which means no secondary ticks are displayed.

#### Attr

secondary-ticks

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).secondaryTicks`

***

### tickLabelRotation

> **tickLabelRotation**: `SliderTickLabelRotation` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:270](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L270)

The degrees for the rotation of the tick labels. Defaults to 0.

#### Attr

tick-label-rotation

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).tickLabelRotation`

***

### tickOrientation

> **tickOrientation**: `SliderTickOrientation` = `'end'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:228](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L228)

Changes the orientation of the ticks.

#### Attr

tick-orientation

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).tickOrientation`

***

### valueFormat?

> `optional` **valueFormat?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:256](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L256)

String format used for the thumb and tick label values in the slider.

#### Attr

value-format

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).valueFormat`

***

### valueFormatOptions?

> `optional` **valueFormatOptions?**: `NumberFormatOptions`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:263](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L263)

Number format options used for the thumb and tick label values in the slider.

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).valueFormatOptions`

***

### tagName

> `readonly` `static` **tagName**: `"igc-slider"` = `'igc-slider'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider.ts:52](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider.ts#L52)

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

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).defaultValue`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).form`

***

### lowerBound

#### Set Signature

> **set** **lowerBound**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:141](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L141)

The lower bound of the slider value. If not set, the `min` value is applied.

##### Attr

lower-bound

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).lowerBound`

***

### max

#### Set Signature

> **set** **max**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:120](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L120)

The maximum value of the slider scale. Defaults to 100.

If `max` is less than `min` the call is a no-op.

If `labels` are provided (projected), then `max` is always set to
the number of labels.

If `upperBound` ends up being greater than than the current `max` value,
it is automatically assigned the new `max` value.

##### Attr

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).max`

***

### min

#### Set Signature

> **set** **min**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:91](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L91)

The minimum value of the slider scale. Defaults to 0.

If `min` is greater than `max` the call is a no-op.

If `labels` are provided (projected), then `min` is always set to 0.

If `lowerBound` ends up being less than than the current `min` value,
it is automatically assigned the new `min` value.

##### Attr

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).min`

***

### step

#### Set Signature

> **set** **step**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:201](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L201)

Specifies the granularity that the value must adhere to.

If set to 0 no stepping is implied and any value in the range is allowed.
If `labels` are provided (projected) then the step is always assumed to be 1 since it is a discrete slider.

##### Attr

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).step`

***

### upperBound

#### Set Signature

> **set** **upperBound**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:158](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L158)

The upper bound of the slider value. If not set, the `max` value is applied.

##### Attr

upper-bound

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).upperBound`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).validationMessage`

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

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).validity`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider.ts#L70)

The current value of the component.

##### Attr

##### Parameters

###### value

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

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).willValidate`

## Methods

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).checkValidity`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).reportValidity`

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

`FormAssociatedMixin( EventEmitterMixin< IgcSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent) ).setCustomValidity`

***

### stepDown()

> **stepDown**(`stepDecrement?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider.ts:132](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider.ts#L132)

Decrements the value of the slider by `stepDecrement * step`, where `stepDecrement` defaults to 1.

#### Parameters

##### stepDecrement?

`number` = `1`

Optional step decrement. If no parameter is passed, it defaults to 1.

#### Returns

`void`

***

### stepUp()

> **stepUp**(`stepIncrement?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider.ts:124](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider.ts#L124)

Increments the value of the slider by `stepIncrement * step`, where `stepIncrement` defaults to 1.

#### Parameters

##### stepIncrement?

`number` = `1`

Optional step increment. If no parameter is passed, it defaults to 1.

#### Returns

`void`
