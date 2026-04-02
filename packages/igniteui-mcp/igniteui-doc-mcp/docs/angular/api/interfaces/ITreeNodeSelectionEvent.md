# Interface: ITreeNodeSelectionEvent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L75)

## Extends

- [`IBaseCancelableBrowserEventArgs`](IBaseCancelableBrowserEventArgs.md)

## Properties

### added

> **added**: [`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L78)

***

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`IBaseCancelableBrowserEventArgs`](IBaseCancelableBrowserEventArgs.md).[`cancel`](IBaseCancelableBrowserEventArgs.md#cancel)

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L80)

Browser event

#### Overrides

[`IBaseCancelableBrowserEventArgs`](IBaseCancelableBrowserEventArgs.md).[`event`](IBaseCancelableBrowserEventArgs.md#event)

***

### newSelection

> **newSelection**: [`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L77)

***

### oldSelection

> **oldSelection**: [`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L76)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseCancelableBrowserEventArgs`](IBaseCancelableBrowserEventArgs.md).[`owner`](IBaseCancelableBrowserEventArgs.md#owner)

***

### removed

> **removed**: [`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L79)
