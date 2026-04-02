---
title: Web Components Tabs Control | Layout Controls | Ignite UI for Web Components
_description: Web Components Tabs component allows users to place tabs at the top and switch between similar data sets. Try it Now
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components Tabs Component, Infragistics
_license: MIT
mentionedTypes: ["Tabs", "Tab", "Icon", "IconButton", "RadioGroup"]
_tocName: Tabs
---

# Web Components Tabs Overview

The Web Components Tabs is a lightweight and user-friendly component that organizes corresponding content in a tab format or a collection of tabs typically placed horizontally. The Web Components Tab enables end-users to easily click through and display different views. There are several features and customization options like tab orientation, templating, built-in header styles, animation, scroll buttons, and more.

The Ignite UI for Web Components Tabs organizes and switches between similar data sets. The tabs are placed at the top of the data content. When a tab is selected its corresponding content is displayed.

## Web Components Tabs Example

The Web Components Tabs example below displays three different tabs aligned in a single line so you can navigate across each in a fast and easy way.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## How to use Tabs with Ignite UI for Web Components

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html), you need to import it as follows:

```ts
import { defineComponents, IgcTabsComponent } from 'igniteui-webcomponents';

defineComponents(IgcTabsComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Simple [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html) declaration is done as follows:

```html
<igc-tabs>
    <igc-tab>
      <div slot="label">Tab 1</div>
      <span>Content for tab 1</span>
    </igc-tab>
    <igc-tab>
      <div slot="label">Tab 2</div>
      <span>Content for tab 2</span>
    </igc-tab>
    <igc-tab>
      <div slot="label">Tab 3</div>
      <span>Content for tab 3</span>
    </igc-tab>
</igc-tabs>
```

### Selection

The [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html) emits `Change` event when the user selects an item either by key press or click. The [`select`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html#select) method allows you to select a tab by specifying the [`IgcTabComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabcomponent.html) or its id.

If the selected tab is not specified on initial load, the first tab that is not disabled will be selected.

The default behavior, which selects a tab when the user is navigating with the arrow keys, could be modified by the [`activation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html#activation) property. Setting it to `Manual` will focus the next/previous tab on arrow key press, but the tab will be selected only after pressing <kbd>SPACE</kbd> or <kbd>ENTER</kbd>

### Disabled Tab

A tab is disabled by setting the [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabcomponent.html#disabled) attribute:

```html
<igc-tab disabled>Tab 1</igc-tab>
```

### Alignment

The [`alignment`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html#alignment) property controls how Web Components tabs are positioned. It accepts the following values:

- `Start` (default): the width of the tab depends on the content (label, icon, both) and all tabs have equal padding. First tab is aligned to the tabs container's left side.
- `Center`: the width of the tab depends on the content and occupies the tabs container's center.
- `End`: the width of the tab depends on the content and all tabs have equal padding. Last tab is aligned to the tabs container's right side.
- `Justify`: all tabs are equal in width and fully fit the tabs container.

If the space is not enough to fit all tabs, scroll buttons are displayed.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Scrolling

Scroll buttons are shown when the available space is not enough to render all Web Components tabs. The start scroll button is disabled if the first tab is in view. Respectively, when last tab is in view the end scroll button is disabled. By pressing one of the scroll buttons the tabs are scrolled so the tab in that direction is fully visible, or if it is already visible the previous/next tab in that direction is displayed.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Keyboard Navigation

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Selects previous (next in Right-to-Left mode) tab. If [`activation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html#activation) is set to `Manual` only focuses the tab. Scrolls to end if on first tab. |
| <kbd>→</kbd> | Selects next (previous in Right-to-Left mode) tab. If [`activation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html#activation) is set to `Manual` only focuses the tab. Scrolls to start if on last tab. |
| <kbd>HOME</kbd> | Selects the first tab. |
| <kbd>END</kbd> | Selects the last tab. |
| <kbd>ENTER</kbd> / <kbd>SPACE</kbd> | Selects the focused tab when [`activation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html#activation) is `Manual` |

### Prefix / Suffix

Each tab has default slot to display information - icon, text or both and `prefix` and `suffix` slots to show additional content in the beginning and/or in the end.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-icon {
    --ig-size: var(--ig-size-small);
}

igc-icon-button {
    --ig-size: var(--ig-size-small);
}
```


## Styling

The [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html) component exposes several CSS parts, giving you full control over its style:

| Name | Description |
|--|--|
| `selected-indicator` | The selected indicator. |
| `start-scroll-button` | The start scroll button displayed when the tabs overflow. |
| `end-scroll-button` | The end scroll button displayed when the tabs overflow. |

The [`IgcTabComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabcomponent.html) component exposes the following CSS parts:

|Name|Description|
|--|--|
| `content` | Tab header's label slot container. |
| `prefix` | Tab header's label prefix. |
| `suffix` | Tab header's label suffix. |
| `tab-header` | The header of a single tab. |
| `tab-body` | Holds the body content of a single tab, only the body of the selected tab is visible. |

```css
igc-tab::part(tab-header),
igc-tabs::part(inner)::after {
    --item-background: var(--ig-surface-600);
    --border-color: var(--ig-success-300);
}

igc-tab::part(tab-body),
igc-tab[selected] igc-icon {
    --item-active-icon-color: var(--ig-success-300);
}

igc-tab:not([selected]) igc-icon {
    --item-icon-color: var(--ig-gray-500);
}

igc-tabs::part(start-scroll-button),
igc-tabs::part(end-scroll-button) {
    --background: var(--ig-surface-600);
    --hover-background: var(--ig-surface-700);
    --active-background: var(--ig-surface-700);
    --disabled-background: var(--ig-gray-100);
    --button-color: var(--ig-gray-700);
    --button-hover-color: var(--ig-gray-800);
    --button-disabled-color: var(--ig-gray-300);
    --border-color: var(--ig-surface-600);
}

igc-tab::part(tab-header) {
    --item-hover-color: var(--ig-success-500);
}

igc-tab::part(tab-header)::before {
    --border-color--hover: var(--ig-gray-500);
}
```

```css
igc-tab::part(tab-header),
igc-tabs::part(inner)::after {
    --item-background: var(--ig-surface-600);
    --border-color: var(--ig-success-300);
}

igc-tab::part(tab-body),
igc-tab[selected] igc-icon {
    --item-active-icon-color: var(--ig-success-300);
}

igc-tab:not([selected]) igc-icon {
    --item-icon-color: var(--ig-gray-500);
}

igc-tabs::part(start-scroll-button),
igc-tabs::part(end-scroll-button) {
    --background: var(--ig-surface-600);
    --hover-background: var(--ig-surface-700);
    --active-background: var(--ig-surface-700);
    --disabled-background: var(--ig-gray-100);
    --button-color: var(--ig-gray-700);
    --button-hover-color: var(--ig-gray-800);
    --button-disabled-color: var(--ig-gray-300);
    --border-color: var(--ig-surface-600);
}

igc-tab::part(tab-header) {
    --item-hover-color: var(--ig-success-500);
}

igc-tab::part(tab-header)::before {
    --border-color--hover: var(--ig-gray-500);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API Reference

- [`IgcTabsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabscomponent.html)
- [`IgcTabComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctabcomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html)
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
