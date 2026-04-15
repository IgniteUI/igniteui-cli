# Class: IgcListItemComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/list/list-item.ts:30](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/list/list-item.ts#L30)

The list-item component is a container
intended for row items in the list component.

## Element

igc-list-item

## Slot

- Renders custom content.

## Slot

start - Renders content before all other content.

## Slot

end - Renders content after all other content.

## Slot

title - Renders the title.

## Slot

subtitle - Renders the subtitle.

## Csspart

start - The start container.

## Csspart

end - The end container.

## Csspart

content - The header and custom content container.

## Csspart

header - The title and subtitle container.

## Csspart

title - The title container.

## Csspart

subtitle - The subtitle container.

## Extends

- `LitElement`

## Other

### selected

> **selected**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/list/list-item.ts:44](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/list/list-item.ts#L44)

Defines if the list item is selected or not.

#### Attr

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/list/list-item.ts:32](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/list/list-item.ts#L32)

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
