# Class: IgcIconComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.ts:56](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.ts#L56)

The icon component allows visualizing collections of pre-registered SVG icons.

## Element

igc-icon

## Remarks

The icon component renders SVG icons from registered icon collections. Icons can be:
- Loaded from the internal collection (built-in icons)
- Registered dynamically using `registerIcon` or `registerIconFromText`
- Referenced by aliases that resolve differently based on the active theme

Icons automatically adapt to the current theme when used within an `igc-theme-provider`.
The component subscribes to the icon registry and updates automatically when icons
are registered or references are updated.

## Examples

```html
<!-- Use a built-in icon -->
<igc-icon name="star"></igc-icon>

<!-- Use an icon from a specific collection -->
<igc-icon name="search" collection="material"></igc-icon>

<!-- Mirror the icon for RTL layouts -->
<igc-icon name="arrow-forward" mirrored></igc-icon>
```

```typescript
// Register a custom icon
import { registerIconFromText } from 'igniteui-webcomponents';

const customIconSvg = '<svg viewBox="0 0 24 24">...</svg>';
registerIconFromText('custom-icon', customIconSvg, 'my-collection');
```

## Extends

- `LitElement`

## Other

### collection

> **collection**: `string` = `'default'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.ts:107](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.ts#L107)

The name of the registered collection for look up of icons.

#### Attr

collection

#### Default

```ts
"default"
```

#### Remarks

Collections allow organizing icons into logical groups. The "default"
collection is used for most icons.
Custom collections can be created by registering icons with a specific collection name.

***

### mirrored

> **mirrored**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.ts:121](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.ts#L121)

Whether to flip the icon horizontally. Useful for RTL (right-to-left) layouts.

#### Attr

mirrored

#### Default

```ts
false
```

#### Remarks

When true, the icon is flipped horizontally using CSS transform.
This is particularly useful for directional icons (arrows, chevrons)
in right-to-left language contexts.

***

### name

> **name**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.ts:93](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.ts#L93)

The name of the icon glyph to draw.

#### Attr

name

#### Remarks

The icon name can be:
- A direct reference to a registered icon in the specified collection
- An alias that resolves to different icons based on the current theme

When the icon name or collection changes, the component automatically
fetches and renders the new icon.

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.ts:58](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.ts#L58)

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
