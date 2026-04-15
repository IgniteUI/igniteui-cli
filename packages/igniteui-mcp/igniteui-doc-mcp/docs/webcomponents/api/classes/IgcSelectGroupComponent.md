# Class: IgcSelectGroupComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-group.ts:25](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-group.ts#L25)

## Element

igc-select-group - A container for a group of `igc-select-item` components.

## Slot

label - Contains the group's label.

## Slot

- Intended to contain the items belonging to this group.

## Csspart

label - The native label element.

## Extends

- `LitElement`

## Other

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-group.ts:74](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-group.ts#L74)

Whether the group item and all its children are disabled.

#### Attr

***

### items

> **items**: [`IgcSelectItemComponent`](IgcSelectItemComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-group.ts:47](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-group.ts#L47)

All child `igc-select-item`s.

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-group.ts:27](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-group.ts#L27)

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
