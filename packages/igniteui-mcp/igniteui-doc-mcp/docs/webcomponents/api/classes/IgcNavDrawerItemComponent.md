# Class: IgcNavDrawerItemComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer-item.ts:23](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer-item.ts#L23)

Represents a navigation drawer item.

## Element

igc-nav-drawer-item

## Slot

content - The content slot for the drawer item.

## Slot

icon - The slot for the icon of the drawer item.

## Csspart

base - The base wrapper of the drawer item.

## Csspart

icon - The icon container.

## Csspart

content - The content container.

## Extends

- `LitElement`

## Other

### active

> **active**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer-item.ts:52](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer-item.ts#L52)

Determines whether the drawer is active.

#### Attr

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer-item.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer-item.ts#L45)

Determines whether the drawer is disabled.

#### Attr

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer-item.ts:25](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer-item.ts#L25)

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
