# Class: IgcCardActionsComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.actions.ts:30](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.actions.ts#L30)

A container component for card action items such as buttons or icon buttons.
Actions can be positioned at the start, center, or end of the container.

## Element

igc-card-actions

## Slot

start - Renders items at the beginning of the actions area.

## Slot

- Renders items in the center of the actions area.

## Slot

end - Renders items at the end of the actions area.

## Example

```html
<igc-card-actions>
  <igc-button slot="start" variant="flat">Like</igc-button>
  <igc-button slot="start" variant="flat">Share</igc-button>
  <igc-icon-button slot="end" name="more_vert"></igc-icon-button>
</igc-card-actions>
```

## Extends

- `LitElement`

## Other

### orientation

> **orientation**: `ContentOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.actions.ts:51](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.actions.ts#L51)

The orientation of the actions layout.

#### Attr

orientation

#### Default

```ts
'horizontal'
```

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/card/card.actions.ts:32](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/card/card.actions.ts#L32)

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
