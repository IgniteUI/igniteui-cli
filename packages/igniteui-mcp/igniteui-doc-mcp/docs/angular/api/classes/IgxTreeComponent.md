# Class: IgxTreeComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L80)

IgxTreeComponent allows a developer to show a set of nodes in a hierarchical fashion.

## Igx Module

IgxTreeModule

## Igx Keywords

tree

## Igx Theme

igx-tree-theme

## Igx Group

Grids & Lists

## Remark

The Angular Tree Component allows users to represent hierarchical data in a tree-view structure,
maintaining parent-child relationships, as well as to define static tree-view structure without a corresponding data model.
Its primary purpose is to allow end-users to visualize and navigate within hierarchical data structures.
The Ignite UI for Angular Tree Component also provides load on demand capabilities, item activation,
bi-state and cascading selection of items through built-in checkboxes, built-in keyboard navigation and more.

## Example

```html
<igx-tree>
  <igx-tree-node>
     I am a parent node 1
     <igx-tree-node>
         I am a child node 1
     </igx-tree-node>
     ...
  </igx-tree-node>
	 ...
</igx-tree>
```

## Implements

- [`IgxTree`](../interfaces/IgxTree.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxTreeComponent**(): `IgxTreeComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:315](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L315)

#### Returns

`IgxTreeComponent`

## Properties

### activeNodeChanged

> **activeNodeChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:264](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L264)

Emitted when the active node is changed.

#### Example

```
<igx-tree (activeNodeChanged)="activeNodeChanged($event)"></igx-tree>
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`activeNodeChanged`](../interfaces/IgxTree.md#activenodechanged)

***

### animationSettings

> **animationSettings**: `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:159](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L159)

Get/Set the animation settings that branches should use when expanding/collpasing.

```html
<igx-tree [animationSettings]="customAnimationSettings">
</igx-tree>
```

```typescript
const animationSettings: ToggleAnimationSettings = {
     openAnimation: growVerIn,
     closeAnimation: growVerOut
};

this.tree.animationSettings = animationSettings;
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`animationSettings`](../interfaces/IgxTree.md#animationsettings)

***

### cssClass

> **cssClass**: `string` = `'igx-tree'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:89](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L89)

***

### expandIndicator

> **expandIndicator**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:277](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L277)

A custom template to be used for the expand indicator of nodes
```html
<igx-tree>
 <ng-template igxTreeExpandIndicator let-expanded>
     <igx-icon>{{ expanded ? "close_fullscreen": "open_in_full"}}</igx-icon>
 </ng-template>
</igx-tree>
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`expandIndicator`](../interfaces/IgxTree.md#expandindicator)

***

### nodeCollapsed

> **nodeCollapsed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:253](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L253)

Emitted when a node is collapsed, after it finishes

#### Example

```html
<igx-tree (nodeCollapsed)="handleNodeCollapsed($event)">
</igx-tree>
```
```typescript
public handleNodeCollapsed(event: ITreeNodeToggledEventArgs) {
 const collapsedNode: IgxTreeNode<any> = event.node;
 console.log("Node is collapsed: ", collapsedNode.data);
}
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`nodeCollapsed`](../interfaces/IgxTree.md#nodecollapsed)

***

### nodeCollapsing

> **nodeCollapsing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:236](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L236)

Emitted when a node is collapsing, before it finishes

```html
<igx-tree (nodeCollapsing)="handleNodeCollapsing($event)">
</igx-tree>
```

```typescript
public handleNodeCollapsing(event: ITreeNodeTogglingEventArgs) {
 const collapsedNode: IgxTreeNode<any> = event.node;
 if (collapsedNode.alwaysOpen) {
     event.cancel = true;
 }
}
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`nodeCollapsing`](../interfaces/IgxTree.md#nodecollapsing)

***

### nodeExpanded

> **nodeExpanded**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:217](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L217)

Emitted when a node is expanded, after it finishes

```html
<igx-tree (nodeExpanded)="handleNodeExpanded($event)">
</igx-tree>
```

```typescript
public handleNodeExpanded(event: ITreeNodeToggledEventArgs) {
 const expandedNode: IgxTreeNode<any> = event.node;
 console.log("Node is expanded: ", expandedNode.data);
}
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`nodeExpanded`](../interfaces/IgxTree.md#nodeexpanded)

***

### nodeExpanding

> **nodeExpanding**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:200](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L200)

Emitted when a node is expanding, before it finishes

```html
<igx-tree (nodeExpanding)="handleNodeExpanding($event)">
</igx-tree>
```

```typescript
public handleNodeExpanding(event: ITreeNodeTogglingEventArgs) {
 const expandedNode: IgxTreeNode<any> = event.node;
 if (expandedNode.disabled) {
     event.cancel = true;
 }
}
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`nodeExpanding`](../interfaces/IgxTree.md#nodeexpanding)

***

### nodeSelection

> **nodeSelection**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:181](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L181)

Emitted when the node selection is changed through interaction

```html
<igx-tree (nodeSelection)="handleNodeSelection($event)">
</igx-tree>
```

```typescript
public handleNodeSelection(event: ITreeNodeSelectionEvent) {
 const newSelection: IgxTreeNode<any>[] = event.newSelection;
 const added: IgxTreeNode<any>[] = event.added;
 console.log("New selection will be: ", newSelection);
 console.log("Added nodes: ", event.added);
}
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`nodeSelection`](../interfaces/IgxTree.md#nodeselection)

***

### singleBranchExpand

> **singleBranchExpand**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L123)

Get/Set how the tree should handle branch expansion.
If set to `true`, only a single branch can be expanded at a time, collapsing all others

```html
<igx-tree [singleBranchExpand]="true">
...
</igx-tree>
```

```typescript
const tree: IgxTree = this.tree;
this.tree.singleBranchExpand = false;
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`singleBranchExpand`](../interfaces/IgxTree.md#singlebranchexpand)

***

### toggleNodeOnClick

> **toggleNodeOnClick**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:139](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L139)

Get/Set if nodes should be expanded/collapsed when clicking over them.

```html
<igx-tree [toggleNodeOnClick]="true">
...
</igx-tree>
```

```typescript
const tree: IgxTree = this.tree;
this.tree.toggleNodeOnClick = false;
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`toggleNodeOnClick`](../interfaces/IgxTree.md#togglenodeonclick)

## Accessors

### rootNodes

#### Get Signature

> **get** **rootNodes**(): [`IgxTreeNodeComponent`](IgxTreeNodeComponent.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:294](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L294)

Returns all **root level** nodes

```typescript
const tree: IgxTree = this.tree;
const rootNodes: IgxTreeNodeComponent<any>[] = tree.rootNodes;
```

##### Returns

[`IgxTreeNodeComponent`](IgxTreeNodeComponent.md)\<`any`\>[]

#### Implementation of

`IgxTree.rootNodes`

***

### selection

#### Get Signature

> **get** **selection**(): [`IgxTreeSelectionType`](../type-aliases/IgxTreeSelectionType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:99](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L99)

Gets/Sets tree selection mode

##### Remarks

By default the tree selection mode is 'None'

##### Returns

[`IgxTreeSelectionType`](../type-aliases/IgxTreeSelectionType.md)

#### Set Signature

> **set** **selection**(`selectionMode`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L103)

##### Parameters

###### selectionMode

[`IgxTreeSelectionType`](../type-aliases/IgxTreeSelectionType.md)

##### Returns

`void`

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`selection`](../interfaces/IgxTree.md#selection)

## Methods

### collapseAll()

> **collapseAll**(`nodes?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:353](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L353)

Collapses all of the passed nodes.
If no nodes are passed, collapses ALL nodes

#### Parameters

##### nodes?

[`IgxTreeNode`](../interfaces/IgxTreeNode.md)\<`any`\>[]

nodes to be collapsed

```typescript
const targetNodes: IgxTreeNode<any> = this.tree.findNodes(true, (_data: any, node: IgxTreeNode<any>) => node.data.collapsible);
tree.collapseAll(nodes);
```

#### Returns

`void`

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`collapseAll`](../interfaces/IgxTree.md#collapseall)

***

### deselectAll()

> **deselectAll**(`nodes?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:371](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L371)

Deselect all nodes if the nodes collection is empty. Otherwise, deselect the nodes in the nodes collection.

#### Parameters

##### nodes?

[`IgxTreeNodeComponent`](IgxTreeNodeComponent.md)\<`any`\>[]

#### Returns

`void`

#### Example

```typescript
 const arr = [
     this.tree.nodes.toArray()[0],
     this.tree.nodes.toArray()[1]
 ];
 this.tree.deselectAll(arr);
```

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`deselectAll`](../interfaces/IgxTree.md#deselectall)

***

### expandAll()

> **expandAll**(`nodes?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:337](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L337)

Expands all of the passed nodes.
If no nodes are passed, expands ALL nodes

#### Parameters

##### nodes?

[`IgxTreeNode`](../interfaces/IgxTreeNode.md)\<`any`\>[]

nodes to be expanded

```typescript
const targetNodes: IgxTreeNode<any> = this.tree.findNodes(true, (_data: any, node: IgxTreeNode<any>) => node.data.expandable);
tree.expandAll(nodes);
```

#### Returns

`void`

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`expandAll`](../interfaces/IgxTree.md#expandall)

***

### findNodes()

> **findNodes**(`searchTerm`, `comparer?`): [`IgxTreeNodeComponent`](IgxTreeNodeComponent.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree.component.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree.component.ts#L411)

Returns all of the nodes that match the passed searchTerm.
Accepts a custom comparer function for evaluating the search term against the nodes.

#### Parameters

##### searchTerm

`any`

The data of the searched node

##### comparer?

[`IgxTreeSearchResolver`](../type-aliases/IgxTreeSearchResolver.md)

A custom comparer function that evaluates the passed `searchTerm` against all nodes.

#### Returns

[`IgxTreeNodeComponent`](IgxTreeNodeComponent.md)\<`any`\>[]

Array of nodes that match the search. `null` if no nodes are found.

```html
<igx-tree>
    <igx-tree-node *ngFor="let node of data" [data]="node">
         {{ node.label }}
    </igx-tree-node>
</igx-tree>
```

```typescript
public data: DataEntry[] = FETCHED_DATA;
...
const matchedNodes: IgxTreeNode<DataEntry>[] = this.tree.findNodes<DataEntry>(searchTerm: data[5]);
```

Using a custom comparer
```typescript
public data: DataEntry[] = FETCHED_DATA;
...
const comparer: IgxTreeSearchResolver = (data: any, node: IgxTreeNode<DataEntry>) {
     return node.data.index % 2 === 0;
}
const evenIndexNodes: IgxTreeNode<DataEntry>[] = this.tree.findNodes<DataEntry>(null, comparer);
```

#### Remarks

Default search compares the passed `searchTerm` against the node's `data` Input.
When using `findNodes` w/o a `comparer`, make sure all nodes have `data` passed.

#### Implementation of

[`IgxTree`](../interfaces/IgxTree.md).[`findNodes`](../interfaces/IgxTree.md#findnodes)
