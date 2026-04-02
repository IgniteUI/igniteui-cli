# Interface: IStepChangingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts#L104)

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md).[`IBaseCancelableBrowserEventArgs`](IBaseCancelableBrowserEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`IBaseCancelableBrowserEventArgs`](IBaseCancelableBrowserEventArgs.md).[`cancel`](IBaseCancelableBrowserEventArgs.md#cancel)

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:424](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L424)

Browser event

#### Inherited from

[`IBaseCancelableBrowserEventArgs`](IBaseCancelableBrowserEventArgs.md).[`event`](IBaseCancelableBrowserEventArgs.md#event)

***

### newIndex

> **newIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts#L105)

***

### oldIndex

> **oldIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts#L106)

***

### owner

> **owner**: `IgxStepper`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/stepper/src/stepper/stepper.common.ts#L107)

Provides reference to the owner component.

#### Overrides

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
