---
title: Web Components Splitter Component | Layout Controls | Infragistics
_description: Use the Ignite UI for Web Components Splitter component to create two resizable panes with horizontal or vertical layouts, collapse and expand behavior, keyboard support, and nested split views.
_keywords: splitter, split panes, resizable panes, web components splitter, Web Components splitter, Ignite UI for Web Components
_license: MIT
mentionedTypes: ["Splitter", "SplitterResizeEventArgs"]
_tocName: Splitter
---

# Web Components Splitter Overview

The Ignite UI for Web Components Splitter provides a resizable split-pane layout that divides content into two areas: `start` and `end`. Users can drag the splitter bar, use keyboard shortcuts, or collapse and expand panes with built-in controls. You can also nest splitters to build complex dashboard-style layouts.

## Web Components Splitter Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.controls {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    padding: 12px 16px;
    height: 60px;
    box-sizing: border-box;
}

p {
    padding: 0 16px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Getting Started with Web Components Splitter

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcSplitterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcSplitterComponent } from 'igniteui-webcomponents';

defineComponents(IgcSplitterComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

## Using Web Components Splitter

Use the `start` and `end` slots to place pane content:

```html
<igc-splitter style="height: 400px;">
  <div slot="start">Start pane content</div>
  <div slot="end">End pane content</div>
</igc-splitter>
```

### Orientation

Set the [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#orientation) property to control pane direction:

- `horizontal` (default): start and end panes are rendered left and right.
- `vertical`: start and end panes are rendered top and bottom.

```html
<igc-splitter orientation="vertical" style="height: 400px;">
  <div slot="start">Top pane</div>
  <div slot="end">Bottom pane</div>
</igc-splitter>
```

### Pane Size and Constraints

Use size properties to set initial and constrained pane sizes:

- [`startSize`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#startSize), [`endSize`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#endSize)
- [`startMinSize`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#startMinSize), [`endMinSize`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#endMinSize)
- [`startMaxSize`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#startMaxSize), [`endMaxSize`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#endMaxSize)

Values accept CSS length values such as `px` and `%`.

```html
<igc-splitter
  start-size="35%"
  end-size="65%"
  start-min-size="200px"
  end-min-size="180px"
  style="height: 420px;"
>
  <div slot="start">Navigation</div>
  <div slot="end">Main content</div>
</igc-splitter>
```

### Collapsing and Resizing

Use these properties to control interactions:

- [`disableResize`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#disableResize): disables pane resizing.
- [`disableCollapse`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#disableCollapse): disables pane collapsing.
- [`hideDragHandle`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#hideDragHandle): hides the drag handle.
- [`hideCollapseButtons`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html#hideCollapseButtons): hides collapse and expand buttons.

You can also collapse or expand panes programmatically:

```ts
const splitter = document.querySelector('igc-splitter') as IgcSplitterComponent;

splitter.toggle('start'); // collapse start pane
splitter.toggle('start'); // expand start pane
```

### Nested Splitters

Splitters can be nested to create multi-region layouts.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
p {
    padding: 0 16px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Events

The Splitter emits the following events during resize operations:

- `igcResizeStart`: fired once when resizing starts.
- `igcResizing`: fired continuously while resizing.
- `igcResizeEnd`: fired once when resizing ends.

The event detail includes current `startPanelSize`, `endPanelSize`, and `delta` for ongoing and end events.

```ts
const splitter = document.querySelector('igc-splitter');

splitter?.addEventListener('igcResizeEnd', (event: CustomEvent) => {
  console.log(event.detail.startPanelSize, event.detail.endPanelSize, event.detail.delta);
});
```

## Keyboard Navigation

When the splitter bar is focused:

| Keys | Description |
| ---- | ----------- |
| <kbd>Arrow Left</kbd> / <kbd>Arrow Right</kbd> | Resize panes in horizontal orientation |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Resize panes in vertical orientation |
| <kbd>Home</kbd> | Snap start pane to its minimum size |
| <kbd>End</kbd> | Snap start pane to its maximum size |
| <kbd>Ctrl</kbd> + <kbd>Arrow Left</kbd> / <kbd>Arrow Up</kbd> | Collapse or expand the start pane |
| <kbd>Ctrl</kbd> + <kbd>Arrow Right</kbd> / <kbd>Arrow Down</kbd> | Collapse or expand the end pane |

## Styling

The [`IgcSplitterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html) component exposes CSS parts for styling:

| Name | Description |
| ---- | ----------- |
| `splitter-bar` | The draggable separator between panes |
| `drag-handle` | The drag handle element in the splitter bar |
| `start-pane` | The start pane container |
| `end-pane` | The end pane container |
| `start-collapse-btn` | Button that collapses the start pane |
| `end-collapse-btn` | Button that collapses the end pane |
| `start-expand-btn` | Button that expands the start pane |
| `end-expand-btn` | Button that expands the end pane |

It also supports theme CSS variables, including:

- `--bar-color`
- `--handle-color`
- `--expander-color`
- `--bar-color-active`
- `--handle-color-active`
- `--expander-color-active`
- `--focus-color`
- `--size`

```css
igc-splitter {
  --bar-color: #011627;
  --handle-color: #ecaa53;
  --expander-color: #ecaa53;
  --bar-color-active: #011627;
  --handle-color-active: #ecaa53;
  --expander-color-active: #ecaa53;
  --focus-color: #ecaa53;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-splitter {
    --bar-color: #011627;
    --handle-color: #ecaa53;
    --expander-color: #ecaa53;
    --bar-color-active: #011627;
    --handle-color-active: #ecaa53;
    --expander-color-active: #ecaa53;
    --focus-color: #ecaa53;
}

p {
    padding: 0 16px;
}
```

## API References

- [`IgcSplitterComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsplittercomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
