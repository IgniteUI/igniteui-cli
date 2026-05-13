---
title: React Linear Progress | Linear Progress | Infragistics
_description: Display a progress bar and customize its appearance with endless color and striping options with Linear Progress Indicator component.
_keywords: React Linear Progress, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["LinearProgress"]
_tocName: Linear Progress
---

# React Linear Progress Overview

The Ignite UI for React Linear Progress Indicator component provides a visual indicator of an application’s process as it changes. The [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html) indicator updates its appearance as its state changes. Also, you can style this component with a choice of colors in stripes or solids.

## React Linear Progress Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrLinearProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrLinearProgressModule.register();

export default class SimpleLinearProgressIndicator extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrLinearProgress value={100} ></IgrLinearProgress>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SimpleLinearProgressIndicator/>);
```

<div class="divider--half"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrLinearProgressModule, IgrLinearProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrLinearProgressModule.register();
```

The simplest way to start using the [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html) is as follows:

```tsx
<IgrLinearProgress value="100"></IgrLinearProgress>
```

### Progress Types

You can set the type of your indicator, using  the [`variant`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#variant) attribute. There are five types of linear progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```tsx
<IgrLinearProgress value="100" variant="success"></IgrLinearProgress>
```

### Striped Progress

You can make the indicator striped, using the [`striped`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html#striped) property:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrLinearProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrLinearProgressModule.register();

export default class LinearProgressTypes extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrLinearProgress value={100}variant="primary" />
                 <IgrLinearProgress value={100}variant="success" striped={true} />
                 <IgrLinearProgress value={100}variant="danger" />
                 <IgrLinearProgress value={100}variant="info" striped={true} />
                 <IgrLinearProgress value={100}variant="warning" />

            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearProgressTypes/>);
```

<div class="divider--half"></div>

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`indeterminate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#indeterminate) property.

### Animation Duration

The [`animationDuration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#animationDuration) property is used to specify how long the animation cycle should take. It takes as value a number which represents the animation duration in milliseconds.

```tsx
<IgrLinearProgress animationDuration="5000" indeterminate="true"></IgrLinearProgress>
```

### Text Properties

You can align the default value, using the [`labelAlign`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html#labelAlign) property. Permitted values are **top**, **bottom**, **top-start**, **top-end**, **bottom-start** and **bottom-end**.

To hide the default label of the progress indicator, use the [`hideLabel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#hideLabel) attribute.

The [`labelFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#labelFormat) property can be used to customize the [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html) default label.

The following sample demonstrates the above configuration:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrLinearProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrLinearProgressModule.register();

export default class StripedLinearProgress extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="primary" />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="success" indeterminate={true} striped={true} />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="danger" />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="info" striped={true} />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="warning"/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StripedLinearProgress/>);
```

<div class="divider--half"></div>

### Dynamic Progress

You can dynamically change the value of the progress indicator by using external controls like buttons. To achieve this, we can bind the value to a class property:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrIconButton, IgrLinearProgressModule, IgrIconButtonModule, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrLinearProgressModule.register();
IgrIconButtonModule.register();

const addIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
const removeIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';

export default class DynamicLinearProgress extends React.Component<any, any> {

    public linearProgress: IgrLinearProgress;
    constructor(props: any) {
        super(props);       
        
        this.linearProgressRef = this.linearProgressRef.bind(this);
        registerIconFromText(
            "add", addIconText, "material"
        );
        registerIconFromText(
            "remove", removeIconText, "material"
        );
        this.onIconClick = this.onIconClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrLinearProgress ref={this.linearProgressRef} style={{marginRight: "50px", marginLeft: "20px"}} max={100} value={100} labelAlign="bottom-start">
                </IgrLinearProgress>
                <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "20px", marginLeft: "20px"}} onClick={this.onIconClick}>
                    <IgrIconButton className="removeIcon" name="remove" collection="material">
                    </IgrIconButton>
                    <IgrIconButton className="addIcon" name="add" collection="material">
                    </IgrIconButton>
                </div>
            </div>
        );
    }

    public linearProgressRef(progress: IgrLinearProgress)
    {
        if(!progress) { return; }
        this.linearProgress = progress;
    }

    public onIconClick(e: any) {
        const target = e.target as HTMLElement;
        const iconButton: any = target.closest('igc-icon-button');
        if(iconButton.getAttribute("class") === "removeIcon")
        {
            if(this.linearProgress.value > 0) {
                this.linearProgress.value = this.linearProgress.value - 10;
            }
            else {
                this.linearProgress.value = 0;
            }
        }
        else {
            this.linearProgress.value = this.linearProgress.value + 10;
        }

    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DynamicLinearProgress/>);
```

<div class="divider--half"></div>

## Styling

The [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html) component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `track`         | The progress ring's track area. |
| `fill`          | The progress indicator area. |
| `striped`       | The progress striped indicator. |
| `label`         | The progress indicator label. |
| `value`         | The progress label value. |
| `indeterminate` | The progress indeterminate state. |
| `primary`       | The progress indicator primary state. |
| `danger`        | The progress indicator error state. |
| `warning`       | The progress indicator warning state. |
| `info`          | The progress indicator info state. |
| `success`       | The progress indicator success state. |

Using this CSS parts we have almost full control of the Linear Progress styling.

```css
igc-linear-progress::part(track){
    background-color: #D3D3D3
}

igc-linear-progress::part(fill){
    background-color: #ECAA53
}

igc-linear-progress::part(label){
    color: #ECAA53
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
import { IgrLinearProgress, IgrLinearProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './LinearProgressStyling.css';

IgrLinearProgressModule.register();

export default class StylingLinearProgressIndicator extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrLinearProgress value={100} ></IgrLinearProgress>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StylingLinearProgressIndicator/>);
```

```css
igc-linear-progress::part(track){
  background-color: var(--ig-gray-300)
}

igc-linear-progress::part(fill){
  background-color: var(--ig-primary-300)
}

igc-linear-progress::part(label){
  color: var(--ig-primary-300)
}
```

## API References

- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html)
- [`IgrLinearProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlinearprogress.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
