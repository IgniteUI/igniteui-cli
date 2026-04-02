---
title: React Circular Progress | Circular Progress | Infragistics
_description: Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: React Circular Progress, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["CircularProgress", "CircularGradient"]
namespace: Infragistics.Controls
_tocName: Circular Progress
---

# React Circular Progress Overview

The Ignite UI for React Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.

## React Circular Progress Example

```css
igc-circular-progress {
    --diameter: 100px;
    --stroke-thickness: 5px;
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
import { IgrCircularProgress, IgrCircularProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './CircularProgressStyle.css'

IgrCircularProgressModule.register();

export default class SimpleCircularProgressIndicator extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCircularProgress value={100} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SimpleCircularProgressIndicator/>);
```


<div class="divider--half"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrCircularProgressModule, IgrCircularProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrCircularProgressModule.register();
```

The simplest way to start using the [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html) is as follows:

```tsx
<IgrCircularProgress value="100"></IgrCircularProgress>
```

### Progress Types

You can set the type of your indicator, using the [`variant`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#variant) attribute. There are five types of circular progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```tsx
<IgrCircularProgress value="100" variant="success"></IgrCircularProgress>
```

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`indeterminate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#indeterminate) property. Also, you can hide the default label of the Ignite UI for React [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html) by setting the [`hideLabel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#hideLabel) property and customize the progress indicator default label via the exposed [`labelFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#labelFormat) property.

```tsx
<IgrCircularProgress value="100" indeterminate="true"></IgrCircularProgress>
```

The following sample demonstrates the above configuration:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCircularProgress, IgrCircularProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCircularProgressModule.register();

export default class IndeterminateCircularProgress extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrCircularProgress indeterminate={true} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndeterminateCircularProgress/>);
```


<div class="divider--half"></div>

### Animation Duration

You can use the [`animationDuration`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrprogressbase.html#animationDuration) property on the [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html) component to specify how long the animation cycle should take in milliseconds.

```tsx
<IgrCircularProgress animationDuration="5000" indeterminate="true"></IgrCircularProgress>
```

### Gradient Progress

Customizing the progress bar in order to use a color gradient instead of a solid color could be done via the exposed `gradient` slot and [`IgrCircularGradient`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcirculargradient.html) which defines the gradient stops.

```css
igc-circular-progress {
    --diameter: 100px;
    --stroke-thickness: 5px;
}

.sample-content {
    width: 300px;
    display: flex;
    align-items: center;
    margin-top: 30px;
}

.circular-progress-container {
    margin-right: 50px;
    margin-left: 20px;
}

.buttons-container {
    display: flex;
    gap: 10px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCircularProgress, IgrCircularGradient, IgrIconButton, IgrCircularProgressModule, IgrCircularGradientModule, IgrIconButtonModule, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './DynamicCircularProgressStyle.css';

IgrCircularProgressModule.register();
IgrCircularGradientModule.register();
IgrIconButtonModule.register();

const addIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
const removeIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';

export default function DynamicCircularProgress() {

    const [currentValue, setCurrentValue] = useState<number>(0);

    useEffect(() => {
        registerIconFromText("add", addIconText, "material");
        registerIconFromText("remove", removeIconText, "material");
    }, []);

    const incrementProgress = () => {
        setCurrentValue((oldValue) => {
           const newValue = oldValue + 10;
           if (newValue > 100) {
             return 100;
           }
            return newValue;
        });
    }

    const decrementProgress = () => {
        setCurrentValue((oldValue) => {
            const newValue = oldValue - 10;
            if (newValue < 0) {
              return 0;
            }
             return newValue;
        });
    }

    return (
        <div className="sample-content">
            <IgrCircularProgress className="circular-progress-container" max={100} value={currentValue}>
                <IgrCircularGradient slot="gradient" offset="0%" color="#ff9a40">
                </IgrCircularGradient>
                <IgrCircularGradient slot="gradient" offset="50%" color="#1eccd4">
                </IgrCircularGradient>
                <IgrCircularGradient slot="gradient" offset="100%" color="#ff0079">
                </IgrCircularGradient>
            </IgrCircularProgress>
            <div className="buttons-container">
                <IgrIconButton className="removeIcon" name="remove" collection="material" onClick={decrementProgress}>
                </IgrIconButton>
                <IgrIconButton className="addIcon" name="add" collection="material" onClick={incrementProgress}>
                </IgrIconButton>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DynamicCircularProgress/>);
```


> [!Note]
> For each [`IgrCircularGradient`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcirculargradient.html) defined as gradient slot of Ignite UI for React [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html) a [SVG stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) element would be created. The values passed as `color`, `offset` and `opacity` would be set as stop-color, offset and stop-opacity of the SVG element without further validations.

```tsx
<IgrCircularProgress >
    <IgrCircularGradient slot="gradient" offset="0%" color="#ff9a40">
    </IgrCircularGradient>
    <IgrCircularGradient slot="gradient" offset="50%" color="#1eccd4">
    </IgrCircularGradient>
    <IgrCircularGradient slot="gradient" offset="100%" color="#ff0079">
    </IgrCircularGradient>
</IgrCircularProgress>
```

<div class="divider--half"></div>

## Styling

The [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html) component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `svg`               | The progress SVG element.                |
| `gradient_start`     | The progress linear-gradient start color. |
| `gradient_end`       | The progress linear-gradient end color.  |
| `track`              | The progress ring's track area.          |
| `fill`               | The progress indicator area.             |
| `label`              | The progress label.                      |
| `value`              | The progress label value.                |
| `indeterminate`      | The progress indeterminate state.        |
| `primary`            | The progress indicator primary state.    |
| `danger`             | The progress indicator error state.      |
| `warning`            | The progress indicator warning state.    |
| `info`               | The progress indicator info state.       |
| `success`            | The progress indicator success state.    |

Using this CSS parts we have almost full control over the Circular Progress styling.

```css

igc-circular-progress {
  margin: 20px;
  --diameter: 50px;
}

igc-circular-progress::part(gradient_end),
igc-circular-progress::part(gradient_start) {
  stop-color: var(--ig-success-200);
}

igc-circular-progress::part(track) {
  stroke: var(--ig-gray-400);
}

```

```css
igc-circular-progress {
    --diameter: 100px;
    --stroke-thickness: 5px;
    margin: 20px;
}

gc-circular-progress::part(gradient_end),
igc-circular-progress::part(gradient_start){
    stop-color: #72da67;
}

igc-circular-progress::part(track){
    stroke: rgb(216, 211, 211);
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
import { IgrCircularProgress, IgrCircularProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './CircularProgressStyle.css'

IgrCircularProgressModule.register();

export default class StylingCircularProgressIndicator extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCircularProgress indeterminate={true}/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StylingCircularProgressIndicator/>);
```


## API References

- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html)
- [`IgrCircularGradient`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcirculargradient.html)
- [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
