# Class: IgcDividerComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/divider/divider.ts:20](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/divider/divider.ts#L20)

The igc-divider allows the content author to easily create a horizontal/vertical rule as a break between content to better organize information on a page.

## Element

igc-divider

## Cssproperty

--color - Sets the color of the divider.

## Cssproperty

--inset - Shrinks the divider by the given amount from the start. If `middle` is set it will shrink from both sides.

## Extends

- `LitElement`

## Other

### middle

> **middle**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/divider/divider.ts:61](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/divider/divider.ts#L61)

When set and inset is provided, it will shrink the divider line from both sides.

#### Attr

#### Default

```ts
false
```

***

### type

> **type**: `DividerType` = `'solid'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/divider/divider.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/divider/divider.ts#L70)

Whether to render a solid or a dashed divider line.

#### Attr

type

#### Default

```ts
'solid'
```

***

### vertical

#### Set Signature

> **set** **vertical**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/divider/divider.ts:44](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/divider/divider.ts#L44)

Whether to render a vertical divider line.

##### Attr

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/divider/divider.ts:22](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/divider/divider.ts#L22)

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
