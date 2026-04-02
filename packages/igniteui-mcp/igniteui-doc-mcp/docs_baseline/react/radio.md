---
title: Radio and Radio Group
_description: With Ignite UI for React Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Radio Button components, React Radio Button controls, React Radio Group component, React Radio Group control
_license: MIT
mentionedTypes: ["Radio", "RadioGroup", "Form"]
_tocName: Radio & Radio Group
---

# React Radio & Radio Group

The Ignite UI for React Radio component allows the user to select a single option from an available set of options that are listed side by side.

## Ignite UI for React Radio Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioGroup extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "25px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="fruit" value="apple"><span>Apple</span></IgrRadio>
                        <IgrRadio name="fruit" value="banana" checked={true}><span>Banana</span></IgrRadio>
                        <IgrRadio name="fruit" value="Mango"><span>Mango</span></IgrRadio>
                        <IgrRadio name="fruit" value="orange"><span>Orange</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioGroup/>);
```


<div class="divider--half"></div>

### Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html) and the [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrRadio, IgrRadioGroupComponent } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html) is as follows:

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

> [!WARNING]
> The [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html), simply place some text between the opening and closing tags:

```tsx
<IgrRadio><span>Label</span></IgrRadio>
```

You can specify if the label should be positioned before or after the [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html) button by setting the `label-position` attribute. Allowed values are `before` and `after`(default):

```tsx
<IgrRadio labelPosition="before"><span>Apple</span></IgrRadio>
```

The [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html) can also be labelled by elements external to it. In this case the user is given full control to position and style the label in accordance to their needs.

```tsx
<span id="radio-label">Label</span>
<IgrRadio aria-labelledby="radio-label"></IgrRadio>
```

```css
.wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
import './RadioLabelStyles.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height:"60px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="vertical">
                        <IgrRadio name="fruit" value="apple" labelPosition="before"><span>Apple</span></IgrRadio>
                        <div className="wrapper">
                        <span id="radio-label">Orange</span>
                        <IgrRadio
                            name="fruit"
                            labelPosition="before"
                            aria-labelledby="radio-label"
                            value="orange">
                        </IgrRadio>
                        </div>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioLabel/>);
```


### Checked

You can use the `checked` attribute to toggle on the radio.

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" checked={true}><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioGroup extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "25px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="fruit" value="apple"><span>Apple</span></IgrRadio>
                        <IgrRadio name="fruit" value="banana" checked={true}><span>Banana</span></IgrRadio>
                        <IgrRadio name="fruit" value="Mango"><span>Mango</span></IgrRadio>
                        <IgrRadio name="fruit" value="orange"><span>Orange</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioGroup/>);
```


### Invalid

You can use the `invalid` attribute to mark the radio as invalid.

```tsx
<IgrRadio invalid={true}></IgrRadio>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioInvalid extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "25px", border: "1px solid gainsboro"}}>
                    <IgrRadio value="banana" invalid={true}><span>Invalid</span></IgrRadio>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioInvalid/>);
```


### Disabled

You can use the `disabled` attribute to disable the radio.

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" disabled={true}><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioDisabled extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "25px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="fruit" value="banana" disabled={true}><span>Banana</span></IgrRadio>
                        <IgrRadio name="fruit" value="Mango"><span>Mango</span></IgrRadio>
                        <IgrRadio name="fruit" value="apple"><span>Apple</span></IgrRadio>
                        <IgrRadio name="fruit" value="orange"><span>Orange</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioDisabled/>);
```


### Group Alignment

The [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html) allows you to easily change the placement directionality of the radio buttons it contains using the `alignment` attribute. Allowed values are `vertical`(default) and `horizontal`.

```tsx
<IgrRadioGroup alignment="horizontal">
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" disabled={true}><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioAlignment extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "25px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="fruit" value="apple"><span>Apple</span></IgrRadio>
                        <IgrRadio name="fruit" value="banana" checked={true}><span>Banana</span></IgrRadio>
                        <IgrRadio name="fruit" value="Mango"><span>Mango</span></IgrRadio>
                        <IgrRadio name="fruit" value="orange"><span>Orange</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioAlignment/>);
```


### Forms

You can use the `name` and `value` attributes when using the radio with `Form`.

```tsx
<IgrRadioGroup>
  <IgrRadio name="fruit" value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio name="fruit" value="banana"><span>Banana</span></IgrRadio>
  <IgrRadio name="fruit" value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio name="fruit" value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

## Styling

The [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html) component exposes several CSS parts (`base`, `control`, and `label`) to give you full control over its styling.

```css
igc-radio::part(control) {
  --size: 18px;
}

igc-radio-group {
  padding: 12px;
}

igc-radio::part(checked)::after {
  background-color: var(--ig-success-500);
}

igc-radio::part(label) {
  color: var(--ig-secondary-800);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
:root {
    --igc-primary-h: 60deg;
    --igc-primary-s: 100%;
    --igc-primary-l: 25%;
}

igc-radio::part(control) {
    --size: 18px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default class RadioStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "120px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="vertical">
                        <IgrRadio name="fruit" value="apple"><span>Apple</span></IgrRadio>
                        <IgrRadio name="fruit" value="banana" checked={true}><span>Banana</span></IgrRadio>
                        <IgrRadio name="fruit" value="Mango"><span>Mango</span></IgrRadio>
                        <IgrRadio name="fruit" value="orange"><span>Orange</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioStyling/>);
```


<div class="divider--half"></div>

## API References

- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
