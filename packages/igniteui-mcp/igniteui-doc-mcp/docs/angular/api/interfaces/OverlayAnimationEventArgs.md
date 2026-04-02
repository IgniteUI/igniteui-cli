# Interface: OverlayAnimationEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L163)

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### animationPlayer

> **animationPlayer**: [`AnimationPlayer`](AnimationPlayer.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L167)

Animation player that will play the animation

***

### animationType

> **animationType**: `"open"` \| `"close"`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:169](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L169)

Type of animation to be played. It should be either 'open' or 'close'

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L165)

Id of the overlay generated with `attach()` method

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
