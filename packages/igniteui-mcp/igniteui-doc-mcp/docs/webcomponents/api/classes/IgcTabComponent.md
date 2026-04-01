# Class: IgcTabComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tab.ts:28](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tab.ts#L28)

A tab element slotted into an `igc-tabs` container.

## Element

igc-tab

## Slot

- Renders the tab's content.

## Slot

label - Renders the tab header's label.

## Slot

prefix - Renders the tab header's prefix.

## Slot

suffix - Renders the tab header's suffix.

## Csspart

tab-header - The header of a single tab.

## Csspart

prefix - Tab header's label prefix.

## Csspart

content - Tab header's label slot container.

## Csspart

suffix - Tab header's label suffix.

## Csspart

tab-body - Holds the body content of a single tab, only the body of the selected tab is visible.

## Extends

- `LitElement`

## Other

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tab.ts:58](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tab.ts#L58)

Determines whether the tab is disabled.

#### Attr

***

### label

> **label**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tab.ts:44](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tab.ts#L44)

The tab item label.

#### Attr

***

### selected

> **selected**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tab.ts:51](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tab.ts#L51)

Determines whether the tab is selected.

#### Attr

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tab.ts:30](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tab.ts#L30)

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
