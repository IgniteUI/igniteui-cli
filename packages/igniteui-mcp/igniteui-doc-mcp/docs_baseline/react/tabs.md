---
title: "React Tabs Component"
description: "The Ignite UI for React Tabs component organizes related content into tabs, shows the content of the selected tab, and adds scroll buttons when the tabs don't fit."
keywords: "React Tabs, Ignite UI for React, tab header, tab panel, scroll buttons"
license: MIT
last_updated: "2026-11-11"
relatedComponents: ["Stepper", "Accordion"]
mentionedTypes: ["Tabs", "Tab"]
llms:
  description: "The Ignite UI for React Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab."
platformType: web-only
_tocName: Tabs
---
# Tabs

The Ignite UI for React Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab.

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
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrList, IgrListItem, IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const people = [
    { name: 'Emily Carter', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png' },
    { name: 'Jose Diaz', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png' },
    { name: 'Kira Tanaka', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png' },
    { name: 'Liam Brooks', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png' },
];

const teams = ['Everyone', 'Finance', 'Engineering'];

export default function TabsOverview() {
    return (
        <div className="sample">
            <div className="team-tabs">
                <IgrTabs alignment="justify">
                    {teams.map((team) => (
                        <IgrTab key={team} label={team}>
                            <IgrList>
                                {people
                                    .filter((person) => team === 'Everyone' || person.team === team)
                                    .map((person) => (
                                        <IgrListItem key={person.name}>
                                            <IgrAvatar slot="start" src={person.avatar} alt={person.name} shape="circle" />
                                            <span slot="title">{person.name}</span>
                                            <span slot="end" className="team-name">{person.team}</span>
                                        </IgrListItem>
                                    ))}
                            </IgrList>
                        </IgrTab>
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsOverview/>);
```

## Anatomy

The React Tabs component consists of a container with tab items, optional scroll buttons, and a content area for the selected tab.

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

The `igc-tabs` element renders the header strip and the scroll buttons. Each `igc-tab` renders its own header and content, and the Tabs component places the content of all tabs below the header strip:

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

To use the React Tabs, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Install the **igniteui-react** package:

```cmd
npm install igniteui-react
```

Then import the [`IgrTabs`](mcp:get_api_reference?platform=react&component=IgrTabs) and [`IgrTab`](mcp:get_api_reference?platform=react&component=IgrTab) wrappers and the theme CSS:

```tsx
import { IgrTabs, IgrTab } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After registration, render the [`IgrTabs`](mcp:get_api_reference?platform=react&component=IgrTabs) with a [`IgrTab`](mcp:get_api_reference?platform=react&component=IgrTab) for each section. The label of a tab becomes its header, and the children of the tab become its content:

```tsx
<IgrTabs>
  <IgrTab label="Overview">
    <p>The overview content.</p>
  </IgrTab>
  <IgrTab label="Details">
    <p>The details content.</p>
  </IgrTab>
</IgrTabs>
```

When no tab is selected on the first render, the React Tabs component selects the first enabled tab. When you later set `selected` to `false` on the selected tab, no tab is selected.

## Usage

Use the React Tabs to organize different views of the same information or switch between similar or related data sets.

### Type

The Tabs are available in two types - Short, showing only text by default, with the option to have prefix and suffix icons, and Tall, which also has an additional third icon on top of the text.

For a short tab, set the `label` of the tab. For a tall tab, place an Icon and a `<span>` in the `label` slot instead, and the Tabs component shows the icon above the text. The `label` slot takes precedence over the `label` property. Register the icons first, as described in the [Icon](./icon.md) topic:

```tsx
<IgrTabs>
  <IgrTab label="Cart" />
  <IgrTab label="Shipping" />
</IgrTabs>

<IgrTabs>
  <IgrTab>
    <IgrIcon slot="label" name="shopping_basket" collection="material" />
    <span slot="label">Cart</span>
  </IgrTab>
  <IgrTab>
    <IgrIcon slot="label" name="delivery" collection="material" />
    <span slot="label">Shipping</span>
  </IgrTab>
</IgrTabs>
```

To show content before and after the label, such as an icon or a badge, place it in the `prefix` and `suffix` slots of the tab:

```tsx
<IgrTab>
  <IgrIcon slot="prefix" name="inbox" collection="material" />
  <span slot="label">Inbox</span>
  <IgrBadge slot="suffix">12</IgrBadge>
</IgrTab>
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
```tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, IgrTab, IgrTabs, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const shoppingBasketIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"/></svg>';
const deliveryIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12L20 7H15V5H2V15H4.184C4.06556 15.3203 4.00331 15.6586 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C9.99669 15.6586 9.93444 15.3203 9.816 15H15.184C15.0655 15.3202 15.0032 15.6586 15 16C15 17.6569 16.3431 19 18 19C19.6569 19 21 17.6569 21 16C20.9968 15.6586 20.9345 15.3202 20.816 15H22V12ZM7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15C7.55228 15 8 15.4477 8 16C8 16.5523 7.55228 17 7 17ZM18 17C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17ZM17 12V9H19L20 12H17Z"/></svg>';
const creditCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"/></svg>';

const steps = [
    { label: 'Cart', icon: 'shopping_basket' },
    { label: 'Shipping', icon: 'delivery' },
    { label: 'Payment', icon: 'credit_card' },
];

export default function TabsType() {
    useEffect(() => {
        registerIconFromText('shopping_basket', shoppingBasketIcon, 'material');
        registerIconFromText('delivery', deliveryIcon, 'material');
        registerIconFromText('credit_card', creditCardIcon, 'material');
    }, []);

    return (
        <div className="sample">
            <div className="types">
                <span className="type-label">Short Bar</span>
                <IgrTabs alignment="justify">
                    {steps.map((step) => (
                        <IgrTab key={step.label} label={step.label} />
                    ))}
                </IgrTabs>
                <span className="type-label">Tall Bar</span>
                <IgrTabs alignment="justify">
                    {steps.map((step) => (
                        <IgrTab key={step.label}>
                            <IgrIcon slot="label" name={step.icon} collection="material" />
                            <span slot="label">{step.label}</span>
                        </IgrTab>
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsType/>);
```

### Responsiveness

The Tabs can be Content Fit to fill up the available horizontal space by adapting their width, or Fixed with scrolling buttons to navigate a large number of tab items. This allows fitting more content than what is normally possible with the other mode in the same total space.

The [`alignment`](mcp:get_api_reference?platform=react&component=IgrTabs&member=alignment) property sets how the React Tabs component arranges the tab headers:

- `start` (default): each tab header is as wide as its content, and the headers start at the start edge of the Tabs.
- `center`: each tab header is as wide as its content, and the headers are centered.
- `end`: each tab header is as wide as its content, and the headers end at the end edge of the Tabs.
- `justify`: the tab headers stretch to fill the width of the Tabs. Use it for the Content Fit mode.

```tsx
<IgrTabs alignment="justify">
  <IgrTab label="Podcasts" />
  <IgrTab label="Playlists" />
  <IgrTab label="Genres" />
</IgrTabs>
```

When the tab headers don't fit, the React Tabs component shows a scroll button at each end of the header strip, which is the Fixed mode. A scroll button scrolls the strip to the next tab header that is out of view in its direction, and it's disabled when the strip is scrolled to that end. When the user selects a tab, the Tabs component scrolls its header into view.

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
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const categories = ['Podcasts', 'Playlists', 'Genres'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function TabsResponsiveness() {
    return (
        <div className="sample">
            <div className="modes">
                <span className="mode-label">Content Fit</span>
                <IgrTabs alignment="justify">
                    {categories.map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
                <span className="mode-label">Content Fix</span>
                <IgrTabs>
                    {days.map((day) => (
                        <IgrTab key={day} label={day} />
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsResponsiveness/>);
```

### Amount

For most scenarios, the Tabs need to contain between two and five items. If your use case requires more than five tabs, you should consider the Fixed mode explained above.

You can add and remove tabs at run time. A tab that you add with `selected` set becomes the selected tab, and when you remove the selected tab, the React Tabs component selects the first enabled tab.

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
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const categories = ['Podcasts', 'Playlists', 'Genres', 'Albums', 'Artists', 'Audiobooks', 'Radio'];

export default function TabsAmount() {
    return (
        <div className="sample">
            <div className="amounts">
                <span className="amount-label">Two Tabs</span>
                <IgrTabs className="two-tabs" alignment="justify">
                    {categories.slice(0, 2).map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
                <span className="amount-label">Five Tabs</span>
                <IgrTabs className="five-tabs" alignment="justify">
                    {categories.slice(0, 5).map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
                <span className="amount-label">5+ Tabs</span>
                <IgrTabs>
                    {categories.map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsAmount/>);
```

### States

Tab Items support Active, Inactive, Active & Hover, Inactive & Hover and Disabled states. In Tabs there is always one Active tab and an arbitrary number of Inactive and Disabled ones.

Set `selected` on a tab to make it the active tab, and `disabled` to turn it off. Users can't select a disabled tab, and the keyboard navigation skips it. When you disable the selected tab, the React Tabs component selects the first enabled tab.

```tsx
<IgrTabs>
  <IgrTab label="Overview" />
  <IgrTab label="Activity" selected={true} />
  <IgrTab label="Billing" disabled={true} />
</IgrTabs>
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
```tsx
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TabsStates() {
    const statesRef = useRef<HTMLDivElement>(null);

    // The tabs only show their look, so inert keeps them out of the tab order and ignores pointer input.
    useEffect(() => {
        if (statesRef.current) {
            statesRef.current.inert = true;
        }
    }, []);

    return (
        <div className="sample">
            <div className="states" ref={statesRef}>
                <span />
                <span className="state-label state-column">Active</span>
                <span className="state-label state-column">Inactive</span>
                <span className="state-label state-column">Disabled</span>
                <span className="state-label">Hover / Off</span>
                <IgrTabs className="state-tabs" alignment="justify">
                    <IgrTab label="Active" selected={true} />
                    <IgrTab label="Inactive" />
                    <IgrTab label="Disabled" disabled={true} />
                </IgrTabs>
                <span className="state-label">Hover / On</span>
                <IgrTabs className="state-tabs" alignment="justify">
                    <IgrTab className="hover" label="Active" selected={true} />
                    <IgrTab className="hover" label="Inactive" />
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsStates/>);
```

### Selection

The React Tabs component calls `onChange` with the newly selected tab when the user selects a tab with a click or a key. To select a tab in code, call [`select`](mcp:get_api_reference?platform=react&component=IgrTabs&member=select) with the tab, or with its `id` or `label`:

```tsx
import { useRef } from 'react';
import { IgrTab, IgrTabs } from 'igniteui-react';

export default function ProfileTabs() {
  const tabsRef = useRef<IgrTabs>(null);

  return (
    <>
      <IgrTabs ref={tabsRef} onChange={(e: CustomEvent<IgrTab>) => console.log(e.detail.label)}>
        <IgrTab label="Overview" />
        <IgrTab label="Details" />
      </IgrTabs>
      <button onClick={() => tabsRef.current?.select('Details')}>Show details</button>
    </>
  );
}
```

Selecting a tab in code, or setting `selected` on a tab, changes the selection without the change event. The Tabs component ignores disabled tabs and values that match no tab.

### Activation

By default, the React Tabs component selects a tab as soon as the arrow keys, Home, or End move the focus to its header. Set [`activation`](mcp:get_api_reference?platform=react&component=IgrTabs&member=activation) to `manual` to move only the focus with these keys, and to select the focused tab with Enter or Space. Use the manual activation when showing the content of a tab is slow, for example when it loads data.

```tsx
<IgrTabs activation="manual">
  <IgrTab label="Overview" />
  <IgrTab label="Reports" />
</IgrTabs>
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

The React Tabs component exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`alignment`](mcp:get_api_reference?platform=react&component=IgrTabs&member=alignment) | `'start' \| 'end' \| 'center' \| 'justify'` | `'start'` | How the tab headers are arranged in the header strip. |
| [`activation`](mcp:get_api_reference?platform=react&component=IgrTabs&member=activation) | `'auto' \| 'manual'` | `'auto'` | Whether moving the focus to a tab header with the keyboard also selects the tab. |
| [`selectedTab`](mcp:get_api_reference?platform=react&component=IgrTabs&member=selectedTab) | `IgrTab \| null` | `null` | Read-only. The selected tab. |
| [`selected`](mcp:get_api_reference?platform=react&component=IgrTabs&member=selected) | `string` | `''` | Read-only. The `label` of the selected tab, or its `id` when the tab has no `label`. |
| [`tabs`](mcp:get_api_reference?platform=react&component=IgrTabs&member=tabs) | `IgrTab[]` | — | Read-only. The tabs that are direct children of the Tabs. |
| [`Tab.label`](mcp:get_api_reference?platform=react&component=IgrTab&member=label) | `string` | `''` | The text of the tab header. The `label` slot takes precedence over it. |
| [`Tab.selected`](mcp:get_api_reference?platform=react&component=IgrTab&member=selected) | `boolean` | `false` | Whether the tab is selected. |
| [`Tab.disabled`](mcp:get_api_reference?platform=react&component=IgrTab&member=disabled) | `boolean` | `false` | Whether the tab is disabled. |

## Methods

The React Tabs component exposes the following method. It changes the selection without emitting the change event.

| Method | Description |
| --- | --- |
| [`select`](mcp:get_api_reference?platform=react&component=IgrTabs&member=select) | Selects the tab that you pass, or the tab whose `id` or `label` matches the string that you pass. Ignores disabled tabs and strings that match no tab. |

## Events

The React Tabs component emits the following events.

| Name | Type | Description |
| --- | --- | --- |
| [`onChange`](mcp:get_api_reference?platform=react&component=IgrTabs&member=onChange) | `CustomEvent<IgrTab>` | Emitted when the user selects a tab with a click or a key. The event detail holds the selected tab. |

## Styling

The React Tabs component takes its colors from the theme. Change them with the following CSS variables:

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
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrChip, IgrList, IgrListItem, IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const sections = [
    {
        label: 'Overview',
        details: [
            { label: 'Email', value: 'emily.carter@gmail.com' },
            { label: 'Team', value: 'Finance, 8 members' },
            { label: 'Joined', value: 'March 2023' },
        ],
    },
    {
        label: 'Activity',
        details: [
            { label: 'Last login', value: 'Today, 09:24' },
            { label: 'Reports', value: '12 this month' },
            { label: 'Approvals', value: '3 pending' },
        ],
    },
    {
        label: 'Billing',
        disabled: true,
        details: [],
    },
];

export default function TabsStyling() {
    return (
        <div className="sample">
            <div className="profile-card">
                <IgrList className="profile-header">
                    <IgrListItem>
                        <IgrAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png" alt="Emily Carter" shape="circle" />
                        <span slot="title" className="profile-name">Emily Carter</span>
                        <span slot="subtitle" className="profile-role">Finance lead - Sofia</span>
                        <IgrChip slot="end" className="profile-status">Active</IgrChip>
                    </IgrListItem>
                </IgrList>
                <IgrTabs className="profile-tabs" alignment="justify">
                    {sections.map((section) => (
                        <IgrTab key={section.label} label={section.label} disabled={section.disabled}>
                            <IgrList className="profile-details">
                                {section.details.map((detail) => (
                                    <IgrListItem key={detail.label}>
                                        <span slot="title" className="detail-label">{detail.label}</span>
                                        <span slot="end" className="detail-value">{detail.value}</span>
                                    </IgrListItem>
                                ))}
                            </IgrList>
                        </IgrTab>
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsStyling/>);
```

### Styling with Tailwind

You can style the React Tabs using our custom Tailwind utility classes. Make sure to [set up Tailwind](../themes/tailwind.md) first.

Set the `--ig-tabs-*` CSS variables with Tailwind arbitrary properties:

```tsx
<IgrTabs className="[--ig-tabs-item-background:#011627] [--ig-tabs-item-active-color:#FF8040] [--ig-tabs-indicator-color:#FF8040]">
  ...
</IgrTabs>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import url("https://use.typekit.net/bng2zgw.css");
@source "./index.tsx";

@theme {
    --color-nav-surface: #112031;
    --color-nav-hover: #1a314a;
    --color-nav-active: #006ae6;
    --color-nav-ink: #3392ff;
}
```
```tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, IgrTab, IgrTabs, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 17.5V12.5H11.6667V17.5H15.8333V10.8333H18.3333L10 3.33333L1.66667 10.8333H4.16667V17.5H8.33333Z"/></svg>';
const placeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.66667C6.775 1.66667 4.16667 4.275 4.16667 7.5C4.16667 11.875 10 18.3333 10 18.3333C10 18.3333 15.8333 11.875 15.8333 7.5C15.8333 4.275 13.225 1.66667 10 1.66667ZM10 9.58333C8.85 9.58333 7.91667 8.65 7.91667 7.5C7.91667 6.35 8.85 5.41667 10 5.41667C11.15 5.41667 12.0833 6.35 12.0833 7.5C12.0833 8.65 11.15 9.58333 10 9.58333Z"/></svg>';
const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.9167C10.9167 17.9167 11.6667 17.1667 11.6667 16.25H8.33333C8.33333 17.1667 9.075 17.9167 10 17.9167ZM15 12.9167V8.75C15 6.19167 13.6333 4.05 11.25 3.48333V2.91667C11.25 2.225 10.6917 1.66667 10 1.66667C9.30833 1.66667 8.75 2.225 8.75 2.91667V3.48333C6.35833 4.05 5 6.18333 5 8.75V12.9167L3.33333 14.5833V15.4167H16.6667V14.5833L15 12.9167Z"/></svg>';
const messengerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0005 1.67197C7.8104 1.59245 5.68271 2.41021 4.10963 3.9361C2.53656 5.46198 1.65438 7.56379 1.66718 9.7553C1.64133 12.0302 2.59442 14.2066 4.28385 15.7303C4.41843 15.8529 4.49927 16.0235 4.50885 16.2053V17.6803C4.51812 17.9023 4.63603 18.1055 4.82415 18.2237C5.01226 18.3419 5.2465 18.3599 5.45051 18.272L7.11718 17.547C7.2595 17.4932 7.41653 17.4932 7.55885 17.547C8.34671 17.7596 9.15945 17.8661 9.97551 17.8636C14.4467 17.8705 18.0769 14.2515 18.0838 9.7803C18.0907 5.3091 14.4717 1.67887 10.0005 1.67197ZM15.0005 7.88823L12.5589 11.7632C12.3727 12.0588 12.0713 12.263 11.7278 12.3263C11.3842 12.3897 11.0299 12.3063 10.7505 12.0966L8.80052 10.6382C8.62274 10.5049 8.3783 10.5049 8.20052 10.6382L5.56719 12.6382C5.41575 12.755 5.2021 12.7454 5.06181 12.6154C4.92152 12.4854 4.89561 12.2731 5.00052 12.1132L7.44219 8.23823C7.62836 7.94264 7.92973 7.73845 8.27328 7.67512C8.61682 7.61179 8.97119 7.69511 9.25052 7.90489L11.2005 9.36323C11.3783 9.49656 11.6227 9.49656 11.8005 9.36323L14.4339 7.37156C14.5853 7.25477 14.7989 7.26442 14.9392 7.3944C15.0795 7.52437 15.1054 7.73666 15.0005 7.89656V7.88823Z"/></svg>';
const personIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path d="M10 10C11.8417 10 13.3333 8.50833 13.3333 6.66667C13.3333 4.825 11.8417 3.33333 10 3.33333C8.15833 3.33333 6.66667 4.825 6.66667 6.66667C6.66667 8.50833 8.15833 10 10 10ZM10 11.6667C7.775 11.6667 3.33333 12.7833 3.33333 15V16.6667H16.6667V15C16.6667 12.7833 12.225 11.6667 10 11.6667Z"/></svg>';

const destinations = [
    { label: 'Home', icon: 'home' },
    { label: 'Location', icon: 'place', selected: true },
    { label: 'Alerts', icon: 'notifications' },
    { label: 'Chat', icon: 'messenger' },
    { label: 'Profile', icon: 'person' },
];

export default function TabsTailwindStyling() {
    useEffect(() => {
        registerIconFromText('home', homeIcon, 'material');
        registerIconFromText('place', placeIcon, 'material');
        registerIconFromText('notifications', notificationsIcon, 'material');
        registerIconFromText('messenger', messengerIcon, 'material');
        registerIconFromText('person', personIcon, 'material');
    }, []);

    return (
        <div className="sample flex items-center justify-center">
            <IgrTabs
                alignment="justify"
                className="h-auto w-[511px] rounded-full [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-tabs-border-color--hover:transparent] [--ig-tabs-border-color:transparent] [--ig-tabs-border-radius:0] [--ig-tabs-indicator-color:transparent] [--ig-tabs-item-active-background:var(--color-nav-active)] [--ig-tabs-item-active-color:#fff] [--ig-tabs-item-active-hover-background:var(--color-nav-active)] [--ig-tabs-item-active-hover-color:#fff] [--ig-tabs-item-active-hover-icon-color:#fff] [--ig-tabs-item-active-icon-color:#fff] [--ig-tabs-item-background:var(--color-nav-surface)] [--ig-tabs-item-hover-background:var(--color-nav-hover)] [--ig-tabs-item-hover-color:var(--color-nav-ink)] [--ig-tabs-item-hover-icon-color:var(--color-nav-ink)] [--ig-tabs-item-icon-color:var(--color-nav-ink)] [--ig-tabs-item-text-color:var(--color-nav-ink)]"
            >
                {destinations.map((destination) => (
                    <IgrTab
                        key={destination.label}
                        selected={destination.selected}
                        className="[&::part(content)]:text-xs [&::part(content)]:leading-4 [&::part(content)]:font-semibold [&::part(content)]:tracking-[0.15px] [&::part(content)]:normal-case [&::part(tab-header)]:py-3"
                    >
                        <IgrIcon slot="label" name={destination.icon} collection="material" className="[--ig-icon-size:1.5rem]" />
                        <span slot="label">{destination.label}</span>
                    </IgrTab>
                ))}
            </IgrTabs>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsTailwindStyling/>);
```

## Accessibility

The React Tabs component uses the roles of the WAI-ARIA tabs pattern: users reach the tab headers with the Tab key, move between them with the arrow keys, and select a tab to show its content.

### Keyboard Interaction

The header strip of the React Tabs component is a single tab stop: only the selected tab header is in the tab order, or the first enabled tab header when no tab is selected. The content of the selected tab is the next tab stop. The following keys work while a tab header has the focus:

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves the focus out of the header strip, to the content of the selected tab or to the previous focusable element. The Tabs component doesn't handle these keys. |
| <kbd>Arrow Right</kbd> | Moves the focus to the next enabled tab header, and from the last one to the first. In a right-to-left layout, moves it to the previous one. With the `auto` activation, also selects the tab. |
| <kbd>Arrow Left</kbd> | Moves the focus to the previous enabled tab header, and from the first one to the last. In a right-to-left layout, moves it to the next one. With the `auto` activation, also selects the tab. |
| <kbd>Home</kbd> | Moves the focus to the first enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>End</kbd> | Moves the focus to the last enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the focused tab. |

The React Tabs component handles these keys on `keydown`:

- It prevents their default action, so the arrow keys that move the focus, Home, End, and Space don't scroll the page.
- A key that you hold doesn't repeat its action.
- A key that you press together with Shift, Ctrl, Alt, or Meta does nothing.
- The Tabs component scrolls the header that receives the focus into view.

With a pointer, a click on a tab header focuses and selects the tab. A disabled tab ignores clicks. The scroll buttons aren't in the tab order.

### Screen Readers / ARIA

The React Tabs component renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| `igc-tabs` | `tablist` | `aria-orientation="horizontal"`, set through element internals |
| The `tab-header` part of each tab | `tab` | `aria-selected`, `aria-disabled`, `aria-controls` that points to the content of the tab, `aria-posinset`, and `aria-setsize` |
| The `tab-body` part of each tab | `tabpanel` | `aria-labelledby` that points to the header of the tab |

The React Tabs component also behaves as follows for assistive technology:

- A tab takes its accessible name from its header content: the `label` property or the `label` slot, and the content of the `prefix` and `suffix` slots.
- The content of the tabs that aren't selected is hidden and `inert`, so assistive technology and the keyboard skip it.
- The `aria-posinset` and `aria-setsize` attributes of each tab header give screen readers the position of the tab in the set, such as "2 of 3".
- The Tabs component doesn't use a live region. A changed selection reaches assistive technology through the `aria-selected` state and the focus.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `tablist`, `tab`, and `tabpanel` roles expose the structure, and each tab panel is labeled by its tab header through `aria-labelledby`. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | In the Material, Fluent, and Indigo themes, the selected tab header shows an indicator line under it, so the selection doesn't depend on color alone. |
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

The React Tabs API reference lists the complete API surface for the target platform.

- [`IgrTabs`](mcp:get_api_reference?platform=react&component=IgrTabs)
- [`IgrTab`](mcp:get_api_reference?platform=react&component=IgrTab)

## Dependencies

The React Tabs component requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

The following resources provide more React Tabs guidance and project support:

- [Tabs - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/tabs)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Tabs component shows one section of related content at a time. Use these components when the content needs a different structure:

- [Stepper](./stepper.md) - Use Stepper when users complete a sequence of steps, such as a checkout process.
- [Accordion](./accordion.md) - Use Accordion when users need to expand several sections of a vertical list at the same time.

## FAQ

These questions cover common React Tabs setup, accessibility, and usage scenarios.

  **Q: How do I select a tab in code?**

    Call the `select` method of the React Tabs with a tab, or with the `id` or the `label` of a tab, or set `selected` on the tab. The React Tabs component doesn't emit the change event for a selection that you make in code.
  
  **Q: Can I prevent users from switching to another tab?**

    The change event of the React Tabs component isn't cancelable, because the React Tabs component emits it after the selection changes. Set `disabled` on the tabs that users must not open, and enable them when they become available.
  
  **Q: Does the Tabs component keep the content of hidden tabs in the DOM?**

    Yes. The React Tabs component keeps the content of every tab in the DOM, hides the content of the tabs that aren't selected, and makes it `inert`, so users and assistive technology can't reach it until its tab is selected.
  
  **Q: Should I use the Tabs for a checkout or another step-by-step process?**

    No. The React Tabs component organizes related information that users can open in any order, and it doesn't communicate an order of steps. Use the React Stepper for a sequential process, such as a checkout or a configuration wizard.
  

