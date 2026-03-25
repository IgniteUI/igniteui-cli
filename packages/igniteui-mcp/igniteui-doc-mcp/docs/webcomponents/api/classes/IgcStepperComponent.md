# Class: IgcStepperComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:108](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L108)

A stepper component that provides a wizard-like workflow by dividing content into logical steps.

## Remarks

The stepper component allows the user to navigate between multiple `igc-step` elements.
It supports horizontal and vertical orientation, linear and non-linear navigation,
keyboard navigation, and provides API methods to control the active step.

In linear mode, the user can only advance to the next step if the current step is valid
(not marked as `invalid`).

## Element

igc-stepper

## Slot

- Renders `igc-step` components inside the default slot.

## Fires

igcActiveStepChanging - Emitted when the active step is about to change. Cancelable.

## Fires

igcActiveStepChanged - Emitted after the active step has changed.

## Examples

```html
<igc-stepper>
  <igc-step>
    <span slot="title">Step 1</span>
    <p>Step 1 content</p>
  </igc-step>
  <igc-step>
    <span slot="title">Step 2</span>
    <p>Step 2 content</p>
  </igc-step>
</igc-stepper>
```

```html
<igc-stepper orientation="vertical" linear>
  <igc-step complete>
    <span slot="title">Completed step</span>
    <p>This step is already complete.</p>
  </igc-step>
  <igc-step active>
    <span slot="title">Current step</span>
    <p>Fill in the details to proceed.</p>
  </igc-step>
  <igc-step>
    <span slot="title">Next step</span>
    <p>Upcoming content.</p>
  </igc-step>
</igc-stepper>
```

## Extends

- `EventEmitterInterface`\<`IgcStepperComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### animationDuration

> **animationDuration**: `number` = `320`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:220](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L220)

The animation duration in either vertical or horizontal mode in milliseconds.

#### Attr

animation-duration

#### Default

```ts
320
```

***

### contentTop

> **contentTop**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:193](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L193)

Whether the content is displayed above the steps.

#### Attr

content-top

#### Default

```ts
false
```

***

### horizontalAnimation

> **horizontalAnimation**: `HorizontalTransitionAnimation` = `'slide'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:211](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L211)

The animation type when in horizontal mode.

#### Attr

horizontal-animation

#### Default

```ts
'slide'
```

***

### linear

> **linear**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:184](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L184)

Whether the stepper is linear.

#### Remarks

If the stepper is in linear mode and if the active step is valid only then the user is able to move forward.

#### Attr

linear

#### Default

```ts
false
```

***

### orientation

> **orientation**: `StepperOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:163](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L163)

The orientation of the stepper.

#### Attr

orientation

#### Default

```ts
'horizontal'
```

***

### stepType

> **stepType**: `StepperStepType` = `'full'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:172](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L172)

The visual type of the steps.

#### Attr

step-type

#### Default

```ts
'full'
```

***

### titlePosition

> **titlePosition**: `StepperTitlePosition` = `'auto'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:233](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L233)

The position of the steps title.

#### Remarks

When the stepper is horizontally orientated the title is positioned below the indicator.
When the stepper is vertically orientated the title is positioned on the right side of the indicator.

#### Attr

title-position

#### Default

```ts
'auto'
```

***

### verticalAnimation

> **verticalAnimation**: `StepperVerticalAnimation` = `'grow'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:202](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L202)

The animation type when in vertical mode.

#### Attr

vertical-animation

#### Default

```ts
'grow'
```

***

### tagName

> `readonly` `static` **tagName**: `"igc-stepper"` = `'igc-stepper'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:112](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L112)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### steps

#### Get Signature

> **get** **steps**(): readonly [`IgcStepComponent`](IgcStepComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:152](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L152)

Returns all of the stepper's steps.

##### Returns

readonly [`IgcStepComponent`](IgcStepComponent.md)[]

## Methods

### navigateTo()

> **navigateTo**(`index`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:468](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L468)

Activates the step at a given index.

#### Parameters

##### index

`number`

#### Returns

`void`

***

### next()

> **next**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:477](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L477)

Activates the next enabled step.

#### Returns

`void`

***

### prev()

> **prev**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:482](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L482)

Activates the previous enabled step.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/stepper.ts:492](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/stepper.ts#L492)

Resets the stepper to its initial state i.e. activates the first step.

#### Returns

`void`

#### Remarks

The steps' content will not be automatically reset.
