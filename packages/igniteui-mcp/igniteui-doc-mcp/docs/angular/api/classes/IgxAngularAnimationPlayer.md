# Class: IgxAngularAnimationPlayer

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L6)

## Implements

- [`AnimationPlayer`](../interfaces/AnimationPlayer.md)

## Constructors

### Constructor

> **new IgxAngularAnimationPlayer**(`internalPlayer`): `IgxAngularAnimationPlayer`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L19)

#### Parameters

##### internalPlayer

`AngularAnimationPlayer`

#### Returns

`IgxAngularAnimationPlayer`

## Properties

### animationEnd

> **animationEnd**: `EventEmitter`\<[`IBaseEventArgs`](../interfaces/IBaseEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L9)

Emits when the animation ends

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`animationEnd`](../interfaces/AnimationPlayer.md#animationend)

***

### animationStart

> **animationStart**: `EventEmitter`\<[`IBaseEventArgs`](../interfaces/IBaseEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L8)

Emits when the animation starts

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`animationStart`](../interfaces/AnimationPlayer.md#animationstart)

## Accessors

### position

#### Get Signature

> **get** **position**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L11)

Current position of the animation.

##### Returns

`number`

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L15)

Current position of the animation.

##### Parameters

###### value

`number`

##### Returns

`void`

Current position of the animation.

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`position`](../interfaces/AnimationPlayer.md#position)

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L51)

Destroys the animation.

#### Returns

`void`

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`destroy`](../interfaces/AnimationPlayer.md#destroy)

***

### finish()

> **finish**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L40)

Ends the animation

#### Returns

`void`

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`finish`](../interfaces/AnimationPlayer.md#finish)

***

### hasStarted()

> **hasStarted**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L55)

Reports whether the animation has started.

#### Returns

`boolean`

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`hasStarted`](../interfaces/AnimationPlayer.md#hasstarted)

***

### init()

> **init**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L31)

Initialize the animation

#### Returns

`void`

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`init`](../interfaces/AnimationPlayer.md#init)

***

### play()

> **play**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L35)

Runs the animation

#### Returns

`void`

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`play`](../interfaces/AnimationPlayer.md#play)

***

### reset()

> **reset**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/angular-animation-player.ts#L45)

Resets the animation to its initial state

#### Returns

`void`

#### Implementation of

[`AnimationPlayer`](../interfaces/AnimationPlayer.md).[`reset`](../interfaces/AnimationPlayer.md#reset)
