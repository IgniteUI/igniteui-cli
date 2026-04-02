---
title: React Tabs Control | Layout Controls | Ignite UI for React
_description: React Tabs component allows users to place tabs at the top and switch between similar data sets. Try it Now
_keywords: React, UI controls, web widgets, UI widgets, React Tabs Component, Infragistics
_license: MIT
mentionedTypes: ["Tabs", "Tab", "Icon", "IconButton", "RadioGroup"]
_tocName: Tabs
---

# React Tabs Overview

The React Tabs is a lightweight and user-friendly component that organizes corresponding content in a tab format or a collection of tabs typically placed horizontally. The React Tab enables end-users to easily click through and display different views. There are several features and customization options like tab orientation, templating, built-in header styles, animation, scroll buttons, and more.

The Ignite UI for React Tabs organizes and switches between similar data sets. The tabs are placed at the top of the data content. When a tab is selected its corresponding content is displayed.

## React Tabs Example

The React Tabs example below displays three different tabs aligned in a single line so you can navigate across each in a fast and easy way.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const home = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const search = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const favorite = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
registerIconFromText("home", home, "material");
registerIconFromText("search", search, "material");
registerIconFromText("favorite", favorite, "material");

export default class Overview extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrTabs>
          <IgrTab>
            <span slot="label"><IgrIcon name='home' collection="material"></IgrIcon></span>
            <span>Home tab panel</span>
          </IgrTab>
          <IgrTab>
             <span slot="label"><IgrIcon name='search' collection="material"></IgrIcon></span>
             <span>Search tab panel</span>
          </IgrTab>
          <IgrTab>
             <span slot="label"><IgrIcon name='favorite' collection="material"></IgrIcon></span>
             <span>Favorite tab panel</span>
          </IgrTab>
        </IgrTabs>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Overview/>);
```


## How to use Tabs with Ignite UI for React

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

Before using the [`IgrTabs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html), you need to import it as follows:

```tsx
import { IgrTabs, IgrTab } from "igniteui-react";
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

Simple [`IgrTabs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html) declaration is done as follows:

```tsx
<IgrTabs>
    <IgrTab label="Tab 1">
      <span>Panel 1</span>
    </IgrTab>
    <IgrTab label="Tab 2">
      <span>Panel 2</span>
    </IgrTab>
    <IgrTab label="Tab 3">
      <span>Panel 3</span>
    </IgrTab>
</IgrTabs>
```

### Selection

The [`IgrTabs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html) emits `Change` event when the user selects an item either by key press or click. The [`select`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html#select) method allows you to select a tab by specifying the [`IgrTab`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtab.html) or its id.

If the selected tab is not specified on initial load, the first tab that is not disabled will be selected.

The default behavior, which selects a tab when the user is navigating with the arrow keys, could be modified by the [`activation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html#activation) property. Setting it to `Manual` will focus the next/previous tab on arrow key press, but the tab will be selected only after pressing <kbd>SPACE</kbd> or <kbd>ENTER</kbd>

### Disabled Tab

A tab is disabled by setting the [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtab.html#disabled) attribute:

```tsx
<IgrTab disabled={true}>Tab 1</IgrTab>
```

### Alignment

The [`alignment`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html#alignment) property controls how React tabs are positioned. It accepts the following values:

- `Start` (default): the width of the tab depends on the content (label, icon, both) and all tabs have equal padding. First tab is aligned to the tabs container's left side.
- `Center`: the width of the tab depends on the content and occupies the tabs container's center.
- `End`: the width of the tab depends on the content and all tabs have equal padding. Last tab is aligned to the tabs container's right side.
- `Justify`: all tabs are equal in width and fully fit the tabs container.

If the space is not enough to fit all tabs, scroll buttons are displayed.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab, TabsAlignment, IgrRadio, IgrRadioGroup } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Alignment extends React.Component<any, { alignment: TabsAlignment }> {

  constructor(props) {
    super(props);
    this.state = { alignment: "start" };
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrRadioGroup alignment="horizontal" value={this.state.alignment} onChange={this.onRadioChange}>
            <IgrRadio name="alignment" value="start">Start</IgrRadio>
            <IgrRadio name="alignment" value="center">Center</IgrRadio>
            <IgrRadio name="alignment" value="end">End</IgrRadio>
            <IgrRadio name="alignment" value="justify">Justify</IgrRadio>
        </IgrRadioGroup>
        <IgrTabs alignment={this.state.alignment}>
          <IgrTab label="Basics">
            <span>Basics tab panel</span>
          </IgrTab>
          <IgrTab label="Details">
            <span>Details tab panel</span>
          </IgrTab>
          <IgrTab label="Custom">
            <span>Custom tab panel</span>
          </IgrTab>
          <IgrTab disabled={true} label="Disabled">
            <span>Disabled tab panel will not be displayed</span>
          </IgrTab>
        </IgrTabs>
      </div>
    );
  }

  public onRadioChange = (e: any) => {
    this.setState({ alignment: e.detail.value });
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Alignment />);
```


### Scrolling

Scroll buttons are shown when the available space is not enough to render all React tabs. The start scroll button is disabled if the first tab is in view. Respectively, when last tab is in view the end scroll button is disabled. By pressing one of the scroll buttons the tabs are scrolled so the tab in that direction is fully visible, or if it is already visible the previous/next tab in that direction is displayed.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Scrolling extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <div className="container vertical">
        <IgrTabs key="tabs">
           {Array.from({length: 18}, (_, index) => index + 1).map(number => (
            <IgrTab key={`tab-${number}`}>
              <span slot="label">Tab {number}</span>
              <span>Tab {number} panel</span>
            </IgrTab>
          ))}
        </IgrTabs>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Scrolling />);
```


### Keyboard Navigation

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Selects previous (next in Right-to-Left mode) tab. If [`activation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html#activation) is set to `Manual` only focuses the tab. Scrolls to end if on first tab. |
| <kbd>→</kbd> | Selects next (previous in Right-to-Left mode) tab. If [`activation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html#activation) is set to `Manual` only focuses the tab. Scrolls to start if on last tab. |
| <kbd>HOME</kbd> | Selects the first tab. |
| <kbd>END</kbd> | Selects the last tab. |
| <kbd>ENTER</kbd> / <kbd>SPACE</kbd> | Selects the focused tab when [`activation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html#activation) is `Manual` |

### Prefix / Suffix

Each tab has default slot to display information - icon, text or both and `prefix` and `suffix` slots to show additional content in the beginning and/or in the end.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.sample {
    --ig-size: var(--ig-size-small);
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab, IgrButton, IgrIcon, IgrIconButton, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const home = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const search = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const favorite = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
 const close = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
registerIconFromText("home", home, "material");
registerIconFromText("search", search, "material");
registerIconFromText("favorite", favorite, "material");
registerIconFromText("close", close, "material");

export default class PrefixSuffix extends React.Component<any, { tabs: string[] }> {

    constructor(props: any) {
        super(props);
        this.state = {
          tabs: ['Home','Search', 'Favorite']
        };
    }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrTabs>
          {this.state.tabs.map((tab, index) => (
            <IgrTab key={`${tab.toLowerCase()}-tab`}>
                <IgrIcon slot="prefix" name={tab.toLowerCase()} collection="material"></IgrIcon>

                <span slot="label">{tab}</span>

                <IgrIconButton
                  slot="suffix"
                  name="close"
                  collection="material"
                  variant="flat"
                  onClick={() => this.onCloseClicked(index)}
                ></IgrIconButton>

                <span key={`${tab.toLowerCase()}-panel-span`}>{tab} tab panel</span>
            </IgrTab>
          ))}
        </IgrTabs>
        <IgrButton onClick={this.onResetClick}>Reset</IgrButton>
      </div>
    );
  }

  public onCloseClicked = (index: number) => {
    const updatedTabs = [...this.state.tabs];
    updatedTabs.splice(index, 1);
    this.setState({ tabs: updatedTabs }); 
  }

  public onResetClick = () => {
    this.setState({ tabs: ['Home','Search', 'Favorite'] }); 
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PrefixSuffix/>);
```


## Styling

The [`IgrTabs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html) component exposes several CSS parts, giving you full control over its style:

| Name | Description |
|--|--|
| `selected-indicator` | The selected indicator. |
| `start-scroll-button` | The start scroll button displayed when the tabs overflow. |
| `end-scroll-button` | The end scroll button displayed when the tabs overflow. |

The [`IgrTab`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtab.html) component exposes the following CSS parts:

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
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const home = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const search = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const favorite = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
registerIconFromText("home", home, "material");
registerIconFromText("search", search, "material");
registerIconFromText("favorite", favorite, "material");

export default class TabsStyling extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrTabs>
          <IgrTab>
            <span slot="label"><IgrIcon name='home' collection="material"></IgrIcon></span>
            <span>Home tab panel</span>
          </IgrTab>
          <IgrTab>
             <span slot="label"><IgrIcon name='search' collection="material"></IgrIcon></span>
             <span>Search tab panel</span>
          </IgrTab>
          <IgrTab>
             <span slot="label"><IgrIcon name='favorite' collection="material"></IgrIcon></span>
             <span>Favorite tab panel</span>
          </IgrTab>
        </IgrTabs>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TabsStyling/>);
```


## API Reference

- [`IgrTabs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtabs.html)
- [`IgrTab`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtab.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html)
- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
