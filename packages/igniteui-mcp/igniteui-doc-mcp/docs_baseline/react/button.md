---
title: React Button Component | Ignite UI for React
_description: Get started with the React Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the React Button OnClick event.
_keywords: React, UI controls, web widgets, UI widgets, React Button Components, Infragistics
mentionedTypes: ["Button", "ButtonBase"]
_license: MIT
_tocName: Button
---

# React Button Overview

The React Button Component lets you enable clickable elements that trigger actions in your React app. You get full control over how you set button variants, configure styles for the wrapped element, and define sizes. The Button Component also gives flexibility through the React Button <!-- React -->clicked callback<!-- end: React -->, toggle the React button, disable the React button, and more.

## React Button Example

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ButtonOverviewStyle.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="button-container">
                    <IgrButton variant="flat"><span>Flat</span></IgrButton>
                    <IgrButton variant="contained"><span>Contained</span></IgrButton>
                    <IgrButton variant="outlined"><span>Outlined</span></IgrButton>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonOverview/>);
```


## Usage

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html) and its necessary CSS, like so:

```tsx
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

```tsx
<IgrButton />
```

## Prefix / Suffix

With `prefix` and `suffix` slots of the [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html) component, we can add different content before and after the main content of the button.

```tsx
<IgrButton type="button" variant="contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</IgrButton>
```

## Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`href`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`href`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#href) attribute will allow you to also set the [`rel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#rel), [`target`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#target) and [`download`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`displayType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#displayType) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

## Button Variants

### Contained Button

Use the [`variant`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html#variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```tsx
<IgrButton variant="contained"><span>Contained</span></IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonContained extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="contained"><span>Contained</span></IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonContained/>);
```


### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`variant`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html#variant) property:

```tsx
<IgrButton variant="outlined"><span>Outlined</span></IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonOutlined extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="outlined"><span>Outlined</span></IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonOutlined/>);
```


### Flat Button

Analogically, we can switch to `flat` variant.

```tsx
<IgrButton variant="flat"><span>Flat</span></IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonFlat extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="flat"><span>Flat</span></IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonFlat/>);
```


### Floating Action Button

We can create a floating action button by setting the [`variant`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html#variant) property to `fab`:

```tsx
<IgrButton variant="fab"><span>Fab</span></IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonFab extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="fab">
                    <span slot="prefix">+</span>
                    <span>Add</span>
                </IgrButton>                    
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonFab/>);
```


## Button Sizing

Users can change the size of the [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html) using the `--ig-size` CSS variable. In the following example, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the button.

```tsx
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';

const [size, setSize] = useState("small");

const onRadioChange = (e: IgrRadioChangeEventArgs) => {
    setSize(e.detail.value);
};

<IgrRadioGroup alignment="horizontal" style={{ display: "flex", margin: "0 auto", width: "15%" }}>
    <IgrRadio name="size" value="small" labelPosition="after" checked={size === "small"} onChange={onRadioChange}>
        <span>Small</span>
    </IgrRadio>
    <IgrRadio name="size" value="medium" labelPosition="after" onChange={onRadioChange}>
        <span>Medium</span>
    </IgrRadio>
    <IgrRadio name="size" value="large" labelPosition="after" onChange={onRadioChange}>
        <span>Large</span>
    </IgrRadio>
</IgrRadioGroup>

<div className="button-container">
    <IgrButton className={"size-" + size} variant="flat">
        <span>Flat</span>
    </IgrButton>
    <IgrButton className={"size-" + size} variant="contained">
        <span>Contained</span>
    </IgrButton>
    <IgrButton className={"size-" + size} variant="outlined">
        <span>Outlined</span>
    </IgrButton>
    <IgrButton className={"size-" + size} variant="fab">
        <span>Like</span>
    </IgrButton>
</div>
```

The result of implementing the above code should look like the following:

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
}

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ButtonSizingStyle.css';
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        this.onRadioChange = this.onRadioChange.bind(this);
        this.state = { size: "medium"};     
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{display: 'flex', margin: '0 auto', width: '15%'}}>
                    <IgrRadio name="size" value="small" labelPosition="after" onChange={this.onRadioChange}>
                        <span>Small</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" onChange={this.onRadioChange} checked={this.state.size === "medium"}>
                        <span>Medium</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" onChange={this.onRadioChange}>
                        <span>Large</span>
                    </IgrRadio>
                </IgrRadioGroup>

                <div className="button-container">
                    <IgrButton className={'size-' + this.state.size} variant="flat"><span>Flat</span></IgrButton>
                    <IgrButton className={'size-' + this.state.size} variant="contained"><span>Contained</span></IgrButton>
                    <IgrButton className={'size-' + this.state.size} variant="outlined"><span>Outlined</span></IgrButton>
                    <IgrButton className={'size-' + this.state.size} variant="fab"><span>Like</span></IgrButton>
                </div>
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.detail.checked == true) {
            this.setState({ size: e.detail.value });
        }
    }
}


// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonSize/>);
```


### Download

Setting the [`download`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#download) property will prompt the user to save the linked URL instead of navigating to it.

```tsx
<IgrButton
    href=""
    variant="contained"
    download="url"
    target="_blank" >
    <span>Download</span>
</IgrButton>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonDownload extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrButton href="" variant="contained" download="url" target="_blank" ><span>Download</span></IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonDownload/>);
```


## Styling

The [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html) exposes three CSS parts which we can use for styling:

|Name|Description|
|--|--|
| `base` | The native button element of the igc-button component. |
| `prefix` | The prefix container of the igc-button component. |
| `suffix` | The suffix container of the igc-button component. |

The `base` CSS part allows us to style the wrapped element (`<button>` or `<a>`).

```css
igc-button::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
  padding: 18px;
}
```

```css
igc-button::part(base) {
    color: #011627;
}

igc-button::part(base)::before {
    background-color: #e99221;
    padding: 18px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ButtonStyle.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="contained"><span>Contained</span></IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonStyling/>);
```


## API References

- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`displayType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#displayType)
- [`download`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#download)
- [`href`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbuttonbase.html#href)
- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
