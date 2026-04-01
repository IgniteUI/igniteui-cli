# Class: IgxStepComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L41)

The IgxStepComponent is used within the `igx-stepper` element and it holds the content of each step.
It also supports custom indicators, title and subtitle.

## Igx Module

IgxStepperModule

## Igx Keywords

step

## Example

```html
 <igx-stepper>
 ...
   <igx-step [active]="true" [completed]="true">
     ...
   </igx-step>
 ...
 </igx-stepper>
```

## Implements

- `IgxStep`
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxStepComponent**(): `IgxStepComponent`

#### Returns

`IgxStepComponent`

#### Inherited from

`ToggleAnimationPlayer.constructor`

## Properties

### \_animationSettings

> `protected` **\_animationSettings**: `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L63)

#### Implementation of

`IgxStep._animationSettings`

#### Inherited from

`ToggleAnimationPlayer._animationSettings`

***

### activeChange

> **activeChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:238](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L238)

Emitted when the step's `active` property changes. Can be used for two-way binding.

```html
<igx-step [(active)]="this.isActive">
</igx-step>
```

```typescript
const step: IgxStepComponent = this.stepper.step[0];
step.activeChange.subscribe((e: boolean) => console.log("Step active state change to ", e))
```

#### Implementation of

`IgxStep.activeChange`

***

### animationService

> `protected` **animationService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L37)

#### Implementation of

[`IgxTreeNodeComponent`](IgxTreeNodeComponent.md).[`animationService`](IgxTreeNodeComponent.md#animationservice)

#### Inherited from

[`IgxTreeNodeComponent`](IgxTreeNodeComponent.md).[`animationService`](IgxTreeNodeComponent.md#animationservice)

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L43)

#### Implementation of

`IgxStep.cdr`

***

### completed

> **completed**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L112)

Get/Set whether the step is completed.

#### Remarks

When set to `true` the following separator is styled `solid`.

```html
<igx-stepper>
...
    <igx-step [completed]="true"></igx-step>
...
</igx-stepper>
```

```typescript
this.stepper.steps[1].completed = true;
```

#### Implementation of

`IgxStep.completed`

***

### destroy$

> `protected` **destroy$**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L61)

#### Implementation of

`IgxStep.destroy$`

#### Inherited from

`ToggleAnimationPlayer.destroy$`

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L63)

Get/Set the `id` of the step component.
Default value is `"igx-step-0"`;
```html
<igx-step id="my-first-step"></igx-step>
```
```typescript
const stepId = this.step.id;
```

#### Implementation of

`IgxStep.id`

***

### optional

> **optional**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L154)

Get/Set whether the step is optional.

#### Remarks

Optional steps validity does not affect the default behavior when the stepper is in linear mode i.e.
if optional step is invalid the user could still move to the next step.

```html
<igx-step [optional]="true"></igx-step>
```
```typescript
this.stepper.steps[1].optional = true;
```

#### Implementation of

`IgxStep.optional`

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L45)

***

### players

> `protected` **players**: `Map`\<`string`, [`AnimationPlayer`](../interfaces/AnimationPlayer.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L62)

#### Implementation of

`IgxStep.players`

#### Inherited from

`ToggleAnimationPlayer.players`

***

### renderer

> **renderer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L44)

***

### stepper

> **stepper**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L42)

***

### stepperService

> `protected` **stepperService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L46)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:179](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L179)

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L171)

Get/Set the active state of the step

```html
<igx-step [active]="true"></igx-step>
```

```typescript
this.stepper.steps[1].active = true;
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

`IgxStep.active`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L88)

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:81](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L81)

Get/Set whether the step is interactable.

```html
<igx-stepper>
...
    <igx-step [disabled]="true"></igx-step>
...
</igx-stepper>
```

```typescript
this.stepper.steps[1].disabled = true;
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

`IgxStep.disabled`

***

### index

#### Get Signature

> **get** **index**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:268](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L268)

Get the step index inside of the stepper.

```typescript
const step = this.stepper.steps[1];
const stepIndex: number = step.index;
```

##### Returns

`number`

#### Implementation of

`IgxStep.index`

***

### isValid

#### Get Signature

> **get** **isValid**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L128)

Get/Set whether the step is valid.
```html
<igx-step [isValid]="form.form.valid">
     ...
     <div igxStepContent>
         <form #form="ngForm">
             ...
         </form>
     </div>
</igx-step>
```

##### Returns

`boolean`

#### Set Signature

> **set** **isValid**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L132)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

`IgxStep.isValid`

***

### tabIndex

#### Get Signature

> **get** **tabIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts:190](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/step/step.component.ts#L190)

##### Returns

`number`

#### Implementation of

`IgxStep.tabIndex`
