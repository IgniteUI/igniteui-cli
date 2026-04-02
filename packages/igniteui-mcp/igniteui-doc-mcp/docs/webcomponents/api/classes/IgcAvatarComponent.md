# Class: IgcAvatarComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/avatar/avatar.ts:25](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/avatar/avatar.ts#L25)

An avatar component is used as a representation of a user identity
typically in a user profile.

## Element

igc-avatar

## Slot

- Renders an icon inside the default slot.

## Csspart

base - The base wrapper of the avatar.

## Csspart

initials - The initials wrapper of the avatar.

## Csspart

image - The image wrapper of the avatar.

## Csspart

icon - The icon wrapper of the avatar.

## Extends

- `LitElement`

## Other

### alt?

> `optional` **alt?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/avatar/avatar.ts:56](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/avatar/avatar.ts#L56)

Alternative text for the image.

#### Attr

***

### initials?

> `optional` **initials?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/avatar/avatar.ts:63](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/avatar/avatar.ts#L63)

Initials to use as a fallback when no image is available.

#### Attr

***

### shape

> **shape**: `AvatarShape` = `'square'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/avatar/avatar.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/avatar/avatar.ts#L70)

The shape of the avatar.

#### Attr

***

### src?

> `optional` **src?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/avatar/avatar.ts:49](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/avatar/avatar.ts#L49)

The image source to use.

#### Attr

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/avatar/avatar.ts:27](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/avatar/avatar.ts#L27)

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
