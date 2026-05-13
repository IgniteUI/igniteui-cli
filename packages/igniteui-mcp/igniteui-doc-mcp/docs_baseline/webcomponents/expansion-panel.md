---
title: Web Components Expansion Panel | Expansion Panel | Infragistics
_description: Expansion Panel component provides an easily configurable expandable component with two states - collapsed and expanded.
_keywords: Web Components Expansion Panel, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["Infragistics.Controls.Layouts.Implementation.ExpansionPanel"]
namespace: Infragistics.Controls
_tocName: Expansion Panel
---

# Web Components Expansion Panel Overview

The Ignite UI for Web Components Expansion Panel is a lightweight accordion component which can be rendered in two states - collapsed or expanded. The expansion panel can be toggled using mouse click, or keyboard interactions.

## Web Components Expansion Panel Example

```css
igc-expansion-panel{
    width: 100%;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html), you need to register it as follows:

```ts
import {defineComponents, IgcExpansionPanelComponent} from 'igniteui-webcomponents';

defineComponents(IgcExpansionPanelComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html) is as follows:

```html
<igc-expansion-panel>
    <div slot="title">Golden Retriever</div>
    <div slot="subTitle">Medium-large gun dog</div>
    <div>
        <p>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
        and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability
        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
        are easy to train to basic or advanced obedience standards.</p>
    </div>
</igc-expansion-panel>
```

## Binding to events

The Expansion Panel component raises the following events:

- igcClosed - Raised when the expansion panel is collapsed
- igcOpened - Raised when the expansion panel is expanded
- igcClosing - Raised when the expansion panel starts collapsing
- igcOpening - Raised when the expansion panel starts expanding

The following sample demonstrates how we can add some logic to our component to make it show/hide the `subtitle` depending on the current state of the panel.

We can do this by binding to the `igcOpened` and `igcClosed` event emitters:

```css
igc-expansion-panel{
    width: 100%;
    height: 300px;
}

span#fired-event {
    background-color: rgba(0,0,0,0.5);
    border-radius: 26px;
    padding: 1rem 1.5rem;
    color:white;
    display: none;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Component Customization

The [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html) control allows all sorts of content to be added inside of its body. It can render [input](../inputs/input.md), charts and even other expansion panels!

The [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html) allows for easy customization of the header through the exposed **title**, **subTitle** and **indicator** slots.

Configuring the position of the expansion indicator can be done through the [`indicatorPosition`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html#indicatorPosition) property of the Expansion Panel. The possible options are **start**, **end** or **none**.

The next code sample demonstrates how to configure the component's button to go on the **right**side.

```css
igc-expansion-panel {
    max-width: 500px;
    min-width: 300px;
    width: 100%;
    border: 1px solid rgba(171, 171, 171, 0.3);
    padding: 0;
}

igc-button {
    display: flex;
    margin-top: 16px;
}

a {
    text-decoration: none;
}

img {
    width: 100%;
    margin-bottom: 8px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Keyboard Navigation

The Ignite UI for Web Components Expansion Panel keyboard navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>ALT</kbd> + <kbd>↓</kbd> - expands the focused panel
- <kbd>ALT</kbd> + <kbd>↑</kbd> - collapses the focused panel
- <kbd>SPACE</kbd>/<kbd>ENTER</kbd> - toggle the expansion state of the focused panel

## Styling

The [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html) component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `header` | The container of the expansion indicator, title and subtitle. |
| `title` | The title container. |
| `subtitle` | The subtitle container. |
| `indicator` | The indicator container. |
| `content` | The expansion panel's content wrapper. |

```css
igc-expansion-panel {
  background-color: var(--ig-secondary-900);
  color: var(--ig-secondary-900-contrast);
}

igc-button::part(base) {
  color: var(--ig-secondary-900-contrast);
}

igc-button::part(base)::before {
  background-color: var(--ig-warn-500);
}

igc-expansion-panel::part(indicator) {
  color: var(--ig-warn-500);
}

igc-expansion-panel::part(header) {
  background-color: var(--ig-secondary-900);
}

igc-expansion-panel::part(title),
igc-expansion-panel::part(subtitle) {
  color: var(--ig-warn-500);
}
```

```css
igc-expansion-panel {
  background-color: var(--ig-secondary-900);
  color: var(--ig-secondary-900-contrast);
}

igc-button::part(base) {
  color: var(--ig-secondary-900-contrast);
}

igc-button::part(base)::before {
  background-color: var(--ig-warn-500);
}

igc-expansion-panel::part(indicator) {
  color: var(--ig-warn-500);
}

igc-expansion-panel::part(header) {
  background-color: var(--ig-secondary-900);
}

igc-expansion-panel::part(title),
igc-expansion-panel::part(subtitle) {
  color: var(--ig-warn-500);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```css
igc-button {
  display: flex;
  margin-top: 16px;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  margin-bottom: 8px;
  border-radius: 8px;
}

igc-expansion-panel {
  width: 500px;
  border-radius: 8px;
}
```

<div class="divider"></div>

## API References

- [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
