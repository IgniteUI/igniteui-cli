# Class: IgxSlideComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L22)

A slide component that usually holds an image and/or a caption text.
IgxSlideComponent is usually a child component of an IgxCarouselComponent.

```
<igx-slide [input bindings] >
   <ng-content></ng-content>
</igx-slide>
```

## Export

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxSlideComponent**(): `IgxSlideComponent`

#### Returns

`IgxSlideComponent`

## Properties

### cssClass

> **cssClass**: `string` = `'igx-slide'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L94)

Returns the class of the slide component.
```typescript
let class =  this.slide.cssClass;
```

#### Memberof

IgxSlideComponent

***

### direction

> **direction**: [`CarouselAnimationDirection`](../enumerations/CarouselAnimationDirection.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L47)

Gets/sets the target `direction` for the slide.
```html
<igx-carousel>
 <igx-slide direction="NEXT"></igx-slide>
<igx-carousel>
```

#### Member Of

IgxSlideComponent

#### Implementation of

`IgxSlideComponentBase.direction`

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L35)

Gets/sets the `index` of the slide inside the carousel.
```html
<igx-carousel>
 <igx-slide index="1"></igx-slide>
<igx-carousel>
```

#### Member Of

IgxSlideComponent

***

### previous

> **previous**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L125)

#### Implementation of

`IgxSlideComponentBase.previous`

***

### tab

> **tab**: `string` = `'tabpanel'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L79)

Returns the `role` of the slide component.
By default is set to `tabpanel`

#### Memberof

IgxSlideComponent

***

### total

> **total**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L50)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L115)

Gets/sets the `active` state of the slide.
```html
<igx-carousel>
 <igx-slide [active] ="false"></igx-slide>
<igx-carousel>
```

Two-way data binding.
```html
<igx-carousel>
 <igx-slide [(active)] ="model.isActive"></igx-slide>
<igx-carousel>
```

##### Memberof

IgxSlideComponent

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L119)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L143)

Returns a reference to the carousel element in the DOM.
```typescript
let nativeElement =  this.slide.nativeElement;
```

##### Memberof

IgxSlideComponent

##### Returns

`any`

***

### tabIndex

#### Get Signature

> **get** **tabIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L62)

Returns the `tabIndex` of the slide component.
```typescript
let tabIndex =  this.carousel.tabIndex;
```

##### Memberof

IgxSlideComponent

##### Deprecated

in version 19.2.0.

##### Returns

`number`

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/slide.component.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/slide.component.ts#L154)

#### Returns

`void`
