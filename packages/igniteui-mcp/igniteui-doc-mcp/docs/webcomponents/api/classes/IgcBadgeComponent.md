# Class: IgcBadgeComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/badge/badge.ts:31](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/badge/badge.ts#L31)

The badge is a component indicating a status on a related item or an area
where some active indication is required.

## Element

igc-badge

## Slot

- Default slot for the badge content.

## Csspart

base - The base wrapper of the badge.

## Csspart

icon - The icon container, present when an igc-icon element is slotted.

## Example

```html
<igc-badge variant="success">New</igc-badge>
<igc-badge variant="danger" shape="square">5</igc-badge>
<igc-badge dot></igc-badge>
```

## Extends

- `LitElement`

## Other

### dot

> **dot**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/badge/badge.ts:86](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/badge/badge.ts#L86)

Sets whether to render a dot type badge.
When enabled, the badge appears as a small dot without any content.

#### Attr

dot

#### Default

```ts
false
```

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/badge/badge.ts:67](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/badge/badge.ts#L67)

Sets whether to draw an outlined version of the badge.

#### Attr

outlined

#### Default

```ts
false
```

***

### shape

> **shape**: `BadgeShape` = `'rounded'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/badge/badge.ts:76](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/badge/badge.ts#L76)

The shape of the badge.

#### Attr

shape

#### Default

```ts
'rounded'
```

***

### variant

> **variant**: `StyleVariant` = `'primary'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/badge/badge.ts:58](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/badge/badge.ts#L58)

The type (style variant) of the badge.

#### Attr

variant

#### Default

```ts
'primary'
```

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/badge/badge.ts:33](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/badge/badge.ts#L33)

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
