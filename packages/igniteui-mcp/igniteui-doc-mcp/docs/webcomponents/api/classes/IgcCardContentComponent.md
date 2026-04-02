# Class: IgcCardContentComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.content.ts:24](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.content.ts#L24)

A container component for the card's main text content.
This component should be used within an igc-card element to display the primary content.

## Element

igc-card-content

## Slot

- Renders the card text content (e.g., paragraphs, lists).

## Example

```html
<igc-card-content>
  <p>This is the main content of the card. It can contain any text or HTML content.</p>
</igc-card-content>
```

## Extends

- `LitElement`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.content.ts:26](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.content.ts#L26)

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
