# Class: IgxCarouselComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L63)

**Ignite UI for Angular Carousel** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)

The Ignite UI Carousel is used to browse or navigate through a collection of slides. Slides can contain custom
content such as images or cards and be used for things such as on-boarding tutorials or page-based interfaces.
It can be used as a separate fullscreen element or inside another component.

Example:
```html
<igx-carousel>
  <igx-slide>
    <h3>First Slide Header</h3>
    <p>First slide Content</p>
  <igx-slide>
  <igx-slide>
    <h3>Second Slide Header</h3>
    <p>Second Slide Content</p>
</igx-carousel>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxCarouselComponent**(): `IgxCarouselComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:548](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L548)

#### Returns

`IgxCarouselComponent`

#### Overrides

`IgxCarouselComponentBase.constructor`

## Properties

### animationType

> **animationType**: [`CarouselAnimationType`](../type-aliases/CarouselAnimationType.md) = `CarouselAnimationType.slide`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:231](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L231)

Gets/sets the animation type of carousel.
Default value is `slide`.
```html
<igx-carousel animationType="none">
<igx-carousel>
```

#### Member Of

IgxCarouselComponent

#### Overrides

`IgxCarouselComponentBase.animationType`

***

### carouselPaused

> **carouselPaused**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:354](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L354)

An event that is emitted after the carousel has been paused.
Provides a reference to the `IgxCarouselComponent` as an event argument.
```html
<igx-carousel (carouselPaused)="carouselPaused($event)"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### carouselPlaying

> **carouselPlaying**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:365](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L365)

An event that is emitted after the carousel has resumed transitioning between `slides`.
Provides a reference to the `IgxCarouselComponent` as an event argument.
```html
<igx-carousel (carouselPlaying)="carouselPlaying($event)"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts#L25)

#### Inherited from

`IgxCarouselComponentBase.cdr`

***

### cssClass

> **cssClass**: `string` = `'igx-carousel'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L118)

Returns the class of the carousel component.
```typescript
let class =  this.carousel.cssClass;
```

#### Memberof

IgxCarouselComponent

***

### gesturesSupport

> **gesturesSupport**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L196)

Controls whether the carousel should support gestures.
Default value is `true`.
```html
<igx-carousel [gesturesSupport]="false"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L82)

Sets the `id` of the carousel.
If not set, the `id` of the first carousel component will be `"igx-carousel-0"`.
```html
<igx-carousel id="my-first-carousel"></igx-carousel>
```

#### Memberof

IgxCarouselComponent

***

### indicators

> **indicators**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:173](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L173)

Controls whether the carousel should render the indicators.
Default value is `true`.
```html
<igx-carousel [indicators]="false"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### indicatorsOrientation

> **indicatorsOrientation**: [`CarouselIndicatorsOrientation`](../type-aliases/CarouselIndicatorsOrientation.md) = `CarouselIndicatorsOrientation.end`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:219](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L219)

Gets/sets the display mode of carousel indicators. It can be `start` or `end`.
Default value is `end`.
```html
<igx-carousel indicatorsOrientation="start">
<igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### indicatorTemplate

> **indicatorTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:253](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L253)

The custom template, if any, that should be used when rendering carousel indicators

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.carousel.indicatorTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-carousel #carousel>
     ...
     <ng-template igxCarouselIndicator let-slide>
        <igx-icon *ngIf="slide.active">brightness_7</igx-icon>
        <igx-icon *ngIf="!slide.active">brightness_5</igx-icon>
     </ng-template>
 </igx-carousel>
```

***

### loop

> **loop**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:140](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L140)

Sets whether the carousel should `loop` back to the first slide after reaching the last slide.
Default value is `true`.
```html
<igx-carousel [loop]="false"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### maximumIndicatorsCount

> **maximumIndicatorsCount**: `number` = `10`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:207](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L207)

Controls the maximum indexes that can be shown.
Default value is `10`.
```html
<igx-carousel [maximumIndicatorsCount]="5"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### navigation

> **navigation**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L162)

Controls whether the carousel should render the left/right `navigation` buttons.
Default value is `true`.
```html
<igx-carousel [navigation]="false"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### nextButtonTemplate

> **nextButtonTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:276](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L276)

The custom template, if any, that should be used when rendering carousel next button

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.carousel.nextButtonTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-carousel #carousel>
     ...
     <ng-template igxCarouselNextButton let-disabled>
         <button type="button" igxButton="fab" igxRipple="white" [disabled]="disabled">
             <igx-icon name="add"></igx-icon>
         </button>
     </ng-template>
 </igx-carousel>
```

***

### pause

> **pause**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:151](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L151)

Sets whether the carousel will `pause` the slide transitions on user interactions.
Default value is `true`.
```html
 <igx-carousel [pause]="false"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### prevButtonTemplate

> **prevButtonTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:299](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L299)

The custom template, if any, that should be used when rendering carousel previous button

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.carousel.prevButtonTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-carousel #carousel>
     ...
     <ng-template igxCarouselPrevButton let-disabled>
         <button type="button" igxButton="fab" igxRipple="white" [disabled]="disabled">
             <igx-icon name="remove"></igx-icon>
         </button>
     </ng-template>
 </igx-carousel>
```

***

### role

> **role**: `string` = `'region'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L91)

Returns the `role` attribute of the carousel.
```typescript
let carouselRole =  this.carousel.role;
```

#### Memberof

IgxCarouselComponent

***

### slideAdded

> **slideAdded**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:332](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L332)

An event that is emitted after a slide has been added to the carousel.
Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
```html
<igx-carousel (slideAdded)="slideAdded($event)"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### slideChanged

> **slideChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:321](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L321)

An event that is emitted after a slide transition has happened.
Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
```html
<igx-carousel (slideChanged)="slideChanged($event)"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### slideRemoved

> **slideRemoved**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:343](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L343)

An event that is emitted after a slide has been removed from the carousel.
Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
```html
<igx-carousel (slideRemoved)="slideRemoved($event)"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

***

### slides

> **slides**: `QueryList`\<[`IgxSlideComponent`](IgxSlideComponent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:310](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L310)

The collection of `slides` currently in the carousel.
```typescript
let slides: QueryList<IgxSlideComponent> = this.carousel.slides;
```

#### Member Of

IgxCarouselComponent

***

### vertical

> **vertical**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:185](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L185)

Controls whether the carousel has vertical alignment.
Default value is `false`.
```html
<igx-carousel [vertical]="true"></igx-carousel>
```

#### Member Of

IgxCarouselComponent

#### Overrides

`IgxCarouselComponentBase.vertical`

## Accessors

### current

#### Get Signature

> **get** **current**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:482](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L482)

The index of the slide being currently shown.
```typescript
let currentSlideNumber =  this.carousel.current;
```

##### Member Of

IgxCarouselComponent

##### Returns

`number`

***

### interval

#### Get Signature

> **get** **interval**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:530](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L530)

Returns the time `interval` in milliseconds before the slide changes.
```typescript
let timeInterval = this.carousel.interval;
```

##### Memberof

IgxCarouselComponent

##### Returns

`number`

#### Set Signature

> **set** **interval**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:543](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L543)

Sets the time `interval` in milliseconds before the slide changes.
If not set, the carousel will not change `slides` automatically.
```html
<igx-carousel [interval]="1000"></igx-carousel>
```

##### Memberof

IgxCarouselComponent

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:506](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L506)

Returns а boolean indicating if the carousel is destroyed.
```typescript
let isDestroyed =  this.carousel.isDestroyed;
```

##### Member Of

IgxCarouselComponent

##### Returns

`boolean`

***

### isPlaying

#### Get Signature

> **get** **isPlaying**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:494](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L494)

Returns a boolean indicating if the carousel is playing.
```typescript
let isPlaying =  this.carousel.isPlaying;
```

##### Member Of

IgxCarouselComponent

##### Returns

`boolean`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:517](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L517)

Returns a reference to the carousel element in the DOM.
```typescript
let nativeElement =  this.carousel.nativeElement;
```

##### Memberof

IgxCarouselComponent

##### Returns

`any`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:409](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L409)

An accessor that returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:402](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L402)

An accessor that sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

***

### total

#### Get Signature

> **get** **total**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:470](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L470)

Returns the total number of `slides` in the carousel.
```typescript
let slideCount =  this.carousel.total;
```

##### Member Of

IgxCarouselComponent

##### Returns

`number`

***

### touchAction

#### Get Signature

> **get** **touchAction**(): `"auto"` \| `"pan-y"`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L127)

Gets the `touch-action` style of the `list item`.
```typescript
let touchAction = this.listItem.touchAction;
```

##### Returns

`"auto"` \| `"pan-y"`

## Methods

### add()

> **add**(`slide`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:769](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L769)

Adds a new slide to the carousel.
```typescript
this.carousel.add(newSlide);
```

#### Parameters

##### slide

[`IgxSlideComponent`](IgxSlideComponent.md)

#### Returns

`void`

#### Member Of

IgxCarouselComponent

***

### get()

> **get**(`index`): [`IgxSlideComponent`](IgxSlideComponent.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:757](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L757)

Returns the slide corresponding to the provided `index` or null.
```typescript
let slide1 =  this.carousel.get(1);
```

#### Parameters

##### index

`number`

#### Returns

[`IgxSlideComponent`](IgxSlideComponent.md)

#### Member Of

IgxCarouselComponent

***

### getCurrentElement()

> `protected` **getCurrentElement**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:900](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L900)

#### Returns

`HTMLElement`

#### Overrides

`IgxCarouselComponentBase.getCurrentElement`

***

### getPreviousElement()

> `protected` **getPreviousElement**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:896](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L896)

#### Returns

`HTMLElement`

#### Overrides

`IgxCarouselComponentBase.getPreviousElement`

***

### next()

> **next**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:831](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L831)

Transitions to the next slide in the carousel.
```typescript
this.carousel.next();
```

#### Returns

`void`

#### Member Of

IgxCarouselComponent

***

### play()

> **play**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:869](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L869)

Resumes playing of the carousel if in paused state.
No operation otherwise.
```typescript
this.carousel.play();
}
```

#### Returns

`void`

#### Member Of

IgxCarouselComponent

***

### prev()

> **prev**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:849](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L849)

Transitions to the previous slide in the carousel.
```typescript
this.carousel.prev();
```

#### Returns

`void`

#### Member Of

IgxCarouselComponent

***

### remove()

> **remove**(`slide`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:784](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L784)

Removes a slide from the carousel.
```typescript
this.carousel.remove(slide);
```

#### Parameters

##### slide

[`IgxSlideComponent`](IgxSlideComponent.md)

#### Returns

`void`

#### Member Of

IgxCarouselComponent

***

### select()

#### Call Signature

> **select**(`slide`, `direction?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:802](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L802)

Switches to the passed-in slide with a given `direction`.
```typescript
const slide = this.carousel.get(2);
this.carousel.select(slide, CarouselAnimationDirection.NEXT);
```

##### Parameters

###### slide

[`IgxSlideComponent`](IgxSlideComponent.md)

###### direction?

[`CarouselAnimationDirection`](../enumerations/CarouselAnimationDirection.md)

##### Returns

`void`

##### Member Of

IgxCarouselComponent

#### Call Signature

> **select**(`index`, `direction?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:811](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L811)

Switches to slide by index with a given `direction`.
```typescript
this.carousel.select(2, CarouselAnimationDirection.NEXT);
```

##### Parameters

###### index

`number`

###### direction?

[`CarouselAnimationDirection`](../enumerations/CarouselAnimationDirection.md)

##### Returns

`void`

##### Member Of

IgxCarouselComponent

***

### stop()

> **stop**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts:888](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel.component.ts#L888)

Stops slide transitions if the `pause` option is set to `true`.
No operation otherwise.
```typescript
 this.carousel.stop();
}
```

#### Returns

`void`

#### Member Of

IgxCarouselComponent
