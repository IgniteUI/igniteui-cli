# Class: IgxTreeNodeComponent\<T\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L133)

The tree node component represents a child node of the tree component or another tree node.
Usage:

```html
 <igx-tree>
 ...
   <igx-tree-node [data]="data" [selected]="service.isNodeSelected(data.Key)" [expanded]="service.isNodeExpanded(data.Key)">
     {{ data.FirstName }} {{ data.LastName }}
   </igx-tree-node>
 ...
 </igx-tree>
```

## Type Parameters

### T

`T`

## Implements

- [`IgxTreeNode`](../interfaces/IgxTreeNode.md)\<`T`\>
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxTreeNodeComponent**\<`T`\>(): `IgxTreeNodeComponent`\<`T`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:368](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L368)

#### Returns

`IgxTreeNodeComponent`\<`T`\>

#### Overrides

`ToggleAnimationPlayer.constructor`

## Properties

### \_animationSettings

> `protected` **\_animationSettings**: `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L63)

#### Inherited from

`ToggleAnimationPlayer._animationSettings`

***

### animationService

> `protected` **animationService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L37)

#### Inherited from

`ToggleAnimationPlayer.animationService`

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L138)

***

### data

> **data**: `T`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:160](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L160)

The data entry that the node is visualizing.

#### Remarks

Required for searching through nodes.

#### Example

```html
 <igx-tree>
 ...
   <igx-tree-node [data]="data">
     {{ data.FirstName }} {{ data.LastName }}
   </igx-tree-node>
 ...
 </igx-tree>
```

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`data`](../interfaces/IgxTreeNode.md#data)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L61)

#### Inherited from

`ToggleAnimationPlayer.destroy$`

***

### expandedChange

> **expandedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L265)

Emitted when the node's `expanded` property changes.

```html
<igx-tree>
     <igx-tree-node *ngFor="let node of data" [data]="node" [(expanded)]="node.expanded">
     </igx-tree-node>
</igx-tree>
```

```typescript
const node: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
node.expandedChange.pipe(takeUntil(this.destroy$)).subscribe((e: boolean) => console.log("Node expansion state changed to ", e))
```

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`expandedChange`](../interfaces/IgxTreeNode.md#expandedchange)

***

### loading

> **loading**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:169](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L169)

To be used for load-on-demand scenarios in order to specify whether the node is loading data.

#### Remarks

Loading nodes do not render children.

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`loading`](../interfaces/IgxTreeNode.md#loading)

***

### navService

> `protected` **navService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:137](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L137)

***

### parentNode

> **parentNode**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:140](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L140)

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`parentNode`](../interfaces/IgxTreeNode.md#parentnode)

***

### players

> `protected` **players**: `Map`\<`string`, [`AnimationPlayer`](../interfaces/AnimationPlayer.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L62)

#### Inherited from

`ToggleAnimationPlayer.players`

***

### selectedChange

> **selectedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:247](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L247)

Emitted when the node's `selected` property changes.

```html
<igx-tree>
     <igx-tree-node *ngFor="let node of data" [data]="node" [(selected)]="node.selected">
     </igx-tree-node>
</igx-tree>
```

```typescript
const node: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
node.selectedChange.pipe(takeUntil(this.destroy$)).subscribe((e: boolean) => console.log("Node selection changed to ", e))
```

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`selectedChange`](../interfaces/IgxTreeNode.md#selectedchange)

***

### selectionService

> `protected` **selectionService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L135)

***

### tree

> **tree**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L134)

***

### treeService

> `protected` **treeService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:136](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L136)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:227](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L227)

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:220](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L220)

Gets/Sets the active state of the node

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`active`](../interfaces/IgxTreeNode.md#active)

***

### children

#### Get Signature

> **get** **children**(): [`IgxTreeNode`](../interfaces/IgxTreeNode.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:338](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L338)

Return the child nodes of the node (if any)

##### Remarks

Returns `null` if node does not have children

##### Example

```typescript
const node: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
const children: IgxTreeNode<any>[] = node.children;
```

##### Returns

[`IgxTreeNode`](../interfaces/IgxTreeNode.md)\<`any`\>[]

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L293)

Gets/Sets the disabled state of the node

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:297](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L297)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`disabled`](../interfaces/IgxTreeNode.md#disabled)

***

### expanded

#### Get Signature

> **get** **expanded**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:462](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L462)

Get/set whether the node is expanded

```html
<igx-tree>
 ...
 <igx-tree-node *ngFor="let node of data" [expanded]="node.name === this.expandedNode">
     {{ node.label }}
 </igx-tree-node>
</igx-tree>
```

```typescript
const node: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
const expanded = node.expanded;
node.expanded = true;
```

##### Returns

`boolean`

#### Set Signature

> **set** **expanded**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:466](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L466)

##### Parameters

###### val

`boolean`

##### Returns

`void`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`expanded`](../interfaces/IgxTreeNode.md#expanded)

***

### level

#### Get Signature

> **get** **level**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:405](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L405)

The depth of the node, relative to the root

```html
<igx-tree>
 ...
 <igx-tree-node #node>
     My level is {{ node.level }}
 </igx-tree-node>
</igx-tree>
```

```typescript
const node: IgxTreeNode<any> = this.tree.findNodes(data[12])[0];
const level: number = node.level;
```

##### Returns

`number`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`level`](../interfaces/IgxTreeNode.md#level)

***

### path

#### Get Signature

> **get** **path**(): [`IgxTreeNode`](../interfaces/IgxTreeNode.md)\<`any`\>[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L281)

Retrieves the full path to the node incuding itself

```typescript
const node: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
const path: IgxTreeNode<any>[] = node.path;
```

##### Returns

[`IgxTreeNode`](../interfaces/IgxTreeNode.md)\<`any`\>[]

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`path`](../interfaces/IgxTreeNode.md#path)

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L210)

An accessor that returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:203](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L203)

Gets/Sets the resource strings.

##### Remarks

Uses EN resources by default.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:427](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L427)

Get/set whether the node is selected. Supporst two-way binding.

```html
<igx-tree>
 ...
 <igx-tree-node *ngFor="let node of data" [(selected)]="node.selected">
     {{ node.label }}
 </igx-tree-node>
</igx-tree>
```

```typescript
const node: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
const selected = node.selected;
node.selected = true;
```

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:431](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L431)

##### Parameters

###### val

`boolean`

##### Returns

`void`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`selected`](../interfaces/IgxTreeNode.md#selected)

## Methods

### collapse()

> **collapse**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:665](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L665)

Collapses the node, triggering animation

```html
<igx-tree>
     <igx-tree-node #node>My Node</igx-tree-node>
</igx-tree>
<button type="button" igxButton (click)="node.collapse()">Collapse Node</button>
```

```typescript
const myNode: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
myNode.collapse();
```

#### Returns

`void`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`collapse`](../interfaces/IgxTreeNode.md#collapse)

***

### expand()

> **expand**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:630](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L630)

Expands the node, triggering animation

```html
<igx-tree>
     <igx-tree-node #node>My Node</igx-tree-node>
</igx-tree>
<button type="button" igxButton (click)="node.expand()">Expand Node</button>
```

```typescript
const myNode: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
myNode.expand();
```

#### Returns

`void`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`expand`](../interfaces/IgxTreeNode.md#expand)

***

### toggle()

> **toggle**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts:580](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tree/src/tree/tree-node/tree-node.component.ts#L580)

Toggles the node expansion state, triggering animation

```html
<igx-tree>
     <igx-tree-node #node>My Node</igx-tree-node>
</igx-tree>
<button type="button" igxButton (click)="node.toggle()">Toggle Node</button>
```

```typescript
const myNode: IgxTreeNode<any> = this.tree.findNodes(data[0])[0];
myNode.toggle();
```

#### Returns

`void`

#### Implementation of

[`IgxTreeNode`](../interfaces/IgxTreeNode.md).[`toggle`](../interfaces/IgxTreeNode.md#toggle)
