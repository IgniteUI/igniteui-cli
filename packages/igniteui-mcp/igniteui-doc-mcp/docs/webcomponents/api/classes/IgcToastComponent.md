# Class: IgcToastComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/toast/toast.ts:17](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/toast/toast.ts#L17)

A toast component is used to show a notification

## Element

igc-toast

## Csspart

base - The base wrapper of the toast.

## Extends

- `IgcBaseAlertLikeComponent`

## Other

### displayTime

> **displayTime**: `number` = `4000`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:28](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L28)

Determines the duration in ms in which the component will be visible.

#### Attr

display-time

#### Inherited from

`IgcBaseAlertLikeComponent.displayTime`

***

### keepOpen

> **keepOpen**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:35](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L35)

Determines whether the component should close after the `displayTime` is over.

#### Attr

keep-open

#### Inherited from

`IgcBaseAlertLikeComponent.keepOpen`

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:21](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L21)

Whether the component is in shown state.

#### Attr

#### Inherited from

`IgcBaseAlertLikeComponent.open`

***

### position

> **position**: `AbsolutePosition` = `'bottom'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L42)

Sets the position of the component in the viewport.

#### Attr

#### Inherited from

`IgcBaseAlertLikeComponent.position`

***

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:94](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L94)

Closes the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IgcBaseAlertLikeComponent.hide`

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:89](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L89)

Opens the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IgcBaseAlertLikeComponent.show`

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:99](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L99)

Toggles the open state of the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IgcBaseAlertLikeComponent.toggle`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/toast/toast.ts:19](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/toast/toast.ts#L19)

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

`IgcBaseAlertLikeComponent.styles`
