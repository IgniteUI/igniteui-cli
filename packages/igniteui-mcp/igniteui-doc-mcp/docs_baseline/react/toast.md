---
title: React Toast Notifications | Ignite UI for React
_description: With Ignite UI for React Toast component, developers can easily integrate a brief, single-line message within mobile and desktop applications. Try it Now
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Toast components
_license: MIT
mentionedTypes: ["Toast"]
_tocName: Toast
---

# React Toast Overview

The React Toast is a super lightweight and small pop-up component that is used for displaying a message content, notifying end-users about the status of a changed record. You can easily position and show React toast notifications at the bottom or at any other specified area of the screen. Or you can also dismiss them in a simple and easy way.

The React Toast component is primarily used for system messaging, push notifications, warning messages, and information. It cannot be dismissed by the user. This control has different features like animation effects, display time property to configure how long the toast component is visible, styling, and others.

## React Toast Example

Take a look at the simple Ignite UI for React Toast example below. The animated notification message pops up after clicking on the button.

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ToastOverview() {
    const toastRef = useRef<IgrToast>(null);

    const onShowButtonClicked = () => {
        toastRef.current?.show();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Toast</span>
            </IgrButton>

            <IgrToast ref={toastRef}>
                <span>Toast Message</span>
            </IgrToast>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToastOverview />);
```

<div class="divider--half"></div>

### How To Use Ignite UI for React Toast Notification

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the React [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html) and its necessary CSS, like so:

```tsx
import { IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Before using the React [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html), you need to register it as follows:

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the toast component is to use its [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#show) method and call it on a button click.

```tsx
<IgrButton variant="contained" onClick={onShowButtonClicked}>
    <span>Show Toast</span>
</IgrButton>

<IgrToast ref={toastRef}>
    <span>Toast Message</span>
</IgrToast>

const toastRef = useRef<IgrToast>(null);

const onShowButtonClicked = () => {
        toastRef.current?.show();
    };
```

## Examples

### Properties

Use the [`displayTime`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#displayTime) property to configure how long the toast component is visible. By default, it's set to 4000 milliseconds.

By default, the toast component is hidden automatically after a period specified by the [`displayTime`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#displayTime). You can use [`keepOpen`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#keepOpen) property to change this behavior. In this way, the toast will remain visible.

```tsx
<div>
    <IgrButton variant="contained" onClick={onToggleButtonClicked}>
        <span>Toggle Toast</span>
    </IgrButton>
    <IgrButton variant="contained" onClick={onKeepOpenButtonClicked}>
        <span>Toggle keepOpen Property</span>
    </IgrButton>
    <IgrButton variant="contained" onClick={onDisplayTimeButtonClicked}>
        <span>Set DisplayTime to 8000</span>
    </IgrButton>
</div>

<IgrToast ref={toastRef}>
    <span>Toast Message</span>
</IgrToast>

const toastRef = useRef<IgrToast>(null);

const onToggleButtonClicked = () => {
    toastRef.current?.toggle();
};

const onKeepOpenButtonClicked = () => {
    if (toastRef.current) {
        toastRef.current.keepOpen = !toastRef.current.keepOpen;
    }
};

const onDisplayTimeButtonClicked = () => {
    if (toastRef.current) {
        toastRef.current.displayTime = 8000;
    }
};
```

```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ToastProperties() {
    const toastRef = useRef<IgrToast>(null);

    const onToggleButtonClicked = () => {
        toastRef.current?.toggle();
    };

    const onKeepOpenButtonClicked = () => {
        if (toastRef.current) {
            toastRef.current.keepOpen = !toastRef.current.keepOpen;
        }
    };

    const onDisplayTimeButtonClicked = () => {
        if (toastRef.current) {
            toastRef.current.displayTime = 8000;
        }
    };

    return (
        <div className="container sample">
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px'}}>
                <IgrButton variant="contained" onClick={onToggleButtonClicked}>
                    <span>Toggle Toast</span>
                </IgrButton>
                <IgrButton variant="contained" onClick={onKeepOpenButtonClicked}>
                    <span>Toggle keepOpen Property</span>
                </IgrButton>
                <IgrButton variant="contained" onClick={onDisplayTimeButtonClicked}>
                    <span>Set DisplayTime to 8000</span>
                </IgrButton>
            </div>

            <IgrToast ref={toastRef}>
                <span>Toast Message</span>
            </IgrToast>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToastProperties />);
```

## Styling

You can style the React [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html) notifications directly using its tag selector:

```css
igc-toast {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
```

```css
igc-toast {
    background: #011627;
    color: #ECAA53;
    outline-color: #ECAA53;
}
```
```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ToastStyling.css';
import { IgrButton, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ToastStyling() {
    const toastRef = useRef<IgrToast>(null);

    const onShowButtonClicked = () => {
        toastRef.current?.show();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Styled Toast</span>
            </IgrButton>

            <IgrToast ref={toastRef}>
                <span>Styled Message</span>
            </IgrToast>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToastStyling />);
```

<div class="divider--half"></div>

## API References

- [`IgrCalendar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcalendar.html)
- [`displayTime`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#displayTime)
- [`keepOpen`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#keepOpen)
- [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbasealertlike.html#show)
- [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
