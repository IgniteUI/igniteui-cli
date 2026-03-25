# Class: IgcNavDrawerComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer.ts:27](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer.ts#L27)

Represents a side navigation container that provides
quick access between views.

## Element

igc-nav-drawer

## Slot

- The default slot for the igc-navigation-drawer.

## Slot

mini - The slot for the mini variant of the igc-navigation-drawer.

## Csspart

base - The base wrapper of the igc-navigation-drawer.

## Csspart

main - The main container of the igc-navigation-drawer.

## Csspart

mini - The mini container of the igc-navigation-drawer.

## Extends

- `LitElement`

## Other

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer.ts:56](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer.ts#L56)

Determines whether the drawer is opened.

#### Attr

***

### position

> **position**: `NavDrawerPosition` = `'start'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer.ts:49](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer.ts#L49)

The position of the drawer.

#### Attr

***

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer.ts:84](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer.ts#L84)

Closes the drawer.

#### Returns

`Promise`\<`boolean`\>

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer.ts:72](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer.ts#L72)

Opens the drawer.

#### Returns

`Promise`\<`boolean`\>

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer.ts:96](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer.ts#L96)

Toggles the open state of the drawer.

#### Returns

`Promise`\<`boolean`\>

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/nav-drawer/nav-drawer.ts:29](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/nav-drawer/nav-drawer.ts#L29)

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
