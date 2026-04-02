# Class: IgcCardHeaderComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.header.ts:33](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.header.ts#L33)

A container component for the card's header section.
Displays header content including an optional thumbnail, title, subtitle, and additional content.

## Element

igc-card-header

## Slot

thumbnail - Renders header media such as an icon or small image.

## Slot

title - Renders the card title (typically a heading element).

## Slot

subtitle - Renders the card subtitle (typically a smaller heading or text).

## Slot

- Renders additional content displayed next to the title area.

## Csspart

header - The card header text container.

## Csspart

title - The title slot wrapper.

## Csspart

subtitle - The subtitle slot wrapper.

## Example

```html
<igc-card-header>
  <igc-avatar slot="thumbnail" initials="AB"></igc-avatar>
  <h3 slot="title">Card Title</h3>
  <h5 slot="subtitle">Card Subtitle</h5>
</igc-card-header>
```

## Extends

- `LitElement`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.header.ts:35](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.header.ts#L35)

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
