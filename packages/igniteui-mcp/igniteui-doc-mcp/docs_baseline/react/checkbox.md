---
title: "React Checkbox Component | Ignite UI for React"
description: Learn how to use the React Checkbox Component to add checkboxes and enable checked, unchecked or indeterminate state for end-users.
keywords: "Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Checkbox components, React Checkbox controls"
license: MIT
mentionedTypes: ["Checkbox", "Form"]
llms:
  description: "The React Checkbox is a component that lets you add checkboxes to your React apps."
_tocName: Checkbox
---
# React Checkbox Overview

The React Checkbox is a component that lets you add checkboxes to your React apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the React checkbox component and ability to use it with forms.

## Checkbox Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox>
                    <span>Checkbox</span>
                </IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxOverview/>);
```

## Usage

At its core, the [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) and its necessary CSS, like so:

```tsx
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) is as follows:

```tsx
<IgrCheckbox></IgrCheckbox>
```

**Warning:** 
The [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the checkbox, simply place some text between the opening and closing tags:

```tsx
<IgrCheckbox><span>Label</span></IgrCheckbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=labelPosition) attribute of the checkbox. Allowed values are `before` and `after` (default):

```tsx
<IgrCheckbox labelPosition="before"></IgrCheckbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```tsx
<>
    <span id="checkbox-label">Label</span>
    <IgrCheckbox aria-labelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
</>
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
import './CheckboxLabelStyles.css'
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox labelPosition="before">Label</IgrCheckbox>
                <div className="wrapper">
                    <span id="checkbox-label">Label</span>
                    <IgrCheckbox aria-labelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxLabel/>);
```

### Checked

You can use the [`Checked`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=checked) attribute of the component to determine whether the checkbox should be toggled on or off by default.

```tsx
<IgrCheckbox checked={true}></IgrCheckbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxChecked extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox checked={true}>
                    <span>Label</span>
                </IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxChecked/>);
```

### Indeterminate

You can use the [`Indeterminate`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=indeterminate) property of the component to set the checkbox's value to neither **true** nor **false**.

```tsx
<IgrCheckbox indeterminate={true}></IgrCheckbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox, IgrCheckboxModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxIndeterminate extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox indeterminate={true}>
                    <span>Label</span>
                </IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxIndeterminate/>);
```

### Required

You can use the [`Required`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=required) property to mark the checkbox as required.

```tsx
<IgrCheckbox required={true}></IgrCheckbox>
```

### Invalid

You can use the [`Invalid`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=invalid) attribute to mark the checkbox as invalid.

```tsx
<IgrCheckbox invalid={true}></IgrCheckbox>
```

### Disabled

You can use the [`Disabled`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=disabled) attribute to disable the checkbox.

```tsx
<IgrCheckbox disabled={true}></IgrCheckbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxDisabled extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox disabled={true}>
                    <span>Label</span>
                </IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxDisabled/>);
```

### Forms

You can use the [`Name`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=name) and [`Value`](mcp:get_api_reference?platform=react&component=IgrCheckbox&member=value) attributes when using the checkbox with `Form`.

```tsx
<IgrCheckbox name="wifi" value="enabled"></IgrCheckbox>
```

## Styling

The [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) component exposes four CSS parts which we can use for styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the checkbox. |
| `control` | The checkbox input element. |
| `indicator` | The checkbox indicator icon. |
| `label` | The checkbox label. |

With this four CSS parts we have full control over the Checkbox styling.

```css
igc-checkbox::part(indicator) {
  --tick-color: var(--ig-secondary-500-contrast); /* check icon color */
}

igc-checkbox::part(control checked)::after {
  --fill-color: var(--ig-secondary-500); /* checkbox background color */
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-checkbox::part(indicator) {
  --tick-color: var(--ig-secondary-500-contrast); /* check icon color */
}
  
igc-checkbox::part(control checked)::after {
  --fill-color: var(--ig-secondary-500); /* checkbox background color */
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox>
                    <span>Checkbox</span>
                </IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxStyling/>);
```

## API References
[`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox)
## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
