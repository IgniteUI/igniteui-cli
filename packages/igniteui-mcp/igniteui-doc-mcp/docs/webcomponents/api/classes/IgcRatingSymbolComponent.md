# Class: IgcRatingSymbolComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating-symbol.ts:19](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating-symbol.ts#L19)

Used when a custom icon/symbol/element needs to be passed to the igc-rating component.

## Element

igc-rating-symbol

## Slot

- Default slot for projected full symbols/icons.

## Slot

empty - Default slot for projected empty symbols/icons.

## Csspart

symbol - The symbol wrapping container.

## Csspart

full - The full symbol wrapping container.

## Csspart

empty - The empty symbol wrapping container.

## Extends

- `LitElement`

## lifecycle

### connectedCallback()

> **connectedCallback**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating-symbol.ts:28](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating-symbol.ts#L28)

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

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/rating/rating-symbol.ts:21](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/rating/rating-symbol.ts#L21)

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
