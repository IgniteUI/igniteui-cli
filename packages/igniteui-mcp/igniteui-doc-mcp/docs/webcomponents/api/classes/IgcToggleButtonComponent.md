# Class: IgcToggleButtonComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:24](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L24)

The `igc-toggle-button` wraps a native button element and exposes additional `value` and `selected` properties.
It is used in the context of an `igc-button-group` to facilitate the creation of group/toolbar like UX behaviors.

## Element

igc-toggle-button

## Slot

Renders the label/content of the button.

## Csspart

toggle - The native button element.

## Extends

- `LitElement`

## Other

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:57](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L57)

Determines whether the button is disabled.

#### Attr

***

### selected

> **selected**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:50](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L50)

Determines whether the button is selected.

#### Attr

***

### value

> **value**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:43](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L43)

The value attribute of the control.

#### Attr

***

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:72](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L72)

Removes focus from the button.

#### Returns

`void`

#### Overrides

`LitElement.blur`

***

### click()

> **click**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:77](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L77)

Simulates a mouse click on the element.

#### Returns

`void`

#### Overrides

`LitElement.click`

***

### focus()

> **focus**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:66](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L66)

Sets focus on the button.

#### Parameters

##### options?

`FocusOptions`

#### Returns

`void`

#### Overrides

`LitElement.focus`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/toggle-button.ts:25](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/toggle-button.ts#L25)

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
