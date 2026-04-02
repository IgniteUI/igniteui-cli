# Interface: IgxTree

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L10)

## Properties

### activeNodeChanged

> **activeNodeChanged**: `EventEmitter`\<[`IgxTreeNode`](IgxTreeNode.md)\<`any`\>\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L31)

***

### animationSettings

> **animationSettings**: `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L19)

***

### expandIndicator

> **expandIndicator**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L18)

***

### nodeCollapsed

> **nodeCollapsed**: `EventEmitter`\<[`ITreeNodeToggledEventArgs`](ITreeNodeToggledEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L30)

***

### nodeCollapsing

> **nodeCollapsing**: `EventEmitter`\<[`ITreeNodeTogglingEventArgs`](ITreeNodeTogglingEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L29)

***

### nodeExpanded

> **nodeExpanded**: `EventEmitter`\<[`ITreeNodeToggledEventArgs`](ITreeNodeToggledEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L28)

***

### nodeExpanding

> **nodeExpanding**: `EventEmitter`\<[`ITreeNodeTogglingEventArgs`](ITreeNodeTogglingEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L27)

***

### nodeSelection

> **nodeSelection**: `EventEmitter`\<[`ITreeNodeSelectionEvent`](ITreeNodeSelectionEvent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L26)

***

### selection

> **selection**: [`IgxTreeSelectionType`](../type-aliases/IgxTreeSelectionType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L17)

***

### singleBranchExpand

> **singleBranchExpand**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L15)

***

### toggleNodeOnClick

> **toggleNodeOnClick**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L16)

## Methods

### collapseAll()

> **collapseAll**(`nodes`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L33)

#### Parameters

##### nodes

[`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

#### Returns

`void`

***

### deselectAll()

> **deselectAll**(`node?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L34)

#### Parameters

##### node?

[`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

#### Returns

`void`

***

### expandAll()

> **expandAll**(`nodes`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L32)

#### Parameters

##### nodes

[`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

#### Returns

`void`

***

### findNodes()

> **findNodes**(`searchTerm`, `comparer?`): [`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/common.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/common.ts#L35)

#### Parameters

##### searchTerm

`any`

##### comparer?

[`IgxTreeSearchResolver`](../type-aliases/IgxTreeSearchResolver.md)

#### Returns

[`IgxTreeNode`](IgxTreeNode.md)\<`any`\>[]
