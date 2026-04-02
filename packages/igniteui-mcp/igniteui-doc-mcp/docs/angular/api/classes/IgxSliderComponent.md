# Class: IgxSliderComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L38)

**Ignite UI for Angular Slider** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/slider/slider)

The Ignite UI Slider allows selection in a given range by moving the thumb along the track. The track
can be defined as continuous or stepped, and you can choose between single and range slider types.

Example:
```html
<igx-slider id="slider"
           [minValue]="0" [maxValue]="100"
           [continuous]=true [(ngModel)]="volume">
</igx-slider>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxSliderComponent**(): `IgxSliderComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:758](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L758)

#### Returns

`IgxSliderComponent`

## Properties

### dragFinished

> **dragFinished**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:696](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L696)

This event is emitted at the end of every slide interaction.
```typescript
public change(event){
   alert("The value has been changed!");
}
```
```html
<igx-slider (dragFinished)="change($event)" #slider [(ngModel)]="task.percentCompleted" [step]="5">
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L113)

Sets the value of the `id` attribute.
If not provided it will be automatically generated.
```html
<igx-slider [id]="'igx-slider-32'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
```

***

### lowerValueChange

> **lowerValueChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:668](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L668)

This event is emitted every time the lower value of a range slider is changed.
```typescript
public change(value){
   alert(`The lower value has been changed to ${value}`);
}
```
```html
<igx-slider [(lowerValue)]="model.lowervalue" (lowerValueChange)="change($event)" [step]="5">
```

***

### primaryTickLabels

> **primaryTickLabels**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:599](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L599)

show/hide primary tick labels
```html
<igx-slider [primaryTicks]="5" [primaryTickLabels]="false"></igx-slider>
```

***

### secondaryTickLabels

> **secondaryTickLabels**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:608](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L608)

show/hide secondary tick labels
```html
<igx-slider [secondaryTicks]="5" [secondaryTickLabels]="false"></igx-slider>
```

***

### showTicks

> **showTicks**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:590](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L590)

Show/hide slider ticks
```html
<igx-slier [showTicks]="true" [primaryTicks]="5"></igx-slier>
```

***

### thumbLabelVisibilityDuration

> **thumbLabelVisibilityDuration**: `number` = `750`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:122](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L122)

Sets the duration visibility of thumbs labels. The default value is 750 milliseconds.
```html
<igx-slider #slider [thumbLabelVisibilityDuration]="3000" [(ngModel)]="task.percentCompleted" [step]="5">
```

***

### tickLabelsOrientation

> **tickLabelsOrientation**: [`TickLabelsOrientation`](../type-aliases/TickLabelsOrientation.md) = `TickLabelsOrientation.Horizontal`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:632](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L632)

Changes tick labels rotation:
horizontal - The default rotation
toptobottom - Rotates tick labels vertically to 90deg
bottomtotop - Rotate tick labels vertically to -90deg
```html
<igx-slider [primaryTicks]="5" [secondaryTicks]="3" [tickLabelsOrientation]="tickLabelsOrientaiton"></igx-slider>
```

***

### ticksOrientation

> **ticksOrientation**: [`TicksOrientation`](../type-aliases/TicksOrientation.md) = `TicksOrientation.Bottom`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:620](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L620)

Changes ticks orientation:
bottom - The default orienation, below the slider track.
top - Above the slider track
mirror - combines top and bottom orientation.
```html
<igx-slider [primaryTicks]="5" [ticksOrientation]="ticksOrientation"></igx-slider>
```

***

### upperValueChange

> **upperValueChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:682](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L682)

This event is emitted every time the upper value of a range slider is changed.
```typescript
public change(value){
   alert(`The upper value has been changed to ${value}`);
}
```
```html
<igx-slider [(upperValue)]="model.uppervalue" (upperValueChange)="change($event)" [step]="5">
```

***

### valueChange

> **valueChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:654](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L654)

This event is emitted every time the value is changed.
```typescript
public change(event){
   alert("The value has been changed!");
}
```
```html
<igx-slider (valueChange)="change($event)" #slider [(ngModel)]="task.percentCompleted" [step]="5">
```

## Accessors

### context

#### Get Signature

> **get** **context**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L206)

Returns the template context corresponding
to [IgxThumbFromTemplateDirective](IgxThumbFromTemplateDirective.md) and [IgxThumbToTemplateDirective](IgxThumbToTemplateDirective.md) templates.

```typescript
return {
 $implicit // returns the value of the label,
 labels // returns the labels collection the user has passed.
}
```

##### Returns

`any`

***

### continuous

#### Get Signature

> **get** **continuous**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L287)

Returns if the IgxSliderComponent is set as continuous.
```typescript
@ViewChild("slider2")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let continuous = this.slider.continuous;
}
```

##### Returns

`boolean`

#### Set Signature

> **set** **continuous**(`continuous`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:300](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L300)

Sets the IgxSliderComponent as continuous.
By default is considered that the IgxSliderComponent is discrete.
Discrete IgxSliderComponent slider has step indicators over the track and visible thumb labels during interaction.
Continuous IgxSliderComponent does not have ticks and does not show bubble labels for values.
```html
<igx-slider #slider [continuous]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
```

##### Parameters

###### continuous

`boolean`

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:258](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L258)

Returns if the IgxSliderComponent is disabled.
```typescript
@ViewChild("slider2")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let isDisabled = this.slider.disabled;
}
```

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`disable`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:268](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L268)

Disables the component.
```html
<igx-slider #slider [disabled]="true" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
```

##### Parameters

###### disable

`boolean`

##### Returns

`void`

***

### isRange

#### Get Signature

> **get** **isRange**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:780](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L780)

Returns whether the `IgxSliderComponent` type is RANGE.
```typescript
 @ViewChild("slider")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let sliderRange = this.slider.isRange;
}
```

##### Returns

`boolean`

***

### labels

#### Get Signature

> **get** **labels**(): (`string` \| `number` \| `boolean`)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L177)

Enables `labelView`, by accepting a collection of primitive values with more than one element.
Each element will be equally spread over the slider and it will serve as a thumb label.
Once the property is set, it will precendence over [maxValue](#maxvalue), [minValue](#minvalue), [step](#step).
This means that the manipulation for those properties won't be allowed.

##### Returns

(`string` \| `number` \| `boolean`)[]

#### Set Signature

> **set** **labels**(`labels`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:181](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L181)

##### Parameters

###### labels

(`string` \| `number` \| `boolean`)[]

##### Returns

`void`

***

### labelsViewEnabled

#### Get Signature

> **get** **labelsViewEnabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:894](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L894)

Returns if label view is enabled.
If the [labels](#labels) is set, the view is automatically activated.
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
let labelView = this.slider.labelsViewEnabled;
```

##### Returns

`boolean`

***

### lowerBound

#### Get Signature

> **get** **lowerBound**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:412](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L412)

Returns the lower boundary of settable values of the `IgxSliderComponent`.
If not set, will return `minValue`.
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let sliderLowBound = this.slider.lowerBound;
}
```

##### Returns

`number`

#### Set Signature

> **set** **lowerBound**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:428](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L428)

Sets the lower boundary of settable values of the `IgxSliderComponent`.
If not set is the same as min value.
```html
<igx-slider [step]="5" [lowerBound]="20">
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### lowerLabel

#### Get Signature

> **get** **lowerLabel**(): `string` \| `number` \| `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:869](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L869)

Returns the value corresponding the lower label.
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
let label = this.slider.lowerLabel;
```

##### Returns

`string` \| `number` \| `boolean`

***

### lowerValue

#### Get Signature

> **get** **lowerValue**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:794](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L794)

Returns the lower value of a RANGE `IgxSliderComponent`.
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
public lowValue(event){
   let sliderLowValue = this.slider.lowerValue;
}
```

##### Returns

`number`

#### Set Signature

> **set** **lowerValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:813](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L813)

Sets the lower value of a RANGE `IgxSliderComponent`.
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
public lowValue(event){
   this.slider.lowerValue = value;
}
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### maxValue

#### Get Signature

> **get** **maxValue**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:365](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L365)

Returns the maximum displayed track value for the IgxSliderComponent.
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let sliderMax = this.slider.maxValue;
}
 ```

##### Returns

`number`

#### Set Signature

> **set** **maxValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:379](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L379)

Sets the maximal displayed track value for the `IgxSliderComponent`.
The default maximum value is 100.
```html
<igx-slider [type]="sliderType" [minValue]="56" [maxValue]="256">
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### minValue

#### Get Signature

> **get** **minValue**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:317](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L317)

Returns the minimal displayed track value of the `IgxSliderComponent`.
```typescript
 @ViewChild("slider2")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let sliderMin = this.slider.minValue;
}
```

##### Returns

`number`

#### Set Signature

> **set** **minValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:333](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L333)

Sets the minimal displayed track value for the `IgxSliderComponent`.
The default minimal value is 0.
```html
<igx-slider [type]="sliderType" [minValue]="56" [maxValue]="100">
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### primaryTicks

#### Get Signature

> **get** **primaryTicks**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:535](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L535)

Returns the number of the presented primary ticks.
```typescript
const primaryTicks = this.slider.primaryTicks;
```

##### Returns

`number`

#### Set Signature

> **set** **primaryTicks**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:549](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L549)

Sets the number of primary ticks. If @labels is enabled, this property won't function.
Insted enable ticks by [showTicks](#showticks) property.
```typescript
this.slider.primaryTicks = 5;
```

##### Parameters

###### val

`number`

##### Returns

`void`

***

### secondaryTicks

#### Get Signature

> **get** **secondaryTicks**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:564](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L564)

Returns the number of the presented secondary ticks.
```typescript
const secondaryTicks = this.slider.secondaryTicks;
```

##### Returns

`number`

#### Set Signature

> **set** **secondaryTicks**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:575](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L575)

Sets the number of secondary ticks. The property functions even when [labels](#labels) is enabled,
but all secondary ticks won't present any tick labels.
```typescript
this.slider.secondaryTicks = 5;
```

##### Parameters

###### val

`number`

##### Returns

`void`

***

### step

#### Get Signature

> **get** **step**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:243](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L243)

Returns the incremental/decremental dragging step of the IgxSliderComponent.
```typescript
@ViewChild("slider2")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let step = this.slider.step;
}
```

##### Returns

`number`

#### Set Signature

> **set** **step**(`step`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L221)

Sets the incremental/decremental step of the value when dragging the thumb.
The default step is 1, and step should not be less or equal than 0.
```html
<igx-slider #slider [(ngModel)]="task.percentCompleted" [step]="5">
```

##### Parameters

###### step

`number`

##### Returns

`void`

***

### type

#### Get Signature

> **get** **type**(): [`IgxSliderType`](../type-aliases/IgxSliderType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L143)

Gets the type of the `IgxSliderComponent`.
The slider can be IgxSliderType.SLIDER(default) or IgxSliderType.RANGE.
```typescript
@ViewChild("slider2")
public slider: IgxSliderComponent;
ngAfterViewInit(){
    let type = this.slider.type;
}

##### Returns

[`IgxSliderType`](../type-aliases/IgxSliderType.md)

#### Set Signature

> **set** **type**(`type`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L157)

Sets the type of the `IgxSliderComponent`.
The slider can be IgxSliderType.SLIDER(default) or IgxSliderType.RANGE.
```typescript
sliderType: IgxSliderType = IgxSliderType.RANGE;
```
```html
<igx-slider #slider2 [type]="sliderType" [(ngModel)]="rangeValue" [minValue]="0" [maxValue]="100">
```

##### Parameters

###### type

[`IgxSliderType`](../type-aliases/IgxSliderType.md)

##### Returns

`void`

***

### upperBound

#### Get Signature

> **get** **upperBound**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:451](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L451)

Returns the upper boundary of settable values of the `IgxSliderComponent`.
If not set, will return `maxValue`
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
ngAfterViewInit(){
   let sliderUpBound = this.slider.upperBound;
}
```

##### Returns

`number`

#### Set Signature

> **set** **upperBound**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:467](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L467)

Sets the upper boundary of the `IgxSliderComponent`.
If not set is the same as max value.
```html
<igx-slider [step]="5" [upperBound]="20">
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### upperLabel

#### Get Signature

> **get** **upperLabel**(): `string` \| `number` \| `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:881](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L881)

Returns the value corresponding the upper label.
```typescript
@ViewChild("slider")
public slider: IgxSliderComponent;
let label = this.slider.upperLabel;
```

##### Returns

`string` \| `number` \| `boolean`

***

### upperValue

#### Get Signature

> **get** **upperValue**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:833](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L833)

Returns the upper value of a RANGE `IgxSliderComponent`.
Returns `value` of a SLIDER `IgxSliderComponent`
```typescript
 @ViewChild("slider2")
public slider: IgxSliderComponent;
public upperValue(event){
    let upperValue = this.slider.upperValue;
}
```

##### Returns

`number`

#### Set Signature

> **set** **upperValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:852](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L852)

Sets the upper value of a RANGE `IgxSliderComponent`.
```typescript
 @ViewChild("slider2")
public slider: IgxSliderComponent;
public upperValue(event){
    this.slider.upperValue = value;
}
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `number` \| [`IRangeSliderValue`](../interfaces/IRangeSliderValue.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:490](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L490)

Returns the slider value. If the slider is of type [IgxSliderType.SLIDER](../variables/IgxSliderType.md#slider) the returned value is number.
If the slider type is [IgxSliderType.RANGE](../variables/IgxSliderType.md#range).
The returned value represents an object of [lowerValue](#lowervalue) and [upperValue](#uppervalue).
```typescript
@ViewChild("slider2")
public slider: IgxSliderComponent;
public sliderValue(event){
    let sliderVal = this.slider.value;
}
```

##### Returns

`number` \| [`IRangeSliderValue`](../interfaces/IRangeSliderValue.md)

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:519](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L519)

Sets the slider value.
If the slider is of type [IgxSliderType.SLIDER](../variables/IgxSliderType.md#slider).
The argument is number. By default the [value](#valuevalue-1) gets the [lowerBound](#lowerbound).
If the slider type is [IgxSliderType.RANGE](../variables/IgxSliderType.md#range) the argument
represents an object of [lowerValue](#lowervalue) and [upperValue](#uppervalue) properties.
By default the object is associated with the [lowerBound](#lowerbound) and [upperBound](#upperbound) property values.
```typescript
rangeValue = {
  lower: 30,
  upper: 60
};
```
```html
<igx-slider [type]="sliderType" [(ngModel)]="rangeValue" [minValue]="56" [maxValue]="256">
```

##### Parameters

###### value

`number` \| [`IRangeSliderValue`](../interfaces/IRangeSliderValue.md)

##### Returns

`void`

## Methods

### ngAfterContentInit()

> **ngAfterContentInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:945](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L945)

#### Returns

`void`

***

### onPointerDown()

> `protected` **onPointerDown**(`$event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:1126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L1126)

#### Parameters

##### $event

`PointerEvent`

#### Returns

`void`

***

### onPointerUp()

> `protected` **onPointerUp**(`$event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:1148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L1148)

#### Parameters

##### $event

`PointerEvent`

#### Returns

`void`

***

### setValue()

> **setValue**(`value`, `triggerChange`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/slider/src/slider/slider.component.ts:1105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/slider/src/slider/slider.component.ts#L1105)

#### Parameters

##### value

`number` \| [`IRangeSliderValue`](../interfaces/IRangeSliderValue.md)

##### triggerChange

`boolean`

#### Returns

`void`
