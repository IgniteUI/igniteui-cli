# Class: IgcRadioGroupComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio-group/radio-group.ts:21](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio-group/radio-group.ts#L21)

The igc-radio-group component unifies one or more igc-radio buttons.

## Element

igc-radio-group

## Slot

- Default slot

## Extends

- `LitElement`

## Other

### alignment

> **alignment**: `ContentOrientation` = `'vertical'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio-group/radio-group.ts:53](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio-group/radio-group.ts#L53)

Alignment of the radio controls inside this group.

#### Attr

***

### name

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio-group/radio-group.ts:71](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio-group/radio-group.ts#L71)

Gets/Sets the name for all child igc-radio components.

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio-group/radio-group.ts:86](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio-group/radio-group.ts#L86)

Gets/Sets the checked igc-radio element that matches `value`

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/radio-group/radio-group.ts:23](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/radio-group/radio-group.ts#L23)

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
