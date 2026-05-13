---
title: React Input | Data Visualization Tools | Infragistics
_description: Infragistics' React input is a component where the user can enter data. Improve your application with Ignite UI for React!
_keywords: React input, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Input", "Icon", "Radio"]
_tocName: Input
---

# React Input Overview

The Ignite UI for React Input is a component where the user can enter data.

## React Input Example

<div class="divider--half"></div>

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class InputOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);     
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrInput type="email" label="Subscribe" placeholder="john.doe@mail.com">
                    <span slot="prefix">Email</span>
                </IgrInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputOverview/>);
```

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After we import the [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) component we are ready to start using it, so let's add our first Input.

```tsx
<IgrInput type="email" label="Subscribe"></IgrInput>
```

## Prefix & Suffix

With `prefix` and `suffix` slots we can add different content before and after the main content of the Input. In the following sample we will create a new Input field with a text prefix and an icon suffix:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrInput, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const phoneIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';

export default class InputPrefixSuffix extends React.Component<any, any> {

    public phoneIcon: IgrIcon;

    constructor(props: any) {
        super(props);     
        registerIconFromText("phone", phoneIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrInput type="tel" label="Phone" placeholder="888 123456">
                    <span slot="prefix">+359</span>
                    <IgrIcon slot="suffix" collection="material" name="phone" />
                </IgrInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputPrefixSuffix/>);
```

## Helper Text

The `helper-text` slot provides a hint placed below the Input. Let's add some helper text to our phone Input:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrInput, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const phoneIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';

export default class InputHelperText extends React.Component<any, any> {

    public phoneIcon: IgrIcon;

    constructor(props: any) {
        super(props);     
        registerIconFromText("phone", phoneIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrInput type="tel" label="Phone">
                    <span slot="prefix">+359</span>
                    <IgrIcon name="phone" />
                    <span slot="helper-text">Ex.: +359 888 123 456</span>
                </IgrInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputHelperText/>);
```

## Input Sizing

We can allow the user to change the size of the [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) using the `--ig-size` CSS variable. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the Input:

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
}

#radioGroup {
    display: flex;
    margin: 0 auto;
    width: 15%;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './InputSizeStyling.css';
import { IgrInput, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class InputSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.state = { size: "medium" };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div id="radioGroup">
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="size" value="small" labelPosition="after" checked={this.state.size === "small"} onChange={this.onRadioChange}><span>Small</span></IgrRadio>
                        <IgrRadio name="size" value="medium" labelPosition="after" checked={this.state.size === "medium"} onChange={this.onRadioChange}><span>Medium</span></IgrRadio>
                        <IgrRadio name="size" value="large" labelPosition="after" checked={this.state.size === "large"} onChange={this.onRadioChange}><span>Large</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
                <IgrInput className={'size-' + this.state.size} type="text" label="Required" value="This input is required" required={true} />
                <IgrInput className={'size-' + this.state.size} type="text" label="Disabled" value="This input is disabled" disabled={true} />
                <IgrInput className={'size-' + this.state.size} type="text" label="Readonly" value="This input is readonly" readOnly={true} />
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
root.render(<InputSize />);
```

In the sample above we have demonstrated the use of the following attributes:

- `required` - Used to mark the input as required
- `disabled` - Used to disable the input
- `readonly` - Used to mark the input as readonly

## Styling

The [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```scss
igc-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-input::part(label) {
  color: var(--ig-gray-700);
}

igc-input::part(prefix),
igc-input::part(suffix) {
  color: var(--ig-primary-600-contrast);
  background-color: var(--ig-primary-600);
  border-color: var(--ig-secondary-600);
}
```

```css
igc-input::part(input){
    background-color: rgb(169, 214, 229);
    border-color: rgb(42, 111, 151);
}

igc-input::part(label){
    color: rgb(1, 42, 74);
}

igc-input::part(prefix),
igc-input::part(suffix){
    color: white;
    border-color: rgb(42, 111, 151);
    background-color: rgb(70, 143, 175);
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
import { IgrInput, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './InputStyling.css';
const phoneIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';

export default class InputStyling extends React.Component<any, any> {

    public phoneIcon: IgrIcon;

    constructor(props: any) {
        super(props);     
        registerIconFromText("phone", phoneIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrInput type="tel" label="Phone">
                    <span slot="prefix">+359</span>
                    <IgrIcon slot="suffix" collection="material" name="phone" />
                    <span slot="helper-text">Ex.: +359 888 123 456</span>
                </IgrInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputStyling/>);
```

<div class="divider"></div>

## API References

- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
