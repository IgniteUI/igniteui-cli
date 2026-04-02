# Class: IgcThemeProviderComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/theme-provider/theme-provider.ts:52](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/theme-provider/theme-provider.ts#L52)

A theme provider component that uses Lit context to provide theme information
to descendant components.

This component allows you to scope a theme to a specific part of the page.
All library components within this provider will use the specified theme
instead of the global theme.

## Element

igc-theme-provider

## Slot

- Default slot for content that should receive the provided theme.

## Remarks

When using the theme provider, it must be registered **before** any descendant components
that will consume the theme context. This ensures the context provider is available
when descendant components attempt to consume it.

```typescript
import { defineComponents, IgcThemeProviderComponent, IgcButtonComponent } from 'igniteui-webcomponents';

// Register theme provider first, then descendant components
defineComponents(IgcThemeProviderComponent, IgcButtonComponent);
```

## Example

```html
<!-- Scope material theme to a section -->
<igc-theme-provider theme="material" variant="dark">
  <igc-button>Material Dark Button</igc-button>
  <igc-input label="Material Dark Input"></igc-input>
</igc-theme-provider>

<!-- Use different theme in another section -->
<igc-theme-provider theme="fluent" variant="light">
  <igc-button>Fluent Light Button</igc-button>
</igc-theme-provider>
```

## Extends

- `LitElement`

## Other

### theme

> **theme**: `Theme` = `'bootstrap'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/theme-provider/theme-provider.ts:77](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/theme-provider/theme-provider.ts#L77)

The theme to provide to descendant components.

#### Attr

#### Default

```ts
'bootstrap'
```

***

### variant

> **variant**: `ThemeVariant` = `'light'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/theme-provider/theme-provider.ts:86](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/theme-provider/theme-provider.ts#L86)

The theme variant to provide to descendant components.

#### Attr

#### Default

```ts
'light'
```

## styles

### styles

> `static` **styles**: `CSSResult`

Defined in: [webcomponents/igniteui-webcomponents/src/components/theme-provider/theme-provider.ts:55](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/theme-provider/theme-provider.ts#L55)

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
