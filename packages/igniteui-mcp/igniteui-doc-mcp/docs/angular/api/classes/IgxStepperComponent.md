# Class: IgxStepperComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L72)

IgxStepper provides a wizard-like workflow by dividing content into logical steps.

## Igx Module

IgxStepperModule

## Igx Keywords

stepper

## Igx Group

Layouts

## Remarks

The Ignite UI for Angular Stepper component allows the user to navigate between multiple steps.
It supports horizontal and vertical orientation as well as keyboard navigation and provides API methods to control the active step.
The component offers keyboard navigation and API to control the active step.

## Example

```html
<igx-stepper>
 <igx-step [active]="true">
     <igx-icon igxStepIndicator>home</igx-icon>
     <p igxStepTitle>Home</p>
     <div igxStepContent>
        ...
     </div>
 </igx-step>
 <igx-step [optional]="true">
     <div igxStepContent>
         ...
     </div>
 </igx-step>
 <igx-step>
     <div igxStepContent>
         ...
     </div>
 </igx-step>
</igx-stepper>
```

## Implements

- `IgxStepper`
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxStepperComponent**(): `IgxStepperComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:331](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L331)

#### Returns

`IgxStepperComponent`

#### Overrides

`IgxCarouselComponentBase.constructor`

## Properties

### activeStepChanged

> **activeStepChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:284](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L284)

Emitted when the active step is changed.

#### Example

```
<igx-stepper (activeStepChanged)="handleActiveStepChanged($event)"></igx-stepper>
```

#### Implementation of

`IgxStepper.activeStepChanged`

***

### activeStepChanging

> **activeStepChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:273](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L273)

Emitted when the stepper's active step is changing.

```html
<igx-stepper (activeStepChanging)="handleActiveStepChanging($event)">
</igx-stepper>
```

```typescript
public handleActiveStepChanging(event: IStepChangingEventArgs) {
 if (event.newIndex < event.oldIndex) {
     event.cancel = true;
 }
}
```

#### Implementation of

`IgxStepper.activeStepChanging`

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts#L25)

#### Implementation of

`IgxStepper.cdr`

#### Inherited from

`IgxCarouselComponentBase.cdr`

***

### contentTop

> **contentTop**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:226](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L226)

Get/Set whether the content is displayed above the steps.

#### Remarks

Default value is `false` and the content is below the steps.

```typescript
this.stepper.contentTop = true;
```

#### Implementation of

`IgxStepper.contentTop`

***

### stepType

> **stepType**: [`IgxStepType`](../type-aliases/IgxStepType.md) = `IgxStepType.Full`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L213)

Get/Set the type of the steps.

```typescript
this.stepper.stepType = IgxStepType.Indicator;
```

#### Implementation of

`IgxStepper.stepType`

***

### titlePosition

> **titlePosition**: [`IgxStepperTitlePosition`](../type-aliases/IgxStepperTitlePosition.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:240](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L240)

Get/Set the position of the steps title.

#### Remarks

The default value when the stepper is horizontally orientated is `bottom`.
In vertical layout the default title position is `end`.

```typescript
this.stepper.titlePosition = IgxStepperTitlePosition.Top;
```

#### Implementation of

`IgxStepper.titlePosition`

## Accessors

### animationDuration

#### Get Signature

> **get** **animationDuration**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:141](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L141)

Get/Set the animation duration.
```html
<igx-stepper [animationDuration]="500">
<igx-stepper>
```

##### Returns

`number`

#### Set Signature

> **set** **animationDuration**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L145)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IgxStepper.animationDuration`

***

### horizontalAnimationType

#### Get Signature

> **get** **horizontalAnimationType**(): [`HorizontalAnimationType`](../type-aliases/HorizontalAnimationType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L123)

Get/Set the animation type of the stepper when the orientation direction is horizontal.

##### Remarks

Default value is `grow`. Other possible values are `fade` and `none`.

```html
<igx-stepper animationType="none">
<igx-stepper>
```

##### Returns

[`HorizontalAnimationType`](../type-aliases/HorizontalAnimationType.md)

#### Set Signature

> **set** **horizontalAnimationType**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L127)

##### Parameters

###### value

[`HorizontalAnimationType`](../type-aliases/HorizontalAnimationType.md)

##### Returns

`void`

#### Implementation of

`IgxStepper.horizontalAnimationType`

***

### linear

#### Get Signature

> **get** **linear**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:164](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L164)

Get/Set whether the stepper is linear.

##### Remarks

If the stepper is in linear mode and if the active step is valid only then the user is able to move forward.

```html
<igx-stepper [linear]="true"></igx-stepper>
```

##### Returns

`boolean`

#### Set Signature

> **set** **linear**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:168](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L168)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

`IgxStepper.linear`

***

### orientation

#### Get Signature

> **get** **orientation**(): [`IgxStepperOrientation`](../type-aliases/IgxStepperOrientation.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L189)

Get/Set the stepper orientation.

```typescript
this.stepper.orientation = IgxStepperOrientation.Vertical;
```

##### Returns

[`IgxStepperOrientation`](../type-aliases/IgxStepperOrientation.md)

#### Set Signature

> **set** **orientation**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L193)

##### Parameters

###### value

[`IgxStepperOrientation`](../type-aliases/IgxStepperOrientation.md)

##### Returns

`void`

#### Implementation of

`IgxStepper.orientation`

***

### steps

#### Get Signature

> **get** **steps**(): [`IgxStepComponent`](IgxStepComponent.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:309](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L309)

Get all steps.

```typescript
const steps: IgxStepComponent[] = this.stepper.steps;
```

##### Returns

[`IgxStepComponent`](IgxStepComponent.md)[]

#### Implementation of

`IgxStepper.steps`

***

### verticalAnimationType

#### Get Signature

> **get** **verticalAnimationType**(): [`VerticalAnimationType`](../type-aliases/VerticalAnimationType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:89](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L89)

Get/Set the animation type of the stepper when the orientation direction is vertical.

##### Remarks

Default value is `grow`. Other possible values are `fade` and `none`.

```html
<igx-stepper verticalAnimationType="none">
<igx-stepper>
```

##### Returns

[`VerticalAnimationType`](../type-aliases/VerticalAnimationType.md)

#### Set Signature

> **set** **verticalAnimationType**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L93)

##### Parameters

###### value

[`VerticalAnimationType`](../type-aliases/VerticalAnimationType.md)

##### Returns

`void`

#### Implementation of

`IgxStepper.verticalAnimationType`

## Methods

### getCurrentElement()

> `protected` **getCurrentElement**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:452](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L452)

#### Returns

`HTMLElement`

#### Implementation of

`IgxStepper.getCurrentElement`

#### Overrides

`IgxCarouselComponentBase.getCurrentElement`

***

### getPreviousElement()

> `protected` **getPreviousElement**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:448](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L448)

#### Returns

`HTMLElement`

#### Implementation of

`IgxStepper.getPreviousElement`

#### Overrides

`IgxCarouselComponentBase.getPreviousElement`

***

### navigateTo()

> **navigateTo**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:394](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L394)

Activates the step at a given index.

```typescript
this.stepper.navigateTo(1);
```

#### Parameters

##### index

`number`

#### Returns

`void`

#### Implementation of

`IgxStepper.navigateTo`

***

### next()

> **next**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:409](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L409)

Activates the next enabled step.

```typescript
this.stepper.next();
```

#### Returns

`void`

#### Implementation of

`IgxStepper.next`

***

### prev()

> **prev**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:420](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L420)

Activates the previous enabled step.

```typescript
this.stepper.prev();
```

#### Returns

`void`

#### Implementation of

`IgxStepper.prev`

***

### reset()

> **reset**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts:433](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.component.ts#L433)

Resets the stepper to its initial state i.e. activates the first step.

#### Returns

`void`

#### Remarks

The steps' content will not be automatically reset.
```typescript
this.stepper.reset();
```

#### Implementation of

`IgxStepper.reset`
