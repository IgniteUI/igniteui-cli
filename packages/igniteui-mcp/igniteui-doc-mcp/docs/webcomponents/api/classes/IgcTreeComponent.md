# Class: IgcTreeComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:39](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L39)

The tree allows users to represent hierarchical data in a tree-view structure,
maintaining parent-child relationships, as well as to define static tree-view structure without a corresponding data model.

## Element

igc-tree

## Slot

- Renders the tree items inside default slot.

## Fires

igcSelection - Emitted when item selection is changing, before the selection completes.

## Fires

igcItemCollapsed - Emitted when tree item is collapsed.

## Fires

igcItemCollapsing - Emitted when tree item is about to collapse.

## Fires

igcItemExpanded - Emitted when tree item is expanded.

## Fires

igcItemExpanding - Emitted when tree item is about to expand.

## Fires

igcActiveItem - Emitted when the tree's `active` item changes.

## Extends

- `EventEmitterInterface`\<`IgcTreeComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Other

### selection

> **selection**: `TreeSelection` = `'none'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:83](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L83)

The selection state of the tree.

#### Attr

***

### singleBranchExpand

> **singleBranchExpand**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:69](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L69)

Whether a single or multiple of a parent's child items can be expanded.

#### Attr

single-branch-expand

***

### toggleNodeOnClick

> **toggleNodeOnClick**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:76](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L76)

Whether clicking over nodes will change their expanded state or not.

#### Attr

toggle-node-on-click

***

### tagName

> `readonly` `static` **tagName**: `"igc-tree"` = `'igc-tree'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:43](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L43)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

***

### items

#### Get Signature

> **get** **items**(): [`IgcTreeItemComponent`](IgcTreeItemComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:175](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L175)

Returns all of the tree's items.

##### Returns

[`IgcTreeItemComponent`](IgcTreeItemComponent.md)[]

***

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:90](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L90)

Gets/Sets the locale used for getting language, affecting resource strings.

##### Attr

locale

##### Parameters

###### value

`string`

##### Returns

`void`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:103](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L103)

The resource strings for localization.
Currently only aria-labels of the default expand/collapse icons are localized for the tree item.

##### Parameters

###### value

`ITreeResourceStrings`

##### Returns

`void`

***

### collapse()

> **collapse**(`items?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:240](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L240)

Collapses all of the passed items.
If no items are passed, collapses ALL items.

#### Parameters

##### items?

[`IgcTreeItemComponent`](IgcTreeItemComponent.md)[]

#### Returns

`void`

***

### deselect()

> **deselect**(`items?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:213](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L213)

Deselect all items if the items collection is empty. Otherwise, deselect the items in the items collection.

#### Parameters

##### items?

[`IgcTreeItemComponent`](IgcTreeItemComponent.md)[]

#### Returns

`void`

***

### expand()

> **expand**(`items?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:225](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L225)

Expands all of the passed items.
If no items are passed, expands ALL items.

#### Parameters

##### items?

[`IgcTreeItemComponent`](IgcTreeItemComponent.md)[]

#### Returns

`void`

***

### select()

> **select**(`items?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:196](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L196)

Select all items if the items collection is empty. Otherwise, select the items in the items collection.

#### Parameters

##### items?

[`IgcTreeItemComponent`](IgcTreeItemComponent.md)[]

#### Returns

`void`

## lifecycle

### connectedCallback()

> **connectedCallback**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree.ts:157](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree.ts#L157)

Invoked when the component is added to the document's DOM.

In `connectedCallback()` you should setup tasks that should only occur when
the element is connected to the document. The most common of these is
adding event listeners to nodes external to the element, like a keydown
event handler added to the window.

```ts
connectedCallback() {
  super.connectedCallback();
  addEventListener('keydown', this._handleKeydown);
}
```

Typically, anything done in `connectedCallback()` should be undone when the
element is disconnected, in `disconnectedCallback()`.

#### Returns

`void`

#### Overrides

`EventEmitterMixin< IgcTreeComponentEventMap, Constructor<LitElement> >(LitElement).connectedCallback`
