---
title: React Snackbar | Infragistics
_description: With Ignite UI for React Snackbar component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Snackbar components
_license: MIT
mentionedTypes: ["Snackbar"]
_tocName: Snackbar
---

# React Snackbar

The Ignite UI for React Snackbar component is used to provide feedback about an operation by showing a brief message at the bottom of the screen.

## Ignite UI for React Snackbar Example

This sample demonstrates how to create [`IgrSnackbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html) component.

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SnackbarOverview() {
    const snackbarRef = useRef<IgrSnackbar>(null);

    const onShowButtonClicked = () => {
        snackbarRef.current?.show();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Snackbar</span>
            </IgrButton>

            <IgrSnackbar ref={snackbarRef}>
                <span>Snackbar Message</span>
            </IgrSnackbar>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SnackbarOverview />);
```


<div class="divider--half"></div>

### Usage

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrSnackbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html) and its necessary CSS, like so:

```tsx
import { IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the snackbar component is to use its [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#show) method and call it on a button click.

```tsx
<IgrButton variant="contained" onClick={onShowButtonClicked}>
    <span>Show Snackbar</span>
</IgrButton>
<IgrSnackbar ref={snackbarRef}>
    <span>Snackbar Message</span>
</IgrSnackbar>

const snackbarRef = useRef<IgrSnackbar>(null);

const onShowButtonClicked = () => {
      if (snackbarRef) {
          snackbarRef.current.show();
      }
  }
```

## Examples

### Display Time

Use the [`displayTime`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#displayTime) property to configure how long the snackbar component is visible. By default, it's set to 4000 milliseconds.

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SnackbarDisplayTime() {
    const snackbarRef = useRef<IgrSnackbar>(null);

    const onShowButtonClicked = () => {
        snackbarRef.current?.show();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Snackbar</span>
            </IgrButton>

            <IgrSnackbar ref={snackbarRef} displayTime={6000}>
                <span>Snackbar with different display time</span>
            </IgrSnackbar>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SnackbarDisplayTime />);
```


### Action Text

By default, the snackbar component is hidden automatically after a period specified by the [`displayTime`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#displayTime). You can use [`keepOpen`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#keepOpen) property to change this behavior. In this way, the snackbar will remain visible. Using the snackbar [`actionText`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html#actionText) you can display an action button inside the component.

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SnackbarActionText() {
    const snackbarRef = useRef<IgrSnackbar>(null);

    const onShowButtonClicked = () => {
        snackbarRef.current?.show();
    };

    const onSnackbarActionClicked = () => {
        snackbarRef.current?.hide();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Snackbar</span>
            </IgrButton>

            <IgrSnackbar
                ref={snackbarRef}
                keepOpen={true}
                actionText="Close"
                onAction={onSnackbarActionClicked}
            >
                <span>Snackbar with enabled keep-open option</span>
            </IgrSnackbar>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SnackbarActionText />);
```


## Styling

The [`IgrSnackbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html) component exposes several CSS parts to give you full control over its styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the snackbar component. |
| `message` | The snackbar message. |
| `action` | The default snackbar action button. |
| `action-container` | The area holding the actions. |

```css
igc-snackbar::part(base) {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
  color: white;
}
```

```css
igc-snackbar::part(base) {
    background: #0d6efd;
    border-color: #0d6efd;
    color: white;
}
```
```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './SnackbarStyling.css';
import { IgrButton, IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SnackbarStyling() {
    const snackbarRef = useRef<IgrSnackbar>(null);

    const onShowButtonClicked = () => {
        snackbarRef.current?.show();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Snackbar</span>
            </IgrButton>

            <IgrSnackbar ref={snackbarRef}>
                <span>Styled Snackbar</span>
            </IgrSnackbar>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SnackbarStyling />);
```


<div class="divider--half"></div>

## API References

- [`actionText`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html#actionText)
- [`displayTime`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#displayTime)
- [`keepOpen`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#keepOpen)
- [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#show)
- [`IgrSnackbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsnackbar.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
