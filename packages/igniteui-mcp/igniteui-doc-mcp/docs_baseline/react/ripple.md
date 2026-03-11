---
title: React Ripple
_description: With Ignite UI for React Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Ripple components, React Ripple controls
_license: MIT
mentionedTypes: ["Ripple", "Button"]
_tocName: Ripple
---

# React Ripple Overview

The Ignite UI for React Ripple component creates an animation in response to a touch or a mouse click.

## React Ripple Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRipple, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RippleButton() {

    return (
        <div className="container-center sample">
            <IgrButton>
                <IgrRipple></IgrRipple>
                <span>Ripple Button</span>
            </IgrButton>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RippleButton/>);
```


## Usage

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrRipple`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrripple.html) and its necessary CSS, like so:

```tsx
import { IgrRipple } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

```tsx
<IgrButton>
  <IgrRipple></IgrRipple>
  <span>Ripple Button</span>
</IgrButton>
```

You can add the [`IgrRipple`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrripple.html) component to any web element as long as its CSS `position` property is set to any other value than `static`;

## Examples

### Color

You can change the color of the ripple by setting the `--color` CSS property to any valid CSS color:

```css
igc-ripple {
  --color: olive;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-ripple {
    --color: yellow;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRipple, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RippleColor() {

    return (
        <div className="container-center sample">
            <IgrButton>
                <IgrRipple></IgrRipple>
                <span>Ripple Button</span>
            </IgrButton>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RippleColor/>);
```


## API References

- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrRipple`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrripple.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
