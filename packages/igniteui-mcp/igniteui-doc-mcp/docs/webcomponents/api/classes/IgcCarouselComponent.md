# Class: IgcCarouselComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:95](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L95)

The `igc-carousel` presents a set of `igc-carousel-slide`s by sequentially displaying a subset of one or more slides.

## Element

igc-carousel

## Slot

Default slot for the carousel. Any projected `igc-carousel-slide` components should be projected here.

## Slot

previous-button - Renders content inside the previous button.

## Slot

next-button - Renders content inside the next button.

## Fires

igcSlideChanged - Emitted when the current active slide is changed either by user interaction or by the interval callback.

## Fires

igcPlaying - Emitted when the carousel enters playing state by a user interaction.

## Fires

igcPaused - Emitted when the carousel enters paused state by a user interaction.

## Csspart

navigation - The wrapper container of each carousel navigation button.

## Csspart

previous - The wrapper container of the carousel previous navigation button.

## Csspart

next - The wrapper container of the carousel next navigation button.

## Csspart

dot - The carousel dot indicator container.

## Csspart

active - The carousel active dot indicator container.

## Csspart

label - The label container of the carousel indicators.

## Csspart

start - The wrapping container of all carousel indicators when indicators-orientation is set to start.

## Extends

- `EventEmitterInterface`\<`IgcCarouselComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### animationType

> **animationType**: `HorizontalTransitionAnimation` = `'slide'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:285](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L285)

The animation type.

#### Attr

animation-type

***

### disableLoop

> **disableLoop**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:185](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L185)

Whether the carousel should skip rotating to the first slide after it reaches the last.

#### Attr

disable-loop

***

### disablePauseOnInteraction

> **disablePauseOnInteraction**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:196](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L196)

Whether the carousel should ignore use interactions and not pause on them.

#### Attr

disable-pause-on-interaction

***

### hideIndicators

> **hideIndicators**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:210](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L210)

Whether the carousel should render the indicator controls (dots).

#### Attr

hide-indicators

***

### hideNavigation

> **hideNavigation**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:203](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L203)

Whether the carousel should skip rendering of the default navigation buttons.

#### Attr

hide-navigation

***

### indicatorsOrientation

> **indicatorsOrientation**: `CarouselIndicatorsOrientation` = `'end'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:224](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L224)

Sets the orientation of the indicator controls (dots).

#### Attr

indicators-orientation

***

### interval

> **interval**: `number` \| `undefined`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:271](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L271)

The duration in milliseconds between changing the active slide.

#### Attr

interval

***

### maximumIndicatorsCount

> **maximumIndicatorsCount**: `number` = `10`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:278](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L278)

Controls the maximum indicator controls (dots) that can be shown. Default value is `10`.

#### Attr

maximum-indicators-count

***

### vertical

> **vertical**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:217](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L217)

Whether the carousel has vertical alignment.

#### Attr

vertical

***

### tagName

> `readonly` `static` **tagName**: `"igc-carousel"` = `'igc-carousel'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:100](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L100)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### current

#### Get Signature

> **get** **current**(): `number`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:331](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L331)

The index of the current active slide.

##### Returns

`number`

***

### indicatorsLabelFormat

#### Set Signature

> **set** **indicatorsLabelFormat**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:233](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L233)

The format used to set the aria-label on the carousel indicators.
Instances of '{0}' will be replaced with the index of the corresponding slide.

##### Attr

indicators-label-format

##### Parameters

###### value

`string`

##### Returns

`void`

***

### isPaused

#### Get Signature

> **get** **isPaused**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:345](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L345)

Whether the carousel in in paused state.

##### Returns

`boolean`

***

### isPlaying

#### Get Signature

> **get** **isPlaying**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:338](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L338)

Whether the carousel is in playing state.

##### Returns

`boolean`

***

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:292](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L292)

Gets/Sets the locale used for getting language, affecting resource strings.

##### Attr

locale

##### Parameters

###### value

`string`

##### Returns

`void`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:305](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L305)

The resource strings for localization.
Currently only aria-label attributes are localized for the carousel.

##### Parameters

###### value

`ICarouselResourceStrings`

##### Returns

`void`

***

### slides

#### Get Signature

> **get** **slides**(): [`IgcCarouselSlideComponent`](IgcCarouselSlideComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:317](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L317)

The slides of the carousel.

##### Returns

[`IgcCarouselSlideComponent`](IgcCarouselSlideComponent.md)[]

***

### slidesLabelFormat

#### Set Signature

> **set** **slidesLabelFormat**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:254](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L254)

The format used to set the aria-label on the carousel slides and the text displayed
when the number of indicators is greater than tha maximum indicator count.
Instances of '{0}' will be replaced with the index of the corresponding slide.
Instances of '{1}' will be replaced with the total amount of slides.

##### Attr

slides-label-format

##### Parameters

###### value

`string`

##### Returns

`void`

***

### total

#### Get Signature

> **get** **total**(): `number`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:324](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L324)

The total number of slides.

##### Returns

`number`

## Methods

### next()

> **next**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:715](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L715)

Switches to the next slide, runs any animations, and returns if the operation was successful.

#### Returns

`Promise`\<`boolean`\>

***

### pause()

> **pause**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:704](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L704)

Pauses the carousel rotation of slides.

#### Returns

`void`

***

### play()

> **play**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:693](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L693)

Resumes playing of the carousel slides.

#### Returns

`void`

***

### prev()

> **prev**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:727](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L727)

Switches to the previous slide, runs any animations, and returns if the operation was successful.

#### Returns

`Promise`\<`boolean`\>

***

### select()

#### Call Signature

> **select**(`slide`, `animationDirection?`): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:740](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L740)

Switches to the passed-in slide, runs any animations, and returns if the operation was successful.

##### Parameters

###### slide

[`IgcCarouselSlideComponent`](IgcCarouselSlideComponent.md)

###### animationDirection?

`"next"` \| `"prev"`

##### Returns

`Promise`\<`boolean`\>

#### Call Signature

> **select**(`index`, `animationDirection?`): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/carousel/carousel.ts:747](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/carousel/carousel.ts#L747)

Switches to slide by index, runs any animations, and returns if the operation was successful.

##### Parameters

###### index

`number`

###### animationDirection?

`"next"` \| `"prev"`

##### Returns

`Promise`\<`boolean`\>
