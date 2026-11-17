---
title: "Web Components Tabs Component"
description: "The Ignite UI for Web Components Tabs component organizes related content into tabs, shows the content of the selected tab, and adds scroll buttons when the tabs don't fit."
keywords: "Web Components Tabs, Ignite UI for Web Components, tab header, tab panel, scroll buttons"
license: MIT
last_updated: "2026-11-11"
relatedComponents: ["Stepper", "Accordion"]
mentionedTypes: ["Tabs", "Tab"]
llms:
  description: "The Ignite UI for Web Components Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab."
platformType: web-only
_tocName: Tabs
---
# Tabs

The Ignite UI for Web Components Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab.

Each tab holds its header and its content in one element. The Tabs component supports keyboard navigation, and it shows scroll buttons when the tab headers don't fit.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.team-tabs {
    width: 23.9375rem;
    height: 17rem;
    background: var(--ig-surface-500);
}

.team-tabs igc-tabs::part(inner) {
    flex-grow: 1;
    grid-template-columns: repeat(3, 1fr);
}

.team-tabs igc-tab::part(content) {
    white-space: nowrap;
}

.team-tabs igc-list {
    --ig-size: var(--ig-size-large);
}

.team-name {
    font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-2-font-size);
    font-weight: var(--ig-subtitle-2-font-weight);
    line-height: var(--ig-subtitle-2-line-height);
    letter-spacing: var(--ig-subtitle-2-letter-spacing);
    color: var(--ig-gray-900);
}
```

## Anatomy

The Web Components Tabs component consists of a container with tab items, optional scroll buttons, and a content area for the selected tab.

**Tabs anatomy:** The Tabs component shows a row of tab headers above the content area of the selected tab.

<style>{`
  .tabs-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .tabs-anatomy .igd-anatomy__image {
    max-width: 701px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Tabs Container:</strong> groups and aligns all tab items<br />
<strong>2. Header Button (optional):</strong> navigation arrows appear for tabs that aren't visible in the tab container<br />
<strong>3. Label:</strong> text that names the tab and indicates what content it opens<br />
<strong>4. Active Tab Item:</strong> a single selectable tab element that is active<br />
<strong>5. Left Icon (optional):</strong> icon shown before the label to add context to the tab<br />
<strong>6. Top Icon (optional):</strong> icon shown above the label to add context to the tab<br />
<strong>7. Right Icon (optional):</strong> icon shown after the label to add context to the tab<br />
<strong>8. Content Area:</strong> the panel where content for the selected tab is displayed</span>

The `igc-tabs` element renders the header strip and the scroll buttons. Each `igc-tab` renders its own header and content, and the Tabs component places the content of all tabs below the header strip, or beside it when the tab headers form a column:

```text
igc-tabs[role="tablist"]
└─ #shadow-root
   └─ div[part="tabs"]                                 // the scrollable header strip
      └─ div[part="inner"]
         ├─ igc-icon-button[part="start-scroll-button"] // rendered when the headers overflow
         ├─ slot                                       // the igc-tab elements
         │  └─ igc-tab
         │     └─ #shadow-root
         │        ├─ div[part="tab-header"][role="tab"]
         │        │  └─ div[part="base"]
         │        │     ├─ slot[name="prefix"][part="prefix"]
         │        │     ├─ div[part="content"]
         │        │     │  └─ slot[name="label"]        // falls back to the label property
         │        │     └─ slot[name="suffix"][part="suffix"]
         │        └─ div[part="tab-body"][role="tabpanel"] // visible only for the selected tab
         │           └─ slot                           // the content of the tab
         ├─ igc-icon-button[part="end-scroll-button"]   // rendered when the headers overflow
         └─ div[part="selected-indicator"]
            └─ span                                    // follows the selected tab header
```

## Getting Started

To use the Web Components Tabs, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Install the **igniteui-webcomponents** package:

```cmd
npm install igniteui-webcomponents
```

Then import the [`IgcTabs`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent), its theme CSS, and register the component. The registration also registers the `igc-tab` and `igc-icon-button` elements:

```ts
import { defineComponents, IgcTabsComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcTabsComponent);
```

After registration, render the [`IgcTabs`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent) with a [`IgcTab`](mcp:get_api_reference?platform=webcomponents&component=IgcTabComponent) for each section. The label of a tab becomes its header, and the children of the tab become its content:

```html
<igc-tabs>
  <igc-tab label="Overview">
    <p>The overview content.</p>
  </igc-tab>
  <igc-tab label="Details">
    <p>The details content.</p>
  </igc-tab>
</igc-tabs>
```

When no tab is selected on the first render, the Web Components Tabs component selects the first enabled tab. When you later set `selected` to `false` on the selected tab, no tab is selected.

## Usage

Use the Web Components Tabs to organize different views of the same information or switch between similar or related data sets.

### Type

The Tabs are available in two types - Short, showing only text by default, with the option to have prefix and suffix icons, and Tall, which also has an additional third icon on top of the text.

For a short tab, set the `label` of the tab. For a tall tab, place an Icon and a `<span>` in the `label` slot instead, and the Tabs component shows the icon above the text. The `label` slot takes precedence over the `label` property. Register the icons first, as described in the [Icon](./icon.md) topic:

```html
<igc-tabs>
  <igc-tab label="Cart"></igc-tab>
  <igc-tab label="Shipping"></igc-tab>
</igc-tabs>

<igc-tabs>
  <igc-tab>
    <igc-icon slot="label" name="shopping_basket" collection="material"></igc-icon>
    <span slot="label">Cart</span>
  </igc-tab>
  <igc-tab>
    <igc-icon slot="label" name="delivery" collection="material"></igc-icon>
    <span slot="label">Shipping</span>
  </igc-tab>
</igc-tabs>
```

To show content before and after the label, such as an icon or a badge, place it in the `prefix` and `suffix` slots of the tab:

```html
<igc-tab>
  <igc-icon slot="prefix" name="inbox" collection="material"></igc-icon>
  <span slot="label">Inbox</span>
  <igc-badge slot="suffix">12</igc-badge>
</igc-tab>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.types {
    display: grid;
    grid-template-columns: 6.1875rem 33.125rem;
    align-items: center;
    row-gap: 3.75rem;
}

.types igc-tabs::part(inner) {
    flex-grow: 1;
    grid-template-columns: repeat(3, 1fr);
}

.type-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### Responsiveness

The Tabs can be Content Fit to fill up the available horizontal space by adapting their width, or Fixed with scrolling buttons to navigate a large number of tab items. This allows fitting more content than what is normally possible with the other mode in the same total space.

The [`alignment`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=alignment) property sets how the Web Components Tabs component arranges the tab headers:

- `start` (default): each tab header is as wide as its content, and the headers start at the start edge of the Tabs.
- `center`: each tab header is as wide as its content, and the headers are centered.
- `end`: each tab header is as wide as its content, and the headers end at the end edge of the Tabs.
- `justify`: the tab headers stretch to fill the width of the Tabs. Use it for the Content Fit mode.

```html
<igc-tabs alignment="justify">
  <igc-tab label="Podcasts"></igc-tab>
  <igc-tab label="Playlists"></igc-tab>
  <igc-tab label="Genres"></igc-tab>
</igc-tabs>
```

When the tab headers don't fit, the Web Components Tabs component shows a scroll button at each end of the header strip, which is the Fixed mode. A scroll button scrolls the strip to the next tab header that is out of view in its direction, and it's disabled when the strip is scrolled to that end. When the user selects a tab, the Tabs component scrolls its header into view.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.modes {
    display: grid;
    grid-template-columns: 6.1875rem 33.125rem;
    align-items: center;
    row-gap: 3.75rem;
}

.modes igc-tabs[alignment="justify"]::part(inner) {
    flex-grow: 1;
    grid-template-columns: repeat(3, 1fr);
}

.mode-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### Amount

For most scenarios, the Tabs need to contain between two and five items. If your use case requires more than five tabs, you should consider the Fixed mode explained above.

You can add and remove tabs at run time. A tab that you add with `selected` set becomes the selected tab, and when you remove the selected tab, the Web Components Tabs component selects the first enabled tab.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.amounts {
    display: grid;
    grid-template-columns: 5.6875rem 35rem;
    align-items: center;
    row-gap: 3.75rem;
}

.amounts igc-tabs::part(inner) {
    flex-grow: 1;
}

.two-tabs::part(inner) {
    grid-template-columns: repeat(2, 1fr);
}

.five-tabs::part(inner) {
    grid-template-columns: repeat(5, 1fr);
}

.amount-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### States

Tab Items support Active, Inactive, Active & Hover, Inactive & Hover and Disabled states. In Tabs there is always one Active tab and an arbitrary number of Inactive and Disabled ones.

Set `selected` on a tab to make it the active tab, and `disabled` to turn it off. Users can't select a disabled tab, and the keyboard navigation skips it. When you disable the selected tab, the Web Components Tabs component selects the first enabled tab.

```html
<igc-tabs>
  <igc-tab label="Overview"></igc-tab>
  <igc-tab label="Activity" selected></igc-tab>
  <igc-tab label="Billing" disabled></igc-tab>
</igc-tabs>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.states {
    display: grid;
    grid-template-columns: 4.5rem repeat(3, 8.875rem);
    align-items: center;
    row-gap: 1.875rem;
}

.state-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}

.state-column {
    justify-self: center;
}

.state-tabs {
    grid-column: 2 / -1;
    pointer-events: none;
}

.state-tabs::part(inner) {
    grid-template-columns: repeat(3, 8.875rem);
}

.state-tabs igc-tab::part(tab-header) {
    justify-self: center;
}

.state-tabs igc-tab.hover::part(tab-header) {
    color: var(--item-hover-color);
    background: var(--item-hover-background);
}

.state-tabs igc-tab.hover::part(tab-header)::after {
    background: var(--item-hover-background);
}

.state-tabs igc-tab.hover[selected]::part(tab-header) {
    color: var(--item-active-hover-color);
    background: var(--item-active-hover-background);
}

.state-tabs igc-tab.hover[selected]::part(tab-header)::after {
    background: var(--item-active-hover-background);
}
```

### Header Position

Set [`headerPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=headerPosition) on the Web Components Tabs component to `start` or `end` for vertical tabs: a column of tab headers before or after the content in the text direction. The default, `top`, keeps them in a row above the content. The `headerPosition` property requires `igniteui-webcomponents` 7.5.0 or later.

```html
<igc-tabs header-position="start" style="height: 11rem">
  <igc-tab label="Profile">
    <p>Update your name, photo, and contact details.</p>
  </igc-tab>
  <igc-tab label="Security">
    <p>Change your password and sign-in options.</p>
  </igc-tab>
  <igc-tab label="Notifications">
    <p>Choose which updates you receive by email.</p>
  </igc-tab>
</igc-tabs>
```

```ts
import type { TabsHeaderPosition } from 'igniteui-webcomponents';

const tabs = document.querySelector('igc-tabs')!;
const position: TabsHeaderPosition = 'end';
tabs.headerPosition = position;
```

Without a height, the Web Components Tabs component grows with its column of tab headers or the selected tab's content, whichever is taller. To limit it, set a `height` or a `max-height` on the component. The content of a taller tab then scrolls inside the component. A `max-height` on a container doesn't limit the component. In a column, each tab header takes the width of the column, and `alignment` applies along the height. The mouse wheel and touch don't scroll the tab headers of a column, but the scroll buttons and the keyboard do.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
}

.tabs-container {
    width: 100%;
    max-width: 33.125rem;
}

.tabs-container igc-tabs {
    height: 11rem;
}

.tabs-container igc-tab::part(tab-body) {
    padding: 0.75rem 1rem;
    font-family: var(--ig-body-2-font-family, var(--ig-font-family));
    font-size: var(--ig-body-2-font-size);
    font-weight: var(--ig-body-2-font-weight);
    line-height: var(--ig-body-2-line-height);
    letter-spacing: var(--ig-body-2-letter-spacing);
    color: var(--ig-gray-900);
}
```

### Selection

The Web Components Tabs component emits `igcChange` with the newly selected tab when the user selects a tab with a click or a key. To select a tab in code, call [`select`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=select) with the tab, or with its `id` or `label`. Read the selected tab from [`selectedTab`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=selectedTab):

```html
<igc-tabs>
  <igc-tab id="overview" label="Overview"></igc-tab>
  <igc-tab id="details" label="Details"></igc-tab>
</igc-tabs>
```

```ts
const tabs = document.querySelector('igc-tabs')!;

tabs.addEventListener('igcChange', (event) => {
  console.log(`Selected: ${event.detail.label}`);
});

tabs.select('details');
console.log(tabs.selectedTab?.label); // "Details"
```

Selecting a tab in code, or setting `selected` on a tab, changes the selection without the change event. The Tabs component ignores disabled tabs and values that match no tab.

### Activation

By default, the Web Components Tabs component selects a tab as soon as the arrow keys, Home, or End move the focus to its header. Set [`activation`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=activation) to `manual` to move only the focus with these keys, and to select the focused tab with Enter or Space. Use the manual activation when showing the content of a tab is slow, for example when it loads data.

```html
<igc-tabs activation="manual">
  <igc-tab label="Overview"></igc-tab>
  <igc-tab label="Reports"></igc-tab>
</igc-tabs>
```

### Do/Don't

The Tabs are appropriate for organizing information, and one should avoid using them as a way to design workflows and actions that come in a logical sequence, e.g. checkout process or configuration wizard. When using the short Tabs, never combine a text tab with an icon tab in the same bar. Choose one of the two content modes and use it consistently for all the items in the bar.

<Fragment slot="do">

Use tabs to organize related information.

</Fragment>
<Fragment slot="dont">

Avoid tabs for the steps of a sequential workflow, such as a checkout process.

</Fragment>

<Fragment slot="do">

Use the same content mode, text or icons, for all tabs in a bar.

</Fragment>
<Fragment slot="dont">

Avoid combining text tabs and icon tabs in the same bar.

</Fragment>

## Properties

The Web Components Tabs component exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`alignment`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=alignment) | `'start' \| 'end' \| 'center' \| 'justify'` | `'start'` | How the tab headers are arranged in the header strip. |
| [`headerPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=headerPosition) | `'top' \| 'start' \| 'end'` | `'top'` | Where the tab headers are placed: a row above the content, or a column before or after it. The matching attribute is `header-position`. |
| [`activation`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=activation) | `'auto' \| 'manual'` | `'auto'` | Whether moving the focus to a tab header with the keyboard also selects the tab. |
| [`selectedTab`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=selectedTab) | `IgcTabComponent \| null` | `null` | Read-only. The selected tab. |
| [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=selected) | `string` | `''` | Read-only. The `label` of the selected tab, or its `id` when the tab has no `label`. |
| [`tabs`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=tabs) | `IgcTabComponent[]` | — | Read-only. The tabs that are direct children of the Tabs. |
| [`Tab.label`](mcp:get_api_reference?platform=webcomponents&component=IgcTabComponent&member=label) | `string` | `''` | The text of the tab header. The `label` slot takes precedence over it. |
| [`Tab.selected`](mcp:get_api_reference?platform=webcomponents&component=IgcTabComponent&member=selected) | `boolean` | `false` | Whether the tab is selected. |
| [`Tab.disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcTabComponent&member=disabled) | `boolean` | `false` | Whether the tab is disabled. |

## Methods

The Web Components Tabs component exposes the following method. It changes the selection without emitting the change event.

| Method | Description |
| --- | --- |
| [`select`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=select) | Selects the tab that you pass, or the tab whose `id` or `label` matches the string that you pass. Ignores disabled tabs and strings that match no tab. |

## Events

The Web Components Tabs component emits the following events.

| Name | Type | Description |
| --- | --- | --- |
| `igcChange` | `CustomEvent<IgcTabComponent>` | Emitted when the user selects a tab with a click or a key. The event detail holds the selected tab. |

## Styling

The Web Components Tabs component takes its colors from the theme. Change them with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-tabs-item-background` | The background of the tab headers. |
| `--ig-tabs-item-text-color` | The text color of the tab headers. |
| `--ig-tabs-item-icon-color` | The icon color of the tab headers. |
| `--ig-tabs-item-hover-background` | The background of a hovered or focused tab header. |
| `--ig-tabs-item-hover-color` | The text color of a hovered or focused tab header. |
| `--ig-tabs-item-active-background` | The background of the selected tab header. |
| `--ig-tabs-item-active-color` | The text color of the selected tab header. |
| `--ig-tabs-item-active-icon-color` | The icon color of the selected tab header. |
| `--ig-tabs-item-disabled-color` | The text color of a disabled tab header. |
| `--ig-tabs-item-disabled-icon-color` | The icon color of a disabled tab header. |
| `--ig-tabs-indicator-color` | The color of the indicator of the selected tab header. |
| `--ig-tabs-button-background` | The background of the scroll buttons. |
| `--ig-tabs-button-color` | The icon color of the scroll buttons. |
| `--ig-tabs-button-hover-background` | The background of a hovered scroll button. |
| `--ig-tabs-button-disabled-color` | The icon color of a disabled scroll button. |

The `igc-tabs` element exposes the following CSS parts:

| Part | What it styles |
| --- | --- |
| `start-scroll-button` | The start scroll button. |
| `end-scroll-button` | The end scroll button. |
| `selected-indicator` | The indicator of the selected tab header. |

The `igc-tab` element exposes the following CSS parts:

| Part | What it styles |
| --- | --- |
| `tab-header` | The header of the tab. |
| `prefix` | The container of the `prefix` slot. |
| `content` | The container of the `label` slot. |
| `suffix` | The container of the `suffix` slot. |
| `tab-body` | The content of the tab, which is visible only for the selected tab. |

### Sass Theming

When you modify a primary property, all related dependent properties are automatically updated to reflect the change. The primary parameters of the `tabs-theme` function are `$item-background`, from which the theme derives the colors of all tab states, and `$item-active-color`, from which it derives the indicator color. Create a theme with the function and include it with the `tokens()` mixin, which emits the matching `--ig-tabs-*` variables in the scope where you include it.

The Sass functions come from the `igniteui-theming` package. See the [Theming](../themes/overview.md) topic for the Sass setup.

```scss
@use "igniteui-theming" as *;

$custom-tabs-theme: tabs-theme(
  $item-background: #292826,
  $item-active-color: #f4d45c
);

:root {
  @include tokens($custom-tabs-theme);
}
```

### CSS Variables

Set the CSS variables on a Tabs component or on a container when you need local styling without a Sass build step:

```css
.profile-tabs {
  --ig-tabs-item-active-color: #e41c77;
  --ig-tabs-indicator-color: #e41c77;
}
```

Use the CSS parts for other styles:

```css
igc-tab::part(tab-header) {
  font-weight: 600;
}

igc-tabs::part(selected-indicator) {
  opacity: 0.8;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.profile-card {
    --ig-font-family: aktiv-grotesk, sans-serif;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 19.125rem;
    height: 15.25rem;
    padding: 0.5rem;
    border: 1px solid #e5ebf3;
    border-radius: 1rem;
    background: #fff;
}

.profile-card igc-list {
    --ig-size: var(--ig-size-large);
    --ig-list-background: #fff;
    --ig-list-item-background: #fff;

    border: none;
}

.profile-name {
    font: 600 16px / 24px aktiv-grotesk, sans-serif;
    letter-spacing: 0.15px;
    color: #212121;
}

.profile-role {
    font: 600 12px / 16px aktiv-grotesk, sans-serif;
    letter-spacing: 0.15px;
    color: #556c86;
}

.profile-status {
    --ig-size: var(--ig-size-small);
    --ig-chip-background: #cde6d1;
    --ig-chip-hover-background: #cde6d1;
    --ig-chip-text-color: #000;
    --ig-chip-hover-text-color: #000;
    --ig-chip-border-radius: 1rem;
}

.profile-status::part(base) {
    font: 400 12px / 16px aktiv-grotesk, sans-serif;
    letter-spacing: 0.4px;
}

.profile-tabs {
    --ig-tabs-item-background: #fff;
    --ig-tabs-item-hover-background: #fff;
    --ig-tabs-item-active-background: #fff;
    --ig-tabs-item-active-hover-background: #fff;
    --ig-tabs-item-text-color: #556c86;
    --ig-tabs-item-hover-color: #344b65;
    --ig-tabs-item-active-color: #0176ff;
    --ig-tabs-item-active-hover-color: #0176ff;
    --ig-tabs-item-disabled-color: #a9b8cc;
    --ig-tabs-indicator-color: #0176ff;
    --ig-tabs-border-color: transparent;
    --ig-tabs-border-color--hover: transparent;

    flex: 1 1 0;
    min-height: 0;
}

.profile-tabs::part(inner) {
    flex-grow: 1;
    grid-template-columns: repeat(3, 1fr);
}

.profile-tabs igc-tab::part(content) {
    font: 500 14px / 20px aktiv-grotesk, sans-serif;
    letter-spacing: 0.25px;
    text-transform: none;
}

.profile-tabs igc-tab[selected]::part(tab-header)::before {
    box-shadow: inset 0 -2px 0 #0176ff;
}

.profile-tabs igc-tab::part(tab-header):focus-within::after {
    box-shadow: none;
}

.profile-details {
    --ig-list-border-color: #e5ebf3;
    --ig-list-border-width: 1px;
}

.profile-details igc-list-item {
    box-sizing: border-box;
    height: 2.25rem;
}

.profile-details igc-list-item::part(start) {
    display: none;
}

.profile-details igc-list-item:first-of-type {
    box-shadow: inset 0 1px 0 #e5ebf3;
}

.detail-label {
    font: 400 13px / 20px aktiv-grotesk, sans-serif;
    letter-spacing: 0.3px;
    color: #344b65;
}

.detail-value {
    font: 600 12px / 16px "Titillium Web", sans-serif;
    letter-spacing: 0.15px;
    color: #344b65;
}
```

### Styling with Tailwind

You can style the Web Components Tabs using our custom Tailwind utility classes. Make sure to [set up Tailwind](../themes/tailwind.md) first.

Set the `--ig-tabs-*` CSS variables with Tailwind arbitrary properties:

```html
<igc-tabs class="[--ig-tabs-item-background:#011627] [--ig-tabs-item-active-color:#FF8040] [--ig-tabs-indicator-color:#FF8040]">
  ...
</igc-tabs>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import url("https://use.typekit.net/bng2zgw.css");
@source "./index.ts";
@source "../index.html";

@theme {
    --color-nav-surface: #112031;
    --color-nav-hover: #1a314a;
    --color-nav-active: #006ae6;
    --color-nav-ink: #3392ff;
}
```

## Accessibility

The Web Components Tabs component uses the roles of the WAI-ARIA tabs pattern: users reach the tab headers with the Tab key, move between them with the arrow keys, and select a tab to show its content.

### Keyboard Interaction

The header strip of the Web Components Tabs component is a single tab stop: only the selected tab header is in the tab order, or the first enabled tab header when no tab is selected. The content of the selected tab is the next tab stop. The following keys work while a tab header has the focus:

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves the focus out of the header strip, to the content of the selected tab or to the previous focusable element. The Tabs component doesn't handle these keys. |
| <kbd>Arrow Right</kbd> | Moves the focus to the next enabled tab header, and from the last one to the first. In a right-to-left layout, moves it to the previous one. With the `auto` activation, also selects the tab. In a column of tab headers, the Tabs component doesn't handle this key. |
| <kbd>Arrow Left</kbd> | Moves the focus to the previous enabled tab header, and from the first one to the last. In a right-to-left layout, moves it to the next one. With the `auto` activation, also selects the tab. In a column of tab headers, the Tabs component doesn't handle this key. |
| <kbd>Arrow Down</kbd> | In a column of tab headers, moves the focus to the next enabled tab header, and from the last one to the first. With the `auto` activation, also selects the tab. |
| <kbd>Arrow Up</kbd> | In a column of tab headers, moves the focus to the previous enabled tab header, and from the first one to the last. With the `auto` activation, also selects the tab. |
| <kbd>Home</kbd> | Moves the focus to the first enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>End</kbd> | Moves the focus to the last enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the focused tab. |

The Web Components Tabs component handles these keys on `keydown`:

- It prevents their default action, so the arrow keys that move the focus, Home, End, and Space don't scroll the page.
- A key that you hold doesn't repeat its action.
- A key that you press together with Shift, Ctrl, Alt, or Meta does nothing.
- The Tabs component scrolls the header that receives the focus into view.

With a pointer, a click on a tab header focuses and selects the tab. A disabled tab ignores clicks. The scroll buttons aren't in the tab order.

### Screen Readers / ARIA

The Web Components Tabs component renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| `igc-tabs` | `tablist` | `aria-orientation="horizontal"`, or `aria-orientation="vertical"` in a column of tab headers, set through element internals |
| The `tab-header` part of each tab | `tab` | `aria-selected`, `aria-disabled`, `aria-controls` that points to the content of the tab, `aria-posinset`, and `aria-setsize` |
| The `tab-body` part of each tab | `tabpanel` | `aria-labelledby` that points to the header of the tab |

The Web Components Tabs component also behaves as follows for assistive technology:

- A tab takes its accessible name from its header content: the `label` property or the `label` slot, and the content of the `prefix` and `suffix` slots.
- The content of the tabs that aren't selected is hidden and `inert`, so assistive technology and the keyboard skip it.
- The `aria-posinset` and `aria-setsize` attributes of each tab header give screen readers the position of the tab in the set, such as "2 of 3".
- The Tabs component doesn't use a live region. A changed selection reaches assistive technology through the `aria-selected` state and the focus.

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `tablist`, `tab`, and `tabpanel` roles expose the structure, and each tab panel is labeled by its tab header through `aria-labelledby`. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | In the Material, Fluent, and Indigo themes, the selected tab header shows an indicator line under it, or beside it in a column of tab headers, so the selection doesn't depend on color alone. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The arrow keys, Home, and End move between the tab headers, and Enter and Space select the focused tab. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | The Tabs component doesn't handle the Tab key, so Tab and Shift + Tab move the focus out of the header strip. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | The header strip is a single tab stop, followed by the content of the selected tab. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) | The focused tab header takes the hover colors of the theme, so it stands out from the other tab headers. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | Each tab header exposes the `tab` role, a name from its content, and its selected and disabled states through `aria-selected` and `aria-disabled`. |

Your responsibilities:

- Give every tab a text label that names its content. A tab takes its accessible name from its header content, so a header with an icon only needs a text alternative. See [Type](#type).
- When you override the theme colors, keep a contrast ratio of at least 3:1 between the selected indicator and the background, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires, and keep the focused tab header distinct from the other headers.
- Don't use the Tabs for the steps of a sequential process. Use a Stepper, which communicates the order of the steps.

## API References

The Web Components Tabs API reference lists the complete API surface for the target platform.

- [`IgcTabs`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent)
- [`Tabs.headerPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcTabsComponent&member=headerPosition)
- [`IgcTab`](mcp:get_api_reference?platform=webcomponents&component=IgcTabComponent)

## Dependencies

The Web Components Tabs component requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

The registration of the `IgcTabsComponent` also registers the `igc-tab` element and the `igc-icon-button` element of the scroll buttons. Register the components that you place in the tabs, such as the Icon, separately.

## Additional Resources

The following resources provide more Web Components Tabs guidance and project support:

- [Tabs - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/tabs)
- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

The Web Components Tabs component shows one section of related content at a time. Use these components when the content needs a different structure:

- [Stepper](./stepper.md) - Use Stepper when users complete a sequence of steps, such as a checkout process.
- [Accordion](./accordion.md) - Use Accordion when users need to expand several sections of a vertical list at the same time.

## FAQ

These questions cover common Web Components Tabs setup, accessibility, and usage scenarios.

  **Q: How do I select a tab in code?**

    Call the `select` method of the Web Components Tabs with a tab, or with the `id` or the `label` of a tab, or set `selected` on the tab. The Web Components Tabs component doesn't emit the change event for a selection that you make in code.
  
  **Q: Can I prevent users from switching to another tab?**

    The change event of the Web Components Tabs component isn't cancelable, because the Web Components Tabs component emits it after the selection changes. Set `disabled` on the tabs that users must not open, and enable them when they become available.
  
  **Q: Does the Tabs component keep the content of hidden tabs in the DOM?**

    Yes. The Web Components Tabs component keeps the content of every tab in the DOM, hides the content of the tabs that aren't selected, and makes it `inert`, so users and assistive technology can't reach it until its tab is selected.
  
  **Q: Should I use the Tabs for a checkout or another step-by-step process?**

    No. The Web Components Tabs component organizes related information that users can open in any order, and it doesn't communicate an order of steps. Use the Web Components Stepper for a sequential process, such as a checkout or a configuration wizard.
  
  **Q: How do I create vertical tabs?**

    Set the `headerPosition` property (the `header-position` attribute in HTML) of the Web Components Tabs to `start` or `end` to show the tab headers in a column before or after the content. Give the Web Components Tabs a height to keep its size fixed.
  

