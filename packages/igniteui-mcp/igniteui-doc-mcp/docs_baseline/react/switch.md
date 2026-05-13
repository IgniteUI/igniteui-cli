---
title: React Switch Component – Ignite UI for React
_description: Ignite UI for React Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Switch components, React Switch controls
mentionedTypes: ["Switch"]
_license: MIT
_tocName: Switch
---

# React Switch

The Ignite UI for React Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## React Switch Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchOverview() {

    return (
        <div className="container sample">
            <IgrSwitch></IgrSwitch>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchOverview/>);
```

<div class="divider--half"></div>

## Usage

At its core, the [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html) component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html) and its necessary CSS, like so:

```tsx
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html) is as follows:

```tsx
<IgrSwitch></IgrSwitch>
```

> [!WARNING]
> The [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```tsx
<IgrSwitch><span>Label</span></IgrSwitch>
```

You can specify if the label should be positioned before or after the switch toggle by setting the [`labelPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxbase.html#labelPosition) attribute of the switch. Allowed values are `before` and `after`(default):

```tsx
<IgrSwitch aria-labelledby="switchLabel" labelPosition="before" ><span id="switch-label">Label</span></IgrSwitch>
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```tsx
<span id="switch-label">Label</span>
<IgrSwitch aria-labelledby="switchLabel"></IgrSwitch>
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
import './SwitchLabelStyles.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchLabel() {

    return (
        <div className="sample">
            <IgrSwitch labelPosition="before">Label</IgrSwitch>
            <div className="wrapper">
                <IgrSwitch aria-labelledby="switchLabel" labelPosition="before"><span id="switch-label">Label</span></IgrSwitch>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchLabel/>);
```

### Checked

You can use the `checked` attribute to toggle on the switch.

```tsx
<IgrSwitch checked={true}></IgrSwitch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchOutlined() {

    return (
        <div className="container sample">
            <IgrSwitch checked={true} ><span>Label</span></IgrSwitch>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchOutlined/>);
```

### Required

You can use the `required` attribute to mark the switch as required.

```tsx
<IgrSwitch required={true}></IgrSwitch>
```

### Invalid

You can use the `invalid` attribute to mark the switch as invalid.

### Disabled

You can use the `disabled` attribute to disable the switch.

```tsx
<IgrSwitch disabled="true"></IgrSwitch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchDisabled() {

    return (
        <div className="container sample">
             <IgrSwitch disabled={true} />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchDisabled/>);
```

### Forms

You can use the `name` and `value` attributes when using the switch with `Form`.

```tsx
<IgrSwitch name="wifi" value="enabled"></IgrSwitch>
```

## Styling

The [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html) component exposes several CSS parts to give you full control over its styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the switch. |
| `control` | The switch input element. |
| `thumb` | The position indicator of the switch. |
| `label` | The switch label. |

```css
  igc-switch {
    --thumb-on-color: white;
    --thumb-off-color: var(--ig-success-500);
    --track-on-color: var(--ig-success-500); /* Background color when checked */
    --track-off-color: white; /* Background color when unchecked */
    --track-on-hover-color: var(--ig-success-500); /* Background hover color when checked */
  }
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

  igc-switch {
    --thumb-on-color: white;
    --thumb-off-color: var(--ig-success-500);
    --track-on-color: var(--ig-success-500); /* Background color when checked */
    --track-off-color: white; /* Background color when unchecked */
    --track-on-hover-color: var(--ig-success-500); /* Background hover color when checked */
  }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchStyling() {

    return (
        <div className="container sample">
            <IgrSwitch checked={true} ><span>Label</span></IgrSwitch>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchStyling/>);
```

<div class="divider--half"></div>

## API References

- [`labelPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxbase.html#labelPosition)
- [`IgrSwitch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrswitch.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
