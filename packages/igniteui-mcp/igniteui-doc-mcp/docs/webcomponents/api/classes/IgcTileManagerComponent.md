# Class: IgcTileManagerComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:44](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L44)

The tile manager component enables the dynamic arrangement, resizing, and interaction of tiles.

## Element

igc-tile-manager

## Slot

- Default slot for the tile manager. Only `igc-tile` elements will be projected inside the CSS grid container.

## Csspart

base - The tile manager CSS Grid container.

## Cssproperty

--column-count - The number of columns for the tile manager. The `column-count` attribute sets this variable.

## Cssproperty

--min-col-width - The minimum size of the columns in the tile-manager. The `min-column-width` attribute sets this variable.

## Cssproperty

--min-row-height - The minimum size of the rows in the tile-manager. The `min-row-height` attribute sets this variable.

## Cssproperty

--grid-gap - The gap size of the underlying CSS grid container. The `gap` attributes sts this variable.

## Extends

- `LitElement`

## Other

### columnCount

#### Set Signature

> **set** **columnCount**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:132](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L132)

Sets the number of columns for the tile manager.
Setting value <= than zero will trigger a responsive layout.

##### Attr

column-count

##### Default

```ts
0
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dragMode

#### Set Signature

> **set** **dragMode**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:115](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L115)

Whether drag and drop operations are enabled.

##### Attr

drag-mode

##### Default

```ts
none
```

##### Parameters

###### value

`TileManagerDragMode`

##### Returns

`void`

***

### gap

#### Set Signature

> **set** **gap**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:181](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L181)

Sets the gap size between tiles in the tile manager.

##### Attr

gap

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### minColumnWidth

#### Set Signature

> **set** **minColumnWidth**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:148](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L148)

Sets the minimum width for a column unit in the tile manager.

##### Attr

min-column-width

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### minRowHeight

#### Set Signature

> **set** **minRowHeight**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:164](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L164)

Sets the minimum height for a row unit in the tile manager.

##### Attr

min-row-height

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### resizeMode

#### Set Signature

> **set** **resizeMode**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:99](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L99)

Whether resize operations are enabled.

##### Attr

resize-mode

##### Default

```ts
none
```

##### Parameters

###### value

`TileManagerResizeMode`

##### Returns

`void`

***

### tiles

#### Get Signature

> **get** **tiles**(): [`IgcTileComponent`](IgcTileComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:196](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L196)

Gets the tiles sorted by their position in the layout.

##### Returns

[`IgcTileComponent`](IgcTileComponent.md)[]

***

### loadLayout()

> **loadLayout**(`data`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:267](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L267)

Restores a previously serialized state produced by `saveLayout`.

#### Parameters

##### data

`string`

#### Returns

`void`

***

### saveLayout()

> **saveLayout**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:260](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L260)

Returns the properties of the current tile collections as a JSON payload.

#### Returns

`string`

#### Remarks

The content of the tiles is not serialized or saved. Only tile properties
are serialized.

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile-manager.ts:46](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile-manager.ts#L46)

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
