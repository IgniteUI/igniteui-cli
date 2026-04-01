# Class: IgcTileComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:97](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L97)

The tile component is used within the `igc-tile-manager` as a container
for displaying various types of information.

## Element

igc-tile

## Fires

igcTileFullscreen - Fired when tile the fullscreen state changes.

## Fires

igcTileMaximize - Fired when tile the maximize state changes.

## Fires

igcTileDragStart - Fired when a drag operation on a tile is about to begin. Cancelable.

## Fires

igcTileDragEnd - Fired when a drag operation with a tile is successfully completed.

## Fires

igcTileDragCancel - Fired when a tile drag operation is canceled by the user.

## Fires

igcTileResizeStart - Fired when a resize operation on a tile is about to begin. Cancelable.

## Fires

igcTileResizeEnd - Fired when a resize operation on a tile is successfully completed.

## Fires

igcTileResizeCancel - Fired when a resize operation on a tile is canceled by the user.

## Slot

- Default slot for the tile's content.

## Slot

title - Renders the title of the tile header.

## Slot

maximize-action - Renders the maximize action element of the tile header.

## Slot

fullscreen-action - Renders the fullscreen action element of the tile header.

## Slot

actions - Renders items after the default actions in the tile header.

## Slot

side-adorner - Renders the side resize handle of the tile.

## Slot

corner-adorner - Renders the corner resize handle of the tile.

## Slot

bottom-adorner - Renders the bottom resize handle of the tile.

## Csspart

base - The wrapper for the entire tile content, header and content.

## Csspart

header - The container for the tile header, including title and actions.

## Csspart

title - The title container of the tile.

## Csspart

actions - The actions container of the tile header.

## Csspart

content-container - The container wrapping the tile’s main content.

## Csspart

trigger-side - The part for the side adorner of the encapsulated resize element in the tile.

## Csspart

trigger - The part for the corner adorner of the encapsulated resize element in the tile.

## Csspart

trigger-bottom - The part for the bottom adorner of the encapsulated resize element in the tile.

## Extends

- `EventEmitterInterface`\<`IgcTileComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### disableFullscreen

> **disableFullscreen**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:329](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L329)

Whether to disable the rendering of the tile `fullscreen-action` slot and its
default fullscreen action button.

#### Attr

disable-fullscreen

#### Default

```ts
false
```

***

### disableMaximize

> **disableMaximize**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:339](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L339)

Whether to disable the rendering of the tile `maximize-action` slot and its
default maximize action button.

#### Attr

disable-maximize

#### Default

```ts
false
```

***

### disableResize

> **disableResize**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:319](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L319)

Indicates whether to disable tile resize behavior regardless
ot its tile manager parent settings.

#### Attr

disable-resize

#### Default

```ts
false
```

***

### tagName

> `readonly` `static` **tagName**: `"igc-tile"` = `'igc-tile'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:101](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L101)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### colSpan

#### Set Signature

> **set** **colSpan**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:219](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L219)

The number of columns the tile will span.

##### Remarks

When setting a value that is less than 1, it will be
coerced to 1.

##### Attr

col-span

##### Default

```ts
1
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### colStart

#### Set Signature

> **set** **colStart**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:254](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L254)

The starting column for the tile.

##### Attr

col-start

##### Parameters

###### value

`number` \| `null`

##### Returns

`void`

***

### fullscreen

#### Get Signature

> **get** **fullscreen**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:289](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L289)

Indicates whether the tile occupies the whole screen.

##### Returns

`boolean`

***

### maximized

#### Set Signature

> **set** **maximized**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:299](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L299)

Indicates whether the tile occupies all available space within the layout.

##### Attr

maximized

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### position

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:348](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L348)

Gets/sets the tile's visual position in the layout.
Corresponds to the CSS `order` property.

##### Attr

position

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rowSpan

#### Set Signature

> **set** **rowSpan**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:239](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L239)

The number of rows the tile will span.

##### Remarks

When setting a value that is less than 1, it will be
coerced to 1.

##### Attr

row-span

##### Default

```ts
1
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rowStart

#### Set Signature

> **set** **rowStart**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tile-manager/tile.ts:272](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tile-manager/tile.ts#L272)

The starting row for the tile.

##### Attr

row-start

##### Parameters

###### value

`number` \| `null`

##### Returns

`void`
