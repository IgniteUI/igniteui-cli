---
title: Web Components Highlight | Infragistics
description: Infragistics' Web Components Highlight component allows you to search for specific text in the page content and highlight it.
keywords: Web Components, UI controls, web widgets, UI widgets, Web Components Highlight Components, Infragistics
license: MIT
mentionedTypes: ["Highlight"]
llms:
  description: "Ignite UI for Web Components Highlight is used to highlight parts of the page content to make it more noticeable for the user."
_tocName: Highlight
---
# Web Components Highlight Overview

Ignite UI for Web Components Highlight is used to highlight parts of the page content to make it more noticeable for the user. It's a lightweight component that can be used in combination with other components to create a more interactive and engaging user experience.

<igc-divider></igc-divider>

## Usage

To use the [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component, all you need to do is wrap its tags around the content you want to search. The component searches the content of all nested elements within the `<igc-highlight>` tags, and highlights all matches of the specified string.

**Note:** 
The [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component searches only DOM text nodes. It does not search input values or content set via the CSS `content` property.

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcHighlightComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcHighlightComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component is as follows:

```html
<igc-highlight search-text='dolor'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</igc-highlight>
```

The `<igc-highlight>` tags wrap the content in which you want to highlight the specific string.

The text to be highlighted is set via the [`search-text`](mcp:get_api_reference?platform=webcomponents&component=IgcBaseSearchInfo&member=searchText) attribute. In the example above, the word "dolor" will be highlighted.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Case Sensitive Match

The [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component also exposes a [`case-sensitive`](mcp:get_api_reference?platform=webcomponents&component=IgcBaseSearchInfo&member=caseSensitive) attribute. Its default value is `false`, which enables case-insensitive matching. By setting it to `true`, you can enable case-sensitive matching.

The following snippet:

```html
<igc-highlight search-text='lorem' case-sensitive='true'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</igc-highlight>
```

This returns 0 matches because the search text "lorem" is in lowercase, while the text in the content is **Lorem** with an uppercase **L**.

### Using Highlight with a Search Input

The most common use case is binding the [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component to a search [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) component, so that search matches are highlighted in real time as the user types.

To bind the two together, you can listen to the `igcInput` event of the [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) component and set the [`search-text`](mcp:get_api_reference?platform=webcomponents&component=IgcBaseSearchInfo&member=searchText) attribute of the [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component to the input value every time the event is fired (you can also use the standard `input` event).

First, you need to access the [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component to manipulate its properties:

```ts
const highlight = document.querySelector('igc-highlight') as IgcHighlightComponent;
```

Then, create a function that updates the search text every time the `igcInput` event fires:

```ts
const onInput = ({ detail }: CustomEvent<string>) => {
    highlight.searchText = detail;
};

document.querySelector('igc-input')?.addEventListener('igcInput', onInput);
```

```html
<igc-input label="Search"></igc-input>
<igc-highlight>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus odit id excepturi ipsum provident eaque dignissimos beatae!
    </p>
</igc-highlight>
```

### Methods

The component also exposes two methods for navigating the search matches. The [`next()`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent&member=next) method moves to the next match, while the [`previous()`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent&member=previous) method moves to the previous one.

With them, we can make the search more interactive by adding two buttons to navigate between matches:

```ts
const highlight = document.querySelector('igc-highlight') as IgcHighlightComponent;

const prev = () => {
    highlight.previous();
};

const next = () => {
    highlight.next();
};

document.querySelector('#prev-btn')?.addEventListener('click', prev);
document.querySelector('#next-btn')?.addEventListener('click', next);

```

```html
<igc-input label="Search">
    <igc-icon-button
      id="prev-btn"
      variant="flat"
      name="navigate_before"
      collection="internal"
      slot="suffix"
    ></igc-icon-button>
    <igc-icon-button
      id="next-btn"
      variant="flat"
      slot="suffix"
      name="navigate_next"
      collection="internal"
    ></igc-icon-button>
</igc-input>
<igc-highlight>
    ...
</igc-highlight>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-divider {
	margin-block-start: 20px;
}
```

Both the [`previous()`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent&member=previous) and [`next()`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent&member=next) methods accept a [`IgcHighlight.preventScroll`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent&member=preventScroll) option that prevents the page from scrolling to the active match during navigation. By default, it is set to `false`.

```ts
const prev = () => {
    highlight.previous({ preventScroll: true });
};

const next = () => {
    highlight.next({ preventScroll: true });
};

```

### Additional Features

The component also exposes two read-only properties for tracking match state: [`size`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent&member=size) returns the total number of matches, and [`current`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent&member=current) returns the index of the active match.

They are useful for building a search status indicator that shows the user which match they are on and how many matches exist in total.

Here is a simple example of how to use those properties to create a search status:

```ts
const highlight = document.querySelector('igc-highlight') as IgcHighlightComponent;
const status = document.querySelector('#helper-text') as HTMLParagraphElement;

const updateStatus = () => {
    status.textContent = highlight.size
      ? `${highlight.current + 1} of ${highlight.size} match${highlight.size === 1 ? '' : 'es'}`
      : '';
}

```

We can then call `updateStatus()` every time the input value changes or the user clicks the next or previous buttons:

```ts
const onInput = ({ detail }: CustomEvent<string>) => {
    highlight.searchText = detail;
    updateStatus();
};

const prev = () => {
    highlight.previous();
    updateStatus();
};

const next = () => {
    highlight.next();
    updateStatus();
};

document.querySelector('igc-input')?.addEventListener('igcInput', onInput);
document.querySelector('#prev-btn')?.addEventListener('click', prev);
document.querySelector('#next-btn')?.addEventListener('click', next);

```

```html
<igc-input label="Search">
    <igc-icon-button
      id="prev-btn"
      variant="flat"
      name="navigate_before"
      collection="internal"
      slot="suffix"
    ></igc-icon-button>
    <igc-icon-button
      id="next-btn"
      variant="flat"
      name="navigate_next"
      collection="internal"
      slot="suffix"
    ></igc-icon-button>
    <p id="helper-text" slot="helper-text"></p>
</igc-input>
<igc-highlight>
  ...
</igc-highlight>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-expansion-panel::part(content) {
	overflow: auto;
}
```

## Styling

The [`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent) component exposes four CSS variables which can be used to style the whole component:
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

## API References

[`IgcHighlight`](mcp:get_api_reference?platform=webcomponents&component=IgcHighlightComponent)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
