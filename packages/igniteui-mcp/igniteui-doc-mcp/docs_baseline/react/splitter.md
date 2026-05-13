---
title: React Splitter Component | Layout Controls | Infragistics
_description: Use the Ignite UI for React Splitter component to create two resizable panes with horizontal or vertical layouts, collapse and expand behavior, keyboard support, and nested split views.
_keywords: splitter, split panes, resizable panes, web components splitter, React splitter, Ignite UI for React
_license: MIT
mentionedTypes: ["Splitter", "SplitterResizeEventArgs"]
_tocName: Splitter
---

# React Splitter Overview

The Ignite UI for React Splitter provides a resizable split-pane layout that divides content into two areas: `start` and `end`. Users can drag the splitter bar, use keyboard shortcuts, or collapse and expand panes with built-in controls. You can also nest splitters to build complex dashboard-style layouts.

## React Splitter Example

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrSplitter,
    IgrSwitch,
    IgrSwitchChangeEventArgs,
    SplitterOrientation,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export interface SplitterOverviewState {
    orientation: SplitterOrientation;
    disableCollapse: boolean;
    disableResize: boolean;
    hideDragHandle: boolean;
    hideCollapseButtons: boolean;
}

export default class SplitterOverview extends React.Component<any, SplitterOverviewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            orientation: 'horizontal',
            disableCollapse: false,
            disableResize: false,
            hideDragHandle: false,
            hideCollapseButtons: false,
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="controls">
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ orientation: e.detail.checked ? 'vertical' : 'horizontal' })}>
                        <span>Make Splitter Vertical</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ disableCollapse: e.detail.checked })}>
                        <span>Disable Collapse</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ disableResize: e.detail.checked })}>
                        <span>Disable Resize</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ hideDragHandle: e.detail.checked })}>
                        <span>Hide Drag Handle</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ hideCollapseButtons: e.detail.checked })}>
                        <span>Hide Collapse Buttons</span>
                    </IgrSwitch>
                </div>
                <IgrSplitter
                    style={{ height: 'calc(100vh - 60px)', width: '100%' }}
                    orientation={this.state.orientation}
                    disableCollapse={this.state.disableCollapse}
                    disableResize={this.state.disableResize}
                    hideDragHandle={this.state.hideDragHandle}
                    hideCollapseButtons={this.state.hideCollapseButtons}
                >
                    <div slot="start">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan.
                        </p>
                    </div>
                    <div slot="end">
                        <p>
                            Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
                        </p>
                    </div>
                </IgrSplitter>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SplitterOverview />);
```

<div class="divider--half"></div>

## Getting Started with React Splitter

First, you need to install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrSplitter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html) and its necessary CSS, like so:

```tsx
import { IgrSplitter } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

## Using React Splitter

Use the `start` and `end` slots to place pane content:

```tsx
<IgrSplitter>
  <div slot="start">Start pane content</div>
  <div slot="end">End pane content</div>
</IgrSplitter>
```

### Orientation

Set the [`orientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#orientation) property to control pane direction:

- `horizontal` (default): start and end panes are rendered left and right.
- `vertical`: start and end panes are rendered top and bottom.

```tsx
<IgrSplitter orientation="vertical">
  <div slot="start">Top pane</div>
  <div slot="end">Bottom pane</div>
</IgrSplitter>
```

### Pane Size and Constraints

Use size properties to set initial and constrained pane sizes:

- [`startSize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#startSize), [`endSize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#endSize)
- [`startMinSize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#startMinSize), [`endMinSize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#endMinSize)
- [`startMaxSize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#startMaxSize), [`endMaxSize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#endMaxSize)

Values accept CSS length values such as `px` and `%`.

```tsx
<IgrSplitter
  startSize="35%"
  endSize="65%"
  startMinSize="200px"
  endMinSize="180px"
>
  <div slot="start">Navigation</div>
  <div slot="end">Main content</div>
</IgrSplitter>
```

### Collapsing and Resizing

Use these properties to control interactions:

- [`disableResize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#disableResize): disables pane resizing.
- [`disableCollapse`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#disableCollapse): disables pane collapsing.
- [`hideDragHandle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#hideDragHandle): hides the drag handle.
- [`hideCollapseButtons`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#hideCollapseButtons): hides collapse and expand buttons.

You can also collapse or expand panes programmatically:

```tsx
import { useRef } from 'react';

const splitterRef = useRef<IgrSplitterComponent>(null);

const toggleStartPane = () => {
  splitterRef.current?.toggle('start');
};
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrSplitter,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class SplitterOverview extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div id="root">
                <IgrSplitter style={{ height: '100vh', width: '100%' }}>
                    <IgrSplitter slot="start" orientation="vertical" start-size="50%">
                        <div slot="start">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan.
                            </p>
                        </div>
                        <div slot="end">
                            <p>
                                Suspendisse potenti. Mauris vehicula neque ullamcorper tortor pulvinar gravida. Integer porttitor orci ex, ac vehicula nisi ultricies vel. Phasellus feugiat, urna eget congue sollicitudin, augue mi vulputate velit, in porttitor lacus orci sit amet eros. Donec mollis tempor mi. Ut sed justo consectetur, laoreet orci id, vestibulum velit. Aliquam ultricies arcu nec placerat eleifend. Integer ornare auctor mauris, vitae placerat est hendrerit ut.
                            </p>
                        </div>
                    </IgrSplitter>
                    <IgrSplitter slot="end" orientation="vertical">
                        <div slot="start">
                            <p>
                                Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
                            </p>
                        </div>
                        <div slot="end">
                            <p>
                                Suspendisse potenti. Proin faucibus venenatis purus in pellentesque. Nunc eget justo pretium massa pellentesque sodales. Phasellus orci ligula, condimentum et faucibus id, faucibus sit amet mauris. Praesent consequat cursus mauris, eget tempus lorem. Quisque vel leo nec massa aliquam pellentesque sit amet vel erat. Phasellus at mauris laoreet, egestas magna eget, dignissim nisl. Etiam non nibh nec orci elementum facilisis a vel tortor. Praesent sagittis mattis risus non tincidunt.
                            </p>
                        </div>
                    </IgrSplitter>
                </IgrSplitter>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SplitterOverview />);
```

## Events

The Splitter emits the following events during resize operations:

- [`onResizeStart`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#onResizeStart): fired once when resizing starts.
- [`onResizing`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#onResizing): fired continuously while resizing.
- [`onResizeEnd`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html#onResizeEnd): fired once when resizing ends.

The event detail includes current `StartPanelSize`, `EndPanelSize`, and `Delta` for ongoing and end events.

```tsx
const handleResizeEnd = (event: CustomEvent<IgcSplitterResizeEventArgs>) => {
  console.log(event.detail.startPanelSize, event.detail.endPanelSize, event.detail.delta);
};

<IgrSplitter onResizeEnd={handleResizeEnd}>
  <div slot="start">Start pane</div>
  <div slot="end">End pane</div>
</IgrSplitter>
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

The [`IgrSplitter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html) component exposes CSS parts for styling:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrSplitter,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class SplitterOverview extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div id="root">
                <IgrSplitter style={{ height: '100vh', width: '100%' }}>
                    <div slot="start">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan. Curabitur id tortor laoreet, luctus justo sit amet, viverra mi. Nunc laoreet auctor metus eget suscipit. Vestibulum vestibulum imperdiet pharetra. Sed ac dignissim dui. In vitae suscipit nunc. Praesent vel felis nulla. Nullam non justo elit. Ut quis eleifend libero. Morbi ut maximus dui, non tristique risus.
                        </p>
                    </div>
                    <div slot="end">
                        <p>
                            Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus. Maecenas efficitur nibh elementum, pellentesque sapien sit amet, fermentum sem. Pellentesque nisl mi, porta eget viverra a, tincidunt ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                </IgrSplitter>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SplitterOverview />);
```

## API References

- [`IgrSplitter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsplitter.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
