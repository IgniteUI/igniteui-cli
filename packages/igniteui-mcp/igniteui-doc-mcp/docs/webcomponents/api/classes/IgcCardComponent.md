# Class: IgcCardComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.ts:39](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.ts#L39)

A container component that wraps different elements related to a single subject.
The card component provides a flexible container for organizing content such as headers,
media, text content, and actions.

## Element

igc-card

## Slot

- Renders the card content. Typically contains igc-card-header, igc-card-media, igc-card-content, and igc-card-actions.

## Example

```html
<igc-card>
  <igc-card-header>
    <h3 slot="title">Card Title</h3>
    <h5 slot="subtitle">Card Subtitle</h5>
  </igc-card-header>
  <igc-card-content>
    <p>Card content goes here</p>
  </igc-card-content>
  <igc-card-actions>
    <button slot="start">Action</button>
  </igc-card-actions>
</igc-card>
```

## Extends

- `LitElement`

## Other

### elevated

> **elevated**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.ts:62](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.ts#L62)

Sets the card to have an elevated appearance with shadow.
When false, the card uses an outlined style with a border.

#### Attr

elevated

#### Default

```ts
false
```

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.ts:41](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.ts#L41)

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
