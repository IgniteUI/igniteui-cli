# Class: IgcSplitterComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:132](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L132)

The `igc-splitter` component provides a resizable split-pane layout that divides the view
into two panels — *start* and *end* — separated by a draggable bar.

Panels can be resized by dragging the bar, using keyboard shortcuts, or collapsed/expanded
using the built-in collapse buttons or the programmatic `toggle()` API.
Nested splitters are supported for more complex layouts.

## Examples

```html
<!-- Basic horizontal splitter -->
<igc-splitter>
  <div slot="start">Start panel</div>
  <div slot="end">End panel</div>
</igc-splitter>
```

```html
<!-- Vertical splitter with size constraints -->
<igc-splitter orientation="vertical" start-min-size="100px" end-min-size="100px">
  <div slot="start">Top panel</div>
  <div slot="end">Bottom panel</div>
</igc-splitter>
```

```html
<!-- Nested splitters for a multi-pane layout -->
<igc-splitter style="height: 600px;">
  <igc-splitter slot="start" orientation="vertical">
    <div slot="start">Top left</div>
    <div slot="end">Bottom left</div>
  </igc-splitter>
  <div slot="end">Right panel</div>
</igc-splitter>
```

```ts
// Programmatically collapse/expand a pane
const splitter = document.querySelector('igc-splitter');
splitter.toggle('start'); // collapse start pane
splitter.toggle('start'); // expand start pane
```

## Keyboard interactions

When the splitter bar is focused:

| Key | Action |
|---|---|
| `Arrow Left` / `Arrow Right` | Resize panes (horizontal orientation) |
| `Arrow Up` / `Arrow Down` | Resize panes (vertical orientation) |
| `Home` | Snap start pane to its minimum size |
| `End` | Snap start pane to its maximum size |
| `Ctrl + Arrow Left` / `Ctrl + Arrow Up` | Collapse or expand the start pane |
| `Ctrl + Arrow Right` / `Ctrl + Arrow Down` | Collapse or expand the end pane |

## Element

igc-splitter

## Fires

igcResizeStart - Emitted once when a resize operation begins (pointer drag or keyboard).

## Fires

igcResizing - Emitted continuously while a pane is being resized.

## Fires

igcResizeEnd - Emitted once when a resize operation completes.

## Slot

start - Content projected into the start (left/top) panel.

## Slot

end - Content projected into the end (right/bottom) panel.

## Csspart

splitter-bar - The resizable bar element between the two panels.

## Csspart

drag-handle - The drag handle icon/element on the splitter bar.

## Csspart

start-pane - The container for the start panel content.

## Csspart

end-pane - The container for the end panel content.

## Csspart

start-collapse-btn - The button to collapse the start panel.

## Csspart

end-collapse-btn - The button to collapse the end panel.

## Csspart

start-expand-btn - The button to expand the start panel when collapsed.

## Csspart

end-expand-btn - The button to expand the end panel when collapsed.

## Extends

- `EventEmitterInterface`\<`IgcSplitterComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### disableCollapse

> **disableCollapse**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:208](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L208)

When true, prevents the user from collapsing either pane.
This also hides the expand/collapse buttons on the splitter bar.

#### Attr

disable-collapse

#### Default

```ts
false
```

***

### disableResize

> **disableResize**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:218](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L218)

When true, prevents the user from resizing the panes by dragging the splitter bar or using keyboard shortcuts.
This also hides the drag handle on the splitter bar.

#### Attr

disable-resize

#### Default

```ts
false
```

***

### hideCollapseButtons

> **hideCollapseButtons**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:234](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L234)

When true, hides the expand/collapse buttons on the splitter bar.

Note that the buttons will also be hidden if `disable-collapse` is true or
if a pane is currently collapsed.

#### Attr

hide-collapse-buttons

#### Default

```ts
false
```

***

### hideDragHandle

> **hideDragHandle**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:249](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L249)

When true, hides the drag handle on the splitter bar.

Note that the drag handle will also be hidden if `disable-resize` is true.

#### Attr

hide-drag-handle

#### Default

```ts
false
```

***

### orientation

> **orientation**: `SplitterOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:198](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L198)

The orientation of the splitter, which determines the direction of resizing and collapsing.

#### Attr

orientation

#### Default

```ts
'horizontal'
```

***

### tagName

> `readonly` `static` **tagName**: `"igc-splitter"` = `'igc-splitter'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:136](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L136)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### endMaxSize

#### Set Signature

> **set** **endMaxSize**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:299](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L299)

The maximum size of the end pane.

##### Attr

end-max-size

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### endMinSize

#### Set Signature

> **set** **endMinSize**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:271](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L271)

The minimum size of the end pane.

##### Attr

end-min-size

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### endSize

#### Set Signature

> **set** **endSize**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:327](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L327)

The size of the end pane.

##### Attr

end-size

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### startMaxSize

#### Set Signature

> **set** **startMaxSize**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:285](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L285)

The maximum size of the start pane.

##### Attr

start-max-size

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### startMinSize

#### Set Signature

> **set** **startMinSize**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:257](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L257)

The minimum size of the start pane.

##### Attr

start-min-size

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### startSize

#### Set Signature

> **set** **startSize**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:313](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L313)

The size of the start pane.

##### Attr

start-size

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

## Methods

### toggle()

> **toggle**(`position`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/splitter/splitter.ts:460](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/splitter/splitter.ts#L460)

Toggles the collapsed state of the specified pane.

#### Parameters

##### position

`PanePosition`

#### Returns

`void`
