---
title: React Highlight | Infragistics
description: Infragistics' React Highlight component allows you to search for specific text in the page content and highlight it.
keywords: React, UI controls, web widgets, UI widgets, React Highlight Components, Infragistics
license: MIT
mentionedTypes: ["Highlight"]
llms:
  description: "Ignite UI for React Highlight is used to highlight parts of the page content to make it more noticeable for the user."
_tocName: Highlight
---
# React Highlight Overview

Ignite UI for React Highlight is used to highlight parts of the page content to make it more noticeable for the user. It's a lightweight component that can be used in combination with other components to create a more interactive and engaging user experience.

<igc-divider></igc-divider>

## Usage

To use the `IgrHighlight` component, all you need to do is wrap its tags around the content you want to search. The component searches the content of all nested elements within the `<IgrHighlight>` tags, and highlights all matches of the specified string.

**Note:** 
The `IgrHighlight` component searches only DOM text nodes. It does not search input values or content set via the CSS `content` property.

First, you need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `IgrHighlight` and its necessary CSS, like so:

```tsx
import { IgrHighlight } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the `IgrHighlight` component is as follows:

```tsx
<IgrHighlight search-text='dolor'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</IgrHighlight>
```

The `<IgrHighlight>` tags wrap the content in which you want to highlight the specific string.

The text to be highlighted is set via the [`search-text`](mcp:get_api_reference?platform=react&component=IgrBaseSearchInfo&member=searchText) attribute. In the example above, the word "dolor" will be highlighted.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrHighlight } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class HighlightOverview extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <div className="sample">
      <IgrHighlight search-text="dolor">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
          odit id excepturi ipsum provident eaque dignissimos beatae!
        </p>
      </IgrHighlight>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HighlightOverview/>);
```

### Case Sensitive Match

The `IgrHighlight` component also exposes a [`case-sensitive`](mcp:get_api_reference?platform=react&component=IgrBaseSearchInfo&member=caseSensitive) attribute. Its default value is `false`, which enables case-insensitive matching. By setting it to `true`, you can enable case-sensitive matching.

The following snippet:

```tsx
<IgrHighlight search-text='lorem' case-sensitive={true}>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</IgrHighlight>
```

This returns 0 matches because the search text "lorem" is in lowercase, while the text in the content is **Lorem** with an uppercase **L**.

### Using Highlight with a Search Input

The most common use case is binding the `IgrHighlight` component to a search [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput) component, so that search matches are highlighted in real time as the user types.

To bind the two together, you can listen to the `igcInput` event of the [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput) component and set the [`search-text`](mcp:get_api_reference?platform=react&component=IgrBaseSearchInfo&member=searchText) attribute of the `IgrHighlight` component to the input value every time the event is fired (you can also use the standard `input` event).

First, you need to access the `IgrHighlight` component to manipulate its properties. The easiest way to do this is via a reference:

```tsx
import { useRef } from 'react';
```

```tsx
const highlightRef = useRef<IgrHighlight>(null);
```

```tsx
<IgrHighlight ref={highlightRef}>
    ...
</IgrHighlight>
```

Then, create a function that updates the search text, called every time the `igcInput` event fires:

```tsx
const onInput = ({ detail }: CustomEvent<string>) => {
    highlightRef.current.searchText = detail;
};
```

```tsx
<IgrInput label="Search" onigcInput={onInput}></IgrInput>
```

### Methods

The component also exposes two methods for navigating the search matches. The `next()` method moves to the next match, while the `previous()` method moves to the previous one.

With them, we can make the search more interactive by adding two buttons to navigate between matches:

```tsx
const highlightRef = useRef<IgrHighlight>(null);

const prev = () => {
    highlightRef.current?.previous();
};

const next = () => {
    highlightRef.current?.next();
};
```

```tsx
<IgrInput label="Search">
    <IgrIconButton onClick={prev} variant="flat" name="navigate_before" collection="internal" slot="suffix"></IgrIconButton>
    <IgrIconButton onClick={next} variant="flat" name="navigate_next" collection="internal" slot="suffix"></IgrIconButton>
</IgrInput>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-divider {
  margin-block-start: 20px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrInput, IgrHighlight, IgrDivider, IgrIconButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default class HighlightSearch extends React.Component<any, any> {
  private highlightRef = React.createRef<IgrHighlight>();

  private onInput = ({ detail }: CustomEvent<string>) => {
    if (!this.highlightRef) return;
    this.highlightRef.current.searchText = detail;
  };

  private prev = () => {
    this.highlightRef?.current.previous({preventScroll: true});
  };

  private next = () => {
    this.highlightRef?.current.next({preventScroll: true});
  };

  public render(): JSX.Element {
    return (
      <div className="sample">
      <div className="search-bar">
        <IgrInput label="Search" onigcInput={this.onInput}>
          <IgrIconButton onClick={this.prev} id="prev-btn" variant="flat" name="navigate_before" collection="internal" slot="suffix"></IgrIconButton>
          <IgrIconButton onClick={this.next} id="next-btn" variant="flat" name="navigate_next" collection="internal" slot="suffix"></IgrIconButton>
        </IgrInput>
      </div>
      <IgrDivider></IgrDivider>
      <IgrHighlight ref={this.highlightRef}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
          odit id excepturi ipsum provident eaque dignissimos beatae! Rerum vero
          distinctio libero, quasi magni quod natus nesciunt doloremque temporibus
          voluptate?
        </p>
      </IgrHighlight>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HighlightSearch/>);
```

Both the `previous()` and `next()` methods accept a `IgrHighlight.preventScroll` option that prevents the page from scrolling to the active match during navigation. By default, it is set to `false`.

```tsx
const prev = () => {
    highlightRef.current?.previous({ preventScroll: true });
};

const next = () => {
    highlightRef.current?.next({ preventScroll: true });
};
```

### Additional Features

The component also exposes two read-only properties for tracking match state: `size` returns the total number of matches, and `current` returns the index of the active match.

They are useful for building a search status indicator that shows the user which match they are on and how many matches exist in total.

Here is a simple example of how to use those properties to create a search status:

```tsx
const highlightRef = useRef<IgrHighlight>(null);
const statusRef = useRef<HTMLParagraphElement>(null);

const updateStatus = () => {
    const highlight = highlightRef.current;
    const status = statusRef.current;

    status.textContent = highlight.size
      ? `${highlight.current + 1} of ${highlight.size} match${highlight.size === 1 ? '' : 'es'}`
      : '';
}
```

We can then call `updateStatus()` every time the input value changes or the user clicks the next or previous buttons:

```tsx
const onInput = ({ detail }: CustomEvent<string>) => {
    highlightRef.current.searchText = detail;
    updateStatus();
};

const prev = () => {
    highlightRef.current?.previous();
    updateStatus();
};

const next = () => {
    highlightRef.current?.next();
    updateStatus();
};

```

```tsx
<IgrInput label="Search" onigcInput={onInput}>
    <IgrIconButton onClick={prev} variant="flat" name="navigate_before" collection="internal" slot="suffix" ></IgrIconButton>
    <IgrIconButton onClick={next} variant="flat" name="navigate_next" collection="internal" slot="suffix" ></IgrIconButton>
    <p ref={statusRef} slot="helper-text"></p>
</IgrInput>

<IgrHighlight ref={highlightRef}></IgrHighlight>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrInput, IgrHighlight, IgrIconButton, IgrDivider, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class HighlightHelperText extends React.Component<any, any> {
  private highlightRef = React.createRef<IgrHighlight>();
  private statusRef = React.createRef<HTMLParagraphElement>();

  private updateStatus() {
    const highlight = this.highlightRef.current;
    const status = this.statusRef.current;
    if (!highlight || !status) return;

    status.textContent = highlight.size
      ? `${highlight.current + 1} of ${highlight.size} match${highlight.size === 1 ? '' : 'es'}`
      : '';
  }

  private onInput = ({ detail }: CustomEvent<string>) => {
    if (!this.highlightRef.current) return;
    this.highlightRef.current.searchText = detail;
    this.updateStatus();
  };

  private prev = () => {
    this.highlightRef.current?.previous({preventScroll: true});
    this.updateStatus();
  };

  private next = () => {
    this.highlightRef.current?.next({preventScroll: true});
    this.updateStatus();
  };

  public render(): JSX.Element {
    return (
      <div className="sample">
        <div className="search-bar">
          <IgrInput label="Search" onigcInput={this.onInput as any}>
            <IgrIconButton variant="flat" name="navigate_before" collection="internal" slot="suffix" onClick={this.prev}></IgrIconButton>
            <IgrIconButton variant="flat" name="navigate_next" collection="internal" slot="suffix" onClick={this.next}></IgrIconButton>
            <p ref={this.statusRef} slot="helper-text"></p>
          </IgrInput>
        </div>
        <IgrDivider></IgrDivider>
        <IgrHighlight ref={this.highlightRef}>
          <h1>Document Object Model</h1>
          <IgrExpansionPanel open>
            <h2 slot="title">Overview</h2>
            <section>
              <p>
                The Document Object Model (DOM) is a cross-platform and
                language-independent interface that treats an HTML or XML document
                as a tree structure wherein each node is an object representing a
                part of the document. The DOM represents a document with a logical
                tree. Each branch of the tree ends in a node, and each node
                contains objects. DOM methods allow programmatic access to the
                tree; with them one can change the structure, style or content of
                a document. Nodes can have event handlers (also known as event
                listeners) attached to them. Once an event is triggered, the event
                handlers get executed.
              </p>
              <p>
                The principal standardization of the DOM was handled by the World
                Wide Web Consortium (W3C), which last developed a recommendation
                in 2004. WHATWG took over the development of the standard,
                publishing it as a living document. The W3C now publishes stable
                snapshots of the WHATWG standard.
              </p>
              <p>In HTML DOM (Document Object Model), every element is a node:</p>
              <ul>
                <li>A document is a document node.</li>
                <li>All HTML elements are element nodes.</li>
                <li>All HTML attributes are attribute nodes.</li>
                <li>Text inserted into HTML elements are text nodes.</li>
                <li>Comments are comment nodes.</li>
              </ul>
            </section>
          </IgrExpansionPanel>
        </IgrHighlight>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HighlightHelperText/>);
```

## Styling

The `IgrHighlight` component exposes four CSS variables which can be used to style the whole component:
- `--foreground` The text color for a highlighted text node.
- `--background` The background color for a highlighted text node.
- `--foreground-active` The text color for the active highlighted text node.
- `--background-active` The background color for the active highlighted text node.

```css
igc-highlight {
    --background: var(--ig-gray-700);
    --foreground: var(--ig-gray-700-contrast);
    --background-active: var(--ig-warn-500);
    --foreground-active: var(--ig-warn-500-contrast);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-highlight {
  --background: var(--ig-gray-700);
  --foreground: var(--ig-gray-700-contrast);
  --background-active: var(--ig-warn-500);
  --foreground-active: var(--ig-warn-500-contrast);
}

igc-divider {
  margin-block-start: 20px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrInput, IgrHighlight, IgrDivider, IgrIconButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default class HighlightStyling extends React.Component<any, any> {
  private highlightRef = React.createRef<IgrHighlight>();

  private onInput = ({ detail }: CustomEvent<string>) => {
    if (!this.highlightRef) return;
    this.highlightRef.current.searchText = detail;
  };

  private prev = () => {
    this.highlightRef?.current.previous({preventScroll: true});
  };

  private next = () => {
    this.highlightRef?.current.next({preventScroll: true});
  };

  public render(): JSX.Element {
    return (
      <div className="sample">
      <div>
        <IgrInput label="Search" onigcInput={this.onInput as any}>
          <IgrIconButton onClick={this.prev} id="prev-btn" variant="flat" name="navigate_before" collection="internal" slot="suffix"></IgrIconButton>
          <IgrIconButton onClick={this.next} id="next-btn" variant="flat" name="navigate_next" collection="internal" slot="suffix"></IgrIconButton>
        </IgrInput>
      </div>
      <IgrDivider></IgrDivider>
      <IgrHighlight search-text="ipsum" ref={this.highlightRef}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
          odit id excepturi ipsum provident eaque dignissimos beatae! Rerum vero
          distinctio libero, quasi magni quod natus nesciunt doloremque temporibus
          voluptate?
        </p>
      </IgrHighlight>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HighlightStyling/>);
```

## API References

`IgrHighlight`

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
