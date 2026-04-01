# Class: IgcTreeItemComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:51](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L51)

The tree-item component represents a child item of the tree component or another tree item.

## Element

igc-tree-item

## Slot

- Renders nested tree-item component.

## Slot

label - Renders the tree item container.

## Slot

indicator - Renders the expand indicator container.

## Slot

loading - Renders the tree item loading indicator container.

## Slot

indentation - Renders the container (by default the space) before the tree item.

## Csspart

wrapper - The wrapper for the tree item.

## Csspart

selected - Indicates selected state. Applies to `wrapper`.

## Csspart

focused - Indicates focused state. Applies to `wrapper`.

## Csspart

active - Indicates an active state. Applies to `wrapper`.

## Csspart

indicator - The expand indicator of the tree item.

## Csspart

label - The tree item content.

## Csspart

text - The tree item displayed text.

## Csspart

select - The checkbox of the tree item when selection is enabled.

## Extends

- `LitElement`

## Other

### active

> **active**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:122](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L122)

Marks the item as the tree's active item.

#### Attr

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:129](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L129)

Get/Set whether the tree item is disabled. Disabled items are ignored for user interactions.

#### Attr

***

### expanded

> **expanded**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:115](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L115)

The tree item expansion state.

#### Attr

***

### label

> **label**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:108](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L108)

The tree item label.

#### Attr

***

### level

> **level**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:97](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L97)

The depth of the item, relative to the root.

***

### loading

> **loading**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L143)

To be used for load-on-demand scenarios in order to specify whether the item is loading data.

#### Attr

***

### parent

> **parent**: `IgcTreeItemComponent` \| `null` = `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:76](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L76)

The parent item of the current tree item (if any)

***

### selected

> **selected**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:136](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L136)

The tree item selection state.

#### Attr

***

### tree?

> `optional` **tree?**: [`IgcTreeComponent`](IgcTreeComponent.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:74](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L74)

A reference to the tree the item is a part of.

***

### value

> **value**: `any` = `undefined`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:151](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L151)

The value entry that the tree item is visualizing. Required for searching through items.

#### Attr

***

### path

#### Get Signature

> **get** **path**(): `IgcTreeItemComponent`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:286](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L286)

The full path to the tree item, starting from the top-most ancestor.

##### Returns

`IgcTreeItemComponent`[]

***

### collapse()

> **collapse**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:507](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L507)

Collapses the tree item.

#### Returns

`void`

***

### expand()

> **expand**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:502](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L502)

Expands the tree item.

#### Returns

`void`

***

### getChildren()

> **getChildren**(`options?`): `IgcTreeItemComponent`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:428](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L428)

Returns a collection of child items.
If the parameter value is true returns all tree item's direct children,
otherwise - only the direct children.

#### Parameters

##### options?

###### flatten

`boolean`

#### Returns

`IgcTreeItemComponent`[]

***

### toggle()

> **toggle**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:497](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L497)

Toggles tree item expansion state.

#### Returns

`void`

## lifecycle

### connectedCallback()

> **connectedCallback**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:232](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L232)

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

`LitElement.connectedCallback`

***

### disconnectedCallback()

> **disconnectedCallback**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:252](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L252)

Invoked when the component is removed from the document's DOM.

This callback is the main signal to the element that it may no longer be
used. `disconnectedCallback()` should ensure that nothing is holding a
reference to the element (such as event listeners added to nodes external
to the element), so that it is free to be garbage collected.

```ts
disconnectedCallback() {
  super.disconnectedCallback();
  window.removeEventListener('keydown', this._handleKeydown);
}
```

An element may be re-connected after being disconnected.

#### Returns

`void`

#### Overrides

`LitElement.disconnectedCallback`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tree/tree-item.ts:53](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tree/tree-item.ts#L53)

Array of styles to apply to the element. The styles should be defined
using the css tag function, via constructible stylesheets, or
imported from native CSS module scripts.

Note on Content Security Policy:

Element styles are implemented with `<style>` tags when the browser doesn't
support adopted StyleSheets. To use such `<style>` tags with the style-src
CSP directive, the style-src value must either include 'unsafe-inline' or
`nonce-<base64-value>` with `<base64-value>` replaced be a server-generated
nonce.

To provide a nonce to use on generated `<style>` elements, set
`window.litNonce` to a server-generated nonce in your page's HTML, before
loading application code:

```html
<script>
  // Generated and unique per request:
  window.litNonce = 'a1b2c3d4';
</script>
```

#### Nocollapse

#### Overrides

`LitElement.styles`
