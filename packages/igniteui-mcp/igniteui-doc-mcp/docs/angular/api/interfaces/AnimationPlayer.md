# Interface: AnimationPlayer

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L15)

## Properties

### animationEnd

> **animationEnd**: `EventEmitter`\<[`IBaseEventArgs`](IBaseEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L23)

Emits when the animation ends

***

### animationStart

> **animationStart**: `EventEmitter`\<[`IBaseEventArgs`](IBaseEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L19)

Emits when the animation starts

***

### position

> **position**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L27)

Current position of the animation.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L47)

Destroys the animation.

#### Returns

`void`

***

### finish()

> **finish**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L39)

Ends the animation

#### Returns

`void`

***

### hasStarted()

> **hasStarted**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L51)

Reports whether the animation has started.

#### Returns

`boolean`

***

### init()

> **init**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L31)

Initialize the animation

#### Returns

`void`

***

### play()

> **play**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L35)

Runs the animation

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/animation/animation.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/animation/animation.ts#L43)

Resets the animation to its initial state

#### Returns

`void`
