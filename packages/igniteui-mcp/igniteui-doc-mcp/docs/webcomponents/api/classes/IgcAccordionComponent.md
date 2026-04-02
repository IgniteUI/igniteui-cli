# Class: IgcAccordionComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/accordion/accordion.ts:26](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/accordion/accordion.ts#L26)

The Accordion is a container-based component that can house multiple expansion panels
and offers keyboard navigation.

## Element

igc-accordion

## Slot

- Renders the expansion panels inside default slot.

## Extends

- `LitElement`

## Other

### singleExpand

> **singleExpand**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/accordion/accordion.ts:59](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/accordion/accordion.ts#L59)

Allows only one panel to be expanded at a time.

#### Attr

single-expand

#### Default

```ts
false
```

***

### panels

#### Get Signature

> **get** **panels**(): [`IgcExpansionPanelComponent`](IgcExpansionPanelComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/accordion/accordion.ts:63](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/accordion/accordion.ts#L63)

Returns all of the accordions's direct igc-expansion-panel children.

##### Returns

[`IgcExpansionPanelComponent`](IgcExpansionPanelComponent.md)[]

***

### hideAll()

> **hideAll**(): `Promise`\<`void`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/accordion/accordion.ts:215](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/accordion/accordion.ts#L215)

Hides all of the child expansion panels' contents.

#### Returns

`Promise`\<`void`\>

***

### showAll()

> **showAll**(): `Promise`\<`void`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/accordion/accordion.ts:220](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/accordion/accordion.ts#L220)

Shows all of the child expansion panels' contents.

#### Returns

`Promise`\<`void`\>

## styles

### styles

> `static` **styles**: `CSSResult`

Defined in: [webcomponents/igniteui-webcomponents/src/components/accordion/accordion.ts:28](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/accordion/accordion.ts#L28)

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
