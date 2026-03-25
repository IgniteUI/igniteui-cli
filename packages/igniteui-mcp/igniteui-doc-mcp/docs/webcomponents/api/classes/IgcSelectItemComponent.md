# Class: IgcSelectItemComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-item.ts:22](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-item.ts#L22)

Represents an item in a select list.

## Element

igc-select-item

## Slot

- Renders the all content bar the prefix and suffix.

## Slot

prefix - Renders content before the main content area.

## Slot

suffix - Renders content after the main content area.

## Csspart

prefix - The prefix wrapper of the igc-select-item.

## Csspart

content - The main content wrapper of the igc-select-item.

## Csspart

suffix - The suffix wrapper of the igc-select-item.

## Extends

- `IgcBaseOptionLikeComponent`

## Other

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-item.ts:41](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-item.ts#L41)

Whether the item is active.

##### Attr

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-item.ts:36](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-item.ts#L36)

Whether the item is disabled.

##### Attr

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

`IgcBaseOptionLikeComponent.active`

***

### disabled

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/option.ts:40](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/option.ts#L40)

Whether the item is disabled.

##### Attr

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`IgcBaseOptionLikeComponent.disabled`

***

### selected

#### Set Signature

> **set** **selected**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/option.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/option.ts#L54)

Whether the item is selected.

##### Attr

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`IgcBaseOptionLikeComponent.selected`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/option.ts:71](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/option.ts#L71)

The current value of the item.
If not specified, the element's text content is used.

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`IgcBaseOptionLikeComponent.value`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select-item.ts:24](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select-item.ts#L24)

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

`IgcBaseOptionLikeComponent.styles`
