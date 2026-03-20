---
title: React Dropdown List Component | Ignite UI for React
_description: With React Dropdown List component you can add interactivity and see styling options to a scrollable list of items in your app. Try it now. React now.
_keywords: React, UI controls, web widgets, UI widgets, React Dropdown Component, Infragistics
_license: MIT
mentionedTypes: ["Dropdown", "DropdownItem", "DropdownHeader", "DropdownGroup"]
_tocName: Dropdown
---

# React Dropdown List Component - Overview

Feature-rich, the React Dropdown list offers out-of-the-box filtering, accessibility, preselected values, flexible data binding, grouping, UI customization, and more. What this component practically does is to effectively and easily replace HTML select tags, enabling users to quickly choose a non-editable value from a predefined set of several options.

The Ignite UI for React Dropdown component displays an toggle list of predefined values and allows users to easily select a single option item with a click. It can be quickly configured to act as a React dropdown menu or you can simply use it to deliver more useful visual information by grouping data. Also, with grouping you can use both flat and hierarchical data.

With our component, you get all the functions and customization options you need for your project – styling customizations, React Dropdown placement options, templates and ability to change what and how is displayed in the header, footer, body, list, etc.

## React Dropdown Example

The following React Dropdown List example demonstrates the use of simple interactive React Dropdown menu in action with three basic options to choose from. See how it works.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DropDownOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Options</span></IgrButton>
                    </div>
                    <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
                    <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
                    <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownOverview/>);
```


## How to use the Dropdown List with Ignite UI for React

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrDropdown } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

```tsx
<IgrDropdown>
    <div slot="target">
        <IgrButton><span>Options</span></IgrButton>
    </div>
    <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
    <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
    <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
</IgrDropdown>
```

### Target

The React Dropdown list is positioned relatively to its target. The `target` slot allows you to provide a built-in component which toggles the `open` property on click. In some cases you would want to use an external target or use another event to toggle the opening of the Dropdown. You can achieve this using the [`showTarget`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#showTarget), [`hide`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasecomboboxlike.html#hide) and [`toggleTarget`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#toggleTarget) methods which allow you to provide the target as a parameter. By default, the Dropdown list uses `absolute` CSS position. You will need to set the [`IgrPositionStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpositionstrategy.html) of the React Dropdown to `fixed` when the target element is inside a fixed container, but the Dropdown is not. The Dropdown list is automatically sized based on its content, if you want the list to have the same width as the target, you should set the [`sameWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#sameWidth) property to `true`.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DropDownTarget extends React.Component<any, any> {

    public dropdownRef: IgrDropdown;

    constructor(props: any) {
        super(props);
        this.onDropDownRef = this.onDropDownRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <div className="options horizontal">
                    <IgrButton onClick={(e)=>this.onClick(e)}><span>First Target</span></IgrButton>
                    <IgrButton onClick={(e)=>this.onClick(e)} style={{marginLeft: "20px"}}><span>Second Target</span></IgrButton>

                    <IgrDropdown ref={this.onDropDownRef} sameWidth={true}>
                        <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
                        <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
                        <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
                    </IgrDropdown>
                </div>
            </div>
        );
    }

    public onDropDownRef(dropdown: IgrDropdown){
        if (!dropdown) { return; }
        this.dropdownRef = dropdown;
    }

    public onClick(event: any) {
        if(this.dropdownRef){
            this.dropdownRef.toggle(event.currentTarget);
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownTarget/>);
```


### Position

The preferred placement of the React Dropdown can be set using the [`placement`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#placement) property. The default placement of the Dropdown is `bottom-start`. The [`flip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#flip) property determines whether the placement should be flipped if there is not enough space to display the Dropdown at the specified placement. The distance from the React Dropdown list to its target can be specified using the [`distance`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#distance) property.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-dropdown::part(list) {
  height: 200px;
}

.center {
  align-items: center;
  justify-content: center;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DropDownPosition extends React.Component<any, any> {

    public dropdownRef: IgrDropdown;

    constructor(props: any) {
        super(props);
        this.onDropDownRef = this.onDropDownRef.bind(this);     
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown ref={this.onDropDownRef} distance={5} onChange={(e)=>this.onChange(e)} placement="bottom">
                    <div slot="target">
                        <IgrButton><span>Options</span></IgrButton>
                    </div>
                    <IgrDropdownItem><span>top</span></IgrDropdownItem>
                    <IgrDropdownItem><span>topstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>topend</span></IgrDropdownItem>
                    <IgrDropdownItem selected><span>bottom</span></IgrDropdownItem>
                    <IgrDropdownItem><span>bottomstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>bottomend</span></IgrDropdownItem>
                    <IgrDropdownItem><span>right</span></IgrDropdownItem>
                    <IgrDropdownItem><span>rightstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>rightend</span></IgrDropdownItem>
                    <IgrDropdownItem><span>left</span></IgrDropdownItem>
                    <IgrDropdownItem><span>leftstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>leftend</span></IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }

    public onDropDownRef(dropdown: IgrDropdown){
        if (!dropdown) { return; }
        this.dropdownRef = dropdown;
    }

    public onChange(event: any): void {
        if(this.dropdownRef){
            for (let i = 1; i < event.target.children.length; i++) {
                let item = event.target.children[i];
                if (item.selected){
                    this.dropdownRef.placement = item.value;
                }
            }
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownPosition/>);
```


### Selection

The [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html) emits the `Change` event when the user selects an item. The [`select`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#select) method of the Dropdown allows you to select an item by its index or value.

### Item

The [`IgrDropdownItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdownitem.html) represents a selectable item in the Dropdown list. You could predefine a selected item by setting the [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbaseoptionlike.html#selected) property. You could also disable an item so that it can't be selected using the [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbaseoptionlike.html#disabled) property. The [`IgrDropdownItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdownitem.html) has a default slot which allows you to specify the content of the item. You could also provide custom content to be rendered before or after the content using the `prefix` and `suffix` slots. The [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbaseoptionlike.html#value) property allows you to provide a custom value to an item. If the [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbaseoptionlike.html#value) is not set, it resolves to the text content of the item.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const hotelIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z'/></svg>";
const groceryIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z'/></svg>";
const restaurantIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z'/></svg>";

export default class DropDownItem extends React.Component<any, any> {

    public hotelIcon: IgrIcon;
    public groceryIcon: IgrIcon;
    public restaurantIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        registerIconFromText("hotel", hotelIconText, "material");
        registerIconFromText("grocery", groceryIconText, "material");
        registerIconFromText("restaurant", restaurantIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Category</span></IgrButton>
                    </div>
                    <IgrDropdownItem>
                        <span slot="prefix">
                            <IgrIcon name="hotel" collection="material"></IgrIcon>
                        </span>
                        <span>Hotel</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem disabled>
                        <span slot="prefix">
                            <IgrIcon name="grocery" collection="material"></IgrIcon>
                        </span>
                        <span>Grocery</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem selected>
                        <span slot="prefix">
                            <IgrIcon name="restaurant" collection="material"></IgrIcon>
                        </span>
                        <span>Restaurant</span>
                    </IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownItem/>);
```


### Header

You could use the [`IgrDropdownHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdownheader.html) to provide a header for a group of items.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrIcon, IgrDropdownHeader, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const ringIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z'/></svg>";
const vibrateIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/></svg>";
const silentIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z'/></svg>";

export default class DropDownHeader extends React.Component<any, any> {

    public ringIcon: IgrIcon;
    public vibrateIcon: IgrIcon;
    public silentIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        registerIconFromText("ring", ringIconText, "material");
        registerIconFromText("vibrate", vibrateIconText, "material");
        registerIconFromText("silent", silentIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Sound</span></IgrButton>
                    </div>
                    <IgrDropdownHeader><span>Mode</span></IgrDropdownHeader>
                    <IgrDropdownItem selected>
                        <span slot="prefix">
                            <IgrIcon name="ring" collection="material"></IgrIcon>
                        </span>
                        <span>Ring</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem>
                        <span slot="prefix">
                            <IgrIcon name="vibrate" collection="material"></IgrIcon>
                        </span>
                        <span>Vibrate</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem>
                        <span slot="prefix">
                            <IgrIcon name="silent" collection="material"></IgrIcon>
                        </span>
                        <span>Silent</span>
                    </IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownHeader/>);
```


### Group

The React Dropdown's items can also be grouped using the [`IgrDropdownGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdowngroup.html), making it easier for users to differentiate separate categories. See it in action in this React Dropdown List example:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrIcon, IgrDropdownGroup, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const placeIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'/></svg>";

export default class DropDownGroup extends React.Component<any, any> {

    public placeIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        registerIconFromText("place", placeIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Countries</span></IgrButton>
                    </div>
                    <IgrDropdownGroup>
                        <span slot="label">Europe</span>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Germany</span>
                            <span slot="suffix">DE</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>France</span>
                            <span slot="suffix">FR</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Spain</span>
                            <span slot="suffix">ES</span>
                        </IgrDropdownItem>
                    </IgrDropdownGroup>
                    <IgrDropdownGroup>
                        <span slot="label">North America</span>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>USA</span>
                            <span slot="suffix">USA</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Canada</span>
                            <span slot="suffix">CA</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Mexico</span>
                            <span slot="suffix">MX</span>
                        </IgrDropdownItem>
                    </IgrDropdownGroup>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownGroup/>);
```


### Scroll Strategy

The [`scrollStrategy`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html#scrollStrategy) property determines the behavior of the component during scrolling the container of the target element. The default value is `scroll` which means that the Dropdown will be scrolled with its target. Setting the property to `block` will block the scrolling if the Dropdown is opened. You could also set the property to `close` which means that the Dropdown will be closed automatically on scroll.

### Keep Open

By default, the Dropdown is closed automatically when the user clicks outside of it or selects an item. You could prevent this behavior using the [`keepOpenOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasecomboboxlike.html#keepOpenOnOutsideClick) and [`keepOpenOnSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasecomboboxlike.html#keepOpenOnSelect) properties.

## Styling

You can change the appearance of the Dropdown and its items, by using the exposed CSS parts. The [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html) exposes `base` and `list` parts, the [`IgrDropdownItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdownitem.html) exposes `prefix`, `content` and `suffix` parts and the [`IgrDropdownGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdowngroup.html) exposes `label` part.

```css
igc-dropdown::part(list) {
  height: 220px;
}

igc-dropdown-item[selected] {
  background: var(--ig-success-300);
}

igc-dropdown-group::part(label) {
  display: flex;
  justify-content: center;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-dropdown::part(list) {
    height: 220px;
}

igc-dropdown-item[selected] {
    background: #28a745;
}

igc-dropdown-group::part(label) {
    display: flex;
    justify-content: center;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrIcon, IgrDropdownGroup, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const placeIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'/></svg>";

export default class DropDownStyling extends React.Component<any, any> {

    public placeIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        registerIconFromText("place", placeIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Countries</span></IgrButton>
                    </div>
                    <IgrDropdownGroup>
                        <span slot="label">Europe</span>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Germany</span>
                            <span slot="suffix">DE</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>France</span>
                            <span slot="suffix">FR</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem selected>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Spain</span>
                            <span slot="suffix">ES</span>
                        </IgrDropdownItem>
                    </IgrDropdownGroup>
                    <IgrDropdownGroup>
                        <span slot="label">North America</span>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>USA</span>
                            <span slot="suffix">USA</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Canada</span>
                            <span slot="suffix">CA</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Mexico</span>
                            <span slot="suffix">MX</span>
                        </IgrDropdownItem>
                    </IgrDropdownGroup>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownStyling/>);
```


## API Reference

- [`IgrDropdown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdown.html)
- [`IgrDropdownItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdownitem.html)
- [`IgrDropdownHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdownheader.html)
- [`IgrDropdownGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdropdowngroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
