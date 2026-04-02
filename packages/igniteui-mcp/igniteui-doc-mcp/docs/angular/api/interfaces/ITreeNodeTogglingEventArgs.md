# Interface: ITreeNodeTogglingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L93)

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

### node

> **node**: [`IgxTreeNode`](IgxTreeNode.md)\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L94)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)
