# Class: IgcRangeSliderComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/range-slider.ts:53](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/range-slider.ts#L53)

A range slider component used to select two numeric values within a range.

## Element

igc-range-slider

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

- `EventEmitterInterface`\<`IgcRangeSliderComponentEventMap`, `this`\> & `IgcSliderBaseComponent`\<`this`\>

## Properties

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:175](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L175)

Disables the UI interactions of the slider.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).disabled`

***

### discreteTrack

> **discreteTrack**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:183](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L183)

Marks the slider track as discrete so it displays the steps.
If the `step` is 0, the slider will remain continuos even if `discreteTrack` is `true`.

#### Attr

discrete-track

#### Inherited from

[`IgcSliderComponent`](IgcSliderComponent.md).[`discreteTrack`](IgcSliderComponent.md#discretetrack)

***

### hidePrimaryLabels

> **hidePrimaryLabels**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:235](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L235)

Hides the primary tick labels.

#### Attr

hide-primary-labels

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).hidePrimaryLabels`

***

### hideSecondaryLabels

> **hideSecondaryLabels**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:242](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L242)

Hides the secondary tick labels.

#### Attr

hide-secondary-labels

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).hideSecondaryLabels`

***

### hideTooltip

> **hideTooltip**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:190](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L190)

Hides the thumb tooltip.

#### Attr

hide-tooltip

#### Inherited from

[`IgcSliderComponent`](IgcSliderComponent.md).[`hideTooltip`](IgcSliderComponent.md#hidetooltip)

***

### locale

> **locale**: `string` = `'en'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:249](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L249)

The locale used to format the thumb and tick label values in the slider.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).locale`

***

### primaryTicks

> **primaryTicks**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:214](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L214)

The number of primary ticks. It defaults to 0 which means no primary ticks are displayed.

#### Attr

primary-ticks

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).primaryTicks`

***

### secondaryTicks

> **secondaryTicks**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:221](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L221)

The number of secondary ticks. It defaults to 0 which means no secondary ticks are displayed.

#### Attr

secondary-ticks

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).secondaryTicks`

***

### thumbLabelLower

> **thumbLabelLower**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/range-slider.ts:104](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/range-slider.ts#L104)

The aria label for the lower thumb.

#### Attr

thumb-label-lower

***

### thumbLabelUpper

> **thumbLabelUpper**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/range-slider.ts:111](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/range-slider.ts#L111)

The aria label for the upper thumb.

#### Attr

thumb-label-upper

***

### tickLabelRotation

> **tickLabelRotation**: `SliderTickLabelRotation` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:270](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L270)

The degrees for the rotation of the tick labels. Defaults to 0.

#### Attr

tick-label-rotation

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).tickLabelRotation`

***

### tickOrientation

> **tickOrientation**: `SliderTickOrientation` = `'end'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:228](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L228)

Changes the orientation of the ticks.

#### Attr

tick-orientation

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).tickOrientation`

***

### valueFormat?

> `optional` **valueFormat?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:256](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L256)

String format used for the thumb and tick label values in the slider.

#### Attr

value-format

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).valueFormat`

***

### valueFormatOptions?

> `optional` **valueFormatOptions?**: `NumberFormatOptions`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/slider-base.ts:263](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/slider-base.ts#L263)

Number format options used for the thumb and tick label values in the slider.

#### Inherited from

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).valueFormatOptions`

***

### tagName

> `readonly` `static` **tagName**: `"igc-range-slider"` = `'igc-range-slider'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/range-slider.ts:57](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/range-slider.ts#L57)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### lower

#### Set Signature

> **set** **lower**(`val`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/range-slider.ts:78](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/range-slider.ts#L78)

The current value of the lower thumb.

##### Attr

##### Parameters

###### val

`number`

##### Returns

`void`

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

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).lowerBound`

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

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).max`

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

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).min`

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

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).step`

***

### upper

#### Set Signature

> **set** **upper**(`val`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/slider/range-slider.ts:91](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/slider/range-slider.ts#L91)

The current value of the upper thumb.

##### Attr

##### Parameters

###### val

`number`

##### Returns

`void`

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

`EventEmitterMixin< IgcRangeSliderComponentEventMap, Constructor<IgcSliderBaseComponent> >(IgcSliderBaseComponent).upperBound`
