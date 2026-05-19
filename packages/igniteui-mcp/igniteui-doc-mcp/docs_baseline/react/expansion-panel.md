---
title: React Expansion Panel | Expansion Panel | Infragistics
_description: Expansion Panel component provides an easily configurable expandable component with two states - collapsed and expanded.
_keywords: React Expansion Panel, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Infragistics.Controls.Layouts.Implementation.ExpansionPanel"]
namespace: Infragistics.Controls
_tocName: Expansion Panel
---

# React Expansion Panel Overview

The Ignite UI for React Expansion Panel is a lightweight accordion component which can be rendered in two states - collapsed or expanded. The expansion panel can be toggled using mouse click, or keyboard interactions.

## React Expansion Panel Example

```css
igc-expansion-panel{
    width: 100%;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelUsage.css';
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ExpansionPanelUsage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrExpansionPanel>
                    <h1 slot="title">Golden Retriever</h1>
                    <h3 slot="subtitle">Medium-large gun dog</h3>
                    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                        are easy to train to basic or advanced obedience standards.</span>
                </IgrExpansionPanel>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelUsage/>);
```

<div class="divider--half"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html) is as follows:

```tsx
<IgrExpansionPanel>
    <h1 slot="title">Golden Retriever</h1>
    <h3 slot="subtitle">Medium-large gun dog</h3>
    <span>
        The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
        are easy to train to basic or advanced obedience standards.
    </span>
</IgrExpansionPanel>
```

## Binding to events

The Expansion Panel component raises the following events:

- Closed - Raised when the expansion panel is collapsed
- Opened - Raised when the expansion panel is expanded
- Closing - Raised when the expansion panel starts collapsing
- Opening - Raised when the expansion panel starts expanding

The following sample demonstrates how we can add some logic to our component to make it show/hide the `subtitle` depending on the current state of the panel.

We can do this by binding to the `Opened` and `Closed` events:

```css
igc-expansion-panel{
    width: 100%;
    height: 300px;
}

.eventSpanShown {
    background-color: rgba(0,0,0,0.5);
    border-radius: 26px;
    padding: 1rem 1.5rem;
    color:white;
    display: block;
}

.eventSpanHidden {
    display: none;
}

.center {
    align-items: center;
}

.subtitleHidden {
    display: none;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelPropsAndEvents.css';
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ExpansionPanelPropertiesAndEvents extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { subtitleClass: "", eventSpanClass: "eventSpanHidden", eventSpanText: "none" };

        this.onExpansionPanelClosed = this.onExpansionPanelClosed.bind(this);
        this.onExpansionPanelOpened = this.onExpansionPanelOpened.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrExpansionPanel onClosed={this.onExpansionPanelClosed} onOpened={this.onExpansionPanelOpened}>
                    <h1 slot="title">Golden Retriever</h1>
                    <h3 className={this.state.subtitleClass} slot="subtitle">Medium-large gun dog</h3>
                    <div slot="indicator">{this.state.expansionText}</div>
                    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                        are easy to train to basic or advanced obedience standards.</span>
                </IgrExpansionPanel>

                <span className={this.state.eventSpanClass}>{this.state.eventSpanText}</span>
            </div>
        );
    }

    public onExpansionPanelClosed() {

        this.setState({ subtitleClass: "", eventSpanClass: "eventSpanShown", eventSpanText: "Closed event fired!"});

        window.clearTimeout(undefined);

        window.setTimeout(() => {
            this.setState({eventSpanClass: "eventSpanHidden"});
        }, 2000);
    }

    public onExpansionPanelOpened() {
        this.setState({ subtitleClass: "subtitleHidden", eventSpanClass: "eventSpanShown", eventSpanText: "Opened event fired!"});

        window.clearTimeout(undefined);

        window.setTimeout(() => {
            this.setState({eventSpanClass: "eventSpanHidden"});
        }, 2000);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelPropertiesAndEvents/>);
```

<div class="divider--half"></div>

## Component Customization

The [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html) control allows all sorts of content to be added inside of its body. It can render [input](../inputs/input.md), charts and even other expansion panels!

The [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html) allows for easy customization of the header through the exposed **title**, **subTitle** and **indicator** slots.

Configuring the position of the expansion indicator can be done through the [`indicatorPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html#indicatorPosition) property of the Expansion Panel. The possible options are **start**, **end** or **none**.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelCustomization.css';
import { IgrExpansionPanel, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ExpansionPanelComponentCustomization extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { expansionText: "Show more" };

        this.onExpansionPanelClosed = this.onExpansionPanelClosed.bind(this);
        this.onExpansionPanelOpened = this.onExpansionPanelOpened.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrExpansionPanel onClosed={this.onExpansionPanelClosed} onOpened={this.onExpansionPanelOpened} indicatorPosition="end">
                    <h1 slot="title">Golden Retriever</h1>
                    <h3 slot="subtitle">Medium-large gun dog</h3>
                    <div slot="indicator">{this.state.expansionText}</div>
                    <img height="100" src="https://i.ibb.co/6ZdY7cn/Untitled-design-3.png" alt=""></img>
                    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                        are easy to train to basic or advanced obedience standards.</span>
                    <IgrButton href="https://en.wikipedia.org/wiki/Golden_Retriever" variant="outlined" target="_blank">
                        <span>Read more</span>
                    </IgrButton>
                </IgrExpansionPanel>
            </div>
        );
    }

    public onExpansionPanelClosed() {
        this.setState({ expansionText: "Show more"});
    }

    public onExpansionPanelOpened() {
        this.setState({ expansionText: "Show less"});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelComponentCustomization/>);
```

<div class="divider--half"></div>

## Keyboard Navigation

The Ignite UI for React Expansion Panel keyboard navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>ALT</kbd> + <kbd>↓</kbd> - expands the focused panel
- <kbd>ALT</kbd> + <kbd>↑</kbd> - collapses the focused panel
- <kbd>SPACE</kbd>/<kbd>ENTER</kbd> - toggle the expansion state of the focused panel

## Styling

The [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html) component exposes several CSS parts, giving you full control over its style:

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
    width: 500px;
    background-color: #18203b;
    color: white;
    border-radius: 8px;
}

igc-button::part(base){
    color: #18203b;
}

igc-button::part(base)::before {
    background-color: #ffd351;
}

igc-expansion-panel::part(indicator) {
    color: #ffd351;
}

igc-expansion-panel::part(header) {
    background-color: #18203b;
}

igc-expansion-panel::part(title),
igc-expansion-panel::part(subtitle) {
    color: #ffd351;
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
    border-radius: 8px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelStyling.css';
import { IgrExpansionPanel, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ExpansionPanelStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrExpansionPanel indicatorPosition="end">
                    <h1 slot="title">Golden Retriever</h1>
                    <h3 slot="subtitle">Medium-large gun dog</h3>
                    <img height="100" src="https://i.ibb.co/6ZdY7cn/Untitled-design-3.png" alt=""></img>
                        <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                            and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                            to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                            are easy to train to basic or advanced obedience standards.</span>
                    <IgrButton href="https://en.wikipedia.org/wiki/Golden_Retriever" variant="contained" target="_blank">
                        <span>Read more</span>
                    </IgrButton>
                </IgrExpansionPanel>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelStyling/>);
```

<div class="divider"></div>

## API References

- [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
