# Interface: IBaseCancelableBrowserEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:427](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L427)

## Extends

- [`CancelableBrowserEventArgs`](CancelableBrowserEventArgs.md).[`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IStepChangingEventArgs`](IStepChangingEventArgs.md)
- [`ITreeNodeSelectionEvent`](ITreeNodeSelectionEvent.md)
- [`ITreeNodeEditingEvent`](ITreeNodeEditingEvent.md)
- [`ITreeNodeTogglingEventArgs`](ITreeNodeTogglingEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableBrowserEventArgs`](CancelableBrowserEventArgs.md).[`cancel`](CancelableBrowserEventArgs.md#cancel)

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:424](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L424)

Browser event

#### Inherited from

[`CancelableBrowserEventArgs`](CancelableBrowserEventArgs.md).[`event`](CancelableBrowserEventArgs.md#event)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
